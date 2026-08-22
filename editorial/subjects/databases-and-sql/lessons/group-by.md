# GROUP BY: Summaries Per Group

## In 30 Seconds

GROUP BY is the SQL clause that splits rows into groups and lets the query compute one summary per group. Rows that share the same value in the grouped column land in the same group. The basic shape is SELECT column, COUNT(*) FROM table GROUP BY column, which returns one row per group with its count. Groups are summarized with aggregate functions such as COUNT, SUM, and AVG. WHERE filters rows before grouping happens, and ORDER BY sorts — a different job entirely. GROUP BY is how 'by category' questions get answered.

## Why This Matters

Raw tables answer “how many rows?” but almost every real question is “how many per category?” — books per genre, sales per region, logins per day. GROUP BY is the tool that turns a flat list of rows into those per-category answers, one summary per group. It is the step where data stops being a list and starts being a report, and it sits behind every dashboard and most analytical queries. Because grouping is easy to get subtly wrong — the wrong column grouped, or the filter in the wrong place — learning the rules now means the summaries you build later actually mean what they say.

## Learning Objectives

- Define GROUP BY as the clause that splits rows sharing the same values into groups and computes one summary per group, per the working definitions of W3Schools and the PostgreSQL documentation.
- Write a basic grouped query in the shape SELECT column, COUNT(*) FROM table GROUP BY column.
- Explain that aggregate functions such as COUNT, SUM, and AVG compute one value per group, with the family covered in the aggregate functions lesson.
- Apply the order rule: WHERE filters rows first, then GROUP BY groups the rows that remain.
- Apply the select-list rule: a grouped query may select grouped columns and aggregate expressions, not arbitrary columns.
- Distinguish GROUP BY, which groups rows, from ORDER BY, which sorts result rows.

## The College Version

### Splitting rows into groups

The definition comes straight from the language's documentation. W3Schools' SQL tutorial says the GROUP BY statement groups rows that share values into summary rows, with the classic example “find the number of customers in each country.” The PostgreSQL documentation describes the same mechanism in plainer terms: GROUP BY condenses into a single row all selected rows that share the same values for the grouped expressions. SQLite's documentation fills in the mechanics: each row is assigned to a group based on the results of the GROUP BY expressions, and rows for which those results are the same get assigned to the same group. Between them, the sources give a short working definition: GROUP BY splits rows into groups, and the query computes one summary per group. Every row that shares the same value in the grouped column lands in one group, and each group contributes exactly one row to the result.

### The basic shape

The basic shape never varies: SELECT the column you are grouping by, an aggregate expression, FROM the table, GROUP BY the column. In full: SELECT genre, COUNT(*) FROM books GROUP BY genre. Suppose a small bookstore keeps a books table with columns title, author, genre, published_year, pages, and price, holding eight books: three mysteries, two science fiction novels, two romances, and one nonfiction title. The query above groups the eight rows by genre — every mystery into one group, every science fiction novel into another — and counts how many rows landed in each group. The result is a mini-table with one row per genre: mystery 3, science fiction 2, romance 2, nonfiction 1. Notice the shape of the answer: the result has as many rows as there are groups, not as many as there are books. That is what “one summary per group” looks like in practice. COUNT(*) is an aggregate function; the aggregate functions lesson covers the whole family.

### Pairing with aggregates, and where the clause fits

Grouped queries and aggregate functions are a pair. W3Schools notes that GROUP BY is almost always used in conjunction with aggregate functions like COUNT(), SUM(), and AVG(), which perform calculations on each group. PostgreSQL is precise about the mechanics: aggregate functions are computed across all rows making up each group, producing a separate value for each group. So SUM(pages) returns the total pages per genre, AVG(price) the average price per genre, and COUNT(*) the number of books per genre. The where lesson owns filtering, but WHERE's position matters here. Filtering happens before grouping: W3Schools' combined syntax places WHERE ahead of GROUP BY, and both PostgreSQL and SQLite describe the processing order the same way — WHERE eliminates rows first, then GROUP BY aggregates the rows that remain. To count only books published in 2020 or later, per genre: SELECT genre, COUNT(*) FROM books WHERE published_year >= 2020 GROUP BY genre. The rows are filtered first; the grouping happens second.

### What you may select

