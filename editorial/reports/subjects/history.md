# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: History (`history`)
Collection: Humanities
Phase: 4
Date: 2026-08-20

## Curriculum

Units: 1 — Foundations
Topics: 49 (planned queue contained 50 entries; see Held/Removed Topics)

## Processing

Topics processed: 49 / 49 · Published: 0 · Ready to publish: 49 · Held: 0 · Needs review: 0

One dedicated agent per topic, a fresh agent each time, in batches of up to nine concurrent within
this subject (8 + 8 + 8 + 8 + 8 + 9). Every topic was independently reviewed by the orchestrator: all
245 answer keys were verified against each question's own options, and every date, name, and attributed
figure was checked at merge — the defining control for an accuracy-critical humanities subject. Processing
ran in an isolated git worktree (branch `agent/bottomup`), bottom-up through Phase 4 after Economics and
Human Geography, disjoint from the other phases. All workers carried an anti-injection guard treating
fetched web content as data, not instructions.

## Questions

Created and verified: 245 (5 per topic) · Rejected: 0 survived to merge · Duplicates: 0
Answer key distribution: 55 / 60 / 66 / 64. Well balanced. No near-duplicate question stems survived
(none flagged at audit).

## Sources

Unique source records cited: 252
Open textbook / OER: 96 · Reference: 96 · Government / agency: 56 · Peer-reviewed: 4

Rights: REFERENCE_ONLY 163 · PUBLIC_DOMAIN 39 · EXTRACT_AND_ADAPT 31 · ATTRIBUTION_REQUIRED 19 · UNKNOWN 0

The subject is anchored on authoritative primary and OER sources: OpenStax World History (vols. 1–2) and
U.S. History for the survey narrative; the U.S. National Archives (NARA), Library of Congress, and State
Department Office of the Historian for founding documents, milestones, and primary texts; the Stanford
History Education Group / Digital Inquiry Group for the historical-thinking skills; the World History
Encyclopedia and national museums (Smithsonian, Cahokia, NPS sites) for events and archaeology; and topic-
specific authorities where the stakes are highest — the U.S. Holocaust Memorial Museum (USHMM) for the
Holocaust, the Trans-Atlantic Slave Trade Database for the slave trade, the U.S. Census for enslaved-
population figures, UNHCR/UN for displacement, Pew for religious demography, and the Haudenosaunee
Confederacy's own site for Indigenous governance. Foundational ideas and figures are attributed
(Ravenstein, von Thünen, Ricardo, Mackinder, Locke/Montesquieu/Rousseau, and many others).

Note on OpenStax licensing: OpenStax's history titles carry CC BY-NC-SA 4.0 with a no-LLM-ingestion notice
on openstax.org (some redistributed copies label CC BY 4.0). All OpenStax records were therefore treated
REFERENCE_ONLY; only uncopyrightable facts were used and all lesson prose is original synthesis.

## Quality Review

Accuracy QA: PASS — the primary control. Every date carries "c." where scholarship is approximate, and
genuine date disagreements are given as attributed ranges rather than false precision (Homo sapiens
~300k–200k; the Code of Hammurabi ~1754 BCE with variants; Civil War deaths ~620k–750k; WWII deaths
~70–85M). Workers caught and corrected several common errors: the "Gupta invented zero" shorthand (Aryabhata
c. 499 vs Brahmagupta 628, post-dating the Gupta peak); the "Han invented the compass" claim (lodestone
divination vs the later navigational compass); the Iron Curtain speech date; Tubman's rescues (the NPS-
documented ~13 trips/~70 people over the inflated tradition); and the Triple Alliance vs Central Powers
distinction.

Even-handedness / anti-Eurocentrism QA: PASS. African kingdoms, Islamic civilizations, Asian empires, and
Indigenous American societies are given equal weight and seriousness; the "Africa had no history," "empty
land," "primitive," and "Dark Ages" myths are each explicitly countered. Religions and the Reformation are
treated purely descriptively, making and evaluating no theological claim and taking no side. Political
history takes no position on contested sovereignty disputes.

