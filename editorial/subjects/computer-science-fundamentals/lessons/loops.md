# Loops

## In 30 Seconds

A loop is a control structure that runs a block of code more than once so you do not have to copy it. A while loop keeps repeating while a condition stays true, which is useful when you do not know the count in advance. A for loop runs a definite number of times, usually stepping through a range or a collection. Every loop needs a body, something that changes each pass, and a condition that eventually stops it.

## Why This Matters

Almost every non-trivial program repeats work: totalling a bill, scanning a file line by line, retrying a network call, redrawing a game frame. Loops are how that repetition is expressed compactly and correctly, so mastering them is a prerequisite for reading real code and for later topics like searching, sorting, and complexity, where the count of loop passes determines how fast a program runs. Understanding termination conditions also builds the habit of asking "when does this stop?" - the same discipline that prevents frozen programs, and that carries directly into recursion, where a base case plays the role of a loop's stopping condition.

## Learning Objectives

- Define a loop and identify its three working parts: the body, the iteration/counter variable, and the termination condition.
- Distinguish a while loop (indefinite, condition-controlled) from a for loop (definite, count- or collection-controlled).
- Explain how break and continue change the normal flow of a loop.
- Diagnose what causes an infinite loop and apply the fix.
- Trace a counter-driven loop by hand and predict the final values it produces.

## The College Version

### What a loop is and its three parts

A loop is a control structure that repeats a block of statements, called the loop body, instead of writing that block out many times. Repetition is one of the three basic ways of controlling program flow, alongside running statements in sequence and branching with conditionals. Every loop has three working parts. First is the body: the statements that run on each pass, also called an iteration. Second is the state that changes from pass to pass, usually held in a variable - a counter that goes 1, 2, 3, or an iteration variable that takes on each item of a collection. Third is the termination condition: a Boolean test that decides whether the body runs again. A loop that never changes the state its condition depends on can never stop, so the changing variable and the condition must be designed together. A useful reading of any loop is to ask three questions: what does one pass do, what changes each pass, and what makes it stop.

### while loops versus for loops

The two everyday loop forms differ in how they decide to keep going. A while loop is condition-controlled and indefinite: it tests an expression before each pass and runs the body only while that expression is true, so the number of iterations is not fixed in advance. Use it when you cannot say up front how many passes you need - keep reading input until end-of-file, keep retrying until a connection succeeds. Because the test comes first, a while loop can run zero times if the condition is false at the start; this is called a top-tested loop. A for loop is typically definite and count- or collection-controlled: it repeats a set number of times or steps through the items of a sequence one at a time, binding each item to a loop variable. Use it when the number of passes is known or when you want to visit every element of a collection. Some languages also offer a bottom-tested loop (often written do-while) that checks its condition after the body and therefore always runs at least once. The forms are interchangeable in principle - any for loop can be rewritten as a while loop - but choosing the one that matches the problem makes code easier to read and less error-prone.

### Changing the flow: break and continue

Two statements let you override a loop's normal pass-by-pass flow. `break` exits the enclosing loop immediately, skipping any remaining iterations - useful when you are searching and have found what you wanted, so there is no reason to keep looking. `continue` abandons only the current pass and jumps to the next one, re-checking the condition or moving to the next item - useful when some elements should be skipped, such as ignoring blank lines while processing a file. Both operate on the innermost loop that contains them. They are conveniences, not necessities: the same behaviour can usually be written with a richer condition, but a well-placed break or continue often reads more clearly than the alternative. Overusing them, on the other hand, can make a loop's exit conditions hard to follow, so they are best kept to obvious, local decisions.

### Infinite loops: cause and cure

An infinite loop is one whose termination condition never becomes false, so the body repeats forever and the program appears to freeze. The classic cause is forgetting to update the variable the condition depends on: a counter that is supposed to climb toward a limit but is never incremented, or a "keep going" flag that is never cleared. The cure follows directly from the cause - guarantee that each pass makes measurable progress toward the stopping condition, and confirm the condition can actually be reached. Off-by-one errors are a milder cousin: a loop that stops one pass too early or too late usually comes from a boundary in the condition (`<=` versus `<`) rather than from missing progress. Not every infinite loop is a bug; an event loop or server is deliberately written to run until told to stop, in which case the exit is triggered by a break or an external signal rather than by a counter. The discipline of always asking "what makes this stop?" is the same one that, in recursion, becomes the requirement for a base case.

