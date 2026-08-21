> **SUPERSEDED FOR STATE/ORDER (2026-08-21): read `MASTER_1319_START_HERE.md` at the repository root first. This file remains valid for method only; its counts, stop points, and owner-confirmation pauses are obsolete.**

# HERMES_READ_THIS.md

**Editorial pipeline handoff runbook — EliExplains.org**
Authored 2026-08-19 against the live repository at `/Users/moomoo/Desktop/ELI_WEBSITE`.

You are Hermes. You are continuing an editorial pipeline that is already running well. This
file is self-contained: everything you need is here or reachable from the paths below. You
do not have access to the conversation that produced the existing work.

Read this whole file before touching anything.

---

## 0. Verified state vs. the history you may have been told

Everything in this section was verified by inspecting the repository on 2026-08-19. Where a
briefing you received says otherwise, **the repository wins** and the briefing is stale.

| Claim you may have been given | Verified repository state |
| --- | --- |
| 93 topics processed | **97 topics processed** (`bun run editorial:progress`) |
| 3 subjects audited; Engineering has no report | **4 subjects complete, 4 reports on disk**, including `editorial/reports/subjects/engineering-fundamentals.md` |
| 4 interrupted/unverified partial artifacts may exist | **None remain.** All four were completed, gated, and merged. An orphan scan found no unprocessed topic with files and no processed topic missing files. |
| Nothing published; `public: false` | **Confirmed.** 0 published across all four phases. |
| `FINAL_EDITORIAL_REPORT.md` must not exist yet | **Confirmed absent.** Correct. |
| 44 total subjects | **Confirmed.** 11 per phase × 4 phases. |

**Verified facts as of this writing:**

- Branch `agent/eliexplainsorg`, working tree clean, HEAD `302f8b7`.
- **97 / 1,319 topics processed (7.35%). 4 / 44 subjects complete.**
- All 97 carry `editorialStatus: READY_TO_PUBLISH`. **Zero held, zero needing review.**
- Complete subjects (all Phase 1): `education` 21/21, `social-work-and-human-services` 20/20,
  `criminal-justice-and-criminology` 28/28, `engineering-fundamentals` 28/28.
- Phases 2, 3, and 4 are entirely unstarted.

**Re-verify all of this yourself before your first edit.** It may have moved since.

---

## 1. Mission and Scope

Continue and finish the remaining topic pipeline **locally**, following this repository's
existing rules exactly.

- Preserve every completed, validated, merged, and audited lesson.
- Touch only unfinished work, or work a validator or source-of-truth check proves is wrong.
- The deliverable is verified educational content, not throughput. A topic that is honestly
  marked `NEEDS_SOURCE_REVIEW` is a better outcome than one that is falsely
  `READY_TO_PUBLISH`.

**Out of scope** unless a repository requirement explicitly says otherwise: front-end
rendering of `lessons.json` (`src/main.tsx` currently does not read it — that is known and
deliberate), publication, deployment, and unrelated refactors.

---

## 2. Non-Negotiable Safety Rules

1. **Local only.** No push, no PR, no branch publishing, no upload, no deploy, no cloud
   storage, no network writes of any kind. Local commits are fine and are the convention.
2. **`public: false` is the default and stays that way.** Publication is an owner decision.
   The gate sets `public: true` only for `editorialStatus: PUBLISHED`, and nothing in the
   repository is `PUBLISHED`. Do not promote a topic to `PUBLISHED` on your own initiative.
3. **Never alter a completed lesson** unless a validator, schema check, evidence check, or
   source-of-truth conflict proves a correction is required. Then fix it and re-run the gate
   so the content hash updates.
4. **Never trust partial, orphaned, or interrupted files.** File presence is not completion.
   Completion means the gate accepted it and `content-progress.json` records it.
5. **Never weaken a control to get a pass.** Do not edit, suppress, or bypass
   `scripts/editorial-accept-topic.mjs`, `scripts/editorial-audit-subject.mjs`, the phase
   validators, the schemas, or any report to make something go green. Fix the artifact.
   *Tuning an audit rule that produces demonstrable false positives is allowed — but only
   after you have shown the finding is a false positive, and you must record why.*
