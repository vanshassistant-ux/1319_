# The First Law of Thermodynamics

## In 30 Seconds

The first law is energy conservation written for a defined system: the change in the system's internal energy equals the heat added minus the work the system does. Everything hangs on the word defined. Draw the boundary, decide whether mass crosses it, then count what enters and what leaves. Internal energy is a property of the state; heat and work are transfers that depend on the path taken.

## Why This Matters

Every thermal machine an engineer touches is sized by an energy balance: engines, compressors, turbines, boilers, heat exchangers, battery packs, data-centre cooling. The first law is the audit that says where the energy went and rules out proposals that quietly create it. It is also the habit that carries: pick a system, draw its boundary, count what crosses. Students who skip that step generate sign errors they cannot debug, because the sign of a term is meaningless until you have said what is inside. Later courses add the second law, which decides which of the energy-conserving processes actually happen.

## Learning Objectives

- Define a thermodynamic system, its boundary, and its surroundings, and classify a given device as closed, open, or isolated.
- Explain why internal energy is a state function while heat and work are path functions, and why we write delta-U but never delta-Q.
- Apply the first law in the form delta-U = Q - W to a closed system, carrying signs and units explicitly.
- Distinguish the two common sign conventions for work and show that both give the same physical result.
- Calculate boundary work for a quasi-static process and interpret it as the area under the path on a p-V diagram.
- Evaluate a claimed device or process against the first law, including why a perpetual motion machine of the first kind cannot work.

## The College Version

### Draw the boundary before you write a single term

Thermodynamics starts the way statics starts: you isolate something. In statics that is a free-body diagram; here it is a system, meaning the matter or the region of space whose behaviour you intend to track. Everything else is the surroundings. Between them sits the boundary, which is imagined rather than physical, and which is where every transfer you are about to count must cross.

How you draw it determines the classification, and the classification determines which terms appear in your equation. A closed system contains a fixed quantity of matter. Energy may cross the boundary as heat or work, but mass may not. A sealed piston-cylinder is the standard case: the boundary is the cylinder wall plus the moving face of the piston, and it deforms as the piston travels. An open system, also called a control volume, is a region of space that mass flows through. A pipe, a compressor, a turbine, a nozzle, a heat exchanger, and the condensing unit outside a house are all analysed this way. Mass crossing the boundary is the defining feature; heat and work may or may not also cross. An isolated system exchanges neither mass nor energy. It is a hypothetical construct, useful for arguments, and no real device achieves it.

This is not bookkeeping pedantry. The same physical energy transfer can count as heat for one choice of boundary and as work for another. If you have not said where the boundary is, the terms in your equation do not yet have meaning, and neither do their signs. Almost every sign error a student cannot debug traces back to a boundary that was never drawn, or that quietly moved partway through the problem.

### State functions, path functions, and why the notation is asymmetric

Take a gas from one equilibrium state to another by two different routes. Measure the heat that flowed in and the work the gas did on the way. Both numbers depend on the route. Run the experiment again with a slower expansion or a different intermediate pressure and you get different numbers again.

The observation that founds thermodynamics is that one particular combination does not vary: the heat in minus the work out is the same for every route between those two states. A quantity whose change depends only on the endpoints is behaving like a property, so we name it. That property is the internal energy, written U, and it is the total energy stored in the matter of the system by virtue of its microscopic motion and interactions.

This is why the notation is asymmetric, and the asymmetry is worth taking seriously. We write delta-U because a system has an internal energy in each state and you can subtract them. We never write delta-Q or delta-W, because a system does not possess a heat and does not possess a work. Heat and work are transfers, things that happen at the boundary during a process, not contents that sit inside waiting to be counted. A system in a given state has no history of how it got there, so asking how much of its energy is heat is a category error. Quantities like U that depend only on the state are called state functions; quantities like Q and W that depend on the route are path functions.

### The equation, and the convention you must declare

For a closed system whose kinetic and potential energy do not change, the first law is

delta-U = Q - W

with Q counted positive when heat enters the system and W counted positive when the system does work on its surroundings. Heat leaving is negative Q; work done on the system, as in a compression, is negative W. That is the convention used in physics and in most mechanical engineering thermodynamics texts, and it is the one this lesson uses throughout.

