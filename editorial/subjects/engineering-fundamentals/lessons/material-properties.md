# Material Properties

## In 30 Seconds

A material property is a measured response: what a material does when you pull it, heat it, run current through it, or leave it in salt spray. Engineers sort those responses into mechanical, physical, chemical, and manufacturing-related families. The responses trace back to bonding and microstructure, and they shift with alloy, heat treatment, direction, temperature, and how fast the load arrives. That is why a handbook number is a typical value for a stated condition, never a promise about the part in front of you.

## Why This Matters

Every later materials topic runs on this vocabulary. Stress and strain, material selection, and failure analysis all assume you already know that strength, stiffness, toughness, and ductility name four different behaviors. Confusing them is expensive: parts get specified in hard materials when the job needed tough ones, and in stiff materials when the job needed strong ones. The habit this lesson builds is the useful part. Which property? Measured by which test? On which alloy, in which temper, in which direction, at what temperature? And with how much scatter? That is the difference between a number you can quote and a number someone can build on. Aviation regulation, for one, will not accept a table value at all.

## Learning Objectives

- Define a material property as a measured response under stated conditions and classify properties as mechanical, physical, chemical, or manufacturing-related.
- Distinguish strength from stiffness, hardness from toughness, hardness from strength, and ductile from brittle behavior.
- Explain how bonding, material class, grain structure, alloying, and heat treatment produce a material's characteristic properties.
- Analyze why a tabulated property value is a typical value rather than a design value, and name the sources of variation behind it.
- Match the tension test, the hardness scales, notched-bar impact testing, and fatigue testing to the properties each one actually measures.

## The College Version

### A property is a measured response, not a label

A material does not contain strength the way a bottle contains water. A material property is the outcome of a defined experiment: apply a stated stimulus under stated conditions, measure what happens, and report the result. Change the experiment and you get a different number, which is why every credible property value travels with conditions attached — the alloy, the temper or heat-treatment condition, the product form, the direction relative to rolling, the temperature, and often the rate of loading. Engineers organize the resulting numbers into four families. Mechanical properties describe the response to mechanical loading: strength, stiffness, hardness, toughness, ductility, fatigue resistance, and creep. Physical properties describe bulk behavior that has nothing to do with an applied load: density, melting or softening temperature, thermal expansion, thermal conductivity, and electrical conductivity. Chemical properties describe how the material interacts with its environment: corrosion resistance and oxidation resistance. Manufacturing-related properties describe how the material behaves in the shop: machinability, weldability, formability, and castability. The families matter because they answer different design questions: a part that must not sag needs a mechanical answer, one that must not warp in the sun needs a physical one, one that must survive road salt needs a chemical one, and one that must be produced ten thousand times a week needs a manufacturing one. A material that wins on the first three can still lose on the fourth.

### The mechanical family, term by term

Strength is resistance to loads that would break the material or deform it permanently. Stiffness is resistance to deflection while the material is still springing back elastically. These are independent: a spring steel and a mild steel have very different strengths but nearly the same stiffness, and a rubber band is far more extensible than it is weak. If a part is failing, you need strength; if a part is bouncing, buzzing, or sagging too far under a load it survives, you need stiffness. Hardness is resistance to localized plastic deformation, penetration, indentation, and scratching at the surface, and resistance to wear by friction or erosion generally rises with it. Toughness is the energy the material absorbs before it fractures, which is why it is measured by breaking a notched bar with a swinging pendulum rather than by pulling slowly. Ductility is the ability to undergo large permanent deformation in tension without rupturing; a material that lacks it is called brittle. Ductility is not fixed — it rises with temperature and falls with lower temperature, with cold working, and with irradiation, so the same steel can be ductile in a warm shop and brittle on a winter night. Fatigue resistance is the ability to survive many cycles of a load that is comfortably below the load that would break the part once. Creep is permanent deformation that accumulates with time under a constant load, and it becomes progressively easier as temperature rises. The formal definitions of stress, strain, elastic modulus, yield strength, and ultimate tensile strength, and the stress-strain curve that ties them together, belong to the Stress and Strain lesson in this unit; this lesson uses the words and hands you off there for the curve.

### Physical, chemical, and manufacturing properties

