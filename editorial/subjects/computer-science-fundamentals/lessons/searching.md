# Searching

## In 30 Seconds

Searching means finding a particular item in a collection. Two classic methods anchor the idea. Linear search checks elements one at a time, works on any data, and runs in O(n). Binary search needs a sorted collection: it looks at the middle, throws away the half that cannot hold the target, and repeats, running in O(log n). The trade is that binary search is far faster but pays the price of requiring sorted input.

## Why This Matters

Search is one of the most common things software does, from looking up a contact to querying a database, so the choice of method shapes real performance. Linear versus binary search is also the cleanest first lesson in algorithmic thinking: two correct procedures for the same problem with very different costs, and a precondition (sorted data) that changes which one you may use. Understanding why binary search's halving gives O(log n) growth builds the intuition you will reuse for sorting, trees, and complexity analysis throughout a computer science curriculum. It also teaches a habit of engineering judgment: the fastest algorithm is not free when its requirements cost something.

## Learning Objectives

- Define searching and describe linear (sequential) search and binary search.
- Explain how binary search uses lo, hi, and mid to halve a sorted range.
- Explain why binary search requires sorted input and linear search does not.
- Distinguish the time complexity of linear search (O(n)) from binary search (O(log n)).
- Apply each method by tracing it on a small array and counting comparisons.

## The College Version

### Linear search: check them one at a time

Searching is the problem of finding whether (and where) a target value appears in a collection. The most direct method is linear search, also called sequential search: start at the first element and compare each one to the target in turn, stopping the moment you find a match or reach the end. NIST's Dictionary of Algorithms and Data Structures defines it simply as searching a list by checking items one at a time. Its great virtue is generality. Because it never assumes anything about the order of the data, linear search works on any collection, sorted or not. Its cost grows in proportion to the number of elements: if the collection has n items, the worst case (the target is last, or absent) takes n comparisons, and on average about half that when the target is present. We summarize this as O(n) time. That linear relationship is the reason the method is called linear search.

### Binary search: halve a sorted range

When the collection is already sorted, you can do far better. Binary search keeps track of a range with two markers, a low index (lo) and a high index (hi), that initially span the whole array. Each step computes the midpoint mid = (lo + hi) / 2 (integer division) and compares the target to the element at mid. Three outcomes are possible. If they are equal, the search is done. If the target is smaller than the middle element, then, because the array is sorted, the target cannot lie in the upper half, so you move hi to mid - 1 and keep searching the lower half. If the target is larger, the target cannot be in the lower half, so you move lo to mid + 1. Each comparison discards roughly half of the remaining candidates. The search continues until the target is found or the range becomes empty (lo exceeds hi), which means the target is absent. Because the range shrinks by half each step, the number of comparisons needed is about log2(n), so binary search runs in O(log n) time. The practical difference is dramatic: doubling the size of the collection adds only one extra comparison in the worst case.

### Why sorting is the precondition, and how to choose

Binary search's speed rests entirely on one assumption: the data is sorted. The logic "the target is smaller, so discard the upper half" is only valid when every element to the right of mid is at least as large as the element at mid. On unsorted data that inference is false, so binary search can walk right past the target and report it missing. This is why real tools state the requirement explicitly; Python's bisect module, for instance, documents that it operates on lists kept in sorted order. Sorting a collection is its own task with its own cost (covered in the sorting topic) and is a genuine prerequisite: if you must sort first only to run one search, you may spend more time sorting than a single linear scan would have taken. As a rule of thumb, prefer linear search for small or unsorted collections and for one-off lookups; prefer binary search when the data is already sorted or will be searched many times, so the sorting cost is amortized across many fast queries. A third option sidesteps the comparison model entirely: a hash-based structure such as a dictionary or hash map can look a key up in average O(1) time without keeping the data ordered, a trade covered in the dictionaries-and-maps topic. The formal machinery for comparing O(n), O(log n), and O(1) growth belongs to the time-complexity topic; here it is enough to know that log n grows much more slowly than n, which is what makes binary search worth its sorted-input requirement.

