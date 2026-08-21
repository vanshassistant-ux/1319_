# Features and Labels

## In 30 Seconds

Features are the measurable properties a machine learning model looks at, and labels are the known answers attached to each example. In a house-price model, the features are size, number of rooms, and location; the label is the price the house sold for. Each training example couples its features with its label, and that pair is the fundamental unit the model learns from. Useful, relevant, honest features help; misleading or missing features hurt. People choose which features to measure, and labels exist only in supervised learning.

## Why This Matters

Features and labels are the raw material of every supervised machine learning system, so understanding them is the difference between asking smart questions about an AI and being puzzled by it. When a model disappoints, the first suspects are usually bad features, wrong labels, or a mismatch between the two. Practically, this knowledge helps you judge claims like "the model predicts house prices" by checking what it actually looks at and what it was taught. Academically, it is the foundation for supervised learning, training data, models, and evaluation. Choosing features well is a human design skill you can practice without any math.

## Learning Objectives

- Define features as the measurable properties a model uses as inputs, with a house-price model as the reference example.
- Define labels as the known answer attached to each example, such as the price in a house-price model.
- Explain the feature-label pair as the fundamental unit of a supervised training example.
- Apply the feature-label distinction to new scenarios, identifying which facts are features and which is the label.
- Analyze how misleading, irrelevant, or missing features can hurt what a model learns.
- Distinguish supervised learning, where labels exist, from unsupervised learning, where they do not.

## The College Version

### What features are

Features are the measurable properties of an example that a model looks at to make its prediction. They are the inputs, the facts a case brings with it. For a house-price model, the features are the size of the house, the number of rooms, and the location; each is something you can observe and record. IBM's explainer puts it directly: a feature, also called a dimension, is an input variable used to generate model predictions. A house does not come pre-packaged as "size, rooms, location"; a person has to decide that those three properties are the ones worth recording, and then measure them for every house. That measuring is what turns a real-world object into a row of numbers a model can read. The word "feature" can sound like a decoration, but in machine learning it means the opposite: the essential raw material the model is built from.

### What labels are

A label is the known answer attached to one example. In the house-price model, the label is the price the house actually sold for. The label is what someone already knows and wants the model to learn to produce: a price like the ones in its training history. Google Cloud's supervised learning explainer describes the setup in exactly these terms, features as the inputs and labels as the correct outputs, and IBM adds that a labeled dataset is a set of data points together with their correct outputs, sometimes called ground truth. Labels come from the real world and from human effort: a sale is recorded, a technician verifies a reading, a reviewer marks an email as spam. The label is the standard the model is measured against, so a wrong label teaches a wrong lesson.

### The feature-label pair

The fundamental unit of supervised machine learning is not a feature by itself or a label by itself; it is the pair. Each training example couples its features with its label: the size, rooms, and location of one particular house together with the price that same house sold for. Microsoft Learn defines supervised training data exactly this way: records that include both feature values and known label values, used so the model can learn to predict unknown labels for future cases. The pairing is what makes learning possible. If a model only saw features, it would have no idea what it was supposed to produce; if it only saw prices, it would not know which house each price belonged to. It is the connection between the two, repeated across thousands of examples, that lets the model find the pattern linking inputs to answers. One example with a mismatched pair, a price attached to the wrong house, is worse than no example at all.

### Feature quality: useful, relevant, and honest

Features are only useful if they are relevant, consistent, and honest. A relevant feature carries information that actually connects to the label: for house prices, size and location qualify, while the color of the front door usually does not. A consistent feature means the same thing every time it is measured; a "renovated" flag that means "full remodel" for one seller and "new kitchen" for another is not measuring one thing. An honest feature records what actually happened rather than what someone hoped. Machine learning quality starts with data quality: Microsoft's ML for Beginners curriculum states plainly that high-quality data improves model performance while poor or noisy data leads to inaccurate predictions, and Google Cloud's machine learning explainer warns that a system is often only as good as the data it is fed. A misleading feature teaches a distorted pattern, and a missing feature leaves the model blind to something that matters. No algorithm can compensate for features that were wrong before training began.

### Choosing features is human work

Nobody hands a model its features; people decide what to measure. Feature engineering, the craft of selecting and preparing the input variables, is exactly this human step, and IBM describes it as choosing the most relevant aspects of raw data for the task at hand, work that is context-dependent and demands domain knowledge. Two teams building price models for the same city can choose different features, one measuring distance to the nearest train station, another measuring school ratings, and each choice shapes what the model can possibly learn. This is design judgment, not computation: the same algorithm learns different things from different feature sets, and no amount of clever training can recover information that was never recorded. Data scientists spend a large share of their time on exactly this preparation work. When you hear about a model, the most informative question is often not which algorithm was used but which features were chosen, and by whom.

### Labels exist only in supervised learning

