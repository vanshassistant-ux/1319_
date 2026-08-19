# Cloud Storage

## In 30 Seconds

Cloud storage keeps your files on a provider's remote servers—computers in data centers you reach over the internet—instead of only on your own device. A synced folder mirrors those files across your phone, laptop, and the web, so a change made in one place appears everywhere. You can share files or links and set whether others may view or edit. It is convenient and gives you an off-device copy, but it needs internet, trusts the provider with your data, and syncing is not the same as a backup.

## Why This Matters

Most coursework now lives in cloud storage: you draft an essay on a lab computer, finish it on your laptop, and submit from your phone, all from the same synced folder. Knowing how syncing and sharing actually work helps you collaborate without overwriting a teammate, grant the right level of access, and avoid the common trap of assuming a synced copy protects you. It does not: a mistaken deletion or a ransomware infection spreads through the sync to every device. Understanding cloud storage—and its limits—lets you use it for convenience while keeping a real backup for safety.

## Learning Objectives

- Define cloud storage and relate it to NIST's model of cloud computing.
- Explain how file syncing mirrors changes across your devices and the provider's servers.
- Distinguish sharing permission levels, such as view-only versus edit access.
- Evaluate the benefits and considerations of cloud storage compared with local storage.
- Explain why syncing is not the same as a backup.

## The College Version

### What cloud storage is

Cloud storage means keeping your files on a provider's remote servers—physical computers housed in data centers—and reaching them over the internet, rather than only on the local drive inside your own device. NIST defines cloud computing as a model for on-demand network access to a shared pool of configurable computing resources, such as networks, servers, storage, and applications, that can be provisioned with minimal management effort. Storage is one of those pooled resources. For an individual, consumer cloud storage is usually delivered as software as a service: you sign in through an app or a browser, and the provider runs the servers, capacity, and maintenance. NIST lists five essential characteristics of this model, including on-demand self-service (you add space or files yourself, without contacting anyone), broad network access (you reach it from many kinds of devices), and measured service (capacity is metered, which is why plans are sold by the gigabyte). Local storage, by contrast, keeps files only on hardware you physically hold—an internal disk, a USB drive—so they are available without a network but travel only as far as that device does.

### Syncing across your devices

Many cloud services offer a synced folder: a folder on your device whose contents are kept mirrored with a copy on the provider's servers and, in turn, with the same folder on your other signed-in devices. When you add, edit, rename, or delete a file in that folder, the service copies the change up to the server and back down to everywhere else, usually within seconds of a connection. The practical payoff is that you stop emailing files to yourself—the document you saved on a desktop is already current on your laptop and phone. The subtlety is that sync is bidirectional and mirrors the current state; it is not versioned safekeeping. If you delete a file on one device, that deletion travels to the others. Most providers move a deleted file to an online recycle bin or trash where it can be restored for a limited window, but the mirrored copies are gone from normal view. (Files and Folders covers files, paths, and the Trash in general.)

### Sharing and permissions

Beyond your own devices, cloud storage lets you share a file or folder with other people, either by inviting specific accounts or by generating a link. When you share, you choose a permission level. The core distinction is view-only access, where the other person can open and usually download the file but not change it, versus edit access, where they can modify it. Some services add finer roles—for example a commenter who can annotate but not edit, or an owner who can change other people's permissions. Choosing the right level matters: a view-only link suits handing in read-only work or distributing a syllabus, while edit access is for genuine collaborators. Sending an edit link when you meant view-only is a common and avoidable slip. (Real-time co-editing itself is covered by Collaboration Platforms.)

### Benefits and considerations

The benefits are concrete. You can reach your files from anywhere with an internet connection; you get far more capacity than a phone or laptop holds; sharing is a link instead of a large attachment; and, because a copy lives off your device, losing or breaking the device does not lose the files. The considerations are just as concrete. Cloud storage needs an internet connection to reach the current copy. You are trusting the provider with your data, which raises privacy and security questions—who can see it, how it is protected, and what happens if an account is breached. NIST's small-business guidance advises doing due diligence when choosing a cloud provider and encrypting sensitive data before storing it in the cloud. There is usually a cost once you exceed a free tier, billed by capacity. And access depends on the account: lose the password or the account, and you can lose the files. (Privacy is treated in depth by the Privacy topic.)

### Sync is not a backup

