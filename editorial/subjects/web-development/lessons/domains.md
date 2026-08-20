# Domain Names

## In 30 Seconds

A domain name is a human-readable name in the Internet's naming hierarchy, such as `example.org`. Its dot-separated labels identify a place in that hierarchy; the label on the right is the top-level domain. A domain can also have names below it, such as `courses.example.org`. Domain registration makes a name available for use under applicable rules, but it does not by itself create a website, provide a server, or make a URL's path exist.

## Why This Matters

Domain names appear in links, browser address bars, email addresses, deployment settings, and project documentation. Knowing their structure helps a developer read an address without confusing the name with the whole URL or with a hosting service. It also makes purchasing and configuring a name less mysterious: a registrant, registrar, registry operator, and hosting provider can have different jobs. Those distinctions help teams assign the right task when a site needs a new address or a new section under an existing address.

## Learning Objectives

- Identify the labels and hierarchy in a simple domain name.
- Distinguish a domain name from a URL, a website, and a hosting service.
- Explain the roles of a registrant, registrar, and registry operator in a generic top-level-domain registration.
- Apply the idea of a subdomain to organize a separate section of an existing domain.
- Read the hostname portion of a URL without treating the path or port as part of the domain name.

## The College Version

### Names are organized as labels in a hierarchy

A domain name is a name in the Domain Name System's hierarchy. What a person sees as a dotted string is a sequence of labels. In `library.example.edu`, the labels are `library`, `example`, and `edu`. Reading from the right, `edu` is the top-level domain in this illustration; labels to its left name increasingly specific parts of the hierarchy. ICANN's domain-name overview uses the same pattern: in `whois.icann.org`, `org` is top-level, `icann` is second-level, and `whois` is third-level. The labels are not merely decoration. Authority to create names at a lower level can be managed below the relevant dot, subject to the rules governing that part of the hierarchy.

The informal word subdomain is useful when a name is created below another domain. For example, an organization that controls `example.org` might create `events.example.org` for an event area and `help.example.org` for documentation. A subdomain is a naming choice, not an automatic feature that appears with every domain registration. It also does not require a particular word such as `www`. `www.example.org` is a familiar convention, but a hostname can use other labels or none before the registered name. A developer should record the exact hostname a project uses rather than assuming that typing `www` will always refer to the intended site.

The hierarchy does not mean that every dotted string has the same business meaning. The final label is a top-level-domain label in the public DNS hierarchy, but registration policies and the ability to create names can differ by top-level domain. This lesson uses common public-web examples to explain names; the next DNS lesson covers the separate process by which a system looks up those names.

### Registration involves several different roles

For a generic top-level domain, domain registration is a process with distinct participants. A registrant is the person or organization seeking to register a name. A registrar processes registrations for customers, and a registry operator maintains the registry for a particular top-level domain. ICANN explains that an entity seeking a generic-top-level-domain name can use an ICANN-accredited registrar, and that the registrant's relationship with that registrar is governed by a registration agreement. That relationship is important because renewal notices, contact details, transfers, and account security are usually handled through the registrar account or its authorized reseller.

A registrar is not the same thing as the registry operator. The registrar is the customer-facing registration channel; the registry operator maintains the relevant top-level-domain registry. Nor is either role automatically a web host. A provider may offer registration and hosting in one product, which can make the roles look identical, but they remain conceptually separate. Separating them helps when a team wants to keep a domain name while moving a website to another hosting provider, or when it wants to add an address without changing the site's files.

Registration also is not a claim that a name will work forever without maintenance. A registration is subject to the governing agreement and applicable policy, and it is normally time-limited. Treat the registrar account as an important administrative asset: keep its contact information current, understand renewal terms, and limit access to authorized people. Those practical safeguards concern the management of a name; they do not require this lesson to teach DNS records, which belong to a later topic.

### A domain is one component of a URL, not the entire address

A URL identifies the location of a resource and has several components. In `https://docs.example.org:8443/guides/start?mode=student#next`, the scheme is `https`; the authority contains the host `docs.example.org` and the optional port `8443`; `/guides/start` is a path; the query starts after `?`; and the fragment starts after `#`. MDN describes the domain in the authority as indicating which web server is requested, while the path identifies the resource path handled by that server. The Internet standard for generic URI syntax likewise treats the host as a subcomponent of authority and describes DNS-oriented registered names as labels separated by dots.

This distinction prevents a common deployment error: registering `example.org` does not create every possible URL beginning with that name. Someone still has to arrange for an appropriate service to respond for the hostname and to handle paths such as `/about` or `/courses`. ICANN explicitly distinguishes a domain name from a website and a URL, noting that hosting or another service is still needed to make an Internet presence functional. A path is also not a subdomain: `blog.example.org/articles` has the hostname `blog.example.org` and the path `/articles`. Changing one may require a different kind of configuration from changing the other.

Domain names are useful because they give people stable, readable identifiers to use in web addresses and related systems. They are not promises about the page's content, security, ownership of an ordinary-language word, or the server currently behind the name. Treat the name as a precise identifier in a broader set of technical and administrative arrangements.

### Choose names and boundaries deliberately

