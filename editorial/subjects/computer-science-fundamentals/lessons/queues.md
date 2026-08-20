# Queues

## In 30 Seconds

A queue is a collection that serves items in the order they arrived: first in, first out (FIFO). You enqueue new items at the rear and dequeue them from the front, like a line at a checkout. Its core operations - enqueue, dequeue, front (peek), and isEmpty - each run in constant O(1) time when the queue is implemented properly. Queues drive job scheduling, print spooling, buffering, and breadth-first search.

## Why This Matters

Queues rank among the core data structures you meet again and again, so understanding them early pays off across the rest of computer science. Operating systems queue processes and print jobs; networks buffer packets in queues; breadth-first search explores a graph using a queue; and streaming systems smooth bursts of data with queues. Knowing that a queue guarantees first-in-first-out order - and that its operations are O(1) only with the right implementation - lets you pick the correct structure for a problem and reason about how a system behaves under load. The same FIFO idea also shows up outside code, in any fair "first come, first served" line, which makes it an intuitive model for scheduling and fairness.

## Learning Objectives

- Define a queue as a FIFO (first-in, first-out) abstract data type.
- Describe the core operations enqueue, dequeue, front/peek, and isEmpty and state that each is O(1) with a proper implementation.
- Explain why removing from the front of a plain array is O(n) and how a proper implementation avoids that cost.
- Apply the FIFO rule to trace a sequence of enqueue and dequeue operations.
- Identify real uses of queues (scheduling, buffering, breadth-first search) and name common variants.

## The College Version

### What a queue is

A queue is an abstract data type: a collection defined by the operations it supports rather than by how it is stored. Its defining rule is order of service. NIST's Dictionary of Algorithms and Data Structures describes a queue as a collection in which only the earliest added item may be accessed, with basic operations to add at the tail and delete from the head - also known as first-in, first-out, or FIFO. In other words, items leave a queue in exactly the order they arrived. The mental model is a line of people at a checkout: whoever joins the back waits for everyone ahead of them, and the person who has waited longest is served next. This is the opposite of a stack, which is last-in, first-out (a stack serves the most recently added item first); that contrast is the one thing worth remembering about stacks here, and their push/pop behavior is covered in its own lesson. Because a queue is an abstract type, several concrete structures - a linked list, or an array used cleverly - can all realize it, as long as they honor FIFO order.

### The core operations

A queue exposes a small, fixed set of operations. Enqueue adds an item at the rear (the tail). Dequeue removes and returns the item at the front (the head) - the item that has been waiting longest. Front, often called peek, returns the front item but leaves it in place, so you can see who is next without serving them. IsEmpty reports whether the queue currently holds any items, which matters because dequeuing from an empty queue is an error you must guard against. Some libraries add a size operation that reports how many items are stored. The important performance fact is that all of these operations can run in O(1) - constant time, independent of how many items the queue holds - when the queue is implemented properly, for example with a linked list that tracks both head and tail pointers, or with a circular array. Python's standard library offers collections.deque for exactly this purpose: its documentation states that appends and pops from either end run with approximately O(1) performance.

### Why the implementation matters

The O(1) guarantee is not automatic; it depends on how the front is handled. A tempting but wrong approach is to store the items in an ordinary dynamic array (a Python list, say) and dequeue by removing element zero. That single line looks harmless, but removing the first element of an array forces every remaining element to shift down one position to fill the gap, which is O(n) work - proportional to the number of items left. Python's documentation makes this explicit: list objects incur O(n) memory-movement costs for pop(0) and insert(0, v) because those operations change the position of the underlying data. A proper queue avoids the shift. A linked-list implementation keeps a pointer to both the head and the tail, so enqueue appends at the tail and dequeue unlinks the head, each in constant time. A circular array (a ring buffer) keeps two indices, front and rear, and advances them modulo the array's capacity, reusing freed slots instead of shifting anything. Either way the cost of each operation stays constant. The lesson is general: the same abstract data type can be fast or slow depending on the structure you build it on, so "a queue is O(1)" is a claim about a correct implementation, not about any code that happens to preserve FIFO order.

### Where queues are used, and common variants

Queues appear wherever items must be handled in arrival order or work must be buffered between a fast producer and a slower consumer. Operating systems place processes and print jobs in queues so they run first-come, first-served. Networks and I/O systems buffer incoming data in queues to absorb bursts without losing anything. Breadth-first search, a fundamental graph and tree traversal, uses a queue to visit nodes level by level: you enqueue a node's unvisited neighbors and dequeue the next node to explore, which naturally explores closer nodes before farther ones. Message systems and task pipelines pass jobs through queues to decouple the parts of a system. Several named variants adjust the basic idea. A circular queue wraps a fixed-size array around on itself so freed slots at the front are reused. A double-ended queue, or deque (pronounced "deck"), allows adding and removing at both ends, generalizing both queues and stacks. A priority queue departs from strict FIFO: instead of serving the oldest item, it serves the highest-priority one, which is a different discipline with its own implementation (typically a heap). Each of these deserves its own study; here it is enough to recognize the names and how they relate to the plain FIFO queue.

