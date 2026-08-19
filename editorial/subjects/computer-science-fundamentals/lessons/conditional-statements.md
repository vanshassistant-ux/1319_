# Conditional Statements

## In 30 Seconds

A conditional statement lets a program choose what to do next. It tests a boolean condition and runs one block of code when the test is true and, optionally, a different block when it is false. Chaining tests with else-if lets a program pick exactly one path out of several, and conditionals can nest inside one another for finer decisions. This branching is how software responds differently to different inputs instead of running the same fixed steps every time.

## Why This Matters

Without conditionals a program is a straight line: the same instructions in the same order for every input. Conditionals turn that line into a decision tree, and almost every useful behavior depends on them. Validating a form, charging the right price, showing an error, retrying a failed request, and choosing a game move are all conditional decisions. Because a single wrong comparison or a mis-ordered branch can silently send the program down the wrong path, understanding exactly which branch runs, and why, is one of the most practical debugging skills you can build. The if/else pattern is also nearly universal: once you understand it in one language, you can read it in almost any other, since only the punctuation changes.

## Learning Objectives

- Define a conditional statement and explain how it changes a program's control flow.
- Distinguish the roles of if, else-if (elif), and else within a single conditional.
- Explain why an if/elif/else chain executes at most one branch and why branch order matters.
- Apply a conditional to classify an input, tracing which branch runs for given values.
- Distinguish a chained conditional from a nested conditional and from independent if statements.
- Identify switch/match statements as an alternative form of multi-way branching.

## The College Version

### What a conditional statement does

A conditional statement is a control-flow construct that lets a program decide, while it is running, which of several blocks of code to execute. It does this by evaluating a condition, an expression that resolves to a boolean value, either true or false, and then running code based on that result. Without conditionals, execution is purely sequential: every statement runs once, top to bottom, in the same order for every input. A conditional introduces a fork in that path, which is why the branches of a conditional are literally called branches.

The simplest form is a single `if`: it guards a block of code with a condition, and that block runs only when the condition is true. If the condition is false, the block is skipped and execution continues after it. The condition itself is any boolean expression, most often a comparison such as `x < 0` or `age >= 18`, possibly combined with the logical operators and, or, and not. Building and reasoning about those conditions is the subject of the boolean-logic and operators topics; here we focus on what the program does once a condition has produced true or false.

A conditional does not change what a condition evaluates to; it only chooses an action based on that value. Keeping those two ideas separate, evaluating the test versus acting on the result, is the key to reading any conditional correctly.

### if, else, and the else-if chain

Adding an `else` clause gives a conditional two alternatives instead of one. The structure now reads: if the condition is true, run the first block; otherwise run the else block. Exactly one of the two runs on every execution, never both and never neither. This two-way choice is called binary selection.

Often a program must choose among more than two possibilities, and for that we chain tests together. After the first `if`, each additional case is introduced by an else-if clause, spelled `elif` in Python and written as `else if` in many C-family languages. The Python tutorial notes that `elif` is simply short for "else if." The whole structure, an `if`, then zero or more `elif` clauses, then an optional `else`, forms one conditional statement, not several. Its defining behavior is that the program evaluates the conditions in order and stops at the first one that is true, executing that branch and skipping all the rest. The Python language reference states this precisely: the statement selects exactly one of the suites by evaluating the expressions one by one until one is found to be true, then that suite is executed and no other part of the statement is evaluated. If none of the conditions is true, the `else` branch runs; if there is no `else`, nothing runs.

Two consequences follow. First, at most one branch of a chain ever executes, so the branches are mutually exclusive by construction. Second, order matters: because the first true condition wins, a broad condition placed before a narrower one can capture cases meant for the later branch. Writing letter grades as `if score >= 70: 'C'` before `elif score >= 90: 'A'` is a real bug, because a score of 95 satisfies the first test and is labeled C; the `>= 90` branch is unreachable. Ordering conditions from most specific to most general, or using non-overlapping ranges, avoids this.

