# Safety Factors and Failure

## In 30 Seconds

A factor of safety is a ratio: how much a part can take, divided by how much it is asked to take. Engineers compute that ratio in several incompatible ways, though, against yield or against ultimate, applied to load or to stress, as a target or as the value actually achieved. A quoted number means nothing until you say which. And no factor, however large, protects against a failure mode nobody thought to check.

## Why This Matters

Most engineering disasters are not arithmetic errors. They are parts failing in ways the analysis never modelled: a column that collapses at a quarter of its crushing load, a shaft that snaps after ten million uneventful cycles, a fitting that corrodes until the section left is a fraction of what the drawing showed. Knowing the failure modes and the conditions that provoke them is what tells you which calculation to do before you do it. It also inoculates you against the most seductive mistake in the field, which is believing that a large number in front of a strength value has bought safety you never actually earned.

## Learning Objectives

- Define a factor of safety as a ratio of capacity to demand and identify the three ways a quoted value is ambiguous.
- Distinguish the uncertainties a safety factor genuinely covers from the ignorance it cannot cover.
- Contrast allowable stress design with load and resistance factor design and explain why separate partial factors represent uncertainty better than one global multiplier.
- Explain the reliability index and the notional probability of failure, and state what that probability does not claim.
- Match each major failure mode to the condition that provokes it, and analyse whether buckling or yielding governs a given column.
- Evaluate a design at system level using single-point failure, redundancy, fail-safe structure, damage tolerance and FMEA.

## The College Version

### Capacity over demand, and why the bare number tells you nothing

Every factor of safety is the same shape: something the part can withstand, divided by something the part is asked to withstand. What varies, wildly, is what goes on each side of the line. Federal airworthiness regulation for transport-category airplanes builds its whole strength framework on loads. It defines limit loads as the maximum loads expected in service, ultimate loads as limit loads multiplied by prescribed factors of safety, and then requires that, unless otherwise specified, a factor of 1.5 be applied to prescribed limit loads treated as external loads. Nothing there is a stress. A classical allowable-stress calculation does the opposite: it computes an elastic stress under service loads and compares it to an allowable stress that is a preset fraction of a strength value. Same word, different quantity, and once behaviour is non-linear the two stop being interchangeable, because a load 1.5 times larger need not produce a stress 1.5 times larger. NASA's structural factors standard says this out loud, defining factors of safety as multiplying factors applied to limit loads or stresses and noting in its margin-of-safety definition that load may mean force, stress, or strain. So the first discipline this topic asks of you is verbal: never quote a factor of safety without naming both terms of the ratio.

### Three axes of ambiguity in a quoted factor

The ambiguity is not one question but three, and they multiply. First, capacity against what: yield, or ultimate? Those are different numbers for the same material, and a factor of 2 on yield is a far more demanding requirement than a factor of 2 on ultimate. Airworthiness regulation makes the split legally concrete with a two-tier check against two capacities: the structure must support limit loads without detrimental permanent deformation, and ultimate loads without failure for at least three seconds. One quoted factor hides two governing conditions. Second, applied to load or to stress. Third, design factor or realized factor. A design factor is a target imposed before sizing; the realized factor is what the finished part actually has, which is almost never the target, because stock sizes and standard components round the geometry upward. NASA's standard normalises the business differently again, as a margin of safety: allowable load, yield or ultimate, divided by the product of limit load and the corresponding factor of safety, minus one, so zero means the requirement was exactly met and a positive value is surplus. And the required factor is not a property of the physics. That standard sets different design factors depending on whether hardware is prototype-tested, protoflight-tested, or accepted on analysis alone, and notes pointedly that raising them does not by itself justify skipping the test.

### What the factor covers, and what it cannot

