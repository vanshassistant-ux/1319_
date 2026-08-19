# Series and Parallel Circuits

## In 30 Seconds

Two elements are in series when the same current is forced through both, and in parallel when both span the same pair of nodes and therefore share one voltage. Those physical conditions, not the shape of the schematic, decide everything else. Series resistances add and the voltage divides; parallel conductances add, the current divides, and the equivalent resistance always falls below the smallest branch. Kirchhoff's two conservation laws are the general rule underneath both cases.

## Why This Matters

Nearly every circuit you meet later is analyzed by recognizing series and parallel groups and collapsing them, from a sensor divider to a battery pack to the model of a loudspeaker. Getting the topology wrong is the most common source of wrong answers in a first circuits course, because students read a schematic as a picture instead of as a claim about shared current and shared nodes. The habit this lesson builds is broader than circuits: reading a diagram as a statement about what is shared, and then checking a finished answer against a conservation law you did not use in solving it, is how engineering analysis is done in every later course. Learning it once on resistors is the cheapest place to learn it.

## Learning Objectives

- Define series and parallel connections by their physical conditions, shared current and a shared node pair, rather than by how a schematic is drawn.
- Distinguish the series and parallel equivalent-resistance rules and explain why a parallel combination is always smaller than its smallest branch.
- Explain Kirchhoff's current and voltage laws as statements of charge and energy conservation, and identify which rule each combination law follows from.
- Apply the voltage-divider and current-divider relations, deriving each from the definitions rather than quoting them.
- Analyze a combination circuit by stepwise reduction and expansion, then verify the result with an independent power balance.

## The College Version

### Topology is a claim about current and voltage, not about the drawing

Two elements are in series when the current through one of them must be the current through the other, because there is no junction between them where charge could be diverted. Two elements are in parallel when both ends of one connect to the same two nodes as both ends of the other, so they necessarily have the same voltage across them. Those are the definitions, and they are physical conditions, not visual ones. A schematic is a graph, not a picture: the same circuit can be redrawn with a branch swung around to the other side of the page, and the topology does not change. This is where most first-course errors begin. Students see three resistors in a row and call them series without checking whether a wire leaves the middle of the row, or see two resistors drawn side by side and call them parallel without checking whether both ends really land on the same node pair. Fiore's warning is worth memorizing in spirit: two elements carrying the same numerical current are not necessarily in series, any more than two people with the same surname are necessarily siblings. Test the definition every time, and redraw the circuit if you need to.

### Series: one current, and voltage that gets shared out

In a series string the current is the same everywhere. That single fact generates the rest. Because each resistor obeys V = IR with the same I, the voltage across the k-th resistor is I R_k, and the total voltage across the string is the sum of those drops. Factor out the common current and you get the equivalent resistance directly: V_total = I(R_1 + R_2 + ... + R_N), so R_series = R_1 + R_2 + ... + R_N. Adding a resistor in series always raises the equivalent resistance, and the largest resistor always takes the largest share of the voltage. A series string has one failure mode that follows immediately from the definition: if any element opens, there is no path for current anywhere in the string, so every element in it goes dead. The old-style Christmas light string that goes entirely dark when one bulb fails is the standard illustration, and it is also the reason series is a poor topology for anything you want to keep running independently. Note that Ohm's law is doing the work in every step here; this lesson assumes it rather than re-deriving it.

### Parallel: one voltage, and current that gets shared out

In a parallel group every element spans the same two nodes, so every element sees the same voltage V. Each branch then draws its own current V/R_k, and those branch currents add to the total: I_total = V(1/R_1 + 1/R_2 + ... + 1/R_N). Factoring V out gives the reciprocal-sum rule, R_parallel = 1/(1/R_1 + 1/R_2 + ... + 1/R_N). Conductance, the reciprocal of resistance measured in siemens, simply adds in parallel, which is why the rule looks awkward in resistance and clean in conductance. For exactly two resistors the algebra collapses to the product-over-sum form R_1 R_2/(R_1 + R_2), and for N identical resistors it collapses to R/N. The consequence students most often get wrong is this: the parallel equivalent is always smaller than the smallest branch, never between the branch values and never their average. Adding another parallel branch adds another path for charge, so it can only lower the equivalent resistance. A 1000 ohm resistor in parallel with a 1 ohm resistor gives about 0.999 ohm, essentially the small branch alone. That asymmetry is worth internalizing: in series the large resistor dominates, in parallel the small one does.

