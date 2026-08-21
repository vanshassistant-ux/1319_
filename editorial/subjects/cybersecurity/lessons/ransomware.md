# Ransomware

## In 30 Seconds

Ransomware is a form of malware that encrypts the files on a device, making them and the systems that depend on them unusable, then demands payment in exchange for decryption. That is CISA's working definition: data held hostage. It typically arrives through phishing emails, malicious downloads, and exposed remote access. Paying is no guarantee of recovery, so the honest strategy is prevention: offline tested backups, patching, multi-factor authentication, and restricted access.

## Why This Matters

Ransomware turns data into a hostage: your own files become the leverage an attacker uses against you. Hospitals, schools, and city governments have all had operations shut down by it, so the stakes reach far beyond one computer. Understanding what ransomware is and how it arrives lets you make the decisions that actually matter, keeping clean backups, patching promptly, and never assuming a payment will fix things. The honest bottom line: prevention beats payment, and the tools for prevention are ordinary habits anyone can learn.

## Learning Objectives

- Define ransomware using CISA's working definition: malware that encrypts files on a device and demands payment to restore them.
- Name the main delivery routes of ransomware at the conceptual level: phishing emails, malicious downloads, and exposed remote access.
- Explain why paying the ransom does not guarantee data recovery and how that shapes the recommended response.
- Describe the core defenses: offline tested backups, patching, multi-factor authentication, and restricted access.
- Explain the recovery basics: restore from clean backups and report the incident to authorities.
- Distinguish ransomware from the sibling topics of malware, backups, and incident response.

## The College Version

### What ransomware is

Ransomware is a form of malware designed to encrypt files on a device, rendering any files and the systems that rely on them unusable, and malicious actors then demand a ransom in exchange for decryption. That is the working definition CISA, the U.S. agency that coordinates critical-infrastructure security, publishes across its StopRansomware resources. The key move is not stealing the data but locking it: encryption scrambles the files so the owner cannot read them, and the attacker holds the key that would unscramble them. The victim's own data becomes the hostage, and the demand note explains how to pay for release. Modern ransomware operations often add a second layer, called double extortion: they copy data out before or while encrypting, then threaten to sell or leak the stolen files, or publicly name and shame the victim, if the ransom is not paid. After the initial infection, the malware also tries to spread to connected systems, including shared storage drives and other accessible computers, which is why one infected machine can lock far more than its own files. CISA also warns that actors increasingly delete or destroy system backups during an attack, deliberately making restoration harder or impossible.

### How it arrives

Ransomware gets in through a small set of familiar doors, none of which require special technical skill on the victim's part. The most common is the phishing email: a message that appears to come from a legitimate organization or someone the victim knows, enticing them to click a malicious link or open a malicious attachment, as CISA describes. The second is the malicious download, which includes what CISA calls drive-by downloads, programs installed from the internet without the user's consent or knowledge, often bundled with cracked software, fake updates, or files from untrustworthy sites. The third is exposed remote access: internet-facing systems and login services that are left reachable from the outside, where crews can exploit known, unpatched vulnerabilities or spray stolen or guessed passwords at accounts, a route documented in the joint CISA, FBI, and MS-ISAC advisory on the RansomHub group. Naming the routes matters because each one has a matching defense: treating unexpected email with suspicion, downloading only from sources you trust, keeping systems patched, and putting multi-factor authentication on anything reachable from the internet.

### The impact

Ransomware is not a problem for one unlucky laptop. CISA's FAQs state plainly that anyone with a computer connected to the internet is at risk, including government or law enforcement agencies and healthcare systems or other critical-infrastructure entities, and that state, local, tribal, and territorial governments and critical-infrastructure organizations have been increasingly targeted. Hospitals, schools, and city governments have all had operations disrupted: the joint RansomHub advisory alone documents more than 210 victims since early 2024 across sectors including healthcare and public health, government services and facilities, water and wastewater, emergency services, and financial services. The damage shows up as downtime and recovery cost rather than just a bill: ransomware incidents can severely impact business processes and leave organizations without the data they need to operate and deliver mission-critical services, and the economic and reputational impacts can stretch through extended recovery. CISA notes that some ransom demands have exceeded one million dollars. For a hospital, locked patient records can mean postponed care; for a city, it can mean residents cannot pay bills or reach services; for a small business, it can mean weeks of lost work.

