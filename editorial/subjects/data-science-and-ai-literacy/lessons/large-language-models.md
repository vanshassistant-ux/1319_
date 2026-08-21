# Large Language Models

## In 30 Seconds

A large language model, or LLM, is a deep learning model trained on enormous amounts of text — books, web pages, and code — so it can understand and generate natural language. It learns patterns by predicting what comes next, and generating text is just that choice repeated, one token at a time. As of 2026 these models power chatbots that summarize, draft, translate, explain, and assist with code. Their fluent output is not guaranteed fact, so it deserves checking.

## Why This Matters

Large language models are the technology behind the chatbots and writing assistants people meet daily, so knowing what they are and how they work changes how you read their output. Understanding that an LLM predicts patterns rather than consulting facts explains both why it can write fluently and why it can be confidently wrong. That distinction matters in school, at work, and for anyone evaluating information: it tells you when an answer is worth acting on and when it needs verification. It also gives you language for talking about AI critically rather than treating it as magic.

## Learning Objectives

- Define a large language model as a model trained on vast amounts of text to understand and generate natural language.
- Explain the generation mechanism: an LLM predicts the next token from its context, and generating text is repeating that choice.
- Describe what makes these models "large": training on enormous text corpora — books, web pages, and code — is the defining feature.
- Give time-anchored examples of tasks LLMs handled well as of the 2026 sources: summarizing, drafting, translating, explaining, and assisting with code.
- Identify the documented failure mode of confident but wrong output, including fabricated citations, and explain why fluency is not accuracy.
- Distinguish LLMs as the text-focused family of generative AI and apply a basic verification habit to their output.

## The College Version

### What a large language model is

A large language model, or LLM, is a deep learning model trained on immense amounts of text that learns to understand and generate natural language. IBM's public explainer, read in August 2026, describes LLMs as deep learning models trained on immense amounts of data, capable of understanding and generating natural language, built on a transformer architecture that excels at handling sequences of words. OpenAI's documentation makes the practical point: you use a large language model to generate text from a prompt, as you might with ChatGPT. The name carries the definition: "language" says the material is text, "model" says it is a trained system rather than a database or hand-written rules, and "large" points at the defining ingredient — training on far more text than any person reads in a lifetime. The assistants sold as Claude, ChatGPT, Copilot, Llama, and Gemini, among the interfaces IBM names, are all built on LLMs. Everything a model can do comes from the patterns it absorbed during training.

### How it works: prediction, one token at a time

The core mechanism is simple: predict what comes next. IBM describes LLMs as giant statistical prediction machines that repeatedly predict the next word in a sequence, having learned patterns in text so they generate language that follows those patterns. Text is first broken into small units called tokens — words, subwords, or characters. During training, the model practices one task over and over: given a stretch of text, guess the token that follows. Each wrong guess nudges its internal settings, until the model has captured the patterns of grammar, word choice, and structure in its training material. Generating works the same way. Given "The cat sat on the," the model assigns likelihoods to candidate next tokens and picks one, then treats its own choice as context and picks the token after that, repeating until it stops. Text generation is just a long chain of choosing the next token, informed by everything before it. No step looks anything up, and no step consults a fact-checker.

### Training at scale: books, web pages, and code

Scale is what separates an LLM from earlier language programs. IBM describes training as starting with a massive amount of data — billions or trillions of words from books, articles, websites, code, and other text sources — cleaned before use. The transformer architecture, introduced in 2017, made training on datasets this large practical, and the resulting models hold billions or trillions of internal settings, or parameters. Because the collection is so broad, the model picks up patterns far beyond grammar: how explanations are structured, what a summary looks like, how instructions are followed, what code tends to look like. That is why the same model can summarize an article and help debug a program. "Large" is not decoration — the size and variety of the training text is the defining feature of the approach.

### What LLMs do well, as of 2026