### Kirchhoff's laws are the general statement underneath both

The series and parallel rules are special cases of two conservation statements. Kirchhoff's current law says that the currents entering a node equal the currents leaving it, or equivalently that the signed currents at a node sum to zero. It is charge conservation applied to a point that cannot store charge. The parallel rule is exactly KCL at the two nodes of the group. Kirchhoff's voltage law says that the algebraic sum of potential changes around any closed loop is zero, equivalently that the rises equal the drops. It is energy conservation applied to a charge carried once around the loop and returned to where it started: potential is a function of position in the circuit, so a round trip nets zero change. The series rule is exactly KVL around the loop containing the string. Sign convention matters. Traversing a resistor in the direction you assumed for its current gives a drop, traversing it against that direction gives a rise, and a source contributes a rise when you pass from its negative to its positive terminal. Assume directions, be consistent, and let a negative answer tell you an assumption was backwards. Circuits that are not reducible by series and parallel steps at all, such as a bridge, still yield to KCL and KVL written as a system of equations.

### Voltage dividers and current dividers, derived rather than quoted

Both divider rules fall out of the definitions in one line each, and deriving them is safer than memorizing them. Voltage divider: in a series loop driven by source voltage E, the common current is I = E/R_total, so the voltage across a resistor of interest is V = I R = E R_interest/R_total. The share of the source voltage a resistor takes is its share of the total resistance. Current divider: in a parallel pair carrying total current I_total, the shared voltage is V = I_total R_1 R_2/(R_1 + R_2), so the current in R_1 is V/R_1 = I_total R_2/(R_1 + R_2). Notice which resistor appears in the numerator: the other one. Current divides in inverse proportion to resistance, so the smaller branch takes the larger current. That two-resistor form is the one to be careful with, because it is valid only for two branches; with three or more, either reduce two at a time or work from conductances, where the share going to branch k is G_k divided by the sum of all the conductances.

### Combination circuits: reduce, then expand

Most real circuits are neither purely series nor purely parallel. The procedure is mechanical once the topology is right. Working from the end furthest from the source, find any group that is unambiguously series or unambiguously parallel, replace it with its equivalent, redraw, and repeat until a single resistance remains across the source. That equivalent gives the total current the source delivers. Then expand: walk back outward one step at a time, using the total current and the equivalent you just replaced to recover the voltage across that group, then splitting that voltage among the elements you collapsed. Every step is either V = IR applied to a series element or the divider relation applied to a group. Two habits make this reliable. First, redraw after every reduction rather than annotating a crowded diagram. Second, check the finished solution against a conservation statement you did not use in the solving: the branch currents at each node must satisfy KCL, the drops around each loop must satisfy KVL, and the power dissipated in all the resistors must sum to the power the source delivers. That last check uses P = VI purely as an independent audit; the power relations themselves belong to the electrical-power lesson.

### Shorts, opens, and why household branch circuits are parallel

Two limiting cases are worth naming because they explain many circuit behaviours. An open is a break with no conducting path: current through it is zero, and the voltage across the gap is whatever the rest of the circuit imposes. A short is a near-zero-resistance path between two points: the voltage between them is forced to nearly zero, and current takes that path preferentially. Put an open in a series string and the whole string stops. Put an open in one branch of a parallel group and only that branch stops, while the others carry on at the same voltage. Short one element in a parallel group and the whole group is shorted, because all of them span the same nodes. Household branch circuits put loads in parallel for exactly these reasons: every device sees the same supply voltage regardless of what else is plugged in, and switching one device off opens only its own branch. The cost is that branch currents add, so the total in the supply conductors rises with each load, which is why an overload protective device is part of the circuit. OpenStax describes a short circuit as a low-resistance path between the terminals of a voltage source and notes that the resulting current can convert electrical energy to thermal energy faster than it can be safely dissipated. This lesson is educational material about circuit models. It is not wiring guidance, not a procedure, and not design advice; real electrical installations are governed by codes and carried out by qualified licensed people.

