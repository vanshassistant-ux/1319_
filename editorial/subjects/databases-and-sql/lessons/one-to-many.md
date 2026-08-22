# One-to-Many

## In 30 Seconds

A one-to-many relationship links two tables so that one row in the first table can match many rows in the second, while each row in the second matches exactly one row in the first. The classic example: one customer places many orders, and every order belongs to a single customer. The link is stored on the many side — each order row carries the customer's ID. Most relationships in real databases follow this pattern, from product categories to departments, which is why mastering it unlocks most of how databases are designed.

## Why This Matters

One-to-many is the workhorse of the relational model. When you understand it, you can look at almost any real database — a shop's customers and orders, a university's departments and courses, a library's members and loans — and immediately see how the pieces connect. It explains why a database can store a customer once and still answer what that person has ordered, and why changing one fact, like a department name, can update hundreds of related rows at once. It is also the foundation for the other relationship types: many-to-many is really two one-to-many links joined in the middle. Learn this one pattern and most database design stops looking mysterious.

## Learning Objectives

- Define a one-to-many relationship: one row in the first table can match many rows in the second, while each row in the second matches exactly one row in the first.
- Explain the canonical example, one customer with many orders, and identify which table holds the link.
- Describe how one-to-many is implemented: the foreign key column lives on the many side of the relationship.
- Recognize one-to-many patterns in everyday hierarchies, including parent/child rows, product categories, and departments with employees.
- Read a relationship from both directions, using 'has many' from the one side and 'belongs to' from the many side.
- Distinguish one-to-many from many-to-many and explain why one-to-many accounts for most relationships in real databases.

## The College Version

### The working definition: one row on the one side, many rows on the other

A one-to-many relationship connects two tables under a single rule: one row in the first table can match many rows in the second table, but each row in the second table matches exactly one row in the first. Microsoft's documentation for Power Apps states the same idea in its own words — in a one-to-many relationship, each row in one table can match more than one row in the other, while each row in that second table can match only one row in the first. Notice what the definition does not say. It sets no maximum: 'many' means any number, including zero. A customer who has never ordered still exists as a row, just one with no matching orders yet. And the two tables do not have to be different — a single table can hold a one-to-many relationship with itself, when one row points at another row of the same kind. What the definition always guarantees is the asymmetry: one side is single, the other side is plural.

### The classic example: a customer with many orders

The canonical example, found in database teaching everywhere, is a customer with many orders. Picture Golden Crust Bakery. The customers table keeps one row per shopper: Imani Diallo is customer C-207, with her phone number and favorite-pastry note stored once. The orders table holds one row per purchase. On Monday Imani orders a sourdough loaf; on Friday she orders a birthday cake — two order rows, both belonging to the same customer row. The relationship is one-to-many because C-207 can match any number of orders, while each order row matches exactly one customer. Flip it around and the same relationship is called many-to-one: many orders belong to one customer. W3Schools' SQL reference draws exactly this picture with persons and orders, and PostgreSQL's manual shows orders referencing products. The roles may change, but the shape never does.

### How it is implemented: the many side holds the foreign key

Databases build a one-to-many relationship with one column on the many side. Every row there stores a foreign key — the primary key value of the single row it belongs to. In the bakery, each order row holds a customer ID column; order #8112 stores C-207 rather than Imani's name, phone number, and pastry preferences. To find out who placed an order, the database reads the customer ID and looks up the matching row in the customers table. W3Schools shows the same mechanism with its Persons and Orders tables: the PersonID column in the Orders table points to the PersonID column in the Persons table. PostgreSQL's documentation describes the rule behind it: a foreign key constraint demands that a column's values match values found in some row of another table. The foreign key itself, and the enforcement rules around it, belong to their own topic; here the point is where the column sits: always on the many side, never on the one side.

### Why it is everywhere: hierarchies in the real world

One-to-many relationships are not a classroom curiosity; they are the shape of most real-world data. Consider three common hierarchies. Parent and child: in a task manager, one project row can be the parent of many task rows, and each task belongs to that one project. Category and products: in an online store, one category row (Baking) can hold many product rows (flour, yeast, rolling pins), and each product belongs to exactly one category. Department and employees: in a company database, one department row (Bakery Floor) matches many employee rows, while each employee belongs to a single department. In all three cases the structure is identical — one row on the one side, many rows on the other, with the many side carrying the reference. This is why Microsoft's documentation calls it the most common type of relationship. Most of the tables you will meet in a real system are connected this way.

