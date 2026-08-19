# CAD Basics

## In 30 Seconds

CAD is a system for building an exact digital model of a part or assembly and for producing the documentation that travels with it. In parametric feature-based CAD you draw a sketch, constrain it, and turn it into features, and the software keeps that sequence as an editable history. Dimensions become parameters, so changing one number rebuilds the model. The real skill is design intent: building a model that changes the way you meant when someone edits it a year later.

## Why This Matters

Design work is handed off as model data now, not as paper. A 1999 study commissioned by NIST put the cost of imperfect interoperability on the U.S. automotive supply chain at no less than one billion dollars a year, and found that by far the largest share of it went to repairing or re-entering files that downstream software could not use. Whether your model survives that handoff is mostly decided in the first ten minutes of building it. Learning CAD as a modeling discipline rather than as a menu sequence transfers between packages, and it is what makes the work that follows the model - machining, inspection, simulation, revision control - possible rather than painful.

## Learning Objectives

- Define parametric feature-based modeling and explain how sketches, constraints, parameters and features combine into an editable feature tree.
- Explain design intent and analyze why an under-constrained sketch or a chained dimension scheme produces a model that breaks when a parameter changes.
- Distinguish history-based parametric modeling from direct modeling and evaluate which one fits a given situation.
- Explain how assembly mates remove degrees of freedom and how data derived from a master model stays associative with it.
- Compare native, neutral and mesh file formats and evaluate what each one loses when a model is exchanged.
- Evaluate the limits of a CAD model as evidence about manufacturability and about simulation results.

## The College Version

### What CAD is, and what it is not

A CAD model is a mathematical description of geometry, not a picture of it. Mechanical CAD commonly stores a part as a boundary representation: exact analytic and spline surfaces trimmed and stitched into a closed volume, which is the geometry that gets mapped into exchange files and handed to manufacturing and metrology software. Because the shape is described rather than drawn, the software can compute things from it - volume, surface area, centre of mass, moments of inertia, section views, clearances - instead of asking you to measure a drawing.

What CAD does not do is decide whether the part is any good. It enforces the constraints you gave it and no others, and it will build an elegant, watertight, fully dimensioned model of something that cannot be machined, cannot be assembled, or will not carry its load. The value of the model is entirely a function of the judgment poured into it, which is why NIST's economic work on model-based engineering frames design data in terms of accuracy, completeness and how well it transfers, rather than in terms of whether a shape exists. CAD is where engineering judgment gets recorded and passed on. It is not where judgment happens.

### Parametric feature-based modeling

The dominant paradigm in mechanical CAD is parametric, history-based, feature-based modeling. It works in three layers.

First, the sketch. You draw a two-dimensional profile on a plane and then constrain it. Commercial systems split sketch constraints into two kinds: geometrical constraints, which state relationships without numbers (coincident, parallel, perpendicular, tangent, concentric, symmetric), and dimensional constraints, which state lengths, angles and positions. A sketch that carries exactly enough of both to leave nothing free to move is called iso-constrained, or fully constrained; systems typically signal that difference visually, so you can see at a glance which geometry is still loose.

Second, features. A sketch becomes solid through a feature: extrude, revolve, sweep or loft. Further features modify what exists - fillet, chamfer, shell, hole, draft - or repeat it, through linear, circular and mirrored patterns. Each feature is an operation with its own parameters, and each can reference geometry created by earlier features.

Third, the tree. The system records every feature in the order it was created. That ordered history is the model: edit a dimension near the top and the software replays everything below it. This is the source of parametric CAD's power and of its characteristic failure mode. Because later features depend on earlier ones, an edit can leave a downstream feature pointing at a face or edge that no longer exists in the same form, and the rebuild fails or, worse, succeeds with the wrong shape.

### Design intent, and why models break

Design intent is the point of the whole exercise. ISO 10303-108, as quoted in the research literature, defines it in terms of the designer's intentions about how a model may later be instantiated or modified, and the working test is simple: change a parameter and see whether the model changes the way you meant it to.

