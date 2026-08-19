# Software

## In 30 Seconds

Software is the coded set of instructions that tells a computer's hardware what to do. It has no physical form of its own — it is the programs and data the machine runs, as opposed to the chips and circuits it runs on. Software splits into two broad families: system software, which runs the machine itself (operating systems, drivers, utilities), and application software, which helps you do tasks like writing, browsing, or editing photos. Firmware sits in between, built into a device.

## Why This Matters

Almost everything you do on a computer or phone is software working on your behalf, so knowing what software is — and how it differs from the hardware it runs on — helps you install it safely, understand what you agree to when you accept a license, and choose between proprietary and open-source options. When something goes wrong, recognizing whether the trouble is hardware or software points you toward the right fix. As more of daily life runs on apps and cloud services, telling system software from applications, and understanding that you usually license software rather than own it outright, is basic footing for later topics like operating systems, installation, and security.

## Learning Objectives

- Define software and distinguish it from hardware.
- Distinguish system software from application software and give examples of each.
- Explain at a high level how human-readable source code becomes a running program on hardware.
- Compare proprietary with open-source and free software, and explain what a software license grants.
- Explain why firmware is a middle case between hardware and software.

## The College Version

### What software is (and what it is not)

Software is the coded set of instructions, together with the data those instructions work on, that tells a computer's hardware what to do. A common technical definition frames it as computer programs and their associated data — the part of a computer system that can be written and changed, as opposed to the fixed physical machine. That contrast is the anchor for the whole topic: hardware is the tangible equipment you can touch — the processor, memory chips, drive, screen, and keyboard — while software is intangible. It is patterns of instructions stored as data. The same laptop can run a spreadsheet one minute and a video call the next without any physical change, because different software is directing the same hardware. When people say a computer "does" something, it is almost always software doing the work and the hardware carrying out the instructions. This is also why the same problem can have very different causes: a laptop that will not start might have a failed drive (hardware) or a corrupted operating system (software), and telling the two apart is the first step toward fixing it.

### System software vs. application software

Software is usually sorted into two broad families by what it is for. System software runs the machine itself and creates the environment other programs need. Its centerpiece is the operating system, which manages the hardware — processor time, memory, storage, and connected devices — and provides shared services that applications rely on. (Operating systems get their own lesson; here they are named as the key example of system software.) System software also includes device drivers, small programs that let the operating system communicate with specific hardware such as a printer or graphics card, and utility programs that maintain the system, such as backup, disk-cleanup, and compression tools. Application software, by contrast, is what you use to get a specific job done: a word processor, a spreadsheet, a web browser, a photo or video editor, a game, or a messaging app. Applications run on top of the system software rather than managing the hardware directly — when a browser needs to save a file or use the network, it asks the operating system to do it. A useful test: if the program exists to run the computer, it is system software; if it exists to help you accomplish a task, it is an application.

### From source code to a running program

Software is written by people, usually as source code: text in a programming language that humans can read and edit. A processor, however, does not execute that text directly — it executes machine code, the low-level numeric instructions built into the hardware's design. Something has to translate between the two. A compiler translates source code ahead of time into a ready-to-run program (an executable) that the machine can then run directly; an interpreter instead translates and runs the code step by step while the program is running. Either way, the human-readable instructions end up as instructions the processor can carry out. This is why you can often use a program without ever seeing its source code: what you install and launch is the runnable result, not the original text. It also explains a key difference later in this lesson — whether or not you can obtain and change that original source code is exactly what separates open-source software from closed, proprietary software.

### Owning vs. licensing: proprietary, open-source, and free software

When you "get" a piece of software, you usually do not own the software itself the way you own a chair. Instead you receive a license: permission to use the software under stated terms, spelled out in an end-user license agreement. The copyright in the program stays with its author or publisher. Proprietary software is the closed model: the source code is normally kept secret, and the license restricts what you may do — often to installing and using it, without the right to copy, modify, or redistribute it. Open-source and free software take the opposite approach. The Open Source Initiative's definition requires that such software allow free redistribution (you may even sell it as part of a collection), that it come with its source code, and that it permit modifications and derived works. The Free Software Foundation frames the same territory as four freedoms: to run the program for any purpose, to study and change it, to share copies, and to share improved versions — the middle two of which require access to the source code. Two cautions follow. "Open source" does not mean "free of charge": it refers to the availability of the source and the rights granted, not the price. And "open" does not mean "no rules": open-source licenses still impose conditions, and some (called copyleft) require that changes be shared back under the same terms. Understanding which model a program uses tells you what you are actually allowed to do with it.

### Firmware: the middle case

