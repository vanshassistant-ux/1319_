# Temperature Versus Heat

## In 30 Seconds

Temperature and heat are different quantities that share one everyday word. Temperature is an intensive property of a body, tracking the average kinetic energy of its molecules, and it does not depend on how much material you have. Heat is energy in transit across a boundary, driven by a temperature difference. A body never contains heat; it contains internal energy. Hold that distinction and the rest of thermal analysis, from Q = mcΔT to the flat spot in a boiling curve, stops being mysterious.

## Why This Matters

Thermal engineering is energy accounting, and an accounting that confuses a property of a body with a transfer across its boundary will not close. Sizing a heater, estimating how long a batch takes to reach temperature, or reading a materials datasheet all depend on separating how hot something is from how much energy moved. The distinction also governs the arithmetic: temperature values and temperature differences convert between scales by different rules, and mixing the two is a common and expensive error. Everything later in thermodynamics — energy balances, heat-transfer rates, cycle analysis — is built on this vocabulary, so a fuzzy start compounds through every course that follows.

## Learning Objectives

1. Define temperature as an intensive property related to the average translational kinetic energy of molecules.
2. Distinguish heat as energy in transit from internal energy as a property a body holds.
3. Explain how the zeroth law of thermodynamics licenses the use of thermometers.
4. Convert temperature values and temperature differences among the Celsius, Fahrenheit, and kelvin scales using the correct rule for each.
5. Apply Q = mcΔT and Q = mL to compute the sensible and latent contributions along a heating curve.
6. Distinguish thermal energy, internal energy, and enthalpy at an introductory level.

## The College Version

### Two quantities, one everyday word

Temperature is an intensive property. Split a beaker of water at 20.0 °C into two halves and each half is still at 20.0 °C, while the mass of each half, and the energy stored in it, are cut in half. Properties that scale with how much material you have are extensive; properties that do not are intensive. Temperature is the standard example of the second kind.

Operationally, temperature is what a thermometer reads. Physically, it tracks the average translational kinetic energy of the molecules of a body: the average per molecule, not the total for the sample. For an ideal monatomic gas that average is (3/2)kT, which with the exact SI value of the Boltzmann constant works out to 6.07 × 10⁻²¹ J per molecule at 293.15 K and 7.73 × 10⁻²¹ J at 373.15 K.

Heat is not a property of anything. Heat is energy that crosses the boundary of a system because the system and its surroundings are at different temperatures. It has the symbol Q and the unit joule, and it exists only while the crossing is happening. When the transfer stops, there is no heat left anywhere: there is a system whose stored energy has changed. That is the whole distinction, and the rest of this lesson is its consequences.

### Why a body does not contain heat

The most useful correction in this topic is a phrasing correction. **A body does not contain heat. It contains internal energy** — the sum of the kinetic and potential energies of all its molecules. Internal energy is fixed by the state of the system; heat is one of the routes by which that state can change.

Because heat is a transfer and not a stock, asking how much heat is in a block of steel is like asking how many miles are in a parked car. Sentences worth retraining: "the ocean holds an enormous amount of heat" becomes "the ocean holds an enormous amount of internal energy", while "the coolant absorbed heat" is fine, because it names a transfer. Textbooks put this bluntly: a system has a well-defined internal energy, but it cannot be said to have a heat content or a work content, because heat and work are not state variables. The practical payoff is that energy bookkeeping only balances when stocks and flows sit on different sides of the ledger.

### Thermal equilibrium and the zeroth law

Put two bodies in thermal contact and energy generally moves between them. When the net transfer falls to zero, they are in **thermal equilibrium**, and by definition they are at the same temperature.

The **zeroth law of thermodynamics** states that this relation is transitive: if body A is in thermal equilibrium with body B, and B is in thermal equilibrium with C, then A is in thermal equilibrium with C. Ralph Fowler gave it that name in the 1930s, after the first and second laws were already numbered, which is why an idea this basic ended up with an ordinal below one.

The law looks trivial until you notice what depends on it. Let B be a thermometer. The zeroth law is what licenses the inference from "the thermometer reads the same in both tanks" to "both tanks are at the same temperature" without ever putting the tanks in contact. Without transitivity, thermometry would be a collection of unrelated readings rather than a measurement of a shared property, and temperature would not be a well-defined property at all.

