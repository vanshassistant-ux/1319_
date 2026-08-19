# Engineering Constraints and Tradeoffs

## In 30 Seconds

Engineering problems arrive fenced in: budgets, deadlines, physical limits, codes, and standards. Those fences are constraints, and satisfying them is not optional. Inside the fences you still have goals worth pushing on, and pushing on one usually costs another. That is a tradeoff. Constraints decide which designs are allowed; objectives decide which allowed design you prefer. Blurring the two is the mistake this lesson exists to fix.

## Why This Matters

Every design course, capstone, and engineering job hands you a problem that is already bounded. Students who treat the bounds as annoyances write proposals that get rejected. Students who read them carefully find the small set of options actually worth analyzing, which is most of the work. Learning to separate a boundary you must satisfy from a quantity you are trying to improve makes your reasoning legible to a reviewer and lets you defend a choice instead of asserting one. It also protects you from a tempting failure: building a scoring table, watching one number come out largest, and mistaking that arithmetic for a justification when the weights you picked did the real deciding.

## Learning Objectives

- Define an engineering constraint and distinguish it from a design objective.
- Classify constraints by type, including physical, economic, schedule, manufacturability, regulatory, standards, environmental, ethical, maintainability, and safety limits.
- Explain the feasible region and the Pareto frontier, and why a design on the frontier cannot be improved on one objective without giving up another.
- Apply a weighted decision matrix to compare candidate designs and test how sensitive the ranking is to the weights.
- Analyze how requirements creep, over-constraining, and component-level optimization each corrupt a design decision.

## The College Version

### Constraints are what turn a wish into an engineering problem

Ask someone to design a better bus shelter and you have posed a wish. Add that it must sit on a concrete pad that is already poured, cost less than a stated amount, be installed in one weekend by two people, survive a local winter, and satisfy the accessibility provisions the campus is legally obliged to follow, and you have posed an engineering problem. The additions did not make the problem smaller. They made it answerable, because they told you which candidate answers can be dismissed without argument.

ABET, the body that accredits engineering degrees in the United States, defines engineering design as devising a system, component, or process to meet desired needs and specifications within constraints, and the constraint examples it names range across aesthetics, codes, constructability, cost, ergonomics, extensibility, functionality, interoperability, legal considerations, maintainability, manufacturability, marketability, policy, regulations, schedule, standards, sustainability, and usability. NASA's systems engineering guidance says the same thing more bluntly: the discipline is developing an operable system that meets requirements within often opposed constraints.

The phrase worth underlining is "often opposed." If every constraint pulled the same direction, engineering would be bookkeeping. They pull against each other, which is why judgment is required and why two competent teams can reach different defensible answers to the same brief.

### A working taxonomy of constraints

Constraints are easier to find when you know what kinds exist.

- **Physical and material limits** come from nature and from what a chosen material can actually do.
- **Cost and budget limits** cap what can be bought and built.
- **Schedule limits** cap what can be finished before the date that matters.
- **Manufacturability limits** reflect the processes and equipment actually available, since a shape nobody can make is not a design.
- **Regulatory and code requirements** are law. Under 49 CFR 571.7, each Federal Motor Vehicle Safety Standard applies according to its terms to every covered vehicle or item of equipment whose manufacture is completed on or after that standard's effective date, with narrow exceptions for military procurement and export. A vehicle that fails is not a slightly worse vehicle; it is one that may not be sold.
- **Standards** from bodies such as ASME, ASTM, IEEE, ISO, ACI, and AISC work similarly once a contract or a jurisdiction adopts them, and the NSPE Code of Ethics instructs engineers to approve only engineering documents that conform to applicable standards. Those standards are copyrighted and mostly paywalled, so this lesson names what they govern and never states a value from one.
- **Environmental and sustainability limits** cover emissions, discharge, energy, and end-of-life.
- **Maintainability limits** cover whether the thing can be inspected, serviced, and repaired by the people who will own it.
- **Ethical and social constraints** cover who is affected and who bears the risk. The first Fundamental Canon of the NSPE Code tells engineers to hold paramount the safety, health, and welfare of the public.
- **Safety constraints** run through all of these. The specific machinery of factors of safety and failure criteria belongs to the later `safety-factors-and-failure` lesson rather than here.

### Hard constraints versus objectives

This is the distinction students blur most often, and it is worth stating carefully. A hard constraint is a pass/fail test applied to a candidate design. A candidate either satisfies it or does not, and one that does not is removed from consideration rather than penalized. An objective is a quantity you are trying to make larger or smaller, and it does not admit or exclude anything; it only ranks the candidates that survived the constraints.

