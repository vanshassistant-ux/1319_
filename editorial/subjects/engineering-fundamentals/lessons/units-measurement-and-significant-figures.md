# Units, Measurement, and Significant Figures

## In 30 Seconds

Every engineering quantity is a number times a unit, and the unit carries as much meaning as the number. Since 20 May 2019 the SI has been built on seven constants of nature with exactly fixed numerical values, which is why the platinum-iridium kilogram in a vault outside Paris is no longer the definition of mass. On top of that sit two working habits: carry units through every line of arithmetic, and report only the digits your instrument actually earned.

## Why This Matters

Unit errors are cheap to make and expensive to find. They survive code review, they pass unit tests that never check dimensions, and they surface at integration time or later. NASA's Mars Climate Orbiter board traced the loss of a spacecraft to impulse data delivered in pound-force seconds where the interface specification called for newton seconds. Downstream courses assume you already do this correctly: statics, thermodynamics and circuits all grade dimensional consistency silently. And as measurement work gets more professional, the significant-figure rules you learn now get replaced by uncertainty statements with a stated coverage factor, so it helps to see early what the digits were standing in for.

## Learning Objectives

- Define the SI in terms of its seven defining constants and explain what the 2019 redefinition changed about the kilogram.
- Distinguish base units, coherent derived units with special names, and prefixed units, and write all three the way NIST specifies.
- Apply the factor-label method to a multi-step conversion, carrying and cancelling units at every step.
- Distinguish precision, trueness, accuracy, resolution, and systematic versus random error in a described measurement.
- Apply the significant-figure rules for addition/subtraction, multiplication/division, exact numbers, and rounding, and explain why standard and expanded uncertainty supersede them in professional practice.

## The College Version

### The SI is now defined by seven fixed constants

Before 2019 the SI was presented as seven base units from which everything else was built. That is no longer the logical foundation. The SI is now defined as the system of units in which seven constants have exact assigned numerical values:

| Defining constant | Symbol | Exact value |
| --- | --- | --- |
| Caesium-133 ground-state hyperfine transition frequency | Δν(Cs) | 9 192 631 770 Hz |
| Speed of light in vacuum | c | 299 792 458 m/s |
| Planck constant | h | 6.626 070 15 × 10⁻³⁴ J s |
| Elementary charge | e | 1.602 176 634 × 10⁻¹⁹ C |
| Boltzmann constant | k | 1.380 649 × 10⁻²³ J/K |
| Avogadro constant | N_A | 6.022 140 76 × 10²³ mol⁻¹ |
| Luminous efficacy of 540 × 10¹² Hz radiation | K_cd | 683 lm/W |

The BIPM states plainly that the numerical values of these seven constants have no uncertainty, and that every other unit, base or derived, can be constructed from them. The base/derived vocabulary is kept anyway, because it is useful, historically established, and how the ISO/IEC 80000 quantity standards are organised.

What changed for the kilogram is worth stating precisely. From 1889 it was the mass of one platinum-iridium cylinder held at the BIPM. Forty near-identical prototypes went to member states and drifted apart: the 1989–1991 verification found a median difference of about 25 micrograms across the original set. A unit that can drift is a bad foundation, and you cannot fix it by measuring more carefully, because the artefact *is* the definition.

Resolution 1 of the 26th CGPM (2018) replaced it, effective 20 May 2019: the kilogram is now defined by fixing h at 6.626 070 15 × 10⁻³⁴ J s, where J s = kg m² s⁻¹ and the metre and second are already fixed by c and Δν(Cs). The artefact still exists; it is simply no longer the definition, and its mass is now measured rather than assumed.

### Derived units, coherent units, and prefixes

A derived unit is a product of powers of base units. It is **coherent** when that product carries no numerical factor other than one, which is what lets you write physics equations without conversion constants sprinkled through them. Twenty-two derived units carry special names. The ones you will use constantly in engineering:

| Quantity | Unit | Symbol | In base units | In other SI units |
| --- | --- | --- | --- | --- |
| Force | newton | N | kg m s⁻² | — |
| Pressure, stress | pascal | Pa | kg m⁻¹ s⁻² | N/m² |
| Energy, work, heat | joule | J | kg m² s⁻² | N m |
| Power | watt | W | kg m² s⁻³ | J/s |
| Electric potential difference | volt | V | kg m² s⁻³ A⁻¹ | W/A |
| Electric resistance | ohm | Ω | kg m² s⁻³ A⁻² | V/A |

