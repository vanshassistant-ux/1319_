# List Comprehensions

## In 30 Seconds

A list comprehension is Python syntax for building a new list in one expression. Put the value to produce first, then a `for` clause that supplies values, and optionally an `if` clause that keeps only some of them: `[n * n for n in range(12) if n % 2 == 0]`. Read it as: “for each even `n` from 0 through 11, put `n` squared in a new list.”

## Why This Matters

List comprehensions appear frequently in Python because they can show a small transformation or filter without setting up a named list and an `append` call. In a course, they test whether you can trace evaluation order rather than merely recognize brackets. Use the compact form when it makes a data transformation easier to see, and a normal loop when the work needs steps, names, or branching that deserve their own lines.

## Learning Objectives

- Define a Python list comprehension and identify its result.
- Explain the order of its expression, `for` clause, and optional `if` clause.
- Trace a simple comprehension and its equivalent explicit loop.
- Apply a filter and transformation in one clear comprehension.
- Evaluate when an explicit loop is clearer than a comprehension.

## The College Version

### The shape: result expression first

A list comprehension is an expression that constructs a new list. Its common shape is `[expression for target in iterable]`. Read from the `for` clause: take each item from the iterable, bind it to the target, evaluate the expression at the front, and place that result in the new list. For example, `[word.upper() for word in ["map", "key", "id"] if len(word) == 3]` produces `["MAP", "KEY"]`. The condition filters candidates; a value that fails it contributes no element. The brackets say that the completed result is a list.

### Order and the equivalent loop

A comprehension can have an expression, at least one `for` clause, and optional `if` clauses. Preserve clause order when translating it to ordinary statements. In `[n * n for n in range(12) if n % 2 == 0]`, the loop obtains each integer, the condition accepts even ones, and only then does `n * n` become an item. The explicit form initializes an empty list, loops, tests the condition, and appends inside it. Both produce `[0, 4, 16, 36, 64, 100]`. With more than one `for`, clauses nest from left to right, just as corresponding nested loops do.

### Scope and readability are part of correct use

Python 3 evaluates a comprehension in its own implicit nested scope, apart from evaluating the iterable in the leftmost `for` in the enclosing context. Thus the target name in `[n * n for n in range(3)]` does not overwrite an outer `n`. Do not treat that detail as an invitation to hide complicated work in one line. A comprehension works well for one focused transformation or filter. When the work has several nested clauses, dense conditions, meaningful intermediate names, error handling, or branches, an explicit loop usually communicates the data flow better. A practical review method is to expand the proposed comprehension mentally into list initialization, loops, tests, and append action. If that expansion asks a reader to track more than one important decision at once, use the loop. It also gives a natural place for a breakpoint or temporary print while debugging. If rejected items need to be kept, counted, or explained, those separate outcomes are clearer as loop statements than as an elaborate expression. Test the short version with a peer or your future self. Do not claim an automatic speed advantage for the compact form: performance depends on the particular work and environment. This lesson does not introduce generator expressions, which use related but distinct syntax and behavior.

## Key Vocabulary

- **list comprehension:** A bracketed Python expression that creates a new list from one or more `for` clauses.
- **expression:** Code evaluated to produce a value; here, an output element.
- **iterable:** An object that can provide values one at a time, such as a list or `range` object.
- **target:** The name after `for` that receives each iterated value.
- **filter condition:** An optional `if` clause that decides whether an iteration contributes an element.
- **explicit loop:** A multi-line form that separates initialization, condition checks, and appending.

## Eli-10

Imagine a tray that starts empty. A list comprehension is a short instruction: look through a collection, keep only things that pass a rule, change each kept thing if needed, and place results on a new tray. The square example looks through 0 through 11, keeps evens, and puts their squares on the tray. The square operation is written first because it describes what goes on the tray.

## Eli's Analogy

It is like a cafeteria line with a label at the end: “Put a toasted bagel on the plate for each bagel that is plain.” The line chooses bagels and checks the rule; the label describes the finished item. Real Python evaluation has formal rules, however, and the analogy does not explain its separate scope for the target name.

## Worked Example

To make squares of even integers below 12, write `even_squares = [n * n for n in range(12) if n % 2 == 0]`. `range(12)` supplies 0 through 11. Zero passes and yields 0; one fails and adds nothing; two passes and yields 4. Continuing gives `[0, 4, 16, 36, 64, 100]`. To check it, start an empty list, loop over `n`, and append `n * n` only inside `if n % 2 == 0`. The explicit loop yields the same ordered list.

## Common Mistakes

- Putting the result expression after `for`; write expression, then `for`, then filter.
- Expecting a failed filter to add `None`; it adds no element.
- Reordering clauses when expanding to loops; preserve their left-to-right nesting.
- Compressing multi-step logic; use a loop when names and branches aid understanding.

## Compare / Contrast

A list comprehension and an explicit loop with `append` can build the same list. The comprehension is one compact expression; the loop exposes each operational step on its own line.

## Key Takeaway

Read a list comprehension from its `for` clause: iterate, optionally filter, then evaluate the front expression for accepted values. Concision is useful only when it preserves clarity.

## Practice Question Bank

1. What does the expression at the front determine? The value placed in the new list for an accepted iteration.
2. Which form squares odd values? `[n * n for n in range(6) if n % 2 == 1]`.
3. Where does append go in an explicit filtered loop? Inside the matching `if` block.
4. Why use an explicit loop? Several branches and intermediate steps need clear names.
5. What happens to an outer target name in Python 3? It keeps its prior value.

## Sources

- Python Software Foundation, [Data Structures](https://docs.python.org/3/tutorial/datastructures.html)
- Python Software Foundation, [Expressions: displays and comprehensions](https://docs.python.org/3/reference/expressions.html#displays-for-lists-sets-and-dictionaries)

## Related Topics

For Loops; Lists; Conditionals; String Methods; Functions.

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only official documentation; no source prose adapted. Researched 2026-08-19.
