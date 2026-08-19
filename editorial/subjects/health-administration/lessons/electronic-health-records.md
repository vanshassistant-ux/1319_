# Electronic Health Records

## In 30 Seconds

An electronic health record is the digital system a care team uses to document care, place orders, and share a patient's information across settings. It is more than a screen version of a paper chart: an EHR is built to move information beyond the practice that created it. Learn what an EHR does day to day, the 2009 HITECH Act and incentive programs that drove near-universal U.S. adoption, the certification and standards that let systems exchange data, the information-blocking rule that requires sharing it, and the real costs in clinician time and alert fatigue. This is educational material, not clinical or IT-procurement advice.

## Why This Matters

The EHR is the operational spine of a modern provider organization. Scheduling, orders, results, documentation, quality measurement, and billing all pass through it, so nearly every administrative and clinical workflow depends on how it is configured and governed. As of 2024, 91% of U.S. office-based physicians and more than 99% of non-federal acute care hospitals use a certified EHR, up from single-digit and teens percentages in 2008, so a manager today inherits a system, not a blank page. Understanding the policy history explains why the technology looks the way it does, and understanding its trade-offs, from documentation burden to alert fatigue, explains why clinician satisfaction and safety depend on decisions administrators make about it. Knowing the standards and the information-blocking rules lets a leader read a vendor contract or a data-sharing dispute without getting lost.

## Learning Objectives

- Distinguish an electronic health record (EHR) from an electronic medical record (EMR).
- Describe the core functions of an EHR: documentation, computerized provider order entry, clinical decision support, results review, and e-prescribing.
- Explain how the HITECH Act and its incentive programs drove U.S. EHR adoption, and trace the renaming of Meaningful Use to Promoting Interoperability.
- Identify the roles of ONC certification and the interoperability standards HL7, FHIR, and USCDI at a conceptual level.
- Explain the 21st Century Cures Act information-blocking rule and who it applies to.
- Analyze real EHR trade-offs, including documentation burden, alert fatigue, and usability.

## The College Version

### EHR versus EMR: the scope is the whole point

The two terms are often used interchangeably, but the distinction is real and worth getting right. An electronic medical record (EMR) is essentially a digital version of the paper chart within one practice: it holds the medical and treatment history of that practice's patients, and its information does not travel easily out of the practice that created it. An electronic health record (EHR) is designed from the start to reach beyond the organization that first collects the information. An EHR is built to contain and share data from all the clinicians involved in a patient's care, so an authorized provider in another setting can access what they need to treat the patient. Put simply, the difference is scope and shareability: an EMR is a record inside four walls, while an EHR is meant to be interoperable across the health system. This is not a pedantic point. Federal incentive programs, certification, and interoperability rules are all built around the EHR concept precisely because the value of a digital record grows when it can follow the patient. In everyday speech clinicians still say "the EMR," and many systems marketed as EHRs fall short of full interoperability, but the intended distinction is that an EHR is a shareable, longitudinal record rather than an isolated one.

### What an EHR actually does: the core functions

Beneath the label, an EHR is a bundle of functions that together replace the paper chart, the order sheet, and the prescription pad. Clinical documentation is the visible core: progress notes, histories, problem lists, medication lists, and vital signs recorded in structured and free-text form. Computerized provider order entry (CPOE) lets a clinician enter and transmit orders, for medications, laboratory tests, and diagnostic imaging, electronically instead of on paper, which removes illegible handwriting and ambiguous abbreviations and speeds order communication. Clinical decision support (CDS) works alongside ordering to give real-time feedback, such as checking a new order against the patient's allergies, other medications, and dosing rules, and flagging potential drug-drug interactions. Results review brings laboratory and imaging results back into the same record so they can be tracked and acted on rather than lost on paper. Electronic prescribing (e-prescribing) transmits prescriptions directly to a pharmacy and can surface a patient's known allergies and current medications at the moment of prescribing. These functions are also the yardstick for certification: to meet the base EHR definition, a system's CPOE capability must be certified for at least one of medications, laboratory, or imaging orders. Understanding the functions matters administratively because most of the benefits, and most of the burdens, of an EHR come from how these specific capabilities are configured and used.

