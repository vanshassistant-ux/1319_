# DNS

## In 30 Seconds

The Domain Name System (DNS) is a distributed naming system for the Internet. It lets software ask for information associated with a domain name, such as an address record. A resolver coordinates those lookups, name servers provide DNS data, and caches can reuse a recent answer. A time to live (TTL) limits how long a record may be cached. DNS supplies naming information; it does not download a web page or establish HTTPS.

## Why This Matters

People use names such as `example.edu`, while network software needs precise information to reach a named service. DNS connects those needs. It helps explain why a name lookup can succeed before an HTTP request begins, why a recent answer may come from a cache, and why a DNS change may not appear everywhere immediately. It also prevents a common debugging mistake: treating every website failure as a DNS failure.

## Learning Objectives

- Define DNS, a resolver, a name server, and a resource record.
- Distinguish a domain name from the information returned for that name.
- Explain the high-level roles of A and CNAME records.
- Interpret a TTL as a cacheability limit, not a delivery guarantee.
- Trace a bounded lookup without confusing DNS with HTTP or HTTPS.

## The College Version

### DNS is a naming system with several roles

DNS provides the naming layer that connects human-readable names to technical information. RFC 1034 describes its domain name space as a tree: labels form a hierarchy, and each node can have information associated with it. A name such as `portal.school.example` is therefore an identifier in a structured namespace, not merely a decorative website label. Different portions of the tree can be served by different organizations and name servers, so DNS is distributed rather than one global directory on one computer.

Three roles are useful to distinguish. A user program is the application that wants an answer, such as a browser. A resolver handles DNS lookup work on that program's behalf. A name server provides DNS information. A device may use an operating-system resolver and a nearby recursive resolver, but the conceptual division remains: an application asks, a resolver obtains or reuses an answer, and name servers provide data.

A DNS name is not an IP address, a web server, or a web page. A name can be used to ask for an address record, but DNS can hold other kinds of data too. Network software uses address information for later delivery; a server handles later application work. A browser normally performs HTTP only after it has enough destination information to connect, while HTTPS protects that later HTTP exchange. These steps are related during a visit, but they are separate systems with different failure modes.

### Resource records give answers a type

DNS data is organized as resource records. RFC 1035 specifies an owner name, type, class, TTL, and record data. The type determines how the record data is interpreted. An A record contains an IPv4 host address. A CNAME record identifies the canonical name for an alias. NS records identify name servers for a zone, and MX records identify mail-exchange routing information. DNS does not have one generic answer value for every name; a question asks for a name and a particular record type.

For example, a program may ask for an A record for `learn.example`. A usable answer can provide an IPv4 address associated with that name. If the name is configured as an alias through a CNAME record, the resolver may need to follow that canonical-name relationship before it can obtain the address information requested. That is why one visible hostname can involve multiple relevant records. The detailed rules for referrals and recursion belong to DNS standards; the practical web-development habit is to read a record's name, type, and data together.

### Caches trade freshness for fewer repeated lookups

A resolver can answer from cached data when it has a still-usable result. Caching reduces repeated work and can make later lookups faster, but it means an answer need not be fetched anew for every visit. RFC 1035 defines the TTL as the interval for which a resource record may be cached before its source is consulted again. A TTL is a cache-control value for DNS data. It is not a promise that a page will load quickly, that a server is healthy, or that every person will observe a change at the same instant.

Imagine that a resolver receives an address record with a TTL of 300 seconds. It can retain that record for up to five minutes. If another local client asks the same resolver for the same record type while the record remains usable, the resolver may answer from its cache. After expiry, it must seek refreshed information before treating the cached record as current. A tool may show only the time remaining when it received a cached answer, so that displayed number is not necessarily the record's original TTL.

This is why DNS updates need planning. An organization can change authoritative DNS data while resolvers that already obtained the prior record continue using it until their cached TTLs expire. Other caching layers and application behavior can affect one person's observation. The disciplined conclusion is narrow: TTL bounds permitted caching of that record; it neither proves availability nor diagnoses every connection problem.

### Use a focused lookup workflow

In an authorized development environment, begin with a precise question: which hostname is being looked up, and which record type does the application need? Then check whether the resolver returned an answer of the expected type and whether caching could explain a recently changed value. A diagnostic tool can display record rows for a requested type, but that result reflects the resolver, time, and data available for that query.