A safety factor is an allowance for what you know is uncertain but cannot pin down: loads exceeding your estimate on some bad day, properties that scatter from batch to batch, an analysis that idealised a joint as a pin, manufacturing tolerances and residual stresses, and service degradation from corrosion, wear and thermal cycling. Those are honest uncertainties, irreducible at the moment of design, and a factor is a reasonable way to buy margin against them. What it is not is a substitute for analysis you could have done. If you have not identified how the part will actually fail, you computed a ratio against the wrong capacity, and its size is irrelevant. A slender column checked only against crushing can carry a nominal factor of 2 on yield and still collapse at little more than half the load that check permitted. A shaft checked only against static yield can crack after a few million cycles, because fatigue accumulates damage well below yield, and the danger is precisely that one application of that load does nothing, so a conventional stress analysis produces an assumption of safety that does not exist.

### Allowable stress design, partial factors, and why they differ

Traditional working-stress or allowable-stress design assumed safety existed if elastically computed stresses stayed below allowable values set as a preset fraction of yield strength, crushing strength, or modulus of rupture. Those fractions were set empirically, the 1980 NBS study behind American load standards records, to reflect the profession's feeling about the relative variability of materials. Its central criticism is that one set of allowable stresses cannot deliver constant safety. Take two roofs designed for the same snow load to the same allowable stress, one heavy and one light. Because dead load is estimated far more precisely than snow load, the roof with the high dead-to-live ratio ends up with the lower probability of failure: same rule, same nominal factor, different real safety. Worse, the format can be actively unsafe where one load counteracts another, especially a predictable dead load opposing a variable wind load; the report attributes the Ferrybridge cooling tower failures to that. Load and resistance factor design splits the single factor apart. The check becomes a factored resistance against a sum of factored load effects, with a resistance factor below unity reflecting uncertainty in capacity and each load carrying its own factor, generally above unity, sized to that load's variability. Live load gets a larger factor than dead load because it is less predictable. That is uncertainty accounting rather than one blunt multiplier.

### From a factor to a probability

Reliability-based design takes the last step and drops the deterministic ratio entirely. Treat resistance and load effect as random variables; failure is the event that resistance minus load effect falls below zero. The reliability index, conventionally written beta, measures how many standard deviations of the limit-state function separate the mean state from failure, and it converts to a probability of failure through the standard normal distribution as p_f equal to Phi of minus beta. The NBS study chose target values for beta by calibrating against designs the profession already accepted: 3.0 for dead-plus-live and dead-plus-snow combinations, 2.5 where wind was involved, and 1.75 where earthquake was. Two things are worth carrying away. First, this is what a partial-factor code is under the hood; the load factors were derived from the target reliabilities rather than chosen by feel. Second, the report is careful in a way that popular accounts are not. Where the underlying probability laws cannot be determined exactly, it calls the resulting p_f a notional probability, to be read comparatively rather than as a classical relative frequency. It is not a forecast that one building in a specific number will collapse.

### The failure modes and the conditions that provoke each

Yielding is permanent deformation once stress reaches the yield strength, driven by shear sliding one atomic plane along another; it is a serviceability problem long before it is a collapse. Ductile rupture is final separation after large plastic strain, announced by necking. Brittle fracture is separation by cleavage with negligible plastic strain, propagating fast and, where flaws are present, at lower stress than ductile fracture needs; the temperature above which a steel is ductile and below which it is brittle is its nil-ductility transition temperature. Near a crack the stress field is so distorted that ordinary elastic analysis is insufficient, and past a critical crack length the crack runs catastrophically at a gross stress far below anything that would trouble a tensile specimen; K_Ic measures resistance to that. Fatigue is damage accumulated under repeated loading well below yield, initiating at a flaw where stress concentrates. On an S-N diagram some materials, notably ferrous alloys, flatten to an endurance limit below which cycling never causes failure; others, aluminium among them, show no such limit, so the designer keeps the planned life short of the curve instead of hunting for a safe stress. That limit is dominated by stress raisers and finish, which is why fatigue testing demands specimens whose surface condition represents the production article, with attention to holes, joints, changes in section, sharp corners and rough finish. Nor does it survive corrosion: corrosion-fatigue fractures occur far below the limit measured in laboratory air, even when the corrosion looks minor. Creep is slow plastic deformation under sustained load at temperature, relevant in metals above roughly 0.3 of the absolute melting temperature and in ceramics above 0.5, proceeding far below the measured yield strength through transient, steady-state and runaway stages. Wear removes material mechanically, fretting being the abrasive wear of two loaded surfaces vibrating together; corrosion removes it chemically, converting metal to oxide, hydroxide or sulfate, which is a different mechanism from erosion's purely mechanical destruction. Thermal failure comes from expansion under constraint or non-uniform heating, and because those stresses cycle they feed fatigue.

