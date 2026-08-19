# Time Complexity

## In 30 Seconds

Time complexity describes how an algorithm's running time grows as its input gets larger. Instead of timing a program in seconds, you count basic operations as a function of the input size n, keep only the fastest-growing term, and drop constants. The result is written in Big-O notation, such as O(n) or O(n squared). This lets you compare two algorithms fairly, on any machine, before you ever run them.

## Why This Matters

Time complexity is the vocabulary computer scientists use to argue about efficiency. It tells you which algorithm will still be fast when the data is a thousand times bigger, which is exactly when the choice matters. A quadratic method that feels instant on 100 records can lock up on 100,000; a logarithmic one barely notices. Every data-structures course, technical interview, and performance review leans on Big-O, so the notation is a shared language as much as a tool. Learning to reason about growth rates also trains a durable habit: judging a solution by how it scales, not by how it happens to run on today's small test case.

## Learning Objectives

- Define time complexity as the growth rate of an algorithm's operation count with respect to input size n.
- Explain the analysis method: count basic operations, keep the dominant term, and drop constant factors and lower-order terms.
- State the formal meaning of Big-O as an asymptotic upper bound and distinguish it from Big-Theta and Big-Omega.
- Order the common complexity classes from O(1) through O(2 to the n) and give an example of each.
- Apply the method to a worked example, deriving O(n) or O(n squared) by counting operations.
- Distinguish best-, average-, and worst-case analysis and explain why Big-O usually reports the worst case.

## The College Version

### What time complexity actually measures

Time complexity does not measure seconds. The same program runs faster on a newer laptop, faster again in a compiled language, and slower when the machine is busy, yet none of that tells you anything durable about the algorithm. What we want is a property of the method itself, independent of hardware and language. So instead of timing the clock, we count basic operations: comparisons, arithmetic steps, assignments, array accesses. We then ask how that count changes as the input grows. If a list has n items, does the work stay flat, grow in step with n, or explode? Time complexity is the answer to that question, expressed as a function of the input size n. Because it describes a rate of growth rather than a wall-clock time, the same analysis holds on a phone and a supercomputer. The trade-off is that it is deliberately coarse: it tells you how an algorithm scales, not exactly how long it will take.

### The method: count, keep the dominant term, drop the rest

Analysis follows three moves. First, count the basic operations as a function of n. A single pass over a list of n items does work proportional to n; a loop nested inside another loop, each running over the list, does work proportional to n times n. Second, keep only the dominant term, the one that grows fastest as n gets large. If an algorithm does n squared plus n plus 7 operations, the n squared term overwhelms the others once n is big, so it defines the growth. Third, drop constant factors. Whether each step of a loop does 2 operations or 20, the count is still proportional to n, and Big-O ignores that constant multiplier. The reason is that constants and lower-order terms depend on incidental details (how the code is written, the specific machine), while the dominant term captures the scaling behavior that survives all of those details. So 3n + 5 becomes O(n), and (n squared)/2 - n becomes O(n squared).

### Big-O notation and its formal meaning

Big-O is the notation that records the dominant growth rate. Informally, f(n) = O(g(n)) means f(n) is at most a constant multiple of g(n) for large n. Formally, following the standard definition, f(n) is O(g(n)) when there are positive constants c and k such that 0 <= f(n) <= c*g(n) for every n >= k. The key word is "at most": Big-O is an upper bound. This has a consequence students often find surprising. If an algorithm is O(n), it is also technically O(n squared) and O(2 to the n), because those are all valid (if loose) upper bounds. In practice we quote the tightest simple bound we can. Two companion symbols make the picture precise: Big-Omega expresses a lower bound (the running time is at least this), and Big-Theta expresses a tight bound where the upper and lower bounds match. When people say an algorithm "is O(n)," they usually mean it is Theta(n), but the upper-bound-only meaning of O is the technically correct one.

### The common complexity classes

