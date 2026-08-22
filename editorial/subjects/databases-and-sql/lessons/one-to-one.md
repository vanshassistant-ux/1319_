# One-to-One

## In 30 Seconds

A one-to-one relationship means each row in the first table can match at most one row in the second table, and each row in the second can match at most one row in the first. A person and their passport is the classic shape: at most one passport per person, at most one owner per passport. Designers use it when they deliberately split a table, like keeping login details apart from user profiles. It is the rarest relationship, because most real relationships are one-to-many, and two tables that are always one-to-one might simply be one table.

## Why This Matters

One-to-one is the relationship people get wrong most often. See two tables and a shared column, and it is tempting to call the link one-to-one, when most real links are one-to-many: one customer, many orders. Knowing the difference changes how you read a data model. It also tells you when a split is deliberate, such as an accounts table locked down for security next to an open profiles table, and when two tables are just extra machinery for what one table could hold. That judgment, split versus merge, is a real design decision you will meet in almost any database you look at.

## Learning Objectives

- Define a one-to-one relationship: each row in either table can match at most one row in the other.
- Explain why designers split one table into two, using user accounts and user profiles as the classic example.
- Describe how a one-to-one relationship is implemented: a foreign key with a uniqueness rule on the linking column.
- Distinguish one-to-one from one-to-many, contrasting a person and their passport with a customer and their orders.
- Apply the rule of thumb that two tables which are always one-to-one might be one table, and name the reasons a split can still be justified.

## The College Version

### The working definition: one row on each side

A one-to-one relationship is the strictest link two tables can have. Each row in the first table can match at most one row in the second table, and each row in the second can match at most one row in the first. Microsoft Learn's Power BI documentation describes the same idea from the data side: a one-to-one relationship means both columns used for the link contain unique values. Wikipedia's data-modeling article frames cardinality as the numerical relationship between rows of one table and rows in another, with one-to-one, one-to-many, and many-to-many as the common types. Put together, the working definition across documentation is the at-most-one-on-each-side rule. A person and their passport fits it: a person can hold at most one passport, and a passport belongs to at most one person. Notice that 'at most one' allows zero: many people have no passport at all, and that is still a one-to-one relationship.

### When it is used: splitting a table on purpose

One-to-one appears when a designer deliberately splits what could be a single table into two. The classic example is user accounts and user profiles. The accounts table holds login data — username, password, account status — that only the sign-in system should touch. The profiles table holds the rest — name, interests, photo — that the user can edit freely. Keeping the sensitive columns in their own table is a security move: a profile page that leaks data never exposes passwords, because the password column lives somewhere else entirely. Splitting can also help with size or clarity, when one table carries many columns and only some of them are needed most of the time. Wikipedia notes that a one-to-one relationship is mostly used to split a table in two in order to provide information concisely and make it more understandable, and Microsoft Learn documents the same pattern when a single entity's data arrives from two different sources. The point of the split is separation, not duplication: each member still has exactly one row in each table, linked by the member ID.

### How it is implemented: a foreign key with a uniqueness rule

The mechanism is a foreign key with a uniqueness rule on the linking column. A foreign key is a column in one table that refers to the primary key of another table; it is the standard way to link tables, and the foreign-keys topic covers it in depth. On its own, a foreign key allows repeats — many orders can point at the same customer. What turns a plain link into a one-to-one link is an extra rule: the linking column must not repeat. W3Schools describes the UNIQUE constraint as ensuring that all values in a column are unique, and Microsoft Learn states that a one-to-one relationship can be created when both tables each contain a column of common and unique values. So the design has two parts: the foreign key says the profile row must point at a real account, and the uniqueness rule says no two profile rows may point at the same account. Together they guarantee at most one match on each side, and the database itself refuses to store anything that breaks the rule.

### One-to-one versus one-to-many: passport versus orders

The clearest way to tell the two apart is side by side. A person and their passport is one-to-one: at most one passport per person, at most one owner per passport. A customer and their orders is one-to-many: one customer, many orders. Microsoft Learn's documentation puts the difference in the columns: in a one-to-many relationship the 'one' side column holds unique values while the 'many' side column may contain duplicates. The customer ID appears once in the customers table but can appear on many order rows. The passport design forbids that second appearance — the passport number can show up only once across all the rows that reference it. Same one-person anchor, different rule on the other side: one passport, many orders. When a link looks close to one-to-one, check whether repeats are allowed on either side; if they are, it is one-to-many.

