# Testing and Validation

## In 30 Seconds

Verification asks whether you built the thing right: does it meet every stated requirement. Validation asks whether you built the right thing: does it serve the real need in the real environment. Engineers answer both with four methods, inspection, analysis, demonstration and test, using acceptance criteria fixed before the run, instruments traceable to standards with stated uncertainty, and enough samples that the result says something about the population instead of one lucky unit.

## Why This Matters

Testing is what converts a claim about a design into evidence for it. Courses ask you to build something and then claim it works, and the claim is only as good as the evidence behind it, which is why lab reports without uncertainties and senior projects without acceptance criteria lose marks they did not need to lose. Professionally, the same discipline decides whether hardware ships: qualification and acceptance programmes, calibration records and traceability matrices are the paperwork that turns a working prototype into a certified product. The habits also transfer. Deciding what would count as failure before you look at the data is the difference between an experiment and a demonstration, in engineering and everywhere else.

## Learning Objectives

- Distinguish verification from validation and state which document each traces back to.
- Explain the four verification methods and choose an appropriate one for a given requirement.
- Analyze a written requirement for verifiability and rewrite an untestable one so it can pass or fail.
- Apply a confidence interval to an acceptance criterion and state what the interval does and does not claim.
- Evaluate the assumption behind an accelerated life test and explain when its acceleration factor becomes meaningless.
- Distinguish direct cause from root cause after a test failure and explain why a fix reopens earlier verification.

## The College Version

### Two different questions

Verification and validation get collapsed into one abbreviation, then into one activity, which is where projects lose money. NASA's systems engineering handbook keeps them apart: verification is a formal process, using test, analysis, inspection or demonstration, confirming that a system and its hardware and software components satisfy all specified requirements; validation asks whether the realized product accomplishes its intended purpose in the intended environment. The handbook reduces the pair to two questions: was the end product realized right, and was the right end product realized. The international vocabulary of metrology compresses each into a sentence. Verification is the provision of objective evidence that a given item fulfils specified requirements. Validation is verification where the specified requirements are adequate for an intended use. Read together the structure is exact: validation is verification plus a judgement about the requirements themselves. That is why the two trace to different documents, verification to the baselined requirement set and validation to the concept of operations and the need behind it. A product can pass every verification and still fail validation: every requirement met, and the requirements wrong.

### Four methods, and when each one is honest

Verification does not always mean testing. NASA names four methods. Inspection is visual examination of a realized end product, suited to physical features and identification, and it explicitly includes inspection of drawings, documents and records. Analysis uses mathematical modelling and analytical techniques to predict whether a design meets a requirement; it is what you use when no prototype exists, and it covers simulation and verification by similarity to a heritage product. Demonstration shows that using the end product achieves the requirement, a basic confirmation of capability separated from testing by the absence of detailed data gathering, as when a pilot reaches every control in a cockpit mock-up. Test uses the end product to obtain detailed data at discrete points under controlled conditions, and is the most resource-intensive of the four. The method is chosen per requirement, by asking what evidence would settle that question at acceptable cost: a label is settled by inspection, behaviour in an environment nobody can build is settled by analysis, a number with a tolerance is settled by test. Configuration matters as much as method, which is the point of the maxim: test as you fly, fly as you test.

### Traceable requirements, and plans written before the run

