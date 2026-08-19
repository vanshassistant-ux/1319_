// Subject-wide editorial audit. Reads only; reports. Never edits content.
// Usage: bun scripts/editorial-audit-subject.mjs <phase> <subject-slug>
import { readFile, readdir } from 'node:fs/promises';

const phase = Number(process.argv[2] ?? 1);
const subjectSlug = process.argv[3];
if (!subjectSlug) throw new Error('Usage: editorial-audit-subject.mjs <phase> <subject-slug>');

const progress = JSON.parse(await readFile(`content/phase-${phase}/content-progress.json`, 'utf8'));
const registry = JSON.parse(await readFile(`content/phase-${phase}/source-registry.json`, 'utf8'));
const topics = progress.topics.filter(topic => topic.subjectSlug === subjectSlug);
const allTopicIds = new Set(progress.topics.map(topic => topic.id));

const lessons = [];
for (const topic of topics) {
  if (!topic.editorialStatus) continue;
  lessons.push(JSON.parse(await readFile(`content/phase-${phase}/review/${subjectSlug}-${topic.slug}.json`, 'utf8')));
}

const issues = [];
const notes = [];
let exceptions = { accepted: [] };
try { exceptions = JSON.parse(await readFile(`editorial/subjects/${subjectSlug}/audit-exceptions.json`, 'utf8')); } catch {}
const excused = new Set((exceptions.accepted ?? []).map(item => item.match));
const flag = (kind, message) => {
  for (const key of excused) if (message.includes(key)) { notes.push(`excused ${kind}: ${message}`); return; }
  issues.push(`[${kind}] ${message}`);
};

// ---------- 1. terminology consistency -----------------------------------
const terms = new Map();
for (const lesson of lessons) {
  for (const entry of lesson.vocabulary ?? []) {
    const key = entry.term.trim().toLowerCase();
    if (!terms.has(key)) terms.set(key, []);
    terms.get(key).push({ slug: lesson.slug, definition: entry.definition });
  }
}
const contentWords = (text) => new Set(String(text).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(word => word.length > 3));
for (const [term, entries] of terms) {
  if (entries.length < 2) continue;
  for (let i = 0; i < entries.length; i += 1) {
    for (let j = i + 1; j < entries.length; j += 1) {
      const a = contentWords(entries[i].definition);
      const b = contentWords(entries[j].definition);
      const overlap = [...a].filter(word => b.has(word)).length / Math.max(1, Math.min(a.size, b.size));
      if (overlap < 0.25) flag('TERM', `"${term}" defined differently in ${entries[i].slug} and ${entries[j].slug} (overlap ${(overlap * 100).toFixed(0)}%)`);
    }
  }
  notes.push(`term "${term}" appears in ${entries.length} topics: ${entries.map(entry => entry.slug).join(', ')}`);
}

// ---------- 2. question audit --------------------------------------------
const normalize = (text) => String(text).toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const tokens = (text) => new Set(normalize(text).split(' ').filter(word => word.length > 3));
const questions = lessons.flatMap(lesson => (lesson.questionBank ?? []).map(question => ({ ...question, slug: lesson.slug })));
const keyCounts = [0, 0, 0, 0];
const seenStems = new Map();
for (const question of questions) {
  keyCounts[question.correctIndex] += 1;
  const stem = normalize(question.prompt);
  if (seenStems.has(stem)) flag('QDUP', `identical stem in ${seenStems.get(stem)} and ${question.slug}`);
  seenStems.set(stem, question.slug);
  if (!question.id?.startsWith(`education:`) && !question.id) flag('QID', `question missing id in ${question.slug}`);
}
const stemList = [...seenStems.keys()];
for (let i = 0; i < stemList.length; i += 1) {
  for (let j = i + 1; j < stemList.length; j += 1) {
    const a = tokens(stemList[i]);
    const b = tokens(stemList[j]);
    const inter = [...a].filter(word => b.has(word)).length;
    const jaccard = inter / (a.size + b.size - inter);
    if (jaccard > 0.6) flag('QNEAR', `near-duplicate stems (${(jaccard * 100).toFixed(0)}%): "${stemList[i].slice(0, 60)}" / "${stemList[j].slice(0, 60)}"`);
  }
}
const expected = questions.length / 4;
keyCounts.forEach((count, index) => {
  if (count > expected * 1.6 || count < expected * 0.4) flag('QKEY', `answer position ${index} used ${count} times of ${questions.length} (expected ~${expected.toFixed(0)})`);
});
notes.push(`answer key distribution: ${keyCounts.join(' / ')} across ${questions.length} questions`);

// ---------- 3. source audit ----------------------------------------------
const registryIds = new Set(registry.map(record => record.id));
const cited = new Set();
for (const lesson of lessons) {
  for (const id of lesson.sources ?? []) {
    cited.add(id);
    if (!registryIds.has(id)) flag('SRC', `${lesson.slug} cites unregistered source ${id}`);
  }
  for (const question of lesson.questionBank ?? []) {
    for (const id of question.sourceIds ?? []) if (!registryIds.has(id)) flag('SRC', `${lesson.slug} question cites unregistered source ${id}`);
  }
}
// Orphans are judged against the whole phase, not this subject: the registry is shared,
// and another subject's sources are not orphans just because this subject does not cite them.
const citedPhaseWide = new Set();
for (const topic of progress.topics) {
  if (!topic.editorialStatus) continue;
  for (const id of topic.sourceIds ?? []) citedPhaseWide.add(id);
}
const orphans = [...registryIds].filter(id => !citedPhaseWide.has(id));
if (orphans.length) flag('SRCORPHAN', `${orphans.length} registry records cited by no lesson in phase ${phase}: ${orphans.slice(0, 8).join(', ')}${orphans.length > 8 ? '…' : ''}`);
const urls = new Map();
for (const record of registry) {
  if (urls.has(record.url)) flag('SRCDUP', `same URL under ids ${urls.get(record.url)} and ${record.id}`);
  else urls.set(record.url, record.id);
  if (!record.usage) flag('SRC', `${record.id} has no usage classification`);
  if (record.usage === 'UNKNOWN' || record.usage === 'HOLD_FOR_REVIEW') flag('RIGHTS', `${record.id} has unresolved rights (${record.usage})`);
}

