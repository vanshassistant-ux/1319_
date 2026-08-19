# Stress and Strain

## In 30 Seconds

Stress is force intensity: the internal force a material carries divided by the area carrying it, sigma = P/A, measured in pascals. Strain is the deformation that comes with it, change in length over original length, a pure number with no units. Plot one against the other for a ductile metal and you get the stress-strain curve, with an elastic straight line, a yield point, strain hardening, a peak, a neck, and fracture. Almost every mechanical property engineers quote is read off that curve.

## Why This Matters

Every load a part carries shows up as stress somewhere inside it, and every stress shows up as strain that can in principle be measured. Converting a force in newtons into a stress in megapascals is the step that lets you compare a bolt, a bridge cable, and a bone on the same axis, because stress normalizes force to the area carrying it. The stress-strain curve is then the shared language of the field: it is how materials are specified, how test labs report results, how finite-element output is read, and how failures get explained afterwards. Statics tells you what force a member carries. Stress and strain tell you whether the material minds.

## Learning Objectives

- Define normal stress and shear stress as force intensity and convert among pascals, megapascals, and psi or ksi.
- Distinguish normal strain from shear strain and express strain in percent and in microstrain.
- Explain each region of the stress-strain diagram for a ductile metal, including the 0.2 percent offset yield construction, and contrast it with a brittle curve.
- Apply Hooke's law, sigma = P/A, and delta = PL/AE to compute stress, strain, and elongation in an axially loaded member.
- Analyze why the engineering curve falls after the ultimate tensile strength while the material continues to strain harden.
- Evaluate how a geometric discontinuity or a thermal restraint produces stress that sigma = P/A alone does not predict.

## The College Version

### Stress is force intensity, not force

Slice an axially loaded member with an imaginary plane perpendicular to its axis. The material on each side of the cut must push or pull on the other with an internal force P. Normal stress is that force spread over the area carrying it: sigma = P/A, with P perpendicular to the cut face. The SI unit is the pascal, one newton per square metre. A pascal is tiny for structural work, so engineering stresses are usually quoted in megapascals, and 1 MPa is exactly 1 N/mm-squared, which makes millimetre geometry convenient. American practice still reports the same quantity in pounds-force per square inch (psi) and thousands of psi (ksi). The NIST conversion factor is 1 psi = 6.894 757 x 10^3 Pa, so 1 ksi = 6.894 757 MPa and 1 MPa = 145.0 psi. The word intensity is doing real work. A force by itself tells you nothing about whether a part is in trouble, because the same force spread thinner is a harsher demand on the material. Pull 60 kN through a 20.0 mm round rod and the stress is 191 MPa; pull the same 60 kN through a 16 mm rod and it is 298 MPa. A 20 percent smaller diameter is a 36 percent smaller area and a 56 percent larger stress. That is why material data is tabulated against stress and never against force. Shear stress is the same ratio with the force lying in the plane of the area instead of perpendicular to it: tau = V/A, where V is the force parallel to the surface. Same units, different geometry, and a different failure story: yielding in metals is driven by shearing stresses sliding one plane past another, while brittle fracture is driven by normal stresses pulling planes apart. Finally, sigma = P/A is an average over the section. It equals the point-by-point stress only where the stress really is uniform, which in an axial member means well away from the grips, the load points, and any hole or shoulder. Most of the rest of this lesson is about where that idealization stops.

### Strain: normal, shear, and the Poisson effect

Strain normalizes deformation the way stress normalizes force. Normal strain is epsilon = delta/L0, the change in length divided by the original length. Length over length leaves a pure number, so strain carries no unit. Elastic strains in structural metals are small, typically a fraction of a percent, so raw decimals are awkward and two reporting conventions dominate. Percent is one: 9.549 x 10^-4 is 0.0955 percent. Microstrain is the other: one microstrain is 10^-6 metre of stretch per metre of original length, so the same value is 955 microstrain. The NIST SI guide asks you to write a ratio like this as micrometre per metre rather than as parts per million, because ppm is language-dependent and is not acceptable with SI. Shear strain is a different geometric object. It is not a length ratio but an angle: gamma is the change in an originally right angle in the material, measured in radians, which is again dimensionless. For the small distortions that elastic analysis assumes, gamma is well approximated by the transverse offset divided by the separation over which it develops. Stretching a bar in one direction also makes it thinner in the other two, and Poisson's ratio quantifies that coupling: nu = -epsilon_lateral / epsilon_axial, with the minus sign inserted so that nu comes out positive for ordinary materials. Approximate values are about 0.2 for ceramics, 0.3 for metals, 0.4 for plastics, and 0.5 for rubber. Half is the ceiling for an ordinary isotropic solid, because a larger value would mean the material gained volume under hydrostatic compression. The effect is real but small: the 20.0 mm rod above, stretched 955 microstrain with nu = 0.30, loses about 5.7 micrometres of diameter.

