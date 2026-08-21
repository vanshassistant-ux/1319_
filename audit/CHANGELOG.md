# Phase 1 Audit — CHANGELOG

## Phase A — content fixes (applied to content/phase-1/review/*.json, mirrored to editorial md where present)

### Grammar / typos (mechanical)
- graphic-design-and-digital-media-photo-editing.json — questionBank[0].explanation: removed stray word ("It reports dimensions nothing about…" → "It reports nothing about…").
- graphic-design-and-digital-media-video-basics.json — collegeVersion[2]: "clipMP4" → "clip.mp4".
- computer-science-fundamentals-boolean-logic.json — collegeVersion[0]: restored dropped logic symbols "∧ (conjunction), ∨ (disjunction), ¬ (negation)".
- computer-science-fundamentals-searching.json — vocabulary[5]: "(lo + hi) using integer division by 2" → "(lo + hi) / 2 using integer division".
- python-programming-basic-testing.json — quickCheck[1].options[1..2]: added missing closing backticks.
- python-programming-sets.json — questionBank[0]/quickCheck[0] options[3]: "`()" → "`()`".
- python-programming-for-loops.json — workedExample: output block fenced as ```text (was ```python).
- environmental-sustainability-part-ii-computer-and-technology.json — "the roughly billions" → "the billions".
- hospitality-and-tourism-customer-service.json — commonMistakes[1]: removed garbled residue "better service always means".

### Content correctness (verified before fixing)
- python-programming-dictionaries.json — workedExample shown output corrected to Python's real single-quoted repr (verified by running python3).
- python-programming-python-syntax.json — workedExample string said "three physical lines" while the statement spans four; string + echoed output corrected to "four physical lines" (consistent with surrounding prose).
- environmental-sustainability-energy-efficiency.json — "$8.94" → "$8.93" per-bulb saving (recomputed: 65.7 kWh×$0.16 − 9.9 kWh×$0.16 = $8.93).
- computer-literacy-search-engines.json — questionBank[2]+quickCheck[2] prompt: nih.gov mislabeled "a single university's website" → "a single website" (NIH is a federal agency).

### Tone / editorial-leak fixes (rationale in DECISIONS.md)
- hospitality-and-tourism-front-office-operations.json, -pricing-and-occupancy.json, -tourism-economics.json — removed internal QA notes ("arithmetic run in Bash…") that leaked into student-facing workedExamples.
- python-programming-running-python-programs.json — removed author-environment leak "on this Mac".
- python-programming-numbers.json — eli10: glossed "binary" and "imaginary" in kid terms.
- social-work-and-human-services-advocacy.json — eli10.analogyLimits rewritten to kid level (statute/rulemaking/evidentiary-hearing jargon removed, Goldberg v. Kelly kept with plain-language description).
- social-work-and-human-services-motivational-interviewing-basics.json — eli10: "ambivalence" glossed ("mixed feelings — wanting to change and not wanting to, both at once").
- criminal-justice-and-criminology-constitutional-protections.json — eli10: "felony" and "grand jury" glossed in kid terms.

### Structural
- 12 python-programming lessons (exceptions, modules, scope, booleans, conditionals, function-parameters, include-small-executable-examples-throughout, input-and-output, introductory-data-analysis, operators, return-values, while-loops) — quickCheck normalized to the first 3 questionBank objects (was: empty array ×3, bare prompt strings ×9).
- health-administration-organizational-culture.json — removed 4 stray `"heading2": null` keys (schema consistency).
- computer-science-fundamentals variables/scope/debugging (review+evidence) — stale source ids `python-reference-execution-model` / `python-tutorial-errors` renamed to canonical registry ids `python-language-reference-execution-model` / `python-docs-errors` (identical URLs; fixes 3 dangling citations in lessons.json).

### Publish
- All 282 topics flipped READY_TO_PUBLISH → PUBLISHED and re-validated through `editorial-accept-topic` (282 accepted, 0 failures). public/content/phase-1/lessons.json now serves 282 public lessons; phase-1 source-registry statuses advanced to published.

## Phase B/C — site changes (worktree branch audit/live, commits 65c875c/72fe8d4 merges + 176d078)
- Merged the deployed compliance branch with the editorial content line (scripts kept from editorial side; site chrome, fonts, legal routes, security headers kept from compliance side; drafts stay out of the web root via git rename tracking).
- NEW scripts/build-site-content.mjs — generates public/content/site/index.json (40KB directory) + 282 per-topic JSON files (published lessons only, sources resolved to title/url/provider, malformed quiz items filtered) + full 583-URL sitemap.xml.
- src/content/homepage.ts — replaced the 8 fictional placeholder subjects (Anatomy & Physiology "42 topics", Biology, Chemistry…) with the 11 real published subjects and true lesson counts.
- src/main.tsx — added live routes: /subjects/<subject> (unit-grouped published topic lists), /subjects/<s>/<t> (college lesson page: In-30-Seconds, why-it-matters, objectives, college sections, vocabulary, worked example, common mistakes, compare/contrast, key takeaway, interactive quick-check quiz, related-topic chips, numbered sources), /subjects/<s>/<t>/eli10 (standalone shareable Eli page: kid explanation, analogy, analogy-limits, big-idea, CTA back to college version). /subjects directory now shows "N lessons live" badges. Per-page document titles. Graceful topic-404. Featured homepage section now points at a real lesson (Algorithms) instead of a nonexistent one.
- src/styles.css — mobile-first lesson/Eli page styles (16px+ body, ≥44px tap targets, code blocks scroll in their own container, AA-checked colors). FIXED pre-existing production bug: `.nav a:not(.button){display:none}` hid the header logo at ≤850px on the live site; rescoped to `.nav>nav a:not(.button)`.
- index.html — removed the under-construction overlay (site is live now); added site-level OG/Twitter meta.
- public/_headers — dropped the now-unused inline-script CSP hash (script-src 'self' only); added cache policy for /content/site/*.
- public/robots.txt + sitemap.xml — canonical host https://eliexplains.org; sitemap covers all 583 routes.

## Phase E
- Pushed audit/live → origin/agent/eliexplainsorg (fast-forward 62f627d..176d078, no force).
