# Backups

## In 30 Seconds

A backup is a separate, recoverable copy of your data, kept so you can restore it after the original is lost. Files disappear through hardware failure, theft, accidental deletion, and ransomware, and a good backup is the reliable way back. The widely used 3-2-1 rule keeps three copies of important data, on two different types of media, with one stored offsite. Because ransomware can reach any connected copy, at least one backup should be offline or immutable. And an untested backup is only a hope, not a guarantee.

## Why This Matters

Almost everything you do in college and work now lives as data: papers, code, research, photos, and financial records. Losing it can mean redoing a semester's work or losing something irreplaceable. Backups turn a disaster into an inconvenience, and they are the single most reliable defense against ransomware, where criminals encrypt your files and demand payment. If you can restore from a clean, offline backup, you do not have to pay and do not lose the data. Understanding backup strategy also prepares you for professional responsibility, since organizations are increasingly judged on whether they can recover systems and data after an incident.

## Learning Objectives

- Define a backup and distinguish it from a working copy or a synced file.
- Explain why backups are the primary means of recovering from ransomware and other data loss.
- Apply the 3-2-1 rule to design a simple, resilient backup plan.
- Distinguish full, incremental, and differential backups by what each one captures.
- Explain why testing restores and keeping an offline or offsite copy matter.

## The College Version

### Why data needs backing up

A backup is a separate copy of your data, stored so that if the original is damaged, lost, or held hostage, you can restore a working version. The threats are ordinary and common. Storage hardware fails; drives wear out and stop responding without warning. Laptops and phones are lost or stolen. People delete or overwrite the wrong file. And increasingly, ransomware encrypts a victim's files and demands payment to unlock them. CISA describes regular backups as one of the best ways to protect an organization from ransomware losses, precisely because a clean backup lets you rebuild without paying a criminal or gambling on their honesty. The common thread is that a backup is not about preventing the loss; it is about making the loss recoverable. That reframing matters: you cannot stop every drive from failing or every phishing email from succeeding, but you can decide in advance that no single failure will be able to take your data permanently. A backup only earns that role if it is genuinely separate from the original, so that whatever destroys the first copy cannot reach the second.

### The 3-2-1 rule

The most widely taught backup strategy is the 3-2-1 rule, which CISA presents as a trusted guideline. It has three parts: keep three copies of important data (the working copy plus two backups), store them on two different types of media (for example, an internal drive and a cloud service, or a local disk and an external drive), and keep one copy offsite, away from where you live or work. Each part addresses a different failure. Multiple copies survive a single deletion or corruption. Two media types mean one shared weakness (a failing drive model, a corrupted file system) does not take every copy at once. The offsite copy survives events that hit a whole location, such as fire, flood, or theft. Modern guidance adds a security-driven refinement: because ransomware and malware spread across whatever they can reach, at least one copy should be offline or immutable. An offline copy is disconnected from the network and the infected machine; an immutable copy uses storage that cannot be altered or deleted for a set retention period. CISA's #StopRansomware Guide is blunt about why this matters: many ransomware variants deliberately search for and delete or encrypt any backups they can reach, so a backup that is always connected can be destroyed along with the original.

### Full, incremental, and differential backups

Backups also differ in how much they copy each time they run, which trades storage space and backup time against how easy recovery is. NIST's Contingency Planning Guide (SP 800-34) describes three common methods. A full backup captures all of the selected files every time. It makes restoring simple, because everything is in one place, but it is slow and consumes the most storage. An incremental backup captures only the files created or changed since the last backup of any type. It is fast and space-efficient, but recovering may require the last full backup plus every incremental made since, because each one holds only its own slice of changes. A differential backup stores the files created or modified since the last full backup, so it keeps growing until the next full backup is taken. A differential takes more space than an incremental but restores from fewer pieces: you need only the last full backup and the most recent differential. In practice, backup systems combine these, for example a weekly full backup with daily incrementals, to keep everyday backups quick while still allowing a complete restore.

### Testing restores, and why sync is not a backup

