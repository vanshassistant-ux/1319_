# Primary Keys

## In 30 Seconds

A primary key is a column or set of columns that uniquely identifies each row in a table. No two rows may carry the same key value, and no key value may be empty, so the key is how a database tells rows apart and finds any single one. Many tables use a simple ID number as the key, because IDs stay stable while other details change. Other tables can reference a primary key to connect related data. In short, the primary key is the handle that makes every row findable.

## Why This Matters

Every table that holds data needs a way to point at one specific row, and the primary key is that way. When an online store shows your order history, when a hospital system pulls your records, or when two tables are combined to answer a question, the database is using keys to find and connect rows. Without keys, rows would blur together and retrieval would break down. Keys also keep data honest: the database itself refuses to store two rows with the same key value. Understanding primary keys unlocks nearly everything else in this course, from relationships between tables to everyday queries, because almost every database feature leans on the key.

## Learning Objectives

- Define a primary key as the column or set of columns that uniquely identifies each row in a table.
- Explain the uniqueness rule: no two rows may share the same primary key value, and key values cannot be empty.
- Describe the common ID pattern and why many tables add a simple, stable ID number to serve as the key.
- Distinguish the primary key from ordinary columns that simply hold data.
- Explain why a combination of columns can serve as a primary key when no single column is unique.
- Explain how primary keys let other tables reference a row, and why a good key is one that never changes.

## The College Version

### What a primary key is

A primary key is the column or set of columns that uniquely identifies each row in a table. The idea appears in every major database's documentation with consistent wording. PostgreSQL's documentation says a primary key constraint indicates that a column, or group of columns, can be used as a unique identifier for rows. Microsoft's SQL Server documentation says a table typically has a column or combination of columns that uniquely identify each row, and that column or columns is the primary key. W3Schools' tutorial states it plainly: the PRIMARY KEY constraint uniquely identifies each record in a database table. IBM's data management guide defines a primary key as a column or columns with values that uniquely identify each row or record. Four different vendors, one definition: the key is the row's identifier. It is not a special kind of data; it is a special job assigned to ordinary data.

### The uniqueness rule

The defining rule of a primary key is uniqueness: no two rows may carry the same key value. Consider a shop's customer table. Customer 1001 is Aisha, customer 1002 is Ben, and customer 1003 is Aisha's sister, who shares her last name and address. Rows may share a first name, a phone number, or a city; those are ordinary columns. What they cannot share is a customer ID. The database enforces this itself: try to add a second row with customer ID 1001 and the database refuses. The rule has a second half: key values cannot be empty or missing. PostgreSQL spells out both requirements, unique and not null, and W3Schools notes that a primary key is effectively a uniqueness rule plus a not-null rule. Look up a key value and you find exactly one row.

### The ID pattern: simple, stable, meaningless

In practice, many tables do not hunt for a meaningful column to use as the key. They add a new column of ID numbers. IBM lists employee ID, product ID, and student ID numbers among the often-cited examples of primary keys, and Microsoft notes that primary keys are frequently defined on an identity column. Why an ID number? It is simple: one short value, easy to store and compare. It is stable: a name can change with marriage, an address with a move, and a product description with a redesign, but an ID number has no reason to change because it describes nothing about the person or product. And it is meaningless in the useful sense: the ID's only job is to identify the row, so no real-world event can make it wrong. IBM calls an existing column pressed into service a natural key, and a new column created purely to be the identifier a surrogate key. The ID pattern is that surrogate idea: a simple, stable number whose whole purpose is pointing at one row.

### Keys versus ordinary columns

Every column in a table holds data; the key is the one column that identifies. In the customer table, the name column tells you who the customer is, the phone column how to reach them, and the ID column which row is theirs. A column can hold perfectly good data and still be a poor key: two customers can share the name Jordan Lee, and phone numbers, while usually unique, can change. The distinction is about the job, not the data: ordinary columns answer what we know about the row, while the key answers which row this is. That is why the database treats the key specially, enforcing uniqueness and refusing empty values, while other columns may repeat or be left blank.

### Composite keys: when one column is not enough

