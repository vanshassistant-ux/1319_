# Exploratory Data Analysis

## In 30 Seconds

Exploratory data analysis, or EDA, is the open-minded first look at a dataset before any formal modeling. You scan the numbers for errors, check the range and the shape of the data, and watch for patterns that raise questions worth asking. The tools are simple: summary numbers such as the minimum, maximum, and average, plus charts like histograms and scatter plots. EDA finds hypotheses; confirmatory analysis tests them. Exploration on its own is not proof.

## Why This Matters

Every dataset arrives with surprises: a typo, a skewed range, a pattern no one expected. EDA is the cheap, fast check that catches those surprises before they corrupt a model or a decision. Learning the habit matters academically because every later topic, from cleaning to visualization to prediction, assumes you have looked at the data first. It matters practically because the person who explores before concluding finds the errors and the questions everyone else missed. And it matters for the long run: the questions EDA raises are often more valuable than the answers it later confirms.

## Learning Objectives

- Define exploratory data analysis as the open-ended first look at data that precedes formal modeling, in the spirit of John Tukey's framing.
- Explain the goals of EDA: spotting errors, understanding ranges and shapes, noticing patterns, and generating questions.
- Identify the basic tools of exploration, including summary numbers (minimum, maximum, average, typical value, spread) and simple charts (histograms, scatter plots).
- Distinguish exploratory analysis, which suggests hypotheses, from confirmatory analysis, which tests them.
- Apply the explore-before-modeling principle by planning a first look at a fresh dataset before any model is built.
- Evaluate the honesty limits of EDA: exploration is not proof, and cherry-picking patterns is a misuse of the approach.

## The College Version

### What EDA is: Tukey's framing

Exploratory data analysis, usually shortened to EDA, is the open-ended first look at a dataset. The statistician John Tukey established the approach with his 1977 book Exploratory Data Analysis, and he described it as an attitude rather than a fixed list of techniques. The idea is simple: before you impose assumptions on data, before you declare what kind of model it should fit, you look at the data itself and let it show you what is there. The NIST e-Handbook of Statistical Methods, a U.S. government reference, describes EDA the same way: an approach that postpones assumptions about what kind of model the data follow and lets the data reveal its underlying structure. EDA is deliberately open-ended. You are not testing a specific claim yet; you are looking around, the way you would walk through a house you might buy, opening closets and checking the water pressure, before deciding whether to make an offer.

### The goals: errors, ranges, shapes, patterns, questions

Exploration has four recurring goals, and all of them happen before any formal analysis. First, spot errors: a temperature reading of minus forty on a summer day, a sales figure ten times bigger than any other, a customer name spelled three different ways. Second, understand ranges and shapes: what is the smallest value, what is the largest, where do most values sit, and does the data bunch up in one place or spread out evenly? Third, notice patterns: weekday sales higher than weekend sales, older homes selling for less in one neighborhood. Fourth, generate questions: every pattern you notice is a question, such as why Tuesdays always dip, and a question is the raw material of later, formal analysis. NIST lists questions like what is a typical value and how the values spread among the common questions EDA is used to answer. Notice that none of these goals produces a conclusion; they produce a picture and a list of leads.

### The tools: summary numbers and charts

The tools of exploration are deliberately modest. Summary numbers compress a whole dataset into a few figures. The minimum and the maximum bound the range of values. The average, also called the mean, gives one sense of a typical value, and the median, the middle value once the data is sorted, gives another. Measures of spread describe whether values cluster tightly around the typical value or scatter widely. Charts do what numbers cannot: they show the shape of the data. A histogram counts how many observations fall into each band of values, revealing whether the data piles up in the middle, trails off to one side, or has two separate humps. A scatter plot shows two variables at once, one along each axis, so you can see whether they seem to move together. NIST calls such simple graphics the shortest path to insight into a dataset. How to design and read charts well is its own topic, visualization; here it is enough to name the charts and know why they exist.

### Exploring before modeling

The explore-first principle is built into how EDA is taught. NIST contrasts the classical sequence, problem, data, model, analysis, conclusions, with the EDA sequence: problem, data, analysis, model, conclusions. In other words, the classical path picks a model first and then analyzes; EDA analyzes first and lets the data suggest which model, if any, is appropriate. Building models is a later topic, prediction, but the habit carries over: you cannot responsibly train a model on data you have never examined. Errors in the data become errors in the model. A shape you did not know about becomes an assumption you did not know you were making. Exploration is not a formality before the real work; for many problems it is where most of the real work happens.

### Exploration versus confirmation

Tukey was explicit that exploration and confirmation are different jobs, and that science needs both. In a 1980 paper, We Need Both Exploratory and Confirmatory, he wrote that ideas come from previous exploration more often than from lightning strikes, and that finding the question is often more important than finding the answer. Exploration finds the question; confirmation answers it. Confirmatory analysis is the formal machinery, careful designs and tests with expectations fixed in advance, that decides whether a hypothesis holds up. The division of labor is the core distinction: exploratory analysis generates hypotheses; confirmatory analysis tests them. Confusing the two is where honest analysis goes wrong, which is why the distinction gets so much emphasis.

