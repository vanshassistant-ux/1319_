# Headings and Paragraphs

## In 30 Seconds

HTML headings (`h1` through `h6`) name and rank the sections of a page. Paragraphs (`p`) group ordinary prose into distinct paragraphs. They are structural markup, not font-size controls: a heading tells software that a passage begins a section, and a paragraph tells it that a block is paragraph text. A logical heading sequence and real paragraph elements make a page easier to read, maintain, and navigate with assistive technology.

## Why This Matters

Readers use headings to scan a page before deciding what to read, and assistive technologies can use them for in-page navigation. Paragraph markup gives prose a meaningful boundary instead of relying on visual spacing alone. These elements introduce semantic HTML: choose markup for what content is, then use CSS later for appearance.

## Learning Objectives

- Define HTML heading elements and the paragraph element.
- Explain how heading ranks communicate a document hierarchy.
- Distinguish structural heading markup from visual text styling.
- Apply a logical heading sequence to a short page fragment.
- Identify when prose belongs in a paragraph rather than a heading.

## The College Version

### Heading elements express rank

HTML supplies six heading elements: `h1`, `h2`, `h3`, `h4`, `h5`, and `h6`. The number is a rank in a document's organization, not an instruction to use a particular visual size. In a simple article, an `h1` can name the page's main subject, `h2` elements can name its peer sections, and an `h3` can name a subsection within one of those sections. A useful authoring test is to imagine an outline: each lower-ranked heading should introduce a subdivision of the higher-ranked idea above it. If text only needs a different look, CSS owns that decision; choose a heading because the text actually labels a section.

### Paragraphs are prose units

The `p` element represents a paragraph. A paragraph is often displayed as a separated block of text, but its presentation can vary, so blank space or a styled `div` is not automatically a substitute. Use `p` for a coherent run of ordinary prose. Its content model is phrasing content, so it is not a general wrapper for arbitrary layout. A list cannot be placed inside a paragraph: close the paragraph before the list, then begin another one afterward if needed. When another element describes the content more specifically, use that element instead.

### Accessible organization comes from the sequence

Headings communicate page organization, and browsers and assistive technologies can use them for in-page navigation. The text in a heading should describe the section it introduces. A jump from `h1` to `h4` merely for a smaller visual default obscures the relationship that the rank is meant to express. For a page titled “Campus Recycling,” `h1` can name the page, peer `h2` headings can name “What Goes in Each Bin” and “Pickup Schedule,” and an `h3` can name “Paper” within the first topic. Clear rank also makes later editing safer because a contributor can see which explanation belongs to each labeled topic. Headings alone do not make an entire page accessible, but they preserve a useful hierarchy.

## Key Vocabulary

- **heading element:** An HTML `h1`–`h6` element that labels a section or subsection.
- **heading rank:** A heading's level in the hierarchy.
- **paragraph:** A unit of ordinary prose represented by `p`.
- **structural markup:** Markup that expresses content's role or organization.
- **hierarchy:** An arrangement in which broader topics contain more specific ones.
- **assistive technology:** Tools that help people access digital content, including heading navigation.

## Eli-10

Think of a web page as a well-organized notebook. A heading is the label at the start of a big idea or a smaller idea inside it. A paragraph is the group of sentences that explains one part of that idea. Computers can understand those labels too when you use real HTML elements. That lets a reader jump to the part they need instead of hunting through one long wall of text.

## Eli's Analogy

An `h1` is the notebook-cover label, `h2` labels are major dividers, and `h3` labels are smaller dividers inside one section. Paragraphs are the blocks of notes filed under the right divider. The page is not physically a notebook, though, and heading numbers do not dictate the font size; CSS can change appearance without changing hierarchy.

## Worked Example

A student marks up a page called “Campus Recycling.” They start with `<h1>Campus Recycling</h1>`. Two peer topics follow: `<h2>What Goes in Each Bin</h2>` and `<h2>Pickup Schedule</h2>`. Under the first topic, paper is narrower, so it receives `<h3>Paper</h3>`, followed by `<p>Place clean paper in the blue bin.</p>`. `h3` is chosen because Paper belongs inside the first `h2`, not because it looks smaller. CSS can change visual size later.

## Common Mistakes

- Choosing a heading rank for its default font size. Choose rank by hierarchy and style with CSS.
- Skipping from `h1` to `h4`. Use ranks that reflect subdivisions.
- Putting an entire article in one paragraph. Split distinct prose units.
- Using `p` as a general wrapper. Use it for ordinary prose.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Heading | Paragraph | A heading labels a section; a paragraph contains ordinary prose. |
| Heading rank | CSS font size | Rank communicates structure; font size controls appearance. |

## Key Takeaway

Use `h1`–`h6` to label a real hierarchy of topics and `p` for ordinary prose. Let CSS control appearance; let HTML preserve meaning.

## Practice Question Bank

1. Which HTML element represents a paragraph of ordinary prose? **`<p>`**
2. What does the number in `h3` primarily communicate? **Its rank in the heading hierarchy.**
3. Under `<h1>Travel Guide</h1>`, which heading best marks a peer topic named Packing? **`<h2>Packing</h2>`**
4. Why is choosing `h4` only because it looks smaller poor practice? **Rank communicates structure; CSS controls size.**
5. What improves heading-based navigation? **Ranks that reflect real sections and subsections.**

## Sources

- WHATWG, *HTML Living Standard* — headings and paragraph elements.
- MDN Web Docs, *h1–h6: The HTML Section Heading elements*.
- W3C Web Accessibility Initiative, *Headings* tutorial.

## Related Topics

HTML; HTML Document Structure; Semantic HTML; CSS; Accessibility.

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-20. Reference-only standards and documentation; no source prose adapted. Status: READY_TO_PUBLISH (`public: false` on acceptance).
