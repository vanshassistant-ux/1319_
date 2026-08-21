# Algorithmic Fairness

## In 30 Seconds

Algorithmic fairness is the practice of designing and checking AI systems so that they do not treat people or groups unfairly, often judged by the harm a system could cause. There is no single definition of fairness, and different definitions can conflict, so teams must decide what fairness means for their context. Fairness is a property of the whole system, including its data, design, people, and processes, not just of the math.

## Why This Matters

Fairness determines whether an AI system helps people or quietly harms them. Systems that approve loans, screen job applications, or flag patients for follow-up can treat some groups worse than others, and those effects land on real lives. Understanding fairness lets you ask the right questions of any system: who is affected, how are different groups treated, and who decided that was acceptable. Academically, it connects data science to ethics, law, and policy. Practically, it protects you as a user, an employee, and a citizen. And because fairness is an ongoing process rather than a switch, this knowledge stays useful as systems keep changing.

## Learning Objectives

- Define algorithmic fairness as designing and checking AI systems so they do not treat people or groups unfairly.
- Explain why fairness is hard: there is no single definition, and different definitions can conflict.
- Distinguish the common fairness framings: equal outcomes, equal error rates across groups, and equal opportunity.
- Distinguish fairness from bias, and apply the boundary between them to a scenario.
- Apply basic auditing practices, such as checking model behavior across groups, to evaluate a real-world system.
- Analyze why fairness is an ongoing social and technical process rather than a one-time fix.

## The College Version

### What algorithmic fairness is

Algorithmic fairness is the practice of designing and checking AI systems so that they do not treat people or groups unfairly. Microsoft's documentation on machine learning fairness gives a workable way to pin the idea down: AI systems can display unfair behavior, and one way to define unfair behavior is by its harm, or its impact on people. So fairness is not a matter of good intentions; it is a matter of what a system actually does to the people it touches. NIST treats fairness the same way in its AI Risk Management Framework, where one of the characteristics of trustworthy AI is being fair, with harmful bias managed. The same framework stresses that AI systems are socio-technical: they are shaped by societal dynamics and human behavior as much as by code. That is why fairness is a property of the whole system, not just of the math inside it. A model can compute perfectly and still sit inside an unfair arrangement, because the data it learned from, the way its outputs are used, and the people who respond to those outputs are all part of the system.

### Why there is no single definition of fairness

The core scholarly point about algorithmic fairness is that fairness has no single definition. Researchers have proposed numerous fairness metrics, and Microsoft's documentation states plainly that many quantitative fairness metrics cannot all be satisfied simultaneously. Different reasonable definitions pull in different directions. A definition that demands equal outcomes across groups may conflict with one that demands equal error rates, and NIST's bias report notes that depending on how a sensitive attribute relates to the data, some observational definitions of fairness can even increase discrimination. In plain terms: fairness is a judgment about people, and reasonable judgments conflict. That is why the question "what does fair mean here" must be asked and answered for each system, in its own context, rather than looked up in a table. The choice of definition is itself part of the fairness work, not a detail to be handled later.

### Three common ways to frame fairness

Three framings appear over and over, and knowing them by name makes fairness discussions much easier to follow. The first is equal outcomes, often called demographic parity: the system should produce similar outcomes across groups, such as similar approval rates for applicants of different backgrounds. NIST's bias report lists demographic parity among the fairness metrics in the research literature, and Microsoft describes it as a way to mitigate allocation harms, where a system withholds opportunities or resources from some groups. The second framing is equal error rates across groups, often called equalized odds: the system should make mistakes at similar rates for different groups, so that no group is far more likely to be wrongly rejected or wrongly approved. Microsoft describes equalized odds as diagnosing allocation and quality-of-service harms. The third is equal opportunity: among people who genuinely qualify for a good outcome, such as applicants who would actually repay a loan, each group should receive that outcome at a similar rate. NIST's bias report lists equality of opportunity among the metrics, and Microsoft lists it as a parity constraint. Each framing is reasonable, and each can demand a different design.

### Fairness and bias: the boundary

