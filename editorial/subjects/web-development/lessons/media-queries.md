# Media Queries

## In 30 Seconds

A CSS media query asks whether a condition about the current environment is true, then lets the browser use a matching set of styles. Most often, the condition concerns available viewport width, but it can also concern output such as print or a user preference such as reduced motion. Put a query on an `@media` rule, and the declarations inside are conditional—not a separate language or a command to detect a particular device.

## Why This Matters

Media queries make one stylesheet adapt its presentation to changing conditions without changing the page's HTML or duplicating a site for every screen size. They also support considerate design: a user preference such as reduced motion can select a calmer presentation. Write conditions around content and layout pressure rather than a list of device names; that CSS is easier to test and maintain.

## Learning Objectives

- Define a CSS media query and the `@media` rule.
- Identify a media type, media feature, and media condition.
- Distinguish minimum-width from maximum-width conditions.
- Apply a media query that changes a rule only when its condition matches.
- Explain a responsible use of `prefers-reduced-motion`.

## The College Version

### A conditional group of CSS rules

A media query is a boolean test about the media environment. CSS can use that test in an `@media` at-rule to make a group of rules conditional. In a stylesheet, the familiar pattern is `@media (width >= 48rem) { ... }`. When the condition is true, declarations inside participate in the normal cascade alongside other matching declarations. When it is false, the grouped rules do not apply. A media query does not create a separate stylesheet and does not automatically override every ordinary rule.

A query can begin with a media type such as `screen` or `print`. It can also test a media feature: `width`, `orientation`, `hover`, `prefers-color-scheme`, and `prefers-reduced-motion` are examples. Combine conditions with `and`, negate one with `not`, or use a comma-separated list for alternatives. `@media print, (width >= 48rem)` matches when either alternative matches. A query based on width tests width; it does not reliably identify a phone, tablet, or laptop.

### Width conditions and readable syntax

Width is common because available space can create a real layout constraint. CSS supports prefixed forms such as `(min-width: 48rem)` and `(max-width: 47.999rem)`. It also supports range syntax: `(width >= 48rem)` and `(30rem <= width < 48rem)`. A minimum condition matches at and above its threshold. The threshold is a design decision, not a universal device breakpoint.

Start with a usable base style, then make a narrow, testable change in a matching query. For a navigation that begins vertically, a width query might change only its direction when there is room. Test by resizing a browser or using responsive tools, then inspect which rule wins. If conditions overlap, the cascade, selector matching, specificity, and source order still decide any conflict.

### Preferences and non-screen output

Media features can represent a preference as well as a measurement. `prefers-reduced-motion` expresses whether a user has requested reduced non-essential motion. A matching rule can shorten or remove decorative animation, but should preserve information, controls, and visible state changes. It is a preference signal, not a medical diagnosis.

Media types also support print-oriented presentation. `@media print` can adjust spacing or remove a decorative background while printing. It does not change HTML semantics or automatically make a page accessible. Keep responsibilities distinct: HTML supplies structure and meaning, base CSS supplies presentation, and media queries conditionally select additional presentation.

## Key Vocabulary

- **media query:** A condition that tests characteristics of the media environment for conditional styling.
- **`@media`:** A CSS at-rule that conditionally applies enclosed rules when its query matches.
- **media feature:** A testable characteristic such as width, orientation, or a user preference.
- **media type:** A broad output category such as `screen` or `print`.
- **media condition:** A boolean expression made from media-feature tests and logical operators.
- **range syntax:** Comparison notation such as `width >= 48rem`.
- **`prefers-reduced-motion`:** A feature indicating a preference to reduce non-essential motion.

## Eli-10

Ordinary CSS is a set of instructions that are always available. A media query adds an “if” label to some instructions: if the page has at least this much room, use these extra rules; if someone asked for less motion, use the quieter version. The browser checks the condition and includes those rules only when the answer is yes.

The condition describes the current situation, not the name of a gadget. A narrow browser window on a large computer can meet a narrow-width condition. That is why it is better to name the condition than to guess the visitor’s hardware.

## Eli's Analogy

A media query is like a note on a classroom activity box: “Use these materials only if the class is working outdoors.” The activity remains part of the plan, but its condition decides whether it is used.

The browser is not making a one-time classroom choice: conditions can change while the page is open, and matched rules still interact with the cascade and selectors.

## Worked Example

Start with `.nav { display: flex; flex-direction: column; gap: 0.5rem; }`. Suppose testing shows the navigation has enough room to become a row at 48rem. Add `@media (width >= 48rem) { .nav { flex-direction: row; } }`. At 47rem, the condition is false, so the column direction remains. At exactly 48rem and above, it is true, so the later matching declaration changes only `flex-direction` to `row`. The query selects a presentation rule from an explicit width condition; it does not create the navigation or identify a device. A separate reduced-motion query could alter decorative transition duration without changing content or controls.

## Common Mistakes

- **Identifying a phone model:** Test the needed condition, such as width, instead of guessing a device category.
- **Assuming @media overrides everything:** A matched rule joins the normal cascade.
- **Removing essential feedback for reduced motion:** Reduce decorative motion while retaining meaning and operation.
- **Using print CSS as semantic HTML:** Print CSS is presentation; HTML still carries structure.

## Compare / Contrast

- A **media query** tests the media environment; a **container query** can test a containing element.
- **`min-width` / `width >=`** match at or above a threshold; **`max-width` / `width <=`** match at or below it.
- A **media feature** is a particular characteristic such as width; a **media type** is a broad category such as print.

## Key Takeaway

Media queries are conditional CSS. State the environment condition precisely, keep a usable base style, and remember that a matching `@media` rule still participates in the normal cascade.

## Practice Question Bank

1. When its query is true, what does an `@media` rule do? **Answer: C.** Its enclosed rules participate in the cascade.
2. Which query matches at least 48rem? **Answer: B.** `(width >= 48rem)`.
3. How should a reduced-motion rule handle a decorative spinner and needed status text? **Answer: D.** Reduce decorative animation while retaining text.
4. Why is a width condition better than “tablet mode”? **Answer: A.** It tests a stated condition rather than guessing hardware.
5. What does the comma in `@media print, (width >= 48rem)` mean? **Answer: C.** Either alternative can match.

## Sources

- [MDN: CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries)
- [W3C: Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/)
- [W3C: CSS Conditional Rules Module Level 3](https://www.w3.org/TR/css-conditional-3/)
- [W3C: Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/)

## Related Topics

CSS Grid; Responsive Design; Accessibility; WCAG Basics.

## Editorial Metadata

Original EliExplains synthesis, source verified 2026-08-20. Sources are reference-only; no source prose was adapted. Status: READY_TO_PUBLISH (`public: false` on acceptance).
