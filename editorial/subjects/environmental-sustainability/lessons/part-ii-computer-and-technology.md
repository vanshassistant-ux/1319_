# Sustainable Computing and E-Waste

## In 30 Seconds

Digital technology has a physical footprint. Running it takes electricity: data centers and networks used roughly 415 terawatt-hours in 2024, about 1.5% of global power, and demand is climbing as AI grows. Building and discarding it creates e-waste, the world's fastest-growing waste stream at 62 million tonnes in 2022, of which under a quarter is formally recycled. Sustainable computing tries to shrink both problems through efficient hardware, longer device life, repair, and responsible recycling.

## Why This Matters

Computing is often imagined as clean and weightless, but every search, model, and phone rests on power plants, mines, and landfills. Understanding that footprint lets you read claims about "the cloud" and AI critically, compare the energy cost of digital services against the efficiencies they enable, and make better choices about buying, keeping, and disposing of devices. For students entering technology, policy, or business, sustainability is becoming a design constraint and a reporting requirement, not an afterthought. The same skills that let you weigh a data center's efficiency or a recycling rate will help you evaluate the environmental trade-offs of nearly any digital system you build or manage.

## Learning Objectives

- Define the energy and materials footprint of computing, including data centers, networks, and devices.
- Explain Power Usage Effectiveness (PUE) and what it does and does not measure.
- Describe the scale, recycling rate, and hazards of electronic waste using dated figures.
- Distinguish green-computing strategies such as efficiency, virtualization, longevity, and right to repair.
- Evaluate the tension between the resources computing consumes and the efficiencies it enables.

## The College Version

### The energy footprint of computing

Digital services feel immaterial, but they run on physical hardware drawing real electricity. The International Energy Agency, in its 2025 special report *Energy and AI*, estimated that data centers consumed about 415 terawatt-hours (TWh) of electricity in 2024, roughly 1.5% of global electricity use. Data center demand has grown about 12% per year since 2017, more than four times faster than overall electricity consumption, and the IEA projects it will more than double to around 945 TWh by 2030, a volume comparable to Japan's total electricity use today. The agency identifies artificial intelligence as the single most important driver of that growth. This load is geographically concentrated: in 2024 the United States accounted for about 45% of data center electricity, China roughly 25%, and Europe about 15%. Cryptocurrency mining added a separate load; the IEA's *Electricity 2024* report put it near 110 TWh in 2022, comparable to the Netherlands, and projected it toward 160 TWh by 2026. Networks and billions of connected devices add still more. Two honest caveats matter. First, these are projections built on assumptions about adoption and efficiency, so ranges are wide. Second, electricity is not emissions: a data center's climate impact depends on how clean the local grid is, which is why operators increasingly site facilities near low-carbon power.

### Measuring data-center efficiency: PUE

Because data centers are large, concentrated loads, the industry tracks how efficiently they turn electricity into useful computation. The most common metric is Power Usage Effectiveness (PUE), introduced by the industry consortium The Green Grid in 2007 and later standardized as ISO/IEC 30134-2. PUE is the ratio of total facility energy to the energy delivered to IT equipment. A PUE of 1.0 would mean every watt reaches the servers with nothing spent on cooling, power conversion, or lighting; a PUE of 2.0 means the facility uses twice as much power as the computers alone. Reported industry averages have hovered near 1.5 to 1.6 in recent surveys, while the most efficient large operators report figures closer to 1.1. PUE is useful but limited: it says nothing about whether the servers themselves are doing useful work efficiently, ignores water use, and can look artificially good in mild climates or bad during light workloads. It is a facilities-overhead measure, not a complete sustainability score, which is why it is best read alongside carbon intensity, water use, and hardware utilization rather than on its own.

### Electronic waste