### Buckling is a stability failure, not a strength failure

Students consistently file buckling under strength, and it does not belong there. Equilibrium and stability are separate questions: showing that internal forces balance says nothing about what happens if the configuration is nudged, which is settled by whether the total potential energy curves upward or downward about that state. A column loses stability while every stress in it is still comfortably elastic. Look at the classical pin-ended column: the critical load is pi squared times E times I over the length squared, and the critical stress is pi squared times E over the slenderness ratio squared, slenderness being length over radius of gyration. The yield strength does not appear. Specify a stronger alloy with the same stiffness and you have changed the elastic buckling load by exactly nothing. Setting critical stress equal to yield stress gives a critical slenderness of pi times the square root of E over yield strength, and that single number sorts columns into two regimes: more slender than critical, and the column buckles elastically before it ever yields; stockier, and it yields first. Limit-states codes reflect this by listing buckling as its own ultimate limit state, beside exceeding material strength, fracture, fatigue and loss of rigid-body equilibrium rather than inside any of them.

### Failure theories for static loading, at survey level

A tension test gives one number and real parts see combined stresses, so you need a rule for translating. For ductile materials, where yield is shear-driven, both standard criteria are shear-based. The maximum shear stress or Tresca criterion says yield begins when the maximum shear stress reaches a critical value, which the tension test fixes at half the yield stress. The distortion energy or von Mises criterion takes the driving quantity to be the strain energy associated with the deviatoric part of the stress, and gives a shear yield value of the yield stress divided by the square root of three. They disagree by about fifteen percent in pure shear, Tresca being the more conservative; von Mises usually fits data better and is what finite element codes report as equivalent stress. Brittle behaviour needs a different rule, because fracture is driven by normal stresses pulling planes apart rather than shear sliding them, and brittle materials fracture before they yield. The matching survey-level criterion is the maximum normal stress or Rankine criterion, which predicts failure when the largest principal normal stress reaches the uniaxial value. It is the most conservative of the three loci and, ignoring shear entirely, the wrong choice for ductile yielding.

### The systems view, and what this lesson is not

A part-level factor cannot see the architecture around it. A single point failure is an independent element of a system, hardware, software or human, whose failure alone loses the objective, the hardware, or the crew. Redundancy is the use of more than one independent means of performing a function, and independent does all the work: failure of one path must not impair transfer to the second, so two channels sharing a power supply, a connector, or a design error are not two channels. Fail-safe in structures means retaining required residual strength for a period of unrepaired use after a principal structural element fails, typically through multiple load paths. In control and security systems, fail-safe and fail-secure are opposites rather than synonyms: a fail-safe termination protects people and property but may compromise security, while a fail-secure termination preserves the secure state but may let something be damaged. Damage tolerance assumes the flaw is already there, sets inspection intervals from crack-growth analysis, and requires residual strength with the damage present; safe-life instead certifies a number of flights or hours during which strength is unlikely to fall below its design value, and airworthiness rules permit it only where damage tolerance is impractical. FMEA works bottom-up from every identifiable failure mode to its effect, precisely to find critical single failure points. Finally, this lesson is educational material, not design guidance. Every property here is illustrative; real factors and allowable values come from the governing code for the application, applied by a licensed engineer.

## Key Vocabulary

