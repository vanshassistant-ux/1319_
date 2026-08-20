# Lists

## In 30 Seconds

A Python list is a mutable sequence: one object that keeps values in an order. Write a list with square brackets, such as `[“tea”, “coffee”]`. The first item has index 0; negative indexes count backward from the end. An index selects one item, while a slice selects a new list of a range. Because a list is mutable, assignment and `append()` can change it. Assigning it to another name does not copy it: both names can refer to the same list.

## Why This Matters

Lists let a program keep a changing ordered collection under one name: items in a cart, readings from an instrument, or tasks still to do. They also teach a central Python idea: names refer to objects. That explains both useful updates and surprising bugs, such as changing a list through one name and seeing the change through another. Careful indexing, slicing, and copying make later work with loops, functions, and data analysis easier to reason about.

## Learning Objectives

- Define a Python list and create one with a list literal.
- Use zero-based and negative indexes to select list items.
- Explain the inclusive-start, exclusive-stop rule for list slices.
- Apply item assignment and `append()` to deliberately change a list.
- Distinguish an alias made by assignment from a shallow copy made with a full slice.

## The College Version

### A list is an ordered, mutable sequence

Python uses a list to group values in one ordered collection. A list literal places comma-separated items inside square brackets: `[“red”, “green”, “blue”]`. The brackets create a list object; the values inside are its items. Lists can contain values of different types, although a focused program often keeps a consistent kind of item together because that makes the collection easier for people to understand. Order matters: `[“red”, “green”]` is not the same sequence as `[“green”, “red”]`. An empty list is written `[]`. Python’s tutorial calls lists a compound data type and shows that they are sequence types, so they support selecting positions and ranges. This lesson concentrates on those basic operations rather than on the broad catalog of list methods or list comprehensions.

The word *mutable* is the key contrast. A mutable object can have its contents changed after it is created. For a list, that can mean replacing an item or adding an item. Mutability is about the object, not about a variable name having special powers. A name is bound to an object; an update written through a name changes the object that name currently refers to. That distinction becomes essential when more than one name refers to the same list.

### Indexes select one item; slices select a range

List positions are indexes, and the first item is at index 0. With `colors = [“red”, “green”, “blue”]`, `colors[0]` is `“red”` and `colors[2]` is `“blue”`. A negative index counts from the right, so `colors[-1]` is the final item, `“blue”`. Asking for one index outside the available positions raises `IndexError`; it signals that the program tried to select an item that is not there. A list with length *n* has ordinary nonnegative indexes 0 through *n* - 1.

A slice uses a colon, such as `colors[1:3]`. It returns a new list containing positions from the start up to, but not including, the stop. Therefore `colors[1:3]` produces `[“green”, “blue”]`. Leaving out the start means the beginning, and leaving out the stop means the end: `colors[:2]` gives `[“red”, “green”]` and `colors[1:]` gives `[“green”, “blue”]`. The start-inclusive, stop-exclusive convention makes adjacent slices fit together: `colors[:1] + colors[1:]` reconstructs the original values. Unlike a single bad index, slice bounds beyond the ends are handled by the slicing operation; `colors[2:99]` simply returns the portion that exists.

### Changing a list on purpose

Because a list is mutable, item assignment replaces an existing item. If `temperatures = [18, 20, 19]`, then `temperatures[1] = 21` changes the list to `[18, 21, 19]`. To add one value at the end, use `append()`: `temperatures.append(22)` changes that same list to `[18, 21, 19, 22]`. `append()` adds its one argument as one item; it does not return a newly built list for you to save. That is why a beginner should not write `temperatures = temperatures.append(22)`: the method changes the list in place and returns `None`.

These operations are useful when a program deliberately collects information over time. Yet they also call for care. Before changing a collection, ask whether the intended result is an update to this object or a separate collection. The next distinction answers that question.

### Assignment makes an alias, not a copy

Suppose `first = [“draft”, “review”]` and `second = first`. Simple assignment does not copy the list. It binds `second` to the existing object, so `first` and `second` are aliases: two names for the same list. If `second.append(“publish”)` runs, printing `first` also shows `[“draft”, “review”, “publish”]`. This is one object being observed through two names. `first is second` is `True` in this example because identity asks whether the names refer to the same object.

When a separate outer list is needed, a full slice is a compact option: `third = first[:]`. The documentation describes a full slice as a shallow copy. After `third[0] = “outline”`, `first[0]` remains `“draft”`, because the outer list containers are different. Shallow matters when list items are themselves mutable objects: the new outer list initially contains references to the same nested items. The practical habit is simple: use assignment when shared updates are intended; use a copy when independent outer collections are intended.