The common failures are well documented. Geometry can overlap itself once a dimension grows. Lines can flip when constraints that were consistent at one size become inconsistent at another. An iso-constrained sketch can become over-constrained under variation, and an over-constrained sketch has no unique configuration. Most dangerous is the case where the model rebuilds cleanly and is simply wrong - the shape regenerates, no error appears, and the design intent has quietly been lost.

How you attach dimensions decides which of those happens. Dimension a bolt pattern from a shared datum edge and the holes keep their relationship to that edge when the plate changes size. Chain the same dimensions hole to hole and the pattern marches off toward one end. Neither scheme is wrong in the abstract; the question is which one states what you actually meant. This is a teachable skill, not a talent: in a 2023 study, fewer than thirty minutes of training on three sketch-robustness principles produced a statistically significant improvement for all fourteen participants - nine graduate students and five industrial CAD specialists - across dimensional variation of up to plus or minus eighty percent.

### Direct modeling, and choosing between paradigms

The contrasting paradigm is direct, or explicit, modeling: you push, pull and offset faces on the geometry itself. There is no history and there are no parameters, so nothing replays and nothing rebuilds. That removes the regeneration failure mode entirely, and it removes the ability to drive the model from numbers.

Each fits different work. Parametric modeling earns its overhead when the shape will be revised many times, when a family of sizes comes from one model, when dimensions feed an optimization or a sensitivity study, or when a revision has to be auditable. Direct modeling earns its place when there is no history to work with - imported neutral geometry arrives as solids with no sketches or features - and when you need one quick change, a concept explored in minutes, or a model simplified for analysis. A history-free model keeps no change log of features, which is exactly why it cannot support parametric sensitivity studies. Most mainstream systems now offer both modes, and the practical skill is knowing which one the situation calls for rather than defending one on principle.

### Assemblies, drawings, and model-based definition

An assembly is a set of part instances positioned by mates, also called assembly constraints. A rigid body free in space has six degrees of freedom - translation and rotation about three orthogonal axes - and each mate removes some of them. A part fully located has none left; a part deliberately left with one rotational degree of freedom can be dragged through its motion so you can watch a mechanism sweep. Assemblies also let the software find volumes that two parts occupy at once. Interference checking is not an academic exercise: in vehicle concept design, engineers analyze space claims and run interference checks in the process called packaging, to confirm that occupants and components actually fit inside the exterior before anything is built.

Drawings, where they are still produced, are generated from the model rather than drawn alongside it, and that relationship is called associativity. MIL-STD-31000B makes it a contractual requirement: derived engineering design data, whether a 2D drawing, a lightweight viewable or a neutral file, must be based on and derived from the master native 3D model, and there must be no conflict between the master and anything derived from it.

The longer trend is model-based definition, which moves the authority out of the drawing and into the model. MIL-STD-31000B defines MBD as using 3D datasets containing the exact solid representation, the associated 3D geometry, and 3D annotations of dimensions, tolerances, materials, finishes and other notes, to specify a complete product definition; it cross-references ASME Y14.41, Digital Product Definition Data Practices, which is the standard that governs how that annotation is presented. The annotation itself is product and manufacturing information, or PMI. NIST distinguishes semantic PMI, which downstream software can consume directly, from graphical PMI, which preserves the appearance of an annotation for a human reader. How to dimension and tolerance a feature - projection, line conventions, and GD&T symbology - belongs to the technical-drawing topic; what matters here is that MBD changes where that information lives, not what it means. Adoption is still partial: a vendor survey summarized by NIST in 2019 found an estimated 26.8 percent of respondents releasing 51 percent or more of their designs with PMI-embedded 3D models.

### Files, interoperability, and what happens downstream

MIL-STD-31000B sorts CAD data three ways. Native data is what the authoring system wrote, generally readable and editable only by that system, and generally the only format fit to serve as master technical data. Neutral data is derived from the native file into a widely available published standard such as STEP, and generally cannot be the master. Viewable data, such as 3D PDF, is for looking at.

