# HTML

## In 30 Seconds

HTML, or HyperText Markup Language, is the markup language browsers use to interpret the content and structure of a web page. An HTML document contains elements: pieces of markup that wrap or represent content. Most elements have an opening tag, content, and a closing tag, while void elements such as `br` have no content or closing tag. Attributes add information to an element. HTML describes meaning and structure; CSS and JavaScript are separate tools for presentation and behavior.

## Why This Matters

HTML is the common starting point for reading, repairing, and creating web pages. It gives authors a standard way to say what a piece of content is, while browsers turn that markup into a document users can see and interact with. Learning its element-and-attribute model makes later topics more concrete: CSS can select elements to style them, JavaScript can work with the browser's document representation, and accessibility work begins with meaningful markup. It also prevents a costly beginner habit: treating tags as visual decorations rather than instructions about content.

## Learning Objectives

- Define HTML as a markup language used to describe web-page content and structure.
- Identify the opening tag, content, and closing tag in a normal HTML element.
- Distinguish normal elements from void elements that cannot contain HTML content.
- Explain how attributes attach additional information to an element.
- Apply proper nesting when reading or writing a short HTML fragment.

## The College Version

### HTML is markup, not a programming language

HTML stands for HyperText Markup Language. It is a markup language: authors annotate content with a standardized vocabulary, and browsers interpret that markup when building a page. The useful question is not simply whether a tag changes an appearance. It is what the markup says the content is or how it participates in the document. A browser then has a structured representation from which it can render content and expose it to other web-platform features. HTML is therefore distinct from CSS, which controls presentation, and JavaScript, which supplies programmable behavior. Those technologies often appear in the same project, but recognizing their different jobs makes debugging easier. If text is missing or a browser has interpreted a fragment unexpectedly, inspect the HTML first; if the content is present but its visual treatment is wrong, that is usually a CSS question; if something should happen after an interaction, that is usually a JavaScript question. This lesson stays with HTML's basic markup vocabulary rather than document-wide structure, navigation, or semantics of particular page regions.

### Elements, tags, and content

An element is the complete unit of HTML markup, not merely the text inside angle brackets. In a common element such as `<em>notice</em>`, the opening tag is `<em>`, the content is `notice`, and the closing tag is `</em>`. The slash distinguishes the closing tag from the opening tag. The tags mark the beginning and end of that element's content. This distinction gives a precise vocabulary for diagnosing errors: a missing closing tag is not the same problem as missing content, and an element is not identical to either one tag. HTML has many element names, each with defined rules; an author should use an element only where its rules allow it. For beginners, lowercase tag names are the readable convention, even though HTML tag names are case-insensitive. Browsers try to recover from some malformed markup, but recovery is not a guarantee that the document means what its author intended. Clear, valid-looking markup reduces the amount of guessing a browser must do.

### Nesting and void elements

Elements can occur inside other elements. This relationship is called nesting. Proper nesting closes the most recently opened inner element before closing its outer element. For example, `<p>Read <em>this</em> carefully.</p>` opens the paragraph, opens the emphasis element inside it, closes the inner emphasis element, and finally closes the paragraph. The overlapping form `<p>Read <em>this carefully.</p></em>` is not properly nested. A browser may attempt error recovery, but the author has made the intended structure unclear. Indentation is not what creates nesting; matching tags and their order do. Indentation is still worth using because it lets humans see the relationships. Not every element has content and an end tag. A void element is an element that cannot contain HTML content, so it consists of one tag. `br` is one example: it represents a line break. You may see `<br>` or `<br />`; in HTML, the slash is not the closing tag of a void element and is not required. Never add a separate `</br>` closing tag.

### Attributes add information

Attributes add information to an element beyond its content. They appear in the opening tag after the element name. A typical attribute has a name, an equals sign, and a quoted value, as in `<p class="note">Reminder</p>`. Here `class` is the attribute name and `note` is its value. Multiple attributes are separated by spaces. What an attribute means depends on its name and on the element to which it applies: an element-specific attribute is only meaningful on the elements whose definition permits it, while a global attribute can be used on all HTML elements. `class` is a widely used global attribute that can identify a group of elements for later CSS or JavaScript work. Attributes are data, not arbitrary labels; inventing a random attribute does not give it standard browser behavior. Some attributes are boolean: their presence represents true and their absence represents false. Attribute values need careful quoting because spaces and punctuation could otherwise make the boundary between values unclear. This lesson introduces the general pattern; particular attributes for images, forms, links, and language are owned by their dedicated lessons.

### A disciplined way to read a fragment

When you encounter a small HTML fragment, read it in layers. First, identify each element name and whether it is a normal or void element. Next, pair opening and closing tags from the inside outward. Then list any attributes with the element they modify and their values. Finally, describe the markup's job without jumping to a claim about styling or behavior that the markup alone does not establish. Consider `<p class="note">Save <em>before</em> closing.</p>`. It contains one outer paragraph element and one nested emphasis element. The text `before` belongs to the inner element; the rest of the sentence belongs directly to the outer element. The `class` attribute belongs to the opening paragraph tag, not to the word `note` displayed to a reader. By itself, `class="note"` does not make the paragraph look a particular way; a separate style rule could use it. This reading method separates what HTML says from what another layer of the web platform may later do.

