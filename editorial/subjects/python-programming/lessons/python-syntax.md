# Python Syntax

## In 30 Seconds

Python syntax is the set of rules that lets Python turn source text into a program. Characters become tokens, tokens form logical lines, and statements follow those lines. Most whitespace merely separates tokens, but leading whitespace is meaningful: it groups a suite under a colon-ended header. Comments begin with `#` outside a string. For long expressions, parentheses, brackets, and braces provide the safest line continuation.

## Why This Matters

Syntax is the agreement between your source file and the parser. Knowing which spaces carry structure prevents immediate errors and makes code readable to collaborators. It also helps you interpret a `SyntaxError`, `IndentationError`, or `TabError`: these report a failure to form valid program text before Python can carry out the program.

## Learning Objectives

- Distinguish physical lines, logical lines, tokens, statements, and suites.
- Explain why leading indentation is structural while most internal whitespace is not.
- Apply implicit line joining to format a multi-line expression.
- Distinguish `SyntaxError` from indentation-related errors at a basic level.
- Recognize valid comments and continuations.

## The College Version

### From characters to statements

Before Python parses a program, lexical analysis turns decoded source characters into tokens: names, literals, operators, delimiters, and structural markers such as `NEWLINE`, `INDENT`, and `DEDENT`. That explains why small textual edits can change structure. `total=3` and `total = 3` have the same essential tokens, while `blue sky` is two names and `bluesky` is one. Whitespace is needed between tokens when its absence would make a different token.

A physical line ends at a source-file line ending. A logical line is the unit used for syntax boundaries, and it may be built from more than one physical line using continuation rules. A simple statement occupies one logical line; semicolons can separate several simple statements on that line, though one statement per line is usually clearer. An expression produces a value as part of a statement. This distinction describes grammar only; the detailed topics of operators, assignment, and control flow belong elsewhere.

### Whitespace, comments, and continued lines

Most spaces, tabs, and formfeeds between tokens are interchangeable delimiters. At the beginning of a logical line, leading whitespace determines statement grouping. It is therefore language structure, not just visual style.

A comment starts with `#` outside a string literal and continues to the physical line's end. Python ignores its text. A hash inside quoted text is ordinary text, not a comment. Use comments to explain a decision or constraint that the code itself does not make obvious.

Two rules can combine physical lines into a logical line. Explicit joining uses a final backslash, but it is fragile: it cannot carry a comment and stray characters can spoil it. Implicit joining is usually better: expressions inside parentheses, square brackets, or braces can span lines without a backslash, and continuation lines can carry comments.

```python
message = (
    "syntax gives code structure"
    " before it runs"
)
print(message)
```

This prints `syntax gives code structure before it runs`. The parentheses allow the line breaks to remain one logical line.

### Suites: indentation that groups work

A compound statement has one or more clauses. Each clause has a header and a suite: its header begins with a keyword and ends in a colon, while the suite is the group of statements the clause controls. The ordinary multi-line suite uses indentation:

```python
if ready:
    print("begin")
print("outside the suite")
```

The first `print` is in the suite; the second returns to the outer indentation level. This shows structural grouping, not the details of conditions. A suite needs a statement, and `pass` can be a temporary syntactic placeholder.

Python compares leading indentation levels across logical lines, representing changes with `INDENT` and `DEDENT`. Use a single consistent indentation method in a file. A tab/space mixture whose meaning depends on tab width raises `TabError`; four spaces is a common convention.

### What syntax-related errors mean

`SyntaxError` broadly means the parser could not form valid Python grammar. A missing colon, unclosed delimiter, misplaced keyword, or undecodable source can cause it. The reported location is a useful clue, but an earlier unclosed construct can make a later location appear at fault.

`IndentationError` covers source-structure problems involving indentation, such as an unexpected indent or a missing indented suite after a header. `TabError` is the more specific error for a problematic tab/space mixture. When one occurs, first inspect the nearby header, colon, delimiters, and indentation pattern. That is structural source reading; broader debugging methods are a separate topic.

