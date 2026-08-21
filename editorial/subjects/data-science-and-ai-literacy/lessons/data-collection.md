# Data Collection

## In 30 Seconds

Data collection is the process of gathering information for a purpose. The main methods are measurement with instruments, surveys and questionnaires, direct observation, records and logs that organizations keep, and using existing public data. Data you gather for your own question is primary; data borrowed from someone else's work is secondary. Careful collection records where data came from, how it was gathered, and when, and it treats people's information with permission and rules. Collection can also go wrong through measurement error, biased questions, and non-response.

## Why This Matters

Every chart, model, and AI system stands on data that was collected somehow. If the collection step is careless, nothing downstream can fully repair it: a model trained on answers from a badly worded survey will repeat the survey's distortions no matter how careful the analysis is. Understanding collection methods helps you judge where numbers really come from, whether they were gathered for the question at hand or borrowed from a study with different goals, and how much to trust them. It also prepares you for later topics, because sampling, cleaning, and privacy all assume you know how the data got here in the first place.

## Learning Objectives

- Name the main data collection methods and give an original example of each.
- Distinguish primary data, collected for your own question, from secondary data borrowed from someone else's work.
- Explain what data provenance records and why it matters for trusting data.
- Describe the general principle that collecting people's data requires permission and follows rules.
- Identify measurement error, biased questions, and non-response as collection errors that can distort a dataset.

## The College Version

### Five ways data gets gathered

Every dataset begins with someone or something capturing information. Measurement uses instruments to record physical quantities: the U.S. Geological Survey's streamgages, for example, use pressure, optical, or acoustic sensors to measure the height of a river's surface, and an electronic recorder stores a reading roughly every fifteen minutes. Surveys and questionnaires ask people directly, the way the Census Bureau's American Community Survey sends households a questionnaire and turns the answers into yearly statistics. Observation means watching and recording what happens without asking anyone, such as a field researcher counting how many drivers ignore a new stop sign during a morning shift. Records and logs are data an organization already produces while doing its work: a city's bus fleet logs every vehicle's position automatically, and hospitals keep admission records as part of normal operations. Finally, existing and public data lets you borrow what someone else has already gathered; the U.S. government's open-data catalog, Data.gov, makes hundreds of thousands of datasets available for reuse. Most real projects mix several of these routes.

### Primary versus secondary data

The distinction that matters most when you start a project is who collected the data and for whom. Primary data is gathered directly for your question, by you or by a team you are working with: your own questionnaire, your own sensor readings, your own observation sheet. Secondary data is borrowed from someone else's work, data already collected for a previous study or for another organization's purpose, which you reanalyze to answer a new question. The UK Data Service, which archives social-science data, describes secondary analysis exactly this way: reusing data that has already been collected for a previous study, typically to address a new research question. Being the first person to analyze a dataset does not make it primary; what matters is who collected it. Both kinds are legitimate, but they carry different responsibilities: with secondary data you must understand the original collector's methods, because their choices shaped the numbers you are now using.

### Provenance: where data came from, how, and when

Provenance is the recorded history of a dataset. NIST, in its Big Data Interoperability Framework, calls provenance the metadata that describes the history of a dataset: information about how the data was collected, transmitted, and processed. A provenance record answers three practical questions: where did this data come from, how was it gathered, and when? The record matters most when data is reused, because data collected for one purpose rarely carries its context with it. Suppose you download a table of hospital admission counts to study local health trends. Without provenance you cannot tell whether the counts came from billing systems or hand-entered forms, whether they cover every hospital or a subset, or whether they describe 2019 or last year. Provenance is what lets you judge whether borrowed data fits your question at all, and it is the first thing to check when two datasets seem to disagree.

### Permission and rules around people's data

When the data is about people, collection is not just a technical step; it is a relationship governed by permission and rules. The general principle is simple: people's information is gathered with their consent, for a stated purpose, under rules that limit how it can be used. Large organizations build this into how they operate; Microsoft's responsible-AI framework, for example, lists privacy and security among its six core principles for building trustworthy systems. Large surveys illustrate the same pattern: households are selected, told why their answers matter, and their responses feed statistics rather than files about individuals. The details of privacy law, data-protection rights, and what consent must look like in practice are their own topic, covered in the ai-privacy lesson. The habit to build here is to ask, before collecting anything about people: do we have permission, is the purpose stated, and are there rules we must follow? If the answer is unclear, that is a reason to stop and check, not to proceed.

### Collection errors: measurement, wording, and silence

