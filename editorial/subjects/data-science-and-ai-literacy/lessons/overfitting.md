# Overfitting

## In 30 Seconds

Overfitting is when a machine-learning model fits its training data extremely well but fails on new data. The model has memorized the examples it was shown instead of learning the general pattern behind them. It happens when a model is too flexible or trains too long, absorbing noise along with the real signal. The telltale sign is excellent performance on training data and poor performance on data the model has never seen. Prevention centers on more clean data, simpler models, and checking on held-out data.

## Why This Matters

Overfitting explains why a model that scores brilliantly in the lab can embarrass itself in the real world, and it is one of the first places a data-science education meets that gap. Understanding it changes how you read performance claims: a great score on training data proves only that the model memorized well, not that it learned. Academically, overfitting is where the abstract idea of a model becomes concrete, why more data can help and why simpler can beat fancier. Practically, teams that ignore it ship systems that fail on new customers, new photos, and new conditions. And because overfitting is a failure of learning, not of effort, recognizing it is the first step toward fixing it.

## Learning Objectives

- Define overfitting as a model that fits its training data extremely well but fails on new data.
- Explain the difference between memorizing training examples and learning a general pattern.
- Identify why overfitting happens: a model that is too flexible or trains too long can absorb noise.
- Recognize the telltale sign of overfitting: strong training performance paired with weaker performance on new data.
- Apply prevention strategies: more clean data, simpler models, and checking on held-out data.
- Contrast overfitting with underfitting as the two failure modes of model training.

## The College Version

### What overfitting is

Overfitting is what happens when a machine-learning model fits its training data extremely well and yet fails on new data. The model has learned the examples it was shown almost perfectly, but it has not learned a pattern that transfers. IBM defines overfitting as a model that fits too closely, or even exactly, to its training data, so that it cannot make accurate predictions on any data other than that training data. The point of training is never to reproduce the past examples; it is to generalize, which IBM describes as the fundamental goal of machine learning: strong performance on training data translated into useful results on real-world cases. A model that only repeats its training data has missed the point entirely.

### The student who memorized the practice exam

Imagine a student preparing for a final exam. The instructor hands out a practice set of forty questions with answers, and the student memorizes every one of them word for word. On the practice set, the student scores perfectly. On the actual exam, the questions are new: same topics, different wording, different numbers. The student freezes and fails. The problem was never effort; the student studied extremely hard. The problem was what got memorized. Repeating the exact practice answers is not the same as learning the underlying ideas, and a machine-learning model can make the same mistake. It can study its training examples so thoroughly that it becomes an expert at those exact examples and a stranger to everything else. When a model memorizes the training set instead of the pattern behind it, that is overfitting.

### Why overfitting happens

Overfitting tends to happen when the model is more flexible than the data can support. IBM puts it simply: when a model trains for too long on sample data, or when the model is too complex, it can start to learn the noise, the irrelevant details, within the dataset. Think of noise as the accidental fingerprints on the data: which day a photo was taken, the background color of an image, a typo in a listing. A flexible model has room to store all of these accidents as if they were meaningful rules. With enough flexibility and enough training time, the model can memorize every example, including its accidents, and still appear to perform brilliantly on the training data. The very flexibility that lets a model capture real patterns is what lets it capture fake ones too.

### Spotting it and preventing it

The telltale pattern of overfitting is a large gap between training performance and test performance: the model looks great on the data it learned from and noticeably worse on data it has never seen. That is why teams set aside a portion of their data as a test set, data the model never trains on, and check the model against it; IBM describes this held-out test set as the standard way to check for overfitting. How the testing process works in detail belongs to the topic Training versus Testing; the point here is that checking on new data is how overfitting is caught. To prevent it, the general strategies are straightforward: train with more clean and relevant data, use a simpler model that cannot store every accident, stop training before the model starts absorbing noise, and always verify on held-out data. IBM lists these approaches, early stopping, more data, feature selection, and regularization, as the standard toolkit.

### Overfitting versus underfitting

