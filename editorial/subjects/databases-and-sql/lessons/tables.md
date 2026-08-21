# Tables

## In 30 Seconds

A table is the basic storage unit of a relational database: a named collection of related data arranged in rows and columns, like a grid. Each row holds one record; each column holds one kind of fact. Every row in a table lines up the same way, because the columns are fixed and named. Good design gives each kind of thing — customers, orders, products — its own table, and tables connect through values they share. A table resembles a spreadsheet, but its rules are stricter.

## Why This Matters

Every database task — finding a record, updating one, combining data from two places — begins with knowing where the data lives, and the answer is always a table. Once you can see a table as a named grid with a single purpose, you can predict what belongs in it, notice when one table tries to hold too many kinds of things, and follow how tables connect through shared values. That same eye transfers to spreadsheets, analytics tools, and any program that stores records. The lessons that follow — rows, columns, primary keys, and SQL — assume you can picture the table first. Learn this one idea well and the rest of database work becomes a matter of organizing information, not memorizing commands.

## Learning Objectives

- Define a table as a named collection of related data arranged in rows and columns, using the working definition attributed to W3Schools.
- Identify rows and columns as the two structural parts of a table and state what each one holds.
- Apply the one-table-per-kind-of-thing pattern by deciding how many tables a new scenario needs.
- Distinguish a database table from a spreadsheet by the stricter rules tables follow.
- Recognize that separate tables connect through shared values, with keys and relationships covered in their own lessons.

## The College Version

### What a table is

The working definition comes from W3Schools' SQL tutorial: a table is a collection of related data entries that consists of columns and rows. IBM's explainer says the same thing from the other direction — a relational database organizes data into rows and columns, which together form a table where the data points are related to each other. Notice what both definitions insist on: the data is related. A table is not a dumping ground; it holds facts that belong together, such as all the members of a club or all the bikes the club tracks. PostgreSQL's documentation puts the same idea in formal terms: a relation — its mathematical name — is essentially another word for table. Everything a database does, from finding data to changing it to connecting tables, happens to tables.

### The anatomy of a table

A table has exactly two kinds of parts. Columns run down the table: each column is one kind of fact, with a name and a single data type, such as text or a number. Rows run across: each row is one record — one complete set of facts about a single item. PostgreSQL's tutorial states the rule precisely: each row of a given table has the same set of named columns, and each column is of a specific data type. That one sentence is the whole anatomy. Rows and columns each have their own lessons; here, one line each is enough to see the grid the table is built from.

### One table per kind of thing

The organizing pattern of a well-designed database is simple: one table per kind of thing. IBM's example is a company with a customer table — columns for customer ID, company name, address, and industry — and a separate transaction table — transaction date, customer ID, amount, and payment method. Each kind of thing gets its own table, and the tables stay separate even though they are related. Consider an original example: Brightwood Bicycle Co-op. The shop keeps a Members table (member number, name, phone, join date), a Bikes table (bike number, member number, make, color), and a Repairs table (repair number, bike number, date, cost). Three kinds of things, three tables. The pattern scales: customers, orders, and products in a store; students, courses, and enrollments in a school.

### Names and purpose

A table is created with a name, and that name should say what the table holds. PostgreSQL's tutorial introduces its examples by name — a weather table for daily readings, a cities table for cities and their locations — and W3Schools' example is simply the Customers table. The design intuition: a table has a name and a clear purpose. Members, not Data. Repairs, not Table1. A name that names the kind of thing tells everyone — including future-you — what belongs inside, what questions the table can answer, and what should be kept out. If you cannot give a table a clear name, you probably do not yet know what it is for.

### Tables connect through shared values

Tables rarely sit alone. IBM's explainer makes the point directly: data is typically structured across multiple tables, which are joined through unique identifiers such as a primary key or a foreign key, and those identifiers express the relationships between tables. In the co-op example, the member number appears in Members and in Bikes; the bike number appears in Bikes and in Repairs. Those shared values are the bridges. The details of keys and relationships each have their own lessons — primary keys, foreign keys, and relationships are sibling topics — so here the idea fits in one sentence: separate tables link through values they have in common.

### A table is not a spreadsheet