Expanding a special name back into base units is the most useful trick here: it turns unit checking into ordinary algebra.

Prefixes multiply a unit by a strict power of ten, from quetta (10³⁰) down to quecto (10⁻³⁰), and never by powers of two: a kilobit is 1000 bits, and the binary prefixes kibi, mebi and gibi exist so nobody has to guess. Compound prefixes are not allowed, so there is no millimicrometre. Attaching a prefix breaks coherence, because it reintroduces a numerical factor. One historical wrinkle: the kilogram is the only coherent SI unit whose name already contains a prefix, so multiples of mass are built on the gram. One microkilogram does not exist; 10⁻⁶ kg is a milligram.

### Writing units the way NIST specifies

These conventions exist so that a written quantity means one thing to every reader, including readers who do not share your language. NIST SP 811 sets them out.

- Unit symbols are printed in roman (upright) type; quantity symbols are printed in italic. In *m* = 4.2 kg, the *m* is italic and the kg is not.
- Unit symbols are lower case unless the unit is named for a person: pascal but Pa, newton but N, second but s. The litre may be written L in the United States.
- Unit symbols are unaltered in the plural: 75 cm, never 75 cms. They take no period unless a sentence ends there.
- Spelled out, a unit name is an ordinary English noun with a lower-case initial. The unit written °C is spelled *degree Celsius*, the modifier capitalised only because Celsius was a person.
- A space goes between the numerical value and the unit symbol. The only exceptions are the degree, minute and second of plane angle. So the degree Celsius takes a space: *t* = 30.2 °C, not 30.2°C and not 30.2° C.
- The space survives adjectival use: a 10 kΩ resistor, not a 10-kΩ resistor. Where that reads badly, NIST's advice is to rearrange the sentence rather than delete the space.
- Use one unit per value: 10.234 m, not 10 m 23 cm 4 mm.

### Dimensional analysis and the factor-label method

Dimensional analysis is the habit of checking that both sides of an equation reduce to the same combination of base dimensions before you trust the number. It cannot tell you an equation is right, being blind to dimensionless factors like ½ and π, but it reliably tells you when one is wrong, and it costs about ten seconds. If you compute a stress and the units come out kg m s⁻², you have computed a force, and no amount of recomputation will fix that.

Conversion applies the same discipline deliberately. In the factor-label method you multiply by ratios equal to one, written with units attached, and cancel until only the unit you want survives. Writing factors as fractions with units, rather than as bare numbers you remember to multiply or divide by, is what makes an inverted factor visible: flip a conversion and the units stop cancelling, so the error shows up before the number does. Work the chain symbolically and evaluate once at the end, so you round only once.

Two conventions deserve care. Powers apply to the whole prefixed unit, so 1 cm³ is (10⁻² m)³ = 10⁻⁶ m³, not 10⁻² m³. And compound units divide as written: reading N/m² as newtons per metre and then squaring something is a common route to being wrong by a factor of a metre.

### SI and U.S. customary: which conversions are exact

American practice mixes systems, so the useful question is not which system is better but which relationships are definitions and which are measurements. Several are exact by definition:

- 1 yd = 0.9144 m exactly (since 1959), hence 1 international foot = 0.3048 m and 1 in = 0.0254 m, exactly.
- 1 lb (avoirdupois) = 0.453 592 37 kg exactly.
- 1 lbf = 4.448 221 615 260 5 N exactly, because the standard acceleration of free fall is defined as exactly 9.806 65 m/s².

Exact factors carry no uncertainty and so never limit significant figures; NIST prints them in boldface in its conversion tables so you can tell them from the rounded ones, and a rounded factor does limit your result.

There is a historical trap. From 1893 to 1959 the U.S. yard was exactly 3600/3937 m, leaving a slightly different **U.S. survey foot** used in geodetic work, related to the international foot by 1 international foot = 0.999 998 U.S. survey foot exactly. Two parts per million sounds negligible until applied to state plane coordinates measured in hundreds of thousands of feet. NIST and NOAA's National Geodetic Survey deprecated the survey foot on 31 December 2022; from 1 January 2023 the international foot is the only foot.

