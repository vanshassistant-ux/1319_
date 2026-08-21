# Hashing

## In 30 Seconds

A hash is a fixed-size value computed from any data — a fingerprint of the data. The same input always produces the same hash; different inputs produce different hashes; and you cannot work backward from a hash to the original data. Because of that, hashes are used to check whether a file changed and to store passwords without storing the passwords themselves. Encryption is reversible; hashing is not.

## Why This Matters

Every download you trust, every login you make, and every file you share online depends, somewhere, on a hash. When a website publishes a hash for a file, you can check that what you received is exactly what was published. When you type a password, the system compares hashes — yours is never stored in plain text. Understanding hashing also protects you from a common confusion: a hash proves a file's contents are unchanged, but it does not prove who made the file. That distinction matters every time you verify a download, and it is the reason digital certificates exist.

## Learning Objectives

- Define a hash function as a computation that turns data of any length into a fixed-size value, using NIST's definition as the reference point.
- State the three core properties of a hash — same input always gives the same hash, any change gives a different hash, and the hash cannot be reversed — in one line each.
- Distinguish hashing from encryption by the one-way versus reversible distinction.
- Apply hashing to real tasks: checking file integrity and storing passwords without storing the passwords themselves.
- Analyze the collision caveat and explain why a hash proves a file's contents but not its author.

## The College Version

### What a hash is

A hash function is a computation that takes data of any size and produces a value of a fixed size. NIST, the U.S. National Institute of Standards and Technology, defines a cryptographic hash function as a function that maps a bit string of arbitrary length to a fixed-length bit string. The result is called the hash value, or message digest. Think of it as a fingerprint for data: the same data always yields the same fingerprint, the fingerprint is much smaller than the data itself, and it summarizes the data in a way that is practically unique. A one-page letter and a two-hundred-page report can both be hashed, and each produces a value of the same length. SHA-256, for instance, always produces a 256-bit hash, typically written as 64 hexadecimal characters.

### The three properties

Three properties matter at the intuition level. First, the same input always produces the same hash. Hashing is deterministic: the computation has no randomness, so the digest you compute today for a file will match the digest computed for the identical file tomorrow — which is what makes comparison possible at all. Second, different inputs produce different hashes. More precisely, any change to a message will, with very high probability, result in a different digest, as NIST's Secure Hash Standard puts it. Flip one character in a paragraph and the whole hash changes, so a mismatch is a reliable alarm. Third, you cannot reverse a hash. NIST describes this as the one-way property, or preimage resistance: it is computationally infeasible to find an input that produces a given hash value. There is no un-hash operation — no key and no formula that turns a digest back into the data.

### Hashing versus encryption

The critical distinction between hashing and encryption is direction. Encryption is reversible: it scrambles data with a key, and the intended recipient uses the key to unscramble it and read the original. Hashing is one-way: it produces a digest that cannot be turned back into the original data. OWASP states it plainly — hashing is a one-way function, so it is impossible to decrypt a hash and obtain the original plaintext value, whereas encryption is a two-way function. The two serve different security goals: encryption protects confidentiality, keeping data secret from those without the key, while hashing protects integrity, letting you detect that data has changed. Encryption is its own topic; the point here is that hashing is not a weaker form of encryption. It is a different tool for a different job.

### Two everyday jobs: file integrity and password storage

File integrity. When a publisher posts a file for download, it can also post the file's hash. You compute the hash of the copy you received and compare it with the published value. If they match, your copy is byte-for-byte the published file; if they differ, something changed it — a corrupted transfer, a partial download, or tampering. NIST's Secure Hash Standard describes exactly this use: the digests are used to detect whether messages have been changed since the digests were generated. Download pages for software, documents, and updates publish hashes for exactly this reason.

Password storage. A service that needs to check your password does not have to store it. When you set a password, the service stores its hash; when you log in, it hashes what you type and compares the result with the stored value. If the two match, you typed the right password — but the stored value is not the password itself. OWASP recommends hashing as the most appropriate approach for password validation precisely because a hash cannot be decrypted back to the plaintext, so an attacker who obtains the hashed passwords cannot use them directly to log in as a victim. Choosing strong password-hashing algorithms and defending against guessing are covered in the password-security lesson.

