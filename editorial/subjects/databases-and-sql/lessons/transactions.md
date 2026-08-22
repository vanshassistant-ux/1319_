# Transactions: All-or-Nothing Operations

## In 30 Seconds

A transaction is a group of database operations that must all succeed together or all be undone. The classic case is moving money between two accounts: the debit and the credit either both land, or neither does. COMMIT makes a transaction's changes permanent; ROLLBACK undoes them. Databases guard transactions with four properties — atomicity, consistency, isolation, durability — so a crash mid-operation cannot leave data half-changed. Without that guarantee, a transfer that debits but never credits would quietly corrupt your balances.

## Why This Matters

Every real database job is full of operations that only make sense together: a payment moves money out of one account and into another, a booking reserves two seats at once, a checkout creates an order and charges a card. Run those steps one by one and a failure between them leaves data half-changed — money missing, seats double-booked, orders without payments. Transactions bundle the steps into one all-or-nothing unit so that a crash, a power cut, or a bug cannot corrupt the data. They are the reason a database can be trusted with money, seats, and orders at all.

## Learning Objectives

- Define a transaction as a group of database operations that must all succeed together or all be undone.
- Explain why a money transfer between two accounts — a debit and a credit — needs to be one transaction.
- State what COMMIT and ROLLBACK do: make a transaction's changes permanent, or undo them.
- Name the four ACID properties and give a one-line plain meaning for each.
- Describe how a partial update, such as a transfer that debits but never credits, corrupts data.
- Give everyday examples — banking, booking, checkout — where an all-or-nothing guarantee matters.

## The College Version

### A transaction is an all-or-nothing unit of work

A transaction is a group of database operations that must all succeed together or all be undone. PostgreSQL's documentation puts it precisely: the essential point of a transaction is that it bundles multiple steps into a single, all-or-nothing operation, and if some failure occurs before it completes, none of the steps affect the database at all. Oracle describes the same idea from the other side — a transaction is a logical, atomic unit of work that contains one or more SQL statements — and Microsoft Learn calls it a single unit of work. The three phrasings agree: the operations in a transaction are one package. Either the whole package happens, or none of it does. Nothing in between is allowed to survive.

### Commit and rollback: keep the changes, or undo them

Every transaction ends one of two ways. COMMIT makes the changes permanent: Microsoft Learn says the data modifications made during the transaction are committed and become a permanent part of the database. ROLLBACK undoes everything: PostgreSQL explains that if you decide partway through that you do not want to commit, you can issue ROLLBACK instead, and all your updates so far will be canceled. The two commands are the switch for the whole package — there is no third way to end a transaction. The shape in SQL is small:

```sql
BEGIN;  -- the transfer starts as one package
UPDATE accounts SET balance = balance - 150 WHERE name = 'Maya';
UPDATE accounts SET balance = balance + 150 WHERE name = 'Owen';
COMMIT; -- keep both changes (ROLLBACK would undo both)
```

The two updates form one package: COMMIT keeps both, and ROLLBACK would undo both.

### The ACID properties, one line each

Database people summarize the guarantees with the acronym ACID. SQLite's documentation is direct: a transactional database is one in which all changes and queries appear to be Atomic, Consistent, Isolated, and Durable. Atomicity means the transaction happens completely or not at all — it is the all-or-nothing rule itself. Consistency means a transaction turns valid data into valid data; it cannot leave the database in a state that breaks its own rules. Isolation means other transactions cannot see the changes while the transaction is still running — PostgreSQL says the updates made so far by an open transaction are invisible to other transactions until the transaction completes. Durability means that once the transaction is committed, the changes survive — even a crash or a power failure cannot erase them. Four properties, four jobs, one word each.

### Why transactions matter: partial updates corrupt data

Without a transaction, the steps of a transfer run one at a time, and each one sticks. Imagine the power fails between the debit and the credit: Maya's account is lighter by $150 and Owen's account never grew. The money has vanished — not spent, not moved, just gone from the records. PostgreSQL's own tutorial uses this exact worry when it introduces transactions: it would certainly not do for a system failure to result in someone receiving money that was not debited from the payer, and nobody stays happy being debited while the other side never gets credited. Partial updates are not a minor annoyance; they are data corruption. A balance that does not add up is a broken database, and every calculation built on top of it is broken too. Transactions exist to make that half-done state impossible.

### Transactions in everyday apps