### Reading the relationship: has many, belongs to — and the honest framing

Because every one-to-many relationship has two ends, people read it in two directions. From the one side, the relationship is described as has many: a customer has many orders, a category has many products, a department has many employees. From the many side, it is belongs to: an order belongs to a customer, a product belongs to a category, an employee belongs to a department. Microsoft's documentation lists the two readings as separate relationship types — one-to-many and many-to-one — but they are the same link seen from opposite ends. The distinction worth keeping in mind is against many-to-many, where a row on either side can match many rows on the other: books and authors, for instance, since a book can have several authors and an author can write several books. That pattern is its own topic. The honest framing is simpler: if you understand one-to-many, you understand most databases, because most relationships in real systems are one-to-many.

## Key Vocabulary

- **one-to-many relationship** — A link between two tables in which one row in the first table can match many rows in the second, while each row in the second matches exactly one row in the first.
- **the one side** — The table in a one-to-many relationship whose single row can be matched by many rows in the other table; also called the parent side.
- **the many side** — The table in a one-to-many relationship whose rows each match exactly one row in the other table; this side holds the foreign key.
- **foreign key** — A column whose values reference the primary key of a row in another table; in a one-to-many relationship it lives on the many side.
- **parent table** — The table on the one side of a relationship, whose rows are referenced by rows in the child table.
- **child table** — The table on the many side of a relationship, whose rows each carry a reference to one row in the parent table.
- **has many** — The way of reading a one-to-many relationship from the one side: a customer has many orders.
- **belongs to** — The way of reading a one-to-many relationship from the many side: an order belongs to one customer.
- **many-to-many** — A relationship in which a row on either side can match many rows on the other side, such as books and authors; a sibling topic covers it.

## Eli-10

A one-to-many relationship is a one-to-many match between two lists. One row on the first list can line up with lots of rows on the second list, but each row on the second list lines up with exactly one row on the first. The bakery's customer list and order list work this way: Imani is one row on the customer list, and all her orders point back to that one row. The trick that makes it work is where the pointer lives. Every order row keeps the customer's number, so the database can always find which customer an order belongs to — and the customer row itself stays small and simple.

## Eli's Analogy

Think of a single oak tree in a park and the birds that nest in it. The tree is the one; the nests are the many. Each nest belongs to that one tree — you would never say a nest belongs to two trees at once. If you want to know whose nest hangs on a branch, you look at the tree it is attached to, the way a database reads a customer ID to find the order's owner. And the tree can have any number of nests: two this spring, five next year, none after a storm.

The comparison stops short in two ways. A tree cannot refuse a nest that does not belong anywhere, but a database can — it rejects an order whose customer ID matches no real customer. And in the park, a nest belongs to one tree only because of how nests work; nothing enforces it. A database enforces the rule automatically, which is why the links in a well-built database never point at nothing.

## Worked Example

Golden Crust Bakery keeps customers in one table and orders in another. The customers table holds a single row per shopper: Imani Diallo is C-207, with her phone number stored once. The orders table logs every purchase, and each order row holds a customer ID column. When Imani buys a sourdough loaf on Monday, the new order row stores C-207; when she orders a birthday cake on Friday, that row stores C-207 too. On Sunday the bakery runs a report of what each customer ordered: it reads every order's customer ID, finds the matching customer row, and groups the orders under Imani's name. If a cashier typed a customer ID that matches nobody, the database refuses to save the order. One customer row, many order rows, every link stored on the order.

## Common Mistakes

- **Storing the link on the one side.** The customer row does not carry its orders; the orders carry the customer's ID. The foreign key always lives on the many side, and the one side stays untouched.
- **Treating 'many' as a fixed number.** 'Many' means any number — zero, one, dozens. A customer with no orders is still a valid customer row; the relationship just has no matching rows yet.
- **Assuming a one-to-many relationship always spans two different tables.** A table can relate to itself. A category row can be the parent of other category rows, so one row can have many child rows of the same kind.
- **Confusing one-to-many with many-to-many when the data looks connected in both directions.** Check the many side: if a row there can belong to several rows on the one side — a book with several authors — the relationship is many-to-many, which is a different pattern with its own topic.

## Compare / Contrast

