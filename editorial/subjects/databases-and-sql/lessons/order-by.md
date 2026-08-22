# ORDER BY

## In 30 Seconds

ORDER BY is the SQL clause that sorts the rows a query returns. The working definition from W3Schools: the ORDER BY keyword is used to sort the result-set in ascending or descending order. It sits at the end of a SELECT statement: SELECT name, price FROM products ORDER BY price; lists products from lowest to highest price. Ascending order is the default; DESC reverses it. List several columns to break ties, as in ORDER BY last_name, first_name. Sorting arranges the answer — the stored data never changes.
## Why This Matters

Databases make no promise about row order: PostgreSQL warns that without an explicit sort, the returned order must not be relied on. ORDER BY is how you turn a raw answer into a readable one — cheapest first, newest first, alphabetized by name. Every price list, phone directory, schedule, and leaderboard depends on it, and it is the cheapest way to make sense of data: pure arrangement, no calculation. Because it never alters the stored table, you can experiment freely. Learn ORDER BY alongside WHERE, and you can filter a question and then put the answer in a sensible order — the everyday shape of reading data.
## Learning Objectives

- Define ORDER BY as the clause that sorts the rows a query returns, using the working definition from W3Schools.
- Write the basic shape of an ORDER BY clause at the end of a SELECT statement, naming the column to sort by.
- Distinguish ascending order (ASC, the default) from descending order (DESC).
- Explain how listing several columns sorts by a primary key and breaks ties with the next keys.
- Apply ORDER BY after a WHERE clause to sort a filtered result set.
- Explain that ORDER BY changes the display order of a result set, not the stored data.

## The College Version

### What ORDER BY does

The working definition comes from W3Schools' SQL tutorial: the ORDER BY keyword is used to sort the result-set in ascending or descending order. It is a clause of a SELECT statement, and its whole job is to arrange the rows the query returns. Sorting is not something a database does for you: PostgreSQL's documentation warns that if sorting is not chosen, the rows will be returned in an unspecified order, and that actual order must not be relied on. ORDER BY is how you choose the order yourself.

### The basic shape

ORDER BY is written at the end of a SELECT statement, followed by the column you want to sort by. W3Schools gives the general form as SELECT column1, column2, ... FROM table_name ORDER BY column1, column2, ... ASC|DESC;. PostgreSQL's tutorial shows the pattern in use: SELECT * FROM weather ORDER BY city; returns the weather rows arranged alphabetically by city name. An original example with the same shape: SELECT name, price FROM products ORDER BY price; lists every product's name and price, ordered from the lowest price to the highest.

### Ascending and descending

Every sort runs in one of two directions. Ascending order puts smaller values first and is the default: W3Schools states that the ORDER BY keyword sorts the result-set in ascending order (ASC) by default, and PostgreSQL agrees that ASC order is the default, with ascending order putting smaller values first. To reverse the direction, add DESC after the column: SELECT name FROM products ORDER BY name DESC; lists product names from Z to A. The keyword is optional for ascending, so ORDER BY price and ORDER BY price ASC mean the same thing.

### Sorting by more than one column

One sort column is often not enough. When you list several columns, the first one is the primary sort key, and the later ones break ties. W3Schools demonstrates the idea with customers sorted by Country and then CustomerName: the query sorts first by country, and if some records share a country, it sorts them by customer name. SQLite's SELECT reference describes the same mechanism: rows are first sorted by the left-most ORDER BY expression, then ties are broken by the second expression, and so on. An original example: SELECT last_name, first_name FROM members ORDER BY last_name, first_name; builds an alphabetical member list, with people who share a last name ordered by first name. Each key can even have its own direction, as in ORDER BY country ASC, name DESC.

### Sorting text versus numbers

Text and numbers sort by different rules. Text sorts alphabetically: W3Schools' example orders product names in descending alphabetical order, so names beginning with Z come before names beginning with A. Numbers sort by value: the same tutorial sorts products from lowest to highest price. PostgreSQL puts the distinction in one phrase: ascending order puts smaller values first, where smaller is defined by the comparison operator — for numbers that means lower value, and for text it means earlier in the character order. The difference matters when a column stores numbers as text: '10' sorts before '2' alphabetically, because '1' comes before '2'.

### WHERE and ORDER BY together

