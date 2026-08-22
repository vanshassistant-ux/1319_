# INSERT

## In 30 Seconds

INSERT is the SQL command that adds a new row to a table. W3Schools defines INSERT INTO as the statement used to insert new records in a table, and PostgreSQL calls it the statement that populates a table with rows. The basic shape is INSERT INTO table (columns) VALUES (values): INSERT INTO products (name, price, quantity) VALUES ('Ridge tent', 129.99, 24);. Values must line up with the listed columns, the database assigns or checks the primary key, and rows that break its rules are rejected. INSERT changes data permanently, so mistakes are hard to undo.

## Why This Matters

A database that only reads is a museum: the rows that answer every question had to get in somehow, and INSERT is how they get in. Every new customer, order, or product starts as an insert. INSERT is also the first write command most people meet, and writes are different from reads — they change the stored data permanently. Understanding INSERT teaches the discipline of looking at a table before you change it, and it explains why databases guard their keys and rules: the protections only make sense once you know a bad row is hard to take back.

## Learning Objectives

- Define INSERT as the SQL command that adds a new row to a table, using the working definitions of W3Schools and PostgreSQL.
- Identify the three parts of a basic INSERT statement: the table name, the column list, and the VALUES list.
- Apply the matching rule: the values in an INSERT must line up with the listed columns, one value per column, in the same order.
- Explain what happens to the primary key on insert: the database assigns a new value or checks the one supplied.
- Contrast INSERT with SELECT as a write operation that changes stored data permanently, and recognize that constraint violations cause the database to reject a row.

## The College Version

### The write command that adds rows

The working definition comes from the people who document SQL itself. W3Schools' SQL tutorial states that the INSERT INTO statement is used to insert new records in a table, and PostgreSQL's documentation puts the same idea in plainer words: the INSERT statement is used to populate a table with rows. SQLite describes the result of the VALUES form the same way, as creating one or more new rows in an existing table. Put the three together and the working definition is short: INSERT adds a new row to a table. That is the entire job. Everything else in this lesson is detail around that one sentence — the shape of the statement, how values find their columns, and what the database checks before it lets a row in.

### The basic shape of an INSERT statement

A basic INSERT statement has three parts, and W3Schools' syntax spells them out: the keyword pair INSERT INTO, the table name, and two parenthesized lists — the columns to fill and the values to put in them. The shape is INSERT INTO table (columns) VALUES (values), as in INSERT INTO products (name, price, quantity) VALUES ('Ridge tent', 129.99, 24);. INSERT INTO introduces the table, the first list names the columns, and VALUES introduces the values that will land in those columns. The statement ends with a semicolon, like every SQL statement in PostgreSQL's tutorial. Read it aloud and it reads like a sentence: insert, into this table, these columns, these values.

### Column order and matching

The rule is simple: values line up with the listed columns in the same order, one value per column. SQLite's documentation states it precisely — when a column-name list is specified, the number of values in each term of the VALUES list must match the number of specified columns. So in INSERT INTO products (name, price, quantity) VALUES ('Ridge tent', 129.99, 24);, the name column receives 'Ridge tent', price receives 129.99, and quantity receives 24. Listing the columns explicitly is also what frees you: PostgreSQL's tutorial notes that the bare VALUES form requires you to remember the order of the columns, while the alternative syntax lets you list the columns in a different order, or even omit some. Columns left out are filled with their default value, or with NULL if none is set, per SQLite.

### What happens to the key

When a new row arrives, the primary key is handled one of two ways; the primary-keys lesson covers the idea in depth, and here it is only a note. If the key column is left out of the insert, the database assigns a value itself — W3Schools explains that an auto-increment field is automatically generated when a new record is inserted. If the key column is included, the database checks the supplied value instead: a primary key must contain unique values, so a row whose key collides with an existing one is rejected. Either way, the database is the gatekeeper for the key — you either let it choose, or you prove your choice is unique.

### INSERT and constraints

A table can carry rules about what its rows may contain, and INSERT is where those rules are enforced. PostgreSQL's constraints chapter explains that SQL allows you to define constraints on columns and tables, and that if a user attempts to store data in a column that would violate a constraint, an error is raised. The attempted row never lands — the database rejects the statement and the table stays as it was. That is the general point, and it is why a failed insert is not a personal failure: it is the database protecting its own rules. The full story of constraints and data quality belongs to the data-integrity lesson, which covers the topic in depth.

