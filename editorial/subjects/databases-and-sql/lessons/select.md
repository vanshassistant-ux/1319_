# SELECT

## In 30 Seconds

SELECT is the read command of SQL: it retrieves data from a table. The working definition from W3Schools is that SELECT is used to select data from a database, and PostgreSQL says the same thing: to retrieve data from a table, you use a SELECT statement. The basic shape is SELECT columns FROM table, as in SELECT name, price FROM products;. An asterisk fetches every column: SELECT * FROM products;. The rows and columns a query returns form a result set, a mini-table. SELECT changes nothing, which makes it the easiest SQL command to start with.
## Why This Matters

Almost every database task begins with a read: checking stock, listing customers, printing a report. SELECT is the command that does the reading, so it is the first SQL you will actually type, and every clause that refines a query — WHERE filters, ORDER BY sorts — hangs off it. Understanding SELECT also draws the line that keeps beginners safe: a query can be run again and again without changing the data, while insert, update, and delete alter it. Practicing SELECT builds the habit of asking questions of a table before changing it, a discipline that transfers to spreadsheets, analytics tools, and any program that reads structured data.
## Learning Objectives

- Define SELECT as the SQL command that retrieves data from a table, using the working definitions of W3Schools and PostgreSQL.
- Identify the two parts of a basic SELECT statement: the select list and the table named in the FROM clause.
- Distinguish selecting named columns from selecting every column with the asterisk shorthand.
- Explain that a SELECT query returns a result set, rows and columns shaped like a mini-table, and that it changes no data.
- Recognize WHERE and ORDER BY as clauses that extend SELECT to filter and sort, each covered in its own lesson.

## The College Version

### The read command

The working definition comes from the people who document SQL itself. W3Schools' SQL tutorial states that the SELECT statement is used to select data from a database, and PostgreSQL's documentation explains the same idea in plainer terms: to retrieve data from a table, the table is queried, and an SQL SELECT statement is used to do this. Put the two together and the working definition is short: SELECT retrieves data from a table. That is the whole job. Everything else in this lesson is detail around that one sentence — the shape of the command, what comes back, and the reassurance that nothing gets changed.
### The shape of a SELECT statement

A basic SELECT statement has two parts, and PostgreSQL's documentation names them precisely: a select list, the part that lists the columns to be returned, and a table list, the part that lists the tables from which to retrieve the data. In the query SELECT name, price FROM products;, the select list is name, price and the table list is products — the word FROM introduces the table. Write the columns you want after SELECT, the table after FROM, and end the statement with a semicolon. Swap the parts around, leave out FROM, or drop the commas and the database can no longer make sense of the request.
### The asterisk shorthand

Typing every column name is tedious, so SQL has a shorthand: the asterisk. W3Schools explains that to select ALL columns without specifying every column name, you use the SELECT * syntax, and PostgreSQL notes that the asterisk is a shorthand for all columns. So SELECT * FROM products; returns every column of the products table, whatever those columns are. The convenience carries a caveat: you receive every column even when you only need two, and the result grows wider if someone later adds columns to the table. Naming columns keeps the result predictable; the asterisk is best for a quick look at a table you do not know yet.
### What SELECT returns: the result set

The answer a SELECT query produces is called a result set, and SQLite's documentation describes it precisely: the result of a SELECT is zero or more rows of data where each row has a fixed number of columns. In other words, the answer arrives in the same shape as the table you read from — rows and columns, like a mini-table. Ask for name and price and you get two columns; ask with the asterisk and you get every column. The result set is produced at the moment you run the query. It is not a new table saved in the database; it is the answer to your question.
### SELECT combines with other clauses

On its own, SELECT reads the columns you asked for and returns every row in the table. Most real questions want less than that, and SQL extends SELECT with clauses that refine the result. PostgreSQL's tutorial mentions an optional qualification, the part that specifies any restrictions, and SQLite's SELECT reference documents two of the best-known clauses by name: the WHERE clause filters rows, and the ORDER BY clause sorts them. Each of those is a full topic of its own. Here it is enough to know that they attach to SELECT, and that every question you refine with them is still, at heart, a SELECT query.
### Reading versus writing: what SELECT does not do