Note that NIST SP 811 dates from 2008 and has not been revised for the 2019 SI: use it for style rules and conversion factors, and SP 330 (2019) or the SI Brochure for the definitions themselves.

### Precision, trueness, accuracy, resolution, and error

These words are not synonyms, and metrology keeps them apart.

- **Precision** is the closeness of agreement among repeated measurements under specified conditions. It says nothing about whether they are right.
- **Trueness** is the closeness of agreement between the average of an unlimited number of repeats and a reference value.
- **Accuracy** is closeness to a true value and combines both. The international vocabulary of metrology says explicitly that accuracy is not a quantity, is not given a number, and that you should not use "accuracy" to mean trueness or "precision" to mean accuracy.
- **Resolution** is different again: the smallest change in the measured quantity that produces a perceptible change in the indication. A six-digit display has fine resolution and tells you nothing about whether the reading is true.

Error decomposes the same way. Systematic error stays constant or varies predictably over repeats; random error varies unpredictably. That has a practical consequence students often miss: **averaging more readings shrinks random error and does nothing to systematic error.** A scale reading 3 N high reads 3 N high forever, however many times you weigh. NIST's engineering statistics handbook calls the quantitative version *bias*, attacked by calibration against reference standards, check standards and interlaboratory comparison rather than by repetition — and notes it can appear even when everything is properly calibrated, temperature being the usual culprit in dimensional work.

### What significant figures are standing in for

In professional measurement, quality is reported as an uncertainty, not as a digit count. The **standard uncertainty** of a result is an estimate of the dispersion of values reasonably attributable to the measurand, expressed as a standard deviation. Its components are evaluated in two ways: Type A, by statistical analysis of repeated observations, and Type B, by scientific judgement from other information — a calibration certificate, a manufacturer's specification, a handbook value — converted into a standard deviation. These combine into a **combined standard uncertainty**, written u_c.

Where an interval is wanted rather than a standard deviation, u_c is multiplied by a **coverage factor** k to give an **expanded uncertainty** U = k·u_c, reported as y ± U with k stated. NIST notes k is typically 2 or 3; where the normal distribution applies and u_c is a reliable estimate of the standard deviation, k = 2 gives roughly 95 % confidence and k = 3 more than 99 %. Reporting "U = 0.06 N, k = 2" says something a digit count cannot.

Significant figures are a coarse approximation to all of that: they encode uncertainty in the position of the last digit and nothing more, with no way to express a confidence level, an asymmetric interval, or a component breakdown. Learn the rules anyway — coursework grades them, and they are a useful discipline against calculator output — but treat them as training wheels for uncertainty analysis rather than a competing theory of it.

### The significant-figure rules, exact numbers, and rounding

Two rules cover almost everything.

- **Multiplication and division:** the result carries as many significant figures as the input with the fewest.
- **Addition and subtraction:** the result is limited to the decimal place of the least precise term, because what matters there is absolute precision rather than relative precision.

Counting them: non-zero digits count; zeros between significant digits count; leading zeros are placeholders and do not; trailing zeros with no decimal point are ambiguous. The value 1300 might have two, three or four, and there is no way to tell. Scientific notation removes it: 1.3 × 10³ versus 1.30 × 10³ versus 1.300 × 10³. That is one reason engineering writing leans on it.

Exact numbers never limit anything: defined conversion factors (100 cm per 1 m, 0.0254 m per inch), counting numbers, and the 2 in C = 2πr all carry infinite significant figures. π in your calculator is not exact, but has far more digits than any measurement you feed it, so it never governs.

Rounding has one wrinkle. Most introductory courses teach round-half-up; NIST specifies **round-half-to-even**: when the discarded digits are exactly a 5 followed by nothing but zeros, leave the preceding digit alone if it is even and increase it if it is odd, so the retained final digit is always even. Rounding 2.675 to three digits gives 2.68; so does rounding 2.685. This is the convention in metrology and in most numerical software, and it keeps repeated rounding from accumulating an upward bias. Round once, at the end.

