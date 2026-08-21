# Authorization

## In 30 Seconds

Authorization is the decision about what an authenticated person is allowed to do. After a system verifies who you are, it separately decides whether your account may open a file, run a feature, or call an API. That second decision is authorization. Permissions can hang off roles or off attributes, and they apply within a scope. The guiding rule is to grant the minimum access needed, a principle explored fully in its own lesson.

## Why This Matters

Authentication opens the door; authorization decides which rooms you may enter. Most people have signed in successfully and still been denied, a folder they cannot open, a report they cannot see. That is the system working as designed. When authorization is missing or too generous, anyone whose identity is accepted, including an attacker holding stolen credentials, can reach far more than they should. Understanding who decides, and on what basis, turns a denial from a mystery into a check you can reason about, and it explains why organizations watch permissions as carefully as passwords.

## Learning Objectives

- Define authorization as the decision of what an authenticated person is allowed to do.
- Distinguish authentication from authorization, using an example in which identity is proven but an action is still denied.
- Name two access control models, role-based (RBAC) and attribute-based (ABAC), and state the basic idea of each.
- Explain what permissions attach to, files, folders, features, and APIs, within a scope.
- Explain why over-permissioned accounts are dangerous and why identity alone is not enough to grant access.

## The College Version

### What authorization is

Authorization is the process of deciding whether a requested action is approved for a specific person. OWASP's developer guidance, quoting NIST, defines authorization as the process of verifying that a requested action or service is approved for a specific entity. The word "approved" carries the weight. When you click a link or open a file, the system checks not just who you are but whether your account has been granted that specific action. That check is separate from proving identity. OWASP makes the point explicitly: a user who has been authenticated is often not authorized to access every resource and perform every action the system can perform. Authorization is the layer that turns identity into controlled access, the difference between knowing you are you and letting you do things under your own name.

### Authentication versus authorization

The two concepts blur because a single login performs both. Authentication answers "who are you?": it verifies that the person presenting credentials is the account's owner, using something you know, something you have, or something you are. The details belong to the authentication lesson; here the distinction is the point. Authorization answers "what may you do?": it decides whether that verified identity is allowed to perform a specific action. Consider logging in to an employee portal. The password check is authentication: the system accepts that you are you. The same session then asks whether your account may open the payroll module. That is authorization, and it can deny you even after a perfect login. OWASP's cheat sheet stresses the distinction: authorization verifies that a requested action is approved, and it is distinct from authentication, which verifies identity. The two decisions fail independently, and both must pass before anything sensitive happens.

### Permissions and scopes

Permissions describe the actions an account may take: read a document, edit a spreadsheet, delete a record, call an application programming interface. In practice a permission attaches to a resource and an operation on that resource, which is why you meet them on files, folders, application features, and APIs. A permission is usually paired with a scope, the set of resources it applies to. Microsoft's role-based access control documentation is explicit: a role definition is a collection of permissions, typically actions such as read, write, and delete, and the scope is the set of resources the access applies to. The same read permission can be granted narrowly, for one document, or broadly, for every document in the company. Getting the pairing right, the right action on the right resource for the right person, is the whole craft of access control.

### Access control models: RBAC and ABAC

Organizations rarely write a permission for every person on every file; they use models that scale. Role-based access control (RBAC) assigns permissions to roles and people to roles. NIST describes RBAC as employing predefined roles that carry a specific set of privileges, with subjects assigned to those roles: a role like Manager carries different access than a role like Analyst. When someone changes jobs, the role changes and access follows. Attribute-based access control (ABAC) decides each request by evaluating attributes, characteristics of the person, the resource, the requested operation, and the environment, against policies. NIST's ABAC standard defines the method exactly that way: authorization determined by evaluating attributes of the subject, object, requested operations, and in some cases environment conditions against policy. A hospital might admit a nurse to a patient record only when the patient is on the nurse's ward and the request arrives during a shift. RBAC is common because roles mirror how organizations are structured; ABAC is more flexible and more complex. Both serve the same end: granting exactly the access that is justified.