Density sets how much a given shape weighs, which drives fuel burn, shipping cost, and how hard a moving part is to stop. Melting or softening temperature sets the ceiling on service temperature and on which processes can shape the material. Thermal expansion sets how much a part grows when it is heated, and it becomes a design problem the moment two materials with different expansion coefficients are fastened together or a long member is restrained at both ends. Thermal conductivity decides whether a part spreads heat or traps it; electrical conductivity decides whether it is a conductor, an insulator, or a semiconductor. Chemical properties cover degradation in service. General corrosion attacks a surface uniformly. Galvanic corrosion appears when two dissimilar metals sit in electrical contact in an electrolyte and the less noble one becomes the anode and dissolves — which is why a designer worries about which fastener touches which panel, and why sacrificial zinc anodes work. Localized corrosion concentrates attack at small sites and does the most damage when it teams up with stress, fatigue, or erosion. Stress-corrosion cracking occurs at grain boundaries under tensile stress in an environment that would be harmless without the stress, and it propagates at stress levels far below what would fracture the material in clean conditions. Manufacturing-related properties are the least standardized of the four families. Machinability, weldability, formability, and castability are usually expressed as relative ratings against a reference material rather than as absolute measured constants, and they depend as much on the process and the shop as on the material. That does not make them optional: a material that cannot be welded in your facility is not a candidate, however good its mechanical numbers look.

### Where properties come from: class, bonding, and microstructure

Introductory materials science sorts engineering materials into four classes, and the sorting is useful because bonding explains behavior. In metals, the outer electrons are delocalized and mobile, which is why metals conduct heat and electricity well and why layers of atoms can slide over one another, giving ductility. In ceramics, ionic and covalent bonds lock atoms into rigid arrangements with no easy path for that sliding, which is why ceramics are hard, chemically resistant, electrically non-conductive, and brittle — hardness and brittleness arriving together from the same cause. Polymers are long covalent chains held to one another by much weaker forces, which is why they are low in density and comparatively soft and flexible. Composites deliberately combine a matrix with a reinforcement so the pair outperforms either constituent, and they carry the direction-dependence of the reinforcement with them. Below the class level, structure keeps mattering. A solid metal is a mosaic of grains, each a continuous crystal lattice, separated by grain boundaries that are regions of misfit a few atoms wide. Grain boundaries obstruct the sliding that produces permanent deformation, so average grain size governs behavior: smaller grains raise tensile strength and tend to raise ductility. That is not a free improvement — larger grain size is preferred where high-temperature creep resistance matters, so grain refinement is a trade-off keyed to service temperature, not a universal upgrade. Grain orientation matters too: rolling a metal far enough in one direction can produce preferred orientation, desirable in some applications and harmful in others, and a direct structural source of anisotropy. Alloying and heat treatment are the two levers that change properties without changing the base element. An alloy is a mixture of two or more materials, at least one of them a metal, and small additions do specific things: nickel below roughly five percent raises the toughness and ductility of steel without raising hardness because it forms no carbides, chromium forms a carbide that hardens the steel, and stainless steels are alloy steels carrying at least twelve percent chromium for corrosion resistance. Heat treatment rearranges the same atoms — annealing a cold-worked metal restores ductility, while quenching and tempering can produce a hard, strong condition from the same composition. Two bars of the same alloy designation in different tempers are not interchangeable.

### Real materials scatter, and a handbook value is not a design value

Test twenty specimens cut from the same production heat and you will get twenty different numbers. Property values vary with the melt, the mill, the product form, the direction the specimen was cut, the temperature at test, and how quickly the load was applied. A table entry is a central or typical value for the conditions the table names; it is not a floor, and treating it as one is one of the most consequential mistakes a student can carry into practice. Regulated industries do not treat it as one either. For transport-category airplanes, 14 CFR 25.613 requires material strength properties to be based on enough tests to establish design values statistically, and requires those design values to be chosen so the probability of structural failure due to material variability is minimized: 99 percent probability with 95 percent confidence where the load is eventually carried by a single member whose failure would cost structural integrity, and 90 percent probability with 95 percent confidence for redundant structure where load would redistribute. Those two levels correspond to the A-basis and B-basis values familiar from aerospace materials handbooks. The FAA's Advisory Circular 25.613-1 draws the same line in words: material strength properties are what the material does, while material design values are statistically established numbers chosen so material variability will not cause failure. The same circular notes that typical values are used for moduli, requires temperature and moisture effects to be considered across the operating envelope, and directs that testing account for anisotropy where the material is known to be anisotropic. Read that as a general lesson rather than an aviation footnote: a property number is only meaningful with its conditions, and the gap between a typical value and a value you can design to is bridged by testing and statistics, not by rounding down.