- **Factor of safety** — The ratio of a capacity to the demand placed on it, uninterpretable until both the capacity term and the demand term are named.
- **Limit load** — The maximum load, or combination of loads, a structure is expected to see in service under all anticipated operating conditions.
- **Ultimate load** — A limit load multiplied by the prescribed factor, used as the level the structure must survive without breaking.
- **Margin of safety** — Allowable capacity divided by the factored demand, minus one, so that zero means the requirement was exactly met and a positive value is surplus.
- **Allowable stress design** — A format in which elastic stresses computed under service loads must stay below values set as a preset fraction of a strength property.
- **Load and resistance factor design** — A format in which capacity is reduced by a resistance factor below one while each load effect is amplified by its own factor reflecting that load's variability.
- **Reliability index** — A measure, written beta, of how many standard deviations of the limit-state function separate the mean condition from the failure boundary.
- **Slenderness ratio** — A column's effective length divided by its radius of gyration, the geometric quantity that decides whether stability or strength governs.
- **Endurance limit** — A cyclic stress amplitude, present in some materials such as ferrous alloys but absent in others, below which cycling does not cause fatigue failure.
- **Damage tolerance** — The property of retaining required residual strength for a period of service after sustaining fatigue, corrosion, accidental, or discrete source damage.

## Eli-10

Imagine you are told a rope is 'twice as strong as it needs to be'. Sounds reassuring. But twice as strong compared to what? Compared to the weight where it starts stretching permanently, or the weight where it finally snaps? Those are two very different weights, so 'twice' turns into two very different ropes. And that number only helps at all if the rope is going to fail by being pulled apart. If it is actually going to fail by rubbing through on a rough edge, or by rotting in the rain, or because it is a long thin pole that folds instead of a rope that stretches, then doubling the pulling strength has bought nothing. Engineers spend more effort deciding which way a thing will break than deciding how much extra strength to add, because the extra strength only guards the way you already thought of.

## Eli's Analogy

A safety factor is like padding your travel time. Leaving an extra hour covers ordinary uncertainty: slow traffic, a long security line, a slightly late start. It does not cover flying to the wrong airport. That is not a delay you can pad against, because it is a mistake about which thing was going to go wrong, and no amount of extra time fixes it.

**Where the analogy breaks down.** The analogy breaks in two places. Padding time costs you only time, but padding a structure costs weight, money, and sometimes safety elsewhere, since a heavier part loads everything holding it. And travel delays roughly add up, while structural uncertainties combine statistically, which is exactly why modern codes apply separate factors to each source instead of one lump allowance.

## Worked Example

All properties below are illustrative teaching values, not design values: yield strength 250 MPa, ultimate strength 400 MPa, elastic modulus 200 GPa. Every figure was computed in Python with units carried.

Part 1, one bar and two answers. A round bar 20 mm in diameter carries 60 kN in tension. Area = pi(20 mm)^2/4 = 314.159 mm^2, so stress = 60000 N / 314.159 mm^2 = 190.986 MPa. Factor on yield = 250 / 190.986 = 1.3090. Factor on ultimate = 400 / 190.986 = 2.0944. Same bar, same load, same day: the answer is 1.31 or 2.09 depending only on which capacity you named, and the two always differ by exactly the ratio 400/250 = 1.6000. Run it the other way and the stakes are physical. Designing this bar to 'a factor of 2' needs 480.000 mm^2 (d = 24.72 mm) if the factor is on yield, but only 300.000 mm^2 (d = 19.54 mm) if it is on ultimate: 60 percent more material for the same stated number. Then round the yield-based answer up to a 26 mm stock size and area becomes 530.929 mm^2, stress 113.009 MPa, and the realized factor 2.2122 against a design factor of 2.000.

Part 2, buckling versus yielding. Take a pin-ended column of solid square section, side 40 mm: A = 1600 mm^2, I = h^4/12 = 213333.3 mm^4, radius of gyration = sqrt(I/A) = 11.5470 mm. Critical slenderness = pi*sqrt(E/yield) = pi*sqrt(200000/250) = 88.8577, so the changeover length is 88.8577 x 11.5470 mm = 1026.04 mm. At L = 2000 mm, slenderness = 173.205, well past critical, so buckling governs: critical stress = pi^2 x 200000 / 173.205^2 = 65.797 MPa and critical load = 105.276 kN, confirmed independently by pi^2*E*I/L^2 = 105.276 kN. Yield would need 250 MPa x 1600 mm^2 = 400.0 kN, 3.800 times more. A designer who checked only strength and allowed a factor of 2 on yield would permit 200.0 kN, which is 1.90 times the load at which this column actually collapses. At L = 600 mm the same section has slenderness 51.962, below critical, buckling stress 731.082 MPa, and yielding governs instead. Notice what changes nothing: doubling the yield strength to 500 MPa leaves the 2 m column's critical load at 105.276 kN, because yield strength never enters the elastic buckling formula.