Sensitive-topics QA: PASS — the paramount control for the modern topics. The Holocaust is stated plainly as
documented historical fact per USHMM (six million Jews plus millions of other victims), never minimized,
questioned, or denied, and handled with dignity and without gratuitous detail. Transatlantic and U.S.
slavery are treated with full human dignity, centering enslaved people's humanity, agency, and resistance
rather than reducing them to economics. Imperial and colonial atrocities are stated factually while
centering the colonized and their resistance. The Civil War's central cause is stated plainly as slavery —
sourced to the seceding states' own declarations — with the "Lost Cause" framing explicitly named and
rejected, not both-sided. Westward expansion's harm to Native nations, the racial exclusions of the
Progressive era, and Reconstruction as an unfinished multiracial democracy are all stated honestly.

Historiography QA: PASS. The skills topics teach sourcing, contextualization, corroboration, evidence-vs-
interpretation, and multiple/contingent causation, and the survey topics consistently distinguish
established fact from interpretation, flagging where historians genuinely disagree.

## Major Corrections

All 49 generated drafts were topic-agnostic boilerplate and were discarded. Notable structural choices:

1. **The global vs U.S. World War I split** — the `world-war-i` topic owns the global war; `world-war-i-2`
   covers only the U.S. experience and references the global topic rather than re-narrating it.
2. **The Age of Revolutions vs the American Revolution split** — `revolutions` is the comparative world
   overview (giving Haiti its full due as the only successful large-scale slave revolt); `american-revolution`
   owns the U.S. depth.
3. **Skills owned distinctly** — sourcing, primary vs secondary sources, bias vs perspective, context/
   presentism, evidence/interpretation, and causation each own their slice; overlaps are excused as the same
   standard skill at different depths.

## Cross-Topic Consistency

Terminology and prose audited across all 49 topics. Thirteen duplicate source records minted by parallel
workers for a single URL each (OpenStax chapters under two id conventions, LOC/NARA teaching pages, a Pew
report, and others) were consolidated to one canonical id per URL and the orphan registry records pruned;
all 49 topics were re-gated. Eight cross-topic prose overlaps were reworded in the non-owning topic: the
WWI assassination-trigger example shared by causation and world-war-i, the armistice/Versailles narration
shared by world-war-i and world-war-i-2, the UN-founding sentence shared by world-war-ii and globalization,
the "case study in reading history" meta-line shared by the two industrial topics, and the "consent of the
governed" connective phrasing echoed across the founding-era topics (enlightenment, u-s-history-foundations,
constitution, revolutions, american-revolution).

Remaining cross-topic term overlaps were reviewed and recorded with reasons in
`editorial/subjects/history/audit-exceptions.json`: the standard historical-thinking skills (sourcing,
contextualization, corroboration, primary/secondary source, bias) legitimately recur across the skills
cluster at different depths; "separation of powers" and "trust" are the same concept at idea-vs-application
or problem-vs-response; and "popular sovereignty" is a genuine homonym (the Enlightenment consent-of-the-
governed idea vs the antebellum Kansas-Nebraska doctrine).

## Validation

```text
bun scripts/editorial-audit-subject.mjs 4 history   # 0 issues
```

Content: PASS (49/49 through the gate) · Questions: PASS (245, keys verified) ·
Sources: PASS (252 cited, 0 unresolved rights) · Routes / Search / Accessibility: N/A, the site does not
yet render lesson pages.

## Held / Removed Topics

The initialized queue contained 50 entries; entry 1, slug
`history-should-be-divided-into-multiple-courses-rather-than-one-giant-subject`, was a mis-ingested
curriculum-planning note, not a history topic. It was pruned from `content/phase-4/content-progress.json`,
the subject's `topic-queue.json`, and the plan's `topicCount` (50 → 49). No genuine topic was dropped.

## Final Subject Status

COMPLETE — 49 of 49 topics processed, verified, and ready to publish, pending owner sign-off.
