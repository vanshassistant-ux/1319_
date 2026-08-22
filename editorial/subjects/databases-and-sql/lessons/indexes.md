# Indexes

## In 30 Seconds

An index is a structure a database builds to find rows faster. Think of the index at the back of a book: instead of reading every page to find a topic, you jump straight to the right pages. A database index works the same way, pointing the database to the rows that hold a searched value. Indexes speed up reads, but they have honest costs: they take space and must be kept updated when data changes. The database builds one automatically for a primary key; designers add others deliberately.

## Why This Matters

The difference between a quick database and a sluggish one is often a small set of indexes. A search that should finish in a blink can take seconds when the database has to read every row to find matches, and that slowness lands on real people: a store page waiting on a query, a search box that stalls. Indexes are a big part of why well-built databases stay fast as they grow. Knowing what they are, what they cost, and where they come from lets you understand why a database behaves the way it does, and it sets up the practical decisions behind every application that stores data.

## Learning Objectives

- Define an index as a structure a database builds to find rows faster than scanning.
- Explain the book-index analogy: an index points the database to matching rows the way a book's index points a reader to pages.
- Describe how an index speeds up reads: the database searches the index and jumps to the matching rows instead of reading the whole table.
- Explain the trade-off: indexes speed up reads but slow down writes and consume storage space.
- Identify where indexes come from: automatically on primary keys, and deliberately from designers elsewhere.
- Distinguish the concepts in this lesson from performance tuning, a practitioner topic outside its scope.

## The College Version

### What an index is

An index is a separate structure that a database builds to find rows faster. Microsoft's documentation defines an index as an on-disk or in-memory structure associated with a table that speeds retrieval of rows from that table. PostgreSQL's documentation makes the same point in plainer terms: indexes are a common way to enhance database performance, because an index lets the database server find and retrieve specific rows much faster than it could without one. The key word is structure. An index is not the table itself and it does not change the data the table holds; it is something the database keeps alongside the table, built from one or more columns, whose whole job is to make lookups quick.

### The book analogy

The comparison every database course leans on is a book's index. Microsoft's index design guide spells it out: at the end of a regular book there is an index that helps a reader locate information quickly; it is a sorted list of keywords, and next to each keyword is a set of page numbers pointing to the pages where that keyword appears. A database index works the same way. It is an ordered list of values taken from a column, and next to each value are pointers to the rows that contain it. To answer a question like "which orders belong to customer 207?", the database looks up 207 in the index and follows the pointers to the right rows. Without the index it would have to read every page, meaning every row, to find the matches. The analogy has limits: a book's index is built once by people, while a database index is maintained by the database itself, continuously, as data changes.

### How an index speeds up reads

The mechanism is straightforward. Without an index, a search for matching rows means a table scan: the database reads through the rows, checks each one against the search condition, and keeps the ones that match. SQLite's query planner documentation describes exactly this: to find the price of peaches, SQLite reads every row out of the table and checks whether the fruit column holds the value "Peach", an algorithm it calls a full table scan. With an index, the story changes. Microsoft's documentation describes an indexed lookup: the database searches the index key columns, finds the storage location of the rows needed, and extracts the matching rows from that location. SQLite describes the same idea: with an index on the fruit column, the engine searches the index directly for "Peach" and then fetches the matching rows. Both accounts make the same general point: searching a small, ordered index and jumping to the rows is much faster than reading everything.

### The trade-off: faster reads, costlier writes, more space

An index is not free, and the sources name the costs plainly. PostgreSQL's documentation warns that indexes add overhead to the database system as a whole, so they should be used sensibly. W3Schools' tutorial is more specific: updating tables with indexes takes more time than updating tables without them, because the indexes must also be updated. Every new row means a new entry in the index; every change to an indexed value means moving that entry; every deletion means removing it. On top of that, an index occupies storage space of its own. Microsoft's design guide frames the whole question as a balancing act between query speed, index-update cost, and storage cost. The honest balance: an index is worth having when the reads it speeds up happen often, and it is a poor deal when it sits on a column nobody searches.

### Where indexes come from

Some indexes appear without anyone asking. When a primary key is declared on a table, the database automatically builds an index on the key column or columns; PostgreSQL's constraints documentation states that adding a primary key automatically creates a unique B-tree index on the column or group of columns listed in the primary key. Primary keys are their own topic; the point here is that the first index a table usually gets is the free one that comes with the key. Every other index is created deliberately, by the people designing the database, on the columns their applications search most often. Users never see these structures; W3Schools notes that users cannot see the indexes, which exist only to speed up searches. From the outside, an index is silent machinery.