### Nodes, labels, and where a meter goes

Analysis gets much easier if you label nodes before you write anything. A node is a region joined by ideal conductors, so every point in it is at the same potential; a length of wire, however long it looks on the page, is part of a node and not a separate element in the ideal model. Pick one node as the zero reference, label the others with letters, and then every voltage in the problem is a difference between two labels rather than a floating quantity. That discipline also settles where a meter belongs, which follows straight from the topology definitions. An ammeter measures current, so it must carry the same current as the element of interest, which means it goes in series and must have very low resistance so that inserting it barely changes the circuit. A voltmeter measures a potential difference, so it must span the same two nodes as the element, which means it goes in parallel and must have very high resistance so that it draws almost no current. Both are idealizations: a real ammeter adds a small resistance and a real voltmeter draws a small current, and each perturbs the circuit slightly in the direction you would predict.

## Key Vocabulary

- **Node** — A region of a circuit joined by ideal conductors, so that every point within it sits at one common potential.
- **Branch** — A single path between two nodes, containing one or more elements that all carry one common current.
- **Series connection** — An arrangement in which the same current must pass through every element in turn, with no junction between them to divert it.
- **Parallel connection** — An arrangement in which every element spans the same two nodes and therefore has the same voltage across it.
- **Equivalent resistance** — The single resistance that would draw exactly the same current from the source as the network it stands in for.
- **Conductance** — The reciprocal of resistance, measured in siemens, equal to amperes per volt; it adds directly across parallel branches.
- **Kirchhoff's current law** — The rule that currents arriving at a junction sum to the currents leaving it, which follows from conservation of charge.
- **Kirchhoff's voltage law** — The rule that potential changes around any closed loop sum to zero, which follows from conservation of energy.
- **Short circuit** — A near-zero-resistance path between two points, which forces the potential difference between them to nearly zero.
- **Open circuit** — A break in a conducting path, so no current flows through it no matter what voltage appears across the gap.

## Eli-10

Forget the picture for a moment and ask two questions about any pair of parts. Question one: does all the electricity that goes through this part have to go through that part too, with nowhere else to turn? If yes, they are in series, and they share one current. Question two: are both ends of this part touching the same two connection points as both ends of that part? If yes, they are in parallel, and they share one voltage. Everything else is bookkeeping. Series parts split up the voltage and add up their resistances. Parallel parts split up the current, and because you have opened extra routes, the combination is easier to push through than any single one of them on its own.

## Eli's Analogy

Think of a corridor with doorways. Series is one long hallway with several narrow doorways one after another: everybody who gets through the first doorway has to get through the second, and each doorway takes its own bite out of the crowd's momentum. Parallel is one wall with several doorways side by side: the crowd splits, each doorway handles a share, and the wall as a whole is easier to get through than its best single doorway.

**Where the analogy breaks down.** The analogy breaks in three places. Charge does not pile up in a circuit the way people bunch up behind a door, which is exactly what Kirchhoff's current law asserts. The push in a circuit is set by the source and does not sag because more people showed up, whereas real crowds interfere with each other. And doorway widths do not combine by an exact reciprocal sum the way resistances do, so use the analogy for the direction of the effect and the arithmetic for its size.

## Worked Example

