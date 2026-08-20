# Object-Oriented Programming

## In 30 Seconds

Object-oriented programming (OOP) is a way to organize a program around objects: values with a type, state, and operations. Rather than scattering facts and the code that acts on them, a design can give related responsibilities a home. In Python, OOP is a useful tool, not a requirement: small programs can be clearer with simple functions and data.

## Why This Matters

OOP gives students a vocabulary for deciding where behavior belongs as a program grows. It can make a model of a library account, game character, or sensor easier to extend because related data and operations travel together. The important skill is not naming four “pillars”; it is choosing a design that makes responsibilities, dependencies, and changes understandable. That judgment transfers to later work with APIs, testing, and larger codebases.

## Learning Objectives

- Define object-oriented programming as an organizational approach.
- Distinguish an object’s state from its behavior.
- Explain encapsulation, inheritance, and polymorphism without treating them as mandatory rules.
- Apply composition versus inheritance to a small design decision.
- Analyze why a common operation can work across different object types.

## The College Version

### Objects and responsibilities

Object-oriented programming is a design approach: organize some parts of a program around objects and the operations that make sense for them. In Python’s data model, every object has an identity, a type, and a value. The type helps determine the operations that object supports. An object is not merely a bag of variables, and OOP is not synonymous with the `class` keyword. A program already works with objects when it works with strings, lists, functions, and user-defined values.

When designing an application, state is information an object is responsible for, while behavior is an operation it can perform or support. A `LibraryAccount` might be responsible for a borrower’s current loans and for requesting a renewal. Keeping those ideas together can reduce the number of places a future change must be made. It does not mean every noun in a problem statement deserves its own object. Good boundaries come from responsibilities that change together, not from a ritual of converting every noun into a class.

Python classes are one way to define a new type and make instances of that type. Classes and Objects owns declaration syntax, attributes, constructors, and instance mechanics. Before writing a class, decide what an object should know, what it should do, and which details other code actually needs.

### Encapsulation is an interface decision

Encapsulation means grouping related state and behavior and exposing a usable interface instead of asking unrelated code to manipulate every internal detail. Code that wants to renew a library item should ask an account to attempt a renewal; it should not have to know every rule used to decide eligibility. That leaves room to change the internal rule while preserving the operation clients use.

Encapsulation is often described as “hiding data,” but that shorthand can mislead Python learners. Python does not turn a leading underscore into a hard private-access wall. A name such as `_loans` communicates an internal-use convention; it does not prevent access. The real benefit is architectural: callers depend on a small, intentional interface, and the implementation can be revised coherently.

### Inheritance, polymorphism, and composition

Inheritance describes a relationship in which a derived type receives attributes and methods from a base type and may add or replace behavior. It can fit a genuine “is a” relationship. But inheritance also creates a dependency: changes to the base design can affect derived types. It is not a convenient way to reuse a few lines of code.

Polymorphism is the ability to use a common operation with values of different types, while each type supplies behavior suitable to itself. A reporting function may call `summary()` on different objects without a long chain of type tests. Some polymorphism arises through inheritance; Python can also use a shared method-shaped interface without a shared base class.

Composition is another option: one object has or uses another object. A `Car` has an `Engine`; it is not an `Engine`. Composition makes a dependency explicit and lets components vary independently. Use composition for “has a” relationships, and choose inheritance only when substitutability and shared behavior are genuinely stable.

## Key Vocabulary

- **object:** A runtime value with an identity, type, and value in Python.
- **type:** A classification that determines an object’s supported operations and possible values.
- **state:** Information for which an object is responsible at a particular time.
- **behavior:** An operation an object can perform or support.
- **encapsulation:** Organizing related state and behavior behind a deliberate interface.
- **inheritance:** A relationship in which a derived type obtains behavior or attributes from a base type.
- **polymorphism:** Using a common operation with values whose types can provide different appropriate behavior.
- **composition:** Building a design in which one object uses or contains another object.

## Eli-10

Think of an object as a well-labeled station at a workshop. The station keeps the tools and information needed for one job together, and it offers a few clear actions. Other people do not need to rearrange every drawer to ask for a cut; they use the station’s controls. OOP helps choose these stations and their responsibilities.

Inheritance is like making a specialized station from a general station. Polymorphism means someone can press the same labeled control on different stations and get the appropriate result. Composition is different: a station may use another station as a component rather than pretending to be that station.

## Eli's Analogy

A workshop with stations and clearly labeled controls. The analogy breaks down because programs do not have physical drawers, Python conventions are not locked doors, and real designs can share behavior without inheritance.

## Worked Example

Suppose a transit app must show a short status for a bus and a train. Both can provide `status()`, but the bus reports its route while the train reports its line and platform. A display routine can ask each item for `status()` and show the returned text; it does not need to know which concrete type it received. That is polymorphism at the design level. If a bus uses a separate `Location` value to track coordinates, that is composition: the bus has a location, rather than being a location. Do not create a base class merely because two examples share one method name; use one only when the shared contract and substitutability are valuable.

## Common Mistakes

- **Equating OOP with writing many classes.** Start with responsibilities; functions and plain data may be clearer for a small task.
- **Calling every code-reuse opportunity inheritance.** Consider composition or a helper function.
- **Treating `_name` as enforced private access.** It is a convention, not an access barrier.
- **Assuming polymorphism requires a shared parent class.** Python objects can support the same needed operation without one custom base.

## Compare / Contrast

- **Inheritance / composition:** a derived type builds on a base type; composition means one object uses or contains another.
- **Encapsulation / access control:** encapsulation is an interface design; a leading underscore alone does not enforce privacy.
- **Polymorphism / type-checking chain:** polymorphism asks objects for a common operation rather than selecting behavior externally.

## Key Takeaway

OOP organizes responsibilities around objects and interfaces. Use encapsulation, inheritance, polymorphism, and composition as design tools—not as boxes every Python program must check.

## Practice Question Bank

1. In Python’s data model, which set describes every object? **Answer: C.** An identity, a type, and a value.
2. A program exposes `account.renew(item)` rather than direct list edits. **Answer: A.** Encapsulation.
3. Which relationship is usually composition? **Answer: C.** A car uses an engine component.
4. A display calls `status()` on a bus and train. **Answer: D.** It can use the common operation polymorphically.
5. What does `_balance` guarantee? **Answer: B.** It signals internal use by convention.

## Sources

- Python Software Foundation, [Data model](https://docs.python.org/3/reference/datamodel.html)
- Python Software Foundation, [Classes](https://docs.python.org/3/tutorial/classes.html)

## Related Topics

Classes and Objects; Functions; Modules; Basic Testing; Scope.

## Editorial Metadata

Original EliExplains synthesis, researched 2026-08-19. Sources are reference-only official documentation; no source prose adapted. Status: source-verified and not public.
