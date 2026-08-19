# Engineering Design Process

## In 30 Seconds

Engineering design is a loop, not a staircase. You define a need, turn it into testable requirements, generate concepts, choose one, model it, build something you can test, and discover you were partly wrong. Then you go back and change requirements you thought were settled. The stages are real; the one-way arrow through them is a drawing convention. Authoritative descriptions differ mainly in how finely they slice the same loop.

## Why This Matters

Design courses, capstone projects and accreditation all assume you can work this way. One of ABET's seven student outcomes is the ability to apply engineering design to produce solutions for specified needs, and it attaches public health, safety and welfare to that ability, together with global, cultural, social, environmental and economic factors; a culminating major design experience built on earlier coursework is required separately. Employers care about the same habits for a blunter reason: mistakes found on paper are cheap, mistakes found in fabrication are expensive, and mistakes found in service can hurt people. Learning where the loop turns back, and what evidence justifies turning it, is the skill that transfers to every engineering discipline you might later choose.

## Learning Objectives

- Explain why the engineering design process is iterative and recursive rather than a one-way sequence of stages.
- Distinguish a stakeholder need from an engineering requirement and from a specification.
- Distinguish functional from non-functional requirements and judge whether a requirement is testable.
- Distinguish verification from validation and identify which one a given piece of evidence supports.
- Apply a decision matrix to compare concepts and evaluate how its weights affect the outcome.
- Compare how NASA, ABET and introductory textbooks describe the process, and explain why they differ.

## The College Version

### The loop, not the staircase

Almost every diagram of engineering design shows a sequence: define the problem, research it, write requirements, generate concepts, evaluate and select, model and analyze, prototype and test, iterate, communicate. The stage names are real. The straight arrow running through them is not. NASA's systems engineering handbook says its technical processes are applied both iteratively and recursively, and gives the two words separate meanings: iterating is reapplying a process to the same product to correct a discrepancy found against requirements, while recursion is applying the same processes again one layer down in the design, or again in the next life cycle phase to mature the definition. ABET's accreditation criteria describe engineering design the same way, as an iterative, creative, decision-making process rather than an ordered list of steps. On a real project you find during analysis that a requirement is unreachable, during testing that the requirement measured the wrong thing, and during a review that a stakeholder need was never written down. Each discovery sends you backward on purpose. Progress is measured not by how far down the list you are but by how much uncertainty you have removed.

### Need, requirement, specification

These three words are not synonyms, and students who treat them as synonyms produce documents nobody can test. A need belongs to a stakeholder and is stated in the stakeholder's language: a greenhouse manager wants to know whether the plants are getting too cold overnight. A requirement is the engineering team's disciplined restatement of what the system must do, written so compliance can be demonstrated: one obligation per statement, with a measurable criterion. A specification is more particular still, the build-to and code-to detail such as materials, dimensions, interfaces and quality of work. NASA's process reflects that ladder directly, moving from stakeholder expectations to technical requirements to end-product specifications, each level derived from the one above. Requirements are checked for being clear, correct, complete and achievable before they are baselined and put under configuration control, typically at a System Requirements Review. Baselining does not freeze the truth. NASA names requirements creep explicitly and points out that some genuinely new requirements could not have been anticipated earlier and cannot be ignored if the system is to stay relevant. Change control exists to make the cost of a change visible, not to forbid it.

### Functional and non-functional requirements

Functional requirements say what the system must do. NASA separates those from performance requirements, which say how well each function must be performed, and from interface requirements, which govern how products interact. Everything else is commonly swept into the phrase non-functional requirement: reliability, maintainability, manufacturability and the rest of the '-ilities', plus environmental, safety, human factors, cost, schedule and regulatory obligations. NASA calls these crosscutting requirements, since they cut across product boundaries instead of belonging to one box. The vocabulary varies by industry, so do not memorize the buckets. Memorize the test: a requirement of any kind is only useful if you can say, before you build anything, what evidence would show it was met. 'The logger shall be reliable' fails that test. 'The logger shall operate for at least 30 days on one battery charge' passes it, because it names a quantity and a duration someone can measure. The practical failure mode is ordering: teams write functional requirements first, discover the non-functional ones late, and find that the qualities they ignored are the expensive ones to retrofit.

### Generating concepts, then judging them