## Key Vocabulary

- **Searching** — The task of determining whether a target value is present in a collection and, if so, where.
- **Linear (sequential) search** — A method that compares the target against each element in order until it finds a match or exhausts the collection.
- **Binary search** — A method for sorted collections that repeatedly compares the target to the middle of the current range and discards the half that cannot contain it.
- **Target (search key)** — The value you are trying to locate in the collection.
- **Sorted** — Arranged so that elements follow a consistent order (for example, ascending numeric order), the precondition binary search depends on.
- **Midpoint (mid)** — The index halfway between the current low and high bounds, computed as (lo + hi) using integer division by 2.
- **Search range (interval)** — The portion of the collection still under consideration, tracked in binary search by the lo and hi bounds.
- **Logarithmic time (O(log n))** — A growth rate in which the work increases by only a constant amount each time the input size doubles.

## Eli-10

Imagine finding a name in a phone book. Linear search reads every name from the front until it hits the one you want. Binary search opens to the middle: if your name comes earlier in the alphabet, you ignore the whole second half and open to the middle of the first half instead, and you keep splitting what's left in half. Linear search never needs the book to be in order, but it can be slow. Binary search is very fast, but it only works because the phone book is already alphabetized.

## Eli's Analogy

It's the higher-or-lower guessing game. If I pick a number from 1 to 100 and you guess 50, I tell you "higher" or "lower," and each guess cuts the possibilities in half, so you win in about seven tries instead of up to a hundred.

**Where the analogy breaks down:** The game only works because the numbers have an order you can compare against, just as binary search only works on sorted data. And "higher/lower" assumes an exact hidden number; a real search must also handle the case where the target is not in the collection at all, which binary search detects when its range becomes empty.

## Worked Example

Take the sorted array [1, 3, 5, 7, 9, 11] (indices 0 through 5) and search for 7 with binary search.

- **Step 1:** lo=0, hi=5, mid=(0+5)/2=2; arr[2]=5; since 7 > 5, discard the lower half and set lo=3.
- **Step 2:** lo=3, hi=5, mid=4; arr[4]=9; since 7 < 9, discard the upper half and set hi=3.
- **Step 3:** lo=3, hi=3, mid=3; arr[3]=7; match found at index 3.

That is three comparisons. For contrast, a linear search for 9 in the same array checks 1, 3, 5, 7, then 9, finding it at index 4 after five comparisons. Both traces were executed in Python to confirm the indices and counts.

## Common Mistakes

- **Running binary search on unsorted data.** Binary search is only correct on sorted input. On unsorted data its "discard the other half" logic is invalid and it can report a present value as missing. Use linear search, or sort first.
- **Thinking binary search is always the faster choice.** If the data is not already sorted, sorting it (typically O(n log n)) can cost more than a single O(n) linear scan. Binary search pays off when the data is already sorted or searched repeatedly.
- **Computing mid as (lo + hi) but forgetting integer division, or updating bounds to mid instead of mid ± 1.** Use mid = (lo + hi) / 2 with integer (floor) division, and move to mid - 1 or mid + 1 so the just-checked element is excluded; setting lo or hi back to mid can loop forever.
- **Assuming linear search must scan the whole collection every time.** Linear search stops as soon as it finds the target; scanning all n elements is only the worst case (target last or absent).
- **Treating O(log n) and O(n) as close because both grow.** They diverge fast: for a million items, linear search may need about a million comparisons while binary search needs about twenty.

## Compare / Contrast

- **Linear search** vs **Binary search** — Linear checks elements one by one and works on any data in O(n); binary halves a sorted range in O(log n) but requires sorted input.
- **Binary search (O(log n))** vs **Hash/dictionary lookup (average O(1))** — Binary search needs the data kept in sorted order and compares values; a hash map needs no ordering and locates a key by hashing, averaging constant time (covered in dictionaries-and-maps).

## Key Takeaway

Linear search checks each element in turn and works on any collection in O(n); binary search halves a sorted range using lo/hi/mid to run in O(log n) but requires sorted input. Match the method to whether the data is sorted and how often you will search it.

