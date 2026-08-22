# Data Integrity

## In 30 Seconds

Data integrity is the accuracy and consistency of data over its lifetime. When a database holds a wrong price, every report, sale, and decision built on that price is wrong too — decisions are only as good as the data behind them. Databases defend integrity with three kinds of rules: entity integrity (rows are uniquely identified), referential integrity (references point at real rows), and domain integrity (values fit their type and rules). Constraints such as NOT NULL, UNIQUE, CHECK, and foreign keys reject bad data before it is stored.

## Why This Matters

Integrity is what makes stored data worth trusting. A school project can limp along with a few bad rows, but real systems — store inventories, bank ledgers, hospital records — feed every decision from the data they hold. If a product's price is wrong, checkout totals, tax, profit reports, and restocking choices are all wrong. Understanding integrity explains why databases refuse some values on purpose, why data quality is a design decision rather than an accident, and how to think about correctness in any system that stores information. It is also the foundation for later topics: keys, constraints, normalization, and transactions.

## Learning Objectives

- Define data integrity as the accuracy and consistency of data over its lifetime, using the standard working definition.
- Explain why integrity matters, using the example of a wrong price in a product table.
- Distinguish the three classic types of integrity: entity, referential, and domain.
- Identify what the main constraints — NOT NULL, UNIQUE, CHECK, and foreign keys — each enforce.
- Differentiate data integrity from database normalization.
- Evaluate what integrity rules can and cannot catch.

## The College Version

### The working definition: accuracy and consistency over time

The standard working definition comes from the Wikipedia article on data integrity: data integrity is the maintenance of, and the assurance of, data accuracy and consistency over the data's entire life-cycle. Three words carry the weight. “Accuracy” means the stored facts match the real facts they describe. “Consistency” means the data does not contradict itself — the same product has the same price in every report, and one table never disagrees with another. “Over its lifetime” means the promise holds from the moment a value is entered, through every query and update, until the data is deleted. NIST's glossary adds a complementary, security-flavored dimension: data integrity is also the property that data has not been altered in an unauthorized manner, covering data in storage, during processing, and while in transit. The two views are not rivals. The quality view asks whether the data is right; the security view asks whether anyone changed it without permission. A database needs both to be trustworthy.

### Why it matters: decisions are only as good as the data

Brightside Board Games keeps one row per product, and the products table has a price column. The board game Harbor Lights sells for $24.90. During a restock batch, a tired employee types 249.00 — a slip of the decimal point. The database accepts the value without complaint, because 249.00 is a perfectly legal number. Over the next month the store runs on that fact: checkout totals overcharge every buyer, the weekend 20%-off sale still overcharges, the sales report shows Harbor Lights selling poorly (at $249, nobody buys it), and the owner plans a deep discount that further cuts margin. Tax reports are wrong, customers complain, and a month of decisions was built on one wrong digit. The database could not know the price was wrong — that is the central lesson. Integrity rules reduce the chance that bad data gets stored; they cannot read minds. Wikipedia's article makes the stakes explicit: integrity is a critical aspect of the design, implementation, and usage of any system that stores, processes, or retrieves data.

### The three classic types: entity, referential, and domain

Database textbooks group integrity rules into three classic types. Entity integrity says every row in a table is uniquely identified, so no two rows represent the same thing — two product rows for Harbor Lights would break it. IBM's explanation ties it to unique keys: the rule relies on unique keys and values created to identify data, ensuring the same data is not listed multiple times. Referential integrity says references between tables point at real rows — no order may name a product that does not exist, and no record may be orphaned. PostgreSQL's documentation describes the mechanism: a foreign key constraint requires values in a column to match values appearing in some row of another table, which maintains referential integrity between the two tables. Domain integrity says values fit the column's type and rules — a price column holds numbers in a sensible range, and a status column holds only the statuses the business recognizes. IBM defines a domain as a specific set of values for a table's columns, with restrictions that govern the quantity, format, and content of what can be entered. Primary keys and foreign keys are the mechanisms behind entity and referential integrity, and each has its own lesson; here we name the rules, not the machinery.

