# Datasets

## In 30 Seconds

A dataset is a collection of related observations, usually arranged in rows and columns. Each row is one observation; each column is one variable with a name. Tidy data, one row per observation and one column per variable, is the ideal most analyses assume. Datasets come from measurements, surveys, sensors, logs, and public releases, and they range from a school's attendance table to billions of rows. Real datasets often hide missing entries, duplicates, or inconsistent formats, so a quick quality check belongs before any conclusion.

## Why This Matters

Almost everything in data science starts with a dataset: charts summarize one, models learn from one, and decisions lean on the numbers inside it. Learning to read a dataset correctly, rows as observations and columns as named variables, prevents the most common beginner errors and makes later topics concrete. It matters academically because every subsequent topic, from types of data to cleaning to machine learning, assumes you can see a table clearly. It matters practically because workplaces share spreadsheets and data files constantly, and the person who can spot a missing entry or a duplicated row is the person whose conclusions hold up. Recognizing dataset shape and quality is the foundation for judging the analyses, charts, and AI claims you will meet for the rest of your life.

## Learning Objectives

- Define a dataset as a collection of related observations, typically arranged in rows and columns.
- Distinguish rows, which hold observations, from columns, which hold named variables.
- Explain the tidy-data ideal, one row per observation and one column per variable, and where it comes from.
- Describe dataset size in terms of rows and columns, including the wide-versus-tall distinction.
- Identify common sources of datasets, including measurements, surveys, sensors, logs, and public data.
- Recognize common data-quality problems, including missing entries, duplicates, and inconsistent formats, at a glance.

## The College Version

### What a dataset is

A dataset is a collection of related observations gathered together for a purpose. Consider how a school tracks attendance. The office keeps a table of who was at school on which day, with a row for each student on each day, a column for the student's name, a column for the date, and a column recording whether the student was present. That table is a dataset: a set of observations, one student, one day, one attendance result, tied together by a shared subject. Data science treats such collections as its raw material. Almost every analysis, chart, or model in the subject starts from a dataset, so learning to read one accurately is the first practical skill. The word "dataset" does not imply any particular size: a class register with thirty rows is a dataset, and so is a national survey file with millions.

### Rows are observations; columns are variables

Most datasets used in data science are arranged as tables. Each row is one observation, also called a record, a single case being described. Each column is one variable, a named characteristic that can differ from one observation to the next. In the attendance table the variables might be "Student ID", "Student Name", "Date", and "Present?". The columns carry names because a column of numbers is meaningless without knowing what was measured and for whom. Data scientists often call the variables "features", especially when they will be used to teach a model, and they call the special variable a model is trained to predict the "label"; how features and labels work is a separate topic. Here it is enough to know that rows and columns are the two axes every table-shaped dataset shares.

### Tidy data: an ideal arrangement

Not every table is equally easy to work with. In 2014, statistician Hadley Wickham set out an arrangement, called tidy data, that has become the standard ideal: each variable is a column, each observation is a row, and each type of observational unit is stored in its own table. The principle is simple: one fact per cell, one observation per row, one variable per column. Tidy data is an ideal, not a description of the real world; real datasets are messy in their own ways. But it is the arrangement most analysis tools and techniques quietly assume, so turning a messy table into a tidy one is standard preparation work. When you meet a new dataset, the tidy principle gives you a question to ask: is each row one observation, and is each column one named variable? If not, the table is probably arranged for human reading rather than for analysis.

### Size: rows versus columns, wide versus tall

Datasets come in very different sizes, and the useful measure is not storage space but how many rows and how many columns a dataset has. A class attendance table for one week has a few dozen rows; a national survey can hold a very large number of records; the logs of a busy website can hold billions of rows. Shape matters too. A dataset with many columns relative to its rows is informally called wide, for example a table with one column per school day. A dataset with many rows relative to its columns is called tall, and some people say long. Wide tables are convenient for human readers; tall tables are the form tidy data usually takes, because each observation gets its own row. Wickham's paper itself notes that the wide-versus-long labels are informal and imprecise; the point is to notice the shape, not to memorize the label.

### Where datasets come from

