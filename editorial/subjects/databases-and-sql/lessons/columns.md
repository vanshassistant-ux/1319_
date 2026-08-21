# Columns

## In 30 Seconds

A column is a vertical set of values in a table — one value from each row, all the same kind of information. One column holds one property: a name column holds names, a price column holds prices, a date column holds dates. Column, field, and attribute are three names for the same idea. Every column has a name and a type — number, text, or date — and some columns carry rules, like must be filled or must be unique. The columns are what give a table its meaning.

## Why This Matters

Almost every tool that stores data — bank statements, library catalogs, fitness apps, spreadsheets — organizes it into tables, and columns are how those tables label their contents. Read any table and you are really reading its columns: the headers tell you what each value means, and the rules tell you what you can trust. The practical payoff is that you can read data honestly, ask for the right information, and spot when a label is misleading. Conceptually, columns are the foundation for data types, keys, and every query you will meet later — the rest of database literacy builds on this one idea.

## Learning Objectives

- Define a column as a vertical set of values — one value per row, all of the same kind of information.
- Distinguish columns from rows by direction and by role: columns hold one property for every row, while rows hold one entry each.
- Explain why column, field, and attribute are three names for the same idea.
- Apply the naming intuition by choosing clear, specific names for columns that describe the single kind of information they hold.
- Explain how a column's type (number, text, or date) limits what it can hold.
- Analyze why a collection of values without defined columns carries no meaning.

## The College Version

### One property, running down the table

A column is a vertical set of values. Think of a table as a grid: rows run across, columns run down. Each column gathers one value from every row, and the database holds the column set fixed while the rows change. The PostgreSQL documentation puts it plainly: a table in a relational database consists of rows and columns; the number and order of the columns is fixed, and each column has a name, while the number of rows is variable and reflects how much data is stored at a given moment. That asymmetry is the heart of the idea — the columns define the table's shape, and the rows carry its content. W3Schools' SQL tutorial states the same structure in plainer words: a column is a vertical entity in a table, while a record, also called a row, is each individual entry — a horizontal entity.

### One column, one property

Every column holds exactly one kind of information: one property that every row has an answer to. In a small store inventory, a table might hold one row for each item on the shelf. The Item column holds names; the Price column holds numbers; the First Stocked column holds dates. No column mixes kinds — the Price column never contains a name, and the Item column never contains a price. That is what separates a column from a scratch-pad list. The NIST glossary defines an attribute as a distinctive feature, characteristic, or property of an object, and that is exactly the role a column plays: one property, with one value recorded for every row.

### Three names, one idea

You will hear three words for the same structure: column, field, and attribute. Column is the everyday, table-shaped word and the one the SQL world uses. Field comes from earlier, file-based data systems and still appears in tutorials and on forms. Attribute is the formal word from data modeling — the property of an object, in NIST's sense. The words point at the same thing from different traditions. When a tutorial says field or a design diagram says attribute, both mean the vertical set of values this lesson calls a column; W3Schools itself slides between the words, describing a not-null rule as enforcing a field to always contain a value.

### Names, types, and rules

Two things are true of every column: it has a name, and it has a type. The name says what the column holds — CustomerID, CustomerName, and Country are the column names W3Schools uses in its classic Customers example — and the type says which family of values it may hold: numbers, text, or dates. SQLite's documentation describes each column of a table as having a name and a declared type, and PostgreSQL's data types chapter organizes its types into families such as numeric, character, and date/time. Some columns also carry rules, called constraints. A must-be-filled rule — what the SQL world calls not-null — requires every row to have a value there; W3Schools notes that by default a column may be left without a value. A must-be-unique rule requires that no two rows share the same value in that column. Both rules exist so the column keeps meaning what it says.

### Columns give the table its meaning

The honest framing: a table without defined columns is just a pile of values. Consider the bare list 42, Maya, 12.50, 2019-03-14. Nothing in those values says which is a price, which is a name, which is a date, or what each one belongs to. The moment you declare columns — Gardener, Plot Number, Fee, First Planted — every value snaps into place. This is why the column definitions matter more than the data itself: they are the contract that makes each value interpretable. Change a column's name or type and you change what the whole table means; add a column and you add one new property to every row. That is the sense in which columns give a table its meaning — the structure comes first, and the values fill it in.

## Key Vocabulary

