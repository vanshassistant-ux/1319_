# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Hospitality and Tourism (`hospitality-and-tourism`)
Collection: Professional Studies
Phase: 1
Date: 2026-08-19

## Curriculum

Units: 1 — Foundations
Topics: 20

## Processing

Topics processed: 20 / 20 · Published: 0 · Ready to publish: 20 · Held: 0 · Needs review: 0

One dedicated agent per topic, a fresh agent each time, in batches of up to eight running
concurrently within this subject only. Every topic was independently reviewed by the
orchestrator: all 100 answer keys were verified against each question's own options — not the
worker's self-report, which was frequently inaccurate about key positions — and the
worked-example arithmetic (folio settlement, occupancy/ADR/RevPAR, food-cost pricing, menu
engineering, PAR levels and housekeeping staffing, event budgets, tourism multipliers) was
re-derived at merge.

## Questions

Created and verified: 100 (5 per topic) · Rejected: 0 survived to merge · Duplicates: 0
Answer key distribution: 33 / 23 / 24 / 20. Position A is over-represented this subject:
instructing workers to "use A at least once" over-corrected the prior away-from-D drift.
The lesson for the next subject is to ask simply for an even spread across all four positions
without singling out any one letter.

## Sources

Unique source records cited: 95
Reference: 31 · Government / agency: 27 · Open textbook / OER: 19 · Peer-reviewed: 12 ·
Standards bodies: 6

Rights: REFERENCE_ONLY 67 · PUBLIC_DOMAIN 16 · ATTRIBUTION_REQUIRED 7 ·
EXTRACT_AND_ADAPT 5 · UNKNOWN 0

Copyright and licensing discipline held. ServSafe and other proprietary food-handler
curricula, STR/CoStar benchmark data, GSTC criteria text, and commercial vendor material are
cited by name and described in original wording; none is reproduced. Food-safety numbers rest
on the FDA Food Code (read directly), CDC, and FoodSafety.gov rather than on any copyrighted
training product. Where OER carried an ambiguous or non-commercial license, the more
restrictive reading was recorded and the source used REFERENCE_ONLY.

## Quality Review

Factual QA: PASS. Time-sensitive figures are dated with year and source: travel and tourism
at 3.03% of U.S. GDP and 6.454M direct jobs (2023, BEA TTSA); lodging-manager, food-service-
manager, and event-planner wages (May 2024, BLS OOH); leisure-and-hospitality turnover (BLS
JOLTS, 2024–2025); OTA commission ranges (dated). No undated statistic shipped.

Food-safety QA: PASS. Temperatures and rules are sourced to the FDA Food Code 2022 (41–135°F
danger zone; 145/155/165°F cook end-points; 2-hour/6-hour cooling; the Big 6; HACCP's seven
principles). Every food-safety lesson states that the Food Code is a model code adopted
variably by jurisdictions and that the content is educational, not a substitute for a
certified course or local health-code compliance. The retail 41–135°F band is distinguished
from the rounded consumer 40–140°F figure to avoid a common conflation.

Attribution QA: PASS. Frameworks are credited to their originators: SERVQUAL and the gaps
model (Parasuraman, Zeithaml & Berry), the moment of truth (Carlzon, from Normann), the
experience economy (Pine & Gilmore), NPS (Reichheld) with the Keiningham critique, menu
engineering (Kasavana & Smith), yield-management origins (airline deregulation; Kimes 1989),
Leiper's tourism-system model (1979), the service-profit chain (Heskett et al. 1994), and the
7 Ps (McCarthy/Borden; Booms & Bitner). Contested ideas are presented as contested: the
service-recovery paradox is stated with its mixed evidence (McCollough & Bharadwaj 1992 vs.
the 2000 and 2007 findings), and overtourism/carrying capacity are given with their critics.

Consumer / Legal QA: PASS (educational framing; no business, legal, franchise, or payroll
advice; wage/tip/overtime variation by jurisdiction noted).

## Major Corrections

All 20 generated drafts were topic-agnostic boilerplate and were discarded. Corrections and
disciplined omissions worth recording:

1. **The "50,000 moments of truth" misquote corrected** to Carlzon's actual ~50 million
   (≈10M customers × ~5 contacts).
2. **The service-recovery paradox framed as contested**, not as a management strategy, citing
   that recovery often does not restore satisfaction to error-free levels.
3. **Food Code danger zone taught as 41–135°F (retail)**, explicitly distinguished from the
   40–140°F consumer figure; the unverified "5,000 sq ft" Cal/OSHA §3345 housekeeping cap was
   NOT asserted, because the regulation's text contains no such threshold.
4. **BEA TTSA used for tourism's economic contribution**, since tourism is not a single
   industry in standard accounts; leakage percentages presented as attributed order-of-
   magnitude estimates, not current data.
5. **Annualized turnover (~65%) left out** in favor of directly retrieved BLS JOLTS monthly
   rates; NPS/BEA figures dated to their release years.
6. **Leiper's six "environments" flagged** as the standard teaching elaboration of the 1979
   model rather than claimed verbatim from the original paper; the fifth "A" of tourism supply
   attributed to both Dickman (activities) and Buhalis (ancillary services).

## Cross-Topic Consistency

Terminology and prose audited across all 20 topics. Markdown question-option labels were
normalized to a single style across the subject. Remaining cross-topic overlaps were reviewed
and recorded with reasons in `editorial/subjects/hospitality-and-tourism/audit-exceptions.json`:
three term collisions accepted as compatible treatments at different depths or genuine domain
distinctions (RevPAR named vs. formula; positioning of a place vs. of a brand; overtourism as
a sustainability concept vs. a marketing-management driver), and two shared canonical phrases
(the UN Tourism definition of a visitor; the U.S. Bureau of Labor Statistics attribution).

No duplicate source records were created that shared a URL under two ids.

## Validation

```text
bun scripts/editorial-audit-subject.mjs 1 hospitality-and-tourism   # 0 issues
bun run phase1:validate ; bun run typecheck ; bun run build
```

Content: PASS (20/20 through the gate) · Questions: PASS (100, keys verified) ·
Sources: PASS (95 cited, 0 unresolved rights) · Routes / Search / Accessibility: N/A, the
site does not yet render lesson pages.

## Held Topics

None.

## Final Subject Status

COMPLETE — 20 of 20 topics processed, verified, and ready to publish, pending owner sign-off.
