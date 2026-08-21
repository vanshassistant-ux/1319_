# What Data Science Is

## In 30 Seconds

Data science is the field that turns data into understanding and decisions. At its core, it means using data to answer questions and guide decisions: a data scientist asks a clear question, gathers relevant data, cleans it, analyzes it, and communicates what the data shows. The work draws on statistics, computing, and knowledge of the problem at hand. Data science powers recommendations, forecasts, health insights, and transportation planning — and it has real limits when data is flawed, misunderstood, or used carelessly.

## Why This Matters

Every day, decisions that shape your life — what you watch, what a store stocks, how a city plans its buses, how a clinic schedules care — are influenced by data analysis. Understanding what data science is lets you see how those decisions are made and where they can go wrong. It also gives you the vocabulary to evaluate claims you meet in news, school, and work, and to ask the right questions when someone says "the data shows". As data becomes a bigger part of how organizations operate, data literacy is a practical skill for any field, not just technical ones.

## Learning Objectives

- Define data science as using data to answer questions and guide decisions.
- Describe what data scientists do across collecting, cleaning, analyzing, visualizing, and communicating.
- Distinguish data science from statistics, computer science, and business analytics.
- Explain the data-driven cycle: ask, get, clean, analyze, communicate.
- Recognize where data science appears in daily life and name its main limits.
- Apply the data-driven cycle to a simple everyday decision.

## The College Version

### A Working Definition

Data science is the practice of using data to answer questions and guide decisions. IBM, a technology company that publishes widely used introductions to the field, describes data science as combining mathematics and statistics, specialized programming, advanced analytics, and machine learning with specific subject-matter expertise, in order to uncover actionable insights hidden in an organization's data — insights that can then guide decision making and strategic planning. The definition has three parts worth holding onto. First, data science starts with data: records, numbers, text, and observations gathered from the world. Second, it uses methods from statistics and computing to find patterns and answer questions. Third, its goal is practical: understanding that leads to a decision, not curiosity alone. That working definition — data in, understanding and decisions out — is the spine of this lesson.

### What Data Scientists Do

A data scientist's work is often described as a small set of recurring tasks. They collect data — pulling together records from surveys, sensors, transactions, or public sources. They clean data — fixing errors, filling gaps, and removing duplicates, because analysis built on messy data is unreliable; IBM notes that this preparation is essential for promoting data quality. They analyze data — exploring it for patterns, trends, and unusual values, and testing whether what they see is real. They visualize data — turning numbers into charts and maps that make patterns visible. And they communicate — explaining what the data shows to people who will act on it, in plain language rather than formulas. Notice that the last step is not an afterthought: an insight nobody can understand changes nothing. The mechanics of collecting and cleaning data get their own lessons later in this course; here the point is the shape of the job.

### Data Science and Its Neighboring Fields

Data science overlaps with several older fields, and the boundaries are not razor-sharp. Statistics is the mathematical study of data — how to summarize it, measure uncertainty, and draw careful conclusions. Data science builds on statistics but is broader: Microsoft's public curriculum for beginners notes that when the term "data science" appeared, some people called it a new name for statistics, but the field has since grown far beyond it, adding computing, prediction, and real-world problem solving. Computer science contributes the machinery — databases, programs, and systems that store and process data at scale; data science uses that machinery to answer questions about the world, which is a different goal from building the machinery itself. Business analytics (sometimes called business intelligence) focuses on an organization's own records to describe what has happened — last quarter's sales, this month's costs. Data science shares that descriptive work but typically pushes further, toward predicting what may happen next and guiding choices. The three fields are teammates: a healthy data effort uses statistics for rigor, computing for scale, and business analytics for context.

### The Data-Driven Cycle