"Total mass must not exceed 4.0 kg" is a constraint. "Make it as light as we reasonably can" is an objective. Notice that the same physical quantity, mass, appears in both roles, and that fact is the source of most of the confusion. The constraint is a line; the objective is a direction.

Confusing them produces two characteristic errors in opposite directions. Scoring a constraint, so that a candidate 20 percent over the mass limit merely loses a few points, quietly readmits designs that are not allowed to exist. Treating an objective as a constraint, by inventing a hard target for something that was only a preference, throws away good designs that missed an arbitrary line.

In project documentation both usually get written as requirements, which is part of why the distinction gets lost; the requirements-versus-specifications machinery is covered in the `engineering-design-process` lesson. NASA's guidance offers a useful middle form: specify performance as a threshold, the minimum acceptable value, plus a desired baseline. The threshold is the constraint, the gap up to the baseline is the objective, and stating both is what gives designers trade space to work in.

### Tradeoffs, the feasible region, and the Pareto frontier

The **design space** is every candidate you could build. The **feasible region** is the subset that satisfies every hard constraint at once. All ranking, scoring, and arguing happens inside the feasible region; anything outside it is not a weaker option but a non-option.

Within that region, objectives typically conflict. A larger battery buys endurance and costs mass and money. Thicker walls buy stiffness and cost weight. Tighter tolerances buy performance and cost manufacturing time. That is what a tradeoff is: improving one measure forces a loss on another.

Two ideas make this precise. One design **dominates** another when it is at least as good on every objective and strictly better on at least one; the dominated design can be discarded immediately, with no weighting and no discussion, because nothing about your priorities could rescue it. A design that nothing dominates is **nondominated**, and the set of nondominated designs is called **Pareto optimal**. Plot their objective values against each other and they trace the **Pareto frontier**.

The frontier is the honest answer to "what is the best design?", and the answer is that there is no single best design, only a boundary of best available combinations. Once you are on the frontier, every further gain on one axis is paid for on another. The point where every objective simultaneously reaches its best value, the utopia point, is not on the frontier and is not reachable. Choosing among frontier designs is therefore not an analysis problem that more computation will solve. It is a values problem, and it should be argued as one.

### Decision matrices and what they actually encode

The standard tool for choosing among surviving candidates is the **weighted decision matrix**. Score each candidate against each criterion on a common scale, assign a weight to each criterion, multiply, and sum. NASA's expanded systems engineering guidance treats a documented decision matrix as a default evaluation method, and its reporting checklist asks for the rationale behind the criteria, the options, the weights, and the evaluation methods, plus the assumptions, uncertainties, and sensitivities behind the recommendation.

That checklist is a strong hint about where the danger lives. The arithmetic of a decision matrix is trivial and completely reliable. What is not reliable is everything upstream of it.

- The **weights** are a numerical statement of what your organization values, chosen by people. The total that comes out is a consequence of those weights rather than evidence for them.
- The **normalization** is a second hidden judgment. Deciding that $400 scores 100 and $600 scores zero compresses or stretches the cost axis and changes the answer without anyone touching a weight.
- The method has **structural limits**. Weighted summation is a scalarization of a multi-objective problem, and as the optimization literature summarized in Martins and Ning notes, evenly spaced weights do not produce evenly spaced points on the Pareto front, choosing appropriate weights is not intuitive, and the method can only return points on the convex portion of the front — so entire Pareto-optimal designs can be unreachable by any weighting at all.

None of this makes the matrix worthless. It makes it a way of writing down an argument so others can check it. The professional version of the tool always includes a sensitivity check: how far do the weights have to move before the winner changes? If the answer is "barely at all," the matrix has not selected a design, and you should say so.

### Three ways constraint reasoning goes wrong

**Requirements creep.** NASA's guidance describes it as the subtle way requirements grow imperceptibly over a project, so that the delivered system is more expensive and more complex than intended, with some additions being enhancements in disguise and others being genuinely new needs that could not have been foreseen. Each individual addition looks cheap; the accumulation is not. The containment techniques are procedural rather than clever: a concept of operations agreed with stakeholders early, an explicit channel for change requests, and an assessment of each request's impact on the rest of the system weighed against the cost of refusing it.