It is not the only one in print. Chemistry texts, including OpenStax Chemistry, write the first law as delta-U = Q + W and define W as the work done on the system. Both are correct. The second convention flips the sign of the symbol W as well as the operator in front of it, so the two cancel and the physical answer is identical. What is not correct is mixing them, or reading a value out of one book into an equation from another. Before you compute anything, write down which convention you are using and what a positive W means in it. If you inherit a problem statement, find out what its author meant.

The units are unambiguous even when the signs are not. The joule is the SI coherent derived unit of energy, work, and amount of heat alike, so U, Q, and W all carry joules and there is no conversion hiding between the terms. Carry the unit through every line.

### Boundary work and the p-V diagram

The work mode that dominates introductory thermodynamics is boundary work: the work done as a system's boundary moves, typically a gas pushing a piston. Suppose the gas is at pressure p and the piston has area A, so the gas pushes with force pA. Let the piston move an infinitesimal distance dx, so the volume increases by dV = A dx. The infinitesimal work is dW = pA dx = p dV, and over a finite change

W = the integral of p dV from V1 to V2.

This expression requires the pressure to be defined throughout the process, which means the system must be in equilibrium at every instant. That is the quasi-static idealization: the change is imagined to happen infinitesimally slowly, so the system is always at equilibrium with itself and with its surroundings. Because no finite change can truly satisfy this, every real process is non-quasi-static to some degree, and for a genuinely fast process you cannot draw a path at all, only the endpoints.

When the path can be drawn, the integral has a picture. On a p-V diagram, with volume on the horizontal axis and pressure on the vertical, W is the area under the process curve. Expansion moves rightward and sweeps positive area; compression moves leftward and gives negative work. Two paths joining the same two states enclose different areas, so they involve different work, which is the path dependence of W made visible. A closed loop encloses a net area, and that area is the net work per cycle.

Boundary work is not the only work mode. Shaft work, electrical work, and spring work all cross boundaries too, and a stirrer driven by a falling weight does work on a fluid in a rigid tank whose volume never changes. Do not assume a rigid boundary means zero total work; it means zero boundary work.

### Enthalpy, and the first law for flowing streams

Define a new property by combining ones you already have:

H = U + pV

Enthalpy is a state function because U, p, and V all are. Two things make it worth defining. First, consider a constant-pressure process in a closed system. There W = p(V2 - V1), so substituting into the first law and regrouping gives (U2 + pV2) - (U1 + pV1) = Q, that is, H2 - H1 = Q. At constant pressure the enthalpy change is simply the heat transferred. Second, and this is the reason engineers meet it everywhere, a fluid entering a control volume carries not only its internal energy but also the work required to push it across the inlet against the pressure there. That pushing term is exactly pV per unit mass, so enthalpy is the natural per-unit-mass accounting quantity for anything that flows.

For a control volume operating at steady state, nothing inside changes with time. Mass in equals mass out, and the energy balance at introductory depth reads

Qdot + sum over inlets of mdot(h + V^2/2 + gz) = Wdot + sum over exits of mdot(h + V^2/2 + gz)

where mdot is a mass flow rate, h is specific enthalpy, V is flow speed, and z is elevation. Each stream carries its enthalpy, its kinetic energy, and its potential energy across the boundary; Qdot and Wdot are the heat and shaft-work rates. In most textbook devices the kinetic and potential terms are small enough to drop, leaving a compact statement: for an adiabatic turbine, the shaft power out equals the mass flow times the drop in specific enthalpy. Nozzles, diffusers, throttles, pumps, and heat exchangers are all handled by deleting the terms that do not apply.

### What the law reduces to for the standard processes

Most introductory problems are one of five idealized processes, and the value of the first law is that each one deletes a term.

Isochoric, constant volume: the boundary does not move, so boundary work is zero and delta-U = Q. Heat a gas in a rigid sealed tank and all of it goes into internal energy.

Isobaric, constant pressure: W = p(V2 - V1), a rectangle on the p-V diagram, and Q = delta-H. This is the case where enthalpy pays for itself.

Isothermal, constant temperature: for an ideal gas the internal energy depends only on temperature, so delta-U = 0 and Q = W. Every joule of heat that enters leaves again as work. On a p-V diagram the path is a hyperbola, since p is proportional to 1/V at fixed temperature.