### Reading the stress-strain diagram for a ductile metal

Pull a standard specimen in a testing machine, plot engineering stress against engineering strain, and a ductile metal traces a curve with a fixed sequence of landmarks. It begins straight. Over that initial range stress is proportional to strain, which is Hooke's law, sigma = E epsilon, and the slope of the line is Young's modulus E. E has the units of stress because strain has none. The proportional limit is where that straight line ends. Slightly beyond it can lie a short non-linear but still elastic stretch, ending at the elastic limit: the stress above which the specimen no longer returns to its original size when unloaded. Past the elastic limit the material yields and flows plastically. Low-carbon steel obliges by showing a distinct yield point where strain increases at nearly constant stress, but most metals, including aluminium alloys, curve over smoothly with no knee to point at. For those the yield strength is defined by construction rather than observation: draw a line of slope E starting from 0.2 percent strain on the strain axis, and the stress where it crosses the measured curve is the 0.2 percent offset yield strength. The construction is a promise about behaviour, namely that unloading from that point would leave 0.2 percent permanent strain. Beyond yield the metal strain hardens, so it takes an ever-increasing stress to keep straining it, and the curve climbs again to a maximum. That maximum engineering stress is the ultimate tensile strength. After the peak, deformation stops being uniform and localizes into a neck, a shrinking region of cross-section, and the curve falls until the specimen fractures, often with the cup-and-cone geometry that mixes shear failure at the rim with tensile separation at the centre. A brittle material has almost none of this middle. Lacking easy dislocation motion, it stays nearly linear across its whole range of strain and then fractures with little plastic flow, so its curve has an elastic region and an endpoint and not much else.

### Engineering stress and strain versus true stress and strain

Both engineering quantities are referred to the original geometry: sigma_e = P/A0 and epsilon_e = delta/L0. That is a deliberate convenience, because the original dimensions are the ones you can measure before the test. It also creates the single most misread feature of the diagram. True stress is the load divided by the area the specimen actually has at that instant, sigma_t = P/A, and true strain accumulates each increment of stretch against the current length, giving epsilon_t = ln(L/L0). For uniform deformation the two pairs are related by sigma_t = sigma_e (1 + epsilon_e) and epsilon_t = ln(1 + epsilon_e). At 10 percent engineering strain, true stress is 10 percent above engineering stress and true strain is 9.53 percent. Now the downturn makes sense. Past yield, plastic flow substantially reduces the cross-section, so the true stress the material actually carries is higher than the engineering stress plotted. Early on, strain hardening raises the material's strength faster than the area shrinks, and the load keeps rising. Eventually the loss of area outruns the gain from hardening, the load peaks, and the engineering curve turns down. The material is not getting weaker; the specimen is getting smaller. The true stress-strain curve continues to rise all the way to fracture.

### Elastic constants of an isotropic material

An isotropic material behaves the same in every direction, and its linear elastic response needs only two independent constants. Pick any two of Young's modulus E, the shear modulus G, Poisson's ratio nu, and the bulk modulus K, and the rest follow. The shear analogue of Hooke's law is tau = G gamma, and for an isotropic solid G = E / (2(1 + nu)) and K = E / (3(1 - 2 nu)). The relation is worth testing against measured numbers. Take E = 200 GPa and nu = 0.30 for steel: the formula gives G = 76.9 GPa and K = 167 GPa, while tabulated approximate values for steel are about 75 GPa and 160 GPa. Agreement to a few percent is what you should expect and is a fair description of what isotropy buys you. The gap is a reminder that real steels are polycrystalline aggregates that are only approximately isotropic, that nu is not exactly 0.30, and that handbook moduli are rounded class averages rather than the properties of the specific alloy in front of you.

