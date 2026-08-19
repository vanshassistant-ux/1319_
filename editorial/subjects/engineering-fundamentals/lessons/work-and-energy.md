# Work and Energy

## In 30 Seconds

Work is energy transferred by a force acting through a displacement: W = F d cos(theta) for a constant force, and an integral along the path when the force varies. Net work changes kinetic energy. Conservative forces such as gravity and an ideal spring let you replace that bookkeeping with a potential energy measured from a datum you choose. Friction does not, so you account for the energy it moves rather than calling it lost. Power is the rate of transfer, in watts; efficiency is useful output over input.

## Why This Matters

Energy methods let you skip time. When a problem asks how fast something ends up moving after a drop, a slide, or a spring release, and does not ask when, the work-energy route usually gets there in one scalar equation while Newton's second law needs vectors and an integration. The advantage compounds in later courses, where the same bookkeeping becomes the first law of thermodynamics, the energy balance in a fluid line, and the loss terms in a motor specification. It is also the vocabulary of every energy claim you will be asked to judge, from a kilowatt rating to an efficiency percentage, and knowing what sits inside the system boundary is what makes those claims readable rather than impressive.

## Learning Objectives

- Define work as energy transferred by a force acting through a displacement, and apply both W = F d cos(theta) and the integral form for a varying force.
- Explain why a perpendicular force, a normal force on a level surface, and a force holding an object still all do zero mechanical work.
- Apply the work-energy theorem and conservation of mechanical energy, and extend the energy balance to include dissipation by friction.
- Distinguish conservative from non-conservative forces using path independence as the test, and explain why potential energy requires a chosen datum.
- Calculate power in watts using P = F v, and evaluate a stated efficiency by identifying the system boundary it assumes.

## The College Version

### Work is a transfer, and the angle is doing the work

Work is energy moved into or out of a body by a force that acts while the body is displaced. For a force that stays constant over a straight displacement, the amount transferred is W = F d cos(theta), where F is the magnitude of the force, d is the distance moved, and theta is the angle between the force and the displacement. The cos(theta) is not decoration. It selects the component of the force that lies along the motion, and everything counterintuitive about work follows from it.

Three consequences are worth stating flatly, because they are where beginners lose marks. A force perpendicular to the motion does zero work: cos(90 degrees) is zero, so the transfer is zero no matter how large the force. The normal force on a body sliding along a level surface therefore does no work at all, since it points at right angles to the displacement it accompanies. And holding a heavy object still does no work in the mechanical sense, however tiring it is, because the displacement is zero and there is nothing for the force to act through. Your muscles are consuming chemical energy the whole time, and that is a real physiological cost, but it is not work done on the object. Nothing is being transferred to the box you are gripping.

Sign matters too. A force generally along the displacement transfers energy in, and the work is positive. A force generally opposing the displacement transfers energy out, and the work is negative; friction on a sliding body is the standard case. When the force varies along the path, or the path is curved, the constant-force formula stops applying and you integrate the infinitesimal transfers instead: W = integral of F . dr along the path from A to B. That integral is the general definition; W = F d cos(theta) is the special case where the integrand is constant.

### Kinetic energy and the work-energy theorem

Kinetic energy is the energy a body has by virtue of moving: K = (1/2) m v squared. It is a scalar, it is never negative because both the mass and the square of the speed are non-negative, and it depends on the reference frame you measure the speed in, since velocity itself is relative.

The work-energy theorem connects the two ideas: the net work done on a particle equals the change in its kinetic energy, W_net = K_final - K_initial. It is not an independent law. It falls out of Newton's second law once you dot both sides with the displacement and integrate, which is why it never tells you anything Newton's second law could not, and why it is often far quicker to use.

The word doing the work in that sentence is net. You must include every force acting on the body, not the ones you find interesting. Leave out friction, or the component of weight along a slope, and the theorem returns a confidently wrong answer. Notice also what the theorem does not contain: time. It relates speeds to distances, so when a problem asks how fast and not when, the energy route usually skips a whole integration. When the problem does ask when, you need the kinematics, which belongs to the dynamics topic.

