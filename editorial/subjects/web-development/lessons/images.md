# Images

## In 30 Seconds

Use HTML's `img` element to embed an image resource. Its `src` attribute identifies the resource, while `alt` gives a text alternative chosen for the image's job in that page. A meaningful photo usually needs a concise description; an image that is only decoration uses `alt=""`. Add truthful `width` and `height` values when known so the browser can reserve the image's shape before it finishes loading.

## Why This Matters

Images can communicate a product, diagram, result, or action quickly, but a visual alone is not equally usable by every visitor or in every loading condition. Deliberate image markup makes a page more understandable when the resource fails, when a person uses a screen reader or Braille display, and when the page is still loading. It also develops a key web-authoring habit: choose markup from what content means and does, rather than from how it happens to look. CSS layout, responsive-image strategies, and media rights build on this foundation later.

## Learning Objectives

- Define the distinct roles of `img`, `src`, and `alt`.
- Write an `img` element with an alternative suited to the image's purpose.
- Distinguish an informative image from a decorative image.
- Explain why a functional image needs a function-focused alternative.
- Apply width and height attributes without treating them as a substitute for CSS layout.

## The College Version

### The image element and its resource

The HTML `img` element represents an image in a document. It is a replaced, void element: it does not wrap child HTML or have a separate closing tag. An author normally supplies `src`, whose value is the address of the image resource. For example, `<img src="campus-map.png" alt="Map of the north entrance">` asks the browser to obtain the resource named by `campus-map.png` and supplies text that can stand in for the image. `src` is not a description; it is resource-location data. Conversely, `alt` is not the filename or an optional caption field. It is replacement text for the image when the image is not available and a text equivalent in contexts that expose that alternative. Keeping those jobs separate prevents a common error: putting `campus-map.png` in `alt` tells a visitor almost nothing about the information in the image. This lesson focuses on the ordinary `img` element. Selecting different image files for different screens and controlling the image's visual layout are separate topics.

### Alternative text is about purpose, not decoration in words

An alternative must communicate what the image contributes in its particular context. The same image file can need different alternatives in different uses. A portrait beside a news story might be meaningfully identified as the person pictured; the identical file used only as a background flourish beside a headline contributes no new information. For an informative image, write a short description that conveys the essential information. For an image that contains important text, the alternative should provide the words. For a complex chart or diagram, a short `alt` may identify its subject, while nearby text or a linked description provides the detailed data or explanation. Do not start every alternative with “image of” or “picture of” when that fact adds no useful information. More importantly, do not mechanically describe pixels. The author decides what a visitor needs to know from the image's usage, context, and content. Good alternatives are therefore authored content, not something a browser can reliably invent from a filename.

### Informative, decorative, and functional uses

An image is informative when it carries content that a reader needs, such as an explanatory photograph, a diagram, or a chart. It needs an alternative that conveys that contribution. An image is decorative when it adds visual styling but conveys no information and has no function. In that limited case, use a null alternative: `alt=""`. The empty value is intentional. It indicates that there is no information for assistive technology to announce from this particular image; omitting `alt` does not make the same clear decision. A functional image is part of an interaction, such as a printer icon inside a button or a logo that is the only content of a home-page link. Its alternative should name the action or destination, such as `alt="Print this page"` or `alt="EliExplains home"`, rather than merely saying “printer icon” or “blue logo.” If an image is adjacent to text that already supplies the same information, assess the combined pattern. Repeating the alternative can be noise; a null alternative may be appropriate only when the image is genuinely redundant in that context.

### Dimensions describe space; they do not create a design

The `width` and `height` attributes state the image's horizontal and vertical dimensions in CSS pixels. When both are provided, the browser can use their ratio to reserve the image's expected area before the image data arrives. That reduces a frustrating kind of layout shift in which text and controls move when an image finally loads. For an image whose intrinsic size is 1200 by 800 pixels, `width="1200" height="800"` communicates a 3:2 ratio. A stylesheet can still display that image at a smaller responsive size; the attributes provide dimension information, while CSS handles presentation rules. The values must describe the actual intended ratio. Deliberately mismatched values can distort the image if CSS does not correct them, and arbitrary numbers do not improve accessibility. Dimensions also do not replace `alt`: reserving space helps visual stability, whereas an alternative addresses what the image means or does.

### A compact authoring check

Before adding an image, identify its role. Ask: what information or function would disappear if the image did not load? Write the alternative for that loss. If the honest answer is “nothing,” use `alt=""` for a purely decorative image. Next, use a real `src` that points to the intended resource and provide width and height when the image's dimensions are known. Finally, read the surrounding sentence, link, or button as a visitor would. An alternative should add the missing meaning, not repeat visible text pointlessly. Consider `<a href="/print"><img src="printer.svg" alt="Print this page"></a>`. The image's role is to activate printing, so the action—not its SVG format, color, or icon shape—is the useful alternative. That reasoning works better than a memorized list of generic alt-text formulas.

