# Voltage, Current, and Resistance

## In 30 Seconds

Charge is the quantity that actually moves; the other three ideas describe what it does. Current is how fast charge flows past a cross-section — one ampere is one coulomb per second. Voltage is energy handed to each unit of charge between two points — one volt is one joule per coulomb. Resistance is how strongly a particular path opposes that flow, measured in ohms. These definitions, and their units, are the vocabulary every later electrical topic is written in.

## Why This Matters

Every later electrical topic is written in these three words, so a shaky definition here turns into a wrong answer three chapters later. A student who thinks voltage is something a single wire has, or that current is electrons sprinting from switch to lamp, will misread schematics, misuse a meter, and misexplain why a long extension cord dims a power tool. The units also connect electrical work to the rest of engineering: the joule per coulomb ties voltage to energy, and the coulomb per second ties current to a rate, so power and efficiency arguments carry over intact. Outside coursework the same three quantities govern battery sizing, data-centre distribution, and the loss budget of a transmission line.

## Learning Objectives

- Define electric charge, current, voltage, and resistance, and state the SI unit of each in terms of the coulomb, the second, and the joule.
- Distinguish conventional current from the drift of electrons, and explain why an electrical signal propagates far faster than the carriers move.
- Explain why a voltage must be stated between two points or relative to a named reference node.
- Apply R = rho x L / A to a uniform conductor and predict how the result changes with length, diameter, material, and temperature.
- Evaluate the water analogy for electricity: identify what it maps correctly and where it misleads.

## The College Version

### Charge first, because current and voltage are both statements about charge

Electric charge is the property that electric forces act on, and in ordinary matter it appears in whole multiples of the elementary charge. Since the revision of the SI that entered into force on 20 May 2019, that elementary charge is no longer a measured quantity: it is fixed by definition at exactly 1.602 176 634 x 10^-19 coulomb, and the ampere is defined from it. The coulomb is the ampere second, so one coulomb corresponds to about 6.2415 x 10^18 elementary charges — the reciprocal of that fixed value.

Current is the rate at which charge crosses a chosen cross-section of a conductor. Averaged over an interval it is the change in charge divided by the elapsed time; instantaneously it is the derivative of charge with respect to time. One ampere is one coulomb per second.

Two consequences get missed constantly. First, a current is defined at a surface, not spread through a region: you count what crosses a plane cut through the conductor. Second, current is a rate, not an amount. A wire carrying a steady five amperes holds no more net charge than it did when it was idle, because charge enters one end exactly as fast as it leaves the other. Nothing is stored and nothing is consumed; the same current that goes into a lamp comes back out of it.

### Conventional current, electron drift, and why the signal is fast

Circuit analysis is done with conventional current, defined as flowing from the positive terminal of a source, through the external circuit, to the negative terminal. That convention predates any knowledge of atomic structure and traces to eighteenth-century choices about which charge to call positive. In a metal the carriers are electrons, which are negative, so they drift in the direction opposite to the conventional current arrow. Both descriptions give identical physics and identical answers, and every schematic, datasheet, and textbook equation you will meet uses the conventional direction — so learn to read the arrow as a bookkeeping direction rather than as a claim about which particles move.

How fast do the carriers move? The current through a conductor is the product of the carrier number density, the charge per carrier, the cross-sectional area, and the drift velocity. Run those numbers for a 12-gauge copper wire carrying 20.0 amperes and the drift speed comes out around 4.5 x 10^-4 metres per second. At that pace an individual electron would need roughly eighteen hours to travel thirty metres. Yet the lamp at the far end of that thirty metres lights the instant you close the switch, because the electrical signal — the establishment of the field along the circuit — propagates at a speed on the order of 10^8 metres per second, a significant fraction of the speed of light. The carriers that light the lamp were already sitting in the lamp's filament. Nothing had to arrive.

### Voltage is a difference, and the difference is energy per charge

Electric potential is potential energy per unit charge, and potential difference — voltage — is the change in potential energy per unit charge between two points. The unit is the volt, and one volt is one joule per coulomb. In coherent SI base units the volt is kilogram metre squared per second cubed per ampere, which is also the watt per ampere. Moving 2.0 coulombs through a potential difference of 12 volts therefore transfers 24 joules, and that arithmetic is the whole content of the definition.

The essential point, and the one this unit will keep leaning on, is that the zero of potential is arbitrary. Only differences are physically meaningful, exactly as with gravitational potential energy, where you are free to call the floor or the tabletop zero height. So there is no such thing as the voltage of one point in isolation. When an engineer says the voltage at node B is five volts, that is shorthand for five volts between node B and whatever node was declared the reference. This is why a voltmeter has two leads and not one, and it is why the U.S. workplace electrical regulations define the voltage of a circuit as a difference of potential between two conductors rather than as a property of a single wire. Get in the habit of naming both points, or naming the reference, every time you write a voltage down.

