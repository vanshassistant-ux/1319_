# Numbers

## In 30 Seconds

Python uses numeric values for counting, measurement, and calculations. The three built-in numeric types to recognize first are `int` for whole numbers, `float` for approximate real-number values, and `complex` for values with real and imaginary parts. Integers are exact; floats usually are not exact decimal values because computers store them as binary fractions. Read a result in light of its type and its required precision.

## Why This Matters

Numeric choices shape the reliability of programs in science, engineering, data work, and ordinary application code. An exact count can safely be an integer, while a float can be useful for a measurement even though its printed digits may hide a tiny approximation. Learning the distinction helps students debug surprising totals, choose sensible tests, and explain why a calculation is close without claiming it is exact.

## Learning Objectives

- Define `int`, `float`, and `complex` as Python numeric types.
- Distinguish exact integer arithmetic from approximate binary floating-point arithmetic.
- Explain why a familiar decimal calculation can display an unexpected float result.
- Apply floor division and remainder reasoning to a small integer calculation.
- Interpret a rounding result without assuming it proves the stored float was exact.

## The College Version

### Three numeric representations

Python's built-in numeric types include `int`, `float`, and `complex`. An `int` represents a whole number, such as `-12`, `0`, or `350`. Python documentation describes integers as having unlimited precision; in practice, the computer's available memory sets the limit. That makes integers a good model for exact counts and discrete quantities. Arithmetic on `int` values remains exact when the mathematical result is an integer: `12500000000000000000 + 1` has precisely the expected value. This lesson concerns a value and its numeric representation, not the separate topic of converting text or another type into a number.

A `float` represents a floating-point number, such as `3.5` or `-0.25`. It is designed for approximate real-valued quantities, including measurements and many scientific computations. A `float` is not simply an `int` with a decimal point: it has a finite binary representation. That representation trades perfect coverage of every real number for efficient calculation. Finally, a `complex` value combines a real part and an imaginary part. Python writes the imaginary component with `j`, so `1 + 2j` is a complex literal. Complex values are useful in domains such as signal processing and engineering, but their essential point here is that Python treats them as a distinct numeric type, not as a string containing a symbol.

### Arithmetic results have type-specific meaning

The familiar arithmetic symbols can produce different kinds of numeric results depending on their operands. With two positive integers, `7 // 3` gives `2`: floor division takes the mathematical floor of the quotient. The remainder expression `7 % 3` gives `1`. Python maintains the relationship `a == (a // b) * b + (a % b)`. With negative values, floor means “toward negative infinity,” not merely “remove the fractional part”: `-7 // 3` is `-3` and `-7 % 3` is `2`. Checking the identity gives `-7 == (-3 * 3) + 2`. This is useful when grouping items into equal-size batches or locating a position in a repeating cycle.

Complex arithmetic follows ordinary algebraic rules for real and imaginary components. For example, `(1 + 2j) * (3 - 4j)` evaluates to `11 + 2j`. The product is not a formatting trick; it is a complex numeric value. It is still wise to separate this idea from operator-precedence instruction. When a calculation is hard to read, a programmer can use parentheses to make the intended grouping clear, but the comprehensive rules for operators belong in the operators lesson. The immediate habit is narrower: identify the numeric type and inspect the result rather than assuming every expression behaves like arithmetic on paper.

### Precision, display, and rounding

Most decimal fractions cannot be represented exactly as binary fractions. The decimal `0.1`, for example, repeats forever in binary, so a `float` stores a nearby binary fraction instead. Python normally displays a short, readable representation, but the approximation can become visible: `0.1 + 0.1 + 0.1` evaluates to `0.30000000000000004`, and that float is not equal to `0.3`. This is not Python randomly making an error; it is the predictable result of finite binary representation and rounding during computation. A useful response is to decide whether the task needs an exact representation, a tolerance-based comparison, or a documented rounding rule. Those design choices depend on the application and deserve explicit requirements.

The built-in `round()` function also needs careful interpretation. When two candidates are equally near, Python rounds to the nearest even multiple. Thus `round(2.5)` is `2` and `round(3.5)` is `4`. For floats, the representation arrives before the rounding rule. In Python, `round(2.675, 2)` produces `2.67`, not `2.68`, because the stored binary float is slightly below the decimal value people often imagine. Formatting a float to fewer displayed digits can make output easier to read, but it does not retroactively make the earlier stored computation exact. Treat a rounded display as communication about precision, not evidence that every intermediate value was exact.

## Key Vocabulary

