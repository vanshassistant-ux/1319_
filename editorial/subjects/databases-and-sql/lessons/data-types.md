# Data Types

## In 30 Seconds

A data type is the rule a column follows: it says what kind of value the column may hold — a number, a piece of text, a date, or a true/false flag. Every column gets one when its table is created, and the type tells the database how to treat the stored value. Because the rule is fixed, a column cannot silently hold a name where a number belongs. Choosing the type that matches the value keeps data honest and consistent.

## Why This Matters

Data types are where a database first decides to care about quality. A column with the right type refuses the wrong kind of value: a date column will not quietly accept "soon", and a number column will not store a name. That matters because nearly every later skill — writing queries, combining tables, guarding data quality — assumes the underlying types were chosen well. When you design a table, the types you pick are a promise about the data. Getting them right at the start is cheap; fixing a table full of miscast values later is not.

## Learning Objectives

- Define a data type as the fixed rule that states what kind of value a column can hold.
- Distinguish the common type families — numbers, text, dates and times, and booleans — by what each one stores.
- Explain why a column's type controls how the database treats its values, such as whether they can be averaged or sorted chronologically.
- Apply the practical rule of choosing the type that matches the value, including storing a phone number as text rather than as a number.
- Analyze what goes wrong when numbers are stored as text or when different kinds of values are mixed in one column.

## The College Version

### What a data type is

A database table is made of columns, and every column is created with one rule attached: a data type. The reference site W3Schools states it plainly — the data type of a column defines what value the column can hold, whether integer, character, money, date and time, or binary. Microsoft's documentation for SQL Server puts the same idea in more formal language: a data type is an attribute that specifies the type of data an object can hold, such as integer data, character data, or date and time data. The working definition to carry away is simple: a data type is a rule saying what kind of value a column can hold. The rule is fixed when the table is designed. It is not a suggestion the database reconsiders on each entry; a column given a numeric type will hold numbers and nothing else, no matter what someone tries to type into it.

### The common families

Most databases group their types into a small number of families, and the names vary from product to product. PostgreSQL's official documentation organizes its types into numeric, character, date/time, and boolean groups, and W3Schools lists the same broad families for MySQL. The numeric family holds quantities: integers for whole numbers such as 12, and decimal types for exact fractional values such as 12.75 — PostgreSQL specifically recommends its exact numeric type for monetary amounts and other quantities where exactness matters. The text family holds strings of characters: short text for values like a state abbreviation, longer text for paragraphs like a note or a description. The date and time family holds calendar values, such as a birth date or the moment a row was added. The boolean family holds a true/false state — whether a member's dues are paid, for example. Each family exists because its values behave differently and deserve different treatment.

### Why types matter

The type is not decoration. As W3Schools puts it, the data type is a guideline that tells the database what kind of data is expected in a column and how the database will interact with the stored data. That one sentence explains most of why types matter. A numeric column can be added, averaged, or compared as a quantity; a text column cannot, because a name like "Maya" has no total. A date column sorts chronologically, so 2026-09-01 follows 2026-08-31; the same values stored as text would sort alphabetically, where "10" comes before "9". Types keep data honest and consistent: they stop the database from treating a label as a quantity or a calendar value as a string of characters. The general principle is that the type decides which operations make sense for the value, and that decision protects the data from silent nonsense.

### Choosing the right type

The practical rule is short: pick the type that matches the value. Ask what the value is for, not what it looks like. A phone number is a useful test case. It is made of digits, so storing it as a number is tempting — but a phone number is not a quantity. No one adds, subtracts, or averages phone numbers. Stored as text, the number keeps its leading zeros, its dashes, and its full length, exactly as written. Stored as a number, a leading zero disappears and the value becomes a quantity that invites meaningless arithmetic. The same reasoning applies across the families: a price is a quantity, so it belongs in a numeric type; the day a member joined is a calendar fact, so it belongs in a date type; whether the member has paid is a true/false state, so it belongs in a boolean type.

### Type mistakes and the honest framing

Two mistakes show up again and again. The first is storing numbers as text — a column holding "12" where twelve is meant — which quietly disables arithmetic and numeric ordering on that column. The second is mixing types in one column: some rows hold "3" and others hold "three", so the column is neither text nor number, and no operation on it is trustworthy. Both mistakes are avoidable with the same habit: decide what the value is, then choose the type. Types are not bureaucracy. They are the database's way of enforcing care — a fixed rule that prevents a lot of silent mistakes before they reach a report, a calculation, or a decision. A well-typed table is one where the data can be trusted to behave as it looks.

## Key Vocabulary

- **data type** — The fixed rule attached to a column that states what kind of value the column can hold, such as a number, text, a date, or a true/false flag.
- **column** — The part of a table that holds one kind of value, such as a fee or a family name, across every row of the table.
- **integer** — A whole number with no fractional part, such as 7 or 104, used for countable quantities.
- **decimal** — A number with a fractional part, such as 3.75, stored exactly — the natural home for money and other precise quantities.
- **text** — A string of characters such as a name or a sentence; text can include digits, but it treats them as characters, not as quantities.
- **date** — A calendar value such as a birth date or the day a row was added, which the database can order chronologically and understand as a point in time.
- **boolean** — A type with two states, true or false, used for yes/no facts such as whether a member's dues are paid.

## Eli-10

A data type is a promise a table makes about a column. When the table is built, each column is told what it may hold: numbers only, text only, dates only, or true/false only. From then on, the column keeps the promise. If a column is promised to hold numbers, the database will not let a name in, and it will treat everything in the column as something that can be counted. If a column is promised to hold text, the database treats everything there as characters — even digits. The promise does the real work: it decides what can enter the column and what the database can do with what is already stored.

