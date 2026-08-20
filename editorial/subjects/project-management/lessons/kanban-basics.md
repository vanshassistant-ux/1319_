# Kanban Basics

## In 30 Seconds

Kanban is a strategy for improving how value moves through a workflow. A Kanban board makes work and its states visible, while explicit policies say how an item may move. A work-in-progress limit helps a group avoid starting more active work than it can handle. Kanban is not just a board and does not require Scrum's roles, Sprints, or ceremonies. It uses observations of flow to support context-sensitive improvement rather than promising a particular speed or outcome.

## Why This Matters

When work is invisible, people can confuse a long list of started tasks with real progress. Kanban supplies vocabulary for noticing where items wait, become blocked, or remain unfinished. That visibility can support more realistic conversations about capacity, trade-offs, and improvement. It also prevents a common category error: treating every board as a complete Kanban system or treating Kanban as a synonym for Scrum. This is general education, not a prescription for a workplace, a staffing plan, or an implementation decision.

## Learning Objectives

- Define Kanban as a flow-oriented strategy rather than merely a task board.
- Identify the key elements that make a workflow explicit and visible.
- Explain how work-in-progress control can create a pull signal.
- Distinguish work item age, cycle time, throughput, and work in progress.
- Compare Kanban with Scrum without treating either approach as universally superior.

## The College Version

### Kanban makes a workflow discussable

Kanban is a strategy for optimizing the flow of value through a process. In plain language, it helps people make the path of work visible, pay attention to what is actively underway, and improve the path based on what they observe. Its focus is flow: the movement of a work item from a defined start to a defined finish. A board is often the visible representation of this approach, but the board alone is not Kanban. A collection of columns labeled To Do, Doing, and Done can be useful, yet it becomes a stronger management tool only when people share an explicit meaning for the work and use that information to manage it.

The Kanban Guide calls this shared meaning a Definition of Workflow. At minimum, it identifies the units of value moving through the system, what counts as started and finished, the states through which items pass, how work in progress is controlled, and the policies for movement between states. It also includes a service level expectation: a probability-based forecast grounded in historical cycle-time information once enough data exists. The point is not to impose the same columns on every group. A research team, a library service, and a software team may all define useful work items and states differently. The point is to make their actual workflow sufficiently explicit that they can see and discuss it.

Visualizing work has an informational purpose. It can reveal that an item is waiting for review, that several items are blocked by the same dependency, or that a queue has grown between two states. It does not by itself decide what should be done or who has authority to decide it. The board should therefore show enough context for participants to reason about the work, including relevant policies or blockers where appropriate. A board that hides important approval, quality, accessibility, or safety obligations may give a misleading picture of flow.

### Work-in-progress control supports pull, not a race to start

Work in progress, often shortened to WIP, means items that have started but have not finished according to the workflow's stated boundaries. Controlling WIP means setting and actively respecting an agreed limit on the number of active items in all or part of that workflow. A limit is not a moral test of individual productivity. It is a way to make capacity and queues visible. If a state is at its agreed limit, the group can finish, unblock, or otherwise resolve existing items before selecting additional work for that state.

This relationship is commonly described as pull. A new item is selected when there is a clear signal of capacity, rather than being pushed into active work simply because it is available. The Kanban Guide explains that WIP control should create this pull behavior: when active work drops below the control, selecting another item may be appropriate; selecting beyond the control is not. The guide also notes that acceptable exceptions should be explicit. This is an important qualification. A WIP limit is not a magic number and does not eliminate judgment about urgent work, dependencies, or organizational constraints. It makes the choice visible so that exceptions can be considered rather than silently becoming the normal state.

Consider a hypothetical communications team with a review column limited to three active items. If three articles are awaiting review, starting a fourth article may increase the queue without helping a completed article reach its audience. The team might instead review one item, clarify a blocker, or jointly decide whether a stated exception applies. This is not an instruction for a real organization to choose a limit of three. It illustrates the reasoning: a limit changes the question from "What else can we start?" to "What would help existing work move responsibly toward finished?"

### Flow metrics describe different parts of the same system