Concept generation and concept selection are different activities, and running them at the same time is the most common way a design team ends up with one mediocre idea. NASA's decision analysis process treats generating alternatives as its own step, suggests brainstorming with people who know the context and searching the literature for related systems, and says all possible options should be considered before a trade tree is used to prune the variations ahead of detailed analysis. An open introductory engineering text makes the same move, requiring at least three genuinely distinct alternatives before any analysis begins. The reason to defer judgment is practical rather than motivational: an idea is cheapest to evaluate when it is described well enough to compare, and the first plausible idea usually gets evaluated against nothing. Deferring also protects the record. Options discarded early, with a written reason, are the material a later review needs when someone asks why the obvious approach was not taken.

### Choosing: decision matrices and their honest limits

A decision matrix scores each option against weighted criteria and totals the result. NASA treats a completed matrix as a default evaluation method, and notes that filling one in is itself iterative, since each cell may need its own analysis, model or test. It also names the limits. Scales must be normalized before they can be combined, and every level on a scale needs an operational definition that is repeatable and measurable, so that 'high' means something a second engineer would score the same way. Uncertainty matters whenever reducing it could credibly change the ranking. The deepest limit is the weights. Consider three concepts scored one to five on battery life, cost and maintainability: A scores 5, 2, 3; B scores 3, 5, 3; C scores 4, 3, 5. With weights of 0.5, 0.3 and 0.2 the totals are A 3.7, B 3.6, C 3.9, so C wins. With weights of 0.3, 0.5 and 0.2 the totals become A 3.1, B 4.0, C 3.7, so B wins. Nothing about the concepts changed. A matrix reports the judgment you fed it, which is why the weights and their rationale should be agreed and recorded before the scoring starts.

### Verification, validation, reviews and gates

Verification asks whether the product complies with its requirements: can it meet each 'shall' statement, proven by test, analysis, inspection, demonstration, or a combination. Validation asks whether the product accomplishes its intended purpose in the intended environment, for the people who will actually use it. NASA's shorthand in its glossary is that verification answers 'Did I build the product right?' and validation answers 'Am I building the right product?'. The two trace to different documents: verification back to the approved requirement set and the configuration baseline, validation back to the concept of operations. Both can happen in every phase, on models, simulations and paper products, not only on finished hardware at delivery. Reviews are where a project checks both in public. NASA separates life cycle phases with Key Decision Points, events at which a decision authority judges readiness to move on, so that phase boundaries give natural go or no-go moments. A Preliminary Design Review is meant to show that the preliminary design meets requirements at acceptable risk, that the right design option was selected, that interfaces are identified and that verification methods have been described; a Critical Design Review shows the design is mature enough to proceed into fabrication, assembly, integration and test. A review is not a ceremony. It is the scheduled moment when going backward is still cheap.

### Documentation as deliverable, failure as information

Documentation is engineering work product, not paperwork appended afterward. NASA runs a technical data management process whose job is to plan for, acquire, store, protect and supply technical data across the whole life cycle, and each design process ends by capturing work products together with the key decisions made, the rationale and assumptions behind them, and lessons learned. Trade study assumptions, models and results go into the project archive. The reason is that a decision without its rationale cannot be reviewed: a later engineer cannot tell whether the assumption that justified it still holds. Failure earns the same treatment. NASA argues for detecting as many errors and failures as possible at the lowest level of integration and as early in the life cycle as possible, so that corrections can be made through the design processes with minimum impact, and observes that late identification and repair costs considerably more because life cycle cost is largely locked in by early design decisions. A test that fails has told you something true about your design for the price of the test. A test that was never run leaves you believing the paper version.

### Why the descriptions differ, and what this lesson is not

You will meet several official descriptions of this process and they will not match. NASA's systems engineering handbook enumerates 17 common technical processes: four system design processes, five product realization processes, and eight technical management processes that cut across the rest. NASA's own classroom material for grades 6 to 12 compresses the same idea into a handful of verbs, asking students to ask, imagine, plan, create, test, improve and share. An open introductory engineering text gives seven steps and promotes constraint identification to a step of its own. ABET gives no step list at all, only a definition of the activity and what it involves. The differences are granularity and audience, not disagreement, because all four contain problem definition, alternatives, evaluation, iteration and communication. What the professional version adds is separation: verification kept apart from validation, requirement kept apart from specification, review gates kept apart from ordinary work. Those are exactly the distinctions a five-arrow circle hides. Finally, a boundary. This is educational material about how designing is organized, not engineering design guidance. Nothing here should be applied to a real structure, pressure vessel, electrical installation, vehicle or machine; real design work requires a licensed or otherwise qualified engineer working to the governing codes and standards. Constraints and tradeoff analysis, prototyping, and testing and validation each get their own lesson.

## Key Vocabulary

