# Conditionals

## In 30 Seconds

A conditional is a decision: evaluate a condition, then choose an outcome that matches its truth value. In Python, comparisons such as `score >= 60` produce `True` or `False`, and other values can also be truth-tested. Conditionals let a program respond differently to its input or state instead of following one unchanging path.

## Why This Matters

Programs make decisions constantly: whether input is acceptable, whether a user may proceed, whether a value needs a fallback, or which message explains a result. Conditional reasoning turns a vague rule into a testable rule with defined outcomes. It also builds habits that matter in later programming work: state the condition precisely, test edge cases, and keep the condition separate from the action chosen after it.

## Learning Objectives

- Define a conditional as a decision based on a truth-tested condition.
- Explain how a comparison can supply a Boolean condition.
- Distinguish a condition from the outcome selected by that condition.
- Trace a two-outcome conditional expression.
- Apply boundary-case reasoning to a simple program rule.

## The College Version

### A program decision has separate parts

A conditional first evaluates a condition and then selects a matching outcome. The condition is a question about program state; the outcome is what the program chooses after the question has an answer. For example, `score >= 60` is a condition and `'eligible'` is a possible outcome. Python comparisons yield Boolean values. Python can also truth-test other objects, but clear conditions make the intended rule visible. The adjacent `if-elif-and-else` lesson owns detailed branch syntax.

### Conditions are rules, not labels

A condition must be evaluated from current values. With `score = 72`, `score >= 60` is `True`; with `score = 59`, it is `False`. A boundary case is a value exactly at a rule's edge. For a “60 or more” policy, test 59, 60, and 61. The rule requires `>=`, not `>`, because 60 is included. Write the policy in ordinary language, identify its boundary, and then express a condition that matches it.

### Selecting one of two values

Python's conditional expression is `first_value if condition else second_value`. It evaluates the condition and returns the selected expression. `'eligible' if score >= 60 else 'review'` returns a string, while `score >= 60` remains the Boolean condition. This compact form fits a short two-way value choice. A larger multi-step decision is clearer as a branch statement, covered in the adjacent lesson.

## Key Vocabulary

- **conditional:** a program decision that selects an outcome after testing a condition.
- **condition:** an expression whose truth value determines the selected outcome.
- **Boolean:** Python's `True` or `False` value.
- **comparison:** an expression that relates values and yields a Boolean result.
- **outcome:** the value or action selected after a conditional test.
- **boundary case:** an input exactly at a rule's edge.
- **conditional expression:** Python's `x if condition else y` form.

## Eli-10

A conditional is like a rule at a school gate: check a question, then choose what happens. If the rule is “a score of 60 or more may proceed,” the question is whether the score is at least 60. A score of 72 gets yes; 59 gets no. The score, the yes-or-no answer, and the message chosen afterward are different things. Checking 59, 60, and 61 helps catch mistakes at the edge.

## Eli's Analogy

Think of a railroad switch controlled by a sensor. The sensor asks one question, and the switch directs the train onto one of two tracks. The sensor's answer is the condition; the track chosen is the outcome.

The analogy has limits: Python can select a value or choose code to run, and conditions can be more complex than one sensor question.

## Worked Example

With `score = 72`, `result = 'eligible' if score >= 60 else 'review'` produces `'eligible'`: `72 >= 60` is `True`. With `score = 59`, it produces `'review'`. At the boundary, `60 >= 60` is `True`, exactly matching “60 or more.” The comparison is the condition; `result` is the selected outcome.

## Common Mistakes

- Treating a selected message as the condition. Keep the question separate from its result.
- Using `>` for “or more.” Use an inclusive comparison and test the boundary.
- Assuming a truth-tested value is literally `True` or `False`. It can retain its own type.
- Compressing a multi-step decision into a terse expression. Use clearer branch structure when needed.

## Compare / Contrast

- **Condition vs. outcome:** a condition is the truth-tested question; an outcome is the selected result.
- **`score >= 60` vs. `'eligible'`:** the comparison yields a Boolean; the string is a selected value.
- **Conditional expression vs. branch statement:** the expression chooses one of two values inline; branch syntax is covered next.

## Key Takeaway

A conditional first evaluates a clear condition, then selects an outcome for `True` or `False`. Separate the rule from its result, and test boundary values.

## Practice Question Bank

1. What does a Python comparison such as `score >= 60` produce? **Answer: A.**
2. A rule says “a score of 60 or more is eligible.” Which condition matches that rule? **Answer: B.**
3. With `score = 59`, what does `'eligible' if score >= 60 else 'review'` evaluate to? **Answer: C.**
4. Why should a programmer test scores 59, 60, and 61 for a “60 or more” rule? **Answer: D.**
5. Which statement correctly distinguishes a condition from an outcome? **Answer: B.**

## Sources

- [Python Language Reference: Expressions](https://docs.python.org/3/reference/expressions.html)
- [Python Tutorial: More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html)
- [Python Built-in Types](https://docs.python.org/3/library/stdtypes.html)

## Related Topics

Booleans; Operators; If, Elif, and Else; Input and Output; Basic Testing.

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-19 using reference-only official Python documentation; all examples executed with Python 3.
