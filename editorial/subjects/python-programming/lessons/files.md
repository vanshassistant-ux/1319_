# Files

## In 30 Seconds

A file lets a program keep information beyond one run, but Python needs clear instructions before it can use one. A path identifies the file, a mode states the intended kind of access, and `open()` creates a file object. Put that object in a `with` statement so Python closes it when the block ends. This overview establishes those safe basics; the neighboring lessons handle detailed reading and writing workflows.

## Why This Matters

Programs use files for notes, settings, logs, reports, and data exchanged with other tools. Understanding the setup prevents opening the wrong relative path, accidentally replacing a file with write mode, or leaving a file open longer than needed. The `with open(...)` pattern makes cleanup part of the program's structure, while an explicit text encoding makes expectations clearer across computers.

## Learning Objectives

- Distinguish a file path from a file object.
- Explain common text-file modes.
- Apply `with open(...)` to bound a file operation.
- Explain an explicit UTF-8 encoding.
- Choose a mode from an access intention.

## The College Version

### A path identifies a location; open() supplies an object

A path is a string that identifies a filesystem location; `open()` turns an available location into a file object used for an operation. Relative paths are resolved from the current working directory, while absolute paths begin at a filesystem root. A path alone does not guarantee that a file exists or is permitted. Exception handling belongs to the Exceptions lesson.

### Modes state the intended access before work starts

`r` reads and is the normal default. `w` creates when absent but truncates an existing file, so use it only for intentional replacement. `a` appends at the end, preserving earlier content. `x` requests exclusive creation and fails if the name already exists. Choose a mode by stating the intended effect first: inspect, replace, add, or create only when absent. Binary formats and detailed read/write operations are reserved for adjacent lessons.

### Context managers make the lifetime visible

Use `with open(...) as file:` for a bounded interaction. The file object is available in the indented suite and is closed when the suite ends, including if an exception interrupts it. For text, `encoding="utf-8"` makes the byte-to-text agreement explicit instead of relying on a machine default.

## Key Vocabulary

- **file path:** a string identifying a file location.
- **relative path:** a path resolved from the current working directory.
- **absolute path:** a path starting from a filesystem root.
- **file object:** Python's opened interface to a file.
- **mode:** the requested file-access kind.
- **context manager:** an object used with `with` for bounded setup and cleanup.
- **encoding:** rules for converting between text and stored bytes.

## Eli-10

A file is like a labeled folder stored in a building. The path is its address. The mode is the permission note: look inside, replace pages, add a page, or make a new folder only if no such folder exists. `open()` gives you a handle for it. A `with` block is like checking it out for one task and automatically returning it when that task ends. An encoding is the alphabet agreement for its text.

## Eli's Analogy

The shelf address is the path, checkout purpose is the mode, and the `with` block is the checkout period that returns a library binder automatically.

The analogy does not cover permissions, byte formats, or simultaneous users; it explains roles and bounded lifetime.

## Worked Example

```python
from pathlib import Path
from tempfile import TemporaryDirectory

with TemporaryDirectory() as folder:
    path = Path(folder) / "status.txt"
    with open(path, "x", encoding="utf-8") as file:
        file.write("created\n")
    with path.open("a", encoding="utf-8") as file:
        file.write("updated\n")
    print(path.read_text(encoding="utf-8"), end="")
```

It prints `created` and `updated` on separate lines. `x` protects against an existing name; `a` adds instead of replacing. The `with` blocks close the file after each operation. The final inspection is only to show the result; Reading Files covers reading in depth.

## Common Mistakes

- Using `w` when earlier content must survive; use `a` for intentional additions.
- Assuming a relative path is anchored beside the script; it depends on the current working directory.
- Omitting a required text encoding; state UTF-8 when that is the format.
- Relying on a later manual `close()`; use `with` to close reliably.

## Compare / Contrast

- **Relative vs. absolute path:** relative starts from the working directory; absolute starts from a filesystem root.
- **`w` vs. `a`:** `w` truncates existing content; `a` adds at the end.
- **Path vs. file object:** a path identifies a location; a file object is the opened interface.

## Key Takeaway

Choose the path, mode, and encoding deliberately, then use `with open(...)` to bound the operation and close the file reliably. Treat `w` carefully because it replaces existing contents.

## Practice Question Bank

1. `open()` returns a file object.
2. `a` adds text after existing text.
3. A `with` suite closes the file when it exits.
4. `x` is exclusive creation.
5. A relative path depends on the current working directory.

## Sources

- Python Software Foundation, [The Python Tutorial: Input and Output](https://docs.python.org/3/tutorial/inputoutput.html)
- Python Software Foundation, [Built-in Functions: open](https://docs.python.org/3/library/functions.html)

## Related Topics

- Reading Files
- Writing Files
- Exceptions
- Modules

## Editorial Metadata

Original EliExplains synthesis, source-verified 2026-08-19. Official documentation was used as reference only; all prose is original and the example was executed with Python 3.
