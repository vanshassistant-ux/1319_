# Links

## In 30 Seconds

An HTML link is usually an `a` element with an `href` attribute. The content gives people a destination they can activate; `href` supplies its URL or another valid link target. A relative URL is resolved from the current document's location, while an absolute URL includes a scheme and location of its own. Good links make their destination understandable before activation and use ordinary HTML behavior whenever possible.

## Why This Matters

Links make documents and locations within documents navigable. A precise link connects a claim to evidence or lets a visitor choose a next task without guessing. Link markup also has an accessibility consequence: assistive technology can expose links and their accessible names. Separating destination, text, and URL form makes navigation more maintainable and provides a sound base for later accessibility and security work.

## Learning Objectives

- Define an HTML hyperlink and identify the roles of `a` and `href`.
- Distinguish an absolute URL from a relative URL.
- Explain why meaningful link text helps people decide where a link goes.
- Apply a relative URL to connect two files in the same site.
- Evaluate when opening a link in a new browsing context adds a user-facing obligation.

## The College Version

### A link connects a source anchor to a destination

The HTML `a` element represents a hyperlink when it has an `href` attribute. The element is the source anchor: it is the item a visitor encounters in the current document. Its `href` value is the destination reference. In `<a href="/guides/start.html">Read the setup guide</a>`, the sentence is the source anchor's visible text and `/guides/start.html` is the reference a browser resolves when the link is followed. A link can contain more than plain text, but its accessible name still needs to convey a useful purpose. The `a` element without `href` is not a hyperlink, so authors should not use it as a substitute for a button or a styling hook. Links are for navigation to a destination; a control that changes the current page or submits data belongs to a behavior or form layer. This distinction makes expected interaction clearer. The `href` can name a fragment such as `#contact`, referring to a location in a document, but page architecture is outside this lesson.

### URL form changes how the browser resolves a destination

An absolute URL supplies enough information to identify a resource without the current page's location, such as `https://www.example.org/learn/`. It includes a scheme and an authority containing the host. A relative URL is interpreted in relation to a base URL, normally the current document's URL. Suppose the current page is `https://example.edu/courses/index.html`. The value `syllabus.html` resolves to `https://example.edu/courses/syllabus.html`; `../about.html` moves one path level upward before naming `about.html`; and `/library/` is root-relative, so it uses the same origin's `/library/` path. Relative links are useful inside a site because a site can move hosts without changing every internal reference. They are not automatically safer or better: choose the form that expresses the intended destination. Do not confuse a filesystem-looking path with a promise about a server's routing rules; deployment and routing are separate concerns.

### Link text is part of the interface

A person often sees a link away from its surrounding prose: in a menu, a result, a list, or a screen reader's list of links. WCAG Link Purpose guidance says the purpose of a link should be determinable from link text alone or from link text together with programmatically determined context, subject to listed exceptions. `Read the 2026 lab-safety guide` tells a visitor more than `Click here`. A useful name need not repeat a URL; it should identify the destination or result well enough for an informed choice. If nearby links would all say `More`, give each a destination-specific label. The visible content and accessible name should agree rather than give contradictory cues. This is a content-design responsibility as well as an accessibility responsibility. Styling cannot rescue unclear wording.

### New contexts deserve deliberate use

The `target` attribute tells the browser where to display a linked resource. The special value `_blank` commonly asks for a new, unnamed browsing context. That can be appropriate when someone expects to keep a task open, but it changes navigation behavior, so use it deliberately and communicate the consequence when it matters. It is not a replacement for ordinary navigation. For an untrusted destination intentionally opened with `_blank`, add `rel="noopener"`; MDN documents that this prevents the opened page from obtaining a `window.opener` reference to the originating window. Modern HTML processing supplies equivalent behavior for `_blank` in many cases, but spelling out the relationship makes the intent easy to review. This is a defensive boundary, not a guarantee that a destination is safe.

## Key Vocabulary

