# Components

## In 30 Seconds

Components are the reusable building blocks of an interface: buttons, input fields, menus, cards, and more. Each is a ready-made piece with a defined look and behavior, and the core rule is consistency: the same component should look and behave the same everywhere. Components assemble into pages, and each one moves through states such as default, hover, pressed, disabled, and loading. Well-built components carry clear labels and work with the keyboard. Their quality, though, depends on the defaults a design system gives them.

## Why This Matters

People learn an interface through its components. A Save button that looks and works like every other Save button lets users act without thinking; the same button redrawn differently on each screen forces them to relearn the app every time. Consistency is what makes components trustworthy, and trust is what makes users fast. Components are also the shared vocabulary of design and development teams: when a dropdown is one defined thing, nobody argues about what it should do. Knowing what components are, how they behave in each state, and where their quality comes from separates interfaces that feel solid from interfaces that feel scrambled.

## Learning Objectives

- Define a component using the working definition from Nielsen Norman Group and the U.S. Web Design System: a reusable piece of the interface, such as a button, a menu, or a card.
- Name common components, including buttons, input fields, dropdowns, checkboxes, cards, modals, navigation bars, and toasts, and say when each is typical.
- State the core consistency rule: the same component should look and behave the same everywhere.
- Distinguish components from pages: assembled pieces versus whole screens.
- Identify the component states: default, hover, pressed, disabled, and loading.
- Explain the general accessibility requirements in components (labels, keyboard use, focus) and why components are only as good as their defaults.

## The College Version

### What a component is

The working definition of a component comes from two sources. Nielsen Norman Group defines a design system as a complete set of standards intended to manage design at scale using reusable components and patterns, which makes components the reusable pieces teams assemble into screens. The U.S. Web Design System states it more plainly: its components are simple and consistent solutions to common user-interface needs. Put together, a component is a reusable piece of the interface, a button, a menu, or a card, built once with a defined look and behavior, then used over and over. Components are the building blocks of an interface the way bricks are the building blocks of a wall: each piece is ordinary on its own, yet the same piece appears in hundreds of places. An original example: a recipe app has one Search Recipes button component. Whether it appears on the home screen, the browse screen, or the saved list, it is the same component with the same shape, color, and response when pressed. The team never redraws it; they reuse it. That one decision, repeated across an entire interface, is what components are for.

### The common components

Every interface is assembled from a familiar cast of components, and each has a typical job. A button draws attention to an important action, which the U.S. Web Design System describes as a large selectable surface, and it is the standard way to say do this now, like the Pay Now button on a checkout screen. An input field lets users enter text, such as a search box or a shipping-address line. A dropdown, also called a select, lets users choose one option from a list, which suits many choices, like picking a country from several dozen. A checkbox lets users select one or more options from a list, typical for settings such as email me a receipt. A card groups content and actions about a single subject, the standard container for a product, a contact, or a news story. A modal disables the page behind it and focuses attention on one task or message, which makes it right for a forced choice like confirming a deletion. A navigation bar helps users see where they are and reach the main sections of a site. A toast is a small, temporary notification that confirms an action, such as Settings saved, appearing and disappearing on its own. Each component exists because a common need recurs, and reusing one piece is cheaper and more reliable than inventing a fresh piece every time.

### Consistency, and components versus pages

The core rule of components is consistency: the same component should look and behave the same everywhere. Nielsen Norman Group explains the payoff: premade UI components let teams replicate designs quickly, reducing the need to reinvent the wheel and the risk of unintended inconsistency, and they create visual consistency across products and channels. Consistency has two halves. Visually, a button should not change its shape or color from screen to screen. Behaviorally, a component that opens a menu when clicked should open a menu every time, not a link on one screen and a menu on the next. An original example: a travel site whose calendar opens as a pop-up on some pages and navigates to a new page on others breaks the rule, because users click and guess. Components also stand in a clear relationship to pages. A component is a piece; a page is a whole screen assembled from pieces. A checkout page, for instance, is built from a card, two input fields, a country dropdown, a terms checkbox, and a button, with layout deciding how the pieces are arranged. Layout is its own topic in this course, so this lesson only marks the boundary: components are the parts, pages are the assembled whole, and layout is the arrangement.

### States, accessibility, and the honest framing

A component is not one thing; it is a set of states it moves through as people interact with it. The U.S. Web Design System documents five core button states: default, the resting look; hover, when the pointer sits over the component; active, the brief moment of the press; focus, when the component is selected by keyboard; and disabled, when the action is unavailable. Many components add a loading state: while an action such as a payment processes, the button shows a small progress indicator so users know the click registered and the system is working. Accessibility is a general requirement built into components, not an add-on. The W3C Web Accessibility Initiative asks that form elements include clearly associated labels and that every interactive element be keyboard accessible, and the U.S. Web Design System adds that components must show a visible focus state when users tab to them. The honest framing closes the lesson: components are only as good as the defaults behind them. A component is a promise, this thing looks like this and does this, and someone must keep that promise. Design systems, covered in their own lesson in this course, define the defaults that make components consistent, accessible, and reusable. Without those standards, a pile of components is just a pile of parts.

## Key Vocabulary

- **Component** — A reusable piece of the interface, such as a button, a menu, or a card, with a defined look and behavior.
- **Consistency** — The rule that the same component looks and behaves the same way everywhere it appears.
- **Default state** — The resting appearance of a component when no interaction is happening.
- **Hover state** — The appearance of a component while the pointer rests over it.
- **Pressed state** — The brief appearance of a component while it is being clicked.
- **Disabled state** — The appearance of a component whose action is currently unavailable.
- **Loading state** — The appearance of a component while the system completes an action it started.
- **Modal** — A component that disables the page behind it to focus attention on one task or message.
- **Toast** — A small, temporary notification that appears briefly to confirm an action such as a saved change.
- **Focus** — The state of a component selected by the keyboard, marked with a visible outline.