Sometimes no single column can do the job, and the key becomes a combination of columns. Consider a table of course enrollments with a student ID column and a course ID column. A student appears in many rows, one per course, so student ID repeats. A course appears in many rows, one per student, so course ID repeats too. Neither column is unique, but the pair is: a given student enrolled in a given course is exactly one row. That pair is a composite key. PostgreSQL confirms that primary keys can span more than one column, and Microsoft spells out the rule: values can be duplicated within one column, but each combination of values from all the columns must be unique. Composite keys are a genuine tool, not a compromise: whenever a combination is the natural unit of identity, it is the right key.

### Keys enable relationships, and why a good key never changes

The primary key matters beyond its own table because other tables can reference it. IBM puts it directly: primary keys can be referenced by another type of key to define relationships between tables. W3Schools says the primary key is the target for foreign keys in other tables, and PostgreSQL notes that the primary key defines the default target for foreign keys referencing the table. The mechanics belong to the foreign-keys lesson; here the point is what referencing implies. If an order table points at a customer by customer ID, changing that ID would break every order that pointed at it. That is the honest design intuition: a good key is one that never changes. Names, addresses, and prices come and go, but the key should stay put because other data depends on it. Relational database theory holds that every table should have a primary key. Choose a key that is simple, stable, and unique, and the rest of the database can rely on it.

## Key Vocabulary

- **primary key** — The column or set of columns whose values uniquely identify each row in a table.
- **uniqueness** — The rule that no two rows in a table may have the same primary key value.
- **composite key** — A primary key made from two or more columns, where only the full combination must be unique.
- **ID column** — A dedicated column of identification numbers added so that each row has a simple, stable key.
- **natural key** — An existing column, such as a license plate number, pressed into service as the primary key.
- **surrogate key** — A new column created specifically to serve as the primary key, carrying no other meaning.
- **constraint** — A rule that a database enforces on the data in a table; the primary key rule is one such constraint.
- **reference** — The act of one table pointing to a row in another table by using that table's key.

## Eli-10

A primary key is how a database tells rows apart. Each row gets one value, like a ticket number, and no two rows may share it. That single rule is the whole trick: know the key, and you can point at exactly one row and nowhere else. Many tables use a plain ID number for the key, because IDs stay the same even when everything else about the row changes. And because other tables can point at a row by its key, the key becomes the address the rest of the database uses to find that row.

## Eli's Analogy

Think of a coat check. Every guest hands over a coat and receives a numbered ticket, and every ticket number is unique. When you come back, you do not describe your coat; you hand over the number, and the attendant returns exactly your coat. A database works the same way: rows check in with their key value, and any later question just hands over the number.

A coat-check ticket is a scrap of paper that can be lost, and the attendant can always issue a replacement. A primary key is enforced by the database itself, which refuses to create a second row with the same key. A ticket also pairs with a coat for one evening, while a primary key identifies a row permanently and other tables may rely on it for years, which is exactly why it should never change.

## Worked Example

Marisol runs a small bike-repair shop and keeps a table of customers. She adds a customer_id column, numbered 101, 102, 103, and makes it the primary key. Two customers named Jordan Lee could walk in, and two customers could share an area code, but no two rows may ever carry customer ID 103; the database itself blocks a duplicate. When Marisol logs a repair, the repair row stores the customer ID instead of repeating the name, so it can point back to exactly one customer row. If a customer changes a surname, the ID stays the same: it is the stable handle the repair records depend on. One rule did the work: every customer row is findable, forever, by one number.

## Common Mistakes

- **Picking a column of meaningful facts, like a name, as the primary key.** Names can repeat and change, which breaks both halves of the key rule. A key needs values that are unique and stay put, which is why dedicated ID columns are the common pattern.
- **Assuming a table can have several primary keys.** A table has at most one primary key. Other columns can hold unique values, but only one column or combination is designated as the key.
- **Believing every column in a composite key must be unique by itself.** In a composite key, individual columns may repeat; only the full combination must be unique, as with a student ID plus a course ID.
- **Thinking a column that is unique today makes a good key.** Uniqueness is necessary but not enough. The key also needs to be stable, because other tables may reference it; a phone number that changes breaks that promise.
- **Treating the key as just another data column.** The key identifies the row; other columns describe it. The database enforces special rules on the key, uniqueness and non-empty values, that it does not apply to ordinary columns.

## Compare / Contrast

