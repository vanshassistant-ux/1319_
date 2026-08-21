# Training Versus Testing

## In 30 Seconds

Machine learning models learn from one set of examples, the training data, and are judged on a separate set, the test data. Before training begins, teams set aside part of the dataset and keep it out of sight. A model checked on its own training data looks better than it is, because it may have memorized instead of learning. Test results only mean something on data the model never saw.

## Why This Matters

Every claim about a model's quality rests on the split between training and testing. Academically, the idea is the doorway to understanding overfitting, generalization, and model evaluation, the topics that come next in this course. Practically, it is the question to ask whenever someone quotes an impressive accuracy number: was the model tested on data it had never seen? If not, the number says more about memory than about skill. Forward-looking, the honesty principle here, results only count on unseen data, is the same standard used to judge AI systems in the wild.

## Learning Objectives

- Define training data and test data, and explain how one dataset is split into the two before training.
- Explain why a model must be checked on data it never saw during training.
- Distinguish memorizing examples from learning a pattern, using the practice-exam intuition.
- Apply the practice of setting aside data before training and leaving the test set unused until the end.
- Interpret a large gap between training performance and test performance as a warning sign.

## The College Version

### Two sets from one dataset

Every machine learning project starts with a dataset, a collection of examples: past sales, photos, emails, sensor readings. Before any training happens, that dataset is divided into two parts. The training data is the part the model studies: it reads these examples, finds patterns in them, and builds its rules from them. The test data is the part that is set aside and kept out of sight. The model never sees it during training. Only after training finishes does the test data come out, and its only job is to check the model. Teams usually assign examples to the two sets at random, so both sets look like fair samples of the same collection, and they decide the split up front, before training begins. The test portion stays locked away until the end; the training portion is the only part the model is allowed to touch while it learns.

### Why the test set must be unseen

The reason for the split is the difference between memorizing and learning. Consider two students preparing for a math final. Amara memorizes the practice exam: every question and every answer, front to back. Ben studies the ideas, how to set up an equation, when to apply a formula, and tries the practice exam once to check himself. On the practice exam itself, Amara scores perfectly, because she has seen those exact questions. On the final, which contains new questions, Ben does well while Amara struggles: her memory does not transfer to problems she has never seen. A machine learning model can behave exactly like Amara. A model tested on its training data has already seen every answer, so it can look far better than it really is. Scoring a model on the examples it trained on does not tell you whether it learned; it tells you whether it remembered.

### The general practice: hold out, then check once

Because of this, the general practice is simple to state. Set aside part of the data before training starts, and do not touch it while the model is being built. Train the model on the training data. When training is done, run the model on the test data once, and report how it did. The rule that keeps the test honest: never tune the model based on test results. If a team runs the test, sees a weakness, adjusts the model, and tests again, the test set gradually stops being a fair judge, because the model starts fitting the test set the way a student can be coached to the test. Google's machine learning course makes the same point directly: the more often you use the same test set, the more closely the model fits it. Careful teams therefore keep the test set for the final check and use other data while they are still making changes.

### What the results mean, and what they do not

Two simple measures cover most evaluation talk. Accuracy is how often the model's predictions were right, usually a percentage of all predictions; errors are the mistakes, the predictions that missed. A single number on its own means little. The honest comparison is training performance against test performance. A model that scores about as well on the test set as on the training data has learned a pattern that carries to new cases. A model that scores far higher on the training data than on the test set has mostly memorized: it reproduced its training examples and failed to generalize. That failure mode has a name, overfitting, and it gets its own lesson in this course; IBM's explainer describes it as a model that fits its training data so closely it cannot predict well on anything else. The honesty principle ties it together: test results only mean something on data the model never saw, so any claim about a model's quality is only as strong as the unseen data behind it.

### Accuracy is not the whole story