### How databases enforce integrity: constraints

A constraint is a rule the database enforces automatically: when a value breaks the rule, the database refuses to store it. The main families are few and each does one job. NOT NULL requires a column to hold a value, so a row cannot be saved with a missing piece of data. UNIQUE requires all values in a column to be different, so no two rows can carry the same value there. CHECK requires values to satisfy a stated condition, such as a price being positive. And a foreign key constraint requires a value to exist as a primary key in the referenced table, which is how referential integrity is enforced. Enforcement is the point: W3Schools' reference notes that when a CHECK condition evaluates to false, the entire insert or update is aborted and an error is raised — the bad value never lands. Data types are the first layer of domain rules, but they are coarse. PostgreSQL's manual makes the gap concrete: a column containing a product price should probably only accept positive values, yet no standard data type enforces that, so a CHECK constraint is needed on top of the type. Data types get their own lesson; constraints are the rules that go beyond them.

### Integrity versus normalization, and the honest framing

The one-line distinction: normalization prevents duplication; integrity enforces correctness. Normalization restructures tables so each fact is stored in exactly one place, and database normalization has its own lesson. Integrity patrols the values themselves, rejecting anything that breaks a declared rule. The two jobs are complementary — a normalized database can still hold wrong data, and constraints can patrol a database that was never normalized. The honest framing is that integrity rules are the database's immune system: they recognize known threats — missing values, duplicates, out-of-range prices, dangling references — and reject them at the door, before they spread through reports and decisions. But an immune system only catches what it recognizes. A value that is the right type, unique, and in range can still be wrong, as the $249.00 price shows. Integrity rules make bad data harder to store; they do not make it impossible. Knowing what the rules can and cannot do is part of using them honestly.

## Key Vocabulary

- **data integrity** — The accuracy and consistency of data over its lifetime, maintained and assured while the data is stored, processed, and used.
- **entity integrity** — The rule that every row in a table is uniquely identified, so no two rows represent the same thing.
- **referential integrity** — The rule that references between tables point at real rows, so no record points at something that does not exist.
- **domain integrity** — The rule that values in a column fit the column's type, format, and allowed set of values.
- **constraint** — A rule the database enforces automatically, rejecting data that breaks the rule before it is stored.
- **NOT NULL** — A constraint that requires a column to hold a value, rejecting rows that would leave it empty.
- **UNIQUE** — A constraint that requires all values in a column to be different from one another.
- **CHECK** — A constraint that requires values in a column to satisfy a stated condition, such as a price being positive.
- **foreign key** — A column in one table whose values reference the primary key of another table; a foreign key constraint enforces referential integrity.

## Eli-10

Data integrity is the promise that the data in a database is accurate and stays consistent as it is used. Every database is a storage room full of facts: prices, names, balances, statuses. Facts that are wrong or contradictory poison everything built on them. So databases guard the door. They run every incoming value through rules: every row must be identifiable (entity integrity), every reference must point at a real row (referential integrity), and every value must fit its column's type and rules (domain integrity). Constraints are those rules in action — NOT NULL, UNIQUE, CHECK, and foreign keys. When a value breaks a rule, the database refuses it on the spot. That rejection is what keeps bad data from spreading.

## Eli's Analogy

Think of a country's border control. Every traveler is a value trying to enter the database. An officer checks each one: you must have a passport (NOT NULL — no one slips through without identification), no two travelers share a passport number (UNIQUE), your document must satisfy the rules of the day (CHECK — no expired visas, no banned items), and if you claim to be visiting someone, that person must actually exist in the country (a foreign key — references must land on real people). Travelers who fail are turned back at the border, before they can wander in and cause trouble.

The comparison stops short because border control only catches travelers it has rules for. A forged passport that looks perfect sails through — just as a price of 249.00 slips past every constraint when the true price was 24.90. Constraints reject values that break stated rules; they cannot judge whether a well-formed value is factually right. And border control does nothing for people already inside: cleaning up bad data that is already stored is a separate job from keeping new bad data out.

