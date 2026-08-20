# if, elif, and else

## In 30 Seconds

An `if` statement chooses whether to run an indented block of code. Add `elif` clauses when there are more cases to test, and use `else` for the fallback when none of the earlier conditions succeeds. Python evaluates an if/elif chain from top to bottom and runs at most one selected branch. Put more specific cases before broader ones so an earlier branch does not catch them first.

## Why This Matters

Branching lets one program respond differently to different inputs or states: a score can receive a letter grade, or an order can receive a shipping rule. In coursework, it is a foundation for tracing program behavior and expressing requirements precisely. In later programs, clear branch order makes policies easier to review and change. A correct condition is not enough if it appears after an earlier condition that already matches the same case.

## Learning Objectives

- Define an `if` clause, an `elif` clause, and an `else` clause.
- Explain how Python selects one branch in an if/elif/else chain.
- Apply ordered conditions to a small classification problem.
- Distinguish an `else` fallback from another condition that must be tested.
- Analyze how branch order can make a later case unreachable.

## The College Version

### A conditional statement is a sequence of clauses

Python places `if`, `elif`, and `else` in a compound statement. An `if` clause begins with the keyword `if`, followed by an expression and a colon. The indented suite below it is the code associated with that clause. An `elif` clause has its own expression and suite; it can follow an `if` and can be repeated. An optional `else` clause has no expression. Its suite is the fallback when every preceding condition in that chain is false. Indentation is part of the statement structure, so code at the same indentation level as the `if` is outside the chain.

For a simple two-way choice, `if` plus `else` is often enough. For several mutually exclusive categories, an if/elif/else chain states the categories in their priority order. `elif` is Python's spelling for “else if”; it is not a separate nested statement that runs after a successful `if`.

### Selection proceeds from top to bottom

When Python reaches a chain, it evaluates the `if` expression first. If that expression is true, Python executes that suite and skips every `elif` and `else` in the same chain. If it is false, Python tries the first `elif`, then later `elif` clauses in order until one is true. If none succeeds and an `else` exists, Python runs the `else` suite. Thus a single chain selects zero or one suite: zero is possible when there is no `else` and every tested expression is false.

Order is therefore program logic, not formatting. Consider categories `score >= 90`, `score >= 80`, and `score >= 70`. They must appear in descending threshold order. If `score >= 70` came first, a score of 93 would satisfy it immediately, and the later 90 and 80 branches would never be considered. Use an `else` only when every remaining possibility truly belongs in the same fallback category.

### Nested choices versus independent choices

A suite can contain another `if` statement, producing a nested decision. Nesting is useful when the second decision matters only after the first one has selected a context. Keeping nesting modest makes the path a reader must trace easier to see.

Do not confuse a chain with two independent `if` statements. Two separate `if` statements may both run: success in the first does not prevent Python from evaluating the second. An if/elif/else chain is for alternatives where one selected branch is intended. When requirements change, name the cases in plain language first, then check whether their conditions overlap and which case should have priority. This small design step is often clearer than repairing a surprising result after the fact. The expressions themselves may use booleans or comparisons, but their detailed rules belong to the lessons on booleans and operators.

### Planning a readable chain

Before writing the code, list representative inputs and the exact branch each input should choose. Include boundary values such as 70, 80, and 90 when thresholds are involved. This makes missing ranges and accidental overlaps visible before they become bugs.

## Key Vocabulary

- **conditional statement:** A statement that chooses whether to execute a suite based on tested conditions.
- **clause:** One keyword-led part of a compound statement.
- **suite:** The indented block of statements controlled by a clause.
- **if clause:** The first clause in a conditional chain.
- **elif clause:** An alternative clause tested only after earlier clauses fail.
- **else clause:** The optional fallback when no earlier condition succeeds.
- **branch order:** The arrangement that determines which conditions are tested first.

## Eli-10

Imagine a school office sorting report cards. It looks at one card at a time. First it asks, “Is this score at least 90?” If yes, it puts the card in the A tray and stops asking questions for that card. If not, it asks the next question: “Is it at least 80?” It keeps going down the trays. If no labeled tray fits, the card goes in the last tray.

An `if` is the first question. Each `elif` is another question to ask only when the earlier answer was no. `else` is the last tray: it does not ask a question because it accepts what is left. The order matters. If the office asked “at least 70?” first, a 93 card would go into that tray too soon.

## Eli's Analogy

A top-to-bottom set of labeled sorting trays for one card. Programs evaluate expressions, not people or physical cards, and an else branch can perform any code rather than merely sorting an item.

## Worked Example

```python
def label(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "Needs work"

for score in (93, 84, 71, 62):
    print(score, label(score))
```

Running this with Python 3 prints `93 A`, `84 B`, `71 C`, and `62 Needs work`. For 84, the 90 test fails, the 80 test succeeds, and the function returns `B`; later clauses are skipped. Reversing the 70 and 90 tests would misclassify 93 because the broad 70 condition would win first.

## Common Mistakes

- **Broad threshold first:** Order overlapping ranges from highest threshold to broadest.
- **Later elif expected to run:** Use a separate if only when more than one action may run.
- **Condition on else:** Put a condition on `elif`; reserve `else` for the remaining case.
- **Lost indentation:** Indent every statement controlled by a clause consistently.

## Compare / Contrast

- **elif vs. else:** An elif tests a new expression; else is the untested fallback.
- **Chain vs. separate if statements:** A chain selects at most one suite, while separate if statements can each execute.

## Key Takeaway

An if/elif/else chain tests alternatives in written order and selects at most one branch. Put overlapping cases in the correct priority order, and reserve else for the true fallback.

## Practice Question Bank

1. What is the role of an `else` clause in an if/elif/else chain? **Answer: C.**
2. A chain begins with `if score >= 70` and later has `elif score >= 90`. What happens for `score = 93`? **Answer: A.**
3. Which arrangement correctly expresses mutually exclusive score bands? **Answer: D.**
4. When can two separate `if` statements be preferable to an if/elif/else chain? **Answer: A.**
5. Which structure best fits a member rule, a nonmember free-shipping rule, and a standard fallback? **Answer: B.**

## Sources

- Python Software Foundation, [Compound statements](https://docs.python.org/3/reference/compound_stmts.html).
- Python Software Foundation, [More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html).

## Related Topics

- `python-programming:foundations:conditionals`
- `python-programming:foundations:booleans`
- `python-programming:foundations:operators`
- `python-programming:foundations:for-loops`
- `python-programming:foundations:while-loops`

## Editorial Metadata

Source-verified original synthesis, researched 2026-08-19. Official documentation was used as reference-only; no source prose was adapted.
