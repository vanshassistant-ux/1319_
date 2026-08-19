# Variables

## In 30 Seconds

A variable is a name bound to a value your program keeps in memory. You create the binding with an assignment, use the value by writing the name, and you can reassign the name to a new value later, which is why the value can change as the program runs. The name is not a physical box that holds the value; it is a label that currently refers to one. Good names describe what the value means.

## Why This Matters

Variables are the first tool you use to hold onto a result, a count, or an input so later code can use it. Almost every program you read or write is a sequence of bindings and rebindings, so a clear model of what a name refers to prevents a whole class of bugs: values that seem to change on their own, two names that unexpectedly share one object, and off-by-one confusion about when a value was last set. Naming values well also makes code readable, which is most of what professional programming rewards. The same mental model carries across languages, from Python to JavaScript to C, even though the syntax for declaring and assigning differs.

## Learning Objectives

- Define a variable as a named binding between an identifier and a value stored in memory.
- Distinguish declaring, assigning, and using a variable.
- Explain how reassignment rebinds a name so a variable's value can change over time.
- Apply identifier naming rules and choose descriptive names.
- Analyze the "labeled box" model and identify where it breaks down, including reassignment and two names sharing one object.

## The College Version

### What a variable actually is

A variable is a name that refers to a value. When you write `score = 10`, you are not stamping the number 10 onto a location called `score`; you are creating a binding that associates the identifier `score` with the value 10 that the program is keeping in memory. Using the variable means writing its name where you want its current value: `print(score)` looks up what `score` is bound to right now and uses that. This name-binding view is the one the language references actually use. Python's documentation states plainly that names refer to objects and that assignment is one of the operations that introduces such a binding. The distinction matters because it explains behavior the "box" picture cannot, which we return to below. A variable also has a value of some type (a number, a piece of text, a list, and so on); how types work is a separate topic, but it is worth knowing that the value the name refers to always carries a type.

### Declaration, assignment, and use

Three actions are easy to blur together. **Declaring** a variable brings the name into existence in a region of the program. **Assigning** gives the name a value. **Using** the name reads its current value. In some languages these are visibly separate steps: in JavaScript, `let total;` declares `total`, and a later `total = 5;` assigns to it, and before that assignment the declared-but-unset variable reads as `undefined`. JavaScript even offers three declaration keywords, `var`, `let`, and `const`, that differ in where the name is valid and whether it can be reassigned. Python has no separate declaration keyword: the first assignment both introduces the name and gives it a value, so declaration and assignment happen at once. Whichever language you use, the underlying trio is the same, and separating "the name exists," "the name has this value," and "read the name's value" keeps your reasoning straight.

### Values change: reassignment as rebinding

The word *variable* hints at the key feature: the value can vary. You change it by assigning again. Python's reference describes assignment statements as operations that "(re)bind names to values," and notes that if the name was already bound, it is rebound to the new value. So after `score = 10` then `score = score + 5`, the name `score` first refers to 10, then to 15; the right-hand side is evaluated using the old binding, and the result becomes the new binding. Reassignment does not edit the old value in place, it points the name at a different value. This is clearest with immutable values such as numbers and text: Python's glossary defines an immutable object as one with a fixed value, so producing a different string means creating a new string object and binding the name to it. The original value is simply no longer referred to by that name.

### Naming rules and good names

Identifiers follow mechanical rules and human conventions. Mechanically, a name may contain letters, digits, and underscores; it cannot begin with a digit; it is case sensitive, so `total` and `Total` are different names; and it cannot be a reserved keyword such as `if`, `def`, `class`, or `return`, because the language needs those words to parse structure. JavaScript adds the dollar sign as a legal character and uses its own keyword list, which is why naming rules are "mostly the same, details differ" across languages. Beyond legality, a good name states what the value means: `count_of_students` beats `c`, and `total_price` beats `x`. Readable names are not decoration; because programs are read far more often than written, a descriptive binding is documentation that cannot fall out of date the way a comment can.

### The box model and its limits

Beginners are often told a variable is a labeled box that holds a value, and as a first intuition that is fine: a name, a place, a value inside. But the box picture predicts things that are false. It suggests reassignment pours a new value into the same box, when in the name-binding model reassignment simply moves the label to a different value. More importantly, the box picture cannot explain **aliasing**. In Python, `a = [1, 2, 3]` then `b = a` binds two names to the very same list object, not to two boxes each holding a copy; appending through `b` is visible through `a`, because there is one value with two labels. Yet rebinding `b` with `b = [9]` moves only `b`'s label and leaves `a` untouched. Languages differ in how much of this they expose: some pass and store references (so aliasing is common), others copy values by default. The safe habit is to think "which value does this name currently refer to, and does any other name refer to the same value," rather than "what is inside this box."