### Scales, absolute zero, and the kelvin since 2019

The Celsius scale places the freezing point of water at 0 °C and its boiling point at 100 °C at standard pressure; the Fahrenheit scale puts those points at 32 °F and 212 °F, so 100 Celsius degrees span the same interval as 180 Fahrenheit degrees. The kelvin is the thermodynamic scale: 0 K is absolute zero, water freezes at 273.15 K and boils at 373.15 K, and NIST states the relation between Celsius temperature *t* and thermodynamic temperature *T* as *t = T − T₀* with *T₀* = 273.15 K by definition. Absolute zero is −273.15 °C and −459.67 °F. A kelvin and a Celsius degree are equal in size, which is why the two units appear interchangeably in specific heat values.

The kelvin's definition changed recently. The 26th General Conference on Weights and Measures adopted a revised SI in November 2018, and by its Resolution 1 that revision took effect on **20 May 2019**. Since then the kelvin has been defined by fixing the numerical value of the Boltzmann constant *k* at exactly **1.380 649 × 10⁻²³ J K⁻¹**. From 1954 until then, the kelvin was 1/273.16 of the thermodynamic temperature of the triple point of water. NIST's stated reason for the change is that the old definition rested on the properties of one particular isotopic mixture of water rather than on a universal constant, and no two laboratories could prepare that mixture identically. The defining constants of the revised SI carry no uncertainty; the triple point of water is no longer the defining fixture.

### Values convert one way, differences convert another

This is where careful students still lose marks. A temperature *value* carries the offset between scale zeros; a temperature *difference* does not.

| Quantity | Rule | Worked instance |
|---|---|---|
| Value, °C → °F | T_F = (9/5)T_C + 32 | 20.0 °C = 68.0 °F |
| Value, °C → K | T_K = T_C + 273.15 | 20.0 °C = 293.15 K |
| Difference, °C → °F | ΔF = (9/5)ΔC | a 20.0 °C rise = a 36.0 °F rise |
| Difference, °C → K | ΔK = ΔC | a 20.0 °C rise = a 20.0 K rise |

Apply the value formula to a difference and you get 68.0 °F instead of 36.0 °F, an error of about 89 percent. NIST puts the kelvin case directly: the numerical value of a temperature interval or difference is the same whether it is expressed in degrees Celsius or in kelvins. This is why c = 4186 J/(kg·K) and c = 4186 J/(kg·°C) are the same number, and why you can drop a Celsius difference straight into Q = mcΔT without converting anything.

### Heat capacity, specific heat, and sensible heating

**Heat capacity** *C* is the energy required to raise a particular object's temperature by one degree, in J/K; it is extensive, because a larger object needs more. **Specific heat capacity** *c* divides that by mass, giving J/(kg·K); it is intensive, and it is a material property that also depends on phase. When no phase change occurs, the energy needed is the sensible-heat relation **Q = mcΔT**.

Representative published values, read on 19 August 2026:

| Material | c, J/(kg·K) | Conditions |
|---|---|---|
| Ice | 2090 | average, −50 °C to 0 °C |
| Liquid water | 4186 | at 15.0 °C |
| Steam | 1520 | at 100 °C |

Liquid water's value is twice that of ice and nearly three times that of steam, which is part of why water is the working fluid of choice in so much thermal equipment.

Treat Q = mcΔT as a first-pass model, not a law. Specific heat varies with temperature, changes discontinuously at a phase boundary, and for gases splits into a constant-pressure value *c_p* and a constant-volume value *c_v* that differ substantially. Using a single tabulated *c* over a wide temperature range is an idealization, and naming that limit is part of using the equation honestly.

### Latent heat: energy in, temperature flat

Keep heating ice at 0 °C at standard pressure and, for a while, the temperature does not move. Energy continues to flow in, the ice continues to melt, and the thermometer stalls. The energy per unit mass involved is the **latent heat**, and the relation is **Q = mL**: *L_f* for fusion, *L_v* for vaporization. For water at standard pressure, *L_f* = 334 kJ/kg at 0.00 °C and *L_v* = 2256 kJ/kg at 100.0 °C.

