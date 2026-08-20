# Input and Output

## In 30 Seconds

A console program often follows an input-process-output pattern: it receives information, does something with it, and shows a result. In Python, `input()` reads one line and returns text as a string. `print()` writes text to standard output. A prompt can tell a person what to enter, while `sep` and `end` let a program control how printed values are separated and terminated.

## Why This Matters

Input and output are the boundary between a program and the person using it. Clear prompts make an interaction understandable, and deliberate output makes a result checkable. The key technical detail is that `input()` returns text even when a person types digits. Recognizing that boundary helps students explain why a program may need an explicit interpretation step before it performs arithmetic, without confusing basic interaction with the separate topic of type conversion.

## Learning Objectives

- Define console input and output in terms of Python's `input()` and `print()` functions.
- Explain what `input()` returns and how a prompt behaves.
- Apply `sep` and `end` to predict a `print()` result.
- Distinguish standard input from standard output.
- Analyze a small input-process-output interaction for its text boundary.

## The College Version

### A program has an interaction boundary

A program can get information from many places and send results to many places, but an introductory console interaction has a useful, narrow shape: input arrives through standard input, the program computes or organizes it, and output goes to standard output. Python exposes familiar functions for this setting. `input()` waits for one line of interactive input, and `print()` writes a textual representation of values. The `sys` module names the streams behind this convention: `sys.stdin` is used for interactive input, `sys.stdout` is where `print()` writes by default, and interpreter errors go to `sys.stderr`.

You do not need to manipulate those stream objects to begin using `input()` and `print()`, but their names explain why a prompt appears in the same console as ordinary printed output. This lesson is about that interface, not about launching a Python interpreter or saving a program in a file. Those execution choices belong to Running Python Programs. It also does not treat a console as a database, a file, or a graphical interface. The small scope is deliberate: once you can account for what enters and leaves a simple interaction, later lessons can change the source or destination without changing the basic reasoning.

### `input()` collects a line of text

Call `input()` with no argument when the context already tells the user what to enter, or supply a prompt string when the program should ask. For example, `name = input("Name: ")` displays `Name: ` and then reads a line. Python removes the line's trailing newline and returns the remaining characters as a string. Thus if someone enters `42`, the value stored in `name` is the text string `"42"`, not an integer merely because the characters look numeric.

This rule makes input predictable: a program begins with characters and must explicitly choose an interpretation if it needs a number, a date, or another kind of value. The mechanics and failure cases of particular conversions are owned by Type Conversion and Exceptions, so do not hide those decisions inside a lesson that is supposed to teach the interaction boundary. A prompt is output, not part of the returned answer; it is written without an automatic trailing newline so the user's typing begins on the same line. In an environment with no remaining input, `input()` raises `EOFError`. That is documented behavior, but designing recovery for it is exception-handling work rather than a reason to use a broad, silent handler here.

### `print()` makes text output predictable

`print()` accepts zero or more positional objects. It converts those objects to text in the same general way as `str()`, joins multiple objects with a separator, and adds an ending. Its normal separator is one space and its normal ending is a newline. Therefore `print("Hello", "Ada")` produces one line containing `Hello Ada`; writing the two strings as separate arguments is not the same as concatenating them, although both can sometimes look similar.

The keyword-only `sep` argument changes the joiner, while `end` changes what follows the final object. For a compact label, `print("red", "blue", sep="/")` emits `red/blue`; `print("Loading", end="...")` deliberately leaves the cursor on that line. These controls are useful for readable, testable output, not decoration. If no `file` argument is supplied, `print()` uses standard output; its `flush` argument can force the selected text stream to flush, but most beginning examples do not need it. In a longer interaction, output should describe the next action or the meaning of a result rather than merely echoing an unexplained value. That habit lets a reader compare expected and actual behavior. During review, match every separator and ending in the displayed result to its corresponding argument; this simple trace catches many punctuation mistakes. More elaborate formatting methods, file writes, and logging are distinct tools and should not be substituted into this basic lesson.

## Key Vocabulary

- **standard input (stdin):** The conventional text stream from which a program receives interactive input.
- **standard output (stdout):** The conventional text stream to which `print()` writes when no other file is specified.
- **prompt:** Text displayed to request input from a person before `input()` reads a line.
- **string:** A sequence of text characters; `input()` returns its answer in this form.
- **separator:** The text placed between multiple positional arguments printed in one `print()` call.
- **line ending:** Text written after printed objects; `print()` uses a newline by default.

## Eli-10

