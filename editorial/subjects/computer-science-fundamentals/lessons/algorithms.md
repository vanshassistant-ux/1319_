# Algorithms

## In 30 Seconds

An algorithm is a finite, well-defined, step-by-step procedure that turns some input into a desired output. It is the recipe, not the meal: a plan you could hand to any careful follower and get the same result. Knuth pins down five properties every algorithm has - finiteness, definiteness, effectiveness, input, and output - and the same problem can usually be solved by several different algorithms.

## Why This Matters

Every program you will ever write or use rests on algorithms, so learning to think in clear, finite, unambiguous steps is the skill that makes the rest of computer science possible. Being able to describe a procedure precisely - and to notice when two procedures solve the same problem with very different amounts of work - lets you reason about correctness before you touch a keyboard and compare designs before you commit to one. Outside programming, the same discipline sharpens how you write instructions, break down messy tasks, and judge whether a set of directions will actually finish and give the right answer.

## Learning Objectives

- Define an algorithm as a finite, well-defined procedure that transforms input into output.
- List and explain Knuth's five properties: finiteness, definiteness, effectiveness, input, and output.
- Distinguish the four common ways to express an algorithm: natural language, pseudocode, flowcharts, and code.
- Explain why one problem can have multiple correct algorithms that differ in efficiency.
- Apply a linear-scan algorithm to find the maximum of a list and trace its steps.

## The College Version

### What counts as an algorithm

An algorithm is a finite, well-defined sequence of steps that transforms input into output. NIST's Dictionary of Algorithms and Data Structures puts it compactly as a computable set of steps to achieve a desired result. Two words in that sentence do a lot of work. "Finite" means the procedure has to stop - a list of steps that could run forever is not an algorithm. "Well-defined" means each step is spelled out clearly enough that following it leaves no room for guessing. An algorithm is abstract: it is the method itself, independent of any programming language, machine, or person carrying it out. The word traces back to the ninth-century Persian mathematician al-Khwarizmi, whose treatise on arithmetic circulated in Latin as *Algoritmi de numero Indorum*; Europeans turned the Latinized "Algoritmi" into our modern "algorithm." Long before computers, the idea already meant a reliable step-by-step recipe for getting an answer.

### Knuth's five properties

In *The Art of Computer Programming*, Donald Knuth lists five properties that a genuine algorithm must have, and they are worth memorizing because they double as a checklist. **Finiteness:** the algorithm must always terminate after a finite number of steps. **Definiteness:** each step must be precisely and unambiguously defined, so there is exactly one thing to do at each point. **Effectiveness:** every operation must be basic enough that it can, in principle, be carried out exactly - a step like "now guess the best answer" is not effective. **Input:** zero or more quantities are supplied before the algorithm begins, taken from specified sets of values. **Output:** one or more quantities come out, standing in a specified relationship to the input. A procedure that skips any of these is something weaker - a heuristic, a vague guideline, or a program that might hang. When you evaluate a set of steps, run them against these five and the gaps usually jump out.

### Four ways to express the same procedure

The same algorithm can be written down in several forms, and choosing among them is a trade between how easily a human reads it and how directly a machine can run it. **Natural language** describes the steps in plain, deliberately precise sentences - closer to a recipe than to prose - which is readable but easy to make ambiguous. A **flowchart** draws each operation as a labeled block and uses arrows to show the order and the branches, which makes control flow visual. **Pseudocode** looks like a high-level programming language but is language-independent and is not meant to be run directly; it strips away syntax so you can focus on the logic. **Code** is the algorithm made executable in a specific language, at the cost of that language's rules and quirks. All four can capture one and the same procedure. Notice that the exact conventions of pseudocode are their own subject; here the point is only that expression and algorithm are separate - a good algorithm survives translation between all four forms.

### One problem, many algorithms

A crucial early realization is that a problem and an algorithm are not the same thing. "Sort these names alphabetically" is a problem; there are many different, all-correct algorithms that solve it, and they can differ enormously in how much work they do on large inputs. This is why "correct" is only the first question. Once you have two algorithms that both produce the right answer, you compare them on efficiency - roughly, how their running time or memory use grows as the input grows. That growth-rate analysis has its own vocabulary and its own topic (time complexity and Big-O), so this lesson only flags that the comparison exists rather than carrying it out. The habit to build now is to separate three questions and ask them in order: does the procedure finish, does it always give the right answer, and only then, how efficient is it? Specific searching and sorting algorithms are studied in their own lessons; they are simply well-known algorithms for well-known problems.

## Key Vocabulary