**Over-constraining.** Constraints partition the design space, and enough of them partition it down to nothing. A team can add three individually reasonable requirements and discover that no candidate satisfies all of them, at which point the honest move is to identify which constraint is softest and negotiate it, not to keep searching an empty set.

**Optimizing a component instead of the system.** A subsystem tuned to its own local best frequently makes the whole worse, because the quantity it improved was not the one the system was short of. A lighter bracket that needs a stiffer and heavier mount has cost the assembly mass while the bracket team celebrates. Systems thinking exists largely to catch this: what matters is the performance of the assembled whole under its real operating conditions, not the sum of subsystem scoreboards.

### Many binding constraints are not technical

It is worth saying plainly, because coursework can imply otherwise, that the constraint that finally decides a project is frequently not an equation. Budget is a decision made by people who may not read your analysis. Schedule is often set by a funding cycle, an academic term, or a season. Existing infrastructure constrains hard and invisibly: the pad is already poured, the rack is already that size, the fleet already runs on that connector, and the plant already owns that machine. Politics and institutional approval decide what can be built where. Client acceptance is a real constraint, because a technically superior design that the client will not buy, operate, or maintain has failed.

Who may sign the drawings is itself a constraint: in the United States, professional engineering practice is licensed by state and territorial boards, and NCEES describes licensure as existing to help ensure that practice protects the health, safety, and welfare of the public, with the usual path combining an accredited degree, several years of verifiable experience, and the FE and PE examinations.

Recognizing non-technical constraints is not cynicism. It is accuracy, and it saves you from optimizing hard along an axis nobody was going to let you move.

> **Scope note.** This lesson is educational material about how engineers reason. It is not engineering design guidance. Nothing here should be applied to a real structure, vehicle, pressure vessel, electrical installation, or machine. Real design requires a licensed engineer working to the governing code. Material selection methods in particular are covered in the later `material-selection` lesson.

## Key Vocabulary

| Term | Definition |
| --- | --- |
| Constraint | A boundary a candidate design must satisfy to be acceptable at all; it is evaluated as pass or fail, and a candidate that violates one is excluded rather than penalized. |
| Design objective | A quantity the team is trying to make as large or as small as possible; it ranks the candidates that survived screening rather than admitting or excluding any of them. |
| Feasible region | The set of candidate designs that satisfy every hard boundary simultaneously; all comparison and ranking happens inside it, and everything outside is a non-option rather than a weak option. |
| Tradeoff | A relationship in which improving one measure of goodness forces a loss on another, so the two cannot be pushed to their best values at the same time. |
| Dominated design | A candidate that some other available candidate matches or beats on every objective and beats on at least one, which makes it safe to discard before any weighting is applied. |
| Pareto optimal | Describes a candidate that no other available candidate beats on every objective at once, so gaining ground on one axis requires giving some up on another. |
| Pareto frontier | The boundary traced by all nondominated candidates when objectives are plotted against one another; it marks the best achievable combinations rather than naming a single best design. |
| Weighted decision matrix | A comparison table in which each candidate is scored against each criterion and the scores are combined using numbers that state how much each criterion counts. |
| Sensitivity analysis | A check on how far a conclusion moves when the assumptions behind it are varied; here, finding how small a change in weights is enough to reverse a ranking. |
| Requirements creep | The gradual and often unnoticed growth of what a project is expected to deliver, which drives cost and complexity past what was originally planned. |

## Eli-10

Imagine you are packing for a school trip. The rules are: one bag, it has to close, and it has to be light enough that you can carry it yourself. Those rules are not suggestions. If the bag will not close, you do not get a slightly worse grade on packing; you simply cannot go with that bag.

Once the bag closes, you still have choices. More snacks or more clothes? A big heavy jacket or two thin ones? Every extra thing you put in means something else has to come out. Nobody can tell you the one perfect way to pack, because it depends on what you care about most. What people can tell you is that some ways of packing are just worse than others: if one arrangement gives you more of everything you want, the other one is out. The rest is a real choice, and the honest thing to do is say what you cared about and why.

## Eli's Analogy

**The analogy.** Constraints are the size of the suitcase, and tradeoffs are what you decide to put inside it.

**Where it breaks down.** The suitcase makes constraints feel obvious and fixed, and real ones usually are not. Engineers often have to hunt for constraints nobody wrote down, and some of them can be renegotiated: a budget can be raised, a deadline moved, a rule waived. A suitcase also has one dimension that matters, while a real project is squeezed by cost, time, safety, law, and manufacturing at once, and those can conflict with each other rather than just with your wish list.

## Worked Example

