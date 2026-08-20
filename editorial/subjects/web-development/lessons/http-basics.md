# HTTP Basics

## In 30 Seconds

HTTP is the Web's request-and-response protocol. A client, often a browser, asks for a resource with a request; a server sends a response that reports an outcome and may include content. The request identifies a target and has a method such as `GET` or `POST`. The response has a status code such as `200` or `404`. Header fields add context, including information about the message or its content.

## Why This Matters

HTTP gives web developers a shared way to reason about what happened between a browser and a server. Reading a request method, target, status code, and a few relevant headers can turn “the page did not work” into a focused question. That foundation supports later work with browser network tools and APIs, while keeping different concerns separate: DNS finds names, HTTPS adds transport protection, and cookies or storage manage state. HTTP basics concerns the semantics of the exchange itself.

## Learning Objectives

- Define HTTP as a client-server request-and-response protocol.
- Identify the role of a request method, target, response status code, and header field.
- Distinguish the ordinary purposes of `GET` and `POST` without treating either as a security control.
- Interpret broad status-code classes in a browser-network observation.
- Trace a simple request and response without confusing HTTP with DNS, HTTPS, or browser storage.

## The College Version

### HTTP describes an exchange, not the whole journey to a site

HTTP is an application-level protocol for exchanging representations of resources. On the Web, the client is commonly a browser, but a command-line program, mobile app, or server-side program can also be a client. The client initiates a request, and a server sends a response. Calling this a client-server model is useful, but it should not imply that the response always came from one physical computer. A service can be implemented by multiple machines or intermediaries while still presenting an HTTP response to the client.

This lesson deliberately narrows the boundary. A domain name and DNS resolution concern how a name can be located; the Domains and DNS lessons own those ideas. HTTPS concerns protected HTTP communication over TLS; the HTTPS lesson owns that security boundary. Cookies and browser storage concern ways state can be retained or sent later; that later lesson owns those mechanisms. HTTP itself supplies the shared semantics for the messages: what the request asks for, what the response means, and how fields add context. Separating these layers helps when diagnosing a problem. A name-resolution failure, a certificate warning, and a `404` response may all appear during a visit, but they are not the same kind of event.

A browser usually begins page display by requesting the page's HTML, then may request supporting resources such as stylesheets, scripts, and images. Scripts can initiate later requests. Each exchange is evidence about a particular target and moment, not a guarantee that all other requests worked. A request can succeed while the rendered page still has a JavaScript or CSS problem, and a page can partly render while a later subresource is unavailable.

### Requests state an intended operation

A request has control information, including a method and a target. The method communicates the request's intended semantics. `GET` ordinarily asks for the current selected representation of a target resource. That makes `GET` the natural starting point for a browser fetching a document or a developer retrieving an API representation. `POST` asks the target resource to process the representation enclosed with the request according to that resource's own semantics. For example, a service might define a `POST` endpoint that processes a submitted form or creates a new item. The server's documented interface determines exactly what `POST` does.

Method names are not labels for permission. A `GET` request can expose sensitive information if a service is designed badly, and a `POST` request is not automatically private, authenticated, or valid. Security controls belong to the application design and, when appropriate, the HTTPS, authentication, authorization, and input-handling boundaries. In this introductory lesson, the useful distinction is intent: `GET` asks to retrieve a representation; `POST` submits a representation for server-defined processing. Other methods exist, but memorizing a long list is less valuable than reading a method together with the endpoint's documented behavior.

A request can also contain header fields and, for some methods, content. Header fields are name/value information that can extend the message's context or describe content. For example, a client may send an `Accept` header to express which representation formats it can handle. A header does not make a request self-explanatory; it must be interpreted according to the relevant HTTP and application rules. Avoid assuming that every header appears on every request or that a header has the same importance in every situation.

### Responses report a result with status, fields, and possibly content

A response starts with control data that includes a status code. HTTP status codes are three-digit numbers from `100` through `599`, and the first digit identifies the broad class. The five classes are `1xx` informational, `2xx` successful, `3xx` redirection, `4xx` client error, and `5xx` server error. A class is an efficient first clue, not a complete diagnosis. For example, `404 Not Found` is a `4xx` result indicating the server did not find a current representation for the target resource, but it does not by itself prove why a link was incorrect or whether the resource was intentionally removed. Likewise, a `500`-class result tells a client that a server-side error class occurred; it does not reveal a specific root cause to an outside observer.

The rest of a response can add essential context. Header fields may describe the content, provide a location for a redirect, or carry other standardized or application-specific information. Response content, often called the body in everyday developer conversation, can contain HTML, JSON, an image, an error description, or nothing. A successful response does not always include content: `204 No Content` is a successful status specifically used when no additional response content is sent. The meaning of content also depends on the request method and response status. A `200` response to `GET` commonly represents the requested resource's current state; a `200` response to `POST` can instead describe the processing result.

The old text-shaped appearance of an HTTP/1.1 message is a teaching model, not a promise about every wire format. HTTP/2 and later versions use different framing, while preserving the message semantics developers reason about. That is why a network panel can still show a method, status, headers, and content details even when the underlying protocol version is not sending one human-readable block of text.

### Use a compact observation workflow

