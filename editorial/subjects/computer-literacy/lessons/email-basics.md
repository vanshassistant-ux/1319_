# Email Basics

## In 30 Seconds

An email address is two parts joined by an @ sign: a local-part (the mailbox) and a domain (the mail system), written local-part@domain. When you send a message, your program hands it off using SMTP, which relays it between mail servers to the recipient's system; the recipient then retrieves it with IMAP (which keeps mail on the server and syncs across devices) or the older POP (which downloads to one device). A message has a header with To, Cc, Bcc, and Subject fields plus a body and optional attachments. Knowing these parts lets you send clearly and organize what arrives.

## Why This Matters

Email is the default channel for college and professional life: registration notices, assignment feedback, application follow-ups, and workplace records all move through it. Small choices carry real weight. Using Bcc instead of Cc protects a mailing list's privacy; hitting Reply All by reflex can broadcast a private note to hundreds. A vague subject line gets ignored; a clear one gets answered. Understanding that mail is stored on a server (with IMAP) rather than trapped on one computer explains why the same inbox appears on your phone and laptop, and how folders, filters, and search keep years of correspondence usable. These habits also set up the security instincts you build in the Phishing topic.

## Learning Objectives

- Identify the two parts of an email address and explain what each part names.
- Explain how outgoing mail is transferred with SMTP and retrieved with IMAP or POP, and distinguish IMAP from POP.
- Distinguish the To, Cc, and Bcc fields and choose Bcc when recipient privacy matters.
- Apply Reply, Reply All, and Forward correctly and avoid the reply-all pitfall.
- Organize a mailbox using folders or labels, filters, search, and the archive-versus-delete choice.

## The College Version

### The address and how mail travels

Every email address has the same shape: a local-part, an @ sign, and a domain, written local-part@domain (for example, jordan.lee@university.edu). The local-part identifies a particular mailbox and is interpreted by the receiving system; the domain names the mail system responsible for that mailbox, the same kind of domain used elsewhere on the internet. Because the domain routes the message, the part after the @ has to be exactly right. When you press Send, your mail program does not hand the message directly to the reader. It submits the message using SMTP, the Simple Mail Transfer Protocol, which is the standard for transferring mail and relaying it from server to server until it reaches the system that holds the recipient's mailbox. There the message waits until the recipient's program fetches it. Retrieval uses a different protocol. IMAP, the Internet Message Access Protocol, lets your program read and manage messages that stay stored on the server, which is why the same inbox, sent folder, and read/unread status appear on your laptop and phone at once. POP, the Post Office Protocol, is an older approach that downloads messages to a single device and, in its usual setting, deletes them from the server afterward. Most people today use IMAP or a provider's equivalent so their mail syncs everywhere; POP still appears when someone wants a local-only copy on one machine. How the underlying network moves these packets is covered in Internet Basics; here the point is simply that sending and retrieving are separate jobs done by separate protocols.

### The parts of a message

A message has two sections: a header of labeled fields and a body of content. The From field names the sender. The To field lists the primary recipients, the people you are actually addressing. Cc, short for carbon copy, lists secondary recipients who should see the message for awareness; addresses in both To and Cc are visible to everyone who receives the message. Bcc, blind carbon copy, is the important exception: Bcc recipients get the message, but their addresses are hidden from the other recipients, because the mail system removes the Bcc information from the copies it delivers. That makes Bcc the right tool when you email a group of people who do not know one another and should not see each other's addresses, such as a newsletter or an announcement to many students. The Subject field is a short line naming the topic; it is the first thing a reader sees and often decides whether the message gets opened. The body carries your actual writing. Attachments are separate files, such as a PDF or an image, sent along with the message. A message can have any combination of these, but a useful one almost always has a clear, specific Subject and a body that a reader can act on without a second email.

### Reply, Reply All, Forward, and organizing what arrives

Three actions send an existing message onward. Reply answers only the sender. Reply All answers the sender and everyone who was on the To and Cc lines. Forward sends a copy to someone who was not previously included. The common mistake is the reply-all pitfall: choosing Reply All when you meant Reply, so a note intended for one person lands in dozens of inboxes. The habit that prevents it is checking the recipient list before sending, and defaulting to plain Reply unless the whole group genuinely needs your answer. As mail accumulates, organization keeps it usable. Folders (or labels, which let one message sit under several categories) group related messages; filters, sometimes called rules, sort incoming mail automatically by sender or subject; and search finds a specific message across everything you have kept. Two choices often get confused: archiving removes a message from the inbox but keeps it, so you can find it later by search, while deleting sends it toward permanent removal. Archive when you might need it again; delete only what you are sure is disposable. You reach all of this either through webmail, which runs in a browser with nothing to install, or through an email client, a dedicated app on your computer or phone. Webmail is convenient on any machine; a client can manage several accounts at once and often works with messages already downloaded. Finally, be alert that not every message is legitimate: recognizing phishing and scam email is a security skill covered in its own Phishing topic, which this lesson hands off to.