### What EDA is not

Because EDA is open-ended, it has honest limits. It is not proof: a pattern you notice in exploration has not been tested, and it may be a coincidence of the particular data you happen to have. It is not a license to cherry-pick: hunting through dozens of charts until something looks interesting, and then reporting only that one finding as if it were the whole story, is a misuse of the approach. Tukey warned analysts to avoid this kind of multiplicity, because the more patterns you look for, the more likely one shows up by chance. The honest move is to treat exploration as the start: notice everything, report what you see including the unremarkable parts, and then confirm what matters with a proper test.

## Key Vocabulary

- **exploratory data analysis (EDA)** — An open-ended approach to examining a dataset before formal modeling, aimed at spotting errors, understanding ranges and shapes, and generating questions and hypotheses.
- **summary number** — A single figure that condenses information about a dataset, such as the minimum, maximum, average, or a measure of spread.
- **minimum and maximum** — The smallest and largest values in a dataset; together they bound the range of values the data covers.
- **typical value** — A value that represents the center of a dataset, such as the average or the median, the middle value once the data is sorted.
- **spread** — How widely the values in a dataset scatter around the typical value, from tightly clustered to far apart.
- **distribution** — The shape formed by all the values in a dataset, showing where values bunch up and where they thin out.
- **histogram** — A chart that counts how many observations fall into each band of values, showing the distribution of one variable.
- **scatter plot** — A chart with one variable along each axis and one point per observation, used to see whether two variables seem to move together.
- **hypothesis** — A tentative idea, such as a pattern noticed in the data, that has not yet been tested and is waiting for confirmation.
- **confirmatory analysis** — The formal process of testing a hypothesis, with expectations fixed in advance, to decide whether the hypothesis holds up.

## Eli-10

Exploratory data analysis is the first look at a dataset. Before anyone builds a model or declares a result, someone should sit with the data and ask simple questions: what is the smallest value, what is the biggest, what is a typical value, do the values bunch up or spread out, and do any patterns jump out? The answers come from summary numbers, like the minimum, maximum, and average, and from simple charts like histograms and scatter plots. The point is to notice things, errors, shapes, patterns, and to turn what you notice into questions. Those questions are hypotheses. Testing them properly is a separate job called confirmatory analysis, which comes later. Exploration suggests; confirmation decides.

## Eli's Analogy

Think of EDA as walking through a house you are thinking of buying. You open the closets, run the taps, check the windows, and notice that one room is always cool and that the basement smells damp. You are not signing anything yet; you are building a list of questions, why is that room cool, what is that smell. The formal home inspection, with its checklist and written report, is the confirmatory analysis that answers those questions. You would never hire the inspector without walking the house first, and you would never sign based on the walk-through alone.

The house analogy makes EDA sound like a casual pass, but good exploration is systematic: you look at every variable, not just the ones that catch your eye, because skipping variables is how cherry-picking starts. And a house is small enough to see at once, while datasets can have millions of rows, so exploration relies on summary numbers and charts that compress the data into something a human can actually look at. Finally, walking a house does not produce a repair plan the way exploration can point toward a model; exploration hints at what to do next, it does not decide it.

## Worked Example

Riverbend Bicycle Shop logs every rental for a year and ends up with 6,214 rentals across 365 days. Before building any forecast, the owner takes an EDA pass. The minimum daily total is 4 rentals, on a snowy February Tuesday; the maximum is 96, on a June Saturday; the average is just over 17 rentals per day. A histogram of daily totals shows most days falling between 8 and 25 rentals, with a long tail of bigger days. A scatter plot of rentals against date shows a pattern: the big days cluster on weekends from May through August. The owner now has questions, such as whether weather and rentals move together and whether summer weekends are always this strong, and one clear hypothesis: weekend weather drives rentals. None of this is proven yet. It is a list of leads, and testing them with proper analysis is the next step, not this one.

## Common Mistakes

- **Treating a pattern noticed in exploration as a proven result.** A pattern found in exploration is a hypothesis, not a finding. It needs confirmatory analysis, often on fresh data, before it counts as evidence.
- **Skipping exploration and building a model immediately.** Models inherit the errors and shapes of the data they are trained on. Exploring first is faster and safer than discovering the problems after the model exists.
- **Hunting through charts until one looks interesting and reporting only that one.** That is cherry-picking. Look at the data openly, report what you see including the unremarkable parts, and confirm anything you want to claim.
- **Thinking EDA is just drawing charts.** Charts are the most powerful tools, but EDA is the open-minded approach itself: reading the numbers, checking ranges and shapes, and asking questions.

## Compare / Contrast

- **Exploratory analysis vs. Confirmatory analysis** — Exploration looks openly at the data to find hypotheses; confirmation formally tests a hypothesis with expectations fixed in advance. One generates leads, the other decides.
- **A summary number vs. A chart** — A number compresses the dataset into one figure, such as the average; a chart shows the shape and structure that numbers hide, such as where the values bunch up.
- **Looking at everything vs. Cherry-picking** — Open exploration examines the whole dataset and reports honestly, including the unremarkable parts; cherry-picking reports only the exciting or flattering patterns, which is a misuse of EDA.