### When authorization fails, and why it matters

Authorization failures are common and costly. OWASP ranked broken access control as the most concerning web security vulnerability in its 2021 Top 10. One frequent shape of failure is the over-permissioned account: a person holding far more access than the job requires, often because permissions accumulated over years or were copied from a colleague's profile. OWASP warns that failing to enforce least privilege, giving users only the minimum privileges necessary to complete their job, can jeopardize the confidentiality of sensitive resources. Least privilege has its own lesson; here the point is that generous permissions are never harmless. Every extra permission is a door an attacker can use if the account is compromised. That is why identity alone is not enough: proving you are you should never, by itself, grant access to anything. The permission check is the guard between a verified identity and the damage it could do, it must deny by default, and it must run on every request.

## Key Vocabulary

- **authorization** — The process of deciding whether a requested action is approved for a specific person or account.
- **authentication** — The process of verifying that someone is who they claim to be; the identity check that runs before permission checks.
- **permission** — An approved action an account may take, such as reading a file or calling an API.
- **scope** — The set of resources that a permission applies to.
- **role-based access control (RBAC)** — An access control model that assigns permissions to job roles and assigns people to those roles.
- **attribute-based access control (ABAC)** — An access control model that grants or denies each request by evaluating attributes of the person, resource, operation, and environment against policies.
- **least privilege** — The principle of giving an account only the minimum access needed to do its job.
- **deny by default** — The rule that a request is denied unless a permission explicitly allows it.

## Eli-10

Logging in proves who you are. Authorization decides what you may do next. After the computer checks your password, it checks a separate list: can this account open this file, press this button, call this service? Two common systems build that list differently. Role-based access control gives everyone with the same job the same list: all designers get designer access. Attribute-based access control checks facts about you and the request, your team, your location, the time of day, against rules before saying yes. And a safe system says no unless a rule says yes: deny by default.

## Eli's Analogy

Think of a hotel. The front desk checks your ID and confirms your reservation: that is authentication. The keycard they hand you is authorization. Your card opens your room and the gym but not the manager's office or the supply closet, because the hotel decided which doors your card may open, not which doors exist. A staff card that opens every room is the over-permissioned account: convenient to carry, dangerous if lost.

The comparison has limits. A hotel keycard is issued once and its doors stay fixed until checkout, while computer permissions can change with every request, every role change, and every policy update. And a lost card is a physical object someone must find and use, while a compromised account can be used remotely, in seconds, from anywhere, so the limits on digital access matter more than the limits on a card.

## Worked Example

Marisol joins a shipping company as a billing clerk. Her manager sets up her account with the role Billing Clerk, which carries read and edit permissions on invoices but nothing on employee salaries. When Marisol opens the invoices folder, the system finds the read permission and lets her in. When she clicks the salary report, the same system checks again, finds no matching permission, and shows a denial. She also receives a link to a customer API; the permission on that API covers only her region, so calls for other regions are refused. Every request is checked, and the default answer is no.

## Common Mistakes

- **Thinking authentication and authorization are the same check.** A login performs both, but they are separate decisions made at different moments. You can be verified and still denied.
- **Assuming a successful login means you should be able to do everything.** An authenticated account is authorized only for what its permissions allow; OWASP stresses that authenticated users are often not authorized for every action.
- **Treating an over-permissioned account as harmless just in case.** Every extra permission enlarges what an attacker can reach if the account is compromised; OWASP ranked broken access control as the most concerning web vulnerability in its 2021 Top 10.
- **Confusing the two access control models.** RBAC grants access through roles people join; ABAC evaluates attributes against policies on each request. Both exist to grant justified access.

## Compare / Contrast

- **Authentication vs. Authorization** — Authentication verifies who you are; authorization decides what you may do. You can pass the first and fail the second.
- **RBAC vs. ABAC** — Roles carry permissions and people join roles; ABAC evaluates attributes of the person, resource, operation, and environment against policies on each request. Roles are simpler; attributes are more flexible.
- **Permission vs. Scope** — A permission names an action; the scope names the resources that action applies to. Read access means different things at different scopes.

