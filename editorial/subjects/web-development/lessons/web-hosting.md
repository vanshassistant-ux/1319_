# Web Hosting

## In 30 Seconds

Web hosting makes a website's files or application available through an internet-connected service. A hosting arrangement supplies a place and runtime or server capability for the site, then serves its content when visitors request it. Static hosting can deliver prepared files such as HTML, CSS, JavaScript, and images. Dynamic hosting adds application processing and often data services. A domain name is a human-friendly address that can be connected to hosting, but it is not the hosting service itself.

## Why This Matters

Hosting is the bridge between a project that works on one computer and a site that other people can reach. It gives developers a useful way to separate several decisions: what files or application need to run, where they will be deployed, how a host will serve them, and which URL will point visitors there. That separation prevents a common early mistake—assuming a domain name, source-code repository, and production host are interchangeable. It also prepares students to read deployment logs and to make small, reversible changes in an authorized project.

## Learning Objectives

- Define web hosting and distinguish it from a domain name.
- Explain the roles of hosted files, a web server, and a visitor's browser.
- Distinguish static delivery from dynamic server-side processing at a high level.
- Describe deployment as making a selected version of a site available through a host.
- Apply a bounded deployment checklist to an authorized static-site project.

## The College Version

### Hosting supplies a serving environment

Web hosting is an arrangement that makes a site's files or application available through a service connected to the internet. In a simple static site, the material to serve may be an `index.html` document together with CSS, JavaScript, images, fonts, and other assets. The hosting service stores the selected version and operates, or provides access to, the software that answers web requests. The visitor's browser remains the client: it asks for a page or asset, and the host's serving system returns the relevant content.

The phrase web server can name hardware, server software, or the combination. That distinction matters because a course project does not need to own a physical machine to be hosted. A managed host may operate the machines and server software while the developer supplies the site's files and settings. The practical question is not “where is one computer?” but “which service is responsible for delivering this deployed version of the site?” A hosting plan can also provide resources beyond basic file delivery, but those offerings vary; do not assume every host supplies the same runtime, database, or operational controls.

Hosting is not the same as authoring. Editing files locally changes a working copy, not automatically the version visitors receive. A hosted version changes when an authorized deployment process transfers or builds the selected site version for the host. The exact path can be an upload, a host-connected source repository, or another provider-defined process. The hosting lesson owns that high-level transition rather than teaching a particular vendor's interface or a Git workflow.

### Static and dynamic delivery answer different needs

A static web server can send hosted files as they are stored. This makes a static site a good early model: a visitor requests a document, and the service returns the prepared HTML; the browser can then request its linked stylesheet, script, and images. “Static” does not mean a page is boring or never changes. A static page can contain rich styling and browser-side JavaScript. It means the server is delivering the prepared files rather than generating that page for each request from application logic.

A dynamic web arrangement adds server-side processing, commonly an application service and sometimes a database. For a request, the application can select data, apply authorized business rules, and construct or select a response before it is sent. That enables features such as a signed-in account page or a catalogue whose content comes from stored records. It also introduces more components, configuration, and operational responsibilities. A developer should not describe every modern site as either entirely static or entirely dynamic; a single product can combine prepared assets with server-generated or API-delivered data.

The useful beginner decision is to identify what must happen at request time. A portfolio containing prepared pages and assets may fit static hosting. A site that needs trusted server-side decisions or per-user data needs an appropriate application design and hosting capability. This is an architecture question, not a claim that one option is universally safer, cheaper, or better.

### A domain reaches a host but is not the host

A domain name is a human-readable address people can enter or follow. Hosting is the service that has the deployed content or application available to answer requests. They are related because a domain can be configured so visitors who use that name reach the selected hosting service, but they remain separate concerns. An organization may obtain domain registration and hosting from one provider, or use different providers. Moving a site to another host can require changing the domain's configuration so the same address directs visitors to the new service.

This lesson stops before DNS mechanics. DNS is the system that resolves names and carries records that help direct traffic; the DNS lesson covers that process. Here, the critical mental model is only the relationship: the domain is a name visitors use, while the host is where a deployed site is served. If a student has copied files to a host but has not configured a custom domain, a provider-supplied address may still make the site reachable. Conversely, registering a domain alone does not place any site files on a server.

Keeping these roles separate improves debugging. If a provider's preview address displays the expected project but a custom address does not, the source files may be deployed correctly while the name-to-host setup needs attention. That observation does not prove a specific DNS error and does not authorize changing another person's configuration. It tells the developer which ownership boundary to inspect in their own account or authorized course environment.

### Deployment is a deliberate release step

Deployment is the act of making a chosen build or set of files available in a target environment. For a small static site, a careful deployment starts by identifying the output folder and the entry document the host expects. The developer then uses the host's documented deployment path, waits for a successful result, and visits the provided address to confirm that the intended page and essential assets load. If the project has a custom domain, that is a separate check after the hosted version is known to work.