## Worked Example

Brightside Board Games keeps one row per product. The products table stores each game's name, category, and price, and a status column that only allows 'active' or 'retired'. When a restock batch arrives, an employee types the price of Harbor Lights as 249.00 instead of 24.90 — a slip of the decimal point. The database accepts the row: 249.00 is a number, it is unique, it passes the CHECK that prices must be positive, and 'active' is an allowed status. Nothing in the rules flags it. Over the next month the store runs on that number: checkout totals overcharge, the weekend 20%-off sale still overcharges, and the sales report shows Harbor Lights as a slow seller, so the owner plans a deep discount. A customer service call finally surfaces the error. One update fixes the row, but a month of reports and decisions was built on a wrong fact. Meanwhile, a typo like 'activ' in the status column would never have been stored — the CHECK would have rejected it instantly. The difference is the difference between rules that catch known problems and rules that cannot see the ones they were never told about.

## Common Mistakes

- **Assuming integrity means the same thing as backups or security.** Backups protect copies of data, and security controls who can reach it. Integrity is about the accuracy and consistency of the data itself; NIST's 'unaltered in an unauthorized manner' framing is one dimension of it, not the whole of it.
- **Believing constraints guarantee correct data.** Constraints enforce the rules you declare. A value can pass every constraint and still be factually wrong — 249.00 instead of 24.90 breaks no rule at all.
- **Confusing integrity with normalization.** Normalization prevents duplication by restructuring tables; integrity enforces correctness by rejecting bad values. A normalized database can still hold wrong data, and constraints can patrol an unnormalized one.
- **Thinking the database enforces rules even when none were declared.** A database only enforces constraints that were defined on the table. Without a foreign key constraint, an order can reference a customer who does not exist; without a CHECK, negative prices can be stored.
- **Mixing up the three types of integrity.** Entity integrity is about rows being uniquely identified, referential integrity is about references landing on real rows, and domain integrity is about values fitting their type and rules.

## Compare / Contrast

- **Data integrity vs. Database normalization** — Integrity enforces correctness by rejecting bad values; normalization prevents duplication by restructuring how data is organized. Different jobs, usually done together.
- **Data types vs. Constraints** — A data type limits what kind of value a column can hold (number, text, date); a constraint adds rules beyond the type, such as a positive price or an allowed status.
- **Entity integrity vs. Referential and domain integrity** — Entity integrity protects each row's identity, referential integrity protects the links between tables, and domain integrity protects the values inside columns.

## Key Takeaway

Data integrity is the accuracy and consistency of data over its lifetime. Databases defend it with constraints — NOT NULL, UNIQUE, CHECK, and foreign keys — that reject bad data before it is stored, the way an immune system rejects an infection before it spreads. Rules catch what they are built to catch; the rest is up to the people entering data.

## Practice Question Bank

**Q1.** Which statement best defines data integrity?

- A. The accuracy and consistency of data over its lifetime
- B. The speed at which a database answers queries
- C. The physical security of the building that hosts the database
- D. The number of tables stored in a database

**Key: A.** The standard working definition, used in Wikipedia's data-integrity article, is the maintenance of, and assurance of, data accuracy and consistency over the data's lifetime; NIST's glossary adds the dimension that data has not been altered in an unauthorized manner. Speed, building security, and table counts are different concerns.

**Q2.** A product table stores a board game's price as 249.00 when the true price is 24.90. Which statement about this situation is accurate?

- A. A NOT NULL constraint would reject the row because the price is wrong
- B. A UNIQUE constraint would reject the row because another game costs the same
- C. The database stores the row, because 249.00 breaks no declared rule, but every report built on it is wrong
- D. Referential integrity would reject the row because no product has that price

