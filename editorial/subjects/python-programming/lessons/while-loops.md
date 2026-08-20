# while Loops

## In 30 Seconds

A `while` loop repeats its indented body while its condition is true. Python tests the condition before each possible pass through the body, so a false condition means the body does not run at all. A useful loop has a clear progress step—such as reducing a counter, receiving a sentinel value, or improving an estimate—so it eventually reaches a stopping condition.

## Why This Matters

Many programs cannot know in advance how many attempts, messages, or calculations they will need. A `while` loop expresses “keep going until the state says stop.” Learning to name the condition and identify the progress toward its becoming false helps prevent accidental infinite loops. The same reasoning supports input validation, retries, simulations, and numerical approximation.

## Learning Objectives

- Define a condition-controlled `while` loop and trace its execution.
- Explain why a progress update is necessary for ordinary loop termination.
- Apply `while` to a counter-controlled task with a correct boundary condition.
- Distinguish `break` from `continue` in a `while` loop.
- Analyze why a loop does or does not terminate for a stated initial value.

## The College Version

### Condition, body, and the next test

A Python `while` statement has a condition followed by a colon and an indented suite: `while condition:`. Python evaluates the condition before it runs the suite. If the result is true, it runs the suite and returns to evaluate the condition again. If the result is false, it skips the suite and continues after the loop. This makes a `while` loop condition-controlled: the current program state, rather than a preselected number of passes, decides whether another pass is allowed. The condition may be false on the first test, in which case the body executes zero times. The indentation is not decoration; it marks which statements are repeated.

For a counter, a concise pattern is `remaining = 3` followed by `while remaining > 0:` and an update such as `remaining -= 1` inside the body. Starting at 3, the tests are true for values 3, 2, and 1. After the third body execution, the update makes `remaining` 0; the next test is false, so the loop ends. Notice that the comparison describes when to continue, not the desired final value in isolation. Choosing `>` rather than `>=` changes how many values are processed.

### Progress is a correctness requirement

For an ordinary terminating `while` loop, some state relevant to its condition must move toward a case where the condition is false. In the counter example, `remaining -= 1` is the progress step. A loop can also progress by reading another input, removing work from a queue, or refining an estimate. The exact proof can be informal for a simple counter: a nonnegative integer decreases by one each pass and cannot remain greater than zero forever. More complicated loops deserve a written invariant or a limit so that a programmer can reason about their behavior.

An infinite loop occurs when the controlling condition never becomes false and no other control transfer leaves the loop. A common error is to initialize a counter but forget its update. Another is to put an update after a `continue` that can skip it. `while True:` is not automatically an error; it deliberately uses an always-true condition and must have a reliable exit, often a `break` after a newly observed stop condition. It is useful when the stop decision naturally happens after some work, but the exit path should be easy to see and test.

### break, continue, and loop else

`break` immediately terminates the innermost loop. In a prompt loop, a program may read a value, test whether it is the sentinel `quit`, and use `break` if it is. Statements later in that iteration do not run. `continue` is narrower: it skips the rest of the current suite and goes back to test the `while` condition again. A loop that uses `continue` must still make progress before it reaches `continue`, or on every path that leads there. For example, increment a counter before continuing past an even value; otherwise the loop would keep encountering the same value.

Python also permits an `else` suite on `while`. It runs when the condition becomes false, including when it was false initially, but not when the loop ends through `break`. That behavior can express “no early exit occurred,” though a short introductory loop often reads more clearly with a flag or a direct post-loop action. Use this feature deliberately: it is not an alternative spelling of a final statement, because its execution depends on how the loop ended. When reviewing code, trace both the ordinary false-condition path and every `break` path separately. A `while` loop is different from an iterable-driven loop: it repeatedly rechecks an expression that you control. This lesson focuses on that condition-and-progress model, rather than iteration through a collection.

## Key Vocabulary

- **while loop:** A statement that repeatedly executes an indented suite while its condition evaluates to true.
- **condition:** An expression evaluated to decide whether a control-flow path is taken.
- **loop body:** The indented suite of statements that a loop controls.
- **iteration:** One execution of a loop body, or the repeated-execution process considered as a whole.
- **progress step:** A state change that moves a loop toward a stopping condition.
- **infinite loop:** A loop that does not reach a normal stopping condition and continues indefinitely.
- **break:** A statement that terminates the innermost enclosing loop immediately.
- **continue:** A statement that skips the remainder of the current loop body and returns to the next control step.
- **sentinel:** A designated value or event used to signal that a repeated process should stop.

## Eli-10

