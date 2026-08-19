# Sorting

## In 30 Seconds

Sorting means arranging items into a predetermined order, usually by a key such as a number or a name. The three simple comparison sorts - bubble, insertion, and selection - are easy to understand but do about n-squared work on n items. Two workhorses do far better: merge sort runs in n-log-n time, and quicksort averages n-log-n (with an n-squared worst case). A sort is called stable when it never reorders items that share the same key.

## Why This Matters

Sorting is one of the most-run operations in computing, and it is the classic lens for a deeper lesson: the same task can be solved by many correct algorithms that differ enormously in how much work they do. Learning why bubble sort's n-squared cost balloons on large inputs while merge sort's n-log-n stays manageable trains the instinct to compare algorithms before you commit to one. Sorted data also unlocks faster techniques downstream - binary search needs a sorted list to work - so ordering data first often pays for itself many times over. The habits here carry into any decision about organizing data efficiently.

## Learning Objectives

- Define sorting as arranging items into a predetermined order by a key.
- Describe how bubble, insertion, and selection sort work and state their O(n^2) cost.
- Explain why insertion sort can reach O(n) on nearly-sorted input.
- Name merge sort and quicksort and state their time complexities correctly.
- Explain what makes a sort stable and why stability matters.
- Trace bubble sort on a small list pass by pass and verify the sorted result.

## The College Version

### What sorting is

To sort is to arrange items into a predetermined order - ascending numbers, alphabetical names, newest-first timestamps. NIST's *Dictionary of Algorithms and Data Structures* defines it exactly that way and immediately makes an important point: there are dozens of sorting algorithms, and the right choice depends on the situation. The factors that matter include how many items you have relative to available working memory, how much you already know about the data's orderliness or the range of its keys, and the relative cost of comparing two keys versus physically moving an item. In other words, sorting is not one algorithm but a family of them, all producing the same ordered output while doing very different amounts of work to get there. Most of the classic sorts are **comparison sorts**: they decide the order purely by comparing pairs of keys and asking "does this one come before that one?" - never by looking inside the values in some other way. That single question, repeated in different patterns, is what separates the algorithms below.

### The three simple comparison sorts

Three sorts are worth knowing because they are easy to picture and they share the same cost. **Bubble sort** walks through the list comparing each adjacent pair and swapping any that are out of order, then repeats these passes until a full pass makes no swaps - the largest values "bubble" to the end one pass at a time. **Selection sort** repeatedly scans the unsorted remainder for the smallest item and moves it to the front of that remainder, building the sorted portion one confirmed-smallest element at a time. **Insertion sort** grows a sorted region on the left: it takes the next item and slides it back into its correct place among the items already sorted, the way you order a hand of playing cards. All three run in O(n^2) time in the worst and average case - on n items they do work proportional to n times n, because each of roughly n elements is compared against many others. They differ in the details: selection sort always does Theta(n^2) comparisons but only about n swaps, while insertion sort has a genuine advantage on data that is already nearly in order, where it approaches O(n) because most items need almost no movement. Bubble sort shares that near-sorted best case, dropping toward linear time when one clean pass finds nothing to swap.

### The efficient sorts: merge sort and quicksort

For large inputs the O(n^2) sorts become painfully slow, and two divide-and-conquer algorithms take over. **Merge sort** splits the list into two halves, recursively sorts each half, then merges the two sorted halves into one - a merge that walks both halves in a single linear pass. Its running time is Theta(n log n) in every case, the log n factor coming from the roughly log-base-2-of-n levels of splitting. **Quicksort** also divides: it picks a pivot element, partitions the rest into those smaller than the pivot and those larger, and recursively sorts each partition. On typical data quicksort runs in O(n log n) and is often the fastest sort in practice, but its worst case - when pivots repeatedly split off almost nothing, as on already-sorted data with a naive pivot choice - degrades to Theta(n^2). Both algorithms are recursive, calling themselves on smaller pieces until the pieces are trivially sorted; recursion is its own topic, so here it is enough to know these sorts lean on it. A useful boundary result explains why n log n is the target: no comparison-based sort can beat O(n log n) comparisons in the worst case, so merge sort already hits that ceiling and quicksort hits it on average.

