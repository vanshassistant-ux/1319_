# Flexbox

## In 30 Seconds

Flexbox is CSS's one-dimensional layout system: it arranges a container's direct children along one main axis at a time. Set `display: flex` on a parent to make its direct children flex items. Then use direction, sizing, and alignment properties to decide how those items share room. Flexbox is especially useful when a row or column needs flexible spacing without manually calculating every position.

## Why This Matters

Flexbox turns common interface decisions—such as putting a navigation label and a button on one line, or centering a card's contents—into rules the browser can adapt as space changes. In coursework, it provides a precise vocabulary for diagnosing why an element grows, shrinks, or aligns unexpectedly. In practice, understanding the axes and default values makes layouts more maintainable than a collection of one-off margins. It is a one-dimensional tool; recognizing that boundary helps a developer choose a different layout method when both rows and columns must be controlled together.

## Learning Objectives

- Define a flex container and flex item.
- Distinguish the main axis from the cross axis.
- Explain the roles of flex-basis, flex-grow, and flex-shrink.
- Apply justify-content and align-items to the correct axis.
- Calculate a simple positive free-space allocation using grow factors.

## The College Version

### Container, items, and axes

A flex formatting context begins when an element has `display: flex` (or `inline-flex`). Its direct children become flex items; grandchildren do not automatically become items of that same container. Flexbox is one-dimensional: it lays items out primarily along a main axis. `flex-direction` chooses that axis. With the default `row`, the main axis follows the inline direction; with `column`, it follows the block direction. The cross axis is perpendicular to the main axis. Thinking in main and cross axes is more reliable than treating a row as permanently left-to-right, because writing direction can change what start and end mean.

A new flex container has useful but sometimes surprising defaults. Its items are initially in a row, start at the main-axis start edge, do not grow (`flex-grow: 0`), may shrink (`flex-shrink: 1`), and have an `auto` flex basis. The container's default `align-items: stretch` can make auto-sized items stretch across the cross axis. `flex-wrap` initially is `nowrap`, so wrapping is an explicit decision rather than an assumption. These defaults explain many layouts before any custom rule has been written.

### Sizing is a negotiation on the main axis

`flex-basis` is the starting main-axis size used by the flex layout algorithm. Its initial value, `auto`, uses a relevant specified size when there is one; otherwise content size can supply the basis. After the bases are considered, the browser determines whether there is free space or a shortage. A positive `flex-grow` factor permits an item to receive a proportional share of positive free space. The factor is a ratio, not a declaration of an absolute pixel width. If factors are 2, 1, and 1, the first eligible item receives two of four shares.

`flex-shrink` addresses the opposite case: insufficient main-axis space. A positive shrink factor allows an item to become smaller than its basis, subject to the layout algorithm and minimum-size constraints. It is therefore unsafe to promise that a simple ratio always produces an exact final width during shrinkage. The shorthand `flex` writes grow, shrink, and basis in that order. For example, `flex: 2 1 160px` expresses a basis of 160px, a grow factor of 2, and a shrink factor of 1. This lesson uses a clean positive-free-space example; complex constraints and multi-line behavior deserve separate investigation.

### Alignment follows the axes

Sizing and alignment answer different questions. `justify-content` distributes or positions items on the main axis after their sizes are resolved. With a default row, that is commonly the horizontal direction in an English document, but it is better described as the main axis. `align-items` aligns the collection of flex items on the cross axis. Thus, in a row container with visible extra height, `justify-content: center` centers items along the row while `align-items: center` centers them across the row. `align-self` can override the container's cross-axis alignment for one item.

A small component illustrates the separation. A toolbar may use `display: flex`, `gap`, and `align-items: center` so an icon and label share a line; an item can use a grow value only when it should absorb spare main-axis room. Before choosing properties, name the container, identify its direct items, state the direction, and ask whether the desired movement is along the main or cross axis. That diagnosis prevents a common error: using `justify-content` when the intended adjustment is cross-axis alignment. `gap` is useful for deliberate space between adjacent items, whereas alignment handles any remaining space in the container. Keep these jobs distinct when reading a layout: a gap changes the separation between items; an alignment value changes their collective position or distribution. If no free space exists, an alignment setting cannot create it; inspect the container size and the items' bases before assuming the property failed. This makes debugging faster.