### Potential energy, and the datum you are free to choose

For some forces you can stop tracking work along the path and instead assign a stored energy to the configuration of the system. The potential energy difference between two points is defined as the negative of the work that force does between them: U_B - U_A = -W_(A to B). Near Earth's surface the gravitational case gives U = m g y plus a constant; for a spring obeying Hooke's law it gives U = (1/2) k x squared plus a constant, where x is the stretch or compression measured from the unstretched length, not the length of the spring.

Those additive constants are the point, not a technicality. Only differences in potential energy are physically meaningful. The zero level, the datum, is something you choose for convenience: floor level, the tabletop, the unstretched spring, the lowest point of the swing. Choose it, write it down, and use the same one on both sides of your equation. A student who asks what the potential energy of a book on a desk is has asked an incomplete question; the answer is a number only once a datum is named. Two students who pick different datums will get different values of U at every point and identical values of every difference, which is the only thing either of them can measure.

One more precision. Potential energy is a property of the interaction between objects in a chosen system, not a possession of a single object. The book does not hold gravitational potential energy on its own; the book-and-Earth system does. Saying it the loose way is harmless until you start drawing system boundaries, at which point it stops being harmless.

### Conservative versus non-conservative forces: path independence is the test

You can only build a potential energy function for a force whose work does not depend on the route taken. That is the definition of a conservative force: the work it does between two points is the same along every path connecting them, which is equivalent to saying the work it does around any closed path is zero. Gravity qualifies. An ideal spring qualifies. For these, the work depends only on the endpoints, so a single stored-energy function indexed by position captures everything.

Friction does not qualify, and the reason is easy to see. Kinetic friction always opposes the motion, so it always does negative work, and the amount is proportional to the distance actually travelled. Take a longer route between the same two points and you pay more. Loop back to where you started and the work around that closed path is not zero but negative, which is exactly the closed-path test failing. Air drag behaves the same way. Forces like these are called non-conservative or dissipative, and they have no potential energy function; there is always a conservative force behind every potential energy, and never a dissipative one.

Path independence is the defining test, not a property you check afterwards. If someone hands you an unfamiliar force and asks whether it is conservative, the question to ask is not whether it looks like gravity but whether its work around a closed loop vanishes.

### Conservation of mechanical energy, and where friction's share went

Mechanical energy is the sum E = K + U. When no non-conservative force does work on a system, that sum does not change: K + U stays constant, and a problem reduces to setting the total at one instant equal to the total at another. This is why a block released on a frictionless track reaches the bottom at a speed fixed by the drop height alone, whatever shape the track takes in between.

When non-conservative forces do act, the statement generalises rather than failing: the change in mechanical energy equals the work done by the non-conservative forces, W_nc = delta(K + U). For sliding friction that work is negative and equal in magnitude to the friction force times the path length, so mechanical energy falls by exactly that amount.

Say dissipated, not lost. The energy that leaves the mechanical account has gone into the thermal energy of the rubbing surfaces and the surrounding air; it is somewhere, it raised a temperature, and in principle you can measure it. Calling it lost invites students to believe energy conservation has exceptions. Once you widen the system boundary to include the thermal store, the books balance again. Doing that widening properly, with heat and internal energy as named terms, is the business of the first law of thermodynamics topic, and this lesson deliberately stops at the edge of it. Impulse and the momentum route to collision problems belong to the momentum topic for the same reason: energy and momentum are different accounts, and a collision that conserves one may not conserve the other.

### Power, efficiency, and why torque is not measured in joules

Power is the rate at which energy is transferred: average power is the work divided by the interval it took, and instantaneous power is P = dW/dt. Differentiating the definition of work gives the form engineers reach for most often, P = F . v, force dotted with velocity. A motor pulling at 1.60 kN on a load moving at 5.6 m/s is delivering about 9.0 kW at that instant, and the same motor delivered less earlier in the pull when the load was slower.