### Nested conditionals and independent ifs

A branch of a conditional can itself contain another conditional. This is called nesting, and it lets a program ask a follow-up question only after an earlier one has been answered. For example, a program might first check whether a number is non-negative and, inside that branch, check whether it is exactly zero. Nesting expresses a genuine dependency: the inner test is reached only when the outer condition held. Deeply nested conditionals become hard to read, so programmers often flatten them into an else-if chain or combine conditions with logical operators when the logic allows.

It is important not to confuse an else-if chain with a sequence of separate `if` statements. In an `if/elif/elif` chain, the tests share a single decision and only one branch can run. Writing the same tests as independent `if` statements, each on its own line with no `elif`, removes that link: every condition is evaluated on its own, and more than one block can run in a single pass. When the conditions are not mutually exclusive, that difference changes the output. The safe habit is to use a chain, or an explicit `else`, whenever the intent is to choose exactly one outcome.

### Multi-way branching: switch and match

When a program compares one value against many constant possibilities, a long else-if chain works but can be verbose. Many languages provide a dedicated multi-way construct for this pattern. C, Java, and JavaScript call it a `switch` statement, which matches a value against a series of `case` labels. Python does not have a `switch`; the tutorial states directly that an if/elif/elif sequence is a substitute for the switch or case statements found in other languages.

Python later added a related but more general construct, the `match` statement, in version 3.10 (specified in PEP 634). Rather than only comparing a scalar to constants the way a classic C `switch` does, `match` performs structural pattern matching: each `case` describes a shape or pattern that the subject value is tested against. For the plain job of picking one branch among several based on a value, `match`/`case` and a chained `if`/`elif` express the same idea; `match` becomes especially useful when the cases distinguish the structure or type of the data. Whichever form a language offers, the underlying concept is the same as the if/else you started with: evaluate something, then run exactly one path based on the result.

## Key Vocabulary

- **Conditional statement** — A construct that runs a block of code only when a stated condition holds, letting a program choose between different actions while it runs.
- **Condition** — A boolean expression, one that evaluates to true or false, that a conditional statement tests to decide which branch to run.
- **Branch** — One of the alternative blocks of statements a conditional can execute; only the branch whose path is selected actually runs.
- **Control flow** — The order in which a program's statements are executed; conditionals and loops alter it from a straight top-to-bottom sequence.
- **if statement** — The basic conditional: it runs its block only when its condition is true, and otherwise skips it.
- **else clause** — The fallback branch of a conditional that runs only when none of the preceding conditions were true.
- **elif (else-if)** — A clause that tests a further condition when earlier conditions were false, letting one conditional choose among several cases; "elif" is Python's spelling of "else if."
- **Binary selection** — A conditional with exactly two outcomes, an if block and an else block, so precisely one of the two runs.
- **Nested conditional** — A conditional placed inside a branch of another conditional, so the inner test is reached only when the outer condition held.
- **switch / match statement** — A dedicated multi-way branching construct that selects one case by comparing a value against several possibilities; Python's match (added in 3.10) generalizes this to structural patterns.

## Eli-10

A conditional statement is how a program makes a decision. It asks a yes-or-no question, and depending on the answer it does one thing or another. "If it is raining, take an umbrella" is a conditional: the question is "is it raining?", and the action depends on the answer. You can add more choices with else-if: "if it is raining take an umbrella, else if it is sunny take sunglasses, otherwise just go." The computer checks the questions in order, top to bottom, and the very first one that is true wins. It does that action and ignores all the others, even if a later one would also have been true. That is why the order you put the questions in matters.

## Eli's Analogy

Think of a choose-your-own-adventure book. At the bottom of a page it says "if you open the door, turn to page 40; otherwise turn to page 12." You check the condition, then you jump to exactly one page, never both. An else-if chain is like a page that lists several options, and you take the first line that matches your situation and stop reading the rest.