Nothing is violated here. Temperature tracks average molecular kinetic energy, and during a phase change the incoming energy goes into the potential energy of molecular arrangement — pulling molecules apart against their mutual attraction — rather than into faster motion. Kinetic energy per molecule holds steady, so the temperature holds steady.

Latent heats are temperature dependent, and you can see that without a table. Taking the CODATA review enthalpies of formation of water from the NIST Chemistry WebBook, −241.826 kJ/mol for the gas and −285.830 kJ/mol for the liquid, the enthalpy of vaporization at 298.15 K is 44.004 kJ/mol, which for a molar mass of 18.0153 g/mol is 2443 kJ/kg. That is larger than the 2256 kJ/kg quoted at 100.0 °C and sits just above the 2430 kJ/kg quoted at 37.0 °C — the ordering a monotonic decline with temperature requires. Latent heat falls as temperature rises toward the critical point, so always check the temperature a tabulated *L* was measured at.

### Thermal energy, internal energy, and enthalpy

Three terms get used loosely and are worth separating.

- **Thermal energy** is informal shorthand for the portion of internal energy associated with molecular motion. It is fine in conversation and best avoided in a calculation, because it has no single agreed definition.
- **Internal energy** *U* is the defined quantity: the total kinetic and potential energy of the molecules of a system, a state function fixed by the state and independent of how the system got there. For an ideal monatomic gas it depends on temperature alone.
- **Enthalpy** *H = U + PV* combines internal energy with the pressure–volume term and is also a state function. Its use is practical: at constant pressure, with only expansion work, the enthalpy change equals the heat exchanged, ΔH = q_p. That is why tabulated latent heats and constant-pressure specific heats are really enthalpy changes, and why chemists and process engineers reach for *H* while gas-cycle analysis often reaches for *U*.

Two neighbouring topics take over from here. How heat and work together change internal energy is the **first law of thermodynamics**. How heat actually crosses a boundary — by conduction, convection, or radiation — is the subject of **heat transfer**. This lesson stops at the definitions those topics depend on.

### Scope and limits

Everything above assumes standard atmospheric pressure where a phase-change temperature is quoted, treats specific heats as constant over each step, and ignores any energy that leaks to the surroundings during a process. Real systems violate all three assumptions to some degree, and a real analysis states which idealizations it is leaning on.

This lesson is educational material. It is not engineering design guidance, and nothing in it should be used to size, select, or specify real thermal equipment. Actual design work requires a licensed engineer working to the governing code and standards, using property data and safety margins appropriate to the application.

## Key Vocabulary

- **Temperature** — An intensive measure of how hot a body is, operationally defined by what a thermometer reads and physically proportional to the average translational kinetic energy of the body's molecules.
- **Heat** — Energy transferred across the boundary of a system because the system and its surroundings are at different temperatures; symbol Q, measured in joules, and defined only while the transfer is occurring.
- **Internal energy** — The total kinetic and potential energy of all the molecules in a system, a state function that a body genuinely stores, in contrast to the transfer quantities Q and W.
- **Thermal equilibrium** — The condition in which two bodies able to exchange energy show no net transfer between them, which is precisely the condition of being at the same temperature.
- **Zeroth law of thermodynamics** — The statement that if body A is in equilibrium with B and B with C, then A is in equilibrium with C; this transitivity is what makes a thermometer a valid instrument.
- **Intensive property** — A characteristic of a sample that does not depend on how much of the sample there is, so dividing the sample leaves it unchanged; density and pressure are further examples.
- **Specific heat capacity** — The energy needed per kilogram of a material to raise its temperature by one kelvin without a phase change, in J/(kg·K), depending on the material, its phase, and the temperature.
- **Latent heat** — The energy per unit mass absorbed or released when a substance changes phase at constant temperature, symbol L, split into a fusion value and a vaporization value.
- **Absolute zero** — The zero of the thermodynamic temperature scale, 0 K, equal to −273.15 °C and −459.67 °F, and the lower bound of the kelvin scale.
- **Enthalpy** — The state function H = U + PV, whose change equals the heat exchanged in a constant-pressure process with only expansion work, which is why tabulated latent heats are enthalpy changes.

## Eli-10

