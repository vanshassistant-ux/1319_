# Material Selection

## In 30 Seconds

Choosing a material is a procedure, not a table lookup. Translate the requirement into a function, hard constraints, an objective, and free variables. Screen candidates against the constraints, then rank the survivors on a material index derived from the objective, not on any raw property. Then check the shortlist against manufacturing, service environment, cost per unit of function, supply, and end of life, which is where most selections are actually decided.

## Why This Matters

Selection is the point where materials science becomes engineering, and it is examined in almost every design course because it forces four skills together: translating a vague requirement into testable statements, deriving a ranking quantity from physics rather than intuition, handling cost and sustainability as properties instead of afterthoughts, and knowing the difference between a teaching value and a design allowable. The same method scales from a bracket to a battery casing, and the parts of it that go wrong in practice, supply concentration, manufacturing limits, and service environment, are exactly the parts that dominate industrial engineering decisions now.

## Learning Objectives

- Explain the four steps of the materials selection method and distinguish the role of each.
- Distinguish constraints, objectives, and free variables within the translation step.
- Derive the material index for a light stiff tie and apply the same procedure to a strength-limited beam.
- Evaluate candidate materials on cost per unit of function rather than price per unit mass.
- Analyse why manufacturing, service environment, supply, and end-of-life considerations can overturn an index ranking.
- Distinguish typical published property values from statistically derived design allowables.

## The College Version

### Selection is a procedure, not a lookup

Beginners picture material selection as consulting a table: find the strongest thing you can afford and buy it. The professional version is a procedure, and the version taught in most engineering programmes today comes from Michael Ashby of the University of Cambridge, whose method underlies the property charts and selection software now standard in materials education. Ansys and Granta publish a teaching white paper on the method co-authored by Ashby himself, and it sets out four steps. Translation converts the design requirement into four statements: the function the component performs, the constraints it must satisfy, the objective to be maximised or minimised, and the free variables the designer is still allowed to change. Screening applies the constraints as gates, so a candidate that fails one is removed rather than penalised. Ranking orders the survivors by a single derived quantity called a material index, which encodes the objective. Documentation researches the shortlist for what no property table shows: case histories of failure, manufacturing limits, and global issues affecting availability. Skipping the fourth step is how a technically excellent choice becomes an unbuildable one.

### The free variable is what makes an index necessary

A previous lesson separated constraints, which admit or exclude, from objectives, which rank. Selection adds the piece that makes the whole method work: the free variable. Almost no component has its geometry fully fixed. A tie has a length set by the layout but a cross-section the designer chooses. A panel has a footprint set by the enclosure but a thickness that is open. That freedom is exactly why you cannot rank materials by reading one property. Stiffness can be bought from the material, by picking a higher modulus, or from the geometry, by making the part fatter. Because the designer will adjust the free variable to just satisfy the constraint, the material's real contribution is a combination of properties rather than any single one. Working out which combination is what the derivation below does.

### Deriving an index: the light, stiff tie

Take a tie of fixed length L carrying an axial tensile load. The constraint is a prescribed axial stiffness S, meaning the load divided by the extension it produces. The objective is to minimise mass. The free variable is the cross-sectional area A. Start with the objective, written out in full: m = A L rho, where rho is density. Now write the constraint. For a uniform bar in tension the axial stiffness is S = A E / L, where E is Young's modulus, so satisfying the constraint exactly requires A = S L / E. Substitute that area back into the mass equation and the free variable disappears: m = S L squared times (rho / E). Read the result carefully. The first group, S, is the functional requirement. The second, L squared, is the geometry. The third, rho / E, contains nothing but material properties. Because the three groups separate, the material that minimises mass is the same for every stiffness and every length, which is what makes a single index worth deriving at all. Minimising rho / E means maximising its reciprocal, so the index for a light stiff tie is M = E / rho, the specific stiffness. Change the load case and the index changes. For a beam of fixed cross-sectional shape but free cross-sectional area, required to carry a bending moment without yielding, the same procedure gives M = sigma_y raised to the two-thirds power, divided by rho. Published index tables carry dozens more: E to the one-half over rho for a light stiff beam, E to the one-third over rho for a light stiff panel, and sigma_f over E for an elastic hinge. The index is the ranking quantity, not the raw property, because the raw property answers a question nobody asked.