- **Algorithm** - A finite, well-defined sequence of steps that transforms input into output; a computable procedure for achieving a specified result, independent of any language or machine.
- **Finiteness** - The property that an algorithm always terminates after a finite number of steps rather than running forever.
- **Definiteness** - The property that every step of an algorithm is precisely and unambiguously specified, leaving no room for interpretation.
- **Effectiveness** - The property that each operation is basic enough to be carried out exactly, in principle by a person with paper and pencil.
- **Input** - The zero or more quantities supplied to an algorithm before it begins, drawn from a specified set of values.
- **Output** - The one or more quantities an algorithm produces, standing in a specified relationship to its input.
- **Pseudocode** - A language-independent, human-readable outline of an algorithm that resembles a programming language but is not meant to be executed directly.
- **Flowchart** - A diagram that expresses an algorithm as labeled operation blocks connected by arrows showing the order and branching of steps.
- **Efficiency** - A measure of how much time or memory an algorithm uses, typically judged by how that cost grows as the input size grows.

## Eli-10

An algorithm is a set of instructions clear enough that anyone who follows them exactly gets the same right answer, and the instructions always come to an end. Every step has to make sense on its own ("add these two numbers"), not leave you guessing ("pick a good number"). It needs something to start with, it gives something back, and it can never loop forever. The instructions are separate from how you write them down - you can say them out loud, draw them as boxes and arrows, sketch them in shorthand, or type them as real code, and it is still the same algorithm underneath.

## Eli's Analogy

An algorithm is like a recipe. A recipe takes ingredients (the input), gives you step-by-step directions anyone can follow, and ends with a finished dish (the output). Each step is exact - "bake at 350 degrees for 20 minutes," not "bake until it feels right" - and the recipe stops rather than going on forever. And just as two cooks can reach the same dish by different recipes, one problem can have several correct algorithms.

**Where the analogy breaks down:** A recipe tolerates vagueness ("salt to taste") that a real algorithm forbids - every step must be exact. Recipes never loop or branch the way algorithms do ("repeat until the list is empty; if the number is bigger, keep it"). And recipes are not usually compared for efficiency, whereas comparing how much work competing algorithms do is central to computer science.

## Worked Example

Problem: find the largest number in the list `[3, 9, 2, 7, 5]`.

Algorithm (linear scan): set `largest` to the first element, then walk through the rest, replacing `largest` whenever you meet a bigger value.

Trace:

- `largest` starts at **3**.
- Compare `9 > 3`? Yes -> `largest` becomes **9**.
- Compare `2 > 9`? No.
- Compare `7 > 9`? No.
- Compare `5 > 9`? No.
- The scan ends and returns **9**.

That is four comparisons for five elements - in general `n - 1` comparisons for `n` elements, one per element after the first. Two details make this a real algorithm: it is finite (it stops after the last element) and definite (each comparison has one clear outcome). It also needs a guard for the empty list, where there is no "first element" to start from. This procedure was executed and traced in Python to confirm it returns 9, matching the built-in maximum, and that it handles single-element and all-negative lists correctly.

## Common Mistakes

- **Treating "algorithm" and "computer program" as the same thing.** An algorithm is the abstract procedure; a program is that procedure implemented in a particular language. The same algorithm can be written in Python, Java, pseudocode, or a flowchart and stays the same algorithm.
- **Believing a set of steps is an algorithm even if it might never stop.** Finiteness is required. A procedure that can loop forever on some input is not an algorithm; it must always terminate after a finite number of steps.
- **Writing steps like "choose the best option" or "sort it somehow" and calling them algorithmic.** Definiteness and effectiveness are required. Each step must be precise and basic enough to carry out exactly, with no guessing about what to do next.
- **Assuming a problem has only one algorithm, or that any correct algorithm is as good as any other.** Most problems admit many correct algorithms, and they can differ hugely in efficiency. Correctness comes first, but comparing efficiency is why algorithm design matters.
- **Thinking you must find the maximum by first sorting the list.** A single linear scan finds the maximum in `n - 1` comparisons without sorting. Sorting does more work than the problem requires.

## Compare / Contrast

- **Algorithm vs. Program** - An algorithm is a language-independent procedure for solving a problem; a program is one concrete implementation of an algorithm in a specific programming language. One algorithm, many possible programs.
- **Definiteness vs. Effectiveness** - Definiteness means each step is unambiguously specified (you know exactly what to do); effectiveness means each step is basic enough to actually be done exactly. A step can be perfectly clear yet not effective, like "output the largest prime number."
- **Pseudocode vs. Code** - Pseudocode is a readable, language-independent sketch of the logic that is not meant to run; code is executable in a specific language with its full syntax. Both can express the same algorithm.
- **Correctness vs. Efficiency** - Correctness asks whether an algorithm always gives the right answer and terminates; efficiency asks how much time or memory it uses. An algorithm must be correct first, and only among correct algorithms does comparing efficiency make sense.

## Key Takeaway

An algorithm is a finite, well-defined, step-by-step procedure that turns input into output - satisfying Knuth's five properties (finiteness, definiteness, effectiveness, input, output) - and the same problem usually has several correct algorithms that differ in efficiency.

