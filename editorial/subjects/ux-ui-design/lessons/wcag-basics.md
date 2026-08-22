# WCAG Basics

## In 30 Seconds

WCAG, the Web Content Accessibility Guidelines, is the international standard for web accessibility, developed by the W3C through its Web Accessibility Initiative. The standard is built on four principles — Perceivable, Operable, Understandable, and Robust — supported by thirteen guidelines and testable success criteria rated at three conformance levels: A, AA, and AAA. Laws and policies around the world commonly cite WCAG, often at level AA. WCAG measures accessibility; it does not replace it.

## Why This Matters

Accessibility is the goal; WCAG is the shared measuring stick. Because WCAG is public, testable, and adopted internationally — it is even an ISO standard — teams can check their work against something concrete instead of trading opinions about what accessible means. Knowing the standard's structure lets you read a conformance claim, speak the same language as developers and testers, and explain what "we meet WCAG" really covers. It also guards against two popular illusions: that passing a checklist makes a product accessible, and that accessibility work ends at the checkpoint. The honest view — WCAG as a baseline, not a ceiling — is itself a design skill.

## Learning Objectives

- Define WCAG using the working definition from the W3C's Web Accessibility Initiative.
- Name the four POUR principles and match each to its plain meaning.
- Explain the three-layer structure of principles, guidelines, and success criteria.
- Distinguish the conformance levels A, AA, and AAA, including what AA means in practice.
- Apply the difference between WCAG the standard and accessibility the goal to a design scenario.
- Evaluate why WCAG conformance is a baseline rather than a ceiling.

## The College Version

### What WCAG is

The working definition comes from the W3C: the Web Content Accessibility Guidelines are the international standard for web accessibility, developed through the W3C process in cooperation with individuals and organizations around the world, with the goal of a single shared standard that meets the needs of individuals, organizations, and governments internationally. The W3C's Web Accessibility Initiative (WAI) shepherds the standard. "Content" means the information in a web page or app — text, images, and sounds — together with the markup that gives it structure. WCAG 2.2, published on 5 October 2023, is the current version, and it is an approved ISO standard (ISO/IEC 40500:2025), which is why "international" is more than a compliment. Versions are additive: each new version adds success criteria without changing the existing ones, and content that conforms to WCAG 2.2 also conforms to WCAG 2.0 and 2.1.

### The structure: principles, guidelines, success criteria

WCAG is a hierarchy with three layers. At the top sit four principles, remembered as POUR. Perceivable means users can take in the content through sight, hearing, or text. Operable means users can actually work the controls and move through the site, including with a keyboard alone. Understandable means the content and its behavior make sense and do not surprise. Robust means the content keeps working across browsers and assistive technologies, now and in the future. Under the principles sit thirteen guidelines, which state broad goals such as providing text alternatives or making all functionality keyboard-accessible. Guidelines are objectives, not tests. Under each guideline sit the success criteria — the numbered, testable requirements, such as 1.1.1 Non-text Content or 2.1.1 Keyboard. Each success criterion is assigned one of three conformance levels: A, AA, or AAA. Meeting every criterion at a given level is what conformance means.

### What the levels mean in practice

Level A is the minimum set — the criteria that remove the most basic barriers, such as text alternatives for images, captions for prerecorded video, and keyboard access to all functionality. Level AA adds more demanding criteria on top, including minimum contrast for text and the ability to resize text without losing content. Level AAA is the most demanding of all. The W3C itself advises against requiring AAA as a general policy for entire sites, because it is not possible to satisfy every AAA criterion for some content. In practice, AA is the level that laws and policies commonly cite: the W3C notes that most organizations addressing the European Accessibility Act use WCAG together with the European standard EN 301 549, and WAI's index of laws and policies shows governments naming WCAG — often at AA — in legislation and procurement rules. Five familiar success criteria appear again and again: text alternatives (1.1.1), captions (1.2.2), keyboard access (2.1.1), contrast (1.4.3), and resize text (1.4.4).