A console program is like a person at a service window. The program can put a question on the counter, wait for a written reply, and then show a result. In Python, `input()` is the step that receives the reply, and `print()` is the step that posts a message. The reply starts as text. Even if someone writes the characters 7 and 5, the program first receives the label `"75"`; deciding to treat it as a number is a separate choice.

The prompt is the sign that tells the visitor what to write. `print()` is the sign-maker: by default it puts spaces between several things it shows and moves to the next line afterward. Changing `sep` changes the gap between items; changing `end` changes what comes after the last item.

## Eli's Analogy

Think of a small order counter. The prompt is the clerk's question, input is the customer's written answer, the program's processing happens behind the counter, and printed output is the receipt handed back.

The analogy is limited: a real customer can give a spoken answer with context, while `input()` receives a line of characters. The counter image also hides technical details such as standard streams and the fact that a program can redirect output somewhere other than the screen.

## Worked Example

Consider a short greeting interaction:

```python
name = input("Name: ")
print("Hello", name, sep=", ", end="!\n")
```

If a person enters `Ada`, the prompt appears first and the value assigned to `name` is the string `"Ada"`. The `print` call has two positional objects, `"Hello"` and that string. Its custom separator is `", "`, so it writes `Hello, Ada`; its ending is `!\n`, so the complete visible result is `Hello, Ada!` followed by a new line. The program has not converted or validated anything because a name is being treated as text in this example.

## Common Mistakes

- **Assuming `input()` returns an integer when a person types digits.** Treat its result as a string; make an explicit interpretation only when the next task requires one.
- **Thinking the prompt is included in the value returned by `input()`.** The prompt is written to output; the return value is the entered line with its trailing newline removed.
- **Expecting `print('A', 'B')` to run the arguments together.** `print()` uses a space separator by default; set `sep` when another separator is intended.
- **Using `end=''` without considering later output.** Choose a custom ending deliberately, because it changes whether the next output begins on the same line.

## Compare / Contrast

| A | B | Distinction |
|---|---|---|
| `input()` prompt | `input()` return value | The prompt is output shown before reading; the return value is the line of text supplied by the user. |
| standard input | standard output | Standard input supplies interactive text to `input()`, while standard output receives default `print()` output and prompts. |
| `sep` | `end` | `sep` goes between multiple printed objects; `end` follows the final object in that `print()` call. |

## Key Takeaway

Use `input()` to receive a line of text and `print()` to communicate text clearly. Keep the input-process-output boundary visible: prompts and results are output, while entered data begins as a string.

## Practice Question Bank

1. **What type of value does `input()` return after a person enters a line?**
   - A. A string
   - B. An integer
   - C. A Boolean
   - D. A list
   - **Answer: A.** `input()` returns the entered line as a string after removing its trailing newline.

2. **Which statement accurately distinguishes an `input()` prompt from its returned value?**
   - A. Both are stored automatically in the same string.
   - B. The prompt is written to output, while the returned value is the entered text.
   - C. The prompt is read from standard input after the value.
   - D. The returned value always includes the prompt text.
   - **Answer: B.** Python writes a supplied prompt to standard output and returns the entered line as text.

3. **What is printed by `print('north', 'south', sep=' -> ')`?**
   - A. `north south`
   - B. `north->south`
   - C. `north -> south`
   - D. `'north', 'south'`
   - **Answer: C.** The separator is inserted exactly between the two positional objects.

4. **A program executes `print('Ready', end='...')` and then `print('go')`. Which displayed result follows?**
   - A. `Ready` then `go` on a new line
   - B. `Ready...` then `go` on a new line
   - C. `Ready go`
   - D. `Ready...go` followed by a newline
   - **Answer: D.** The first call adds no newline, and the second call supplies the default one.

5. **In Python's usual console arrangement, which stream receives default `print()` output?**
   - A. `sys.stdin`
   - B. `sys.stdout`
   - C. `sys.stderr`
   - D. A file chosen automatically from the prompt
   - **Answer: B.** `print()` uses `sys.stdout` when no file is supplied.

## Sources

- [Built-in Functions: `input` and `print` — Python 3 documentation](https://docs.python.org/3/library/functions.html)
- [sys: standard streams — Python 3 documentation](https://docs.python.org/3/library/sys.html#sys.stdin)

## Related Topics

- Running Python Programs
- Type Conversion
- Strings
- Exceptions
- Files

## Editorial Metadata

- **Status:** READY_TO_PUBLISH
- **Research status:** source-verified
- **Rights:** Reference-only official documentation; no source prose adapted.
- **Researched:** 2026-08-19