The one-sentence boundary between supervised and unsupervised learning is about labels. Supervised learning trains on examples that carry known answers, so labels are essential to it. Unsupervised learning works with unlabeled data, data with no correct answers attached, and finds structure on its own; Google Cloud's explainer defines it precisely that way, learning from data without labels. The consequence is that the word "label" only has a home in supervised settings. When a dataset has no answers, there is no label to predict, so questions like "what is the label?" do not apply, and the appropriate approach is unsupervised. The full mechanics of both approaches belong to their own lessons; here it matters because it tells you which half of this topic is even in play for a given dataset.

## Key Vocabulary

- **feature** — A measurable property of an example that a model uses as an input, such as a house's size, number of rooms, or location.
- **label** — The known answer attached to an example, such as the price a house sold for, which a supervised model learns to predict.
- **feature-label pair** — A training example that couples the features of one case with its known label, the fundamental unit supervised models learn from.
- **training example** — A single record in a dataset, consisting of its features and, in supervised learning, its label.
- **ground truth** — The verified correct answer used as a label, the standard against which a model's learning is measured.
- **feature engineering** — The human craft of choosing and preparing the input variables a model will use, shaped by domain knowledge.
- **relevant feature** — A measurable input whose values carry information connected to the label, such as location for house prices.
- **supervised learning** — Machine learning that trains on examples with known answers, so labels are always present.
- **unsupervised learning** — Machine learning that finds patterns in data with no correct answers attached, so labels are absent.

## Eli-10

Features are what a model looks at, and labels are the answers it is supposed to learn. Take a house-price model: the size, the number of rooms, and the location are the features, and the price the house sold for is the label. Every example the model trains on is a pair, features and label joined together, and that pair is the smallest unit of learning. If the features are irrelevant, dishonest, or missing, the model learns a twisted picture of the world; if the label is wrong, it learns the wrong answer. Choosing which features to measure is a human decision made before any training happens. And labels only exist where someone wrote answers down, which is what supervised learning means.

## Eli's Analogy

Picture a small restaurant that keeps a card for every dish it has ever served. Each card lists the ingredients and the cooking method, the features, and on the back is the price the dish sold for, the label. A new dish arrives with only the front of the card filled in: the chef must write the price on the back. To do that well, the chef studies the stack of old cards, noticing that dishes with expensive ingredients or long cooking times tend to carry higher prices. The front of each card is useless without the back, and the back means nothing without a front; only the paired card teaches anything.

The restaurant analogy makes feature choice look like common sense, but a chef understands why ingredients matter, through taste, cost, and craft, while a model only sees the numbers and can be fooled by irrelevant patterns, such as prices drifting with the day of the week. A chef can also improvise when an ingredient is missing, whereas a model usually cannot learn from a feature that was never recorded. Finally, a chef can taste the dish to check the price, but a model cannot test reality; it only knows what its features and labels told it.

## Worked Example

Riverside Apartments manages forty rental buildings and wants a model that estimates a fair monthly rent for any new unit. The team records three facts about each past rental: the square footage, the number of bedrooms, and the walking distance to the nearest train station. Those three measurements are the features. The label is the rent the unit actually rented for, taken from the signed lease. Each past unit becomes one feature-label pair, and the team feeds hundreds of pairs to the model, which learns how each feature relates to rent: bigger units and shorter walks command more. When a new unit is listed with its features but no rent yet, the model predicts a figure, say $1,850. The estimate is a starting point for pricing, not a verdict, and it is only as good as the recorded features, which is why the team double-checks every square footage figure before training.

## Common Mistakes

- **Thinking the price is a feature of the house.** The price is the label, the answer the model learns to predict. Features are the inputs, the measurable properties like size, rooms, and location. Ask: is this something the model looks at, or something it is supposed to produce?
- **Assuming a model picks its own features, and that more features are always better.** People choose what to measure, and extra irrelevant features, like the house's street number or the seller's favorite color, add noise rather than insight. A model can only work with the features it is given.
- **Believing a model can learn around missing or dishonest features.** If a feature is blank for many examples or records something other than what it claims, the model learns a distorted pattern. Missing or misleading features are a data problem no algorithm fixes by itself.
- **Expecting labels in every machine learning setting.** Labels exist only where known answers were recorded, which is supervised learning. Unsupervised learning works with unlabeled data and has no labels to predict.

## Compare / Contrast

- **Feature vs. Label** — A feature is an input the model looks at, such as a house's size; the label is the known answer the model learns to predict, such as the price. One is raw material, the other is the target.
- **Supervised learning vs. Unsupervised learning** — Supervised learning trains on examples with known answers, so labels exist; unsupervised learning finds patterns in unlabeled data, so labels are absent. The presence of labels is the whole boundary.
- **Relevant feature vs. Irrelevant feature** — A relevant feature's values carry information tied to the label, like location for house prices; an irrelevant feature, like the front-door color, adds noise and can mislead the pattern the model learns.
- **Choosing features vs. Training the model** — Choosing features is human design work done before training, deciding what the model can possibly see; training is the machine's step of finding patterns in the features and labels it was given.

## Key Takeaway

