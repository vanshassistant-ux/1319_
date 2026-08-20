# Boolean Logic

## In 30 Seconds

Boolean logic works with just two values: true and false. Three operators combine them. AND is true only when both inputs are true. OR is true when at least one input is true. NOT flips a value to its opposite. Chain these together and you get boolean expressions, the yes-or-no tests that decide which way a program branches. Master the truth tables and you can predict exactly what any condition will do.

## Why This Matters

Every decision a program makes runs on boolean logic. An `if` statement, a loop's stopping test, a database filter, and a search query all evaluate a boolean expression and act on the true-or-false result. Getting the logic wrong is one of the most common sources of bugs, because a condition that looks reasonable can be subtly incorrect. Reading truth tables and applying De Morgan's laws lets you rewrite and simplify conditions with confidence instead of guessing. The same two-valued reasoning underlies digital circuits, set theory, and formal proof, so the skill you build here transfers well beyond any single language.

## Learning Objectives

- Define the boolean values true and false and explain why logic is two-valued.
- Construct and read the truth tables for AND, OR, and NOT.
- Evaluate a compound boolean expression using operator precedence.
- Apply De Morgan's laws to rewrite the negation of a compound condition.
- Explain short-circuit evaluation and how it prevents errors in a condition.
- Trace how a boolean expression determines which branch a program takes.

## The College Version

### Two values and three operators

Boolean logic is the algebra of a two-valued world. Every boolean value is exactly one of two things, true or false, with no third option and no in-between. That restriction is the point: because there are only two values, the behavior of every operation can be written out completely in a small table. The type is named for George Boole, the nineteenth-century mathematician who first treated logical reasoning as a kind of algebra.

Three basic operators combine boolean values. AND (also called conjunction) takes two operands and yields true only when both operands are true; if either one is false, the result is false. OR (inclusive disjunction) yields true when at least one operand is true, and false only when both operands are false. Note that this OR is inclusive: `true OR true` is true, not false. NOT (negation) takes a single operand and yields its opposite, turning true into false and false into true. These three are enough to express any boolean function; other operators such as exclusive-or can be built from them.

Different languages spell the operators differently. Python writes them as the words `and`, `or`, `not`; many C-family languages write `&&`, `||`, `!`. Mathematical logic uses the symbols for conjunction, disjunction, and negation. The names and symbols change, but the truth tables do not.

### Truth tables: the complete specification

A truth table lists every possible combination of input values and the output for each. Because each operand is one of two values, an operator on two operands has exactly four input rows, and one operand has two. These tables are the full definition of the operators.

| A | B | A AND B | A OR B |
|---|---|---------|--------|
| false | false | false | false |
| false | true  | false | true  |
| true  | false | false | true  |
| true  | true  | true  | true  |

| A | NOT A |
|---|-------|
| false | true |
| true  | false |

AND is true only in the last row; OR is false only in the first row. These tables are worth memorizing because they let you evaluate any expression mechanically. To evaluate a compound expression, resolve NOT first, then AND, then OR, unless parentheses say otherwise; this precedence order (NOT above AND above OR) is standard across mathematics and most programming languages. For example, in `A OR B AND C`, the AND is evaluated before the OR, so it means `A OR (B AND C)`. When precedence is not obvious to a human reader, adding parentheses makes the intended grouping explicit and prevents a whole category of bugs.

Any boolean expression built from these operators can be fully checked by writing out its truth table: list every combination of the input variables, evaluate column by column, and read off the result. If two expressions produce identical output columns for every input row, they are logically equivalent and can be substituted for one another.

### De Morgan's laws

Two equivalences, named for Augustus De Morgan, a contemporary of Boole in the nineteenth-century algebra-of-logic tradition, describe how negation distributes over conjunctions and disjunctions.

- **First law:** `NOT(A AND B)` is equivalent to `(NOT A) OR (NOT B)`.
- **Second law:** `NOT(A OR B)` is equivalent to `(NOT A) AND (NOT B)`.

In words, when you push a NOT inside a parenthesis, each operand gets negated and the operator flips: AND becomes OR, and OR becomes AND.

These laws are not intuitions to trust on faith; they are provable by truth table. Build the table for `NOT(A AND B)` and the table for `(NOT A) OR (NOT B)`, and the two output columns match on all four rows, which is exactly what logical equivalence means. The worked example below does this.

De Morgan's laws matter in practice because programmers frequently need to negate a condition. Suppose a feature should run only when a user is "not (logged in and verified)". By the first law, that is the same as "not logged in, or not verified", which is often easier to read and to reason about. Getting this transformation wrong, for instance by flipping the operands but forgetting to change AND to OR, is a classic logic error that produces code that looks correct but behaves backwards on some inputs.

### Short-circuit evaluation and program conditions