Take an ideal 15.0 V source driving a 100 ohm resistor R1 from node a to node b, then a parallel pair of R2 = 300 ohm and R3 = 200 ohm from node b to node c, then a 30.0 ohm resistor R4 from node c back to node d, which we call 0 V. Reduce first. The parallel pair gives (300 x 200)/(300 + 200) = 120 ohm, which is smaller than the 200 ohm branch, as it must be. The three remaining resistances are in series, so R_total = 100 + 120 + 30 = 250 ohm and the source delivers I_total = 15.0/250 = 0.0600 A, or 60.0 mA. Now expand. V1 = 0.0600 x 100 = 6.00 V, the parallel group carries 0.0600 x 120 = 7.20 V, and V4 = 0.0600 x 30 = 1.80 V; those three sum to 15.00 V, satisfying KVL. Taking node d as 0 V, the node voltages are a = 15.00 V, b = 9.00 V, c = 1.80 V, d = 0 V. Split the 7.20 V between the branches: I2 = 7.20/300 = 0.0240 A (24.0 mA) and I3 = 7.20/200 = 0.0360 A (36.0 mA), which sum to 60.0 mA and satisfy KCL at node b. Verify with power, a quantity not used in the solution. The source supplies 15.0 x 0.0600 = 0.900 W. The resistors dissipate I^2R of 0.360 W, 0.1728 W, 0.2592 W and 0.108 W, summing to exactly 0.900 W. The books balance, so the topology and the arithmetic are both right. Every figure here was computed in exact rational arithmetic before publication.

## Common Mistakes

- **Adding the reciprocals of parallel resistances and reporting that sum as the answer, forgetting the final inversion.**
  For 300 ohm and 200 ohm, 1/300 + 1/200 = 0.008333 per ohm, which is a conductance of 0.008333 S, not a resistance. Invert it to get 120 ohm. Watching the units catches this error every time.
- **Expecting a parallel equivalent to land somewhere between the two branch values, or to be their average.**
  A parallel combination is always smaller than the smallest branch, because each added branch is an extra path for current. 300 ohm with 200 ohm gives 120 ohm, not 250 ohm and not 500 ohm. If your answer is not below the smallest branch, you have made an arithmetic slip.
- **Deciding topology from the layout of the schematic: elements drawn in a row must be series, elements drawn side by side must be parallel.**
  Apply the definitions instead. Series requires that the same current be forced through both with no junction between them; parallel requires that both elements terminate on the same two nodes. Redraw the circuit if the drawing is misleading, because redrawing cannot change the topology.
- **Using the two-resistor current-divider form, I_1 = I_total R_2/(R_1 + R_2), on a group of three or more parallel branches.**
  That form is derived for exactly two branches. With three or more, either collapse the branches two at a time or work in conductances, where branch k takes a share G_k divided by the sum of all the branch conductances.
- **Assigning the full source voltage to a resistor that sits inside a series string.**
  A resistor in a series loop takes only its share, E times R/R_total. Across a 2.0 kohm and 4.0 kohm pair on a 9.0 V source, the 4.0 kohm resistor gets 6.0 V and the 2.0 kohm resistor gets 3.0 V; only the two together see the full 9.0 V.

## Compare / Contrast

| | |  |
|---|---|---|
| Series connection | Parallel connection | Series fixes the current and divides the voltage, so resistances add and the equivalent exceeds any single element. Parallel fixes the voltage and divides the current, so conductances add and the equivalent falls below the smallest element. |
| Kirchhoff's current law | Kirchhoff's voltage law | KCL is charge conservation written at a node and is what makes parallel branch currents add. KVL is energy conservation written around a closed loop and is what makes series voltage drops add to the source voltage. |
| An open in one element | A short across one element | An open forces zero current through that path and stops a whole series string but only one branch of a parallel group. A short forces zero voltage across that path, and shorting one member of a parallel group shorts the entire group, because they all span the same nodes. |
| Voltage divider | Current divider | A voltage divider applies inside a series loop and gives each element a share of the source voltage in direct proportion to its resistance. A current divider applies across parallel branches and gives each branch a share of the total current in inverse proportion to its resistance. |
| Ammeter placement | Voltmeter placement | An ammeter must carry the current it is measuring, so it goes in series and needs very low resistance. A voltmeter must span the two nodes whose difference it is measuring, so it goes in parallel and needs very high resistance. |