### What this lesson is and is not

This is educational material about units, measurement and reporting conventions. **It is not engineering design guidance.** Nothing here should be used to size, specify, verify or accept a real structure, pressure vessel, electrical installation, machine or instrument; that work is governed by the applicable code or standard and requires a licensed engineer or an accredited laboratory working to it. Standards designations such as ISO/IEC 80000 and ISO 5725 are named here only to say what they govern: no standard's text, tables or values are reproduced, and no allowable value of any kind is stated.

## Key Vocabulary

- **Coherent derived unit** — A unit built as a product of powers of base units with no numerical factor other than one, which is what lets physical equations be written without extra conversion constants.
- **SI prefix** — A name and symbol attached to a unit to multiply it by a strict power of ten, running from quetta at 10³⁰ down to quecto at 10⁻³⁰.
- **Dimensional analysis** — Checking that both sides of an equation reduce to the same combination of length, mass, time and the other base dimensions before trusting the number that came out.
- **Factor-label method** — Converting by multiplying a quantity by ratios equal to one, written with units attached, so unwanted units cancel visibly and only the target unit survives.
- **Exact conversion factor** — A ratio fixed by definition rather than by measurement, such as one inch being 0.0254 metre, which carries no uncertainty and therefore never limits significant figures.
- **Resolution** — The smallest change in the quantity being measured that produces a perceptible change in what the instrument indicates; a fine display says nothing about correctness.
- **Trueness** — Closeness of agreement between the average of an unlimited number of repeated measurements and a reference value; degraded by systematic error and unaffected by random error.
- **Systematic error** — The component of measurement error that stays constant or varies predictably across repeats, so taking more readings and averaging them does not remove it.
- **Standard uncertainty** — An estimate of the dispersion of values that could reasonably be attributed to the measured quantity, expressed in the form of a standard deviation.
- **Coverage factor** — The multiplier, written k and typically 2 or 3, applied to a combined standard uncertainty to produce an expanded uncertainty that defines a reporting interval.

## Eli-10

Imagine you tell a friend to walk 15 and turn left. Fifteen what? Steps, metres, minutes, blocks? The number 15 by itself is not an instruction. That is the whole idea: a measurement is always a number plus a unit, and dropping the unit throws away half the information.

There is a second idea underneath it. When you measure something, you can only know it as well as your tool allows. A ruler marked in whole centimetres cannot tell you a length to the nearest hair. So when you write the answer down, you are allowed to keep the digits your tool actually gave you, and you have to let go of the ones your calculator invented. A calculator will happily print eight digits for a measurement that only earned two. Keeping all eight is not being careful — it is claiming you know things you do not.

## Eli's Analogy

Units work like currency labels on prices. Writing "40" on a price tag is useless; writing "40 dollars" or "40 yen" makes it an actual price, and the two are wildly different amounts. And just as you convert currency by multiplying by an exchange rate, you convert units by multiplying by a conversion factor — with the difference that some unit exchange rates, like 1 inch = 0.0254 metre, are fixed by definition and never move.

**Where the analogy breaks down.** Exchange rates float and are set by markets; the important unit relationships are either fixed by definition or measured against constants of nature, and the seven constants defining the SI have no uncertainty at all. Currency is one dimension, whereas units combine — you can multiply metres by metres to get area, but multiplying dollars by dollars means nothing. And money has no equivalent of significant figures: 40.00 dollars and 40 dollars are the same amount, while 40.00 m and 40 m are claims about different measuring instruments.

## Worked Example

**Part 1 — a multi-step conversion, units carried.**

A thruster fires a short pulse. The vendor's data sheet gives the impulse as 1.75 lbf·s; the flight software's interface specification requires newton seconds. Convert with the exact factor 1 lbf = 4.448 221 615 260 5 N:

```
J = (1.75 lbf·s) × (4.448 221 615 260 5 N / 1 lbf)
  = 7.784 387 826 705 875 N·s
```

The `lbf` cancels and `N·s` survives, which is the check that the factor was not inverted. The input has three significant figures and the factor is exact, so report **J = 7.78 N·s**.

**Part 2 — a significant-figure-governed calculation.**

