# Classes and Objects

## In 30 Seconds

A Python class is a blueprint-like definition that creates a new kind of object. Calling the class creates an instance. Each instance can carry its own attributes, while a method is behavior defined in the class and used through an instance. This lesson focuses on defining a class, storing per-instance state with `self`, and telling a class attribute from an instance attribute.

## Why This Matters

Classes let a program keep related data and behavior together. A `Student`, `Timer`, or `CartItem` can be represented by an object whose attributes describe that particular thing and whose methods operate on it. The distinction between shared class data and per-instance data also prevents a subtle bug: accidentally giving every object the same mutable list or dictionary.

## Learning Objectives

- Define a class and distinguish it from an instance.
- Create instances by calling a class.
- Explain how `self` connects an instance method to its instance.
- Apply dotted attribute access to per-instance state.
- Distinguish class and instance attributes.

## The College Version

### A class defines a kind of object

Python works with objects: values that have an identity, type, and value. A class statement defines a new type-like class object. Its indented suite runs when Python executes the statement. Calling that class creates separate instances.

```python
class Badge:
    pass

first = Badge()
second = Badge()
```

`Badge` names the class; `first` and `second` are different instances. A class is not a single record of data. It is the shared definition from which instances obtain behavior and can obtain attributes. This lesson keeps to those mechanics, rather than attempting a full survey of object-oriented design.

### Instance attributes and initialization

An attribute is reached with dotted notation, such as `book.title`. Classes commonly make instance attributes in `__init__`, which Python calls while constructing an instance. The conventional first parameter is `self`. In `Book("Kindred")`, Python supplies the new object as `self`; the caller supplies the title.

```python
class Book:
    def __init__(self, title):
        self.title = title

first = Book("The Left Hand of Darkness")
second = Book("Kindred")
print(first.title)
print(second.title)
```

The two prints differ because `self.title = title` stores an attribute on the particular object received as `self`. Changing `first.title` later changes only `first`, not `second`.

### Methods and self

A method is a function defined in a class body. Accessing it through an instance supplies that instance as the first argument. `self` is a convention, not a keyword; it makes the relationship readable.

```python
class Book:
    def __init__(self, title):
        self.title = title
    def describe(self):
        return f"Reading: {self.title}"

first = Book("Kindred")
print(first.describe())
```

This prints `Reading: Kindred`. The method is shared behavior, but it reads the data of the instance that received the call. General function syntax and return values belong to their own lessons; they appear here only to make the method connection concrete.

### Class attributes are shared defaults

A name assigned directly in the class body is a class attribute. Instances can read it until they have an instance attribute with the same name. That instance attribute shadows the class one for that object.

```python
class Meter:
    unit = "km"
    def __init__(self, value):
        self.value = value
    def label(self):
        return f"{self.value} {self.unit}"

a = Meter(3)
b = Meter(7)
Meter.unit = "mi"
a.unit = "m"
print(a.label())
print(b.label())
```

The output is `3 m` and `7 mi`. Avoid putting a mutable list or dictionary in the class body when each instance needs its own collection. Put `self.items = []` in `__init__` instead.

## Key Vocabulary

- **class:** An object created by a class statement that defines attributes and behavior for instances.
- **instance:** An object created by calling a class.
- **attribute:** A named value or behavior reached through dotted notation.
- **instance attribute:** An attribute stored on one particular instance.
- **class attribute:** An attribute assigned in the class body and available as a shared lookup value.
- **method:** A function defined in a class and accessed through an instance.
- **self:** The conventional first parameter referring to the instance receiving a method call.

## Eli-10

A class is like instructions for making labeled storage boxes. The instructions say each box needs a label and can describe what it holds. Each made box is an instance, and `self` means “this particular box.” A method is an action every box gets from the same instructions.

## Eli's Analogy

A cookie cutter is like a class: one cutter can make many cookies with one shape. Each cookie is an instance, and icing on one cookie is like an instance attribute. A note on the cutter is like a class attribute, available as a shared default.

The analogy has limits. Cookies do not run methods or perform attribute lookup. Python class attributes are names Python searches for, not physical writing copied into every instance.

## Worked Example

For two library books, define `Book` with `__init__`, storing `self.title`, and `describe`, returning a sentence containing that attribute. `first = Book("Kindred")` and `second = Book("The Left Hand of Darkness")` use one shared method but produce different results because each instance owns a different title. Assigning a new `first.title` changes only the first result.

## Common Mistakes

- **Treating a class as an already-created object.** Call it to make an instance with its own state.
- **Leaving out the first method parameter.** Use the conventional `self` parameter when a method needs its instance.
- **Expecting `self.name` to be shared.** It belongs to the individual instance.
- **Using a mutable class attribute for per-instance data.** Initialize it with `self.items = []`.

## Compare / Contrast

- **Class / instance:** The class is the shared definition; an instance is one object created from it.
- **Class attribute / instance attribute:** A class attribute is shared through lookup; an instance attribute belongs to one object and can shadow it.

## Key Takeaway

Use a class to define related state and behavior, then make instances for individual things. Read and write per-instance state through `self`, and reserve class attributes for intentionally shared values.

## Practice Question Bank

1. What does `Book("Kindred")` do after `class Book:` is defined? **A. Creates a Book instance.**
2. In `first.describe()`, what does `self` refer to? **B. The `first` instance receiving the call.**
3. What happens to `second.title` after `first.title = "New"`? **C. It keeps its own value.**
4. After `a.unit = "m"`, what does `a.unit` read? **D. The instance attribute, `m`.**
5. Where should an independent list be made? **A. In `__init__` as `self.items = []`.**

## Sources

- Python Software Foundation, [The Python Tutorial: Classes](https://docs.python.org/3/tutorial/classes.html)
- Python Software Foundation, [The Python Language Reference: Class definitions](https://docs.python.org/3/reference/compound_stmts.html)
- Python Software Foundation, [Data model](https://docs.python.org/3/reference/datamodel.html)

## Related Topics

- Object-Oriented Programming
- Functions
- Variables
- Scope
- Basic Testing

## Editorial Metadata

Original EliExplains synthesis. Official Python documentation was read as reference-only; no source prose was adapted. Examples were executed with Python 3 on 2026-08-19. Status: source-verified, not public.
