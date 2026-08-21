# Sampling

## In 30 Seconds

Sampling means studying a part of a group to learn about the whole group. The entire group you care about is the population; the people or items you actually examine are the sample. Researchers sample because asking everyone is often too costly, too slow, or impossible. Random sampling gives every member a chance to be included. A sample that does not represent its population is biased, and even a large sample cannot fix that.

## Why This Matters

Almost every number you see about a group of people—poll results, product satisfaction ratings, unemployment rates—comes from a sample, not a full count. Understanding sampling tells you how much to trust those numbers. It also explains why a claim like "most students at our college prefer online classes" can be true for the 200 students surveyed and still wrong for the whole college. In data science, models learn from data, and much of that data is collected by sampling; a model trained on an unrepresentative sample will make unrepresentative predictions. Knowing what a sample is, how random selection works, and where bias creeps in is the first step to reading any statistic critically.

## Learning Objectives

- Define population, sample, and sampling.
- Distinguish a population from a sample and give an example of each.
- Explain why researchers study samples instead of entire populations.
- Describe simple random sampling and stratified sampling.
- Identify when a sample is likely to be biased.
- Explain why larger samples tend to be more reliable, and why representation matters more than size.

## The College Version

### A sample is a stand-in for the population

Sampling is the practice of studying part of a group to learn about the whole group. The whole group you care about—every student enrolled at a college, every household in a city, every jar of peanut butter a factory produced this week—is called the population. The subset you actually examine, such as the 200 students who answered a survey, is the sample. The word population does not only mean people: it means the complete set of things a question is about, whether those things are humans, packages, or trees. A sample is only useful if it stands in for that complete set.

Researchers sample because studying an entire population is usually impractical. Cost is the first reason: interviewing every student at a college of 6,000 could take a team of interviewers weeks and consume a budget the student newspaper does not have. Time is the second: by the time all 6,000 students had been questioned one by one, the semester would be over and the answer stale. Feasibility is the third: some populations cannot be fully examined at all. You cannot test every phone battery a company makes without destroying them all, and a nightly news poll cannot interview every resident of a country. A well-chosen sample delivers an answer in days instead of months.

### Random sampling gives everyone a chance

The central idea of good sampling is random selection: every member of the population has a chance of being included, and chance—not convenience or preference—decides who gets picked. The simplest version is a simple random sample, in which every member has an equal chance of being selected, like drawing names from a hat or letting a computer choose students from the official enrollment list. Because chance decides, no subgroup is systematically favored.

Stratified sampling is a common refinement. The population is first divided into meaningful groups, called strata—for example first-year, sophomore, junior, and senior students—and then a random sample is taken from each group, usually in proportion to that group's size. This guarantees that smaller groups are not accidentally left out. Real organizations use these ideas at enormous scale. The U.S. Census Bureau's American Community Survey selects a random sample of about 3.5 million addresses each year instead of trying to visit every household in the country, and each address has roughly a 1-in-480 chance of being selected in a given month. The portrait of the nation that emerges is built from a part of it.

### When a sample misleads: bias and uncertainty

Sampling bias is the classic failure: the sample does not represent the population. It happens when some members of the population are more likely to be included than others. Surveying only people at one location, such as the campus coffee shop or a single shopping mall, captures mostly the people who happen to be there. An online poll that anyone can click attracts whoever feels strongly, which is not the same as a random sample. Even a very large sample cannot repair this: a million answers from one kind of person still describe one kind of person.

Size still matters, just not alone. Larger samples tend to be more reliable because the random ups and downs of who happens to get picked tend to even out. But a small random sample can beat a large biased one, because representation is what makes a sample a stand-in for the population in the first place. Finally, sample results come with uncertainty. The Census Bureau reports a margin of error for each estimate: a range around the reported number in which the true value is likely to fall. If 62 percent of sampled residents support a new community center, with a margin of error of plus or minus 4 points, the honest reading is that support across the city probably lies between 58 and 66 percent. That uncertainty is not a flaw in the survey; it is the sample telling you how much trust it deserves.

## Key Vocabulary

