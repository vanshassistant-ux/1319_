# Authentication

## In 30 Seconds

Authentication is the process of verifying that someone is who they claim to be before letting them in. It answers one question: are you really the account holder you say you are? Proof comes in three broad kinds: something you know, like a password; something you have, like a phone or a security key; and something you are, like a fingerprint or a face. Using two or more kinds at once is stronger than using one. Authentication only proves identity; deciding what an identity may do is a separate step called authorization.

## Why This Matters

Every account, device, and service you use decides who you are through authentication. It is the gate in front of everything else: once someone passes it, they act with your name, reading your mail, spending your money, changing your data. Understanding how that gate works lets you see why a password alone is weaker than several proofs together, why a fingerprint is not a secret the way a password is, and why proving who you are and being allowed to do something are two different decisions. That distinction runs through every security discussion, from logging into a bank to how organizations protect their systems.

## Learning Objectives

- Define authentication as the process of verifying that someone is who they claim to be.
- Name the three authentication factors — something you know, something you have, something you are — with an example of each.
- Distinguish single-factor from multi-factor authentication and explain why distinct factors mean stronger assurance.
- Distinguish authentication from authorization, using a scenario in which identity is proven but access is still denied.
- Explain why no authentication method is perfect, including why biometrics cannot simply be reset like passwords.
- Apply the concept of authentication to everyday sign-in scenarios.

## The College Version

### What authentication is

Authentication is the process of verifying that someone is who they claim to be before a system lets them act. NIST, whose Special Publication 800-63 series defines digital-identity practice, describes digital authentication as determining the validity of one or more authenticators used to claim a digital identity: establishing that the person attempting to access a service controls the credentials used to authenticate. Microsoft's identity documentation is plainer: authentication verifies a user's identity before granting access to apps, services, devices, or networks. The word "verify" matters. The person on the other side of a login screen can claim anything; authentication is the system's way of checking. It does not decide what the person may do, and it does not establish identity in any absolute sense. It determines, to some level of confidence, that the person presenting the credentials is the same person those credentials belong to.

### The three factors

Authentication rests on three broad categories of proof, and almost every method in use is one of them. Something you know: a secret held in memory, such as a password or a PIN. NIST's authenticator guidance calls a password exactly this: something you know. Something you have: a physical object or device in your possession, such as a phone that receives one-time codes or a hardware security key. NIST describes these as physical authenticators, something you have. Something you are: a biometric characteristic of your body, such as a fingerprint or a face. A biometric match is what NIST calls something you are. The categories matter because they fail in different ways. A secret can be guessed or stolen in a data breach; a device can be lost or borrowed; a biometric can be photographed, lifted from a surface, or spoofed. When a system asks for proof from only one category, an attacker who compromises that one kind of proof gets in.

### Single-factor versus multi-factor

A factor is one of the three categories above, and the number of distinct categories a system requires sets the strength of the login. Single-factor authentication asks for one kind of proof, typically a password. Multi-factor authentication asks for two or more different categories, such as a password plus a one-time code from your phone, or a security key plus a fingerprint. NIST's assurance levels make the logic explicit: at its higher levels, authentication requires proof of possession and control of two distinct authentication factors. Two proofs from the same category do not count as multi-factor; a password and a PIN are both something you know, so together they are still one factor. The reason multi-factor is stronger is simple: an attacker must compromise several different kinds of proof at once, and the categories are usually compromised through different means. The full details belong to a separate lesson; here the principle is the point.

### Authentication versus authorization

Authentication and authorization are routinely confused, and the difference is critical. Authentication answers the question "who are you?" Authorization answers the question "what are you allowed to do?" — the decision about which resources an authenticated identity may access and what it may do with them. OWASP's guidance treats the two as separate controls: authentication verifies identity, authorization enforces permissions. A real login performs both, which is why they blur together. You type a password, authentication, and the system then decides whether your account may open the file you asked for, authorization. The two can diverge: a person can authenticate successfully and still be denied, because the identity is proven but the permission is missing. Authorization has its own lesson; here the takeaway is that proving who you are never, by itself, grants access to anything.

### Common methods, and why authentication matters