## Practice Question Bank

1. **In a linear (sequential) search, how is the target located?**
   - A. By checking each element in order until the target is found or the collection ends
   - B. By jumping to the middle element and repeatedly halving the range
   - C. By computing the target's position directly from a hash of its value
   - D. By sorting the collection first and then reading the final element

   **Answer: A.** Linear search compares the target to elements one at a time from the start, stopping at a match or the end. Halving a range describes binary search; computing a position from a hash describes hash-map lookup; sorting-then-reading is neither a search method nor correct.

2. **Binary search produces correct results only when the input collection is:**
   - A. Stored in a hash table
   - B. Sorted in order
   - C. Larger than one thousand elements
   - D. Made up of unique values with no duplicates

   **Answer: B.** Binary search relies on order: discarding a half is valid only if every element on one side of the midpoint is ordered relative to it, so the data must be sorted. It does not need a hash table, any minimum size, or distinct values.

3. **Running binary search on the sorted array [1, 3, 5, 7, 9, 11] to find 7, which element does the algorithm compare against first?**
   - A. 1, the first element
   - B. 7, the target value itself
   - C. 5, the middle element
   - D. 11, the last element

   **Answer: C.** The first midpoint is index (0 + 5) / 2 = 2, and arr[2] = 5, so the first comparison is against 5. Binary search starts in the middle, not at the first or last element, and it does not know where the target sits until it compares.

4. **A sorted array holds about 1,000,000 elements. Roughly how do the worst-case comparison counts compare for linear search versus binary search?**
   - A. Both need about 1,000,000 comparisons
   - B. Linear needs about 20; binary needs about 1,000,000
   - C. Both need about 20 comparisons
   - D. Linear needs about 1,000,000; binary needs about 20

   **Answer: D.** Linear search is O(n), so worst case is about n = 1,000,000 comparisons. Binary search is O(log n); log2(1,000,000) is about 20, so roughly 20 comparisons. The counts are not equal, and the roles are not reversed.

5. **You need to find a value in an unsorted list that you will search only once. Which approach fits, and why?**
   - A. Binary search, because it is always faster than linear search
   - B. Linear search, because binary search needs sorted data and sorting first would add its own cost for a single lookup
   - C. Binary search, after simply assuming the list is already sorted
   - D. Neither, because an unsorted list cannot be searched at all

   **Answer: B.** Binary search requires sorted input, and sorting an unsorted list (about O(n log n)) to run one search usually costs more than a single O(n) linear scan. Assuming a list is sorted when it is not makes binary search incorrect, and unsorted lists are perfectly searchable by linear search.

## Sources

- [NIST DADS — linear search](https://xlinux.nist.gov/dads/HTML/linearSearch.html)
- [NIST DADS — binary search](https://xlinux.nist.gov/dads/HTML/binarySearch.html)
- [OpenStax, Introduction to Computer Science, 3.5 Sample Algorithms by Problem](https://openstax.org/books/introduction-computer-science/pages/3-5-sample-algorithms-by-problem) (CC BY 4.0)
- [Python Standard Library — bisect](https://docs.python.org/3/library/bisect.html)
- [NIST DADS — algorithm](https://xlinux.nist.gov/dads/HTML/algorithm.html)

## Related Topics

- computer-science-fundamentals:foundations:sorting
- computer-science-fundamentals:foundations:arrays
- computer-science-fundamentals:foundations:time-complexity
- computer-science-fundamentals:foundations:algorithms
- computer-science-fundamentals:foundations:dictionaries-maps

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Research status:** source-verified
- **Rights status:** Authoritative reference sources (NIST DADS, Python docs) plus one CC BY OER (OpenStax, attributed); no source prose reproduced.
- **Researched at:** 2026-08-19
- **Transformation:** Facts drawn from NIST DADS, OpenStax, and Python documentation, synthesized into original prose. All numeric traces and complexity comparisons executed and verified in Python/Bash before publishing.