A handful of growth rates cover most everyday algorithms, and they fall in a strict order: O(1) < O(log n) < O(n) < O(n log n) < O(n squared) < O(2 to the n). Constant time, O(1), does a fixed amount of work regardless of size, like reading array element number five or looking up a key in a dictionary (average case). Logarithmic time, O(log n), cuts the problem roughly in half each step, as binary search does on a sorted list; doubling the input adds only one step. Linear time, O(n), touches each element a fixed number of times, like scanning a list to find a value. O(n log n) is the speed of the best general-purpose sorting algorithms, such as merge sort. Quadratic time, O(n squared), compares every element against every other, common in naive nested-loop solutions. Exponential time, O(2 to the n), doubles the work each time the input grows by one and becomes impractical almost immediately. To make the gap concrete: at n = 1024, log(n) is 10, n is 1024, n*log(n) is 10240, and n squared is 1048576. The differences are not academic; they decide whether a program finishes.

### Best, average, and worst case

One algorithm can have several running times depending on the input. Consider scanning a list one item at a time to find a target. If the target is the first element, the scan stops immediately: that is the best case, O(1). If the target is last or missing, the scan checks all n elements: that is the worst case, O(n). The average case, assuming the target is equally likely anywhere, is about n/2 checks, still O(n). Big-O is usually quoted for the worst case, because a guarantee about the worst input is the safe one to design around. This is also why the input matters: binary search is O(log n) only if the list is already sorted, and a dictionary lookup is O(1) only on average, degrading to O(n) when too many keys collide. Time complexity is one axis of efficiency; space complexity, how memory use grows with n, is its companion and is covered in its own lesson.

### A note on where the notation came from

The O symbol is older than computer science. The number theorist Paul Bachmann introduced it in 1894, and Edmund Landau adopted and popularized it, which is why O and its lowercase partner o are called Landau symbols. Their concern was the growth of functions in analytic number theory, not algorithms. The move into computing is largely due to Donald Knuth, who in a 1976 note titled "Big Omicron and Big Omega and Big Theta" urged the field to adopt O, Omega, and Theta consistently and pointed out the common error of writing O when a lower bound (Omega) was meant. That standardization is why the notation is now a shared language across textbooks, courses, and interviews.

## Key Vocabulary

- **Time complexity** - A description of how the number of basic operations an algorithm performs grows as the input size n increases, independent of any particular machine or language.
- **Input size (n)** - The measure of how large the input is, such as the number of elements in a list; complexity is written as a function of it.
- **Basic operation** - A single elementary step counted during analysis, such as one comparison, arithmetic operation, assignment, or array access.
- **Big-O notation** - A way to write an asymptotic upper bound: f(n) is O(g(n)) if there are positive constants c and k with 0 <= f(n) <= c times g(n) for all n at least k.
- **Dominant term** - The fastest-growing part of an operation count, which determines the complexity class once n is large; lower-order terms are dropped.
- **Big-Omega** - Notation for an asymptotic lower bound: a running time that grows at least as fast as the given function.
- **Big-Theta** - Notation for a tight asymptotic bound, used when the upper and lower bounds match, so the function's growth is pinned from both sides.
- **Worst case** - The largest running time over all inputs of a given size; the case Big-O usually reports because it is the safe guarantee.
- **Constant time (O(1))** - A running time that does not depend on the input size; the work stays fixed as n grows.
- **Exponential time (O(2 to the n))** - A running time that roughly doubles each time the input grows by one element, becoming impractical for even modest n.

## Eli-10

Imagine you have a job to do, and the amount of stuff to do keeps getting bigger. Time complexity asks a simple question: when the pile of work doubles, does your job get twice as hard, barely harder, or way, way harder? We don't care about the exact minutes, because a fast computer changes those. We care about the shape of the growth. If checking one more item always adds the same tiny bit of work, that's "linear" and pretty friendly. If every new item forces you to compare it against everything already there, the work grows much faster, and that's the kind of algorithm that seems fine on small piles but chokes on big ones. We write these growth shapes with a letter O and the size n, like O(n), so anyone can compare two plans at a glance.

## Eli's Analogy

Think about finding a name in a phone book. Flipping through page by page from the front is like O(n): a book twice as thick takes twice as long. But because the book is alphabetized, you can open to the middle, decide which half the name is in, and throw the other half away, over and over. That halving is O(log n): doubling the book only adds one extra flip.