### The standard versus the goal

Accessibility is the goal: websites, tools, and technologies built so that people with disabilities can use them — can perceive, understand, navigate, and interact with the web, and contribute to it, as WAI puts it. WCAG is the standard that measures part of that goal. The W3C is explicit that the two are not the same: WCAG is a technical standard, not an introduction to accessibility, and it is one of a family of guidelines that also includes ATAG for authoring tools and UAAG for user agents. The honest framing follows from the W3C's own words: the guidelines "are not able to address the needs of people with all types, degrees, and combinations of disability," and WAI's supporting resources exist to improve accessibility beyond WCAG. Conformance tells you that a page meets a defined set of testable criteria; it does not tell you the experience is good. A site can pass AA and still frustrate a screen-reader user with a clumsy flow, or exclude someone whose needs fall outside the criteria. Treat conformance as the floor — a baseline to build from — never the finish line.

## Key Vocabulary

- **WCAG:** Web Content Accessibility Guidelines: the international standard for web accessibility, developed by the W3C and published in versions such as 2.2.
- **W3C:** The World Wide Web Consortium, the international organization that develops web standards, including WCAG and HTML.
- **WAI (Web Accessibility Initiative):** The W3C program that develops accessibility standards, guidelines, and educational resources, including WCAG.
- **POUR:** The four WCAG principles taken together: Perceivable, Operable, Understandable, and Robust.
- **Principle:** The top layer of WCAG: a broad requirement, such as Perceivable, that all content must satisfy.
- **Guideline:** A goal under a WCAG principle that groups related success criteria, such as providing text alternatives.
- **Success criterion:** A specific, testable WCAG requirement with a number such as 1.1.1, rated at level A, AA, or AAA.
- **Conformance level:** One of three ratings, A, AA, and AAA, that describe which set of success criteria a page meets.
- **Conformance:** The state of a web page that meets every success criterion at a stated level, such as AA.

## Eli-10

WCAG is a book of rules for people who build websites, telling them how to make sites usable for everyone, including people who cannot see, hear, or use a mouse. The rules are stacked in three layers. On top are four big ideas: the content must be perceivable, operable, understandable, and robust. Under each big idea sit groups of rules, and under those sit the actual checkable items, each marked A, AA, or AAA. Reaching AA, the middle level, is what most teams aim for. The same book is used around the world, which is why countries and companies keep pointing at the same rules.

## Eli's Analogy

Think of WCAG like a driving test. Passing the test proves you know the rules of the road — the minimum standard for driving legally. But a good driver goes beyond the test: smooth turns, watching for pedestrians, adjusting to the weather. Conformance is passing the test; accessibility is being a good driver.

The analogy has limits: a driving test is taken once by one person, while WCAG applies to every page of a product and must be re-checked as content changes. And no test can cover every possible road situation, just as WCAG's criteria cannot cover every type, degree, and combination of disability.

## Worked Example

A small city's events team publishes a community calendar with photo thumbnails, a monthly announcement video, and a filter for finding free events. To make it accessible, the team works through WCAG 2.2 at level AA. They write a short text alternative for each thumbnail so a screen reader can announce what the photo shows, add captions to the announcement video, and test the filter with the keyboard alone — tabbing to it, opening it, choosing an option, and closing it again. They check that text can be enlarged without breaking the layout. When the automated checks pass, they do not stop: they invite two users who rely on a screen reader and one who cannot use a mouse to try the calendar, and they fix the confusing filter flow those users found. AA was their floor, not their finish line.

## Common Mistakes