A small project may use one hostname, such as `example.org`, for its public pages. As it grows, a team may choose a subdomain to separate a responsibility: `status.example.org` for availability information, `docs.example.org` for documentation, or `courses.example.org` for course material. The choice should reflect the project's needs, not a superstition that subdomains are always more professional or more secure. A subdomain may clarify ownership and navigation, but it still needs deliberate configuration and maintenance.

When documenting a web project, write down the registered domain, the public hostnames, the registrar account owner or organizational procedure, and the hosting responsibility. Do not put account credentials in source code or in a public repository. A useful troubleshooting question is therefore specific: “Is the issue with the registration, the hostname being used, the DNS configuration, or the web host?” This lesson gives the vocabulary to separate the first two questions; later lessons address resolution and hosting mechanics. Clear names and clear responsibility boundaries make routine changes easier to review.

## Key Vocabulary

- **domain name:** A dot-separated, human-readable name in the Internet naming hierarchy used in web addresses and other services.
- **label:** One textual segment of a domain name, separated from neighboring segments by a dot.
- **top-level domain:** The rightmost domain label in the public DNS hierarchy, such as `org` in `example.org`.
- **subdomain:** A domain name created below another domain, often used to name a distinct service or section.
- **registrant:** The person or organization that seeks to register and manage a domain name.
- **registrar:** An organization that processes domain-name registrations for registrants under applicable registry rules.
- **registry operator:** The organization that maintains the registry of registered names for a particular top-level domain.
- **hostname:** The host portion of a URL authority, often expressed with a domain name or an IP address.

## Eli-10

A domain name is like the readable name on a large campus directory. Instead of remembering a difficult number, you can remember a name such as `example.org`. The dots organize the name into pieces. The part on the far right is a broad category, and pieces farther left can make the name more specific. A team that controls `example.org` can choose a more specific name such as `library.example.org` for its library area.

Buying or registering the name does not build the library, though. It only gives the team a name they can use. They still need a place that serves the pages and someone to set up the details. That is why a domain, a website, and a full web address are related but not identical.

## Eli's Analogy

Think of a domain as an address range in a campus mail system. `example.org` is the organization’s main address, while `library.example.org` is a labeled department within it. A registrar is a service desk that processes the address registration, and a web host is closer to the building that actually receives and serves what people request.

The analogy has limits: Internet names are governed by technical and contractual rules, not physical mail routes. A domain is not a street, and the analogy does not explain how computers resolve names or how a server handles a web request.

## Worked Example

A course team owns the illustrative domain `example.edu` and wants a separate documentation area. It chooses the hostname `docs.example.edu`, leaving the public site at `example.edu`. In the URL `https://docs.example.edu/getting-started`, `docs.example.edu` is the hostname: `docs` is a label below `example.edu`; `/getting-started` is a path, not another domain label. The team records that the registrar account manages the domain registration and that a separate hosting service serves the documentation. If a teammate asks why `/getting-started` returns an error, the team knows to investigate the application's path handling or hosting setup rather than assuming the domain registration alone controls that page.

## Common Mistakes

- **Calling a full URL a domain name.** Separate the hostname from the scheme, port, path, query, and fragment before naming the domain component.
- **Assuming domain registration automatically creates a website.** Arrange hosting and application configuration separately from the registration of the name.
- **Treating a registrar and a registry operator as the same role.** Recognize the registrar as the registration channel and the registry operator as the maintainer of a top-level-domain registry.
- **Treating a path such as `/docs` as a subdomain.** A subdomain is in the hostname, such as `docs.example.org`; a path comes after the hostname.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Domain name | URL | A domain name is a dotted name in the hierarchy; a URL can include a scheme, hostname, port, path, query, and fragment. |
| Registrar | Registry operator | A registrar processes registrations for registrants, while a registry operator maintains the registry for a top-level domain. |
| Subdomain | URL path | A subdomain is part of the hostname before the registered domain; a path begins after the hostname and identifies a resource location. |

## Key Takeaway

A domain name is a dot-separated identifier in a hierarchy. Registering it establishes a managed name, but a functioning web address also depends on separate hosting and application arrangements.

## Practice Question Bank

1. In `courses.example.org`, which label is top-level? **`org`.**
2. Which role processes a registrant's generic-top-level-domain registration? **A registrar.**
3. What follows registration without hosting? **A managed name, but not an automatically available website.**
4. In `https://docs.example.org/guides/setup`, which part is a hostname label? **`docs`.**
5. Why separate a domain from a full URL during deployment? **It clarifies whether work concerns the hostname or another component.**

## Sources

- [ICANN: About Domain Names](https://www.icann.org/resources/pages/about-domain-names-2018-08-30-en)
- [ICANN: Welcome Accredited Registrars](https://www.icann.org/en/contracted-parties/accredited-registrars)
- [MDN: Understanding URLs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IETF RFC 3986: URI Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986.html)

## Related Topics

Links; HTTP Basics; DNS; Web Hosting; HTTPS.

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-20. Documentation and standards sources are reference-only; no source prose was adapted. Status: READY_TO_PUBLISH, `public:false` on acceptance.
