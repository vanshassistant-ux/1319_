# AI Privacy

## In 30 Seconds

AI systems run on data, and much of that data is personal. Privacy in the age of AI is about control: who collects information about you, what it is used for, and who can see it. The data AI uses includes training data, what you type into a tool, and records of your online activity. The risks range from unclear consent and long retention to re-identification, data breaches, and models trained on your inputs. Laws such as the EU's GDPR set ground rules, and both individuals and organizations shape how privacy plays out.

## Why This Matters

AI touches almost every service we use — search, shopping, chat assistants, health apps — and each one collects data that can be traced back to people. Privacy decisions shape whether that data is handled with care or exploited, and those decisions are made daily by engineers, companies, and users. Understanding what personal data AI runs on, the risks that come with it, and the basics of data protection law helps you spot problems before they cause harm. It is also a growing subject in classrooms and workplaces, and a foundation for the ethical debates covered elsewhere in this course.

## Learning Objectives

- Define data privacy as people's control over their personal data and identify the kinds of data AI systems use.
- Distinguish training data, user inputs, and behavioral data with original examples.
- Name and explain the main privacy risks of AI: collection without clear consent, retention, re-identification, data breaches, and training on user inputs.
- Explain the general principles of data protection law — consent, purpose limitation, and minimization — as exemplified by the EU's GDPR.
- Apply general privacy habits — checking settings, reading what data is collected, and avoiding sharing sensitive information with AI tools.
- Describe organizational responsibilities for privacy: privacy by design, transparency, and minimization.

## The College Version

### What privacy means when AI is involved

Privacy is a broad idea, but for this lesson a working definition is enough: data privacy is the principle that a person should have control over their personal data, including the ability to decide how organizations collect, store, and use it. That definition comes from IBM's public explainer, read in August 2026, and it matches the framing in NIST's AI Risk Management Framework, which describes privacy as involving people's agency to consent to disclosure or control of facets of their identities — their bodies, their data, their reputations. AI makes the definition urgent because AI systems are built on data, and much of that data is about people: their messages, purchases, locations, and habits. When a system learns from that information, who controls it stops being abstract.

### The data AI runs on

Three kinds of data matter most at the literacy level. Training data is the large collection of examples a model studies to learn patterns — Anthropic's privacy policy, read in August 2026, lists internet datasets, data obtained through commercial agreements, and user-provided content among the material used to develop its models. User inputs are what a person types, uploads, or sends to a tool while using it; the same policy lists inputs and outputs from its services as a training-data category unless users opt out. Behavioral data is the record of what people do online — accounts used, pages visited, items clicked, time spent. IBM's digital footprint explainer describes a person's footprint as the personal data they directly and indirectly share, including online account activity and browsing history. A search assistant, a streaming recommender, and a voice assistant each draw on one or more of these kinds of data.

### The risks to privacy

Five risks stand out in the sources for this lesson. Collection without clear consent happens when data is gathered without the free, specific, informed, and unambiguous agreement the GDPR requires. Retention is keeping personal data longer than needed; GDPR Article 5 says data must not stay in identifiable form longer than necessary, and NIST's Privacy Framework calls for data to be destroyed according to policy. Re-identification is the danger that AI inference ties seemingly anonymous data back to a person; NIST's AI RMF warns that AI systems can present new risks to privacy by allowing inference to identify individuals or previously private information about individuals. Data breaches — unauthorized access to or exposure of stored personal data — are a recognized risk that the GDPR requires organizations to manage and, in serious cases, report. Training on user inputs means the words people type into an AI tool can become part of the model's learning material; as of Anthropic's 2026 policy, user inputs and outputs are used to improve models unless users opt out. These are factual descriptions of risk categories, not claims about any specific product.

### How data protection works

The most widely known data protection law is the European Union's General Data Protection Regulation, the GDPR, whose official text defines personal data as any information relating to an identified or identifiable person. It applies to organizations processing the personal data of people in the EU, and because digital services cross borders, its rules affect organizations far beyond Europe; similar frameworks exist in other countries and regions. Three of its general principles matter most in everyday life. Consent: processing personal data needs a freely given, specific, informed, and unambiguous agreement. Purpose limitation: data collected for one stated purpose should not be reused in ways incompatible with that purpose. Data minimization: collect and keep only the data actually needed for the purpose. The GDPR also gives people rights such as access to their data. This lesson describes the law in general terms only; it is not legal advice for any individual situation.

### What individuals can do

General habits cover most of what a user can do without specialized tools. Check the privacy settings of the services you use — many providers offer choices, such as opting out of using your conversations to train models, as Anthropic's policy describes. Read what data is collected and for how long — the provider's privacy policy and settings are the authoritative place to look; IBM notes that supporting data privacy means enabling users to actively manage their data. Avoid sharing sensitive information with AI tools: whatever you type into a prompt may be stored, reused, or exposed, so a chat window is a place for drafts, not secrets. These are general habits, not instructions for any particular account, and they do not replace reading the specific policy of the tool you are using.