## Key Takeaway

Series means one shared current and added resistances; parallel means one shared voltage and added conductances, which always leaves the equivalent below the smallest branch. Decide topology from the definitions, not the drawing, and check the finished answer with KCL, KVL, or a power balance.

## Practice Question Bank

**1. Two resistors in a circuit are in series when which condition holds?**

A. They are drawn one after another along a straight line on the schematic.
B. They have the same resistance value in ohms.
C. The same current must pass through both, with no junction between them that could divert any of it.
D. Both of their ends are connected to the same two nodes.

*Answer: C.* Series is defined by a forced common current with no intervening junction. Drawing position is irrelevant, since a schematic can be redrawn without changing topology. Equal resistance values say nothing about topology. Sharing the same two nodes is the definition of parallel, not series.
*Difficulty:* recall · *Skill:* Stating the defining physical condition for a series connection rather than a visual one · *Sources:* libretexts-fiore-dc-the-series-connection, openstax-university-physics-2-resistors-in-series-and-parallel

**2. A 6.0 ohm resistor and a 3.0 ohm resistor are connected in parallel. What is the equivalent resistance of the pair?**

A. 2.0 ohm
B. 4.5 ohm
C. 9.0 ohm
D. 0.50 ohm

*Answer: A.* Product over sum gives (6.0 x 3.0)/(6.0 + 3.0) = 18/9 = 2.0 ohm, which is correctly below the 3.0 ohm branch. 9.0 ohm is the series value. 4.5 ohm is the average, which the parallel rule never produces. 0.50 is the sum of conductances, 1/6.0 + 1/3.0 = 0.50 S, reported without inverting and with the wrong unit.
*Difficulty:* understanding · *Skill:* Applying the parallel equivalent-resistance rule and recognizing that the result falls below the smallest branch · *Sources:* libretexts-fiore-dc-combining-parallel-components, openstax-university-physics-2-resistors-in-series-and-parallel

**3. A 9.0 V source drives a 2.0 kohm resistor in series with a 4.0 kohm resistor. What is the voltage across the 4.0 kohm resistor?**

A. 9.0 V
B. 3.0 V
C. 4.5 V
D. 6.0 V

*Answer: D.* The total resistance is 6.0 kohm, so the common current is 9.0/6000 = 1.5 mA and the drop across 4.0 kohm is 1.5 mA x 4.0 kohm = 6.0 V; equivalently 9.0 x (4.0/6.0) = 6.0 V. 3.0 V is the drop across the 2.0 kohm resistor, 4.5 V would require equal resistances, and 9.0 V is the full source voltage, which appears only across the pair together.
*Difficulty:* application · *Skill:* Applying the voltage-divider relation to a series pair · *Sources:* libretexts-fiore-dc-series-analysis, libretexts-fiore-dc-kirchhoffs-voltage-law

**4. A total current of 50 mA enters a parallel pair consisting of a 100 ohm resistor and a 400 ohm resistor. How much of that current flows through the 100 ohm resistor?**

A. 10 mA
B. 40 mA
C. 25 mA
D. 12.5 mA

*Answer: B.* The current divider puts the other resistance in the numerator: 50 mA x 400/(100 + 400) = 40 mA. Checking, the pair's equivalent is 80 ohm, so the shared voltage is 50 mA x 80 ohm = 4.0 V, giving 4.0/100 = 40 mA and 4.0/400 = 10 mA, which sum to 50 mA. The 10 mA option is the 400 ohm branch, 25 mA assumes an equal split, and 12.5 mA inverts the ratio incorrectly.
*Difficulty:* application · *Skill:* Applying the two-resistor current-divider relation and recognizing inverse proportionality · *Sources:* libretexts-fiore-dc-parallel-analysis, libretexts-fiore-dc-kirchhoffs-current-law

**5. A 20.0 V source drives a 7.0 ohm resistor in series with a parallel combination of a 12.0 ohm and a 4.0 ohm resistor. What current flows in the 12.0 ohm resistor?**

