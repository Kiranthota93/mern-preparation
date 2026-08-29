/* =========================================================================
   EXPLANATIONS — read-only reference notes shown inside each topic drawer.
   Keyed by:  EXPLANATIONS[<topic name>][<subtopic label>] = HTML string.
   Labels MUST match the strings in the TIERS array in app.js exactly.
   Add more topics/subtopics here over time — the drawer picks them up
   automatically (a 📖 button appears only when an entry exists).
   ========================================================================= */
window.EXPLANATIONS = {

  /* ------------------------------------------------------------------ */
  "JavaScript fundamentals": {
    "JavaScript fundamentals overview":
      "<p><b>Simple definition:</b> JavaScript fundamentals are the core building blocks: variables, values, types, operators, scope, and control flow.</p>" +
      "<p><b>Technical definition:</b> These concepts define how JavaScript stores data, evaluates expressions, manages scope and hoisting, and controls execution.</p>" +
      "<p><b>Why it is used:</b> Without these basics, later topics such as functions, arrays, objects, async code, and React become much harder to reason about.</p>" +
      "<p><b>When to use:</b> Use these concepts whenever you read or write JavaScript, especially when choosing declarations, comparing values, or debugging logic.</p>" +
      "<p><b>When not to use:</b> Do not rely on loose equality or <code>var</code> when a safer pattern exists. Do not assume every value behaves the same under coercion.</p>" +
      "<p><b>How it works internally:</b> JavaScript creates execution contexts, resolves variable names through scope chains, and evaluates expressions using coercion rules when needed.</p>" +
      "<pre><code>let count = 0;\nif (count === 0) {\n  console.log('start');\n}</code></pre>" +
      "<p class='ex-gotcha'>These basics are the difference between code that works by accident and code you can debug with confidence.</p>",

    "var, let, const":
      "<p><b>Simple definition:</b> These are three ways to declare variables. They differ in scope and whether they can be reassigned.</p>" +
      "<p><b>Technical definition:</b> <code>var</code> is function-scoped, <code>let</code> is block-scoped and reassignable, and <code>const</code> is block-scoped and immutable by reassignment.</p>" +
      "<p><b>Why it is used:</b> They control lifetime and visibility of values. Modern JavaScript prefers <code>const</code> by default and <code>let</code> when reassignment is required.</p>" +
      "<p><b>When to use:</b> Use <code>const</code> for stable values, <code>let</code> for counters and toggles, and avoid <code>var</code> in modern code.</p>" +
      "<p><b>When not to use:</b> Do not use <code>var</code> for new code because it ignores block boundaries and creates confusing bugs.</p>" +
      "<pre><code>var a = 1;   // function-scoped, old style\nlet b = 2;   // block-scoped, reassignable\nconst c = 3; // block-scoped, no reassign</code></pre>" +
      "<p class='ex-gotcha'>Using <code>const</code> does not mean the value is frozen. <code>const arr = [1]; arr.push(2)</code> works because the array is mutated, not reassigned.</p>",

    "Primitive vs reference types":
      "<p><b>Simple definition:</b> Primitive values are copied by value, while objects and arrays are shared by reference.</p>" +
      "<p><b>Technical definition:</b> Primitives are stored directly in memory; objects, arrays, and functions store references to shared memory locations.</p>" +
      "<p><b>Why it is used:</b> This matters when you copy variables and mutate state, because two variables may refer to the same object.</p>" +
      "<p><b>When to use:</b> Use this knowledge when updating arrays, copying objects, and tracking source-of-truth state in React or Node applications.</p>" +
      "<p><b>When not to use:</b> Do not assume <code>const</code> protects nested object data from mutation; it only protects the binding, not the contents.</p>" +
      "<pre><code>let a = { x: 1 };\nlet b = a;\nb.x = 9;\nconsole.log(a.x); // 9</code></pre>" +
      "<p class='ex-gotcha'>Comparing objects checks identity, not contents, so <code>{} === {}</code> is <code>false</code>.</p>",

    "Type coercion":
      "<p><b>Simple definition:</b> Type coercion is JavaScript converting values into a different type during evaluation.</p>" +
      "<p><b>Technical definition:</b> JavaScript performs implicit conversion to satisfy operators like <code>+</code>, <code>-</code>, and comparison logic.</p>" +
      "<p><b>Why it is used:</b> It lets code be flexible, but it is one of the biggest causes of confusing bugs.</p>" +
      "<p><b>When to use:</b> You need to understand it when mixing strings, numbers, booleans, and objects in calculations or conditions.</p>" +
      "<p><b>When not to use:</b> Avoid relying on coercion in production code. Prefer explicit conversion with <code>Number()</code>, <code>String()</code>, or comparison operators you control.</p>" +
      "<pre><code>\"5\" + 1  // \"51\"\n\"5\" - 1  // 4\ntrue + 1 // 2</code></pre>" +
      "<p class='ex-gotcha'>The <code>+</code> operator concatenates when either side is a string, while other math operators usually force numeric conversion.</p>",

    "== vs ===":
      "<p><b>Simple definition:</b> <code>==</code> may convert types first; <code>===</code> compares both value and type without conversion.</p>" +
      "<p><b>Technical definition:</b> Loose equality uses coercion; strict equality compares both type and value and is usually the safer default in production code.</p>" +
      "<p><b>Why it is used:</b> It avoids accidental bugs from implicit conversions when comparing values.</p>" +
      "<p><b>When to use:</b> Use <code>===</code> most of the time. Use <code>== null</code> only for the common null/undefined check.</p>" +
      "<p><b>When not to use:</b> Do not use <code>==</code> for numeric, string, or boolean comparisons unless you deliberately want coercion.</p>" +
      "<pre><code>0 == \"\"    // true\n0 === \"\"   // false\n1 == \"1\"   // true\n1 === \"1\"  // false</code></pre>" +
      "<p class='ex-gotcha'>Loose comparison is convenient but risky. In JavaScript interviews, strict equality is usually the expected answer.</p>",

    "Truthy and falsy values":
      "<p><b>Simple definition:</b> Every value is either truthy or falsy when used in a condition.</p>" +
      "<p><b>Technical definition:</b> JavaScript converts a value to a Boolean as part of condition evaluation. The falsy set is fixed and everything else is truthy.</p>" +
      "<p><b>Why it is used:</b> If conditions, short-circuiting, and checks depend on this behavior.</p>" +
      "<p><b>When to use:</b> Understand it when writing conditionals, validation, and guards in API and UI logic.</p>" +
      "<p><b>When not to use:</b> Do not rely on truthiness for values where <code>0</code>, <code>\"\"</code>, or <code>false</code> have meaningful differences.</p>" +
      "<pre><code>// falsy values\nfalse, 0, -0, 0n, \"\", null, undefined, NaN\nif ([]) console.log('runs'); // true</code></pre>" +
      "<p class='ex-gotcha'>Empty arrays and objects are truthy, even though they may look empty. This often surprises beginners.</p>",

    "null vs undefined":
      "<p><b>Simple definition:</b> <code>null</code> means 'there is intentionally no value'; <code>undefined</code> means 'there is no value yet'.</p>" +
      "<p><b>Technical definition:</b> <code>undefined</code> is the default value for uninitialized variables and missing object properties; <code>null</code> is an explicit empty reference.</p>" +
      "<p><b>Why it is used:</b> Distinguishing them helps you understand missing data versus intentionally empty data.</p>" +
      "<p><b>When to use:</b> Use <code>null</code> when you want to say 'empty on purpose'; use <code>undefined</code> for uninitialized or missing values unless your API contract says otherwise.</p>" +
      "<p><b>When not to use:</b> Do not treat them as the same in strict comparisons. They are only loosely equal to each other.</p>" +
      "<pre><code>let x;\nlet y = null;\nconsole.log(x); // undefined\nconsole.log(y); // null</code></pre>" +
      "<p class='ex-gotcha'><code>null == undefined</code> is true, but <code>null === undefined</code> is false.</p>",

    "typeof":
      "<p><b>Simple definition:</b> <code>typeof</code> tells you the runtime type of a value as a string.</p>" +
      "<p><b>Technical definition:</b> It is an operator that returns a type label such as <code>'string'</code>, <code>'number'</code>, or <code>'object'</code>.</p>" +
      "<p><b>Why it is used:</b> It is helpful during debugging, validation, and type checks.</p>" +
      "<p><b>When to use:</b> Use it for quick debugging or dynamic code paths, but not as a full type-safe replacement for runtime validation.</p>" +
      "<p><b>When not to use:</b> Do not depend on it for array detection; arrays are objects, so <code>typeof []</code> is <code>'object'</code>.</p>" +
      "<pre><code>typeof 'hi'    // 'string'\ntypeof 42     // 'number'\ntypeof []     // 'object'\ntypeof null   // 'object'</code></pre>" +
      "<p class='ex-gotcha'>JavaScript's <code>typeof null</code> result is a historic bug that still exists for compatibility.</p>",

    "Scope":
      "<p><b>Simple definition:</b> Scope is where a variable is accessible in code.</p>" +
      "<p><b>Technical definition:</b> Scope determines the visibility and lifetime of bindings. JavaScript has global, function, and block scopes.</p>" +
      "<p><b>Why it is used:</b> It prevents naming collisions and controls which parts of code can read or modify a variable.</p>" +
      "<p><b>When to use:</b> Use it to understand why variables are visible in some places and not others.</p>" +
      "<p><b>When not to use:</b> Avoid unnecessarily creating global variables because they can leak across files and modules.</p>" +
      "<pre><code>function f() {\n  let inside = 1;\n  return inside;\n}\nconsole.log(f()); // 1</code></pre>" +
      "<p class='ex-gotcha'>Scope rules are the reason closures and callback bugs behave the way they do.</p>",

    "Global scope":
      "<p><b>Simple definition:</b> A global variable is one declared outside functions or blocks.</p>" +
      "<p><b>Technical definition:</b> It is accessible from the entire program or runtime environment, which makes it easy to reach but also risky to overwrite.</p>" +
      "<p><b>Why it is used:</b> Global state is sometimes necessary for configuration, but it should be used sparingly.</p>" +
      "<p><b>When to use:</b> Use it only for truly app-wide settings or constants. Avoid it for local logic or temporary state.</p>" +
      "<p><b>When not to use:</b> Do not bury business logic in global variables because they can be modified from anywhere and produce hard-to-debug bugs.</p>" +
      "<pre><code>const API_URL = 'https://api.example.com';\nconsole.log(API_URL);</code></pre>" +
      "<p class='ex-gotcha'>In browsers, <code>var</code> at the top level creates a property on <code>window</code>, while <code>let</code> and <code>const</code> do not.</p>",

    "Function scope":
      "<p><b>Simple definition:</b> Function scope means a variable is visible inside the function where it is declared.</p>" +
      "<p><b>Technical definition:</b> Variables declared with <code>var</code> are scoped to the nearest function body and ignore block boundaries.</p>" +
      "<p><b>Why it is used:</b> This is why older JavaScript code often has surprising bugs when variables bleed out of <code>if</code> or loop blocks.</p>" +
      "<p><b>When to use:</b> Recognize it when debugging legacy code and when working with older codebases.</p>" +
      "<p><b>When not to use:</b> Do not rely on it in modern code; prefer <code>let</code> or <code>const</code> for better block behavior.</p>" +
      "<pre><code>function f() {\n  if (true) {\n    var x = 1;\n  }\n  return x; // 1\n}</code></pre>" +
      "<p class='ex-gotcha'>This is the classic <code>var</code> trap: block scope is ignored, so a value can leak outside the block.</p>",

    "Block scope":
      "<p><b>Simple definition:</b> A block-scoped variable is only visible inside the surrounding braces.</p>" +
      "<p><b>Technical definition:</b> <code>let</code> and <code>const</code> are scoped to the nearest block, statement, or control structure.</p>" +
      "<p><b>Why it is used:</b> It reduces accidental variable reuse and makes code easier to reason about.</p>" +
      "<p><b>When to use:</b> Prefer block scope for variables that should not escape a loop or conditional.</p>" +
      "<p><b>When not to use:</b> Do not try to access a block-scoped variable outside its block; it will throw a ReferenceError.</p>" +
      "<pre><code>{\n  let a = 1;\n}\nconsole.log(a); // ReferenceError</code></pre>" +
      "<p class='ex-gotcha'>This is one of the main reasons modern JavaScript uses <code>let</code> and <code>const</code> instead of <code>var</code>.</p>",

    "Lexical scope":
      "<p><b>Simple definition:</b> Lexical scope means inner functions can access variables from the place where they were written.</p>" +
      "<p><b>Technical definition:</b> Scope is determined statically by the source structure, not dynamically by where a function is called.</p>" +
      "<p><b>Why it is used:</b> It is the foundation of closures and higher-order functions.</p>" +
      "<p><b>When to use:</b> Understand it when working with closures, callbacks, and factory functions in JavaScript.</p>" +
      "<p><b>When not to use:</b> Do not confuse lexical scope with dynamic execution order; they are related but not the same concept.</p>" +
      "<pre><code>function outer() {\n  const msg = 'hi';\n  return () => msg;\n}\nconsole.log(outer()()); // hi</code></pre>" +
      "<p class='ex-gotcha'>Lexical scope is why a nested function can still access outer variables even after the outer function returns.</p>",

    "Hoisting":
      "<p><b>Simple definition:</b> Hoisting is JavaScript moving declarations to the top of their scope before execution.</p>" +
      "<p><b>Technical definition:</b> The engine processes declarations before running the code, but initialization still happens in place.</p>" +
      "<p><b>Why it is used:</b> It explains why function declarations are callable before they appear in code and why <code>var</code> feels weird.</p>" +
      "<p><b>When to use:</b> Use this knowledge to explain confusing runtime behavior in interviews and debugging sessions.</p>" +
      "<p><b>When not to use:</b> Do not assume all declarations behave the same. <code>var</code>, function declarations, and <code>let</code>/<code>const</code> each hoist differently.</p>" +
      "<pre><code>console.log(a); // undefined\nvar a = 5;\nconsole.log(greet());\nfunction greet() { return 'hi'; }</code></pre>" +
      "<p class='ex-gotcha'>The declaration is hoisted, but the value is not initialized until assignment time. This is why <code>var</code> starts as <code>undefined</code>.</p>",

    "Temporal Dead Zone":
      "<p><b>Simple definition:</b> TDZ is the period before a <code>let</code> or <code>const</code> variable is initialized where it cannot be read.</p>" +
      "<p><b>Technical definition:</b> The variable exists in the scope but cannot be accessed until execution reaches its declaration line.</p>" +
      "<p><b>Why it is used:</b> It prevents accidental early access and catches bugs earlier than <code>var</code> does.</p>" +
      "<p><b>When to use:</b> It matters when you encounter ReferenceErrors for variables before their declarations.</p>" +
      "<p><b>When not to use:</b> Do not confuse TDZ with ordinary <code>undefined</code>. TDZ is an access error before initialization.</p>" +
      "<pre><code>console.log(b); // ReferenceError\nlet b = 5;</code></pre>" +
      "<p class='ex-gotcha'>TDZ is a key reason <code>let</code> and <code>const</code> are safer than <code>var</code>.</p>",

    "Execution context":
      "<p><b>Simple definition:</b> Execution context is the environment in which code runs, including its scope and <code>this</code> value.</p>" +
      "<p><b>Technical definition:</b> Each function call creates an execution context that contains local variables, arguments, and a link to the outer lexical environment.</p>" +
      "<p><b>Why it is used:</b> It explains scope, <code>this</code>, and how function calls behave.</p>" +
      "<p><b>When to use:</b> Use it when debugging <code>this</code> issues, closures, and stack behavior.</p>" +
      "<p><b>When not to use:</b> Do not confuse it with the call stack. The execution context is the object-like runtime state; the call stack is the stack of those states.</p>" +
      "<pre><code>function run() {\n  console.log(this);\n}\nrun();</code></pre>" +
      "<p class='ex-gotcha'>Execution context differs by call site; this is why method calls and plain function calls behave differently.</p>",

    "Call stack":
      "<p><b>Simple definition:</b> The call stack is the ordered list of active function calls.</p>" +
      "<p><b>Technical definition:</b> Each function call pushes a new frame onto the stack, and returning pops it off. A stack overflow happens when functions recurse without a base case.</p>" +
      "<p><b>Why it is used:</b> It explains how JavaScript keeps track of nested execution and why recursion can crash.</p>" +
      "<p><b>When to use:</b> Use it when analyzing recursion, async flow, or debugging stack overflow errors.</p>" +
      "<p><b>When not to use:</b> Do not confuse it with the event loop or microtask queue; those are different runtime structures.</p>" +
      "<pre><code>function recurse(n) {\n  if (n === 0) return;\n  recurse(n - 1);\n}\nrecurse(3);</code></pre>" +
      "<p class='ex-gotcha'>If recursion has no base case, the call stack grows until the runtime throws a stack overflow error.</p>",

    "Strict mode":
      "<p><b>Simple definition:</b> Strict mode makes JavaScript stricter and catches common mistakes earlier.</p>" +
      "<p><b>Technical definition:</b> Using <code>'use strict';</code> changes runtime semantics to prevent silent errors, reject insecure actions, and change <code>this</code> behavior in normal functions.</p>" +
      "<p><b>Why it is used:</b> It reduces bugs, especially with accidental globals and unsafe code patterns.</p>" +
      "<p><b>When to use:</b> Use it in scripts and modules where you want safer behavior and fewer silent failures.</p>" +
      "<p><b>When not to use:</b> You usually do not need to add it manually inside modern ES modules, because modules are already strict by default.</p>" +
      "<pre><code>\"use strict\";\nfunction f() {\n  this.x = 1;\n}\n// in strict mode, this is undefined in a plain call</code></pre>" +
      "<p class='ex-gotcha'>Strict mode turns silent errors into immediate exceptions, which is usually a good thing during debugging.</p>",
  },

  /* ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------ */
  "Functions": {
    "Function basics (overview)":
      "<p><b>Simple definition:</b> A function is a reusable block of code that performs a task and can be called repeatedly.</p>" +
      "<p><b>Technical definition:</b> In JavaScript, a function is a callable value with its own execution context, parameters, local scope, and optional return value.</p>" +
      "<p><b>Why it is used:</b> Functions avoid duplicate code, let you group behavior, and make logic reusable.</p>" +
      "<p><b>When to use:</b> Use functions when a task will run more than once or when logic needs to be isolated and named.</p>" +
      "<p><b>When not to use:</b> Do not create a small function for a single line of code unless it improves clarity and reuse.</p>" +
      "<p><b>How it works internally:</b> Each function call creates a new execution context, assigns arguments to parameters, runs the body, and then removes the frame from the call stack.</p>" +
      "<pre><code>function greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet(\"Ada\")); // Hello, Ada!</code></pre>" +
      "<p class='ex-gotcha'>Functions are not magic; they are just reusable units of work. The real difference between declaration, expression, and arrow syntax is mostly about hoisting and <code>this</code>.</p>",

    "Function declarations":
      "<p><b>Simple definition:</b> A function declaration is a named function created with the <code>function</code> keyword.</p>" +
      "<p><b>Technical definition:</b> It is hoisted and available in its scope before the line where it is written.</p>" +
      "<p><b>Why it is used:</b> Great for named utility logic and code that should be called from multiple places.</p>" +
      "<p><b>When not to use:</b> Avoid it when you want a function as a value in a variable, or when arrow functions are clearer.</p>" +
      "<pre><code>function greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet(\"Ada\"));</code></pre>" +
      "<p class='ex-gotcha'>Function declarations are hoisted, so they can be called before they appear in the file. This convenience is a classic interview topic.</p>",

    "Function expressions":
      "<p><b>Simple definition:</b> A function expression assigns a function to a variable.</p>" +
      "<p><b>Technical definition:</b> This creates a function as a value; it is not treated the same as a hoisted declaration.</p>" +
      "<p><b>Why it is used:</b> It is useful when functions should be passed around or created dynamically.</p>" +
      "<p><b>When not to use:</b> Do not call the function before the assignment is executed.</p>" +
      "<pre><code>const square = function (n) {\n  return n * n;\n};\nconsole.log(square(4)); // 16</code></pre>" +
      "<p class='ex-gotcha'>Calling a function expression before initialization throws a ReferenceError. That is why interviews often compare it with function declarations.</p>",

    "Arrow functions":
      "<p><b>Simple definition:</b> Arrow functions are a shorter way to write function expressions.</p>" +
      "<p><b>Technical definition:</b> They inherit <code>this</code> from the surrounding scope and do not have their own <code>arguments</code>.</p>" +
      "<p><b>Why it is used:</b> They are ideal for concise callbacks and array methods.</p>" +
      "<p><b>When not to use:</b> Avoid them when you need your own <code>this</code>, a constructor, or a prototype method.</p>" +
      "<pre><code>const double = n => n * 2;\nconst makeUser = id => ({ id });\nconsole.log(double(5)); // 10</code></pre>" +
      "<p class='ex-gotcha'>An arrow with braces is a block, not an implicit return. Use <code>() => ({ id })</code> to return an object.</p>",

    "Parameters and arguments":
      "<p><b>Simple definition:</b> Parameters are names in the function definition; arguments are values passed at call time.</p>" +
      "<p><b>Technical definition:</b> Parameters are local variables created by the function call; arguments are the actual values supplied to that call.</p>" +
      "<p><b>Why it is used:</b> They let the same function behave differently with different inputs.</p>" +
      "<p><b>When not to use:</b> Missing or unexpected arguments are common sources of bugs unless validated.</p>" +
      "<pre><code>function fullName(first, last) {\n  return `${first} ${last}`;\n}\nconsole.log(fullName(\"Ada\", \"Lovelace\"));</code></pre>" +
      "<p class='ex-gotcha'>Missing arguments become <code>undefined</code>. The <code>arguments</code> object is array-like, not a real array.</p>",

    "Default parameters":
      "<p><b>Simple definition:</b> Default parameters assign a fallback value when an argument is missing or <code>undefined</code>.</p>" +
      "<p><b>Technical definition:</b> They are evaluated at call time and provide a safer default input shape without repetitive guards.</p>" +
      "<p><b>Why it is used:</b> They simplify function APIs and reduce null/undefined checks.</p>" +
      "<p><b>When not to use:</b> Defaults do not apply to explicit <code>null</code> values, so handle those separately when needed.</p>" +
      "<pre><code>function multiply(a, b = 2) {\n  return a * b;\n}\nconsole.log(multiply(5)); // 10</code></pre>" +
      "<p class='ex-gotcha'>Passing <code>null</code> does not trigger the default. It is treated as a real value, not an omitted argument.</p>",

    "Rest parameters":
      "<p><b>Simple definition:</b> Rest parameters collect all remaining arguments into an array.</p>" +
      "<p><b>Technical definition:</b> A rest parameter uses <code>...</code> in the function definition and gathers extra arguments into a real array.</p>" +
      "<p><b>Why it is used:</b> It is ideal for functions accepting unknown numbers of values, like math or logging helpers.</p>" +
      "<p><b>When not to use:</b> Only one rest parameter is allowed, and it must be the last parameter.</p>" +
      "<pre><code>function sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // 10</code></pre>" +
      "<p class='ex-gotcha'>Rest is different from the <code>arguments</code> object: the rest parameter is a true array with array methods available.</p>",

    "Spread syntax":
      "<p><b>Simple definition:</b> Spread expands an array or object into smaller pieces.</p>" +
      "<p><b>Technical definition:</b> Spread uses <code>...</code> in a call or literal to expand collections into individual values.</p>" +
      "<p><b>Why it is used:</b> It is used for copying arrays, merging objects, and passing multiple values to functions.</p>" +
      "<p><b>When not to use:</b> Remember it is shallow; nested objects are still shared by reference.</p>" +
      "<pre><code>const merged = [...[1, 2], ...[3, 4]];\nconst user = { name: 'Ada' };\nconst copy = { ...user, age: 30 };\nconsole.log(merged); // [1, 2, 3, 4]</code></pre>" +
      "<p class='ex-gotcha'>Rest collects values; spread expands them. The same syntax behaves differently depending on context.</p>",

    "Higher-order functions":
      "<p><b>Simple definition:</b> A higher-order function either takes a function as an argument or returns one.</p>" +
      "<p><b>Technical definition:</b> It abstracts behavior and is central to functional programming techniques in JavaScript.</p>" +
      "<p><b>Why it is used:</b> APIs like <code>map</code>, <code>filter</code>, and <code>reduce</code> are built around this concept.</p>" +
      "<p><b>When not to use:</b> Do not make every function higher-order; only use it when abstraction adds clarity.</p>" +
      "<pre><code>function applyTwice(fn, value) {\n  return fn(fn(value));\n}\nconsole.log(applyTwice(n => n + 3, 0)); // 6</code></pre>" +
      "<p class='ex-gotcha'>Higher-order functions are powerful, but too much abstraction can make code harder to follow.</p>",

    "Callback functions":
      "<p><b>Simple definition:</b> A callback is a function passed into another function to be called later.</p>" +
      "<p><b>Technical definition:</b> The receiving function decides when to call the callback and with what arguments.</p>" +
      "<p><b>Why it is used:</b> Events, timers, promises, and array methods all rely on callbacks.</p>" +
      "<p><b>When not to use:</b> Deeply nested callbacks are hard to read; this is why promises and async/await became popular.</p>" +
      "<pre><code>[1, 2, 3].forEach(n => console.log(n));\nsetTimeout(() => console.log(\"done\"), 1000);</code></pre>" +
      "<p class='ex-gotcha'>Callbacks are the basis of async JavaScript, but callback-heavy code can quickly become difficult to debug.</p>",

    "First-class functions":
      "<p><b>Simple definition:</b> First-class functions are functions treated like values.</p>" +
      "<p><b>Technical definition:</b> In JavaScript, functions can be stored in variables, passed to other functions, and returned from functions.</p>" +
      "<p><b>Why it is used:</b> This is the foundation for callbacks, higher-order functions, and functional design.</p>" +
      "<p><b>When not to use:</b> You do not need to pass functions around everywhere; use the feature when it makes the code clearer.</p>" +
      "<pre><code>const list = [n => n + 1, n => n * 2];\nconsole.log(list.map(fn => fn(3))); // [4, 6]</code></pre>" +
      "<p class='ex-gotcha'>This capability is one of the biggest reasons JavaScript is so flexible and expressive.</p>",

    "Closures":
      "<p><b>Simple definition:</b> A closure is a function that remembers variables from the scope where it was created.</p>" +
      "<p><b>Technical definition:</b> A closure keeps access to its lexical environment even after the outer function has returned.</p>" +
      "<p><b>Why it is used:</b> Closures power private state, async behavior, and factory functions.</p>" +
      "<p><b>When not to use:</b> Watch for loop bugs when using <code>var</code> inside asynchronous callbacks.</p>" +
      "<pre><code>function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = makeCounter();\nconsole.log(c(), c()); // 1 2</code></pre>" +
      "<p class='ex-gotcha'>Closures are powerful but can create stale references if variables are shared unintentionally.</p>",

    "IIFE":
      "<p><b>Simple definition:</b> An IIFE runs immediately after it is defined.</p>" +
      "<p><b>Technical definition:</b> An Immediately Invoked Function Expression creates a scope boundary and executes once on definition.</p>" +
      "<p><b>Why it is used:</b> It was historically used to isolate state from the global scope.</p>" +
      "<p><b>When not to use:</b> Modern modules and block scope usually replace it, so it is not required in most modern code.</p>" +
      "<pre><code>(function () {\n  const secret = 42;\n  console.log(secret);\n})();</code></pre>" +
      "<p class='ex-gotcha'>A bare function expression must be wrapped in parentheses to make the syntax valid.</p>",

    "Pure vs impure functions":
      "<p><b>Simple definition:</b> Pure functions always return the same result for the same input and do not change outside state.</p>" +
      "<p><b>Technical definition:</b> Pure functions have no side effects and depend only on their arguments.</p>" +
      "<p><b>Why it is used:</b> They are easier to test, reason about, and optimize.</p>" +
      "<p><b>When not to use:</b> Impure functions are necessary when interacting with the DOM, timers, APIs, or global state.</p>" +
      "<pre><code>const add = (a, b) => a + b;\nlet total = 0;\nconst addToTotal = n => (total += n);</code></pre>" +
      "<p class='ex-gotcha'>Pure functions are the foundation of many React patterns and functional programming ideas.</p>",

    "Function composition":
      "<p><b>Simple definition:</b> Composition means combining small functions so the result of one becomes the input of another.</p>" +
      "<p><b>Technical definition:</b> It creates pipelines of transformations that are easy to reason about in small, readable steps.</p>" +
      "<p><b>Why it is used:</b> It is useful when code naturally flows through a sequence of transforms.</p>" +
      "<p><b>When not to use:</b> Avoid composition when a simple step-by-step function body is clearer.</p>" +
      "<pre><code>const compose = (f, g) => x => f(g(x));\nconst shout = compose(s => s + \"!\", s => s.toUpperCase());\nconsole.log(shout(\"hi\")); // HI!</code></pre>" +
      "<p class='ex-gotcha'>Composing too many small functions can become harder to debug than a plain function body.</p>",

    "Currying concept":
      "<p><b>Simple definition:</b> Currying turns one function with many arguments into a series of single-argument functions.</p>" +
      "<p><b>Technical definition:</b> Each call returns another function until all arguments have been supplied.</p>" +
      "<p><b>Why it is used:</b> It helps create reusable specialized functions by fixing arguments gradually.</p>" +
      "<p><b>When not to use:</b> Use it when argument flow is naturally stepwise; otherwise it may feel overengineered.</p>" +
      "<pre><code>const add = a => b => c => a + b + c;\nconsole.log(add(1)(2)(3)); // 6</code></pre>" +
      "<p class='ex-gotcha'>Currying is different from partial application. Currying fixes arguments one at a time; partial application can fix multiple arguments at once.</p>",

    "Partial application concept":
      "<p><b>Simple definition:</b> Partial application pre-fills some arguments so you can call the function later with the remaining ones.</p>" +
      "<p><b>Technical definition:</b> It creates a new function with some arguments already bound, while leaving the rest open.</p>" +
      "<p><b>Why it is used:</b> It helps create reusable helpers with fewer repetitive wrappers.</p>" +
      "<p><b>When not to use:</b> Avoid it when a direct wrapper function is more readable than an abstract pattern.</p>" +
      "<pre><code>const add = (a, b) => a + b;\nconst add10 = b => add(10, b);\nconsole.log(add10(5)); // 15</code></pre>" +
      "<p class='ex-gotcha'>Partial application is a practical pattern in libraries and APIs, but it should not hide obvious code behind unnecessary abstraction.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Arrays & modern data handling": {
    "Arrays & modern data handling overview":
      "<p><b>Simple definition:</b> Arrays are ordered collections of values, and modern array methods let you transform, filter, and summarize data cleanly.</p>" +
      "<p><b>Technical definition:</b> JavaScript arrays are objects with indexed properties, a length property, and a rich set of built-in methods for collection processing.</p>" +
      "<p><b>Why it is used:</b> Arrays are the default structure for lists in JavaScript: API results, UI rows, form values, and data pipelines often start as arrays.</p>" +
      "<p><b>When to use:</b> Use arrays when order matters, when you need to iterate through related values, or when you want to transform a collection without mutating source data.</p>" +
      "<p><b>When not to use:</b> For lookup-heavy data, prefer objects or Maps. For relational data, use arrays only for ordered collections, not as a replacement for structured databases.</p>" +
      "<p><b>How it works internally:</b> Array methods usually iterate over each element, call a callback when needed, and return either a new array or a single value. Many methods are higher-order functions.</p>" +
      "<pre><code>const scores = [88, 92, 75];\nconst doubled = scores.map(score => score * 2);\nconsole.log(doubled); // [176, 184, 150]</code></pre>" +
      "<p class='ex-gotcha'>The array API is powerful, but not every method is immutable. Some methods like <code>sort</code> and <code>splice</code> mutate the original array, so choose carefully.</p>",

    "map":
      "<p><b>Simple definition:</b> <code>map</code> transforms every item in an array and returns a new array of the same length.</p>" +
      "<p><b>Technical definition:</b> It is a higher-order array method that calls a callback for each element and collects the returned values.</p>" +
      "<p><b>Why it is used:</b> It is used for converting each item into a new form such as formatting, enrichment, or property projection.</p>" +
      "<p><b>When not to use:</b> Do not use <code>map</code> for side effects like logging or mutating values; use <code>forEach</code> or a loop for those cases.</p>" +
      "<pre><code>const prices = [10, 20, 30];\nconst taxed = prices.map(price => price * 1.18);\nconsole.log(taxed); // [11.8, 23.6, 35.4]</code></pre>" +
      "<p class='ex-gotcha'>A common mistake is using <code>map</code> when you really mean <code>forEach</code>. If you are not returning a value, you probably need a different method.</p>",

    "filter":
      "<p><b>Simple definition:</b> <code>filter</code> keeps only the items that match a condition.</p>" +
      "<p><b>Technical definition:</b> It returns a new array containing every element for which the callback evaluates to <code>true</code>.</p>" +
      "<p><b>Why it is used:</b> Use it when you need a subset of data based on rules such as active users, valid emails, or matching IDs.</p>" +
      "<p><b>When not to use:</b> Do not use it to mutate the original array or to trigger business actions; it is a data selection tool, not a side-effect runner.</p>" +
      "<pre><code>const numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens); // [2, 4]</code></pre>" +
      "<p class='ex-gotcha'>Filtering is not the same as reducing. It keeps items, while reduce combines them into one value.</p>",

    "reduce":
      "<p><b>Simple definition:</b> <code>reduce</code> combines an array into one value by repeatedly applying a function.</p>" +
      "<p><b>Technical definition:</b> It accepts an accumulator and a current value and returns a final result such as a number, object, string, or array.</p>" +
      "<p><b>Why it is used:</b> Reduce is used for totals, grouping, aggregation, and building new objects from arrays.</p>" +
      "<p><b>When not to use:</b> Avoid using it for very simple cases where <code>map</code> or <code>filter</code> are clearer. It is powerful but can become hard to read if overused.</p>" +
      "<pre><code>const total = [5, 10, 15].reduce((sum, n) => sum + n, 0);\nconsole.log(total); // 30</code></pre>" +
      "<p class='ex-gotcha'>The accumulator is the secret weapon in reduce. Forgetting the initial value often causes the first element to be skipped or type mismatches.</p>",

    "forEach":
      "<p><b>Simple definition:</b> <code>forEach</code> loops over an array and runs a callback for each item.</p>" +
      "<p><b>Technical definition:</b> It is designed for side-effecting iteration, such as rendering, logging, or updating external state.</p>" +
      "<p><b>Why it is used:</b> Use it when you want to act on each element without creating a new array.</p>" +
      "<p><b>When not to use:</b> Do not use <code>forEach</code> when you need a transformed array or a boolean result; use <code>map</code>, <code>filter</code>, or <code>some</code> instead.</p>" +
      "<pre><code>const names = ['Ada', 'Linus'];\nnames.forEach(name => console.log('Hello', name));</code></pre>" +
      "<p class='ex-gotcha'>Unlike <code>map</code>, <code>forEach</code> does not return a new array. It is about action, not transformation.</p>",

    "find":
      "<p><b>Simple definition:</b> <code>find</code> returns the first item that matches a condition.</p>" +
      "<p><b>Technical definition:</b> It stops at the first matching element and returns it, or <code>undefined</code> if nothing matches.</p>" +
      "<p><b>Why it is used:</b> It is useful when searching a list for one record by a rule, such as a user ID or a matching product name.</p>" +
      "<p><b>When not to use:</b> Do not use it when you need all matches; use <code>filter</code> instead.</p>" +
      "<pre><code>const users = [{ id: 1, name: 'Ada' }, { id: 2, name: 'Grace' }];\nconst user = users.find(u => u.id === 2);\nconsole.log(user.name); // Grace</code></pre>" +
      "<p class='ex-gotcha'>If you need the index instead of the value, use <code>findIndex</code>.</p>",

    "findIndex":
      "<p><b>Simple definition:</b> <code>findIndex</code> returns the index of the first matching item.</p>" +
      "<p><b>Technical definition:</b> It is like <code>find</code>, except it returns the position in the array rather than the item itself.</p>" +
      "<p><b>Why it is used:</b> It is helpful when you need to update, delete, or reorder an item by its index.</p>" +
      "<p><b>When not to use:</b> Do not use it when you need the user object itself; return the item value instead.</p>" +
      "<pre><code>const ids = [10, 20, 30];\nconsole.log(ids.findIndex(id => id === 20)); // 1</code></pre>" +
      "<p class='ex-gotcha'>If no item matches, <code>findIndex</code> returns <code>-1</code>, which is a common interview trap.</p>",

    "some":
      "<p><b>Simple definition:</b> <code>some</code> checks whether at least one item matches a condition.</p>" +
      "<p><b>Technical definition:</b> It returns <code>true</code> as soon as one callback result is truthy and then stops early.</p>" +
      "<p><b>Why it is used:</b> It is ideal for presence checks such as 'is any user admin?', or 'does any value exceed the limit?'.</p>" +
      "<p><b>When not to use:</b> Do not use it when you need all matches or a complete aggregated answer; use <code>every</code> or <code>filter</code> for that.</p>" +
      "<pre><code>const scores = [70, 90, 55];\nconsole.log(scores.some(score => score > 80)); // true</code></pre>" +
      "<p class='ex-gotcha'><code>some</code> stops at the first truthy result. This early exit is a useful performance optimization in many cases.</p>",

    "every":
      "<p><b>Simple definition:</b> <code>every</code> checks whether all items satisfy a condition.</p>" +
      "<p><b>Technical definition:</b> It returns <code>true</code> only if every callback result is truthy. It also stops early on the first false value.</p>" +
      "<p><b>Why it is used:</b> Use it to validate that all values meet a rule, like 'all fields are filled in' or 'all numbers are positive'.</p>" +
      "<p><b>When not to use:</b> Do not use it if you only need some match; use <code>some</code> instead.</p>" +
      "<pre><code>const ages = [20, 25, 30];\nconsole.log(ages.every(age => age >= 18)); // true</code></pre>" +
      "<p class='ex-gotcha'>An empty array returns <code>true</code> for <code>every</code>, because 'all items satisfy the condition' is vacuously true.</p>",

    "includes":
      "<p><b>Simple definition:</b> <code>includes</code> checks whether an array contains a given value.</p>" +
      "<p><b>Technical definition:</b> It compares values and returns <code>true</code> when a matching element is found, with an optional start index.</p>" +
      "<p><b>Why it is used:</b> It is common when checking membership, such as whether a role is allowed or whether an item is already in a cart.</p>" +
      "<p><b>When not to use:</b> Do not use it for deep object comparisons; it checks value equality, not structural equality.</p>" +
      "<pre><code>const roles = ['admin', 'editor'];\nconsole.log(roles.includes('editor')); // true</code></pre>" +
      "<p class='ex-gotcha'>For objects, <code>includes</code> will not find a similar object unless it is the same reference. Use <code>find</code> or a custom predicate for object matching.</p>",

    "sort":
      "<p><b>Simple definition:</b> <code>sort</code> arranges array items in order.</p>" +
      "<p><b>Technical definition:</b> It sorts the array in place, using string conversion by default unless a compare function is supplied.</p>" +
      "<p><b>Why it is used:</b> It is used for ordering lists such as scores, names, dates, and product results.</p>" +
      "<p><b>When not to use:</b> Do not rely on default <code>sort</code> for numeric values; it sorts strings first unless you provide a comparator.</p>" +
      "<pre><code>const nums = [30, 10, 20];\nconsole.log(nums.sort((a, b) => a - b)); // [10, 20, 30]</code></pre>" +
      "<p class='ex-gotcha'>The default sort order is based on strings, so <code>[10, 2, 1].sort()</code> can surprise you. A compare function fixes that.</p>",

    "slice":
      "<p><b>Simple definition:</b> <code>slice</code> copies a portion of an array without changing the original.</p>" +
      "<p><b>Technical definition:</b> It returns a shallow copy of the selected range and uses start/end indexes that are non-mutating.</p>" +
      "<p><b>Why it is used:</b> It is useful for pagination, previewing data, and copying arrays safely.</p>" +
      "<p><b>When not to use:</b> Do not use it when you want to remove elements from the original; use <code>splice</code> for that.</p>" +
      "<pre><code>const nums = [1, 2, 3, 4];\nconsole.log(nums.slice(1, 3)); // [2, 3]</code></pre>" +
      "<p class='ex-gotcha'>Unlike <code>splice</code>, <code>slice</code> does not mutate the array. This is a key difference in interviews.</p>",

    "splice":
      "<p><b>Simple definition:</b> <code>splice</code> changes an array by adding or removing items in place.</p>" +
      "<p><b>Technical definition:</b> It mutates the original array and returns the removed elements as a new array.</p>" +
      "<p><b>Why it is used:</b> It helps manage lists dynamically, such as removing selected items or inserting new values at a position.</p>" +
      "<p><b>When not to use:</b> Avoid it when you want an immutable workflow; <code>slice</code>, spread, and filter are safer options in modern code.</p>" +
      "<pre><code>const items = ['a', 'b', 'c'];\nitems.splice(1, 1, 'x');\nconsole.log(items); // ['a', 'x', 'c']</code></pre>" +
      "<p class='ex-gotcha'>A common mistake is to treat <code>splice</code> like a copy operation. It changes the source array.</p>",

    "flat":
      "<p><b>Simple definition:</b> <code>flat</code> flattens nested arrays by one level by default.</p>" +
      "<p><b>Technical definition:</b> It creates a new array with sub-array elements concatenated into the parent array to the specified depth.</p>" +
      "<p><b>Why it is used:</b> It is useful for data that has nested arrays from parsing or API responses.</p>" +
      "<p><b>When not to use:</b> Do not flatten too aggressively if you need to preserve nested structure; use a custom reduction when depth is unpredictable.</p>" +
      "<pre><code>const nested = [1, [2, 3], [4, [5]]];\nconsole.log(nested.flat(2)); // [1, 2, 3, 4, 5]</code></pre>" +
      "<p class='ex-gotcha'><code>flat</code> only goes as deep as you ask. With nesting beyond the depth, it preserves deeper arrays.</p>",

    "flatMap":
      "<p><b>Simple definition:</b> <code>flatMap</code> maps each element and flattens the result by one level.</p>" +
      "<p><b>Technical definition:</b> It combines the behavior of <code>map</code> and <code>flat</code> in a single pass.</p>" +
      "<p><b>Why it is used:</b> It is best when each element produces an array and you want to flatten those arrays into one list.</p>" +
      "<p><b>When not to use:</b> Avoid it when the transformed output is not array-shaped or when the callback is doing too much work.</p>" +
      "<pre><code>const words = ['Hi', 'there'];\nconsole.log(words.flatMap(word => word.split(''))); // ['H','i','t','h','e','r','e']</code></pre>" +
      "<p class='ex-gotcha'>It is very convenient, but if you need more control over shape and depth, a manual loop or reduce can be easier to read.</p>",

    "Array destructuring":
      "<p><b>Simple definition:</b> Array destructuring lets you unpack values from an array into variables.</p>" +
      "<p><b>Technical definition:</b> It uses patterns like <code>[first, second]</code> or <code>[a, ...rest]</code> to bind array elements to variables.</p>" +
      "<p><b>Why it is used:</b> It makes code cleaner when working with tuples, return values, and argument lists.</p>" +
      "<p><b>When not to use:</b> It is less clear when you are extracting deeply nested or poorly structured data. Use readability-first destructuring.</p>" +
      "<pre><code>const [first, second, ...others] = [1, 2, 3, 4];\nconsole.log(first, second, others); // 1 2 [3,4]</code></pre>" +
      "<p class='ex-gotcha'>Destructuring is shorthand, not magic. It only reads the pattern you define; the rest of the array can still be ignored intentionally.</p>",

    "Spread with arrays":
      "<p><b>Simple definition:</b> Array spread copies or combines array values into a new array.</p>" +
      "<p><b>Technical definition:</b> It expands an iterable into individual elements inside a literal, preserving the original arrays unchanged.</p>" +
      "<p><b>Why it is used:</b> It is common for cloning, concatenating, and creating updated lists without mutating source arrays.</p>" +
      "<p><b>When not to use:</b> Do not use it for deep cloning; nested objects remain shared by reference.</p>" +
      "<pre><code>const a = [1, 2];\nconst b = [...a, 3, 4];\nconsole.log(b); // [1, 2, 3, 4]</code></pre>" +
      "<p class='ex-gotcha'>Spread is great for immutability, but it is shallow. If an item is an object, that object is still the same reference.</p>",

    "Immutable array operations":
      "<p><b>Simple definition:</b> Immutable operations create a new array rather than changing the original.</p>" +
      "<p><b>Technical definition:</b> Functional programming patterns in JavaScript favor functions such as <code>map</code>, <code>filter</code>, and <code>slice</code> that keep existing state unchanged.</p>" +
      "<p><b>Why it is used:</b> Immutable updates make debugging easier and help React state updates stay predictable.</p>" +
      "<p><b>When not to use:</b> Do not force immutability where the original array is intentionally being mutated in a quick local algorithm; choose the simplest correct pattern.</p>" +
      "<pre><code>const original = [1, 2, 3];\nconst updated = original.map(n => n + 1);\nconsole.log(original); // [1, 2, 3]\nconsole.log(updated); // [2, 3, 4]</code></pre>" +
      "<p class='ex-gotcha'>Modern frameworks expect state updates to be predictable. Immutability is often the key to avoiding hard-to-debug bugs.</p>",

    "Shallow copying":
      "<p><b>Simple definition:</b> A shallow copy duplicates the top-level array, but nested objects inside it are still shared.</p>" +
      "<p><b>Technical definition:</b> Methods like <code>slice</code>, array spread, and <code>concat</code> create a new outer array but do not deep-clone nested references.</p>" +
      "<p><b>Why it is used:</b> It is enough when you only need a top-level copy for most list operations.</p>" +
      "<p><b>When not to use:</b> If nested objects are mutated, shallow copying is not enough. Use deep cloning or immutable nested updates instead.</p>" +
      "<pre><code>const people = [{ name: 'Ada' }];\nconst copied = [...people];\ncopy[0].name = 'Grace';\nconsole.log(people[0].name); // Grace</code></pre>" +
      "<p class='ex-gotcha'>This is a classic interview question: the outer array is new, but the inner object is not.</p>",

    "Deep copying":
      "<p><b>Simple definition:</b> A deep copy duplicates nested data, so changes to one copy do not affect the other.</p>" +
      "<p><b>Technical definition:</b> Deep cloning duplicates all nested objects and arrays recursively, which avoids shared references.</p>" +
      "<p><b>Why it is used:</b> It is useful for safe snapshots, forms, and data transforms that must not mutate the original object graph.</p>" +
      "<p><b>When not to use:</b> Do not deep clone when the data is huge or when you only need a shallow copy; it costs more memory and CPU.</p>" +
      "<pre><code>const original = [{ id: 1, tags: ['a'] }];\nconst copy = structuredClone(original);\ncopy[0].tags.push('b');\nconsole.log(original[0].tags); // ['a']</code></pre>" +
      "<p class='ex-gotcha'>Deep copy is safer but more expensive. In real code, you often want the smallest correct copy strategy, not a full recursive clone.</p>",
  },

};

/* =========================================================================
   CODING QUESTIONS — shown in the "Coding Questions" tab of the notebook.
   Keyed by topic name → array of { q, level, tag, a } (a = HTML answer).
   ========================================================================= */
window.QUESTIONS = {

  "JavaScript fundamentals": [
    { level: "easy", tag: "variables & const",
      q: "Will this throw? What does it log?<pre><code>const nums = [1,2,3];\nnums.push(4);\nconsole.log(nums);</code></pre>",
      a: "<p>No error → <code>[1,2,3,4]</code>. <code>const</code> only blocks <em>reassigning</em> <code>nums</code>; mutating the array is fine. It would throw only on <code>nums = [...]</code>.</p>" },
    { level: "easy", tag: "type coercion",
      q: "Predict each:<pre><code>\"5\" + 3;\n\"5\" - 3;\ntrue + true;</code></pre>",
      a: "<p><code>\"53\"</code> (+ concatenates with a string), <code>2</code> (- forces numbers), <code>2</code> (true → 1). Only <code>+</code> concatenates.</p>" },
    { level: "easy", tag: "== vs ===",
      q: "What does each print?<pre><code>0 == \"\";\n0 === \"\";\nnull == undefined;\nnull === undefined;</code></pre>",
      a: "<p><code>true, false, true, false</code>. <code>==</code> coerces; <code>===</code> needs same type. null/undefined are loosely equal only to each other.</p>" },
    { level: "medium", tag: "truthy / falsy",
      q: "Which blocks run?<pre><code>if ([])  log(\"A\");\nif (\"\")  log(\"B\");\nif (\"0\") log(\"C\");\nif (0)   log(\"D\");</code></pre>",
      a: "<p><b>A</b> and <b>C</b>. <code>[]</code> is truthy, <code>\"0\"</code> is a non-empty string → truthy. <code>\"\"</code> and <code>0</code> are falsy.</p>" },
    { level: "medium", tag: "nullish vs OR",
      q: "Difference here?<pre><code>const count = 0;\nconsole.log(count || 10);\nconsole.log(count ?? 10);</code></pre>",
      a: "<p><code>10</code> then <code>0</code>. <code>||</code> falls back on any falsy value (incl. 0); <code>??</code> only on null/undefined, so it keeps the valid 0.</p>" },
    { level: "medium", tag: "hoisting",
      q: "Predict output/error:<pre><code>console.log(a);\nvar a = 1;\nconsole.log(b);\nlet b = 2;</code></pre>",
      a: "<p>First: <code>undefined</code> (var hoisted, unassigned). Second: <code>ReferenceError</code> — <code>let b</code> is in the temporal dead zone.</p>" },
    { level: "medium", tag: "scope",
      q: "What logs?<pre><code>{\n  var x = 10;\n  let y = 20;\n}\nconsole.log(x);\nconsole.log(y);</code></pre>",
      a: "<p><code>10</code>, then <code>ReferenceError</code> on <code>y</code>. <code>var</code> leaks out of the block; <code>let</code> is confined to it.</p>" },
    { level: "medium", tag: "switch fall-through",
      q: "<code>result</code> when <code>x = 1</code>?<pre><code>let result = \"\";\nswitch (x) {\n  case 1: result += \"a\";\n  case 2: result += \"b\"; break;\n  case 3: result += \"c\";\n}</code></pre>",
      a: "<p><code>\"ab\"</code>. Case 1 has no <code>break</code>, so it falls through into case 2, which then breaks. Case 3 never runs.</p>" },
    { level: "medium", tag: "for...of vs for...in",
      q: "For <code>const arr = [\"a\",\"b\"]</code>:<pre><code>for (const v of arr) log(v);\nfor (const k in arr) log(k);</code></pre>",
      a: "<p><code>of</code> → values <code>\"a\",\"b\"</code>. <code>in</code> → keys/indexes <code>\"0\",\"1\"</code> (strings). Use <code>of</code> for array values.</p>" },
    { level: "hard", tag: "coercion combined",
      q: "Predict every line:<pre><code>1 + \"2\" + 3;\n1 + 2 + \"3\";\n\"5\" * \"2\";\nnull + 1;\nundefined + 1;</code></pre>",
      a: "<p><code>\"123\"</code> (left→right), <code>\"33\"</code> (1+2 first), <code>10</code> (* coerces), <code>1</code> (null→0), <code>NaN</code> (undefined→NaN).</p>" },
  ],

  "Functions": [
    { level: "easy", tag: "declaration vs expression",
      q: "Which call works, which throws?<pre><code>hi();\nbye();\nfunction hi() { log(\"hi\"); }\nconst bye = () => log(\"bye\");</code></pre>",
      a: "<p><code>hi()</code> works (declarations are hoisted). <code>bye()</code> throws — the arrow is a <code>const</code> expression, not hoisted.</p>" },
    { level: "easy", tag: "arrow returning object",
      q: "Why <code>undefined</code>, and the fix?<pre><code>const make = id => { id: id };\nconsole.log(make(5));</code></pre>",
      a: "<p><code>{ }</code> is read as a function body, so nothing returns. Fix: wrap the object in parens → <code>id => ({ id })</code>.</p>" },
    { level: "easy", tag: "default parameters",
      q: "Predict:<pre><code>function f(a, b = 10) { return a + b; }\nf(5);\nf(5, 2);\nf(5, undefined);</code></pre>",
      a: "<p><code>15, 7, 15</code>. Passing <code>undefined</code> still triggers the default; <code>null</code> would not (→ 5).</p>" },
    { level: "easy", tag: "rest parameters",
      q: "Write <code>max(...nums)</code> returning the largest argument.",
      a: "<pre><code>function max(...nums) {\n  return Math.max(...nums);\n}\nmax(3, 9, 2); // 9</code></pre><p>Rest collects into an array; spread expands it back for <code>Math.max</code>.</p>" },
    { level: "medium", tag: "higher-order",
      q: "Write <code>applyTwice(fn, x)</code>. What is <code>applyTwice(n => n*2, 3)</code>?",
      a: "<pre><code>const applyTwice = (fn, x) => fn(fn(x));\napplyTwice(n => n*2, 3); // 12</code></pre>" },
    { level: "medium", tag: "callbacks & map",
      q: "Implement your own <code>myMap(arr, cb)</code> like <code>Array.map</code>.",
      a: "<pre><code>function myMap(arr, cb) {\n  const out = [];\n  for (let i = 0; i < arr.length; i++)\n    out.push(cb(arr[i], i, arr));\n  return out;\n}</code></pre>" },
    { level: "medium", tag: "closures",
      q: "Write <code>makeCounter()</code> with a private count; show two counters are independent.",
      a: "<pre><code>function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst a = makeCounter(), b = makeCounter();\na(); a(); // 1, 2\nb();      // 1 — independent</code></pre>" },
    { level: "medium", tag: "closure loop bug",
      q: "What prints, and how to get 0,1,2?<pre><code>for (var i = 0; i < 3; i++) {\n  setTimeout(() => log(i), 0);\n}</code></pre>",
      a: "<p>Prints <code>3, 3, 3</code> — all callbacks share one <code>var i</code>. Fix: use <code>let i</code> (a new binding per iteration) → <code>0, 1, 2</code>.</p>" },
    { level: "medium", tag: "recursion",
      q: "Write recursive <code>factorial(n)</code>. What is <code>factorial(4)</code>?",
      a: "<pre><code>function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nfactorial(4); // 24</code></pre>" },
    { level: "medium", tag: "pure vs impure",
      q: "Which is pure and why?<pre><code>// A\nconst addTax = p => p * 1.1;\n// B\nlet rate = 1.1;\nconst addTax2 = p => p * rate;</code></pre>",
      a: "<p><b>A is pure</b> — same input, same output, no outside dependency. <b>B</b> reads external <code>rate</code>, so its result can change without its input changing.</p>" },
    { level: "hard", tag: "currying",
      q: "Write curried <code>add(a)(b)(c)</code>, then make <code>add10</code> that fixes the first number at 10.",
      a: "<pre><code>const add = a => b => c => a + b + c;\nadd(1)(2)(3); // 6\nconst add10 = add(10);\nadd10(5)(5);  // 20</code></pre>" },
    { level: "hard", tag: "this & bind",
      q: "Why <code>undefined</code>, and fix it two ways?<pre><code>const user = {\n  name: \"Ada\",\n  greet() {\n    setTimeout(function () {\n      console.log(this.name);\n    }, 100);\n  }\n};\nuser.greet();</code></pre>",
      a: "<p>The plain callback has its own <code>this</code> (not <code>user</code>) → <code>undefined</code>.</p><p><b>Fix 1 — arrow</b> (inherits this):</p><pre><code>setTimeout(() => console.log(this.name), 100);</code></pre><p><b>Fix 2 — bind:</b></p><pre><code>setTimeout(function () {\n  console.log(this.name);\n}.bind(this), 100);</code></pre>" },
  ],

};