### Elastic and plastic deformation, unloading, and residual stress

Elastic deformation is recoverable: remove the load and the material retraces its path to the original size. Plastic deformation is not, and the geometry of unloading shows why. Unload a specimen from a point beyond yield and it does not retrace the curve. It follows a straight line of slope E, parallel to the original elastic line, down to zero stress, arriving at a strain that is smaller than where it started but larger than zero. The elastic part of the strain came back; the plastic part is permanent set. Reload and it climbs that same line, now behaving elastically up to the higher stress it had reached, which is one way strain hardening is exploited deliberately. The consequence for real parts is residual stress. Plastic straining is rarely uniform through a component, because bending, rolling, welding, quenching, and pressing all yield some regions before others. When the external load comes off, the regions that flowed and the regions that stayed elastic cannot both relax to their preferred size, so they load each other. The result is a self-equilibrating internal stress field that persists with nothing applied from outside, and it adds to or subtracts from any service stress that follows.

### Where sigma = P/A stops: geometric discontinuities and thermal restraint

Two everyday situations break the uniform-stress picture, and students consistently underestimate the first. A hole, notch, fillet, or keyway forces the internal force to flow around the discontinuity, and the streamlines crowd at the edge. The stress concentration factor Kt is the ratio of the peak local stress to the nominal stress computed from simple geometry. For the classical case of a small circular hole in a very wide plate under tension, elasticity theory gives a peak of exactly three times the applied remote stress while the material stays elastic, independent of hole size. That is the surprise: drilling a 6 mm hole in a 120 mm wide, 10 mm thick plate removes 5 percent of the section and raises the average net stress from 50.0 MPa only to 52.6 MPa, but the material at the hole edge sees roughly 150 MPa. Sharper features are worse, because the peak depends on how tightly the boundary turns, and a crack is the limiting case where the elastic solution goes to infinity. Two things soften the picture in practice: once the local stress reaches yield, plastic flow in a ductile metal redistributes load and reduces the actual concentration below the elastic value, which is a large part of why ductile metals tolerate holes better than brittle ones do; and concentrations matter far more under fatigue loading and in brittle materials than under a single static load on a ductile one. Thermal effects break the picture from the other direction. A temperature change produces a free thermal strain epsilon = alpha delta_T, where alpha is the coefficient of linear thermal expansion. Left free to move, a member takes that strain and carries no stress at all. Restrain it and the mechanical strain must exactly cancel the thermal strain, which requires sigma = -E alpha delta_T. Notice what is absent from that expression: length and cross-sectional area. A fully restrained member develops the same thermal stress whether it is a metre long or ten, and making it fatter does not help. This is stress with no external load anywhere in the problem, and it is why expansion joints, slotted holes, and flexible loops exist.

### Scope and limits of this lesson

Everything here is educational material, not engineering design guidance. The formulas are the idealized, small-deformation, uniform-section, isotropic, room-temperature versions taught to make the concepts visible; real components involve combined loading, stress states that need a failure theory rather than a single number, rate and temperature dependence, manufacturing variation, and code-specified allowable values that this lesson deliberately does not quote. No allowable stress, load factor, or design value appears anywhere above, and the moduli and expansion coefficients used in the examples are approximate class averages taken from an open physics text, used as arithmetic inputs and not as material certification. Designing or checking a real structure, pressure vessel, or machine element requires a licensed engineer working to the governing code and to verified data for the specific material and heat treatment.

## Key Vocabulary

- **Normal stress** — The internal force acting perpendicular to a cut surface divided by the area of that surface, written sigma = P/A and measured in pascals.
- **Shear stress** — The internal force acting parallel to a surface divided by the area of that surface, written tau = V/A, with the same units as normal stress.
- **Normal strain** — Change in length divided by original length, a dimensionless ratio often reported in percent or in microstrain, where one microstrain is 10^-6 metre per metre.
- **Shear strain** — The change in an originally right angle within a deformed material, measured in radians and therefore dimensionless.
- **Young's modulus** — The slope of the initial straight portion of a stress-strain curve, relating stress to strain through Hooke's law and carrying the units of stress.
- **Proportional limit** — The largest stress for which stress and strain remain in a straight-line relationship, marking the end of Hooke's law behaviour.
- **Offset yield strength** — For a metal with no sharp knee in its curve, the stress found where a line of slope E drawn from 0.2 percent strain crosses the measured curve.
- **Ultimate tensile strength** — The maximum engineering stress a specimen reaches during a tension test, occurring at the onset of necking rather than at fracture.
- **Poisson's ratio** — The negative of transverse strain divided by axial strain, roughly 0.3 for metals and capped near 0.5 for ordinary isotropic solids.
- **Stress concentration factor** — The ratio of the peak local stress near a hole, notch, or fillet to the nominal stress calculated from simple cross-section geometry.