Real data projects are rarely a straight line, but most follow the same five steps, which we can call the data-driven cycle. Ask: decide what question the data should answer — the question shapes everything that follows. Get: gather data that bears on the question. Clean: check the data for errors, gaps, and inconsistencies before trusting it. Analyze: look for patterns, trends, and comparisons that answer the question. Communicate: turn the findings into something others can understand and act on. IBM's description of the data science lifecycle runs through the same stages — ingestion, preparation, analysis, and communication — and Microsoft's data journey adds that steps may be skipped when not needed or repeated when a first pass raises new questions. A weather team studying one city's records might loop from analysis back to cleaning when it discovers that half the readings came from a broken sensor. The cycle is a habit of mind: start with the question, respect the data, and end with a clear message.

### Where Data Science Shows Up — and Its Limits

Data science is woven into ordinary life. Streaming services track what you watch to recommend what to play next. Businesses use historical records to forecast demand so shelves stay stocked. In health care, hospitals analyze patient records to find patterns that support care decisions. In transportation, traffic cameras and vehicle sensors feed analyses that estimate congestion and help plan routes. Even the U.S. Census — the government's once-a-decade count of the population — produces data that helps decide how federal funding is distributed to schools, hospitals, and roads. These are general examples of the same cycle at work. The field also has limits, and a good data scientist names them. Results are only as trustworthy as the data behind them, so poor data quality is a real hazard. Patterns can be misinterpreted — a finding can be overstated, or applied beyond what the data actually covers. And working with data raises ethical questions about privacy, fairness, and responsibility; NIST's AI Risk Management Framework treats these as risks to individuals and society that organizations should manage. The ethics questions get their own lessons in this course; here, the point is that limits are part of the field, not a flaw in it.

## Key Vocabulary

- **data science:** The practice of using data to answer questions and guide decisions, combining statistics, computing, and knowledge of a problem area.
- **insight:** A useful understanding gained by examining data, such as noticing that a shop's sales rise on rainy days.
- **data-driven cycle:** A five-step pattern for data work: ask, get, clean, analyze, and communicate.
- **data quality:** How complete, accurate, and consistent a set of records is; poor data quality can lead to unreliable conclusions.
- **visualization:** A chart, map, or other picture of data that makes patterns easier to see.
- **statistics:** The mathematical study of collecting, summarizing, and drawing careful conclusions from data.
- **business analytics:** Analysis of an organization's own records, usually to describe what has happened, such as last quarter's sales.
- **forecast:** A prediction of a future value or trend, such as next week's demand for a product, based on patterns in data.
- **machine learning:** A family of techniques in which programs learn patterns from data; machine learning is covered in its own lesson in this course.

## Eli-10

Think of data science as the work of turning raw facts into good decisions. A library keeps a list of every book borrowed this year. That list is just data — rows of titles and dates. Data science is the craft of asking "which books sit on shelves the longest?" and then organizing the list, checking it for mistakes, spotting patterns, and telling the librarian something useful, like "mysteries borrowed in winter come back fastest." The point is never the list itself; it is the question the list can answer. The same habit works in small ways every day. If you track how much sleep you get and how you feel each morning, and you notice you feel better after eight hours, you have just run a tiny data science project: you asked, gathered, cleaned, analyzed, and communicated — to yourself.

## Eli's Analogy

A chef and a data scientist do similar work. A chef takes raw ingredients, sorts out the bruised ones, prepares them, combines them, and plates a meal the diner can enjoy. A data scientist takes raw records, removes the errors, organizes them, analyzes them, and serves up a conclusion a decision-maker can act on. Neither is praised for the raw ingredients; both are judged by what they make of them.

The analogy breaks down because ingredients are honest: a spoiled tomato is visibly spoiled, while flawed data can look perfectly fine and quietly mislead. A bad meal is noticed immediately; a bad analysis may be trusted for years. And unlike a chef, a data scientist must also ask what questions are worth asking — and whether it is ethical to use certain data at all.

## Worked Example