Collection can fail even when the method is reasonable, and the failures have names. Measurement error is a wrong value produced by the instrument or the procedure: a scale that reads two pounds heavy, a misprinted form, a sensor that drifts out of calibration. Biased questions push people toward a particular answer; a survey that asks "Don't you agree that the new library hours are more convenient?" is really an argument with a checkbox. Non-response is the silence: invited people who do not answer. OpenStax's introductory statistics textbook warns that non-response can leave responses unrepresentative, because people with strong positive or negative opinions are more likely to respond than everyone else. None of these errors is fixed by collecting more data, and none is caught by looking at the finished dataset alone; they are caught by examining how the collection was done. That is why method and provenance are not bureaucratic details. They are the only evidence you have that the numbers were not distorted before they reached your hands.

## Key Vocabulary

- **Data collection** — The process of gathering information from the world, from people, or from existing records for a stated purpose.
- **Primary data** — Information gathered directly for your own research question, such as your survey, sensor readings, or observation notes.
- **Secondary data** — Information collected by someone else, usually for a different purpose, that you reuse to answer a new question.
- **Measurement** — Recording a physical quantity with an instrument, such as a gauge, scale, or sensor.
- **Survey** — A collection method that asks people questions, often through a questionnaire, and records their answers.
- **Observation** — A collection method that records what happens without asking participants, such as watching and counting behavior.
- **Data provenance** — The recorded history of a dataset: where it came from, how it was collected and processed, and when.
- **Measurement error** — A wrong value caused by a faulty instrument or a flawed measurement procedure.
- **Non-response** — The failure of invited people to answer, which can leave survey results unrepresentative.
- **Consent** — Permission given by a person for their data to be collected and used, usually for a stated purpose.

## Eli-10

Data collection is the part of a project where information actually enters the record: a gauge reads the river, a questionnaire comes back from a household, a clipboard notes what a researcher saw, a computer logs what a system did, or a download brings in data someone else published. The honest label for any dataset says whether you gathered it for your own question, which makes it primary, or borrowed it, which makes it secondary. It also says where, how, and when the data came to be, and that history is called provenance. Collection has rules too: data about people is gathered with permission, and mistakes like faulty instruments, leading questions, and silent non-responders can quietly corrupt everything downstream.

## Eli's Analogy

Think of a kitchen. Collecting data is shopping and prepping ingredients. You can grow your own vegetables, which is primary data, or buy them from a market where someone else farmed them, which is secondary data. The label on the bag, with the farm, the harvest date, and how the produce was stored, is the provenance. If you cook with wilted or mislabeled ingredients, no amount of careful cooking will fix the meal, and if the market's scales are off, every recipe using that produce inherits the error.

The analogy has limits. Unlike a bag of vegetables, data can be copied without being used up, and it does not spoil physically: old data can still be perfectly valid for some questions and dangerously stale for others. Also, a provenance record can be incomplete or wrong, whereas a food label is regulated, so you still have to check the record rather than trust it blindly.

## Worked Example

A town's recreation department wonders whether to add a second public pool. First, they install an automatic counter at the entrance for two weeks, so a sensor records how many people come each day: that is measurement. Next, they hand swimmers a short questionnaire about crowding, written to avoid steering, asking "How often did you wait for a lane?" rather than "Isn't the pool too crowded?" That is a survey with deliberately neutral wording. They also pull their own membership check-in logs from the previous summer, which are records and primary data, because the department collected them. Then they download another town's pool-visit statistics from a state website, check the file's provenance, which agency collected it, how, and in what year, and treat it as secondary data. When only a third of the questionnaires come back, they note the non-response and report it alongside the results rather than pretending the survey speaks for everyone.

## Common Mistakes

- **Calling borrowed data primary because you are the first person to analyze it.** Primary and secondary describe who collected the data, not who analyzes it. If someone else gathered it for their own purpose, it is secondary data no matter how novel your analysis is.
- **Trusting a dataset because it is large.** Size does not cure collection errors. A big survey with a badly worded question or heavy non-response is still distorted; check how the data was collected before trusting it.
- **Using a public dataset without noting where it came from or when it was collected.** Record provenance, the source, method, and date, before analyzing. Later, you or anyone else needs that history to judge the data and to reproduce your work.
- **Treating a leading question as a small wording choice.** Question wording is part of the instrument. Leading questions push answers in one direction and count as a named collection error; neutral wording is the fix.

## Compare / Contrast

