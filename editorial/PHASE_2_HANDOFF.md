> **SUPERSEDED FOR STATE/ORDER (2026-08-21): read `MASTER_1319_START_HERE.md` at the repository root first. This file remains valid for method only; its counts, stop points, and owner-confirmation pauses are obsolete.**

# Phase 2 editorial handoff

Updated from the live stores on 2026-08-20. This is a local-only editorial pipeline: do not push, publish, deploy, or upload.

## Verified current state

- Global: **435 / 1307** topics processed; **14 / 44** subjects complete.
- Phase 2: **0 / 11 subjects complete**. `web-development` is the active subject.
- Web Development: **37 / 47** topics accepted (`source-verified`, `READY_TO_PUBLISH`, `public: false`). Its last completed local commit is `891f9e4 Web Development batch 10: accessibility and tools`.
- Do not rely on the older “20/47 plus three dry-run JavaScript lessons” snapshot. Those JavaScript lessons have already been serially accepted, along with later browser/API/accessibility work.
- Preserve the unrelated untracked root files: `CHANGELOG.md`, `DECISIONS.md`, `FLAGS.md`, and `STATE.md`.

## Web Development: current in-flight work

Three fresh workers had been assigned these topics when this handoff was requested. They were paused so that this handoff is a clean stopping point; on resumption, inspect for any partial artifacts and otherwise restart each with a fresh worker. A worker may create only its review JSON, evidence JSON, and Markdown lesson artifacts:

1. `web-development:foundations:http-basics`
2. `web-development:foundations:domains`
3. `web-development:foundations:dns`

They must not merge. When their work is available, the orchestrator must independently inspect the review JSON (including real `correctIndex` values), rerun any examples with Bun, run the dry-run gate, and then accept each topic **serially**:

```bash
bun scripts/editorial-accept-topic.mjs 2 <topic-id> --dry-run
bun scripts/editorial-accept-topic.mjs 2 <topic-id>
```

After the three are accepted, the remaining Web Development queue order is:

1. `web-development:foundations:web-hosting`
2. `web-development:foundations:git`
3. `web-development:foundations:github`
4. `web-development:foundations:web-security-basics`
5. `web-development:foundations:xss-basics`
6. `web-development:foundations:https`
7. `web-development:foundations:cookies-and-storage`

Use fresh workers, all within this subject. Keep the security content defensive: explain risk recognition and safe prevention only; do not provide exploitation instructions. Process `web-hosting/git/github`, then `web-security-basics/xss-basics/https`, then `cookies-and-storage`; after every batch, obtain real progress with `bun scripts/editorial-progress.mjs` and make a local commit containing only the intended topic artifacts and shared-store updates.

When all 47 are accepted, run:

```bash
bun scripts/editorial-audit-subject.mjs 2 web-development
```

Drive the audit to zero by fixing content and re-gating affected topics. For source URL collisions, use `bun scripts/editorial-align-source-urls.mjs` first; then consolidate duplicate source IDs in the affected review/evidence artifacts and prune orphan registry entries as required. Do not weaken scripts. Only record an `audit-exceptions.json` entry for a finding verified to be a true false positive, with a concrete reason. Finally write `editorial/reports/subjects/web-development.md` with numbers computed from the stores, update `editorial/RESUME.md`, commit, and run the Phase 2 validator if available.

## Remaining Phase 2 subject order

Do not initialize the next subject until the Web Development audit/report/resume/commit are complete. Then initialize and complete subjects strictly in this order:

1. `data-science-and-ai-literacy`
2. `cybersecurity`
3. `databases-and-sql`
4. `ux-ui-design`
5. `introduction-to-business`
6. `accounting`
7. `finance`
8. `personal-finance`
9. `marketing`
10. `management-and-leadership`

For every subject:

1. Confirm it is Phase 2, then run `bun run editorial:init 2 <subject-slug>`.
2. Hand-write `editorial/subjects/<subject-slug>/source-map.json`, following an existing completed subject’s shape. Tailor its source tiers and safety cautions. Its final caution must require answer-key distribution across A/B/C/D with at least one C and D, followed by verification from the review file.
3. Inspect `topic-queue.json` for mis-ingested `PART ...` headings and repurpose them into real titles while retaining the slugs.
4. Use fresh workers per topic, provide non-overlapping scopes and sibling topic IDs, and allow only `--dry-run` gates from workers.
5. Review all artifacts, independently verify answer keys and any arithmetic/code/technical claims, then accept one at a time. Accepted records must remain `status: source-verified`, `editorialStatus: READY_TO_PUBLISH`, and `public: false`.
6. After batches, run `bun scripts/editorial-progress.mjs` and commit locally.
7. On zero remaining topics, audit to zero, write the computed subject report, update `editorial/RESUME.md`, and commit before the next init.

## Subject-specific cautions

- **Data science and AI literacy:** distinguish data, models, and uncertainty; avoid unsupported current capability claims and individualized decisions. Prefer official standards, original documentation, and primary research.
- **Cybersecurity:** defense-only. No credential theft, payloads, evasion, exploitation walkthroughs, or targeting. Prefer CISA, NIST, OWASP, and vendor documentation actually read.
- **Databases and SQL:** use safe, local conceptual examples; keep injection material defensive and parameterization-focused.
- **UX/UI design:** ground accessibility claims in W3C WAI/WCAG and keep usability guidance evidence-based.
- **Business, accounting, finance, and personal finance:** distinguish general education from individualized legal, tax, or investment advice. For rules/regulatory facts, read and cite current primary authorities.
- **Marketing and management:** avoid fabricated performance statistics and unsupported universal claims; use primary or high-quality institutional sources.

## Authority and commands

Read these, in order, before resuming work:

1. `CODEX_READ_THIS.md`
2. `editorial/RESUME.md`
3. `editorial/TOPIC_AGENT_BRIEF.md`
4. `HERMES_READ_THIS.md` (especially subject/phase order)

Use Bun only. The live progress command is:

```bash
bun scripts/editorial-progress.mjs
```

Always work from `/Users/moomoo/Desktop/1319_DIR`. Do not touch `/Users/moomoo/Desktop/1_/_Web_v`.
