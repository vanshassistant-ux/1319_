# Dictionaries

## In 30 Seconds

A Python dictionary is a mutable mapping from unique, hashable keys to values. Write a literal with braces and key-value pairs, such as `{"apples": 3}`. Use a key in square brackets to retrieve or set its value. An assignment with an existing key replaces the value; one with a new key adds a pair. Dictionaries preserve insertion order, but lookup is based on a meaningful key rather than a position.

## Why This Matters

Programs often connect a label to information: a course code to a title, a username to preferences, or a product code to available stock. Dictionaries make those links explicit. They also prepare you to choose stable keys, handle missing information deliberately, and tell an update from a new record. Those habits transfer to JSON-like data, configuration, and data analysis.

## Learning Objectives

- Define a dictionary as a mutable mapping of unique keys to values.
- Create and update a dictionary with literal and subscription syntax.
- Distinguish direct lookup from `get()` when a key may be absent.
- Explain why dictionary keys must be hashable and unique.
- Apply insertion-order and update behavior to trace a small program.

## The College Version

### Mapping names to information

A Python dictionary, often called a `dict`, stores associations rather than a numbered sequence. Each association has a key and a value. In `{"course": "CS101", "credits": 3}`, `"course"` is a key whose value is `"CS101"`; `"credits"` maps to `3`. Braces make a dictionary literal, and `{}` makes an empty dictionary. The Python documentation describes a dictionary as a mutable mapping: it maps keys to arbitrary objects. Values can therefore have different types, though a focused program often has a predictable shape.

The constraint is on keys. A key must be hashable, which excludes mutable containers such as lists and dictionaries. Strings, integers, and tuples made entirely from suitable contents are common keys. A dictionary has one current value for each key. A repeated key in a literal, or an assignment to an existing key, replaces the earlier association rather than creating a second entry. Python also treats equal keys as the same entry: `1`, `1.0`, and `True` compare equal, so a programmer should choose key types deliberately.

### Lookup, absence, and updates

Subscription uses square brackets with a key. If `stock = {"apples": 3}`, `stock["apples"]` evaluates to `3`. The same form on the left of assignment changes a mapping: `stock["apples"] = 4` updates a value, while `stock["pears"] = 2` adds a pair. Direct lookup fits a required key: `stock["bananas"]` raises `KeyError` if bananas is absent. If absence is normal, `stock.get("bananas")` returns `None`, and `stock.get("bananas", 0)` returns a chosen fallback.

A fallback is not evidence that the key exists. Use `"bananas" in stock` when the program needs to test membership. Dictionaries also have `keys()`, `values()`, and `items()` views. An item is a key-value pair, useful when later code needs both pieces. The core decision here is simpler: decide whether a missing key is an error, a condition to test, or a situation with a sensible default.

### Order, equality, and tracing

Python dictionaries preserve insertion order. If keys are first added as `"apples"`, `"pears"`, and `"oranges"`, then `list(stock)` returns those keys in that order. Updating `stock["pears"]` changes its value but does not move its key. Deleting it and adding it again is a new insertion. Order helps predictable display, but dictionaries are still mappings, not indexed sequences. Dictionary equality is based on having the same key-value pairs, regardless of insertion order. A dictionary is mutable, so assignment and methods can change the same object later code sees. State clearly which part of a program owns an update.

Trace this state carefully. Begin with `stock = {"apples": 3, "pears": 1}`. Running `stock["pears"] += 2` updates pears to 3. Running `stock["oranges"] = 4` adds a new last key. The next `stock.get("bananas", 0)` returns 0 but adds nothing. Writing code this way makes the program's expectation about missing information visible.

## Key Vocabulary

- **dictionary (dict):** A mutable Python mapping that associates unique hashable keys with values.
- **mapping:** A collection that retrieves a value by its associated key rather than a numeric position.
- **key:** A hashable value used to locate one association in a dictionary.
- **value:** The object associated with a particular dictionary key.
- **key-value pair:** One association consisting of a key and its value.
- **hashable:** Suitable for use as a dictionary key because its hash remains usable during its lifetime.
- **KeyError:** The exception raised by direct subscription when a requested key is absent.
- **insertion order:** The order in which keys were added to a dictionary.

## Eli-10

Think of a dictionary as labeled cubbies. Instead of asking for cubby number 2, you ask for the cubby labeled `apples`. It might hold the number 3. A dictionary keeps each label with the value it points to. You can add a new labeled cubby or replace what is in one that already has that label.

The label must be dependable. A string such as `apples` stays the same, so it works. A list can change, so Python will not allow it as a dictionary key. Asking for a label that was never added with square brackets produces `KeyError`. `get()` is useful when an empty cubby is normal because it can return `None` or a fallback. Python remembers label insertion order, but the labels are for finding values, not positions.

## Eli's Analogy

A dictionary is like labeled cubbies: each label identifies one place, and each place holds associated information.

The analogy has limits. Python dictionaries use hashable keys, equal keys can refer to one entry, and their values can be any Python objects.

## Worked Example

Run this Python 3 code:

```python
stock = {"apples": 3, "pears": 1}
stock["pears"] += 2
stock["oranges"] = 4
print(stock)
print(stock.get("bananas", 0))
print(list(stock))
```

It prints `{'apples': 3, 'pears': 3, 'oranges': 4}`, then `0`, then `['apples', 'pears', 'oranges']`. Pears already existed, so its value changed without changing its position. Oranges was new, so it was inserted last. `get` supplied a fallback and did not insert bananas.

## Common Mistakes

- **Using a list as a key:** Use a hashable key; lists are mutable and cannot be keys.
- **Expecting repeated keys to make duplicates:** A later assignment replaces the current value for that key.
- **Using direct lookup for expected absence:** Use `get` with a default or test membership with `in`.
- **Treating order as indexing:** Keys retrieve values; preserved order is not positional access.

## Compare / Contrast

- `stock["bananas"]` raises `KeyError` when absent; `stock.get("bananas", 0)` returns the fallback.
- `stock["pears"] = 3` updates an existing association; `stock["oranges"] = 4` adds one.

## Key Takeaway

A dictionary maps unique hashable keys to values. Use direct lookup for required keys and `get` or membership testing when absence is expected; assignment either updates a key or inserts a new one.

## Practice Question Bank

1. What is required of a Python dictionary key? **C. It must be hashable.**
2. After `scores = {"Ada": 8}` and `scores["Ada"] = 10`, what is `scores["Ada"]`? **B. 10.**
3. Which expression returns 0 when `"late"` is not in `attendance`? **D. `attendance.get("late", 0)`.**
4. What remains after updating the second of three inserted keys? **A. The original insertion order.**
5. Why does `{[1, 2]: "pair"}` fail? **D. A list is mutable and unhashable.**

## Sources

- [Mapping Types — dict — Python 3 documentation](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)
- [Data Structures — Python Tutorial](https://docs.python.org/3/tutorial/datastructures.html)

## Related Topics

- `python-programming:foundations:lists`
- `python-programming:foundations:tuples`
- `python-programming:foundations:sets`
- `python-programming:foundations:for-loops`
- `python-programming:foundations:functions`

## Editorial Metadata

Original EliExplains synthesis. Source verified on 2026-08-19; official documentation used as reference-only. All shown Python code was executed with Python 3.