## Key Vocabulary

- **Variable** — A name that refers to a value the program is keeping in memory; the association between the two is a binding.
- **Identifier** — The textual name itself, formed from letters, digits, and underscores, not starting with a digit, and not a reserved keyword.
- **Binding** — The association created between a name and a value; assignment is the operation that makes or changes it.
- **Declaration** — Bringing a variable name into existence in a region of the program, which in some languages is a step separate from giving it a value.
- **Assignment** — The statement that binds a value to a name, written in many languages as `name = value`.
- **Reassignment** — Assigning again to an existing name so it is rebound to a new value; this is how a variable's value changes over time.
- **Keyword** — A word reserved by the language for its own grammar (such as `if` or `return`) that therefore cannot be used as a variable name.
- **Immutable value** — A value that cannot be altered in place, so storing a different one means creating a new value and rebinding the name.
- **Aliasing** — The situation where two or more names are bound to the same object, so a change made through one name is visible through the others.

## Eli-10

A variable is a nickname you give to a value so you can talk about it later. When you say `score = 10`, you are telling the computer, from now on, when I say "score" I mean 10. Later you can change your mind: `score = 15` makes the same nickname point at a new number. Reading the nickname just gives back whatever it points at right now. Picking clear nicknames, like `number_of_players` instead of `n`, makes your program much easier to read.

## Eli's Analogy

A variable is like a name tag you clip onto a value, the way you might put a sticky note reading "the winner" on one runner. The note is not the runner; it just points at whoever counts as the winner right now. If a faster runner finishes, you peel the note off and stick it on the new leader, that is reassignment. And two different notes can point at the very same runner at once, which is aliasing.

**Where the analogy breaks down:** The note analogy can mislead: a runner exists whether or not a note points at them, but in code a value with no name pointing at it may be thrown away by the language. And unlike a physical note you move by hand, reassignment usually happens because you ran an assignment statement, and reading the name always gives its current target, never a stale one.

## Worked Example

Trace this Python fragment as a sequence of bindings. `score = 10` creates a binding: the name `score` refers to the value 10. `score = score + 5` first evaluates the right side using the current binding (10 + 5 gives 15), then rebinds `score` to 15; the value 10 is no longer referred to by `score`. Now aliasing: `a = [1, 2, 3]` binds `a` to a list, and `b = a` binds `b` to the same list object, not a copy. `b.append(4)` changes that one shared list, so printing `a` shows `[1, 2, 3, 4]` even though we only touched `b`. Finally `b = [9]` rebinds only `b` to a new list, so `a` still prints `[1, 2, 3, 4]`. Running this in Python confirms each step, and the pattern, evaluate the right side, then bind the name, is exactly how assignment works.

## Common Mistakes

- **Reading `name = value` as "name equals value," a claim of mathematical equality.** In most languages `=` is an assignment operator: it binds the value on the right to the name on the left. Equality is tested with a different operator such as `==`.
- **Believing a variable literally stores a value inside a box, so reassignment overwrites that box.** A variable is a name bound to a value; reassignment rebinds the name to a different value rather than mutating a fixed container.
- **Assuming `b = a` makes an independent copy, so changes to `b` cannot affect `a`.** For a shared mutable object the two names alias one value; mutating through `b` is visible through `a`. Only rebinding a name (not mutating the object) separates them.
- **Trying to use a reserved keyword or a digit-first token as a variable name, or expecting `Total` and `total` to be the same name.** Names cannot be keywords, cannot start with a digit, and are case sensitive; follow the identifier rules and choose descriptive names.

## Compare / Contrast

- **Declaration** vs **Assignment** — Declaration brings the name into existence; assignment gives the name a value. In JavaScript `let x;` declares and `x = 5;` assigns; in Python the first assignment does both at once.
- **Reassignment (rebinding a name)** vs **Mutation (changing a value in place)** — Reassignment moves a name to a different value and never affects other names; mutation changes the value itself, which every name bound to that value will see.
- **Variable name (identifier)** vs **The value it refers to** — The name is a label chosen by the programmer; the value is the data in memory. Many names can refer to one value, and one name can be rebound to many values over time.

## Key Takeaway

A variable is a name currently bound to a value, not a box that contains it: assignment creates the binding, reassignment moves the name to a new value, and two names can share one value, so always ask what a name refers to right now.

