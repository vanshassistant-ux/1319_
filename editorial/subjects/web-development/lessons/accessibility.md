# Accessibility

## In 30 Seconds

Web accessibility is designing and developing websites so people with disabilities can perceive, understand, navigate, interact with, and contribute to the web. Start with meaningful HTML, clear control names, context-appropriate image alternatives, and keyboard-operable essential actions with visible focus.

## Why This Matters

A page can look polished and still block someone from finding a button or completing a form. Accessibility is an engineering concern that belongs in element, content, and interaction decisions—not a late visual checklist.

## Learning Objectives

- Define web accessibility.
- Explain the accessibility tree.
- Apply keyboard and focus checks.
- Distinguish image alternative purposes.
- Evaluate native HTML as a starting point.

## The College Version

### Accessibility is an interaction requirement

Web accessibility is design and development that lets people with disabilities use websites, tools, and technologies. People may perceive information, understand it, navigate it, operate controls, and contribute through different combinations of hardware, software, and assistive technology. Build for those paths while choosing elements and interactions; do not wait for a final checklist.

### Structure becomes an accessibility representation

Browsers build a DOM from markup and an accessibility tree from accessibility-related information in that DOM. Platform accessibility APIs expose that representation to assistive technologies. It can include a role, name, description, state, and available actions. A button-looking generic element can therefore still communicate poorly or behave incorrectly. Native HTML is a strong starting point because it supplies defined semantics and ordinary behavior.

### Keyboard operation and focus are observable behavior

Tab and Shift+Tab through a real task. Needed controls should be reachable, focus should move away again, the order should be logical, and the focused item should be visible. Then verify that the task can be completed by keyboard, not merely that controls can receive focus. This catches mouse-only behavior and keyboard traps, but it is a focused check rather than a complete evaluation.

### Alternatives communicate purpose, not pixels

Text alternatives depend on an image's purpose in context. Informative images need the relevant information in text; an image that is the only label of a control needs the control's function. Pure decoration or redundant imagery can use empty alt text. Complex visuals need their information elsewhere in the page, not merely a short caption.

## Key Vocabulary

- **web accessibility:** design and development that enable people with disabilities to use web content.
- **accessibility tree:** browser representation of accessibility-related DOM information.
- **accessible name:** label by which an interface object can be identified.
- **role:** kind of interface object represented.
- **keyboard focus:** current target for keyboard input.
- **focus indicator:** visible sign of the focused item.
- **keyboard trap:** focus can enter a component but not leave normally.
- **text alternative:** text providing an image's relevant information or function.

## Eli-10

A website is more than the picture on a screen. Some people use keys instead of a mouse, hear a page through a screen reader, or need words instead of a picture. Clear headings, labels, buttons, and descriptions help the page work through those routes.

## Eli's Analogy

A museum has signs, an audio guide, ramps, and directions to the same exhibits. A web page needs its structure, names, keyboard route, and alternatives to point to the same information. Unlike a museum, there is no fixed feature list that solves every web interaction; context and testing matter.

## Worked Example

A course-search card uses a native button labeled “Search” and a visible label associated with its search input. Its magnifying-glass icon is decorative because the adjacent text already names the action, so it has `alt=""`. Tab testing reaches the field and button in order, shows focus, activates the button with Enter, and lets focus move backward with Shift+Tab. If the icon were the only button content, its alternative would say “Search courses.”

## Common Mistakes

- **Testing only with a mouse.** Test the actual task with Tab, Shift+Tab, and keyboard activation.
- **Using generic clickable elements.** Prefer the native element that fits the job.
- **Using one alt-text rule for all images.** Match the alternative to the image's purpose.
- **Hiding focus.** Keep a clear visible indicator.

## Compare / Contrast

- **DOM tree vs. accessibility tree:** markup representation versus accessibility-related representation derived from it.
- **Informative vs. decorative image:** meaningful content needs an equivalent alternative; decoration can use empty alt.
- **Native button vs. generic element:** native semantics and behavior versus a pattern that is easy to implement incompletely.

## Key Takeaway

Use meaningful native structure, communicate control and image purpose, and verify essential tasks with a keyboard and visible focus.

## Practice Question Bank

1. What does web accessibility mean? Designing and developing content so people with disabilities can use it.
2. What is a keyboard trap? Focus can enter a component but cannot leave normally.
3. What representation is exposed to accessibility APIs? The accessibility tree.
4. What should an icon-only search button communicate? The search action.
5. What is the best starting choice for an action control? A native button when it fits.

## Sources

- W3C WAI, *Introduction to Web Accessibility*.
- W3C WAI, *Easy Checks – A First Review of Web Accessibility*.
- MDN Web Docs, *Accessibility tree*.
- W3C WAI, *An alt Decision Tree*.

## Related Topics

- Semantic HTML
- Images
- Forms
- Headings and Paragraphs
- WCAG Basics

## Editorial Metadata

Original EliExplains synthesis. Source-verified on 2026-08-20. Reference-only sources; no source prose adapted.
