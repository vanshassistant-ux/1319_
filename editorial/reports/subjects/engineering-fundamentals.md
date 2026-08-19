# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Engineering Fundamentals (`engineering-fundamentals`)
Collection: Professional Studies
Phase: 1
Date: 2026-08-19

## Curriculum

Units: 6 — Engineering Thinking, Mechanics, Materials, Electrical Fundamentals,
Thermal & Energy Systems, Engineering Practice
Topics: 28

## Processing

Topics processed: 28 / 28 · Published: 0 · Ready to publish: 28 · Held: 0 · Needs review: 0

One dedicated agent per topic, a fresh agent each time, in batches of seven running
concurrently within this subject only. Every topic was independently reviewed by the
orchestrator, including all 140 answer keys and independent re-execution of the
worked-example arithmetic in several topics.

## Questions

Created and verified: 140 (5 per topic) · Rejected: 0 survived to merge · Duplicates: 0
Answer key distribution: 33 / 48 / 40 / 19. Position D remains under-used — the same
pattern seen in Social Work and Criminal Justice, now a three-subject trend that should be
corrected in the worker brief before the next subject.

## Sources

Unique source records cited: 297
Open textbook / OER: 137 · Government / agency: 106 · Standards bodies: 34 ·
Peer-reviewed: 13 · Other reference: 7

Rights: PUBLIC_DOMAIN 52 · EXTRACT_AND_ADAPT 10 · ATTRIBUTION_REQUIRED 4 ·
REFERENCE_ONLY 231 · UNKNOWN 0

Engineering standards (ASME, ASTM, ISO, ISO/ASTM, ANSI/NISO, MIL-STD) are cited by
designation with their scope described in original wording. No standard text, table,
symbol set, tolerance grade, allowable stress, or design value is reproduced anywhere in
the subject — the source map's binding caution, and it held.

## Quality Review

Technical / quantitative QA: PASS — this is the subject's defining check. Every published
number was executed before shipping, and the orchestrator independently re-derived a
sample at merge: the crate friction problem (fs,max 105.9 N, a = 1.48 m/s²), the
work-energy example solved twice and agreeing to the last digit (5.636801826930118 m/s by
both routes), the inelastic collision (42.9% of kinetic energy dissipated), transmission
losses scaling exactly 100× between 15 kV and 150 kV, radiation in kelvin versus the
Celsius error (225.39 W versus 0.641 W), and the factor-of-safety pair (1.309 on yield,
2.094 on ultimate, ratio exactly 1.600) with the slender column governed by buckling at
105.3 kN against 400 kN yield capacity. All matched.
Safety QA: PASS — every topic carries the educational-material and not-engineering-design-
guidance statement required by the source map, with the licensed-engineer and governing-code
point stated explicitly. Electrical topics add that live work requires qualified personnel;
prototyping adds shop-safety framing. No procedure a reader could apply to real wiring,
structure, pressure system, or machine appears anywhere.
Factual QA: PASS · Rights QA: PASS
Legal / Medical / Financial / Political QA: N/A

## Major Corrections

All 28 generated drafts were topic-agnostic boilerplate and were discarded. The research
corrections worth recording:

1. **Mars Climate Orbiter told correctly.** The unit mismatch was pound-force seconds
   versus newton-seconds in impulse data, taken from NASA's own mishap board report — not
   the "miles versus kilometres" version in circulation.
2. **Peelian-style folklore avoided throughout**: SP 811's 2008 edition predates the 2019
   SI, so redefinition claims were sourced to SP 330 (2019) and the BIPM brochure while
   SP 811 was used only for style rules and conversion factors. The U.S. survey foot
   deprecation (1 January 2023) was added, which SP 811 also predates.
3. **Ohm's law taught as an empirical description of ohmic behaviour**, not a law of
   nature, with a real sourced filament operating point showing a constant-resistance
   assumption off by a factor of 16.
4. **Rogers Commission conclusion corrected.** An unverified draft attributed a mid-analysis
   finding to the Commission as its conclusion; the actual Chapter IV conclusion is failure
   of the pressure seal in the aft field joint due to a faulty design. Corrected from the
   report.
5. **Grimshaw v. Ford re-read from the opinion**, which records that the Grush-Saunby
   Report — "the Pinto memo" — was excluded from evidence. The folklore version is retired
   from the primary record rather than from secondary commentary.
6. **Reliability index range struck.** An unverified draft claimed β "generally falls
   between about 2 and 8"; NBS SP 577 says no such thing, so the lesson gives the study's
   actual adopted targets with p_f computed from them.
7. **Traceability claim struck.** A three-element formulation attributed to NIST is not on
   the NIST page; replaced with what the page actually states.
8. **Germane-load-style overreach avoided in CAD and prototyping**: dated interoperability
   cost figures, PMI adoption from a self-selected vendor survey, and IGES currency were
   each either dated in-text or not asserted.
9. **Claims cut for want of verification**, including a Flint foot-patrol outcome, an
   endurance-limit generalisation, titanium modulus figures that varied across sources, and
   the seventh additive-manufacturing category where one federal page lists only six.

## Cross-Topic Consistency

Terminology audited across all 28 topics. One genuine homonym was disambiguated —
`datum (energy reference)` versus `datum (drawing reference)`. Three flagged term
collisions (constraint, specification, dimensional analysis) were reviewed and accepted as
compatible treatments at different depths. One genuine prose duplication was rewritten:
prototyping and testing-and-validation opened with the same sentence. Two awkward
constructions ("at at least") were corrected.

Four duplicate source records created by parallel workers were merged (a BIPM CGPM
resolution, an NCEES licensure page, and an SP 811 chapter under two ids each).

Remaining cross-topic overlap is the mandatory safety notice, the NSPE paramountcy
formulation, SI definitions, and shared dataset citations — each recorded with its reason
in `editorial/subjects/engineering-fundamentals/audit-exceptions.json`.

## Validation

```text
bun scripts/editorial-audit-subject.mjs 1 engineering-fundamentals   # 0 issues
bun run phase1:validate ; bun run typecheck ; bun run build
```

Content: PASS (28/28 through the gate) · Questions: PASS · Sources: PASS (297 cited,
0 unresolved rights) · Routes / Search / Accessibility: N/A, the site does not yet render
lesson pages · Build: PASS

## Held Topics

None.

## Final Subject Status

COMPLETE — 28 of 28 topics processed, verified, and ready to publish, pending owner sign-off.
