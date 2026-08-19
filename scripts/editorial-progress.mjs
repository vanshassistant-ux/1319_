// Recompute editorial progress from the authoritative content stores.
// Counts are never hand-written. Usage: bun scripts/editorial-progress.mjs
import { readFile, writeFile, readdir } from 'node:fs/promises';

const PHASES = [1, 2, 3, 4];
const PUBLISHED = 'PUBLISHED';
const READY = 'READY_TO_PUBLISH';
const isProcessed = (topic) => Boolean(topic.editorialStatus);
const isReview = (topic) => Boolean(topic.editorialStatus?.startsWith('NEEDS_'));

const curriculum = JSON.parse(await readFile('curriculum/master-curriculum.json', 'utf8'));
const phaseData = new Map();
const subjectPhase = new Map();
for (const phase of PHASES) {
  const data = JSON.parse(await readFile(`content/phase-${phase}/content-progress.json`, 'utf8'));
  phaseData.set(phase, data);
  for (const subject of data.subjects) subjectPhase.set(subject.slug, phase);
}

const allTopics = PHASES.flatMap(phase => phaseData.get(phase).topics.map(topic => ({ ...topic, phase })));
const tally = (topics) => ({
  total: topics.length,
  processed: topics.filter(isProcessed).length,
  published: topics.filter(topic => topic.editorialStatus === PUBLISHED).length,
  ready: topics.filter(topic => topic.editorialStatus === READY).length,
  held: topics.filter(topic => topic.editorialStatus === 'HELD').length,
  review: topics.filter(isReview).length,
  questions: topics.reduce((total, topic) => total + (topic.questionCount ?? 0), 0),
});
const pct = (part, whole) => whole ? `${((part / whole) * 100).toFixed(2)}%` : '0.00%';

const global = tally(allTopics);
const subjects = [...new Set(allTopics.map(topic => topic.subjectSlug))];
const subjectTally = new Map(subjects.map(slug => [slug, tally(allTopics.filter(topic => topic.subjectSlug === slug))]));
const subjectsProcessed = subjects.filter(slug => { const t = subjectTally.get(slug); return t.processed === t.total; }).length;

let sourceCount = 0;
const sourceUsage = {};
for (const phase of PHASES) {
  const registry = JSON.parse(await readFile(`content/phase-${phase}/source-registry.json`, 'utf8'));
  sourceCount += registry.length;
  for (const record of registry) sourceUsage[record.usage ?? 'UNSPECIFIED'] = (sourceUsage[record.usage ?? 'UNSPECIFIED'] ?? 0) + 1;
}

// Per-subject progress files for every initialized subject.
let initialized = [];
try { initialized = await readdir('editorial/subjects'); } catch {}
for (const slug of initialized) {
  const phase = subjectPhase.get(slug);
  if (!phase) continue;
  const topics = allTopics.filter(topic => topic.subjectSlug === slug);
  const record = {
    schemaVersion: 1,
    subjectSlug: slug,
    phase,
    updatedAt: new Date().toISOString(),
    ...tally(topics),
    remaining: topics.length - topics.filter(isProcessed).length,
    nextTopicId: topics.find(topic => !isProcessed(topic))?.id ?? null,
    byStatus: topics.reduce((acc, topic) => { const key = topic.editorialStatus ?? 'UNPROCESSED'; acc[key] = (acc[key] ?? 0) + 1; return acc; }, {}),
  };
  await writeFile(`editorial/subjects/${slug}/progress.json`, `${JSON.stringify(record, null, 2)}\n`);
}

const rows = [];
for (const phase of PHASES) {
  const topics = allTopics.filter(topic => topic.phase === phase);
  const t = tally(topics);
  const phaseSubjects = phaseData.get(phase).subjects.map(subject => subject.slug);
  const done = phaseSubjects.filter(slug => { const s = subjectTally.get(slug); return s.processed === s.total; }).length;
  rows.push(`| ${phase} | ${done} / ${phaseSubjects.length} | ${t.processed} / ${t.total} | ${pct(t.processed, t.total)} |`);
}

const collectionRows = curriculum.collections.map(collection => {
  const topics = allTopics.filter(topic => collection.subjectSlugs.includes(topic.subjectSlug));
  const t = tally(topics);
  const done = collection.subjectSlugs.filter(slug => { const s = subjectTally.get(slug); return s && s.processed === s.total; }).length;
  return `| ${collection.title} | ${done} / ${collection.subjectSlugs.length} | ${t.processed} / ${t.total} | ${pct(t.processed, t.total)} |`;
});

const activeRows = initialized.filter(slug => subjectPhase.has(slug)).map(slug => {
  const t = subjectTally.get(slug);
  return `| ${slug} | ${t.processed} / ${t.total} | ${t.published} | ${t.ready} | ${t.held} | ${t.review} | ${t.total - t.processed} |`;
});

const report = `# ELIEXPLAINS GLOBAL EDITORIAL PROGRESS

Generated: ${new Date().toISOString()}
Counts are computed from the phase content stores by \`bun run editorial:progress\`.

Subjects total: 44
Subjects processed: ${subjectsProcessed}
Subjects remaining: ${44 - subjectsProcessed}
Subject completion: ${pct(subjectsProcessed, 44)}

Total topics: ${global.total}
Topics processed: ${global.processed}
Topics published: ${global.published}
Topics ready to publish: ${global.ready}
Topics held: ${global.held}
Topics requiring review: ${global.review}
Topics remaining: ${global.total - global.processed}
Topic processing: ${pct(global.processed, global.total)}

Verified questions: ${global.questions}
Unique source records: ${sourceCount}
Source usage classes: ${Object.entries(sourceUsage).map(([key, value]) => `${key}=${value}`).join(', ') || 'none'}

## Phase progress

| Phase | Subjects | Topics | Percent |
| --- | --- | --- | --- |
${rows.join('\n')}

## Collection progress

| Collection | Subjects | Topics | Percent |
| --- | --- | --- | --- |
${collectionRows.join('\n')}

## Subjects in progress

| Subject | Processed | Published | Ready | Held | Needs review | Remaining |
| --- | --- | --- | --- | --- | --- | --- |
${activeRows.join('\n') || '| none | | | | | | |'}
`;

await writeFile('editorial/reports/EDITORIAL_PROGRESS.md', report);
console.log(`Topics processed ${global.processed}/${global.total} (${pct(global.processed, global.total)}); subjects ${subjectsProcessed}/44.`);
