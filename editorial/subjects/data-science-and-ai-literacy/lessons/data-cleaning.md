# Data Cleaning

## In 30 Seconds

Data cleaning is the process of finding and fixing errors, inconsistencies, and gaps in a dataset before it is analyzed. Real-world data arrives with typos, duplicates, missing entries, mixed units, and impossible values such as an age of 230. Cleaning means standardizing formats, correcting errors, removing or flagging duplicates, and deciding what to do with blanks, then recording what you changed. Programmers summarize the stakes as "garbage in, garbage out": messy input produces misleading results, no matter how careful the analysis.

## Why This Matters

Every analysis inherits the quality of the data beneath it. A survey that counts the same family twice, a clinic file with a patient age of 230, or a spreadsheet that mixes pounds and kilograms will quietly corrupt averages, counts, and predictions. Cleaning is the step that keeps those errors out of the results, and it is also where data professionals spend a surprisingly large share of their time: surveys have found cleaning and organizing data consumes around 60 percent of a data scientist's working hours. Learning to spot the common failure modes of data, and to record the fixes you make, transfers directly to coursework, internships, and any job that asks you to make decisions from spreadsheets or databases.

## Learning Objectives

- Define data cleaning and explain the "garbage in, garbage out" principle.
- Identify common data problems: missing values, duplicates, inconsistent formats, impossible values, and mixed units.
- Explain the general steps of cleaning: standardizing, correcting, deduplicating, handling missing entries, and validating.
- Distinguish cleaning from analysis and place preparation before analysis in the data lifecycle.
- Apply a cleaning mindset to a small dataset and justify a documented cleaning decision.

## The College Version

### Cleaning is the unglamorous heart of data work

Most people picture data work as analysis: charts, averages, models, predictions. In practice, the work that makes those results trustworthy happens before any of it. Data cleaning — also called data cleansing or data scrubbing — is the process of finding and correcting errors, inconsistencies, and gaps in raw data so that it is accurate, complete, consistent, and usable. The stakes are captured by a saying from the early days of computing: garbage in, garbage out. Flawed or sloppy input produces output of the same quality, no matter how careful the analysis. The underlying idea is older than computers. Charles Babbage, the nineteenth-century designer of an early computing machine, was asked what would happen if wrong figures were put into his machine; he replied that he could not imagine how the right answers could come out. Programmers eventually shortened that insight to four words, and it remains the best one-line argument for why cleaning matters.

### The usual suspects: five common data problems

Most dirty data falls into a handful of recognizable patterns. Missing values are blank entries — a phone number left off a signup form, a temperature not recorded by a broken sensor. Duplicates are unintended extra copies of the same record: the same order entered twice, the same family signed in twice at a food pantry. Inconsistent formats mean the same fact written several ways: one volunteer types "3", another writes "three", a third writes "3 people". Impossible values are entries that cannot be true, like a survey respondent with an age of 230 or a delivery distance of negative five kilometers. Mixed units record the same quantity in different measures, such as a height given sometimes in centimeters and sometimes in feet. Each pattern is easy to miss in a single row and easy to spot across a whole column — which is why cleaning begins with actually looking at the data.

### What cleaning involves

Cleaning is not one magic step; it is a short list of practical moves. Standardize formats so every entry means the same thing: choose one date format, one way of writing names, one unit. Correct typos and units — "Nwe York" becomes "New York", and heights all convert to centimeters. Remove or flag duplicates so one event is never counted twice. Decide what to do with missing entries: sometimes the right move is to leave the blank and note it, sometimes to fill it from another source, sometimes to set the row aside for follow-up. The decision itself depends on the situation, and sibling lessons cover missing values and unusual-but-real outliers in depth. Finally, validate: check the cleaned data for remaining oddities before analysis begins. The goal is a dataset you can trust enough to draw conclusions from.

### Cleaning comes before analysis

Analysis cannot rescue dirty data; it only draws conclusions from whatever it is given. The standard description of the data science lifecycle puts preparation — the stage that turns raw data into cleansed, organized information — between collection and analysis. NIST's Big Data Interoperability Framework lists the stages as collection, preparation, analysis, and action: gather raw data, clean and organize it, produce knowledge from the organized information, then use that knowledge. The order is not a formality. If a shop's sales file contains every transaction twice, an analysis will report double the real revenue, and no amount of statistical sophistication changes that. The misleading result is not a failure of the analysis; it is a failure that happened earlier, in the data. Cleaning first, analyzing second, is what keeps the two jobs honest.

### The time it takes, and keeping a record

Cleaning is also the part of data work that quietly consumes the most time. In a 2016 survey of data scientists, CrowdFlower found that respondents spent 60 percent of their time cleaning and organizing data, and the report estimated that up to 80 percent of a data scientist's time can go to this kind of work. IBM's data-management guide cites research suggesting data preparation takes between 45 and 80 percent of a data analyst's time. The exact numbers vary by survey and by job, but the pattern holds: preparing data routinely takes more time than analyzing it. Because cleaning involves judgment — keep or flag this duplicate, fill or ignore that blank — good practice includes documenting what you changed and why. A written record of cleaning decisions makes an analysis reproducible: someone else can see exactly what the original data looked like and how it became the version that produced the results.

## Key Vocabulary

- **data cleaning:** The process of finding and correcting errors, inconsistencies, and gaps in a dataset before it is used for analysis.
- **data quality:** How accurate, complete, consistent, and usable a dataset is for its intended purpose.
- **missing value:** An entry that is blank because a piece of information was never recorded.
- **duplicate:** An unintended extra copy of a record that already exists in the dataset.
- **inconsistent format:** The same kind of fact written in different styles, such as "3", "three", and "3 people" for the same count.
- **standardization:** Converting values to one agreed format or unit so that entries can be compared and combined.
- **impossible value:** An entry that cannot be true, such as an age of 230 years or a negative distance.
- **garbage in, garbage out:** The principle that flawed input data produces flawed output no matter how careful the analysis.
- **validation:** A final review of cleaned data to catch remaining errors before analysis begins.
- **reproducibility:** The property of an analysis whose data changes and steps are recorded so others can repeat or audit it.

