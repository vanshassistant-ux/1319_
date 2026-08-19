# Healthcare Data and Analytics

## In 30 Seconds

Healthcare organizations sit on huge amounts of data — clinical records, insurance claims, financial ledgers, and patient-generated readings. Analytics turns that data into decisions. A common ladder runs from descriptive analytics (what happened) to diagnostic (why), predictive (what may happen), and prescriptive (what to do). The insight is only as trustworthy as the data underneath it, and predictive models are regulated decision-support tools, not diagnoses.

## Why This Matters

Administrators are judged on decisions they can defend with evidence: where to add staff, which patients need outreach, whether a safety problem is real or noise. Analytics is how raw records become those decisions, and knowing its limits keeps you from over-trusting a dashboard. The field is also where health administration, informatics, and clinical care meet, so managers increasingly need to read a risk-stratification report or question a predictive model without being data scientists. As machine learning spreads into care, the ability to ask "what data trained this, and was it validated?" is becoming a core management skill rather than a technical specialty.

## Learning Objectives

- Distinguish the main types of healthcare data: clinical, administrative/claims, financial, and patient-generated.
- Explain the four analytics tiers — descriptive, diagnostic, predictive, prescriptive — with healthcare examples.
- Identify key data sources (claims, EHR data, registries, vital statistics, surveys) and tell structured from unstructured data.
- Apply risk stratification to segment a population and interpret a simple rate or ratio.
- Evaluate how data quality and model bias limit what analytics can support, and describe how clinical AI is regulated.

## The College Version

### What counts as healthcare data

Before analytics comes data, and healthcare produces several distinct kinds. **Clinical data** describe the patient's health and care: diagnoses, laboratory results, vital signs, medications, imaging, and clinicians' notes. **Administrative or claims data** are generated for payment — the coded record of what was billed, to whom, for which diagnosis and procedure, on what date, at what price. **Financial data** track the organization's money: revenue, cost, payroll, and the margins that keep it solvent. **Patient-generated data** come from outside the visit — home blood-pressure cuffs, glucose monitors, wearables, and patient surveys. These sources overlap but are not interchangeable. Claims data cover almost every insured encounter and are cheap to obtain, but they record what was billed rather than what happened clinically, so a diagnosis may be present for reimbursement reasons. Clinical data are richer and closer to the truth of care but are messier and harder to pull together. A capable analytics program knows which source answers which question, and does not treat a billing record as a clinical fact.

### Structured vs unstructured data, and where it comes from

Data also differ in form. **Structured data** are standardized and coded — they live in labeled fields a computer can sort and count directly, such as ICD-10-CM diagnosis codes, laboratory values, vital signs, and medication lists. To make records interoperable, ONC maintains the United States Core Data for Interoperability (USCDI), a standardized set of data classes and elements (demographics, laboratory, medications, clinical notes, and more) that certified systems must exchange; USCDI grew from 53 elements in its 2020 first version to over 170 by 2026. **Unstructured data** are free text and images — the narrative of a progress note, a radiology report, a discharge summary — rich in meaning but hard to analyze without extra processing. Beyond the EHR, standard data sources each have a role: insurance claims for utilization and cost; disease and patient registries that pool cases of a condition; vital statistics from the National Vital Statistics System, which collects official birth and death records — 57 registration jurisdictions send NCHS information on more than 6 million vital events a year; and population surveys such as NHANES and BRFSS that sample the public directly. AHRQ's Quality Indicators, computed from ordinary hospital discharge (claims) data, show how administrative data get reused far beyond billing.

### The four analytics tiers

Analytics is usually described as a ladder of four types that answer progressively harder questions. **Descriptive analytics** reviews historical data to identify patterns — "what happened" — such as a chart of monthly readmissions or a count of no-shows by clinic. **Diagnostic analytics** asks "why did it happen," digging beneath the summary: does the readmission rate rise with a particular diagnosis, unit, or discharge day? **Predictive analytics** uses historical data and statistical modeling to forecast future outcomes — "what may happen" — for example flagging which patients are likely to be readmitted or projecting next week's bed demand. **Prescriptive analytics** goes furthest, building on diagnostic and predictive results to recommend specific actions, as a clinical decision-support system does when it suggests an intervention. Each rung depends on the ones below it: you cannot usefully predict what you have not first described and understood, and a prescription built on a shaky prediction inherits its errors.