At a glance a table looks like a spreadsheet: a grid of rows and columns. The resemblance is real, and the differences are the point. A database table insists that every row share the same named columns, that each column hold one type of value, and — as PostgreSQL's documentation notes — that rows have no guaranteed order, though they can be sorted for display. A spreadsheet tolerates merged cells, blank rows, formatting, and free-form notes; a table does not. It trades flexibility for discipline, and that discipline is what lets a database find, match, and update records reliably and without ambiguity.

## Key Vocabulary

- **Table** — A named collection of related data arranged in rows and columns; the basic storage unit of a relational database.
- **Row** — One record in a table — the horizontal line of values that describes a single item.
- **Column** — One kind of fact held by every row in a table, identified by a name and a data type.
- **Record** — Another word for a row: one complete set of values describing a single item.
- **Database** — An organized collection of data, usually stored and managed by dedicated software.
- **Data type** — The kind of value a column holds, such as text, a whole number, or a date.
- **Shared value** — A piece of data that appears in more than one table, such as a member number, used to connect related records across tables.

## Eli-10

A table is where a database keeps one kind of thing. Picture a grid: rows running across, columns running down. Each row is one item — one customer, one book, one repair job. Each column is one kind of fact about that item, like a name, a price, or a date. Every row lines up the same way because the columns are fixed and named. Give the table a name that says what it holds, keep one kind of thing per table, and connect tables through values they share. That is nearly all there is to tables at this level. The language used to create and search tables, SQL, gets its own lesson.

## Eli's Analogy

Think of a table like a well-organized binder of index cards. Each section of the binder is one table: a section for members, a section for bikes, a section for repairs. Every card in a section has the same printed blanks — name, phone, join date — and each filled-in card is one row. When you need to connect a member to her bikes, you flip to the bikes section and match cards by the member number written on both.

**Where the analogy breaks down.** The binder comparison flatters tables. A binder forgives a card with a blank slot or a scribbled note; a database table refuses: every row must have the same named columns, each column holds one type of value, and rows have no built-in order. Also, nothing in a binder stops you from filing a recipe card in the members section, while a database enforces its rules automatically, every time data is added.

## Worked Example

Brightwood Bicycle Co-op keeps records for its members, and the owner starts with one table: Members, with columns for member number, name, phone, and join date. Each row is one member — row 104 is Priya Shah, 555-0134, joined 2026-03-14. The shop also tracks each bicycle as its own kind of thing, so a second table, Bikes, holds bike number, member number, make, and color. A member with two bikes appears once in Members and twice in Bikes; the member number is the shared value that connects the tables. Repairs need their own table too: repair number, bike number, date, and cost. When the owner asks which repairs belong to Priya's bike, she follows the shared values from table to table: find Priya's member number, find her bikes' numbers, find the repairs attached to them. Three kinds of things, three tables, and every link is a value the tables share.

## Common Mistakes

- **Putting every kind of thing into one giant table.** A members-and-bikes table would repeat the member's phone and join date on every bike row. Follow the one-table-per-kind-of-thing pattern instead: separate tables for members and bikes, connected by the member number.
- **Assuming rows keep the order you added them.** PostgreSQL's documentation is explicit that SQL does not guarantee the order of rows within a table. Sorting happens when data is retrieved or displayed, not by the order rows were inserted.
- **Naming tables vaguely — Data, Stuff, Table1.** A table's name should state its purpose, like Customers, Members, or Repairs. If you cannot name it clearly, you likely do not yet know what the table is for.
- **Treating a database table like a spreadsheet range.** A spreadsheet tolerates merged cells, blank rows, and free-form notes; a database table requires the same named columns in every row, one data type per column, and rows without guaranteed order. The stricter rules are what make reliable lookups possible.

## Compare / Contrast

- **A database table vs. a spreadsheet range** — Both are grids of rows and columns, but a table enforces fixed named columns, one data type per column, and unordered rows, while a spreadsheet allows merged cells, blank rows, and free-form content.
- **A row vs. a column** — A row runs across the table and holds one complete record — one item; a column runs down and holds one kind of fact shared by every row.
- **One table per kind of thing vs. one table for everything** — Separate tables keep each record's facts together and connect through shared values; a single oversized table repeats information and makes updates error-prone.

## Key Takeaway

A table is the grid that holds a database: a named collection of related data arranged in rows and columns. Give each kind of thing its own table, name it for what it holds, and link tables through shared values — and remember the structure is stricter than a spreadsheet.

