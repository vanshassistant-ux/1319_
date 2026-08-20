# Cookies and Storage

## In 30 Seconds

Cookies, `localStorage`, and `sessionStorage` all let a web application retain small pieces of state, but they behave differently. A cookie is associated with a site and can be sent with later matching HTTP requests. Web Storage keeps key/value pairs in the browser: `localStorage` persists for an origin, while `sessionStorage` is scoped to an origin and one browser tab. Choose the smallest appropriate mechanism and never treat browser storage as a casual place for sensitive data.

## Why This Matters

Browser state shapes ordinary experiences such as a remembered color preference or an unfinished form step. It also shapes privacy and security: data that persists longer, is visible to more contexts, or travels with requests deserves more care. Understanding the boundaries helps a developer avoid using a cookie as a general-purpose storage bin, avoid assuming `localStorage` is shared everywhere, and ask whether a stored value is necessary at all. It also gives users a clearer reason to inspect settings, privacy notices, and consent choices.

## Learning Objectives

- Define a cookie, `localStorage`, and `sessionStorage` in terms of browser state.
- Distinguish cookie request behavior from browser-only Web Storage.
- Compare the persistence and scope of `localStorage` and `sessionStorage`.
- Explain why browser storage should hold only the minimum appropriate data.
- Apply a bounded storage choice to a non-sensitive preference or short-lived form step.

## The College Version

### State has a purpose and a boundary

HTTP exchanges do not automatically remember a prior request. Applications sometimes need continuity: a server may need to recognize a session, or a page may need to remember a display choice. Cookies and Web Storage are browser mechanisms that can retain limited state, but they are not interchangeable containers. The first design question is what state is actually needed, who needs it, and how long it should remain. A theme preference is different from an unfinished step in a one-tab workflow, and both are different from a server-managed session. Keeping that distinction prevents a technical convenience from becoming an unnecessary collection of data.

A cookie is small data a server asks the browser to retain. When a later request matches the cookie's rules, the browser can send it back to the server in a `Cookie` header. This request behavior is the essential difference between a cookie and Web Storage. Cookies can support session management or preferences, but using them as a general browser data store adds request overhead and is usually not the modern choice for browser-only values. Cookie attributes can limit lifetime and request scope, yet choosing attributes is not a substitute for deciding whether the value should be stored at all.

This lesson does not design authentication, authorization, or tracking systems. Those decisions require wider security and product review. The useful beginner boundary is simpler: a cookie participates in matching HTTP requests, whereas Web Storage keeps values in the browser for the origin that owns its storage area. Start with the least data and the narrowest lifetime that meet a real user-facing need.

### Web Storage separates local and tab sessions

The Web Storage API exposes key/value storage through `localStorage` and `sessionStorage`. Both are partitioned by origin, a browser security concept based on the scheme, host, and port. A document from one origin does not simply share a Web Storage area with an unrelated origin. This matters when testing: a page at a different scheme, host, or port is not automatically looking at the same storage. Each storage area has its own values, and the API can set, retrieve, and remove them.

`localStorage` is shared by documents with the same origin and normally persists after the browser is closed and reopened. It fits a modest, non-sensitive preference whose purpose is to be remembered, such as a user-selected reading theme. It is not a promise of permanent archival storage: users, browser settings, private-browsing behavior, and storage limits can affect data. A robust page should still work when a stored preference is absent or cannot be read.

`sessionStorage` is more narrowly partitioned: it is associated with an origin and a particular browser tab. Closing that tab destroys the associated session storage. It can fit a short-lived interface detail such as the current step in a non-sensitive multi-step form. Opening another tab is not the same session-storage area. This is a scope distinction, not a promise that session storage is suitable for secrets. A value accessible to page scripts should be treated carefully, and a product should not place credentials, payment data, or other sensitive personal data there merely because the lifetime is shorter.

### Persistence, scope, and request behavior are different axes

It helps to compare these mechanisms with three questions. First, where does the value live? Cookies and Web Storage are retained by the browser, but cookies may be sent back to a server on matching requests while Web Storage values are not automatically attached to requests. Second, who can use the value? Web Storage is separated by origin; `sessionStorage` adds a tab boundary. Cookie scope is governed by cookie rules such as its matching domain and path. Third, when does it end? A cookie can be session-oriented or have an expiry rule; `localStorage` normally survives browser restarts; `sessionStorage` ends when its tab closes.

No single row in that comparison answers every design question. A server-managed session may use a cookie to carry a limited identifier, while the page uses `localStorage` for a purely cosmetic preference. That is not a recommendation to build a session system from memory; it illustrates that the mechanisms can play different roles. Do not copy a storage choice merely because another site uses it. Write down the value, its user-visible purpose, intended scope, deletion behavior, and whether it has to be sent to a server.

The Web Storage API is synchronous: a large amount of repeated work can block other JavaScript on the page. For introductory decisions, this means browser storage is not a substitute for a database or a place to put every application record. Store a small value only when it makes the experience clearer, and build a graceful fallback when storage is unavailable.

### Privacy-aware storage begins before implementation

State can reveal something about a person, their choices, or their browsing. A privacy-aware developer therefore asks whether a value is necessary, how long it should remain, who can receive it, and how a user can understand or change the choice. A remembered contrast setting directly supports the person using the page. A value intended to follow someone across unrelated sites has a substantially different privacy impact. Third-party cookies can be used across embedded content and multiple sites to build a profile of browsing activity; that possibility is a reason to avoid treating tracking as a default feature.