Features are what a model looks at and labels are the known answers, and each training example couples the two into the fundamental unit of supervised learning. Because people choose which features to measure, feature quality and feature choice set the ceiling on what any model can learn.

## Practice Question Bank

**Q1.** In a house-price model, which items are the features?

- A. The size, number of rooms, and location of each house.
- B. The final selling price of each house.
- C. The names of the buyers who purchased each house.
- D. The number of sales the model has completed.

**Key: A.** Features are the measurable properties the model looks at as inputs, so size, rooms, and location qualify. The selling price is the label, the answer the model learns to predict; buyer names are not recorded as model inputs; and a model completes no sales of its own.

**Q2.** In a house-price model trained on past sales, what is the label of a training example?

- A. The street address of the house.
- B. The number of bathrooms.
- C. The price the house actually sold for.
- D. The commission paid to the listing agent.

**Key: C.** The label is the known answer for the example, and in a house-price model that is the sold price. The address identifies the example, bathrooms are a feature, and the agent's commission is not what the model is trained to predict.

**Q3.** A team building a model that predicts monthly rent for apartments records square footage, number of bedrooms, floor level, and the unit's door number as candidate features. Which candidate is least likely to help the model?

- A. Square footage, because rent depends on the building, not the unit.
- B. Number of bedrooms, because all units in a building are identical.
- C. Floor level, because it never affects what renters pay.
- D. Door number, because it is an arbitrary identifier with no known link to rent.

**Key: D.** Door numbers are arbitrary labels assigned to units, so they carry no information about rent, which makes them the weakest candidate. Square footage and bedroom count are standard drivers of rent, and floor level plausibly matters, so the statements dismissing them are wrong.

**Q4.** A rental-price model includes a "renovated" feature, but some landlords mark a unit renovated when only the kitchen was updated, and the field is left blank for many older units. What is the most likely effect on the model?

- A. The model ignores the feature and learns from the remaining ones.
- B. The model learns a distorted pattern because the feature is inconsistent and incomplete.
- C. The model automatically fills in the missing values during training.
- D. The model performs perfectly because one imperfect feature cannot matter.

**Key: B.** An inconsistent feature, one that means different things for different examples, and a feature missing for many examples both mislead training, and the model cannot tell which values are reliable. Models do not repair or ignore bad features on their own, and one bad feature can be enough to distort the learned pattern.

**Q5.** A researcher has a dataset of customer survey responses with no correct answers attached. Which statement about labels is correct?

- A. Labels do not exist in this dataset, so it can only support unsupervised learning.
- B. The model will invent the missing labels during training.
- C. The dataset can still train a supervised model because surveys always contain labels.
- D. Labels are optional in supervised learning, so the dataset works either way.

**Key: A.** Labels are the known answers recorded for examples, and this dataset has none, so supervised learning, which depends on labels, cannot be used; the data belongs to unsupervised learning. Models do not invent labels, surveys do not always carry answers, and labels are essential, not optional, in supervised learning.

## Sources

- Microsoft Learn, "Introduction to Machine Learning Concepts" (fundamentals-machine-learning, including its types-of-machine-learning and regression units) — https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/ (read live 2026-08-21)
- Google Cloud, "What is supervised learning?" — https://cloud.google.com/discover/what-is-supervised-learning (read live 2026-08-21)
- Google Cloud, "What is unsupervised learning?" — https://cloud.google.com/discover/what-is-unsupervised-learning (read live 2026-08-21)
- IBM, "What is supervised learning?" — https://www.ibm.com/think/topics/supervised-learning (read live 2026-08-21)
- IBM, "What is unsupervised learning?" — https://www.ibm.com/think/topics/unsupervised-learning (read live 2026-08-21)
- Google Cloud, "What is Machine Learning? Types and uses" — https://cloud.google.com/learn/what-is-machine-learning (read live 2026-08-21)
- Microsoft Learn (GitHub curriculum), "ML for Beginners — Introduction to machine learning" — https://github.com/microsoft/ML-For-Beginners/tree/main/1-Introduction/1-intro-to-ML (read 2026-08-21)
- IBM, "What is feature engineering?" — https://www.ibm.com/think/topics/feature-engineering (read live 2026-08-21)

All sources were used for verification only (REFERENCE_ONLY); the lesson's prose and examples are original.

## Related Topics

- data-science-and-ai-literacy:foundations:supervised-learning
- data-science-and-ai-literacy:foundations:unsupervised-learning
- data-science-and-ai-literacy:foundations:training-data
- data-science-and-ai-literacy:foundations:machine-learning-basics
- data-science-and-ai-literacy:foundations:models

## Editorial Metadata

- Topic ID: data-science-and-ai-literacy:foundations:features-and-labels
- Subject: data-science-and-ai-literacy (unit: foundations)
- Editorial status: READY_TO_PUBLISH
- Researched: 2026-08-21 (sources read live: Microsoft Learn, Google Cloud, IBM)
- Rights: reference-only vendor documentation; no source prose adapted
- Provenance: EliExplains original synthesis, source-verified