Adiabatic: no heat crosses the boundary, so Q = 0 and delta-U = -W. A gas that expands adiabatically does work at the expense of its own internal energy and cools; compressed adiabatically it heats. This is part of why a bicycle pump warms as you work it.

Cyclic: the system returns to its initial state, so delta-U = 0 by definition of a state function, and therefore Q = W over the cycle. Net heat in equals net work out.

### Perpetual motion, and what the first law refuses to tell you

The cyclic result is the death of one family of inventions. A perpetual motion machine of the first kind is a device that returns to its initial state each cycle and delivers net work while taking in no energy. But a cycle forces delta-U = 0, hence Q = W; with Q = 0 the net work must be zero as well. No arrangement of gears, magnets, or fluid loops evades this, because the argument never inspects the mechanism, only the boundary. The conclusion is treated as settled well beyond physics: the U.S. Patent and Trademark Office's examining manual notes that, apart from cases involving perpetual motion, a working model is not ordinarily required to show that a device operates.

Now the limit. The first law is a constraint, not a prediction. It says a process must conserve energy; it does not say the process will happen. Heat flowing spontaneously from a cold block into a hot one conserves energy perfectly. So does a shattered mug reassembling while the countertop cools slightly. Neither is observed. The first law permits many states that nature never produces, and identifying which direction a process actually runs requires the second law and the property of entropy. That is a separate lesson; this one does not cover it. If a problem asks which way something goes, or how efficient it can possibly be, the first law alone cannot answer.

Finally, name your idealizations. Ideal gas, quasi-static, adiabatic, negligible kinetic and potential energy, steady state: each is a modelling choice with a domain of validity, and results inherit the limits of the weakest assumption. This lesson is educational material, not engineering design guidance. Real thermal equipment, pressure vessels, and energy systems must be designed by a licensed engineer working to the governing code.

## Key Vocabulary

- **Thermodynamic system** — The specific matter or region of space chosen for analysis, separated from the surroundings by an imagined boundary across which any heat, work, or mass transfer must pass.
- **Closed system** — A system containing a fixed quantity of matter: energy may cross its boundary as heat or work, but no mass enters or leaves. A sealed piston-cylinder is the standard example.
- **Control volume** — A region of space selected for analysis that mass flows through, also called an open system. Turbines, pumps, nozzles, and heat exchangers are modelled this way.
- **Isolated system** — A system across whose boundary neither mass nor energy passes. It is an idealization used in arguments; no real device is absolutely isolated.
- **Internal energy (U)** — The energy stored in the matter of a system by the motion and interaction of its molecules, measured in joules, and determined entirely by the system's current state.
- **State function** — A quantity whose change between two states depends only on those two states and not on the route between them. Internal energy, enthalpy, pressure, and temperature are state functions.
- **Path function** — A quantity whose magnitude depends on the specific process route as well as the endpoints. Heat and work are path functions, which is why a system cannot be said to contain either one.
- **Boundary work** — Work done as a system's boundary moves, such as a gas pushing a piston. For a quasi-static process it equals the integral of p dV, the area under the path on a p-V diagram.
- **Quasi-static process** — An idealized process carried out so slowly that the system stays in equilibrium at every instant, which is what allows pressure to be defined throughout and a path to be drawn on a state diagram.
- **Enthalpy (H)** — The state function H = U + pV. It bundles internal energy with the pressure-volume work needed to move a fluid across a boundary, making it the convenient property for constant-pressure and flow processes.

## Eli-10

Pick something and draw a line around it. That line is the only place anything can get in or out. The stuff inside has a certain amount of energy stored in it, and there are exactly two ways that number can change: energy can trickle across the line because one side is hotter than the other, or the stuff inside can push the line outward and shove on the world, which costs it energy. Add up what came in, subtract what got pushed out, and you have the change. Nothing else is allowed. So if someone shows you a sealed machine that runs forever with nothing going in, you do not need to look at the gears to know it will not work. You only need to look at the line.

## Eli's Analogy