## Key Vocabulary

- **img element:** The HTML void element that represents an image resource in a document.
- **src:** An img attribute whose value identifies the image resource to fetch.
- **alt:** An img attribute that supplies replacement text selected for the image's purpose and context.
- **text alternative:** Text that communicates the information or function a non-text item contributes.
- **informative image:** An image that conveys content a visitor needs to understand or use the page.
- **decorative image:** An image used only for visual decoration and not for information or function.
- **null alternative:** An intentionally empty alt value, written `alt=""`, for an image that contributes no information.
- **functional image:** An image that activates or represents an interaction, such as a link or button.
- **aspect ratio:** The proportional relationship between an image's width and height.

## Eli-10

An image tag is like a card that gives a browser two kinds of instructions: where to find a picture and what the picture means here. `src` is the address for finding the picture. `alt` is the useful message to keep when someone cannot see it or it has not appeared. If a picture explains a map, its message should mention the map. If it is just a decorative flourish, it has no message to add, so `alt=""` says to skip it. A picture used as a button should say what pressing it does.

## Eli's Analogy

Think of a museum label beside an object. The object is the image resource, and `src` is the museum's storage location. The label is the alternative: it tells visitors the important thing about the object in this exhibit. A plain wall pattern does not need a label, but an emergency-exit sign does.

The museum picture has limits. A web alternative is not always visible, and software may announce it rather than printing it next to an image. The browser fetches the resource using `src`; the attribute itself does not store a physical picture or decide a page's visual layout.

## Worked Example

A course page links to a printable worksheet using only a printer icon. The author begins with `<a href="worksheet.pdf"><img src="printer.svg" alt="Print the worksheet" width="48" height="48"></a>`. `src` identifies the icon file. The image is functional because activating it opens the printable worksheet, so `alt="Print the worksheet"` names the action rather than saying “printer icon.” The 48-by-48 dimensions have a 1:1 ratio, allowing the browser to reserve a square before the SVG finishes loading. Changing the alt to `""` would hide the link's only label from people who use the alternative; changing it to `"blue printer"` would describe appearance but omit the page action.

## Common Mistakes

- **Mistake:** Using a filename such as `IMG_1042.jpg` as alt text.  
  **Correction:** Describe the image's needed information or function in this context; filenames rarely do that.
- **Mistake:** Leaving alt out to mark an image decorative.  
  **Correction:** Use the deliberate null value `alt=""` only when the image truly adds no information or function.
- **Mistake:** Writing “search icon” for an image button that opens search.  
  **Correction:** Name what the control does, such as “Search,” rather than only its visual shape.
- **Mistake:** Treating width and height as the entire responsive-design solution.  
  **Correction:** Use them to communicate truthful dimensions and reserve the aspect ratio; CSS and responsive-image tools manage display choices.

## Compare / Contrast

- **src vs. alt:** `src` identifies the image resource; `alt` supplies its replacement text.
- **Informative vs. decorative:** An informative image needs a meaningful alternative; a purely decorative image uses a null alternative.
- **Functional vs. informative:** A functional image alternative names the action or destination, while an informative image alternative conveys content.

## Key Takeaway

Image markup is not just a URL and a picture. Use `src` to identify the resource, write `alt` for what the image contributes in context, and provide accurate dimensions to help the browser reserve its space.

## Practice Question Bank

1. Which attribute identifies the image resource an img element should fetch? **Answer: A.**
2. A leaf illustration appears beside a heading purely for visual styling and repeats no information. What is the best alt value? **Answer: B.**
3. A linked logo is the only content of a link to an organization's home page. Which alternative best serves the link? **Answer: C.**
4. Why might an author supply both width and height on an img element? **Answer: D.**
5. A chart's nearby paragraph already lists every value and trend. What should the author decide before choosing the chart's alt text? **Answer: A.**

## Sources

- WHATWG, *HTML Living Standard — The img element*: https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element
- MDN Web Docs, *`<img>`: The Image Embed element*: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img
- W3C Web Accessibility Initiative, *An alt Decision Tree*: https://www.w3.org/WAI/tutorials/images/decision-tree/

## Related Topics

- HTML; Links; CSS; Responsive Design; Accessibility

## Editorial Metadata

- Status: source-verified / `READY_TO_PUBLISH` (not public)
- Sources are reference-only; the lesson is original EliExplains synthesis.
