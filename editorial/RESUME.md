# Resume point

Read this first on every new run, then `editorial/reports/EDITORIAL_PROGRESS.md`.

## Current position

- **Education is COMPLETE** — 21/21 topics, audited (0 issues), reported at
  `editorial/reports/subjects/education.md`.
- **Social Work & Human Services is COMPLETE** — 20/20 topics, audited (0 issues), reported
  at `editorial/reports/subjects/social-work-and-human-services.md`.
- **Current subject:** `criminal-justice-and-criminology` (Phase 1) — 10 of 28 topics
  processed. Units done: Criminal Justice System (4/4), Criminal Law Foundations (3/3).
  Policing is 3 of 5: `search-seizure-and-warrants` and `community-policing` remain, then
  the Courts (5), Corrections (4), and Criminology (7) units.
- **No other subject may be started** until this one has zero unprocessed topics,
  a subject audit, and a subject report.
- Authoritative state lives in `content/phase-1/content-progress.json`. A topic is
  processed if and only if it carries an `editorialStatus`. Never estimate counts by
  hand — run `bun run editorial:progress`.

## Next action

Assign the next unprocessed topic in `editorial/subjects/criminal-justice-and-criminology/topic-queue.json`
to a FRESH single-topic worker (see `editorial/TOPIC_AGENT_BRIEF.md`). Up to 4 workers
may run at once, but every one of them must belong to the current subject, and each
worker gets exactly one topic. Queue order is the processing order.

Read the current subject's `source-map.json` first; its cautions are binding on every topic.
Criminal justice is a LEGAL and POLITICALLY SENSITIVE subject: cite primary authority,
state jurisdiction, give no legal advice, and separate empirical findings from policy
argument without taking sides.

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