## Key Takeaway

Authorization is the decision of what an authenticated person may do. Identity alone is never enough: every action needs a permission check, permissions should be scoped and minimal, and the safe default is to deny.

## Practice Question Bank

**Q1.** What does authorization decide?

- A. Which actions an authenticated person is allowed to perform
- B. Whether a person is who they claim to be
- C. Whether a password is strong enough
- D. Whether data is encrypted in transit

**Key: A.** Authorization decides whether a specific action is approved for a specific person, as OWASP's definition makes clear. Verifying identity is authentication, and password strength and encryption are different controls.

**Q2.** Which statement best captures the relationship between authentication and authorization?

- A. Authentication decides what you may do; authorization proves who you are.
- B. Authentication verifies who you are; authorization decides what you may do.
- C. They are two names for the same identity check.
- D. Authorization must always happen before authentication.

**Key: B.** OWASP distinguishes the two: authentication verifies an entity's identity, while authorization verifies that a requested action is approved. The other options reverse the roles or merge the two checks.

**Q3.** A design studio gives every account a role: Designer or Project Manager. A designer account tries to delete a shared client folder and is refused. Under role-based access control, what most directly explains the refusal?

- A. The designer's password was rejected at login.
- B. The folder is encrypted and the designer lacks the key.
- C. The Designer role does not include the delete permission for that folder.
- D. The designer's account has too many attributes.

**Key: C.** In RBAC, permissions belong to roles and accounts act through their role. If the Designer role lacks the delete permission, the check fails regardless of login success. The refusal is a permission decision, not a password, encryption, or attribute problem.

**Q4.** An intern whose only job is preparing slide decks has an account with full administrator rights on the company system. Why is this a security problem?

- A. Administrator rights make the intern's slides harder to edit.
- B. The account will be locked after too many failed logins.
- C. Slide preparation requires encryption, not permissions.
- D. The account has far more access than the job needs, so a compromise of it endangers everything.

**Key: D.** This is an over-permissioned account: access far beyond what the job requires. OWASP ties the failure to enforce least privilege to jeopardized confidentiality of sensitive resources, and every extra permission is reachable if the account is compromised. The other options miss the access-control problem entirely.

**Q5.** A hospital's system lets a nurse open a patient's record only when the patient is on the nurse's ward and the request happens during the nurse's scheduled shift. Which access control model does this describe?

- A. Attribute-based access control (ABAC), because ward and shift are attributes evaluated against policy.
- B. Role-based access control (RBAC), because the nurse has a job title.
- C. Authentication, because the nurse's identity is being verified.
- D. Deny-by-default, because no permissions exist at all.

**Key: A.** ABAC decides each request by evaluating attributes of the subject, object, operation, and environment, here the nurse's ward and the time of the request, against policies, as NIST's ABAC standard defines. A role alone would not capture the shift condition, and the scenario describes permission checks, not identity verification or an absence of permissions.

## Sources

- OWASP Authorization Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- NIST Special Publication 800-162: Guide to Attribute Based Access Control (ABAC) Definition and Considerations — https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-162.pdf
- Microsoft Learn: What is Azure role-based access control (Azure RBAC)? — https://learn.microsoft.com/en-us/azure/role-based-access-control/overview
- NIST SP 800-53 Rev. 5: Security and Privacy Controls for Information Systems and Organizations — https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf

## Related Topics

- cybersecurity:foundations:authentication
- cybersecurity:foundations:least-privilege
- cybersecurity:foundations:mfa
- cybersecurity:foundations:vulnerabilities
- cybersecurity:foundations:zero-trust-basics

## Editorial Metadata

- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21
- Provenance: EliExplains original synthesis. Definitions of authorization, RBAC, ABAC, permissions, and scopes synthesized from OWASP, NIST SP 800-162, Microsoft Learn, and NIST SP 800-53 into original explanatory prose with new examples; reference-only sources, no source prose adapted.