The methods you meet every day are instances of the factors above. Passwords are the classic something you know. One-time codes, short numbers sent to a phone or generated by an authenticator app, are something-you-have proofs tied to a device you control. Biometrics, fingerprint, face, iris, are something-you-are proofs. Security keys are small hardware devices that connect to a computer and prove possession cryptographically; FIDO2 security keys and passkeys are the modern form of this idea. What unites them is the job they do: each gives the system evidence that the person at the keyboard is the account's owner. That job matters because identity is the gate to everything else. Accounts, devices, and networks decide what you may do by first deciding who you are, so the quality of the authentication determines whether an attacker can simply walk in as you.

### The honest limits

No authentication method is perfect, and the limits are worth stating plainly. Passwords get stolen or guessed; phones get lost; one-time codes can be intercepted; even security keys have failure modes. Biometrics deserve special honesty. NIST points out that biometric characteristics are not secrets: your face is visible to cameras, fingerprints are left on objects you touch, and high-resolution photos can capture iris patterns. NIST also notes that biometric comparison is probabilistic, unlike the exact match of a password or key; biometrics must therefore be used only together with a physical authenticator, never as the sole proof. And unlike a password, which you can change the moment you suspect it leaked, a compromised biometric cannot simply be reset: you do not get a new fingerprint. The practical consequence is not despair but layering: treat each method as one piece of proof and rely on combinations rather than any single perfect method.

## Key Vocabulary

- **authentication** — The process of verifying that someone is who they claim to be, by checking the credentials they present.
- **factor** — One of the three categories of proof used in authentication: something you know, something you have, or something you are.
- **something you know** — A factor based on a secret held in memory, such as a password or PIN.
- **something you have** — A factor based on possession of a physical object or device, such as a phone or security key.
- **something you are** — A factor based on a characteristic of your body, such as a fingerprint or face.
- **single-factor authentication** — Authentication that requires proof from only one factor category.
- **multi-factor authentication** — Authentication that requires proof from two or more distinct factor categories.
- **biometric** — A measurable body characteristic, such as a fingerprint or face, used as proof of identity.
- **one-time code** — A short, single-use number delivered to a device, used as something-you-have proof.
- **authorization** — The separate decision of what an authenticated identity is allowed to do.

## Eli-10

Authentication is how a computer checks that you are really you. When you say "I am Priya," the computer does not take your word for it; it asks for proof. The proof comes in three kinds. Something you know: a password in your head. Something you have: a phone in your pocket. Something you are: your fingerprint or your face. Each kind is one factor. One factor alone can be stolen or faked, so stronger logins ask for two different kinds at once. And proving who you are is not the same as being allowed to do things: the computer checks your identity first, then checks your permissions separately.

## Eli's Analogy

Think of the door to a club. Saying "I am on the list" is a claim; the bouncer checking your ID is authentication. The ID itself is something you have, and comparing the photo to your face is something you are. If the club also asks for a password you memorized, that is something you know. But even after the bouncer confirms you are really you, a separate rule decides what you may do inside. That is authorization, a different decision made at a different door.

The comparison has limits. A club bouncer sees your face and judges it in context, while computer authentication compares digital samples and can be fooled by fakes, photos, or stolen credentials. And a person can get a new ID when one is lost, but a compromised fingerprint cannot be replaced: some proofs are easier to renew than others.

## Worked Example

Amina works at a small clinic and signs in to the patient-records system. She types her password, something she knows. The system then sends a one-time code to the phone registered to her account, and she enters it, something she has, proving she controls that device. Only after both checks succeed is she authenticated: the system accepts that she is the account's owner. When she opens a patient file, the system separately checks whether her account is allowed to view that record; that check is authorization, and it can deny her even after a successful login. Two factors, two distinct decisions.

## Common Mistakes

- **Thinking a password plus a PIN is multi-factor authentication.** Both are something you know. Multi-factor requires two or more distinct categories of proof, such as a password plus a code from your phone.
- **Using the words authentication and authorization as if they mean the same thing.** Authentication verifies who you are; authorization decides what you may do. A login performs both, but they are separate decisions.
- **Believing biometrics are unbreakable secrets.** Biometric characteristics are not secrets: faces and fingerprints can be captured without your knowledge. NIST requires biometrics to be used together with another factor, not alone.
- **Assuming any extra step makes a login multi-factor.** What counts is the category of the proof, not the number of steps. Two secrets from the same category are still one factor.

## Compare / Contrast