## Practice Question Bank

**1. Which statement best describes a table in a relational database?**

- A single piece of information, such as one customer's phone number.
- A collection of related data entries arranged in rows and columns.
- A list of unrelated facts stored in a single file.
- A program that manages all the data on a computer.

**Answer:** B. W3Schools defines a table as a collection of related data entries consisting of columns and rows, and IBM describes relational data as rows and columns that together form a table of related data points. A single piece of information is a value, not a table; a program that manages data is a database management system; and a table holds related, not unrelated, data.

**2. According to PostgreSQL's documentation, which statement about a table's structure is true?**

- Every row in a given table has the same set of named columns, and each column has a specific data type.
- Rows in a table are guaranteed to stay in the order they were added.
- Different rows in the same table may use different sets of columns.
- A table stores one kind of fact for one row only.

**Answer:** A. PostgreSQL's tutorial states that each row of a given table has the same set of named columns and each column is of a specific data type, and it notes that SQL does not guarantee row order. The other options contradict that structure.

**3. A community garden club wants to track its gardeners, its garden plots, and the harvest records for each plot. Following the one-table-per-kind-of-thing pattern, how many tables should the club's database use?**

- One table, since all the information belongs to the same club.
- Two tables, one for people and one for everything else.
- Three tables, one for gardeners, one for plots, and one for harvest records.
- Six tables, one for every column of information.

**Answer:** C. The one-table-per-kind-of-thing pattern gives each kind of thing its own table; the club has three kinds of things — gardeners, plots, and harvest records — so three tables, connected through shared values. One table would mix unrelated records, two would force two kinds into one table, and six tables misunderstands what a table holds.

**4. A bookstore owner is creating a table to hold the books the store sells. Which name best follows the design intuition that a table has a name and a clear purpose?**

- Data
- Books
- Stuff
- Table2

**Answer:** B. A table's name should say what kind of thing it holds, the way W3Schools uses Customers and PostgreSQL uses weather and cities. Books names the kind of thing; Data, Stuff, and Table2 say nothing about the table's purpose.

**5. A table and a spreadsheet range look similar, but the table follows stricter rules. Which difference is real?**

- A table's rows may each use different columns, while a spreadsheet's rows must all match.
- A table may hold several unrelated kinds of things, while a spreadsheet holds only one.
- A table stores rows in the order they were added, while a spreadsheet does not.
- Every row in a table has the same named columns, each column holds one type of value, and rows have no guaranteed order.

**Answer:** D. PostgreSQL's documentation describes exactly those rules: the same set of named columns in every row, one data type per column, and no guaranteed row order. The other options state the opposite of how tables actually behave.

## Sources

- PostgreSQL Documentation 18 — Chapter 2. The SQL Language: 2.2. Concepts. The PostgreSQL Global Development Group. https://www.postgresql.org/docs/current/tutorial-concepts.html (read 2026-08-21)
- PostgreSQL Documentation 18 — Chapter 2. The SQL Language: 2.3. Creating a New Table. The PostgreSQL Global Development Group. https://www.postgresql.org/docs/current/tutorial-table.html (read 2026-08-21)
- W3Schools SQL Tutorial: SQL Introduction — RDBMS. W3Schools. https://www.w3schools.com/sql/sql_intro.asp (read 2026-08-21)
- What is a relational database? IBM Think. https://www.ibm.com/think/topics/relational-databases (read 2026-08-21)

## Related Topics

- What a Database Is — databases-and-sql:foundations:what-a-database-is
- Relational Databases — databases-and-sql:foundations:relational-databases
- Rows — databases-and-sql:foundations:rows
- Columns — databases-and-sql:foundations:columns
- Relationships — databases-and-sql:foundations:relationships

## Editorial Metadata

- **Topic id:** databases-and-sql:foundations:tables
- **Subject / unit / slug:** databases-and-sql / foundations / tables
- **Phase:** 2
- **Editorial status:** READY_TO_PUBLISH
- **Research status:** source-verified (PostgreSQL documentation, W3Schools, IBM; all reference-only)
- **Researched at:** 2026-08-21
- **Rights:** reference-only sources; no source prose adapted; all examples original
- **Notes:** No SQL content, per literacy level; rows, columns, primary keys, foreign keys, relationships, and SQL are referenced sibling topics only.