- **A primary key column** versus **An ordinary column**: Both hold data, but only the key identifies the row; the database enforces uniqueness and non-empty values on the key alone.
- **A single-column key** versus **A composite key**: A composite key uses two or more columns together; individual columns may repeat, but the full combination must be unique.
- **A natural key** versus **A surrogate (ID) key**: A natural key is an existing meaningful column pressed into service; a surrogate key is a new ID column created purely to identify rows, which tends to be simpler and more stable.

## Key Takeaway

A primary key is the column or set of columns that makes each row findable: unique, never empty, and stable. It is the handle other tables use to reference a row, so a good key is simple and never changes.

## Practice Question Bank

### Question 1

**What does a primary key do in a database table?**
- A. It uniquely identifies each row in the table. ✓
- B. It sorts the rows by their values.
- C. It stores the name of the table.
- D. It counts how many rows the table holds.
*Answer: A. A primary key is a column or set of columns whose values uniquely identify each row. Sorting, naming, and counting are separate jobs a database performs; they are not what the key does.*
*Difficulty: recall — Defining the role of a primary key*

### Question 2

**A bike shop's customer table uses customer_id as its primary key. Which event would the database refuse to allow?**
- A. Two customers with the same first name.
- B. A customer whose phone number is missing.
- C. A second row carrying customer_id 207. ✓
- D. A customer who changes their last name.
*Answer: C. The core rule of a primary key is uniqueness: no two rows may share the same key value, so a duplicate customer ID is refused. Duplicate names and a changed name are ordinary data, and a missing phone number does not touch the key.*
*Difficulty: understanding — Applying the uniqueness rule to a scenario*

### Question 3

**A hotel stores each stay as one row with columns stay_id, guest_name, room_number, and check_in_date. Which column should serve as the primary key?**
- A. guest_name
- B. room_number
- C. check_in_date
- D. stay_id ✓
*Answer: D. stay_id is the dedicated ID that uniquely identifies each stay. Guests book repeatedly, rooms are reused across dates, and many guests check in on the same date, so none of the other columns is unique.*
*Difficulty: application — Choosing an appropriate primary key column*

### Question 4

**An enrollment table has columns student_id, course_id, and enrollment_date. A student can take many courses, a course holds many students, and a student can enroll in a given course only once. What is the best primary key?**
- A. student_id alone
- B. The pair (student_id, course_id) ✓
- C. course_id alone
- D. enrollment_date alone
*Answer: B. Neither column alone is unique: student_id repeats across courses and course_id repeats across students. Only the combination of both columns identifies each enrollment row, which is exactly what a composite key is for.*
*Difficulty: analysis — Reasoning about when a composite key is needed*

### Question 5

**Why do designers often prefer a simple ID number over a meaningful column like a name as the primary key?**
- A. The ID stays the same even when other details change. ✓
- B. The ID reveals information about the customer.
- C. The ID must be updated whenever the customer moves.
- D. The ID makes the name column unnecessary.
*Answer: A. A good key is stable: names, addresses, and other details change, but other tables may reference a row by its key, so the key itself should not. That is why simple ID numbers are the common pattern.*
*Difficulty: application — Applying the stability design intuition*
## Sources

The lesson was researched from the following sources (all used as reference only; no source wording reproduced):

- **PostgreSQL Documentation: Constraints (Section 5.5.4, Primary Keys)** — PostgreSQL Global Development Group. https://www.postgresql.org/docs/current/ddl-constraints.html
- **Primary and foreign key constraints (SQL Server, Microsoft Learn)** — Microsoft Learn. https://learn.microsoft.com/en-us/sql/relational-databases/tables/primary-and-foreign-key-constraints
- **SQL PRIMARY KEY Constraint (W3Schools SQL Tutorial)** — W3Schools. https://www.w3schools.com/sql/sql_primarykey.asp
- **What is a primary key? (IBM Data Management Guide)** — IBM. https://www.ibm.com/topics/primary-key


## Related Topics

- databases-and-sql:foundations:tables
- databases-and-sql:foundations:rows
- databases-and-sql:foundations:columns
- databases-and-sql:foundations:foreign-keys
- databases-and-sql:foundations:relationships

## Editorial Metadata

- Topic id: `databases-and-sql:foundations:primary-keys`
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21
- Rights: reference-only sources (PostgreSQL docs, Microsoft Learn, W3Schools, IBM); no source prose adapted