### How the numbers are produced

Knowing which test produced a number tells you what the number means. The tension test, standardized in the United States as ASTM E8/E8M, pulls a specimen of defined geometry to failure and yields yield strength, yield point elongation, tensile strength, elongation, and reduction of area — strength and ductility from a single experiment. Hardness testing presses a defined indenter into the surface with a defined force and reports the result on a scale named for the method: ASTM E18 covers Rockwell and Rockwell superficial hardness, ASTM E10 covers Brinell, and ASTM E92 covers Vickers and Knoop. These are different experiments, not different units for one quantity. Hardness tests are empirical rather than measurements of a single fundamental property, and there is no exact mathematical relation between any two of the methods; ASTM E140 publishes conversion tables, but organizes them by material family — non-austenitic steels, nickel alloys, cartridge brass, austenitic stainless plate and sheet — precisely because the relationship depends on composition, grain structure, and heat treatment, and treats conversion as an approximate process. Good practice is to report a converted reading as converted. Because the scales are conventions rather than fundamental quantities, they need anchoring: NIST manufactures hardness Standard Reference Materials as transfer standards for verifying testing machines, currently covering the Rockwell C and N scales and the Knoop and Vickers microhardness scales. Impact testing, standardized as ASTM E23, breaks a notched bar with a Charpy or Izod pendulum and reports absorbed energy, deliberately combining a notch, a high loading rate, and often a specified temperature. Because the notch and specimen geometry are part of the result, impact energy is a comparative measure — the same material with a different notch yields a different number. Fatigue testing under ASTM E466 cycles an axial load at constant amplitude on a specimen, not a structure; the practice itself limits its results to design use only where the test realistically simulates service conditions. Creep testing holds a load at temperature and measures deformation against time. Each test answers one question, and no test answers another test's question.

### What this lesson is and is not

This is educational material. Nothing here is engineering design guidance, and no number in this lesson may be used to size, verify, or approve a real part, structure, pressure vessel, or machine. Real design requires a licensed engineer working to the governing code, using material data qualified for the specific alloy, temper, product form, and service environment, with the appropriate safety margins for the consequence of failure. Every property value given in this lesson is a typical published value stated with its condition, drawn from open educational and government sources; none is taken from a proprietary design standard, and none should be treated as an allowable. Three neighboring lessons carry the rest of this ground. Stress and Strain builds the stress-strain curve and defines modulus, yield, and ultimate strength formally. Material Selection covers how to move from a set of requirements to a chosen material. Safety Factors and Failure covers failure theories and how margins are set. This lesson's job is the vocabulary the other three assume you already have.

## Key Vocabulary

- **Material property** — A measured response of a material to a defined stimulus — load, heat, electric current, or chemical environment — reported together with the conditions under which it was measured.
- **Stiffness** — Resistance to elastic deflection under load; a stiff part moves very little before it springs back to shape.
- **Hardness** — Resistance to localized plastic deformation, indentation, penetration, and scratching at a surface, measured by pressing a defined indenter into the material.
- **Toughness** — The energy a material absorbs before it fractures, conventionally measured by breaking a notched bar with a swinging pendulum.
- **Ductility** — The ability to undergo large permanent deformation in tension without rupturing; its absence is called brittleness.
- **Creep** — Permanent deformation that accumulates with time under a constant load or stress, becoming progressively easier as temperature rises.
- **Anisotropy** — The condition in which measured properties differ depending on direction within the material, often produced by rolling, extrusion, or fiber layup.
- **Microstructure** — The arrangement of grains, phases, and boundaries visible under a microscope, which largely governs how a metal behaves mechanically.
- **Alloy** — A mixture of two or more materials, at least one of them a metal, made to obtain behavior the base element alone does not provide.
- **Design value** — A strength number established by statistical analysis of test data so that the probability of failure caused by material variability is minimized; distinct from a typical tabulated value.

## Eli-10

Instead of memorizing a list of properties, treat each one as the answer to a question somebody actually asked. Will it break? That question is about strength. Will it bend too far even though it holds? Stiffness. Will the surface get scratched and worn? Hardness. Will it shatter if something slams into it, or dent and survive? Toughness. Will it bend into a new shape without cracking? Ductility. Will it die after a million small wiggles? Fatigue resistance. Will it slowly sag over a hot year? Creep. Will it be heavy? Density. Will it grow when the sun hits it? Thermal expansion. Will it rust? Corrosion resistance. Can the shop actually cut, bend, and weld it? Manufacturing properties. Each answer comes from its own test, and none of them can be guessed from the others.