### The payment question

When the files are locked, paying looks like the fastest way out, which is exactly what the demand note wants you to think. The evidence points the other way. CISA's FAQs put it directly: some victims pay to recover their files, but there is no guarantee that they will recover their files if they do. CISA's guidance adds that the Federal Government does not support paying ransom demands, and that even after payment, threat actors have demanded additional payments, deleted data, or refused to provide a working decryption key. Microsoft's ransomware guidance makes the same point in plainer terms: paying an attacker buys a recovery key they might not deliver. Payment also funds the criminal ecosystem, giving crews the money to refine their tools and target the next victim, and it marks an organization as willing to pay, which can invite repeat attacks. None of this is a moral lecture; it is a risk calculation. The payment is a gamble with poor odds, while the defenses described next shift the odds entirely.

### Defense and recovery

The defenses are ordinary, unglamorous, and effective when done consistently. Backups come first: keep copies of important data on a separate device that cannot be reached from the network, store them offline, and test restoring from them regularly, because an untested backup is a hope, not a plan, and attackers specifically target backups. The details of backup design belong to the sibling topic on backups. Patching comes second: outdated applications and operating systems are the target of most attacks, so installing updates promptly closes the doors crews exploit. Multi-factor authentication and restricted access come third: the joint advisory calls for MFA on administrative accounts and on services like webmail and remote access, for restricting users' permissions to install and run software, and for segmenting networks so an infection cannot sweep the whole organization; the sibling topics on MFA and least privilege own the specifics. Recovery basics are simpler still: restore from clean backups, after scanning the backup data, and report the incident to authorities, the FBI or Secret Service through IC3 for individuals, and the IT helpdesk or security office inside an organization, with CISA available for technical assistance. Detailed response procedures belong to the sibling topic on incident response. The honest framing ties it together: prevention beats payment, because a restored backup costs nothing to the criminals while a paid ransom funds them.

## Key Vocabulary

- **ransomware** — Malware that encrypts files on a device, makes them and the systems that rely on them unusable, and demands payment in exchange for restoring access.
- **encryption** — The process of scrambling data so it cannot be read without the correct key; ransomware uses it to lock victims out of their own files.
- **decryption** — The process of unscrambling encrypted data back into readable form, normally by using the correct key.
- **double extortion** — A ransomware tactic in which attackers also steal data and threaten to leak or sell it unless the ransom is paid.
- **drive-by download** — A program that installs on a device from the internet without the user's consent or knowledge, a common way ransomware arrives.
- **multi-factor authentication** — A login process that requires two or more proofs of identity, such as a password plus a one-time code, before access is granted.
- **offline backup** — A copy of data stored on a device that is disconnected from the network, so ransomware cannot reach and encrypt it.
- **least privilege** — The practice of giving users and programs only the access they need to do their jobs, limiting how far malware can spread.

## Eli-10

Ransomware is a computer program that locks your files and then asks you for money to unlock them. The lock is real: the program scrambles your files with encryption, and the criminals keep the key. It usually sneaks in through an email that tricks you into clicking, a download from somewhere untrustworthy, or a remote connection left open on the internet. The dangerous part is that paying the money does not guarantee you get your files back, because the criminals may not send a working key at all. So the smart plan is to make the attack pointless: keep a copy of your important files somewhere the criminals cannot reach, update your software, use two-step login, and be suspicious of surprise attachments. If your files are locked, restore from your copy, report the attack, and do not count on paying your way out.

## Eli's Analogy

Imagine someone sneaks into your house, puts every family photo album into a locked safe that only they can open, and leaves a note: send me money and I will give you the combination. The albums are still yours, but you cannot look at them until they decide to cooperate. Now imagine you kept a second set of albums at your grandmother's house across town. The thief can lock the safe, but they cannot touch the copies, so the photos are never truly lost.

