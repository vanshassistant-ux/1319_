# Scope

## In 30 Seconds

Scope is the part of a Python program where a name can be found directly. When code uses an unqualified name, Python checks the current function's local names first, then names in enclosing functions, then the module's global names, and finally built-in names. This familiar sequence is often called LEGB. Assignment changes the picture: an assignment in a function normally creates or rebinds a local name unless `global` or `nonlocal` says otherwise.

## Why This Matters

Scope lets a reader predict which value a name means without guessing. It explains why a helper can read a module-level setting, why a nested function can remember surrounding state, and why a seemingly harmless `count = count + 1` can fail. In coursework, scope is essential for tracing code and diagnosing name errors. In larger programs, deliberately choosing local, enclosing, or module-level state helps limit unintended interactions and makes changes safer to reason about.

## Learning Objectives

- Define scope and describe the LEGB lookup order.
- Distinguish reading an outer name from rebinding a name locally.
- Explain when `global` and `nonlocal` change assignment behavior.
- Diagnose an `UnboundLocalError` caused by a local binding.
- Apply name-resolution rules to a nested-function example.

## The College Version

### Scope is about name visibility

A Python name is a label that code uses to reach a value. Scope answers a narrower question than “what value is this?”: where may the program look for that label without qualifying it? For an ordinary name used inside a function, the search begins in the local scope created for that call. If the name is absent there, Python can search the scopes of enclosing functions, beginning with the nearest. Next comes the global scope of the module that defined the function. Finally, Python can use the built-in namespace, where names such as `len` live. “LEGB” is a convenient mnemonic for this local–enclosing–global–built-in order.

The order matters only until a matching binding is found. If an inner function has a local `label`, that binding hides an enclosing or global `label` of the same spelling for uses inside the inner function. Outside that function, the local binding is not directly available. A scope rule is therefore a predictable lookup rule, not a claim that only one name with a particular spelling may exist in a program.

### Reading differs from rebinding

Code inside a function may read an outer name when it does not bind that name locally. Assignment is the crucial event. If Python finds a name-binding operation anywhere in a function block, uses of that name in that block are treated as local by default. This is a whole-block rule, not a line-by-line discovery rule.

That rule explains a common surprise. Suppose module code binds `count = 10`, then a function contains `count = count + 1`. The assignment means `count` is local in that function, so the expression on the right tries to read that local `count` before it has a value. Python raises `UnboundLocalError`; it does not fall back to the module value. The language reference identifies this as a special case of `NameError`. The repair is not to rely on a mysterious exception: decide whether the function should instead receive and return a value, maintain enclosing state, or intentionally rebind a module name. This lesson focuses on the lookup consequence, while function interfaces belong in the adjacent lessons.

### `global` and `nonlocal` are explicit rebinding choices

`global name` inside a function tells Python that references and assignments to `name` in that block use the module-level global namespace. It is not a general instruction to search “outside”; it specifically selects the defining module’s global namespace. Because it changes how the block is compiled, it must appear before uses of that name in the block. Global state can be appropriate for narrowly scoped configuration or a deliberate shared counter, but its effects can be harder to trace than local state.

`nonlocal name` is for a nested function that needs to rebind a name from an enclosing function. It does not target a module global, and it cannot create a brand-new enclosing binding. The named value must already be bound in an enclosing function scope; otherwise Python reports `SyntaxError` while compiling the code. This is useful for a closure: an inner function can keep access to a surrounding function’s state after the outer call has produced it. Use `nonlocal` only when that persistent enclosing state is intentional.

### Trace one lookup at a time

When tracing scope, first mark every assignment in each function block. Then, for the name being read, ask: is it local here? If not, is there an enclosing function binding? Then check the module global and built-ins. For a rebind, look for `global` or `nonlocal` before assuming an outer value changes. This mechanical method avoids two frequent errors: treating any outer name as automatically writable, and assuming that a global name saves a local variable that has not yet been bound.

## Key Vocabulary

- **scope**: The region of code in which a name can be accessed directly.
- **local scope**: The names associated with one function call.
- **enclosing scope**: A surrounding function's scope visible to a nested function.
- **global scope**: The namespace at the top level of the module that defines a function.
- **built-in namespace**: The namespace that supplies standard names such as `len`.
- **binding**: Associating a name with a value in a namespace.
- **rebind**: Make a name refer to a different value in its selected scope.
- **closure**: A nested function that retains access to names from an enclosing function.
- **UnboundLocalError**: The error raised when a function tries to use its local name before that name has been bound.

## Eli-10

Imagine each function call is a desk with its own labeled drawers. To find a note called `label`, first open the drawer on the desk in front of you. If it is not there, look at desks belonging to functions wrapped around yours, then at the big desk for the whole file, and finally at the shared supply cabinet of built-in names. That is the lookup part of scope.