A student team compares four illustrative concepts for a solar-powered stream-monitoring station. **The figures below are invented for teaching, not real design data.**

| Concept | Mass | Unit cost | Autonomy without sun | Service interval |
| --- | --- | --- | --- | --- |
| A | 3.4 kg | $530 | 108 h | 11 months |
| B | 2.3 kg | $450 | 72 h | 7 months |
| C | 5.1 kg | $430 | 132 h | 12 months |
| D | 3.6 kg | $560 | 84 h | 9 months |

**Step 1 — screen against hard constraints.** Mass no more than 4.0 kg (one person carries the station to the site), unit cost no more than $600 (course budget), autonomy at least 36 h (data continuity). C fails on mass alone, so its excellent cost and endurance never enter the comparison. Feasible set: {A, B, D}.

**Step 2 — check dominance.** A beats D on all four measures (3.4 < 3.6 kg, $530 < $560, 108 > 84 h, 11 > 9 months), so D is discarded without any weighting. A and B are nondominated: A wins on autonomy and service, B wins on mass and cost. Both sit on the Pareto frontier of this candidate set.

**Step 3 — normalize to 0–100 against stated anchors.** Cost: $600 → 0, $400 → 100. Mass: 4.0 kg → 0, 2.0 kg → 100. Autonomy: 36 h → 0, 120 h → 100. Service: 3 months → 0, 12 months → 100.

| Concept | Cost score | Mass score | Autonomy score | Service score |
| --- | --- | --- | --- | --- |
| A | 35.00 | 30.00 | 85.71 | 88.89 |
| B | 75.00 | 85.00 | 42.86 | 44.44 |

**Step 4 — Run 1, weights cost 0.30 / mass 0.20 / autonomy 0.30 / service 0.20.**

- A: 0.30 × 35.00 + 0.20 × 30.00 + 0.30 × 85.71 + 0.20 × 88.89 = **59.99**
- B: 0.30 × 75.00 + 0.20 × 85.00 + 0.30 × 42.86 + 0.20 × 44.44 = **61.25**

B wins by 1.25 points.

**Step 5 — Run 2, one defensible change.** The team learns the site loses sun for about a week each winter and shifts 0.05 from cost to autonomy: 0.25 / 0.20 / 0.35 / 0.20.

- A: 0.25 × 35.00 + 0.20 × 30.00 + 0.35 × 85.71 + 0.20 × 88.89 = **62.53**
- B: 0.25 × 75.00 + 0.20 × 85.00 + 0.35 × 42.86 + 0.20 × 44.44 = **59.64**

A wins by 2.89 points. Same candidates, same data, opposite recommendation.

**Step 6 — find the break-even weight.** Hold mass and service at 0.20 and trade the cost weight `w` against the autonomy weight `0.60 − w`. The totals are linear in `w`, and they cross at

    w* = 1487 / 5220 ≈ 0.2849,  where both candidates score 60.76.

Run 1 used a cost weight of 0.30, only **0.015** above the flip point. All arithmetic here was executed with exact rational arithmetic in Python before publication.

**What to conclude.** Not that the matrix is broken — that it did not choose a design. The weights did, and a difference of 0.015 in a single weight is not something a team can defend in a review. The correct report states the sensitivity plainly and argues the underlying priorities directly.

**A closing check on over-constraining.** Add two further individually reasonable requirements — unit cost no more than $450 and autonomy at least 100 h. Now A and D fail on cost, B fails on autonomy, and C still fails on mass. The feasible set is empty. Nothing was unreasonable on its own; the combination was.

## Common Mistakes

| Mistake | Correction |
| --- | --- |
| Scoring a hard constraint inside the decision matrix, so a candidate that exceeds the mass limit merely loses a few points. | Screen first, rank second. A violated hard constraint removes a candidate from the feasible region entirely; no amount of strength elsewhere can compensate, because the design is not allowed to exist. |
| Treating the largest weighted total as the objectively correct answer. | The total is a consequence of weights and normalization anchors that people chose. Report the weights, report the rationale, and report how far they must move before the winner changes; if that distance is small, the matrix has not decided anything. |
| Adding requirements over the life of a project without removing or relaxing any. | Every added requirement shrinks the feasible region and raises cost and complexity, and enough additions empty it. Assess each change against the cost of refusing it, and when the set goes empty, negotiate the softest constraint rather than searching harder. |
| Optimizing a subsystem to its own local best and assuming the whole system improved. | Judge the assembled system under its real operating conditions. A lighter component that forces a heavier mount or a shorter service interval has made the system worse while the component scoreboard improved. |
| Concluding that a design which improved on one objective is simply better. | Check dominance. A design is only unambiguously better if it matches or beats the alternative on every objective and beats it on at least one; otherwise you have moved along the frontier and paid for the gain somewhere else. |