The comparison breaks down in one important way. Unlike a thief with a safe, a ransomware crew may not even have a working combination to sell: the key they promise may not exist, they may demand more money after the first payment, and the money funds more attacks. The analogy also flatters the attacker's reliability, which is exactly why the guidance says paying is a gamble, not a transaction.

## Worked Example

A small dental practice keeps years of patient records on a server in the back office. One morning a receptionist opens what looks like a supplier invoice attached to an email; within the hour, every file on the server has a new extension and a note demands payment in bitcoin for the decryption key. The practice had followed one rule faithfully: every night, the server copied its files to an external drive, which was then disconnected and locked in a drawer. The team wiped the infected server, restored the previous night's backup, confirmed the records were readable, and reported the incident through CISA's reporting channels and to law enforcement. They lost a day of appointments but not a single record, and they never paid. The backup, not the payment, was what made the difference.

## Common Mistakes

- **Paying the ransom quickly, assuming the files will come back.** CISA states there is no guarantee that victims recover their files after paying, and the U.S. government does not support paying demands. Attackers have refused to decrypt even after payment, and paying marks the victim as willing to pay again.
- **Believing backups alone make you safe.** A backup only helps if ransomware cannot reach it. CISA warns that attackers delete backups during attacks, so backups must be stored separately, kept offline or otherwise unreachable, and regularly tested with a real restore.
- **Assuming only big companies get hit.** CISA's FAQs say anyone with an internet-connected computer is at risk, and hospitals, schools, and city and state governments are named among the targets. Small organizations and individuals are common victims.
- **Treating ransomware as the same thing as any other malware.** Ransomware is one member of the malware family, and its defining trait is the ransom demand attached to encryption. Viruses, worms, and trojans behave differently, and the malware topic covers the family as a whole.
- **Keeping the incident quiet instead of reporting it.** Official guidance says to report ransomware to authorities, for individuals the FBI or Secret Service through IC3, and for organizations the internal IT helpdesk or security office. Reporting helps others and connects victims with assistance; the incident-response topic covers the process.

## Compare / Contrast

- **Ransomware vs. General malware** — Ransomware is a specific member of the malware family whose defining trait is holding data hostage by encryption and demanding payment. Other malware, like viruses, worms, and trojans, may steal, spy, or destroy without ever asking for money.
- **Paying the ransom vs. Restoring from backups** — Paying is a gamble with no guarantee of recovery that funds the criminals; restoring from an offline, tested backup is a reliable path that costs the attackers nothing and teaches them nothing about you.
- **Ransomware vs. Data breach** — A breach is unauthorized access to or disclosure of data, while ransomware locks data and demands payment. Modern ransomware often does both, stealing data before locking it, which is why CISA describes double extortion.

## Key Takeaway

Ransomware holds data hostage by encrypting it and demanding payment, and paying is no guarantee of recovery. Offline tested backups, patching, multi-factor authentication, and restricted access are the defenses that actually work, because prevention beats payment.

## Practice Question Bank

**Q1.** Which statement matches the working definition of ransomware used by CISA?

- A. Software that secretly records a user's keystrokes and sends them to an attacker.
- B. A program that spreads between computers on its own without any user action.
- C. A form of malware designed to encrypt files on a device, making them and the systems that rely on them unusable, then demanding payment for decryption.
- D. A message that impersonates a trusted organization to trick someone into revealing credentials.

**Key: C.** CISA defines ransomware as a form of malware designed to encrypt files on a device, rendering the files and dependent systems unusable, with a ransom demanded for decryption. Keystroke recording describes spyware, self-spreading describes a worm, and impersonation describes phishing.

**Q2.** A town library backs up its catalog every night to a hard drive that stays plugged into the same server it protects. A ransomware infection encrypts the server, and staff find the backup drive encrypted too. Which practice would most directly have prevented that outcome?