Kanban's minimum flow metrics are WIP, throughput, work item age, and cycle time. WIP is a count of started, unfinished items at a point in time. Throughput is the exact number of items finished during a unit of time, such as a week. Work item age is how much elapsed time has passed since a currently unfinished item started. Cycle time is the elapsed time from an item's start to its finish. These measures are related, but they answer different questions.

For example, a team might finish six items in one week. That is a throughput observation, not a claim that each item took one week. One unfinished item might have been active for nine days; that is its work item age. A finished item that began Monday and finished Thursday has a cycle time of three elapsed days if the workflow uses calendar days. The definitions of start, finish, item size, and time unit need to be clear before comparisons mean much. A count of tiny items and a count of large investigations should not be treated as interchangeable without context.

Metrics are evidence for questions, not automatic performance grades. The Kanban Guide says the measures are meaningful only when they inform one or more Kanban practices. A rising work-item age can prompt a conversation about a blocker; it does not prove that a particular person failed. Throughput history can inform a forecast with uncertainty; it does not guarantee future output. If people use the numbers to conceal variation, compare incomparable work, or punish individuals, the measurements can distort the very workflow they were meant to clarify.

### Kanban and Scrum can coexist but are not interchangeable

Kanban is often discussed alongside Agile and Scrum, but the labels name different things. Agile is a broad family of adaptive ideas. Kanban focuses on defining, visualizing, actively managing, and improving a workflow in pursuit of better flow. Scrum is a specific framework for complex work. The Scrum Guide defines a Scrum Team, named accountabilities, a Product Backlog, and time-bounded Sprints with defined events. Those are Scrum mechanics, not minimum Kanban requirements.

A group can use a Kanban board without using Scrum, and a Scrum Team may use flow-oriented visualization or metrics while remaining responsible for Scrum's framework. Combining practices does not erase their distinctions. It is more accurate to ask which practice is being used, what purpose it serves, and what commitments govern the work than to attach a label and assume the answer follows. Neither framework is a universal solution. The Kanban Guide explicitly allows its practices to complement other approaches, while the Scrum Guide identifies Scrum's own defined structure.

The educational takeaway is modest but useful: choose vocabulary carefully. Calling every visual board "Scrum" obscures the formal elements that Scrum requires. Calling every board "Kanban" can obscure the need for a defined workflow, WIP control, explicit policies, active management, and improvement. A careful analysis first describes the system actually in use and then asks what evidence could improve its flow without overlooking the work's real constraints.

## Key Vocabulary

- **Kanban:** A strategy for optimizing the flow of value through a workflow by defining, managing, and improving that workflow.
- **workflow:** The defined path through which work items move from a stated start to a stated finish.
- **Kanban board:** A visualization that makes the defined workflow and relevant information about work items transparent.
- **work in progress:** Work items that have started but have not yet finished within the agreed workflow boundaries.
- **pull system:** An arrangement in which a new item is selected in response to available capacity rather than pushed into already-full active work.
- **throughput:** The exact count of work items completed during a stated unit of time.
- **work item age:** Elapsed time from a currently unfinished work item's start until the present.
- **cycle time:** Elapsed time from a work item's defined start until its defined finish.

## Eli-10

Imagine a school newspaper has story cards on a wall. The cards show whether a story is being researched, written, checked, or ready to publish. That wall helps everyone see what is really happening. But the useful part is not only moving cards. The group agrees what each step means, notices when too many stories are waiting in one step, and helps a story move before starting many more.

A WIP limit is like agreeing that only a few stories can be in editing at once. If editing is full, the group can help edit or solve a problem instead of adding another card to the pile. The goal is not to make people rush. It is to notice where work is stuck and make better choices together.

## Eli's Analogy

Kanban is like a small bakery's order rack. Each ticket shows where an order is, and a baker only takes a new oven job when there is space to bake it. The rack makes the queue visible so the team can finish orders instead of filling every counter with half-made pastries.

The analogy has limits. Project work is usually less uniform than pastries: items can differ greatly in size, need reviews, and depend on people outside the group. A visual board and a limit help people observe these facts, but they cannot decide priorities, remove every blocker, or guarantee a finish date.

## Worked Example