STEP is ISO 10303. Its application protocol AP242, ISO 10303-242, is titled 'Managed model-based 3D engineering'; it was first published in December 2014, extends earlier STEP protocols for PMI, kinematics and tessellation, and in its fourth edition has been deployed by all major CAD vendors. NIST was the original secretariat for STEP in the 1990s and still builds the test cases and file-checking tools the vendor community uses. IGES is the older neutral format, designed mainly to communicate design geometry; the 1999 NIST-commissioned study already reported that its custodian intended IGES 6.0 to be its last upgrade and was shifting development effort to STEP, and it is STEP that NIST and the vendor community have built on since. STL is different in kind: it supports only a surface mesh, so exporting to it replaces exact surfaces with flat triangles and carries none of the tolerancing, material or process information a model-based definition holds. That is why the additive manufacturing file format standardized as ISO/ASTM 52915 adds boundary representation, colour, texture, material specification and substructures on top of what STL can express.

Interoperability remains a real cost rather than a solved problem. A neutral format is cheaper than the alternative - point-to-point translation needs n(n-1) translators for n systems, so eight systems means fifty-six, while a neutral hub needs only two per system, sixteen - but every transformation is still an opportunity for loss. NIST-sponsored work on CAD-to-CAM and CAD-to-inspection exchange requires that data be validated after each transformation to confirm nothing was corrupted, and notes that once the definition is no longer a visually inspectable drawing, automated algorithms are needed to check it. Managing which version is authoritative is the job of product data management and, more broadly, product lifecycle management: systems that check models in and out, hold revision history, tie models to part numbers and change orders, and control who may release what. Ordinary text-oriented source control fits badly, because native CAD data can generally be read and interpreted only by the system that authored it, so the files do not diff and merge the way source code does.

Downstream, the model feeds computer-aided manufacturing, finite-element and computational fluid dynamics preprocessing, rendering, and additive manufacturing. Two honest caveats apply. First, a model that looks right can still be unmanufacturable, because the geometry carries no knowledge of tool access, fixturing, draft, or what a process can actually hold; NIST's review of model-based engineering records the Boeing 787 case in which parts did not fit together and caused extensive rework, traced back to a failure to communicate requirements and data to suppliers. Second, simulation results depend on assumptions the CAD model does not carry. NASA-STD-7009B defines a modeling assumption as information asserted to simplify or focus the model or to presume parameter values, defines model uncertainty as variation arising from assumptions, formulas and representations rather than from the real system, and requires that a model's abstractions, assumptions, inclusions, exclusions and limits be stated and its credibility assessed for critical decisions. The geometry is an input to that argument, never the argument itself.

One boundary before you go. This is educational material about how CAD systems represent and exchange design information. It is not engineering design guidance, and nothing here should be applied to a real structure, pressure vessel, electrical installation, vehicle or machine; real design work requires a licensed or otherwise qualified engineer working to the governing code.

## Key Vocabulary

- **Sketch** - A two-dimensional profile drawn on a plane inside the model, which features then consume to add or remove material.
- **Geometric constraint** - A relationship the solver enforces between sketch entities - coincident, parallel, perpendicular, tangent, concentric - stated without any number.
- **Parameter** - A numeric value such as a length, angle or position that both measures the geometry and drives it, so editing the number changes the shape.
- **Feature** - One modeling operation - extrude, revolve, sweep, loft, fillet, chamfer, shell, hole or pattern - that adds, removes or repeats material.
- **Feature tree** - The ordered record of every operation in the order it was created, which the software replays to rebuild the model after an edit.
- **Design intent** - How a model is meant to behave when someone changes it; ISO 10303-108, as quoted in the research literature, frames it as the designer's intentions about how a model may be instantiated or modified.
- **Mate** - An assembly relationship between two part instances that removes some of the six degrees of freedom - three translations and three rotations - a free rigid body has.
- **Model-based definition** - The practice of placing the complete product definition, including annotated dimensions, tolerances, materials and notes, in the 3D dataset rather than in a separate two-dimensional drawing.
- **Product and manufacturing information** - The tolerancing, material, process and inspection content carried inside a 3D product definition, either in a form software can consume directly or in a form preserved for a human reader.
- **Neutral exchange format** - A published, vendor-independent file specification such as STEP, used to move model data between systems that cannot read one another's native files.

## Eli-10

