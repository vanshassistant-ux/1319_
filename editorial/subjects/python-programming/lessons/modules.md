# Modules

## In 30 Seconds

A Python module is a Python file whose definitions and statements can be used from another file. An `import` statement finds a module, runs its top-level code when it is first loaded, and gives your program a name for that module. Keeping names inside a module helps organize code: write `math.sqrt(9)` rather than hoping a bare `sqrt` name means the same thing everywhere.

## Why This Matters

Modules let a program divide work into focused files and reuse dependable code, including Python's standard library. They also make dependencies visible: an `import` signals which outside names a file expects. Understanding import names and search paths makes common errors easier to diagnose, such as importing the wrong local file or using a function without its module qualifier. Packages and installation build on modules, but start with this smaller idea.

## Learning Objectives

- Define a Python module and its namespace.
- Distinguish `import module` from `from module import name`.
- Explain the basic role of the module search path.
- Apply qualified access to a name defined in an imported module.
- Interpret the usual values of `__name__` for imported and top-level code.

## The College Version

### A module is a named namespace

A module is a Python file containing definitions and statements. If a file is named `greetings.py`, its ordinary module name is `greetings`: the `.py` suffix is not part of the name used in an import. When Python loads that file, it creates a module object and gives the module its own namespace, a mapping of names to objects. A variable, function, or class defined at top level in that file belongs to that module namespace. This is one reason modules make larger programs manageable: names that would otherwise collide can be qualified by where they come from.

After `import math`, `math.sqrt` identifies the `sqrt` attribute of the `math` module. The dot tells Python to look up a name in the module object, rather than first treating `sqrt` as an unqualified name in the current file. Modules can contain executable top-level statements as well as definitions. Those statements are part of initialization, so importing a module is not simply copying text from one file into another. Keep top-level work modest and predictable.

### Import forms choose which names your file receives

The form `import greetings` binds the name `greetings` in the importing file. Code then reaches public content with qualified expressions such as `greetings.greet("Ada")`. This form preserves information about origin, which often improves readability and lowers the chance that two modules provide the same short name. `import greetings as welcome` instead binds the chosen alias `welcome`; the module itself has not been renamed on disk.

The form `from greetings import greet` has a different binding effect. It places `greet` directly in the importing scope, so the call can be written `greet("Ada")`. That can be convenient for a small, unambiguous import, but the qualification that showed its source is no longer present at each use. `from greetings import *` is generally a poor choice in ordinary application code because it makes many bindings appear implicitly and can overwrite names already present. These forms do not create different copies of a module's definitions. They specify how the importing scope refers to the loaded module.

### Finding, loading, and naming a module

Before Python can bind a module name, it must find the named module. For a normal import, the interpreter uses a search path exposed as `sys.path`. Its initial contents depend on how Python started and typically include the directory of the input script, or the current directory in interactive use, entries from `PYTHONPATH` when configured, and installation-dependent standard locations. This explains a frequent surprise: a file named `math.py` beside a script can be found before the standard-library `math` module. Naming a personal file after a standard-library module can therefore shadow the intended module.

After a module is found, Python normally initializes it the first time it is imported in a session and retains the resulting module object in `sys.modules`. Later imports of that name ordinarily reuse that object instead of rerunning all top-level statements. An import is not a request to restart a file. Call a function when you want an action repeated.

Every module receives a `__name__` binding. When `greetings.py` is imported as `greetings`, its `__name__` is usually `"greetings"`. When that file is the top-level program Python starts, its `__name__` is `"__main__"`. The special value describes execution context. Packages organize related modules, and installable distributions deliver code to users; both are separate ideas handled in the Packages lesson.

## Key Vocabulary

- **module:** A Python file containing definitions and statements that can be loaded under a module name.
- **namespace:** A mapping that associates names with objects within a particular context.
- **import:** A statement that finds and loads a module as needed, then creates specified name bindings.
- **qualified name:** A name reached through another namespace, such as `math.sqrt`.
- **module search path:** The ordered locations Python consults while locating modules.
- **sys.path:** The runtime list that exposes Python's module search path.
- **module object:** The object Python creates to represent a loaded module and hold its namespace.
- **__name__:** A module-level binding that identifies a module's execution name.

## Eli-10

Think of each module as a labeled drawer of instructions. A drawer named `greetings` can hold a note called `message` and a tool called `greet`. Writing `import greetings` gives your program a way to open that drawer, so `greetings.greet` clearly means the tool from that drawer. If you instead import just `greet`, you place that one tool on your desk, where its label no longer shows which drawer it came from. Python uses a list of places to look for the labeled drawer. If it finds a nearby drawer with the same label as a standard one, that nearby drawer can be chosen, which is why filenames matter.

## Eli's Analogy

A module is like a labeled drawer in a workshop. Importing the drawer lets you request a particular tool by drawer and tool name, such as `greetings.greet`. Real modules are runtime objects with executable initialization and name bindings; drawers do not run instructions or participate in a search path.

## Worked Example

Save this first file as `greetings.py` in an empty temporary directory:

```python
message = "hello"

def greet(name):
    return f"{message}, {name}"

print(__name__)
```

In the same directory, run:

```bash
python3 -c 'import greetings; print(greetings.greet("Ada")); print(greetings.message)'
```

It prints:

```text
greetings
hello, Ada
hello
```

The first line comes from `greetings.py` while Python imports it; because it was imported, its `__name__` is `greetings`. The command receives the module binding `greetings`, then uses qualified names to call `greet` and read `message`. Running `python3 greetings.py` instead makes that first line `__main__`. This example was executed with Python 3.

## Common Mistakes

- **Mistake:** Assuming `import helpers` puts every helper name directly in the current file. **Correction:** Use qualified access such as `helpers.format_title`.
- **Mistake:** Naming a local file after a standard-library module. **Correction:** Use a distinctive project filename.
- **Mistake:** Expecting another import to rerun top-level code. **Correction:** Call a function for behavior that should run repeatedly.
- **Mistake:** Treating a package or distribution as exactly the same as a module. **Correction:** Start with a module as one Python file.

## Compare / Contrast

- **`import greetings` vs. `from greetings import greet`:** The first binds the module name and uses `greetings.greet`; the second binds `greet` directly.
- **Imported module vs. top-level script:** An imported module commonly has its module name in `__name__`; top-level code has `__main__`.
- **Module vs. package:** A module is a Python file; a package organizes related modules.

## Key Takeaway

Modules organize Python code into named namespaces. Choose an import form deliberately, use qualified names when their origin helps readers, and remember that Python must find and initialize a module before it can bind it.

## Practice Question Bank

1. What is the ordinary module name for `reports.py`? **Answer: C, `reports`.**
2. After `import geometry`, which expression accesses `area`? **Answer: D, `geometry.area`.**
3. What does `from tools import clean` do? **Answer: A, it binds `clean` directly.**
4. Why can a nearby `math.py` shadow the standard library? **Answer: B, the search path can include the local directory first.**
5. When `greetings.py` is imported as `greetings`, what is `__name__`? **Answer: C, `greetings`.**

## Sources

- Python Software Foundation, [The Python Tutorial — Modules](https://docs.python.org/3/tutorial/modules.html)
- Python Software Foundation, [The Python Language Reference — The import system](https://docs.python.org/3/reference/import.html)
- Python Software Foundation, [__main__ — Top-level code environment](https://docs.python.org/3/library/__main__.html)

## Related Topics

Variables; Scope; Packages; Running Python Programs; Small Executable Python Examples.

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only official documentation; no source prose adapted. Researched 2026-08-19.
