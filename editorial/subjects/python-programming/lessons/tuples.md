# Tuples

## In 30 Seconds

A tuple is an ordered Python sequence whose own positions cannot be changed after the tuple is created. Commas form a tuple; parentheses often make the grouping easier to read. For example, `point = 4, 9` stores two values, and `x, y = point` assigns them to two names. A one-item tuple needs a comma: `('north',)`.

## Why This Matters

Tuples let a program keep a small, fixed arrangement of values together while still allowing normal sequence operations such as indexing, iteration, and unpacking. In coursework, they make it possible to represent items such as a coordinate or a record returned from a calculation without inventing a class first. Understanding the comma rule and immutability also prevents subtle bugs: a value that merely looks parenthesized is not necessarily a tuple.

## Learning Objectives

- Define a tuple as an immutable ordered sequence in Python.
- Construct empty, singleton, and multi-item tuples using correct syntax.
- Explain why commas, rather than parentheses alone, determine tuple formation.
- Apply sequence unpacking to assign a tuple's values to names.
- Distinguish changing a tuple binding from changing an item inside a tuple.

## The College Version

### A tuple is a sequence with fixed positions

Python documents tuples as immutable sequences. A tuple holds zero or more object references in an order, so its elements have positions beginning at index 0. That makes familiar sequence operations meaningful: `point[0]` reads the first value, and a `for` loop can visit values in order. Immutability means the tuple does not support replacing, inserting, or deleting one of those positions after it is made. Thus `point[0] = 7` raises `TypeError` when `point` is a tuple. This is a property of the tuple container, not a promise that every object reachable through it is immutable. A tuple can contain an object whose own state can change; the tuple still keeps the same reference at that position. For a foundations lesson, the useful rule is precise: you cannot assign to a tuple slot.

That rule also helps interpret error messages. Python is not saying that the expression `7` is forbidden or that the first position cannot be read. It is rejecting an operation that would replace the object reference stored at position 0. Reading `point[0]` remains valid, and constructing a separate tuple with another first value remains valid. Keeping read, construction, mutation, and assignment as distinct actions is a practical way to reason about code.

Immutability is not the same as making a name permanent. Python names can be rebound. After `point = (4, 9)`, writing `point = (7, 9)` makes `point` refer to a different tuple; it does not edit the earlier tuple. One operation tries to mutate an existing object's position and fails; the other changes what a name refers to and is ordinary assignment.

### Commas make tuples; parentheses clarify grouping

A comma is the essential syntactic feature for a tuple display. These two statements make equivalent two-item tuples: `point = 4, 9` and `point = (4, 9)`. Parentheses are common because they make a display readable and remove ambiguity inside a larger expression, but parentheses alone are only grouping: `(4)` evaluates to the integer `4`, not a tuple. The empty tuple is the special display `()`.

The one-item case exposes the rule most clearly. `('north')` is a parenthesized string expression. `('north',)` is a tuple containing one string. The trailing comma is therefore required for a singleton tuple, whether or not parentheses are written: `single = 'north',` also works. The official tutorial calls out both the empty and one-item cases because their syntax differs from the usual multi-item pattern.

### Packing and unpacking connect values and names

Tuple packing is the act of placing comma-separated expressions together. In `coordinates = 4, 9`, the right-hand side evaluates to a two-item tuple and is bound to `coordinates`. Sequence unpacking goes in the other direction: `x, y = coordinates` assigns the first item to `x` and the second to `y`. The pattern on the left has to match the number of values supplied in this basic form. A two-name target cannot unpack a three-item tuple, and Python raises `ValueError` rather than silently discarding a value.

The order is part of the meaning: in `x, y = coordinates`, the first target receives the first sequence item. Swapping the target names changes which name receives which value, even though the tuple itself stays unchanged. This makes unpacking concise, but programmers should choose target names that reflect each position's intended meaning.

Unpacking gives meaningful names to a tuple's positions at the point where those names are needed. For example, `row, column = (2, 5)` makes later calculations easier to read than repeatedly using indexes. This lesson keeps unpacking focused on direct assignment; function parameter collection and returned values belong in their own lessons.

