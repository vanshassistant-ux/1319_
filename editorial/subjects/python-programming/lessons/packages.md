# Python Packages

## In 30 Seconds

In Python, an import package organizes modules under a dotted name such as `garden.tools`. It is different from a distribution package, the versioned artifact an installer handles. A regular package normally includes `__init__.py`; a namespace package is the intentional exception.

## Why This Matters

Packages give a growing program an address system for code. The distinction between an import name and an installer name avoids a common debugging error: assuming the name used to install a distribution must be the name used after `import`. Virtual environments are related but separate: they isolate a project's installed distributions.

## Learning Objectives

- Define an import package and a dotted module name.
- Distinguish regular and namespace packages.
- Explain the ordinary role of `__init__.py`.
- Distinguish import packages from distribution packages.
- Apply an import to a small package layout.

## The College Version

### Packages organize import names

An import package is an importable module that can contain submodules or other packages. Dotted names express that hierarchy: in `garden.tools`, `garden` is the package and `tools` is a module or subpackage. In `import garden.tools`, every component except the final component must be a package. This makes names useful addresses: `garden.tools` and `reports.tools` can remain distinct even though each ends in `tools`.

Packages are not merely folders. They are import-system concepts commonly represented by files and directories. They help a program group related code without placing every definition in one file. This lesson focuses on recognizing and designing those names, not the full algorithm Python uses to search for them.

### `__init__.py` and the namespace exception

A regular package normally has an `__init__.py` file. Python executes that file when the package is imported. It can be empty, or it can provide deliberate initialization and package-level names. It is not a requirement to put all application code there; distinct responsibilities commonly belong in distinct modules.

Python also supports native namespace packages. They have no `__init__.py` file and can combine portions found in multiple directories. Thus, “every package needs `__init__.py`” is too broad. For a straightforward small project, a regular package with the file is an explicit and clear design; a missing file can instead be intentional namespace-package design.

### Import package versus distribution package

The word package also appears in installation documentation. A distribution package is a versioned artifact handled by an installer. An import package is the hierarchy Python makes available to `import`. They often relate, but no one-to-one naming or boundary is guaranteed: one distribution can provide several import packages, and a namespace package can draw portions from multiple distributions.

A virtual environment is another separate concept. It isolates the Python environment and installed distributions for a project; pip is commonly used within it to install distributions. Package organization answers how code is named for imports. An environment answers which interpreter context and installed distributions a project is using. This lesson deliberately does not cover installation commands, build configuration, or dependency resolution.

## Key Vocabulary

- **import package:** An importable module that can contain submodules or packages.
- **dotted module name:** An import name with periods that expresses containment.
- **regular package:** A package form normally identified by an `__init__.py` file.
- **namespace package:** A package without `__init__.py` that can span multiple directories.
- **distribution package:** A versioned artifact an installer handles.
- **virtual environment:** An isolated Python environment for a project.

## Eli-10

Think of an import package as a labeled room in a library and `garden.tools` as a shelf inside it. The dotted label helps you find the right code without mixing it with another shelf called `tools`. A normal room has a sign called `__init__.py`; some advanced libraries intentionally combine several locations into one shared room, which is the namespace-package exception.

## Eli's Analogy

An import package is a labeled room-and-shelf address; a distribution package is a delivery box that may stock that address. The analogy stops there: real imports use Python's import system, and a distribution can include resources besides code.

## Worked Example

Create this layout:

```text
garden/
    __init__.py
    tools.py
app.py
```

In `garden/tools.py`:

```python
def common_name():
    return "fern"
```

In `app.py`:

```python
from garden import tools
print(tools.common_name())
```

The output is `fern`. `garden` is a regular package and `tools` is its submodule. This demonstrates import names, not an installation procedure.

## Common Mistakes

- Treating every folder as a package. Use the regular-package rule and the namespace exception.
- Assuming an installer name must be an import name. Read the distribution's documentation.
- Putting all application code in `__init__.py`. Use focused modules.
- Treating a virtual environment as a code package. It isolates an environment instead.

## Compare / Contrast

- **Import package vs. distribution package:** namespace used by `import` versus versioned installer artifact.
- **Regular vs. namespace package:** normally has `__init__.py` versus intentionally omits it and may span directories.
- **Package vs. virtual environment:** organizes code names versus isolates an interpreter environment.

## Key Takeaway

Packages give related modules clear dotted import names. Keep that import-time meaning separate from distribution artifacts and virtual environments.

## Practice Question Bank

1. What is an import package in Python? **Answer: B.**
2. In `import garden.tools`, what must `garden` be? **Answer: C.**
3. Which concept describes an intentional package without `__init__.py` that spans locations? **Answer: A.**
4. Why can an installer name differ from an import name? **Answer: C.**
5. What does a virtual environment isolate? **Answer: D.**

## Sources

- Python Software Foundation, *The Python Tutorial — Modules*: https://docs.python.org/3/tutorial/modules.html
- Python Software Foundation, *The import system*: https://docs.python.org/3/reference/import.html
- Python Packaging Authority, *Distribution package vs. import package*: https://packaging.python.org/en/latest/discussions/distribution-package-vs-import-package/
- Python Packaging Authority, *Install packages in a virtual environment using pip and venv*: https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/

## Related Topics

Modules; Files; Object-Oriented Programming; Basic Testing; Debugging.

## Editorial Metadata

Original EliExplains synthesis, researched 2026-08-19. Reference-only documentation sources; no source prose adapted. Status: source-verified, not published.
