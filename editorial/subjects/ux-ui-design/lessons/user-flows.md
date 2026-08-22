# User Flows

## In 30 Seconds

A user flow is the sequence of steps a person takes to complete one task with a product, usually the typical or ideal route. Designers draw it as a flow diagram: boxes for screens, arrows for paths, diamonds for decisions, and endpoints where the task ends. Flows expose dead ends and detours before anything is built, but they are plans, not promises, because real users wander.

## Why This Matters

People judge a product one task at a time, and a task rarely lives on a single screen. A user flow shows the whole route for one job, finding a book, paying a bill, or booking a seat, so the team can see where people would get stuck before a single screen is built. Flows reveal the quiet failures: a decision with no way out, a detour that costs three extra steps, a task that ends in silence. They also keep the whole team looking at the same path, from the person who writes the words to the person who builds the screens.

## Learning Objectives

- Define a user flow using the working definition from Nielsen Norman Group.
- Distinguish a user flow (one task in one product) from a user journey (the whole experience across channels and time).
- Name the parts of a flow diagram: screens, decision points, and endpoints.
- Explain why flows expose dead ends and detours before anything is built.
- Explain why a flow is a plan rather than a promise, and why entry points and edge cases matter.

## The College Version

### The working definition

Nielsen Norman Group's article "User Journeys vs. User Flows" defines a user flow as a set of interactions that describe the typical or ideal set of steps needed to accomplish a common task performed with a product. Three details in that definition carry the meaning. First, a common task is a specific job with a clear finish: renewing a library book, paying a parking ticket, or booking a gym class, not an open-ended goal like "get healthier." Second, the task happens with one product, a single app or website, rather than across a store, a phone call, and an email. Third, the flow describes the typical or ideal route, the path the team hopes the task will take. NN/g notes that flow goals are granular and can usually be accomplished in minutes or hours at most, with a relatively limited set of interactions. That short, contained shape is what separates a flow from the bigger tools around it.

### One task versus the whole experience

The same NN/g article draws the line between a user flow and a user journey. The journey is the wide view: a whole experience spanning channels and time, with the person's actions, thoughts, and feelings recorded along the way. The flow is the micro view: specific, discrete interactions for one common pathway through a product. Consider a rental service. The whole experience of finding an apartment, touring it, applying, and moving in is a journey that spans the website, a phone call, and a paper lease. Entering the card details on the application fee screen is a flow. Both tools are structured around a user goal and seen from the user's point of view, but the flow captures steps and system responses while the journey also captures emotions. User journeys have their own lesson here; the point for now is scope. A team usually needs both, with flows acting as deep dives into the particular moments the journey passes through.

### The diagram: screens, decisions, endpoints

A flow diagram is a drawing of boxes and arrows, and it can be described in words with no design tools at all. Each screen is a box: the borrowed-books list, the renewal button, the confirmation page. Arrows connect the boxes and show the order of the path. A decision point is a diamond, where the path splits depending on what the person chooses or what the system finds, such as "does another patron have a hold on this book?" An endpoint is the rounded shape where the flow finishes, either with success, "renewal confirmed," or with failure, "renewal not available." The Interaction Design Foundation describes the standard symbols: ovals for start and end points, rectangles for steps, and diamonds for decisions. NN/g lists flow charts and task diagrams as common artifacts, and wireflows, which combine flowchart paths with screen layouts. Wireframes themselves belong to a sibling topic; here the diagram is just boxes, arrows, and labels. A flow diagram deliberately leaves feelings out, showing only what happens and what the product does in return.

### Why flows matter, and why they stay plans

Flows earn their keep before anything is built. The Interaction Design Foundation notes that a flow diagram clarifies the sequence of screens a user will move through and lets the team spot potential roadblocks before they become real problems. Consider a meal delivery app whose flow reads: choose meal, check out, pay, order confirmed. Drawn on paper, that flow exposes a dead end: if the payment fails, there is no branch that offers another card, so the task ends in silence. The team fixes the dead end before writing a line of code. The happy path is that smooth, ideal route, and the edge cases are the exceptions around it: an expired card at payment, an empty cart at checkout, a restaurant that closes mid-order. A task also starts from many places. IxDF advises listing the possible entry points, such as direct traffic, organic search, and social media, and a due-date notification, a search result, or an email link can each begin the renewal task, so a flow may need several starting boxes. Finally, a flow is a plan, not a promise. It describes how the team hopes the task will go, and real people skip steps, misread labels, and wander in from unexpected places. NN/g points to usability testing as the strongest way to check whether the mapped steps match how people actually behave; testing methods are a sibling topic.

## Key Vocabulary

- **user flow:** The sequence of steps a person takes to complete one task with a product, usually the typical or ideal route.
- **flow diagram:** A drawing that maps a user flow with boxes and arrows, showing screens, decision points, and endpoints.
- **screen:** One page or view in a product where the person reads information, makes a choice, or enters details.
- **decision point:** A moment in a flow where the path splits based on what the person chooses or what the system finds.
- **endpoint:** The place where a flow ends, such as a confirmation screen for success or an error screen for failure.
- **happy path:** The smooth, ideal route through a task where everything works the first time and no exceptions occur.
- **edge case:** An uncommon situation that interrupts the happy path, such as an expired card or a held book.
- **entry point:** Any place where a person can start a task, such as a notification, a search result, an ad, or a bookmark.