### Resistance is about an object; resistivity is about a material

Resistance measures how strongly a particular object opposes charge flow, and one ohm is one volt per ampere. Resistivity, written rho, is the corresponding property of the substance itself, measured in ohm metres, and it does not depend on how much of the substance you have or what shape it is in. The two are connected by geometry: for a uniform conductor of length L and constant cross-sectional area A, the resistance is R = rho x L / A.

Read that relation as three separate predictions. Doubling the length doubles the resistance, because the charge has twice as far to go. Doubling the cross-sectional area halves the resistance, because there are twice as many parallel paths. And because a round conductor's area goes as the square of its diameter, halving the diameter multiplies the resistance by four — which is why wire gauge matters far more than intuition suggests. The reciprocal quantities have their own names: conductivity is one over resistivity, and conductance is one over resistance, measured in siemens, where one siemens is one ampere per volt.

Be honest about what this model assumes. R = rho x L / A describes a uniform piece of material carrying current uniformly across its section, and treating rho as a single number treats the material as ohmic and uniform. Whether current and voltage are actually proportional in a given device is the subject of the next topic in this unit, Ohm's law, which is where that relationship and its limits belong.

### Temperature, and the enormous spread between conductors and insulators

Resistivity is not a constant of nature for a substance; it depends on temperature. Over a moderate range the usual model is linear: the resistivity at temperature T is approximately the resistivity at a reference temperature multiplied by one plus a temperature coefficient times the temperature rise, with the reference conventionally taken as 20.00 degrees Celsius. For copper that coefficient is about 0.0039 per degree Celsius, so a copper conductor warmed from 20 to 75 degrees Celsius gains roughly twenty-one percent in resistance. That is not a rounding error; it is the reason conductor resistance is quoted with a temperature, and the reason a heavily loaded conductor is not the same electrical component when hot that it was when cold.

The spread across materials is larger than most numerical quantities students meet. Good conductors sit around 10^-8 to 10^-7 ohm metres — copper is about 1.68 x 10^-8 and aluminium about 2.65 x 10^-8 at 20.00 degrees Celsius. Semiconductors occupy roughly 10^-5 to 10^3 ohm metres. Insulators run above about 10^11 ohm metres, with glass around 10^9 to 10^14 and hard rubber around 10^13 to 10^16. That is more than twenty orders of magnitude between a copper bus bar and a rubber boot, which is why the same field that drives a large current through one produces essentially nothing in the other.

### Sources, emf, internal resistance, and what ground means

Something has to lift charge back up in energy, and that something is a source of electromotive force. Despite the name, emf is not a force: it is the work a source does per unit charge, and it is measured in volts like any other quantity of energy per charge. An ideal source holds its terminal voltage constant no matter how much current it delivers. A real source has internal resistance, and its terminal voltage is its emf minus the current times that internal resistance — so terminal voltage sags as load current rises, which is why a weak battery reads near its rated voltage with nothing attached and collapses under a starter motor. Idealizing a source is useful and it is also a modelling choice you should be able to name.

Ground is the other piece of vocabulary that carries two meanings. In circuit analysis, ground is simply the node you declare to be zero volts so that every other node voltage has something to be measured against; it is a reference, and it need not be connected to the planet at all. In installed electrical systems the word is regulatory: the U.S. rules define a ground as a conducting connection, intentional or accidental, between an electric circuit or equipment and the earth, or to some conducting body that serves in place of the earth. The analysis reference and the safety connection often coincide, but they are different ideas, and confusing them is a habit worth breaking early. Series and parallel connections of these elements, and the power they dissipate, are handled in the two topics that follow.

### Scope and safety

This lesson is educational material about physical quantities and their units. It is not guidance for working on electrical installations, and nothing in it is a procedure to apply to real wiring, panels, or equipment. Work on real electrical systems is governed by code and by employer safety programmes and requires qualified personnel. U.S. workplace rules require that live parts an employee may be exposed to be deenergized before work on or near them, unless the employer can demonstrate that deenergizing introduces additional or increased hazards or is infeasible, and they allow only qualified persons — people trained in and demonstrably skilled in the equipment, its installation, and its hazards — to work on parts that have not been deenergized. Learn the physics here; leave the installation to people qualified to do it.

## Key Vocabulary

