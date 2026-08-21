> **SUPERSEDED FOR STATE/ORDER (2026-08-21): read `MASTER_1319_START_HERE.md` at the repository root first. This file remains valid for method only; its counts, stop points, and owner-confirmation pauses are obsolete.**

# CODEX_READ_THIS — Handoff to finish the EliExplains editorial run

**You are picking up an in-progress content pipeline.** Read this whole file before doing
anything. Then read, in order: `editorial/RESUME.md`, `editorial/TOPIC_AGENT_BRIEF.md`,
`HERMES_READ_THIS.md` (§6 has the subject/phase order). This file is the operational summary;
those are the authority if anything conflicts.

Working directory (the live repo):

```
/Users/moomoo/Desktop/1319_DIR
```

Everything below runs from that directory.

---

## 0. Current standing (2026-08-19)

- **246 / 1,319 topics done · 10 / 44 subjects complete.**
- Completed subjects (all 0-issue audits + written reports): education, social-work-and-human-services,
  criminal-justice-and-criminology, engineering-fundamentals, health-administration,
  hospitality-and-tourism, graphic-design-and-digital-media, environmental-sustainability,
  computer-literacy, **computer-science-fundamentals** (just finished).
- **Next up: `python-programming` (36 topics)** — the last subject in Phase 1.
- After that: Phase 2 (11 subjects), Phase 3 (11), Phase 4 (11). Full ordered list in §9 below.

**Never trust these counts from memory — always get the real number:**

```bash
bun scripts/editorial-progress.mjs
```

A topic is "processed" if and only if it carries an `editorialStatus` in
`content/phase-1/content-progress.json`. The progress script is the single source of truth.

---

## 1. Hard constraints (do not violate)

1. **Local only. Never push, never open a PR, never deploy, never upload anything.** Commit locally only.
2. **Nothing is published.** Every accepted topic stays `public: false` at `status: source-verified`
   (the pipeline calls this `READY_TO_PUBLISH`). Flipping a topic to `PUBLISHED` is an owner decision,
   not yours.
3. **Never weaken a validator, gate, or audit to get a pass.** If the gate/audit complains, fix the
   content or excuse a genuinely-correct finding with a stated reason — never edit the checking scripts
   to be more lenient.
4. **Never fabricate a source, statistic, quote, or citation.** Every factual claim must trace to a
   real, resolvable source that was actually read. If you can't verify it, don't publish it.
5. **Security topics are taught for defense only** (recognizing phishing/malware, not building it).
   No individualized legal, medical, or investment advice — frame as general education.
6. **The MedMosa repo at `/Users/moomoo/Desktop/1_/_Web_v` is READ-ONLY** and unrelated. Don't touch it.

---

## 2. Runtime — use `bun`, there is no `node`

This Mac has **only `bun`** on PATH. There is no `node` binary. Every `.mjs` pipeline script runs under
bun, and the `bun run editorial:*` / `bun run phase1:*` aliases work as written. The older START_HERE /
HERMES docs assume a Node VM and claim the npm aliases fail — **that is false here.** Run either form:

```bash
bun run editorial:progress            # alias
bun scripts/editorial-progress.mjs    # direct — same thing
```

Aliases (from `package.json`):

| alias | script |
|---|---|
| `editorial:init` | `editorial-init-subject.mjs` — scaffold a subject |
| `editorial:accept` | `editorial-accept-topic.mjs` — **the gate / merge** |
| `editorial:progress` | `editorial-progress.mjs` — real counts |
| `editorial:audit` | `editorial-audit-subject.mjs` — end-of-subject audit |
| `editorial:align` | `editorial-align-source-urls.mjs` — fix same-doc-different-URL source clashes |
| `phase1:validate` | `validate-phase1-content.mjs` — whole-phase content validation |

`bun run typecheck` and `bun run build` need `npm install` run once first; you generally don't need them
(the site does not render lesson pages yet). Content validation is the gate that matters.

---

## 3. The core loop (orchestrator + one worker per topic)

This is the model that has produced ten clean subjects. **You are the orchestrator.** You spawn
**one fresh worker agent per topic** (never reuse a worker across topics — context bleed causes errors),
run **~7–8 workers concurrently, all from the same subject**, then verify and merge each result
**serially yourself**.

### Per topic, a worker produces THREE artifacts

