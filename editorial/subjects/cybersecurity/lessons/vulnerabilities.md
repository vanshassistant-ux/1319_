# Vulnerabilities

## In 30 Seconds

A vulnerability is a weakness in a system, a process, or a design that could be used to cause harm. The common types are weak or stolen credentials, unpatched software, misconfiguration, insecure code, and human error. Researchers find many weaknesses and report them, sometimes through bug bounty programs, and public databases such as CVE and the NVD keep track. A weakness only becomes a live problem when a threat can reach it, so we reduce vulnerabilities by patching, configuring carefully, designing securely, and training people.

## Why This Matters

Every account you log into, every app you open, and every website you visit runs on systems that contain weaknesses. Most of the time those weaknesses sit quietly; the question is whether they stay that way. Knowing what a vulnerability is lets you read security news accurately, understand why updates matter, and recognize when a product or workplace is taking shortcuts. It is also one of the three ideas, threat, vulnerability, and risk, that professionals use to talk about security, so it is the natural place to start. And the need will only grow: as more of daily life moves onto networked systems, the number of weaknesses those systems carry grows with them, and reducing them becomes everyone's business.

## Learning Objectives

- Define a vulnerability using the NIST glossary definition and distinguish it from a threat.
- Name the common vulnerability types — weak or stolen credentials, unpatched software, misconfiguration, insecure code, and human error — and give an example of each.
- Explain how weaknesses are found and tracked: security research, bug bounties, and public databases such as CVE and the NVD.
- Analyze the exploitability question: why a weakness is a live risk only when a threat can reach it.
- Apply the four general reduction practices — patch, configure, design securely, and train people — to a realistic scenario.

## The College Version

### What a vulnerability is

A vulnerability is a weakness that could be used to cause harm. The working definition used across the U.S. government comes from the NIST glossary, which describes a vulnerability as a weakness in an information system, in system security procedures, in internal controls, or in implementation that could be exploited or triggered by a threat source. Three details matter. First, the weakness does not have to be in software: a procedure nobody enforces, or a control never put in place, is a weakness too. Second, "could be exploited" is conditional — a weakness nothing can reach is still a weakness, but it is not doing any harm. Third, the definition is attributed because different communities define the word slightly differently: the CVE Program uses a narrower definition focused on weaknesses in the computational logic of software and hardware components. This lesson follows the broader NIST definition, and the narrower one reappears when we talk about how weaknesses are tracked.

### The common vulnerability types

Five weakness types show up again and again. Weak or stolen credentials: accounts protected by passwords that are easy to guess, shared, or reused from an earlier breach — a tutoring center where every part-time tutor signs into the scheduling system with one shared password. Unpatched software: programs that keep running long after the maker stopped fixing them — a florist's delivery tablet on an operating system version that no longer receives security updates. Misconfiguration: systems set up incorrectly from a security perspective — a dental office's internet router still using the administrator password printed on its factory label. Insecure code: software written without guarding against the ways it can be misused — a community recipe site whose search page trusts whatever a visitor submits. Human error: choices and habits that open a way in — an office assistant who postpones every update prompt for months because restarts interrupt the workday. These five are not an official taxonomy; they are the types that appear most often in guidance from OWASP and CISA, whose Top 10 awareness document lists security misconfiguration and authentication failures among the most critical risks to web applications.

### How vulnerabilities are found and tracked

Most weaknesses are found by people who study systems. Security researchers look for flaws and report what they find, often to the vendor first so a fix can be prepared — a pattern called coordinated disclosure. The National Vulnerability Database does not test systems itself; it relies on vendors, third-party security researchers, and vulnerability coordinators for information. Some organizations run bug bounty programs that pay researchers who report weaknesses; Microsoft's bounty page describes exactly that arrangement under coordinated vulnerability disclosure. Once a weakness is confirmed and public, it receives a standardized name: a CVE identifier, assigned so that two or more parties can refer confidently to the same flaw. The NVD, run by NIST, then builds an enriched record around each CVE, adding impact scores, weakness types, and affected products. Separately, CISA maintains a catalog of vulnerabilities that are known to be actively exploited, which listed 1,674 entries as of August 2026 — a reminder that most cataloged weaknesses are never actually used in the wild.