### Why adoption happened: HITECH and the incentive programs

Digital records existed for decades before most providers used them, because adoption was expensive and the payoff to any single practice was uncertain. That changed with policy. The Health Information Technology for Economic and Clinical Health (HITECH) Act, enacted in 2009 as part of the American Recovery and Reinvestment Act, put federal money behind adoption. It authorized the Medicare and Medicaid EHR Incentive Programs, which began in 2011 and paid eligible clinicians and hospitals to adopt and then meaningfully use certified EHR technology (CEHRT). The effect on adoption was dramatic. In 2008, before the incentives, roughly 9% of non-federal acute care hospitals and 17% of office-based physicians had adopted an EHR. As of 2024, ONC reports that 91% of office-based physicians and more than 99% of non-federal acute care hospitals use a certified EHR. HITECH also strengthened the privacy and security backdrop the records live under, extending HIPAA obligations, though the privacy and security rules themselves are a separate subject. The takeaway for administrators is that the near-universal EHR footprint they now manage is a policy artifact: it was built quickly, on federal timelines and definitions, which shaped the products the market produced.

### From Meaningful Use to Promoting Interoperability

The incentive programs did not just pay providers to buy software; they required them to demonstrate "meaningful use" of it against staged criteria. Meaningful Use rolled out in stages between 2011 and 2017: Stage 1 emphasized capturing and sharing data, Stage 2 advanced clinical processes such as e-prescribing and information exchange, and Stage 3 focused on improved outcomes. In 2015, the Medicare Access and CHIP Reauthorization Act (MACRA) folded meaningful use for many clinicians into a broader performance program. In April 2018, CMS renamed the EHR Incentive Programs the Promoting Interoperability Programs, signaling a shift in emphasis from simply adopting technology toward using it to share information and give patients access to their own data. The program's structure narrowed over time: beginning in 2022 the Medicaid portion ended, leaving the Medicare Promoting Interoperability Program for eligible hospitals and critical access hospitals. For an administrator, the naming history is not trivia. It tracks a real change in what the government pays for, from installing systems to actually exchanging data, and today's reporting requirements descend directly from it.

### Certification, standards, and interoperability: ONC, HL7, FHIR, USCDI

For records to be shareable, systems have to agree on what data to exchange and how. Two mechanisms make that possible. The first is certification. The Office of the National Coordinator for Health IT (ONC), renamed in 2024 to the Assistant Secretary for Technology Policy and Office of the National Coordinator, or ASTP/ONC, runs the Health IT Certification Program, which tests EHR technology against federal criteria for functions, security, and interoperability; software that passes is certified EHR technology. The second is standards. HL7 (Health Level Seven) is the standards development organization that authors many of the specifications health IT uses. Its Fast Healthcare Interoperability Resources standard, FHIR, is a modern, API-based standard that lets clinical and administrative data be exchanged in modular components called resources; it has become the common standard that certified systems must support for standardized data access. The United States Core Data for Interoperability (USCDI) is the companion piece: a standardized set of health data classes and their constituent data elements that everyone agrees should be exchangeable. A useful way to hold these apart is that USCDI defines *what* data should be shared, while FHIR specifies *how* it moves. Certification then requires products to support USCDI data through FHIR-based interfaces, which is what turns "interoperability" from a slogan into a testable requirement.

### The 21st Century Cures Act and information blocking

Having the ability to share data does not guarantee that it is shared. The 21st Century Cures Act, enacted in 2016, addressed that gap by prohibiting "information blocking." ONC's Cures Act Final Rule, published in 2020, defines information blocking as a practice by a regulated actor that is likely to interfere with the access, exchange, or use of electronic health information (EHI), except where required by law or covered by a defined exception. The rule applies to three kinds of actors: health care providers, health IT developers of certified health IT, and health information exchanges and networks. It also sets out a set of exceptions, codified at 45 CFR Part 171, that describe reasonable and necessary practices, such as protecting patient privacy or system security, that do not count as information blocking. The prohibition took effect for actors on April 5, 2021. For administrators this reframes data sharing from a courtesy into a compliance obligation: declining to release a patient's electronic health information now needs a lawful basis or a recognized exception, not merely institutional preference. The rule works alongside, not against, HIPAA, which governs how protected health information may be used and disclosed; the specifics of that privacy framework belong to a separate lesson.

