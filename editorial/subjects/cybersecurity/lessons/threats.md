# Threats

## In 30 Seconds

A threat is anything with the potential to harm a system or its data. NIST defines a threat as any circumstance or event that could adversely affect an organization, its assets, or individuals through an information system. Threats come from actors with different motives: criminals after money, nation-states after intelligence, hacktivists advancing a cause, insiders, and people who simply make mistakes. They take familiar shapes, including malware, phishing, credential theft, denial of service, and data breaches. Because new threats appear constantly, awareness must be continuous.

## Why This Matters

Threats are the reason cybersecurity exists. Every control, from passwords to firewalls to backups, answers a specific threat, so you cannot understand why security works without knowing what it defends against. Studying threats builds healthy skepticism: you learn to notice when something is asking for your credentials, your money, or your trust. The landscape shifts constantly, so the skill is not memorizing today's attack list but staying alert as a habit. For students, threats are the entry point to every later security topic; for everyone, knowing the adversary by name is the first step toward not becoming a victim.

## Learning Objectives

- Define a threat, using the NIST working definition, as any circumstance or event with the potential to harm a system, its data, or the people who rely on it.
- Name the main classes of threat actors, with one factual line about each: criminals, hacktivists, nation-states, insiders, and careless users.
- Distinguish the major threat types, malware, phishing and social engineering, credential theft, denial of service, and data breaches, at a conceptual level.
- Explain the motivations behind threats: money, ideology, espionage, and mischief.
- Explain why the threat landscape changes and why awareness must therefore be continuous.
- Distinguish a threat from a vulnerability and from risk, and place threats within the risk picture.

## The College Version

### What a threat is

The word "threat" gets used loosely, so it helps to start from the definition security professionals actually use. NIST, the U.S. agency that sets many security standards, defines a threat as any circumstance or event with the potential to adversely impact organizational operations and assets, individuals, other organizations, or the Nation through an information system, typically through unauthorized access, destruction, disclosure, or modification of information, or denial of service. The key word is "potential." A threat exists before anything happens: a criminal group that wants into a network is a threat even while it has not yet struck, and a misconfigured backup job that could destroy data is a threat even though nobody intended harm. NIST also separates the threat from the threat source. The source is what carries the potential: an adversary with intent and method, or a situation such as human error, structural failure, or disaster. Getting into the habit of naming what could hurt you before worrying about how likely it is becomes the foundation of the whole field.

### Who the threat actors are

Most threats trace back to people, and the standard way to sort them is by who they are and what they want. Criminals attack for money: NIST describes criminal groups seeking monetary gain through fraud, identity theft, and extortion, and Microsoft names financially motivated actors as the groups behind ransomware, business email compromise, and phishing. Nation-states and their intelligence services use cyber tools for espionage and work to develop capabilities to disrupt, destroy, or threaten essential services, as CISA describes. Hacktivists act on political or social beliefs; ENISA's threat landscape reporting notes that public administrations are increasingly targeted by hacktivists, primarily through denial-of-service attacks. Insiders are people with authorized access, employees, contractors, and others, who use that access to harm the organization, whether deliberately or by accident, as CISA defines insider threat. Careless users count as a threat source in their own right: NIST's risk-assessment guidance lists human errors of omission and commission among the types of threat sources, and NIST's introduction to information security notes that some attackers are simply thrill-seekers. CISA's reminder that protecting cyberspace is everyone's responsibility reflects how ordinary people fit into the picture.

### What threats look like

Threats take recognizable shapes. Malware is software written to harm or infiltrate systems; it is a family name covering viruses, worms, trojans, and ransomware, each of which is its own topic. Phishing and the broader family of social engineering attack people rather than machines: NIST describes phishers as individuals or small groups that run schemes to steal identities or information for monetary gain, and CISA groups malware, phishing, and ransomware together among the headline threats it tracks. Credential theft is the business of obtaining usernames and passwords, often through phishing, so they can be reused for unauthorized access. Denial of service is the condition CISA defines as legitimate users being unable to reach systems or network resources because of a malicious actor's actions; a distributed denial-of-service attack uses many machines working together, often a botnet of hijacked devices. Data breaches are the outcome ENISA defines as an intentional attack by a cybercriminal to gain unauthorized access and release sensitive data. None of these need to be studied in technical depth here; the point is to recognize the shapes and know that each one has a dedicated defense topic of its own.

### Why they do it

Motivations explain a lot about how threats behave. Money drives criminal groups: fraud, identity theft, and extortion are business models, and ransomware is extortion at scale. Ideology drives hacktivists, who want to publicize a cause or punish an opponent rather than get rich. Espionage drives nation-states, which steal information and develop capabilities to disrupt infrastructure when it suits them. And mischief is real: NIST notes that some attackers break into networks for the thrill, the challenge, or bragging rights in their community. The same threat type can serve different motives. A denial-of-service attack can be a criminal's extortion tactic, a hacktivist's protest, or a state's test of a target, which is why defenders ask "who and why" alongside "what."

