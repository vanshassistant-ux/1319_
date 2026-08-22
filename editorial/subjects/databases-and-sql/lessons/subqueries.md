# Subqueries

## In 30 Seconds

A subquery is a SELECT statement enclosed in parentheses inside another query — the working definition from SQLite's documentation. Microsoft Learn calls the nested query the inner query and the statement containing it the outer query. The inner query runs first and hands its result to the outer query, which uses it as a value or a list. The most common placement is inside a WHERE clause, where the condition is built from another query's result — such as products priced above the average price.
## Why This Matters

Some questions cannot be answered in one step. "Which products cost more than average?" first needs the average, then a comparison against it. A subquery lets you write both steps in a single statement, so the database does the whole job in one run. That matters because real questions are rarely flat: you compare against a value, check membership in a list, or ask whether anything exists. Subqueries also reuse everything you already know from SELECT and WHERE, and learning to spot when a question needs two steps carries into any data tool, not just SQL.
## Learning Objectives

- Define a subquery as a SELECT statement enclosed in parentheses inside another query, using the working definitions of SQLite and Microsoft Learn.
- Explain why subqueries exist: some questions are answered in steps, and a subquery packs both steps into one statement.
- Identify the inner query and the outer query in a nested statement, and describe how the inner result feeds the outer query.
- Recognize the most common placement of a subquery: inside a WHERE clause, where it supplies the values a condition compares against.
- Contrast subqueries with joins as two ways to combine data, and state when joins often do the same job more clearly.

## The College Version

### A query inside a query

SQL's own documentation states the idea directly. SQLite's language reference states it in one sentence: a SELECT statement enclosed in parentheses is a subquery. Microsoft Learn adds the shape around it: a subquery is a query that is nested inside a SELECT, INSERT, UPDATE, or DELETE statement, or inside another subquery, and it names the two parts — the nested query is the inner query, and the statement containing it is the outer query. Two ideas do all the work here. First, a subquery is still just a SELECT: everything you know about reading tables applies. Second, the parentheses are what make it a subquery; PostgreSQL's documentation notes that subqueries used as derived tables must be enclosed in parentheses. Take the parentheses away and the database no longer knows where the inner question ends and the outer question begins.
### Why use one: answering questions in steps

Cedar & Vine Books keeps a books table with columns for title and price. The owner wants to know which books cost more than the store's average price — a question that has no single-step answer, because the average has to exist before anything can be compared with it. Run the steps by hand and it looks like this: first SELECT AVG(price) FROM books; returns 14.30, then SELECT title, price FROM books WHERE price > 14.30; returns the books above it. A subquery fuses the two steps into one statement:

```sql
SELECT title, price
FROM books
WHERE price > (SELECT AVG(price) FROM books);
```

The database computes the average, keeps it for itself, and compares every price against it in the same run. That is the whole reason subqueries exist: they let one statement answer a question that needs a preliminary result.
### The basic shape: an inner query feeding an outer query

Look at the fused statement again and the shape is plain. The outer query is the familiar SELECT title, price FROM books WHERE price > ... — a normal read with a gap in the condition. The inner query is the SELECT AVG(price) FROM books written inside parentheses, and it fills that gap. The database evaluates the inner query first, obtains a value (14.30 in this case) or a list of values, and then runs the outer query with that result in hand. SQLite's documentation describes the behavior directly: an uncorrelated subquery is evaluated only once and the result reused as necessary. Nothing is stored and nothing is repeated — the inner query runs, its answer feeds the outer query, and the statement is finished.
### Subqueries with WHERE: the most common use

The most common place to find a subquery is inside a WHERE clause, and the mechanism is simple: the condition is built from another query's result. Instead of comparing a column against a number you typed, you compare it against whatever the inner query returns. W3Schools shows the pattern with IN: you can use IN with a subquery in the WHERE clause, returning all records from the main query that are present in the result of the subquery. At Cedar & Vine, the owner wants the names of customers who have placed at least one order:

```sql
SELECT name
FROM customers
WHERE customer_id IN (SELECT customer_id FROM orders);
```

The inner query produces the list of customer ids that appear in orders, and the outer query keeps only the customers whose id is on that list. Two more WHERE-companions appear in the same family: EXISTS, which W3Schools describes as checking whether a subquery returns any rows, and which PostgreSQL says is evaluated only to determine whether at least one row comes back. One detail matters for IN: PostgreSQL documents that its right-hand side is a parenthesized subquery that must return exactly one column — the shape of the inner result has to match what the condition compares.
### Subqueries versus joins: two ways to combine data

