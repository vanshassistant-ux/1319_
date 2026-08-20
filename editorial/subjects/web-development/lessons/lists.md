# Lists

## In 30 Seconds

HTML has three common list forms. Use `ul` with `li` items when their order does not carry meaning, and `ol` with `li` items when position or sequence matters. Use `dl` for name-and-description groups, with `dt` for a term and `dd` for its description. The browser's default bullets and numbers are not the deciding factor: choose the element that expresses the relationship among the items.

## Why This Matters

Lists make a page's structure explicit instead of leaving relationships to punctuation and visual styling. That matters when a browser renders the page differently, when CSS changes the appearance, and when software reads the document structure. In coursework and professional work, selecting `ul`, `ol`, or `dl` communicates whether readers should treat items as peers, steps, or labeled descriptions. It also makes markup easier to maintain because later editors can see the intended relationship before touching a stylesheet.

## Learning Objectives

- Define unordered, ordered, and description lists in HTML.
- Distinguish when item order is meaningful from when it is not.
- Identify the basic roles of `li`, `dt`, and `dd`.
- Apply appropriate list markup to a short scenario.
- Explain why visual bullets or numbers alone do not determine HTML semantics.

## The College Version

### A list expresses a relationship

A list is not merely several short lines that happen to sit together. In HTML, it is a grouping whose elements say how the pieces relate. The `ul` element represents a list of items where their order is not important; its direct list-item children are `li` elements. A shopping list is a straightforward example: apples, rice, and soap are items to obtain, but swapping their positions does not normally alter the task. An unordered list may appear with bullets in a browser, but the bullet is a default presentation, not the reason to choose `ul`. CSS can replace, remove, or reposition a marker while the source still communicates an unordered collection. Choose `ul` when the content is a set of peer items and the sequence itself does not convey a different meaning.

### Ordered lists make sequence part of the content

The `ol` element represents a list in which the order of the items is intentionally meaningful. Its items are also `li` elements. A procedure such as first measure, then cut, then assemble is a strong use case because rearranging the steps can change the result. Ranked results and a chronology can also be ordered lists when the position is information rather than decoration. Browsers commonly show numeric markers for an `ol`, but numbers are not a substitute for deciding whether order matters. If a designer uses CSS to display an ordered list without visible numbers, the underlying markup still represents a sequence; conversely, applying decorative numbers to unrelated paragraphs does not make them an ordered list. Do not use `ol` just to obtain a numbered appearance for a group whose order can freely change.

### Description lists pair terms with details

A description list uses a different relationship from `ul` and `ol`. The `dl` element represents associations of names and values, terms and definitions, or other descriptions. In its basic form, `dt` supplies a term or name and `dd` supplies the associated description. A glossary can therefore use a `dl`: one `dt` might be `HTTP`, followed by a `dd` that explains it. The standard allows grouping patterns that can associate multiple terms with one description or multiple descriptions with one term; beginners should still keep pairings clear and close together. A description list is not a universal layout tool and is not simply a list with a different marker. Use it when the content really consists of labels and their explanations.

### Reading and validating a fragment

Consider `<ol><li>Draft</li><li>Review</li><li>Publish</li></ol>`. The outer `ol` asserts that the three stages have an order, while each `li` is one item. If the stages could be performed in any order, changing only CSS from numbers to bullets would not correct the semantic choice; the outer element should become `ul`. For a glossary fragment, `<dl><dt>Cache</dt><dd>Stored data reused to avoid repeating work.</dd></dl>` makes the label-and-description relationship explicit. The WHATWG standard gives `ol` and `ul` a list-item content model and gives `dl` a description-group model; a conforming author should not place loose text where a required list item or description component belongs. A validator can catch structural errors, but it cannot decide the author’s meaning. Identify whether readers need a peer collection, a sequence, or paired labels and explanations, then write the matching elements.

## Key Vocabulary

