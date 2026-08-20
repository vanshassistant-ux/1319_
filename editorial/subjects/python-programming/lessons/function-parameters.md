# Function Parameters

## In 30 Seconds

Parameters are the named inputs a function is prepared to receive; arguments are the actual values supplied when it is called. Python lets many ordinary parameters receive values by position or by name. Defaults make an input optional, while `*args` gathers extra positional values and `**kwargs` gathers extra named values. Clear parameter choices make one small operation useful in more than one situation.

## Why This Matters

Parameters are how a program communicates the information a reusable operation needs. In coursework, they help you read function calls accurately and design examples that work with varied inputs. In practical code, sensible parameter names, defaults, and keyword calls make an interface easier to use without memorizing a fragile order. Understanding the binding rules also makes common `TypeError` messages—such as a missing argument or an unexpected keyword—much easier to diagnose.

## Learning Objectives

- Distinguish a parameter from an argument.
- Apply positional and keyword arguments to an ordinary Python parameter list.
- Explain when a default value is used and why mutable defaults are risky.
- Predict the tuple and dictionary formed by `*args` and `**kwargs`.
- Choose a clear calling style for a small function.

## The College Version

### Parameters describe a function's input contract

A function definition can name inputs in its parenthesized parameter list. Those names are parameters: placeholders the function can use while it runs. A function call supplies arguments, the concrete objects to bind to those placeholders. For example, in `announce("Mina")`, `name` is a parameter if it appears in the definition, and `"Mina"` is an argument in this particular call. A parameter describes what a function accepts; an argument describes what a caller provided.

A function's parameter list is therefore a small interface. A caller needs to know which inputs are required, which are optional, and which names are meaningful. Good parameter names communicate the role of an input—`width` is easier to interpret than `x` when a function calculates an area. Names do not enforce correctness by themselves, but they make a call easier for another person to read and reduce the chance that an ordered value is misunderstood.

For ordinary parameters, Python can bind arguments by position. In `greet("Mina", "Welcome")`, the first supplied argument goes to the first parameter and the second goes to the second. A named call instead matches by parameter name: `greet(greeting="Welcome", name="Mina")`. Keyword calls may state arguments in a different order. A call may combine styles, but positional arguments must come before keyword arguments.

### Defaults make an input optional, with a caveat

A default value appears after `=` in a parameter list. In `def greet(name, greeting="Hello")`, a call that supplies only `name` uses `"Hello"` for `greeting`; a caller can replace it. Defaults fit a conventional choice that should remain overridable. They do not make every input optional: `name` remains required.

Python evaluates a default expression once, when the function definition is executed, rather than rebuilding it on every call. A default `items=[]` can therefore retain additions made during an earlier call. When a function needs a fresh list if none was supplied, a common pattern is `items=None`, followed by initialization inside the function when `items is None`. Lists are fine as inputs; a shared default object should simply be intentional.

### Collecting a flexible number of arguments

A parameter written as `*args` collects extra positional arguments into a tuple. `args` is a convention, not a magic word; the leading `*` creates the behavior. For `label("notebook", "blue", "lined")`, ordinary parameters can receive the first value and a starred parameter can receive `('blue', 'lined')`.

Likewise, `**kwargs` collects extra keyword arguments into a dictionary whose keys are the supplied keyword names. `**settings` works just as `**kwargs` does. These tools are flexible, but explicit named parameters are clearer for the important, expected inputs. Use a starred collection when an arbitrary set of values is genuinely part of the function's contract.

## Key Vocabulary

- **parameter:** A name in a function definition that receives an argument when called.
- **argument:** An object or expression supplied in a function call.
- **positional argument:** An argument matched by its place in a call.
- **keyword argument:** An argument matched by a written parameter name.
- **default value:** A value used when the caller omits an argument.
- **`*args`:** Conventional name for a starred parameter collecting extra positional arguments into a tuple.
- **`**kwargs`:** Conventional name for a double-starred parameter collecting extra keyword arguments into a dictionary.

## Eli-10

Imagine a smoothie counter. The recipe card has blanks for what the blender needs: a fruit and perhaps a milk choice. Those blanks are parameters. When a customer says “banana” and “oat milk,” those supplied choices are arguments. The same recipe can make different smoothies because different customers fill in its blanks.

Giving choices by position is like saying the first word is fruit and the second is milk. Giving them by name is like attaching labels: `fruit="banana"` and `milk="oat"`. A default is the usual milk when no one requests another. `*args` is a basket for extra unlabelled toppings, and `**kwargs` is a clipboard for extra labelled requests.

## Eli's Analogy

A function's parameters are labelled blanks on an order form; arguments are the entries a customer writes into those blanks.

The analogy has limits: a real form may reject or charge for choices, while parameters do not decide business rules. Python's exact binding rules come from the language, not from a cashier.

## Worked Example

```python
def make_label(item, count=1, *tags, **settings):
    return {"item": item, "count": count, "tags": tags, "settings": settings}

print(make_label("notebook", 2, "blue", "lined", urgent=True))
```

The first two positional arguments bind `item` to `"notebook"` and `count` to `2`, so the default count is not used. The two remaining positional arguments become `('blue', 'lined')` in `tags`. The named argument `urgent=True` becomes `{'urgent': True}` in `settings`. The printed result is `{'item': 'notebook', 'count': 2, 'tags': ('blue', 'lined'), 'settings': {'urgent': True}}`.

## Common Mistakes

- **Mistake:** Calling every supplied value a parameter. **Correction:** A parameter is in the definition; an argument is in a call.
- **Mistake:** Putting a positional argument after a keyword argument. **Correction:** Put positional arguments first.
- **Mistake:** Expecting a mutable default to be rebuilt each call. **Correction:** Default expressions run once at definition time.
- **Mistake:** Treating `args` and `kwargs` as magic names. **Correction:** The `*` or `**` creates the collection behavior.

## Compare / Contrast

- **Parameter / argument:** A parameter belongs to the definition; an argument belongs to a particular call.
- **Positional / keyword:** Position matches by order; a keyword matches by name.
- **`*args` / `**kwargs`:** One star gathers extra positional values into a tuple; two gather extra named values into a dictionary.

## Key Takeaway

Parameters describe accepted inputs, and arguments supply them. Use explicit parameters where possible, defaults for genuine optional choices, and starred collections only when flexible inputs are intended.

## Practice Question Bank

1. In `def show(color): ...` followed by `show("green")`, which item is the parameter? **Answer: A. `color`**
2. Which call is valid for `def greet(name, greeting="Hello"): ...`? **Answer: B. `greet("Mina", greeting="Welcome")`**
3. For `def record(item, *tags): ...`, what does `record("pen", "blue", "sale")` bind to `tags`? **Answer: C. `("blue", "sale")`**
4. For `def configure(name, **settings): ...`, what does `configure("app", theme="dark")` place in `settings`? **Answer: D. `{"theme": "dark"}`**
5. Why can a list default surprise a caller who calls a function twice? **Answer: B. The same default list can retain the first call's addition.**

## Sources

- Python Software Foundation, [The Python Tutorial: More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html)
- Python Software Foundation, [The Python Language Reference: Calls](https://docs.python.org/3/reference/expressions.html#calls)

## Related Topics

- Functions
- Return Values
- Scope

## Editorial Metadata

- Status: READY_TO_PUBLISH
- Research status: source-verified
- Rights: reference-only documentation; original synthesis and examples
- Examples: executed with Python 3