## Key Vocabulary

- **HTML:** A markup language that uses standardized elements to describe web-page content and structure for browsers.
- **Markup:** Textual notation placed around or alongside content to identify how that content should be interpreted.
- **Element:** A complete HTML unit, usually consisting of an opening tag, content, and a closing tag.
- **Opening tag:** The angle-bracketed marker that names an element and marks where that element begins.
- **Closing tag:** The end marker for a normal element, written with a slash before the element name.
- **Attribute:** Additional information written in an element's opening tag as a name and, commonly, a value.
- **Nesting:** Placing one HTML element inside another while closing the inner element before its outer element.
- **Void element:** An HTML element that cannot contain HTML content and therefore has no separate closing tag.

## Eli-10

HTML is a way to put useful labels around the parts of a web page. A browser reads those labels to tell which text belongs together and what each marked piece is meant to be. Most labels come in a pair: one says where a piece starts and the other says where it ends. The words between them are the content. Extra notes can go in the first label as attributes. HTML is not the paint or the machinery of a page; it is the organized markup that gives the browser a starting map.

## Eli's Analogy

Think of packing items into labeled envelopes. An opening tag is like starting an envelope with a label, the content is what goes inside, and a closing tag seals that same envelope. If you put a smaller labeled envelope inside, you must seal the small one before you seal the larger one. An attribute is a note written on the envelope's label, such as a category name. A void element is like a printed stamp: it has a job, but nothing can go inside it.

The envelope picture has limits. HTML tags do not hold objects in a literal box. A browser parses text according to formal rules, and its error recovery can differ from how a person informally reads a messy stack of envelopes. Also, an attribute is not a free-form note: its allowed name and meaning come from the HTML standard or an element's definition.

## Worked Example

Read this fragment from the inside out: `<p class="note">Save <em>before</em> closing.</p>`. The outer `p` element begins with `<p class="note">` and ends with `</p>`. Its `class` attribute has the value `note`; that attribute is attached to the paragraph element, not to a visible word. Inside the paragraph, `<em>before</em>` is a normal element whose content is the word `before`. The closing order is correct because `</em>` appears before `</p>`. A standards-grounded markup check with HTML Tidy reports this fragment as clean when placed in an HTML document. Reversing the final tags would create overlapping markup and force a browser to repair the author’s input instead of receiving the intended nesting.

## Common Mistakes

- **Mistake:** Calling an opening tag by itself an element.  
  **Correction:** Use tag for the marker in angle brackets and element for the complete marked unit, including its content when it has any.
- **Mistake:** Closing an outer element before a nested inner element.  
  **Correction:** Close elements in reverse opening order: the inner element closes first, then the element that contains it.
- **Mistake:** Adding a closing tag to a void element such as `br`.  
  **Correction:** A void element cannot contain HTML content and has no separate closing tag; use its one start tag only.
- **Mistake:** Assuming a `class` attribute automatically applies a visual design.  
  **Correction:** The attribute labels or groups the element; CSS or JavaScript may use that information later, but HTML alone does not supply a visual rule.

## Compare / Contrast

- **Tag vs. element:** A tag is the syntax marker such as `<em>` or `</em>`; an element is the complete HTML construct those markers and its content form.
- **Normal element vs. void element:** A normal element may have content and an end tag; a void element cannot contain HTML content and has no separate closing tag.
- **HTML vs. CSS and JavaScript:** HTML marks up content and structure; CSS handles presentation and JavaScript supplies programmable behavior.

## Key Takeaway

HTML uses elements to mark up web-page content and attributes to add information about those elements. Read tags as a properly nested structure, and remember that HTML's markup role is distinct from CSS presentation and JavaScript behavior.

## Practice Question Bank

1. What is HTML's primary role on a web page? **Answer: A.**
2. In `<em>warning</em>`, which part is the closing tag? **Answer: B.**
3. A writer wants to place emphasis inside a paragraph. Which fragment has proper nesting? **Answer: C.**
4. Why should an author not write a separate `</br>` tag after `<br>`? **Answer: D.**
5. What does `class="note"` do in `<p class="note">Reminder</p>`? **Answer: C.**

## Sources

- WHATWG, *HTML Living Standard — Elements and attributes*: https://html.spec.whatwg.org/multipage/dom.html#elements
- MDN Web Docs, *Basic HTML syntax*: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
- MDN Web Docs, *HTML attribute reference*: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes

## Related Topics

- How Websites Work
- HTML Document Structure
- Semantic HTML
- CSS
- JavaScript

## Editorial Metadata

- Status: READY_TO_PUBLISH (`public: false` on acceptance)
- Research date: 2026-08-20
- Rights: reference-only standards and documentation; no source prose adapted
- Scope: introductory HTML markup, elements, attributes, nesting, and void elements