### Population health, risk stratification, dashboards, and KPIs

Managers rarely act on one patient at a time; they act on populations. **Population health analytics** looks across a defined group — a clinic's panel, a health plan's members — to find where need and resources are mismatched. The central technique is **risk stratification**: segmenting the population into tiers of similar complexity, such as high-risk, rising-risk, and low-risk, so that scarce care-management effort is aimed at the people most likely to benefit. This matters because a small share of patients typically accounts for a large share of utilization and spending; identifying that group early lets an organization intervene before a crisis rather than after. The results usually surface on a **dashboard** — a compact display of **key performance indicators (KPIs)**, the handful of metrics leadership watches, like 30-day readmission rate, average length of stay, or emergency-department wait time. A dashboard is descriptive analytics made routine: it tells you the current state at a glance, but it does not by itself explain causes or prescribe action.

### Data quality, model bias, and regulated clinical AI

Every layer above rests on **data quality** — completeness, accuracy, and timeliness. Missing fields, miscoded diagnoses, duplicate records, and delayed feeds all degrade an analysis, and no model can rescue bad inputs; "garbage in, garbage out" is the field's oldest rule. Predictive models add a second hazard. A machine-learning model learns from historical data, so if that history reflects unequal care, the model can reproduce and even amplify the disparity — **algorithmic bias** that produces unfair outcomes for groups underrepresented or mistreated in the training data. This is why **validation** matters: a model should be tested on data it did not learn from, and monitored after deployment, before anyone trusts it. Two cautions follow for administrators. First, a predictive score is *decision support* — it informs a clinician's judgment; it is not a diagnosis and does not act on its own. Second, clinical AI is regulated: the FDA authorizes AI-enabled medical devices for marketing only after a focused review of their safety and effectiveness, maintains a public list of those authorized, and to date radiology accounts for the largest share. Treating a model as a black box that "just knows" misunderstands both the science and the law.

## Key Vocabulary

- **Clinical data** — Information about a patient's health and care (diagnoses, lab results, vital signs, medications, imaging, notes) generated during the delivery of care.
- **Claims (administrative) data** — The coded record created for billing and payment, capturing diagnoses, procedures, dates, sites, and charges rather than the full clinical story.
- **Patient-generated data** — Health data produced outside the clinical encounter, such as readings from wearables and home monitors or answers to patient surveys.
- **Structured data** — Standardized, coded values in labeled fields (ICD-10 codes, lab values, vital signs) that software can sort and count directly.
- **Unstructured data** — Free-text and image content (clinical notes, radiology reports, discharge summaries) that requires extra processing before analysis.
- **Descriptive / diagnostic / predictive / prescriptive analytics** — The four analytics tiers answering, in order, what happened, why, what may happen, and what action to take.
- **Risk stratification** — Segmenting a population into tiers of similar complexity or risk so care-management resources can be prioritized.
- **Key performance indicator (KPI)** — A metric leadership tracks, such as 30-day readmission rate or average length of stay; KPIs are the content of most dashboards.
- **Data quality** — The degree to which data are complete, accurate, and timely enough to be trusted; poor quality limits every analysis built on it.
- **Algorithmic bias** — Systematic unfairness in a model's outputs arising when historical training data reflect existing disparities the model then reproduces.

## Eli-10

A hospital collects a mountain of information: what happened to patients, what the insurance bill said, how much money came in, and readings from things like fitness trackers. That pile of facts is data. Analytics is asking the pile good questions. The easiest question is "What happened?" — like counting how many patients came back within a month. A harder one is "Why?" Harder still is "What will happen next?", which needs a prediction. The hardest is "So what should we do about it?" Managers use this to spot the patients who need the most help and send a nurse before things get worse. But two warnings ride along: if the facts you started with were wrong or missing, every answer is wrong too, and a computer's prediction is a helpful hint for a doctor to weigh, never the final word.

## Eli's Analogy