Bias and fairness are related but distinct, and this subject keeps them in separate topics. Bias is the input problem: it is a distortion that deprives data or results of representativeness. NIST's bias report identifies three categories of bias in AI: systemic, statistical, and human. Statistical bias is the systematic distortion familiar from data work; systemic bias lives in institutions and processes; human bias enters through the people designing and using systems. Fairness, by contrast, is the design goal: whether the system treats people fairly. The one-sentence boundary is that bias is about how errors and distortions get into a system, while fairness is about whether the system's treatment of people is right. One more trap belongs to this boundary: removing a sensitive attribute such as race or sex from the data does not make a system fair, because other features can act as proxies that still reveal the same information, and NIST warns that badly chosen proxies can lead to discrimination.

### Measuring fairness and auditing systems

Fairness claims need checking, and the general practices are well established. Microsoft describes fairness assessment as computing performance metrics across subgroups defined by sensitive features, under the group fairness question of which groups of people are at risk of experiencing harm. Google's machine learning crash course teaches the same habit: examine data for potential bias before training, then evaluate the model's predictions for fairness afterward. NIST's bias report adds that test, evaluation, validation, and verification, together called TEVV, are essential, and notes that statistical tests comparing outcomes across demographic groups have been used for decades in settings like employment and consumer finance. Documentation matters as much as the measurements: NIST emphasizes transparency, and an audit that is not written down cannot be reviewed later. Representative testing data is part of the picture too, because a model cannot be judged fairly on data that does not reflect the people it will actually affect.

### Fairness in practice, and the honest bottom line

Fairness work does not end with a measurement. NIST's bias report points to participatory design and multi-stakeholder approaches: the people affected by a system should have a say in how it is built and checked, with humans kept in the loop. Transparency means the choices, data, and tests are open to review. Redress means people have a path to question a decision and have it examined, which is one reason Microsoft notes that quantitative metrics alone do not capture aspects of fairness such as justice and due process. The honest bottom line is that fairness is an ongoing social and technical process, not a switch. NIST's AI Risk Management Framework organizes the work into four functions, govern, map, measure, and manage, applied across the AI lifecycle, and its bias report states that zero risk of bias is not achievable. Systems, data, and people change, so fairness is maintained, re-measured, and renegotiated for as long as a system exists.

## Key Vocabulary

- **algorithmic fairness** — The practice of designing and checking AI systems so that they do not treat people or groups unfairly, commonly judged by the harm a system can cause.
- **bias** — A systematic distortion that makes data, results, or models unrepresentative; it can be systemic, statistical, or human in origin, and it is the input problem that fairness work responds to.
- **fairness metric** — A way of measuring whether a system treats groups comparably, such as comparing outcomes or error rates across groups.
- **demographic parity** — The fairness framing that a system should produce similar outcomes, such as similar approval rates, across different groups.
- **equalized odds** — The fairness framing that a system should make mistakes at similar rates across different groups.
- **equal opportunity** — The fairness framing that people who genuinely qualify for a good outcome should receive it at similar rates across groups.
- **sensitive attribute** — A characteristic such as race, sex, or age on the basis of which a system should not treat people unfairly.
- **group fairness** — The approach of asking which groups of people are at risk of harm from a system, then checking outcomes and errors group by group.
- **proxy** — A feature that stands in for another characteristic, such as a field that reveals a sensitive attribute indirectly even after that attribute is removed.
- **socio-technical** — Describing systems in which technical components interact with human, social, and institutional factors, so fairness cannot be managed by technology alone.

## Eli-10

Algorithmic fairness is the work of making sure an AI system does not treat people unfairly. It sounds simple, but fairness is not one thing. One person's fair is equal outcomes: every group gets approved at the same rate. Another person's fair is equal mistakes: the system fails the same way for everyone. A third is equal opportunity: qualified people get the same chances. These goals can pull in different directions, so a team must choose what fairness means for the situation, check the system group by group, and revisit the choice as things change. Fairness is a property of the whole system, including the data, the design, the people, and the processes around it, not a number you set once.

## Eli's Analogy