### Writing versus reading

INSERT belongs to the writing family of SQL commands, and the contrast with SELECT is the sharpest way to see it. SQLite's SELECT reference states that a SELECT statement does not make any changes to the database; its INSERT reference describes the opposite — the VALUES form creates new rows in an existing table. A SELECT query can be run a hundred times with the same result. An INSERT run once changes the stored table, and the row stays there until some later write removes or alters it. SELECT asks questions; INSERT hands in new rows. That permanence is the difference between reading and writing, and it is why INSERT deserves care. SELECT, update, and delete each have their own lessons.

### The honest framing: data enters here

Every row that will ever matter to a database got there through an insert. New customers, new orders, new products — the information enters through statements like the ones in this lesson, which is why INSERT is what keeps a database alive rather than a snapshot. The honest part is the risk. A misremembered column order, a duplicated key, a wrong price — these are written into the table, and undoing them is not a flick of an undo button. Removing or repairing a bad row takes another write command, which has its own lesson. Look at the table, look at the columns, read the statement once more, then insert.

## Key Vocabulary

- **INSERT statement** — The SQL command that adds a new row to a table; its basic form names the table, the columns to fill, and the values for those columns.
- **column list** — The parenthesized part of an INSERT written after the table name that names the columns receiving the new values.
- **VALUES list** — The parenthesized part of an INSERT introduced by the keyword VALUES that holds one value per listed column, in the same order.
- **auto-increment** — A column whose value the database generates automatically when a new row is inserted; often used for primary keys, as in the W3Schools customers example.
- **constraint** — A rule defined on a table's data; if a row would violate it, the database raises an error and rejects the row.
- **primary key** — The column or columns that uniquely identify each row in a table; on insert the database assigns a new value or checks the one supplied, and the primary-keys lesson covers it in depth.
- **write operation** — A database command that changes stored data; INSERT, update, and delete are writes, while SELECT is a read that changes nothing.

## Eli-10

INSERT adds a new row to a table. You name the table, the columns you want to fill, and the values to put in them: INSERT INTO products (name, price, quantity) VALUES ('Ridge tent', 129.99, 24); adds one row for a new tent. The values must line up with the columns in the same order — first value to first column, second to second, and so on. If you leave the id column out of the list, the database makes a new id for you; if you put in an id that already exists, the database refuses. Rows that break a table's rules are refused too. INSERT writes: the row stays stored until someone removes it, so double-check before you run it.

## Eli's Analogy

Think of signing a new member into a club ledger. You open the ledger to the members page, write the name in the name column and the joined date in the joined-date column, one fact per column. The club secretary assigns membership numbers, so you leave that column blank — and if you tried to hand out a number that was already taken, the secretary would say no.

A paper ledger can be crossed out and rewritten with a pencil. A database row is not erased by scribbling: removing it is a separate command, and some databases even keep extra protections around writes. A ledger also has no rules beyond the columns printed on the page, while a database can enforce rules such as 'prices must be positive' and reject rows that break them.

## Worked Example

Trailside Outfitters stocks a products table with columns id, name, price, and quantity. The manager adds a new item by running INSERT INTO products (name, price, quantity) VALUES ('Ridge tent', 129.99, 24);. She leaves id out of the column list, so the database assigns the next id automatically. The new row now sits in the table with the name Ridge tent, the price 129.99, and the quantity 24. Later she tries to add a second tent while including an id that already exists — the database rejects the row, because a primary key must contain unique values.

## Common Mistakes

- **Writing the values in a different order than the columns.** Values line up positionally: the first value goes to the first listed column. Swap them and the data lands in the wrong columns. List the columns explicitly and match the values one to one.
- **Supplying fewer or more values than the number of listed columns.** SQLite requires the number of values to match the number of specified columns. Count the columns, then count the values — the statement fails if they do not agree.
- **Expecting the database to accept any row, including one that duplicates a key.** A primary key must contain unique values, and a row that violates a constraint is rejected with an error. The failed insert changes nothing, so read the error and fix the row.
- **Treating INSERT like SELECT, as a harmless thing to run twice.** INSERT is a write: each run permanently adds a row to the stored table, so running the same insert twice can create an unwanted extra row. Check the table first, then insert.

## Compare / Contrast

