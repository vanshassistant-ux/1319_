# Reading Files

## In 30 Seconds

To read a text file in Python, open it with `with open(path, encoding="utf-8") as file:` and then ask the file object for content. `read()` gets the remaining text at once; `readline()` gets one line; and `for line in file` processes lines one at a time. The `with` block closes the file after its indented suite finishes.

## Why This Matters

Programs often begin with information stored outside the program: a class roster, a log, a configuration file, or notes saved as text. Reading that information carefully is a foundation for later analysis and automation. An explicit text encoding makes assumptions visible, and line-by-line processing can avoid holding all of a large file in memory.

## Learning Objectives

- Define a Python text file object and a context manager.
- Distinguish `read()`, `readline()`, and direct line iteration.
- Explain why `with open(...)` is a reliable reading pattern.
- Apply an explicit UTF-8 encoding in a text-reading example.
- Analyze when line-by-line processing is more appropriate than reading all text at once.

## The College Version

### Opening a text stream safely

A file is data stored outside the running program. Python's built-in `open()` creates a file object that gives code a way to interact with that data. For ordinary text, use `with open("names.txt", encoding="utf-8") as file:` then enter an indented block. The `with` statement makes the file object a context manager: when the block finishes, Python closes the file, even if the block exits because of an exception. This lesson focuses on reading; Writing Files covers changing contents, and Exceptions covers deliberate error responses.

Text is not raw bytes with a universal meaning. An encoding specifies how stored bytes represent characters. Python documentation notes that a default encoding can depend on the locale, so code expecting UTF-8 should say `encoding="utf-8"` rather than depend on the machine's default. In normal text reading, Python translates common platform line endings into `\n`, allowing code to treat a line ending consistently.

### Three ways to obtain text

`file.read()` obtains the remaining contents as one string. It suits a known-small file when the program needs the whole text at once. At end of file, another call returns an empty string. `file.readline()` obtains one line at a time. Its returned string usually keeps the trailing newline. An empty string means end of file, whereas a blank line is normally `"\n"`; that difference distinguishes no more data from an empty record.

For many tasks, `for line in file:` is clearest. A file object is iterable, so the loop requests successive lines without first building a list of all lines. This lets a program process one line, discard or summarize it, and continue. If later code must compare every line, collecting lines may be appropriate; otherwise iteration communicates that each line is handled as it arrives.

### Position and deliberate transformations

A file object has a current position. Reading advances it, so `read()` followed by a loop over the same object usually leaves the loop with nothing to process. Choose one reading plan or reopen the file for a separate pass. Within a loop, `line` includes its newline when present. `line.rstrip("\n")` deliberately removes that line ending while leaving other spaces alone. Plain `strip()` is broader and should not be automatic.

These small choices make data handling visible: the context manager establishes resource lifetime, explicit UTF-8 states decoding, and the loop processes one line at a time.

## Key Vocabulary

- **file object:** An object returned by `open()` that provides operations for an opened file.
- **context manager:** An object used by `with` to set up work and perform defined cleanup when the block ends.
- **text stream:** A stream that reads or writes character strings while converting to or from stored bytes.
- **encoding:** A mapping used to represent characters as bytes and decode bytes back into text.
- **newline:** The `\n` character that marks the end of a line in Python text.
- **end of file:** The point at which a read operation has no more data available.
- **iteration:** Repeatedly obtaining successive items from an iterable, such as lines from a file object.

## Eli-10

A text file is like a notebook that lives outside your program. `open` lets the program look at it. The `with` block is a promise: use the notebook for this small job, then put it away when the job is over. `read()` means “show me all remaining pages,” while a `for` loop means “show me one line, then the next.” A file remembers how far you have read, so the next request begins after the text already received.

## Eli's Analogy

Imagine reading a long attendance sheet through a checkout scanner. Reading all at once is dumping the whole sheet onto a table. Iterating is scanning one name at a time and updating a count. If a line is blank, the scanner can notice that separately instead of pretending it is a name.

The analogy has limits: a computer file has an encoding and a current read position. The scanner picture explains one-at-a-time processing, not every file behavior.

## Worked Example

Assume `attendees.txt` contains `Ada`, a blank line, and `Lin`.

```python
name_count = 0

with open("attendees.txt", encoding="utf-8") as file:
    for line in file:
        name = line.rstrip("\n")
        if name != "":
            name_count += 1

print(name_count)
```

It prints `2`. The loop receives `"Ada\n"`, `"\n"`, and `"Lin\n"`; the explicit `rstrip("\n")` changes these to `Ada`, an empty string, and `Lin`. The `if` skips only the blank line. The `with` block closes the file when its indented suite ends, before the outside `print` runs.

## Common Mistakes

- Opening expected UTF-8 text without stating its encoding; use `encoding="utf-8"` when that is intended.
- Calling `read()` and expecting an immediate loop to begin at the first line; reading advances the position.
- Treating `readline() == ""` as a blank line; it signals end of file, while a blank line is normally `"\n"`.
- Using `strip()` when only the line ending should disappear; use `rstrip("\n")` to preserve other spaces.

## Compare / Contrast

- **`read()`** returns all remaining text as one string; **`for line in file`** yields successive lines.
- An **empty string from `readline()`** marks end of file; a **blank line** normally contains a newline.
- An **implicit default encoding** can be locale-specific; **`encoding="utf-8"`** states the intended decoding.

## Key Takeaway

Use `with open(path, encoding="utf-8")` for expected UTF-8 text, then choose `read()`, `readline()`, or direct iteration based on how much content the next step needs.

## Practice Question Bank

1. A `with` block ensures context-manager cleanup for the opened file.
2. Direct iteration is a clear way to process a file one line at a time.
3. Explicit UTF-8 avoids relying on a potentially locale-specific default.
4. An empty string from `readline()` signals end of file.
5. `read()` advances the file position through its remaining contents.

## Sources

- Python Software Foundation, [The Python Tutorial — Reading and Writing Files](https://docs.python.org/3/tutorial/inputoutput.html)
- Python Software Foundation, [Python Library Reference — `io`](https://docs.python.org/3/library/io.html)

## Related Topics

- Files
- Writing Files
- Exceptions
- For Loops

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only sources; no source prose adapted. Examples executed with Python 3 on 2026-08-19.