### The exploitability question

The existence of a weakness is not the same as the existence of a problem. NIST defines risk as a measure of the extent to which an entity is threatened by a potential circumstance or event, typically a function of the adverse impact if it occurs and the likelihood that it occurs. A vulnerability feeds into that calculation: it becomes a live risk only when a threat source can actually reach it. Consider two identical checkout terminals at a library. One is connected to the public network and accepts card payments; the other sits unplugged in a storage closet. Both run the same software with the same known weakness. The connected terminal is a real concern because a threat can reach the weakness and trigger it; the stored terminal is a weakness that nothing can trigger. The same logic applies at every scale, which is why professionals map the places a threat could reach — the attack surface — and why an unreachable weakness gets lower priority than one sitting on the public internet. The full vocabulary of likelihood, impact, and acceptable risk belongs to the risk topic; this lesson's point is the bridge: a weakness is dangerous in proportion to how reachable it is.

### Reducing vulnerabilities

Four general practices cover most of the ground. Patch: apply the fixes that vendors issue. CISA's guidance is blunt — technology providers release updates to patch security weak spots, and if we do not install them they cannot protect us — so install promptly and turn on automatic updates. Configure: set systems up deliberately, remove features you do not use, and change defaults; OWASP's misconfiguration category names exactly the opposite: unnecessary features left enabled and default accounts left unchanged. Design securely: build the controls in from the start; OWASP's insecure-design category draws the line between a design flaw, where the needed control was never created and no perfect implementation fixes it, and an implementation defect, which a targeted fix can address. Train people: awareness programs and honest reporting habits shrink the human-error layer. None of these is a one-time job — systems change constantly, so each is an ongoing practice. Organizations formalize the patching and tracking side under patch management and vulnerability management, which are separate topics in this curriculum.

## Key Vocabulary

- **vulnerability** — A weakness in an information system, in its security procedures, in internal controls, or in implementation that could be exploited or triggered by a threat source.
- **threat source** — A person, organization, or condition with the potential to cause harm by triggering a weakness.
- **exploit** — To take advantage of a weakness to cause harm, or the method by which the weakness is used.
- **security researcher** — A person who studies systems to find weaknesses, often reporting them to vendors so they can be fixed.
- **bug bounty** — A program in which an organization pays researchers who find and privately report security weaknesses in its products.
- **CVE identifier** — A standardized name for a publicly known vulnerability, assigned by the CVE Program so everyone can refer to the same weakness.
- **National Vulnerability Database (NVD)** — The U.S. government's repository of vulnerability data, which adds impact scores, weakness types, and affected products to published CVE records.
- **patch** — An update released by a software maker to fix a known weakness or defect in its product.
- **misconfiguration** — A system or service that was set up incorrectly from a security perspective, such as one still using its factory-default password.

## Eli-10

A vulnerability is a weakness that could be used to hurt you: a door that does not latch, a password written on a sticky note, a program that was never updated, a setting nobody checked. Weaknesses live in software, but they also live in habits and rules. People who study security spend their time finding these gaps and telling the people who can fix them. Some weaknesses never cause trouble because nobody and nothing can reach them. The ones that matter are the ones a person or a program can actually get to.

## Eli's Analogy

Imagine a house. The weakness is not the burglar — it is the open window, the lock that can be jiggled open, the ladder left against the wall. The burglar is the threat; the house is the system. An open window on the ground floor behind the hedge is a real problem. The same window on a third-floor balcony that nobody can reach is still a weakness, but it is not an active danger. The repair list for the house is the vulnerability list: close what can be closed, fix what can be fixed, and decide which gaps you can live with because nothing can reach them.

The house comparison breaks down because a house stays mostly the same from year to year, while a computer system changes constantly: new code, new settings, new people, new devices. A weakness that does not exist today can appear tomorrow, so checking once is never enough. And in a house the weakness is always a physical thing, while in a system the people using it are part of the system, which is why training and habits matter too.