### How the charts work, and why this lesson describes rather than reproduces them

Ashby-style property charts plot one property against another on logarithmic axes wide enough to hold every material, so each material family occupies a distinct region rather than a point. Logarithmic axes are the whole trick. An index of the form E to the power one-over-a, divided by rho, held at a constant value gives log E = a log rho + constant, so a fixed value of the index is a straight line of slope a on a modulus-density chart: slope one for E over rho, slope two for E to the one-half over rho, slope three for E to the one-third over rho. Sliding that line up and to the left raises the index, and the candidates that remain above and to the left of it are the best performers. Reading a chart this way is a genuinely different skill from reading a table, because it makes a ratio visible. These charts are published works under copyright; the Granta EduPack teaching materials that carry them permit reproduction for teaching purposes only and prohibit commercial use. This lesson therefore describes their construction and leaves you to consult a licensed copy.

### Cost is a material property, and cost per unit of function is the honest form of it

Price per kilogram is a property in exactly the way density is, and it belongs in the analysis rather than in a separate conversation at the end. But price per kilogram answers the wrong question, because you do not buy kilograms, you buy function. Repeat the tie derivation with cost as the objective. Mass is S L squared times rho / E, and cost is that mass multiplied by the price per kilogram C_m, so cost is S L squared times (C_m rho / E). The index to maximise is E divided by the product of C_m and rho. That index and the mass index reward different things, and the same shortlist can reverse between them. Prices also move, which no property table conveys. The U.S. Geological Survey reports that the average U.S. spot price for aluminium ingot rose from 129.5 cents per pound in 2024 to an estimated 180 cents per pound in 2025, a 39 percent increase, in a year when Section 232 tariffs on aluminium imports were imposed at 25 percent in March and doubled to 50 percent for most countries by June. An index computed from last year's price is a snapshot of a moving quantity, and any selection that turns on a small cost margin should be re-run when the margin moves.

### Manufacturing and the service environment decide more selections than the index does

A material that cannot be formed, joined, or finished at your production volume is not a candidate, whatever its index. Process and property are also not independent: the manufacturing route changes the properties of nominally the same alloy, which is why a 2023 Scientific Data paper published measured elastic modulus datasets for additively and conventionally manufactured variants of Ti-6Al-4V, IN718 and 316L stainless steel, determined by the resonance method of ASTM E1875 with a stated room-temperature uncertainty of at most one percent. The authors describe Young's modulus as "a fundamental material parameter for material selection and design". Service environment cuts just as hard. NASA's materials and processes standard for spacecraft, NASA-STD-6016C, requires that materials meet the worst-case useful-life requirements of the application, and its list of properties to be considered in material selection runs well past strength and stiffness: fracture toughness, flammability and offgassing, corrosion, stress corrosion, thermal and mechanical fatigue, glass-transition temperature, coefficient of thermal expansion mismatch, vacuum outgassing, fluids compatibility, moisture resistance, fretting, galling, and susceptibility to electrostatic discharge and contamination. Temperature, corrosion, ultraviolet exposure, wear, and cyclic loading are not footnotes to a selection; they are usually where the shortlist gets cut.

### Sustainability, end of life, and supply are now constraints, not preferences

Embodied energy and recyclability have moved from marketing copy into the constraint list in several industries. ABET, the body that accredits U.S. engineering programmes, already names sustainability, manufacturability, and constructability among the realistic constraints a design must satisfy, alongside codes, regulations, and cost. These things are also quantifiable. The U.S. Department of Energy's 2017 bandwidth study of U.S. aluminium manufacturing reports current-typical on-site energy intensities for 2010 that let you compare routes directly: the primary route sums to 33,295 Btu per pound of aluminium across alumina production, carbon anode production, electrolysis, and primary casting, while the secondary route, processing plus melting and casting of scrap, sums to 2,796 Btu per pound, about 92 percent less on-site energy per pound. Supply is the other half. The USGS reports that U.S. net import reliance for aluminium ran at about 60 percent of apparent consumption in 2025, that aluminium recovered from old scrap was equivalent to about 28 percent of apparent consumption, and that the United States produced no titanium sponge metal at all in 2025 after its last domestic sponge plant closed in 2024, leaving net import reliance at 100 percent. The USGS also publishes a substitutes list for each commodity, which is a supply-risk document in disguise: composites, magnesium, steel and titanium can substitute for aluminium in ground transportation, and copper can replace it in electrical and heat-exchange applications. A selection that depends on a single-source material carries a risk the index cannot see.