Think of a `while` loop as a rule written on a door: “You may do another round only while this light is green.” Python checks the light before every round. If it is green, it does the indented work. Then it checks again. The work needs to change something that can eventually turn the light red. A countdown changes its number from 3 to 2 to 1 to 0, so it stops. If the number never changes, the door rule stays green forever and the program keeps repeating.

## Eli's Analogy

It is like washing dishes while there are dirty dishes in the sink. Each pass washes one dish, reducing the number left. When none remain, the condition is no longer true. A `break` is deciding to stop immediately because the water has been shut off; a `continue` is setting aside one dish for later and moving straight to check whether dishes remain.

The analogy has limits. A program condition is an exact expression evaluated by Python, not a human judgment about whether the sink looks empty. Also, `continue` does not automatically remove a dish: code must still update the relevant state on paths that need progress.

## Worked Example

This countdown has a visible stopping argument:

```python
remaining = 3
seen = []
while remaining > 0:
    remaining -= 1
    seen.append(remaining)
print(seen)
```

It prints `[2, 1, 0]`. The initial test, `3 > 0`, permits the first body execution. Each execution subtracts one before recording the new value. After recording 0, Python returns to the header and tests `0 > 0`, which is false. Therefore the body ran exactly three times. The update belongs on every normal path through the body; moving it below a `continue` that is sometimes reached could leave `remaining` unchanged and accidentally prevent termination.

## Common Mistakes

- **Writing a condition but never changing state that affects it.** Identify the progress step and ensure it runs on every path that should lead to the next test.
- **Expecting the body to run once when the condition starts false.** A `while` condition is tested before the first body execution.
- **Using `continue` before a counter update.** Update the counter before continuing, or restructure the code so each path makes progress.
- **Treating `break` as if it merely skips one pass.** Use `continue` to skip the remaining statements of one pass; `break` exits the loop entirely.

## Compare / Contrast

- **Condition becomes false vs. `break` executes:** Both end a loop, but only the first is normal condition-based completion; a `while` `else` suite runs only in that first case.
- **`break` vs. `continue`:** `break` leaves the innermost loop, while `continue` skips the rest of the current body and retests the condition.
- **Counter condition vs. sentinel condition:** A counter changes predictably toward a numeric boundary; a sentinel stops when a designated input or event is observed.

## Key Takeaway

A `while` loop repeats only while its condition is true. Make its stopping condition and its progress step explicit, and use `break` or `continue` only with their distinct effects in mind.

## Practice Question Bank

1. **When does Python evaluate a `while` loop's condition?**
   - A. Only after the first body execution
   - B. Before each possible body execution
   - C. Only when `break` appears
   - D. Exactly once when the loop is defined
   - **Answer:** B. Python tests a `while` condition before each possible pass.

2. **What is the main defect in this code? `n = 2; while n > 0: print(n)`**
   - A. The condition is checked too early
   - B. `print` cannot appear in a loop
   - C. Nothing changes `n`, so the condition stays true
   - D. The loop should use an `else` clause
   - **Answer:** C. The condition has no progress toward false.

3. **A loop should append only odd values from 1 through 7. Which body preserves progress when even values are skipped?**
   - A. `if n % 2 == 0: continue; n += 1`
   - B. `if n % 2 == 0: break; n += 1`
   - C. `if n % 2 == 0: n += 1; continue`
   - D. `if n % 2 == 0: pass; continue`
   - **Answer:** C. Increment before `continue` so the loop does not get stuck at an even value.

4. **In a `while` loop, what does `break` do?**
   - A. Terminates the innermost loop immediately
   - B. Skips only the next statement
   - C. Makes the condition permanently true
   - D. Restarts the current body from its first line
   - **Answer:** A. `break` ends the loop; `continue` skips the rest of a pass.

5. **A `while` loop has an `else` suite. The body executes `break` during its second pass. What happens to that `else` suite?**
   - A. It runs before `break` finishes
   - B. It runs once for each completed pass
   - C. It runs only if the condition was initially false
   - D. It does not run because `break` ended the loop
   - **Answer:** D. A `while` `else` suite does not run when `break` terminates the loop.

## Sources

- [Python Language Reference: compound statements](https://docs.python.org/3/reference/compound_stmts.html)
- [Think Python 2e, Chapter 7: Iteration](https://greenteapress.com/thinkpython2/html/thinkpython2008.html)

## Related Topics

- `python-programming:foundations:booleans`
- `python-programming:foundations:conditionals`
- `python-programming:foundations:for-loops`
- `python-programming:foundations:operators`
- `python-programming:foundations:input-and-output`
- `python-programming:foundations:debugging`

## Editorial Metadata

- Status: READY_TO_PUBLISH
- Research status: source-verified
- Rights: Reference-only sources; no source prose adapted.
- Researched: 2026-08-19