Think of a weather forecast. Descriptive analytics is the thermometer reading right now; diagnostic is figuring out why it got cold; predictive is the forecast for tomorrow; prescriptive is "bring an umbrella." A forecast that helps you plan is not the same as controlling the sky, and it is only as good as the sensors feeding it.

**Where the analogy breaks down:** Weather sensors measure physics that does not care who is watching; healthcare data are created by people and billing systems, so they carry human choices and inequities a thermometer never would — a biased model can be unfair in ways a wrong forecast simply is not. And unlike a weather app, clinical prediction tools are regulated medical devices.

## Worked Example

A hospital wants to understand heart-failure readmissions. **Descriptive step:** of 1,200 heart-failure discharges last quarter, 168 patients returned within 30 days, so the readmission rate is 168 / 1,200 = 14.0%. **Diagnostic step:** split by unit — Unit A ran 90 readmissions in 600 discharges (15.0%) while Unit B ran 78 in 600 (13.0%), a ratio of 15.0 / 13.0 ≈ 1.15, meaning Unit A's rate is about 15% higher, worth investigating. **Population step:** risk-stratify the clinic's panel of 2,500 patients into high-risk (5% = 125), rising-risk (20% = 500), and low-risk (75% = 1,875). With each care manager able to hold about 100 patients, the 125 high-risk patients need roughly two care managers assigned first. Notice every number here is descriptive or diagnostic; deciding to add outreach is prescriptive, and any predictive model that flagged those 125 patients would still need validation before the clinic trusted it.

## Common Mistakes

- **Treating claims data as clinical truth.** Claims are created to get paid. A code may be present, absent, or shaped by reimbursement rules, so a claim tells you what was billed, not exactly what happened at the bedside.
- **Calling a dashboard "predictive analytics."** A dashboard of current KPIs is descriptive analytics — it reports the present state. Prediction requires a model that forecasts a future outcome, which most dashboards do not do.
- **Assuming more data automatically means better answers.** Analytics is bounded by data quality. Incomplete, miscoded, duplicated, or stale data produce confident but wrong conclusions no matter how large the dataset.
- **Trusting a predictive model as if it were objective or a diagnosis.** Models learn from historical data and can inherit its biases; a risk score is decision support that informs a clinician, must be validated on new data, and — for clinical AI — is regulated by the FDA.
- **Confusing risk stratification with rationing.** Stratification matches level of care to level of need so limited resources reach the people most likely to benefit; it guides intensity of support, not denial of care.

## Compare / Contrast

- **Claims/administrative data vs Clinical/EHR data:** Claims are billing-driven, broad, and cheap but shallow; clinical data are care-driven, deep, and truer but messier and harder to aggregate.
- **Structured data vs Unstructured data:** Structured data are coded fields a computer counts directly; unstructured data are free text and images that need processing before analysis.
- **Predictive analytics vs Prescriptive analytics:** Prediction forecasts what may happen; prescription recommends what to do about it and depends on the prediction being sound.
- **Descriptive dashboard/KPI vs Predictive model:** A dashboard reports the current state; a model estimates a future outcome and, in clinical use, is a regulated, validated decision-support tool.

## Key Takeaway

Analytics turns healthcare data into decisions along a ladder — describe, diagnose, predict, prescribe — but each rung is only as trustworthy as the data beneath it, and predictive models are regulated, biasable decision-support tools, not diagnoses.

## Practice Question Bank

1. **A hospital reports that 168 of 1,200 heart-failure patients were readmitted within 30 days last quarter and displays the 14% rate on its leadership dashboard. Which analytics tier does this display represent?**
   - A) Descriptive analytics ✓
   - B) Predictive analytics
   - C) Prescriptive analytics
   - D) Diagnostic analytics

   Summarizing what already happened (a past readmission rate on a dashboard) is descriptive analytics. It is not predictive (no forecast), not prescriptive (no recommended action), and not yet diagnostic, which would require digging into why the rate is what it is.

