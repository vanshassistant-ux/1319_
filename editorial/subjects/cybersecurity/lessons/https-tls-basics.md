# HTTPS/TLS Basics

## In 30 Seconds

HTTPS is the secure version of HTTP, the protocol your browser uses to talk to websites. With HTTPS, a protocol called TLS encrypts the connection between your browser and the server, so data in transit — passwords, messages, payment details — cannot be read or altered by anyone on the path. The padlock icon and the https:// prefix are your quick check that a connection is protected, and HTTPS also confirms which site you are connected to. It protects the journey, not the destination: it does not make a server unhackable or a site honest.

## Why This Matters

Every login, purchase, and private message you send crosses a network, and the difference between HTTP and HTTPS decides whether that journey is readable by others. Knowing what the padlock actually means keeps you from two errors: treating every HTTPS page as trustworthy, or ignoring a "not secure" warning and sending a password anyway. In coursework and at work, you will be asked to reason about where protections apply — the padlock covers the connection, not the server, the stored data, or the site's intentions. Understanding HTTPS is also the foundation for later topics: encryption, digital certificates, and the protocols that build on TLS.

## Learning Objectives

- Define HTTPS as the secure version of HTTP in which web traffic is protected in transit.
- Explain what TLS does: it encrypts the connection between browser and server so data in transit cannot be read or altered.
- Distinguish HTTPS from HTTP, including what happens to a login submitted over each.
- Apply the padlock-and-prefix check to recognize when a connection is protected.
- Evaluate what HTTPS does and does not protect, including why a padlock does not guarantee a site is honest.

## The College Version

### The working definition: HTTPS is HTTP with protection

HTTP — the Hypertext Transfer Protocol — is the protocol web browsers and servers use to exchange pages, images, and form submissions; RFC 9110, the current specification for HTTP semantics, describes it as an application-level protocol for distributed, collaborative hypertext information systems. HTTPS is the secure version of that same protocol. The Hypertext Transfer Protocol Secure uses the same request-and-response pattern as HTTP but wraps the connection in a layer of protection: every message between the browser and the server is encrypted while it travels. Cloudflare's explainer puts it simply: HTTPS is not a separate protocol from HTTP — it is HTTP with TLS/SSL encryption applied on top. So the working definition to remember: HTTPS is the secure version of HTTP, and the traffic it carries is protected in transit.

### What TLS does to the connection

TLS — Transport Layer Security — is the protocol that does the protecting, and it is the protocol formerly known as SSL. RFC 8446, the standard that defines TLS 1.3, states the primary goal: TLS provides a secure channel between two communicating peers, designed to prevent eavesdropping, tampering, and message forgery. Concretely, that means three properties. Confidentiality: data sent over the channel after it is established is only visible to the two endpoints, so someone who intercepts the traffic sees scrambled, unreadable data. Integrity: data cannot be modified by an attacker without detection. Authentication: the server side of the channel is always authenticated, so the browser can confirm it is connected to the server that presents the site's certificate. NIST's TLS guidance (SP 800-52 Rev. 2) describes the same job at the policy level: TLS provides mechanisms to protect data during electronic dissemination across the Internet. How the encryption itself works — how keys are produced and managed — has its own lesson; here the point is what the mechanism does for you: while data is in transit, it cannot be read and it cannot be altered.

### What the padlock means

The padlock icon in the address bar, together with the https:// prefix, is the browser's shorthand for "this connection is protected by TLS." CISA, the U.S. cybersecurity agency, uses exactly that signal on its own site: a locked padlock or https:// means you have safely connected to the website. Modern browsers go further and flag pages that lack HTTPS: Chrome and other browsers mark non-HTTPS sites as "not secure." The padlock carries two messages. First, the connection is encrypted, so the data you send cannot be read or altered in transit. Second, the site presented a digital certificate, which verifies the identity of the server you are connected to — the certificate confirms which domain holds the connection, not what the site's operators intend to do with your data. How certificates are issued, validated, and trusted is its own topic (digital certificates); the padlock is simply the visible result of that machinery working.

### HTTP versus HTTPS: the same login page, two different journeys

