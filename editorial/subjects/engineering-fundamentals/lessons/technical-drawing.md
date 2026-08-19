# Technical Drawing

## In 30 Seconds

A technical drawing is not a picture of a part. It is a controlled document that states, in a notation a machinist and an inspector read the same way, exactly what the part must be. Orthographic views fix the shape, dimensions and tolerances fix how much variation is allowed, and the title and revision blocks fix which version is authoritative. Read a drawing as a specification you have to satisfy, not an illustration you get to interpret.

## Why This Matters

A drawing is where design intent survives the handoff. The part is made by someone who was not in the design review, measured by someone who was not in the shop, and bought under a contract that points at a drawing number and a revision letter. Graphics, manufacturing, and capstone design courses all assume you can read one. Misreading the projection method or ignoring accumulated tolerance produces parts that are individually in specification and collectively useless, which is an expensive way to learn the lesson. The habits transfer too: state your units, state your scale, control your revisions, and define each thing exactly once.

## Learning Objectives

- Explain why an engineering drawing functions as a controlled specification and an inspection criterion rather than an illustration.
- Interpret a multiview orthographic drawing and distinguish first-angle from third-angle projection using the truncated-cone projection symbol.
- Identify the standard line types and explain what section, auxiliary, detail, and pictorial views each contribute.
- Apply dimensioning principles that separate size from location, dimension each feature once, and reference explicit datums.
- Calculate a worst-case tolerance stack for chained versus baseline dimensioning and explain why the statistical estimate is smaller and weaker.
- Describe conceptually what geometric dimensioning and tolerancing controls relative to datums and why it communicates function better than plus and minus alone.

## The College Version

### A drawing is a controlled document, not a picture

An engineering drawing exists to transfer a complete definition of a physical part to people who will never speak to the designer. NASA's Goddard Space Flight Center drawing standard states the requirement plainly: a drawing must be complete and unambiguous in interpretation, and a complete drawing contains or references every piece of data needed to fabricate and install the part, together with its test, procurement, and source requirements where those apply. Everything else follows. If the drawing is the definition of the part, it must be under change control, must declare its units and scale, must name the standard it is read under, and must carry the signatures of those accountable for it. It also becomes the acceptance criterion: a finished part is judged by measuring it against the drawing, which means a requirement the drawing does not state is a requirement that does not exist. Treating a drawing as an illustration to be interpreted rather than a specification to be satisfied is the most consequential habit to unlearn.

### Orthographic projection and the multiview drawing

Orthographic projection flattens a solid onto a plane using projectors that are parallel to each other and perpendicular to that plane. Because the projectors do not converge, nothing is foreshortened by distance, so measurements in the view correspond to measurements on the part. Project onto all six faces of an imaginary box and you get the six principal views: front, top, bottom, rear, left, and right. Each carries two of the three principal dimensions, width, depth, and height, which is why one view is rarely enough and three are often plenty. Unfolding the box into the plane of the paper gives the standard layout, and the views stay aligned: front and top vertically, front and side horizontally. Choose as the front view the face showing the part's most characteristic profile. The number of views is a judgement, not a ritual: ISO's principle is the minimum sufficient to delineate the object without ambiguity, and the Goddard manual is explicit that a drawing need not have three views if fewer, with notes, fully define the part.

### First angle, third angle, and the symbol that tells you which

The six views can be laid out in two arrangements, and this is the classic international mix-up. In third-angle projection the object sits behind the projection planes and you look through them, so each view lands on the side of the front view it was taken from: top above, right-side view to the right. In first-angle projection the object sits between the observer and the planes, so each view lands on the opposite side: top below, right-side view to the left. The views themselves are identical; only their positions swap. Third angle has been the North American norm since the early 1900s and is standard in the United States and Canada; first angle is standard across most of the rest of the industrialised world. Both remain normative internationally, once designated method A and method E, with the detailed rules given in ISO 5456-2. Because a first-angle drawing read as third-angle yields a mirror-image part, every sheet declares its method: a small symbol showing two views of a truncated cone, placed differently in each method, or the words first angle or third angle. Goddard's metric title-block format simply prints THIRD ANGLE PROJECTION. Check it before reading a single dimension.

### Line types are a notation