Not all software fits cleanly on the "easily changed" side of the hardware/software line. Firmware is software stored in a device's non-volatile memory — memory that keeps its contents when the power is off, such as ROM or flash chips — and it provides the low-level control that makes a piece of hardware work at all. It is what tells a router, a game controller, a smart thermostat, or a computer's motherboard how to start up and operate before any operating system loads. Firmware is genuinely software: it is programmed instructions, and manufacturers can update it. But it behaves partly like hardware, because it is built into the device, changes rarely, and is often required just for the device to function. That is why it is best understood as a middle case: coded instructions, like all software, but bound tightly to a specific piece of hardware.

## Key Vocabulary

- **Software** — The coded instructions and associated data that direct a computer's hardware; it has no physical form of its own.
- **Hardware** — The physical, tangible parts of a computer system, such as the processor, memory chips, drive, and screen.
- **System software** — Software whose job is to run the machine and support other programs, including the operating system, device drivers, and utilities.
- **Application software** — Programs people use to accomplish specific tasks, such as writing documents, browsing the web, or editing images.
- **Operating system** — The central system software that manages the hardware and provides the environment and services in which applications run.
- **Device driver** — A small program that lets the operating system communicate with a specific piece of hardware, such as a printer or graphics card.
- **Source code** — The human-readable text, written in a programming language, that people use to create and edit software.
- **Machine code** — The low-level numeric instructions a processor can execute directly, into which source code is translated.
- **Software license** — The terms granting a user permission to use software; usually a right to use rather than ownership of the software itself.
- **Firmware** — Software stored in a device's non-volatile memory that provides low-level control of that device's hardware.

## Eli-10

A computer is a machine that can follow instructions very fast, but it cannot decide what to do on its own. Software is those instructions. The hardware is the physical machine — the parts you could hold in your hand. The software is the set of directions that tells those parts what to do, step by step. Some software exists just to run the machine and keep it working, like the operating system that starts your computer up. Other software is there to help you do something specific, like write a report, watch a video, or play a game. People write software as readable instructions, and the computer turns those into the tiny commands its chips actually understand.

## Eli's Analogy

Software is like the sheet music, and the hardware is like the piano. The piano can make any note, but it just sits there until someone gives it music to play. Change the sheet music and the same piano plays a completely different song — just as the same computer can do totally different things depending on which software it runs.

**Where the analogy breaks down:** A piano needs a human player, while a computer runs its software automatically once it is loaded — no live performer required. The analogy also hides the fact that some software (the operating system) exists mainly to run the instrument itself, a job that has no clean match in the music example.

## Worked Example

Imagine your laptop will not connect to a new wireless printer. Walk through the software layers instead of guessing. First, the hardware: the printer and the laptop's wireless chip are physical and appear to be powered on, so this may not be a hardware fault. Next, system software: the laptop needs the correct device driver — a small piece of system software — so the operating system knows how to talk to that printer model; if it is missing or outdated, printing fails even though nothing is physically broken. You install the driver, and the operating system now lists the printer. Finally, application software: you open a document in your word processor (an application) and choose Print; the application does not control the hardware itself — it hands the job to the operating system, which uses the driver to send the pages. Seeing the problem as three layers — hardware, system software, application — turns a mysterious failure into a short checklist.

## Common Mistakes

- **Treating everything you see on screen as "the computer" and not separating software from hardware.** The hardware is the physical machine; the software is the changeable set of instructions running on it. The same hardware runs many different programs.
- **Assuming you own software you paid for, like a physical object.** In most cases you buy a license — permission to use the software under stated terms — while the copyright stays with the publisher.
- **Thinking "open source" means free of charge and free of rules.** Open source refers to the source code being available and modifiable under a license; such software can be sold, and its license still sets conditions you must follow.
- **Confusing an application with the operating system.** Applications run on top of the operating system and ask it for services; the operating system is the system software that manages the hardware underneath them.
- **Calling firmware "hardware" because it is built into a device.** Firmware is programmed instructions — genuinely software — stored in non-volatile memory; it is a middle case, tightly bound to hardware but still updatable code.

## Compare / Contrast

- **System software vs. Application software** — System software runs the machine and supports other programs (operating system, drivers, utilities); application software helps a user accomplish a specific task and runs on top of the system software.
- **Proprietary software vs. Open-source software** — Proprietary software keeps its source code closed and restricts copying and modification; open-source software makes the source available and permits modification and redistribution under its license.
- **Ordinary software vs. Firmware** — Ordinary software is loaded and changed readily and runs on top of the operating system; firmware is stored in a device's non-volatile memory, controls the hardware at a low level, and changes rarely.

