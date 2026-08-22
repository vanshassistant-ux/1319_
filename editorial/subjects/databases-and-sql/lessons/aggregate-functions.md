# Aggregate Functions

## In 30 Seconds

An aggregate function takes many rows and turns them into one summary value. PostgreSQL's documentation gives the working definition: aggregate functions compute a single result from a set of input values. SQL has five everyday ones: COUNT (how many), SUM (total), AVG (average), MIN (smallest), and MAX (largest). The basic shape is short, as in SELECT COUNT(*) FROM orders;. Aggregates skip NULL values in their calculations, with one exception: COUNT(*) counts rows, so it counts every row. Add WHERE to filter first, then summarize.

## Why This Matters

Raw tables are too big to read. A store with ten thousand orders cannot learn anything by scrolling; the question "what is our average order size?" is answerable only when the database can compress ten thousand rows into one number. That compression is exactly what aggregate functions do, which is why they sit at the heart of reporting, dashboards, and data analysis. Understanding them also unlocks the rest of SQL's summarizing toolkit: WHERE narrows which rows get summarized, and GROUP BY produces one summary per group instead of one overall total. The same move, reducing a large collection to one meaningful number, shows up in spreadsheets, statistics, and everyday decisions.

## Learning Objectives

- Define an aggregate function as a function that combines many rows into one summary value, using the working definitions of PostgreSQL and W3Schools.
- Identify the five common SQL aggregate functions — COUNT, SUM, AVG, MIN, and MAX — and what each one reports.
- Apply the basic aggregate shape, SELECT COUNT(*) FROM table;, to count the rows in a table.
- Explain how aggregates handle NULL values, including the COUNT(*) exception.
- Distinguish summarizing a whole table from summarizing after a WHERE filter, and explain why the filter comes first.
- Recognize GROUP BY as the sibling topic that produces one summary per group.

## The College Version

### The working definition

The definition mirrors the language's own documentation. PostgreSQL's documentation opens its aggregate functions chapter with one sentence: aggregate functions compute a single result from a set of input values. W3Schools' SQL tutorial says the same thing in plainer words: an aggregate function is a function that performs a calculation on a set of values, and returns a single value. Bring the two descriptions together and the working definition is short: an aggregate function takes many rows and combines them into one summary value. The rows go in, the summary comes out, and the database does the combining for you.

### The big five

SQL's everyday summarizing toolkit has five functions, and W3Schools lists them with one-line descriptions. COUNT returns the number of rows in a set — how many. SUM returns the sum of a numerical column — the total. AVG returns the average value of a numerical column — the mean. MIN returns the smallest value of a column, and MAX returns the largest. Each takes a column name in parentheses and works over every row the query selects. Against a scores table holding eight exam scores — 74, 88, 91, 65, 82, 79, 95, and 70 — SELECT MAX(points) FROM scores; returns 95, SELECT MIN(points) FROM scores; returns 65, and SELECT SUM(points) FROM scores; returns 644. One query, one number, every time.

### The basic shape

The simplest aggregate query counts rows. The shape is SELECT COUNT(*) FROM table, and it works for every table: name the function, point it at a table, end with a semicolon. PostgreSQL documents count(*) as computing the number of input rows, and SQLite describes count(*) as returning the total number of rows in the group. On the scores table, SELECT COUNT(*) FROM scores; returns 8 — one row per exam. The asterisk here does not mean every column the way it does in a plain SELECT; inside COUNT(*) it simply means count the rows. Whatever the table, that query answers the same question: how many rows are in here?

### What happens to NULLs: the honest note

Most of the big five quietly skip missing values, and W3Schools states the rule in one sentence: aggregate functions ignore null values, except for COUNT(*). SQL keeps a special marker, NULL, for a value that is missing or unknown — a score not yet entered, a price not yet set. SUM, AVG, MIN, and MAX compute over the values that are actually there. PostgreSQL documents each of them as computing over non-null input values, and SQLite says the same: AVG returns the average of all non-NULL values in the group. So if one of eight scores is NULL, SELECT AVG(points) FROM scores; divides by seven, not eight — the average of the seven scores that exist. COUNT is the exception with a built-in split: COUNT(column) counts only non-null values, while COUNT(*) counts rows, NULLs and all. The honest note is short: aggregates mostly ignore NULLs, and COUNT(*) never does.

### Filter first, then summarize: aggregates with WHERE

Aggregates do not have to summarize the whole table. Add a WHERE clause and the aggregate summarizes only the rows that pass the filter — the database filters first, then summarizes. W3Schools' reference writes the shape as SELECT COUNT(column_name) FROM table_name WHERE condition, and the pattern is identical for any of the big five. On the scores table, SELECT AVG(points) FROM scores WHERE subject = 'algebra'; returns 79.5 — the average of the four algebra scores, not all eight. WHERE decides which rows the aggregate sees; how the filter itself works gets its own lesson; here the point is the combination: filter first, then summarize.