Meaning on a drawing is carried by the weight and style of a line, and the notation is small enough to memorise. Visible or object lines are thick and continuous: real edges you could see from that direction. Hidden lines are thin and evenly dashed: real edges the material blocks from view. Center lines are thin, made of alternating long and short dashes, and mark the axis of a circular feature or a plane of symmetry. Dimension lines are thin, terminated by arrowheads, and carry the numerical value; extension lines run from the feature out to them. Section lines are thin diagonal hatching marking material actually cut by a plane, and cutting-plane lines are heavy, with arrows showing which way the section is viewed. Phantom lines show an alternate position or range of motion; break lines shorten a long uniform feature without lying about its length. These conventions are set out in ASME Y14.2 in US practice and ISO 128-2 internationally; both are copyrighted, and the point is not the dash lengths but that every stroke is deliberate.

### Sections, auxiliaries, details, and pictorials

Three principal views cannot show everything. A section view solves the interior problem: imagine the part cut along a stated plane, discard the near half, and hatch only the surfaces the plane actually intersected. Full, half, offset, aligned, revolved, removed, and broken-out sections are the usual variants. Goddard's rule is to take a section through an outside view rather than through another section, and to place it close to the geometry it clarifies; shafts, bolts, and nuts lying in the cutting plane are conventionally left un-hatched. An auxiliary view solves the angled-surface problem: a surface appears in true shape only when projected onto a plane parallel to it, so an inclined face is foreshortened in every principal view. A detail view enlarges a small region and states its own scale. Pictorials solve the visualisation problem. Isometric projection orients the part so its principal axes make equal angles with the projection plane, putting them 120 degrees apart with width and depth edges at 30 degrees to horizontal; edges are drawn full size by convention even though true isometric foreshortens them uniformly by about a fifth. A pictorial is excellent for orientation and poor for dimensional control, which is why Goddard permits it only as an auxiliary aid on complex parts.

### Dimensioning: control the feature, not the picture

A dimension exists to control a function, so choose dimensions from the part's relationships with the parts it mates to, not from theoretical centre lines that matter to nobody downstream. Distinguish size dimensions, which state how big a feature is, from location dimensions, which state where it sits relative to something else; a hole needs both. Place a dimension on the view where the feature's profile reads most clearly, and avoid dimensioning to hidden lines. The drawing must define the part completely enough that a reader never measures the print with a ruler, and each size must appear exactly once, which necessarily means some distances are computed from others. Stating a distance twice over-dimensions the drawing: two tolerance paths now govern one feature, and they will disagree. When a computed distance is genuinely useful, give it as a reference dimension, in parentheses or followed by REF; it carries no tolerance and is not inspected. References must also be explicit. Goddard requires datum features to be labelled alphabetically as primary, secondary, and tertiary, and states that implied datums, where no letter is given, are no longer acceptable.

### Tolerance: nothing is made to size

No process produces an exact theoretical dimension, so every inspected dimension must state how much deviation is acceptable. A bilateral tolerance allows variation in both directions, equally as in 25.00 plus or minus 0.10 mm, or unequally. A unilateral tolerance allows variation in one direction only. Limit dimensioning prints the two allowable sizes directly, maximum above minimum, removing an arithmetic step for the inspector. Single-limit dimensioning states only a MIN or a MAX where one side matters, as on a thread depth or a chamfer. Dimensions with no tolerance shown fall under the general tolerance block in the title area. Two ideas make tolerancing an engineering decision rather than bookkeeping. Tolerance costs money: a tolerance tighter than the function needs adds operations, inspection, and scrap, so the correct tolerance is the loosest one that still works. And fits are decided at the extremes, which is why maximum and least material condition matter: for a shaft, maximum material condition is the largest permitted size; for a hole, the smallest. Interference and clearance fits are guaranteed by checking the worst pairing, not the nominal one.

### Tolerance stack-up: where the variation accumulates

Because a drawing dimensions each feature only once, other distances are derived by adding or subtracting dimensions, and their tolerances accumulate either way. Subtracting dimensions does not subtract tolerances. Chain dimensioning measures each feature from the previous one: every individual step is tightly controlled, but the overall length is the sum of the chain, so its worst-case tolerance is the sum of the individual tolerances. Baseline or datum dimensioning measures every feature from one common reference edge: the overall length is controlled directly, but any intermediate distance is a difference of two dimensions and carries the sum of their tolerances. Neither scheme removes variation; each decides where it lands, so the engineering question is which distances have to be tight. Worst-case stacking, the arithmetic sum, is the conservative analysis: if every component conforms, the assembly is guaranteed within the result. Statistical stacking is an alternative estimate. Since variances of independent contributors add, the combined spread scales with the root of the sum of squares rather than the plain sum. NIST states the underlying rule for combined standard uncertainty and its condition: the cross terms vanish only when contributors are uncorrelated. Parts from one machine on one afternoon share a bias, so a root-sum-square number predicts a distribution rather than guaranteeing a limit.

