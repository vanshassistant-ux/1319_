// Master topic directory + phase status report across all four phases.
// Reads curriculum/master-curriculum.json and content/phase-{1..4}/content-progress.json.
// Writes editorial/reports/MASTER_TOPIC_DIRECTORY.md, master-topic-directory.{json,csv}, PHASE_STATUS_REPORT.md
// Usage: bun scripts/build-master-directory.mjs
import { readFile, writeFile } from 'node:fs/promises';

const ORIGIN = 'https://eliexplains.org';
const curriculum = JSON.parse(await readFile('curriculum/master-curriculum.json', 'utf8'));
const phases = {};
const subjectPhase = new Map();
for (const phase of [1, 2, 3, 4]) {
  const progress = JSON.parse(await readFile(`content/phase-${phase}/content-progress.json`, 'utf8'));
  phases[phase] = progress;
  for (const topic of progress.topics) subjectPhase.set(topic.subjectSlug, phase);
}
const DONE = new Set(['PUBLISHED', 'READY_TO_PUBLISH']);
const classify = (record) => {
  if (!record) return 'PRUNED';
  if (!record.editorialStatus) return 'NOT_STARTED';
  if (record.editorialStatus === 'PUBLISHED') return 'PUBLISHED';
  if (record.editorialStatus === 'READY_TO_PUBLISH') return 'READY';
  return 'REVIEW';
};
const ACRONYMS = new Set(['UX/UI', 'AI', 'SQL', 'ESL', 'IT']);
const SMALL = new Set(['and', 'or', 'of', 'the', 'in', 'to', 'for', 'a', 'an']);
const nice = (title) => String(title).split(' ').map((w, i) => { const up = w.toUpperCase(); if (ACRONYMS.has(up)) return up; const lower = w.toLowerCase(); if (i > 0 && SMALL.has(lower)) return lower; return lower.charAt(0).toUpperCase() + lower.slice(1); }).join(' ');
const LABEL = { PUBLISHED: '🟢 LIVE', READY: '🔵 READY (unpublished)', REVIEW: '🟠 NEEDS REVIEW', NOT_STARTED: '⚪ NOT STARTED', PRUNED: '⚫ PRUNED (mis-ingested header/note)', EXTRA: '🟣 ADDED (not in master curriculum)' };

const rows = [];
const subjects = [];
for (const subject of [...curriculum.subjects].sort((a, b) => a.order - b.order)) {
  const phase = subjectPhase.get(subject.slug) ?? null;
  const progress = phase ? phases[phase] : null;
  const byId = new Map((progress?.topics ?? []).filter(t => t.subjectSlug === subject.slug).map(t => [t.id, t]));
  const seen = new Set();
  const summary = { slug: subject.slug, title: nice(subject.title), phase, units: [], counts: { PUBLISHED: 0, READY: 0, REVIEW: 0, NOT_STARTED: 0, PRUNED: 0, EXTRA: 0 }, curriculumTotal: 0, genuineTotal: 0 };
  for (const unit of subject.units) {
    const unitRows = [];
    for (const topic of unit.topics) {
      let id = `${subject.slug}:${unit.slug}:${topic.slug}`;
      if (seen.has(id)) { let n = 2; while (seen.has(`${id}-${n}`)) n += 1; id = `${id}-${n}`; } // curriculum lists the same slug twice; the ingest suffixed -2
      const record = byId.get(id); seen.add(id);
      const status = classify(record);
      summary.counts[status] += 1; summary.curriculumTotal += 1; if (status !== 'PRUNED') summary.genuineTotal += 1;
      const row = { phase, subject: subject.slug, subjectTitle: nice(subject.title), unit: unit.slug, unitTitle: unit.title, topic: topic.slug, title: topic.title, id, status, editorialStatus: record?.editorialStatus ?? '', questions: record?.questionCount ?? '', reviewedAt: record?.reviewedAt ?? '', url: status === 'PUBLISHED' ? `${ORIGIN}/subjects/${subject.slug}/${topic.slug}` : '' };
      rows.push(row); unitRows.push(row);
    }
    summary.units.push({ slug: unit.slug, title: unit.title, rows: unitRows });
  }
  // topics that exist in the content store but not in the master curriculum (repurposed/added)
  for (const [id, record] of byId) if (!seen.has(id)) {
    const status = classify(record) === 'NOT_STARTED' ? 'NOT_STARTED' : classify(record);
    const row = { phase, subject: subject.slug, subjectTitle: nice(subject.title), unit: record.unitSlug, unitTitle: record.unitSlug, topic: record.slug, title: record.title ?? record.slug, id, status, editorialStatus: record.editorialStatus ?? '', questions: record.questionCount ?? '', reviewedAt: record.reviewedAt ?? '', url: status === 'PUBLISHED' ? `${ORIGIN}/subjects/${subject.slug}/${record.slug}` : '', extra: true };
    rows.push(row); summary.counts.EXTRA += 1; summary.counts[status] += 1; summary.genuineTotal += 1;
    (summary.units.find(u => u.slug === record.unitSlug) ?? summary.units[summary.units.length - 1]).rows.push(row);
  }
  subjects.push(summary);
}