## Practice Question Bank

1. **Which statement most accurately defines a variable?**
   - A. A name bound to a value that the program is keeping in memory.
   - B. A fixed physical box in memory whose contents can never change.
   - C. A keyword the language reserves for controlling program flow.
   - D. A value that is guaranteed to stay the same throughout a program.

   **Answer: A.** A variable is a name (identifier) bound to a value, as the language references state. It is not a keyword (those are reserved words), and its whole point is that the value it refers to can change, so the "never changes" and "fixed box" options are wrong.

2. **In JavaScript, `let total;` appears on one line and `total = 5;` on a later line. What is the difference between the two lines?**
   - A. Both lines declare a new, separate variable named `total`.
   - B. The first line declares the variable; the second assigns it a value.
   - C. The first line assigns a value; the second only reads the value.
   - D. Neither line has any effect until the variable is used elsewhere.

   **Answer: B.** Declaration brings the name into existence, and a separate assignment gives it a value; before the assignment the declared variable reads as `undefined`. It is one variable, not two, and the first line does not assign a value, so the other options are wrong.

3. **A program runs `score = 10` and then `score = score + 5`. What does `score` refer to afterward, and why?**
   - A. 10, because assigning a name to itself leaves the value unchanged.
   - B. 5, because the second line replaces the value with the number added.
   - C. 15, because the right side is evaluated using the old value, then the name is rebound.
   - D. An error, because a variable cannot appear on both sides of an assignment.

   **Answer: C.** Assignment evaluates the right-hand side first (`score` is 10, so 10 + 5 is 15) and then rebinds `score` to 15. A name may appear on both sides; the old binding is read before the new one is made. Hence not 10, not 5, and not an error.

4. **In Python, `a = [1, 2, 3]`; then `b = a`; then `b.append(4)`. What does `a` refer to now, and what does this reveal about the "labeled box" model?**
   - A. `a` is `[1, 2, 3]`; `b` got its own copy, confirming each variable is a separate box.
   - B. `a` is `[4]`; appending replaces the whole list that both names share.
   - C. The code errors because two names cannot refer to one list.
   - D. `a` is `[1, 2, 3, 4]`; `a` and `b` are two names bound to one shared list, which the box model cannot explain.

   **Answer: D.** `b = a` binds `b` to the same list object as `a` (aliasing), so appending through `b` is visible through `a`: `a` becomes `[1, 2, 3, 4]`. This is exactly what the box-holds-a-copy picture gets wrong; the name-binding model explains it. There is no copy and no error.

5. **Which of the following is a valid identifier that follows the standard naming rules?**
   - A. `2nd_place`, because names may start with any character.
   - B. `total_score`, because it uses letters and an underscore and is not a keyword.
   - C. `return`, because reserved words make clear, descriptive names.
   - D. `final total`, because a space separates the two words of the name.

   **Answer: B.** `total_score` uses only letters and an underscore and is not reserved, so it is valid. `2nd_place` is invalid because a name cannot begin with a digit, `return` is a reserved keyword, and `final total` contains a space, which is not allowed in an identifier.

## Sources

- Python Software Foundation — *The Python Language Reference: Execution model (naming and binding)*. https://docs.python.org/3/reference/executionmodel.html (reference-only)
- Python Software Foundation — *The Python Language Reference: Simple statements (assignment statements)*. https://docs.python.org/3/reference/simple_stmts.html (reference-only)
- Python Software Foundation — *The Python Language Reference: Lexical analysis (identifiers and keywords)*. https://docs.python.org/3/reference/lexical_analysis.html (reference-only)
- Python Software Foundation — *Python Documentation: Glossary*. https://docs.python.org/3/glossary.html (reference-only)
- Mozilla / MDN Web Docs — *JavaScript Guide: Grammar and types*. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types (CC BY-SA 2.5; reference-only)
- Allen B. Downey / Green Tea Press — *Think Python 2e: Variables, expressions and statements*. https://greenteapress.com/thinkpython2/html/thinkpython2003.html (CC BY-NC 3.0; reference-only)

## Related Topics

- computer-science-fundamentals:foundations:data-types
- computer-science-fundamentals:foundations:operators
- computer-science-fundamentals:foundations:scope
- computer-science-fundamentals:foundations:functions
- computer-science-fundamentals:foundations:pseudocode

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Research status:** source-verified
- **Rights status:** reference-only sources (Python docs PSF, MDN CC BY-SA, Think Python CC BY-NC); no source prose adapted; all Python code executed and verified in python3
- **Researched at:** 2026-08-19
