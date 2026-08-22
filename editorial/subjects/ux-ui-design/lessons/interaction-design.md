# Interaction Design

## In 30 Seconds

Interaction design is designing how people interact with a product: the responses to their actions. It decides what happens when a person taps, types, or swipes, and it shapes feedback, the cues that suggest what an element does, the states an element passes through, and the rule that the same action should do the same thing everywhere. Good interaction design is felt in the flow; you notice it when it breaks.

## Why This Matters

Every product is judged at the moment of use: the tap that saved the document, the swipe that dismissed the notification, the button that did nothing. Interaction design decides whether those moments feel predictable or puzzling. When responses are prompt and consistent, people build trust and momentum; when an action gets no reply, they stop, wonder, and often click again. The costs of getting this wrong are quiet but real: abandoned checkouts, repeated taps, and support messages about things that "just don't work." Interaction design is also where the other foundations meet: research tells you who the user is, and interaction design decides what happens when that user acts.

## Learning Objectives

- Define interaction design as designing how people interact with a product — the responses to their actions — using the working definition from the Interaction Design Foundation.
- Name the three feedback channels — visual, audible, and haptic — and give an original example of each.
- Distinguish an affordance from a signifier, and identify a false affordance.
- Describe the states an interactive element passes through: hover, active, disabled, and loading.
- Explain the interaction loop: the user acts, the system responds, and the user continues from that response.
- Apply the consistency rule: the same action should produce the same result everywhere in a product.

## The College Version

### What interaction design is

The Interaction Design Foundation defines interaction design as the design of interactive products and services in which the designer's focus goes beyond the item itself to include the way users will interact with it. Designer and author John Kolko puts the same idea more vividly: interaction design is the creation of a dialogue between a person and a product, system, or service. Both statements point at the same subject — behavior. Not how a screen looks, but what happens when a person acts: what the product does in response, and what that response tells the person. Interaction design sits inside user experience design. UX covers the whole experience of a product, from first hearing about it to years of daily use; interaction design centers on the moment of use, the instant a person and a product actually touch. For this lesson, the working definition is plain: interaction design is designing how people interact with a product, and especially the responses to their actions.

### Feedback: every action gets a response

The most basic guideline in interface design is feedback: whenever a person acts, the product should answer. Nielsen Norman Group's first usability heuristic, visibility of system status, says the design should keep users informed about what is going on through appropriate feedback within a reasonable time. Feedback travels over three channels. Visual: a Save button that turns from gray to a filled blue with a checkmark after the tap. Audible: a checkout scanner that beeps once when a coupon code is accepted. Haptic: a phone that gives a short vibration when a lock-screen toggle is flipped. Timing matters as much as the channel: about 0.1 second feels instantaneous, 1 second is the limit for an uninterrupted flow of thought, and beyond about 10 seconds people lose focus and need a progress indicator telling them the system is still working. Without feedback, people cannot tell success from failure, so they repeat actions and start doubting the product.

### Affordances: cues that suggest what an element does

An affordance is a cue that suggests what an element does. Psychologist James Gibson coined the term in 1977 for any action possibility an object offers; Don Norman brought it into design in 1988 as perceivable action possibilities — what a person can see they might do. The idea is relational: a door handle affords pulling for an adult who can reach it, but not for a toddler who cannot. Norman later added the signifier, the perceivable cue that points at the affordance. A button that looks pressable — raised edge, soft shadow, bright fill — affords pressing, and its look is the signifier. When a raised, shadowed button does nothing on tap, it is a false affordance: it promises an action it does not deliver. Good affordances let people act without instructions.

### States: the life of an element

Interactive elements live through states, the conditions they show as a person interacts. Hover: the button darkens when the pointer rests on it, hinting that it can be clicked. Active: while the mouse button is held down, the element presses inward, confirming the click is landing. Disabled: the element fades and stops responding, saying this action is unavailable right now. Loading: a spinner replaces the label while the system works, telling the person their request was received and is being processed. The U.S. Web Design System documents exactly these conditions for its buttons — default, hover, active, focus, and disabled — because each state answers a question the person is silently asking: Can I act? Did it register? Is it still working? Each state is also a small piece of feedback in its own right. How elements are built as reusable pieces is the subject of the components lesson; here the point is that states belong to behavior, not decoration.