Accuracy sounds simple, but one number can mislead. Google's machine learning course notes that when one category dominates a dataset, a model can reach a high accuracy by mostly predicting the common category, while still being weak where it matters. An email filter trained on a folder that is 90 percent spam could be 90 percent accurate by calling everything spam, and yet be useless: it would bury every genuine message. That is why the test run is reported with errors, not just accuracy, and why the exact mix of the test data matters when reading a result. Full evaluation methods, precision, recall, and the rest, belong to the evaluating AI output lesson. Here the point is the standard: ask what the model was tested on before believing any number it produced.

## Key Vocabulary

- **training data** — The part of a dataset a machine learning model studies during training, from which it learns its patterns.
- **test data** — The part of a dataset set aside before training and used afterward to check the model on cases it never saw.
- **data split** — The act of dividing one dataset into separate parts, such as a training part and a test part, before training begins.
- **unseen data** — Examples a model never encountered during training; the only fair material for judging what it learned.
- **accuracy** — How often a model's predictions are correct, usually reported as a percentage of all its predictions.
- **error** — A prediction that missed the correct answer; the flip side of accuracy in an evaluation.
- **generalization** — A model's ability to apply what it learned to new cases it did not train on.

## Eli-10

A model learns from one pile of examples and is judged on a different pile it has never seen. The first pile is the training data: the model studies it and builds its rules. The second pile is the test data: after training, the model is asked to handle these fresh examples, and that score is the honest one. If you judge a model on the very examples it trained on, you cannot tell memorizing from learning, because it already knows those answers. So teams split the dataset up front, train on one part, and check on the other. A big gap between the two scores means the model remembered its training examples instead of learning a pattern that carries to new cases.

## Eli's Analogy

A chef who cooks a meal and then judges it himself will always love it: he knows every ingredient, every substitution, every mistake he made along the way. The test set is the diner who orders the finished dish without knowing what went into it. The diner's verdict is the one that counts, because the dish has to please people who were not in the kitchen. The model's training score is the chef's self-review; the test score is the diner's review.

The analogy breaks down because a diner can have an off night, and so can a test set: a small or unrepresentative test set gives a misleading verdict even though it is unseen. And unlike a diner, a test set wears out if it is reused too often; the chef can learn what the diner likes and cook to it, which is why the test set is used once, at the end.

## Worked Example

Corner Table Cafe keeps two years of records on 300 past menu items: ingredients, price, season, and whether each item sold well. The owner wants a model that predicts, for a new dish idea, whether it will sell. Before any training, the team randomly splits the records: 240 items become the training data, and 60 items are set aside as the test data. Nobody looks at those 60 records while the model is built. The model learns from the 240 training items and scores 94 percent correct on them. Then the team runs it on the 60 held-out items, and it scores 78 percent. That gap is the story: the model caught the general patterns, price range and seasonal dishes matter, but it also leaned on quirks of the training items. The 78 percent figure is the honest one. If the owner wants a better model, the team must change their approach without consulting the test set again.

## Common Mistakes

- **Checking the model on the same data it trained on.** The model has already seen those answers, so the score looks better than reality. A fair check uses data the model never saw; that is the whole point of the test set.
- **Adjusting the model after every test run.** Every adjustment based on test results wears the test set down; the model gradually fits the test set instead of the real world. Test once, at the end, and judge the result.
- **Believing a high training score means a great model.** Training scores can be inflated by memorization. Compare the training score with the test score; a large gap is a warning, not a triumph.
- **Treating accuracy as the whole story.** One accuracy number can mislead, especially when one category dominates the data. Look at the errors and at what the test data actually contains before trusting a number.

## Compare / Contrast

- **Training data vs. Test data** — Training data is what the model learns from and is allowed to see; test data is set aside before training and used only afterward to check the model on cases it never saw.
- **Memorizing vs. Learning** — Memorizing repeats examples the model has already seen; learning finds a pattern that carries to new cases, which is why only unseen data can tell the two apart.
- **Score on training data vs. Score on test data** — The training score is inflated by familiarity with the examples; the test score is the honest reading of how the model handles new cases.
- **Accuracy vs. Errors** — Accuracy counts how often the model was right; errors are the mistakes themselves. Both come from the same test run, and both belong in any honest report.

## Key Takeaway

Models must be tested on data they never saw. Split the dataset before training, train on one part, and check the model once on the held-out part; a model tested on its training data looks better than it is.

