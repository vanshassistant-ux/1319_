# Events

## In 30 Seconds

A browser event is an object that signals an occurrence, such as a user activating a button or a page finishing a load. Code can register an event listener with `addEventListener()` so a callback runs when a matching event is dispatched. The event object tells the listener about that occurrence. Some cancelable events also have a default browser action that a listener can prevent deliberately.

## Why This Matters

Events connect JavaScript to what happens in a page. They let an interface respond to an activation, a keystroke, a loaded resource, or another platform occurrence without repeatedly checking every element. Understanding listener registration, the event object, and default actions helps students trace behavior responsibly. It also creates a base for later topics on forms, the DOM, accessibility, asynchronous work, and event delegation without treating those larger subjects as interchangeable.

## Learning Objectives

- Define an event, event target, event listener, and callback.
- Explain how `addEventListener()` associates a callback with an event type.
- Distinguish `event.target` from `event.currentTarget` in a listener.
- Predict the effect of `preventDefault()` on a cancelable default action.
- Apply a listener to a small event-driven scenario.

## The College Version

### Events and event targets

The DOM Standard describes events as objects dispatched to objects to signal an occurrence, including user interaction and network activity. An object that implements the `EventTarget` interface can have event listeners. In ordinary page code, elements such as a button are familiar event targets, but the idea is broader: `window`, `document`, and some other web-platform objects can also receive events. The event has a type, such as `click` or `load`. A listener is registered for a particular type, so a listener for `click` is not a general instruction to run on every possible occurrence.

The usual registration API is `target.addEventListener(type, callback, options)`. The `type` is a string naming the event type, and the callback is code the platform calls when a matching event reaches that listener. Registering the listener does not run the callback immediately. The callback runs later when the relevant event is dispatched. This separation is the core event-driven pattern: first describe what should happen, then let the platform invoke it when the occurrence happens. This lesson focuses on that basic pattern, rather than on selecting DOM elements, form validation, or security handling.

### The event object and listener context

When the listener callback is invoked, it normally receives an event object. The object carries information about the particular event. Its `type` identifies the event type. Its `target` is the object to which the event was dispatched. Its `currentTarget` is the object whose listener is currently being invoked. These can be the same in a simple direct listener. They can differ when an event travels through a document tree and a listener is attached on an ancestor: the descendant that originated the event can be `target`, while the ancestor handling the listener can be `currentTarget`.

The DOM event model includes capture, target, and bubble phases. Many beginner listeners use the default option, which does not request capture. For common bubbling events, an event can then be observed by a listener on an ancestor after it is handled at its target. That fact supports a later pattern called event delegation, but delegation is not required to understand a single listener. More importantly, `target` should not be treated as a synonym for the element where every listener was registered. Read the event object and the registration site together. A listener can also be removed with `removeEventListener()` when supplied the matching type, callback, and relevant capture setting; this helps avoid behavior that should no longer be active.

### Default actions and cancellation

Some events are cancelable and have a default action supplied by the user agent. For example, following a link after an activation is a familiar default action. Calling `event.preventDefault()` tells the user agent not to perform that default action for a cancelable event. It does not stop other listeners from running, and it does not automatically stop the event from moving through the event path. Those are separate concerns: `stopPropagation()` concerns propagation, while `preventDefault()` concerns a default action. A call to `preventDefault()` on a non-cancelable event has no effect on a default action.

Cancel a default action only when code provides an intentional alternative. For instance, a client-side interaction might manage an action itself, but an ordinary link should not be blocked simply because a listener exists. This is especially relevant for keyboard and assistive-technology use: behavior should preserve a meaningful, operable control rather than replacing it with an unannounced side effect. `addEventListener()` is generally preferable to assigning an `on...` property when code needs multiple independently registered listeners, because the API maintains an event-listener list. A listener callback should do focused work, use the event data it needs, and avoid assuming that every event shares the same cancelability, target, or propagation behavior.

## Key Vocabulary