### What this lesson does not cover, and why the concept still matters

This lesson stops at the concept: what an index is, why it speeds reads, what it costs, and where it comes from. Choosing which columns deserve indexes, reading execution plans, and fine-tuning a database's set of indexes for a particular workload is performance tuning, a practitioner skill that deserves its own treatment; so do the deeper mechanics of how a particular database stores its indexes. What is worth keeping is the honest framing: indexes are invisible until they are missing. A query that used to return in a blink starts crawling, and the usual suspect is a table being scanned because nothing points the database to the right rows. You rarely see an index at work; you notice it the moment it is gone.

## Key Vocabulary

- **index** — A separate structure a database maintains so it can find matching rows quickly, holding column values together with pointers to the rows that contain them.
- **table scan** — A search in which the database reads through every row of a table, checking each one for a match.
- **pointer** — A reference stored in an index that tells the database where the row holding a given value is located.
- **primary key** — The column or set of columns that uniquely identifies each row of a table; the database builds an index on it automatically.
- **read** — An operation that retrieves data from a table, such as a search for matching rows.
- **write** — An operation that changes a table's data, such as adding, updating, or removing rows.
- **query** — A request to a database for data, such as asking for the rows where the city is Portland.
- **storage** — The space on disk or in memory that a database uses to hold its data and its structures, including indexes.

## Eli-10

An index is the database's shortcut list. When you ask for rows that match a value, the database checks the shortcut list, sees exactly which rows hold that value, and walks straight to them. No shortcut list means no shortcuts: the database opens every row one by one until it finds the matches. That works fine for a table with fifty rows and turns painful at fifty thousand.

## Eli's Analogy

Think of a library before computers. A patron asks for every book about beekeeping. Without a catalog, the librarian walks the shelves, pulls each book, and checks its title: a scan of the whole library. With a card catalog, she finds the beekeeping cards, notes the shelf locations, and walks straight to those books. The catalog does not contain the books; it just says where they are. A database index is that catalog: a separate list of values with pointers to the rows that hold them.

A library catalog is written and updated by people, slowly and by hand; a database index is maintained by the database itself on every change, instantly and automatically. A catalog points to whole books, while a database index can point down to individual rows. And the librarian can choose to ignore the catalog, whereas the database's planner decides on its own whether the index helps a given request. When a request needs nearly every row anyway, reading the whole table can beat using the index, just as for one short story you flip to the page rather than consult the index at all.

## Worked Example

A concert venue's ticketing database holds 900,000 ticket rows, one per seat sold over the years. A support agent needs every ticket bought with the email address mara@example.com. With no index on the email column, the database reads all 900,000 rows, checks each email, and keeps the few that match; every lookup walks the whole table. A designer adds an index on the email column. Now the database searches the index for that address, finds the handful of matching entries, and jumps straight to those rows. Same table, same data, same question, but the lookup that once touched the entire table now touches a small index and a few rows.

## Common Mistakes

- **An index is a copy of the table.** An index holds only the indexed values plus pointers to the rows, not the table's full data. It is a separate structure, not a duplicate.
- **Indexes make every database operation faster.** They speed up reads. Writes pay: adding, changing, or removing rows means updating every affected index, which is why indexes add overhead.
- **More indexes always means a faster database.** Each extra index adds write cost and storage. Microsoft's design guide calls choosing indexes a balancing act and warns that overindexing slows data modifications.
- **Users build indexes by running searches.** Users never see or create indexes. The database builds one automatically on a primary key, and designers deliberately add the rest.
- **A rarely searched column deserves an index just in case.** An index only pays for itself when the column is actually searched often. On a column nobody queries, it is mostly cost.

## Compare / Contrast

- **A lookup with an index** versus **A lookup without one**: With an index, the database searches the index and jumps to the matching rows; without one, it scans every row.
- **An index** versus **A primary key**: An index is a speed structure that points to rows; a primary key is an identity rule for rows, although the database builds an index on a primary key automatically.
- **Reads, such as search queries** versus **Writes, such as adding or changing rows**: Indexes speed up reads and burden writes, because every index must be kept in step with the table's data.
- **An index on a frequently searched column** versus **An index on a column nobody searches**: The first pays for itself in faster queries; the second mostly costs space and write time.

## Key Takeaway

