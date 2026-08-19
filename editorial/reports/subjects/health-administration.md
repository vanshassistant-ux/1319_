# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Health Administration (`health-administration`)
Collection: Professional Studies
Phase: 1
Date: 2026-08-19

## Curriculum

Units: 6 — Healthcare Systems, Financing, Administration, Quality & Safety,
Information, Law & Policy
Topics: 24

## Processing

Topics processed: 24 / 24 · Published: 0 · Ready to publish: 24 · Held: 0 · Needs review: 0

One dedicated agent per topic, a fresh agent each time, in batches of up to eight running
concurrently within this subject only. Every topic was independently reviewed by the
orchestrator: all 120 answer keys were verified against each question's own options (not
the worker's self-report), the highest-risk factual claims were spot-checked against live
primary sources, and worked-example arithmetic (insurance cost-sharing, FTE/HPPD staffing,
days-in-A/R and net collection rate, queuing/throughput, readmission and risk-stratification
rates, national-spending growth) was re-derived at merge.

## Questions

Created and verified: 120 (5 per topic) · Rejected: 0 survived to merge · Duplicates: 0
Answer key distribution: 32 / 31 / 27 / 30. The persistent away-from-D skew flagged across
the three prior subjects was corrected here by instructing every worker to distribute keys
deliberately across all four positions — the most balanced distribution in the project so far.

## Sources

Unique source records cited: 166
Government / agency: 100 · Reference: 42 · Peer-reviewed: 18 · Standards bodies: 4 ·
Open textbook / OER: 2

Rights: REFERENCE_ONLY 127 · PUBLIC_DOMAIN 34 · ATTRIBUTION_REQUIRED 4 ·
EXTRACT_AND_ADAPT 1 · UNKNOWN 0

Copyright discipline held throughout. CPT and MS-DRG code descriptors (AMA / CMS), Joint
Commission, NCQA, AHIMA, ACHE, and IHI materials are cited by name and described in original
wording; no code descriptor, standard, code-of-ethics text, or toolkit prose is reproduced
anywhere in the subject. HIPAA and other regulatory requirements are restated from the
regulation itself (eCFR / U.S. Code / Federal Register), never from summarizer prose.

## Quality Review

Factual QA: PASS. Time-sensitive program facts were dated with their year and source:
national health spending $5.3 trillion / 18.0% of GDP / $15,474 per capita in 2024 (CMS NHE,
internally consistent against 2024 nominal GDP), Medicare/Medicaid enrollment, uninsured rate
8.2% (2024 ACS), and coverage shares from Census P60-284 (2023). No undated statistic shipped.

Health-adjacency QA: PASS. Every topic teaches administrative and system concepts, not
individualized clinical, diagnostic, coding, billing, legal, or benefits-eligibility advice.
Medicaid eligibility is stated as state-varying, never universal.

Attribution QA: PASS. Frameworks are credited to their originators and, where the literature
is contested, positions are attributed and none adjudicated: the *To Err Is Human* (2000)
44,000–98,000 figure is given as an attributed, debated estimate rather than a settled count;
Donabedian (structure–process–outcome), the IOM six aims, Reason's Swiss cheese model,
Schein's three levels, Weick & Sutcliffe's high-reliability principles, Kissick's iron
triangle, Beauchamp & Childress's four principles (distinguished from the Belmont Report's
three), and Aiken et al. (2002) on nurse staffing are each attributed. Health Policy presents
the government's-role and cost-vs-access debates as genuinely contested.

Legal / Regulatory QA: PASS. HIPAA is mapped to 45 CFR Parts 160/162/164 with the Privacy,
Security, and Breach Notification Rules distinguished; civil penalties are taught as
inflation-adjusted ("as adjusted") rather than as a stale fixed figure. Licensure,
certification, and accreditation are kept as three distinct concepts, with deemed status as
the bridge.

Medical / Financial QA: PASS (educational framing only; no advice).

## Major Corrections

All 24 generated drafts were topic-agnostic boilerplate and were discarded. Corrections and
disciplined omissions worth recording:

1. **NHE year pinned to 2024 actuals**, with per-payer and per-category dollar figures cross-
   checked for internal consistency against the reported GDP share, rather than repeating an
   older total.
2. **Medicaid enrollment total deliberately not asserted** as a single number, because current
   sources disagree by month/source; the lesson uses only the combined-programs framing both
   figures support.
3. **HITECH chronology stated precisely** — HITECH (2009) → Meaningful Use (2011) → renamed
   Promoting Interoperability (2018) → Cures Act information-blocking applicability (April 2021)
   — rather than the conflated versions in circulation.
4. **`To Err Is Human` estimate framed as contested**, with both the "overstated" and "if
   anything higher" critiques noted, and the methodology (extrapolation from two chart-review
   studies) stated.
5. **CPT/DRG copyright respected**: coding systems described functionally; no descriptor text
   reproduced. **Belmont's three principles distinguished from Beauchamp & Childress's four** to
   pre-empt the common conflation.
6. **NQF's changing federal role handled conservatively** — only durable facts stated, no
   contested merger date or successor entity asserted.
7. **Claims left unasserted for want of a clean primary read** where federal hosts blocked the
   fetcher: figures were verified via eCFR/Federal Register APIs, Europe PMC, govinfo,
   uscode.house.gov, or Internet Archive captures, and each source note records which copy was
   actually read against the canonical agency URL.

## Cross-Topic Consistency

Terminology and prose audited across all 24 topics. Two genuine prose duplications created by
parallel workers were rewritten: a near-identical Administrative Procedure Act notice-and-
comment sentence shared by Healthcare Regulation and Health Policy, and the Weick & Sutcliffe
high-reliability enumeration shared by Organizational Culture and Patient Safety (reworded in
Patient Safety, the non-owning topic).

Three duplicate source records created by parallel workers were resolved: two AHRQ PSNet
culture-of-safety ids merged to one; a second `5 U.S.C. 553` id repointed to the existing
registry record; and a pre-existing cross-subject duplicate surfaced by the registry-wide check
— an `anderson-2002` record in the Education subject carrying a mispasted Krathwohl-PDF URL —
was corrected to the canonical Theory Into Practice DOI (Education re-audited clean afterward).

Remaining cross-topic overlap is limited to unavoidable canonical phrasings — the standard
Medicaid "joint federal-state program" definition, the federal "clean claim" operative
definition, and the literal statutory name of the HITECH Act — each recorded with its reason in
`editorial/subjects/health-administration/audit-exceptions.json`.

## Validation

```text
bun scripts/editorial-audit-subject.mjs 1 health-administration   # 0 issues
bun run phase1:validate ; bun run typecheck ; bun run build
```

Content: PASS (24/24 through the gate) · Questions: PASS (120, keys verified) ·
Sources: PASS (166 cited, 0 unresolved rights) · Routes / Search / Accessibility: N/A, the
site does not yet render lesson pages.

## Held Topics

None.

## Final Subject Status

COMPLETE — 24 of 24 topics processed, verified, and ready to publish, pending owner sign-off.