Think of a referee in a youth league. The rulebook does not make a fair game by itself. The referee must know the sport, watch every player, notice when one team keeps getting called for fouls the other team gets away with, and adjust. Even then, players and parents argue about the calls. An AI system is the same: it needs constant watching, group by group, and the definition of a fair call is argued over, not discovered.

The comparison breaks down in two ways. A referee sees the game happen in front of them, while an AI system's unfairness can hide inside training data collected years earlier, and nobody may notice until thousands of decisions have already been made. A referee also answers to a league, while an AI system may have no one accountable for its choices at all.

## Worked Example

Parkview Housing runs a waiting list for rent assistance and adopts a screening model that ranks applicants by predicted need, built from five years of paper applications kept by one district office. Overall, the model looks reasonable: most ranked applicants match what staff would have chosen. When a new analyst checks the model group by group, the story changes. Applicants from the two newer district offices rank lower even when their applications look similar, because those offices used a different form, and the model learned patterns from the older form's fields. The team's first impulse is to delete the district field. The analyst explains that other fields, such as previous address, act as stand-ins for district, so removing one field does not remove the problem. The team instead defines what fairness means for this system with input from applicants and staff, retests the model across groups on a fresh, representative sample, and publishes a short report of what was checked and what was found. Six months later they run the same checks again, because the applicant pool keeps changing.

## Common Mistakes

- **Thinking fairness is a single definition you can switch on.** There is no single definition of fairness, and different definitions can conflict. Teams must choose what fairness means for their context, justify the choice, and measure against it.
- **Believing that removing a sensitive attribute makes a system fair.** Other features can act as proxies that still reveal the sensitive information, and NIST warns that badly chosen proxies can lead to discrimination. Attribute removal is not a fairness guarantee.
- **Judging fairness by overall accuracy alone.** A model can look strong overall while mistreating one group. Fairness checks compare outcomes and error rates across groups, not just the total score.
- **Treating fairness as a one-time check before launch.** Fairness is an ongoing process. NIST frames it as continuous risk work across the AI lifecycle, because data, systems, and people keep changing.
- **Confusing bias with fairness.** Bias is the input problem: distortions in data and models. Fairness is the design goal: whether the system treats people fairly. Fixing one does not automatically fix the other.

## Compare / Contrast

- **Bias vs. Fairness** — Bias is the input problem, a systematic distortion in data or models, while fairness is the design goal, whether a system treats people fairly. They are sibling topics that must be kept distinct.
- **Equal outcomes vs. Equal error rates** — Equal outcomes demands similar approval rates across groups, while equal error rates demands similar mistake rates across groups. A system can satisfy one while violating the other.
- **A one-time fairness fix vs. An ongoing fairness process** — A one-time fix assumes fairness is a setting, while an ongoing process treats it as continuous measurement, review, and adjustment across the system's life, which is how NIST frames the work.

## Key Takeaway

Algorithmic fairness is the practice of designing and checking AI systems so they do not treat people unfairly. Because no single definition of fairness exists, teams must choose what fairness means for their context, measure the system's behavior across groups, and keep revisiting that choice as an ongoing social and technical process.

## Practice Question Bank

**Q1.** Which statement best describes algorithmic fairness?

- A. The practice of designing and checking AI systems so they do not treat people or groups unfairly.
- B. A mathematical formula that guarantees any AI system treats everyone identically.
- C. A type of machine learning that removes sensitive attributes from data automatically.
- D. A legal requirement that all AI systems publish their training data.

**Key: A.** Microsoft defines unfair behavior in AI systems by its harm or impact on people, and algorithmic fairness is the practice of designing and checking systems against that standard. No single formula guarantees fairness because definitions conflict, removing attributes does not make a system fair, and publishing training data is a transparency practice, not a universal legal requirement.

**Q2.** A team finds that two fairness goals for their hiring model pull in opposite directions: matching approval rates across groups and matching error rates across groups. Why is this situation expected rather than a bug?

- A. Because the training data was collected from an unrepresentative sample.
- B. Because the model was never given a fairness metric to optimize.
- C. Because there is no single definition of fairness, and different definitions can conflict.
- D. Because the team forgot to remove sensitive attributes from the data.