## Key Takeaway

Exploratory data analysis is the open-minded first look at data, using summary numbers and simple charts to spot errors, understand shapes, and generate questions before any model is built. It finds hypotheses; confirmatory analysis tests them; exploration on its own is not proof.

## Practice Question Bank

**Q1.** According to the framing of statistician John Tukey, exploratory data analysis is best described as what?

- A. An open-ended approach to looking at data that precedes formal modeling and lets the data reveal its structure
- B. A fixed bundle of statistical tests used to prove a claim about a dataset
- C. A formal procedure for testing a hypothesis that was written down in advance
- D. A type of database designed to store large datasets efficiently

**Key: A.** Tukey described EDA as an attitude and an approach, not a bundle of techniques: the open-minded first look at data before modeling. Proving claims and formally testing pre-written hypotheses are the work of confirmatory analysis, and a database is a storage system, not an analysis approach.

**Q2.** Which of the following is one of the goals of exploratory data analysis?

- A. Proving that a proposed theory is correct
- B. Publishing results in a peer-reviewed journal
- C. Spotting errors and noticing patterns in the data
- D. Replacing data collection with summary numbers

**Key: C.** Spotting errors and noticing patterns are central goals of EDA, along with understanding ranges and shapes and generating questions. Proof and publication belong to later, confirmatory stages, and summary numbers summarize data rather than replace its collection.

**Q3.** A food truck owner has a spreadsheet of daily sales for the past year and wants a sensible first look before making any menu decisions. Which step belongs to exploratory data analysis?

- A. Build a model that predicts tomorrow's sales and trust its output
- B. Compute the minimum, maximum, and average daily sales, then make a histogram of sales amounts
- C. Delete every unusual day from the spreadsheet so the numbers look normal
- D. Run a formal test to prove which menu item sells best

**Key: B.** Computing summary numbers and drawing a histogram is a classic first EDA pass: it shows the range, the typical value, and the shape of sales. Building a prediction model, deleting unusual days, and running formal tests all skip or go beyond the exploratory first look.

**Q4.** An analyst explores a dataset, notices that afternoons show higher sales than mornings, and wants to claim this pattern is real. What is the correct division of labor between exploratory and confirmatory analysis?

- A. The pattern is proven because it appeared during exploration
- B. Confirmatory analysis finds the pattern, and exploratory analysis tests it
- C. Exploratory and confirmatory analysis are the same process with different names
- D. Exploration suggests the pattern as a hypothesis; confirmatory analysis tests it before it counts as a finding

**Key: D.** The standard division, emphasized by Tukey, is that exploration generates hypotheses and confirmation tests them. A pattern seen in exploration is a lead, not a proof; swapping the two roles, or merging them, misuses both.

**Q5.** Why is it dishonest to scan many charts, pick the one pattern that looks most interesting, and report it as a finding without any further checking?

- A. Because hunting through many patterns makes coincidental patterns likely, so the finding needs confirmation
- B. Because charts are never accurate enough to support any claim
- C. Because exploration is only allowed to look at one variable at a time
- D. Because a pattern is only valid if it was predicted before the data was collected

**Key: A.** Tukey warned analysts to avoid multiplicity: the more patterns you look for, the more likely one appears by chance. Cherry-picking an interesting chart and skipping confirmation turns exploration into self-deception; charts can be accurate and still mislead if only the flattering one is shown.

## Sources

- NIST/SEMATECH e-Handbook of Statistical Methods — "1.1.1. What is EDA?". https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm
- NIST/SEMATECH e-Handbook of Statistical Methods — "1.1.2. How Does Exploratory Data Analysis differ from Classical Data Analysis?". https://www.itl.nist.gov/div898/handbook/eda/section1/eda12.htm
- NIST/SEMATECH e-Handbook of Statistical Methods — "1.1.4. What are the EDA Goals?". https://www.itl.nist.gov/div898/handbook/eda/section1/eda14.htm
- NIST/SEMATECH e-Handbook of Statistical Methods — "1.1.5. The Role of Graphics". https://www.itl.nist.gov/div898/handbook/eda/section1/eda15.htm
- NIST/SEMATECH e-Handbook of Statistical Methods — "1.3.2. Analysis Questions". https://www.itl.nist.gov/div898/handbook/eda/section3/eda32.htm
- John W. Tukey — "We Need Both Exploratory and Confirmatory", The American Statistician, Vol. 34, No. 1 (1980), pp. 23-25. https://www.tandfonline.com/doi/abs/10.1080/00031305.1980.10482706
- OpenIntro — Introduction to Modern Statistics (2nd ed.), Chapter 5: Exploring numerical data. https://openintro-ims.netlify.app/explore-numerical.html

## Related Topics

- Datasets (data-science-and-ai-literacy:foundations:datasets)
- Data Cleaning (data-science-and-ai-literacy:foundations:data-cleaning)
- Visualization (data-science-and-ai-literacy:foundations:visualization)
- Correlation (data-science-and-ai-literacy:foundations:correlation)
- Prediction (data-science-and-ai-literacy:foundations:prediction)

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:exploratory-data-analysis
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
