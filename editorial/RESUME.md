# Resume point

Read this first on every new run, then `editorial/reports/EDITORIAL_PROGRESS.md`.

## Current position

- **Education is COMPLETE** — 21/21 topics, audited (0 issues), reported at
  `editorial/reports/subjects/education.md`.
- **Social Work & Human Services is COMPLETE** — 20/20 topics, audited (0 issues), reported
  at `editorial/reports/subjects/social-work-and-human-services.md`.
- **Criminal Justice & Criminology is COMPLETE** — 28/28 topics, audited (0 issues),
  reported at `editorial/reports/subjects/criminal-justice-and-criminology.md`.
- **Engineering Fundamentals is COMPLETE** — 28/28 topics, audited (0 issues), reported at
  `editorial/reports/subjects/engineering-fundamentals.md`.
- **Health Administration is COMPLETE** — 24/24 topics, audited (0 issues), reported at
  `editorial/reports/subjects/health-administration.md`.
- **Hospitality and Tourism is COMPLETE** — 20/20 topics, audited (0 issues), reported at
  `editorial/reports/subjects/hospitality-and-tourism.md`.
- **Graphic Design and Digital Media is COMPLETE** — 28/28 topics, audited (0 issues),
  reported at `editorial/reports/subjects/graphic-design-and-digital-media.md`.
- **Environmental Sustainability is COMPLETE** — 25/25 topics, audited (0 issues), reported
  at `editorial/reports/subjects/environmental-sustainability.md`. (Note: queue entry 25,
  slug `part-ii-computer-and-technology`, was a mis-ingested section header repurposed into a
  real lesson titled "Sustainable Computing and E-Waste".)

  **RESUMED 2026-08-19 in this `1319_DIR` copy (operator direction: "continue from where
  Hermes left off").** This directory — `/Users/moomoo/Desktop/1319_DIR` — is now the live
  working repository. Total: **194 / 1,319** topics, 8 / 44 subjects.

  **Runtime here: `bun` only (no `node` on PATH).** All `.mjs` pipeline scripts run under
  bun, and the `npm run editorial:*` aliases (which hardcode bun) work as written. The
  START_HERE / HERMES handoff docs assume a Node VM and say the npm aliases fail — that is
  false on this Mac. Use `bun run editorial:*` or `bun scripts/...` directly. Run
  `npm install` once before typecheck/build only.

  Next subject: `computer-literacy` (25 topics). The init script does not create
  `source-map.json` — hand-write it (a practical/technical subject: hardware, OS, files,
  internet, productivity apps, security basics; describe software categories generically
  without endorsing products; keep security guidance educational; date any statistic).
  Watch for mis-ingested "PART ..." section-header queue entries as in env-sustainability.

  Answer-key note: ask for an EVEN spread across A/B/C/D with "at least one D" — that phrasing
  produced the best balance so far (graphic design 38/36/31/35). Workers frequently MISREPORT
  their own key positions, so always verify keys by reading the review JSON.

- **No other subject may be started** until the current one has zero unprocessed topics,
  a subject audit, and a subject report.
- Authoritative state lives in `content/phase-1/content-progress.json`. A topic is
  processed if and only if it carries an `editorialStatus`. Never estimate counts by
  hand — run `bun run editorial:progress`.

## Next action

Initialize `hospitality-and-tourism` (`bun run editorial:init 1 hospitality-and-tourism`),
hand-write its `source-map.json`, then assign the next unprocessed topic in
`editorial/subjects/hospitality-and-tourism/topic-queue.json` to a FRESH single-topic
worker (see `editorial/TOPIC_AGENT_BRIEF.md`). Up to ~8 workers may run at once, but every
one of them must belong to the current subject, and each worker gets exactly one topic.
Queue order is the processing order. Give each worker the sibling topic-id list so it
populates `relatedTopics` itself, and tell it to distribute answer keys evenly across
A/B/C/D. Verify every answer key against the file (workers can misreport their own keys).

Read the current subject's `source-map.json` first; its cautions are binding on every topic.

**Known issue to fix in the next worker brief:** answer keys skew away from position D
across three consecutive subjects (Social Work 20/34/31/15, Criminal Justice 29/49/43/19,
Engineering 33/48/40/19). Tell workers to distribute keys evenly rather than letting the
correct answer drift toward the middle options.

Up to 5 workers may run at once. Give each one explicit scope boundaries against the
other topics in flight, since parallel workers cannot read each other's output.

## The loop

1. Launch fresh workers (one topic each) with the brief.
2. Workers self-validate with `bun scripts/editorial-accept-topic.mjs 1 <topic-id> --dry-run`.
   Workers must NOT run the gate without `--dry-run`; only the orchestrator merges,
   because the shared stores cannot take concurrent writes.
3. Orchestrator independently reviews each topic — correct topic, no unrelated files
   touched, sources resolve, spot-check the highest-risk facts against live sources,
   verify every answer key personally.
4. Orchestrator merges: `bun scripts/editorial-accept-topic.mjs 1 <topic-id>`.
   If the gate rejects on "already registered with a different URL", run
   `bun run editorial:align 1 <subject-slug> <topic-slug>` to see the two URLs, confirm they
   are the same document, then rerun it with `--apply` and accept again. Do NOT align two
   genuinely different documents — give the new one its own id.
5. `bun run editorial:progress`, then the next batch.

## When the current subject reaches zero unprocessed topics

Stop launching workers. Run `bun scripts/editorial-audit-subject.mjs 1 <subject-slug>`
and drive it to zero issues — fixing what is wrong, and recording anything genuinely
correct in that subject's `audit-exceptions.json` with a stated reason. Then write
`editorial/reports/subjects/<subject-slug>.md` following the Education report as the
template, update global progress, and only then initialize the next subject with
`bun run editorial:init 1 <next-subject-slug>`.

Phase 1 subject order after social work: criminal-justice-and-criminology,
engineering-fundamentals, health-administration, hospitality-and-tourism,
graphic-design-and-digital-media, environmental-sustainability, computer-literacy,
computer-science-fundamentals, python-programming.

## Publication policy

Accepted topics land at `READY_TO_PUBLISH` (`status: source-verified`, `public: false`),
matching the precedent set by the first reviewed topic in this repository. Nothing is
served publicly until the owner signs off. Flipping a topic to `PUBLISHED` is a
deliberate owner decision, not something a worker or the orchestrator does on its own.
