# Least Privilege

## In 30 Seconds

Least privilege is the security principle of giving each user, program, and service only the access its job requires, and no more. The payoff is containment: if an account is compromised, the attacker inherits only its limited rights, so the damage stays small. The principle applies to everyday accounts, administrator rights, software, and cloud permissions. Access that is never removed accumulates into privilege creep, which is why organizations run regular access reviews. Least privilege reduces risk; it does not eliminate it.

## Why This Matters

Most breaches do not begin with a villain breaking encryption; they begin with a stolen password. Least privilege decides how much damage that one stolen password can do. An account with only the access its job needs contains a compromise the way a fire door contains a fire: the attacker gets in, but the spread stops early. The principle also explains everyday choices, from why daily work belongs on a standard account rather than an administrator account, to why software should not run with rights it never uses, to why cloud teams must trim permissions instead of leaving them broad. It is also the thinking behind privilege creep and access reviews: rights that are never removed quietly grow, and the review is the cleanup. Least privilege is one of the clearest ideas in security, and one of the most consistently neglected.

## Learning Objectives

- Define least privilege and state the principle in one sentence.
- Explain why least privilege limits the damage that a compromised account can do.
- Name four places least privilege applies: user accounts, administrator rights, programs and services, and cloud permissions.
- Distinguish administrator accounts from standard user accounts and describe the everyday pattern for using each.
- Describe privilege creep and the practice of regular access reviews that counter it.
- Evaluate what least privilege can and cannot accomplish as a security control.

## The College Version

### What least privilege is

Least privilege is the security principle that every user, program, or service gets only the access it needs to do its job, and no more. NIST's glossary gives the precise version: a security architecture is designed so that each entity is granted the minimum system resources and authorizations that the entity needs to perform its function. OWASP's guidance states the practical version: assign users only the minimum privileges necessary to complete their job. Microsoft's security guidance adds a time element: users and workloads get only the access they need, for the shortest time required. Two details matter. First, the word "entity" is deliberately broad: the principle covers people, software, devices, and cloud workloads alike. Second, least privilege is not about equality; it is about fit. An accountant and a salesperson can hold the same rank and still need completely different access. OWASP notes that least privilege must be applied both horizontally, across people at the same level of an organization, and vertically, so that greater responsibility earns more access, but only as much as the role requires.

### Why it matters: containing a compromised account

The core payoff of least privilege is damage control. Accounts get compromised all the time, through a reused password, a phishing message, or a lost device. When that happens, the attacker inherits whatever rights the account holds. If the account carries only the access its job needs, the attacker's reach stays small. OWASP cautions that skipping least privilege puts the confidentiality of sensitive resources at risk, and Microsoft's guidance describes the same logic from the other side: security controls assume attackers may already be operating inside the environment, so the goal is to limit how far a breach can spread. At a community centre, the front-desk account can book rooms and see members' names and email addresses. Its password is stolen in a phishing email. Because the account was never given access to payment records, which live only in the treasurer's separate account, the attacker can send spam to members but cannot touch the centre's bank details. The breach is contained by what the account was never allowed to do.

### Where least privilege applies

The principle is not limited to people's logins; it applies wherever access is granted. User accounts: each person gets the folders, files, and tools their current role requires. Administrator rights: only a few accounts can change system settings, install software, or manage other users, and those rights are exercised deliberately rather than constantly. Programs and services: software also acts under an identity. A backup service needs permission to read files and write to backup storage, but it does not need to change system settings or read payroll; a web server process should run with just enough access to serve pages. Cloud permissions: the same idea scales to cloud systems. AWS's own guidance instructs teams to grant only the permissions required to perform a task, and to work toward least-privilege permissions over time rather than leaving broad access in place. In every setting the question is the same: what is the smallest set of rights that lets this thing do its job?

### Administrator versus standard accounts

The everyday version of least privilege is the choice between two kinds of accounts. A standard user account can do routine work, reading and writing files, using applications, browsing the web, but cannot quietly change system settings. An administrator account carries broad rights to install software, alter system configuration, and manage other accounts. Microsoft's documentation on Windows user account control observes that running as a standard user helps maximize security, and that even administrator accounts access resources and run apps in the security context of a standard user unless a specific task is approved to run elevated. The pattern to live by: do daily work on a standard account, and use administrator rights only when a task genuinely requires them, approving each elevation separately. That way, a malicious download or a compromised session does not automatically run with full control of the machine.

### Privilege creep and access reviews

