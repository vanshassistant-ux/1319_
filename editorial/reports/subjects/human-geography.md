# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Human Geography (`human-geography`)
Collection: Social Sciences
Phase: 4
Date: 2026-08-19

## Curriculum

Units: 1 — Foundations
Topics: 28

## Processing

Topics processed: 28 / 28 · Published: 0 · Ready to publish: 28 · Held: 0 · Needs review: 0

One dedicated agent per topic, a fresh agent each time, in batches of up to eight concurrent within
this subject (8 + 8 + 8 + 4). Every topic was independently reviewed by the orchestrator: all 140 answer
keys were verified against each question's own options, and each worked calculation and dated figure was
checked at merge. Processing ran in an isolated git worktree (branch `agent/bottomup`), bottom-up through
Phase 4 after Economics, disjoint from the other phases.

## Questions

Created and verified: 140 (5 per topic) · Rejected: 0 survived to merge · Duplicates: 0
Answer key distribution: 32 / 33 / 39 / 36. Well balanced. One cross-topic near-duplicate stem (a nearly
identical "which three dimensions does the HDI combine" question on economic-development and
human-development-indicators) was caught by the audit and reworded.

## Sources

Unique source records cited: 125
Open textbook / OER: 42 · Reference: 41 · Government / agency: 40 · Peer-reviewed: 2

Rights: REFERENCE_ONLY 82 · ATTRIBUTION_REQUIRED 19 · EXTRACT_AND_ADAPT 17 · PUBLIC_DOMAIN 7 · UNKNOWN 0

The subject leans on authoritative primary sources for every quantitative and definitional claim: the UN
(World Population Prospects, World Urbanization Prospects, UNHCR for displacement, UNDP for the HDI, the
SDGs), the U.S. Census Bureau, the FAO (food security / SOFI), Pew Research (religious demography),
Ethnologue / UNESCO (languages), the IPCC and NASA/NOAA (climate), IDMC (disaster displacement), the World
Bank / Our World in Data (development and trade), the Global Footprint Network, USGS (maps/GIS), and
National Geographic Education, plus open human-geography textbooks (Dorrell & Henderson, Finlayson, and
others) for concepts and models. Foundational models and ideas are attributed to their originators
(Ravenstein, Lee, von Thünen, Borlaug, Burgess/Hoyt/Harris-Ullman, Sassen, Weber, Rostow, Harvey,
Mackinder/Mahan, Wackernagel & Rees, ul Haq & Sen).

## Quality Review

Even-handedness QA: PASS — the subject's defining control. Culture, language, religion, and ethnicity are
treated descriptively and comparatively, with no tradition, language, or group ranked or privileged;
religion is handled purely as a geographer would (distribution, diffusion, sacred space), making and
evaluating no theological claim. Political geography, borders, and geopolitics take no side on any specific
territorial or sovereignty dispute — dispute *types* are taught as categories, and classical geopolitical
theories (Mackinder, Mahan) are presented as historically important ideas, not endorsed truths, with the
expansionist misuse (Ratzel/Lebensraum) noted neutrally.

Sensitive-content QA: PASS. Environmental determinism is presented plainly as a historical, discredited
idea, stating without euphemism that it was used to justify racism and colonialism, and contrasted with
possibilism. Forced displacement uses the precise UNHCR/1951-Convention definitions (refugee vs
asylum-seeker vs IDP vs migrant) and is handled humanely and without sensationalism. Climate change's
basic science is stated plainly as settled and attributed to the IPCC (not framed as a "debate"), while
specific climate *policy* choices are kept as the genuinely contested, normative domain.

Dated-figures QA: PASS. Every moving figure carries its year and source: world population ~8.2 billion in
2024 (peak ~10.3B in the 2080s, UN); the ~2007-08 majority-urban crossing and ~68%-urban-by-2050
projection (UN); ~123.2 million forcibly displaced end-2024 (UNHCR); ~673 million undernourished in 2024
(FAO SOFI 2025); global religious shares dated to 2020 (Pew); 1.09 °C warming and NASA's 2024 record; and
the HDI figures dated to the 2023/24 Human Development Report. Illustrative model numbers are labeled as
illustrative.

Correctness QA: PASS. The quantitative worked items were re-derived — the arithmetic vs physiological
density calculation, the net-migration computation, and the HDI geometric-mean example (≈0.776 geometric
vs 0.779 arithmetic).

## Major Corrections

All 28 generated drafts were topic-agnostic boilerplate and were discarded. Notable choices:

1. **Mirror-topic pairs split cleanly** — population (numbers) vs population-distribution (where/density);
   agriculture (farming/production) vs food-systems (supply chain/security); urbanization (the process/rate)
   vs cities (internal structure/models); economic-development (overview/theories) vs
   human-development-indicators (HDI mechanics in depth).
2. **Models framed as models** — the Demographic Transition Model is presented as a European-origin
   generalization with limits; the city-structure and location models carry their attributions and limits.
3. **Prompt-injection resilience** — two workers (ethnicity, political-geography) encountered instructions
   embedded in web sources they read (to switch directories, change task, or skip verification); both
   correctly refused, wrote nothing, and were relaunched cleanly with an explicit anti-injection guard that
   was then carried on all subsequent workers. No injected content entered the pipeline.

## Cross-Topic Consistency

Terminology and prose audited across all 28 topics. Three duplicate source records minted by parallel
workers for one URL each (an Our World in Data trade page, a UN membership page, and a UNDP HDI page) were
consolidated to one canonical id per URL and the orphan registry records pruned; affected topics were
re-gated. Four cross-topic prose overlaps were reworded in the non-owning topic: the Montevideo statehood
criteria shared by political-geography and states-and-nations (16 shared 8-grams → 0, with political-
geography now handing the full criteria to states-and-nations), the territoriality "every scale" sentence
shared by political-geography and geopolitics, the refugee/IDP hand-off shared by migration and
climate-and-society, and the "income is an incomplete measure" framing shared by economic-development and
human-development-indicators.

Remaining cross-topic term overlaps were reviewed and recorded with reasons in
`editorial/subjects/human-geography/audit-exceptions.json`: four are genuine homonyms or compatible-depth
uses — "scale" (scale of analysis vs map scale), "node" (transport hub vs functional-region focus),
"territoriality", and "HDI".

## Validation

```text
bun scripts/editorial-audit-subject.mjs 4 human-geography   # 0 issues
```

Content: PASS (28/28 through the gate) · Questions: PASS (140, keys verified) ·
Sources: PASS (125 cited, 0 unresolved rights) · Routes / Search / Accessibility: N/A, the site does not
yet render lesson pages.

## Held Topics

None. Unlike the economics subject, all 28 queue entries were genuine topics (no mis-ingested fragments).

## Final Subject Status

COMPLETE — 28 of 28 topics processed, verified, and ready to publish, pending owner sign-off.