### The interaction loop and consistency

Interaction runs in a loop: the user acts, the system responds, and the user continues based on that response. Tap Pay, the button presses in, the spinner turns, the checkmark appears, and the person reaches for the receipt. Each response feeds the next decision. The loop stays smooth when behavior is consistent. NN/g's fourth heuristic, consistency and standards, states the rule plainly: users should not have to wonder whether different words, situations, or actions mean the same thing. Consistency has two faces. Internal consistency means the same action behaves the same way everywhere in one product — the trash icon empties the bin in every screen. External consistency means following conventions people already know from other products — a magnifying glass means search. Jakob's Law, named after Jakob Nielsen, notes that people spend most of their time using other products, so those products set their expectations, and failing to meet them forces people to learn something new.

### The honest framing

Good interaction design is felt in the flow; you notice it when it breaks. When responses are prompt and consistent, attention stays on the task and the design disappears. When a button gives no reply, a state never changes, or the same action behaves differently in two places, the flow snaps and the product becomes visible in the worst way — as an obstacle. That is why NN/g ties feedback to trust: people who know the system's state feel in control, and predictable interactions build trust in the product. It is also why this lesson keeps promising to check the flow with real users: interaction design is a plan about behavior, and usability testing, covered in its own lesson, is how the plan is checked against what people actually do.

## Key Vocabulary

- **Interaction design** — Designing how people interact with a product, especially the responses the product gives to a person's actions.
- **Feedback** — A product's response to a person's action, delivered visually, audibly, or through touch.
- **Affordance** — A cue in an object that suggests what a person can do with it, such as a raised button suggesting a press.
- **Signifier** — The perceivable cue that points to an affordance, like the shadow under a pressable button.
- **False affordance** — An element that looks as if it does something but does not, like an underlined word that is not a link.
- **State** — A condition an interactive element shows over time, such as hover, active, disabled, or loading.
- **Interaction loop** — The cycle in which a person acts, the system responds, and the person continues from that response.
- **Consistency** — The rule that the same action should produce the same result everywhere in a product.

## Eli-10

Interaction design is the part of making a product that decides what happens when you touch it. Tap a button and the button presses in, a spinner turns, a checkmark appears — or nothing happens, and you tap again, confused. The people who design interactions write, in effect, the product's side of the conversation: how it answers a tap, a swipe, a typed word. They also decide what an element looks like in each moment — resting, hovered over, pressed, grayed out, busy — and they make sure the same action gives the same answer everywhere in the product.

## Eli's Analogy

Think of using a product as a conversation with a patient friend. You say something, and the friend answers. If the friend went silent after every remark, you would repeat yourself and wonder whether they heard you — the same way people double-tap a button that gives no reply.

A conversation is two-sided and adaptive: a friend notices your mood and changes their reply. A product's responses are fixed, written in advance by designers, and identical for everyone. Silence from a friend may be thoughtfulness; silence from a product is almost always a missing state or a bug.

## Worked Example

A team is designing an app for reserving a plot in a community garden. They walk through one interaction: the tap on "Reserve plot." First, the affordance: the Reserve button is raised, shadowed, and bright green, so it looks pressable. The tap presses the button into its active state, then the label changes to a spinner — the loading state — while the system checks whether the plot is still free. A success tone plays, the button becomes a filled checkmark, and the phone gives a short vibration: visual, audible, and haptic feedback at once. The confirmation screen appears and the loop closes. The team notices the same spinner pattern everywhere in the app, so the behavior is consistent. If the plot is taken, the button shakes and shows "No longer available" — the unavailable moment arrives with feedback, not silence.

## Common Mistakes

