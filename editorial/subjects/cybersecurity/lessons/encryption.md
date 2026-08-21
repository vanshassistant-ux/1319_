# Encryption

## In 30 Seconds

Encryption scrambles readable data — plaintext — into an unreadable form, ciphertext, using a key. Only someone with the right key can turn it back. It is reversible, which is what separates it from hashing, a one-way process. Encryption has two main families — symmetric, with one shared key, and asymmetric, with a public/private key pair — and it protects data both at rest, in storage, and in transit, moving across networks. If stolen data is encrypted, it stays unreadable: the last line of defense.

## Why This Matters

Every time you send a message, buy something online, or save a file to a phone, encryption is probably working in the background. Understanding it changes how you read security news: a breach of encrypted data is a different event from a breach of plaintext, and "we encrypted it" is a claim worth evaluating rather than trusting. At school or work, you will handle records — grades, payroll, customer lists — and encryption is the control that keeps them unreadable if they are ever taken. Knowing what a key is, and what encryption cannot do, is the difference between assuming your data is safe and knowing whether it is.

## Learning Objectives

- Define encryption as the transformation of readable data into an unreadable form using a key, and identify decryption as its reversal.
- Distinguish encryption from hashing: encryption is reversible with a key, while hashing is one-way.
- Explain how a key works — the same data with different keys produces different ciphertext, and only the key holder can undo the scramble.
- Distinguish symmetric encryption, which uses one shared key, from asymmetric encryption, which uses a public/private key pair.
- Apply the at-rest and in-transit distinction to real data flows, such as files on a laptop versus messages crossing a network.
- Evaluate what encryption can and cannot do, including why protecting keys matters.

## The College Version

### Plaintext, ciphertext, and the key

Encryption is the process of changing readable data into an unreadable form using a cryptographic algorithm, and NIST's glossary defines it as the transformation of data to produce ciphertext. The readable original is called plaintext; the scrambled result is called ciphertext. The transformation is controlled by a key — a value that determines how the algorithm operates, so that someone who knows the key can reproduce the operation and reverse it. Decryption is the process of changing ciphertext back into plaintext using the algorithm and the key. Because the key drives the transformation, the same data encrypted with different keys produces different ciphertext. A toy illustration: with the key "move each letter three places earlier in the alphabet," the word CAT becomes ZXQ; with the key "move each letter two places later," the same word becomes ECV. Real encryption is vastly stronger than any letter-shifting game, but the lesson is the same — the key, not the message, determines the scrambled result.

### Encryption versus hashing: reversible versus one-way

The critical distinction in this lesson: encryption is reversible, and hashing is not. NIST describes a cryptographic hash function as a one-way function that is extremely difficult to invert — it is not practical to reverse the process from the hash value back to the input. Encryption is the opposite by design: decryption restores the original data for anyone holding the key. People sometimes say a password was "encrypted" when in fact the system stored a hash of it; strictly, that is not encryption, because the hash cannot be turned back into the password. The two tools serve different goals: encryption protects confidentiality, keeping data unreadable; hashing supports integrity, letting a system detect that data changed. Encryption is the lock; hashing is the fingerprint. Hashing has its own lesson — here the point is simply that reversible with a key versus one-way is the line between them.

### The two families: symmetric and asymmetric

Encryption comes in two families. Symmetric-key algorithms — sometimes called secret-key algorithms — use a single key both to apply the protection and to remove it: the same key encrypts and decrypts, and it must be kept secret. Think of two colleagues sharing one password for a shared document vault. Asymmetric-key algorithms, often called public-key algorithms, use a pair of mathematically related keys: a public key, which may be shared freely without weakening the protection, and a private key, which must stay secret. In encryption use, the public key scrambles the data and the private key unscrambles it — anyone can send you a locked message, but only you can open it. NIST notes a practical trade-off: symmetric algorithms are generally faster, while asymmetric systems need fewer keys overall when many parties must communicate. Real systems often combine both; the details of how keys are certified and exchanged belong to the digital-certificates and HTTPS/TLS lessons.

### At rest and in transit

