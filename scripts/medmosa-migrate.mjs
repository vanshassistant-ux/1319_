/** Read-only MedMosa inventory and deterministic EliExplains staging generator. */
import { createHash } from 'node:crypto';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';

const sourceRoot = process.env.MEDMOSA_SOURCE ?? '/Users/moomoo/Desktop/1_/_Web_v';
const outputRoot = 'migration/medmosa';
const now = new Date().toISOString();
const bucket = {
  'anatomy-physiology': { title: 'Anatomy & Physiology', courses: ['anatomy-physiology-1','anatomy-physiology-2','human-physiology-1','human-physiology-2'] },
  biology: { title: 'Biology', courses: ['biology-1','biology-2','general-ecology'] },
  'cell-biology': { title: 'Cell Biology', courses: ['cell-biology'] },
  'general-chemistry': { title: 'General Chemistry', courses: ['general-chemistry-1','general-chemistry-2'] },
  'organic-chemistry': { title: 'Organic Chemistry', courses: ['organic-chemistry-1','organic-chemistry-2'] },
  biochemistry: { title: 'Biochemistry', courses: ['biochemistry'] },
  microbiology: { title: 'Microbiology', courses: ['microbiology'] },
  genetics: { title: 'Genetics', courses: ['genetics'] },
  physics: { title: 'Physics', courses: ['physics-1','physics-2'] },
  psychology: { title: 'Psychology', courses: ['introduction-to-psychology','developmental-psychology'] },
  nutrition: { title: 'Nutrition', courses: ['nutrition'] },
  'public-health': { title: 'Public Health', courses: ['population-public-health'] },
  statistics: { title: 'Statistics & Evidence-Based Practice', courses: ['evidence-based-practice-basic-statistics'] },
  'medical-terminology': { title: 'Medical Terminology', courses: ['medical-terminology'] },
  'healthcare-communication': { title: 'Healthcare Communication', courses: ['healthcare-communication'] },
  'ethics-professionalism': { title: 'Ethics & Professionalism', courses: ['healthcare-ethics-professionalism'] },
  'patient-safety': { title: 'Patient Safety & Infection Prevention', courses: ['patient-safety'] },
};
const explicitlyHeld = new Set(['pathophysiology','pharmacology-foundations','clinical-judgment','clinical-mnemonics','cna-exam-prep','fundamentals-of-nursing-practice','health-assessment','medical-office-assistant','nursing-math-dosage','respiratory-therapy','sleep-technology']);
const subjectForCourse = new Map(Object.entries(bucket).flatMap(([subject, value]) => value.courses.map(course => [course, subject])));
const hash = value => createHash('sha256').update(value).digest('hex');
const readJson = async path => JSON.parse(await readFile(path, 'utf8'));
const writeJson = async (path, data) => { await mkdir(dirname(path), { recursive: true }); await writeFile(path, `${JSON.stringify(data, null, 2)}\n`); };
const normalized = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const sourceSubjectsDir = join(sourceRoot, 'content-v2/subjects');
const catalog = await readJson(join(sourceRoot, 'content-v2/catalog.json'));
const registry = await readJson(join(sourceRoot, 'content-v2/indexes/source-registry.json'));
const sourceRecords = registry.sources ?? [];
const sourceById = new Map(sourceRecords.map(record => [record.id, record]));
const sourceSubjectSlugs = catalog.subjects.map(entry => entry.slug);
const courses = [];
const topics = [];
const questions = [];

