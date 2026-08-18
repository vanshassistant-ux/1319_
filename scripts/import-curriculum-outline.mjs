/** Converts the owner-authored curriculum outline into a durable, structured planning artifact. */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const input = process.argv[2] ?? 'curriculum/master-curriculum-outline.md';
const output = 'curriculum/master-curriculum.json';
const runtimeOutput = 'src/content/master-curriculum.json';
const slugify = value => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const lines = (await readFile(input, 'utf8')).replace(/\r/g, '').split('\n');
const heading = /^([0-9]+)\. ([A-Z][A-Z &/—-]+)$/;
const subjectStarts = lines.map((line, index) => ({ match: line.match(heading), index })).filter(row => row.match);
const subjects = subjectStarts.map((row, index) => {
  const end = subjectStarts[index + 1]?.index ?? lines.length;
  const title = row.match[2].replace(/—/g, '—').replace(/\s+/g, ' ').trim();
  const body = lines.slice(row.index + 1, end);
  const units = [];
  const unitStarts = body.map((line, i) => ({ line, i })).filter(row => /^Unit [0-9]+ — /.test(row.line));
  for (let unitIndex = 0; unitIndex < unitStarts.length; unitIndex++) {
    const current = unitStarts[unitIndex]; const unitEnd = unitStarts[unitIndex + 1]?.i ?? body.length;
    const unitTitle = current.line.replace(/^Unit [0-9]+ — /, '').trim(); const unitLines = body.slice(current.i + 1, unitEnd);
    const topics = unitLines.map(line => line.match(/^([0-9]+)\. (.+)$/)?.[2]).filter(Boolean).filter(topic => !/^Recommended/.test(topic));
    units.push({ slug: slugify(unitTitle), title: unitTitle, topics: topics.map(topic => ({ slug: slugify(topic), title: topic })) });
  }
  if (!units.length) {
    const ignored = /^(Recommended|Subject Goal|Cover:|Target|Suitable|This should|Avoid|Stage|Publish:|Expand to:|Add:|Do not|Each subject|The goal|Core|Foundations$|Microeconomics$|Macroeconomics$|International Economics$|Content Depth|Initial Release)/;
    const candidates = body.map(line => line.trim()).filter(line => line && !ignored.test(line) && !line.startsWith('*') && !line.endsWith(':'));
    const namedTopics = candidates.filter(line => !line.includes('lessons') && line.length < 80).slice(0, 50);
    units.push({ slug: 'foundations', title: 'Foundations', topics: namedTopics.map(topic => ({ slug: slugify(topic), title: topic })) });
  }
  return { id: `subject-${row.match[1]}`, order: Number(row.match[1]), slug: slugify(title), title: title.replace(/\bAnd\b/g, '&'), units };
});
const collections = [
  ['professional-studies', 'Professional Studies', [1,2,4,5,6,7,8]],
  ['technology', 'Technology', [9,10,11,12,13,14,15,16]],
  ['business-money', 'Business & Money', [17,18,19,20,21,22,23,24,25]],
  ['humanities-culture', 'Humanities & Culture', [26,27,28,29,30,31,32]],
  ['science-health', 'Science & Health', [33,34,35,36,37,40]],
  ['society-government', 'Society & Government', [3,38,39,41,42,43,44]],
].map(([slug, title, orders]) => ({ slug, title, subjectSlugs: subjects.filter(subject => orders.includes(subject.order)).map(subject => subject.slug) }));
const document = { schemaVersion: 1, source: 'Owner-authored EliExplains Master Subject & Topic Curriculum Outline', lessonFormat: ['In 30 Seconds','Learning Goals','The College Version','Key Vocabulary','Eli-10 Explanation',"Eli's Analogy",'Worked Example / Real Example','Common Mistakes','Key Takeaway','Quick Check','Sources & Lesson Status'], collections, subjects };
await mkdir(dirname(output), { recursive: true }); await mkdir(dirname(runtimeOutput), { recursive: true }); await Promise.all([writeFile(output, `${JSON.stringify(document, null, 2)}\n`), writeFile(runtimeOutput, `${JSON.stringify(document, null, 2)}\n`)]);
console.log(`Curriculum imported: ${subjects.length} subjects, ${subjects.reduce((total, subject) => total + subject.units.reduce((sum, unit) => sum + unit.topics.length, 0), 0)} named topic candidates.`);