Overfitting is one of two ways a model can fail. The other is underfitting. An underfitted model has not learned enough: it never captured the dominant trend in the training data, so it performs poorly even on the examples it was given, and it also generalizes poorly to new data. An overfitted model has learned too much of the wrong thing: it memorized the training data so closely that it cannot handle new data. IBM frames the two as the bias-variance tradeoff, roughly, an underfitted model is too rigid and misses the pattern, while an overfitted model is too twitchy and chases every detail, and the goal of training is the sweet spot in between, where the model captures the real pattern without memorizing the accidents. Neither extreme is acceptable; both fail on new data, which is the only performance that matters.

## Key Vocabulary

- **overfitting** — A failure mode in which a model matches its training examples so closely that it performs poorly on new data.
- **underfitting** — A failure mode in which a model has not learned enough of the underlying pattern, so it performs poorly even on training data.
- **generalization** — A model's ability to perform well on data it has never seen, not just on the examples it was trained on.
- **training data** — The set of examples a model learns from during training; a model can fit this data without truly learning the pattern.
- **test data** — Examples a model has never trained on, used to check whether it learned a general pattern rather than memorized.
- **noise** — Irrelevant details in data, such as accidents and one-off quirks, that a flexible model may mistake for real patterns.
- **model complexity** — How flexible a model is, or how much room it has to store details; more flexibility means more chance of memorization.
- **early stopping** — Ending training before the model starts absorbing noise, so it keeps the general pattern and skips the accidents.

## Eli-10

Overfitting is a model that studied the answers to the practice questions so hard that it cannot answer the real exam. During training, the model is shown examples and adjusts itself until it handles them well. If it is flexible enough and trains long enough, it can eventually handle the training examples perfectly, by memorizing them. That looks like success, because the score on training data is excellent. But when new examples arrive, the memorized details do not transfer, and performance collapses. The model memorized the training set instead of learning the general pattern. Teams catch this by testing the model on data it never saw during training: a big gap between training performance and new-data performance is the fingerprint of overfitting.

## Eli's Analogy

A cook learns to make one specific lasagna by watching a single video and reproducing it exactly: same pan, same brand of noodles, same oven setting, same tray position. Reproduce that one dish, and it is perfect. Change anything, a different pan, a thicker noodle, a fancier oven, and the cook is lost, because what was memorized was the video, not how lasagna works. A model that overfits is that cook. It mastered its exact training examples and cannot handle the variations real life presents. A cook who learned how ingredients and heat interact could handle any kitchen; a model that learned the general pattern can handle any similar data.

The analogy breaks down because a cook can taste, reason, and improvise, while a model has no understanding, it only matches patterns in numbers. A memorizing cook is also an extreme case; real models sit on a spectrum, and a little memorization mixed with a real pattern is common. Still, the core contrast holds: reproducing examples exactly is not the same as learning.

## Worked Example

Northline Transit runs a bike-share fleet and wants a model that predicts how many bikes will be rented tomorrow at each station. The team trains a model on three years of daily rental records. On the training records, the model is nearly perfect. Then they check it against a year of records the model never saw, and the error is much larger. Looking closer, the model learned quirks from the training years: it treats the exact combination of a Wednesday, a music festival weekend, and a specific construction detour as a repeatable rule, even though that combination never recurs. The model memorized the training records instead of learning how weather, day of week, and events affect rentals. The fix is a simpler model trained on more varied, cleaner data, checked against held-out records, so it learns the pattern without storing the accidents.

## Common Mistakes

- **Assuming a perfect score on training data means the model is excellent.** That score only proves the model matched its training examples. The real question is performance on data the model has never seen; a large gap between the two is the classic sign of overfitting.
- **Believing more data always fixes overfitting.** IBM notes that more data helps mainly when it is clean and relevant; adding noisy or irrelevant data can simply give the model more details to memorize.
- **Treating overfitting and underfitting as the same problem.** They are opposite failures. Underfitting means the model learned too little of the pattern; overfitting means it memorized the training data too closely. Both hurt performance on new data, but the fixes differ.
- **Skipping the held-out test set because training performance looks great.** The test set is precisely how overfitting is detected. Without data the model never trained on, there is no way to tell memorization from learning.

## Compare / Contrast

