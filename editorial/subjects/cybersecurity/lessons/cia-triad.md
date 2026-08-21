# CIA Triad

## In 30 Seconds

Confidentiality, integrity, and availability — the CIA triad — are the three security goals that NIST uses to frame information security. Confidentiality means only authorized people can read information. Integrity means information is accurate and unaltered. Availability means systems and data are usable when needed. Security professionals use the three goals to decide what to protect, and different organizations balance them differently: a bank and a hospital do not share the same priorities.

## Why This Matters

Every security headline you read — a leaked database, a corrupted record, a website that will not load — is a failure of one of the three goals. Naming the goal that failed is the first step to understanding what happened and why it matters. The triad also gives you practical questions for your own data: who may see it, is it true, and can you reach it when you need it? At school and at work you will be trusted with records — grades, customer lists, payroll files — and the triad turns "protect this data" from a vague instruction into three concrete checks. Seeing how a bank and a hospital balance the same three goals differently is the beginning of thinking like a security professional.

## Learning Objectives

- Define confidentiality, integrity, and availability in your own words, using NIST's definitions as the reference point.
- Distinguish the three security goals, including what a failure of each one looks like.
- Explain why security professionals treat the triad as a framework for deciding what to protect.
- Apply the triad to map common protections — encryption, hashing, and backups — to the goal each primarily serves.
- Analyze how organizations with different missions, such as a bank and a hospital, balance the three goals differently.

## The College Version

### The three security goals

The U.S. federal standard FIPS 199, published by the National Institute of Standards and Technology (NIST), names three core security objectives — confidentiality, integrity, and availability — for data and the systems that hold it. NIST defines confidentiality as preserving authorized restrictions on information access and disclosure — only authorized people can see the information. Integrity means guarding against improper information modification or destruction, keeping information accurate and unaltered. Availability means ensuring timely and reliable access to and use of information. NIST's companion guide, SP 800-12 Revision 1, defines information security as shielding information and the systems carrying it from every form of unauthorized access, use, tampering, or destruction to ensure those goals. The initials C-I-A give the triad its name.

### Confidentiality: who may see it

Confidentiality is about the audience for information. NIST's definition — preserving authorized restrictions on information access and disclosure — means a system should keep information readable only by the people and programs allowed to see it. Consider a community college's online grade book: the instructor who entered the grades, the registrar's office, and the student themselves may read them; nobody else should. The goal is not secrecy for its own sake; it is control over who can look. A confidentiality failure is unauthorized disclosure — information reaching someone it was not meant for. Because digital copies spread instantly, a single disclosure is hard to contain. Encryption, which scrambles data so only the key holder can read it, is the classic confidentiality control; it has its own lesson.

### Integrity: is it accurate and unaltered

Integrity is about the truth of information. NIST defines a loss of integrity as unauthorized modification or destruction of information, and SP 800-12 adds that data integrity means data has not been altered in an unauthorized manner, whether in storage, during processing, or in transit. The danger is that a change can be silent: no one looking at a screen may realize a value was changed underneath them. Consider a package-tracking service that records a parcel's delivery address; if that record is altered without authorization, the parcel ships to the wrong city while every display still looks normal. Integrity failures do not always announce themselves, which is why systems use automated checks. Hash functions generate a value from a file's contents that changes if the file changes, so comparing values reveals tampering; hashing has its own lesson.

### Availability: usable when needed

Availability is about access on demand. NIST defines a loss of availability as the disruption of access to or use of information or an information system. An online store's checkout page is available when a shopper on a sale day can complete a purchase; a hospital's scheduling system is available when the evening shift can pull up patient appointments. Availability fails when a system goes down, a network connection drops, or data becomes unreachable — whether the cause is an attack, a power cut, or a faulty update. Because outages strike without warning, organizations plan ahead: backups, kept separately and tested, let a system recover, and NIST calls them critical to contingency planning; backups have their own lesson.

### The triad as a framework

Security professionals use the three goals as a framework for thinking about what to protect, rather than as three boxes to check off. NIST describes defining security objectives as the first step in managing a system's security: an organization sets objectives that fit its own systems, and stakeholders help shape them. Before choosing controls, an organization asks what it is protecting and why — which information must stay private, which must stay accurate, which must keep working. The same questions apply to a single record: a loan application needs confidentiality, a quoted interest rate needs integrity, and the application page needs availability. Controls map naturally onto the goals: encryption primarily serves confidentiality, hashing primarily serves integrity, and backups primarily serve availability — each has its own lesson.