### Geometric dimensioning and tolerancing, in outline

Plus-and-minus tolerancing controls sizes and coordinate distances, and there are common failures it cannot express. A hole can be within its diameter limits and its coordinate limits and still refuse a bolt because its axis is tilted. A face can be the right height everywhere and still not seal because it is not flat. Geometric dimensioning and tolerancing says those things directly. It controls the form of a feature (straightness, flatness, circularity, cylindricity), the profile of a line or surface, the orientation of a feature (angularity, perpendicularity, parallelism), the location of a feature (position), and runout as the part is rotated, with every control except form read relative to datum features named by letter. The requirement is carried in a feature control frame holding the geometric symbol, the tolerance value and zone shape, any material-condition modifier, and the datum references; the exact locations it refers to are given as basic dimensions, which carry no tolerance of their own. The reason to prefer it is that it describes function rather than a rectangular coordinate box the designer never meant. In US practice the governing standard is ASME Y14.5, currently the 2018 edition, whose revision removed the concentricity and symmetry controls you will still meet on older drawings; the ISO counterpart is ISO 1101.

### Title block, revisions, scale, units, and notes

The title block, conventionally in the lower right corner, is the drawing's identity: title, drawing number, sheet number, scale, revision level, material, responsible organisation, the dates and initials of designer, checker, and approvers, and the general tolerance block. Goddard's format adds the unit system, the standard the drawing is interpreted under, and the CAD software, file name, and version used to produce it. Scale is written as drawing size to object size, so 1:2 is half size and 2:1 double size, and it must be stated: Goddard requires the scale, or the word NONE for schematics that have none, in the title block, requires a view's own scale to be noted only where it differs, and requires a feature drawn out of scale to have its dimension underlined so nobody trusts the geometry. Units must be stated too; under metric practice Goddard requires millimetres with the number of decimal places matching the tolerance. Revision control is formal: a change is marked in the field by a revision symbol and described in the revision block, revisions advance alphabetically while skipping I, O, Q, S, X, and Z, changes to a multisheet drawing are recorded on sheet one while the level advances on every sheet, and a replaced drawing is stamped SUPERSEDED. General notes govern the whole drawing and local notes attach by leader to one feature, carrying material, heat treatment, joining, coating, and inspection requirements. At inspection, the drawing is the standard the part is judged against.

### What this lesson is and is not

This is educational material. It is not engineering design guidance, and nothing here should be used to dimension, tolerance, or release a drawing for real hardware. Real drawings are prepared and released under a governing standard and an organisation's own drafting practice, and the responsibility for a released design rests with a licensed engineer working to the applicable code. The standards named here, ASME Y14.5, ASME Y14.3, ASME Y14.2, ISO 128-2, ISO 128-3, ISO 5456-2, and ISO 1101, are copyrighted documents; this lesson cites them by designation and describes what each governs, and deliberately reproduces none of their text, symbol tables, tolerance grades, or specific values. Every number used below is a teaching number chosen to make the arithmetic legible, not a recommended tolerance for any real part.

## Key Vocabulary

- **Orthographic projection** — A method of representing a solid in which the projecting rays are parallel to one another and perpendicular to the plane they land on, so distances in the resulting view are not distorted by perspective.
- **Multiview drawing** — A set of two or more aligned orthographic views of the same object, each showing two of the three principal dimensions, which together define a shape that no single view could.
- **Projection symbol** — The small mark on a drawing sheet, conventionally two views of a truncated cone, that declares whether the sheet's views are arranged by the first-angle or the third-angle method.
- **Hidden line** — A thin dashed line representing an edge that genuinely exists on the part but is obscured by material when seen from the direction of that view.
- **Section view** — A view produced by imagining the object cut along a stated plane and the near portion removed, with hatching applied only to the surfaces the plane actually intersected.
- **Auxiliary view** — An orthographic view taken on a plane parallel to an inclined or oblique surface, drawn because such a surface appears in true shape on no principal view.
- **datum (drawing reference)** — A reference feature, edge, axis, or plane named on the drawing, from which locations are measured and against which geometric controls are interpreted.
- **Tolerance** — The total permitted deviation from a stated dimension, present on every inspected dimension because no manufacturing process reproduces an exact theoretical size.
- **Tolerance stack-up** — The accumulation of allowable deviation in a distance that is derived from two or more dimensions, which grows whether those dimensions are added or subtracted.
- **Feature control frame** — The boxed annotation carrying a geometric symbol, a tolerance value and zone shape, any material-condition modifier, and the datum references that the control is read against.