Datasets are built from many kinds of raw material. Surveys gather answers from people; the U.S. Census Bureau, for example, runs surveys that produce statistics about the nation and publishes the results as data files. Sensors and connected devices generate readings, such as temperature measurements from a weather station or step counts from a fitness tracker. Instruments record measurements in laboratories and workshops. Computer systems write logs, records of events such as page requests, logins, or error messages, that can be analyzed later. Organizations keep records of transactions, enrollments, and deliveries. And much of this material is released as public data: government agencies publish datasets, usually with personal information removed, so researchers and citizens can use them. How data is collected carefully, who gets measured, how questions are phrased, and how bias creeps in is a topic of its own; here it is enough to recognize that every dataset has a history, and that history shapes what the dataset can tell you.

### Data quality at a glance

A fresh dataset rarely arrives perfect, and three problems appear over and over. Missing entries: a cell left blank because no one recorded the value, such as a temperature reading absent on a stormy day. Duplicates: the same observation recorded twice, which quietly double-counts it in any total. Inconsistent formats: the same kind of information written different ways, such as dates as "2026-07-14" in one column and "14/07/2026" in another, or heights in meters in one file and feet in another. None of these problems means the dataset is useless; they mean it needs attention before analysis. Spotting them is the first step; deciding how to fix them is the work of data cleaning, a separate topic. The habit worth building now: when you meet a dataset, glance for blanks, repeats, and mixed formats before you trust any number inside it.

## Key Vocabulary

- **dataset** — A collection of related observations about a subject, usually organized as a table, file, or similar structured collection.
- **observation** — A single case recorded in a dataset, such as one student's attendance on one day; in a table, usually one row.
- **record** — A stored entry describing one case in a dataset, equivalent to one row in a table.
- **variable** — A named characteristic that can differ from one observation to another, such as a student's name or grade; usually one column.
- **tidy data** — An ideal arrangement of a dataset in which each variable is a column, each observation is a row, and each kind of thing being studied has its own table.
- **wide dataset** — A dataset with many columns relative to its rows, such as one column per school day.
- **tall dataset** — A dataset with many rows relative to its columns, such as one row per student per day; sometimes called long.
- **missing value** — An absent or blank entry in a dataset, such as an empty cell where a temperature reading was never recorded.
- **duplicate** — A repeated entry in a dataset, such as the same observation appearing twice.
- **public data** — Datasets released openly by governments, agencies, and other organizations for anyone to examine, usually with personal information removed.

## Eli-10

A dataset is a collection of related observations kept together so they can be compared and analyzed. Usually it is a table: each row describes one case, like one student on one school day, and each column is one kind of fact, like the date or whether the student attended. The tidy ideal says each fact should have its own column and each case its own row. Datasets come from all sorts of places, surveys, sensors, computer logs, and public releases, and they are rarely perfect when you first meet them. Look for blanks, repeated rows, and facts written in different formats before you trust the numbers.

## Eli's Analogy

Think of a dataset as a class photo directory: every student fills in the same card, name, birthday, height, and the cards are stacked in one box. Because every card uses the same blanks in the same order, you can flip through and compare heights or count birthdays. A messy dataset is a box where some cards are blank, a few were copied twice, and one student wrote her birthday as "14/07/2026" while everyone else wrote "2026-07-14". Tidy data is the box where every card is complete and every blank means the same thing.

The card box makes tidy data sound like neatness, but tidy structure is not about being neat for its own sake; it is about making each observation comparable and each variable computable. Real datasets are far larger than any card box, and one card cannot hold everything: a student who attends for a hundred days needs a hundred rows, so tidy data sometimes spreads across several related tables. And no amount of tidying fixes a dataset that was collected badly, a card box is only as good as what people actually wrote on the cards.

## Worked Example

Hilltop Middle School's office keeps attendance the old way: one row per student, one column per school day, with "P" or "A" in each cell. For a three-day week with five students, that is a wide table: five rows, three day-columns, plus a name column. To answer "how many students were absent on Tuesday?", someone must read across each row. The tidy version lists Student ID, Student Name, Date, and Status, with one row per student per day, fifteen rows for the same week. Now "absent on Tuesday" is a simple question: count the rows where Date is Tuesday and Status is A. Nothing about the facts changed; the arrangement did. That is the whole point of tidy data: the same information, in a structure that supports the questions you want to ask.

## Common Mistakes

- **Thinking each column is one record.** Each row is one observation; each column is one variable. A column holds one kind of fact across all the observations.
- **Calling any spreadsheet tidy because it looks neat.** Tidy has a precise meaning: each variable is a column and each observation is a row. A wide table with one column per day can look tidy yet violate the principle.
- **Ignoring blanks and repeated rows in a rush to analyze.** Missing entries and duplicates change totals and averages. Notice them first; fixing them is its own careful step.
- **Judging a dataset's size by its row count alone.** Size has two dimensions, rows and columns. A wide table can be small in rows yet rich in variables, and a tall one can be the reverse.

