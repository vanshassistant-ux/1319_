// Orchestrator gate: validate one topic worker's output and merge it into the
// authoritative content store. Refuses to merge anything that fails the checks.
// Usage: bun scripts/editorial-accept-topic.mjs <phase> <topic-id>
import { readFile, writeFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const phase = Number(process.argv[2] ?? 1);
const topicId = process.argv[3];
const dryRun = process.argv.includes('--dry-run');
if (!topicId) throw new Error('Usage: editorial-accept-topic.mjs <phase> <topic-id> [--dry-run]');

const TERMINAL = new Set(['PUBLISHED','READY_TO_PUBLISH','HELD','NEEDS_SOURCE_REVIEW','NEEDS_RIGHTS_REVIEW','NEEDS_MEDICAL_REVIEW','NEEDS_LEGAL_REVIEW','NEEDS_TECHNICAL_REVIEW','NEEDS_EDITORIAL_REVIEW']);
const STORE_STATUS = { PUBLISHED: 'published', READY_TO_PUBLISH: 'source-verified' };
const USAGE = new Set(['PUBLIC_DOMAIN','CC0','EXTRACT_AND_ADAPT','ATTRIBUTION_REQUIRED','REFERENCE_ONLY','LINK_ONLY','UNKNOWN','HOLD_FOR_REVIEW']);

const words = (text) => String(text ?? '').trim().split(/\s+/).filter(Boolean).length;
const errors = [];
const warn = [];
const check = (condition, message) => { if (!condition) errors.push(message); };

const progressPath = `content/phase-${phase}/content-progress.json`;
const progress = JSON.parse(await readFile(progressPath, 'utf8'));
const topic = progress.topics.find(item => item.id === topicId);
if (!topic) throw new Error(`Topic not found in phase ${phase}: ${topicId}`);

const subjectSlug = topic.subjectSlug;
const lessonPath = `content/phase-${phase}/review/${subjectSlug}-${topic.slug}.json`;
const evidencePath = `editorial/subjects/${subjectSlug}/evidence/${topic.slug}.json`;
const markdownPath = `editorial/subjects/${subjectSlug}/lessons/${topic.slug}.md`;

const lesson = JSON.parse(await readFile(lessonPath, 'utf8'));
const evidence = JSON.parse(await readFile(evidencePath, 'utf8'));
await access(markdownPath);
const markdown = await readFile(markdownPath, 'utf8');

// --- identity -------------------------------------------------------------
check(lesson.id === topicId, `Lesson id mismatch: ${lesson.id}`);
check(evidence.topicId === topicId, `Evidence topicId mismatch: ${evidence.topicId}`);
check(lesson.subjectSlug === subjectSlug && lesson.unitSlug === topic.unitSlug && lesson.slug === topic.slug, 'Lesson curriculum coordinates do not match the topic record.');
check(TERMINAL.has(lesson.editorialStatus), `editorialStatus must be a terminal status; got ${lesson.editorialStatus}`);

// --- source records -------------------------------------------------------
const records = evidence.sourceRecords ?? [];
check(records.length > 0, 'Evidence packet contains no source records.');
const recordIds = new Set();
for (const record of records) {
  check(Boolean(record.id && record.title && record.url && record.provider), `Source record missing required fields: ${record.id ?? '(no id)'}`);
  check(USAGE.has(record.usage), `Source ${record.id} has an invalid usage classification: ${record.usage}`);
  check(Boolean(record.checkedAt), `Source ${record.id} is missing checkedAt.`);
  recordIds.add(record.id);
}
const lessonSources = lesson.sources ?? [];
check(lessonSources.length >= 2 || lesson.editorialStatus !== 'READY_TO_PUBLISH' && lesson.editorialStatus !== 'PUBLISHED', 'A publishable topic needs at least 2 supporting sources.');
for (const id of lessonSources) check(recordIds.has(id), `Lesson cites unknown source: ${id}`);

// --- lesson shape ---------------------------------------------------------
const w30 = words(lesson.in30Seconds);
check(w30 >= 40 && w30 <= 110, `In 30 Seconds should be 40-100 words; got ${w30}.`);
const wWhy = words(lesson.whyItMatters);
check(wWhy >= 50 && wWhy <= 165, `Why This Matters should be 50-150 words; got ${wWhy}.`);
check(Array.isArray(lesson.learningObjectives) && lesson.learningObjectives.length >= 3 && lesson.learningObjectives.length <= 6, 'Learning objectives must number 3-6.');
check(Array.isArray(lesson.collegeVersion) && lesson.collegeVersion.length >= 3, 'The College Version needs at least 3 subsections.');
const wCollege = (lesson.collegeVersion ?? []).reduce((total, section) => total + words(section.body), 0);
check(wCollege >= 600, `The College Version is too thin: ${wCollege} words.`);
if (wCollege > 2100) warn.push(`College Version is long (${wCollege} words).`);
const wEli = words(lesson.eli10?.simplifiedExplanation) + words(lesson.eli10?.analogy) + words(lesson.eli10?.analogyLimits);
check(wEli >= 150 && wEli <= 380, `Eli-10 (explanation + analogy + limits) should be 150-350 words; got ${wEli}.`);
check(Boolean(lesson.eli10?.analogy) && Boolean(lesson.eli10?.analogyLimits), 'Eli-10 requires an analogy and a statement of where the analogy breaks down.');
check(Array.isArray(lesson.vocabulary) && lesson.vocabulary.length >= 5 && lesson.vocabulary.length <= 10, 'Vocabulary must contain 5-10 terms.');
for (const entry of lesson.vocabulary ?? []) {
  check(words(entry.definition) >= 6, `Vocabulary definition too short: ${entry.term}`);
  const term = String(entry.term ?? '').toLowerCase();
  const definitionStart = String(entry.definition ?? '').toLowerCase().slice(0, term.length + 4);
  if (term && definitionStart.includes(term)) warn.push(`Possibly circular definition: ${entry.term}`);
}
check(words(lesson.workedExample) >= 60, 'Worked example is too thin.');
check(Array.isArray(lesson.commonMistakes) && lesson.commonMistakes.length >= 3 && lesson.commonMistakes.length <= 5, 'Common mistakes must number 3-5.');
check(words(lesson.keyTakeaway) >= 15, 'Key takeaway is too thin.');
check(Array.isArray(lesson.relatedTopics), 'relatedTopics must be an array (it may be empty).');

// --- question bank --------------------------------------------------------
const bank = lesson.questionBank ?? [];
check(bank.length === 5, `Question bank must contain exactly 5 questions; got ${bank.length}.`);
const stems = new Set();
const keyCounts = [0, 0, 0, 0];
for (const [index, question] of bank.entries()) {
  const label = `Q${index + 1}`;
  check(Array.isArray(question.options) && question.options.length === 4, `${label}: needs exactly 4 options.`);
  check(Number.isInteger(question.correctIndex) && question.correctIndex >= 0 && question.correctIndex < 4, `${label}: invalid correctIndex.`);
  check(words(question.explanation) >= 8, `${label}: explanation is too thin.`);
  check(Boolean(question.difficulty), `${label}: missing difficulty.`);
  check(Boolean(question.skill), `${label}: missing skill tested.`);
  check(Array.isArray(question.sourceIds) && question.sourceIds.length > 0, `${label}: missing sourceIds.`);
  for (const id of question.sourceIds ?? []) check(recordIds.has(id), `${label}: cites unknown source ${id}.`);
  const stem = String(question.prompt ?? '').toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
  check(!stems.has(stem), `${label}: duplicate question stem.`);
  stems.add(stem);
  if (Number.isInteger(question.correctIndex)) keyCounts[question.correctIndex] += 1;
  const options = new Set((question.options ?? []).map(option => String(option).toLowerCase().trim()));
  check(options.size === (question.options ?? []).length, `${label}: duplicate options.`);
}
check(Math.max(...keyCounts) <= 3, 'Answer key is positionally skewed (more than 3 of 5 in one slot).');
const difficulties = bank.map(question => String(question.difficulty ?? '').toLowerCase());
check(difficulties.filter(value => value === 'recall').length >= 1, 'Question bank needs at least one recall item.');
check(difficulties.some(value => value === 'application' || value === 'analysis'), 'Question bank needs at least one application or analysis item.');

// --- evidence packet ------------------------------------------------------
check(Array.isArray(evidence.claims) && evidence.claims.length >= 5, 'Evidence packet needs at least 5 recorded claims.');
for (const claim of evidence.claims ?? []) {
  check(Boolean(claim.claim && claim.claimType && claim.status), 'Evidence claim is missing claim/claimType/status.');
  check(Array.isArray(claim.sourceIds) && claim.sourceIds.length > 0, `Claim has no sourceIds: ${String(claim.claim).slice(0, 60)}`);
  for (const id of claim.sourceIds ?? []) check(recordIds.has(id), `Claim cites unknown source: ${id}`);
}
check(Boolean(evidence.researchedAt), 'Evidence packet is missing researchedAt.');

// --- markdown lesson ------------------------------------------------------
for (const heading of ['## In 30 Seconds','## Why This Matters','## Learning Objectives','## The College Version','## Key Vocabulary','## Eli-10','## Practice Question Bank','## Sources']) {
  check(markdown.includes(heading), `Markdown lesson is missing section: ${heading}`);
}

// --- generic-draft residue ------------------------------------------------
const blob = JSON.stringify(lesson).toLowerCase();
for (const phrase of ['is a foundational concept in','a college-level explanation names the concept','label on a toolbox drawer','powerful and versatile']) {
  check(!blob.includes(phrase), `Generic draft boilerplate survived: "${phrase}"`);
}

if (errors.length) {
  console.error(`REJECTED ${topicId}\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

if (dryRun) {
  console.log(`VALIDATION PASSED ${topicId} (dry run; nothing merged).`);
  if (warn.length) console.log(`Warnings:\n- ${warn.join('\n- ')}`);
  process.exit(0);
}

// --- merge ----------------------------------------------------------------
const registryPath = `content/phase-${phase}/source-registry.json`;
const registry = JSON.parse(await readFile(registryPath, 'utf8'));
const byId = new Map(registry.map(record => [record.id, record]));
let added = 0;
for (const record of records) {
  const existing = byId.get(record.id);
  if (!existing) { registry.push(record); byId.set(record.id, record); added += 1; continue; }
  if (existing.url !== record.url) { console.error(`REJECTED ${topicId}\n- Source id ${record.id} already registered with a different URL.`); process.exit(1); }
}
registry.sort((a, b) => a.id.localeCompare(b.id));

const hash = createHash('sha256').update(JSON.stringify(lesson)).digest('hex').slice(0, 16);
lesson.contentHash = hash;
lesson.status = STORE_STATUS[lesson.editorialStatus] ?? 'held';
lesson.public = lesson.editorialStatus === 'PUBLISHED';

topic.status = lesson.status;
topic.editorialStatus = lesson.editorialStatus;
topic.sourceIds = lessonSources;
topic.public = lesson.public;
topic.reviewedAt = evidence.researchedAt.slice(0, 10);
topic.rightsStatus = lesson.provenance?.rightsStatus ?? 'unspecified';
topic.contentHash = hash;
topic.questionCount = bank.length;
if (lesson.holdReason) topic.holdReason = lesson.holdReason;

const lessonsPath = `public/content/phase-${phase}/lessons.json`;
const lessons = JSON.parse(await readFile(lessonsPath, 'utf8'));
const index = lessons.findIndex(entry => entry.id === topicId);
if (index >= 0) lessons[index] = lesson; else lessons.push(lesson);

await writeFile(lessonPath, `${JSON.stringify(lesson, null, 2)}\n`);
await writeFile(registryPath, `${JSON.stringify(registry, null, 2)}\n`);
await writeFile(progressPath, `${JSON.stringify(progress, null, 2)}\n`);
await writeFile(lessonsPath, JSON.stringify(lessons));

console.log(`ACCEPTED ${topicId} -> ${lesson.editorialStatus} (hash ${hash}, +${added} source records, ${bank.length} questions)`);
if (warn.length) console.log(`Warnings:\n- ${warn.join('\n- ')}`);
