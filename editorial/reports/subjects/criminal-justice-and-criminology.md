# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Criminal Justice & Criminology (`criminal-justice-and-criminology`)
Collection: Society & Government
Phase: 1
Date: 2026-08-19

## Curriculum

Units: 6 — Criminal Justice System, Criminal Law Foundations, Policing, Courts,
Corrections, Criminology
Topics: 28

## Processing

Topics processed: 28 / 28 · Published: 0 · Ready to publish: 28 · Held: 0 · Needs review: 0

One dedicated agent per topic, a fresh agent each time, in batches of five to seven running
concurrently within this subject only. Every topic was independently reviewed by the
orchestrator, including a check of all 140 answer keys, before merging.

## Questions

Created and verified: 140 (5 per topic) · Rejected: 0 survived to merge · Duplicates removed: 0
Answer key distribution: 29 / 49 / 43 / 19. Positions B and C run hot and D cold — the same
mild skew seen in Social Work, still inside tolerance but now a two-subject pattern worth
correcting in future worker briefs.

## Sources

Unique source records cited: 422
Government / agency primary: 307 · Peer-reviewed: 52 · Open textbook: 27 · Other reference: 36

Rights: PUBLIC_DOMAIN 207 · ATTRIBUTION_REQUIRED 12 · REFERENCE_ONLY 203 · UNKNOWN 0

The public-domain share is high because this subject rests on primary legal authority —
Supreme Court opinions read in the govinfo bound-volume U.S. Reports, the U.S. Code, the
CFR, and federal statistical publications. No source's wording was adapted; the only
verbatim material is constitutional and statutory text and short attributed quotations
from opinions.

## Quality Review

Factual QA: PASS · Technical/quantitative QA: PASS — every published rate, percentage
change, and derived figure was executed in Bash before publication, including the crime-rate
reconciliation in `crime-data-and-crime-statistics` (independently closing the FBI's own
−4.5% volume change against the −5.375% rate change), Little's Law reproducing the BJS
32-day average jail stay, and the federal guideline arithmetic in `trial-and-sentencing`
Legal QA: PASS — every case name, citation, year, author, vote, and holding was verified
against the opinion text; U.S. jurisdiction is stated, state variation flagged, and every
legal topic carries an explicit not-legal-advice notice
Political QA: PASS — policing, sentencing, bail, capital punishment, disparities, and
criminological theory are all presented with positions attributed and none adjudicated
Cultural QA: PASS — disparities are reported as measured patterns with the causal question
left explicitly open, per the subject's binding caution
Rights QA: PASS
Medical / Financial QA: N/A

## Major Corrections

All 28 generated drafts were topic-agnostic boilerplate and were discarded. Beyond that,
the corrections that matter:

1. **Automated summarizers were wrong repeatedly, and were caught every time by reading the
   opinion.** A summary reversed the holding of *Cheek v. United States* — reporting that a
   good-faith belief that the tax laws are unconstitutional negates willfulness, when the
   Court held the opposite. Others misattributed *In re Winship* to Blackmun (it is Brennan),
   *Martin v. Ohio* to Blackmun (it is White), *Board of Education v. Rowley* to White with a
   unanimous vote (it is Rehnquist, 6–3), gave *Lambert v. California* as 6–3 (it is 5–4), and
   gave *Salerno* the wrong argument and decision dates. This is the single most important
   operational finding of the subject: for legal content, opinions must be read, not summarized.
2. **BJS categories must not be summed.** 664,200 jail + 1,254,224 prison = 1,918,424 against
   BJS's published combined 1,852,900; the ~65,000 gap is state and federal prisoners held in
   local jails, plus a midyear/yearend mismatch and six integrated-system states. Two workers
   independently refused the sum, and `jails-versus-prisons` turned it into the worked example.
3. **Miller v. Alabama stated at its real scope** — it bars only *mandatory* juvenile life
   without parole — with *Jones v. Mississippi* (2021) correctly placed as narrowing what
   *Miller* and *Montgomery* require.
4. **Booker's two-majority structure** described accurately, correcting the common "struck down
   the guidelines" shorthand: Breyer's remedial majority severed 18 U.S.C. §3553(b)(1) and
   §3742(e), leaving advisory guidelines reviewed for unreasonableness.
5. **Merton verified from the 1938 page images**, since the only available scan has no text
   layer. His table's (±) means rejection *and substitution* of goals, and he states expressly
   that the adaptations are situational role adjustments, not personality types — correcting an
   open textbook that labels the table "Personality Adaptation."
6. **Sutherland's 1947 propositions read in the fourth edition itself**, which also exposed a
   published error in an open textbook that reverses the excess-of-definitions principle.
7. **Peelian principles** attributed per the UK Home Office's own note, which records no
   evidence linking them to Peel.
8. **Plea-share figures separated by denominator** rather than collapsed: 97.7% of those
   *sentenced* federally (USSC FY2025) versus 88.9% of those *adjudicated* (BJS FY2023).
9. **Claims cut for want of verification**, including the 911 origin story, a duty-to-warn state
   tally, a GST meta-analytic effect size, the "38-fold" figure often attributed to Gatti et al.,
   and institutional-anomie's named institutions.

## Cross-Topic Consistency

Terminology audited across all 28 topics. One genuine inconsistency was fixed: "probable cause"
carried two non-overlapping definitions, and `constitutional-protections` now states the
operative totality-of-the-circumstances standard alongside the warrant-clause framing.
One awkward construction was corrected in `strain-theory`.

Remaining cross-topic overlap is the mandatory not-legal-advice notice, constitutional and
statutory text, BJS and USSC operative definitions, and single published federal figures —
each recorded with its reason in
`editorial/subjects/criminal-justice-and-criminology/audit-exceptions.json`.

## Validation

```text
bun scripts/editorial-audit-subject.mjs 1 criminal-justice-and-criminology   # 0 issues
bun run phase1:validate ; bun run typecheck ; bun run build
```

Content: PASS (28/28 through the gate) · Questions: PASS · Sources: PASS (422 cited, 0 unresolved
rights) · Routes / Search / Accessibility: N/A, the site does not yet render lesson pages · Build: PASS

## Held Topics

None.

## Final Subject Status

COMPLETE — 28 of 28 topics processed, verified, and ready to publish, pending owner sign-off.
