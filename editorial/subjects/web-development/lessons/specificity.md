# CSS Specificity

## In 30 Seconds

Specificity is the selector weight CSS uses when competing declarations are in the same cascade origin and importance. Write a selector's weight as three columns: IDs, classes/attributes/pseudo-classes, and type selectors/pseudo-elements. Compare the leftmost column first. Thus `#notice` (1-0-0) outweighs `.notice` (0-1-0), which outweighs `p` (0-0-1). Specificity does not replace the cascade; it is one later tie-breaker.

## Why This Matters

Specificity explains many apparent CSS surprises: a rule can match an element and still lose to a more specific competing rule. Calculating it makes browser developer tools more useful and helps avoid overly forceful selectors. Keeping selectors intentionally low-specificity can also make components easier to customize, while `:where()` can expose a useful hook without adding selector weight.

## Learning Objectives

- Define CSS specificity and state its limited role in conflict resolution.
- Calculate the three-column specificity of common selectors.
- Compare two selector weights from left to right.
- Explain how `:is()`, `:not()`, and `:has()` obtain specificity from their arguments.
- Apply the zero-specificity rule for `:where()`.

## The College Version

### A selector weight, not a replacement for the cascade

Specificity is a weight associated with a selector. It matters only after CSS reaches the stage of comparing declarations that otherwise compete for the same property on the same element. A selector first has to match; the cascade also considers origin and importance. If specificity is tied, source order can settle the conflict. This lesson focuses on selector weights rather than the full cascade.

For ordinary selectors, use three columns: ID selectors; class selectors, attribute selectors, and pseudo-classes; then type selectors and pseudo-elements. `#panel` is 1-0-0. `main .card .title` is 0-2-1. Compare columns from the left, not as decimal points: one ID outweighs any number of class and type selectors.

### Calculate what appears in the selector

`button.primary` is 0-1-1: one class and one type selector. `form [type="email"]:focus` is 0-2-1: `form` is a type selector, while the attribute selector and pseudo-class each count in the middle column. The universal selector and combinators do not add weight. A pseudo-element such as `::before` belongs in the final column.

A comma-separated selector list has separate weights. In `h1, .heading`, `h1` is 0-0-1 and `.heading` is 0-1-0; do not add them. Use the branch that actually matched. Specificity describes selector structure, not visual importance or the number of elements a selector matches.

### Functional pseudo-classes and the `:where()` boundary

`:is()`, `:not()`, and `:has()` do not add their own pseudo-class count. Their specificity is replaced by their most specific argument. `:is(p, #summary)` is 1-0-0. `article:not(.archived)` is 0-1-1.

`:where()` is intentionally different: it is always 0-0-0, including its arguments. `:where(.card) a` therefore has zero specificity, while `.card a` is 0-1-1. That makes `:where()` useful for defaults designed to be easy to override. It does not guarantee that a later rule wins in every stylesheet; the broader cascade still matters.

## Key Vocabulary

- **specificity:** Selector weight used when CSS compares otherwise competing declarations.
- **ID selector:** A `#` selector that contributes to the first column.
- **class selector:** A `.` selector that contributes to the middle column.
- **pseudo-class:** A one-colon selector such as `:focus`.
- **pseudo-element:** A two-colon selector such as `::before`.
- **selector list:** Comma-separated alternatives, each with its own specificity.
- **`:where()`:** A functional pseudo-class with zero specificity.

## Eli-10

Imagine several labels competing to tell a librarian where to put one book. An ID label is an exact shelf code, a class label is a category sticker, and a type label is a broad kind such as “book.” CSS counts those kinds of labels in three columns and checks exact shelf codes first.

` :where()` is like a removable pencil note: it can describe the books to include, but it deliberately carries no authority in the comparison. A normal selector can replace its default easily. Specificity does not decide every CSS disagreement; it helps only after CSS has reached competing relevant rules.

## Eli's Analogy

A specificity value is a three-column priority label for competing CSS selectors.

The analogy omits origin, importance, and source order, which can matter before or after specificity.

## Worked Example

Both rules match one link: `:where(.card) a { color: teal; }` and `.card a { color: rebeccapurple; }`. The first is 0-0-0 because `:where()` is always zero. The second is 0-1-1, so at the same origin and importance its declaration wins and the link is rebeccapurple. Compare `#sale .card a` (1-1-1) with `.page .card a` (0-2-1): the first selector wins because it has an ID. Do not add the right-hand columns into a larger total.

## Common Mistakes

- **Adding columns as decimal points:** Compare from left to right; an ID beats zero IDs.
- **Combining a selector list:** Calculate each comma-separated branch separately.
- **Giving `:where()` its argument's weight:** It is always zero.
- **Explaining every conflict with specificity:** Check matching and cascade conditions first.

## Compare / Contrast

- **`:where(.card) a` vs `.card a`:** The first is 0-0-0; the second is 0-1-1.
- **`:is(p, #summary)` vs `:where(p, #summary)`:** The former is 1-0-0; the latter is 0-0-0.
- **Specificity vs cascade:** Specificity is one selector comparison inside the cascade.

## Key Takeaway

Calculate specificity as ordered ID, class/attribute/pseudo-class, and type/pseudo-element columns. Compare left to right, and remember that `:where()` always contributes zero.

## Practice Question Bank

1. Which three categories make up ordinary CSS specificity? **Answer: IDs; classes, attributes, and pseudo-classes; types and pseudo-elements.**
2. What is the specificity of `button.primary`? **Answer: 0-1-1.**
3. Which is more specific: `.page .card a` or `#sale .card a`? **Answer: `#sale .card a`.**
4. What specificity does `:where(nav a)` have? **Answer: 0-0-0.**
5. How do `:is()` and `:where()` differ? **Answer: `:is()` uses its most specific argument; `:where()` is always zero.**

## Sources

- MDN Web Docs, [CSS cascade: Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity)
- W3C, [Selectors Level 4](https://www.w3.org/TR/selectors-4/)

## Related Topics

- `web-development:foundations:selectors`
- `web-development:foundations:cascade`
- `web-development:foundations:css`
- `web-development:foundations:css-syntax`

## Editorial Metadata

Original EliExplains synthesis. Sources were read as reference-only; no source prose was adapted. Researched 2026-08-20. Status: source-verified and not public.