**Key: C.** Microsoft notes that many quantitative fairness metrics cannot all be satisfied simultaneously, and NIST's bias report documents that fairness definitions can conflict, so teams must choose which goal fits the context. An unrepresentative sample or a missing metric would not create a conflict between two valid fairness goals, and removing attributes would not resolve one.

**Q3.** A medical screening model flags patients who need follow-up. The hospital defines fairness as: among patients who genuinely need follow-up, the model should flag people in each group at a similar rate. Which fairness framing is the hospital using?

- A. Equal outcomes, because it compares final flag rates across all patients.
- B. Equal error rates, because it compares all mistakes across groups.
- C. Bias removal, because it removes sensitive attributes from the model.
- D. Equal opportunity, because it focuses on qualified patients receiving the good outcome at similar rates.

**Key: D.** Equal opportunity focuses on the rate of the positive outcome among those who genuinely qualify, which is exactly what the hospital defined; NIST's bias report lists equality of opportunity among fairness metrics, and Microsoft lists it as a parity constraint. Comparing all patients compares overall outcomes, not just qualified ones, and error-rate and attribute-removal framings do not match the hospital's definition.

**Q4.** A university finds that its admissions model scores applicants from one region lower, even after the region field was removed from the model. Which statement best explains what is happening?

- A. The model is biased, so the university should delete more fields until the scores even out.
- B. The model may be treating people unfairly through proxies, because other fields can stand in for region.
- C. The model is fair because the sensitive attribute is no longer in the data.
- D. The university should report the model to a regulator, because any group difference is illegal.

**Key: B.** NIST's bias report warns that proxies may hide protected attributes yet still reveal sensitive information, so other fields can stand in for region even after the region field is removed. Deleting fields at random is not a tested remedy, attribute removal does not by itself make a system fair, and group differences require investigation rather than an automatic finding of illegality.

**Q5.** A city wants to check whether its traffic-fine review system treats drivers fairly. Which approach best reflects recommended auditing practices?

- A. Compare the system's overall accuracy with the accuracy of the previous paper-based process.
- B. Ask the system's developers whether they intended any group to be treated differently.
- C. Test the system's outcomes and error rates across groups defined by sensitive attributes, using representative data, and document the results.
- D. Remove all sensitive attributes from the system and declare the audit complete.

**Key: C.** Microsoft describes fairness assessment as computing metrics across subgroups defined by sensitive features, NIST's bias report emphasizes test, evaluation, validation, and verification along with transparency, and Google's crash course teaches evaluating predictions for fairness. Comparing only overall performance misses group differences, intent does not prevent harm, and removing attributes is not an audit.

## Sources

- National Institute of Standards and Technology (NIST). *Towards a Standard for Identifying and Managing Bias in Artificial Intelligence* (NIST Special Publication 1270). https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf
- National Institute of Standards and Technology (NIST). *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- Microsoft Learn. *Machine learning fairness — Azure Machine Learning*. https://learn.microsoft.com/en-us/azure/machine-learning/concept-fairness-ml
- Google for Developers. *Fairness — Machine Learning Crash Course*. https://developers.google.com/machine-learning/crash-course/fairness
- National Institute of Standards and Technology (NIST). *AI Risk Management Framework (AI RMF)*. https://www.nist.gov/itl/ai-risk-management-framework

## Related Topics

- data-science-and-ai-literacy:foundations:bias
- data-science-and-ai-literacy:foundations:ai-ethics
- data-science-and-ai-literacy:foundations:nist-ai-risk-concepts
- data-science-and-ai-literacy:foundations:training-data
- data-science-and-ai-literacy:foundations:machine-learning-basics

## Editorial Metadata

- **Topic id:** data-science-and-ai-literacy:foundations:algorithmic-fairness
- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-21
- **Rights:** reference-only sources; no source wording adapted; all prose original
- **Transformation:** facts synthesized from NIST publications, Microsoft Learn documentation, and Google's Machine Learning Crash Course into original lesson prose at literacy level; no formulas and no source sentences reproduced.