Banking is the textbook case: PostgreSQL introduces transactions with a payment between two customers' accounts, and Wikipedia's article on database transactions uses the same picture — a transfer from one bank account to another requires subtracting the amount from one account and adding it to the other, and both must happen. The same guarantee runs under booking systems: reserve two seats on one booking, and either both seats are held or neither is, because a half-booking would leave the traveler with one seat and no trip. Checkout works the same way: an order, a card charge, and a stock count must all change together, so a failure cannot charge a customer for an order that never exists. The steps differ, but the shape is identical: several changes that only make sense as one package.

### What transactions buy: trust under failure

Hardware fails, power cuts happen, software has bugs. A database cannot promise that nothing will ever go wrong — it can only promise what happens when something does. That is the honest job of transactions. SQLite states the durability guarantee bluntly: its transactions stay atomic, consistent, isolated, and durable even if the transaction is interrupted by a program crash, an operating system crash, or a power failure. PostgreSQL makes the same point: a transactional database guarantees that all the updates made by a transaction are recorded in permanent storage before the transaction is reported complete. No technology makes failures impossible. Transactions make failures safe: when something goes wrong, the database simply ends up as if the transaction never started. That is what makes a database trustworthy under failure.

## Key Vocabulary

- **Transaction** — A group of database operations that must all succeed together or all be undone.
- **All-or-nothing** — The rule that every step of a transaction happens, or none of them does.
- **COMMIT** — The command that makes a transaction's changes permanent in the database.
- **ROLLBACK** — The command that undoes every change a transaction has made so far.
- **Atomicity** — The ACID property that a transaction happens completely or not at all.
- **Consistency** — The ACID property that a transaction leaves the data valid if it started valid.
- **Isolation** — The ACID property that other transactions cannot see a transaction's unfinished changes.
- **Durability** — The ACID property that committed changes survive crashes and power failures.
- **Partial update** — A half-finished set of changes left behind when a multi-step operation fails midway.

## Eli-10

A transaction is a promise that a group of database operations will be treated as one indivisible package. Either every operation in the package succeeds, or the database behaves as if none of them were ever attempted. While a transaction is open, the changes exist in a waiting state — they are real, but they are not yet part of the permanent data. When you COMMIT, the package is accepted and becomes permanent. When you ROLLBACK, the package is thrown away and the data stays exactly as it was before. The point of all this is to make it impossible for half a package to survive a failure.

## Eli's Analogy

Think of a paper form that must be signed in three places. You fill the first line, the pen runs dry at the second, and the form is useless — nobody can accept a half-signed form. A transaction works the same way: the form only counts if all three signatures land, and until they do, it is just a draft in your pocket. COMMIT is handing in the completed form. ROLLBACK is crumpling the draft and starting over.

The analogy has limits. A person can look at the half-filled form and decide what to do; a database follows its rules automatically. A real form physically exists whether or not it is signed, while an uncommitted transaction's changes have no permanent existence at all — after a rollback they are gone as if they never happened. And the analogy suggests slow human signing, while a database transaction can finish in milliseconds.

## Worked Example

Bright Bean Cafe sells a gift-card transfer between two regulars. Maya's account holds $500 and Owen's holds $200. A $150 transfer runs inside a transaction: the cafe debits Maya (500 becomes 350), then credits Owen (200 becomes 350), then COMMIT makes both changes permanent. The cafe also tested the failure path: begin a transaction, debit Maya, and stop before the credit. Mid-transaction, the ledger shows Maya at 350 and Owen still at 200 — money in limbo. ROLLBACK then restores both balances to 500 and 200, exactly as they were. The unfinished transfer left no trace.

## Common Mistakes

- **Assuming the debit and the credit are automatically one package, so each SQL statement can be sent separately.** By default each statement is its own tiny transaction. To make several steps one package, wrap them in an explicit transaction — BEGIN, the steps, then COMMIT or ROLLBACK.
- **Confusing COMMIT with ROLLBACK and reaching for one when the other is meant.** COMMIT keeps the transaction's changes permanently; ROLLBACK discards them. Ask: do I want this to stick, or not?
- **Believing a crash partway through a transaction leaves the earlier steps applied.** Inside a transaction, a failure before COMMIT means none of the steps take effect — the database returns to the state it was in before the transaction began.
- **Treating ACID as one single property.** ACID is four separate guarantees — atomicity, consistency, isolation, durability — each doing its own job and each worth naming on its own.
- **Expecting a rollback to undo other transactions' committed work.** ROLLBACK only undoes the current transaction's uncommitted changes. Work that other transactions already committed stays.