## Eli-10

Forget formulas for a moment and think about two questions a material asks when you load it. First: how hard am I being squeezed or pulled, per little patch of my area? That is stress. A big force spread over a big area is gentle; the same force funnelled through a thin neck is brutal. Second: how much did I change shape compared with how big I was to start? That is strain. Neither question can be answered with a force alone, and that is the whole reason both quantities exist. A tension test asks both questions at once, thousands of times, while pulling a bar apart, and the graph it draws is a portrait of the material: how stiff it is, when it stops springing back, how much abuse it absorbs, and where it finally gives up.

## Eli's Analogy

Stress is the difference between standing on fresh snow in snowshoes and standing on it in stiletto heels. Your weight is identical either way; the snow only cares how much of it has to carry that weight. In snowshoes the snow holds. In heels the same force is concentrated into a few square centimetres and you punch straight through.

**Where the analogy breaks down.** The analogy carries force intensity and nothing else. Snow pressure is external contact pressure, while stress is internal, carried by material on both sides of an imaginary cut. Snow crushes and stays crushed rather than springing back along a straight elastic line, so it teaches nothing about Young's modulus, yielding, or strain hardening. And it has no counterpart for strain at all, since a material's fractional change in shape is a separate measurement from the load that caused it.

## Worked Example

Example 1, an axially loaded rod. A round steel rod of diameter 20.0 mm and length 2.50 m carries an axial tensile load of 60.0 kN; take E = 200 GPa. Area A = pi d^2 / 4 = pi (0.0200 m)^2 / 4 = 3.1416 x 10^-4 m^2 = 314.2 mm^2. Stress sigma = P/A = 60.0 x 10^3 N / 3.1416 x 10^-4 m^2 = 1.910 x 10^8 Pa = 191 MPa, which is 191 x 10^6 Pa / 6.894757 x 10^6 Pa per ksi = 27.7 ksi. Strain epsilon = sigma/E = 1.910 x 10^8 Pa / 2.00 x 10^11 Pa = 9.55 x 10^-4, that is 955 microstrain or 0.0955 percent. Elongation delta = PL/(AE) = epsilon L = 9.55 x 10^-4 x 2.50 m = 2.39 x 10^-3 m = 2.39 mm. With Poisson's ratio 0.30 the lateral strain is -2.86 x 10^-4 and the diameter shrinks about 5.7 micrometres. Three significant figures are reported because the inputs carry three. Example 2, thermal stress in a restrained member. The same steel bar, now held between supports stiff enough to prevent any axial movement, is warmed 40 degrees Celsius; take alpha = 12 x 10^-6 per degree Celsius. Free thermal strain would be alpha delta_T = 12 x 10^-6 /degC x 40 degC = 4.8 x 10^-4, that is 480 microstrain, and unrestrained the 2.50 m bar would lengthen 1.20 mm. Because the supports force the net strain to zero, a mechanical strain of -4.8 x 10^-4 must be supplied by stress: sigma = -E alpha delta_T = -(2.00 x 10^11 Pa)(4.8 x 10^-4) = -96 MPa, a compressive stress of 96 MPa, about 14 ksi. Two significant figures are justified because alpha and delta_T carry two. On the 314.2 mm^2 section that is a compressive force of 30 kN, generated by nothing but a temperature change and a pair of rigid supports.

## Common Mistakes

- **Comparing a force in kilonewtons against a material strength in megapascals, or assuming a bigger force always means a more highly stressed part.**
  - Convert to stress first. Stress is force divided by the area carrying it, so a smaller section under the same load is more highly stressed. The 60 kN example goes from 191 MPa to 298 MPa on nothing but a diameter change from 20 mm to 16 mm.