const total = (key, filter = () => true) => subjects.filter(filter).reduce((n, s) => n + s.counts[key], 0);
const genuine = (filter = () => true) => subjects.filter(filter).reduce((n, s) => n + s.genuineTotal, 0);
const pct = (a, b) => b ? `${(100 * a / b).toFixed(1)}%` : '—';
const generated = new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC';
const doneCount = (f) => total('PUBLISHED', f) + total('READY', f);
const phaseTitle = { 1: 'Phase 1 — LIVE on eliexplains.org', 2: 'Phase 2', 3: 'Phase 3', 4: 'Phase 4' };

// ---------- MASTER DIRECTORY ----------
let md = `# EliExplains — Master Topic Directory\n\nGenerated ${generated} by \`bun scripts/build-master-directory.mjs\` from the master curriculum + the four phase content stores.\n\n`;
md += `**Legend:** ${Object.values(LABEL).join(' · ')}\n\n`;
md += `## Totals\n\n| Scope | Curriculum topics | Genuine topics | 🟢 Live | 🔵 Ready | 🟠 Review | ⚪ Not started | Done (live+ready) |\n|---|---:|---:|---:|---:|---:|---:|---:|\n`;
md += `| **All phases** | ${subjects.reduce((n, s) => n + s.curriculumTotal, 0)} | ${genuine()} | ${total('PUBLISHED')} | ${total('READY')} | ${total('REVIEW')} | ${total('NOT_STARTED')} | **${doneCount()} (${pct(doneCount(), genuine())})** |\n`;
for (const phase of [1, 2, 3, 4]) { const f = s => s.phase === phase; md += `| ${phaseTitle[phase]} | ${subjects.filter(f).reduce((n, s) => n + s.curriculumTotal, 0)} | ${genuine(f)} | ${total('PUBLISHED', f)} | ${total('READY', f)} | ${total('REVIEW', f)} | ${total('NOT_STARTED', f)} | ${doneCount(f)} (${pct(doneCount(f), genuine(f))}) |\n`; }
md += `\n## Contents\n\n`;
for (const phase of [1, 2, 3, 4]) { md += `- **${phaseTitle[phase]}**\n`; for (const s of subjects.filter(s => s.phase === phase)) md += `  - [${s.title}](#${s.slug}) — ${s.counts.PUBLISHED + s.counts.READY}/${s.genuineTotal} done\n`; }
const unassigned = subjects.filter(s => !s.phase); if (unassigned.length) md += `- **Unassigned to any phase:** ${unassigned.map(s => s.title).join(', ')}\n`;
for (const phase of [1, 2, 3, 4]) {
  md += `\n---\n\n# ${phaseTitle[phase]}\n`;
  for (const s of subjects.filter(s => s.phase === phase)) {
    const done = s.counts.PUBLISHED + s.counts.READY;
    const state = done === s.genuineTotal && s.genuineTotal > 0 ? (s.counts.PUBLISHED === s.genuineTotal ? '✅ COMPLETE · LIVE' : '✅ COMPLETE · awaiting publish') : done > 0 ? '🔧 IN PROGRESS' : '⏳ NOT STARTED';
    md += `\n<a id="${s.slug}"></a>\n## ${s.title} — ${state} (${done}/${s.genuineTotal})\n\n`;
    md += `Phase ${phase} · live ${s.counts.PUBLISHED} · ready ${s.counts.READY} · review ${s.counts.REVIEW} · not started ${s.counts.NOT_STARTED}${s.counts.PRUNED ? ` · pruned ${s.counts.PRUNED}` : ''}${s.counts.EXTRA ? ` · added ${s.counts.EXTRA}` : ''}\n\n`;
    md += `| # | Unit | Topic | Status | Qs | Link |\n|---:|---|---|---|---:|---|\n`;
    let i = 0;
    for (const unit of s.units) for (const r of unit.rows) { i += 1; md += `| ${i} | ${unit.title} | ${r.title}${r.extra ? ' *(added)*' : ''} | ${LABEL[r.extra && r.status !== 'PUBLISHED' && r.status !== 'READY' && r.status !== 'REVIEW' ? 'EXTRA' : r.status]} | ${r.questions || ''} | ${r.url ? `[open](${r.url})` : ''} |\n`; }
  }
}
await writeFile('editorial/reports/MASTER_TOPIC_DIRECTORY.md', md);
await writeFile('editorial/reports/master-topic-directory.json', JSON.stringify({ generated, subjects: subjects.map(s => ({ slug: s.slug, title: s.title, phase: s.phase, counts: s.counts, genuineTotal: s.genuineTotal })), topics: rows }, null, 1));
const csvEscape = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
await writeFile('editorial/reports/master-topic-directory.csv', ['phase,subject,subjectTitle,unit,topic,title,status,editorialStatus,questions,reviewedAt,url', ...rows.map(r => [r.phase, r.subject, r.subjectTitle, r.unit, r.topic, r.title, r.status, r.editorialStatus, r.questions, r.reviewedAt, r.url].map(csvEscape).join(','))].join('\n') + '\n');

