# Small Executable Python Examples

## In 30 Seconds

A small executable example is a short Python program with one purpose and a checkable result. Predict what it will do, run it, and compare the output with your prediction. Keep inputs and setup small so every line can be explained.

## Why This Matters

Runnable examples turn a programming claim into a repeatable observation. They support careful explanations, reproducible reports, and focused changes without claiming to prove an entire application correct.

## Learning Objectives

- Define a small executable example.
- Distinguish expected from observed output.
- Predict a short program's result.
- Apply an assertion to a focused condition.

## The College Version

### A runnable example is evidence, not decoration

An executable example is code that can be run in Python 3 to answer a narrow question. It identifies starting values, an operation, and an observable result. Remove irrelevant setup so the reader can account for every line. Label the language and avoid treating one run as proof about every environment.

### Read, predict, run, and compare

Assignment binds names to values. With `x = 7` and `y = 3`, predict that `x + y` is `10` and `x > y` is `True`; then run the code. If observed output differs, preserve the exact code and output and inspect the values and operations before changing anything.

Separate the observation from its explanation. Record the code, the output, the Python version when relevant, and the input values a reader needs to repeat it. Another reader can then confirm the observation or question the explanation without guessing what was run.

### Assertions state a condition that must hold

`assert condition` checks a condition during execution. A true condition continues silently; a false enabled condition raises `AssertionError`. Assertions are useful focused checks, not a complete strategy for untrusted input or a substitute for full testing.

## Key Vocabulary

- **Executable example:** Focused code that can be run to observe behavior.
- **Expected output:** A predicted displayed result.
- **Observed output:** The result actually displayed.
- **Assertion:** A check that a condition is true.
- **AssertionError:** Exception raised by a false enabled assertion.
- **Reproducible:** Able to be run again under stated conditions.

## Eli-10

A tiny Python example is like a small experiment: write what you expect, run it, and look at what happened. An assertion is a checkpoint that says a fact must be true. If it is false, Python stops at that checkpoint. Keeping the experiment small makes each result easier to explain.

## Eli's Analogy

Checking one measuring cup before cooking a recipe gives evidence about one step. Programs have many more moving parts, though, so one passing example cannot prove a whole application correct.

## Worked Example

```python
x = 7
y = 3
print(x + y)
print(x > y)
assert x + y == 10
print("checked")
```

The output is `10`, `True`, and `checked` on separate lines. The assertion succeeds silently because 7 plus 3 is 10. If it instead checked `== 11`, Python would raise `AssertionError` and not reach the final print.

## Common Mistakes

- Do not call code an example without running it.
- Do not mix many new concepts into one demonstration.
- Do not expect a passing assertion to print a message.
- Do not use assertions as the only validation for untrusted input.

## Compare / Contrast

`print()` displays a value; `assert` checks a condition. Expected output is a prediction, while observed output comes from execution.

## Key Takeaway

Small executable examples let you predict and verify a precise Python claim. Keep them focused and use assertions for conditions that should hold.

## Practice Question Bank

1. What happens when an enabled Python assertion has a false condition?
2. Why predict output before running a small example?
3. What occurs for `assert x + y == 10` when x is 7 and y is 3?
4. Which revision keeps a comparison example focused?
5. What should you do when output differs from a prediction?

## Sources

- Python Software Foundation, [Python Tutorial](https://docs.python.org/3/tutorial/introduction.html)
- Python Software Foundation, [Language Reference: simple statements](https://docs.python.org/3/reference/simple_stmts.html)

## Related Topics

- Running Python Programs
- Basic Testing
- Debugging

## Editorial Metadata

Original EliExplains synthesis; source-verified 2026-08-19. Reference-only documentation; no source prose adapted.
