# Stacks

## In 30 Seconds

A stack is a last-in, first-out (LIFO) collection: the only item you can take out is the one you added most recently. It supports four core operations, all O(1): push adds an item to the top, pop removes and returns the top, peek (or top) reads the top without removing it, and isEmpty says whether anything is left. That one rule powers the call stack behind function calls, undo buttons, and checking that brackets in code are balanced.

## Why This Matters

The stack is one of the handful of data structures you will meet again and again, and its LIFO rule quietly runs things you already use. Every function call your programs make is tracked on a call stack, which is why a runaway recursion produces a stack overflow. The undo button in your editor, the back behaviour in nested menus, and the way a compiler checks that every bracket is closed all lean on the same idea. Because push and pop touch only the top, they are constant-time, so a stack is both simple and fast. Learning it also teaches a bigger lesson: an abstract data type is defined by its behaviour and operations, not by the array or linked list you happen to build it on.

## Learning Objectives

- Define a stack as a LIFO collection and explain what last-in, first-out means.
- Describe the four core operations - push, pop, peek/top, and isEmpty - and state that each is O(1).
- Distinguish stack overflow from underflow and say what triggers each.
- Apply push and pop to trace the state of a stack by hand.
- Explain how a stack solves balanced-bracket matching and why the call stack is a stack.
- Distinguish a stack (LIFO) from a queue (FIFO).

## The College Version

### The LIFO rule and the four operations

A stack is a collection of items in which only the most recently added item may be removed. NIST's Dictionary of Algorithms and Data Structures states it directly: the latest added item is at the top, and the discipline is last-in, first-out, or LIFO. Picture a spring-loaded stack of cafeteria trays - you add a tray to the top and you take one from the top, and the last tray you set down is the first one taken. A stack exposes a deliberately small interface. Push adds an item to the top. Pop removes the top item and returns it. Peek (also called top) returns the top item without removing it, so you can look before you leap. IsEmpty reports whether the stack currently holds anything, which is the check you make before popping. That is the whole vocabulary, and the restraint is the point: by refusing access to anything below the top, a stack guarantees the LIFO order that the rest of its uses depend on.

### Why the operations are O(1), and the abstract-data-type view

All four core operations run in constant time, O(1), because each of them touches only the top of the stack - never the items beneath it. Push writes one new item at the top; pop reads and drops the top; peek and isEmpty just inspect it. None of them has to scan or shift the rest of the collection, so the cost does not grow with the number of items stored. This is what makes a stack cheap to use even when it holds millions of items. Notice that this claim is about behaviour, not about any particular code. A stack is an abstract data type (ADT): it is defined by its operations and its LIFO rule, not by how you store the items. You can implement a stack on top of a dynamic array (push and pop at the end) or a linked list (push and pop at the head); Open Data Structures describes exactly this, defining push(x) and pop() as operations at the end of an array-backed stack. Either implementation gives you O(1) push and pop - amortized O(1) for the dynamic array, since it occasionally has to grow. The arrays and linked-lists topics cover how those containers work; here we only name the one you build the stack on.

### Overflow, underflow, and safe use

Two error conditions come up whenever a stack has a boundary. Underflow happens when you pop or peek an empty stack: there is no top item to return, so the operation has nothing to give back. This is why isEmpty exists - checking it before you pop is the standard guard. Overflow happens in the other direction, when you push onto a stack that has hit a fixed capacity limit and cannot hold another item. A stack built on a growable structure may never overflow in practice, but a stack with a fixed-size backing array, or the program's own call stack, has a real ceiling. The most famous case is the "stack overflow" you get from recursion that never reaches its base case: each unfinished function call takes a slot on the call stack, and if the calls never stop returning, the call stack fills up and the program is halted. Recursion has its own lesson; the connection to remember here is that it runs on a stack, which is exactly why an endless recursion overflows one.

### What stacks are good for

The LIFO rule is a precise fit for any problem where the most recently opened thing must be closed first. The call stack is the headline example: when function A calls B and B calls C, the calls stack up, and they finish in reverse - C returns first, then B, then A - which is LIFO exactly. Undo/redo works the same way: each action is pushed as you go, and undo pops the most recent one first. Expression evaluation and compilers use stacks to hold pending operators and to check nesting. A clean, small case of that last use is balanced-bracket matching: to verify that every `(`, `[`, and `{` in a string is properly closed, push each opening bracket and, on each closing bracket, pop the top and confirm it is the matching opener; the string is balanced only if every pop matches and the stack ends empty. Depth-first search (DFS) explores a graph or tree with the same discipline, using a stack (or the call stack, via recursion) to remember where to backtrack to. In each case, the reason a stack fits is that the work naturally nests: the thing you must handle next is always the thing you started most recently. Contrast this with a queue, which is first-in, first-out and hands back the oldest item first - the right tool when order of arrival, not recency, is what matters.