## Key Vocabulary

- **Token:** a categorized source unit such as a name, literal, operator, or delimiter.
- **Physical line:** source characters ending at a line ending.
- **Logical line:** a syntax-level line that may contain more than one physical line.
- **Statement:** a complete grammatical instruction.
- **Expression:** source text evaluated to obtain a value.
- **Suite:** statements controlled by a compound-statement clause.
- **Indentation:** leading whitespace used to determine statement grouping.
- **Implicit line joining:** continuation inside parentheses, brackets, or braces without a backslash.

## Eli-10

Python reads a program a little like a music reader reads a score. The words and symbols matter, but so does where each line begins. Most spaces keep words from running together. Spaces at the left edge show which instructions belong in the same group. A line ending in a colon says that the next indented lines belong together. A `#` starts a note for people that Python skips. Parentheses let a long thought continue over several lines. If punctuation or indentation cannot form a valid score, Python stops before playing anything and reports a syntax-related error.

## Eli's Analogy

Imagine a stage script. The words are dialogue, indentation shows which directions belong under the same scene cue, and a comment is a pencil note for the crew that is not spoken aloud.

The analogy has limits: people infer intention from a script, but Python applies grammar mechanically. Python indentation also has formal structural consequences, unlike most printed-script indentation.

## Worked Example

Run this code:

```python
label = (
    "one logical line, "
    "three physical lines"
)
print(label)  # show the completed text
```

It prints `one logical line, three physical lines`. The open parenthesis enables implicit continuation, so the four physical lines of the expression are one logical line. The adjacent literals form one string. The `print` begins at the left margin, making it a separate statement, while its trailing comment changes no output.

## Common Mistakes

- **Treating every space alike:** leading whitespace groups statements; most internal whitespace separates tokens.
- **Using a backslash when delimiters show grouping:** prefer implicit continuation in parentheses, brackets, or braces.
- **Forgetting a colon before a suite:** a compound clause's header ends with `:`.
- **Mixing tabs and spaces because they look aligned:** use one indentation method; a problematic mixture raises `TabError`.
- **Assuming every hash starts a comment:** a hash inside a string is string content.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Physical line | Logical line | A physical line ends in the file; a logical line may join several physical lines and provides a syntax boundary. |
| Explicit joining | Implicit joining | Explicit joining uses a final backslash; implicit joining uses enclosing delimiters and is generally clearer. |
| `SyntaxError` | Indentation-related error | `SyntaxError` broadly covers invalid grammar; indentation-related errors identify structural indentation problems, including tab/space inconsistency. |

## Key Takeaway

Python source is structured before it runs: tokens form logical lines, and leading indentation groups suites. Use comments for readers, parentheses for multi-line expressions, and consistent indentation so the structure is valid and visible.

## Practice Question Bank

1. **Which character begins a Python comment when it appears outside a string literal?** `#`.
2. **What is the clearest standard way to split a long Python expression across lines?** Put it inside parentheses, brackets, or braces and break within them.
3. **What is the indented group after a colon-ended clause header called?** A suite.
4. **What does a file with a tab/space mix whose meaning depends on tab width raise?** `TabError`.
5. **Why can an expression inside matching parentheses span physical lines?** The open delimiter enables implicit line joining until the close.

## Sources

- Python Software Foundation, [Lexical analysis](https://docs.python.org/3/reference/lexical_analysis.html)
- Python Software Foundation, [Compound statements](https://docs.python.org/3/reference/compound_stmts.html)
- Python Software Foundation, [Simple statements](https://docs.python.org/3/reference/simple_stmts.html)

## Related Topics

- Running Python Programs
- Variables
- Conditionals
- Debugging
- Building Small Executable Python Examples

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights: official documentation used as reference-only; no source prose adapted. Research checked 2026-08-19.