## Key Vocabulary

- **Queue** - An abstract data type that stores a collection of items and serves them in first-in, first-out order: the item that has waited longest is removed next.
- **FIFO (first-in, first-out)** - The ordering rule of a queue, in which items are removed in the same order they were added.
- **Enqueue** - The operation that adds an item at the rear (tail) of a queue.
- **Dequeue** - The operation that removes and returns the item at the front (head) of a queue - the item added earliest.
- **Front (peek)** - An operation that returns the item at the front of the queue without removing it.
- **isEmpty** - An operation that reports whether the queue currently contains no items; used to guard against dequeuing from an empty queue.
- **Abstract data type** - A data structure defined by the operations it supports and their behavior, independent of the concrete representation used to implement it.
- **Circular queue (ring buffer)** - A queue implemented over a fixed-size array whose front and rear indices wrap around modulo the capacity, reusing freed slots without shifting elements.
- **Deque (double-ended queue)** - A generalization of a queue that allows adding and removing items at both the front and the rear.
- **Priority queue** - A queue-like structure that serves the highest-priority item next instead of the oldest, so it does not follow strict FIFO order.

## Eli-10

A queue is like a single-file line. New arrivals join the back, and the person at the very front is always the next to be served. Nobody cuts and nobody jumps ahead: whoever has been waiting the longest goes first. Adding to the back is called enqueue, and taking someone from the front is called dequeue. You can also peek at who is first without serving them, and check whether the line is empty. Because you only ever touch the two ends - the front and the back - each of these actions is quick no matter how long the line gets, as long as the line is built the right way.

## Eli's Analogy

Think of the checkout line at a grocery store. You walk up and join the end of the line (enqueue). The cashier always helps whoever is at the front (dequeue), and that is the person who has been waiting longest. You can glance at who is next (peek) without changing the line, and you can see whether anyone is waiting at all (isEmpty). First come, first served - that is exactly a FIFO queue.

**Where the analogy breaks down:** Real shoppers can leave a line or let someone cut, but a plain queue is strict FIFO - no jumping ahead. And a real line does not care how it is "built," whereas a computer queue is only fast if it is implemented with the right structure; a poorly built one can get slower to remove from as the line grows. A priority queue also breaks the analogy, since it serves the most important item next rather than the one that arrived first.

## Worked Example

Start with an empty queue and apply this sequence. Enqueue 1: the queue is now [1], with 1 at both front and rear. Enqueue 2: the queue is [1, 2]; 2 went to the rear, and 1 is still at the front. Enqueue 3: the queue is [1, 2, 3]. Now peek at the front: it returns 1 without removing it, so the queue is unchanged. Dequeue: this removes and returns the front item, 1, leaving [2, 3]. Dequeue again: returns 2, leaving [3]. Dequeue once more: returns 3, leaving an empty queue, so isEmpty is now true. The values came out 1, 2, 3 - the exact order they went in, which is the definition of FIFO. This trace was executed in Python 3.9 using collections.deque (append to enqueue, popleft to dequeue), and the dequeue order was confirmed to be [1, 2, 3]. Contrast this with a stack, which would have returned 3, 2, 1.

## Common Mistakes

- **Confusing a queue (FIFO) with a stack (LIFO).** A queue removes the oldest item first (first-in, first-out); a stack removes the newest item first (last-in, first-out). Enqueue 1, 2, 3 then dequeue gives 1, 2, 3; a stack would give 3, 2, 1.
- **Assuming any FIFO-preserving code makes enqueue and dequeue O(1).** Storing items in a plain array and removing element zero is O(n), because every remaining element must shift down. Constant-time operations require a proper implementation, such as a linked list with head and tail pointers or a circular array.
- **Adding at the front and removing at the front (or mixing up which end does what).** By convention enqueue adds at the rear and dequeue removes from the front. Adding and removing at the same end turns the structure into a stack, not a queue.
- **Dequeuing or peeking without checking whether the queue is empty.** Dequeue and front are undefined on an empty queue. Call isEmpty (or check size) first and handle the empty case, or you will hit an error or undefined behavior.
- **Thinking a priority queue is just a normal queue.** A priority queue serves the highest-priority item next, not the oldest, so it does not follow FIFO order. It is a related but distinct structure, usually built on a heap.

## Compare / Contrast