## Eli's Analogy

A material's property list is like the results sheet from a track-and-field meet. The shot put, the high jump, the hurdles, and the 1500 meters each measure one thing, and a huge shot-put number tells you almost nothing about the 1500-meter time. You also cannot convert one into the other — there is no formula that turns meters thrown into minutes run. Different hardness scales are like different events too: Rockwell, Brinell, and Vickers each press a different indenter with a different force, so their numbers are separate results, not the same result in different units.

**Where the analogy breaks down.** The analogy breaks in three places. Athletic events are unrelated by design, while material properties do share underlying causes — bonding and microstructure — so within one alloy family hardness and strength often move together, which is why approximate conversion tables exist at all. Second, an athlete's result is one person's performance, while a published property value is a statistic drawn from many specimens that scatter, so the honest comparison is to a season's average with a spread, not to a single race. Third, you cannot change an athlete's shot-put distance by heating them or by rolling them in one direction; heat treatment, cold work, temperature, and direction change material properties substantially.

## Worked Example

Take a solid square bar 2.00 m long with a 40.0 mm by 40.0 mm cross-section, and compare it in steel and in aluminium using typical published values, not design values. The cross-sectional area is 0.0400 m x 0.0400 m = 0.00160 m^2, so the volume is 0.00160 m^2 x 2.00 m = 0.00320 m^3. Using typical tabulated densities of 7.8 x 10^3 kg/m^3 for iron or steel and 2.7 x 10^3 kg/m^3 for aluminium, the steel bar has a mass of 7.8 x 10^3 kg/m^3 x 0.00320 m^3 = 25.0 kg and the aluminium bar 2.7 x 10^3 kg/m^3 x 0.00320 m^3 = 8.64 kg. The steel bar is 2.9 times as heavy — a 16.3 kg saving, about 65 percent of the steel bar's mass. Now heat both by 40 degrees Celsius. Using typical linear expansion coefficients at 20 degrees Celsius of 12 x 10^-6 per degree Celsius for iron or steel and 25 x 10^-6 per degree Celsius for aluminium, the steel bar grows 12 x 10^-6 /C x 2.00 m x 40 C = 0.96 mm and the aluminium bar 25 x 10^-6 /C x 2.00 m x 40 C = 2.00 mm, a difference of about 1.0 mm over two metres. Two conclusions follow. Physical properties alone already force a real trade — the lighter bar is also the one that moves more with temperature, which matters if it is bolted to something steel. And every number here is a typical value for an unspecified alloy at room temperature; a real bar of 6061-T6 or of A36 would differ, which is exactly why design values are established by testing rather than read from a table.

## Common Mistakes

- **Mistake:** Assuming a stronger material is automatically a stiffer one, so that upgrading the alloy will stop a part from deflecting.
  **Correction:** Strength and stiffness are independent properties. Heat-treating a steel to a much higher strength barely changes how far it deflects under a load it survives; if deflection is the problem, the fix is usually geometry or a different material class, not a stronger temper of the same metal.
- **Mistake:** Converting a hardness reading from one scale to another and reporting it as if it had been measured on that scale.
  **Correction:** Hardness tests are empirical and there is no exact mathematical relation between any two methods. Conversion tables such as ASTM E140 are organized by material family and are approximate by the standard's own account, so a converted number should be reported as converted, or the part should be retested on the scale you need.
- **Mistake:** Treating a hard material as a tough one, and specifying maximum hardness for a part that takes impacts.
  **Correction:** Hardness resists surface indentation and wear; toughness is the energy absorbed before fracture. Increasing hardness often reduces toughness, so a very hard part can be the one that shatters. The two are measured by completely different tests for a reason.
- **Mistake:** Reading one number out of a property table and using it as if it were a guaranteed minimum for the material in hand.
  **Correction:** Tabulated values are typical values for the alloy, temper, product form, direction, and temperature the table names. Real materials scatter, and design values are established statistically from test data — 14 CFR 25.613, for example, sets explicit probability and confidence levels rather than accepting a handbook entry.
- **Mistake:** Treating a property as fixed for an element — 'steel is ductile', 'aluminium expands a lot' — regardless of condition.
  **Correction:** Composition, heat treatment, cold work, grain size, direction of testing, temperature, and loading rate all move the numbers. The same steel can be ductile at room temperature and brittle when cold, and two bars with the same alloy designation in different tempers are not interchangeable.