### What organizations should do

Privacy is not only an individual's job. NIST's Privacy Framework is a voluntary tool that helps organizations identify and manage privacy risk, and it describes privacy protections as engineered into products and services rather than bolted on afterward — the idea often called privacy by design. NIST's AI RMF treats privacy-enhanced as one of the characteristics of trustworthy AI and names data-minimizing methods such as de-identification and aggregation as design choices that support it; it also lists transparency among the characteristics organizations should balance when building AI systems. The GDPR's data minimization principle gives the same idea the force of law. Taken together, these sources describe an organizational duty that has three parts: design for privacy from the start, be transparent about what data is collected and why, and collect as little as possible. The deeper questions about right and wrong in AI — fairness, accountability, who decides — belong to the ai-ethics topic.

## Key Vocabulary

- **data privacy** — The principle that a person should have control over their personal data, including deciding how organizations collect, store, and use it.
- **personal data** — Information relating to an identified or identifiable person, such as a name, an identification number, or location data.
- **training data** — The large collection of examples a machine learning model studies in order to learn patterns.
- **user input** — Content a person types, uploads, or sends to an AI tool while using it.
- **behavioral data** — Records of what people do online, such as browsing history, account activity, and clicked items.
- **consent** — A freely given, specific, informed, and unambiguous agreement to the processing of personal data.
- **purpose limitation** — The principle that personal data collected for one stated purpose should not be reused in incompatible ways.
- **data minimization** — The principle of collecting and keeping only the personal data actually needed for the stated purpose.
- **re-identification** — Linking seemingly anonymous data back to a specific person, sometimes by combining several data sources or by inference.
- **data breach** — An incident in which personal data is accessed, stolen, or exposed without authorization.

## Eli-10

AI systems are built on data, and a lot of that data is about people — what they type, where they click, what they buy. Privacy is about keeping control of that information: deciding who collects it, what it is used for, and who gets to see it. When you type into an AI tool, your words can become part of the system's data. When an app records your activity, that is data too. Laws like the GDPR set rules for how organizations may handle personal data, but in everyday life both companies and individuals make choices that shape privacy.

## Eli's Analogy

Imagine a town where every shop keeps a ledger of who came in, what they bought, and who they talked to. Privacy is the rulebook for those ledgers: which shops may keep them, what they may write in them, and who may read them. An AI system is like a clerk who reads every ledger in town and then writes new pages about you — pages you never saw. The rulebook decides whether that clerk needs your permission, how long the pages may be kept, and whether you can check what was written.

The analogy has limits: The analogy breaks down because privacy is not one rulebook but many: laws differ by country, companies write their own policies, and people disagree about what should stay private. A shop ledger stays in one shop, while data about you flows across many systems at once. And control is never total — even if you delete a conversation, the model may already have learned from it.

## Worked Example

Diego is building a class project about local parks and uses an AI chat assistant to draft survey questions. He types in the park names, his draft questions, and — without thinking — his student ID number, because the tool asked for an example participant code. Later he opens the assistant's privacy settings and finds a section on data use: conversations may be used to improve the model, with a switch to turn that off. He turns it off, removes the message containing his ID from the conversation, and rewrites that message without any personal details. He also reads the section on retention, which says conversations are kept for a limited period after deletion. The episode teaches him a general habit: nothing sensitive needs to be in a prompt, and a chat window is a place for drafts, not secrets.

## Common Mistakes

- **Confusing privacy with security.** Security is about protecting data from unauthorized access; privacy is about a person's control over their data. IBM distinguishes the two, and both matter for AI systems.
- **Believing that removing names makes data private.** De-identification reduces risk but does not guarantee anonymity. NIST's AI RMF warns that AI inference can identify individuals or reveal previously private information, so treating stripped data as automatically safe is wrong.
- **Assuming everything typed into an AI tool stays private.** User inputs can be used to improve models. As of Anthropic's 2026 policy, inputs and outputs are used for training unless users opt out, so check the provider's policy before sharing anything sensitive.
- **Treating any click as meaningful consent.** The GDPR defines valid consent as freely given, specific, informed, and unambiguous. A buried checkbox does not meet that standard, and collection without clear consent is a named privacy risk.
- **Treating privacy as only the user's job.** Organizations carry obligations too: privacy engineered into products, transparency, and minimization. NIST's Privacy Framework and the GDPR both place responsibility on the organizations that process data.

## Compare / Contrast

- **Privacy vs. Security** — Privacy is about control over personal data — who collects it, uses it, and sees it; security is about protecting data from unauthorized access. A system can be secure yet privacy-invasive, and private-by-design yet poorly secured.
- **Training data vs. User inputs** — Training data is gathered in advance from many sources and used to build the model; user inputs are what a person gives a tool while using it. Both can feed model improvement, which is why inputs are a privacy consideration.
- **Consent vs. Purpose limitation** — Consent is the agreement to process personal data; purpose limitation restricts how collected data may later be reused. You can consent to one use, and purpose limitation still stops the data from being repurposed in incompatible ways.

