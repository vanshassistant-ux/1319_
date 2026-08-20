# Operators

## In 30 Seconds

An operator is notation that tells Python to perform an operation on one or more values. Arithmetic operators calculate, comparison operators produce a Boolean result, logical operators combine or reverse Boolean conditions, and augmented-assignment operators update a bound name. When several operators appear in one expression, Python’s precedence and associativity rules determine how it groups them; parentheses make the intended grouping explicit.

## Why This Matters

Operators turn values into calculations, tests, and updates, so they appear in nearly every Python program. Reading their grouping correctly prevents quiet errors such as calculating a discount in the wrong order or assuming exponentiation groups left to right. A precise grasp of comparisons and logical operators also makes later lessons on conditionals, loops, and filtering easier to reason about.

## Learning Objectives

- Define operator, operand, precedence, and associativity.
- Distinguish arithmetic, comparison, logical, and augmented-assignment operators.
- Explain how parentheses alter expression grouping.
- Apply Python’s precedence and right-associative exponentiation rule to evaluate an expression.
- Check whether a comparison-and-logic expression has the intended meaning.

## The College Version

### Operators form expressions

An expression combines values, names, calls, and operators to compute a value. An operator’s operands are the values or expressions it acts on. For familiar numeric work, `+`, `-`, `*`, `/`, `//`, `%`, and `**` express addition, subtraction, multiplication, true division, floor division, remainder, and exponentiation. In Python, `/` returns a float for numeric operands, while `//` discards the fractional part for the usual positive-integer examples. Thus `17 / 5` is `3.4`, `17 // 5` is `3`, and `17 % 5` is `2`. The relationship `17 == 5 * (17 // 5) + (17 % 5)` is a useful check for this example. This lesson uses arithmetic to illustrate operators; numeric types, representation, and conversion belong in the Numbers and Type Conversion lessons.

Comparison operators ask how two values relate: `==`, `!=`, `<`, `<=`, `>`, and `>=`. A comparison evaluates to `True` or `False`. Python also permits chains such as `0 < score <= 100`; the language reference specifies that comparisons chain from left to right. Chaining is not the same as comparing a Boolean to a number: it is a compact way to express a range test. Equality `==` asks whether values compare equal. Identity `is` is a different operator with a different purpose and should not be substituted for equality in ordinary value comparisons.

### Logical operators and short, readable conditions

The logical operators are `not`, `and`, and `or`. At the precedence level relevant to ordinary Boolean expressions, `not` binds more tightly than `and`, and `and` binds more tightly than `or`. So `not ready or paid and approved` groups as `(not ready) or (paid and approved)`, not as `not (ready or paid) and approved`. Parentheses can state the desired grouping even when a reader knows the table.

A comparison produces a Boolean result, while logical operators are typically used to combine conditions. For example, `(age >= 18) and (has_ticket)` describes two requirements. Keep the conditions visible instead of relying on a reader to reconstruct a dense expression. Truth testing and the fact that `and` and `or` can return an operand rather than a newly created Boolean are useful details, but they belong to the Booleans lesson rather than this introductory operator lesson. The practical habit here is to make a condition’s grouping unambiguous before using it in a later conditional.

### Precedence, associativity, and assignment updates

Precedence is the priority used to group operators when parentheses do not decide the grouping. Multiplication, matrix multiplication, division, floor division, and remainder have higher precedence than addition and subtraction. Consequently, `2 + 3 * 4` evaluates as `2 + (3 * 4)`, producing `14`; `(2 + 3) * 4` produces `20`. Parentheses are evaluated as a grouped expression and are the clearest way to document an exception to the normal order.

When operators share a precedence level, associativity supplies a grouping direction. Most Python operators group left to right, but exponentiation is a notable exception: `**` groups right to left. Therefore `2 ** 3 ** 2` means `2 ** (3 ** 2)`, which is `512`; `(2 ** 3) ** 2` is `64`. Treat that exception as a reason to parenthesize an exponent expression whose intent matters.

Assignment statements bind or rebind names. Augmented assignment combines an operation with assignment: after `total = 7`, `total += 4` updates the name so that `total` is `11`. Similar forms include `-=`, `*=`, `/=`, `//=`, `%=`, and `**=`. Augmented assignment is concise, but it does not erase the need to understand the operation on the right kind of value. It can also be clearer than repeating a long name on both sides of a simple update. Names and binding have their own lesson; here, the central point is that an augmented operator expresses an update using the corresponding operation.

## Key Vocabulary

