# Logging

## In 30 Seconds

A log is a record of the events a system has seen: a line for each login, file change, network connection, or error. Logs are the raw material of security because they are how incidents get noticed and investigated. But a log only helps if someone reviews it, and only if it is stored somewhere safe where it cannot be silently edited. Logs tell you what happened, not why — turning entries into answers still takes a human being.

## Why This Matters

Every account you use and every website you visit leaves traces in some system's logs. When a bank card is used oddly, when a school account signs in at 3 a.m., when a server starts failing — the first question is always "what actually happened?" Logs answer that question, which makes them the backbone of detection and investigation. Understanding logs lets you read breach reports intelligently, appreciate why organizations keep records of your activity, and see why a record nobody reads is no protection at all. As more of life moves onto connected systems, the ability to ask "what happened?" — and to trust the answer — only grows more important.

## Learning Objectives

- Define a log using the working definition from NIST SP 800-92 and describe what a log entry contains.
- Name the common kinds of events systems log — logins, file changes, network connections, and errors — and give an original example of each.
- Explain why logs matter for security as the record that makes incident detection and investigation possible.
- Apply the core practice of log review, including the general role of automated monitoring.
- Analyze why logs must be protected from tampering and how safe storage and limited access reduce the risk.
- Evaluate the limits of logs: what a log entry records versus what human analysis must determine.

## The College Version

### What a log is

A log is a record of the events occurring within a system or network. That working definition comes from NIST SP 800-92, the U.S. government's guide to computer security log management, and it is attributed because other documents define logs for their own narrower purposes — a compliance rule may define exactly which audit records a specific law requires, while an application developer thinks of the log as whatever their program writes. What the NIST definition captures is the general shape: a log is made of log entries, and each entry describes one event — a sign-in attempt, a file saved, a connection opened, an error thrown — usually with the date and time, the account or address involved, and the outcome. Logs come from everywhere: security software such as antivirus programs and firewalls, operating systems on servers and workstations, and applications. A single system may keep several logs at once.

### What gets logged

The events worth recording fall into a few families, and each family has a typical example. Logins: authentication servers log every sign-in attempt, including the account name, whether it succeeded or failed, and when it happened — a school's login server recording "account s.miller failed sign-in at 02:17" is a login entry. File changes: file servers and applications record additions, modifications, and deletions — a clinic's records system logging "patient file 2214 modified at 23:41 by backup account" is a file-change entry. Network connections: firewalls and routers log traffic they permitted or blocked — a bookstore's firewall logging "blocked inbound connection on port 22 from address 203.0.113.9" is a network entry. Errors: applications log failures and unusual conditions — a library catalog system logging "database connection timed out at 14:02" is an error entry. OWASP's guidance to developers lists authentication successes and failures, application errors and system events, network connections and their failures, and use of privileged functionality as events worth recording — and warns against logging too much or too little.

### Why logs matter for security

Logs matter because they are the record of what actually happened, and that record is how problems get found. NIST describes routine log review and analysis as beneficial for identifying security incidents, policy violations, fraudulent activity, and operational problems shortly after they occur, and as useful for auditing, forensic analysis, and internal investigations. When something goes wrong, the timeline of events in the logs is usually the starting point for the investigation. The organized process of detecting, containing, and learning from an incident belongs to the incident-response topic in this curriculum; this lesson's point is that incident response and most other security work stand on the logs underneath them. A system that records nothing is a system whose problems are invisible.

### The core practice: log review

A log that nobody reads is just a file. The core practice is review: someone — or something — must actually look at the entries. NIST observes that log analysis has often been treated as a low-priority chore and that administrators frequently lack tools to automate it, while tools that do automate analysis are helpful precisely because they find patterns humans cannot easily see, such as repeated failures across many accounts. So the practice has two halves. People review logs on a schedule and whenever something smells wrong. Automated monitoring watches around the clock, flags suspicious patterns, and brings them to a person's attention — general-purpose monitoring, not any specific product, since tool selection is a practitioner topic. CISA's Logging Made Easy project exists because many small organizations would otherwise have little ability to detect attacks at all: it provides centralized logging so activity can be monitored and analyzed. Review is what turns a record into protection.

### Protecting logs, and the honest limits

Logs are themselves a target. Because they record evidence, NIST warns that logs secured improperly can be intentionally or unintentionally altered or destroyed, and notes that some malicious software has been designed specifically to edit logs to remove traces of its own installation and execution. Protection follows two general practices. Store logs safely: keep them somewhere separate from the systems being logged, so a compromised machine cannot silently rewrite its own history, and keep enough space so records are not overwritten. Limit who can change them: access controls so only the people who need to work with logs can read or alter them — the same least-privilege idea that governs accounts generally. And the honest framing: a log entry records what happened — an event, a time, an account — but not why. A failed login at 3 a.m. is a fact; whether it was an attacker, a mistake, or a test is a judgment that human analysis must make. Logs narrow the story; people finish it.

## Key Vocabulary