## Common Mistakes

- **Mistake:** Treating buckling as a strength failure and checking a slender column with stress equal to load over area against the yield strength.
  **Correction:** Buckling is a loss of stability, not a loss of strength. The elastic critical load depends on stiffness, second moment of area and length, and the yield strength does not appear in it at all. Compute the slenderness ratio first, compare it to pi times the square root of E over yield strength, and let that decide which check governs. In the worked example the 2 m column collapses at 105.3 kN while a strength-only check would have permitted 200 kN.
- **Mistake:** Quoting or comparing a factor of safety without saying which capacity and which demand it uses.
  **Correction:** A factor of 2 on ultimate and a factor of 2 on yield describe different parts, and a factor applied to load is not the same as one applied to stress once behaviour is non-linear. Name both terms every time. NASA's structural standard even flags in its own margin-of-safety definition that the word load there may mean force, stress, or strain.
- **Mistake:** Believing that raising the safety factor compensates for not understanding the failure mode.
  **Correction:** A ratio computed against the wrong capacity does not become right by being larger. Fatigue, creep, stress-corrosion cracking and buckling all operate at stresses well below yield, so a generous static factor is simply irrelevant to them. NASA's standard says the same thing procedurally: increasing design factors of safety does not by itself justify skipping the test.
- **Mistake:** Reading a code-implied probability of failure as a prediction of how often structures will collapse.
  **Correction:** Where the underlying probability distributions are not exactly known, the value obtained from p_f = Phi(-beta) is a notional probability, meaningful for comparing design alternatives on a consistent basis rather than as a relative frequency. It is a calibration device, not a forecast.
- **Mistake:** Assuming every material has an endurance limit, and that a published one holds in service.
  **Correction:** Ferrous alloys typically show an S-N curve that flattens to an endurance limit; aluminium and many others do not, so the design must instead keep the planned life short of the curve. Even where a limit exists, it is measured on a specific specimen in laboratory air, and corrosion fatigue produces fracture far below that limit even when the corrosion looks minor.

## Compare / Contrast

- **Allowable stress design vs Load and resistance factor design** — One compares an elastic service-load stress against a fraction of a strength property, applying a single global allowance. The other reduces capacity by a resistance factor and amplifies each load effect by its own factor, so a live-load-dominated member and a dead-load-dominated member carrying the same service total are not treated as equivalent.
- **Design factor vs Realized factor** — The design factor is the target imposed before sizing; the realized factor is what the finished part actually has after geometry is rounded to stock sizes and standard components. In the worked example a design factor of 2.000 becomes a realized 2.2122 the moment the diameter is rounded up.
- **Buckling vs Yielding** — Buckling is an instability of the equilibrium configuration governed by stiffness and slenderness, and can occur while every stress is elastic. Yielding is a strength limit reached when stress meets the yield strength. Slenderness relative to pi times the square root of E over yield strength decides which one a given column reaches first.
- **Damage tolerance vs Safe-life** — Damage tolerance assumes a flaw of the maximum probable size is already present, sets inspection intervals from crack growth, and requires residual strength with the damage there. Safe-life certifies a service duration during which cracking is unlikely to reduce strength below the design value, using a scatter factor on test life, and airworthiness rules permit it only where damage tolerance is impractical.
- **Fail-safe vs Fail-secure** — In the security and control sense these are opposites. A fail-safe termination mode protects specified resources including life and property when a failure occurs, though it may leave security compromised; a fail-secure mode preserves the secure state, though something may be damaged as a result. In structures, fail-safe carries a separate meaning: retaining residual strength after a principal element fails, usually via multiple load paths.

