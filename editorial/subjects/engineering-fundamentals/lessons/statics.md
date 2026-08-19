# Statics

## In 30 Seconds

Statics is the analysis of bodies that are not accelerating. Two conditions must hold together: the forces on the body sum to zero, and the moments sum to zero. The second does not follow from the first. Two equal and opposite forces offset by any distance leave zero net force and still spin the body. In two dimensions those conditions supply exactly three scalar equations, and three is the entire budget you have to spend on unknown reactions.

## Why This Matters

Statics is the gate topic for structural analysis, machine design, mechanics of materials, and most of dynamics, and the habits it builds are unusually durable. Counting unknowns against available equations tells you before you start whether a problem is solvable at all, which is the same judgement that separates a determinate structure from one that needs a stiffness analysis. Choosing where to sum moments turns a three-equation simultaneous system into one line of arithmetic, and that choice is a skill, not luck. Engineers still reach for these methods to size a lifting lug, check whether a parked crane tips, or sanity-check what a finite element model just reported. A hand calculation you trust is the best defence against a plausible-looking wrong answer from software.

## Learning Objectives

- Define static equilibrium and explain why the force condition and the moment condition are independent requirements.
- Calculate the moment of a force about a point using the perpendicular-distance rule, the sign convention, and the cross-product form.
- Apply a chosen moment centre to eliminate unknown reactions, and verify a solution by re-summing moments about a different point.
- Distinguish statically determinate from statically indeterminate systems by counting unknowns against available equilibrium equations.
- Analyse a simple truss by the method of joints and the method of sections, identifying zero-force members and stating the idealisations relied on.
- Evaluate whether a body on a rough surface slides or tips first by comparing the force required for each.

## The College Version

### Two conditions, and why one is not enough

A body is in static equilibrium when it has no linear and no angular acceleration. Newton's second law turns the first half into a force statement: the vector sum of all external forces on the body must be zero. The rotational half is a separate statement: the vector sum of all external moments must also be zero.

Students routinely treat the second as bookkeeping that follows from the first. It does not. Picture a wrench on a frictionless table. Push the top of the handle right with 5.00 N and the bottom left with 5.00 N, the two lines of action 0.400 m apart. The force sum is exactly zero, so the centre of mass never accelerates, but the moment sum is 5.00 N x 0.400 m = 2.00 N.m, so the wrench spins in place. Zero net force buys a stationary centre of mass and nothing else.

In components, three dimensions give three force and three moment equations. In a plane the out-of-plane force equation and two of the moment equations carry no information, leaving three: x-forces, y-forces, and moments about the z-axis. Three is a hard ceiling, and most strategy in statics is about spending those three well. Note also that equilibrium is not the same as rest: a body translating at constant velocity satisfies both conditions, which is why statics covers a conveyor at steady speed or an aircraft in unaccelerated level flight.

### The moment of a force about a point

A moment measures how strongly a force tends to rotate a body about a chosen point. In the scalar form used constantly in planar work, its magnitude is the force magnitude times the perpendicular distance from the point to the force's line of action. That distance is the moment arm, and perpendicular is doing all the work: not the distance to the point of application, but the shortest distance to the whole infinite line the force acts along. The unit is the newton metre, N.m, which NIST lists as the SI unit for moment of force.

One consequence is worth memorising. If the line of action passes through the point you are summing about, the moment arm is zero and the force contributes nothing to that equation. This is exact, not an approximation, and it is the lever that makes moment equations useful.

Sign convention in two dimensions is a choice you make and then keep; the usual one takes counter-clockwise as positive, corresponding to a moment vector out of the page.

In three dimensions the moment is genuinely a vector, M = r x F, where r runs from the moment centre to any point on the force's line of action. Any point on that line gives the same answer, which is the vector restatement of the perpendicular-distance rule. Direction follows the right-hand rule, and the magnitude reduces to force times perpendicular distance because the cross product already carries the sine of the angle between r and F.

### Sum moments about any point, then choose the point that helps

For a body in equilibrium the moment sum is zero about every point in space. Shifting the moment centre changes the total by the shift vector crossed into the total force, and in equilibrium the total force is already zero, so the correction vanishes. Equilibrium is what makes the moment centre arbitrary.