**Where the analogy breaks down:** The phone book only shows the friendly cases. It doesn't capture the ugly ones, like an O(n squared) task where you compare every name to every other name, or O(2 to the n), which explodes far faster than any book-flipping. It also hides that binary search's O(log n) only works because the book is sorted; on a shuffled book, halving tells you nothing and you're back to flipping page by page.

## Worked Example

Take an algorithm that checks whether a list of n numbers contains any duplicate by comparing every pair. The outer loop picks each element i, and the inner loop compares it against every later element j. Count the comparisons: element 0 is compared with n-1 others, element 1 with n-2, and so on down to 1, giving (n-1)+(n-2)+...+1 = n(n-1)/2 comparisons. For n = 5 that is 5*4/2 = 10, and for n = 10 it is 45 (both confirmed by running the loops). Now apply the method: n(n-1)/2 expands to (n squared)/2 - n/2. The dominant term is (n squared)/2; drop the lower-order n/2 term and the constant factor 1/2, and you are left with O(n squared). Contrast this with simply summing the same list: one loop, one addition per element, exactly n additions, which is O(n). The nested loop is the source of the quadratic blow-up, and spotting nested loops over the same data is the quickest way to recognize O(n squared) in the wild.

## Common Mistakes

- **Treating Big-O as an exact running time or a measurement in seconds.** Big-O describes the growth rate of an operation count, not a clock time. It deliberately ignores constants and hardware, so it predicts scaling, not the actual milliseconds on your machine.
- **Keeping constant factors and lower-order terms, writing things like O(3n + 5) or O(2n).** Drop constant factors and lower-order terms. O(3n + 5), O(2n), and O(n + 100) are all just O(n); only the dominant term, without its constant multiplier, belongs in the notation.
- **Assuming Big-O always means the exact (tight) bound.** Big-O is only an upper bound, so an O(n) algorithm is also technically O(n squared). Big-Theta is the notation for a tight bound; quote the tightest simple O you can, but know the difference.
- **Ignoring which case is being described, or assuming the best case.** State whether you mean best, average, or worst case. Big-O is normally quoted for the worst case, and preconditions matter: binary search is O(log n) only on sorted input, and dictionary lookup is O(1) only on average.
- **Assuming a nested loop is automatically O(n squared).** It is O(n squared) only when both loops scale with n over the same data. A loop that runs a fixed number of times, or an inner loop bounded by a constant, does not add a factor of n.

## Compare / Contrast

- **O(n) linear time vs. O(n squared) quadratic time:** Linear work grows in step with the input (double the data, double the work); quadratic work grows with the square (double the data, quadruple the work), which is why nested loops over the same list scale so much worse.
- **Big-O vs. Big-Theta:** Big-O states only an upper bound (at most this fast-growing), so it can be loose; Big-Theta states a tight bound where the upper and lower bounds match, pinning the growth exactly.
- **Worst case vs. best case:** The worst case is the slowest an algorithm can be over all inputs of size n and is what Big-O usually reports; the best case is the fastest and is often unrepresentative, so it is a weaker guarantee to design around.
- **Time complexity vs. space complexity:** Time complexity tracks how the operation count grows with n; space complexity tracks how memory use grows with n. They are separate axes and can trade off, and space complexity is its own lesson.

## Key Takeaway

Time complexity captures how an algorithm's work grows with input size: count basic operations, keep the dominant term, drop constants, and write the result in Big-O. Knowing the ordering O(1) < O(log n) < O(n) < O(n log n) < O(n squared) < O(2 to the n) lets you predict which algorithm will still be fast when the data gets large.

## Practice Question Bank

1. **In the Big-O expression O(n), what does n represent?**
   - A. The size of the input the algorithm is given
   - B. The number of seconds the algorithm takes to run
   - C. The number of lines of code in the algorithm
   - D. The number of times the program has been executed

   **Answer: A.** Time complexity is written as a function of the input size, conventionally called n (for example, the number of elements in a list). It is not a clock time, a code length, or a run count; Big-O deliberately abstracts away seconds and hardware to describe how work grows with input size.

