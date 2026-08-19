# Arrays

## In 30 Seconds

An array is a fixed-size, contiguous block of memory holding elements, usually all of one type, numbered by an integer index that starts at zero. Because the elements sit next to each other and are the same size, the computer can jump straight to any one of them by computing its address, so reading element i takes constant time no matter how big the array is. That speed comes with a trade: the size is fixed, and inserting or deleting in the middle means shifting everything after it.

## Why This Matters

The array is the most basic data structure that stores many values under one name, and almost everything else is built on top of it: dynamic arrays, hash tables, stacks, queues, matrices, and image and audio buffers all sit on contiguous memory underneath. Understanding why index access is instant but middle insertion is slow trains the core habit of computer science, reasoning about how a data structure's layout in memory determines which operations are cheap and which are expensive. That single trade-off, fast random access against a fixed size and costly shifting, is the reference point you compare every other structure against, so it repeats in nearly every later course and interview.

## Learning Objectives

- Define an array as a fixed-size, contiguous block of same-type elements accessed by a zero-based integer index.
- Explain how an index maps to a memory address using the formula base_address + index * element_size.
- Explain why random access by index is O(1) and independent of the array's length.
- Analyze the complexity of common operations: read O(1), search O(n), and middle insert or delete O(n).
- Distinguish a fixed-size array from dynamic structures at a naming level and state why an array's size is fixed.

## The College Version

### What an array is

An array is a collection of elements stored in a single, contiguous block of memory, where the elements are usually all the same type and each is identified by an integer called its index. Two words in that sentence do the heavy lifting. Contiguous means the elements sit directly next to one another in memory, with no gaps, like houses in an unbroken row rather than scattered across a city. Same type means every element occupies the same fixed number of bytes: an array of 32-bit integers gives each element four bytes, an array of 8-bit characters gives each one byte. The NIST Dictionary of Algorithms and Data Structures defines an array as an assemblage of items that are randomly accessible by integers, the index, and notes that arrays typically have a fixed size. Most modern languages use zero-based indexing, meaning the first element is at index 0, the second at index 1, and the last element of an array holding n items is at index n - 1. A few languages count from 1 instead, so the convention is worth checking, but zero-based is the norm in C, Java, Python, and JavaScript.

### How an index becomes a memory address

The two properties, contiguous and same-size, combine to give arrays their defining power. Because the computer knows where the array starts (its base address) and how many bytes each element takes (the element size), it can compute the exact location of any element with simple arithmetic: address of element i equals base_address + i * element_size. Suppose an array of four-byte integers begins at memory address 1000. Element 0 is at 1000, element 1 is at 1000 + 1 * 4 = 1004, element 2 is at 1008, and element 3 is at 1000 + 3 * 4 = 1012. No matter which element you ask for, the work is the same: one multiplication and one addition. The computer does not walk through the earlier elements to reach a later one; it jumps straight there. This is why the operation is called random access, meaning access in any order at equal cost, as opposed to sequential access, where you must pass through earlier items first. The formula also explains a rule beginners often find arbitrary, that arrays hold one element type: if elements had different sizes, the computer could not multiply by a single element_size to find element i, and the constant-time jump would be lost.

### The cost of each operation

Reading or writing an element by its index, get(i) and set(i, x), takes constant time, written O(1), because it is just the address computation above followed by a single memory access; the array's length does not enter into it. Open Data Structures makes exactly this point: arrays offer constant-time access to any value, and that is what allows get and set to run in constant time. Searching for a value is a different matter. If you do not already know the index and the array is unsorted, you have no choice but to examine elements one at a time until you find a match or run out, which is a linear search costing O(n) in the worst case. Inserting or deleting in the middle is also expensive. Because the elements must stay contiguous with no gaps, inserting a new value at index k in an array of n elements forces every element from index k onward to shift one slot toward the end to make room, and deleting at index k forces the elements after it to shift one slot back to close the gap. Inserting at index k shifts n - k elements, so an insertion near the front is close to O(n) and one at the very end shifts nothing. In the worst and average cases, middle insertion and deletion are O(n).

### Why the size is fixed, and the trade-off

An array's size is fixed because a contiguous block of exactly the required length is reserved when the array is created. The memory immediately after that block may already be in use by other data, so the array cannot simply expand into it. Growing an array generally means allocating a new, larger block somewhere with enough room and copying every element across, which is a separate operation, not something the original array does by itself. This is the fundamental trade-off of the array: you get the fastest possible access to any element by index, paid for with a rigid size and expensive insertion or deletion anywhere but the end. When a program needs a collection that grows and shrinks freely, it reaches for a structure built on top of arrays or a different structure entirely, which is where dynamic arrays and linked lists come in. Those belong to the lists topic; here it is enough to know that the plain array trades flexibility for speed of access.

### Arrays in real languages