It works like a bank account with only two kinds of transaction. Deposits are heat flowing in. Withdrawals are work the system does on the outside. The balance is the internal energy. Two people can reach the same closing balance through wildly different histories of deposits and withdrawals, and once you are looking at the balance, you cannot tell which history produced it. The balance is real and belongs to the account; the transactions were events, and they are over.

**Where the analogy breaks down.** The analogy fails in three ways worth naming. Bank balances have a meaningful zero and a true total, while internal energy is only ever measured as a change from some reference state. Money can be moved between accounts freely in either direction, but the first law does not restrict direction at all and the second law, which does, has no counterpart here. And a bank statement lets you reconstruct every past transaction, whereas a thermodynamic state carries no record of the heat and work that produced it.

## Worked Example

A closed piston-cylinder holds 1.20 mol of helium, modelled as a monatomic ideal gas. Assumptions stated up front: ideal-gas behaviour, quasi-static processes, and negligible change in kinetic and potential energy. Sign convention: delta-U = Q - W, with Q positive into the system and W positive for work done by the system. The system is the helium; the boundary is the cylinder wall plus the piston face; everything else is surroundings.

State 1: p1 = 150 kPa, V1 = 0.0200 m^3, T1 = 300 K.

Leg A, quasi-static isobaric expansion to V2 = 0.0350 m^3 at constant 150 kPa. Since T is proportional to V at fixed p, T2 = 300 K x (0.0350/0.0200) = 525 K. Boundary work is the rectangle under the path: W_A = p(V2 - V1) = 150,000 Pa x 0.0150 m^3 = +2,250 J = +2.25 kJ, positive because the gas expanded and pushed on the surroundings. For a monatomic ideal gas U = (3/2)nRT. Rather than rounding n first, take nR straight from state 1: nR = p1V1/T1 = 150,000 x 0.0200 / 300 = 10.0 J/K exactly, so (3/2)nR = 15.0 J/K and n = 10.0/8.3145 = 1.20 mol. Then delta-U_A = 15.0 J/K x (525 - 300) K = +3,375 J = +3.375 kJ. The first law then gives the heat: Q_A = delta-U_A + W_A = 3,375 + 2,250 = +5,625 J = +5.625 kJ, heat into the gas. Cross-check with enthalpy: at constant pressure Q should equal delta-H = delta-U + p delta-V = 3,375 + 2,250 = 5,625 J, and independently (5/2)nR x 225 K = 5,625 J. Both agree.

Leg B, isochoric cooling at V = 0.0350 m^3 that removes 1.20 kJ. The boundary does not move, so W_B = 0 and delta-U_B = Q_B = -1,200 J. The temperature falls by 1,200/15.0 = 80.0 K, to T3 = 445 K.

Whole path: Q = 5,625 - 1,200 = +4,425 J, W = 2,250 + 0 = +2,250 J, delta-U = Q - W = +2,175 J. Check it against the state function directly: 15.0 J/K x (445 - 300) K = +2,175 J. The path-dependent quantities needed both legs; the state function needed only the endpoints.

Convention check: in the chemistry form delta-U = Q + W_on, the work done on the gas is W_on = -2,250 J, giving delta-U = 4,425 - 2,250 = +2,175 J. Same answer, as it must be.

Limits of the model: helium is close to ideal at these conditions, but a real gas near condensation is not, and U would then depend on volume as well as temperature. The (3/2)nR result is specific to a monatomic gas; a diatomic gas stores energy in rotation too. And no real expansion is quasi-static, so the true work differs from the rectangle by an amount this analysis cannot quantify.

## Common Mistakes

- **Using delta-U = Q - W and delta-U = Q + W interchangeably, or reading a work value out of a chemistry text into a physics-convention equation.**
  The two conventions differ in what the symbol W means: work done by the system in the first, work done on the system in the second. Both are legitimate and both give the same physical answer, because the flipped operator cancels the flipped sign. Write down your convention before the first line of algebra, and translate any inherited value into it explicitly. This lesson uses delta-U = Q - W, Q in positive, W out positive.
- **Writing delta-Q, or asking how much heat a system contains.**
  A system contains internal energy, not heat and not work. Heat and work are transfers occurring at the boundary during a process, so they have values for a process, not for a state. That is why delta-U is meaningful and delta-Q is not, and it is why heat and work are path functions while U is a state function.
