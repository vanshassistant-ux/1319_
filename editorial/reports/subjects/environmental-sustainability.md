# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Environmental Sustainability (`environmental-sustainability`)
Collection: Professional Studies
Phase: 1
Date: 2026-08-19

## Curriculum

Units: 1 — Foundations
Topics: 25

## Processing

Topics processed: 25 / 25 · Published: 0 · Ready to publish: 25 · Held: 0 · Needs review: 0

One dedicated agent per topic, a fresh agent each time, in batches of up to eight concurrent
within this subject. Every topic was independently reviewed by the orchestrator: all 125
answer keys were verified against each question's own options (worker self-reports of key
positions were frequently wrong), and worked examples (CO2e from GWP, footprint from an
emissions factor, kWh/energy-unit conversions, the wind-power cube law, LED savings, print/
capacity math) were re-derived at merge.

One curriculum-data defect was handled: the 25th queue entry, slug
`part-ii-computer-and-technology`, was a mis-ingested section header ("PART II — COMPUTER &
TECHNOLOGY"), not a real topic. Because the acceptance gate keys on the slug and not the
title, it was repurposed into a genuine, in-scope lesson — **"Sustainable Computing and
E-Waste"** — covering data-center/AI energy demand, e-waste, PUE, and right-to-repair, all
from dated IEA/UNITAR/FTC sources. The ugly slug is retained; the human title is correct.

## Questions

Created and verified: 125 (5 per topic) · Rejected: 0 survived to merge · Duplicates: 0
Answer key distribution: 33 / 34 / 27 / 31. Well balanced — the "distribute evenly, ensure at
least one C and one D" instruction to later batches corrected an early lean toward B.

## Sources

Unique source records cited: 161
Government / agency: 117 · Reference: 26 · Peer-reviewed: 9 · Standards bodies: 7 ·
Open textbook / OER: 2

Rights: REFERENCE_ONLY 129 · PUBLIC_DOMAIN 29 · ATTRIBUTION_REQUIRED 2 ·
EXTRACT_AND_ADAPT 1 · UNKNOWN 0

This is the most government-sourced subject in the run, as a science-and-policy subject
should be: EPA, EIA, NOAA, NASA, USGS, DOE, GSA, FTC, SEC, and the U.S. Code, plus the IPCC,
IEA, UN/UNEP, ITU/UNITAR, IFRS/ISSB, and the European Commission. Proprietary or advocacy
material — LEED (USGBC), the Ellen MacArthur Foundation, the ISO 14040/44 standards, GRI/SASB
frameworks — is REFERENCE_ONLY and described, never reproduced (no LEED point tables, no ISO
standard text, no framework text).

## Quality Review

Settled-science vs contested-policy QA: PASS — the subject's defining control. The greenhouse
effect and the human cause of warming are stated as established science (IPCC AR6: human
influence unequivocally the dominant cause); policy responses (carbon taxes vs cap-and-trade,
regulation vs markets, nuclear, degrowth) are presented as attributed, unadjudicated debates.
Weak vs strong sustainability, the emissions share of the food system, overtourism-style
carrying-capacity claims, the rebound effect's magnitude, and the EV lifecycle are each given
as genuine, sourced debates rather than settled numbers.

Dated-statistics QA: PASS. Every climate/energy/waste/water figure carries its year and
source: warming ~1.1 °C (IPCC AR6), CO2 422.8 ppm (2024, NOAA), U.S. primary energy ~82%
fossil (2025, EIA), transport 28% of U.S. GHG (2022, EPA), MSW 292.4 Mt (2018, EPA), data
centers ~415 TWh (2024, IEA), e-waste 62 Mt (2022, Global E-waste Monitor). No undated figure
shipped.

Honesty QA: PASS. Recycling is represented with its market realities (contamination,
downcycling, National Sword, ~8.7% of plastics recycled), not as an unqualified good; the
individual "carbon footprint" framing's fossil-industry PR history is noted (and attributed,
with BP's dispute); ESG is framed as politically contested with documented rating divergence;
greenwashing is quantified; the food-miles misconception is corrected.

Attribution QA: PASS — Brundtland (1987), Elkington's triple bottom line and his 2018 "recall,"
Hardin's tragedy of the commons qualified by Ostrom, Betz's limit, Jevons's rebound, Poore &
Nemecek on diet, the Millennium Ecosystem Assessment, Bullard/Warren County/UCC on
environmental justice, and the ISO 14040/44 LCA phases.

Legal / Investment QA: PASS (educational; no legal or investment advice; policy presented
neutrally).

## Major Corrections

All 25 generated drafts were topic-agnostic boilerplate and were discarded. Beyond the topic-25
repurposing above:

1. **Consensus stated plainly, not both-sidesed** — the core climate science is presented as
   established while policy is kept contested.
2. **GWP tied to its report** — AR5 vs AR6 GWP values distinguished, with a warning never to
   mix reports in one CO2e calculation.
3. **Energy terms kept precise** — primary energy vs electricity, capacity vs generation,
   withdrawal vs consumption, power vs energy.
4. **Circularity framed as aspirational** — perfect circularity is impossible; the global
   circularity metric (7.2%, 2023) is given with attribution.
5. **EV and transit claims kept honest** — EVs generally lower lifetime emissions (GREET) but
   grid- and manufacturing-dependent; a lightly loaded transit bus can exceed a car per
   passenger-mile.

## Cross-Topic Consistency

Terminology and prose audited across all 25 topics. Markdown question-option labels were
normalized. Five duplicate source records created by parallel workers minting different ids
for the same URL (an EIA capacity-factor table, two EPA waste pages, the Hardin 1968 paper,
and the NOAA CO2-trends page) were consolidated to one id each and the affected topics
re-gated.

Remaining cross-topic overlaps were reviewed and recorded with reasons in
`editorial/subjects/environmental-sustainability/audit-exceptions.json`: one term collision
(materiality, compatible at different depths) and three shared canonical phrases (the CO2e
definition, the capacity-factor definition, and the single 292.4-Mt MSW figure cited by two
adjacent topics).

## Validation

```text
bun scripts/editorial-audit-subject.mjs 1 environmental-sustainability   # 0 issues
bun run phase1:validate ; bun run typecheck ; bun run build
```

Content: PASS (25/25 through the gate) · Questions: PASS (125, keys verified) ·
Sources: PASS (161 cited, 0 unresolved rights) · Routes / Search / Accessibility: N/A, the
site does not yet render lesson pages.

## Held Topics

None. (The mis-ingested topic-25 header was repurposed into a valid lesson rather than held.)

## Final Subject Status

COMPLETE — 25 of 25 topics processed, verified, and ready to publish, pending owner sign-off.
