# Recursion

## In 30 Seconds

Recursion is a technique where a function solves a problem by calling itself on a smaller version of that problem. Every correct recursive function has two parts: a base case that stops the calls, and a recursive case that moves toward the base case. Each call is stacked on the one before it, so the work unwinds once the base case is reached. Miss the base case and the calls never stop.

## Why This Matters

Recursion is one of the two fundamental ways to repeat work, alongside iteration, and it is the natural fit for anything with a nested or self-similar structure: file trees, parsers, sorting algorithms like merge sort and quicksort, and traversals of trees and graphs. Courses in data structures, algorithms, and programming languages assume you can read and write a recursive function fluently. Learning it well also builds a habit that pays off elsewhere: define a problem in terms of a smaller version of itself, pin down the case that needs no further work, and trust the rest to follow. The same discipline underlies mathematical induction and divide-and-conquer design.

## Learning Objectives

- Define recursion as a function that calls itself on a smaller subproblem.
- Distinguish the base case from the recursive case and explain the role of each.
- Explain how the call stack records recursive calls and why a missing base case causes a stack overflow.
- Trace a simple recursive function, such as factorial, through its wind-up and unwinding.
- Compare recursion with iteration as alternative ways to repeat work.

## The College Version

### What recursion is

Recursion is an algorithmic technique in which a function, to accomplish a task, calls itself on some part of that task. The definition sounds circular, and in a sense it is: a recursive function is defined partly in terms of itself. What keeps it from being useless circularity is that each call works on a smaller or simpler input than the one before, so the problem shrinks with every step and eventually becomes trivial. A recursive function is still an ordinary function. It has a name, takes arguments, and can return a value. The only thing that makes it recursive is that somewhere in its body it invokes itself. This lets you describe a large task by saying how to reduce it to a smaller instance of the same task, rather than spelling out every step. Problems with a naturally nested or self-similar shape, such as walking a folder that contains folders, are often far clearer written this way than with loops.

### The two required parts: base case and recursive case

Every correct recursive function needs two ingredients. The base case is the situation simple enough to answer directly, with no further recursion. It is the stopping point. The recursive case handles everything else: it breaks the problem into one or more smaller subproblems, calls the function on them, and combines the results into the answer. The recursive case must always move the input toward the base case, or the shrinking never happens. Think of factorial: the base case is `factorial(0) = 1`, answered outright; the recursive case is `factorial(n) = n * factorial(n - 1)`, which reduces `n` by one on each call and so marches steadily down to zero. If you write the recursive case but forget the base case, or write a base case the input can never actually reach, the function has no place to stop. That failure is not a minor bug; it is the defining way recursion goes wrong.

### The call stack and stack overflow

To understand why an unreachable base case is so damaging, you have to know how a computer keeps track of function calls. Every time a function is called, the program sets aside a small block of memory called a stack frame, holding that call's arguments, local variables, and the place to return to when it finishes. These frames live on the call stack, which behaves exactly like the stack data structure: the most recently added frame is the first one removed, last in, first out. (Stacks are their own topic; here the point is only that the call stack is one.) During recursion, each call pushes a new frame before the previous call has returned, so the frames pile up. When the base case is finally reached, that call returns, its frame is popped, and control flows back up through the waiting frames, each finishing its own bit of work. If the base case is never reached, frames keep piling up without ever being popped. The stack has a finite size, so eventually it runs out of room. This is a stack overflow. Python guards against it with a recursion limit, 1000 by default, and raises a `RecursionError` rather than letting the interpreter crash; other languages report a stack overflow in their own way.

### Recursion versus iteration

Recursion is not the only way to repeat work. Iteration, using a loop such as `for` or `while`, is the alternative, and any computation you can express one way you can express the other. The difference is where the bookkeeping lives. A loop repeats using explicit variables you manage yourself, and it reuses one region of memory as it goes. Recursion repeats by calling itself and lets the call stack hold the partial state of every unfinished call, which costs stack space proportional to how deep the recursion goes. That is the trade-off: recursion often expresses self-similar problems more directly and closely mirrors their mathematical definition, while iteration avoids the per-call stack cost and cannot hit a recursion limit. Neither is always right. Choose recursion when the problem's structure is itself recursive and the depth stays modest; reach for a loop when the repetition is flat and the depth could grow large.

## Key Vocabulary