## Compare / Contrast

| A | B | The distinction |
| --- | --- | --- |
| Hard constraint | Design objective | A constraint is a pass/fail test that admits or excludes a candidate; an objective is a direction of preference that only ranks candidates already admitted. The constraint draws a line, the objective points a way. |
| "Mass must not exceed 4.0 kg" | "Minimize mass" | The same physical quantity in two different roles. The first excludes a 4.3 kg design outright; the second would merely rank it below a 3.4 kg design. Writing one when you mean the other changes which designs are even on the table. |
| Infeasible design | Dominated design | An infeasible design violates a hard constraint and is excluded no matter how good its objectives look. A dominated design satisfies every constraint but is beaten on every objective by something else available, so it is discarded on comparison rather than on legality. |
| Feasible region | Pareto frontier | The feasible region is everything allowed; the Pareto frontier is the thin outer edge of it that is not beaten on all counts by anything else. Most feasible designs are not on the frontier, and the real decision is only ever among the ones that are. |
| Weighted decision matrix | Pareto analysis | Pareto analysis narrows the field using only facts about the candidates and needs no preferences at all. A weighted matrix goes further and names a winner, but only by importing a value judgment as numbers, which is why its result must be reported with a sensitivity check. |

## Key Takeaway

Constraints decide which designs are allowed and objectives decide which allowed design you prefer, so screen on constraints first and only then rank; and when a weighted matrix names a winner, report how small a change in the weights would name a different one.

## Practice Question Bank

**1. What distinguishes a hard constraint from a design objective?** *(recall)*

- **A. A hard constraint is a pass/fail boundary that excludes candidates, while an objective is a quantity to be maximized or minimized that only ranks the candidates already allowed.** ✅
- B. A hard constraint is always a physical limit, while an objective is always an economic preference.
- C. A hard constraint applies early in a project and an objective applies late, so the two never appear at the same time.
- D. A hard constraint is imposed by the client and an objective is chosen by the engineer, so only objectives can be negotiated.

*A constraint partitions the design space into acceptable and unacceptable; an objective orders the acceptable candidates. The other options are false: constraints are frequently economic, legal, or schedule-based rather than physical; constraints and objectives coexist throughout a project; and both constraints and objectives can come from either the client or the engineering team, with some constraints negotiable and some not.*

**2. Four feasible candidates are compared on cost, mass, endurance, and service interval. Candidate D is matched or beaten by candidate A on all four measures and beaten outright on three. What follows?** *(understanding)*

- A. D should be kept until the weights are chosen, since a different weighting could still favor it.
- **B. D is dominated by A and can be discarded before any weighting, because no assignment of weights can make it preferable.** ✅
- C. D and A are both Pareto optimal because they satisfy every hard constraint.
- D. D is infeasible and should be excluded during constraint screening.

*Dominance is a fact about the candidates, not about preferences: if A is at least as good on every objective and strictly better on at least one, then every non-negative weighting scores A at least as high, so D can be dropped immediately. D is not Pareto optimal, since A dominates it, and it is not infeasible, since the question states it passed screening.*

**3. A monitoring station must weigh no more than 4.0 kg so one person can carry it to the site. Concept C weighs 5.1 kg but has the lowest cost and the longest endurance of any candidate. How should C be handled?** *(application)*

- A. Score C on all criteria and let its strong cost and endurance offset a small deduction for mass.
- B. Convert the 4.0 kg limit into a heavily weighted mass criterion so C is penalized proportionally.
- **C. Exclude C during constraint screening, because it falls outside the feasible region regardless of how it scores elsewhere.** ✅
- D. Keep C as the reference candidate against which the others are normalized, since it sets the best cost and endurance values.

*The 4.0 kg limit is a hard constraint, so C is not a weaker option but a non-option, and screening removes it before any scoring. The first two choices commit the classic error of scoring a constraint, which quietly readmits a design that is not allowed to exist. Using an infeasible candidate to set the normalization anchors would also distort the scores of the candidates that do qualify.*

**4. A weighted decision matrix gives Concept B 61.25 and Concept A 59.99 out of 100. A sensitivity check shows that lowering the cost weight from 0.30 to about 0.285, with the freed weight moved to endurance, makes the two tie. What is the correct interpretation?** *(analysis)*

