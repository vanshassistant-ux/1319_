# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Social Work & Human Services (`social-work-and-human-services`)
Collection: Professional Studies
Phase: 1
Date: 2026-08-18

## Curriculum

Units: 6 — Foundations, Ethics, Communication, Case Management, Trauma & Crisis, Social Context
Topics: 20

## Processing

Topics processed: 20 / 20
Published: 0
Ready to publish: 20
Held: 0
Needs review: 0

One dedicated agent per topic, a fresh agent each time, four batches of five running
concurrently within this subject only. Every topic was independently reviewed by the
orchestrator — including a question-by-question check of all 100 answer keys — before
being merged.

`READY_TO_PUBLISH` is the deliberate terminal state, matching the Education subject and
the repository's existing precedent. Publication is an owner decision.

## Questions

Created: 100 (5 per topic)
Verified: 100
Rejected: 0 survived to merge
Duplicates removed: 0 — no duplicate or near-duplicate stems across the subject
Answer key distribution: 20 / 34 / 31 / 15 across the four positions. Positions B and C
run somewhat hot and D somewhat cold; the spread is within tolerance but is worth
watching as more subjects land.

## Sources

Unique source records cited: 234
Government / agency primary: 101
Peer-reviewed: 89
Standards bodies: 13
Open textbook / OER: 8
Other reference and documentation: 23

Rights classification:
- PUBLIC_DOMAIN: 79
- EXTRACT_AND_ADAPT: 1
- ATTRIBUTION_REQUIRED: 17
- LINK_ONLY: 1
- REFERENCE_ONLY: 136
- UNKNOWN or HOLD_FOR_REVIEW: 0

The NASW Code of Ethics, the ACA, APA and NOHS codes, and every other copyrighted
professional standard are REFERENCE_ONLY. No code text is reproduced anywhere in the
subject; every standard is described in original wording. Two duplicate registry records
created by parallel workers (the NASW Code under two ids, the Child Welfare Information
Gateway mandated-reporting publication under two ids) were merged during the audit.

## Quality Review

