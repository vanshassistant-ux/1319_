# Internet Basics

## In 30 Seconds

The internet is a global network of networks: billions of devices, joined by shared rules called protocols, that pass data to one another. Your device reaches it through an Internet Service Provider. Data travels as small packets, each labeled with numeric IP addresses, forwarded by routers and reassembled at the far end. The internet is the plumbing; the web is just one service that runs on it, alongside email and many others.

## Why This Matters

Almost every course, job, and everyday task now assumes an internet connection, yet most people never learn what is actually happening underneath. Knowing that the internet is shared infrastructure, and that the web, email, and apps are separate services riding on top of it, makes troubleshooting, privacy choices, and security decisions far less mysterious. When you understand packets, IP addresses, and routers, terms like bandwidth, IP, and outage stop being jargon and start being tools you can reason with. This foundation also makes later topics, such as how the web works and how to stay safe online, much easier to learn.

## Learning Objectives

- Define the internet as a global network of networks connected by shared protocols.
- Distinguish the internet (infrastructure) from the web and other services that run on it.
- Explain how packet switching moves data using packets, IP addresses, and routers.
- Describe the roles of IP and TCP within the TCP/IP suite.
- Summarize how ARPANET evolved into the modern internet.

## The College Version

### A network of networks

The internet is not one giant computer or one company's system. It is a network of networks: an enormous collection of independently owned and operated networks that agree to interconnect and exchange data. A university network, a mobile carrier, a home Wi-Fi network, and a data center are all separate networks; what makes them "the internet" is that they follow common rules, called protocols, that let a device on any one of them reach a device on any other. Because those rules are shared and open, networks built from completely different hardware can still talk to each other. Most people join the internet through an Internet Service Provider (ISP), a company that operates routers linked to other ISPs' routers. Your ISP does not give you the whole internet directly; it gives you a connection into a web of providers that, together, can reach almost any other connected device on the planet.

### The internet is not the web

This distinction trips up almost everyone, so it is worth stating plainly. The internet is the underlying infrastructure, the physical and logical plumbing that carries data. The web (the World Wide Web) is just one service built on top of that plumbing, the service of linked pages and sites you open in a browser. Email, video calls, app updates, and online games are other services that run on the same infrastructure without being "the web" at all. Saying "the internet is down" when a single website will not load is like blaming the electrical grid when one appliance fails. Keeping the layers separate, infrastructure below and services above, is the single most useful idea in this lesson, and later topics such as how the web works build directly on it.

### Packets and packet switching

Data does not travel across the internet as one continuous stream. It is broken into small chunks called packets. Each packet carries a piece of the data plus addressing information, is sent into the network, and is forwarded from one router to the next until it reaches its destination, where the packets are reassembled into the original message. This approach is called packet switching. Its great advantage is resilience and efficiency: packets from many conversations share the same links, and if one path or node fails, packets can be routed around the problem rather than dropping the whole connection. This is a deliberate contrast to the old telephone model, where a single dedicated circuit was held open for an entire call and a failure along it broke the call. Packet switching was one of the founding ideas of the internet precisely because it does not depend on any single node staying up.

### Addresses, IP, and TCP

For packets to find their way, every device needs an address. That is the IP address (Internet Protocol address), a numeric identifier for a device on the network. The long-established version, IPv4, uses 32-bit addresses written as four numbers separated by dots, such as 192.0.2.172, which allows about 4.3 billion addresses. Because that supply is exhausted, a newer version, IPv6, uses 128-bit addresses and provides an astronomically larger pool. The rules for addressing and delivering packets are the Internet Protocol (IP). IP is deliberately simple: it does its best to deliver each datagram but makes no promise that packets arrive, arrive in order, or arrive undamaged. A companion protocol, the Transmission Control Protocol (TCP), adds that reliability on top, numbering packets, acknowledging what arrives, retransmitting what is lost, and delivering the data to the application in order. Together they form the TCP/IP suite, the common language of the internet. The devices that read packet addresses and forward them between networks are routers, the traffic directors that make the whole network of networks navigable.

### From ARPANET to the internet

