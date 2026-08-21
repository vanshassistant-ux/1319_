// Records a gate-blocked topic as a non-public review item without treating it
// as publishable. This path intentionally does not bypass the acceptance gate.
// Usage: bun scripts/editorial-mark-needs-review.mjs <phase> <topic-id> [--dry-run]
import { readFile, writeFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const phase = Number(process.argv[2] ?? 1);
const topicId = process.argv[3];
const dryRun = process.argv.includes('--dry-run');
if (!topicId) throw new Error('Usage: bun scripts/editorial-mark-needs-review.mjs <phase> <topic-id> [--dry-run]');

const progressPath = `content/phase-${phase}/content-progress.json`;
const progress = JSON.parse(await readFile(progressPath, 'utf8'));
const topic = progress.topics.find(item => item.id === topicId);
if (!topic) throw new Error(`Topic not found in phase ${phase}: ${topicId}`);

const { subjectSlug, unitSlug, slug } = topic;
const lessonPath = `content/phase-${phase}/review/${subjectSlug}-${slug}.json`;
const evidencePath = `editorial/subjects/${subjectSlug}/evidence/${slug}.json`;
const markdownPath = `editorial/subjects/${subjectSlug}/lessons/${slug}.md`;
const lesson = JSON.parse(await readFile(lessonPath, 'utf8'));
const evidence = JSON.parse(await readFile(evidencePath, 'utf8'));
await access(markdownPath);

const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
check(lesson.id === topicId, `Lesson id mismatch: ${lesson.id}`);
check(evidence.topicId === topicId, `Evidence topicId mismatch: ${evidence.topicId}`);
check(lesson.subjectSlug === subjectSlug && lesson.unitSlug === unitSlug && lesson.slug === slug, 'Lesson curriculum coordinates do not match the topic record.');
check(String(lesson.editorialStatus).startsWith('NEEDS_'), `editorialStatus must be a NEEDS_* review status; got ${lesson.editorialStatus}`);
check(Boolean(lesson.reviewNote || lesson.holdReason), 'Review status requires a reviewNote or holdReason documenting the blocker.');
check(Array.isArray(evidence.sourceRecords) && evidence.sourceRecords.length > 0, 'Evidence packet contains no source records.');
const records = evidence.sourceRecords ?? [];
const ids = new Set();
for (const record of records) {
  check(Boolean(record.id && record.title && record.provider && record.url && record.checkedAt), `Source record is incomplete: ${record.id ?? '(no id)'}`);
  ids.add(record.id);
}
for (const id of lesson.sources ?? []) check(ids.has(id), `Lesson cites unknown evidence source: ${id}`);
for (const question of lesson.questionBank ?? []) for (const id of question.sourceIds ?? []) check(ids.has(id), `Question cites unknown evidence source: ${id}`);
if (errors.length) {
  console.error(`REJECTED ${topicId}\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
if (dryRun) {
  console.log(`REVIEW MARK VALIDATION PASSED ${topicId} (dry run; nothing merged).`);
  process.exit(0);
}

const registryPath = `content/phase-${phase}/source-registry.json`;
const registry = JSON.parse(await readFile(registryPath, 'utf8'));
const byId = new Map(registry.map(record => [record.id, record]));
let added = 0;
for (const record of records) {
  const existing = byId.get(record.id);
  if (!existing) { registry.push(record); byId.set(record.id, record); added += 1; continue; }
  if (existing.url !== record.url) throw new Error(`Source id ${record.id} already registered with a different URL.`);
}
registry.sort((a, b) => a.id.localeCompare(b.id));

const hash = createHash('sha256').update(JSON.stringify(lesson)).digest('hex').slice(0, 16);
lesson.contentHash = hash;
lesson.status = 'held';
lesson.public = false;
topic.status = 'held';
topic.editorialStatus = lesson.editorialStatus;
topic.sourceIds = lesson.sources ?? [];
topic.public = false;
topic.reviewedAt = evidence.researchedAt?.slice(0, 10) ?? null;
topic.rightsStatus = lesson.provenance?.rightsStatus ?? 'unspecified';
topic.contentHash = hash;
topic.questionCount = Array.isArray(lesson.questionBank) ? lesson.questionBank.length : 0;
topic.holdReason = lesson.reviewNote ?? lesson.holdReason;

const lessonsPath = `public/content/phase-${phase}/lessons.json`;
const lessons = JSON.parse(await readFile(lessonsPath, 'utf8'));
const index = lessons.findIndex(entry => entry.id === topicId);
if (index >= 0) lessons[index] = lesson; else lessons.push(lesson);

await writeFile(lessonPath, `${JSON.stringify(lesson, null, 2)}\n`);
await writeFile(registryPath, `${JSON.stringify(registry, null, 2)}\n`);
await writeFile(progressPath, `${JSON.stringify(progress, null, 2)}\n`);
await writeFile(lessonsPath, JSON.stringify(lessons));
console.log(`MARKED ${topicId} -> ${lesson.editorialStatus} (hash ${hash}, +${added} source records; not public)`);