The hardware behind computing eventually becomes electronic waste, or e-waste: discarded products with a plug or battery. The ITU/UNITAR *Global E-waste Monitor 2024* reported that the world generated 62 million tonnes of e-waste in 2022, rising about 2.6 million tonnes a year and on track to reach 82 million tonnes by 2030. It is described as one of the fastest-growing waste streams, climbing roughly five times faster than documented recycling. Only 22.3% of 2022 e-waste was formally collected and recycled, a rate projected to fall toward 20% by 2030 as generation outpaces recycling capacity. The stakes are both economic and toxic. The metals embedded in 2022 e-waste were worth about US$91 billion, yet an estimated US$62 billion in recoverable resources went unrecovered, and only about 1% of rare-earth element demand is met through recycling. Meanwhile roughly 18 million tonnes are handled by the informal sector in low- and middle-income countries, where crude recovery methods release hazardous substances such as lead and mercury that harm workers, communities, and ecosystems. This is why e-waste is treated as its own specialized problem within waste management: the material mix is uniquely valuable and uniquely dangerous.

### Green computing and sustainable design

Green computing is the practice of designing, using, and disposing of computing resources to reduce their environmental impact. On the energy side, it favors energy-efficient processors and power supplies, programs such as ENERGY STAR that label efficient equipment, and virtualization and cloud consolidation, which pack many virtual machines onto fewer physical servers so idle capacity is not left drawing power. On the materials side, the leverage is device longevity: because much of a device's lifetime footprint is embedded in its manufacture, keeping a laptop or phone in service longer usually beats recycling it early. Extending life depends on repairability, which is where the right-to-repair movement enters. The U.S. Federal Trade Commission's 2021 report to Congress, *Nixing the Fix*, catalogued manufacturer practices that frustrate repair, including parts restricted to authorized networks, adhesives and designs that resist disassembly, and software locks, and found scant evidence that such restrictions are necessary for safety or security. When devices do reach end of life, responsible recycling and refurbishment recover materials and put working equipment back into use, keeping it out of informal dumps. None of this erases the footprint. The honest framing is a tension: digital technology enables large efficiencies elsewhere, from smart grids to paperless workflows and logistics optimization, while itself consuming growing amounts of energy and materials. Sustainable computing is the effort to widen the first effect and shrink the second, and it applies the broader circular-economy idea specifically to electronics.

## Key Vocabulary

- **Data center** — A facility housing large numbers of networked computers and storage systems, along with the power and cooling infrastructure that keeps them running.
- **Terawatt-hour (TWh)** — A unit of energy equal to one billion kilowatt-hours, used to describe electricity consumption at national or global scale.
- **Power Usage Effectiveness (PUE)** — The ratio of a data center's total energy use to the energy delivered to its IT equipment; a value of 1.0 is ideal and higher values indicate more overhead.
- **Electronic waste (e-waste)** — Discarded electrical and electronic equipment, from phones and laptops to appliances with a plug or battery.
- **Green computing** — Designing, operating, and disposing of computing resources in ways that reduce their energy use and environmental harm.
- **Virtualization** — Running multiple simulated computers on a single physical machine so hardware is used more fully and fewer machines are needed.
- **Embedded footprint** — The energy, materials, and emissions used to manufacture a device, as opposed to those used while operating it.
- **Right to repair** — The principle that owners and independent shops should have the parts, tools, and information needed to fix products rather than relying only on manufacturers.
- **Informal recycling sector** — Unregulated collection and material recovery, common in lower-income regions, that extracts value from e-waste but often exposes workers to toxic substances.

## Eli-10

Everything you do on a phone or computer happens somewhere real. Warehouses full of computers, called data centers, run day and night and use a lot of electricity, and training AI uses even more. When gadgets break or get replaced, they turn into e-waste, a huge and fast-growing pile of old electronics. Most of it never gets recycled properly, which wastes valuable metals and can leak poisons where it is taken apart by hand. Green computing is the effort to use less power, keep devices working longer, make them easier to fix, and recycle them carefully when they finally wear out.

## Eli's Analogy

Think of the internet like a giant restaurant kitchen you never see. Your order looks effortless on the menu, but behind the wall the ovens run constantly and burn energy, and every worn-out pan and spoiled ingredient has to be thrown out. A well-run kitchen wastes less heat, reuses its equipment for years, and sorts its trash instead of dumping everything.

**Where the analogy breaks down:** The kitchen analogy captures hidden energy and waste, but it breaks down in two ways. A restaurant's demand is fairly steady, while computing demand is exploding as AI spreads. And a kitchen's leftovers are mostly harmless food scraps, whereas e-waste contains toxic metals like lead and mercury and valuable ones like gold, so how it is taken apart matters far more than kitchen trash does.

## Worked Example

