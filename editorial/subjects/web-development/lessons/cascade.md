# The CSS Cascade

## In 30 Seconds

The CSS cascade is the rule system a browser uses when more than one CSS declaration could set the same property on the same element. First, a declaration must be relevant and match the element. Then CSS considers origin and `!important`, layer precedence, and later tie-breakers such as specificity and source order. The cascade is why two matching rules can produce one computed result instead of a contradiction.

## Why This Matters

The cascade turns a stylesheet from a list of guesses into a system you can inspect. It explains why an apparently correct declaration is crossed out in browser developer tools, and it helps teams keep base styles, third-party styles, and local changes predictable. Knowing the order also discourages reflexive use of `!important`, which changes normal precedence and can make maintenance harder.

## Learning Objectives

- Define the CSS cascade as conflict resolution for declarations.
- Identify relevance, origin, importance, layer precedence, and source order as cascade decisions.
- Distinguish normal declarations from important declarations.
- Explain normal and important ordering of cascade layers.
- Apply source order after earlier cascade tests leave declarations tied.

## The College Version

### A decision process, not a selector

The cascade is CSS's method for choosing one value when multiple declarations could set the same property on an element. Consider two rules that both set a paragraph's `color`. CSS does not average the colors or report an error. It evaluates the declarations in an ordered process and selects a winning value.

The first question is relevance. A declaration is not a candidate merely because it appears in a stylesheet. Its media or other conditional context must apply, and its selector must match the element. Selector matching belongs to the selectors topic: `p.notice` either identifies a particular element or it does not. Once more than one relevant declaration targets the same property, the cascade determines precedence. Ask “does this rule match?” before asking “why did it lose?”

Origin and importance are considered before specificity; source order is a later tie-breaker. Thus, “the more specific selector always wins” is not sound. Specificity only compares declarations that survived the earlier decisions at the same applicable origin and importance level. A less-specific author declaration may defeat a more-specific user-agent declaration because origin precedence is evaluated first.

### Origins and importance establish broad precedence

CSS declarations can come from several origins. A user agent—the browser—has default styles. A user can have user styles, and the page author provides author styles. For normal declarations, author styles outrank user styles, which outrank user-agent styles. That lets a page's stylesheet ordinarily override browser defaults.

`!important` changes a declaration's importance, and important declarations use a reversed origin order. Important user-agent declarations outrank important user declarations, which outrank important author declarations. The reversal lets a user or browser preserve some necessary preferences against ordinary author styling. It is not a general-purpose “make my rule win” button. An author who adds `!important` has moved a declaration into a different precedence category and may make a component difficult to override later.

Read origin and importance as a combined step, not as a contest between selector shapes. A highly specific selector in a lower-precedence origin does not leap ahead. A normal declaration does not beat a relevant important declaration simply by being written later.

### Layers organize author styles without selector escalation

Cascade layers let an author place groups of declarations in a stated precedence order. They are created with `@layer`. Within one origin, normal declarations in layers have lower precedence than normal declarations written outside any layer. Among normal layers, a later layer has higher precedence than an earlier layer. This can give a reset, vendor package, or broad defaults a deliberate lower-priority place while local unlayered rules remain easy to override.

Important declarations reverse layer order. For important declarations, an earlier layer has higher precedence than a later layer, and important declarations inside layers outrank important declarations outside layers. This is another reason to use `!important` sparingly: the shortcut based on normal layer behavior becomes wrong when importance changes.

After relevance, origin/importance, and layer precedence have narrowed candidates, CSS can use specificity for a remaining conflict. If specificity is also tied, order of appearance resolves it: the declaration occurring last in document order wins. “Later rule wins” is true only at that late stage.

## Key Vocabulary

- **cascade:** The CSS process for choosing a value when relevant declarations compete for the same property on an element.
- **relevance:** The requirement that a declaration's conditions apply and its selector matches before it can compete.
- **origin:** The source category of a declaration, such as user-agent, user, or author styles.
- **important declaration:** A declaration marked with `!important`, which uses important precedence rules.
- **cascade layer:** A grouping of CSS declarations with an ordered precedence relationship.
- **order of appearance:** The late tie-breaker in which the last otherwise-tied declaration in document order wins.

## Eli-10

Imagine several instruction cards trying to choose one shirt color for the same game character. The cascade is the referee. It first discards cards for a different character. Then it checks who wrote the card, whether it has a special important stamp, and which labeled stack it came from. Only after those checks does it use smaller tie-breakers, including which card appears last.

So CSS is not simply “last rule wins.” A late card can lose if it comes from a lower-priority stack or is ordinary while another matching card is important. Selectors tell the referee which character a card concerns. Specificity is one later tie-breaker, but it does not decide every disagreement.

## Eli's Analogy

The cascade is a referee using a written sequence of tie-breakers to select one instruction.

The analogy has limits: a human referee may use judgment or negotiate. The CSS cascade follows specified precedence rules and does not infer the author's preferred visual result.

## Worked Example

Suppose a paragraph matches these normal author declarations: `p { color: navy; }` in `@layer base`, then `p { color: teal; }` outside any layer. Both match, have the same origin and importance, and set the same property. The unlayered declaration wins before CSS needs source order, because normal unlayered author styles have higher layer precedence than normal layered styles. If both declarations were unlayered and had equal specificity, the one written later would win. Changing the first declaration to `color: navy !important` is not a casual override: important layer rules follow reversed layer precedence, so inspect origin, importance, and layers again.

## Common Mistakes

- **Mistake:** Saying the last matching declaration always wins. **Correction:** Source order is used only after earlier cascade stages leave a tie.
- **Mistake:** Treating specificity as the first cascade rule. **Correction:** Origin and importance are considered before specificity.
- **Mistake:** Assuming `!important` merely adds strength to an ordinary declaration. **Correction:** It enters important precedence, where origin and layer orders reverse.
- **Mistake:** Assuming a normal layered rule overrides normal unlayered author CSS. **Correction:** Normal unlayered author declarations outrank normal layered author declarations.

## Compare / Contrast

- **Selector matching / cascade:** Matching decides whether a declaration is a candidate; the cascade resolves competing candidates.
- **Normal / important declaration:** They use different origin and layer precedence orders.
- **Layer precedence / source order:** Layers are considered earlier; source order resolves otherwise tied declarations.

## Key Takeaway

The cascade is a sequence: establish relevance, compare origin and importance, account for layers, then use later tie-breakers. “Last rule wins” is a narrow final case, not the whole model.

## Practice Question Bank

1. What is the CSS cascade primarily for? Choosing a value when relevant declarations compete for one property.
2. What resolves equal-specificity normal unlayered author declarations? The declaration later in document order.
3. Which normal author declaration has higher layer precedence? An unlayered one.
4. Why can a less-specific selector win? Higher origin, importance, or layer precedence may be checked first.
5. What does `!important` do? It enters important precedence, where origin and layer orders reverse.

## Sources

- [MDN Web Docs — Introduction to the CSS cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Introduction)
- [W3C — CSS Cascading and Inheritance Level 5](https://www.w3.org/TR/css-cascade-5/)

## Related Topics

- CSS Syntax
- CSS Selectors
- Specificity
- Box Model

## Editorial Metadata

Original EliExplains synthesis, researched 2026-08-20. Sources used as reference-only; no source prose adapted.