- **Electric charge** — The conserved property of matter that electric forces act on; in ordinary matter it appears in whole multiples of the elementary charge, fixed by the SI at exactly 1.602 176 634 x 10^-19 coulomb.
- **Coulomb (C)** — The SI unit of electric charge, equal to one ampere second, corresponding to about 6.2415 x 10^18 elementary charges.
- **Electric current** — The rate at which charge crosses a chosen cross-section of a conductor, measured in amperes; one ampere is one coulomb per second.
- **Conventional current** — The bookkeeping direction used throughout circuit analysis, taken as the direction in which positive charge would move — out of the positive terminal of a source — whatever the actual carriers are.
- **Drift velocity** — The small average velocity that free carriers acquire along a conductor under an applied field, on the order of 10^-4 metres per second in a household-scale copper wire.
- **Potential difference (voltage)** — The energy transferred per unit charge between two specified points, measured in volts; one volt is one joule per coulomb.
- **Electromotive force (emf)** — The work a source does per unit charge to raise charge in potential, measured in volts; despite the historical name it is not a force.
- **Resistance** — The opposition that a particular object presents to charge flow, measured in ohms; one ohm is one volt per ampere.
- **Resistivity** — A property of a substance, symbol rho, measured in ohm metres, fixing how strongly that substance opposes charge flow independently of the size or shape of the piece.
- **Conductance** — The reciprocal of resistance, measured in siemens, where one siemens is one ampere per volt.

## Eli-10

Every wire is already full of tiny charged particles. They are there before you switch anything on. Voltage is the push: it tells you how much energy each bit of charge is given as it moves from one place in the circuit to another. Current tells you how many of those bits go past a spot each second. Resistance tells you how hard the path makes them work to get through — a thin, long, poorly conducting path is a hard one. Notice that two of these need two locations to make sense. You never ask how much current is at a point, you ask how much goes past it; and you never ask what the voltage of a point is, you ask what it is between one point and another. That is why a meter comes with two probes.

## Eli's Analogy

Think of a closed loop of water pipe with a pump in it. The pump raises the water's pressure, the way a battery raises the energy of charge. The pressure difference between two places in the loop is voltage. The flow rate — litres per second past a given spot — is current, and it matches coulombs per second. A long, narrow, rough section of pipe restricts the flow the way a long, thin, poorly conducting wire does, which is resistance.

**Where the analogy breaks down.** The analogy breaks in three places. Water can spill out of a broken pipe and end up on the floor; charge in a circuit has nowhere to go but around the loop, and the current leaving a lamp equals the current entering it. Pipes can be empty and then fill up, which invites the idea that electrons have to travel from the switch to the lamp before it lights — they do not, because the field is established almost instantly and the carriers already in the lamp start moving. And pressure feels like a property of one point only because atmospheric pressure is an unstated reference; voltage has exactly the same trap, and this lesson asks you to state the reference out loud.

## Worked Example

A uniform copper conductor is 30.0 m long and 2.00 mm in diameter. Take rho = 1.68 x 10^-8 ohm metres at 20.00 degrees Celsius.

Cross-sectional area: A = pi x r^2 = pi x (1.00 x 10^-3 m)^2 = 3.1416 x 10^-6 m^2.

Resistance: R = rho x L / A = (1.68 x 10^-8 ohm m)(30.0 m) / (3.1416 x 10^-6 m^2) = 0.160 ohm, since the metres in the numerator cancel the square metres to leave ohms. Three significant figures in, three out.

Swap copper for aluminium at 2.65 x 10^-8 ohm metres and the same geometry gives 0.253 ohm, a factor of 1.58 worse.

Now heat the copper conductor to 75 degrees Celsius, with a temperature coefficient of about 0.0039 per degree Celsius referenced to 20.00 degrees Celsius: R = 0.1604 ohm x [1 + 0.0039 x (75 - 20)] = 0.195 ohm, an increase of about 21 percent — reported as 0.19 ohm, because the coefficient carries only two significant figures.

Finally, halve the diameter to 1.00 mm: the area falls to 7.854 x 10^-7 m^2 and the resistance rises to 0.642 ohm, exactly four times the original, because area goes as the square of the diameter.

Every number above was executed in python3 before publication.

## Common Mistakes