- **log** — A record of the events occurring within a system or network, composed of entries that each describe a single event.
- **log entry** — A single record within a log describing one event, typically including the time, the account or address involved, and the outcome.
- **log review** — The practice of examining log entries to identify events of interest, whether on a schedule, after an incident, or with automated monitoring.
- **authentication log** — A log that records sign-in attempts, including the account, the origin, whether each attempt succeeded or failed, and the time.
- **automated monitoring** — Software that watches log entries continuously, flags patterns that look suspicious, and alerts people instead of waiting for a human to look.
- **log tampering** — The alteration or deletion of log entries, by accident or on purpose, to hide or distort what happened.
- **centralized logging** — Sending log entries from many systems to one protected place so they can be stored, reviewed, and analyzed together.
- **forensic analysis** — The examination of records and evidence after an incident to reconstruct what happened and support an investigation.

## Eli-10

A log is a notebook that a computer keeps about what it has seen. Every time someone tries to sign in, every time a file changes, every time a connection opens or something breaks, the computer writes a line. The notebook is useful for two reasons: when something goes wrong, you can look back and see when it started and what touched it, and because the computer writes while it is happening, the notebook does not rely on anyone's memory. But a notebook only helps if someone reads it, and if the notebook is left where anyone can tear out pages, it cannot be trusted. A log tells you what happened. Figuring out why is the human part.

## Eli's Analogy

Think of a log as the flight recorder on an airplane. The recorder does not fly the plane and does not prevent problems; it quietly captures data about what the aircraft actually did. When a flight goes smoothly, nobody looks at it. When something goes wrong, investigators go to the recorder first, because it is the one thing that kept a steady, unedited account of the flight. A security log plays the same role for a computer system: a continuous, automatic record that matters most exactly when things go wrong.

The comparison breaks down because a flight recorder is sealed, armored, and kept where the crew cannot touch it, while many computer logs live on the very machines they describe, where the software being logged could edit them. Also, a flight recorder's data is interpreted by trained investigators; a log still needs a person, or well-designed monitoring, to notice that an entry matters.

## Worked Example

Northgate Hardware's online ordering site started rejecting customers' logins on a Tuesday afternoon. The owner checked the application log and found an error entry: the database stopped answering requests at 14:02. The database server's own log showed the same minute: a flood of failed sign-in attempts on one account — thousands of attempts in an hour. The authentication log confirmed it: the account "orders" had been failing repeatedly from the same small set of internet addresses, and then one attempt succeeded at 15:47. The logs told the story of what happened: someone hammered the account until it worked, and the system buckled under the load. They did not say who was behind it or why. The owner changed the password, locked the account, and set up monitoring that would flag a hundred failed attempts in an hour — and noted that the incident-response process, not the logs themselves, would handle the follow-up.

## Common Mistakes

- **Believing a system that logs everything is automatically protected.** Recording is not review. NIST's guidance is that routine log review and analysis is where the value comes from — identifying incidents, policy violations, and operational problems — so a log nobody looks at is just a file.
- **Trusting a log that lives on the very machine it describes.** Logs can be altered or destroyed, and NIST notes that some malicious software is designed to erase its own traces from logs. Storing logs safely and limiting who can change them is part of the practice.
- **Reading a log entry as the full explanation of an event.** An entry records what happened — the event, the time, the account — not why. Determining intent and cause is human analysis, which is why the honest framing matters.
- **Assuming an empty log means a quiet system.** Logging can be disabled, misconfigured, or filling up. Review includes checking that the recording itself is working; an empty log from a source that runs continuously is itself a signal.
- **Logging everything without deciding what matters.** OWASP's logging guidance warns that it is important not to log too much or too little. Useful logging targets the event families in this lesson — sign-ins, file changes, network connections, and errors — plus privileged actions.

## Compare / Contrast

- **A log vs. A log entry** — A log is the collection of records a system keeps; a log entry is one record within it that describes a single event, with its time, actors, and outcome.
- **Logging vs. Incident response** — Logging is the continuous recording of events as they happen; incident response is the organized process of handling a confirmed problem. Logs feed investigations — they are not the investigation itself, which is why incident response is its own topic.
- **Manual log review vs. Automated monitoring** — Manual review is a person examining entries on a schedule or after an event; automated monitoring watches continuously, flags patterns, and brings them to a person. Both are forms of review; they differ in who does the watching.

## Key Takeaway

A log is a record of what a system has seen, and it only becomes protection when someone reviews it, when it is stored where it cannot be tampered with, and when a human turns its entries into answers.

## Practice Question Bank

**Q1.** According to the working definition from NIST SP 800-92, what is a log?

- A. A program that blocks unwanted network traffic based on a policy
- B. A database that tracks publicly known software weaknesses
- C. A written report a security analyst produces after an incident is resolved
- D. A record of the events occurring within a system or network, composed of entries that each describe one event

**Key: D.** NIST SP 800-92 defines a log as a record of the events occurring within a system or network, made up of entries that each relate to a specific event. A program that blocks traffic is a firewall, a database of weaknesses is a vulnerability tracker, and an after-the-fact report is an analysis product, not the log itself.

