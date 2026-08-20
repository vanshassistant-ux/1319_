# Sets

## In 30 Seconds

A Python set is an unordered collection of distinct, hashable objects. It is useful when the question is whether an item is present, when repeated values should collapse into one value, or when two groups need to be combined or compared. Use `set` when the collection must change; use `frozenset` when it must stay fixed. Sets do not provide positions, indexes, or slices.

## Why This Matters

Sets turn several common programming tasks into direct statements of intent: remove repeated values, test membership, or find what two groups share. They also introduce an important design choice: mutability. A mutable `set` can be updated as a program runs, while an immutable `frozenset` can safely represent a fixed group and is hashable. Learning the distinction helps students select a collection for its behavior rather than for familiar punctuation.

## Learning Objectives

- Define a Python set and identify its defining properties.
- Create sets, including an empty set, and explain how duplicates are handled.
- Apply membership, union, intersection, and difference to a small problem.
- Distinguish mutable `set` objects from immutable `frozenset` objects.
- Explain why indexing is not a set operation.

## The College Version

### What a set represents

In Python, a set is an unordered collection of distinct hashable objects. A repeated equal value does not make a second member. Sets suit membership questions, such as `'red' in colors`, rather than questions about count or position. `set(['red', 'blue', 'red'])` produces distinct values.

Unordered means a set does not record an insertion position. It does not support indexing or slicing, so `colors[0]` is not valid. Set members must be hashable; this rules out putting a mutable set inside another set.

### Creating and changing sets

A nonempty literal uses braces: `{'red', 'blue'}`. Use `set()` for an empty set; `{}` creates an empty dictionary. The built-in `set` is mutable, so methods such as `add` and `remove` can change its contents. A `frozenset` cannot change after creation and is hashable, so it can be used as an element of another set. Choose `set` for a changing collection and `frozenset` for fixed membership.

### Set relationships and operations

With `morning = {'Ada', 'Bo'}` and `afternoon = {'Bo', 'Cy'}`, `morning | afternoon` is the union: every member in either group. `morning & afternoon` is the intersection: members shared by both. `morning - afternoon` is the difference: members in the left group but not the right. The methods `union`, `intersection`, and `difference` express the same relationships.

For attendance at the morning meeting but not the afternoon meeting, use `morning - afternoon`, which contains Ada. Do not rely on a particular printed order; compare the members instead. Operators require set operands, while the named methods accept any iterable argument. A method name may be clearer in beginner code; an operator is concise when both operands are visibly sets.

## Key Vocabulary

- **set:** Python’s mutable unordered collection of distinct hashable objects.
- **frozenset:** Python’s immutable, hashable built-in type for distinct set members.
- **member:** An object contained in a set.
- **membership:** The relationship tested by `x in items`.
- **hashable:** Able to provide a hash value that does not change during its lifetime.
- **union:** Members found in either input set.
- **intersection:** Members shared by the sets being compared.
- **difference:** Members in one set that are absent from another specified set.

## Eli-10

Think of a set as a bowl that keeps one copy of each kind of bead. Put in two red beads and one blue bead, and the bowl’s inventory is still red and blue. It is good for asking whether a color is present or which colors are in both bowls. It is not good for asking which bead is first, because it does not label positions.

## Eli's Analogy

Pour two bowls into a new bowl for union. Keep colors that occur in both for intersection. Start with the first bowl and remove colors also in the second for difference. A regular `set` is a bowl you may add to; a `frozenset` is sealed after it is made.

The analogy has limits: physical bowls can contain duplicate physical beads and arrange them in order. Python sets represent distinct values without positions, and their members must meet a hashability rule.

## Worked Example

Let `morning = {'Ada', 'Bo', 'Ada'}` and `afternoon = {'Bo', 'Cy'}`. `morning` contains Ada and Bo because the duplicate name collapses. `'Cy' in morning` is `False`. `morning | afternoon` has Ada, Bo, and Cy; `morning & afternoon` has Bo; `morning - afternoon` has Ada. Printed order may differ, but membership does not.

## Common Mistakes

- **Using `{}` for an empty set:** Use `set()`; `{}` is an empty dictionary.
- **Expecting duplicate copies:** Sets retain distinct members.
- **Indexing a set:** Sets have no indexed positions.
- **Using union for shared members:** Use intersection (`&`) for members in both groups.

## Compare / Contrast

- **`set` vs. `frozenset`:** `set` is mutable and unhashable; `frozenset` is immutable and hashable.
- **Union vs. intersection:** Union includes either input; intersection includes shared members.
- **Difference vs. intersection:** Difference keeps left-only members; intersection keeps shared members.

## Key Takeaway

Use a Python set for distinct, membership-focused values and choose the operation that matches the relationship you need. Use `frozenset` when the set must not change and needs to be hashable.

## Practice Question Bank

1. Which expression creates an empty Python set? **Answer: C (`set()`).**
2. What is true after executing `colors = {'red', 'blue', 'red'}`? **Answer: D (two distinct members).**
3. Which expression produces members in both `a` and `b`? **Answer: B (`a & b`).**
4. Which fixed set can be placed inside another set? **Answer: C (`frozenset`).**
5. Which expression finds morning attendees absent in the afternoon? **Answer: A (`morning - afternoon`).**

## Sources

- Python Software Foundation, [Built-in Types](https://docs.python.org/3/library/stdtypes.html)
- Python Software Foundation, [Data Structures tutorial](https://docs.python.org/3/tutorial/datastructures.html)

## Related Topics

- Lists
- Tuples
- Dictionaries
- Operators

## Editorial Metadata

Source-verified original synthesis. Official Python documentation was used as reference-only authority; no source prose was adapted. Examples were executed with Python 3 on 2026-08-19.
