# Booleans

## In 30 Seconds

Python's Boolean type, `bool`, represents truth values with exactly two instances: `True` and `False`. Python can also test the truth value of other objects: empty collections and numeric zero are falsey, while most other objects are truthy. This lets a program use a value as a yes-or-no test without changing what the value itself is.

## Why This Matters

Boolean reasoning is how a Python program represents whether a condition holds. It appears in validation, searches, loop guards, and expressions that choose a fallback value. Understanding truth testing avoids treating an empty value as though it were the same thing as every other falsey value, and avoids expecting `and` or `or` to always produce `True` or `False`.

## Learning Objectives

- Define Python's two Boolean values.
- Explain how Python determines an object's truth value.
- Distinguish a Boolean value from a truthy or falsey object.
- Explain the `bool`/`int` relationship.
- Trace short-circuit Boolean operations.

## The College Version

### The Boolean type and truth testing

A Boolean value answers a truth question. Python's built-in type is `bool`, with exactly `True` and `False`. Python also performs truth-value testing on almost any object. By default an object is true unless `__bool__()` returns `False` or `__len__()` returns zero. Thus `None`, zero, and empty strings, lists, tuples, dictionaries, sets, and ranges are falsey. A nonempty string such as `'0'` and a list such as `[0]` are truthy: Python tests whether they are empty, not the apparent meaning of their contents.

Truthy and falsey describe behavior in a truth test; they do not rename an object. `bool([])` is `False`, but `[]` remains a list and is not equal to `False`. That difference matters when a program must distinguish an empty collection, an absent value, and a zero measurement. Detailed conversion practice belongs to Type Conversion; here `bool()` simply makes a truth-test result visible.

### The `bool` and `int` nuance

Python documents `bool` as a subclass of `int`. In many numeric contexts, `False` behaves as 0 and `True` as 1, so `True + True` is 2 and `isinstance(True, int)` is true. This does not make a Boolean and an integer interchangeable ideas. A Boolean records truth; an integer represents a whole number. When a calculation genuinely needs an integer, `int(flag)` states that purpose explicitly. When code communicates a condition, `True` and `False` are clearer than 1 and 0.

This lesson does not catalog equality, identity, arithmetic, or comparison operators. It only notes a practical consequence: `True == 1` can be true because of the documented numeric relationship, yet `True` remains the Boolean singleton while `1` is an integer. Preserve intent in names such as `has_access` or `is_empty`.

### Boolean operations and short circuiting

`not` performs a truth test and returns a Boolean. `and` and `or` instead return an operand. `x or y` returns `x` when it is truthy and otherwise returns `y`; `x and y` returns `x` when it is falsey and otherwise returns `y`. So `0 or 'fallback'` returns `'fallback'`, and `[1] and 'next'` returns `'next'`.

They also short circuit. `or` evaluates its second operand only when the first is falsey, and `and` evaluates its second operand only when the first is truthy. `items and items[0]` therefore avoids indexing when `items` is empty: it returns `[]` without evaluating `items[0]`. This lesson stops at expression behavior; the Conditionals lessons cover using truth results to choose branches.

## Key Vocabulary

- **Boolean:** a `bool` value, `True` or `False`.
- **Truth value:** the result of testing an object as true or false.
- **Truthy:** producing true in a truth test.
- **Falsey:** producing false in a truth test.
- **Truth-value testing:** Python's process for determining a truth value.
- **Short circuit:** skipping a second logical operand once the first determines the result.
- **Operand:** a value or expression an operator acts on.
- **Subclass:** a type inheriting behavior from another type.

## Eli-10

A Boolean is Python's answer card for a question with only two choices: `True` or `False`. Python can look at ordinary values and decide whether they count as yes or no. An empty backpack counts as no; a backpack with one pencil counts as yes. `[0]` is truthy for the same reason: the list has an item even though the item is zero.

## Eli's Analogy

For an `and` rule, failing the first checkpoint means there is no reason to walk to the second. For an `or` rule, passing the first means there is no reason to visit the second. Unlike checkpoints, however, Python's `and` and `or` usually return the actual value they inspected, not a yes-or-no badge. The analogy also does not show custom `__bool__()` and `__len__()` methods.

## Worked Example

Set `names = []`. The expression `names and names[0]` returns `[]`: an empty list is falsey, so `and` returns its first operand and does not evaluate the indexing operation. Set `names = ['Ada']` instead. The list is truthy, so Python evaluates and returns `names[0]`, or `'Ada'`. For a strict Boolean result, use `bool(names)`, which is `False` for the empty list and `True` for the one-item list.

## Common Mistakes

- Calling a truthy list `True`; it remains a list.
- Expecting `and` and `or` to return Boolean objects.
- Treating `'0'` as falsey; it is a nonempty string.
- Placing a risky operation before its guard.
- Using 1 and 0 where Boolean names communicate the purpose better.

## Compare / Contrast

`False` is a Boolean object; `[]` is a falsey list. `not x` always returns a Boolean; `x and y` and `x or y` return an operand. `bool` is an `int` subclass, but Boolean and numeric code express different intentions.

## Key Takeaway

Python has `True` and `False`, but it can truth-test nearly any object. Know which values are falsey, remember that `and` and `or` return operands and short circuit, and use the `bool`/`int` relationship deliberately.

## Practice Question Bank

1. Which two instances belong to Python's `bool` type? **Answer: `True` and `False`.**
2. What is `bool([0])`? **Answer: `True`.**
3. Given `items = []`, what does `items and items[0]` evaluate to? **Answer: `[]`.**
4. Which statement describes `bool`? **Answer: it is a subclass of `int`.**
5. What does `'ready' or 'fallback'` return? **Answer: `'ready'`.**

## Sources

- Python Software Foundation, [Built-in Types](https://docs.python.org/3/library/stdtypes.html)
- Python Software Foundation, [The Python Language Reference: Expressions](https://docs.python.org/3/reference/expressions.html)

## Related Topics

Related lessons include Numbers, Type Conversion, Operators, Conditionals, Lists, and Classes and Objects; the lesson record links the complete Python-programming sibling list.

## Editorial Metadata

Source-verified original synthesis. Sources are reference-only official documentation; examples were executed with Python 3 on 2026-08-19. Scope excludes operator catalogs, branch syntax, input, and comprehensive conversion instruction.