ORDER BY rarely works alone. A typical question filters first and sorts second: keep only the rows you care about with WHERE, then arrange them with ORDER BY. The order of the clauses in the statement is fixed. SQLite's SELECT reference describes generating results as a process in which WHERE clause processing filters the input data, with the ORDER BY clause sorting the rows that remain — so the filter runs before the sort. An original example: SELECT name, price FROM products WHERE category = 'pump' ORDER BY price; returns only pumps, listed from cheapest to most expensive. WHERE is a full topic of its own; here it is enough to place it before ORDER BY and let the sort run on the filtered rows.

### The honest framing: display order, not stored data

Sorting arranges the answer; it does not rearrange the table. PostgreSQL describes the sort as a step applied after the query has produced its output table: a particular output ordering is guaranteed only if the sort step is explicitly chosen, and that ordering applies to the result, not to the stored rows. Run the same query twice and you get the same arrangement, but the table underneath stays exactly as it was. That is what makes ORDER BY safe to experiment with — it can scramble the answer but never the data.

## Key Vocabulary

- **ORDER BY clause** — The part of a SELECT statement, written at the end, that sorts the rows the query returns by one or more columns.
- **ascending order** — A sort direction that puts smaller values first; it is the default for ORDER BY and is written ASC.
- **descending order** — A sort direction that puts larger values first; it is written DESC and must be requested explicitly.
- **sort key** — A column a query sorts by; the first key listed is the primary one, and additional keys break ties.
- **result set** — The rows and columns a SELECT query returns, arranged like a small table.
- **alphabetical order** — The order text values take when compared character by character, with A before B before C.
- **tie-breaking** — Sorting rows that are equal on an earlier sort key by the next key in the list.

## Eli-10

ORDER BY is how you tell a database to line up its answer. You name a column and the rows come back sorted by it: SELECT name, price FROM products ORDER BY price; returns products from the cheapest to the most expensive. Cheapest-first is called ascending, and it is the default, so you only write ASC when you want to be explicit. Write DESC to flip it: ORDER BY price DESC gives the most expensive first. Want ties sorted too? Add a second column: ORDER BY last_name, first_name sorts by last name and uses first name to decide the order of people who share one. Text sorts alphabetically, numbers sort by value, and none of this touches the stored data — it only arranges the answer.
## Eli's Analogy

Think of a teacher with a stack of graded quizzes. The quizzes have no meaningful order in the stack — that is the unspecified order a database returns without ORDER BY. Sorting is like shuffling the stack into alphabetical order by student name, or from highest to lowest score. You can re-sort the stack as many times as you like; the quizzes themselves, the data, never change. Only the order you hand them out changes.

The stack analogy is too tidy: a database can sort by several columns at once and in mixed directions, which is awkward with a physical stack, and sorting a very large table takes real computing effort. Also, a paper stack has one current order, while the same query can be sorted differently each time it runs without anything being permanently re-shuffled.
## Worked Example

The Cedar Creek Library keeps a books table with columns for title, author, and publication_year. To prepare a reading list from oldest to newest, the librarian runs SELECT title, publication_year FROM books ORDER BY publication_year;. The result set arrives with the oldest book first and the newest last — ascending order by year, which is the default. Want the newest books at the top? SELECT title, publication_year FROM books ORDER BY publication_year DESC;. For the volunteer shelf-organizing project, she runs SELECT title, author FROM books ORDER BY author, title; so books by the same author appear in title order. After every query the books table is untouched; only the arrangement of the answer changed.
## Common Mistakes

- **Expecting a meaningful row order without ORDER BY.** PostgreSQL warns that rows come back in an unspecified order that must not be relied on. If the order matters, ask for it explicitly with ORDER BY.
- **Writing ORDER BY in the middle of the statement, such as SELECT name ORDER BY price FROM products;.** ORDER BY belongs at the end of the SELECT, after WHERE. The shape is SELECT ... FROM ... WHERE ... ORDER BY ...;.
- **Assuming DESC is the default direction.** ASC is the default — W3Schools and PostgreSQL both state that ascending is the default. DESC must be written explicitly to reverse it.
- **Believing ORDER BY changes the stored data.** Sorting applies to the result set only; the table keeps its stored order. PostgreSQL describes the sort as a step on the query's output table.
- **Sorting a column of numbers stored as text and wondering why '10' comes before '2'.** Text sorts alphabetically, character by character; numbers sort by value. If a numeric column is stored as text, the database compares it as text.

## Compare / Contrast

