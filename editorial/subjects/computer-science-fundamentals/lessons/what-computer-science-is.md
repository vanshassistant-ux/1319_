# What Computer Science Is

## In 30 Seconds

Computer science is the systematic study of computation: what can be computed, how efficiently, and how to represent and transform information. Its central object is the algorithm, a finite set of steps that produces a result. Programming is one tool the field uses, not the field itself. CS spans theory, systems, artificial intelligence, and human-computer interaction, and it leans on mathematical abstraction and rigorous argument as much as on machines.

## Why This Matters

Knowing what the discipline actually studies changes how you approach every later course. If you think computer science means writing code, you will treat theory, complexity, and proofs as detours instead of the core. Seeing computation as the real subject explains why an algorithm can be analyzed on paper before any program exists, why the same idea appears in a phone app and a supercomputer, and why CS graduates work in fields from biology to finance. It also clarifies career choices: computer science, software engineering, and information technology are related but distinct, and each rewards different skills.

## Learning Objectives

- Define computer science as the study of computation, information, and algorithms rather than as programming alone.
- Explain what an algorithm is and why it is the discipline's central object of study.
- Identify several major subfields of computer science and what each investigates.
- Distinguish computer science from software engineering, information technology, and coding.
- Explain the sense in which computer science is a science, drawing on abstraction and rigorous reasoning.

## The College Version

### Computation, not computers

A widely cited definition, from a 1989 ACM task force led by Peter Denning, calls computing "the systematic study of algorithmic processes that describe and transform information: their theory, analysis, design, efficiency, implementation, and application." Notice what sits at the center: algorithmic processes and information, not hardware. The physical computer is the instrument that runs these processes quickly, but the questions the field asks are about the processes themselves. This is the point behind the remark, often attributed to Edsger Dijkstra, that computer science is no more about computers than astronomy is about telescopes. An astronomer uses a telescope to study stars; a computer scientist uses a computer to study computation. Many important results in the field, such as which problems have no possible efficient solution and which cannot be solved by any program whatsoever, involve no particular machine and sometimes no program at all. The field predates the modern electronic computer: Alan Turing described a precise model of computation in 1936, years before working machines existed, which shows that computation can be studied as an idea in its own right rather than as a feature of a device.

### The algorithm as the central object

An algorithm, in the NIST Dictionary of Algorithms and Data Structures, is "a computable set of steps to achieve a desired result." That definition is doing a lot of work. The steps must be finite and precise enough that following them mechanically yields the result, which is why algorithms can be studied with mathematical tools. A given task can have many algorithms, and computer science asks which is correct, which uses the least time or memory, and whether a better one can exist at all. Because an algorithm is independent of any language, the same sorting method can be written in Python, C, or drawn as a flowchart and remain the same idea. This abstraction is why computer scientists can reason about a procedure's behavior before a single line of code runs, and why complexity claims about a method hold across every machine that runs it faithfully.

### A field of many subfields

Computer science is broad, and most programs organize it into areas. Theory of computation and the study of algorithms and data structures ask what can be computed and how efficiently. Programming languages and formal methods study how to express and verify computations. Computer architecture, operating systems, networks, and databases make up systems, the layers that turn hardware into usable platforms. Artificial intelligence and machine learning study how systems can perceive, reason, and learn. Human-computer interaction studies how people and computers work together, while computer graphics, security and cryptography, and computational science apply the discipline to images, safety, and other sciences. A single question, such as recommending a route across a map, can pull in graph algorithms, data structures, systems engineering, and interface design at once, which is why the subfields are complementary rather than isolated.

### How CS differs from neighboring fields, and why it counts as science