- **One-to-many vs. Many-to-many** — In one-to-many, one side is always single: each row on the many side belongs to exactly one row on the one side. In many-to-many, rows on both sides can match many rows on the other, so the two patterns are not interchangeable.
- **The one side vs. The many side** — The one side is referenced and holds no extra columns for the link; the many side carries the foreign key, one column that points each row back at its single match.
- **Has many vs. Belongs to** — Both phrases describe the same relationship: 'has many' reads it from the one side (a customer has many orders), and 'belongs to' reads it from the many side (an order belongs to one customer).

## Key Takeaway

A one-to-many relationship means one row on one side and many rows on the other: the many side stores the foreign key, and the link reads as 'has many' from the one side and 'belongs to' from the many side. Master this pattern and most of the databases you meet will make sense.

## Practice Question Bank

**Q1.** What does a one-to-many relationship look like?

- A. One row in the first table can match many rows in the second, while each row in the second matches exactly one row in the first
- B. Each row in the first table matches exactly one row in the second, and vice versa
- C. Every row in the first table matches every row in the second table
- D. The two tables must hold the exact same number of rows

**Key: A.** Microsoft's documentation defines a one-to-many relationship as one in which each row in one table can match more than one row in the other, while each row in that other table matches only one row in the first. Option B describes one-to-one, C describes a full cross-match, and D describes equal row counts.

**Q2.** At Golden Crust Bakery, each order row includes a customer ID. Where does that ID column live, and why?

- A. On the customers table, so each customer can keep a list of their orders
- B. On the orders table, because orders are the many side and each one points back at its single customer
- C. On both tables, so either side can look the other up
- D. On a separate card file that sits between the two tables

**Key: B.** The foreign key lives on the many side: W3Schools shows the PersonID column in the Orders table pointing to the PersonID column in the Persons table. Each order row stores the ID of the one customer it belongs to; the customer row stores nothing about orders.

**Q3.** A university keeps one row per instructor and one row per course. Each course lists exactly one instructor, and an instructor can teach several courses. Where is the relationship stored?

- A. On the instructor rows, each listing every course it teaches
- B. Nowhere, because instructors and courses are unrelated tables
- C. On the course rows, each carrying the instructor ID of the instructor who teaches it
- D. On a copy of the instructor table stored inside every course

**Key: C.** Courses are the many side, so each course row holds the instructor ID of its single instructor. Microsoft's documentation describes this exact shape — one teacher can teach many classes — with the lookup stored on the class side.

**Q4.** A store records departments and employees. Every employee belongs to exactly one department, and each department can have many employees. Which statement correctly describes this arrangement?

- A. It is many-to-many, because departments and employees each match many of the other
- B. It is one-to-one, because each department pairs with a single employee
- C. It is not a relationship, because the two kinds of rows live in different tables
- D. It is one-to-many, because one department can match many employees while each employee matches one department

**Key: D.** Departments are the one side and employees the many side: one department row can match many employee rows, but each employee row matches exactly one department. Options A and B describe other relationship types, and C ignores that tables connect through references.

**Q5.** On a recipe blog, one author writes many posts and each post has exactly one author. From the post's point of view, how is the relationship best described?

- A. Each post belongs to one author
- B. Each post has many authors
- C. Each author belongs to many posts
- D. Posts and authors are unrelated

**Key: A.** From the many side, a one-to-many relationship reads as 'belongs to': each post belongs to its single author. Microsoft's documentation lists the same link as many-to-one when read from the many side, and 'has many' when read from the author's side.

## Sources

- Microsoft Learn — *Create a relationship between tables by using a lookup column (Power Apps)* — https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-entity-lookup (reference-only; read live 2026-08-21)
- W3Schools — *SQL FOREIGN KEY Constraint* — https://www.w3schools.com/sql/sql_foreignkey.asp (reference-only; read live 2026-08-21)
- PostgreSQL Documentation — *Constraints* (Chapter 5.5) — https://www.postgresql.org/docs/current/ddl-constraints.html (reference-only; read live 2026-08-21)

## Related Topics

- Foreign Keys (databases-and-sql:foundations:foreign-keys)
- Relationships (databases-and-sql:foundations:relationships)
- Many To Many (databases-and-sql:foundations:many-to-many)
- Primary Keys (databases-and-sql:foundations:primary-keys)
- Tables (databases-and-sql:foundations:tables)

## Editorial Metadata

- **Topic id:** databases-and-sql:foundations:one-to-many
- **Editorial status:** READY_TO_PUBLISH
- **Research status:** source-verified (researched 2026-08-21)
- **Rights:** reference-only Tier B documentation sources; no source prose adapted
- **Literacy level:** conceptual-first; no SQL shown