- **Queue (FIFO) vs. Stack (LIFO):** A queue removes the item that was added earliest (first-in, first-out); a stack removes the item added most recently (last-in, first-out). Queues add at the rear and remove at the front; a stack adds and removes at one end.
- **Enqueue vs. Dequeue:** Enqueue adds an item at the rear of the queue; dequeue removes and returns the item at the front. They operate at opposite ends, and both are O(1) in a proper implementation.
- **Front (peek) vs. Dequeue:** Front returns the front item but leaves the queue unchanged; dequeue returns the front item and removes it. Use peek to inspect who is next without serving them.
- **Plain queue (FIFO) vs. Priority queue:** A plain queue serves items strictly in arrival order; a priority queue serves the highest-priority item next regardless of when it arrived, and is typically implemented with a heap rather than a simple list.

## Key Takeaway

A queue is a FIFO collection: enqueue adds at the rear, dequeue removes from the front, and front/peek and isEmpty support them - each O(1) with a proper implementation (linked list or circular array), but O(n) if you naively remove from the front of a plain array.

## Practice Question Bank

1. **What does it mean to say a queue is a FIFO structure?**
   - A. The item added most recently is the one removed first
   - B. The item added earliest is the one removed first
   - C. Items are removed in random order
   - D. Items can only be added, never removed

   **Answer: B.** FIFO stands for first-in, first-out: items leave a queue in the same order they arrived, so the item that has waited longest is served next. Option A describes a stack (LIFO). Queues are not random and support both enqueue and dequeue.

2. **In the standard queue vocabulary, which operation removes and returns the item at the front of the queue?**
   - A. Dequeue
   - B. Enqueue
   - C. Peek (front)
   - D. isEmpty

   **Answer: A.** Dequeue removes and returns the front item. Enqueue adds at the rear, peek returns the front item without removing it, and isEmpty only reports whether the queue holds any items.

3. **You implement a queue by storing items in a plain dynamic array and dequeuing by removing element zero (the first element). Why is this a poor implementation?**
   - A. Removing element zero silently reverses the order, breaking FIFO
   - B. Dynamic arrays cannot store more than a fixed number of items
   - C. Removing the first element forces every remaining element to shift down, making dequeue O(n)
   - D. Arrays cannot be used to implement a queue at all

   **Answer: C.** Removing the first element leaves a gap that every remaining element must shift down to fill - O(n) work. Python's docs note this cost for pop(0). It does not break FIFO, dynamic arrays can grow, and a circular-array implementation makes an array-backed queue efficient.

4. **Starting from an empty queue, you enqueue 1, then enqueue 2, then enqueue 3, then perform two dequeue operations. What values do the two dequeues return, in order?**
   - A. 3 then 2, because the most recent item leaves first
   - B. 1 then 1, because dequeue always returns the same front item
   - C. 2 then 3, because dequeue starts from the second item added
   - D. 1 then 2, because the earliest items leave first

   **Answer: D.** A queue is FIFO. After enqueuing 1, 2, 3 the front is 1; the first dequeue returns 1, the second returns 2, leaving 3. Option A is stack behavior; dequeue removes what it returns, so it cannot return 1 twice, and it starts from the earliest item.

5. **A breadth-first search explores a graph or tree level by level, visiting all nodes one step away before any node two steps away. Which data structure most naturally supports this order, and why?**
   - A. A stack, because LIFO order explores the deepest node first
   - B. A queue, because FIFO order visits nodes in the order they were discovered
   - C. A priority queue, because it always removes the smallest value first
   - D. A plain array with no ordering rule, because order does not matter in search

   **Answer: B.** BFS enqueues newly discovered neighbors and dequeues the next node to visit; FIFO order processes nearer nodes before farther ones, giving level-by-level traversal. A stack's LIFO order dives deep first (depth-first search), a priority queue orders by priority rather than discovery time, and an unordered array gives no level guarantee.

## Sources

- NIST, *Dictionary of Algorithms and Data Structures (DADS)* - "queue" (public domain). https://xlinux.nist.gov/dads/HTML/queue.html
- Pat Morin, *Open Data Structures (in Python)*, Section 1.2 "Interfaces: The Queue, Stack, and Deque Interfaces" (CC BY 2.5 Canada). https://opendatastructures.org/ods-python/1_2_Interfaces.html
- Python Software Foundation, *collections - Container datatypes* (deque objects). https://docs.python.org/3/library/collections.html

## Related Topics

- computer-science-fundamentals:foundations:stacks
- computer-science-fundamentals:foundations:lists
- computer-science-fundamentals:foundations:arrays
- computer-science-fundamentals:foundations:searching
- computer-science-fundamentals:foundations:sorting

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched at:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** Reference sources - public-domain NIST DADS definition, CC BY Open Data Structures (facts synthesized, no passages reproduced), and Python documentation used for complexity statements. All prose original.
- **Transformation:** FIFO definition and enqueue/dequeue/front/isEmpty operation set built from NIST DADS "queue" and the Open Data Structures interface section; O(1)/O(n) complexity from Python's collections.deque docs; enqueue 1,2,3 / dequeue worked example executed in Python 3.9 and confirmed to return 1,2,3. Variants named, not deeply taught; stacks/LIFO only contrasted.