- **Need** — A stakeholder's statement of the problem or outcome they want, expressed in their own language and before any solution has been chosen.
- **Requirement** — A single testable obligation on the system, written with a measurable criterion so compliance can be demonstrated by test, analysis, inspection or demonstration.
- **Specification** — Detailed build-to or code-to design particulars derived from requirements, such as materials, dimensions, interfaces and quality of work.
- **Functional requirement** — A statement of something the system must do, naming a function that has to be performed to accomplish the objectives.
- **Non-functional requirement** — An obligation on a quality rather than a function, covering reliability, maintainability, safety, environmental limits, cost and schedule; NASA calls these crosscutting requirements.
- **Verification** — Evidence that a product complies with its stated requirements, shown by test, analysis, inspection or demonstration; it answers whether the product was built right.
- **Validation** — Evidence that a product accomplishes its intended purpose in the intended environment for its real users; it answers whether the right product was built.
- **Iteration** — Reapplying a process to the same product in order to correct a discrepancy or other variation discovered against the requirements.
- **Design review** — A scheduled evaluation of a design's maturity, risk and evidence against defined criteria, held before a project commits resources to the next stage of work.
- **Decision matrix** — A table that scores candidate options against weighted evaluation criteria and totals the scores so alternatives can be compared on a common basis.

## Eli-10

Engineers do not know the right answer when they start, and the process is how they organize finding out. First they figure out what problem they are actually solving and who has it. Then they write down what the solution must do, in a way that can be checked later with a measurement rather than an opinion. Then they think up several different ideas on purpose, because the first idea is rarely the best and you cannot compare one idea to nothing. They pick one, work out the numbers, build something small, and test it. The test almost always shows something they got wrong, and that is the point of testing. So they go back, sometimes only to fix a number, sometimes all the way back to change what the thing is supposed to do. Every loop they write down what they decided and why, so that later, when someone asks, the answer is in the file instead of in somebody's memory.

## Eli's Analogy

It is like cooking a dish for a friend's dinner party. You read the recipe, you taste as you go, you adjust, and near the end you discover your friend does not eat dairy, which changes the recipe rather than the seasoning. Checking that you followed the recipe is verification. Checking that your friend can actually eat and enjoy the dish is validation.

**Where the analogy breaks down.** The analogy breaks down over cost and consequence. In a kitchen you can taste at every moment for free and fix most mistakes by adding something; in engineering many tests are expensive, destructive, or possible only once, which is why engineers substitute analysis, models and scheduled reviews to get the same information earlier. Nobody holds a formal design review before dessert, and a disappointing dinner harms nobody.

## Worked Example

A campus greenhouse manager wants to know whether plants are getting too cold overnight. All values below are illustrative teaching numbers, not component specifications, and every figure was computed with python3 before publication.

First pass. The need becomes two requirements: the logger shall record air temperature at fixed intervals and store the record for later download, and it shall operate at least 30 days on one battery charge. The team specifies a 60-second sampling interval, 8 bytes per record, 2 MiB (2,097,152 bytes) of flash, and a 2,000 mAh battery, and estimates average current at 0.5 mA. At 86,400 s/day divided by 60 s, that is 1,440 records/day, or 11,520 bytes/day, so memory lasts 2,097,152 / 11,520 = 182 days. Battery: 2,000 mAh / 0.5 mA = 4,000 h = 166.7 days. Both requirements look satisfied on paper.

Second pass. The prototype is measured, and the estimate was wrong: the unit draws 90 mA for the 2 seconds it is awake per sample and 0.15 mA asleep, giving an average of 0.15 + (90 - 0.15) x (2/60) = 3.145 mA. Battery life is 2,000 / 3.145 = 635.9 h = 26.5 days, short of the 30-day requirement. Verification fails. At the same review, a second problem surfaces that has nothing to do with the numbers: the manager needs to act on a cold night, and a download-later logger cannot tell them anything until the plants are already damaged. The need was never fully captured, so the requirement set itself changes to add an alert path. The team also relaxes sampling to 300 s, recording the assumption that a 5-minute interval still resolves the overnight minimum well enough for this decision, and flagging that assumption for its own check. Recomputed: 0.15 + 89.85 x (2/300) = 0.749 mA, so 2,000 / 0.749 = 2,670.2 h = 111.3 days of battery, a 4.2x improvement, and 288 records/day at 8 bytes gives 2,304 bytes/day, or 910 days of memory. What changed on the second pass was not only a parameter but a requirement, and the trigger was a measurement plus a review, which is what iteration looks like.

## Common Mistakes

**Mistake.** Reading the stage diagram as a schedule and treating a backward step as failure or wasted time.

