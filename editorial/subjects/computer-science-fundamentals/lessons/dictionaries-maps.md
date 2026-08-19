# Dictionaries and Maps

## In 30 Seconds

A dictionary — also called a map, hash map, or associative array — stores data as key-value pairs. Instead of reaching for item number 5, you reach for the value filed under a key such as "email" or a student ID. Each key is unique, and the structure is built to find, add, or remove a value by its key in roughly constant time, no matter how many entries it holds. That key-based access is what makes it different from an array.

## Why This Matters

Dictionaries are among the most used data structures in real software. Configuration settings, JSON documents, database rows, word counts, and caches are all naturally key-value data, and a dictionary models them directly. Understanding why lookups are usually fast — and why they can occasionally slow down — helps you reason about performance instead of guessing. Academically, the dictionary is the standard example of an abstract data type with more than one possible implementation, so it recurs in data-structures, database indexing, and systems courses. Learning to pick key-based access over positional access is a judgment you will apply in nearly every program you write.

## Learning Objectives

- Define a dictionary/map as a collection of unique key-value pairs accessed by key.
- Distinguish key-based access in a dictionary from index-based access in an array or list.
- Explain how hashing gives average-case O(1) lookup, insert, and delete, and why the worst case is O(n).
- Apply dictionary operations — insert, update, lookup, membership test, and default lookup — to a small example.
- Recognize that the same structure is named differently across languages, and that ordering guarantees are language-specific.

## The College Version

### Key-value pairs and unique keys

A dictionary is a collection of key-value pairs. Each entry binds a key to a value, and you retrieve, change, or remove a value by naming its key rather than by naming a position. NIST's Dictionary of Algorithms and Data Structures defines the same structure, under the name associative array, as a collection of items randomly accessible by a key. The word "randomly accessible" here means direct access — you jump straight to the entry you asked for — not that anything is chosen at random.

Two rules define the structure. First, keys are unique within one dictionary: assigning to a key that already exists overwrites its value rather than creating a second entry, so there is exactly one value per key. Second, keys must be of a type the implementation can handle deterministically — in practice an immutable, hashable type such as a string, number, or tuple of those. Values carry no such restriction; a value can be any object, including another dictionary. Because entries are found by key, the natural questions a dictionary answers are "what value is filed under this key?" and "is this key present?" — not "what is the tenth entry?"

### How hashing makes lookup fast

The usual implementation is a hash table. A hash function turns each key into a number that selects a slot in an underlying array, so the dictionary can compute where a key's value should live and go straight there instead of scanning. NIST defines a hash table as a dictionary in which keys are mapped to array positions by hash functions. When two different keys map to the same slot, that is a collision, and the table needs a resolution strategy — commonly chaining (a small list at each slot) or probing (trying nearby slots).

With a good hash function and enough room in the table, the number of keys sharing any one slot stays small, so lookup, insertion, and deletion each take average-case O(1) time — constant, independent of how many entries the dictionary holds. This is the headline property of dictionaries and the reason they are everywhere. The cost is not free: the table trades extra memory (empty slots that keep collisions rare) for that speed, a classic space-for-time trade-off. The worst case is genuinely worse. If a poor hash function or adversarial keys pile many entries into the same slot, the structure degenerates toward a single long list and an operation can take O(n) time, linear in the number of entries. Well-engineered library dictionaries make the worst case rare, but it is real, which is why we describe dictionary performance as average-case O(1), worst-case O(n).

### Ordering, and the same idea under many names

Abstractly, a map is unordered: it is defined by which keys map to which values, not by any sequence. Historically that meant you could not rely on the order entries came back when you iterated. Concrete implementations differ, though, and this is a place where language matters. Python guarantees that a dict yields its keys in insertion order — the order in which they were first added. That behavior was a CPython implementation detail in version 3.6 and was written into the language specification in Python 3.7. "Insertion order" is not the same as "sorted": the entries come back in the order you added them, not alphabetically or numerically, and if you need sorted output you must sort explicitly. Many other languages' plain hash maps make no ordering promise at all.

The structure also travels under several names, which trips up students reading across sources. Python calls it a dictionary; much of computer science and many languages call it a map or hash map; the classical data-structures term is associative array. These are names for the same abstract data type: unique keys mapping to values, accessed by key. When you meet "HashMap" in Java, "Map" in JavaScript, "dict" in Python, or "associative array" in a textbook, read them as the same tool with local spelling and local guarantees about ordering and worst-case behavior.

### Where dictionaries fit among data structures