A join combines tables side by side; a subquery nests one query inside another. That one-line contrast is worth keeping sharp, because the two tools often answer the same question. Microsoft Learn says it plainly: many statements that include subqueries can alternatively be formulated as joins. Even PostgreSQL's own examples blur the line — its EXISTS example, the documentation notes, is like an inner join on the column in question. Joins are a full topic of their own, so this lesson does not teach them; the point here is only the boundary. When you see two tables in a question, both routes exist, and choosing between them is about which one reads clearly.
### Readability, and the honest framing

Nesting hides logic. A subquery inside a condition is easy to follow; a subquery inside a subquery starts to read like a riddle, and each level adds a place for a mistake to hide. The honest guidance is to keep subqueries short and shallow, and to remember the tool's purpose: subqueries exist to answer two-step questions, not to make queries look clever. Microsoft Learn balances the picture in both directions — many statements with subqueries can be rewritten as joins, yet other questions can be posed only with subqueries. So the framing is simple: a subquery is a tool, not a goal. When a join states the question more clearly, use the join; when the subquery does, use the subquery. Readability decides.
## Key Vocabulary

- **subquery** — A SELECT statement written in parentheses inside another query; the inner query runs first and its result is used by the outer query.
- **inner query** — The nested SELECT that sits inside the outer statement; Microsoft Learn also calls it the inner select.
- **outer query** — The statement that contains a subquery; it receives the inner query's result and finishes the question.
- **parentheses** — The round brackets that mark where a subquery begins and ends inside a statement.
- **nested query** — Another name for a subquery, describing how one query sits inside another query.
- **WHERE clause** — The part of a statement that keeps only the rows meeting a condition; a subquery often supplies the values that condition compares against.
- **join** — A way to combine two tables side by side using a matching column; an alternative to a subquery for many questions, covered in its own lesson.

## Eli-10

A subquery is a query tucked inside another query, in parentheses. The inner one runs first and hands its answer to the outer one. Ask "which books cost more than the average price?" and you can write the whole thing as one statement: the inner query works out the average, and the outer query keeps the books above it. The most common spot for a subquery is in the WHERE part of a statement, where the condition compares against the inner query's result — like checking which customers are in the list of people who have placed an order.
## Eli's Analogy

Think of planning a party and needing to know which of your friends live within ten minutes of the venue. First you find the addresses within ten minutes — that is a list. Then you check each friend against that list. A subquery is the first step, done inside the same note as the second: "the friends whose homes are in the nearby-addresses list." The database runs the inner step first, then uses its answer for the outer step.

The analogy makes the steps sound like separate pieces of paper. In SQL the two steps live in one statement, and the database keeps the inner result to itself — you never see it unless you run the inner query on its own. And the result is not a saved list: it is computed fresh each time the statement runs, so it always matches the table's current contents.
## Worked Example

Cedar & Vine Books stores its titles in a books table with columns for title and price. The owner wants a shelf report: every book priced above the store's average price. She first asks for the average — SELECT AVG(price) FROM books; — and the database returns 14.30. That value becomes the comparison in the second step: SELECT title, price FROM books WHERE price > 14.30;. Rather than keep two queries in sync by hand, she writes one statement with the average query nested inside the comparison:

```sql
SELECT title, price
FROM books
WHERE price > (SELECT AVG(price) FROM books);
```

The database runs the inner query first, works out 14.30, and returns the two books above it: Salt Roads at $16.50 and The Cartographer's Daughter at $19.25. If a new book changes the average, the same statement stays correct — the inner query recomputes it every time.
## Common Mistakes

- **Forgetting the parentheses around the inner query.** The parentheses mark where the subquery begins and ends. PostgreSQL's documentation notes that subqueries must be enclosed in parentheses, and without them the database cannot tell the inner question from the outer one.
- **Expecting the outer query to run first.** The inner query runs first and produces the value or list; the outer query then uses that result. SQLite's documentation says an uncorrelated subquery is evaluated once and its result reused — the nesting is the point.
- **Writing an inner query that returns more than the condition can use.** The comparison has to match the inner result's shape. PostgreSQL documents that the right-hand side of IN is a parenthesized subquery that must return exactly one column; a multi-column result needs a different form.
- **Stacking several subqueries and expecting the statement to stay readable.** Each level of nesting hides more logic. Keep subqueries short, and remember Microsoft Learn's note that many statements with subqueries can alternatively be formulated as joins — when a join reads more clearly, use it.

