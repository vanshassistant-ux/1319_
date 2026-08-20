# How Websites Work

## In 30 Seconds

Opening a web page is a chain of coordinated jobs. Your browser uses the domain name in an address to find a network destination, sends a request for a resource, and receives a response from a server. It then parses the returned material, requests other resources the page refers to, and turns the result into pixels and interactive controls. HTTP defines the request-and-response conversation; HTTPS is the protected form of that conversation, using TLS.

## Why This Matters

This model makes web problems less mysterious. A page can fail before a browser reaches a server, while it is waiting for a response, or after resources arrive but before the browser has rendered them. The same sequence explains why a page may need several requests, why a domain name is not the same thing as a server, and why HTTPS matters when information travels over a network. It also gives later lessons a place to fit: HTML supplies a document, CSS affects presentation, and JavaScript can request or change resources—but none of those is the whole trip from address bar to page.

## Learning Objectives

- Distinguish the Internet's network infrastructure from the World Wide Web service.
- Explain the high-level roles of a browser, DNS, a web server, and HTTP in a page navigation.
- Describe the difference between an HTTP request and an HTTP response.
- Explain what HTTPS adds at a high level without treating it as a complete security guarantee.
- Trace a simple page load from a typed address through basic rendering.

## The College Version

### The Web uses the Internet; it is not the Internet

The Internet is a network of networks that lets computers exchange data. The World Wide Web is one service that uses that infrastructure: it connects retrievable resources through addresses and hyperlinks, with browsers and servers using shared protocols. Email and other services also use the Internet, so opening a web page is not the same operation as “using the Internet” in every possible sense. Cables, Wi-Fi, routers, Internet providers, and network addresses help data reach a destination. A browser, a web server, web addresses, and HTTP provide the web-specific conversation layered above that infrastructure.

### From a domain name to a destination

A web address normally contains a hostname, such as `www.example.edu`. That name is readable for people, but network delivery ultimately needs an IP address. The Domain Name System (DNS) provides this translation. On a navigation, the browser or operating system may already have a usable cached answer. If not, a DNS lookup asks name servers for the address associated with the hostname. The result is not a downloaded page; it is the information needed to begin reaching the named service. A page can also refer to resources on several hostnames, and each distinct hostname can need its own lookup unless an appropriate cached result is available. A domain name, an IP address, and a web server are therefore not synonyms.

### HTTP gives the browser and server a common exchange

After the browser can reach the intended web service, it uses HTTP for an application-level exchange. HTTP is a request/response protocol. The client—usually a browser here—sends a request that identifies what it wants. The server evaluates that request and returns a response. A response includes a status indicating the result and may include a representation of the requested resource, such as a document, image, or data. HTTP’s core semantics are stateless: the protocol does not itself remember a previous request simply because a new one arrives. Applications can add mechanisms such as cookies or server-side records when they need continuity, but that is a design choice built around HTTP. A browser may make many distinct requests while building one visible page.

### HTTPS protects the HTTP exchange in transit

HTTPS is HTTP sent over a TLS-protected connection. TLS provides encryption for information moving between the browser and server and supports authentication of the server in the usual web setup. HTTPS helps prevent an observer on the network from simply reading or altering the HTTP conversation in transit, and lets the browser check evidence that it is speaking to the intended server name. It does not mean a site is automatically trustworthy in every other way. HTTPS cannot decide whether a page's content is accurate, whether an account holder chose a weak password, or whether server-side application logic has a defect. It is an important boundary, not a seal of overall quality.

### A visible page is assembled, parsed, and rendered

The first successful response is often only a starting point. For a normal document navigation, the browser receives an initial document, reads it, and discovers references to other resources. It can then request those resources as needed. The browser parses the document and relevant styling information, constructs internal structures, calculates layout, and paints pixels to the screen. This means rendering is a process, not a single conversion from a file into a picture. A response can arrive successfully while a later rendering or resource problem prevents the expected result. Good debugging questions separate these stages: did the hostname resolve, did the server send a response, did it report a useful status, did the browser receive the expected resource, and did it discover a missing additional resource?

## Key Vocabulary

- **browser:** A client application that retrieves web resources, interprets them, and presents a web page to a user.
- **web server:** Software or a system that receives web requests and sends responses for resources or application results.
- **DNS:** The Domain Name System, which maps hostnames to IP addresses.
- **IP address:** A numeric network address used to identify a destination for Internet Protocol delivery.
- **HTTP:** A stateless application-level protocol in which clients and servers exchange requests and responses.
- **request:** A message a client sends to ask a server to perform an action on or provide a resource.
- **response:** A server's message reporting the result of a request and, when appropriate, carrying a resource representation.
- **HTTPS:** HTTP carried over a TLS-protected connection.
- **rendering:** The browser process of turning parsed web resources into a laid-out, painted page.

