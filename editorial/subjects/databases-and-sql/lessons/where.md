# WHERE: Filtering Rows

## In 30 Seconds

WHERE is the part of a SQL query that filters rows. It keeps only the rows that meet a condition you state, and drops the rest. You write it after the table name: SELECT title FROM books WHERE year > 2015. Conditions use comparison operators — = (equal), <> (not equal), > (greater than), < (less than) — and you can join them with AND and OR. Text values go in quotes; numbers do not.

## Why This Matters

Every real query is a question, and most questions start with "which rows?" WHERE is how SQL answers that — the difference between "all customers" and "customers in Mexico." It is the most used clause in everyday SQL, and it is where precision pays most: a wrong condition quietly returns the wrong rows, and a missing one returns everything. Most query mistakes happen here, so learning WHERE well makes everything downstream easier. Sorting, grouping, and joining all operate on the rows WHERE leaves behind. And because WHERE also appears in UPDATE and DELETE statements, understanding it protects data too.

## Learning Objectives

- Define the WHERE clause as the part of a SQL query that filters rows to those meeting a stated condition.
- Write a basic filtering query in the shape SELECT columns FROM table WHERE condition.
- Use the comparison operators =, <>, >, and < in WHERE conditions.
- Distinguish quoted text values from unquoted numeric values in conditions.
- Combine conditions with AND and OR and predict which rows each combination keeps.
- Explain that WHERE filters rows before grouping and sorting are applied.

## The College Version

### WHERE picks the rows

A SELECT query names the columns you want, but it says nothing yet about which rows. The WHERE clause supplies that answer: it filters rows, keeping only the ones that meet the condition you write and discarding the rest. W3Schools states it plainly: the WHERE clause is used to filter records and extract only those that fulfill a specific condition. The PostgreSQL documentation describes the mechanics: after the FROM clause is processed, each row of the derived table is checked against the search condition, and a row is kept only if the condition evaluates to true. Rows that come out false — or null, in cases where a value is missing — are discarded. So the working definition to hold onto is short: WHERE picks only the rows that meet a condition. Notice what it does not do: it does not change the table, delete rows, or reorder anything. It only decides, one row at a time, whether that row belongs in the answer.

### The shape of a WHERE query

The basic shape never varies: SELECT the columns, FROM the table, WHERE the condition. In full, SELECT column1, column2 FROM table_name WHERE condition. The condition is a test that each row must pass. For example, a small library table named books stores each title with its author, its publication year, and its genre. To list only the mystery books, write SELECT title FROM books WHERE genre = 'mystery'. To list the books published after 2015, write SELECT title FROM books WHERE year > 2015. Same skeleton every time — the condition is the only part that changes. Reading a query aloud is a good habit: "select the title column, from the books table, where the genre equals mystery." If the sentence describes exactly the rows you want, the query is probably right. If it does not, the condition is where to look first.

### Writing conditions: operators, text, and numbers

Conditions compare a column's value against something. Four comparison operators carry most everyday filtering, one idea each: = means equal to, <> means not equal to, > means greater than, and < means less than. SQL also offers >= and <= for the "or equal" cases, and some systems accept != in place of <>. Choosing the right operator is the first precision skill: a query asking for books published after 2015 wants >, not >=, and a query asking for everything except mysteries wants <>, not =. The second precision skill is knowing how values are written. Text values must be wrapped in single quotes — genre = 'mystery' — while numeric values are written bare — year > 2015. Quote a number and some databases will still compare it, but the convention exists for a reason: it keeps the meaning of the condition explicit and avoids surprises with text-like numbers such as postal codes or phone numbers stored as text.

### Combining conditions, and where WHERE sits

One condition is often not enough. AND combines conditions so that a row must pass all of them; OR combines them so that a row passes if it meets any one. A query asking for mystery books published after 2015 needs AND — both tests must hold, so genre = 'mystery' AND year > 2015. A query asking for either mystery or sci-fi books needs OR, so genre = 'mystery' OR genre = 'sci-fi'. The two keywords behave very differently, and mixing them up is one of the most common filtering errors. Thinking about order also matters. Conceptually, WHERE runs early: it narrows the table to the rows that survive the filter, and only then do grouping and sorting rearrange what remains. The PostgreSQL documentation describes FROM, WHERE, GROUP BY, and HAVING as a pipeline of successive transformations on the table. Get the filter right first, and every later step works on the rows you actually meant. This is also the honest framing: WHERE is where most query mistakes happen, and where precision pays the most.

## Key Vocabulary

- **WHERE clause** — The part of a SQL statement that filters rows, keeping only those that satisfy a stated condition.
- **condition** — A true-or-false test written after WHERE that each row is checked against.
- **comparison operator** — A symbol such as =, <>, >, or < that compares two values in a condition.
- **text value** — A string of characters written inside single quotes, such as 'mystery'.
- **numeric value** — A number written without quotes, such as 2015.
- **AND** — A keyword that joins conditions so a row must satisfy every one of them.
- **OR** — A keyword that joins conditions so a row is kept if it satisfies at least one of them.
- **filter** — To remove rows that fail a condition, leaving only the rows that pass it.

## Eli-10

WHERE is the gatekeeper of a SQL query. The table holds every row, but you rarely want all of them at once. WHERE stands at the gate and applies your test to each row as it comes through: pass the test, you stay; fail it, you are out. It never changes the table itself — the original rows are still there — it only decides which ones show up in your answer.

## Eli's Analogy

