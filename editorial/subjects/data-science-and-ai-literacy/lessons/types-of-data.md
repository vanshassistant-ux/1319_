# Types of Data

## In 30 Seconds

Data comes in two broad families. Quantitative data is numbers you can measure, like a rainfall total or a book's price. Qualitative data is words, categories, or images, like a sky condition or a book's genre. Analysts then sort further: categorical variables name groups, numerical variables record quantities, and numerical variables split into discrete counts and continuous measurements. Four classic scales — nominal, ordinal, interval, and ratio — describe how much meaning a value carries, and that meaning decides what analysis is allowed.

## Why This Matters

The type of a value decides what questions you may ask of it. Averaging a price is routine; averaging a genre is nonsense, yet people do it anyway with coded categories. Choosing an analysis that fits the type separates sound conclusions from confident nonsense, in coursework, at work, and when reading a news story about a survey. Knowing the four scales of measurement also sharpens how you read any rating, score, or sensor reading. Later lessons on cleaning, visualizing, and modeling data all assume you can say whether a column holds names, ordered labels, counts, or measurements.

## Learning Objectives

- Distinguish quantitative from qualitative data and give an original example of each.
- Classify a given variable as categorical or numerical and justify the choice.
- Explain the difference between discrete and continuous numerical data with original examples.
- Identify nominal, ordinal, interval, and ratio scales and give one original example of each.
- Apply the principle that data type determines which analyses are meaningful.

## The College Version

### Quantitative versus qualitative: the fundamental split

The first question an analyst asks about any piece of information is whether it is a number or not. Quantitative data is measured in terms of numbers: a weather station's rainfall total of 12.4 millimeters, a bookstore's price of $14.99, a runner's finish time of 41 minutes. Qualitative data expresses attributes instead — words, categories, images, or sounds. The same weather station records a sky condition of "overcast"; the bookstore logs a genre of "mystery"; a runner's route is described as "hilly." The values of qualitative data are names, not quantities, and they do not imply any numeric ordering. This split is about meaning, not about how a value is stored: area codes and ZIP codes are written as digits, yet the average, sum, or difference of area codes has no clear meaning, so analysts treat them as categorical labels, not numbers. The qualitative-quantitative distinction is the oldest and most fundamental way to sort data, and every other classification in this lesson refines it.

### Categorical versus numerical variables

A second, overlapping vocabulary is the one most analysts use day to day. A categorical variable takes named groups as its values, and those possible values are called the variable's levels. For the bookstore, genre is categorical with levels such as Fiction, Mystery, Science, and Biography; for the weather station, sky condition is categorical with levels like Clear, Overcast, and Rainy. A numerical variable takes quantities for which arithmetic is sensible: adding, subtracting, and averaging prices or rainfall totals all carry meaning. The two vocabularies line up closely: qualitative data is sometimes called categorical, and quantitative data is numerical. The labels differ in emphasis — "qualitative" stresses that the values are attributes, "categorical" stresses that the values group observations into classes — but both point at the same family. When in doubt, ask what a summary would mean: a count of books per genre is a sensible categorical summary, while an average genre is not a quantity anyone can interpret.

### Discrete and continuous numbers

Numerical data splits again into discrete and continuous. Discrete values come only in jumps. Counts are the clearest example: the weather station records 3 rainy days last week, never 3.4; the bookstore sells 42 copies of a title, never 42.6. A discrete variable can only take whole, separated values. Continuous values can take any measurement within a range. Temperature, rainfall depth, price, and height are continuous: between 12.3 and 12.4 millimeters of rain there is room for 12.35, and a runner's time can land anywhere on a scale. The distinction survives rounding — recording a continuous value to one decimal place does not make it discrete; it is still a measurement that could, in principle, fall anywhere in its range. Even the U.S. government's statistical handbook describes factors in an experiment as either continuous or discrete, which shows how fundamental the split is to the practice of analysis.

### Four scales of measurement

Statisticians sharpen the picture further with four classic scales, each adding meaning to the one before. A nominal scale simply names or categorizes: gender and favorite color are the textbook examples, and the bookstore's genre column is nominal. Order plays no part, so the only honest summaries are counts and the most common category. An ordinal scale orders its categories: a customer rating from 1 to 5 stars, or satisfaction running from very dissatisfied to very satisfied, has a real direction, but the gaps between adjacent values are not guaranteed to be equal — the mental step from 1 star to 2 stars is not proven to equal the step from 4 to 5. An interval scale has equal gaps but no true zero. Fahrenheit temperature is the classic example: the difference between 20 and 30 degrees is the same as between 70 and 80, yet zero is arbitrary, so a ratio like "twice as hot" has no physical meaning. A ratio scale adds a true zero, which makes ratios meaningful: a 4-kilogram sack really is twice a 2-kilogram sack, and a $20 book costs twice a $10 one. Each scale answers which operations respect the data's meaning.

