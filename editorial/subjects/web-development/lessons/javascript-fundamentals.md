# JavaScript Fundamentals

## In 30 Seconds

JavaScript code contains expressions that evaluate to values and statements that organize instructions. Values have types, including numbers, strings, Booleans, `null`, and `undefined`.

## Why This Matters

Knowing which pieces of code produce values and which are instructions makes it easier to predict behavior and debug before using browser-specific APIs.

## Learning Objectives

- Define values, expressions, and statements.
- Identify common primitive value types.
- Predict simple arithmetic and comparison results.

## The College Version

### Values and their types

JavaScript works with values. Its primitive types include undefined, null, Boolean, Number, BigInt, String, and Symbol. Numbers support arithmetic, strings represent text, and Booleans represent `true` or `false`. `null` and `undefined` are distinct primitive values. Type affects how operators behave, so inspect both values and expected result types.

### Expressions evaluate

An expression resolves to a value. `6 * 7` evaluates to `42`; `5 === 6` evaluates to `false`. In `2 + 3 * 4`, multiplication occurs before addition, producing `14`; `(2 + 3) * 4` produces `20`. A console may show that result as a convenience, but evaluation alone does not put text on a web page.

### Statements organize actions

A statement is a complete program instruction. An expression can appear as an expression statement. Comments such as `// note` assist people reading source but are ignored by the JavaScript engine. When debugging, inspect expressions for unexpected values and statements for intended instructions.

## Key Vocabulary

- **value:** Data used or produced by JavaScript.
- **primitive:** A non-object JavaScript value.
- **expression:** Code that evaluates to a value.
- **statement:** A complete program instruction.
- **operator:** A symbol or keyword acting on operands.

## Eli-10

Values are workshop materials. Expressions are calculation cards that turn materials into a result. Statements are the posted instructions for work. A comment is a sticky note for a person, not an instruction the workshop follows.

## Eli's Analogy

Values are materials, expressions are calculation cards, and statements are work instructions. This breaks down because JavaScript follows formal language rules rather than acting like a person, and it does not explain browser APIs.

## Worked Example

`2 + 3 * 4` evaluates to `14`; `(2 + 3) * 4` evaluates to `20`. `14 === 20` evaluates to `false`. The first two results are numbers; the comparison result is a Boolean.

## Common Mistakes

- Do not call every line an expression; distinguish a value-producing expression from an instruction.
- Comparisons produce Booleans, not numbers.
- Console display is not automatically page output.
- `null` and `undefined` are distinct values.

## Compare / Contrast

Expressions evaluate to values; statements are instructions. Comments assist human readers and are ignored by the engine.

## Key Takeaway

Values have types, expressions evaluate to values, and statements organize instructions.

## Practice Question Bank

See the structured review record for five source-verified questions on type, evaluation, comments, and statement roles.

## Sources

- MDN: JavaScript data types and data structures
- MDN: Expressions and operators
- ECMAScript Language Specification: Expressions and statements

## Related Topics

JavaScript; Variables; Functions; Arrays; Objects.

## Editorial Metadata

Original EliExplains synthesis, source verified 2026-08-20. Reference-only sources; no source prose adapted.