## Key Vocabulary

- **Stack** - A collection in which only the most recently added item can be removed; a last-in, first-out (LIFO) abstract data type.
- **LIFO (last-in, first-out)** - The ordering rule of a stack: the item added most recently is the next one removed.
- **Push** - The operation that adds an item to the top of a stack.
- **Pop** - The operation that removes and returns the item currently on top of the stack.
- **Peek (top)** - The operation that returns the top item of a stack without removing it.
- **isEmpty** - The operation that reports whether the stack currently holds any items.
- **Overflow** - The error of pushing onto a stack that has reached a fixed capacity limit and cannot hold another item.
- **Underflow** - The error of popping or peeking a stack that is empty and therefore has no top item to return.
- **Call stack** - The stack a running program uses to track active function calls, so that the most recently called function returns first.
- **Abstract data type (ADT)** - A data type defined by its operations and behaviour rather than by a specific implementation; a stack is an ADT that can be built on an array or a linked list.

## Eli-10

A stack is like a pile where you can only touch the top. You can put a new thing on top (push), take the top thing off (pop), or peek at the top without taking it. You are not allowed to pull something out of the middle or the bottom. Because you only ever deal with the top, the thing you took off last is always the thing you put on most recently - that is the whole idea, called last-in, first-out. And because you only touch the top, adding and removing are super fast no matter how tall the pile gets. Computers use this for the "undo" button (undo the newest change first) and to keep track of which function is running right now.

## Eli's Analogy

Think of a stack of plates in a cupboard. You add a clean plate to the top, and when you need one you take the top plate. The plate you grab is the one you put there most recently, and the plate at the very bottom waits until everything above it is gone. You never yank a plate from the middle - the whole stack would come down.

**Where the analogy breaks down:** The plate picture leaks in two ways. Real plates can be slid out from the middle if you are careful, but a stack strictly forbids that - only the top is reachable. And a physical pile of plates can topple or run out of shelf space in a fuzzy way, whereas a stack's limits are exact: popping an empty stack is underflow, and pushing past a fixed capacity is overflow.

## Worked Example

Start with an empty stack and push three numbers in order: push 1, push 2, push 3. The stack now reads (bottom to top) 1, 2, 3, with 3 on top. Now call pop twice. The first pop removes and returns the top item, 3; the second pop removes and returns the new top, 2. What is left on the stack is just 1. So the pops come back in the reverse of the order the items went in - last-in, first-out. This is the trace to keep in your head: push 1, 2, 3 then pop, pop gives 3 then 2, leaving 1.

A second, slightly richer example is bracket matching. To check whether `([)]` is balanced, push each opener and pop on each closer: push `(` (stack: `(`), push `[` (stack: `(`, `[`), then see `)`. Pop the top, which is `[`, and compare it to the opener `)` expects, which is `(`. They do not match, so the string is unbalanced - and indeed `([)]` is a classic example of brackets that overlap instead of nesting. Both traces were executed in Python to confirm the results.

## Common Mistakes

- **Thinking a stack is first-in, first-out - that the first item you pushed comes out first.** A stack is last-in, first-out. The item removed is always the most recently pushed one. First-in, first-out describes a queue, which is a different structure.
- **Confusing pop with peek, assuming both leave the stack unchanged.** Pop removes and returns the top item, shrinking the stack. Peek (top) returns the same item but leaves it in place. Use peek when you want to look without changing the stack.
- **Popping or peeking without checking whether the stack is empty.** Popping or peeking an empty stack is underflow - there is no top item to return. Call isEmpty first, or otherwise guard the operation.
- **Believing push and pop get slower as the stack grows, like searching a list.** Push, pop, peek, and isEmpty are all O(1) because they touch only the top and never scan the items beneath it. Their cost does not grow with the number of items.
- **Assuming "stack" means one specific implementation, like an array.** A stack is an abstract data type defined by its LIFO behaviour and operations. It can be implemented on a dynamic array or a linked list; both give O(1) push and pop.

## Compare / Contrast

- **Stack (LIFO) vs Queue (FIFO):** A stack removes the most recently added item (last-in, first-out); a queue removes the oldest item (first-in, first-out). Use a stack when the newest thing must be handled first, a queue when arrival order should be preserved.
- **Pop vs Peek (top):** Pop removes and returns the top item, changing the stack; peek returns the top item but leaves it in place. Both look only at the top and are O(1).
- **Overflow vs Underflow:** Overflow is pushing onto a full fixed-capacity stack (no room to add); underflow is popping or peeking an empty stack (nothing to remove). They are the two opposite boundary errors.
- **Stack (the abstract data type) vs its implementation (array or linked list):** The stack is defined by its LIFO operations; the array or linked list is the concrete storage you build it on. One ADT, more than one possible implementation, all with O(1) push and pop.

