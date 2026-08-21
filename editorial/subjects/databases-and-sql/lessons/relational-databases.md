# Relational Databases

## In 30 Seconds

A relational database is a database that stores data in tables linked by shared values, the working definition used by IBM and Oracle. Computer scientist Edgar F. Codd proposed the relational model in 1970, and it became the standard way to organize business data. Tables hold data in rows and columns, and related tables connect through common values such as a customer number rather than by copying data. Most business software runs on relational databases, and SQL is the standard language for talking to them. The model is a choice, not magic.

## Why This Matters

Relational databases run the systems behind everyday life: orders, bookings, accounts, and records. Knowing what one is, and why the table-and-shared-value design became the default, lets you see how a shop's order form connects to its customer file, why businesses avoid storing the same address in fifty places, and what people mean when they say a system runs on a database or uses SQL. It is also the foundation every later topic in this subject builds on: tables, rows, columns, keys, relationships, and SQL all assume this one idea. Learning it now makes the rest of the subject concrete, and it gives you a fair way to judge database claims you will hear for the rest of your career.

## Learning Objectives

- Define a relational database as a database that stores data in tables linked by common values, using the working descriptions of IBM and Oracle.
- State the historical origin of the relational model: proposed by Edgar F. Codd in his 1970 paper.
- Explain how tables hold data in rows and columns and how related tables are linked by shared values rather than by copying whole datasets.
- Name the three main strengths behind the relational model's dominance: flexibility, consistency, and avoiding duplication.
- Contrast relational databases with the non-relational (NoSQL) family in one line, and identify SQL as the standard language for relational databases.

## The College Version

### A working definition

A relational database is a database that stores data in tables linked by common values. IBM, which makes some of the most widely used database software, describes a relational database as one that organizes data into rows and columns that form tables, with the data points related to each other. Oracle, another major database company, says a relational database stores and provides access to data points that are related to one another. Put the two descriptions together and the working definition is simple: the data lives in tables, and the tables are connected by values they share. Nothing about this definition requires size or glamour: a corner shop's customer file is stored relationally if it is kept this way, and so is a national bank's account system.

### A short history: Codd, 1970

Before the relational model, every application typically stored its data in its own unique structure, so the same information was arranged differently in each program that used it. In 1970, computer scientist Edgar F. Codd published a paper titled "A Relational Model of Data for Large Shared Data Banks" that proposed a standard way to represent and query data: organize it into tables, originally called relations, and let tables be related through the values they hold in common. The idea took hold over the following decade, and relational systems became the industry's main way of storing structured data. The historical fact matters because it shows the model is a designed answer to a real problem, not a law of computing.

### Tables: the core idea

At the center of the relational model sits the table: data organized in rows and columns, the same shape as a well-kept spreadsheet. Each row holds one entry, one customer or one order, and each column holds one kind of fact, such as the customer's city or the order's date. W3Schools, whose SQL tutorial has taught a generation of beginners, puts it plainly: the data in a relational database is stored in objects called tables, and a table is a collection of related entries consisting of columns and rows. What makes tables more than tidy lists is that they are the unit of connection; the model's original term for a table was "relation," and it is from that word that relational databases get their name. The mechanics of tables, rows, and columns each have their own topics; here the point is that this grid is the model's building block.

### Relations between tables

The key idea of a relational database is how tables connect: through shared values, not by copying whole datasets into one another. Consider a bookstore with two tables. The customers table holds one row per customer, with a customer number, a name, and a city. The orders table holds one row per order, with an order number, the customer number of whoever placed it, the date, and the total. The two tables are linked because both contain the customer number. When the shop needs to know who placed order 501, it matches that order's customer number against the customers table, and the database pulls the two tables together on the common value. Notice what the order row does not contain: the customer's name and address are not copied into every order. The order stores only the number, and the link does the rest.

### Why relational won

Three strengths explain why the relational model became the default for business data. Flexibility: because data sits in tables that can be linked as needed, new questions can be answered without rebuilding the data, and Oracle credits tables as an intuitive, efficient, and flexible way to store structured information. Consistency: each fact is stored in one place, so a value changed once is correct everywhere it is referenced, and Oracle singles out data consistency as a hallmark of the relational model. Avoiding duplication: storing each fact once instead of copying it into every record that mentions it reduces redundancy; the disciplined process for deciding which facts belong in which table is called normalization, a topic of its own. Together, these three strengths let one database serve many applications without the same information drifting apart.

### SQL, NoSQL, and an honest framing