- **Authentication vs. Authorization** — Authentication verifies who you are; authorization decides what you may do. A successful login does both, but the two decisions can diverge: identity can be proven while permission is denied.
- **Something you know vs. Something you have** — A secret held in memory versus an object in your possession. They fail in different ways: secrets get guessed or stolen, devices get lost or borrowed.
- **Single-factor vs. Multi-factor** — One category of proof versus two or more distinct categories. Multi-factor is stronger because an attacker must defeat several different kinds of proof at once.

## Key Takeaway

Authentication verifies that someone is who they claim to be, using one or more of three factors: something you know, something you have, or something you are. More distinct factors mean stronger proof, authentication is not the same as authorization, and no method, biometrics included, is perfect.

## Practice Question Bank

**Q1.** Which statement best defines authentication?

- A. Verifying that someone is who they claim to be before letting them act.
- B. Deciding which resources an account is allowed to access.
- C. Encrypting data so outsiders cannot read it.
- D. Blocking malicious software from running.

**Key: A.** Authentication verifies identity, as NIST and Microsoft's identity documentation describe. Deciding what an identity may access is authorization, and encryption or malware blocking are different security controls, not identity checks.

**Q2.** A login asks for a six-digit code generated on a phone app. Which factor category is being used?

- A. Something you know, because the code is a secret value.
- B. Something you have, because the code comes from a device you possess.
- C. Something you are, because the app knows your usage habits.
- D. None — codes are not an authentication factor.

**Key: B.** NIST classifies a one-time-code authenticator as a physical authenticator, something you have, because it proves possession and control of a device. The code is not a memorized secret, a body characteristic, or outside the definition of a factor.

**Q3.** Ravi signs in with his password and then approves a prompt on his phone. Which statement about the factors is correct?

- A. Both checks are something you know, so this is single-factor.
- B. The password is the only factor; the phone prompt is just a notification.
- C. The password is something you know and the phone approval is something you have, so this is multi-factor.
- D. This is biometric authentication because the phone recognizes its owner.

**Key: C.** The password is a memorized secret, something you know, and approving a prompt on a phone proves control of a device, something you have. Proof from two distinct categories is multi-factor, which is what the two-step check performs. The other options mislabel the categories.

**Q4.** A photo of a person's face is captured from a public camera feed. Why can this not be fixed the way a leaked password can?

- A. Face images are legally protected and cannot be used for authentication.
- B. The person can simply choose a different face for the account.
- C. Authentication systems ignore face images entirely.
- D. Biometric characteristics are not secrets, and a person cannot issue themselves a new fingerprint or face.

**Key: D.** NIST notes that biometric characteristics are not secrets: they can be captured from photos or surfaces without the person's knowledge. A leaked password can be replaced with a new one, but a compromised biometric cannot simply be reset, which is why NIST requires biometrics to be used with another factor rather than alone.

**Q5.** Lin authenticates successfully to a hospital system but is told her account may not open a certain patient record. What happened?

- A. Authentication succeeded, but authorization denied the action.
- B. Authentication failed because the record exists.
- C. The system never checked her identity.
- D. Authorization succeeded, so authentication was skipped.

**Key: A.** Authentication verifies identity, and authorization decides what the authenticated identity may do, as OWASP's guidance separates the two controls. Lin proved who she is, but the permission check for that record failed; the record's existence and the identity check are not what denied her.

## Sources

- NIST Special Publication 800-63B: Authentication and Authenticator Management (rev. 4) — https://pages.nist.gov/800-63-4/sp800-63b.html
- NIST Special Publication 800-63B (rev. 3), Section 5.2.3, Use of Biometrics — https://pages.nist.gov/800-63-3/sp800-63b.html
- OWASP Authentication Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- OWASP Authorization Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- Microsoft Entra authentication overview (Microsoft Learn) — https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods

## Related Topics

- cybersecurity:foundations:password-security
- cybersecurity:foundations:mfa
- cybersecurity:foundations:authorization
- cybersecurity:foundations:phishing
- cybersecurity:foundations:what-cybersecurity-is

## Editorial Metadata

- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21
- Provenance: EliExplains original synthesis. Definitions and factor terminology synthesized from NIST SP 800-63B, OWASP cheat sheets, and Microsoft Entra documentation into original explanatory prose; reference-only sources, no source prose adapted.
