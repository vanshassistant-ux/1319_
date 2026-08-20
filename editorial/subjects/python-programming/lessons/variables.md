# Variables

## In 30 Seconds

In Python, a variable is usually best understood as a **name bound to an object**. Assignment, written with `=`, creates a binding or replaces an existing one. If `place` is first bound to one object and later assigned another value, the name has been rebound. A second name can still refer to the original object. This model explains why a variable is not a box that contains a value.

## Why This Matters

Reading Python accurately starts with tracing names. When a program assigns, reassigns, or copies a name into another name, the important question is: “Which object does this name refer to now?” That question helps you predict output, understand messages such as `NameError`, and later reason about shared references in programs. It also prevents a common mistake: assuming that changing one name must change every other name that once pointed at the same object.

## Learning Objectives

- Define a Python name binding.
- Distinguish an object from a name that refers to it.
- Explain what reassignment (rebinding) changes.
- Trace two names that initially refer to the same object.
- Use identity carefully to check whether two names refer to one object.

## The College Version

### Names are references, not containers

Python's execution model says that names refer to objects. A name is the spelling a program uses to reach an object; the object is the program's data. Assignment is one of the operations that creates that connection. In this lesson, “variable” is convenient everyday language for a name whose binding a program can use, but the more precise idea is **name binding**.

```python
campus = "Riverside"
```

After this statement runs, `campus` is a name that refers to a string object. The equals sign is not a mathematical claim that the two sides are permanently identical. It performs an assignment. Python does not require a separate declaration before this assignment; the binding is made when the statement executes. Details such as valid identifier spelling belong with Python Syntax, and the meaning of a particular kind of value belongs in its own lesson.

### Assignment can replace a binding

An assignment statement can bind a name for the first time or rebind one that already has a connection. Rebinding changes the name's connection; it does not reach backward and edit another name's connection.

```python
direction = "north"
direction = "south"
print(direction)
```

This prints `south`. The second assignment makes `direction` refer to the later object. In ordinary reading, it is useful to say that the variable “now has” the later value, but the precise trace is that the name's binding changed. The first object may or may not still be reachable through another name; that is a separate question.

### One object, more than one name

Python objects have an identity, type, and value. Identity lets us ask whether two expressions refer to the same object. The `is` operator tests identity, unlike `==`, which is an equality operation covered elsewhere. When two names refer to one object, they are aliases.

```python
marker = object()
alias = marker
print(alias is marker)

marker = object()
print(alias is marker)
```

The first line printed is `True`: assigning `marker` to `alias` made both names refer to the same object. The second assignment gives `marker` a new binding. It does not automatically rebind `alias`, so the second line is `False`. This small trace separates aliasing from rebinding without relying on changes to a list or dictionary.

### Keep two kinds of change separate

It is tempting to picture a variable as a labeled storage box and then imagine every assignment as replacing the contents of that box. The picture can be useful for a first sketch, but it blurs an important distinction. Rebinding changes which object a name refers to. Some objects can themselves change value, while others cannot; that behavior depends on the object and its type. Later collection lessons examine changes to mutable objects. For now, trace bindings first, and do not infer an object change merely because a name was assigned again.

### A practical tracing routine

For each assignment, write the name on the left and draw an arrow to the object reached on the right. If the right side is another name, copy the arrow's destination, not the letters of the name. On a later assignment to that left-hand name, erase and redraw only that arrow. This routine makes it visible why aliases can diverge after one name is rebound. It also gives a disciplined way to read code before running it: predict bindings, execute the program, then compare the output to the trace.

Seeing the same displayed value twice does not by itself prove that two names share an object: identity is a separate property. Likewise, a shared reference does not mean two names must always remain aligned; a later assignment can redirect either name. Trace statements in order instead of guessing from the variable names. That discipline scales from a three-line exercise to a larger program, where a binding may be introduced far from the print statement you are interpreting.

Accurate tracing is a practical skill, not merely vocabulary to memorize.

## Key Vocabulary

- **name**: an identifier that refers to an object in a Python program.
- **binding**: the association between a name and an object.
- **assignment statement**: a statement that binds or rebinds a target name.
- **rebinding**: replacing a name's existing association with another one.
- **object**: Python's representation of data or a relation between data.
- **identity**: the property that distinguishes one object from another during its lifetime.
- **alias**: one of two or more names that refer to the same object.