### The real trade-offs: documentation burden, alert fatigue, and usability

EHRs delivered real gains, legible orders, decision support, and data that can follow a patient, but the operational costs are well documented and are a management problem, not a footnote. Documentation burden is the most cited. Requirements for billing, quality reporting, and regulatory compliance push clinicians to enter more and more into the record, and the time spent doing so is associated with clinician burnout. The problem was serious enough that Congress, in Section 4001 of the Cures Act, directed HHS to produce a strategy to reduce EHR-related burden; ONC released that strategy in February 2020, targeting clinical documentation, usability, and reporting requirements. A second cost is alert fatigue. Clinical decision support fires warnings for interactions, allergies, and dosing, but many alerts are low-value, and clinicians override the large majority of them; studies find override rates for drug-drug interaction alerts commonly ranging from roughly half to nearly all, and AHRQ notes that alerts are only modestly effective at best while excessive alerting can desensitize clinicians and cause them to miss the important warning among the trivial ones. Underlying both is usability: an EHR configured with too many required fields and too many pop-ups turns a tool meant to help into a source of friction. The administrative lesson is that an EHR's value is not fixed by the vendor; it is shaped by how the organization configures documentation, tunes alerts, and governs workflows.

## Key Vocabulary

- **Electronic health record (EHR):** A digital record designed to reach beyond the organization that created it, holding information from all the clinicians involved in a patient's care so authorized providers across settings can access it.
- **Electronic medical record (EMR):** A digital version of a single practice's chart, containing that practice's patients' medical and treatment history; its information does not travel easily outside the practice.
- **Computerized provider order entry (CPOE):** The EHR function by which a clinician enters and transmits orders, such as medications, lab tests, and imaging, electronically rather than on paper, removing illegible handwriting and speeding order communication.
- **Clinical decision support (CDS):** EHR functionality that gives clinicians real-time, patient-specific feedback while ordering, such as checking against allergies, current medications, and dosing rules and flagging potential drug-drug interactions.
- **HITECH Act:** The Health Information Technology for Economic and Clinical Health Act, enacted in 2009 within the American Recovery and Reinvestment Act, which funded EHR adoption through the Medicare and Medicaid EHR Incentive Programs.
- **Certified EHR technology (CEHRT):** EHR software that has passed the ONC Health IT Certification Program's tests against federal criteria for functionality, security, and interoperability; incentive programs require its use.
- **Promoting Interoperability Programs:** The 2018 renaming of the EHR Incentive Programs (formerly built around Meaningful Use), reflecting a shift in emphasis from adopting technology toward exchanging information and giving patients access to their data.
- **FHIR:** Fast Healthcare Interoperability Resources, an HL7 standard using modern, API-based methods and modular "resources" to exchange clinical and administrative data; the common standard certified systems must support.
- **USCDI:** The United States Core Data for Interoperability: a standardized set of health data classes and their constituent data elements agreed to be exchangeable nationwide, defining what data should be shared.
- **Information blocking:** Under the 21st Century Cures Act, a practice by a regulated actor likely to interfere with the access, exchange, or use of electronic health information, except where required by law or covered by a defined exception (45 CFR Part 171).

## Eli-10

An electronic health record is the computer system a doctor's office or hospital uses instead of a paper folder. It is not just a picture of the old chart. It writes down what happened at the visit, lets the doctor send orders for medicine and tests with a click, and warns them if a new medicine clashes with one you already take. The important part is sharing: a real EHR is built so that if you go to a different clinic, the people there can see the information they need. For years most offices used paper because switching cost a lot. Then in 2009 the government started paying doctors and hospitals to switch and to use the systems in useful ways, and almost everyone did. The catch is that all that clicking and all those warnings take time, and too many pop-up alerts can make people stop reading them.

## Eli's Analogy