A hypothetical museum education team tracks exhibit-label revisions through Draft, Fact Check, Accessibility Review, and Ready. It defines a label as started when drafting begins and finished when it is ready for publication. The team agrees that no more than two labels may be in accessibility review at one time. When both review spaces are occupied, a third completed draft remains before that state instead of being marked as actively under review. One label has been in fact check for seven days, so its work item age prompts the team to ask whether a source question is blocking it. During the week, three labels become Ready; that is throughput for the week. The example does not show that a limit of two is right for every team or that the numbers alone determine an action. It shows how explicit states, a WIP control, and flow observations create a more informed conversation.

## Common Mistakes

- **Calling any task board a complete Kanban system.** A useful Kanban system also makes workflow definitions, policies, WIP control, active management, and improvement explicit.
- **Treating a WIP limit as a target for keeping every person busy.** A limit controls active work and can create a pull signal; it may reveal a need to finish or unblock work rather than start more.
- **Using throughput as if every work item has the same size or difficulty.** Throughput is an exact count, so interpret it with the workflow's item definitions, variation, and context.
- **Assuming Kanban requires Scrum roles or fixed-length Sprints.** Scrum is a distinct framework with its own defined accountabilities and events; they are not minimum Kanban requirements.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Work item age | Cycle time | Age measures elapsed time for an unfinished item through today; cycle time measures elapsed time from start to finish for an item that finished. |
| Work in progress | Throughput | WIP is a current count of started unfinished items; throughput is a count of completed items during a time period. |
| Kanban | Scrum | Kanban is a flow-optimization strategy; Scrum is a defined framework with named accountabilities, events, and Sprints. |
| Pull | Push | Pull selects work when capacity is available; push adds work regardless of the receiving stage's available capacity. |

## Key Takeaway

Kanban makes workflow and active work visible so that people can manage flow, not merely start more tasks. WIP controls and carefully interpreted flow metrics support informed improvement, while Kanban remains distinct from Scrum and from the broader idea of Agile.

## Practice Question Bank

1. **What does a Kanban board primarily make visible?**
   - A. A required set of Scrum roles.
   - B. A guarantee that work will finish on schedule.
   - C. The defined workflow and relevant information about work items. **Correct.**
   - D. Only a list of people assigned to tasks.

2. **Which statement correctly distinguishes work item age from cycle time?**
   - A. Age measures an unfinished item's elapsed time so far; cycle time measures elapsed time from start to finish for a finished item. **Correct.**
   - B. Age counts completed items per week; cycle time counts all unfinished items.
   - C. Age applies only to Scrum Sprints; cycle time applies only to Kanban boards.
   - D. They are two names for the same measurement in every workflow.

3. **A review stage has a WIP limit of two and already contains two active items. A third draft is ready. Which response best reflects pull behavior?**
   - A. Move the third draft into review anyway, because a ready item must start immediately.
   - B. Help finish or unblock review work, or make an explicit exception, before selecting the third item into that stage. **Correct.**
   - C. Delete one active item so the board looks less full.
   - D. Count the third draft as completed because it is waiting.

4. **Which feature belongs to Scrum rather than being a minimum Kanban requirement?**
   - A. Making workflow states visible.
   - B. Controlling work in progress.
   - C. Improving a workflow using observations.
   - D. Time-bounded Sprints with Scrum's defined events. **Correct.**

5. **A team completed six items last week. Which conclusion is justified from that observation alone?**
   - A. Every item took exactly one week from start to finish.
   - B. The team has six items currently in progress.
   - C. Its throughput for that stated week was six completed items. **Correct.**
   - D. It will complete exactly six items every future week.

## Sources

- Kanban Guides, [The Kanban Guide (May 2025)](https://kanbanguides.org/the-kanban-guide/2025.5/) — reference-only source for Kanban's current minimum practices and flow metrics.
- Ken Schwaber and Jeff Sutherland, [The Scrum Guide (2020)](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf) — reference-only source for the bounded contrast with Scrum.

## Related Topics

- Project Tracking
- Agile Basics
- Scrum Basics
- Quality Management
- Retrospectives

## Editorial Metadata

- Status: READY_TO_PUBLISH
- Research status: source-verified
- Rights: reference-only sources; no source prose adapted
- Researched: 2026-08-20
- Scope note: General project-management education; covers visual workflow, pull, WIP limits, and flow metrics at a high level. Excludes organization-specific implementation advice.
