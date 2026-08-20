# WCAG Basics

## In 30 Seconds

The Web Content Accessibility Guidelines (WCAG) are W3C guidance for making web content more accessible to people with disabilities. WCAG 2 organizes accessibility around four principles: content should be perceivable, operable, understandable, and robust. Its testable success criteria are arranged at Levels A, AA, and AAA. WCAG is a framework for evaluating web content; it is not a promise that one scan or feature makes an experience accessible.

## Why This Matters

WCAG gives web teams a shared way to discuss accessibility requirements and tradeoffs. It turns “make it accessible” into questions about perceiving information, operating controls, understanding the interface, and using it with different technologies. Conformance requirements and legal obligations depend on context and jurisdiction, so this lesson is technical education, not legal advice.

## Learning Objectives

- Define WCAG and its four organizing principles.
- Distinguish principles, guidelines, success criteria, and conformance levels.
- Explain why A, AA, and AAA are not website ratings.
- Apply POUR to a small interface change.

## The College Version

### What WCAG organizes

WCAG is developed through W3C accessibility work and used internationally as a technical framework for web accessibility. WCAG 2 is organized in layers. The highest layer is four principles—Perceivable, Operable, Understandable, and Robust (POUR). Information and components must be available to users’ senses or assistive technology; controls must be usable; content and operation must make sense; and content must be interpreted reliably by user agents and assistive technologies.

The principles organize reasoning, not individual pass/fail tests. A useful text alternative can address a perceivable-information question, while visible focus concerns operation. A clear error message can support understanding, and semantic markup can contribute to robust interpretation. One decision can matter to more than one principle. WCAG is not a screen-reader-only checklist or a collection of disconnected attributes.

### From principles to requirements

Below the principles are guidelines, then testable success criteria. Success criteria are the requirements used to evaluate conformance. Techniques and failures help explain approaches, but they are informative guidance rather than requirements. A reviewer should identify the relevant criterion and inspect the finished experience, not merely find a favored coding pattern.

The criteria have levels A, AA, and AAA. AA includes the applicable Level A and AA criteria; AAA includes further criteria as well. A few AAA features do not make a page “AAA.” A credible claim states the evaluated scope, WCAG version, and level, and it depends on all applicable criteria at that level. WCAG also addresses complete processes: a multi-step task deserves accessibility review across its steps, not only on one attractive page. W3C describes WCAG 2.2 as backward compatible with earlier WCAG 2 versions. Policies and laws may specify a version or level, but interpreting them is outside this lesson.

### Using POUR as an investigation tool

Suppose a site adds a “Save changes” control. Perceivable asks whether users can discover what the control is and what happens after activation. Operable asks whether they can reach and activate it through supported input methods. Understandable asks whether its label and result are clear. Robust asks whether its semantics and state can be exposed consistently to user agents and assistive technology. These questions organize investigation; they do not replace checking applicable success criteria.

WCAG is not an implementation recipe. A native HTML element, ARIA pattern, test tool, or component can be part of a solution but cannot by itself prove that the task flow is usable. Automated checks can find some issues efficiently, while meaning, sequence, and interaction often need human review. Record the review scope, version, target level, relevant criteria, evidence, and uncertainty rather than declaring an entire site accessible after one scan.

## Key Vocabulary

- **WCAG:** W3C guidance defining testable accessibility success criteria for web content.
- **Perceivable:** Information and components can be perceived by users.
- **Operable:** Users can operate components and navigation.
- **Understandable:** Information and interface operation make sense to users.
- **Robust:** Content can be interpreted reliably by user agents and assistive technologies.
- **Success criterion:** A testable WCAG requirement for conformance.
- **Conformance level:** A, AA, or AAA grouping of criteria in a target.

## Eli-10

Think of WCAG as questions a team uses when building a public library website. Can people get the information in a form they can perceive? Can they use buttons their way? Can they understand what will happen? Can their browser or assistive tool interpret the page? POUR remembers those four question types.

The questions become more specific as you go. Principles are big ideas. Success criteria are detailed, testable requirements. Levels A, AA, and AAA tell you which groups a target includes. Checking only a homepage cannot honestly prove that a whole checkout or signup process meets a level.

## Eli's Analogy

POUR is like four safety categories for a bicycle: can you see it, operate it, understand it, and rely on its parts working together? Each category points toward checks, but none is one magic inspection sticker.

The analogy has limits: web experiences vary with content, devices, browsers, assistive technologies, and task flows. Written WCAG criteria—not the analogy—determine what a conformance review evaluates.

## Worked Example

A team adds a confirmation banner after profile changes are saved. It does not call the banner “WCAG compliant” because it is visible. Using POUR, the team asks whether the message is text rather than color alone, whether keyboard users can continue to the next control, whether the message explains what happened, and whether its semantics expose the status to assistive technology. The team then identifies applicable WCAG 2.2 criteria, tests the save flow, and records its scope and target level. POUR organized the questions; criteria and observed behavior support the conclusion.

## Common Mistakes

- **Passing one scan means the page is accessible.** Use automated results as some evidence, then review applicable criteria and task behavior.
- **POUR is four tests.** It organizes reasoning; success criteria are evaluated for conformance.
- **AA is a few optional extras beyond A.** An AA target includes applicable A and AA criteria in scope.
- **“Compliant” needs no scope.** State version, level, and page or process scope.

## Compare / Contrast

| A | B | Distinction |
|---|---|---|
| WCAG principle | WCAG success criterion | A principle organizes ideas; a success criterion is a testable requirement. |
| Technique | Conformance requirement | A technique is an approach; a success criterion is the requirement evaluated. |

## Key Takeaway

WCAG uses POUR to organize accessibility and success criteria to evaluate conformance. A credible claim names its version, level, and scope and considers the complete experience.

## Practice Question Bank

1. **Which set names WCAG's four organizing principles?** Perceivable, Operable, Understandable, Robust. (B)
2. **At what WCAG layer is conformance evaluated?** A success criterion. (A)
3. **What should a team do before claiming a checkout is AA?** State its version and evaluate applicable A and AA criteria across the complete process. (C)
4. **Which question reflects Operable?** Can users reach and use controls with available input methods, including a keyboard where relevant? (D)
5. **Why is one pattern not proof of conformance?** Criteria must be evaluated in context. (B)

## Sources

- W3C Web Accessibility Initiative, [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)

## Related Topics

- Accessibility
- Semantic HTML
- Forms
- Browser Developer Tools

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only standards sources; no source prose adapted. Researched 2026-08-20.
