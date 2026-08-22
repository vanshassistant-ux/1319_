# Foreign Keys

## In 30 Seconds

A foreign key is a column in one table that holds the primary key of a row in another table. An orders table, for example, stores a customer ID on every order instead of copying the customer's name and address — the ID points back to the customer's row in the customers table. That pointer is the link between the two tables. Databases can enforce that every foreign key value matches a real row, so no order can point at a customer who does not exist. That rule is called referential integrity.

## Why This Matters

Foreign keys are the mechanism that makes a relational database relational: they connect tables without copying data. Understanding them explains why a well-built database stores your address once and lets every order, invoice, and shipping record point at it — and why a database can refuse to delete a customer who still has orders. That habit of referencing instead of duplicating is what keeps large systems consistent as they grow. It also gives you a vocabulary for talking about data models, from school projects to enterprise systems, and a foundation for later topics like relationships, normalization, and data integrity.

## Learning Objectives

- Define a foreign key as a column in one table that references the primary key of another table.
- Explain how a foreign key links two tables, using the example of an order row carrying a customer ID.
- Distinguish a foreign key from a primary key, naming the critical difference: uniqueness within its own table versus reference to another table.
- Describe referential integrity and what a database does when a foreign key value points at a row that does not exist.
- Apply the foreign key concept to explain why relational databases avoid duplication.
- Evaluate why foreign keys are called the glue of the relational model and identify the sibling topics that build on them.

## The College Version

### The working definition: a column that points at another table

A foreign key is a column in one table whose values reference the primary key of another table. W3Schools' SQL reference states the definition plainly: a foreign key is a column in a table that refers to the primary key in another table, and the constraint built around it establishes a link between the two tables. Microsoft Learn says the same thing in different words: a foreign key is a column, or combination of columns, used to establish and enforce a link between the data in two tables, created when a column that holds a primary key value in one table is referenced by a column in another table. Two features of this definition matter from the start. First, the foreign key lives inside its own table — it is a column of that table, not a separate object floating between tables. Second, its values are not new facts; they are references to facts that already exist elsewhere. What travels from table to table is the referenced row's key.

### How a link works: an order row carrying a customer ID

Picture a small shop with two tables. The customers table stores one row per shopper, each identified by a customer ID: Maya Okafor is C-104, with her address and loyalty tier stored once. The orders table stores one row per purchase. Each order row carries a customer ID column; order #4507, for example, stores C-104. That single value is the link. To see who placed order #4507, the database reads the customer ID and finds the matching row in the customers table — the two rows are connected without the order row carrying Maya's name, address, or tier again. This is exactly the pattern the sources describe: a row in the referencing table carries the key of a row in the referenced table. Microsoft's documentation shows the same shape with sales orders referencing salespeople, and PostgreSQL's manual shows orders referencing products. The mechanism is always the same: one row carries the key of another row, and that key is the link.

### Foreign key versus primary key: uniqueness versus reference

The two kinds of key sound alike and are often confused, but their jobs differ in a way that matters. A primary key uniquely identifies each row within its own table: W3Schools describes the primary key constraint as the one that uniquely identifies each record, guaranteeing unique values and no empty ones, with only one primary key per table. Its job is internal — it answers the question "which row is this?" inside the table where it lives. A foreign key's job is external: it points at a primary key in another table, and its values must match values that exist there. The critical consequence is that a foreign key does not have to be unique in its own table. Dozens of orders can carry customer ID C-104, because many rows may legitimately reference the same customer. Uniqueness is the primary key's job; reference is the foreign key's job. And the same value can play both roles in different tables — customer ID is a primary key in the customers table and a foreign key in the orders table — which is another common source of confusion.

### Referential integrity: making sure every pointer lands

A link is only useful if it points at something real. Referential integrity is the rule that guarantees this: the values in the referencing column must match values appearing in some row of the referenced table. PostgreSQL's documentation introduces the term directly — a foreign key constraint specifies that the values in a column must match the values appearing in some row of another table, and this maintains referential integrity between the two related tables. Enforcement is the practical part. Microsoft Learn gives a concrete picture: a salesperson ID cannot be inserted into a sales-order table if it does not already exist in the salesperson table. The same enforcement works in reverse: a row in the referenced table cannot simply be deleted while other rows still point at it, because that would leave references pointing at nothing. Data integrity as a broader discipline — all the rules that keep stored data accurate — is its own topic; here the point is the single rule that references must land on real rows.

