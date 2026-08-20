# CSS Syntax

## In 30 Seconds

CSS syntax is the punctuation and arrangement that let a browser read a stylesheet. A common style rule has a selector, then a declaration block in curly braces. Inside the block, each declaration pairs a property with a value using a colon, and semicolons separate declarations. For example, `p { color: navy; margin: 1rem; }` has one rule and two declarations. This lesson explains that grammatical structure, not which selectors to choose or which competing rule wins.

## Why This Matters

Syntax is the first debugging layer in CSS. Before asking whether a layout method, selector, or cascade decision is right, you need to see whether the browser can read the rule you wrote. A missing brace can accidentally absorb later code; a missing colon means there is no property/value declaration; an inappropriate value can make just that declaration unusable. Reading CSS as small, named parts also helps in college courses, design-system work, browser developer tools, and collaborative code review. It lets you explain an error precisely instead of describing a rule only as “broken.”

## Learning Objectives

- Identify the selector, declaration block, property, and value in a basic CSS style rule.
- Explain the purpose of colons, semicolons, and curly braces in a declaration block.
- Distinguish a declaration from a complete style rule.
- Apply CSS comment syntax without confusing comments with active CSS.
- Diagnose simple syntax and property/value mistakes in a short rule.

## The College Version

### A stylesheet is made from rules and declarations

CSS is a language for describing the presentation of structured documents. Its syntax gives the browser a way to break stylesheet text into meaningful units. At a broad level, a stylesheet can contain style rules and at-rules. This lesson concentrates on the ordinary style rule. A style rule has two visible regions: a prelude before the opening brace and a declaration block between `{` and `}`. In the usual case, the prelude is a selector: it identifies which document elements the declarations are intended to address. Selector categories and matching belong to the selectors lesson; here, treat `p` in `p { color: navy; }` simply as the rule's selector.

The braces begin and end the declaration block. Within that block, `color: navy;` is one declaration. It says that the CSS property named `color` is being given the value `navy` for elements that the rule addresses. A second declaration can follow in the same block: `p { color: navy; margin: 1rem; }`. This is one style rule, not two, because there is one selector prelude and one brace-delimited block. It contains two declarations. That distinction matters when diagnosing errors: deleting a declaration is a small change inside a rule, while deleting a brace can change where the rule ends. CSS also has at-rules, which begin with `@` and have their own grammars. Their individual purposes are outside this introduction.

### Declarations pair a property with a value

The core grammar inside a declaration block is property, colon, value, and normally a semicolon. In `margin: 1rem;`, `margin` is the property name, `:` separates that name from the value, `1rem` is the value, and `;` marks the end of the declaration. CSS properties are defined names with particular jobs and particular allowed value grammars. The colon does not make an arbitrary word sequence valid. `color: navy;` uses a color value, whereas `color: 17px;` is not a usable `color` declaration because a length is not a valid color value for that property. Conversely, `margin: 17px;` can use a length value.

Semicolons separate declarations. In a simple block, the last semicolon is often optional before the closing brace, but retaining it is a reliable editing habit: adding another declaration later does not require repairing the preceding line. Whitespace and line breaks are largely for readability in this example. The compact form `p{color:navy;margin:1rem}` and a multiline version use the same structural punctuation, but the multiline form is easier for people to scan and revise. Colons, semicolons, and braces are not decoration: they tell the parser where the property/value relationship and declaration block begin and end. A common beginner error is `color navy;`, which lacks the colon.

### Parsing, invalid pieces, and comments

Browsers parse CSS rather than merely display its characters. For an ordinary style rule, a property the browser does not recognize, or a value that does not match that property's defined syntax, makes that declaration invalid and the browser ignores it. Remaining valid declarations in the rule can still apply. In `p { color: navy; margin: nope; padding: 1rem; }`, the invalid margin value does not automatically erase the valid color and padding declarations. This supports focused debugging, though it does not guarantee a simple outcome for every malformed fragment.

Comments are human notes that the parser does not treat as active styling instructions. CSS uses `/*` to start a comment and `*/` to end it. The same form works on one line or across many lines. A comment can explain a constraint or a temporary investigation, but it should not replace a clear property name. CSS comments do not nest. Starting another `/*` inside an open comment does not create a safely nested layer. When commenting out code, make sure the delimiters surround exactly the intended text; a missing closing `*/` can make later text part of the comment.

### Read a rule from the outside inward

Start with the opening `{` and matching `}`. Everything between them is the rule's declaration block. Look immediately before the opening brace to identify the selector portion, without classifying its type. Then split the block at semicolons and inspect each candidate declaration for its property name, colon, and value. For `article { color: #223; padding: 16px; /* interior space */ }`, the selector is `article`; there are two active declarations; and the remaining text is a comment, not a third declaration.