## Eli-10

Imagine you ask a library for a particular book. Your browser is the helper who takes the request. The website name is like the library's easy-to-remember name, and DNS is the directory that finds where that library can be reached. The browser asks the server for a page using HTTP. The server answers with the first materials, and the browser notices other materials it needs, such as pictures or instructions for displaying the page. Then it organizes all of that into what you see.

## Eli's Analogy

It is like ordering a meal from a restaurant through a delivery service. The restaurant name must be matched with an address, the order tells the kitchen what is wanted, and the delivered bag may contain several items that must be arranged before the meal is ready. HTTPS is like using a sealed, verified delivery channel so strangers along the route cannot simply read or swap the order.

The analogy has limits. A browser and server exchange precisely defined network messages, not spoken orders, and a page may involve caches, several servers, and many requests. A sealed delivery bag is also not a perfect model of TLS: HTTPS protects the connection in transit but does not independently judge whether the restaurant's food or the page's claims are good.

## Worked Example

Suppose Maya enters `https://catalog.example.edu/books` in a browser. The browser needs an IP address for `catalog.example.edu`, so it uses a cached DNS result if one is available or performs a lookup. It establishes a protected HTTPS connection and sends an HTTP request for `/books`. The server returns a response whose status and body describe the result. If the initial document refers to a logo and a stylesheet on other hostnames, the browser may make additional requests after discovering them. Finally, it parses the document and its related resources, calculates where content belongs, and paints the page. If Maya sees a server error status, she is looking at a request/response problem; if the document arrives but the logo is absent, an additional-resource request may be the more specific question.

## Common Mistakes

- **Treating the Internet and the Web as identical.** The Internet is underlying network infrastructure; the Web is a service that uses it.
- **Assuming DNS downloads a page.** DNS supplies destination information; HTTP(S) handles a later resource exchange.
- **Thinking one response is always the whole visible page.** The browser can discover and request additional resources while processing an initial document.
- **Treating HTTPS as proof everything about a site is safe or true.** HTTPS protects the connection in transit; it does not guarantee accurate content or sound application design.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| DNS | HTTP | DNS provides destination information for a hostname; HTTP defines a request/response exchange for web resources. |
| HTTP | HTTPS | HTTPS is HTTP carried over TLS protection, adding encryption and server authentication to the connection. |
| Browser | Web server | The browser normally initiates requests; the server handles those requests and sends responses. |

## Key Takeaway

A web page is assembled through a sequence: resolve a hostname, exchange HTTP(S) requests and responses with a server, then parse and render the returned resources. DNS, HTTP, HTTPS, and rendering solve different parts of that sequence.

## Practice Question Bank

1. **What is DNS mainly used for during a typical web navigation?**
   - A. Mapping a hostname to destination information such as an IP address. **Correct.**
   - B. Encrypting the page after it has rendered.
   - C. Writing the HTML document for the server.
   - D. Painting pixels on the browser screen.
2. **Which statement best describes HTTP?**
   - A. A naming system for translating domains into IP addresses.
   - B. A stateless application-level protocol for client requests and server responses. **Correct.**
   - C. A visual layout language used only inside browsers.
   - D. A guarantee that every site is trustworthy.
3. **A browser receives an initial document that refers to an image and a stylesheet. What should you expect next?**
   - A. The browser must stop because one response can contain only text.
   - B. DNS will convert the image into an IP address.
   - C. The browser can discover those references and make additional resource requests. **Correct.**
   - D. The server will automatically paint the image on the user's screen.
4. **What does HTTPS add to the basic HTTP exchange?**
   - A. A rule that all server responses must be successful.
   - B. A promise that a site's content is accurate.
   - C. A replacement for every DNS lookup.
   - D. TLS protection that encrypts the exchange in transit and supports server authentication. **Correct.**
5. **A page name resolves and the server returns a successful initial document, but a referenced image is missing. Which conclusion is most justified?**
   - A. DNS must have failed for the main page.
   - B. The browser may need to investigate the separate request for that image or its response. **Correct.**
   - C. HTTP cannot transfer images.
   - D. The browser has already finished rendering every resource.

## Sources

- MDN Web Docs, [How does the Internet work?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)
- MDN Web Docs, [Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
- IETF, [RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)
- MDN Web Docs, [Populating the page: how browsers work](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work)
- MDN Web Docs, [HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS)

## Related Topics

- HTTP Basics
- Domains
- DNS
- HTTPS
- Web Platform

## Editorial Metadata

- Status: READY_TO_PUBLISH
- Research status: source-verified
- Rights status: Reference-only sources; no source prose adapted.
- Research date: 2026-08-20