- **event:** An object dispatched by the platform to signal an occurrence.
- **event target:** An object that can have event listeners and can be involved in event dispatch.
- **event listener:** A registered callback that observes a specified event type on an event target.
- **callback:** A function supplied to an API so that the API can invoke it later.
- **event type:** The string that identifies a category of event, such as `click` or `load`.
- **default action:** Behavior the user agent performs for a cancelable event unless it is prevented.
- **cancelable:** Describes an event for which `preventDefault()` can signal that its default action should not occur.

## Eli-10

An event is like a small notice that says something happened. A button can send a notice when someone activates it. A listener is the instruction you leave with the button: when that kind of notice arrives, run this little job. The listener gets an event object, like the notice card itself, so it can inspect what happened. Some notices would normally trigger a built-in browser action. If the event is cancelable, code can say `preventDefault()` to stop that built-in action—but only when it has a clear replacement.

## Eli's Analogy

Imagine a school office has notice boards for different announcements. You pin a specific instruction under the “fire drill” board, not under every board. When a drill notice arrives, the office follows that instruction. The notice says what kind of announcement it is and where it began. Some announcements have an automatic next step unless the office explicitly cancels it.

The analogy breaks down because browser events are software objects, not paper notices, and dispatch can follow capture and bubble rules through a document tree. A browser default action also has precise platform rules; it is not an office worker freely choosing what to do.

## Worked Example

This listener has one job: record a cancelable `save` event and prevent its default action.

```js
const target = new EventTarget();
const log = [];
const recordSave = event => {
  log.push(event.type);
  event.preventDefault();
};
target.addEventListener("save", recordSave);
const allowed = target.dispatchEvent(new Event("save", { cancelable: true }));
```

When this exact code was run with Bun, `log` became `["save"]` and `allowed` was `false`. The callback ran because its registered type matched the dispatched event. The result was false because the event was cancelable and the listener called `preventDefault()`. In a page, the target might instead be a button and the event might be a browser-dispatched `click`; this example isolates the event mechanics without needing a page or a form.

## Common Mistakes

- **Expecting registration to call the callback:** registration records the callback; invocation occurs when a matching event is dispatched.
- **Using `preventDefault()` to stop every listener:** it addresses a cancelable default action; it does not by itself stop propagation or other listeners.
- **Treating `target` as the current listener object:** compare it with `currentTarget`, especially when an ancestor has the listener.
- **Blocking native behavior without a replacement:** prevent a default action only when the resulting interaction remains purposeful and operable.

## Compare / Contrast

- **`event.target` vs. `event.currentTarget`:** `target` is the object to which the event was dispatched; `currentTarget` is the object whose listener is currently being invoked.
- **`preventDefault()` vs. `stopPropagation()`:** the first prevents a cancelable default action; the second addresses event propagation and does not itself cancel a default action.

## Key Takeaway

Use `addEventListener()` to register focused callbacks for named event types. Inspect the event object, and prevent a cancelable default action only when the interaction has a deliberate alternative.

## Practice Question Bank

1. What does `addEventListener("click", handler)` primarily do? **Answer:** Registers `handler` to observe matching click events.
2. Which property identifies the parent while its listener runs? **Answer:** `event.currentTarget`.
3. What is the direct purpose of `event.preventDefault()` on a cancelable event? **Answer:** Tell the user agent not to perform the event's default action.
4. What happens when `preventDefault()` is called on a non-cancelable event? **Answer:** It prevents no default action by that call.
5. Which design is the clearest use of an event listener? **Answer:** Register a callback that updates a status message when a matching event occurs.

## Sources

- MDN Web Docs, [EventTarget: addEventListener() method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- MDN Web Docs, [Event: preventDefault() method](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- WHATWG, [DOM Standard: Events](https://dom.spec.whatwg.org/#events)

## Related Topics

JavaScript; Functions; DOM; Forms; Accessibility.

## Editorial Metadata

Original EliExplains synthesis. Sources were read as reference-only documentation and standard material; no source prose was adapted. Research checked 2026-08-20. The custom EventTarget example was executed with Bun.
