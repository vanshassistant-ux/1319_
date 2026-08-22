# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Databases & SQL (`databases-and-sql`)
Collection: Computing & Technology (phase 2)
Phase: 2
Date: 2026-08-21

## Curriculum

Units: 1 — Foundations
Topics: 29 (all accepted)

## Coverage

Concepts: What a Database Is, Relational Databases, Tables, Rows, Columns, Data Types, Primary Keys, Foreign Keys, Relationships, One-to-One, One-to-Many, Many-to-Many, Database Normalization.
SQL: SQL Basics, SELECT, WHERE, ORDER BY, LIMIT, INSERT, UPDATE, DELETE, Aggregate Functions, GROUP BY, JOIN, Subqueries.
Operations: Indexes, Transactions, Data Integrity, Database Security.

## Statistics

- Topics accepted: 29/29 (`source-verified`, `READY_TO_PUBLISH`, `public: false`)
- Review records: 29; lessons: 29; questions: 145 (5 per topic)
- Unique source ids cited: ~90; phase-2 registry now ~450 records
- Subject audit: 0 issues (15 compatible term-definition findings excused in `audit-exceptions.json`)
- Phase 2 content validator: passed

## Source standards

- Tier B textbook/docs backbone: W3Schools SQL, PostgreSQL 18 official docs, SQLite language reference, Microsoft Learn (SQL Server, Power BI/Dataverse relationships), Oracle SQL Language Reference; NIST CSRC glossary (Tier A) for data-integrity definitions. SQL examples verified by executing against in-memory SQLite before publishing (multiple workers).
- Conceptual-first literacy: early topics teach concepts with no SQL; SQL topics show short (≤6-line) standard-SQL examples with correct syntax; no DBA tuning, no vendor wars (LIMIT vs TOP noted factually).
- Substitutions: Khan Academy bot-blocked (dropped); NIST glossary JS-rendered (Oracle/IBM explainers used for the database definition); Microsoft Learn `/tables/data-integrity` 404 (NIST + IBM carried integrity definitions).

## Notes

- Audit cleanup was the heaviest of any subject: 20 REUSE pairs (the 'working definition comes from the people who document SQL' boilerplate across 7 lessons, the Golden Crust Bakery customers/orders example shared between foreign-keys and one-to-many, the PostgreSQL foreign-key-constraint definition quoted twice, SQLite 'SELECT makes no changes' quote), 7 QNEAR template stems, 5 SRCDUP consolidations (registry 453 → 448), 5 GRAM flags (legit SQL keywords in prose lines — examples moved to code blocks), 1 missing ## Key Takeaway heading. Every fix applied to review JSON + markdown, with evidence aligned.
- Global progress: **862/1299 (66.36%), 29/44 subjects.**