- **column** — A vertical set of values in a table: one value from each row, all of the same kind of information.
- **row** — A horizontal entry in a table, holding one value for every column; also called a record.
- **field** — Another name for a column, used mainly in older file-based data systems and in tutorials.
- **attribute** — Another name for a column, from data modeling; an attribute is a property of an object, per the NIST glossary.
- **data type** — The declared family of values a column may hold, such as numbers, text, or dates.
- **constraint** — A rule attached to a column that limits what can be stored in it, such as must be filled or must be unique.
- **null value** — The absence of a value in a particular cell; by default a column may hold no value unless a rule forbids it.

## Eli-10

Imagine a class roster posted on a wall. It is a grid: one line per student, and a fixed set of facts about each student — name, locker number, birthday, homeroom. Each of those facts is a column. The birthday column holds one birthday for every student; the locker column holds one locker number. Every value in a column is the same kind of thing, which is why a column is defined once for the whole table, not once per row. Columns also have names and types: the locker column holds numbers, the name column holds text, and the birthday column holds dates. Some columns have rules — the name column must never be empty, and locker numbers must be unique. A table without its columns is just a jumble of values nobody can read.

## Eli's Analogy

A table is like a card file at a doctor's office, where every patient gets one card. The cards are the rows. Now imagine someone ruling a single vertical line down the stack of cards, at the spot where every card shows the same fact — say, the phone number. That line is the column: one fact, repeated down the stack, always in the same place and always the same kind of information. Pull the column out and the cards still exist, but the phone numbers have lost their meaning — you no longer know which number belongs to which patient.

The card-file picture makes a column feel like a position on paper, but a database column is stronger: it is defined with a type and rules that the database enforces automatically. A hand-drawn line cannot stop someone from writing a name in the price column or leaving a phone number blank; a real column can. And unlike a paper stack, the column itself — its name, type, and rules — is stored separately from the values, which is why it can be changed without touching every card.

## Worked Example

The Greenway community garden rents plots and keeps its records in one table. The columns are Gardener, Plot Number, Plot Size, First Planted, and Fee. Each row is one plot rental. The Gardener column holds text — one gardener's name per row. Plot Number holds numbers, and the garden set a rule that no two rows may repeat a plot number, because one plot cannot be rented twice; that is a must-be-unique rule. First Planted holds dates, one per plot: the day the first seeds went in. The garden also set a must-be-filled rule on Gardener, so no row may be added without a name, because an unclaimed plot would be unmanageable. When the garden later decided to record compost used per plot, it added one new column, Compost Bags, and every existing row gained a place for it. Notice what did not change: the other columns kept their names, types, and rules. Adding a column added one property to every plot, and the table stayed readable because each column still held one kind of information.

## Common Mistakes

- **Thinking a column runs across the table.** A column is vertical — one value from every row — while the horizontal entries are rows, also called records. W3Schools describes a column as a vertical entity in a table and a record as a horizontal entity.
- **Stuffing two kinds of information into one column, like a Notes column that also holds prices.** One column holds one property for every row. If some rows carry a price and others carry a remark, the column no longer means one thing, and anything built on it becomes unreliable.
- **Naming a column vaguely — Data, Info, or Stuff.** A column name should say what the column holds, like CustomerName or First Stocked. The name is the label that makes every value in the column interpretable.
- **Assuming every column must have a value in every row.** Only columns with a must-be-filled rule require a value; by default a column may be left empty in a row, as W3Schools notes. Rules are declared on the column, not assumed from its name.
- **Believing the column name itself enforces the type or the rules.** Names describe; types and constraints enforce. Writing Price in a header does not stop a text value from being stored there — the declared type and rules are what do.

## Compare / Contrast

- **A column vs. a row** — A column is a vertical set of values, all of one kind — one property shared by every row; a row is a horizontal entry holding one value for every column. Columns define the table's fixed shape; rows are the variable content.
- **Column vs. field or attribute** — Same structure, different word traditions: column is the table picture and the SQL word, field comes from file-based systems, and attribute comes from formal data modeling, where it means a property of an object.
- **A column with a must-be-filled rule vs. a column without one** — The first requires every row to carry a value; the second allows some rows to leave it empty. The rule is attached to the column and enforced by the database.

## Key Takeaway

A column is one kind of information running vertically through a table — named, typed, and possibly ruled — and the set of columns is what turns a pile of values into a readable table.