Keep the next boundary clear. A successful DNS answer means that naming information was returned. It does not prove that a network connection, TLS authentication, HTTP response, or page render will succeed. Conversely, a broken page does not prove DNS failed. Locate the stage for which there is evidence, then investigate that stage rather than changing unrelated settings.

## Key Vocabulary

- **DNS:** The Domain Name System, which provides information associated with hostnames.
- **domain name space:** The hierarchical tree of DNS names in which nodes can have associated information.
- **resolver:** Software that obtains or reuses DNS answers for an application.
- **name server:** A server that provides DNS information.
- **resource record:** A typed DNS data entry with an owner name, TTL, and record data.
- **A record:** A resource-record type that carries an IPv4 host address.
- **CNAME record:** A record that identifies the canonical name for an alias.
- **TTL:** A time-to-live value that limits how long a record may be cached before its source is consulted again.
- **DNS cache:** Stored DNS information a resolver can reuse while the record remains cacheable.

## Eli-10

DNS helps a computer look up information connected to a name. When you type a site name, your device usually asks a resolver, which checks whether it already knows a recent answer. If it does not, it asks the relevant name servers. The answer might include an address for the name, but DNS can store different kinds of records. That answer can help start a connection, but it is not the web page itself.

## Eli's Analogy

Think of a school directory. A student asks where a club meets, and the office checks a directory card. The card has a category and value: a meeting location is different from a club leader or mailing address. The office may keep a recent copy, but the card says when that copy must be checked again. Likewise, a resolver looks up typed records, and a TTL limits how long a cached copy can be reused.

The analogy has limits. A resolver does far more than an office clerk, and a successful lookup does not guarantee that a website visit will succeed. DNS supplies naming data; later connection and web-exchange steps are separate.

## Worked Example

In an authorized terminal, a query such as `dig example.com A +noall +answer` asks for A records. Live addresses and remaining TTLs change, so use an illustrative row for a stable reading exercise:

```text
learn.example. 300 IN A 198.51.100.23
```

Read the row as name, remaining TTL, class, type, and record data. It says the query received an IPv4-address record and that the displayed answer had 300 seconds of cacheability at that moment. It does **not** say that an HTTP request succeeded. A later smaller TTL may simply show a cached answer counting down; when it expires, the resolver must refresh rather than keep treating the old value as current.

## Common Mistakes

- **Saying DNS downloads the website.** DNS returns naming information; a later connection and HTTP or HTTPS exchange obtain web resources.
- **Treating a domain name, IP address, and server as identical.** A name identifies a lookup target, an address supports network delivery, and a server handles later service work.
- **Treating TTL as a countdown to an outage or guaranteed propagation time.** It limits caching of one record and does not describe every cache layer.
- **Taking an A record as proof every service works.** It supplies IPv4 address data; check later protocol stages separately when authorized.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Domain name | IP address | A domain name is an identifier in DNS; an IP address is network address information DNS can return for a name. |
| Resolver | Name server | A resolver obtains or reuses answers for an application; a name server provides DNS information. |
| A record | CNAME record | An A record carries an IPv4 address; a CNAME names the canonical target of an alias. |
| DNS lookup | HTTP request | A DNS lookup obtains naming information; HTTP exchanges a request and response for web resources. |

## Key Takeaway

DNS is a distributed system for typed information about names. A resolver can use a cached record only for its permitted TTL, and a successful DNS answer is one step before—not proof of—a later connection and web request.

## Practice Question Bank

1. What does a DNS record type tell a resolver? **How to interpret that record's data.**
2. What does a resolver do when it has no usable cached answer? **It obtains DNS information from name servers.**
3. How are DNS and HTTP related? **DNS can provide naming information before HTTP exchanges web resources.**
4. What can a resolver do two minutes after caching a record with a 300-second TTL? **It may still use the cached record.**
5. What does a CNAME record identify? **The canonical name for an alias.**

## Sources

- [RFC 1034: Domain Names—Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034.html)
- [RFC 1035: Domain Names—Implementation and Specification](https://www.rfc-editor.org/rfc/rfc1035.html)
- [RFC 2181: Clarifications to the DNS Specification](https://www.rfc-editor.org/rfc/rfc2181.html)
- [RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)

## Related Topics

How Websites Work; HTTP Basics; Domains; Web Hosting; HTTPS.

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-20. Standards sources are reference-only; no source prose was adapted. Status: READY_TO_PUBLISH, `public:false` on acceptance.