Think of a club with a guest list. The bouncer (WHERE) holds the list and checks every person in line against it. Only the people whose names are on the list get in; everyone else waits outside. The crowd that enters is a smaller group than the line that queued up, but the line itself is untouched — it is still there, outside the door.

The analogy has limits. A bouncer checks people one at a time against a fixed list, but a WHERE condition can compare any column against any value — greater than, not equal to, and so on — and can combine several tests with AND and OR. The list changes with every query you write, and some conditions can match no rows at all, which a bouncer's list rarely does.

## Worked Example

Cedar Row Library keeps a books table with columns title, author, year, and genre. The librarian wants a list of mystery titles published after 2015, with no other genres and no older books. The query starts with the columns needed — SELECT title — then names the table — FROM books — and then applies the filter: WHERE genre = 'mystery' AND year > 2015. The AND matters: without it, the query would return every mystery ever published, or every post-2015 book of any genre. Reading it aloud tests the logic — "genre is mystery AND year is greater than 2015" — and only rows that satisfy both halves of the sentence reach the result. If the librarian instead wanted all books except mysteries, the same query with <> in place of = would do it.

## Common Mistakes

- **Writing a numeric condition in quotes, like year > '2015'.** Numbers are written bare: year > 2015. Quotes are for text values such as 'mystery'.
- **Using = when the intent is "everything except," as in "all books that are not mysteries."** Use <> for not equal: genre <> 'mystery'.
- **Confusing AND with OR when combining conditions.** AND narrows: every condition must be true. OR widens: any one condition being true is enough.
- **Quoting the column name itself, like WHERE 'genre' = 'mystery'.** Quotes around a name turn it into a text value. Compare the column without quotes: genre = 'mystery'.

## Compare / Contrast

- **WHERE vs. SELECT** — WHERE chooses which rows appear; SELECT chooses which columns.
- **= vs. <>** — = keeps rows that match the value; <> keeps rows that do not match it.
- **AND vs. OR** — AND requires every joined condition to be true; OR requires at least one.

## Key Takeaway

WHERE filters rows: it keeps only the rows that pass the condition you write. Most query mistakes happen right here, so check your operators, your quotes, and your ANDs and ORs before you run.

## Practice Question Bank

1. **What does the WHERE clause do in a SQL query?**
   - A. It keeps only the rows that meet a stated condition.
   - B. It sorts the result rows alphabetically.
   - C. It combines two tables into one.
   - D. It renames the columns in the output.
   - **Answer: A.** WHERE filters rows, keeping only those that satisfy the condition and discarding the rest. Sorting is ORDER BY's job, combining tables is JOIN's job, and renaming columns is done with AS.

2. **In the query SELECT title FROM books WHERE year > 2015, which part is the condition?**
   - A. SELECT title
   - B. FROM books
   - C. year > 2015
   - D. WHERE
   - **Answer: C.** The condition is the test each row must pass: year > 2015. SELECT title names the output column, FROM books names the table, and WHERE introduces the condition.

3. **A books table has a genre column. Which query returns only the mystery books?**
   - A. SELECT title FROM books WHERE year > 2015
   - B. SELECT title FROM books WHERE genre = 'mystery'
   - C. SELECT title FROM books WHERE genre <> 'mystery'
   - D. SELECT title FROM books
   - **Answer: B.** genre = 'mystery' filters for mystery books exactly: the text value is quoted and the operator is equal. The year condition filters by year, <> returns everything except mysteries, and no condition returns all rows.

4. **A books table holds 200 rows. SELECT title FROM books WHERE genre = 'mystery' returns 30 rows. How many rows does SELECT title FROM books WHERE genre <> 'mystery' return, if every row has a genre value?**
   - A. 200
   - B. 30
   - C. 230
   - D. 170
   - **Answer: D.** <> is the not-equal operator, so it keeps the rows that are not mysteries: 200 total minus 30 mysteries leaves 170. The other options ignore the relationship between the two queries.

5. **Which query returns books that are both mysteries AND published after 2015?**
   - A. SELECT title FROM books WHERE genre = 'mystery' AND year > 2015
   - B. SELECT title FROM books WHERE genre = 'mystery' OR year > 2015
   - C. SELECT title FROM books WHERE genre = 'mystery'
   - D. SELECT title FROM books WHERE year > 2015
   - **Answer: A.** AND requires both conditions to be true, so only mystery books published after 2015 pass. OR would also include non-mystery books from any year, and the single-condition options each test only half the request.

## Sources

- W3Schools — SQL WHERE Clause — https://www.w3schools.com/sql/sql_where.asp
- W3Schools — SQL AND, OR, NOT Operators — https://www.w3schools.com/sql/sql_and_or.asp
- PostgreSQL Documentation — Table Expressions (Section 7.2, including 7.2.2 The WHERE Clause) — https://www.postgresql.org/docs/current/queries-table-expressions.html
- W3Schools — SQL ORDER BY Keyword (sibling-topic reference only) — https://www.w3schools.com/sql/sql_orderby.asp

## Related Topics

- databases-and-sql:foundations:select
- databases-and-sql:foundations:order-by
- databases-and-sql:foundations:group-by
- databases-and-sql:foundations:sql-basics
- databases-and-sql:foundations:limit

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:where
- Subject: databases-and-sql / Unit: foundations / Phase: 2
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21 — sources read live; all example queries executed against SQLite before publishing
- Rights: reference-only sources; all prose, examples, and queries are original