### Balancing the goals

The three goals do not carry equal weight everywhere; priorities depend on context. FIPS 199 notes that the security objectives must be applied within the context of each organization and the overall national interest. Compare a bank with a hospital. For a bank, confidentiality often dominates: account balances and transaction histories are sensitive, and a leak can cost customers' trust and real money. For a hospital, availability can dominate: in an emergency, a clinician who cannot reach a patient's records or medication list cannot simply wait. A hospital still protects confidentiality, and a bank still needs availability; the difference is emphasis. When a trade-off is unavoidable, each leans toward the goal its mission depends on — recognizing that is part of deciding how to protect a system.

### When the goals fail

Real failures of each goal are easy to find, and they repay study. In September 2017, the credit bureau Equifax announced a data breach that exposed the personal information of 147 million people — a confidentiality failure on a national scale, documented by the Federal Trade Commission. In February 2021, someone gained unauthorized access to the control system of a U.S. drinking water treatment facility and used it to increase the amount of a caustic chemical in the treatment process — an integrity failure, caught when staff noticed the change in dosing and corrected it, according to CISA. In July 2024, a defect in a security-software update caused widespread outages of Windows systems, leaving organizations unable to use their own computers — an availability failure that had nothing to do with an attacker, per the company's own statement. Each failed goal carries real costs, and the triad names what they are.

## Key Vocabulary

- **confidentiality** — The security goal of keeping information readable only by authorized people and programs; a loss of confidentiality is unauthorized disclosure of information.
- **integrity** — The security goal of keeping information accurate and unaltered; a loss of integrity is unauthorized modification or destruction of information.
- **availability** — The security goal of ensuring timely and reliable access to information and systems; a loss of availability means they cannot be used when needed.
- **information security** — The job of keeping data and its systems safe from every kind of unauthorized access, interference, and damage, so that the three security goals hold.
- **security objective** — A goal an organization defines for protecting a specific system, such as keeping patient records confidential; NIST treats the security objectives as the first step in managing a system's security.
- **encryption** — A control that scrambles data into an unreadable form so only someone with the right key can read it; it primarily serves confidentiality.
- **hash function** — A computation that produces a value from a file's contents so that any change to the file changes the value; comparing hash values detects tampering and primarily serves integrity.
- **backup** — A copy of data kept separately so it can be restored if the original is lost or damaged; backups primarily serve availability.

## Eli-10

The CIA triad is a way of asking three questions about any piece of information. Who is allowed to see it? That is confidentiality. Is it the true, unaltered version? That is integrity. Can the people who need it get it when they need it? That is availability. Security professionals run these three questions over everything they protect — a grade book, a patient record, a paycheck file — and then choose protections that answer them. The three letters are not a recipe; they are a lens. When something goes wrong, the lens also names what broke: a leak, a tampered record, or a system that would not come up.

## Eli's Analogy

Think of a public library. Confidentiality is the locked reference room: the atlas is there for people who ask for it, but not for anyone to walk off with. Integrity is the books being the true editions — no pages torn out, no passages penciled over, so what you read is what the author wrote. Availability is the library keeping its hours: the doors open when you need the book, and the book is on the shelf, not in a box in the basement. A well-run library quietly manages all three, and so does a well-run system.

The comparison breaks down because physical books cannot be copied in a second or changed invisibly; a photocopier can duplicate a document, but it leaves the original alone. Digital information can be copied endlessly and altered without visible marks, which is why libraries rely on walls and staff while systems rely on technical checks like encryption, hashes, and backups. The triad is also only a starting frame: who you are, what you are allowed to do, and what to do when something fails are separate questions covered in their own lessons.

## Worked Example

Hillview Credit Union processes a car-loan application for a member, and all three goals are in play at once. Confidentiality: the application includes income and account numbers, so the form is encrypted in transit and only loan officers with a need can open it; if a copy leaked, the member's financial life would be exposed. Integrity: the quoted interest rate and the member's balance come straight from stored records, and the system runs a hash check on its database each night so a tampered figure would be detected; a silently changed rate could cost the member hundreds of dollars. Availability: the application page and teller systems stay up during business hours, and nightly backups mean that if a server fails, records can be restored by the next morning. One process, three goals, three kinds of protection — and a failure of any one of them would hurt a real person.

