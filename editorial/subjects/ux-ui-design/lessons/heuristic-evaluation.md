# Heuristic Evaluation

## In 30 Seconds

A heuristic evaluation is an expert review: a small group of usability specialists walks through an interface and checks it against a short list of proven usability principles — Nielsen's ten heuristics — instead of testing with real users. Each expert reviews the interface alone, then the team combines findings, rates the problems by severity, and fixes the worst first. It is fast, inexpensive, and a natural first step before usability testing, which it complements rather than replaces.

## Why This Matters

Heuristic evaluation is one of the quickest ways to find likely usability problems before a product reaches users, and it is a standard skill in professional UX practice: teams routinely run one before or alongside usability testing. Learning it builds the habit of judging designs against explicit principles instead of personal taste, which makes you a sharper critic of any interface you encounter. Because it needs no participants, it fits small budgets and early design stages — and it introduces the ten heuristics, a vocabulary you will meet again in nearly every usability discussion.

## Learning Objectives

- Define heuristic evaluation and explain how it differs from usability testing.
- Name Nielsen's ten usability heuristics and state a plain-language meaning for each.
- Describe the standard process: independent expert reviews, then consolidation of findings.
- Explain how severity ratings help a team decide which problems to fix first.
- Apply the heuristics to a described interface to identify likely usability issues.

## The College Version

### What Heuristic Evaluation Is

Heuristic evaluation is an expert review method. A small number of usability specialists — not end users — inspect an interface and judge it against a checklist of well-established usability principles called heuristics. The method grew out of work by Jakob Nielsen and Rolf Molich in 1990, and Nielsen refined it into the ten heuristics most teams still use today, published in 1994. The word "heuristic" matters: the principles are broad rules of thumb distilled from research on human behavior, not rigid specifications. A reviewer asks "does this screen behave the way good interfaces should?", not "does it pass rule 12.3?". Because no participants are recruited, no lab is booked, and no sessions are run, an evaluation can be completed in days rather than weeks and at a fraction of the cost of user testing — which is why it is often one of the first checks a team runs on a new design.

### The Ten Heuristics

Nielsen's ten heuristics, with their plain meanings: (1) Visibility of system status — the interface should always tell users what is happening, with timely feedback. (2) Match between the system and the real world — speak the users' language and follow familiar conventions rather than internal jargon. (3) User control and freedom — users make mistakes, so give them clearly marked exits and ways to undo. (4) Consistency and standards — the same words, icons, and actions should mean the same things everywhere. (5) Error prevention — stop mistakes before they happen, and warn users before risky actions. (6) Recognition rather than recall — keep options and information visible so users do not have to remember them. (7) Flexibility and efficiency of use — let experienced users work faster, with shortcuts and customization. (8) Aesthetic and minimalist design — show only what is relevant, so the screen does not distract from the task. (9) Help users recognize, diagnose, and recover from errors — error messages should say what went wrong and how to fix it in plain language. (10) Help and documentation — when the interface cannot be self-evident, provide searchable, concise help.

### How an Evaluation Runs

The process has a deliberate structure. First, a team of three to five people is chosen and briefed on the heuristics; teams new to the method often practice on a simple design together. Then each evaluator works alone. In a first pass they simply use the interface, completing a typical task to learn how it behaves. In a second pass they walk through it again, this time hunting for elements that violate one of the ten heuristics, and they record every issue they find, usually with the heuristic it breaks and a suggested fix. The independence is the point: if reviewers talked before reviewing, the first loud opinion would steer everyone else. Afterwards the team consolidates: duplicate issues are merged, and the group discusses where they agree, where they disagree, and which issues look most damaging. The output is a prioritized list of candidate problems, not a polished report of confirmed defects.

### Severity and Prioritization

Not all problems are equal, and an evaluation that lists forty issues is not useful until someone decides which ten matter. Severity ratings do that job. Nielsen's classic scale runs from 0, meaning the rater does not agree it is a problem at all, up to 4, a usability catastrophe that should block a release; in between, 1 is cosmetic, 2 is minor, and 3 is major. Raters arrive at a score by weighing three factors: frequency (how often the problem occurs), impact (how hard it is for a user to get past), and persistence (whether it bothers users once or again and again). A rare cosmetic glitch can wait; a frequent blocker that appears on every other screen cannot. The ratings are still expert judgments — they tell the team what to fix first, not what users will actually do.