Think of the difference between a notebook you keep in one desk drawer and a shared online document. An EMR is the notebook: everything about a patient is written down, but it lives in one office's drawer, and if you go somewhere else, they cannot see it. An EHR is meant to be the shared document: the same notes, but reachable by the other clinics and pharmacies that are allowed in, and updated as care happens.

**Where the analogy breaks down:** The shared-document picture is friendlier than reality. A real EHR only shares when systems speak compatible standards and when rules require it, which is exactly why the government had to define standards like FHIR and pass an information-blocking rule to force sharing. A shared document also opens instantly to anyone with the link; an EHR guards access tightly under privacy and security law, and different vendors' systems still often struggle to exchange data cleanly.

## Worked Example

Trace one prescription through an EHR to see the functions work together. A patient with a new infection is seen at a clinic. The clinician opens the record (documentation), reviews the problem list and the active medication list, and uses computerized provider order entry to order an antibiotic. As the order is entered, clinical decision support checks it against the record: it sees a documented penicillin allergy and a current medication that interacts with the proposed drug, and it fires an alert. The clinician reads the alert, chooses a different antibiotic, and the e-prescribing function transmits the new prescription straight to the patient's pharmacy. A lab test ordered at the same visit returns two days later and appears in results review in the same record rather than on a loose printout. Now suppose the patient later goes to an urgent care across town. Because the clinic's system is certified EHR technology that supports USCDI data through a FHIR interface, the urgent care can request the medication list and allergies; and under the Cures Act information-blocking rule, the clinic generally cannot refuse to share that electronic health information without a lawful basis or a recognized exception. The same episode shows both the payoff (the allergy was caught, the record followed the patient) and the friction (the clinician had to stop for an alert, one of many they see each day).

## Common Mistakes

- **Treating "EMR" and "EHR" as identical, or as just a screen version of the paper chart.** An EMR is a single practice's digital chart whose data stays inside that practice; an EHR is designed to share information from all of a patient's clinicians across settings. The defining difference is scope and shareability, not merely being digital.
- **Believing U.S. providers adopted EHRs mainly because the technology improved.** Digital records existed long before widespread use. Adoption jumped after the 2009 HITECH Act funded it through the Medicare and Medicaid EHR Incentive Programs, moving hospital adoption from about 9% in 2008 to more than 99% by 2024. The driver was policy and money, not a sudden technical leap.
- **Thinking "Meaningful Use" and "Promoting Interoperability" are two different programs.** They are the same lineage. Meaningful Use was the set of criteria under the EHR Incentive Programs; CMS renamed those programs the Promoting Interoperability Programs in 2018 to emphasize data exchange and patient access rather than mere adoption.
- **Assuming the information-blocking rule and HIPAA are the same thing, or that they conflict.** HIPAA governs how protected health information may be used and disclosed; the Cures Act information-blocking rule requires that electronic health information not be unreasonably withheld from access, exchange, or use. They operate together, and the blocking rule includes exceptions, such as protecting privacy and security, that keep it consistent with HIPAA.
- **Assuming more clinical decision support alerts always means safer care.** Alerts help only when they are relevant. Clinicians override the majority of drug-drug interaction alerts, and excessive low-value alerting causes alert fatigue, which can lead a clinician to dismiss the rare important warning. Effective decision support depends on tuning alerts, not maximizing them.

## Compare / Contrast

- **Electronic medical record (EMR)** vs **Electronic health record (EHR):** An EMR is one practice's digital chart whose data stays inside that practice; an EHR is built to share a patient's information from all their clinicians across organizations. The difference is scope and shareability.
- **Meaningful Use** vs **Promoting Interoperability:** Same program lineage: Meaningful Use was the staged criteria (2011-2017) under the EHR Incentive Programs; CMS renamed those programs Promoting Interoperability in 2018 to stress data exchange and patient access over adoption.
- **USCDI** vs **FHIR:** USCDI defines *what* data (the standardized classes and elements) should be exchangeable; FHIR is the HL7 standard that specifies *how* that data is exchanged, using API-based modular resources.
- **Information-blocking rule (21st Century Cures Act)** vs **HIPAA:** The blocking rule requires that electronic health information not be unreasonably withheld; HIPAA governs how protected health information may be used and disclosed. They work together, and the blocking rule's exceptions preserve privacy and security.

