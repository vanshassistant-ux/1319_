# Correlation

## In 30 Seconds

Correlation describes when two variables move together: as one changes, the other tends to change in a predictable way. Positive correlation means they rise and fall together; negative means one rises while the other falls. Strength is how tightly the pattern holds, and a scatterplot shows both at a glance. But correlation is not causation: ice cream sales and drowning rates both climb in summer because hot weather drives both. Data science models find correlations; deciding what they mean is human work.

## Why This Matters

Correlation is the most common relationship you will meet in data: claims that two things move together appear in news, marketing, health advice, and product recommendations. Understanding what correlation can and cannot tell you protects you from the most frequent error in reading data, mistaking a pattern for a cause. It matters academically because later topics, prediction, machine learning, and evaluating models, all build on the idea that patterns in data can be learned and used. It matters practically because AI systems constantly surface correlations, and the person who can ask what else could explain this pattern is the person who reads them correctly.

## Learning Objectives

- Define correlation as the tendency of two variables to change together in a predictable way.
- Distinguish positive from negative correlation and give an original example of each.
- Explain how strong and weak correlations differ in how closely the pattern holds.
- Describe how a scatterplot reveals the direction and strength of a relationship between two variables.
- Explain why correlation does not imply causation, naming the third-variable, reverse-causation, and coincidence alternatives.
- Apply the correlation-is-not-causation check to a claim made about data.

## The College Version

### What correlation means

Correlation is about pairs. Whenever a dataset records two variables on the same cases, a student's height and weight, a city's temperature and its ice cream sales, the two variables can be studied together as a pair. Correlation describes the way such pairs move together: when one variable changes, the other tends to change in a predictable way. "Tends" matters, because real relationships are rarely perfect. Height and weight are correlated, yet two people of exactly the same height can weigh different amounts. Correlation is a description of a tendency in data, not a promise about any single case.

### Positive and negative correlation

A positive correlation means the two variables move in the same direction: when one rises, the other tends to rise, and when one falls, the other tends to fall. Early in the growing season, the more weeks a gardener has watered a row of tomato plants, the taller the plants tend to be, so watering and plant height are positively correlated. A negative correlation means they move in opposite directions: when one rises, the other tends to fall. At a campus drink stand, hot drink sales climb as the outdoor temperature drops, so temperature and hot drink sales are negatively correlated. Both kinds are real patterns; they differ only in direction. And "tends" still applies: one slow afternoon can sell fewer hot drinks on a cold day without breaking the overall pattern.

### Strong and weak

Strength is how closely the pattern holds. A strong correlation is a tight pattern: the points on the chart cluster close to a clear trend, so knowing one variable narrows the other down considerably. A weak correlation is a loose one: the points scatter widely around the trend, and knowing one variable tells you little about the other. Strength and direction are separate properties, and a strong negative correlation is every bit as real a pattern as a strong positive one. Correlation is often summarized on a scale from -1 to +1: the ends are perfect patterns, one in each direction, and zero means no straight-line pattern. The measure tracks straight-line patterns, so a strong curved pattern, such as a U shape, can look weak by this measure, which is one reason to always look at the chart rather than trust a number alone.

### Seeing correlation with scatterplots

The standard way to see a correlation is a scatterplot: one point per observation, positioned by its two values, one variable on each axis. A rising cloud of points shows a positive correlation; a falling cloud shows a negative one; and how tightly the points cluster shows the strength. The scatterplot keeps the pairs together, which is exactly what correlation is about: it is the pairing, not the two variables separately, that reveals the relationship. How charts are designed and read belongs to the visualization topic; here it is enough to know that the scatterplot is the natural home of correlation.

### Correlation is not causation

Here is the core lesson. Ice cream sales and drowning rates both rise in summer. The two variables are genuinely correlated. Does ice cream cause drowning? No. Hot weather is a third variable that drives both: warm days send people to the beach and to the ice cream stand, so both numbers climb together without one causing the other. This is the third-variable problem. It is so common that statisticians state the rule bluntly: correlation does not imply causation. The U.S. government's own statistical handbook puts it even more strongly: no statistical procedure, scatterplot included, proves cause and effect; such proof is beyond the realm of statistics. Correlation describes what happens together; it never says why.

### Other explanations: reverse causation and coincidence