for (const courseSlug of sourceSubjectSlugs) {
  const courseDoc = await readJson(join(sourceSubjectsDir, courseSlug, 'subject.json'));
  const course = courseDoc.subject;
  const targetSubjectSlug = subjectForCourse.get(courseSlug);
  const courseStatus = targetSubjectSlug ? (explicitlyHeld.has(courseSlug) ? 'HELD' : 'MAPPED') : 'OUT_OF_SCOPE';
  courses.push({ sourceProject: 'MedMosa', sourceCourseId: course.id, sourceCourseSlug: courseSlug, sourceTitle: course.title, sourceStatus: course.status, targetSubjectSlug, migrationStatus: courseStatus });
  for (const unit of courseDoc.units ?? []) for (const topicMeta of unit.topics ?? []) {
    const sourcePath = topicMeta.bundlePath;
    const bundle = await readJson(join(sourceRoot, sourcePath));
    const imported = bundle.provenance?.importedWithoutRewriting === true;
    const hasRefs = (bundle.sections?.references?.length ?? 0) > 0;
    let migrationStatus = 'out-of-scope'; let rightsStatus = 'DEFERRED';
    if (explicitlyHeld.has(courseSlug) || bundle.status === 'final_requires_citation_review') { migrationStatus = 'held'; rightsStatus = 'HELD'; }
    else if (!targetSubjectSlug) { migrationStatus = 'out-of-scope'; rightsStatus = 'DEFERRED'; }
    else if (bundle.status !== 'final') { migrationStatus = 'deferred'; rightsStatus = 'DEFERRED'; }
    else if (imported) { migrationStatus = 'needs-source-review'; rightsStatus = 'NEEDS_SOURCE_REVIEW'; }
    else { migrationStatus = 'ready'; rightsStatus = 'READY_FOR_ADAPTATION'; }
    topics.push({
      sourceProject: 'MedMosa', sourceCourseId: course.id, sourceCourseSlug: courseSlug, sourceTopicId: bundle.id, sourceTopicSlug: bundle.slug, sourcePath, sourceContentHash: hash(JSON.stringify(bundle)), sourceTitle: bundle.title,
      targetSubjectSlug, targetCategorySlug: targetSubjectSlug ? unit.slug : undefined, targetTopicSlug: bundle.slug, targetTitle: bundle.title,
      migrationStatus, rightsStatus, sourceStatus: bundle.status, hasCollegeExplanation: Boolean(bundle.sections?.collegeNotes), hasEli10: Boolean(bundle.sections?.eli10), hasReferences: hasRefs, hasQuestions: (bundle.availability?.exactQuestions ?? 0) > 0,
      sourceCollection: bundle.provenance?.sourceCollection, importedWithoutRewriting: imported, notes: imported ? 'Source bundle is explicitly imported without rewriting and its collection has no recorded reuse license; publication is blocked pending source review.' : undefined,
    });
  }
  const questionDoc = await readJson(join(sourceSubjectsDir, courseSlug, 'questions.json'));
  for (const question of [...(questionDoc.questions ?? []), ...(questionDoc.subjectWideQuestions ?? []), ...(questionDoc.deferred ?? [])]) {
    const sourceTopicIds = question.mappedCanonicalTopicIds ?? [];
    const mapped = sourceTopicIds.some(id => topics.some(topic => topic.sourceTopicId === id && topic.targetSubjectSlug));
    const medical = explicitlyHeld.has(courseSlug) || question.citationReviewRequired === true;
    const classification = medical ? (explicitlyHeld.has(courseSlug) ? 'MEDICAL_REVIEW' : 'NEEDS_CITATION_REVIEW') : question.provenance?.importedWithoutRewriting ? 'NEEDS_CITATION_REVIEW' : mapped ? 'READY' : 'UNMAPPED';
    questions.push({ sourceProject: 'MedMosa', id: question.id, sourceCourseSlug: courseSlug, sourceTopicIds, mapped, classification, citationReviewRequired: Boolean(question.citationReviewRequired), hasRationale: Boolean(question.rationales?.whyCorrect), correctAnswer: question.correctAnswer, optionCount: question.options?.length ?? 0, provenancePath: question.provenance?.sourceFile, sourceContentHash: hash(JSON.stringify(question)) });
  }
}