Verification means something only against a requirement set you can navigate, so NASA requires bidirectional traceability: each requirement traces back to a parent in a baselined document, or is explicitly identified as self-derived. A requirement with no parent that is not acceptably self-derived signals either flawed traceability work or gold plating that should be eliminated. The matrix recording those links also tells you, when a requirement changes, which verification results just went stale. The second gate is verifiability. NASA's checklist asks whether requirements are free of unverifiable terms, then lists offenders: easy, sufficient, safe, adequate, user-friendly, fast, robust, quickly, and, memorably, other words ending in ly. The system shall be easy to service cannot fail, so it cannot pass. Rewritten as a stated task, by a stated grade of technician, within a stated time, using stated tools, it becomes refutable. An untestable requirement is defective in the way an unfalsifiable claim is defective. The verification procedure exists before anything is measured. NASA's example of its contents: the objectives and criteria established by the applicable requirements specification, the test configuration and any differences from the operational configuration, the characteristics to be inspected, demonstrated or tested including values with tolerances for acceptance or rejection, the sequence of steps and observations, and identification of the measuring equipment by range, accuracy and type, with provision for recording its calibration. NIST's design-of-experiments material makes the same demand: the detailed plan is drawn up in advance of the experiment. The reason is structural: look at the data first and then choose the criterion, and you cannot fail, so passing carries no information. Criteria can legitimately change when a test teaches you the requirement was wrong, but that is a documented change to the requirement followed by a rerun, not a quiet edit to the pass line.

### Instruments, uncertainty and calibration traceability

A test result is a measurement, and a measurement without a stated uncertainty is not a result. Uncertainty components are evaluated statistically from repeated observations, Type A, or from other information such as calibration certificates and manufacturer specifications, Type B; they combine into a combined standard uncertainty, multiplied by a coverage factor to give an expanded uncertainty. NIST notes the coverage factor is typically 2 or 3, with k equal to 2 giving roughly 95 percent confidence when the estimate behaves normally. That is what lets a reading be compared against a limit honestly: if the limit is 12.0 N and the expanded uncertainty is 0.5 N, a reading of 11.8 N is consistent with compliance and with failure, and demonstrates neither. Metrological traceability, the property that connects a reading to a standard, is the property of a measurement result that lets it be related to a reference through a documented unbroken chain of calibrations, each contributing to the measurement uncertainty, and it requires an established calibration hierarchy. NIST spells out what unbroken means: a documented series of calibrations linking the result and its uncertainty to the value and uncertainty of every intermediate standard, up to the highest reference claimed. Traceability is a property of a result, not of an institution, and supporting the claim is the responsibility of whoever provides the result. The metrology vocabulary adds the warning that matters most here: traceability guarantees neither that the uncertainty is adequate for your purpose nor that mistakes are absent.

### Designing the experiment, not just running it

Design of experiments is the discipline of planning runs so the data support valid and objective conclusions. It starts by naming things. Factors are the inputs you set, levels are the settings you give them, and the response is what you measure. The variables you do not set NIST divides into discrete ones, such as which operator ran the machine, and continuous ones, such as ambient temperature; each is controlled, blocked, randomized over, or left free to contaminate the answer. Replication, running the same treatment combination more than once, is what lets random error be estimated separately from lack of fit. Randomization orders the runs so that conditions in one run neither depend on previous conditions nor predict later ones, which stops a drifting room temperature from being read as a factor effect. Blocking concentrates a known nuisance change, such as a new material lot, into the levels of a blocking variable. Varying one factor at a time from a baseline is cheap, three factors costing four runs, but every effect is then measured only at the fixed levels of the others, and no run ever moves two factors together, so no interaction can be estimated. An interaction is exactly the case where the effect of one factor depends on the level of another, so a one-factor-at-a-time study does not merely miss interactions, it reports them as irreproducibility. A two-level full factorial costs 2 to the power k runs, 8 for three factors and 32 for five, and those 8 runs yield seven estimable effects: three main effects, three two-factor interactions and one three-factor interaction. NIST calls full factorials inefficient at five factors or more, pointing to fractional factorial and Plackett-Burman designs instead.

### Destructive and non-destructive, and the probability of detection