The word array is used slightly differently across languages, and the differences matter. In C and Java, an array is precisely the fixed-size contiguous block described here. In Python, the built-in type called list is not a plain array at all; it is a dynamic, array-backed sequence that can grow, so it belongs to the lists topic. Python does, however, provide a genuine fixed-type array through its array module, which stores a compact sequence of basic values, such as integers or floating-point numbers, whose type is constrained by a type code chosen when the array is created. That constraint is exactly the same-size-elements property that makes the address arithmetic work. So when you read the word array, check the language: it may mean the strict contiguous block, or it may be a looser name for a resizable list. This lesson is about the strict version, the one whose behavior every other sequence structure is measured against.

## Key Vocabulary

- **array** — A fixed-size collection of elements, usually all the same type, stored in one contiguous block of memory and accessed by an integer index.
- **index** — The integer position that identifies an element in an array; with zero-based indexing the first element is at index 0.
- **zero-based indexing** — A numbering scheme in which the first element is at index 0 and an array of n elements has its last element at index n - 1.
- **contiguous memory** — Storage in which elements occupy consecutive memory locations with no gaps between them.
- **element size** — The fixed number of bytes each element of an array occupies, determined by the element type.
- **base address** — The memory address of the start of an array, from which any element's address is computed.
- **random access** — The ability to reach any element in equal time by computing its address, rather than passing through earlier elements first.
- **constant time (O(1))** — A running time that does not grow as the input size grows; array index access is O(1).
- **linear time (O(n))** — A running time that grows in proportion to the input size n; searching an unsorted array and shifting elements are O(n).

## Eli-10

Picture a row of identical lockers, numbered starting at 0, all the same size and bolted together in a line. If someone tells you to open locker 7, you do not open lockers 0 through 6 first. You know each locker is the same width and where the row begins, so you walk straight to number 7. That is what an array does: because every element is the same size and they sit right next to each other, the computer can jump to any numbered slot instantly. The catch is that the row of lockers is bolted to the wall at a fixed length. To squeeze a new locker into the middle, everyone from that spot down has to shuffle over by one, and there is no room to add lockers past the end without building a whole new, longer row.

## Eli's Analogy

An array is like a row of numbered mailboxes in an apartment lobby: all the same size, in a fixed row, so you find mailbox 12 by counting slots from the start instead of searching every box.

**Where the analogy breaks down:** The mailbox picture is imperfect. Real mailboxes are found by reading numbers on the doors, but an array does not scan labels at all; it does one multiplication and one addition to compute an exact address, so finding slot 12 and slot 1200 cost the same. And mailboxes never shove their neighbors, whereas inserting into the middle of an array forces every later element to shift over.

## Worked Example

Consider an array of 32-bit integers (four bytes each) that begins at memory address 1000 and holds the values [10, 20, 30, 40, 50] at indexes 0 through 4. To read the element at index 3, the computer computes its address as base_address + index * element_size = 1000 + 3 * 4 = 1012, then fetches the four bytes there, giving 40. Notice it never touched indexes 0, 1, or 2, and reading index 4 would have cost exactly the same one multiply and one add, which is why index access is O(1). Now insert the value 25 at index 2. To keep the block contiguous, the elements at indexes 2, 3, and 4 (the values 30, 40, 50) must each shift one slot toward the end before 25 can drop into the freed slot: that is n - k = 5 - 2 = 3 elements moved. Insert near the front instead and you shift almost all n elements, which is why middle insertion is O(n). Every number here, the address 1012 and the shift count of 3, was verified by running the arithmetic in python3.

## Common Mistakes

- **Thinking the first element of an array is at index 1.** Most languages use zero-based indexing: the first element is at index 0, and an array of n elements runs from index 0 to index n - 1. Assuming index 1 is a classic off-by-one error.
- **Believing an array can grow to hold more elements whenever you need.** A plain array has a fixed size set when it is created, because a contiguous block of that exact length is reserved. Growing it means allocating a bigger block and copying everything over, which is a different structure's job (a dynamic array).
- **Assuming that because index access is O(1), all array operations are fast.** Only access by a known index is O(1). Searching an unsorted array is O(n), and inserting or deleting in the middle is O(n) because the remaining elements must shift to keep the block contiguous.
- **Confusing a fixed array with Python's built-in list.** A Python list is a dynamic, resizable, array-backed sequence, not a plain fixed array. The strict contiguous fixed-size array in Python is provided by the array module (or is what array means in C and Java).

## Compare / Contrast

- **Reading element i by index (get(i)) vs. searching an unsorted array for a value** — Index access is O(1): the address is computed directly with base + i * size. Search is O(n): with no known index you must examine elements one by one.
- **Random access vs. sequential access** — Random access reaches any element in equal time by computing its address; sequential access requires passing through earlier elements first. Arrays support random access.
- **Fixed-size array vs. a dynamic structure (named only)** — A fixed-size array reserves a contiguous block of set length and cannot grow in place; dynamic arrays and linked lists (covered in the lists topic) trade some access speed for the ability to grow and shrink.