### The collision caveat — and what a hash cannot prove

Because a hash output has a fixed size while inputs can be any length, two different inputs must sometimes produce the same hash. NIST defines this event — two different messages with the same message digest — as a collision. The honest framing is that collisions are theoretically possible: with only finitely many possible digests and unlimited possible messages, sharing is mathematically unavoidable. The practical framing is that strong algorithms make collisions unreachable: NIST requires approved hash functions to be collision-resistant, meaning it is computationally infeasible to find two distinct inputs that map to the same output. For SHA-256, finding a collision is estimated to require work comparable to 2^128 operations. So collisions exist in principle and are effectively irrelevant in everyday use.

A final principle follows from everything above: a hash proves a file's fingerprint, not its author. Identical content produces an identical hash no matter who produced it, and anyone can compute a hash of anything. A matching hash shows the file is unchanged since the hash was made; establishing who sent it requires keyed mechanisms such as message authentication codes or digital signatures, which have their own lessons.

## Key Vocabulary

- **hash function** — A computation that turns data of any length into a value of fixed size, so that the same data always yields the same value and any change to the data changes the value.
- **hash value (message digest)** — The fixed-size result produced by a hash function for a given input; for SHA-256 it is 256 bits, usually written as 64 hexadecimal characters.
- **one-way property** — The property that a hash cannot be reversed: finding an input that produces a given hash value is computationally infeasible, as NIST describes preimage resistance.
- **collision** — An event in which two different inputs produce the same hash value; theoretically possible because outputs are fixed-size while inputs are unlimited.
- **collision resistance** — The property of a strong hash algorithm that makes finding two different inputs with the same hash computationally infeasible in practice.
- **integrity check** — A comparison of hash values to detect whether data has been changed since its hash was generated.
- **encryption** — A reversible process that scrambles data with a key so that only key holders can read it; unlike hashing, encryption can be undone.

## Eli-10

A hash is a short, fixed-size value that stands in for a piece of data — a digital fingerprint. You feed any data into a hash function, and out comes the fingerprint. Feed the same data again and you get the same fingerprint; change even one character and you get a completely different one. There is no way to work backward: given the fingerprint, you cannot recover the data. That makes hashes perfect for two jobs. To check a file, you compare its current fingerprint with the fingerprint taken when the file was published — if they match, the file has not changed. To check a password, the system compares fingerprints instead of storing your password at all. The fingerprint only ever answers one question: is this data the same data as before? It never answers who made it.

## Eli's Analogy

Think of a one-way photocopier that prints a receipt for every document. Feed in any stack of pages and it prints a single small code that is unique to that exact stack. The same stack always prints the same code, and if even one page is swapped, the code changes. You can compare receipts to prove two stacks are identical — but no one can rebuild a stack from its receipt. Hashing works the same way: the receipt is the hash.

The analogy breaks down because photocopier receipts are printed by a machine you trust, while hashes are computed by software anyone can run — so a matching hash proves the content matches, not that the content is good or that a trusted person produced it. Real hashes are also not truly unique: collisions are theoretically possible, just practically unreachable with strong algorithms.

## Worked Example

Marisol needs the lab manual for her chemistry course. The course page links to lab-manual-v3.pdf and, next to the link, prints the file's SHA-256 hash: 64 hexadecimal characters, the standard way to write a 256-bit digest. After her download finishes, she runs a hash tool on the file she received. The value it reports is completely different from the one on the page. That tells her the file she has is not the file the instructor published: either the transfer corrupted it or something replaced it. She deletes her copy and downloads again; the second time the hashes match, so she trusts the file. One comparison, one verdict: unchanged or changed.

## Common Mistakes