## Key Vocabulary

- **Email address** — An identifier of the form local-part@domain that names a specific mailbox within a mail system.
- **Local-part** — The portion of an email address before the @ sign, which identifies the individual mailbox and is interpreted by the receiving mail system.
- **Domain** — The portion of an email address after the @ sign, naming the mail system responsible for delivering to that mailbox.
- **SMTP (Simple Mail Transfer Protocol)** — The standard protocol used to submit outgoing mail and relay it between mail servers toward the recipient.
- **IMAP (Internet Message Access Protocol)** — A protocol that lets a program access and manage messages kept on the mail server, so a mailbox stays synchronized across devices.
- **POP (Post Office Protocol)** — An older retrieval protocol that downloads messages to one device and, by default, removes them from the server.
- **Cc (carbon copy)** — A header field listing secondary recipients whose addresses are visible to everyone who receives the message.
- **Bcc (blind carbon copy)** — A header field for recipients whose addresses are hidden from all other recipients of the message.
- **Attachment** — A separate file, such as a document or image, sent together with an email message.
- **Archive** — Removing a message from the inbox while keeping it stored and searchable, as opposed to deleting it.

## Eli-10

An email address is like a name plus a place: the part before the @ says which mailbox, and the part after the @ says which post office system holds it. When you send a message, your app doesn't walk it over to your friend. It drops it into the mail system, which passes it along until it reaches the right server, where it waits. Your friend's app then goes and picks it up. To is who the message is for. Cc is people who should see it, and everyone can read those names. Bcc is a secret copy: those people get the message, but nobody can see they were included. Reply talks to just the sender; Reply All talks to the whole group, so use it only when everyone truly needs to hear you.

## Eli's Analogy

Think of email like the postal system. Your address is your name (local-part) at a specific post office (domain). Dropping a letter in the box is SMTP carrying it between post offices. Checking a P.O. box that keeps your letters in place so you can revisit them is IMAP; taking every letter home and emptying the box is POP. A Bcc recipient is like sending identical letters to several people where none of the envelopes list the others.

**Where the analogy breaks down:** The postal picture misses that email is copied, not moved: sending to five people creates five copies at once, and nothing physical leaves your outbox. It also hides speed and scale, and it does not capture that To/Cc addresses travel visibly inside the message where every recipient can read the whole list.

## Worked Example

A student club needs to email 40 members about a schedule change, and the members do not all know one another. Consider two ways to address it. Putting all 40 addresses in the To or Cc field would show every member's email address to the other 39, and a single careless Reply All could then spam the whole roster. Instead, the organizer puts the club's own address in To and all 40 members in Bcc. Now each member receives the announcement, but the To/Cc lines they see do not reveal anyone else's address, because the mail system strips the Bcc information from delivered copies. The Subject reads "Meeting moved to Thursday 6 PM, Room 214" rather than "Update," so members grasp the change before opening it. The body states the change in the first line and ends with one action: reply if you cannot attend. This uses Bcc for privacy, a specific Subject for clarity, and a To field that avoids exposing the list.

## Common Mistakes

- **Hitting Reply All when only the sender needed the answer, broadcasting a private note to everyone on the thread.** Default to plain Reply; check the recipient list and choose Reply All only when the whole group genuinely needs your response.
- **Putting a large group of unrelated people in Cc, exposing everyone's address to everyone else.** Use Bcc for group mail to people who don't know one another so their addresses stay private.
- **Leaving the Subject blank or vague ('hi', 'question'), so the message is ignored or lost.** Write a specific Subject that states the topic and, when useful, the action needed.
- **Assuming deleting and archiving are the same, then losing a message you needed.** Archive to keep a message out of the inbox but still searchable; delete only mail you are sure you won't need.
- **Treating every message as trustworthy and clicking links or attachments without thought.** Be skeptical of unexpected requests; phishing recognition is a real skill, covered in the dedicated Phishing topic.

## Compare / Contrast