## Compare / Contrast

| A | B | The distinction |
| --- | --- | --- |
| Strength | Stiffness | Strength is resistance to breaking or permanently deforming; stiffness is resistance to deflecting while still springing back. They vary independently, so a material can be strong and flexible or weak and rigid. Ask which failure you are preventing: fracture, or too much movement. |
| Hardness | Toughness | Hardness resists indentation, scratching, and wear at the surface; toughness is the energy absorbed before fracture. They frequently trade against one another, so the hardest candidate is often the one most likely to shatter under an impact. Different tests, different questions. |
| Ductile behavior | Brittle behavior | A ductile material deforms visibly and absorbs energy before it lets go; a brittle one separates with little warning. This is a behavior in a condition rather than a permanent identity — the same steel can be ductile warm and brittle cold, and cold work or irradiation pushes it toward brittle. |
| Hardness | Strength | Hardness is a surface indentation response; strength is a bulk load-carrying response. They correlate within a given material family, which is why approximate rules of thumb exist for particular steels, but the correlation does not transfer across families and a hardness reading is not a substitute for a tension test. |
| Typical handbook value | Design value | A handbook value is a central value for named conditions, useful for comparing candidates and estimating. A design value is a statistically established number, set at a stated probability and confidence so that material variability will not cause failure, and it is what a regulated design must actually use. |

## Key Takeaway

A material property is the result of a specific test on a specific material in a specific condition, and the mechanical, physical, chemical, and manufacturing families answer different design questions. Strength, stiffness, hardness, and toughness are four separate behaviors, not synonyms; and because real materials scatter with processing, direction, temperature, and rate, a published value is a typical value, not a design value.

## Practice Question Bank

**1. Which property describes a material's resistance to deflecting under a load it is still springing back from?**

A. Stiffness
B. Hardness
C. Toughness
D. Ductility

*Answer: A.* Stiffness is resistance to elastic deflection — how far a part moves before it springs back. Hardness is resistance to localized indentation, penetration, and scratching at a surface. Toughness is the energy absorbed before fracture, measured by breaking a notched bar. Ductility is the ability to deform permanently in tension without rupturing. Only stiffness is about deflection under an elastic load.
*Difficulty: recall · Skill: Recalling the definitions of the core mechanical properties and telling them apart · Sources: doe-hdbk-1017-1-93-material-science-v1, libretexts-intro-mech-eng-materials-science*

**2. A technician measures a steel part on the Rockwell C scale and needs a Brinell number for a report. Why can the conversion not be treated as exact?**

A. Rockwell and Brinell use the same indenter, so any difference is purely instrument error
B. Brinell numbers are defined only for non-metals, so no valid conversion exists
C. Hardness tests are empirical and do not measure one identical quantity, so the relation between two methods depends on the specific material and is only approximate
D. The conversion is exact for steels; it becomes approximate only above the upper limit of the Rockwell C scale

*Answer: C.* Hardness tests are empirical rather than measurements of one fundamental quantity, and there is no exact mathematical relation between any two methods. ASTM E140 supplies conversion tables but organizes them by material family and treats conversion as approximate, which is why a converted reading should be reported as converted. Rockwell and Brinell use different indenters and forces, so the first option is wrong. Brinell is a metals test, so the second is wrong. The relation is approximate throughout, not only at the top of the scale, so the fourth is wrong.
*Difficulty: understanding · Skill: Explaining why hardness scales are separate empirical results rather than different units for one quantity · Sources: doe-hdbk-1017-1-93-material-science-v1, astm-e140-hardness-conversion-tables, astm-e18-rockwell-hardness, astm-e10-brinell-hardness*

**3. An engineer refines the grain size of a steel to raise its room-temperature tensile strength. Which consequence should they anticipate?**

A. Ductility will necessarily collapse, because finer grains always embrittle a metal
B. High-temperature creep resistance may suffer, because larger grain size is preferred where creep at temperature governs
C. Density will rise in proportion to the reduction in grain size
D. The steel will no longer respond to heat treatment, because grain refinement fixes the microstructure permanently