### Typical values are not design values, and the deciding constraint is usually the one you left out

Every number in this lesson, and in every property table you will meet in a course, is a typical value. Typical values are for screening, ranking, and preliminary comparison. They are not the values a real design is signed against. NASA-STD-6016C requires that A-, B-, or S-basis statistical design values for mechanical properties be taken from MMPDS for metals or the SAE Composite Materials Handbook for composites, and that the alloy, heat treatment, product specification, product form, and thickness all match the entry those values came from, because the statistics are specific to that exact combination. It also warns that published ambient-temperature properties are usually not appropriate for high-temperature service. That gap between a teaching table and a design allowable is the single most important thing to carry out of this lesson. The second is quieter: selections are usually settled by a constraint the first analysis did not contain. The plant already owns one welding process. The customer's approved-materials list is shorter than the market. The lead time on the winning alloy is fourteen months. None of these appear on a modulus-density chart, and all of them decide. This lesson is educational material, not engineering design guidance. Real material selection for a structure, vessel, vehicle, or device requires a qualified engineer working to the governing code with verified design allowables, and in the United States that responsibility is carried by licensed professional engineers under boards that vary by jurisdiction.

## Key Vocabulary

- **Material index** — A combination of material properties, derived from the objective and the free variable of a specific load case, whose largest value identifies the best-performing material for that case.
- **Translation** — The first step of the selection method, in which a design requirement is rewritten as a function, a set of constraints, an objective, and the free variables the designer may still change.
- **Screening** — Removing candidates that fail a hard requirement, applied as a pass or fail test on a property rather than as a score.
- **Ranking** — Ordering the candidates that survived screening by a single derived quantity that expresses the objective.
- **Free variable** — A design parameter, usually a dimension such as cross-sectional area or thickness, that is not fixed by the requirement and that the designer adjusts to just satisfy a constraint.
- **Specific stiffness** — Young's modulus divided by density; the ranking quantity for a tension member of prescribed axial stiffness whose cross-section is free.
- **Property chart** — A plot of one material property against another on logarithmic axes, wide enough that each material family occupies its own region, on which a fixed value of an index appears as a straight line.
- **Cost per unit of function** — The price of the material needed to deliver a stated performance, rather than the price of a kilogram of it; obtained by multiplying the mass the design actually requires by the price per unit mass.
- **Design value** — A statistically derived allowable property, tied to a specific alloy, heat treatment, specification, product form, and thickness, that a real design may be signed against; distinct from a typical published value.

## Eli-10

Imagine you have to carry a heavy backpack across a long bridge you are also building, and you get to choose what the bridge is made of. You could say steel is stronger than wood, so use steel. But you are the one carrying the bridge material up there, so what you really care about is how little you have to haul to make the bridge stiff enough. That means you care about two numbers at once: how stiff the stuff is, and how heavy it is. Engineers divide one by the other and get a single score. Steel is about three times stiffer than aluminium, but it is also about three times heavier, so their scores come out almost identical. Now change the job. If the bridge has to not snap rather than not sag, the scores change completely and aluminium wins by a lot. The score depends on the job, so you work out the job first and the score second. And after you have a winner, you still have to ask the boring questions: can we actually cut and glue this stuff, will it rot in the rain, can we get it by Tuesday, and can we afford it.

## Eli's Analogy

It is like choosing a runner for a team. You do not pick the fastest person; you pick the best time for the leg they will actually run, because a sprinter and a marathoner are different winners of different races.

**Where the analogy breaks down.** The analogy breaks down in two places. A runner's time is measured directly, while a material index is calculated from properties for a load case that has been idealised. And runners do not have supply chains, factories, or scrap value, whereas a material can lose a selection purely because nobody can machine it or nobody will ship it.

## Worked Example