Factual QA: PASS — every topic carries an evidence packet whose claims resolve to
registered sources
Technical QA: PASS — the positive-predictive-value worked example in `needs-assessment`
was recomputed independently (sensitivity .88, specificity .85, prevalence 14% → PPV 48.9%)
Medical / health-adjacent QA: PASS — no individualized clinical, diagnostic, treatment or
screening guidance anywhere; no screening protocol a reader could apply to a person;
trauma and crisis topics carry explicit educational-material notices
Safety QA: PASS — `crisis-intervention-basics` carries a prominent safety notice naming
the 988 Suicide and Crisis Lifeline, is written in the third person about professional
practice, contains no method detail, follows safe-messaging practice, and deliberately
does not enumerate Roberts' stages so that it cannot read as a script. `stress-trauma-and-
resilience` carries the same 988 line.
Legal QA: PASS — HIPAA, 42 CFR Part 2, FERPA, the Tarasoff line, IRS lobbying rules,
Goldberg v. Kelly, PRWORA, and the Social Security Act were verified against eCFR, the
Federal Register, govinfo, uscode.house.gov and IRS primary pages. U.S. jurisdiction is
stated and every legal topic carries a not-legal-advice notice.
Financial QA: PASS — poverty figures are drawn from Census P60/P70 reports and ASPE, each
dated; no benefits-eligibility advice is given
Political QA: PASS — `poverty-and-social-inequality`, `advocacy`, `community-practice` and
`social-policy-and-human-services` separate measurement facts, causal claims and normative
arguments, name disputes without adjudicating them, and advocate for nothing
Cultural QA: PASS — `cultural-humility` treats culture as dynamic, warns against group
profiling, and is honest that its outcome literature is young and largely correlational
Rights QA: PASS — see above

## Major Corrections

All 20 machine-generated drafts were topic-agnostic boilerplate and were discarded rather
than edited. The research corrections worth recording:

1. **MI-4 terminology.** The assignment brief and most current teaching material describe
   MI's spirit as partnership, acceptance, compassion and *evocation*. Miller and
   Rollnick's own account of the 2023 fourth edition broadened evocation into
   *empowerment*, and renamed processes to tasks. The worker verified this against the
   authors' own document and the lesson now teaches both editions' terms — necessary,
   since MINT's own overview page still carries the third-edition framing.
2. **Title-protection statute corrected mid-draft.** A worker initially cited NY Education
   Law §7706 for general social-work title protection; verification showed §7706 restricts
   only other enumerated licensed professionals, and general title protection comes from
   §6513. Corrected in the lesson, the question, and the evidence packet.
3. **Minnesota rule misstated by an open textbook.** An OER restates rule 5300.0350 as a
   two-year bar on *social* relationships with former clients; the rule text bars *sexual
   behavior*, and it is a Board of Marriage and Family Therapy rule rather than a general
   counseling rule. Corrected from the primary source.
4. **Dual relationships are not categorically prohibited.** APA 3.05 states outright that a
   multiple relationship not reasonably expected to cause impairment or exploitation is not
   unethical. The lesson teaches the impairment-and-exploitation test rather than the common
   textbook shorthand.
5. **Psychological debriefing** is taught as the headline correction in crisis intervention:
   a Cochrane review found no evidence that single-session debriefing prevents PTSD, with
   one trial showing worse outcomes at one year.
6. **ACE scores** are treated as population-level evidence with near-chance individual
   predictive accuracy (AUC ≈ .58–.60), and using them to make decisions about an individual
   is named as a misuse in two topics.
7. **Claims cut for want of a source**, including the ABC crisis model (no verifiable
   authoritative source), a CDC statement on ACE misuse (cdc.gov unreachable from this
   environment), Sisk et al.'s numeric effect estimates, and a duty-to-warn state tally that
   circulates widely but is not supported by NCSL's own chart.
8. **Evidence reported honestly across the subject**: trauma-informed care (AHRQ 2025 found
   the evidence insufficient, all 12 eligible studies at high risk of bias), de-escalation
   (Cochrane found no includable trials), mobile crisis (9 qualifying U.S. studies against
   ~2,000 active units), strengths-based practice (two reviews reaching different verdicts),
   advocacy, cultural humility, and community practice (131 trials, insufficient evidence to
   rank models). Warm handoffs improve connection but did not change the downstream outcome
   in the trial reported.

## Cross-Topic Consistency

Terminology was audited across all 20 topics. One flagged collision — "scope of practice"
— was reviewed and accepted: the two definitions are compatible and each fits its context.
Remaining prose overlaps are the subject's deliberate repeated safety notices (the 988 line,
the not-legal-advice statement), statutory quotations, and the CLAS language-assistance
standard; each is recorded with its reason in
`editorial/subjects/social-work-and-human-services/audit-exceptions.json`.

## Validation

```text
bun scripts/editorial-audit-subject.mjs 1 social-work-and-human-services   # 0 issues
bun run phase1:validate
bun run typecheck
bun run build
```

Content: PASS (20/20 through the acceptance gate)
Questions: PASS (100 verified, no duplicates)
Sources: PASS (234 cited, 0 unresolved rights, duplicates merged)
Routes / Search / Accessibility: N/A — the site does not yet render lesson pages
Build: PASS

## Held Topics

None.

## Notes for the Next Run

- The session's WebSearch budget was exhausted partway through this subject. The last ten
  topics were researched by direct fetch against authoritative entry points and still
  passed review, but discovery is weaker without search; workers were instructed to cut
  unverifiable claims rather than assert them, and several did.
- Several federal hosts (cdc.gov, hhs.gov, ssa.gov, congress.gov, bls.gov) refused
  automated retrieval from this environment. Workers routed around them via govinfo,
  uscode.house.gov, eCFR APIs, PMC, and Internet Archive captures, and recorded the
  substitution in each source note. A working path to those hosts would strengthen future
  subjects.
- Parallel workers twice collided in shared `/tmp`. Workers should use the session
  scratchpad for intermediate files.

## Final Subject Status

COMPLETE — 20 of 20 topics processed, verified, and ready to publish, pending owner
sign-off on publication.