Maya runs a small food truck and wonders whether staying open later on Fridays is worth the cost. She follows the data-driven cycle. Ask: "How many customers do I get after 8 p.m. on Fridays?" Get: she copies her paper order log into a spreadsheet, 14 weeks of Friday receipts. Clean: she finds three nights where the totals were misadded and one Friday missing entirely, so she fixes the arithmetic and marks the gap rather than guessing. Analyze: she counts orders by hour and sees that the 8 to 10 p.m. window averages only four orders a night, far below her break-even of twelve. Communicate: she writes a one-page summary for herself and decides to close at 8 p.m. on Fridays. The data did not make the decision; it made the decision clearer.

## Common Mistakes

- **Starting with data instead of a question** — collecting everything in sight and hoping an answer appears. *Correction:* begin the data-driven cycle by asking what question the data should answer; the question tells you which data matters.
- **Trusting data the moment it arrives**, without checking for errors, duplicates, or gaps. *Correction:* treat cleaning as a real step: even small mistakes can change a conclusion, so check the data before analyzing it.
- **Treating any pattern as proof** — overstating what one dataset shows or applying it beyond what it covers. *Correction:* report what the data actually supports, and say what it does not cover.
- **Confusing data science with a single neighboring field**, like thinking it is only statistics or only programming. *Correction:* data science draws on statistics, computing, and subject knowledge together; each neighboring field covers only part of the work.

## Compare / Contrast

- **Statistics vs. data science:** statistics supplies the mathematical tools for summarizing data and measuring uncertainty; data science applies those tools to real-world questions at scale, adding computing, prediction, and communication.
- **Business analytics vs. data science:** business analytics mostly describes what has happened using an organization's structured records; data science typically pushes further toward prediction and forward-looking decisions.
- **Computer science vs. data science:** computer science builds the systems that store and process data; data science uses those systems to answer questions about the world.

## Key Takeaway

Data science is using data to answer questions and guide decisions: ask, get, clean, analyze, and communicate — while respecting the limits of the data.

## Practice Question Bank

1. Which statement best defines data science? **Answer: B.**
2. A team has a stack of customer feedback forms and wants to know whether satisfaction is improving. Which order matches the data-driven cycle? **Answer: C.**
3. A city transit agency wants to reduce bus delays. According to the data-driven cycle, what should it do first? **Answer: A.**
4. A team studies one year of temperature records from a single city and announces the data proves summers are cooling across the entire country. What is the main problem with this conclusion? **Answer: D.**
5. Which statement correctly distinguishes data science from business analytics? **Answer: B.**

## Sources

- **ibm-what-is-data-science** — IBM, *What is Data Science?* — https://www.ibm.com/topics/data-science (read live 2026-08-21)
- **census-why-conduct-decennial-census** — U.S. Census Bureau, *Why We Conduct the Decennial Census of Population and Housing* — https://www.census.gov/programs-surveys/decennial-census/about/why.html (read live 2026-08-21)
- **microsoft-ds4b-defining-data-science** — Microsoft, *Data Science for Beginners — Lesson 1: Defining Data Science* — https://github.com/microsoft/Data-Science-For-Beginners/tree/main/1-Introduction/01-defining-data-science (read live 2026-08-21)
- **nist-ai-risk-management-framework** — NIST, *AI Risk Management Framework (AI RMF)* — https://www.nist.gov/itl/ai-risk-management-framework (read live 2026-08-21)

## Related Topics

- Types of Data
- Data Collection
- Data Cleaning
- Visualization
- AI Ethics

## Editorial Metadata

- **Topic:** data-science-and-ai-literacy:foundations:what-data-science-is
- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-21
- **Rights:** reference-only sources; no source prose adapted; all examples original.
- **Transformation:** working definition and lifecycle synthesized from IBM and Microsoft public documentation; daily-life and government claims grounded in IBM use cases and U.S. Census Bureau materials; risk/ethics framing referenced to the NIST AI RMF.