- **Starting the algebra before defining the system, or shifting the boundary partway through a problem.**
  Draw the boundary first and keep it fixed. The classification that follows from it decides whether a mass-flow term appears at all, and the same physical transfer can count as heat for one boundary and work for another. Sign errors that resist debugging are usually boundary errors in disguise.
- **Applying W = p delta-V to any expansion, including rapid ones and ones where pressure changes.**
  W = p delta-V is the constant-pressure special case of W = the integral of p dV, and the integral itself assumes a quasi-static process in which pressure is defined at every instant. For an isothermal or general path, the work is the area under that particular curve, not a rectangle. For a fast, non-quasi-static process no path exists on the p-V diagram at all, and you can only compare endpoints.
- **Concluding that a process is possible because it satisfies the first law, or that the first law forbids heat flowing from cold to hot.**
  The first law is a constraint on the accounting, not a prediction of direction. Heat moving spontaneously from a cold body to a hot one conserves energy exactly, and the first law raises no objection; the second law and entropy are what rule it out. Questions about direction, spontaneity, and maximum achievable efficiency need the second law, which this lesson does not cover.

## Compare / Contrast

- **Internal energy U vs. Heat Q and work W** — U is a state function: its change depends only on the initial and final states, which is why a system can be said to have an internal energy. Q and W are path functions describing transfers across the boundary during a process, so a system never has a heat or a work. Their difference Q - W is path-independent, and that fact is what defines U.
- **Closed system vs. Control volume (open system)** — A closed system holds a fixed mass, so only heat and work cross the boundary and the balance is delta-U = Q - W. A control volume is a region that mass flows through, so each stream carries energy across the boundary and the balance is written per unit time with specific enthalpy in place of specific internal energy.
- **Internal energy U vs. Enthalpy H = U + pV** — Both are state functions in joules, but they answer different questions. U is what the first law tracks for a fixed mass. H additionally accounts for the pV work of pushing fluid across a boundary, so it is the convenient property at constant pressure, where delta-H = Q, and for anything flowing.
- **Isochoric process vs. Adiabatic process** — Both delete one term, but different ones. Isochoric means the volume is fixed, so boundary work vanishes and delta-U = Q. Adiabatic means no heat crosses the boundary, so Q = 0 and delta-U = -W. A rigid insulated tank is both, and then only non-boundary work such as a stirrer can change U.
- **First law vs. Second law** — The first law says energy is conserved for whatever system you defined, and so rules out perpetual motion of the first kind. It is silent on direction: it permits heat flowing from cold to hot. The second law supplies direction and the ceiling on conversion efficiency. This lesson covers only the first.

## Key Takeaway

Define the system and its boundary first, then apply delta-U = Q - W with a stated sign convention: internal energy is a property of the state, while heat and work are transfers that depend on the path. The first law tells you what is possible on energy grounds and rules out perpetual motion of the first kind, but it says nothing about which direction a process will actually run.

## Practice Question Bank

**Q1 (recall — Distinguishing state functions from path functions).** A closed system is taken from state 1 to state 2 along two different quasi-static paths. Which quantity has the same value for both paths?

A. The heat Q transferred to the system
B. The change in internal energy, delta-U
C. The boundary work W done by the system
D. The area under the process curve on the p-V diagram

*Answer: B.* Internal energy is a state function, so delta-U depends only on the endpoints and is identical for both paths. Q and W each depend on the route taken; the founding observation of the first law is that only their difference, Q - W, is path-independent. The area under the p-V curve is just a graphical restatement of W, so it varies with the path as well.

Sources: `openstax-university-physics-2-first-law-of-thermodynamics`, `libretexts-intro-eng-thermo-yan-first-law-closed-systems`, `nasa-bga-first-law-internal-energy`

**Q2 (understanding — Classifying a device as a closed, open, or isolated system).** An engineer analyses a gas-turbine compressor by drawing a fixed region in space around it, with air entering at one port and leaving at another at higher pressure. How should this system be classified?

A. An isolated system, because the casing is insulated
B. An open system, also called a control volume
C. A closed system, because the same air is always inside the casing
D. A closed system, because shaft work crosses the boundary

