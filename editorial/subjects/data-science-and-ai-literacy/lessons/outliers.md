# Outliers

## In 30 Seconds

An outlier is a value that sits far outside the rest of the data: one day of 99,999 steps in a month where every other day was between 4,000 and 9,000. Outliers come from measurement errors, data-entry mistakes, or real rare events. They can pull averages and models off course, but sometimes the outlier is the story. Analysts verify the value, correct it if it is wrong, keep it with a note, or analyze with and without it — and never delete one silently.

## Why This Matters

Outliers decide how trustworthy an analysis looks. One extreme value can drag an average thousands of steps in the wrong direction, bend a model's future guesses, or hide a real event — a sensor that caught a fire, a week of record sales, a patient whose vitals suddenly changed. Reports and dashboards are built from numbers like these, and readers rarely see the outlier or the decision made about it. Knowing how to investigate an unusual value and how to report what was done turns a confusing blip into evidence. It is also a reading skill: when you see a claim about averages, you can ask whether an outlier quietly moved the number.

## Learning Objectives

- Define an outlier as a value that lies far outside the rest of a dataset.
- Distinguish the three common causes of outliers: measurement errors, data-entry mistakes, and genuine rare events.
- Explain when an outlier is a signal worth following and when it is noise to treat cautiously.
- Describe how a single extreme value can pull averages and models off course.
- Evaluate the main handling options for outliers — verify, correct, keep and note, analyze with and without — including their trade-offs.
- Apply the principle that outlier decisions must be documented, never made silently.

## The College Version

### What counts as an outlier

An outlier is a value that lies far outside the rest of the values in a dataset. The NIST e-Handbook of Statistical Methods describes an outlier as an observation that lies an abnormal distance from other values in a sample, and it is honest about the catch: deciding what counts as abnormal is left to the analyst. Consider a month of daily step counts where most entries fall between 4,000 and 9,000 — and then one day shows 99,999. That value is not merely the largest; it sits outside the neighborhood of every other entry. The judgment is usually easy at the extremes, but the boundary is not a law of nature. Different software and different analysts use different rules for flagging outliers, and a value that looks extreme in one dataset may be ordinary in another. The useful way to think about an outlier is not "a number the computer flagged" but "a value far enough apart that it deserves a closer look."

### Where outliers come from

Most outliers come from one of three places. First, measurement errors: the equipment that recorded the value did not work as intended. A warehouse temperature logger left in direct sunlight reads 40°C while the others read 21°C; a fitness tracker worn while washing dishes logs a few thousand phantom steps; a rain gauge overcounts after a bird nests in its funnel. Second, data-entry mistakes: a person typed or imported the value incorrectly. A delivery clerk keys 1,400 instead of 140 into the parcel-weight log; a survey response of 12,000 is entered when the form said 1,200. Third, genuine rare events: the value is real, but the situation was unusual. A bookstore sells ten times its normal volume the day a beloved author's final memoir is released; a ski resort logs its busiest weekend in a decade during a record snowstorm. Each cause leaves the same visible symptom — a value far from the others — but very different meanings.

### Signal or noise?

The central judgment about any outlier is whether it is signal or noise. Signal means the value is telling you something real. A heat sensor in a warehouse that logs a reading far beyond anything in its previous year of data is not necessarily broken — it may have caught a small fire, and the outlier is the story. An emergency room's monitoring system flags a patient whose vital signs sit far outside the normal range; that flag is the point of the system. Noise means the value is meaningless variation — a typo, a mis-synced device, a glitch — and it muddies the picture. The crucial point is that you cannot tell signal from noise by staring at the number. A value of 99,999 steps might be a real ultramarathon day or a duplicated import. The judgment requires investigation: check the source, the equipment, the person who recorded it. That is why the NIST handbook says outliers should be investigated carefully: they often contain valuable information about the process under study or about the data-gathering and recording process.

### How outliers pull analysis off course

