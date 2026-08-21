# Prompting Basics

## In 30 Seconds

A prompt is the text you type into an AI model to tell it what to produce. The same model can give a vague, rambling answer to one prompt and a crisp, useful one to another, because output quality depends heavily on how you ask. Strong prompts combine clear instructions, useful context, a requested format, and an example. Simple techniques — being specific, breaking tasks into steps, and iterating — turn prompting into a reliable skill.

## Why This Matters

Chat assistants are now ordinary tools for studying, writing, and working, and the person typing the prompt controls much of what they return. A prompt is not a magic incantation, but it is the main lever you hold: the same model that rambles when asked to "explain photosynthesis" can produce a tight, structured answer when asked for a one-paragraph summary written for a tenth grader. Knowing the basic ingredients of a good prompt — instructions, context, format, examples — saves time, improves what you get back, and helps you see what the tool can and cannot do. It is also a transferable skill: clear, specific requests get better results from people and machines alike.

## Learning Objectives

- Define a prompt as the text a user gives an AI model to steer what it produces.
- Explain why output quality depends heavily on how a request is phrased.
- Identify the basic prompt ingredients — clear instructions, context, desired format, and examples — and apply each to an original request.
- Apply simple prompting techniques: being specific, breaking tasks into steps, asking for a format, and providing an example.
- Describe what prompting cannot fix, including limits on a model's knowledge and the persistence of hallucinations.
- Explain why prompting guidance is model-specific and changes over time.

## The College Version

### What a prompt is

A prompt is the text you send to an AI language model to steer what it produces. Microsoft Learn describes text prompts as how users interact with GPT models: the words you type are the only channel the model has. OpenAI's prompt engineering guide defines the practice as writing effective instructions so a model consistently generates content that meets your requirements. A prompt can be a question, a task, a passage to transform, or a description of something to create. Because the model continues from your text, everything it needs to know or do has to fit inside it. The inner workings of these models belong to the large-language-models topic; here the focus is the request itself.

### Why prompting matters

The same model can answer the same question in very different ways depending on how the question is phrased. Anthropic's prompting guide puts it plainly: the more precisely you explain what you want, the better the result, and being specific about the desired output enhances results. Google's Gemini documentation defines prompt design as creating natural language requests that elicit accurate, high-quality responses. Two students can ask the same chatbot about the water cycle and get a rambling paragraph from one prompt and a crisp three-step explanation from the other. The difference is not the model; it is the request. Prompting is the main lever a user holds over output quality, which makes it a practical skill rather than a curiosity.

### The four basic ingredients

Provider guides converge on four ingredients that make prompts work: clear instructions, context, a desired format, and examples. Instructions tell the model what to do and what not to do. Before: "Fix this email." After: "Rewrite this email to sound friendlier, keep every request, and cut the length in half." Context supplies what the model could not know. Before: "Write an announcement." After: "Write a 100-word announcement about our neighborhood cleanup on September 14; the meeting point is the corner of Fifth and Main." Desired format fixes the shape of the answer. Before: "Tell me about heat exhaustion." After: "List the symptoms of heat exhaustion as four bullet points, with the most dangerous sign first." Examples show what right looks like. Before: "Classify these reviews as positive or negative." After: the same request plus one labeled pair of reviews. Each ingredient removes a guess the model would otherwise make.

### Four simple techniques

The ingredients support four techniques anyone can use. Be specific: replace vague verbs with concrete requirements — "Write a recipe" becomes "Write a recipe for a 20-minute vegetarian pasta that serves two and lists ingredients first." Break tasks into steps: Microsoft Learn reports that large language models often perform better when the task is broken into smaller steps, and Anthropic recommends numbered steps when order matters — "Plan a week of lunches" becomes "First list five lunch ideas, then turn each into a two-line shopping note, then combine them into one grocery list." Ask for a format: a table, a bullet list, three options, or a single paragraph changes the output as reliably as any other instruction. Provide an example: one input-output pair usually makes the model mirror it — Google's docs note that examples show the model what getting it right looks like.

### What prompting cannot fix

A good prompt steers style, structure, and effort, but it does not change what the model knows or guarantee that its statements are true. Microsoft Learn explains the fundamental behavior: the model responds with what it determines is most likely given its training data and training targets. It is not checking facts as it writes, so no wording can force it to be accurate about something it never learned, and prompting cannot eliminate hallucinations — confidently stated falsehoods. Microsoft Learn recommends external grounding, such as search, to help mitigate fabricated answers, and Anthropic's guidance tells models to investigate before answering to minimize them. Prompting can push a model to be careful; it cannot make it omniscient. The hallucinations topic covers this failure mode in depth, and evaluating-ai-output covers checking what the model returns.