A grouped query follows a strict rule about its select list: you may select the column you grouped by, and aggregate expressions — nothing else. PostgreSQL explains why: when GROUP BY is present, it is not valid for select-list expressions to refer to ungrouped columns, since there would otherwise be more than one possible value to return. Inside the mystery group there are three different titles; the database cannot pick one to show, so standard SQL refuses the query. The same logic explains the other classic mistake, grouping by the wrong column: SELECT genre, COUNT(*) FROM books GROUP BY published_year would produce one group per year, and a genre value pulled into each row would be arbitrary. SQLite is famously lenient here — it accepts the bare column and returns an arbitrary value from one of the group's rows — but that is an exception to know about, not the rule to learn.

### Grouping is not sorting

GROUP BY and ORDER BY sound alike, and they are unrelated. ORDER BY sorts the result rows — that is the order-by lesson's job. GROUP BY collects rows into groups so the query can summarize each one. The difference shows in what each returns. SELECT title FROM books ORDER BY title lists every title in alphabetical order: eight rows, same content, rearranged. SELECT genre, COUNT(*) FROM books GROUP BY genre returns four summary rows: the eight books condensed into one row per genre. One rearranges a list; the other condenses it. The two can even appear in the same query — grouping first, then ordering the summary rows — and W3Schools' combined syntax shows exactly that arrangement, with ORDER BY last. Grouping and sorting remain separate steps, each doing its own job.

## Key Vocabulary

- **group** — A collection of rows that share the same value in the grouped column; GROUP BY creates groups and produces one summary row per group.
- **GROUP BY clause** — The part of a SQL query that splits rows into groups, so the query computes one summary per group.
- **grouping column** — The column named after GROUP BY; rows with the same value in it belong to the same group.
- **summary row** — A result row that represents one whole group, holding the group's value and the results of its aggregate expressions.
- **aggregate function** — A function that computes one value from many rows — COUNT counts rows, SUM adds numbers, AVG averages them; with GROUP BY, each group gets its own value.
- **select list** — The part of a SELECT statement that names the columns and expressions the result should contain.

## Eli-10

GROUP BY is the “sort into piles” step of a query. A table is a flat stack of rows; GROUP BY picks a column and sweeps all the rows with the same value into one pile — mystery books into one pile, science fiction into another. Then the query looks at each pile and computes one answer for it: how many books are in this pile, or what the page counts add up to. Every pile becomes exactly one row in the result. The table itself never changes; the piles are just how the query organizes the rows while it works. When someone asks “how many per something,” GROUP BY is the tool that answers.

## Eli's Analogy

Sorting laundry. You dump a basket of clothes on the bed — that is the table. Then you make piles: socks here, shirts there, towels over there. Each pile is a group. Now you can answer questions per pile: how many socks are there, how much do the shirts weigh together. GROUP BY is exactly that: make the piles, then count or weigh each one separately.

The analogy has limits. A laundry pile keeps every item visible, and the piles sit in no particular order. A grouped query is different: the rows inside a group are condensed into one summary row, so the individual books disappear from the result, and the order of the summary rows is not guaranteed — sorting is a separate step that ORDER BY handles.

## Worked Example

Harbor Books keeps a books table with columns title, author, genre, published_year, pages, and price. The owner wants to know how many books the store carries in each genre, so the first query is SELECT genre, COUNT(*) FROM books GROUP BY genre. The rows are grouped by genre and each group returns its count: mystery 3, science fiction 2, romance 2, nonfiction 1. Then the owner asks a sharper question: how many books per genre were published in 2020 or later? The query becomes SELECT genre, COUNT(*) FROM books WHERE published_year >= 2020 GROUP BY genre. WHERE runs first and removes the older rows; GROUP BY then groups only what remains — mystery 2, romance 2, science fiction 1. Nonfiction disappears from the result entirely, because a group with no surviving rows produces no row at all. Each result row is one genre with one summary: that is GROUP BY's whole job.

## Common Mistakes

- **Using COUNT() or SUM() without GROUP BY when the question is per-category.** An aggregate with no GROUP BY collapses the whole table into one total. Add GROUP BY <column> to get one summary per group.
- **Writing WHERE after GROUP BY.** WHERE comes before GROUP BY: filter the rows first, then group the survivors. A query with WHERE placed after GROUP BY is rejected.
- **Selecting a column that is neither grouped nor aggregated.** Each group holds many different values for that column, so the database has no single value to show — standard SQL rejects it, and SQLite quietly returns an arbitrary one.
- **Grouping by the wrong column, such as GROUP BY published_year when the question is about genre.** Rows are grouped by whatever column you name, so the groups only answer the question you actually grouped by. Name the column your question is about.
- **Expecting GROUP BY to sort the output.** GROUP BY groups; ORDER BY sorts. If the order of the summary rows matters, add ORDER BY.

## Compare / Contrast