Computer science is often confused with three neighbors. Coding, or programming, is the craft of writing instructions a computer can run; it is a skill CS uses, much as writing is a skill that history uses, but it is not the discipline. Software engineering focuses on building specific, reliable software systems for practical goals under real constraints of cost, teams, and deadlines; the computer scientist David Parnas described CS and software engineering as separate but complementary, one studying computational properties in general and the other designing particular computations. Information technology concerns selecting, deploying, and maintaining computing systems for an organization. As for whether CS is a science: it combines mathematical rigor, proving what is and is not possible, with empirical investigation, building systems and measuring how they behave. Newell and Simon called it an empirical discipline, and the field draws on all of theory, experiment, and design. Its defining habits are abstraction, ignoring irrelevant detail to see the essential structure, and rigor, backing claims with proof or careful evidence rather than intuition.

## Key Vocabulary

- **Computer science** — The systematic study of computation, information, and algorithms, including what can be computed and how efficiently.
- **Computation** — The process of carrying out a well-defined procedure that transforms input information into output.
- **Algorithm** — A finite, precise set of steps that can be carried out mechanically to achieve a desired result.
- **Abstraction** — Deliberately ignoring irrelevant detail so that the essential structure of a problem or system stands out.
- **Theory of computation** — The subfield that studies which problems can be solved by algorithms and the resources any solution must use.
- **Software engineering** — The discipline of designing, building, and maintaining specific, reliable software systems under practical constraints.
- **Information technology** — The selection, deployment, and maintenance of computing systems to meet an organization's needs.
- **Empirical discipline** — A field that tests ideas by building things and observing how they behave, alongside mathematical reasoning.

## Eli-10

Computer science is not really about the computer sitting on your desk. It is about figuring out clear step-by-step ways to solve problems, called algorithms, and then asking good questions about them: does this way always work, is there a faster way, and could any way be fast enough? A computer is just the fast machine we use to run those steps. People who study computer science do work that looks like puzzles and math as often as it looks like typing code, and the ideas they find work the same on a phone, a laptop, or a giant server.

## Eli's Analogy

Think of a recipe. A recipe is a set of steps that turns ingredients into a dish, and a good cook can compare two recipes for the same dish and say which is quicker or uses fewer pots. Computer science studies the recipes of computing, algorithms, and asks the same kinds of questions, while the oven, the computer, is just the tool that does the cooking.

**Where the analogy breaks down:** Recipes tolerate vagueness like a pinch of salt, while an algorithm must be exact enough for a machine to follow with no judgment. Recipes also cannot be proven impossible, but computer science can prove that some problems have no efficient solution at all, something no cookbook would ever claim.

## Worked Example

Suppose you need to find whether the number 42 appears in a list of one thousand names paired with ages. One algorithm, linear search, checks each entry from the start until it finds 42 or runs out; in the worst case it inspects all one thousand entries. If the list is first sorted by age, a second algorithm, binary search, checks the middle entry and discards half the list each step, reaching an answer in at most about ten comparisons. Notice the reasoning happened entirely on paper: we compared two procedures, argued about their worst-case work, and never mentioned a programming language or a specific computer. That is computer science at work, studying the algorithms rather than the machine, and the same conclusion holds whichever language you later use to implement them.

## Common Mistakes

- **Believing computer science just means learning to code.** Programming is one tool the field uses. Computer science studies computation itself, including theory, algorithms, and complexity that involve little or no code.
- **Treating computer science and software engineering as the same major.** CS studies computational properties in general; software engineering focuses on building specific, reliable systems under real-world constraints. They overlap but ask different questions.
- **Assuming the field is fundamentally about computer hardware.** Hardware study belongs largely to computer engineering. The computer is the instrument CS uses to run algorithms, not its central subject.
- **Thinking an algorithm depends on a particular programming language.** An algorithm is a language-independent idea. The same procedure can be expressed in many languages or as a diagram and remain the same algorithm.
- **Concluding CS is not a real science because it uses machines.** CS combines mathematical proof with empirical testing of systems. Its use of computers no more disqualifies it than telescopes disqualify astronomy.

## Compare / Contrast

- **Computer science vs. Coding:** CS is the study of computation and algorithms; coding is the practical craft of writing instructions a computer can run, a skill CS uses.
- **Computer science vs. Software engineering:** CS studies computational properties in general; software engineering designs and maintains particular, reliable software systems under practical constraints.
- **Computer science vs. Information technology:** CS investigates what and how things can be computed; IT selects, deploys, and maintains computing systems to serve an organization's needs.