6. **Preserve conventions**: naming, directory structure, topic IDs, schemas, metadata
   shapes, evidence standards, source-rights vocabulary, and the Eli editorial voice.
7. **Never fabricate** a source, citation, statistic, quotation, evidence packet, validation
   result, or completion state.
8. **The MedMosa repository at `/Users/moomoo/Desktop/1_/_Web_v` is READ-ONLY.** Never write
   to it.

---

## 3. First-Run Repository Discovery

Run this checklist before your first edit. Do not skip it.

```bash
cd /Users/moomoo/Desktop/ELI_WEBSITE
git status --short                      # expect clean
git branch --show-current               # expect agent/eliexplainsorg
git log --oneline -8
```

Then read, in this order:

1. **`editorial/RESUME.md`** — the resume point. States the current subject, what is
   complete, the next action, and any owner-imposed stop. **Read this first, always.**
2. **`editorial/TOPIC_AGENT_BRIEF.md`** — the contract every topic writer follows. Schemas,
   rights policy, voice, research rules, canonical-URL conventions, hard constraints. This
   is the single most important file for content quality.
3. **`editorial/reports/EDITORIAL_PROGRESS.md`** — generated global progress. Never
   hand-edit; regenerate with `bun run editorial:progress`.
4. **`editorial/reports/subjects/*.md`** — the four completed subject reports. Read at least
   one end to end; it is the template and the quality bar.
5. **A completed lesson triple**, to internalise the standard:
   - `content/phase-1/review/engineering-fundamentals-stress-and-strain.json`
   - `editorial/subjects/engineering-fundamentals/evidence/stress-and-strain.json`
   - `editorial/subjects/engineering-fundamentals/lessons/stress-and-strain.md`
6. **The gate**: `scripts/editorial-accept-topic.mjs`. Read it. It defines "done."
7. **The audit**: `scripts/editorial-audit-subject.mjs` and any
   `editorial/subjects/<slug>/audit-exceptions.json`.

Establish true counts programmatically — never by hand:

```bash
bun run editorial:progress
bun -e "
for (const ph of [1,2,3,4]) {
  const p = require('./content/phase-'+ph+'/content-progress.json');
  const by = {};
  p.topics.forEach(t => { const b = by[t.subjectSlug] ||= {n:0,d:0}; b.n++; if (t.editorialStatus) b.d++; });
  for (const [s,v] of Object.entries(by)) if (v.d < v.n) console.log('phase'+ph, s, v.d+'/'+v.n);
}"
```

Scan for orphans before trusting anything on disk:

```bash
bun -e "
const fs = require('fs');
const p = require('./content/phase-1/content-progress.json');
for (const t of p.topics) {
  const has = [
    fs.existsSync('content/phase-1/review/'+t.subjectSlug+'-'+t.slug+'.json'),
    fs.existsSync('editorial/subjects/'+t.subjectSlug+'/evidence/'+t.slug+'.json'),
    fs.existsSync('editorial/subjects/'+t.subjectSlug+'/lessons/'+t.slug+'.md')];
  if (!t.editorialStatus && has.some(Boolean)) console.log('UNTRUSTED PARTIAL:', t.id, has);
  if (t.editorialStatus && !has.every(Boolean)) console.log('MISSING ARTIFACT:', t.id, has);
}"
```

Record your verified state only after all of the above.

---

## 4. Current-State Reconciliation

`content/phase-N/content-progress.json` is the **single source of truth**. A topic is
processed **if and only if** its record carries an `editorialStatus`. Never invent a parallel
tracker.

Classify every topic into exactly one state:

| State | How to recognise it | What to do |
| --- | --- | --- |
| **Valid-complete** | Has `editorialStatus`, `contentHash`, `questionCount`; all three artifacts exist | Leave alone |
| **Unprocessed** | No `editorialStatus`, no artifacts | Normal work item |
| **Untrusted partial** | No `editorialStatus` but artifacts exist on disk | See below |
| **Held / needs review** | `editorialStatus` starts with `HELD` or `NEEDS_` | Terminal and legitimate; do not force to ready |