*Answer: B.* Mass crosses the boundary, which is the defining feature of an open system, or control volume. The two closed-system options fail on that point alone: a closed system holds a fixed quantity of matter, and work crossing the boundary is irrelevant to the classification since work crosses closed and open boundaries alike. Isolated is wrong twice over, since an isolated system permits neither mass nor energy transfer, and shaft work plainly crosses here.

Sources: `libretexts-intro-eng-thermo-yan-system-and-surroundings`, `libretexts-intro-eng-thermo-yan-mass-energy-control-volume`, `openstax-university-physics-2-thermodynamic-systems`

**Q3 (application — Computing boundary work and applying the first law with correct signs).** Gas in a closed piston-cylinder expands quasi-statically by 0.0100 m^3 while the pressure is held constant at 200 kPa, and 6.00 kJ of heat is added. Using delta-U = Q - W with W positive for work done by the system, what is delta-U?

A. +8.00 kJ
B. +2.00 kJ
C. +4.00 kJ
D. -4.00 kJ

*Answer: C.* At constant pressure the boundary work is the rectangle W = p delta-V = 200,000 Pa x 0.0100 m^3 = 2,000 J = 2.00 kJ, positive because the gas expanded. Then delta-U = Q - W = 6.00 - 2.00 = +4.00 kJ. The +8.00 kJ option comes from adding the work instead of subtracting it, a sign-convention slip; +2.00 kJ reports the work itself rather than the energy change; and -4.00 kJ reverses the subtraction.

Sources: `openstax-university-physics-2-work-heat-and-internal-energy`, `libretexts-intro-eng-thermo-yan-work`, `libretexts-intro-eng-thermo-yan-first-law-closed-systems`

**Q4 (analysis — Translating between the two first-law sign conventions without changing the physics).** A gas is compressed: 500 J of work is done on it, and 200 J of heat leaves it. A chemistry text writes the first law as delta-U = Q + W with W the work done on the system; a physics text writes delta-U = Q - W with W the work done by the system. What does each give for delta-U?

A. +300 J from both, because the two conventions describe the same physics
B. +300 J from the chemistry form and -300 J from the physics form
C. -700 J from both, because the gas loses energy in a compression
D. +700 J from the chemistry form and -700 J from the physics form

*Answer: A.* In the chemistry convention Q = -200 J and W = +500 J, so delta-U = -200 + 500 = +300 J. In the physics convention the work done by the system is -500 J, so delta-U = -200 - (-500) = +300 J. The conventions flip the meaning of the symbol and the operator together, so they cancel and the physical answer is the same. Any option giving different values for the two forms mistakes a bookkeeping choice for a physical difference, and -700 J comes from subtracting the work in the chemistry form.

Sources: `openstax-chemistry-2e-enthalpy`, `openstax-university-physics-2-first-law-of-thermodynamics`, `libretexts-intro-eng-thermo-yan-first-law-closed-systems`

**Q5 (analysis — Evaluating a claimed device against the cyclic form of the first law).** An inventor proposes a sealed device that returns to its exact initial state at the end of every cycle, exchanges no heat with its surroundings, and delivers 5.0 kJ of net work per cycle. Which first-law argument rules it out?

A. Friction inside any real machine dissipates energy, so the net work delivered must be less than 5.0 kJ
B. Work is a state function, so its value around any closed cycle must be zero
C. Only the second law can rule this out, because the first law places no limit on work output
D. Over a complete cycle delta-U = 0, so Q = W; with Q = 0 the net work must also be zero

*Answer: D.* Returning to the initial state forces delta-U = 0 because internal energy is a state function, so the first law reduces to Q = W for the cycle. With no heat crossing the boundary, the net work is zero, and this holds whatever the internal mechanism is. Work is a path function, not a state function, so that option misstates the reason. Friction is a real effect but not the argument, which never inspects the mechanism. And the first law does forbid this device, a perpetual motion machine of the first kind; the second law is needed for questions of direction and efficiency, not for this one.

Sources: `openstax-university-physics-2-thermodynamic-processes`, `libretexts-intro-eng-thermo-yan-first-law-closed-systems`, `uspto-mpep-608-03-models-exhibits-specimens`

## Sources