An index is a separate structure that lets a database jump to matching rows instead of reading every one. It speeds up reads, costs writes and storage, and arrives automatically on primary keys.

## Practice Question Bank

### Question 1

**What does an index do for a database?**
- A. It helps the database find matching rows faster. ✓
- B. It stores a backup copy of the table's data.
- C. It decides which users may read the table.
- D. It translates stored values into other languages.
*Answer: A. An index is a structure the database builds so it can locate matching rows quickly, like the index in a book. Backups, access control, and translation are separate jobs a database performs; an index does none of them.*
*Difficulty: recall — Recalling the purpose of an index*

### Question 2

**The index at the back of a cookbook points the reader to the pages where each topic appears. Which sentence describes a database index the same way?**
- A. It rewrites the table so every row appears twice.
- B. It removes rows that are rarely looked up.
- C. It points the database to the rows holding a searched value. ✓
- D. It arranges the table so the newest rows come first.
*Answer: C. The book index works because it lists topics with pointers to pages, and a database index works the same way: it holds values with pointers to the rows that contain them. It does not duplicate, remove, or reorder the table's rows.*
*Difficulty: understanding — Applying the book-index analogy to a database*

### Question 3

**A courier company's parcels table has an index on the tracking_number column. Which action becomes slower or more costly because of that index?**
- A. Finding one parcel by its tracking number.
- B. Recording a newly arrived parcel. ✓
- C. Reading the company's name from a settings table.
- D. Counting how many parcels are in the table.
*Answer: B. The index exists to speed up lookups by tracking number. Its cost shows up on writes: when a new parcel is recorded, the database must update the index as well as the table. Other tables and count-style queries are unaffected.*
*Difficulty: application — Applying the read-versus-write trade-off to a scenario*

### Question 4

**A film review site's reviews table is searched constantly by movie title, but new reviews arrive only rarely. A designer considers adding an index on the title column. What is the most honest assessment of that plan?**
- A. The index would slow down the frequent title searches.
- B. The index would remove the need for the table's primary key.
- C. The index would make each review row hold more data.
- D. The index would speed up the searches, and its costs would barely matter because writes are rare. ✓
*Answer: D. The workload is mostly reads, so an index on the searched column pays for itself; its two costs, extra storage and slower writes, hardly register when writes are rare. It does not slow searches, remove the primary key, or change how rows are stored.*
*Difficulty: analysis — Weighing an index's benefit against its costs for a given workload*

### Question 5

**A designer creates a brand-new table, declares a primary key, and adds nothing else. Which statement about indexes is true at that moment?**
- A. The primary key already has an index, built automatically. ✓
- B. No index exists anywhere until the designer writes one by hand.
- C. Every column in the table has its own index.
- D. The table cannot have an index until it holds at least one row.
*Answer: A. Databases build an index on a primary key automatically; PostgreSQL's documentation states that adding a primary key automatically creates a unique B-tree index on the key column or columns. Other columns get indexes only when someone deliberately creates them.*
*Difficulty: application — Identifying where a table's first index comes from*

## Sources

The lesson was researched from the following sources (all used as reference only; no source wording reproduced):

- **PostgreSQL Documentation: 11. Indexes** — The PostgreSQL Global Development Group. https://www.postgresql.org/docs/current/indexes.html
- **SQL Server index design guide (Microsoft Learn)** — Microsoft Learn. https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-index-design-guide
- **Clustered and nonclustered indexes described (Microsoft Learn)** — Microsoft Learn. https://learn.microsoft.com/en-us/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described
- **SQLite: Query Planning** — SQLite Consortium. https://www.sqlite.org/queryplanner.html
- **SQL CREATE INDEX Statement (W3Schools SQL Tutorial)** — W3Schools. https://www.w3schools.com/sql/sql_create_index.asp
- **PostgreSQL Documentation: Constraints (Section 5.5.4, Primary Keys)** — PostgreSQL Global Development Group. https://www.postgresql.org/docs/current/ddl-constraints.html

## Related Topics

- databases-and-sql:foundations:primary-keys
- databases-and-sql:foundations:what-a-database-is
- databases-and-sql:foundations:tables
- databases-and-sql:foundations:select
- databases-and-sql:foundations:where

## Editorial Metadata

- Topic id: `databases-and-sql:foundations:indexes`
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21
- Rights: reference-only sources (PostgreSQL docs, Microsoft Learn, SQLite docs, W3Schools); no source prose adapted