Efficiency is useful output divided by total input, expressed as a fraction or a percentage. For any real machine it is below one, because some of the input is dissipated; an efficiency above 100 percent would violate conservation of energy, so a claim of one is a claim that something has been miscounted or left out. Be honest about the qualifier, though. A quoted efficiency depends entirely on the boundary drawn around the system and on what the quoter decided counts as useful. The EPA's guidance on combined heat and power makes the point in the open: the same plant yields different efficiency figures under total system efficiency, which counts electric and thermal output alike, and under effective electric efficiency, which credits the thermal output against the fuel a separate boiler would have burned. Neither number is dishonest and neither is comparable to the other. When you read an efficiency, read the boundary first.

The units deserve a sentence of their own. The joule is the SI coherent derived unit of energy and work, equal to one newton-metre and to one kilogram metre squared per second squared. The watt is one joule per second. Now the convention students routinely misread: torque, or moment of force, has exactly the same dimensions as energy, and yet by SI convention it is expressed in newton-metres and the joule is never used for it. The units are dimensionally identical; the quantities are not the same kind of thing, and keeping the names distinct is how the SI signals that. Write N.m for a torque and J for an energy, every time.

A closing note on scope. This lesson is educational material, not engineering design guidance. Nothing here, including the assumed friction coefficient in the worked example, should be used to size a hoist, a cable, a motor, a brake, or any other real component. Real design is performed by a licensed engineer working to the governing code or standard, with verified material properties and margins chosen for the consequences of failure.

## Key Vocabulary

- **work** — Energy transferred to or from a body by a force acting while the body is displaced; for a constant force, the component along the displacement multiplied by the distance moved.
- **joule** — The SI coherent derived unit of energy, equal to one newton-metre and to one kilogram metre squared per second squared, symbol J.
- **kinetic energy** — The energy a body carries because it is moving, equal to one-half its mass times the square of its speed; a scalar that can never be negative.
- **work-energy theorem** — The result, derived from Newton's second law, that the net work done on a particle by all the forces acting on it equals the change in its kinetic energy.
- **potential energy** — Stored energy assigned to the configuration of a system whose parts interact through a conservative force, defined only as a difference from a chosen reference.
- **datum** — The reference configuration at which stored energy is declared to be zero, chosen freely for convenience because only differences are physically meaningful.
- **conservative force** — A force whose work between two points is the same along every connecting path, and therefore zero around any closed path; gravity and an ideal spring qualify.
- **non-conservative force** — A force whose work depends on the route taken, so no stored-energy function exists for it; kinetic friction and air drag are the standard examples.
- **power** — The rate at which energy is transferred or work is done, measured in watts, one watt being one joule per second.
- **efficiency** — The ratio of useful output to total input for a device or process, always below one for a real machine and always dependent on the system boundary chosen.

## Eli-10

Energy is a quantity you can count, and work is how it moves from one place to another. A force only moves energy if the thing it pushes on actually goes somewhere, and only the part of the push that points along the motion counts. Push sideways and you transfer nothing. Hold a box in the air until your arms shake and you transfer nothing to the box, because the box never moved. Once energy is in a moving object we call it kinetic energy. Once it is stored in a raised weight or a squeezed spring we call it potential energy, and that stored amount is always measured from some starting line you picked yourself.

## Eli's Analogy

Think of a bank account. Work is a transfer: money moving in or out, not money itself. Kinetic energy is the cash in your hand right now. Potential energy is a balance in a savings account, and like any balance it is only meaningful relative to the figure you started counting from. Friction is a transaction fee. The fee leaves your account, but it does not vanish from the world; it lands in someone else's, which is exactly what happens when rubbing surfaces warm up. Efficiency is the fraction of what you sent that arrived where you wanted it.

**Where the analogy breaks down.** The analogy breaks in three places. Money can be created and destroyed by a central bank, so its conservation is a policy; energy conservation is a law with no such escape hatch. A savings balance belongs to one account holder, but potential energy belongs to an interaction between objects, not to a single object holding it. And a transaction fee is usually a fixed percentage, whereas the energy friction removes grows with the length of the path you take, which is precisely why friction gets no stored-energy account of its own.

