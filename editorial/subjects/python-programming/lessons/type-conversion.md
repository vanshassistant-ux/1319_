# Type Conversion

## In 30 Seconds

Type conversion is making a value in one form into a value in another form. In Python, constructors such as `int()`, `float()`, `str()`, and `bool()` perform explicit conversions. The result depends on the target type and input: `int('42')` produces 42, while `int('3.5')` raises `ValueError` because that text is not an integer literal. Convert deliberately and check the result.

## Why This Matters

Programs often receive text but need a number, or need a number rendered as text. Explicit conversion makes that boundary visible, helping you diagnose bad data instead of using the wrong type. The same habit later supports work with files and data processing: establish the expected format and type before relying on a value.

## Learning Objectives

- Define explicit type conversion and name four common constructors.
- Predict results of straightforward `int()`, `float()`, `str()`, and `bool()` calls.
- Distinguish a successful conversion from a `ValueError`.
- Apply a safe conversion sequence to text data.
- Explain why `bool('False')` is `True`.

## The College Version

### A constructor call asks for a target type

Every Python value has a type. A conversion call asks a built-in type to construct a value from the object supplied to it. Common introductory conversions are `int()`, `float()`, `str()`, and `bool()`. `int('42')` returns integer 42, `float('3.5')` returns float 3.5, and `str(19)` returns text `'19'`. This is explicit conversion: the programmer writes the operation rather than expecting Python to silently reinterpret a value. The target type matters: `str(7.0)` returns `'7.0'`, not integer 7. A conversion is a request for documented construction rules, not generic cleanup. Arithmetic, string sequence operations, and full truth-testing semantics belong to adjacent lessons.

### Text must match the requested numeric form

Without an explicit base argument, `int()` needs text that is a valid integer literal, with optional surrounding whitespace and sign. Thus `int('  -12  ')` produces -12. `int('6.25')` raises `ValueError`; it does not silently discard the fraction. `float()` accepts suitable decimal text such as `float('6.25')`, but `float('not-a-number')` raises `ValueError`. These are predictable data-quality signals. If an input is supposed to be a whole-number count, reject decimal-looking input; do not casually write `int(float(text))`, because that deliberately changes the meaning by truncating a decimal value toward zero.

### String and Boolean conversions have their own rules

`str()` makes a string representation. It is useful for a message or log entry, but `str(19)` is text, not a number with hidden arithmetic behavior. `bool()` constructs a Boolean under Python's truth-value rules. A nonempty string is truthy regardless of its letters: `bool('')` is `False`, while `bool('False')` is `True` because it has five characters. Therefore `bool()` is not a parser for words like `true`, `false`, `yes`, and `no`; code needing that behavior must compare normalized text against an allowed vocabulary. `bool` is a subclass of `int`, but Boolean values should communicate conditions rather than serve as obscure numeric labels.

### Make conversion boundaries easy to inspect

Keep raw input, convert it once, then use the converted value. With `age_text = '18'` and `age = int(age_text)`, the code makes clear that later work expects an integer. `type(age).__name__` can confirm the result during development. If the text is `'18.0'`, `int()` raises `ValueError` at the boundary rather than causing a puzzling later failure. It also lets tests state the intended input contract plainly. In a full program, use narrowly scoped exception handling appropriate to the requirement; exceptions are a separate lesson. Conversion creates a new value. It does not mutate the source string in place.

## Key Vocabulary

- **type conversion:** Explicit construction of a value of one Python type from an object of another type.
- **constructor:** A callable type, such as `int` or `str`, that creates a value under that type's rules.
- **integer:** A whole-number `int` value.
- **floating-point number:** A `float` value, commonly used for fractional quantities.
- **string:** An ordered Unicode-character sequence represented by `str`.
- **Boolean:** A `bool` value, either `True` or `False`.
- **ValueError:** An exception for an argument of acceptable type but unsuitable value.

## Eli-10

Think of a Python value as something written on a card. A card with `42` written as text is not automatically the same as a card holding number 42. `int('42')` asks Python to read the text card as a whole number; `str(42)` asks it to make a text card. Python follows rules. Asking for a whole number from `'3.5'` makes it refuse instead of guessing.

## Eli's Analogy

A conversion is like choosing a labeled measuring cup. An `int` cup accepts whole units, a `float` cup represents a decimal amount, and a `str` cup writes a label. A label saying `False` still has ink, so it is not empty—like `bool('False')`, which is `True` because the string is nonempty.

The analogy has limits: types are not physical containers, and each constructor has detailed documented rules. Not every object can be converted to every type.

## Worked Example

A form supplies `count_text = '  -12  '` and `price_text = '6.25'`. `count = int(count_text)` returns -12, an integer. `price = float(price_text)` returns 6.25, a float. `label = 'Count: ' + str(count)` returns `'Count: -12'`. In contrast, `int(price_text)` raises `ValueError` because the text has a decimal point. If the field must be a whole-number count, reject it; if decimals are valid, keep the float. Finally, `bool('False')` is `True` because the string is nonempty. This trace was executed with `python3`.

## Common Mistakes

- **Expecting `int('3.5')` to return 3.** It raises `ValueError`; choose whether decimal input is valid instead.
- **Using `bool('False')` as a parser.** Any nonempty string converts to `True`.
- **Assuming `str(19)` is ready for arithmetic.** It is text; convert appropriately before numeric work.
- **Guessing after a conversion error.** Treat `ValueError` as a failed input-format contract.

## Compare / Contrast

- `int('42')` returns integer 42; `float('42')` returns float 42.0.
- `bool('')` is `False`; `bool('False')` is `True`.
- A successful conversion returns the requested type; `ValueError` indicates unsuitable input.

## Key Takeaway

Use `int()`, `float()`, `str()`, and `bool()` as explicit, rule-governed requests for a target type. Check the format and result; a clear `ValueError` is safer than a silent guess.

## Practice Question Bank

1. What does `int('42')` return? **The integer 42.**
2. Why does `int('6.25')` raise `ValueError`? **The text is not an integer literal.**
3. Which conversion supplies text from 19 for `'Score: 19'`? **`str(19)`.**
4. What is `bool('False')`? **True, because the string is nonempty.**
5. What should a whole-number field containing `'12.5'` do? **Report or request a whole-number value.**

## Sources

- Python Software Foundation, [Built-in Functions](https://docs.python.org/3/library/functions.html)
- Python Software Foundation, [Built-in Types](https://docs.python.org/3/library/stdtypes.html)

## Related Topics

- Numbers
- Strings
- Booleans
- Input and Output
- Exceptions

## Editorial Metadata

Original EliExplains synthesis. Source-verified 2026-08-19; official documentation used reference-only, and all examples were executed with Python 3.
