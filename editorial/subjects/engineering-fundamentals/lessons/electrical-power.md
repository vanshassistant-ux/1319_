# Electrical Power

## In 30 Seconds

Electrical power is the rate at which a circuit converts electrical energy into something else: heat, light, motion, stored charge. For any two-terminal element, P equals the voltage across it times the current through it. If that element is a resistance, Ohm's law turns the same statement into I squared R and V squared over R. Power is measured in watts. Energy is power multiplied by time, and energy is what a utility actually bills you for.

## Why This Matters

Nearly every electrical design decision is a power decision. A resistor's value sets the current, but its power rating decides whether it survives. Transmission lines run at hundreds of kilovolts because resistive loss climbs with the square of current, not because high voltage is inherently better. A battery's amp-hour label tells you nothing about run time until you multiply by voltage. Utilities bill in kilowatt-hours, aviation regulators cap batteries in watt-hours, and data centres are sized in megawatts: three audiences reasoning about the same product of voltage, current, and time. Keeping power and energy distinct is the difference between an estimate that lands and one that is wrong by a factor of thousands.

> This lesson is educational material. It is not guidance for electrical installations, power systems, or battery systems, and it contains no procedures. Real electrical design is governed by codes and requires a licensed professional.

## Learning Objectives

- Define electrical power, distinguish it from electrical energy, and name the SI unit of each.
- Apply P = VI, P = I²R, and P = V²/R, and explain which quantities each form legitimately requires.
- Explain why resistive heating scales with the square of current, and analyse why bulk transmission runs at high voltage.
- Distinguish a battery's ampere-hour capacity from its watt-hour energy and convert between them.
- Explain, at survey level, why RMS voltage and current are the values that make P = VI give the average power of a resistive AC load.
- Evaluate a component power rating and an efficiency figure, and account for where the missing watts go.

## The College Version

### P = VI is the general statement; the other two forms carry conditions

Move a charge *q* through a potential difference *V* and the energy exchanged is *qV*. Divide by the time taken and you have divided the charge by time as well, which is current. So the power delivered to a two-terminal element is **P = VI**. Nothing in that derivation assumes anything about what the element is. It holds for a resistor, a motor, an LED, a battery being charged, or an entire appliance treated as a black box. What it does demand is bookkeeping discipline: *V* is the voltage across the two terminals of the element you are asking about, and *I* is the current through that same element.

If the element is a resistance obeying Ohm's law, substitute *V = IR* to get **P = I²R**, or substitute *I = V/R* to get **P = V²/R**. Both are algebraic consequences of P = VI, and both inherit the condition that came with them: there has to be a resistance *R*, and the *V* and *I* in the expression have to be that resistance's own voltage and current.

Which form to reach for is a question about what you already know.

- **I²R** when current is the quantity you know and share — along a series path, or down a transmission line.
- **V²/R** when you know the voltage sitting directly across the element — something wired straight across a supply.
- **P = VI** whenever the element is not a resistance at all, because then there is no *R* to put into the other two.

The standard error is feeding in the wrong *V* or the wrong *I*. Take a 12 V source driving a 10 Ω resistor in series with a 30 Ω resistor. The current is 12/40 = 0.3 A, so the 10 Ω resistor dissipates I²R = 0.9 W and the whole circuit draws VI = 3.6 W. Reach for V²/R using the *source* voltage and you get 144/10 = 14.4 W: sixteen times too large, and larger than the power the entire circuit is drawing. The formula did not fail. It was handed a voltage that never appeared across that resistor.

### Power is a rate; energy is the accumulated total

The watt is the SI coherent derived unit of power and equals one joule per second. The joule is the unit of energy. That single sentence settles most of the confusion in this topic: a watt answers *how fast*, a joule answers *how much*.

The kilowatt-hour is where students lose the thread, because it sounds like a rate and is not one. It is a kilowatt sustained for an hour, so it is power multiplied by time, which is energy. Executing the conversion makes the point concrete: 1 kW × 1 h = 1000 W × 3600 s, and since a watt is a joule per second the seconds cancel to leave **3.6 × 10⁶ J = 3.6 MJ**. Utility meters accumulate energy, which is why the bill is in kilowatt-hours and not kilowatts. "Kilowatts per hour" is not a smaller version of this; it is a rate of change of power, and it is almost never what someone writing it means.