## Key Takeaway

Computer science is the study of computation and algorithms, not merely programming or computers. Its power comes from treating a procedure as an abstract, analyzable object that behaves the same across every machine that runs it.

## Practice Question Bank

**1. Which statement best captures what computer science studies?**

- A. The repair and assembly of computer hardware
- B. Computation, information, and algorithms, including what can be computed and how efficiently
- C. The installation and maintenance of an organization's networks
- D. The writing of code in a single official programming language

**Answer: B.** Computer science is the systematic study of computation, information, and algorithms. Hardware repair leans toward computer engineering, network maintenance toward information technology, and coding is one tool the field uses rather than its subject.

**2. According to the NIST Dictionary of Algorithms and Data Structures, an algorithm is best described as:**

- A. A programming language designed for beginners
- B. A physical component that speeds up a computer
- C. A computable set of steps to achieve a desired result
- D. A guess that is refined until it happens to work

**Answer: C.** NIST DADS defines an algorithm as a computable set of steps to achieve a desired result. It is a precise procedure, not a language, a piece of hardware, or a trial-and-error guess.

**3. A researcher proves on paper that a certain sorting method will, in the worst case, always compare every pair of elements, without writing any program. This work is best understood as an example of computer science because it:**

- A. Studies the algorithm as an abstract object, independent of any machine or language
- B. Cannot be valid until the method is coded and run on a real computer
- C. Belongs to information technology rather than computer science
- D. Only counts as computer science if done in a specific language such as Python

**Answer: A.** Because an algorithm is language- and machine-independent, its behavior can be analyzed by reasoning alone. That abstraction is central to computer science, so the proof is squarely within the field and needs no implementation to be valid.

**4. A team must deliver a hospital scheduling app on a fixed budget and deadline, coordinating developers, testing, and long-term maintenance. Which field most directly centers on this kind of work?**

- A. Theory of computation
- B. Computer architecture
- C. Human-computer interaction
- D. Software engineering

**Answer: D.** Building a specific, reliable system under constraints of cost, teams, and deadlines is the focus of software engineering. Theory of computation and computer architecture study more general or lower-level questions, and while HCI informs the interface, the described work as a whole is software engineering.

**5. The remark that "computer science is no more about computers than astronomy is about telescopes" is meant to convey that:**

- A. Astronomy and computer science share most of their methods
- B. Computers will eventually be replaced in the field
- C. The computer is an instrument, while computation is the actual object of study
- D. Computer science should avoid using computers whenever possible

**Answer: C.** The analogy says the machine is a tool, like a telescope, while the real subject is computation, like the stars. It does not claim the two fields share methods, predict hardware's disappearance, or discourage using computers.

## Sources

- NIST Dictionary of Algorithms and Data Structures, "algorithm." U.S. National Institute of Standards and Technology. https://xlinux.nist.gov/dads/HTML/algorithm.html
- Denning, P. J., Comer, D. E., Gries, D., Mulder, M. C., Tucker, A., Turner, A. J., & Young, P. R. (1989). "Computing as a Discipline." Communications of the ACM. https://dl.acm.org/doi/10.1145/63238.63239
- "Computer science." Wikipedia. https://en.wikipedia.org/wiki/Computer_science
- Kafura, D. "Definitions of Computer Science" (course notes). Department of Computer Science, Virginia Tech. https://people.cs.vt.edu/~kafura/ComputationalThinking/Class-Notes/Definitions-of-Computer-Science.html

## Related Topics

- computer-science-fundamentals:foundations:computational-thinking
- computer-science-fundamentals:foundations:algorithms
- computer-science-fundamentals:foundations:abstraction
- computer-science-fundamentals:foundations:decomposition
- computer-science-fundamentals:foundations:software-development-life-cycle

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Researched at:** 2026-08-19
- **Rights status:** Reference-only sources; no source prose adapted; short attributed definitions only.
- **Answer key positions:** B, C, A, D, C