## Compare / Contrast

- **A subquery vs. A join** — A subquery nests one query inside another and uses the inner result as a value or a list; a join combines tables side by side on a matching column. For many questions either route gives the same answer, and joins have their own lesson.
- **One combined statement vs. Two queries run by hand** — A subquery answers a two-step question in one statement, so the database always compares against the current value; running two queries by hand risks typing a stale result into the second one.
- **The inner query's result vs. A stored table** — A subquery's result is computed fresh each time the statement runs and is never saved; a stored table lives in the database and stays there between queries.

## Key Takeaway

A subquery is a SELECT statement nested in parentheses inside another query: the inner query runs first and feeds its result to the outer one, most often as the values a WHERE condition compares against — a tool for two-step questions, not a substitute for choosing the wording that reads clearest.
## Practice Question Bank

**Q1.** What is a subquery, according to SQLite's documentation?

- A SELECT statement enclosed in parentheses inside another query.
- A separate table stored inside the database.
- A special command that copies a table.
- A shorthand for writing SELECT *.

**Key: A.** SQLite's language reference defines a subquery as a SELECT statement enclosed in parentheses. The other options describe storage, copying, or shorthand, none of which is nesting.
**Q2.** Cedar & Vine Books runs SELECT title, price FROM books WHERE price > (SELECT AVG(price) FROM books);. What does the part in parentheses do?

- It sorts the books by price.
- It lists every book in the store.
- It computes the average price that the outer query compares against.
- It deletes the books priced below average.

**Key: C.** The inner query in parentheses computes the average price, and the outer query keeps only the books whose price is above it. Sorting, listing everything, and deleting are different operations.
**Q3.** A nested statement returns the same answer as two separate queries run by hand. Which statement best describes the advantage of the subquery version?

- The subquery changes the table; the separate queries do not.
- One statement keeps the steps in sync, so the comparison always uses the current value.
- The subquery is the only legal way to compute an average.
- Separate queries always run faster than one nested statement.

**Key: B.** With one nested statement, the database computes the inner result and uses it in the same run, so the outer query always compares against the current value. Two queries run by hand can go stale between runs.
**Q4.** Harbor Market wants the names of customers who have placed at least one order. Which query answers that in one statement?

- SELECT name FROM customers WHERE customer_id IN (SELECT customer_id FROM orders);
- SELECT name FROM customers, orders;
- SELECT name FROM customers WHERE customer_id = (SELECT customer_id FROM orders);
- SELECT name FROM orders WHERE customer_id IN (SELECT name FROM customers);

**Key: A.** The IN form keeps the customers whose id appears in the subquery's list of ids from the orders table. The equals form fails when the subquery returns more than one row, and the last option compares an id against names.
**Q5.** What does Microsoft Learn say about statements that include subqueries?

- Joins cannot be used in the same database as subqueries.
- A subquery is faster than a join in every case.
- Every join requires a subquery to work.
- Many statements that include subqueries can alternatively be formulated as joins.

**Key: D.** Microsoft Learn states that many statements that include subqueries can alternatively be formulated as joins — the two routes often answer the same question, so readability decides.
## Sources

- SQLite Consortium — "SQLite Query Language: Expressions (Section 11, Subquery Expressions)". https://www.sqlite.org/lang_expr.html
- Microsoft Learn — "Subqueries (SQL Server)". https://learn.microsoft.com/en-us/sql/relational-databases/performance/subqueries
- W3Schools — "SQL IN Operator". https://www.w3schools.com/sql/sql_in.asp
- W3Schools — "SQL EXISTS Operator". https://www.w3schools.com/sql/sql_exists.asp
- The PostgreSQL Global Development Group — "PostgreSQL Documentation: 9.24. Subquery Expressions". https://www.postgresql.org/docs/current/functions-subquery.html
- The PostgreSQL Global Development Group — "PostgreSQL Documentation: Table Expressions". https://www.postgresql.org/docs/current/queries-table-expressions.html

## Related Topics

- SELECT (databases-and-sql:foundations:select)
- WHERE (databases-and-sql:foundations:where)
- JOIN (databases-and-sql:foundations:join)
- Aggregate Functions (databases-and-sql:foundations:aggregate-functions)
- SQL Basics (databases-and-sql:foundations:sql-basics)

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:subqueries
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