### A moving target: threats, vulnerabilities, and risk

The threat landscape is not a fixed list. CISA describes the dangers it tracks as serious and ever-evolving, and it publishes alerts, advisories, and a catalog of known exploited vulnerabilities to keep up; ENISA publishes an annual threat landscape, with its 2025 edition analyzing 4,875 incidents across a year. New threats appear constantly and familiar ones mutate, so awareness must be continuous rather than a one-time lesson. Finally, a threat is only one piece of the security picture. NIST defines risk as a function of the likelihood of a threat event and its potential adverse impact. A vulnerability is the weakness a threat could exploit. The three belong to separate topics: threats are the who and what that could hurt you, vulnerabilities are the openings, and risk weighs how likely and how damaging the combination is.

## Key Vocabulary

- **threat** — Any circumstance or event with the potential to harm a system, its data, or the people who rely on it, such as an attacker's plan, a human error, or an equipment failure.
- **threat actor** — A person, group, or state that carries out or could carry out harmful actions against systems, such as criminals, hacktivists, nation-states, or insiders.
- **threat source** — The origin of a threat: either an adversary with intent and method, or a situation such as human error, structural failure, or disaster, as NIST classifies them.
- **malware** — Software written to harm or infiltrate systems without authorization, a family that includes viruses, worms, trojans, and ransomware, each covered in its own topic.
- **phishing** — A technique in which messages impersonate a trusted person or organization to trick people into revealing information or taking a harmful action.
- **credential theft** — The act of obtaining usernames, passwords, or other authentication secrets, usually so they can be reused for unauthorized access.
- **denial of service** — A condition in which legitimate users cannot reach a system or network resource because a malicious actor has flooded it or brought it down.
- **data breach** — An incident in which information is accessed or disclosed without authorization, typically an intentional attack aimed at stealing sensitive data.
- **hacktivist** — A threat actor whose actions are driven by political or social beliefs rather than by money or state direction.
- **insider threat** — The potential for a person with authorized access to use that access to harm an organization, whether the act is deliberate or accidental.

## Eli-10

Cybersecurity exists because of threats. A threat is anything that could hurt your computer, your accounts, or your data: a criminal who wants your money, a country that wants your secrets, a scam message in your inbox, or even your own careless click. Threats are possibilities, not events, so the danger is real before anything happens. Some threats come from people with a reason to attack, and others come from accidents and mistakes. The list of dangers never stops changing, so staying safe means staying alert, not memorizing a fixed set of threats and calling it done.

## Eli's Analogy

Think of a threat like a weather warning. A thunderstorm watch means your picnic could be ruined even though the sky is still clear: the danger exists, you know roughly where it comes from and what it could do, and you plan around it. Security teams treat threat reports the same way, reading the forecast from agencies and adjusting their plans as conditions change.

The comparison breaks down in one important way. Weather is impersonal and mostly predictable, while most cyber threats come from intelligent adversaries who watch your defenses and adapt to them. A storm cannot decide to outsmart you; a threat actor can, which is why staying current matters more than a weather analogy suggests.

## Worked Example

The registrar at a community college lists what could harm the student records system. A criminal group sends fake invoices to the finance office, hoping someone pays them (money). A state-sponsored team probes the college's network, looking for weak points (espionage). A hacktivist defaces the public course catalog to protest a board decision (ideology). A student employee leaves a workstation unlocked overnight (careless user). And an aging server fails during a summer heat wave (non-adversarial). None of these has happened yet, but each is a real threat with a named source and a motive. The registrar's next step, weighing which dangers are most likely and most damaging, belongs to the topic of risk.

## Common Mistakes

- **Using "threat" and "attack" as if they mean the same thing.** A threat is the potential for harm, the actor or situation that could cause it; an attack is the attempt actually happening. The threat exists whether or not anyone has struck.
- **Assuming threats always come from outside the organization.** Insiders with authorized access, and plain human error, are named threat sources in NIST's and CISA's taxonomies. Some of the most damaging threats start with a trusted person or a simple mistake.
- **Treating the threat list as fixed once you have heard of the famous ones.** CISA and ENISA describe the landscape as ever-evolving, and both publish continuous updates. New threats appear constantly, so awareness has to be a habit, not a one-time lesson.
- **Confusing a threat with a vulnerability or with risk.** A vulnerability is the weakness that could be exploited, a threat is who or what could exploit it, and risk weighs how likely that is and how much damage it would do. They are three different pieces of the picture.
- **Believing only big organizations get targeted.** Phishing and credential theft target individuals directly, and CISA's guidance speaks to individuals and families as well as businesses. Being small does not make a person or a school invisible to threats.

## Compare / Contrast

- **Threat vs. Vulnerability** — A threat is who or what could harm a system, such as a criminal group or a misconfigured job; a vulnerability is the weakness that could be exploited. One is the danger, the other is the opening.
- **Threat vs. Risk** — A threat is the potential for harm, while risk weighs the likelihood of a threat event and the size of its impact. Threats are part of the risk calculation, not the same thing as it.
- **Adversarial threat vs. Non-adversarial threat** — An adversarial threat comes from an actor with intent, such as a criminal or a nation-state; a non-adversarial threat is a situation such as human error, equipment failure, or a natural disaster. Both can damage systems, but only the first adapts and chooses its target.