- **population:** the complete set of people, items, or events that a question is about.
- **sample:** the subset of a population that is actually examined to learn about the whole.
- **sampling:** the practice of choosing and studying a part of a group to draw conclusions about the whole group.
- **random sampling:** selecting sample members by chance so that every member of the population has a chance of being included.
- **simple random sample:** a sample in which every member of the population has an equal chance of being selected.
- **stratified sampling:** dividing a population into groups, called strata, and taking a random sample from each group.
- **sampling bias:** a distortion that occurs when a sample does not represent the population because some members were more likely to be included than others.
- **margin of error:** a reported range around a sample estimate within which the true population value is likely to fall.
- **representative:** describing a sample whose characteristics match those of the population it stands for.

## Eli-10

Suppose you want to know whether a big pot of soup is too salty. You do not drink the whole pot. You stir it well, take one spoonful, taste it, and judge from that spoonful. Sampling works the same way: you examine a small, carefully chosen part of a group and use it to understand the whole group. The key word is carefully chosen. A spoonful scooped only from the top might be mostly broth while the salt has sunk to the bottom, and that spoonful would mislead you. So researchers choose their spoonful by chance, giving everyone in the group a fair chance of being tasted, and they report how far off their spoonful could be—the margin of error.

## Eli's Analogy

A pot of soup is the population; one stirred spoonful is the sample. Stirring well is random selection, because it mixes everyone in fairly. Tasting the spoonful tells you about the whole pot, and the margin of error is like knowing how big your spoonful was and how well you stirred.

The analogy has limits. A pot of soup can be stirred until it is uniform, but a human population cannot: real groups contain complicated differences that no amount of mixing removes, which is why researchers use methods like stratified sampling and still report uncertainty. Tasting a spoonful also changes nothing about the soup, while a survey can change the people who answer it—they may refuse, forget, or give the answer they think is expected.

## Worked Example

A city parks department wants to know whether residents support building a new dog park. The population is every resident of the city, roughly 40,000 people, and asking all of them would cost more than the parks budget allows. The department instead mails a survey to a random sample of 800 addresses, stratified by neighborhood so each district is represented. Of the returned responses, 62 percent say yes, and the report includes a margin of error of plus or minus 4 percentage points. The department reads the result as support likely between 58 and 66 percent of residents, not as an exact 62. If the department had instead surveyed only people at the city's existing dog park, it would have learned about dog owners who already visit parks—not about the city.

## Common Mistakes

- **Treating the sample as the whole population**, so "200 students said X" becomes "the college thinks X." A sample is a stand-in, not the population itself. Results describe the population only approximately, within the reported margin of error.
- **Assuming a bigger sample automatically fixes a bad one.** Size reduces random ups and downs, but a large sample that leaves whole parts of the population out is still biased. Representation matters more than size.
- **Treating any easy-to-get responses, like a call-in poll or a comment thread, as random sampling.** Random sampling means the researcher selects members by chance, with everyone having a chance. Self-selected responders are a different group, and often a biased one.
- **Surveying at one location and assuming the answers represent everyone.** People at one location share that location's context. Check whether every part of the population had a real chance to be included before trusting the result.
- **Reading a poll number as exact and ignoring the margin of error.** A sample result is a range: 62 percent plus or minus 4 points means the true value probably lies between 58 and 66 percent.

## Compare / Contrast

- **population vs sample:** the population is the whole group a question is about; the sample is the examined subset used to estimate it.
- **simple random sampling vs stratified sampling:** simple random sampling gives every member an equal chance directly; stratified sampling first divides the population into groups and then samples each group.
- **random sampling vs convenience sampling:** random sampling lets chance decide who is included; convenience sampling takes whoever is easy to reach, which often leaves parts of the population out.

## Key Takeaway

Sampling studies a part to learn about the whole. A trustworthy sample is chosen by chance, represents its population, and comes with a margin of error that honest readers always keep in mind.

## Practice Question Bank

1. In a study, what is the population?
   - A. The people who happened to respond to the survey
   - B. The entire group the researcher wants to learn about
   - C. The part of the group that was actually studied
   - D. The subset of the group chosen because it was easy to reach
   - **Answer: B.** The population is the complete set of people, items, or events a question is about. The people who responded, the part actually studied, and an easy-to-reach subset are all descriptions of samples, not of the population.