Most summaries and models are built from every value in the dataset, which is why a single extreme value can move them. An average uses every number that feeds into it, so one enormous value drags the average toward itself. In a dataset of loan interest rates, one unusually high rate shifts the average even though the rest cluster tightly; open statistics textbooks use exactly this example to show how the mean responds to an extreme observation. The same principle applies to models: a model learns patterns from the data, and a value that bends the pattern can bend the model's future guesses. Outliers also stretch measures of spread: the range of a dataset is set by its most extreme values, so one odd entry can make a tightly packed dataset look wildly variable. When an analysis contains significant outliers, statisticians sometimes turn to techniques designed not to be unduly affected by a few extreme values. The general principle: one unusual value can move the numbers, so know what they are doing before you trust them.

### What to do with an outlier

Standard practice offers four moves, each with a price. Verify the value: go back to the original record, the sensor log, the form, or the person who entered it. It is the only move that can tell you what the value really is; it costs time and effort, and sometimes the source is gone. Correct the value if it is wrong: if the true value is confirmed, fix the entry. This is only legitimate when the correct value is actually known — correcting with a guess invents data. Keep it and note it: leave the value in the dataset, flag it, and mention it in the report so readers can see it and its influence. This is honest, but the value still pulls on averages and models, so the note must say so. Analyze with and without it: run the analysis both ways and compare, showing exactly how much the outlier matters. This costs extra work and requires reporting both versions. What is never acceptable is silently deleting the value. The NIST guidance is explicit: we typically do not want to simply delete an outlying observation; before considering elimination, understand why it appeared and whether similar values are likely to appear again. Deleting without documentation changes the dataset invisibly, and every later result inherits a decision no one can see.

## Key Vocabulary

- **outlier:** a value that lies far outside the rest of the values in a dataset, far enough that it deserves investigation.
- **measurement error:** a wrong value caused by equipment that failed or measured incorrectly, such as a temperature logger left in direct sunlight.
- **data-entry error:** a mistake made while typing or importing a value by hand, such as keying 1,400 when the true weight was 140.
- **genuine rare event:** a real but unusual occurrence that produces an extreme value, such as a once-in-a-decade snowstorm boosting a resort's visitor count.
- **signal:** information in the data that reflects something real and worth acting on, such as a sensor reading that catches a fire.
- **noise:** variation in a dataset that carries no useful information about what is being measured, such as a typo or a device glitch.
- **robust:** describing a statistical method or summary that is not unduly affected by a few extreme values.
- **flag:** to mark a suspicious value for attention without removing it, so everyone who uses the dataset knows it was noticed.

## Eli-10

An outlier is a value that sticks out — one day of 99,999 steps in a month of 4,000-to-9,000 step days. Before you do anything with it, ask why it is there. It might be a mistake: a sensor glitched, someone typed the wrong number, or a file imported twice. It might be real: a record storm, a fire, a once-in-a-decade sales day. The number alone cannot tell you which. Averages and models use every value, so one extreme number can quietly pull the results toward itself. The careful routine is short: check the value against the source, fix it if it is wrong, keep it with a note if you cannot check it, and see what the analysis looks like with and without it. Whatever you decide, write the decision down. Silently deleting an outlier is the one move that is never okay.

## Eli's Analogy

Think of a class photo where everyone lines up by height. One student is standing on a crate and towers over the rest. The photo is not lying about what it captured — but the lineup is not really telling you that student is tall. Before you conclude anything about the class's heights, you would check whether the crate was there, ask the photographer, and maybe retake the shot. If the student really is exceptionally tall, that is interesting and worth reporting; if it was a crate, the photo misled everyone who saw it.

The analogy has limits: in a photo you can see the crate, but in a dataset the cause of an outlier is usually invisible — you have to go find it in logs, forms, or the people involved. And unlike a retaken photo, a dataset often cannot be re-collected; once the measurement opportunity passes, the only honest moves are to verify, correct, keep with a note, or analyze both ways.