Relational databases have a standard language: SQL, short for Structured Query Language, which W3Schools describes as a standard language for accessing and manipulating databases. People and programs use SQL to ask questions of the tables, add new rows, and update facts. A tiny taste: to see every customer's name and city, a query might read `SELECT name, city FROM customers;`. That is the whole language lesson here, because sql-basics owns the syntax. Relational is the default for most business data, but it is not the only model: the main alternative family is non-relational, or NoSQL, databases that store data in forms other than tables, often chosen for unstructured data such as text, images, and video. Microsoft Learn notes that relational systems are a common way to store and manage transactional and analytical data, which is why most order, account, and record-keeping systems use them. None of this makes the model magic; it is a designed model with strengths and limits, and knowing which model fits which job is part of database literacy.

## Key Vocabulary

- **relational database** — A database that stores data in tables, with related tables linked by shared values such as a customer number.
- **relational model** — The way of organizing data, proposed by Edgar F. Codd in 1970, in which data is kept in tables that can be related through common values.
- **table** — A grid of rows and columns holding one kind of related data, such as customers or orders; the core structure of a relational database.
- **row** — A single entry in a table, describing one customer, one order, or one other item.
- **column** — One named kind of fact in a table, such as the city of a customer or the date of an order.
- **shared value** — A piece of data, such as a customer number, that appears in two tables and is what links them together.
- **SQL** — The standard language for storing, retrieving, and changing data in relational databases.
- **NoSQL** — A family of non-relational databases that store data in forms other than tables, used for many unstructured-data workloads.
- **RDBMS** — Software that stores, manages, and retrieves data in relational databases.

## Eli-10

A relational database is a database that stores its data in tables, like spreadsheets with rows and columns. The clever part is how tables connect: instead of copying a customer's address into every order, an order row stores just the customer's number, and that shared number links the two tables. Edgar F. Codd proposed this design in 1970, and it became the default for business data because it is flexible, keeps facts consistent, and avoids writing the same information in many places. SQL is the standard language used to talk to these databases.

## Eli's Analogy

Think of a school office that keeps a student card box and a loan box. Each card holds one student's name and address; each loan slip holds one book's title and the student's card number. To find who borrowed a book, the office matches card numbers, and a student who moves changes the address in one place, the card, not on every loan slip. A relational database works the same way: the tables are the card boxes, and the shared numbers are what the office matches.

The card box makes tables sound small and human-managed. Real relational databases hold billions of rows, are queried by software rather than clerks, and are guarded by rules about which values may be shared and what happens when data changes. The matching idea is the same; the scale and the machinery are not.

## Worked Example

Cedar Harbor Books keeps two tables. The customers table holds one row per customer: customer 1001 is Amara Chen of Portland, customer 1002 is Leo Ortiz of Salem. The orders table holds one row per order: order 501 was placed by customer 1001 on March 14 for $42.50. The order row stores only the customer number, not Amara's name or address. When a clerk asks who placed order 501, the system finds customer 1001 in the customers table by matching the shared value. When Amara moves, her address changes once, in the customers table, and every order she has ever placed automatically shows the new address because no order ever copied the old one. That one design choice, linking by shared values instead of copying data, is what makes the relational model's consistency and low duplication possible.

## Common Mistakes

- **Thinking tables are linked by copying data into each other.** Tables are linked by shared values, such as a customer number. Copying a customer's address into every order creates duplication, and the copies drift apart when the address changes.
- **Believing the relational model has existed as long as computers have.** Codd proposed the relational model in 1970. Earlier systems stored data in per-application structures, and the table model won acceptance over the following decade.
- **Assuming every database is relational.** Relational specifically means data in tables linked by shared values. The non-relational (NoSQL) family stores data in other forms, such as documents or key-value pairs.
- **Thinking SQL is a feature of one company's product.** SQL is a standard language for accessing and manipulating databases, used across relational systems from many vendors. Its syntax is the subject of the sql-basics topic.
- **Treating the relational model as the only correct way to store data.** It is the default for most business data, but it is a model with strengths and limits. Some unstructured-data workloads fit the non-relational family better.

## Compare / Contrast

- **Relational database vs. Non-relational (NoSQL) database** — A relational database stores data in tables linked by shared values; a NoSQL database stores data in other forms, such as documents or key-value pairs, and is often chosen for unstructured data.
- **Storing a shared value vs. Copying the whole dataset** — A shared value such as a customer number links two tables and stays current when the fact changes once; copying whole datasets into each table duplicates facts and lets them drift apart.
- **Relational model vs. Per-application file structures** — The relational model, proposed by Codd in 1970, gives all applications one standard table-based way to represent and query data; earlier per-application structures arranged the same information differently in every program.