- **Reading the conventional current arrow as a statement that electrons flow from the positive terminal to the negative terminal.** Conventional current is defined as the direction positive charge would move, and it is the direction drawn on every schematic. In a metal the actual carriers are electrons, which drift the opposite way. Both accounts describe the same physics; the arrow is bookkeeping, not a particle trajectory.
- **Talking about the voltage of a single point, wire, or terminal as if it were a property that point owns.** Voltage is a difference in energy per unit charge between two points. The zero of potential is arbitrary, so a single-point voltage is meaningful only as shorthand for the difference against a stated reference node. Name both points, or name the reference.
- **Using resistance and resistivity as if they were the same quantity.** Resistivity, in ohm metres, is a property of the material. Resistance, in ohms, is a property of a specific object and depends on its length and cross-section through R = rho x L / A. Two wires of the same copper can have very different resistances.
- **Explaining that a lamp lights immediately because electrons race down the wire at nearly the speed of light — or, in the other direction, that current gets used up along the way.** Carriers drift at roughly 10^-4 metres per second, while the signal propagates at around 10^8 metres per second. The lamp lights because the field drives carriers already present in the filament, and the current returning from the lamp equals the current entering it.
- **Treating a battery's terminal voltage as a fixed number printed on the label.** That number is the emf. A real source has internal resistance, so its terminal voltage is the emf minus the current times that internal resistance, and it drops as the load draws more current. An ideal, zero-internal-resistance source is a modelling assumption you should be able to state.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Current | Voltage | Current is a rate of charge flow measured through a cross-section, in coulombs per second. Voltage is energy per unit charge measured between two points, in joules per coulomb. One is a through quantity, the other an across quantity, and a meter is connected differently for each. |
| Resistance | Resistivity | Resistance belongs to an object and is measured in ohms; resistivity belongs to a material and is measured in ohm metres. Geometry converts one into the other through R = rho x L / A, so changing only the length or diameter changes the resistance while leaving the resistivity untouched. |
| Electromotive force | Terminal voltage | The emf is the energy per unit charge the source supplies internally. The terminal voltage is what actually appears across its terminals, and for a real source it equals the emf minus the current times the internal resistance. They coincide only for an ideal source or at zero current. |
| Circuit ground (reference node) | Earth ground | A circuit ground is whichever node you declare to be zero volts so that other node voltages have a reference; it need not touch the planet. An earth ground is a conducting connection between a circuit or equipment and the earth, or to a conducting body serving in place of the earth, and it exists for safety reasons defined in code. |

## Key Takeaway

Charge is what moves, current is how fast it moves past a cross-section, voltage is the energy per unit charge between two points, and resistance is how hard a specific object makes that flow — and the second and fourth of those are meaningless until you say through what and between which two points.

## Practice Question Bank

**1. Since the SI revision that took effect on 20 May 2019, the ampere is defined by which of the following?** (recall)

- A. The force per unit length between two infinitely long parallel conductors placed one metre apart in vacuum
- B. The current that deposits a fixed mass of silver per second from a silver nitrate solution
- C. **Fixing the elementary charge at exactly 1.602 176 634 x 10^-19 coulomb, where the coulomb is the ampere second** — correct
- D. Fixing the resistance of a standard column of mercury at exactly one ohm

The 2019 SI defines the ampere by taking the numerical value of the elementary charge to be exactly 1.602 176 634 x 10^-19 when expressed in coulombs, and the coulomb is the ampere second; one ampere therefore corresponds to the flow of about 6.2415 x 10^18 elementary charges per second. None of the other three options is the SI definition in force: none of them fixes the elementary charge, and the mercury column describes a resistance standard rather than a current at all.

**2. An engineer writes that the voltage at node B is 5 V. What has to be true for that statement to carry meaning?** (understanding)

- A. **A reference node has been chosen, and 5 V is the potential difference between node B and that reference** — correct
- B. Node B is storing 5 joules of electrical energy
- C. 5 coulombs of charge pass through node B every second
- D. Node B is physically connected to the earth

Potential difference is energy per unit charge between two points, and the point chosen as zero volts is arbitrary, so only differences are physically meaningful. A single-point voltage is shorthand for the difference against a declared reference node. Stored energy in joules is a different quantity, charge per second is current, and the reference node in circuit analysis need not be connected to the earth at all.

**3. A uniform copper conductor is 30.0 m long and 2.00 mm in diameter, with rho = 1.68 x 10^-8 ohm metres at 20.00 degrees Celsius. What is its resistance?** (application)

- A. 0.0401 ohm
- B. **0.160 ohm** — correct
- C. 0.642 ohm
- D. 1.60 x 10^-7 ohm

The radius is 1.00 x 10^-3 m, so A = pi x r^2 = 3.1416 x 10^-6 m^2, and R = rho x L / A = (1.68 x 10^-8)(30.0) / (3.1416 x 10^-6) = 0.160 ohm. The value 0.0401 ohm comes from using the diameter as the radius, which overstates the area fourfold; 0.642 ohm comes from using half the true diameter; and 1.60 x 10^-7 ohm comes from leaving the diameter in millimetres when computing the area.

