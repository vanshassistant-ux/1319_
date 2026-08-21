# Viruses: The Classic Self-Replicating Malware

## In 30 Seconds

A virus is a type of malware that attaches itself to a file or program, then spreads to other files when the host runs. Opening an infected attachment or running an infected program is what starts the chain. Unlike a worm, which spreads on its own across networks, a virus needs a host and usually a user action. Signs of infection include slowness, strange messages, and files changing unexpectedly. Keeping software updated, treating unexpected attachments with caution, and using security software all help. Viruses are an old threat — but not a dead one.

## Why This Matters

Viruses are the oldest family of malware, and understanding them teaches the pattern nearly every other threat follows: something ordinary carries something harmful, and one careless click starts the chain. The practical payoff is immediate — knowing that a virus needs its host to run explains why "I never download anything" is not enough, and why updates and security software matter. The habits this lesson builds — suspicion toward unexpected attachments, prompt updating, and running security software — protect schoolwork, accounts, and money every day. And the honest framing, that incidents still occur, keeps vigilance honest.

## Learning Objectives

- Define a virus as malware that attaches itself to a file or program and spreads when the host runs.
- Explain, at a conceptual level, how viruses spread: through infected attachments and programs that a user opens.
- Distinguish a virus from a worm, naming the key difference: a virus needs a host and usually a user action, while a worm spreads on its own.
- Recognize the common signs of a possible infection, including slowness, strange messages, and unexpected file changes.
- Apply the core defenses — avoiding unexpected attachments, keeping software updated, and using security software — to everyday situations.
- Evaluate the honest limits of defense, explaining why viruses remain a real threat despite being an old one.

## The College Version

### What a virus is and how it spreads

A virus is a malware family member that rides inside another file or program — its host — and only spreads when that host runs. Microsoft’s definition centers on replication: the virus copies its code into other files or programs, and the infected file still looks ordinary. NIST's malware guide describes the general pattern: malicious code is covertly inserted, aiming to destroy data or to harm the victim's system across all three security goals — confidentiality, integrity, and availability.

Infection starts through ordinary actions. NIST lists the classic routes: infected email attachments, malicious websites, and removable media such as a borrowed USB drive. When a user opens an infected attachment or runs an infected program, the virus executes and copies itself into other files, and the chain continues the next time one of those hosts runs. Notice what is missing: no exotic technique. Every route depends on something normal — an email, a download, a drive — being used at the wrong moment. That is why the defense begins with attention, not with special tools.

### The family line: viruses, worms, and the malware umbrella

The word "virus" is used loosely, but the technical definition is precise — and the precision matters. A virus needs two things: a host to travel in and, usually, a human action like opening a file, because the virus only executes when that host runs. If the host never runs, the virus stays dormant inside it.

A worm is the family's opposite: it replicates and spreads by itself, crossing networks without needing anyone to open a file or attachment. Microsoft's comparison is the cleanest: a virus needs the host program to run, while a worm needs no direct intervention at all.

Both are members of a larger family. Malware is the umbrella term for harmful software of every kind, and NIST's glossary lists viruses, worms, and trojan horses as code-based entities that infect hosts. Trojans wear a desirable disguise and usually hand an attacker access; ransomware locks or encrypts data for payment. Each of those families gets its own lesson — here, the point is simply that "virus" names one specific behavior, not the whole category.

### Signs of infection

What does an infected machine look like? Microsoft's guidance names the usual warning signs: performance that suddenly drags, pop-ups that appear from nowhere, programs launching on their own, and settings that change by themselves. Strange messages and files changing on their own — new files where none were created, or settings that no longer behave — fit the same pattern. The honest caveat is that signs are clues, not proof: some malware is designed to hide, and a quiet computer is not automatically a clean one. When signs appear, the right response is to run security software and investigate, not to assume and ignore.

### Defense, and the honest limit

Defense is three habits that work together. First, be wary of unexpected attachments: NIST recommends not opening them even when they seem to come from a known contact, and checking through another channel when one arrives without warning. Second, keep software updated: CISA urges installing updates promptly and enabling automatic updates, because providers ship fixes for the weak spots malware exploits. Third, use security software: NIST describes antivirus software as the most widely used malware-control measure, and it should be kept updated like everything else.