A space heater whose nameplate reads 1,500 W has a power of 1.5 kW while it is running. That number alone does not tell you what it costs. Run it four hours a day for thirty days and the energy is 1,500 W × 4 h × 30 = 180,000 W·h = 180 kW·h = 6.48 × 10⁸ J.

### Resistive heating, and why bulk transmission runs at high voltage

Charge moving through a resistance dissipates energy as heat. That is Joule heating, and in conductors it is the loss mechanism that dominates. A transmission conductor is not there to make heat, but it has resistance and it carries current, so it makes heat anyway, and the amount is I²R.

The squared dependence on current is what drives the design of the grid. For a fixed power delivered to a load, current and voltage trade off directly: *I = P/V*. Double the transmission voltage and the current halves; halve the current and the I²R loss falls to a quarter. The loss at fixed delivered power therefore scales as 1/V², a much steeper lever than intuition suggests.

Put numbers on it. Suppose a line must deliver 5.0 MW and its conductors have a total resistance of 2.0 Ω.

| Transmission voltage | Current I = P/V | Loss I²R | Loss as % of delivered |
|---|---|---|---|
| 15 kV | 333.333 A | 222,222 W ≈ 222 kW | 4.4 % |
| 150 kV | 33.3333 A | 2,222 W ≈ 2.2 kW | 0.044 % |

Ten times the voltage, one tenth the current, one hundredth the loss. Note the idealisation: the 15 kV case means the sending end must actually supply about 5.22 MW, the line resistance was given rather than computed from conductor geometry, and reactance has been ignored entirely.

As a reality check on the scale of grid losses, EIA estimates that annual United States transmission and distribution losses averaged about 5 % of the electricity transmitted and distributed from 2018 through 2022. That published figure is an aggregate. It is not broken down by mechanism, and transformer core losses and other equipment losses sit inside it alongside conductor heating, so do not read it as the I²R share.

### Ratings, derating, and where the missing watts go

A component's power rating is a thermal limit wearing electrical clothing. A 0.25 W resistor is not forbidden from dissipating more than a quarter of a watt by any law of physics; it is telling you that at a stated ambient temperature it can shed that much heat without its own temperature climbing past what its materials tolerate. Above that ambient temperature the allowable dissipation falls, which is why datasheets carry a derating curve rather than a single number.

Derating means deliberately operating a part below its nameplate maximum so that stress, and therefore degradation rate, stays low. NASA Goddard's EEE-INST-002 is one documented example of how this gets specified: it requires the designer to derate parts against a table for each part category, and its resistor table applies a power derating factor of 0.6 to most listed styles below a stated rated-power temperature, with linear derating to zero allowable power at a higher temperature. On that rule a 0.25 W part would be held to 0.15 W. **Do not generalise the number.** Derating practice varies by industry, by mission, and by what happens when the part fails; spaceflight practice is deliberately conservative and is not a universal design rule.

Efficiency is the useful output compared with the input. Feed 1,000 W into a device that is 92 % efficient and 920 W leaves as the output you wanted, while 80 W leaves as heat. Energy is not lost in the sense of ceasing to exist; "loss" is shorthand for *converted into something you were not trying to make*. In a motor that missing power is winding I²R heating, core losses, and friction. Because the number depends entirely on where the boundary is drawn and what is counted as useful, an efficiency figure is only meaningful next to a statement of what went in and what came out.

### Batteries: ampere-hours are charge, watt-hours are energy

An ampere-hour is one ampere flowing for one hour, which is 3,600 coulombs. It is a quantity of charge. On its own it says nothing about how much energy a battery holds, because energy requires the voltage that charge falls through. The FAA states the conversion directly in its packing guidance: watt-hours are the battery voltage multiplied by the amp hours.

The distinction has teeth.

| Label | Nominal voltage | Energy |
|---|---|---|
| 4,500 mAh cell | 3.85 V | 4.5 A·h × 3.85 V = 17.325 W·h |
| 4,500 mAh cell | 3.7 V | 4.5 A·h × 3.7 V = 16.65 W·h |
| 20,000 mAh pack | 3.7 V | 20 A·h × 3.7 V = 74 W·h |