1. **Giving feedback only for success.** A form that fails silently makes people resubmit and duplicate their work. *Correction:* every action gets a response, including failures — an error message is feedback too.
2. **Treating an affordance as a property the object owns.** A button's affordance lives in the relation between the element and the person; the raised look is the signifier pointing at it. *Correction:* describe the perceivable cue and what action it suggests, rather than saying the button "has" an affordance as if it were a fixed feature.
3. **Skipping the intermediate states.** A button that jumps straight from resting to done leaves people unsure whether their tap registered. *Correction:* include hover, active, and loading states; they are the small answers to "can I act?" and "did it register?"
4. **Letting the same action behave differently in different screens.** If the trash icon deletes in one view and archives in another, people will delete something they meant to keep. *Correction:* apply the consistency rule inside the product first; industry conventions come second.

## Compare / Contrast

- **Affordance vs. Signifier** — An affordance is the action possibility — what the object lets a person do; a signifier is the perceivable cue that points to it, like the shadow under a pressable button.
- **Feedback vs. State** — Feedback is a response to an action that just happened; a state is an element's ongoing condition, like loading, which also happens to answer whether the action registered.
- **Internal consistency vs. External consistency** — Internal consistency means the same action behaves the same way across one product; external consistency means following conventions people already know from other products.

## Key Takeaway

Interaction design is designing how people interact with a product: feedback for every action, affordances that show what is possible, states that tell the element's story, and the rule that the same action behaves the same way everywhere. When those hold, the design disappears into the flow; when they break, people notice.

## Practice Question Bank

1. **What does interaction design shape?**
   - A. Designing how people interact with a product, especially the responses to their actions
   - B. Choosing the colors and fonts that make a screen attractive
   - C. Writing the text that appears on buttons and menus
   - D. Measuring how long people spend on each screen
   **Answer:** A. Designing how people interact with a product, especially the responses to their actions

2. **A person taps a light switch in a home-control app and the phone gives a short vibration as the room icon dims. Which feedback channels are at work?**
   - A. Audible and visual only
   - B. Haptic and audible only
   - C. Haptic and visual
   - D. None — feedback is only text on screen
   **Answer:** C. Haptic and visual

3. **In a usability session, a user taps a "Send" button twice because the screen shows nothing after the first tap. Which interaction design principle did the design violate?**
   - A. External consistency
   - B. Visibility of system status — every action needs feedback
   - C. False-affordance prevention
   - D. The interaction loop must start on the home screen
   **Answer:** B. Visibility of system status — every action needs feedback

4. **A raised, shadowed button on a settings screen does nothing when tapped. What is the best label for this design problem?**
   - A. A missing signifier
   - B. An inconsistent state
   - C. A hidden affordance
   - D. A false affordance
   **Answer:** D. A false affordance

5. **In a recipe app, the bookmark icon adds a recipe to favorites in the list view but opens a sharing menu in the recipe view. Which rule does this violate?**
   - A. External consistency
   - B. Feedback must be audible
   - C. Every element needs a loading state
   - D. Consistency of behavior: the same action should do the same thing everywhere
   **Answer:** D. Consistency of behavior: the same action should do the same thing everywhere

## Sources

- Nielsen Norman Group, [Visibility of System Status (Usability Heuristic #1)](https://www.nngroup.com/articles/visibility-system-status/)
- Nielsen Norman Group, [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/)
- Nielsen Norman Group, [Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/)
- Interaction Design Foundation (IxDF), [What is Interaction Design (IxD)?](https://www.interaction-design.org/literature/topics/interaction-design)
- Interaction Design Foundation (IxDF), [What are Affordances?](https://www.interaction-design.org/literature/topics/affordances)
- U.S. Web Design System, [Button](https://designsystem.digital.gov/components/button/)

## Related Topics

- UX versus UI
- Human-Centered Design
- Components
- High-Fidelity Prototypes
- Usability Testing

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only NN/g, IxDF, and USWDS sources; no source prose adapted; all lesson prose and examples original. Researched 2026-08-21.