SQLite's documentation draws the line in one sentence: a SELECT statement does not make any changes to the database. That is the read-versus-write distinction in its purest form. SELECT is a read operation: it looks at data and reports back, and running the same query a hundred times leaves the table exactly as it was. Writing is a different family of commands — insert adds rows, update changes values, delete removes rows — and W3Schools' SQL introduction lists retrieving data separately from inserting, updating, and deleting records. Those write commands have their own lessons; the point here is that SELECT never crosses the line.
### The honest framing: the most-used command, and the easiest

Every conversation with a database starts with reading: checking stock, listing customers, answering what is in this table. And because WHERE, ORDER BY, and every other clause attach to SELECT, it is fair to call SELECT the SQL command you will use more than any other. It is also the easiest to start with, for a practical reason: it cannot break anything. Because it only retrieves, beginners can run experiments freely and see the shape of their data before they ever learn a command that changes it. Learn SELECT first, and every later SQL topic has a familiar place to stand.
## Key Vocabulary

- **SELECT statement** — The SQL command that retrieves data from a table; its basic form lists the columns to return, then the table to read them from.
- **result set** — The rows and columns a SELECT query returns, arranged like a small table; a query produces zero or more rows, each with the same fixed set of columns.
- **select list** — The part of a SELECT statement, written after the keyword SELECT, that names the columns to be returned, such as name and price.
- **FROM clause** — The part of a SELECT statement, introduced by the keyword FROM, that names the table the data comes from.
- **asterisk** — The star character used in SQL as shorthand for all columns; SELECT * FROM a table returns every column of that table.
- **query** — A question asked of a database, usually written as a SELECT statement; the database answers with a result set.
- **WHERE clause** — A clause that filters the rows a SELECT query returns by keeping only rows that meet a condition; it has its own lesson.
- **ORDER BY clause** — A clause that sorts the rows a SELECT query returns by one or more columns; it has its own lesson.
- **read operation** — A database command that retrieves data without changing it; SELECT is the read command, while insert, update, and delete change data.

## Eli-10

SELECT is the way you ask a database for data. You name the columns you want and the table they live in: SELECT name, price FROM products; reads the name and price columns out of the products table. Want everything? SELECT * FROM products; — the asterisk means all columns. The answer comes back as a small table of rows and columns, called a result set. Because SELECT only reads, you can run the same query a hundred times and the data stays exactly as it was. That is why it is the first SQL command most people learn: it cannot break anything.
## Eli's Analogy

Think of a library card catalog. SELECT is asking for a specific set of facts about the books: show me the title and author of every book in the catalog. You choose which facts you want and which drawer, the table, they come from. Ask for two facts and you copy just those two columns; ask with the asterisk and you carry the whole drawer to your desk. Either way, you are only reading the cards — the catalog itself never changes while you look.

The catalog comparison makes reading sound like paper copies. A real database computes the result set at the moment you run the query, and the same query can return different rows as the table changes between runs. All columns can also be a very wide result. And a card catalog has no equivalent of WHERE or ORDER BY — filtering and sorting are separate clauses with their own lessons.
## Worked Example

Bright Bikes keeps a products table with columns for name, price, and quantity_on_hand. The owner wants a price list, so she runs SELECT name, price FROM products;. The database reads the products table and returns a result set with two columns — name and price — and one row per product: aluminum frame pump at $24, patch kit at $6, touring saddle at $58. Because the query never mentions quantity_on_hand, that column is left out of the result. Later she runs SELECT * FROM products; for a full stock check and gets all three columns back. Neither query changed a single value: the table holds exactly what it held before.
## Common Mistakes

- **Writing the table first, as in FROM products SELECT name, price, or leaving out FROM altogether.** The shape is fixed: SELECT columns FROM table. The word FROM names where the data comes from; a SELECT without a table to read returns nothing useful.
- **Reaching for SELECT * when only two columns are needed.** The asterisk returns every column, and the result widens if the table gains columns later. Naming the columns you want keeps the result predictable.
- **Expecting SELECT to change data, such as using it to update a price.** SELECT only retrieves; it never changes the database. Changing stored values is the job of update, insert, and delete, which have their own lessons.
- **Forgetting the semicolon that ends the statement.** SQL statements end with a semicolon in standard usage, and PostgreSQL's tutorial writes every query that way. Leave it off and many tools keep waiting for the rest of the statement.

