# Functions

## In 30 Seconds

A Python function gives a name to a small, reusable piece of behavior. Write a definition with `def`, an indented body, and a meaningful name; the body is saved, not run immediately. Write the name followed by parentheses to call it later. This separation lets a program ask for the same job in several places without copying the job's steps each time.

## Why This Matters

Functions are a practical way to keep programs understandable as they grow. A well-named function turns several implementation steps into one readable action, so a reader can first follow what the program is doing and inspect details only when needed. Reuse also gives maintenance a single home: when a repeated behavior changes, its definition can change once. Small functions are easier to run, inspect, and test than one long script.

## Learning Objectives

- Define a Python function and distinguish its definition from its call.
- Identify the role of `def`, parentheses, the colon, and indentation in a basic definition.
- Explain how a function name supports reuse and abstraction.
- Apply a function call to execute a previously defined behavior.
- Evaluate whether a repeated task should become a small named function.

## The College Version

### A definition records behavior; a call requests it

A function is a named unit of behavior. In Python, `def` begins a definition. It is followed by a name, parentheses, a colon, and an indented suite of statements. When the interpreter reaches this definition, it creates a function object and associates the chosen name with it. The body does not run merely because the definition appears in the file. A call later requests the action; in the simplest form it is the name followed by parentheses, as in `show_banner()`. Each call starts the body again. This lesson deliberately leaves values inside parentheses to Function Parameters and results passed back to Return Values.

### Readable boundaries and small responsibilities

A function creates a boundary in a program. Code outside it can use the function's name without reading every statement inside it at that moment. This abstraction lets a meaningful name communicate the job while hiding routine detail temporarily. `display_welcome_message()` says more about intent than copied print statements. The boundary works best when the name names one coherent responsibility. A function named `print_divider` should print a divider, not also read a file, change a menu, and save a report. Decomposition breaks a larger task into smaller understandable responsibilities; it does not require making every line its own function.

### Reuse, documentation, and checking behavior

Copied blocks can drift apart: if a greeting changes in four locations, one may be missed. A shared function gives the behavior one definition and many calls. Python permits a documentation string, or docstring, as the first statement in a function body. It is a concise explanation for people and tools, not a substitute for a clear name or correct behavior. Small focused functions are also easier to check directly because a check can focus on one responsibility rather than untangling an entire program. Every call still performs every statement in the body; the advantage is that those statements have one trustworthy home.

## Key Vocabulary

- **function:** A named, callable unit of code that groups statements for a particular behavior.
- **function definition:** The `def` statement and indented body that create a named function for later use.
- **function call:** An expression that uses a function name with parentheses to request execution.
- **function body:** The indented suite of statements that executes when called.
- **abstraction:** Using a meaningful name for a behavior while temporarily setting aside its details.
- **decomposition:** Breaking a larger task into smaller understandable responsibilities.
- **docstring:** A string literal first in a function body that documents the function.

## Eli-10

A function is a labeled instruction card. Writing the card does not make anything happen; it only puts the instructions where the program can find them. Calling the function is like saying, “Use the card now.” The program follows the steps each time it hears that call, so you do not rewrite those steps everywhere. A helpful label also lets another reader understand the job before studying the instructions themselves.

## Eli's Analogy

A function is a button labeled “ring bell.” Installing the button is the definition. Pressing it is the call. Many people can press the same button, and the bell action stays in one place.

The analogy has limits: a software function can run many kinds of statements and may have no physical effect. The button image only explains setting up a named action and requesting it.

## Worked Example

```python
def print_divider():
    """Display a simple section divider."""
    print("-" * 12)

print("Morning")
print_divider()
print("Afternoon")
print_divider()
```

Output:

```text
Morning
------------
Afternoon
------------
```

The `def` block establishes `print_divider`; it produces no divider at definition time. Each call runs the body. The output comes from two calls to one definition, not two copied definitions.

## Common Mistakes

- Expecting `def` to run the body; use a call where execution is wanted.
- Writing a name without parentheses; use `print_divider()` to invoke the function.
- Forgetting to indent the body; indent its statements consistently.
- Combining unrelated jobs in one vaguely named function; choose one focused responsibility.

## Compare / Contrast

- A **function definition** creates named behavior; a **function call** requests its execution.
- A **reused function** has one definition and multiple calls; **copied code** has multiple locations that can diverge.

## Key Takeaway

Define a function once with `def` and an indented body, then call its name with parentheses whenever that focused behavior is needed. A good name and small responsibility make a program easier to read, reuse, and check.

## Practice Question Bank

1. A `def` statement creates a named function for later calls.
2. `print_divider()` calls a function named `print_divider`.
3. One definition with several calls avoids copied divider code.
4. Indentation marks the function body.
5. A focused, descriptive function supports abstraction.

## Sources

- Python Software Foundation, [Python Tutorial: Defining Functions](https://docs.python.org/3/tutorial/controlflow.html)
- Allen B. Downey, [Think Python, 2e: Functions](https://greenteapress.com/thinkpython2/html/thinkpython2004.html)

## Related Topics

- Function Parameters
- Return Values
- Scope
- Basic Testing
- Modules

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only sources; no source prose adapted. Examples executed with Python 3 on 2026-08-19.
