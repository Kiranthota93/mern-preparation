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
    "var, let, const":
      "<p>Three ways to declare a variable, differing in <b>scope</b> and reassignment.</p>" +
      "<pre><code>var a = 1;   // function-scoped, old style\nlet b = 2;   // block-scoped, reassignable\nconst c = 3; // block-scoped, no reassign</code></pre>" +
      "<p class='ex-gotcha'>Use <code>const</code> by default. <code>const arr=[1]; arr.push(2)</code> works — you mutated, didn't reassign.</p>",

    "Primitive vs reference types":
      "<p><b>Primitives</b> (string, number, boolean, null, undefined, bigint, symbol) are copied <em>by value</em>. <b>Objects/arrays/functions</b> are copied <em>by reference</em> — the variable holds a pointer.</p>" +
      "<pre><code>let a = {x:1}; let b = a;\nb.x = 9;  // a.x is now 9 too — same object</code></pre>" +
      "<p class='ex-gotcha'>Comparing objects checks identity, not contents: <code>{}==={}</code> is <code>false</code>.</p>",

    "Type coercion":
      "<p>JS auto-converts types when you mix them.</p>" +
      "<pre><code>\"5\" + 1  // \"51\"  (number → string)\n\"5\" - 1  // 4     (string → number)\ntrue + 1 // 2</code></pre>" +
      "<p class='ex-gotcha'><code>+</code> concatenates if <em>either</em> side is a string; every other math operator forces numbers.</p>",

    "== vs ===":
      "<p><code>==</code> compares after coercing types; <code>===</code> requires same value <em>and</em> type.</p>" +
      "<pre><code>0 == \"\"   // true\n0 === \"\"  // false\n1 == \"1\"  // true</code></pre>" +
      "<p class='ex-gotcha'>Always use <code>===</code>. Exception: <code>x == null</code> conveniently checks null AND undefined.</p>",

    "Truthy and falsy values":
      "<p>Every value is truthy or falsy in a condition. Memorize the falsy list; everything else is truthy.</p>" +
      "<pre><code>// 8 falsy values:\nfalse, 0, -0, 0n, \"\", null, undefined, NaN</code></pre>" +
      "<p class='ex-gotcha'>Empty array <code>[]</code> and empty object <code>{}</code> are <b>truthy</b>.</p>",

    "null vs undefined":
      "<p><code>undefined</code> = declared but not assigned (JS gives it). <code>null</code> = intentional empty value (you assign it).</p>" +
      "<pre><code>let x;         // undefined\nlet y = null;  // deliberately empty</code></pre>" +
      "<p class='ex-gotcha'><code>null == undefined</code> is true, but <code>null === undefined</code> is false.</p>",

    "typeof":
      "<p>Operator returning a type string.</p>" +
      "<pre><code>typeof \"hi\"  // \"string\"\ntypeof 42    // \"number\"\ntypeof []    // \"object\"\ntypeof null  // \"object\" ← historic bug</code></pre>" +
      "<p class='ex-gotcha'><code>typeof function(){}</code> is <code>\"function\"</code>, but <code>typeof []</code> is <code>\"object\"</code> — use <code>Array.isArray()</code> for arrays.</p>",

    "Scope":
      "<p>Scope = where a variable is accessible. JS has global, function, and block scope.</p>" +
      "<pre><code>function f() {\n  let inside = 1; // only visible in f\n}</code></pre>",

    "Global scope":
      "<p>Variables declared outside any function/block. Accessible everywhere; overusing globals causes name clashes and bugs.</p>" +
      "<p class='ex-gotcha'>In browsers, <code>var</code> globals attach to <code>window</code>; <code>let</code>/<code>const</code> do not.</p>",

    "Function scope":
      "<p><code>var</code> is limited to the function it's declared in — it ignores blocks like <code>if</code>/<code>for</code>.</p>" +
      "<pre><code>function f() {\n  if (true) { var x = 1; }\n  return x; // 1 — var leaked out of the block\n}</code></pre>",

    "Block scope":
      "<p><code>let</code>/<code>const</code> are confined to the nearest <code>{ }</code> block.</p>" +
      "<pre><code>{ let a = 1; }\nconsole.log(a); // ReferenceError</code></pre>" +
      "<p class='ex-gotcha'>This is why <code>let</code>/<code>const</code> are safer than <code>var</code>.</p>",

    "Lexical scope":
      "<p>Inner functions can access variables from the scope where they were <em>written</em> (not where they're called). This is the basis of closures.</p>" +
      "<pre><code>function outer() {\n  const msg = \"hi\";\n  return () => msg; // sees msg lexically\n}</code></pre>",

    "Hoisting":
      "<p>Declarations are processed before code runs. <code>function</code> declarations are fully hoisted; <code>var</code> is hoisted as <code>undefined</code>; <code>let</code>/<code>const</code> are hoisted but uninitialized (TDZ).</p>" +
      "<pre><code>console.log(a); // undefined\nvar a = 5;</code></pre>",

    "Temporal Dead Zone":
      "<p>The gap between a <code>let</code>/<code>const</code> being hoisted and its declaration line. Accessing it there throws.</p>" +
      "<pre><code>console.log(b); // ReferenceError (TDZ)\nlet b = 5;</code></pre>" +
      "<p class='ex-gotcha'>Unlike <code>var</code> (undefined), touching a <code>let</code> early is an error, not undefined.</p>",

    "Execution context":
      "<p>The environment a piece of code runs in — it holds the variable scope, the value of <code>this</code>, and a reference to the outer scope. A new one is created for every function call.</p>",

    "Call stack":
      "<p>The stack of execution contexts. Calling a function pushes a frame; returning pops it. When it overflows (e.g. infinite recursion) you get <code>Maximum call stack size exceeded</code>.</p>",

    "Strict mode":
      "<p><code>\"use strict\"</code> opts into safer semantics: no accidental globals, throws on bad assignments, <code>this</code> is <code>undefined</code> in plain function calls.</p>" +
      "<pre><code>\"use strict\";\nx = 5; // ReferenceError instead of a silent global</code></pre>" +
      "<p class='ex-gotcha'>ES modules and class bodies are in strict mode automatically.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Functions": {
    "Function declarations":
      "<p>A named function created with the <code>function</code> keyword. Fully <b>hoisted</b> — callable before its line.</p>" +
      "<pre><code>function greet(name) {\n  return `Hello, ${name}!`;\n}</code></pre>",

    "Function expressions":
      "<p>A function assigned to a variable (often anonymous). <b>Not hoisted</b> — usable only after its line.</p>" +
      "<pre><code>const square = function (n) { return n * n; };</code></pre>",

    "Arrow functions":
      "<p>Short ES6 syntax. No own <code>this</code> (inherits from surrounding scope), no <code>arguments</code>, can't be a constructor.</p>" +
      "<pre><code>const double = n => n * 2;\nconst makeUser = id => ({ id }); // object needs ()</code></pre>" +
      "<p class='ex-gotcha'><code>id => { id }</code> returns undefined (that's a block). Wrap objects in <code>()</code>.</p>",

    "Parameters and arguments":
      "<p><b>Parameters</b> = names in the definition; <b>arguments</b> = values passed in. Missing args are <code>undefined</code>.</p>" +
      "<pre><code>function fullName(first, last) { return `${first} ${last}`; }\nfullName(\"Ada\", \"Lovelace\");</code></pre>" +
      "<p class='ex-gotcha'>The <code>arguments</code> object is array-<em>like</em>, not a real array (arrows lack it entirely).</p>",

    "Default parameters":
      "<p>A fallback value used when the argument is missing or <code>undefined</code>.</p>" +
      "<pre><code>function multiply(a, b = 2) { return a * b; }\nmultiply(5); // 10</code></pre>" +
      "<p class='ex-gotcha'>Triggers on <code>undefined</code> but not <code>null</code> — <code>multiply(5, null)</code> is 0.</p>",

    "Rest parameters":
      "<p>Collects any number of remaining args into a <b>real array</b> with <code>...</code>. Must be last.</p>" +
      "<pre><code>function sum(...nums) { return nums.reduce((t,n)=>t+n, 0); }\nsum(1,2,3,4); // 10</code></pre>",

    "Spread syntax":
      "<p>Same <code>...</code>, but it <em>expands</em> an array/object into pieces (rest collects, spread expands).</p>" +
      "<pre><code>[...[1,2], ...[3,4]]   // [1,2,3,4]\n{ ...user, age: 30 }   // copy + override\nMath.max(...[4,9,2])   // 9</code></pre>" +
      "<p class='ex-gotcha'>Spread makes a <b>shallow</b> copy — nested objects stay shared.</p>",

    "Higher-order functions":
      "<p>A function that takes and/or returns another function. <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>setTimeout</code> are examples.</p>" +
      "<pre><code>const applyTwice = (fn, x) => fn(fn(x));\napplyTwice(n => n + 3, 0); // 6</code></pre>",

    "Callback functions":
      "<p>A function passed into another to be called later — the basis of events, timers, and async code.</p>" +
      "<pre><code>[1,2,3].forEach(n => console.log(n));\nsetTimeout(() => console.log(\"done\"), 1000);</code></pre>" +
      "<p class='ex-gotcha'>Deeply nested callbacks = \"callback hell\"; promises/async-await fix it.</p>",

    "First-class functions":
      "<p>Functions are <b>values</b> — store them in variables/arrays, pass them, return them. This is what makes callbacks and HOFs possible.</p>" +
      "<pre><code>const list = [n => n + 1, n => n * 2];\nlist.map(fn => fn(3)); // [4, 6]</code></pre>",

    "Closures":
      "<p>A function <b>remembers variables</b> from where it was created, even after that outer function returned.</p>" +
      "<pre><code>function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = makeCounter(); c(); c(); // 1, 2</code></pre>" +
      "<p class='ex-gotcha'>Loop bug: <code>var</code> shares one binding (3,3,3); <code>let</code> makes a new one each pass (0,1,2).</p>",

    "IIFE":
      "<p>Immediately Invoked Function Expression — runs the instant it's defined, creating a private scope.</p>" +
      "<pre><code>(function () { /* runs now */ })();\n(() => { const secret = 42; })();</code></pre>" +
      "<p class='ex-gotcha'>Needs the wrapping <code>()</code>. Mostly replaced by ES modules today.</p>",

    "Pure vs impure functions":
      "<p><b>Pure:</b> same input → same output, no side effects. <b>Impure:</b> depends on or changes outside state.</p>" +
      "<pre><code>const add = (a,b) => a + b;        // pure\nlet t = 0; const addT = n => t += n; // impure</code></pre>" +
      "<p class='ex-gotcha'>Pure functions are predictable, testable, and cacheable — core to React.</p>",

    "Function composition":
      "<p>Combining small functions so the output of one feeds the next.</p>" +
      "<pre><code>const compose = (f, g) => x => f(g(x));\nconst shout = compose(s => s + \"!\", s => s.toUpperCase());\nshout(\"hi\"); // \"HI!\"</code></pre>",

    "Currying concept":
      "<p>Turning a multi-arg function into a chain of single-arg functions.</p>" +
      "<pre><code>const add = a => b => c => a + b + c;\nadd(1)(2)(3); // 6</code></pre>",

    "Partial application concept":
      "<p>Pre-filling <em>some</em> arguments now, supplying the rest later — producing a more specific reusable function.</p>" +
      "<pre><code>const add = (a, b) => a + b;\nconst add10 = add.bind(null, 10);\nadd10(5); // 15</code></pre>" +
      "<p class='ex-gotcha'>Currying = one arg at a time; partial application = fix any number at once.</p>",
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
