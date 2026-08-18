# Phase 1 content workflow

`content-progress.json` is the authoritative planning and publication state for Phase 1. A topic may move from `planned` through research and QA states only after an individual source record has been verified. A topic cannot be public until it is `published`, has verified source IDs, and has complete lesson content in the eventual lesson store.

Run `bun run phase1:plan` after changing the owner-authored curriculum blueprint, then `bun run phase1:validate`. The empty source registry is intentional: no sources or rights claims are invented.
