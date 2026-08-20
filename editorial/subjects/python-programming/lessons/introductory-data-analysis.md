# Introductory Data Analysis

## In 30 Seconds

Introductory data analysis turns recorded values into a careful, checkable description. In Python, a small analysis can read rows, inspect and clean values using stated rules, calculate summaries such as a mean or median, and report what the numbers do—and do not—show. The standard library is enough for a transparent first example. A numerical pattern can be useful without proving why it happened.

## Why This Matters

Data appears in laboratory logs, course surveys, business records, and public datasets. A reader should be able to see which rows were used, how blanks or invalid values were handled, and how a reported summary was computed. That discipline makes an analysis easier to check, revise, and share. It also prevents treating a descriptive association as proof of cause.

## Learning Objectives

- Define a small reproducible data-analysis workflow.
- Distinguish raw values from cleaned analysis values.
- Compute and interpret mean and median with the standard library.
- Apply an explicit missing-value rule to a small table.
- Explain why an observed association alone does not establish causation.

## The College Version

### Start with a question and a data contract

Introductory analysis begins before a calculation. State a narrow question, identify what one row represents, and name expected fields and units. For example, a study log might have one row per week and a minutes field measured in whole minutes. A CSV file is a common way to exchange such a table. Python's `csv` module can read tabular data, but CSV is a family of conventions rather than a guarantee that every file uses identical quoting or delimiters. Inspect an input instead of assuming it is clean. Ask whether headers are present, whether a numeric field contains text, and whether repeated or missing rows have a defined meaning.

This lesson uses only the standard library. That keeps each step visible and removes any requirement to install a third-party package. Larger projects may choose specialized tools, but the reasoning remains: define the unit, inspect the values, state rules, and preserve the path from input to output.

### Clean by applying recorded rules

Cleaning transforms raw entries into analysis-ready values. It is not permission to quietly change inconvenient observations. Suppose a minutes column contains `30`, `45`, an empty string, and `90`. A written rule can be: strip surrounding whitespace; exclude a blank; convert remaining strings with `int`; and count usable records. A different question might require treating a blank as zero, but that is a substantive choice and must be justified rather than hidden in code. Values that cannot be converted should be reported, corrected from a source record when possible, or excluded under a stated rule.

Keep raw data separate from the cleaned list. That makes it possible to check whether the rule was applied as intended and to rerun the analysis if the rule changes. For a small example, printing the cleaned values and their count is a useful audit trail. Do not silently remove rows and then present the result as though it summarizes every original row.

### Describe, then limit the conclusion

For numeric data, `statistics` supplies common descriptive functions. `mean(values)` calculates the arithmetic mean. `median(values)` gives a middle value after ordering; with an even number it averages the two central values. These describe center, but neither replaces looking at individual values, the count, and spread. With `[30, 45, 90]`, the mean is 55 while the median is 45. The larger 90-minute value pulls the mean upward, so reporting both reveals more than one number. `min` and `max` add a simple range check.

A reproducible result includes the input or its stable location, the cleaning rule, executable code, and the output with a date or version when relevant. Reproducibility does not promise a universal conclusion; it lets another person rerun the same stated procedure. A pattern is not a causal explanation. If weeks with more recorded study minutes also have higher scores, prior preparation, assignment difficulty, self-selection, or chance may explain the pattern. The records can support a description of association, but establishing cause requires more evidence and a suitable study design.

### A compact standard-library workflow

Preserve raw rows; validate or clean under a written rule; calculate summaries only from the resulting values; print enough intermediate information to audit the result; and write a conclusion whose strength matches the data. This workflow is intentionally modest. It does not estimate a population parameter, prove a hypothesis, or decide whether a program caused an outcome. Its value is that it makes simple claims accurate and reviewable.

## Key Vocabulary

- **Raw data:** values as received before transformations.
- **Cleaning rule:** a stated procedure for handling formatting, missing, invalid, or duplicate entries.
- **CSV:** a text format commonly used to represent table rows and fields, with conventions that may vary.
- **Mean:** the arithmetic average.
- **Median:** a central value after ordering data.
- **Reproducibility:** the ability to rerun a documented procedure with specified inputs.
- **Association:** a measured pattern in which variables vary together, without identifying a cause.

## Eli-10

Think of a small dataset as a box of labeled notes. Before counting them, check that each note belongs in the box and that its label can be read. Write down your sorting rule rather than tossing out notes silently. Then calculate a typical number and show the notes you counted. Someone who follows the same rule with the same notes should get the same answer.

Numbers can still tell an incomplete story. If more ice-cream sales and more sunburns appear in the same weeks, sunny weather may affect both. The columns did not prove that ice cream caused sunburn. Numbers can describe a pattern; explaining why it exists needs more evidence.

## Eli's Analogy

It is like following a recipe while keeping the ingredient list and each measurement on the counter.

The analogy has a limit: a recipe is designed to cause a dish, while a dataset may only record events. Repeating calculations does not reveal a cause by itself.

## Worked Example

Consider four rows of weekly study minutes: `30`, `45`, ``, and `90`. Strip whitespace, exclude blanks rather than converting them to zero, and convert remaining entries to integers. The cleaned values are `[30, 45, 90]`, so the usable count is 3. Running:

```python
from statistics import mean, median
values = [30, 45, 90]
print(len(values), mean(values), median(values), min(values), max(values))
```

prints `3 55 45 30 90` in Python 3. The mean is 55 minutes and the median is 45 minutes. Report the excluded blank; do not claim these figures show study time caused any grade outcome.

## Common Mistakes

- **Dropping invalid rows silently:** state the rule and usable count.
- **Calling mean the only typical value:** compare it with median and inspect values.
- **Treating CSV text as numeric automatically:** validate and explicitly convert fields.
- **Calling association causation:** describe the association and state the limit.

## Compare / Contrast

| A | B | Distinction |
|---|---|---|
| Mean | Median | Mean uses every value; median uses ordered central position. |
| Cleaning | Silent deletion | Cleaning uses a stated, reviewable rule. |
| Association | Causation | Association describes a pattern; causation claims an effect. |

## Key Takeaway

A trustworthy first analysis makes its input, cleaning rule, code, summaries, and limits visible. Standard-library Python can describe a small dataset clearly, but a pattern alone is not causal proof.

## Practice Question Bank

1. What is the best reason to print cleaned values and their count? It lets a reader check which values the summaries used.
2. For `[30, 45, 90]`, what does `median(values)` return? `45`.
3. How should a blank minutes field be handled? State a rule and report the usable count.
4. What does a pattern of study minutes and scores establish? Association in the log, not cause.
5. Which module provides `mean()` and `median()`? `statistics`.

## Sources

- Python Software Foundation, [csv — CSV File Reading and Writing](https://docs.python.org/3/library/csv.html)
- Python Software Foundation, [statistics — Mathematical statistics functions](https://docs.python.org/3/library/statistics.html)
- OpenStax, [Correlation and Causation](https://openstax.org/books/introductory-statistics-2e/pages/12-2-correlation-and-causation)

## Related Topics

Lists; Dictionaries; Files; Reading Files; Small Executable Python Examples.

## Editorial Metadata

Original EliExplains synthesis, source-verified 2026-08-19. Reference-only source use; no source prose adapted. Python examples were executed with Python 3.