- **Reading the downturn after the ultimate tensile strength as the material weakening, and treating the UTS as the stress at which the specimen breaks.**
  - The UTS is the peak of the engineering curve, where necking begins, not the fracture point. The engineering curve falls only because the plotted stress is referred to the original area while the real area is shrinking; the true stress curve keeps rising to fracture.
- **Looking for a sharp yield point on every metal's curve, or drawing the 0.2 percent offset line from the origin.**
  - Many metals, including aluminium alloys, have no distinct knee. The offset line starts at 0.2 percent on the strain axis, not at the origin, and is drawn with slope E; the yield strength is the stress where it intersects the measured curve.
- **Sizing a member from the net section at a hole and assuming that accounts for the hole.**
  - Net-section area corrects the average stress by a few percent; the local peak at the hole edge is a separate and much larger effect, reaching three times the remote stress for a small circular hole in a wide elastic plate.
- **Assuming a member with no external load applied to it carries no stress.**
  - Restrain a member and heat or cool it and you get sigma = -E alpha delta_T with no external load at all, independent of its length and area. Prior plastic working leaves residual stresses for the same reason.

## Compare / Contrast

- **Engineering stress and strain (P/A0 and delta/L0)** vs **True stress and strain (P/A and ln(L/L0))** — Engineering values are referred to the original geometry and are what a testing machine reports directly; true values are referred to the instantaneous geometry. They diverge once deformation becomes large, which is why the engineering curve turns down after the ultimate strength while the true curve keeps rising.
- **Normal stress, sigma = P/A** vs **Shear stress, tau = V/A** — Both are force per unit area with identical units, but normal stress acts perpendicular to the surface and shear stress acts in its plane. Yield in metals is driven by shearing stresses; brittle fracture is driven by normal stresses separating planes.
- **Proportional limit** vs **Elastic limit and yield strength** — The proportional limit ends the straight line, so it is about linearity. The elastic limit ends recoverable behaviour, so it is about permanence. They are close but not identical, and the offset yield strength is a third, constructed quantity defined by a stated amount of permanent strain.
- **Elastic deformation** vs **Plastic deformation** — Elastic strain is fully recovered on unloading; plastic strain is not. Unloading from the plastic region follows a line of slope E parallel to the original elastic line, leaving permanent set, and non-uniform plastic straining leaves residual stress behind.

## Key Takeaway

Stress normalizes force to the area carrying it and strain normalizes deformation to the original size, and the curve relating the two, read from its elastic slope through yield, hardening, necking, and fracture, is where a material's mechanical behaviour is actually defined.

## Practice Question Bank

**1. Normal stress in an axially loaded member is defined as which of the following?**

   A. The applied force multiplied by the length of the member
   B. The internal force perpendicular to a cut section divided by the area of that section
   C. The change in length of the member divided by its original length
   D. The internal force divided by the volume of the member

   *Answer:* B. Normal stress is force intensity: the internal force acting perpendicular to a cut surface divided by the area carrying it, sigma = P/A, with SI unit the pascal. Force times length is work, not stress. Change in length over original length is normal strain, which is dimensionless. Force over volume is not a defined mechanics-of-materials quantity.

   *Difficulty:* recall · *Skill:* Defining normal stress and distinguishing it from strain · *Sources:* openstax-university-physics-1-stress-strain-and-elastic-modulus, libretexts-roylance-introduction-to-elastic-response

**2. A square aluminium bar 10.0 mm by 10.0 mm and 1.20 m long carries an axial tensile load of 14.0 kN. Taking E = 70 GPa, what are the axial stress and the elongation?**

   A. 140 MPa and 2.40 mm
   B. 1400 MPa and 24.0 mm
   C. 140 MPa and 0.840 mm
   D. 14.0 MPa and 0.240 mm

   *Answer:* A. A = 10.0 mm x 10.0 mm = 100 mm^2 = 1.00 x 10^-4 m^2, so sigma = 14.0 x 10^3 N / 1.00 x 10^-4 m^2 = 140 MPa. Strain = 140 x 10^6 / 70 x 10^9 = 2.00 x 10^-3, and delta = PL/(AE) = 2.00 x 10^-3 x 1.20 m = 2.40 mm. The 1400 MPa option comes from using 10 mm^2 for the area; the 0.840 mm option comes from using steel's 200 GPa instead of 70 GPa.

   *Difficulty:* application · *Skill:* Applying sigma = P/A and delta = PL/AE with unit conversion · *Sources:* libretexts-roylance-introduction-to-elastic-response, openstax-university-physics-1-stress-strain-and-elastic-modulus