NIST's guidance on using cryptographic standards addresses protecting digitized information in two situations: during transmission and while in storage. Data at rest is data sitting somewhere — a laptop's hard drive, a phone, a database server, a backup tape. Data in transit is data moving — a message crossing the internet, a file being uploaded, a video call stream. Microsoft's documentation on encryption at rest describes it as protecting stored data: a symmetric key encrypts the data as it is written to storage, and the same key decrypts it as it is prepared for use in memory. The same file can be protected in both contexts at different moments: it is at rest in your laptop's storage, and it is in transit when you attach it to an email. A common gap is protecting one context and forgetting the other — encrypting a database while leaving the connection to it unencrypted, or vice versa.

### What encryption can and cannot do

The honest framing matters as much as the mechanics. Encryption protects data, not systems. It conceals the data's original meaning — NIST's definition says the transformation prevents the data from being known or used — which is why encrypted data that is stolen stays unreadable: the last line of defense. But encryption does not stop the theft. A machine holding encrypted files can still be infected; a person can still be tricked into sending data over a bad channel; ransomware can still encrypt your files and hold them for ransom. And the entire arrangement hangs on the key: whoever holds the key can decrypt. Keys therefore must be protected — kept secret, stored carefully, never shared casually — because a strong algorithm with a leaked key protects nothing. Encryption also does not repair broken access rules: if the right people are not the only ones holding keys, the lock is meaningless. Used honestly, encryption turns a stolen file from readable into unreadable — a real difference, and one worth understanding.

## Key Vocabulary

- **encryption** — The process of changing readable data (plaintext) into an unreadable form (ciphertext) using a cryptographic algorithm and key, so that only the key holder can restore it.
- **decryption** — The process of changing ciphertext back into plaintext using a cryptographic algorithm and key.
- **plaintext** — Data in its original, readable form, before encryption is applied.
- **ciphertext** — The unreadable output of encryption — data whose original meaning has been concealed.
- **key** — A secret value used with an encryption algorithm that determines how data is scrambled and unscrambled; whoever holds the right key can decrypt.
- **symmetric encryption** — Encryption that uses one shared key for both encrypting and decrypting data.
- **asymmetric encryption** — Encryption that uses a pair of mathematically related keys: a public key that can be shared and a private key that stays secret.
- **encryption at rest** — Encryption applied to data while it is stored, such as the files on a laptop's hard drive.
- **encryption in transit** — Encryption applied to data while it moves across a network between two points.
- **hash function** — A one-way computation that produces a value from data but cannot be reversed; unlike encryption, it is not reversible with a key.

## Eli-10

Encryption takes something readable and makes it unreadable on purpose. The readable version is plaintext; the scrambled version is ciphertext. A key does the scrambling, and the same key — or a matching one — undoes it. Nothing about the original words survives in the scrambled version: an attacker who grabs the ciphertext gets a string of nonsense. There are two main styles. One key for everyone is symmetric; a matched pair, one public and one private, is asymmetric. Encryption is applied in two places: to data sitting still, called at rest, and to data moving, called in transit. The honest summary: encryption protects the data, not the machine holding it — a stolen encrypted file is still stolen, it is just unreadable.

## Eli's Analogy

Think of a lockbox with two kinds of locks. Symmetric: one key opens it, and everyone who needs in carries a copy of that same key — simple, but the key must never leak. Asymmetric: the box has a lock where one key locks it and a different key unlocks it. You can hand out locking keys to anyone — that is the public key — and keep the unlocking key for yourself — the private key. Anyone can lock a message for you; only you can open it.

The comparison breaks down because real encryption is not a physical box: there is no inside where the message sits — the ciphertext itself is the message, just transformed beyond recognition, and the mathematics of modern algorithms has no everyday analogue. The box also suggests the data is protected from tampering; encryption on its own does not detect changes — integrity is a separate job that belongs to hashing. And in real systems, keys are not metal; they are long random values that must be generated, stored, and protected, which is often the hardest part.

## Worked Example

Priya is a physical therapist who keeps progress notes on a work laptop. The notes are encrypted at rest: when she saves a file, the laptop's storage encryption turns it into ciphertext, and when she opens it with her login, the system decrypts it for her. When she sends a summary to a referring clinic's portal, the connection encrypts the file in transit — the data is protected while it travels across the network, and the clinic's server decrypts it on arrival. One night the laptop is stolen. The thief can resell the hardware, but the notes stay unreadable without the key, which is held in the clinic's key-management system — not stored on the laptop. The data was stolen; it was not exposed.

## Common Mistakes

