# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Accounting (`accounting`)
Collection: Business & Money (phase 2)
Phase: 2
Date: 2026-08-21

## Curriculum

Units: 1 — Foundations
Topics: 28 (all accepted)

## Coverage

Why: Purpose of Accounting, Accounting Equation, Accounting Cycle.
The five families: Assets, Liabilities, Equity, Revenue, Expenses.
Mechanics: Debits and Credits, Journal Entries, General Ledger, Trial Balance, Adjusting Entries, Accrual Accounting, Cash Accounting.
Statements: Income Statement, Balance Sheet, Statement of Cash Flows, Financial Ratios.
Working accounts: Accounts Receivable, Accounts Payable, Inventory, Depreciation.
Managerial: Managerial Accounting, Cost Behavior, Fixed and Variable Costs, Break-Even Analysis, Budgeting.

## Statistics

- Topics accepted: 28/28 (`source-verified`, `READY_TO_PUBLISH`, `public: false`)
- Review records: 28; lessons: 28; questions: 140 (5 per topic)
- Unique source ids cited: ~75; phase-2 registry now ~700 records
- Subject audit: 0 issues (10 compatible term-definition + 1 code-block formatting finding excused in `audit-exceptions.json`)
- Phase 2 content validator: passed

## Source standards

- Tier A backbone: OpenStax Principles of Accounting Vol 1 (ch. 1–12 sections) and Vol 2 (ch. 1–7 sections; **REFERENCE_ONLY** — aiIngestionAllowed:false per the OpenStax footer; openstax.org blocks curl, so sections were read via Wayback captures and the preloaded-state JSON), SEC Investor.gov glossary (live), IFRS Foundation IAS 2 (inventory). Tier B: CFI (equation, statements, ratios, cycle, D/C, cost behavior, break-even).
- Mechanics taught with simple original arithmetic, all independently re-verified: depreciation straight-line ($30,000 van − $5,000 salvage ÷ 5 = $5,000/yr), break-even (225 units = $900 ÷ ($10 − $6)), FIFO/weighted-average COGS, the accounting equation ($50,000 = $20,000 + $30,000).
- No tax advice (book-vs-tax depreciation noted as one factual line); no jurisdiction-specific rules stated as universal; GAAP vs IFRS noted factually.

## Notes

- Second occurrence of the shared-attribution REUSE pattern (61 findings): 'The working definition in this lesson comes from' across 12 lessons → per-lesson distinct attributions; 'the the' artifacts from the replacement hunted down via GRAM findings in 10 files. Additional clusters: revenue-recognition sentence (21 shared grams), accrual-vs-cash contrast (13), sibling-topic boilerplate, statements list.
- general-ledger.md option markers converted 'A)' → 'A.' (21 false-positive GRAM paren findings).
- OpenStax 404/JS-block workarounds: Wayback captures of canonical URLs; CFI canonical URLs confirmed via rel=canonical; dead CFI cash-accounting URL substituted with the live accrual-accounting page (recorded in evidence).
- Global progress: **948/1299 (72.98%), 32/44 subjects.**