Most languages evaluate AND together with OR using short-circuit semantics: they stop as soon as the result is determined. For AND, if the first operand is false, the whole expression is already false regardless of the second operand, so the second operand is never evaluated. For OR, if the first operand is true, the whole expression is already true, so the second operand is skipped. Python's documentation states this directly: `and` only evaluates its second argument if the first is true, and `or` only evaluates its second argument if the first is false.

Short-circuiting is not just an optimization; it changes what programs can safely express. A guard such as `x != 0 and y / x > 2` relies on it: when `x` is zero, the first operand is false, so the division is never attempted and no divide-by-zero error occurs. Reordering the operands would break that protection. A related language detail worth knowing is that in Python `and` and `or` return one of their operands rather than a strict `True` or `False`, while `not` always returns `True` or `False`; the truth-table behavior still holds when the result is used as a condition.

All of this exists to serve program decisions. A conditional statement evaluates a boolean expression and runs one branch when the result is true and another when it is false; a loop re-evaluates a boolean expression to decide whether to continue. Because these tests sit at the fork of every decision, a small logic mistake changes the program's behavior for real inputs. Reading truth tables, respecting precedence, and applying De Morgan's laws are the tools that let you write conditions you can actually verify.

## Key Vocabulary

- **Boolean value** — A value that is exactly one of two possibilities, true or false, with no other option.
- **AND (conjunction)** — An operator whose result is true only when both of its operands are true.
- **OR (inclusive disjunction)** — An operator whose result is true when at least one of its operands is true, and false only when both are false.
- **NOT (negation)** — A single-operand operator that returns the opposite truth value: true becomes false and false becomes true.
- **Truth table** — A table listing every combination of input values for an expression alongside the resulting output value.
- **Boolean expression** — A combination of boolean values, variables, and operators that evaluates to a single true or false result.
- **Operator precedence** — The rules that decide which operator is applied first; for boolean logic, NOT before AND before OR.
- **Short-circuit evaluation** — Stopping evaluation of an AND/OR expression as soon as the outcome is known, so the second operand may be skipped.
- **De Morgan's laws** — Two equivalences: `NOT(A AND B)` equals `(NOT A) OR (NOT B)`, and `NOT(A OR B)` equals `(NOT A) AND (NOT B)`.
- **Logical equivalence** — Two expressions are equivalent when their truth tables produce identical outputs for every combination of inputs.

## Eli-10

Boolean logic is a way of answering questions that only have two answers: yes or no, true or false. You build bigger questions out of three little words. AND means both parts must be yes. OR means at least one part must be yes. NOT flips a yes into a no and a no into a yes. Once you know how those three words behave, you can figure out the answer to any question built from them, no matter how long, just by working through it one piece at a time.

## Eli's Analogy

Think about deciding whether you can ride a rollercoaster. The rule might be "tall enough AND with an adult". AND means both must be true, so if you are tall enough but alone, the answer is no. If the rule were "tall enough OR with an adult", then either one on its own would be enough to say yes. And "NOT tall enough" just flips your height check to the opposite answer.

**Where the analogy breaks down:** The rollercoaster rule feels flexible and a bored operator might bend it, but boolean logic never bends: the truth table gives one fixed answer for each combination, every time. The analogy also hides short-circuiting. A computer checking "tall enough AND with an adult" can stop the moment it sees you are too short, because the answer is already no, whereas a human might still glance around for an adult.

## Worked Example

Let's prove De Morgan's first law, `NOT(A AND B) = (NOT A) OR (NOT B)`, by building the full truth table. There are two variables, so four rows.

| A | B | A AND B | NOT(A AND B) | NOT A | NOT B | (NOT A) OR (NOT B) |
|---|---|---------|--------------|-------|-------|--------------------|
| false | false | false | **true**  | true  | true  | **true**  |
| false | true  | false | **true**  | true  | false | **true**  |
| true  | false | false | **true**  | false | true  | **true**  |
| true  | true  | true  | **false** | false | false | **false** |

The `NOT(A AND B)` column and the `(NOT A) OR (NOT B)` column agree on all four rows, so the two expressions are logically equivalent. Running this same check in Python over all four input combinations confirms the columns are identical, which is exactly what it means for the law to hold.

## Common Mistakes

- **Reading OR as exclusive, assuming `true OR true` is false.** The logical OR is inclusive: it is true whenever at least one operand is true, including when both are true. Only `false OR false` is false.
- **Negating a compound condition by flipping the operands but keeping the AND/OR operator unchanged.** De Morgan's laws require flipping the operator too: `NOT(A AND B)` becomes `(NOT A) OR (NOT B)`, not `(NOT A) AND (NOT B)`.
- **Assuming the AND/OR operators share one precedence and evaluating strictly left to right.** NOT binds tightest, then AND, then OR; `A OR B AND C` means `A OR (B AND C)`. Use parentheses when in doubt.
- **Ordering a guard condition so the risky test runs first, then relying on it to prevent an error.** Short-circuiting only protects you if the safe check comes first: write `x != 0 and y / x > 2`, not the reverse.
- **Believing the operator symbols differ in meaning across languages.** Python's `and`/`or`/`not` and C's `&&`/`||`/`!` denote the same operators with the same truth tables; only the spelling changes.