## Worked Example

A loaded cart of mass 320 kg is pulled 12.0 m up a ramp inclined at 15.0 degrees by a cable that applies a constant 1.60 kN parallel to the incline. It starts from rest. Take g = 9.81 m/s squared and assume a kinetic friction coefficient of 0.12 (problem data, not a value taken from any source). How fast is it moving at the top?

Energy method. The cable does W = F d = (1600 N)(12.0 m) = 19 200 J = 19.2 kJ. The rise is h = (12.0 m) sin(15.0 deg) = 3.11 m, so gravity does W = -m g h = -(320 kg)(9.81 m/s^2)(3.11 m) = -9.75 kJ. The normal force is N = m g cos(15.0 deg) = 3.03 kN and does exactly zero work, because it is perpendicular to the displacement. Kinetic friction is f_k = (0.12)(3032 N) = 364 N and does W = -f_k d = -4.37 kJ. Net work is 19.2 - 9.75 - 4.37 = 5.08 kJ. The work-energy theorem gives (1/2) m v^2 = 5083.77 J, so v = sqrt(2 x 5083.77 J / 320 kg) = 5.6 m/s, reported to the two significant figures the assumed friction coefficient justifies.

Force-acceleration check. The net force along the incline is 1600 N - (320)(9.81) sin(15.0 deg) - (0.12)(320)(9.81) cos(15.0 deg) = 423.65 N, so a = 423.65 N / 320 kg = 1.32 m/s^2. From rest over 12.0 m, v = sqrt(2 a d) = sqrt(2 x 1.32390 x 12.0) = 5.6368 m/s. The two routes agree to every digit carried, as they must, since the work-energy theorem is Newton's second law integrated along the path. The pull takes t = v/a = 4.26 s, so the cable delivered an average 19 200 J / 4.2577 s = 4.5 kW and, at the instant it reached the top, an instantaneous P = F v = (1600 N)(5.6368 m/s) = 9.0 kW. Extra digits are carried through the intermediate steps and dropped only at the end, since the assumed friction coefficient justifies two.

Accounting, not loss. Of the 19.2 kJ put in, 9.75 kJ became gravitational potential energy, 5.08 kJ became kinetic energy, and 4.37 kJ was dissipated as thermal energy in the ramp and the wheels. The three add back to 19.2 kJ exactly. If you define useful output as the height gained, the efficiency of this pull is 9.75 kJ / 19.2 kJ = 0.51, about 51 percent. If you also count the kinetic energy the cart is carrying at the top as useful, the same pull is 77 percent efficient. Same machine, same 12 metres, two honest numbers, because efficiency is a statement about the boundary you drew.

## Common Mistakes

**Mistake.** Assuming that if a force is hard to exert it must be doing work — holding a heavy crate still is exhausting, so surely that counts.

**Correction.** Work requires displacement. With d = 0 the transfer is zero no matter how large the force or how long you hold it. Your muscles burn chemical energy maintaining tension, which is a real physiological cost, but no energy is transferred to the crate.

**Mistake.** Adding up every force in the free-body diagram as though each one contributes work.

**Correction.** Only the component along the displacement transfers energy. A force perpendicular to the motion does zero work because cos(90 degrees) = 0, which is why the normal force on a body sliding along a level surface never appears in the energy balance.

**Mistake.** Treating potential energy as an absolute property of an object, and asking what the potential energy of a book on a desk is without saying more.

**Correction.** Only differences in potential energy are measurable. U carries an arbitrary additive constant fixed by the datum you choose, so the question has an answer only once you name a reference level. Pick one, state it, and use the same one throughout the problem.

**Mistake.** Saying that friction destroys energy, or that mechanical energy is lost.

**Correction.** Energy leaves the mechanical account and enters the thermal store of the surfaces and surroundings. Account for it as dissipated, equal in magnitude to the friction force times the path length. Widen the system boundary and the books balance again.

**Mistake.** Writing a torque in joules because newton times metre gives a joule.