The internet grew out of ARPANET, a research network funded by the U.S. Defense Advanced Research Projects Agency. Its first computer-to-computer signal traveled between UCLA and the Stanford Research Institute on October 29, 1969, and it was built on packet switching so that communication would not depend on any single node. During the 1970s, Vint Cerf and Robert Kahn designed the TCP/IP protocols that let many separate networks interconnect rather than forming one closed network, the idea of "internetworking" that gives the internet its name. As more networks adopted TCP/IP, they merged into a single interconnected system; by January 1983 ARPANET itself had switched fully to TCP/IP, the moment usually treated as the birth of the modern internet. The original ARPANET was retired in 1990, but its core design choices, open protocols, packet switching, and a simple universal addressing layer, still describe how the internet works today.

## Key Vocabulary

- **Internet** — A global system of interconnected computer networks that exchange data using shared protocols; the infrastructure on which services like the web and email run.
- **Protocol** — An agreed set of rules for how devices format and exchange data, so that different systems can communicate.
- **Internet Service Provider (ISP)** — A company that connects a customer's network to the rest of the internet by operating routers linked to other providers' networks.
- **Packet** — A small unit of data, carrying part of a message plus addressing information, that is sent and routed across the network independently.
- **Packet switching** — A method of moving data by splitting it into packets that are routed separately and reassembled at the destination, so no single fixed path or node is required.
- **IP address** — A numeric identifier assigned to a device on a network so that packets can be addressed to it; IPv4 addresses are 32 bits, IPv6 addresses are 128 bits.
- **IP (Internet Protocol)** — The protocol that addresses and delivers packets between networks on a best-effort basis, with no guarantee of delivery or ordering.
- **TCP (Transmission Control Protocol)** — A protocol that runs on top of IP to provide reliable, ordered delivery by numbering, acknowledging, and retransmitting data as needed.
- **Router** — A device that reads a packet's destination address and forwards it between networks toward that destination.
- **ARPANET** — The U.S. research network, first active in 1969, that pioneered packet switching and grew into the modern internet.

## Eli-10

Imagine you want to send a long letter to a friend far away, but the mail only accepts postcards. So you split your letter across many numbered postcards, write your friend's address on each one, and drop them in the mail. Different postcards might take different routes, and some might arrive out of order, but because they are numbered your friend can put them back in the right order, and if one gets lost you send that one again. The internet works like this. Your device chops data into small pieces called packets, each stamped with the destination's IP address, a number that identifies the machine you are sending to. Routers act like sorting offices, reading each packet's address and passing it along toward its target. The internet itself is just all the connected networks and the shared rules that let these packets travel between them.

## Eli's Analogy

The internet is the postal system: roads, trucks, and sorting offices that can carry anything. The web is one kind of thing you send through it, like letters, while email and video calls are other kinds of mail using the very same delivery network.

**Where the analogy breaks down:** Packets are copied and forwarded electronically at nearly the speed of light, not physically carried, and a lost packet can be re-sent in a fraction of a second. There is also no single post office in charge: the internet has no central hub, just many independent networks agreeing to pass data along.

## Worked Example

Suppose you open a video call with a classmate. Your device does not send the video as one long stream; software breaks it into thousands of packets. Each packet is labeled with your classmate's IP address and a sequence number, then handed to your ISP. From there, routers forward each packet hop by hop across whatever networks lie between you, and different packets may follow different routes. On the far end, the packets are reassembled in order using their sequence numbers. IP handles the addressing and forwarding, while TCP-style logic tracks which packets arrived so missing ones can be re-sent. Notice that the web browser is not involved at all here: the call is a separate service riding on the same internet infrastructure, which is exactly the internet-versus-web distinction in action.

## Common Mistakes

- **Using "the internet" and "the web" as if they mean the same thing.** The internet is the underlying infrastructure; the web is one service running on it, alongside email, video calls, and apps.
- **Picturing the internet as one central computer or one company that everyone connects to.** It is a network of many independent networks that interconnect using shared protocols; no single machine or company is "the internet."
- **Thinking data travels as one continuous stream along a fixed path.** Data is split into packets that can take different routes and are reassembled at the destination; this is packet switching.
- **Believing an IP address identifies a person by name.** An IP address identifies a device or network interface so packets can reach it; it is a numeric routing label, not a personal identity.
- **Assuming IP guarantees that every packet arrives correctly.** IP is best-effort and can drop or reorder packets; reliability comes from TCP, which numbers, acknowledges, and retransmits data.

## Compare / Contrast

