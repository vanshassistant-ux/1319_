# CSS Grid

## In 30 Seconds

CSS Grid is CSS's two-dimensional layout system. A grid container defines columns and rows; its direct children become grid items that can be placed into cells or made to span tracks. Set `display: grid` on the parent, then define tracks with `grid-template-columns` and `grid-template-rows`. Grid is useful when both horizontal and vertical structure matter.

## Why This Matters

Grid gives a page or component an explicit spatial plan instead of relying on offsets and coincidences. Its terms—container, item, track, line, and area—make layout decisions testable and explainable. A named grid can keep a header, navigation, main content, and supplementary content coherent as a design evolves. This lesson focuses on rows, columns, lines, areas, and sizing; flexbox and responsive adaptations are separate topics.

## Learning Objectives

- Define grid container, grid item, track, line, and area.
- Explain how explicit columns and rows create a grid.
- Distinguish line placement from named-area placement.
- Apply `fr`, `repeat()`, and `minmax()` to a simple track definition.
- Calculate a simple `fr` allocation after fixed tracks are removed.

## The College Version

### A two-dimensional formatting context

An element with `display: grid` establishes a grid formatting context. Its direct children are grid items; deeper descendants are not automatically items of that same grid. Grid is two-dimensional because the container has a column axis and a row axis. A column or row is a grid track, and the dividing boundaries are grid lines. The rectangle between adjacent row and column lines is a grid cell. One or more cells together form a grid area. These names are diagnostic tools: when an item appears in the wrong place, ask which lines, tracks, or area the rule actually addresses.

An author can define an explicit grid with `grid-template-columns` and `grid-template-rows`. For example, `grid-template-columns: 12rem 1fr;` makes a fixed first track and a second track that receives remaining available space as a flexible fraction. If placement needs more slots than the explicit grid supplies, Grid can create implicit tracks; `grid-auto-rows` and `grid-auto-columns` control their size. Explicit tracks make the intended plan visible.

### Placing items with lines and areas

Line placement uses `grid-column` and `grid-row`. In a three-column grid, `grid-column: 1 / 3` places an item from column line 1 up to, but not including, line 3, so it spans two column tracks. Line numbers refer to boundaries, not tracks. The end line can also use `span`, as in `grid-column: 1 / span 2`. An item without an explicit placement participates in the auto-placement algorithm.

Named areas make a larger page pattern easier to inspect. `grid-template-areas` writes a row-by-row diagram using names, and an item joins a named rectangle through `grid-area`. Every repeated name must make a rectangle; an L-shaped repetition is invalid. Areas are useful for regions such as `header`, `nav`, `main`, and `aside`, but they do not replace semantic HTML. Grid describes placement; HTML communicates document meaning.

### Sizing tracks deliberately

Track lists can mix fixed lengths and flexible sizes. The `fr` unit represents a share of leftover space after fixed-size tracks and gaps are accounted for. `1fr 2fr` divides available flexible space into three shares, assigning one to the first track and two to the second. It is not a fraction of the viewport, and content constraints can affect a used size. `repeat(3, 1fr)` abbreviates three equal flexible tracks.

`minmax(min, max)` gives a track a range. `minmax(12rem, 1fr)` says a track should not be smaller than 12rem and may take a flexible share. Grid's sizing algorithm considers intrinsic content contributions and constraints, so calculations should state simplifying assumptions. A fixed length, percentage, intrinsic-size keyword, and flexible fraction answer different sizing questions; do not replace one mechanically with another. An item's unbreakable content can impose a minimum that makes a simplified fraction calculation unsuitable for a production layout. `gap` creates separation between tracks; it is not itself a row or column. Diagnose sizing separately from placement, and do not substitute Grid for flexbox or responsive-design decisions.

## Key Vocabulary

- **grid container:** An element that establishes a grid formatting context.
- **grid item:** A direct child participating in its parent grid's layout.
- **grid track:** A row or column between adjacent grid lines.
- **grid line:** A dividing boundary used to place or span items.
- **grid cell:** The smallest unit bounded by adjacent row and column lines.
- **grid area:** A rectangular region made from one or more cells.
- **fr unit:** A flexible fraction sharing leftover grid space.
- **implicit grid:** Tracks created when placement extends beyond the explicit grid.

## Eli-10

Imagine a bulletin board ruled into rows and columns. The board owner decides how wide each column and how tall each row should be. A note can use one square or stretch across several squares. CSS Grid gives a web page that kind of board. The parent makes the board; its direct children are the notes placed on it. You can point to boundary lines or give a rectangular region a name such as `main`.

Some columns have fixed width, while others share room left over. A `1fr` track gets one share; a `2fr` track gets two shares when flexible space remains.

## Eli's Analogy

Grid is like a labeled bulletin board with ruled rows and columns, where notes can occupy named rectangles or span boundary lines. A browser also applies formal sizing rules, content minimums, and auto-placement, so the analogy does not calculate real CSS sizes or give HTML meaning.

## Worked Example

A dashboard uses `display: grid; grid-template-columns: 160px 1fr 2fr; gap: 20px;`. Assume an 800px content box and ignore content minimums. The fixed column uses 160px and two gaps use 40px, leaving 600px. The flexible tracks have three shares, so the second track receives 200px and the third 400px. A card with `grid-column: 2 / 4` starts at line 2 and ends before line 4, spanning the second and third tracks. Gaps remain separation, not tracks.

## Common Mistakes

- Treating every descendant as a grid item. Only direct children are items in that grid.
- Treating a line number as a track number. Lines are boundaries.
- Treating `fr` as a fixed viewport percentage. It shares leftover space.
- Treating named areas as HTML semantics. Use semantic HTML for meaning.

## Compare / Contrast

- **Grid line vs. grid track:** a line is a boundary; a track is space between lines.
- **Explicit vs. implicit grid:** templates define explicit tracks; placement can create implicit tracks.
- **Line vs. named-area placement:** one addresses boundaries; the other addresses a declared rectangle.

## Key Takeaway

CSS Grid plans rows and columns together. Define tracks, then place direct-child items by lines or named areas while treating flexible sizing as a share of leftover space.

## Practice Question Bank

1. After a parent receives `display: grid`, which elements are that grid's items? **Its direct children.**
2. What does `grid-column: 1 / 3` do? **It spans from line 1 to line 3, covering two tracks.**
3. In the worked example, how wide is `2fr`? **400px.**
4. What must a repeated named area form? **A rectangle.**
5. What is an implicit track? **A track created beyond the explicit template when placement requires it.**

## Sources

- MDN Web Docs, [Basic concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- W3C CSS Working Group, [CSS Grid Layout Module Level 2](https://www.w3.org/TR/css-grid-2/)

## Related Topics

Flexbox; Responsive Design; Box Model; CSS.

## Editorial Metadata

Original EliExplains synthesis, researched 2026-08-20. Reference-only documentation and specification; no source prose adapted. Status: source-verified and not public.