**Where the analogy breaks down:** In the book you decide which option fits; in a program the condition is evaluated mechanically and there is no judgment or in-between, only true or false. The book also lets you flip back and reread, but a conditional makes its choice once, in the moment, and moves on. And a real program's conditions can be far more layered than a single printed line, nesting decisions inside decisions.

## Worked Example

Let's classify a number as negative, zero, or positive with a chained conditional, in labeled Python:

```python
if n < 0:
    result = 'negative'
elif n == 0:
    result = 'zero'
else:
    result = 'positive'
```

Trace it for `n = -4`. The first condition, `-4 < 0`, is true, so `result` becomes `'negative'` and the whole statement ends; the elif and else are never even checked. Now trace `n = 0`. The first condition, `0 < 0`, is false, so we move to the elif: `0 == 0` is true, so `result` becomes `'zero'` and we stop. Finally trace `n = 7`. The first condition `7 < 0` is false and the elif `7 == 0` is also false, so the else branch runs and `result` becomes `'positive'`. Exactly one branch runs each time. Order matters here too: because the branches use non-overlapping conditions (`< 0`, `== 0`, and everything else), no earlier test can swallow a case meant for a later one. Running this in Python for -4, 0, and 7 confirms the outputs negative, zero, and positive.

## Common Mistakes