- **The internet vs. the web:** The internet is the shared network infrastructure; the web is one service (linked pages and sites) that runs on it, as do email and many other services.
- **IP vs. TCP:** IP addresses and forwards packets on a best-effort basis; TCP runs on top of IP to add reliable, ordered delivery.
- **IPv4 vs. IPv6:** IPv4 uses 32-bit addresses (about 4.3 billion) and is exhausted; IPv6 uses 128-bit addresses for a vastly larger pool.
- **Packet switching vs. circuit switching:** Packet switching routes independent packets over shared links and survives node failures; circuit switching holds one dedicated path for a whole session.

## Key Takeaway

The internet is a global network of networks that moves data as packets addressed by IP and made reliable by TCP; it is the infrastructure, and the web is just one of many services that run on it.

## Practice Question Bank

1. **The internet is best understood as which of the following?**
   - A single powerful central computer that all devices log in to
   - **A global network of independent networks that interconnect using shared protocols** ✓
   - The collection of all websites people visit in a browser
   - A company that sells connectivity to homes and businesses

   The internet is a "network of networks": many independently operated networks that interconnect by following common protocols. It is not one central computer. The collection of websites is the web, a service running on the internet. A company selling connectivity is an ISP, which connects you to the internet but is not itself the internet.

2. **A friend says "the internet is down" because one website will not load, though their email and video calls still work. What is the most accurate correction?**
   - The internet and the web are the same thing, so everything must be down
   - Email and video calls are part of the web, so the web is fine
   - IP addresses have stopped working for that one site only
   - **The internet is the infrastructure and the web is one service on it; likely that site or its service has a problem, not the internet** ✓

   The internet is the underlying infrastructure; the web is one service that runs on it, and email and video calls are separate services on the same infrastructure. Since those still work, the infrastructure is up, so the issue is with that particular site or service.

3. **When you send data across the internet, it is typically broken into small labeled units that are routed separately and reassembled at the destination. What are these units called?**
   - **Packets** ✓
   - Protocols
   - Routers
   - Domains

   These units are packets, and moving data this way is called packet switching. A protocol is a set of communication rules, not a chunk of data. A router is the device that forwards packets. A domain is a human-readable name for a site.

4. **A device reads each packet's destination address and forwards it on toward the correct network, hop by hop, until it reaches its target. Which component performs this job?**
   - The ISP's billing system
   - The IP address itself
   - **A router** ✓
   - The web browser

   A router is the device that reads a packet's destination address and forwards it between networks toward its target. An IP address is the label being read, not a device that acts. A web browser is application software that requests web pages; it does not forward packets between networks.

5. **Why was IPv6 introduced alongside IPv4, and how do the two differ?**
   - IPv6 encrypts every website automatically, while IPv4 sends everything in plain text
   - **IPv6 uses 128-bit addresses to provide far more addresses than IPv4's 32-bit space, which had run out** ✓
   - IPv6 replaces packets with continuous streams, while IPv4 uses packets
   - IPv6 is a faster type of router, while IPv4 is a slower type of cable

   IPv4 uses 32-bit addresses (about 4.3 billion), a supply that became exhausted, so IPv6 was introduced with 128-bit addresses to provide a vastly larger pool. IPv6 is an addressing scheme, not an encryption feature, not a replacement for packets, and not a kind of router or cable.

## Sources

- MDN Web Docs (Mozilla), "How does the Internet work?" — https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work (CC BY-SA 2.5; facts synthesized, no wording reproduced)
- IETF / RFC Editor, RFC 791: Internet Protocol — https://www.rfc-editor.org/rfc/rfc791.txt
- IETF / RFC Editor, RFC 793: Transmission Control Protocol — https://www.rfc-editor.org/rfc/rfc793.txt
- IETF / RFC Editor, RFC 8200: Internet Protocol, Version 6 (IPv6) — https://www.rfc-editor.org/rfc/rfc8200.html
- IETF / RFC Editor, RFC 1958: Architectural Principles of the Internet — https://www.rfc-editor.org/rfc/rfc1958.txt
- DARPA, "ARPANET" — https://www.darpa.mil/news/features/arpanet

## Related Topics

- computer-literacy:foundations:how-the-web-works
- computer-literacy:foundations:browsers
- computer-literacy:foundations:email-basics
- computer-literacy:foundations:cloud-storage

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched at:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** reference-only sources; facts synthesized and prose written originally, no source wording adapted
- **Source project:** EliExplains original synthesis