*Answer: B.* Smaller grain size increases tensile strength and tends to increase ductility, so the first option reverses the effect on ductility. The real trade-off is with temperature: a larger grain size is preferred for improved high-temperature creep properties, so refining grains to win at room temperature can cost performance in a hot service. Density is a bulk property set by composition and packing, not by grain size, so the third is wrong; and refined material can still be heat treated, so the fourth is wrong.
*Difficulty: application · Skill: Applying the structure-property relationship for grain size, including its trade-off with service temperature · Sources: doe-hdbk-1017-1-93-material-science-v1*

**4. Under 14 CFR 25.613, a load is eventually carried through a single member whose failure would cause loss of structural integrity. What probability and confidence must the material design values assure?**

A. 90 percent probability with 95 percent confidence
B. 95 percent probability with 90 percent confidence
C. 50 percent probability with 95 percent confidence, since typical values are acceptable for single load paths
D. 99 percent probability with 95 percent confidence

*Answer: D.* The regulation sets 99 percent probability with 95 percent confidence for a single member whose failure would cost structural integrity, and the lower 90 percent probability with 95 percent confidence for redundant structure where load safely redistributes — so the first option names the redundant-structure case. The second inverts the numbers. The third contradicts the rule's premise: design values must be chosen to minimize the probability of failure due to material variability, which is exactly why a typical value is not acceptable.
*Difficulty: application · Skill: Applying the distinction between typical values and statistically established design values to a stated load path · Sources: ecfr-14-cfr-25-613-material-design-values, faa-ac-25-613-1-material-design-values*

**5. A bracket must survive being struck by dropped tools in an unheated warehouse. Which test result is most directly relevant, and why?**

A. Rockwell hardness, because a harder bracket absorbs more energy before fracturing
B. Notched-bar impact energy at the service temperature, because it measures energy absorbed before fracture under a notch and a high loading rate
C. Density, because a denser bracket resists impact in proportion to its mass
D. Constant-amplitude axial fatigue life, because a single impact is the first cycle of a fatigue sequence

*Answer: B.* Notched-bar impact testing under ASTM E23 applies a single force at a high loading rate at a notch, at a specified temperature, and reports absorbed energy — which is what toughness in cold service means. Hardness measures surface indentation resistance and often trades against toughness, so a harder bracket can be the one that shatters. Density says nothing about fracture behavior. Fatigue testing under ASTM E466 addresses many cycles of a load well below the single-application breaking load, not one impact, and the practice itself restricts its results to conditions that realistically simulate service.
*Difficulty: analysis · Skill: Selecting the test that measures the property a stated service condition actually stresses · Sources: astm-e23-notched-bar-impact-testing, astm-e466-axial-fatigue-testing, doe-hdbk-1017-1-93-material-science-v1*

## Sources

