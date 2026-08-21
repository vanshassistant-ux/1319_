# Hallucinations

## In 30 Seconds

An AI hallucination is a confident, fluent output that is factually wrong — an invented fact, citation, or event presented as if it were real. The formal term used in NIST's Generative AI Profile is confabulation. Models generate text by predicting what sounds plausible next rather than checking facts, so these errors are a documented limitation of the technology, not a user mistake. When an answer matters, verify its claims, numbers, and citations against real sources.

## Why This Matters

Hallucinations are easy to miss because the wrong output reads exactly like the right one. In casual use, a made-up fact is harmless; in medicine, law, or news, a confidently wrong summary can lead people to act on false information — a risk the U.S. government's own AI guidance documents. Because generative tools now sit inside search, writing, and study workflows, knowing when to check matters for everyone, not only specialists. Understanding why models invent content, and keeping a simple verification habit, turns an impressive black box into a tool you can use without being misled: the difference between quoting an AI answer and using one.

## Learning Objectives

- Define a hallucination and explain the formal term confabulation used in NIST's Generative AI Profile, with attribution.
- Explain why generative models produce confident falsehoods: pattern-based prediction rather than fact-checking.
- Distinguish common shapes of hallucinated output: fabricated citations, invented facts, wrong numbers, and mixed-up sources.
- Analyze the stakes of hallucinated content across casual and consequential settings such as medicine, law, and news.
- Apply a basic verification checklist — checking claims, citations, and numbers against sources — to AI output.

## The College Version

### What a hallucination is

A hallucination is a model output that is confident, fluent, and wrong. NIST's Generative AI Profile (AI 600-1), the U.S. government's risk guidance for generative AI, uses the formal term confabulation: "the production of confidently stated but erroneous or false content," which it notes is colloquially called hallucination or fabrication. IBM's public explainer describes the same phenomenon as output that is "nonsensical or altogether inaccurate but, all too often, seems entirely plausible." Three features mark it: the output sounds certain, it reads smoothly, and it is not true. The model can invent a fact, a citation, or an entire event while sounding like a careful researcher.

### Why models hallucinate

The mechanism follows from how these models generate text. NIST explains that confabulations "are a natural result of the way generative models are designed: they generate outputs that approximate the statistical distribution of their training data; for example, LLMs predict the next token or word in a sentence or phrase." During training the model learns patterns — which words tend to follow which — from enormous collections of text; IBM describes this as millions of "fill in the blank" predictions. When you prompt the model, it continues those patterns step by step. It does not consult a database of verified facts, and it has no internal fact-checker, so the same machinery that produces accurate prose can also produce confident falsehoods. Accuracy is a side effect of good patterns, not a guarantee.

### Four common shapes of error

Documented failures take recognizable shapes. Fabricated citations: the model names a study, journal, or court case that does not exist — NIST warns of "confabulated logic or citations that purport to justify or explain the system's answer," and IBM's classic example is a lawyer's research tool producing fictional court cases complete with quotes and attributions. Invented facts: events, people, or statistics that never happened, presented as established. Wrong numbers: quantities that look precise but match no real record. Mixed-up sources: real facts attached to the wrong author, study, or date, because the model blended patterns it had seen. NIST also notes outputs can diverge from the prompt or contradict the model's own earlier statements. These categories are illustrative groupings of one underlying behavior: generating content that fits the pattern, whether or not it matches reality.

### When it matters

NIST is explicit about the stakes: risks arise "when users believe false content – often due to the confident nature of the response – leading users to act upon or promote the false information." Its example is healthcare — a confabulated summary of patient reports could cause doctors to make incorrect diagnoses or recommend the wrong treatments — and it notes that legal confabulations have been shown to be pervasive in current state-of-the-art models, and that confabulated content can feed misinformation at scale. The practical scale is simple: in casual use, a made-up fact about a movie is harmless; in medicine, law, or news, a confident error can shape a decision with real consequences. These are documented risks stated factually in the 2026 sources, not speculation.

### How to check an output

A short checklist catches most problems. Verify claims: compare the answer's statements against a reliable source you can consult yourself. Check citations: confirm the named study, case, or article actually exists — the author, title, journal, and year — in a library catalog or publisher's site. Cross-check numbers: find the statistic in a primary source rather than trusting the formatting. And treat the model's own confidence as irrelevant: NIST notes the confident presentation is exactly what misleads people into trusting output. Google's documentation makes the same point from the design side, describing hallucinations as "instances where the model generates content that isn't factual." The evaluating-ai-output topic develops this into a fuller framework; here the habit is simply: before you repeat a claim, find it outside the chat.

### Reducing the risk at the source

