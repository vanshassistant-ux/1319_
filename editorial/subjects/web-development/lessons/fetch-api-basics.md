# Fetch API Basics

## In 30 Seconds

The browser Fetch API lets JavaScript request a network resource. `fetch()` returns a Promise; when it resolves, inspect the `Response`. `response.ok` is true only for statuses 200–299. Then `response.json()` can asynchronously read and parse JSON. A 404 is still a response, so it needs an explicit check.

## Why This Matters

Fetch connects a page to public data and application endpoints. Separating “a response arrived” from “this response is acceptable” gives a program a predictable place to show a clear failure message.

## Learning Objectives

- Define `fetch()` and `Response`.
- Distinguish rejection from an HTTP error response.
- Use `response.ok`.
- Explain `response.json()`.
- Apply a check-before-parse flow.

## The College Version

### A request begins asynchronously

`fetch()` is a browser API that starts a request and returns a Promise. A Promise represents a value that will arrive later. When it resolves, it provides a `Response`, which describes the HTTP reply and offers body-reading methods. JavaScript’s `await` can make the sequence readable: first await the request, then work with its response. The API is supplied by the browser; `async` and `await` organize waiting. This lesson uses a public relative path such as `/data/message.json`. Client-side code should not expose secrets or make unauthorized requests.

### A response is not necessarily success

A resolved fetch Promise does not prove that useful data was received. A malformed URL or network failure can reject the Promise, but an HTTP 404 or 500 can still resolve with a `Response`. `response.ok` is true only when status is 200 through 299. Code can check `if (!response.ok)` and choose its own error path before parsing expected data. That is a deliberate application rule, not a complete retry, authentication, or security policy.

### JSON takes another asynchronous step

A Response body is not automatically a JavaScript object. `response.json()` reads the body and returns another Promise that resolves to JSON-parsed data. A usual sequence is await `fetch(url)`, status check, then await `response.json()`. A valid JSON value can still have an unexpected shape, so a program should check fields it needs. Invalid JSON can also fail parsing, which is one reason to use `try`/`catch` in a small interface example.

### A constrained visible pattern

An async function can request `/data/message.json`, test `response.ok`, parse it, and assign `data.message` to an existing status element’s `textContent`. The catch path can show a general failure message for rejected requests, unacceptable status, or parsing failure. Each step has a narrow role: request, acceptance test, parsing, and display. It deliberately does not cover credentials, authorization headers, cross-origin policy, or private data.

## Key Vocabulary

- **Fetch API:** Browser interfaces for requests and responses.
- **fetch():** Starts a request and returns a Promise.
- **Promise:** Represents an eventual asynchronous result.
- **Response:** HTTP response object returned by fetch.
- **HTTP status:** Numeric result code in a response.
- **response.ok:** True for status 200–299.
- **JSON:** Text format for structured data.
- **response.json():** Asynchronously reads and parses JSON.

## Eli-10

Fetch is like asking a library desk for a book. First you get a claim ticket, not the book. Later, the desk may bring the book or a “not found” note. Code has to inspect the reply before treating it as the book it wanted.

## Eli's Analogy

The Promise is a tracking slip, the Response is a package, `ok` is the inspection label, and `json()` opens a package expected to hold organized information.

The analogy stops there: an HTTP response is a protocol message, and JSON parsing can fail separately from the request.

## Worked Example

With `<p id="status">Loading…</p>` and public `/data/message.json` containing `{"message":"Welcome"}`, await `fetch('/data/message.json')`. If `!response.ok`, throw an error. Otherwise await `response.json()` and set `status.textContent = data.message`. A 404 can resolve fetch but has `ok` false, so it shows a controlled failure message rather than being used as expected data.

## Common Mistakes

- Assuming fetch rejects for every 404 or 500.
- Treating `Response` as parsed data.
- Parsing before checking an unacceptable status.
- Assuming arbitrary JSON has the fields an interface needs.

## Compare / Contrast

A rejected fetch reflects request or network failure; an HTTP error response can still be a resolved `Response`. `response.ok` evaluates status; `response.json()` reads and parses the body.

## Key Takeaway

Await `fetch()`, check `response.ok`, then parse the body you expect. Treat request failure, unacceptable status, and parsing failure as different possibilities.

## Practice Question Bank

See the structured review record for five verified questions.

## Sources

- MDN: `Window.fetch()`
- MDN: `Response.ok`
- MDN: `Response.json()`
- WHATWG Fetch Standard

## Related Topics

Async Programming, DOM, Forms, Web Platform.

## Editorial Metadata

Original EliExplains synthesis. Reference-only documentation sources; checked 2026-08-20.