This is the point most worth remembering. NIST defines a backup as a copy of files and programs made to facilitate recovery—a separate, retained copy you can restore from after something goes wrong. A synced folder is not that. Because sync mirrors the current state, the very events a backup should protect you from—an accidental deletion, a file corrupted by a bad save, or ransomware that encrypts your files—propagate through the sync to every device holding that folder. The provider's recycle bin buys you a limited recovery window, but it is not a substitute for a real backup. NIST's small-business guidance treats restoring from a backup as a recovery activity precisely because a backup is kept apart from the working copy, often offsite and disconnected. The honest rule: use cloud sync for convenience and sharing, and keep a genuine backup—following the strategy the Backups topic covers—for safety.

## Key Vocabulary

- **Cloud storage** — A service that keeps your files on a provider's internet-connected servers so you can reach them from your devices, rather than storing them only on local hardware.
- **Cloud computing (NIST)** — A model of on-demand network access to a shared, managed pool of computing resources such as storage, servers, and applications.
- **Data center** — A facility of networked computers and storage where a provider runs the servers that hold cloud data.
- **Syncing (file sync)** — Keeping the contents of a folder mirrored across a device, a provider's servers, and other signed-in devices, so a change in one place is reflected in the others.
- **Local storage** — Data kept on hardware you physically control, such as an internal disk or USB drive, available without a network.
- **Permission level** — The degree of access granted to someone you share with, such as view-only versus the ability to edit.
- **Software as a service (SaaS)** — A delivery model in which you use a provider-run application over the network instead of installing and maintaining it yourself.
- **Backup** — A separate, retained copy of files made so they can be restored after loss, deletion, or damage.
- **Recycle bin (trash)** — A holding area where deleted files remain, restorable for a limited time, before permanent removal.

## Eli-10

Your files usually live inside one device, like books that sit on one shelf in your room. Cloud storage keeps a copy of those files on big, always-on computers that a company runs, and lets your phone, tablet, and laptop all look at the same copy over the internet. A synced folder is the clever part: whatever you do to a file in that folder—add it, change it, throw it away—quietly happens on all your devices too, because they are kept matching. You can also let a friend see your file, and decide whether they can only look at it or actually change it. The catch is that "kept matching" cuts both ways. If you delete something by mistake, the deletion matches everywhere as well. That is why a synced folder is handy but is not a safety net.

## Eli's Analogy

A synced folder is like a group chat for one file: everyone signed in sees the same latest message, and if you delete a message, it disappears for the whole group—not just for you.

**Where it breaks down:** A synced file has one live copy that every device shows, while a group chat keeps a running history of every message. And a real backup is more like a photo you printed and put in a drawer: deleting the chat does nothing to the print, whereas deleting a synced file removes it from the mirror on every device at once.

## Worked Example

Maya keeps her term paper in a synced cloud folder. She edits it on the library desktop; by the time she opens her laptop at home, the latest version is already there—sync copied the change through the provider's servers. She shares a view-only link with her professor for feedback and gives her lab partner edit access to the methods section. The next week she accidentally deletes the whole folder on her phone; the deletion syncs, and the files vanish from her laptop too. She recovers them from the provider's online recycle bin within its retention window—but had she waited too long, or had ransomware encrypted the files instead, sync alone would not have saved her. The separate backup on her external drive would have.

## Common Mistakes

- **Assuming a synced cloud folder is a backup.** Sync mirrors the current state, so deletions and ransomware propagate to every device. A backup is a separate, retained copy you can restore from; keep one in addition to sync.
- **Sharing an edit link when you only meant to let someone read the file.** Match the permission level to the need—view-only for read access, edit only for real collaborators—and check the link's setting before sending.
- **Believing your cloud files are always available.** Reaching the current copy needs an internet connection, and access depends on your account; without either, you may not get to your files.
- **Treating cloud storage as automatically private.** You are trusting the provider with your data. Understand who can access it and consider encrypting sensitive files, as NIST advises for cloud storage.
- **Thinking an emptied recycle bin or a lost account is recoverable.** Once a provider's recycle bin is emptied or its retention window passes, the files are gone; losing the account password can also lock you out permanently.

## Compare / Contrast

- **Cloud storage vs. Local storage** — Cloud keeps files on a provider's internet-reachable servers (access anywhere, needs a network, trusts the provider); local keeps them on hardware you hold (works offline, but travels only with that device).
- **Syncing vs. Backup** — Sync mirrors one current state across devices for convenience; a backup is a separate retained copy kept for recovery. Sync propagates deletions; a backup survives them.
- **View-only access vs. Edit access** — View-only lets someone open and usually download a file but not change it; edit access lets them modify it and sometimes reshare it.

## Key Takeaway

Cloud storage puts your files on a provider's servers and syncs them across your devices for convenient, shareable, off-device access—but because sync mirrors the current state, it is not a backup, and it depends on the internet and on trusting the provider.

## Practice Question Bank