## Key Takeaway

A factor of safety is a ratio of capacity to demand, and it is meaningless until you name both terms; it buys margin against honest uncertainty but never against a failure mode you did not check, which is why identifying the mode always comes before sizing the number.

## Practice Question Bank

**1. In 14 CFR part 25, what is an ultimate load defined as?**

   A. A limit load multiplied by the prescribed factor of safety
   B. The stress at which the material reaches its ultimate tensile strength
   C. The largest load ever recorded on an airplane of that type
   D. The load at which permanent deformation first becomes detectable

   *Answer: A.* The regulation states strength requirements in terms of limit loads, the maximum loads expected in service, and ultimate loads, which are limit loads multiplied by prescribed factors of safety. Option B confuses a load with a material stress property; the regulation's factor is applied to load, not stress. Option C describes service history, not a design definition. Option D describes the limit-load condition, where the structure must show no detrimental permanent deformation.
   *Difficulty:* recall · *Skill:* Recalling the regulatory definitions of limit load and ultimate load

**2. A 20 mm diameter bar of a material with illustrative yield strength 250 MPa and ultimate strength 400 MPa carries 60 kN in tension, giving a stress of 190.986 MPa. What are the factors of safety on yield and on ultimate?**

   A. 2.09 on yield and 1.31 on ultimate
   B. 1.31 on yield and 2.09 on ultimate
   C. 1.60 on both, since the factor is a property of the load
   D. 1.31 on yield, and ultimate cannot be used to form a factor

   *Answer: B.* 250 MPa / 190.986 MPa = 1.3090 and 400 MPa / 190.986 MPa = 2.0944, so the yield-based factor is the smaller one, since yield is reached first. Option A reverses them. Option C confuses the ratio of the two answers, 400/250 = 1.60, with the answers themselves; the factor depends on the capacity chosen, not on the load alone. Option D is wrong because factors on ultimate are used routinely, which is exactly why a quoted value must state its basis.
   *Difficulty:* application · *Skill:* Computing a factor of safety two ways from the same stress and recognising which is smaller

**3. A pin-ended column has a slenderness ratio of 173.2, while pi times the square root of E over its yield strength equals 88.9. Which check governs, and why?**

   A. Yielding, because slenderness only matters for very short columns
   B. Yielding, because the column is above the critical slenderness and therefore stocky
   C. Buckling, because the column is more slender than critical and loses stability while still elastic
   D. Neither, because slenderness affects deflection but not failure load

   *Answer: C.* The critical slenderness pi*sqrt(E/yield) separates the two regimes: columns more slender than that value buckle elastically before they yield, and stockier ones yield first. At 173.2 against a critical 88.9 the column is well into the buckling regime, and in the worked example it collapses at 105.3 kN while yielding would need 400.0 kN. Option B inverts the meaning of slenderness, since a larger ratio means a more slender column. Options A and D deny that stability is a failure limit at all.
   *Difficulty:* analysis · *Skill:* Deciding whether stability or strength governs a column from its slenderness ratio

**4. Why does load and resistance factor design apply a larger factor to live load than to dead load?**

   A. Because live load is usually numerically larger than dead load
   B. Because live load is more variable and less precisely predictable than dead load
   C. Because dead load acts downward while live load can reverse direction
   D. Because the resistance factor already accounts for all dead load uncertainty

   *Answer: B.* Each load factor reflects the uncertainty in determining that particular load effect, and dead load can be computed from specified dimensions and densities with much more precision than an occupancy or snow load can be forecast. That difference is the whole reason a single global allowance fails: two members carrying the same service total but different dead-to-live splits do not carry the same real risk. Option A is not generally true and is irrelevant in any case. Option C describes load reversal, handled separately by combinations that reduce the dead-load contribution. Option D misplaces load uncertainty onto the resistance side.
   *Difficulty:* understanding · *Skill:* Explaining why partial factors are assigned by uncertainty rather than by magnitude

