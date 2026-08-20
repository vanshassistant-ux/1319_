# Dependencies

## In 30 Seconds

A dependency is a logical relationship that says how one planned activity relates to another. Finish-to-start means one activity must finish before the next can start; start-to-start and finish-to-finish allow specific kinds of overlap; start-to-finish is a rare reverse relationship. Dependencies can be internal to a project or external, involving something outside its control. Recording the relationship, its reason, assumptions, and constraints makes the current plan easier to question and update; it does not guarantee timing.

## Why This Matters

A calendar can show dates without explaining why work is ordered that way. Dependencies expose those reasons: a review may need a draft, two activities may begin together, or a project may need information from outside the team. That visibility helps people distinguish a genuine condition from a habit or an unstated guess. It also prevents a common error: treating an outside approval, delivery, or decision as though the project can command it. Learning to state dependencies precisely improves discussion of a plan without claiming to predict its finish date or calculate a critical path.

## Learning Objectives

- Define a dependency and distinguish predecessor and successor activities.
- Explain FS, SS, FF, and SF relationships.
- Distinguish internal from external dependencies.
- Identify the role of assumptions and constraints in dependency documentation.
- Apply dependency concepts without calculating a critical path or estimating a schedule.

## The College Version

### Dependencies state a relationship, not merely two dates

A dependency is a logical relationship between planned activities. It says that an event concerning one activity affects when another activity may start or finish. The activity supplying the condition is the predecessor; the activity affected by it is the successor. These labels describe the relationship, not job rank or importance.

The central question is not which date comes first. It is what condition connects the activities. A review that needs a completed draft has a real dependency; two activities that happen on consecutive dates might not. A dependency models a relationship using current information, not a guaranteed date.

### Four relationship types describe different conditions

Finish-to-start (FS) means a successor cannot start until its predecessor finishes. Start-to-start (SS) means a successor cannot start until its predecessor starts. Finish-to-finish (FF) means a successor cannot finish until its predecessor finishes. These relationships can express serial work or limited overlap; none requires an activity to happen immediately at the boundary.

Start-to-finish (SF) means a successor cannot finish until its predecessor starts. It is the fourth possible combination but uncommon and easy to misread. A shift handover is a useful illustration: the current shift cannot end until a replacement shift has begun. State the underlying condition plainly rather than using a complicated label without rationale.

### Internal, external, assumptions, constraints, and documentation

Internal dependencies connect activities within a project. External dependencies connect the project to an event, information source, or activity outside its boundary. An external dependency should not be treated as something the team controls.

An assumption is treated as true for planning now; a constraint is a limit that narrows available choices. A lightweight dependency record can identify the predecessor, successor, relationship type, internal or external boundary, rationale, source, assumptions, constraints, and review status. It makes the current logic inspectable but does not control an outside party, estimate durations, calculate a critical path, or decide approvals.

## Key Vocabulary

- **dependency:** A logical relationship in which one planned activity affects when another activity may start or finish.
- **predecessor:** The activity whose start or finish provides a condition for a related successor activity.
- **successor:** The activity whose start or finish is affected by a stated relationship with a predecessor.
- **finish-to-start:** A relationship in which the successor cannot start until the predecessor activity has finished.
- **start-to-start:** A relationship in which the successor cannot start until the predecessor activity has started.
- **finish-to-finish:** A relationship in which the successor cannot finish until the predecessor activity has finished.
- **start-to-finish:** A less common relationship in which the successor cannot finish until the predecessor activity has started.
- **external dependency:** A relationship tied to activity, information, or an event outside the project’s own schedule or boundary.
- **constraint:** A limit or condition that restricts the available ways project work can be planned or performed.

## Eli-10

Imagine a school play. Before actors rehearse with finished props, the props must be ready. That is a dependency: one thing changes what another thing can do. Most dependencies are simple, but some work can overlap. The play may also wait for the school to confirm that the auditorium is available; that is external because the group does not control the confirmation.