## Key Takeaway

A relational database stores data in tables and links those tables by shared values, a design proposed by Edgar F. Codd in 1970 that became the default for business data because it is flexible, consistent, and avoids duplication. SQL is the standard language for working with it.

## Practice Question Bank

**Q1.** Which statement best defines a relational database?

- A. A database that stores data in tables linked by common values.
- B. A database that keeps all of its data in one very long list of entries.
- C. A database that stores a separate copy of every record for each application that uses it.
- D. A database that stores data only as files on a server.

**Key: A.** IBM describes a relational database as one that organizes data into rows and columns forming tables where the data points are related, and Oracle describes it as storing data points that are related to one another. Tables linked by common values captures both framings; long lists, per-application copies, and plain files are not the relational design.

**Q2.** Edgar F. Codd is credited with proposing the relational model in a 1970 paper. What was the model's central idea?

- A. Every application should store its data in its own unique structure.
- B. All data should be kept in one single file so nothing is ever split up.
- C. Data should be organized into tables that can be related through the values they share.
- D. Data should be stored as free-form documents with no fixed structure.

**Key: C.** Codd's 1970 paper, "A Relational Model of Data for Large Shared Data Banks," proposed organizing data into tables, originally called relations, and relating those tables through shared values. Unique per-application structures, single files, and free-form documents describe other approaches, not the relational model.

**Q3.** Riverside Bikes keeps a customers table and an orders table. An order row stores the customer's number but not the customer's full address. Why is that the better design?

- A. Because addresses are too long to fit in an order row.
- B. Because only the warehouse staff are allowed to know customer addresses.
- C. Because customer numbers are shorter and easier to type than addresses.
- D. Because the order links to the customer through the shared number, so the address is stored once and stays consistent.

**Key: D.** The order row stores only the shared value, the customer number, and the database matches it against the customers table when the address is needed. Copying the address into every order would duplicate it and let copies drift apart; the shared-number link keeps one copy current. Length, permissions, and typing ease are not the design reasons.

**Q4.** A database designer explains why relational databases became the standard for business data: they adapt to new questions, keep related facts from drifting apart, and avoid storing the same fact in many places. Which terms name those three strengths in order?

- A. Speed, security, and simplicity.
- B. Flexibility, consistency, and avoiding duplication.
- C. Size, secrecy, and sorting.
- D. Cost, compatibility, and caching.

**Key: B.** The three strengths match what the sources emphasize: tables as a flexible way to store structured information (Oracle), the relational model's strength at maintaining data consistency (Oracle), and the relational model reducing data redundancy through normalization (IBM). Speed, security, and the other trios are real database concerns but are not the three strengths named in the explanation.

**Q5.** A startup stores product descriptions, customer comments, and photos of items in ways that do not fit neatly into fixed tables. Which one-line description best fits this situation?

- A. They have a non-relational (NoSQL) need, the alternative family that stores data in forms other than tables.
- B. They have a relational database but are using it incorrectly.
- C. They must convert every photo and comment into numbers before storing anything.
- D. They need a second relational database just to hold the photos.

**Key: A.** Non-relational, or NoSQL, databases are the alternative family, storing data in forms other than tables and often chosen for unstructured data such as text, video, and images, which is exactly this startup's situation. Calling it a misuse of relational storage, requiring numeric conversion, or adding another relational database all miss the fit question.

## Sources

- IBM — "What is a relational database?". https://www.ibm.com/topics/relational-databases
- Oracle — "What Is a Relational Database?" (published June 18, 2021). https://www.oracle.com/database/what-is-a-relational-database/
- W3Schools — "SQL Introduction". https://www.w3schools.com/sql/sql_intro.asp
- Microsoft Learn — "Explore fundamental relational data concepts" (training module). https://learn.microsoft.com/en-us/training/modules/explore-relational-data-offerings/

## Related Topics

- What a Database Is (databases-and-sql:foundations:what-a-database-is)
- Tables (databases-and-sql:foundations:tables)
- Primary Keys (databases-and-sql:foundations:primary-keys)
- Foreign Keys (databases-and-sql:foundations:foreign-keys)
- SQL Basics (databases-and-sql:foundations:sql-basics)

## Editorial Metadata

- Topic ID: databases-and-sql:foundations:relational-databases
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
