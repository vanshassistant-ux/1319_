# How the Web Works

## In 30 Seconds

The World Wide Web is a service that runs on the internet. When you open a page, your browser (the client) asks a web server for it by name. DNS turns that human-readable domain into a numeric IP address, your browser sends an HTTP request, and the server responds with the page's files. HTTPS wraps that exchange in encryption so no one in between can read or change it. The browser then assembles HTML, CSS, and JavaScript into what you see.

## Why This Matters

Almost everything you do online for school, work, and daily life travels over the Web, so knowing how a page actually reaches you turns a mysterious box into a system you can reason about. It helps you read a URL and judge whether a link is trustworthy, understand why the padlock and HTTPS matter, and troubleshoot when a site will not load. That mental model is the foundation for later topics in security, privacy, and web development, and it makes you a more capable, less easily fooled participant in an online world.

## Learning Objectives

- Distinguish the World Wide Web from the internet it runs on.
- Explain the client-server model and identify the client and server when a page loads.
- Break a URL into its scheme, host/domain, and path.
- Describe how DNS translates a domain name into an IP address.
- Trace the HTTP/HTTPS request-response round trip that loads a page.
- Explain why HTTPS encryption matters for a request and response.

## The College Version

### The Web is a service on the internet

It is easy to treat "the internet" and "the Web" as the same thing, but they are different layers. The internet is the underlying infrastructure: the physical cables, wireless links, routers, and addressing scheme that let computers around the world exchange data. The World Wide Web is one service built on top of that infrastructure. Other services, such as email, also ride on the same internet. When people talk about visiting a site, following a link, or loading a page, they are using the Web specifically. Keeping the distinction straight matters because problems at the two layers look different: a dead Wi-Fi connection is an internet-infrastructure problem, while a broken link or a server that returns an error is a Web problem. This lesson stays at the Web layer and treats the underlying IP-addressing and packet-routing machinery as a given.

### Clients and servers

The Web follows a client-server model. The client is the device you are using together with the software that reaches the Web, which is normally a web browser. The server is a computer, usually running continuously in a data center, that stores web pages and applications and hands out copies when asked. When you open a page, the browser does not create the page; it requests a copy from the server, which sends it back over the internet. Your browser then renders that copy locally. This request-and-serve pattern is why the same page can be delivered to millions of different clients: the server holds one authoritative copy, and each visitor's browser fetches its own. The roles are asymmetric. The client always starts the conversation by making a request, and the server's job is to listen for requests and respond.

### What a web page is made of

The "page" the server sends is not a picture; it is a set of text files that your browser knows how to interpret. The primary language is HTML (HyperText Markup Language), which describes the structure and content of the page: its headings, paragraphs, links, and images. CSS (Cascading Style Sheets) describes presentation, such as colors, fonts, and layout. JavaScript adds behavior, letting the page respond to clicks, update without reloading, and run small programs. A single page usually pulls in several of these files, plus images and other assets, each fetched from a server. The browser downloads them, assembles them, and paints the result on screen. At this level you only need to recognize the three languages by name and their jobs; writing them belongs to a web-development course.

### URLs: the address of a resource

Every resource on the Web, whether a page, an image, or a file, has an address called a URL (Uniform Resource Locator). Reading a URL from left to right, the first part is the scheme, such as `https`, which tells the browser which protocol to use. After the `://` comes the host or domain, such as `developer.mozilla.org`, which names the server. A port number may follow, though standard ports (80 for HTTP, 443 for HTTPS) are usually left off. Then comes the path, such as `/en-US/docs/`, which points to the specific resource on that server. A URL can also carry an optional query string after a `?` for extra parameters and a fragment after a `#` that jumps to a spot within the page; the fragment is handled by the browser and is not sent to the server. Being able to read a URL, and especially to identify the real domain, is a practical safety skill.

### DNS: turning names into numbers

Servers are actually identified on the internet by numeric IP addresses, which are hard for people to remember and can change over time. The Domain Name System (DNS) is the directory that lets us use memorable names instead. ICANN, which helps coordinate the system, compares an IP address to a telephone number and the domain name to the familiar name you look up instead of the number. When you enter a domain, your browser first checks whether it already knows the matching IP address from a local cache. If not, it asks a DNS server, which looks up the name and returns the current IP address. Only then can the browser open a connection to the right server. This lookup is usually invisible and fast, but it is a required first step; if DNS cannot resolve a name, the page will not load even when the internet connection is fine.

### HTTP, HTTPS, and the round trip