## Worked Example

Maya is preparing a month of daily step counts for a walking study. Twenty-nine days fall between 3,800 and 9,400 steps, but one entry reads 99,999. Before touching the dataset, she checks the phone app's export log and finds that the same day was imported twice during a failed sync; the real total was 8,412 steps. She corrects the entry to 8,412, records the correction in the study's data log, and compares the month's average with and without the bad value: about 10,000 steps with it, about 6,900 after the fix — a difference of thousands caused by one duplicated record. Her report states both numbers and the correction, so no reader is left wondering.

## Common Mistakes

- Deleting an outlier because it looks wrong, without checking where it came from. A value that breaks the pattern may be the most important fact in the dataset — a fire, a record day, a sudden change in a patient. Investigate first, and delete only with evidence and a written reason.
- Assuming every outlier is a mistake. Some outliers are genuine rare events, and treating them as errors erases the story the data was telling. Check the source before deciding the value is noise.
- Replacing a suspicious value with a guessed "correct" number. If you do not know the true value, a guess is invented data that will quietly shape every result. Only correct when the real value is confirmed; otherwise keep the value and flag it.
- Reporting averages and model results as if an outlier had never been there. If one extreme value moves the numbers, say so — report the analysis with and without it, or state plainly that the outlier was included and why.

## Compare / Contrast

- **An outlier as signal vs. an outlier as noise:** a heat-sensor spike that catches a fire is information; the same-looking spike caused by a loose wire is noise. The numbers look identical — only investigation tells them apart.
- **Keeping an outlier with a note vs. deleting it:** keeping preserves the information and the dataset's honesty, but the value still pulls on averages; deleting removes the pull but changes what the dataset represents. The note is what lets readers judge.
- **An average vs. a middle value:** an average uses every value, so one extreme observation drags it; a middle value depends only on the ordering of the data and barely moves. Summaries that resist outliers are called robust.

## Key Takeaway

An outlier is a value far outside the rest of the data — sometimes a mistake, sometimes the story. Verify it, correct it if it is wrong, keep it with a note, or analyze with and without it; never delete it silently, and always document the decision.

## Practice Question Bank

1. Which statement best defines an outlier? **Answer: C.**
2. A running club's monthly mileage log shows 12,000 km for one member's week, while every other entry is between 20 and 60 km. What is the most sensible first step? **Answer: A.**
3. A warehouse heat sensor logs one reading of 210°C on an afternoon when every other reading that week is between 21°C and 24°C. An analyst investigates and finds the sensor was working correctly and a small fire had started near the ceiling. Which statement best describes this outlier? **Answer: B.**
4. An analyst studies a store's daily sales and finds that one day — a once-a-decade event — was ten times higher than any other. The average sales figure changes noticeably when that day is included. What is the most defensible way to report the analysis? **Answer: D.**
5. Which statement states the general principle for handling outliers? **Answer: C.**

## Sources

- [NIST/SEMATECH e-Handbook of Statistical Methods — 1.3.5.17. Detection of Outliers](https://www.itl.nist.gov/div898/handbook/eda/section3/eda35h.htm)
- [NIST/SEMATECH e-Handbook of Statistical Methods — 7.1.6. What are outliers in the data?](https://www.itl.nist.gov/div898/handbook/prc/section1/prc16.htm)
- [OpenIntro — Introduction to Modern Statistics: Exploring numerical data (Chapter 5)](https://openintro-ims.netlify.app/explore-numerical.html)

## Related Topics

Data Collection; Datasets; Data Cleaning; Missing Data; Exploratory Data Analysis.

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-21 using two NIST e-Handbook sections (EDA outlier detection; product-and-process outlier guidance) and OpenIntro's Introduction to Modern Statistics chapter on numerical data — all read directly. Reference-only usage; all lesson prose and examples original, no source wording reproduced.