## Key Takeaway

AI systems run on personal data, and privacy in the AI age is about people keeping control of that data — who collects it, what it is used for, and who can see it. The risks are real and documented, laws such as the GDPR set general ground rules, and both individuals and organizations shape the outcome.

## Practice Question Bank

**Q1.** According to the working definition used in this lesson, data privacy is best described as:

- A. Keeping passwords and account numbers secret from other people.
- B. A person's control over their personal data — who collects it, how it is used, and who can see it.
- C. Encrypting files so that attackers cannot read them.
- D. Deleting every online account a person has ever created.

**Key: B.** IBM's explainer defines data privacy as the principle that a person should have control over their personal data, including the ability to decide how organizations collect, store, and use it, and NIST's AI RMF describes privacy as involving individuals' agency to consent to disclosure or control of facets of their identities, including their data. Passwords and encryption are security measures, and deleting accounts is one possible action, but neither is what privacy means.

**Q2.** Which list correctly names three general kinds of data an AI system may use?

- A. Passwords, encryption keys, and backup files.
- B. Census forms, weather reports, and shipping labels.
- C. Training data, user inputs, and behavioral data.
- D. Photos, invoices, and receipts.

**Key: C.** This lesson names three general categories: training data (the large collections of examples a model learns from, which Anthropic's policy describes as including internet datasets and user inputs and outputs), user inputs (what a person types or uploads), and behavioral data (records of online activity such as browsing history, per IBM's digital footprint explainer). The other options list specific items or unrelated data types, not the three general categories.

**Q3.** Priya signs up for an AI writing assistant. In the settings she finds the statement: “Conversations may be used to improve our models. You can turn this off here.” Which privacy risk does this statement most directly concern?

- A. A data breach that exposes customer records.
- B. Re-identification of people from anonymous data.
- C. Retention of data longer than needed.
- D. Training on user inputs.

**Key: D.** Using conversations to improve models is training on user inputs: Anthropic's privacy policy lists user inputs and outputs among the data used to train its models unless users opt out, and the settings example is exactly that opt-out choice. Breaches, re-identification, and retention are separate, distinct risks.

**Q4.** A fitness app collects workout times and locations and claims the data is anonymous because it contains no names. The app's AI then matches the time-and-location patterns to one user's known routine and identifies them. What has happened?

- A. Re-identification — the AI inferred who the person is from data that seemed anonymous.
- B. A data breach — an attacker stole the records.
- C. Purpose limitation — the data was used for an incompatible purpose.
- D. Consent — the user agreed to share the data.

**Key: A.** NIST's AI RMF states that AI systems can present new risks to privacy by allowing inference to identify individuals or previously private information about individuals; matching patterns to a known routine is that kind of inference, and the risk is named re-identification. Nothing in the scenario involves theft, an incompatible purpose, or an agreement to be identified.

**Q5.** A company tells its users: “We keep your data forever, but we promise never to sell it.” Under the general principles of data protection law exemplified by the EU's GDPR, which principle does this practice most directly undermine?

- A. Consent, because users never agreed to the collection.
- B. Transparency, because the policy is hard to find.
- C. Storage limitation, because personal data should not be kept longer than needed for its purpose.
- D. Data portability, because users cannot move their data elsewhere.

**Key: C.** GDPR Article 5 requires personal data to be kept in a form that permits identification of data subjects for no longer than necessary for the purposes for which it is processed — the storage-limitation principle, which NIST's Privacy Framework operationalizes as destroying data according to policy. Keeping data forever directly violates that principle. The statement says nothing about consent, transparency, or portability.

## Sources

- National Institute of Standards and Technology (NIST) — "Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1". https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- National Institute of Standards and Technology (NIST) — "NIST Privacy Framework: A Tool for Improving Privacy through Enterprise Risk Management, Version 1.0". https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.01162020.pdf
- European Union (EUR-Lex) — "Regulation (EU) 2016/679 — General Data Protection Regulation (GDPR)". https://eur-lex.europa.eu/eli/reg/2016/679/oj
- IBM — "What is data privacy?". https://www.ibm.com/think/topics/data-privacy
- IBM — "What is a digital footprint?". https://www.ibm.com/think/topics/digital-footprint
- Anthropic — "Anthropic Privacy Policy". https://www.anthropic.com/legal/privacy
- Electronic Frontier Foundation — "Privacy". https://www.eff.org/issues/privacy

## Related Topics

- Generative AI (data-science-and-ai-literacy:foundations:generative-ai)
- Data Collection (data-science-and-ai-literacy:foundations:data-collection)
- Training Data (data-science-and-ai-literacy:foundations:training-data)
- AI Ethics (data-science-and-ai-literacy:foundations:ai-ethics)
- NIST AI Risk Concepts (data-science-and-ai-literacy:foundations:nist-ai-risk-concepts)

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:ai-privacy
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources (NIST, EUR-Lex, IBM, Anthropic, EFF); no source prose adapted