Any correlation between X and Y has at least four candidate explanations. One: X causes Y. Two: a third variable causes both. Three: reverse causation, meaning the direction is backward and Y actually influences X. A hospital may find that patients who arrive by ambulance tend to have worse outcomes; the likely story is not that ambulances worsen patients, but that sicker patients are more likely to need an ambulance. Four: coincidence, a chance alignment of two unrelated numbers, such as a town's starling population and its county's streaming subscriptions drifting upward in the same years. Listing the candidates is the first step in checking any claim that two things move together.

### Why this matters in data science and AI

Machine learning models are pattern finders: they learn correlations from data and use them to do useful work, and what models do with correlations is the prediction topic. But a model that finds a correlation does not know why the correlation exists. Whether the pattern reflects a cause, a shared third variable, reverse causation, or chance is a question for people: the analyst who inspects the data, the domain expert who understands the process, and the designer who decides what the model may be used for. Correlation literacy is therefore not a math skill but a thinking skill, and it sits at the center of data science.

## Key Vocabulary

- **correlation** — The tendency of two variables to change together in a predictable way, so that knowing one helps anticipate the other.
- **positive correlation** — A pattern in which two variables tend to move in the same direction, both rising together or both falling together.
- **negative correlation** — A pattern in which one variable tends to rise while the other falls, so the two move in opposite directions.
- **scatterplot** — A chart that shows the relationship between two variables by plotting one point per observation, positioned by its two values.
- **linear relationship** — A relationship whose points cluster along a straight line; the kind of pattern correlation measures best.
- **third variable** — An unmeasured factor that drives both of the correlated variables, creating a pattern neither one causes; also called a confounding variable.
- **reverse causation** — The situation in which the apparent direction of a relationship is backward, so the second variable actually influences the first.
- **bivariate data** — Observations that record two variables on each case, such as a person's height and weight, kept together so the pairing is not lost.

## Eli-10

Correlation is when two variables move together: when one changes, the other tends to change in a predictable way. If they rise and fall together, that is a positive correlation; if one rises while the other falls, that is negative. A correlation can be strong, meaning the pattern holds tightly, or weak, meaning it barely holds at all. A scatterplot, one dot per observation, shows both direction and strength at a glance. The catch is that moving together is not the same as causing. Ice cream sales and drowning rates both climb in summer, not because ice cream causes drowning but because hot weather drives both. Data science models find these patterns; people decide what they mean.

## Eli's Analogy

Picture two friends walking side by side. When one speeds up, the other usually speeds up; when one stops to look in a shop window, the other stops too. Watch them long enough and you could guess one from the other. That is correlation: the two move together, and the pattern is tight or loose depending on how in step they are. But watching them never tells you who sets the pace. One friend may be leading, or both may be hurrying toward the same bus stop.

The friends can copy each other on purpose; data points cannot decide anything, so a correlation in data is only a pattern, never an intention. Two friends walking together are obviously connected, but two variables can move together for no reason at all, by coincidence, which the walking picture hides. And a perfect match in step tells you nothing about who is taller: correlation shows how two things move together, not how strongly one changes the other.

## Worked Example

A small-town café tracked two numbers each week for a year: cups of coffee sold and pages printed at the public library next door. Both climbed in exam weeks and dipped in quiet weeks, and the points on the scatterplot clustered along a rising trend. That is a positive correlation, and a fairly strong one. Does coffee cause people to print more pages? Almost certainly not. A third variable, the exam calendar, drives both: students study more, so they drink more coffee and print more notes. Could printing pages cause coffee drinking? Only if the library were the café's only customer, which it is not. The pattern is real; the story behind it still needs a human to figure out.

## Common Mistakes

- **Concluding that if two variables move together, one must cause the other.** A shared pattern can come from a third variable, reverse causation, or coincidence. Correlation describes what happens together, not why.
- **Treating a negative correlation as if it meant the variables have no relationship.** Negative correlation is a real relationship: the variables move in opposite directions, like temperature and hot drink sales.
- **Reading a strong correlation as a strong effect.** Strength describes how tightly the pattern holds. It does not say how much one variable changes when the other does, and it does not say which variable, if either, is doing the causing.
- **Assuming a weak correlation means nothing is going on.** The standard measure captures straight-line patterns, so a strong curved relationship can show up as a weak correlation. Check the scatterplot, not just the number.

## Compare / Contrast