1. **What does cloud storage do with your files?**
   - A. Stores them only on the internal drive of your current device.
   - B. Keeps them on a provider's internet-connected servers so you can reach them from your devices.
   - C. Compresses them so they take up no space on any device.
   - D. Converts them into a format only the provider can open.

   **Answer: B.** Cloud storage keeps files on a provider's remote servers reached over the internet, an application of NIST's cloud computing model. It does not restrict files to one local drive (A), does not compress them to zero (C), and does not change them into a provider-only format (D).

2. **In a synced cloud folder, what happens when you delete a file on one of your devices?**
   - A. Nothing changes on your other devices.
   - B. The file is duplicated on your other devices as a safeguard.
   - C. The file is permanently and immediately erased with no way to recover it.
   - D. The deletion is mirrored to your other devices, though the file usually sits in an online recycle bin for a limited time.

   **Answer: D.** Sync mirrors the current state, so the deletion propagates to your other devices; most providers keep the deleted file in a recycle bin or trash, restorable for a limited window. It does not leave the others untouched (A), duplicate the file (B), or necessarily erase it beyond recovery at once (C).

3. **You want your professor to read your paper but not change it. Which sharing setting fits?**
   - A. View-only access, letting them open and usually download the file without editing it.
   - B. Edit access, letting them modify the file.
   - C. Owner access, letting them manage everyone's permissions.
   - D. No sharing is possible without granting edit access.

   **Answer: A.** View-only access lets someone open and usually download a file without changing it—right for read-only feedback. Edit (B) and owner (C) allow changes, and sharing does not require granting edit access (D).

4. **Why is a synced cloud folder not a substitute for a backup?**
   - A. Because cloud servers are always slower than local drives.
   - B. Because synced files cannot be shared with anyone.
   - C. Because sync mirrors the current state, so an accidental deletion or ransomware encryption propagates to every synced copy, while a backup is a separate retained copy kept for recovery.
   - D. Because backups can only be stored on paper.

   **Answer: C.** A backup is a separate copy made to facilitate recovery; sync keeps one mirrored current state, so the very events you would want to recover from spread through the sync. Server speed (A) is irrelevant, synced files can be shared (B), and backups are digital, not paper-only (D).

5. **Which of these is a consideration or limitation of relying on cloud storage, rather than a benefit?**
   - A. You can reach your files from many different devices.
   - B. You get more capacity than a phone or laptop holds.
   - C. Sharing is a link instead of a large email attachment.
   - D. Reaching the current copy needs an internet connection and trusts the provider with your data.

   **Answer: D.** Options A, B, and C are benefits of cloud storage. Needing an internet connection and trusting the provider with your data (D) are considerations—ones NIST's guidance addresses by urging due diligence in choosing a provider and encrypting sensitive data before storing it in the cloud.

## Sources

- **NIST SP 800-145, The NIST Definition of Cloud Computing** — National Institute of Standards and Technology. <https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf> (public domain). Definition of cloud computing, the five essential characteristics, and the SaaS service model.
- **NIST CSRC Glossary — "Backup"** — NIST Computer Security Resource Center (definition sourced to NIST SP 800-34 Rev. 1). <https://csrc.nist.gov/glossary/term/backup> (public domain). A backup is a copy made to facilitate recovery.
- **NISTIR 7621 Rev. 1, Small Business Information Security: The Fundamentals** — NIST. <https://nvlpubs.nist.gov/nistpubs/ir/2016/NIST.IR.7621r1.pdf> (public domain). Backups enable recovery; store them offsite; do due diligence choosing a cloud provider; encrypt data before storing it in the cloud.
- **Share files from Google Drive** — Google Drive Help. <https://support.google.com/drive/answer/2494822> (reference-only; named as an example). View, comment, edit, and owner permission roles.
- **Delete files or folders in OneDrive** — Microsoft Support. <https://support.microsoft.com/en-us/office/delete-files-or-folders-in-onedrive-21fe345a-e488-4fa7-932b-f053c1bebe8a> (reference-only; named as an example). Deleted files go to the recycle bin and can be restored.

## Related Topics

- computer-literacy:foundations:files-and-folders
- computer-literacy:foundations:backups
- computer-literacy:foundations:collaboration-platforms
- computer-literacy:foundations:privacy

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Rights:** Three NIST sources are public-domain U.S. government works; two vendor help pages used reference-only as named examples, with no source prose reproduced.
- **Transformation:** Machine-generated boilerplate discarded; content synthesized from NIST primary sources and vendor documentation cited as examples. All prose original.
- **Notice:** Original EliExplains lesson for owner review; educational material, not individualized security, legal, or privacy advice.
