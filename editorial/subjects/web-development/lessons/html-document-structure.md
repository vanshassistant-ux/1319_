# HTML Document Structure

## In 30 Seconds

A complete HTML page has a predictable outer structure: a `<!doctype html>` declaration, one `html` root element, and a `head` and `body` inside that root. The head holds document metadata, such as the page title and character encoding; the body holds the page content intended for people to use. This arrangement tells browsers how to parse the document and gives tools a reliable place to find page-level information.

## Why This Matters

A clear document skeleton prevents confusing browser repairs and makes later work more reliable. The title can identify a page in browser interfaces and bookmarks; the character encoding declaration helps text be interpreted correctly; and viewport metadata can guide layout on small screens. Separating metadata from visible content also gives CSS, JavaScript, search tools, and assistive technologies a more predictable document to work with. It is a small pattern that every later HTML lesson assumes.

## Learning Objectives

- Identify the required high-level parts of a conventional HTML document.
- Explain the distinct jobs of `doctype`, `html`, `head`, and `body`.
- Distinguish document metadata from visible document content.
- Apply a valid basic structure including character encoding, title, and viewport metadata.
- Diagnose whether a page-level item belongs in the head or body.

## The College Version

### The outer document model

An HTML document has a document-level arrangement that parsers recognize. A modern document normally begins with `<!doctype html>`, followed by an `html` element. The doctype is a declaration, not an HTML element: it tells a browser to use standards mode rather than an older compatibility mode. The `html` element is the document element, or root of the HTML element tree. In a normal page it contains two main children: `head` and `body`. The head supplies metadata about the document; the body contains the content that makes up the page. Browsers may insert omitted elements while parsing, but an author should not use recovery as a design method. This lesson concerns the skeleton only, not headings, landmarks, visual styles, scripts, or network behavior.

### What belongs in the head

The `head` element represents a collection of metadata for the document. Metadata describes the document or tells the browser how to handle it; it is not ordinary page material a visitor reads in the main window. A basic head commonly includes a `meta` element declaring UTF-8 character encoding, a `meta` element named `viewport`, and a `title` element. The encoding declaration should occur early so the browser can interpret bytes as characters before it has read much text. The title supplies the document title, which a user agent can expose in a tab or history entry. It is not a substitute for a visible top-level heading. The viewport element gives viewport-related instructions, particularly for mobile browsers, but it does not create a responsive design by itself.

### What belongs in the body

The `body` element represents the document's content. Visible prose, images, navigation, forms, tables, and other page material belong there when their individual rules allow it. The body is the place where the page's content structure lives, whereas the head describes or configures the document. This boundary avoids a common error: putting a title-like sentence in `title` and expecting it to appear in the page, or putting a metadata declaration among page content. Think in terms of role: document-level information for the browser and related tools goes in the head; the information and interface presented as the page go in the body.

### A minimal, valid-looking template

`<!doctype html>`
`<html lang="en">`
`  <head>`
`    <meta charset="utf-8">`
`    <meta name="viewport" content="width=device-width, initial-scale=1">`
`    <title>Trail Notes</title>`
`  </head>`
`  <body>`
`    Page content goes here.`
`  </body>`
`</html>`

The doctype stands before the root element because it is a parsing declaration. The key structural test is nesting: the head and body close before the html root closes, and metadata stays inside the head. The tags—not the indentation—create that hierarchy. Replace the placeholder title with a specific description, confirm the encoding declaration, and add only the head entries a page actually needs.

## Key Vocabulary

- **doctype:** A declaration before an HTML document that triggers standards mode in modern browsers.
- **root element:** The top-level element in an element tree; in HTML, the `html` element.
- **metadata:** Information that describes a document or gives processing information rather than forming ordinary page content.
- **head:** The element that collects document metadata and related document-level resources.
- **body:** The element that contains the document's content structure.
- **character encoding:** The rule used to interpret stored bytes as characters, commonly declared as UTF-8.
- **viewport:** The visible area through which a browser displays a document.

## Eli-10

An HTML page has a label on the outside and two main rooms. The outside label is the doctype, which tells a browser how to read the page. Inside, the head is a planning room: it keeps facts about the page, like its name and how to read its letters. The body is the room visitors use: it holds the page's actual material. Putting each thing in its room helps the browser know what it is looking at.

## Eli's Analogy

Imagine a book with a cover page and the pages readers read. The doctype is an instruction to the printer about which modern book rules to use. The head is like the book's catalog card: it records the title and other facts about the book. The body is the chapters. A catalog card is useful, but it is not one of the chapters.

The picture has limits. A web document is not a printed book: browsers parse and may repair text according to HTML rules, and metadata can affect browser behavior. A browser tab title is also not the same thing as a printed cover title, so a visible body heading can still be needed.

## Worked Example

A student starts a page called Trail Notes. They place `<!doctype html>` first, then open `<html lang="en">`. In the head, they add `<meta charset="utf-8">`, viewport metadata, and `<title>Trail Notes</title>`. They close the head, open the body, and place `Page content goes here.` there before closing body and html. The title belongs in the head because it names the document for browser interfaces; the sentence belongs in the body because it is page content. A title element alone does not create a visible body heading.

## Common Mistakes

- **Mistake:** Treating `<!doctype html>` as an element inside the page.  
  **Correction:** Place it before the `html` element; it is a declaration, not a child element.
- **Mistake:** Using `title` as the visible page heading.  
  **Correction:** Use `title` for document metadata and create visible content in the body.
- **Mistake:** Putting visible page content in the head.  
  **Correction:** Keep the head for document metadata and put page content in the body.
- **Mistake:** Assuming viewport metadata makes a design responsive.  
  **Correction:** It provides viewport instructions; responsive layouts still need appropriate CSS and content decisions.

## Compare / Contrast

- **`head` vs. `body`:** The head collects metadata; the body holds content structure.
- **`title` vs. visible heading:** A title identifies the document in user-agent contexts; a visible heading organizes body content.
- **doctype vs. `html`:** The doctype is a parsing declaration; `html` is the root element.

## Key Takeaway

Start a modern HTML page with a doctype and one html root, then keep metadata in head and page content in body. A specific title, early UTF-8 declaration, and sensible viewport metadata make the skeleton more useful without replacing semantic body markup or responsive CSS.

## Practice Question Bank

1. Which item is placed before the `html` root? **Answer: A.**
2. What is the primary job of `head`? **Answer: B.**
3. Where should a browser-tab title be placed? **Answer: C.**
4. Which fragment has correct high-level locations? **Answer: D.**
5. What does viewport metadata do by itself? **Answer: B.**

## Sources

- WHATWG, *HTML Living Standard — The doctype*: https://html.spec.whatwg.org/multipage/syntax.html#the-doctype
- WHATWG, *HTML Living Standard — The html and head elements*: https://html.spec.whatwg.org/multipage/semantics.html#the-head-element
- MDN Web Docs, *Basic HTML syntax*: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
- MDN Web Docs, *The viewport meta element*: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport

## Related Topics

- HTML
- Headings and Paragraphs
- Semantic HTML
- Responsive Design
- Accessibility

## Editorial Metadata

- Status: READY_TO_PUBLISH (`public: false` on acceptance)
- Research date: 2026-08-20
- Rights: reference-only standards and documentation; no source prose adapted
- Scope: high-level document structure and basic metadata