**Untrusted partials.** These come from workers interrupted mid-task. They are *reference at
most*. Either have a fresh worker overwrite them completely after independently re-verifying
every claim, source URL, and number, or delete them and start clean. Never promote one
because the file exists. This has bitten before: a previous interrupted draft misattributed
the Rogers Commission's stated conclusion, asserted a reliability-index range that its cited
source does not contain, and attributed a traceability formulation to a NIST page that does
not say it. All three were caught only because a fresh worker re-read the primary sources.

---

## 5. Required Per-Topic Workflow

One agent, one topic. A fresh agent for every topic. Never assign one worker several topics.
Parallel workers are fine — up to about seven — **but every concurrent worker must belong to
the same subject.**

### The loop

**1. Claim the next topic** in queue order from
`editorial/subjects/<subject>/topic-queue.json`.

**2. Brief the worker.** Give it: the topic id, slug, unit, exact output paths, an
instruction to read `editorial/TOPIC_AGENT_BRIEF.md` in full and then the subject's
`source-map.json`, substance guidance for the topic, and **explicit anti-duplication
boundaries** naming which sibling topics own which material. Parallel workers cannot see each
other's output, so scope boundaries must come from you.

**3. The worker researches and writes** three artifacts:

| Artifact | Path |
| --- | --- |
| Lesson record | `content/phase-N/review/<subjectSlug>-<topicSlug>.json` |
| Evidence packet | `editorial/subjects/<subjectSlug>/evidence/<topicSlug>.json` |
| Markdown lesson | `editorial/subjects/<subjectSlug>/lessons/<topicSlug>.md` |

**4. The worker self-validates** — and must use `--dry-run`:

```bash
bun scripts/editorial-accept-topic.mjs <phase> <topic-id> --dry-run
```

Workers must **never** run the gate without `--dry-run`. Only you merge. The shared stores
cannot take concurrent writes.

**5. You review independently.** Do not rubber-stamp the completion record. At minimum:

- Confirm only the three permitted files changed (`git status`).
- Verify **every answer key yourself**. This has caught real errors.
- Spot-check the highest-risk factual claims against live primary sources.
- **For quantitative subjects, re-execute the worked-example arithmetic yourself.** Workers
  are instructed to execute everything in Bash; verify a sample independently anyway.
- For legal content, confirm case name, citation, year, author, vote, and holding came from
  the opinion — not a summarizer. Summarizers have reversed holdings and misattributed
  authorship repeatedly in this project.

**6. You merge:**

```bash
bun scripts/editorial-accept-topic.mjs <phase> <topic-id>
```

**7. If the gate rejects on a source-id URL collision**, two parallel workers registered the
same id against different URLs (commonly govinfo vs. Library of Congress scans of the same
opinion, or a landing page vs. its PDF):

```bash
bun run editorial:align <phase> <subject-slug> <topic-slug>            # inspect
bun run editorial:align <phase> <subject-slug> <topic-slug> --apply    # then re-merge
```

Only align when both URLs genuinely serve the same document. If they are different
documents, give the new one its own id.

**8. Update progress:** `bun run editorial:progress`.

**9. Commit locally in logical batches.** Never push.

### What the gate enforces

Read `scripts/editorial-accept-topic.mjs` for the authoritative list. Summary:

- Identity matches `content-progress.json`; `editorialStatus` is terminal.
- In 30 Seconds 40–100 words; Why This Matters 50–150; College Version ≥ 3 subsections and
  ≥ 600 words; Eli-10 block 150–350 words with **both** `analogy` and `analogyLimits`.
- 3–6 learning objectives; 5–10 vocabulary terms; 3–5 common mistakes; worked example ≥ 60
  words; `relatedTopics` present as an array.
- **Exactly 5 questions**, 4 options each, unique stems, no duplicate options, no more than
  3 keys in one position, ≥ 1 recall item and ≥ 1 application/analysis item, each carrying
  `difficulty`, `skill`, `explanation`, and resolving `sourceIds`.
- Evidence packet: ≥ 5 claims, each with `claim`, `claimType`, `status`, and resolving
  `sourceIds`; `researchedAt` present; ≥ 1 source record with `id`, `title`, `url`,
  `provider`, a valid `usage`, and `checkedAt`.
- ≥ 2 sources for `READY_TO_PUBLISH` or `PUBLISHED`.
- Markdown carries all required `##` headings.
- Generic draft boilerplate is rejected outright.