A release should be observable and reversible. Record which project version was deployed, use the host's status or build output to see whether the transfer or build finished, and test a few normal visitor paths. A broken stylesheet, missing image, or incorrect base path may appear only after deployment because the hosted URL structure differs from a local preview. Start with the service's error message and the project's own configuration; do not guess that a domain, TLS certificate, or browser cache is the cause.

Operational basics do not require a large production system. They mean using only accounts and projects you are authorized to manage, keeping provider credentials out of public source files, and limiting each release to a clear change. More advanced concerns—HTTPS configuration, authentication, incident response, and provider-specific security settings—belong to dedicated topics and official provider guidance.

## Key Vocabulary

- **web hosting:** A service arrangement that makes deployed website files or an application available to visitors over the internet.
- **web server:** Hardware, server software, or their combination that receives web requests and serves site content.
- **static hosting:** Hosting that delivers prepared files, such as HTML, CSS, JavaScript, and images, without server-side generation of each page.
- **dynamic content:** Content produced or selected through server-side processing in response to a request.
- **deployment:** Making a selected version of a site or application available in a target hosting environment.
- **domain name:** A human-readable internet address that can be configured to reach a hosting service.
- **asset:** A file used by a web page, such as a stylesheet, script, image, font, or media file.
- **build output:** The files produced by a project's build process that a host may serve or deploy.

## Eli-10

Making a website on a laptop is like arranging a display in a room only you can enter. Hosting gives the display a place that visitors can reach. You give a hosting service the version of the site you want people to see. When a browser asks for the home page, the hosting service sends back the page and its supporting files. Some hosts mainly send prepared files; others can also run an application that prepares a different answer for each visitor.

A domain name is the sign on the road, such as `example.org`. It helps people find the site, but the sign is not the building that holds the site. The hosting service is the building and its delivery desk. A deployment is the moment you replace or add the display at that building with a chosen version of your project.

## Eli's Analogy

Imagine a gallery. The artwork files are the pieces you prepared, the hosting service is the gallery that keeps them available and hands them to visitors, and the domain name is the street address on the invitation. Deploying is installing the approved collection in the gallery before opening hours.

The analogy has limits: a web host does not simply hand out fixed objects; it can run software and respond to many requests at once. A domain also depends on network configuration, which the gallery-address comparison does not explain. The analogy should not be used to infer how DNS or HTTPS works.

## Worked Example

A student has an authorized portfolio project with `index.html`, `styles.css`, and `portrait.jpg`. The project opens correctly in a local preview. The student chooses a static hosting service and selects the folder containing those three files as the deployment output. The host reports a successful deployment and supplies a preview address. The student opens that address, checks that the home page loads, then confirms that the stylesheet and portrait are requested from the hosted path rather than the laptop's file system. At this point the student can say the static site is hosted: the selected files are being served through the provider's address. If a custom domain later shows a different result, the first fact remains that the provider address works; the next investigation belongs to the domain-to-host relationship, not to rewriting the page content.

## Common Mistakes

- **Treating a domain registration as if it automatically hosts a website.** A domain is an address; hosting supplies the deployed files or application that visitors receive.
- **Assuming a local edit is already visible to visitors.** Verify that the intended version was deployed successfully to the chosen host.
- **Calling every JavaScript-enabled site dynamic hosting.** Static hosting can serve JavaScript files; dynamic hosting refers to server-side processing that generates or selects content at request time.
- **Diagnosing every live-site problem as a hosting outage.** First observe the deployed address, asset paths, and service output, then keep domain, HTTPS, application, and browser issues separate.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Web hosting | Domain name | Hosting serves a deployed site or application; a domain name is an address configured to reach a service. |
| Static hosting | Dynamic hosting | Static hosting delivers prepared files; dynamic hosting adds server-side processing that can generate or select content for a request. |
| Local preview | Deployment | A local preview runs from the developer's environment; deployment makes a selected version available through a target host. |

## Key Takeaway

Web hosting makes a chosen site version available to visitors. Keep the host, the domain name, and the deployment process conceptually separate so that a live-site problem can be investigated at the right boundary.

## Practice Question Bank

1. What is the primary role of web hosting? **Make a deployed website's files or application available to visitors over the internet.**
2. Which statement best distinguishes a domain name from web hosting? **A domain is an address that can point visitors to a hosting service; hosting serves the deployed content.**
3. A site host sends prepared files without generating the page for each request. Which description fits best? **Static hosting.**
4. A provider preview works but the custom domain does not. What is the focused next step? **Check the authorized domain-to-host configuration while preserving the evidence that the provider address works.**
5. Which action is part of a careful basic deployment check? **Open the host-provided address and confirm the intended page and essential assets load.**

## Sources

- [MDN: What is a web server?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [MDN: Publishing your website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)

## Related Topics

HTTP Basics; Domains; DNS; Web Platform.

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-20. MDN documentation is reference-only; no source prose was adapted. Status: READY_TO_PUBLISH, `public:false` on acceptance.