## Eli-10

Shine a light straight at an object and trace its shadow on the wall. That shadow is one view. It tells you two of the object's three directions and hides the third, so you trace another shadow from above and another from the side. Line them up so the top one sits directly over the front one and the side one sits directly beside it, and together the shadows pin the shape down. Edges buried inside the material get dashed lines. If the inside matters, you pretend to saw the object in half and shade the cut face. Then comes the part people miss: every number on a drawing is really two numbers, a biggest allowed and a smallest allowed, because no machine ever hits a number exactly.

## Eli's Analogy

Think of marking shelf positions inside an alcove for someone who will never see the alcove. If you measure each shelf from the last one you marked, every small error rides along to the next mark, and by the top shelf you can be a long way off even though each single gap was fine. If you measure every mark from the same floor line, the top shelf lands where it should, and the wobble shows up in the gaps between shelves instead. That is exactly the choice between chain dimensioning and baseline dimensioning: you never delete the error, you decide where you can afford it.

**Where the analogy breaks down.** The alcove is one direction, one person, and one afternoon. A drawing has to survive strangers, other countries, and years, so it must also say which projection arrangement it uses and which revision is current. And a shelf can be the exact right length and still be warped, twisted, or not square to the wall. A tape measure cannot express any of that, which is precisely the gap geometric dimensioning and tolerancing fills. The analogy also makes the floor line look like the obvious reference; on a real part, choosing the datum is a functional decision about how the part mounts and mates.

## Worked Example

A stepped bar has four steps, each nominally 25.00 mm long. Chain-dimensioned, each step is called out as 25.00 plus or minus 0.10 mm from the previous face. Every individual step is held to a 0.20 mm band, but the overall length is the sum of the chain: 4 by 25.00 mm = 100.00 mm, worst-case tolerance 4 by 0.10 mm = plus or minus 0.40 mm, so 99.60 mm to 100.40 mm. Now re-dimension the same bar from the left-hand end as 25.00, 50.00, 75.00, and 100.00 mm, every dimension plus or minus 0.10 mm. The overall length is now dimensioned directly and holds plus or minus 0.10 mm, 99.90 mm to 100.10 mm, a band four times tighter. The variation did not vanish; it moved. The second step is no longer dimensioned, so it must be derived as 50.00 minus 25.00 = 25.00 mm, and its tolerance is 0.10 + 0.10 = plus or minus 0.20 mm, 24.80 mm to 25.20 mm. Same part, same drawing tolerances, opposite risk profile: choose the scheme that protects the distance the design actually needs. As a statistical footnote, treating each plus or minus 0.10 mm as plus or minus three standard deviations and assuming the four step errors are independent and centred, the standard deviation of the sum is the square root of 4 times (0.10/3) squared = 0.0667 mm, so three standard deviations of the chained overall length is plus or minus 0.20 mm, which is 0.10 times the square root of 4 and exactly half the worst-case band. That is an estimate of a distribution, not a limit: NIST's rule for combining uncertainties drops the cross terms only when the contributors are uncorrelated, and parts made on one machine in one shift are rarely uncorrelated. All arithmetic in this example was executed and checked before publication.

### The computation, as executed