## Key Vocabulary

- **flex container:** An element whose flex display value establishes a flex formatting context for its direct children.
- **flex item:** A direct child of a flex container that participates in that container's flex layout.
- **main axis:** The primary layout direction chosen by `flex-direction`.
- **cross axis:** The axis perpendicular to the main axis.
- **flex-basis:** The initial main-axis size used when distributing flex space.
- **flex-grow:** A nonnegative factor that determines an eligible item's share of positive free space.
- **flex-shrink:** A nonnegative factor used when items must reduce from their bases because space is insufficient.
- **justify-content:** A container property for positioning or distributing items on the main axis.
- **align-items:** A container property for aligning flex items on the cross axis.

## Eli-10

Imagine a shelf that can organize the objects placed directly on it. Flexbox is the rule set for that shelf. First choose whether the shelf acts like a row or a column. That choice creates the main direction. The direction across it is the cross direction. The parent is in charge of arranging its direct children; a toy inside a box on the shelf is not directly arranged by the shelf.

Each child can begin with a planned amount of room. If room is left over, grow numbers decide how to divide it. A child with grow number 2 gets twice the extra-room share of a child with grow number 1. If room is too tight, shrink settings help decide what may give up room. Separate controls say where items sit along the shelf and across it.

## Eli's Analogy

Flexbox is like a shelf manager assigning space to boxes in one direction, then choosing how the boxes line up across the shelf. The browser is not a simple shelf manager: content minimums, writing modes, and the formal flex sizing algorithm can affect results. The analogy does not calculate real CSS sizes.

## Worked Example

A 720px-wide row flex container has three items, each with `flex-basis: 160px`. Their bases use 480px, leaving 240px of positive free space. Set the grow factors to 2, 1, and 1: `flex: 2 1 160px`, `flex: 1 1 160px`, and `flex: 1 1 160px`. The factors total 4, so the first item receives 2/4 of 240px = 120px; each other item receives 1/4 = 60px. Their resulting main-axis sizes are 280px, 220px, and 220px. `justify-content` has no remaining free space to distribute in this simplified case. If the container instead had extra height, `align-items: center` would move the items on the cross axis, not change those widths.

## Common Mistakes

- **Calling every descendant a flex item.** Only direct children of the flex container are its flex items.
- **Using left/right as the universal explanation for a row.** Name the main-axis start and end; writing direction can affect physical sides.
- **Treating flex-grow as a fixed width.** It is a proportional share of positive free space after bases are considered.
- **Using justify-content to vertically center a default row.** For a row, vertical placement is generally cross-axis alignment, so inspect `align-items`.

## Compare / Contrast

- **flex-grow / flex-shrink:** Grow distributes positive free space; shrink participates when the container lacks enough main-axis space.
- **justify-content / align-items:** `justify-content` acts on the main axis; `align-items` acts on the cross axis.
- **flex container / flex item:** The container establishes the flex context; its direct children are the items laid out within it.

## Key Takeaway

Flexbox lays a container's direct children along a chosen main axis. Identify the axes first, then separate base sizing and grow/shrink behavior from main-axis and cross-axis alignment.

## Practice Question Bank

1. After `display: flex` is set on a parent, which elements become that container's flex items? **Answer: A.** Its direct children.
2. In a container with `flex-direction: column`, which statement is correct? **Answer: B.** The main axis follows the block direction and the cross axis is perpendicular to it.
3. Three 100px-basis items sit in a 500px row container. Their grow factors are 2, 1, and 1. Ignoring other constraints, what is the first item's final width? **Answer: C.** 200px.
4. A default row flex container has extra height. Which property centers all its items across that extra height? **Answer: D.** `align-items: center`.
5. What does `flex-basis` provide before grow or shrink behavior is resolved? **Answer: A.** A starting main-axis size.

## Sources

- [MDN Web Docs: Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [W3C: CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)

## Related Topics

- Box Model
- CSS Grid
- Responsive Design
- Cascade
- CSS

## Editorial Metadata

Original EliExplains synthesis, researched 2026-08-20. Reference-only standards and documentation; no source prose adapted. Status: source-verified and ready for owner publication review.
