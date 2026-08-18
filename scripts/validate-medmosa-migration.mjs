import { readFile } from 'node:fs/promises';
const root = 'migration/medmosa';
const read = path => readFile(`${root}/${path}`, 'utf8').then(JSON.parse);
const [manifest, topics, imported] = await Promise.all([read('manifests/migration-manifest.json'), read('inventory/topics.json'), read('manifests/imported-topics.json')]);
const ids = new Set(); const routes = new Set(); let errors = [];
for (const topic of topics) { if (ids.has(topic.sourceTopicId)) errors.push(`Duplicate source topic ID: ${topic.sourceTopicId}`); ids.add(topic.sourceTopicId); if (topic.targetSubjectSlug && topic.targetTopicSlug) { const route = `/subjects/${topic.targetSubjectSlug}/${topic.targetTopicSlug}`; if (routes.has(route)) errors.push(`Duplicate target route: ${route}`); routes.add(route); } }
for (const topic of imported) if (!['READY_FOR_ADAPTATION','ATTRIBUTION_REQUIRED'].includes(topic.rightsStatus)) errors.push(`Unsafe imported topic: ${topic.sourceTopicId}`);
if (manifest.source.readOnly !== true) errors.push('Manifest does not mark MedMosa as read-only.');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Migration validation passed: ${topics.length} topics staged, ${imported.length} topics imported.`);