### Stability and choosing a sort

Beyond speed, sorts differ in a property called **stability**. A sort is stable when items that share the same key keep their original relative order in the output. Imagine sorting a list of employees already ordered by first name, then re-sorting by department: a stable sort leaves everyone within a department still in first-name order, while an unstable sort may scramble that secondary order. Stability is exactly what lets you sort by one key and then another to get a predictable multi-level ordering. It is a property of the algorithm, not of the data - merge sort and insertion sort are naturally stable, while simple quicksort and selection sort are not, unless specifically adapted. Putting it together, choosing a sort is a trade-off: the simple O(n^2) sorts are fine for small or nearly-sorted inputs and are easy to implement correctly; merge sort guarantees O(n log n) and stability at the cost of extra memory for merging; quicksort is usually fastest in practice but carries a worst case and is not stable by default. And once data is sorted, other operations get cheaper - most notably, binary search can find any item in a sorted list far faster than scanning it, which is covered in the searching lesson.

## Key Vocabulary

- **Sorting** - Arranging a collection of items into a predetermined order, such as ascending numeric or alphabetical order, according to a key.
- **Key** - The value an item is ordered by during a sort - for example a person's last name or an order's timestamp.
- **Comparison sort** - A sorting algorithm that determines order solely by comparing pairs of keys to see which should come first.
- **Bubble sort** - A simple sort that repeatedly compares adjacent items and swaps out-of-order pairs, passing over the list until no swaps are needed; O(n^2) in general.
- **Insertion sort** - A sort that builds a sorted region by taking each next item and inserting it into its correct place among the items already sorted; O(n^2) overall, O(n) on nearly-sorted input.
- **Selection sort** - A sort that repeatedly finds the smallest remaining item and moves it to its final position; Theta(n^2) comparisons but only about n swaps.
- **Merge sort** - A recursive divide-and-conquer sort that splits the list in half, sorts each half, and merges them; Theta(n log n) in all cases and stable.
- **Quicksort** - A recursive sort that partitions items around a chosen pivot and sorts the partitions; average O(n log n), worst case O(n^2).
- **Stable sort** - A sort in which items with equal keys keep their original relative order in the output.
- **Time complexity** - A description of how an algorithm's running time grows as the input size grows, such as O(n^2) or O(n log n); analyzed in depth in its own topic.

## Eli-10

Sorting just means putting things in order - smallest to biggest, or A to Z. There are slow, simple ways and fast, clever ways. The simple ways, like bubble sort, look at two neighbors at a time and swap them if they are in the wrong order, going over the pile again and again until nothing is out of place. That works, but on a big pile you end up doing a huge number of little checks. The clever ways, like merge sort, split the pile into smaller piles, put each small pile in order, and then zipper the sorted piles back together - which turns out to need far fewer steps. One more idea: a sort is "stable" if it never shuffles two things that are equal. If two people have the same last name, a stable sort keeps them in the order they were already in, which is handy when you sort by one thing and then another.

## Eli's Analogy

Think of alphabetizing a stack of graded papers. Bubble sort is checking each pair of neighbors and swapping the ones out of order, then going through the whole stack again and again until a full pass needs no swaps. Merge sort is smarter: split the stack in half, alphabetize each half, then merge the two alphabetized halves by repeatedly taking whichever top paper comes first. Splitting and merging reaches the finished stack in far fewer moves than swapping neighbor by neighbor.

**Where the analogy breaks down:** The paper stack hides the cost story that makes sorting interesting. With a small stack every method feels instant, so you never see why bubble sort's work explodes and merge sort's stays gentle as the stack grows into the thousands. The analogy also glosses over memory: merge sort needs room to hold the merged piles, a real trade-off a computer must pay, and it says nothing about quicksort's pivot idea or its bad worst case.

## Worked Example

Trace bubble sort on the list `[5, 2, 4, 1]`, comparing each adjacent pair left to right and swapping when the left value is larger.

**Pass 1:**

- Compare `5` and `2` - swap -> `[2, 5, 4, 1]`
- Compare `5` and `4` - swap -> `[2, 4, 5, 1]`
- Compare `5` and `1` - swap -> `[2, 4, 1, 5]`

