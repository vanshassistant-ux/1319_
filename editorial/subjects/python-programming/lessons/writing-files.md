# Writing Files

## In 30 Seconds

Writing a text file sends strings from a Python program to a named location on disk. Use `with open(path, mode, encoding="utf-8") as file:` so the file closes when the block ends. Mode `"w"` replaces existing content; mode `"a"` adds output at the end. `write()` writes one string, while `writelines()` writes supplied strings without inserting newlines.

## Why This Matters

Files preserve program output after a program stops: reports, logs, and exports. The important decision is what should happen to earlier content. `w` can erase it; `a` can intentionally retain it. A context manager and explicit UTF-8 encoding make the output policy and resource boundary clear.

## Learning Objectives

- Distinguish `w` and `a` modes.
- Use a context-managed text writer with UTF-8.
- Explain `write()` and `writelines()`.
- Apply explicit newline characters.
- Choose a mode from an output policy.

## The College Version

### Opening a text file for an intentional kind of write

`open()` returns a file object connected to a path. For ordinary text output, write `with open("report.txt", "w", encoding="utf-8") as file:`. The path identifies storage, the mode requests access, and the encoding maps text characters to bytes. An unspecified text encoding is platform-dependent, so UTF-8 should be explicit when appropriate.

Mode `w` opens for writing and truncates an existing file: a successful write starts with an empty file. It fits a report whose current version replaces an old one. Mode `a` appends, placing new output after existing content. It fits a log entry that should follow earlier entries. Choose from the program's intended policy, not habit.

### The context manager owns the closing boundary

A file has a lifecycle: open, use, and close. A `with` statement makes that boundary visible. Python binds the file after `as file`, runs the block, and closes the file after the suite finishes. Keep the related writes inside the block rather than relying on a later `close()` call.

The context manager does not decide whether replacement is appropriate or supply an encoding. It manages the resource boundary; the programmer still decides the path, mode, encoding, and output strings. Reading, detailed error handling, and binary-file behavior are separate workflows.

### Writing strings, lines, and delimiters

`file.write(text)` accepts one string and returns the number of characters written. It does not add a line break. Therefore `file.write("First line")` followed by `file.write("Second line")` stores adjacent text unless a delimiter such as `"\n"` is included.

`file.writelines(lines)` writes strings from an iterable. Despite its name, it also adds no separators. Use `file.writelines(["April\n", "May\n"])` for separate lines. Use `write` for one constructed string and `writelines` for a sequence of already-delimited strings. State the output structure first, then choose the fitting method.

## Key Vocabulary

- **file object:** Object returned by `open()` that operates on an opened file.
- **text mode:** Mode that writes strings using a character encoding.
- **encoding:** Mapping between text characters and stored bytes.
- **truncate:** Reduce a file to zero length.
- **append:** Add output after existing content.
- **context manager:** Object used with `with` to clean up a resource around a block.
- **newline:** Separator such as `\n` in text output.

## Eli-10

A text file is a notebook your program can leave on a shelf. `w` is like replacing the old pages; `a` is like writing the next note after them. `write()` puts down exactly the text you hand it, so add `\n` when you need Enter. A `with` block marks the time for borrowing and putting away the notebook.

## Eli's Analogy

A context-managed file write is like a library desk: it checks out the item for one defined session and handles its return when the session ends.

The analogy has limits: files store encoded bytes, modes can replace or append data, and closing can finalize buffered program output.

## Worked Example

```python
from pathlib import Path

path = Path("notes.txt")
with open(path, "w", encoding="utf-8") as file:
    count = file.write("First line\n")
    file.writelines(["Second line\n", "Third line\n"])

with open(path, "a", encoding="utf-8") as file:
    file.write("Fourth line\n")

print(count)
```

Executed with Python 3, this prints `11`: `First line\n` has 11 characters. The `w` block starts the report, `writelines` receives strings that already include separators, and the `a` block adds a final line. The final file contains four lines.

## Common Mistakes

- Using `w` when old content must remain; use `a` only when addition is intended.
- Expecting `write()` to add a newline; include `\n` yourself.
- Expecting `writelines()` to add separators; include them in each supplied string.
- Leaving the encoding implicit; specify UTF-8 when it is the appropriate text encoding.
- Keeping a writer open too long; use a short `with` block.

## Compare / Contrast

- **`w` mode** truncates existing content; **`a` mode** adds after it.
- **`write()`** accepts one string; **`writelines()`** writes strings from an iterable. Neither inserts newlines.

## Key Takeaway

Use a short `with open(..., encoding="utf-8")` block, choose `w` only for intentional replacement and `a` only for intentional addition, and include each required newline in your strings.

## Practice Question Bank

1. Mode `w` truncates an existing file before writing.
2. `writelines(["red\n", "blue\n"])` produces two lines.
3. A context manager closes the file after its block ends.
4. A fresh replacement summary uses `w`.
5. Explicit UTF-8 avoids relying on a platform-dependent default.

## Sources

- Python Software Foundation, [Built-in Functions: open](https://docs.python.org/3/library/functions.html)
- Python Software Foundation, [Python Tutorial: Reading and Writing Files](https://docs.python.org/3/tutorial/inputoutput.html)
- Python Software Foundation, [io: Core tools for working with streams](https://docs.python.org/3/library/io.html)

## Related Topics

- Reading Files
- Files
- Exceptions
- Basic Testing
- Strings

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only sources; no source prose adapted. Examples executed with Python 3 on 2026-08-19.