Dependencies are like rules for connecting pieces in a domino setup. The comparison has limits: projects involve people and changing conditions, not a fixed row of dominoes. It does not calculate a critical path or choose dates.

## Worked Example

River City Library hypothetically plans a one-evening digital-skills workshop. Preparing the draft handout and beginning accessibility review have an SS relationship: review can begin only after drafting begins. Finishing the handout and completing review have an FF relationship: review cannot finish until the version being reviewed is complete. A community partner’s projector confirmation is an external dependency. The record labels its source and notes an assumption about compatibility. It clarifies the plan but does not guarantee the partner’s action or decide a response to change.

## Common Mistakes

- **Calling every pair of consecutive calendar entries a dependency.** State the actual condition connecting activities; dates alone do not prove logic.
- **Reading FS as an immediate-start command.** It prevents an earlier start but other conditions can still delay the successor.
- **Treating external work as team-controlled.** Label the boundary, source, and relevant assumption.
- **Using a label with no rationale.** Record why the link exists and what should prompt a review.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Finish-to-start | Start-to-start | FS blocks the successor’s start until the predecessor finishes; SS blocks it until the predecessor starts. |
| Finish-to-finish | Start-to-finish | FF blocks the successor’s finish until the predecessor finishes; SF blocks it until the predecessor starts. |
| Internal dependency | External dependency | An internal link stays inside the project plan; an external link reaches beyond the project boundary. |
| Assumption | Constraint | An assumption is currently treated as true; a constraint limits available choices. |

## Key Takeaway

Dependencies make plan logic visible. Choose a relationship type that states the real condition, distinguish internal from external reliance, and document assumptions and constraints without mistaking the record for a guaranteed date.

## Practice Question Bank

1. **Which statement best defines a finish-to-start relationship?**
   - A. The successor cannot start until the predecessor finishes. **Correct.**
   - B. The successor cannot finish until the predecessor starts.
   - C. Both activities must start at exactly the same time.
   - D. The activities have no relationship.

2. **A review cannot be completed until a guide is complete. Which relationship fits?**
   - A. Finish-to-start
   - B. Finish-to-finish **Correct.**
   - C. Start-to-start
   - D. Start-to-finish

3. **A community partner outside the team must confirm a projector. How should this be classified?**
   - A. Internal dependency
   - B. Start-to-finish relationship
   - C. External dependency **Correct.**
   - D. Duration estimate

4. **Which description best fits start-to-finish?**
   - A. The successor starts only after the predecessor finishes.
   - B. The successor starts only after the predecessor starts.
   - C. The successor finishes only after the predecessor finishes.
   - D. The successor finishes only after the predecessor starts. **Correct.**

5. **Why record rationale, assumptions, constraints, and source information?**
   - A. To clarify current logic and make it reviewable. **Correct.**
   - B. To guarantee a preferred date.
   - C. To calculate the critical path automatically.
   - D. To replace communication with an outside party.

## Sources

- U.S. Government Accountability Office, [Schedule Assessment Guide: Best Practices for Project Schedules (GAO-16-89G)](https://www.gao.gov/assets/680/674404.pdf) — public-domain source for relationship types, predecessors/successors, and internal versus external links.
- Project Management Institute, [Follow the yellow brick road (the critical path)](https://www.pmi.org/learning/library/2019/04/07/15/24/critical-path-scheduling-work-breakdown-6212) — reference-only source for dependency categories and relationship terminology.

## Related Topics

- Work Breakdown Structure
- Scheduling
- Critical Path Basics
- Milestones
- Risk Management

## Editorial Metadata

- Status: READY_TO_PUBLISH
- Research status: source-verified
- Rights: reference-only PMI source and public-domain GAO source; no source prose, figures, or templates adapted
- Researched: 2026-08-20
- Scope note: General project-management education on dependencies; excludes schedule estimation, critical-path calculation, detailed network analysis, and organization-specific procedures.