The velocity change imparted to a 585 kg spacecraft:

```
Δv = J / m = 7.784 387 826 705 875 N·s ÷ 585 kg
   = 0.013 306 645 857 6... m/s
```

Check the units: N·s/kg = (kg m s⁻²)·s / kg = m/s, as it must be. Both inputs have three significant figures, so report **Δv = 0.0133 m/s**.

**Part 3 — what the unit error costs.**

Suppose the number 1.75 is passed through unconverted, as though it were already in N·s:

```
Δv(wrong) = 1.75 ÷ 585 = 0.002 991 452 991... m/s  →  0.00299 m/s
```

That is too small by exactly 4.448 221 615 260 5. Over a hundred such pulses the correct total is 1.33 m/s and the wrong total is 0.299 m/s — a shortfall of 1.03 m/s that nothing in the code would flag, because 1.75 is a perfectly valid number in either unit.

**Part 4 — a chain with powers, for practice.**

A gauge reads 1.25 × 10³ lbf/in². Convert to pascals:

```
p = (1.25 × 10³ lbf/in²) × (4.448 221 615 260 5 N/lbf) ÷ (0.0254 m/in)²
  = 8 618 446.616 460 45... Pa
  = 8.62 MPa   (three significant figures)
```

Cross-check with NIST's tabulated factor 6.894 757 × 10³ Pa per psi: 1250 × 6894.757 = 8 618 446.25 Pa. Same answer.

*Every number above was computed with Python's `decimal` module before publication, not with binary floating point — which matters for the halfway rounding cases, since 2.675 is not exactly representable as a binary float.*

**The real case.** NASA's Mars Climate Orbiter Mishap Investigation Board found that exactly this substitution had happened in flight. The Angular Momentum Desaturation file's impulse bit data was delivered in pound-force seconds where the project Software Interface Specification required newton seconds, so navigation underestimated the small-forces effect on the trajectory by a factor of 4.45. Trajectory Correction Maneuver 4 on 15 September 1999 targeted a first Mars periapsis of 226 km; over the following week estimates fell to 150–170 km, and about an hour before orbit insertion the figure was as low as 110 km against a minimum survivable 80 km. Post-loss reconstruction with corrected values gave 57 km. The carrier signal was last seen at 09:04:52 UTC on 23 September 1999.

## Common Mistakes

| Mistake | Correction |
| --- | --- |
| Treating the 2019 redefinition as a change in the size of the kilogram, or believing the old prototype was destroyed. | The redefinition was chosen to preserve continuity, so no mass changed value in any way you could detect on a scale. What changed is what the kilogram *means*: it is now fixed to the Planck constant rather than to an artefact whose mass could drift, and the platinum-iridium cylinder still exists at the BIPM as an object to be measured rather than as the definition. |
| Converting by remembering whether to multiply or divide, instead of writing conversion factors as fractions with units attached. | Write every factor as a ratio with units and cancel them. An inverted factor then fails visibly — the units refuse to cancel — before you ever look at the number. Also apply powers to the whole prefixed unit: 1 cm³ is (10⁻² m)³ = 10⁻⁶ m³, not 10⁻² m³. |
| Applying the multiplication rule for significant figures to a sum, or letting an exact number limit a result. | Multiplication and division are limited by the factor with the fewest significant figures; addition and subtraction by the decimal place of the least precise term. 25.400 mm + 1.27 mm + 0.6 mm = 27.270 mm is reported as 27.3 mm, because 0.6 mm knows only one decimal place. Defined conversion factors and counting numbers are exact and never limit anything. |
| Assuming that repeating a measurement and averaging will improve a result that is off. | Averaging shrinks random error only. Systematic error survives averaging untouched, so an instrument reading 3 N high still reads 3 N high after a thousand repeats. Systematic error is attacked by calibration against a reference standard, by check standards, or by correcting for a known effect — most often temperature in dimensional work. |
| Copying every digit the calculator shows, or rounding at each intermediate step. | Carry full precision through the chain and round once at the end, to the number of digits the inputs justify. When a value falls exactly halfway, NIST's rule is round-half-to-even, not round-half-up: 2.675 to three digits is 2.68, and 2.685 to three digits is also 2.68, which keeps repeated rounding from drifting upward. |

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Precision | Trueness | Precision is agreement among repeated readings and says nothing about correctness; trueness is agreement between the long-run average and a reference value. A tightly clustered set of readings that is 3 N high is precise but not true, and more readings will not help. |
| Resolution | Uncertainty | Resolution is the smallest change an instrument can indicate — a property of the display and the sensing mechanism. Uncertainty is the dispersion of values reasonably attributable to the measurand, and it includes resolution, calibration, environment and operator effects. A six-digit readout can have terrible uncertainty. |
| Exact conversion factors | Measured or rounded conversion factors | 1 in = 0.0254 m and 1 lbf = 4.448 221 615 260 5 N are exact by definition and carry no uncertainty, so they never limit significant figures. A factor tabulated to seven digits because it was rounded does limit the result. NIST prints exact factors in boldface so the two are distinguishable. |
| Significant figures | Expanded uncertainty | Significant figures encode uncertainty crudely, in the position of the last digit, and cannot express a confidence level or an asymmetric interval. An expanded uncertainty reports y ± U with U = k·u_c and k stated, which says how the interval was constructed and how confident it is. |

