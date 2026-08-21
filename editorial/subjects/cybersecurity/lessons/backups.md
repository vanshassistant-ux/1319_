# Backups

## In 30 Seconds

A backup is a copy of your data kept separately from the original so it can be restored after loss, damage, or encryption. Data disappears through accidents, failing hardware, and ransomware, and the classic defense is the 3-2-1 rule: three copies, two different media types, one offsite. A good backup is automated, versioned, kept offline or otherwise out of reach, and tested, because an untested backup is a hope, not a plan.

## Why This Matters

Every file you care about will eventually be lost unless you act first. Phones get dropped, hard drives fail, folders get overwritten by mistake, and ransomware crews deliberately delete backups to make recovery harder. Backups are the one defense that still works after everything else has failed: they change a disaster into an inconvenience, a few hours of restoring instead of a lifetime of missing photos or a business that loses its only records. Knowing the 3-2-1 rule, testing restores, and understanding why a synced folder is not a backup are the skills that decide whether a bad day ends in recovery or in permanent loss.

## Learning Objectives

- Define a backup as a separate, restorable copy of data and distinguish it from syncing.
- Name the main causes of data loss (accidents, hardware failure, ransomware) and explain why each justifies keeping copies.
- Explain the 3-2-1 rule, three copies on two media types with one offsite, and the reasoning behind each number.
- Describe what makes a backup trustworthy: automation, versioning, offline or isolated storage, and tested restores.
- Apply the backup-versus-sync distinction to a scenario and choose the right practice.
- Evaluate the honest framing that backups are the last line of defense, turning disasters into inconveniences.

## The College Version

### What a backup is

A backup is a copy of data kept separately from the original, made so the data can be restored if the original is lost, damaged, or corrupted. The U.S. Computer Emergency Readiness Team (US-CERT) guidance starts simply: every computer user, from home users to professional security officers, should back up the critical data on their desktops, laptops, servers, and mobile devices to protect it from loss or corruption. The same guidance warns that saving just one backup file may not be enough, so good practice uses several copies, not one. Restoration is the whole point: a backup earns its name only when the data in it can be brought back to where it is needed. That is what separates a backup from ordinary storage and from syncing, covered below.

### Why backups matter

Data loss is not rare; it is normal, with three common causes. The first is accident: a folder overwritten, a file deleted by mistake, a device wiped during a cleanup. The second is hardware failure: drives fail, laptops are dropped, and devices are lost or stolen. The third is ransomware, malware that encrypts files and demands payment; it has its own lesson, and here it matters because a working backup removes the attacker's leverage, letting you restore instead of paying. Backblaze's explainer of the classic rule names the same threats: human error, hard drive crashes, theft, natural disasters, and ransomware. NIST's recovery guide calls offline and offsite copies particularly critical given the credible threat of ransomware, and CISA warns that attackers increasingly delete backups during attacks. These causes arrive without warning, which is why the copy must exist beforehand.

### The 3-2-1 rule

The classic guideline for how many copies to keep comes from the US-CERT publication Data Backup Options, and it is called the 3-2-1 rule. Three: keep three copies of any important file, one primary and two backups. Two: keep the files on two different media types, so a hazard that destroys one kind of storage does not destroy the others; a hard drive and an optical disc fail in different ways. One: store one copy offsite, outside your home or business facility, so a fire, flood, or theft at the primary site does not take every copy with it. The rule is simple on purpose: it removes single points of failure, so any one copy can be lost without losing the data. Backblaze notes the rule has held up and remains the de facto standard for data redundancy, though some organizations now extend it with an offline or immutable copy.

### What makes a backup good

Four qualities separate a backup that saves you from one that fails you. Tested restores come first: CISA's guidance says to maintain backups and test them regularly, and Microsoft's ransomware guidance demands the same for full restore procedures. A copy never restored is unproven, which is why the honest line is that an untested backup is a hope, not a plan. Versioning comes second: keep more than one point-in-time copy, because a backup that overwrites itself every night cannot bring back a file corrupted last week; US-CERT's warning that one backup file may not be enough points the same way. Offline or isolated copies come third: store at least one copy on a device that cannot be reached from the network, because ransomware reaches whatever is connected. Automation comes fourth: US-CERT describes rolling backups that automatically and periodically update the backup files, because a backup you must remember to run will be forgotten.

### Backup versus sync

Syncing is not backing up. Synchronization mirrors a file across two or more devices: a change made to one copy is applied to all the others within moments. Proton's explainer puts the difference plainly: a backup is a copy of a file you store so you can retrieve it if you need it, while sync involves having a file in two or more locations where changes made in one copy are reflected across all others. It sounds protective, but that is exactly the weakness: a deletion is a change like any other, so a file you delete on one device is deleted from every synced copy, and a file corrupted on one device is corrupted everywhere. A backup, by contrast, keeps a separate point-in-time copy that a later mistake cannot touch. Sync is right for collaboration across devices; it is wrong when the goal is preserving data against loss, and Proton concludes that for backup purposes, sync is almost completely useless.

