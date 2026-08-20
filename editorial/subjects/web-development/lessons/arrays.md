# Arrays

## In 30 Seconds

A JavaScript array is an ordered collection whose elements use numeric indexes. The first position is index `0`, and `length` reports the boundary after the last normal position. Brackets read or assign an element. Methods including `push()`, `pop()`, `shift()`, and `unshift()` add or remove elements, often by changing the same array.

## Why This Matters

Arrays organize related values in an order: tasks in a queue, test scores, or items a page should render. Indexing selects an item, and length supports bounds checks and loops. The key habit is knowing whether an operation mutates an existing array or returns a separate result, which prevents surprising changes as programs grow.

## Learning Objectives

- Define an array and its zero-based indexes.
- Read and assign an element with bracket notation.
- Explain what array length represents.
- Trace basic add/remove methods.
- Distinguish mutation from reassignment.

## The College Version

### Ordered elements and indexes

An array is a JavaScript collection built around ordered element positions. `const colors = ["red", "blue", "green"];` places values at indexes 0, 1, and 2. `colors[0]` reads `"red"`; `colors[3]` returns `undefined` because that position has no element. Zero-based indexing means an index also measures its offset from the start: index 1 is one position from it. Arrays organize ordered elements; named-property models belong to the objects topic.

### Length is a boundary

`colors.length` is 3, while the final element is at `colors.length - 1`, index 2. `colors[colors.length]` asks for the first position after the normal end, not the final element. An empty array has length 0 and no last element, so check `items.length > 0` before requesting `items[items.length - 1]`. Dense arrays have an element at each position from zero through length minus one.

### Reading and changing

Bracket notation can assign as well as read: `tasks[1] = "review"` replaces the second element. `push(value)` appends and returns the new length; `pop()` removes and returns the final element. `unshift(value)` adds at the start, and `shift()` removes from it. These methods mutate the target array. `slice()`, by contrast, returns a selected new array without changing the source. Read documentation before relying on a method's return value or mutation behavior.

### Mutation and reassignment

`const list = ["a"]; list.push("b");` is allowed: push mutates the array and does not reassign `list`. `list = ["a", "b"];` attempts to replace the const binding and throws. Const protects the binding, not every element. When a program must preserve an array, use a documented non-mutating operation and store its result. `Array.isArray(value)` can test whether an unknown value is an array.

## Key Vocabulary

- **array:** An ordered JavaScript collection with numeric element positions.
- **element:** A value stored at an array position.
- **index:** A zero-based position used to select an element.
- **length:** The boundary one position beyond an array's final normal index.
- **bracket notation:** `[index]` syntax for reading or assigning an element.
- **mutation:** A change to an existing collection.
- **append:** Add an element after the current final position.
- **dense array:** An array with elements at all positions from zero through length minus one.

## Eli-10

An array is a numbered row of slots for related things. The first slot is 0, so the first playlist song is in slot 0. Length tells how many slots are counted, not the number of the last slot. You can replace an item, add one at the end with `push`, or remove the final item with `pop`.

## Eli's Analogy

Imagine a tray of numbered cubbies. `push` puts a new item in the next cubby at the end; `pop` takes one from the final cubby. Length is the number of cubbies counted, so the final item's number is one less.

Real arrays are not fixed trays: their length can change and some positions can be missing. The analogy cannot determine whether an operation mutates an array; JavaScript's method rules do that.

## Worked Example

Run `const tasks = ["plan", "draft", "review"]; tasks.push("publish"); const first = tasks.shift(); const last = tasks.pop(); console.log(JSON.stringify(tasks), tasks.length, first, last);`. Push first appends `publish`. Shift removes `plan`; pop removes `publish`. The remaining array is `["draft","review"]` with length 2. Bun prints `["draft","review"] 2 plan publish`. These method calls changed the original `tasks` array without reassigning its binding.

## Common Mistakes

- **Counting the first element as index 1.** JavaScript starts at index 0.
- **Using `array[array.length]` for the last element.** Use `array[array.length - 1]` only after checking that it is nonempty.
- **Expecting `push` or `pop` not to change the array.** They mutate the target array.
- **Assuming const freezes elements.** Const blocks reassignment, not array mutation.

## Compare / Contrast

- **Index / length:** An index selects a position; length is the boundary after the final position.
- **`push()` / `pop()`:** Push appends and returns length; pop removes and returns the final element.
- **Mutation / reassignment:** Mutation changes elements; reassignment replaces a binding's value.

## Key Takeaway

Use arrays for ordered values, count from index 0, and use length as the boundary after the final element. Know whether each method changes the original array and what it returns.

## Practice Question Bank

1. First JavaScript array index? **A.** 0
2. Which reads fish from `["cat", "dog", "fish"]`? **B.** `pets[2]`
3. What does `push("Cy")` do to `["Ari", "Bo"]`? **C.** It appends Cy and returns 3.
4. Why can a const array receive `push`? **D.** Push mutates it without reassigning the binding.
5. Which removes and returns the final pending item? **A.** `pending.pop()`

## Sources

- MDN Web Docs, [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- MDN Web Docs, [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- Ecma International, [Indexed Collections](https://tc39.es/ecma262/multipage/indexed-collections.html)

## Related Topics

- JavaScript
- JavaScript Fundamentals
- Variables
- Functions
- Objects
- DOM

## Editorial Metadata

Status: source-verified, not public. Research date: 2026-08-20. Reference-only sources; original prose and Bun-executed example.
