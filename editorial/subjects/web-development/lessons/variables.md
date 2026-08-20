# Variables

## In 30 Seconds

In JavaScript, a variable is commonly introduced with `let` or `const`. Each declaration creates a named binding: a name the program can use to refer to a value. Use `let` when the binding will later be assigned a different value. Use `const` when the binding itself should not be reassigned after initialization. Both are block-scoped, so a name declared inside braces is available only within that block and nested blocks.

## Why This Matters

Variables let a program keep track of changing information without losing the meaning of each value. The `let`/`const` distinction shows a reader whether a name is expected to change. Block scope prevents temporary names from leaking into unrelated code. These habits make small scripts easier to debug and prepare learners for later JavaScript work.

## Learning Objectives

- Define a JavaScript binding and distinguish declaration from initialization.
- Choose `let` or `const` based on reassignment intent.
- Explain why a `const` binding cannot receive a new assignment.
- Trace a name across nested blocks.
- Identify a temporal-dead-zone error.

## The College Version

### Names bind to values

JavaScript uses bindings to associate a meaningful identifier with a value. A declaration introduces the name; an initializer supplies its first value. `const campus = "North";` does both in one statement. `let visits;` declares a binding without an explicit initial value, and a later `visits = 1;` assignment changes it. Declaration, initialization, and assignment are separate operations. This lesson uses binding as a language-rule model, not as a claim about a physical storage box.

### Choosing `let` or `const`

`let` and `const` are lexical declarations. Choose `let` when a binding will receive another assignment, such as `let score = 0;` followed by `score = score + 1;`. Choose `const` when the binding itself will not be reassigned, such as `const label = "Practice";`. A const declaration needs an initializer, and assigning to its binding later is an error. This is a rule about reassignment of the name; objects and arrays introduce separate questions in their own lessons.

### Block scope and shadowing

A block is code inside braces. Bindings declared with `let` and `const` are usable in their block and nested blocks, not after the block closes. In `let message = "outside"; { let message = "inside"; }`, the second declaration makes a distinct inner binding. Inside the braces it shadows the outer binding; outside, the outer binding is selected again. Shadowing is legal but deserves clear naming because it can make a program harder to read.

### Declaration order

Do not use a lexical binding before its declaration has been evaluated. From the start of its scope until its declaration runs, a `let` or `const` name is in its temporal dead zone. `{ console.log(total); let total = 4; }` throws a `ReferenceError` rather than printing `undefined`. Put declarations before their first use.

## Key Vocabulary

- **binding:** The association between an identifier and a value in a particular scope.
- **declaration:** A statement that introduces a binding name.
- **initializer:** The expression providing a declared binding's first value.
- **assignment:** An operation that gives a value to an existing binding.
- **reassignment:** An assignment replacing the prior value of a binding.
- **block scope:** Visibility limited to a brace-delimited block and nested blocks.
- **shadowing:** A nested declaration that uses an outer binding's name.
- **temporal dead zone:** The early part of a lexical binding's scope when it cannot be accessed.

## Eli-10

A variable name is a label a program uses when it needs to find a value again. `let` is a label the program plans to replace later, such as a score that goes up. `const` is a label the program promises not to replace. Curly braces make a temporary room: a label made inside is not available outside. A smaller room can use the same word, but its inner label is the one seen while inside.

## Eli's Analogy

Imagine color-coded sticky notes on folders. A `let` note can be moved to another folder later. A `const` note cannot be moved to a different folder. Curly braces make a temporary work area: notes placed inside are usable there but disappear from the shared desk when it closes. A nested area can use the same word on a note, temporarily covering the view of an older note.

The analogy is limited: JavaScript bindings are language-defined relationships, not physical notes. It also must not suggest that `const` makes every aspect of a value immutable; this lesson only says the binding cannot be reassigned.

## Worked Example

Run `let score = 0; score = score + 1; const course = "Web Basics"; { let score = 10; console.log(score); } console.log(score); console.log(course);`. The outer score changes from `0` to `1`. The block makes another score with value `10`, so the first log prints `10`. After its block closes, the outer score is selected and the second log prints `1`; the final log prints `Web Basics`. Executed with Bun, the three lines are `10`, `1`, and `Web Basics`. Reassigning `course` would throw.

## Common Mistakes

- **Using `const` for a planned update.** Use `let` when a later assignment is part of the design.
- **Expecting a block binding outside its braces.** It is usable only in its block and nested blocks.
- **Using a binding before its declaration.** Put the declaration before its first use to avoid a temporal-dead-zone error.
- **Treating an inner and outer same-spelled name as one binding.** The inner binding shadows the outer one only within its block.

## Compare / Contrast

- **`let` / `const`:** A let binding may be reassigned; a const binding must be initialized and may not be reassigned.
- **Declaration / assignment:** A declaration introduces a name; an assignment gives a value to an existing binding.
- **Outer / shadowing inner binding:** The inner binding is selected only in its nested block.

## Key Takeaway

Use `let` for a binding that will be reassigned and `const` for one that will not. Both are block-scoped, so declare names before using them and track the braces that define where each name is available.

## Practice Question Bank

1. Which statement correctly describes a `const` declaration? **A.** It must include an initializer and its binding cannot later be reassigned.
2. Which change is permitted after `let count = 2;`? **B.** `count = 3;`
3. What does `console.log(label)` print after an inner block shadows `label`? **C.** `outer`
4. Why does an early access to `const total` fail? **D.** It occurs during the temporal dead zone.
5. Which declaration fits a retry counter that changes? **A.** `let attempts = 0;`

## Sources

- MDN Web Docs, [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- MDN Web Docs, [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- Ecma International, [ECMAScript lexical declarations](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-lexical-declarations)

## Related Topics

- JavaScript
- JavaScript Fundamentals
- Functions
- Arrays
- Objects

## Editorial Metadata

Status: source-verified, not public. Research date: 2026-08-20. Sources are reference-only; prose is original synthesis and the worked example was executed with Bun.