**4. Two round conductors are made of the same copper and cut to the same length, but conductor B has half the diameter of conductor A. How do their resistances compare?** (analysis)

- A. B has half the resistance of A
- B. B has twice the resistance of A
- C. B has the same resistance as A, because both are made of the same material
- D. **B has four times the resistance of A** — correct

Resistance is inversely proportional to cross-sectional area, and for a round conductor the area is proportional to the square of the diameter. Halving the diameter quarters the area and therefore quadruples the resistance. Same material means the same resistivity, but resistivity is a material property and resistance is an object property, so identical resistivity does not imply identical resistance.

**5. You close a switch and a lamp 30 m away lights immediately, even though the drift speed of electrons in the wire is on the order of 10^-4 metres per second. Which explanation is correct?** (understanding)

- A. Individual electrons travel from the switch to the lamp at nearly the speed of light
- B. **The electrical signal is established through the circuit at a speed on the order of 10^8 metres per second and drives carriers that are already present throughout the conductor and the lamp** — correct
- C. Drift velocity applies only to alternating current, so in this direct-current circuit the electrons move far faster
- D. The lamp holds enough stored charge to light on its own until the current from the switch arrives

Carriers drift on the order of 10^-4 metres per second, which would take an electron many hours to cross 30 m, while electrical signals propagate on the order of 10^8 metres per second, a significant fraction of the speed of light. The lamp lights because carriers already in the filament begin to move, not because electrons arrive from the switch, and drift velocity is not restricted to one type of current.

## Sources

- `bipm-si-brochure-9th-edition` — BIPM, *The International System of Units (SI)*, 9th edition. https://www.bipm.org/en/publications/si-brochure (ampere page read at https://www.bipm.org/en/si-base-units/ampere). CC BY 4.0, attribution required.
- `nist-sp330-2019-section-2-si-units` — NIST SP 330 (2019), Section 2. https://www.nist.gov/pml/special-publication-330/sp-330-section-2. Reference only.
- `openstax-university-physics-2-electrical-current` — OpenStax, *University Physics Volume 2*, 9.1 Electrical Current. https://openstax.org/books/university-physics-volume-2/pages/9-1-electrical-current. Reference only.
- `openstax-university-physics-2-model-of-conduction-in-metals` — OpenStax, *University Physics Volume 2*, 9.2 Model of Conduction in Metals. https://openstax.org/books/university-physics-volume-2/pages/9-2-model-of-conduction-in-metals. Reference only.
- `openstax-university-physics-2-resistivity-and-resistance` — OpenStax, *University Physics Volume 2*, 9.3 Resistivity and Resistance. https://openstax.org/books/university-physics-volume-2/pages/9-3-resistivity-and-resistance. Reference only.
- `openstax-university-physics-2-electric-potential-and-potential-difference` — OpenStax, *University Physics Volume 2*, 7.2 Electric Potential and Potential Difference. https://openstax.org/books/university-physics-volume-2/pages/7-2-electric-potential-and-potential-difference. Reference only.
- `openstax-university-physics-2-electromotive-force` — OpenStax, *University Physics Volume 2*, 10.1 Electromotive Force. https://openstax.org/books/university-physics-volume-2/pages/10-1-electromotive-force. Reference only.
- `ecfr-29-cfr-1910-399-electrical-definitions` — 29 CFR 1910.399, definitions for OSHA Subpart S. https://www.ecfr.gov/current/title-29/section-1910.399 (text read from OSHA's copy of the section). Public domain.
- `ecfr-29-cfr-1910-333-work-practices` — 29 CFR 1910.333, selection and use of work practices. https://www.ecfr.gov/current/title-29/section-1910.333 (text read from OSHA's copy of the section). Public domain.

## Related Topics

- `engineering-fundamentals:electrical-fundamentals:ohm-s-law`
- `engineering-fundamentals:electrical-fundamentals:series-and-parallel-circuits`
- `engineering-fundamentals:electrical-fundamentals:electrical-power`

## Editorial Metadata

- Topic id: `engineering-fundamentals:electrical-fundamentals:voltage-current-and-resistance`
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-19
- Rights: mixed — BIPM SI Brochure CC BY 4.0 (attribution required); NIST SP 330 and OpenStax pages reference-only; CFR sections public domain. No source prose adapted.
- Transformation: original synthesis from the cited sources; every published number executed in python3 via Bash with units carried.
- Safety note: educational material only; not guidance for work on electrical installations.