As of the sources read in August 2026, LLMs handle a broad set of everyday language tasks. IBM lists interpreting and generating text for jobs like summarizing an article, debugging code, and drafting a legal clause, plus translation and multilingual capabilities and explaining complex concepts in simpler terms. OpenAI's documentation observes that models can generate almost any kind of text response — code, mathematical equations, structured data, or human-like prose. Examples of the general capability: Priya pastes a dense forty-page journal article and asks for a three-paragraph plain-language summary; Marco asks a coding assistant why his script crashes on empty input; a shopkeeper asks for a friendlier refund email; a student asks for a hard chapter explained to a ten-year-old. Tools and quality keep changing, but the general capability — turning a request into fluent, useful-sounding text — is what the providers document as of 2026.

### What LLMs get wrong

Fluent output is not the same as true output. IBM lists accuracy as a major concern: during hallucinations the model generates information that is false or misleading while sounding plausible. NIST's Generative AI Profile documents the same failure mode — confabulation — plausible-sounding text that is simply wrong, known colloquially as hallucinations — as a risk that can mislead users. The mechanism explains why: a plausible-sounding citation fits the pattern of the question beautifully, whether or not the cited work exists, so a chatbot can invent a study, an author, or a statistic with complete confidence. The hallucinations sibling topic covers this in depth. The practical boundary: an LLM is a pattern-continuation engine, and patterns are not proof. IBM also notes that models can reflect and amplify biases in their training data — the corpus shapes the model, for good and for ill.

### LLMs, generative AI, and using them well

Large language models sit inside the broader family of generative AI — AI that creates new content rather than only classifying or predicting. The boundary is one sentence: generative AI covers text, images, audio, video, and code, while LLMs are the text-focused family within it, which IBM describes as the most common kind of foundation model, built for text generation. Microsoft Learn's generative AI module likewise treats LLMs as a core generative AI concept. Using an LLM well comes down to two habits covered by sibling topics: write effective prompts — what you ask and how you frame it changes what you get (prompting-basics) — and verify output, checking facts, citations, and numbers against reliable sources because confabulation is documented (evaluating-ai-output). An LLM is a fast, fluent writer with no fact-checker built in; the human at the keyboard supplies the checking.

## Key Vocabulary

- **large language model** — A deep learning model trained on vast amounts of text that learns to understand and generate natural language, typically by predicting what comes next.
- **token** — A small unit of text — a word, subword, or character — that a language model reads and generates one at a time.
- **next-token prediction** — The training task of guessing the next token in a sequence from the tokens that come before it, repeated millions of times during training.
- **training corpus** — The enormous collection of text — books, articles, websites, and code — that a language model learns its patterns from.
- **transformer** — The neural network architecture, introduced in 2017, that large language models are built on and that made training on very large text datasets practical.
- **parameter** — An internal setting of a model that is adjusted during training and controls how the model processes text; large models hold billions or trillions of them.
- **prompt** — The request a user gives a language model to tell it what text to produce; prompting-basics covers how to write prompts well.
- **hallucination** — A confidently stated but false output, such as an invented citation, produced when a model continues patterns instead of checking facts; the hallucinations topic covers this in depth.

## Eli-10

A large language model is a program that learned to talk by reading an enormous amount of writing — books, web pages, and code — and practicing one simple trick: guess what comes next. Given "The dog chased the," it guesses "ball" is likely, then guesses what follows "ball," and keeps going until it has produced a whole answer. Every sentence a chatbot writes is built that way, one small piece at a time. Because it practiced on so much text, it got very good at writing things that sound right. But sounding right is not the same as being right, and the model never checks its work, so it can confidently invent things that do not exist.

## Eli's Analogy

Imagine a stage actor who has read thousands of books and plays, and whose party trick is finishing any story you start. You say, "A sailor walks into a café and orders..." and he continues fluently, in character, without pausing. He is not remembering one particular book — he is drawing on everything he has read to choose what would most naturally come next, again and again, until the story lands somewhere. An LLM does exactly that with text: it has "read" a vast library and its skill is continuing any passage plausibly.

