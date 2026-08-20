# Installing Python

## In 30 Seconds

Installing Python means obtaining a Python 3 interpreter appropriate for your operating system, then confirming which interpreter your terminal will use. `python3 --version` checks a version, while `sys.executable` reveals the exact interpreter running code. For a project, `python3 -m venv .venv` creates a separate environment so project-specific tools do not get mixed with other projects.

## Why This Matters

A computer can contain more than one Python interpreter, and a terminal command is only useful if you know which one it selects. Verifying the version and path prevents setup problems before an assignment or project begins. Virtual environments give one project its own Python context, which is useful when projects later need different third-party dependencies.

## Learning Objectives

- Identify a platform-appropriate route for obtaining Python 3.
- Verify an interpreter's version and executable path.
- Distinguish an interpreter installation from a virtual environment.
- Create an isolated project environment with `venv`.
- Check whether a process is using a virtual environment.

## The College Version

### An installation is an interpreter, not just an icon

Python source code is carried out by a program called the Python interpreter. Installing Python therefore means placing an interpreter and its standard library on the machine in a way the operating system can find. The official documentation organizes setup separately for Windows, macOS, and Unix platforms because native installation mechanisms and command discovery rules differ. Start from official Python setup guidance for your platform rather than treating a command copied from another operating system as universal. On a managed computer, an instructor or organization may specify a supported installation method; follow that method when it exists.

This lesson stops at acquiring and identifying Python. Working interactively, running scripts, and installing third-party packages are separate skills. The goal here is dependable interpreter selection: you should be able to say what program will run Python code and where it came from.

### Verify the command your shell selects

After setup, check the interpreter before relying on it. On systems where the Python 3 command is named `python3`, run `python3 --version`. This asks that executable to print its version; it does not prove that every possible Python command on the machine refers to the same program. To inspect the exact executable from Python itself, use `python3 -c 'import sys; print(sys.executable)'`. The `-c` option supplies a one-line command, and `sys.executable` reports the absolute path of the executable running it.

Together, these checks answer distinct questions: which release is this, and which file supplied it? A result such as `Python 3.12.x` is not a promise about a class requirement; compare it with the version a course or project specifies. If a command is not found, return to platform-specific setup guidance or use the command documented by the installation method you chose.

### Why a project gets its own environment

A virtual environment is a lightweight directory representing an isolated Python context for one project. The standard library supplies `venv` to create one. From a project directory, `python3 -m venv .venv` creates an environment in a folder conventionally named `.venv`; that name is a convention, not a special keyword. The documentation describes an environment as having its own Python binary and site-packages directory. This lets a project keep installed add-ons separate from another project's add-ons, without claiming that the project has installed a new programming language.

The environment is based on a Python interpreter that already exists. First obtain a base interpreter, then make a project environment from it. Do not delete or move an environment casually after configuring a project; recreate it with the intended interpreter when the project needs a fresh one.

### Activation is a convenience, not the environment itself

Many setup guides tell you to activate an environment. Activation changes shell settings, chiefly PATH, so typing `python` resolves to the environment's interpreter first. It is useful at an interactive terminal, but the environment exists even when it is not activated. A tool or automation can invoke its interpreter by path instead. On macOS and Linux that interpreter is typically `.venv/bin/python`; on Windows it is typically `.venv\\Scripts\\python.exe`.

A diagnostic after selecting the intended interpreter is `python -c 'import sys; print(sys.prefix != sys.base_prefix)'`. In a venv, the documented comparison is true: `sys.prefix` points to the environment while `sys.base_prefix` refers to the base installation. That checks isolation without becoming a guide to interactive programming or package installation.

## Key Vocabulary

- **Python interpreter:** The program that executes Python code and provides the standard library.
- **Python 3:** The current major language line identified by version numbers beginning with 3.
- **executable:** A file the operating system can run as a program.
- **PATH:** Directories a shell searches when you enter a command without a full path.
- **virtual environment:** A lightweight, project-specific Python context with its own interpreter path and site-packages directory.
- **base interpreter:** The existing Python installation from which a virtual environment is created.

## Eli-10

Think of Python as a translator. You write Python instructions, but the computer needs the translator program—the interpreter—to carry them out. Installing Python puts that translator on your computer. Checking its version is like checking which edition of a dictionary you picked up: two editions can be similar but not identical. Checking its path tells you which physical copy you actually grabbed.

A virtual environment is a smaller workspace for one project. It starts with a real Python interpreter already installed, then gives the project its own labeled shelf for extra tools. That prevents one project's choices from quietly spilling into another's. You can activate the workspace so your terminal reaches it first, but the workspace is still there even if you point directly to its Python program.

## Eli's Analogy

Imagine a building with several identical-looking toolboxes. `python3 --version` reads the model label on the toolbox you opened, and `sys.executable` tells you its storage location. A `.venv` is a project-specific toolbox beside the workbench.

The comparison has limits. A virtual environment is not a sealed computer or a wholly separate Python installation: it is a directory built from a base interpreter. The toolbox image also hides PATH rules, which can vary by shell and platform.

## Worked Example

A student first runs `python3 --version`; on the checked system it printed `Python 3.9.6`. Next, `python3 -c 'import sys; print(sys.executable)'` printed the full path of that interpreter. In a project folder, the student runs `python3 -m venv .venv`. They invoke the environment's Python and run `import sys; print(sys.prefix != sys.base_prefix)`. The result is `True`, confirming that this process has a virtual-environment prefix distinct from its base prefix. This verifies interpreter selection and isolation without installing packages or writing a program.

## Common Mistakes

- **Assuming every platform uses the same command.** Use the documented platform route and verify the executable afterward.
- **Treating a version check as a file-path check.** Check both `--version` and `sys.executable`.
- **Thinking a venv replaces Python.** A venv is made from an existing base interpreter.
- **Believing activation creates the environment.** Creation makes the directory; activation only changes shell lookup.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Python installation | virtual environment | An installation supplies a base interpreter; a venv is a project-specific context created from it. |
| version check | executable-path check | `--version` reports a release; `sys.executable` identifies the file that ran. |
| creating a venv | activating a venv | Creation builds the environment; activation changes shell command lookup. |

## Key Takeaway

A reliable Python setup is one you can identify: obtain the interpreter through the appropriate platform route, verify its version and path, then create a separate venv when a project needs its own context.

## Practice Question Bank

1. **What does `sys.executable` report?** The absolute path of the executable running that interpreter.
2. **What is `.venv` relative to the base installation?** A project-specific environment created from a base interpreter.
3. **What confirms the selected interpreter is in a venv?** `sys.prefix != sys.base_prefix`.
4. **Why can activation help without being required?** It makes the environment's commands appear first in shell lookup.
5. **What should follow a correct version check when behavior is surprising?** Print `sys.executable` to identify the full path.

## Sources

- Python Software Foundation, [Setup and Usage](https://docs.python.org/3/using/)
- Python Software Foundation, [Command line and environment](https://docs.python.org/3/using/cmdline.html)
- Python Software Foundation, [`sys.executable`](https://docs.python.org/3/library/sys.html#sys.executable)
- Python Software Foundation, [`venv`](https://docs.python.org/3/library/venv.html)

## Related Topics

- Running Python Programs
- Packages
- Debugging

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-19 using reference-only official Python documentation; no source prose was adapted. Python command examples and the venv verification were executed with `python3`.