Imagine a login page for a student portal. On plain HTTP, when you type your username and password and press enter, the page sends them over the network in plain text — readable by anyone positioned along the path, such as someone on the same public Wi-Fi running a packet-capture tool. The password travels in exactly the form you typed it, and an attacker who intercepts it does not need to break anything; it is simply there. Now imagine the same login page served over HTTPS. The moment the connection is established, TLS encrypts everything that follows. Your password still travels to the same server, but as an unreadable string; anyone who captures the packets sees nonsense characters, not your credentials. Same page, same password, same network — the only difference is the protocol, and the protocol is the difference between a postcard and a sealed envelope. This is why the browser's "not secure" warning matters: a login page over HTTP is asking you to send your password unprotected.

### What HTTPS protects, and what it does not

HTTPS protects data in transit: passwords entered on login pages, private messages, payment details on checkout pages — anything traveling between your browser and the server. That is a genuine protection, and on public Wi-Fi it is the difference between your credentials being readable and being scrambled. But the honest framing is equally important, because the padlock does not extend beyond the connection. HTTPS does not protect the server's own security: a site can use HTTPS and still be hacked, because the padlock covers the channel, not the machine behind it. HTTPS does not guarantee the site is honest: phishing pages routinely use HTTPS, and the padlock merely confirms the connection is encrypted to the domain in the address bar — a scammer can obtain a certificate for a convincing lookalike domain. And HTTPS does not protect data once it is stored: after your password or payment details arrive at the server, protecting them at rest is a separate job. The quick check you can use every day: before typing anything sensitive, look for the padlock and the https:// prefix — and then remember that they describe the journey, not the destination.

## Key Vocabulary

- **HTTPS** — The secure version of HTTP; web traffic protected by TLS while it travels between a browser and a server.
- **HTTP** — The ordinary protocol browsers and servers use to exchange web content, carrying data without transport protection.
- **TLS** — The protocol that encrypts a connection so data in transit cannot be read or altered; formerly called SSL.
- **encryption** — Scrambling data so that only the intended recipient can read it; the mechanism TLS uses to protect connections.
- **padlock icon** — The browser indicator for a protected HTTPS connection, meaning the traffic to that site is encrypted.
- **certificate** — A digital credential a site presents to prove which domain it is; the identity half of what the padlock signals.
- **in transit** — Data moving across a network between two points, as opposed to data stored on a device (at rest).
- **plain text** — Readable, unprotected data; the form HTTP traffic takes unless TLS is applied to the connection.

## Eli-10

HTTPS is the secure version of HTTP — the ordinary way a browser asks a website for pages and sends back form data. The "S" stands for "Secure," and the security comes from a protocol called TLS that wraps the connection between your browser and the server. While that connection is open, everything you send is scrambled so that no one else on the network path can read it or change it. Your password, a private message, a card number — all unreadable to anyone who intercepts the traffic. When the data arrives at the server it is unscrambled, which is the point: the protection is for the journey, not for the destination.

## Eli's Analogy

Think of HTTP as sending a postcard. Anyone who handles it along the way — the postal workers, anyone who glances at it — can read the message on the back. HTTPS is a sealed envelope carried by a courier. The courier locks the envelope at your end, carries it unopened, and only the intended recipient has the key to open it. The padlock in your browser is the seal you can see before you hand over the envelope: it tells you the message will travel locked, and it tells you who the courier is delivering to.

The envelope comparison breaks down in two ways. First, the seal protects only the journey: once the courier delivers the envelope, the recipient's office can still be burgled, and the letter can sit unread in an unlocked drawer — HTTPS does nothing for the data after it arrives at the server. Second, the seal says nothing about the sender's honesty. A sealed envelope from a stranger is still a sealed envelope; a phishing page with a valid certificate is still a phishing page. The padlock answers "is this trip protected?" — not "should I trust this person?"

## Worked Example

Jules is at a coffee shop on public Wi-Fi. He opens his bank's login page; the address bar shows a padlock and https://, so he types his password. TLS encrypts the connection, and a nearby attacker capturing packets sees only scrambled characters. Later that day, an email "from the bank" links to a page that also shows a padlock. Jules remembers the honest framing: the padlock proves the connection to that page is encrypted, not that the page is run by his bank. He checks the domain in the address bar, sees a lookalike address, closes the tab, and reports the email.

## Common Mistakes