Imagine a single spark flying off a grinding wheel and a bathtub of comfortably warm water. The spark is far hotter than the bath, but it lands on your arm and you barely notice, because it is tiny. The bath is much cooler and could still deliver enough energy to warm you all evening. Hotness and amount of energy are two separate questions, and thermodynamics gives them two separate words. Temperature answers how hot. Heat answers how much energy moved from one thing to another, and it only exists while the moving is happening. That is also why a thermometer never tells you how much energy something has: it only tells you how energetic the molecules are on average, one at a time.

## Eli's Analogy

Picture two water tanks joined by a pipe with a valve. Temperature is the water level in each tank. Heat is the water that flows through the pipe when you open the valve and the levels differ. Flow keeps going until the levels match, then stops on its own — that is thermal equilibrium. Notice what you would never say: no tank contains flow. Each tank contains water, and flow is what happens between them. Swap water for internal energy and flow for heat, and you have the whole lesson.

**Where the analogy breaks down.** The picture misleads in three ways. Heat is not a substance being poured from one place to another, which is exactly the discarded caloric theory the analogy resembles. Rubbing your hands together warms them with no temperature difference at all, because work can raise internal energy too. And no tank ever holds its level steady while water pours in, which is exactly what a melting ice cube does.

## Worked Example

**Take 0.500 kg of ice at −20.0 °C all the way to steam at 120.0 °C at standard pressure.**

Inputs are published values read on 19 August 2026: c_ice = 2090 J/(kg·K), c_water = 4186 J/(kg·K), c_steam = 1520 J/(kg·K), L_f = 334 kJ/kg, L_v = 2256 kJ/kg.

| Step | Process | Calculation | Energy | Share |
|---|---|---|---|---|
| 1 | Warm ice, −20.0 → 0.00 °C | 0.500 × 2090 × 20.0 | 20.90 kJ | 1.36 % |
| 2 | Melt at 0.00 °C | 0.500 × 334 | 167.00 kJ | 10.84 % |
| 3 | Warm liquid, 0.00 → 100.0 °C | 0.500 × 4186 × 100.0 | 209.30 kJ | 13.59 % |
| 4 | Boil at 100.0 °C | 0.500 × 2256 | 1128.00 kJ | 73.23 % |
| 5 | Superheat steam, 100.0 → 120.0 °C | 0.500 × 1520 × 20.0 | 15.20 kJ | 0.99 % |
| | **Total** | | **1540.40 kJ** | 100 % |

Reported as **1.54 MJ to three significant figures**, since the least precise inputs carry three.

The shape of the answer is the lesson. The two flat steps — where the thermometer does not move at all — take **84.1 %** of the total energy, and boiling alone takes **73.2 %**. Boiling that half-kilogram takes **5.39 times** as much energy as heating the same water from freezing to boiling. Every figure here was executed in Bash rather than estimated.

## Common Mistakes

1. **Saying that a hot object contains a lot of heat.** A body contains internal energy, never heat. Heat is energy in transit across a boundary and exists only during the transfer, so it cannot be stored. Rewrite the sentence as "contains a lot of internal energy" or "can transfer a lot of heat", and the physics becomes checkable.
2. **Converting a temperature difference with the formula for a temperature value.** Values carry the offset between scale zeros; differences do not. A rise of 20.0 °C is a rise of 36.0 °F and 20.0 K, not 68.0 °F and 293.15 K. Use ΔF = (9/5)ΔC and ΔK = ΔC for intervals.
3. **Assuming that heat entering a body always raises its temperature.** During a phase change at constant pressure the temperature holds flat while energy keeps flowing in, because that energy goes into molecular potential energy rather than faster molecular motion. Q = mcΔT does not apply across a phase boundary; Q = mL does.
4. **Treating temperature as a measure of how much thermal energy something holds.** Temperature is intensive and reports an average per molecule; stored energy is extensive and scales with mass. A spark at high temperature carries far less energy than a warm bath, which is why Q = mcΔT has an *m* in it.
5. **Reusing one specific heat value across phases or across a wide temperature range.** Specific heat depends on phase and on temperature, and for gases splits into constant-pressure and constant-volume values. Ice, liquid water, and steam take 2090, 4186, and 1520 J/(kg·K) respectively; a heating curve needs the right *c* for each segment.

## Compare / Contrast

