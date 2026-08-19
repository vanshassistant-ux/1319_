# START_HERE.md — 1319_DIR handoff bundle

**Built 2026-08-19 from `/Users/moomoo/Desktop/ELI_WEBSITE` at commit `302f8b7`.**

This directory is a complete, runnable working copy of the EliExplains editorial pipeline —
everything needed to take the project from **97 of 1,319 topics** to all 1,319.

## Read in this order

1. **`HERMES_READ_THIS.md`** (this directory, root) — the operating runbook. Start there.
2. `editorial/RESUME.md` — the exact resume point and next action.
3. `editorial/TOPIC_AGENT_BRIEF.md` — the contract every topic writer follows.

---

## ⚠️ Read this before you write anything: the fork hazard

This bundle is a **copy**, including full git history on branch `agent/eliexplainsorg`. The
original repository still exists at `/Users/moomoo/Desktop/ELI_WEBSITE` at the same commit.

**RESOLVED 2026-08-19: this bundle is being copied to a VM, and the VM copy is the
canonical working repository from the moment it lands there.**

- **On the VM:** this directory is where all remaining work happens. Commit here normally.
- **On the Mac:** `/Users/moomoo/Desktop/ELI_WEBSITE` is **FROZEN** at the 97-topic state
  (commit `302f8b7`) for as long as Hermes is running. Nobody edits it.
- **Coming back:** when Hermes finishes a subject — or the whole run — the VM copy is
  copied back over the Mac's `ELI_WEBSITE`. Wholesale replacement, never a hand-merge.

The rule that matters: **exactly one machine has the live repository at any moment.** Right
now that is the VM. If anyone edits the Mac copy while Hermes is working, the two diverge
and reconciling them by hand is error-prone and slow.

Record on your first VM commit that the VM is live, so the next operator is not guessing.

---

## Runtime on the VM: use `node`

The VM has **Node 22** and npm. It does **not** have bun. That is fine — the entire editorial
pipeline runs under Node with no install and no code changes.

Portability was verified before this bundle shipped: every pipeline script imports only
`node:fs/promises` and `node:crypto`, uses no `Bun.*` API and no `bun:` import, and relies on
top-level await in ESM. `package.json` sets `"type": "module"` and the files are `.mjs`.

```bash
node scripts/editorial-progress.mjs                                  # expect 97/1319
node scripts/editorial-accept-topic.mjs 1 <topic-id> --dry-run       # worker self-check
node scripts/editorial-accept-topic.mjs 1 <topic-id>                 # orchestrator merge
node scripts/editorial-audit-subject.mjs 1 <subject-slug>
node scripts/editorial-init-subject.mjs 1 <subject-slug>
node scripts/editorial-align-source-urls.mjs 1 <subject> <topic>
node scripts/validate-phase1-content.mjs                             # and phase2/3/4
node scripts/validate-medmosa-migration.mjs
```

**Two things that differ from the runbook's bun-based commands:**

1. The `npm run editorial:*` aliases in `package.json` hardcode `bun` and will fail. Call the
   script paths directly, as above. `HERMES_READ_THIS.md` shows `bun run ...` throughout —
   mentally substitute `node scripts/<name>.mjs` everywhere.
2. `scripts/promote-reviewed-topic.mjs` line 16 does `spawnSync('bun', ...)` and will fail.
   That script is **deprecated** — superseded by `editorial-accept-topic.mjs` — so you do not
   need it. If you ever do, change `'bun'` to `process.execPath`.

**Before `typecheck` or `build`:** this bundle has no `node_modules/`. Run `npm install`
once. The editorial pipeline itself needs nothing installed.

**First command on the VM.** This must print `97/1319 (7.35%); subjects 4/44`:

```bash
node scripts/editorial-progress.mjs
```

If it prints anything else, stop and report before writing anything.

Verified working in this bundle at build time:

```
bun scripts/editorial-progress.mjs              → 97/1319 (7.35%); subjects 4/44
bun scripts/editorial-audit-subject.mjs 1 engineering-fundamentals → 0 issues
bun scripts/validate-phase1-content.mjs         → passed (282 planned topics)
bun scripts/validate-phase2-content.mjs         → passed (325)
bun scripts/validate-phase3-content.mjs         → passed (337)
bun scripts/validate-phase4-content.mjs         → passed (375)
bun scripts/validate-medmosa-migration.mjs      → passed (1317 staged, 0 imported)
bun scripts/editorial-accept-topic.mjs 1 <id> --dry-run → VALIDATION PASSED
```