## Worked Example

Riverbend Community Clinic keeps patient appointment records in a small scheduling system. An internal review looks for weaknesses without attempting anything harmful. It finds five. First, all six receptionists share one login for the system — weak credentials. Second, the booking software vendor released an update fixing a known flaw, but nobody installed it — unpatched software. Third, the clinic's router still uses the administrator password printed on its factory label — a misconfiguration. Fourth, a former developer built the password-reset page in a hurry and left the code with a known weakness — insecure code. Fifth, a receptionist regularly opens links inside messages that look like they come from the clinic's IT provider — human error. The review then sorts the list by reachability: the router sits on the public internet, so its weakness is the most urgent; the booking software is only used inside the clinic, so it matters less but should still be updated. The clinic patches the booking software, changes the router password, replaces the shared login with individual accounts, plans a rewrite of the reset page, and adds a short awareness session for the staff. None of these steps is exotic; each one removes or shrinks a weakness.

## Common Mistakes

- **Using "vulnerability" and "threat" as if they mean the same thing.** A threat is a person, program, or condition that could cause harm; a vulnerability is the weakness that could be used. They are different concepts that meet when a threat can actually reach a weakness.
- **Rating every weakness as equally dangerous.** Reachability decides. A weakness that no threat can reach is not a live risk: NIST defines risk as a function of the adverse impact and the likelihood that the event occurs, not just the existence of a weakness.
- **Thinking only software has vulnerabilities.** The NIST glossary definition covers security procedures and internal controls as well as systems, so rules and habits can be weak too. That is why human error is one of the common vulnerability types.
- **Believing one fix, done once, finishes the job.** Systems change constantly, so reducing vulnerabilities is an ongoing set of practices — patching, configuring, designing securely, and training people — not a single repair.
- **Confusing the CVE identifier with the NVD database.** CVE is the naming program that gives each publicly known weakness a unique identifier; the NVD is the U.S. government database that enriches those identifiers with impact scores, weakness types, and affected products.

## Compare / Contrast

- **Vulnerability vs. Threat** — A vulnerability is the weakness that could be used; a threat is the person, program, or condition that could use it. The weakness becomes dangerous only when a threat can reach it.
- **CVE identifier vs. NVD record** — The CVE identifier is the standardized name the CVE Program assigns to a publicly known weakness; the NVD record is the enriched database entry built around that identifier, adding impact scores, weakness types, and affected products.
- **Design flaw vs. Implementation defect** — A design flaw is a missing or ineffective control that was never built in, so no amount of careful implementation fixes it; an implementation defect is a mistake in building a sound design, which a targeted fix can address. OWASP's insecure-design category draws exactly this line.

## Key Takeaway

A vulnerability is a weakness in a system, a process, or a design that could be used to cause harm. It becomes a live problem only when a threat can reach it, and we reduce it the same way every day: patch, configure, design securely, and train people.

## Practice Question Bank

**Q1.** According to the NIST glossary definition, what is a vulnerability?

- A. A person or organization with the intent and ability to cause harm.
- B. A weakness in a system, its security procedures, internal controls, or implementation that could be exploited or triggered by a threat source.
- C. The likelihood that a harmful event will occur and the damage it would cause.
- D. Any error message a program displays when something goes wrong.

**Key: B.** The NIST glossary, drawing on FIPS 200 and CNSSI 4009, defines a vulnerability as a weakness in an information system, system security procedures, internal controls, or implementation that could be exploited or triggered by a threat source. A person or organization that could cause harm is a threat, the likelihood-and-impact measure is risk, and an error message is neither.

**Q2.** Which of the following is NOT one of the common vulnerability types discussed in this lesson?

- A. Weak or stolen credentials
- B. Unpatched software
- C. Human error
- D. Strong encryption

**Key: D.** Strong encryption is a defense, not a weakness. Weak or stolen credentials, unpatched software, and human error are all common vulnerability types: OWASP's Top 10 and its category pages describe authentication failures and out-of-date components, and CISA's guidance describes the damage that out-of-date software and unwise clicks can allow.