**Correction.** Torque and energy share dimensions but are different kinds of quantity. By SI convention torque is expressed in newton-metres and the joule is never used for it. Write N.m for a moment and J for an energy.

## Compare / Contrast

| | | |
|---|---|---|
| **Work** | **Energy** | Energy is a quantity a system possesses; work is the amount of it transferred by a force acting through a displacement. Work is what happens between two states, not something a body stores. |
| **Conservative force** | **Non-conservative force** | The work of a conservative force depends only on the endpoints, so it can be replaced by a potential energy function. The work of a non-conservative force depends on the path length, so no such function exists for it. |
| **Work-energy theorem** | **Conservation of mechanical energy** | The theorem is universal: net work by all forces equals the change in kinetic energy. Conservation of K + U is the special case in which the non-conservative forces do no work, and it fails the moment friction acts. |
| **Energy (joule)** | **Power (watt)** | A joule is an amount transferred; a watt is a rate of transfer, one joule per second. A device rated in kilowatts tells you how fast it can move energy, not how much it will move. |
| **Joule** | **Newton-metre** | Numerically and dimensionally identical, but reserved by SI convention for different quantities: the joule for energy, work and heat, the newton-metre for torque or moment of force. |

## Key Takeaway

Work is energy in transit, and only the component of force along the displacement moves any. Track it with kinetic energy, replace it with potential energy wherever the force is conservative, account for the rest as dissipation rather than loss, and read every efficiency figure alongside the boundary it was measured across.

## Practice Question Bank

**Q1 (recall — Recalling the SI convention distinguishing the joule from the newton-metre).** Torque and energy have identical dimensions in SI base units. Which unit does the SI convention reserve for expressing a torque?

A. The joule, since one newton times one metre is one joule
B. The newton-metre, because the joule is never used for torque
C. The watt, since torque describes a rate of rotation
D. Either unit, because dimensionally identical quantities are interchangeable

*Answer: B.* NIST SP 330 states that even though torque has the same dimension as energy, the joule is never used to express torque; the newton-metre is used instead. The units are dimensionally identical but the quantities are not the same kind, and the distinct names are how the SI signals that. The watt is a rate of energy transfer, not a moment.

Sources: `nist-sp330-2019-section-2-si-units`, `nist-sp811-chapter-4-classes-of-si-units`

**Q2 (understanding — Recognising that potential energy is defined only relative to a chosen datum).** A student is asked for the gravitational potential energy of a 1.8 kg textbook resting on a desk 0.75 m above the floor of a third-storey room. What is the correct response?

A. 13 J, because gravitational potential energy is always measured from the floor of the room
B. No single value is determined until a reference level is named, because only differences in potential energy are physically meaningful
C. Zero, because the book is at rest and not moving
D. It cannot be computed without knowing the height of the building above sea level

*Answer: B.* Potential energy carries an arbitrary additive constant fixed by the datum chosen, so U has a numerical value only once a reference level is declared. Taking the desktop as the datum gives 0 J; taking the room floor gives m g h = (1.8)(9.81)(0.75) = 13.2 J; taking the ground outside gives something larger. All three are equally valid and all three agree on every difference. Being at rest sets kinetic energy to zero, not potential energy, and no absolute sea-level reference is required.

Sources: `openstax-university-physics-1-potential-energy-of-a-system`, `libretexts-mechanics-map-2e-work-kinetic-and-potential-energy`

**Q3 (application — Applying the work-energy theorem to find a final speed from a negative work input).** A 2.0 kg puck slides across ice at 6.0 m/s. A constant 3.0 N braking force acts directly opposite its motion over the next 4.0 m. What is its speed at the end of that 4.0 m?

A. 3.5 m/s
B. 4.0 m/s
C. 4.9 m/s
D. 6.9 m/s

