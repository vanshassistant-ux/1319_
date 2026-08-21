# Trojans

## In 30 Seconds

A trojan — short for trojan horse — is malware that hides inside something that looks legitimate, like a free program, installer, or attachment. NIST defines it as a program that appears to have a useful function but carries a hidden, potentially malicious one. Trojans do not spread on their own: the user installs the disguise. Once inside, the hidden payload might open a backdoor, steal data, or bring in other malware. The defenses are practical: download from official sources, check what you install, and keep software updated.

## Why This Matters

Every download is an act of trust, and trojans are the malware family that exploits exactly that trust. Understanding how they work turns a vague worry into a concrete habit: you stop treating a working installer as proof of safety and start asking where it came from. That matters academically because trojans illustrate a core security idea — attackers often target the person, not the machine — and practically because the same defenses protect school accounts, bank logins, and personal files. Recognizing the signs matters too: an unexpected program or changed settings is a clue worth acting on early, before a quiet backdoor becomes a stolen password or a locked hard drive.

## Learning Objectives

- Define a trojan using the NIST working definition: a program that appears to have a useful function but also has a hidden, potentially malicious one.
- Explain the historical origin of the name and why disguise, not self-spreading, is the defining feature.
- Describe at a conceptual level how trojans arrive — bundled with downloads, fake installers, and attachments — and why they depend on the user's actions.
- Distinguish the main trojan payloads: backdoor access, data theft, and delivery of other malware such as ransomware.
- Apply the core defenses — official sources, checking what you install, and keeping software updated — and recognize the general signs of infection.

## The College Version

### What a trojan is

NIST's glossary defines a trojan horse as a computer program that appears to have a useful function but also has a hidden and potentially malicious function that evades security mechanisms. A second NIST definition makes the same point more simply: a useful or seemingly useful program that contains hidden code of a malicious nature, which executes when the program is invoked. Microsoft's security team puts it in everyday terms: trojans masquerade as legitimate software to trick people into downloading them. The name comes from the wooden horse of Greek myth, offered as a gift to the city of Troy, with soldiers hidden inside who slipped out at night and opened the gates. The parallel is exact: the gift is real, and so is the harm packed inside it. NIST's malware guide adds a detail worth keeping — a trojan is self-contained and nonreplicating. It does not copy itself the way a virus or worm does; the disguise, not the ability to spread, is what defines it.

### How a trojan gets in

Because a trojan is a disguise rather than a self-spreading program, it depends on the user. Kaspersky's explainer is blunt about this: trojans can only reach a device with the help of the user. The common routes are all ordinary actions. Bundled downloads: a free utility or game that arrives with extra software attached, where the extra is the trojan. Fake installers: a download that presents itself as a video player, PDF tool, or update — often from a look-alike site or a search ad — and installs the trojan alongside or instead of the promised program. Attachments: an email attachment, sometimes from a known sender whose account was compromised, that hides the trojan inside a document or archive. NIST's malware guide groups these under user awareness: do not open suspicious emails or attachments, even from known senders, and avoid sites likely to contain malicious content. The pattern in every route is the same — the trojan arrives wrapped in something the user wanted or expected.

### What a trojan does once inside

The hidden function — the payload — varies from one trojan to the next. Microsoft Learn describes the classic case: trojans provide an attacker with remote access to the infected computer, a backdoor the attacker can use at will. Microsoft Security 101 lists other common payloads: downloading and installing additional malware, recording keystrokes and visited websites, sending passwords and browsing history to an attacker, and giving the attacker control of the device. NIST's malware guide notes that trojans often deliver other attacker tools to hosts. Kaspersky adds family names: banking trojans that steal credentials, backdoor trojans that quietly await commands, and dropper trojans that bring other malware — including ransomware — with them. That last point explains why trojans matter beyond themselves: a single disguised installer can be the first step in a chain that ends with locked files or a hijacked account. Ransomware, viruses, and the wider malware picture each have their own topic; here the point is that the payload is the variable part and the disguise is the constant.

### Why trojans are dangerous

The danger of a trojan is not technical sophistication; it is the way it bypasses trust. Ordinary caution assumes a user will treat the unknown with suspicion. A trojan arranges for the user to let it in: the program opens, works, and looks exactly like what was promised, so the user never questions it. NIST's glossary captures this when it says the hidden function evades security mechanisms, sometimes by exploiting the legitimate authorizations of the person who invokes the program — the user's own permissions become the doorway. Consider a fake video-player installer: a student searches for a way to play a film format, finds a "player" on a forum, installs it, and the videos play fine. The student even recommends it to friends. All the while the trojan is logging keystrokes. The harm came from the student's trust, not from a firewall that failed. That is why trojans deserve a topic of their own: they turn the most human quality of a system — trust — into an entry point.

### Signs of an infection

