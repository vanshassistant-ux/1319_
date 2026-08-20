# Semantic HTML

## In 30 Seconds

Semantic HTML means choosing HTML elements for the job their defined meaning describes. `main` marks dominant content, `nav` marks major navigation, and `article` marks a self-contained item. These names communicate document structure; they are not visual substitutes for `div`.

## Why This Matters

Semantic markup gives a page useful structure for people reading code, browser features, and assistive technologies. It is a foundation for later CSS and JavaScript work. Native structure alone is not an accessibility guarantee: names, interaction, content, and visual design still require care.

## Learning Objectives

- Define semantic HTML.
- Distinguish dominant, navigational, and complementary content.
- Choose between `article` and `section`.
- Explain the scope of nested headers and footers.
- Apply labels to distinguish repeated landmarks where needed.

## The College Version

### Meaning is the design input

HTML includes generic containers such as `div`, but it also includes elements whose names carry defined roles. Choosing `nav` says a block is navigation; `main` identifies dominant content; `aside` identifies related but separate material. This is semantic HTML: decide what the content is before deciding how it looks. CSS can style a `div` and a `nav` identically, but they communicate different structure. Use a generic container when no more meaningful element fits, such as a wrapper used only for layout. Do not make every visible box a `section` simply because it has a border.

### Landmarks organize a page-level view

Native landmarks identify major page regions. `main` represents the dominant content of the document body. `nav` is for a major navigation block, not every small collection of links. `aside` is content tangentially related to nearby content. `header` and `footer` provide introductory or concluding material for their nearest sectioning context. A site header can contain site identity and primary navigation, while an article header can contain that article's title and byline. Landmark-aware tools can expose these regions as navigation choices. When repeated landmarks are not distinguishable by contents, a clear accessible name can distinguish them; it is not a reason to add redundant labels everywhere.

### Article, section, and the generic container

`article` and `section` group content for different reasons. An `article` is a complete composition that could in principle be reused or distributed independently: a review, forum post, or comment can qualify. A `section` is a thematic grouping, typically with a heading. The HTML standard says section is not a generic styling or scripting container; use `div` if the grouping has no document-level meaning. A useful test is whether the content would make sense as an entry in an outline. If it would, section may fit. If the item could stand alone in a feed, article may fit. An article may contain sections when its content has thematic divisions.

### Build structure before adding extra roles

Native elements have standardized meanings, so use them as the starting point for ordinary document structure. Start with the dominant task, separate major navigation from the content people came to read, and identify complementary material. Place headers and footers at the scope they describe. Semantic choices do not repair a missing form label, vague link text, poor keyboard interaction, or weak contrast. They expose the document's structure so those other responsibilities can be addressed on a solid base.

## Key Vocabulary

- **semantic HTML:** HTML chosen because its standardized meaning describes the content's role.
- **landmark:** A structural region that helps identify major parts of a page.
- **main:** The element representing dominant document-body content.
- **navigation:** Links for moving through pages or locations.
- **article:** A self-contained composition that could in principle be reused.
- **section:** A thematic grouping, typically with a heading.
- **aside:** Content related to nearby material but separate from its main flow.
- **generic container:** A grouping element such as `div` used when no specific meaning applies.

## Eli-10

Semantic HTML is like labeling rooms by what people do in them instead of calling every room “space.” `main` says where central material is, `nav` says where major directions are, and `aside` says “related, but not the main story.” The labels help people reading code and can help tools describe a page's shape.

## Eli's Analogy

A school map labels a cafeteria, gym, library, and classroom even though all have walls and doors. Semantic elements provide purpose labels in a web document. A `section` is a themed room inside a larger area, while an `article` is more like a complete handout that could be passed along by itself.

The analogy has limits: a correct semantic name does not make content accessible by itself. Vague links, missing labels, and poor keyboard interaction remain real problems.

## Worked Example

A campus-news page has a site banner, primary links, one story, related events, and site information. Use a site `<header>`, a `<nav aria-label="Primary">`, a `<main>` for dominant content, and an `<article>` for the self-contained story. Put related events in `<aside>` and site information in a page `<footer>`. The article may have its own header for its headline and byline and its own footer for author credit. Headed “Background” and “What happens next” divisions inside the story may be sections. A wrapper used only to align cards remains a `div`.

## Common Mistakes

- **Using section for every visual box.** Use it for a thematic document part; use `div` for layout-only grouping.
- **Putting every link group in nav.** Reserve it for major navigation blocks.
- **Treating article as any large container.** It should be a complete, independently meaningful item.
- **Assuming semantic tags alone make a page accessible.** Also address names, interaction, content, and visual accessibility.

## Compare / Contrast

- **article vs. section:** an article is self-contained; a section is a thematic subdivision.
- **section vs. div:** section conveys document meaning; div is generic.
- **nav vs. a group of links:** nav is a major navigation block; not every link collection is one.

## Key Takeaway

Choose HTML by the role its content actually serves. Use native landmarks and sectional elements where their meanings fit, and a generic container where grouping is only presentational or technical.

## Practice Question Bank

1. What is semantic HTML? HTML chosen for the meaning defined by its element.
2. Which element identifies a major site-wide block of destination links? `nav`.
3. What kind of content best fits `article`? An individual forum post that can make sense independently.
4. When does `section` fit better than `div`? When content forms a thematic document part, typically with a heading.
5. What can an article's header identify? Introductory material for that article's context.

## Sources

- WHATWG, *HTML Living Standard — Sections*.
- MDN Web Docs, *Semantics*.
- W3C WAI, *Landmark Regions*.

## Related Topics

- HTML
- HTML Document Structure
- Headings and Paragraphs
- Accessibility
- WCAG Basics

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-20. Reference-only sources; no source prose adapted.