- **operator:** A symbol or keyword that directs Python to perform an operation on one or more operands.
- **operand:** A value or expression to which an operator is applied.
- **expression:** Code that Python evaluates to produce a value.
- **precedence:** The ranking that determines which operator groups first when parentheses do not specify grouping.
- **associativity:** The grouping direction used when operators of the same precedence appear together.
- **comparison operator:** An operator such as `==` or `<` that tests a relationship and produces a Boolean result.
- **logical operator:** One of `not`, `and`, or `or`, used to reverse or combine conditions.
- **augmented assignment:** An update notation such as `+=` that combines an operation with assignment.

## Eli-10

Operators are the action signs in Python. A number by itself is just a value, but `+` tells Python to add two values, `<` tells it to compare them, and `and` tells it to combine two yes-or-no checks. The order of signs matters. Python usually does multiplication before addition, so `2 + 3 * 4` gives 14. Parentheses are your way of saying, “Do this part first.” One special sign, `**`, works from the right: `2 ** 3 ** 2` first calculates `3 ** 2`.

`+=` is a compact update sign. If a game score starts at 7, `score += 4` means add 4 and keep the new score under the name `score`.

## Eli's Analogy

Think of an expression as a recipe line. Operators are action words such as mix, compare, and repeat. Precedence is the recipe’s built-in order, while parentheses are a note that says to prepare one mixture before combining it with the rest.

The analogy has limits: Python does not literally perform kitchen actions, and its precedence rules are exact language rules rather than flexible cooking advice. A recipe analogy also does not explain every operator, so use the documentation when a particular operator matters.

## Worked Example

Suppose a program calculates a shipping charge. Start with `items = 3` and `unit_price = 12`. The subtotal expression `items * unit_price` evaluates to 36. A 5-dollar fee makes `total = items * unit_price + 5`, which evaluates multiplication before addition and produces 41. If the fee is waived only when both conditions hold, write `member and subtotal >= 30`; with `member = True`, the comparison is true and the whole expression is `True`. Finally, after a 4-dollar surcharge, `total += 4` changes `total` from 41 to 45. Each result was executed in Python 3.

## Common Mistakes

- **Reading `2 + 3 * 4` from left to right as 20.** Apply precedence: multiplication happens before addition, so the result is 14; use parentheses for 20.
- **Assuming `2 ** 3 ** 2` means `(2 ** 3) ** 2`.** Exponentiation groups right to left; parenthesize either version when teaching or maintaining code.
- **Using `is` where a value comparison needs `==`.** Use `==` to compare ordinary values; `is` tests object identity and has a separate purpose.
- **Writing a mixed `and`/`or` condition without checking grouping.** Know that `and` binds more tightly than `or`, and add parentheses to express the intended rule.

## Compare / Contrast

- **`/` vs. `//`:** For numeric operands, `/` performs true division and returns a float; `//` performs floor division.
- **`==` vs. `is`:** `==` compares values for equality, while `is` tests whether two references designate the same object.
- **`=` vs. `+=`:** `=` assigns a value; `+=` applies addition and assignment as an update.

## Key Takeaway

Operators make Python expressions calculate, compare, combine conditions, and update values. Use parentheses to communicate grouping, especially around mixed operators and exponentiation, whose `**` operator groups from the right.

## Practice Question Bank

1. **Which term names the values an operator acts on?**
   - A. Operands
   - B. Precedence levels
   - C. Suites
   - D. Modules
   - **Answer:** A. Operands are the values or expressions on which an operator operates.
2. **What is the value of `2 + 3 * 4` in Python?**
   - A. 20
   - B. 14
   - C. 24
   - D. 9
   - **Answer:** B. Multiplication occurs before addition.
3. **Which expression explicitly produces 64 by grouping exponentiation from the left?**
   - A. `2 ** 3 ** 2`
   - B. `2 ** (3 ** 2)`
   - C. `(2 ** 3) ** 2`
   - D. `2 * 3 ** 2`
   - **Answer:** C.
4. **After `total = 7`, what does `total += 4` leave in `total`?**
   - A. 3
   - B. 4
   - C. 7
   - D. 11
   - **Answer:** D.
5. **Without parentheses, how does Python group `ready or paid and approved`?**
   - A. `(ready or paid) and approved`
   - B. `ready or (paid and approved)`
   - C. `(ready or paid) or approved`
   - D. `ready and (paid or approved)`
   - **Answer:** B.

## Sources

- [Python Language Reference: Expressions](https://docs.python.org/3/reference/expressions.html)
- [Python Language Reference: Simple statements](https://docs.python.org/3/reference/simple_stmts.html)
- [Python Tutorial: Numbers](https://docs.python.org/3/tutorial/introduction.html)

## Related Topics

- Numbers
- Booleans
- Variables
- Conditionals
- if, elif, and else

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only official documentation; no source prose adapted. Researched 2026-08-19. All displayed computational examples were executed with Python 3.
