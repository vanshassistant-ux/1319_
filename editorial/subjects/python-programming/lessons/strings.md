# Strings

## In 30 Seconds

A Python string is text written as a sequence of characters, usually between quotes. You can read one character with an index, take a range with a slice, and join strings with `+`. Strings are immutable: an operation that appears to change text instead creates a new string. F-strings let a literal include the value of an expression inside braces.

## Why This Matters

Programs constantly work with names, labels, messages, and other text. Strings give that text predictable rules: positions start at zero, slices stop before their ending boundary, and the original text cannot be edited in place. Those rules make it easier to diagnose an off-by-one result, assemble a clear message, or understand why an attempted character assignment fails. Careful string reasoning also carries into later work with lists, files, and user-facing output.

## Learning Objectives

- Define a Python string and recognize common string literal forms.
- Explain how zero-based, negative indexing and slicing select text.
- Distinguish an immutable string from a mutable sequence.
- Apply concatenation and a basic f-string to construct a message.
- Interpret common escape sequences and a Unicode escape.

## The College Version

### Text values and literal notation

A string is Python's built-in representation for textual data. A program usually creates one with a quoted literal, such as `'hello'` or `"hello"`. Choosing one quote style over the other can make punctuation easier to express: `"don't"` needs no backslash around its apostrophe, while `'She said "yes"'` needs no backslash around the double quotes. The quote marks delimit the value; they do not become part of it. A string can be empty (`''`) and can contain one character. Python does not introduce a separate character type for that one-character case: `'P'` is a string whose length is one.

Backslash begins an escape sequence inside an ordinary string literal. For example, `\n` represents a newline, `\t` represents a tab, and `\\` represents one backslash. Python also recognizes Unicode escape forms; `\N{GREEK SMALL LETTER PI}` evaluates to π. This lesson concerns the text value after Python evaluates a literal, not the encoding of a source file or reading text from a file.

### A string is an immutable sequence

Strings are sequences: their characters have an order and positions. The first character has index 0, so in `word = 'Python'`, `word[0]` is `'P'`. Negative indices count back from the end: `word[-1]` is `'n'`. Asking for one position with an index returns a one-character string. An index outside the available positions raises `IndexError`.

A slice uses a colon to select a run of positions. In `word[1:4]`, the start position 1 is included and the stop position 4 is excluded, producing `'yth'`. Omitting the start means the beginning; omitting the stop means the end. Thus `word[:2]` is `'Py'` and `word[4:]` is `'on'`. Thinking of a slice as boundaries between characters prevents an off-by-one error. Unlike a single out-of-range index, a slice can extend beyond the available boundaries and is clipped by the sequence rules.

Immutable means the characters of an existing string cannot be replaced in place. `word[0] = 'J'` raises `TypeError`. To get different text, calculate a new string, perhaps with a slice and concatenation. A program can later use a new string value; that is not the same as mutating the original string's character.

### Building text with operations and f-strings

The `+` operator concatenates strings: `'Ada' + ' Lovelace'` produces `'Ada Lovelace'`. The space belongs in the second literal; concatenation does not insert punctuation or spaces. An f-string is a string literal with an `f` prefix, such as `f'{name} has {items} tasks.'`. Braces introduce replacement fields containing expressions. With `name = 'Ada'` and `items = 3`, it produces `'Ada has 3 tasks.'`. The prefix is what makes braces special; ordinary strings do not evaluate text between braces.

Trace the exact operation. For `'Python'[1:4]`, mark positions 1, 2, and 3, then stop before 4: `yth`. For `f'{2 + 3} items'`, calculate the expression first, then place `5` into the sentence.

## Key Vocabulary

- **string:** An ordered, immutable sequence of text characters in Python.
- **string literal:** Source-code notation that creates a string value, usually matching quotes around text.
- **index:** An integer position used to select one item from a sequence.
- **slice:** A selection between sequence boundaries, such as `text[1:4]`.
- **immutable:** Unable to have its existing contents altered in place.
- **concatenation:** Joining sequences end to end.
- **escape sequence:** Backslash-led notation in a literal representing a character or special action.
- **f-string:** A formatted string literal with expressions in replacement fields.

## Eli-10

A string is a row of letter tiles. In Python, the row might spell `Python`. You can point at one tile: position 0 is P, and position -1 is the last tile, n. You can also take a strip of tiles. `[1:4]` means start at tile 1 and stop just before tile 4, so it gives `yth`.

The row is protected under clear plastic. You may read it, but you cannot pry out the first tile and swap in J. If you want `Jython`, you make a new row. Joining `'Ada'` and `' Lovelace'` places two strips end to end. An f-string is a printed sentence with blank spaces: Python calculates what goes in the braces and fills it in.

## Eli's Analogy

Strings are numbered rows of protected letter tiles, and slices are scissors placed between tiles. The analogy stops being exact because Python strings hold more than visible single-width letters, and a program stores values rather than physical tiles. It is mainly for order, positions, and slice boundaries.

## Worked Example

Trace `word = 'Python'`. The positions are 0:P, 1:y, 2:t, 3:h, 4:o, and 5:n. `word[1:4]` starts at y and stops before position 4, so its value is `'yth'`; `word[-1]` is `'n'`. To create a label, `'Language: ' + word` produces `'Language: Python'`. For a message with a calculated value, `f'{word[0]} is the first character'` first evaluates `word[0]` as `'P'`, then produces `'P is the first character'`. Trying `word[0] = 'J'` raises `TypeError` because the existing string is immutable.

## Common Mistakes

- **Treating the stop in `text[a:b]` as included.** Select from `a` through `b - 1`.
- **Expecting `text[0] = 'J'` to edit a character.** Construct a new string instead.
- **Forgetting that the first index is 0.** Write a small position map before tracing.
- **Expecting `+` to add a missing space.** Put the intended space in a string operand.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Indexing: `text[2]` | Slicing: `text[2:5]` | Indexing selects one character; slicing selects a substring between boundaries. |
| `'{name}'` | `f'{name}'` | Only the f-string evaluates the expression in braces. |
| New string value | Character assignment | A program can calculate new text but cannot mutate an existing string's character. |

## Key Takeaway

Strings are immutable, ordered text sequences. Read them with zero-based indices or boundary-based slices, create new text with concatenation or f-strings, and trace the exact characters selected.

## Practice Question Bank

1. What is the value of `'Python'[0]`? **Answer: A (`'P'`).**
2. Given `word = 'Python'`, what does `word[1:4]` evaluate to? **Answer: B (`'yth'`).**
3. Why does `text = 'cat'; text[0] = 'b'` fail? **Answer: C (strings are immutable).**
4. With `name = 'Ada'` and `items = 3`, which expression produces `'Ada has 3 tasks.'`? **Answer: D (`f'{name} has {items} tasks.'`).**
5. What does `\n` represent inside an ordinary Python string literal? **Answer: A (a newline character).**

## Sources

- Python Software Foundation, [The Python Tutorial — An Informal Introduction to Python](https://docs.python.org/3/tutorial/introduction.html)
- Python Software Foundation, [The Python Language Reference — Lexical analysis](https://docs.python.org/3/reference/lexical_analysis.html)

## Related Topics

- `python-programming:foundations:python-syntax`
- `python-programming:foundations:variables`
- `python-programming:foundations:string-methods`
- `python-programming:foundations:lists`
- `python-programming:foundations:input-and-output`

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-19 against official Python documentation; code examples executed with Python 3. Reference-only sources; no source prose adapted. Status: READY_TO_PUBLISH.