## Key Takeaway

An array stores same-size elements in one contiguous block, so the computer reaches any element by index in constant time using base_address + index * element_size. The price is a fixed size and O(n) cost to search or to insert and delete in the middle, where elements must shift.

## Practice Question Bank

1. **Which description best defines an array as the term is used for the strict, fixed data structure?**
   - A. A fixed-size, contiguous block of memory holding elements, usually of one type, accessed by an integer index
   - B. A collection of key-to-value pairs looked up by hashing the key
   - C. A sequence of nodes each pointing to the next, scattered anywhere in memory
   - D. A resizable sequence that automatically grows whenever more elements are added

   **Answer: A.** An array is a fixed-size, contiguous block of same-type elements reached by an integer index, matching the NIST definition of items randomly accessible by an index. B describes a hash map or dictionary, C describes a linked list (nodes are not contiguous), and D describes a dynamic array, covered under lists.

2. **Why can a computer read the element at any index of an array in constant O(1) time?**
   - A. It keeps a separate lookup table mapping every index to its element's location
   - B. The elements are contiguous and equally sized, so the address is computed directly as base_address + index * element_size
   - C. It scans from the first element but stops as soon as it reaches the requested index
   - D. Arrays are always kept sorted, so binary search finds any index quickly

   **Answer: B.** Because elements sit contiguously and each occupies the same number of bytes, the address of element i is a direct computation, one multiply and one add, independent of length. A is unnecessary and not how arrays work; C describes sequential access (O(n)); D confuses access with searching, and arrays are not necessarily sorted.

3. **An array of 4-byte elements begins at memory address 2000 and uses zero-based indexing. At what address does the element at index 5 start?**
   - A. 2005
   - B. 2004
   - C. 2020
   - D. 2024

   **Answer: C.** The address is base_address + index * element_size = 2000 + 5 * 4 = 2020. A adds the index without multiplying by the element size, B computes index 1, and D uses index 6.

4. **You insert a new value at index 1 of a full-capacity array holding [A, B, C, D, E] (indexes 0-4). Ignoring any reallocation, what is the dominant cost and why?**
   - A. O(1), because inserting only writes one new value into the array
   - B. O(log n), because the array can be searched in logarithmic time
   - C. O(1), because the element at index 1 is simply overwritten
   - D. O(n), because the elements from index 1 onward must each shift one slot to keep the block contiguous

   **Answer: D.** Inserting at index 1 forces B, C, D, E (n - k = 5 - 1 = 4 elements) to shift one slot toward the end before the new value drops in, so the cost grows with n and is O(n). A ignores the shifting, B describes searching a sorted array, and C wrongly treats an insert as an overwrite, which would lose an element.

5. **You need to find whether the value 42 appears anywhere in an unsorted array of n integers, and you do not know its index. What is the worst-case time complexity?**
   - A. O(n), because you may have to examine every element one by one
   - B. O(1), because arrays allow any element to be reached instantly
   - C. O(log n), because you can binary-search the array
   - D. O(n^2), because each element must be compared with every other element

   **Answer: A.** Without a known index and with the array unsorted, you must scan elements until you find 42 or reach the end, a linear search that is O(n) in the worst case. B confuses search with index access, C requires a sorted array, and D overcounts, since a single pass is enough.

## Sources

- **array — Dictionary of Algorithms and Data Structures (DADS)**, U.S. National Institute of Standards and Technology. https://xlinux.nist.gov/dads/HTML/array.html (public domain)
- **Array-Based Lists — Open Data Structures (Chapter 2)**, Pat Morin. https://opendatastructures.org/ods-python/2_Array_Based_Lists.html (CC BY 2.5 CA)
- **array — Efficient arrays of numeric values (Python 3 documentation)**, Python Software Foundation. https://docs.python.org/3/library/array.html (reference only)
- **Array declaration — C language reference**, cppreference.com. https://en.cppreference.com/w/c/language/array (reference only)

## Related Topics

- computer-science-fundamentals:foundations:lists
- computer-science-fundamentals:foundations:data-types
- computer-science-fundamentals:foundations:loops
- computer-science-fundamentals:foundations:searching
- computer-science-fundamentals:foundations:stacks

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Research status:** source-verified
- **Rights:** NIST public domain; Open Data Structures CC BY 2.5 CA (attributed, no wording reproduced); Python docs and cppreference reference-only; all prose original.
- **Researched at:** 2026-08-19
- **Transformation:** Facts drawn from NIST DADS, Open Data Structures, the Python array module docs, and the cppreference C array reference, written as original prose. Address arithmetic and middle-insertion shift counts were executed and verified in python3.