Several general measures reduce — but do not eliminate — hallucinations. Grounding: Google describes grounding as connecting model output to verifiable sources of information, so output "tethered" to sources you provide is less likely to be invented; IBM similarly describes guardrails that restrict a model to relevant or trusted data sources, and continual evaluation and tuning that reduce inaccuracies. Ask for citations, then check them, rather than assuming they were checked for you. Treat output as a draft: a starting point for your own verification, not a finished answer. The prompting-basics topic covers how requests shape responses; the point here is that no measure replaces a human check on anything that matters.

### What it is not

A hallucination is not a sign that the user asked badly, and it is not evidence that the model is deliberately lying. NIST describes confabulation as a natural result of how generative models are designed, and IBM notes practitioners view hallucinations as an unavoidable consequence of balancing a model's accuracy with its creative capabilities. The honest framing: hallucination is a known limitation of current technology as of the 2026 sources, to be managed like any documented risk — reduced where possible, checked where necessary, and never mistaken for verified truth.

## Key Vocabulary

- **hallucination** — An AI output that presents invented content — facts, citations, or events — with confidence and fluency, so it reads as true but is not.
- **confabulation** — The formal term used in NIST's Generative AI Profile for a model's confident production of erroneous or false content; hallucination is the everyday word for the same phenomenon.
- **token** — A unit of text a language model processes, roughly a word or a word fragment; the model chooses each next token by prediction, which is why it never pauses to check facts.
- **grounding** — Connecting a model's output to specific, verifiable sources of information, which reduces the chance that it invents content.
- **fabricated citation** — A reference to a source — author, title, journal, or URL — that the model invented rather than found.
- **guardrail** — A developer-side measure, such as restricting a model to trusted data sources, that reduces inaccurate output.
- **verification** — The habit of checking a model's claims, numbers, and citations against reliable sources before treating them as true.

## Eli-10

A hallucination is when an AI helper says something that sounds completely true but isn't — like naming a book that was never written or a person who doesn't exist. It happens because the model works like a very fast pattern-matcher: it has studied so much text that it knows which words usually follow other words. When you ask it something, it builds an answer one piece at a time by picking what seems most likely to fit. It never stops to look anything up. Most of the time the patterns point at the truth; sometimes they point at something that merely looks like the truth.

## Eli's Analogy

Imagine a tour guide who learned about a city only by reading thousands of travel blogs, never by visiting. Ask about a landmark and she describes it fluently — street names, opening hours, a story about the founder. Most of it is right. But when the blogs disagree or a detail is missing, she doesn't say "I don't know." She smoothly fills the gap with what sounds like it belongs there. That is a hallucination: confident, fluent, invented.

The analogy breaks down because the tour guide could choose to be honest or go check the city herself. The model has no such choice: while generating, it cannot consult a fact-checker, and it does not experience uncertainty. It also cannot learn from your correction on the spot — it just keeps predicting. That is why you, not the model, are the one who verifies.

## Worked Example

Ravi is writing a report on his city's 1893 world's fair and asks a chatbot for three interesting facts and their sources. It returns polished facts: an attendance figure, a newspaper quote, and a "forgotten" exhibit, each attributed to a named newspaper and a local historian. Ravi checks. The attendance figure does not match the city archive's records; no archive or library catalog lists the historian; the newspaper's digitized run contains no such quote. All three citations are fabricated — plausible, specific, and invented. Ravi rewrites the section using the archive's own documents, and when he pastes a page from the archive into the chat and asks about it, the answers track the document. He keeps only claims he could find outside the chat, and the report's source list contains only things he read.

## Common Mistakes

- **"It gave exact names and dates, so it must be right."** Specificity is not verification. Models produce plausible details from learned patterns, and fabricated citations are documented — NIST warns of confabulated citations that look authoritative. Check that the named source actually exists.
- **"Only weak models hallucinate; the newest ones do not."** As of the 2026 sources, confabulation is a documented risk across current generative systems — NIST notes legal confabulations are pervasive in state-of-the-art LLMs. Newer models and guardrails reduce the behavior; they do not eliminate it.
- **"The wrong answer means I wrote a bad prompt."** Hallucination is a known limitation of the technology — NIST calls it a natural result of how generative models are designed — not evidence of user error. That said, checking the output before relying on it is still your responsibility.
- **"The model must have mixed up real sources."** Sometimes it does attach real facts to the wrong source, but it can also invent references entirely. The only way to tell the two apart is to look the citation up.

## Compare / Contrast

- **hallucination vs misinformation:** A hallucination is generated by a model that is not checking facts — there is no intent behind it, and it is a design artifact. Misinformation is false information circulated by people, sometimes deliberately. The risk is similar (people act on false beliefs); the origin is different.
- **fabricated citation vs mistaken citation:** A fabricated citation is a reference invented whole-cloth — there is nothing to find when you look it up. A mistaken citation points at a real source but gets the author, title, or year wrong. Both fail verification, but only looking them up tells them apart.
- **grounding (providing sources) vs asking the model to double-check itself:** Grounding gives the model new information to work from, tethering its output to sources you provided. Asking it to double-check simply reruns the same patterns and adds no new information; real checking has to happen against sources outside the chat.