// ---------- 4. related topics --------------------------------------------
for (const lesson of lessons) {
  for (const id of lesson.relatedTopics ?? []) {
    if (!allTopicIds.has(id)) flag('LINK', `${lesson.slug} links to unknown topic ${id}`);
    if (id === lesson.id) flag('LINK', `${lesson.slug} links to itself`);
  }
  if (!(lesson.relatedTopics ?? []).length) flag('LINK', `${lesson.slug} has no related topics`);
}

// ---------- 5. prose reuse across topics ---------------------------------
const shingles = (text, n = 8) => {
  const words = normalize(text).split(' ');
  const out = new Set();
  for (let i = 0; i + n <= words.length; i += 1) out.add(words.slice(i, i + n).join(' '));
  return out;
};
const prose = lessons.map(lesson => ({
  slug: lesson.slug,
  grams: shingles([lesson.in30Seconds, lesson.whyItMatters, ...(lesson.collegeVersion ?? []).map(section => section.body), lesson.eli10?.simplifiedExplanation, lesson.workedExample].join(' ')),
}));
for (let i = 0; i < prose.length; i += 1) {
  for (let j = i + 1; j < prose.length; j += 1) {
    const shared = [...prose[i].grams].filter(gram => prose[j].grams.has(gram));
    if (shared.length > 2) flag('REUSE', `${prose[i].slug} / ${prose[j].slug} share ${shared.length} 8-word sequences, e.g. "${shared[0]}"`);
  }
}

// ---------- 6. grammar and typography ------------------------------------
const files = await readdir(`editorial/subjects/${subjectSlug}/lessons`);
const badPhrases = [/\bit is important to note\b/i, /\bin today's world\b/i, /\bpowerful and versatile\b/i, /\bdelve into\b/i, /\bin conclusion\b/i, /\bplays a (?:vital|crucial|key) role\b/i, /\bnavigate the complexities\b/i];
for (const file of files) {
  const text = await readFile(`editorial/subjects/${subjectSlug}/lessons/${file}`, 'utf8');
  const lines = text.split('\n');
  lines.forEach((line, index) => {
    const where = `${file}:${index + 1}`;
    if (/[a-z] {2,}[a-z]/i.test(line) && !line.startsWith('|') && !line.startsWith('    ')) flag('GRAM', `${where} double space inside a sentence`);
    const repeat = line.match(/\b(\w+)\s+\1\b/i);
    // A single capital letter is a body/point label in mechanics ("B exerts on A a force"), not a doubled word.
    if (repeat && !['that', 'had', 'is', 'in', 'on', 'to'].includes(repeat[1].toLowerCase()) && !/^[A-Z]$/.test(repeat[1])) flag('GRAM', `${where} repeated word "${repeat[1]}"`);
    if ((line.match(/\(/g) ?? []).length !== (line.match(/\)/g) ?? []).length) flag('GRAM', `${where} unbalanced parentheses`);
    if ((line.match(/"/g) ?? []).length % 2 !== 0) flag('GRAM', `${where} odd number of quotation marks`);
    const mathNotation = /[A-Za-z_}\)]\s\.\s[a-zA-Z\\]|\.\.\./;
    if (!mathNotation.test(line) && (/\s+[,;:]|\s+\.(?!\d)/.test(line))) flag('GRAM', `${where} space before punctuation`);
    if (/[a-z],[a-z]/i.test(line) && !/\d,\d/.test(line)) flag('GRAM', `${where} missing space after comma`);
    for (const pattern of badPhrases) if (pattern.test(line)) flag('STYLE', `${where} filler phrase: ${line.match(pattern)[0]}`);
  });
  for (const heading of ['## In 30 Seconds', '## Why This Matters', '## Learning Objectives', '## The College Version', '## Key Vocabulary', '## Eli-10', '## Common Mistakes', '## Key Takeaway', '## Practice Question Bank', '## Sources', '## Related Topics']) {
    if (!text.includes(heading)) flag('MD', `${file} missing ${heading}`);
  }
  if (!/^# /m.test(text)) flag('MD', `${file} has no H1 title`);
}

// ---------- 7. status truthfulness ---------------------------------------
for (const topic of topics) {
  if (!topic.editorialStatus) flag('STATUS', `${topic.slug} is unprocessed`);
  if (topic.public && topic.status !== 'published') flag('STATUS', `${topic.slug} is public without being published`);
  if (topic.editorialStatus && !topic.contentHash) flag('STATUS', `${topic.slug} has no content hash`);
}

// ---------- report --------------------------------------------------------
console.log(`Subject audit: ${subjectSlug} (phase ${phase})`);
console.log(`Topics ${topics.length}, lessons ${lessons.length}, questions ${questions.length}, phase registry ${registry.length}, cited by this subject ${cited.size}`);
console.log(`\n${issues.length} issue(s)`);
for (const issue of issues) console.log(` - ${issue}`);
console.log(`\nNotes`);
for (const note of notes.slice(0, 40)) console.log(` · ${note}`);
process.exitCode = issues.length ? 1 : 0;
