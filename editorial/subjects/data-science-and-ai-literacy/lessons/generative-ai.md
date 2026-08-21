# Generative AI

## In 30 Seconds

Generative AI is the branch of artificial intelligence that creates new content — text, images, audio, and video — instead of only classifying or predicting. Generative models learn patterns from vast collections of examples and then produce new outputs that follow those patterns. As of 2026, tools like these can draft writing, summarize and translate text, and create images and music, but they can also produce confident-sounding falsehoods, so their output deserves checking before you rely on it.

## Why This Matters

Generative AI has moved from research labs into everyday life: chatbots answer questions, image tools illustrate documents, and writing assistants draft emails. Because these tools produce content that looks human-made, they change how we read what we find online and how we work. Understanding what generative AI is, how it learns, and where it fails helps you decide when to trust its output and when to double-check it. It also gives you the vocabulary to talk about the technology in school and at work, and to recognize both its real strengths and its documented risks.

## Learning Objectives

- Define generative AI as AI that produces new content — text, images, audio, and video — rather than only classifying or predicting.
- Explain the general mechanism: generative models learn patterns from large collections of examples, then generate new outputs that follow those patterns.
- Describe, with time-anchored examples, what generative AI tools could do as of the mid-2026 sources: draft and summarize text, translate, and create images and music.
- Identify what generative AI cannot reliably do, including producing false facts and fabricated citations.
- Apply a simple verification habit — check outputs against reliable sources, know where content came from, and mind what you share — when using a generative AI tool.

## The College Version

### What generative AI is

Generative AI is the family of artificial intelligence systems that create new content rather than only sorting, labeling, or forecasting. NIST's Generative AI Profile quotes the official definition from Executive Order 14110: generative AI is "the class of AI models that emulate the structure and characteristics of input data in order to generate derived synthetic content," including images, videos, audio, text, and other digital content. IBM, in its public explainer read in August 2026, describes generative AI as AI that can create original content — text, images, video, audio, or software code — in response to a user's prompt or request. Microsoft Learn's generative AI module puts it practically: generative AI powers applications that can create content, answer questions, and assist with tasks. The contrast with older AI is the point. A spam filter classifies, a weather model predicts, but a generative model produces something that did not exist before — a new paragraph, a new picture, a new melody.

### How it learns and generates

The general mechanism has two parts: learning patterns, then generating from them. During training, the model studies enormous volumes of examples — millions of sentences, images, or recordings. IBM describes training as millions of "fill in the blank" exercises: the model predicts the next element in a sequence — the next word in a sentence, the next element in an image, the next command in a line of code — and continually adjusts itself to shrink the gap between its predictions and the actual data. What survives training is a web of learned patterns: which words tend to follow which, what a beach scene usually contains, how a chorus resolves. When a user sends a prompt, the model draws on those patterns to build a fresh output, step by step, that fits the request. That is why scale matters: the patterns come from the size and variety of the training collection. The model consults no database of facts — the patterns are all it has. The inner workings of the text-focused models belong to the large-language-models topic.

### What it can do

As of the sources checked in 2026, generative tools are widely used for writing, summarizing, translating, and creating media. IBM's explainer describes image tools that create realistic images or original art, models that synthesize natural-sounding speech and original music, code tools that generate and summarize code and translate between programming languages, and emerging video tools that make animations from text prompts. Microsoft Learn's module describes applications that create content, answer questions, and assist with tasks. Everyday examples: someone drafts a polite email and asks the tool to shorten it; a student pastes a long chapter and asks for a summary; a designer describes a logo and gets four rough options; a hobbyist types a mood and hears an original instrumental loop. These uses are real as of 2026, but specific tools and their quality keep changing. What matters for literacy is the general capability: turning a description into finished-looking content.

### What it cannot reliably do

Generative output is not guaranteed fact. NIST's Generative AI Profile lists confabulation — "the production of confidently stated but erroneous or false content," known colloquially as hallucinations — among the documented risks of the technology, noting that users may be misled or deceived by it. IBM gives a concrete example: a lawyer used a generative AI research tool that produced entirely fictional court cases, complete with quotes and citations. Because the output reads fluently and sounds certain, errors are not always easy to spot. Numbers can be wrong, sources can be invented, and confident prose can mask an error. This is not a rare edge case; it is a documented failure mode of the underlying approach, because the model continues patterns rather than checking facts. The hallucinations topic covers this in depth. The practical rule for now: treat generative output as a draft to verify, not a fact to quote.

### Generative AI and other AI

