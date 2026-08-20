# Return Values

## In 30 Seconds

A return value is the result a function sends back to the code that called it. In Python, `return expression` evaluates the expression, immediately ends that function call, and makes the result available to the caller. A bare `return`, or reaching the end of a function without `return`, produces `None`. Returning a value differs from printing it: returned data can be stored, combined, or tested by other code.

## Why This Matters

Return values give functions useful, composable outputs. A caller can assign a returned result, pass it into another function, or make a decision from it without tying the function to a screen or file. This separation makes small programs easier to test: call a function with known data and compare its returned result with the expected one. It also makes a function's contract clearer, because readers can identify the result it promises and every path that produces it.

## Learning Objectives

- Define a return value and explain how a caller can use it.
- Trace how `return expression` evaluates an expression and ends a function call.
- Distinguish returning a value from printing a value.
- Explain why a function with no value expression returns `None` in Python.
- Analyze a conditional function to find a path that accidentally returns `None`.

## The College Version

### A return statement completes a call

A function call is an expression: it runs the function body and then produces a result at the point where the call appeared. Python's `return` statement supplies that result. In `return total * rate`, Python evaluates `total * rate`, passes that value to the caller, and leaves the current function call immediately. Statements later in the same function body are not executed on that path. The caller can place the result in a name, use it in an arithmetic expression, pass it to another call, or simply ignore it.

A function can contain several return statements, often in different branches, but a particular call follows only one path. Once that path executes return, the call is over. This is useful for guard clauses: after detecting input that should take a special path, a function may return an appropriate result rather than nesting the remaining work inside another `else`. It also means that a statement written after an unconditional `return` is unreachable during that call. Python's rule is simple: return transfers control back to the caller.

### An expression, a bare return, and the end of a function

If a return statement has an expression list, Python evaluates it. If it has no expression list, Python substitutes `None`. Falling off the end of a function body likewise gives the caller `None`. `None` is a real singleton object used here to signal that the function did not provide a meaningful computed result. It is not the number zero, the empty string, or an empty list, even though all of those can be false in a Boolean context. When an identity check is needed, write `result is None`.

This default is useful for functions whose purpose is an action, such as printing a label or changing an object. It is also a frequent bug signal. Suppose `discount(price)` returns a reduced price only when `price > 100` and then reaches the end otherwise. The high-price path returns a number; the other path returns `None`. If a caller adds that result to a number, Python raises a TypeError rather than silently inventing a price. A function that promises a numeric result should normally return a numeric result on every intended path, including an explicit unchanged value when that expresses the policy.

### Return is not print

`print` sends a text representation to standard output and itself returns `None`. `return` transfers a value to the caller. Those effects can look similar in an interactive session because both may cause a number to appear nearby, but they support different designs. Consider `def show_total(x, y): print(x + y)`. Calling it displays a total, but `saved = show_total(2, 3)` binds `saved` to `None`, not 5. In contrast, `def total(x, y): return x + y` lets the caller decide whether to print, format, compare, or reuse 5.

Separating computation from presentation is practical. A `total` function can be tested with an equality assertion without capturing screen output. A user-interface layer can choose a message and formatting suitable for its setting. This does not mean that functions must never print; programs need output. It identifies the interface question: is the function chiefly reporting data to its caller, producing an external effect, or intentionally doing both? A clear name and an explicit return policy reduce surprises for callers.

### One result can hold structured data

A return statement is not restricted to a single numeric value. It can return any Python object, including a string, list, dictionary, or tuple. Comma-separated expressions in a return statement form a tuple, so `return low, high` gives the caller one tuple object that can be unpacked with `low, high = bounds(values)`. The important design question is whether the returned object clearly communicates the function's result.

For an introductory function, a direct value often makes the contract obvious. For related values, a tuple or a named structure can make the relationship explicit. Avoid an accidental mixture of shapes, such as returning an integer on one branch and a two-item tuple on another unless callers are deliberately designed to handle both. Choose a return type and ensure every normal path satisfies that contract. Parameter binding and local-name visibility are separate concerns; here the focus is the value that travels outward after a call.

## Key Vocabulary

- **return value:** The value a function call provides to the code that invoked it after the function completes.
- **return statement:** A statement that optionally evaluates an expression, ends the current function call, and supplies its result to the caller.
- **caller:** The code that invokes a function and receives control again when that function call completes.
- **None:** Python's singleton object used to represent the absence of a useful value.
- **bare return:** A `return` statement with no expression, which ends the call and returns `None`.
- **unreachable code:** Statements that cannot run on a particular control-flow path, such as statements after an unconditional return in the same block.
- **function contract:** The agreement about a function's inputs, outputs, and observable behavior.
- **tuple:** An ordered, immutable Python collection; comma-separated expressions returned together form a tuple.