## Eli's Analogy

Think of a kitchen with labeled jars. Each jar carries a label — "marbles", "paper clips", "stamps" — and the label is the rule for what goes inside. You would not pour paper clips into the marble jar, and you would not count stamps as if they were marbles. Database columns work the same way: the label, which is the data type, says what belongs in the column and what the contents can be used for.

The comparison breaks down because jars are forgiving: a stray paper clip in the marble jar changes nothing until you reach for a marble. Databases are strict and literal: a column typed as a number will reject or mishandle a text entry, and the damage is often silent — a wrong sort order or a refused calculation. Jars also let you change a label in seconds; changing a column's type after data has been stored is a careful operation that can take real planning.

## Worked Example

Maple Row Food Pantry keeps a table of the households it serves, and the volunteer team typed every column by what the value is, not by what it looks like. household_id is a whole number, because counting households is arithmetic. family_name is text, because a name is never a quantity. adults_in_home is a whole number too, so the team can total the adults served each week. last_visit is a date, so the calendar sorts visits chronologically and the pantry can find households that have not come in for two months. signed_up_for_alerts is true/false. One household's phone number sits in a text column: "555-0142" keeps its dash, and nobody will ever average phone numbers. Every column behaves the way its value demands, because every column was given the type that matches.

## Common Mistakes

- **Storing numbers as text** — a column holds "12" where the number 12 is meant, so the database will not add, average, or order it as a quantity. Ask whether the value will ever be counted or compared as a quantity. If yes, use a numeric type; reserve text for labels and descriptions.
- **Mixing types in one column** — some rows hold "3" and others hold "three", leaving the column neither text nor number. Pick one type for the whole column and make every entry follow it. Free-form notes belong in their own text column, not in a numeric one.
- **Storing dates as text** so they "look right" — but text sorts alphabetically, so "10/31/2026" sorts before "9/1/2026" because "1" precedes "9" as a character. Use a date type for any calendar fact. The database then sorts chronologically and understands the value as a point in time.
- **Choosing a type by what the value looks like instead of what it is** — putting a phone number in a numeric column because it is made of digits. Choose by the operations the value needs. A phone number needs none of arithmetic, so text is the better home: it keeps dashes and leading zeros.

## Compare / Contrast

- **A number vs. text.** A number is a quantity that can be added and ordered numerically; text is a string of characters, even when the characters are digits. A phone number looks like a number but behaves like a label.
- **An integer vs. a decimal.** Both are numbers, but an integer holds whole values only, such as 2 books borrowed, while a decimal holds exact fractional values, such as a $45.00 fee. When the value is always whole, the integer keeps the data exact and simple.
- **A date vs. text that looks like a date.** A date column sorts chronologically and understands calendar rules; text holding "2026-09-01" sorts alphabetically and understands nothing about calendars. Same characters, different meaning.

## Key Takeaway

A data type is the rule that says what kind of value a column can hold; choose the type that matches the value, and the database keeps that column's data honest, consistent, and safe from silent mistakes.

## Practice Question Bank

1. What is a data type in a database?
   - A. A rule that states what kind of value a column can hold (correct)
   - B. A name given to a single row of a table
   - C. A formula the database uses to calculate stored values
   - D. A layout choice for how wide a table appears
2. A community center records each member's annual fee of $45.00. Which data type family fits the fee best?
   - A. Text, so the dollar sign is preserved exactly as typed
   - B. A decimal number, because a fee is a quantity that must stay exact (correct)
   - C. A true/false flag, since the fee is either paid or not
   - D. A date, so the fee can be tied to the year it was paid
3. A theater group records patrons' phone numbers. Why is text a better home for a phone number than a number type?
   - A. Text types store digits faster than number types
   - B. Number types cannot store digits at all
   - C. Phone numbers are not quantities: nobody adds or averages them, and text keeps dashes and leading zeros (correct)
   - D. Text is required for any column that contains digits
4. A library stored its loan dates as text. What problem will sorting that column cause?
   - A. Sorting will work perfectly, because text sorts by length
   - B. The database will refuse to sort any column at all
   - C. The dates will be averaged instead of sorted
   - D. The dates will sort alphabetically, so entries can appear in the wrong chronological order (correct)
5. A sign-up column holds "3" in one row and "three" in another. What is wrong with this column?
   - A. Nothing — the database converts the words to numbers automatically
   - B. It is an example of mixing types: one column holds numbers and text, so no operation on it is trustworthy (correct)
   - C. It is too long to be a valid column
   - D. It is a boolean column that accidentally holds numbers

## Sources

- W3Schools, SQL Data Types — https://www.w3schools.com/sql/sql_datatypes.asp
- PostgreSQL Global Development Group, PostgreSQL Documentation: Chapter 8. Data Types — https://www.postgresql.org/docs/current/datatype.html
- Microsoft Learn, Data types (Transact-SQL) — https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql

## Related Topics

- databases-and-sql:foundations:tables
- databases-and-sql:foundations:columns
- databases-and-sql:foundations:rows
- databases-and-sql:foundations:data-integrity
- databases-and-sql:foundations:sql-basics

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:data-types
- Editorial status: READY_TO_PUBLISH
- Researched at: 2026-08-21
- Provenance: EliExplains original synthesis; facts verified against W3Schools, PostgreSQL documentation, and Microsoft Learn; no source prose reproduced.