### Why it is rare, and the rule of thumb

One-to-one is the rarest of the three relationship types because most real-world links are one-to-many. Microsoft Learn calls one-to-one uncommon and notes that it likely represents a suboptimal model design because of the storage of redundant data. That is the honest framing: a customer with many orders, a teacher with many classes, a product with many sales — the world mostly works one-to-many. That leads to the rule of thumb: if two tables are always one-to-one, with every row in one matching a row in the other, they might be one table. Microsoft Learn's guidance makes the same recommendation, advising designers to consolidate one-to-one related data into a single table to avoid clutter and unexpected gaps. The split earns its keep only when there is a real reason — sensitive columns, rarely used columns, or data from different sources. Otherwise the extra table is just complexity with no payoff.

## Key Vocabulary

- **one-to-one relationship:** A link between two tables in which each row in either table can match at most one row in the other.
- **cardinality:** How many rows on one side of a relationship can match rows on the other side; the count that gives relationships their names.
- **unique:** Allowing no repeated values within a column of a table, so each value can appear at most once.
- **foreign key:** A column in one table whose values reference the primary key of another table, linking the two tables.
- **primary key:** The column, or combination of columns, that uniquely identifies each row within its own table.
- **redundant data:** The same information stored in more than one place, which keeping two always-matching tables risks creating.
- **splitting a table:** Dividing one table's columns into two tables that keep the same rows, linked one-to-one.

## Eli-10

A one-to-one relationship is the strictest pairing a database can make: each row in the first table can match at most one row in the second, and the other way around. It is what you get when a designer splits one table into two on purpose. User accounts and user profiles are the classic case: the login table holds the password, the profile table holds the name and photo, and each member gets exactly one row in each, joined by their member ID. One-to-one is rare because most real links are one-to-many, like one customer with many orders. And when two tables always match one row to one row, the usual question is whether they should just be one table.

## Eli's Analogy

Think of a coat check at a concert. Every guest who checks a coat receives one numbered ticket, and every ticket belongs to exactly one coat. The ticket and the coat are two separate things, but they always come in pairs: at most one ticket per coat, at most one coat per ticket. That pair is a one-to-one relationship. The coat-check counter is the accounts table in miniature — the ticket number is the shared value that ties each coat to its owner without copying the coat itself.

## Worked Example

Rosa's community center signs up members for evening classes. She starts with one members table, but the password column for the member login sits next to allergies and emergency contacts that volunteers see all the time. She splits it: an accounts table with member ID, username, and password, and a profiles table with member ID, allergies, and emergency contact. Each member has exactly one row in each table, and the member ID links them. The split is a one-to-one relationship, and it earns its keep because of security: volunteers read profiles, but only the login system ever touches the accounts table. Rosa checks the rule of thumb — the two tables always match one row to one row — and confirms the split is justified by the sensitive data, so she keeps both.

## Common Mistakes

- **Calling any link between two tables one-to-one.** Most links are one-to-many. Check whether repeats are allowed: if one row on a side can match several rows on the other side, it is one-to-many, like a customer and their orders.
- **Thinking a foreign key alone creates a one-to-one relationship.** A foreign key allows repeats — many rows can point at the same row. The at-most-one rule comes from the extra uniqueness rule on the linking column.
- **Assuming two one-to-one tables are always a good design.** The rule of thumb says the opposite: if the tables always match, they might be one table. The split is justified only by a real reason, such as sensitive columns or data from different sources.
- **Treating 'at most one' as 'exactly one'.** A person can have no passport, and a member can have no profile yet; zero matches on a side is still a one-to-one relationship. The rule forbids two matches, not zero.

## Compare / Contrast

- **One-to-one relationship** vs **One-to-many relationship:** At most one match on both sides versus many matches allowed on one side; the linking column on the 'many' side may repeat.
- **A person and their passport** vs **A customer and their orders:** The same one-person anchor takes two shapes: a passport belongs to one person and a person holds at most one, while one customer can place many orders.
- **Split table (accounts and profiles)** vs **One combined table:** Two always-matching tables separated for security or clarity versus a single table holding every column; the split is justified by a real reason, not habit.
- **Foreign key with a uniqueness rule** vs **Foreign key alone:** The uniqueness rule forbids repeated link values and creates one-to-one; a plain foreign key allows repeats and creates one-to-many.