- **doe-hdbk-1017-1-93-material-science-v1** — DOE Fundamentals Handbook: Material Science, Volume 1 of 2 (DOE-HDBK-1017/1-93). U.S. Department of Energy. <https://www.osti.gov/biblio/10144933> (usage: PUBLIC_DOMAIN; checked 2026-08-19)
- **ecfr-14-cfr-25-613-material-design-values** — 14 CFR 25.613 — Material strength properties and material design values. Federal Aviation Administration, in the Electronic Code of Federal Regulations (Office of the Federal Register / Government Publishing Office). <https://www.ecfr.gov/current/title-14/section-25.613> (usage: PUBLIC_DOMAIN; checked 2026-08-19)
- **faa-ac-25-613-1-material-design-values** — Advisory Circular 25.613-1: Material Strength Properties and Material Design Values (8/6/03). Federal Aviation Administration, U.S. Department of Transportation. <https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_25_613-1.pdf> (usage: PUBLIC_DOMAIN; checked 2026-08-19)
- **nist-hardness-standard-reference-materials** — Hardness Standard Reference Materials (SRM). Materials Science and Engineering Division, National Institute of Standards and Technology. <https://www.nist.gov/mml/materials-science-and-engineering-division/mechanical-performance-group/hardness-standard> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **astm-e140-hardness-conversion-tables** — ASTM E140-12b(2019)e1: Standard Hardness Conversion Tables for Metals — Relationship Among Brinell, Vickers, Rockwell, Superficial, Knoop, Scleroscope, and Leeb Hardness. ASTM International (public abstract page). <https://store.astm.org/e0140-12br19e01.html> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **astm-e8-e8m-tension-testing-metallic-materials** — ASTM E8/E8M-24: Standard Test Methods for Tension Testing of Metallic Materials. ASTM International (public abstract page). <https://store.astm.org/e0008_e0008m-24.html> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **astm-e18-rockwell-hardness** — ASTM E18-25: Standard Test Methods for Rockwell Hardness of Metallic Materials. ASTM International (public abstract page). <https://store.astm.org/standards/e18> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **astm-e10-brinell-hardness** — ASTM E10: Standard Test Method for Brinell Hardness of Metallic Materials. ASTM International (public catalogue page). <https://store.astm.org/standards/e10> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **astm-e92-vickers-knoop-hardness** — ASTM E92: Standard Test Methods for Vickers Hardness and Knoop Hardness of Metallic Materials. ASTM International (public catalogue page). <https://store.astm.org/standards/e92> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **astm-e23-notched-bar-impact-testing** — ASTM E23-25: Standard Test Methods for Notched Bar Impact Testing of Metallic Materials. ASTM International (public abstract page). <https://store.astm.org/standards/e23> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **astm-e466-axial-fatigue-testing** — ASTM E466-21: Standard Practice for Conducting Force Controlled Constant Amplitude Axial Fatigue Tests of Metallic Materials. ASTM International (public abstract page). <https://store.astm.org/e0466-21.html> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **openstax-college-physics-2e-density** — College Physics 2e, Section 11.2: Density (Table 11.1, Densities of Various Substances). OpenStax, Rice University. <https://openstax.org/books/college-physics-2e/pages/11-2-density> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **openstax-college-physics-2e-thermal-expansion** — College Physics 2e, Section 13.2: Thermal Expansion of Solids and Liquids (Table 13.2, Thermal Expansion Coefficients at 20 degrees Celsius). OpenStax, Rice University. <https://openstax.org/books/college-physics-2e/pages/13-2-thermal-expansion-of-solids-and-liquids> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **chem-libretexts-classes-of-materials** — 12.1: Classes of Materials (Chemistry: The Central Science map). Chemistry LibreTexts. <https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/12%3A_Solids_and_Modern_Materials/12.01%3A_Classes_of_Materials> (usage: REFERENCE_ONLY; checked 2026-08-19)
- **libretexts-intro-mech-eng-materials-science** — Introduction to Mechanical Engineering, Chapter 4: Materials Science and Engineering. Engineering LibreTexts (California State Polytechnic University, Humboldt course shell). <https://eng.libretexts.org/Courses/California_State_Polytechnic_University_Humboldt/Introduction_to_Mechanical_Engineering/Chapter_4%3A_Materials_Science_and_Engineering> (usage: REFERENCE_ONLY; checked 2026-08-19)

## Related Topics

- `engineering-fundamentals:materials:stress-and-strain`
- `engineering-fundamentals:materials:material-selection`
- `engineering-fundamentals:engineering-practice:safety-factors-and-failure`
- `engineering-fundamentals:engineering-thinking:units-measurement-and-significant-figures`

## Editorial Metadata

- Topic id: `engineering-fundamentals:materials:material-properties`
- Editorial status: **READY_TO_PUBLISH**
- Estimated minutes: 11
- Researched at: 2026-08-19
- Research status: source-verified
- Rights status: Government and reference-only sources; no source prose adapted. ASTM standards used by designation, title and public scope only — no standard text, table, or design value reproduced. OpenStax and LibreTexts pages used solely to confirm numeric and taxonomic anchors under REFERENCE_ONLY terms.
- Transformation: Written from primary and open sources read in full or in relevant part: DOE-HDBK-1017/1-93 Volume 1 (OSTI full-text PDF), 14 CFR 25.613 (eCFR renderer API), FAA AC 25.613-1 (PDF), NIST hardness SRM page, ASTM public abstract pages for E8/E8M, E10, E18, E23, E92, E140 and E466, and OpenStax and LibreTexts pages for numeric and taxonomic anchors. All arithmetic in the worked example was executed with python3 before publication. The machine-generated draft contributed nothing but the title.
- Calculations verified: Bar geometry, mass comparison and thermal expansion figures computed with python3; cross-section 0.00160 m^2, volume 0.00320 m^3, steel 25.0 kg, aluminium 8.64 kg, ratio 2.89, expansion 0.96 mm and 2.00 mm over 40 degrees Celsius.
- Source count: 15; question count: 5

> This is educational material, not engineering design guidance. No value in this lesson may be used to size, verify, or approve a real part, structure, pressure vessel, or machine. Real design requires a licensed engineer working to the governing code.