A destructive test consumes what it examines: you load the specimen to failure, section the weld, and learn a great deal about an article that no longer exists. Everything you then say about the parts you kept is an inference from a sample to a population, which ties destructive testing to sampling statistics. Non-destructive evaluation breaks that trade-off. NASA defines it as technical methods that examine materials or components in ways that do not impair their future usefulness and serviceability, in order to detect, locate, measure and evaluate flaws and to assess integrity, properties and composition. The catch is that a clean inspection is not proof the part is sound. Detection is probabilistic, and professional practice quantifies it. NASA-STD-5009C requires inspections of fracture-critical hardware to detect the crack sizes used in the damage-tolerance analysis with at least 90 percent probability of detection at 95 percent confidence, written 90/95, and then assumes flaws of that reliably detectable size are present when the safe-life analysis is done. Whatever you cannot reliably see, you design as though it is there.

### Accelerated life, environments, qualification and acceptance

Accelerated life testing raises stress, typically temperature, voltage or cycling rate, to make failures arrive sooner, then converts back with an acceleration factor: the constant multiplier by which time to fail at test stress is scaled to give time to fail at use stress. That conversion carries one assumption. True acceleration means high stress produces the same failures that would have occurred at use stress, from the same causes, on a different time scale. When it does not hold, the arithmetic still produces a number. Raise temperature past a transition and you introduce a mechanism that never occurs in service, so the life prediction describes a product that does not exist. NIST states the guardrail: different failure modes are affected differently by stress and have different acceleration factors, so failure data must be separated by mode before anything is extrapolated. Censoring compounds the difficulty, since when the observation window closes some units have not failed, and the more reliable a product is, the harder it is to get the failure data needed to prove it is reliable. The programme distinctions sit around this. Verification is performed once for a design, as long as the design does not change; qualification is the subset run at the extremes of the environmental envelope to show the design works with expected margins; acceptance is a smaller subset run on every unit produced, showing that manufacturing and workmanship match the verified design; certification is the audit presenting the body of evidence to a certifying authority.

### From one unit to a population

Nearly every test that matters is a sample, and the statistics decide what it licenses you to say. For a mean, the tool is a confidence interval: the sample mean plus and minus a t critical value at N minus 1 degrees of freedom, times the standard error s over the square root of N. NIST states its meaning carefully, that the intervals are constructed so the probability of the interval containing the mean is 1 minus alpha. That is a property of the procedure across repeated sampling, not a claim about individual units: 95 percent of parts do not fall inside a 95 percent confidence interval for the mean, which would be a tolerance interval, wider and answering a different question. The interval also says nothing about systematic error, since miscalibrating the load cell slides the whole interval, confidently, to the wrong place. Attribute data, where units simply pass or fail, is where intuition fails hardest, and the worked example below puts a number on it.

### When it fails: cause, not symptom

A failed test is data, and the discipline is in not stopping at the first explanation. The Department of Energy's root cause guideline separates three things. The direct cause is what directly resulted in the occurrence, the component that leaked or the operator error in the alignment. A contributing cause contributed to the occurrence but by itself would not have caused it. The root cause is the cause that, if corrected, would prevent recurrence of this and similar occurrences; it has generic implications beyond the single event, and you reach it by following the series of causes to the most fundamental point that can be identified and corrected. Replacing the failed seal addresses the direct cause; finding that maintenance intervals were never controlled addresses the root. Then comes the step teams skip. NASA warns that correcting a deficiency can create a new problem in a part or performance that previously worked, and names regression testing, a formal process of rerunning previously used acceptance tests and used primarily for software, as one defence. A change reopens verification you thought was closed.

### What this lesson is and is not

This is educational material about how engineers gather and judge evidence. It is not engineering design guidance, and nothing here should be used to plan or accept a real test of a real product. Standards are described by designation and by what they govern; no test levels, durations, acceptance limits, flaw sizes or sampling plans have been reproduced from any standard. Real verification and validation programmes are written against governing codes and standards, and are planned, approved and interpreted by licensed engineers or the responsible technical authority. The measurement set in the worked example is synthetic teaching data invented for this lesson; every calculation shown was executed before publication, but the numbers describe nothing that exists.

## Key Vocabulary

