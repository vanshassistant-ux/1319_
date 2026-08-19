# Operators

## In 30 Seconds

An operator is a symbol that performs an operation on one or more operands and returns a result. Arithmetic operators (+ - * / % //) compute numbers, comparison operators (== != < > <= >=) return booleans, assignment (= and += and friends) stores values, and logical operators (and, or, not) combine truth values. When several appear together, precedence and associativity decide the order, which is why 2 + 3 * 4 is 14, not 20.

## Why This Matters

Operators are the verbs of every programming language: almost any line of code that computes, compares, or updates a value uses one. Reading code correctly means predicting what an expression evaluates to, and that depends on precedence rules you cannot see on the surface. A single misread operator, or forgotten parentheses, changes a result silently rather than raising an error, so precedence bugs are among the most common and hardest to spot. Mastering operators early makes conditionals, loops, and formulas legible, and it transfers across languages, since the same categories and nearly the same precedence appear in Python, Java, C, JavaScript, and beyond.

## Learning Objectives

- Define operator and operand and identify each in an expression.
- Distinguish the main operator categories: arithmetic, comparison, assignment, and logical.
- Explain how precedence and associativity determine evaluation order.
- Apply precedence to evaluate an expression such as 2 + 3 * 4 correctly.
- Distinguish true division (/), floor division (//), and modulo (%), and the = versus == distinction.

## The College Version

### Operators, operands, and expressions

An operator is a symbol that tells the language to perform a specific operation, and the values it works on are called operands. In the expression 3 + 4, the plus sign is the operator and 3 and 4 are its operands; the whole thing is an expression that evaluates to the single value 7. Most operators you meet are binary, taking two operands (a + b, a < b, a = b). A few are unary, taking one, such as the negation in -x or logical not in not flag. Operators are how programs actually compute: an expression is built by combining values with operators, and the language reduces that expression to one result. Because operators return values, they compose. The result of one operation becomes an operand for the next, so a * b + c first multiplies, then adds the product to c. Keeping the operator/operand vocabulary straight is what lets you talk precisely about that composition instead of guessing at it.

### The four categories you use most

Arithmetic operators compute numbers: addition +, subtraction -, multiplication *, division /, exponentiation **, plus two that surprise newcomers. In Python, / always returns a float (17 / 3 is 5.666...), while // is floor division that discards the fractional part (17 // 3 is 5), and % is the modulo operator that returns the remainder (17 % 3 is 2). The pair // and % are the natural way to split a number into a quotient and a leftover, which is why they show up in everything from paging through results to converting seconds into minutes and seconds. Comparison (relational) operators ask a yes/no question and return a boolean: == tests equality, != inequality, and < <= > >= order. Note the doubled equals sign: == compares, whereas a single = assigns. Assignment operators bind a value to a variable. The plain = stores a value; the augmented forms += -= *= /= //= combine an operation with the store, so x += 3 means "x becomes x plus 3". Logical operators, and or not, combine boolean values; this lesson only names them, because their truth tables, short-circuit behavior, and De Morgan's laws belong to the boolean-logic topic.

### Precedence and associativity: the order of evaluation

When an expression mixes operators, the language does not simply read left to right. Each operator has a precedence, a rank that decides which operation binds its operands first, mirroring the arithmetic convention that multiplication happens before addition. That is why 2 + 3 * 4 evaluates to 14 and not 20: the * binds 3 and 4 into 12 first, then the + adds 2. If you actually want the addition first, parentheses override precedence, and (2 + 3) * 4 gives 20. From highest to lowest, the usual order runs exponentiation, then unary +/-, then * / // %, then + -, then the comparisons, and finally not, and, or; parentheses sit above everything and are the clearest way to state intent. When two operators share the same precedence, associativity breaks the tie. Almost all binary operators are left-associative, so 10 - 3 - 2 is (10 - 3) - 2 = 5. Exponentiation is the notable exception: it is right-associative, so 2 ** 3 ** 2 means 2 ** (3 ** 2) = 2 ** 9 = 512, not (2 ** 3) ** 2 = 64. Comparisons in Python have a further twist called chaining: x < y <= z is read as x < y and y <= z, with y evaluated once. These rules are largely shared across languages, but the safe habit for anything non-obvious is to add parentheses rather than trust readers to recall the table.

## Key Vocabulary

- **Operator** — A symbol that directs the language to perform a specific operation on one or more values and produce a result.
- **Operand** — A value that an operator acts on; in 3 + 4 the operands are 3 and 4.
- **Expression** — A combination of values and operators that the language evaluates down to a single result value.
- **Arithmetic operator** — An operator that performs numeric computation, such as + - * / % // or ** for exponentiation.
- **Comparison operator** — A relational operator (== != < > <= >=) that tests two values and returns a boolean True or False.
- **Assignment operator** — An operator that stores a value in a variable; = is plain assignment and += -= *= are augmented forms that combine an operation with the store.
- **Floor division** — Division that discards the fractional part and returns the largest whole number not greater than the quotient, written // in Python (17 // 3 is 5).
- **Modulo** — The operator % that returns the remainder left after division; 17 % 3 is 2.
- **Precedence** — The rank that decides which operator binds its operands first when several appear in one expression, so * acts before + in 2 + 3 * 4.
- **Associativity** — The rule that decides evaluation order among operators of equal precedence; most are left-to-right, but ** is right-to-left.

## Eli-10

Operators are the action symbols in a math or code sentence. Some do arithmetic (+, -, *, /), some ask a true-or-false question and answer with True or False (==, <, >), and one just puts a value into a box for later (=, and the shortcut += that adds to what is already in the box). When a sentence has several action symbols, the computer does not go strictly left to right. It follows a priority list, the same one you learned for math: do the multiplying before the adding. So 2 + 3 * 4 becomes 2 + 12, which is 14, not 20. If you want a different order, you put parentheses around the part you want done first.

## Eli's Analogy

Precedence is like the order of chores on a recipe card: even though the steps are written in a row, some must happen before others. "Chop the onions and fry them" does not mean chop-and-fry in a blur; frying waits for chopping. Multiplication is the chopping that has to happen before the addition can be fried.

**Where the analogy breaks down:** The recipe analogy captures ordering but not the tie-breaker rules. Real recipes rarely have two equally urgent steps, whereas operators of equal precedence need associativity to decide direction, and exponentiation even runs right to left, which no ordinary recipe does. And unlike chores, operators produce values that feed the next operator immediately.

## Worked Example

Evaluate 2 + 3 * 4 - 10 // 3 step by step. First scan for the highest-precedence operators: * and // outrank + and -, and they share a level, so they resolve left to right. Compute 3 * 4 = 12, then 10 // 3 = 3 (floor division discards the 0.33). The expression is now 2 + 12 - 3. Addition and subtraction share the next level and are left-associative, so evaluate left to right: 2 + 12 = 14, then 14 - 3 = 11. The result is 11. Had the language ignored precedence and gone purely left to right, it would have computed 2 + 3 = 5, times 4 = 20, minus 10 = 10, floor-divided by 3 = 3 instead, a completely different answer. Verified in Python: 2 + 3 * 4 - 10 // 3 returns 11.

## Common Mistakes

- **Using = when you mean == inside a comparison, e.g. writing if x = 5.** — = assigns a value to a variable; == tests equality and returns a boolean. A comparison always needs the doubled equals sign.
- **Assuming expressions evaluate strictly left to right, so 2 + 3 * 4 must be 20.** — Higher-precedence operators bind first. * acts before +, so 2 + 3 * 4 is 2 + 12 = 14. Add parentheses when you want a different order.
- **Expecting / to give a whole number, so treating 7 / 2 as 3.** — In Python / always returns a float (7 / 2 is 3.5). Use // for floor division (7 // 2 is 3) when you want an integer quotient.
- **Reading 2 ** 3 ** 2 as (2 ** 3) ** 2 = 64.** — Exponentiation is right-associative, so it is 2 ** (3 ** 2) = 2 ** 9 = 512. Only ** breaks the usual left-to-right rule.
- **Confusing floor division // with modulo %.** — // gives the quotient (how many whole times it divides: 17 // 3 is 5); % gives the remainder left over (17 % 3 is 2).

## Compare / Contrast

- **True division (/) vs Floor division (//):** / returns the exact quotient as a float (7 / 2 is 3.5); // discards the fraction and returns the floored whole number (7 // 2 is 3).
- **Assignment (=) vs Equality comparison (==):** = stores a value in a variable and yields no truth value; == compares two values and returns a boolean True or False.
- **Precedence vs Associativity:** Precedence ranks operators of different kinds (do * before +); associativity orders operators of the same rank (10 - 3 - 2 goes left to right, but ** goes right to left).

## Key Takeaway

Operators act on operands to produce results, and when several share an expression, precedence and then associativity, not left-to-right reading, decide the order; that is why 2 + 3 * 4 is 14, and parentheses are the reliable way to say exactly what you mean.

## Practice Question Bank

1. **In the expression `3 + 4`, which statement correctly identifies the operator and operands?** (recall)
   - A. `+` is the operator; `3` and `4` are the operands. *(correct)*
   - B. `3` and `4` are the operators; `+` is the operand.
   - C. `+`, `3`, and `4` are all operands; there is no operator.
   - D. `3 + 4` is the operator and `7` is its operand.

   An operator is the symbol that performs the operation, and the operands are the values it acts on. In 3 + 4 the + is the operator and 3 and 4 are the operands; 7 is the result, not an operand.

2. **Following standard operator precedence, what does `2 + 3 * 4` evaluate to?** (application)
   - A. 20
   - B. 24
   - C. 14 *(correct)*
   - D. 11

   Multiplication has higher precedence than addition, so 3 * 4 is computed first to get 12, then 2 + 12 gives 14. The value 20 comes from wrongly adding first.

3. **Which group of operators always produces a boolean (`True`/`False`) result?** (understanding)
   - A. Arithmetic operators such as `+`, `*`, and `//`
   - B. Comparison operators such as `==`, `<`, and `>=` *(correct)*
   - C. The plain assignment operator `=`
   - D. Augmented assignment operators such as `+=`

   Comparison operators test a relationship between two values and return True or False. Arithmetic and augmented-assignment operators produce numbers, and plain assignment stores a value without yielding a boolean.

4. **Because `**` is right-associative, what does `2 ** 3 ** 2` evaluate to?** (analysis)
   - A. 64
   - B. 12
   - C. 128
   - D. 512 *(correct)*

   Right-associativity means the rightmost ** binds first: 3 ** 2 is 9, then 2 ** 9 is 512. The value 64 comes from evaluating left to right as (2 ** 3) ** 2, which is wrong for exponentiation.

5. **If the variable `x` currently holds `5`, what is the value of `x` after running `x += 3`?** (application)
   - A. 8 *(correct)*
   - B. 53
   - C. 15
   - D. 2

   The augmented assignment x += 3 means x = x + 3, so x becomes 5 + 3 = 8. The distractors correspond to concatenation, multiplication, and subtraction, none of which is what += does.

## Sources

- The Python Language Reference — 6. Expressions (Operator precedence): https://docs.python.org/3/reference/expressions.html
- The Python Language Reference — 2.7 Operators and delimiters: https://docs.python.org/3/reference/lexical_analysis.html
- The Python Tutorial — 3. An Informal Introduction (Numbers): https://docs.python.org/3/tutorial/introduction.html

## Related Topics

- computer-science-fundamentals:foundations:boolean-logic
- computer-science-fundamentals:foundations:data-types
- computer-science-fundamentals:foundations:variables
- computer-science-fundamentals:foundations:conditional-statements
- computer-science-fundamentals:foundations:pseudocode

## Editorial Metadata

- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Rights status: reference-only sources (Python docs); no source prose adapted, only short verified numeric examples
- Researched at: 2026-08-19
- Sources: 3 (all Tier A official Python documentation)