### Why foreign keys matter: referencing instead of duplicating

The payoff of foreign keys is that relational databases avoid duplication. Because an order stores a customer ID rather than a copy of the customer's name and address, the customer's details exist in exactly one place. When Maya moves, one row is updated and every order automatically reflects the change; if her details were copied onto each order, a move would mean editing hundreds of rows and hoping none were missed. This is the mechanism behind the relational model's strength, and it is why the sources describe the foreign key as establishing a link rather than copying data. Later topics build directly on this foundation: normalization formalizes how to split data up so it is not duplicated, relationships describe the kinds of links foreign keys create, and data integrity covers the full set of rules that keep databases trustworthy. The honest framing is that foreign keys are the glue of the relational model — without them, tables would be isolated boxes, and with them, tables form a connected and consistent whole.

## Key Vocabulary

- **foreign key** — A column in one table whose values reference the primary key of another table, linking the two tables.
- **primary key** — The column, or combination of columns, that uniquely identifies each row within its own table.
- **referential integrity** — The database-enforced rule that every foreign key value must match an actual primary key value in the referenced table.
- **referencing table** — The table that holds the foreign key column; its rows point at rows in the referenced table.
- **referenced table** — The table whose primary key a foreign key points to; also called the parent table.
- **link** — The connection a foreign key creates between a row in one table and a row in another.
- **duplication** — Storing the same fact in more than one place; foreign keys let databases avoid it.
- **constraint** — A rule the database enforces on the data it stores; a foreign key constraint is one example.

## Eli-10

A foreign key is a pointer. One table keeps a column that stores the ID of a row in another table — an order stores the number of the customer who placed it. The order row does not carry the customer's whole record; it carries just the ID, and that ID is the thread connecting the two rows. When the database checks that every ID actually exists in the other table, the links stay real: no order can point at a customer who was never there. That check is referential integrity, and it is what keeps the web of tables from falling apart.

## Eli's Analogy

Think of a paper file room. Each customer has one folder with a number on the tab. An order form does not photocopy the whole customer folder; it just writes that number in a box marked "customer". To find out who placed the order, a clerk looks up the folder with that number. The number on the form is the foreign key — it links the order to the folder without duplicating the folder's contents.

The comparison stops short in two ways. A file room depends on clerks writing numbers correctly and checking them; a database enforces the rule automatically and refuses to store an order whose customer number matches nothing. And a wrong number in a file room is a mistake you can live with until someone notices, while a broken reference in a database can quietly corrupt reports and summaries — which is exactly why enforcement matters.

## Worked Example

Maya's bookstore keeps two tables. The customers table has one row per shopper, each with a unique customer ID: Maya Okafor is C-104, with her address and loyalty tier stored once. The orders table records every purchase, and each order row carries a customer ID column. When Maya buys a paperback, the new order row stores C-104, not her name and address again. A week later the store runs a report of who ordered what: the report reads each order's customer ID, looks up C-104 in the customers table, and pairs the book with the right shopper. If someone typed C-999 on an order, the database refuses to save it, because no row with that ID exists. The store can also check whether any orders still reference C-104 before deleting her record.

## Common Mistakes

- **Thinking a foreign key must be unique.** Uniqueness is the primary key's job. A foreign key can repeat freely — many orders may carry the same customer ID, because each of them references the same customer.
- **Treating a foreign key as a copy of the referenced data.** A foreign key stores only the key of the referenced row, not the row's contents. The customer's name and address live once in the customers table; the order just points at them.
- **Assuming the database always catches broken references on its own.** Enforcement happens when the foreign key is defined as a constraint and the database supports it. Referential integrity is the rule that makes every reference land on a real row; without it, an order could point at a customer who never existed.
- **Deleting a parent row without thinking about the rows that reference it.** With referential integrity enforced, the database refuses to delete a customer who still has orders, because that would leave dangling references. The orders must be removed or re-pointed first.

## Compare / Contrast

- **Primary key vs. Foreign key** — A primary key must be unique within its own table and identifies that table's rows; a foreign key references a primary key in another table and may repeat.
- **Referencing (child) table vs. Referenced (parent) table** — The referencing table holds the foreign key column whose values point outward; the referenced table holds the primary key those values must match.
- **Enforced foreign key vs. Plain column with no constraint** — An enforced foreign key makes the database reject values that match no referenced row; a plain column accepts anything, so broken references can creep in.

## Key Takeaway