And then the honest part, stated plainly by the sources. NIST is explicit that incidents still happen — brand-new threats and human mistakes slip through, and technical controls cannot stop everything. Viruses are an old threat, one of the oldest in computing, but they are not a dead one; the same habits that blocked them decades ago still matter today. Defense reduces risk substantially; it never reduces it to zero.

## Key Vocabulary

- **virus** — Malware that attaches itself to a file or program and spreads to other files when the host runs.
- **malware** — The broad category of harmful software that a virus belongs to.
- **worm** — Malware that replicates and spreads on its own across networks, without needing a user to open a file.
- **host program** — The legitimate file or program a virus attaches itself to; running it is what triggers the virus.
- **antivirus software** — Security software that detects, blocks, and removes known malware; the most widely used malware-control measure.
- **attachment** — A file sent along with an email message; opening an infected attachment is a classic way a virus starts.
- **software update** — A patch issued by a provider that fixes security weak spots; installing it promptly is a core defense.

## Eli-10

A virus is a small program that hides inside a normal file — a document, a photo, an installer — and waits. When you open that file, the virus wakes up, copies itself into other files, and the cycle repeats: every file it touches becomes another carrier. It does not fly through the air; it travels in things you open. That is why an attachment you were not expecting is the classic doorway. And unlike a worm, which slides across networks on its own, a virus needs you — or someone — to run the host first. The defense is simple in shape: update your software so it has fewer weak spots, be suspicious of unexpected attachments, and keep security software running to catch what slips through.

## Eli's Analogy

Think of a virus like a note slipped inside a library book. The note only gets read when someone borrows the book and opens it — and whoever reads it is nudged to copy the note into a few more books and put them back on the shelves. The book looks perfectly normal; the note travels because people keep opening books.

The comparison understates how automatic and invisible a real virus is. A virus does not need a willing reader and does not announce itself with a note: it copies itself automatically, often invisibly, and can alter or damage files rather than just pass along a message. And a library can be cleaned by checking every book once, while an infected computer may need its operating system reinstalled — and some infections spread to other machines before anyone notices.

## Worked Example

Leo's laptop starts acting strangely: it takes minutes to open a document, a message appears saying a file was modified, and his photo folder now contains files he never created. He remembers opening an email attachment that looked like a club event poster. He disconnects from the internet, runs the antivirus software that came with the machine, and lets it remove the virus and repair the altered files. Then he installs the operating-system and browser updates that had been waiting for months, and changes his passwords from his phone. The pattern: an unexpected attachment was the door, and acting early limited the damage.

## Common Mistakes

- **Calling every infection "a virus."** A virus is one branch of the malware family, not the whole tree. Worms move on their own, trojans wear disguises, and ransomware holds files for ransom. The umbrella term is malware, which has its own topic.
- **Assuming "I never download anything" makes you safe.** An infected attachment or a malicious website can deliver a virus with a single click. The virus needs its host to run, and opening the attachment is exactly what runs it.
- **Thinking security software makes updates unnecessary.** Antivirus tools catch known threats, but updates fix the underlying weaknesses they exploit. CISA recommends installing updates promptly and enabling automatic updates.
- **Believing a fast, clean-looking computer is proof of no infection.** Signs are clues, not proof. Some malware is designed to hide, and NIST warns that incidents still occur even with good defenses in place.

## Compare / Contrast

- **Virus vs. Worm** — Both self-copy, but a virus depends on a host file and usually a user action, while a worm propagates by itself across networks.
- **Virus vs. Trojan horse** — A virus replicates by attaching to files; a trojan disguises itself as desirable software and typically grants access rather than replicating.
- **Virus vs. Malware** — Malware is the whole family; a virus is one member, so "virus" and "malware" are not synonyms.

## Key Takeaway

A virus is malware that rides inside a file or program and spreads when the host runs — a worm, by contrast, spreads on its own. Keeping software updated, avoiding unexpected attachments, and using security software reduce the risk, but viruses remain an old threat that is not dead.