Identical capacity labels, different energy, purely because the voltage differs. The 20,000 mAh pack sits under the FAA's 100 W·h ceiling for a spare lithium-ion battery in carry-on baggage even though the milliamp-hour number on the case looks enormous. Regulators write the limit in watt-hours precisely because energy, not charge, is what can be released in a failure.

Two honest caveats. A nominal voltage is a label, not a measurement: real cell voltage sags under load and drifts with state of charge, so the watt-hour figure computed this way is a rating rather than a guaranteed delivery. And this is educational material about units, not guidance for building, charging, or handling battery systems, which is specialised safety-critical work.

### AC at survey depth: RMS, and real versus apparent power

In an AC circuit the voltage and current vary through every cycle, so the instantaneous power varies too, and a single number has to be defined before P = VI means anything. That number is the **root mean square**: square the waveform, average the square over a cycle, take the square root. RMS is defined that way for a reason. For a resistive load, using RMS values in the DC expressions returns the correct *average* power, so a 120 V rms supply heats a resistor exactly as a 120 V DC supply would.

For a sinusoid the RMS value is the peak divided by √2. A 120 V rms supply therefore peaks at 120 × 1.41421 = **169.706 V**, which is why insulation and semiconductor ratings are set by the peak while power arithmetic uses the RMS. A 1,500 W resistive heater on that supply draws I = P/V = 12.5 A rms and presents R = V²/P = 14,400/1,500 = 9.6 Ω. Both derived forms agree: 12.5² × 9.6 = 1,500 W, and 14,400/9.6 = 1,500 W. The instantaneous power still swings between zero and 3,000 W, twice the average.

Once the load is not purely resistive, current and voltage stop peaking together and the accounting splits three ways.

- **Apparent power** — the plain product of RMS voltage and RMS current, in volt-amperes (VA). It comprises both of the parts below.
- **Real (active) power** — the part actually converted, in watts. This is what an energy meter accumulates.
- **Reactive power** — in volt-amperes reactive (var), the portion that establishes and sustains the electric and magnetic fields in equipment such as motors and transformers. It flows back and forth rather than being consumed.

The **power factor** is the ratio of real to apparent power, written as cos φ for the sinusoidal case.

Why engineers care: apparent power sets the current, and current sets the I²R heating in every conductor between the generator and the load. A load pulling 20 A at 240 V presents 4,800 VA; at a power factor of 0.80 it is doing 3,840 W of real work. Delivering that same 3,840 W at unity power factor would need only 16 A, cutting the loss in a 0.5 Ω feeder from 200 W to 128 W. State this carefully: the cos φ picture assumes sinusoidal voltage and current, and with the distorted currents drawn by many electronic loads the full accounting needs more machinery than a single phase angle. That belongs to a circuits course, not here.

## Key Vocabulary

- **electrical power** — The rate at which a circuit element converts electrical energy into another form, equal to the voltage across the element times the current through it.
- **watt** — The SI coherent derived unit of power, equal to one joule per second, or in base units kilogram metre squared per second cubed.
- **joule** — The SI coherent derived unit of energy and work, equal to one newton metre, and the unit in which every energy quantity in this lesson can be expressed.
- **kilowatt-hour** — An energy unit equal to one thousand watts sustained for one hour, which works out to 3.6 megajoules; utility bills are written in these.
- **resistive heating** — The conversion of electrical energy into thermal energy as charge moves through a resistance, equal to the current squared times that resistance.
- **derating** — Deliberately operating a part below its nameplate maximum so that electrical and thermal stress, and therefore the rate of degradation, stay low.
- **ampere-hour** — A quantity of electric charge equal to one ampere flowing for one hour, or 3,600 coulombs; it becomes an energy figure only after multiplication by voltage.
- **root mean square** — The square root of the time-average of the squared value of a waveform over one cycle, chosen so that DC power expressions give the correct average for a resistive load.
- **apparent power** — The plain product of RMS voltage and RMS current in an AC circuit, expressed in volt-amperes, comprising both the active and the reactive part.
- **power factor** — The ratio of the real power a load actually converts to the apparent power it draws; for sinusoidal voltage and current it equals the cosine of the phase angle between them.