- **Thinking a hash can be decrypted, the way encrypted data can.** Hashes are one-way. Recovering an input from its hash means guessing likely inputs and comparing hashes — that is guessing, not reversing, and it is why password systems add defenses covered in the password-security lesson.
- **Calling hashing a type of encryption, or a weaker form of it.** Encryption is reversible with a key and protects confidentiality; hashing is irreversible and protects integrity. They are different tools for different jobs, not two strengths of the same tool.
- **Believing a matching hash proves who created or published a file.** A hash depends only on the content, and anyone can hash anything. A match shows the file is unchanged since the hash was made; establishing the source needs keyed mechanisms such as digital signatures, which have their own lesson.
- **Assuming two different files can never produce the same hash.** Collisions are theoretically possible because outputs are fixed-size while inputs are unlimited. Strong algorithms make finding one computationally infeasible, so the risk is negligible in practice — the honest framing is both statements at once.

## Compare / Contrast

- **Hashing vs. encryption.** Hashing is one-way and protects integrity; encryption is reversible with a key and protects confidentiality. A hash of a password cannot be recovered as the password, while encrypted data can be decrypted by its intended recipient.
- **A hash of a file vs. a digital signature on a file.** A hash answers what the data is — identical content always gives the same value, whoever computes it. A digital signature answers who stands behind the data, because it is created with a private key tied to an identity; that is the digital-certificates topic.

## Key Takeaway

A hash is a one-way fingerprint of data: the same input always produces the same fixed-size value, any change produces a different value, and the process cannot be reversed — so hashes prove that a file is unchanged, never who made it.

## Practice Question Bank

1. What is a hash function?
   - A. A computation that turns data of any length into a fixed-size value (correct)
   - B. A reversible cipher that scrambles data with a secret key
   - C. A second copy of a file kept in case the original is lost
   - D. A password that has been encrypted before being stored
2. Which statement correctly captures the difference between hashing and encryption?
   - A. Both are reversible when you have the right key
   - B. Hashing is reversible, while encryption is one-way
   - C. Encryption is reversible, while hashing is one-way (correct)
   - D. They are the same operation under different names
3. A course page lists a PDF's hash. A student downloads the PDF, computes its hash, and gets a different value. What is the most reasonable conclusion?
   - A. The hash algorithm is broken
   - B. The file was encrypted during the download
   - C. Hash values change randomly between computations
   - D. The downloaded file is not the file the page published (correct)
4. A hash function maps inputs of any length to outputs of a fixed size. Why are collisions theoretically possible yet practically acceptable?
   - A. Because hash functions are reversible, collisions can always be resolved by decrypting
   - B. Because output sizes are fixed while inputs are unlimited, some pairs of inputs must share an output — but strong algorithms make finding them computationally infeasible (correct)
   - C. Because the same input occasionally produces different hashes, so duplicates are common
   - D. Because outputs are larger than inputs, every input maps to its own unique output
5. A service stores only hashes of users' passwords. Why is this safer than storing the passwords themselves?
   - A. Because hashes are encrypted, the service can decrypt them to verify logins
   - B. Because hashing adds characters to a password, making it longer
   - C. Because an attacker who steals the hash file cannot directly recover the passwords to log in as users (correct)
   - D. Because hashes let the service read passwords back when users forget them

## Sources

- NIST CSRC Glossary, "hash function" — https://csrc.nist.gov/glossary/term/hash_function
- NIST, FIPS 180-4: Secure Hash Standard (SHS) — https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
- NIST, SP 800-107: Recommendation for Applications Using Approved Hash Algorithms — https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-107.pdf
- OWASP, Password Storage Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html

## Related Topics

- cybersecurity:foundations:encryption
- cybersecurity:foundations:password-security
- cybersecurity:foundations:digital-certificates
- cybersecurity:foundations:cia-triad
- cybersecurity:foundations:https-tls-basics

## Editorial Metadata

- Topic ID: cybersecurity:foundations:hashing
- Editorial status: READY_TO_PUBLISH
- Researched at: 2026-08-21
- Provenance: EliExplains original synthesis; working definition and properties verified against NIST SP 800-107, the CSRC glossary, and FIPS 180-4; the one-way versus reversible distinction and password-storage framing against the OWASP Password Storage Cheat Sheet; all examples original; no source prose reproduced.
