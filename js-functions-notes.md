# JavaScript Functions — Complete Reference Notes

Study each section in order. Read the concept, the example, and the "Gotcha" line.
Coding practice comes separately in chat — this file is your reference only.

## 00. Why functions matter

A function is a reusable block of code that performs a task and can be called again.

- Simple definition: A function is a named action you can run whenever you need it.
- Technical definition: In JavaScript, functions are first-class values. They are callable objects with their own execution context, local scope, parameters, and optional return value.
- Why it is used: It avoids duplicate code, groups logic, and makes behavior reusable.
- When to use it: Use functions for calculations, validation, event handlers, API calls, and code that should run multiple times with different inputs.
- When not to use it: Avoid creating a function for one-off tiny logic that makes the code harder to read, and avoid mixing unrelated responsibilities inside one large function.

### How a function runs internally

When a function is called:

1. JavaScript creates a new execution context.
2. The arguments are assigned to the parameters.
3. A new local scope is created for variables used inside the function.
4. The function body runs line by line.
5. If a return value exists, it is sent back to the caller.
6. The function frame is removed from the call stack.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Ada")); // Hello, Ada!
```

### Interview-level summary

- A function is the main building block of reusable logic in JavaScript.
- Different function forms exist because they differ in hoisting, `this`, and creation style.
- Understanding `this`, closures, higher-order functions, and callbacks is what separates basic syntax from real JavaScript fluency.

---

## 01. Function Declarations

A named function created with the `function` keyword.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

- **Hoisted** — the entire function moves to the top of its scope, so you can call it *before* it is written in the file.
- Best for named, reusable logic.

**Gotcha:** `sayHi()` works even if `function sayHi() {}` is defined lower down.

---

## 02. Function Expressions

A function assigned to a variable (often anonymous).

```javascript
const square = function (n) {
  return n * n;
};
```

- **NOT hoisted** — usable only *after* the defining line.
- Treats the function as a value you can store and pass around.

**Gotcha:** Calling it before its line throws `Cannot access 'square' before initialization`.

---

## 03. Arrow Functions

Shorter syntax for function expressions (ES6).

```javascript
const double = n => n * 2;          // 1 param, implicit return
const add = (a, b) => a + b;        // multiple params need ()
const noop = () => {};              // no params need ()
const makeUser = id => ({ id });    // return object → wrap in ()
```

- No own `this` — inherits `this` from the surrounding scope.
- No `arguments` object.
- Cannot be used as a constructor (`new` fails).

**Gotcha:** `id => { id }` returns `undefined` (that's a code block). Use `id => ({ id })`.

---

## 04. Parameters and Arguments

- **Parameters** = names in the definition.
- **Arguments** = actual values passed in.

```javascript
function fullName(first, last) {   // parameters
  return `${first} ${last}`;
}
fullName("Ada", "Lovelace");       // arguments
```

- Missing arguments become `undefined`.
- The `arguments` object (in normal functions) holds all passed values.

**Gotcha:** `arguments` is array-*like*, not a real array — no `.map()`.

---

## 05. Default Parameters

A fallback value used when the argument is missing or `undefined`.

```javascript
function multiply(a, b = 2) {
  return a * b;
}
multiply(5);      // 10
multiply(5, 3);   // 15
```

**Gotcha:** The default triggers on `undefined` but **not** on `null` — `multiply(5, null)` gives `0`.

---

## 06. Rest Parameters

Collects any number of remaining arguments into a **real array**. Uses `...`.

```javascript
function sum(...numbers) {
  return numbers.reduce((t, n) => t + n, 0);
}
sum(1, 2, 3, 4);   // 10
```

- Must be the **last** parameter.
- Unlike `arguments`, it IS a real array.

**Gotcha:** Only one rest parameter allowed, and it must come last.

---

## 07. Spread Syntax

Same `...`, but it *expands* an array/object into individual pieces.

```javascript
const merged = [...[1, 2], ...[3, 4]];   // [1,2,3,4]
const clone  = { ...user, age: 30 };     // copy + override
const max    = Math.max(...[4, 9, 2]);   // 9
```

- Rest **collects** (in a parameter list); spread **expands** (in a call/literal).

**Gotcha:** Spread makes a **shallow** copy — nested objects are still shared by reference.

---

## 08. Higher-Order Functions

A function that takes a function as an argument and/or returns a function.

```javascript
function applyTwice(fn, value) {
  return fn(fn(value));
}
applyTwice(n => n + 3, 0);   // 6
```

`map`, `filter`, `reduce`, `setTimeout`, `addEventListener` are all higher-order.

---

## 09. Callback Functions

A function passed *into* another function to be called later.

```javascript
[1, 2, 3].forEach(item => console.log(item));   // arrow is the callback