A portable mast needs a tension member of fixed length that must reach a prescribed axial stiffness, must be bolted to steel fittings, and should be as light as possible. Translation gives function: tie in tension; constraint: prescribed stiffness, plus enough ductility to tolerate bolted joints and handling, taken as a breaking strain of at least 5 percent; objective: minimise mass; free variable: cross-sectional area. Screening on the ductility constraint against typical values from the MIT 3.11 teaching table rejects alumina and soda glass at 0.0 percent and the graphite CFRP laminate at 2.0 percent, and passes mild 1020 steel at 25 percent, 7075-T6 aluminium at 12 percent, spruce parallel to grain at 10 percent, and polycarbonate at 60 percent. Ranking the survivors on M = E/rho, computed in Python: steel 210/7.8 = 26.9 MJ/kg, aluminium 70/2.7 = 25.9 MJ/kg, spruce 9/0.60 = 15.0 MJ/kg, polycarbonate 2.7/1.20 = 2.25 MJ/kg. Steel and aluminium are effectively tied, 1.04 to 1, even though steel's modulus is three times aluminium's, which is the whole point of using the index. Now change only the objective to a light strong beam, index sigma_y^(2/3)/rho: aluminium 500^(2/3)/2.7 = 23.3, spruce 48^(2/3)/0.60 = 22.0, polycarbonate 70^(2/3)/1.20 = 14.2, steel 200^(2/3)/7.8 = 4.38, in units of MPa^(2/3) per Mg/m^3 that mean nothing on their own and rank correctly anyway. The order reverses completely. Finally, cost per unit of function for the tie, index E/(C_m rho). USGS gives aluminium ingot at 180 cents per pound for 2025, which is $1.80/0.45359237 = $3.968 per kilogram using the exact NIST pound-to-kilogram factor, and reports 82 million tonnes of U.S. raw steel in 2025 with an estimated sales value near $149 billion, an implied $1,817 per tonne or $1.817 per kilogram. Then steel gives 210/(1.817 x 7.8) = 14.8 MJ per dollar and aluminium 70/(3.968 x 2.7) = 6.53 MJ per dollar, so steel is 2.27 times better per dollar while being a dead heat per kilogram. Those two price figures rest on different bases, an ingot spot price against an average sales value across all raw steel, so treat the factor of 2.3 as indicative. Every value here is typical and published for teaching; none is a design value.

## Common Mistakes

- **Ranking materials by the raw property named in the constraint, such as picking the highest modulus for a stiffness requirement.** The constraint tells you what must be satisfied; the index tells you who satisfies it most cheaply in mass or money. Derive the index from the objective and the free variable, then rank on that.
- **Comparing materials on price per kilogram.** Compare on cost per unit of function. Substitute the mass the design actually needs into the cost equation, which for a stiffness-limited tie gives the index E/(C_m rho), not 1/C_m.
- **Carrying a typical handbook property into a real design calculation.** Typical values screen and rank. Design allowables are statistically derived and tied to a specific alloy, heat treatment, specification, product form, and thickness, and must be taken from the governing source.
- **Reusing an index across load cases, for example applying E/rho to a part loaded in bending.** Each index is derived for one function, one constraint, and one free variable. Bending with a free cross-sectional area gives E^(1/2)/rho, and a panel of free thickness gives E^(1/3)/rho.
- **Stopping at the ranked list and calling the selection finished.** The fourth step exists because manufacturability, joining, service environment, service history, lead time, supply concentration, and end-of-life handling routinely eliminate the top-ranked candidate.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Screening | Ranking | Screening is a pass or fail test against a constraint and removes candidates; ranking is an ordering of the survivors against an objective and removes nobody. |
| Young's modulus E | Specific stiffness E/rho | E answers how stiff a fixed piece of the material is; E/rho answers how little mass is needed to reach a required stiffness when the cross-section is free, which is the question a weight-limited design actually asks. |
| Typical property value | Design allowable | A typical value is a representative published figure suitable for screening and ranking; an allowable is a statistically derived value tied to a specific alloy, heat treatment, specification, form, and thickness that a design may be signed against. |
| Price per kilogram | Cost per unit of function | Price per kilogram is a market quantity; cost per unit of function multiplies it by the mass the design genuinely requires, which folds density and the relevant stiffness or strength property into the comparison. |

## Key Takeaway

Screen on constraints, rank on an index derived from the objective and the free variable, then let manufacturing, environment, cost per unit of function, and supply have the last word. Typical values choose candidates; only verified design allowables belong in a design.

## Practice Question Bank

**1. In the four-step materials selection method, what does the screening step do?**