## Eli-10

Imagine asking a library clerk to find a book. You give the clerk a request, and the clerk hands a book back across the desk. That book is like a return value: the person who asked can now read it, put it on a shelf, or give it to someone else. A function can do work and hand its answer back in the same way. `return 5` means “this call is finished; here is 5.” If the clerk finishes without handing you anything, you have no book. Python represents that no-result outcome with `None`.

## Eli's Analogy

A return value is an item a clerk hands back to the person who made a request; the caller decides what to do with the item.

The analogy has limits. A function does not literally pass an object through space, and `None` is still a valid Python object rather than an empty hand. Printing is also unlike returning: it is more like the clerk announcing a title aloud, which does not give the requester a value to reuse in another calculation.

## Worked Example

This function applies a simple membership discount and returns a price on both possible paths:

```python
def final_price(price, member):
    if member:
        return price * 0.9
    return price

member_price = final_price(80, True)
guest_price = final_price(80, False)
print(member_price, guest_price)
```

The first call takes the `if` path: `80 * 0.9` evaluates to `72.0`, and return ends that call. The second call skips the `if` body and reaches `return price`, so it returns `80`. Running this exact code with python3 prints `72.0 80`. If the final `return price` were removed, the non-member call would reach the end of the function and return `None`, violating the function's intended all-cases price contract.

## Common Mistakes

- **Using `print(value)` when later code needs the value.** Return the value from the computation and let the caller decide whether to print it.
- **Assuming a function without `return` returns the last expression it calculated.** Python returns `None` when execution reaches the end without a value expression.
- **Writing statements after an unconditional return and expecting them to execute.** Move needed work before return or place it in a different reachable branch.
- **Returning a value in only one conditional branch when every call needs a result.** Trace every intended path and return an appropriate value on each one.

## Compare / Contrast

- **return vs. print:** Return gives a value to the caller for later use; print writes a representation to standard output and returns `None`.
- **`return value` vs. bare `return`:** The first evaluates and supplies a value; the second ends the call and supplies `None`.
- **`None` vs. an empty collection:** `None` signals no useful result, while an empty list or string is an existing value with no elements or characters.

## Key Takeaway

A return statement is a function's outward handoff: it ends the current call and gives a value to the caller. Design functions so their intended paths return clear, consistent results, and do not confuse returning data with printing it.

## Practice Question Bank

1. **What does a Python function return when it reaches the end of its body without executing a `return` statement?**
   - A. The last expression it evaluated
   - B. An empty string
   - C. None
   - D. A syntax error
   - **Answer:** C. It returns `None`.
2. **What happens after this path executes `return total * rate` inside a function?**
   - A. The expression is evaluated, its value is sent to the caller, and the current call ends
   - B. Python prints the value and continues with the next statement
   - C. The value is assigned to a global name named `return`
   - D. The function restarts from its first line
   - **Answer:** A. `return` hands off the value and ends the call.
3. **What value is assigned to `saved` by `def show(x): print(x + 1)` followed by `saved = show(4)`?**
   - A. 4
   - B. 5
   - C. The text `5`
   - D. None
   - **Answer:** D. The function prints 5 but returns `None`.
4. **A function is meant to return a number for every nonnegative input. Which version meets that contract?**
   - A. `if n > 0: return n * 2`
   - B. `if n > 0:` then indented `return n * 2`, followed by `return 0`
   - C. `print(n * 2)`
   - D. `return; return n * 2`
   - **Answer:** B. It returns a number on both nonnegative paths.
5. **Why is code directly after an unconditional `return` in the same function block not run on that path?**
   - A. Python deletes the later code when it loads the file
   - B. The return statement ends the current function call and transfers control back to its caller
   - C. The later code is converted into a comment
   - D. Only `print` can run after return
   - **Answer:** B. The function call has already ended.

## Sources

- [Python Language Reference: simple statements](https://docs.python.org/3/reference/simple_stmts.html)
- [Python Tutorial: More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html)

## Related Topics

- `python-programming:foundations:functions`
- `python-programming:foundations:function-parameters`
- `python-programming:foundations:scope`
- `python-programming:foundations:conditionals`
- `python-programming:foundations:basic-testing`

## Editorial Metadata

- Status: READY_TO_PUBLISH
- Research status: source-verified
- Rights: Reference-only sources; no source prose adapted.
- Researched: 2026-08-19