### Why the type matters

The type of data is not a label to file away; it is a contract that decides what analysis makes sense. You can average a ratio-level price and call the result a mean price. You cannot average a nominal category — the mean of Fiction and Mystery is not a thing. For ordinal ratings, a median or the share of customers at each star level is defensible, while a mean quietly assumes equal spacing the data never promised. The general principle: choose summaries and comparisons that respect the meaning the scale carries, and state the type before doing the math. This habit prevents the classic blunder of averaging coded categories and quietly treating ordered labels as exact measurements. Every later stage of the data workflow — cleaning, describing, visualizing, and modeling — inherits these choices, because a chart of a nominal column and a chart of a continuous column answer different questions. Naming the type first is the cheapest way to keep the rest of an analysis honest.

## Key Vocabulary

- **qualitative data** — Information expressed as attributes such as words, categories, images, or sounds, whose values carry no numeric ordering.
- **quantitative data** — Information measured in numbers, such as height, price, or rainfall, where arithmetic like averaging is meaningful.
- **categorical variable** — A variable whose values are named groups, called levels, such as a book's genre or a sky condition.
- **numerical variable** — A variable that takes quantities for which adding, subtracting, or averaging is sensible, such as price or rainfall.
- **discrete variable** — A numerical variable that takes only separated values, typically whole-number counts such as rainy days or copies sold.
- **continuous variable** — A numerical variable that can take any value within a range, such as temperature, height, or a finish time.
- **nominal scale** — A level of measurement that names or categorizes without any order, such as genre or favorite color.
- **ordinal scale** — A level of measurement with ordered categories whose gaps are not guaranteed equal, such as a 1-to-5 star rating.
- **interval scale** — A level of measurement with equal gaps but no true zero, such as Fahrenheit temperature, where ratios are not meaningful.
- **ratio scale** — A level of measurement with a true zero, such as mass or price, where ratios like "twice as heavy" are meaningful.

## Eli-10

When an analyst opens a spreadsheet, the first question is: what kind of thing is each column? Some columns hold numbers you can add and average, like prices or rainfall. Others hold names, like book genres or sky conditions. Even among numbers there is a difference: a count like days of rain jumps in whole steps, while a measurement like temperature flows through every value in between. Statisticians give these differences names — nominal, ordinal, interval, and ratio — that tell you how much meaning a value really carries. The rule to remember is simple: the kind of data decides what you are allowed to do with it.

## Eli's Analogy

Think of data types as measuring tools. A name tag labels a drawer, a ruler measures length, and a scale weighs things. You would not use a ruler to label a drawer or a name tag to weigh a parcel — each tool answers only the questions it was built for. Data types work the same way: a category answers "which group?", a count answers "how many?", and a measurement answers "how much?".

The analogy is loose because real data often mixes types: a survey stores a rating as a number but treats it as an ordered label, and some values can be re-coded from one type to another. Types describe the meaning of values, not physical tools, and no single tool answers every question a dataset can raise.

## Worked Example

The Corner Shelf bookstore logs every sale in four columns: genre (Fiction, Mystery, Science, Biography), price in dollars, customer rating from 1 to 5 stars, and copies sold. Genre is categorical and nominal — the categories carry no order. Rating is ordinal: 5 stars beats 1 star, but the jump from 1 to 2 stars is not proven equal to the jump from 4 to 5. Price is numerical and continuous — a book can cost $12.99 or $24.50, with any value in between. Copies sold is numerical and discrete — the shop sells 2 or 3 copies, never 2.4. Because price is ratio-level, the owner can report the average price and say a $20 book costs twice a $10 one. For genre, the only honest summary is which genre sells most often.

## Common Mistakes

- **Averaging a coded category**, like computing the mean of region codes or jersey numbers. Sums and averages are meaningful only for numerical data. Summarize categories with counts, proportions, or the most common value.
- **Treating ordinal gaps as equal**, such as calling a 4-star book twice as good as a 2-star book. Ordinal data shows order, not spacing. Report medians, ranks, or shares per level instead of means and exact differences.
- **Calling a count continuous**, for example reporting 3.7 rainy days as an average. Counts are discrete: they move in whole steps. Only measurements that can take any value within a range are continuous.
- **Assuming any stored number is quantitative**, such as averaging ZIP codes. Digits do not make a value quantitative. If the average of a column has no clear meaning, the column is categorical, whatever it looks like.

## Compare / Contrast