Suppose a mid-size company runs 100 physical servers that sit only 15% busy on average, in a data center with a PUE of 1.8. Most of those machines waste power idling, and for every watt reaching the servers the facility spends another 0.8 watts on cooling and losses. The company applies two green-computing moves. First, it virtualizes, consolidating the workloads onto 20 servers running at healthy utilization and retiring 80 machines. Second, it moves to a modern facility with a PUE of 1.3. The result compounds: far fewer servers drawing power, each doing more useful work, in a building with much lower overhead. Crucially, the 80 retired servers should not simply be dumped. Refurbishing the usable ones for resale or donation, and sending the rest to a certified recycler, recovers metals and keeps hazardous components out of informal waste streams. This shows the two levers together, operational efficiency and responsible end-of-life, rather than either alone.

## Common Mistakes

- **Believing "the cloud" is immaterial or environmentally free.** The cloud is physical data centers that drew about 415 TWh in 2024 per the IEA; the term hides the hardware, power, and cooling behind it.
- **Treating a low PUE as proof that a data center is sustainable.** PUE only measures facility overhead. It ignores whether servers do useful work, the carbon intensity of the grid, and water use, so it must be read alongside other metrics.
- **Assuming recycling a device early is always the greenest choice.** Much of a device's footprint is embedded in manufacturing, so keeping and repairing it longer usually beats replacing it, with recycling reserved for true end of life.
- **Thinking most e-waste gets recycled.** The Global E-waste Monitor 2024 found only 22.3% of 2022 e-waste was formally collected and recycled, with much of the rest landfilled, stored, or handled informally.
- **Assuming any recycling of electronics is safe and beneficial.** Informal recovery of about 18 million tonnes exposes workers to lead and mercury; responsible, certified recycling is what avoids those harms.

## Compare / Contrast

- **Operational energy footprint vs. Embedded (manufacturing) footprint** — Operational footprint is the electricity a device or data center uses while running; embedded footprint is the energy and materials spent making it. Longevity attacks the embedded share; efficiency attacks the operational share.
- **Power Usage Effectiveness (PUE) vs. Carbon intensity of computing** — PUE measures how much facility overhead surrounds the IT load, regardless of the power source. Carbon intensity measures the emissions per unit of that electricity, which depends on the grid. A low-PUE center on a coal grid can still be high-carbon.
- **Formal e-waste recycling vs. Informal e-waste recycling** — Formal recycling uses regulated, certified processes that safely recover materials. Informal recycling, common in lower-income regions, recovers value through crude methods that release toxic substances and harm workers and communities.

## Key Takeaway

Computing has a real physical footprint: a fast-growing appetite for electricity, led by data centers and AI, and a fast-growing stream of e-waste that is mostly not recycled. Green computing shrinks both through efficiency, device longevity and repair, and responsible recycling.

## Practice Question Bank

1. **According to the IEA's 2025 Energy and AI report, roughly how much electricity did data centers consume in 2024, and what share of global electricity was that?**
   - A. About 945 TWh, roughly 3% of global electricity.
   - B. About 62 TWh, roughly 0.2% of global electricity.
   - C. About 415 TWh, roughly 1.5% of global electricity.
   - D. About 4,150 TWh, roughly 15% of global electricity.

   **Answer: C.** The IEA estimated data centers used about 415 TWh in 2024, near 1.5% of global electricity. The ~945 TWh figure is the projection for 2030; 62 million tonnes is the e-waste figure, not TWh; and 15% overstates the share by an order of magnitude.

2. **A data center reports a Power Usage Effectiveness (PUE) of 1.1. What does this indicate?**
   - A. Nearly all the facility's electricity reaches the IT equipment, with little lost to cooling and overhead.
   - B. The facility runs on 110% renewable electricity.
   - C. The servers are operating at 11% utilization.
   - D. The facility emits 1.1 tonnes of CO2 per server each year.

   **Answer: A.** PUE is total facility energy divided by IT-equipment energy, so 1.1 means only about 10% extra is spent on cooling, power conversion, and lighting. PUE says nothing about renewable share, server utilization, or emissions.

