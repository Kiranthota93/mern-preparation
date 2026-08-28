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