- **qualitative data vs quantitative data** — Qualitative data records attributes like words or categories; quantitative data records numbers that support arithmetic.
- **discrete variable vs continuous variable** — A discrete variable takes only separated values, typically whole-number counts; a continuous variable can take any value within a range.
- **nominal scale vs ordinal scale** — Both categorize, but ordinal adds a real order to its categories while nominal does not.
- **interval scale vs ratio scale** — Both have equal gaps, but ratio has a true zero, which makes ratios such as "twice as heavy" meaningful.

## Key Takeaway

Data type is not a label; it is a contract for what analysis is allowed. Name the type first — qualitative or quantitative, categorical or numerical, discrete or continuous, and which scale — then choose only the summaries that the meaning permits.

## Practice Question Bank

1. **Which pair best describes the fundamental split in data types?**
   - A. Quantitative data (numbers) and qualitative data (words, categories, images, sounds)
   - B. Large datasets and small datasets
   - C. Stored data and deleted data
   - D. Fast data and slow data
   - **Answer: A.** The fundamental split is between quantities, which are numbers, and qualities, which are attributes expressed as words, categories, images, or sounds. Size, storage, and speed are separate concerns.

2. **A weather station records 12.4 mm of rain, a sky condition of "overcast", and 5 rainy days last week. How are these three values typed?**
   - A. All three are continuous numerical values
   - B. All three are categorical values
   - C. Rainfall is categorical; sky condition and rainy days are numerical
   - D. Rainfall is continuous numerical; sky condition is qualitative; rainy days are discrete numerical
   - **Answer: D.** Rainfall can take any value in a range, so it is continuous; sky condition is a named category, so it is qualitative; rainy days is a whole-number count, so it is discrete.

3. **A bookstore analyst wants to summarize a column of customer ratings that run from 1 to 5 stars. The ratings are ordinal. Which summary is appropriate?**
   - A. The average rating, reported to two decimals, as an exact measurement
   - B. The claim that a 4-star book is twice as good as a 2-star book
   - C. The median rating or the share of customers giving each star level
   - D. No summary at all, because ordinal data cannot be analyzed
   - **Answer: C.** Ordinal values have a real order but unknown spacing, so medians and counts per level are appropriate; means and ratio claims assume equal gaps that ordinal data does not guarantee.

4. **A spreadsheet stores customers' ZIP codes as numbers, and an analyst computes the average ZIP code to describe where customers live. What is the problem?**
   - A. ZIP codes are too large to be stored as numbers
   - B. ZIP codes are labels, not quantities, so an average has no clear meaning
   - C. Averaging ZIP codes is fine because every value is a digit
   - D. ZIP codes are ordinal, so only the median should be reported
   - **Answer: B.** Digits do not make a value quantitative: the average, sum, and difference of ZIP codes have no clear meaning, so they behave as categorical labels rather than numbers.

5. **Which statement about the four scales of measurement is correct?**
   - A. A ratio scale has a true zero, so ratios such as "twice as heavy" are meaningful
   - B. On an interval scale, the ratio of two values is always meaningful
   - C. Nominal scales order their categories from least to most
   - D. Ordinal scales guarantee equal gaps between adjacent categories
   - **Answer: A.** Ratio scales have a true zero, which makes ratios meaningful; interval scales do not, nominal scales carry no order, and ordinal scales do not guarantee equal gaps.

## Sources

- NIST/SEMATECH e-Handbook of Statistical Methods — 5.5.9. An EDA approach to experimental design. NIST / SEMATECH (U.S. Department of Commerce). https://www.itl.nist.gov/div898/handbook/pri/section5/pri59.htm (reference only; also read the 2012 printer-friendly full-handbook PDF, DOI 10.18434/M32189).
- Online Statistics Education: An Interactive Multimedia Course of Study — Variables. Rice University (David M. Lane et al.). https://onlinestatbook.com/2/introduction/variables.html (reference only).
- Online Statistics Education: An Interactive Multimedia Course of Study — Levels of Measurement. Rice University (Dan Osherson and David M. Lane). https://onlinestatbook.com/2/introduction/levels_of_measurement.html (reference only).
- OpenIntro — Introduction to Modern Statistics: Hello data. OpenIntro. https://openintro-ims.netlify.app/data-hello.html (reference only).

## Related Topics

- data-science-and-ai-literacy:foundations:what-data-science-is
- data-science-and-ai-literacy:foundations:structured-versus-unstructured-data
- data-science-and-ai-literacy:foundations:datasets
- data-science-and-ai-literacy:foundations:data-collection
- data-science-and-ai-literacy:foundations:visualization

## Editorial Metadata

- **Topic id:** data-science-and-ai-literacy:foundations:types-of-data
- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Provenance:** EliExplains original synthesis; source-verified 2026-08-21; reference-only sources, no source prose adapted; all examples original (invented weather-station and bookstore records).