### Heuristic Evaluation vs. Usability Testing

The two methods answer different questions. Heuristic evaluation is an expert review: trained specialists reason about an interface using principles, without any users present. Usability testing is user observation: real people attempt tasks while the team watches where they struggle, hesitate, or give up. Expert review is faster and cheaper, and it finds many likely problems; observation reveals what actually happens, including problems no checklist predicts. Neither replaces the other. Heuristics are assumptions about good usability, and they can raise false alarms — a violation may be perfectly acceptable in context. So the honest framing is complementary: heuristic evaluation finds candidate problems, and usability testing confirms which ones real users actually hit. Teams often run an evaluation first, then use the results to decide what to watch for in the test.

## Key Vocabulary

- **heuristic** — A practical rule of thumb used to make a judgment quickly; in usability, a broad principle that guides how an interface should behave.
- **heuristic evaluation** — A usability inspection method in which experts review an interface against a checklist of usability principles, without involving users.
- **usability** — How easily and effectively a person can accomplish their goals when using a product or system.
- **usability testing** — A research method in which real users attempt tasks with a product while observers watch, to see where they struggle.
- **severity rating** — A score assigned to a usability problem reflecting how often it occurs, how much it blocks users, and how persistent it is.
- **visibility of system status** — The principle that an interface should keep users informed about what is happening through timely feedback.
- **recognition rather than recall** — The principle that interfaces should present options visibly instead of making users hold details in memory.
- **error prevention** — The principle that designs should stop mistakes from happening or warn users before risky actions.

## Eli-10

A heuristic evaluation is like asking experienced proofreaders to check an article against a short list of common writing faults — run-on sentences, vague pronouns, missing transitions — before anyone reads it. The proofreaders are not the audience; they are trained people working from a checklist. Each proofreader goes through the text alone, marks every spot that breaks a rule, and then the team pools the marks and argues about which ones matter most. The list is short on purpose: ten heuristics are easy to hold in your head, so a reviewer can carry them while walking through screen after screen without stopping to look things up.

## Eli's Analogy

Imagine a restaurant health inspection. An inspector walks the empty kitchen with a checklist: surfaces clean, food stored at the right temperature, bins labeled. No customers are needed — the inspector knows what a safe kitchen looks like. That is heuristic evaluation. Now imagine opening night, with real diners eating the food; watching them is usability testing. The inspector catches many likely problems cheaply, but some dishes will still be too salty for the diners, and only the diners can reveal that.

Where the analogy breaks down: a kitchen inspection covers sanitation, not taste. An inspector can certify a spotless kitchen and still miss that the soup is bland — only diners can judge that. Likewise, heuristics catch many likely usability problems, but they cannot tell you how real people will actually feel or where they will genuinely struggle, so an evaluation is a starting point, not the final word.

## Worked Example

Mara's team is designing a mobile app for booking plots in a community garden. Before spending budget on a usability test, three team members run a heuristic evaluation. Each person first spends ten minutes tapping through the app to learn it, then walks through booking a plot again while checking the ten heuristics. Back together, they merge their notes into a shared list. They flag that tapping "Confirm booking" shows no response for several seconds (violates visibility of system status), that the app labels plots "allotments" — a word none of the gardeners use (violates match between system and real world), and that the only way to cancel a booking is to email support (violates user control and freedom). They rate the cancel problem a 3, major, because it is frequent, hard to recover from, and persistent; the naming issue a 2; the feedback delay a 2. The team fixes the cancel flow first, then runs a usability test with five gardeners to see which remaining issues actually bother people.

## Common Mistakes

- **Treating every heuristic violation as a confirmed defect that must be fixed.** A violation is a candidate problem. Context can justify breaking a rule — a hamburger menu hides navigation, which conflicts with recognition rather than recall, yet is often the right call on a small screen. Confirm real impact with users before spending effort.
- **Running the evaluation with a single reviewer to save time.** Any one expert, no matter how experienced, misses issues. Three to five independent reviewers catch far more, and the independence keeps one person's opinions from steering the group.
- **Having the team discuss findings as they go instead of evaluating alone first.** The independent pass is what makes the method work. If reviewers talk before they review, early comments bias later ones and the team ends up with one person's list. Review alone, then consolidate.
- **Treating a heuristic evaluation as a substitute for usability testing.** Experts find likely problems; only observing real users confirms which ones actually matter. The methods complement each other — run the evaluation first, then test with users.

