import { mkdir, readFile, writeFile } from 'node:fs/promises';
const curriculum = JSON.parse(await readFile('curriculum/master-curriculum.json', 'utf8'));
const titles = ['EDUCATION','SOCIAL WORK & HUMAN SERVICES','CRIMINAL JUSTICE & CRIMINOLOGY','ENGINEERING FUNDAMENTALS','HEALTH ADMINISTRATION','HOSPITALITY & TOURISM','GRAPHIC DESIGN & DIGITAL MEDIA','ENVIRONMENTAL SUSTAINABILITY','COMPUTER LITERACY','COMPUTER SCIENCE FUNDAMENTALS','PYTHON PROGRAMMING'];
const selected = curriculum.subjects.filter(subject => titles.includes(subject.title));
const topics = selected.flatMap(subject => subject.units.flatMap(unit => unit.topics.map(topic => ({ id: `${subject.slug}:${unit.slug}:${topic.slug}`, subjectSlug: subject.slug, unitSlug: unit.slug, slug: topic.slug, title: topic.title, status: 'planned', sourceIds: [], public: false }))));
const document = { schemaVersion: 1, phase: 1, generatedAt: new Date().toISOString(), source: 'Owner-authored Phase 1 curriculum outline', subjects: selected.map(subject => ({ slug: subject.slug, title: subject.title, status: 'planned', units: subject.units.map(unit => ({ slug: unit.slug, title: unit.title })) })), topics };
await mkdir('content/phase-1', { recursive: true });
await Promise.all([writeFile('content/phase-1/content-progress.json', `${JSON.stringify(document, null, 2)}\n`), writeFile('content/phase-1/source-registry.json', '[]\n')]);
console.log(`Phase 1 planning registry: ${selected.length} subjects, ${topics.length} planned topic records.`);