## Practice Question Bank

**Q1.** Which description best matches what a virus is, according to Microsoft's definition?

- A. Malware that attaches itself to a file or program and spreads to other files when the host runs
- B. Malware that spreads on its own across a network without any file to ride in
- C. Software that locks a user's files and demands payment to restore them
- D. Software that displays unwanted advertisements and changes browser settings

**Key: A.** Microsoft defines a virus as malware that replicates by inserting a copy of itself into files or programs, so it spreads only when the host runs. Option B describes a worm, C describes ransomware, and D describes adware.

**Q2.** A worm differs from a virus in which key way?

- A. Worms disguise themselves as legitimate software, while viruses do not
- B. Worms only spread through email attachments, while viruses use any file type
- C. A worm spreads on its own across networks, while a virus needs a host and usually a user action
- D. Worms are harmless unless a user opens them

**Key: C.** Microsoft distinguishes the two: a worm replicates without direct intervention and spreads across networks, whereas a virus needs the host program to run — typically a user action such as opening a file. The other options misstate both families.

**Q3.** Priya opens an attachment her classmate sent, which runs a program that quietly copies itself into several other files on her computer. Which statement best describes what happened?

- A. A worm spread across the school network on its own
- B. Ransomware encrypted her files and demanded payment
- C. Adware changed her browser to show unwanted ads
- D. A virus spread because the host program was run when she opened the attachment

**Key: D.** Opening the attachment ran the host, which matches how a virus spreads: it attaches to files and replicates when the host runs. A worm would not need her to open anything, and the scenario does not describe encryption or advertising behavior.

**Q4.** A computer suddenly runs slowly, shows pop-ups it never asked for, and a program the owner never installed appears in the app list. Which action best matches the sources' guidance?

- A. Ignore it, since real infections always announce themselves clearly
- B. Treat the signs as a reason to run security software and check for infection
- C. Reinstall the operating system immediately without any scanning
- D. Open more attachments to test whether the machine is infected

**Key: B.** Microsoft lists slower performance, unexpected pop-ups, and programs the user did not start as common signs of infection, and NIST describes security software as the most commonly used malware-control measure. Signs are clues, so the right response is to scan and check, not ignore or guess.

**Q5.** Marta keeps software updated, runs antivirus, and avoids unexpected attachments. What do NIST and CISA say about the risk that remains for her?

- A. Her risk is zero, because updated software blocks every known virus
- B. Her habits made no difference, so the risk is unchanged
- C. Her defenses cut risk substantially, but incidents can still happen, so awareness stays necessary
- D. Her risk disappears only if she also pays for a commercial security product

**Key: C.** NIST warns that incidents will still occur — previously unknown threats and human error get through — and that technical controls cannot prevent all incidents; CISA's update guidance exists because out-of-date software enables malicious activity. The other options misstate what the sources say.

## Sources

- NIST Special Publication 800-83 Rev. 1: Guide to Malware Incident Prevention and Handling for Desktops and Laptops (https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-83r1.pdf)
- NIST Computer Security Resource Center Glossary — malware (https://csrc.nist.gov/glossary/term/malware)
- Microsoft Learn: Explain malware (https://learn.microsoft.com/en-us/training/modules/explore-malware-threat-protection/2-explain-malware)
- CISA: Update Software (Secure Our World) (https://www.cisa.gov/secure-our-world/update-software)

## Related Topics

- cybersecurity:foundations:malware
- cybersecurity:foundations:trojans
- cybersecurity:foundations:ransomware
- cybersecurity:foundations:phishing
- cybersecurity:foundations:patch-management

## Editorial Metadata

- Topic ID: cybersecurity:foundations:viruses
- Subject: cybersecurity, Unit: foundations
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified (researched 2026-08-21)
- Rights status: reference-only government and vendor documentation; the NIST definition is briefly paraphrased with attribution, no source prose adapted; all examples are original
- Defensive framing: viruses are described at the conceptual level only — definition, infection routes, signs, and defenses. No malware code, no infection how-to, no attack techniques are taught. Malware, trojans, and ransomware are sibling topics and are referenced by name only.