- `openstax-university-physics-2-thermodynamic-systems` — University Physics Volume 2, 3.1 Thermodynamic Systems, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-2/pages/3-1-thermodynamic-systems> (REFERENCE_ONLY; Creative Commons Attribution-NonCommercial-ShareAlike (stated in the page footer); the page also states the book may not be ingested into large language models without OpenStax's permission)
- `openstax-university-physics-2-work-heat-and-internal-energy` — University Physics Volume 2, 3.2 Work, Heat, and Internal Energy, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-2/pages/3-2-work-heat-and-internal-energy> (REFERENCE_ONLY; Creative Commons Attribution-NonCommercial-ShareAlike (stated in the page footer); the page also states the book may not be ingested into large language models without OpenStax's permission)
- `openstax-university-physics-2-first-law-of-thermodynamics` — University Physics Volume 2, 3.3 First Law of Thermodynamics, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-2/pages/3-3-first-law-of-thermodynamics> (REFERENCE_ONLY; Creative Commons Attribution-NonCommercial-ShareAlike (stated in the page footer); the page also states the book may not be ingested into large language models without OpenStax's permission)
- `openstax-university-physics-2-thermodynamic-processes` — University Physics Volume 2, 3.4 Thermodynamic Processes, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-2/pages/3-4-thermodynamic-processes> (REFERENCE_ONLY; Creative Commons Attribution-NonCommercial-ShareAlike (stated in the page footer); the page also states the book may not be ingested into large language models without OpenStax's permission)
- `openstax-university-physics-2-heat-capacities-of-an-ideal-gas` — University Physics Volume 2, 3.5 Heat Capacities of an Ideal Gas, OpenStax, Rice University. <https://openstax.org/books/university-physics-volume-2/pages/3-5-heat-capacities-of-an-ideal-gas> (REFERENCE_ONLY; Creative Commons Attribution-NonCommercial-ShareAlike (stated in the page footer); the page also states the book may not be ingested into large language models without OpenStax's permission)
- `openstax-chemistry-2e-enthalpy` — Chemistry 2e, 5.3 Enthalpy, OpenStax, Rice University. <https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy> (REFERENCE_ONLY; Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (stated in the page footer); the page also states the book may not be ingested into large language models without OpenStax's permission)
- `libretexts-intro-eng-thermo-yan-system-and-surroundings` — Introduction to Engineering Thermodynamics, 1.3 System and Surroundings, Claire Yu Yan, University of British Columbia Okanagan, via BCcampus, hosted on Engineering LibreTexts. <https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Introduction_to_Engineering_Thermodynamics_(Yan)/01%3A_Basic_Concepts_and_Definitions/1.03%3A_System_and_surroundings> (REFERENCE_ONLY; CC BY-NC-SA 4.0)
- `libretexts-intro-eng-thermo-yan-work` — Introduction to Engineering Thermodynamics, 4.4 Work (boundary work), Claire Yu Yan, University of British Columbia Okanagan, via BCcampus, hosted on Engineering LibreTexts. <https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Introduction_to_Engineering_Thermodynamics_(Yan)/04%3A_The_First_Law_of_Thermodynamics_for_Closed_Systems/4.04%3A_Work> (REFERENCE_ONLY; CC BY-NC-SA 4.0)
- `libretexts-intro-eng-thermo-yan-first-law-closed-systems` — Introduction to Engineering Thermodynamics, 4.5 The First Law of Thermodynamics for Closed Systems, Claire Yu Yan, University of British Columbia Okanagan, via BCcampus, hosted on Engineering LibreTexts. <https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Introduction_to_Engineering_Thermodynamics_(Yan)/04%3A_The_First_Law_of_Thermodynamics_for_Closed_Systems/4.05%3A_The_first_law_of_thermodynamics_for_closed_systems> (REFERENCE_ONLY; CC BY-NC-SA 4.0)
- `libretexts-intro-eng-thermo-yan-enthalpy` — Introduction to Engineering Thermodynamics, 5.2 Enthalpy, Claire Yu Yan, University of British Columbia Okanagan, via BCcampus, hosted on Engineering LibreTexts. <https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Introduction_to_Engineering_Thermodynamics_(Yan)/05%3A_The_First_Law_of_Thermodynamics_for_a_Control_Volume/5.02%3A_Enthalpy> (REFERENCE_ONLY; CC BY-NC-SA 4.0)
- `libretexts-intro-eng-thermo-yan-mass-energy-control-volume` — Introduction to Engineering Thermodynamics, 5.3 Mass and Energy Conservation Equations in a Control Volume, Claire Yu Yan, University of British Columbia Okanagan, via BCcampus, hosted on Engineering LibreTexts. <https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Introduction_to_Engineering_Thermodynamics_(Yan)/05%3A_The_First_Law_of_Thermodynamics_for_a_Control_Volume/5.03%3A_Mass_and_energy_conservation_equations_in_a_control_volume> (REFERENCE_ONLY; CC BY-NC-SA 4.0)
- `nasa-bga-first-law-internal-energy` — First Law - Internal Energy (Beginner's Guide to Aeronautics, Guide to Rockets), NASA Glenn Research Center. <https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/guide-to-rockets/first-law-internal-energy-3/> (REFERENCE_ONLY)
- `nasa-bga-enthalpy` — Enthalpy (Beginner's Guide to Aeronautics), NASA Glenn Research Center. <https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/enthalpy-2-2/> (REFERENCE_ONLY)
- `uspto-mpep-608-03-models-exhibits-specimens` — Manual of Patent Examining Procedure, Section 608.03, Models, Exhibits, Specimens, United States Patent and Trademark Office. <https://www.uspto.gov/web/offices/pac/mpep/s608.html> (REFERENCE_ONLY; No reuse licence stated on the document; U.S. Government publication)
- `nist-sp330-2019-section-2-si-units` — The International System of Units (SI), 2019 Edition (NIST SP 330), Section 2: The International System of Units, National Institute of Standards and Technology. <https://www.nist.gov/pml/special-publication-330/sp-330-section-2> (REFERENCE_ONLY)

## Related Topics

- `engineering-fundamentals:thermal-and-energy-systems:temperature-versus-heat`
- `engineering-fundamentals:thermal-and-energy-systems:heat-transfer`
- `engineering-fundamentals:mechanics:work-and-energy`

## Editorial Metadata

- Topic id: `engineering-fundamentals:thermal-and-energy-systems:first-law-of-thermodynamics`
- Editorial status: READY_TO_PUBLISH
- Estimated minutes: 13
- Researched: 2026-08-19
- Source project: EliExplains original synthesis
- Research status: source-verified
- Rights status: All sources reference-only. The OpenStax pages are CC BY-NC-SA and additionally prohibit ingestion into large language models without permission; the LibreTexts engineering thermodynamics pages are CC BY-NC-SA 4.0; the NASA Beginner's Guide pages and the USPTO manual are U.S. Government works with no stated reuse licence. No source prose was reproduced or paraphrase-followed, and no engineering standard was consulted or quoted.
- Transformation: Sources were read to verify definitions, equations, sign conventions, and the process reductions; the lesson structure, prose, analogy, worked example, and all five questions are original. Every number in the worked example and in question 3 was executed with python3 before publication and cross-checked by an independent route (boundary work as p-V area, internal energy from (3/2)nR deltaT, and enthalpy change equal to Q at constant pressure). The generated draft was discarded in full: it contained no thermodynamics content.
- Verification: every number in the worked example and in question 3 was executed with `python3` before publication. The isobaric leg was checked three independent ways — boundary work as the p-V rectangle, internal energy from (3/2)nR deltaT, and the constant-pressure identity delta-H = Q with delta-H also computed as (5/2)nR deltaT — and all three agree exactly (2,250 J, 3,375 J and 5,625 J). The two-leg total delta-U of 2,175 J was confirmed against the state-function route (3/2)nR(T3 - T1), and the alternative sign convention delta-U = Q + W_on was shown to return the same 2,175 J.
- Scope handoffs: temperature, heat, specific heat and latent heat to `temperature-versus-heat`; conduction, convection and radiation to `heat-transfer`; mechanical work, kinetic and potential energy and power to `work-and-energy`; entropy, direction and efficiency limits to the second-law topic, which this lesson explicitly does not cover.
- Safety note: this lesson is educational material, not engineering design guidance. Nothing here should be used to size or specify a boiler, pressure vessel, turbine, compressor, heat exchanger or any other thermal component. Real design requires a licensed engineer working to the governing code.