## Practice Question Bank

**Q1.** In a machine learning project, what is the test set?

- A. The portion of the data set aside before training and used to check the trained model on cases it never saw.
- B. The portion of the data the model learns from during training.
- C. The labels that a human expert writes for each example.
- D. The raw data collected from sensors before any cleaning.

**Key: A.** The test set is held out before training and used only afterward, so the model is checked on cases it never saw. The portion the model learns from is the training set, labels are written by people before training, and raw sensor data is just the starting material.

**Q2.** A student trains a model on 200 photos of flowers, then reports that the model is "99% accurate" because it correctly identified those same 200 photos. Why is that number misleading?

- A. Because accuracy can only be measured on numbers, not on photos.
- B. Because a model needs at least 1,000 photos before it can be tested.
- C. Because the model was checked on the very examples it trained on, so it may have memorized them.
- D. Because photos cannot be used to evaluate a model at all.

**Key: C.** Checking the model on its own training photos inflates the score, because the model has already seen every answer and may have memorized them. Accuracy works fine on photos, there is no magic minimum number, and photos are a perfectly normal thing to test a model on.

**Q3.** Why do teams set aside part of their data before training begins?

- A. To make the dataset smaller so training runs faster.
- B. To keep a portion unseen so the model can later be checked on data it never trained on.
- C. To remove the examples that are too hard for the model.
- D. To give the test examples to the model during training.

**Key: B.** The set-aside portion is the test set: keeping it unseen during training is what makes the later check meaningful. Speeding up training is not the goal, removing hard examples would hide weaknesses, and feeding test examples to the model would defeat the whole purpose.

**Q4.** A team evaluates their model on the test set, changes the model based on what they see, and repeats this many times before shipping. What is the problem with this approach?

- A. There is no problem; testing often is always a good thing.
- B. The team should only test the model after it has been shipped.
- C. Testing too many times violates data privacy rules.
- D. The model can gradually fit the test set, like a student coached to the test, so the final result overstates real-world performance.

**Key: D.** Every round of tuning on test results teaches the model about the test set, so the set wears out and stops being a fair judge; the final score then flatters the model. Testing often is not bad, testing after shipping is too late to help, and privacy rules have nothing to do with it.

**Q5.** A model scores 97% on its training data but only 72% on the test set. What does this gap most likely mean?

- A. The model memorized much of the training data and did not learn a pattern that carries to new cases.
- B. The gap is caused by random chance and never indicates a problem.
- C. The model memorized the test set instead of the training set.
- D. The training data was too small for the model to learn anything at all.

**Key: A.** A large gap between high training performance and lower test performance signals memorization rather than generalization: the model reproduced its training examples but fails on new ones, the pattern IBM describes as overfitting. Random chance rarely explains a wide, consistent gap, a model cannot memorize a test set it never saw, and small training data is a different issue.

## Sources

- Google for Developers — Machine Learning Crash Course: "Datasets: Dividing the original dataset" (https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets)
- Google for Developers — Machine Learning Crash Course: "Classification: Accuracy, precision, recall" (https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall)
- IBM — "What is Overfitting?" (https://www.ibm.com/topics/overfitting)
- Microsoft Learn — "Split Data: Component reference - Azure Machine Learning" (https://learn.microsoft.com/en-us/azure/machine-learning/component-reference/split-data)
- Google Cloud — "What is Machine Learning? Types and uses" (https://cloud.google.com/learn/what-is-machine-learning)
- Microsoft Learn — "Introduction to Machine Learning Concepts" (https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/)

All sources were read live on 2026-08-21 and used as reference only; the lesson prose is original.

## Related Topics

- machine-learning-basics
- supervised-learning
- training-data
- overfitting
- evaluating-ai-output

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:training-versus-testing
- Editorial status: READY_TO_PUBLISH
- Research status: source-verified
- Rights status: reference-only vendor documentation (Google Cloud, Google for Developers, IBM, Microsoft Learn); no source prose adapted — all lesson prose is original
- Researched: 2026-08-21