2. Why do researchers usually study a sample instead of an entire population?
   - A. Studying everyone is often too costly, too slow, or impossible
   - B. A sample always produces the exact same result as the full population
   - C. Samples remove all uncertainty from the results
   - D. Populations are usually too small to study directly
   - **Answer: A.** Researchers sample because a full study is usually impractical: it costs too much, takes too long, or cannot be done at all. A sample does not guarantee identical results and does not remove uncertainty, and populations are typically larger, not smaller, than the samples drawn from them.

3. A student newspaper wants to know how all 6,000 students at a college feel about the new dining hall. Which approach is an example of random sampling?
   - A. Asking every student who walks through the dining hall entrance one evening
   - B. Posting a poll link in a campus group and using whoever responds
   - C. Using a computer to select 200 students from the official student list, where every student had the same chance of being picked
   - D. Interviewing the first 200 students who reply to a campus email
   - **Answer: C.** Random sampling selects members by chance so that every member of the population has a chance of being included; equal chance for all 6,000 students is the signature of a simple random sample. The other options rely on who happens to pass by, who chooses to respond, or who replies first, so chance does not give everyone a fair shot.

4. A city wants to know how residents feel about a new dog park. Researchers survey 1,000 people at the city's existing dog park on a Saturday. Why is this sample likely to be biased?
   - A. 1,000 people is too large a sample to be reliable
   - B. The survey asked too few questions
   - C. The results will have no margin of error
   - D. People at a dog park are not representative of all residents
   - **Answer: D.** The sample is drawn from a single location, so it captures people who already visit dog parks—one slice of the population. A large sample from one place is still unrepresentative. Size alone does not cause bias here, question count is about survey design, and every sample estimate has uncertainty, so a margin of error is reported rather than absent.

5. A poll of 500 randomly selected residents finds that 62 percent support a new community center, with a margin of error of plus or minus 4 percentage points. What is the most accurate way to read this result?
   - A. Exactly 62 percent of all residents support the center
   - B. Between 58 and 66 percent of the 500 surveyed residents support the center
   - C. Support is exactly 66 percent because the margin of error adds to the result
   - D. Support among all residents is likely between about 58 and 66 percent
   - **Answer: D.** The margin of error describes the uncertainty around an estimate of the population: the true level of support across all residents is likely to fall in the range 62 plus or minus 4, that is, about 58 to 66 percent. The other options treat the estimate as exact, apply the range to the sample itself, or use only one end of the range.

## Sources

- U.S. Census Bureau, "Understanding and Using American Community Survey Data: What All Data Users Need to Know" (ACS General Handbook, 2018) — https://www.census.gov/content/dam/Census/library/publications/2018/acs/acs_general_handbook_2018.pdf (public domain, U.S. Government work)
- OpenStax (Rice University), "Introductory Statistics, Section 1.2: Data, Sampling, and Variation in Data and Sampling" — https://openstax.org/books/introductory-statistics/pages/1-2-data-sampling-and-variation-in-data-and-sampling (CC BY 4.0)
- Wikipedia, "Sampling (statistics)" — https://en.wikipedia.org/wiki/Sampling_(statistics) (CC BY-SA 4.0, reference only)

## Related Topics

- Data Collection (data-science-and-ai-literacy:foundations:data-collection)
- Datasets (data-science-and-ai-literacy:foundations:datasets)
- Types of Data (data-science-and-ai-literacy:foundations:types-of-data)
- Exploratory Data Analysis (data-science-and-ai-literacy:foundations:exploratory-data-analysis)
- Bias (data-science-and-ai-literacy:foundations:bias)

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:sampling
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21 (live sources: Census Bureau ACS General Handbook PDF, OpenStax Introductory Statistics page, Wikipedia REST summaries)
- Sources: 3 (1 government/public domain, 1 open textbook CC BY, 1 reference CC BY-SA)
- Provenance: EliExplains original synthesis; all facts verified against cited sources and rewritten in original prose; no source wording reproduced.