**Correction.** Backward steps are the mechanism, not a defect. NASA describes the same processes being reapplied to correct discrepancies and to mature the design layer by layer; plan for loops and judge progress by uncertainty removed.

**Mistake.** Writing a requirement that restates the need without a measurable criterion, such as 'the device shall be reliable and easy to use'.

**Correction.** Before writing it down, name the evidence that would show it was met. A requirement should carry a quantity, a condition and a method someone could later test, analyze, inspect or demonstrate against.

**Mistake.** Treating a passed test as proof that the design is right.

**Correction.** A passed test is verification against the requirements you wrote. If the requirements captured the wrong need, the product can pass every test and still be the wrong product; validation against the intended use is a separate question.

**Mistake.** Evaluating concepts while generating them, so the first workable idea becomes the design by default.

**Correction.** Separate the two activities in time. Generate a set of genuinely distinct alternatives first, then score them, and keep a written record of what was discarded and why.

**Mistake.** Reporting a decision matrix total as if it were an objective measurement.

**Correction.** The weights and the scale definitions carry the judgment, and a different weighting can reverse the ranking without changing any concept. Publish the weights and their rationale before scoring, define each scale level operationally, and test whether plausible changes flip the result.

## Compare / Contrast

**Need vs. Requirement.** A need is the stakeholder's problem in the stakeholder's words and can be vague; a requirement is the engineering team's testable restatement of an obligation on the system, with a measurable criterion. One need usually produces several requirements, and a requirement with no traceable need is a good candidate for deletion.

**Requirement vs. Specification.** A requirement states what must be true and how it will be shown; a specification states the build-to particulars that realize it, such as materials, dimensions and interfaces. Requirements come first and constrain many possible specifications; jumping straight to a specification silently locks in a design choice nobody reviewed.

**Functional requirement vs. Non-functional requirement.** A functional requirement names something the system must do; a non-functional requirement constrains a quality of how it does it, including reliability, maintainability, safety, environmental tolerance, cost and schedule. NASA splits the first into function and performance and calls the second group crosscutting; either way both must be measurable.

**Verification vs. Validation.** Verification proves compliance with the approved requirements and configuration baseline, answering whether the product was built right. Validation shows the product achieves its intended purpose in the intended environment for real users, tracing back to the concept of operations rather than the requirements list. A product can pass verification and fail validation when the requirements captured the wrong need.

**Iteration vs. Recursion.** In NASA's usage, iteration is reapplying a process to the same product to fix a discovered discrepancy against requirements, while recursion is applying the same processes again at the next lower level of the system, or again in the next life cycle phase to mature the definition. Iteration goes back; recursion goes down or forward.

## Key Takeaway

The engineering design process is a loop in which requirements, concepts and evidence are revised against each other, and the professional versions of it earn their complexity by separating need from requirement from specification, and verification from validation.

## Practice Question Bank

**Q1. (recall) In NASA's systems engineering terminology, which question does product validation answer?**

A. Did I build the product right?
B. Is the product under configuration control?
C. Am I building the right product?
D. Has the requirement been baselined?

*Answer: C.* NASA's glossary pairs verification with 'Did I build the product right?' (proof of compliance with specifications) and validation with 'Am I building the right product?' (the product accomplishes its intended purpose based on stakeholder expectations and the concept of operations). Configuration control and baselining are requirements-management activities, not the definition of either term.

*Skill:* Recalling the verification-versus-validation distinction

**Q2. (understanding) A greenhouse manager says 'I need to know if my plants are getting too cold at night.' A team writes 'The logger shall record air temperature at least once every 5 minutes.' A drawing note says 'Sensor: 3 mm thermistor, potted, 2 m lead.' What are these three statements, in order?**

A. Need, requirement, specification
B. Requirement, specification, need
C. Specification, need, requirement
D. Need, specification, requirement

*Answer: A.* The manager's statement is a need in stakeholder language with no measurable criterion. The 'shall' statement is a requirement: one obligation with a quantity that can be tested. The drawing note gives build-to particulars, which is a specification. The other orderings misplace at least one of the three levels.

*Skill:* Classifying statements as need, requirement, or specification

**Q3. (application) A data logger is required to run at least 30 days on one charge. Measured on the prototype it averages 3.145 mA from a 2,000 mAh battery, giving 635.9 hours, or 26.5 days. Slowing the sampling interval from 60 s to 300 s lowers the average to 0.749 mA. What is the best reading of this result?**

A. The 30-day requirement was verified, since 26.5 days is within engineering tolerance of 30
B. Verification failed at 60 s; the 300 s configuration gives about 111 days and should itself be verified, and the sampling change must be checked against the need
C. The requirement should be rewritten to 26 days so the existing prototype passes
D. Battery endurance is a functional requirement, so it can be waived once a function works

