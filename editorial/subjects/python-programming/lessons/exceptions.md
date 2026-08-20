# Exceptions

## In 30 Seconds

An exception is a runtime event that interrupts normal Python execution, such as converting invalid text with `int()` or dividing by zero. A `try` statement lets a program handle an expected kind of exception deliberately. Put only the operation that may fail in `try`, catch its specific exception in `except`, use `else` for the success path, and use `finally` for work that must happen before the statement finishes.

## Why This Matters

Exceptions let a program distinguish an expected problem from a successful result instead of pretending every operation succeeds. A targeted handler can give a useful response to a known condition while allowing unexpected defects to remain visible. That distinction prevents both crashes from routine bad input and silent failures caused by catching too much.

## Learning Objectives

- Define a Python runtime exception and distinguish it from a syntax error.
- Trace `try`, `except`, `else`, and `finally`.
- Select a targeted exception handler for a known operation.
- Explain how exception inheritance and handler order affect matching.
- Use `raise ValueError` to enforce a simple function contract.

## The College Version

### Exceptions describe execution-time problems

Python can reject invalid syntax before execution. Syntactically valid code can also fail while executing; Python calls these execution-time errors exceptions. `int("four")` is valid code but raises `ValueError`, and `1 / 0` raises `ZeroDivisionError`. If no code handles an exception, Python reports a traceback showing the call path and source location. An exception is an object-based control-flow event, not just an error message.

The exception type carries meaning. `ValueError` says an operation received an inappropriate value; `TypeError` commonly signals an unsuitable type. Choose a handler based on that meaning. This lesson covers expected local conditions, not a complete debugging workflow, file-handling patterns, or custom exception design.

### A try statement separates protected work from outcomes

Python first executes the `try` suite. If it succeeds, all `except` suites are skipped. If an exception occurs, Python skips the rest of the try suite and looks for a matching handler. A matching handler runs; an unmatched exception propagates to a caller or is unhandled.

Keep the `try` suite narrow: protect the conversion that may fail, rather than unrelated output or calculations. Use `else` for work that should happen only after the try suite succeeds. Use `finally` for a last task that must happen as the statement completes on both success and error paths. Avoid `return`, `break`, or `continue` in `finally`, because they can hide an exception.

### Target the exception type and respect the hierarchy

Built-in exceptions are classes. `BaseException` is their common base, and `Exception` is the usual base for ordinary application errors. A handler for a class matches instances of that class and its subclasses. Python uses the first matching handler, so a specific subclass handler must come before a handler for its superclass.

Prefer a handler for the expected condition, such as `except ValueError:` around `int(text)`. A bare `except:` can catch `KeyboardInterrupt` and `SystemExit` as well as ordinary errors, so it is usually inappropriate. `except Exception:` is also too broad if the code understands only one condition. Let an unfamiliar exception propagate instead of inventing a recovery.

`raise` lets code state a violated input contract. A function requiring a nonnegative number can `raise ValueError` for a negative input. Use a regular conditional for ordinary predictable branching; raise an exception when the function cannot continue under its stated contract.

### Trace both paths

For a try statement, trace the no-exception path and the exception path separately. A successful try runs `else`, then `finally`. A matching exception runs the handler, then `finally`. An unmatched exception still runs `finally` before moving outward. This simple trace makes output and recovery decisions checkable.

## Key Vocabulary

- **exception:** An event raised during execution that interrupts normal control flow.
- **traceback:** Python’s report of a call path and source locations for an unhandled exception.
- **try suite:** The block Python executes first in a try statement.
- **exception handler:** An `except` clause that responds to matching exception instances.
- **propagate:** Pass an exception outward when current code does not handle it.
- **exception hierarchy:** The subclass relationships that determine handler matching.
- **raise:** The statement that causes a specified exception to occur.
- **finally suite:** An optional block that runs as a try statement completes.

## Eli-10

Imagine a recipe machine that sometimes receives an ingredient it cannot use. An exception is its clear signal: it cannot finish this step normally. A `try` block is the small area where you expect that particular problem might happen. An `except ValueError` block is the prepared instruction for that exact signal. If nothing goes wrong, `else` handles normal success work. `finally` is the last checklist item on either path.

Do not tell the machine to ignore every alarm. A plan for a bad number should not silence an unfamiliar signal that needs investigation.

## Eli's Analogy

A try statement is like a small station with a trained response for one known alarm, a normal-work lane, and a final shutdown checklist. Programs do not literally have alarms or lanes; the analogy does not explain exception objects, inheritance, or all effects of returning from `finally`.

## Worked Example

This executed function accepts text representing a nonnegative whole number. Only the conversion is protected. A negative result violates the function’s contract, so it deliberately raises `ValueError`. Both the success and error path run `finally`.

```python
def show_count(text):
    try:
        count = int(text)
        if count < 0:
            raise ValueError("count must be nonnegative")
    except ValueError as error:
        print(f"invalid count: {error}")
    else:
        print(f"accepted: {count}")
    finally:
        print("checked")

show_count("12")
show_count("-3")
# accepted: 12
# checked
# invalid count: count must be nonnegative
# checked
```

## Common Mistakes

- **Mistake:** Using a bare `except:` for ordinary input errors. **Correction:** Catch the expected type, such as `ValueError`.
- **Mistake:** Putting unrelated code in `try`. **Correction:** Protect the smallest operation whose exception you can handle.
- **Mistake:** Putting a superclass handler first. **Correction:** Put the more specific subclass handler first.
- **Mistake:** Assuming `else` follows a handled exception. **Correction:** It runs only after the try suite succeeds.
- **Mistake:** Returning from `finally`. **Correction:** Avoid control transfer there; it can suppress an exception.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Syntax error | Exception | Syntax errors are detected while parsing; exceptions arise during execution. |
| `except ValueError` | bare `except` | The first targets a known condition; the second catches nearly everything. |
| `else` | `finally` | `else` runs after successful try work; `finally` runs on both paths. |

## Key Takeaway

Handle only failures your code understands: keep `try` narrow, catch a specific exception type, use `else` for success, and let `finally` do its final work without hiding an exception.

## Practice Question Bank

1. Which is an exception rather than a syntax error? **C.** `int("blue")` raising `ValueError` during execution.
2. Which handler belongs around `int(text)`? **D.** `except ValueError:`.
3. What happens to `else` after a successful try suite? **A.** It runs before `finally`.
4. Why does `FileNotFoundError` go before `OSError`? **B.** It is a subclass and the first matching handler runs.
5. What happens after an unmatched exception with `finally`? **C.** `finally` runs, then the exception continues outward.

## Sources

- Python Software Foundation, [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)
- Python Software Foundation, [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html)
- Python Software Foundation, [The try statement](https://docs.python.org/3/reference/compound_stmts.html#the-try-statement)

## Related Topics

- `python-programming:foundations:input-and-output`
- `python-programming:foundations:functions`
- `python-programming:foundations:scope`
- `python-programming:foundations:debugging`
- `python-programming:foundations:files`

## Editorial Metadata

Original EliExplains synthesis; source-verified on 2026-08-19. Reference-only official documentation; no source prose adapted. All Python code and stated output were executed with `python3`.