```
$ python3 stackup.py
=== CASE A: CHAIN DIMENSIONING (each step measured from the previous face) ===
four chained dimensions: 25.00 +/- 0.10 mm each
overall nominal          = 4 x 25.00 mm = 100.00 mm
overall worst-case tol   = 4 x 0.10 mm = +/- 0.40 mm
overall limits           = 99.60 mm to 100.40 mm
overall tolerance band   = 0.80 mm wide
single step limits       = 24.90 mm to 25.10 mm (band 0.20 mm)

=== CASE B: BASELINE (DATUM) DIMENSIONING (every face measured from the left end) ===
   25.00 +/- 0.10 mm -> 24.90 to 25.10 mm
   50.00 +/- 0.10 mm -> 49.90 to 50.10 mm
   75.00 +/- 0.10 mm -> 74.90 to 75.10 mm
  100.00 +/- 0.10 mm -> 99.90 to 100.10 mm
overall length is dimensioned directly: 100.00 +/- 0.10 mm -> 99.90 to 100.10 mm (band 0.20 mm)
derived step 2 = 50.00 - 25.00 = 25.00 mm, tol = 0.10 + 0.10 = +/- 0.20 mm -> 24.80 to 25.20 mm (band 0.40 mm)

=== WHERE THE TOLERANCE WENT ===
chain:    overall +/- 0.40 mm, each step +/- 0.10 mm
baseline: overall +/- 0.10 mm, derived intermediate step +/- 0.20 mm
ratio of overall bands, chain / baseline = 4 to 1

=== STATISTICAL (ROOT-SUM-SQUARE) ESTIMATE FOR THE CHAINED OVERALL LENGTH ===
assumption: the four step errors are independent, centred on nominal, and each
+/- 0.10 mm tolerance corresponds to the same number of standard deviations.
sigma per step      = 0.10 / 3 = 0.033333 mm
sigma of the sum    = sqrt(4 x 0.033333^2) = 0.066667 mm
3-sigma of the sum  = +/- 0.2000 mm
same number by RSS on the tolerances directly: 0.10 x sqrt(4) = +/- 0.2000 mm
worst case +/- 0.40 mm vs statistical +/- 0.20 mm = 50% of the worst-case band
```

## Common Mistakes

- **Reading the view layout without first checking the projection symbol, and assuming the arrangement you were taught is the one on the sheet.** Find the truncated-cone symbol or the words first angle or third angle before reading a single dimension. The views are identical in both methods; only their positions swap, so a first-angle drawing read as third-angle produces a mirror-image part that passes every individual dimension check.
- **Adding the overall length to a fully chained set of dimensions so the drawing 'has all the numbers'.** That over-dimensions the drawing: the feature is now governed by two tolerance paths that will disagree. Dimension each size once and, if the derived value is genuinely useful to the reader, add it as a reference dimension in parentheses or marked REF, with no tolerance, not to be inspected.
- **Treating tolerances as slop and assuming that tighter is always safer.** Tolerance is a functional requirement with a price. Every extra decimal place buys operations, inspection time, and scrap, so the right tolerance is the loosest one that still lets the part do its job. Conversely, tolerances tight enough on each dimension can still fail as a stack, so analyse the derived distances rather than eyeballing the individual callouts.
- **Measuring the printed drawing with a ruler to recover a dimension the drawing does not state.** A drawing must define the part completely enough that scaling the print is never necessary, and a feature drawn deliberately out of scale has its dimension underlined precisely so the geometry cannot be trusted. If a value is missing or ambiguous, ask the drawing's owner and, if it is genuinely absent, it becomes a revision, not an assumption.
- **Working from whichever copy of the drawing was already open.** The revision letter is part of the part's identity. Confirm you hold the current revision, read the revision block to see what changed, and check the revision symbols in the field of the drawing to find where the changes landed. On a multisheet drawing the change history lives on sheet one even when the change is on sheet four.

## Compare / Contrast

| | | |
|---|---|---|
| **First-angle projection** | **Third-angle projection** | The views are drawn identically; only their arrangement differs. In first angle the object sits between the observer and the projection plane, so the top view falls below the front view and the right-side view falls to the left. In third angle the plane sits between the observer and the object, so the top view is above and the right-side view is to the right. Third angle is the norm in the United States and Canada, first angle across most of the rest of the world, and both remain normative internationally, which is why the sheet must declare which it uses. |
| **Chain dimensioning** | **Baseline (datum) dimensioning** | Chain dimensioning measures each feature from the previous one, holding each individual step tightly while the overall length accumulates the sum of the tolerances. Baseline dimensioning measures every feature from one common reference, holding the overall length directly while any intermediate distance accumulates the tolerances of the two dimensions it is derived from. Neither removes variation; each chooses where the variation is permitted to land. |
| **Size dimension** | **Location dimension** | A size dimension states how large a feature is, such as a hole diameter or a slot width. A location dimension states where that feature sits relative to a stated reference. A hole needs both, and confusing them is how drawings end up with a perfectly toleranced diameter in an unspecified position. |
| **Plus-and-minus tolerancing** | **Geometric dimensioning and tolerancing** | Plus and minus controls sizes and coordinate distances, which implicitly defines a rectangular tolerance zone the designer usually did not intend. Geometric tolerancing controls form, profile, orientation, location, and runout relative to explicitly named datums, so it can require a hole's axis to be perpendicular or a face to be flat, and it expresses the function the part has to perform rather than a convenient box on a coordinate grid. |
| **Orthographic multiview drawing** | **Isometric or other pictorial** | A multiview drawing is dimensionally faithful and is what the part is made and inspected to. A pictorial shows three faces at once and is far easier to visualise, but its axes are foreshortened by convention and circles become ellipses, so it is used to aid comprehension and assembly, not to control geometry. |
| **Worst-case tolerance stacking** | **Statistical (root-sum-square) stacking** | Worst-case adds the tolerances arithmetically and guarantees that any assembly of conforming parts falls inside the result. Statistical stacking adds variances instead, so the predicted spread grows with the square root of the number of contributors and is much smaller, but it holds only if the contributors are independent and centred and it predicts a distribution rather than promising a limit. |

