# Debugging

## In 30 Seconds

Debugging is the deliberate process of finding why a program does not behave as intended, then changing and checking one thing at a time. Python reports syntax errors before code runs and shows a traceback for an unhandled runtime exception. A program can also run without crashing yet calculate the wrong result; that is a logic error and needs a small, checkable example.

## Why This Matters

Debugging turns “it does not work” into a checkable question. In coursework and practical programs, a short reproducible case and a careful traceback can reveal whether the issue is invalid input, a mistaken assumption, or control flow that never reaches the intended line. These habits support later testing, but debugging is investigation rather than proof that every case works.

## Learning Objectives

- Distinguish syntax, runtime, and logic errors in Python.
- Read the essential parts of an unhandled-exception traceback.
- Apply a repeatable debugging loop to a small program.
- Use print-based inspection to check an intermediate value.
- Explain when a breakpoint debugger is useful.

## The College Version

### Classify the observed failure before choosing a tool

Python reports invalid syntax before normal execution. For example, `if True print("hello")` lacks its required colon. A runtime exception is different: `1 / 0` is valid syntax but raises `ZeroDivisionError` while running. A logic error is different again: code runs but produces a result that violates its intended rule, such as returning a sum when an average was required.

### Treat a traceback as a route through the failing call

For an unhandled exception, start at the bottom of the traceback. The final line names the exception type and usually its message. Then move upward through the calls to see how execution reached the source location. A traceback is evidence for a hypothesis, not proof that every other line is correct.

### Use a controlled investigation loop

Reproduce the behavior, state one hypothesis, gather one relevant observation, make a focused change, and run the same case again. Reduce a noisy program to the smallest case that still shows the behavior. Record the exact input, command, and observed output so the investigation can be repeated. A written observation is useful only when it is specific enough that someone else could check it. Label temporary `print()` output so it can be interpreted and remove it after the question is answered. For repeated or nested calls, `pdb` can pause at a breakpoint, step through source lines, inspect stack frames, list source, and evaluate expressions in a frame.

## Key Vocabulary

- **debugging:** Deliberately investigating behavior that differs from intention.
- **syntax error:** A structural problem Python finds while parsing source.
- **runtime exception:** An event during execution that interrupts normal control flow.
- **logic error:** A defect that produces an unintended result without necessarily crashing.
- **traceback:** A report of calls and source locations for an unhandled exception.
- **breakpoint:** A chosen pause point for debugger inspection.
- **stack frame:** The execution context for one active function call.

## Eli-10

Debugging is careful detective work for a program. First make the same problem happen again. Then ask one small question, such as “What number reached this division?” A traceback is a trail of footprints showing the last place Python could not continue. A print statement is a labelled note at one checkpoint.

## Eli's Analogy

A debugger is like pausing a board game at a particular turn to inspect the cards and moves that led there. Programs do not have players or cards; the analogy does not explain Python syntax, tracebacks, or stack-frame rules.

## Worked Example

This Python 3 example prints the state that explains an empty-list failure:

```python
def mean(values):
    total = sum(values)
    print(f"count={len(values)} total={total}")
    return total / len(values)

print(mean([4, 6, 8]))
print(mean([]))
# count=3 total=18
# 6.0
# count=0 total=0
# ZeroDivisionError: division by zero
```

The final exception names the failed operation; `count=0` supports the hypothesis. Choose and document an empty-input contract, then rerun both the original and ordinary case.

## Common Mistakes

- **Mistake:** Changing several lines at once. **Correction:** Make one focused change.
- **Mistake:** Reading only the first traceback line. **Correction:** Start with the final exception and message.
- **Mistake:** Equating no crash with correctness. **Correction:** Compare output with an expected result.
- **Mistake:** Leaving unlabelled debug prints. **Correction:** Use temporary, labelled observations.
- **Mistake:** Hiding errors with a broad handler. **Correction:** Diagnose first; exception design is separate work.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Syntax error | Runtime exception | Parsing catches syntax; execution raises the exception. |
| Runtime exception | Logic error | An exception interrupts execution; a logic error can finish normally. |
| `print()` | `pdb` | A print records one chosen value; pdb can pause and inspect frames. |

## Key Takeaway

Reproduce the behavior, form one hypothesis from the error or result, inspect relevant state, make a focused change, and rerun the same case. A quiet program still needs its result checked.

## Practice Question Bank

1. Which situation is a Python syntax error? **C.** Python rejects `if ready print("go")` before normal execution.
2. What does `KeyError: 'course'` at the end of a traceback first suggest? **A.** Inspect the mapping and call path for a missing `course` key.
3. A sum is returned where an average was intended. What is it? **B.** A logic error.
4. What helps inspect local names in a particular nested call? **D.** Pause in `pdb` and inspect the selected stack frame.
5. What follows reproduction in a controlled investigation? **B.** State one hypothesis and inspect evidence that could reject or support it.

## Sources

- Python Software Foundation, [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)
- Python Software Foundation, [pdb — The Python Debugger](https://docs.python.org/3/library/pdb.html)
- Allen B. Downey, [Think Python Appendix A: Debugging](https://greenteapress.com/thinkpython2/html/thinkpython2021.html)

## Related Topics

- `python-programming:foundations:python-syntax`
- `python-programming:foundations:exceptions`
- `python-programming:foundations:basic-testing`
- `python-programming:foundations:functions`
- `python-programming:foundations:input-and-output`

## Editorial Metadata

Original EliExplains synthesis; source-verified on 2026-08-19. Reference-only sources; no source prose adapted. Code and stated output were executed with `python3`.
