# EliExplains.org

Responsive React/Vite foundation for a college-learning platform built around one topic and two explanations: a college-level explanation followed by an Eli-10 plain-language explanation.

## Run

Use `bun install`, then `bun run dev`. Run `bun run build` for a production build.

## Content and assets

- `src/content/homepage.ts` contains all homepage subject, learning-step, trust, and quiz placeholder content.
- Future lesson data should live in `src/content/` and use the subject `slug` as its route key. Suggested routes are `/subjects/:subjectSlug/:topicSlug`.
- The reusable original Eli artwork is located at `public/eli/eli-hero.png`. Future named Eli poses belong in `public/eli/`.
- `src/styles.css` contains the centralized brand colors, spacing, typography, radii, shadows, container, and transition tokens.

The homepage components are deliberately data-driven so subject cards, quiz questions, and featured lessons can be replaced without changing presentation code.

## MedMosa Bucket A migration

The MedMosa source is read-only. Run `bun run migration:medmosa:scan` to regenerate the deterministic staging inventory under `migration/medmosa/`, then run `bun run migration:medmosa:validate`.

The scan records source hashes, course and topic maps, duplicate candidates, question classifications, rights/source review queues, and the publication manifest. It does not copy lesson bodies into the public app. Public import is allowed only for records whose manifest rights status is `READY_FOR_ADAPTATION` or `ATTRIBUTION_REQUIRED`; held, deferred, content-review, medical-review, and source-review records remain excluded. Set `MEDMOSA_SOURCE` when the source checkout is located somewhere other than the configured local path.

## Master curriculum blueprint

The owner-authored [master outline](/Users/moomoo/Desktop/ELI_WEBSITE/curriculum/master-curriculum-outline.md) is converted into a structured [curriculum manifest](/Users/moomoo/Desktop/ELI_WEBSITE/curriculum/master-curriculum.json) with `bun run curriculum:import`. It defines 44 planned subjects and their topic candidates; it is a planning source, not published lesson content. The `/subjects` directory groups these subjects into collections while the migration manifest continues to control what may actually become public.