Access has a tendency to accumulate. Every project, every role change, every shared folder adds permissions, and almost nothing removes them. Over time, people hold access from jobs they left years ago. This buildup has a name: privilege creep. OWASP makes the underlying dynamic explicit, noting that it is easier to grant users additional permissions than to take away ones they previously enjoyed. The fix is a practice, not a one-time cleanup: regular access reviews. On a schedule, an organization checks who can do what, asks whether each permission still matches the person's current job, and removes what does not. Reviews catch both stale access and over-broad grants before a compromise turns them into damage. Individuals can apply the same habit informally: when you leave a team or finish a project, ask for your extra access to be removed.

### The honest framing

Least privilege is a strong control, but it is not magic. It reduces the damage a compromised account can do; it does not prevent the compromise. An attacker who takes over a limited account still gets whatever data that account can reach. Phishing can still trick the user, software can still contain vulnerabilities, and deciding what a job "needs" is always a judgment call. Least privilege works best as one layer among several, alongside strong authentication, patching, and monitoring, and it keeps working only if access is reviewed and trimmed as jobs change. Think of it as containing risk, not eliminating it.

## Key Vocabulary

- **least privilege** — The security principle that each user, program, or service is granted only the minimum access needed to perform its function.
- **privilege** — A right granted to an account, such as reading a file, installing software, or changing system settings.
- **standard user account** — An everyday account that can do routine work but needs separate approval for system-level changes.
- **administrator account** — An account with broad rights to change system settings, install software, and manage other users.
- **elevation** — Temporarily running a task with administrator rights after approval, rather than always running with them.
- **privilege creep** — The gradual accumulation of access rights that are no longer needed, because old permissions were never removed.
- **access review** — A periodic check of who holds which permissions, removing rights that no longer match the job.
- **permission** — A specific authorization that lets an account perform a particular action on a resource.

## Eli-10

Least privilege is the rule of giving every account and every program only the keys it actually needs. Your everyday account can do your everyday work. The special administrator power, installing software, changing system settings, is a separate set of keys you use only when a task demands it. If someone steals your password, they get your keys, not the special ones. The same rule applies to software: a program that prints invoices does not get to read everyone's salaries. Access you no longer need should be taken back, because old keys pile up. It is not a magic shield, but it makes any break-in smaller.

## Eli's Analogy

A hotel key card is a good picture. Your card opens your room and maybe the gym, but not the staff office, the supply closet, or other guests' doors. If you lose the card, whoever finds it can reach only the places the card was allowed to open. The hotel could give every guest a master key, but it does not, because the cost of one lost master key would be enormous.

The comparison has limits. A hotel decides your card's doors once; in a computer system, permissions change constantly as jobs and projects change, which is why reviews are needed. And a lost key card is simply gone, while a stolen password can be used invisibly alongside your legitimate activity, so detecting the misuse matters as much as limiting it.

## Worked Example

At a small publishing house, the accounts assistant Tomás signs in with a standard user account. When the office needed a new printer driver installed, the IT person ran the installer under a temporary administrator approval instead of giving Tomás permanent administrator rights. One afternoon Tomás's password is stolen through a phishing email. Because his account can read only the documents his job requires and cannot change system settings, the attacker can read a few shared files but cannot install spyware or disable the backup system. The damage stays small because the account never carried more access than the job needed.

## Common Mistakes

- **Doing daily work in an administrator account for convenience.** Run daily tasks in a standard account and approve administrator rights only for the specific task that needs them. An always-on administrator session hands full control to any mistake or compromise.
- **Assuming least privilege means giving everyone the same modest level of access.** Least privilege matches rights to each role's actual needs. Two people at the same level can need entirely different access, and that is the point.
- **Keeping old access "just in case" after changing roles or finishing a project.** That is privilege creep. Unneeded access should be removed; if a real need appears later, it can be granted again.
- **Treating least privilege as a complete security plan.** Least privilege limits the damage a compromise can do, but it does not stop the compromise. Strong authentication, patching, and monitoring still matter.

## Compare / Contrast

- **Standard user account vs. Administrator account** — A standard account does daily work with limited rights and elevates for specific tasks; an administrator account holds broad rights and should use them only when needed. Least privilege says daily life belongs in the standard account.
- **Least privilege vs. Authorization** — Authorization is the decision about what an identity may do; least privilege is the principle that shapes how much access to grant in the first place. Authorization answers "can they?" while least privilege answers "how little is enough?"
- **Privilege creep vs. Deliberate delegation** — Creep is unplanned accumulation of rights nobody ever removed; delegation is a conscious, recorded grant that can be reviewed and revoked. One is drift, the other is a decision.

## Key Takeaway