## Key Takeaway

An EHR is a shareable, multi-provider digital record, not just a one-practice EMR; its core functions are documentation, CPOE, clinical decision support, results review, and e-prescribing. The 2009 HITECH Act and its incentive programs (Meaningful Use, renamed Promoting Interoperability in 2018) drove U.S. adoption above 90-99%, while ONC certification and the HL7 FHIR and USCDI standards make exchange possible and the Cures Act information-blocking rule requires it, all against real costs in documentation burden and alert fatigue.

## Practice Question Bank

1. **What primarily distinguishes an electronic health record (EHR) from an electronic medical record (EMR)?**
   - A. An EHR is designed to share a patient's information across organizations and clinicians, while an EMR's data generally stays within the single practice that created it *(correct)*
   - B. An EHR is stored on paper while an EMR is stored digitally
   - C. An EHR is used only by hospitals while an EMR is used only by pharmacies
   - D. An EHR contains billing data only, while an EMR contains clinical data only

   The defining difference is scope and shareability. An EMR is a digital version of one practice's chart whose information does not travel easily outside that practice; an EHR is built to reach beyond the originating organization and hold information from all the clinicians involved in a patient's care. Both are digital, both hold clinical information, and neither is defined by care setting or by being billing-only.

2. **U.S. EHR adoption rose from single-digit and teens percentages in 2008 to near-universal by the 2020s. Which federal action is most responsible for driving that adoption?**
   - A. The 21st Century Cures Act information-blocking rule
   - B. The HIPAA Privacy Rule of 2003
   - C. The HITECH Act of 2009, which funded adoption through the Medicare and Medicaid EHR Incentive Programs *(correct)*
   - D. The Medicare Access and CHIP Reauthorization Act's MIPS scoring

   The HITECH Act, enacted in 2009 within the American Recovery and Reinvestment Act, created the Medicare and Medicaid EHR Incentive Programs that paid clinicians and hospitals to adopt and meaningfully use certified EHR technology; adoption jumped accordingly (hospitals from about 9% in 2008 to over 99% by 2024). The Cures Act information-blocking rule (2016/2021) governs sharing existing records, the HIPAA Privacy Rule addresses use and disclosure, and MACRA's MIPS came later and restructured incentives rather than launching adoption.

3. **In 2018, CMS renamed the EHR Incentive Programs. What was the new name, and what did the change signal?**
   - A. The Certified Health IT Programs, signaling a new focus on software testing
   - B. The Promoting Interoperability Programs, signaling a shift from mere adoption toward data exchange and patient access *(correct)*
   - C. The Meaningful Use Programs, signaling the start of staged criteria
   - D. The National Health Information Network, signaling the creation of a single federal database

   CMS renamed the EHR Incentive Programs the Promoting Interoperability Programs in 2018, reflecting an emphasis beyond simply adopting technology toward using it to exchange information and give patients access to their data. Meaningful Use was the earlier criteria set, not a later name; the certification program is a separate ONC function; and no single federal patient database was created.

4. **A hospital's certified EHR can technically export a patient's medication list and allergies, but the hospital refuses a competing clinic's legitimate request for that data purely to keep the patient's business. Under current federal rules, how is this best characterized?**
   - A. Fully permissible, because a hospital owns its records and may share them at its discretion
   - B. A HIPAA Security Rule violation, which is the only rule that governs data sharing
   - C. Required behavior under Meaningful Use Stage 1
   - D. Likely information blocking under the 21st Century Cures Act, which prohibits regulated actors from unreasonably interfering with the access, exchange, or use of electronic health information absent a recognized exception *(correct)*

   The Cures Act information-blocking rule prohibits regulated actors, including health care providers, from practices likely to interfere with the access, exchange, or use of electronic health information unless required by law or covered by a defined exception (45 CFR Part 171); refusing a legitimate request to protect market share fits none of the exceptions. Ownership does not grant unlimited discretion, the Security Rule addresses safeguarding data rather than compelling exchange, and Meaningful Use did not require this specific transfer.