A. 1.67 A
B. 2.00 A
C. 0.500 A
D. 1.50 A

*Answer: C.* Reduce: 12.0 in parallel with 4.0 is (12 x 4)/16 = 3.0 ohm, so the total is 7.0 + 3.0 = 10.0 ohm and the source current is 20.0/10.0 = 2.00 A. Expand: the parallel group carries 2.00 A x 3.0 ohm = 6.00 V, so the 12.0 ohm branch takes 6.00/12.0 = 0.500 A and the 4.0 ohm branch takes 1.50 A. Power confirms it: 28.0 + 3.00 + 9.00 = 40.0 W, matching 20.0 V x 2.00 A. The 2.00 A option is the total current, 1.50 A is the other branch, and 1.67 A comes from wrongly putting the full 20.0 V across the 12.0 ohm resistor.
*Difficulty:* analysis · *Skill:* Reducing a combination circuit to an equivalent resistance and expanding back to a single branch current · *Sources:* openstax-university-physics-2-resistors-in-series-and-parallel, libretexts-fiore-dc-series-parallel-connections, openstax-university-physics-2-kirchhoffs-rules

## Sources

- `openstax-university-physics-2-resistors-in-series-and-parallel` — University Physics Volume 2, 10.2 Resistors in Series and Parallel, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel> (usage: REFERENCE_ONLY)
- `openstax-university-physics-2-kirchhoffs-rules` — University Physics Volume 2, 10.3 Kirchhoff's Rules, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules> (usage: REFERENCE_ONLY)
- `openstax-university-physics-2-electrical-measuring-instruments` — University Physics Volume 2, 10.4 Electrical Measuring Instruments, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-2/pages/10-4-electrical-measuring-instruments> (usage: REFERENCE_ONLY)
- `openstax-university-physics-2-household-wiring-and-electrical-safety` — University Physics Volume 2, 10.6 Household Wiring and Electrical Safety, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-2/pages/10-6-household-wiring-and-electrical-safety> (usage: REFERENCE_ONLY)
- `libretexts-fiore-dc-the-series-connection` — DC Electrical Circuit Analysis: A Practical Approach, 3.3 The Series Connection, James M. Fiore, Mohawk Valley Community College (Engineering LibreTexts). <https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/DC_Electrical_Circuit_Analysis_-_A_Practical_Approach_(Fiore)/03%3A_Series_Resistive_Circuits/3.03%3A_The_Series_Connection> (usage: REFERENCE_ONLY — CC BY-NC-SA 4.0)
- `libretexts-fiore-dc-kirchhoffs-voltage-law` — DC Electrical Circuit Analysis: A Practical Approach, 3.6 Kirchhoff's Voltage Law, James M. Fiore, Mohawk Valley Community College (Engineering LibreTexts). <https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/DC_Electrical_Circuit_Analysis_-_A_Practical_Approach_(Fiore)/03%3A_Series_Resistive_Circuits/3.06%3A_Kirchhoff's_Voltage_Law> (usage: REFERENCE_ONLY — CC BY-NC-SA 4.0)
- `libretexts-fiore-dc-series-analysis` — DC Electrical Circuit Analysis: A Practical Approach, 3.7 Series Analysis, James M. Fiore, Mohawk Valley Community College (Engineering LibreTexts). <https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/DC_Electrical_Circuit_Analysis_-_A_Practical_Approach_(Fiore)/03%3A_Series_Resistive_Circuits/3.07%3A_Series_Analysis> (usage: REFERENCE_ONLY — CC BY-NC-SA 4.0)
- `libretexts-fiore-dc-the-parallel-connection` — DC Electrical Circuit Analysis: A Practical Approach, 4.2 The Parallel Connection, James M. Fiore, Mohawk Valley Community College (Engineering LibreTexts). <https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/DC_Electrical_Circuit_Analysis_-_A_Practical_Approach_(Fiore)/04%3A_Parallel_Resistive_Circuits/4.2%3A_The_Parallel_Connection> (usage: REFERENCE_ONLY — CC BY-NC-SA 4.0)
- `libretexts-fiore-dc-combining-parallel-components` — DC Electrical Circuit Analysis: A Practical Approach, 4.3 Combining Parallel Components, James M. Fiore, Mohawk Valley Community College (Engineering LibreTexts). <https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/DC_Electrical_Circuit_Analysis_-_A_Practical_Approach_(Fiore)/04%3A_Parallel_Resistive_Circuits/4.3%3A_Combining_Parallel_Components> (usage: REFERENCE_ONLY — CC BY-NC-SA 4.0)
- `libretexts-fiore-dc-kirchhoffs-current-law` — DC Electrical Circuit Analysis: A Practical Approach, 4.4 Kirchhoff's Current Law, James M. Fiore, Mohawk Valley Community College (Engineering LibreTexts). <https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/DC_Electrical_Circuit_Analysis_-_A_Practical_Approach_(Fiore)/04%3A_Parallel_Resistive_Circuits/4.4%3A_Kirchhoff's_Current_Law> (usage: REFERENCE_ONLY — CC BY-NC-SA 4.0)
- `libretexts-fiore-dc-parallel-analysis` — DC Electrical Circuit Analysis: A Practical Approach, 4.5 Parallel Analysis, James M. Fiore, Mohawk Valley Community College (Engineering LibreTexts). <https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/DC_Electrical_Circuit_Analysis_-_A_Practical_Approach_(Fiore)/04%3A_Parallel_Resistive_Circuits/4.5%3A_Parallel_Analysis> (usage: REFERENCE_ONLY — CC BY-NC-SA 4.0)
- `libretexts-fiore-dc-series-parallel-connections` — DC Electrical Circuit Analysis: A Practical Approach, 5.2 Series-Parallel Connections, James M. Fiore, Mohawk Valley Community College (Engineering LibreTexts). <https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/DC_Electrical_Circuit_Analysis_-_A_Practical_Approach_(Fiore)/05%3A_Series-Parallel_Resistive_Circuits/5.2%3A_Series-Parallel_Connections> (usage: REFERENCE_ONLY — CC BY-NC-SA 4.0)
- `nist-sp811-chapter-4-classes-of-si-units` — NIST Guide to the SI, Chapter 4: The Two Classes of SI Units and the SI Prefixes, National Institute of Standards and Technology (NIST Special Publication 811, 2008 edition). <https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes> (usage: REFERENCE_ONLY)