## Compare / Contrast

- **AND vs OR** — AND needs both operands true to be true; OR needs only one. Their false-rows are mirror images: AND is true in one of four rows, OR is false in one of four.
- **Inclusive OR vs Exclusive-or (XOR)** — Inclusive OR is true when at least one operand is true, including both. XOR is true only when the operands differ, so `true XOR true` is false.
- **`NOT(A AND B)` vs `(NOT A) AND (NOT B)`** — These are not equivalent. The correct De Morgan rewrite of `NOT(A AND B)` is `(NOT A) OR (NOT B)`; using AND instead is a common logic bug.

## Key Takeaway

Boolean logic reduces every condition to true or false using three operators with fixed truth tables: AND (both), OR (at least one), NOT (opposite). Truth tables and De Morgan's laws let you evaluate and safely rewrite the conditions that steer a program.

## Practice Question Bank

1. **For which inputs is the expression `A AND B` true?**
   - A. Only when both A and B are true
   - B. When at least one of A or B is true
   - C. Only when both A and B are false
   - D. When exactly one of A or B is true

   **Answer: A.** AND (conjunction) is true only in the single row where both operands are true; in the other three rows it is false. "At least one true" describes OR, "both false" describes the one row where AND is false, and "exactly one true" describes exclusive-or.

2. **By De Morgan's laws, `NOT(A AND B)` is logically equivalent to which expression?**
   - A. (NOT A) AND (NOT B)
   - B. A OR B
   - C. (NOT A) OR (NOT B)
   - D. NOT(A) AND B

   **Answer: C.** De Morgan's first law negates each operand and flips the operator, so `NOT(A AND B)` becomes `(NOT A) OR (NOT B)`. Keeping AND, as in option A, is the classic mistake; the other options are unrelated expressions with different truth tables.

3. **In Python, why does the guard `x != 0 and y / x > 2` avoid a divide-by-zero error when `x` is 0?**
   - A. Python automatically reorders operands to run safe checks first
   - B. Short-circuit evaluation: because the first operand is false, `and` never evaluates the division
   - C. The division is legal because dividing by zero returns false in Python
   - D. The `and` operator converts `x` to 1 before dividing

   **Answer: B.** `and` is a short-circuit operator: when the first operand (`x != 0`) is false, the result is already false, so the second operand (the division) is never evaluated. Python does not reorder operands, dividing by zero raises an error rather than returning false, and `and` does not alter `x`.

4. **Given A = true, B = false, and C = false, evaluate `A AND (B OR NOT C)`.**
   - A. false, because B is false
   - B. false, because C is false
   - C. true only if all three are true
   - D. true

   **Answer: D.** Resolve inside the parentheses first: `NOT C` is true (C is false), so `B OR NOT C` is false OR true, which is true. Then `A AND true` is true AND true, which is true. The parenthesized OR only needs one true operand, so B being false does not matter.

5. **Which expression is the correct negation of `A OR B`?**
   - A. (NOT A) OR (NOT B)
   - B. (NOT A) AND (NOT B)
   - C. A AND B
   - D. NOT(A) OR B

   **Answer: B.** De Morgan's second law: `NOT(A OR B)` equals `(NOT A) AND (NOT B)`. The negation flips OR to AND, and negates each operand. Option A keeps OR and is wrong; options C and D are different expressions entirely.

## Sources

- Python Software Foundation, *Built-in Types — Boolean Operations (`and`, `or`, `not`) and Truth Value Testing*. https://docs.python.org/3/library/stdtypes.html — authoritative language semantics for the boolean operators, short-circuiting, and operator priority.
- Oscar Levin, *Discrete Mathematics: An Open Introduction*, 4th edition, "Logical statements and connectives". https://discrete.openmathbooks.org/dmoi4/sec_logic-statements.html — truth tables for AND/OR/NOT and De Morgan's laws (CC BY-NC-SA 4.0; used as reference only, prose original).
- *The Algebra of Logic Tradition*, Stanford Encyclopedia of Philosophy. https://plato.stanford.edu/entries/algebra-logic-tradition/ — historical roots in George Boole's algebra of logic and Augustus De Morgan's contributions.

## Related Topics

- computer-science-fundamentals:foundations:operators
- computer-science-fundamentals:foundations:conditional-statements
- computer-science-fundamentals:foundations:data-types
- computer-science-fundamentals:foundations:loops
- computer-science-fundamentals:foundations:algorithms

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Research status:** source-verified; truth tables, De Morgan's laws, short-circuit behavior, and all expression evaluations verified in Python (Bash) before publishing
- **Rights status:** reference-only sources; no source prose adapted
- **Researched at:** 2026-08-19