A. It orders the surviving candidates by a derived material index.
B. It converts the design requirement into function, constraints, objective, and free variables.
C. It removes candidates that fail a hard constraint, treating each constraint as a pass-or-fail gate.
D. It researches case histories, manufacturing limits, and availability for the shortlist.

*Answer: C.* Screening applies constraints as gates: a candidate either meets a required property limit or is eliminated. Ranking by index is the third step, translation is the first, and researching case histories and availability is the documentation step.

*Difficulty: recall · Skill: Identify the role of each step in the selection procedure · Sources: ansys-granta-materials-selection-white-paper*

**2. A tie of fixed length must reach a prescribed axial stiffness with minimum mass, and its cross-sectional area is free. Which quantity should be maximised to rank candidate materials?**

A. E divided by rho
B. E alone
C. rho divided by E
D. sigma_y raised to the two-thirds power, divided by rho

*Answer: A.* Mass is A L rho, and the stiffness constraint S = A E / L fixes A = S L / E. Substituting gives m = S L^2 (rho/E), so mass is minimised by maximising E/rho. Maximising E alone ignores the mass penalty of a dense material, rho/E is the quantity to minimise rather than maximise, and sigma_y^(2/3)/rho is the index for a strength-limited beam of free section area.

*Difficulty: application · Skill: Derive and select the correct material index for a stated load case · Sources: ansys-granta-materials-selection-white-paper, doitpoms-optimisation-materials-living-systems*

**3. Using typical teaching values, mild 1020 steel scores 26.9 MJ/kg and 7075-T6 aluminium 25.9 MJ/kg on E/rho, but on sigma_y^(2/3)/rho aluminium scores 23.3 against steel's 4.38. What does this pair of results best demonstrate?**

A. The typical values for one of the two materials must be wrong, since a ranking should not change.
B. The ranking depends on the objective and load case, so an index derived for one problem does not transfer to another.
C. Aluminium is the better material in every weight-limited application.
D. Steel should be screened out of any selection in which mass matters.

*Answer: B.* Both index values are computed from the same typical property table; nothing is inconsistent. The stiffness-limited tie index E/rho and the strength-limited beam index sigma_y^(2/3)/rho encode different objectives, so they legitimately rank the same materials differently. Neither result licenses a blanket claim about either material.

*Difficulty: analysis · Skill: Interpret index results and recognise that ranking is objective-dependent · Sources: mit-3-11-material-properties-table, ansys-granta-materials-selection-white-paper, doitpoms-optimisation-materials-living-systems*

**4. Why is price per kilogram an inadequate basis for comparing the cost of two candidate materials?**

A. Because published prices are always confidential and cannot be verified.
B. Because material cost is too small a share of product cost to matter in selection.
C. Because a design buys a required performance, not a mass, so the comparison must include the mass that performance actually demands.
D. Because cost should be treated as a constraint and therefore never enters ranking.

*Answer: C.* For a stiffness-limited tie the required mass is S L^2 (rho/E), so cost is S L^2 (C_m rho / E) and the ranking quantity is E/(C_m rho), not 1/C_m. Prices for major commodity metals are published, material cost frequently dominates, and cost can serve as either a constraint or an objective.

*Difficulty: understanding · Skill: Explain cost as a material property expressed per unit of function · Sources: ansys-granta-materials-selection-white-paper, usgs-mineral-commodity-summaries-2026*

**5. A student ranks materials with typical values from a course table and proposes the winner for a load-carrying part on a real vehicle. What is the most important objection?**

A. Typical values are only valid at room temperature, so the ranking itself is invalid.
B. Typical values support screening and ranking, but a real design requires statistically derived allowables matched to alloy, heat treatment, specification, product form, and thickness.
C. Material indices apply only to aerospace hardware and not to vehicles.
D. The ranking should have used price per kilogram instead of a material index.

*Answer: B.* The ranking is a legitimate preliminary result; the error is carrying typical values into a design. NASA-STD-6016C requires A-, B-, or S-basis values from MMPDS or the SAE Composite Materials Handbook, matched to the exact alloy, heat treatment, specification, form, and thickness. Indices are not domain-limited, and price per kilogram would be a worse basis than an index.

*Difficulty: application · Skill: Distinguish typical published properties from design allowables · Sources: nasa-std-6016c-chg1, mit-3-11-material-properties-table*

## Sources