**Terminal statuses:** `PUBLISHED`, `READY_TO_PUBLISH`, `HELD`, `NEEDS_SOURCE_REVIEW`,
`NEEDS_RIGHTS_REVIEW`, `NEEDS_MEDICAL_REVIEW`, `NEEDS_LEGAL_REVIEW`,
`NEEDS_TECHNICAL_REVIEW`, `NEEDS_EDITORIAL_REVIEW`.
`READY_TO_PUBLISH` maps to store status `source-verified` with `public: false`. That is the
correct default terminal state for a clean topic.

**Source usage vocabulary:** `PUBLIC_DOMAIN`, `CC0`, `EXTRACT_AND_ADAPT`,
`ATTRIBUTION_REQUIRED`, `REFERENCE_ONLY`, `LINK_ONLY`, `UNKNOWN`, `HOLD_FOR_REVIEW`.
Never invent a licence. Never infer reuse rights from a domain. Authoritative-but-unlicensed
is `REFERENCE_ONLY` — cite the facts, write the prose yourself.

### The standard you must match

Factual accuracy with evidence traceability; educational clarity in the Eli voice; consistent
formatting; full schema compliance; complete artifacts; zero unresolved validation errors.
Contested literatures are represented as contested, with positions attributed and none
adjudicated. Claims that cannot be verified are **cut**, not softened into vagueness.

---

## 6. Batch, Subject, and Phase Completion

### Starting a subject

```bash
bun run editorial:init <phase> <subject-slug>
```

This creates `editorial/subjects/<slug>/` with `subject-plan.json`, `topic-queue.json`, and
`evidence/` + `lessons/` directories. **You then hand-write
`editorial/subjects/<slug>/source-map.json`** — Tier A/B discovery leads plus a `cautions`
array whose rules bind every worker in that subject. Follow the existing four as models; the
social-work map is the pattern for health-adjacent subjects, the criminal-justice map for
legal/politically-sensitive ones, the engineering map for quantitative/safety-adjacent ones.

### Working the subject

Re-check repository state before each batch. Validate per topic immediately — never batch
validation to the end.

### Completing the subject

Only when the subject has **zero unprocessed topics**:

```bash
bun run editorial:audit <phase> <subject-slug>
```

Drive it to **0 issues**. Two legitimate routes:

- **Fix it** — a real inconsistency, duplicate source record, contradictory definition, or
  duplicated passage. Re-run the gate on any topic you edit so its hash updates.
- **Excuse it** — record the finding in `editorial/subjects/<slug>/audit-exceptions.json`
  with a `match` substring and a **stated reason**. Only for findings you have reviewed and
  determined are correct: mandated safety notices repeated by design, quoted constitutional
  or statutory text, agency operative definitions, single published figures cited by two
  topics, genuine homonyms across sub-disciplines.

Never excuse something you have not actually reviewed.

Then write `editorial/reports/subjects/<slug>.md` following the existing four. Compute every
figure programmatically — never hand-tally. Run `bun run editorial:progress`. Commit.

**Do not initialise the next subject until the current one has zero unprocessed topics, a
zero-issue audit, and a written report.**

### Order

**Phase 1 remaining** (in order): `health-administration` (24), `hospitality-and-tourism`
(20), `graphic-design-and-digital-media` (28), `environmental-sustainability` (25),
`computer-literacy` (25), `computer-science-fundamentals` (27), `python-programming` (36).

**Phase 2** (325 topics): web-development, data-science-and-ai-literacy, cybersecurity,
databases-and-sql, ux-ui-design, introduction-to-business, accounting, finance,
personal-finance, marketing, management-and-leadership.

**Phase 3** (337): entrepreneurship, business-law-and-ethics, project-management,
english-and-literature, philosophy-and-ethics, art-history-and-visual-culture,
music-appreciation, film-and-media-studies, religious-studies, languages-and-esl,
earth-and-space-science.

**Phase 4** (375): nutrition, public-health, nursing-and-allied-health-foundations,
psychology, sociology, anthropology, human-development, political-science-and-government,
history, human-geography, economics.

### Final report

Create `editorial/reports/FINAL_EDITORIAL_REPORT.md` **only** after all 44 subjects are
complete, every topic has a terminal state, every subject has a zero-issue audit and a
report, and all project-wide validation passes. Base it on verified totals only.