## Key Takeaway

A threat is any circumstance or event with the potential to harm a system or its data, and it can come from criminals, nation-states, hacktivists, insiders, or plain human error. Because the landscape changes constantly, awareness must be a continuous habit, and threats must be kept distinct from vulnerabilities and risk.

## Practice Question Bank

**Q1.** Which statement best matches the working definition of a threat used by NIST?

- A. A flaw in software that an attacker could exploit.
- B. The likelihood that an attack will succeed and the damage it would cause.
- C. Any circumstance or event with the potential to adversely impact a system, its data, or people through an information system.
- D. Any program written to damage a computer or steal information.

**Key: C.** NIST defines a threat as any circumstance or event with the potential to adversely impact organizational operations, assets, or individuals through an information system. The exploitable flaw is a vulnerability, the likelihood-and-damage pairing is risk, and harmful programs are one specific threat type, malware.

**Q2.** A small group repeatedly brings down public service websites to protest a government policy, without seeking payment. How would security sources classify this group and its motive?

- A. Hacktivists acting on ideology.
- B. Nation-state actors conducting espionage.
- C. Criminal groups seeking financial gain.
- D. Insiders acting carelessly.

**Key: A.** ENISA's threat landscape reporting describes hacktivists as actors targeting public institutions, often with denial-of-service attacks, driven by political or social beliefs rather than money. Espionage, financial gain, and careless insider behavior do not match a protest with no payment demanded.

**Q3.** An analyst says: "The hospital's risk is high because an unpatched server could be hit by a ransomware crew." In this sentence, which element names the threat?

- A. "Unpatched server"
- B. "Ransomware crew"
- C. "High"
- D. "Risk"

**Key: B.** The ransomware crew is the actor with intent and method, so it is the threat. The unpatched server is the vulnerability, "risk" is the overall assessment, and "high" describes its level. NIST's framing separates the threat source from the weakness it could exploit.

**Q4.** Which statement correctly describes a distributed denial-of-service (DDoS) attack?

- A. An attacker steals a password and logs in as the user.
- B. An attacker encrypts files and demands payment to restore them.
- C. A message impersonates a trusted organization to trick someone into revealing information.
- D. Many compromised machines work together to flood a target so legitimate users cannot reach it.

**Key: D.** CISA defines a DDoS attack as multiple machines operating together, often a botnet of hijacked devices, to overwhelm one target so legitimate users lose access. Password theft is credential theft, encryption-plus-payment is ransomware, and impersonation is phishing.

**Q5.** A school keeps a list of things that could go wrong: a student's laptop infected by malware, a payroll clerk tricked by a fake invoice, a state-sponsored group probing the network, and a server failing during a heat wave. Which item is a non-adversarial threat?

- A. The malware-infected laptop.
- B. The fake-invoice trick.
- C. The state-sponsored probing.
- D. The server failing during the heat wave.

**Key: D.** NIST classifies natural and man-made failures and disasters as non-adversarial threat sources, alongside human error. Malware, fraudulent invoices, and state-sponsored probing all trace back to actors with intent, so they are adversarial threats.

## Sources

- NIST Computer Security Resource Center Glossary — threat (https://csrc.nist.gov/glossary/term/threat)
- NIST Special Publication 800-30 Rev. 1: Guide for Conducting Risk Assessments (https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf)
- NIST Special Publication 800-12 Rev. 1: An Introduction to Information Security (https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-12r1.pdf)
- CISA: Cyber Threats and Advisories (https://www.cisa.gov/topics/cyber-threats-and-advisories)
- CISA: Understanding Denial-of-Service Attacks (https://www.cisa.gov/news-events/news/understanding-denial-service-attacks)
- CISA: Insider Threat Mitigation (https://www.cisa.gov/topics/physical-security/insider-threat-mitigation)
- Microsoft Security Intelligence: Microsoft threat actor naming (https://learn.microsoft.com/en-us/microsoft-365/security/intelligence/microsoft-threat-actor-naming)
- ENISA: Threat Landscape (https://www.enisa.europa.eu/topics/cyber-threats/threat-landscape)

## Related Topics

- cybersecurity:foundations:vulnerabilities
- cybersecurity:foundations:risk
- cybersecurity:foundations:malware
- cybersecurity:foundations:phishing
- cybersecurity:foundations:social-engineering

## Editorial Metadata

- Topic ID: cybersecurity:foundations:threats
- Subject: cybersecurity, Unit: foundations
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified (researched 2026-08-21)
- Rights status: reference-only government and vendor documentation; definitions quoted with attribution, no source prose adapted
- Defensive framing: threats are described at the conceptual level only; no attack techniques or tooling are taught. Unauthorized access to systems is illegal, and this lesson teaches awareness and protection, not offensive skills.
