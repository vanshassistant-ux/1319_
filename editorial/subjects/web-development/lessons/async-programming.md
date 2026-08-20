# Async Programming

## In 30 Seconds

Asynchronous JavaScript starts an operation and lets the surrounding program continue instead of waiting for every result immediately. A Promise represents the operation's eventual outcome. Use `.then()` and `.catch()` to handle fulfillment and rejection, or write an `async` function and use `await` inside it. `await` pauses that async function at one point; it does not turn the whole program into a stop sign.

## Why This Matters

Web programs often coordinate work whose result is not available right away. Promises give that later result—and a possible failure—a defined path through a program. This model prevents the mistake of treating an unfinished result as if it were already a value. It also supports clear error handling and helps developers decide whether work truly must happen in sequence.

## Learning Objectives

- Define Promise, pending, fulfilled, rejected, and settled.
- Trace a promise chain with a rejection handler.
- Explain what `async` changes about a function's return value.
- Apply `await` with `try...catch` to handle rejection.
- Distinguish dependent work from independent work.

## The College Version

### Promises describe a result that is not ready yet

A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value. It starts **pending**, then becomes **fulfilled** with a value or **rejected** with a reason. Fulfilled and rejected promises are **settled**: their state cannot change again. A promise is not the completed value. A caller receives an object describing a future outcome.

`then()` registers work for fulfillment and `catch()` registers work for rejection. `then()` returns a new promise, so returning values or promises from handlers creates a readable sequence rather than deeply nesting handlers. A rejection can come from the original operation, an explicit `throw`, or an error in a handler. A final `catch()` can handle an earlier unhandled rejection.

### async functions and await use the same model

An `async` function call always returns a Promise. A body that returns `42` makes that promise fulfill with `42`; an error escaping the body makes it reject. Therefore, calling an async function does not immediately give its eventual ordinary value.

Within an async function, `await expression` waits for the expression's promise-like result to settle. A fulfillment value becomes the await expression's value; a rejection reason is thrown at that line. This makes `try...catch` a natural way to handle awaited failures. A handler should provide context, recover deliberately, or let the error travel to a layer that can make a better decision. In a normal non-module script, `await` must be inside an async function.

### Choose ordering from dependencies

Sequential `await` is correct when a later operation needs an earlier result. It is wasteful when operations are independent. In that case, start both promises and coordinate them with `Promise.all([first, second])`. It fulfills with values in input order when every input fulfills, and rejects if an input rejects. Do not make every task concurrent automatically: dependencies, resource limits, and failure policy still matter.

## Key Vocabulary

- **Promise:** an object representing an operation's eventual completion or failure and its resulting value.
- **pending:** the initial promise state before fulfillment or rejection.
- **fulfilled:** successfully completed with a value.
- **rejected:** completed with a failure reason.
- **settled:** either fulfilled or rejected.
- **async function:** a function whose call returns a Promise and whose body can use `await`.
- **await:** an operator that pauses an async function until its operand settles.

## Eli-10

Imagine asking a library helper to find a book in storage. You get a claim ticket now, not the book. The ticket is like a Promise: it will later lead to either the book being ready or a notice that something went wrong. An `async` function is a helper who works with those tickets. When it uses `await`, that one helper pauses at a ticket until it is resolved, then continues with the book or handles the problem. Other people in the library can still keep working.

## Eli's Analogy

A Promise is a library claim ticket. `.then()` is an instruction for what to do when the book arrives; `.catch()` is an instruction for a problem. `await` is the helper waiting at that one counter for the ticket's result.

The analogy has limits: a Promise is not a physical ticket and has no promised time. `await` pauses an async function's progress, not a person or every task in the program.

## Worked Example

This Bun-verified program has no network work:

```js
async function labelJob() {
  const label = await Promise.resolve("ready");
  return label.toUpperCase();
}
labelJob().then(console.log);
Promise.reject(new Error("paused")).catch(error => console.log(error.message));
console.log("started");
```

Bun printed `started`, then `paused`, then `READY`. `labelJob()` immediately returned a promise, so the program could print `started` before its awaited fulfillment continuation ran. The separate rejected promise called its `catch` handler. Inside `labelJob`, `await` produced `"ready"`, and the async function's return fulfilled its own promise with `"READY"`.

## Common Mistakes

- **Mistake:** Treating a Promise as its fulfilled value. **Correction:** Await it in an async function or attach a handler.
- **Mistake:** Using `await` outside an async function in a normal script. **Correction:** Put it in an async function; top-level await is a separate module feature.
- **Mistake:** Handling only success. **Correction:** Add deliberate `catch()` or `try...catch` handling.
- **Mistake:** Serially awaiting independent work. **Correction:** Start independent promises first and coordinate them with `Promise.all` when appropriate.

## Compare / Contrast

- **fulfilled vs. rejected:** fulfillment has a success value; rejection has a failure reason.
- **`.then().catch()` vs. `try { await ... } catch`:** both handle promise outcomes; the latter uses statement syntax inside an async function.
- **sequential awaits vs. `Promise.all`:** sequence dependent steps, but coordinate independent work.

## Key Takeaway

Promises make later success and failure explicit. Async functions still return promises; `await` obtains a settled result only inside the async function, where `try...catch` can handle rejection.

## Practice Question Bank

1. Which state describes a Promise before it has fulfilled or rejected? **Answer: pending.**
2. What does calling an async function return immediately? **Answer: a Promise.**
3. What happens when an awaited promise rejects? **Answer: its rejection reason is thrown at the await expression.**
4. What can handle a rejection from an earlier chain link? **Answer: a final `catch` handler.**
5. How can independent operations avoid accidental serial waiting? **Answer: start both and coordinate with `Promise.all`.**

## Sources

- [MDN: How to use promises](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises)
- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [ECMAScript: Promise Objects](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-objects)

## Related Topics

JavaScript Fundamentals; Functions; Fetch/API Basics; Events; Web Platform.

## Editorial Metadata

Original EliExplains synthesis, source-verified 2026-08-20. Reference-only documentation and specification; no source prose adapted. The worked example was executed with Bun.