3. **The Global E-waste Monitor 2024 reported that the world generated 62 million tonnes of e-waste in 2022. What was the documented formal collection and recycling rate?**
   - A. About 82%, with the rest exported for reuse.
   - B. About 62%, matching the tonnage figure.
   - C. About 45%, concentrated in high-income countries.
   - D. About 22%, with the rest landfilled, stored, or handled informally.

   **Answer: D.** The report put the documented collection and recycling rate at 22.3% for 2022. The 82 figure is the projected 2030 tonnage in millions, 62 is the 2022 tonnage, and 45% describes the U.S. share of data center electricity, not e-waste recycling.

4. **An IT manager wants to cut both the operational and embedded footprint of a fleet of underused servers. Which pair of actions best fits green-computing principles?**
   - A. Leave all servers running continuously and buy new replacements every year to stay current.
   - B. Consolidate workloads through virtualization onto fewer machines, then refurbish or certifiably recycle the retired ones.
   - C. Lower the thermostat so cooling runs harder and raise screen brightness on all monitors.
   - D. Ship all old equipment to the lowest-cost informal recycler abroad to save money.

   **Answer: B.** Virtualization raises utilization and lets the manager retire idle machines, cutting operational energy, while refurbishment and certified recycling handle end of life responsibly. Annual replacement inflates the embedded footprint, harder cooling worsens PUE, and informal recycling causes toxic harm.

5. **Why does keeping a working laptop in service for extra years, rather than replacing it early, often reduce its total environmental impact even though older devices can be slightly less energy-efficient?**
   - A. Because older laptops use no electricity once they are more than three years old.
   - B. Because recycling a laptop fully recovers all of its materials, erasing its footprint.
   - C. Because much of a device's footprint is embedded in manufacturing, so extending its life spreads that fixed cost over more years of use.
   - D. Because data centers, not personal devices, are the only real source of computing's footprint.

   **Answer: C.** A large share of a device's lifetime footprint comes from making it, so using it longer amortizes that embedded cost and delays the manufacture of a replacement. Older devices still draw power, recycling never recovers everything, and personal devices are a real part of the footprint alongside data centers.

## Sources

- International Energy Agency, *Energy and AI* (special report, 2025) — data-center electricity ~415 TWh in 2024 (~1.5% of global), ~12%/yr growth since 2017, projection to ~945 TWh by 2030, AI as the leading driver, 2024 regional shares. https://www.iea.org/reports/energy-and-ai/executive-summary
- International Energy Agency, *Electricity 2024* — cryptocurrency electricity ~110 TWh in 2022 rising toward ~160 TWh by 2026. https://www.iea.org/reports/electricity-2024/executive-summary
- ITU and UNITAR, *The Global E-waste Monitor 2024* — 62 Mt e-waste in 2022, 82 Mt projected by 2030, 22.3% documented recycling, material value and informal-sector hazards. https://ewastemonitor.info/the-global-e-waste-monitor-2024/
- U.S. Federal Trade Commission, *Nixing the Fix: An FTC Report to Congress on Repair Restrictions* (May 2021) — repair-restriction practices and the finding of scant safety/security justification. https://www.ftc.gov/reports/nixing-fix-ftc-report-congress-repair-restrictions
- The Green Grid / Lawrence Berkeley National Laboratory, *PUE: A Comprehensive Examination of the Metric* — PUE definition, 2007 origin, and ISO/IEC 30134-2 standardization. https://datacenters.lbl.gov/sites/default/files/WP49-PUE%20A%20Comprehensive%20Examination%20of%20the%20Metric_v6.pdf
- Uptime Institute, *Global Data Center Survey 2024* — reported industry-average PUE (~1.56). https://uptimeinstitute.com/resources/research-and-reports/uptime-institute-global-data-center-survey-results-2024

## Related Topics

- environmental-sustainability:foundations:energy-use
- environmental-sustainability:foundations:waste-management
- environmental-sustainability:foundations:recycling
- environmental-sustainability:foundations:circular-economy

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Research status:** source-verified
- **Rights status:** reference-only sources (FTC report is public domain); facts synthesized, prose original, no source wording adapted
- **Researched at:** 2026-08-19
- **Note:** The slug `part-ii-computer-and-technology` was a mis-ingested curriculum section-header; per orchestrator instruction it is kept unchanged while the topic was repurposed into a coherent lesson titled "Sustainable Computing and E-Waste."
