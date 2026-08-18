import { readFile, writeFile } from 'node:fs/promises';
const topicId = process.argv[2] ?? 'education:foundations-of-education:what-is-education';
const review = JSON.parse(await readFile('content/phase-1/review/education-what-is-education.json','utf8'));
if (review.id !== topicId || review.status !== 'source-verified') throw new Error(`Review record does not match the requested topic or is not source-verified: ${topicId}`);
const progressPath = 'content/phase-1/content-progress.json'; const progress = JSON.parse(await readFile(progressPath,'utf8')); const topic = progress.topics.find(item => item.id === topicId); if (!topic) throw new Error(`Topic not found: ${topicId}`);
topic.status = review.status; topic.sourceIds = review.sources; topic.public = false; topic.reviewedAt = review.provenance.researchedAt; topic.rightsStatus = review.provenance.rightsStatus;
const registryPath = 'content/phase-1/source-registry.json'; const registry = JSON.parse(await readFile(registryPath,'utf8')); const reviewSources = JSON.parse(await readFile('content/phase-1/review/source-registry.json','utf8')); const existing = new Set(registry.map(source => source.id)); for (const source of reviewSources) if (!existing.has(source.id)) registry.push(source);
const lessonsPath = 'public/content/phase-1/lessons.json'; const lessons = JSON.parse(await readFile(lessonsPath,'utf8')); const index = lessons.findIndex(lesson => lesson.id === topicId); if (index >= 0) lessons[index] = review;
await Promise.all([writeFile(progressPath, `${JSON.stringify(progress, null, 2)}\n`), writeFile(registryPath, `${JSON.stringify(registry, null, 2)}\n`), writeFile(lessonsPath, JSON.stringify(lessons))]); console.log(`Promoted ${topicId} to ${review.status}; public=${topic.public}.`);