- **INSERT vs. SELECT** — INSERT writes a new row into the stored table, permanently; SELECT reads data and changes nothing, per SQLite's documentation that a SELECT statement makes no changes to the database.
- **Listing columns explicitly vs. Using the bare VALUES form** — An explicit column list lets you choose the order and omit columns, and the values still match the listed columns; the bare form requires the values to follow the table's column order, per PostgreSQL.
- **A database-assigned key vs. A supplied key value** — When the key column is left out, the database generates a new value automatically; when a key value is supplied, the database checks it against the uniqueness requirement and rejects duplicates.

## Key Takeaway

INSERT is how data enters a database: it adds a new row to a table, matching values to the listed columns, while the database assigns or checks the primary key and rejects rows that break its rules — and because INSERT writes, mistakes are hard to undo.

## Practice Question Bank

**Q1.** What does an INSERT statement do in SQL?

- Adds a new row to a table.
- Reads data from a table without changing it.
- Changes values already stored in a table.
- Removes rows from a table.

**Key: A.** W3Schools states that the INSERT INTO statement is used to insert new records in a table, and PostgreSQL describes INSERT as the statement used to populate a table with rows. Reading is SELECT's job, and changing or removing rows belongs to update and delete, which have their own lessons.
**Q2.** Trailside Outfitters runs INSERT INTO products (name, price, quantity) VALUES ('Ridge tent', 129.99, 24);. Which column receives the value 24?

- The name column.
- The price column.
- The quantity column.
- The id column.

**Key: C.** Values line up with the listed columns in the same order: name gets 'Ridge tent', price gets 129.99, and quantity gets 24. SQLite requires the number of values to match the number of specified columns, and they are matched positionally.
**Q3.** A trainee writes INSERT INTO products (name, price) VALUES ('Sleeping pad', 49.50);. What happens to the quantity column?

- The insert fails because every column needs a value.
- The row is created and quantity holds its default value, or NULL if none is set.
- Quantity is filled with the name of the product.
- The insert fails because quantity comes before price.

**Key: B.** When a column is omitted from the list, SQLite's documentation says the new row is populated with the column's default value, or with NULL if no default is specified. PostgreSQL likewise notes that listing columns explicitly lets you omit some.
**Q4.** A signup form sends INSERT INTO members (member_id, name) VALUES (42, 'Jin Park');, but the database rejects it. What is the most likely reason?

- member_id already exists, and a primary key must contain unique values.
- The database never allows more than one row per table.
- Names must be inserted before any other column.
- The statement is missing the email column.

**Key: A.** The database checks the key. W3Schools explains that a primary key constraint ensures unique values, and PostgreSQL says an attempt to store data that would violate a constraint raises an error. A duplicate member_id breaks the uniqueness rule; a missing non-key column would simply get a default or NULL.
**Q5.** Which statement best captures how INSERT differs from SELECT?

- Both commands write rows, but INSERT also sorts them.
- Both commands leave the stored table unchanged.
- INSERT reads rows and SELECT writes them.
- SELECT changes nothing; INSERT permanently adds a row to the stored table.

**Key: D.** SQLite's documentation states that a SELECT statement does not make any changes to the database, while its INSERT reference describes INSERT as creating new rows in an existing table. INSERT is a write: the row stays stored until a later write removes or changes it.
## Sources

- W3Schools — "SQL INSERT INTO Statement". https://www.w3schools.com/sql/sql_insert.asp
- The PostgreSQL Global Development Group — "PostgreSQL Documentation: 2.4. Populating a Table With Rows". https://www.postgresql.org/docs/current/tutorial-populate.html
- SQLite Consortium — "SQLite Query Language: INSERT". https://www.sqlite.org/lang_insert.html
- PostgreSQL — "PostgreSQL 18 Documentation: 5.5. Constraints". https://www.postgresql.org/docs/current/ddl-constraints.html
- W3Schools — "SQL PRIMARY KEY Constraint". https://www.w3schools.com/sql/sql_primarykey.asp
- SQLite Consortium — "SQLite Query Language: SELECT". https://www.sqlite.org/lang_select.html

## Related Topics

- SQL Basics (databases-and-sql:foundations:sql-basics)
- SELECT (databases-and-sql:foundations:select)
- Primary Keys (databases-and-sql:foundations:primary-keys)
- UPDATE (databases-and-sql:foundations:update)
- Data Integrity (databases-and-sql:foundations:data-integrity)

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:insert
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