Trojan infections show up in general signs rather than one unmistakable symptom. Microsoft's guidance lists the common ones: noticeably slower performance, unexpected pop-ups, and programs appearing that the user did not install, plus changed settings such as a new browser home page or redirected searches. The honest caveat applies here as with all malware: some trojans are built to stay quiet, so signs are clues, not proof. An unexpected program in the app list, a browser that behaves differently, or account activity the user does not recognize are reasons to run a scan and review recent installs — not reasons to panic.

### Defense

The defenses are ordinary habits that match the way trojans arrive. Download from official sources: the vendor's own site or a recognized app store, not a third-party download page or an ad. Kaspersky's checklist says it directly — obtain programs from secure sources and avoid downloading from unsafe ones. Check what you install: read the prompts, and decline or remove bundled extras. Keep software updated: CISA advises installing updates as soon as they are available and turning on automatic updates, because updates patch the weak spots malware relies on; NIST's malware guide treats patching and user awareness as core prevention measures. None of this is exotic. Each habit removes one of the disguises a trojan wears.

## Key Vocabulary

- **trojan (trojan horse)** — Malware that disguises itself as a useful or legitimate program while carrying a hidden, potentially malicious function; it does not spread on its own and acts when the user runs the disguised program.
- **backdoor** — A hidden way into a computer that bypasses normal sign-in controls; trojans often install one so an attacker can return for remote access.
- **payload** — The harmful action hidden inside malware that runs once the malware is in place — for trojans, anything from stealing data to installing further malware.
- **malware** — Software designed to harm, exploit, or take control of a device; the family that trojans belong to.
- **attachment** — A file delivered with an email message; trojans sometimes hide inside attachments that look like documents or archives.
- **official source** — The place a program's maker actually distributes it, such as the vendor's website or a recognized app store.
- **software update** — A fix released by a program's maker that closes weaknesses attackers exploit; installing updates promptly is a core defense.

## Eli-10

A trojan is malware in a costume. It looks like something you actually want — a game, a video player, a document — but inside it is doing something harmful. It cannot jump to your computer by itself, the way a worm can; it waits for you to install it or open it. That is the whole trick: you let it in because you thought it was something else. Once inside, it might spy on what you type, open a secret door for an attacker, or quietly bring more malware along. The fix is to be picky about what you install and where it comes from.

## Eli's Analogy

Imagine someone rings your doorbell wearing a courier uniform and carrying a box. You do not know the courier, but the uniform looks official, so you open the door and take the box. The box is real and the uniform is a costume, and while you were signing for it, the courier was studying your locks and windows. A trojan is that courier: the program is real, the trust was earned by appearance, and the entry was your own front door.

The comparison understates the scale and the silence. A suspicious courier can be refused at the door, but a trojan hides inside software you genuinely wanted, and nothing looks wrong while it runs. One courier visits one house; a trojan can reach thousands of machines at once and stay hidden for months, collecting data the whole time.

## Worked Example

Priya's laptop cannot open a video format her study group uses, so she searches for a free player. A forum result links to "QuickPlay Player," with a clean-looking site and a download button. She installs it, and the videos play perfectly — she even tells her group to use it. Two weeks later, her bank emails about a sign-in from another country, and her browser home page has changed to a search site she never chose. Her security software scans and finds a trojan inside the QuickPlay folder that had been recording keystrokes and sending them out. The player worked, which is exactly what made the disguise effective; the defenses that would have helped — checking the download's source, reading the install prompts, and keeping the browser updated — were all free.

## Common Mistakes

- **Calling a trojan "a virus."** A trojan does not replicate. NIST's malware guide describes trojan horses as self-contained and nonreplicating: they spread only by being installed, not by copying themselves into other programs. Viruses replicate by inserting code into other files; that is a different family.
- **Thinking trojans get in by exploiting technical weaknesses.** Trojans get in through the user's own action — installing or running the disguised program. NIST's glossary notes the hidden function can even exploit the legitimate permissions of the person who runs it. The weakness being exploited is trust, not a missing patch.
- **Assuming a program that works is safe.** Working normally is part of the disguise. A fake video player plays videos while its hidden payload steals data in the background; Microsoft notes trojans masquerade as legitimate software and carry out harmful actions after being downloaded. Functioning software and malicious software are not opposites.
- **Treating any download site as good enough.** Third-party download pages and search ads are common ways trojans arrive bundled with other software. Kaspersky's advice is to obtain programs only from secure sources — the vendor's site or a recognized app store — and to check what an installer adds before confirming.

## Compare / Contrast

- **Trojan vs. Virus** — Both are malware, but a virus replicates by inserting copies of itself into other programs or files, while a trojan is self-contained and does not replicate — it depends entirely on the user installing the disguise.
- **Trojan vs. Legitimate software** — Both look desirable and both run normally, but a trojan carries a hidden malicious function that executes when the program is invoked; looking legitimate is precisely the disguise.
- **Trojan vs. Ransomware** — A trojan is a delivery method — a disguise that gets harmful code installed; ransomware is a kind of harmful program that locks or encrypts data for payment, and it is one of the payloads a trojan can deliver.

## Key Takeaway

