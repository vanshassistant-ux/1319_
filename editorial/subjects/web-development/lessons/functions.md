# Functions

## In 30 Seconds

A JavaScript function is reusable code that can be called to perform a task or calculate a value. A declaration gives the function a name, optional parameters, and a body. A call supplies arguments for those parameters. When a function uses `return`, the call evaluates to the returned value; without a return statement, an ordinary function call produces `undefined`.

## Why This Matters

Functions let a program give one job a clear name and reuse its logic instead of copying it into every place that needs it. That makes a page's behavior easier to test, explain, and change. In later web work, functions organize event handlers, data transformations, and requests, but the same fundamentals still apply: understand what inputs a function expects, what it returns, and which work belongs inside it.

## Learning Objectives

- Define a JavaScript function declaration, call, parameter, and argument.
- Distinguish a parameter from an argument.
- Explain how `return` determines the value produced by a call.
- Apply a small function to calculate and reuse a result.

## The College Version

### Declaration, body, and call

A function declaration introduces a callable function with the `function` keyword, an identifier, a parenthesized parameter list, and a statement body in braces. For example, `function greet(name) { return \`Hello, ${name}!\`; }` declares a function named `greet`. Declaring it does not run the body. The body runs when code evaluates a call expression such as `greet("Mina")`. Separating declaration from call is useful: the declaration describes reusable work, while each call is one use of that work.

The function body is a block of statements. It can create local values, make decisions, and calculate a result. Good beginner functions tend to have one understandable responsibility, such as formatting a label or computing a total. A useful name describes the operation—`calculateTotal` says more than `doThing`. Naming helps a reader identify the intended job at each call site, but a name cannot substitute for checking the body and its returned value.

### Parameters receive arguments

Parameters are names written in a function's definition. They act as local bindings when a call begins. Arguments are actual values written at a particular call site. In `function square(number) { return number * number; }`, `number` is a parameter. In `square(5)`, `5` is an argument. The same declared function can be called with different arguments: `square(2)` and `square(9)` reuse one body but produce different results.

JavaScript permits calls whose argument count differs from the declaration's parameter count. When no argument is supplied for a parameter, its initial value is `undefined` unless the declaration supplies a default parameter value. Extra arguments do not create additional named parameters in this simple declaration. That flexibility does not remove the need to communicate expected inputs with clear names and documentation.

### Return values and observable results

A `return` statement ends the current function execution and supplies a value to the caller. In `function add(a, b) { return a + b; }`, `add(3, 4)` evaluates to `7`, so another expression can use it: `const total = add(3, 4);`. Returning is different from displaying. `console.log(total)` writes a diagnostic message, while `return total` gives calling code a value it can store, compare, or pass onward.

If execution reaches the end of an ordinary function without a `return` statement, the call's result is `undefined`. A bare `return;` also returns `undefined`. A return statement can appear before later statements in the same body; those later statements are not reached on that call. A caller can compose returned values—for example, use one function's result as an argument to another—without the called function knowing who will consume it. Testing a function with representative inputs and comparing the returned value with an expected value can reveal errors before its behavior is connected to any interface. Ask three questions when reading a function: What arguments does it use? What work does it perform? What value, if any, does its caller receive?

## Key Vocabulary

- **function declaration:** Syntax that creates a named function with a parameter list and a body.
- **function call:** An expression that invokes a function, usually by writing its name followed by parentheses.
- **parameter:** A named local binding listed in a function definition for receiving an input.
- **argument:** A value supplied in the parentheses of a particular function call.
- **return statement:** A statement that ends the current function execution and optionally supplies a value to its caller.
- **undefined:** The JavaScript value commonly produced when a function finishes without returning a value.

## Eli-10

Think of a function as a named mini-recipe in a program. You write it once, then call its name whenever you want the program to follow those steps. The empty spots in the recipe are parameters. When you call the function, you put actual ingredients—arguments—into those spots. A `return` is what the recipe hands back when it finishes, such as a finished total or a formatted message. A function can also finish without handing anything back; in JavaScript, that result is `undefined`.

## Eli's Analogy

A smoothie counter has a recipe called `makeSmoothie(fruit, milk)`. `fruit` and `milk` are labels on the recipe's blanks (parameters). Saying `makeSmoothie("banana", "oat milk")` provides this order's ingredients (arguments). The finished smoothie is the return value.

The analogy has limits: a program has no person or physical ingredients, and a function may do more than calculate one object. JavaScript also permits calls with missing or extra arguments, unlike a real counter that might reject an incomplete order.

## Worked Example

Suppose a checkout needs a total including tax:

```js
function totalWithTax(price, rate) {
  const tax = price * rate;
  return price + tax;
}

const due = totalWithTax(20, 0.05);
```

`price` and `rate` are parameters; `20` and `0.05` are arguments. The calculation is `20 * 0.05 = 1`, then `20 + 1 = 21`. Executing this exact function with Bun printed `21`. Because it returns the result, the caller can store it in `due`. Replacing `return price + tax` with `console.log(price + tax)` would display 21 but would not make `due` equal to 21.

## Common Mistakes

- **Calling a parameter an argument everywhere.** A parameter is in the declaration; an argument is supplied by a call.
- **Expecting a declaration to run immediately.** A declaration creates the function; a call invokes its body.
- **Using `console.log` when later code needs a computed value.** Return the value and let the caller decide whether to display it.
- **Assuming a missing `return` produces the last calculation.** An ordinary function that reaches its end without returning produces `undefined`.

## Compare / Contrast

- **Parameter vs. argument:** A parameter is named in the function definition; an argument is supplied by one call.
- **`return` vs. `console.log`:** `return` supplies a value to the caller and ends the function; `console.log` displays a value but does not return that displayed value.

## Key Takeaway

A function declaration defines reusable behavior. Calls provide arguments for parameters, and `return` determines the value a caller can use afterward.

## Practice Question Bank

1. In `function square(number) { return number * number; }`, what is `number`? **Answer: parameter.**
2. What does `totalWithTax(20, 0.05)` do? **Answer: calls the function with two arguments.**
3. Which body gives a calculation result to calling code? **Answer: `return price + tax;`.**
4. What is the result of a function that ends with no return statement? **Answer: `undefined`.**
5. How can `square` calculate both 4² and 9²? **Answer: call it with different arguments.**

## Sources

- [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [ECMAScript Language: Functions and Classes](https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html)

## Related Topics

JavaScript; JavaScript Fundamentals; Variables; Arrays; Objects.

## Editorial Metadata

Original EliExplains synthesis, researched 2026-08-20. Reference-only documentation and specification; no source prose adapted. Worked example executed with Bun.
