# Requirements

## In 30 Seconds

Requirements turn stakeholder needs, constraints, and intended outcomes into statements that can guide a project’s result. Elicitation asks people what problem they experience and what conditions matter; documentation makes those findings reviewable; validation checks whether the statements fit intended use. Requirements are not a scope boundary, task list, or chosen design. Acceptance criteria are the observable conditions used to judge whether a requirement has been met.

## Why This Matters

A project can deliver exactly what a team built and still miss what people needed if the need was poorly understood or expressed. Clear requirements give stakeholders and builders a shared object to question: Does this represent the intended outcome? Is it inside the project boundary? How would someone recognize that it has been met? These questions reduce ambiguity without claiming that every uncertainty disappears. They apply across predictive, iterative, and hybrid work.

## Learning Objectives

- Define requirements as documented statements of needed conditions or capabilities connected to stakeholder needs and objectives.
- Distinguish stakeholder needs, requirements, project scope, and acceptance criteria.
- Explain why elicitation seeks needs, expectations, constraints, and relevant interfaces.
- Identify language that makes a candidate requirement more observable without prescribing a design.
- Analyze whether acceptance criteria demonstrate that a requirement has been met.

## The College Version

### Requirements translate needs into reviewable statements

A stakeholder may begin with a need rather than a ready-made requirement. A resident says, “I cannot tell whether the library’s meeting rooms are available.” A staff member says, “We need fewer phone calls about reservations.” An accessibility reviewer says, “The information must work with common assistive technology.” These are valuable inputs, but they differ in viewpoint and detail. Requirements work elicits needs, expectations, constraints, and relevant interfaces, then develops statements describing conditions or capabilities the result needs to satisfy. The task is not copying the loudest request into a document. It asks what outcome is needed, for whom, under which conditions, and with what evidence.

Elicitation means drawing information out rather than assuming it is complete. Depending on the project, evidence can come from interviews, observation, existing records, a prototype, or another appropriate way of learning about intended use. No technique is universally required. Different stakeholders expose different facts: a person who uses a service may describe a difficulty, an operator may identify a constraint, and someone affected indirectly may identify an accessibility or interface condition. Inputs can conflict or remain incomplete. Discovering disagreement is useful because it makes an assumption available for examination.

A requirement should let readers examine an intended condition rather than infer it from a vague aspiration. “The reservation information should be easy to use” names a concern but leaves key terms undefined. “A visitor can view a room’s available time slots for a selected date without creating an account” is more specific about a capability, though it may still need clarification about devices or accessibility. The statement identifies what the result must allow; it does not specify a database, screen layout, or vendor. That what-versus-how distinction preserves room for design while keeping the intended outcome visible.

### Scope, requirements, and acceptance criteria answer different questions

These concepts are connected but not interchangeable. Project scope is the boundary of the effort: it describes what work, result, or area is included and excluded at a chosen level. Requirements are the conditions or capabilities that the included result needs to meet. A scope statement for the hypothetical library project might say that the work covers public display of room availability but excludes changing the room-booking policy. Within that boundary, a requirement might state that a visitor can see available times for a selected room and date. Scope helps test whether a candidate requirement belongs in the effort; it does not state every condition the result must satisfy.

Acceptance criteria are observable conditions used to determine whether a particular requirement has been met. For the availability-display requirement, criteria might say that a reviewer can select a room and date, see current available slots, and receive a clear message when none are available. The criterion is not a wish such as “users will love the site,” and it is not a schedule promise such as “finish by Friday.” It describes evidence connected to one requirement. Projects may record criteria beside a requirement, in test material, or in another agreed form; the logical relationship is more important here than a particular format.

The boundary also prevents a common leap from need to design. “Residents need reliable availability information” is a need. “Use a blue calendar widget from a named supplier” is a design choice. A design choice can become relevant later, but it should not be disguised as the need itself. Separating them lets a team consider whether several designs could meet one requirement. It also makes constraints clearer. For example, “use existing calendar data” can be a constraint, while “the data refreshes every five minutes” is a candidate requirement that needs a reason and validation.

