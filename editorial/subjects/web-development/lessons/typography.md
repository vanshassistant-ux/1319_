# Typography for the Web

## In 30 Seconds

Web typography is the CSS-controlled presentation of written language: the typeface a browser tries first, the size of letters, their weight, and the space between lines. `font-family`, `font-size`, `font-weight`, and `line-height` solve different problems, so changing one is not a substitute for another. A readable text style makes ordinary content easier to scan without turning every paragraph into a visual effect.

## Why This Matters

Text is the interface for instructions, forms, articles, error messages, and documentation. Typography gives developers a vocabulary for diagnosing a style and testing a small change. This lesson focuses on type selection and spacing; color contrast, page layout, and advanced font loading are separate concerns.

## Learning Objectives

- Define font family, font size, font weight, and line height.
- Distinguish a font-family fallback list from a single guaranteed font.
- Explain how unitless line-height relates to font size.
- Apply a small CSS type rule to body text and headings.
- Diagnose a readability problem without confusing it with color contrast or layout.

## The College Version

### Typography is a system of related choices

On the web, typography is the presentation of language through choices that shape how text is recognized, grouped, and read. `font-family` identifies an ordered list of preferred fonts, `font-size` sets the size of the font, `font-weight` requests boldness, and `line-height` controls line-box height. These controls answer different questions. Text that is cramped may need line-height; weak hierarchy may need a measured size or weight change; a missing typeface needs a fallback.

A browser cannot promise that a particular installed font exists on every device. A declaration such as `font-family: Georgia, "Times New Roman", serif;` is a preference order. The browser can use a later choice when an earlier one is unavailable. The generic `serif` family is a broad category, not a clone of a named font. A family list is therefore a resilience plan.

### Size, weight, and leading have distinct effects

`font-size` establishes font size and changes font-size-relative units such as `em`. It does not itself specify the vertical room a paragraph receives. `line-height` does that. A unitless value is a multiplier: `font-size: 18px` and `line-height: 1.5` imply a 27px line-box height. It scales with the computed font size. A length such as `27px` can be intentional, but it does not automatically scale when a descendant uses another font size.

`font-weight` requests boldness, subject to weights available in the selected family. Weight can help visual hierarchy, but bold styling does not supply document structure. A visual heading should still use an HTML heading element. One typography declaration also cannot guarantee accessibility: contrast, semantic structure, and layout deserve their own checks.

### Build a restrained text rule and test it

Start with ordinary body text and make a small observable change: `body { font-family: system-ui, sans-serif; font-size: 18px; line-height: 1.5; } h1 { font-size: 2rem; font-weight: 700; line-height: 1.1; }`. The body rule supplies a generic fallback and gives 18px body text 27px line boxes. The heading uses a larger size, heavier weight, and tighter line height because its short lines label a section rather than carry a paragraph.

Test the rule with real content. Read a paragraph at narrow and wide widths, inspect a wrapped heading, and see whether the fallback family remains acceptable. If text feels crowded, determine whether the issue is between lines, between blocks, or caused by a narrow container. Only the first is chiefly a line-height question. This separation makes later work on layout and contrast easier.

## Key Vocabulary

- **Typography:** Presentation and arrangement of written language through type choices.
- **Font family:** A named font or generic category CSS can use to render text.
- **Fallback list:** Ordered families used when an earlier choice is unavailable.
- **Generic family:** A broad category such as `serif` or `sans-serif`.
- **Font size:** CSS-controlled size of rendered text.
- **Font weight:** Requested boldness of a font.
- **Line height:** Height of a line box, commonly used for spacing between lines.

## Eli-10

Imagine setting type for a school poster. The font family is the letter shape you ask for, but you keep backup choices if the first set is missing. Font size is how large letters are. Font weight is how thick they look. Line height is the room from one line’s space to the next. Bigger letters can still look squashed if their lines have too little room.

## Eli's Analogy

A poster-maker chooses a letter set, a letter size, a thickness, and vertical slots for each line.

The analogy has limits: CSS line boxes are not physical shelves, and it does not explain font licensing, semantic HTML, or every accessibility requirement.

## Worked Example

A page uses `font-size: 18px; line-height: 1.5`. Multiply 18 by 1.5: its line-box height is 27px. Its heading uses `font-size: 2rem`, `font-weight: 700`, and `line-height: 1.1` for a distinct role. `font-family: system-ui, sans-serif;` asks for a system UI font first and a generic fallback second. If the paragraph feels cramped, inspect line spacing before changing heading weight or color.

## Common Mistakes

- **Mistake:** Assuming the first named font appears everywhere. **Correction:** End a family list with an appropriate generic fallback.
- **Mistake:** Using size to solve cramped lines. **Correction:** Check `line-height` for vertical space between lines.
- **Mistake:** Using bold styling instead of a heading element. **Correction:** Use semantic HTML for structure and CSS weight for presentation.
- **Mistake:** Claiming one value makes text accessible. **Correction:** Check typography alongside distinct semantic, contrast, and layout work.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| `font-family` | `font-size` | Family selects preferred letter designs; size controls rendered size. |
| unitless `line-height` | length `line-height` | A unitless value scales with font size; a length stays a length. |

## Key Takeaway

Treat family, size, weight, and line height as distinct controls. Use a resilient family list and test type rules with real text.

## Practice Question Bank

1. **Why end a font list with `sans-serif`?** It provides a fallback category. (A)
2. **What does 18px at `line-height: 1.5` imply?** 27px. (C)
3. **Which property targets space between lines?** `line-height`. (D)
4. **What should give a section title structure?** A semantic heading element. (A)
5. **Why can 27px differ from 1.5?** The unitless value scales with font size. (B)

## Sources

- [MDN: `font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- [MDN: `font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
- [MDN: `font-weight`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
- [MDN: `line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

## Related Topics

CSS; CSS Syntax; Colors; Responsive Design; Accessibility.

## Editorial Metadata

Original EliExplains synthesis. Researched 2026-08-20 from reference-only documentation; no source prose adapted. Status: source-verified and not public.