- **Overfitting vs. Underfitting** — Both fail on new data, but for opposite reasons: an overfitted model memorized the training examples too closely, while an underfitted model never learned the underlying pattern well enough.
- **Memorizing training examples vs. Learning a general pattern** — Memorizing reproduces the exact examples seen; learning extracts a pattern that transfers to new examples. Overfitting is memorization dressed up as learning.
- **Training performance vs. Test performance** — Training performance measures how well the model matched its examples; test performance measures how well it generalizes. Overfitting is a large gap between them. The testing process itself belongs to the Training versus Testing topic.

## Key Takeaway

Overfitting is a model that fits its training data extremely well but fails on new data, because it memorized examples instead of learning the general pattern. Catching it means checking performance on held-out data; avoiding it means more clean data, simpler models, and the sweet spot between underfitting and memorization.

## Practice Question Bank

**Q1.** What is overfitting in machine learning?

- A. A model that performs poorly on the data it was trained on.
- B. A model that never learns from its training examples.
- C. A model that fits its training data extremely well but fails to make accurate predictions on new data.
- D. A model that requires more training data than a computer can store.

**Key: C.** IBM defines overfitting as a model that fits too closely, or even exactly, to its training data, so it cannot make accurate predictions on any data other than that training data. Options A and B describe an underfitted model, and D confuses storage limits with the definition.

**Q2.** A student memorizes forty practice exam questions word for word, scores perfectly on the practice set, and then fails a real exam with new questions on the same topics. Which machine-learning concept does this student illustrate?

- A. Underfitting, because the student learned too little.
- B. Generalization, because the student can apply the pattern broadly.
- C. A sign that the student is learning the general pattern.
- D. Overfitting, because the student memorized the practice set instead of learning the general pattern.

**Key: D.** The student mastered the exact practice examples but could not transfer that to new questions, which mirrors IBM's description of overfitting: fitting the training set so closely that the model cannot handle other data. The student learned too much of the wrong thing, not too little.

**Q3.** A team trains a model that scores 99 percent on its training data but only 62 percent on data it has never seen. What is most likely happening?

- A. The model is overfitting: it memorized the training examples rather than learning a general pattern.
- B. The model is underfitting: it never learned the training examples.
- C. The test data is definitely wrong, since the model is clearly excellent.
- D. The model is working exactly as intended.

**Key: A.** A large gap between training performance and new-data performance is the classic fingerprint of overfitting, which IBM describes as low error on the training data paired with high error on the test data. Underfitting would show poor training performance too, and there is no basis for blaming the test data.

**Q4.** Which strategy is the most reasonable first step toward reducing overfitting?

- A. Train the model on the same examples for twice as long.
- B. Gather more clean, relevant examples and use a simpler model.
- C. Remove the held-out test set so the results look better.
- D. Add more detailed features so the model captures every quirk.

**Key: B.** IBM lists more clean, relevant data, simpler models, and early stopping as standard ways to avoid overfitting; training longer on the same data and adding complexity push the model further into memorization, and removing the test set only hides the problem.

**Q5.** How do overfitting and underfitting differ?

- A. Overfitting means learning too little; underfitting means memorizing too much.
- B. They are two names for the same problem.
- C. Underfitting is harmless, while overfitting is a serious failure.
- D. Overfitting memorizes the training data too closely, while underfitting learns too little of the underlying pattern; both hurt performance on new data.

**Key: D.** IBM contrasts the two: an overfitted model fits the training data too closely and cannot generalize, while an underfitted model never captured the dominant trend and also generalizes poorly. Option A reverses them, and neither extreme is harmless.

## Sources

- IBM — "What is Overfitting?". https://www.ibm.com/topics/overfitting
- IBM — "What is Machine Learning?". https://www.ibm.com/topics/machine-learning
- National Institute of Standards and Technology — "AI Risk Management Framework (AI RMF)". https://www.nist.gov/itl/ai-risk-management-framework

## Related Topics

- Training versus Testing (data-science-and-ai-literacy:foundations:training-versus-testing)
- Models (data-science-and-ai-literacy:foundations:models)
- Training Data (data-science-and-ai-literacy:foundations:training-data)
- Machine Learning Basics (data-science-and-ai-literacy:foundations:machine-learning-basics)
- Supervised Learning (data-science-and-ai-literacy:foundations:supervised-learning)

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:overfitting
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Researched: 2026-08-21
- Rights: reference-only sources; no source prose adapted