---

## What is in here

| Path | What it is | Why it is needed |
| --- | --- | --- |
| `HERMES_READ_THIS.md` | The operating runbook | Primary instructions |
| `editorial/TOPIC_AGENT_BRIEF.md` | Topic-writer contract: schemas, rights policy, voice, research rules | Every worker reads this in full |
| `editorial/RESUME.md` | Resume point, next action, known issues | Read first on every run |
| `editorial/subjects/<slug>/` | Per-subject workspace: `subject-plan.json`, `topic-queue.json`, `progress.json`, `source-map.json`, `audit-exceptions.json`, `evidence/`, `lessons/` | Working state for the 4 complete subjects; the pattern for the 40 remaining |
| `editorial/reports/EDITORIAL_PROGRESS.md` | Generated global progress | Regenerate, never hand-edit |
| `editorial/reports/subjects/*.md` | 4 completed subject reports | Template + quality bar for the other 40 |
| `content/phase-N/content-progress.json` | **Source of truth** for topic state | A topic is processed iff it has `editorialStatus` |
| `content/phase-N/source-registry.json` | Merged source records with rights classifications | 1,224 records in phase 1 |
| `content/phase-1/review/*.json` | 97 verified lesson records | Completed work + quality reference |
| `public/content/phase-N/lessons.json` | Public lesson bundle the gate writes to | Merge target |
| `curriculum/master-curriculum.json` | 44 subjects, 6 collections, phase registry | Collection/phase source of truth |
| `scripts/editorial-*.mjs` | init, accept (the gate), audit, progress, align | The pipeline itself |
| `scripts/validate-phase*-content.mjs` | Phase validators | Project-wide gates |
| `migration/medmosa/` | MedMosa inventory, manifests, review queues | Reference; `migration:medmosa:validate` reads three files from it |
| `src/`, `public/`, `index.html`, `vite.config.ts`, `tsconfig*.json` | The site | Needed for `typecheck` and `build` to pass |
| `package.json`, `bun.lock` | Script names and dependency lock | `bun run editorial:*` etc. |
| `.git/` | Full history, branch `agent/eliexplainsorg` | Local commits per repo convention |

### Deliberately excluded

| Excluded | Size | Why |
| --- | --- | --- |
| `node_modules/` | 114 MB | Reinstall with `bun install` |
| `dist/` | 10 MB | Build output; regenerate with `bun run build` |
| `tsconfig.tsbuildinfo` | — | Incremental build cache |
| `.DS_Store` | — | macOS noise |

Nothing excluded is required to run the editorial pipeline.

---

## Verified state at bundle time

- **97 / 1,319 topics processed (7.35%). 4 / 44 subjects complete.**
- All 97 at `editorialStatus: READY_TO_PUBLISH`. **Zero held, zero needing review.**
- **Nothing published** — 0 across all four phases; all lessons `public: false` pending
  owner sign-off. This is intentional, not an oversight.
- Complete subjects (all Phase 1, all audited to 0 issues with reports):
  `education` 21/21 · `social-work-and-human-services` 20/20 ·
  `criminal-justice-and-criminology` 28/28 · `engineering-fundamentals` 28/28
- Phases 2, 3, 4: entirely unstarted.
- `FINAL_EDITORIAL_REPORT.md` correctly does **not** exist.

## The remaining 1,222 topics

**Phase 1 (7 subjects, 185 topics)** — next in order:
health-administration (24) · hospitality-and-tourism (20) ·
graphic-design-and-digital-media (28) · environmental-sustainability (25) ·
computer-literacy (25) · computer-science-fundamentals (27) · python-programming (36)

**Phase 2 (11 subjects, 325)** · **Phase 3 (11 subjects, 337)** · **Phase 4 (11 subjects, 375)**

Full ordered lists with per-subject counts are in `HERMES_READ_THIS.md` §6.

---

## The one-line summary

Read `HERMES_READ_THIS.md`, run `bun install`, confirm
`bun scripts/editorial-progress.mjs` still reports 97/1319, then start
`health-administration` with `bun run editorial:init 1 health-administration`.

Do not publish, upload, deploy, or push. Do not weaken a validator to get a pass.