The largest value, 5, has bubbled to the end.

**Pass 2:**

- Compare `2` and `4` - no swap
- Compare `4` and `1` - swap -> `[2, 1, 4, 5]`

**Pass 3:**

- Compare `2` and `1` - swap -> `[1, 2, 4, 5]`

A final check pass finds nothing to swap, so the algorithm stops. The result is `[1, 2, 4, 5]`. This trace, including each pass, was executed in Python 3 via Bash on 2026-08-19; the final list matches `sorted([5, 2, 4, 1])` exactly. Notice the pattern: four elements took three passes, and each pass placed at least one more value in its final spot - the source of the O(n^2) cost.

## Common Mistakes

- **Thinking bubble, insertion, and selection sort have different big-picture speeds.** All three are O(n^2) in the worst and average case. They differ in constants and details (selection does fewer swaps; insertion and bubble can hit O(n) on nearly-sorted data), not in their overall order of growth.
- **Claiming quicksort is always O(n log n).** Quicksort averages O(n log n) but has an O(n^2) worst case when pivots split off almost nothing. Merge sort, by contrast, is O(n log n) in every case.
- **Assuming every sorting algorithm keeps equal items in their original order.** Only stable sorts guarantee that. Merge sort and insertion sort are stable; plain quicksort and selection sort are not unless specifically adapted.
- **Believing you must sort a list before you can find a single value in it.** A simple linear scan finds a value in any order. Sorting pays off when you will search many times - a sorted list enables binary search - not for a one-off lookup.
- **Treating O(n^2) as merely "twice as slow" as O(n log n).** The gap widens with size. At a million items, n-squared is a trillion operations while n-log-n is about twenty million - a difference of tens of thousands of times, not a factor of two.

## Compare / Contrast

- **Bubble / insertion / selection sort vs. Merge sort / quicksort** - The first group is O(n^2) - simple to write and fine for small inputs. The second is divide-and-conquer and much faster on large inputs: merge sort O(n log n) always, quicksort O(n log n) on average.
- **Merge sort vs. Quicksort** - Merge sort guarantees O(n log n) in every case and is stable, but needs extra memory to merge. Quicksort is usually faster in practice and sorts in place, but has an O(n^2) worst case and is not stable by default.
- **Stable sort vs. Unstable sort** - A stable sort preserves the original relative order of items with equal keys; an unstable one may reorder them. Stability is what makes sorting by one key and then another produce a predictable multi-level order.
- **Best case vs. Worst case** - These describe the same algorithm on different inputs. Insertion sort is O(n) on nearly-sorted data (best) but O(n^2) on reverse-sorted data (worst); quicksort is O(n log n) typically but O(n^2) on unlucky pivots.

## Key Takeaway

Sorting arranges items into order by a key; the simple comparison sorts (bubble, insertion, selection) are all O(n^2), while merge sort is O(n log n) and quicksort averages O(n log n) with an O(n^2) worst case - and a sort is stable when it preserves the original order of equal-keyed items.

## Practice Question Bank

1. **Which statement best describes what a sorting algorithm does?**
   - A. It locates a target value inside an unordered collection
   - B. It arranges items into a predetermined order by a key
   - C. It removes duplicate items so each value appears once
   - D. It counts how many items a collection contains

   **Answer: B.** Sorting means arranging items into a predetermined order according to a key, as NIST defines it. Locating a target value is searching, a different problem; removing duplicates and counting items are other operations entirely.

2. **What is the worst-case time complexity shared by bubble sort, insertion sort, and selection sort?**
   - A. O(n^2)
   - B. O(n log n)
   - C. O(log n)
   - D. O(1)

   **Answer: A.** All three simple comparison sorts do work proportional to n times n in the worst and average case, which is O(n^2). O(n log n) is the class of the efficient sorts; O(log n) describes binary search; O(1) is constant time, far too fast for a general sort.