Use plain language in a product's privacy communication, align any collection with the user's choices and applicable requirements, and do not claim that one browser setting or one banner solves privacy. Laws, browser policies, and organizational obligations vary, so this lesson offers design awareness rather than legal advice. The durable practice is data minimization: collect and retain only what a specific feature needs, provide a clear explanation, and revisit the choice when the feature changes.

For sensitive data, the safe default is not to put it in `localStorage`, `sessionStorage`, or a casually readable cookie. Browser storage is part of the client environment, and any page script with access can matter. Developers should use the organization's approved security and privacy design process for credentials, financial information, health information, or identity documents. Separating an ordinary preference example from these categories is deliberate: it keeps a small convenience from being mistaken for a pattern for handling secrets.

## Key Vocabulary

- **cookie:** Small data a server asks a browser to store and potentially send with later matching HTTP requests.
- **Web Storage:** Browser API that stores key/value pairs through `localStorage` and `sessionStorage`.
- **localStorage:** Web Storage area shared by documents with the same origin that normally persists after the browser is reopened.
- **sessionStorage:** Web Storage area scoped to an origin and one browser tab that is cleared when that tab closes.
- **origin:** The scheme, host, and port combination that forms a browser security boundary for many web features, including Web Storage.
- **persistence:** How long stored data remains available before it expires, is cleared, or is otherwise removed.
- **data minimization:** Design practice of collecting and retaining only data needed for a defined purpose.

## Eli-10

Imagine a browser keeps small labeled drawers for a website. One drawer, `localStorage`, can remember a harmless choice such as dark mode when you come back later. Another, `sessionStorage`, is for one tab's short visit and is emptied when that tab closes. A cookie is different: it is a small note the browser may carry back to the website on later matching visits. Because notes and drawers can reveal something about a person, a careful site keeps only what it truly needs and does not use them as a hiding place for secrets.

## Eli's Analogy

A cookie is like a coat-check ticket that a venue asks you to show again at the right counter. `localStorage` is like a label on your own reusable notebook that stays there for later visits. `sessionStorage` is like a sticky note on one desk that gets thrown away when that desk is cleared.

The analogy has limits: browsers enforce technical rules about origins, tabs, requests, and cookie attributes; paper tickets and notebooks do not. The analogy also does not make any browser storage safe for passwords or other sensitive data.

## Worked Example

A course site wants to remember a student's non-sensitive reading theme and the current step of a draft questionnaire. The developer assigns `theme = "dark"` to a local-storage model because the preference should be available when the same origin is opened later. The developer assigns `draftStep = "2"` to a session-storage model because it belongs only to the open tab. In a harmless Bun model, both values are present at first; after the tab model is cleared, `theme` remains while `draftStep` is absent. The developer does not store a password, payment detail, or a tracking identifier in either area. The example tests lifecycle choices, not browser authentication or network behavior.

## Common Mistakes

- **Using a cookie as a general-purpose browser data store.** Remember that matching cookies can be sent with requests; use a modern storage API for a small browser-only value when that is the actual need.
- **Assuming `localStorage` is shared by every page a person opens.** It is partitioned by origin, so a different scheme, host, or port is not automatically the same storage area.
- **Treating `sessionStorage` as a safe vault because it is short-lived.** Shorter lifetime is not a replacement for approved handling of credentials or other sensitive data.
- **Persisting data because it might be useful later.** Name the feature purpose, choose the narrowest scope and lifetime, and retain only the minimum data needed.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Cookie | Web Storage | A matching cookie can be sent with later HTTP requests; Web Storage values are browser-held key/value data that are not automatically attached to requests. |
| localStorage | sessionStorage | Both are origin-partitioned, but local storage normally persists across browser restarts while session storage is scoped to one tab and ends when that tab closes. |
| A feature preference | Sensitive data | A small, non-sensitive preference may have a bounded browser-storage use; sensitive data needs the organization's approved security and privacy design process. |

## Key Takeaway

Cookies and Web Storage retain browser state but have different request behavior, scope, and lifetime. Choose the minimum data and narrowest mechanism that serve a clear feature, and do not turn browser storage into a home for sensitive information or unexamined tracking.

## Practice Question Bank

1. Which description correctly identifies a key behavior of a cookie? **A matching cookie may be sent by the browser with later HTTP requests.**
2. What is the normal scope and lifetime distinction for `sessionStorage`? **It is partitioned by origin and tab, and its data is removed when that tab closes.**
3. A same-origin course page should remember only a non-sensitive reading-theme choice after the browser is reopened. Which mechanism best matches that bounded purpose? **`localStorage` for the theme preference, with a usable fallback if it is unavailable.**
4. Why should a product team treat cross-site tracking storage as a privacy decision rather than a default implementation detail? **Third-party cookies can contribute to profiles of browsing activity across sites, so purpose, transparency, and user choice require deliberate review.**
5. Which design decision follows the lesson's data-minimization approach? **Keep only the short-lived, non-sensitive form-step value needed for the open tab and remove it when the workflow ends.**

## Sources

- [MDN Web Docs — Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)
- [MDN Web Docs — Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN Web Docs — Third-party cookies](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Third-party_cookies)

## Related Topics

- HTTP Basics
- Web Security Basics
- HTTPS

## Editorial Metadata

- **Status:** READY_TO_PUBLISH
- **Research:** Source-verified original synthesis on 2026-08-20.
- **Rights:** Reference-only documentation sources; no source prose adapted.