## Key Takeaway

A drawing is a controlled specification, not a picture: the projection method tells you how to read it, the line types and views tell you what the part is, the dimensions and tolerances tell you how much variation is allowed and, crucially, where that variation is permitted to accumulate.

## Practice Question Bank

**1. A drawing sheet carries a small symbol showing two views of a truncated cone. What does that symbol tell the reader?**

   A. Which projection method the views are arranged in, first angle or third angle.
   B. The scale at which the sheet was plotted.
   C. That the part must be produced on a lathe.
   D. The surface roughness required on conical features.

   *Answer:* A. The truncated-cone symbol declares whether the sheet uses first-angle or third-angle projection; some drawings write the words instead. It says nothing about scale, which lives in the title block, nothing about the manufacturing process, which would be a note, and nothing about surface texture, which has its own symbol.
   *Difficulty:* recall · *Skill:* Recognising the drawing convention that identifies the projection method

**2. Which line type represents an edge that exists on the part but is blocked from view by material in that particular view?**

   A. A thin continuous line ending in an arrowhead.
   B. A thin line of alternating long and short dashes.
   C. A thin evenly dashed line.
   D. A thick continuous line.

   *Answer:* C. A hidden line is thin and evenly dashed. The thin line with an arrowhead is a dimension line, the long-short dash pattern is a center line marking an axis or plane of symmetry, and the thick continuous line is a visible or object line showing an edge you could actually see from that direction.
   *Difficulty:* understanding · *Skill:* Mapping line weight and style to the meaning it carries

**3. A bar has four steps, each chain-dimensioned as 25.00 plus or minus 0.10 mm from the previous face. What is the worst-case tolerance on the 100.00 mm overall length?**

   A. plus or minus 0.10 mm
   B. plus or minus 0.20 mm
   C. plus or minus 0.025 mm
   D. plus or minus 0.40 mm

   *Answer:* D. In a chain, the overall length is the sum of the four dimensions, so worst-case tolerances add arithmetically: 4 by 0.10 mm = plus or minus 0.40 mm, giving 99.60 mm to 100.40 mm. Plus or minus 0.10 mm is what a single step holds. Plus or minus 0.20 mm is the statistical root-sum-square estimate, which assumes independent centred contributors and predicts a distribution rather than a limit. Dividing the tolerance by the number of steps has no physical meaning.
   *Difficulty:* application · *Skill:* Computing a worst-case tolerance stack across chained dimensions

**4. The same bar is re-dimensioned from its left-hand end as 25.00, 50.00, 75.00 and 100.00 mm, every dimension plus or minus 0.10 mm. What actually changes?**

   A. The overall length is now held to plus or minus 0.10 mm, but an intermediate step derived by subtracting two dimensions carries plus or minus 0.20 mm.
   B. Every dimension and every derived distance is now held to plus or minus 0.10 mm.
   C. Total variation in the part is reduced, so no distance becomes looser than before.
   D. The worst-case and statistical stacks become identical.

   *Answer:* A. Baseline dimensioning controls the overall length directly at plus or minus 0.10 mm, but the second step is no longer dimensioned and must be derived as 50.00 minus 25.00 = 25.00 mm, accumulating both tolerances for plus or minus 0.20 mm. Subtracting dimensions does not subtract tolerances, so option two is wrong. The variation moved rather than disappeared, so option three is wrong. The statistical estimate remains smaller than the worst case regardless of scheme, so option four is wrong.
   *Difficulty:* analysis · *Skill:* Reasoning about where a dimensioning scheme forces tolerance to accumulate

