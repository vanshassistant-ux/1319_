# PHASE_3_START_HERE — Second Codex agent: do Phase 3 only

You are a SECOND, independent Codex agent. **Your entire job is Phase 3** of the EliExplains
editorial run — 11 subjects, 337 topics. Another agent is handling Phases 1, 2, and 4 in a
different copy of the repo; **you must not touch any phase other than 3**, so your work stays
disjoint and merges back cleanly.

## Where you are

This directory is a **self-contained, standalone git repo** (its own `.git`, no remote — the
push remote was deliberately removed so nothing can be deployed by accident):

```
/Users/moomoo/Desktop/Phase_3_codex
```

Run everything from here. You are on branch `phase-3`.

## Read these first (in order)

1. **`CODEX_READ_THIS.md`** (in this directory) — the FULL operating manual: the runtime, the
   orchestrator/worker loop, the gate, how to write a source-map, the complete audit-fix field
   guide (SRCDUP / REUSE / TERM / QNEAR / GRAM / LINK), and the answer-key verification rule.
   **Everything in it applies to you.** This file only adds what is Phase-3-specific.
2. `editorial/TOPIC_AGENT_BRIEF.md` — the per-topic worker procedure.
3. Skim one completed subject as a model: `editorial/subjects/computer-science-fundamentals/source-map.json`
   and `editorial/reports/subjects/computer-science-fundamentals.md`. Ten subjects are already
   complete in this snapshot — use their source-maps, `audit-exceptions.json`, and reports as templates.

## Runtime

`bun` only — there is no `node` on PATH. Use `bun scripts/<name>.mjs` or the `bun run editorial:*`
aliases. Get real counts with `bun scripts/editorial-progress.mjs` (it will show all four phases;
you only act on Phase 3).

## The phase argument is 3

Every command takes the phase number. For you it is always **3**:

```bash
bun run editorial:init 3 <subject-slug>
bun scripts/editorial-accept-topic.mjs 3 <topic-id> --dry-run   # workers self-check
bun scripts/editorial-accept-topic.mjs 3 <topic-id>             # orchestrator merges
bun scripts/editorial-audit-subject.mjs 3 <subject-slug>
```

Topic-ids look like `entrepreneurship:<unit>:<slug>`. Phase-3 content lives in
`content/phase-3/` (plan, `source-registry.json`, `review/`) and the served bundle is
`public/content/phase-3/lessons.json`. The gate writes those for you.

## Phase 3 subjects — do them in this order (all currently 0 processed)

1. entrepreneurship
2. business-law-and-ethics
3. project-management
4. english-and-literature
5. philosophy-and-ethics
6. art-history-and-visual-culture
7. music-appreciation
8. film-and-media-studies
9. religious-studies
10. languages-and-esl
11. earth-and-space-science

337 topics total. Several of these are sensitive/interpretive subjects — apply the constraints
below with care (present contested positions neutrally; no individualized legal advice in
business-law; treat religious-studies descriptively and even-handedly across traditions).

## The loop (summary — full detail in CODEX_READ_THIS.md §3–7)

For each subject, in order:

1. `bun run editorial:init 3 <subject>`, then **hand-write** `editorial/subjects/<subject>/source-map.json`
   (copy the shape from an existing one; match cautions to the subject's risk profile; last caution =
   distribute answer keys evenly A/B/C/D with ≥1 C and ≥1 D and verify keys from the file).
2. **Check `topic-queue.json` for mis-ingested junk entries.** Some queues have trailing
   non-topics (site-collection names, "PART …" headers, planning-note fragments like
   "12-18-topics"). Do NOT fabricate lessons for them. Process the genuine topics; for the junk,
   either repurpose a single stray into a real topic (keep the slug, set a proper title — the gate
   keys on slug, not title) or leave them and flag them, and prune them from the plan when you
   close the subject so it can reach zero-unprocessed. Document what you pruned in the subject report.
3. Process topics with **one fresh worker per topic, ~7–8 concurrent, all from the same subject**,
   each given tight scope boundaries vs the other in-flight topics and the sibling topic-id list for
   `relatedTopics`. Workers self-validate with `--dry-run` ONLY (never the bare gate — shared stores
   can't take concurrent writes). You (orchestrator) merge serially.
4. **Verify EVERY answer key yourself by reading the review JSON** — workers routinely misreport
   their own keys (see CODEX_READ_THIS.md §4 for the one-liner). For any worked example, fact, or
   figure, spot-check it against the live source before merging.
5. After each batch: `bun scripts/editorial-progress.mjs`, then commit locally.
6. When the subject hits zero unprocessed topics: `bun scripts/editorial-audit-subject.mjs 3 <subject>`,
   drive it to **0 issues** (fix real defects and re-gate; excuse only genuinely-correct findings in
   `editorial/subjects/<subject>/audit-exceptions.json` with a stated reason). Then write
   `editorial/reports/subjects/<subject>.md` (compute all numbers programmatically), commit.
   Only then start the next subject.

## Hard constraints (never violate)

- **Local only.** Never push, never open a PR, never deploy, never upload. Commit locally only.
  (The push remote has already been removed from this repo.)
- Every accepted topic stays `public: false` at `status: source-verified` (READY_TO_PUBLISH).
  Nothing is published; that is the owner's decision, not yours.
- Never weaken a validator/gate/audit to force a pass. Never fabricate a source, statistic, quote,
  or citation — every claim must trace to a real source you actually read.
- No individualized legal, medical, financial, or investment advice — general education only.
  Security topics (if any) are defense-only.
- **Stay in Phase 3.** Do not init, gate, or edit any Phase 1, 2, or 4 subject.

## How your work gets merged back (context — you don't do this)

The owner will merge your output into the master repo later. Because you only touch Phase-3 files
(`content/phase-3/*`, `editorial/subjects/<phase-3-subjects>/*`,
`editorial/reports/subjects/<phase-3-subjects>.md`, `public/content/phase-3/lessons.json`) and the
other agent only touches Phases 1/2/4, the file sets are disjoint and combine without conflicts.
**To keep the merge clean, do NOT edit the global files `editorial/RESUME.md` or
`editorial/reports/EDITORIAL_PROGRESS.md`** — track your progress in the per-subject reports instead.

## Start

When cleared to begin: `bun run editorial:init 3 entrepreneurship`, hand-write its source-map,
check the queue for junk entries, then launch batch 1 and run the loop. Keep it local, keep it
honest, verify every key and every figure yourself.