**Q3.** A community clinic's internet router still uses the administrator password printed on its factory label because nobody changed it after installation. Which vulnerability type does this illustrate?

- A. Misconfiguration
- B. Insecure design
- C. A supply-chain weakness in the router manufacturer
- D. Insecure code written by the clinic

**Key: A.** OWASP's Security Misconfiguration category covers systems set up incorrectly from a security perspective, including default accounts and passwords left enabled and unchanged. The router itself was not poorly designed, no code was written by the clinic, and nothing about the manufacturer's production process is at issue here.

**Q4.** A college runs two servers with the same web application and the same known weakness. Server 1 sits behind the college's public website. Server 2 is unplugged from the network, locked in a storage closet, and used only for archive copies. Which statement best analyzes the situation?

- A. Both are equally dangerous because the weakness is identical.
- B. Server 2 is the greater concern because it holds archive copies.
- C. Server 1 is the greater concern because a threat source can reach its weakness, while nothing can trigger the weakness on the unplugged server.
- D. Neither is a concern, because a weakness only becomes a risk after it appears in a public database.

**Key: C.** A weakness becomes a live risk only when a threat source can reach it: NIST defines risk as a function of the adverse impact and the likelihood that the harmful event occurs, and an unplugged server's weakness has no way to be triggered. Identical weaknesses in different environments are therefore not equally dangerous, and appearing in a database does not create risk.

**Q5.** A security researcher finds a flaw in a budgeting app and privately reports it to the company, which pays her a reward after confirming the report. The company then registers the flaw so other organizations can recognize it. Which pair of concepts best describes this chain of events?

- A. A misconfiguration followed by a default credential
- B. Security research and a bug bounty, followed by a CVE identifier
- C. Human error followed by a patch
- D. A design flaw followed by an implementation defect

**Key: B.** The researcher's private report is security research rewarded through a bug bounty — Microsoft's bounty program describes rewarding findings reported under coordinated vulnerability disclosure — and registering the flaw so others can recognize it is exactly what a CVE identifier does, as the CVE Program's purpose and the NVD's reliance on published CVE records describe. The other options mix in unrelated concepts.

## Sources

- National Institute of Standards and Technology — "NIST Glossary: vulnerability". https://csrc.nist.gov/glossary/term/vulnerability
- National Institute of Standards and Technology — "NIST Glossary: risk". https://csrc.nist.gov/glossary/term/risk
- National Institute of Standards and Technology, National Vulnerability Database — "NVD General Information". https://nvd.nist.gov/general
- National Institute of Standards and Technology, National Vulnerability Database — "NVD Vulnerabilities". https://nvd.nist.gov/vuln
- Cybersecurity and Infrastructure Security Agency — "Catalog of Known Exploited Vulnerabilities (catalog feed)". https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json
- Cybersecurity and Infrastructure Security Agency — "Update Software (Secure Our World)". https://www.cisa.gov/secure-our-world/update-software
- OWASP Foundation — "OWASP Top 10:2025". https://owasp.org/Top10/2025/
- OWASP Foundation — "A02:2025 Security Misconfiguration". https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/
- OWASP Foundation — "A03:2025 Software Supply Chain Failures". https://owasp.org/Top10/2025/A03_2025-Software_Supply_Chain_Failures/
- OWASP Foundation — "A06:2025 Insecure Design". https://owasp.org/Top10/2025/A06_2025-Insecure_Design/
- OWASP Foundation — "A07:2025 Authentication Failures". https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/
- Microsoft Security Response Center — "Microsoft Bug Bounty Programs". https://www.microsoft.com/en-us/msrc/bounty

## Related Topics

- Threats (cybersecurity:foundations:threats)
- Risk (cybersecurity:foundations:risk)
- Vulnerability Management (cybersecurity:foundations:vulnerability-management)
- Patch Management (cybersecurity:foundations:patch-management)
- Attack Surface (cybersecurity:foundations:attack-surface)

## Editorial Metadata

- Topic ID: cybersecurity:foundations:vulnerabilities
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