- **Hyperlink:** A connection in a document that a user can activate to reach a referenced destination.
- **Anchor element:** The HTML `a` element, which represents a hyperlink when it has `href`.
- **href:** The attribute that supplies an anchor's destination reference.
- **URL:** A standardized address or reference used to locate a resource or identify a target.
- **Absolute URL:** A URL with its own scheme and authority.
- **Relative URL:** A reference interpreted against a base URL.
- **Fragment:** The portion of a URL beginning with `#` that identifies a location within a resource.
- **Accessible name:** The label assistive technologies use to identify an interface element.
- **Browsing context:** A place where a browser presents a document, such as a tab or window.

## Eli-10

A link is a signpost on a web page. The words you choose are the sign people read, and `href` is the address written on the back. If it says `Download the biology worksheet`, people can decide before following it. If it says `here`, they have to guess. A relative address is directions from the room you are already in: `next-door.html` means the next door from this page. An absolute address is the full street address.

## Eli's Analogy

Think of a library card catalog. The card title is the link text, and the call number is the destination reference. A clear title helps a reader choose a book before walking to the shelf. A relative reference is like saying one shelf left from here; a full reference names the building and shelf.

The analogy has limits. A browser resolves URLs using formal rules, and a destination can be a page, file, or fragment. Link text also has accessibility requirements that a paper card does not automatically provide.

## Worked Example

A course page is at `https://school.example/courses/web/index.html` and needs to link to `https://school.example/courses/web/links.html`. Both share a directory, so `<a href="links.html">Study HTML links</a>` is sufficient. Resolving `links.html` against the page URL replaces `index.html` with `links.html`. `<a href="/courses/web/links.html">Study HTML links</a>` also reaches that target because the leading slash starts at the site's root. The phrase identifies the destination; `Click here` would not. For an external reference intentionally opened separately, use `target="_blank"` with `rel="noopener"` and tell readers it opens in a new tab when that affects their task.

## Common Mistakes

- **Mistake:** Using `href`-less anchors as buttons. **Correction:** Use a link for navigation and a button for an in-page action.
- **Mistake:** Naming several links `click here`. **Correction:** Identify the destination or result in each label.
- **Mistake:** Assuming every relative URL starts at the site root. **Correction:** Resolve it from the current document unless it begins with `/`.
- **Mistake:** Using `_blank` by default. **Correction:** Use it only for a reason; disclose it when useful and add `rel="noopener"` for untrusted destinations.

## Compare / Contrast

- **Absolute URL vs. relative URL:** An absolute URL has its own scheme and authority; a relative URL gets meaning from a base URL.
- **Link vs. button:** A link navigates to a destination; a button invokes an action in the current interface.
- **Meaningful vs. generic text:** Meaningful text communicates purpose; generic text forces readers to infer it elsewhere.

## Key Takeaway

Use an `a` element with `href` to create a destination-oriented link. Choose URL form based on resolution, name the destination clearly, and treat new browsing contexts as a deliberate choice.

## Practice Question Bank

1. Which attribute normally gives an HTML `a` element its destination reference? **Answer: A.**
2. A page at `https://example.edu/course/index.html` contains `href="notes.html"`. What destination does it resolve to? **Answer: B.**
3. Which link text best communicates its destination when read by itself? **Answer: C.**
4. What is the best defensive addition for an untrusted external destination opened with `_blank`? **Answer: D.**
5. Which statement correctly contrasts a link and a button? **Answer: C.**

## Sources

- WHATWG, *HTML Living Standard: Links*: https://html.spec.whatwg.org/multipage/links.html
- MDN Web Docs, *`<a>`: The Anchor element*: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
- MDN Web Docs, *Understanding URLs*: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL
- W3C WAI, *Understanding Success Criterion 2.4.4*: https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html

## Related Topics

- HTML Document Structure
- Images
- Semantic HTML
- Accessibility
- HTTP Basics

## Editorial Metadata

- Status: READY_TO_PUBLISH (`public: false` on acceptance)
- Research date: 2026-08-20
- Rights: reference-only standards and documentation; no source prose adapted
- Scope: link markup, URL references, link text, and safe new-context guidance