*Answer: C.* Initial kinetic energy is (1/2)(2.0)(6.0)^2 = 36 J. The braking force does W = -(3.0 N)(4.0 m) = -12 J, so the final kinetic energy is 24 J and v = sqrt(2 x 24 / 2.0) = 4.899, or 4.9 m/s. The 3.5 m/s option drops the factor of two in the kinetic energy formula, 6.9 m/s comes from adding the work instead of subtracting it, and 4.0 m/s comes from scaling the speed by the energy ratio rather than its square root.

Sources: `openstax-university-physics-1-work-energy-theorem`, `openstax-university-physics-1-kinetic-energy`, `openstax-university-physics-1-work`

**Q4 (analysis — Using path independence as the test for whether a force is conservative).** A crate is moved from the floor to a shelf 1.5 m higher, once by lifting it straight up and once by pushing it up a long ramp. Which quantity is necessarily identical for the two routes?

A. The work done on the crate by the person moving it
B. The work done on the crate by gravity
C. The work done on the crate by friction
D. The average power delivered during the move

*Answer: B.* Gravity is conservative, so the work it does between two points depends only on those points: -m g (1.5 m) either way. The person's work is not fixed, because the ramp route pays for friction over a longer path. Friction's work is explicitly path-dependent and is the reason friction has no potential energy function. Average power depends on how long each route took, which the question does not fix.

Sources: `openstax-university-physics-1-conservative-and-non-conservative-forces`, `openstax-university-physics-1-potential-energy-of-a-system`

**Q5 (application — Computing power from the P = F v form and carrying units correctly).** A hoist raises a 150 kg load vertically at a steady 0.80 m/s. Taking g = 9.81 m/s squared, what mechanical power is being delivered to the load against gravity?

A. 1.2 kW
B. 48 W
C. 120 W
D. 1.5 kW

*Answer: A.* At constant speed the upward force on the load equals its weight, m g = (150)(9.81) = 1471.5 N, and P = F v = (1471.5)(0.80) = 1177.2 W, about 1.2 kW. The 120 W option omits g, the 1.5 kW option reports the weight in newtons as though it were a power and omits the speed, and 48 W is the load's kinetic energy (1/2)mv^2 mistakenly quoted as a rate.

Sources: `openstax-university-physics-1-power`, `libretexts-mechanics-map-2e-power-and-efficiency`, `openstax-university-physics-1-mass-and-weight`

## Sources

