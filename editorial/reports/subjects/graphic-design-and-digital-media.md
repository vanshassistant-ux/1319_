# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Graphic Design and Digital Media (`graphic-design-and-digital-media`)
Collection: Professional Studies
Phase: 1
Date: 2026-08-19

## Curriculum

Units: 1 — Foundations
Topics: 28

## Processing

Topics processed: 28 / 28 · Published: 0 · Ready to publish: 28 · Held: 0 · Needs review: 0

One dedicated agent per topic, a fresh agent each time, in batches of up to eight running
concurrently within this subject only. This subject was interrupted mid-run by a process
restart; the in-flight topics had written nothing trustworthy to disk, so they were re-issued
to fresh agents rather than salvaged. Every topic was independently reviewed by the
orchestrator: all 140 answer keys were verified against each question's own options (worker
self-reports of key positions were frequently wrong), and worked examples (hex-to-RGB,
print-size from pixels and ppi, grid column math, exposure in stops, video frame-count and
file-size) were re-derived at merge.

## Questions

Created and verified: 140 (5 per topic) · Rejected: 0 survived to merge · Duplicates: 0
Answer key distribution: 38 / 36 / 31 / 35. The most even distribution of the run — the
"distribute evenly, ensure at least one D" instruction corrected the early-batch drift toward
position A without over-correcting.

## Sources

Unique source records cited: 96
Reference: 37 · Standards bodies: 20 · Government / agency: 12 · Open textbook / OER: 12 ·
Documentation: 11 · Peer-reviewed: 4

Rights: REFERENCE_ONLY 87 · EXTRACT_AND_ADAPT 8 · ATTRIBUTION_REQUIRED 1 · UNKNOWN 0

Copyright discipline was the defining control for a subject about copyrighted visual work.
No copyrighted image, logo, typeface/font file, brand palette, or proprietary color value is
reproduced anywhere; example brands and typefaces are named descriptively only. Pantone,
ServSafe-style proprietary curricula, and commercial stock imagery are REFERENCE_ONLY. The
legal, accessibility, and standards content rests on primary sources — the U.S. Copyright
Office, Creative Commons's own license documentation, and the W3C WAI — not on secondary
summaries. OER carrying NonCommercial or ShareAlike terms was classified REFERENCE_ONLY and
its facts rewritten in original prose so no license obligation attaches.

## Quality Review

Factual QA: PASS. Standards and numbers are sourced exactly: WCAG 2.1 AA contrast ratios
(4.5:1 normal text, 3:1 large text and UI components), the six Creative Commons licenses and
the BY/SA/NC/ND elements, U.S. copyright's fixation requirement and four fair-use factors,
video resolution/aspect standards (ITU-R BT.709/BT.2020), and dated BLS wage/employment data
for designers.

Myth-control QA: PASS — the subject's signature risk. The golden ratio is presented as a
heuristic whose ubiquity claims are largely myth (attributed to Green's 1995 peer-reviewed
review and Fechner's non-replication); the rule of thirds is dated to John Thomas Smith
(1797); color psychology is framed as culturally contingent convention rather than science;
F-pattern/Z-pattern/Gutenberg scanning models are presented as tendencies, not laws; and the
"serif is more readable" claim is marked contested.

Attribution QA: PASS. Frameworks are credited to their originators: the C.R.A.P. principles
(Robin Williams), Müller-Brockmann and the Swiss grid, the Vox-ATypI typeface classification,
Paul Rand on logos, Chevreul and Josef Albers on simultaneous contrast, and the W3C WAI for
accessibility.

Legal / Accessibility QA: PASS (copyright and Creative Commons framed as educational, not
legal advice; ADA/Section 508 context noted without advice).

## Major Corrections

All 28 generated drafts were topic-agnostic boilerplate and were discarded. Notable
disciplined choices:

1. **Golden ratio debunked, not celebrated** — the Parthenon/Mona Lisa/Apple-logo ubiquity
   claims are named as retrofitted myth, with peer-reviewed support.
2. **ppi vs dpi kept precise** — pixels-per-inch (image/display) distinguished from
   dots-per-inch (printing); the 300 ppi and 72 ppi conventions explained by their origins
   rather than asserted.
3. **"Keyframe" disambiguated** in video — the animation/interpolation keyframe versus the
   codec I-frame, a common conflation.
4. **Manipulation ethics framed by context** — commercial retouching vs the strict
   journalism standard (NPPA), with the test being whether the result still tells the truth.
5. **License openness taught as two axes** (commercial? adaptations?) rather than a false
   linear ranking of the middle four CC licenses.

## Cross-Topic Consistency

Terminology and prose audited across all 28 topics. Markdown question-option labels and
file-extension notation were normalized. One genuine prose duplication (the macro/micro
white-space explanation shared by Principles of Design and Layout) was reworded in Layout,
the non-owning topic. Two duplicate BCcampus source records created by parallel workers were
consolidated to one id, and an orphaned golden-ratio source was attached to the lesson whose
claim it supports.

Remaining cross-topic overlaps were reviewed and recorded with reasons in
`editorial/subjects/graphic-design-and-digital-media/audit-exceptions.json`: eight term
collisions accepted as genuine homonyms (design 'point' vs typographic 'point'; picture
'format' vs page 'format') or compatible treatments at different depths (value, emphasis,
repetition, focal point, legibility, typeface), and four shared canonical phrases (the
BCcampus OER title; the naming of the rule of thirds and golden ratio; the WCAG attribution;
the definition of a raster image as a pixel grid).

## Validation

```text
bun scripts/editorial-audit-subject.mjs 1 graphic-design-and-digital-media   # 0 issues
bun run phase1:validate ; bun run typecheck ; bun run build
```

Content: PASS (28/28 through the gate) · Questions: PASS (140, keys verified) ·
Sources: PASS (96 cited, 0 unresolved rights) · Routes / Search / Accessibility: N/A, the
site does not yet render lesson pages.

## Held Topics

None.

## Final Subject Status

COMPLETE — 28 of 28 topics processed, verified, and ready to publish, pending owner sign-off.