- **verification method** — The kind of evidence chosen to settle one requirement, drawn from inspection, analysis, demonstration and test, and recorded per requirement rather than for the project as a whole.
- **acceptance criterion** — The value with its tolerance, written into the procedure before the run, that decides in advance which outcomes count as passing and which as failing.
- **requirements traceability** — The recorded link from each requirement up to the parent requirement it derives from and down to the evidence that satisfies it, so that a change anywhere shows which results have gone stale.
- **metrological traceability** — The property of a measurement result that lets it be related to a reference through a documented unbroken chain of calibrations, each step contributing its own share of the uncertainty.
- **calibration** — The operation that first relates the values carried by measurement standards to the indications of an instrument, with uncertainties on both sides, and then uses that relation to turn an indication into a result.
- **probability of detection** — The fraction of flaws of a given size that an inspection actually finds, reported with a confidence bound, because a clean inspection is a probabilistic statement rather than proof of soundness.
- **interaction** — The situation in which the effect of one factor on the response depends on the level of another factor, so neither factor's effect can be described by a single number.
- **replication** — Running the same combination of factor settings more than once, which supplies the estimate of pure random error that lack-of-fit and factor effects are judged against.
- **acceleration factor** — The multiplier between time to failure at test stress and at use stress, valid only while the failure mechanism at the raised stress is the mechanism that acts in service.
- **regression testing** — Rerunning tests that a product already passed, after a change, to check that the fix has not broken behaviour that was previously verified.

## Eli-10

Imagine you order a bookshelf and it arrives flat-packed. Checking that every panel matches the parts list, that the holes are where the drawing says, and that the shelf holds the weight printed on the box is verification: you are comparing the thing against what it was supposed to be. Standing it in your room and discovering that it is two centimetres too tall for the alcove is validation: the shelf is exactly what was specified, and what was specified was wrong. Engineers keep those two checks separate because they fail separately. They also decide, before measuring anything, what counts as a pass. If you measure first and then decide what a good result looks like, you have not tested anything, because you were never going to fail. And they never trust one sample. One shelf that holds is not proof that shelves hold, because you might simply have got a good one.

## Eli's Analogy

Verification is checking that a key was cut to match the drawing. Validation is walking to the door and finding out whether it opens your lock.

**Where the analogy breaks down.** The key stops being useful almost immediately. A key opens or it does not, while real tests produce measurements that carry uncertainty, so the answer is a number with a range rather than a yes. One key tells you about that key, but engineers need statements about thousands of parts, which takes samples and confidence bounds. And keys do not wear out during the test, whereas much of engineering testing is about what happens after years of heat, vibration and cycling, which is why accelerated and environmental testing exist at all.

## Worked Example

A team must show that a latch meets the requirement: mean actuation force shall not exceed 12.0 N. They measure ten units, in newtons: 11.42, 12.05, 11.78, 12.34, 11.61, 12.11, 11.95, 12.48, 11.70, 12.02. These are synthetic teaching numbers, not data from any product. Executed in Python: the sample mean is 11.946 N and the sample standard deviation is 0.3268 N, so the standard error is 0.3268 divided by the square root of 10, or 0.1033 N. With 9 degrees of freedom the 0.975 t quantile is 2.2622, giving a 95 percent confidence interval for the mean of 11.946 plus or minus 2.2622 times 0.1033, that is 11.71 N to 12.18 N. The point estimate passes, and the test does not. The interval reaches above 12.0 N, so the data are consistent with a population mean that violates the requirement, and the honest report is not proven at 95 percent confidence rather than pass. What the interval means: if this whole sampling procedure were repeated many times, 95 percent of the intervals so constructed would contain the true mean. What it does not mean: it is not a claim that 95 percent of latches actuate between 11.71 and 12.18 N, which is a tolerance interval and much wider, and it says nothing about a load cell reading systematically high, which would move the entire interval without widening it. Tightening it is expensive: holding the same scatter, reaching a half-width of 0.10 N takes 44 measurements. Now the attribute version. Suppose a manager proposes testing one latch, and it passes. With zero failures in n trials the one-sided 95 percent upper bound on the population failure fraction is 1 minus 0.05 to the power 1 over n. For n equal to 1 that is 0.95, so a single pass is compatible with 95 percent of the population failing. Ten passes give 25.9 percent, and thirty passes give 9.5 percent, matching the rule of three, 3 over 30. One passing unit is not evidence that the population passes; it only rules out a population that fails essentially always.