- **Writing separate `if` statements when only one outcome should happen, expecting the chain to stop after the first match.** Independent `if` statements are each evaluated on their own, so more than one can run. Use `elif` (or an `else`) to link the tests into one conditional where at most one branch executes.
- **Ordering an else-if chain from broadest condition to narrowest, so a wide condition captures cases meant for a later branch.** The first true condition wins and the rest are skipped, so put more specific conditions first. `if score >= 90: 'A'` must come before `elif score >= 70: 'C'`, not after.
- **Confusing the assignment operator with the equality comparison in a condition, for example writing `=` where `==` is meant.** A condition needs a comparison that yields true or false. Use `==` to test equality; `=` assigns a value and is not a test. (This topic's comparisons build on the operators topic.)
- **Assuming the `else` branch runs whenever the `if` condition is false, even in a longer chain.** In an if/elif/else chain, `else` runs only when every preceding condition, the `if` and all the `elif` tests, is false. Any earlier true condition means `else` is skipped.
- **Believing Python has a `switch` statement like C or Java.** Python has no `switch`; the documentation presents an if/elif/elif chain as the substitute, and version 3.10 added the more general `match` statement for pattern-based multi-way branching.

## Compare / Contrast

- **Chained conditional (if/elif/else) vs. Independent if statements** — A chain is one decision that runs at most one branch and stops at the first true test. A sequence of separate ifs evaluates every condition, so several blocks can run in the same pass.
- **Chained conditional (else-if) vs. Nested conditional** — A chain lays out mutually exclusive cases at the same level. Nesting puts one conditional inside a branch of another, so the inner test is reached only after the outer condition held.
- **if/elif chain vs. switch / match statement** — Both pick one path among many. A chain tests arbitrary boolean conditions in order; a switch/match compares one value against listed cases (and Python's match tests structural patterns, not just constants).

## Key Takeaway

A conditional statement tests a boolean condition and runs one branch based on the result. In an if/elif/else chain the first true condition wins and exactly one branch executes, so branch order matters; nesting and switch/match extend the same idea to layered and multi-way decisions.

## Practice Question Bank

1. **In an `if / elif / elif / else` statement where two of the conditions happen to be true, how many branches execute?**
   - A. Every branch whose condition is true
   - B. Both true branches, then the else
   - C. Exactly one: the branch of the first condition that is true
   - D. None, because more than one true condition is ambiguous

   **Answer: C.** The statement evaluates conditions in order and runs the suite of the first one found true, then skips the rest, so exactly one branch executes even if later conditions would also be true. The else runs only when no condition is true.

2. **A grading routine reads `if score >= 60: grade = 'pass'` / `elif score >= 90: grade = 'honors'` / `else: grade = 'fail'`. What grade does a score of 95 receive, and why?**
   - A. 'honors', because 95 is at least 90
   - B. 'fail', because only one branch may run
   - C. It raises an error because two conditions are true
   - D. 'pass', because `score >= 60` is checked first and is true

   **Answer: D.** Conditions are tested top to bottom and the first true one wins. For 95, `score >= 60` is already true, so grade becomes 'pass' and the `>= 90` branch is never reached. To fix it, the more specific `>= 90` test must come first. This is an ordering bug, not a runtime error.

3. **Using the classifier `if n < 0: 'negative' / elif n == 0: 'zero' / else: 'positive'`, what is the result for `n = 0`?**
   - A. 'zero', because the first condition is false and `n == 0` is true
   - B. 'negative', because 0 is not greater than 0
   - C. 'positive', because the else always runs when n is not negative
   - D. Both 'zero' and 'positive' run

   **Answer: A.** For n = 0 the first test `0 < 0` is false, so control moves to the elif; `0 == 0` is true, so the result is 'zero' and the else is skipped. The else runs only if every earlier condition is false, and only one branch executes.

4. **You rewrite an `if / elif / elif` chain as three separate `if` statements with the same conditions and actions. For an input that makes two of the conditions true, how does the behavior change?**
   - A. No change; separate ifs behave identically to an elif chain
   - B. Both matching blocks now run, whereas the chain would have run only the first
   - C. The program raises an error because conditions overlap
   - D. Only the last matching block runs instead of the first

   **Answer: B.** Separate `if` statements are independent decisions, each evaluated on its own, so every condition that is true fires its block. The elif chain is a single decision that stops at the first true condition. When conditions can overlap, that is a real behavioral difference, not an error.

5. **Python does not provide a `switch` statement like C or Java. According to Python's own documentation, what serves that role?**
   - A. A `for` loop iterating over the possible cases
   - B. Nothing; Python cannot express multi-way branching
   - C. An `if` ... `elif` ... `elif` ... sequence (with `match` available since 3.10 for pattern-based cases)
   - D. A `while` loop that breaks on the matching case

   **Answer: C.** The Python tutorial states that an if/elif/elif sequence substitutes for the switch or case statements of other languages, and version 3.10 added the more general `match` statement for structural pattern matching. Loops repeat actions rather than selecting one branch.

## Sources

- Python Software Foundation. *The Python Tutorial — 4. More Control Flow Tools (if Statements).* https://docs.python.org/3/tutorial/controlflow.html — supports if/elif/else syntax, "elif is short for else if," and the if/elif/elif substitute for switch/case.
- Python Software Foundation. *The Python Language Reference — 8. Compound statements (the if and match statements).* https://docs.python.org/3/reference/compound_stmts.html — supports the single-selection semantics (exactly one suite runs; first true condition wins) and match as a compound statement.
- Downey, Allen B. *Think Python* (3rd ed.), Chapter 5: Conditionals and Recursion. https://allendowney.github.io/ThinkPython/chap05.html — CC BY-NC-SA 4.0; supports the definition of a branch, binary selection, chained conditionals, and nested conditionals. Facts synthesized in original prose.
- Python Software Foundation. *PEP 634 – Structural Pattern Matching: Specification.* https://peps.python.org/pep-0634/ — dates the match statement to Python 3.10 and characterizes it as structural pattern matching rather than a scalar switch.

## Related Topics

- computer-science-fundamentals:foundations:boolean-logic
- computer-science-fundamentals:foundations:operators
- computer-science-fundamentals:foundations:loops
- computer-science-fundamentals:foundations:functions
- computer-science-fundamentals:foundations:pseudocode

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Research status:** source-verified
- **Rights status:** reference-only sources; no source prose adapted (Think Python is CC BY-NC-SA 4.0, attribution recorded, facts synthesized)
- **Researched at:** 2026-08-19
- **Transformation:** if/elif/else selection semantics, branch-order behavior, chained vs. independent-if vs. nested behavior, and the classify-a-number trace were verified by running Python in Bash before writing; all prose is original synthesis from authoritative references.
