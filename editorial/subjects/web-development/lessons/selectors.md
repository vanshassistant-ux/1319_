# CSS Selectors

## In 30 Seconds

A CSS selector is the part of a rule that says which HTML elements the declaration block can style. `p` selects paragraph elements, `.note` selects elements whose class includes `note`, and `#summary` selects the element with that ID. `[disabled]` selects elements that have a disabled attribute. A space joins selectors as a descendant relationship: `article p` matches paragraphs inside an article. Selectors identify matches; cascade and specificity decide conflicts later.

## Why This Matters

Selectors connect an HTML document's structure and attributes to CSS rules. Reading them accurately helps you find why a rule applies to one element but not another, and writing them carefully keeps a stylesheet tied to meaningful markup rather than arbitrary visual positions. They prepare you for the cascade and specificity: first determine matches, then reason about competing rules.

## Learning Objectives

- Define a CSS selector and distinguish matching from conflict resolution.
- Identify type, class, ID, and attribute selectors.
- Explain the descendant combinator.
- Apply a compound selector to determine what matches.

## The College Version

### Selectors are matching patterns

A CSS rule has a selector and a declaration block. The selector is a pattern evaluated against elements in the document tree; the block supplies declarations for elements that match. In `p { color: navy; }`, `p` is a type selector. It matches paragraph elements, not every node that happens to display text. The same selector can match zero, one, or many elements. It is not an instruction to create an element or a promise that a declaration will visibly win. Whether a declaration wins against another matching declaration belongs to the cascade and specificity, which are separate topics. When debugging, start with: does this selector match this particular element?

The basic forms follow HTML vocabulary. A type selector uses an element name, such as `button`. A class selector begins with a period, so `.warning` matches an element whose class list includes `warning`. An ID selector begins with `#`, so `#site-search` matches an element with that ID value. These can be written together without spaces. `button.primary` is a compound selector: it matches one button element that also has the `primary` class. It does not mean a `primary` element inside a button.

### Attributes and relationships add precision

Attribute selectors inspect attributes on an element. `[disabled]` matches an element that has a disabled attribute. `[type="email"]` matches an element whose `type` value is `email`. The presence form tests whether an attribute exists; the equals form tests a stated value. Matching an attribute does not make the markup appropriate or accessible by itself: the HTML element and attribute still need to be used correctly.

A space between selectors is the descendant combinator. `main a` matches an anchor element anywhere inside a `main` element, even when other elements lie between them. In `<main><section><a href="/help">Help</a></section></main>`, `main a` matches the link because `main` is its ancestor. It does not require an immediate child and does not match the `main` element itself. This is a document-tree relationship, not a visual relationship.

### Build selectors from markup outward

Begin with the HTML and name the elements you mean to style. Then add only the stable detail that distinguishes them. `button.primary` states both an element type and a class. `input[type="email"]` states an element type and an attribute value. `article a` states ancestry. Test each pattern against an intended match and a similar non-match.

For `<article><p class="lead">Opening</p><p>More</p><a href="/read">Read</a></article>`, `p` matches both paragraphs and `.lead` matches only the first. `article p.lead` requires the selected element to be a paragraph, have class `lead`, and have an article ancestor. `[href]` matches the link. These are matching facts; they do not settle a conflict between style declarations.

## Key Vocabulary

- **selector:** A CSS pattern used to identify elements in a document tree.
- **type selector:** A selector that matches an element name.
- **class selector:** A `.` selector that matches a class token.
- **ID selector:** A `#` selector that matches an ID value.
- **attribute selector:** A selector that matches attribute presence or value.
- **compound selector:** Simple selectors written together, all matching one element.
- **descendant combinator:** Whitespace between selectors that matches an element with a matching ancestor.

## Eli-10

Think of a web page as a school directory. CSS selectors are ways to ask the directory for people: all students in grade six, everyone in the chess club, or the person with one exact locker number. A selector does not paint anything by itself. It points CSS at entries that should receive a rule.

`p` asks for paragraphs. `.note` asks for entries carrying a Note sticker. `#summary` uses one exact name tag. `[disabled]` asks for devices marked Disabled. `article p` asks for paragraphs somewhere inside an article folder. When two rules point at the same entry, later CSS rules decide which declaration wins.

## Eli's Analogy

A selector is a directory search filter: it identifies a group before any action is taken on that group.

The analogy has limits: a directory may rank results or correct spelling. CSS selector matching does not guess, and the cascade—not a selector—settles competing declarations.

## Worked Example

With `<article><p class="lead">Welcome</p><p>Details</p><input type="email" disabled></article>`, `p` matches both paragraphs. `.lead` matches only `Welcome`. `article p` still matches both paragraphs because each has an article ancestor. `input[type="email"]` matches the input, and `[disabled]` matches it too. `p.lead` matches one element because no space means one element must satisfy both conditions.

## Common Mistakes

- **Mistake:** Reading `button.primary` as a primary element inside a button. **Correction:** No space means one button also has class `primary`.
- **Mistake:** Assuming `article p` requires a direct child. **Correction:** A descendant can occur at any depth.
- **Mistake:** Using `#` for a class. **Correction:** Use `.` for a class and `#` for an ID.
- **Mistake:** Assuming a match proves a declaration wins. **Correction:** Conflict resolution is a cascade and specificity question.

## Compare / Contrast

- `p.lead` matches a paragraph with class `lead`; a descendant selector with `p` as its ancestor and `.lead` as its descendant matches a classed element inside a paragraph.
- `[disabled]` tests presence; `[type="email"]` tests a specific value.

## Key Takeaway

Selectors match elements from their names, attributes, and document-tree relationships. Determine matching before moving to cascade or specificity.

## Practice Question Bank

1. What does `.notice` match? An element whose class list includes `notice`.
2. Which selector matches an email input? `input[type="email"]`.
3. What does `article p` match? A paragraph with an article ancestor.
4. Which element matches `button.primary`? `<button class="primary">Save</button>`.
5. What resolves conflicting matching declarations? The cascade and specificity.

## Sources

- [MDN Web Docs — CSS selectors and combinators](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
- [W3C — Selectors Level 4](https://www.w3.org/TR/selectors-4/)

## Related Topics

- CSS
- CSS Syntax
- Cascade
- Specificity

## Editorial Metadata

Original EliExplains synthesis, researched 2026-08-20. Sources used as reference-only; no source prose adapted.