## Common Mistakes

- **Mistake:** Running the test first and deciding what counts as acceptable once the numbers are on the screen.
  **Correction:** Fix the objective, configuration, procedure and the acceptance value with its tolerance in the written procedure before the run. A criterion chosen after the data cannot be failed, so passing it carries no information. If the test shows the requirement itself was wrong, change the requirement explicitly and rerun.
- **Mistake:** Reporting a measured value on its own, or treating extra digits on the display as accuracy.
  **Correction:** Report the value with an uncertainty and the coverage factor used, and check it against the limit including that uncertainty. Compliance also depends on calibration, and metrological traceability means a documented unbroken chain of calibrations in which every step contributes its own uncertainty, not simply an instrument that once visited a calibration lab.
- **Mistake:** Treating one passing unit, or one clean non-destructive inspection, as proof that the population is good.
  **Correction:** One pass out of one bounds the population failure fraction only at 95 percent, which is no bound at all. Attribute claims need sample sizes that make the bound small, and inspections need a stated probability of detection with a confidence level, since a clean inspection is a probabilistic result rather than proof of an unflawed part.
- **Mistake:** Converting accelerated test hours to field years without checking what actually broke.
  **Correction:** An acceleration factor is only valid while the mechanism at raised stress is the mechanism that acts in service. Different failure modes accelerate differently, so separate the data by failure mode first, and if the accelerated units died from something the field never sees, the extrapolation is arithmetic about a product that does not exist.
- **Mistake:** Sweeping one variable at a time and concluding you have characterised the design.
  **Correction:** A one-factor-at-a-time sweep never moves two factors together, so it contains no data from which an interaction could be estimated, and it measures each effect only at the fixed levels of the others. A factorial layout tests the combinations, which is what makes interactions visible instead of appearing as unexplained scatter.

## Compare / Contrast

- **Verification vs. Validation** — Verification is objective evidence that the item fulfils its specified requirements, so it traces back to the baselined requirement set and answers whether the thing was built right. Validation is verification where the specified requirements are themselves adequate for the intended use, so it traces back to the concept of operations and answers whether the right thing was built. Passing all verifications while failing validation means the requirements were wrong.
- **Qualification testing vs. Acceptance testing** — Qualification is run once on a design, at the extremes of the environmental envelope, to show it works with the expected margins. Acceptance is a smaller subset run on every unit produced, to show that manufacturing and workmanship match the design that was already verified. Qualification asks whether the design is sound; acceptance asks whether this particular unit was built to it.
- **One factor at a time vs. Full factorial** — One factor at a time varies each factor from a fixed baseline, costing four runs for three factors, and estimates each effect only at those fixed levels. A two-level full factorial costs 2 to the power k runs, 8 for three factors, and yields seven estimable effects: three main effects, three two-factor interactions and one three-factor interaction. Only the factorial contains runs where factors move together, which is the only way an interaction can be seen.
- **Destructive testing vs. Non-destructive evaluation** — Destructive testing consumes the article to obtain complete information about it, so conclusions about the parts you kept are statistical inferences from a sample. Non-destructive evaluation examines a part without impairing its future usefulness, so it can be applied to the flight article itself, at the price that detection is probabilistic and must be characterised by a probability of detection with a confidence bound.
- **Direct cause vs. Root cause** — The direct cause is what immediately produced the failure, such as the component that leaked. The root cause is the one that, if corrected, prevents this and similar occurrences, reached by following the chain of causes to the most fundamental correctable point, such as maintenance intervals never having been controlled. Fixing the direct cause returns the unit to service; fixing the root cause stops the next unit failing the same way.