- **GROUP BY vs. ORDER BY** — GROUP BY collects rows into groups and produces one summary per group; ORDER BY sorts the result rows without changing their content.
- **GROUP BY genre vs. GROUP BY published_year** — The grouped column decides what each group represents; the summaries are only as meaningful as the column you group by.
- **WHERE vs. GROUP BY** — WHERE removes rows before grouping; GROUP BY organizes the surviving rows into groups.

## Key Takeaway

GROUP BY splits rows that share the same value into groups and produces one summary per group. Filter with WHERE first, group by the column your question is about, and select only grouped columns and aggregate results.

## Practice Question Bank

1. **What does GROUP BY do in a SQL query?**
   - A. It sorts the result rows alphabetically.
   - B. It splits rows that share the same values into groups, and the query computes one summary per group.
   - C. It removes rows that appear more than once.
   - D. It keeps only the rows that pass a condition.
   - **Answer: B.** GROUP BY collects rows that share the same value in the grouped column into groups and computes one summary per group — what W3Schools calls summary rows. Sorting is ORDER BY's job, removing duplicates is DISTINCT's job, and filtering is WHERE's job.

2. **In the query SELECT genre, COUNT(*) FROM books GROUP BY genre, what does each row of the result represent?**
   - A. One book from the books table.
   - B. The book with the most pages in each genre.
   - C. One genre together with the number of books in that genre.
   - D. The total number of books across all genres.
   - **Answer: C.** Each result row is one group — one genre — with its summary, the count of books in that group. The result has as many rows as there are genres, not as many as there are books, and no single book appears in it.

3. **A books table stores title, genre, and published_year. Which query counts books per genre, considering only books published in 2020 or later?**
   - A. SELECT genre, COUNT(*) FROM books GROUP BY genre WHERE published_year >= 2020
   - B. SELECT genre, COUNT(*) FROM books WHERE published_year >= 2020
   - C. SELECT genre, COUNT(*) FROM books WHERE published_year >= 2020 GROUP BY published_year
   - D. SELECT genre, COUNT(*) FROM books WHERE published_year >= 2020 GROUP BY genre
   - **Answer: D.** WHERE must come before GROUP BY: filter the rows first, then group the survivors by genre. Option A puts WHERE in the wrong place, option B has no GROUP BY (one total instead of per-genre counts), and option C groups by the wrong column.

4. **In a grouped query like SELECT genre, COUNT(*) FROM books GROUP BY genre, why would adding the title column to the select list be a problem?**
   - A. Because each genre group contains many different titles, so the database has no single title to show.
   - B. Because text columns cannot appear next to aggregate functions.
   - C. Because COUNT(*) counts only numeric columns.
   - D. Because title is not mentioned in the FROM clause.
   - **Answer: A.** A group holds many rows, each with its own title, so there is more than one possible value to return; standard SQL rejects the ungrouped, non-aggregated column, and SQLite is lenient and returns an arbitrary one. Text is fine when it is the grouped column, COUNT(*) counts rows of any type, and title is in the table.

5. **A report needs the number of books per genre. Which statement about GROUP BY and ORDER BY is correct?**
   - A. GROUP BY sorts the rows and ORDER BY groups them.
   - B. GROUP BY collects rows into groups for one summary each, while ORDER BY sorts the result rows.
   - C. GROUP BY and ORDER BY do the same job, just with different keywords.
   - D. ORDER BY must appear before GROUP BY in a query.
   - **Answer: B.** Grouping and sorting are different jobs: GROUP BY condenses rows that share values into one summary row per group, and ORDER BY arranges result rows in an order. A grouped query can be sorted afterward with ORDER BY, which comes after GROUP BY in the statement.


## Sources

- W3Schools — SQL GROUP BY Statement — https://www.w3schools.com/sql/sql_groupby.asp
- PostgreSQL Documentation — SELECT (Chapter 7.8) — https://www.postgresql.org/docs/current/sql-select.html
- SQLite — SQLite Query Language: SELECT — https://www.sqlite.org/lang_select.html
- W3Schools — SQL ORDER BY Keyword (sibling-topic reference only) — https://www.w3schools.com/sql/sql_orderby.asp

## Related Topics

- databases-and-sql:foundations:aggregate-functions
- databases-and-sql:foundations:where
- databases-and-sql:foundations:order-by
- databases-and-sql:foundations:select
- databases-and-sql:foundations:sql-basics

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:group-by
- Subject: databases-and-sql / Unit: foundations / Phase: 2
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21 — sources read live; all example queries executed against SQLite before publishing
- Rights: reference-only sources; all prose, examples, and queries are original