## Eli-10

A user flow is the list of steps one person takes to finish one job in an app or website, like renewing a library book or paying for a parking spot. A flow diagram draws that list as pictures: a box for each screen, an arrow from one box to the next, a diamond where the path splits, and a rounded shape where the job ends. Teams draw the flow before they build anything, because it shows the traps: a step with no way out, a detour that wastes three taps, a finish line nobody reaches. The happy path is the smooth route with no trouble, and edge cases are the exceptions, like a card that expires right at payment.

## Eli's Analogy

Think of a flow diagram as a recipe card for one dish. It lists the steps in order, from gathering the ingredients to serving the meal, and the cook follows the card from start to finish.

The analogy has limits: the recipe assumes the cook starts at step one with every ingredient in the cupboard. Real users start mid-task, skip steps, substitute ingredients, and wander in from the pantry door, so a flow is a plan to test, not a promise about what people will do.

## Worked Example

A city library app's team wants to improve renewals. They draw the flow for renewing the borrowed book "The Hidden Tide": the task starts from a due-date notification, a search result, or the Borrowed tab; the person opens the book's record, taps Renew, and the system checks whether another patron has placed a hold. No hold means the renewed confirmation appears, the success endpoint; a hold means a not-renewable screen with the return date, the failure endpoint. The diagram exposes a detour: people arriving from the notification land on the book's record, where the Renew button sits below the fold, forcing a scroll no one expected. The team adds a renewal shortcut to the notification screen, a fix that cost nothing to test because the flow showed the problem first.

## Common Mistakes

- **Drawing only the happy path and calling it the flow.** Mark the decision points and the failure endpoints too, or the dead ends stay invisible.
- **Starting every flow at the home screen.** Tasks begin from notifications, search results, ads, and links, so trace the real entry points.
- **Making the diagram so detailed that nobody can read it.** A flow is for discussion, so keep to screens, decisions, and endpoints.
- **Treating the flow as a promise about what users will do.** It is a plan; users will wander, so plan to check it with usability testing.

## Compare / Contrast

| A | B | Distinction |
|---|---|---|
| User flow | User journey | A flow is the steps for one task in one product; a journey is the whole experience across channels and time, including feelings. |
| Happy path | Edge case | The happy path is the ideal, error-free route; an edge case is an exception that interrupts it, like an expired card at payment. |
| Screen | Decision point | A screen is a place where the person acts; a decision point is where the path splits because of that act or a system check. |

## Key Takeaway

A user flow is the sequence of steps for one task in one product, drawn as a diagram of screens, decisions, and endpoints. It exposes dead ends and detours before anything is built, but it stays a plan: entry points vary, edge cases happen, and only testing with real users shows whether the path holds.

## Practice Question Bank

1. **What is a user flow?**
   - A. The set of steps that describe the typical or ideal route a person takes to complete one task with a product
   - B. A record of how a person feels across a full week of using a service
   - C. A list of every screen a product contains, in no particular order
   - D. A study of how competitors price their products
   **Answer:** A. The set of steps that describe the typical or ideal route a person takes to complete one task with a product

2. **A team is deciding between a user flow and a journey map for a rental app. Which question best settles the choice?**
   - A. How many designers work on the team?
   - B. Which font the app uses for headings?
   - C. Can the goal be finished in minutes or hours inside one product, or does it stretch across channels and days?
   - D. How much the app costs to run each month?
   **Answer:** C. Can the goal be finished in minutes or hours inside one product, or does it stretch across channels and days?

3. **A flow diagram for booking a table shows a rounded shape labeled 'Start', boxes for each screen, and a diamond labeled 'Table available?'. In the language of flow diagrams, what do the diamond and the shape labeled 'Reservation confirmed' stand for?**
   - A. Two screens the person never sees
   - B. A loading delay and a retry button
   - C. A menu and a settings panel
   - D. A decision point and an endpoint
   **Answer:** D. A decision point and an endpoint

4. **A meal delivery app's flow reads: choose meal, check out, pay, order confirmed. Which situation is an edge case the team should plan for?**
   - A. The home screen showing a weekend discount banner
   - B. The payment being declined because the card expired
   - C. The user changing the app's language setting
   - D. The menu sorting items by price
   **Answer:** B. The payment being declined because the card expired

5. **A library app's renewal flow is drawn starting from the 'Borrowed' tab. Why is it wise to draw the same flow with several starting points?**
   - A. Because people reach the task from many places, such as a due-date notification, a search result, or an email link
   - B. Because designers are expected to fill the page with boxes
   - C. Because every flow must begin on the home screen
   - D. Because the number of starting points is set by the marketing budget
   **Answer:** A. Because people reach the task from many places, such as a due-date notification, a search result, or an email link

## Sources

- Nielsen Norman Group, [User Journeys vs. User Flows](https://www.nngroup.com/articles/user-journeys-vs-user-flows/)
- Nielsen Norman Group, [Wireflows: A UX Deliverable for Workflows and Apps](https://www.nngroup.com/articles/wireflows/)
- Interaction Design Foundation (IxDF), [User Flows (topic encyclopedia)](https://www.interaction-design.org/literature/topics/user-flows)

## Related Topics

- User Journeys
- Personas
- Information Architecture
- Wireframes
- Usability Testing

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only NN/g and IxDF sources; no source prose adapted; all lesson prose and examples original. Researched 2026-08-21.