**Q2.** A deli's login server records the account "manager" failing to sign in once a minute from 2:00 to 4:00 a.m., a time the shop is closed, followed by one successful sign-in. What does this lesson say the log shows — and what does it not show?

- A. It proves the manager's password was stolen and that a former employee is responsible
- B. It proves the server was malfunctioning, since real sign-ins only happen during business hours
- C. It records repeated failed sign-in attempts followed by a success, giving investigators a timeline to start from — but not the identity or the reason behind them
- D. It shows nothing useful, because login attempts are not the kind of event systems log

**Key: C.** NIST SP 800-92 notes that authentication servers log each attempt with its origin, username, success or failure, and time, and that logs support investigations. The entry records what happened — a burst of failures and then a success — but not who was behind it or why, which is exactly the honest limit the lesson stresses. Login attempts are routinely logged, so D is wrong, and the pattern alone proves neither theft nor malfunction.

**Q3.** A bakery's point-of-sale computer keeps its activity log in a file on that same computer, and all four employees sign in with one shared administrator account. Which change best follows this lesson's guidance on protecting logs?

- A. Store the log where people who might tamper with it cannot reach it, and limit who is allowed to read or change it
- B. Delete old entries every Friday so the log file never grows large enough to attract attention
- C. Keep the log only in the running program's memory so nothing is written to disk
- D. Have each employee keep a personal notebook of what they did during their shift

**Key: A.** NIST SP 800-92 warns that logs secured improperly can be altered or destroyed and must be protected; safe storage plus restricted access is the general practice the lesson teaches. Deleting entries destroys evidence, an in-memory-only log is lost the moment the program stops, and a notebook is not a system log at all.

**Q4.** A systems administrator reviews the antivirus log, which should record detected malware and quarantines, and the firewall log, which should record blocked traffic, and finds both completely empty for the past week. Following this lesson's review practice, what should the administrator think?

- A. Nothing to worry about — empty logs mean nothing unusual happened
- B. The network is definitely safe, because no blocked traffic means no attacks
- C. An empty log can itself be a signal: logging may be disabled, misconfigured, or full, so the administrator should verify the recording is actually working
- D. The firewall should be replaced with a model that generates more entries

**Key: C.** The lesson's core practice is review, and review includes questioning the record itself: NIST lists log generation, protection, and analysis as the areas where things go wrong. A week of silence from two sources that run continuously is more likely a broken recorder than a quiet network, so the administrator checks the sources. An empty log proves nothing about safety, which rules out A and B, and D fixes nothing until the recording is verified.

**Q5.** According to NIST SP 800-92, which of the following is a benefit of routine log review and analysis?

- A. It automatically prevents attacks from reaching the system
- B. It helps identify security incidents, policy violations, fraudulent activity, and operational problems shortly after they occur
- C. It removes the need for authentication, because every action is recorded
- D. It guarantees that log entries can never be altered

**Key: B.** NIST SP 800-92 states that routine log reviews and analysis help identify security incidents, policy violations, fraudulent activity, and operational problems shortly after they occur. Logs record rather than block, so A is wrong; recording does not replace authentication, so C is wrong; and protecting logs from alteration is a separate practice, so D is wrong.

## Sources

- **NIST SP 800-92: Guide to Computer Security Log Management** — National Institute of Standards and Technology. https://csrc.nist.gov/pubs/sp/800/92/final (read via the official PDF at nvlpubs.nist.gov, 2026-08-21). Working definition of a log, log sources, what gets logged, benefits of log review, and the challenges of log protection and analysis.
- **CISA: Logging Made Easy (service page)** — Cybersecurity and Infrastructure Security Agency. https://www.cisa.gov/resources-tools/services/logging-made-easy (read via an Internet Archive capture, 2026-03-15; the canonical URL is cited). Why organizations without logging have little ability to detect attacks, and how centralized logging enables monitoring and analysis.
- **OWASP Logging Cheat Sheet** — OWASP Foundation (CC BY-SA 4.0). https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html (read live, 2026-08-21). What to log — authentication successes and failures, errors, network connections, privileged actions — and the guidance not to log too much or too little.

## Related Topics

- cybersecurity:foundations:incident-response
- cybersecurity:foundations:authentication
- cybersecurity:foundations:least-privilege
- cybersecurity:foundations:privacy
- cybersecurity:foundations:nist-cybersecurity-framework

## Editorial Metadata

- Topic: cybersecurity:foundations:logging — Logging
- Editorial status: READY_TO_PUBLISH
- Researched at: 2026-08-21 (NIST SP 800-92 and OWASP Logging Cheat Sheet read live; CISA Logging Made Easy read via Internet Archive capture)
- Source project: EliExplains original synthesis; reference-only sources; no source prose adapted
- Scope notes: defensive framing only; incident response, monitoring tools in depth, and privacy rules are owned by sibling topics and are referenced here only.