That freedom is the most useful tactic in statics. Because a force through your chosen point contributes nothing, pick the point that kills the unknowns you do not want: summing about a pin support removes both of its components at once and leaves one equation in one unknown. Where two unknown lines of action intersect is usually the right point, even if no support sits there.

The same freedom gives a free check: solve using one moment centre, then re-sum about a different point. Equilibrium demands zero.

A couple is the limiting case. Two parallel forces, equal, opposite, and not sharing a line of action, give a zero resultant force and a moment equal to one force times the perpendicular distance between the lines. That moment is the same about every point, so a couple can be moved anywhere on a rigid body without changing its external effect, which is why applied torques enter equilibrium equations with no location attached. Relocating a couple does change the internal force distribution, though, even when the reactions are untouched. More generally, any force system on a rigid body reduces to a statically equivalent resultant: a single force through a chosen point plus a couple.

### Counting: determinate, indeterminate, and improperly constrained

Before solving anything, count. In two dimensions you have three equations against however many unknown reaction components the supports introduce. If the unknowns number three or fewer and the supports are properly arranged, statics alone finds them and the problem is statically determinate. A pin at one end contributing two components plus a roller contributing one gives exactly three, which is why the simply supported beam is the standard example.

Replace the roller with a second pin and you have four unknowns against three equations: statically indeterminate to the first degree. The structure is real and its forces are definite; statics simply cannot name them, because infinitely many reaction combinations satisfy equilibrium, and equilibrium is all statics knows.

Deformation resolves it. Allowing the structure to stretch and bend adds compatibility, which requires the deformed parts still to fit together, and constitutive relations tying force to deformation through material stiffness. Those carry material properties, so the answer depends on what the structure is made of and how large its cross sections are. That is why indeterminate analysis belongs to mechanics of materials, and why a steel tie and an aluminium tie in the same over-constrained frame do not share the load equally.

Counting is necessary, not sufficient. If all reaction lines of action meet at one point, nothing resists rotation about it; if all reaction components are parallel, nothing resists translation across them. Both are improperly constrained: the count looks right, the equations turn out not to be independent, and the body is unstable. This kind of stability depends on support geometry, not on the loading.

### Two-force and three-force members

Two shortcuts pay for themselves repeatedly. A two-force member is a body loaded at exactly two points with no applied couples. Force equilibrium makes the two loads equal and opposite; moment equilibrium then makes them collinear, because equal and opposite forces on separate lines form a couple, and a couple has no moment-free position. So the force in a two-force member acts along the line joining its load points. If the member is straight that means pure axial tension or compression, and one unknown magnitude replaces two unknown components.

A three-force member carries forces at exactly three points. If those forces are not parallel, their lines of action must all pass through one common point. Take moments about where two of the lines cross: those two contribute nothing there, so the third must contribute nothing either, meaning its line passes through the same intersection. A simple beam carrying one load and two reactions is the everyday example; parallel forces are the degenerate alternative.

The payoff is directional information for free: knowing a reaction's direction before writing any equation often collapses a three-unknown problem to one unknown.

### Trusses: assumptions first, methods second

A truss is a framework of slender members joined at their ends, and the classical analysis works only because of a stack of idealisations. Every joint is modelled as a frictionless pin, so no joint transmits a moment. Every load and reaction is applied at a joint, never partway along a member. Consequently every member is a two-force member carrying purely axial force, and self-weight is neglected or split onto the two end joints. Real connections are not frictionless pins, so the model reports axial forces well and is blind to whatever secondary bending the real joint introduces.

The method of joints isolates one pin at a time. Forces at a pin are concurrent, so the moment equation gives no information and only two force equations are available per joint. That caps you at two unknowns per joint, so start where unknowns are few, usually at a support once the reactions are known, and walk outward. Convention assumes every unknown member force is tensile; a negative answer means compression.

The method of sections cuts through the truss and treats a whole portion as one rigid body, exposing only the members the cut crosses, so it reaches a mid-span member without solving every joint first. Each cut member is one unknown, so a planar cut through more than three members leaves you short of equations.

Zero-force members carry no load in the case analysed. Two patterns find them: at an unloaded joint connecting exactly two non-collinear members, both are zero-force; at an unloaded joint where three members meet and two are collinear, the odd one out is zero-force. The member is still not useless - it may brace a compression chord against buckling or be loaded under a different load case. The same two-equations-per-joint fact gives a determinacy count: a planar truss with j joints supplies 2j equations against m unknown member forces plus r unknown reaction components, so m + r = 2j signals static determinacy and more unknowns than that means indeterminate.

