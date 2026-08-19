# ELIEXPLAINS SUBJECT COMPLETION REPORT

Subject: Computer Literacy (`computer-literacy`)
Collection: Professional Studies
Phase: 1
Date: 2026-08-19

## Curriculum

Units: 1 — Foundations
Topics: 25

## Processing

Topics processed: 25 / 25 · Published: 0 · Ready to publish: 25 · Held: 0 · Needs review: 0

One dedicated agent per topic, a fresh agent each time, in batches of up to eleven concurrent
within this subject. Every topic was independently reviewed by the orchestrator: all 125
answer keys were verified against each question's own options (worker self-reports of key
positions were frequently wrong), and the spreadsheet formula arithmetic was re-derived at
merge.

## Questions

Created and verified: 125 (5 per topic) · Rejected: 0 survived to merge · Duplicates: 0
Answer key distribution: 35 / 29 / 32 / 29. Well balanced. Three cross-topic near-duplicate
question stems (a "which statement best describes what X is" template shared by the software,
operating-systems, and internet topics) were caught by the audit and reworded so each reads
distinctly.

## Sources

Unique source records cited: 119
Government / agency: 41 · Documentation: 37 · Standards bodies: 16 · Reference: 13 ·
Open textbook / OER: 11 · Peer-reviewed: 1

Rights: REFERENCE_ONLY 93 · PUBLIC_DOMAIN 20 · ATTRIBUTION_REQUIRED 3 ·
EXTRACT_AND_ADAPT 2 · LINK_ONLY 1 · UNKNOWN 0

The subject leans on primary technical and government sources: the IETF RFCs (IP, TCP, IPv6,
SMTP, IMAP, HTTP), W3C/MDN, ICANN, ISO, the NIST CSRC glossary and NIST SP 800-63B / 800-34 /
800-145, CISA, and the FTC — with vendor and OER documentation as REFERENCE_ONLY. Software is
described by category; specific products (Windows/macOS/Linux, Word/Docs/Writer, Chrome/Safari)
are named only as examples, never as requirements, and no proprietary UI or screenshots are
reproduced.

## Quality Review

Current-security-guidance QA: PASS — the subject's defining control. Password guidance follows
the current NIST SP 800-63B (favor length/passphrases, screen against breach lists, do NOT
force periodic changes) and explicitly flags that this reversed the old "rotate every 90 days,
add symbols" advice. MFA covers phishing-resistant methods (FIDO/passkeys) and SMS weaknesses.
Phishing and malware are taught for recognition and defense ONLY — no attack techniques,
phishing-kit methods, or malware code — with the AI-polished-phishing caveat noted.

Accuracy QA: PASS. Core distinctions are kept precise: the internet (infrastructure) vs the web
(a service on it), RAM (volatile) vs storage (non-volatile), a URL vs a domain vs an IP
address, file sync vs a true backup, and an active vs a passive digital footprint. The
double-extension disguise (`invoice.pdf.exe`) is framed defensively (MITRE ATT&CK).

Honesty QA: PASS. Incognito/private browsing is stated to hide only local traces, not to make
the user anonymous or hide activity from sites/ISP; "recycling bin" recovery is distinguished
from backup; the HTTPS padlock's real (and limited) meaning is explained; privacy law
(GDPR/CCPA) is given as background with an explicit not-legal-advice framing and no claim that
any tool makes a user "safe" or "compliant."

Dated-figures QA: PASS. Browser/OS market shares and other moving figures carry their date
(e.g., July 2026 StatCounter snapshots), and NIST SP 800-63B is cited to Revision 4 (finalized
August 2025).

## Major Corrections

All 25 generated drafts were topic-agnostic boilerplate and were discarded. Notable choices:

1. **Password advice modernized** — the lesson teaches current NIST guidance and names the old
   rotation/complexity rules as reversed, rather than repeating the outdated folklore.
2. **The repurposed topic pattern did not recur** — unlike the prior subject, all 25 queue
   entries here were genuine topics.
3. **Sync ≠ backup, anchored on NIST** — cloud sync's propagation of deletions/ransomware is
   distinguished from a true backup, with the 3-2-1 rule (CISA) owned by the Backups topic.
4. **Security topics kept strictly defensive** — phishing and malware teach recognition and
   protection only.

## Cross-Topic Consistency

Terminology and prose audited across all 25 topics. Markdown question-option labels were
normalized, and file-extension notation in the extensions/word-processing/installing lessons
was wrapped in code formatting so dotted extensions (`.pdf`, `.docx`) no longer trip the
space-before-punctuation check. Two duplicate source records created by parallel workers (an
MDN "how the internet works" page and the NIST firmware glossary entry, each under two ids)
were consolidated to one id and the affected topics re-gated. A shared "mysterious box"
intro analogy between Computer Hardware and How the Web Works was reworded in Computer Hardware.

Remaining cross-topic overlaps were reviewed and recorded with reasons in
`editorial/subjects/computer-literacy/audit-exceptions.json`: two term collisions accepted as a
genuine homonym (an 'archive' file vs the email 'archive' action) and a compatible treatment
(HTTPS as a protocol vs as the browser padlock).

## Validation

```text
bun scripts/editorial-audit-subject.mjs 1 computer-literacy   # 0 issues
bun run phase1:validate ; bun run typecheck ; bun run build
```

Content: PASS (25/25 through the gate) · Questions: PASS (125, keys verified) ·
Sources: PASS (119 cited, 0 unresolved rights) · Routes / Search / Accessibility: N/A, the
site does not yet render lesson pages.

## Held Topics

None.

## Final Subject Status

COMPLETE — 25 of 25 topics processed, verified, and ready to publish, pending owner sign-off.