## Key Vocabulary

- **tuple:** An ordered Python sequence whose positions cannot be replaced, added, or removed after creation.
- **immutable:** Not permitting changes to an object's own stored structure after creation.
- **sequence:** An ordered collection whose elements can be addressed by position and visited in order.
- **tuple display:** Comma-separated expressions written in source code to construct a tuple.
- **singleton tuple:** A tuple containing exactly one item, written with a trailing comma.
- **tuple packing:** Creating a tuple by grouping comma-separated expressions.
- **sequence unpacking:** Assigning values from an ordered sequence to matching targets.
- **rebinding:** Making a name refer to a different object through a new assignment.

## Eli-10

Think of a tuple as a small row of numbered cubbies. You can look in cubby 0 or cubby 1, and you can tell Python to give each cubby's item a name. But after the row is built, you cannot swap out what is in one cubby. If you need a different row, make a new row and have your label point to it.

The comma is the signal that says, “these are several cubbies together.” Parentheses help people see the row, but a single item inside parentheses is still just that item. The comma in `('north',)` is what makes one cubby into a tuple.

## Eli's Analogy

A tuple is like a sealed two-slot label on a museum display: it keeps a first and second fact together, and you can read either slot or copy both facts onto note cards. The analogy has limits: a real label cannot contain objects that later change, while a tuple can hold a reference to an object with its own changing state. A tuple also has language-defined operations, not physical slots.

## Worked Example

A mapping program receives a coordinate and wants separate names for its two positions.

```python
point = 4, 9
x, y = point
print(point)
print(x, y)

single = 'north',
empty = ()
print(single, len(single))
print(empty, len(empty))
```

It prints `(4, 9)`, then `4 9`, then `('north',) 1`, and finally `() 0`. The comma packs `4` and `9` into a tuple; the left-side pattern unpacks those positions into `x` and `y`. Trying `point[0] = 7` raises `TypeError`, while `point = (7, 9)` simply rebinds `point` to a new tuple.

## Common Mistakes

- **Mistake:** Writing `(value)` and expecting a one-item tuple. **Correction:** Add a comma: `(value,)`.
- **Mistake:** Saying parentheses alone create every tuple. **Correction:** Use the comma rule; `()` is the empty-tuple form.
- **Mistake:** Trying to replace a tuple item with an indexed assignment. **Correction:** Create another tuple and rebind the name.
- **Mistake:** Using a different number of targets and values in basic unpacking. **Correction:** Match the target pattern to the number of values.

## Compare / Contrast

- `('north')` is a grouped string expression; `('north',)` is a one-item tuple.
- `point[0] = 7` attempts mutation and fails; `point = (7, 9)` rebinds a name.
- Packing forms one tuple from comma-separated expressions; unpacking distributes ordered values to targets.

## Key Takeaway

Tuples are ordered, immutable sequences. Commas create them, including the required trailing comma for a singleton; unpacking can then assign their ordered values to separate names.

## Practice Question Bank

1. Which expression creates a one-item tuple containing `north`? **Answer:** `('north',)`.
2. What does `point = (7, 9)` do after `point = (4, 9)`? **Answer:** It rebinds the name to a different tuple.
3. What does `pair = 3, 8; left, right = pair; print(right)` print? **Answer:** `8`.
4. Why does `point[0] = 7` fail for a tuple? **Answer:** Tuple positions cannot be reassigned.
5. Which direct target pattern unpacks `10, 20, 30`? **Answer:** `red, green, blue = color`.

## Sources

- Python Software Foundation, [Tuples and Sequences](https://docs.python.org/3/tutorial/datastructures.html)
- Python Software Foundation, [Built-in Types](https://docs.python.org/3/library/stdtypes.html)
- Python Software Foundation, [The Python Language Reference: Expressions](https://docs.python.org/3/reference/expressions.html)

## Related Topics

- Lists, Sets, Dictionaries, Variables, Function Parameters, and Return Values

## Editorial Metadata

Original EliExplains synthesis. Official Python documentation was used as reference-only authority; all prose is original and the worked example was executed with Python 3 on 2026-08-19. Status: source-verified, not public.