### Prompting as a skill — and a caution

Prompting rewards the same habits as clear writing. Anthropic's golden rule: show your prompt to a colleague with minimal context and ask them to follow it; if they would be confused, the model will be too. Providers also describe prompting as iterative — Google's docs call prompt engineering an experimental process of refining prompts against observed responses, and Microsoft Learn calls it more of an art than a science that improves with experience. Expect to try, look at what came back, and adjust. One caution, anchored to the sources read in August 2026: prompting guidance is model-specific and changes. OpenAI notes that different model types may need to be prompted differently, and even different snapshots within a family can behave differently; Microsoft Learn notes that each model behaves differently; Anthropic maintains separate prompting pages for each model generation. A prompt that works on one model may fail on another, and guides are updated as models change — so check the current guidance for the model you are actually using.

## Key Vocabulary

- **prompt** — The text a user sends to an AI model to steer what it produces; the only channel a user has into the model.
- **prompt engineering** — The practice of writing and refining instructions so a model consistently generates output that meets your requirements.
- **instruction** — The part of a prompt that tells the model what to do, including any rules, limits, or things it should never do.
- **context** — Background information included in a prompt that the model could not know on its own, such as the audience, the situation, or a passage to work from.
- **output format** — The requested shape of a response, such as a bullet list, a table, three options, or a one-sentence summary.
- **few-shot prompting** — Including a few labeled input-output examples in a prompt so the model mirrors their format, tone, and structure.
- **iteration** — The loop of trying a prompt, checking the response, and adjusting the prompt based on what came back.
- **hallucination** — A confidently stated but false output from a model; prompting can reduce but not eliminate it, and the hallucinations topic covers it in depth.

## Eli-10

A prompt is simply what you type to an AI — your side of the conversation. The AI reads your words and continues from them, so the more your words explain what you want, the closer the reply comes to matching it. Think of telling someone how to do a task: "make dinner" leaves them guessing, but "make pasta with tomato sauce, enough for two, in under half an hour" tells them nearly everything. Good prompting is mostly clear writing: say what you need, add the details that matter, and if the answer misses the mark, adjust your words and ask again.

## Eli's Analogy

Imagine hiring an assistant who is extremely capable but knows nothing about you yet. The assistant cannot read your mind, so the quality of the work depends on the brief you hand over. A brief that says "organize my week" produces guesswork; a brief that says "plan Monday through Friday, mornings for deep work, afternoons for meetings, and block Friday afternoon for travel" produces exactly the schedule you meant.

The analogy breaks down because the assistant understands you the way a person does — and the model does not. A model has no goals or judgment, and it may answer confidently with something wrong. It also cannot ask clarifying questions the way a good assistant would, so the burden of clarity sits entirely on you — and even a perfect brief cannot fix a fact the model never learned.

## Worked Example

Priya needs a two-page study summary for her biology exam, but her first prompt — "summarize photosynthesis" — returns a wall of text with no structure. She rewrites it: "Explain photosynthesis for a first-year biology student. Use four sections: light reactions, the Calvin cycle, where each happens, and common exam mistakes. Keep each section under 120 words and end with a five-term glossary." The reply now has the structure she needs. She tries once more, asking for the glossary as a table with "term" and "one-line definition" columns, and the format matches what she wanted. Two small edits — structure and format — changed a ramble into a usable study sheet.

## Common Mistakes

- **Relying on one-word or vague prompts.** A prompt like "essay" gives the model nothing to aim at. Name the task, the audience, the length, and the structure — the model can only steer using the words you give it.
- **Pasting content with no instruction attached.** Dropping a long article into a chat without saying what to do with it invites a guess. Add one line naming the task: "Summarize this in three sentences," "List the arguments," or "Find the numbers."
- **Cramming every request into one run-on sentence.** Several requests in one sentence get handled unevenly. Break them into numbered steps or separate turns, which the providers' guidance recommends for complex tasks.
- **Expecting one prompt to work identically on every model.** Different models — and even different versions of the same model — respond differently, so a prompt tuned for one may fail on another. As of the 2026 provider documentation, each major provider publishes model-specific prompting guidance that changes over time; check the current guidance for the model you are using.
- **Assuming a polished prompt guarantees correct facts.** Prompting steers style and structure, but the model generates what is most likely given its training data and can still state falsehoods confidently. Verify important facts — the evaluating-ai-output and hallucinations topics cover how.