- **Recursion** — A technique in which a function accomplishes a task by calling itself on a smaller part of that task.
- **Base case** — The condition simple enough to solve directly, with no further recursive call; it stops the recursion.
- **Recursive case** — The part of a recursive function that reduces the problem to smaller subproblems, calls itself on them, and combines the results.
- **Call stack** — The region of memory that records active function calls, one frame per call, in last-in, first-out order.
- **Stack frame** — The block of memory holding a single call's arguments, local variables, and return location.
- **Infinite recursion** — Recursion whose base case is missing or never reached, so the calls continue without end.
- **Stack overflow** — The error that occurs when the call stack runs out of space, typically from unbounded recursion.
- **Iteration** — Repeating work with a loop and explicit variables, the alternative to recursion.
- **Recursion limit** — A cap on how deep recursion may go before the language stops it; in Python the default is 1000, after which a `RecursionError` is raised.

## Eli-10

Recursion is solving a big job by doing one small piece and then handing the rest of the job, now slightly smaller, to another copy of yourself. Each copy does the same thing: one small piece, then pass the rest along. This only works if there is a moment when the job is so tiny that a copy can just finish it without passing anything on. That stopping moment is the base case. Without it, the copies keep handing work down forever and the whole thing jams up.

## Eli's Analogy

Imagine a line of people passing a sealed box back to find out how many boxes are inside. Each person opens their box, finds a smaller box, and passes it to the next person, saying "you count yours and tell me." The last person opens a box that is empty, says "zero," and hands the answer back. Now each person adds one and passes their total forward, until the first person has the full count. The empty box is the base case; the passing-back is the unwinding.

**Where the analogy breaks down:** The box line makes the calls look like different people, but in a real program every call runs the same single function; what actually differs is each call's own frame of variables on the call stack. And a real base case is a condition the function tests for, not a physical empty box, so the danger is subtler: if the boxes never got empty, the line would never stop, which is exactly the stack overflow the analogy cannot show you running out of people.

## Worked Example

Take `factorial(n)`, defined as 1 when `n` is 0 (the base case) and `n * factorial(n - 1)` otherwise (the recursive case). Trace `factorial(4)`.

The winding-up: `factorial(4)` needs `factorial(3)`, which needs `factorial(2)`, which needs `factorial(1)`, which needs `factorial(0)`. Now four frames are stacked and waiting. `factorial(0)` hits the base case and returns 1 with no further call. The unwinding then runs back up:

- `factorial(1)` returns `1 * 1 = 1`
- `factorial(2)` returns `2 * 1 = 2`
- `factorial(3)` returns `3 * 2 = 6`
- `factorial(4)` returns `4 * 6 = 24`

So `factorial(4) = 24`, and the function was called five times in all (`n = 4, 3, 2, 1, 0`). Verified by running the code: `factorial(4)` evaluates to 24, matching `4 * 3 * 2 * 1`.

## Common Mistakes