| A | B | The distinction |
|---|---|---|
| Temperature | Heat | Temperature is an intensive property a body has at every instant, measured in kelvins or degrees Celsius, reporting the average kinetic energy per molecule. Heat is an extensive energy transfer across a boundary, measured in joules, that exists only while a temperature difference is driving it. One is a state of the body; the other is something that happens to it. |
| Heat | Internal energy | Internal energy is a state function: it has a definite value in every state and is independent of how the system arrived there. Heat is a path quantity: it describes a transfer, not a condition, so a system can have its internal energy changed by heat without ever containing any. |
| Sensible heat | Latent heat | Sensible heating changes temperature within a single phase and follows Q = mcΔT. Latent heating changes phase at constant temperature and follows Q = mL. On a heating curve the first appears as a sloped segment and the second as a plateau, and for water the plateaus dominate the energy total. |
| A temperature value | A temperature difference | Values convert with the offset between scale zeros: 20.0 °C is 68.0 °F and 293.15 K. Differences convert without it: a 20.0 °C rise is a 36.0 °F rise and a 20.0 K rise. Only the difference form belongs in Q = mcΔT. |
| Internal energy | Enthalpy | Internal energy *U* counts the energy of the molecules themselves. Enthalpy *H = U + PV* adds the pressure–volume term, so that at constant pressure with only expansion work the change in *H* equals the heat exchanged. Constant-volume analysis naturally uses *U*; constant-pressure analysis naturally uses *H*. |

## Key Takeaway

Temperature is an intensive property saying how hot a body is; heat is energy crossing a boundary because of a temperature difference. A body stores internal energy, never heat, and during a phase change heat keeps flowing while the thermometer stands perfectly still.

## Practice Question Bank

**1. Which statement describes heat as thermodynamics defines it?** *(recall)*

- A. A property a body possesses in proportion to how hot it is.
- B. **Energy transferred across a system boundary because of a temperature difference.** ✓
- C. The average translational kinetic energy of the molecules in a body.
- D. The total kinetic and potential energy of the molecules in a body.

Heat is defined as an energy transfer driven by a temperature difference, which is why it exists only while the transfer is happening. Option A describes something a body stores, which heat is not. Option C is temperature. Option D is internal energy.

**2. A technician dips the same thermometer into two separate tanks, never letting the tanks touch, and gets the same reading. Which law licenses the conclusion that the two tanks are at the same temperature?** *(understanding)*

- A. **The zeroth law of thermodynamics.** ✓
- B. The first law of thermodynamics.
- C. The second law of thermodynamics.
- D. The third law of thermodynamics.

The zeroth law states that thermal equilibrium is transitive, so two bodies each in equilibrium with the same thermometer are in equilibrium with each other, which is exactly the inference the technician is making. None of the other three laws says anything about the transitivity of thermal equilibrium; the first law is about energy accounting, not about comparing two readings.

**3. A process specification calls for a component to be warmed by 45.0 °C. Expressed as a temperature difference in kelvins and in degrees Fahrenheit, that requirement is:** *(application)*

- A. **45.0 K and 81.0 °F.** ✓
- B. 45.0 K and 113.0 °F.
- C. 318.15 K and 81.0 °F.
- D. 318.15 K and 113.0 °F.

For a difference, ΔK = ΔC, so 45.0 °C is 45.0 K, and ΔF = (9/5)ΔC = 81.0 °F with no offset. The 113.0 figure comes from wrongly adding the 32 offset and the 318.15 figure from wrongly adding 273.15; both offsets apply only to temperature values.

**4. How much energy is required to raise 0.750 kg of liquid water from 18.0 °C to 92.0 °C, with no phase change, taking c = 4186 J/(kg·K)?** *(application)*

- A. 116 kJ
- B. **232 kJ** ✓
- C. 289 kJ
- D. 310 kJ

Q = mcΔT = 0.750 kg × 4186 J/(kg·K) × 74.0 K = 232 323 J, or 232 kJ to three significant figures. The 116 kJ answer uses the specific heat of ice, 289 kJ uses the final temperature instead of the difference, and 310 kJ omits the mass entirely.

**5. One kilogram of liquid water at 0.00 °C is heated to 100.0 °C and then boiled away completely at 100.0 °C, all at standard pressure, with c = 4186 J/(kg·K) and L_v = 2256 kJ/kg. Which analysis of the two stages is correct?** *(analysis)*