Writing a new note changes the rule. If you write `label = "local"` at your desk, Python treats `label` as a label for your desk in that function. It does not silently replace a note at the big file desk. `global` is like explicitly saying “write this at the file desk.” `nonlocal` says “write this at the nearest surrounding function’s desk.” You must have a surrounding desk with that note for `nonlocal` to work.

## Eli's Analogy

The desks help explain where Python searches and why an inner note can hide an outer one. They do not mean Python physically stores values in drawers, and they do not cover object mutation or how imports create module namespaces.

## Worked Example

This executed example has a module-level `message` and an enclosing `message`. `outer` creates the enclosing binding. Its nested `inner` uses `nonlocal message`, so its assignment changes `outer`'s binding rather than creating an `inner` local. The module-level value remains untouched. A separate function, `add_one_bad`, contains an assignment to `count`; therefore `count` is local for that entire function. Its read occurs before that local binding, so the run raises `UnboundLocalError`.

```python
message = "outer"

def outer():
    message = "enclosing"
    def inner():
        nonlocal message
        message = "changed enclosing"
    inner()
    return message

print(outer(), message)  # changed enclosing outer

count = 10
def add_one_bad():
    count = count + 1

try:
    add_one_bad()
except UnboundLocalError as error:
    print(type(error).__name__)  # UnboundLocalError
```

## Common Mistakes

- **Mistake:** Assuming Python always reads a same-named global before a local. **Correction:** Mark assignments first; one in the function normally makes the name local throughout that block.
- **Mistake:** Using `global` merely to read a global value. **Correction:** Reading can use the normal lookup path; reserve `global` for deliberate global rebinding.
- **Mistake:** Using `nonlocal` for a module variable. **Correction:** `nonlocal` requires a previously bound name in an enclosing function; use `global` only when module rebinding is truly intended.
- **Mistake:** Treating `UnboundLocalError` as a missing-name error only. **Correction:** Check whether a later assignment caused Python to classify the name as local.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| `global x` | `nonlocal x` | `global` selects the module namespace; `nonlocal` selects a previously bound enclosing-function name. |
| Reading an outer name | Rebinding a name | A read can follow normal lookup; assignment normally creates a local binding unless declared otherwise. |
| `NameError` | `UnboundLocalError` | A missing name raises `NameError`; using a function-local name before it is bound raises the more specific `UnboundLocalError`. |

## Key Takeaway

Use LEGB to predict where a Python name is read. Then treat assignment as a separate decision: it is local by default, `global` targets the module namespace, and `nonlocal` targets an existing enclosing-function binding.

## Practice Question Bank

1. Which sequence describes normal lookup for an unqualified name inside a nested function? **A.** Local, enclosing, global, built-in. **B.** Global, local, enclosing, built-in. **C.** Built-in, global, enclosing, local. **D.** Enclosing, local, global, built-in. **Answer: A.**
2. A function contains `total = total + 1` and no `global` or `nonlocal` statement. Why can its first call raise `UnboundLocalError`? **A.** `+` cannot add integers. **B.** The assignment makes `total` local in that function, so its right side reads the unbound local. **C.** Module globals are never visible in functions. **D.** `total` becomes built-in. **Answer: B.**
3. In a nested function, what does `nonlocal score` require? **A.** A module-level `score`. **B.** A built-in named `score`. **C.** A previously bound `score` in an enclosing function scope. **D.** A parameter named `score`. **Answer: C.**
4. Which statement correctly describes `global setting` inside a function? **A.** It creates an enclosing function scope. **B.** It makes `setting` a built-in. **C.** It copies the global value into a local variable. **D.** It directs that block's references and assignments for `setting` to the module global namespace. **Answer: D.**
5. A nested function reads `theme`, has no local binding for it, and its nearest enclosing function binds `theme = "dark"`. Which value does it read? **A.** The enclosing function's `"dark"` binding. **B.** A new local `theme`. **C.** Only a module-level `theme`. **D.** Only the built-in namespace. **Answer: A.**

## Sources

- Python Software Foundation, [Python Tutorial: Scopes and Namespaces](https://docs.python.org/3/tutorial/classes.html)
- Python Software Foundation, [Language Reference: Execution model](https://docs.python.org/3/reference/executionmodel.html)

## Related Topics

- `python-programming:foundations:variables`
- `python-programming:foundations:functions`
- `python-programming:foundations:function-parameters`
- `python-programming:foundations:return-values`
- `python-programming:foundations:exceptions`

## Editorial Metadata

Original EliExplains synthesis; source-verified on 2026-08-19. Reference-only documentation sources; no source prose adapted. All Python code and stated output were executed with `python3`.