- **A. The matrix has not selected a design; the outcome rests on a weight difference of roughly 0.015 that the team cannot defend, so the report should argue the underlying values explicitly.** ✅
- B. B is confirmed as the winner, because it leads under the weights the team actually adopted.
- C. The scoring rubric contains an arithmetic error, since a valid matrix should not reverse under small weight changes.
- D. The team should raise the cost weight until B's lead is large enough to be convincing.

*A near-tie that flips under a 0.015 weight change means the weights, not the evidence about the candidates, produced the ranking. The honest response is to report the sensitivity and argue the priorities directly, which is what formal decision reporting asks for. No arithmetic error is implied, since weight sensitivity is a normal property of weighted sums; and tuning the weights until a preferred candidate wins reverses the logic of the method.*

**5. Midway through a project a team adds two more requirements, each defensible on its own, and discovers that no candidate design now satisfies every requirement. What has happened, and what is the appropriate response?** *(analysis)*

- A. The candidate set was too small; the team should generate more concepts until one satisfies all requirements.
- B. The analysis method has failed; the team should replace the weighted matrix with a different ranking scheme.
- **C. The problem is now over-constrained and the feasible region is empty, so the team should identify which constraint is softest and renegotiate it rather than searching an empty set.** ✅
- D. The added requirements should be scored rather than screened, so a candidate that nearly satisfies them can still win.

*Constraints partition the design space, and enough of them can partition it down to nothing even when each is individually reasonable; this is the standard consequence of unmanaged requirement growth. Generating more concepts cannot help if the constraint set admits nothing, and the ranking method is irrelevant when there is nothing left to rank. Demoting a genuine hard constraint to a scored criterion just to keep a candidate alive misrepresents what the requirement means.*

## Sources

- ABET Engineering Accreditation Commission, *Criteria for Accrediting Engineering Programs, 2026–2027* — https://www.abet.org/accreditation/accreditation-criteria/criteria-for-accrediting-engineering-programs-2026-2027/ (reference only; definition of engineering design and the constraint examples)
- NASA, *NASA/SP-2016-6105-SUPPL, Expanded Guidance for NASA Systems Engineering* — https://ntrs.nasa.gov/api/citations/20170007238/downloads/20170007238.pdf (reference only; opposed constraints, requirements creep, decision-matrix practice, threshold-plus-baseline trade space)
- Joaquim R. R. A. Martins and Andrew Ning, *Engineering Design Optimization*, Ch. 9: Multiobjective Optimization (Cambridge University Press) — https://mdobook.github.io/html/multiobj/ (reference only; dominance, Pareto set and front, weighted-sum limitations)
- Office of the Federal Register, *49 CFR 571.7 — Applicability* — https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-A/section-571.7 (public domain; regulatory constraints as legally binding pass/fail boundaries. Read via the eCFR versioner API copy of the same section.)
- National Society of Professional Engineers, *NSPE Code of Ethics for Engineers* — https://www.nspe.org/sites/default/files/resources/pdfs/Ethics/CodeofEthics/NSPECodeofEthicsforEngineers.pdf (reference only; Fundamental Canon 1 and conformity with applicable standards)
- NCEES, *Licensure* — https://ncees.org/licensure/ (reference only; licensure as a public-protection gate on practice)

## Related Topics

- `engineering-fundamentals:engineering-thinking:engineering-design-process` — the design loop, and requirements versus specifications
- `engineering-fundamentals:engineering-thinking:what-engineers-do`
- `engineering-fundamentals:materials:material-selection` — how material choices are actually made
- `engineering-fundamentals:engineering-practice:safety-factors-and-failure` — factors of safety and failure criteria
- `engineering-fundamentals:engineering-practice:engineering-ethics`

## Editorial Metadata

- **Topic ID:** `engineering-fundamentals:engineering-thinking:engineering-constraints-and-tradeoffs`
- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Rights:** Reference-only sources plus one public-domain federal regulation; no source prose adapted, no standards text or design values reproduced.
- **Calculation provenance:** every number in the worked example was computed with exact rational arithmetic (`fractions.Fraction`) in Python before publication, including the normalized scores, both weighted totals, the break-even weight `w* = 1487/5220`, and the empty-feasible-set check.
- **Scope statement:** educational material about engineering reasoning; not engineering design guidance. Real design requires a licensed engineer working to the governing code.