### One overall total, or one per group

COUNT(*) on the whole table gives one number for everything. Real questions often want one number per category — the average per subject, sales per month, users per country. That is the job of GROUP BY, and W3Schools describes the pairing plainly: aggregate functions are often used with the GROUP BY clause of the SELECT statement, which splits the result-set into groups of values, letting the aggregate return a single value for each group. The mechanics — how to write the clause and what it does to the result — belong to the group-by lesson. Here it is enough to know that an aggregate can summarize a whole table or, with GROUP BY, each group inside it.

### The honest framing: thousands of rows into one useful number

Aggregate functions exist because raw tables are too big to read. Ten thousand orders, eight hundred students, a million page views — none of it answers anything until it is compressed. An aggregate turns thousands of rows into one useful number: how many, how much in total, on average, the smallest, the largest. That compression is deliberate, and it has a price: a summary hides the variation behind it. An average of 80 can hide a class where everyone scored near 80 or a class split between 50s and 110s. The number answers the question asked; it never claims to be the whole story. Used with that in mind, aggregates are the fastest path from a raw table to a usable answer.

## Key Vocabulary

- **aggregate function** — A function that performs a calculation on a set of values and returns a single value; the working definition is that it combines many rows into one summary value.
- **COUNT** — The aggregate that reports how many: COUNT(*) counts the rows of a table or group, while COUNT(column) counts only the rows where that column has a non-null value.
- **SUM** — The aggregate that adds up the values of a numeric column and returns the total.
- **AVG** — The aggregate that returns the arithmetic mean of a numeric column's non-null values.
- **MIN** — The aggregate that returns the smallest value in a column.
- **MAX** — The aggregate that returns the largest value in a column.
- **NULL** — SQL's marker for a missing or unknown value; most aggregates skip NULL values in their calculations, and COUNT(*) does not.
- **WHERE clause** — The clause that filters rows before they are summarized, so an aggregate combined with WHERE summarizes only the matching rows; the where lesson covers it.
- **GROUP BY clause** — The clause that splits rows into groups so an aggregate returns one summary per group instead of one overall total; the group-by lesson covers it.

## Eli-10

An aggregate function is a summary button for a table. You point it at a column and it squashes every row into one number. Five buttons cover almost everything: COUNT says how many rows, SUM adds a column up, AVG finds the average, MIN picks the smallest value, and MAX the largest. The shape barely changes — SELECT COUNT(*) FROM scores; counts the rows in the scores table. Missing values get skipped by SUM, AVG, MIN, and MAX, and COUNT(*) counts every row anyway. Add a WHERE filter before the summary and you summarize only the rows that match, like only the algebra scores.

## Eli's Analogy

Picture a teacher grading a stack of quizzes. She does not read every paper aloud to the class; she wants three numbers: how many quizzes came in, the class total, and the average score. Counting the papers is COUNT, adding the scores is SUM, and dividing is AVG. If she wants the worst and best single papers, MIN and MAX find them without scanning the whole stack. One stack of papers, a few numbers, done.

The analogy has limits. Real aggregates run over a database table in an instant, and they handle missing quizzes differently than a teacher might: SQL skips a missing score in the average instead of counting it as zero. The analogy also covers one whole class only — splitting the stack by homeroom to average each group is GROUP BY, which has its own lesson.

## Worked Example

Green Valley Cinema records every ticket sold in a tickets table with columns ticket_id, movie, price, and showtime. On Monday the manager wants to know how the day went. She runs SELECT COUNT(*) FROM tickets; and learns that 1,200 tickets were sold. Then SELECT SUM(price) FROM tickets; returns 9,600 — the day's revenue in dollars. Dividing revenue by tickets, SELECT AVG(price) FROM tickets; gives 8.00, the average ticket price, and SELECT MAX(price) FROM tickets; shows the most expensive single ticket at 12.50. Finally she asks about evening shows only: SELECT AVG(price) FROM tickets WHERE showtime = 'evening'; — the database keeps the evening rows first, then averages those. Five queries, five useful numbers, one table.

## Common Mistakes

- **Expecting AVG or SUM to include missing values — averaging eight scores where one is NULL and assuming the result divides by eight.** Aggregates skip NULLs: AVG divides by the number of non-null values. If you need an average over all rows, the missing values must be real values first.
- **Thinking the WHERE filter runs after the summary.** The filter runs first: WHERE decides which rows the aggregate sees, and only then does COUNT, SUM, or AVG work over the remaining rows.
- **Using COUNT(column) when what is wanted is the number of rows.** COUNT(column) skips rows where the column is NULL; COUNT(*) counts every row. Ask which count you actually want before writing the query.
- **Using SUM or AVG on a text column.** SUM and AVG expect numbers — W3Schools describes both as working on a numerical column. MIN and MAX, by contrast, work on any sortable values, including text and dates.