## Key Takeaway

Software is the changeable set of coded instructions that direct physical hardware. It comes as system software that runs the machine and application software that does your tasks, is usually licensed rather than owned, and ranges from open-source code you can inspect and modify to proprietary code you cannot — with firmware as the built-in middle case.

## Practice Question Bank

1. **Which of the following best defines software?**
   - A. The physical electronic components and circuit boards inside a computer
   - B. The coded instructions and associated data that tell a computer's hardware what to do
   - C. Only the programs a user opens directly, such as a browser or a game
   - D. The metal case and cables that connect a computer to its peripherals

   **Answer: B.** Software is the intangible set of coded instructions (and their data) that direct the hardware. The physical components, case, and cables are hardware. Option C is too narrow: user-facing programs are only one category (application software); system software is software too.

2. **Which of the following is an example of system software rather than application software?**
   - A. A word processor used to write essays
   - B. A photo editor used to retouch images
   - C. A web browser used to visit websites
   - D. A device driver that lets the operating system communicate with a printer

   **Answer: D.** A device driver is system software: it helps run the machine by letting the operating system talk to specific hardware. A word processor, photo editor, and web browser are all application software.

3. **What is the role of a compiler or an interpreter?**
   - A. It translates human-readable source code into instructions the hardware can execute
   - B. It physically stores the program's files on the computer's drive
   - C. It connects the computer to the internet so programs can run
   - D. It scans the computer for malware before a program starts

   **Answer: A.** Processors execute machine code, not readable source code. A compiler translates source code ahead of time into a runnable program; an interpreter translates and runs it step by step. Storage, networking, and malware scanning are unrelated functions.

4. **You buy a productivity app and accept its end-user license agreement. In most cases, what have you actually acquired?**
   - A. Full ownership of the software's source code, which you may resell
   - B. The right to copy and redistribute the software to anyone freely
   - C. A license granting you permission to use the software under stated terms
   - D. Nothing enforceable, because software licenses have no legal effect

   **Answer: C.** Buying most software gives you a license to use it under the agreement's terms, while the copyright and source code stay with the publisher. You do not gain ownership of the source or a general right to redistribute, and license agreements are legally meaningful.

5. **A friend says, "Open-source software is just free-of-charge software that anyone can change, so it can never be sold and there are no rules attached." Which correction is accurate?**
   - A. Open-source software may not legally be modified or redistributed by users
   - B. Open source means the source code is available and may be modified and redistributed under a license; it can be sold, and the license still sets conditions
   - C. Open-source and proprietary software are the same thing described in different words
   - D. Open-source licenses forbid any commercial or business use of the software

   **Answer: B.** "Open source" refers to source-code availability and the rights granted, not the price, and such software can be sold — for example as part of a paid distribution. Its license still imposes conditions (some require sharing changes back). It is not the same as proprietary software, does not forbid modification, and open-source definitions specifically bar restricting commercial use.

## Sources

- NIST Computer Security Resource Center, Glossary: "Software" — https://csrc.nist.gov/glossary/term/software (U.S. government reference; core definition and hardware/software distinction).
- NIST Computer Security Resource Center, Glossary: "Firmware" — https://csrc.nist.gov/glossary/term/firmware (U.S. government reference; firmware as software in non-volatile memory).
- Open Source Initiative, "The Open Source Definition" — https://opensource.org/osd (CC BY 4.0; open-source distribution criteria).
- Free Software Foundation / GNU Project, "What is Free Software?" — https://www.gnu.org/philosophy/free-sw.html (CC BY-ND 4.0; the four essential freedoms).
- Workforce LibreTexts, "Categories of Software and Their Purposes" (Concepts in Computing, PGCC) — https://workforce.libretexts.org/Courses/Prince_Georges_Community_College/INT_1010:_Concepts_in_Computing_(PGCC)/04:_System_and_Application_Software/4.01:_Purpose_and_Functions_of_Software/4.1.03:_Categories_of_Software_and_Their_Purposes (CC BY-NC-SA OER; software taxonomy).

## Related Topics

- computer-literacy:foundations:operating-systems
- computer-literacy:foundations:installing-and-updating-software
- computer-literacy:foundations:computer-hardware
- computer-literacy:foundations:file-extensions

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Researched at:** 2026-08-19
- **Rights status:** Reference-only and attribution-required sources; no source prose adapted; all wording original.
- **Provenance:** EliExplains original synthesis from NIST glossary definitions, the OSI Open Source Definition, the FSF free-software definition, and a CC-licensed OER on software categories. The machine-generated draft was discarded as off-topic boilerplate.