| A | B | Distinction |
|---|---|---|
| Primary data | Secondary data | Primary data is collected for your own question; secondary data was collected by someone else, usually for a different purpose, and is reused. |
| Observation | A survey | Observation records what people or systems actually do without asking; a survey asks people to report on themselves, which can introduce self-report bias and non-response. |
| Measurement error | Non-response | Measurement error is a wrong value produced by a faulty instrument or procedure; non-response is missing values because invited people did not answer. |

## Key Takeaway

Data collection is where data quality begins: choose a method that fits the question, know whether your data is primary or secondary, keep track of where it came from and when, respect the people behind it, and watch for measurement error, biased questions, and non-response.

## Practice Question Bank

1. **A river gauge records water height with a pressure sensor and stores a reading every 15 minutes. Which data collection method does this illustrate?**
   - A. Measurement with instruments
   - B. A questionnaire survey
   - C. Reviewing existing public records
   - D. Direct human observation
   - **Answer: A.** The gauge is an instrument that measures a physical quantity, water height, and stores the readings automatically, which is measurement-based collection. Surveys rely on questions, public records are borrowed data, and observation means watching and recording events by hand.

2. **A sociologist uses Census Bureau survey results to study a question the Census Bureau never asked. The data she uses is best described as:**
   - A. Primary data, because she is the first to analyze it
   - B. A sensor measurement, because surveys use instruments
   - C. Secondary data, because the Census Bureau collected it for its own purposes
   - D. Non-response data, because not everyone answered
   - **Answer: C.** Secondary data is collected by someone else, usually for a different purpose; being the first to analyze it does not make it primary. The data came from questionnaires, not sensors, and non-response is a collection error, not a type of data.

3. **A city council wants to know how residents feel about a proposed park renovation. Which approach collects primary data for that question?**
   - A. Reading the county's tourism report from last year
   - B. Emailing a short questionnaire to households near the park
   - C. Counting the benches in the park with a clipboard
   - D. Using the state's park-visit statistics from 2021
   - **Answer: B.** A questionnaire sent for this specific question produces primary data, gathered directly for the council's purpose. The county report and state statistics are secondary data, and counting benches measures the park itself, not residents' opinions.

4. **A researcher finds a public file of hospital admission records from 2019 and wants to know whether the file is trustworthy for her question. Checking its provenance means asking:**
   - A. How many rows the file contains
   - B. Whether the file is stored on a government server
   - C. Whether the file format is open or proprietary
   - D. Where the records came from, how they were gathered, and when
   - **Answer: D.** Provenance is the recorded history of data: its source, the way it was collected and processed, and its timing. Row count, server location, and file format do not tell you where the data came from or how it was produced.

5. **A shop's feedback survey runs only in the evening, so most daytime customers never see it. The evening-only responses arrive, but daytime shoppers are absent from the results. Which collection error does this best illustrate?**
   - A. Non-response, because many invited customers did not answer
   - B. Measurement error, because the survey form was misprinted
   - C. A biased question, because the wording led customers toward one answer
   - D. A sensor fault, because the survey kiosk malfunctioned
   - **Answer: A.** Non-response means the people who did not take part are missing from the results, which can skew what the data shows; here, daytime customers never got the chance to respond. Measurement error involves faulty instruments, a biased question leads answers with wording, and a sensor fault is a device failure.

## Sources

- U.S. Census Bureau — About the American Community Survey: https://www.census.gov/programs-surveys/acs/about.html
- U.S. Geological Survey — How Streamflow is Measured: https://www.usgs.gov/special-topics/water-science-school/science/how-streamflow-measured
- NIST Special Publication 1500-1, NIST Big Data Interoperability Framework, Volume 1: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1500-1.pdf
- OpenStax, Introductory Statistics, Section 1.2: https://openstax.org/books/introductory-statistics/pages/1-2-data-sampling-and-variation-in-data-and-sampling
- Microsoft Learn — What is responsible AI?: https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai
- UK Data Service — Secondary data analysis: https://ukdataservice.ac.uk/learning-hub/understanding-data/secondary-data/
- Data.gov — The Home of the U.S. Government's Open Data: https://data.gov/

## Related Topics

- Types of Data (data-science-and-ai-literacy:foundations:types-of-data)
- Datasets (data-science-and-ai-literacy:foundations:datasets)
- Sampling (data-science-and-ai-literacy:foundations:sampling)
- Data Cleaning (data-science-and-ai-literacy:foundations:data-cleaning)
- AI Privacy (data-science-and-ai-literacy:foundations:ai-privacy)

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:data-collection
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified (researched 2026-08-21)
- Rights: reference-only sources; no source prose adapted
- Evidence packet: editorial/subjects/data-science-and-ai-literacy/evidence/data-collection.json