- **ORDER BY vs. WHERE** — ORDER BY sorts the rows that come back; WHERE filters which rows come back. One arranges the answer, the other selects it.
- **ASC vs. DESC** — ASC puts smaller values first and is the default; DESC puts larger values first and must be requested explicitly.
- **The sorted result set vs. The stored table** — ORDER BY arranges the result set for display; the stored table keeps its original order and is never changed by sorting.

## Key Takeaway

ORDER BY sorts the rows a query returns — ascending by default, descending with DESC, several columns as tie-breakers — and it changes the display order of the result set, never the stored data.
## Practice Question Bank

**Q1.** **What does the ORDER BY clause do in SQL?**

- Removes rows that do not match a condition.
- Sorts the result-set in ascending or descending order.
- Combines rows from two different tables.
- Changes values already stored in a table.

**Key: B.** W3Schools defines the ORDER BY keyword as the way to sort the result-set in ascending or descending order. Removing rows is the job of WHERE, combining tables belongs to JOIN, and changing stored values belongs to UPDATE — each with its own lesson.

**Q2.** **Harbor Market runs SELECT name, price FROM products ORDER BY price;. In what order do the rows come back?**

- In the order the rows happen to be stored.
- From the highest price to the lowest price.
- From the lowest price to the highest price, because ascending is the default.
- Alphabetically by product name.

**Key: C.** W3Schools states that the ORDER BY keyword sorts the result-set in ascending order (ASC) by default, and its example sorts products from lowest to highest price. Without DESC, the smallest price comes first. Row order without ORDER BY is unspecified, and nothing here sorts by name.

**Q3.** **Which query lists club members alphabetically by last name, and by first name when last names match?**

- SELECT last_name, first_name FROM members ORDER BY last_name, first_name;
- SELECT last_name, first_name FROM members ORDER BY first_name, last_name;
- SELECT last_name, first_name FROM members ORDER BY last_name DESC;
- SELECT last_name, first_name FROM members ORDER BY first_name DESC, last_name;

**Key: A.** The first column listed is the primary sort key, and the next one breaks ties: SQLite says rows are first sorted by the left-most ORDER BY expression, then ties are broken by the second. So last_name comes first, then first_name. The other queries put first name first or sort only by last name.

**Q4.** **A library stores publication_year as text. A query with ORDER BY publication_year ASC returns 2001, then 1984, then 1988. Which statement best explains this result?**

- Numbers and text sort by the same rule, so the order is correct.
- The values were compared as text, character by character, so 2001 comes first because its second character, 0, is smaller than 9.
- The table happens to be stored in that order and sorting had no effect.
- ASC sorts from largest to smallest for text columns.

**Key: B.** Text sorts alphabetically, character by character: W3Schools' examples order product names alphabetically while prices sort by value. Compared as text, 2001, 1984, and 1988 begin with the same 1, so the second character decides — 0 beats 9 — putting 2001 first. Sorting did take effect, and ASC never sorts largest first.

**Q5.** **Which query returns only pumps, listed from the cheapest to the most expensive?**

- SELECT name FROM products WHERE category = 'pump';
- SELECT name FROM products ORDER BY price DESC WHERE category = 'pump';
- SELECT name FROM products ORDER BY price;
- SELECT name FROM products WHERE category = 'pump' ORDER BY price;

**Key: D.** The WHERE clause filters the rows first, and ORDER BY then sorts what remains — SQLite's reference describes WHERE filtering the input data, with the ORDER BY clause sorting the result. The correct statement puts ORDER BY after WHERE, so pumps come back cheapest first. The other options filter without sorting, sort without filtering, or put WHERE in the wrong place.

## Sources

- W3Schools — "SQL ORDER BY Keyword". https://www.w3schools.com/sql/sql_orderby.asp
- The PostgreSQL Global Development Group — "PostgreSQL Documentation: 7.5. Sorting Rows (ORDER BY)". https://www.postgresql.org/docs/current/queries-order.html
- SQLite Consortium — "SQLite Query Language: SELECT". https://www.sqlite.org/lang_select.html
- The PostgreSQL Global Development Group — "PostgreSQL Documentation: 2.5. Querying a Table". https://www.postgresql.org/docs/current/tutorial-select.html

## Related Topics

- SELECT (databases-and-sql:foundations:select)
- WHERE (databases-and-sql:foundations:where)
- LIMIT (databases-and-sql:foundations:limit)
- SQL Basics (databases-and-sql:foundations:sql-basics)
- Tables (databases-and-sql:foundations:tables)

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:order-by
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
