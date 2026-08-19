# Object-Oriented Programming Basics

## In 30 Seconds

Object-oriented programming (OOP) organizes a program around objects: self-contained units that bundle data together with the behavior that acts on it. A class is a blueprint describing what a kind of object knows (its attributes) and can do (its methods); each object is one instance built from that blueprint. Four ideas are commonly taught as its pillars: encapsulation, inheritance, polymorphism, and abstraction. OOP is one paradigm among several, supported by many languages rather than tied to any single one.

## Why This Matters

Most languages students meet in college courses (Python, Java, C++, C#) support objects, and large codebases, GUI frameworks, and libraries are routinely organized this way. Understanding classes, objects, and the four pillars lets you read existing code, model a problem as interacting parts, and follow later material on data structures, design patterns, and software architecture. The paradigm also sharpens a transferable habit: deciding which data and which behavior belong together. Knowing OOP's limits matters too. It is one style among several, and procedural or functional approaches sometimes fit a problem better.

## Learning Objectives

- Define object-oriented programming as organizing code around objects that bundle data with behavior.
- Distinguish a class (blueprint) from an object (instance), and identify an object's attributes and methods.
- Explain each of the four commonly-taught pillars (encapsulation, inheritance, polymorphism, abstraction) in one or two correct sentences.
- Apply the class/object idea by reading a small class definition and identifying its instance, attributes, and methods.
- Contrast object-oriented with procedural programming and recognize that OOP is language-agnostic.

## The College Version

### From procedures to objects

Procedural programming, the style many people learn first, organizes a program as a sequence of procedures (functions) that receive data, transform it, and pass it along. The data and the code that manipulates it live separately: a function might accept a customer record, but nothing about the record itself says which functions are allowed to touch it. This works, yet as a program grows, the same data gets handled by many scattered functions, and keeping them consistent becomes the programmer's burden. A change to how a record is structured can ripple through code in a dozen files.

Object-oriented programming takes a different organizing principle. Instead of grouping code by procedure, it groups code by the thing it describes. An object is a self-contained unit that holds some data and also carries the operations that act on that data. A bank-account object keeps its own balance and also owns the deposit and withdraw operations; a program asks the object to deposit rather than passing a raw balance to a free-floating function. Bundling state with behavior is the core move of the paradigm, and every other OOP idea builds on it. The payoff is locality: to understand what can happen to an account's balance, you look at the Account class, not the whole program.

### Classes and objects: blueprint and instance

Most objects come from a class. A class is a blueprint that names the attributes a kind of object holds and defines the methods it can perform; it is a template, not a value you can use directly. An object (also called an instance) is a concrete thing built from that class, with its own copy of the data. One Account class can produce thousands of account objects, each with a different balance, all sharing the same set of methods.

Two terms describe an object's two halves. An attribute (also called a field, property, or data member) is a named value stored on the object, referenced with dotted notation like `account.balance`; together an object's attributes are its state. A method is a function defined in the class that operates on an instance; when you call it, the instance itself is handed to the method so it can read and change that object's own attributes. In Python that instance is the explicit first parameter, conventionally named `self`; other languages pass it implicitly under names like `this`. Creating an object is called instantiation. In Python it uses call notation, such as `account = Account(100)`, and if the class defines the special method `__init__`, that method runs automatically to set up the new object's starting state. Nothing else runs on its own: every other method executes only when you explicitly call it.

### The four pillars

Teachers commonly summarize OOP with four pillars. Treat them as a widely used learning framework rather than a strict definition. Reference sources note there is no single agreed-upon definition of OOP, and languages support these ideas to different degrees; some lists split off "information hiding" or add "dynamic dispatch" as separate items.

- **Encapsulation** bundles an object's data with the methods that act on it and restricts direct outside access to that internal state, so other code interacts through a controlled surface rather than reaching in and editing raw fields (information hiding).
- **Inheritance** lets a new class (the derived or child class) reuse and extend the attributes and methods of an existing one (the base or parent class), which avoids repeating shared behavior across related types.
- **Polymorphism** lets a single method name work across different types, each supplying its own version: calling `speak()` on an animal object produces the right sound whether it is a dog or a cat, without the caller checking which type it holds.
- **Abstraction**, as an OOP pillar, means exposing an object's essential features and behavior while hiding the implementation detail behind them; you can use a list without knowing whether it stores elements in a contiguous block or a chain of nodes.

Abstraction is also a broader idea across computing, developed in its own lesson. Here we mean only its OOP-pillar sense.

### One paradigm, many languages

OOP is not a language. Python, Java, C++, C#, Ruby, and many others support it, and the same idea appears under different names: what Python calls an attribute, C++ calls a data member; a method in one language is a member function in another; a Python dictionary is elsewhere a map or an associative array. Even the mechanics differ, since some languages build objects from classes while others (JavaScript, historically) copy them from prototypes. Learning the concepts, not one language's keywords, is what transfers between them.

OOP is also not the only way to write software. Procedural and functional styles remain in wide use, and many real programs mix paradigms freely, using objects for some parts and plain functions for others. OOP tends to pay off when a problem naturally decomposes into interacting entities that each carry their own state, such as simulations, user-interface widgets, or records in a system, and it can add ceremony when a short, data-transforming script would do the job more directly. Deciding when to reach for objects, and when a simpler structure fits, is itself part of using the paradigm well. The goal is not to make everything an object but to let the shape of the code follow the shape of the problem.

## Key Vocabulary

- **Object-oriented programming (OOP)**: A way of organizing a program around objects, each of which packages related data together with the operations that act on that data.
- **Class**: A blueprint or template that defines the attributes and methods shared by a kind of object; it is not itself a usable value.
- **Object (instance)**: A concrete unit built from a class, holding its own data (state) and able to run the class's methods; one class can produce many objects.
- **Attribute**: A named value stored on an object, referenced by name (for example `object.name`); together an object's attributes make up its state. Also called a field, property, or data member.
- **Method**: A function defined inside a class that runs on a particular instance, receiving that instance so it can read or change the object's own attributes.
- **Instantiation**: The act of creating an object from a class; in Python it uses call notation and triggers the class's `__init__` method to set up starting state.
- **Encapsulation**: Keeping an object's data together with the methods that use it and limiting direct outside access to that internal state, so code interacts through a controlled interface.
- **Inheritance**: A mechanism by which a new (derived) class reuses and extends the attributes and methods of an existing (base) class.
- **Polymorphism**: The ability for one method name or interface to work across different types, with each type providing its own behavior for that call.
- **Procedural programming**: A paradigm that organizes a program around procedures (functions) acting on data kept separate from them, rather than bundling data and behavior into objects.

## Eli-10

Imagine building a video game with lots of monsters. Instead of keeping every monster's health in one big list over here and all the code that hurts or heals monsters over there, you make each monster carry its own health and know how to take damage. Every monster on screen is its own copy (its own object) stamped from the same plan, the class. When something hits a monster, you don't dig through a shared table; you just tell that one monster "take 10 damage," and it updates itself. Bundling the data (health) with the actions (take damage) inside each object is the whole idea. The four pillars are just names for handy things objects let you do: keep their insides private (encapsulation), base a new kind on an older kind (inheritance), let different objects answer the same command in their own way (polymorphism), and hide messy details behind a simple button (abstraction).

## Eli's Analogy

A class is like a cookie cutter and the objects are the cookies. The cutter defines the shape every cookie will have, but it is not itself a cookie; each cookie you stamp out is a separate instance you can decorate differently.

**Where the analogy breaks down:** The cookie cutter only shapes an outline, while a real class also supplies behavior (methods the object can perform), not just a static form. Cookies also cannot create new cookie shapes from themselves, whereas a class can be inherited to make new, more specialized classes. The analogy captures blueprint-versus-instance but misses methods, inheritance, and encapsulation.

## Worked Example

Here is a small, verified Python class. `class Dog:` defines the blueprint. Its `__init__` method sets one attribute, `self.name`, when a dog is created, and its `speak` method is behavior bundled with that data:

```python
class Dog:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return f"{self.name} says woof"

rex = Dog("Rex")    # rex is an instance (object) of Dog
print(rex.name)     # -> Rex
print(rex.speak())  # -> Rex says woof
```

`rex` is one object; writing `fido = Dog("Fido")` gives a second, independent object with its own name. If a separate `Cat` class also defines a `speak` method, a loop can call `animal.speak()` on a mix of dogs and cats and get each type's own sound, which is polymorphism in action. Running this code prints exactly the values shown in the comments, confirming that the attribute stores the object's state and the method acts on it.

## Common Mistakes

- **Using "class" and "object" as if they mean the same thing.** A class is the blueprint; an object is one instance built from it. A single class can produce many objects, each with its own data.
- **Thinking OOP is a language, or that it just means "Java" or "Python."** OOP is a paradigm that many languages support. The same object can be modeled in Python, Java, or C++, and other paradigms (procedural, functional) exist alongside it.
- **Treating encapsulation and abstraction as the same pillar.** Encapsulation bundles data with its methods and restricts access to internal state; abstraction hides implementation detail behind a simple interface. They overlap but answer different questions.
- **Assuming any two classes that share a method name must be related by inheritance.** Polymorphism only needs a shared method name; the classes need not share a parent. Inheritance is a separate mechanism in which one class derives from another.
- **Expecting every method to run automatically when an object is created.** In Python only `__init__` runs automatically at instantiation. Every other method runs only when you explicitly call it on the object.

## Compare / Contrast

- **Class** vs **Object (instance)**: A class is a reusable blueprint defining attributes and methods; an object is a concrete instance holding its own data, created from that class.
- **Object-oriented programming** vs **Procedural programming**: OOP bundles data and the behavior that acts on it inside objects; procedural code keeps data separate and passes it to standalone functions.
- **Encapsulation** vs **Abstraction (OOP pillar)**: Encapsulation bundles data with methods and controls access to internal state; abstraction exposes essential behavior while hiding how it is implemented.
- **Method** vs **Standalone function**: A method belongs to a class and operates on an instance (which it receives, e.g. as `self`); a standalone function is not bound to any object.

## Key Takeaway

Object-oriented programming organizes a program around objects that bundle data (attributes) with behavior (methods); a class is the blueprint and each object is an instance of it. The four commonly-taught pillars (encapsulation, inheritance, polymorphism, and abstraction) name what objects let you do, and OOP is one language-agnostic paradigm among several.

## Practice Question Bank

1. **In object-oriented programming, an object bundles together which two things?**
   - A. A file and the directory path where it is stored
   - B. Data (attributes) and behavior (methods)
   - C. A variable and the data type it was declared with
   - D. A loop and the condition that ends it

   **Answer: B.** The defining move of OOP is packaging data (an object's attributes/state) together with the behavior (methods) that acts on it. A is unrelated to objects; C describes a variable declaration; D describes loop control.

2. **How are a class and an object related?**
   - A. They are two names for the exact same runtime value
   - B. An object is a blueprint from which many classes are built
   - C. A class stores an object's data while the object stores only its methods
   - D. A class is a blueprint, and an object is a specific instance created from it

   **Answer: D.** A class is a template that defines attributes and methods; an object is one concrete instance made from it. A treats them as identical; B reverses the relationship; C misplaces the data.

3. **Which OOP pillar is best described as bundling an object's data with the methods that use it while restricting direct outside access to that internal state?**
   - A. Encapsulation
   - B. Inheritance
   - C. Polymorphism
   - D. Recursion

   **Answer: A.** That description is encapsulation (with its information-hiding aspect). Inheritance derives one class from another; polymorphism is one method name behaving differently across types; recursion is not an OOP pillar.

4. **Consider this Python code:**

   ```python
   class Account:
       def __init__(self, balance):
           self.balance = balance
       def deposit(self, amount):
           self.balance += amount
   a = Account(100)
   ```

   **Which statement about it is correct?**
   - A. `balance` is a method and `deposit` is an attribute
   - B. `Account` is an instance of the object `a`
   - C. `a` is an instance of the class `Account`, `balance` is an attribute, and `deposit` is a method
   - D. Calling `deposit` runs automatically the moment `a` is created

   **Answer: C.** Account is the class, `a` is an instance, `balance` is an attribute set in `__init__`, and `deposit` is a method. A swaps the roles; B reverses class and instance; D is wrong because only `__init__` runs automatically at instantiation.

5. **A program loops over a list holding a Dog object and a Cat object, calling `animal.speak()` on each, and gets "woof" from one and "meow" from the other. Which OOP idea does this best illustrate?**
   - A. Inheritance, because Dog and Cat must share a common parent class
   - B. Polymorphism, because the same method call produces type-specific behavior
   - C. Encapsulation, because the sound data is hidden inside each object
   - D. Abstraction, because the loop discards all details about the objects

   **Answer: B.** One call, `animal.speak()`, yields different behavior depending on the object's type, which is polymorphism. A is wrong because polymorphism does not require a shared parent; C describes hiding state; D misstates abstraction, and the loop is using each object's behavior, not discarding it.

## Sources

- The Python Tutorial — Classes (Python Software Foundation), https://docs.python.org/3/tutorial/classes.html — "Classes provide a means of bundling data and functionality together"; defines methods, data attributes, and instantiation with `__init__`.
- Python Documentation — Glossary (Python Software Foundation), https://docs.python.org/3/glossary.html — definitions of class, object, method, and attribute.
- Object-oriented programming (Wikipedia, CC BY-SA 4.0), https://en.wikipedia.org/wiki/Object-oriented_programming — paradigm definition, class-vs-instance, the pillars, the note that OOP has no single agreed definition, and the procedural contrast.
- C++ Data Structures — 5.4: Difference between Inheritance and Polymorphism (Engineering LibreTexts, Delta College), https://eng.libretexts.org/Courses/Delta_College/C_-_Data_Structures/05:_Polymorphism/5.4:_Difference_between_Inheritance_and_Polymorphism — standard definitions of inheritance and polymorphism within the four-pillars framing (reference only; content adapted from GeeksforGeeks, CC BY-SA 4.0).

## Related Topics

- computer-science-fundamentals:foundations:abstraction
- computer-science-fundamentals:foundations:decomposition
- computer-science-fundamentals:foundations:functions
- computer-science-fundamentals:foundations:data-types
- computer-science-fundamentals:foundations:variables

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Researched at:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** reference-only sources; no source prose adapted; Python example independently written and verified by execution.
- **Transformation:** Facts synthesized from Python documentation, a reference encyclopedia article, and an open-courseware page; all prose original. The worked example was written and run in Python to confirm its output.