This routine separates syntax questions from later CSS questions. It does not determine which rule wins when several rules address an element—that belongs to cascade and specificity. It also does not decide whether a selector is well designed. It establishes what text forms one rule and what each declaration says. Once you can label the pieces accurately, browser developer tools become more useful: an ignored declaration can be investigated as an invalid property or value, a spelling error, an unsupported feature, or a competing rule rather than all of those possibilities being blurred together.

## Key Vocabulary

- **Style rule:** A CSS construct that associates a selector with a block of declarations intended for the elements it addresses.
- **Selector:** The part of a CSS style rule that identifies the document elements the rule is intended to address.
- **Declaration block:** The brace-delimited portion of a CSS rule that contains declarations.
- **Declaration:** A property-and-value pair in CSS, written with a colon between the property name and its value.
- **Property:** A defined CSS name that identifies the aspect of presentation a declaration sets.
- **Value:** The data supplied to a CSS property according to that property's allowed syntax.
- **Semicolon:** The `;` punctuation mark that separates CSS declarations in a declaration block.
- **Comment:** A human-readable CSS note enclosed by `/*` and `*/` that is not an active style declaration.

## Eli-10

CSS is written like short instructions in labeled folders. First you name the part of the page the instruction is for. Then you open curly braces, which are like opening that part's folder. Inside, each instruction has a label, a colon, and an answer: `color: navy;` means the color setting gets navy. The semicolon says that instruction is finished. You can put several instructions in the same folder, then close it with the other curly brace. A comment is a note for people reading the stylesheet, not an instruction for the browser to carry out.

## Eli's Analogy

Imagine a paint order for a room. The room name is the selector. The curly braces are the edges of that room's order sheet. Each line says what is being chosen and what it should be. The colon separates the question from the choice, and the semicolon ends the line. A note in the margin is a comment: useful to the painter, but not an instruction that changes the paint by itself.

The analogy has limits. A CSS selector is not literally a room name, and a declaration does not always produce a simple paint-like visual change. CSS values follow formal property-specific rules, and several rules can later interact through the cascade. This lesson uses the order sheet only to explain the punctuation and pieces of one rule.

## Worked Example

Read this rule from the outside inward: `p { color: navy; margin: 1rem; /* separate paragraphs */ }`. The text `p` is the selector portion. The opening `{` begins its declaration block and the final `}` closes it. There are two active declarations. In `color: navy;`, `color` is the property, `navy` is its value, `:` links them, and `;` ends the declaration. `margin: 1rem;` has the same structure with a different property and value. `/* separate paragraphs */` is a comment, so it neither creates a property nor changes the preceding value. If `margin: 1rem` were changed to `margin 1rem;`, the missing colon would prevent it from being a normal declaration; the valid `color: navy;` declaration would still be separate.

## Common Mistakes

- **Mistake:** Calling a whole `selector { ... }` construct a declaration. **Correction:** Call the whole construct a style rule; each `property: value;` line inside it is a declaration.
- **Mistake:** Replacing the colon between a property and value with a space. **Correction:** Use `property: value;`; whitespace does not replace the colon.
- **Mistake:** Assuming any text after a colon is a valid value. **Correction:** Check the property definition, because each property accepts its own kinds of values.
- **Mistake:** Using `//` for a CSS comment or attempting to nest comments. **Correction:** Use `/* comment */`; CSS comments do not nest.

## Compare / Contrast

- **Style rule vs. declaration:** A style rule combines a selector with a declaration block; a declaration is one property/value instruction within that block.
- **Property vs. value:** A property names what is being set, while a value supplies data for that property.
- **Active declaration vs. comment:** A valid active declaration participates in styling; a comment is a human note.

## Key Takeaway

A basic CSS style rule is selector plus braces plus declarations. Read each declaration as `property: value;`, and use comments as notes rather than as active CSS. Correct punctuation makes later CSS reasoning possible.

## Practice Question Bank

1. In `p { color: navy; }`, which part is the declaration? **Answer: C.** `color: navy;`
2. Which punctuation separates the property name from its value in a normal CSS declaration? **Answer: D.** A colon.
3. A rule is `p { color: navy; margin 1rem; }`. What is the most accurate diagnosis? **Answer: A.** The margin text lacks the colon needed for a normal declaration.
4. Which form is a CSS comment that can be used on one line or across multiple lines? **Answer: B.** `/* note */`
5. Why is `color: 17px;` not automatically a usable color declaration? **Answer: C.** Each property has its own allowed value syntax, and a length is not a color value.

## Sources

- W3C CSS Working Group, [CSS Syntax Module Level 3](https://www.w3.org/TR/css-syntax-3/)
- MDN Web Docs, [Introduction to CSS syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Syntax/Introduction)
- MDN Web Docs, [Comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Syntax/Comments)
- MDN Web Docs, [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties)

## Related Topics

CSS; Selectors; Cascade; Specificity; Box Model.

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only standards and documentation; no source prose adapted. Researched 2026-08-20.