### Distributed loads, centroids, and centre of gravity

Real loads are spread out. Snow on a roof, water against a wall, and a beam's own weight act as an intensity, in newtons per metre for a line load, rather than at a point. For rigid-body equilibrium, replace a distributed load with one equivalent force whose magnitude equals the area under the load-intensity diagram and whose line of action passes through the centroid of that area.

Two cases cover most problems. A uniform intensity w over length L has resultant wL at the midpoint. A triangular load rising from zero to peak w over length L has resultant wL/2 acting one third of the length from the tall end, the centroid of a triangle. Watch units: kN/m times m gives kN.

The centroid is a weighted average of position taken with a purely geometric weight such as area or volume; the centre of mass uses mass as the weight, and the centre of gravity uses weight. NASA describes the centre of gravity as the average location of an object's weight, notes that weight always acts through it, that a freely rotating body rotates about it, and that it lies on any plane of symmetry when mass is uniform.

The three coincide when the body is homogeneous and the gravitational field uniform, because density and gravitational acceleration then factor out of the weighted average and cancel. Both conditions can fail: a plastic housing with a steel insert has its centre of mass away from its centroid, and a satellite large enough to feel a gravity gradient has a centre of gravity slightly offset from its centre of mass.

### Friction in equilibrium: impending motion, sliding, and tipping

Friction enters statics as an inequality rather than an equation, which is what makes it awkward. On a dry surface, static friction takes whatever magnitude and direction are needed to prevent sliding, up to a ceiling of the static coefficient times the normal force. Below that ceiling friction is an unknown you solve for like any other. At the ceiling motion is impending, the inequality becomes an equality, and you gain one usable equation. Beyond it the body slides and the kinetic model takes over, with a coefficient that is usually smaller. The coefficient model is an approximate empirical description, not a law, and coefficients for nominally identical surfaces scatter with finish, contamination, and humidity, so treat any tabulated value as an estimate.

Pushing a crate raises a second question: slide or tip? Solve both and compare. The force that starts sliding is the static coefficient times the normal force. The force that starts tipping comes from moment equilibrium about the edge the body would rotate over, using the fact that at impending tipping the normal force has migrated as far as it can and acts right at that edge. Whichever threshold is lower happens first, and the comparison is as much geometric as frictional: a tall narrow object pushed high tips at a force a short wide one would shrug off.

Every model here has edges. Rigid bodies do not deform, real joints are not frictionless pins, and equilibrium written on the undeformed geometry stops being valid once a structure deflects appreciably. Naming the assumption you are standing on is part of the answer.

This lesson is educational material. It is not engineering design guidance, and nothing here should be used to size, check, or approve a real structure, lifting device, or machine. Real design must be performed by a licensed engineer working to the governing code and standards.

## Key Vocabulary

- **Static equilibrium** - The state of a body with no linear and no angular acceleration, which requires the vector sum of external forces and the vector sum of external moments both to be zero.
- **Moment of a force** - A measure of how strongly a force tends to rotate a body about a chosen point, equal in magnitude to the force times the perpendicular distance from that point to the force's line of action, expressed in newton metres.
- **Moment arm** - The shortest, perpendicular distance from the chosen point to the line along which a force acts; it is zero when that line passes through the point.
- **Couple** - A pair of parallel forces, equal in magnitude and opposite in direction but not sharing a line of action, whose net force is zero and whose turning effect is the same about every point.
- **Statically determinate** - Describing a system whose unknown support reactions can all be found from the equations of equilibrium alone, because the unknowns number no more than the independent equations available.
- **Statically indeterminate** - Describing a system with more unknown reactions or member forces than independent equilibrium equations, so a solution additionally requires deformation compatibility and material stiffness.
- **Two-force member** - A body loaded at exactly two points with no applied couples, whose two loads must therefore be equal, opposite, and directed along the line joining those points.
- **Zero-force member** - A truss bar that carries no axial load under the particular loading analysed, identified from joint geometry rather than from calculation.
- **Impending motion** - The threshold condition at which a body on a rough surface is on the verge of sliding, where the friction force has reached its maximum static value.
- **Centroid** - The average position of a shape weighted by a geometric quantity such as area or volume, which coincides with the centre of gravity for a homogeneous body in a uniform gravitational field.