Once the browser has the server's IP address, it communicates using HTTP (HyperText Transfer Protocol). HTTP is a stateless, application-layer request-response protocol: the client sends a request that names the resource it wants and the method (for example, GET to retrieve a page), and the server sends back a response containing a status code, such as 200 for success, along with the requested data. "Stateless" means each request stands on its own; the protocol does not, by itself, remember previous requests. HTTPS is simply HTTP carried over a TLS-encrypted connection. The encryption keeps anyone between you and the server from reading or altering the exchange, which is why sensitive activity like signing in or paying should always be over HTTPS. Putting the whole round trip together: you enter a URL, DNS resolves the domain to an IP address, the browser opens a TCP connection (with a TLS handshake for HTTPS), it sends an HTTP request, the server returns a response with the page's files delivered as packets, and the browser reassembles and renders them into the page you see.

## Key Vocabulary

- **World Wide Web** — A service running on the internet that links documents and applications, retrieved by browsers using HTTP.
- **Client** — The user's device and software (typically a web browser) that requests resources from a server.
- **Web server** — A computer that stores web pages and applications and sends copies to clients in response to their requests.
- **URL (Uniform Resource Locator)** — The address of a resource on the Web, made of a scheme, a host/domain, and a path, plus optional parts.
- **Domain name** — A human-readable name for a server, such as example.org, read right to left from the top-level domain.
- **IP address** — A numeric address that identifies a device on the internet, which DNS maps domain names to.
- **DNS (Domain Name System)** — The internet's directory service that translates a domain name into the IP address of its server.
- **HTTP (HyperText Transfer Protocol)** — The stateless request-response protocol browsers and servers use to exchange web resources.
- **HTTPS** — HTTP carried over a TLS-encrypted connection, protecting the request and response from being read or altered in transit.
- **Render** — The browser's work of turning downloaded HTML, CSS, and JavaScript into the visible page.

## Eli-10

When you visit a website, your browser is not making the page. It is asking another computer, a server, to send it a copy. But computers find each other by number, not by name, so your browser first looks up the site's name in a giant directory called DNS to get that number. Then it sends a polite request over HTTP that says "please send me this page," and the server answers with the files. When the web address starts with HTTPS, the whole conversation is scrambled so nobody snooping in between can read it.

## Eli's Analogy