setTimeout(() => console.log("done"), 1000);    // runs after 1s
```

The receiving function decides *when* and *with what* the callback runs — the basis of events, timers, and async code.

**Gotcha:** "Callback hell" = deeply nested callbacks. Promises / async-await solve this.

---

## 10. First-Class Functions

In JS, functions are **values** — like numbers or strings. You can:

```javascript
const f = () => "hi";        // store in a variable
const list = [f];            // put in an array
obj.method = f;              // attach to an object
function run(fn) { fn(); }   // pass as an argument
```

**Why it matters:** this property is *what makes* callbacks and higher-order functions possible.

---

## 11. Closures

A function **remembers the variables** from where it was created — even after that outer function has returned.

```javascript
function makeCounter() {
  let count = 0;            // private
  return () => ++count;
}
const counter = makeCounter();
counter();  // 1
counter();  // 2   ← count persists
```

- `count` is private — unreachable from outside.
- Each `makeCounter()` call gets a fresh, independent `count`.

**Classic bug:**
```javascript
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 3,3,3
for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 0,1,2
```
`let` creates a new binding each iteration; `var` shares one.

---

## 12. IIFE (Immediately Invoked Function Expression)

A function that runs the instant it is defined.

```javascript
(function () {
  console.log("runs immediately");
})();

(() => {
  const secret = 42;   // stays private to this block
})();
```

- Historically used to create a private scope and avoid polluting globals.
- Largely replaced by ES modules and block scoping (`let`/`const`), but still seen.

**Gotcha:** Needs the wrapping `()` — a bare `function(){}()` is a syntax error.

---

## 13. Recursion

A function that calls itself until it hits a **base case**.

```javascript
function factorial(n) {
  if (n <= 1) return 1;          // base case — stops the recursion
  return n * factorial(n - 1);   // recursive case
}
factorial(5);   // 120
```

Every recursion needs: (1) a base case, (2) progress toward it.

**Gotcha:** No base case (or never reaching it) → `Maximum call stack size exceeded`.

---

## 14. Pure Functions

A function that:
1. Returns the **same output** for the same input, and
2. Has **no side effects** (doesn't change outside state, DOM, files, globals).

```javascript
const add = (a, b) => a + b;            // PURE

let total = 0;
const addImpure = n => (total += n);    // IMPURE — mutates outside state
```

**Why it matters:** pure functions are predictable, testable, and cacheable. Core idea in React and functional programming.

---

## 15. Currying

Transforming a function of many arguments into a chain of single-argument functions.

```javascript
const add = a => b => c => a + b + c;
add(1)(2)(3);   // 6

const add5 = add(5);      // partially applied
add5(10)(20);             // 35
```

**Why it matters:** lets you pre-fill some arguments now and supply the rest later (reusable, configurable functions).

---

## 16. `this`, and call / apply / bind

`this` refers to *how a function is called*, not where it's defined (except arrow functions, which inherit `this`).

```javascript
const user = {
  name: "Sam",
  greet() { return `Hi, ${this.name}`; }
};
user.greet();   // "Hi, Sam"  → this = user
```

Control `this` manually:

```javascript
function greet() { return `Hi, ${this.name}`; }
const person = { name: "Ada" };

greet.call(person);        // "Hi, Ada"        — args listed individually
greet.apply(person);       // "Hi, Ada"        — args as an array
const bound = greet.bind(person);  // returns a NEW function with this fixed
bound();                   // "Hi, Ada"
```

- `call(thisArg, a, b)` — invoke now, args separate.
- `apply(thisArg, [a, b])` — invoke now, args in an array.
- `bind(thisArg)` — returns a new function for later.

**Gotcha:** Arrow functions ignore `call`/`apply`/`bind` for `this` — they always use the enclosing scope's `this`.

---

## Quick Mental Model

| Group | Topics | One-liner |
|-------|--------|-----------|
| Defining | Declaration, Expression, Arrow, IIFE | how you create a function |
| Arguments | Params/args, Default, Rest, Spread | how values flow in (`...` collects or expands) |
| Functions as values | Higher-order, Callback, First-class | functions can be passed & returned |
| Scope & memory | Closures | functions remember their birthplace |
| Patterns | Recursion, Pure, Currying | ways of structuring logic |
| Context | `this`, call/apply/bind | what `this` points to |

---

*When you're ready, ask me for coding questions and I'll give them in chat one at a time.*