3. **Which statement correctly describes a stable sorting algorithm?**
   - A. It always runs in O(n log n) time no matter the input
   - B. It sorts the data without using any additional memory
   - C. It works only on numeric keys and never on text
   - D. It preserves the original relative order of items that have equal keys

   **Answer: D.** A stable sort keeps items with equal keys in the same relative order they had on input, which makes multi-key sorting predictable. Stability says nothing about running time, memory use, or key type - those are separate properties.

4. **You run bubble sort on [5, 2, 4, 1], comparing adjacent pairs left to right and swapping when the left value is larger. What is the list after the first complete pass?**
   - A. [1, 2, 4, 5]
   - B. [2, 4, 5, 1]
   - C. [2, 4, 1, 5]
   - D. [4, 2, 1, 5]

   **Answer: C.** Pass 1 does three adjacent comparisons: 5 vs 2 -> [2, 5, 4, 1]; 5 vs 4 -> [2, 4, 5, 1]; 5 vs 1 -> [2, 4, 1, 5]. The largest value, 5, ends at the far right. The list is not yet fully sorted (that is option A, the final result after later passes).

5. **A team needs to sort very large datasets and is comparing merge sort with quicksort. Which statement about their time complexities is correct?**
   - A. Quicksort is average O(n^2) and worst-case O(n log n)
   - B. Quicksort averages O(n log n) but has an O(n^2) worst case, while merge sort is O(n log n) in every case
   - C. Both are guaranteed O(n log n) in every case with no worst-case difference
   - D. Quicksort averages O(n) while merge sort is worst-case O(n log n)

   **Answer: B.** Quicksort typically runs in O(n log n) but degrades to O(n^2) on bad pivots; merge sort is Theta(n log n) in the best, average, and worst case. Option A reverses quicksort's cases, C wrongly denies quicksort's worst case, and D invents a sub-linear average no comparison sort can achieve.

## Sources

- NIST, *Dictionary of Algorithms and Data Structures* - entry "sort": <https://xlinux.nist.gov/dads/HTML/sort.html> (U.S. Government work; public domain). Definition of sorting and the factors driving algorithm choice.
- NIST, *Dictionary of Algorithms and Data Structures* - entries "bubble sort," "insertion sort," and "selection sort": <https://xlinux.nist.gov/dads/HTML/bubblesort.html>, <https://xlinux.nist.gov/dads/HTML/insertionSort.html>, <https://xlinux.nist.gov/dads/HTML/selectionSort.html> (public domain). Mechanisms and O(n^2) complexities of the simple sorts.
- NIST, *Dictionary of Algorithms and Data Structures* - entries "merge sort," "quicksort," and "stable sort": <https://xlinux.nist.gov/dads/HTML/mergesort.html>, <https://xlinux.nist.gov/dads/HTML/quicksort.html>, <https://xlinux.nist.gov/dads/HTML/stable.html> (public domain). Merge sort O(n log n), quicksort average/worst complexities, and the stability definition.
- OpenStax, *Introduction to Computer Science*, Section 3.5 "Sample Algorithms by Problem": <https://openstax.org/books/introduction-computer-science/pages/3-5-sample-algorithms-by-problem> (CC BY 4.0). Comparison-sort O(n log n) lower bound and the sorting-enables-binary-search link.
- Donald E. Knuth, *The Art of Computer Programming* (Vol. 3 covers sorting and searching): <https://www-cs-faculty.stanford.edu/~knuth/taocp.html> (reference only). Historical attribution for the systematic analysis of sorting algorithms.

## Related Topics

- `computer-science-fundamentals:foundations:searching`
- `computer-science-fundamentals:foundations:time-complexity`
- `computer-science-fundamentals:foundations:recursion`
- `computer-science-fundamentals:foundations:algorithms`
- `computer-science-fundamentals:foundations:arrays`

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Research status:** source-verified
- **Rights:** Public-domain NIST DADS definitions, CC BY 4.0 OpenStax OER (attributed, restated in original prose), and Knuth's copyrighted TAOCP cited for historical attribution only; all prose original, no passages reproduced.
- **Verification:** The bubble-sort worked example on [5, 2, 4, 1] was executed and traced in Python 3 via Bash on 2026-08-19; each pass and the final result [1, 2, 4, 5] match sorted([5, 2, 4, 1]).