- **unordered list:** An HTML `ul` collection whose items do not have a meaningful sequence.
- **ordered list:** An HTML `ol` collection whose item positions or sequence convey information.
- **list item:** An `li` element representing one item in an ordered or unordered list.
- **description list:** A `dl` grouping that associates terms, names, or labels with descriptions.
- **term:** A `dt` entry in a description list that names the item being described.
- **description:** A `dd` entry that supplies information associated with a term.

## Eli-10

HTML lists are labels for three kinds of groups. A `ul` says, “Here are several things, and their order is not a message.” An `ol` says, “These things go in this order.” A `dl` says, “Here is a name, and here is what it means.” The marks a browser draws—bullets or numbers—can change, so look at the relationship, not the decoration. Each `li`, `dt`, or `dd` plays a specific role inside its matching group.

## Eli's Analogy

Imagine three classroom boards. One holds supplies to bring, where any order works. One holds recipe steps, where changing the order can spoil the result. One has vocabulary cards, with a word on the front and its explanation on the back. Those are like `ul`, `ol`, and `dl`.

The picture has limits. A web list is markup parsed by a browser, not a physical board. Description lists can represent other name-value relationships, and a real page may contain nested lists or more complex groups.

## Worked Example

A course page needs a short section titled “Lab preparation.” Its content is: bring goggles, bring a notebook, and bring a pencil. Because exchanging those three items changes nothing, write `<ul><li>Goggles</li><li>Notebook</li><li>Pencil</li></ul>`. A separate procedure says: collect materials, set up the apparatus, then record observations. Here the order affects the task, so use `<ol>` with the same three `li` elements. Finally, if the page defines `Variable` and `Control`, use `<dl>`, place each word in `dt`, and put its explanation in `dd`. The choice comes from the relationship, not from whether the author prefers dots or numerals.

## Common Mistakes

- **Using `ol` only because numbered markers look nicer.** Use `ol` when order is meaningful; use CSS for visual treatment after choosing semantics.
- **Putting list text directly inside `ul` or `ol`.** Represent each ordinary item with an `li` child.
- **Using a description list for instructions.** Use `ol` for steps whose order affects the task; reserve `dl` for labels and descriptions.
- **Assuming bullets always mean an unordered list.** Bullets are presentation; determine the actual content relationship.

## Compare / Contrast

- **`ul` vs. `ol`:** Both contain `li` items, but `ul` is for items without meaningful order and `ol` is for a sequence.
- **`ol` or `ul` vs. `dl`:** The first two organize items; `dl` organizes associations between terms or names and descriptions.
- **HTML semantics vs. CSS styling:** HTML describes relationships; CSS can alter visual markers without changing them.

## Key Takeaway

Use `ul` for peer items, `ol` for meaningful sequence, and `dl` for terms or names paired with descriptions. Let the content relationship choose the markup, then use CSS for appearance.

## Practice Question Bank

1. Which element represents an unordered list in HTML? **Answer: C.**
2. A page gives assembly steps that must be followed in sequence. Which markup is most appropriate? **Answer: D.**
3. In a basic glossary built with a description list, what is the role of `dt`? **Answer: A.**
4. Why is choosing `ol` solely because a browser shows numbers a semantic mistake? **Answer: B.**
5. Which fragment best marks up a set of course materials whose order does not matter? **Answer: C.**

## Sources

- WHATWG, *HTML Living Standard — Grouping content*: https://html.spec.whatwg.org/multipage/grouping-content.html
- MDN Web Docs, *`<ul>`: The Unordered List element*: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul
- MDN Web Docs, *`<ol>`: The Ordered List element*: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol
- MDN Web Docs, *`<dl>`: The Description List element*: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl

## Related Topics

- HTML
- HTML Document Structure
- Headings and Paragraphs
- Semantic HTML
- Tables

## Editorial Metadata

- Status: READY_TO_PUBLISH (`public: false` on acceptance)
- Research date: 2026-08-20
- Rights: reference-only standards and documentation; no source prose adapted
- Scope: semantic use of HTML unordered, ordered, and description lists