## Common Mistakes

- **Treating the triad as three separate boxes to tick off.** The goals are lenses on the same system, and one control can serve several. Backups mainly support availability, but a restored copy must also be the correct, unmodified version — integrity matters there too. Judge a control by what it protects, not by which box it belongs to.
- **Assuming all three goals matter equally in every organization.** Priorities depend on context: a hospital may put availability first, a bank may put confidentiality first. Apply the same logic to your own accounts — decide what your data needs before choosing how to protect it.
- **Confusing integrity with "the data was entered correctly in the first place."** Integrity is about unauthorized or unexpected change after the fact, not about whether a human typed the right number. A mistyped price is an error; a price changed without authorization is an integrity failure.
- **Thinking a backup exists means the data is safe.** A backup that was never tested, or stored beside the original, may be useless exactly when it is needed. NIST's guidance says to test that backup copies are actually usable.

## Compare / Contrast

- **Confidentiality vs. integrity.** Confidentiality controls who can see information; integrity controls whether the information is the true, unaltered version. A record can be perfectly private and still wrong, or perfectly accurate and still leaked.
- **Encryption vs. hashing.** Encryption scrambles data so only the key holder can read it — reversible — and primarily protects confidentiality. Hashing produces a value that changes if the data changes — one-way — and primarily protects integrity. Each has its own lesson.
- **A bank's priorities vs. a hospital's priorities.** Both protect all three goals, but a bank leans toward confidentiality of account data while a hospital leans toward availability of records in emergencies. Same triad, different balance.

## Key Takeaway

Confidentiality, integrity, and availability are the three security goals that frame information security; ask who may see the data, whether it is unaltered, and whether it is reachable — then balance the answers to fit the context.

## Practice Question Bank

1. Which security goal is about making sure only authorized people can read information?
   - A. Confidentiality (correct)
   - B. Integrity
   - C. Availability
   - D. Authentication
2. A system compares a stored hash of a database file with a freshly computed hash to detect any change. Which security goal does this protect?
   - A. Confidentiality
   - B. Availability
   - C. Integrity (correct)
   - D. Non-repudiation
3. A hospital's emergency room keeps patient records available around the clock, with tested backups so records can be restored quickly after an outage. Which goal is this plan primarily protecting?
   - A. Confidentiality
   - B. Integrity
   - C. Authentication
   - D. Availability (correct)
4. A bank invests heavily in encrypting customer account data, while a hospital invests heavily in redundant systems that keep records reachable during outages. What does this difference illustrate?
   - A. Encryption always matters more than backups in any organization
   - B. Organizations balance the three goals differently depending on their mission (correct)
   - C. Security controls only work in organizations with large budgets
   - D. Confidentiality is unnecessary for hospitals
5. In September 2017, a credit bureau announced a breach that exposed the personal information of 147 million people. Which security goal failed in that event?
   - A. Availability
   - B. Integrity
   - C. Authentication
   - D. Confidentiality (correct)

## Sources

- NIST, FIPS 199: Standards for Security Categorization of Federal Information and Information Systems — https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf
- NIST, SP 800-12 Rev. 1: An Introduction to Information Security — https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-12r1.pdf
- U.S. Federal Trade Commission, Equifax Data Breach Settlement — https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement
- CISA, Cybersecurity Advisory AA21-042A: Compromise of U.S. Water Treatment Facility — https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-042a
- CrowdStrike, Statement on Falcon Content Update for Windows Hosts — https://www.crowdstrike.com/blog/statement-on-falcon-content-update-for-windows-hosts/

## Related Topics

- cybersecurity:foundations:what-cybersecurity-is
- cybersecurity:foundations:threats
- cybersecurity:foundations:encryption
- cybersecurity:foundations:hashing
- cybersecurity:foundations:backups

## Editorial Metadata

- Topic ID: cybersecurity:foundations:cia-triad
- Editorial status: READY_TO_PUBLISH
- Researched at: 2026-08-21
- Provenance: EliExplains original synthesis; facts verified against NIST FIPS 199, NIST SP 800-12 Rev. 1, FTC (Equifax), CISA AA21-042A, and CrowdStrike; no source prose reproduced.