## Eli-10

Anything that is sitting still is being pushed and pulled from several directions at once, and those pushes have to cancel out in two different ways. First, the pushes have to cancel in the up-down direction and in the left-right direction, or the object would take off. Second, the twisting has to cancel too, or the object would start spinning even while staying in one spot. The twisting from one push depends on how hard you push and how far your push is from the spot you are twisting around. Far away means more twist from the same push, which is why a long spanner loosens a bolt that a short one will not. When you check the twisting, you get to pick which spot you check around, and picking the spot where an unknown push acts makes that unknown disappear from your sum. That one trick turns most statics problems from messy into short.

## Eli's Analogy

Think of a see-saw with a mystery weight sitting on one end. If you check the balance by pivoting around that mystery weight itself, it cannot tip anything, because it is sitting exactly on the pivot. Everything else on the plank has to balance by itself, and whatever you were trying to find drops right out of the sum.

**Where the analogy breaks down.** A see-saw only has one real pivot, and it only turns one way. In statics the pivot you choose is imaginary; you can put it anywhere at all, including outside the object, and you can move it as often as you like. The see-saw also hides the sideways part of the problem: a real body must also stop sliding, not just stop tipping, so the force sums matter as much as the twisting sum.

## Worked Example

A simply supported beam spans 6.00 m, with a pin at A (x = 0) and a roller at B (x = 6.00 m). It carries a 12.0 kN downward point load at x = 2.00 m, a uniform load of 4.00 kN/m over the right 3.00 m (from x = 3.00 m to x = 6.00 m), and an applied counter-clockwise couple of 9.00 kN.m. Self-weight is neglected and counter-clockwise moments are positive.

Step 1, reduce the distributed load. Its resultant is 4.00 kN/m x 3.00 m = 12.0 kN, acting through the centroid of the rectangle at x = (3.00 + 6.00)/2 = 4.50 m. Total downward load is 12.0 + 12.0 = 24.0 kN.

Step 2, sum moments about A. The pin's two unknown components both pass through A, so both drop out and one equation holds one unknown:
  B_y(6.00) - 12.0(2.00) - 12.0(4.50) + 9.00 = 0
  6.00 B_y = 24.0 + 54.0 - 9.00 = 69.0 kN.m, so B_y = 11.5 kN upward.
Note that the couple enters as 9.00 kN.m with no distance attached, because a couple's moment is the same about every point.

Step 3, sum vertical forces. A_y + 11.5 - 24.0 = 0, so A_y = 12.5 kN upward. Sum of horizontal forces gives A_x = 0, since no horizontal load is applied.

Step 4, verify by moving the moment centre to B:
  -A_y(6.00) + 12.0(4.00) + 12.0(1.50) + 9.00 = 0
  6.00 A_y = 48.0 + 18.0 + 9.00 = 75.0 kN.m, so A_y = 12.5 kN. The same value, from a different equation.

Step 5, verify about a point that is not a support at all, x = 4.50 m:
  12.5(-4.50) + (-12.0)(-2.50) + (-12.0)(0) + 11.5(1.50) + 9.00 = -56.25 + 30.0 + 0 + 17.25 + 9.00 = 0.00 kN.m.
Zero again, as equilibrium requires. Every figure above was executed in Python before publication, including checks about x = 0, 2.00, 4.50, 6.00 and -3.00 m, all of which return exactly zero.

## Common Mistakes

- **Checking only that the forces balance and concluding the body is in equilibrium.**
  Force balance alone permits pure rotation. Two 5.00 N forces 0.400 m apart sum to zero force but produce a 2.00 N.m couple. Both the force sum and the moment sum must vanish.
- **Using the straight-line distance from the moment centre to the point where the force is applied.**
  The moment arm is the perpendicular distance from the moment centre to the force's entire line of action. Either resolve the force into components and use each component's own perpendicular distance, or use M = r x F.
- **Believing the moment sum must be taken about a support, or that different points give different answers.**
  For a body in equilibrium the moment sum is zero about every point, because the correction term when the centre moves is the shift vector crossed into the total force, which is already zero. Choose whichever point removes the most unknowns, and re-sum about a second point as a check.