## Key Vocabulary

- **loop**: A control structure that executes a block of code repeatedly rather than once.
- **iteration**: A single execution of the loop body; one pass through the loop.
- **loop body**: The block of statements that runs on each iteration of the loop.
- **counter / iteration variable**: The variable whose value advances each pass - a running count, or the current item drawn from a collection.
- **termination condition**: The Boolean test that determines whether the loop runs another iteration or stops.
- **while loop**: A loop that tests a condition before each pass and repeats while the condition is true; the number of passes is not fixed in advance.
- **for loop**: A loop that repeats a definite number of times or steps through each item of a sequence, binding each to a loop variable.
- **break**: A statement that exits the enclosing loop immediately, skipping any remaining iterations.
- **continue**: A statement that ends the current iteration early and proceeds to the next one.
- **infinite loop**: A loop whose termination condition never becomes false, so it repeats without ever stopping on its own.

## Eli-10

A loop is a way of telling a computer "do this again" without writing the instruction out a hundred times. You give it the work to repeat, a way of keeping track of where you are, and a rule for when to quit. A while loop is like "keep stirring while the sauce is thin" - you stop the moment it is thick enough, and you do not know beforehand how long that takes. A for loop is like "do ten push-ups" - you count them off and stop at ten. If you forget the part that moves you toward the finish - you never check the sauce, you never count the push-up - you would go forever, and that is an infinite loop.

## Eli's Analogy

A loop is a washing-machine cycle. It repeats the same motion - fill, spin, drain - over and over, and a timer or sensor decides when the load is done and the machine stops.

**Where the analogy breaks down:** The washer's cycle is fixed by the manufacturer, but you write a loop's stopping rule yourself, and if you write it wrong it never stops - a washing machine will not run forever, but a buggy loop will. A washer also cannot "break" out early on the first spin or "continue" past one step the way loop statements can.

## Worked Example

Goal: add up the whole numbers from 1 to 5. With a while loop you keep a running total starting at 0 and a counter `i` starting at 1, then repeat while `i` is at most 5: add `i` to the total, then increase `i` by 1. Tracing it, `(i, total)` goes (1,1), (2,3), (3,6), (4,10), (5,15); on the next check `i` is 6, which fails `i <= 5`, so the loop stops with total 15 and the counter left at 6. A for loop expresses the same thing more directly: for each `n` in the range 1 through 5, add `n` to the total - visiting 1, 2, 3, 4, 5 and again giving 15. Both were run in Python 3 and agree with the formula n(n+1)/2 = 5*6/2 = 15. If you instead `break` the moment the running total passes 6, the loop stops at n=4 with total 10; if you `continue` past the odd numbers and add only the evens, the total is 2+4 = 6.

## Common Mistakes

- **Forgetting to update the counter or condition variable inside the body, so the test never changes.** Make sure every pass moves the loop toward stopping - increment the counter, advance to the next item, or clear the flag the condition checks.
- **Off-by-one errors from the boundary in the condition - looping one time too many or too few.** Check the exact comparison: `i <= 5` includes 5, while `i < 5` stops at 4. Trace the first and last passes by hand to confirm the range is right.
- **Reaching for a while loop when the number of repetitions is already known.** Use a for loop for a definite count or to walk a collection; save while for cases where you genuinely cannot predict how many passes are needed.
- **Confusing break with continue.** break leaves the loop entirely; continue only skips the rest of the current pass and moves on to the next iteration.
- **Assuming a while loop always runs at least once.** A while loop is top-tested, so if its condition is false at the start the body runs zero times; only a bottom-tested (do-while) loop guarantees one pass.

## Compare / Contrast

- **while loop** vs **for loop**: while is condition-controlled and indefinite (repeats while a test holds, count unknown in advance); a for loop is usually definite - a set number of passes or one per item in a sequence.
- **break** vs **continue**: break terminates the whole loop at once; continue ends only the current iteration and proceeds to the next.
- **top-tested loop (while)** vs **bottom-tested loop (do-while)**: a top-tested loop checks its condition before the body and may run zero times; a bottom-tested loop checks after the body and therefore runs at least once.