- **Confusing encryption with hashing.** Encryption is reversible with a key; hashing is one-way and cannot be reversed. Saying a password was "encrypted" when it was hashed conflates two different protections — and it matters, because a leaked hash cannot be decrypted back into the password.
- **Believing encryption makes the device or system safe.** Encryption protects data, not systems. A laptop holding encrypted files can still be infected with malware, and an encrypted backup is still a backup that can be lost. Think of encryption as protecting the content, not the machine.
- **Treating the key as unimportant once encryption is on.** The key is the whole arrangement: whoever holds the key can decrypt. A strong algorithm with a poorly protected key — written on a sticky note, shared in an email — protects almost nothing. Key protection is part of encryption, not an optional extra.
- **Assuming "we encrypt everything" means every copy is protected everywhere.** At rest and in transit are different contexts. A file encrypted in storage can travel over an unencrypted connection, and the reverse is possible too. When someone claims data is encrypted, ask which copy, and where.

## Compare / Contrast

- **Encryption vs. hashing.** Encryption is reversible with a key — decryption restores the original data — and protects readability (confidentiality). Hashing is one-way and cannot be reversed, and it supports detecting change (integrity). Each has its own lesson.
- **Symmetric vs. asymmetric encryption.** Symmetric uses one shared secret key for both encrypting and decrypting and is generally faster; asymmetric uses a public/private key pair, where the public key encrypts and the private key decrypts, and needs fewer keys overall.
- **At rest vs. in transit.** At rest protects data while it is stored on a device or server; in transit protects data while it moves across a network. The same file can be at rest in storage and in transit when it is sent.

## Key Takeaway

Encryption scrambles data with a key so only the right people can read it — reversible, unlike hashing — and it protects data both at rest and in transit; it is the last line of defense, but it protects data, not systems, so the keys themselves must be protected.

## Practice Question Bank

1. What is encryption?
   - A. Making an extra copy of data so it can be restored later
   - B. Deleting data so no one can find it
   - C. Compressing data so it takes up less space
   - D. Transforming readable data into an unreadable form using a key (correct)
2. What is the critical difference between encryption and hashing?
   - A. Encryption is reversible with a key; hashing is one-way (correct)
   - B. Hashing is reversible with a key; encryption is one-way
   - C. Both are one-way, so neither can be reversed
   - D. Both are reversible, and they differ only in speed
3. In symmetric encryption, what do the sender and receiver share?
   - A. Two different keys, one for each direction
   - B. A public key and a private key
   - C. One key used for both encrypting and decrypting (correct)
   - D. No keys, because the data is not scrambled
4. A laptop containing patient records is stolen. The files on the drive are encrypted, and the thief does not have the key. What is the most accurate statement about the records?
   - A. The thief can read them by copying the files to another computer
   - B. The records remain unreadable without the key, so the data is still protected (correct)
   - C. The records are safe forever because encryption also stops hardware theft
   - D. The hospital must assume the data was exposed because the device left the building
5. A company encrypts customer data stored on its servers and also encrypts the connection customers use when they send data to those servers. Which pair of contexts does this cover?
   - A. Symmetric and asymmetric
   - B. Public and private
   - C. Hashing and signing
   - D. At rest and in transit (correct)

## Sources

- NIST Computer Security Resource Center Glossary, "encryption" — https://csrc.nist.gov/glossary/term/encryption
- NIST Computer Security Resource Center Glossary, "decryption" — https://csrc.nist.gov/glossary/term/decryption
- NIST SP 800-175B Rev. 1, Guideline for Using Cryptographic Standards in the Federal Government: Cryptographic Mechanisms — https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-175Br1.pdf
- Microsoft Learn, Azure data encryption at rest — https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-atrest

## Related Topics

- cybersecurity:foundations:cia-triad
- cybersecurity:foundations:hashing
- cybersecurity:foundations:digital-certificates
- cybersecurity:foundations:https-tls-basics
- cybersecurity:foundations:wi-fi-security

## Editorial Metadata

- Topic ID: cybersecurity:foundations:encryption
- Editorial status: READY_TO_PUBLISH
- Researched at: 2026-08-21
- Provenance: EliExplains original synthesis; facts verified against NIST CSRC glossary definitions, NIST SP 800-175B Rev. 1, and Microsoft Learn encryption-at-rest documentation; reference-only sources, no source prose adapted; all examples original.