1. `content/phase-1/review/<subject>-<slug>.json` — the structured lesson record (the thing that gets published)
2. `editorial/subjects/<subject>/evidence/<slug>.json` — the evidence packet (`sourceRecords` array, claims, rights)
3. `editorial/subjects/<subject>/lessons/<slug>.md` — the human-readable markdown lesson

### The loop, step by step

1. **Check state.** `bun scripts/editorial-progress.mjs`; read the subject's `topic-queue.json`
   (queue order = processing order).
2. **Launch a batch** of up to 8 fresh workers, each assigned exactly one topic. Give every worker:
   - its topic-id (`<subject>:<unit>:<slug>`),
   - the binding reads (`editorial/TOPIC_AGENT_BRIEF.md` and the subject's `source-map.json`),
   - **explicit scope boundaries against the other topics in flight** (parallel workers can't see each
     other's output, so you must tell each one what NOT to cover — which sibling topic owns it),
   - the sibling topic-id list so it fills `relatedTopics` itself,
   - the instruction to **distribute answer keys evenly across A/B/C/D (include ≥1 C and ≥1 D)**,
   - the instruction to **self-validate with `--dry-run` only** (see below).
3. **Workers self-validate** but DO NOT merge:
   ```bash
   bun scripts/editorial-accept-topic.mjs 1 <topic-id> --dry-run
   ```
   Workers must **never** run the gate without `--dry-run` — the shared stores
   (`content-progress.json`, `source-registry.json`, `lessons.json`) cannot take concurrent writes.
   Only you, the orchestrator, merge, and you do it **one topic at a time**.
4. **You independently review each finished topic** (do not trust the worker's summary):
   - correct topic/slug, no unrelated files touched,
   - sources are real and resolve, spot-check the highest-risk facts against the live source,
   - **verify EVERY answer key yourself by reading the review JSON** (see §4 — workers frequently
     misreport their own key positions),
   - for technical subjects, **re-run every worked example / arithmetic / Big-O claim** (see §5).
5. **Merge** (serially):
   ```bash
   bun scripts/editorial-accept-topic.mjs 1 <topic-id>
   ```
6. `bun scripts/editorial-progress.mjs`, commit the batch, launch the next batch.

### Publication policy

Accepted topics land at `READY_TO_PUBLISH` (`status: source-verified`, `public: false`). Nothing is served
publicly until the owner signs off.

---

## 4. Verify answer keys from the file — ALWAYS

Workers **routinely misreport** which option is correct. Never take the completion summary's word for it.
For every merged topic, read the actual keys out of the review JSON:

```bash
bun -e "const l=require('./content/phase-1/review/<subject>-<slug>.json'); l.questionBank.forEach((q,i)=>console.log('Q'+(i+1)+'['+String.fromCharCode(65+q.correctIndex)+'] '+q.difficulty+': '+q.options[q.correctIndex].slice(0,42))); console.log('pos:',l.questionBank.map(q=>q.correctIndex).join(','),'rel:',(l.relatedTopics||[]).length);"
```

Requirements the gate enforces per topic: exactly **5 questions**, 4 options each, ≤3 keys in any one
position, **≥1 recall + ≥1 application/analysis**. Tell workers to **spread keys evenly** — phrasing it
as "even across A/B/C/D with at least one C and one D" gives the best balance. Do NOT single out one
letter ("use A at least once" over-corrected an earlier subject toward A).

---

## 5. Correctness control for technical subjects

For CS / programming / quantitative subjects, **correctness is the primary control**. Wrong Big-O or an
off-by-one in a worked example is a blocking defect. At merge, re-derive things yourself in Bash:

```bash
python3 -c "print(2 + 3 * 4)"       # precedence etc.
```

Standard Big-O answers you should expect (reject anything else): linear search O(n); binary search
O(log n) on sorted input; bubble/insertion/selection O(n²); merge sort O(n log n); quicksort avg
O(n log n) / worst O(n²); array index O(1) / search O(n); dynamic-array append amortized O(1); hash map
avg O(1) / worst O(n); stack/queue push/pop O(1). Distinguish average/worst/best; Big-O is an upper bound.
Keep code examples language-labeled (Python is fine as a labeled example) and note where terminology
differs by language.

---

## 6. Starting a subject (source-map is hand-written)

```bash
bun run editorial:init 1 <subject-slug>
```

This creates `editorial/subjects/<slug>/` with `subject-plan.json`, `topic-queue.json`, and empty
`evidence/` + `lessons/` dirs. **The init does NOT create `source-map.json` — you hand-write it.** Copy
the shape from an existing one (e.g. `editorial/subjects/computer-science-fundamentals/source-map.json`
for a technical subject). Structure:

```json
{
  "schemaVersion": 1,
  "subjectSlug": "...",
  "note": "...",
  "reviewProfile": ["..."],
  "tierA": [{ "provider": "...", "url": "...", "useFor": "..." }],
  "tierB": [{ "provider": "...", "url": "...", "useFor": "..." }],
  "cautions": ["... rules that BIND every worker in the subject ..."]
}
```

The **last caution should always** tell workers to distribute answer keys evenly across A/B/C/D (≥1 C, ≥1 D)
and to verify their own keys from the file. Match the source-map to the subject's risk profile: cite
authoritative primary/OER/government/standards sources; for health topics prefer .gov/peer-reviewed and
flag not-medical-advice; for legal/policy topics keep contested claims contested; for quantitative topics
demand Bash-verified examples.

**Watch for mis-ingested queue entries.** Some `topic-queue.json` files contain a section-header slug
(e.g. a "PART II — ..." entry) instead of a real topic. The gate keys on **slug, not title**, so you can
repurpose such an entry into a genuine lesson by keeping the slug and giving it a proper title — that is how
environmental-sustainability's 25th entry became "Sustainable Computing and E-Waste".

---

## 7. Finishing a subject (audit to zero, then report)

When the subject has **zero unprocessed topics**:

```bash
bun scripts/editorial-audit-subject.mjs 1 <subject-slug>
```

Drive it to **0 issues**. Two legitimate routes per finding:

- **Fix it** — a real defect. Edit the content, then **re-run the gate on that topic** so its hash updates:
  `bun scripts/editorial-accept-topic.mjs 1 <topic-id>`.
- **Excuse it** — only for findings you have personally reviewed and judged correct. Add an entry to
  `editorial/subjects/<slug>/audit-exceptions.json`:
  ```json
  { "schemaVersion": 1, "subjectSlug": "...", "accepted": [ { "match": "<substring of the audit message>", "reason": "<why this is actually fine>" } ] }
  ```
  The audit excuses a finding when `message.includes(match)`. **Never excuse something you didn't review.**

### Audit issue types you WILL see, and how each was handled

- **`[SRCDUP] same URL under ids X and Y`** — parallel workers minted two ids for one URL. **Fix, don't
  excuse.** Pick one canonical id (the one already used by the most/earliest topics). In the *other* topic's
  review JSON (`sources` array) and evidence JSON (`sourceRecords`), replace the dup id with the canonical
  id. Then **remove the orphan record from `content/phase-1/source-registry.json`** — the gate only ever
  *appends* to the registry, it never prunes, so a repoint alone leaves the dup behind. Then re-gate the
  edited topic(s). (CS-fundamentals had 5 of these; all Python-docs pages cited by several topics.)
- **`[REUSE] A / B share N 8-word sequences`** — near-duplicate prose (checks the review JSON fields
  in30Seconds / whyItMatters / collegeVersion bodies / eli10 / workedExample). If it's genuine incidental
  duplication, **reword the non-owning topic** (edit both the review JSON and the `.md` for consistency,
  then re-gate). If the shared text is a **canonical citation name or a single authoritative definition**
  legitimately cited by both, **excuse** it. Threshold: fires at >2 shared 8-grams, so reducing to ≤2
  clears it.
- **`[TERM] "t" defined differently in A and B (overlap X%)`** — the same glossary term has low-word-overlap
  definitions in two topics. Usually fine: **genuine homonyms** (dict "key" vs sort "key"; "implementation"
  = hidden machinery vs the SDLC coding phase; "iteration" = act-of-repeating vs one-pass) or **compatible
  definitions at different depths** (a brief mention vs the owner's full definition). Read both, then
  **excuse** with a reason. Only "fix" if they genuinely contradict.
- **`[QNEAR] near-duplicate stems`** — two questions across topics share a stem template (classic:
  "Which statement best describes X?"). **Reword one stem** in the review JSON + `.md`, re-gate.
- **`[GRAM] ... repeated word "w"`** — a case-insensitive doubled-word regex. **False-positives** when a
  logical operator sits next to an English word — `AND and`, `or OR`. **Reword** to break the adjacency
  (e.g. "AND together with OR", "an AND/OR expression"), or insert a comma where grammatical.
- **`[GRAM] ... unbalanced parentheses`** — counts only **round** parens per line. Real fix: normalize
  option labels `- A)` → `- A.` (`sed -E -i '' 's/^([[:space:]]*)- ([A-D])\) /\1- \2. /'`) and backtick-wrap
  dotted file extensions. **False-positive** in a bracket-matching lesson that legitimately contains literal
  unbalanced brackets (`(]`, `([)]`) — **excuse by the exact `file.md:NN unbalanced parentheses` string,
  then do NOT edit that file again** or the line numbers shift and the excuse misses.
- **`[GRAM] space before punctuation` / dotted `.ext`** — wrap file extensions in backticks (`` `.pdf` ``).
- **`[LINK] ...`** — a `relatedTopics` id that doesn't exist or self-links; fix the ids.

**Get audit figures programmatically** — never hand-tally. Example key-distribution + source-rights
snippets are in the CS report's generating commands; the audit header prints topic/lesson/question counts
and "cited by this subject N".

### Then write the subject report

`editorial/reports/subjects/<slug>.md`, following an existing one as the template (e.g.
`editorial/reports/subjects/computer-science-fundamentals.md`). Sections: Curriculum / Processing /
Questions / Sources / Quality Review / Major Corrections / Cross-Topic Consistency / Validation /
Held Topics / Final Subject Status. Compute every number from the files.

Finally: `bun scripts/editorial-progress.mjs`, update `editorial/RESUME.md` at the subject boundary,
and **commit**.

**Do not initialize the next subject until the current one has zero unprocessed topics, a zero-issue
audit, and a written report.**

---

## 8. Merge-time source clashes (`align` vs consolidate)

Two different situations, two different fixes:

- **Gate rejects: "already registered with a different URL"** — the *same source id* was minted for two
  *different URLs* (often the same book cited by chapter vs root URL). Run
  `bun run editorial:align 1 <subject-slug> <topic-slug>` to see the two URLs; if they are truly the same
  document, re-run with `--apply`, then accept again. **Never align two genuinely different documents** —
  give the new one its own id.
- **Audit flags `[SRCDUP]`** — the *same URL* under two *different ids*. Consolidate to one id + prune the
  orphan registry record (see §7).

---

## 9. Remaining subject order (from HERMES_READ_THIS.md §6)

**Phase 1 remaining:** `python-programming` (36) — last one.

**Phase 2 (325):** web-development, data-science-and-ai-literacy, cybersecurity, databases-and-sql,
ux-ui-design, introduction-to-business, accounting, finance, personal-finance, marketing,
management-and-leadership.

**Phase 3 (337):** entrepreneurship, business-law-and-ethics, project-management,
english-and-literature, philosophy-and-ethics, art-history-and-visual-culture, music-appreciation,
film-and-media-studies, religious-studies, languages-and-esl, earth-and-space-science.

**Phase 4 (375):** nutrition, public-health, nursing-and-allied-health-foundations, psychology,
sociology, anthropology, human-development, political-science-and-government, history, human-geography,
economics.

> Note: subjects in Phases 2–4 may live under a different phase number in their topic-id and in the
> `editorial:*` phase argument. Confirm the phase for each subject with `bun scripts/editorial-progress.mjs`
> and by inspecting `content/phase-<n>/` before running `editorial:init`. Phase-1 commands above hardcode
> `1`; substitute the correct phase number.

---

## 10. Immediate next action

The owner **paused the run at the Computer Science Fundamentals boundary** and asked to be pinged before
more agents launch. **Confirm with the owner before starting `python-programming`.** When cleared:

1. `bun run editorial:init 1 python-programming`
2. Hand-write `editorial/subjects/python-programming/source-map.json` — a hands-on programming subject:
   demand that **every code example is run in `python3`** and is idiomatic and version-correct; cite the
   official Python docs/tutorial as Tier A; keep answer keys balanced.
3. Check `topic-queue.json` for any mis-ingested "PART …" entries.
4. Launch batch 1 (up to 8 fresh workers, one topic each, tight scope boundaries), then run the loop in §3.

Good luck. Keep it local, keep it honest, verify every key and every number yourself.
