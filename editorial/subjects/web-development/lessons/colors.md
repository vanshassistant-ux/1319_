# CSS Colors

## In 30 Seconds

CSS lets a page express colors as keywords, hexadecimal values, and functions such as `rgb()` and `hsl()`. The property using the value decides what is colored. `currentColor` reuses an element’s computed text color.

## Why This Matters

Precise color notation makes a design easier to maintain and debug. Color declarations still need testing in their real background and context; this lesson does not substitute for accessibility testing.

## Learning Objectives

- Define common CSS color values.
- Distinguish color values from their properties.
- Interpret alpha and `currentColor`.

## The College Version

### A value is not the painted thing

CSS color values work with properties such as `color`, `background-color`, and `border-color`. `color` sets foreground text color and inherits. Hex, RGB, and HSL are different notations for describing colors.

### Alpha changes the visible result

Alpha controls opacity. A value such as `rgb(37 99 235 / 0.5)` is composited with its backdrop, so its visible result depends on what is behind it.

### Use currentColor for relationships

`currentColor` resolves to the element’s computed `color`. A border declared with `border-color: currentColor` follows a later change to the element’s text color.

## Key Vocabulary

- **Hexadecimal notation:** base-16 notation such as `#2563eb`.
- **RGB:** red, green, and blue color components.
- **HSL:** hue, saturation, and lightness notation.
- **Alpha:** opacity component.
- **currentColor:** computed `color` keyword.

## Eli-10

Different color notations are different recipe labels for a color. The CSS property says where the recipe goes: text, a border, or a background. Alpha is like making the recipe partly see-through, so the wall behind it matters.

## Eli's Analogy

Color notation is a recipe label, while a CSS property identifies the surface receiving the recipe.

## Worked Example

`.notice { color: #0f3d8a; border: 2px solid currentColor; background-color: rgb(219 234 254); }` gives text and border the same computed color while the background remains independently colored.

## Common Mistakes

- Using `color` when `background-color` is needed.
- Treating alpha as brightness.
- Treating `currentColor` as a fixed color.

## Compare / Contrast

`color` sets foreground text; `background-color` paints a background. Opaque values cover a backdrop; alpha permits it to contribute.

## Key Takeaway

Color values describe a color, properties place it, alpha depends on the backdrop, and `currentColor` links a value to computed text color.

## Practice Question Bank

See the structured lesson record for five source-verified questions.

## Sources

- MDN, `<color>` CSS data type
- MDN, `color` CSS property
- W3C, CSS Color Module Level 4

## Related Topics

CSS syntax, selectors, typography, and accessibility.

## Editorial Metadata

Original EliExplains synthesis; reference-only sources; researched 2026-08-20.