## Eli-10

There are two different questions you can ask about electricity, and mixing them up causes most of the trouble. The first is *how fast*: how much energy is this thing eating right now? That is power, and it is measured in watts. The second is *how much*: how much energy has it eaten in total? That is energy, and the electric company measures it in kilowatt-hours.

A 1,500 watt heater is always a 1,500 watt heater whether you run it for one minute or one month, but the number on the bill keeps climbing the whole time it is on.

Watts come from two things multiplied together: how hard the electricity is being pushed (volts) and how much of it is flowing (amps). That is why the same wattage can be delivered as a gentle push on a huge flow or a huge push on a tiny flow. Power companies pick the second one, because wires get hot from flow, and the heat goes up with the flow *squared*. Ten times less flow means one hundred times less wasted heat.

## Eli's Analogy

Power is the speedometer and energy is the odometer. Sixty miles per hour tells you how fast you are going right now; it never becomes a distance until you multiply by a time. Drive at sixty for two hours and you have gone one hundred and twenty miles. A kilowatt-hour is built exactly that way, from a rate multiplied by a duration, which is why it is a total and not a speed.

**Where the analogy breaks down.** A speedometer reads one number, but electrical power is a product of two independent things, volts and amps, and the same wattage can come from wildly different pairs of them. That trade is the entire reason the grid uses high voltage, and a speedometer has nothing corresponding to it. The analogy also says nothing about heat. A car does not warm up because its odometer climbs, but a resistor's temperature is set by the power it is dissipating at this instant, not by the total energy that has ever passed through it.

## Worked Example

**1. Transmission at two voltages, same delivered power.**

A line must deliver 5.0 MW, and its conductors have a total resistance of 2.0 Ω.

At 15 kV:

    I = P/V = 5.0 × 10⁶ W / 15,000 V = 333.333 A
    P_loss = I²R = (333.333 A)² × 2.0 Ω = 222,222 W ≈ 222 kW
    222,222 / 5,000,000 = 4.4 % of the delivered power

At 150 kV:

    I = P/V = 5.0 × 10⁶ W / 150,000 V = 33.3333 A
    P_loss = I²R = (33.3333 A)² × 2.0 Ω = 2,222 W ≈ 2.2 kW
    2,222 / 5,000,000 = 0.044 % of the delivered power

Ten times the voltage gives one tenth the current and one hundredth the loss, because the loss depends on the *square* of current. The idealisation: at 15 kV the sending end must supply about 5.22 MW, the line resistance was stated rather than computed from conductor geometry, and reactance is ignored.

**2. An appliance's energy and cost.**

A space heater with a 1,500 W nameplate runs 4.0 hours a day for 30 days.

    E = 1,500 W × 4.0 h × 30 = 180,000 W·h = 180 kW·h
    in joules: 180 kW·h × 3.6 × 10⁶ J/kW·h = 6.48 × 10⁸ J

EIA's *Electric Power Monthly* Table 5.6.A, released 23 July 2026, puts the United States average residential price at **18.44 cents per kilowatt-hour for May 2026**.

    cost = 180 kW·h × $0.1844/kW·h = $33.19

That price is a national monthly average and will differ from any particular tariff.

## Common Mistakes

- **Using the source voltage in P = V²/R for a resistor that only drops part of it.** *V* in that expression must be the voltage across the resistor itself. With 12 V across 10 Ω in series with 30 Ω, the current is 0.3 A, the 10 Ω resistor drops 3 V, and it dissipates 0.9 W. Using 12 V gives 14.4 W, which is more than the entire circuit's 3.6 W and is therefore visibly impossible.
- **Applying P = I²R or P = V²/R to a motor, battery, or LED.** Those two forms exist only because Ohm's law was substituted into P = VI, so they require a resistance. For anything that is not one, only P = VI is available, using the element's own terminal voltage and current.
- **Treating the kilowatt-hour as a unit of power, or writing "kilowatts per hour" when kilowatt-hours are meant.** A kilowatt-hour is a kilowatt sustained for an hour, so it is power multiplied by time: energy, equal to 3.6 MJ.
- **Reading a battery's milliamp-hour rating as a measure of stored energy.** Ampere-hours measure charge. Energy requires the voltage as well: watt-hours equal volts times amp-hours. 4,500 mAh stores 17.325 W·h at 3.85 V but 16.65 W·h at 3.7 V.
- **Assuming a quoted AC voltage such as 120 V is the peak value.** Quoted AC supply voltages are RMS. For a sinusoid the peak is RMS × √2, so 120 V rms peaks at 169.706 V. RMS is the value that makes the DC power expressions return the correct average power for a resistive load; the peak is what insulation and device ratings must survive.