## Key Vocabulary

- **list:** A mutable Python sequence that stores an ordered collection of items.
- **list literal:** Square-bracket syntax that creates a list, such as `[1, 2, 3]`.
- **item:** One value stored at a position in a list.
- **index:** An integer position used to select one list item; the first position is 0.
- **negative index:** An index counted from the end of a sequence, with -1 selecting the last item.
- **slice:** A selection of a sequence range written with colon syntax, such as `values[1:3]`.
- **mutable:** Able to have its contents changed after it is created.
- **alias:** A second name that refers to the same object as another name.
- **shallow copy:** A new outer container whose elements initially refer to the same element objects as the original.

## Eli-10

Imagine a list as a labeled row of little trays. The trays are numbered starting at 0, so the first tray is tray 0. You can look in one tray with an index, or take a run of trays with a slice. The row is flexible: you can replace what is in a tray or attach another tray at the end with `append()`.

Names such as `first` and `second` are not separate rows just because their spelling differs. If you write `second = first`, you give the very same row a second label. Adding an item through `second` means anyone looking through `first` sees it too. To make another row, use `first[:]` to make a new outer row before changing it.

## Eli's Analogy

A list is like a row of numbered trays, and variable names are labels pointing to that row.

The analogy has a limit: actual Python lists are objects in memory, not physical trays, and a shallow copy is subtler than making a completely independent physical duplicate. Mutable objects inside both lists can still be shared.

## Worked Example

Run this Python 3 code:

```python
tasks = ["read", "write", "submit"]
urgent = tasks
urgent.append("email")
snapshot = tasks[:]
snapshot[0] = "plan"
print(tasks)
print(snapshot)
print(tasks[1:3])
```

The first `append()` changes the one list referred to by both `tasks` and `urgent`, so `tasks` becomes `['read', 'write', 'submit', 'email']`. The full slice creates a different outer list for `snapshot`. Replacing `snapshot[0]` therefore leaves `tasks[0]` as `"read"` while `snapshot[0]` becomes `"plan"`. Also, `tasks[1:3]` evaluates to `['write', 'submit']`: position 1 is included and position 3 is not. These results were executed with `python3`.

## Common Mistakes

- **Treating index 1 as the first list item.** Python uses zero-based indexing, so the first item is at index 0.
- **Expecting a slice stop to be included.** A slice starts at its first bound and stops before its second bound.
- **Assuming `second = first` makes a second list.** Assignment aliases the existing list; use `first[:]` when a separate outer list is intended.
- **Saving the result of `append()`.** `append()` changes the list in place and returns `None`.

## Compare / Contrast

- `list[index]` selects one item; `list[start:stop]` selects a range and returns a new list.
- `other = items` makes another name for the same list; `other = items[:]` makes a shallow copy of the outer list.
- `items[1] = value` replaces an existing position; `items.append(value)` adds one item at the end.

## Key Takeaway

Lists are ordered, mutable Python sequences. Indexes select individual items, slices select ranges, and assignment can create aliases rather than copies—so choose a shallow copy when you need an independent outer list.

## Practice Question Bank

1. Which expression creates a list containing the values 3 and 5? **Answer: A.**
2. For `colors = ["red", "green", "blue"]`, what does `colors[-1]` select? **Answer: C.**
3. Given `values = [10, 20, 30, 40]`, what is `values[1:3]`? **Answer: B.**
4. What is printed after assigning `other = items`, calling `other.append("b")`, and printing `items`? **Answer: D, `['a', 'b']`.**
5. Which statement makes a shallow copy of the outer list `original`? **Answer: B, `copy = original[:]`.**

## Sources

- Python Software Foundation, [The Python Tutorial — An Informal Introduction](https://docs.python.org/3/tutorial/introduction.html)
- Python Software Foundation, [Built-in Types](https://docs.python.org/3/library/stdtypes.html)

## Related Topics

- `python-programming:foundations:variables`
- `python-programming:foundations:for-loops`
- `python-programming:foundations:tuples`
- `python-programming:foundations:list-comprehensions`

## Editorial Metadata

- Status: READY_TO_PUBLISH
- Research status: source-verified
- Rights: Reference-only documentation; original synthesis and independently executed Python 3 examples.
- Researched: 2026-08-19