Least privilege means giving every account, program, and service only the access its job requires. It limits how much damage a compromise can do, but it reduces risk rather than removing it, so access must be reviewed and trimmed as jobs change.

## Practice Question Bank

**Q1.** Which statement best captures the principle of least privilege?

- A. Giving each user, program, and service only the access its job requires.
- B. Giving every account the same modest level of access so nobody feels left out.
- C. Giving administrators full access so they can respond to problems quickly.
- D. Removing all access until a user proves they need it.

**Key: A.** Least privilege grants each entity the minimum access needed to perform its function, as NIST and OWASP describe. Uniform access ignores job differences, blanket administrator access maximizes the damage of any compromise, and removing all access would stop work entirely.

**Q2.** Rosa does her daily work on a standard user account and approves an administrator prompt only when she needs to install software. What is the security reasoning behind this setup?

- A. Standard accounts cannot be hacked, so this setup makes her machine invulnerable.
- B. This follows least privilege: routine work runs with limited rights, and administrator power is used only for specific tasks.
- C. It is risky, because standard accounts make software installation impossible.
- D. It only matters for organizations; individuals have no reason to separate accounts.

**Key: B.** Running as a standard user keeps daily activity in a limited security context, and elevation grants administrator power only when a task needs it, which Microsoft's User Account Control documentation describes. It does not make a machine unhackable, standard accounts can still install software with approval, and the pattern matters for individuals too.

**Q3.** An accountant's login is compromised, and the account held write access to a customer database it never needed. Why does least privilege make this situation worse than it should be?

- A. The extra access is harmless, because the attacker cannot use rights the accountant never exercised.
- B. The write access should stay, because revoking it would slow the accountant down.
- C. The unused write access widens what the attacker can reach, and the account should have held only the access its job needed.
- D. The attacker is limited to the database, so no other data is at risk.

**Key: C.** An attacker inherits exactly what the account holds, so every unneeded permission enlarges the potential damage, the outcome OWASP warns about when least privilege is not enforced. Unused rights are still usable by an attacker, and convenience does not justify them.

**Q4.** An employee moved between three roles over six years, and nobody ever removed the folder permissions from the earlier roles. What does this situation describe, and which practice fixes it?

- A. Password reuse, fixed by enforcing longer passwords.
- B. Phishing, fixed by better spam filtering.
- C. Least privilege, fixed by giving everyone equal access.
- D. Privilege creep, fixed by regular access reviews that remove unneeded rights.

**Key: D.** Permissions that accumulate from past roles and are never removed are privilege creep; OWASP notes it is easier to grant permissions than to take them away. The remedy is periodic access reviews, not passwords, filters, or equal access.

**Q5.** Which setup best applies least privilege to a program that serves a website?

- A. The web server process runs with only the permissions needed to serve pages, not to change system files.
- B. The web server runs as an administrator so it can recover from any error.
- C. The web server is granted every permission at install time just in case.
- D. The web server shares a single all-purpose account with the backup system.

**Key: A.** Programs act under an identity too, so they should hold only the access their task requires, the same reasoning behind AWS's guidance to grant only the permissions required to perform a task. Running as an administrator or granting everything maximizes the damage a compromised process can do.

## Sources

- NIST Computer Security Resource Center Glossary — least privilege: https://csrc.nist.gov/glossary/term/least_privilege
- OWASP Cheat Sheet Series — Authorization Cheat Sheet (Enforce Least Privileges): https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- Microsoft Learn — Zero Trust overview (Use least privilege access): https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview
- Microsoft Learn — How User Account Control works: https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/how-it-works
- AWS Identity and Access Management User Guide — IAM Best Practices: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

## Related Topics

- [Authorization](cybersecurity:foundations:authorization) — how systems decide and enforce what an identity may do
- [Authentication](cybersecurity:foundations:authentication) — proving who you are before access is granted
- [Password Security](cybersecurity:foundations:password-security) — keeping the credentials that lead to accounts safe
- [Attack Surface](cybersecurity:foundations:attack-surface) — limiting what attackers can reach
- [Zero Trust Basics](cybersecurity:foundations:zero-trust-basics) — the model in which least privilege access is a core principle

## Editorial Metadata

- **Topic ID:** cybersecurity:foundations:least-privilege
- **Editorial status:** READY_TO_PUBLISH
- **Research date:** 2026-08-21
- **Provenance:** EliExplains original synthesis. Facts synthesized from reference-only sources (NIST, OWASP, Microsoft Learn, AWS documentation); no source prose reproduced. All examples are original to this lesson.