## Key Takeaway

Verification asks whether the product meets its requirements and validation asks whether those requirements were the right ones, and both are only worth as much as the evidence behind them: criteria fixed before the run, measurements with stated uncertainty traceable to standards, and sample sizes large enough that the conclusion is about the population rather than the one unit you happened to test.

## Practice Question Bank

**1. Which statement best captures the difference between verification and validation?**

   A. Verification is done by the design team and validation is done by an independent reviewer.
   B. Verification provides objective evidence that the item fulfils its specified requirements, while validation additionally asks whether those specified requirements are adequate for the intended use.
   C. Verification applies to hardware and validation applies to software.
   D. Verification happens at the end of the project and validation happens at the beginning.

   *Answer:* B. The metrology vocabulary defines verification as objective evidence that an item fulfils specified requirements and validation as verification where the specified requirements are adequate for an intended use, which matches the systems-engineering framing of building the thing right versus building the right thing. Independence, the hardware and software split, and project timing are all real project concerns but none of them is the distinction: both activities can involve either discipline, either party, and can occur throughout the life cycle on models and paper products as well as finished hardware.
   *Difficulty:* recall · *Skill:* Stating the verification and validation distinction precisely · *Sources:* jcgm-200-2012-vim, nasa-se-handbook-sp-2016-6105-rev2

**2. A requirement states that a warning label bearing specific text must be present on the housing. Which verification method fits, and why?**

   A. Analysis, because a model can predict whether the label will be applied during manufacturing.
   B. Test, because obtaining detailed data at discrete points under controlled conditions is the most rigorous method available.
   C. Inspection, because the requirement concerns a physical feature of the realized product that can be settled by visual examination.
   D. Demonstration, because an operator using the product would encounter the label.

   *Answer:* C. Inspection is visual examination of a realized end product, used for physical design features and identification, and it is exactly what settles a label requirement. Analysis is for cases where hardware is not available and prediction from models or heritage data must stand in. Test obtains detailed data under controlled conditions and is the most resource-intensive method, so choosing it here spends effort without adding evidence. Demonstration confirms a capability in use without detailed data gathering, which does not verify the presence of specific text.
   *Difficulty:* understanding · *Skill:* Selecting an appropriate verification method for a given requirement · *Sources:* nasa-se-handbook-sp-2016-6105-rev2

**3. A requirement caps the mean actuation force at 12.0 N. Ten units give a mean of 11.95 N and a 95 percent confidence interval for the mean of 11.71 N to 12.18 N. What should the verification report say?**

   A. Compliance is not demonstrated at 95 percent confidence, because the interval extends above the 12.0 N limit even though the sample mean is below it.
   B. Pass, because the sample mean of 11.95 N is below the 12.0 N limit.
   C. Fail, because part of the interval lies above the limit, which proves the requirement is violated.
   D. Pass, because 95 percent of units will actuate between 11.71 N and 12.18 N, and most of that range is below the limit.

   *Answer:* A. The interval includes values above 12.0 N, so the data are consistent with a compliant population and with a non-compliant one; the correct report is that compliance was not demonstrated at that confidence, which normally means more samples or a design change. Declaring a pass on the point estimate alone ignores sampling variability. Declaring a fail overstates the evidence in the other direction, since the interval also contains compliant values. The last option confuses a confidence interval for the mean with a tolerance interval for individual units, which is a different and wider interval.
   *Difficulty:* application · *Skill:* Applying a confidence interval to an acceptance decision · *Sources:* nist-ehandbook-confidence-interval-for-the-mean