## Related Topics

- `engineering-fundamentals:electrical-fundamentals:voltage-current-and-resistance`
- `engineering-fundamentals:electrical-fundamentals:ohm-s-law`
- `engineering-fundamentals:electrical-fundamentals:electrical-power`

## Editorial Metadata

- Topic id: `engineering-fundamentals:electrical-fundamentals:series-and-parallel-circuits`
- Editorial status: READY_TO_PUBLISH
- Estimated minutes: 11
- Researched at: 2026-08-19
- Research status: source-verified
- Rights status: reference-only sources; no source prose adapted; all CC BY-NC-SA and unverified-terms material held at REFERENCE_ONLY
- Transformation: Facts were extracted from OpenStax University Physics Volume 2 chapter 10, the Fiore DC Electrical Circuit Analysis chapters on series, parallel and series-parallel circuits, and NIST SP 811 chapter 4, then rewritten as original EliExplains prose. Every numeric result in the worked example, the common mistakes and the question bank was computed in exact rational arithmetic with Python before publication and cross-checked against KCL, KVL and a power balance.
- Safety note: this lesson is educational material about circuit models. It is not wiring guidance, an installation procedure, or engineering design advice; real electrical work is governed by codes and carried out by qualified licensed people.
- Every numeric value in the worked example, the common mistakes and the question bank was computed in exact rational arithmetic with Python before publication and cross-checked against Kirchhoff's current law, Kirchhoff's voltage law and a power balance.