## Compare / Contrast

- **COMMIT vs. ROLLBACK** — COMMIT makes a transaction's changes permanent; ROLLBACK undoes every change the transaction has made so far.
- **A transaction vs. a single SQL statement** — A transaction can group several statements into one all-or-nothing package; a single statement is one operation that acts as its own tiny transaction by default.
- **Atomicity vs. durability** — Atomicity promises the transaction happens completely or not at all; durability promises that once committed, the changes survive crashes.

## Key Takeaway

A transaction makes a group of operations all-or-nothing: COMMIT keeps the changes, ROLLBACK undoes them. ACID guarantees make partial updates impossible, so databases stay trustworthy under failure.

## Practice Question Bank

**1. What is a database transaction?**

- A. A group of database operations that must all succeed together or all be undone.
- B. A single SQL command that reads data from one table.
- C. A backup copy of the database stored on another server.
- D. A rule that prevents two tables from storing the same values.

<details><summary>Answer</summary>A — A transaction is a group of database operations that must all succeed together or all be undone — the working definition used throughout the database documentation. The other options describe reads, backups, and constraints, which are different things.</details>

**2. What does the COMMIT command do?**

- A. It undoes all of the transaction's changes.
- B. It makes the transaction's changes permanent.
- C. It restarts the transaction from the beginning.
- D. It pauses the transaction until the next command arrives.

<details><summary>Answer</summary>B — COMMIT makes the transaction's changes permanent — Microsoft Learn says the modifications become a permanent part of the database. Undoing changes is ROLLBACK's job, not COMMIT's.</details>

**3. What does the ROLLBACK command do?**

- A. It makes the transaction's changes permanent.
- B. It deletes the entire table involved in the transaction.
- C. It undoes all of the transaction's changes so far.
- D. It copies the transaction's changes into a second database.

<details><summary>Answer</summary>C — ROLLBACK cancels all of the transaction's updates so far, restoring the data to its pre-transaction state, as PostgreSQL's tutorial explains. Making changes permanent is COMMIT's job.</details>

**4. A transfer moves $150 from Maya's account to Owen's account inside one transaction. The debit succeeds, then the power fails before the credit runs. What is true after the database recovers?**

- A. Both changes are applied, because the debit already ran.
- B. Only the debit is applied, so the money is missing.
- C. The database doubles the money to keep the accounts balanced.
- D. Neither change is applied, because the transaction never completed.

<details><summary>Answer</summary>D — Because the transfer is one transaction, a failure before COMMIT means neither step takes effect — the database restores the original balances. This is atomicity in action.</details>

**5. An online store records an order, charges the card, and lowers the stock count. Why should the three steps run inside one transaction?**

- A. So a failure partway through cannot leave a charged customer with no order, or stock lowered without a sale.
- B. So the order number is always larger than the previous order's number.
- C. So the stock count always matches the number of orders placed.
- D. So the database can run the steps faster by skipping the checks between them.

<details><summary>Answer</summary>A — If the three steps were separate, a failure between them could charge a customer with no order or lower stock without a sale. One transaction makes the whole checkout all-or-nothing.</details>

## Sources

- PostgreSQL Documentation — Tutorial: Transactions — https://www.postgresql.org/docs/current/tutorial-transactions.html
- SQLite — Query Language: Transaction — https://www.sqlite.org/lang_transaction.html
- SQLite — SQLite Is Transactional — https://www.sqlite.org/transactional.html
- Microsoft Learn — Transactions (Transact-SQL) — https://learn.microsoft.com/en-us/sql/t-sql/language-elements/transactions-transact-sql
- Oracle Database Concepts — Introduction to Transactions — https://docs.oracle.com/en/database/oracle/oracle-database/23/cncpt/transactions.html
- Wikipedia — ACID — https://en.wikipedia.org/wiki/ACID
- Wikipedia — Database transaction — https://en.wikipedia.org/wiki/Database_transaction

## Related Topics

- databases-and-sql:foundations:sql-basics
- databases-and-sql:foundations:insert
- databases-and-sql:foundations:update
- databases-and-sql:foundations:delete
- databases-and-sql:foundations:data-integrity

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:transactions
- Subject: databases-and-sql / Unit: foundations / Phase: 2
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21 — sources read live; worked example's SQL behavior executed against SQLite before publishing
- Rights: reference-only sources; all prose, examples, and queries are original