## Compare / Contrast

| | | Distinction |
|---|---|---|
| Power (watt) | Energy (joule, kW·h) | Power is a rate and exists at an instant; energy is power accumulated over a duration. One kilowatt-hour is 3.6 megajoules. |
| P = I²R | P = V²/R | Equivalent for a resistance, but they need different inputs. I²R when current is what you know; V²/R when the voltage across the element is what you know. Neither applies to a non-resistive element. |
| Ampere-hour | Watt-hour | An ampere-hour is charge (3,600 C). A watt-hour is energy. Converting needs the voltage, so the same amp-hour rating at a different voltage holds different energy. |
| Real power (W) | Apparent power (VA) | Apparent power is the plain product of RMS voltage and current and sets the conductor current. Real power is what is actually converted and what the meter bills. Their ratio is the power factor. |
| Nameplate rating | Derated operating limit | A nameplate rating is the dissipation a part can shed at a stated ambient temperature. A derated limit is the lower figure a designer chooses; how far to derate depends on industry and consequence of failure. |

## Key Takeaway

P = VI is always true for an element's own voltage and current; I²R and V²/R are Ohm's law consequences that apply only to a resistance and only with that resistance's own quantities. Watts are a rate, joules and kilowatt-hours are totals, and the squared dependence of resistive heating on current is why grids transmit at high voltage and why amp-hours alone never tell you a battery's energy.

## Practice Question Bank

**1. One watt is equal to which of the following?** *(recall)*

- **A. One joule per second** ✅
- B. One joule
- C. One coulomb per second
- D. One volt per ampere

The watt is the SI coherent derived unit of power and is expressed in other SI units as J/s. A joule alone is energy, not a rate. One coulomb per second is an ampere, the unit of current. One volt per ampere is an ohm, the unit of resistance.

**2. A utility bill lists 180 kW·h of consumption for the month. What does that number measure?** *(understanding)*

- A. The average rate at which the household drew power over the month
- **B. The total energy the household used over the month, equal to 6.48 × 10⁸ joules** ✅
- C. The highest instantaneous power the household reached during the month
- D. The average voltage supplied to the household over the month

A kilowatt-hour is a kilowatt sustained for an hour, so it is power multiplied by time, which is energy. Since 1 kW·h is 3.6 × 10⁶ J, 180 kW·h is 6.48 × 10⁸ J. It is not a rate, so it is neither an average nor a peak power, and it carries no information about voltage.

**3. A 12 V source drives a 10 Ω resistor in series with a 30 Ω resistor. How much power does the 10 Ω resistor dissipate?** *(application)*

- **A. 0.9 W** ✅
- B. 14.4 W
- C. 3.6 W
- D. 2.7 W

The current is 12 V / 40 Ω = 0.3 A, so the 10 Ω resistor dissipates I²R = 0.09 × 10 = 0.9 W. The 14.4 W option comes from putting the source voltage into V²/R, which is the classic error: only 3 V appears across that resistor, and 14.4 W exceeds the whole circuit's 3.6 W. 3.6 W is the total circuit power and 2.7 W is the 30 Ω resistor's share.

**4. A line delivers a fixed 5.0 MW through conductors of total resistance 2.0 Ω. If the transmission voltage is raised from 15 kV to 150 kV, what happens to the resistive line loss?** *(analysis)*

- A. It is unchanged, because the delivered power is the same
- B. It falls to one tenth of its former value
- **C. It falls to one hundredth of its former value, from about 222 kW to about 2.2 kW** ✅
- D. It rises by a factor of one hundred, because the voltage is higher

For a fixed delivered power, current is P/V, so a tenfold rise in voltage cuts the current tenfold, from 333.333 A to 33.3333 A. Loss is I²R, so it falls by a factor of one hundred, from 222,222 W to 2,222 W.