It helps to place the dictionary beside the structures it resembles. An array or a Python list is indexed by integer position: element zero, element one, and so on, with O(1) access when you already know the position. A dictionary is indexed by key, so you look things up by a meaningful label — a username, a product code, a word — and you neither know nor care where it sits internally. Use an array or list when your data is naturally a sequence and position matters; use a dictionary when your data is naturally a set of labeled facts and you will look them up by that label. Membership tests show the contrast sharply: asking "is this value in the collection?" is O(n) in an unsorted list because you may scan every element, but asking "is this key in the dictionary?" is average-case O(1). That single difference is why counting occurrences, caching results, de-duplicating by identifier, and joining records are all textbook jobs for a dictionary.

## Key Vocabulary

- **Dictionary / map**: A collection of key-value pairs in which each value is stored and retrieved by its key rather than by a numeric position.
- **Associative array**: The classical data-structures name for a dictionary: a collection of items accessed by a key.
- **Key**: The unique, hashable label under which a value is filed; supplying the key returns its value.
- **Value**: The data stored under a key. Values may repeat and can be of any type, including another dictionary.
- **Hash table**: The usual implementation of a dictionary, in which a hash function maps each key to a position in an underlying array.
- **Hash function**: A function that converts a key into a number used to choose the key's slot in the table.
- **Collision**: The situation where two different keys are mapped to the same table slot, requiring a resolution strategy such as chaining or probing.
- **Average-case O(1)**: Constant expected time for lookup, insert, or delete: the cost does not grow with the number of entries when collisions stay rare.
- **Insertion order**: Iteration order equal to the order keys were first added; guaranteed for Python dicts since version 3.7, and distinct from sorted order.

## Eli-10

A dictionary keeps information in labeled pairs: a label (the key) and the thing it points to (the value). To get something back you say its label, not its position. Every label in one dictionary is different, so each label points to exactly one thing. The clever part is that the computer can jump straight to a label's spot instead of checking every entry, so finding, adding, or removing something stays fast even when the dictionary is huge. That is the whole point: look things up by name, quickly.

## Eli's Analogy

It works like the contacts app on a phone. You do not remember that your friend is contact number 147; you type their name and their number appears instantly. The name is the key, the phone number is the value, and you can only have one entry per name.

**Where the analogy breaks down:** The contacts app usually shows names in alphabetical order, but a dictionary is not sorted for you — a Python dict keeps entries in the order you added them, and many other languages keep no order at all. And a real phone quietly searches its list, while a hash-based dictionary jumps to the right spot by computing it, which is what makes it fast rather than the neat alphabetical display.

## Worked Example

In Python, start with `prices = {"apple": 30, "banana": 10, "cherry": 75}`. This dictionary has three keys, each mapping to a price. Insert a new pair with `prices["date"] = 50`, then update an existing one with `prices["apple"] = 35` — because `"apple"` already exists, this overwrites 30 rather than adding a second apple. Look a value up by key: `prices["cherry"]` returns `75`. Guard against a missing key with `prices.get("mango", "not found")`, which returns `"not found"` instead of raising an error, since `"mango"` was never added. Test membership with `"banana" in prices`, which is `True`. Finally `len(prices)` is `4`, and iterating the keys yields `['apple', 'banana', 'cherry', 'date']` — insertion order, not alphabetical. Every step here was run in `python3` to confirm the outputs.

## Common Mistakes

- **Treating a dictionary like an array and indexing it by position, e.g. expecting `d[0]` to give the first entry.** A dictionary is indexed by key, not by integer position. `d[0]` looks for a key that is literally the number 0; the "first" entry is reached by its key, not by 0.
- **Assuming a dictionary is sorted, or that Python's insertion-order guarantee means sorted order.** Maps are unordered by definition. Python preserves insertion order (since 3.7), which is the order keys were added — not alphabetical or numeric. Sort explicitly if you need sorted output.
- **Believing every dictionary lookup is guaranteed constant time.** Average-case lookup is O(1), but heavy collisions push the worst case toward O(n). The constant-time behavior is expected, not guaranteed for every operation.
- **Storing duplicate keys and expecting both to survive.** Keys are unique within one dictionary. Assigning to an existing key overwrites its value; it does not create a second entry.
- **Trying to use a mutable object such as a list as a key.** Keys must be hashable (typically immutable) — strings, numbers, or tuples of immutables. Use a tuple, not a list, when you need a compound key.

## Compare / Contrast

- **Dictionary (map) vs Array / list**: A dictionary is accessed by key; an array or list is accessed by integer index. Choose a dictionary for labeled lookups, an array/list for ordered sequences.
- **Dictionary lookup vs Linear scan of a list**: Checking whether a key is present is average-case O(1); checking whether a value is present in an unsorted list is O(n).
- **Insertion order (Python dict) vs Sorted order**: Insertion order returns keys in the order they were added; sorted order arranges them by value. A dict gives the former, never the latter automatically.

