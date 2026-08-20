# The CSS Box Model

## In 30 Seconds

Browsers lay out most CSS elements as boxes. From the center outward, a box has a content area, optional padding, a border, and a margin outside the border. A declared `width` does not always mean the same thing: `box-sizing: content-box` measures the content area, while `box-sizing: border-box` includes padding and border in that declared width. Margin remains outside either sizing box.

## Why This Matters

The box model turns “why is this card wider than 320 pixels?” into quantities you can inspect. It helps with browser developer tools, component dimensions, and explaining spacing choices to teammates. This lesson concerns one element’s dimensions; flexbox, grid, and positioning decide broader layout relationships later.

## Learning Objectives

- Define the four areas of the CSS box model.
- Distinguish content-box sizing from border-box sizing.
- Calculate an outer horizontal size under content-box sizing.
- Explain why margin is separate from a border box.
- Apply `box-sizing` to diagnose a width mismatch.

## The College Version

### Four nested areas, each with a job

CSS describes an element as a rectangular box. Its content area is where text, an image, or child content is laid out. Padding is the space between that content and the border. A border draws around the padding and content. Margin is space outside the border that separates the element from nearby boxes. These are not four alternative names for empty space: they occupy different locations and respond to different CSS properties. For a box with visible content, the layers run outward as content, padding, border, and margin.

A useful debugging habit is to ask which boundary a measurement refers to. The content width answers how much room content gets. The border edge encloses content, padding, and border. The margin edge goes farther out when margins are present. A background may appear through padding, whereas a margin creates separation outside the element. Naming the edge is the first step before working on a visual mismatch.

### Declared width depends on `box-sizing`

The `box-sizing` property states how CSS applies a specified `width` or `height`. The initial model, `content-box`, treats `width` as content width. Horizontal padding and horizontal border widths are then added outside that declared width. An element with `width: 300px`, `padding: 20px`, and `border: 5px solid` therefore has a 350-pixel border-box width: 300 + 20 + 20 + 5 + 5. If it also has `margin: 12px`, its external horizontal footprint is 374 pixels after adding both margins. Margin is not part of the border box.

With `box-sizing: border-box`, a declared width instead includes content, padding, and border. A 300-pixel border box remains 300 pixels wide at its border edge; padding and border reduce the remaining content width rather than making that box wider. Margins still sit outside it. Neither model is universally right. The key is to read the chosen model deliberately.

### Calculate first, then inspect the right edge

Under `content-box`, start with declared content width, add left and right padding, and then left and right border widths to reach border-box width. Add left and right margins only if the question asks for total external footprint. Under `border-box`, the declared width is already the border-box width; do not add padding and border a second time. The same layer-by-layer reasoning applies vertically.

For `.notice { box-sizing: content-box; width: 240px; padding: 16px; border: 2px solid; margin: 10px; }`, border-box width is 240 + 16 + 16 + 2 + 2 = 276px. Including both margins, it spans 296 pixels. Change only `box-sizing` to `border-box` while retaining `width: 240px`, and 240px becomes the border-box width; content shares it with the padding and border. Developer tools can show these layers, but the arithmetic predicts them before inspection.

## Key Vocabulary

- **CSS box model:** A model that describes an element’s content, padding, border, and margin areas.
- **content box:** The area allocated to content before padding and border are added in content-box sizing.
- **padding:** Space between content and border.
- **border:** The edge around padding and content.
- **margin:** Space outside a border that separates neighboring boxes.
- **border box:** The rectangle formed by content, padding, and border, excluding margin.
- **box-sizing:** The property that selects content-box or border-box sizing.

## Eli-10

Imagine packing an object for shipping. The object is content. Bubble wrap is padding. The carton is the border. The clearance between cartons on a shelf is margin. A label saying 300 pixels wide can mean two things: with `content-box`, it measures the object area and wrapping makes the outside bigger; with `border-box`, it measures the carton’s outside, so object space is smaller after wrapping takes its share. Shelf clearance remains outside both measurements.

## Eli's Analogy

A shipping package separates inner space, protective layers, an outer wall, and clearance around the package.

The analogy has limits: CSS borders need not resemble cardboard, and margins do not physically push every neighbor in every layout situation. It explains boundaries and measurement, not the whole browser layout system.

## Worked Example

Consider `.card { box-sizing: content-box; width: 240px; padding: 16px; border: 2px solid; margin: 10px; }`. The content width is 240px. Add 16px padding on both sides and 2px border on both sides: 240 + 16 + 16 + 2 + 2 = 276px border-box width. The margins are outside that box, so external footprint is 276 + 10 + 10 = 296px. With `border-box` and the same 240px declared width, 240px is already the border-box width; two 10px margins make its external footprint 260px.

## Common Mistakes

- **Mistake:** A declared width always means visible outer width. **Correction:** Check `box-sizing`; content-box adds padding and border outside it.
- **Mistake:** Add margin to border-box width. **Correction:** Margin is outside the border box.
- **Mistake:** Padding is margin around an element. **Correction:** Padding is inside the border; margin is outside it.
- **Mistake:** Use box arithmetic to explain flex or grid placement. **Correction:** Use it for one box’s dimensions; layout systems handle placement.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| `content-box` | `border-box` | Content-box measures content alone; border-box measures content, padding, and border together. |
| padding | margin | Padding is inside a border; margin is outside it. |

## Key Takeaway

The box model separates content, padding, border, and margin. Before calculating a width, identify whether `box-sizing` measures the content box or border box, and add margins only when external footprint matters.

## Practice Question Bank

1. **Which sequence lists areas from center outward?** Content, padding, border, margin. (C)
2. **Under `border-box`, what does declared width include?** Content, padding, and border. (A)
3. **What is the border-box width for 200px content, 10px padding on each side, and 3px borders?** 226px. (C)
4. **What is the external footprint of a 300px border box with 12px margins on each side?** 324px. (D)
5. **Which property value counts padding and border within declared width?** `box-sizing: border-box`. (B)

## Sources

- [MDN Web Docs: The box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [MDN Web Docs: `box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [W3C CSS Box Sizing Module Level 3](https://www.w3.org/TR/css-sizing-3/)

## Related Topics

Cascade; Specificity; Colors; Typography; Flexbox; CSS Grid.

## Editorial Metadata

Original EliExplains synthesis. Researched 2026-08-20 from reference-only documentation and standards sources; no source prose adapted. Status: source-verified and not public.