2. **Which sequence lists the complexity classes correctly from slowest-growing to fastest-growing?**
   - A. O(n squared) < O(n log n) < O(n) < O(log n)
   - B. O(log n) < O(n) < O(n log n) < O(n squared)
   - C. O(n) < O(log n) < O(n squared) < O(n log n)
   - D. O(1) < O(n) < O(log n) < O(n log n)

   **Answer: B.** The standard order is O(1) < O(log n) < O(n) < O(n log n) < O(n squared) < O(2 to the n). Option B follows that order. Option A reverses it, and options C and D misplace O(log n), which grows more slowly than O(n), not faster.

3. **An algorithm loops over every element of a list of n items, and inside that loop it loops again over every element, doing a constant amount of work per pair. What is its time complexity?**
   - A. O(n)
   - B. O(log n)
   - C. O(n squared)
   - D. O(2 to the n)

   **Answer: C.** A loop nested inside another loop, each running about n times over the same data, does work proportional to n times n, which is O(n squared). O(n) would be a single pass; O(log n) requires halving the problem each step; O(2 to the n) requires the work to double for each added element, which a double loop does not.

4. **An algorithm performs exactly 3n + 5 basic operations on an input of size n. What is its time complexity in Big-O?**
   - A. O(3n + 5)
   - B. O(8n)
   - C. O(5)
   - D. O(n)

   **Answer: D.** Analysis keeps the dominant term and drops constant factors and lower-order terms. In 3n + 5, the dominant term is 3n; dropping the constant multiplier 3 and the lower-order constant 5 leaves O(n). O(3n + 5) and O(8n) wrongly keep constants, and O(5) wrongly discards the term that actually grows with n.

5. **A one-by-one scan of a list is fastest when the target is the first element (O(1)) and slowest when the target is last or absent (O(n)). When we say this scan "is O(n)," which case are we describing?**
   - A. The best case
   - B. The average case only
   - C. The worst-case upper bound
   - D. The space it uses rather than its time

   **Answer: C.** Big-O is normally quoted for the worst case, the slowest the algorithm can run over all inputs of size n, because that is the safe guarantee to design around. The best case here is O(1), the average case is still O(n) but is not what "the safe bound" refers to, and O(n) describes time, not memory (that would be space complexity).

## Sources

- NIST, *Dictionary of Algorithms and Data Structures* - entry "big-O notation": <https://xlinux.nist.gov/dads/HTML/bigOnotation.html> (U.S. Government work; public domain). Formal definition, the upper-bound framing, and the Theta/Omega links.
- MIT OpenCourseWare, *6.006 Introduction to Algorithms, Spring 2020*: <https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/> (CC BY-NC-SA 4.0; reference only). Analysis technique and complexity-class framing.
- Donald E. Knuth, "Big Omicron and Big Omega and Big Theta," *SIGACT News* 8(2), 1976, pp. 18-24: <https://dl.acm.org/doi/10.1145/1008328.1008329> (reference only). Standardization of O, Omega, and Theta in computer science.
- Python Software Foundation, *TimeComplexity* (Python Wiki): <https://wiki.python.org/moin/TimeComplexity> (reference only). Concrete operation complexities (list, dict) including average vs. worst case.
- Mathematical Association of America, *Math Origins: Orders of Growth*: <https://old.maa.org/press/periodicals/convergence/math-origins-orders-of-growth> (reference only). History of the O symbol (Bachmann 1894, Landau).

## Related Topics

- `computer-science-fundamentals:foundations:space-complexity`
- `computer-science-fundamentals:foundations:searching`
- `computer-science-fundamentals:foundations:sorting`
- `computer-science-fundamentals:foundations:algorithms`
- `computer-science-fundamentals:foundations:recursion`

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Research status:** source-verified
- **Rights:** Reference-only sources (public-domain NIST DADS, CC BY-NC-SA MIT OpenCourseWare, copyrighted Knuth note used for attribution only, Python wiki facts, MAA history article); all prose original, no passages reproduced.
- **Verification:** The worked example (n(n-1)/2 pair comparisons, the linear sum, and the class-growth values at n = 1024) was executed and checked in Python 3 via Bash; the pair count matches n(n-1)/2 for n in {1,2,5,8,10}, and the complexity-class ordering is strictly increasing.
