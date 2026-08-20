# Objects

## In 30 Seconds

A JavaScript object groups related information as properties. Each property connects a key to a value, such as a course object's `title` and `seats`. An object literal uses braces: `const course = { title: "Web Basics", seats: 24 };`. Use dot notation for a known simple name and brackets for a computed or unusual key. Assigning to a property can add it or replace its value.

## Why This Matters

Objects make related facts readable as one record rather than many disconnected variables. Accurate property access prevents bugs when code selects a key at runtime. This is the foundation for later browser and DOM work.

## Learning Objectives

- Define object, property, key, and value.
- Create an object literal.
- Read known properties with dot notation.
- Use brackets for computed and unusual keys.
- Trace a property update.

## The College Version

### An object is a collection of named properties

An object is a JavaScript value that can hold properties. A property associates a key with a value. In `const course = { title: "Web Basics", seats: 24 };`, `title` and `seats` are keys, while the string and number are values. The braces create one object and `course` refers to it. Grouping the facts says they describe the same course. Property names are case-sensitive, so `title` and `Title` differ. This lesson uses plain objects as records, not classes, JSON text, or network data.

### Reading properties: dot notation and brackets

Dot notation uses a literal identifier: `course.title`. Bracket notation uses an expression: `course["title"]`. These reach the same property in this case. Brackets are required for a key with spaces, such as `course["meeting day"]`, and for a key stored in a variable. With `const field = "seats";`, `course[field]` reads `24`; `course.field` seeks a literal key named `field`. A missing ordinary property normally reads as `undefined`, not `null`.

### Adding and replacing a property

`course.seats = 30` replaces an existing value. `course.room = "Lab 3"` adds a property. A `const` binding cannot be assigned to a different object, but that does not freeze the object: `course.seats = 30` can work while assigning a whole new object to `course` cannot. Identify whether code changes a binding or a selected property.

### Trace a small record deliberately

In `const schedule = { day: "Tuesday", start: 9 }; const chosen = "start"; schedule[chosen] = schedule[chosen] + 1; schedule.room = "204";`, brackets select `start`, so its value becomes 10. The final statement adds `room`. At the end the record has `day`, `start: 10`, and `room`. Write down the selected key when tracing bracket expressions; `schedule.chosen` would instead seek a key literally named `chosen`.

## Key Vocabulary

- **object:** A JavaScript value that can hold properties.
- **property:** A named association between a key and a value on an object.
- **key:** A property name used to select a value.
- **value:** Data associated with a property key.
- **object literal:** A brace-delimited expression that creates an object.
- **dot notation:** Access such as `book.title`.
- **bracket notation:** Access such as `book[field]`.
- **computed property access:** Selecting a key by evaluating an expression.

## Eli-10

An object is one information card with labeled lines. A class card might have a `title` line and a `seats` line. A dot points at a line whose name you already know: `course.title`. Brackets are for a line name supplied by another note: if `field` says `"seats"`, `course[field]` points to seats. You can replace an entry or add a line.

## Eli's Analogy

Imagine a campus directory card. The headings are keys and the entries beside them are values. `card.phone` points at the printed Phone heading. `card[heading]` reads a note telling it which heading to use. This is not a physical card: JavaScript objects can contain other objects or functions, and `const` does not make the entries immutable.

## Worked Example

Run `const schedule = { day: "Tuesday", start: 9 }; const field = "start"; schedule[field] = schedule[field] + 1; schedule.room = "204"; console.log(schedule.start, schedule["room"]);`. `field` becomes `"start"`, so the program reads 9 and writes 10 to that property. It then adds `room`. Output: `10 204`. `schedule.field` would instead be `undefined` because it looks for the literal key `field`. The example was executed with Bun.

## Common Mistakes

- Using `object.variableName` for a variable-held key; use `object[variableName]`.
- Using dots for a key with a space or hyphen; use brackets and the exact string.
- Believing `const` prevents property changes; it prevents rebinding.
- Expecting a missing ordinary property to be `null`; it is normally `undefined`.

## Compare / Contrast

Dot notation uses a literal identifier; brackets evaluate an expression to obtain the key. Reassigning a binding changes what a variable refers to; property assignment changes data on the object it already refers to.

## Key Takeaway

Objects organize related key–value data. Use dots for known simple keys, brackets for computed or unusual keys, and trace assignments to identify the property that changes.

## Practice Question Bank

1. In `{ name: "Ari" }`, what is `name`? **A property key.**
2. With `const field = "room"`, which expression reads that selected property? **`schedule[field]`.**
3. Why use `profile["home city"]`? **The key has a space.**
4. What does `book.pages = 200` do? **Adds a property.**
5. What does an absent `item.price` normally evaluate to? **`undefined`.**

## Sources

- MDN Web Docs, [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- Ecma International, [ECMAScript Object Type](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-object-type)

## Related Topics

Variables; Arrays; Functions; DOM; Events.

## Editorial Metadata

Original EliExplains synthesis. Status: source-verified, reference-only sources, not public.