## Key Takeaway

A one-to-one relationship means at most one match on each side — the rarest link, used when a designer deliberately splits a table, like user accounts apart from user profiles. If two tables are always one-to-one, they might be one table.

## Practice Question Bank

**1. Which statement best describes a one-to-one relationship between two tables?**

- A. Each row in the first table can match at most one row in the second table, and each row in the second can match at most one row in the first
- B. Each row in the first table can match many rows in the second table, but not the other way around
- C. Each row in both tables can match many rows in the other table
- D. The two tables must contain exactly the same number of columns
**Answer:** A. Each row in the first table can match at most one row in the second table, and each row in the second can match at most one row in the first

*Microsoft Learn's Power BI documentation states that a one-to-one relationship means both linking columns contain unique values, and Wikipedia's data-modeling article describes cardinality as the numerical relationship between rows of one table and rows in another. Option B is one-to-many, C is many-to-many, and D confuses column counts with row matches.*

**2. A fitness club stores each member's login details (username and password) in one table and their profile details (height, goals, photo) in another. Every member appears exactly once in each table. What relationship exists between the two tables?**

- A. One-to-many
- B. One-to-one
- C. Many-to-many
- D. No relationship, because the tables share no columns
**Answer:** B. One-to-one

*Each member has exactly one login row and one profile row, so each row on either side matches at most one row on the other — the one-to-one shape. This is the classic accounts-and-profiles split described in the lesson, where one table holds sensitive login data and the other holds profile data.*

**3. A designer links a passport table to a person table so that each passport belongs to exactly one person and no person holds more than one passport. Besides a foreign key pointing at the person, what extra rule does the design need?**

- A. The linking column in the passport table must not allow repeated values
- B. The linking column in the passport table must allow repeated values
- C. Every column in both tables must hold unique values
- D. The passport table must store no foreign key at all
**Answer:** C. Every column in both tables must hold unique values

*The uniqueness rule is what turns a plain foreign key into a one-to-one link: W3Schools states that the UNIQUE constraint ensures all values in a column are unique, and Microsoft Learn says a one-to-one relationship can be created when both tables each contain a column of common and unique values. A foreign key alone would let two passports point at the same person.*

**4. A person and their passport is a one-to-one relationship, while a customer and their orders is one-to-many. What makes the two designs different?**

- A. A passport can be replaced by a new passport, while orders cannot be replaced
- B. In the passport design each person matches at most one passport, while in the orders design one customer can match many orders
- C. The passport design uses no keys at all
- D. Orders are stored inside the customer table itself
**Answer:** D. Orders are stored inside the customer table itself

*Microsoft Learn's documentation explains the difference through the linking columns: the 'one' side holds unique values while the 'many' side may contain duplicates. The customer ID appears once in the customers table but can appear on many order rows, while the passport design forbids any repeated match on either side.*

**5. A bookstore keeps author details in two tables that always have matching rows, one row per author in each table. According to the design rule of thumb, what should the designer consider first?**

- A. Adding a third table for even more author details
- B. Combining the two tables into one
- C. Removing all keys from both tables
- D. Converting the design to one-to-many
**Answer:** A. Adding a third table for even more author details

*The rule of thumb: if two tables are always one-to-one, they might be one table. Microsoft Learn's one-to-one guidance recommends consolidating one-to-one related data into a single table to avoid clutter, and calls the relationship type uncommon and likely suboptimal. The split stays justified only with a real reason, like sensitive columns.*

## Sources

- mslearn-powerbi-relationships
- mslearn-powerbi-one-to-one-guidance
- wikipedia-cardinality-data-modeling
- w3schools-sql-foreign-key
- w3schools-sql-unique
- mslearn-fk-constraints
- postgresql-ddl-constraints

## Related Topics

- databases-and-sql:foundations:relationships
- databases-and-sql:foundations:one-to-many
- databases-and-sql:foundations:foreign-keys
- databases-and-sql:foundations:primary-keys
- databases-and-sql:foundations:tables

## Editorial Metadata

- **Topic ID:** databases-and-sql:foundations:one-to-one
- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-21
- **Sources:** 7 supporting source records; all read live or reused verbatim from the phase registry, reference-only usage.