- **Deleting a zero-force member from a truss, or expecting it to be zero under every load case.**
  Zero force is a result for the particular loading analysed. The member may brace a compression chord against buckling, carry its own weight, or be heavily loaded by a different load case.
- **Trying to solve a statically indeterminate structure by hunting for a fourth equilibrium equation.**
  There is no fourth independent equation in two dimensions. Indeterminate problems close only by adding deformation compatibility and material force-displacement relations, which is why they belong to mechanics of materials.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Sum of forces equals zero | Sum of moments equals zero | The first prevents the centre of mass from accelerating; the second prevents angular acceleration. Neither implies the other, and a couple satisfies the first while violating the second. |
| Statically determinate | Statically indeterminate | Determinate systems are solvable from equilibrium alone because unknowns do not exceed independent equations. Indeterminate systems need compatibility of deformation and material stiffness, so their internal forces depend on what the structure is made of. |
| Method of joints | Method of sections | Joints isolates one pin at a time and gives two equations per joint, so it suits solving a whole truss. Sections cuts through the structure, gives three equations per free body, and reaches one interior member without solving the rest. |
| Centroid | Centre of gravity | The centroid is a purely geometric average over area or volume; the centre of gravity is the average weighted by weight. They coincide for a homogeneous body in a uniform gravitational field and separate when density varies or the field does. |
| Sliding | Tipping | Sliding is governed by the friction ceiling, the static coefficient times the normal force. Tipping is governed by moment equilibrium about the contact edge and depends on the body's width, height, and where the push is applied. The mode requiring less force occurs first. |

## Key Takeaway

Static equilibrium demands that both the force sum and the moment sum vanish, and in two dimensions that supplies exactly three equations. Count them against your unknowns before you solve, choose the moment centre that erases the unknowns you do not want, and re-sum about a different point to check the answer.

## Practice Question Bank

**1. In two dimensions, how many independent scalar equilibrium equations does a rigid body provide?**

   A. Two
   B. Three
   C. Four
   D. Six

   *Answer:* B. The vector conditions expand to three force and three moment equations in three dimensions. In a plane, the out-of-plane force equation and two of the moment equations carry no information, leaving two force equations and one moment equation, three in all. Six is the three-dimensional count.
   *Difficulty:* recall | *Skill:* Recalling the number of available planar equilibrium equations | *Sources:* libretexts-engineering-statics-equations-of-equilibrium, libretexts-mechanics-map-rigid-body-equilibrium

**2. Two forces of 5.00 N each act on a free body in opposite directions along parallel lines 0.400 m apart. What is the state of the body?**

   A. In equilibrium, because the net force is zero
   B. Not in equilibrium: the net force is 10.0 N
   C. In equilibrium, because the two forces form an action-reaction pair
   D. Not in equilibrium: the net force is zero but a 2.00 N.m couple remains

   *Answer:* D. The forces cancel, so the centre of mass does not accelerate, but they are not collinear, so they form a couple of 5.00 N x 0.400 m = 2.00 N.m and the body has angular acceleration. The net force is zero, not 10.0 N, and action-reaction pairs act on two different bodies so they never both appear on one free body.
   *Difficulty:* understanding | *Skill:* Distinguishing the force condition from the moment condition | *Sources:* libretexts-engineering-statics-couples, libretexts-engineering-statics-equations-of-equilibrium

**3. A beam has a pin at A and a roller at B. Why is summing moments about A usually the best first move?**

   A. Because moment sums are only valid about a support point
   B. Because both unknown pin components pass through A and contribute no moment there, leaving one equation in one unknown
   C. Because the pin carries more load than the roller
   D. Because the moment of a force is largest at the point of application

   *Answer:* B. A force whose line of action passes through the moment centre has zero moment arm and drops out. Summing about the pin removes both of its components at once, so the equation contains only the roller reaction. The moment sum is valid about any point for a body in equilibrium, not just supports, and the moment of a force is zero, not largest, at a point on its line of action.
   *Difficulty:* application | *Skill:* Choosing a moment centre that eliminates unknowns | *Sources:* libretexts-mechanics-map-rigid-body-equilibrium, libretexts-engineering-statics-magnitude-of-a-moment, libretexts-engineering-statics-stability-and-determinacy