### Documentation and validation make meaning testable, not permanent

Documentation gives a requirement an identifiable form that stakeholders can review, question, and relate to an objective. It can include a label, source or rationale, statement, known assumptions or dependencies, and acceptance criteria. A traceability record can connect a stakeholder need or business objective to a detailed requirement and then to a test or review activity. That connection lets a reader ask why an item exists and what evidence is supposed to show it was met. It does not prove that the requirement is automatically correct, affordable, or complete.

Validation asks a different question from editing for grammar: if this requirement were satisfied, would the resulting product or service work appropriately in its intended-use environment? The question brings the learner back to the people and circumstances elicitation uncovered. A precisely worded requirement can still miss a user condition. For example, a display that shows availability only during the library’s open hours may be clear yet fail a need if residents normally plan visits at night. Reviewing scenarios, demonstrations, prototypes, or test results can provide evidence for validation, but the appropriate method depends on context.

Requirements can change as evidence improves. That does not make documentation useless. A dated, reviewable statement distinguishes what was understood earlier from what was learned later, and traceability can reveal which criteria or tests may need reconsideration. This is a conceptual lesson, not organizational change-control advice. It does not tell an organization who approves a change, what tool to buy, or how to negotiate competing requests. Its narrower claim is that visible links among needs, requirements, and evidence make reasoning about a project result more accountable.

## Key Vocabulary

- **stakeholder need:** A problem, desired outcome, constraint, or expectation expressed by someone connected to a project’s result.
- **requirement:** A documented condition or capability that a project result needs to satisfy in support of an objective.
- **elicitation:** The activity of drawing out and clarifying stakeholder needs, expectations, constraints, and relevant context.
- **project scope:** The defined boundary describing what a project effort or result includes and excludes at a chosen level.
- **acceptance criteria:** Observable conditions used to judge whether a particular requirement has been satisfied by a delivered result.
- **validation:** Checking whether a requirement or result fits its intended use and the need it is meant to address.
- **traceability:** The ability to follow a documented connection among a need, requirement, related decision, and supporting test or review evidence.

## Eli-10

Imagine the library wants people to find open meeting rooms without calling the front desk. That is the problem people are having, not yet a full requirement. The group talks with visitors, staff, and people who use accessibility tools to learn what matters. Then it writes a clear statement: “A visitor can see available times for a chosen room and date.” Now people can ask whether it is really needed and what would show it works.

The project’s scope is like the fence around a playground: this project covers showing availability, not changing the rules for booking rooms. Acceptance criteria are like the referee’s checks: choose a room and date, see available times, and get a useful message if none are open. Those checks do not choose colors or computer code; they show whether the stated requirement was met.

## Eli's Analogy

Requirements are like a recipe request for a school bake sale. “We need snacks that students with nut allergies can safely identify” states the need. A requirement can say that every snack has a visible ingredient label, while acceptance criteria describe what the label must show when someone checks it.

The analogy has limits. A project is not a recipe with one correct ingredient list. Stakeholders can have competing needs, and a real requirement may involve a service, policy boundary, or technical interface rather than an object. The analogy also does not decide who in an organization approves a requirement.

## Worked Example

River City Library hypothetically plans a public page for meeting-room availability. Elicitation reveals three inputs: visitors want to know open times before traveling, desk staff need the page not to claim that a room is reserved, and an accessibility reviewer needs information readable with assistive technology. The scope boundary is public availability display; changing reservation policy is excluded. The group writes a candidate requirement: “A visitor can select a room and date and view current available time slots.” Its acceptance criteria say a reviewer can make those selections, sees time slots or a clear no-availability message, and can reach the same information using keyboard navigation. The group has not selected a vendor or promised fewer calls. A later review can validate whether the statement and criteria reflect intended use.

## Common Mistakes

