// When a worker registers an already-known source id under a different URL, the acceptance
// gate rejects the topic. Usually both URLs serve the same document from different official
// hosts (govinfo vs Library of Congress U.S. Reports scans, uscode.house.gov vs Cornell LII,
// a BJS landing page vs its PDF). This aligns the worker's evidence packet to the URL already
// in the registry and records in the note which copy the worker actually read.
//
// It only ever touches records whose id is ALREADY registered — it cannot invent a mapping.
// Review the printed diff: if the two URLs are genuinely different documents, do NOT align;
// give the new document its own id instead.
//
// Usage: bun scripts/editorial-align-source-urls.mjs <phase> <subject-slug> <topic-slug> [--apply]
import { readFile, writeFile } from 'node:fs/promises';

const phase = Number(process.argv[2] ?? 1);
const subjectSlug = process.argv[3];
const topicSlug = process.argv[4];
const apply = process.argv.includes('--apply');
if (!subjectSlug || !topicSlug) throw new Error('Usage: editorial-align-source-urls.mjs <phase> <subject-slug> <topic-slug> [--apply]');

const registry = JSON.parse(await readFile(`content/phase-${phase}/source-registry.json`, 'utf8'));
const known = new Map(registry.map(record => [record.id, record]));
const path = `editorial/subjects/${subjectSlug}/evidence/${topicSlug}.json`;
const evidence = JSON.parse(await readFile(path, 'utf8'));

const collisions = [];
for (const record of evidence.sourceRecords ?? []) {
  const existing = known.get(record.id);
  if (!existing || existing.url === record.url) continue;
  collisions.push({ id: record.id, read: record.url, registered: existing.url, registeredTitle: existing.title });
  if (apply) {
    record.notes = `${record.notes ?? ''} URL aligned to the copy already registered; this worker read ${record.url}.`.trim();
    record.url = existing.url;
  }
}

if (!collisions.length) { console.log('No id/URL collisions.'); process.exit(0); }
for (const c of collisions) {
  console.log(`${c.id}\n  registered: ${c.registered}\n        read: ${c.read}\n       title: ${c.registeredTitle}`);
}
if (!apply) { console.log(`\n${collisions.length} collision(s). Confirm these are the same document, then rerun with --apply.`); process.exit(1); }
await writeFile(path, `${JSON.stringify(evidence, null, 2)}\n`);
console.log(`\nAligned ${collisions.length} record(s) in ${path}.`);