**4. A single rigid beam in a plane is held by a pin support at each end and nothing else. What follows?**

   A. It is statically determinate, with four unknowns and four equations
   B. It is unstable, because two pins cannot resist rotation
   C. It is statically indeterminate to the first degree, and its reactions depend on member stiffness
   D. Its reactions can be found by summing moments about three different points

   *Answer:* C. Two pins introduce four unknown reaction components against the three available planar equations, one more unknown than equations. Extra moment equations about other points are not independent, so no amount of re-summing closes the gap. The reactions follow only after adding deformation compatibility and material force-displacement relations, which is why the answer depends on member stiffness.
   *Difficulty:* analysis | *Skill:* Assessing determinacy by counting unknowns against equations | *Sources:* libretexts-engineering-statics-stability-and-determinacy, mit-ocw-1050-indeterminate-systems, libretexts-mechanics-map-rigid-body-equilibrium

**5. A uniform crate 0.600 m wide and weighing 588 N sits on a floor with a static friction coefficient of 0.400. A horizontal push is applied 0.900 m above the floor and slowly increased. What happens first?**

   A. It slides, at about 196 N
   B. It tips, at about 235 N
   C. It tips, at about 196 N
   D. It slides, at about 235 N

   *Answer:* C. Sliding needs 0.400 x 588 N = 235 N. Tipping needs moment equilibrium about the far bottom edge to fail: P(0.900 m) = 588 N x 0.300 m, so P = 196 N. Tipping requires less force, so the crate tips first, at about 196 N. The two options pairing the right mode with the wrong number swap the two thresholds.
   *Difficulty:* application | *Skill:* Comparing sliding and tipping thresholds | *Sources:* libretexts-mechanics-map-slipping-vs-tipping, libretexts-mechanics-map-dry-friction, openstax-university-physics-1-friction

## Sources

