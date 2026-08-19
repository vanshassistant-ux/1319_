// Initialize (or refresh) the editorial working set for exactly one subject.
// Usage: bun scripts/editorial-init-subject.mjs <phase> <subject-slug>
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const phase = Number(process.argv[2] ?? 1);
const subjectSlug = process.argv[3];
if (!subjectSlug) throw new Error('Usage: editorial-init-subject.mjs <phase> <subject-slug>');

const progress = JSON.parse(await readFile(`content/phase-${phase}/content-progress.json`, 'utf8'));
const curriculum = JSON.parse(await readFile('curriculum/master-curriculum.json', 'utf8'));

const subject = progress.subjects.find(item => item.slug === subjectSlug);
if (!subject) throw new Error(`Subject not in phase ${phase}: ${subjectSlug}`);
const collection = curriculum.collections.find(item => item.subjectSlugs.includes(subjectSlug));

const topics = progress.topics.filter(topic => topic.subjectSlug === subjectSlug);
const unitOrder = new Map(subject.units.map((unit, index) => [unit.slug, index]));
topics.sort((a, b) => (unitOrder.get(a.unitSlug) ?? 99) - (unitOrder.get(b.unitSlug) ?? 99));

const dir = `editorial/subjects/${subjectSlug}`;
await mkdir(`${dir}/evidence`, { recursive: true });
await mkdir(`${dir}/lessons`, { recursive: true });

const plan = {
  schemaVersion: 1,
  subjectSlug,
  subjectTitle: subject.title,
  phase,
  collection: collection ? { slug: collection.slug, title: collection.title } : null,
  units: subject.units,
  topicCount: topics.length,
  lessonStore: `content/phase-${phase}/review/`,
  sourceRegistry: `content/phase-${phase}/source-registry.json`,
  reviewProfile: [],
  createdAt: new Date().toISOString().slice(0, 10),
};

const queue = {
  schemaVersion: 1,
  subjectSlug,
  phase,
  order: topics.map((topic, index) => ({
    position: index + 1,
    topicId: topic.id,
    unitSlug: topic.unitSlug,
    slug: topic.slug,
    title: topic.title,
    entryStatus: topic.status,
  })),
};

let existingPlan = null;
try { existingPlan = JSON.parse(await readFile(`${dir}/subject-plan.json`, 'utf8')); } catch {}
if (existingPlan?.reviewProfile) plan.reviewProfile = existingPlan.reviewProfile;
if (existingPlan?.createdAt) plan.createdAt = existingPlan.createdAt;

await writeFile(`${dir}/subject-plan.json`, `${JSON.stringify(plan, null, 2)}\n`);
await writeFile(`${dir}/topic-queue.json`, `${JSON.stringify(queue, null, 2)}\n`);
console.log(`Initialized ${subjectSlug} (phase ${phase}): ${topics.length} topics across ${subject.units.length} units.`);