The analogy breaks down because the actor knows the difference between a story and a fact: if you ask whether the café really exists, he will say no. A language model cannot make that distinction — it continues patterns whether the topic is fiction or physics, so it will invent a "fact" as readily as a story. The actor also understands what he says; the model only chooses what fits. And while the actor knows when he is improvising, the model has no such awareness, which is why its confident mistakes need checking.

## Worked Example

Devon is writing a class report on recycling programs and wants a plain-language summary of a dense city report. He pastes the text into a chatbot and asks for a five-sentence summary; the bot breaks the request into tokens and produces a fluent paragraph — generation by repeated next-token choices. The summary is accurate where Devon checks it against the original, so he keeps it. Then he asks the bot to add citations, and it supplies "a 2022 study by the Greenfield Institute" with a journal name and a page number. Devon searches for it and finds nothing — the citation is a hallucination, a confident pattern that matches the shape of a real reference. He deletes the fabricated citation, verifies the remaining claims against the city report itself, and submits his paper with only sources he can actually find.

## Common Mistakes

- **Treating a chatbot like a search engine that looks up answers.** A search engine returns pages that already exist; an LLM generates new text by predicting likely next tokens from learned patterns. Fluency is not retrieval, which is why a confident answer is not proof the underlying fact exists.
- **Believing that a confident, well-written answer is accurate.** Fluency is not accuracy. IBM documents hallucinations — false or misleading output that sounds plausible — as a major concern, and NIST lists confabulation as a documented risk. Citations and numbers deserve checking against real sources.
- **Thinking "large" refers to how much the model has memorized.** The "large" in large language model points to training at scale — billions or trillions of words from books, web pages, and code. The model learns patterns from that corpus; it does not memorize the corpus like a database.
- **Assuming every AI chatbot is the same kind of system.** Chatbots are interfaces; the underlying systems differ. An LLM generates text from patterns, while other AI systems classify, predict, or retrieve. The label "AI" alone does not tell you which kind you are using.
- **Using an LLM's answer without verifying the important parts.** Because confabulation is documented, facts, citations, and numbers deserve a second look against reliable sources. The evaluating-ai-output topic covers how to check AI output systematically.

## Compare / Contrast

- **Large language model vs. Search engine** — A search engine retrieves existing pages that match your query; an LLM generates new text by predicting likely next tokens from patterns learned during training. One finds what exists; the other produces what sounds right.
- **Large language model vs. Other generative AI (images, audio, video)** — All are generative AI that create new content from learned patterns. LLMs are the text-focused family — IBM calls them the most common foundation models, built for text generation — while image, audio, and video models generate those other kinds of content.
- **Large language model vs. Rule-based language program** — A rule-based program follows grammar rules written by people, so it breaks on anything the rules did not anticipate. An LLM learned its patterns by predicting tokens across billions of words of text, which is why it handles messy, varied language — but it has no rulebook to keep it honest.

## Key Takeaway

A large language model is a text-prediction machine trained on enormous amounts of text: it generates fluent language by choosing the next token, again and again — and because it continues patterns rather than checking facts, its confident output needs human verification.

## Practice Question Bank

**Q1.** Which of the following best describes a large language model?

- A. A deep learning model trained on vast amounts of text that learns to understand and generate natural language
- B. A search engine that indexes web pages and returns the ones matching your query
- C. A database of facts and citations that a program looks up when asked a question
- D. A program that follows grammar rules written by human programmers for every sentence

**Key: A.** IBM describes LLMs as deep learning models trained on immense amounts of data that understand and generate natural language, and OpenAI's docs describe using an LLM to generate text from a prompt. A search engine retrieves existing pages, a fact database is lookup rather than generation, and rule-based programs are the older approach LLMs replaced — none of these is what an LLM is.