- **Writing the recursive case but forgetting the base case.** Always include a base case the input can actually reach; without it the calls never stop and the stack overflows (a `RecursionError` in Python).
- **Writing a base case that the recursive case never approaches** — for example decreasing `n` but testing for `n == -1` when `n` starts positive and can skip past it, or not shrinking the input at all. Make sure every recursive call moves the input strictly toward the base case, so the base case is guaranteed to be hit.
- **Believing recursion is a fundamentally different kind of power than loops.** Recursion and iteration can compute the same things; recursion trades call-stack space for a structure that often mirrors the problem more directly.
- **Thinking a deep but correct recursion is always safe.** Even correct recursion is bounded by the call stack; very deep recursion can exceed the limit (Python's default is 1000), so for large, flat repetition a loop may be the better choice.
- **Confusing the call stack with the stack data structure as separate ideas.** The call stack is a stack: frames are pushed and popped last-in, first-out. Understanding one explains the other.

## Compare / Contrast

- **Base case vs. Recursive case** — The base case is solved directly and makes no further call, stopping the recursion; the recursive case shrinks the problem and calls the function again.
- **Recursion vs. Iteration** — Recursion repeats by a function calling itself and stores partial state on the call stack; iteration repeats with a loop and explicit variables in reused memory.
- **Infinite recursion vs. An infinite loop** — Both never terminate, but infinite recursion keeps allocating stack frames and eventually overflows the stack, while an infinite loop reuses the same memory and can run indefinitely without exhausting the stack.

## Key Takeaway

A recursive function solves a problem in terms of a smaller version of itself; it must have a base case that stops the recursion and a recursive case that moves toward it, because every call stacks a frame and an unreachable base case overflows the stack.

## Practice Question Bank

1. **Every well-formed recursive function must include which two components?**
   - A. A loop and a counter variable
   - B. A base case that stops the recursion and a recursive case that moves toward it
   - C. A global variable and a return statement
   - D. A stack and a queue

   **Answer: B.** A recursive definition needs a base case (simple enough to solve directly, with no further call) and a recursive case (shrinks the problem and calls the function again). A loop and counter describe iteration; a global variable and return statement are neither required nor sufficient; a stack and queue are data structures, not parts of a function definition (the call stack is involved automatically, but you do not write it).

2. **A recursive function is written so that its base case can never actually be reached. What is the most likely result when it runs?**
   - A. It returns the correct answer, just more slowly than an iterative version
   - B. The compiler refuses to accept the program before it runs
   - C. It silently returns nothing and continues
   - D. The call stack grows until it overflows, raising an error such as Python's `RecursionError`

   **Answer: D.** With no reachable base case, each call pushes another frame that is never popped, so the call stack keeps growing until it runs out of space, a stack overflow; Python raises `RecursionError` at its recursion limit (1000 by default). It does not return a correct answer, most compilers cannot detect that a base case is unreachable, and the function does not quietly return nothing.

3. **Using `factorial(n) = 1` when `n` is 0 and `n * factorial(n - 1)` otherwise, what does `factorial(3)` evaluate to, and how many times is factorial called in total, counting the base case?**
   - A. 6, called 3 times
   - B. 3, called 3 times
   - C. 6, called 4 times
   - D. 9, called 4 times

   **Answer: C.** `factorial(3) = 3 * 2 * 1 = 6`. The calls are `factorial(3)`, `factorial(2)`, `factorial(1)`, and `factorial(0)`, which is four calls including the base case `factorial(0) = 1`. Options giving 3 or 9 miscompute the product, and counting only 3 calls omits the base case.

4. **Each time a recursive function calls itself, a new frame is added to the call stack and removed only when that call returns. Which description of the call stack, and of why deep recursion can run out of space, is correct?**
   - A. A stack (last-in, first-out): unreturned calls pile up as frames, and too many frames exhaust the stack's limited memory
   - B. A queue (first-in, first-out): calls are handled in arrival order, so memory stays bounded no matter the depth
   - C. A hash map: frames are looked up by key in constant time, so recursion depth does not matter
   - D. A fixed-size array: each new frame overwrites the previous one, losing the earlier call's data

   **Answer: A.** The call stack is a stack: the most recently pushed frame is the next one popped (last-in, first-out), and because the stack has finite memory, enough unreturned frames exhaust it, a stack overflow. It is not a FIFO queue, frames are not looked up by key in a hash map, and frames do not overwrite one another; each waiting call keeps its own frame until it returns.

5. **How does recursion differ from iteration as a way to repeat work?**
   - A. Recursion can solve problems that iteration fundamentally cannot
   - B. Recursion repeats by having a function call itself and uses the call stack to hold partial state, while iteration repeats with a loop and explicit variables in reused memory
   - C. Iteration always uses more memory than the recursive version of the same computation
   - D. Recursion never needs a stopping condition, whereas iteration always does

   **Answer: B.** Recursion and iteration can compute the same things; the real difference is mechanism and where state is stored. Recursion calls itself and keeps each unfinished call's state on the call stack; iteration loops and manages explicit variables in reused memory. So A is false (they are equivalent in power), C is backwards (recursion typically uses extra stack space), and D is false (a recursive function needs a base case, its stopping condition).

## Sources

- NIST, *Dictionary of Algorithms and Data Structures* — "recursion." https://xlinux.nist.gov/dads/HTML/recursion.html (public domain; definition and base/recursive-case framing).
- NIST, *Dictionary of Algorithms and Data Structures* — "stack." https://xlinux.nist.gov/dads/HTML/stack.html (public domain; call stack as a LIFO stack).
- Allen B. Downey, *Think Python* (3rd ed.), Chapter 5: Conditionals and Recursion. https://allendowney.github.io/ThinkPython/chap05.html (CC BY-NC-SA 4.0; base case, call-stack frames, infinite recursion).
- Python Software Foundation, *sys — System-specific parameters and functions* (recursion limit). https://docs.python.org/3/library/sys.html (default limit 1000; `RecursionError`).
- Allen B. Downey, *Think Python* (2e), Chapter 3: Functions. https://greenteapress.com/thinkpython2/html/thinkpython2004.html (CC BY-NC 3.0; a recursive function is an ordinary function that calls itself).

## Related Topics

- computer-science-fundamentals:foundations:stacks
- computer-science-fundamentals:foundations:functions
- computer-science-fundamentals:foundations:loops
- computer-science-fundamentals:foundations:algorithms
- computer-science-fundamentals:foundations:time-complexity

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** reference-only sources; no source prose adapted; Think Python (CC BY-NC / BY-NC-SA) attributed, facts restated in original prose
- **Verification:** `factorial(4) = 24`, the default recursion limit of 1000, and `RecursionError` on base-case-free recursion were verified by running Python 3 in Bash.