*Answer: B.* 2,000 mAh / 3.145 mA = 635.9 h = 26.5 days, which is short of 30 days, so verification fails. At 0.749 mA, 2,000 / 0.749 = 2,670.2 h = 111.3 days, but that configuration still needs its own verification and the slower sampling must be validated against what the manager needs to detect. Loosening a requirement to match a result is not verification, and endurance is a non-functional (crosscutting) requirement, not a function.

*Skill:* Interpreting a failed verification result and choosing the next loop

**Q4. (analysis) Three concepts are scored 1-5 on battery life, cost and maintainability: A = 5, 2, 3; B = 3, 5, 3; C = 4, 3, 5. With weights 0.5 / 0.3 / 0.2 the totals are A 3.7, B 3.6, C 3.9. With weights 0.3 / 0.5 / 0.2 they are A 3.1, B 4.0, C 3.7. What does this justify concluding?**

A. C is objectively the best concept, since it wins under the first weighting
B. The matrix is invalid because two weightings disagree
C. The ranking depends on weights that encode judgment, so the weights and scale definitions must be agreed, documented and tested for sensitivity
D. Maintainability should be dropped because it never changes the winner

*Answer: C.* No score changed between the two runs; only the weights did, and the winner moved from C to B. That is the standing limit of the method: a matrix returns the judgment supplied to it. NASA's decision analysis guidance requires operational definitions for normalized scales and warns that uncertainty matters when it could credibly change the ranking. The matrix is not invalid, and maintainability contributes to every total.

*Skill:* Evaluating the limits of weighted decision matrices

**Q5. (understanding) NASA's handbook lists 17 common technical processes, NASA's grades 6-12 classroom material uses a short verb loop (ask, imagine, plan, create, test, improve, share), and ABET supplies a definition with no step list. What best explains the difference?**

A. They describe the same activity at different granularity for different audiences, all containing problem definition, alternatives, evaluation, iteration and communication
B. They describe incompatible processes, so only the NASA handbook version is correct
C. Only ABET's version applies to accredited engineering programs, so the others are informal
D. The classroom version omits iteration, which is why it has fewer stages

*Answer: A.* The descriptions differ in slicing and audience rather than substance: each contains problem definition, generating alternatives, evaluation, iteration and communication. The professional version mainly adds separations, such as verification from validation and requirement from specification. The classroom loop explicitly includes 'improve', so it does not omit iteration, and ABET's criteria govern accreditation without contradicting NASA's process description.

*Skill:* Comparing authoritative descriptions of the design process

## Sources

- `nasa-se-handbook-sp-2016-6105-rev2`
- `abet-eac-criteria-2025-2026`
- `nasa-next-gen-stem-engineering-design-process`
- `libretexts-intro-engineering-design-process`

Full source records, licences and verification notes: `editorial/subjects/engineering-fundamentals/evidence/engineering-design-process.json`.

## Related Topics

- `engineering-fundamentals:engineering-thinking:what-engineers-do`
- `engineering-fundamentals:engineering-thinking:engineering-constraints-and-tradeoffs`
- `engineering-fundamentals:engineering-practice:prototyping`
- `engineering-fundamentals:engineering-practice:testing-and-validation`
- `engineering-fundamentals:engineering-practice:engineering-communication`

## Editorial Metadata

- Topic id: `engineering-fundamentals:engineering-thinking:engineering-design-process`
- Editorial status: READY_TO_PUBLISH
- Estimated minutes: 12
- Researched: 2026-08-19
- Research status: source-verified
- Rights: Two NASA publications (public use permitted) plus ABET criteria and a CC BY-NC LibreTexts chapter held as reference-only; no source prose adapted and no standards text reproduced.
- Transformation: Facts on iteration and recursion, requirement levels, verification and validation, reviews and gates, decision analysis and technical data management were drawn from NASA/SP-2016-6105 Rev2; the accreditation definition of engineering design came from ABET's 2025-2026 EAC criteria; two shorter descriptions (NASA Next Gen STEM, an open introductory engineering text) were used only to show how granularity varies. All prose is original, and every number in the worked example, prose and questions was executed with python3 before publication. This lesson is educational material, not engineering design guidance.
- Safety note: this lesson is educational material about how engineering design work is organised. It is not engineering design guidance, and nothing in it should be applied to a real structure, pressure vessel, electrical installation, vehicle or machine. Real design requires a licensed or otherwise qualified engineer working to the governing code.
- All arithmetic in the worked example and question bank was executed with python3 before publication.