## Practice Question Bank

**Q1.** In a database table, what is a column?

- A. A horizontal entry holding one value for every column.
- B. A vertical set of values — one value from each row, all of the same kind of information.
- C. A rule that a value must be unique across the table.
- D. A single value stored in one cell of the table.

**Key: B.** A column runs vertically through a table, gathering one value from every row, and every value in it is the same kind of information; W3Schools describes a column as a vertical entity in a table. A horizontal entry is a row, a uniqueness rule is a constraint, and a single value is a cell — none of those is a column.

**Q2.** Which word is NOT one of the common names for a column in a table?

- A. Field
- B. Attribute
- C. Record
- D. Column

**Key: C.** Column, field, and attribute are three names for the same idea: the vertical set of values for one property. Record is a name for a row — a horizontal entry — so it is the odd one out.

**Q3.** A neighborhood library keeps a table of borrowed books with the columns Title, Borrower, Due Date, and Late Fee. What does the Due Date column hold?

- A. One date for each borrowed book, with every value a date.
- B. The name of the borrower, repeated once per book.
- C. A mixture of dates and fees, depending on the book.
- D. One row for every date the library is open.

**Key: A.** A column holds one property for every row: the Due Date column holds one date per borrowed book, and all its values are dates, because a column has a type. The borrower's name belongs in the Borrower column, a mixture would break the one-column-one-property rule, and the library's opening days have nothing to do with this column.

**Q4.** A farm supply store adds rules to its inventory table: every row must have a value in the Item Name column, and no two rows may repeat the same Barcode. What are these rules called, and what do they do?

- A. Names — they label what each column holds.
- B. Types — they decide whether a column holds numbers, text, or dates.
- C. Queries — they ask the table for specific rows.
- D. Constraints — the first forces every row to fill the column, and the second forbids duplicate values in it.

**Key: D.** Rules attached to columns are constraints. A must-be-filled rule (the not-null constraint) requires a value in every row, and a unique constraint ensures all values in a column differ, as W3Schools explains. Names label columns, types limit the kind of value, and queries read data — none of them enforce these rules.

**Q5.** A spreadsheet contains the values 42, Maya, 12.50, 2019-03-14 with no column headers. Why does this collection of values carry almost no meaning?

- A. Because the values were typed by different people at different times.
- B. Because without declared columns — names, types, and rules — nothing says which value is a price, a name, or a date, or what each one belongs to.
- C. Because numbers, text, and dates can never be stored together.
- D. Because the spreadsheet has too few values to describe anything.

**Key: B.** Column definitions are what make values interpretable: declared columns tell you that 12.50 is a price, Maya is a name, and 2019-03-14 is a date, and what each belongs to. A table's columns are fixed and named, so without them the values are a pile rather than data. The other options mistake authorship, compatibility, or quantity for the real issue: missing structure.

## Sources

- NIST Glossary: attribute — NIST — https://csrc.nist.gov/glossary/term/attribute
- PostgreSQL 18 Documentation: 5.1. Table Basics — PostgreSQL — https://www.postgresql.org/docs/current/ddl-basics.html
- PostgreSQL 18 Documentation: 5.5. Constraints — PostgreSQL — https://www.postgresql.org/docs/current/ddl-constraints.html
- PostgreSQL 18 Documentation: Chapter 8. Data Types — PostgreSQL — https://www.postgresql.org/docs/current/datatype.html
- SQLite Documentation: CREATE TABLE — SQLite — https://www.sqlite.org/lang_createtable.html
- W3Schools: SQL Introduction — W3Schools — https://www.w3schools.com/sql/sql_intro.asp
- W3Schools: SQL NOT NULL Constraint — W3Schools — https://www.w3schools.com/sql/sql_notnull.asp
- W3Schools: SQL UNIQUE Constraint — W3Schools — https://www.w3schools.com/sql/sql_unique.asp

## Related Topics

- databases-and-sql:foundations:relational-databases
- databases-and-sql:foundations:tables
- databases-and-sql:foundations:rows
- databases-and-sql:foundations:data-types
- databases-and-sql:foundations:primary-keys

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:columns
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21
- Research status: source-verified
- Rights status: reference-only sources; no source prose adapted; all examples and prose original
- Provenance: EliExplains original synthesis from PostgreSQL documentation, W3Schools tutorials, SQLite documentation, and the NIST glossary