Old-style drawing is like typing a number into a document: if the number changes, you go find every place you typed it and retype it. Parametric CAD is like a spreadsheet. You do not type answers, you type relationships - this hole sits fifteen millimetres from that edge, this wall stays two millimetres thick - and then you change one input and everything downstream recalculates. The list of steps you took is kept, in order, and the computer can run it again from the top. That is why a well-built model updates in a second and a badly built one falls apart, and why the interesting part of learning CAD is not learning the buttons.

## Eli's Analogy

A parametric model is a recipe rather than a photograph of a finished cake. A photograph shows you exactly one cake. A recipe says 'flour twice the weight of the butter', so if you decide to bake a bigger one, every quantity follows from the change you made, in the order the steps were written.

**Where the analogy breaks down.** The analogy breaks in two places. A recipe is written for a person who can use judgment and quietly fix an instruction that does not make sense at the new size; CAD cannot, and will either fail loudly or produce a shape that satisfies your rules while missing your point. And a recipe carries no obligation to match anything physical, whereas a CAD model is checked against a real part that a machine will actually cut. A cake that comes out slightly wrong is still a cake. A model that is slightly wrong is a scrapped part.

## Worked Example

Take a rectangular mounting plate 120 mm long, 80 mm wide and 8 mm thick, with four 9 mm holes each set 15 mm in from its nearest edges. Built that way, the model states its intent: the holes belong to the edges. The hole centres span 120 - 2(15) = 90 mm. Now suppose someone dimensioned the same holes as a chain from the left edge instead: 15 mm to the first, then 90 mm to the second, putting it 105 mm from the left edge. Both models look identical and both are fully constrained.

Change the length to 150 mm. In the edge-referenced model the holes stay 15 mm from their edges and the span opens to 150 - 2(15) = 120 mm - exactly what was meant. In the chained model the holes stay at 15 mm and 105 mm from the left, so the right-hand pair now sits 150 - 105 = 45 mm from the right edge. Nothing errored. The rebuild was clean. The design intent is gone.

The geometry also gives you the numbers directly. Each hole removes (pi/4)(9 mm)^2(8 mm) = 508.94 mm^3, so the 120 mm plate has volume 120 x 80 x 8 - 4(508.94) = 74 764 mm^3 = 74.76 cm^3, and the 150 mm plate has 93 964 mm^3 = 93.96 cm^3. At an assumed density of 2.70 g/cm^3 - used here only to show that mass follows from geometry, not as a material property claim - that is about 202 g before the change and 254 g after. All values were computed rather than estimated, and are rounded to the precision the inputs justify.

## Common Mistakes

- **Leaving sketch geometry unconstrained because it looks right on screen.** Geometry that no constraint fixes is free to move on the next rebuild. Constrain the sketch fully, or decide deliberately which entity you are leaving free and why.
- **Chaining dimensions from one feature to the next because it is quicker than referencing a datum.** Ask what should stay put when the part changes size, and dimension from that. A chain propagates every edit to the end of the chain, which is rarely what was meant.
- **Treating a clean rebuild as proof that the edit was correct.** The most expensive parametric failure is the one that regenerates without error and produces the wrong shape. After a parameter change, check the geometry that the change was supposed to preserve, not just the error list.
- **Sending an STL or a neutral export as though it were the definition of the part.** STL carries only a surface mesh, and a neutral file is derived data. The native master model, and the annotation attached to it, is what defines the part; derived files must trace back to it without conflict.
- **Reading a simulation result off the model as though the geometry had validated it.** The model carries shape. It does not carry the load cases, material model, boundary conditions, mesh choices or idealizations the result rests on. Those assumptions have to be stated and defended separately.

## Compare / Contrast

- **Parametric (history-based) modeling vs. Direct (explicit) modeling** - Parametric modeling keeps an ordered feature history driven by parameters, so edits replay and the model can be driven by numbers, at the cost of regeneration failures. Direct modeling edits faces on the geometry with no history and no parameters, which removes rebuild failures and also removes any ability to run parametric studies.
- **Native CAD data vs. Neutral CAD data** - Native data is what the authoring system wrote and is generally the only format fit to serve as the master definition. Neutral data such as STEP is derived from it to a published standard so other systems can read it, and generally cannot serve as the master.
- **STEP AP242 export vs. STL export** - AP242 carries exact geometry along with product and manufacturing information that downstream software can consume. STL supports only a surface mesh, so it replaces exact surfaces with triangles and carries no tolerancing, material or process information at all.
- **Semantic PMI vs. Graphical PMI** - Semantic PMI is annotation represented so that manufacturing and inspection software can act on it without a human reading it. Graphical PMI preserves the appearance of the annotation for a human reader but is not machine-interpretable.
- **The CAD model vs. The drawing derived from it** - The model is the master geometric definition; the drawing is derived data that must agree with it. Under a 3D technical data package, derived drawings, viewables and neutral files must be based on the master native model with no conflict between them.