**3. Why does the engineering stress-strain curve of a ductile metal fall after the ultimate tensile strength even though the material is still strain hardening?**

   A. The metal loses strength as dislocations are exhausted near fracture
   B. The testing machine reduces the applied load once necking starts
   C. Engineering stress uses the original area, and the necked region's real area shrinks faster than hardening raises the true stress
   D. Elastic recovery in the unnecked portion subtracts from the measured load

   *Answer:* C. Engineering stress is P/A0, referred to the original cross-section. Past the ultimate strength, plastic flow reduces the actual area faster than strain hardening raises the true stress the material carries, so the load, and with it the plotted engineering stress, falls. The true stress curve continues upward to fracture, so the material is not weakening, and the machine does not decide to reduce the load.

   *Difficulty:* understanding · *Skill:* Distinguishing engineering from true stress and explaining the post-UTS downturn · *Sources:* libretexts-roylance-stress-strain-curves

**4. An aluminium alloy shows no sharp yield point on its stress-strain curve. How is its yield strength determined by the 0.2 percent offset method?**

   A. By reading the stress at which the curve reaches its maximum value
   B. By drawing a line of slope E from 0.2 percent strain on the strain axis and taking the stress where it crosses the curve
   C. By drawing a line from the origin to the fracture point and taking 0.2 percent of that stress
   D. By taking the stress at which total strain first reaches 0.2 percent

   *Answer:* B. The offset construction starts on the strain axis at 0.2 percent, not at the origin, and uses a line parallel to the initial elastic slope E. The intersection with the measured curve is the offset yield strength, and it corresponds to the stress that would leave 0.2 percent permanent strain after unloading. The curve's maximum is the ultimate tensile strength, a different quantity, and total strain of 0.2 percent includes elastic strain that would be recovered.

   *Difficulty:* understanding · *Skill:* Interpreting the 0.2 percent offset yield construction · *Sources:* libretexts-roylance-stress-strain-curves, libretexts-roylance-yield-and-plastic-flow

**5. An aluminium bar is held between supports that prevent any axial movement and is then warmed 30 degrees Celsius. Taking E = 70 GPa and alpha = 25 x 10^-6 per degree Celsius, what stress develops, and how would doubling the bar's cross-sectional area change it?**

   A. About 53 MPa compressive, and doubling the area would halve it
   B. About 53 MPa tensile, and doubling the area would leave it unchanged
   C. About 53 MPa compressive, and doubling the area would leave it unchanged
   D. Zero, because no external load is applied to the bar

   *Answer:* C. With expansion prevented, the mechanical strain must cancel the free thermal strain alpha delta_T = 25 x 10^-6 x 30 = 7.5 x 10^-4, so sigma = -E alpha delta_T = -(70 x 10^9)(7.5 x 10^-4) = -52.5 MPa, that is about 53 MPa in compression because the bar is trying to expand and cannot. Neither length nor area appears in the expression, so a fatter bar develops exactly the same stress. A restrained member with no external load is not stress-free.

   *Difficulty:* analysis · *Skill:* Analysing thermal stress in a restrained member and recognising its independence from geometry · *Sources:* libretexts-roylance-constitutive-relations, openstax-university-physics-2-thermal-expansion

## Sources

