# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Education (`education`)
Collection: Professional Studies
Phase: 1
Date: 2026-08-18

## Curriculum

Units: 6 — Foundations of Education, Learning Theories, Educational Psychology,
Teaching & Instruction, Assessment, Classroom & Learner Support
Topics: 21

## Processing

Topics processed: 21 / 21
Published: 0
Ready to publish: 21
Held: 0
Needs review: 0

Every topic was researched and written by a dedicated single-topic agent — one agent, one
topic, a fresh agent for each — then independently reviewed by the orchestrator before
merging. Nothing was written in batches.

`READY_TO_PUBLISH` rather than `PUBLISHED` is the deliberate terminal state for this
subject. It follows the precedent set by the first reviewed topic in this repository:
lessons are complete and source-verified, and publication is an owner decision. Flipping
the subject to public is a one-line status change once the owner signs off.

## Questions

Created: 105 (5 per topic)
Verified: 105 — each answer key was checked against the topic's evidence by the writing
agent in a separate verification pass, and then independently re-checked by the
orchestrator, question by question
Rejected: 0 survived to merge; failures were corrected before acceptance
Duplicates removed: 0 — no duplicate or near-duplicate stems were found across the subject
Answer key distribution: 22 / 33 / 31 / 19 across the four positions
Difficulty mix: every topic carries at least one recall item and at least one
application or analysis item

## Sources

Unique source records cited: 274
Government / agency primary: 77
Peer-reviewed: 113
Open textbook / OER: 17
Standards bodies: 7
Other reference: 60

Rights classification:
- PUBLIC_DOMAIN: 38
- EXTRACT_AND_ADAPT: 9
- ATTRIBUTION_REQUIRED: 17
- REFERENCE_ONLY: 210
- UNKNOWN or HOLD_FOR_REVIEW: 0

Orphan records (registered but uncited): 0
Unresolved rights: 0

No source's wording was adapted anywhere in the subject. Every lesson is original
EliExplains prose. Sources whose reuse terms could not be established — including all
OpenStax and CC BY-NC material — are classified REFERENCE_ONLY and used for facts only.
Four legacy registry records left over from the pre-pipeline draft of "What Is Education?"
were removed once the rewritten lesson stopped citing them.

## Quality Review

Factual QA: PASS — every topic carries an evidence packet whose claims resolve to
registered sources; the orchestrator spot-checked the highest-risk claims against live
primary sources
Technical QA: PASS — statistical worked examples (SEM, Cohen's kappa, attenuation
ceilings, rubric generalizability) were executed in Python before publication
Medical QA: N/A
Legal QA: PASS — IDEA, Section 504, ADA Title II, and the Rowley/Endrew F. line were
verified against govinfo, eCFR, and ED primary sources; U.S. jurisdiction is stated and
every legal topic carries a not-legal-advice notice
Financial QA: N/A
Historical QA: PASS — dates and case citations verified against Library of Congress,
National Archives, and digitized session laws; historiographical disagreement is
represented rather than resolved
Political QA: PASS — the culturally responsive teaching topic states explicitly that it
takes no position on any policy, statute, party, or ideology
Cultural QA: PASS — culture is treated as dynamic and internally varied; inferring an
individual's needs from group membership is named as stereotyping
Rights QA: PASS — see above

## Major Corrections

The 21 machine-generated drafts contained no subject content. Each was topic-agnostic
boilerplate ("X is a foundational concept in Education", a toolbox-drawer analogy,
circular vocabulary, quiz items testing generic study advice). All 21 were discarded
rather than edited. Beyond that, the corrections worth recording:

1. **Dewey's laboratory school misdated.** A draft placed it at 1894–1904. The school
   opened in 1896; 1894 is when Dewey joined the Chicago faculty. Caught in orchestrator
   review, verified externally, corrected across all three files.
2. **Rowley misreported by an automated summary.** A summarizer gave the wrong author,
   wrong vote, and wrong argument date. The writing agent downloaded both opinions from
   govinfo and used the primary text: Rehnquist for a 6-3 Court, argued March 23, 1982.
3. **ISCED's "informal learning" corrected.** The earlier reviewed lesson treated it as
   unstructured everyday learning. ISCED 2011 defines it as intentional but not
   institutionalised, and gives accidental learning its own excluded category.
4. **Endrew F. framed correctly.** It did not overrule Rowley; it rejected the Tenth
   Circuit's "merely more than de minimis" gloss while declining the parents' higher
   standard.
5. **Germane load** presented per Sweller's current position (intrinsic and extraneous
   only) rather than the outdated three-load textbook version.
6. **Contested literatures represented as contested** rather than resolved: rewards and
   intrinsic motivation, growth mindset, minimal-guidance instruction, media effects,
   ability grouping, the effect size attributed to formative assessment, disproportionality
   in special education identification, and the evidence base for differentiation, UDL, and
   culturally responsive teaching as packaged approaches.
7. **Claims dropped for want of a source.** Several plausible textbook staples were cut
   because only study-guide mills carried them — Kounin's "49 classrooms" figures,
   McGarrigle & Donaldson's naughty-teddy result, Bandura's 1965 incentive reversal, and
   King-Sears et al.'s UDL effect size among them.

## Cross-Topic Consistency

Terminology was audited across all 21 topics. Two homonym collisions were found and
resolved by disambiguating the vocabulary labels rather than altering either definition:
`accommodation (Piagetian)` vs `accommodation (disability access)`, and
`criterion (in an objective)` vs `criterion (in a rubric)`.

Cross-topic prose reuse was measured by 8-word shingle overlap. Two genuine redundancies
were found and rewritten: behaviorism and classroom management carried the same statutory
paraphrase and the same PBIS tier description, and cognitivism and memory-and-learning
described the Roediger & Karpicke experiment in near-identical words. In both cases the
owning topic keeps the full treatment and the other now hands off. Remaining overlaps are
shared source titles, statutory phrases, and a repeated safety statement; each is recorded
with its reason in `editorial/subjects/education/audit-exceptions.json`.

One duplicate source record (the Section 504 FAPE FAQ under two ids) and one URL collision
(the same IES practice guide under two ids) were merged.

## Validation

Commands run, all passing:

```text
bun scripts/editorial-audit-subject.mjs 1 education   # 0 issues
bun run phase1:validate
bun run phase2:validate
bun run phase3:validate
bun run phase4:validate
bun run migration:medmosa:validate
bun run typecheck
bun run build
```

Content: PASS (21/21 topics through the acceptance gate)
Questions: PASS (105 verified, no duplicates, no positional skew)
Sources: PASS (274 cited, 0 orphaned, 0 unresolved rights)
Routes: N/A — the site does not yet render individual lesson pages; the subject route
renders from the curriculum blueprint. See Remaining Work.
Search: N/A — no lesson search index exists yet
Accessibility: N/A for lesson pages, for the same reason
Build: PASS

## Remaining Work Outside This Subject's Scope

The 21 verified lessons live in the content store and the public lesson bundle, but
`src/main.tsx` does not yet render lesson pages, related-topic navigation, or search.
Publishing this subject to readers requires that front-end work, which is a separate
task from editorial production and was not part of this pipeline.

## Held Topics

None.

## Final Subject Status

COMPLETE — 21 of 21 topics processed, verified, and ready to publish, pending owner
sign-off on publication.