## Key Takeaway

A dictionary stores unique key-value pairs and finds them by key in average-case O(1) time via hashing, degrading to O(n) only under heavy collisions — reach for it whenever you look data up by a label rather than by position.

## Practice Question Bank

1. **In a dictionary, each stored value is located using its associated ___.**
   - A. integer position within the collection
   - B. insertion timestamp
   - C. unique key
   - D. internal hash-function source code

   **Answer: C.** A dictionary is accessed by key: you supply a key and get its value. Position (an array concept) is wrong because dictionaries are not indexed by numeric slot; a timestamp is not how entries are addressed; and the hash function operates internally on the key but is not itself what you supply to retrieve a value.

2. **How does retrieving an element from a dictionary differ from retrieving one from an array?**
   - A. A dictionary retrieves values by key, while an array retrieves them by integer index.
   - B. A dictionary must be sorted before any access, while an array need not be.
   - C. An array forbids duplicate values, while a dictionary allows duplicate keys.
   - D. A dictionary can store only numbers, while an array can store any type.

   **Answer: A.** The core distinction is key-based versus index-based access. Sorting is not required to access a dictionary; keys (not values) are what must be unique, and it is the dictionary that forbids duplicate keys; and dictionaries place no type restriction on values.

3. **A program runs `prices = {"apple": 30, "banana": 10, "cherry": 75}` and then `prices["date"] = 50`. What does `prices.get("mango", "not found")` return?**
   - A. 50, the most recently inserted value
   - B. a KeyError is raised
   - C. None
   - D. "not found"

   **Answer: D.** The key `"mango"` was never added, so `.get` returns the supplied default `"not found"`. It does not return 50 (that value belongs to `"date"`); `.get` does not raise KeyError for a missing key the way square-bracket indexing would; and None would be returned only if no default were provided.

4. **A service performs millions of key lookups against a large hash-based map. Which statement about the time cost of those lookups is correct?**
   - A. Every individual lookup is guaranteed O(1) no matter how keys are distributed.
   - B. Average-case lookup is O(1), but heavy key collisions can degrade it toward O(n).
   - C. Lookup is always O(log n) because the keys are kept sorted.
   - D. Lookup is O(n) on average because each key is compared to the target in turn.

   **Answer: B.** Hashing gives expected constant-time lookups, but collisions can pile entries into one slot and push the worst case toward O(n) — so O(1) is average, not guaranteed. Keys are not kept sorted, so O(log n) is wrong; and the average is O(1), not O(n), because hashing avoids scanning every key.

5. **Which statement about the ordering of a dictionary's entries is accurate?**
   - A. Entries are always kept sorted by key automatically.
   - B. A map is unordered by definition, though Python dicts have preserved insertion order since version 3.7.
   - C. Entries are stored in a random order that reshuffles on every lookup.
   - D. A dictionary cannot be iterated over at all.

   **Answer: B.** Abstractly a map has no order; Python is a concrete case that guarantees insertion order (an implementation detail in 3.6, part of the spec in 3.7). Dictionaries are not auto-sorted, their order does not reshuffle on lookup, and they can certainly be iterated.

## Sources

- NIST Dictionary of Algorithms and Data Structures — "associative array" (public domain). https://xlinux.nist.gov/dads/HTML/assocarray.html
- NIST Dictionary of Algorithms and Data Structures — "hash table" (public domain). https://xlinux.nist.gov/dads/HTML/hashtab.html
- The Python Tutorial — Data Structures, section 5.5 "Dictionaries" (reference-only). https://docs.python.org/3/tutorial/datastructures.html
- Python Built-in Types — Mapping Types (dict), including the 3.7 insertion-order note (reference-only). https://docs.python.org/3/library/stdtypes.html
- What's New In Python 3.7 — dict insertion-order guarantee (reference-only). https://docs.python.org/3/whatsnew/3.7.html
- Open Data Structures (Pat Morin) — Chapter 5, Hash Tables (CC BY; described, not copied). https://opendatastructures.org/ods-python/5_Hash_Tables.html

## Related Topics

- computer-science-fundamentals:foundations:arrays
- computer-science-fundamentals:foundations:lists
- computer-science-fundamentals:foundations:searching
- computer-science-fundamentals:foundations:time-complexity
- computer-science-fundamentals:foundations:data-types

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Researched at:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** NIST DADS public domain; Python docs reference-only (PSF); Open Data Structures CC BY, described not copied. No source prose reproduced.
- **Transformation:** Facts synthesized from authoritative references into original prose; the Python worked example was executed in python3 to verify every output.