// ---------- STATUS REPORT ----------
let rep = `# EliExplains — Phase Status Report\n\nGenerated ${generated}. Source of truth: the four phase content stores (\`content/phase-N/content-progress.json\`). Companion files: \`MASTER_TOPIC_DIRECTORY.md\` (every topic, every status), \`master-topic-directory.csv/.json\` (machine-readable).\n\n`;
rep += `## Executive summary\n\n`;
rep += `- **${genuine()} genuine topics** across 44 subjects (the master curriculum lists ${subjects.reduce((n, s) => n + s.curriculumTotal, 0)} entries; ${total('PRUNED')} were mis-ingested section headers/author notes and have been pruned from the queues; ${total('EXTRA')} topics were added/repurposed).\n`;
rep += `- **${doneCount()} topics done (${pct(doneCount(), genuine())})**: ${total('PUBLISHED')} live on eliexplains.org, ${total('READY')} fully gated (\`READY_TO_PUBLISH\`) and waiting only on owner sign-off to publish.\n`;
rep += `- **${total('REVIEW')} topic${total('REVIEW') === 1 ? '' : 's'} need${total('REVIEW') === 1 ? 's' : ''} review** (held/needs-review statuses). **${total('NOT_STARTED')} topics not started.**\n`;
rep += `- Subjects: ${subjects.filter(s => s.genuineTotal && s.counts.PUBLISHED + s.counts.READY === s.genuineTotal).length} complete · ${subjects.filter(s => { const d = s.counts.PUBLISHED + s.counts.READY; return d > 0 && d < s.genuineTotal; }).length} in progress · ${subjects.filter(s => s.counts.PUBLISHED + s.counts.READY === 0).length} not started.\n\n`;
rep += `## By phase\n\n| Phase | Subjects | Genuine topics | Done | Live | Ready | Review | Not started | % done |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|\n`;
for (const phase of [1, 2, 3, 4]) { const f = s => s.phase === phase; rep += `| ${phaseTitle[phase]} | ${subjects.filter(f).length} | ${genuine(f)} | ${doneCount(f)} | ${total('PUBLISHED', f)} | ${total('READY', f)} | ${total('REVIEW', f)} | ${total('NOT_STARTED', f)} | ${pct(doneCount(f), genuine(f))} |\n`; }
rep += `\n## By subject (all 44)\n\n| Phase | Subject | Topics | Done | Live | Ready | Review | Not started | State |\n|---:|---|---:|---:|---:|---:|---:|---:|---|\n`;
for (const phase of [1, 2, 3, 4]) for (const s of subjects.filter(s => s.phase === phase)) { const d = s.counts.PUBLISHED + s.counts.READY; const state = d === s.genuineTotal ? (s.counts.PUBLISHED === s.genuineTotal ? '✅ complete · live' : '✅ complete · unpublished') : d > 0 ? `🔧 in progress (${pct(d, s.genuineTotal)})` : '⏳ not started'; rep += `| ${phase} | ${s.title} | ${s.genuineTotal} | ${d} | ${s.counts.PUBLISHED} | ${s.counts.READY} | ${s.counts.REVIEW} | ${s.counts.NOT_STARTED} | ${state} |\n`; }
rep += `\n## What is DONE\n\n`;
for (const phase of [1, 2, 3, 4]) { const list = subjects.filter(s => s.phase === phase && s.genuineTotal && s.counts.PUBLISHED + s.counts.READY === s.genuineTotal); if (list.length) rep += `- **Phase ${phase}:** ${list.map(s => `${s.title} (${s.genuineTotal})`).join(', ')}\n`; }
rep += `\n## What is IN PROGRESS (partially done)\n\n`;
for (const s of subjects.filter(s => { const d = s.counts.PUBLISHED + s.counts.READY; return d > 0 && d < s.genuineTotal; })) { const remaining = rows.filter(r => r.subject === s.slug && r.status === 'NOT_STARTED').map(r => r.title); rep += `- **${s.title}** (Phase ${s.phase}): ${s.counts.PUBLISHED + s.counts.READY}/${s.genuineTotal} done; ${remaining.length} remaining — ${remaining.slice(0, 8).join('; ')}${remaining.length > 8 ? `; … (+${remaining.length - 8} more, see directory)` : ''}\n`; }
rep += `\n## What is NOT STARTED\n\n`;
for (const phase of [1, 2, 3, 4]) { const list = subjects.filter(s => s.phase === phase && s.counts.PUBLISHED + s.counts.READY === 0); if (list.length) rep += `- **Phase ${phase}:** ${list.map(s => `${s.title} (${s.genuineTotal})`).join(', ')}\n`; }
if (total('REVIEW')) { rep += `\n## Topics needing review\n\n`; for (const r of rows.filter(r => r.status === 'REVIEW')) rep += `- ${r.subjectTitle} › ${r.title} — \`${r.editorialStatus}\`\n`; }
rep += `\n## Pruned curriculum entries (not real topics)\n\n`;
for (const r of rows.filter(r => r.status === 'PRUNED')) rep += `- Phase ${r.phase} · ${r.subjectTitle} › \`${r.topic}\`\n`;
if (total('EXTRA')) { rep += `\n## Topics added beyond the master curriculum\n\n`; for (const r of rows.filter(r => r.extra)) rep += `- Phase ${r.phase} · ${r.subjectTitle} › ${r.title} (${LABEL[r.status]})\n`; }
await writeFile('editorial/reports/PHASE_STATUS_REPORT.md', rep);
console.log(`directory: ${rows.length} rows; genuine ${genuine()}; done ${doneCount()} (${pct(doneCount(), genuine())}); live ${total('PUBLISHED')}; ready ${total('READY')}; review ${total('REVIEW')}; not started ${total('NOT_STARTED')}; pruned ${total('PRUNED')}; extra ${total('EXTRA')}`);