## Key Takeaway

Hallucinations are a documented limitation of today's generative AI: the model produces plausible text, not verified truth. Treat every important output as a draft, and check its facts, numbers, and citations against real sources before you rely on it.

## Practice Question Bank

**1. Which phrase best defines a hallucination in the context of generative AI?**

A. A technical failure that happens only when a model is overloaded with requests.
B. A deliberately misleading answer the model produces to test the user.
C. A confident, fluent output that is factually wrong — for example, an invented fact, citation, or event.
D. An output that answers correctly but in more words than the user wanted.

**Correct answer: C.** A hallucination is defined by its combination of confidence, fluency, and factual error: NIST's formal term confabulation is "the production of confidently stated but erroneous or false content," and IBM describes output that seems plausible but is inaccurate. It is not a crash from overload, not a deliberate test, and not mere verbosity.

**2. According to the sources, why does a language model sometimes produce confident falsehoods?**

A. It predicts text that fits the patterns it learned, and it does not check facts while generating.
B. It keeps a database of facts but occasionally selects the wrong record.
C. It intentionally exaggerates when it thinks the user wants a dramatic answer.
D. It can only repeat sentences it has seen before, and those sentences are often outdated.

**Correct answer: A.** NIST explains that confabulation is a natural result of design: models generate outputs that approximate the statistical distribution of their training data, with LLMs predicting the next token or word. There is no fact database, no intent to exaggerate, and generation is not limited to repeating memorized sentences.

**3. A study-helper chatbot tells Priya that a 2021 study found that reading paper books improves sleep, and it names a journal. What is the most reliable first step before Priya repeats that claim?**

A. Ask the chatbot how confident it is, and trust answers rated above 90 percent.
B. Re-prompt the chatbot with different wording until it gives the same answer twice.
C. Assume the claim is safe because the chatbot gave a specific journal name.
D. Search for the study and confirm that the journal, year, and findings actually exist.

**Correct answer: D.** Verification means finding the claim outside the chat: confirming the study, journal, and year in a source you can consult. A model's self-rated confidence is not evidence — NIST notes the confident presentation is what misleads people. Re-prompting only reruns the same patterns, and a specific journal name can itself be fabricated.

**4. Mateo's chatbot answer included a quotation from a well-known scientist, but the quotation does not appear in any of the scientist's published work. Which statement best explains what happened?**

A. The chatbot mixed up two real quotations, which counts as a harmless typo.
B. The model produced plausible-sounding text, and fabricated citations are a documented failure mode, so the quote should be treated as unverified.
C. The scientist must have said it privately, because chatbots only reproduce real text.
D. The model intentionally placed a fake quote to see whether Mateo would check.

**Correct answer: B.** NIST documents confabulated citations that purport to justify a model's answer, and IBM's classic example is fictional quotes and attributions produced by a research tool. The quote is therefore unverified — not a harmless typo, not necessarily a private remark (chatbots generate rather than only reproduce), and not a deliberate test.

**5. Which situation carries the highest risk from a hallucinated answer?**

A. A hospital system uses a model's summary of a patient's lab reports to guide treatment decisions.
B. A student asks a chatbot for three recipe ideas for a class potluck.
C. A writer uses a chatbot to brainstorm five possible titles for a blog post.
D. A game club asks a chatbot to invent a backstory for a fictional town.

**Correct answer: A.** NIST highlights healthcare as a domain where a confabulated summary of patient information could lead to incorrect diagnoses or wrong treatments — a consequential decision. The other options are casual, low-stakes uses where an invented answer is harmless.

## Sources

- nist-ai-600-1-generative-ai-profile — "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)", National Institute of Standards and Technology. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- ibm-what-is-generative-ai — "What is generative AI?", IBM. https://www.ibm.com/topics/generative-ai
- google-cloud-grounding-overview — "Grounding overview", Google Cloud (Gemini Enterprise Agent Platform documentation). https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/grounding/overview

## Related Topics

- data-science-and-ai-literacy:foundations:generative-ai
- data-science-and-ai-literacy:foundations:large-language-models
- data-science-and-ai-literacy:foundations:evaluating-ai-output
- data-science-and-ai-literacy:foundations:prompting-basics

## Editorial Metadata

- Topic id: data-science-and-ai-literacy:foundations:hallucinations
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21 (NIST AI 600-1 PDF text layer; IBM and Google Cloud pages read live)
- Evidence packet: editorial/subjects/data-science-and-ai-literacy/evidence/hallucinations.json