## Compare / Contrast

- **Heuristic evaluation vs. usability testing** — Experts judge the interface against principles without users present, versus real users attempt tasks while observers watch; the first surfaces likely problems cheaply, the second confirms what actually happens.
- **Heuristic vs. specific guideline** — A heuristic is a broad rule of thumb that leaves room for judgment, while a specific guideline pins down exact requirements; heuristics are fast to apply but less precise.
- **Independent review vs. group discussion** — Each evaluator reviews alone first so findings stay unbiased, and only afterwards does the team combine lists and discuss disagreements.

## Key Takeaway

Heuristic evaluation is a fast expert review of an interface against Nielsen's ten usability principles; it finds candidate problems, and usability testing with real users confirms which of them truly matter.

## Practice Question Bank

1. **What is a heuristic evaluation?**
   - An expert review in which usability specialists inspect an interface against a checklist of usability principles.
   - A session in which real users complete tasks while observers watch and take notes.
   - A survey that asks customers to rate their satisfaction with a product.
   - An automated check that scans an app's code for programming errors.
   - **Answer: A.** Heuristic evaluation is an expert review: trained evaluators judge the interface against usability principles, with no users involved. Real users performing tasks describes usability testing, and the other options describe a survey and a code check, not a heuristic evaluation.

2. **Which statement best captures the heuristic "recognition rather than recall"?**
   - Users should be able to reach any screen in one click.
   - Interfaces should use bright colors so elements stand out.
   - The interface should present options and information visibly instead of making users hold details in memory.
   - Every screen should contain the same amount of text.
   - **Answer: C.** Recognition rather than recall means keeping important information visible so users do not have to remember it; seeing a choice is easier than recalling one. The other options describe navigation depth, color, and text volume, which are different concerns.

3. **Why do teams usually use three to five evaluators instead of just one?**
   - Because usability testing regulations require a minimum of three observers.
   - Because any single expert is likely to miss some issues, and independent reviews catch more of them.
   - Because the ten heuristics can only be applied by a certified group.
   - Because each evaluator must test the interface with a different group of users.
   - **Answer: B.** The method relies on multiple independent reviewers because every individual, however experienced, misses some usability issues; combining independent lists catches more. The other options invent requirements that are not part of the method.

4. **A checkout page lets shoppers cancel an order only by calling customer support. Which heuristic does this most clearly violate?**
   - Error prevention
   - Visibility of system status
   - Help and documentation
   - User control and freedom
   - **Answer: D.** User control and freedom demands a clearly marked "emergency exit" so users can back out of an unwanted action easily; forcing a phone call removes that exit. The other heuristics concern preventing errors, showing status, and providing help, which are not the main issue here.

5. **A team's heuristic evaluation produces a long list of flagged issues. What does the method itself tell the team about which issues matter most?**
   - Every flagged issue is a confirmed defect that must be fixed before release.
   - The issues that appear most often in the list are guaranteed to block real users.
   - The issues are candidate problems; severity ratings and real-user testing decide which are worth fixing.
   - The issue with the highest severity score is always the cheapest to fix.
   - **Answer: C.** Heuristic findings are expert judgments, not proof: violations can be acceptable in context and evaluations can raise false alarms, so teams rate severity and confirm with real users. The other options treat the list as definitive, which the method does not claim.

## Sources

- Nielsen Norman Group — [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/)
- Nielsen Norman Group — [Heuristic Evaluations: How to Conduct](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/)
- Nielsen Norman Group — [Severity Ratings for Usability Problems](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/)
- Interaction Design Foundation — [Heuristic Evaluation (HE)](https://www.interaction-design.org/literature/topics/heuristic-evaluation)

## Related Topics

- ux-ui-design:foundations:usability-testing
- ux-ui-design:foundations:user-research
- ux-ui-design:foundations:interaction-design
- ux-ui-design:foundations:human-centered-design
- ux-ui-design:foundations:user-flows

## Editorial Metadata

- Topic ID: ux-ui-design:foundations:heuristic-evaluation
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified (2026-08-21)
- Rights status: reference-only sources; no source prose adapted
- Transformation: original synthesis from Nielsen Norman Group and Interaction Design Foundation reference material; all examples original