## Compare / Contrast

- **SELECT with named columns vs. SELECT * (asterisk)** — Naming columns returns only the ones you asked for, in the order you listed them; the asterisk returns every column, and its result grows wider if the table changes.
- **A read operation vs. A write operation** — SELECT retrieves data and changes nothing; insert, update, and delete add, modify, or remove rows, and those commands have their own lessons.
- **A result set vs. The stored table** — A result set is the rows and columns a query returns at that moment, shaped like a mini-table; the stored table is the data that lives in the database and stays unchanged by reads.

## Key Takeaway

SELECT is SQL's read command: it retrieves columns from a table and returns them as a result set, without changing any data — the most-used SQL command, and the easiest to start with.
## Practice Question Bank

**Q1.** What does a SELECT statement do in SQL?

- Retrieves data from a table.
- Deletes rows from a table.
- Adds new rows to a table.
- Changes values already stored in a table.

**Key: A.** W3Schools states that the SELECT statement is used to select data from a database, and PostgreSQL describes SELECT as the statement used to retrieve data from a table. Deleting, adding, and changing values are the jobs of delete, insert, and update, the write commands, not SELECT.
**Q2.** Harbor Market keeps a products table. Which query returns only the name and price of every product?

- SELECT * FROM products;
- SELECT products FROM name, price;
- SELECT name, price FROM products;
- SELECT name price products;

**Key: C.** The basic shape is the column list after SELECT, then FROM, then the table name, so SELECT name, price FROM products; returns exactly those two columns. The asterisk form returns every column, the second option reverses the parts, and the last one has no commas and no FROM.
**Q3.** A store manager runs SELECT * FROM products; and then SELECT name, price FROM products;. What is the difference in what comes back?

- The first changes the table; the second does not.
- Both queries return exactly the same columns.
- The second is invalid SQL, so nothing comes back.
- The first returns every column; the second returns only name and price.

**Key: D.** W3Schools explains that the SELECT * syntax selects ALL columns without naming each one, while listing columns after SELECT returns just those columns. Neither query changes the table — SELECT is a read — and both are valid SQL.
**Q4.** A trainee wants to double a product's price and types SELECT price FROM products;. What will happen to the stored price?

- The price doubles in the table.
- The table stays unchanged; SELECT only retrieves the price.
- The query fails because prices cannot be read.
- A new column appears next to the price.

**Key: B.** SQLite's documentation is explicit: a SELECT statement does not make any changes to the database. Reading the price cannot double it; changing stored values is the job of the update command, which has its own lesson.
**Q5.** Which statement best describes the result of a SELECT query?

- A result set: zero or more rows of data, each with the same fixed set of columns.
- A new table permanently saved in the database.
- A copy of the entire database file.
- A list of all the tables in the database.

**Key: A.** SQLite describes the result of a SELECT as zero or more rows of data where each row has a fixed number of columns — a result set shaped like a small table. It is not a new stored table, a database file, or a list of tables.
## Sources

- W3Schools — "SQL SELECT Statement". https://www.w3schools.com/sql/sql_select.asp
- The PostgreSQL Global Development Group — "PostgreSQL Documentation: 2.5. Querying a Table". https://www.postgresql.org/docs/current/tutorial-select.html
- SQLite Consortium — "SQLite Query Language: SELECT". https://www.sqlite.org/lang_select.html
- W3Schools — "SQL Introduction". https://www.w3schools.com/sql/sql_intro.asp

## Related Topics

- SQL Basics (databases-and-sql:foundations:sql-basics)
- Tables (databases-and-sql:foundations:tables)
- WHERE (databases-and-sql:foundations:where)
- ORDER BY (databases-and-sql:foundations:order-by)
- INSERT (databases-and-sql:foundations:insert)

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:select
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