- `openstax-university-physics-1-work` — University Physics Volume 1, 7.1 Work, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-1/pages/7-1-work> (REFERENCE_ONLY)
- `openstax-university-physics-1-kinetic-energy` — University Physics Volume 1, 7.2 Kinetic Energy, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-1/pages/7-2-kinetic-energy> (REFERENCE_ONLY)
- `openstax-university-physics-1-work-energy-theorem` — University Physics Volume 1, 7.3 Work-Energy Theorem, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-1/pages/7-3-work-energy-theorem> (REFERENCE_ONLY)
- `openstax-university-physics-1-power` — University Physics Volume 1, 7.4 Power, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-1/pages/7-4-power> (REFERENCE_ONLY)
- `openstax-university-physics-1-potential-energy-of-a-system` — University Physics Volume 1, 8.1 Potential Energy of a System, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-1/pages/8-1-potential-energy-of-a-system> (REFERENCE_ONLY)
- `openstax-university-physics-1-conservative-and-non-conservative-forces` — University Physics Volume 1, 8.2 Conservative and Non-Conservative Forces, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-1/pages/8-2-conservative-and-non-conservative-forces> (REFERENCE_ONLY)
- `openstax-university-physics-1-conservation-of-energy` — University Physics Volume 1, 8.3 Conservation of Energy, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-1/pages/8-3-conservation-of-energy> (REFERENCE_ONLY)
- `openstax-university-physics-1-mass-and-weight` — University Physics Volume 1, 5.4 Mass and Weight, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-1/pages/5-4-mass-and-weight> (REFERENCE_ONLY)
- `openstax-university-physics-1-friction` — University Physics Volume 1, 6.2 Friction, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-1/pages/6-2-friction> (REFERENCE_ONLY)
- `libretexts-mechanics-map-2e-work-kinetic-and-potential-energy` — Mechanics Map, 10.2: Work, Kinetic Energy and Potential Energy for Particles, Jacob Moore and Contributors, Pennsylvania State University Mont Alto, hosted on Engineering LibreTexts. <https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/10:_Work_and_Energy_in_Particles/10.02:_Work_Kinetic_Energy_and_Potential_Energy_for_Particles> (REFERENCE_ONLY; CC BY-SA 4.0)
- `libretexts-mechanics-map-2e-power-and-efficiency` — Mechanics Map, 10.10: Power and Efficiency for Particles, Jacob Moore and Contributors, Pennsylvania State University Mont Alto, hosted on Engineering LibreTexts. <https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/10:_Work_and_Energy_in_Particles/10.10:_Power_and_Efficiency_for_Particles> (REFERENCE_ONLY; CC BY-SA 4.0)
- `nist-sp330-2019-section-2-si-units` — The International System of Units (SI), 2019 Edition (NIST SP 330), Section 2: The International System of Units, National Institute of Standards and Technology. <https://www.nist.gov/pml/special-publication-330/sp-330-section-2> (REFERENCE_ONLY)
- `nist-sp811-chapter-4-classes-of-si-units` — NIST Guide to the SI, Chapter 4: The Two Classes of SI Units and the SI Prefixes, National Institute of Standards and Technology (NIST Special Publication 811, 2008 edition). <https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes> (REFERENCE_ONLY)
- `epa-chp-methods-for-calculating-efficiency` — Methods for Calculating CHP Efficiency, United States Environmental Protection Agency, Combined Heat and Power Partnership. <https://www.epa.gov/chp/methods-calculating-chp-efficiency> (REFERENCE_ONLY)
- `doe-femp-what-is-energy-efficiency` — Take Five: What Is Energy Efficiency?, United States Department of Energy, Federal Energy Management Program. <https://www.energy.gov/cmei/femp/articles/take-five-what-energy-efficiency> (REFERENCE_ONLY)

## Related Topics

- `engineering-fundamentals:mechanics:force-and-motion`
- `engineering-fundamentals:mechanics:free-body-diagrams`
- `engineering-fundamentals:mechanics:dynamics`
- `engineering-fundamentals:mechanics:momentum`
- `engineering-fundamentals:thermal-and-energy-systems:first-law-of-thermodynamics`
- `engineering-fundamentals:engineering-thinking:units-measurement-and-significant-figures`

## Editorial Metadata

- Topic id: `engineering-fundamentals:mechanics:work-and-energy`
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-19
- Source project: EliExplains original synthesis
- Research status: source-verified
- Rights status: All sources held at REFERENCE_ONLY; no source prose adapted or paraphrased. OpenStax per-book terms were not verified for this subject and the Mechanics Map pages are CC BY-SA, so neither was relied on for reuse. Every arithmetic result was executed with python3 before publication.
- Transformation: Original prose written from facts verified against seven OpenStax University Physics Volume 1 sections, two Mechanics Map (Moore, 2nd edition) engineering-dynamics pages, NIST SP 330-2019 Section 2 and NIST SP 811 Chapter 4 for the SI units and the joule-versus-newton-metre convention, an EPA combined-heat-and-power methods page and a DOE FEMP page for efficiency framing. The generated draft was discarded entirely. The worked example was solved twice, by energy method and by force-acceleration, and both routes plus every number in the questions were executed with python3.
- Verification: every number in the worked example, the prose and the question bank was executed with `python3` before publication. The worked example was solved twice — by the energy method and by force-acceleration — and the two routes agree to every digit carried (5.636801826930118 m/s from both).
- Scope handoffs: kinematics and rotation to `dynamics`; impulse and momentum to `momentum`; heat, internal energy and the thermodynamic energy balance to `first-law-of-thermodynamics`.
- Safety note: this lesson is educational material, not engineering design guidance. Nothing here — including the assumed friction coefficient in the worked example — should be used to size a hoist, cable, motor, brake or any other real component. Real design requires a licensed engineer working to the governing code.