When you inspect your own site or a course environment, begin with one exchange rather than a broad guess. First identify the request method and target. Next read the response status and its class. Then inspect only the header fields and content relevant to the question. If a page asks for `/catalog/42` and receives `404`, the immediate observation is precise: that request received a client-error-class response. The next step is to check the application's route, link, or known resource identifier—not to conclude that DNS, CSS, or HTTPS caused the response.

A small example makes the roles concrete. A browser might send a `GET` request for `/catalog/42`. A server could answer with status `200`, a `Content-Type` header indicating JSON, and a JSON representation of the item. If the request instead receives `404`, the browser has still completed an HTTP exchange; it received a response whose status reports that the target was not found. If a form submission is designed as `POST`, the response might be `201 Created` after a new resource is made, `204 No Content` after a successful action with no response content, or another status depending on the service's result. Developers should read the status and response details rather than assuming one method always produces one code.

This workflow is descriptive, not an invitation to probe systems without permission. Use browser tools and requests against applications you own, course exercises, or environments where you are authorized to test. For an unfamiliar public service, reading a visible response in ordinary browsing is different from sending repetitive, malformed, or state-changing requests. Responsible web development starts with clear scope and with the least invasive observation that answers the question.

## Key Vocabulary

- **HTTP:** An application-level protocol that defines request-and-response semantics for Web resources.
- **client:** The software that initiates an HTTP request, commonly a web browser.
- **server:** The software that receives an HTTP request and sends a response for a resource or service.
- **request:** An HTTP message from a client that states a method and target and can include fields or content.
- **response:** An HTTP message that reports a request's result with status information and may include fields and content.
- **method:** The request control value that states the intended operation, such as `GET` or `POST`.
- **status code:** A three-digit response value that indicates the result class and semantics of an HTTP exchange.
- **header field:** A named piece of message metadata that can add context about a sender, message, content, or processing.

## Eli-10

HTTP is a set of rules for a browser and a website's server to pass a request and an answer. The browser asks for something, such as a page or a picture. The server answers with a short result number and may send the thing that was requested. The number helps the browser and developer understand whether the request worked, needs to go somewhere else, or had a problem. Extra labels called headers add useful details about the message.

## Eli's Analogy

Think of a library request desk. You hand in a slip that says what you want and what you want the librarian to do with it. The librarian answers with a result card, such as “here is the book” or “that item was not found,” and may hand back the book. Notes on the card provide more detail about the item.

The analogy has limits: a server is not a person at one desk, and HTTP messages are formal protocol data rather than paper slips. It also does not explain how a name is found, how a connection is protected, or how a website remembers a person; those are separate topics.

## Worked Example

A student owns a practice catalog site and opens its browser Network panel. Selecting an item makes the browser send a `GET` request to `/catalog/42`. The panel shows a `200` response and a `Content-Type: application/json` header; the response content contains the item's data. The student then changes the page link to `/catalog/4200` and reloads. The request now receives `404`. The useful conclusion is narrow: the application received an HTTP response in the `4xx` class for that target. The next check is the route or item identifier in the student's own project, not the site's DNS configuration or browser storage. If a form later submits a new item with `POST`, the student should inspect the response status and content rather than assume every `POST` produces the same result.

## Common Mistakes

- **Treating HTTP as the same thing as DNS or HTTPS.** Keep the layers distinct: HTTP defines exchange semantics; DNS concerns name resolution; HTTPS concerns protected HTTP communication.
- **Assuming `POST` makes data private or valid.** `POST` describes server-defined processing; privacy and validation require separate security and application controls.
- **Reading a `4xx` or `5xx` status as a complete explanation.** Use the status class as a clue, then inspect the relevant target, response details, and authorized application context.
- **Assuming a successful response always contains a body.** A `204` response is successful and intentionally has no additional response content.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| `GET` | `POST` | `GET` requests a current selected representation; `POST` asks the target resource to process enclosed content according to its own semantics. |
| Request | Response | A client initiates a request with an intended operation; a server sends a response with a result status and optional content. |
| `404 Not Found` | `500 Internal Server Error` | `404` is in the client-error class; `500` is in the server-error class. Neither code alone diagnoses the underlying cause. |

## Key Takeaway

HTTP lets a client request a target and lets a server report the result. Read method, target, status, and relevant fields together, while keeping HTTP distinct from name resolution, transport protection, and browser state.

## Practice Question Bank

1. Which statement best describes HTTP's basic role on the Web? **It defines request-and-response semantics for fetching or processing Web resources.**
2. What does the HTTP `GET` method ordinarily request? **Transfer of a current selected representation for the target resource.**
3. A Network panel shows `GET /catalog/4200` followed by `404`. What is the focused next check? **The route or identifier, because that target received a client-error-class HTTP response.**
4. Which status-code class represents a successful response? **`2xx`.**
5. Why can a successful HTTP response have no body? **A `204` status can report success with no additional response content.**

## Sources

- [IETF RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)
- [MDN: Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)

## Related Topics

Web Platform; Browser Developer Tools; Fetch/API Basics; HTTPS.

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-20. Standards and documentation sources are reference-only; no source prose was adapted. Status: READY_TO_PUBLISH, `public:false` on acceptance.