- **Confusing WCAG with accessibility itself.** WCAG is the standard — a measurable set of requirements; accessibility is the broader goal that people with disabilities can use the web. Conformance helps reach the goal but never replaces it.
- **Assuming AA conformance guarantees a good experience for everyone.** The W3C states the guidelines cannot address the needs of people with all types, degrees, and combinations of disability; test with real users beyond the checklist.
- **Treating AAA as the automatic best choice for every site.** The W3C recommends against requiring AAA as a general policy for entire sites, because some content cannot satisfy every AAA criterion.
- **Thinking WCAG is only about screen readers.** The four principles cover perception, operation, understanding, and robustness — keyboard use, captions, readable text, and compatible markup are all in scope.
- **Quoting a guideline as if it were a testable requirement.** Guidelines are broad goals; the numbered success criteria are the testable items that determine conformance.

## Compare / Contrast

| A | B | Distinction |
|---|---|---|
| WCAG | Accessibility | WCAG is the W3C's international standard with testable criteria; accessibility is the goal that people with disabilities can perceive, understand, navigate, and interact with the web. The standard measures part of the goal. |
| Level A | Level AA | A is the lowest conformance level, covering basic criteria such as text alternatives and keyboard access; AA adds criteria such as contrast and resize text, and is the level that laws and policies commonly cite. |
| Guideline | Success criterion | A guideline is a broad goal, such as providing text alternatives; a success criterion is a specific testable requirement, such as 1.1.1 Non-text Content. |

## Key Takeaway

WCAG is the W3C's international standard for web accessibility: four POUR principles, thirteen guidelines, and testable success criteria at levels A, AA, and AAA. It is the shared baseline for accessibility work — never the ceiling.

## Practice Question Bank

1. **Which organization develops and maintains WCAG, the Web Content Accessibility Guidelines?**
   - A. The W3C, through its Web Accessibility Initiative
   - B. Nielsen Norman Group, the UX research firm
   - C. The International Organization for Standardization, which wrote the original draft
   - D. The U.S. federal government's accessibility office
   **Answer:** A. The W3C, through its Web Accessibility Initiative

2. **The four WCAG principles are often remembered by the acronym POUR. Which option lists them correctly?**
   - A. Practical, Operable, Understandable, Reliable
   - B. Perceivable, Operable, Understandable, Robust
   - C. Perceivable, Optimized, Usable, Responsive
   - D. Physical, Operable, Universal, Resilient
   **Answer:** B. Perceivable, Operable, Understandable, Robust

3. **A team's automated checker reports that a page passes every Level A success criterion in WCAG 2.2. What does that result tell the team about Level AA?**
   - A. The page automatically conforms at Level AA as well
   - B. Level AA is a subset of Level A, so no extra work is needed
   - C. Nothing — Level AA adds further success criteria that have not been checked
   - D. The page cannot claim any conformance until Level AAA is checked
   **Answer:** C. Nothing — Level AA adds further success criteria that have not been checked

4. **A developer announces: "Our site conforms to WCAG 2.2 at Level AA, so our accessibility work is finished." Which response best reflects the W3C's own position?**
   - A. Correct — AA conformance is the maximum level any site should aim for
   - B. Correct — meeting AA means every user's needs are met
   - C. Wrong — WCAG covers all types, degrees, and combinations of disability
   - D. Wrong — WCAG cannot address every type, degree, and combination of disability, so conformance is a baseline rather than a finish line
   **Answer:** D. Wrong — WCAG cannot address every type, degree, and combination of disability, so conformance is a baseline rather than a finish line

5. **Which of the following is a success criterion, rather than a principle or a guideline?**
   - A. Perceivable
   - B. Captions (Prerecorded), numbered 1.2.2
   - C. Keyboard Accessible
   - D. Text Alternatives
   **Answer:** B. Captions (Prerecorded), numbered 1.2.2

## Sources

- W3C Web Accessibility Initiative, [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
- W3C Web Accessibility Initiative, [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- W3C Web Accessibility Initiative, [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/)

## Related Topics

- Accessibility
- Color
- Typography
- Interaction Design

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only W3C WAI sources; no source prose adapted. Researched 2026-08-21.