## Key Takeaway

A stack is a last-in, first-out collection whose four core operations - push, pop, peek/top, and isEmpty - are all O(1) because they touch only the top; that single rule underlies the call stack, undo/redo, and bracket matching.

## Practice Question Bank

1. **Which statement best describes a stack?**
   - A. A first-in, first-out (FIFO) collection where the oldest item is removed first
   - B. A last-in, first-out (LIFO) collection where only the most recently added item can be removed
   - C. A collection that always keeps its items in sorted order
   - D. A key-value collection that retrieves items by a lookup key

   **Answer: B.** A stack is last-in, first-out: the item you can remove is always the one added most recently, taken from the top. Option A describes a queue (FIFO), not a stack. A stack imposes no sorted order, and it is not a key-value structure (that is a dictionary/map).

2. **Which stack operation removes the top item and returns it?**
   - A. pop
   - B. push
   - C. peek (also called top)
   - D. isEmpty

   **Answer: A.** Pop removes the most recently added item from the top and returns it. Push does the opposite - it adds an item to the top. Peek (top) returns the top item but leaves it in place, so it does not remove anything. IsEmpty only reports whether the stack holds any items.

3. **What is the time complexity of push, pop, and peek on a stack, and why?**
   - A. O(n) each, because every item must be shifted to make room
   - B. O(log n) each, because the stack is kept in sorted order
   - C. O(1) each, because they act only on the top and never scan the items beneath it
   - D. O(n log n) each, because the stack must be re-sorted after every change

   **Answer: C.** Push, pop, and peek all touch only the top, so their cost does not depend on how many items are stored - they are O(1) (amortized O(1) for push on a dynamic array that occasionally grows). A stack is not kept sorted, so there is no log-n search or n-log-n re-sort.

4. **You push 1, then 2, then 3 onto an empty stack, then call pop twice. What do the two pops return, and what remains on the stack?**
   - A. They return 1 then 2, and 3 remains on top
   - B. They return 3 then 3, and 1 and 2 remain
   - C. They return 1 then 2, and the stack is empty
   - D. They return 3 then 2, and 1 remains on the stack

   **Answer: D.** After the pushes the stack is 1, 2, 3 with 3 on top. The first pop returns the top, 3; the second returns the new top, 2. That leaves 1. Because a stack is last-in, first-out, the pops come back in reverse of the push order.

5. **When a program runs function A, which calls B, which calls C, why is the structure that tracks these active calls called the "call stack"?**
   - A. Because the calls are stored first-in, first-out, so A returns before B and C
   - B. Because the most recently called function is the first to finish and return, matching last-in, first-out order
   - C. Because the calls are sorted alphabetically by function name
   - D. Because each function is allowed to be called only once per program

   **Answer: B.** The calls nest: A waits on B, B waits on C, so C finishes and returns first, then B, then A - last-in, first-out, exactly a stack's discipline. It is not FIFO, the calls are not sorted by name, and functions can be called many times (each active call takes its own slot, which is why runaway recursion overflows the call stack).

## Sources

- **stack - Dictionary of Algorithms and Data Structures (DADS)**, National Institute of Standards and Technology (NIST). https://xlinux.nist.gov/dads/HTML/stack.html - Public-domain definition of a stack as a LIFO collection with push, pop, top, and isEmpty.
- **5. Data Structures - The Python Tutorial (Using Lists as Stacks)**, Python Software Foundation. https://docs.python.org/3/tutorial/datastructures.html - Concrete implementation: append() pushes, pop() removes the top, giving last-in, first-out order.
- **Open Data Structures (in pseudocode) - Interfaces**, Pat Morin (CC BY 2.5 CA). https://opendatastructures.org/ods-python.pdf - The Stack as a LIFO discipline with push(x)/pop(), and the ArrayStack implementing them at the end of the sequence.

## Related Topics

- computer-science-fundamentals:foundations:queues
- computer-science-fundamentals:foundations:recursion
- computer-science-fundamentals:foundations:lists
- computer-science-fundamentals:foundations:arrays
- computer-science-fundamentals:foundations:searching

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched at:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** Reference-only and openly licensed sources (public-domain NIST definition, Python tutorial reference-only, Open Data Structures under CC BY 2.5 CA). Facts synthesized; all prose original; no source passages reproduced.
- **Verification:** Worked examples executed in Python 3.9.6 via Bash on 2026-08-19 (push 1,2,3 -> pop 3,2,1 leaving 1; stack-based bracket matcher balanced for `([]{})` and `{[()]}`, unbalanced for `(]`, `(()`, `)(`, and `([)]`).