## Key Takeaway

CAD records geometry and design intent; a model is well built when a parameter change produces the change you meant, and everything downstream - drawings, exchange files, machining, inspection and simulation - inherits whatever judgment you did or did not put into it.

## Practice Question Bank

**1. In a parametric CAD system, what does the feature tree actually record?**

   A. The rendering and appearance settings applied to the model.
   B. The ordered history of sketches and features, which the software replays to rebuild the model after an edit.
   C. The triangular mesh that will be written when the part is exported for 3D printing.
   D. The bill of materials for every part instance used in the assembly.

   *Answer: B.* Parametric modeling is history-based and feature-based: the tree is the ordered sequence of operations, and an edit causes everything downstream of it to be replayed. Appearance settings, export meshes and bills of materials are separate data that the tree does not constitute.
   *Difficulty: recall | Skill: Recalling what the feature tree represents in history-based modeling | Sources: nerenst-2023-robust-sketch-constraints, libretexts-parametric-cad-and-3d-modeling*

**2. Why is an under-constrained sketch a problem rather than just an untidy one?**

   A. It makes the model file substantially larger and slower to open.
   B. It prevents the part from being exported to any neutral exchange format.
   C. Geometry that no constraint fixes can move on the next rebuild, so a parameter change may produce a shape that no longer expresses the design intent.
   D. It forces the system to abandon parametric modeling and switch to direct modeling.

   *Answer: C.* A sketch is iso-constrained, or fully constrained, when nothing can move without changing a stated value. Anything left free can shift when the model regenerates, and the documented failures include overlapping geometry, flipped lines, and rebuilds that succeed while quietly losing the design intent. File size, export capability and the modeling paradigm are unaffected by constraint state.
   *Difficulty: understanding | Skill: Explaining the consequence of incomplete sketch constraint | Sources: nerenst-2023-robust-sketch-constraints, libretexts-parametric-cad-and-3d-modeling*

**3. A supplier sends a part as a neutral exchange file. It opens as solid geometry with no sketches, features or history, and you need to shorten one boss by 3 mm to check clearance in your assembly. Which approach fits the situation best?**

   A. Use direct modeling to move the face itself, since there is no feature history available to drive the change.
   B. Export the part to STL and edit the individual triangles until the boss is shorter.
   C. Add a dimensional constraint to the neutral file's feature tree and change its value.
   D. Ask the supplier for a printed drawing and redimension the boss on the drawing.

   *Answer: A.* Neutral geometry arrives without the authoring system's history, so there are no parameters to edit; direct modeling operates on faces and needs none. Editing STL triangles works on a mesh approximation rather than the exact surfaces, the neutral file has no feature tree to add a constraint to, and changing a drawing changes nothing about the geometry you have to check clearance against.
   *Difficulty: application | Skill: Selecting the modeling paradigm that fits imported history-free geometry | Sources: nerenst-2023-robust-sketch-constraints, mil-std-31000b-technical-data-package*

**4. A 2D drawing delivered as part of a 3D technical data package shows a hole 12 mm from an edge, while the master native model shows 14 mm. Judged against MIL-STD-31000B, what is the problem?**

   A. Nothing is wrong; drawings derived from a model are allowed to differ from it.
   B. The model should have been exported to STL before any drawing was derived from it.
   C. The drawing has to be created before the model whenever a 3D technical data package is delivered.
   D. Derived data must be based on and derived from the master native 3D model with no conflict between them, so the drawing has lost its associativity with the model.

   *Answer: D.* MIL-STD-31000B requires that derived engineering design data - 2D drawings, lightweight viewables and neutral files alike - be based on and derived from the master native 3D models, with no conflict in data between the master and its derivatives. The standard imposes no STL step and no drawing-first sequence, and a disagreement of this kind is precisely the defect it forbids.
   *Difficulty: analysis | Skill: Applying the associativity requirement between a master model and its derived data | Sources: mil-std-31000b-technical-data-package*