A foreign key is a column that points from one table to another — it stores the primary key of a row elsewhere, and referential integrity guarantees that every pointer lands on a real row. References, not copies, are how relational databases stay consistent.

## Practice Question Bank

**Q1.** Which statement best defines a foreign key?

- A. A column in one table that references the primary key of another table
- B. A column that uniquely identifies each row within its own table
- C. A column that can never contain a repeated value
- D. A column that stores a full copy of another row's data

**Key: A.** Both W3Schools and Microsoft Learn define a foreign key as a column (or columns) in one table that refers to the primary key of another table. Option B describes a primary key, C describes a unique constraint, and D mistakes a reference for a copy.

**Q2.** An orders table carries a customer ID on every order row. What does that customer ID do?

- A. It replaces the order number as the order's own identifier
- B. It links the order to the customer's row in the customers table, whose primary key it matches
- C. It stores a duplicate of the customer's name and address on the order
- D. It guarantees the order is the only one for that customer

**Key: B.** Microsoft Learn describes the link being created when a column holding a primary key value in one table is referenced by a column in another table. The customer ID on the order is the foreign key pointing at the customer's primary key; it does not replace the order's own key, copy the customer's details, or force uniqueness.

**Q3.** Rosa's database refuses to save an order whose customer ID matches no customer in the customers table. What is happening?

- A. The database has run out of space for new orders
- B. The order table's primary key was misconfigured
- C. The database is enforcing referential integrity, which requires the reference to point at a real row
- D. The customers table is full and cannot accept new rows

**Key: C.** PostgreSQL's documentation says a foreign key constraint requires values in the referencing column to match values appearing in some row of the referenced table, which maintains referential integrity. Microsoft Learn gives the same picture: a value cannot be inserted into the referencing table if it does not already exist in the referenced table. The other options describe storage or key problems, not a failed reference.

**Q4.** In a bookstore database, customer ID is the primary key of the customers table and a foreign key in the orders table. Which statement about this arrangement is accurate?

- A. Customer ID must be unique in the orders table
- B. The customers table must be deleted before the orders table
- C. Orders may reference a customer who does not exist, as long as the ID is a number
- D. Many order rows can carry the same customer ID, and each must match a real customer row

**Key: D.** The same value can be a primary key in one table and a foreign key in another. W3Schools notes that only the primary key guarantees uniqueness, so customer ID may repeat in the orders table — while the foreign key rule still requires every value to exist in the customers table. The other options confuse the two roles.

**Q5.** A library keeps one row per member and stores the member ID on each loan row instead of the member's full name and address. Why does this design avoid duplication?

- A. Because the member's details are stored once in the members table, and every loan points at them with the member ID
- B. Because loan rows are never checked against the members table
- C. Because member IDs are shorter than names, which saves space by accident
- D. Because the library deletes member details after each loan

**Key: A.** A foreign key stores the referenced row's key rather than a copy of its contents, so each fact lives in one place and every referencing row points at it. W3Schools and Microsoft Learn both describe the foreign key as establishing a link between tables — the member ID links each loan to the single stored member record. The other options describe designs that duplicate data or abandon the link.

## Sources

- W3Schools — *SQL FOREIGN KEY Constraint* — https://www.w3schools.com/sql/sql_foreignkey.asp (reference-only; read live 2026-08-21)
- W3Schools — *SQL PRIMARY KEY Constraint* — https://www.w3schools.com/sql/sql_primarykey.asp (reference-only; read live 2026-08-21)
- PostgreSQL Documentation — *Constraints* (Chapter 5.5) — https://www.postgresql.org/docs/current/ddl-constraints.html (reference-only; read live 2026-08-21)
- Microsoft Learn — *Primary and foreign key constraints* — https://learn.microsoft.com/en-us/sql/relational-databases/tables/primary-and-foreign-key-constraints (reference-only; read live 2026-08-21)

## Related Topics

- Primary Keys (databases-and-sql:foundations:primary-keys)
- Relationships (databases-and-sql:foundations:relationships)
- Data Integrity (databases-and-sql:foundations:data-integrity)
- Database Normalization (databases-and-sql:foundations:database-normalization)
- Tables (databases-and-sql:foundations:tables)

## Editorial Metadata

- **Topic id:** databases-and-sql:foundations:foreign-keys
- **Editorial status:** READY_TO_PUBLISH
- **Research status:** source-verified (researched 2026-08-21)
- **Rights:** reference-only Tier B documentation sources; no source prose adapted
- **Literacy level:** conceptual-first; no SQL shown