- A. Requiring a longer password for the server administrator account.
- B. Installing a second email client for staff to use.
- C. Running an antivirus scan once a month instead of weekly.
- D. Keeping the backup on a separate device, disconnected and stored offline when not in use.

**Key: D.** CISA recommends storing backups on a separate device that cannot be accessed from the network and disconnecting it after the backup completes, because ransomware reaches connected drives. A longer password does not protect an attached backup, and the other options do not address backup survivability at all.

**Q3.** A clinic paid a ransom, but the attackers never delivered a working decryption key and some records stayed unusable. Which statement best matches how official guidance treats this outcome?

- A. It is the expected risk: paying does not guarantee files will be recovered, and the U.S. government does not support paying ransom demands.
- B. It is unusual: paying almost always restores files, so the clinic should simply pay again.
- C. It proves the clinic should have paid more, because larger payments are honored.
- D. It only happens to organizations that lack cyber insurance.

**Key: A.** CISA's FAQs state that some victims pay but there is no guarantee they will recover their files, and CISA's guidance says the Federal Government does not support paying demands, with attackers known to refuse decryption even after payment. Paying more or again is not a supported remedy, and insurance does not determine whether a key arrives.

**Q4.** Which route is one of the named ways ransomware commonly reaches its victims?

- A. A hard drive failing after years of normal use.
- B. A phishing email that tricks the recipient into opening a malicious link or attachment.
- C. A legally required software license renewal expiring.
- D. A power surge during a thunderstorm.

**Key: B.** CISA's guidance names phishing emails, which often appear to come from a legitimate organization or known contact, and drive-by downloads among the common delivery routes. Hardware failure and power surges are non-adversarial failures, and license renewals are not a delivery route.

**Q5.** A hospital chain and a mid-sized city government both report ransomware incidents in the same week. Which statement about who gets targeted is best supported by the sources?

- A. Only private businesses are targeted; governments and hospitals are exempt.
- B. Targeting is limited to large corporations with deep pockets.
- C. Anyone with an internet-connected computer is at risk, and healthcare systems, governments, and critical-infrastructure organizations have all been hit.
- D. Ransomware crews only target individuals at home, never organizations.

**Key: C.** CISA's FAQs state that anyone with a computer connected to the internet is at risk, including government or law enforcement agencies and healthcare systems or other critical-infrastructure entities, and its joint advisory documents victims across sectors including healthcare and public health and government services. The other options contradict the documented targeting pattern.

## Sources

- CISA: Stop Ransomware (https://www.cisa.gov/stopransomware)
- CISA: Ransomware FAQs (https://www.cisa.gov/stopransomware/ransomware-faqs)
- CISA: Protecting Against Ransomware (https://www.cisa.gov/news-events/news/protecting-against-ransomware)
- CISA/FBI/MS-ISAC Cybersecurity Advisory AA24-242A: #StopRansomware: RansomHub Ransomware (https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-242a)
- Microsoft Learn: Protect your organization against ransomware (https://learn.microsoft.com/en-us/security/ransomware/protect-against-ransomware)
- NIST Special Publication 800-83 Rev. 1: Guide to Malware Incident Prevention and Handling for Desktops and Laptops (https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-83r1.pdf)

## Related Topics

- cybersecurity:foundations:malware
- cybersecurity:foundations:phishing
- cybersecurity:foundations:backups
- cybersecurity:foundations:mfa
- cybersecurity:foundations:incident-response

## Editorial Metadata

- Topic ID: cybersecurity:foundations:ransomware
- Subject: cybersecurity, Unit: foundations
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified (researched 2026-08-21)
- Rights status: reference-only U.S. government and vendor documentation; the CISA working definition is quoted briefly with attribution, no source prose adapted
- Defensive framing: ransomware is described at the conceptual level only; delivery routes are named but never demonstrated, and no exploit, tooling, or attack detail is taught. Unauthorized access to systems is illegal, and this lesson teaches awareness and protection, not offensive skills. Backups, MFA, and incident response are referenced and deferred to their sibling topics.