**4. A team studies three two-level factors by holding two fixed and varying the third, one factor at a time, in four runs. The design later behaves inconsistently in production. What is the most likely limitation of the study?**

   A. Four runs cannot estimate any main effect, so none of the reported factor effects are valid.
   B. The one-factor-at-a-time schedule automatically randomizes run order, which hides the factor effects.
   C. One factor at a time cannot be analysed statistically because it produces no replication.
   D. No run moved two factors together, so the study contains no data from which an interaction could be estimated, and an effect that depends on another factor's level shows up later as unexplained variation.

   *Answer:* D. An interaction exists when the effect of one factor on the response depends on the level of another, and detecting one requires runs in which the factors are combined; a one-factor-at-a-time sweep from a baseline has none, so an interaction cannot appear in the analysis and instead surfaces as irreproducibility. The design does estimate main effects, at the fixed levels of the other factors, so the first option is wrong. Randomization is a schedule the experimenter must impose and is not a property of the one-factor-at-a-time layout. Replication can be added to any design, including this one, so lack of replication is not the structural defect here.
   *Difficulty:* analysis · *Skill:* Diagnosing why an experimental design missed an interaction · *Sources:* nist-ehandbook-doe-glossary, nist-ehandbook-full-factorial-designs, nist-ehandbook-doe-introduction

**5. An accelerated test raises temperature well above service conditions. The units fail, but teardown shows a mechanism, softening of a polymer above its transition temperature, that has never been seen in the field. What does this do to the reported life prediction?**

   A. It strengthens the prediction, because the units failed and produced the failure data the model needed.
   B. It invalidates the extrapolation, because the acceleration factor only converts test time to service time when the mechanism at raised stress is the mechanism that acts in service.
   C. It has no effect, because the acceleration factor depends only on the ratio of the two stress levels.
   D. It means the prediction is conservative and can be reported as a lower bound on service life.

   *Answer:* B. True acceleration means high stress produces the same failures as use stress, from the same causes, only sooner; acceleration models are grounded in the physics or chemistry of a specific mechanism, and different modes have different acceleration factors, so data must be separated by mode. A new mechanism means the model no longer describes the field failure, and the resulting number is arithmetic about a product that does not exist. Getting failures is necessary but not sufficient, since the failures must be the right ones. The acceleration factor is not merely a function of the stress ratio, it depends on the model for the mechanism. Nor is the result safely conservative: the field mechanism went entirely unmeasured, so the prediction could be optimistic in either direction.
   *Difficulty:* analysis · *Skill:* Evaluating the validity assumption behind an accelerated life test · *Sources:* nist-ehandbook-physical-acceleration, nist-ehandbook-reliability-difficulties

## Sources