A backup you have never restored is an assumption, not a safety net. Media can be corrupt, the backup software may have silently skipped files, or the copy may be incomplete. CISA advises testing your backup procedure so you can confirm you can rapidly restore data both fully and partially. Treat the restore, not the backup, as the thing that must work. A related trap is confusing file synchronization with a backup. A sync service keeps folders identical across devices and the cloud, which is convenient, but that sameness is the problem: if you delete a file or ransomware encrypts it, the change is copied to the synced locations, so every copy can be lost together. Version history in a sync service helps, because it may let you roll back to an earlier version, but it is a feature that can be limited, disabled, or overwhelmed, not a substitute for a separate, ideally offline copy. The safe mental model is that sync is for access and collaboration, while a backup is a deliberately separate copy whose whole purpose is to survive whatever happens to the working data.

## Key Vocabulary

- **Backup** — A separate copy of data kept so the data can be restored if the original is lost, damaged, or made inaccessible.
- **Restore** — The process of copying data back from a backup to return a system or file to a working state.
- **3-2-1 rule** — A backup guideline: keep three copies of important data, on two different types of media, with one copy stored offsite.
- **Full backup** — A backup that captures all of the selected files each time it runs.
- **Incremental backup** — A backup that captures only files created or changed since the last backup of any type.
- **Differential backup** — A backup that captures files created or modified since the last full backup.
- **Offline backup** — A backup copy disconnected from the network and computer, so malware on the live system cannot reach it.
- **Immutable backup** — A backup stored so it cannot be changed or deleted for a set retention period, resisting tampering by ransomware.
- **File synchronization** — Keeping folders identical across devices and the cloud, so a change in one location is copied to the others.
- **Ransomware** — Malware that encrypts a victim's files and demands payment to restore access.

## Eli-10

A backup is a spare copy of your stuff kept somewhere safe, so if the first copy breaks, gets stolen, gets deleted, or gets locked up by a computer virus, you still have your files. The trick is that the spare has to be truly separate. If your only extra copy sits on the same computer, or is always connected to it, then the same accident or attack that hits your files can hit the copy too. A smart plan keeps a few copies in different places, and keeps at least one copy unplugged so nothing bad can travel to it. And you should test that you can actually get your files back, because a copy you have never opened might be broken without you knowing.

## Eli's Analogy

Think of backing up like keeping spare keys to your house. You keep one on your keychain, leave one with a trusted neighbor, and lock one in a safe-deposit box at the bank. If you lose your keychain, drop your keys down a drain, or your house is burgled, you are not locked out, because the spares are in different places and one of them is somewhere a thief can't reach.

**Where the analogy breaks down:** copying data is nearly free and instant, while cutting house keys costs money and effort, so you can keep far more data copies than key copies. It also misses the ransomware twist: house keys don't change, but if you "sync" your files, deleting or locking one copy can instantly ruin the others, the way it would if all your spare keys magically re-cut themselves to match a broken one.

## Worked Example

Maya writes her senior thesis on her laptop. To follow the 3-2-1 rule she keeps three copies: the working file on the laptop, an automatic copy in a cloud service, and a weekly copy on an external drive she keeps at her parents' house (offsite). That is three copies, on two media types (internal disk and cloud, plus the external drive), with one offsite. One night ransomware encrypts her laptop, and because the cloud folder syncs automatically, the encrypted files sync up too. But the external drive was unplugged and offsite, so it is untouched. She wipes the laptop, restores from the external drive, and loses only the few days of edits since her last weekly copy, instead of the whole thesis.

## Common Mistakes

- **Treating cloud file sync as a backup.** Sync copies every change, including deletions and ransomware encryption, to all locations. A backup is a separate copy that is not automatically overwritten by what happens to the original.
- **Keeping the only backup permanently connected to the computer.** Malware and ransomware attack whatever they can reach. Keep at least one copy offline or immutable so an infection cannot destroy it too.
- **Assuming a backup works because it was created.** Test restoring from it. Media can be corrupt or files silently skipped; only a successful restore proves the backup is usable.
- **Storing every copy in one place.** The 3-2-1 rule keeps one copy offsite so a fire, flood, or theft at one location cannot destroy all copies at once.
- **Thinking backups exist mainly for hardware failure.** Accidental deletion and ransomware are just as common. A good backup is the reliable way to recover from an attack without paying a ransom.

## Compare / Contrast