2. **An analyst needs data on almost every insured encounter — diagnoses, procedures, dates, and charges — to study utilization and cost across a health plan. Which data source is the natural first choice, and what is its key limitation?**
   - A) Vital statistics; they omit outpatient visits
   - B) Wearable device data; they cover only chronic patients
   - C) Insurance claims data; they reflect what was billed rather than the full clinical picture ✓
   - D) Free-text clinical notes; they cannot be searched at all

   Claims (administrative) data cover nearly every insured encounter and are ideal for utilization and cost analysis, but they are generated for billing, so they record what was billed, not the complete clinical story.

3. **Which pairing correctly separates structured from unstructured healthcare data?**
   - A) Structured: a physician's free-text progress note; unstructured: an ICD-10 diagnosis code
   - B) Structured: ICD-10 codes, lab values, and vital signs; unstructured: free-text notes, radiology reports, and images ✓
   - C) Structured: patient survey comments; unstructured: medication lists
   - D) Structured: scanned discharge summaries; unstructured: numeric lab results

   Structured data are standardized, coded values in labeled fields that software can count directly. Unstructured data are free-text and image content such as notes, radiology reports, and images. The other options invert these categories.

4. **A clinic segments its 2,500-patient panel into high-risk, rising-risk, and low-risk tiers so that its two care managers focus first on the high-risk group. This technique is best described as, and justified by, which of the following?**
   - A) Prescriptive diagnosis; it tells each patient exactly which drug to take
   - B) Data cleaning; it removes low-quality records before analysis
   - C) Predictive coding; it assigns billing codes automatically
   - D) Risk stratification; a small share of patients accounts for a large share of need, so tiering targets scarce resources ✓

   Segmenting a population into tiers of complexity to prioritize care-management resources is risk stratification, justified by the fact that a small high-risk group drives a disproportionate share of utilization and spending.

5. **A vendor pitches a machine-learning model that flags patients at high risk of deterioration. Which response best reflects sound, current understanding of predictive models and AI in healthcare?**
   - A) Ask what data trained it, whether it was validated on new data and checked for bias, and confirm any clinical AI is FDA-authorized decision support rather than a diagnosis ✓
   - B) Adopt it immediately, since a model's output is objective and removes the need for clinician judgment
   - C) Reject all predictive tools, because algorithms are never allowed in clinical settings
   - D) Assume that because it uses more data than a human, its predictions must be free of bias

   A model learns from historical data and can reproduce its biases, so it must be validated on data it did not learn from and monitored; its output is decision support that informs, not replaces, clinician judgment, and AI-enabled medical devices are FDA-regulated.

## Sources

- StatPearls, *Healthcare Analytics* (NCBI Bookshelf, NBK614158) — https://www.ncbi.nlm.nih.gov/books/NBK614158/
- U.S. FDA, *Artificial Intelligence-Enabled Medical Devices* — https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices
- CDC / NCHS, *About the National Vital Statistics System (NVSS)* — https://www.cdc.gov/nchs/nvss/about_nvss.htm
- ONC / HealthIT.gov, *United States Core Data for Interoperability (USCDI)* — https://www.healthit.gov/isp/united-states-core-data-interoperability-uscdi
- AHRQ, *Quality Indicators* — https://qualityindicators.ahrq.gov/
- *Population risk stratification tools and interventions for chronic disease management in primary care: a systematic literature review* (PMC11983763) — https://pmc.ncbi.nlm.nih.gov/articles/PMC11983763/
- CDC / NCHS, *ICD-10-CM / ICD-10-PCS background* — https://www.cdc.gov/nchs/icd/

## Related Topics

- health-administration:information:electronic-health-records
- health-administration:information:health-information-management
- health-administration:quality-and-safety:healthcare-quality
- health-administration:financing:healthcare-costs

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Source count:** 7 (FDA, CDC/NCHS ×2, ONC/HealthIT.gov, AHRQ, StatPearls, one peer-reviewed review)
- **Rights:** Reference-only sources; all prose original synthesis, no copyrighted wording reproduced. Government works (FDA, CDC, ONC, AHRQ) described in original wording.
- **Transformation:** Original EliExplains synthesis of the four analytics tiers, data types, data sources, risk stratification, data quality, and regulated clinical AI; EHR mechanics, records governance, and quality-measure definitions deferred to sibling topics.