- **int:** Python's numeric type for whole-number values, represented with arbitrary precision subject to available memory.
- **float:** A Python numeric value stored as a finite binary floating-point approximation.
- **complex:** A Python numeric value with real and imaginary components, written with `j` for the imaginary component in a literal.
- **floor division:** Division using `//` that returns the mathematical floor of the quotient for numeric operands.
- **remainder:** The result of `%`, paired with floor division so a equals quotient times divisor plus remainder.
- **representation error:** The difference between a desired mathematical value and the finite value stored by a computer format.
- **rounding tie:** A value equally near two possible rounded results; Python's `round()` chooses the even one.

## Eli-10

Think of `int`, `float`, and `complex` as three different containers for number ideas. An `int` container holds whole items exactly: 12 apples really is twelve. A `float` container is more like a measuring cup marked in binary-sized lines. It can get extremely close to a decimal amount, but some decimal amounts fall between its lines. A `complex` container carries two coordinates together, one ordinary and one imaginary.

That is why `0.1 + 0.1 + 0.1` can look a little strange. The computer did not forget how to add; it added three nearby binary measurements. Rounding is a separate instruction for choosing what to show or use at a chosen number of digits. Before trusting a numeric output, ask: is this an exact count, an approximation, or a value made from two parts?

## Eli's Analogy

An `int` is a box of whole tiles; a `float` is a ruler with very fine but finite tick marks; a complex number is a point described by two directions on a map. The analogy breaks down because a real float is stored as binary data, not a physical ruler, and a complex number has formal algebraic rules beyond a map coordinate.

## Worked Example

Suppose a program packs 7 sensors into trays that hold 3 sensors each. Running `7 // 3` produces 2 full trays and `7 % 3` produces 1 sensor left over. The check `7 == (2 * 3) + 1` confirms the two results fit together. Now consider a calibration adjustment: `0.1 + 0.1 + 0.1` prints `0.30000000000000004` in Python 3, so an exact equality test against `0.3` is false. That is evidence of float representation, not a reason to change the count calculation. The program should state an appropriate precision policy for the measurement instead of treating the display as an exact decimal fact.

## Common Mistakes

- **Assuming every decimal-looking value is exact.** Treat a `float` as a finite binary approximation unless the problem has established an exact representation.
- **Expecting `//` to truncate toward zero for negative operands.** Remember that `//` takes a floor; verify a negative example such as `-7 // 3 == -3`.
- **Calling `round(2.675, 2)` a Python bug.** Account for the float's stored binary approximation before applying the rounding rule.
- **Treating `1+2j` as text because it contains `j`.** It is a complex numeric literal; inspect its real and imaginary components as numeric parts.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| `int` | `float` | An `int` models an exact whole number; a `float` is a finite binary approximation that can represent fractional quantities. |
| Floor division (`//`) | Remainder (`%`) | Floor division gives the quotient rounded down, while remainder gives the amount left so the division identity holds. |
| Rounding a display | Exact storage | Rounding chooses a reported value at a chosen precision; it does not change the fact that a prior float may have been approximate. |

## Key Takeaway

Python `int` values are exact whole numbers, while `float` values are finite binary approximations and `complex` values carry real and imaginary components. When a numeric result surprises you, inspect the type and representation before assuming the arithmetic rule is wrong.

## Practice Question Bank

1. Which built-in Python numeric type represents a value with real and imaginary components? **Answer: A (`complex`).**
2. What are the values of `-7 // 3` and `-7 % 3` in Python? **Answer: B (`-3` and `2`).**
3. Why can `0.1 + 0.1 + 0.1` differ from `0.3` when evaluated as Python floats? **Answer: C (many decimal fractions are not finite binary fractions).**
4. What does Python's tie rule make `round(2.5)` return? **Answer: D (`2`, the nearest-even result).**
5. A program needs an exact count of `12500000000000000001` items. Which statement is best? **Answer: A (an `int` can represent this whole-number count exactly, subject to available memory).**

## Sources

- Python Software Foundation, [Built-in Types — Python 3 documentation](https://docs.python.org/3/library/stdtypes.html)
- Python Software Foundation, [Floating-Point Arithmetic: Issues and Limitations](https://docs.python.org/3/tutorial/floatingpoint.html)
- Python Software Foundation, [Built-in Functions: `round`](https://docs.python.org/3/library/functions.html#round)

## Related Topics

- Operators
- Type Conversion
- Introductory Data Analysis

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only official documentation; no source prose adapted. Researched 2026-08-19.