**5. Compared with plus-and-minus tolerancing alone, what does geometric dimensioning and tolerancing as governed by ASME Y14.5 add?**

   A. It replaces every size dimension with a basic dimension, so nothing needs inspecting.
   B. It controls form, profile, orientation, location, and runout of features relative to explicitly named datums.
   C. It removes the need to state the units and the scale on the drawing.
   D. It guarantees parts can be manufactured without any measurement.

   *Answer:* B. Geometric tolerancing states requirements plus and minus cannot express, such as flatness of a face or perpendicularity of a hole axis, and reads them against datum features named on the drawing. Basic dimensions locate the theoretically exact position but do not remove inspection, since the feature control frame supplies the tolerance zone. Units, scale, and measurement remain mandatory in every case.
   *Difficulty:* understanding · *Skill:* Explaining what geometric controls express that coordinate tolerancing cannot

## Sources

- **Engineering Drawing Standards Manual, GSFC X-673-64-1F (August 1994), NASA Goddard Space Flight Center, Mechanical Engineering Branch** — NASA Goddard Space Flight Center. https://s3vi.ndc.nasa.gov/ssri-kb/static/resources/NASA%20GSFC-X-673-64-1F.pdf (REFERENCE_ONLY)
- **Introduction to Engineering Drawing and Design, 2.2: Orthographic projections (Corradi Dell'Acqua and Mohammadi, Illinois Institute of Technology)** — Engineering LibreTexts. https://eng.libretexts.org/Courses/Illinois_Institute_of_Technology/Introduction_to_Engineering_Drawing_and_Design/02%3A_Module_B_-_Orthographic_projections/2.02%3A_Orthographic_projections (EXTRACT_AND_ADAPT, CC BY 4.0)
- **Introduction to Engineering Drawing and Design, 1.2: Line types (Corradi Dell'Acqua and Mohammadi, Illinois Institute of Technology)** — Engineering LibreTexts. https://eng.libretexts.org/Courses/Illinois_Institute_of_Technology/Introduction_to_Engineering_Drawing_and_Design/01%3A_Module_A_-_Fundamentals/1.02%3A_Line_types (EXTRACT_AND_ADAPT, CC BY 4.0)
- **Introduction to Engineering Drawing and Design, 3.2: Section Views (Corradi Dell'Acqua and Mohammadi, Illinois Institute of Technology)** — Engineering LibreTexts. https://eng.libretexts.org/Courses/Illinois_Institute_of_Technology/Introduction_to_Engineering_Drawing_and_Design/03%3A_Module_C_-__Auxiliary_views_section_views_isometric_and_oblique_projections/3.02%3A_Section_Views (EXTRACT_AND_ADAPT, CC BY 4.0)
- **Introduction to Engineering Drawing and Design, 3.1: Auxiliary views (Corradi Dell'Acqua and Mohammadi, Illinois Institute of Technology)** — Engineering LibreTexts. https://eng.libretexts.org/Courses/Illinois_Institute_of_Technology/Introduction_to_Engineering_Drawing_and_Design/03%3A_Module_C_-__Auxiliary_views_section_views_isometric_and_oblique_projections/3.01%3A_Auxiliary_views (EXTRACT_AND_ADAPT, CC BY 4.0)
- **Introduction to Engineering Drawing and Design, 3.3: Isometric projections (Corradi Dell'Acqua and Mohammadi, Illinois Institute of Technology)** — Engineering LibreTexts. https://eng.libretexts.org/Courses/Illinois_Institute_of_Technology/Introduction_to_Engineering_Drawing_and_Design/03%3A_Module_C_-__Auxiliary_views_section_views_isometric_and_oblique_projections/3.03%3A_Isometric_projections (EXTRACT_AND_ADAPT, CC BY 4.0)
- **Blueprint Reading, Chapter 2: Views of an Object (WisTech Open, Wisconsin Technical College System, 2025)** — WisTech Open. https://wtcs.pressbooks.pub/blueprintreading/chapter/2-views-of-an-object/ (EXTRACT_AND_ADAPT, CC BY 4.0)
- **Blueprint Reading, Chapter 5: Dimensioning Systems (WisTech Open, Wisconsin Technical College System, 2025)** — WisTech Open. https://wtcs.pressbooks.pub/blueprintreading/chapter/4-objects-in-different-views/ (EXTRACT_AND_ADAPT, CC BY 4.0)
- **Blueprint Reading, Chapter 8: Tolerance on Dimensions (WisTech Open, Wisconsin Technical College System, 2025)** — WisTech Open. https://wtcs.pressbooks.pub/blueprintreading/chapter/8-tolerance-on-dimensions/ (EXTRACT_AND_ADAPT, CC BY 4.0)
- **Blueprint Reading, Chapter 7: Title Blocks (WisTech Open, Wisconsin Technical College System, 2025)** — WisTech Open. https://wtcs.pressbooks.pub/blueprintreading/chapter/7-title-blocks/ (EXTRACT_AND_ADAPT, CC BY 4.0)
- **Blueprint Reading, Chapter 9: Print Symbols and Notes (WisTech Open, Wisconsin Technical College System, 2025)** — WisTech Open. https://wtcs.pressbooks.pub/blueprintreading/chapter/9-print-symbols-and-notes/ (EXTRACT_AND_ADAPT, CC BY 4.0)
- **ASME Y14.5, Dimensioning and Tolerancing (current edition Y14.5-2018, reaffirmed 2024)** — American Society of Mechanical Engineers. https://www.asme.org/codes-standards/find-codes-standards/y14-5-dimensioning-tolerancing (REFERENCE_ONLY)
- **ASME Y14.3-2012, Orthographic and Pictorial Views** — American Society of Mechanical Engineers. https://www.asme.org/codes-standards/find-codes-standards/y14-3-orthographic-pictorial-views (REFERENCE_ONLY)
- **ASME Y14.2, Line Conventions and Lettering (current edition Y14.2-2014, reaffirmed 2020)** — American Society of Mechanical Engineers. https://www.asme.org/codes-standards/find-codes-standards/y14-2-line-conventions-lettering (REFERENCE_ONLY)
- **ISO 128-3:2022, Technical product documentation (TPD) - General principles of representation - Part 3: Views, sections and cuts** — International Organization for Standardization. https://www.iso.org/standard/83356.html (REFERENCE_ONLY)
- **ISO 128-2:2022, Technical product documentation (TPD) - General principles of representation - Part 2: Basic conventions for lines** — International Organization for Standardization. https://www.iso.org/standard/83355.html (REFERENCE_ONLY)
- **ISO 128-30:2001, Technical drawings - General principles of presentation - Part 30: Basic conventions for views (official ISO preview sample; superseded)** — International Organization for Standardization. https://cdn.standards.iteh.ai/samples/3939/89f3a9b058fa4f7180c3e32444cb67b2/ISO-128-30-2001.pdf (REFERENCE_ONLY)
- **ISO 1101:2017, Geometrical product specifications (GPS) - Geometrical tolerancing - Tolerances of form, orientation, location and run-out** — International Organization for Standardization. https://www.iso.org/standard/66777.html (REFERENCE_ONLY)
- **NIST Reference on Constants, Units and Uncertainty: Combining uncertainty components** — National Institute of Standards and Technology. https://physics.nist.gov/cuu/Uncertainty/combination.html (REFERENCE_ONLY)

## Related Topics

- `engineering-fundamentals:engineering-practice:cad-basics`
- `engineering-fundamentals:engineering-practice:prototyping`
- `engineering-fundamentals:engineering-practice:testing-and-validation`
- `engineering-fundamentals:engineering-practice:safety-factors-and-failure`
- `engineering-fundamentals:engineering-thinking:units-measurement-and-significant-figures`

## Editorial Metadata

- Topic id: `engineering-fundamentals:engineering-practice:technical-drawing`
- Editorial status: READY_TO_PUBLISH
- Estimated minutes: 14
- Researched: 2026-08-19
- Research status: source-verified
- Rights: Two CC BY 4.0 open textbooks (attributed); NASA GSFC manual and all ASME/ISO standards treated as reference-only; no standard text, symbol table, or tolerance value reproduced anywhere.
- Transformation: Written from primary and open-licensed sources rather than adapted from any one of them: the NASA GSFC Engineering Drawing Standards Manual was read in full text for drawing-control, line, view, scale, revision and dimensioning practice; two CC BY 4.0 OER books supplied projection geometry, view types and tolerancing vocabulary; ASME and ISO standards are cited by designation only from publicly readable scope descriptions, with ISO 128-30:2001 read as an official ISO preview sample. The tolerance stack-up worked example is original and was computed and verified with an executed Python script before publication.
- Educational-material statement: this lesson is educational material only.
- Not engineering design guidance: nothing here should be used to dimension, tolerance, or release a drawing for real hardware. Real design requires a licensed engineer working to the governing code and the organisation's released drafting practice.
- Standards handling: ASME Y14.2, ASME Y14.3, ASME Y14.5, ISO 128-2, ISO 128-3, ISO 5456-2 and ISO 1101 are cited by designation and described only; no standard text, symbol table, tolerance grade, or specific value is reproduced.
- All arithmetic in the worked example was executed with Python before publication.