## Eli-10

Components are the building blocks of an app or website. They are ready-made pieces of the interface, like buttons, menus, cards, and text boxes, and they get reused all over the place. Instead of drawing a new button for every screen, a team builds the button once and drops it in wherever it is needed. The golden rule is consistency: the same piece should look and behave the same way everywhere, so a button that saves your work on one screen acts the same on every screen. Components also have states: how they look when nothing is happening, when your pointer hovers over them, when you click them, when they are turned off, and when they are busy loading. Good components have clear labels and work with the keyboard, and their quality depends on the defaults the team sets for them.

## Eli's Analogy

Think of components as building bricks. One brick is simple, but the same brick can be part of a house in one build and a tower in the next. You do not carve a new brick every time; you reach for the same one, and it clicks together with the others the same way every time. Where the analogy breaks down: bricks are mechanical and identical, while interface components carry meaning — a button promises an action, a card promises grouped content, and each has states and accessibility needs. And unlike bricks, a component's quality depends on the standards the team sets, so two teams with the same component list can build very different products.

## Worked Example

A team redesigning a city transit app noticed riders double-tapping the Buy Ticket button and getting charged twice. The old app drew a fresh button on every screen, so on the schedule screen the button looked like a link, and on the map screen it changed shape when pressed. The team replaced every variant with one Buy Ticket component: the same blue pill everywhere, with the same default, hover, pressed, disabled, and loading states. Riders now saw the button gray out and show a small spinner while the payment processed, and the double charges stopped. The team also gave the component a clear label and a visible keyboard focus, and tested it with five riders who navigate by keyboard.

## Common Mistakes

- **Redrawing components for every screen.** If each page gets its own button or card, the interface looks like a patchwork and users must relearn it constantly; reuse the same component everywhere.
- **Letting states drift.** A button whose hover looks like a link, or a disabled control that still looks clickable, breaks the promise of the component; every state should be distinct and consistent.
- **Overusing modals.** A modal blocks the whole page, so using one for a trivial message forces users to stop and dismiss it; reserve modals for tasks that truly need full attention.
- **Skipping labels, keyboard support, or focus.** A component without a clear label or a visible focus state fails users who rely on screen readers or keyboards.
- **Assuming components carry themselves.** A component is only as good as the defaults a design system gives it; without defined standards, the same component can drift apart across screens.

## Compare / Contrast

- **Component vs. Page** — A component is a single reusable piece, such as a button or a card; a page is a whole screen assembled from components, with layout deciding the arrangement.
- **Hover state vs. Focus state** — Hover appears when the pointer rests over a component; focus appears when the component is selected by keyboard and must stay visible so keyboard users can tell where they are.
- **Modal vs. Toast** — A modal blocks the page and demands attention until dismissed, while a toast is a brief notification that appears and disappears on its own without blocking anything.

## Key Takeaway

Components are reusable pieces of the interface, and the core rule is consistency: the same component must look and behave the same everywhere. Components assemble into pages, move through states, and need labels, keyboard access, and focus; they are only as good as the defaults a design system gives them.

## Practice Question Bank

1. **Which statement best captures the working definition of a UI component used in this lesson?**
   - A. A reusable piece of the interface, such as a button, a menu, or a card, with a defined look and behavior
   - B. A single finished screen assembled by a designer
   - C. A set of rules that governs every color in a product
   - D. A file format used to share design work between teams
   **Answer:** A. A reusable piece of the interface, such as a button, a menu, or a card, with a defined look and behavior

2. **What is the core consistency rule for components?**
   - A. Each screen should receive its own custom version of every component
   - B. Components should change their appearance with every product release
   - C. The same component should look and behave the same everywhere it appears
   - D. Only the most important components need to follow any rules
   **Answer:** C. The same component should look and behave the same everywhere it appears

3. **A rider rests the mouse pointer over the Buy Ticket button without clicking. Which state is the button in?**
   - A. Disabled
   - B. Hover
   - C. Pressed
   - D. Loading
   **Answer:** B. Hover

4. **A designer builds a checkout screen by placing an existing card, two input fields, a dropdown, and a button on the page. Which statement best describes this work?**
   - A. She is inventing four brand-new components
   - B. She is choosing states for a single component
   - C. She is writing the design system from scratch
   - D. She is assembling existing components into a whole screen
   **Answer:** D. She is assembling existing components into a whole screen

5. **A sign-in form's password field has no visible label and can be operated only with a mouse. Which general requirement for accessible components does this field violate?**
   - A. Components must match the product's color palette
   - B. Every component needs a companion dropdown
   - C. Form controls need clearly associated labels and keyboard access
   - D. Interactive fields must be hidden until the page loads
   **Answer:** C. Form controls need clearly associated labels and keyboard access

## Sources

- U.S. Web Design System, [Components Overview](https://designsystem.digital.gov/components/overview/)
- U.S. Web Design System, [Button](https://designsystem.digital.gov/components/button/)
- Nielsen Norman Group, [Design Systems 101](https://www.nngroup.com/articles/design-systems-101/)
- W3C Web Accessibility Initiative, [Designing for Web Accessibility – Tips for Getting Started](https://www.w3.org/WAI/tips/designing/)
- W3C Web Accessibility Initiative, [Developing for Web Accessibility – Tips for Getting Started](https://www.w3.org/WAI/tips/developing/)
- W3C Web Accessibility Initiative, [Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/)

## Related Topics

- Design Systems
- Layout
- Accessibility
- Interaction Design
- Visual Hierarchy

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Rights status: reference-only NN/g, USWDS, and W3C WAI sources; facts restated in original prose; all examples original and invented. Researched 2026-08-21.