Generative AI sits inside the wider world of machine learning: it is built from deep learning models trained on data, the same general approach as classifiers and predictors, but aimed at creation rather than judgment. Within generative AI, the text-focused family is called large language models, or LLMs. IBM notes that LLMs are the most common foundation models, created for text-generation applications, alongside models for images, video, and sound, and multimodal models that handle several kinds of content. The relationship is a set of nested families: machine learning contains generative AI, and generative AI contains LLMs. A tool that labels emails and a tool that writes emails are both AI, but they do different jobs, and the label "AI" alone does not tell you which one you are using.

### Using it responsibly

Three habits cover most of responsible use at the literacy level. First, verify: check important outputs — facts, citations, numbers — against reliable sources before acting on them, because confabulation is documented. Second, know the source: ask where content came from, and be transparent when something was AI-made; NIST's profile discusses provenance tracking for generated content as part of managing risk. Third, mind privacy: anything typed into a prompt can be stored, reused, or exposed, and NIST lists data privacy among the risks of generative AI. IBM warns that data put into a model as part of a prompt should not include private or proprietary information. The evaluating-ai-output and ai-privacy topics develop these habits further. The short version: generative AI is a capable assistant that needs a careful human at the keyboard.

## Key Vocabulary

- **generative AI** — AI that creates new content such as text, images, audio, or video in response to a request, instead of only classifying or predicting.
- **synthetic content** — Content produced by a model from learned patterns rather than written, recorded, or photographed directly by people.
- **foundation model** — A large model trained on broad data that serves as the basis for multiple generative AI applications.
- **large language model** — The text-focused family of generative AI, trained on vast amounts of written text to produce fluent written output.
- **hallucination** — A confidently stated but false generative AI output, a documented failure mode in which the model invents content that sounds plausible.
- **prompt** — The request or description a user gives a generative AI model to tell it what content to produce.
- **provenance** — Information about where a piece of content came from and how it was created, used to judge authenticity and trustworthiness.

## Eli-10

Generative AI is a kind of computer program that makes new things — sentences, pictures, songs, videos — instead of just sorting or guessing. It learns by studying enormous piles of examples: millions of paragraphs, photographs, or recordings. From those examples it picks up patterns, like which words usually follow which, or what a cat photo tends to look like. Then, when you ask, it builds a fresh output that follows the same patterns. The result can look very human. But the program is only combining patterns it learned; it is not checking facts or understanding the world, so its output can be confidently wrong.

## Eli's Analogy

Think of a musician who has listened to thousands of folk songs. Without copying any one song, she can hum a new tune that sounds like folk music — same chords, same rhythm, same feel. A generative model works that way: it absorbs the patterns of its training examples and can then produce new examples in the same style. The text or image it creates is new, but the style comes straight from everything it studied.

The analogy breaks down because the musician understands music — she knows why a chorus resolves, and she can judge whether her tune is good. The model has no understanding and no taste; it only continues patterns. It also cannot decide to know better or admit ignorance. And a musician would never invent a quote and present it as real; a generative model can, which is why its output needs checking.

## Worked Example

Maya runs a small community newsletter. She drafts an article, then asks a generative writing tool to shorten it and offer three title options — that is text generation. She asks it to translate a city notice into Spanish; it does, and she has a bilingual neighbor review it. For the cover, she describes a drawing of a coffee cup next to a book, and the tool generates four images; she picks one and labels it as AI-made. Then the tool suggests adding a quote from a "local historian," complete with a name and a date. Maya searches for that person and finds nothing — the citation is fabricated. She deletes it, keeps only facts she verified, and adds a note that the cover image was AI-generated. She also keeps subscriber names out of the tool, because anything pasted into a prompt can be stored or reused.

## Common Mistakes

- **Treating generative AI output like a search engine result.** A search engine returns pages that already exist; a generative model creates new text or images from learned patterns. A fluent answer is not proof a fact exists, so check important claims against real sources.
- **Believing that confident, fluent output is accurate.** Fluency is not accuracy. NIST documents confabulation — confidently stated but false content, colloquially hallucinations — as a risk that can mislead users, so citations and numbers deserve a second look.
- **Assuming every AI system is generative.** Most AI systems classify or predict: spam filters label, recommendation engines score. Generative AI is the family that produces new content, and large language models are its text-focused subset.
- **Pasting private information into a generative tool without thinking.** Whatever goes into a prompt may be stored, reused, or exposed. NIST lists data privacy among generative AI risks, and IBM warns against putting private or proprietary information into prompts.

## Compare / Contrast

- **Generative AI vs. Classifying or predicting AI** — Both learn from data, but generative AI produces new content — text, images, audio, video — while classifying or predicting AI assigns labels or forecasts values. NIST defines the generative class as models that generate derived synthetic content.
- **Generative AI vs. Large language models** — Generative AI is the broader family covering text, image, audio, video, and code. Large language models are the text-focused family within it — as of IBM's 2026 description, the most common foundation models.
- **Human-written content vs. AI-generated content** — Both can read fluently, but a generative model continues patterns it learned and does not check facts as it writes. Knowing where content came from — provenance — matters for judging trust.