- A. **The heating stage takes about 419 kJ and the boiling stage about 2256 kJ, so boiling requires roughly 5.4 times as much energy even though the temperature never changes during it.** ✓
- B. The two stages take about the same energy, because the same kilogram of water is involved in each.
- C. The boiling stage requires no net energy input, because the temperature stays constant throughout it.
- D. The heating stage takes about 2256 kJ and the boiling stage about 419 kJ, because raising temperature is the more demanding step.

Sensible heating gives Q = 1.00 × 4186 × 100.0 = 418 600 J, about 419 kJ, and the phase change gives Q = mL_v = 2256 kJ, a ratio of 5.39. Constant temperature does not mean zero energy: the energy goes into separating molecules rather than speeding them up, which rules out options C and D, and the two stages are nowhere near equal, which rules out option B.

## Sources

- OpenStax, *University Physics Volume 2*, 1.1 Temperature and Thermal Equilibrium — https://openstax.org/books/university-physics-volume-2/pages/1-1-temperature-and-thermal-equilibrium (REFERENCE_ONLY)
- OpenStax, *University Physics Volume 2*, 1.2 Thermometers and Temperature Scales — https://openstax.org/books/university-physics-volume-2/pages/1-2-thermometers-and-temperature-scales (REFERENCE_ONLY)
- OpenStax, *University Physics Volume 2*, 1.4 Heat Transfer, Specific Heat, and Calorimetry — https://openstax.org/books/university-physics-volume-2/pages/1-4-heat-transfer-specific-heat-and-calorimetry (REFERENCE_ONLY)
- OpenStax, *University Physics Volume 2*, 1.5 Phase Changes — https://openstax.org/books/university-physics-volume-2/pages/1-5-phase-changes (REFERENCE_ONLY)
- OpenStax, *University Physics Volume 2*, 3.2 Work, Heat, and Internal Energy — https://openstax.org/books/university-physics-volume-2/pages/3-2-work-heat-and-internal-energy (REFERENCE_ONLY)
- OpenStax, *Chemistry 2e*, 5.3 Enthalpy — https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy (REFERENCE_ONLY)
- OpenStax, *Chemistry 2e*, 1.3 Physical and Chemical Properties — https://openstax.org/books/chemistry-2e/pages/1-3-physical-and-chemical-properties (REFERENCE_ONLY)
- BIPM, SI base unit: kelvin (K) — https://www.bipm.org/en/si-base-units/kelvin (REFERENCE_ONLY)
- BIPM, Resolution 1 of the 26th CGPM (2018) — https://www.bipm.org/en/committees/cg/cgpm/26-2018/resolution-1 (REFERENCE_ONLY)
- BIPM, *The International System of Units (SI)*, 9th edition — https://www.bipm.org/en/publications/si-brochure (CC BY 4.0, attribution required)
- NIST, SI Redefinition: Kelvin — https://www.nist.gov/si-redefinition/kelvin-introduction (REFERENCE_ONLY)
- NIST Special Publication 330 (2019), *The International System of Units (SI)* — https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.330-2019.pdf (REFERENCE_ONLY)
- NIST Guide to the SI, Chapter 8: Comments on Some Quantities and Their Units — https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-8 (REFERENCE_ONLY)
- NIST Chemistry WebBook, SRD 69 — Water (CAS 7732-18-5) — https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Units=SI (REFERENCE_ONLY)

## Related Topics

- `engineering-fundamentals:thermal-and-energy-systems:first-law-of-thermodynamics`
- `engineering-fundamentals:thermal-and-energy-systems:heat-transfer`
- `engineering-fundamentals:engineering-thinking:units-measurement-and-significant-figures`

## Editorial Metadata

- **Topic id:** `engineering-fundamentals:thermal-and-energy-systems:temperature-versus-heat`
- **Editorial status:** READY_TO_PUBLISH
- **Researched at:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** Reference-only sources except the CC BY 4.0 BIPM SI Brochure; no source prose adapted, and NIST WebBook data used only as numerical inputs transformed by calculation.
- **Transformation:** Original prose written from primary standards documents and open textbook sections. All arithmetic — the five-step heating curve, the scale conversions, the (3/2)kT values, and the enthalpy-of-vaporization cross-check derived from NIST WebBook formation enthalpies — was executed in Bash before publication.