---

## 7. Validation and Definition of Done

```bash
bun run phase1:validate      # and phase2/3/4 as those phases gain content
bun run phase2:validate
bun run phase3:validate
bun run phase4:validate
bun run migration:medmosa:validate
bun run typecheck
bun run build
bun run editorial:audit <phase> <subject-slug>
bun run editorial:progress
```

**A topic is done when:** all three artifacts exist at the correct paths · every schema and
editorial requirement is met · evidence meets the standard · the gate accepted it without
`--dry-run` · `content-progress.json` and `public/content/phase-N/lessons.json` are updated
(the gate does both) · a `contentHash` is recorded · no unresolved blocking warning remains.

**The project is done when:** every topic in all four phases has a terminal state (or a
documented rules-approved disposition) · every subject has a zero-issue audit and a report ·
all phase validators, typecheck, and build pass · `EDITORIAL_PROGRESS.md` reflects verified
generated totals · `FINAL_EDITORIAL_REPORT.md` exists and is accurate · **nothing has been
uploaded, published, deployed, or pushed.**

---

## 8. Handling Failures and Ambiguity

- **Fix artifacts, not rules.** If the gate rejects, the artifact is wrong.
- **Resolve ambiguity from the repository first** — the brief, the source maps, the four
  completed subjects, the scripts, the existing reports. They answer most questions.
- **If a claim cannot be verified, cut it.** Do not hedge it into vagueness and ship it.
- **If a topic genuinely cannot reach `READY_TO_PUBLISH`**, give it an honest `NEEDS_*`
  status with a `holdReason`, record it, and move on. That is a legitimate terminal state and
  the subject report has a section for it.
- **A failed worker** means retry that topic with a fresh worker. Never restart the subject.
- **Do not silently discard partial work** that may serve as reference — but never let it
  into final output unverified.
- **Do not broaden scope** into front-end rendering, publication, deployment, or unrelated
  refactors.

### Known traps, learned the hard way

1. **`bun run phase1:drafts` regenerates `lessons.json`.** It has been made non-destructive —
   it preserves any lesson carrying `editorialStatus` or `contentHash` — but verify that
   guard still exists before running it.
2. **Automated summarizers get legal holdings wrong.** Read opinions directly.
3. **Do not sum overlapping statistical series.** Published BJS category totals do not add up
   because statuses overlap.
4. **Parallel workers collide in shared scratch space.** The brief requires topic-slug-prefixed
   scratch filenames. Keep that rule.
5. **Answer keys skew away from option D** — measured across three consecutive subjects
   (20/34/31/15, 29/49/43/19, 33/48/40/19). Instruct workers to distribute keys evenly.
   The gate only catches >3-of-5 in one slot, so this drift passes silently.
6. **Some federal hosts block automated fetching** (cdc.gov, hhs.gov, ssa.gov, bls.gov,
   fbi.gov, iso.org). Workers route via govinfo, uscode.house.gov, eCFR APIs, PMC, or
   Internet Archive captures, and must record in the source note which copy they actually
   read while registering the canonical URL.

---

## 9. Completion Output

Leave behind, locally:

- Validated lesson artifacts for every topic you processed.
- `content/phase-N/content-progress.json` and `public/content/phase-N/lessons.json` updated
  by the gate.
- `editorial/reports/EDITORIAL_PROGRESS.md` regenerated.
- A subject report for every subject you completed.
- `editorial/reports/FINAL_EDITORIAL_REPORT.md` only if genuinely eligible.
- `editorial/RESUME.md` updated to the real resume point.
- Clean local commits. **No pushes.**

Then report: completed and remaining counts (from `editorial:progress`, not memory);
validation commands run with their results; audit and report status per subject; any blockers
with their exact reasons; and explicit confirmation that nothing was published, uploaded,
deployed, or pushed.

---

## 10. Final Operating Directive

> "Continue from the repository's verified current state. Preserve all valid work already
> completed by Claude. Apply the exact same editorial, evidence, schema, validation, audit,
> progress-tracking, and local-only rules to every remaining topic. Do not publish, upload,
> deploy, push, or weaken quality controls. Do not declare completion until every required
> topic, subject audit, report, and final validation has passed."