**5. A portable power bank is labelled 20,000 mAh and is built from cells with a nominal voltage of 3.7 V. What is its rated stored energy, and how does it compare with the FAA's 100 W·h limit for a spare lithium-ion battery in carry-on baggage?** *(application)*

- A. 20 W·h, well under the limit, since the milliamp-hour figure converts directly to watt-hours
- B. 20,000 W·h, far over the limit
- C. 100 W·h, exactly at the limit
- **D. 74 W·h, under the limit, because watt-hours are the voltage times the amp-hours** ✅

Ampere-hours measure charge, not energy; energy requires the voltage. Watt-hours are volts times amp-hours, so 20 A·h × 3.7 V = 74 W·h, which is below the FAA's 100 W·h ceiling.

## Sources

- OpenStax, Rice University — *University Physics Volume 2*, 9.5 Electrical Energy and Power. https://openstax.org/books/university-physics-volume-2/pages/9-5-electrical-energy-and-power (REFERENCE_ONLY)
- OpenStax, Rice University — *University Physics Volume 2*, 15.4 Power in an AC Circuit. https://openstax.org/books/university-physics-volume-2/pages/15-4-power-in-an-ac-circuit (REFERENCE_ONLY)
- OpenStax, Rice University — *University Physics Volume 2*, 15.6 Transformers. https://openstax.org/books/university-physics-volume-2/pages/15-6-transformers (REFERENCE_ONLY)
- NIST — *Guide to the SI* (SP 811), Chapter 4: The Two Classes of SI Units and the SI Prefixes. https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes (REFERENCE_ONLY)
- NIST — *The International System of Units (SI)*, 2019 Edition (SP 330), Section 2. https://www.nist.gov/pml/special-publication-330/sp-330-section-2 (REFERENCE_ONLY)
- U.S. Energy Information Administration — *Electric Power Monthly*, Table 5.6.A, May 2026 and 2025 (released 23 July 2026). https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a (REFERENCE_ONLY)
- U.S. Energy Information Administration — FAQ: How much electricity is lost in transmission and distribution in the United States? https://www.eia.gov/tools/faqs/faq.php?id=105&t=3 (REFERENCE_ONLY)
- U.S. Energy Information Administration — Glossary, electricity terms. https://www.eia.gov/tools/glossary/index.php?id=electricity (REFERENCE_ONLY)
- U.S. Federal Aviation Administration — PackSafe: Lithium Batteries (spare, uninstalled). https://www.faa.gov/hazmat/packsafe/lithium-batteries (REFERENCE_ONLY)
- NASA Goddard Space Flight Center — *EEE-INST-002: Instructions for EEE Parts Selection, Screening, Qualification, and Derating* (NASA/TP-2003-212242). https://nepp.nasa.gov/docuploads/FFB52B88-36AE-4378-A05B2C084B5EE2CC/EEE-INST-002_add1.pdf (REFERENCE_ONLY)
- U.S. Department of Energy, FEMP — *Take Five: What Is Energy Efficiency?* https://www.energy.gov/cmei/femp/articles/take-five-what-energy-efficiency (REFERENCE_ONLY)

## Related Topics

- `engineering-fundamentals:electrical-fundamentals:voltage-current-and-resistance`
- `engineering-fundamentals:electrical-fundamentals:ohm-s-law`
- `engineering-fundamentals:electrical-fundamentals:series-and-parallel-circuits`
- `engineering-fundamentals:mechanics:work-and-energy`

## Editorial Metadata

- **Topic id:** `engineering-fundamentals:electrical-fundamentals:electrical-power`
- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Estimated reading time:** 11 minutes
- **Rights:** All sources classified REFERENCE_ONLY. No source prose, table, or figure reproduced; no engineering standard's text or design values reproduced.
- **Numeric verification:** every number in this lesson — the transmission comparison, the kilowatt-hour conversion, the appliance energy and cost, the series-resistor trap, the RMS peak, the battery watt-hour figures, the efficiency split, the derating illustration, and the power-factor comparison — was executed with `python3` in Bash before publication.
- **Safety framing:** educational material only; not guidance for electrical installations, power systems, or battery systems, and no procedures are given.