## Eli-10

Think of an object as a particular library book and a name as a catalog card that points readers to that book. Writing `alias = marker` is like making a second catalog card that points to the same copy. There are now two ways to find it.

If you later update the `marker` card so it points to a different book, the `alias` card does not magically move. It still points to the original copy. That is rebinding: changing where one name points. The names are not the books, and copying a name does not necessarily make a new object.

The library-card picture has limits. Python does not expose a literal card cabinet, and object identity should not be treated as a street address. Also, some objects can change while their identity remains the same, a topic best explored with the collection lessons. The useful part of the picture is only this: trace each name's connection separately.

## Eli's Analogy

Imagine two sticky notes, `marker` and `alias`, attached to the same sealed envelope. Replacing the `marker` note with one attached to another envelope leaves `alias` on the first envelope. The notes are names; the envelopes stand for objects.

## Worked Example

Run this trace and predict both lines before reading the result:

```python
first = "North"
second = first
first = "South"
print(first)
print(second)
```

Python prints:

```text
South
North
```

The first statement binds `first` to the object represented by `"North"`. The second statement binds `second` to the same object currently reached by `first`. The third statement rebinds only `first` to the object represented by `"South"`. It does not command Python to rewrite every other binding that was made earlier, so `second` still refers to `"North"`. This example is about bindings, not about arithmetic or changing a collection.

## Common Mistakes

- **Mistake:** Treating `=` as a permanent mathematical equality sign. **Correction:** Read it as an assignment that establishes or changes a binding.
- **Mistake:** Assuming `b = a` creates an independent object in every case. **Correction:** It makes `b` refer to the object currently reached by `a`.
- **Mistake:** Assuming rebinding one alias rebinds all aliases. **Correction:** Redraw only the assigned name's arrow.
- **Mistake:** Using `is` as a general replacement for equality. **Correction:** `is` asks whether two references have the same identity; equality is a different question.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Binding | Object | A binding is a name-to-object connection; an object is the data entity reached through it. |
| Rebinding | Object change | Rebinding changes a name's connection. It does not by itself establish that an object changed. |
| Alias | Copy | An alias is another name for the same object; a copy is a distinct object with separately determined identity. |

## Key Takeaway

Python assignment binds names to objects, and assigning an already used name rebinds that name. Trace each name separately: aliases may start at the same object, then differ after one name is rebound.

## Practice Question Bank

1. In Python's execution model, what does a name refer to? **A. An object.** B. Only a line number. C. A required memory address visible to every program. D. Always a string.
2. What does the second statement do in `a = object(); b = a`? A. Deletes `a`. **B. Binds `b` to the object currently referred to by `a`.** C. Guarantees a new independent object. D. Rebinds every name in the program.
3. After `x = object(); y = x; x = object()`, what is `y is x`? A. It raises `NameError`. B. Always implementation-dependent. **C. `False`, because `x` was rebound while `y` still refers to the earlier object.** D. `True`, because assignment changes all aliases.
4. Which statement best describes rebinding? A. Editing every object with the same value. B. Comparing two objects for equality. C. Creating an indentation block. **D. Changing which object a name refers to.**
5. Why is the phrase “a variable is a box” limited in Python? **A. It can hide the distinction between a name and the object it refers to.** B. Assignment cannot change a name. C. Python objects lack identity. D. Two names can never refer to one object.

## Sources

- Python Software Foundation, [Assignment statements](https://docs.python.org/3/reference/simple_stmts.html)
- Python Software Foundation, [Execution model](https://docs.python.org/3/reference/executionmodel.html)
- Python Software Foundation, [Data model](https://docs.python.org/3/reference/datamodel.html)
- Python Software Foundation, [Glossary](https://docs.python.org/3/glossary.html)

## Related Topics

- Python Syntax
- Numbers
- Scope
- Lists
- Classes and Objects

## Editorial Metadata

Status: READY_TO_PUBLISH. Research status: source-verified. Rights status: reference-only official documentation; no source prose adapted. Researched 2026-08-19. All executable examples were run with `python3`.