## Key Takeaway

Generative AI creates new text, images, audio, and video by learning patterns from vast collections of examples, and as of 2026 it can draft, summarize, translate, and create — but its fluent output can be confidently wrong, so verify it and mind what you share.

## Practice Question Bank

**Q1.** Which of the following best describes generative AI?

- A. AI that creates new content such as text, images, audio, or video in response to a request, rather than only classifying or predicting.
- B. AI that only sorts existing information into categories, such as spam and not spam.
- C. AI that stores large amounts of data for later search.
- D. AI that speeds up calculations on a computer.

**Key: A.** NIST's Generative AI Profile defines generative AI as the class of AI models that emulate the structure and characteristics of input data to generate derived synthetic content — images, videos, audio, text, and other digital content — and IBM describes it as AI that can create original content in response to a prompt. Sorting into categories is classification, and storage or speed are not what defines generative AI.

**Q2.** A model is shown millions of sentences and, during training, repeatedly predicts the next word, adjusting itself each time it is wrong. After training, it produces fluent new sentences on request. What best explains what the model is doing?

- A. It memorized the sentences it was shown and repeats them back.
- B. It looks up each new request in an online database.
- C. It learned patterns from its training examples and generates new output that follows those patterns.
- D. It follows rules that a person wrote for every possible sentence.

**Key: C.** IBM describes generative training as millions of "fill in the blank" exercises in which the model predicts the next element in a sequence — such as the next word — and continually adjusts to reduce its errors; the trained model then generates content in response to inputs. It is not memorizing examples, searching a database, or following hand-written rules.

**Q3.** A student asks a generative AI tool for sources on a history essay, and the tool returns a court case with a judge's name and a year. The student cannot find the case anywhere. What is the best response?

- A. Use the citation anyway, since the tool stated it confidently.
- B. Treat the citation as likely fabricated and verify every source against a real database before using it.
- C. Assume the case is real but too old to be online.
- D. Ask the tool for a different topic, because generative AI never makes mistakes twice.

**Key: B.** NIST's profile documents confabulation — confidently stated but erroneous or false content, known colloquially as hallucinations — as a risk by which users may be misled, and IBM cites the example of a generative tool producing entirely fictional court cases. Fluency is not accuracy, so citations must be checked.

**Q4.** Which of the following is an example of generative AI at work, rather than classifying or predicting?

- A. A service assigns each incoming email a spam or not-spam label.
- B. A weather app predicts tomorrow's temperature from sensor data.
- C. A store estimates next month's sales from past purchases.
- D. A tool composes an original song in the style of a genre after a user describes it in text.

**Key: D.** Composing an original song is content creation — the defining behavior of generative AI, which IBM describes as generating original music from text requests. Labeling, forecasting, and estimating are classification or prediction tasks, not generation.

**Q5.** A coworker says, "The chatbot is like an encyclopedia — it knows everything and never gets anything wrong." Which statement best analyzes the problem with this view?

- A. It overstates the tool: generative models continue patterns they learned and can produce confident, fluent falsehoods, so their output should be checked rather than trusted as fact.
- B. It is basically correct, because chatbots are updated constantly with new facts.
- C. It is wrong only because encyclopedias are unreliable, not because of anything about AI.
- D. It is correct for text but not for images, which are always accurate.

**Key: A.** NIST lists confabulation as a documented generative AI risk, and IBM notes that hallucinated outputs can seem entirely plausible; fluency does not equal accuracy, and generated images and text alike can be wrong. An encyclopedia is edited and checked by people, while a generative model is not checking facts when it writes.

## Sources

- National Institute of Standards and Technology — "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)". https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- IBM — "What is generative AI?". https://www.ibm.com/topics/generative-ai
- Microsoft Learn — "Introduction to generative AI and agents". https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/
- National Institute of Standards and Technology — "AI Risk Management Framework (AI RMF)". https://www.nist.gov/itl/ai-risk-management-framework

## Related Topics

- Large Language Models (data-science-and-ai-literacy:foundations:large-language-models)
- Hallucinations (data-science-and-ai-literacy:foundations:hallucinations)
- Machine Learning Basics (data-science-and-ai-literacy:foundations:machine-learning-basics)
- Evaluating AI Output (data-science-and-ai-literacy:foundations:evaluating-ai-output)
- AI Privacy (data-science-and-ai-literacy:foundations:ai-privacy)

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:generative-ai
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: one U.S. government work (two short quotes) plus reference-only vendor documentation; no vendor source prose adapted