**5. What is lost when a model-based definition is exported to STL instead of to STEP AP242?**

   A. The feature tree is preserved but all geometry is discarded.
   B. STL supports only a surface mesh, so exact surfaces are replaced by triangles and the tolerancing, material and process information in the definition is not carried at all.
   C. STL is a proprietary format that additive manufacturing equipment cannot read.
   D. Tolerances survive the export but material specifications do not.

   *Answer: B.* NIST's standards review states that STL supports only a surface mesh to define a part, which is why the ISO/ASTM 52915 additive manufacturing file format adds boundary representation, colour, texture, material specification and substructures. AP242 by contrast carries product and manufacturing information. STL preserves no feature tree, is widely readable rather than unreadable, and carries neither tolerances nor material specifications.
   *Difficulty: understanding | Skill: Comparing what neutral and mesh exchange formats preserve | Sources: nist-ams-300-10-traceability-manufacturing-data, nist-step-at-nist*

## Sources

- `nist-step-at-nist` - STEP at NIST (Smart Connected Manufacturing Systems Group). National Institute of Standards and Technology (NIST), Communications Technology Laboratory. <https://www.nist.gov/ctl/smart-connected-systems-division/smart-connected-manufacturing-systems-group/step-nist> (usage: REFERENCE_ONLY)
- `nist-mbe-pmi-validation-and-conformance-testing` - MBE PMI Validation and Conformance Testing Project. National Institute of Standards and Technology (NIST), Smart Connected Manufacturing Systems Group. <https://www.nist.gov/ctl/smart-connected-systems-division/smart-connected-manufacturing-systems-group/mbe-pmi-validation> (usage: REFERENCE_ONLY)
- `nist-ams-100-26-model-based-enterprise` - The Model Based Enterprise: A Literature Review of Costs and Benefits for Discrete Manufacturing, NIST Advanced Manufacturing Series 100-26 (Douglas Thomas, August 2019). National Institute of Standards and Technology (NIST), Engineering Laboratory, Applied Economics Office. <https://nvlpubs.nist.gov/nistpubs/ams/NIST.AMS.100-26.pdf> (usage: REFERENCE_ONLY)
- `nist-ams-300-10-traceability-manufacturing-data` - Recommendations on Ensuring Traceability and Trustworthiness of Manufacturing-Related Data, NIST Advanced Manufacturing Series 300-10 (T. Hedberg Jr., M. Helu, S. Krima, A. Barnard Feeney, July 2020). National Institute of Standards and Technology (NIST), Engineering Laboratory, Systems Integration Division. <https://nvlpubs.nist.gov/nistpubs/ams/NIST.AMS.300-10.pdf> (usage: REFERENCE_ONLY)
- `nist-gcr-16-003-validation-downstream-cam-cmm` - Validation for Downstream Computer Aided Manufacturing and Coordinate Metrology Processes, NIST GCR 16-003 (Asa Trainer, International TechneGroup Incorporated, September 2015). National Institute of Standards and Technology (NIST), Engineering Laboratory (grant/contractor report). <https://nvlpubs.nist.gov/nistpubs/gcr/2016/NIST.GCR.16-003.pdf> (usage: REFERENCE_ONLY)
- `nist-planning-report-99-1-automotive-interoperability` - Interoperability Cost Analysis of the U.S. Automotive Supply Chain, Final Report (S. B. Brunnermeier and S. A. Martin, Research Triangle Institute, March 1999; NIST Planning Report 99-1). Research Triangle Institute, prepared for the National Institute of Standards and Technology (NIST). <https://www.rti.org/sites/default/files/resources/US_Automotive.pdf> (usage: REFERENCE_ONLY)
- `mil-std-31000b-technical-data-package` - MIL-STD-31000B, Department of Defense Standard Practice: Technical Data Package (TDP), 31 October 2018. U.S. Department of Defense. <https://everyspec.com/MIL-STD/MIL-STD-10000-and-Up/MIL-STD-31000B_55788/> (usage: PUBLIC_DOMAIN)
- `nasa-std-7009b-models-and-simulations` - NASA Technical Standard NASA-STD-7009B, Standard for Models and Simulations (Office of the NASA Chief Engineer, 5 March 2024). National Aeronautics and Space Administration (NASA). <https://standards.nasa.gov/standard/NASA/NASA-STD-7009> (usage: PUBLIC_DOMAIN)
- `nerenst-2023-robust-sketch-constraints` - Parametric CAD Modeling: New Principles for Robust Sketch Constraints (T. B. Nerenst, M. Ebro, M. H. Nielsen, T. Eifler, K. L. Nielsen), Computer-Aided Design & Applications 20(1), 2023, 56-81. CAD Solutions, LLC (Computer-Aided Design & Applications). <https://www.cad-journal.net/files/vol_20/CAD_20(1)_2023_56-81.pdf> (usage: REFERENCE_ONLY)
- `libretexts-parametric-cad-and-3d-modeling` - 12: Parametric CAD and 3D Modeling, in Introduction to Engineering - Thinking Like an Engineer (Jonathan Compton). Jonathan Compton; Engineering LibreTexts. <https://eng.libretexts.org/Bookshelves/Introductory_Engineering/Introduction_to_Engineering_-_Thinking_Like_an_Engineer/12%3A_Parametric_CAD_and_3D_Modeling> (usage: REFERENCE_ONLY)
- `nist-dagalakis-6dof-tri-stage-micro-positioner` - 6-Degree of Freedom Tri-Stage Micro Positioner (N. G. Dagalakis and E. Amatucci), Spring 2002 Workshop on Optical MicroElectroMechanical Systems and Reliability, 12-13 April 2002. National Institute of Standards and Technology (NIST) publications record. <https://www.nist.gov/publications/6-degree-freedom-tri-stage-micro-positioner> (usage: REFERENCE_ONLY)