Loading a web page is like ordering takeout by phone. You look up the restaurant's number in a contacts list (that is DNS turning a name into a number), you call and place your order (your browser's HTTP request), and the kitchen sends the food back to you (the server's response). If the line were tapped, HTTPS is like speaking in a code only you and the restaurant share.

**Where the analogy breaks down:** A phone call is one continuous conversation, while HTTP is stateless: each request is a fresh, separate call that the server does not automatically remember. A restaurant makes your meal to order, but a web server usually just sends a copy of files it already has. And real page loads fetch many pieces (HTML, images, scripts) in rapid parallel requests, not one tidy order.

## Worked Example

Say you type `https://en.wikipedia.org/wiki/Web_browser` and press Enter. First your browser reads the URL: the scheme is `https`, the host is `en.wikipedia.org`, and the path is `/wiki/Web_browser`. It needs a number, not a name, so it asks DNS to resolve `en.wikipedia.org` and gets back an IP address. Using that address it opens a TCP connection to Wikipedia's server and, because this is HTTPS, completes a TLS handshake so the exchange is encrypted. It then sends an HTTP GET request for `/wiki/Web_browser`. The server replies with a 200 OK status and the page's HTML, which references CSS and images that trigger a few more requests. As the files arrive as packets, the browser reassembles and renders them, and the article appears. If DNS had failed to resolve the name, none of the later steps could happen and you would see an error instead.

## Common Mistakes

- **Using "the internet" and "the Web" as interchangeable terms.** The internet is the underlying infrastructure; the Web is one service that runs on it, alongside others like email.
- **Thinking a URL, a domain name, and an IP address are the same thing.** The domain is one part of a URL, and DNS maps that domain to a numeric IP address the network actually uses.
- **Believing the browser builds the web page itself.** The server holds the page; the browser requests a copy and only renders what the server sends back.
- **Assuming HTTPS proves a site is safe or trustworthy.** HTTPS only encrypts the connection so it cannot be read or altered in transit; it does not vouch for who runs the site or whether its content is honest.
- **Judging a link by the words shown instead of the real domain.** Read the host portion of the actual URL; visible link text can differ from where the link truly points.

## Compare / Contrast

- **The internet vs. The World Wide Web** — The internet is the physical and logical network infrastructure; the Web is a service of linked resources delivered over that infrastructure by HTTP.
- **Domain name vs. IP address** — A domain name is a human-readable label; an IP address is the numeric address of a server. DNS translates the first into the second.
- **HTTP vs. HTTPS** — Both carry the same request-response messages, but HTTPS runs over a TLS-encrypted connection so the exchange cannot be read or tampered with in transit.
- **Client vs. Server** — The client (your browser) starts every exchange by requesting a resource; the server waits for requests and responds with the resource.

## Key Takeaway

Opening a web page is a client-server round trip: DNS turns the domain into an IP address, your browser sends an HTTP request, the server responds with the page's files, and HTTPS encrypts that exchange so it stays private and unaltered.

## Practice Question Bank

1. **Which statement best captures the relationship between the internet and the World Wide Web?**
   - A. They are two names for exactly the same system.
   - B. The internet is the underlying infrastructure, and the Web is one service that runs on top of it.
   - C. The Web is the infrastructure, and the internet is a website hosted on it.
   - D. The Web replaced the internet once browsers were invented.
   - **Answer: B.** The internet is the network infrastructure (cables, routers, addressing); the Web is one service built on top of it, alongside others such as email. They are not identical, neither replaced the other, and the Web is not the infrastructure.

2. **In the client-server model of the Web, which action does the client always perform?**
   - A. It stores the only authoritative copy of the web page.
   - B. It waits passively until a server sends it a page.
   - C. It permanently assigns IP addresses to servers.
   - D. It initiates the exchange by sending a request for a resource.
   - **Answer: D.** The client (your browser) always starts the conversation by requesting a resource. The server stores the authoritative copy and waits for requests; assigning IP addresses is not the client's role.

3. **In the URL `https://shop.example.com/cart/items`, which part is the host (domain)?**
   - A. shop.example.com
   - B. https
   - C. /cart/items
   - D. example
   - **Answer: A.** The host (domain) is `shop.example.com`, the name of the server. `https` is the scheme, `/cart/items` is the path, and `example` alone is only one label of the domain, not the full host.

4. **What does the Domain Name System (DNS) do when you enter a web address?**
   - A. It encrypts the page so no one can read it in transit.
   - B. It stores the web page's HTML, CSS, and JavaScript files.
   - C. It translates the human-readable domain name into the server's numeric IP address.
   - D. It ranks websites so the most relevant one appears first.
   - **Answer: C.** DNS is the directory that maps a domain name to the IP address the network uses to reach the server. Encryption is HTTPS/TLS, storing the page files is the web server's job, and ranking results is what a search engine does.

5. **A student signs in to a banking site over HTTPS. What does the HTTPS specifically provide compared with plain HTTP?**
   - A. It encrypts the request and response so they cannot be read or altered in transit.
   - B. It guarantees the website's information is accurate and the business is honest.
   - C. It makes the page load faster by skipping the DNS lookup.
   - D. It lets the browser build the page without contacting any server.
   - **Answer: A.** HTTPS is HTTP over a TLS-encrypted connection, so an eavesdropper cannot read or tamper with the exchange. It does not vouch for the honesty or accuracy of the site, does not skip DNS, and does not remove the need to contact the server.

## Sources

- **MDN Web Docs — "How the web works"** (Mozilla; CC BY-SA, reference-only): https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works — clients (user device + browser) and servers (computers that store pages and send a copy on request); the page-load steps and the roles of HTML, CSS, and JavaScript.
- **MDN Web Docs — "What is a URL?"** (Mozilla; CC BY-SA, reference-only): https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL — a URL as the address of a resource, and its parts (scheme, authority/host, port, path, query, fragment).
- **MDN Web Docs — "What is a domain name?"** (Mozilla; CC BY-SA, reference-only): https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name — domain names as human-readable stand-ins for IP addresses and the DNS lookup flow (cache, then DNS server, then connect).
- **MDN Web Docs — "An overview of HTTP"** (Mozilla; CC BY-SA, reference-only): https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview — HTTP as a stateless client-server protocol over TCP; request and response structure; HTTPS as HTTP over a TLS-encrypted connection.
- **MDN Web Docs — "How does the Internet work?"** (Mozilla; CC BY-SA, reference-only): https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work — the internet as infrastructure versus the Web as a service built on top of it.
- **IETF RFC 9110 — "HTTP Semantics"** (standards body, reference-only): https://www.rfc-editor.org/rfc/rfc9110.html — HTTP defined as a family of stateless, application-level request/response protocols in which clients send requests to an identified origin server that responds; resources identified by URIs (http/https schemes).
- **ICANN — "Domain Name System (DNS)," Acronyms and Terms** (reference-only; read via browser user-agent): https://www.icann.org/en/icann-acronyms-and-terms/domain-name-system-en — DNS lets a familiar domain name be used instead of a hard-to-remember IP address, likening an IP address to a telephone number.

## Related Topics

- computer-literacy:foundations:internet-basics
- computer-literacy:foundations:browsers
- computer-literacy:foundations:search-engines
- computer-literacy:foundations:email-basics

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** MDN Web Docs (CC BY-SA), IETF RFC 9110, and ICANN used reference-only, with no source prose adapted.
- **Transformation:** Facts drawn from MDN Web Docs, IETF RFC 9110, and ICANN, verified against each source, and rewritten as original EliExplains prose; no source wording reproduced.