- **IMAP vs. POP:** IMAP keeps messages on the server and syncs a mailbox across many devices; POP typically downloads to one device and deletes the server copy.
- **Cc vs. Bcc:** Cc addresses are visible to all recipients; Bcc addresses are hidden from the other recipients.
- **Reply vs. Reply All:** Reply answers only the original sender; Reply All answers the sender plus everyone on the To and Cc lines.
- **Archive vs. Delete:** Archiving keeps a message stored and searchable outside the inbox; deleting moves it toward permanent removal.
- **Webmail vs. Email client:** Webmail runs in a browser with nothing to install; an email client is a dedicated app that can manage several accounts on a device.

## Key Takeaway

An email address is local-part@domain; SMTP carries mail out between servers while IMAP or POP retrieves it, and the To/Cc/Bcc fields, a clear Subject, and the right choice among Reply, Reply All, and Forward control who sees what and how well you're understood.

## Practice Question Bank

1. **In the email address registrar@state.edu, what does the part after the @ sign (state.edu) identify?**
   - A. The mail system (domain) responsible for delivering to that mailbox ✓
   - B. The individual mailbox within a mail system
   - C. The protocol used to send the message
   - D. The subject of the message

   *An email address is local-part@domain. The part after the @, here state.edu, is the domain naming the mail system that handles the mailbox; the part before it (registrar) is the local-part identifying the specific mailbox. Protocols and subjects are separate concepts.*

2. **Which protocol is used to submit and relay outgoing mail between mail servers?**
   - A. IMAP
   - B. POP
   - C. SMTP ✓
   - D. HTTP

   *SMTP, the Simple Mail Transfer Protocol, is the standard for transferring and relaying mail between servers when you send. IMAP and POP are retrieval protocols the recipient uses to read stored mail; HTTP is the web's protocol, not the mail-transfer standard.*

3. **You want to email a schedule notice to 50 people who do not know one another, without revealing anyone's address to the rest. Which field should hold their addresses?**
   - A. To
   - B. Bcc ✓
   - C. Cc
   - D. Subject

   *Bcc (blind carbon copy) delivers the message to each recipient while hiding their addresses from the others, because the mail system removes the Bcc information from delivered copies. To and Cc addresses are visible to all recipients, and the Subject holds the topic line, not recipients.*

4. **A message arrives addressed to you and eight coworkers on the To line. You need to ask the original sender one private clarifying question. What is the best action?**
   - A. Reply All, so the group sees your question
   - B. Forward the message to the sender
   - C. Reply All and add the sender to Bcc
   - D. Reply, which goes only to the original sender ✓

   *Reply sends your message only to the original sender, which fits a private question. Reply All would broadcast it to all eight coworkers unnecessarily (the reply-all pitfall). Forward is for sending to someone not already involved, and the Bcc option still triggers Reply All to the whole group.*

5. **Why does the same inbox, with the same read and unread messages, typically appear on both your phone and your laptop?**
   - A. Each device keeps its own separate copy that never changes
   - B. The messages were sent using SMTP twice
   - C. The mail is stored on the server and accessed with IMAP, which syncs across devices ✓
   - D. POP downloaded the mail and deleted it from every device

   *IMAP keeps messages on the mail server and lets each device access and manage that same stored mailbox, so status stays synchronized everywhere. Separate unchanging copies describe the opposite of syncing; SMTP is for sending, not retrieval; and POP's download-and-delete model works against multi-device access rather than enabling it.*

## Sources

- RFC 5321: Simple Mail Transfer Protocol — IETF — https://www.rfc-editor.org/rfc/rfc5321.html
- RFC 5322: Internet Message Format — IETF — https://www.rfc-editor.org/rfc/rfc5322.html
- RFC 9051: Internet Message Access Protocol (IMAP) - Version 4rev2 — IETF — https://www.rfc-editor.org/rfc/rfc9051.html
- RFC 1939: Post Office Protocol - Version 3 — IETF — https://www.rfc-editor.org/rfc/rfc1939.html
- Recognize and Report Phishing — CISA — https://www.cisa.gov/secure-our-world/recognize-and-report-phishing

## Related Topics

- computer-literacy:foundations:phishing
- computer-literacy:foundations:collaboration-platforms
- computer-literacy:foundations:internet-basics
- computer-literacy:foundations:cloud-storage

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Research status:** source-verified
- **Rights status:** reference-only sources (IETF RFCs, CISA); no source prose adapted
- **Researched at:** 2026-08-19
- **Transformation:** Facts synthesized from IETF standards (RFC 5321/5322/9051/1939) and CISA phishing guidance into original instructional prose; no substantial source text reproduced.