**5. A rotating shaft is sized with a comfortable factor of safety against static yield, yet cracks and fails after several million revolutions at loads never exceeding that limit. What best explains the failure, and what does it reveal about the factor?**

   A. The shaft crept, and the static factor should simply have been made larger
   B. The material's yield strength was reported incorrectly, so the factor was arithmetically wrong
   C. Fatigue accumulated damage below yield, so the static factor was computed against a capacity that never governed
   D. The shaft buckled, which a static factor on yield would have prevented if doubled

   *Answer: C.* Fatigue is damage accumulation under repeated loading that may be well below the yield point, initiating at a flaw where stress concentrates. It is dangerous precisely because a single application of the same load does nothing, so a conventional static stress analysis produces an assumption of safety that does not exist. Enlarging a static factor does not address a mode that operates below yield, which is the lesson's central point. Creep in option A requires sustained load at elevated homologous temperature, not room-temperature cycling. Option B invents a data error the scenario does not contain. Option D misapplies buckling, an instability of slender members in compression, to a cyclically loaded shaft.
   *Difficulty:* analysis · *Skill:* Diagnosing a failure mode not covered by the computed factor and stating the implication

## Sources

- [14 CFR 25.301 - Loads](https://www.ecfr.gov/current/title-14/section-25.301) — U.S. National Archives, Office of the Federal Register (eCFR). Usage: PUBLIC_DOMAIN; U.S. Government work.
- [14 CFR 25.303 - Factor of safety](https://www.ecfr.gov/current/title-14/section-25.303) — U.S. National Archives, Office of the Federal Register (eCFR). Usage: PUBLIC_DOMAIN; U.S. Government work.
- [14 CFR 25.305 - Strength and deformation](https://www.ecfr.gov/current/title-14/section-25.305) — U.S. National Archives, Office of the Federal Register (eCFR). Usage: PUBLIC_DOMAIN; U.S. Government work.
- [14 CFR 25.571 - Damage-tolerance and fatigue evaluation of structure](https://www.ecfr.gov/current/title-14/section-25.571) — U.S. National Archives, Office of the Federal Register (eCFR). Usage: PUBLIC_DOMAIN; U.S. Government work.
- [Development of a Probability Based Load Criterion for American National Standard A58 (NBS Special Publication 577)](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication577.pdf) — U.S. National Bureau of Standards (now NIST). Usage: PUBLIC_DOMAIN; U.S. Government work.
- [NASA-STD-5001B with Change 3, Structural Design and Test Factors of Safety for Spaceflight Hardware](https://standards.nasa.gov/sites/default/files/standards/NASA/B-w/CHANGE-3/3/2022-10-24-NASA-STD-5001B-w-Change-3-Approved.pdf) — NASA Office of the Chief Engineer. Usage: PUBLIC_DOMAIN; U.S. Government work; approved for public release, distribution unlimited.
- [NASA-STD-8729.1A, Reliability and Maintainability (R&M) Standard for Spaceflight and Support Systems](https://standards.nasa.gov/sites/default/files/standards/NASA/A/0/nasa-std-87291a.pdf) — NASA Office of Safety and Mission Assurance. Usage: PUBLIC_DOMAIN; U.S. Government work; approved for public release, distribution unlimited.
- [FAA Advisory Circular 23-13A, Fatigue, Fail-Safe, and Damage Tolerance Evaluation of Metallic Structure for Normal, Utility, Acrobatic, and Commuter Category Airplanes](https://www.faa.gov/documentlibrary/media/advisory_circular/ac_23-13a.pdf) — U.S. Federal Aviation Administration. Usage: PUBLIC_DOMAIN; U.S. Government work.
- [FAA Advisory Circular 43-4B, Corrosion Control for Aircraft](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_43-4B.pdf) — U.S. Federal Aviation Administration. Usage: PUBLIC_DOMAIN; U.S. Government work.
- [DOE Fundamentals Handbook: Material Science, Volume 2 of 2 (DOE-HDBK-1017/2-93)](https://www.energy.gov/sites/default/files/2026-04/DOE-HDBK-1017-93_VOL2.pdf) — U.S. Department of Energy. Usage: PUBLIC_DOMAIN; U.S. Government work; distribution statement A, approved for public release.
- [NIST Computer Security Resource Center glossary entry: fail safe](https://csrc.nist.gov/glossary/term/fail_safe) — U.S. National Institute of Standards and Technology. Usage: REFERENCE_ONLY; license not stated.
- [NIST Computer Security Resource Center glossary entry: fail secure](https://csrc.nist.gov/glossary/term/fail_secure) — U.S. National Institute of Standards and Technology. Usage: REFERENCE_ONLY; license not stated.
- [Mechanics of Materials (Roylance), 6.1: Yield and Plastic Flow](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)/06:_Yield_and_Fracture/6.01:_Yield_and_Plastic_Flow) — Engineering LibreTexts (MIT OpenCourseWare derivative). Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0.
- [Mechanics of Materials (Roylance), 6.4: Introduction to Fracture Mechanics](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)/06:_Yield_and_Fracture/6.04:_Introduction_to_Fracture_Mechanics) — Engineering LibreTexts (MIT OpenCourseWare derivative). Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0.
- [Mechanics of Materials (Roylance), 6.5: Fatigue](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)/06:_Yield_and_Fracture/6.05:_Fatigue) — Engineering LibreTexts (MIT OpenCourseWare derivative). Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0.
- [Structural Mechanics (Wierzbicki), 8.1: Prelude to Stability of Elastic Structures](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Structural_Mechanics_(Wierzbicki)/08:_Stability_of_Elastic_Structures/8.01:_Prelude_to_Stability_of_Elastic_Structures) — Engineering LibreTexts (MIT OpenCourseWare derivative). Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0.
- [Structural Mechanics (Wierzbicki), 8.6: Plastic Buckling of Columns](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Structural_Mechanics_(Wierzbicki)/08:_Stability_of_Elastic_Structures/8.06:_Plastic_Buckling_of_Columns) — Engineering LibreTexts (MIT OpenCourseWare derivative). Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0.
- [Mechanical Behavior of Material, Chapter 10: Creep, Fracture, and Fatigue](https://eng.libretexts.org/Courses/California_State_Polytechnic_University_Humboldt/Mechanical_Behavior_of_Material/Chapter_10:_Creep,_Fracture,_and_Fatigue) — Engineering LibreTexts (California State Polytechnic University, Humboldt). Usage: REFERENCE_ONLY; CC BY-NC-ND 4.0.
- [Mechanics and Science of Materials, Chapter 6: Mechanical Behavior of Materials Part II](https://eng.libretexts.org/Courses/California_State_Polytechnic_University_Humboldt/Mechanics_and_Science_of_Materials/Chapter_6:_Mechanical_Behavior_of_Materials_Part_II) — Engineering LibreTexts (California State Polytechnic University, Humboldt). Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0.

## Related Topics

- `engineering-fundamentals:materials:stress-and-strain`
- `engineering-fundamentals:materials:material-properties`
- `engineering-fundamentals:engineering-practice:testing-and-validation`
- `engineering-fundamentals:engineering-thinking:engineering-constraints-and-tradeoffs`
- `engineering-fundamentals:engineering-practice:engineering-ethics`

## Editorial Metadata

- **Topic id:** `engineering-fundamentals:engineering-practice:safety-factors-and-failure`
- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 14
- **Researched at:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** Public-domain U.S. government sources plus NonCommercial-licensed open textbooks held as reference-only; no source prose adapted, and all quantitative content independently computed
- **Transformation:** Facts were drawn from federal regulation, a NIST/NBS report, two NASA technical standards, two FAA advisory circulars, a DOE fundamentals handbook, two NIST glossary entries and six open-textbook pages, then synthesised into original prose. Every number in the lesson, worked example and question bank was executed in Python with units carried, using clearly labelled illustrative material properties rather than any standard's design values.
- **Source count:** 19 · **Question count:** 5
- **Safety note:** This lesson is educational material, not engineering design guidance. All material properties used are illustrative teaching values. Real design factors, load factors, resistance factors and allowable values come from the governing code or standard for the specific application, and real design requires a licensed engineer working to that code.