## Compare / Contrast

- **Row vs. Column** — A row is one observation, one case being described; a column is one variable, one named characteristic that varies across the rows.
- **Wide dataset vs. Tall dataset** — A wide dataset has many columns relative to its rows, like one column per school day; a tall dataset has many rows relative to its columns, like one row per student per day.
- **Dataset vs. Tidy dataset** — Any collection of related observations is a dataset; a tidy dataset is the ideal arrangement in which each variable is a column and each observation is a row.

## Key Takeaway

A dataset is a collection of related observations, usually a table of rows and columns: each row is one observation, each column is one named variable. Aim for tidy structure, and check for missing entries, duplicates, and inconsistent formats before trusting any conclusion drawn from the data.

## Practice Question Bank

**Q1.** In a typical tabular dataset, what does each row represent?

- A. One observation, such as a single student's attendance on one day.
- B. One variable, such as student names.
- C. One summary statistic for the whole table.
- D. One column header.

**Key: A.** Each row is one observation, also called a record, a single case being described. Columns hold variables, summaries are computed from many rows, and headers are labels, not rows.

**Q2.** What does the phrase "tidy data" describe?

- A. Data that has been double-checked by experts.
- B. An arrangement in which each variable is a column and each observation is a row.
- C. A table sorted alphabetically by its first column.
- D. Data stored in exactly one spreadsheet file.

**Key: B.** Tidy data is the arrangement, set out by Hadley Wickham in 2014, in which each variable is a column and each observation is a row. It is not about expert checking, sorting, or the number of files; tidy data can even span several tables.

**Q3.** A school records attendance as a table with one row per student and one column per school day, where each cell says present or absent. A data analyst wants a tidy dataset instead. What should they change?

- A. Delete the names of students who were never absent.
- B. Add one new column per student.
- C. Turn each day column into rows, so each row is one student on one day.
- D. Combine all the days into a single column of text.

**Key: C.** The wide table stores dates as column headers, so the date is not a variable. Tidying means making one row per observation, one student on one day, with Date as its own column. Deleting rows, adding per-student columns, or merging days into text does not achieve one observation per row.

**Q4.** A weather dataset has some days with no temperature entry, two identical rows for July 14, and dates written as "2026-07-14" in one column and "14/07/2026" in another. What is the most accurate first description?

- A. A tidy dataset ready for analysis.
- B. A tall dataset with too many rows.
- C. A wide dataset with too many columns.
- D. A dataset with quality problems: missing entries, duplicates, and inconsistent formats.

**Key: D.** The empty temperature cells are missing entries, the repeated July 14 rows are duplicates, and the two date styles are inconsistent formats. These are data-quality problems, not matters of tidy structure, row count, or column count.

**Q5.** Which list names common sources of datasets?

- A. Surveys, sensor readings, and log files.
- B. Only spreadsheets created by hand.
- C. Only databases owned by large companies.
- D. Only government publications.

**Key: A.** Datasets are built from many kinds of material: surveys, readings from sensors and devices, records such as log files, organizational records, and public data releases. They are not limited to hand-made spreadsheets, corporate databases, or government publications alone.

## Sources

- U.S. Census Bureau — "Census Datasets". https://www.census.gov/data/datasets.html
- Google Cloud — "What is Big Data? (Big Data Defined: Examples and Benefits)". https://cloud.google.com/learn/what-is-big-data
- IBM — "What is Data Science?". https://www.ibm.com/topics/data-science
- Hadley Wickham — "Tidy Data", Journal of Statistical Software, Vol. 59, Issue 10 (2014). https://www.jstatsoft.org/article/view/v059i10
- Microsoft Learn — "Explore and analyze data with Python". https://learn.microsoft.com/en-us/training/modules/explore-analyze-data-with-python/
- Microsoft Learn — "Clean, transform, and load data in Power BI". https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/

## Related Topics

- Types of Data (data-science-and-ai-literacy:foundations:types-of-data)
- Structured versus Unstructured Data (data-science-and-ai-literacy:foundations:structured-versus-unstructured-data)
- Data Collection (data-science-and-ai-literacy:foundations:data-collection)
- Data Cleaning (data-science-and-ai-literacy:foundations:data-cleaning)
- Features and Labels (data-science-and-ai-literacy:foundations:features-and-labels)

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:datasets
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