- **Positive correlation vs. Negative correlation** — Both describe a consistent pattern, but positive means the variables move in the same direction while negative means they move in opposite directions.
- **Correlation vs. Causation** — Correlation is an observed pattern of two variables moving together; causation is a claim that one brings about the other, a claim no correlation alone can support.
- **Strong correlation vs. Weak correlation** — Both have a clear direction; strong means the pattern holds tightly with points clustered together, weak means it barely holds with points scattered widely.

## Key Takeaway

Correlation describes how two variables move together, the direction and the strength of the pattern, but never why. A correlation may reflect a cause, a shared third variable, reverse causation, or coincidence; telling these apart is human judgment, not a statistic.

## Practice Question Bank

**Q1.** What does a positive correlation between two variables mean?

- A. When one variable rises, the other tends to fall.
- B. When one variable rises, the other tends to rise as well.
- C. One variable causes the other to change.
- D. The two variables are unrelated.

**Key: B.** Positive correlation means the variables move in the same direction: high values of one tend to come with high values of the other, and low with low. Falling together is a negative correlation (A). Correlation describes a pattern, not a cause, so (C) overreaches. A consistent pattern rules out (D).

**Q2.** Ice cream sales and drowning rates both rise during summer. Why is it wrong to conclude that ice cream causes drownings?

- A. Because the two numbers are measured in different units.
- B. Because drowning statistics are unreliable in winter.
- C. Because warm weather is a third variable that drives both ice cream sales and time spent swimming.
- D. Because ice cream sales and drowning rates are not really correlated.

**Key: C.** Summer heat pushes both numbers up: warm days increase ice cream buying and send more people into the water, so the correlation is real but neither variable causes the other. Different units (A) do not block causation, winter statistics (B) are beside the point, and (D) is false, the correlation is real.

**Q3.** A food truck records its sales for a year and finds that as the outside temperature drops, sales of hot soup rise. What kind of correlation is this?

- A. Positive.
- B. Strong.
- C. Causal.
- D. Negative.

**Key: D.** One variable falls while the other rises, so temperature and soup sales are negatively correlated. Positive (A) would mean both move in the same direction. Strong (B) describes how tightly the pattern holds, not its direction. Causal (C) is a claim no correlation alone can support.

**Q4.** In a scatterplot, what does each point represent?

- A. One observation, located by its values on the two variables.
- B. The average of all the observations.
- C. One variable, plotted over time.
- D. The difference between the two variables.

**Key: A.** Each point is one case with two measured values, one on each axis, which is how a scatterplot keeps pairs together. A point is not an average (B), not a single variable (C), and not a computed difference (D).

**Q5.** A hospital notices that patients who arrive by ambulance tend to have worse outcomes than patients who arrive by car. Someone concludes that ambulances make patients sicker. What is the most likely alternative explanation?

- A. Reverse causation: people who are already sicker are more likely to need an ambulance.
- B. Coincidence: ambulance arrival and patient outcome have never been linked.
- C. The hospital's records are incomplete.
- D. Ambulance drivers are less careful than car drivers.

**Key: A.** The arrow probably points backward: severity drives ambulance use, so the correlation is real but the direction is reversed. Coincidence (B) is a general possibility but far less likely here; (C) invents a records problem with no evidence, and (D) makes an unsupported claim about drivers.

## Sources

- NIST/SEMATECH e-Handbook of Statistical Methods — "1.3.3.26. Scatter Plot". https://www.itl.nist.gov/div898/handbook/eda/section3/scatterp.htm
- OpenIntro — "Introduction to Modern Statistics (2e), Section 7.1: Fitting a line, residuals, and correlation". https://openintro-ims.netlify.app/model-slr.html
- Online Statistics Education — "Describing Bivariate Data: Introduction". https://onlinestatbook.com/2/describing_bivariate_data/intro.html
- OpenStax — "Introductory Statistics, Section 12.2: Scatter Plots". https://openstax.org/books/introductory-statistics/pages/12-2-scatter-plots
- Wikipedia — "Correlation does not imply causation". https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation

## Related Topics

- Visualization (data-science-and-ai-literacy:foundations:visualization)
- Prediction (data-science-and-ai-literacy:foundations:prediction)
- Exploratory Data Analysis (data-science-and-ai-literacy:foundations:exploratory-data-analysis)
- Outliers (data-science-and-ai-literacy:foundations:outliers)
- Machine Learning Basics (data-science-and-ai-literacy:foundations:machine-learning-basics)

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:correlation
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