## Practice Question Bank

1. **Which statement best defines an algorithm?**
   - A. Any computer program written in a specific programming language
   - B. A finite, well-defined sequence of steps that transforms input into output
   - C. A mathematical proof that a problem can be solved
   - D. A physical hardware component that executes instructions

   **Answer: B.** An algorithm is an abstract, finite, well-defined procedure that transforms input into output - NIST calls it a computable set of steps to achieve a desired result. It is not tied to one language (that would be a program), it is not a proof, and it is not hardware.

2. **Which of the following is NOT one of Knuth's five required properties of an algorithm?**
   - A. Finiteness - it must terminate after a finite number of steps
   - B. Definiteness - each step is precisely and unambiguously specified
   - C. Effectiveness - each operation is basic enough to be carried out exactly
   - D. Efficiency - it must run in the fewest possible steps

   **Answer: D.** Knuth's five properties are finiteness, definiteness, effectiveness, input, and output. Efficiency is not among them: an algorithm can be genuinely correct yet slow. Efficiency matters when comparing competing algorithms, but it is not part of the definition.

3. **Which of these is a standard way to express an algorithm before writing it in a real programming language?**
   - A. Pseudocode, a language-independent outline of the steps that is not meant to be executed directly
   - B. A compiled binary executable produced by a specific compiler
   - C. A finished database table full of stored records
   - D. A network handshake between two servers

   **Answer: A.** Algorithms are commonly expressed in natural language, pseudocode, flowcharts, or code. Pseudocode reads like a high-level language but is not run directly, letting you focus on logic over syntax. The others are executable code, stored data, and a protocol exchange.

4. **You run the linear-scan find-maximum algorithm (start with the first element as the largest, then compare each remaining element to the current largest) on the unsorted list [7, 2, 9, 4]. Which statement is correct?**
   - A. It returns 7, because the algorithm keeps whatever the first element is
   - B. It cannot run, because the list must be sorted before you can find the maximum
   - C. It returns 9 after comparing each of the three remaining elements to the current largest
   - D. It returns 4, because the algorithm keeps the last element it looks at

   **Answer: C.** Starting with largest = 7, the scan compares 2 (no change), then 9 (largest becomes 9), then 4 (no change), and returns 9 - three comparisons for four elements, the general `n - 1` pattern. The list need not be sorted, and the algorithm keeps the greatest seen so far, not the first or last element.

5. **Two students each write a different, fully correct algorithm for the same sorting problem, and on large lists one runs noticeably faster than the other. What does this best illustrate?**
   - A. Only one of the two can be a real algorithm, since a problem has exactly one algorithm
   - B. The same problem can have multiple correct algorithms that differ in efficiency
   - C. The faster one must be incorrect, because correct algorithms always run at the same speed
   - D. Efficiency is unrelated to which algorithm you choose

   **Answer: B.** A single problem typically has many correct algorithms that differ in how their running time grows with input size - which is why algorithm design matters and why efficiency (studied under time complexity and Big-O) is separate from correctness. Both algorithms can be correct; speed does not make one wrong.

## Sources

- NIST, *Dictionary of Algorithms and Data Structures* - entry "algorithm": <https://xlinux.nist.gov/dads/HTML/algorithm.html> (U.S. Government work; public domain). Core definition and etymology.
- Donald E. Knuth, *The Art of Computer Programming, Volume 1: Fundamental Algorithms*, Section 1.1: <https://www-cs-faculty.stanford.edu/~knuth/taocp.html> (reference only). The five characteristic properties of an algorithm.
- Kansas State University, *CC 310 Textbook* - "Flowcharts and Pseudocode": <https://textbooks.cs.ksu.edu/cc310/01-review/02-flowchart-pseudocode/> (CC BY-NC-SA 4.0). Ways to express an algorithm.
- University of St Andrews, *MacTutor History of Mathematics Archive* - al-Khwarizmi: <https://mathshistory.st-andrews.ac.uk/Biographies/Al-Khwarizmi/> (reference only). Etymology of "algorithm."

## Related Topics

- `computer-science-fundamentals:foundations:pseudocode`
- `computer-science-fundamentals:foundations:searching`
- `computer-science-fundamentals:foundations:sorting`
- `computer-science-fundamentals:foundations:time-complexity`
- `computer-science-fundamentals:foundations:computational-thinking`

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Research status:** source-verified
- **Rights:** Reference-only sources (public-domain NIST, copyrighted Knuth used for attribution only, CC BY-NC-SA university OER, university history archive); all prose original, no passages reproduced.
- **Verification:** The find-maximum worked example was executed and traced in Python 3.9.6 via Bash; result (9) matches the built-in maximum, and empty/single/all-negative edge cases behave as described.
