# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Anthropology (`anthropology`)
Collection: Health & Medicine (phase 4)
Phase: 4
Date: 2026-08-22

## Curriculum

Units: 1 — Foundations
Topics: 28 (all complete)

## Scope

- Foundations: what-is-anthropology, four-fields-of-anthropology
- Culture: culture, cultural-relativism, ethnocentrism
- Methods: fieldwork, participant-observation, fieldwork-ethics
- Language: language-and-culture
- Social: kinship, family, marriage, social-organization, political-systems
- Economy: economic-systems, subsistence, globalization
- Health: medical-anthropology
- Archaeology: archaeology, archaeological-evidence
- Human origins: human-evolution, primates, early-hominins, homo-sapiens
- Applied: race-as-a-social-and-biological-concept, applied-anthropology

## Editorial Notes

- Source backbone: OpenStax Introduction to Anthropology (Tier A — read via Wayback captures of canonical URLs or the LibreTexts CC BY 4.0 mirror; current openstax.org shows CC BY-NC-SA with an LLM-ingestion notice → all OpenStax usage REFERENCE_ONLY, aiIngestionAllowed=false), AAA (including the 1998 AAA Statement on Race and 2012 Code of Ethics), Smithsonian Human Origins Program (live), SAPIENS (live), Society for Medical Anthropology, SfAA, NAPA, Britannica (Tier B via Wayback), UNESCO, plus verified primary texts (Sumner's Folkways 1906 on Project Gutenberg — public-domain short attributed quote used for the ethnocentrism coinage).
- 28/28 merged READY_TO_PUBLISH. participant-observation needed THREE resume attempts (two workers hit the tool cap with research done; the third wrote files in its first calls and passed). One tool-cap interrupt (race-as-a-social-and-biological-concept, political-systems) resolved by orchestrator-side re-gating at merge.
- Source-id hygiene: the final-wave worker for participant-observation declined to mint the proposed 2-4/1-8/3-6/3-3/2-8 ids after checking the registry, correctly reusing existing section ids (2-3-ethnography-ethnology, 1-7-insiders-view, 1-5-holism) — a good model of registry-first behavior. One worker also noted the book's real section titles differ from naive slugs (3.6 is "The Paradoxes of Culture").
- Policy stance: race taught per the AAA Statement (not a valid biological category; a social construct with real effects) with Smithsonian corroboration; no biological claims, no policy positions; religion/ritual described as cultural systems (Durkheim/Geertz/Turner/van Gennep attributions), never evaluated theologically; kinship/marriage/family variation described factually without value judgments; human evolution factual per Smithsonian/OpenStax with attributed dates; medical anthropology explicitly education-not-advice.
- Data discipline: only attributed figures (8-6 MYA split, 1-4% Neanderthal ancestry in non-African genomes, ~7,000 languages, 300-50,000 yr radiocarbon range); no invented statistics.

## Audit

- Total questions: 140 (28 × 5). All lessons ≥1 C and ≥1 D, max ≤3/slot.
- Final residual: 7 TERM only — field-level definition differences in adjacent lessons (holism, enculturation, reciprocity, ritual, sociality, hierarchy, hominin), each contextually correct and source-attributed; documented in audit-exceptions.json.
- Structural issues fixed this window: 3 SRCDUP registry collisions (openstax 1-6-cross-cultural ×2; openstax 1-key-terms ×2; Smithsonian intro-evolution ×3 ids for one URL) — users repointed, dup records pruned; 3 QNEAR stem pairs (fieldwork/participant-observation, archaeology/primates, human-evolution/primates) restructured; 3 REUSE pairs (Malinowski standard sentence, radiocarbon definition, 8-6 MYA ancestor fact quoted in sibling lessons) resolved with unique variants; 1 GRAM block (archaeological-evidence "A)" option parens → "A." style); 2 MD issues (economic-systems missing ## Related Topics added; kinship.md H1 title restored after an orchestrator-side edit artifact — a reminder that targeted md string surgery must be verified end-to-end).

## Verification

- Every topic gated orchestrator-side — 28/28 ACCEPTED, zero rejects.
- Public content rebuilt post-fix (1242/1299 genuine, 95.6%) and re-audited to 0 structural issues + 7 TERM.
- quickCheck verified verbatim across all 28; md answer markers match correctIndex.
