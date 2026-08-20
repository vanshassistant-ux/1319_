# Running Python Programs

## In 30 Seconds

Python can execute a small expression interactively or run the statements stored in a `.py` file. The interactive interpreter is useful for quick checks; a script makes a repeatable program you can run again. When Python runs a file as the top-level program, that file’s `__name__` is `__main__`. Output shows normal progress, while a traceback tells you where an unhandled error stopped execution.

## Why This Matters

Running code is the boundary between an idea that looks plausible and behavior you have actually observed. Interactive checks help test a small expression before you build on it. Scripts preserve a sequence of steps so you, a classmate, or a grader can repeat the same run. Reading output and the final line of a traceback gives a concrete starting point when a program does not finish.

## Learning Objectives

- Distinguish interactive interpreter use from running a saved script.
- Run a script by giving its path to the Python interpreter.
- Explain the basic purpose of a main guard.
- Interpret ordinary output and a simple traceback.

## The College Version

### Two places Python can execute code

The interactive interpreter accepts code one entry at a time and displays results or errors immediately. It is a good place to check a small expression such as `2 + 3`, which produces `5`. A script is a saved text file, conventionally ending in `.py`; supplying its path to the interpreter asks Python to read and execute its statements. For example, from its directory, `python3 hello.py` runs `hello.py` on this Mac. An IDE’s Run button normally does the same broad work, but you should still know which file it ran and where it displayed output.

### Top-level execution and the main guard

When Python executes a file as the top-level program, the file’s `__name__` is `__main__`. Therefore code under `if __name__ == "__main__":` runs during direct execution. A file can define `announce()`, then call it only inside that condition. Direct execution prints its message; loading the definitions under another module name does not trigger that automatic call. This is a basic control over startup behavior, not a substitute for learning module architecture.

### Observe output and errors

Output is evidence from one exact run. `python3 -c 'print(2 + 3)'` runs a command string and prints `5`, which is useful for a quick check. In a script, statements proceed in order until completion or an unhandled exception. If a file prints `before`, evaluates `1 / 0`, and then prints `after`, it produces `before`, then a `ZeroDivisionError` traceback; it never reaches `after`. Read the traceback’s file and line, then its final exception line. First ensure you actually ran the intended file.

## Key Vocabulary

- **Python interpreter:** program that reads and executes Python code.
- **Interactive mode:** interpreter mode that accepts code one entry at a time.
- **Script:** saved text file of Python statements.
- **Standard output:** normal stream where a program writes displayed results.
- **Traceback:** report of an unhandled exception and its call stack.
- **Exception:** runtime event that interrupts normal flow unless handled.
- **Top-level code:** code in the environment where Python starts execution.
- **Main guard:** an `if` statement testing whether `__name__` is `__main__`.

## Eli-10

Python is a careful reader. You can give it one tiny note at a time and get an answer right away: that is interactive mode. Or you can hand it a saved page, a script, and ask it to read the page from top to bottom. The saved page is easy to run again.

## Eli's Analogy

Interactive mode is like asking a calculator one question at a time. A script is like saving a recipe. A main guard is a sign saying to start cooking only when this recipe is the one being made. The picture is limited: Python programs can do much more than calculator questions or recipes, and loading code has details beyond this basic guard.

## Worked Example

Put a function that prints `started` above an `if __name__ == "__main__":` guard, and call the function inside the guard. Verified direct execution with `python3 start.py` printed `started`. A separate file that prints `before`, evaluates `1 / 0`, then prints `after` printed `before` and ended with `ZeroDivisionError: division by zero`; the last print did not run.

## Common Mistakes

- Interactive entries are not automatically saved; use a `.py` file for a repeatable program.
- Know which file an IDE runs, even when it hides the command.
- Read a traceback’s location and final exception line, rather than treating every line as the error name.
- Statements after an unhandled exception are not reached.

## Compare / Contrast

| A | B | Distinction |
|---|---|---|
| Interactive interpreter | Saved script | One accepts quick entries; the other preserves a sequence in a file. |
| Normal output | Traceback | One is intentional program output; the other reports an unhandled error. |
| Direct execution | Loading under another name | Direct execution gives the top-level file `__name__ == '__main__'`. |

## Key Takeaway

Use interactive mode for small checks and a `.py` script for repeatable work. Know what file ran, observe its output, and use a traceback’s location and final exception line when execution stops.

## Practice Question Bank

1. Giving Python a `.py` path makes it read and execute that file.
2. The interactive interpreter best fits a one-expression check.
3. A main guard runs when direct execution gives the file the name `__main__`.
4. An unhandled division by zero stops a later print.
5. `-c` runs a command string.

## Sources

- Python Documentation, [Using the Python Interpreter](https://docs.python.org/3/tutorial/interpreter.html)
- Python Documentation, [Command line and environment](https://docs.python.org/3/using/cmdline.html)
- Python Documentation, [__main__ — Top-level code environment](https://docs.python.org/3/library/__main__.html)
- Python Documentation, [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)

## Related Topics

- Installing Python
- Python Syntax
- Input and Output
- Exceptions
- Modules

## Editorial Metadata

Original EliExplains synthesis. Official Python documentation was used as reference-only; examples were executed with Python 3.9.6 on 2026-08-19.