- **NASA Systems Engineering Handbook, Revision 2 (NASA/SP-2016-6105 Rev2)** — NASA. <https://ntrs.nasa.gov/citations/20170001761> (usage: PUBLIC_DOMAIN)
- **JCGM 200:2012 - International vocabulary of metrology (VIM), 3rd edition** — JCGM / BIPM. <https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf> (usage: REFERENCE_ONLY)
- **Metrological Traceability: Frequently Asked Questions and NIST Policy (NIST Technical Note 2156)** — NIST. <https://www.nist.gov/metrology/metrological-traceability> (usage: REFERENCE_ONLY)
- **Essentials of expressing measurement uncertainty - basic definitions** — NIST Physical Measurement Laboratory. <https://physics.nist.gov/cuu/Uncertainty/basic.html> (usage: REFERENCE_ONLY)
- **Expanded uncertainty and coverage factors** — NIST Physical Measurement Laboratory. <https://physics.nist.gov/cuu/Uncertainty/coverage.html> (usage: REFERENCE_ONLY)
- **NIST/SEMATECH e-Handbook of Statistical Methods, 5.1.1 What is experimental design?** — NIST/SEMATECH. <https://www.itl.nist.gov/div898/handbook/pri/section1/pri11.htm> (usage: REFERENCE_ONLY)
- **NIST/SEMATECH e-Handbook of Statistical Methods, 5.7 A glossary of DOE terminology** — NIST/SEMATECH. <https://www.itl.nist.gov/div898/handbook/pri/section7/pri7.htm> (usage: REFERENCE_ONLY)
- **NIST/SEMATECH e-Handbook of Statistical Methods, 5.3.3.3 Full factorial designs** — NIST/SEMATECH. <https://www.itl.nist.gov/div898/handbook/pri/section3/pri333.htm> (usage: REFERENCE_ONLY)
- **NIST/SEMATECH e-Handbook of Statistical Methods, 7.2.2.1 Confidence interval approach** — NIST/SEMATECH. <https://www.itl.nist.gov/div898/handbook/prc/section2/prc221.htm> (usage: REFERENCE_ONLY)
- **NIST/SEMATECH e-Handbook of Statistical Methods, 8.1.4 What is physical acceleration and how do we model it?** — NIST/SEMATECH. <https://www.itl.nist.gov/div898/handbook/apr/section1/apr14.htm> (usage: REFERENCE_ONLY)
- **NIST/SEMATECH e-Handbook of Statistical Methods, 8.1.3 Common difficulties with reliability data** — NIST/SEMATECH. <https://www.itl.nist.gov/div898/handbook/apr/section1/apr13.htm> (usage: REFERENCE_ONLY)
- **NASA-STD-5009C, Nondestructive Evaluation Requirements for Fracture-Critical Metallic Components** — NASA. <https://standards.nasa.gov/standard/NASA/NASA-STD-5009> (usage: PUBLIC_DOMAIN)
- **DOE-NE-STD-1004-92, DOE Guideline: Root Cause Analysis Guidance Document** — U.S. Department of Energy, Office of Nuclear Energy. <https://www.energy.gov/sites/default/files/2026-04/DOE-NE-STD-1004-92.pdf> (usage: PUBLIC_DOMAIN)

## Related Topics

- `engineering-fundamentals:engineering-thinking:engineering-design-process`
- `engineering-fundamentals:engineering-thinking:units-measurement-and-significant-figures`
- `engineering-fundamentals:engineering-practice:prototyping`
- `engineering-fundamentals:engineering-practice:safety-factors-and-failure`

## Editorial Metadata

- Topic id: `engineering-fundamentals:engineering-practice:testing-and-validation`
- Editorial status: READY_TO_PUBLISH
- Estimated minutes: 12
- Researched at: 2026-08-19
- Research status: source-verified
- Rights status: Mixed: NASA/SP-2016-6105 Rev2, NASA-STD-5009C and DOE-NE-STD-1004-92 are U.S. Government works cleared for public release; the JCGM VIM, the NIST/SEMATECH e-Handbook pages, the NIST CUU pages and the NIST traceability page are reference-only. No source prose was adapted or reproduced; all wording is original.
- Transformation: Facts were verified against primary documents read directly in this run: the NASA Systems Engineering Handbook Rev 2, NASA-STD-5009C and the DOE root cause guideline were downloaded and text-extracted locally, JCGM 200:2012 was downloaded and entries 2.41, 2.44 and 2.45 read, and the NIST/SEMATECH e-Handbook, NIST CUU and NIST metrological-traceability pages were fetched and read. An interrupted earlier worker had left an unvalidated draft at these paths; every source URL was re-resolved, every definition re-read at source, and every number re-executed before anything was carried forward. One claim, a three-element formulation attributed to NIST's traceability page, did not survive re-verification and was rewritten to what the page actually states. Every number in the lesson, worked example and questions was executed in Python, including the t quantile used for the confidence interval, which was written from the regularized incomplete beta function and validated against published t values. The measurement set is synthetic teaching data. The lesson builds on units-measurement-and-significant-figures for uncertainty fundamentals, on engineering-design-process for the design loop, and on prototyping and safety-factors-and-failure for their own material, reusing their source ids without repeating their content.