- **Treating one stakeholder’s preferred solution as the requirement.** First identify the underlying need or condition, then distinguish it from a possible design.
- **Using scope and requirements as synonyms.** Use scope for the project boundary and requirements for expected conditions or capabilities within it.
- **Calling a deadline or opinion an acceptance criterion.** Write criteria as observable evidence that a specific requirement has been met.
- **Assuming a well-formatted document proves fit with real use.** Validate against intended use and stakeholder needs; clear writing and valid content are different checks.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Stakeholder need | Requirement | A need expresses a problem, expectation, or desired outcome; a requirement states a condition or capability the result needs to satisfy in response. |
| Project scope | Requirement | Scope sets the included and excluded boundary of the effort; a requirement specifies a needed condition or capability within that boundary. |
| Requirement | Acceptance criterion | A requirement states what must be true or possible; acceptance criteria describe the observable conditions used to judge whether it has been met. |

## Key Takeaway

Requirements make stakeholder needs reviewable by expressing the conditions or capabilities a project result must satisfy. They work with, but are not identical to, scope boundaries and acceptance criteria; validation reconnects the statements to intended use.

## Practice Question Bank

1. **Which statement best describes a requirement in this lesson?**
   - A. A fixed calendar date for all project work.
   - B. A stakeholder’s unexamined preference for one design.
   - C. A documented condition or capability the project result needs to satisfy. **Correct.**
   - D. A complete list of every task the team will perform.

2. **A project scope says it covers displaying room availability but excludes changing reservation policy. Which item is most likely a requirement within that scope?**
   - A. Replace the library’s reservation policy with a new policy.
   - B. Use a named vendor’s blue calendar widget.
   - C. Promise that no visitor will ever need assistance.
   - D. Let a visitor choose a room and date to view current available time slots. **Correct.**

3. **Which item is an acceptance criterion for the requirement that a visitor can view available times for a selected room and date?**
   - A. A reviewer can select a room and date and see available time slots or a clear no-availability message. **Correct.**
   - B. The project includes public availability display and excludes policy changes.
   - C. Visitors say that scheduling is an important problem.
   - D. The team begins work before the end of the month.

4. **Why is “the page should be easy to use” a weak requirement on its own?**
   - A. It is always outside the scope of a project.
   - B. It does not identify an observable condition or capability that reviewers can examine without further clarification. **Correct.**
   - C. It is an acceptance criterion with too many details.
   - D. It proves that a particular software design has already been selected.

5. **What is the most accurate purpose of traceability in requirements work?**
   - A. To guarantee that requirements never change.
   - B. To replace all stakeholder conversations with a spreadsheet.
   - C. To choose the technical design before needs are understood.
   - D. To make the links among a need, requirement, and related test or review evidence available for examination. **Correct.**

## Sources

- Project Management Institute, [Creating clear project requirements: differentiating what from how](https://www.pmi.org/learning/library/clear-project-requirements-joint-application-design-6928) — reference-only source for stakeholder involvement, boundaries, and the distinction between needs and low-level design.
- U.S. Government Accountability Office, [Information Technology: Education Needs to Address Student Aid Modernization Weaknesses](https://www.gao.gov/assets/730/723450.pdf) — public-domain, bounded example for documenting needs, traceability, and acceptance against requirements.
- U.S. Government Accountability Office, [Air Traffic Control: System Management Capabilities Improved, but More Can Be Done to Institutionalize Improvements](https://www.gao.gov/assets/gao-04-901.pdf) — public-domain, bounded systems example for elicitation and validation.

## Related Topics

- Project Initiation
- Project Charter
- Project Scope
- Quality Management
- Change Control

## Editorial Metadata

- Status: READY_TO_PUBLISH
- Research status: source-verified
- Rights: reference-only PMI source and public-domain GAO sources; no source prose, figures, or templates adapted
- Researched: 2026-08-20
- Scope note: General project-management education on requirements; excludes organization-specific procedures, templates, procurement, legal advice, detailed scope creation, and change-control instructions.