## Eli-10

Cleaning data means checking a collection of information for mistakes before you use it. Real data is collected by people and machines, and people make typos, machines drop readings, and no two volunteers fill out a form the same way. So before anyone trusts a number, someone has to go through the records and fix the obvious problems: a name spelled two different ways, a row entered twice, a blank where an answer should be, a height recorded in feet next to one recorded in centimeters, an age of 230 that cannot be right.

The fixing is usually simple — change the format, delete the copy, note the blank. What is not simple is noticing the problems in the first place, and deciding what to do with entries that are merely strange rather than clearly wrong. That noticing-and-deciding is the real skill, and it is why cleaning is described as the unglamorous heart of data work: it is the least showy part, and it determines whether everything after it means anything.

## Eli's Analogy

Cleaning data is like preparing ingredients before cooking. You sort the onions from the garlic, wash what is dirty, peel what needs peeling, and measure everything in the same units — you would not toss "half a cup" and "120 milliliters" into the same sauce without picking one measure. The careful prep is not the memorable part of the meal, but a brilliant recipe cannot save spoiled or mislabeled ingredients.

The analogy has limits: unlike food, data does not spoil visibly, so you cannot smell that a number is wrong — you have to inspect it. And a strange data point is not always bad: sometimes the unusual value is real and important, and deciding that is a separate question this lesson only touches.

## Worked Example

A neighborhood association collects a paper signup sheet at its annual meeting, and a volunteer types the entries into a spreadsheet. The sheet asks for each household's number of residents and its distance from the meeting hall in kilometers. The typed file contains "3" and "three" for the same count, one blank where a resident count was never filled in, one household listed twice because two volunteers entered the same sheet, a distance written as "1.2 km" next to one written as "800 m", and a household with "-1" residents from a stray keystroke. Cleaning converts every count to a number and every distance to kilometers, removes the duplicate, flags the blank and the "-1" for follow-up with the household rather than silently deleting them, and records all the changes. Only then does the association compute the average distance.

## Common Mistakes

- **Mistake:** Jumping straight into analysis and treating cleaning as optional polish. **Correction:** Cleaning comes first. Analyses built on dirty data can look rigorous while quietly reporting wrong numbers.
- **Mistake:** Automatically deleting every unusual value or blank row. **Correction:** Some strange entries are real and meaningful. Flag and investigate first; decisions about missing values and outliers are deliberate, not automatic.
- **Mistake:** Assuming the computer will notice errors. **Correction:** Programs follow instructions; nothing flags an age of 230 unless a rule says it is impossible. The human decides what to check.
- **Mistake:** Cleaning without writing down what changed. **Correction:** Record each fix and the reason for it, so the analysis can be reproduced and audited by someone else.

## Compare / Contrast

- **Data cleaning** versus **data analysis:** Cleaning prepares data so it is accurate and consistent; analysis draws conclusions from the prepared data. Cleaning errors are caught before they reach the results.
- **A missing value** versus **a zero:** A missing value is an absence of information — nothing was recorded. A zero is a recorded value that may be meaningful, such as zero children in a household.
- **A duplicate record** versus **two similar but distinct records:** A duplicate is the same event entered twice and should be consolidated; two similar records can be genuinely different, like two families with the same last name.

## Key Takeaway

Data cleaning is the unglamorous first step of data work: find and fix errors, inconsistencies, and gaps before analyzing, and record what you changed. Analyses built on dirty data mislead, and cleaning takes a surprisingly large share of a data professional's time.

## Practice Question Bank

1. What is data cleaning? The process of finding and fixing errors, inconsistencies, and gaps in data before analysis.
2. A delivery app's address file contains many typos. According to the "garbage in, garbage out" principle, what is the most likely outcome? Deliveries will go to wrong places no matter how well the routing software works.
3. A club's membership spreadsheet contains an entry with age 230 and heights recorded in both centimeters and feet. Which cleaning step fits best? Standardize height units and flag the impossible age for verification.
4. A shop's sales file contains every transaction twice, and the team reports average daily revenue of $1,200. What does the duplicate data most likely cause? The average will be inflated because the same sales are counted twice.
5. In the data lifecycle described by NIST's Big Data Interoperability Framework, which order is correct? Collection, preparation, analysis, action.

## Sources

- [IBM — What is data cleaning?](https://www.ibm.com/topics/data-cleaning)
- [IBM — What is data wrangling?](https://www.ibm.com/topics/data-wrangling)
- [Microsoft Learn — Clean, Transform, and Load Data in Power BI](https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/)
- [CrowdFlower — The 2016 Data Science Report](https://visit.figure-eight.com/rs/416-ZBE-142/images/CrowdFlower_DataScienceReport_2016.pdf) (read via Internet Archive capture)
- [NIST SP 1500-1 — Big Data Interoperability Framework: Volume 1, Definitions](https://doi.org/10.6028/NIST.SP.1500-1)
- [Wikipedia — Garbage in, garbage out](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out)

## Related Topics

- What Is Data Science?
- Data Collection
- Missing Data
- Outliers
- Exploratory Data Analysis

## Editorial Metadata

Original EliExplains synthesis, researched 2026-08-21. Sources used as reference-only; no source prose adapted. Survey figures re-stated with attribution; the CrowdFlower report was read via an Internet Archive capture of the original PDF.