## Compare / Contrast

- **COUNT(*) vs. COUNT(column)** — COUNT(*) counts every row in the table or group; COUNT(column) counts only rows where that column holds a non-null value, so the two numbers differ when values are missing.
- **An aggregate over the whole table vs. an aggregate with a WHERE clause** — The first summarizes every row and returns one overall number; the second filters rows first, then summarizes only the matching rows, giving a number for a subset.
- **AVG vs. SUM** — SUM returns the total of a numeric column; AVG returns that total divided by the number of non-null values — the arithmetic mean. Both skip NULLs, but they answer different questions: how much in total versus what is typical.

## Key Takeaway

An aggregate function compresses many rows into one summary value: COUNT, SUM, AVG, MIN, and MAX are the big five, they mostly ignore NULLs, and WHERE filters first so the aggregate summarizes only the rows that match.

## Practice Question Bank

**Q1.** What does an aggregate function do?

- It combines many rows into a single summary value.
- It adds one new row to a table.
- It sorts the rows of a table into a fixed order.
- It removes rows that contain duplicate values.

**Key: A.** PostgreSQL's documentation defines aggregate functions as computing a single result from a set of input values, and W3Schools describes an aggregate function as performing a calculation on a set of values and returning a single value. Adding, sorting, and removing rows are jobs for other SQL commands, not aggregates.
**Q2.** A scores table stores exam results in a points column: 74, 88, 91, 65, 82, 79, 95, and 70. Which query returns the largest single score?

- SELECT MIN(points) FROM scores;
- SELECT MAX(points) FROM scores;
- SELECT SUM(points) FROM scores;
- SELECT COUNT(*) FROM scores;

**Key: B.** MAX returns the largest value in a column, so SELECT MAX(points) FROM scores; returns 95. MIN returns the smallest (65), SUM returns the total (644), and COUNT(*) returns the number of rows (8).
**Q3.** A scores table has eight rows, and one row has NULL in its points column. What does SELECT COUNT(*) FROM scores; return?

- 7, because the row with NULL is skipped.
- 8, because COUNT(*) counts rows, not values.
- 0, because no single value appears in all eight rows.
- NULL, because one of the values is missing.

**Key: B.** COUNT(*) counts rows: PostgreSQL documents it as computing the number of input rows, and SQLite says count(*) returns the total number of rows in the group. The NULL row is still a row, so the answer is 8; COUNT(points), by contrast, would return 7 because it counts only non-null values.
**Q4.** The scores table holds 74, 88, 91, 65, 82, 79, 95, and 70 in its points column. Which query returns the arithmetic mean of all eight scores?

- SELECT SUM(points) FROM scores;
- SELECT MIN(points) FROM scores;
- SELECT AVG(points) FROM scores;
- SELECT COUNT(*) FROM scores;

**Key: C.** AVG returns the average value of a numeric column — the arithmetic mean, which is 80.5 here. SUM returns the total of 644, MIN returns the smallest value of 65, and COUNT(*) returns the row count of 8.
**Q5.** A shop's orders table has an amount column. The owner wants the total value of only the orders over $50. Which query does this in one step?

- SELECT SUM(amount) FROM orders;
- SELECT MAX(amount) FROM orders WHERE amount > 50;
- SELECT COUNT(*) FROM orders WHERE amount > 50;
- SELECT SUM(amount) FROM orders WHERE amount > 50;

**Key: D.** SUM adds the values of a numeric column, and the WHERE clause filters rows first, so the query sums only the orders whose amount is over 50. The first option sums every order, the second returns the largest filtered order instead of a total, and the third counts filtered orders instead of summing them.

## Sources

- W3Schools — "SQL Aggregate Functions". https://www.w3schools.com/sql/sql_aggregate_functions.asp
- W3Schools — "SQL COUNT(), AVG() and SUM() Functions". https://www.w3schools.com/sql/sql_count_avg_sum.asp
- The PostgreSQL Global Development Group — "PostgreSQL Documentation: 9.21. Aggregate Functions". https://www.postgresql.org/docs/current/functions-aggregate.html
- SQLite Consortium — "SQLite Query Language: Built-in Aggregate Functions". https://www.sqlite.org/lang_aggfunc.html

## Related Topics

- SQL Basics (databases-and-sql:foundations:sql-basics)
- SELECT (databases-and-sql:foundations:select)
- WHERE (databases-and-sql:foundations:where)
- GROUP BY (databases-and-sql:foundations:group-by)
- Tables (databases-and-sql:foundations:tables)

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:aggregate-functions
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
