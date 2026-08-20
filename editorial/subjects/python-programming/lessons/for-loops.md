# For Loops

## In 30 Seconds

A Python `for` loop takes items from an iterable one at a time and runs an indented block for each item. The loop target receives the current item. Use direct iteration when values matter, `range()` for a numeric progression, and `enumerate()` when a position and a value are both needed.

## Why This Matters

For loops apply the same small operation to every item without copying it by hand. They support introductory exercises, text processing, and later algorithms. Knowing when a loop needs an item versus an item’s position helps make code both correct and readable.

## Learning Objectives

- Define an iterable, loop target, and loop suite.
- Explain how a `for` statement assigns successive items to its target.
- Apply `range()` while accounting for its excluded stop endpoint.
- Use `enumerate()` to obtain a position and value together.
- Trace the output of a short `for` loop.

## The College Version

### Iteration and the shape of a for statement

A `for` statement expresses iteration: repeated work over successive items supplied by an iterable. In `for item in iterable:`, Python assigns one supplied item to `item` and executes the indented suite, repeating until no items remain. Direct iteration makes the intended value clear: `for name in names:` works with each name rather than an unexplained counter.

The loop target commonly is a name, and its value changes on each pass. The colon and indentation form the suite; an outer-indented line is outside the loop. This lesson covers ordinary `for` iteration, not `while` loops, custom iterators, or conditional logic in depth.

### Using range without an off-by-one error

`range()` supplies an arithmetic progression of integers. `range(4)` supplies 0, 1, 2, and 3: its stop endpoint is excluded. `range(2, 10, 3)` supplies 2, 5, and 8. Trace a small range when uncertain rather than guessing about its last value.

A range object supplies successive values during iteration; it is not a list containing all of them. Use `range()` when the numeric progression itself is needed. When only values from a sequence are needed, direct iteration is usually clearer than `range(len(items))`. `for title in titles:` tells a reader that the body uses titles. An index is useful only when its number has a purpose, such as displaying an ordered label or referring to a location.

### Positions and values with enumerate

`enumerate(iterable)` yields a count and each value from the iterable. The count starts at 0 unless `start` is provided. Python can unpack those pairs: `for position, color in enumerate(colors, start=1):`. The first pass gives position 1 and the first color, then the next pair on the next pass.

This is useful for numbered displays and avoids separately maintaining a counter. `enumerate()` does not alter the iterable. When no number is needed, use the simpler direct form instead. A loop header should clearly show whether the body needs a value, its displayed position, or both.

## Key Vocabulary

- **iteration:** taking successive items from an iterable and performing a loop suite for each.
- **iterable:** an object that can supply items for iteration.
- **loop target:** the assignment target that receives the current item.
- **suite:** the indented statements controlled by a Python statement.
- **range:** a built-in object for an arithmetic progression of integers.
- **stop endpoint:** a range boundary that is not included.
- **enumerate:** a built-in that yields a count with each iterable value.

## Eli-10

Imagine a row of labeled bins. A `for` loop opens one bin at a time, gives its contents a temporary name, and does the same job with those contents. The name after `for` is for the current item, not all bins together. `range(4)` is a ticket dispenser that hands out 0 through 3. `enumerate()` adds a number sticker to each item, so a loop can receive both “1” and “red.”

## Eli's Analogy

A for loop is a cafeteria line: the server handles one tray at a time with the same procedure. `enumerate()` adds a tray number.

The analogy has limits: a real line may change procedures or add trays, while these basic examples focus on ordinary iteration over supplied items.

## Worked Example

```python
colors = ['red', 'blue']
for position, color in enumerate(colors, start=1):
    print(position, color)
```

Output:

```text
1 red
2 blue
```

The loop first receives `(1, 'red')`, then `(2, 'blue')`. Likewise, `range(2, 10, 3)` supplies 2, 5, and 8, never 10.

## Common Mistakes

- Expecting `range(4)` to include 4; it supplies 0 through 3.
- Using `range(len(items))` when only each item is needed; use direct iteration.
- Treating a loop target as all items; it names the current item.
- Manually updating a counter; use `enumerate()` when count and value belong together.

## Compare / Contrast

- `for item in items` supplies values; `for index, item in enumerate(items)` supplies a count and a value.
- `range(4)` and `[0, 1, 2, 3]` can supply the same values in a loop, but a range object is not a list.

## Key Takeaway

A `for` loop visits items from an iterable and runs its suite once per item. Use direct iteration for values, `range()` for numeric progressions with excluded stops, and `enumerate()` for a count plus a value.

## Practice Question Bank

1. In `for fruit in fruits:`, `fruit` receives the current item supplied by `fruits`.
2. `range(2, 10, 3)` prints 2, 5, and 8.
3. When only names are needed, `for name in names: print(name)` is clearest.
4. `enumerate(drinks, start=1)` supplies menu numbers and drinks together.
5. `enumerate()` avoids a separate manual counter by yielding count-and-value pairs.

## Sources

- Python Software Foundation, [Python Language Reference: compound statements](https://docs.python.org/3/reference/compound_stmts.html)
- Python Software Foundation, [Python Tutorial: More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html)
- Python Software Foundation, [Built-in Functions](https://docs.python.org/3/library/functions.html)

## Related Topics

- While Loops
- Lists
- List Comprehensions
- Conditionals

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only official documentation; no source prose adapted. Examples executed with Python 3 on 2026-08-19.