- **Believing the padlock means the site is trustworthy.** The padlock proves the connection is encrypted and identifies the domain you are connected to — not that the site's operators are honest. Phishing pages can carry valid HTTPS, so check the address itself and the context of the request.
- **Thinking HTTPS protects everything, including the server and stored data.** HTTPS protects data in transit only. The server's own security and the data once it is stored are separate concerns covered by other controls.
- **Ignoring the "not secure" warning on a login page.** A browser warning on an HTTP page means your password would travel in plain text. Do not enter credentials on a page that lacks HTTPS; the warning is the browser telling you the journey is unprotected.
- **Checking for the padlock but not reading the domain.** The padlock confirms encryption to the domain in the address bar — whatever that domain is. A lookalike domain with a padlock is still a lookalike domain; read the name before typing anything.

## Compare / Contrast

- **HTTP vs. HTTPS.** HTTP carries web traffic in plain text, readable by anyone on the path; HTTPS is the same protocol wrapped in TLS, so the traffic is encrypted in transit.
- **The padlock vs. a trustworthy site.** A padlock means the connection is encrypted and identifies the server; it does not mean the site is honest, safe, or reputable.
- **Data in transit vs. data at rest.** HTTPS protects data while it travels between browser and server; once the data is stored on the server, that protection is gone, and at-rest protection is a separate task.

## Key Takeaway

HTTPS is HTTP with TLS protection: it encrypts the connection so data in transit cannot be read or altered, and the padlock and https:// prefix are your quick check — but the padlock covers the journey, not the server's security, stored data, or a site's honesty.

## Practice Question Bank

1. What is HTTPS?
   - A. A separate internet network used only by banks and governments
   - B. The secure version of HTTP, with web traffic protected in transit (correct)
   - C. A browser setting that blocks all advertising
   - D. A type of encryption applied to files on a hard drive
2. What does TLS do for an HTTPS connection?
   - A. It compresses page content so pages load faster
   - B. It hides the domain name from internet providers
   - C. It encrypts the connection between browser and server so data in transit cannot be read or altered (correct)
   - D. It scans each page for malware before it is displayed
3. Maya is on public Wi-Fi at an airport and opens her bank's login page. The address bar shows a padlock and https://. What is the most accurate statement?
   - A. The padlock proves the page is operated by her actual bank
   - B. Her password is protected from being read while it travels to the site (correct)
   - C. Her banking data is now safe from every threat, including the bank's servers being breached
   - D. The padlock means scammers cannot create a similar page
4. A scammer builds a convincing copy of a delivery company's tracking page, complete with a valid HTTPS certificate and a padlock. A customer enters their address and card number. What does the padlock tell the customer?
   - A. That the page was sent by the real delivery company
   - B. That the card number will be encrypted after it is stored
   - C. That the page's server cannot be compromised
   - D. That the connection to the page is encrypted — but not that the site is honest (correct)
5. You are about to enter your email password on an unfamiliar website, but the address bar shows a padlock and https://. Which statement is true?
   - A. The connection is encrypted, but that alone does not mean the site is safe to trust (correct)
   - B. The padlock means the site has been approved by a government agency
   - C. The https:// prefix means your password will be stored encrypted on the site's servers
   - D. The padlock means the site cannot collect or misuse your password

## Sources

- NIST SP 800-52 Rev. 2, Guidelines for the Selection, Configuration, and Use of Transport Layer Security (TLS) Implementations — https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-52r2.pdf
- RFC 8446, The Transport Layer Security (TLS) Protocol Version 1.3 (IETF) — https://www.rfc-editor.org/rfc/rfc8446.html
- RFC 9110, HTTP Semantics (IETF) — https://www.rfc-editor.org/rfc/rfc9110.html
- Cloudflare Learning Center, "What is HTTPS?" — https://www.cloudflare.com/learning/ssl/what-is-https/
- MDN Web Docs, "HTTPS" — https://developer.mozilla.org/en-US/docs/Glossary/HTTPS
- CISA, "Recognize and Report Phishing" — https://www.cisa.gov/secure-our-world/recognize-and-report-phishing

## Related Topics

- [Encryption](cybersecurity:foundations:encryption)
- [Digital Certificates](cybersecurity:foundations:digital-certificates)
- [Network Fundamentals](cybersecurity:foundations:network-fundamentals)
- [Phishing](cybersecurity:foundations:phishing)
- [Wi-Fi Security](cybersecurity:foundations:wi-fi-security)

## Editorial Metadata

- Topic ID: cybersecurity:foundations:https-tls-basics
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified (researched 2026-08-21)
- Rights: reference-only and public-domain sources; no source prose adapted; all examples original
- Scope note: defensive framing only; encryption mechanics, certificate internals, and network fundamentals belong to their own sibling lessons