A trojan is malware in disguise: it looks useful, gets installed because the user trusts it, and then carries out a hidden harmful function. Downloading from official sources, checking what you install, and keeping software updated are the practical defenses.

## Practice Question Bank

**Q1.** Which feature defines a trojan (trojan horse)?

- A. It copies itself to other computers across a network without user action.
- B. It appears to have a useful function while hiding a potentially malicious one.
- C. It encrypts a user's files and demands payment to restore them.
- D. It displays unwanted advertisements and changes browser settings.

**Key: B.** NIST's glossary defines a trojan horse as a program that appears to have a useful function but also has a hidden and potentially malicious function. Spreading across a network on its own describes worms, encrypting files for payment describes ransomware, and unwanted ads describe adware.

**Q2.** Where does the name "trojan horse" come from?

- A. A type of warhorse used by ancient Greek cavalry.
- B. The first computer ever infected by malware, built in Troy.
- C. The wooden horse of Greek mythology, offered as a gift, whose hidden soldiers opened Troy's gates from inside.
- D. An early antivirus company that designed the first detection tool.

**Key: C.** Kaspersky recounts the myth: the Greeks ended the siege of Troy with a wooden horse presented as a gift, and soldiers hidden inside opened the city at night. The name survives in cybersecurity because the trick is the same — something accepted as a gift turns out to carry hidden harm.

**Q3.** A student installs a free video player from an ad on a streaming-help forum. The player works, but weeks later a new background program appears and a bank account shows a foreign sign-in. What does this scenario best match?

- A. A worm that entered through an open network service.
- B. A ransomware infection that encrypted the student's files.
- C. A phishing message that tricked the student into revealing a password.
- D. A trojan disguised as the player, carrying a hidden payload that stole data.

**Key: D.** The disguise (a working video player) plus the hidden effects (an unexpected program and stolen credentials) match Microsoft's description of trojans that masquerade as legitimate software, then record keystrokes and send passwords to an attacker. A worm spreads on its own, ransomware locks files, and phishing is a message-based trick rather than an installed program.

**Q4.** Which statement best explains why trojans depend on the user's actions rather than spreading on their own?

- A. A trojan is a disguise, so it gets in only when the user installs or runs the disguised program — NIST describes it as self-contained and nonreplicating.
- B. A trojan exploits an unpatched network service to infect a machine with no user involvement.
- C. A trojan spreads by sending copies of itself to everyone in the user's contacts.
- D. A trojan arrives through hardware defects that no user action can prevent.

**Key: A.** NIST's malware guide calls trojan horses self-contained and nonreplicating, and Kaspersky notes they reach a device only with the user's help — the disguised program is installed or run as if legitimate. Exploiting network services without user action describes worms, and self-copying to contacts is worm-like behavior, not a trojan's.

**Q5.** Which combination of habits best defends against trojans?

- A. Downloading software from whichever site offers the newest version, since popularity signals safety.
- B. Relying on browser pop-up warnings to flag dangerous installers.
- C. Downloading only from official sources, checking what an installer adds, and keeping software updated.
- D. Keeping the computer offline except for essential tasks, since trojans only arrive online.

**Key: C.** Kaspersky advises obtaining programs from secure sources, thinking before opening attachments, and keeping systems updated, while CISA recommends installing updates as soon as they are available. Newest versions on random sites, browser pop-ups, and going offline are not reliable defenses: trojans can ride in any download, and updates exist to close the weaknesses malware relies on.

## Sources

- NIST Special Publication 800-83 Rev. 1: Guide to Malware Incident Prevention and Handling for Desktops and Laptops (https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-83r1.pdf)
- Microsoft Learn: Explain malware (Explore malware and threat protection module) (https://learn.microsoft.com/en-us/training/modules/explore-malware-threat-protection/2-explain-malware)
- Microsoft Security 101: What Is Malware? Definition and Types (https://www.microsoft.com/en-us/security/business/security-101/what-is-malware)
- Update Software (Secure Our World) (https://www.cisa.gov/secure-our-world/update-software)
- NIST Computer Security Resource Center Glossary — trojan horse (https://csrc.nist.gov/glossary/term/trojan_horse)
- What is a Trojan Horse Virus? Types and How to Remove it (Kaspersky Resource Center) (https://www.kaspersky.com/resource-center/threats/trojans)

## Related Topics

- cybersecurity:foundations:malware
- cybersecurity:foundations:viruses
- cybersecurity:foundations:ransomware
- cybersecurity:foundations:phishing
- cybersecurity:foundations:social-engineering

## Editorial Metadata

- Topic ID: cybersecurity:foundations:trojans
- Subject: cybersecurity, Unit: foundations
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified (researched 2026-08-21)
- Rights status: reference-only sources (government and vendor documentation); the NIST working definition is quoted briefly with attribution; no source prose adapted; all examples are original
- Defensive framing: trojans are described at the conceptual level only — what they are, how they arrive, the range of payloads, signs, and defenses. No attack how-tos, no exploit detail, no malware source. Malware, viruses, ransomware, and phishing are sibling topics and are referenced only.