## Related Topics

- `engineering-fundamentals:engineering-practice:technical-drawing`
- `engineering-fundamentals:engineering-practice:prototyping`
- `engineering-fundamentals:engineering-practice:testing-and-validation`
- `engineering-fundamentals:engineering-practice:engineering-communication`
- `engineering-fundamentals:engineering-thinking:engineering-design-process`

## Editorial Metadata

- Topic id: `engineering-fundamentals:engineering-practice:cad-basics`
- Editorial status: READY_TO_PUBLISH
- Estimated minutes: 11
- Researched: 2026-08-19
- Rights: Two public-domain U.S. government standards (MIL-STD-31000B, NASA-STD-7009B) plus NIST publications, a copyrighted peer-reviewed article and a CC BY-NC open textbook chapter held as reference-only; no source prose adapted and no ASME or ISO standard text reproduced.
- Transformation: Parametric versus direct modeling, sketch constraint types, design-intent failure modes and the sketch-robustness training result come from Nerenst et al. (Computer-Aided Design & Applications 20(1), 2023); model-based definition, associativity of derived data, and the native/neutral/viewable taxonomy come from MIL-STD-31000B; STEP, AP242 and PMI from NIST AMS 300-10 and the NIST STEP and MBE PMI project pages; the STL surface-mesh limitation from NIST AMS 300-10; interoperability cost and the neutral-format translator economics from the 1999 NIST-commissioned RTI study; validation after every data transformation from NIST GCR 16-003; the simulation-assumption caveat from NASA-STD-7009B; adoption and rework figures from NIST AMS 100-26. ASME Y14.41 and Y14.5 are named by designation only. All prose is original; every number in the worked example, the prose and the questions was executed with python3 before publication. This lesson is educational material, not engineering design guidance.
- Scope handoffs: projection, line types, dimensioning, tolerancing and GD&T are owned by `engineering-fundamentals:engineering-practice:technical-drawing`; fabrication by `prototyping`; verification by `testing-and-validation`.
- This lesson is educational material about CAD systems, not engineering design guidance. Real design work requires a licensed or otherwise qualified engineer working to the governing code.