## Compare / Contrast

- **A prompt vs. a search query** — A search query asks an index to return pages that already exist; a prompt asks a model to generate new text from learned patterns. Both reward clear wording, but a search query is a lookup while a prompt is an instruction to create.
- **Zero-shot vs. few-shot prompting** — Zero-shot gives the model no examples; few-shot includes one or more input-output pairs. Few-shot tends to produce more consistent formats and tones because the model mirrors the examples, which is why providers recommend including them.
- **Instructions vs. context** — Instructions say what to do; context supplies information the model needs to do it. A prompt with instructions but no context makes the model guess the details, while context without instructions leaves the model unsure of the task.

## Key Takeaway

Prompts are instructions, not magic: the same model answers well or poorly depending on how clearly you specify the task, the context, the format, and an example — and no prompt can guarantee facts the model never learned.

## Practice Question Bank

**Q1.** What is a prompt, in the context of AI language models?

- A. The text a user sends to a model to steer what it produces.
- B. The training data a model was originally built from.
- C. A software setting that controls how fast the model responds.
- D. The database of facts the model looks up when answering.

**Key: A.** Microsoft Learn describes text prompts as how users interact with GPT models, and OpenAI defines prompt engineering as writing effective instructions for a model. The training data, any speed settings, and a fact database are not what a prompt is — the prompt is the user's text that steers the output.

**Q2.** Which prompt most clearly includes the "desired format" ingredient?

- A. Tell me about the Roman Empire.
- B. Write something interesting about Rome.
- C. List the three main causes of Rome's decline as numbered bullet points, one sentence each.
- D. Rome is a fascinating topic, don't you think?

**Key: C.** The third option fixes the shape of the answer — numbered bullet points, one sentence each — which is exactly what the format ingredient does. The others name a topic or make conversation but never tell the model what the response should look like.

**Q3.** A student asks "Summarize this article," and the reply comes back as one long paragraph with no structure. Which revision is most likely to fix the problem?

- A. Summarize this article about the article itself.
- B. Summarize this article in exactly three bullet points, each under 15 words, with the main argument first.
- C. Summarize this article, but do it better this time.
- D. This article is very long, so please summarize it.

**Key: B.** The revision specifies the desired format (three bullets, a word cap) and the ordering (main argument first), the ingredients the first attempt lacked. Repeating the topic, asking vaguely for "better" work, or noting the length adds no steerable information.

**Q4.** Which of the following prompts applies the "break the task into steps" technique?

- A. Plan a healthy week of lunches.
- B. List ten healthy lunch ideas.
- C. What should I eat for lunch?
- D. First list five healthy lunch ideas, then turn each into a two-line shopping note, then combine them into one grocery list.

**Key: D.** The fourth prompt sequences the work into sub-tasks — list ideas, turn each into a note, then combine — which is what breaking a task into steps means. Microsoft Learn reports that large language models often perform better when the task is split into smaller steps, and Anthropic recommends sequential-step instructions.

**Q5.** Which statement about what prompting can and cannot do is most accurate?

- A. Prompting can steer a model's style, structure, and effort, but it cannot guarantee that the model's facts are accurate.
- B. A well-written prompt ensures the model never produces false information.
- C. Prompting adds new knowledge to a model that it did not learn during training.
- D. If a model gives a wrong answer, rewriting the prompt always corrects the underlying error.

**Key: A.** Models generate what is most likely given their training data rather than checking facts, so prompting cannot add knowledge or eliminate hallucinations; providers recommend external grounding such as search to mitigate fabricated answers. The other options overstate what wording can accomplish.

## Sources

- OpenAI — "Prompt engineering". https://platform.openai.com/docs/guides/prompt-engineering
- Anthropic — "Prompting best practices". https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Google — "Prompt design strategies" (Gemini API documentation). https://ai.google.dev/gemini-api/docs/prompting-intro
- Microsoft Learn — "Prompt engineering techniques". https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering

## Related Topics

- Large Language Models (data-science-and-ai-literacy:foundations:large-language-models)
- Hallucinations (data-science-and-ai-literacy:foundations:hallucinations)
- Evaluating AI Output (data-science-and-ai-literacy:foundations:evaluating-ai-output)
- Generative AI (data-science-and-ai-literacy:foundations:generative-ai)

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:prompting-basics
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only provider documentation; no source prose adapted; all examples original