**Key: C.** Constraints reject values that break declared rules. 249.00 is a valid number that passes NOT NULL, UNIQUE, and CHECK rules, so the database accepts it — and decisions built on it are wrong. NOT NULL and UNIQUE say nothing about price correctness, and referential integrity governs references between tables, not price values.

**Q3.** A rental-car company wants to guarantee that every reservation names a customer who actually exists. Which mechanism does this?

- A. A NOT NULL constraint on the reservation's pickup date
- B. A UNIQUE constraint on the license plate number
- C. A CHECK constraint requiring the rental length to be positive
- D. A foreign key from the reservations table to the customers table

**Key: D.** A foreign key constraint enforces referential integrity: values in the referencing column must match a real row in the referenced table, so a reservation cannot name a customer who does not exist. NOT NULL, UNIQUE, and CHECK govern missing values, duplicates, and stated conditions, not references to other tables.

**Q4.** An orders table holds an order for customer C-999 even though no customer with that ID exists, and the products table holds two rows for the same product. Which statement is accurate?

- A. Both problems are domain integrity violations
- B. The order is a broken reference (referential integrity), and the duplicate product rows violate entity integrity
- C. Both problems are fixed by adding a NOT NULL constraint
- D. Neither problem can occur in a relational database

**Key: B.** A reference to a nonexistent customer is a referential integrity violation, prevented by a foreign key constraint, and duplicate rows for the same product violate entity integrity, which requires each row to be uniquely identified. Domain integrity concerns values fitting their column's rules, and NOT NULL only blocks missing values.

**Q5.** Which statement correctly distinguishes data integrity from database normalization?

- A. Normalization prevents duplication; integrity enforces correctness
- B. Normalization enforces correctness; integrity prevents duplication
- C. They are two names for the same process
- D. Normalization protects against hackers; integrity protects against crashes

**Key: A.** Normalization restructures tables so each fact is stored once, preventing duplication, while integrity rules keep data accurate and consistent. They are complementary, not identical: a normalized database can still hold wrong values, and constraints can patrol an unnormalized one.

## Sources

- NIST Computer Security Resource Center Glossary — *data integrity (term page)* — https://csrc.nist.gov/glossary/term/data_integrity (reference-only; read live 2026-08-21)
- PostgreSQL Documentation — *Constraints (Section 5.5)* — https://www.postgresql.org/docs/current/ddl-constraints.html (reference-only; read live 2026-08-21)
- W3Schools — *SQL NOT NULL Constraint* — https://www.w3schools.com/sql/sql_notnull.asp (reference-only; read live 2026-08-21)
- W3Schools — *SQL UNIQUE Constraint* — https://www.w3schools.com/sql/sql_unique.asp (reference-only; read live 2026-08-21)
- W3Schools — *SQL CHECK Constraint* — https://www.w3schools.com/sql/sql_check.asp (reference-only; read live 2026-08-21)
- IBM — *What is data integrity?* — https://www.ibm.com/think/topics/data-integrity (reference-only; read live 2026-08-21)
- Wikipedia — *Data integrity* — https://en.wikipedia.org/wiki/Data_integrity (reference-only; read live 2026-08-21)
- Wikipedia — *Database normalization* — https://en.wikipedia.org/wiki/Database_normalization (reference-only; read live 2026-08-21)

## Related Topics

- Primary Keys (databases-and-sql:foundations:primary-keys)
- Foreign Keys (databases-and-sql:foundations:foreign-keys)
- Data Types (databases-and-sql:foundations:data-types)
- Database Normalization (databases-and-sql:foundations:database-normalization)
- Tables (databases-and-sql:foundations:tables)

## Editorial Metadata

- **Topic id:** databases-and-sql:foundations:data-integrity
- **Editorial status:** READY_TO_PUBLISH
- **Research status:** source-verified (researched 2026-08-21)
- **Rights:** reference-only sources (NIST glossary, PostgreSQL documentation, W3Schools, IBM, Wikipedia); no source prose adapted
- **Literacy level:** conceptual-first; no SQL shown; primary keys, foreign keys, data types, and normalization referenced as sibling topics only