- `libretexts-engineering-statics-equilibrium` - [Engineering Statics: Open and Interactive, 3.1 Equilibrium](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/03:_Equilibrium_of_Particles/3.01:_Equilibrium), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-equations-of-equilibrium` - [Engineering Statics: Open and Interactive, 5.3 Equations of Equilibrium](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/05:_Rigid_Body_Equilibrium/5.03:_Equations_of_Equilibrium), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-stability-and-determinacy` - [Engineering Statics: Open and Interactive, 5.6 Stability and Determinacy](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/05:_Rigid_Body_Equilibrium/5.06:_Stability_and_Determinacy), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-magnitude-of-a-moment` - [Engineering Statics: Open and Interactive, 4.2 Magnitude of a Moment](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/04:_Moments_and_Static_Equivalence/4.02:_Magnitude_of_a_Moment), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-direction-of-a-moment` - [Engineering Statics: Open and Interactive, 4.1 Direction of a Moment](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/04:_Moments_and_Static_Equivalence/4.01:_Direction_of_a_Moment), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-couples` - [Engineering Statics: Open and Interactive, 4.5 Couples](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/04:_Moments_and_Static_Equivalence/4.05:_Couples), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-trusses` - [Engineering Statics: Open and Interactive, 6.3 Trusses](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/06:_Equilibrium_of_Structures/6.03:_Trusses), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-method-of-joints` - [Engineering Statics: Open and Interactive, 6.4 Method of Joints](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/06:_Equilibrium_of_Structures/6.04:_Method_of_Joints), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-method-of-sections` - [Engineering Statics: Open and Interactive, 6.5 Method of Sections](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/06:_Equilibrium_of_Structures/6.05:_Method_of_Sections), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-distributed-loads` - [Engineering Statics: Open and Interactive, 7.8 Distributed Loads](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/07:_Centroids_and_Centers_of_Gravity/7.08:_Distributed_Loads), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-centroids` - [Engineering Statics: Open and Interactive, 7.4 Centroids](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/07:_Centroids_and_Centers_of_Gravity/7.04:_Centroids), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-engineering-statics-center-of-gravity` - [Engineering Statics: Open and Interactive, 7.2 Center of Gravity](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics:_Open_and_Interactive_(Baker_and_Haynes)/07:_Centroids_and_Centers_of_Gravity/7.02:_Center_of_Gravity), Daniel W. Baker and William Haynes, Colorado State University, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (stated on the page).
- `libretexts-mechanics-map-rigid-body-equilibrium` - [Mechanics Map, 3.6 Equilibrium Analysis for a Rigid Body](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_et_al.)/03:_Static_Equilibrium_in_Rigid_Body_Systems/3.06:_Equilibrium_Analysis_for_a_Rigid_Body), Jacob Moore and contributors, Penn State Mont Alto, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-SA 4.0 (stated on the page).
- `libretexts-mechanics-map-two-force-members` - [Mechanics Map, 5.2 Two-Force Members](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_et_al.)/05:_Engineering_Structures/5.02:_Two-Force_Members), Jacob Moore and contributors, Penn State Mont Alto, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-SA 4.0 (stated on the page).
- `libretexts-mechanics-map-dry-friction` - [Mechanics Map, 6.1 Dry Friction](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_et_al.)/06:_Friction_and_Friction_Applications/6.01:_Dry_Friction), Jacob Moore and contributors, Penn State Mont Alto, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-SA 4.0 (stated on the page).
- `libretexts-mechanics-map-slipping-vs-tipping` - [Mechanics Map, 6.2 Slipping vs Tipping](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_et_al.)/06:_Friction_and_Friction_Applications/6.02:_Slipping_vs_Tipping), Jacob Moore and contributors, Penn State Mont Alto, hosted on Engineering LibreTexts. Usage: REFERENCE_ONLY; CC BY-SA 4.0 (stated on the page).
- `mit-ocw-1050-indeterminate-systems` - [Solid Mechanics (1.050), Chapter 5: Indeterminate Systems](https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/), Louis L. Bucciarelli, MIT OpenCourseWare. Usage: REFERENCE_ONLY; CC BY-NC-SA 4.0 (MIT OpenCourseWare course licence).
- `mit-4441-two-and-three-force-members` - [Two- and Three-Force Members (4.441 Basic Structural Design lecture notes)](https://web.mit.edu/4.441/1_lectures/1_lecture15/1_lecture15.html), Chris H. Luebkeman and Donald Peting, Massachusetts Institute of Technology. Usage: REFERENCE_ONLY; No open licence offered; page carries a 1995-1997 copyright notice by the authors.
- `nist-sp811-chapter-4-classes-of-si-units` - [NIST Guide to the SI, Chapter 4: Two Classes of SI Units and the SI Prefixes](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes), National Institute of Standards and Technology. Usage: REFERENCE_ONLY; no explicit licence located.
- `nasa-bga-center-of-gravity` - [Center of Gravity (Beginner's Guide to Aeronautics)](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/center-of-gravity/), NASA Glenn Research Center. Usage: REFERENCE_ONLY; no explicit licence located.
- `openstax-university-physics-1-friction` - [University Physics Volume 1, 6.2 Friction](https://openstax.org/books/university-physics-volume-1/pages/6-2-friction), OpenStax, Rice University. Usage: REFERENCE_ONLY; no explicit licence located.

## Related Topics

- `engineering-fundamentals:mechanics:free-body-diagrams`
- `engineering-fundamentals:mechanics:force-and-motion`
- `engineering-fundamentals:mechanics:dynamics`
- `engineering-fundamentals:materials:stress-and-strain`
- `engineering-fundamentals:engineering-practice:safety-factors-and-failure`

## Editorial Metadata

- Topic id: `engineering-fundamentals:mechanics:statics`
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-19
- Research status: source-verified
- Rights: All sources held REFERENCE_ONLY. The LibreTexts open textbooks are CC BY-NC-SA or CC BY-SA and the MIT materials are non-commercial or fully copyrighted, so no source wording was reproduced or adapted; facts were synthesized and the prose written for this lesson.
- Transformation: Concepts verified against open engineering-statics textbooks, MIT OpenCourseWare, NIST SP 811 and NASA Glenn reference pages, then rewritten as original prose. Every numerical value in the lesson, worked example, mistakes and questions was executed in Python before publication.
- Estimated reading time: 16 minutes
- Numerical verification: every figure in the college version, worked example, common mistakes and question bank was executed in Python (exact rational arithmetic for the beam) before publication.
- Safety note: educational material only, not engineering design guidance. Real design requires a licensed engineer working to the governing code.