## Key Takeaway

A quantity is a number and a unit, and both have to be defended: carry units through every step so a bad conversion cancels wrong and shows itself, and report only the digits your measurement earned — knowing that significant figures are shorthand for the uncertainty statement professional work uses instead.

## Practice Question Bank

**1. How has the International System of Units been defined since 20 May 2019?** *(recall)*

- A. Each of the seven base units is realised by a physical artefact held at the BIPM in Sèvres.
- B. **Seven defining constants are assigned exact numerical values, and every unit follows from them.**
- C. The base units are re-established by a vote of the CGPM at each of its meetings.
- D. The metre, second and kilogram are defined by constants, and the remaining four base units are still artefact-based.

*The SI Brochure defines the SI as the system in which seven constants — the caesium hyperfine frequency, c, h, e, k, N_A and K_cd — have exact fixed numerical values with no uncertainty, and states that every unit, base or derived, can be constructed from them. Option A describes only the pre-2019 kilogram, which by then was the last artefact-based unit; the metre had been tied to c since 1983. Option C misstates what the CGPM does. Option D is wrong because all seven base units are now defined through the constants.*

**2. Following the rules in NIST SP 811, which way of writing a Celsius temperature is correct?** *(understanding)*

- A. t = 30.2°C
- B. t = 30.2° C
- C. **t = 30.2 °C**
- D. t = 30.2 Celsius degrees

*SP 811 requires a space between the numerical value and the unit symbol, with the only exceptions being the degree, minute and second of plane angle. The degree Celsius is therefore preceded by a space and the symbol is not broken up. Option A omits the required space, option B splits the symbol °C, and option D misnames the unit: spelled out, it is "degree Celsius", and SP 811 prefers symbols to spelled-out names for expressing values.*

**3. A technician stacks three gauge blocks whose measured thicknesses are 25.400 mm, 1.27 mm and 0.6 mm. What total thickness should be reported?** *(application)*

- A. 27.270 mm
- B. 27.27 mm
- C. **27.3 mm**
- D. 27 mm

*Addition and subtraction are governed by decimal places, not by significant-figure counts. The arithmetic sum is 27.270 mm, but the least precise term, 0.6 mm, is known only to the tenths place, so the result is reported to the tenths place as 27.3 mm. Options A and B claim precision the 0.6 mm measurement cannot support; option D discards a digit that is supported. The sum was computed exactly with Python's decimal module.*

**4. Thruster impulse data is produced in pound-force seconds, but the navigation software expects newton seconds and the values are passed through without conversion. What happens to the computed velocity changes?** *(analysis)*

- A. They are too large by a factor of about 4.45.
- B. **They are too small by a factor of about 4.45.**
- C. They are too small by a factor of about 2.20.
- D. They are too large by a factor of about 9.81.