**Q2.** A language model is asked to finish the sentence "The mail carrier left the package at the..." and produces "door." Which best describes the mechanism behind that word?

- A. The model searched an online database of addresses and found a matching sentence
- B. The model looked up "mail carrier" in a dictionary and copied the first example
- C. The model assigned likelihoods to candidate next tokens given the context and chose "door" as the most likely continuation
- D. The model counted how many times the exact sentence appeared in its training data and repeated it

**Key: C.** IBM describes LLMs as statistical prediction machines that repeatedly predict the next word in a sequence, choosing what fits the patterns learned during training. The model is not searching a database, consulting a dictionary, or counting exact matches of that sentence — it predicts the next token from context, which is the core generation mechanism.

**Q3.** A student asks a chatbot to explain a difficult physics chapter "as if to a ten-year-old," and the chatbot produces a clear, simple explanation. As of the 2026 sources, what best explains why the model can do this?

- A. The model was given a special feature that translates difficult topics into child-friendly language on request
- B. The model checks each sentence against a physics textbook before writing it
- C. The model was programmed with a database of simplified explanations written by teachers
- D. During training on billions of words, the model absorbed patterns of how complex topics are explained in simpler terms, and its text generation follows those patterns

**Key: D.** IBM lists explaining complex concepts in simpler terms among LLM capabilities, which come from patterns learned across an enormous and varied training corpus — not from a special translation feature, live textbook checking, or a hand-built database of explanations. The model generates a simplification the way it generates anything: by continuing text patterns.

**Q4.** A chatbot answers a history question and includes a quote from a "2021 study" with an author's name, a journal, and page numbers. A search finds no such study exists. Which conclusion is best supported?

- A. The study must be real but too new to appear in any search index
- B. The citation is likely a hallucination — confident, plausible-sounding output that is false — and the answer's facts deserve checking against real sources
- C. The chatbot is working correctly, because LLMs never produce citations that do not exist
- D. The chatbot must have found the study earlier and lost it, so the user should ask again

**Key: B.** IBM documents hallucinations as false or misleading output that sounds plausible, and NIST lists confabulation — confidently stated but erroneous content — as a documented risk by which users may be misled. A plausible citation shape is exactly the kind of pattern an LLM can continue without the cited work existing, so the answer is: treat it as likely fabricated and verify.

**Q5.** Two language models were trained: one on a single book of knitting patterns, the other on billions of words from books, web pages, and code. What does the "large" in large language model mainly point to?

- A. The size of the screen the model runs on
- B. The number of languages the model's user interface displays
- C. Training at scale — an enormous corpus of text such as books, web pages, and code is the defining feature of the approach
- D. The length of the user's prompt, since longer prompts make a model "large"

**Key: C.** IBM describes training as starting with a massive amount of data — billions or trillions of words from books, articles, websites, code, and other text sources — and scale is what makes the approach work. "Large" refers to training at scale, not screen size, interface languages, or prompt length.

## Sources

- IBM — "What are large language models (LLMs)?". https://www.ibm.com/topics/large-language-models
- OpenAI — "Text generation" (OpenAI API documentation). https://developers.openai.com/api/docs/guides/text
- National Institute of Standards and Technology — "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)". https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- Microsoft Learn — "Introduction to generative AI and agents". https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/

## Related Topics

- Generative AI (data-science-and-ai-literacy:foundations:generative-ai)
- Prompting Basics (data-science-and-ai-literacy:foundations:prompting-basics)
- Hallucinations (data-science-and-ai-literacy:foundations:hallucinations)
- Evaluating AI Output (data-science-and-ai-literacy:foundations:evaluating-ai-output)
- Machine Learning Basics (data-science-and-ai-literacy:foundations:machine-learning-basics)

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:large-language-models
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: one U.S. government work (one short quote) plus reference-only vendor documentation; no vendor source prose adapted