- [University Physics Volume 1, 12.3 Stress, Strain, and Elastic Modulus](https://openstax.org/books/university-physics-volume-1/pages/12-3-stress-strain-and-elastic-modulus) — OpenStax, Rice University — usage: REFERENCE_ONLY
- [University Physics Volume 1, 12.4 Elasticity and Plasticity](https://openstax.org/books/university-physics-volume-1/pages/12-4-elasticity-and-plasticity) — OpenStax, Rice University — usage: REFERENCE_ONLY
- [University Physics Volume 2, 1.3 Thermal Expansion](https://openstax.org/books/university-physics-volume-2/pages/1-3-thermal-expansion) — OpenStax, Rice University — usage: REFERENCE_ONLY
- [Mechanics of Materials, 1.1: Introduction to Elastic Response](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)/01:_Tensile_Response_of_Materials/1.01:_Introduction_to_Elastic_Response) — David Roylance, MIT (Mechanics of Materials, Engineering LibreTexts) — usage: REFERENCE_ONLY — CC BY-NC-SA 4.0
- [Mechanics of Materials, 1.4: Stress-Strain Curves](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)/01:_Tensile_Response_of_Materials/1.04:_Stress-Strain_Curves) — David Roylance, MIT (Mechanics of Materials, Engineering LibreTexts) — usage: REFERENCE_ONLY — CC BY-NC-SA 4.0
- [Mechanics of Materials, 2.2: Pressure Vessels](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)/02:_Simple_Tensile_and_Shear_Structures/2.02:_Pressure_Vessels) — David Roylance, MIT (Mechanics of Materials, Engineering LibreTexts) — usage: REFERENCE_ONLY — CC BY-NC-SA 4.0
- [Mechanics of Materials, 2.3: Shear and Torsion](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)/02:_Simple_Tensile_and_Shear_Structures/2.03:_Shear_and_Torsion) — David Roylance, MIT (Mechanics of Materials, Engineering LibreTexts) — usage: REFERENCE_ONLY — CC BY-NC-SA 4.0
- [Mechanics of Materials, 3.1: Kinematics](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)/03:_General_Concepts_of_Stress_and_Strain/3.01:_Kinematics) — David Roylance, MIT (Mechanics of Materials, Engineering LibreTexts) — usage: REFERENCE_ONLY — CC BY-NC-SA 4.0
- [Mechanics of Materials, 3.4: Constitutive Relations](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)/03:_General_Concepts_of_Stress_and_Strain/3.04:_Constitutive_Relations) — David Roylance, MIT (Mechanics of Materials, Engineering LibreTexts) — usage: REFERENCE_ONLY — CC BY-NC-SA 4.0
- [Mechanics of Materials, 6.1: Yield and Plastic Flow](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)/06:_Yield_and_Fracture/6.01:_Yield_and_Plastic_Flow) — David Roylance, MIT (Mechanics of Materials, Engineering LibreTexts) — usage: REFERENCE_ONLY — CC BY-NC-SA 4.0
- [NACA Technical Note 2073: Stress and Strain Concentration at a Circular Hole in an Infinite Plate](https://ntrs.nasa.gov/citations/19930082747) — National Advisory Committee for Aeronautics (E. Z. Stowell, 1950), via NASA Technical Reports Server — usage: PUBLIC_DOMAIN
- [NIST Guide to the SI, Appendix B.9: Conversion Factors Listed by Kind of Quantity](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9) — National Institute of Standards and Technology (NIST Special Publication 811, 2008 edition) — usage: REFERENCE_ONLY
- [NIST Guide to the SI, Chapter 7: Rules and Style Conventions for Expressing Values of Quantities](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-7-rules-and-style-conventions-expressing-values) — National Institute of Standards and Technology (NIST Special Publication 811, 2008 edition) — usage: REFERENCE_ONLY

## Related Topics

- `engineering-fundamentals:materials:material-properties`
- `engineering-fundamentals:mechanics:statics`
- `engineering-fundamentals:materials:material-selection`
- `engineering-fundamentals:engineering-practice:safety-factors-and-failure`

## Editorial Metadata

- Topic id: `engineering-fundamentals:materials:stress-and-strain`
- Editorial status: READY_TO_PUBLISH
- Estimated minutes: 12
- Researched at: 2026-08-19
- Research status: source-verified
- Rights status: All sources held REFERENCE_ONLY except the public-domain NASA/NACA and NIST records; no source prose adapted, all wording original.
- Transformation: Definitions, curve landmarks, elastic-constant relations, and the stress-concentration and thermal-restraint results were verified against open textbooks and government sources, then rewritten as original prose. Every number in the lesson, the worked examples, and the question bank was executed in Python before publication.
- Every numeric result in this lesson, including the worked examples and the arithmetic inside the question bank, was executed in Python before publication.
- This lesson is educational material, not engineering design guidance. It quotes no allowable stress, load factor, or design value from any standard. Real design requires a licensed engineer working to the governing code.