5. **An administrator notices clinicians are dismissing nearly all drug-drug interaction pop-ups in the EHR. Why is simply adding more clinical decision support alerts a poor fix?**
   - A. Because alerts are illegal under the information-blocking rule
   - B. Because clinical decision support cannot check for drug interactions at all
   - C. Because excessive low-value alerts cause alert fatigue, so clinicians override most of them and may miss the rare important warning; alerts are only modestly effective and should be tuned, not maximized *(correct)*
   - D. Because adding alerts automatically disables computerized provider order entry

   Clinicians already override the large majority of drug-drug interaction alerts, and AHRQ notes alerts are only modestly effective at best while excessive alerting causes alert fatigue that can lead clinicians to dismiss the important warning among trivial ones. Adding more alerts worsens the fatigue. Alerts are not illegal, CDS is precisely what checks for interactions, and alerts do not disable CPOE; the right response is to tune alerts for relevance.

## Sources

- Office of the National Coordinator for Health IT (HealthIT.gov), "EMR vs EHR - What is the Difference?" (ONC Blog). https://www.healthit.gov/buzz-blog/electronic-health-and-medical-records/emr-vs-ehr-difference
- Office of the National Coordinator for Health IT (HealthIT.gov), "National Trends in Hospital and Physician Adoption of Electronic Health Records" (Quick-Stats). https://www.healthit.gov/data/quickstats/national-trends-hospital-and-physician-adoption-electronic-health-records
- Centers for Medicare & Medicaid Services, "Medicare and Medicaid Promoting Interoperability Program Basics." https://www.cms.gov/medicare/regulations-guidance/promoting-interoperability-programs/medicare-medicaid-basics
- Office of the National Coordinator for Health IT (HealthIT.gov), Computerized Provider Order Entry (CPOE) certification test method and clinical decision support descriptions. https://www.healthit.gov/test-method/computerized-provider-order-entry-cpoe-medications
- Office of the National Coordinator for Health IT (HealthIT.gov), "Health Level 7 (HL7) Fast Healthcare Interoperability Resources (FHIR)." https://www.healthit.gov/interoperability/investments/fhir
- Office of the National Coordinator for Health IT (HealthIT.gov), "United States Core Data for Interoperability (USCDI)." https://www.healthit.gov/topic/uscdi
- Office of the National Coordinator for Health IT (HealthIT.gov), "Information Blocking." https://www.healthit.gov/topic/information-blocking
- Office of the National Coordinator for Health IT (HealthIT.gov), "Strategy on Reducing Regulatory and Administrative Burden Relating to the Use of Health IT and EHRs" (Final Report, February 2020). https://www.healthit.gov/topic/usability-and-provider-burden/strategy-reducing-burden-relating-use-health-it-and-ehrs
- Agency for Healthcare Research and Quality, Patient Safety Network (PSNet), "The pros and cons of EHR clinical decision support alerts." https://psnet.ahrq.gov/issue/pros-and-cons-ehr-clinical-decision-support-alerts
- U.S. Department of Health and Human Services / Federal Register, 2024 HHS reorganization renaming ONC to ASTP/ONC. https://www.federalregister.gov/documents/2024/12/17/2024-29683/health-data-technology-and-interoperability-protecting-care-access

## Related Topics

- health-administration:information:health-information-management
- health-administration:information:healthcare-data-and-analytics
- health-administration:law-and-policy:patient-privacy
- health-administration:law-and-policy:hipaa-foundations

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 11
- **Researched at:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** U.S. government primary sources (ONC/ASTP/ONC HealthIT.gov, CMS, AHRQ PSNet, HHS/Federal Register) used as reference-only; facts synthesized and all wording original. No source prose reproduced.
- **Chronology verified:** HITECH Act 2009 (ARRA) → EHR Incentive Programs began 2011 → Meaningful Use Stages 1-3 (2011-2017) → MACRA 2015 → renamed Promoting Interoperability Programs April 2018 → Medicaid PI ended 2022. 21st Century Cures Act 2016 → ONC Cures Act Final Rule 2020 → information-blocking applicability April 5, 2021. ONC renamed ASTP/ONC 2024.