- **Granta EduPack White Paper: Materials Selection (H. Parnell, K. Tyler, M. F. Ashby)** — Ansys, Inc. / Ansys Academic Development Team and Department of Engineering, University of Cambridge. <https://www.ansys.com/content/dam/amp/2021/august/webpage-requests/education-resources-dam-upload-batch-6/materials-selection-white-paper-papmtsen22.pdf> (usage: REFERENCE_ONLY)
- **Optimisation of Materials Properties in Living Systems (DoITPoMS Teaching and Learning Package)** — DoITPoMS, Department of Materials Science and Metallurgy, University of Cambridge. <https://www.doitpoms.ac.uk/tlplib/optimisation-biomaterials/index.php> (usage: REFERENCE_ONLY)
- **Material Properties (module and property table, 3.11 Mechanics of Materials, D. Roylance)** — Massachusetts Institute of Technology, Department of Materials Science and Engineering. <https://web.mit.edu/course/3/3.11/www/modules/props.html> (usage: REFERENCE_ONLY)
- **Mineral Commodity Summaries 2026** — U.S. Geological Survey, U.S. Department of the Interior. <https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf> (usage: PUBLIC_DOMAIN)
- **Bandwidth Study on Energy Use and Potential Energy Saving Opportunities in U.S. Aluminum Manufacturing (2017)** — U.S. Department of Energy, Advanced Manufacturing Office. <https://www.energy.gov/sites/prod/files/2017/12/f46/Aluminum_bandwidth_study_2017.pdf> (usage: REFERENCE_ONLY)
- **NASA-STD-6016C with Change 1, Standard Materials and Processes Requirements for Spacecraft** — National Aeronautics and Space Administration. <https://standards.nasa.gov/sites/default/files/standards/NASA/C-w/Change-1/1/2023-11-15-NASA-STD-6016C-w-Chg-1-Final_0.pdf> (usage: REFERENCE_ONLY)
- **Elastic modulus data for additively and conventionally manufactured variants of Ti-6Al-4V, IN718 and AISI 316 L** — Scientific Data (Nature Portfolio); B. Rehmer, F. Bayram, L. A. Avila Calderon, G. Mohr, B. Skrotzki, Bundesanstalt fur Materialforschung und -prufung. <https://www.nature.com/articles/s41597-023-02387-6> (usage: ATTRIBUTION_REQUIRED)
- **Criteria for Accrediting Engineering Programs, 2026-2027** — ABET Engineering Accreditation Commission. <https://www.abet.org/accreditation/accreditation-criteria/criteria-for-accrediting-engineering-programs-2026-2027/> (usage: REFERENCE_ONLY)
- **Guide for the Use of the International System of Units (SI), NIST Special Publication 811, 2008 edition (A. Thompson and B. N. Taylor)** — National Institute of Standards and Technology (NIST). <https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication811e2008.pdf> (usage: REFERENCE_ONLY)
- **Licensure** — National Council of Examiners for Engineering and Surveying (NCEES). <https://ncees.org/licensure/> (usage: REFERENCE_ONLY)

## Related Topics

- engineering-fundamentals:materials:material-properties
- engineering-fundamentals:materials:stress-and-strain
- engineering-fundamentals:engineering-thinking:engineering-constraints-and-tradeoffs
- engineering-fundamentals:engineering-thinking:engineering-design-process
- engineering-fundamentals:engineering-practice:safety-factors-and-failure

## Editorial Metadata

- Topic id: `engineering-fundamentals:materials:material-selection`
- Editorial status: READY_TO_PUBLISH
- Estimated minutes: 13
- Researched: 2026-08-19
- Research status: source-verified
- Rights status: Mixed: USGS and NIST government sources are public domain or reference-only; the Ansys/Granta white paper, DoITPoMS TLP (CC BY-NC-SA 4.0), MIT 3.11 table, NASA standard and ABET criteria are reference-only. One quoted phrase of nine words from a CC BY paper is attributed. No property chart, standard table, or source prose is reproduced.
- Transformation: Method and index derivations were re-derived independently and checked against the Ashby-co-authored Granta white paper and the Cambridge DoITPoMS merit-index derivations. All arithmetic in the worked example and prose was executed in Python before publication. Price, energy, and supply figures were extracted from the source PDFs locally. Prose is original throughout.
- Note: this lesson is educational material, not engineering design guidance. Every property value in it is a typical published value for teaching, not a design allowable.