## Key Takeaway

A loop repeats its body under the control of a condition; write the changing variable and the stopping test together so the loop makes progress and actually terminates - use a while loop when the count is unknown and a for loop when it is known.

## Practice Question Bank

1. **Which statement best captures the difference between a while loop and a for loop?**
   - A. A for loop can repeat, but a while loop can only run its body once.
   - B. A while loop repeats while a condition stays true (count not fixed in advance), while a for loop usually repeats a definite number of times or over each item of a sequence.
   - C. A while loop counts upward automatically, while a for loop needs the programmer to write the count.
   - D. There is no difference; the two keywords are interchangeable names for the same construct.

   **Answer: B.** A while loop is condition-controlled and indefinite; a for loop is typically definite, repeating a set number of times or once per item in a collection. A is false (both repeat), C reverses reality, and D is wrong because they differ in how they decide to continue.

2. **What is the role of a loop's termination condition?**
   - A. It gives the loop a name so it can be called elsewhere.
   - B. It counts how many variables the loop declares.
   - C. It runs only once, after the loop has completely finished.
   - D. It is the Boolean test that decides whether the body runs again; when it becomes false, the loop stops.

   **Answer: D.** The condition is evaluated to decide whether another iteration happens; while true the body repeats, and once false the loop ends. A and B describe unrelated things, and C is wrong because the condition is checked repeatedly, not once at the end.

3. **A while loop starts with i = 1 and repeats 'add i to a total, then i = i + 1' while i <= 5. Immediately after the loop finishes, what is the value of i?**
   - A. 6
   - B. 5
   - C. 15
   - D. 1

   **Answer: A.** The body runs for i = 1..5; after the pass with i = 5 the update sets i = 6, and 6 <= 5 is false, so the loop exits with i = 6. 5 is the last value that entered the body, 15 is the resulting total (not the counter), and 1 is the starting value.

4. **A correct counting loop reads: i = 1; while i <= 5: (do work); i = i + 1. Which single change would turn it into an infinite loop?**
   - A. Initializing i to 1 before the loop begins.
   - B. Adding a print statement inside the loop body.
   - C. Removing the 'i = i + 1' line from the loop body.
   - D. Replacing '<=' with '<' in the condition.

   **Answer: C.** Removing the update leaves i stuck at 1, so i <= 5 is always true and the loop never ends. Initializing i and printing do not affect termination, and changing <= to < still terminates (it just stops one pass sooner).

5. **A loop walks n over 1,2,3,4,5. On each pass it runs 'if n is odd: continue' and otherwise adds n to a total that starts at 0. What is the total after the loop?**
   - A. 6
   - B. 9
   - C. 15
   - D. 0

   **Answer: A.** continue skips the rest of the pass whenever n is odd, so 1, 3, and 5 are never added; only the evens 2 and 4 are, giving 6. 15 is the sum of all five, 9 is 1+3+5 (the skipped ones), and 0 would mean nothing was added.

## Sources

- Python Software Foundation, *The Python Language Reference*, "8. Compound statements" (while, for, break, continue). https://docs.python.org/3/reference/compound_stmts.html
- OpenStax (Rice University), *Introduction to Computer Science*, "7.2 Programming Language Constructs." https://openstax.org/books/introduction-computer-science/pages/7-2-programming-language-constructs (CC BY-NC-SA 4.0)
- Allen B. Downey, *Think Python 2e*, "Chapter 7: Iteration." https://greenteapress.com/thinkpython2/html/thinkpython2008.html (CC BY-NC 3.0)

## Related Topics

- computer-science-fundamentals:foundations:conditional-statements
- computer-science-fundamentals:foundations:recursion
- computer-science-fundamentals:foundations:arrays
- computer-science-fundamentals:foundations:pseudocode
- computer-science-fundamentals:foundations:functions

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Research status:** source-verified
- **Rights status:** reference-only sources; no source prose adapted
- **Researched at:** 2026-08-19
- **Transformation:** Loop semantics drawn from the Python language reference and two CC-licensed OER texts; all prose original. The sum-1..5 worked example and the break/continue variants were executed and traced in Python 3 via Bash before publishing.