*One pound-force is exactly 4.448 221 615 260 5 N, so an impulse of 1.75 lbf·s is really 7.78 N·s. Treating the number 1.75 as if it were already in N·s therefore understates the impulse, and the velocity change, by that same factor — 0.00299 m/s instead of 0.0133 m/s on a 585 kg body. This is the error NASA's Mars Climate Orbiter board identified, and it reported the factor as 4.45. Option A has the direction backwards; option C is roughly half the correct factor; option D is the numerical value of standard gravity in m/s², not a force conversion.*

**5. A load cell is read ten times under identical conditions. The readings agree with each other to within 0.02 N, but every one of them sits 3.1 N above the certified value of the reference mass. What is the best description of the instrument, and what will fix it?** *(analysis)*

- A. **Precise but not true; taking more readings and averaging will not fix it, because the offset is systematic.**
- B. True but not precise; taking more readings and averaging will fix it, because the offset is random.
- C. Both true and precise; the reference certificate is the only thing that could be wrong.
- D. Neither true nor precise; the readings are dominated by random error and need statistical treatment.

*Agreement to within 0.02 N across ten repeats is high precision. A consistent 3.1 N offset from the reference value is a systematic error, which is exactly what poor trueness means. Systematic error stays constant across repeats, so averaging cannot remove it; it is attacked by calibration against a reference standard or by correcting for a known effect. Option B inverts both terms, option C ignores the certified reference, and option D is contradicted by the tight spread of the readings.*

## Sources

- **BIPM** — *The International System of Units (SI)*, 9th edition (2019), v4.01 (June 2026). <https://www.bipm.org/en/publications/si-brochure> — CC BY 4.0; read as the bilingual PDF. Defining constants, derived units, prefixes, kilogram history.
- **NIST SP 330 (2019)** — *The International System of Units (SI)*, Newell & Tiesinga, eds. <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.330-2019.pdf> — U.S. edition of the SI Brochure; post-2019 base-unit definitions.
- **NIST SP 811 (2008)** — *Guide for the Use of the International System of Units (SI)*, Thompson & Taylor. <https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication811e2008.pdf> — style rules, exact conversion factors, rounding rules, U.S. survey foot. **Predates the 2019 SI changes**; NIST directs readers to SP 330 for current definitions.
- **JCGM 200:2012 (VIM)** — *International vocabulary of metrology*. <https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf> — accuracy, trueness, precision, resolution, systematic and random error, uncertainty terms.
- **NIST PML** — *Expanded uncertainty and coverage factor* and *Essentials of expressing measurement uncertainty*. <https://physics.nist.gov/cuu/Uncertainty/coverage.html>, <https://physics.nist.gov/cuu/Uncertainty/basic.html>
- **NIST/SEMATECH e-Handbook of Statistical Methods**, §2.1.1.3 *Bias and Accuracy*. <https://www.itl.nist.gov/div898/handbook/mpc/section1/mpc113.htm>
- **NASA** — *Mars Climate Orbiter Mishap Investigation Board Phase I Report*, 10 November 1999. <https://llis.nasa.gov/llis_lib/pdf/1009464main1_0641-mr.pdf>
- **Federal Register** — *Deprecation of the United States (U.S.) Survey Foot*, 85 FR 62698 (5 October 2020), NIST and NOAA/NGS. <https://www.federalregister.gov/documents/2020/10/05/2020-21902/deprecation-of-the-united-states-us-survey-foot>
- **OpenStax** — *University Physics Volume 1*, §1.6 *Significant Figures*. <https://openstax.org/books/university-physics-volume-1/pages/1-6-significant-figures> — CC BY-NC-SA 4.0, reference only.

## Related Topics

- `engineering-fundamentals:engineering-thinking:estimation-and-order-of-magnitude`
- `engineering-fundamentals:engineering-practice:testing-and-validation`
- `engineering-fundamentals:engineering-practice:safety-factors-and-failure`
- `engineering-fundamentals:mechanics:force-and-motion`

## Editorial Metadata

- **Topic ID:** `engineering-fundamentals:engineering-thinking:units-measurement-and-significant-figures`
- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Rights:** Reference-only and attribution-required sources; no source prose adapted. No engineering standard text, table, or design value reproduced.
- **Verification:** Every published number was executed with Python's `decimal` module before publication and cross-checked against NIST's own tabulated conversion factors.
- **Note:** Educational material only — not engineering design guidance.