### The practice and the honest framing

The practice follows from the qualities above. Automate backups so they run on a schedule without being remembered. Keep more than one generation so an old good copy survives a recent bad one. Keep at least one copy offline or otherwise out of reach of malware. And test a real restore regularly, because only a restore proves the copy works. The honest framing: backups are the last line of defense. They do not prevent the drive from failing or the mistake from happening, but they ensure that when something does go wrong, the outcome is an inconvenience rather than a disaster. NIST's recovery guidance is built on that premise: recovery planning gets an organization back to operating after an event. A day of restoring beats a lifetime of explaining what was lost, which is why the decision to back up is made once, in advance, and the discipline of testing is repeated forever after.

## Key Vocabulary

- **backup** — A copy of data kept separately from the original, made so the data can be restored if the original is lost, damaged, or encrypted.
- **restore** — The act of copying data from a backup back to where it is needed, returning files to a usable state after loss or corruption.
- **3-2-1 rule** — The classic backup guideline: keep three copies of important data (one primary and two backups), on two different media types, with one copy stored offsite.
- **versioning** — Keeping multiple point-in-time copies of data so an earlier, good state can be recovered after a later mistake, corruption, or infection.
- **offline backup** — A backup stored on a device that is disconnected from the network, so malware and attackers cannot reach and destroy it.
- **sync** — A process that mirrors a file across devices so changes made to one copy are applied to all the others, including deletions.
- **storage media** — The physical or logical devices that hold data, such as internal drives, external drives, and optical discs; the 3-2-1 rule calls for two different kinds.

## Eli-10

A backup is a second copy of your important stuff, kept somewhere separate, so that if anything happens to the original you still have your stuff. Computers break, people make mistakes, and bad programs can lock your files and ask for money to unlock them. The classic rule is 3-2-1: keep three copies, on two different kinds of storage, with one copy somewhere away from your home. The copy only helps if you can actually use it, so practice restoring from it once in a while, and keep at least one copy disconnected or somewhere a bad program cannot reach it. And remember: syncing is not backing up, because if you delete a file, syncing deletes it everywhere.

## Eli's Analogy

Think of your important papers. You keep the working copy in your desk drawer. You photocopy the folder and store the copy in a fireproof box in the closet, which is a second kind of storage. And you mail one photocopy to your parents' house in another city. If your desk drawer is ruined in a flood, the closet copy survives; if the whole house is affected, the copy at your parents' house is still safe. That is the 3-2-1 rule in paper form.

The analogy breaks down because paper copies do not change on their own. Real data changes constantly, so backups go stale: the copy is only as good as its last update, and a photocopy from last year will not help with a document you edited this morning. That is why real backups run automatically, keep several versions, and are tested, and why a synced folder, which faithfully copies your latest changes including your mistakes, is not a substitute.

## Worked Example

Mara runs a small bakery and keeps her recipes, supplier orders, and customer records on her laptop. Every night her computer automatically copies the day's files to an external drive, which she unplugs and stores in a fireproof drawer, and a cloud service keeps a second backup offsite. One Tuesday morning the laptop's hard drive fails in the middle of the week's orders. Mara borrows a machine, restores from the external drive, and is taking orders again that afternoon. The backup she never thought about was the difference between a lost week and an inconvenience. Had she only synced her files to a second device, the failure would have mirrored itself there too, and the invoice she deleted by mistake the week before would already be gone from every copy.

## Common Mistakes

- **Treating a synced folder as a backup.** Sync propagates changes, including deletions and corruption, to every copy, so it cannot return you to an earlier version. A backup keeps a separate point-in-time copy that later mistakes cannot touch.
- **Keeping the only backup plugged in and always connected.** Ransomware reaches whatever is connected. CISA guidance says to store backups on a separate device that cannot be accessed from the network, and NIST calls offline or offsite copies particularly critical.
- **Never testing a restore and assuming the backup works.** CISA says to test backups regularly and Microsoft's guidance requires testing full restore procedures. Media degrades and software changes, so only a real restore proves the copy works; an untested backup is a hope, not a plan.
- **Keeping every copy in the same place, such as two drives on the same desk.** One fire, flood, or theft destroys copies in one location together. The 3-2-1 rule exists to prevent that: different media, and one copy offsite.
- **Backing up once and never updating the copy.** Backups go stale, so the copy is only as good as its last update. US-CERT describes rolling backups that automatically and periodically update the backup files, so the work is not left to memory.

## Compare / Contrast

- **A backup vs. A synced folder** — A backup is a separate point-in-time copy you can restore after a mistake or failure; a synced folder mirrors your current state everywhere, so a deletion or corruption propagates to every copy instead of being preserved.
- **A single spare copy vs. A full 3-2-1 setup** — One extra copy protects against a single failure but dies with the original in a fire, theft, or ransomware event that reaches connected drives; 3-2-1 spreads risk across two media types and an offsite location.
- **A tested backup vs. An untested backup** — A tested backup has proven through a real restore that the data can be brought back; an untested backup is only a hope, because drives degrade and software changes without anyone noticing until it is too late.