- **Incremental backup vs. Differential backup** — An incremental copies files changed since the last backup of any type, so a restore may need the full backup plus every incremental since. A differential copies files changed since the last full backup, so a restore needs only the full backup and the latest differential.
- **File synchronization vs. Backup** — Sync keeps copies identical for access and collaboration, so a harmful change spreads to all of them. A backup is a deliberately separate copy meant to survive whatever happens to the working data.
- **Offsite copy vs. Offline copy** — Offsite means stored in a different physical location, protecting against local disasters like fire or theft. Offline means disconnected from the network and computer, protecting against ransomware that spreads to reachable copies.

## Key Takeaway

A backup is a separate, recoverable copy of your data. Follow the 3-2-1 rule, keep at least one copy offline or immutable so ransomware cannot reach it, and test that you can actually restore, because an untested backup is only a hope.

## Practice Question Bank

1. **What does the 3-2-1 backup rule recommend?**
   - A. Back up three times a day using two computers and one server
   - B. Keep three copies of important data, on two different types of media, with one copy stored offsite
   - C. Keep two copies of data and delete the original after one month
   - D. Store one full backup and two incremental backups on the same drive
   - **Answer: B.** CISA states the 3-2-1 rule as three copies of important data, on two different types of storage media, with one copy stored offsite. The other options describe schedules or single-location setups that are not the rule.

2. **Why should at least one backup copy be kept offline or immutable?**
   - A. Offline backups always restore faster than online ones
   - B. It reduces the total amount of storage the backups require
   - C. Offline storage media never wears out or fails
   - D. Ransomware can find and encrypt or delete backups that are reachable from an infected system
   - **Answer: D.** CISA's #StopRansomware Guide notes that many ransomware variants search for and delete or encrypt any accessible backups, so an offline or immutable copy survives the attack.

3. **A full backup captures which files?**
   - A. All of the selected files, regardless of when they last changed
   - B. Only files created or changed since the last backup of any type
   - C. Only files changed since the last full backup
   - D. Only system files, never user documents
   - **Answer: A.** NIST SP 800-34 defines a full backup as one that captures all files in the selected disk or folder. Option B describes an incremental; option C describes a differential.

4. **Which statement describes a differential backup?**
   - A. It captures files changed since the most recent backup of any kind
   - B. It copies every selected file each time it runs
   - C. It stores files created or modified since the last full backup
   - D. It can always be restored without needing any full backup
   - **Answer: C.** Per NIST SP 800-34, a differential backup stores files created or modified since the last full backup, and restoring it requires the last full backup plus the latest differential.

5. **A student keeps their only extra copy of a paper in a cloud folder that syncs automatically with their laptop. Why is this not a reliable backup?**
   - A. If the file is deleted or encrypted by ransomware, the change syncs to the cloud copy, so both can be lost together
   - B. Cloud folders cannot store documents larger than a few kilobytes
   - C. Synchronizing a file permanently encrypts it so it can never be restored
   - D. Cloud storage is always slower to access than a local backup
   - **Answer: A.** Synchronization keeps copies identical, so a deletion or ransomware encryption on the laptop propagates to the synced cloud copy. A real backup is a separate copy not automatically overwritten by changes to the original.

## Sources

- CISA, "Back Up Business Data." https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data — the 3-2-1 rule, reasons to back up, and testing-restore guidance.
- CISA, FBI, NSA, and MS-ISAC, "#StopRansomware Guide" (September 2023). https://www.cisa.gov/stopransomware/ransomware-guide — offline/encrypted/immutable backups and ransomware deleting or encrypting accessible backups.
- NIST SP 800-34 Rev. 1, "Contingency Planning Guide for Federal Information Systems" (May 2010). https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf — full, incremental, and differential backup definitions and offsite storage practice.

## Related Topics

- computer-literacy:foundations:cloud-storage
- computer-literacy:foundations:malware
- computer-literacy:foundations:files-and-folders
- computer-literacy:foundations:privacy

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Research status:** source-verified
- **Rights status:** reference-only government sources; no source prose adapted
- **Researched at:** 2026-08-19
- **Sources:** cisa-back-up-business-data, cisa-stopransomware-guide, nist-sp-800-34r1