const duplicateGroups = new Map();
const targetRouteGroups = new Map();
for (const topic of topics.filter(topic => topic.targetSubjectSlug)) { const key = `${topic.targetSubjectSlug}/${topic.targetTopicSlug}`; targetRouteGroups.set(key, [...(targetRouteGroups.get(key) ?? []), topic]); }
for (const group of targetRouteGroups.values()) if (group.length > 1) for (const topic of group) topic.targetTopicSlug = `${topic.sourceCourseSlug}-${topic.targetTopicSlug}-${hash(topic.sourceTopicId).slice(0, 6)}`;
for (const topic of topics.filter(topic => topic.targetSubjectSlug)) { const key = normalized(topic.sourceTitle); duplicateGroups.set(key, [...(duplicateGroups.get(key) ?? []), topic]); }
const duplicateCandidates = [...duplicateGroups.values()].filter(group => group.length > 1).map(group => ({ classification: group.every(topic => topic.targetSubjectSlug === group[0].targetSubjectSlug) ? 'LIKELY_DUPLICATE' : 'RELATED_BUT_DISTINCT', normalizedTitle: normalized(group[0].sourceTitle), topics: group.map(topic => ({ sourceTopicId: topic.sourceTopicId, sourceCourseSlug: topic.sourceCourseSlug, title: topic.sourceTitle, targetSubjectSlug: topic.targetSubjectSlug })) }));
for (const candidate of duplicateCandidates) for (const ref of candidate.topics) { const topic = topics.find(item => item.sourceTopicId === ref.sourceTopicId); if (topic) topic.duplicateCandidates = candidate.topics.filter(other => other.sourceTopicId !== topic.sourceTopicId).map(other => other.sourceTopicId); }
const launchTopics = topics.filter(topic => topic.migrationStatus === 'ready' && topic.rightsStatus === 'READY_FOR_ADAPTATION');
const sourceReview = topics.filter(topic => topic.migrationStatus === 'needs-source-review');
const held = topics.filter(topic => topic.migrationStatus === 'held');
const summary = { generatedAt: now, sourceRepository: 'Vansh07652/_Web_v', sourceRoot, sourceCoursesDiscovered: courses.length, sourceTopicsDiscovered: topics.length, candidateBucketATopics: topics.filter(topic => topic.targetSubjectSlug).length, mappedTopics: topics.filter(topic => topic.targetSubjectSlug).length, launchReadyTopics: launchTopics.length, importedTopics: 0, deferredTopics: topics.filter(topic => topic.migrationStatus === 'deferred').length, heldTopics: held.length, needsSourceReview: sourceReview.length, needsContentReview: topics.filter(topic => topic.migrationStatus === 'needs-content-review').length, outOfScopeTopics: topics.filter(topic => topic.migrationStatus === 'out-of-scope').length, duplicateCandidates: duplicateCandidates.length, questionsEvaluated: questions.length, questionsApproved: questions.filter(question => question.classification === 'READY').length, questionsCitationReview: questions.filter(question => question.classification === 'NEEDS_CITATION_REVIEW').length, questionsMedicalReview: questions.filter(question => question.classification === 'MEDICAL_REVIEW').length, sourceRecordsReviewed: sourceRecords.length, explicitLicenseRecords: sourceRecords.filter(source => source.license).length, attributionRequiredRecords: sourceRecords.filter(source => source.attributionRequired === true).length, unknownLicenseRecords: sourceRecords.filter(source => !source.license).length };
const manifest = { schemaVersion: 1, generatedAt: now, source: { project: 'MedMosa', repository: 'Vansh07652/_Web_v', root: sourceRoot, readOnly: true }, policy: { publishOnly: ['READY_FOR_ADAPTATION', 'ATTRIBUTION_REQUIRED'], blockedWhen: ['NEEDS_SOURCE_REVIEW','NEEDS_CONTENT_REVIEW','HELD','DEFERRED'] }, summary, topics: topics.map(topic => ({ sourceTopicId: topic.sourceTopicId, sourceContentHash: topic.sourceContentHash, targetSubjectSlug: topic.targetSubjectSlug, targetCategorySlug: topic.targetCategorySlug, targetTopicSlug: topic.targetTopicSlug, migrationStatus: topic.migrationStatus, rightsStatus: topic.rightsStatus })) };
await rm(outputRoot, { recursive: true, force: true });
await mkdir(join(outputRoot, 'reports'), { recursive: true });
await Promise.all([
  writeJson(join(outputRoot, 'inventory/medmosa-corpus-summary.json'), summary), writeJson(join(outputRoot, 'inventory/courses.json'), courses), writeJson(join(outputRoot, 'inventory/topics.json'), topics), writeJson(join(outputRoot, 'inventory/questions.json'), questions), writeJson(join(outputRoot, 'inventory/sources.json'), sourceRecords),
  writeJson(join(outputRoot, 'taxonomy/eliexplains-subject-taxonomy.json'), Object.entries(bucket).map(([slug, value]) => ({ slug, title: value.title, sourceCourses: value.courses }))), writeJson(join(outputRoot, 'taxonomy/course-map.json'), courses), writeJson(join(outputRoot, 'taxonomy/topic-map.json'), topics),
  writeJson(join(outputRoot, 'review/duplicate-candidates.json'), duplicateCandidates), writeJson(join(outputRoot, 'review/source-review-required.json'), sourceReview), writeJson(join(outputRoot, 'review/content-review-required.json'), topics.filter(topic => topic.migrationStatus === 'needs-content-review')), writeJson(join(outputRoot, 'review/medical-review-held.json'), held), writeJson(join(outputRoot, 'review/question-review-required.json'), questions.filter(question => question.classification !== 'READY')), writeJson(join(outputRoot, 'review/unmapped-topics.json'), topics.filter(topic => !topic.targetSubjectSlug)),
  writeJson(join(outputRoot, 'manifests/migration-manifest.json'), manifest), writeJson(join(outputRoot, 'manifests/imported-topics.json'), []), writeJson(join(outputRoot, 'manifests/skipped-topics.json'), topics.filter(topic => topic.migrationStatus !== 'ready')),
]);
const coverage = Object.entries(bucket).map(([slug, subject]) => { const rows = topics.filter(topic => topic.targetSubjectSlug === slug); return `## ${subject.title}\n\n- Source courses: ${subject.courses.join(', ')}\n- Topics: ${rows.length}\n- Launch: ${rows.filter(row => row.migrationStatus === 'ready').length}\n- Needs source review: ${rows.filter(row => row.migrationStatus === 'needs-source-review').length}\n- Held: ${rows.filter(row => row.migrationStatus === 'held').length}`; }).join('\n\n');
await writeFile(join(outputRoot, 'reports/migration-summary.md'), `# MedMosa Bucket A migration summary\n\nGenerated: ${now}\n\nThe source corpus was read only. Every current topic bundle declares \`importedWithoutRewriting: true\`; collection records do not establish reuse licences. Therefore no lesson prose or questions were imported or published. This is a safety gate, not a content-quality judgement.\n\n${Object.entries(summary).map(([key, value]) => `- ${key}: ${value}`).join('\n')}\n`);
await writeFile(join(outputRoot, 'reports/coverage-report.md'), `# Bucket A coverage\n\n${coverage}\n`);
await writeFile(join(outputRoot, 'reports/duplicate-report.md'), `# Duplicate candidates\n\nCandidates are review signals only; none were merged automatically.\n\n${duplicateCandidates.map(candidate => `## ${candidate.normalizedTitle}\n\n- Classification: ${candidate.classification}\n${candidate.topics.map(topic => `- ${topic.sourceCourseSlug}: ${topic.title} (${topic.sourceTopicId})`).join('\n')}`).join('\n\n') || 'No duplicate title candidates found.'}\n`);
await writeFile(join(outputRoot, 'reports/source-review-report.md'), `# Source review queue\n\n${sourceReview.length} Bucket A topics are blocked from publication because their source bundle explicitly records \`importedWithoutRewriting: true\` and the associated collection does not record a reuse licence. The two explicit CC BY records in the registry are reference-host records, not proof that a bundle's copied lesson prose can be republished.\n\nPriority: P1 rights/provenance. Resolve collection-level reuse rights before moving any record to READY_FOR_ADAPTATION.\n`);
await writeFile(join(outputRoot, 'README.md'), `# MedMosa migration staging\n\nGenerated only by \`bun run migration:medmosa:scan\`. The source repository is read-only. This directory stores metadata, hashes, mappings, review queues, and deterministic manifests—not copied MedMosa lesson bodies. A topic cannot be public unless its manifest rights status permits adaptation.\n\nRun \`bun run migration:medmosa:validate\` after scanning.\n`);
console.log(JSON.stringify(summary, null, 2));