## Key Takeaway

Backups are separate, current, tested copies of your data: follow the 3-2-1 rule, keep at least one copy offline, and remember that syncing is not backing up, because backups are what turn disasters into inconveniences.

## Practice Question Bank

**Q1.** Which statement best matches the working definition of a backup?

- A. A copy of data kept separately from the original so it can be restored if the original is lost, damaged, or encrypted.
- B. A service that mirrors your files across several devices so every copy stays identical.
- C. A second drive kept next to the first that holds the same files, for faster access.
- D. A folder where deleted files wait before being permanently removed.

**Key: A.** A backup is a separate copy made for restoration, as US-CERT and Proton describe: the data can be brought back if the original is lost, damaged, or corrupted. Mirroring files across devices describes sync, a drive beside the original is not kept separately, and a recycle bin is not a copy at all.

**Q2.** A student keeps her thesis in a synced folder so she can see it on her laptop and her tablet. She deletes a chapter on the tablet, and the laptop copy changes too. Why did the deletion spread?

- A. Because synced folders are backups, so every copy is preserved forever.
- B. Because the tablet's storage failed and the restore process rewrote the laptop.
- C. Because syncing applies changes made to one copy to all the other copies, and deletion is a change.
- D. Because the 3-2-1 rule requires deletions to be mirrored across devices.

**Key: C.** Sync mirrors changes across copies, and a deletion is a change like any other, so it propagates to every synced location. That is why Proton concludes sync is useless for backup: it cannot preserve a version you had before the deletion. Synced folders are not backups, no storage failed here, and the 3-2-1 rule says nothing about mirroring deletions.

**Q3.** In the 3-2-1 rule, what does the number 2 refer to?

- A. Two copies of every important file.
- B. Storing the files on two different media types.
- C. Two offsite locations for the backups.
- D. Running two test restores each year.

**Key: B.** US-CERT's Data Backup Options states the rule as three copies (one primary and two backups), two different media types, and one copy stored offsite. The 2 is about media diversity, so a hazard that destroys one kind of storage does not destroy the copies; the other options misread the numbers.

**Q4.** A small office backs up its server every night to an external drive that stays plugged into the server. One morning ransomware encrypts the server and the drive. Which change best matches official guidance?

- A. Plug the drive into a second server so there are two copies of it.
- B. Back up once a month instead, so the drive is touched less often.
- C. Keep the drive connected but delete files older than a week to save space.
- D. Store the backup on a separate device that cannot be accessed from the network, and disconnect it when not in use.

**Key: D.** CISA guidance says to back up on a separate device that cannot be accessed from the network, and NIST calls offline or offsite copies particularly critical against ransomware, because ransomware reaches whatever is connected. Another server, fewer backups, and deleting older files all leave the copy reachable or weaker.

**Q5.** Which habit best reflects the guidance that backups must be tested to be trusted?

- A. Every few months, restore a handful of important files from the backup to a spare machine and confirm they open correctly.
- B. Check that the backup software reports success each night, without ever opening a restored file.
- C. Buy a larger backup drive every year to keep up with growing data.
- D. Update the backup software whenever a new version is released.

**Key: A.** CISA says to test backups regularly, and Microsoft's guidance demands full restore procedures be tested, because only an actual restore proves a copy works. A success message is not a test, and bigger drives or newer software do not verify that data can be brought back.

## Sources

- NIST Special Publication 800-184: Guide for Cybersecurity Event Recovery (https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-184.pdf)
- US-CERT (CISA): Data Backup Options, Ruggiero and Heckathorn (https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf)
- CISA: Stop Ransomware (https://www.cisa.gov/stopransomware)
- CISA: Ransomware FAQs (https://www.cisa.gov/stopransomware/ransomware-faqs)
- CISA: Protecting Against Ransomware (https://www.cisa.gov/news-events/news/protecting-against-ransomware)
- Microsoft Learn: Protect your organization against ransomware (https://learn.microsoft.com/en-us/security/ransomware/protect-against-ransomware)
- Backblaze: Data Backup Strategies: Why the 3-2-1 Backup Strategy is the Best (https://www.backblaze.com/blog/the-3-2-1-backup-strategy/)
- Proton: What is the difference between backup and sync? (https://proton.me/blog/backup-vs-sync)

## Related Topics

- cybersecurity:foundations:ransomware
- cybersecurity:foundations:cia-triad
- cybersecurity:foundations:incident-response
- cybersecurity:foundations:malware

## Editorial Metadata

- Topic: Backups (cybersecurity:foundations:backups), phase 2
- Editorial status: READY_TO_PUBLISH
- Researched at: 2026-08-21
- Provenance: EliExplains original synthesis; reference-only secondary sources plus public-domain U.S. government guidance; no source prose adapted.
