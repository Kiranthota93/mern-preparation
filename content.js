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
      "<p><b>Simple meaning:</b> JavaScript fundamentals are the core building blocks: variables, values, types, operators, scope, and control flow.</p>" +
      "<p><b>Think of it as:</b> the alphabet and grammar of the language — before you can write sentences (functions, apps), you need to know how words (values), spelling rules (types), and sentence structure (scope, control flow) work.</p>" +
      "<p><b>Why it exists:</b> without a shared, well-defined set of rules for storing data and evaluating expressions, no two lines of code could reliably talk to each other.</p>" +
      "<p><b>How it works:</b> JavaScript creates execution contexts, resolves variable names by walking outward through scope chains, and evaluates expressions using coercion rules when types don't match.</p>" +
      "<pre><code>let count = 0;\nif (count === 0) {\n  console.log('start');\n}</code></pre>" +
      "<p><b>What happens:</b> <code>count</code> is declared and assigned <code>0</code>. The <code>if</code> condition evaluates <code>count === 0</code> — a strict comparison, no coercion — which is <code>true</code>, so the block runs.</p>" +
      "<p><b>Result:</b> logs <code>'start'</code>. Nothing is returned — this is a statement, not an expression.</p>" +
      "<p><b>Important rule:</b> every later topic (functions, arrays, objects, async, React) is built on these fundamentals — a shaky grasp here causes confusing bugs everywhere else.</p>" +
      "<p><b>When to use:</b> constantly — every line of JavaScript you write or read touches variables, types, scope, or control flow.</p>" +
      "<p><b>When not to use:</b> n/a — this isn't an optional tool, it's the baseline. The judgment calls are in the specific choices (which declaration, which comparison), covered by each entry below.</p>" +
      "<p class='ex-gotcha'>These basics are the difference between code that works by accident and code you can debug with confidence.</p>",

    "var, let, const":
      "<p><b>Simple meaning:</b> Three ways to declare a variable. They differ in scope (where it's visible) and mutability (whether you can reassign it).</p>" +
      "<p><b>Think of it as:</b> three containers with different rules — <code>var</code> is a leaky box that spills past the room it's in, <code>let</code> is a sealed box you can swap the contents of, <code>const</code> is a sealed, labeled box you can't swap.</p>" +
      "<p><b>Why it exists:</b> early JavaScript only had <code>var</code>, and its function-only scoping caused real bugs (see \"Function scope\"). ES6 added <code>let</code>/<code>const</code> specifically to fix that.</p>" +
      "<p><b>How it works:</b> <code>var</code> is scoped to the nearest function (or global, if outside any function) and is hoisted as <code>undefined</code>. <code>let</code>/<code>const</code> are scoped to the nearest <code>{ }</code> block and live in a Temporal Dead Zone until their line runs.</p>" +
      "<pre><code>var a = 1;   // function-scoped, old style\nlet b = 2;   // block-scoped, reassignable\nconst c = 3; // block-scoped, no reassign\n\nconst arr = [1];\narr.push(2); // allowed — mutating, not reassigning\nconsole.log(arr); // [1, 2]</code></pre>" +
      "<p><b>What happens:</b> the first three lines declare one variable each, in three different ways. The last three show that <code>const</code> blocks <em>reassigning</em> <code>arr</code> to a new value, but does nothing to stop you mutating the array <code>arr</code> already points to.</p>" +
      "<p><b>Result:</b> <code>arr</code> becomes <code>[1, 2]</code> — the push succeeded because <code>const</code> only locks the <em>binding</em> (the name-to-value link), not the value's contents.</p>" +
      "<p><b>Important rule:</b> <code>const</code> means \"this name will always point to the same thing\" — not \"this value can never change.\"</p>" +
      "<p><b>Don't confuse it with:</b> immutability. A frozen object (<code>Object.freeze</code>) is actually protected from change; a <code>const</code> object is not.</p>" +
      "<p><b>When to use:</b> default to <code>const</code>. Use <code>let</code> only when you know the variable must be reassigned (loop counters, accumulators, toggles).</p>" +
      "<p><b>When not to use:</b> avoid <code>var</code> in new code — its function-scoping and silent redeclaration allow bugs that <code>let</code>/<code>const</code> catch immediately.</p>" +
      "<p class='ex-gotcha'>Using <code>const</code> does not mean the value is frozen. <code>const arr = [1]; arr.push(2)</code> works because the array is mutated, not reassigned.</p>",

    "Primitive vs reference types":
      "<p><b>Simple meaning:</b> Primitive values are copied by value; objects and arrays are shared by reference.</p>" +
      "<p><b>Think of it as:</b> a primitive is like writing a number on a sticky note and handing someone a copy — they can scribble on their copy without touching yours. An object is like handing someone the key to your house — now you both have access to the exact same rooms.</p>" +
      "<p><b>Why it exists:</b> copying every object on every assignment would be slow and wasteful for large data structures, so JavaScript stores objects once in memory and passes around references (pointers) to that single copy.</p>" +
      "<p><b>How it works:</b> primitives (string, number, boolean, null, undefined, symbol, bigint) are stored directly in the variable. Objects, arrays, and functions store a reference — the variable itself holds a pointer to a shared location in memory.</p>" +
      "<pre><code>let x = 5;\nlet y = x;\ny = 9;\nconsole.log(x); // 5 — untouched, x and y are independent\n\nlet a = { x: 1 };\nlet b = a;\nb.x = 9;\nconsole.log(a.x); // 9 — a and b point at the SAME object</code></pre>" +
      "<p><b>What happens:</b> in the first block, <code>y = x</code> copies the number <code>5</code>; reassigning <code>y</code> can't affect <code>x</code>. In the second, <code>b = a</code> copies the <em>reference</em>, not the object — <code>a</code> and <code>b</code> now both point at one shared object.</p>" +
      "<p><b>Result:</b> <code>x</code> stays <code>5</code>; <code>a.x</code> becomes <code>9</code> even though only <code>b</code> was mutated.</p>" +
      "<p><b>Important rule:</b> assigning an object to a new variable never copies it — it copies the pointer. To get an independent copy, you must explicitly copy the object (spread, <code>structuredClone</code>, etc.).</p>" +
      "<p><b>Don't confuse it with:</b> <code>const</code> — <code>const b = a</code> still lets you mutate what <code>b</code> points to; <code>const</code> only blocks reassigning <code>b</code> itself.</p>" +
      "<p><b>When to use:</b> keep this model in mind any time you copy, pass, or store an object/array — especially before mutating it.</p>" +
      "<p><b>When not to use:</b> don't assume <code>const</code> or a simple <code>=</code> assignment protects nested data from mutation; it protects only the variable binding.</p>" +
      "<p class='ex-gotcha'>Comparing objects checks identity, not contents, so <code>{} === {}</code> is <code>false</code> — two separately created empty objects are never equal.</p>",

    "Type coercion":
      "<p><b>Simple meaning:</b> JavaScript automatically converting a value from one type to another so an operation can proceed.</p>" +
      "<p><b>Think of it as:</b> JavaScript trying to be helpful by guessing what you meant when you mix types — like adding \"5\" apples and 1 orange and getting a nonsensical \"51\" instead of an error.</p>" +
      "<p><b>Why it exists:</b> JavaScript was designed to never throw a type error for basic operators — it always tries to produce <em>some</em> result, converting types as needed to make that possible.</p>" +
      "<p><b>How it works:</b> the <code>+</code> operator concatenates as a string if <em>either</em> side is a string; every other math operator (<code>-</code>, <code>*</code>, <code>/</code>) forces both sides to numbers first.</p>" +
      "<pre><code>\"5\" + 1   // \"51\" — number 1 converted to string, then concatenated\n\"5\" - 1   // 4    — string \"5\" converted to number, then subtracted\ntrue + 1  // 2    — true converted to 1</code></pre>" +
      "<p><b>What happens:</b> each line mixes types. <code>+</code> checks: is either operand a string? Yes → convert the other to a string and concatenate. The other operators always coerce toward numbers.</p>" +
      "<p><b>Result:</b> a string (<code>\"51\"</code>) in the first case, numbers (<code>4</code>, <code>2</code>) in the other two — same-looking operators, different outcomes based purely on <code>+</code>'s special string-preferring rule.</p>" +
      "<p><b>Important rule:</b> <code>+</code> is the odd one out — it prefers strings; every other arithmetic operator prefers numbers.</p>" +
      "<p><b>When to use:</b> understanding coercion matters whenever you mix strings, numbers, and booleans in a calculation or condition, even by accident.</p>" +
      "<p><b>When not to use:</b> don't rely on coercion deliberately in real code — prefer explicit conversion (<code>Number(x)</code>, <code>String(x)</code>) so the intent is visible and predictable.</p>" +
      "<p class='ex-gotcha'>The <code>+</code> operator concatenates when either side is a string, while other math operators force numeric conversion — this asymmetry is the root of most coercion bugs.</p>",

    "== vs ===":
      "<p><b>Simple meaning:</b> <code>==</code> compares after converting types if needed; <code>===</code> requires the same type <em>and</em> value, with no conversion.</p>" +
      "<p><b>Think of it as:</b> <code>===</code> asks \"are these identical twins?\" (same type, same value); <code>==</code> asks the looser \"do these basically mean the same thing?\" and will convert one side to make that true.</p>" +
      "<p><b>Why it exists:</b> <code>==</code> is a holdover from JavaScript's early design, meant to make comparisons forgiving; <code>===</code> was always available as the strict, predictable alternative and is now the recommended default.</p>" +
      "<p><b>How it works:</b> <code>===</code> returns <code>false</code> immediately if the types differ. <code>==</code> instead runs a type-coercion algorithm first (converting one or both sides) before comparing.</p>" +
      "<pre><code>0 == \"\"    // true  — \"\" coerces to 0\n0 === \"\"   // false — different types, no coercion\n1 == \"1\"   // true  — \"1\" coerces to 1\n1 === \"1\"  // false</code></pre>" +
      "<p><b>What happens:</b> each <code>==</code> line has JavaScript first convert the string operand to a number, then compare; each <code>===</code> line stops at the type check and returns <code>false</code> without even looking at the values.</p>" +
      "<p><b>Result:</b> a boolean each time — but the same pair of values gives opposite answers depending only on which operator you used.</p>" +
      "<p><b>Important rule:</b> use <code>===</code> by default. The one accepted exception is <code>x == null</code>, which conveniently matches both <code>null</code> and <code>undefined</code> in a single check.</p>" +
      "<p><b>Don't confuse it with:</b> <code>Object.is()</code> — a third, rarer comparison that behaves like <code>===</code> except for two edge cases (<code>NaN</code> and <code>-0</code>).</p>" +
      "<p><b>When to use:</b> use <code>===</code> for essentially all comparisons in real code.</p>" +
      "<p><b>When not to use:</b> avoid <code>==</code> for numeric, string, or boolean comparisons unless you deliberately want coercion — which is almost never.</p>" +
      "<p class='ex-gotcha'>Loose comparison is convenient but risky. In interviews and code review, strict equality is almost always the expected answer.</p>",

    "Truthy and falsy values":
      "<p><b>Simple meaning:</b> Every value, when used where a boolean is expected (like an <code>if</code> condition), is treated as either truthy or falsy.</p>" +
      "<p><b>Think of it as:</b> JavaScript doesn't ask \"is this literally <code>true</code>?\" in a condition — it asks \"does this count as something, or as nothing?\" Most values count as something (truthy); a short, fixed list counts as nothing (falsy).</p>" +
      "<p><b>Why it exists:</b> it lets you write compact conditionals (<code>if (value)</code>) instead of always writing an explicit comparison (<code>if (value !== null && value !== undefined)</code>).</p>" +
      "<p><b>How it works:</b> a condition implicitly converts its value to a boolean. The <b>entire falsy list is fixed and short</b>: <code>false, 0, -0, 0n, \"\", null, undefined, NaN</code>. Every other value — including every object and array — is truthy.</p>" +
      "<pre><code>if ([]) console.log('runs');   // true — an empty array is truthy\nif ({}) console.log('runs');   // true — an empty object is truthy\nif (0) console.log('never');   // false — 0 is falsy\nif (\"0\") console.log('runs');  // true — a non-empty STRING, even \"0\", is truthy</code></pre>" +
      "<p><b>What happens:</b> each condition converts its operand to boolean using the fixed falsy list. <code>[]</code> and <code>{}</code> aren't on that list, so despite looking \"empty\", they're truthy. <code>\"0\"</code> is a non-empty string, so it's truthy too — it is not the same as the number <code>0</code>.</p>" +
      "<p><b>Result:</b> three of the four conditions run; only <code>if (0)</code> is skipped.</p>" +
      "<p><b>Important rule:</b> memorize the 8 falsy values — everything else, with no exceptions, is truthy.</p>" +
      "<p><b>Don't confuse it with:</b> <code>Boolean(value)</code> explicit conversion — same rules apply, just written out instead of implicit.</p>" +
      "<p><b>When to use:</b> conditionals, validation, and quick existence checks (<code>if (user)</code>).</p>" +
      "<p><b>When not to use:</b> don't rely on truthiness where <code>0</code>, <code>\"\"</code>, or <code>false</code> are meaningful, valid values you need to distinguish from \"missing\" — use an explicit check or <code>??</code> instead.</p>" +
      "<p class='ex-gotcha'>Empty arrays and objects are truthy, even though they may look empty. This trips up almost everyone the first time.</p>",

    "null vs undefined":
      "<p><b>Simple meaning:</b> <code>undefined</code> means \"nothing has been assigned yet\" (JavaScript's own default); <code>null</code> means \"deliberately empty\" (you assigned it yourself).</p>" +
      "<p><b>Think of it as:</b> <code>undefined</code> is an unlabeled empty box nobody has touched; <code>null</code> is a box with a label that says \"intentionally left empty.\"</p>" +
      "<p><b>Why it exists:</b> having two distinct \"nothing\" values lets code distinguish \"this was never set\" from \"this was explicitly cleared\" — a real, useful distinction in APIs and state.</p>" +
      "<p><b>How it works:</b> JavaScript itself assigns <code>undefined</code> automatically — to a declared-but-unassigned variable, a missing function argument, a missing object property. <code>null</code> is never assigned automatically; a human (or your code) has to write it explicitly.</p>" +
      "<pre><code>let x;\nlet y = null;\nconsole.log(x); // undefined — JS default, nobody assigned anything\nconsole.log(y); // null — deliberately set</code></pre>" +
      "<p><b>What happens:</b> <code>x</code> is declared with no assignment, so JavaScript gives it <code>undefined</code> automatically. <code>y</code> is explicitly assigned <code>null</code> by the code.</p>" +
      "<p><b>Result:</b> two different \"empty\" values, logged distinctly — but see the gotcha below for how they compare.</p>" +
      "<p><b>Important rule:</b> <code>null == undefined</code> is <code>true</code> (the one sanctioned use of <code>==</code>), but <code>null === undefined</code> is <code>false</code> — they are not the same type.</p>" +
      "<p><b>Don't confuse it with:</b> a missing object key vs. a key explicitly set to <code>undefined</code> — <code>'a' in {a: undefined}</code> is <code>true</code>, even though <code>obj.a</code> reads as <code>undefined</code> either way.</p>" +
      "<p><b>When to use:</b> use <code>null</code> when you want to say \"empty on purpose\" (e.g. resetting a selected item); let <code>undefined</code> represent \"not set yet\" unless an API contract says otherwise.</p>" +
      "<p><b>When not to use:</b> don't use <code>===</code> to treat them as interchangeable — they're genuinely different types.</p>" +
      "<p class='ex-gotcha'><code>null == undefined</code> is true, but <code>null === undefined</code> is false — this is the one place <code>==</code> is commonly considered acceptable.</p>",

    "typeof":
      "<p><b>Simple meaning:</b> An operator that returns a string naming a value's type.</p>" +
      "<p><b>Think of it as:</b> asking a value \"what are you?\" and getting back a one-word label like <code>'string'</code> or <code>'number'</code>.</p>" +
      "<p><b>Why it exists:</b> to let code branch on a value's type at runtime — useful for debugging and for handling different input shapes.</p>" +
      "<p><b>How it works:</b> <code>typeof</code> returns one of a fixed set of strings based on the value's internal type tag. Notably, both arrays and plain objects report <code>'object'</code> — there's no separate <code>'array'</code> tag.</p>" +
      "<pre><code>typeof 'hi'         // 'string'\ntypeof 42           // 'number'\ntypeof true          // 'boolean'\ntypeof undefined     // 'undefined'\ntypeof function(){}  // 'function'\ntypeof []            // 'object' — arrays are NOT their own type\ntypeof null          // 'object' — a long-standing historical bug</code></pre>" +
      "<p><b>What happens:</b> each call inspects the value's internal type tag and returns the matching string. Functions get their own special case (<code>'function'</code>), but arrays don't — and <code>null</code>'s tag was mistakenly implemented as <code>'object'</code> decades ago and can never be fixed without breaking the web.</p>" +
      "<p><b>Result:</b> a string in every case — but <code>typeof []</code> and <code>typeof null</code> are both <code>'object'</code>, which is rarely what you actually want to know.</p>" +
      "<p><b>Important rule:</b> <code>typeof</code> can never distinguish an array from a plain object, and can never correctly identify <code>null</code>.</p>" +
      "<p><b>Don't confuse it with:</b> <code>Array.isArray()</code> — the correct way to check for an array — or <code>value === null</code> — the correct way to check for null.</p>" +
      "<p><b>When to use:</b> quick debugging, and distinguishing primitives (string/number/boolean/function) from each other or from <code>undefined</code>.</p>" +
      "<p><b>When not to use:</b> never for array detection (use <code>Array.isArray()</code>) and never for null detection (use <code>=== null</code>).</p>" +
      "<p class='ex-gotcha'>JavaScript's <code>typeof null === 'object'</code> is a historic bug baked in since the language's first release, kept forever for backward compatibility.</p>",

    "Scope":
      "<p><b>Simple meaning:</b> Scope is where in your code a given variable is accessible.</p>" +
      "<p><b>Think of it as:</b> a set of nested rooms — code inside a room can see everything in that room and every room outside it, but code outside a room can't see inside it.</p>" +
      "<p><b>Why it exists:</b> without scope, every variable in a program would collide with every other variable of the same name — scope lets the same name (<code>i</code>, <code>result</code>, <code>data</code>) be reused safely in different parts of a program.</p>" +
      "<p><b>How it works:</b> JavaScript has global scope (visible everywhere), function scope (visible inside a function), and block scope (visible inside <code>{ }</code>, for <code>let</code>/<code>const</code>). Which scope a variable belongs to is decided by <em>where it's declared</em>.</p>" +
      "<pre><code>function f() {\n  let inside = 1; // only visible inside f\n  return inside;\n}\nconsole.log(f());       // 1\nconsole.log(inside);    // ReferenceError — inside doesn't exist out here</code></pre>" +
      "<p><b>What happens:</b> <code>inside</code> is declared inside <code>f</code>'s function scope. Calling <code>f()</code> can read it and return it fine. Trying to read <code>inside</code> from outside <code>f</code> fails, because that name was never declared in the outer (global) scope.</p>" +
      "<p><b>Result:</b> <code>f()</code> returns <code>1</code>; the second <code>console.log</code> throws instead of logging anything.</p>" +
      "<p><b>Important rule:</b> a variable is visible in the scope it's declared in, and in every scope nested inside that one — never in a sibling or outer scope.</p>" +
      "<p><b>Don't confuse it with:</b> the call stack — scope is about where a name is <em>visible in the code</em> (fixed at write-time); the call stack is about which functions are <em>currently executing</em> (changes at run-time).</p>" +
      "<p><b>When to use:</b> constantly — every variable declaration relies on scope rules to determine where it can be read.</p>" +
      "<p><b>When not to use:</b> avoid unnecessarily widening a variable's scope (e.g. making something global that only one function needs) — it just increases the risk of naming collisions.</p>" +
      "<p class='ex-gotcha'>Scope rules are the reason closures and callback bugs behave the way they do — most \"weird\" async bugs trace back to a misunderstanding of scope.</p>",

    "Global scope":
      "<p><b>Simple meaning:</b> The outermost scope — variables declared here are visible from anywhere in the program.</p>" +
      "<p><b>Think of it as:</b> a bulletin board in the lobby that every room in the building can see and, with <code>var</code>, even write on.</p>" +
      "<p><b>Why it exists:</b> some values (app-wide config, feature flags) genuinely need to be reachable from everywhere — global scope is where those live.</p>" +
      "<p><b>How it works:</b> anything declared outside every function and block lives in global scope. In a browser, a top-level <code>var</code> also becomes a property on the <code>window</code> object; <code>let</code>/<code>const</code> do not.</p>" +
      "<pre><code>const API_URL = 'https://api.example.com'; // global const\nvar oldStyle = 'legacy';                    // global var\n\nconsole.log(window.oldStyle); // 'legacy' — var attaches to window\nconsole.log(window.API_URL);  // undefined — const does not</code></pre>" +
      "<p><b>What happens:</b> both variables are declared at the top level, outside any function, so both are in global scope. But only the <code>var</code> also gets attached as a property of the global <code>window</code> object — a browser-specific side effect specific to <code>var</code>.</p>" +
      "<p><b>Result:</b> <code>window.oldStyle</code> reads back the value; <code>window.API_URL</code> is <code>undefined</code> even though <code>API_URL</code> itself is perfectly readable as a plain variable.</p>" +
      "<p><b>Important rule:</b> a global variable is reachable from — and can be overwritten by — literally any other file or script running in the same environment.</p>" +
      "<p><b>When to use:</b> only for genuinely app-wide constants or configuration, deliberately.</p>" +
      "<p><b>When not to use:</b> don't bury business logic or mutable state in globals — anything can read or overwrite it from anywhere, making bugs very hard to trace.</p>" +
      "<p class='ex-gotcha'>In browsers, <code>var</code> at the top level creates a property on <code>window</code>, while <code>let</code> and <code>const</code> deliberately do not.</p>",

    "Function scope":
      "<p><b>Simple meaning:</b> A variable declared with <code>var</code> is visible throughout the entire function it's in — it ignores inner block boundaries like <code>if</code> or loops.</p>" +
      "<p><b>Think of it as:</b> <code>var</code> treats the whole function as one big room, even if you drew smaller rooms (<code>if</code> blocks, loops) inside it on paper — those inner walls don't actually contain a <code>var</code>.</p>" +
      "<p><b>Why it exists:</b> this was the <em>only</em> kind of scoping <code>var</code> ever had — JavaScript had no block scope at all until <code>let</code>/<code>const</code> arrived in ES6.</p>" +
      "<p><b>How it works:</b> a <code>var</code> declared anywhere inside a function — even nested three <code>if</code> blocks deep — is hoisted to the top of that <em>whole function</em>, not just its immediate block.</p>" +
      "<pre><code>function f() {\n  if (true) {\n    var x = 1; // declared inside an if block...\n  }\n  return x;    // ...but still visible here, outside the block\n}\nconsole.log(f()); // 1</code></pre>" +
      "<p><b>What happens:</b> <code>var x</code> is hoisted to the top of <code>f</code>, not just the <code>if</code> block. By the time <code>return x</code> runs, <code>x</code> has already been assigned <code>1</code> inside the block — and since <code>var</code> doesn't respect block boundaries, that assignment is visible outside the <code>if</code> too.</p>" +
      "<p><b>Result:</b> <code>f()</code> returns <code>1</code> — the value \"leaked\" out of the <code>if</code> block, which surprises anyone expecting block scoping.</p>" +
      "<p><b>Important rule:</b> <code>var</code> only respects function boundaries; it does not respect <code>{ }</code> blocks at all.</p>" +
      "<p><b>Don't confuse it with:</b> \"Block scope\" — the entry right after this one — which describes exactly the opposite, safer behavior that <code>let</code>/<code>const</code> have.</p>" +
      "<p><b>When to use:</b> recognize this when reading legacy codebases that still use <code>var</code>.</p>" +
      "<p><b>When not to use:</b> don't rely on it in new code — this leaking behavior is exactly the bug class <code>let</code>/<code>const</code> were introduced to prevent.</p>" +
      "<p class='ex-gotcha'>This is the classic <code>var</code> trap: block scope is ignored, so a value assigned inside an <code>if</code> or loop can leak outside it.</p>",

    "Block scope":
      "<p><b>Simple meaning:</b> A <code>let</code>/<code>const</code> variable is only visible inside the nearest surrounding <code>{ }</code> — it does not leak out.</p>" +
      "<p><b>Think of it as:</b> unlike <code>var</code>'s leaky walls, <code>let</code>/<code>const</code> build real walls — a variable declared inside an <code>if</code> or loop genuinely stays inside it.</p>" +
      "<p><b>Why it exists:</b> to fix exactly the leaking problem described in \"Function scope\" — block scope is the safer default modern JavaScript was designed around.</p>" +
      "<p><b>How it works:</b> any <code>{ }</code> — an <code>if</code>, a loop, or even a bare block with no keyword — creates a new scope boundary for <code>let</code>/<code>const</code>. Trying to read the variable outside that boundary throws, rather than silently returning a leaked value.</p>" +
      "<pre><code>{\n  let a = 1;\n  console.log(a); // 1 — fine, still inside the block\n}\nconsole.log(a);   // ReferenceError — outside the block now</code></pre>" +
      "<p><b>What happens:</b> <code>a</code> is declared inside a bare <code>{ }</code> block. Reading it from inside that same block works. The moment execution passes the closing <code>}</code>, <code>a</code> no longer exists as far as the outer scope is concerned.</p>" +
      "<p><b>Result:</b> the first log succeeds with <code>1</code>; the second throws a <code>ReferenceError</code> instead of returning any value.</p>" +
      "<p><b>Important rule:</b> if you can't reference a variable outside its declaring block, that's block scope working correctly, not a bug.</p>" +
      "<p><b>When to use:</b> the default for essentially all new variable declarations — prefer <code>let</code>/<code>const</code> so variables don't outlive the block they logically belong to.</p>" +
      "<p><b>When not to use:</b> don't try to read a block-scoped variable from outside its block — declare it in an outer scope first if you genuinely need it there.</p>" +
      "<p class='ex-gotcha'>This containment is one of the main reasons modern JavaScript uses <code>let</code> and <code>const</code> instead of <code>var</code> — it turns a whole class of leaking bugs into an immediate, loud error.</p>",

    "Lexical scope":
      "<p><b>Simple meaning:</b> A function can access variables from the scope where it was <em>written</em>, no matter where or when it's later called.</p>" +
      "<p><b>Think of it as:</b> a function remembers its birthplace — like a person always knowing their childhood address, even after moving away and being asked to do things far from home.</p>" +
      "<p><b>Why it exists:</b> it's the foundation that makes closures possible — without it, an inner function couldn't reliably reach variables from its enclosing function.</p>" +
      "<p><b>How it works:</b> scope is resolved statically, based on the nesting structure of the source code itself — not dynamically, based on how or where the function is eventually invoked.</p>" +
      "<pre><code>function outer() {\n  const msg = 'hi';\n  return () => msg; // this arrow 'sees' msg because of WHERE it was written\n}\nconst greet = outer();\nconsole.log(greet()); // 'hi' — even though outer() already finished running</code></pre>" +
      "<p><b>What happens:</b> the returned arrow function was <em>written</em> inside <code>outer</code>, right next to <code>msg</code>. That fixes its scope chain permanently — it will always be able to reach <code>msg</code>, regardless of where <code>greet</code> is later called from.</p>" +
      "<p><b>Result:</b> <code>greet()</code> returns <code>'hi'</code>, even though <code>outer()</code> has already returned and its execution finished long before <code>greet()</code> is called.</p>" +
      "<p><b>Important rule:</b> a function's outer scope is fixed at the moment it is <em>defined</em> in the source — never at the moment it is called.</p>" +
      "<p><b>Don't confuse it with:</b> <code>this</code>, which works the opposite way — resolved dynamically, based on how a function is called, not where it's written.</p>" +
      "<p><b>When to use:</b> this is the mental model behind every closure, callback, and factory function you write.</p>" +
      "<p><b>When not to use:</b> don't assume calling a function from a different location changes what variables it can see — lexical scope never changes based on call site.</p>" +
      "<p class='ex-gotcha'>Lexical scope is why a nested function can still access outer variables even after the outer function has already returned — that's exactly what a closure is.</p>",

    "Hoisting":
      "<p><b>Simple meaning:</b> JavaScript processes declarations before running any code, so some names exist (in some form) before their declaration line is reached.</p>" +
      "<p><b>Think of it as:</b> imagine JavaScript skims the whole scope for every <code>var</code>/<code>function</code>/<code>let</code>/<code>const</code> name first, jotting each one on a clipboard — then goes back and actually runs the code line by line. The clipboard entries exist early; the <em>values</em> don't, until their line runs.</p>" +
      "<p><b>Why it exists:</b> it's a side effect of how the engine's two-phase execution works (see \"Execution context\") — not a deliberate feature to lean on, but a consequence worth understanding.</p>" +
      "<p><b>How it works:</b> function declarations are hoisted completely — the whole function is usable before its line. <code>var</code> is hoisted as <code>undefined</code>. <code>let</code>/<code>const</code> are hoisted too, but stay inaccessible (Temporal Dead Zone) until their own line runs.</p>" +
      "<pre><code>console.log(a);        // undefined — var hoisted, not yet assigned\nvar a = 5;\n\nconsole.log(greet());  // 'hi' — fully usable before its own line\nfunction greet() { return 'hi'; }</code></pre>" +
      "<p><b>What happens:</b> before any line runs, the engine's creation phase already knows about both <code>a</code> (as <code>var</code>, defaulted to <code>undefined</code>) and <code>greet</code> (as a complete, callable function). The execution phase then runs top to bottom: reading <code>a</code> early gets the hoisted default; calling <code>greet()</code> early works because the whole function was already hoisted.</p>" +
      "<p><b>Result:</b> <code>undefined</code>, then <code>'hi'</code> — two very different outcomes for reading something \"before\" its declaration, depending entirely on which kind of declaration it is.</p>" +
      "<p><b>Important rule:</b> hoisting moves the <em>declaration</em>, never the <em>assignment</em> — a <code>var</code> exists early but holds no real value until its line executes.</p>" +
      "<p><b>Don't confuse it with:</b> the Temporal Dead Zone — <code>let</code>/<code>const</code> are hoisted too, but reading them early throws instead of returning <code>undefined</code>.</p>" +
      "<p><b>When to use:</b> use this knowledge to explain (not to rely on) confusing early-access behavior when debugging or in interviews.</p>" +
      "<p><b>When not to use:</b> never write code that depends on hoisting for correctness — declare and initialize before use, regardless of what technically happens to be legal.</p>" +
      "<p class='ex-gotcha'>The declaration is hoisted, but the value is not initialized until assignment time — this is exactly why an early-read <code>var</code> is <code>undefined</code>, not an error.</p>",

    "Temporal Dead Zone":
      "<p><b>Simple meaning:</b> The stretch of code between a <code>let</code>/<code>const</code> variable being hoisted and its declaration line actually running, where touching it throws an error.</p>" +
      "<p><b>Think of it as:</b> the variable's name is reserved (like a seat with a \"reserved\" sign) but the seat itself isn't usable yet — sitting in it early gets you thrown out, unlike <code>var</code>, which would just let you sit on an empty (<code>undefined</code>) seat.</p>" +
      "<p><b>Why it exists:</b> to catch a real class of bugs — reading a variable before it's meaningfully initialized — loudly and immediately, instead of silently returning <code>undefined</code> like <code>var</code> does.</p>" +
      "<p><b>How it works:</b> <code>let</code>/<code>const</code> are hoisted (their name is known to the scope) but placed in an uninitialized state until their declaration line executes. Any access before that line throws a <code>ReferenceError</code>.</p>" +
      "<pre><code>console.log(b); // ReferenceError: Cannot access 'b' before initialization\nlet b = 5;</code></pre>" +
      "<p><b>What happens:</b> <code>b</code>'s name is already known to the scope (hoisted), but it is still in the Temporal Dead Zone because its declaration line hasn't executed yet. Reading it there is a genuine error, not a fallback to <code>undefined</code>.</p>" +
      "<p><b>Result:</b> the program throws immediately and stops, rather than continuing with a silently wrong value.</p>" +
      "<p><b>Important rule:</b> TDZ turns \"accessed too early\" into a loud crash instead of a quiet <code>undefined</code> — that's a deliberate safety improvement over <code>var</code>.</p>" +
      "<p><b>Don't confuse it with:</b> a variable simply being <code>undefined</code> — TDZ is an access <em>error</em>, not a value.</p>" +
      "<p><b>When to use:</b> understand it as the explanation whenever you see a ReferenceError for a variable that appears to exist later in the same scope.</p>" +
      "<p><b>When not to use:</b> n/a — this isn't something you opt into; it's automatic for every <code>let</code>/<code>const</code>.</p>" +
      "<p class='ex-gotcha'>TDZ is a key reason <code>let</code> and <code>const</code> are considered safer than <code>var</code> — early access fails loudly instead of quietly.</p>",

    "Execution context":
      "<p><b>Simple meaning:</b> The environment JavaScript sets up for a running piece of code — it tracks that code's variables, its <code>this</code> value, and a link to the outer scope.</p>" +
      "<p><b>Think of it as:</b> a fresh, labeled folder created every time a function is called, holding that call's own local notes (variables), a sticky note for <code>this</code>, and a reference pointing back to the folder it was created inside.</p>" +
      "<p><b>Why it exists:</b> the engine needs somewhere to keep track of each call's local state independently, so calling the same function twice doesn't mix up the two calls' variables.</p>" +
      "<p><b>How it works:</b> a new execution context is created on every function call, going through a creation phase (hoisting, setting up <code>this</code>) before the execution phase (running the code line by line). It's pushed onto the call stack on entry, popped off on return.</p>" +
      "<pre><code>function run() {\n  console.log(this);\n}\nrun();          // this === undefined (strict) / globalThis (sloppy)\nconst obj = { run };\nobj.run();       // this === obj — SAME function, different execution context</code></pre>" +
      "<p><b>What happens:</b> both calls run the exact same function body, but each call creates its own fresh execution context. <code>this</code> is determined per-context by <em>how</em> that particular call happened — with no owner before the dot for the first call, with <code>obj</code> as the owner for the second.</p>" +
      "<p><b>Result:</b> the same <code>run</code> function logs two different <code>this</code> values, purely based on call site.</p>" +
      "<p><b>Important rule:</b> every function call gets its own execution context — that's what makes <code>this</code>, local variables, and recursion all work independently per call.</p>" +
      "<p><b>Don't confuse it with:</b> the call stack — the execution context is the state <em>for one call</em>; the call stack is the ordered list of all currently-active execution contexts.</p>" +
      "<p><b>When to use:</b> reach for this model when debugging <code>this</code>, closures, or unexpected variable values between calls.</p>" +
      "<p><b>When not to use:</b> n/a — this happens automatically on every call; there's no opting in or out.</p>" +
      "<p class='ex-gotcha'>Execution context differs by call site, not by function definition — this is exactly why the same method behaves differently depending on how it's invoked.</p>",

    "Call stack":
      "<p><b>Simple meaning:</b> The ordered list of function calls currently in progress, most recent on top.</p>" +
      "<p><b>Think of it as:</b> a stack of plates — each function call adds a plate on top when it starts, and removes it when it finishes. You can only ever interact with the top plate, and it has to come off before the one below it can.</p>" +
      "<p><b>Why it exists:</b> JavaScript needs to know, at every moment, exactly which function is running and which functions are waiting for it to finish — the stack is that bookkeeping structure.</p>" +
      "<p><b>How it works:</b> calling a function pushes a new frame onto the stack; returning from it pops that frame off. If frames keep getting pushed without ever being popped (infinite recursion with no base case), the stack overflows.</p>" +
      "<pre><code>function recurse(n) {\n  if (n === 0) return; // base case — stops the stack from growing further\n  recurse(n - 1);\n}\nrecurse(3);\n// stack: recurse(3) -> recurse(2) -> recurse(1) -> recurse(0) -> returns, unwinds</code></pre>" +
      "<p><b>What happens:</b> each call to <code>recurse</code> pushes a new frame before the next call, growing the stack to 4 frames deep. <code>recurse(0)</code> hits the base case and returns without recursing further — then each frame pops off in reverse order as each call finishes.</p>" +
      "<p><b>Result:</b> nothing is logged (this example returns nothing), but the stack correctly grows to depth 4, then fully unwinds back to empty.</p>" +
      "<p><b>Important rule:</b> without a base case that actually gets reached, recursion pushes frames forever until the stack overflows.</p>" +
      "<p><b>Don't confuse it with:</b> the event loop's task/microtask queues — the call stack is for currently-running synchronous code; the queues hold callbacks waiting for the stack to empty.</p>" +
      "<p><b>When to use:</b> reason about it when analyzing recursion depth, reading a stack trace, or debugging a <code>\"Maximum call stack size exceeded\"</code> error.</p>" +
      "<p><b>When not to use:</b> n/a — every function call uses the stack automatically; there's nothing to opt into.</p>" +
      "<p class='ex-gotcha'>If recursion has no base case — or never reaches it — the call stack grows until the runtime throws <code>\"Maximum call stack size exceeded\"</code>.</p>",

    "Strict mode":
      "<p><b>Simple meaning:</b> An opt-in mode that makes JavaScript enforce stricter rules, turning several silent mistakes into loud errors.</p>" +
      "<p><b>Think of it as:</b> a stricter teacher grading your code — instead of quietly letting a typo create an accidental global variable, strict mode stops class and makes you fix it immediately.</p>" +
      "<p><b>Why it exists:</b> early JavaScript allowed several dangerous patterns (accidental globals, silent failed assignments) for backward compatibility; strict mode was added later as an opt-in way to disable them without breaking old code that depends on them.</p>" +
      "<p><b>How it works:</b> adding <code>\"use strict\";</code> at the top of a script or function changes runtime behavior — assigning to an undeclared variable throws instead of silently creating a global, and <code>this</code> in a plain function call is <code>undefined</code> instead of the global object.</p>" +
      "<pre><code>\"use strict\";\nx = 5; // ReferenceError: x is not defined — instead of silently creating a global\n\nfunction f() { return this; }\nf(); // undefined, in strict mode (vs globalThis in sloppy mode)</code></pre>" +
      "<p><b>What happens:</b> without strict mode, <code>x = 5</code> would silently create a new global variable — a classic source of hard-to-find bugs. With strict mode on, that same assignment is treated as an error instead, since <code>x</code> was never declared.</p>" +
      "<p><b>Result:</b> a thrown <code>ReferenceError</code> instead of a silently created (and easily forgotten) global variable.</p>" +
      "<p><b>Important rule:</b> strict mode doesn't add new features — it removes permissiveness, converting several classes of silent mistakes into immediate, visible errors.</p>" +
      "<p><b>Don't confuse it with:</b> TypeScript or linting — those are separate, additional tools; strict mode is a built-in JavaScript runtime behavior, always available with no dependencies.</p>" +
      "<p><b>When to use:</b> it's on by default inside ES modules and class bodies — you rarely need to add it manually in modern code.</p>" +
      "<p><b>When not to use:</b> no real downside to having it on; the main reason to omit it manually is that modules already include it automatically.</p>" +
      "<p class='ex-gotcha'>Strict mode turns silent errors into immediate exceptions — genuinely useful during debugging, since bugs surface right where they happen instead of much later.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Functions": {
    "Function basics (overview)":
      "<p><b>Simple meaning:</b> A function is a reusable block of code that performs a task and can be called again whenever you need it.</p>" +
      "<p><b>Think of it as:</b> a labeled recipe card — you write the steps once, then \"run this recipe\" as many times as you want, with different ingredients (arguments) each time.</p>" +
      "<p><b>Why it exists:</b> without functions, every repeated task would need its logic copy-pasted everywhere it's used — a maintenance nightmare where fixing one bug means finding and fixing every copy.</p>" +
      "<p><b>How it works:</b> when a function is called, JavaScript creates a fresh execution context, assigns the passed-in arguments to the declared parameters, creates a local scope for that call, runs the body, then removes that frame from the call stack.</p>" +
      "<pre><code>function greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet(\"Ada\"));  // Hello, Ada!\nconsole.log(greet(\"Grace\")); // Hello, Grace! — same function, different result</code></pre>" +
      "<p><b>What happens:</b> each call to <code>greet</code> creates its own fresh execution context with its own <code>name</code> parameter — the two calls don't interfere with each other at all.</p>" +
      "<p><b>Result:</b> a string returned from each call — nothing is printed by the function itself; <code>console.log</code> is what actually displays the returned value.</p>" +
      "<p><b>Important rule:</b> a function is not magic — it's a reusable unit of work. The real differences between declarations, expressions, and arrow functions come down to hoisting and how <code>this</code> is bound, not what a \"function\" fundamentally is.</p>" +
      "<p><b>When to use:</b> whenever a task will run more than once, or when isolating and naming a piece of logic improves clarity — even if it only runs once.</p>" +
      "<p><b>When not to use:</b> don't wrap a single trivial line in its own function just for the sake of it, if doing so adds an indirection without adding clarity.</p>" +
      "<p class='ex-gotcha'>Functions are not magic — they are just reusable units of work. The real difference between declaration, expression, and arrow syntax is mostly about hoisting and <code>this</code>.</p>",

    "Function declarations":
      "<p><b>Simple meaning:</b> A named function created with the <code>function</code> keyword, at the top level of a scope.</p>" +
      "<p><b>Think of it as:</b> a recipe card that's already pinned to the board before you even start cooking — you can reference it by name from anywhere in the kitchen, even before you've physically read that specific card.</p>" +
      "<p><b>Why it exists:</b> it's the original, most basic way to define a reusable, named piece of behavior — every other function form is really a variation building on this one.</p>" +
      "<p><b>How it works:</b> function declarations are fully hoisted — the entire function (not just its name) is registered in scope during the creation phase, before any code runs.</p>" +
      "<pre><code>console.log(greet(\"Ada\")); // works — called BEFORE its own line\n\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}</code></pre>" +
      "<p><b>What happens:</b> during hoisting, the whole <code>greet</code> function — not just its name — is set up in scope before execution starts. So the call on line 1 succeeds even though it textually appears before the function's definition.</p>" +
      "<p><b>Result:</b> logs <code>\"Hello, Ada!\"</code> — calling it \"early\" causes no error at all.</p>" +
      "<p><b>Important rule:</b> function declarations are the only function form that's fully usable before their own line of code.</p>" +
      "<p><b>Don't confuse it with:</b> function <em>expressions</em> (see next entry) — those look almost identical but are NOT hoisted the same way.</p>" +
      "<p><b>When to use:</b> named, reusable utility logic meant to be called from multiple places, especially when hoisting order doesn't matter to you.</p>" +
      "<p><b>When not to use:</b> when you specifically want the function stored as a value in a variable (to pass around, reassign, or store conditionally) — use an expression instead.</p>" +
      "<p class='ex-gotcha'>Function declarations are hoisted, so they can be called before they appear in the file. This convenience is a classic interview topic.</p>",

    "Function expressions":
      "<p><b>Simple meaning:</b> A function assigned to a variable, written as part of an expression rather than a standalone declaration.</p>" +
      "<p><b>Think of it as:</b> writing the recipe on an index card and only pinning it to the board at the exact moment you write <code>const square = ...</code> — before that line runs, the card isn't on the board yet.</p>" +
      "<p><b>Why it exists:</b> to let a function be treated as a plain value — stored in a variable, passed around, or created dynamically inside other code — rather than a fixed, always-available named utility.</p>" +
      "<p><b>How it works:</b> only the variable name (<code>square</code>) is hoisted, exactly like any other <code>const</code>/<code>let</code>/<code>var</code> declaration — the function itself isn't attached to that name until the assignment line actually runs.</p>" +
      "<pre><code>console.log(square(4)); // ReferenceError (const) or TypeError (var) — not usable yet\n\nconst square = function (n) {\n  return n * n;\n};</code></pre>" +
      "<p><b>What happens:</b> <code>square</code> is a <code>const</code>, so it's in the Temporal Dead Zone until its declaration line runs — trying to call it before that line throws, exactly like reading any other <code>const</code> too early.</p>" +
      "<p><b>Result:</b> an error is thrown instead of a return value — the call never reaches the function body at all.</p>" +
      "<p><b>Important rule:</b> a function expression only becomes callable once its assignment line has actually executed — never before.</p>" +
      "<p><b>Don't confuse it with:</b> function declarations, which are fully usable before their line runs — the two look similar but behave oppositely regarding early access.</p>" +
      "<p><b>When to use:</b> when a function needs to be passed around as a value, stored conditionally, or created dynamically inside other logic.</p>" +
      "<p><b>When not to use:</b> don't call it before its assignment line has run — unlike a declaration, that always fails.</p>" +
      "<p class='ex-gotcha'>Calling a function expression before initialization throws an error. That is why interviews often compare it with function declarations.</p>",

    "Arrow functions":
      "<p><b>Simple meaning:</b> A shorter syntax for writing a function expression, with one distinctive behavioral difference: no own <code>this</code>.</p>" +
      "<p><b>Think of it as:</b> a quick sticky-note version of a function expression — faster to write, but it deliberately can't hold its own \"who am I\" (<code>this</code>); it just borrows that answer from whatever scope it was written inside.</p>" +
      "<p><b>Why it exists:</b> concise syntax for simple callbacks, and — more importantly — to solve the recurring \"lost <code>this</code>\" problem that plagued regular function callbacks before ES6.</p>" +
      "<p><b>How it works:</b> arrow functions have no own <code>this</code>, no own <code>arguments</code> object, and can't be used as a constructor with <code>new</code>. A single-expression body without braces returns that expression implicitly; a <code>{ }</code> body needs an explicit <code>return</code>.</p>" +
      "<pre><code>const double = n => n * 2;              // implicit return\nconst makeUser = id => ({ id });        // object literal needs () to avoid being read as a block\nconst broken = id => { id };            // returns undefined — { } is a block body here, not an object\n\nconsole.log(double(5));    // 10\nconsole.log(makeUser(1));  // { id: 1 }\nconsole.log(broken(1));    // undefined</code></pre>" +
      "<p><b>What happens:</b> <code>double</code> has no braces, so <code>n * 2</code> is treated as the implicit return value. <code>makeUser</code> wraps the object in <code>( )</code> so <code>{ id }</code> is parsed as an object literal, not a block. <code>broken</code> has bare <code>{ id }</code> — JavaScript reads that as a code block containing the meaningless expression statement <code>id</code>, with no <code>return</code> at all.</p>" +
      "<p><b>Result:</b> <code>10</code>, then <code>{ id: 1 }</code>, then <code>undefined</code> — three very similar-looking arrows, three different outcomes, purely from where the parentheses are.</p>" +
      "<p><b>Important rule:</b> an arrow with <code>{ }</code> is a block body needing an explicit <code>return</code> — it is never an implicit object return. Wrap an object literal in <code>( )</code>: <code>() => ({ id })</code>.</p>" +
      "<p><b>Don't confuse it with:</b> a regular function — arrows can't be object methods (they won't bind to the object) or constructors (<code>new</code> throws), because they simply have no <code>this</code> of their own to bind.</p>" +
      "<p><b>When to use:</b> concise callbacks (array methods, <code>setTimeout</code>) and anywhere you specifically want to inherit the surrounding <code>this</code>.</p>" +
      "<p><b>When not to use:</b> as an object method, a class method needing its own <code>this</code>, or a constructor function.</p>" +
      "<p class='ex-gotcha'>An arrow with braces is a block, not an implicit return. Use <code>() => ({ id })</code> to return an object.</p>",

    "Parameters and arguments":
      "<p><b>Simple meaning:</b> Parameters are the placeholder names written in a function's definition; arguments are the actual values you pass in when calling it.</p>" +
      "<p><b>Think of it as:</b> the recipe card says \"add [amount] of sugar\" — <code>[amount]</code> is the parameter (a placeholder in the recipe); \"2 cups\" is the argument (what you actually measure out when you cook).</p>" +
      "<p><b>Why it exists:</b> this separation is what lets one function body run differently depending on what's passed to it each time.</p>" +
      "<p><b>How it works:</b> at call time, each argument is matched to its corresponding parameter by position. Extra arguments are ignored (unless collected via rest); missing arguments become <code>undefined</code>.</p>" +
      "<pre><code>function fullName(first, last) {\n  return `${first} ${last}`;\n}\nconsole.log(fullName(\"Ada\", \"Lovelace\")); // 'Ada Lovelace'\nconsole.log(fullName(\"Ada\"));              // 'Ada undefined' — last never supplied</code></pre>" +
      "<p><b>What happens:</b> the first call supplies both arguments, matched positionally to <code>first</code> and <code>last</code>. The second call supplies only one — <code>last</code> has no matching argument, so it's automatically <code>undefined</code> inside the function.</p>" +
      "<p><b>Result:</b> a fully formed string in the first case; a string with a literal <code>\"undefined\"</code> embedded in the second — no error is thrown for a missing argument.</p>" +
      "<p><b>Important rule:</b> a missing argument never throws — it silently becomes <code>undefined</code>, which can hide bugs unless you validate.</p>" +
      "<p><b>Don't confuse it with:</b> default parameters — those give a missing argument a real fallback value instead of leaving it as <code>undefined</code>.</p>" +
      "<p><b>When to use:</b> whenever a function needs different inputs for different calls — essentially every function.</p>" +
      "<p><b>When not to use:</b> don't assume all arguments will always be provided correctly — validate inputs at boundaries where callers are outside your control.</p>" +
      "<p class='ex-gotcha'>Missing arguments become <code>undefined</code>. The <code>arguments</code> object is array-<em>like</em>, not a real array — it has no <code>.map()</code>.</p>",

    "Default parameters":
      "<p><b>Simple meaning:</b> A fallback value a parameter takes on when its matching argument is missing or explicitly <code>undefined</code>.</p>" +
      "<p><b>Think of it as:</b> the recipe card saying \"sugar (default: 2 cups if not specified)\" — if you don't mention sugar at all, the recipe assumes 2 cups; if you explicitly say \"0 cups\", it respects that.</p>" +
      "<p><b>Why it exists:</b> to replace the old, error-prone pattern of manually checking <code>if (b === undefined) b = 2;</code> inside every function body.</p>" +
      "<p><b>How it works:</b> the default expression is evaluated fresh on every call where that argument is missing or <code>undefined</code> — and specifically only for those two cases, not for any other falsy value.</p>" +
      "<pre><code>function multiply(a, b = 2) {\n  return a * b;\n}\nmultiply(5);       // 10 — b defaulted\nmultiply(5, null); // 0  — null is a REAL value, default doesn't trigger</code></pre>" +
      "<p><b>What happens:</b> the first call omits <code>b</code> entirely, so it's <code>undefined</code>, which triggers the default of <code>2</code>. The second call explicitly passes <code>null</code> — a real, deliberate value — so the default never triggers, and <code>b</code> is genuinely <code>null</code> going into the multiplication.</p>" +
      "<p><b>Result:</b> <code>10</code>, then <code>0</code> (since <code>5 * null</code> coerces <code>null</code> to <code>0</code>) — a surprising outcome if you expected <code>null</code> to also trigger the default.</p>" +
      "<p><b>Important rule:</b> defaults trigger on <code>undefined</code> only — never on <code>null</code>, <code>0</code>, <code>\"\"</code>, or any other falsy value.</p>" +
      "<p><b>When to use:</b> simplifying function APIs and removing repetitive \"if missing, use this\" guards inside the body.</p>" +
      "<p><b>When not to use:</b> don't rely on it to guard against <code>null</code> — handle that case explicitly if callers might pass it.</p>" +
      "<p class='ex-gotcha'>Passing <code>null</code> does not trigger the default. It is treated as a real value, not an omitted argument.</p>",

    "Rest parameters":
      "<p><b>Simple meaning:</b> Collects any number of remaining arguments into one real array, using <code>...</code> in the parameter list.</p>" +
      "<p><b>Think of it as:</b> a catch-all basket at the end of the recipe card — \"and whatever else you brought, put it all in this basket\" — except the basket really is a proper array you can <code>.map()</code>, <code>.reduce()</code>, and iterate.</p>" +
      "<p><b>Why it exists:</b> to give functions a clean, real-array way to accept an unknown number of arguments — replacing the old, clunky <code>arguments</code> object.</p>" +
      "<p><b>How it works:</b> the rest parameter must be the <em>last</em> parameter; it gathers every remaining argument (from that position onward) into a genuine array.</p>" +
      "<pre><code>function sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // 10\nconsole.log(Array.isArray([1,2,3].slice ? sum : null)); // proof numbers really is an array via .reduce above</code></pre>" +
      "<p><b>What happens:</b> all four arguments are collected into the real array <code>numbers</code>, which is then reduced to a running total starting from <code>0</code>.</p>" +
      "<p><b>Result:</b> <code>10</code> — and critically, <code>.reduce()</code> works directly on <code>numbers</code> with no conversion step needed first.</p>" +
      "<p><b>Important rule:</b> only one rest parameter is allowed per function, and it must be the last parameter — nothing can come after it.</p>" +
      "<p><b>Don't confuse it with:</b> the <code>arguments</code> object — that's array-<em>like</em> (has a <code>.length</code> and numeric indices, but no array methods) and doesn't exist at all inside arrow functions; rest parameters are real arrays and work everywhere.</p>" +
      "<p><b>When to use:</b> functions that accept an unknown or variable number of values, like sum/max helpers or logging utilities.</p>" +
      "<p><b>When not to use:</b> when the function has a fixed, known set of parameters — rest adds unnecessary flexibility there.</p>" +
      "<p class='ex-gotcha'>Rest is different from the <code>arguments</code> object: the rest parameter is a true array with array methods available, and it works inside arrow functions too.</p>",

    "Spread syntax":
      "<p><b>Simple meaning:</b> The same <code>...</code> syntax as rest, but used to <em>expand</em> an array or object into its individual pieces instead of collecting them.</p>" +
      "<p><b>Think of it as:</b> unpacking a gift basket onto the table — instead of handing someone the whole sealed basket (the array), you tip it out so each item sits individually where a function call or object literal expects separate items.</p>" +
      "<p><b>Why it exists:</b> to replace older, clunkier patterns like <code>Array.prototype.concat</code>, <code>Object.assign</code>, and <code>Function.prototype.apply</code> for merging, copying, and passing collections.</p>" +
      "<p><b>How it works:</b> inside an array literal, a call, or an object literal, <code>...value</code> expands <code>value</code>'s elements/properties in place — it does not create a deep copy, only a shallow, one-level-deep expansion.</p>" +
      "<pre><code>const merged = [...[1, 2], ...[3, 4]];      // [1, 2, 3, 4]\nconst user = { name: 'Ada', address: { city: 'X' } };\nconst copy = { ...user, age: 30 };            // shallow copy + new field\n\ncopy.address.city = 'Y';\nconsole.log(user.address.city); // 'Y' — same nested object, both affected</code></pre>" +
      "<p><b>What happens:</b> <code>merged</code> is built by expanding both arrays' items into one new array literal. <code>copy</code> is built by expanding <code>user</code>'s top-level properties, then adding <code>age</code>. But <code>address</code> is only shallow-copied — <code>copy.address</code> and <code>user.address</code> still point at the exact same nested object.</p>" +
      "<p><b>Result:</b> <code>[1, 2, 3, 4]</code> for the merge; for the copy, mutating <code>copy.address.city</code> silently also changes <code>user.address.city</code>, since only the top level was truly duplicated.</p>" +
      "<p><b>Important rule:</b> spread copies are always shallow — nested objects/arrays remain shared references between the original and the copy.</p>" +
      "<p><b>Don't confuse it with:</b> rest parameters — same three dots, opposite job: rest <em>collects</em> values into an array (used in a parameter list); spread <em>expands</em> a collection into individual values (used in a call or literal).</p>" +
      "<p><b>When to use:</b> copying arrays/objects, merging collections, or passing an array's items as individual function arguments.</p>" +
      "<p><b>When not to use:</b> when you need a genuinely independent deep copy — spread alone won't protect nested data from shared mutation.</p>" +
      "<p class='ex-gotcha'>Rest collects values; spread expands them. The same three-dot syntax behaves oppositely depending on where it appears.</p>",

    "Higher-order functions":
      "<p><b>Simple meaning:</b> A function that takes another function as an argument, returns a function, or both.</p>" +
      "<p><b>Think of it as:</b> a machine that operates on other machines — instead of processing raw materials directly, it takes in a smaller machine (a function) and either runs it or hands back a newly configured one.</p>" +
      "<p><b>Why it exists:</b> it's the mechanism that lets behavior itself be parameterized — passing in \"how to transform each item\" rather than hardcoding one specific transformation.</p>" +
      "<p><b>How it works:</b> because functions are first-class values in JavaScript (see \"First-class functions\"), they can be passed around exactly like any other value — including as arguments and return values.</p>" +
      "<pre><code>function applyTwice(fn, value) {\n  return fn(fn(value));\n}\nconsole.log(applyTwice(n => n + 3, 0)); // 6</code></pre>" +
      "<p><b>What happens:</b> <code>applyTwice</code> receives the function <code>n => n + 3</code> as its first argument. It calls that function on <code>0</code> to get <code>3</code>, then calls it again on the result to get <code>6</code>.</p>" +
      "<p><b>Result:</b> <code>6</code> — the same transformation applied twice, without <code>applyTwice</code> ever needing to know what the transformation actually is.</p>" +
      "<p><b>Important rule:</b> array methods like <code>map</code>, <code>filter</code>, and <code>reduce</code> are all higher-order functions — this concept is the foundation the entire modern array API is built on.</p>" +
      "<p><b>When to use:</b> whenever behavior itself should be swappable — the caller supplies the specific logic, the higher-order function supplies the surrounding structure.</p>" +
      "<p><b>When not to use:</b> don't make every function higher-order for its own sake; use it when the abstraction genuinely adds clarity or reuse.</p>" +
      "<p class='ex-gotcha'>Higher-order functions are powerful, but too much abstraction can make code harder to follow — readability still matters more than cleverness.</p>",

    "Callback functions":
      "<p><b>Simple meaning:</b> A function passed into another function, to be called later — often once some work finishes.</p>" +
      "<p><b>Think of it as:</b> leaving instructions with a friend — \"when the pizza arrives, call me\" — you hand over a specific action (the callback) without knowing exactly when it'll be triggered.</p>" +
      "<p><b>Why it exists:</b> it's the original mechanism JavaScript used for both synchronous customization (array iteration) and asynchronous work (timers, events) before Promises existed.</p>" +
      "<p><b>How it works:</b> the function that <em>receives</em> the callback decides when and with what arguments to actually invoke it — the caller has no control over that timing once the callback is handed over.</p>" +
      "<pre><code>[1, 2, 3].forEach(n => console.log(n));       // callback runs synchronously, 3 times, right now\nsetTimeout(() => console.log(\"done\"), 1000);  // callback runs once, ~1 second later</code></pre>" +
      "<p><b>What happens:</b> <code>forEach</code> calls its callback immediately, once per array element, before <code>forEach</code> itself returns. <code>setTimeout</code> instead registers its callback and returns immediately — the callback only runs later, once the timer elapses.</p>" +
      "<p><b>Result:</b> three synchronous logs first, then, roughly a second later, a fourth log — the ordering isn't obvious just from reading top to bottom.</p>" +
      "<p><b>Important rule:</b> a callback's timing (synchronous or asynchronous) is entirely decided by the function it's passed to, not by the callback itself.</p>" +
      "<p><b>Don't confuse it with:</b> a Promise — a Promise is a returned value representing a future result; a callback is a function you hand over with no return value to track its state.</p>" +
      "<p><b>When to use:</b> array iteration, event handlers, timers — any place where \"do this when X happens\" is the natural shape.</p>" +
      "<p><b>When not to use:</b> deeply nested, sequential async callbacks — that's \"callback hell,\" and Promises/async-await solve it directly.</p>" +
      "<p class='ex-gotcha'>Callbacks are the basis of async JavaScript, but callback-heavy code can quickly become difficult to debug once several are nested.</p>",

    "First-class functions":
      "<p><b>Simple meaning:</b> Functions in JavaScript are values, just like numbers or strings — they can be stored, passed around, and returned.</p>" +
      "<p><b>Think of it as:</b> in most languages a recipe is fixed to its cookbook page; in JavaScript, you can photocopy the recipe, hand it to a friend, put it in a drawer, or mail it to someone else — it behaves like any other object you own.</p>" +
      "<p><b>Why it exists:</b> without this property, callbacks and higher-order functions simply couldn't exist — you can't pass \"a function\" as an argument in a language where functions aren't ordinary values.</p>" +
      "<p><b>How it works:</b> a function can be assigned to a variable, stored in an array or object property, passed as an argument, and returned from another function — with no special syntax needed for any of it.</p>" +
      "<pre><code>const list = [n => n + 1, n => n * 2]; // functions stored in an array\nconsole.log(list.map(fn => fn(3)));    // [4, 6] — each stored function called with 3</code></pre>" +
      "<p><b>What happens:</b> <code>list</code> holds two functions as ordinary array elements. <code>list.map(fn => fn(3))</code> then calls each stored function with <code>3</code>, treating them exactly like any other value you'd iterate over.</p>" +
      "<p><b>Result:</b> <code>[4, 6]</code> — one result per stored function, produced by <em>calling</em> the value rather than just reading it.</p>" +
      "<p><b>Important rule:</b> \"first-class\" is what makes callbacks, higher-order functions, and functional composition all possible in the first place.</p>" +
      "<p><b>When to use:</b> this isn't a technique you opt into — it's a property of the language you rely on constantly, often without noticing.</p>" +
      "<p><b>When not to use:</b> n/a — there's no cost to this being true; the judgment call is only in how much you lean on passing functions around (see \"Higher-order functions\").</p>" +
      "<p class='ex-gotcha'>This capability is one of the biggest reasons JavaScript is so flexible and expressive — nearly every modern pattern (callbacks, HOFs, composition) depends on it.</p>",

    "Closures":
      "<p><b>Simple meaning:</b> A function remembers the variables from the scope where it was created, even after that outer scope has finished running.</p>" +
      "<p><b>Think of it as:</b> a backpack a function carries with it — packed with whatever variables were around when it was created — that it keeps even after leaving the room (function call) where it was packed.</p>" +
      "<p><b>Why it exists:</b> it's a direct consequence of lexical scope (see \"Lexical scope\" under fundamentals) — the language never severs a function's connection to its birth scope, which turns out to be extremely useful for private state.</p>" +
      "<p><b>How it works:</b> when <code>makeCounter</code> returns its inner arrow function, that function keeps a live reference to <code>makeCounter</code>'s local variables — they aren't garbage collected just because <code>makeCounter</code> itself has returned.</p>" +
      "<pre><code>function makeCounter() {\n  let count = 0;      // private — unreachable from outside\n  return () => ++count;\n}\nconst a = makeCounter();\nconst b = makeCounter();\nconsole.log(a(), a()); // 1 2\nconsole.log(b());      // 1 — a fresh, independent count</code></pre>" +
      "<p><b>What happens:</b> each call to <code>makeCounter()</code> creates a brand-new <code>count</code> variable and a brand-new closure over it. <code>a</code> and <code>b</code> are two completely separate closures — incrementing one never touches the other's <code>count</code>.</p>" +
      "<p><b>Result:</b> <code>a()</code> returns <code>1</code> then <code>2</code>; <code>b()</code> starts fresh at <code>1</code>, proving the two counters are fully independent.</p>" +
      "<p><b>Important rule:</b> every call to an outer function creates a fresh scope — closures over that call are independent of closures from any other call.</p>" +
      "<p><b>Don't confuse it with:</b> simply nesting functions — every nested function technically forms a closure, but the term is usually reserved for cases where the inner function is used <em>after</em> the outer one has returned, which is where the \"remembering\" becomes visible.</p>" +
      "<p><b>When to use:</b> private state (see the module pattern), factory functions, and any callback that needs to remember something from its creation context.</p>" +
      "<p><b>When not to use:</b> watch for the classic <code>var</code>-in-a-loop bug (see \"Closures in depth\" under Advanced JavaScript) — a closure keeps its <em>entire</em> enclosing scope reachable, which can also cause memory leaks if it captures something large unintentionally.</p>" +
      "<p class='ex-gotcha'>Closures are powerful but can create stale references or memory leaks if variables are shared or captured unintentionally.</p>",

    "IIFE":
      "<p><b>Simple meaning:</b> A function that runs the instant it's defined — Immediately Invoked Function Expression.</p>" +
      "<p><b>Think of it as:</b> writing a recipe and eating the dish in the same breath — you define the function and call it in one single statement, with no separate name left behind for later.</p>" +
      "<p><b>Why it exists:</b> before ES6 block scope and modules existed, wrapping code in an IIFE was the standard way to create a private, temporary scope and avoid polluting the global namespace.</p>" +
      "<p><b>How it works:</b> wrapping a function expression in parentheses, then immediately calling it with <code>()</code>, creates and executes a one-off scope boundary — anything declared inside is invisible outside it.</p>" +
      "<pre><code>(function () {\n  const secret = 42; // scoped only to this IIFE\n  console.log(secret);\n})();\nconsole.log(typeof secret); // 'undefined' — never leaked out</code></pre>" +
      "<p><b>What happens:</b> the function expression is defined and immediately called in the same statement. <code>secret</code> only ever exists inside that function's local scope — there is no way to reach it from outside.</p>" +
      "<p><b>Result:</b> <code>42</code> is logged from inside; <code>typeof secret</code> outside reports <code>'undefined'</code>, confirming nothing leaked to the enclosing scope.</p>" +
      "<p><b>Important rule:</b> the outer parentheses are required — a bare <code>function(){}()</code> is a syntax error, because JavaScript tries to parse a leading <code>function</code> keyword as a declaration, and declarations can't be immediately invoked like that.</p>" +
      "<p><b>Don't confuse it with:</b> the module pattern — an IIFE is often the mechanism <em>used to build</em> the module pattern (see JS patterns &amp; engineering), not a separate unrelated idea.</p>" +
      "<p><b>When to use:</b> rare in modern code — mostly historical or when you specifically need a one-off private scope without introducing a whole module file.</p>" +
      "<p><b>When not to use:</b> for organizing a whole file's privacy — ES modules (where top-level variables are already private to the file) have largely replaced this use case.</p>" +
      "<p class='ex-gotcha'>A bare function expression must be wrapped in parentheses to make the immediate-call syntax valid — <code>function(){}()</code> alone is a SyntaxError.</p>",

    "Pure vs impure functions":
      "<p><b>Simple meaning:</b> A pure function always returns the same output for the same input and never changes anything outside itself; an impure function does one or both of those things.</p>" +
      "<p><b>Think of it as:</b> a pure function is a vending machine — put in the same coins, always get the same snack, and the machine never rearranges the store's other shelves. An impure function is more like a roommate who might also rearrange the furniture while getting your snack.</p>" +
      "<p><b>Why it exists:</b> purity isn't a language feature you turn on — it's a discipline you apply, because pure functions are dramatically easier to test, reason about, cache, and run in parallel.</p>" +
      "<p><b>How it works:</b> a function is pure only if its result depends <em>solely</em> on its arguments, and it produces no side effects — no mutating an argument, no touching outside variables, no writing to the DOM/network/console.</p>" +
      "<pre><code>const add = (a, b) => a + b;              // PURE — same inputs, same output, no side effects\n\nlet total = 0;\nconst addToTotal = n => (total += n);     // IMPURE — depends on & mutates outside state\naddToTotal(5); addToTotal(5);              // two identical calls, two DIFFERENT results</code></pre>" +
      "<p><b>What happens:</b> <code>add</code> never looks outside its own arguments, so calling it any number of times with the same inputs always gives the same output. <code>addToTotal</code> reads and mutates the outer <code>total</code> variable — calling it twice with the identical argument <code>5</code> gives two different results, because the outside state changed between calls.</p>" +
      "<p><b>Result:</b> <code>add(2,3)</code> is always <code>5</code>, forever. <code>addToTotal(5)</code> returns <code>5</code> the first time and <code>10</code> the second — its behavior is not just a function of its input anymore.</p>" +
      "<p><b>Important rule:</b> if a function's output could change without its input changing, it's impure — and that's exactly the property that breaks memoization and predictable testing.</p>" +
      "<p><b>When to use:</b> prefer pure functions for calculations, transformations, and — especially — React reducers and selectors, wherever predictability and testability matter.</p>" +
      "<p><b>When not to use:</b> impurity is unavoidable (and fine) wherever real side effects are the whole point — DOM updates, network calls, writing to a database, logging.</p>" +
      "<p class='ex-gotcha'>Pure functions are the foundation of many React patterns and functional programming ideas — they're what makes memoization and predictable re-renders possible.</p>",

    "Function composition":
      "<p><b>Simple meaning:</b> Combining small functions so the output of one becomes the input of the next, building a pipeline of transformations.</p>" +
      "<p><b>Think of it as:</b> an assembly line — raw material goes in one end, each station does one small, focused job, and the finished product comes out the other end without any single station needing to know the whole process.</p>" +
      "<p><b>Why it exists:</b> it lets you build complex behavior out of small, individually testable, individually reusable pieces, instead of one large function doing everything at once.</p>" +
      "<p><b>How it works:</b> <code>compose(f, g)</code> returns a new function that, when called with <code>x</code>, first runs <code>g(x)</code>, then feeds that result into <code>f</code>. Each piece stays completely unaware of the others.</p>" +
      "<pre><code>const compose = (f, g) => x => f(g(x));\nconst shout = compose(s => s + \"!\", s => s.toUpperCase());\nconsole.log(shout(\"hi\")); // HI!</code></pre>" +
      "<p><b>What happens:</b> calling <code>shout(\"hi\")</code> first runs the inner function <code>s => s.toUpperCase()</code> on <code>\"hi\"</code>, producing <code>\"HI\"</code>. That result then feeds into the outer function <code>s => s + \"!\"</code>, producing <code>\"HI!\"</code>.</p>" +
      "<p><b>Result:</b> <code>\"HI!\"</code> — two tiny, independently-testable functions combined into one pipeline, with neither function needing to know about the other.</p>" +
      "<p><b>Important rule:</b> in <code>compose(f, g)</code>, execution runs right-to-left — <code>g</code> runs first, then <code>f</code> — which can surprise people expecting left-to-right reading order.</p>" +
      "<p><b>Don't confuse it with:</b> <code>pipe</code> — a common sibling helper that runs functions left-to-right instead, often considered more readable for a sequential pipeline.</p>" +
      "<p><b>When to use:</b> when data naturally flows through a sequence of independent transformations — validation pipelines, data formatting chains.</p>" +
      "<p><b>When not to use:</b> when a plain, step-by-step function body would be easier to follow — composing too many tiny functions deep can hurt readability and make stack traces harder to debug.</p>" +
      "<p class='ex-gotcha'>Composing too many small functions can become harder to debug than a plain function body — composition is a clarity tool, not a goal to maximize.</p>",

    "Currying concept":
      "<p><b>Simple meaning:</b> Transforming a function that takes several arguments into a chain of functions that each take exactly one argument.</p>" +
      "<p><b>Think of it as:</b> instead of one order form asking for all three toppings at once, you're handed a new, smaller form after each choice — pick topping one, get a form for topping two, pick that, get a form for topping three.</p>" +
      "<p><b>Why it exists:</b> it lets you \"lock in\" arguments one at a time, creating specialized, reusable versions of a general function as you go.</p>" +
      "<p><b>How it works:</b> each call in the chain returns a new function that has \"remembered\" (via closure) the argument just supplied, waiting for the next one — until all arguments have been collected and the final calculation runs.</p>" +
      "<pre><code>const add = a => b => c => a + b + c;\nconsole.log(add(1)(2)(3));   // 6 — three separate calls, one argument each\n\nconst add5 = add(5);          // a partially-applied function, remembering a=5\nconsole.log(add5(10)(20));    // 35</code></pre>" +
      "<p><b>What happens:</b> <code>add(1)</code> returns a new function that has closed over <code>a = 1</code>. Calling that with <code>(2)</code> returns another function closing over <code>b = 2</code> too. The final call with <code>(3)</code> has all three values available via closure and computes the sum.</p>" +
      "<p><b>Result:</b> <code>6</code> from the fully-chained call; <code>35</code> from reusing the partially-applied <code>add5</code> with two more numbers — proving the intermediate function genuinely remembers <code>a = 5</code>.</p>" +
      "<p><b>Important rule:</b> currying fixes arguments strictly one at a time, in a fixed sequence — that's the defining trait that separates it from partial application.</p>" +
      "<p><b>Don't confuse it with:</b> partial application (the next entry) — currying is always single-argument steps; partial application can fix several arguments at once in a single call.</p>" +
      "<p><b>When to use:</b> when argument flow is naturally stepwise, or when you want to build specialized, reusable functions by fixing one argument at a time.</p>" +
      "<p><b>When not to use:</b> when it makes a simple function call needlessly abstract — currying every function \"just in case\" adds indirection without benefit.</p>" +
      "<p class='ex-gotcha'>Currying is different from partial application. Currying fixes arguments one at a time; partial application can fix multiple arguments at once.</p>",

    "Partial application concept":
      "<p><b>Simple meaning:</b> Pre-filling some of a function's arguments now, so you can call it later with just the remaining ones.</p>" +
      "<p><b>Think of it as:</b> pre-addressing an envelope with your return address, so all that's left to fill in later is the recipient — some information is locked in ahead of time, the rest stays open.</p>" +
      "<p><b>Why it exists:</b> to create reusable, specialized helpers from a more general function, without writing a full new wrapper function by hand each time.</p>" +
      "<p><b>How it works:</b> a new function is created that closes over the pre-filled argument(s) and, when called, supplies them alongside whatever new arguments are passed in.</p>" +
      "<pre><code>const add = (a, b) => a + b;\nconst add10 = b => add(10, b); // 'a' is pre-filled to 10\nconsole.log(add10(5)); // 15</code></pre>" +
      "<p><b>What happens:</b> <code>add10</code> is a new function that, via closure, always supplies <code>10</code> as the first argument to <code>add</code> — the caller of <code>add10</code> only ever needs to supply the second value.</p>" +
      "<p><b>Result:</b> <code>15</code> — <code>add10(5)</code> is really just <code>add(10, 5)</code> under the hood, with the <code>10</code> already baked in.</p>" +
      "<p><b>Important rule:</b> unlike currying, partial application can fix any number of arguments in a single step — it's not restricted to exactly one at a time.</p>" +
      "<p><b>Don't confuse it with:</b> currying — partial application is the more general, flexible sibling; currying is a specific, strict single-argument-per-step version of the same idea.</p>" +
      "<p><b>When to use:</b> creating reusable, specialized helpers from a general-purpose function — reducing repetitive wrapper functions.</p>" +
      "<p><b>When not to use:</b> when a direct, explicitly-named wrapper function would be more readable than an abstract partial-application helper.</p>" +
      "<p class='ex-gotcha'>Partial application is a practical pattern in libraries and APIs, but it should not hide obvious code behind unnecessary abstraction.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Arrays & modern data handling": {
    "Arrays & modern data handling overview":
      "<p><b>Simple meaning:</b> Arrays are ordered lists of values, and modern array methods let you transform, filter, and summarize that data without manual loops.</p>" +
      "<p><b>Think of it as:</b> a conveyor belt of items — instead of manually picking up each one, you send the whole belt through a labeled machine (<code>map</code>, <code>filter</code>, <code>reduce</code>) that does one specific job to every item automatically.</p>" +
      "<p><b>Why it exists:</b> arrays are the default structure for lists in JavaScript — API results, UI rows, form values, and data pipelines almost always start life as an array.</p>" +
      "<p><b>How it works:</b> array methods usually iterate over each element, call a callback when needed, and return either a new array or a single value — most of them are higher-order functions (see \"Higher-order functions\" under Functions).</p>" +
      "<pre><code>const scores = [88, 92, 75];\nconst doubled = scores.map(score => score * 2);\nconsole.log(doubled); // [176, 184, 150]\nconsole.log(scores);  // [88, 92, 75] — untouched</code></pre>" +
      "<p><b>What happens:</b> <code>map</code> walks <code>scores</code>, doubles each value, and collects the results into a brand-new array — the original <code>scores</code> array is never touched.</p>" +
      "<p><b>Result:</b> a new array, same length as the original, holding transformed values — this \"new array out, original untouched\" pattern is true for most (but not all) array methods.</p>" +
      "<p><b>Important rule:</b> the array API is powerful, but not every method is immutable — some, like <code>sort</code> and <code>splice</code>, mutate the original array in place, so always check before assuming safety.</p>" +
      "<p><b>When to use:</b> whenever order matters, when iterating related values, or when transforming a collection without mutating the source.</p>" +
      "<p><b>When not to use:</b> for lookup-heavy data, prefer an object or a <code>Map</code> instead — arrays require scanning to find something by a non-index key.</p>" +
      "<p class='ex-gotcha'>The array API is powerful, but not every method is immutable. Some methods like <code>sort</code> and <code>splice</code> mutate the original array, so choose carefully.</p>",

    "map":
      "<p><b>Simple meaning:</b> Transforms every item in an array and returns a new array of the exact same length.</p>" +
      "<p><b>Think of it as:</b> a photocopier with a filter lens attached — every original page goes through, one copy comes out for every page in, just visually altered.</p>" +
      "<p><b>Why it exists:</b> to replace hand-written loops for the extremely common task of \"turn every item into a new form\" — formatting, enrichment, or projecting one property out.</p>" +
      "<p><b>How it works:</b> <code>map</code> calls its callback once per element, in order, and collects every returned value into a new array — it never skips or reorders elements.</p>" +
      "<pre><code>const prices = [10, 20, 30];\nconst taxed = prices.map(price => price * 1.18);\nconsole.log(taxed);  // [11.8, 23.6, 35.4]\nconsole.log(prices);  // [10, 20, 30] — original unchanged</code></pre>" +
      "<p><b>What happens:</b> the callback runs three times, once per price, each time returning a new taxed value — <code>map</code> collects these three return values into <code>taxed</code>, in the same order they came in.</p>" +
      "<p><b>Result:</b> a new array of length 3 — always the same length as the input, one output per input, never more or fewer.</p>" +
      "<p><b>Important rule:</b> if your callback isn't returning a meaningful value, you almost certainly want a different method — <code>map</code> exists specifically to build a transformed array.</p>" +
      "<p><b>Don't confuse it with:</b> <code>forEach</code> — visually similar syntax, but <code>forEach</code> always returns <code>undefined</code> and is for side effects, not building a new array.</p>" +
      "<p><b>When to use:</b> converting each item into a new form — formatting a date, extracting one field, applying a calculation.</p>" +
      "<p><b>When not to use:</b> don't use <code>map</code> purely for side effects like logging or mutating values — that's what <code>forEach</code> or a plain loop is for.</p>" +
      "<p class='ex-gotcha'>A common mistake is using <code>map</code> when you really mean <code>forEach</code>. If you are not returning a value, you probably need a different method.</p>",

    "filter":
      "<p><b>Simple meaning:</b> Keeps only the items that pass a condition, discarding the rest.</p>" +
      "<p><b>Think of it as:</b> a sieve — pour in the whole batch, only the pieces that fit the criteria fall through to the other side; the rest simply don't make it into the new pile.</p>" +
      "<p><b>Why it exists:</b> to replace manual loops that build up a subset array with an <code>if</code> check inside — a very common task that deserved its own dedicated, readable method.</p>" +
      "<p><b>How it works:</b> <code>filter</code> calls its callback once per element and keeps the element in the output only if the callback returns something truthy — it never transforms the surviving values, only decides whether they stay.</p>" +
      "<pre><code>const numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);   // [2, 4]\nconsole.log(numbers); // [1, 2, 3, 4, 5] — original unchanged</code></pre>" +
      "<p><b>What happens:</b> the callback runs five times. For <code>1</code>, <code>3</code>, <code>5</code> it returns <code>false</code> (odd), so those are dropped. For <code>2</code>, <code>4</code> it returns <code>true</code>, so they're kept, in their original order.</p>" +
      "<p><b>Result:</b> a new array whose length is <code>&lt;=</code> the original — items that fail the test are dropped entirely, never transformed or replaced.</p>" +
      "<p><b>Important rule:</b> <code>filter</code> never changes the surviving values — it only decides which ones stay, unchanged.</p>" +
      "<p><b>Don't confuse it with:</b> <code>reduce</code> — <code>filter</code> keeps a subset of items in their original shape; <code>reduce</code> combines items into one entirely new value.</p>" +
      "<p><b>When to use:</b> selecting a subset of data based on a rule — active users, valid emails, matching IDs.</p>" +
      "<p><b>When not to use:</b> don't use it to mutate the original array or trigger side effects — it's a data selection tool, not a side-effect runner.</p>" +
      "<p class='ex-gotcha'>Filtering is not the same as reducing. It keeps items, while reduce combines them into one value.</p>",

    "reduce":
      "<p><b>Simple meaning:</b> Combines an entire array into a single value by repeatedly applying a combining function.</p>" +
      "<p><b>Think of it as:</b> a snowball rolling downhill — it starts small (the initial value), and each item it rolls over gets folded into it, growing/changing the snowball one step at a time until only the final snowball remains.</p>" +
      "<p><b>Why it exists:</b> it's the most general array-processing tool — totals, grouping, building objects, even reimplementing <code>map</code> or <code>filter</code> are all just special cases of reducing.</p>" +
      "<p><b>How it works:</b> the callback receives the running accumulator and the current element on each call, and returns the new accumulator value for the next call — starting from the given initial value.</p>" +
      "<pre><code>const total = [5, 10, 15].reduce((sum, n) => sum + n, 0);\nconsole.log(total); // 30\n\n// step by step: sum=0,n=5 → 5 | sum=5,n=10 → 15 | sum=15,n=15 → 30</code></pre>" +
      "<p><b>What happens:</b> the accumulator starts at the given initial value <code>0</code>. Each call adds the current element to it, and the result becomes the accumulator for the next call — after all three elements, the final accumulator is returned.</p>" +
      "<p><b>Result:</b> a single value, <code>30</code> — not an array. <code>reduce</code> is the only array method whose output can be literally any type: a number, object, string, or even a brand-new array.</p>" +
      "<p><b>Important rule:</b> always pass an initial value — without one, <code>reduce</code> uses the array's first element as the starting accumulator instead, and throws on an empty array with none given.</p>" +
      "<p><b>Don't confuse it with:</b> <code>map</code>/<code>filter</code> — those always produce an array of the same or smaller size; <code>reduce</code> can collapse an array down to one value of any shape at all.</p>" +
      "<p><b>When to use:</b> totals, grouping, aggregation, or building an entirely new data shape from an array.</p>" +
      "<p><b>When not to use:</b> avoid it for simple cases where <code>map</code> or <code>filter</code> alone are clearer — <code>reduce</code> can become hard to read if overused for trivial transforms.</p>" +
      "<p class='ex-gotcha'>The accumulator is the secret weapon in reduce. Forgetting the initial value often causes the first element to be skipped, or a TypeError on an empty array.</p>",

    "forEach":
      "<p><b>Simple meaning:</b> Loops over an array and runs a callback once per item, purely for side effects.</p>" +
      "<p><b>Think of it as:</b> walking down a row of mailboxes and dropping a letter in each — you're taking an action at each stop, not collecting anything to bring back with you.</p>" +
      "<p><b>Why it exists:</b> to give a clean, readable alternative to a manual <code>for</code> loop when the goal is purely \"do this for every item\" — logging, updating the DOM, pushing to an outside array.</p>" +
      "<p><b>How it works:</b> it calls the callback once per element, in order, and always returns <code>undefined</code> when finished — it builds nothing and cannot be broken out of early like a real loop can.</p>" +
      "<pre><code>const names = ['Ada', 'Linus'];\nconst result = names.forEach(name => console.log('Hello', name));\nconsole.log(result); // undefined</code></pre>" +
      "<p><b>What happens:</b> the callback runs twice, logging a greeting each time as a side effect. <code>forEach</code> itself doesn't collect or return any of those calls' results.</p>" +
      "<p><b>Result:</b> <code>undefined</code>, always — regardless of what the callback does or returns internally.</p>" +
      "<p><b>Important rule:</b> unlike <code>map</code>, <code>forEach</code> never returns a new array — it's about action, not transformation.</p>" +
      "<p><b>Don't confuse it with:</b> <code>map</code> — visually similar, but assigning <code>forEach</code>'s result to a variable, expecting a transformed array, is a very common beginner mistake.</p>" +
      "<p><b>When to use:</b> acting on each element without needing a new array back — logging, rendering, pushing into an external structure.</p>" +
      "<p><b>When not to use:</b> when you need a transformed array or a boolean result — use <code>map</code>, <code>filter</code>, or <code>some</code>/<code>every</code> instead.</p>" +
      "<p class='ex-gotcha'>Unlike <code>map</code>, <code>forEach</code> does not return a new array. It is about action, not transformation.</p>",

    "find":
      "<p><b>Simple meaning:</b> Returns the first item in the array that matches a condition.</p>" +
      "<p><b>Think of it as:</b> searching a filing cabinet drawer by drawer — the instant you find a matching file, you stop looking and hand back that one file, ignoring the rest of the drawer.</p>" +
      "<p><b>Why it exists:</b> to replace a manual loop-with-early-break pattern for the common task of \"find the one record matching this rule.\"</p>" +
      "<p><b>How it works:</b> <code>find</code> calls its callback per element, in order, and stops immediately at the first one where the callback returns truthy — it never scans further once it has a match.</p>" +
      "<pre><code>const users = [{ id: 1, name: 'Ada' }, { id: 2, name: 'Grace' }];\nconst user = users.find(u => u.id === 2);\nconsole.log(user);        // { id: 2, name: 'Grace' }\nconsole.log(user.name);   // 'Grace'</code></pre>" +
      "<p><b>What happens:</b> the callback checks the first user (<code>id 1</code>, doesn't match), then the second (<code>id 2</code>, matches) — <code>find</code> stops right there and returns that object, without checking anything further.</p>" +
      "<p><b>Result:</b> the matching item itself — an object here, but could be any element type — or <code>undefined</code> if the search reaches the end with no match.</p>" +
      "<p><b>Important rule:</b> <code>find</code> returns <code>undefined</code> when nothing matches, never <code>null</code> and never an error — always guard the result before using it.</p>" +
      "<p><b>Don't confuse it with:</b> <code>filter</code> — <code>find</code> returns one item (or none); <code>filter</code> returns every matching item as a new array.</p>" +
      "<p><b>When to use:</b> searching for exactly one record by a rule — a user by ID, a matching product name.</p>" +
      "<p><b>When not to use:</b> when you need every match, not just the first — use <code>filter</code> instead.</p>" +
      "<p class='ex-gotcha'>If you need the index instead of the value, use <code>findIndex</code>.</p>",

    "findIndex":
      "<p><b>Simple meaning:</b> Returns the position of the first item that matches a condition, instead of the item itself.</p>" +
      "<p><b>Think of it as:</b> <code>find</code>'s twin who hands you the shelf number instead of the book — useful when you need to know exactly <em>where</em> something is, not just what it is.</p>" +
      "<p><b>Why it exists:</b> to support use cases where you need the position — updating, removing, or reordering an item — which the item's value alone can't tell you.</p>" +
      "<p><b>How it works:</b> like <code>find</code>, it checks elements in order and stops at the first match — but returns the numeric index of that match, not the element.</p>" +
      "<pre><code>const ids = [10, 20, 30];\nconsole.log(ids.findIndex(id => id === 20)); // 1\nconsole.log(ids.findIndex(id => id === 99)); // -1 — no match found</code></pre>" +
      "<p><b>What happens:</b> the search checks index 0 (<code>10</code>, no match), index 1 (<code>20</code>, match) — stops there and returns <code>1</code>. The second call scans the entire array and never matches.</p>" +
      "<p><b>Result:</b> a number — either a valid index (<code>0</code> or greater) or <code>-1</code> for \"not found.\"</p>" +
      "<p><b>Important rule:</b> when nothing matches, <code>findIndex</code> returns <code>-1</code>, not <code>undefined</code> — a classic interview trap, since <code>-1</code> is truthy and can silently pass an unchecked <code>if</code>.</p>" +
      "<p><b>Don't confuse it with:</b> <code>find</code> — same search logic, different return type (position vs. value).</p>" +
      "<p><b>When to use:</b> when you need to update, delete, or reorder an item and require its position, not just its value.</p>" +
      "<p><b>When not to use:</b> when you actually want the item itself — use <code>find</code> instead and skip the extra indexing step.</p>" +
      "<p class='ex-gotcha'>If no item matches, <code>findIndex</code> returns <code>-1</code>, which is a common interview trap since <code>-1</code> is truthy.</p>",

    "some":
      "<p><b>Simple meaning:</b> Checks whether at least one item in the array satisfies a condition.</p>" +
      "<p><b>Think of it as:</b> asking \"is anyone in this room over 18?\" — the moment you find one qualifying person, you have your answer and stop checking the rest.</p>" +
      "<p><b>Why it exists:</b> to answer a yes/no \"does at least one exist?\" question without manually looping and breaking early.</p>" +
      "<p><b>How it works:</b> it calls the callback per element, stopping and returning <code>true</code> the instant one returns truthy — if it reaches the end with no truthy result, it returns <code>false</code>.</p>" +
      "<pre><code>const scores = [70, 90, 55];\nconsole.log(scores.some(score => score > 80)); // true — stops at 90\nconsole.log([].some(score => score > 80));     // false — empty, nothing to find</code></pre>" +
      "<p><b>What happens:</b> the search checks <code>70</code> (no), then <code>90</code> (yes) — stops immediately, never checking <code>55</code> at all. On the empty array, there's nothing to check, so it defaults to <code>false</code>.</p>" +
      "<p><b>Result:</b> a boolean, always — never the matching item itself; use <code>find</code> if you need the item.</p>" +
      "<p><b>Important rule:</b> on an empty array, <code>some</code> is always <code>false</code> — there's nothing that could possibly satisfy the condition.</p>" +
      "<p><b>Don't confuse it with:</b> <code>every</code> — the opposite question (\"do ALL satisfy this?\"), which behaves oppositely on an empty array too.</p>" +
      "<p><b>When to use:</b> presence checks — \"is any user an admin?\", \"does any value exceed the limit?\"</p>" +
      "<p><b>When not to use:</b> when you need all matches, or a complete aggregated answer — use <code>filter</code> or <code>every</code> instead.</p>" +
      "<p class='ex-gotcha'><code>some</code> stops at the first truthy result — this early exit is a useful performance optimization on large arrays.</p>",

    "every":
      "<p><b>Simple meaning:</b> Checks whether every item in the array satisfies a condition.</p>" +
      "<p><b>Think of it as:</b> a quality inspector checking every item on the line — the instant one fails, the whole batch fails and the inspector stops; only a fully passing batch gets the green light.</p>" +
      "<p><b>Why it exists:</b> to answer a yes/no \"do ALL of these satisfy the rule?\" question — validating that every field is filled in, every number is positive, etc.</p>" +
      "<p><b>How it works:</b> it calls the callback per element, stopping and returning <code>false</code> the instant one returns falsy — if it reaches the end without ever failing, it returns <code>true</code>.</p>" +
      "<pre><code>const ages = [20, 25, 30];\nconsole.log(ages.every(age => age >= 18)); // true — none failed\nconsole.log([].every(age => age >= 18));   // true — vacuously, nothing failed either</code></pre>" +
      "<p><b>What happens:</b> all three ages pass the check, so <code>every</code> reaches the end without ever returning <code>false</code>, and defaults to <code>true</code>. On the empty array, there's nothing to fail the check, so it's also <code>true</code> — \"vacuous truth.\"</p>" +
      "<p><b>Result:</b> a boolean — and notably, an empty array always returns <code>true</code>, which surprises people expecting <code>false</code>.</p>" +
      "<p><b>Important rule:</b> an empty array returns <code>true</code> for <code>every</code>, because \"all items satisfy the condition\" is vacuously true when there are no items to check.</p>" +
      "<p><b>Don't confuse it with:</b> <code>some</code> — the mirror opposite, which is <code>false</code> on an empty array instead of <code>true</code>.</p>" +
      "<p><b>When to use:</b> validating that all values in a set meet a rule — form completeness, positive-number checks.</p>" +
      "<p><b>When not to use:</b> when you only need at least one match — use <code>some</code> instead.</p>" +
      "<p class='ex-gotcha'>An empty array returns <code>true</code> for <code>every</code>, because \"all items satisfy the condition\" is vacuously true.</p>",

    "includes":
      "<p><b>Simple meaning:</b> Checks whether an array contains a given value.</p>" +
      "<p><b>Think of it as:</b> a quick yes/no membership check — \"is this exact item somewhere in this list?\" — without needing to write a search callback yourself.</p>" +
      "<p><b>Why it exists:</b> for the extremely common \"is X in this array?\" check, without the overhead of writing <code>some(x => x === value)</code> by hand every time.</p>" +
      "<p><b>How it works:</b> it compares each element to the given value using strict-equality-like comparison (technically SameValueZero, which also correctly matches <code>NaN</code>), and returns <code>true</code> on the first match.</p>" +
      "<pre><code>const roles = ['admin', 'editor'];\nconsole.log(roles.includes('editor')); // true\n\nconst objs = [{ id: 1 }];\nconsole.log(objs.includes({ id: 1 })); // false — different object reference</code></pre>" +
      "<p><b>What happens:</b> the string comparison works because primitives compare by value — <code>'editor' === 'editor'</code> is true regardless of where each string came from. The object comparison fails because <code>{id:1}</code> and <code>{id:1}</code> are two distinct objects in memory, even with identical contents.</p>" +
      "<p><b>Result:</b> a boolean — but only reliably meaningful for primitive values; objects need identity, not just similarity, to match.</p>" +
      "<p><b>Important rule:</b> for objects, <code>includes</code> will not find a similar object unless it's the exact same reference — it checks identity, not structural equality.</p>" +
      "<p><b>Don't confuse it with:</b> <code>find</code> with a custom predicate — that's the correct tool for \"does an object matching these properties exist in this array?\"</p>" +
      "<p><b>When to use:</b> checking membership for primitive values — is a role allowed, is an item already in a cart (by ID or string).</p>" +
      "<p><b>When not to use:</b> for deep object comparisons — use <code>find</code> or a custom predicate for object matching instead.</p>" +
      "<p class='ex-gotcha'>For objects, <code>includes</code> will not find a similar object unless it is the same reference. Use <code>find</code> or a custom predicate for object matching.</p>",

    "sort":
      "<p><b>Simple meaning:</b> Arranges array items in order, mutating the array in place.</p>" +
      "<p><b>Think of it as:</b> a librarian who, by default, alphabetizes everything as if every item were a word on a spine — including books whose \"titles\" are actually numbers, which produces confusing results.</p>" +
      "<p><b>Why it exists:</b> to order lists — scores, names, dates, search results — without hand-writing a sorting algorithm.</p>" +
      "<p><b>How it works:</b> with no compare function, <code>sort</code> converts every element to a <b>string</b> and compares them character by character. With a compare function <code>(a, b) => ...</code>, a negative return means <code>a</code> comes first, positive means <code>b</code> comes first.</p>" +
      "<pre><code>console.log([10, 2, 1].sort());              // [1, 10, 2] — sorted as TEXT, not numbers\nconsole.log([10, 2, 1].sort((a, b) => a - b)); // [1, 2, 10] — correct numeric order</code></pre>" +
      "<p><b>What happens:</b> without a comparator, <code>\"10\"</code>, <code>\"2\"</code>, <code>\"1\"</code> are compared as strings — <code>\"1\"</code> sorts before <code>\"10\"</code> before <code>\"2\"</code>, because <code>'1' &lt; '2'</code> character by character. The comparator version explicitly subtracts to force real numeric comparison.</p>" +
      "<p><b>Result:</b> the SAME array, reordered in place — <code>sort</code> returns the array too, but it's the identical reference, not a copy.</p>" +
      "<p><b>Important rule:</b> the default sort order is lexicographic (string-based), not numeric — always pass a compare function for numbers.</p>" +
      "<p><b>Don't confuse it with:</b> <code>toSorted()</code> (ES2023) — the newer, non-mutating sibling that returns a new sorted array instead of mutating in place.</p>" +
      "<p><b>When to use:</b> ordering lists of names, dates, or numeric data (with an explicit comparator).</p>" +
      "<p><b>When not to use:</b> don't rely on default <code>sort</code> for numeric values — it sorts as strings unless you provide a comparator.</p>" +
      "<p class='ex-gotcha'>The default sort order is based on strings, so <code>[10, 2, 1].sort()</code> gives <code>[1, 10, 2]</code>, not <code>[1, 2, 10]</code> — a compare function fixes that.</p>",

    "slice":
      "<p><b>Simple meaning:</b> Copies a portion of an array into a new array, without changing the original.</p>" +
      "<p><b>Think of it as:</b> photographing a section of a long scroll — you get an image of that part, but the original scroll is completely undisturbed.</p>" +
      "<p><b>Why it exists:</b> for safely extracting a range of items — pagination, previews, or making a plain copy — without any risk of mutating the source data.</p>" +
      "<p><b>How it works:</b> <code>slice(start, end)</code> returns a shallow copy of elements from <code>start</code> up to (but not including) <code>end</code>, leaving the original array completely untouched.</p>" +
      "<pre><code>const nums = [1, 2, 3, 4];\nconst part = nums.slice(1, 3);\nconsole.log(part); // [2, 3]\nconsole.log(nums); // [1, 2, 3, 4] — untouched</code></pre>" +
      "<p><b>What happens:</b> <code>slice(1, 3)</code> copies elements at index 1 and 2 (index 3 is excluded, since <code>end</code> is exclusive) into a brand-new array — <code>nums</code> itself is never read-modified.</p>" +
      "<p><b>Result:</b> a new array holding just the requested range — the original array is always left exactly as it was.</p>" +
      "<p><b>Important rule:</b> <code>slice</code> never mutates — say the name out loud: \"sLICe leaves\" the original alone.</p>" +
      "<p><b>Don't confuse it with:</b> <code>splice</code> — nearly identical spelling, opposite behavior: <code>splice</code> mutates the source array and removes/inserts in place.</p>" +
      "<p><b>When to use:</b> pagination, previewing a subset of data, or making a safe top-level copy of an array.</p>" +
      "<p><b>When not to use:</b> when you actually want to remove elements from the original array — use <code>splice</code> for that.</p>" +
      "<p class='ex-gotcha'>Unlike <code>splice</code>, <code>slice</code> does not mutate the array — this is a key distinction that comes up constantly in interviews.</p>",

    "splice":
      "<p><b>Simple meaning:</b> Adds or removes items from an array in place, mutating the original.</p>" +
      "<p><b>Think of it as:</b> physically cutting and pasting pages directly into the original scroll — the source document itself changes, permanently, right where you made the edit.</p>" +
      "<p><b>Why it exists:</b> for directly editing a list — removing selected items, inserting new values at a specific position — without building a whole new array by hand.</p>" +
      "<p><b>How it works:</b> <code>splice(start, deleteCount, ...itemsToInsert)</code> removes <code>deleteCount</code> items starting at <code>start</code>, optionally inserting new items in their place, and returns an array of whatever was removed.</p>" +
      "<pre><code>const items = ['a', 'b', 'c'];\nconst removed = items.splice(1, 1, 'x');\nconsole.log(items);   // ['a', 'x', 'c'] — mutated!\nconsole.log(removed); // ['b'] — what was taken out</code></pre>" +
      "<p><b>What happens:</b> starting at index 1, <code>splice</code> removes 1 item (<code>'b'</code>) and inserts <code>'x'</code> in its place — directly modifying <code>items</code> itself, and separately returning the removed element(s) as their own array.</p>" +
      "<p><b>Result:</b> <code>items</code> is permanently changed; <code>removed</code> is a small separate array of whatever got taken out — two distinct pieces of information from one call.</p>" +
      "<p><b>Important rule:</b> a very common mistake is treating <code>splice</code> like a copy operation — it directly changes the source array, it does not return a modified copy.</p>" +
      "<p><b>Don't confuse it with:</b> <code>slice</code> — nearly identical spelling, opposite behavior: <code>slice</code> is the safe, non-mutating copy operation.</p>" +
      "<p><b>When to use:</b> dynamically managing a list in place — removing selected items, inserting values at a known position.</p>" +
      "<p><b>When not to use:</b> when you want an immutable workflow — <code>slice</code>, spread, and <code>filter</code> are the safer options in modern code.</p>" +
      "<p class='ex-gotcha'>A common mistake is to treat <code>splice</code> like a copy operation. It changes the source array — it is not the safe sibling of <code>slice</code>.</p>",

    "flat":
      "<p><b>Simple meaning:</b> Flattens nested arrays by a given number of levels — one level by default.</p>" +
      "<p><b>Think of it as:</b> unpacking a set of nested boxes — <code>flat()</code> opens just the outer box and dumps its immediate contents onto the table; <code>flat(2)</code> opens two layers deep, and so on.</p>" +
      "<p><b>Why it exists:</b> to handle data that arrives nested — grouped API responses, parsed structures — where you just want one flat list.</p>" +
      "<p><b>How it works:</b> it creates a new array with sub-array elements concatenated into the parent array, up to the specified depth — any nesting beyond that depth is left as-is, still nested.</p>" +
      "<pre><code>const nested = [1, [2, 3], [4, [5]]];\nconsole.log(nested.flat(1));  // [1, 2, 3, 4, [5]]  — only 1 level opened, [5] stays nested\nconsole.log(nested.flat(2));  // [1, 2, 3, 4, 5]    — 2 levels opens everything here</code></pre>" +
      "<p><b>What happens:</b> <code>flat(1)</code> opens exactly one layer of nesting — the outer <code>[2,3]</code> and <code>[4,[5]]</code> get unwrapped, but the inner <code>[5]</code> (nested two levels deep) survives untouched. <code>flat(2)</code> goes one layer further and reaches it too.</p>" +
      "<p><b>Result:</b> a new, less-nested array — the original <code>nested</code> is unaffected either way.</p>" +
      "<p><b>Important rule:</b> <code>flat</code> only goes as deep as the number you give it — with nesting beyond that depth, the deeper arrays are preserved, not silently flattened.</p>" +
      "<p><b>Don't confuse it with:</b> <code>Infinity</code> as the depth (<code>arr.flat(Infinity)</code>) — a real, intentional way to fully flatten arbitrarily nested data of unknown depth.</p>" +
      "<p><b>When to use:</b> data that has predictable nested arrays from parsing or API responses.</p>" +
      "<p><b>When not to use:</b> when nesting depth is unpredictable and you need every level flattened — use <code>flat(Infinity)</code> or a custom recursive reduction.</p>" +
      "<p class='ex-gotcha'><code>flat</code> only goes as deep as you ask. With nesting beyond the given depth, it preserves the deeper arrays as-is.</p>",

    "flatMap":
      "<p><b>Simple meaning:</b> Maps each element and flattens the result by exactly one level, in a single pass.</p>" +
      "<p><b>Think of it as:</b> <code>map</code> and <code>flat(1)</code> fused into one step — instead of running two separate passes over the array, one combined pass does both jobs.</p>" +
      "<p><b>Why it exists:</b> a common pattern is \"transform each item into an array, then flatten the results\" — <code>flatMap</code> avoids the wasted intermediate array a separate <code>.map().flat()</code> would create.</p>" +
      "<p><b>How it works:</b> each callback call returns an array (or a single value); <code>flatMap</code> automatically flattens exactly one level of that result into the final output array.</p>" +
      "<pre><code>const words = ['Hi', 'there'];\nconsole.log(words.flatMap(word => word.split(''))); // ['H','i','t','h','e','r','e']\nconsole.log(words.map(word => word.split('')));      // [['H','i'], ['t','h','e','r','e']] — still nested</code></pre>" +
      "<p><b>What happens:</b> each word is split into an array of characters. Plain <code>map</code> leaves those as nested arrays (one per word). <code>flatMap</code> automatically flattens that one extra level, merging every character into a single flat array.</p>" +
      "<p><b>Result:</b> one flat array of every character across all words — exactly one level of nesting removed compared to plain <code>map</code>.</p>" +
      "<p><b>Important rule:</b> <code>flatMap</code> only flattens ONE level, regardless of how deeply nested the callback's return value is — it's not a general-purpose deep-flatten tool.</p>" +
      "<p><b>Don't confuse it with:</b> chaining <code>.map().flat()</code> separately — same end result for one level, but <code>flatMap</code> does it in a single, slightly more efficient pass.</p>" +
      "<p><b>When to use:</b> when each element produces an array and you want those arrays merged into one flat list.</p>" +
      "<p><b>When not to use:</b> when the transformed output isn't array-shaped, or when the callback is doing too much — a manual loop or <code>reduce</code> can be easier to read.</p>" +
      "<p class='ex-gotcha'>It's very convenient, but if you need more control over shape and depth, a manual loop or <code>reduce</code> can be easier to read.</p>",

    "Array destructuring":
      "<p><b>Simple meaning:</b> Unpacks values from an array into individual variables, matched by position.</p>" +
      "<p><b>Think of it as:</b> lining up numbered lockers and reaching straight into locker 1, locker 2, and so on — you grab exactly the slots you name, in the order you name them.</p>" +
      "<p><b>Why it exists:</b> it makes code cleaner when working with tuples, function return values, and argument lists — avoiding <code>const first = arr[0]; const second = arr[1];</code> line by line.</p>" +
      "<p><b>How it works:</b> a pattern like <code>[first, second]</code> or <code>[a, ...rest]</code> binds array elements to new variables strictly by position — the first pattern name always gets index <code>0</code>, the second gets index <code>1</code>, and so on.</p>" +
      "<pre><code>const [first, second, ...others] = [1, 2, 3, 4];\nconsole.log(first, second, others); // 1 2 [3, 4]\n\nconst [, skipped] = ['a', 'b']; // leave a slot empty to skip an item\nconsole.log(skipped); // 'b'</code></pre>" +
      "<p><b>What happens:</b> the pattern reads <code>1</code> into <code>first</code>, <code>2</code> into <code>second</code>, and gathers everything remaining into the array <code>others</code>. The second example skips index 0 entirely by leaving that slot in the pattern blank.</p>" +
      "<p><b>Result:</b> three (or two) new independent variables, all derived from the same original array — the original array itself is never modified by destructuring.</p>" +
      "<p><b>Important rule:</b> array destructuring matches strictly by <b>position</b> — this is the opposite of object destructuring, which matches by key name regardless of order.</p>" +
      "<p><b>Don't confuse it with:</b> object destructuring — mixing up which one matches by position vs. by name is a common early mistake.</p>" +
      "<p><b>When to use:</b> unpacking tuples, function return values, or a fixed-shape argument list.</p>" +
      "<p><b>When not to use:</b> for deeply nested or poorly structured data, where the pattern becomes harder to read than plain indexing — prioritize readability.</p>" +
      "<p class='ex-gotcha'>Destructuring is shorthand, not magic. It only reads the pattern you define; the rest of the array can still be intentionally ignored.</p>",

    "Spread with arrays":
      "<p><b>Simple meaning:</b> Expands an array's elements into a new array literal, for copying or combining.</p>" +
      "<p><b>Think of it as:</b> pouring the contents of one box into a new, bigger box alongside other items — the original box is untouched; you're just relocating copies of what's inside.</p>" +
      "<p><b>Why it exists:</b> it's the concise, modern way to clone or concatenate arrays, replacing older patterns like <code>Array.prototype.concat</code> or manual loops.</p>" +
      "<p><b>How it works:</b> <code>...</code> inside an array literal expands the given array's elements in place — it never mutates the source array, and it can be combined with other elements or arrays in the same literal.</p>" +
      "<pre><code>const a = [1, 2];\nconst b = [...a, 3, 4];\nconsole.log(b); // [1, 2, 3, 4]\nconsole.log(a); // [1, 2] — untouched</code></pre>" +
      "<p><b>What happens:</b> <code>...a</code> expands to the individual values <code>1, 2</code> right inside the new array literal, followed by the literal values <code>3, 4</code> — the whole thing is assembled into a brand-new array.</p>" +
      "<p><b>Result:</b> a genuinely new array, <code>b</code> — <code>a</code> is completely unaffected, proving spread never mutates its source.</p>" +
      "<p><b>Important rule:</b> spread copies are always shallow — if an item is itself an object, the copy and the original still share that same nested object reference.</p>" +
      "<p><b>Don't confuse it with:</b> <code>structuredClone</code> — the tool to reach for when you actually need a deep, fully-independent copy.</p>" +
      "<p><b>When to use:</b> cloning, concatenating, or creating an updated list without mutating the source arrays.</p>" +
      "<p><b>When not to use:</b> for deep cloning — nested objects inside the array remain shared by reference after a spread copy.</p>" +
      "<p class='ex-gotcha'>Spread is great for immutability, but it is shallow. If an item is an object, that object is still the same reference.</p>",

    "Immutable array operations":
      "<p><b>Simple meaning:</b> Producing a new array instead of changing the original, when you need to \"update\" a list.</p>" +
      "<p><b>Think of it as:</b> instead of erasing and rewriting on the original whiteboard, you photograph it, make your edits on the photo, and hand out the new photo — the original whiteboard stays exactly as it was.</p>" +
      "<p><b>Why it exists:</b> it's the functional-programming discipline of never mutating shared data — instead of changing state in place, always derive new state and hand that back.</p>" +
      "<p><b>How it works:</b> non-mutating methods like <code>map</code>, <code>filter</code>, and <code>slice</code> — deliberately used instead of mutating methods like <code>push</code>/<code>splice</code> — produce a new array while leaving the input array untouched.</p>" +
      "<pre><code>const original = [1, 2, 3];\nconst updated = original.map(n => n + 1);\nconsole.log(original); // [1, 2, 3] — untouched\nconsole.log(updated);  // [2, 3, 4] — a genuinely separate array</code></pre>" +
      "<p><b>What happens:</b> <code>map</code> builds an entirely new array based on <code>original</code>, without ever writing back to <code>original</code> itself — the two arrays exist independently after this line.</p>" +
      "<p><b>Result:</b> two distinct arrays — the caller can compare <code>original !== updated</code> and know for certain something changed, purely from the reference difference.</p>" +
      "<p><b>Important rule:</b> this reference-difference is exactly what makes cheap, fast change-detection possible — see \"Referential equality\" (Objects &amp; immutability).</p>" +
      "<p><b>Don't confuse it with:</b> deep immutability — immutable array <em>operations</em> only guarantee the top-level array is new; nested objects inside can still be shared and mutated (see \"Shallow copying\" below).</p>" +
      "<p><b>When to use:</b> React state updates, Redux-style reducers, or any code that relies on detecting \"did this change?\" via reference comparison.</p>" +
      "<p><b>When not to use:</b> don't force immutability inside a tight, purely local algorithm where the original array is intentionally, safely being mutated — choose the simplest correct pattern for the situation.</p>" +
      "<p class='ex-gotcha'>Modern frameworks expect state updates to be predictable. Immutability is often the key to avoiding hard-to-debug re-render bugs.</p>",

    "Shallow copying":
      "<p><b>Simple meaning:</b> A shallow copy duplicates the top-level array, but nested objects inside it are still shared with the original.</p>" +
      "<p><b>Think of it as:</b> photocopying a folder's cover and table of contents, but the actual documents inside are still the same physical pages, shared between both folders — flip through either folder's contents and you're touching the same paper.</p>" +
      "<p><b>Why it exists:</b> it's the fast, cheap default copy operation — full deep copying is expensive and usually unnecessary for arrays of primitives.</p>" +
      "<p><b>How it works:</b> methods like <code>slice</code>, array spread, and <code>concat</code> create a genuinely new outer array, but they only copy each element's top-level value — for object/array elements, that \"value\" is a reference, so it's the same reference in both arrays.</p>" +
      "<pre><code>const people = [{ name: 'Ada' }];\nconst copied = [...people];\ncopied[0].name = 'Grace';\nconsole.log(people[0].name); // 'Grace' — changed too, same shared object</code></pre>" +
      "<p><b>What happens:</b> <code>[...people]</code> makes a new outer array, but <code>copied[0]</code> and <code>people[0]</code> both point at the exact same inner object — mutating one's <code>.name</code> mutates it for both.</p>" +
      "<p><b>Result:</b> <code>people[0].name</code> changes even though only <code>copied</code> was directly mutated — proof the copy was only skin-deep.</p>" +
      "<p><b>Important rule:</b> this is a classic interview question: the outer array is genuinely new, but every inner object is not.</p>" +
      "<p><b>Don't confuse it with:</b> deep copying — the next entry — which duplicates all the way down, avoiding exactly this issue.</p>" +
      "<p><b>When to use:</b> whenever you only need a top-level copy and won't mutate nested objects afterward.</p>" +
      "<p><b>When not to use:</b> if nested objects will be mutated, a shallow copy isn't enough — use deep cloning or immutable nested updates instead.</p>" +
      "<p class='ex-gotcha'>This is a classic interview question: the outer array is new, but the inner objects are not.</p>",

    "Deep copying":
      "<p><b>Simple meaning:</b> Duplicates nested data all the way down, so changes to one copy never affect the other.</p>" +
      "<p><b>Think of it as:</b> photocopying every single page inside every folder, not just the cover — now the two folders share absolutely nothing physically; editing one never marks up the other.</p>" +
      "<p><b>Why it exists:</b> for cases where a shallow copy's shared-nested-object behavior is actually dangerous — safe snapshots, form drafts, or any transform that must never leak back to the original data.</p>" +
      "<p><b>How it works:</b> deep cloning recursively duplicates every nested object and array, producing an entirely independent structure with zero shared references anywhere.</p>" +
      "<pre><code>const original = [{ id: 1, tags: ['a'] }];\nconst copy = structuredClone(original);\ncopy[0].tags.push('b');\nconsole.log(original[0].tags); // ['a'] — genuinely untouched</code></pre>" +
      "<p><b>What happens:</b> <code>structuredClone</code> recursively duplicates <code>original</code>'s entire structure, including the nested <code>tags</code> array. Mutating <code>copy[0].tags</code> afterward has no effect on <code>original</code> at all — they don't share a single object anywhere.</p>" +
      "<p><b>Result:</b> two fully independent structures — a genuine fix for the shared-reference issue that shallow copying leaves behind.</p>" +
      "<p><b>Important rule:</b> deep copying costs more time and memory than a shallow copy — reach for it only when you actually need full independence, not by default.</p>" +
      "<p><b>Don't confuse it with:</b> the old <code>JSON.parse(JSON.stringify(x))</code> hack — it deep-copies too, but silently mangles <code>Date</code> objects, drops functions, and throws on circular references; <code>structuredClone</code> handles all of these correctly.</p>" +
      "<p><b>When to use:</b> safe snapshots, form drafts, or any data transform that must never mutate the original object graph.</p>" +
      "<p><b>When not to use:</b> when the data is huge or you only need a shallow copy — deep cloning everything unnecessarily costs real memory and CPU.</p>" +
      "<p class='ex-gotcha'>Deep copy is safer but more expensive. In real code, you often want the smallest correct copy strategy, not automatically the deepest one.</p>",
  },

  /* ------------------------------------------------------------------ */
  "this, objects & prototypes": {
    "this":
      "<p class='ex-part'>Part 1 &middot; this</p>" +
      "<p class='ex-rule'><b>Rule:</b> <code>this</code> is decided at the <b>call site</b>, not the definition site &mdash; with two exceptions: arrow functions and bound functions. The table below is the whole rule in one place.</p>" +
      "<p><b>Core idea:</b> <code>this</code> refers to the object associated with the current function call. It is not fixed when the function is written &mdash; it is supplied when the function is invoked.</p>" +
      "<p><b>Think of it as:</b> the word \"I\". The function is the sentence; the caller is the speaker. If Alice says \"I am happy\", I means Alice; if Bob says it, I means Bob. The word never changes &mdash; the speaker does.</p>" +
      "<p><b>Example</b> &mdash; one function, two owners:</p>" +
      "<pre><code>function greet() { return 'Hi ' + this.name; }\n\nconst user  = { name: 'Ada',  greet };\nconst admin = { name: 'John', greet };\n\nuser.greet();   // 'Hi Ada'\nadmin.greet();  // 'Hi John'   &larr; same function, different this</code></pre>" +
      "<table class='ex-table'><tr><th>Call style</th><th><code>this</code></th></tr>" +
      "<tr><td><code>obj.fn()</code></td><td><code>obj</code></td></tr>" +
      "<tr><td><code>fn()</code></td><td><code>undefined</code> in strict mode and modules; <code>globalThis</code> in sloppy mode</td></tr>" +
      "<tr><td><code>fn.call(obj)</code></td><td><code>obj</code></td></tr>" +
      "<tr><td><code>fn.apply(obj, args)</code></td><td><code>obj</code></td></tr>" +
      "<tr><td><code>new Fn()</code></td><td>the new instance</td></tr>" +
      "<tr><td>arrow function</td><td>inherited lexically</td></tr>" +
      "<tr><td>bound function</td><td>permanently bound &mdash; except under <code>new</code>, which uses the fresh instance</td></tr></table>" +
      "<p><b>Also know:</b> <code>this</code> and lexical scope are independent mechanisms. A plain variable resolves by where the code is <em>written</em>; <code>this</code> resolves by how it is <em>called</em>.</p>" +
      "<p class='ex-gotcha'><b>detached methods.</b> <code>const fn = user.greet; fn();</code> loses the binding. The function never stored a link to <code>user</code>; the dot supplied it at call time. Fix with <code>user.greet.bind(user)</code>.</p>" +
      "<p class='ex-check'>given <code>const { greet } = user;</code>, what happens when you call <code>greet()</code> inside an ES module, and why? (Answer: <code>this</code> is <code>undefined</code>, so reading <code>this.name</code> throws a <code>TypeError</code>.)</p>",

    "this in regular functions":
      "<p class='ex-rule'><b>Rule:</b> four invocation patterns, four bindings &mdash; method call &rarr; the object before the dot; plain call &rarr; no owner; <code>call</code>/<code>apply</code> &rarr; whatever you pass; <code>new</code> &rarr; the fresh instance.</p>" +
      "<p><b>Core idea:</b> a normal function's <code>this</code> depends entirely on how it was called, never on where it was defined. That dynamic binding is exactly what lets one prototype method serve every instance.</p>" +
      "<p><b>Example</b> &mdash; the same function invoked four ways:</p>" +
      "<pre><code>function show() { return this; }\nconst obj = { show };\nconst person = { name: 'Ada' };\n\nobj.show();         // this === obj            &mdash; method call\nshow();             // undefined / globalThis   &mdash; plain call\nshow.call(person);  // this === person         &mdash; explicit call\nnew show();         // this === the new instance &mdash; constructor call</code></pre>" +
      "<p><b>Why it matters:</b> memorised as a checklist, these four patterns answer almost every \"what is <code>this</code> here?\" question you will be asked.</p>" +
      "<p class='ex-gotcha'><b>callbacks.</b> Inside <code>setTimeout</code>, array methods, and event handlers the call site is rarely what you expect, so a plain function loses the <code>this</code> you meant. Reach for an arrow function or <code>.bind()</code>.</p>" +
      "<p class='ex-check'>which of the four patterns can a <code>.bind()</code>-ed function still be affected by? (Answer: only <code>new</code> &mdash; constructing a bound function discards the bound <code>this</code> and uses the fresh instance. Method calls, plain calls, and <code>call</code>/<code>apply</code> are all overridden by the bind.)</p>",

    "this in arrow functions":
      "<p class='ex-rule'><b>Rule:</b> an arrow function has no <code>this</code> of its own. It inherits <code>this</code> from the scope where it was <b>written</b>, fixed at definition time, and <code>call</code>/<code>apply</code>/<code>bind</code> cannot change it.</p>" +
      "<p><b>Core idea:</b> writing <code>this</code> inside an arrow resolves it lexically &mdash; exactly like any ordinary variable &mdash; by looking outward to the enclosing scope. This replaced the old <code>const self = this;</code> and <code>.bind(this)</code> workarounds.</p>" +
      "<p><b>Example</b> &mdash; the callback problem it solves:</p>" +
      "<pre><code>const timer = {\n  label: 'tick',\n  start() {\n    setTimeout(() =&gt; {\n      console.log(this.label); // inherited from start(), not its own\n    }, 100);\n  }\n};\ntimer.start(); // 'tick'   (a plain function here would log undefined)</code></pre>" +
      "<p class='ex-gotcha'><b>an arrow as the method itself.</b> <code>const user = { name: 'Ada', greet: () =&gt; this.name };</code> never sees the object at all &mdash; object literals do not create a scope, so <code>this</code> comes from outside entirely. What you get depends on that outer scope: a <code>TypeError</code> in an ES module (<code>this</code> is <code>undefined</code>), <code>undefined</code> in CommonJS, <code>''</code> in a classic browser script. Never use an arrow as an object method or a constructor &mdash; <code>new</code> on an arrow throws.</p>" +
      "<p class='ex-check'>a class has a field <code>handle = () =&gt; this.x</code> and a method <code>handle2() { return this.x }</code>. Both are passed to <code>addEventListener</code> &mdash; which still works, and what does the arrow version cost you? (Answer: the field works because it captured <code>this</code> at construction; the method loses it. The cost is one closure allocated <em>per instance</em>, instead of one shared function on the prototype.)</p>",

    "call":
      "<p class='ex-rule'><b>Rule:</b> <b>C</b>all = <b>C</b>ommas. Invokes the function <b>immediately</b> with a <code>this</code> you choose, and arguments listed individually.</p>" +
      "<p><b>Core idea:</b> lets you run a method against an object that never had that method defined on it &mdash; method borrowing, without copying code.</p>" +
      "<p><b>Syntax:</b> <code>fn.call(thisArg, arg1, arg2)</code> &mdash; returns whatever <code>fn</code> returns.</p>" +
      "<pre><code>function introduce(city, role) {\n  return this.name + ' from ' + city + ', ' + role;\n}\n\nconst person = { name: 'Ada' };\nintroduce.call(person, 'London', 'engineer');\n// 'Ada from London, engineer'</code></pre>" +
      "<p class='ex-gotcha'>the <code>thisArg</code> is not passed through untouched in sloppy mode &mdash; <code>null</code> and <code>undefined</code> are replaced by <code>globalThis</code>, and a primitive is boxed into an object (<code>fn.call('hi')</code> gives a <code>String</code> object, not a string). Strict mode passes the value exactly as given.</p>" +
      "<p class='ex-check'>rewrite <code>fn.apply(obj, args)</code> using <code>call</code>. (Answer: <code>fn.call(obj, ...args)</code>.)</p>",

    "apply":
      "<p class='ex-rule'><b>Rule:</b> <b>A</b>pply = <b>A</b>rray. Identical to <code>call</code> in every way except that the arguments arrive packed in one array.</p>" +
      "<p><b>Core idea:</b> it was the standard way to pass a dynamic, unknown-length argument list before spread syntax existed.</p>" +
      "<p><b>Syntax:</b> <code>fn.apply(thisArg, [arg1, arg2])</code></p>" +
      "<pre><code>const person = { name: 'Ada' };\nfunction introduce(city, role) { return this.name + ' from ' + city + ', ' + role; }\n\nintroduce.apply(person, ['London', 'engineer']);  // same as .call, different arg shape\n\nMath.max.apply(null, [4, 9, 2]);  // 9  &mdash; the old pre-spread trick\nMath.max(...[4, 9, 2]);           // 9  &mdash; modern equivalent</code></pre>" +
      "<p class='ex-gotcha'>the second argument must be array-like, not a bare argument list. <code>fn.apply(obj, 1, 2)</code> throws <code>TypeError: CreateListFromArrayLike called on non-object</code> &mdash; a mistake <code>call</code> cannot make.</p>" +
      "<p class='ex-check'>why did <code>Math.max.apply(null, arr)</code> exist at all, when <code>Math.max(arr)</code> looks simpler? (Answer: <code>Math.max</code> takes separate arguments, not an array.)</p>",

    "bind":
      "<p class='ex-rule'><b>Rule:</b> <code>bind</code> runs nothing. It returns a <b>new function</b> with <code>this</code> locked against <code>call</code>, <code>apply</code>, and any further <code>bind</code> &mdash; <code>fn.bind(a).bind(b)</code> still uses <code>a</code>. The single exception is <code>new</code>.</p>" +
      "<p><b>Core idea:</b> the standard fix for detached methods. Event handlers, <code>setTimeout</code> callbacks, and methods passed as props all lose their <code>this</code> unless it was bound ahead of time.</p>" +
      "<p><b>Syntax:</b> <code>fn.bind(thisArg, ...presetArgs)</code> &mdash; returns a bound function.</p>" +
      "<pre><code>const user = { name: 'Ada', greet() { return this.name; } };\n\nconst loose = user.greet;\nloose();                 // TypeError &mdash; detached, this is undefined\n\nconst bound = user.greet.bind(user);\nbound();                 // 'Ada'\nsetTimeout(bound, 100);  // still 'Ada', even called later and detached</code></pre>" +
      "<table class='ex-table'><tr><th></th><th>Runs now?</th><th>Returns</th><th>Arguments</th></tr>" +
      "<tr><td><code>call</code></td><td>yes</td><td>the result</td><td>commas</td></tr>" +
      "<tr><td><code>apply</code></td><td>yes</td><td>the result</td><td>one array</td></tr>" +
      "<tr><td><code>bind</code></td><td>no</td><td>a new function</td><td>commas (pre-filled)</td></tr></table>" +
      "<p class='ex-gotcha'>every <code>.bind()</code> call returns a <b>different</b> function object. So <code>el.addEventListener('click', this.onClick.bind(this))</code> can never be undone by <code>el.removeEventListener('click', this.onClick.bind(this))</code> &mdash; the second bind is a different function. Store the bound reference once.</p>" +
      "<p class='ex-check'>what arguments does the inner function receive from <code>fn.bind(a, 1)(2)</code>? (Answer: <code>1</code> then <code>2</code> &mdash; pre-set arguments are prepended, not replaced.)</p>",

    "Object creation":
      "<p class='ex-part'>Part 2 &middot; Objects</p>" +
      "<p class='ex-rule'><b>Rule:</b> use a literal <code>{}</code> by default. Reach for a class when you need many objects of one shape, and <code>Object.create</code> only when you specifically care about the prototype link.</p>" +
      "<p><b>Core idea:</b> every approach produces a plain object; they differ only in how the object gets its shape and its prototype.</p>" +
      "<pre><code>const user = { name: 'Ada', age: 36 };            // 1. literal &mdash; default choice\n\nclass User { constructor(name) { this.name = name; } }\nconst u = new User('Ada');                          // 2. class &mdash; many, one shape\n\nconst base = { greet() { return 'hi'; } };\nconst child = Object.create(base);                   // 3. explicit prototype link\n\nconst makeUser = name =&gt; ({ name });                 // 4. factory function</code></pre>" +
      "<p class='ex-gotcha'>Avoid <code>new Object()</code> entirely &mdash; it is slower to read and offers nothing over <code>{}</code>. And a factory arrow needs <code>({ name })</code> with parentheses, or the arrow reads <code>{}</code> as a function body.</p>" +
      "<p class='ex-check'>which of the four gives you an object that keeps seeing later changes to another object? (Answer: <code>Object.create</code> &mdash; and <code>new User()</code> too, since the instance stays linked to <code>User.prototype</code>. The literal and the factory link to nothing you wrote.)</p>",

    "Object properties":
      "<p class='ex-rule'><b>Rule:</b> the dot always means the <b>literal text</b> written after it. Brackets <b>evaluate</b> the expression inside first, then look up the result.</p>" +
      "<p><b>Core idea:</b> bracket access is what makes objects dynamic &mdash; it lets a variable decide, at runtime, which property to read.</p>" +
      "<pre><code>const user = { name: 'Ada', 'work role': 'engineer' };\n\nuser.name;          // 'Ada'       &mdash; dot, fixed key\nuser['work role'];  // 'engineer'  &mdash; brackets required (space in key)\n\nconst key = 'name';\nuser[key];          // 'Ada'       &mdash; evaluates the variable\nuser.key;           // undefined   &mdash; looks for a property literally named 'key'</code></pre>" +
      "<p><b>Also know:</b> reading a missing property returns <code>undefined</code> and never throws. Reading a property <em>of</em> <code>undefined</code> &mdash; one level further along the chain &mdash; is what throws.</p>" +
      "<p class='ex-gotcha'>setting a property to <code>undefined</code> is not the same as deleting it. After <code>obj.k = undefined</code> the key still appears in <code>Object.keys(obj)</code> and <code>'k' in obj</code> is still <code>true</code>; only <code>delete obj.k</code> removes it. Both read back as <code>undefined</code>, which hides the difference.</p>" +
      "<p class='ex-check'>when is <code>user['name']</code> the wrong choice even though it works? (Answer: whenever the key is a known literal &mdash; the dot is clearer.)</p>",

    "Property descriptors conceptually":
      "<p class='ex-rule'><b>Rule:</b> the defaults flip depending on how a property is created. Plain assignment gives <code>writable</code>, <code>enumerable</code>, and <code>configurable</code> all <code>true</code>. <code>Object.defineProperty</code> defaults every <b>omitted</b> flag to <code>false</code>.</p>" +
      "<p><b>Core idea:</b> every property is either a <b>data</b> property (<code>value</code> + <code>writable</code>) or an <b>accessor</b> property (<code>get</code>/<code>set</code>, with no <code>writable</code> at all). Both additionally carry <code>enumerable</code> (does it appear in <code>Object.keys</code> / <code>for...in</code>?) and <code>configurable</code> (can it be deleted or reconfigured?).</p>" +
      "<pre><code>const user = { name: 'Ada' };\nObject.getOwnPropertyDescriptor(user, 'name');\n// { value: 'Ada', writable: true, enumerable: true, configurable: true }\n\nObject.defineProperty(user, 'id', { value: 1 });\nuser.id = 99;\nuser.id;             // 1        &mdash; silently ignored, writable defaults to false\nObject.keys(user);   // ['name'] &mdash; 'id' is not enumerable</code></pre>" +
      "<p class='ex-gotcha'>the failure is <b>silent</b>. Assigning to a non-writable property does nothing in sloppy mode instead of throwing, so the bug shows up far from its cause.</p>" +
      "<p class='ex-check'>after <code>Object.defineProperty(o, 'x', { value: 1 })</code>, can you later make <code>x</code> writable? (Answer: no &mdash; <code>configurable</code> also defaulted to <code>false</code>.)</p>",

    "Object methods":
      "<p class='ex-rule'><b>Rule:</b> <code>Object.keys</code>, <code>Object.values</code>, and <code>Object.entries</code> see <b>own enumerable</b> properties only. Inherited prototype properties are skipped.</p>" +
      "<p><b>Core idea:</b> objects have no <code>map</code>/<code>filter</code> of their own. These three helpers convert an object into array-shaped data so the array toolkit becomes usable, and <code>Object.fromEntries</code> converts it back.</p>" +
      "<pre><code>const scores = { ada: 90, sam: 75 };\n\nObject.keys(scores);    // ['ada', 'sam']\nObject.values(scores);  // [90, 75]\nObject.entries(scores); // [['ada', 90], ['sam', 75]]\n\nconst boosted = Object.fromEntries(\n  Object.entries(scores).map(([k, v]) =&gt; [k, v + 5])\n);\n// { ada: 95, sam: 80 }   &mdash; original untouched</code></pre>" +
      "<p class='ex-gotcha'><code>for...in</code> walks the <em>entire</em> prototype chain, so it can surface inherited keys you never defined. Prefer <code>Object.keys</code>.</p>" +
      "<p class='ex-check'>why does <code>Object.keys(instance)</code> never list a class's methods? (Answer: they live on the prototype, not on the instance.)</p>",

    "Destructuring":
      "<p class='ex-rule'><b>Rule:</b> object destructuring matches by <b>key name</b> and ignores order. Array destructuring matches by <b>position</b>. A default fires only on <code>undefined</code> &mdash; never on <code>null</code>.</p>" +
      "<p><b>Core idea:</b> it replaces one-line-per-property extraction, and in a function signature it documents exactly which fields the function needs.</p>" +
      "<pre><code>const user = { name: 'Ada', age: 36, address: { city: 'London' } };\n\nconst { name, age } = user;           // name='Ada', age=36\nconst { name: fullName } = user;      // rename &rarr; fullName='Ada'\nconst { role = 'user' } = user;       // default when key is missing\nconst { address: { city } } = user;   // nested &rarr; city='London'\nconst { name: n, ...rest } = user;    // rest = { age, address }</code></pre>" +
      "<p class='ex-gotcha'>destructuring <code>null</code> or <code>undefined</code> itself throws &mdash; <code>const { a } = null</code> is a <code>TypeError</code>, not <code>undefined</code>. Guard with <code>const { a } = obj ?? {}</code>. And in assignment form (no <code>const</code>) the parentheses are mandatory: <code>({ a } = obj)</code>, or the leading brace parses as a block.</p>" +
      "<p class='ex-check'>does destructuring mutate the source object? (Answer: no &mdash; it only reads.)</p>",

    "Computed properties":
      "<p class='ex-rule'><b>Rule:</b> <code>[expr]</code> evaluates the expression and uses the result as the key. A key without brackets is always the literal text you typed.</p>" +
      "<p><b>Core idea:</b> essential wherever the key itself is only known at runtime &mdash; form field updates, grouping and reducing by a dynamic field, API responses.</p>" +
      "<pre><code>const key = 'status';\n\nconst right = { [key]: 'active' };  // { status: 'active' }\nconst wrong = { key: 'active' };    // { key: 'active' }   &larr; literal 'key'</code></pre>" +
      "<p class='ex-gotcha'>keys go through <code>ToPropertyKey</code>: everything except a Symbol is coerced to a string. <code>{ [1]: 'a' }</code> becomes the key <code>'1'</code>, and <code>{ [{}]: 'a' }</code> becomes the useless key <code>'[object Object]'</code> &mdash; but a Symbol stays a Symbol, which is exactly how <code>Symbol.iterator</code> works. Use a <code>Map</code> if you need real object keys.</p>" +
      "<p class='ex-check'>write a reducer line that groups <code>items</code> by a runtime field name held in <code>field</code>.</p>",

    "Optional chaining":
      "<p class='ex-rule'><b>Rule:</b> <code>?.</code> short-circuits to <code>undefined</code> when the value on its left is <code>null</code> or <code>undefined</code> &mdash; and nothing else. It guards against absence, not against falsiness.</p>" +
      "<p><b>Core idea:</b> it replaces long <code>a &amp;&amp; a.b &amp;&amp; a.b.c</code> guard chains with one operator, for API responses and optional config that may not be fully populated.</p>" +
      "<pre><code>const user = { profile: null };\n\nuser.profile.city;   // TypeError: Cannot read properties of null\nuser.profile?.city;  // undefined &mdash; safe, short-circuited\n\nuser.getName?.();    // safe optional call\nuser.tags?.[0];      // safe optional index</code></pre>" +
      "<p class='ex-gotcha'>it cannot appear on the left of an assignment, it will not save you from <code>0</code> or <code>''</code>, and it will not swallow a real error thrown deeper in the expression. Scattering it everywhere hides genuine bugs.</p>" +
      "<p class='ex-check'>what does <code>obj?.a.b</code> do when <code>obj.a</code> is <code>undefined</code>? (Answer: it throws &mdash; only the guarded link short-circuits.)</p>",

    "Nullish coalescing":
      "<p class='ex-rule'><b>Rule:</b> <code>??</code> falls back only on <code>null</code> or <code>undefined</code>. <code>||</code> falls back on <b>any</b> falsy value, including <code>0</code>, <code>''</code>, and <code>false</code>.</p>" +
      "<p><b>Core idea:</b> it fixes a long-standing bug pattern where legitimate values were silently replaced by a default meant only for genuinely missing data.</p>" +
      "<pre><code>const count = 0;\ncount || 10;  // 10  &larr; bug: 0 is falsy, a real value is lost\ncount ?? 10;  // 0   &larr; correct: 0 is real data\n\nconst name = '';\nname || 'Anonymous';  // 'Anonymous'\nname ?? 'Anonymous';  // ''  &mdash; deliberately empty</code></pre>" +
      "<p><b>Pairs with <code>?.</code>:</b> <code>user.profile?.city ?? 'Unknown'</code> &mdash; <code>?.</code> avoids the crash, <code>??</code> supplies the fallback. Two different jobs.</p>" +
      "<p class='ex-gotcha'>you cannot mix <code>??</code> with <code>||</code> or <code>&amp;&amp;</code> without parentheses. <code>a || b ?? c</code> is a <code>SyntaxError</code> &mdash; JavaScript forces the precedence to be explicit.</p>" +
      "<p class='ex-check'>a feature flag is already <code>false</code>. What does <code>flags.dark ??= true</code> leave it as, and what does <code>flags.dark ||= true</code> leave it as? (Answer: <code>false</code> and <code>true</code> &mdash; the same trap as <code>??</code> vs <code>||</code>, in the assignment forms.)</p>",

    "Prototype":
      "<p class='ex-part'>Part 3 &middot; Prototypes &amp; OOP</p>" +
      "<p class='ex-rule'><b>Rule:</b> <code>Object.getPrototypeOf(obj)</code> is the link an object <b>uses</b>. <code>Fn.prototype</code> is a property on a <b>function</b>, holding the object that will <em>become</em> the prototype of instances made with <code>new Fn()</code>. Two different things, confusingly similar names.</p>" +
      "<p><b>Core idea:</b> when a property lookup fails on an object itself, the engine follows the object's internal <code>[[Prototype]]</code> link and checks there instead &mdash; automatically, with no code needed to trigger it.</p>" +
      "<p><b>Think of it as:</b> a fallback reference book sitting behind the object. A thousand objects can share the very same book instead of each memorising the answer &mdash; which is exactly why a thousand arrays do not each store their own <code>map</code>.</p>" +
      "<pre><code>const animal = { speak() { return 'generic sound'; } };\nconst dog = Object.create(animal);\ndog.name = 'Rex';\n\ndog.name;    // 'Rex'           &mdash; own property\ndog.speak(); // 'generic sound' &mdash; borrowed from the prototype\n\ndog.hasOwnProperty('speak');           // false &mdash; it is not really dog's\nObject.getPrototypeOf(dog) === animal; // true</code></pre>" +
      "<p class='ex-gotcha'>never add to built-in prototypes (<code>Array.prototype.myHelper = ...</code>). It affects every array in the entire program and can break unrelated code.</p>" +
      "<p class='ex-check'>what is <code>Object.getPrototypeOf(User)</code> &mdash; the function itself, not an instance? (Answer: <code>Function.prototype</code>, <b>not</b> <code>User.prototype</code>. A function is an object too, and it has its own chain, separate from the one it hands to its instances.)</p>",

    "Prototype chain":
      "<p class='ex-rule'><b>Rule:</b> lookup walks the <code>[[Prototype]]</code> links one level at a time until it finds the property or hits <code>null</code>. A missing property returns <code>undefined</code> silently &mdash; only <em>calling</em> that <code>undefined</code> throws.</p>" +
      "<p><b>Core idea:</b> this chain is the mechanism behind all inheritance in JavaScript. <code>class</code> and <code>extends</code> are friendlier syntax over the same links. Every chain terminates at <code>null</code>. For ordinary objects the last link before <code>null</code> is <code>Object.prototype</code> &mdash; but an object made with <code>Object.create(null)</code> has <code>null</code> as its immediate prototype, so <code>Object.prototype</code> is never in its chain at all.</p>" +
      "<pre><code>const arr = [1, 2, 3];\n\narr.map(n =&gt; n);\n// arr (no map) &rarr; Array.prototype (found) &rarr; Object.prototype &rarr; null\n\narr.notARealMethod;    // undefined  &mdash; walked the whole chain, found nothing\narr.notARealMethod();  // TypeError  &mdash; calling undefined is what throws</code></pre>" +
      "<p class='ex-gotcha'>lookup walks the chain, but <b>assignment never does</b>. <code>dog.speak = ...</code> creates an <b>own</b> property that shadows the prototype's; the prototype itself is untouched, and <code>delete dog.speak</code> makes the inherited one reappear.</p>" +
      "<p class='ex-check'>for <code>class Dog extends Animal</code>, what is <code>Object.getPrototypeOf(Dog)</code>? (Answer: <code>Animal</code> itself &mdash; <code>extends</code> links the two <em>classes</em> as well as their <code>.prototype</code> objects, which is how a subclass inherits <code>static</code> members.)</p>",

    "Object.create":
      "<p class='ex-rule'><b>Rule:</b> <code>Object.create(animal)</code> <b>links</b> to <code>animal</code>, so later changes to <code>animal</code> stay visible. <code>{ ...animal }</code> <b>copies</b> once and then goes its own way.</p>" +
      "<p><b>Core idea:</b> it sets up a prototype link directly, with no constructor function and no <code>new</code>. A second argument can define property descriptors on the new object immediately.</p>" +
      "<p><b>Syntax:</b> <code>Object.create(proto)</code> or <code>Object.create(proto, descriptors)</code></p>" +
      "<pre><code>const animal = { speak() { return this.name + ' makes a sound'; } };\nconst dog = Object.create(animal);\ndog.name = 'Rex';\ndog.speak(); // 'Rex makes a sound'\n\nconst dict = Object.create(null); // NO prototype at all\n// no toString, no hasOwnProperty &mdash; safe for arbitrary untrusted keys</code></pre>" +
      "<p class='ex-gotcha'><code>Object.create(null)</code> objects have none of the usual inherited methods, so <code>dict.hasOwnProperty(k)</code> throws. Use <code>Object.hasOwn(dict, k)</code> instead.</p>" +
      "<p class='ex-check'>you are building a lookup table from untrusted user input. Why is <code>Object.create(null)</code> the right shape for it? (Answer: a normal <code>{}</code> inherits <code>Object.prototype</code>, so a key like <code>\"constructor\"</code> or <code>\"toString\"</code> reads back as an inherited function instead of \"missing\".)</p>",

    "Constructor functions":
      "<p class='ex-rule'><b>Rule:</b> <code>new Fn()</code> does five things in order &mdash; create an empty object, link it to <code>Fn.prototype</code>, bind <code>this</code> to it, run the body, and return it implicitly unless the body returns a different object.</p>" +
      "<p><b>Core idea:</b> the pre-ES6 way to model object types. Learning it explains exactly what <code>class</code> does underneath: per-instance data on <code>this</code>, shared behaviour on the prototype.</p>" +
      "<pre><code>function User(name) {\n  this.name = name;              // per-instance data\n}\nUser.prototype.greet = function () {\n  return 'Hi, ' + this.name;     // SHARED across every instance\n};\n\nconst a = new User('Ada');\na.greet();                       // 'Hi, Ada'\na.hasOwnProperty('greet');       // false &mdash; it lives on the prototype</code></pre>" +
      "<p class='ex-gotcha'>forgetting <code>new</code>. <code>User('Ada')</code> runs as a plain call. In strict mode and ES modules <code>this</code> is <code>undefined</code>, so <code>this.name = name</code> throws <code>TypeError: Cannot set properties of undefined</code>. In sloppy mode it is worse &mdash; <code>this</code> is the global object, so the write silently leaks <code>name</code> onto <code>globalThis</code> and the call returns <code>undefined</code>, a bug that surfaces far from its cause. Classes throw on the call itself, before the body ever runs.</p>" +
      "<p class='ex-check'>why is <code>greet</code> put on <code>User.prototype</code> rather than assigned inside the constructor?</p>",

    "Classes":
      "<p class='ex-rule'><b>Rule:</b> <code>class</code> is syntactic sugar over constructor functions and prototypes &mdash; methods land on <code>ClassName.prototype</code>. Class bodies are always strict mode, and calling one without <code>new</code> throws.</p>" +
      "<p><b>Core idea:</b> the same underlying mechanism as constructor functions, plus guardrails and features they never had &mdash; <code>#private</code> fields, getters and setters, and <code>static</code> members.</p>" +
      "<pre><code>class User {\n  #secret = 'hidden';                       // truly private\n  constructor(name) { this.name = name; }\n  greet() { return 'Hi, ' + this.name; }    // &rarr; User.prototype.greet\n  get initials() { return this.name[0]; }   // getter, read as a property\n  static create(name) { return new User(name); }\n}\n\nconst u = new User('Ada');\nu.greet();    // 'Hi, Ada'\nu.initials;   // 'A'  &mdash; no parentheses, it is a getter\nUser('Sam');  // TypeError &mdash; classes require new</code></pre>" +
      "<p class='ex-gotcha'>using a class before its definition throws a <code>ReferenceError</code> &mdash; classes have their own temporal dead zone, unlike function declarations which hoist.</p>" +
      "<p class='ex-check'>how does a class <b>field</b> <code>greet = () =&gt; ...</code> differ from a <b>method</b> <code>greet() { ... }</code>? (Answer: the field is an own property on every instance and captures <code>this</code> lexically, so it survives detaching; the method lives once on the prototype and loses <code>this</code> when detached. The field costs one closure per instance.)</p>",

    "Inheritance":
      "<p class='ex-rule'><b>Rule:</b> in a subclass constructor, <code>super()</code> must run <b>before</b> you touch <code>this</code> &mdash; the parent constructor is what creates the object <code>this</code> refers to. Touching it first throws a <code>ReferenceError</code>.</p>" +
      "<p><b>Core idea:</b> <code>extends</code> links the subclass prototype to the superclass prototype, so instances inherit through the full chain. <code>super(...)</code> calls the parent constructor; <code>super.method()</code> calls the parent's version of an overridden method.</p>" +
      "<pre><code>class Animal {\n  constructor(name) { this.name = name; }\n  speak() { return this.name + ' makes a sound'; }\n}\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);        // must run before touching 'this'\n    this.breed = breed;\n  }\n  speak() { return super.speak() + ' &mdash; a bark'; } // extend, do not replace\n}\n\nconst rex = new Dog('Rex', 'Lab');\nrex.speak();            // 'Rex makes a sound &mdash; a bark'\nrex instanceof Animal;  // true</code></pre>" +
      "<p class='ex-gotcha'>inheritance is overused. If the relationship is not a genuine \"is a\", prefer composition &mdash; pass the behaviour in as a dependency instead of inheriting it. Deep hierarchies are hard to change safely.</p>" +
      "<p class='ex-check'>why is <code>rex instanceof Animal</code> true when <code>rex</code> was built by <code>Dog</code>?</p>",

    "Encapsulation concepts":
      "<p class='ex-rule'><b>Rule:</b> only two things give real privacy in JavaScript &mdash; <b>closures</b> (unreachable by scope) and <b>private class fields</b> (<code>#x</code>, enforced by the language). A leading underscore (<code>_balance</code>) is a naming convention and stops nobody.</p>" +
      "<p><b>Core idea:</b> if anything can change a value directly, no rule about that value can be trusted. Encapsulation gives one place to enforce correctness, and lets internals change later without breaking callers.</p>" +
      "<p><b>Think of it as:</b> a bank teller window. Customers interact through the window &mdash; deposit, withdraw &mdash; and never reach into the vault to move money by hand.</p>" +
      "<pre><code>// 1. Closures &mdash; private by scope\nfunction makeAccount(start) {\n  let balance = start;              // unreachable from outside\n  return {\n    deposit(n) { if (n &lt;= 0) throw new Error('invalid'); balance += n; },\n    get balance() { return balance; }\n  };\n}\n\n// 2. Private class fields &mdash; private by syntax\nclass Account {\n  #balance = 0;\n  deposit(n) { if (n &lt;= 0) throw new Error('invalid'); this.#balance += n; }\n  get balance() { return this.#balance; }\n}\n// o.#balance from outside the class body is a SyntaxError, not a convention</code></pre>" +
      "<p class='ex-gotcha'><b>leaking references.</b> Returning an internal array or object lets callers mutate your \"private\" state through the back door. Return a copy. And do not wrap plain data in getters that enforce no rules &mdash; that is ceremony, not encapsulation.</p>" +
      "<p class='ex-check'>name one thing <code>#balance</code> gives you that a closure does not, and one thing a closure gives you that <code>#balance</code> does not.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Asynchronous JavaScript": {
    "Synchronous vs asynchronous execution":
      "<p><b>Simple meaning:</b> Synchronous code runs one line at a time, each line waiting for the last. Asynchronous code lets a slow operation run in the background while the rest of the program keeps going.</p>" +
      "<p><b>Think of it as:</b> ordering food at a counter (synchronous — you stand there, blocking the line, until your order is ready) versus a restaurant giving you a buzzer (asynchronous — you sit down and do other things, and get notified the instant your food is ready).</p>" +
      "<p><b>Why it exists:</b> without it, a 2-second network request would freeze the entire page (or block the whole Node server) for those 2 seconds — handing the wait off keeps the program responsive.</p>" +
      "<p><b>How it works:</b> JavaScript itself is single-threaded — it can only run one piece of your code at a time. \"Async\" does not mean multiple threads; it means the slow part (a timer, a network request, a file read) is handed off to the browser or Node runtime, which does the actual waiting, and your code is notified with a callback once it finishes.</p>" +
      "<pre><code>console.log('1');\nsetTimeout(() => console.log('3'), 1000);\nconsole.log('2');\n// logs: 1, 2, 3 — the timer callback runs LATER, script keeps going right now</code></pre>" +
      "<p><b>What happens:</b> <code>setTimeout</code> hands its callback off to the runtime and returns immediately — it does not pause the script. So <code>'2'</code> logs right after <code>'1'</code>, and only once the timer elapses (and the rest of the script has finished) does <code>'3'</code> finally log.</p>" +
      "<p><b>Result:</b> the logs appear out of the order they'd run in if everything were synchronous — <code>1, 2, 3</code>, not <code>1, 3, 2</code> — because the timer's callback is deferred, not the code around it.</p>" +
      "<p><b>Important rule:</b> \"asynchronous\" does not mean \"runs in parallel\" — your JS callbacks still run one at a time, on the same single thread; async only changes <em>when</em> they run, never how many run at once.</p>" +
      "<p><b>Don't confuse it with:</b> multi-threading — languages with real threads can run code simultaneously; JavaScript never does, it only interleaves single-threaded work with waiting periods.</p>" +
      "<p><b>When to use:</b> for anything that involves waiting — network requests, timers, file I/O, user input.</p>" +
      "<p><b>When not to use:</b> n/a — this is the fundamental execution model, not an opt-in choice; the choice is in how you structure async code (callbacks, promises, async/await).</p>" +
      "<p class='ex-gotcha'>\"Asynchronous\" does not mean \"runs in parallel\". Your JS callbacks still run one at a time, on the same single thread &mdash; async only changes <em>when</em> they run, not how many run at once.</p>",

    "Callbacks":
      "<p><b>Simple meaning:</b> A callback is a function you hand to another function, to be run later &mdash; often once some slow work finishes.</p>" +
      "<p><b>Think of it as:</b> leaving your phone number with a repair shop — \"call this number when it's ready\" — you hand over specific instructions without knowing exactly when they'll be used.</p>" +
      "<p><b>Why it exists:</b> callbacks were JavaScript's original mechanism for asynchronous control flow, before Promises existed — they're still the basis for events (<code>addEventListener</code>) and many Node APIs, and every Promise is built on the same underlying idea.</p>" +
      "<p><b>How it works:</b> the function that <em>receives</em> the callback decides when (and with what arguments) to invoke it — the caller has no control over that timing once the callback is handed over.</p>" +
      "<pre><code>function loadUser(id, callback) {\n  setTimeout(() => {\n    callback(null, { id, name: 'Ada' }); // (error, result) convention\n  }, 500);\n}\n\nloadUser(1, (err, user) => {\n  if (err) return console.log('failed');\n  console.log(user.name); // 'Ada' — after 500ms\n});</code></pre>" +
      "<p><b>What happens:</b> <code>loadUser</code> schedules the callback to run 500ms later, then returns immediately. The rest of the program keeps running in the meantime — the callback only executes once the timer elapses, with <code>err</code> and <code>user</code> supplied by <code>loadUser</code> itself.</p>" +
      "<p><b>Result:</b> <code>'Ada'</code> logs, but only 500ms after <code>loadUser</code> was called — not immediately, and not in the order the surrounding code appears on the page.</p>" +
      "<p><b>Important rule:</b> the <code>(error, result)</code> parameter order (\"error-first callback\") is a Node.js convention, not a language rule — forgetting to check <code>err</code> first is a classic source of silent bugs.</p>" +
      "<p><b>Don't confuse it with:</b> a Promise — a Promise is a returned value representing a future result; a callback is a function handed over with no return value to track its state.</p>" +
      "<p><b>When to use:</b> array iteration, event handlers, timers — any \"do this when X happens\" shape.</p>" +
      "<p><b>When not to use:</b> for new async code with multiple sequential steps — prefer Promises/<code>async</code>-<code>await</code> (see \"Callback hell\" for why).</p>" +
      "<p class='ex-gotcha'>The <code>(error, result)</code> parameter order (\"error-first callback\") is a Node.js convention, not a language rule &mdash; forgetting to check <code>err</code> first is a classic source of silent bugs.</p>",

    "Callback hell":
      "<p><b>Simple meaning:</b> When each async step depends on the last, callback-based code nests deeper and deeper, until it becomes a sideways-growing pyramid that's hard to read or change.</p>" +
      "<p><b>Think of it as:</b> a set of Russian nesting dolls, except each doll also needs its own separate error check — the deeper you nest, the harder it gets to see the actual logic buried inside all the wrapping.</p>" +
      "<p><b>Why it exists:</b> callbacks have no built-in way to compose — the only way to sequence async steps with callbacks alone is to nest the next one inside the previous one's callback, since there's no other place to \"continue after this finishes.\"</p>" +
      "<p><b>How it works:</b> each subsequent async step must live inside the previous step's callback, because that's the only scope where the previous step's result is available.</p>" +
      "<pre><code>getUser(id, (err, user) => {\n  if (err) return handle(err);\n  getPosts(user.id, (err, posts) => {\n    if (err) return handle(err);\n    getComments(posts[0].id, (err, comments) => {\n      if (err) return handle(err);\n      console.log(comments); // 3 levels deep, and growing\n    });\n  });\n});</code></pre>" +
      "<p><b>What happens:</b> each step's callback is nested one level inside the previous step's callback, because there's no other way to access <code>user</code>, then <code>posts</code>, in sequence. Every level also needs its own repeated <code>if (err)</code> check — there's no way to handle errors in one shared place.</p>" +
      "<p><b>Result:</b> code that reads sideways instead of top-to-bottom, with error handling duplicated at every level — a structural problem, not just an aesthetic one.</p>" +
      "<p><b>Important rule:</b> the fix is not \"write less nested code\" as a style rule — it's a structural problem that Promises and <code>async</code>/<code>await</code> solve directly, by letting async steps read top-to-bottom instead of nesting.</p>" +
      "<p><b>Don't confuse it with:</b> Promise chaining done wrong — nesting <code>.then</code> calls instead of chaining them flat recreates this exact same problem with promises (see \"Promise chaining\").</p>" +
      "<p><b>When to use:</b> n/a — this is the problem, not a technique to reach for.</p>" +
      "<p><b>When not to use:</b> avoid multiple nested, sequential callback-based async steps — reach for Promises/async-await instead as soon as more than one dependent step is involved.</p>" +
      "<p class='ex-gotcha'>The fix is not \"write less nested code\" as a style rule &mdash; it's a structural problem that Promises and <code>async</code>/<code>await</code> solve directly, by letting async steps read top-to-bottom instead of nesting.</p>",

    "Promises":
      "<p><b>Simple meaning:</b> A promise is an object that stands in for a value you don't have yet, but will (or will fail to) get eventually.</p>" +
      "<p><b>Think of it as:</b> a claim ticket at a dry cleaner — you don't have your clothes yet, but you have a specific, trackable ticket that will eventually turn into either your clothes (fulfilled) or an apology that they were lost (rejected).</p>" +
      "<p><b>Why it exists:</b> to replace nested callbacks with a chain that reads top-to-bottom, giving async code one consistent, predictable way to report success or failure.</p>" +
      "<p><b>How it works:</b> a <code>Promise</code> wraps an asynchronous operation and exposes a consistent interface (<code>.then</code>/<code>.catch</code>/<code>.finally</code>) for reacting to its eventual outcome, regardless of how long that operation takes.</p>" +
      "<pre><code>const promise = new Promise((resolve, reject) => {\n  console.log('executor runs NOW, synchronously');\n  setTimeout(() => {\n    resolve('done'); // settles LATER\n  }, 500);\n});\n\npromise.then(value => console.log(value)); // 'done', after 500ms</code></pre>" +
      "<p><b>What happens:</b> the constructor's executor function runs immediately and synchronously the moment <code>new Promise(...)</code> is called — the <code>console.log</code> inside it fires right away. Only the actual <code>resolve('done')</code> call is deferred, waiting on the timer.</p>" +
      "<p><b>Result:</b> the constructor returns a new promise object immediately, in the <code>pending</code> state — it doesn't resolve to <code>'done'</code> until the timer fires half a second later.</p>" +
      "<p><b>Important rule:</b> creating a promise does not start a timer or a fetch \"in the background\" by magic — the executor code runs immediately and synchronously; it's <em>settling</em> (calling resolve/reject) that can happen later.</p>" +
      "<p><b>When to use:</b> any time you're wrapping or consuming an async operation — a network call, a timer, a file read.</p>" +
      "<p><b>When not to use:</b> for operations that are already synchronous — wrapping something that doesn't actually need to wait in a promise adds pointless indirection.</p>" +
      "<p class='ex-gotcha'>Creating a promise does not start a timer or a fetch \"in the background\" by magic &mdash; the code inside the executor runs immediately and synchronously; it's <em>settling</em> (calling resolve/reject) that can happen later.</p>",

    "Promise states":
      "<p><b>Simple meaning:</b> Every promise is in exactly one of three states: waiting, succeeded, or failed &mdash; and once it succeeds or fails, that's final.</p>" +
      "<p><b>Think of it as:</b> a one-way valve — a promise starts open (pending), and the moment it closes (settles) into either \"fulfilled\" or \"rejected\", it stays closed that way forever; nothing can reopen it or flip it to the other outcome.</p>" +
      "<p><b>Why it exists:</b> this permanence is what makes promises trustworthy — you can attach a <code>.then</code> at any time, even long after it has already settled, and it will still fire with the correct final value exactly once.</p>" +
      "<p><b>How it works:</b> a promise starts <b>pending</b>. It can transition once to either <b>fulfilled</b> (resolved with a value) or <b>rejected</b> (failed with a reason). Fulfilled and rejected are both called <em>settled</em>, and a settled promise can never change state again.</p>" +
      "<pre><code>const p = new Promise(resolve => {\n  resolve('first');\n  resolve('second'); // silently ignored — already settled\n});\np.then(v => console.log(v)); // 'first'</code></pre>" +
      "<p><b>What happens:</b> the first <code>resolve('first')</code> call permanently settles <code>p</code> as fulfilled with the value <code>'first'</code>. The second <code>resolve('second')</code> call has no effect at all — <code>p</code> already settled and cannot be re-settled.</p>" +
      "<p><b>Result:</b> only <code>'first'</code> is ever logged — the second call is silently discarded, not an error.</p>" +
      "<p><b>Important rule:</b> calling <code>resolve()</code> a second time, or calling <code>reject()</code> after <code>resolve()</code>, is always a silent no-op — the first settlement wins, permanently.</p>" +
      "<p><b>Don't confuse it with:</b> a variable you can reassign — once settled, a promise's outcome is genuinely locked, unlike an ordinary <code>let</code> binding.</p>" +
      "<p><b>When to use:</b> understanding this explains why attaching <code>.then</code> \"late\" to an already-settled promise still works correctly.</p>" +
      "<p><b>When not to use:</b> n/a — this happens automatically; there's no choice involved in how promises transition states.</p>" +
      "<p class='ex-gotcha'>Calling <code>resolve()</code> a second time, or calling <code>reject()</code> after <code>resolve()</code>, is silently ignored &mdash; the first settlement wins and every later one is a no-op.</p>",

    ".then":
      "<p><b>Simple meaning:</b> <code>.then(onSuccess, onFailure)</code> registers what should happen once a promise settles.</p>" +
      "<p><b>Think of it as:</b> handing your claim ticket to an assistant with instructions: \"when this turns into clothes, do X with them\" — you don't wait around yourself, the instructions execute automatically once the ticket resolves.</p>" +
      "<p><b>Why it exists:</b> it's the fundamental way to consume a promise's eventual value, and — critically — it always returns a brand-new promise, which is exactly what makes chaining possible.</p>" +
      "<p><b>How it works:</b> <code>.then</code> takes up to two callbacks — one for fulfillment, one for rejection. If the callback returns a plain value, the new promise resolves with it. If it returns <em>another promise</em>, the new promise waits for that one and adopts its outcome automatically.</p>" +
      "<pre><code>fetchUser(1)\n  .then(user => user.name)          // returns a NEW promise, resolved with the name\n  .then(name => console.log(name)); // 'Ada'</code></pre>" +
      "<p><b>What happens:</b> the first <code>.then</code>'s callback returns <code>user.name</code>, a plain string — so the promise it returns immediately resolves with that string. The second <code>.then</code> receives that string directly as its argument.</p>" +
      "<p><b>Result:</b> <code>'Ada'</code> is logged — the value flowed cleanly through two chained steps, each one waiting for the previous promise to settle.</p>" +
      "<p><b>Important rule:</b> forgetting to <code>return</code> inside a <code>.then</code> callback is one of the most common async bugs — the next <code>.then</code> in the chain receives <code>undefined</code> instead of the value you meant to pass along.</p>" +
      "<p><b>Don't confuse it with:</b> synchronous return values — even when the callback returns a plain, already-known value, <code>.then</code> ALWAYS defers delivering it to a microtask, never synchronously.</p>" +
      "<p><b>When to use:</b> the fundamental way to consume any promise's eventual value.</p>" +
      "<p><b>When not to use:</b> for many sequential steps where <code>async</code>/<code>await</code> would read more like ordinary synchronous code.</p>" +
      "<p class='ex-gotcha'>Forgetting to <code>return</code> inside a <code>.then</code> callback is one of the most common async bugs &mdash; the next <code>.then</code> in the chain receives <code>undefined</code> instead of the value you meant to pass along.</p>",

    ".catch":
      "<p><b>Simple meaning:</b> <code>.catch(onFailure)</code> handles a rejection anywhere earlier in the chain.</p>" +
      "<p><b>Think of it as:</b> a single safety net stretched under an entire tightrope walk — it doesn't matter which section of the rope the walker falls from, the same net catches them at the bottom.</p>" +
      "<p><b>Why it exists:</b> a single <code>.catch</code> at the end of a chain is usually cleaner than passing an error handler to every individual <code>.then</code> along the way.</p>" +
      "<p><b>How it works:</b> <code>.catch(fn)</code> is exactly shorthand for <code>.then(undefined, fn)</code> — it catches a rejection from the promise it's attached to, and from <em>any</em> earlier <code>.then</code> in the same chain that didn't already handle it.</p>" +
      "<pre><code>fetchUser(1)\n  .then(user => { throw new Error('boom'); })\n  .then(x => console.log('never runs'))\n  .catch(err => console.log('caught:', err.message)); // 'caught: boom'</code></pre>" +
      "<p><b>What happens:</b> the first <code>.then</code>'s callback throws, converting the chain to a rejected state. The second <code>.then</code> is a success handler, so it's skipped entirely — the rejection jumps straight past it to the <code>.catch</code>, which is a rejection handler.</p>" +
      "<p><b>Result:</b> <code>'caught: boom'</code> logs — the middle <code>.then</code> genuinely never runs, its handler being irrelevant to a rejected promise.</p>" +
      "<p><b>Important rule:</b> a <code>.catch</code> that handles the error and returns normally <b>resumes the chain as fulfilled</b> — any <code>.then</code> after the <code>.catch</code> runs normally, not as another error handler.</p>" +
      "<p><b>Don't confuse it with:</b> re-throwing inside <code>.catch</code> — that keeps the chain rejected instead of resuming it, which is sometimes exactly what you want.</p>" +
      "<p><b>When to use:</b> a single, centralized error handler at the end of a promise chain.</p>" +
      "<p><b>When not to use:</b> when different steps genuinely need different error-handling logic — in that case, handle specific errors closer to where they occur.</p>" +
      "<p class='ex-gotcha'>A <code>.catch</code> handles the error and, by returning normally, <b>resumes the chain as fulfilled</b> &mdash; any <code>.then</code> after the <code>.catch</code> runs normally, not as an error handler. If you re-throw inside <code>.catch</code>, the chain stays rejected.</p>",

    ".finally":
      "<p><b>Simple meaning:</b> <code>.finally(fn)</code> runs after a promise settles, no matter whether it succeeded or failed.</p>" +
      "<p><b>Think of it as:</b> closing a store at the end of the day — you lock up whether it was a great sales day or a terrible one; the closing routine doesn't depend on, or care about, how the day went.</p>" +
      "<p><b>Why it exists:</b> for cleanup that must always happen — hiding a loading spinner, closing a connection — regardless of success or failure.</p>" +
      "<p><b>How it works:</b> the callback receives no arguments (it can't see the value or the error) and cannot change the outcome — the original fulfillment value or rejection reason passes through to whatever comes next, unless <code>finally</code>'s own callback throws.</p>" +
      "<pre><code>fetchUser(1)\n  .then(user => console.log(user))\n  .catch(err => console.log('failed'))\n  .finally(() => console.log('done loading')); // always runs last, regardless of outcome</code></pre>" +
      "<p><b>What happens:</b> whichever branch runs — the successful <code>.then</code> or the <code>.catch</code> — execution eventually reaches <code>.finally</code>, which fires either way with no knowledge of which branch actually ran.</p>" +
      "<p><b>Result:</b> <code>'done loading'</code> always logs last, in both the success and failure cases — the cleanup guaranteed regardless of outcome.</p>" +
      "<p><b>Important rule:</b> because it can't see the value, <code>.finally</code> is not the place to do anything <em>with</em> the result — and if its own callback throws or returns a rejected promise, <em>that</em> becomes the new outcome, overriding whatever came before.</p>" +
      "<p><b>Don't confuse it with:</b> a second <code>.then</code> — a <code>.then</code> callback receives the resolved value; <code>.finally</code>'s callback receives nothing at all.</p>" +
      "<p><b>When to use:</b> guaranteed cleanup — hiding a spinner, closing a resource, resetting a loading flag.</p>" +
      "<p><b>When not to use:</b> for anything that needs to read or use the actual result — use <code>.then</code>/<code>.catch</code> for that instead.</p>" +
      "<p class='ex-gotcha'>Because it can't see the value, <code>.finally</code> is not the place to do anything with the result &mdash; and if its own callback throws or returns a rejected promise, <em>that</em> becomes the new outcome, overriding whatever came before.</p>",

    "Promise chaining":
      "<p><b>Simple meaning:</b> Chaining is stringing multiple <code>.then</code> calls together to run async steps one after another, each using the result of the last.</p>" +
      "<p><b>Think of it as:</b> a relay race where each runner picks up right where the last one left off, all running in the same lane — as opposed to callback hell's nested runners each hiding inside the previous one's pocket.</p>" +
      "<p><b>Why it exists:</b> it's the direct fix for callback hell — a chain reads top-to-bottom instead of growing sideways with each new step.</p>" +
      "<p><b>How it works:</b> because every <code>.then</code> returns a new promise, and returning a promise from inside a <code>.then</code> callback makes the chain wait for it, you can sequence any number of async steps in one flat chain instead of nesting them.</p>" +
      "<pre><code>getUser(1)\n  .then(user => getPosts(user.id))   // returns a promise — chain WAITS for it\n  .then(posts => getComments(posts[0].id))\n  .then(comments => console.log(comments))\n  .catch(err => console.log('any step failed:', err.message));</code></pre>" +
      "<p><b>What happens:</b> each step's callback returns the next async operation's promise, and the chain automatically waits for it before moving to the next <code>.then</code> — all written flat, at the same indentation level, instead of nested inside each other.</p>" +
      "<p><b>Result:</b> a linear, top-to-bottom sequence of steps, with one <code>.catch</code> at the end covering a failure from any step along the way.</p>" +
      "<p><b>Important rule:</b> nesting <code>.then</code> calls instead of chaining them flat recreates callback hell with promises — the whole benefit is lost.</p>" +
      "<p><b>Don't confuse it with:</b> \"callback hell\" — the exact structural problem this pattern exists to fix, and which reappears if you nest <code>.then</code> calls incorrectly.</p>" +
      "<p><b>When to use:</b> sequencing multiple dependent async steps that each need the previous step's result.</p>" +
      "<p><b>When not to use:</b> for many sequential steps where <code>async</code>/<code>await</code> would be more readable and easier to add try/catch and loops to.</p>" +
      "<p class='ex-gotcha'>Nesting <code>.then</code> calls instead of chaining them flat (<code>getUser().then(u => getPosts(u).then(p => ...))</code>) recreates callback hell with promises &mdash; the whole benefit is lost. Always <code>return</code> and chain flat.</p>",

    "async/await":
      "<p><b>Simple meaning:</b> <code>async</code>/<code>await</code> is syntax that lets you write promise-based code that <em>looks</em> synchronous, top to bottom.</p>" +
      "<p><b>Think of it as:</b> a translation layer over promise chains — the underlying mechanism (promises) is unchanged, but the syntax reads like an ordinary sequential script instead of a chain of callbacks.</p>" +
      "<p><b>Why it exists:</b> it reads like normal sequential code — loops, try/catch, and conditionals all work naturally, unlike inside a <code>.then</code> chain where those constructs are awkward.</p>" +
      "<p><b>How it works:</b> an <code>async</code> function always returns a promise. Inside it, <code>await</code> pauses that function's execution — without blocking anything else in the program — until the awaited promise settles, then resumes with its value.</p>" +
      "<pre><code>async function loadDashboard(id) {\n  const user = await getUser(id);        // pauses HERE\n  const posts = await getPosts(user.id); // then HERE\n  return { user, posts };\n}\n\nconsole.log(loadDashboard(1) instanceof Promise); // true</code></pre>" +
      "<p><b>What happens:</b> when <code>loadDashboard</code> hits the first <code>await</code>, it pauses right there and hands control back to the caller — <code>loadDashboard(1)</code> itself returns a promise immediately, well before the function's body has actually finished running.</p>" +
      "<p><b>Result:</b> <code>loadDashboard(1)</code> is a promise object right away — whatever you eventually <code>return</code> from inside the function gets automatically wrapped into that promise's fulfillment value once execution completes.</p>" +
      "<p><b>Important rule:</b> \"<code>await</code> pauses everything\" is the common misreading — it only pauses <em>that function</em>; the rest of the program keeps running normally.</p>" +
      "<p><b>Don't confuse it with:</b> blocking, synchronous code — <code>await</code> yields control back to the event loop while paused, it never freezes the whole program the way a synchronous busy-loop would.</p>" +
      "<p><b>When to use:</b> sequential async steps where each depends on the previous one's result — reads more naturally than a <code>.then</code> chain.</p>" +
      "<p><b>When not to use:</b> for independent operations that could run at the same time — see \"Sequential vs parallel async execution\" for why that's a real performance bug.</p>" +
      "<p class='ex-gotcha'>\"<code>await</code> pauses everything\" is the common misreading &mdash; it only pauses <em>that function</em>. The rest of the program (other code, the event loop, other async functions) keeps running normally.</p>",

    "try/catch with async":
      "<p><b>Simple meaning:</b> Wrapping <code>await</code> in <code>try</code>/<code>catch</code> lets you handle a rejected promise the same way you'd handle a thrown error.</p>" +
      "<p><b>Think of it as:</b> extending the same safety net you already use for synchronous errors to also catch async failures — one familiar mechanism, instead of a separate <code>.catch()</code> pattern to learn.</p>" +
      "<p><b>Why it exists:</b> to unify error handling for sync and async code into one familiar pattern, rather than requiring a separate <code>.catch()</code> chain alongside it.</p>" +
      "<p><b>How it works:</b> when an awaited promise rejects, <code>await</code> effectively re-throws that rejection reason right at the point of the <code>await</code> — so an ordinary <code>catch</code> block wrapped around it catches it, exactly like a synchronous throw would.</p>" +
      "<pre><code>async function loadUser(id) {\n  try {\n    const user = await fetchUser(id); // rejects\n    console.log(user);\n  } catch (err) {\n    console.log('failed:', err.message); // catches it\n  }\n}</code></pre>" +
      "<p><b>What happens:</b> <code>fetchUser(id)</code> rejects. Because it's awaited directly inside this <code>try</code> block, <code>await</code> converts that rejection into a synchronous-style throw right there, which the surrounding <code>catch</code> intercepts normally.</p>" +
      "<p><b>Result:</b> the error message logs cleanly from the <code>catch</code> block — the rejection never escapes as an unhandled promise rejection.</p>" +
      "<p><b>Important rule:</b> the <code>try</code>/<code>catch</code> only catches a rejection from an <code>await</code> <em>inside its own block</em> — a promise you create but forget to <code>await</code> rejects independently, and the <code>catch</code> will never see it.</p>" +
      "<p><b>Don't confuse it with:</b> <code>.catch()</code> chained on a promise you never <code>await</code>ed — that's a separate, valid pattern, but it's not the same as this <code>try</code>/<code>catch</code>.</p>" +
      "<p><b>When to use:</b> handling async errors with the same familiar pattern as synchronous error handling.</p>" +
      "<p><b>When not to use:</b> around a promise you're deliberately NOT awaiting (fire-and-forget) — the try/catch there will never see that promise's rejection.</p>" +
      "<p class='ex-gotcha'>The <code>try</code>/<code>catch</code> only catches a rejection from an <code>await</code> <em>inside its own block</em>. A promise you create but forget to <code>await</code> rejects on its own, outside the <code>try</code>, and the <code>catch</code> will never see it &mdash; it becomes an unhandled rejection instead.</p>",

    "Promise.all":
      "<p><b>Simple meaning:</b> <code>Promise.all(promises)</code> waits for every promise in a list to succeed, and gives you back all their results together.</p>" +
      "<p><b>Think of it as:</b> a group project where the grade is only released once every single member has submitted — and the instant ONE member fails to submit, the whole group gets a zero immediately, regardless of how many others already finished.</p>" +
      "<p><b>Why it exists:</b> for running independent async operations at the same time, when you need every result and genuinely can't proceed without all of them.</p>" +
      "<p><b>How it works:</b> it returns a single promise that fulfills with an array of results (in the same order as the input) once <em>all</em> input promises fulfill, or rejects immediately as soon as <em>any one</em> of them rejects (\"fail-fast\").</p>" +
      "<pre><code>const [user, posts, settings] = await Promise.all([\n  fetchUser(1), fetchPosts(1), fetchSettings(1)\n]); // all three run concurrently, not one after another</code></pre>" +
      "<p><b>What happens:</b> all three fetches start immediately, running concurrently rather than one waiting for the previous. <code>Promise.all</code> waits for the slowest of the three to finish, then resolves with an array holding all three results, in the same order they were passed in.</p>" +
      "<p><b>Result:</b> the destructured <code>user</code>, <code>posts</code>, <code>settings</code> — but only if all three succeed; a single failure discards everything and rejects instead.</p>" +
      "<p><b>Important rule:</b> fail-fast means one failure discards everything — even if 2 of 3 requests already succeeded, <code>Promise.all</code> rejects and you get none of the results back.</p>" +
      "<p><b>Don't confuse it with:</b> <code>Promise.allSettled</code> — the sibling that never fails and gives you every result, success or failure, individually.</p>" +
      "<p><b>When to use:</b> when you need every result and genuinely cannot proceed without all of them succeeding.</p>" +
      "<p><b>When not to use:</b> when partial success is acceptable — use <code>Promise.allSettled</code> instead if you need the successes even when something fails.</p>" +
      "<p class='ex-gotcha'>Fail-fast means one failure discards everything &mdash; even if 2 of 3 requests already succeeded, <code>Promise.all</code> rejects and you get none of the results back. Use <code>Promise.allSettled</code> if you need the successes even when something fails.</p>",

    "Promise.allSettled":
      "<p><b>Simple meaning:</b> Like <code>Promise.all</code>, but it never fails &mdash; it waits for every promise to finish, whether it succeeded or not, and reports both.</p>" +
      "<p><b>Think of it as:</b> the same group project, except the report card lists every member's individual result — pass or fail — instead of collapsing the whole group into one zero the moment anyone fails.</p>" +
      "<p><b>Why it exists:</b> for when you want the results of everything that succeeded, even if some operations failed — e.g. loading several independent widgets where one failing shouldn't blank out the rest.</p>" +
      "<p><b>How it works:</b> it always fulfills (never rejects) with an array of <code>{ status, value }</code> or <code>{ status, reason }</code> objects, one per input promise, once every one of them has settled.</p>" +
      "<pre><code>const results = await Promise.allSettled([\n  fetchA(), fetchB() // B rejects\n]);\n// [\n//   { status: 'fulfilled', value: 'A ok' },\n//   { status: 'rejected', reason: Error('B failed') }\n// ]\nresults.filter(r => r.status === 'fulfilled').forEach(r => console.log(r.value));</code></pre>" +
      "<p><b>What happens:</b> both promises are allowed to settle fully — A's success and B's failure are both captured individually, neither one discarding the other. The result array reports each outcome with its own status.</p>" +
      "<p><b>Result:</b> an array that never fails to exist — you must check <code>status</code> on each entry yourself to know which succeeded and which failed.</p>" +
      "<p><b>Important rule:</b> because it never rejects, wrapping it in <code>try</code>/<code>catch</code> is pointless — you must check each <code>result.status</code> yourself instead of relying on an exception.</p>" +
      "<p><b>Don't confuse it with:</b> <code>Promise.all</code> — the fail-fast sibling that discards everything on a single rejection.</p>" +
      "<p><b>When to use:</b> loading several independent operations where partial success is acceptable and you need to know exactly which ones failed.</p>" +
      "<p><b>When not to use:</b> when a single failure genuinely means the whole operation should be treated as failed — use <code>Promise.all</code> instead.</p>" +
      "<p class='ex-gotcha'>Because it never rejects, wrapping it in <code>try</code>/<code>catch</code> is pointless &mdash; you must check each <code>result.status</code> yourself instead of relying on an exception.</p>",

    "Promise.race":
      "<p><b>Simple meaning:</b> <code>Promise.race(promises)</code> settles as soon as the <em>first</em> promise settles &mdash; win or lose.</p>" +
      "<p><b>Think of it as:</b> a literal race — the first runner to cross the finish line wins the race and ends it, whether they crossed it triumphantly or by tripping over the line. Everyone else is irrelevant the moment that happens.</p>" +
      "<p><b>Why it exists:</b> the classic use case is a timeout — race a real request against a timer that rejects, so a hung request can't stall forever.</p>" +
      "<p><b>How it works:</b> it returns a promise that adopts the outcome (fulfilled OR rejected) of whichever input promise settles first; the rest keep running in the background but their eventual results are simply ignored.</p>" +
      "<pre><code>const timeout = new Promise((_, reject) =>\n  setTimeout(() => reject(new Error('timeout')), 3000)\n);\n\nconst data = await Promise.race([fetchData(), timeout]);\n// resolves with fetchData()'s result if it beats 3s, else rejects with the timeout error</code></pre>" +
      "<p><b>What happens:</b> both <code>fetchData()</code> and <code>timeout</code> start racing simultaneously. Whichever settles first — the real fetch succeeding, or the 3-second timer rejecting — determines the outcome of the whole <code>Promise.race</code> call.</p>" +
      "<p><b>Result:</b> either <code>fetchData</code>'s successful result (if it beats 3 seconds) or a rejected promise with the timeout error (if it doesn't) — never both, and never a merge of the two.</p>" +
      "<p><b>Important rule:</b> \"race\" means first to <b>settle</b>, not first to succeed — if the fastest promise rejects, <code>Promise.race</code> rejects too, even if a slower one would have fulfilled.</p>" +
      "<p><b>Don't confuse it with:</b> <code>Promise.any</code> — that specifically waits for the first <em>success</em>, ignoring failures unless everything fails, unlike <code>race</code>'s indifference to win vs. lose.</p>" +
      "<p><b>When to use:</b> implementing timeouts, or any scenario where you specifically care about \"whichever finishes first, for any reason.\"</p>" +
      "<p><b>When not to use:</b> when you specifically want the first successful result, ignoring failures — use <code>Promise.any</code> instead.</p>" +
      "<p class='ex-gotcha'>\"Race\" means first to <b>settle</b>, not first to succeed &mdash; if the fastest promise rejects, <code>Promise.race</code> rejects too, even if a slower one would have fulfilled. That's the exact difference from <code>Promise.any</code>.</p>",

    "Promise.any":
      "<p><b>Simple meaning:</b> <code>Promise.any(promises)</code> gives you the first one that <em>succeeds</em>, ignoring failures unless everything fails.</p>" +
      "<p><b>Think of it as:</b> trying several unlocked doors at once — you only care about the first one that actually opens; doors that are jammed are simply ignored, unless every single door turns out to be jammed.</p>" +
      "<p><b>Why it exists:</b> for trying several equivalent sources (mirrors, fallback servers) and taking whichever answers first, successfully — while tolerating individual failures along the way.</p>" +
      "<p><b>How it works:</b> it fulfills as soon as any input promise fulfills. It only rejects if <em>all</em> of them reject, and in that case rejects with an <code>AggregateError</code> containing every individual rejection reason.</p>" +
      "<pre><code>const fastest = await Promise.any([\n  fetchFromMirrorA(),  // fails\n  fetchFromMirrorB(),  // succeeds\n  fetchFromMirrorC(),  // still pending\n]);\n// resolves with mirror B's result — A's failure is IGNORED, not fatal</code></pre>" +
      "<p><b>What happens:</b> mirror A's failure doesn't end anything — <code>Promise.any</code> keeps waiting for a success from the remaining candidates. The instant mirror B succeeds, that becomes the final result, regardless of what mirror C eventually does.</p>" +
      "<p><b>Result:</b> mirror B's data — A's rejection never surfaces anywhere unless every single mirror also fails.</p>" +
      "<p><b>Important rule:</b> don't confuse this with <code>Promise.race</code> — <code>race</code> cares about who settles first (success or failure); <code>any</code> specifically waits for the first <em>success</em> and only gives up if literally everything fails.</p>" +
      "<p><b>Don't confuse it with:</b> <code>Promise.race</code> — see \"Important rule\" above; this is the single most commonly confused pair of promise combinators.</p>" +
      "<p><b>When to use:</b> trying multiple equivalent sources where any one succeeding is good enough.</p>" +
      "<p><b>When not to use:</b> when you need EVERY result, not just the first success — use <code>Promise.all</code> or <code>allSettled</code> instead.</p>" +
      "<p class='ex-gotcha'>Don't confuse it with <code>Promise.race</code>: <code>race</code> cares about who settles first (success or failure); <code>any</code> specifically waits for the first <em>success</em> and only gives up if literally everything fails.</p>",

    "Sequential vs parallel async execution":
      "<p><b>Simple meaning:</b> If async steps don't depend on each other, running them one-by-one with separate <code>await</code>s wastes time &mdash; you should start them together instead.</p>" +
      "<p><b>Think of it as:</b> ordering three dishes from a restaurant — if you order one, wait for it to fully arrive, THEN order the next, dinner takes three times as long as if the kitchen just started cooking all three the moment you ordered them together.</p>" +
      "<p><b>Why it exists as a distinction:</b> this is one of the highest-impact real-world performance bugs in async code — three independent 1-second requests can take 3 seconds sequentially, or ~1 second run together.</p>" +
      "<p><b>How it works:</b> each <code>await</code> pauses until that specific promise settles before moving to the next line. If the operations are independent, awaiting them one at a time in sequence adds their durations together; starting them concurrently (e.g. with <code>Promise.all</code>) only takes as long as the slowest one.</p>" +
      "<pre><code>// SEQUENTIAL — slow, ~3× the time (unnecessary, they don't depend on each other)\nconst a = await fetchA(); // waits\nconst b = await fetchB(); // then waits again\nconst c = await fetchC(); // then waits again\n\n// PARALLEL — fast, all start together\nconst [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);</code></pre>" +
      "<p><b>What happens:</b> in the sequential version, <code>fetchB()</code> is not even <em>called</em> until <code>fetchA()</code>'s promise has fully resolved — the second request's clock hasn't even started yet. In the parallel version, all three fetches are called (and start running) in the same instant, inside the array passed to <code>Promise.all</code>.</p>" +
      "<p><b>Result:</b> roughly the sum of all three durations sequentially, versus roughly the single slowest duration in parallel — a dramatic real-world difference on independent network calls.</p>" +
      "<p><b>Important rule:</b> the classic version of this bug is <code>await</code> inside a <code>for</code> loop over independent items — it silently runs every iteration one after another.</p>" +
      "<p><b>Don't confuse it with:</b> genuinely dependent steps, where sequential <code>await</code> is correct and necessary — parallelizing only makes sense when steps don't need each other's results.</p>" +
      "<p><b>When to use:</b> whenever multiple async operations are genuinely independent of each other.</p>" +
      "<p><b>When not to use:</b> when a later step actually needs an earlier step's result — that's a genuine case for sequential <code>await</code>.</p>" +
      "<p class='ex-gotcha'>The classic version of this bug is <code>await</code> inside a <code>for</code> loop over independent items &mdash; it silently runs every iteration one after another. If the items don't depend on each other, map to an array of promises first, then <code>Promise.all</code> that array.</p>",

    "Error propagation in promises":
      "<p><b>Simple meaning:</b> An error in a promise chain skips forward past every <code>.then</code> until it finds a <code>.catch</code> (or an <code>await</code> inside a <code>try</code>/<code>catch</code>).</p>" +
      "<p><b>Think of it as:</b> a ball rolling down a row of funnels with holes in most of them — it just falls straight through every funnel that only catches successes, until it reaches one specifically shaped to catch failures.</p>" +
      "<p><b>Why it exists:</b> this mirrors synchronous <code>try</code>/<code>catch</code> propagation, so you don't need an error check after every single async step — one handler at the end is usually enough.</p>" +
      "<p><b>How it works:</b> a rejection (or a thrown error inside a <code>.then</code> callback, which becomes a rejection) propagates down the chain, skipping the success handlers of subsequent <code>.then</code> calls, until it reaches a rejection handler.</p>" +
      "<pre><code>step1()\n  .then(step2)          // throws\n  .then(step3)          // SKIPPED — error already propagating\n  .then(step4)          // SKIPPED\n  .catch(err => console.log('caught at the end:', err.message));</code></pre>" +
      "<p><b>What happens:</b> once <code>step2</code>'s callback throws, the chain enters a rejected state. Both <code>step3</code> and <code>step4</code> are success handlers, irrelevant to a rejected promise — they're skipped entirely without running, and the error keeps propagating until it reaches the <code>.catch</code>.</p>" +
      "<p><b>Result:</b> only the <code>.catch</code> callback runs, receiving the original error — two entire steps are silently bypassed.</p>" +
      "<p><b>Important rule:</b> a promise created but never given a <code>.catch</code> (and never awaited inside a <code>try</code>) fails silently at first — it becomes an <b>unhandled rejection</b>, which most environments eventually log as a warning or crash the process.</p>" +
      "<p><b>Don't confuse it with:</b> synchronous try/catch unwinding — the underlying idea is identical, but this happens across asynchronous steps and microtask boundaries instead of within one synchronous call stack.</p>" +
      "<p><b>When to use:</b> understanding this explains why one <code>.catch</code> at the end of a chain is enough to cover every earlier step.</p>" +
      "<p><b>When not to use:</b> n/a — this propagation behavior is automatic; the choice is only in where you place your <code>.catch</code>.</p>" +
      "<p class='ex-gotcha'>A promise that's created but never given a <code>.catch</code> (and never awaited inside a <code>try</code>) still fails silently at first &mdash; it becomes an <b>unhandled rejection</b>, which most environments will eventually log as a warning or crash the process.</p>",

    "Promise cancellation concepts":
      "<p><b>Simple meaning:</b> Once a promise exists, you cannot cancel it directly &mdash; there's no built-in <code>.cancel()</code> method.</p>" +
      "<p><b>Think of it as:</b> a claim ticket, not a request in progress — the ticket itself is just a piece of paper representing a future outcome; you can't \"cancel\" the paper, you can only ask the shop to stop working on the actual order.</p>" +
      "<p><b>Why it matters:</b> a component that unmounts, or a search box where the user typed a new query, both need a way to say \"ignore the result of that earlier request\" — and promises alone can't express that.</p>" +
      "<p><b>How it works:</b> a <code>Promise</code> represents a value that will eventually exist, not a runnable task — it has no concept of being stopped. What you actually cancel is the underlying <em>operation</em> (a fetch, a timer), which then causes its promise to reject as a side effect.</p>" +
      "<pre><code>const p = fetch('/slow-endpoint');\n// there is no p.cancel() — the request keeps running regardless</code></pre>" +
      "<p><b>What happens:</b> nothing you can do to <code>p</code> itself stops the underlying network request — the promise object has no cancellation API at all, by design.</p>" +
      "<p><b>Result:</b> the fetch keeps running to completion (or failure) on its own, no matter what your code does with the promise object afterward.</p>" +
      "<p><b>Important rule:</b> \"cancelling a promise\" is really shorthand for \"cancelling the operation and ignoring its promise's eventual result\" — see <code>AbortController</code>, the standard tool for that.</p>" +
      "<p><b>Don't confuse it with:</b> <code>AbortController</code> — the actual tool that cancels the underlying operation and causes the associated promise to reject as a result.</p>" +
      "<p><b>When to use:</b> understanding this explains why a real cancellation tool (<code>AbortController</code>) is needed, rather than expecting promises to support it natively.</p>" +
      "<p><b>When not to use:</b> n/a — this is a conceptual limit of promises, not a technique with a use case.</p>" +
      "<p class='ex-gotcha'>\"Cancelling a promise\" is really shorthand for \"cancelling the operation and ignoring its promise's eventual result\" &mdash; see <code>AbortController</code>, the standard tool for the former.</p>",

    "AbortController":
      "<p><b>Simple meaning:</b> <code>AbortController</code> is a standard way to tell a cancellable async operation (like <code>fetch</code>) to stop.</p>" +
      "<p><b>Think of it as:</b> a remote kill-switch handed to the operation when it starts — you keep the switch, and can flip it at any point to signal \"stop what you're doing\", even though the operation itself is running elsewhere.</p>" +
      "<p><b>Why it exists:</b> for cancelling an in-flight request when a user navigates away, types a new search, or a component unmounts — so a stale, late-arriving response can't overwrite newer data.</p>" +
      "<p><b>How it works:</b> creating an <code>AbortController</code> gives you a <code>.signal</code> to pass into a cancellable API, and an <code>.abort()</code> method to call when you want it to stop. The operation then rejects its promise with an <code>AbortError</code>.</p>" +
      "<pre><code>const controller = new AbortController();\n\nfetch('/search?q=abc', { signal: controller.signal })\n  .then(res => res.json())\n  .catch(err => {\n    if (err.name === 'AbortError') console.log('cancelled');\n  });\n\ncontroller.abort(); // triggers the rejection above</code></pre>" +
      "<p><b>What happens:</b> the <code>signal</code> is wired into the <code>fetch</code> call when it starts. Calling <code>controller.abort()</code> at any later point signals that same connection to stop, which makes the <code>fetch</code> promise reject with a special <code>AbortError</code> instead of ever resolving.</p>" +
      "<p><b>Result:</b> the <code>.catch</code> receives an <code>AbortError</code> specifically — distinguishable from a genuine network failure by checking <code>err.name</code>.</p>" +
      "<p><b>Important rule:</b> aborting doesn't magically undo work already done, and it doesn't stop the underlying network transfer instantly — it tells the API to stop and reject its promise so <em>your code</em> can ignore the result.</p>" +
      "<p><b>Don't confuse it with:</b> a genuine failure — always check <code>err.name === 'AbortError'</code> so a deliberate cancel isn't mistaken for a real error and shown to the user as one.</p>" +
      "<p><b>When to use:</b> cancelling in-flight requests when a newer one supersedes them, or when a component unmounts mid-request.</p>" +
      "<p><b>When not to use:</b> for operations that don't support the signal API — not every async function accepts an <code>AbortController</code> signal; check the specific API first.</p>" +
      "<p class='ex-gotcha'>Aborting doesn't magically undo work already done, and it doesn't stop the underlying network byte transfer instantly &mdash; it tells the API to stop and reject its promise so <em>your code</em> can ignore the result; always check <code>err.name === 'AbortError'</code> so you don't treat a deliberate cancel as a real failure.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Event loop": {
    "Event loop":
      "<p><b>Simple meaning:</b> The mechanism that lets single-threaded JavaScript handle many things \"at once\" &mdash; it keeps checking: is the call stack empty? If so, run the next queued callback.</p>" +
      "<p><b>Think of it as:</b> a single, tireless waiter who never carries two dishes at once, but constantly checks the kitchen window — the instant one dish is ready and their hands are free, they grab it and move.</p>" +
      "<p><b>Why it exists:</b> it's what makes non-blocking async possible on a single thread — slow operations are handed off elsewhere, and the loop brings their results back at the right moment without ever running two callbacks at the same instant.</p>" +
      "<p><b>How it works</b> — the loop's actual rule, every tick:</p>" +
      "<pre><code>1. Run the current task on the call stack until it's empty.\n2. Drain the ENTIRE microtask queue (run every microtask,\n   even new ones added while draining).\n3. (In browsers) possibly render a frame.\n4. Take exactly ONE task from the macrotask queue, run it.\n5. Go back to step 1.</code></pre>" +
      "<pre><code>console.log('A');\nsetTimeout(() => console.log('D'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('B');\n// A, B, C, D — sync first, then ALL microtasks, then ONE macrotask</code></pre>" +
      "<p><b>What happens:</b> both <code>console.log</code> calls run immediately as part of the synchronous script. The timer callback and the promise callback are both deferred — but the promise callback goes into the higher-priority microtask queue, which fully drains before the timer (a macrotask) gets its single turn.</p>" +
      "<p><b>Result:</b> <code>A, B, C, D</code> — the two async callbacks run only after all synchronous code, and the microtask beats the macrotask even though both were scheduled with effectively \"immediate\" timing.</p>" +
      "<p><b>Important rule:</b> the loop does not run your code \"in parallel\" with itself — it strictly alternates: finish what's running, drain microtasks completely, then take just one macrotask.</p>" +
      "<p><b>Don't confuse it with:</b> multi-threading — the event loop coordinates single-threaded work; it never runs two callbacks simultaneously, only in rapid, non-overlapping succession.</p>" +
      "<p><b>When to use:</b> understanding this explains virtually every \"why did this log in that order?\" async question.</p>" +
      "<p><b>When not to use:</b> n/a — this is the runtime's fixed mechanism, not a technique you opt into.</p>" +
      "<p class='ex-gotcha'>The loop does not run your code \"in parallel\" with itself &mdash; it strictly alternates: finish what's running, drain microtasks completely, then take just one macrotask. Understanding that asymmetry (drain vs. take-one) answers most ordering questions in this topic.</p>",

    "Call stack":
      "<p><b>Simple meaning:</b> Where JavaScript keeps track of what function is currently running, and what called it.</p>" +
      "<p><b>Think of it as:</b> a stack of plates — each function call adds a plate when it starts, removes it when it finishes; you can only ever touch the top plate, and it has to come off before the one beneath it can.</p>" +
      "<p><b>Why it exists:</b> the runtime needs an ordered record of exactly which function is executing and which functions are waiting for it to return — that's what makes nested calls and recursion possible at all.</p>" +
      "<p><b>How it works:</b> it's a LIFO (last-in, first-out) stack of execution contexts. Calling a function pushes a new frame on top; returning from it pops that frame off. The event loop only moves a queued callback onto the call stack once it is completely empty.</p>" +
      "<pre><code>function c() { console.log('in c'); }\nfunction b() { c(); }\nfunction a() { b(); }\na();\n\n// stack grows: a → b → c\n// 'in c' logs, then c returns, b returns, a returns\n// stack shrinks back to empty</code></pre>" +
      "<p><b>What happens:</b> each call pushes a new frame — <code>a</code>, then <code>b</code>, then <code>c</code> — before <code>c</code>'s log statement even runs. Once <code>c</code> finishes, its frame pops, then <code>b</code>'s, then <code>a</code>'s, unwinding the stack back to empty in reverse order.</p>" +
      "<p><b>Result:</b> one log statement fires, but the stack visibly grows to depth 3 and back to 0 in the process — the event loop can't move anything else onto the stack until that whole unwind completes.</p>" +
      "<p><b>Important rule:</b> because JS has exactly one call stack, it can only truly execute one line of your code at any instant — this is the literal meaning of \"single-threaded\".</p>" +
      "<p><b>Don't confuse it with:</b> the event loop's queues — the call stack holds currently-executing frames; the queues hold callbacks waiting for the stack to become empty.</p>" +
      "<p><b>When to use:</b> reason about it when analyzing recursion depth or reading a stack trace.</p>" +
      "<p><b>When not to use:</b> n/a — every function call uses it automatically.</p>" +
      "<p class='ex-gotcha'>\"Maximum call stack size exceeded\" (e.g. from infinite recursion with no base case) means the stack grew frame after frame with nothing ever popping off, until it overflowed its fixed size limit.</p>",

    "Web APIs/runtime APIs":
      "<p><b>Simple meaning:</b> Things like <code>setTimeout</code>, <code>fetch</code>, and DOM events are not part of the JavaScript language itself &mdash; they're provided by the environment running your code.</p>" +
      "<p><b>Think of it as:</b> JavaScript is the chef, but timers and network requests are handled by a separate delivery service the restaurant contracts out to — the chef never personally waits by the door, they just get notified the instant the delivery arrives.</p>" +
      "<p><b>Why it exists:</b> this is <em>why</em> async doesn't block the single JS thread — the waiting happens in the runtime (often backed by real OS-level concurrency), not in your JS code, which stays free to keep running.</p>" +
      "<p><b>How it works:</b> the JS engine (e.g. V8) only implements the language spec — values, functions, closures, promise mechanics. Timers, network requests, and file I/O are supplied by the host environment, which does the actual waiting outside the JS engine and hands a callback back to the queue when done.</p>" +
      "<pre><code>setTimeout(fn, 1000);\n// JS engine: 'not my job to wait' — hands the timer off\n// to the browser/Node runtime, which calls back into the\n// macrotask queue once 1000ms has passed</code></pre>" +
      "<p><b>What happens:</b> the JS engine registers the timer with the host runtime and immediately moves on — it does not sit and wait. The runtime itself tracks the 1000ms elapsing, entirely outside the JS engine, and only re-enters JS-land by queuing <code>fn</code> once the time is up.</p>" +
      "<p><b>Result:</b> the rest of your JS code keeps executing immediately after <code>setTimeout</code> is called — the actual callback runs much later, and asynchronously.</p>" +
      "<p><b>Important rule:</b> this is why the exact same JS language can behave slightly differently between a browser and Node — <code>setTimeout</code>, <code>fetch</code>, and the queue phases are runtime features, not JavaScript-the-language features.</p>" +
      "<p><b>Don't confuse it with:</b> the JS engine itself — <code>Array.prototype.map</code>, closures, and promise mechanics are genuine language features; <code>fetch</code> and DOM APIs are not.</p>" +
      "<p><b>When to use:</b> understanding this explains why Node lacks <code>window</code>/<code>document</code> but has <code>fs</code>/<code>process</code> — different runtimes, different supplied APIs.</p>" +
      "<p><b>When not to use:</b> n/a — this is a foundational fact about the runtime, not a technique.</p>" +
      "<p class='ex-gotcha'>This is why the exact same JS language can behave slightly differently between a browser and Node &mdash; <code>setTimeout</code>, <code>fetch</code>, and the queue phases are runtime features, not JavaScript-the-language features.</p>",

    "Task queue":
      "<p><b>Simple meaning:</b> Also called the macrotask queue &mdash; where callbacks from things like <code>setTimeout</code>, <code>setInterval</code>, and I/O wait their turn to run.</p>" +
      "<p><b>Think of it as:</b> a single-file line at a ticket counter — one person is served, fully, before the counter even looks at the next person in line.</p>" +
      "<p><b>Why it exists:</b> it's the mechanism that lets timers and I/O callbacks run only when the stack is free, in the order they became ready.</p>" +
      "<p><b>How it works:</b> a FIFO queue of macrotasks. On every iteration of the event loop, after fully draining the microtask queue, the loop removes and runs exactly <b>one</b> task from this queue.</p>" +
      "<pre><code>setTimeout(() => console.log('first timer'), 0);\nsetTimeout(() => console.log('second timer'), 0);\n// both queued as macrotasks — 'first timer' then 'second timer',\n// each getting the FULL microtask queue drained before the next one runs</code></pre>" +
      "<p><b>What happens:</b> both timers queue as separate macrotasks, in the order they were scheduled. The loop takes just the first one, runs it to completion (draining any microtasks it triggers along the way), and only THEN comes back for the second.</p>" +
      "<p><b>Result:</b> <code>'first timer'</code> then <code>'second timer'</code> — strictly one at a time, never both together, no matter how many are waiting.</p>" +
      "<p><b>Important rule:</b> only <b>one</b> macrotask runs per loop iteration, even if several are ready — contrast with the microtask queue, which is always drained completely before moving on.</p>" +
      "<p><b>Don't confuse it with:</b> the microtask queue — this is the key asymmetry in the whole topic: take-one vs. drain-all.</p>" +
      "<p><b>When to use:</b> understanding this explains why several pending timers don't all fire in the same instant, even at delay 0.</p>" +
      "<p><b>When not to use:</b> n/a — this queueing behavior is automatic.</p>" +
      "<p class='ex-gotcha'>Only <b>one</b> macrotask runs per loop iteration, even if several are ready &mdash; contrast with the microtask queue, which is always drained completely before moving on.</p>",

    "Microtask queue":
      "<p><b>Simple meaning:</b> A separate, higher-priority queue for promise callbacks and <code>queueMicrotask</code> &mdash; it's always fully emptied before the next macrotask runs.</p>" +
      "<p><b>Think of it as:</b> a VIP line that gets served completely, no matter how many new VIPs join mid-service, before the counter even glances at the regular line again.</p>" +
      "<p><b>Why it exists:</b> promises need to resolve reliably and predictably before the next \"round\" of work, so promise reactions were given this stronger guarantee than timers.</p>" +
      "<p><b>How it works:</b> after each synchronous task finishes, the event loop repeatedly pulls and runs microtasks — including ones newly added by other microtasks — until the queue is completely empty, before doing anything else.</p>" +
      "<pre><code>Promise.resolve()\n  .then(() => {\n    console.log('1');\n    Promise.resolve().then(() => console.log('2')); // queued DURING the drain\n  });\nsetTimeout(() => console.log('3'), 0);\n// logs: 1, 2, 3 — the nested microtask (2) still runs before the macrotask (3)</code></pre>" +
      "<p><b>What happens:</b> the first microtask logs <code>1</code> and, while STILL draining, schedules a second microtask. The drain doesn't stop just because it started with one item — it keeps consuming newly-added microtasks too, so <code>2</code> runs before the loop ever gets to the macrotask.</p>" +
      "<p><b>Result:</b> <code>1, 2, 3</code> — the macrotask <code>3</code> waits behind BOTH microtasks, even the one added mid-drain.</p>" +
      "<p><b>Important rule:</b> because the drain keeps consuming newly added microtasks too, a microtask that keeps scheduling another microtask can starve macrotasks (and browser rendering) indefinitely (see \"Event-loop starvation\").</p>" +
      "<p><b>Don't confuse it with:</b> the macrotask queue — which only ever gives up ONE item per loop iteration, no matter how many more are queued.</p>" +
      "<p><b>When to use:</b> understanding this explains why nested <code>.then</code> chains never get interrupted by a pending <code>setTimeout</code>.</p>" +
      "<p><b>When not to use:</b> n/a — this drain behavior is automatic.</p>" +
      "<p class='ex-gotcha'>Because the drain keeps consuming <em>newly added</em> microtasks too, a microtask that keeps scheduling another microtask can starve macrotasks (and browser rendering) indefinitely &mdash; see \"Event-loop starvation\".</p>",

    "Macrotasks":
      "<p><b>Simple meaning:</b> The \"big\", lower-priority units of work &mdash; a <code>setTimeout</code> firing, a <code>setInterval</code> tick, a click event, a full script execution.</p>" +
      "<p><b>Think of it as:</b> the regular ticket line, versus the microtask queue's VIP line — always served, but only ever after the VIP line is completely empty.</p>" +
      "<p><b>Why the distinction exists:</b> giving promises (microtasks) priority over timers (macrotasks) means promise chains resolve as soon as possible, without waiting behind whatever timers happen to be queued.</p>" +
      "<p><b>How it works:</b> macrotasks (sometimes just called \"tasks\") are scheduled in the task queue and processed one per event-loop iteration, always after the microtask queue has been fully drained.</p>" +
      "<pre><code>setTimeout(() => console.log('macrotask'), 0);\nPromise.resolve().then(() => console.log('microtask'));\n// microtask, THEN macrotask — always, regardless of delay=0</code></pre>" +
      "<p><b>What happens:</b> even with a <code>0</code>ms delay, the timer's callback still has to wait behind the entire microtask queue, which is checked first on every loop cycle before any macrotask gets a turn.</p>" +
      "<p><b>Result:</b> <code>'microtask'</code> always logs before <code>'macrotask'</code> here — the delay value is irrelevant to this ordering, it's the queue type that decides priority.</p>" +
      "<p><b>Important rule:</b> a <code>setTimeout(fn, 0)</code> never truly runs at 0ms — it's a macrotask, so it always runs after the current script and every pending microtask, and browsers additionally clamp very short/nested timeouts to a minimum of ~4ms.</p>" +
      "<p><b>Don't confuse it with:</b> the microtask queue — see \"Task queue\" and \"Microtask queue\" for the take-one vs. drain-all distinction that separates them.</p>" +
      "<p><b>When to use:</b> understanding this explains the microtask-before-macrotask ordering seen in nearly every async ordering question.</p>" +
      "<p><b>When not to use:</b> n/a — this priority is fixed by the runtime.</p>" +
      "<p class='ex-gotcha'>A <code>setTimeout(fn, 0)</code> never truly runs at 0ms &mdash; it's a macrotask, so it always runs after the current script and every pending microtask, and browsers additionally clamp very short/nested timeouts to a minimum of ~4ms.</p>",

    "Promise callbacks":
      "<p><b>Simple meaning:</b> The functions you pass to <code>.then</code>, <code>.catch</code>, and <code>.finally</code> don't run immediately when the promise settles &mdash; they're scheduled as microtasks.</p>" +
      "<p><b>Think of it as:</b> even handing a ticket to someone standing right at an empty VIP counter still means they get formally called up next, rather than served on the spot mid-conversation — there's always at least one \"beat\" of deferral.</p>" +
      "<p><b>Why it exists:</b> to guarantee promise reactions are always asynchronous and consistently ordered, never accidentally synchronous depending on timing.</p>" +
      "<p><b>How it works:</b> when a promise settles, its reaction callbacks are placed on the microtask queue rather than run synchronously, even if the promise was <em>already</em> settled at the time you attached the handler.</p>" +
      "<pre><code>const p = Promise.resolve('already done');\nconsole.log('sync 1');\np.then(v => console.log(v)); // still deferred to a microtask\nconsole.log('sync 2');\n// sync 1, sync 2, already done — never runs synchronously, even though p was ready</code></pre>" +
      "<p><b>What happens:</b> even though <code>p</code> is already settled the instant <code>.then</code> is attached, the callback is still queued as a microtask rather than run right there — so both synchronous logs finish first, regardless.</p>" +
      "<p><b>Result:</b> <code>'sync 1'</code>, <code>'sync 2'</code>, then <code>'already done'</code> — the callback never runs synchronously, no matter how \"ready\" the promise already was.</p>" +
      "<p><b>Important rule:</b> promise callbacks are <em>always</em> asynchronous, even for a promise resolved before <code>.then</code> was even called — beginners often expect the opposite.</p>" +
      "<p><b>Don't confuse it with:</b> synchronous callback patterns like array methods — <code>.map</code>'s callback runs immediately and synchronously; a promise's <code>.then</code> callback never does.</p>" +
      "<p><b>When to use:</b> understanding this explains why code right after a <code>.then()</code> attachment always runs before the <code>.then</code> callback itself.</p>" +
      "<p><b>When not to use:</b> n/a — this deferral is automatic and cannot be bypassed.</p>" +
      "<p class='ex-gotcha'>Beginners often expect <code>.then</code> on an already-resolved promise to run its callback right away, synchronously &mdash; it never does. Promise callbacks are <em>always</em> asynchronous, even for a promise that was resolved before <code>.then</code> was even called.</p>",

    "setTimeout":
      "<p><b>Simple meaning:</b> Schedules a function to run once, after at least the given number of milliseconds.</p>" +
      "<p><b>Think of it as:</b> setting a kitchen timer for a minimum wait — the food isn't guaranteed to come out the SECOND the timer beeps if the chef is still finishing something else; the beep just means \"no earlier than this.\"</p>" +
      "<p><b>Why it exists:</b> to schedule deferred, one-time work — a delay before an action, a debounce timer, a fallback after a wait.</p>" +
      "<p><b>How it works:</b> <code>setTimeout(fn, delay)</code> queues <code>fn</code> as a macrotask once <code>delay</code> ms have elapsed. The delay is a <em>minimum</em>, not a guarantee — the callback still has to wait for the current call stack to clear and the entire microtask queue to drain first.</p>" +
      "<pre><code>const start = Date.now();\nsetTimeout(() => {\n  console.log('actual delay:', Date.now() - start);\n}, 100);\n\n// a long synchronous loop here would push the real delay well past 100ms</code></pre>" +
      "<p><b>What happens:</b> the timer fires internally at 100ms, queuing the callback as a macrotask — but the callback doesn't actually RUN until the current call stack is empty and every pending microtask has drained, which can push the observed delay noticeably past 100ms.</p>" +
      "<p><b>Result:</b> the logged \"actual delay\" is often slightly more than 100ms, and can be dramatically more if other synchronous work is blocking the thread at that moment.</p>" +
      "<p><b>Important rule:</b> <code>setTimeout(fn, 0)</code> does not mean \"run immediately\" — it means \"run as soon as possible <em>after</em> the current script and all pending microtasks finish,\" which is never truly zero delay.</p>" +
      "<p><b>Don't confuse it with:</b> a guarantee — the delay value is always a floor, never an exact promise of when the callback fires.</p>" +
      "<p><b>When to use:</b> deferring a one-time action, or yielding control back to the event loop between chunks of heavy work.</p>" +
      "<p><b>When not to use:</b> for repeating work — use <code>setInterval</code>, or better, a self-rescheduling <code>setTimeout</code> (see \"setInterval\").</p>" +
      "<p class='ex-gotcha'><code>setTimeout(fn, 0)</code> does not mean \"run immediately\" &mdash; it means \"run as soon as possible <em>after</em> the current script and all pending microtasks finish\", which is never truly zero delay.</p>",

    "setInterval":
      "<p><b>Simple meaning:</b> Like <code>setTimeout</code>, but repeats every <code>delay</code> ms until you stop it.</p>" +
      "<p><b>Think of it as:</b> an alarm that keeps going off on a fixed schedule — but if you're still dealing with the previous alarm when the next one is due, the system quietly skips the overlap rather than stacking up alarms.</p>" +
      "<p><b>Why it exists:</b> for recurring work on a fixed schedule — polling, animations, periodic checks.</p>" +
      "<p><b>How it works:</b> <code>setInterval(fn, delay)</code> queues <code>fn</code> as a macrotask repeatedly. Each firing still has to wait its turn behind the call stack and microtask queue, so if a tick's work regularly takes longer than <code>delay</code>, ticks can pile up or fire back-to-back once the stack finally clears.</p>" +
      "<pre><code>let count = 0;\nconst id = setInterval(() => {\n  console.log(++count);\n  if (count === 3) clearInterval(id); // must clear it, or it runs forever\n}, 100);</code></pre>" +
      "<p><b>What happens:</b> the callback fires roughly every 100ms, incrementing <code>count</code> each time. Once <code>count</code> reaches 3, <code>clearInterval(id)</code> explicitly stops further firings — without it, the timer would keep running indefinitely, even after the surrounding code has long finished.</p>" +
      "<p><b>Result:</b> exactly three logs, then silence — the interval is deliberately, explicitly stopped.</p>" +
      "<p><b>Important rule:</b> if the callback's own work regularly takes longer than the interval, ticks don't queue up infinitely waiting — browsers typically skip overlapping ticks, so the effective rate silently slows down.</p>" +
      "<p><b>Don't confuse it with:</b> a self-rescheduling <code>setTimeout</code> — a common, safer alternative that waits for one tick to fully finish before scheduling the next, avoiding any overlap entirely.</p>" +
      "<p><b>When to use:</b> simple, fixed-rate recurring work where occasional skipped ticks under load are acceptable.</p>" +
      "<p><b>When not to use:</b> for unpredictable-duration recurring work — prefer a self-rescheduling <code>setTimeout</code> instead, to guarantee no overlap.</p>" +
      "<p class='ex-gotcha'>If the callback's own work regularly takes longer than the interval, ticks don't queue up infinitely waiting &mdash; browsers typically skip overlapping ticks, so the effective rate silently slows down. A common fix is a self-rescheduling <code>setTimeout</code> instead, which waits for one tick to finish before scheduling the next.</p>",

    "queueMicrotask":
      "<p><b>Simple meaning:</b> A direct way to schedule a function as a microtask, without needing a promise as a vehicle for it.</p>" +
      "<p><b>Think of it as:</b> getting a VIP queue ticket directly at the counter, instead of having to first buy (and then immediately resolve) a fake promise just to get into that same VIP line.</p>" +
      "<p><b>Why it exists:</b> for when you want microtask-priority scheduling (runs before any macrotask) without the overhead or semantics of creating a promise object.</p>" +
      "<p><b>How it works:</b> <code>queueMicrotask(fn)</code> adds <code>fn</code> straight to the microtask queue — functionally equivalent to <code>Promise.resolve().then(fn)</code>, but without creating a promise object.</p>" +
      "<pre><code>console.log('1');\nqueueMicrotask(() => console.log('3'));\nconsole.log('2');\n// 1, 2, 3 — runs after current sync code, but before any setTimeout</code></pre>" +
      "<p><b>What happens:</b> the queued function is deferred, exactly like a promise callback would be — it waits for the synchronous script to finish first, then runs as part of the microtask drain, ahead of any macrotask.</p>" +
      "<p><b>Result:</b> <code>1, 2, 3</code> — the same ordering you'd get from <code>Promise.resolve().then(...)</code>, without ever creating an actual promise object.</p>" +
      "<p><b>Important rule:</b> every place you've used <code>Promise.resolve().then(fn)</code> purely for its timing (not its value) can usually be replaced with <code>queueMicrotask(fn)</code>.</p>" +
      "<p><b>Don't confuse it with:</b> a promise — it's simply a cleaner way to say \"run this as a microtask,\" not a full promise-producing API.</p>" +
      "<p><b>When to use:</b> when you specifically need microtask-priority timing but don't need or want an actual promise object.</p>" +
      "<p><b>When not to use:</b> when you actually need a promise's value-passing or chaining behavior — use a real promise for that.</p>" +
      "<p class='ex-gotcha'>It's easy to assume this is some exotic API, but it's simply a cleaner way to say \"run this as a microtask\" &mdash; every place you've used <code>Promise.resolve().then(fn)</code> purely for its timing (not its value) can usually be replaced with it.</p>",

    "Execution order":
      "<p><b>Simple meaning:</b> Working out exactly what logs when sync code, microtasks, and macrotasks are mixed together &mdash; the classic interview whiteboard question for this whole topic.</p>" +
      "<p><b>Think of it as:</b> a checklist you apply mechanically rather than trying to intuit — tag each line as sync/microtask/macrotask, then follow the fixed priority order every single time.</p>" +
      "<p><b>Why it exists as its own skill:</b> combining everything from this topic — call stack, macrotasks, microtasks — into one worked trace is exactly what real interview questions ask for.</p>" +
      "<p><b>How it works — the rule to apply, every time:</b> run all synchronous code first, then drain the microtask queue completely (including newly-added ones), then run exactly one macrotask, then repeat.</p>" +
      "<pre><code>console.log('A');\n\nsetTimeout(() => console.log('F — timeout'), 0);\n\nPromise.resolve().then(() => {\n  console.log('C — promise');\n  return Promise.resolve();\n}).then(() => console.log('E — promise chained'));\n\nconsole.log('B');\n\nqueueMicrotask(() => console.log('D — micro'));\n\n// actual order: A, B, C, D, E, F</code></pre>" +
      "<p><b>What happens:</b> <code>A</code> and <code>B</code> run first — the script is synchronous top to bottom. That leaves two microtasks queued, in the order each scheduling call was reached: the first <code>.then</code> was attached before <code>queueMicrotask</code>, so it drains first, giving <code>C</code>, then <code>D</code>. The first <code>.then</code>'s return value creates a NEW microtask for the second <code>.then</code>, appended to the end of the still-draining queue — so it runs after <code>D</code>, giving <code>E</code>. Only once the microtask queue is fully empty does the loop take the one macrotask, <code>F</code>.</p>" +
      "<p><b>Result:</b> <code>A, B, C, D, E, F</code> — verified against real execution, not guessed.</p>" +
      "<p><b>Important rule:</b> the safest way to answer these in an interview: list every scheduling call in the order it's <em>reached</em> during the synchronous pass, tag each as sync/microtask/macrotask, then apply \"sync → drain all microtasks in queued order → one macrotask.\"</p>" +
      "<p><b>Don't confuse it with:</b> guessing based on \"gut feel\" ordering — always trace mechanically; these questions are specifically designed to break naive intuition.</p>" +
      "<p><b>When to use:</b> any time you're asked to predict console output involving mixed sync/async code.</p>" +
      "<p><b>When not to use:</b> n/a — this is a diagnostic method, not something to avoid.</p>" +
      "<p class='ex-gotcha'>The safest way to answer these in an interview: list every scheduling call in the order it's <em>reached</em> during the synchronous pass, tag each as sync/microtask/macrotask, then apply \"sync → drain all microtasks in queued order → one macrotask\".</p>",

    "Event-loop starvation":
      "<p><b>Simple meaning:</b> When something keeps the event loop too busy to ever get to macrotasks (like rendering, timers, or I/O), those things starve &mdash; they never get their turn.</p>" +
      "<p><b>Think of it as:</b> either the waiter freezing mid-task and never coming back (a long synchronous block), or the VIP line somehow never emptying because every VIP served immediately invites another VIP in (a self-perpetuating microtask) — either way, the regular line waits forever.</p>" +
      "<p><b>Why it matters:</b> a frozen UI, or timers/network callbacks that silently never fire, are both real production bugs caused by exactly this.</p>" +
      "<p><b>How it works:</b> two distinct causes: (1) a long-running <b>synchronous</b> block of code holds the call stack and blocks everything, including microtasks and rendering, until it finishes; (2) a microtask that keeps scheduling <em>another</em> microtask never lets the queue fully drain, so the loop never reaches the macrotask step or a render.</p>" +
      "<pre><code>// Cause 1 — long synchronous work blocks EVERYTHING\nfunction blockFor(ms) {\n  const end = Date.now() + ms;\n  while (Date.now() < end) {} // nothing else can run — no timers, no clicks, no rendering\n}\n\n// Cause 2 — a self-perpetuating microtask starves macrotasks\nfunction loopForever() {\n  Promise.resolve().then(loopForever); // queue never empties\n}\n// setTimeout callbacks queued elsewhere will NEVER run</code></pre>" +
      "<p><b>What happens:</b> <code>blockFor</code> occupies the call stack with a busy-wait loop — nothing else, including rendering, can happen until it returns. <code>loopForever</code> never lets the microtask queue actually reach empty, since each microtask immediately schedules another before finishing — so the loop can never advance to the macrotask step at all.</p>" +
      "<p><b>Result:</b> in cause 1, the page visibly freezes for the loop's duration. In cause 2, any pending <code>setTimeout</code> callbacks queued elsewhere simply never fire — permanently, not just delayed.</p>" +
      "<p><b>Important rule:</b> a common real-world version of cause 1 is a heavy synchronous computation (parsing huge JSON, a big loop) run directly on the main thread — fix by chunking with <code>setTimeout</code>/<code>requestIdleCallback</code>, or moving it to a Web Worker.</p>" +
      "<p><b>Don't confuse it with:</b> ordinary async delay — starvation means something never runs, not just runs a bit later than expected.</p>" +
      "<p><b>When to use:</b> recognize this pattern when diagnosing a frozen UI or timers/callbacks that mysteriously never fire.</p>" +
      "<p><b>When not to use:</b> n/a — this is a bug pattern to avoid, not a technique.</p>" +
      "<p class='ex-gotcha'>A common real-world version of cause 1 is a heavy synchronous computation (parsing huge JSON, a big loop) run directly on the main thread &mdash; the UI visibly freezes because rendering is also blocked behind it. Fixes: break work into chunks with <code>setTimeout</code>/<code>requestIdleCallback</code>, or move it to a Web Worker.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Error handling": {
    "try/catch":
      "<p><b>Simple meaning:</b> <code>try</code>/<code>catch</code> lets you run risky code, and if it throws, recover instead of crashing.</p>" +
      "<p><b>Think of it as:</b> a safety net under a tightrope walker — if they slip (an error is thrown), the net catches them instead of letting the fall (crash) continue all the way to the ground.</p>" +
      "<p><b>Why it exists:</b> to handle expected failure points (parsing untrusted input, a risky calculation) without letting one error take down the whole program.</p>" +
      "<p><b>How it works:</b> code in the <code>try</code> block runs normally; if any statement inside it throws, execution jumps immediately to the <code>catch</code> block with the thrown value, skipping the rest of <code>try</code>. An optional <code>finally</code> block always runs afterward, regardless of outcome.</p>" +
      "<pre><code>try {\n  JSON.parse(\"not valid json\");\n  console.log(\"never runs\");\n} catch (err) {\n  console.log(\"parse failed:\", err.message);\n}\nconsole.log(\"program continues\");</code></pre>" +
      "<p><b>What happens:</b> <code>JSON.parse</code> throws on invalid input, immediately jumping to the <code>catch</code> block — the line right after it inside <code>try</code> never runs at all. After <code>catch</code> finishes, execution resumes normally past the whole <code>try</code>/<code>catch</code>.</p>" +
      "<p><b>Result:</b> the error message logs, then the program continues — the crash is contained to just this one operation.</p>" +
      "<p><b>Important rule:</b> <code>try</code>/<code>catch</code> only catches <b>synchronous</b> errors thrown directly inside its block (or from an <code>await</code>ed promise inside it) — it does NOT catch an error thrown inside a <code>setTimeout</code> callback or an un-awaited promise.</p>" +
      "<p><b>Don't confuse it with:</b> a general safety net for async code — see \"Asynchronous errors\" for exactly where this breaks down.</p>" +
      "<p><b>When to use:</b> around risky operations you can meaningfully recover from — parsing untrusted input, a calculation that might throw.</p>" +
      "<p><b>When not to use:</b> don't wrap code in <code>try</code>/<code>catch</code> \"just in case\" everywhere — catching errors you can't meaningfully handle just hides real bugs.</p>" +
      "<p class='ex-gotcha'><code>try</code>/<code>catch</code> only catches <b>synchronous</b> errors thrown directly inside its block (or from an <code>await</code>ed promise inside it). It does <em>not</em> catch an error thrown inside a <code>setTimeout</code> callback or from a promise you didn't <code>await</code> &mdash; by the time that code runs, the <code>try</code> block has already finished.</p>",

    "throw":
      "<p><b>Simple meaning:</b> <code>throw</code> immediately stops normal execution and hands a value up to the nearest <code>catch</code>.</p>" +
      "<p><b>Think of it as:</b> pulling a fire alarm — it interrupts whatever's happening right now and immediately hands control to whoever's designated to respond (the nearest <code>catch</code>), skipping everything in between.</p>" +
      "<p><b>Why it exists:</b> to signal that something has gone wrong in a way the calling code needs to know about and can't just silently ignore.</p>" +
      "<p><b>How it works:</b> <code>throw</code> can raise any value — a string, a number, an object — but the value that unwinds the stack is exactly whatever you give it. If nothing catches it, the program (or that call stack) terminates with an uncaught exception.</p>" +
      "<pre><code>function withdraw(balance, amount) {\n  if (amount > balance) throw new Error(\"Insufficient funds\");\n  return balance - amount;\n}\ntry {\n  withdraw(100, 500);\n} catch (err) {\n  console.log(err.message); // 'Insufficient funds'\n}</code></pre>" +
      "<p><b>What happens:</b> <code>withdraw</code> checks its precondition and throws immediately when violated — <code>balance - amount</code> never even executes. The <code>throw</code> jumps straight past the rest of <code>withdraw</code>'s body and out to the nearest enclosing <code>catch</code>.</p>" +
      "<p><b>Result:</b> the calling code's <code>catch</code> receives the thrown <code>Error</code> object and reads its <code>.message</code> — the function never returns a value at all in this path.</p>" +
      "<p><b>Important rule:</b> you <em>can</em> <code>throw \"just a string\"</code>, but you should always throw an actual <code>Error</code> (or subclass) — only <code>Error</code> objects capture a <code>.stack</code> trace, essential for debugging where the throw actually happened.</p>" +
      "<p><b>Don't confuse it with:</b> <code>return</code> — a thrown value skips all remaining code up to the nearest <code>catch</code>, unwinding potentially several function calls; a <code>return</code> only exits the current function.</p>" +
      "<p><b>When to use:</b> signaling a genuine failure the caller needs to know about and handle.</p>" +
      "<p><b>When not to use:</b> for expected, normal control flow — reserve throwing for genuine error conditions, not routine branching.</p>" +
      "<p class='ex-gotcha'>You <em>can</em> <code>throw \"just a string\"</code>, but you should always throw an actual <code>Error</code> (or subclass) &mdash; only <code>Error</code> objects capture a <code>.stack</code> trace, which is essential for debugging where the throw actually happened.</p>",

    "Custom errors":
      "<p><b>Simple meaning:</b> Extending the built-in <code>Error</code> class lets you create your own named error types, so calling code can tell different failures apart.</p>" +
      "<p><b>Think of it as:</b> giving errors their own species names instead of calling every single problem just \"an error\" — a <code>ValidationError</code> and a <code>NetworkError</code> can be told apart and handled completely differently.</p>" +
      "<p><b>Why it exists:</b> it lets code distinguish <code>catch</code> logic by error <em>type</em> (\"was this a validation problem or a network problem?\") instead of fragile string-parsing of the message.</p>" +
      "<p><b>How it works:</b> a custom error class extends <code>Error</code>, calls <code>super(message)</code> to set up the message and stack trace, and typically sets <code>this.name</code> to the class name (since the default <code>name</code> is inherited as <code>\"Error\"</code> otherwise).</p>" +
      "<pre><code>class ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = \"ValidationError\"; // otherwise it would say 'Error'\n    this.field = field;\n  }\n}\n\ntry {\n  throw new ValidationError(\"Email is required\", \"email\");\n} catch (err) {\n  if (err instanceof ValidationError) {\n    console.log(err.name, err.message, err.field);\n    // ValidationError Email is required email\n  }\n}</code></pre>" +
      "<p><b>What happens:</b> <code>super(message)</code> runs the base <code>Error</code> constructor, correctly setting up <code>.message</code> and <code>.stack</code>. The explicit <code>this.name = \"ValidationError\"</code> line overrides the inherited default name. <code>instanceof ValidationError</code> works because <code>extends</code> wires up the prototype chain properly.</p>" +
      "<p><b>Result:</b> a caught error that's fully distinguishable by type (via <code>instanceof</code>) AND carries a custom extra field (<code>field</code>) the base <code>Error</code> class never had.</p>" +
      "<p><b>Important rule:</b> forgetting <code>this.name = \"ValidationError\"</code> is a common miss — without it, <code>err.name</code> still reports the generic <code>\"Error\"</code>, even though <code>instanceof</code> still works correctly.</p>" +
      "<p><b>Don't confuse it with:</b> distinguishing errors by message text — fragile and easily broken by a wording change; <code>instanceof</code> checks against the class itself instead.</p>" +
      "<p><b>When to use:</b> when calling code needs to react differently depending on the kind of failure — separate branches for validation vs. network vs. auth errors.</p>" +
      "<p><b>When not to use:</b> for a one-off error that will only ever be caught generically — the built-in <code>Error</code> is simpler.</p>" +
      "<p class='ex-gotcha'>Forgetting <code>this.name = \"ValidationError\"</code> is a common miss &mdash; without it, <code>err.name</code> still reports the generic <code>\"Error\"</code>, and <code>err.toString()</code> prints <code>\"Error: ...\"</code> instead of <code>\"ValidationError: ...\"</code>, even though <code>instanceof</code> still works correctly either way.</p>",

    "Error objects":
      "<p><b>Simple meaning:</b> The built-in <code>Error</code> object bundles a human-readable message with a stack trace showing where it was created.</p>" +
      "<p><b>Think of it as:</b> a police report — not just \"something went wrong\" but a message describing what, plus a paper trail (the stack trace) of exactly how you got there.</p>" +
      "<p><b>Why it exists:</b> without a standard error shape, every thrown value would need custom handling logic just to extract basic information about what failed.</p>" +
      "<p><b>How it works:</b> <code>new Error(message)</code> creates an object with a <code>.message</code>, a <code>.name</code> (<code>\"Error\"</code> by default), and a <code>.stack</code> string. Built-in subtypes like <code>TypeError</code>, <code>RangeError</code>, and <code>ReferenceError</code> are thrown automatically by the engine for their matching mistakes.</p>" +
      "<pre><code>null.foo;        // TypeError: Cannot read properties of null\nundefinedVar;    // ReferenceError: undefinedVar is not defined\nnew Array(-1);   // RangeError: Invalid array length</code></pre>" +
      "<p><b>What happens:</b> each line triggers a mistake the engine recognizes as a specific, named category — reading a property of <code>null</code> is a type mismatch, referencing an undeclared name is a reference problem, and an invalid array length is out of a valid range. The engine automatically constructs and throws the matching Error subtype.</p>" +
      "<p><b>Result:</b> three different error types thrown automatically, each named to hint at the category of mistake, without any code explicitly writing <code>throw new TypeError(...)</code> anywhere.</p>" +
      "<p><b>Important rule:</b> <code>error.stack</code> is only populated correctly if the object was created with <code>new Error(...)</code> (or a subclass) — a thrown plain object or string has no stack trace at all.</p>" +
      "<p><b>Don't confuse it with:</b> a custom error class — this entry is about the base built-in shape; \"Custom errors\" builds a named subclass on top of it.</p>" +
      "<p><b>When to use:</b> understanding this explains what specific error type an unfamiliar runtime error message actually represents.</p>" +
      "<p><b>When not to use:</b> n/a — the engine throws these automatically; you don't opt into them.</p>" +
      "<p class='ex-gotcha'><code>error.stack</code> is only populated correctly if the object was created with <code>new Error(...)</code> (or a subclass) &mdash; a thrown plain object or string has no stack trace, making the failure much harder to locate later.</p>",

    "Error propagation":
      "<p><b>Simple meaning:</b> An uncaught error doesn't just stop where it happened &mdash; it keeps bubbling up through each calling function until something catches it, or nothing does.</p>" +
      "<p><b>Think of it as:</b> a dropped ball rolling downhill through a series of rooms — it doesn't stop at the first doorway; it keeps rolling through room after room until it finally hits a wall (a <code>catch</code>) that stops it.</p>" +
      "<p><b>Why it exists:</b> this mirrors how function calls naturally nest — an error needs some way to travel back up through however many layers of calls are currently active.</p>" +
      "<p><b>How it works:</b> when a function throws and doesn't catch it itself, the exception unwinds the call stack one frame at a time, skipping the remaining code in each function, until a <code>try</code>/<code>catch</code> is found (or the stack empties and the program crashes).</p>" +
      "<pre><code>function c() { throw new Error(\"deep failure\"); }\nfunction b() { c(); console.log(\"never runs\"); }\nfunction a() {\n  try {\n    b();\n  } catch (err) {\n    console.log(\"caught in a:\", err.message);\n  }\n}\na(); // 'caught in a: deep failure' — b and c never handled it themselves</code></pre>" +
      "<p><b>What happens:</b> <code>c</code> throws, immediately unwinding out of <code>c</code>'s frame — <code>b</code> never resumes after its call to <code>c</code>, so <code>\"never runs\"</code> genuinely never runs. The error keeps bubbling until it reaches the <code>try</code>/<code>catch</code> in <code>a</code>, the first (and only) place actively watching for it.</p>" +
      "<p><b>Result:</b> only <code>a</code>'s catch handler ever runs — neither <code>b</code> nor <code>c</code> needed their own error handling for this to work correctly.</p>" +
      "<p><b>Important rule:</b> you don't need a <code>try</code>/<code>catch</code> in every function along the way — one <code>catch</code> higher up the call chain is often the right amount, exactly like one <code>.catch()</code> at the end of a promise chain covers every step before it.</p>" +
      "<p><b>Don't confuse it with:</b> silent failure — propagation doesn't mean the error disappears; it means it keeps looking for a handler until it finds one or crashes the program.</p>" +
      "<p><b>When to use:</b> understanding this justifies placing a single <code>try</code>/<code>catch</code> at a sensible boundary rather than wrapping every individual function call.</p>" +
      "<p><b>When not to use:</b> n/a — propagation is automatic; the design choice is only where you place your <code>catch</code>.</p>" +
      "<p class='ex-gotcha'>You don't need a <code>try</code>/<code>catch</code> in every function along the way &mdash; one <code>catch</code> higher up the call chain is often the right amount, exactly like how one <code>.catch()</code> at the end of a promise chain covers every step before it.</p>",

    "Synchronous errors":
      "<p><b>Simple meaning:</b> Errors thrown by code that runs immediately, in order &mdash; the kind a normal <code>try</code>/<code>catch</code> is built to handle.</p>" +
      "<p><b>Think of it as:</b> tripping while walking down a hallway — you fall right there, in that exact spot, in the moment it happens; there's no delay between the misstep and the fall.</p>" +
      "<p><b>Why it exists as a category:</b> it's the baseline, well-behaved case that sets up the contrast for the next entry — where the same familiar pattern quietly stops working.</p>" +
      "<p><b>How it works:</b> a synchronous error is thrown during the same call-stack execution that reached the <code>throw</code> — it happens \"right now,\" so a <code>try</code>/<code>catch</code> physically wrapping that code will always see it.</p>" +
      "<pre><code>try {\n  JSON.parse(\"{ bad json\");\n} catch (err) {\n  console.log(\"caught:\", err.message); // works — this IS synchronous\n}</code></pre>" +
      "<p><b>What happens:</b> <code>JSON.parse</code> throws immediately, on the same line, within the same call-stack execution as the surrounding <code>try</code> block — there's no gap in time for the <code>try</code>/<code>catch</code> to have already \"finished\" by the time the throw happens.</p>" +
      "<p><b>Result:</b> the <code>catch</code> block runs reliably, exactly as expected — the standard, unsurprising case.</p>" +
      "<p><b>Important rule:</b> this works exactly how you'd expect — the contrast worth remembering is the next entry, \"Asynchronous errors,\" where the same pattern silently fails to catch anything.</p>" +
      "<p><b>Don't confuse it with:</b> asynchronous errors — same <code>try</code>/<code>catch</code> syntax, completely different (and unreliable) outcome once timing enters the picture.</p>" +
      "<p><b>When to use:</b> the default, reliable case — most direct function calls that might throw fall into this category.</p>" +
      "<p><b>When not to use:</b> n/a — this is simply the baseline behavior of synchronous code.</p>" +
      "<p class='ex-gotcha'>This is the baseline case that works exactly how you'd expect &mdash; the contrast worth remembering is the next entry, \"Asynchronous errors\", where the same <code>try</code>/<code>catch</code> pattern silently fails to catch anything.</p>",

    "Asynchronous errors":
      "<p><b>Simple meaning:</b> An error thrown inside a callback that runs <em>later</em> (a timer, an event, an un-awaited promise) is not caught by a <code>try</code>/<code>catch</code> wrapped around the code that scheduled it.</p>" +
      "<p><b>Think of it as:</b> leaving a note for someone to open in a week, and expecting your current conversation's listener to somehow hear whatever's written on it — by the time it's actually \"read,\" everyone who could have reacted has long since left the room.</p>" +
      "<p><b>Why it happens:</b> by the time an asynchronous callback actually runs, the synchronous <code>try</code>/<code>catch</code> block that set it up has already finished executing and been popped off the call stack — there's no longer any <code>catch</code> in scope to receive the throw.</p>" +
      "<p><b>How it works:</b> <code>setTimeout</code>, event handlers, and similar APIs schedule a callback to run in a completely separate, later execution — outside the original synchronous call that set them up.</p>" +
      "<pre><code>try {\n  setTimeout(() => {\n    throw new Error(\"boom\"); // NOT caught below\n  }, 100);\n} catch (err) {\n  console.log(\"never runs\");\n}\n// the error instead crashes as an uncaught exception, 100ms later</code></pre>" +
      "<p><b>What happens:</b> the <code>try</code> block finishes almost instantly — <code>setTimeout</code> just registers the callback and returns. By the time 100ms passes and the callback actually throws, the <code>try</code>/<code>catch</code> around it has long since completed and is no longer \"listening\" for anything.</p>" +
      "<p><b>Result:</b> the throw becomes an uncaught exception, 100ms later, completely bypassing the <code>catch</code> block that looked like it should have handled it.</p>" +
      "<p><b>Important rule:</b> the fix is to put the <code>try</code>/<code>catch</code> <em>inside</em> the callback itself: <code>setTimeout(() => { try { ... } catch (err) { ... } }, 100);</code> — now it actually works.</p>" +
      "<p><b>Don't confuse it with:</b> synchronous errors, the previous entry — same syntax, wildly different reliability once timing is involved.</p>" +
      "<p><b>When to use:</b> recognize this pattern whenever wrapping ANY function call that <em>schedules</em> async work — the wrapping alone doesn't protect the deferred code.</p>" +
      "<p><b>When not to use:</b> never rely on an outer <code>try</code>/<code>catch</code> to protect asynchronous callback bodies — always handle errors inside the callback itself.</p>" +
      "<p class='ex-gotcha'>This is one of the most common real-world mistakes with error handling &mdash; wrapping a function call that <em>schedules</em> async work in <code>try</code>/<code>catch</code> gives a false sense of safety for anything that actually goes wrong inside the callback later.</p>",

    "Promise rejection":
      "<p><b>Simple meaning:</b> A promise's version of <code>throw</code> &mdash; instead of crashing immediately, a rejected promise carries its error along until something handles it with <code>.catch</code> or a <code>try</code>/<code>catch</code> around an <code>await</code>.</p>" +
      "<p><b>Think of it as:</b> a sealed envelope marked \"failure\" that travels through the mail system until someone actually opens it — it doesn't explode in transit, it just sits there as a labeled failure result waiting to be handled.</p>" +
      "<p><b>Why it exists:</b> this is exactly what makes <code>await</code> + <code>try</code>/<code>catch</code> work for async code — without it, async failures would have no unified way to reach error-handling code.</p>" +
      "<p><b>How it works:</b> a throw inside a <code>.then</code> callback, or inside an <code>async</code> function, is automatically converted into a rejected promise rather than crashing synchronously.</p>" +
      "<pre><code>async function risky() {\n  throw new Error(\"async boom\"); // becomes a rejected promise\n}\n\nrisky().catch(err => console.log(\"caught:\", err.message));\n\ntry {\n  await risky();\n} catch (err) {\n  console.log(\"caught:\", err.message);\n}</code></pre>" +
      "<p><b>What happens:</b> the <code>throw</code> inside <code>risky</code> doesn't crash the program synchronously — because <code>risky</code> is an <code>async</code> function, the throw is automatically packaged into a rejected promise instead. Both <code>.catch()</code> and <code>await</code>-inside-<code>try</code> are able to intercept that rejection.</p>" +
      "<p><b>Result:</b> <code>\"caught: async boom\"</code> logs from both handling styles — proof the throw genuinely became a rejection, not a synchronous crash.</p>" +
      "<p><b>Important rule:</b> a promise that rejects with <em>nothing</em> attached to handle it — no <code>.catch</code>, never awaited in a <code>try</code> — becomes an <b>unhandled rejection</b>, reported separately rather than thrown synchronously where you'd see it.</p>" +
      "<p><b>Don't confuse it with:</b> a synchronous throw — the mechanism is intentionally similar in spirit, but the delivery is entirely different (a promise value, not an immediate stack unwind).</p>" +
      "<p><b>When to use:</b> understanding this explains why <code>async</code> functions can be safely used with either <code>.catch()</code> or <code>try</code>/<code>catch</code>+<code>await</code>.</p>" +
      "<p><b>When not to use:</b> n/a — this conversion from throw to rejection is automatic inside async functions.</p>" +
      "<p class='ex-gotcha'>A promise that rejects with <em>nothing</em> attached to handle it &mdash; no <code>.catch</code>, never awaited in a <code>try</code> &mdash; becomes an <b>unhandled rejection</b>. It doesn't throw synchronously where you can see it; it's reported separately (a console warning in browsers, and can crash a Node process depending on version/config).</p>",

    "Global error handling concepts":
      "<p><b>Simple meaning:</b> A last-resort, catch-everything net for errors that slipped past every local <code>try</code>/<code>catch</code> &mdash; useful for logging, not for normal control flow.</p>" +
      "<p><b>Think of it as:</b> a building's fire alarm system — it doesn't put out fires (recover from them), it just makes sure someone finds out a fire happened somewhere, so it can be investigated afterward.</p>" +
      "<p><b>Why it exists:</b> to log/report errors that would otherwise disappear silently (or crash the process) with no record of what happened — e.g. sending them to an error-tracking service.</p>" +
      "<p><b>How it works:</b> browsers expose <code>window.addEventListener('error', ...)</code> for uncaught synchronous errors and <code>window.addEventListener('unhandledrejection', ...)</code> for unhandled promise rejections. Node exposes the equivalent as <code>process.on('uncaughtException', ...)</code> and <code>process.on('unhandledRejection', ...)</code>.</p>" +
      "<pre><code>window.addEventListener('unhandledrejection', (event) => {\n  console.log('Unhandled:', event.reason);\n  // report to a monitoring service\n});</code></pre>" +
      "<p><b>What happens:</b> this listener fires only after a promise rejection has already gone completely unhandled everywhere else — it's the runtime's final notification before that rejection would otherwise be silently lost.</p>" +
      "<p><b>Result:</b> the failure gets logged/reported somewhere visible, even though the specific operation that failed has already failed uncontrolled by this point.</p>" +
      "<p><b>Important rule:</b> these global handlers are a safety net for <em>observability</em>, not a substitute for real error handling — by the time one fires, you generally can't recover gracefully, only log (and in Node, often still need to exit the process safely).</p>" +
      "<p><b>Don't confuse it with:</b> a recovery mechanism — nothing about handling an error here undoes the failed operation; the user-facing consequence of that failure already happened.</p>" +
      "<p><b>When to use:</b> as a last-resort logging/reporting layer for genuinely unexpected failures, alongside — never instead of — real error handling closer to each operation.</p>" +
      "<p><b>When not to use:</b> as your primary error-handling strategy — handle errors close to where they happen; use this only to catch what slips through.</p>" +
      "<p class='ex-gotcha'>These global handlers are a safety net for <em>observability</em>, not a substitute for real error handling &mdash; by the time one fires, the specific operation has already failed uncontrolled; you generally can't recover gracefully from here, only log and (in Node) often still need to exit the process safely.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Objects & immutability": {
    "Objects & immutability overview":
      "<p><b>Simple meaning:</b> Objects group related values under named keys; immutability means creating an updated object instead of changing the existing one.</p>" +
      "<p><b>Think of it as:</b> the difference between erasing and rewriting a shared whiteboard (mutation — everyone sees the change instantly, whether they wanted to or not) versus photocopying it, marking up the copy, and handing that out instead (immutability — the original stays untouched for anyone still holding it).</p>" +
      "<p><b>Why it exists:</b> named properties model records — users, settings, API data — far more clearly than positional arrays. Immutable updates specifically exist to keep state changes predictable, especially in React and reducers.</p>" +
      "<p><b>How it works:</b> object variables hold references, not values — assigning or passing an object shares that same reference, so a mutation is visible through every variable pointing at it. An immutable update instead creates a new outer object, copying only the path that actually changed and reusing the untouched branches.</p>" +
      "<pre><code>const user = { name: 'Ada', settings: { theme: 'light' } };\nconst updated = {\n  ...user,\n  settings: { ...user.settings, theme: 'dark' }\n};\n\nconsole.log(user.settings.theme);    // 'light' — original untouched\nconsole.log(updated.settings.theme); // 'dark'  — new object, changed value</code></pre>" +
      "<p><b>What happens:</b> the outer spread copies <code>user</code>'s top level; the inner spread separately copies <code>user.settings</code>'s level too, before overriding <code>theme</code>. Because <em>both</em> levels were explicitly copied, <code>user</code> and <code>updated</code> share nothing — changing one never touches the other.</p>" +
      "<p><b>Result:</b> two fully independent objects — this only worked because the nested level was spread too; a single top-level spread alone would NOT have been enough (see \"Shallow copy\").</p>" +
      "<p><b>Important rule:</b> object spread is only a <b>shallow</b> copy — for a nested update, you must copy every level on the path you're changing, or the old and new objects still share that nested reference.</p>" +
      "<p><b>When to use:</b> objects for structured data with named fields; spread or targeted copies whenever an update must preserve the original value.</p>" +
      "<p><b>When not to use:</b> don't deep-clone an entire object graph when only one small path actually changes — copy just that path instead.</p>" +
      "<p class='ex-gotcha'>Object spread is only a <b>shallow</b> copy. For a nested update, copy every level on the path you change; otherwise the old and new objects still share the same nested reference.</p>",

    "Object destructuring":
      "<p><b>Simple meaning:</b> Pulls named properties out of an object into their own variables, in one step.</p>" +
      "<p><b>Think of it as:</b> writing a shopping list of exact labels you want pulled from a labeled box, instead of reaching in and grabbing one item at a time by hand.</p>" +
      "<p><b>Why it exists:</b> it removes repetitive <code>const x = obj.x;</code> lines and documents exactly which fields a function needs, right in its parameter list.</p>" +
      "<p><b>How it works:</b> a destructuring pattern reads matching keys from the source object by <b>name</b> (not position), with optional renaming (<code>: newName</code>) and defaults (<code>= value</code>).</p>" +
      "<pre><code>const user = { name: 'Ada', age: 36 };\nconst { name, age = 18 } = user;   // name='Ada', age=36 (already present, default skipped)\nconst { name: userName } = user;   // rename → userName='Ada'\n\nfunction greet({ name }) { return 'Hi, ' + name; } // straight in the parameter list</code></pre>" +
      "<p><b>What happens:</b> each pattern reads the matching key by name from <code>user</code>, regardless of what order the keys appear in the object — <code>age</code>'s default of <code>18</code> never triggers here, because <code>age</code> is genuinely present.</p>" +
      "<p><b>Result:</b> new independent local variables — the original <code>user</code> object is never read-modified by any of these patterns.</p>" +
      "<p><b>Important rule:</b> object destructuring matches by <b>key name</b>, so order in the pattern is irrelevant — unlike array destructuring, which matches strictly by position.</p>" +
      "<p><b>Don't confuse it with:</b> array destructuring's position-based matching — mixing the two mental models is a common early bug.</p>" +
      "<p><b>When to use:</b> extracting several named fields at once, especially in function parameters where it self-documents exactly what's needed.</p>" +
      "<p><b>When not to use:</b> avoid deeply nested destructuring where a missing intermediate value would throw — extract and validate the data in smaller steps instead.</p>" +
      "<p class='ex-gotcha'>Object destructuring matches by <b>key name</b>, so order doesn't matter — unlike array destructuring, which matches by position. Mixing the two mental models up is a common early bug.</p>",

    "Object spread":
      "<p><b>Simple meaning:</b> <code>{ ...obj }</code> copies an object's own properties into a new object literal.</p>" +
      "<p><b>Think of it as:</b> tipping the contents of one labeled box into a new box — the new box is genuinely separate, but if any item inside was itself another box, that inner box is still the same physical object in both.</p>" +
      "<p><b>Why it exists:</b> for concise, non-mutating updates, copies, and merges of plain object data — replacing older, clunkier patterns like <code>Object.assign({}, obj)</code>.</p>" +
      "<p><b>How it works:</b> spread inside an object literal enumerates the source's own enumerable properties and copies them into the new object, in order — later keys (including ones written after the spread) override earlier ones with the same name.</p>" +
      "<pre><code>const user = { name: 'Ada', role: 'admin' };\nconst updated = { ...user, role: 'editor' }; // { name: 'Ada', role: 'editor' }\nconst copy = { ...user };                    // a shallow copy, untouched original</code></pre>" +
      "<p><b>What happens:</b> <code>{ ...user, role: 'editor' }</code> first copies every property from <code>user</code>, then the literal <code>role: 'editor'</code> written after it overrides the copied <code>role</code> value, since it comes later in the object literal.</p>" +
      "<p><b>Result:</b> a brand-new object with the override applied — <code>user</code> itself is completely untouched throughout.</p>" +
      "<p><b>Important rule:</b> spread only makes a <b>shallow</b> copy — nested objects are still shared by reference between the original and the copy (see \"Shallow copy\").</p>" +
      "<p><b>Don't confuse it with:</b> <code>Object.assign(target, ...)</code> — same job, but <code>Object.assign</code> mutates its first argument unless you pass a fresh <code>{}</code>, while spread always creates a new object by construction.</p>" +
      "<p><b>When to use:</b> non-mutating updates, copies, and merges of plain object data.</p>" +
      "<p><b>When not to use:</b> don't treat spread as a deep clone, and don't use it when you specifically need to preserve property descriptors, prototype links, or getters — spread flattens all of those into plain values.</p>" +
      "<p class='ex-gotcha'>Spread only makes a <b>shallow</b> copy — nested objects are still shared by reference between the original and the copy. See \"Shallow copy\" for the consequences.</p>",

    "Object rest":
      "<p><b>Simple meaning:</b> In a destructuring pattern, <code>...rest</code> collects every property that wasn't explicitly pulled out into a new object.</p>" +
      "<p><b>Think of it as:</b> sorting mail into \"this one specific letter\" and \"everything else, in one pile\" — the rest pattern is that catch-all pile, automatically gathered.</p>" +
      "<p><b>Why it exists:</b> it's a clear, declarative way to omit a sensitive or already-handled field while keeping the rest of a record intact, without manually deleting keys.</p>" +
      "<p><b>How it works:</b> when used at the end of an object destructuring pattern, <code>...name</code> gathers the source's remaining own enumerable properties into a fresh object — everything NOT already named earlier in the pattern.</p>" +
      "<pre><code>const user = { id: 1, name: 'Ada', password: 'secret' };\nconst { password, ...safeUser } = user;\nconsole.log(safeUser); // { id: 1, name: 'Ada' } — password removed\nconsole.log(user);      // unchanged — original object still has password</code></pre>" +
      "<p><b>What happens:</b> <code>password</code> is pulled out by name into its own variable; <code>...safeUser</code> collects everything else — <code>id</code> and <code>name</code> — into a brand-new object, leaving the original <code>user</code> completely untouched.</p>" +
      "<p><b>Result:</b> a new object, <code>safeUser</code>, with exactly one field excluded — a common pattern for stripping sensitive fields before sending data onward (e.g. to a client).</p>" +
      "<p><b>Important rule:</b> object rest must come <b>last</b> in the pattern, just like array rest — <code>{ ...rest, name }</code> is a SyntaxError.</p>" +
      "<p><b>When to use:</b> omitting sensitive or already-handled fields while retaining the rest of a record.</p>" +
      "<p><b>When not to use:</b> when you need an explicit allow-list of fields instead — listing the permitted keys directly is safer than implicitly copying every unknown property forward.</p>" +
      "<p class='ex-gotcha'>Object rest must come <b>last</b> in the pattern, just like array rest — <code>{ ...rest, name }</code> is a SyntaxError.</p>",

    "Object.keys":
      "<p><b>Simple meaning:</b> Returns an array of an object's own property names.</p>" +
      "<p><b>Think of it as:</b> asking a filing cabinet drawer \"what are the labels on your own folders?\" — it answers with just the labels, ignoring both the folders' contents and any labels borrowed from a drawer behind it (the prototype).</p>" +
      "<p><b>Why it exists:</b> to let you iterate, count, validate, or transform an object's named fields using familiar array methods, which objects don't have natively.</p>" +
      "<p><b>How it works:</b> <code>Object.keys(obj)</code> returns an array of <code>obj</code>'s own <b>enumerable</b> string-keyed property names, in insertion order (with integer-like keys sorted first).</p>" +
      "<pre><code>const scores = { ada: 90, sam: 75 };\nconsole.log(Object.keys(scores)); // ['ada', 'sam']</code></pre>" +
      "<p><b>What happens:</b> the engine walks <code>scores</code>'s own properties, checking each for the enumerable flag, and collects the qualifying key names into a new array in insertion order.</p>" +
      "<p><b>Result:</b> a plain array of strings — you can now <code>.map</code>, <code>.filter</code>, or count these keys with ordinary array methods.</p>" +
      "<p><b>Important rule:</b> \"own\" and \"enumerable\" both matter — inherited properties (from the prototype chain) are never included, and neither are properties explicitly marked non-enumerable.</p>" +
      "<p><b>Don't confuse it with:</b> <code>for...in</code>, which walks the entire prototype chain, not just own properties.</p>" +
      "<p><b>When to use:</b> whenever you need just the field names for iteration, counting, or validation.</p>" +
      "<p><b>When not to use:</b> when you also need the values — <code>Object.entries</code> gets both without a second property lookup.</p>" +
      "<p class='ex-gotcha'>\"Own\" and \"enumerable\" both matter: inherited properties (from the prototype chain) are never included, and neither are properties explicitly marked non-enumerable (e.g. via <code>Object.defineProperty</code>).</p>",

    "Object.values":
      "<p><b>Simple meaning:</b> Returns an array of just an object's property values.</p>" +
      "<p><b>Think of it as:</b> asking the same filing cabinet drawer \"what's actually inside your own folders?\" — this time you get the contents, but not which folder each piece came from.</p>" +
      "<p><b>Why it exists:</b> to turn object data into a plain list for aggregation, validation, or display, when you don't care which field each value came from.</p>" +
      "<p><b>How it works:</b> <code>Object.values(obj)</code> is the value-counterpart of <code>Object.keys</code> — same rules (own, enumerable, insertion order), but returns the values instead of the key names.</p>" +
      "<pre><code>const scores = { ada: 90, sam: 75 };\nconsole.log(Object.values(scores));                    // [90, 75]\nconsole.log(Object.values(scores).reduce((a,b)=>a+b, 0)); // 165 — summed via array methods</code></pre>" +
      "<p><b>What happens:</b> the values are collected into an array in the same order their keys would appear via <code>Object.keys</code> — then <code>.reduce</code> works on that array exactly like it would on any other array of numbers.</p>" +
      "<p><b>Result:</b> a plain array of values — this is the usual bridge for using array methods (<code>reduce</code>, <code>map</code>, <code>filter</code>) on object data.</p>" +
      "<p><b>Important rule:</b> once a value leaves via <code>Object.values</code>, its connection to its original key is gone — if you need both together, use <code>Object.entries</code> instead.</p>" +
      "<p><b>When to use:</b> aggregation, validation, or display where each value's associated key doesn't matter.</p>" +
      "<p><b>When not to use:</b> when a value must stay associated with its key — use <code>Object.entries</code> instead.</p>" +
      "<p class='ex-gotcha'>This is the usual bridge for using array methods (<code>reduce</code>, <code>map</code>, <code>filter</code>) on object data, since objects don't have those methods themselves.</p>",

    "Object.entries":
      "<p><b>Simple meaning:</b> Returns an array of <code>[key, value]</code> pairs — everything <code>Object.keys</code> and <code>Object.values</code> give you, zipped together.</p>" +
      "<p><b>Think of it as:</b> asking the filing drawer for a list of \"label + contents\" pairs, one per folder — instead of two separate lists you'd have to line up yourself.</p>" +
      "<p><b>Why it exists:</b> it makes object data easy to loop over, filter, map, and rebuild — a full round trip through array methods, keeping key and value together at every step.</p>" +
      "<p><b>How it works:</b> <code>Object.entries(obj)</code> returns an array of two-element arrays, one per own enumerable property, each holding <code>[key, value]</code>.</p>" +
      "<pre><code>const scores = { ada: 90, sam: 75 };\nObject.entries(scores);\n// [['ada', 90], ['sam', 75]]\n\nconst boosted = Object.fromEntries(\n  Object.entries(scores).map(([k, v]) => [k, v + 5])\n); // { ada: 95, sam: 80 } — the inverse operation, back to an object</code></pre>" +
      "<p><b>What happens:</b> <code>Object.entries</code> converts the object into array-of-pairs form so <code>.map</code> can transform it normally — each pair is destructured into <code>[k, v]</code>, the value bumped, and a new pair returned. <code>Object.fromEntries</code> then converts the transformed pairs back into a plain object.</p>" +
      "<p><b>Result:</b> a brand-new object, <code>boosted</code> — the original <code>scores</code> is untouched throughout the entire round trip.</p>" +
      "<p><b>Important rule:</b> each entry is an array, so destructure it as <code>[key, value]</code> — accessing <code>entry.key</code> is a common but wrong assumption borrowed from other languages' map/dictionary APIs.</p>" +
      "<p><b>Don't confuse it with:</b> <code>Object.fromEntries</code> — its exact inverse, converting pairs back into an object.</p>" +
      "<p><b>When to use:</b> looping over an object while keeping keys and values paired, or performing a full transform-and-rebuild round trip.</p>" +
      "<p><b>When not to use:</b> on extremely hot paths where creating an intermediate array of every property is unnecessary overhead — a direct property access may be simpler.</p>" +
      "<p class='ex-gotcha'>Each entry is an array, so destructure it as <code>[key, value]</code> — accessing <code>entry.key</code> is a common but wrong assumption from developers used to other languages' map/dictionary APIs.</p>",

    "Object.assign":
      "<p><b>Simple meaning:</b> Copies properties from one or more source objects into a target object.</p>" +
      "<p><b>Think of it as:</b> stapling extra pages directly onto an existing folder — the folder you hand it (the first argument) is the one that physically gets modified, not a copy of it.</p>" +
      "<p><b>Why it exists:</b> it was the standard way to merge object properties before spread syntax existed, and it's still occasionally useful when code needs an explicit mutable target.</p>" +
      "<p><b>How it works:</b> <code>Object.assign(target, ...sources)</code> copies each source's own enumerable properties onto <code>target</code>, <b>mutating and returning it</b>, with later sources overwriting earlier ones for the same key.</p>" +
      "<pre><code>const defaults = { theme: 'light', notifications: true };\nconst userPrefs = { theme: 'dark' };\n\nObject.assign(defaults, userPrefs); // mutates defaults! usually NOT intended\nconsole.log(defaults); // { theme: 'dark', notifications: true } — defaults itself changed\n\nconst merged = Object.assign({}, defaults, userPrefs); // safe: fresh {} as target</code></pre>" +
      "<p><b>What happens:</b> the first call writes <code>userPrefs</code>'s properties directly onto <code>defaults</code> — <code>defaults</code> is not a template anymore, it's now been permanently altered. The second call passes a brand-new empty object as the target, so nothing pre-existing gets mutated.</p>" +
      "<p><b>Result:</b> the first call corrupts <code>defaults</code> for any future use; the second call produces a clean, independent merged object with no side effects.</p>" +
      "<p><b>Important rule:</b> the classic mistake is calling <code>Object.assign(defaults, userPrefs)</code> and forgetting it <b>mutates the first argument</b> — always pass a fresh <code>{}</code> as the target unless mutation is genuinely intended.</p>" +
      "<p><b>Don't confuse it with:</b> object spread (<code>{ ...a, ...b }</code>) — the modern, safer-by-default equivalent that can never accidentally mutate an existing object, since it always builds a new literal.</p>" +
      "<p><b>When to use:</b> when code needs an explicit target object, or must support older environments without spread support.</p>" +
      "<p><b>When not to use:</b> for ordinary immutable updates — it's too easy to mutate the wrong target; object spread is usually clearer and safer.</p>" +
      "<p class='ex-gotcha'>The classic mistake is calling <code>Object.assign(defaults, userPrefs)</code> and forgetting that it <b>mutates the first argument</b> — always pass a fresh <code>{}</code> as the target unless mutation is genuinely intended. Object spread (<code>{ ...a, ...b }</code>) is the modern, safer-by-default equivalent.</p>",

    "Object.freeze":
      "<p><b>Simple meaning:</b> Locks an object so its existing properties can't be changed, added, or removed.</p>" +
      "<p><b>Think of it as:</b> laminating a document — the text on the page you laminated can never be altered again, but if that page has a sticky note attached (a nested object), the note itself is not laminated and can still be scribbled on freely.</p>" +
      "<p><b>Why it exists:</b> to protect fixed configuration or constants from accidental top-level changes elsewhere in a large codebase.</p>" +
      "<p><b>How it works:</b> <code>Object.freeze(obj)</code> makes every existing own property non-writable and non-configurable, and prevents new properties from being added. It returns the <em>same</em> object (not a copy), now frozen — mutations fail silently in sloppy mode and throw a <code>TypeError</code> in strict mode/modules.</p>" +
      "<pre><code>const config = Object.freeze({ apiUrl: 'https://api.example.com', nested: { y: 1 } });\nconfig.apiUrl = 'https://evil.com'; // silently ignored (or throws in strict mode)\nconfig.nested.y = 2;                // succeeds! nested was never frozen\nconsole.log(config.apiUrl, config.nested.y); // 'https://api.example.com' 2</code></pre>" +
      "<p><b>What happens:</b> the top-level <code>apiUrl</code> assignment is blocked, because <code>Object.freeze</code> locked that property directly. But <code>config.nested</code> is itself just a regular, unfrozen object — freezing <code>config</code> did nothing to protect what's <em>inside</em> it.</p>" +
      "<p><b>Result:</b> <code>apiUrl</code> stays unchanged; <code>nested.y</code> successfully changes to <code>2</code> — proving the freeze only reached the first level.</p>" +
      "<p><b>Important rule:</b> <code>Object.freeze</code> is <b>shallow</b> — it only locks the object's own top-level properties; anything nested is completely unprotected.</p>" +
      "<p><b>Don't confuse it with:</b> a deep-freeze utility (not a native JS built-in) — you'd need to recursively call <code>Object.freeze</code> on every nested object yourself to achieve true deep immutability.</p>" +
      "<p><b>When to use:</b> protecting fixed configuration or constants from accidental top-level mutation.</p>" +
      "<p><b>When not to use:</b> as complete immutability for nested state, or anywhere intentional updates are part of normal program flow.</p>" +
      "<p class='ex-gotcha'><code>Object.freeze</code> is <b>shallow</b> — it only locks the object's own top-level properties. A nested object inside a frozen object is completely unprotected and can still be mutated freely: <code>frozen.nested.x = 1</code> works fine even though <code>frozen.x = 1</code> does not.</p>",

    "Shallow copy":
      "<p><b>Simple meaning:</b> A shallow copy duplicates the outer object, but any nested objects inside it are still the exact same shared objects as before.</p>" +
      "<p><b>Think of it as:</b> photocopying a folder's cover sheet, but the physical documents inside stay the exact same papers, shared between both folders — flip through either folder's contents and you're touching identical, shared pages.</p>" +
      "<p><b>Why it exists:</b> it's the fast, inexpensive default for top-level updates where nested data isn't being changed — full deep copying is usually unnecessary overhead.</p>" +
      "<p><b>How it works:</b> spread (<code>{ ...obj }</code>), <code>Object.assign({}, obj)</code>, and similar operations all copy only the top level — for any property whose value is itself an object, both the original and the copy hold a reference to that <em>same</em> nested object.</p>" +
      "<pre><code>const original = { name: 'Ada', address: { city: 'London' } };\nconst copy = { ...original };\n\ncopy.name = 'Sam';               // safe — top-level primitive, truly separate\ncopy.address.city = 'Paris';     // NOT safe — same nested object\n\nconsole.log(original.name);         // 'Ada' — unaffected\nconsole.log(original.address.city); // 'Paris' — changed too!</code></pre>" +
      "<p><b>What happens:</b> <code>copy.name</code> is a genuinely separate primitive value, so reassigning it never touches <code>original</code>. But <code>copy.address</code> and <code>original.address</code> point at the exact same object — mutating a property on one is visible through the other, since there's really only one <code>address</code> object.</p>" +
      "<p><b>Result:</b> <code>original.name</code> stays <code>'Ada'</code>, but <code>original.address.city</code> unexpectedly changes to <code>'Paris'</code> too — the \"copy\" wasn't as independent as it looked.</p>" +
      "<p><b>Important rule:</b> a shallow copy <em>looks</em> completely independent until you mutate something nested — then the illusion breaks and both \"copies\" change together.</p>" +
      "<p><b>Don't confuse it with:</b> deep copying (next entry), which duplicates all the way down and avoids exactly this issue.</p>" +
      "<p><b>When to use:</b> whenever you only need a top-level copy for an update that doesn't touch nested data.</p>" +
      "<p><b>When not to use:</b> when the update will mutate nested data — copy the changed nested path explicitly, or use a genuine deep-clone strategy instead.</p>" +
      "<p class='ex-gotcha'>This is the single most common interview trap in this topic: a shallow copy <em>looks</em> completely independent until you mutate something nested — then the illusion breaks and both \"copies\" change together.</p>",

    "Deep copy":
      "<p><b>Simple meaning:</b> A deep copy duplicates everything, all the way down — nested objects included — so the two copies never affect each other, no matter what you mutate.</p>" +
      "<p><b>Think of it as:</b> photocopying every single page inside every folder, not just the cover sheet — now the two folders share absolutely no physical paper; marking up one never appears in the other.</p>" +
      "<p><b>Why it exists:</b> for cases where a shallow copy's shared-nested-reference behavior is actually dangerous — safe snapshots, form drafts, or transforms that must never leak back to the original.</p>" +
      "<p><b>How it works:</b> deep cloning recursively copies every nested object/array, producing an entirely independent object graph with no shared references anywhere.</p>" +
      "<pre><code>const original = { name: 'Ada', address: { city: 'London' } };\nconst copy = structuredClone(original);\n\ncopy.address.city = 'Paris';\nconsole.log(original.address.city); // 'London' — genuinely, fully independent</code></pre>" +
      "<p><b>What happens:</b> <code>structuredClone</code> recursively duplicates <code>original</code>'s entire structure, including the nested <code>address</code> object. Mutating <code>copy.address.city</code> afterward has zero effect on <code>original</code> — unlike the shallow-copy example, there's no shared object anywhere to accidentally mutate.</p>" +
      "<p><b>Result:</b> two fully independent structures — the exact fix for the shared-reference problem shallow copying leaves behind.</p>" +
      "<p><b>Important rule:</b> deep cloning costs more time and memory than a shallow copy — it's overkill if you're not actually going to mutate anything nested.</p>" +
      "<p><b>Don't confuse it with:</b> \"Structured cloning\" (next entry) — that's a specific, correct implementation of deep copying; \"deep copy\" is the general concept.</p>" +
      "<p><b>When to use:</b> a safe, fully independent snapshot — e.g. before letting a form freely mutate a draft of some saved data.</p>" +
      "<p><b>When not to use:</b> for a small targeted change, or a very large data graph where copying only the changed path is faster and clearer.</p>" +
      "<p class='ex-gotcha'>Deep cloning costs more time and memory than a shallow copy, and is overkill if you're not actually going to mutate anything nested — reach for the smallest correct copy strategy, not automatically the deepest one.</p>",

    "Structured cloning":
      "<p><b>Simple meaning:</b> <code>structuredClone(value)</code> is the browser/Node built-in for making a real, deep copy of most JavaScript values.</p>" +
      "<p><b>Think of it as:</b> a proper, general-purpose photocopier built directly into the language — as opposed to the old <code>JSON.parse(JSON.stringify(x))</code> \"photocopier\" that's actually a leaky hack, jamming on several common paper types.</p>" +
      "<p><b>Why it exists:</b> to safely clone ordinary nested data, including values the older JSON-based hack cannot preserve correctly at all.</p>" +
      "<p><b>How it works:</b> it implements the structured clone algorithm, correctly deep-copying nested objects/arrays and also properly handling <code>Date</code>, <code>Map</code>, <code>Set</code>, typed arrays, and even circular references.</p>" +
      "<pre><code>const original = { tags: ['a', 'b'], when: new Date(), self: null };\noriginal.self = original; // circular reference\n\nconst clone = structuredClone(original); // works fine, correctly deep-copied\n\nJSON.parse(JSON.stringify(original)); // TypeError: Converting circular structure to JSON</code></pre>" +
      "<p><b>What happens:</b> <code>structuredClone</code> correctly walks the circular structure (recognizing that <code>original.self</code> points back to <code>original</code> itself) and produces a valid clone that mirrors that same self-reference internally. The JSON hack has no concept of circular structures at all and throws immediately.</p>" +
      "<p><b>Result:</b> a fully independent, correctly-structured clone from <code>structuredClone</code>; a thrown error from the older approach on this same input.</p>" +
      "<p><b>Important rule:</b> <code>structuredClone</code> cannot clone functions or DOM nodes — it throws a <code>DataCloneError</code> on them.</p>" +
      "<p><b>Don't confuse it with:</b> the <code>JSON.parse(JSON.stringify(x))</code> hack, which also \"deep copies\" but silently mangles <code>Date</code> objects (turns them into strings) and drops functions entirely instead of throwing — worse behavior, not better, despite looking similar.</p>" +
      "<p><b>When to use:</b> deep-cloning ordinary nested data, especially anything involving <code>Date</code>, <code>Map</code>, <code>Set</code>, or circular structures.</p>" +
      "<p><b>When not to use:</b> for objects containing functions or DOM nodes — use a manual/library deep-clone approach, or clone just the plain-data parts.</p>" +
      "<p class='ex-gotcha'><code>structuredClone</code> cannot clone functions or DOM nodes — it throws a <code>DataCloneError</code> on them. If your object contains methods, use a manual/library deep-clone approach instead, or clone just the plain-data parts.</p>",

    "Mutation vs immutability":
      "<p><b>Simple meaning:</b> Mutating means changing a value in place; the immutable approach means never changing it — instead, creating a new value with the change applied.</p>" +
      "<p><b>Think of it as:</b> editing a document directly versus using \"track changes\" and accepting into a new draft — one destroys the original as it goes, the other always leaves a clean version behind for comparison.</p>" +
      "<p><b>Why it exists:</b> immutability isn't a language rule but a discipline — it makes state changes predictable, preserves the previous value for debugging, and enables fast reference-based change detection.</p>" +
      "<p><b>How it works:</b> a mutation modifies the existing object/array through a reference (<code>obj.x = 1</code>, <code>arr.push(x)</code>) — the same object, altered. An immutable update leaves the original untouched and produces a brand-new object/array reflecting the change instead.</p>" +
      "<pre><code>// mutation\nconst state = { count: 0 };\nstate.count += 1; // SAME object, changed in place\n\n// immutable update\nconst state2 = { count: 0 };\nconst next = { ...state2, count: state2.count + 1 }; // NEW object</code></pre>" +
      "<p><b>What happens:</b> the mutation directly modifies <code>state</code>'s existing <code>count</code> property — there's still only one object, now with a different value. The immutable version builds an entirely new object <code>next</code>, leaving <code>state2</code> exactly as it was, forever.</p>" +
      "<p><b>Result:</b> after mutation, only one object exists with the new value. After the immutable update, two objects exist — the untouched original and the new one — which is exactly what makes reference comparison useful.</p>" +
      "<p><b>Important rule:</b> immutable updates preserve the old value for comparison and debugging, and are what makes cheap reference-based change detection possible (see \"Referential equality\").</p>" +
      "<p><b>Don't confuse it with:</b> deep immutability — an immutable <em>update</em> only guarantees the object you touched is new; anything nested and not explicitly copied can still be a shared, mutable reference.</p>" +
      "<p><b>When to use:</b> React state updates, reducers, and anywhere predictable, comparable state changes matter.</p>" +
      "<p><b>When not to use:</b> inside a short-lived, purely local algorithm where controlled mutation is simpler and no shared state can possibly observe it.</p>" +
      "<p class='ex-gotcha'>Frameworks like React specifically rely on immutable state updates: if you mutate state directly instead of creating a new object, React can't tell anything changed (same reference), and your component silently fails to re-render.</p>",

    "Referential equality":
      "<p><b>Simple meaning:</b> Two objects are only <code>===</code> equal if they are the literal <em>same</em> object in memory — having identical contents is not enough.</p>" +
      "<p><b>Think of it as:</b> two identical twins are still two different people, even if they're dressed exactly alike — <code>===</code> asks \"is this literally the same person?\", not \"do they look the same?\"</p>" +
      "<p><b>Why it exists:</b> it provides a fast way to detect whether an object's identity changed — central to efficient UI updates and memoization, which can't afford to deeply compare every value on every check.</p>" +
      "<p><b>How it works:</b> for objects (and arrays, functions), <code>===</code> compares references, not structure. Two separately-created objects with identical properties are never equal, no matter how deeply their contents actually match.</p>" +
      "<pre><code>console.log({} === {});             // false — two different objects\nconst a = { x: 1 };\nconst b = a;\nconsole.log(a === b);               // true — same reference\n\nconst arr = [1,2,3];\nconsole.log([1,2,3] === [1,2,3]);   // false\nconsole.log(arr === arr);           // true — same reference</code></pre>" +
      "<p><b>What happens:</b> <code>{}</code> and <code>{}</code> each create a brand-new, distinct object — even with matching (empty) contents, they're two different objects in memory. <code>b = a</code> instead copies the reference itself, so <code>a</code> and <code>b</code> genuinely point at one shared object.</p>" +
      "<p><b>Result:</b> <code>false</code> for two separately-created objects no matter how similar; <code>true</code> only when both sides are provably the same object.</p>" +
      "<p><b>Important rule:</b> mutating an object in place and then comparing it to its old self with <code>===</code> will always say \"unchanged\" — it's literally still the same reference — even though the contents are now different.</p>" +
      "<p><b>Don't confuse it with:</b> a deep equality check — comparing contents field by field — which is a deliberately separate, slower operation that <code>===</code> never performs.</p>" +
      "<p><b>When to use:</b> whenever you need a cheap, fast \"did this identity change?\" check — exactly what React and similar libraries rely on for re-render decisions.</p>" +
      "<p><b>When not to use:</b> when the actual requirement is to compare two separate objects by their contents — use a deliberate field-by-field or deep comparison instead.</p>" +
      "<p class='ex-gotcha'>Mutating an object in place and then comparing it to its old self with <code>===</code> will always say \"unchanged\" — because it's literally still the same reference — even though the contents are now different. This is the root cause of a huge class of \"my component won't re-render\" bugs.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Modules & runtime": {
    "CommonJS":
      "<p><b>Simple meaning:</b> The older module system Node.js uses by default — <code>require</code> to import, <code>module.exports</code> to export.</p>" +
      "<p><b>Think of it as:</b> a phone call — you dial (<code>require</code>) and wait right there until the other end answers, fully, before your code moves on to the next line.</p>" +
      "<p><b>Why it exists:</b> Node needed a module system before ES Modules existed as a language standard, so it created its own — CommonJS.</p>" +
      "<p><b>How it works:</b> CommonJS (CJS) modules load <b>synchronously</b> and are resolved at <b>runtime</b> — <code>require(path)</code> is a normal function call, evaluated when execution reaches it, which means it can be called conditionally or with a dynamic path.</p>" +
      "<pre><code>// math.js\nfunction add(a, b) { return a + b; }\nmodule.exports = { add };\n\n// app.js\nconst { add } = require('./math');\nconsole.log(add(2, 3)); // 5</code></pre>" +
      "<p><b>What happens:</b> <code>require('./math')</code> reads, runs, and returns <code>math.js</code>'s <code>module.exports</code> object, all synchronously and immediately — the very next line can use <code>add</code> right away.</p>" +
      "<p><b>Result:</b> <code>5</code> — a genuine, immediately-usable function reference, no waiting or promise involved.</p>" +
      "<p><b>Important rule:</b> Node uses CommonJS by default for <code>.js</code> files unless you opt into ES Modules with <code>\"type\": \"module\"</code> in <code>package.json</code>, or a <code>.mjs</code> extension.</p>" +
      "<p><b>Don't confuse it with:</b> ES Modules — the two systems have genuinely different loading semantics (sync vs. async, dynamic vs. static), not just different syntax.</p>" +
      "<p><b>When to use:</b> most existing Node.js codebases, unless the project has explicitly opted into ESM.</p>" +
      "<p><b>When not to use:</b> new projects that want tree-shaking or browser-native module support — ESM fits those better.</p>" +
      "<p class='ex-gotcha'>Node uses CommonJS by default for <code>.js</code> files unless you opt into ES Modules with <code>\"type\": \"module\"</code> in <code>package.json</code>, or a <code>.mjs</code> extension — this default surprises a lot of MERN learners coming from browser-only ES module experience.</p>",

    "ES Modules":
      "<p><b>Simple meaning:</b> The standard, modern JavaScript module system — <code>import</code>/<code>export</code>, built into the language itself.</p>" +
      "<p><b>Think of it as:</b> a subscription — instead of calling once and getting a snapshot, you get a live feed that automatically updates if the source changes.</p>" +
      "<p><b>Why it exists:</b> to give JavaScript itself (not just Node) a single, standardized, native module system usable in browsers directly, without bundler tooling.</p>" +
      "<p><b>How it works:</b> ES Modules (ESM) are <b>statically analyzed</b> at parse time, before any code runs. Imports are <b>asynchronous</b> and hoisted, and they create <b>live, read-only bindings</b> to the exporting module's values, not copies.</p>" +
      "<pre><code>// math.js\nexport function add(a, b) { return a + b; }\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(2, 3)); // 5</code></pre>" +
      "<p><b>What happens:</b> before <code>app.js</code>'s own code runs at all, the engine statically resolves the entire import graph — it already knows, at parse time, exactly what <code>math.js</code> exports and that <code>add</code> exists.</p>" +
      "<p><b>Result:</b> <code>5</code> — but critically, <code>add</code> here is a LIVE binding, not a snapshot copy (see the gotcha).</p>" +
      "<p><b>Important rule:</b> \"live binding\" is the subtle but important difference from CJS — if the exporting module later reassigns an exported <code>let</code> variable, every importer sees the <em>new</em> value automatically.</p>" +
      "<p><b>Don't confuse it with:</b> CommonJS's snapshot-copy behavior — CJS hands importers a one-time copy taken at require time; ESM never does.</p>" +
      "<p><b>When to use:</b> new projects, especially anything targeting browsers directly or wanting tree-shaking.</p>" +
      "<p><b>When not to use:</b> existing large CommonJS codebases where migration cost outweighs the benefit.</p>" +
      "<p class='ex-gotcha'>\"Live binding\" is the subtle but important difference from CJS: if the exporting module later reassigns an exported <code>let</code> variable, every importer sees the <em>new</em> value automatically — CJS instead hands importers a one-time snapshot copy taken at require time.</p>",

    "require":
      "<p><b>Simple meaning:</b> The CommonJS function that loads another module and gives you back whatever it exported.</p>" +
      "<p><b>Think of it as:</b> a normal function call that happens to fetch a file's exports — not special syntax, an actual callable function you can put anywhere a value is legal.</p>" +
      "<p><b>Why it exists:</b> it's the core loading mechanism CommonJS is built around.</p>" +
      "<p><b>How it works:</b> <code>require(path)</code> synchronously reads, executes, and caches the target module, then returns its <code>module.exports</code> value. Because it's a real function call, it can be used anywhere a value is allowed — inside an <code>if</code>, a function body, or with a computed path.</p>" +
      "<pre><code>if (process.env.NODE_ENV === 'test') {\n  const mock = require('./mockDb'); // conditional require — only CJS allows this\n}\nconst db = require('./db');</code></pre>" +
      "<p><b>What happens:</b> the conditional <code>require</code> only executes if the <code>if</code> condition is true — because it's a normal function call, not special top-level-only syntax, it can legally live inside a branch like this.</p>" +
      "<p><b>Result:</b> either <code>mock</code> is loaded (in test mode) or it isn't — a genuinely runtime-decided choice.</p>" +
      "<p><b>Important rule:</b> this dynamic, run-anywhere flexibility is exactly why CJS can't be reliably tree-shaken — a bundler can't know at build time which <code>require</code> calls will actually execute.</p>" +
      "<p><b>Don't confuse it with:</b> static <code>import</code> — that must sit at the top level and cannot be conditional like this.</p>" +
      "<p><b>When to use:</b> loading modules in a CommonJS codebase, including conditionally when genuinely needed.</p>" +
      "<p><b>When not to use:</b> in an ESM file — use <code>import</code>/<code>import()</code> instead.</p>" +
      "<p class='ex-gotcha'>This dynamic, run-anywhere flexibility is exactly why CJS can't be reliably tree-shaken — a bundler can't know at build time which <code>require</code> calls will actually execute, or with what path.</p>",

    "import":
      "<p><b>Simple meaning:</b> The ES Modules keyword for pulling in values exported by another file.</p>" +
      "<p><b>Think of it as:</b> a declaration written at the very top of a document's table of contents, resolved before you even start reading the document itself.</p>" +
      "<p><b>Why it exists:</b> to give ESM's static analysis something concrete to work with — knowing every import upfront, before any code runs.</p>" +
      "<p><b>How it works:</b> static <code>import</code> declarations must appear at the top level of a module (never conditionally inside an <code>if</code> or function) and are hoisted — resolved before any of the module's own code runs.</p>" +
      "<pre><code>import { add, subtract } from './math.js'; // named\nimport MathUtils from './math.js';         // default\nimport * as math from './math.js';         // namespace — everything</code></pre>" +
      "<p><b>What happens:</b> all three forms are resolved before the rest of <code>app.js</code>'s code executes — by the time the first non-import line runs, every imported binding is already available.</p>" +
      "<p><b>Result:</b> three different local access patterns to the same source module, depending on the import form chosen.</p>" +
      "<p><b>Important rule:</b> writing <code>if (cond) { import x from 'y'; }</code> is a <code>SyntaxError</code> — static <code>import</code> must be top-level.</p>" +
      "<p><b>Don't confuse it with:</b> <code>import()</code> — the dynamic function form, usable anywhere, for genuinely conditional loading.</p>" +
      "<p><b>When to use:</b> pulling in dependencies a module always needs, known ahead of time.</p>" +
      "<p><b>When not to use:</b> for conditional or runtime-decided loading — use <code>import()</code> instead.</p>" +
      "<p class='ex-gotcha'>Writing <code>if (cond) { import x from 'y'; }</code> is a <code>SyntaxError</code> — static <code>import</code> must be top-level. Reach for <code>import()</code> (returns a promise) when the choice to load a module is genuinely conditional.</p>",

    "module.exports":
      "<p><b>Simple meaning:</b> In CommonJS, whatever you assign to <code>module.exports</code> is what another file gets back from <code>require</code>.</p>" +
      "<p><b>Think of it as:</b> the one designated outgoing tray on a desk — whatever's placed there is exactly what gets handed to anyone who comes asking for this file's output.</p>" +
      "<p><b>Why it exists:</b> it's the mechanism CommonJS uses to mark what a module makes available to other files.</p>" +
      "<p><b>How it works:</b> every CJS file has its own <code>module</code> object with an <code>exports</code> property, defaulting to <code>{}</code>. Assigning to <code>module.exports</code> replaces that whole object; assigning individual properties onto the <code>exports</code> shorthand adds to it instead.</p>" +
      "<pre><code>module.exports = { add, subtract };\n// or, equivalently, one at a time:\nexports.add = add;\nexports.subtract = subtract;</code></pre>" +
      "<p><b>What happens:</b> the first form replaces the entire exports object at once. The second form mutates the existing default <code>{}</code> object property-by-property — both end up producing an equivalent result, as long as <code>exports</code> is never reassigned outright.</p>" +
      "<p><b>Result:</b> a module with two named exports, reachable via <code>require</code> either way.</p>" +
      "<p><b>Important rule:</b> reassigning <code>exports = { add }</code> directly (instead of <code>module.exports = { add }</code>) silently breaks the export — <code>exports</code> is just a local variable that initially points at the same object as <code>module.exports</code>.</p>" +
      "<p><b>Don't confuse it with:</b> ESM's <code>export</code> keyword — syntactically similar name, entirely different underlying mechanism.</p>" +
      "<p><b>When to use:</b> marking a CommonJS module's exports.</p>" +
      "<p><b>When not to use:</b> reassigning the bare <code>exports</code> variable directly — always use <code>module.exports</code> or mutate <code>exports</code> in place.</p>" +
      "<p class='ex-gotcha'>Reassigning <code>exports = { add }</code> directly (instead of <code>module.exports = { add }</code>) silently breaks the export — <code>exports</code> is just a local variable that initially points at the same object as <code>module.exports</code>; reassigning the variable itself severs that link, and the module still exports the original empty object.</p>",

    "export":
      "<p><b>Simple meaning:</b> The ES Modules keyword that makes a value available for other files to <code>import</code>.</p>" +
      "<p><b>Think of it as:</b> a label stamped directly onto a declaration, marking it as reachable from outside — versus CommonJS's separate \"put it in the outgoing tray\" step.</p>" +
      "<p><b>Why it exists:</b> to give ESM a native, syntax-level way to mark exports, integrated directly with declarations rather than a separate assignment.</p>" +
      "<p><b>How it works:</b> <code>export</code> can attach to a declaration (<code>export const x = 1;</code>), be used inline for multiple names (<code>export { a, b };</code>), or mark a module's single default export.</p>" +
      "<pre><code>export const PI = 3.14;\nexport function circleArea(r) { return PI * r * r; }\n\nexport default class Circle { /* ... */ } // the module's main export</code></pre>" +
      "<p><b>What happens:</b> <code>PI</code> and <code>circleArea</code> are exported as named exports, individually importable by name. <code>Circle</code> is marked as THE default export — the module's one primary offering.</p>" +
      "<p><b>Result:</b> a module with both named and default exports living side by side — legal and common.</p>" +
      "<p><b>Important rule:</b> a module can have any number of named exports, but at most <b>one</b> default export.</p>" +
      "<p><b>Don't confuse it with:</b> mixing up the import syntax for each — <code>import { x }</code> is for named exports, plain <code>import x</code> is for default exports; conflating them is a frequent beginner error.</p>" +
      "<p><b>When to use:</b> marking any value an ESM module wants to share.</p>" +
      "<p><b>When not to use:</b> n/a — exporting is always a deliberate choice per value.</p>" +
      "<p class='ex-gotcha'>A module can have any number of named exports, but at most <b>one</b> default export — mixing both in one file is legal and common, but conflating the two import syntaxes (<code>import { x }</code> for a default, or plain <code>import x</code> for a named export) is a frequent beginner error.</p>",

    "Module caching concept":
      "<p><b>Simple definition:</b> A module's code only runs <b>once</b> — every later import/require of the same file reuses the already-computed result instead of re-running it.</p>" +
      "<p><b>Think of it as:</b> a shared office coffee machine — the first person to arrive brews the pot; everyone after that just pours from the same pot, they don't each brew a fresh one.</p>" +
      "<p><b>Why it exists:</b> re-running a module's full initialization logic on every import would be wasteful and would break any state a module intentionally maintains.</p>" +
      "<p><b>How it works:</b> both CJS and ESM cache modules by resolved file path after first load. Subsequent <code>require</code>/<code>import</code> calls for the same path return the cached exports object directly, without re-executing the module body.</p>" +
      "<pre><code>// counter.js\nlet count = 0;\nmodule.exports = { increment: () => ++count };\n\n// used from two different files:\nconst a = require('./counter');\nconst b = require('./counter');\na.increment();\nconsole.log(b.increment()); // 2 — SAME module instance, shared state</code></pre>" +
      "<p><b>What happens:</b> <code>counter.js</code>'s body runs exactly once, the first time it's required. The second <code>require('./counter')</code> doesn't re-run it — it returns the exact same cached exports object, so <code>a</code> and <code>b</code> are literally the same object.</p>" +
      "<p><b>Result:</b> <code>b.increment()</code> logs <code>2</code>, not <code>1</code> — because <code>a</code>'s earlier increment already affected the shared <code>count</code> both <code>a</code> and <code>b</code> reference.</p>" +
      "<p><b>Important rule:</b> importing the same module from many files doesn't give each file its own private copy — they all share the exact same instance, which is <em>why</em> the module pattern naturally produces a singleton.</p>" +
      "<p><b>Don't confuse it with:</b> a fresh instantiation per import — modules are cached, classes/factories called inside them are not (unless you deliberately design them to be).</p>" +
      "<p><b>When to use:</b> understanding this explains why a module-level counter, config object, or singleton pattern works reliably across a whole app.</p>" +
      "<p><b>When not to use:</b> n/a — this caching happens automatically.</p>" +
      "<p class='ex-gotcha'>Because the module only ever runs once, importing the same module from many files doesn't give each file its own private copy — they all share the exact same instance, including any mutable state it holds. This is <em>why</em> the module pattern naturally produces a singleton.</p>",

    "Circular dependencies":
      "<p><b>Simple meaning:</b> Module A imports from module B, and module B imports from module A — a loop in the dependency graph that can leave one side with an incomplete version of the other.</p>" +
      "<p><b>Think of it as:</b> two people each waiting for the other to finish speaking before they can respond — someone ends up having to answer with an incomplete picture of what the other person actually said.</p>" +
      "<p><b>Why it's a problem:</b> whichever module happens to be required first in the cycle sees an incomplete version of the other, because that other module hasn't reached its own export statement yet.</p>" +
      "<p><b>How it works:</b> when Node encounters a require cycle, it returns whatever the in-progress module's <code>exports</code> object contains <em>at that point in execution</em> — often a partially-populated (or entirely empty) object.</p>" +
      "<pre><code>// a.js\nconst b = require('./b'); // b.js starts requiring a.js mid-execution\nconsole.log('b.value in a.js:', b.value); // may be undefined!\nmodule.exports = { name: 'a' };\n\n// b.js\nconst a = require('./a'); // gets a's exports so far — possibly {}\nmodule.exports = { value: 42 };</code></pre>" +
      "<p><b>What happens:</b> <code>a.js</code> starts, immediately requiring <code>b.js</code>, which pauses <code>a.js</code>'s execution mid-way. <code>b.js</code> then requires <code>a.js</code> back — but <code>a.js</code> hasn't reached its <code>module.exports</code> line yet, so <code>b.js</code> only sees the empty default <code>{}</code>.</p>" +
      "<p><b>Result:</b> reading a property from the not-yet-finished module returns <code>undefined</code>, even though it will eventually have a real value once its own execution completes.</p>" +
      "<p><b>Important rule:</b> the safest fix is almost always to <b>restructure</b> — pull the shared logic both modules need into a third file they both depend on, removing the cycle entirely.</p>" +
      "<p><b>Don't confuse it with:</b> a simple missing export — this bug only shows up specifically because of the circular timing, not because anything is genuinely missing from the file.</p>" +
      "<p><b>When to use:</b> recognize this pattern when a required module's property is unexpectedly <code>undefined</code> despite the export existing in the file.</p>" +
      "<p><b>When not to use:</b> avoid designing modules that depend on each other circularly in the first place.</p>" +
      "<p class='ex-gotcha'>The safest fix is almost always to <b>restructure</b> — pull the shared logic both modules need into a third file they both depend on, removing the cycle entirely, rather than trying to carefully order requires around the problem.</p>",

    "Dynamic imports":
      "<p><b>Simple meaning:</b> <code>import(path)</code> loads a module <em>at runtime</em>, on demand, instead of upfront when the file is parsed.</p>" +
      "<p><b>Think of it as:</b> ordering an item only when a customer actually asks for it, instead of stocking every possible item on the shelf from day one.</p>" +
      "<p><b>Why it exists:</b> for code splitting (only download a heavy module when it's actually needed) and conditional loading based on runtime state.</p>" +
      "<p><b>How it works:</b> unlike static <code>import</code>, the <code>import()</code> function can be called anywhere — conditionally, inside a function, with a computed path — and returns a <b>promise</b> that resolves to the module's namespace object.</p>" +
      "<pre><code>async function loadChart() {\n  const { Chart } = await import('./chart.js'); // only fetched when actually needed\n  return new Chart();\n}\n\nif (userWantsDarkMode) {\n  const theme = await import('./dark-theme.js');\n}</code></pre>" +
      "<p><b>What happens:</b> <code>chart.js</code> is never even downloaded/parsed unless <code>loadChart</code> is actually called — the module is genuinely deferred until this exact line executes, unlike a static top-level import that always loads.</p>" +
      "<p><b>Result:</b> a promise that resolves to the module's namespace once loading actually completes — awaited here to get the destructured value.</p>" +
      "<p><b>Important rule:</b> it's the one form of <code>import</code> allowed inside conditionals and functions — the static form's top-level-only restriction doesn't apply here.</p>" +
      "<p><b>Don't confuse it with:</b> static <code>import</code> — that always loads at parse time, unconditionally.</p>" +
      "<p><b>When to use:</b> code splitting a heavy or rarely-used module, or genuinely conditional loading.</p>" +
      "<p><b>When not to use:</b> for dependencies a module always needs regardless of conditions — static <code>import</code> is simpler there.</p>" +
      "<p class='ex-gotcha'>It's the one form of <code>import</code> allowed inside conditionals and functions — the static form's top-level-only restriction doesn't apply, precisely because dynamic import is resolved at runtime, not parse time.</p>",

    "Tree-shaking concept":
      "<p><b>Simple meaning:</b> A bundler's ability to detect and strip out exported code that nothing actually uses, shrinking the final bundle.</p>" +
      "<p><b>Think of it as:</b> a librarian who only ships the specific books someone actually checked out, discarding the rest of the library's contents from the shipment entirely.</p>" +
      "<p><b>Why it exists:</b> to keep bundle sizes small by removing code that's technically exported but genuinely never imported anywhere.</p>" +
      "<p><b>How it works:</b> tree-shaking relies on ESM's <b>static</b> structure — because imports/exports are fixed and analyzable at build time, a bundler can build an accurate graph of what's actually reachable from your entry point and discard the rest.</p>" +
      "<pre><code>// utils.js — exports 10 functions\nexport function used() { /* ... */ }\nexport function neverImported() { /* ... */ } // safely dropped\n\n// app.js\nimport { used } from './utils.js';\n// a tree-shaking bundler ships only 'used', not the other 9 exports</code></pre>" +
      "<p><b>What happens:</b> the bundler statically traces every import starting from the entry point, discovering that only <code>used</code> is ever actually imported anywhere. <code>neverImported</code> (and the other 8 unused exports) are provably unreachable, so they're excluded from the final bundle entirely.</p>" +
      "<p><b>Result:</b> a smaller shipped bundle, containing only the code that's genuinely reachable from the app's actual usage.</p>" +
      "<p><b>Important rule:</b> this is exactly why CommonJS doesn't tree-shake well — <code>require</code> calls can be conditional or dynamically pathed, so a bundler can't prove ahead of time which exports are truly unreachable.</p>" +
      "<p><b>Don't confuse it with:</b> minification — tree-shaking removes whole unused exports; minification shrinks the code that remains.</p>" +
      "<p><b>When to use:</b> understanding this explains why ESM (not CommonJS) is required for effective tree-shaking, and why many small named exports shake better than one big default-exported object.</p>" +
      "<p><b>When not to use:</b> n/a — this is a build-tool optimization, not a technique you invoke manually.</p>" +
      "<p class='ex-gotcha'>This is exactly why CommonJS doesn't tree-shake well — <code>require</code> calls can be conditional or dynamically pathed, so a bundler can't prove ahead of time which exports are truly unreachable, and generally has to keep the whole module. Preferring many small named exports over one big default-exported object also shakes better, since the bundler can see which individual names are actually used.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Performance": {
    "Debouncing":
      "<p><b>Simple meaning:</b> Debouncing waits for a pause in activity before doing anything — if the event keeps firing, it keeps resetting the timer.</p>" +
      "<p><b>Think of it as:</b> an elevator that keeps resetting its \"closing doors\" timer every time someone new approaches — the doors only actually close once nobody's approached for the full wait period.</p>" +
      "<p><b>Why it matters for performance:</b> a search-as-you-type input firing an API call on every keystroke can trigger dozens of wasted requests for a single word; debouncing collapses that burst into one request, sent only once the user pauses.</p>" +
      "<p><b>How it works:</b> a debounced function delays running until <code>delay</code> ms have passed with <em>no new calls</em>. Every new call cancels the previous pending timer and starts a fresh one, so only the final call in a burst actually executes.</p>" +
      "<pre><code>function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst search = debounce(query => fetchResults(query), 300);\ninput.addEventListener('input', e => search(e.target.value));\n// typing \"hello\" fast → only ONE fetch, 300ms after the last keystroke</code></pre>" +
      "<p><b>What happens:</b> every keystroke cancels the previous pending timer and starts a new one — as long as typing continues, <code>fn</code> never actually runs. Only once 300ms of true silence passes does the timer finally complete and fire the real request.</p>" +
      "<p><b>Result:</b> five keystrokes, but exactly ONE fetch call — collapsing an entire burst into a single, well-timed request.</p>" +
      "<p><b>Important rule:</b> debouncing means the function might <em>never</em> run if the trigger never pauses — correct for search-as-you-type, wrong for something needing a steady rate.</p>" +
      "<p><b>Don't confuse it with:</b> throttling — the next entry, which fires periodically DURING continuous activity rather than waiting for it to stop.</p>" +
      "<p><b>When to use:</b> search-as-you-type, resize handlers, or anything where only the final settled state matters.</p>" +
      "<p><b>When not to use:</b> when the action must fire at a steady rate DURING continuous activity — like a scroll progress indicator, which needs throttling instead.</p>" +
      "<p class='ex-gotcha'>Debouncing means the function might <em>never</em> run if the trigger never pauses — that's correct for search-as-you-type, but wrong for something that must fire at a steady rate (like a scroll progress indicator), which needs throttling instead.</p>",

    "Throttling":
      "<p><b>Simple meaning:</b> Throttling guarantees the function runs at most once every fixed interval, no matter how often the event fires.</p>" +
      "<p><b>Think of it as:</b> a metered turnstile that lets exactly one person through every few seconds, no matter how large the crowd pushing against it.</p>" +
      "<p><b>Why it matters for performance:</b> a scroll or mousemove handler can fire dozens of times per second — running expensive logic (layout reads, state updates) on every single event can visibly jank the page. Throttling caps the rate to something the browser can keep up with.</p>" +
      "<p><b>How it works:</b> a throttled function executes immediately on the first call, then ignores further calls until <code>interval</code> ms have passed, at which point the next call is allowed through again.</p>" +
      "<pre><code>function throttle(fn, interval) {\n  let ready = true;\n  return (...args) => {\n    if (!ready) return;\n    fn(...args);\n    ready = false;\n    setTimeout(() => { ready = true; }, interval);\n  };\n}\n\nconst onScroll = throttle(() => updateProgressBar(), 100);\nwindow.addEventListener('scroll', onScroll);\n// fires dozens of times per second, but updateProgressBar runs at most every 100ms</code></pre>" +
      "<pre><code>scroll events: | | | | | | | | | | | | | |  (very frequent)\nthrottled run: X-------X-------X-------X    (fixed-rate, guaranteed)</code></pre>" +
      "<p><b>What happens:</b> the first scroll event runs immediately, flipping <code>ready</code> false. Every subsequent scroll event during the next 100ms is silently ignored, until the timer flips <code>ready</code> back to true, allowing the next call through.</p>" +
      "<p><b>Result:</b> dozens of scroll events per second collapse into a call rate capped at once every 100ms — a steady, predictable, browser-friendly rate.</p>" +
      "<p><b>Important rule:</b> debounce waits for <b>silence</b>; throttle guarantees a <b>steady maximum rate</b> during continuous activity.</p>" +
      "<p><b>Don't confuse it with:</b> debouncing, which can mean the function never fires if activity never pauses.</p>" +
      "<p><b>When to use:</b> scroll handlers, drag events, mousemove — anything needing periodic updates during continuous activity.</p>" +
      "<p><b>When not to use:</b> when only the final state matters, not intermediate updates — debouncing fits that better.</p>" +
      "<p class='ex-gotcha'>Debounce vs throttle is the classic mix-up: <b>debounce waits for silence</b> (search input, resize-end); <b>throttle guarantees a steady maximum rate</b> even during continuous activity (scroll, mousemove, drag). Pick based on whether \"eventually once\" or \"steadily, but capped\" is what the UX actually needs.</p>",

    "Memoization":
      "<p><b>Simple meaning:</b> Remembering the result of an expensive function call, so calling it again with the same input returns the cached answer instantly instead of recomputing.</p>" +
      "<p><b>Think of it as:</b> a notebook where you write down the answer to a hard problem the first time you solve it — asked the same question again, you just read the notebook instead of redoing all the work.</p>" +
      "<p><b>Why it matters for performance:</b> memoization trades memory (the cache) for time (skipped recomputation) — worthwhile when the same expensive inputs recur often.</p>" +
      "<p><b>How it works:</b> a memoized function wraps the original, keeping a cache (typically a <code>Map</code>) keyed by its arguments. On each call it checks whether that key's result is already cached; if so, it returns the cache hit immediately.</p>" +
      "<pre><code>function memoize(fn) {\n  const cache = new Map();\n  return (arg) => {\n    if (cache.has(arg)) return cache.get(arg); // cache hit — instant\n    const result = fn(arg);                    // cache miss — do the work\n    cache.set(arg, result);\n    return result;\n  };\n}\n\nconst fastSquare = memoize(n => { for (let i=0;i<1e8;i++){} return n*n; });\nfastSquare(5); // slow — computes and caches\nfastSquare(5); // instant — cache hit</code></pre>" +
      "<p><b>What happens:</b> the first call with <code>5</code> is a cache miss — the slow computation runs and its result is stored. The second call with the SAME <code>5</code> is a cache hit — the real computation is skipped entirely, the cached value returns immediately.</p>" +
      "<p><b>Result:</b> the first call is slow; the second, identical call is effectively free — a dramatic speedup for repeated inputs.</p>" +
      "<p><b>Important rule:</b> memoization is worthwhile when the same inputs recur often and computation is genuinely expensive; wasteful when inputs rarely repeat, since you pay memory cost for cache entries never reused.</p>" +
      "<p><b>Don't confuse it with:</b> general caching — memoization specifically ties cache keys to a function's own arguments, computed automatically.</p>" +
      "<p><b>When to use:</b> expensive, pure computations called repeatedly with the same inputs.</p>" +
      "<p><b>When not to use:</b> on impure functions, or when inputs rarely repeat.</p>" +
      "<p class='ex-gotcha'>Memoization only works correctly for <b>pure functions</b> — same input always produces the same output, with no dependence on outside state. Memoizing an impure function (one that reads a changing global, the current time, or random values) will happily return stale, wrong cached results.</p>",

    "Avoiding unnecessary computation":
      "<p><b>Simple meaning:</b> A lot of \"performance\" is just not doing work you don't need to do — computing something once instead of on every iteration, or stopping early once you have your answer.</p>" +
      "<p><b>Think of it as:</b> not re-measuring the same table with a tape measure every single time you glance at it — measure once, remember the number, and just reuse it.</p>" +
      "<p><b>Why it matters for performance:</b> repeated, avoidable work adds up fast in loops that run thousands or millions of times.</p>" +
      "<p><b>How it works:</b> common patterns include hoisting invariant expressions out of a loop, caching a repeatedly-accessed value in a local variable, and using short-circuiting (<code>&amp;&amp;</code>, early <code>return</code>, <code>break</code>) to skip work once the answer is already determined.</p>" +
      "<pre><code>// wasteful — recomputes .length and re-derives 'threshold' every iteration\nfor (let i = 0; i < items.length; i++) {\n  const threshold = config.base * config.multiplier;\n  if (items[i].value > threshold) { /* ... */ }\n}\n\n// better — computed once, outside the loop\nconst threshold = config.base * config.multiplier;\nconst len = items.length;\nfor (let i = 0; i < len; i++) {\n  if (items[i].value > threshold) { /* ... */ }\n}</code></pre>" +
      "<p><b>What happens:</b> the first version recomputes <code>threshold</code> — an expression whose value never actually changes — on every single loop iteration. The second version computes it exactly once, before the loop even starts, and reuses that same value every time.</p>" +
      "<p><b>Result:</b> identical final behavior, but the second version does dramatically less redundant work as the loop grows larger.</p>" +
      "<p><b>Important rule:</b> don't chase this kind of micro-optimization <em>before measuring</em> — modern JS engines already optimize many simple cases automatically; profile first, then optimize what's actually slow.</p>" +
      "<p><b>Don't confuse it with:</b> premature optimization — hoisting a genuinely invariant expression is always safe; restructuring working code based on a guess, without measuring, is not.</p>" +
      "<p><b>When to use:</b> hot loops where the same expensive-to-recompute value is used repeatedly.</p>" +
      "<p><b>When not to use:</b> as a blanket habit applied everywhere without first confirming a real bottleneck exists.</p>" +
      "<p class='ex-gotcha'>Don't chase this kind of micro-optimization <em>before measuring</em> — modern JS engines already optimize many simple cases like <code>array.length</code> automatically, and hand-optimizing code that isn't actually a bottleneck just adds complexity for no real gain. Profile first, then optimize what's actually slow.</p>",

    "Memory management":
      "<p><b>Simple meaning:</b> Making sure your program doesn't hold onto memory it no longer needs, which would otherwise slow things down or crash the page/process over time.</p>" +
      "<p><b>Think of it as:</b> tidying up after yourself — closing unused tabs (timers), removing old notices from the board (listeners), and not letting a junk drawer (cache) grow forever without ever emptying it.</p>" +
      "<p><b>Why it matters for performance:</b> unbounded memory growth eventually degrades performance and can crash the page or process entirely.</p>" +
      "<p><b>How it works:</b> JavaScript's garbage collector automatically frees memory for objects that are no longer <b>reachable</b> from any root reference. Performance problems arise when references linger longer than intended.</p>" +
      "<pre><code>let cache = {};\nfunction store(key, bigData) {\n  cache[key] = bigData; // grows forever — never evicted\n}\n// a cache with no eviction strategy is a slow, silent memory leak</code></pre>" +
      "<p><b>What happens:</b> every call to <code>store</code> adds another entry to <code>cache</code>, but nothing ever removes an old one — the object grows without bound as the program runs, staying reachable (and un-collectable) forever.</p>" +
      "<p><b>Result:</b> memory usage climbs steadily over the program's lifetime, with no single dramatic failure until it eventually causes real problems.</p>" +
      "<p><b>Important rule:</b> the most common real-world memory issue isn't a dramatic \"leak\" — it's slow accumulation from forgotten timers, detached DOM nodes still referenced, or listeners never removed.</p>" +
      "<p><b>Don't confuse it with:</b> a deliberate, bounded cache — the fix here is adding an eviction strategy (cap the size, evict the oldest entry), not avoiding caching altogether.</p>" +
      "<p><b>When to use:</b> clear timers you no longer need, remove event listeners on cleanup, and cap the size of any manually-managed cache.</p>" +
      "<p><b>When not to use:</b> n/a — these habits should be applied consistently, not selectively.</p>" +
      "<p class='ex-gotcha'>The most common real-world memory issue isn't a dramatic \"leak\" — it's a slow accumulation from things like forgotten <code>setInterval</code> timers, detached DOM nodes still referenced by a closure, or listeners that were added but never removed. See \"Memory leaks\" (Advanced JavaScript) for the full breakdown.</p>",

    "Large-array processing":
      "<p><b>Simple meaning:</b> Processing big arrays efficiently means avoiding patterns that scale badly, and not doing more passes over the data than necessary.</p>" +
      "<p><b>Think of it as:</b> the difference between checking a phone book by flipping every page (linear scan) versus jumping straight to the right letter (a hash-based lookup) — both \"work,\" but one gets dramatically slower as the book grows, and the other doesn't.</p>" +
      "<p><b>Why it matters for performance:</b> an algorithm that's fine on 100 items can become genuinely unusable on 100,000 if its complexity scales badly.</p>" +
      "<p><b>How it works:</b> two common performance traps: an O(n²) pattern (repeatedly calling <code>.includes()</code>/<code>.find()</code> inside a loop, when a <code>Set</code>/<code>Map</code> lookup would be O(1)), and chaining many separate array passes when a single <code>reduce</code> could do the same work in one pass.</p>" +
      "<pre><code>// O(n²) — .includes() rescans the whole array every iteration\nconst blocked = [/* thousands of ids */];\nconst filtered = users.filter(u => blocked.includes(u.id)); // slow at scale\n\n// O(n) — one Set lookup is O(1)\nconst blockedSet = new Set(blocked);\nconst filtered2 = users.filter(u => blockedSet.has(u.id)); // fast at scale</code></pre>" +
      "<p><b>What happens:</b> the first version calls <code>.includes()</code> on the full <code>blocked</code> array, once PER user — a linear scan repeated for every single user, making the total work grow as users × blocked (O(n²)). The second version builds a <code>Set</code> once, then does one O(1) lookup per user (O(n) total).</p>" +
      "<p><b>Result:</b> identical output, but the second version scales dramatically better as both lists grow — the difference is invisible on small data and severe on large data.</p>" +
      "<p><b>Important rule:</b> swapping a linear scan for a <code>Set</code>/<code>Map</code> lookup is one of the highest-leverage, lowest-effort performance fixes available.</p>" +
      "<p><b>Don't confuse it with:</b> premature optimization — this specific swap is nearly always a clear win, unlike many micro-optimizations that need measurement first.</p>" +
      "<p><b>When to use:</b> any repeated membership check inside a loop over a large collection.</p>" +
      "<p><b>When not to use:</b> for genuinely small, fixed-size lists where the difference is immeasurable.</p>" +
      "<p class='ex-gotcha'>Swapping a linear scan for a <code>Set</code>/<code>Map</code> lookup is one of the highest-leverage, lowest-effort performance fixes available — an O(n²) algorithm that's fine on 100 items can become genuinely unusable on 100,000.</p>",

    "Event-loop blocking":
      "<p><b>Simple meaning:</b> A long synchronous piece of code freezes everything else — clicks, animations, timers, rendering — until it finishes, because JavaScript runs on a single thread.</p>" +
      "<p><b>Think of it as:</b> a single waiter who's stuck taking one enormous, slow order — no other table gets served, no matter how simple their request, until that one order is fully done.</p>" +
      "<p><b>Why it matters for performance:</b> this is one of the most visible, user-facing performance failures — the entire page becomes unresponsive for the duration.</p>" +
      "<p><b>How it works:</b> the event loop can only move to the next task once the call stack is empty. A synchronous loop that runs for, say, 2 seconds occupies the stack the whole time, so nothing else gets a turn.</p>" +
      "<pre><code>function blockFor(ms) {\n  const end = Date.now() + ms;\n  while (Date.now() < end) {} // the page is frozen for the whole duration\n}\nblockFor(2000); // clicks, scrolling, animations — all frozen for 2s</code></pre>" +
      "<p><b>What happens:</b> the busy-wait loop occupies the call stack continuously for 2 seconds — the event loop has no opportunity to process any queued click, render a frame, or fire any timer during that entire window.</p>" +
      "<p><b>Result:</b> a visibly frozen page for the full duration — nothing responds, not even a spinner animation, since rendering itself is blocked too.</p>" +
      "<p><b>Important rule:</b> wrapping heavy work in a Promise or <code>async</code> function does <b>not</b> make it non-blocking by itself — it only changes when the RESULT is delivered, not whether the synchronous body still hogs the thread while running.</p>" +
      "<p><b>Don't confuse it with:</b> genuinely async work (a real network request) — that doesn't block, because the waiting happens off the JS thread entirely.</p>" +
      "<p><b>When to use:</b> recognize this as the cause of a genuinely frozen UI during heavy synchronous computation.</p>" +
      "<p><b>When not to use:</b> avoid long synchronous loops on the main thread — chunk the work or use a Web Worker instead.</p>" +
      "<p class='ex-gotcha'>Wrapping heavy work in a Promise or <code>async</code> function does <b>not</b> make it non-blocking by itself — <code>async</code> only changes when a function's result is delivered, not whether its own synchronous body still hogs the single thread while running.</p>",

    "Async parallelization":
      "<p><b>Simple meaning:</b> Running independent async operations at the same time instead of one after another, so the total wait is the slowest one, not the sum of all of them.</p>" +
      "<p><b>Think of it as:</b> ordering three dishes at once so the kitchen cooks them together, instead of ordering one, waiting for it to fully arrive, then ordering the next.</p>" +
      "<p><b>Why it matters for performance:</b> this is a very common real-world async performance bug — a small mistake that can triple (or worse) an operation's total time for no reason.</p>" +
      "<p><b>How it works:</b> sequentially <code>await</code>ing several independent promises forces each to fully complete before the next starts, adding their durations together. Starting them all at once (<code>Promise.all</code>) bounds the total time by the slowest single one.</p>" +
      "<pre><code>// SEQUENTIAL — ~3 seconds if each call takes ~1s\nconst user = await fetchUser();\nconst posts = await fetchPosts();\nconst comments = await fetchComments();\n\n// PARALLEL — ~1 second, all three run concurrently\nconst [user, posts, comments] = await Promise.all([\n  fetchUser(), fetchPosts(), fetchComments()\n]);</code></pre>" +
      "<p><b>What happens:</b> in the sequential version, <code>fetchPosts()</code> isn't even called until <code>fetchUser()</code>'s promise resolves — its 1-second clock hasn't started yet. In the parallel version, all three calls happen in the same instant, inside the array passed to <code>Promise.all</code>.</p>" +
      "<p><b>Result:</b> ~3 seconds sequentially vs. ~1 second in parallel — a 3x real-world difference from a one-line change.</p>" +
      "<p><b>Important rule:</b> the most common version of this bug is <code>await</code> inside a <code>for</code> loop over independent items — map to an array of promises first, then <code>Promise.all</code> the whole array.</p>" +
      "<p><b>Don't confuse it with:</b> genuinely dependent steps, where sequential <code>await</code> is correct and necessary.</p>" +
      "<p><b>When to use:</b> whenever multiple async operations are genuinely independent of each other.</p>" +
      "<p><b>When not to use:</b> when a later step actually needs an earlier step's result.</p>" +
      "<p class='ex-gotcha'>The most common version of this performance bug is <code>await</code> inside a <code>for</code> loop over independent items — each iteration silently waits for the last to finish. If the items don't depend on each other, map to an array of promises first, then <code>Promise.all</code> the whole array at once.</p>",

    "Code splitting concept":
      "<p><b>Simple meaning:</b> Breaking one big JavaScript bundle into smaller pieces that load only when actually needed, instead of forcing every user to download all the code upfront.</p>" +
      "<p><b>Think of it as:</b> a restaurant that preps only the dishes on today's likely orders, cooking a rare special dish only if someone actually asks for it — instead of preparing the entire menu for every visitor.</p>" +
      "<p><b>Why it matters for performance:</b> a smaller initial bundle means less JavaScript to download, parse, and execute before the page becomes interactive.</p>" +
      "<p><b>How it works:</b> bundlers can split code at points marked by a dynamic <code>import()</code> call, generating separate chunk files. The initial page load only needs the entry chunk; other chunks are fetched on demand.</p>" +
      "<pre><code>const SettingsPage = React.lazy(() => import('./SettingsPage'));\n// SettingsPage's code isn't downloaded until a user actually navigates there</code></pre>" +
      "<p><b>What happens:</b> the bundler generates a separate chunk file for <code>SettingsPage</code> instead of including it in the main bundle. That chunk is only fetched over the network when a user actually navigates to that route — never for users who don't.</p>" +
      "<p><b>Result:</b> a smaller initial download for every visitor, at the cost of a small extra fetch delay the first time a split-off feature is actually used.</p>" +
      "<p><b>Important rule:</b> code splitting depends on <code>import()</code>'s dynamic, on-demand nature — it's a build-tool feature layered on top of a language feature, not something the JS engine does automatically.</p>" +
      "<p><b>Don't confuse it with:</b> lazy loading (next entry) — a closely related but broader concept applying the same idea to images and other resources too.</p>" +
      "<p><b>When to use:</b> large apps with distinct routes/features not all needed by every visitor.</p>" +
      "<p><b>When not to use:</b> for small apps where the entire bundle is already small — the added complexity isn't worth it.</p>" +
      "<p class='ex-gotcha'>Code splitting depends on <code>import()</code>'s dynamic, on-demand nature (see \"Dynamic imports\" under Modules & runtime) — it's a build-tool feature layered on top of a language feature, not something the JS engine does automatically on its own.</p>",

    "Lazy loading":
      "<p><b>Simple meaning:</b> Deferring the loading of something (a module, an image, a component) until it's actually about to be needed, rather than upfront.</p>" +
      "<p><b>Think of it as:</b> only turning on the lights in a room once someone actually walks into it, instead of lighting every room in the building all the time regardless of who's there.</p>" +
      "<p><b>Why it matters for performance:</b> not every part of a page or app is used by every visitor on every visit — loading it all eagerly wastes bandwidth and delays the parts that ARE needed immediately.</p>" +
      "<p><b>How it works:</b> lazy loading applies the same \"defer until needed\" idea across several layers: dynamic <code>import()</code> for JS modules, the native <code>loading=\"lazy\"</code> attribute for images/iframes, and route-based component splitting.</p>" +
      "<pre><code>&lt;img src=\"large-photo.jpg\" loading=\"lazy\" alt=\"\" /&gt;\n&lt;!-- browser defers fetching this until it's about to scroll into view --&gt;\n\nconst Modal = React.lazy(() => import('./Modal'));\n// Modal's code only loads the first time it's actually rendered</code></pre>" +
      "<p><b>What happens:</b> the image isn't fetched at all until the browser determines it's about to scroll into the viewport — far-below-the-fold images never load unless the user actually scrolls that far. <code>Modal</code>'s code similarly isn't downloaded until it's genuinely rendered for the first time.</p>" +
      "<p><b>Result:</b> bandwidth and initial load time saved for content the user may never actually reach.</p>" +
      "<p><b>Important rule:</b> lazy loading trades a smaller upfront cost for a small delay the first time the deferred thing is used — wrong for anything critical to the initial view.</p>" +
      "<p><b>Don't confuse it with:</b> code splitting — a specific application of this same general idea to JS module loading.</p>" +
      "<p><b>When to use:</b> images/content below the fold, or rarely-used features.</p>" +
      "<p><b>When not to use:</b> for anything critical to the initial view — lazy-loading an above-the-fold hero image causes a visible pop-in.</p>" +
      "<p class='ex-gotcha'>Lazy loading trades a smaller upfront cost for a small delay the first time the deferred thing is actually used — that trade-off is wrong for anything critical to the initial view (e.g. lazy-loading an above-the-fold hero image causes a visible pop-in); reserve it for things genuinely below the fold or rarely used.</p>",
  },

  /* ------------------------------------------------------------------ */
  "JavaScript patterns & engineering": {
    "Separation of concerns":
      "<p><b>Simple meaning:</b> Keeping different responsibilities (fetching data, transforming it, displaying it) in different, separately-testable pieces instead of tangled together in one function.</p>" +
      "<p><b>Think of it as:</b> a restaurant where the person taking orders, the cook, and the server are three different people with three focused jobs — not one person trying to do all three at once, tripping over their own responsibilities.</p>" +
      "<p><b>Why it exists:</b> a function or module that does one job is easier to test, reuse, and change without breaking unrelated behavior. Mixing concerns means a change to one responsibility risks breaking the others.</p>" +
      "<p><b>How it works:</b> split a tangled function by responsibility — fetching, transforming, and rendering each become their own named function, composed together by a thin orchestrating function.</p>" +
      "<pre><code>// BEFORE — fetch, transform, and render all tangled together\nasync function showUserCard(id) {\n  const res = await fetch('/api/users/' + id);\n  const data = await res.json();\n  const name = data.name.toUpperCase();\n  document.querySelector('#card').innerHTML = '&lt;h2&gt;' + name + '&lt;/h2&gt;';\n}\n\n// AFTER — each piece is separately testable and reusable\nasync function fetchUser(id) { const res = await fetch('/api/users/' + id); return res.json(); }\nfunction formatUserName(user) { return user.name.toUpperCase(); }\nfunction renderCard(name) { document.querySelector('#card').innerHTML = '&lt;h2&gt;' + name + '&lt;/h2&gt;'; }\n\nasync function showUserCard(id) {\n  const user = await fetchUser(id);\n  renderCard(formatUserName(user));\n}</code></pre>" +
      "<p><b>What happens:</b> in the \"before\" version, testing the name-formatting logic requires a real network call AND a real DOM. In the \"after\" version, <code>formatUserName</code> is a pure function testable with a plain object — no network, no DOM, no mocking required at all.</p>" +
      "<p><b>Result:</b> the same end behavior, but three independently testable, independently reusable pieces instead of one monolithic function.</p>" +
      "<p><b>Important rule:</b> the concrete payoff is testability, not just \"cleaner code\" as an abstract virtue — <code>formatUserName</code> can now be unit-tested with a plain object.</p>" +
      "<p><b>Don't confuse it with:</b> over-splitting — three tiny functions each called from exactly one place isn't automatically better; the split should track genuine, independently-reusable responsibilities.</p>" +
      "<p><b>When to use:</b> any function mixing network/DOM/business-logic concerns that would benefit from independent testing.</p>" +
      "<p><b>When not to use:</b> for a genuinely single-purpose, one-off script where splitting adds indirection without real reuse or testing benefit.</p>" +
      "<p class='ex-gotcha'><code>formatUserName</code> can now be unit-tested with a plain object, no network or DOM required — that's the concrete payoff, not just \"cleaner code\" as an abstract virtue.</p>",

    "Pure functions":
      "<p><b>Simple meaning:</b> A function that always gives the same output for the same input, and doesn't change anything outside itself.</p>" +
      "<p><b>Think of it as:</b> a vending machine — put in the same coins, always get the same snack, and the machine never rearranges the store's other shelves while dispensing it.</p>" +
      "<p><b>Why it exists:</b> purity makes a function easier to test, reason about, and safely optimize — its behavior is fully determined by its inputs, with nothing hidden.</p>" +
      "<p><b>How it works:</b> a pure function has no side effects (no mutating arguments, no writing to outside variables/DOM/storage) and depends only on its arguments, never on external mutable state.</p>" +
      "<pre><code>let total = 0;\nfunction addToTotal(n) { total += n; return total; } // IMPURE\n\nfunction add(a, b) { return a + b; } // PURE</code></pre>" +
      "<p><b>What happens:</b> <code>add</code>'s result depends solely on its two arguments — calling it any number of times with the same values gives the same answer forever. <code>addToTotal</code> reads and mutates the outer <code>total</code>, so calling it twice with the SAME argument gives two DIFFERENT results.</p>" +
      "<p><b>Result:</b> <code>add(2,3)</code> is always <code>5</code>; <code>addToTotal(5)</code> gives different answers on successive calls, depending on prior calls.</p>" +
      "<p><b>Important rule:</b> React reducers are required to be pure — that purity is exactly what lets React safely skip re-rendering when it can prove the output would be identical.</p>" +
      "<p><b>Don't confuse it with:</b> a function that looks pure but secretly reads a module-level variable, <code>Date.now()</code>, or <code>Math.random()</code> — that's still impure, just less obviously so.</p>" +
      "<p><b>When to use:</b> calculations, transformations, and especially React reducers/selectors.</p>" +
      "<p><b>When not to use:</b> wherever real side effects are the whole point — DOM updates, network calls, logging.</p>" +
      "<p class='ex-gotcha'>A function that looks pure but secretly reads a module-level variable, <code>Date.now()</code>, or <code>Math.random()</code> is not pure — its output silently depends on something other than its parameters, which breaks memoization and predictable testing.</p>",

    "Immutability":
      "<p><b>Simple meaning:</b> Instead of changing a value in place, you create a new value with the change applied, leaving the original untouched.</p>" +
      "<p><b>Think of it as:</b> \"track changes\" and a fresh accepted draft, instead of editing the original document directly — the old version stays intact for comparison.</p>" +
      "<p><b>Why it exists:</b> it makes state changes predictable and enables cheap, reference-based change detection — React (and similar libraries) rely on this directly.</p>" +
      "<p><b>How it works:</b> immutable updates replace mutation with the creation of a new object/array, so the old reference remains a valid, unchanged snapshot.</p>" +
      "<pre><code>// MUTATING — React can't tell this changed (same reference)\nfunction addItem(state, item) {\n  state.items.push(item);\n  return state;\n}\n\n// IMMUTABLE — new reference, change detection works\nfunction addItem(state, item) {\n  return { ...state, items: [...state.items, item] };\n}</code></pre>" +
      "<p><b>What happens:</b> the mutating version pushes directly into <code>state.items</code> and returns the SAME <code>state</code> object — a fast reference-equality check (<code>oldState === newState</code>) sees no change at all. The immutable version builds a genuinely new object, so the reference check correctly detects a change.</p>" +
      "<p><b>Result:</b> the mutating version can silently fail to trigger a re-render, even though the data really did change; the immutable version re-renders correctly.</p>" +
      "<p><b>Important rule:</b> mutating state in place keeps the same reference, so a fast <code>===</code> check reports \"unchanged\" even though the data really did change — the classic \"my component won't re-render\" bug.</p>" +
      "<p><b>Don't confuse it with:</b> a rule to follow everywhere blindly — a purely local variable inside a tight algorithm can often be mutated freely with zero downside.</p>" +
      "<p><b>When to use:</b> anywhere change-detection or predictable history (undo, time-travel debugging) depends on comparing references.</p>" +
      "<p><b>When not to use:</b> inside a short-lived local algorithm where no shared state can observe the mutation.</p>" +
      "<p class='ex-gotcha'>Immutability isn't a rule to follow everywhere blindly — a purely local variable inside a tight algorithm can often be mutated freely with zero downside. It matters specifically wherever change-detection or predictable history (undo, time-travel debugging) depends on comparing references.</p>",

    "Functional programming concepts":
      "<p><b>Simple meaning:</b> A style of writing code around functions that transform data, favoring composition and avoiding shared mutable state, over step-by-step instructions that mutate things as they go.</p>" +
      "<p><b>Think of it as:</b> describing WHAT you want (\"the adults, by name\") rather than dictating HOW to get there step by step (\"loop, check each one, push matching names\") — declarative vs. imperative.</p>" +
      "<p><b>Why it exists:</b> declarative, composed transformations tend to be shorter, easier to reason about, and less prone to the bugs that come from manually tracking mutable state through a loop.</p>" +
      "<p><b>How it works:</b> core ideas include functions as first-class values, higher-order functions (<code>map</code>/<code>filter</code>/<code>reduce</code>), pure functions with no side effects, and declarative over imperative code.</p>" +
      "<pre><code>// IMPERATIVE — describes HOW, step by step, with mutation\nconst adults = [];\nfor (let i = 0; i < users.length; i++) {\n  if (users[i].age >= 18) adults.push(users[i].name);\n}\n\n// DECLARATIVE / FUNCTIONAL — describes WHAT\nconst adults = users.filter(u => u.age >= 18).map(u => u.name);</code></pre>" +
      "<p><b>What happens:</b> the imperative version manually manages a mutable accumulator array and an index, spelling out every step. The functional version chains two declarative operations — \"keep the adults, then get their names\" — with no manual index or mutable accumulator visible at all.</p>" +
      "<p><b>Result:</b> the exact same final array, produced by two different styles — one describing steps, the other describing intent.</p>" +
      "<p><b>Important rule:</b> JavaScript is not a purely functional language — it's multi-paradigm, and supports functional patterns rather than enforcing them.</p>" +
      "<p><b>Don't confuse it with:</b> forcing every piece of code into a functional style — a simple loop is sometimes clearer than a contorted chain of five array methods.</p>" +
      "<p><b>When to use:</b> data transformations that naturally chain — filtering, mapping, reducing collections.</p>" +
      "<p><b>When not to use:</b> when a plain loop is genuinely more readable than a forced functional chain.</p>" +
      "<p class='ex-gotcha'>JavaScript is not a purely functional language — it's a multi-paradigm language that <em>supports</em> functional patterns. Don't force every piece of code into a functional style; a simple loop is sometimes clearer than a contorted chain of five array methods.</p>",

    "Composition":
      "<p><b>Simple meaning:</b> Building complex behavior by combining small, focused functions (or objects) together, rather than one large function or a deep inheritance chain.</p>" +
      "<p><b>Think of it as:</b> an assembly line — each station does one small, focused job, and the finished product emerges from the sequence without any single station needing to understand the whole process.</p>" +
      "<p><b>Why it exists:</b> to build complex behavior from small, individually testable, individually reusable pieces instead of one large tangled function.</p>" +
      "<p><b>How it works:</b> function composition chains single-purpose functions so one's output feeds the next's input, typically implemented with a <code>pipe</code>/<code>compose</code> helper built on <code>reduce</code>.</p>" +
      "<pre><code>const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);\n\nconst trim = s => s.trim();\nconst lower = s => s.toLowerCase();\nconst removeSpaces = s => s.replace(/\\s+/g, '-');\n\nconst slugify = pipe(trim, lower, removeSpaces);\nslugify('  Hello World  '); // 'hello-world'</code></pre>" +
      "<p><b>What happens:</b> <code>pipe</code> runs each function left-to-right, feeding each one's output as the next one's input — <code>trim</code> first, then <code>lower</code>, then <code>removeSpaces</code> — building the final result through a sequence of small, independently-testable steps.</p>" +
      "<p><b>Result:</b> <code>'hello-world'</code> — three tiny functions combined into one pipeline, none of which needs to know about the others.</p>" +
      "<p><b>Important rule:</b> Express middleware IS composition — each middleware handles one concern and calls <code>next()</code> to hand off to the next piece, rather than one giant handler doing everything.</p>" +
      "<p><b>Don't confuse it with:</b> composing endlessly for its own sake — composition is a tool for clarity, not a goal to maximize; stop when the pipeline becomes harder to read than the code it replaced.</p>" +
      "<p><b>When to use:</b> when data naturally flows through a sequence of independent transformations.</p>" +
      "<p><b>When not to use:</b> when a plain, step-by-step function body would be easier to follow.</p>" +
      "<p class='ex-gotcha'>Composing too many tiny functions deep can actually hurt readability and make stack traces harder to follow — composition is a tool for clarity, not a goal to maximize; stop composing when the pipeline itself becomes harder to read than the code it replaced.</p>",

    "Factory pattern":
      "<p><b>Simple meaning:</b> A function whose whole job is to create and configure objects for you, so callers don't need to know the construction details.</p>" +
      "<p><b>Think of it as:</b> ordering a custom-built item from a shop — you specify what you want, and the shop handles all the assembly details you never have to think about.</p>" +
      "<p><b>Why it exists:</b> to hide object-construction logic — defaults, configuration, variant selection — behind a simple function call.</p>" +
      "<p><b>How it works:</b> a factory function encapsulates object creation logic and returns a ready-to-use object, without requiring <code>new</code> or exposing the object's internal construction.</p>" +
      "<pre><code>function createApiClient(baseUrl, { timeout = 5000, retries = 3 } = {}) {\n  return {\n    get: (path) => fetch(baseUrl + path, { timeout }),\n  };\n}\n\nconst client = createApiClient('https://api.example.com', { retries: 5 });\n// caller never has to know HOW the client is assembled internally</code></pre>" +
      "<p><b>What happens:</b> the caller supplies just the essentials — a base URL and an override — and <code>createApiClient</code> handles applying defaults and assembling the final object internally. The caller never sees or needs to understand that assembly logic.</p>" +
      "<p><b>Result:</b> a ready-to-use, fully-configured client object, with all construction complexity hidden behind one function call.</p>" +
      "<p><b>Important rule:</b> don't reach for a factory just to wrap a trivial object literal with no real setup logic — it earns its place when there's actual configuration or defaulting work.</p>" +
      "<p><b>Don't confuse it with:</b> a constructor function/class — a factory returns a plain object without <code>new</code>, and can more flexibly return different shapes based on input.</p>" +
      "<p><b>When to use:</b> creating configured service/client objects with real defaults or variant-selection logic.</p>" +
      "<p><b>When not to use:</b> for trivial object literals with no real construction complexity to hide.</p>" +
      "<p class='ex-gotcha'>Don't reach for a factory just to wrap a trivial object literal with no real setup logic — it earns its place when there's actual configuration, defaulting, or variant-selection work to hide from the caller.</p>",

    "Module pattern":
      "<p><b>Simple meaning:</b> Using a function's private scope (a closure) to hide internal details, exposing only a small, deliberate public interface.</p>" +
      "<p><b>Think of it as:</b> a vending machine's locked internals versus its coin slot and dispensing tray — you interact only through the small, intentional interface; the mechanism inside is completely unreachable.</p>" +
      "<p><b>Why it exists:</b> to give private state and helper functions before ES modules existed as a language-level way to do the same thing per-file.</p>" +
      "<p><b>How it works:</b> the classic module pattern wraps state and helper functions inside an IIFE, returning only the object of methods meant to be public — anything not returned is permanently unreachable from outside.</p>" +
      "<pre><code>const Counter = (function () {\n  let count = 0; // truly private — no outside access\n  return {\n    increment() { return ++count; },\n    reset() { count = 0; }\n  };\n})();\n\nCounter.increment(); // 1\nCounter.count;       // undefined — not exposed</code></pre>" +
      "<p><b>What happens:</b> <code>count</code> lives only inside the IIFE's closure — the returned object never includes it directly, so there's no way to reach it from outside except through the deliberately exposed <code>increment</code>/<code>reset</code> methods.</p>" +
      "<p><b>Result:</b> a genuinely private counter, only mutable through the sanctioned interface — <code>Counter.count</code> returns <code>undefined</code>, proving it was never exposed.</p>" +
      "<p><b>Important rule:</b> ES modules have largely superseded this pattern for organizing whole files — a module's top-level variables are private automatically, without needing an IIFE wrapper.</p>" +
      "<p><b>Don't confuse it with:</b> ES module privacy — this pattern is still genuinely useful <em>inside</em> a file, for privacy at the object/closure level, distinct from file-level module privacy.</p>" +
      "<p><b>When to use:</b> private state at the object/closure level, or in contexts predating ES modules.</p>" +
      "<p><b>When not to use:</b> for whole-file organization — ES modules handle that natively now.</p>" +
      "<p class='ex-gotcha'>ES modules have largely superseded this pattern for organizing whole files — a module's top-level variables are private to that file automatically, without needing an IIFE wrapper. The pattern is still genuinely useful <em>inside</em> a file, for privacy at the object/closure level (see \"Encapsulation concepts\" under this, objects &amp; prototypes).</p>",

    "Strategy pattern":
      "<p><b>Simple meaning:</b> Instead of one function with a big <code>if</code>/<code>switch</code> chain choosing behavior, you plug in a small, swappable \"strategy\" function that defines the behavior.</p>" +
      "<p><b>Think of it as:</b> a universal charging dock that accepts any swappable adapter, instead of a device permanently wired for exactly one specific plug shape — adding support for a new plug means adding a new adapter, not rewiring the dock.</p>" +
      "<p><b>Why it exists:</b> to avoid repeatedly editing a growing central function every time a new case needs to be supported.</p>" +
      "<p><b>How it works:</b> the calling code depends only on a common interface, while the actual behavior is selected and passed in — new strategies can be added without modifying the code that uses them.</p>" +
      "<pre><code>// BEFORE — a growing if/else chain\nfunction validate(type, value) {\n  if (type === 'email') return value.includes('@');\n  if (type === 'phone') return /^\\d{10}$/.test(value);\n  // every new type means editing this function again\n}\n\n// AFTER — strategies are swappable, independent functions\nconst validators = {\n  email: v => v.includes('@'),\n  phone: v => /^\\d{10}$/.test(v),\n};\nfunction validate(type, value) { return validators[type](value); }\n// adding 'creditCard' means adding one entry — validate() never changes</code></pre>" +
      "<p><b>What happens:</b> the \"before\" version requires editing <code>validate</code>'s body directly for every new type. The \"after\" version's <code>validate</code> function never changes — adding a new validation type is purely an addition to the <code>validators</code> object.</p>" +
      "<p><b>Result:</b> the core dispatch function stays stable and untouched as new cases are added — only new, independent strategy entries are added.</p>" +
      "<p><b>Important rule:</b> the payoff is specifically avoiding repeated edits to a central function as cases grow — for two or three cases that will never grow, a plain <code>if</code> is simpler.</p>" +
      "<p><b>Don't confuse it with:</b> over-engineering a small, fixed, never-growing set of cases — the pattern earns its keep specifically as the case count grows or changes.</p>" +
      "<p><b>When to use:</b> swapping validators/formatters/handlers instead of a growing <code>if</code>/<code>else</code> chain.</p>" +
      "<p><b>When not to use:</b> for two or three cases that will genuinely never grow — a plain conditional is simpler.</p>" +
      "<p class='ex-gotcha'>This pattern's payoff is specifically <em>avoiding repeated edits</em> to a central function as cases grow — for two or three cases that will never grow, a plain <code>if</code>/<code>switch</code> is simpler and the pattern is overkill.</p>",

    "Observer pattern":
      "<p><b>Simple meaning:</b> One or more \"listeners\" subscribe to be notified whenever something happens, without the thing that happens needing to know who's listening.</p>" +
      "<p><b>Think of it as:</b> a newsletter — subscribers sign up once, and the publisher sends updates to whoever's currently subscribed, without ever needing to know who those subscribers actually are ahead of time.</p>" +
      "<p><b>Why it exists:</b> to decouple the source of an event from whatever reacts to it, so new reactions can be added without touching the source.</p>" +
      "<p><b>How it works:</b> a subject maintains a list of subscriber callbacks; when a relevant event occurs, it iterates the list and invokes each one.</p>" +
      "<pre><code>class EventBus {\n  #listeners = {};\n  on(event, callback) { (this.#listeners[event] ??= []).push(callback); }\n  emit(event, data) { (this.#listeners[event] || []).forEach(cb => cb(data)); }\n}\n\nconst bus = new EventBus();\nbus.on('userLoggedIn', user => console.log(user.name + ' logged in'));\nbus.emit('userLoggedIn', { name: 'Ada' }); // 'Ada logged in'</code></pre>" +
      "<p><b>What happens:</b> <code>on</code> registers a callback under a named event, without either side knowing about the other's implementation. <code>emit</code> later runs every registered callback for that event name — the emitting code has no idea who, or how many, are listening.</p>" +
      "<p><b>Result:</b> <code>'Ada logged in'</code> logs — the event source and the reaction are fully decoupled, connected only by the shared event name.</p>" +
      "<p><b>Important rule:</b> forgetting to unsubscribe a listener you no longer need is a classic memory leak — the subject keeps a reference to the callback forever.</p>" +
      "<p><b>Don't confuse it with:</b> a direct function call — observers are specifically for one-to-many, decoupled notification, not a simple synchronous call.</p>" +
      "<p><b>When to use:</b> the pub/sub model behind <code>addEventListener</code>, Node's <code>EventEmitter</code>, React state subscriptions.</p>" +
      "<p><b>When not to use:</b> for simple, direct one-to-one function calls where the decoupling adds no real value.</p>" +
      "<p class='ex-gotcha'>Forgetting to unsubscribe a listener you no longer need is a classic memory leak — the subject keeps a reference to the callback (and anything it closes over) forever, even after the subscriber should have gone away.</p>",

    "Dependency injection concept":
      "<p><b>Simple meaning:</b> Instead of a function reaching out and grabbing what it needs itself (importing a database, creating a logger), you hand those dependencies to it as arguments.</p>" +
      "<p><b>Think of it as:</b> a chef who's handed exactly the ingredients they need for today's dish, versus a chef who insists on personally growing their own vegetables before they can cook anything — the second chef is much harder to test with a substitute ingredient.</p>" +
      "<p><b>Why it exists:</b> it's what makes code testable without hitting a real database, network, or filesystem — you simply pass in a fake/mock version of the dependency instead.</p>" +
      "<p><b>How it works:</b> dependency injection inverts control of dependency creation — the function receives its collaborators from the caller, rather than instantiating or importing them internally.</p>" +
      "<pre><code>// WITHOUT injection — hardcoded, hard to test\nconst db = require('./realDatabase');\nfunction getUser(id) { return db.query('SELECT * FROM users WHERE id = ?', id); }\n\n// WITH injection — the dependency is a parameter\nfunction getUser(db, id) { return db.query('SELECT * FROM users WHERE id = ?', id); }\n\nconst fakeDb = { query: () => ({ id: 1, name: 'Test User' }) };\ngetUser(fakeDb, 1); // no real database needed for the test</code></pre>" +
      "<p><b>What happens:</b> the \"without\" version has <code>db</code> hardwired into the module — every call, including in tests, hits the real database. The \"with\" version accepts <code>db</code> as a parameter, so a test can substitute a fake object with no real database connection at all.</p>" +
      "<p><b>Result:</b> the same function logic, but genuinely testable in isolation — no real database required for the test to run.</p>" +
      "<p><b>Important rule:</b> the real selling point, worth remembering over any abstract definition — dependency injection is what makes code testable, full stop.</p>" +
      "<p><b>Don't confuse it with:</b> a dependency injection FRAMEWORK — the concept here is just \"pass dependencies as parameters,\" no special library required.</p>" +
      "<p><b>When to use:</b> any function whose real dependency (database, network, filesystem) makes it hard to test in isolation.</p>" +
      "<p><b>When not to use:</b> for genuinely stateless utility functions with no external dependency to substitute.</p>" +
      "<p class='ex-gotcha'>This is the real selling point, worth remembering over any abstract definition: <b>dependency injection is what makes code testable</b> without hitting a real database, network, or filesystem — you simply pass in a fake/mock version of the dependency instead.</p>",

    "Defensive programming":
      "<p><b>Simple meaning:</b> Validating inputs at the boundaries of your program so bad data is caught early with a clear error, instead of causing a confusing failure somewhere else entirely.</p>" +
      "<p><b>Think of it as:</b> a security checkpoint at the building entrance — check credentials once at the door, then let people move freely inside without re-checking IDs at every single internal door too.</p>" +
      "<p><b>Why it exists:</b> to fail fast at trust boundaries, so an invalid input is caught immediately, near its true source, instead of surfacing as a confusing failure much later and far away.</p>" +
      "<p><b>How it works:</b> check preconditions and throw clear, specific errors immediately when they're violated, rather than letting invalid data silently propagate deeper into the system.</p>" +
      "<pre><code>function createUser({ email, age }) {\n  if (typeof email !== 'string' || !email.includes('@')) {\n    throw new Error('createUser: a valid email is required');\n  }\n  if (typeof age !== 'number' || age < 0) {\n    throw new Error('createUser: age must be a non-negative number');\n  }\n  // from here on, the rest of the function can safely trust its inputs\n}</code></pre>" +
      "<p><b>What happens:</b> bad input is rejected immediately, at the exact boundary where untrusted data enters the function — with a clear, specific error message naming exactly what went wrong.</p>" +
      "<p><b>Result:</b> a caller passing invalid data gets an immediate, clear failure right at the source — not a mysterious crash somewhere deep inside unrelated code much later.</p>" +
      "<p><b>Important rule:</b> guard the <em>edges</em> — user input, API boundaries, public function arguments — and then trust the interior; over-guarding internal calls just hides real bugs.</p>" +
      "<p><b>Don't confuse it with:</b> over-defensive code — catching and silently ignoring every possible error is often worse than no defense at all.</p>" +
      "<p><b>When to use:</b> validating user input, external API responses, and public function arguments at trust boundaries.</p>" +
      "<p><b>When not to use:</b> internal calls between code you fully control — trust the interior once the edges are validated.</p>" +
      "<p class='ex-gotcha'>Over-defensive code that catches and silently ignores every possible error is often worse than no defense at all — a bug that fails loudly and immediately at its source is far easier to fix than one that gets silently swallowed three layers deep and resurfaces as a mystery somewhere else.</p>",

    "Error boundaries at application level":
      "<p><b>Simple meaning:</b> A single, deliberate place where unexpected errors are caught and handled gracefully, instead of scattering try/catch everywhere or letting one failure crash the whole app.</p>" +
      "<p><b>Think of it as:</b> a circuit breaker for a whole floor of a building, instead of a separate fuse wired into every single lamp — one well-placed breaker protects everything downstream of it without needing individual protection everywhere.</p>" +
      "<p><b>Why it exists:</b> to contain failures at a deliberate boundary, so one broken component or route doesn't take down the entire application.</p>" +
      "<p><b>How it works:</b> different layers of a MERN app have their own boundary mechanism — React <b>error boundaries</b> catch rendering errors in their child tree; Express uses dedicated <b>error-handling middleware</b> — a function with the signature <code>(err, req, res, next)</code> — to catch errors from route handlers in one place.</p>" +
      "<pre><code>app.use((err, req, res, next) => {\n  console.error(err);\n  res.status(500).json({ error: 'Something went wrong' });\n});\n\napp.get('/users/:id', async (req, res, next) => {\n  try {\n    const user = await db.findUser(req.params.id);\n    res.json(user);\n  } catch (err) {\n    next(err); // forwarded to the boundary above\n  }\n});</code></pre>" +
      "<p><b>What happens:</b> the route handler catches its own error and forwards it via <code>next(err)</code> — Express recognizes the 4-parameter signature and routes it specifically to the error-handling middleware, which formats and sends the response in ONE central place.</p>" +
      "<p><b>Result:</b> every route can rely on the same centralized error formatting, without duplicating response logic in each individual route handler.</p>" +
      "<p><b>Important rule:</b> the whole point is catching at the <b>boundary</b>, not everywhere — one React error boundary around a feature area, one Express middleware at the end of the chain.</p>" +
      "<p><b>Don't confuse it with:</b> a try/catch wrapped around every single component or route individually — that's the anti-pattern this concept specifically avoids.</p>" +
      "<p><b>When to use:</b> one boundary per meaningful feature area or app-wide route chain.</p>" +
      "<p><b>When not to use:</b> wrapping every individual component/route with its own separate error handling — that's redundant duplication.</p>" +
      "<p class='ex-gotcha'>The whole point is catching at the <b>boundary</b>, not everywhere — one React error boundary around a feature area, one Express error-handling middleware at the end of the chain, rather than a try/catch wrapped around every single component or route individually.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Advanced JavaScript": {
    "Closures in depth":
      "<p><b>Simple meaning:</b> A closure is a function that remembers the variables from the scope it was created in, even after that outer scope has finished running.</p>" +
      "<p><b>Think of it as:</b> a backpack a function carries with it — packed with the variables that existed when it was born — that it keeps with it forever, even after leaving the room (the outer function call) where it was packed.</p>" +
      "<p><b>Why it exists:</b> it's a direct consequence of lexical scope — the language never severs a function's connection to its birth scope, and that turns out to be extremely useful for private state and factory functions.</p>" +
      "<p><b>How it works:</b> when a function is created, it keeps a live reference to its enclosing lexical environment, not a snapshot — so it can read and even update those outer variables long after the function that created it has returned.</p>" +
      "<pre><code>function makeCounter() {\n  let count = 0; // private — no way to reach it from outside\n  return () => ++count;\n}\nconst a = makeCounter();\nconst b = makeCounter();\na(); a(); // 1, 2\nb();      // 1 — a completely independent closure, its own 'count'\n\nfor (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 3, 3, 3\nfor (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 0, 1, 2</code></pre>" +
      "<p><b>What happens:</b> each call to <code>makeCounter()</code> creates a fresh <code>count</code>, so <code>a</code> and <code>b</code> are independent closures. In the loop, <code>var</code> is function-scoped, so all three callbacks close over the exact same single <code>i</code>, whose final value is <code>3</code> by the time any callback runs — <code>let</code> instead creates a fresh binding for <em>each iteration</em>.</p>" +
      "<p><b>Result:</b> <code>a()</code>, <code>a()</code> give <code>1, 2</code>; <code>b()</code> starts fresh at <code>1</code>. The <code>var</code> loop logs <code>3, 3, 3</code>; the <code>let</code> loop logs <code>0, 1, 2</code>.</p>" +
      "<p><b>Important rule:</b> a closure keeps its <em>entire</em> enclosing scope reachable, not just the one variable you use — this is directly why closures can cause memory leaks if they capture something large and are kept alive longer than intended.</p>" +
      "<p><b>Don't confuse it with:</b> simply nesting functions — every nested function technically forms a closure, but the term is usually reserved for when the inner function outlives the outer one's call.</p>" +
      "<p><b>When to use:</b> private state, factory functions, and any callback that needs to remember something from its creation context.</p>" +
      "<p><b>When not to use:</b> watch for the classic <code>var</code>-in-a-loop bug when using closures inside asynchronous callbacks.</p>" +
      "<p class='ex-gotcha'>A closure keeps its <em>entire</em> enclosing scope reachable, not just the one variable you use — this is directly why closures can cause memory leaks if they capture something large and are kept alive longer than intended (see \"Memory leaks\").</p>",

    "Lexical environment":
      "<p><b>Simple meaning:</b> The internal structure JavaScript uses to keep track of a scope's variables and how to find variables from an outer scope.</p>" +
      "<p><b>Think of it as:</b> a labeled index card for one scope, holding that scope's variables plus a pointer to the index card behind it — NOT a function storing variables \"inside itself,\" which is the common but inaccurate simplification.</p>" +
      "<p><b>Why it exists:</b> the engine needs a precise structure to resolve variable names correctly and predictably — this is the internal mechanism that makes lexical scope and closures actually work.</p>" +
      "<p><b>How it works:</b> a lexical environment holds a record of the variable bindings declared in that scope, plus a reference to the <em>outer</em> lexical environment. Multiple calls to the same function each get their own fresh environment.</p>" +
      "<pre><code>function outer() {\n  const msg = 'hi'; // lives in outer's lexical environment\n  return function inner() {\n    return msg; // inner's environment has NO 'msg' of its own —\n                // it looks outward to outer's environment and finds it there\n  };\n}\nconsole.log(outer()()); // 'hi'</code></pre>" +
      "<p><b>What happens:</b> <code>inner</code>'s own lexical environment is essentially empty of its own variables — when it reads <code>msg</code>, it doesn't find it locally, so it follows the pointer to <code>outer</code>'s environment and finds it there instead.</p>" +
      "<p><b>Result:</b> <code>'hi'</code> — <code>inner</code> successfully reads a variable it never declared itself, purely through the environment chain.</p>" +
      "<p><b>Important rule:</b> which outer environment a function is linked to is determined by <em>where the function is written in the source code</em>, not by how or where it's later called.</p>" +
      "<p><b>Don't confuse it with:</b> <code>this</code> — <code>this</code> is resolved dynamically at <b>call time</b>; the lexical environment (and therefore ordinary variable lookup) is fixed at <b>definition time</b>. That contrast is the single most important thing to remember here.</p>" +
      "<p><b>When to use:</b> this is the mental model underlying every closure — reach for it when reasoning about what a nested function can and cannot see.</p>" +
      "<p><b>When not to use:</b> n/a — this happens automatically for every function; there's nothing to opt into.</p>" +
      "<p class='ex-gotcha'>Don't confuse this with <code>this</code> — <code>this</code> is resolved dynamically at <b>call time</b> based on how a function is invoked; the lexical environment (and therefore ordinary variable lookup) is fixed at <b>definition time</b> based on where the code was written. That contrast is the single most important thing to remember here.</p>",

    "Execution contexts":
      "<p><b>Simple meaning:</b> The environment JavaScript sets up every time a function runs — it holds that call's local variables, its <code>this</code>, and a link to the outer scope.</p>" +
      "<p><b>Think of it as:</b> a fresh folder created for every single function call, holding that call's own notes, plus a sticky note answering \"who is <code>this</code>?\" for this particular call.</p>" +
      "<p><b>Why it exists:</b> the engine needs somewhere to keep each call's state independent, so calling the same function twice doesn't mix up the two calls' variables.</p>" +
      "<p><b>How it works:</b> each execution context goes through a <b>creation phase</b> (hoisting: variable/function declarations are set up, <code>this</code> is determined) before the <b>execution phase</b> (code actually runs line by line).</p>" +
      "<pre><code>console.log(a); // undefined, not an error — 'var a' was hoisted in the creation phase\nvar a = 5;\nconsole.log(a); // 5 — now the execution phase has run the assignment</code></pre>" +
      "<p><b>What happens:</b> before any line runs, the creation phase already knows about <code>var a</code> and has defaulted it to <code>undefined</code>. Only when the execution phase reaches the actual assignment line does <code>a</code> get its real value of <code>5</code>.</p>" +
      "<p><b>Result:</b> <code>undefined</code>, then <code>5</code> — two different states of the same variable, visible depending on which phase's work has completed so far.</p>" +
      "<p><b>Important rule:</b> \"hoisting\" isn't magic code-reordering — it's the creation phase setting up (but not assigning) declarations before the execution phase runs any actual statements.</p>" +
      "<p><b>Don't confuse it with:</b> the call stack — the execution context is the state <em>for one call</em>; the call stack is the ordered list of currently-active execution contexts.</p>" +
      "<p><b>When to use:</b> use this model when debugging <code>this</code> issues, closures, and hoisting-related surprises.</p>" +
      "<p><b>When not to use:</b> n/a — this happens automatically on every function call.</p>" +
      "<p class='ex-gotcha'>\"Hoisting\" isn't magic code-reordering — it's simply that the creation phase sets up (but doesn't yet assign) declarations before the execution phase runs any actual statements, which is why a <code>var</code> exists as <code>undefined</code> before its assignment line, but a <code>let</code>/<code>const</code> exists in an inaccessible \"temporal dead zone\" until its own line runs.</p>",

    "Scope chain":
      "<p><b>Simple meaning:</b> When a variable isn't found in the current scope, JavaScript keeps looking outward, one enclosing scope at a time, until it finds it or runs out of scopes.</p>" +
      "<p><b>Think of it as:</b> asking a question in a small room, and if no one there knows, the question automatically travels to the next room out, and the next, until someone answers or you run out of rooms.</p>" +
      "<p><b>Why it exists:</b> to let inner code naturally read from outer scopes without any special syntax — the basis of closures and how ordinary variable lookup works at every level.</p>" +
      "<p><b>How it works:</b> the scope chain is the sequence of lexical environments — current, then its outer, then its outer's outer, up to global — searched in order to resolve a variable reference. This chain is fixed at the point a function is <em>defined</em>.</p>" +
      "<pre><code>const x = 'global';\nfunction outer() {\n  const y = 'outer';\n  function inner() {\n    const z = 'inner';\n    console.log(z, y, x); // 'inner' 'outer' 'global' — each found by walking outward\n  }\n  inner();\n}\nouter();</code></pre>" +
      "<p><b>What happens:</b> <code>z</code> is found immediately in <code>inner</code>'s own scope. <code>y</code> isn't found locally, so the search walks out to <code>outer</code>'s scope and finds it there. <code>x</code> isn't found in either, so the search continues all the way to global scope.</p>" +
      "<p><b>Result:</b> <code>'inner' 'outer' 'global'</code> — three variables resolved from three different scope levels, in one single log statement.</p>" +
      "<p><b>Important rule:</b> the scope chain is resolved <b>lexically</b> — fixed by where a function is <em>written</em> — while <code>this</code> is resolved dynamically, based on how a function is <em>called</em>.</p>" +
      "<p><b>Don't confuse it with:</b> the prototype chain — a similar \"keep walking outward\" idea, but for object property lookup, not variable name resolution.</p>" +
      "<p><b>When to use:</b> reason about it whenever a nested function reads an outer variable.</p>" +
      "<p><b>When not to use:</b> n/a — this happens automatically for every variable lookup.</p>" +
      "<p class='ex-gotcha'>An inner scope can shadow (reuse the same name as) an outer variable — the scope chain search stops at the <em>first</em> match found, so the inner declaration wins and the outer one becomes unreachable from inside that inner scope.</p>",

    "Garbage collection concepts":
      "<p><b>Simple meaning:</b> JavaScript automatically frees memory for objects your program can no longer reach — you don't manually free anything yourself.</p>" +
      "<p><b>Think of it as:</b> a librarian who periodically walks the whole library starting from the front desk (the roots), marking every book that's reachable by following a chain of references — anything left unmarked afterward gets recycled.</p>" +
      "<p><b>Why it exists:</b> manual memory management (as in C) is error-prone; automatic collection removes that entire class of bugs, at the cost of some control over exactly when memory is freed.</p>" +
      "<p><b>How it works:</b> modern engines use <b>mark-and-sweep</b> — starting from a set of \"roots\" (global variables, currently-running function scopes), the collector marks every object reachable by following references, then frees everything left unmarked.</p>" +
      "<pre><code>let obj = { data: 'large' };\nobj = null; // no more references point to the original object\n// it's now unreachable from any root — eligible for garbage collection</code></pre>" +
      "<p><b>What happens:</b> before the reassignment, <code>obj</code> was a live reference keeping the object reachable from the root (the global scope). After <code>obj = null</code>, nothing in the program references that original object anymore — the mark phase simply never reaches it.</p>" +
      "<p><b>Result:</b> the object becomes eligible for collection — the memory isn't necessarily freed instantly, but it's no longer protected from being reclaimed.</p>" +
      "<p><b>Important rule:</b> JS uses reachability, not simple reference counting — reference counting alone fails on circular references, but mark-and-sweep correctly identifies unreachable cycles as garbage.</p>" +
      "<p><b>Don't confuse it with:</b> reference counting — a different (and, for JS, not the primary) strategy that would incorrectly keep two mutually-referencing but otherwise-unreachable objects alive forever.</p>" +
      "<p><b>When to use:</b> understanding this explains why circular references between two otherwise-orphaned objects don't leak in JavaScript.</p>" +
      "<p><b>When not to use:</b> n/a — GC runs automatically; you can't manually trigger or control it from ordinary code.</p>" +
      "<p class='ex-gotcha'>A common misconception is that JS uses simple reference counting — it doesn't (or at least, not as the primary strategy). Reference counting alone fails on circular references (two objects only pointing at each other, but unreachable from any root); mark-and-sweep correctly identifies such cycles as garbage since neither is reachable from a root, even though they reference each other.</p>",

    "Memory leaks":
      "<p><b>Simple meaning:</b> Memory that's no longer needed but stays \"reachable\" anyway, so the garbage collector can never free it — the program's memory usage quietly grows over time.</p>" +
      "<p><b>Think of it as:</b> the library never actually loses a book, but someone keeps an old, forgotten IOU slip referencing it — as long as that slip exists, the librarian's mark-and-sweep walk keeps finding a path to the book, and it can never be recycled.</p>" +
      "<p><b>Why it happens:</b> a leak happens when a reference chain accidentally keeps an object reachable from a root longer than intended — the object itself isn't broken, the program simply forgot to let go of a reference to it.</p>" +
      "<p><b>How it works — three common causes:</b></p>" +
      "<pre><code>// 1. Forgotten timers — the closure (and anything it captures) lives forever\nsetInterval(() => { /* uses some captured data */ }, 1000); // never cleared\n\n// 2. Listeners never removed\nel.addEventListener('click', handleClick); // el removed from DOM, but\n                                            // the listener reference keeps it \"reachable\"\n\n// 3. An ever-growing cache with no eviction\nconst cache = {};\nfunction store(key, data) { cache[key] = data; } // grows forever, nothing ever removed</code></pre>" +
      "<p><b>What happens:</b> in each case, a reference to something that logically \"should\" be discardable is quietly kept alive by an unrelated mechanism — an active timer, a still-registered listener, or an unbounded cache — none of which the mark-and-sweep collector has any way to know is \"unintended.\"</p>" +
      "<p><b>Result:</b> memory usage grows steadily over the program's lifetime, with no single dramatic failure — until it eventually causes real performance problems or crashes.</p>" +
      "<p><b>Important rule:</b> a \"detached DOM node\" leak is a classic browser-specific case — removing an element from the visible page does NOT free its memory if JavaScript still holds a reference to it somewhere.</p>" +
      "<p><b>Don't confuse it with:</b> a genuinely large but intentionally-retained object — a leak specifically means memory retained by <em>accident</em>, not deliberate caching with a real eviction strategy.</p>" +
      "<p><b>When to use:</b> recognize these three patterns when diagnosing steadily-growing memory usage.</p>" +
      "<p><b>When not to use:</b> n/a — these are bugs to avoid, not techniques.</p>" +
      "<p class='ex-gotcha'>A \"detached DOM node\" leak is a classic browser-specific case: removing an element from the visible page (<code>el.remove()</code>) does NOT free its memory if JavaScript still holds a reference to it somewhere (a variable, a closure, an event listener) — the node is gone from the page but still fully alive in memory.</p>",

    "WeakMap/WeakSet use cases":
      "<p><b>Simple meaning:</b> Like <code>Map</code>/<code>Set</code>, but they hold their object keys/values <b>weakly</b> — meaning that reference alone won't stop the garbage collector from freeing that object.</p>" +
      "<p><b>Think of it as:</b> a sticky note attached to a physical object rather than a card in a permanent filing cabinet — throw the object away, and the note goes with it; you don't have to separately remember to remove the note first.</p>" +
      "<p><b>Why it exists:</b> for attaching extra data to an object (caching, metadata, private state) without preventing that object from ever being garbage collected once the rest of the program is done with it.</p>" +
      "<p><b>How it works:</b> <code>WeakMap</code> keys (and <code>WeakSet</code> members) must be objects, are held with a \"weak\" reference that doesn't count toward reachability, are not iterable, and have no <code>.size</code>.</p>" +
      "<pre><code>let user = { name: 'Ada' };\nconst metadata = new WeakMap();\nmetadata.set(user, { lastLogin: Date.now() });\n\nuser = null; // no other references to the original object exist now\n// the WeakMap entry (and its value) becomes eligible for garbage collection too —\n// a REGULAR Map would have kept the object alive forever via its strong key reference</code></pre>" +
      "<p><b>What happens:</b> once <code>user</code> is nulled and nothing else references the original object, the <code>WeakMap</code>'s entry for it doesn't keep the object alive — its weak reference doesn't count for reachability, unlike a regular <code>Map</code>'s strong reference.</p>" +
      "<p><b>Result:</b> the object AND its metadata entry both become eligible for garbage collection together — no leak, no manual cleanup required.</p>" +
      "<p><b>Important rule:</b> the lack of iteration/<code>.size</code> isn't a missing feature — it's deliberate, since exposing that would require revealing exactly which objects are currently still alive, which is inherently unpredictable given when GC runs.</p>" +
      "<p><b>Don't confuse it with:</b> a regular <code>Map</code> — that would keep every cached object alive forever, defeating the entire purpose here.</p>" +
      "<p><b>When to use:</b> attaching metadata/cache entries to objects without risking a memory leak.</p>" +
      "<p><b>When not to use:</b> when you need to iterate the collection or check how many entries exist.</p>" +
      "<p class='ex-gotcha'>The lack of iteration/<code>.size</code> isn't a missing feature — it's deliberate. If you could enumerate a <code>WeakMap</code>'s contents, that would require exposing exactly which objects are currently still alive, which is inherently unpredictable and timing-dependent since the GC can run at any point.</p>",

    "Event delegation":
      "<p><b>Simple meaning:</b> Instead of attaching a listener to every individual child element, attach one listener to a shared parent and figure out which child was actually clicked.</p>" +
      "<p><b>Think of it as:</b> a security guard stationed at the building entrance instead of one guard posted at every single office door — every visitor still passes by the entrance, so one guard covers them all.</p>" +
      "<p><b>Why it exists:</b> to reduce memory usage (one listener instead of hundreds) and to automatically cover dynamically-added elements without needing to re-attach anything.</p>" +
      "<p><b>How it works:</b> because events bubble from the target up through its ancestors, a single listener on a parent can inspect <code>event.target</code> and use <code>.closest(selector)</code> to identify which matching child triggered it.</p>" +
      "<pre><code>document.querySelector('#list').addEventListener('click', (event) => {\n  const item = event.target.closest('.list-item');\n  if (!item) return; // click was on the list but not an item\n  console.log('clicked:', item.dataset.id);\n});\n\n// works even for items added AFTER this listener was set up</code></pre>" +
      "<p><b>What happens:</b> a click on any <code>.list-item</code> anywhere in <code>#list</code> bubbles up to the single listener attached on the parent. <code>event.target</code> gives the exact clicked element, and <code>.closest('.list-item')</code> walks up from there to find the matching item — even for items that didn't exist when the listener was first set up.</p>" +
      "<p><b>Result:</b> one listener correctly handles clicks on any number of current and future list items, with no per-item listener management needed.</p>" +
      "<p><b>Important rule:</b> a per-element listener approach requires manually re-attaching every time new elements appear, and easily leaks memory if elements are removed without their listeners being cleaned up.</p>" +
      "<p><b>Don't confuse it with:</b> attaching a listener directly to each item — the naive approach this pattern specifically improves on.</p>" +
      "<p><b>When to use:</b> lists or containers with many similar children, especially when items are added/removed dynamically.</p>" +
      "<p><b>When not to use:</b> for events that don't bubble (like <code>focus</code>/<code>blur</code>) — use their bubbling equivalents (<code>focusin</code>/<code>focusout</code>) instead.</p>" +
      "<p class='ex-gotcha'>Delegation both reduces memory usage (one listener instead of hundreds) and automatically covers dynamically-added elements — a per-element listener approach requires manually re-attaching every time new elements appear, and easily leaks memory if elements are removed without their listeners being cleaned up.</p>",

    "Debouncing":
      "<p><b>Simple meaning:</b> Waits for a pause in rapid-fire events before running — every new call resets the wait, so only the last call in a burst executes.</p>" +
      "<p><b>Think of it as:</b> an elevator door that keeps resetting its \"about to close\" timer every time someone new steps toward it — it only actually closes once nobody's approaching for the full wait period.</p>" +
      "<p><b>Why it exists:</b> to collapse a burst of rapid events (typing, window resizing) into a single action, run only once things settle down.</p>" +
      "<p><b>How it works:</b> a debounced wrapper clears any pending timer on each new call and schedules a fresh one, so the wrapped function only runs once activity has genuinely stopped for the configured delay.</p>" +
      "<pre><code>function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\nconst onResize = debounce(() => recalcLayout(), 200);\nwindow.addEventListener('resize', onResize); // recalcLayout runs once, after resizing stops</code></pre>" +
      "<p><b>What happens:</b> every resize event cancels the previous pending timer and starts a new one — as long as resizing keeps happening, <code>recalcLayout</code> never actually runs. Only once 200ms passes with no new resize event does the timer finally complete.</p>" +
      "<p><b>Result:</b> a burst of dozens of resize events collapses into exactly one call to <code>recalcLayout</code>, fired after the resizing genuinely stops.</p>" +
      "<p><b>Important rule:</b> debounce can mean the function never fires at all if activity never pauses — fine for a search box, wrong for something needing a steady rate.</p>" +
      "<p><b>Don't confuse it with:</b> throttling — the next entry — which guarantees a steady rate even during continuous activity, rather than waiting for silence.</p>" +
      "<p><b>When to use:</b> search-as-you-type, resize handlers, or anything where only the FINAL state after a burst matters.</p>" +
      "<p><b>When not to use:</b> when the action needs to fire periodically DURING continuous activity — use throttling instead.</p>" +
      "<p class='ex-gotcha'>See \"Throttling\" for the direct comparison — debounce can mean the function never fires if activity never pauses, which is fine for a search box but wrong for something needing a steady rate.</p>",

    "Throttling":
      "<p><b>Simple meaning:</b> Guarantees a function runs at most once per fixed interval, no matter how often the triggering event fires.</p>" +
      "<p><b>Think of it as:</b> a metered turnstile that lets exactly one person through every few seconds — no matter how large the crowd pushing against it, only one gets through per interval.</p>" +
      "<p><b>Why it exists:</b> to cap the rate of expensive work during continuous, high-frequency events like scrolling or dragging.</p>" +
      "<p><b>How it works:</b> a throttled wrapper runs immediately on the first call, then ignores further calls until the interval has elapsed, after which the next call is allowed through again.</p>" +
      "<pre><code>function throttle(fn, interval) {\n  let ready = true;\n  return (...args) => {\n    if (!ready) return;\n    fn(...args);\n    ready = false;\n    setTimeout(() => { ready = true; }, interval);\n  };\n}\nconst onScroll = throttle(() => updateProgress(), 100); // fires at most every 100ms</code></pre>" +
      "<p><b>What happens:</b> the very first scroll event runs <code>updateProgress</code> immediately and flips <code>ready</code> to false. Every scroll event during the next 100ms is silently ignored, until the timer flips <code>ready</code> back to true, allowing the next call through.</p>" +
      "<p><b>Result:</b> even during rapid, continuous scrolling, <code>updateProgress</code> fires at a steady, capped rate — never more often than every 100ms.</p>" +
      "<p><b>Important rule:</b> debounce waits for <b>silence</b>; throttle guarantees a <b>steady maximum rate</b> during continuous activity.</p>" +
      "<p><b>Don't confuse it with:</b> debouncing — the previous entry, which waits for the event to fully stop rather than running periodically during it.</p>" +
      "<p><b>When to use:</b> scroll handlers, drag events, mousemove — anything needing periodic updates during continuous activity.</p>" +
      "<p><b>When not to use:</b> when only the final settled state matters, not intermediate updates — use debouncing instead.</p>" +
      "<p class='ex-gotcha'>Debounce vs throttle: debounce waits for <b>silence</b> (search-as-you-type); throttle guarantees a <b>steady maximum rate</b> during continuous activity (scroll, drag, mousemove).</p>",

    "Memoization":
      "<p><b>Simple meaning:</b> Caching a function's result by its arguments, so repeated calls with the same input skip the computation entirely.</p>" +
      "<p><b>Think of it as:</b> a notebook where you write down the answer to a hard math problem the first time you solve it — the next time someone asks the exact same question, you just read the notebook instead of redoing the work.</p>" +
      "<p><b>Why it exists:</b> to trade memory (the cache) for time (skipped recomputation), when the same expensive inputs recur often.</p>" +
      "<p><b>How it works:</b> a memoized wrapper checks a cache (usually a <code>Map</code>) keyed by the arguments before running the real function; on a cache hit it returns instantly, on a miss it computes, stores, then returns.</p>" +
      "<pre><code>function memoize(fn) {\n  const cache = new Map();\n  return (arg) => {\n    if (cache.has(arg)) return cache.get(arg);\n    const result = fn(arg);\n    cache.set(arg, result);\n    return result;\n  };\n}</code></pre>" +
      "<p><b>What happens:</b> the first call with a given <code>arg</code> is a cache miss — the real, potentially slow <code>fn</code> runs, and the result is stored. Every subsequent call with the SAME <code>arg</code> is a cache hit, returning instantly without touching <code>fn</code> at all.</p>" +
      "<p><b>Result:</b> identical calls after the first are effectively free — the real computation is skipped entirely.</p>" +
      "<p><b>Important rule:</b> only safe for <b>pure</b> functions — memoizing a function whose result depends on anything besides its arguments will happily return stale, wrong cached values.</p>" +
      "<p><b>Don't confuse it with:</b> general-purpose caching — memoization specifically ties the cache key to function arguments, computed automatically per call.</p>" +
      "<p><b>When to use:</b> expensive, pure computations called repeatedly with the same inputs.</p>" +
      "<p><b>When not to use:</b> on impure functions, or when inputs rarely repeat (the cache just wastes memory with no reuse benefit).</p>" +
      "<p class='ex-gotcha'>Only safe for <b>pure</b> functions — memoizing a function whose result depends on anything besides its arguments (the time, a mutable global) will happily return stale, wrong cached values.</p>",

    "Lazy evaluation concepts":
      "<p><b>Simple meaning:</b> Delaying a computation until its result is actually needed, instead of computing it eagerly upfront — and sometimes never computing it at all if it's never used.</p>" +
      "<p><b>Think of it as:</b> ordering food only when a customer actually shows up, instead of cooking every possible dish on the menu in advance in case someone might want it.</p>" +
      "<p><b>Why it exists:</b> to avoid wasted work for values that end up unused, and to make infinite sequences representable, since computing them eagerly all at once would be impossible.</p>" +
      "<p><b>How it works:</b> lazy evaluation defers work behind a thunk (a zero-argument function wrapping the computation) or a generator, which is only invoked/advanced at the point of actual use.</p>" +
      "<pre><code>const value = expensiveComputation(); // EAGER — runs now, whether used or not\n\nconst getValue = () => expensiveComputation(); // LAZY — runs only when called\n\nfunction* naturals() { let n = 1; while (true) yield n++; }\nconst gen = naturals();\ngen.next().value; // 1 — only this ONE value has been computed so far</code></pre>" +
      "<p><b>What happens:</b> the eager version runs <code>expensiveComputation()</code> immediately, unconditionally. The lazy version wraps it in a function that only runs when explicitly called. The generator goes further — even an infinite sequence only computes exactly as many values as are actually requested.</p>" +
      "<p><b>Result:</b> the lazy forms avoid wasted computation entirely if the value is never used, and make representing infinite sequences safe and practical.</p>" +
      "<p><b>Important rule:</b> JavaScript's <code>&amp;&amp;</code> and <code>||</code> already short-circuit lazily — the right-hand side isn't even evaluated if the left side already determines the result.</p>" +
      "<p><b>Don't confuse it with:</b> memoization — laziness delays the FIRST computation; memoization skips REPEATED computation. They're often combined but solve different problems.</p>" +
      "<p><b>When to use:</b> expensive values that might not be needed, or genuinely infinite/unbounded sequences.</p>" +
      "<p><b>When not to use:</b> when the value is always needed immediately — laziness there just adds indirection with no benefit.</p>" +
      "<p class='ex-gotcha'>JavaScript's <code>&amp;&amp;</code> and <code>||</code> already short-circuit lazily — the right-hand side isn't even evaluated if the left side already determines the result, which is why <code>obj &amp;&amp; obj.value</code> safely avoids touching <code>.value</code> when <code>obj</code> is falsy.</p>",

    "Recursion":
      "<p><b>Simple meaning:</b> A function that calls itself, breaking a problem into a smaller version of the same problem, until it hits a case simple enough to answer directly.</p>" +
      "<p><b>Think of it as:</b> Russian nesting dolls — each doll contains a smaller version of the same doll, until you reach the smallest one that doesn't open any further (the base case).</p>" +
      "<p><b>Why it exists:</b> some problems (tree traversal, factorial, many recursive data structures) are naturally defined in terms of smaller versions of themselves — recursion lets the code mirror that structure directly.</p>" +
      "<p><b>How it works:</b> every correct recursive function needs a <b>base case</b> (a condition that stops the recursion and returns directly) and a <b>recursive case</b> that makes measurable progress toward that base case with each call.</p>" +
      "<pre><code>function factorial(n) {\n  if (n <= 1) return 1;              // base case\n  return n * factorial(n - 1);        // recursive case, progressing toward n<=1\n}\nfactorial(5); // 120</code></pre>" +
      "<p><b>What happens:</b> each call reduces <code>n</code> by 1 and calls itself, pushing a new stack frame each time, until <code>n</code> reaches the base case of <code>1</code>. Then the calls unwind, multiplying results back up the chain: <code>1, 2×1, 3×2, 4×6, 5×24</code>.</p>" +
      "<p><b>Result:</b> <code>120</code> — built up from the base case outward as the stack unwinds.</p>" +
      "<p><b>Important rule:</b> each recursive call adds a new frame to the call stack — a missing or unreachable base case causes infinite recursion and a <code>\"Maximum call stack size exceeded\"</code> error.</p>" +
      "<p><b>Don't confuse it with:</b> a plain loop — recursion uses the call stack to hold state between steps; a loop doesn't grow the stack at all.</p>" +
      "<p><b>When to use:</b> problems naturally defined in terms of smaller versions of themselves — tree/graph traversal, divide-and-conquer algorithms.</p>" +
      "<p><b>When not to use:</b> deep, simple iteration where a plain loop avoids the stack-depth risk entirely.</p>" +
      "<p class='ex-gotcha'>Each recursive call adds a new frame to the call stack — a missing or unreachable base case causes infinite recursion and a <code>\"Maximum call stack size exceeded\"</code> error, not an infinite loop that just runs forever silently.</p>",

    "Tail-call concept":
      "<p><b>Simple meaning:</b> A tail call is when a function's very last action is to call another function and immediately return its result, with nothing left to do afterward.</p>" +
      "<p><b>Think of it as:</b> handing off a relay baton and immediately stepping off the track — versus holding onto the baton, running the next lap yourself, and only THEN stepping off (a non-tail call, where you still have work left after the inner call returns).</p>" +
      "<p><b>Why it matters conceptually:</b> if an engine implements Tail Call Optimization, tail-recursive functions could run in effectively constant stack space, avoiding the usual recursion depth limit entirely.</p>" +
      "<p><b>How it works:</b> proper Tail Call Optimization (TCO), part of the ES2015 spec, would let an engine reuse the current stack frame for a tail call instead of pushing a new one.</p>" +
      "<pre><code>function factorial(n, acc = 1) {\n  if (n <= 1) return acc;\n  return factorial(n - 1, n * acc); // tail position — nothing left to do after this returns\n}</code></pre>" +
      "<p><b>What happens:</b> unlike the earlier non-tail-recursive <code>factorial</code>, this version has genuinely nothing left to compute after the recursive call returns — the recursive call's result IS the function's own result, directly.</p>" +
      "<p><b>Result:</b> in an engine WITH TCO, this would run in constant stack space, no matter how large <code>n</code> is. In practice, this guarantee mostly doesn't hold (see below).</p>" +
      "<p><b>Important rule:</b> TCO is in the language <em>spec</em>, but in practice it's effectively only implemented in Safari/JavaScriptCore — V8 (Chrome, Node, Edge) has never shipped it.</p>" +
      "<p><b>Don't confuse it with:</b> ordinary recursion optimization — writing tail-recursive JavaScript today does NOT reliably protect you from stack overflow on most engines.</p>" +
      "<p><b>When to use:</b> know this as a concept worth understanding for interviews; do not rely on it for correctness in production Node/browser code.</p>" +
      "<p><b>When not to use:</b> as an actual technique to avoid stack overflow in V8-based environments — use an iterative rewrite instead for genuinely large inputs.</p>" +
      "<p class='ex-gotcha'>Be honest about this one in interviews: TCO is in the language <em>spec</em>, but in practice it's effectively only implemented in Safari/JavaScriptCore — V8 (Chrome, Node, Edge) has never shipped it. Writing tail-recursive JavaScript today does NOT reliably protect you from stack overflow on most engines; treat it as a concept worth knowing, not a technique to depend on in production code.</p>",

    "Iterators":
      "<p><b>Simple meaning:</b> An object that knows how to produce a sequence of values, one at a time, on request.</p>" +
      "<p><b>Think of it as:</b> a dispenser that hands out one item per pull, and can tell you when it's finally empty.</p>" +
      "<p><b>Why it exists:</b> to give JavaScript a shared, standard protocol for \"produce values one at a time,\" so language features like <code>for...of</code> can work uniformly across arrays, strings, Maps, Sets, and custom objects.</p>" +
      "<p><b>How it works:</b> an object is <b>iterable</b> if it has a <code>[Symbol.iterator]()</code> method returning an <b>iterator</b> — an object with a <code>.next()</code> method that returns <code>{ value, done }</code> each time it's called, until <code>done</code> is <code>true</code>.</p>" +
      "<pre><code>function makeRange(start, end) {\n  let current = start;\n  return {\n    [Symbol.iterator]() {\n      return {\n        next() {\n          if (current < end) return { value: current++, done: false };\n          return { value: undefined, done: true };\n        }\n      };\n    }\n  };\n}\nfor (const n of makeRange(1, 4)) console.log(n); // 1, 2, 3</code></pre>" +
      "<p><b>What happens:</b> <code>for...of</code> calls <code>makeRange(1,4)[Symbol.iterator]()</code> to get an iterator, then repeatedly calls <code>.next()</code> until <code>done</code> is <code>true</code> — each call advancing <code>current</code> and returning the next value.</p>" +
      "<p><b>Result:</b> <code>1, 2, 3</code> — a completely custom object working seamlessly with native <code>for...of</code> syntax, purely by implementing the protocol correctly.</p>" +
      "<p><b>Important rule:</b> this protocol is exactly what powers <code>for...of</code>, array/string spread, and destructuring — any object implementing <code>[Symbol.iterator]()</code> correctly gets all of that for free.</p>" +
      "<p><b>Don't confuse it with:</b> generators — a generator is the easy way to BUILD an iterator, not a separate protocol.</p>" +
      "<p><b>When to use:</b> building custom data structures that should integrate with native iteration syntax.</p>" +
      "<p><b>When not to use:</b> when a generator function can produce the same iterator with far less code.</p>" +
      "<p class='ex-gotcha'>This protocol is exactly what powers <code>for...of</code>, array/string spread, and destructuring — any object implementing <code>[Symbol.iterator]()</code> correctly gets all of that for free, which is why custom data structures can be made to work seamlessly with native JS syntax.</p>",

    "Generators":
      "<p><b>Simple meaning:</b> A special kind of function (<code>function*</code>) that can pause itself midway with <code>yield</code> and resume later — the easy way to build an iterator without writing <code>.next()</code> by hand.</p>" +
      "<p><b>Think of it as:</b> a storyteller who pauses exactly when you ask and picks up exactly where they left off the next time you ask for more — no need to write the pausing/resuming logic manually, the language handles it.</p>" +
      "<p><b>Why it exists:</b> hand-writing the iterator protocol's <code>.next()</code>/<code>{value, done}</code> bookkeeping manually is tedious; generators let you write a natural, linear-looking function instead.</p>" +
      "<p><b>How it works:</b> calling a generator function doesn't run its body — it returns a generator object that <em>is</em> an iterator. Each call to <code>.next()</code> runs the body until the next <code>yield</code>, returns that value, and pauses exactly there.</p>" +
      "<pre><code>function* naturals() {\n  let n = 1;\n  while (true) { yield n++; } // infinite, but safe — nothing runs until .next() is called\n}\nconst gen = naturals();\ngen.next().value; // 1\ngen.next().value; // 2\n\nfor (const n of naturals()) {\n  if (n > 3) break; // 1, 2, 3 — then stop, no infinite loop\n  console.log(n);\n}</code></pre>" +
      "<p><b>What happens:</b> calling <code>naturals()</code> doesn't run the <code>while (true)</code> loop at all — it just returns a paused generator. Each <code>.next()</code> call resumes execution up to the next <code>yield</code>, then pauses again — the loop only actually \"spins\" as many times as <code>.next()</code> is called.</p>" +
      "<p><b>Result:</b> <code>1</code>, then <code>2</code> from the manual calls; <code>1, 2, 3</code> logged from the <code>for...of</code>, which safely stops via <code>break</code> before ever exhausting the infinite sequence.</p>" +
      "<p><b>Important rule:</b> generators are <b>lazy</b> — an infinite generator never actually loops forever in practice, because each value is only computed the instant it's requested.</p>" +
      "<p><b>Don't confuse it with:</b> a regular function returning an array — that would compute every value upfront; a generator computes them one at a time, on demand.</p>" +
      "<p><b>When to use:</b> building custom iterators, or lazy/infinite sequences, with far less code than a hand-written iterator.</p>" +
      "<p><b>When not to use:</b> for simple, finite, already-known data — a plain array is simpler.</p>" +
      "<p class='ex-gotcha'>Generators are <b>lazy</b> — an infinite generator like <code>naturals()</code> never actually loops forever in practice, because each value is only computed the instant it's requested by <code>.next()</code> (or a <code>for...of</code> consuming it, which can <code>break</code> at any point).</p>",
  },

  /* ------------------------------------------------------------------ */
  "Browser JavaScript": {
    "DOM":
      "<p><b>Simple meaning:</b> The Document Object Model is the live, in-memory tree of objects the browser builds from your HTML — the thing JavaScript actually reads and modifies to change what's on screen.</p>" +
      "<p><b>Think of it as:</b> a live blueprint, not the original architectural drawing — the browser builds this working model from your HTML, and JavaScript edits the model directly, not the original file.</p>" +
      "<p><b>Why it exists:</b> to give JavaScript a structured, programmatic way to read and change what's displayed, independent of the original HTML text.</p>" +
      "<p><b>How it works:</b> the DOM is a tree data structure (one node per element, text, comment, etc.) that the browser exposes through a set of Web APIs — it's not JavaScript-the-language, it's an API the browser provides that JS can call.</p>" +
      "<pre><code>const el = document.querySelector('#title');\nel.textContent = 'Updated!'; // mutates the live DOM node — page updates instantly\nel.classList.add('highlight');</code></pre>" +
      "<p><b>What happens:</b> <code>querySelector</code> finds the live DOM node matching <code>#title</code>. Setting <code>.textContent</code> directly mutates that node in the live tree — the browser immediately reflects the change on screen, with no separate \"render\" step needed.</p>" +
      "<p><b>Result:</b> the visible page updates instantly — the DOM node itself IS the thing being displayed, not a separate description of it.</p>" +
      "<p><b>Important rule:</b> the DOM tree is not the same thing as your original HTML source — the browser can and does modify the live tree without ever changing the HTML file itself.</p>" +
      "<p><b>Don't confuse it with:</b> \"View Source\" — that shows the original file; DevTools' Elements panel shows the current, possibly very different, live DOM.</p>" +
      "<p><b>When to use:</b> reading or modifying what's displayed on the page programmatically.</p>" +
      "<p><b>When not to use:</b> n/a — this is the fundamental API for page manipulation in the browser.</p>" +
      "<p class='ex-gotcha'>The DOM tree is not the same thing as your original HTML source — the browser can and does modify the live tree (via JS, or its own parsing corrections) without ever changing the HTML file itself; \"View Source\" shows the original file, while DevTools' Elements panel shows the current DOM.</p>",

    "Event propagation":
      "<p><b>Simple meaning:</b> When you click an element, the click doesn't just fire on that one element — it travels through the DOM tree in a defined order, first down then back up.</p>" +
      "<p><b>Think of it as:</b> a messenger running from the front gate all the way down to a specific room (capturing), delivering the message there (target), then running back out through every hallway on the way (bubbling) — announcing the message at every doorway passed.</p>" +
      "<p><b>Why it exists:</b> to give a predictable, well-defined order for how an event interacts with every ancestor of the element it happened on.</p>" +
      "<p><b>How it works:</b> an event goes through three phases: <b>capturing</b> (root down to target), the <b>target</b> phase (the element actually clicked), then <b>bubbling</b> (back up from target to root). Listeners attach to the bubble phase by default.</p>" +
      "<pre><code>parent.addEventListener('click', () => console.log('parent (bubble)'));\nparent.addEventListener('click', () => console.log('parent (capture)'), true);\nchild.addEventListener('click', () => console.log('child'));\n// clicking child logs: 'parent (capture)', 'child', 'parent (bubble)'</code></pre>" +
      "<p><b>What happens:</b> the click first travels DOWN through <code>parent</code> in the capture phase (logging first), reaches <code>child</code> at the target phase (logging second), then travels back UP through <code>parent</code> in the bubble phase (logging third).</p>" +
      "<p><b>Result:</b> three listeners fire in a fixed, predictable order determined by the phase model, not by the order the listeners happened to be registered.</p>" +
      "<p><b>Important rule:</b> most listeners you write are bubble-phase by default (no third argument) — the capture phase is rarely used but explains why <code>addEventListener</code> has that mysterious third parameter.</p>" +
      "<p><b>Don't confuse it with:</b> event delegation — a specific technique that RELIES on bubbling, not a separate propagation mechanism.</p>" +
      "<p><b>When to use:</b> understanding this explains the order multiple listeners on nested elements fire in.</p>" +
      "<p><b>When not to use:</b> n/a — every DOM event follows this model automatically.</p>" +
      "<p class='ex-gotcha'>Most listeners you write are bubble-phase by default (pass no third argument, or <code>{capture:false}</code>) — the capture phase is rarely used, but understanding it exists explains why <code>addEventListener</code> has that mysterious third boolean parameter.</p>",

    "Capturing":
      "<p><b>Simple meaning:</b> The first phase of event propagation — the event travels from the outermost ancestor <em>down</em> toward the actual clicked element.</p>" +
      "<p><b>Think of it as:</b> a security checkpoint at the building entrance that gets to inspect a visitor before they've even reached the room they're actually heading to.</p>" +
      "<p><b>Why it exists:</b> to allow an ancestor to intercept an event before it reaches the target — useful for cases where you need to act before a descendant has a chance to stop the event.</p>" +
      "<p><b>How it works:</b> passing <code>true</code> (or <code>{ capture: true }</code>) as the third argument to <code>addEventListener</code> registers that listener for the capture phase, meaning it runs on the way <em>down</em> the tree, before the target itself or any bubble-phase listener fires.</p>" +
      "<pre><code>document.body.addEventListener(\n  'click',\n  () => console.log('captured at body — before the target even sees it'),\n  true // <- capture phase\n);</code></pre>" +
      "<p><b>What happens:</b> this listener fires on the way DOWN from <code>document.body</code> toward whatever was actually clicked — before the click even reaches its real target, and before any bubble-phase listener anywhere gets a turn.</p>" +
      "<p><b>Result:</b> the earliest possible point any JavaScript can react to this click, guaranteed to run before the target's own click handling.</p>" +
      "<p><b>Important rule:</b> capturing runs first, so it can't be blocked by a descendant later calling <code>stopPropagation()</code> during the bubble phase.</p>" +
      "<p><b>Don't confuse it with:</b> bubbling — the opposite, far more commonly used phase, running after capturing and the target phase.</p>" +
      "<p><b>When to use:</b> intercepting an event before a descendant gets a chance to stop it from bubbling.</p>" +
      "<p><b>When not to use:</b> for ordinary event handling — bubble-phase (the default) is what nearly all code should use.</p>" +
      "<p class='ex-gotcha'>It's rare in everyday code, but it's exactly what explains the third argument's existence — if you've only ever seen <code>addEventListener(type, fn)</code>, you've been implicitly using bubble-phase listeners the whole time.</p>",

    "Bubbling":
      "<p><b>Simple meaning:</b> After an event reaches its target, it travels back <em>up</em> through every ancestor element, triggering their listeners too.</p>" +
      "<p><b>Think of it as:</b> a shout in a small room that's heard progressively fainter in every larger room outside it, all the way out to the street — anyone listening at any of those levels hears it.</p>" +
      "<p><b>Why it exists:</b> to let ancestor elements react to events that happen on their descendants, without needing a listener on every single descendant individually.</p>" +
      "<p><b>How it works:</b> by default (no <code>capture</code> flag), <code>addEventListener</code> registers a listener for the bubble phase — it fires only after the target phase completes, and only if propagation wasn't stopped earlier.</p>" +
      "<pre><code>document.querySelector('#inner').addEventListener('click', () => console.log('inner'));\ndocument.querySelector('#outer').addEventListener('click', () => console.log('outer'));\n// clicking #inner logs 'inner' THEN 'outer' — the click bubbles up to the parent too</code></pre>" +
      "<p><b>What happens:</b> the click fires on <code>#inner</code> first (its own listener), then continues bubbling upward, triggering <code>#outer</code>'s listener too — even though the click physically only happened on <code>#inner</code>.</p>" +
      "<p><b>Result:</b> both listeners fire, in target-to-ancestor order — this is the mechanism behind event delegation.</p>" +
      "<p><b>Important rule:</b> not every event bubbles — <code>focus</code> and <code>blur</code> famously don't (their bubbling equivalents are <code>focusin</code>/<code>focusout</code>).</p>" +
      "<p><b>Don't confuse it with:</b> capturing — the opposite-direction phase that runs first, before the target and bubble phases.</p>" +
      "<p><b>When to use:</b> understanding this is essential for event delegation to work correctly.</p>" +
      "<p><b>When not to use:</b> always check whether a specific event type actually bubbles before building delegation around it.</p>" +
      "<p class='ex-gotcha'>Not every event bubbles — <code>focus</code> and <code>blur</code> famously don't (their delegated equivalents are <code>focusin</code>/<code>focusout</code>, which do bubble). Always check whether the specific event type you're relying on actually bubbles before building delegation around it.</p>",

    "Event delegation":
      "<p><b>Simple meaning:</b> Put one listener on a parent instead of one on every child — bubbling carries the event up to the parent, which figures out what was actually clicked.</p>" +
      "<p><b>Think of it as:</b> a single receptionist at a building entrance who logs every visitor, instead of a separate guard posted at every individual office door.</p>" +
      "<p><b>Why it exists:</b> to reduce the number of listeners needed and to automatically cover elements added to the page after the listener was set up.</p>" +
      "<p><b>How it works:</b> a single listener on an ancestor inspects <code>event.target</code> (the element actually clicked) and typically calls <code>.closest(selector)</code> on it to find the matching descendant.</p>" +
      "<pre><code>document.querySelector('#list').addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('clicked item:', item.dataset.id);\n});\n// new .list-item elements added later still work — no new listener needed</code></pre>" +
      "<p><b>What happens:</b> any click inside <code>#list</code> bubbles up to this one listener. <code>e.target</code> gives the exact clicked element; <code>.closest('.list-item')</code> walks up from there to find the enclosing item — working correctly even for items that didn't exist yet when this listener was first attached.</p>" +
      "<p><b>Result:</b> one listener handles clicks on any number of current AND future list items, with zero extra setup for newly-added ones.</p>" +
      "<p><b>Important rule:</b> delegation only works for events that actually bubble — trying to delegate <code>focus</code>/<code>blur</code> directly silently does nothing; use <code>focusin</code>/<code>focusout</code> instead.</p>" +
      "<p><b>Don't confuse it with:</b> attaching a listener directly to each item — the pattern this specifically avoids.</p>" +
      "<p><b>When to use:</b> lists or containers with many, or dynamically-added, similar children.</p>" +
      "<p><b>When not to use:</b> for non-bubbling events, or a genuinely small, fixed set of unrelated elements.</p>" +
      "<p class='ex-gotcha'>Delegation only works for events that actually bubble (see \"Bubbling\") — trying to delegate <code>focus</code>/<code>blur</code> directly on a parent silently does nothing; use <code>focusin</code>/<code>focusout</code> instead, which are the bubbling equivalents.</p>",

    "preventDefault":
      "<p><b>Simple meaning:</b> Cancels whatever the browser was automatically going to do because of this event — like following a link, or submitting a form.</p>" +
      "<p><b>Think of it as:</b> intercepting a letter before the mail carrier's default delivery route, while the letter itself keeps being passed along to every hand that would normally see it.</p>" +
      "<p><b>Why it exists:</b> to let JavaScript override built-in browser behaviors — page reloads on form submit, navigation on link click — and substitute custom logic instead.</p>" +
      "<p><b>How it works:</b> <code>event.preventDefault()</code> stops the browser's built-in default action for that event, but does <b>not</b> stop the event from continuing to propagate to other listeners.</p>" +
      "<pre><code>form.addEventListener('submit', (e) => {\n  e.preventDefault(); // stop the page from reloading\n  submitViaFetch(new FormData(form));\n});\n\nlink.addEventListener('click', (e) => {\n  e.preventDefault(); // stop navigating to the href\n  showModalInstead();\n});</code></pre>" +
      "<p><b>What happens:</b> the browser's built-in \"submit this form and reload the page\" (or \"navigate to this link\") behavior is cancelled — but the event itself still continues propagating normally to any other listeners.</p>" +
      "<p><b>Result:</b> the custom handler (a fetch call, a modal) runs instead of the browser's default navigation behavior.</p>" +
      "<p><b>Important rule:</b> <code>preventDefault</code> and <code>stopPropagation</code> do <b>completely different things</b> and neither implies the other.</p>" +
      "<p><b>Don't confuse it with:</b> <code>stopPropagation</code> — see that entry for the direct contrast.</p>" +
      "<p><b>When to use:</b> intercepting form submissions or link navigation to run custom logic instead.</p>" +
      "<p><b>When not to use:</b> when you also want to stop the event from reaching other listeners — call <code>stopPropagation()</code> separately for that.</p>" +
      "<p class='ex-gotcha'>See \"stopPropagation\" for the other half of this: these two methods do <b>completely different things</b> and neither implies the other — calling one alone leaves the other behavior fully intact.</p>",

    "stopPropagation":
      "<p><b>Simple meaning:</b> Stops an event from continuing to bubble (or capture) any further — ancestor listeners further along the chain never see it.</p>" +
      "<p><b>Think of it as:</b> stopping the shout from a small room from reaching any room further out — but the room itself still does whatever it was already going to do as a result of the shout.</p>" +
      "<p><b>Why it exists:</b> to let a specific element handle an event and prevent it from also being handled by ancestors that might react to it too.</p>" +
      "<p><b>How it works:</b> <code>event.stopPropagation()</code> halts the event's journey through the capture/bubble phases at the current listener, but does <b>not</b> cancel the browser's default action.</p>" +
      "<pre><code>child.addEventListener('click', (e) => {\n  e.stopPropagation(); // parent's listener below will NOT fire\n  console.log('child handled it');\n});\nparent.addEventListener('click', () => console.log('parent — never runs on a child click'));</code></pre>" +
      "<p><b>What happens:</b> the click on <code>child</code> stops right there — it never continues bubbling up to <code>parent</code>'s listener at all. But if this click were on a link or form, the browser's default navigation/submission would STILL happen, since <code>stopPropagation</code> doesn't touch that.</p>" +
      "<p><b>Result:</b> only <code>child</code>'s handler runs — <code>parent</code>'s listener is completely bypassed for this particular click.</p>" +
      "<p><b>Important rule:</b> <code>preventDefault</code> cancels the browser's default action but the event STILL propagates; <code>stopPropagation</code> stops propagation but the default action STILL happens. They're independent.</p>" +
      "<p><b>Don't confuse it with:</b> <code>preventDefault</code> — use both together if you genuinely need neither effect.</p>" +
      "<p><b>When to use:</b> preventing a click on a nested element from also triggering an ancestor's delegated handler.</p>" +
      "<p><b>When not to use:</b> overusing it can break legitimate delegation patterns elsewhere in the page that rely on the event continuing to bubble.</p>" +
      "<p class='ex-gotcha'>The confusion table worth memorizing: <code>preventDefault</code> cancels the browser's default action but the event STILL propagates; <code>stopPropagation</code> stops propagation but the default action STILL happens. They're independent — use both together if you genuinely need neither effect.</p>",

    "Browser storage":
      "<p><b>Simple meaning:</b> The umbrella term for the browser's built-in ways to persist data on the user's machine — <code>localStorage</code>, <code>sessionStorage</code>, and cookies being the main three.</p>" +
      "<p><b>Think of it as:</b> three different storage lockers with different rules — one that never auto-empties, one that empties when you leave the building (tab), and one small locker whose contents get shown to security (the server) every single time you walk through a door.</p>" +
      "<p><b>Why it exists:</b> different persistence needs call for different tradeoffs of capacity, lifetime, and server visibility.</p>" +
      "<p><b>How it works — a direct comparison:</b></p>" +
      "<table><tr><th>Mechanism</th><th>Capacity</th><th>Lifetime</th><th>Sent to server?</th></tr><tr><td>localStorage</td><td>~5-10MB</td><td>until explicitly cleared</td><td>never</td></tr><tr><td>sessionStorage</td><td>~5-10MB</td><td>until the tab closes</td><td>never</td></tr><tr><td>Cookies</td><td>~4KB</td><td>configurable expiry</td><td>with EVERY matching request</td></tr></table>" +
      "<p><b>What happens:</b> choosing between these three is a real, common interview question precisely because their tradeoffs matter in practice — a session token needing server visibility fits cookies; a UI preference needing large capacity and no server chatter fits localStorage.</p>" +
      "<p><b>Result:</b> the right choice depends entirely on lifetime and server-visibility needs — there's no universally \"best\" one among the three.</p>" +
      "<p><b>Important rule:</b> all of them are per-<b>origin</b> — data stored by <code>https://a.com</code> is invisible to <code>https://b.com</code>, and even <code>https://a.com</code>/<code>http://a.com</code> count as different origins.</p>" +
      "<p><b>Don't confuse it with:</b> a database — these are all client-side, per-browser storage, not a shared, server-side data store.</p>" +
      "<p><b>When to use:</b> localStorage for large, persistent, client-only data; sessionStorage for tab-scoped drafts; cookies for anything the server itself needs to see automatically.</p>" +
      "<p><b>When not to use:</b> never store sensitive data in any of them without appropriate protections — all are readable by any script running on the page (except HttpOnly cookies).</p>" +
      "<p class='ex-gotcha'>All of them are per-<b>origin</b> (scheme + host + port) — data stored by <code>https://a.com</code> is invisible to <code>https://b.com</code>, and even <code>https://a.com</code> and <code>http://a.com</code> count as different origins entirely.</p>",

    "localStorage":
      "<p><b>Simple meaning:</b> Key-value storage in the browser that survives closing the tab, the browser, even restarting the computer — until something explicitly clears it.</p>" +
      "<p><b>Think of it as:</b> a locker that never auto-empties — whatever you put in stays until you (or the user) explicitly take it out.</p>" +
      "<p><b>Why it exists:</b> for persisting client-side data (preferences, cached data, drafts) across sessions, without needing a server round-trip.</p>" +
      "<p><b>How it works:</b> <code>localStorage</code> is synchronous, string-only (non-strings are coerced via <code>.toString()</code>, so objects need <code>JSON.stringify</code>/<code>JSON.parse</code>), roughly 5-10MB per origin, and persists indefinitely until cleared.</p>" +
      "<pre><code>localStorage.setItem('user', JSON.stringify({ name: 'Ada' }));\nconst user = JSON.parse(localStorage.getItem('user'));\n\nlocalStorage.getItem('missingKey'); // null, not undefined\nJSON.parse(null); // null — doesn't throw!</code></pre>" +
      "<p><b>What happens:</b> objects must be explicitly stringified before storage and parsed back after retrieval — <code>localStorage</code> only ever stores strings. A missing key returns <code>null</code>, and surprisingly, <code>JSON.parse(null)</code> doesn't throw — it also returns <code>null</code>.</p>" +
      "<p><b>Result:</b> a genuine object round-trips correctly through storage; a missing key silently produces <code>null</code> at every step, which can mask bugs if not checked explicitly.</p>" +
      "<p><b>Important rule:</b> <code>localStorage.getItem('missingKey')</code> returns <code>null</code>, not <code>undefined</code> — and <code>JSON.parse(null)</code> doesn't throw, which can mask a missing-key bug.</p>" +
      "<p><b>Don't confuse it with:</b> <code>sessionStorage</code> — same API, drastically different lifetime (tab-scoped vs. persistent).</p>" +
      "<p><b>When to use:</b> persisting client-only data across browser sessions — theme preferences, cached non-sensitive data.</p>" +
      "<p><b>When not to use:</b> for sensitive data (readable by any script on the page) or data the server needs to see automatically.</p>" +
      "<p class='ex-gotcha'><code>localStorage.getItem('missingKey')</code> returns <code>null</code>, not <code>undefined</code> — and calling <code>JSON.parse(null)</code> actually returns <code>null</code> too (it doesn't throw), which can mask a missing-key bug if you're not careful checking for it.</p>",

    "sessionStorage":
      "<p><b>Simple meaning:</b> Same API as <code>localStorage</code>, but the data disappears the moment that specific browser tab is closed.</p>" +
      "<p><b>Think of it as:</b> a locker assigned specifically to one visit — leave the building (close the tab) and the locker empties; a second visitor (a new tab) gets a completely fresh, empty locker of their own.</p>" +
      "<p><b>Why it exists:</b> for data that should only live for the duration of one specific tab's session — a multi-step form draft that shouldn't persist beyond that visit.</p>" +
      "<p><b>How it works:</b> <code>sessionStorage</code> shares <code>localStorage</code>'s API exactly, but its lifetime is scoped to a single tab/window session, and it is <b>not shared between tabs</b> even on the same origin.</p>" +
      "<pre><code>sessionStorage.setItem('formDraft', JSON.stringify({ title: 'Draft...' }));\n// survives a page refresh in THIS tab, but is gone if the tab is closed,\n// and a second tab on the same site won't see it at all</code></pre>" +
      "<p><b>What happens:</b> a refresh within the same tab preserves the data — sessionStorage isn't cleared by navigation within the tab. But closing the tab, or opening a new tab to the same site, gives you a completely separate, empty sessionStorage.</p>" +
      "<p><b>Result:</b> data that's genuinely scoped to one tab's lifetime — unlike localStorage, which is shared across every tab on the same origin.</p>" +
      "<p><b>Important rule:</b> \"same origin, different tab\" is the trap — each tab gets its own completely separate sessionStorage, even a duplicated tab starts a fresh copy, not a live shared one.</p>" +
      "<p><b>Don't confuse it with:</b> localStorage — visually identical API, entirely different lifetime and sharing behavior.</p>" +
      "<p><b>When to use:</b> tab-scoped drafts or temporary state that shouldn't persist beyond that one browsing session.</p>" +
      "<p><b>When not to use:</b> when data needs to be shared across tabs, or persist after the tab closes — use localStorage instead.</p>" +
      "<p class='ex-gotcha'>\"Same origin, different tab\" is the trap: unlike <code>localStorage</code> (shared across every tab on the same origin), each tab gets its own completely separate <code>sessionStorage</code> — even duplicating a tab starts a fresh copy of the data, not a live shared one.</p>",

    "Cookies":
      "<p><b>Simple meaning:</b> Small pieces of data stored by the browser that get automatically attached to every matching HTTP request — the original way the web tracked sessions before <code>localStorage</code> existed.</p>" +
      "<p><b>Think of it as:</b> a stamped ID badge that automatically shows itself to security at every door you walk through — unlike localStorage, which you'd have to manually hand over yourself.</p>" +
      "<p><b>Why it exists:</b> to give the server automatic visibility into small pieces of client state on every request, without the client needing to do anything special.</p>" +
      "<p><b>How it works:</b> cookies are limited to ~4KB, can carry an expiry, and support flags like <code>HttpOnly</code> (inaccessible to JS, mitigating XSS theft), <code>Secure</code> (HTTPS only), and <code>SameSite</code> (controls cross-site sending, mitigating CSRF).</p>" +
      "<pre><code>document.cookie = 'theme=dark; max-age=3600; path=/';\nconsole.log(document.cookie); // 'theme=dark' (plus any other readable cookies)\n// an HttpOnly cookie set by the SERVER is invisible to document.cookie entirely</code></pre>" +
      "<p><b>What happens:</b> the cookie is set client-side here and readable via <code>document.cookie</code> — but an HttpOnly cookie (typically set by the server) is deliberately invisible to JavaScript entirely, as a defense against XSS-based theft.</p>" +
      "<p><b>Result:</b> a readable cookie appears in <code>document.cookie</code>; a server-set HttpOnly cookie is completely absent from that same list, even though the browser still sends it with requests.</p>" +
      "<p><b>Important rule:</b> cookies are sent with <b>every</b> matching HTTP request automatically, adding overhead to every call — localStorage/sessionStorage are never sent unless code explicitly includes them.</p>" +
      "<p><b>Don't confuse it with:</b> localStorage — cookies have automatic server visibility that localStorage deliberately lacks.</p>" +
      "<p><b>When to use:</b> session tokens or any data the server genuinely needs to see automatically on every request.</p>" +
      "<p><b>When not to use:</b> for large data (the 4KB limit) or data that doesn't need server visibility — those add unnecessary request overhead.</p>" +
      "<p class='ex-gotcha'>This is the key difference from <code>localStorage</code>/<code>sessionStorage</code>, worth stating explicitly: cookies are sent with <b>every</b> matching HTTP request automatically, adding overhead to every call — <code>localStorage</code> and <code>sessionStorage</code> are never sent to the server at all unless your code explicitly reads and includes them.</p>",

    "Fetch API":
      "<p><b>Simple meaning:</b> The modern, promise-based way to make HTTP requests from the browser (or Node), replacing the older <code>XMLHttpRequest</code>.</p>" +
      "<p><b>Think of it as:</b> mailing a letter and getting a delivery confirmation — the confirmation just says \"it arrived,\" not \"and the recipient liked what was inside.\" Reading the actual reply is a separate step.</p>" +
      "<p><b>Why it exists:</b> to replace the old, callback-heavy, awkward <code>XMLHttpRequest</code> API with a clean, promise-based interface.</p>" +
      "<p><b>How it works:</b> <code>fetch(url, options)</code> returns a promise that resolves to a <code>Response</code> object once headers arrive — reading the body (<code>.json()</code>, <code>.text()</code>) is a <em>separate</em> step that itself returns another promise.</p>" +
      "<pre><code>const res = await fetch('/api/users/999');\nif (!res.ok) throw new Error('HTTP ' + res.status); // fetch alone won't do this for you\nconst data = await res.json(); // .json() itself returns a PROMISE, not the data directly</code></pre>" +
      "<p><b>What happens:</b> <code>fetch</code> resolves once the response headers arrive — even for a 404 or 500 status, the promise still RESOLVES, it does not reject. Checking <code>res.ok</code> explicitly is the only way to detect an HTTP error.</p>" +
      "<p><b>Result:</b> without the manual <code>res.ok</code> check, a 404 response would be silently treated as \"success\" and its body parsed as if everything went fine.</p>" +
      "<p><b>Important rule:</b> <code>fetch</code> does <b>NOT</b> reject on an HTTP error status — it only rejects on a genuine network failure (DNS failure, no connection, CORS block).</p>" +
      "<p><b>Don't confuse it with:</b> other HTTP libraries (like axios) that DO treat non-2xx statuses as errors by default — fetch's behavior here is a deliberate design choice, not a bug.</p>" +
      "<p><b>When to use:</b> making HTTP requests from modern browser or Node code.</p>" +
      "<p><b>When not to use:</b> n/a — but always remember to check <code>res.ok</code> manually.</p>" +
      "<p class='ex-gotcha'><b>The single most important gotcha in this whole topic:</b> <code>fetch</code> does <b>NOT</b> reject on an HTTP error status — a 404 or 500 response still resolves normally. It only rejects on a genuine network failure (DNS failure, no connection, CORS block). You must always check <code>response.ok</code> (or <code>response.status</code>) yourself.</p>",

    "AbortController":
      "<p><b>Simple definition:</b> The standard way to cancel an in-flight <code>fetch</code> (or other cancellable async operation).</p>" +
      "<p><b>Think of it as:</b> a remote kill-switch handed to a request when it starts — you keep the switch and can flip it at any point to signal \"stop,\" even though the request is running elsewhere.</p>" +
      "<p><b>Why it exists:</b> to let a slow or now-irrelevant request be explicitly cancelled — a stale, late-arriving response shouldn't overwrite newer data.</p>" +
      "<p><b>How it works:</b> creating an <code>AbortController</code> gives you a <code>.signal</code> to pass into <code>fetch</code>'s options, and an <code>.abort()</code> method that makes that fetch's promise reject with an <code>AbortError</code>.</p>" +
      "<pre><code>const controller = new AbortController();\nfetch('/search?q=abc', { signal: controller.signal })\n  .then(res => res.json())\n  .catch(err => {\n    if (err.name === 'AbortError') console.log('request cancelled');\n  });\n\ncontroller.abort();</code></pre>" +
      "<p><b>What happens:</b> the <code>signal</code> is wired into the request. Calling <code>controller.abort()</code> tells that request to stop, which makes its promise reject with a distinguishable <code>AbortError</code> instead of ever resolving normally.</p>" +
      "<p><b>Result:</b> the request is cancelled, and the <code>.catch</code> can distinguish this deliberate cancellation from a genuine failure by checking <code>err.name</code>.</p>" +
      "<p><b>Important rule:</b> a very common real use is cancelling the <em>previous</em> in-flight request every time a new keystroke fires a new one — otherwise a slow, stale response can arrive AFTER a faster, newer one and incorrectly overwrite the results.</p>" +
      "<p><b>Don't confuse it with:</b> a genuine failure — always check <code>err.name === 'AbortError'</code> before treating a rejection as an actual error to show the user.</p>" +
      "<p><b>When to use:</b> cancelling in-flight requests superseded by a newer one, or when a component unmounts mid-request.</p>" +
      "<p><b>When not to use:</b> for APIs that don't accept a signal — not every async function supports cancellation this way.</p>" +
      "<p class='ex-gotcha'>A very common real use in a search box: cancel the <em>previous</em> in-flight request every time a new keystroke fires a new one — otherwise a slow, stale response can arrive AFTER a faster, newer one and incorrectly overwrite the results the user actually wants to see.</p>",

    "Web APIs":
      "<p><b>Simple meaning:</b> The features you use constantly in browser JS — <code>fetch</code>, <code>setTimeout</code>, the DOM, <code>localStorage</code> — are not part of the JavaScript language itself; they're provided by the browser.</p>" +
      "<p><b>Think of it as:</b> the kitchen's chef (the JS engine) versus the outsourced delivery service (Web APIs) — the chef never personally handles timers or network calls; those are separate services the kitchen contracts out to.</p>" +
      "<p><b>Why it matters:</b> understanding this explains why Node lacks <code>window</code>/<code>document</code> but has <code>process</code>/<code>fs</code> — different host environments supply different APIs on top of the same core language.</p>" +
      "<p><b>How it works:</b> the JS engine implements only the ECMAScript language spec — values, functions, closures, promise mechanics. Everything else is supplied by the host environment as Web APIs.</p>" +
      "<pre><code>// none of these are 'JavaScript the language' — they're browser-provided APIs:\nfetch('/api');\nsetTimeout(fn, 1000);\ndocument.querySelector('#el');\nlocalStorage.getItem('x');</code></pre>" +
      "<p><b>What happens:</b> each of these calls delegates to functionality the browser itself provides — none of them are defined by the ECMAScript language specification, they're host-environment additions.</p>" +
      "<p><b>Result:</b> the same JavaScript LANGUAGE runs everywhere, but the available APIs differ by environment — a browser-only script using <code>document</code> will crash in Node.</p>" +
      "<p><b>Important rule:</b> it's the Web APIs (not the JS engine) that do the actual waiting for a timer or network request, then hand a callback back to the queue.</p>" +
      "<p><b>Don't confuse it with:</b> the JS engine's own features — closures, promise mechanics, and array methods ARE genuine language features, unlike <code>fetch</code> or the DOM.</p>" +
      "<p><b>When to use:</b> understanding this explains platform-specific API differences (browser vs. Node).</p>" +
      "<p><b>When not to use:</b> n/a — this is a foundational fact, not a technique.</p>" +
      "<p class='ex-gotcha'>This is directly connected to the event loop: it's the Web APIs (not the JS engine) that do the actual waiting for a timer or network request, then hand a callback back to the queue — see \"Web APIs/runtime APIs\" under Event loop for the full mechanism.</p>",

    "CORS concept":
      "<p><b>Simple meaning:</b> A browser security rule that blocks a web page from freely reading responses from a different origin, unless that other server explicitly says it's okay.</p>" +
      "<p><b>Think of it as:</b> a bouncer at the browser's door who checks whether the OTHER building (the server) has put your page's name on its approved guest list — not a rule the visiting page can bypass on its own.</p>" +
      "<p><b>Why it exists:</b> to protect users from a malicious page silently reading data from another site the user happens to be logged into.</p>" +
      "<p><b>How it works:</b> Cross-Origin Resource Sharing is enforced entirely by the <b>browser</b>, not the requesting JavaScript. The server opts in via an <code>Access-Control-Allow-Origin</code> header; some requests first trigger an automatic <code>OPTIONS</code> preflight check.</p>" +
      "<pre><code>// server response header that allows a specific origin:\nAccess-Control-Allow-Origin: https://myapp.com\n\n// without a matching header, the browser blocks the JS from reading the\n// response — even though the request itself often still reaches the server</code></pre>" +
      "<p><b>What happens:</b> the request often actually reaches the server and the server actually responds — the browser is the one that BLOCKS the calling JavaScript from reading that response, unless the server's header explicitly permits the calling origin.</p>" +
      "<p><b>Result:</b> the JS code sees a network-level error, even though the server may have processed the request successfully — the block is purely on the client side, protecting the user.</p>" +
      "<p><b>Important rule:</b> CORS protects the <b>user</b>, not the server, and it cannot be \"fixed\" from client-side JavaScript at all — the target server must explicitly grant permission.</p>" +
      "<p><b>Don't confuse it with:</b> a server-side authentication failure — CORS blocks are a browser-enforced client-side restriction, distinct from the server rejecting a request outright.</p>" +
      "<p><b>When to use:</b> understanding this explains why a cross-origin fetch fails even when the server appears to be working fine.</p>" +
      "<p><b>When not to use:</b> n/a — you can't opt out of this browser protection from client code; only the server can grant permission.</p>" +
      "<p class='ex-gotcha'>CORS protects the <b>user</b>, not the server, and it cannot be \"fixed\" from client-side JavaScript at all — no header, config, or trick in your frontend code can bypass it; the target server must explicitly grant permission via its own response headers.</p>",

    "Browser rendering concept":
      "<p><b>Simple meaning:</b> The pipeline the browser runs to turn your HTML/CSS/JS into actual pixels on screen — and understanding it explains why some DOM changes are much more expensive than others.</p>" +
      "<p><b>Think of it as:</b> an assembly line — raw materials (HTML/CSS) get parsed into blueprints (DOM/CSSOM), combined into a plan (render tree), measured and positioned (layout), painted, then finally assembled into the finished product on screen (composite).</p>" +
      "<p><b>Why it exists:</b> the browser needs a structured pipeline to turn declarative markup and styles into actual displayed pixels efficiently.</p>" +
      "<p><b>How it works:</b> parse HTML into the <b>DOM</b>, parse CSS into the <b>CSSOM</b>, combine into a <b>render tree</b>, compute <b>layout</b> (reflow), then <b>paint</b> pixels, then <b>composite</b> layers together.</p>" +
      "<pre><code>HTML → DOM ─┐\n            ├─→ Render Tree → Layout (reflow) → Paint → Composite\nCSS  → CSSOM ┘</code></pre>" +
      "<p><b>What happens:</b> changing something that affects layout (size, position, adding/removing elements) forces the browser back through the expensive Layout step. Changing only visual properties that don't affect layout (color, <code>opacity</code>, <code>transform</code>) skips Layout entirely, going straight to the cheaper Paint/Composite steps.</p>" +
      "<p><b>Result:</b> two visually similar changes can have wildly different performance costs, depending on whether they touch layout at all.</p>" +
      "<p><b>Important rule:</b> layout thrashing — repeatedly reading a layout property then writing a style change in a tight loop — forces synchronous recalculation on every iteration instead of batching.</p>" +
      "<p><b>Don't confuse it with:</b> a simple visual change — animating <code>transform</code>/<code>opacity</code> is cheap; animating <code>width</code>/<code>top</code> triggers expensive reflow on every frame.</p>" +
      "<p><b>When to use:</b> understanding this to choose cheaper CSS properties for animations, and to batch DOM reads/writes.</p>" +
      "<p><b>When not to use:</b> n/a — this pipeline runs automatically; the choice is only in which properties you animate/change.</p>" +
      "<p class='ex-gotcha'><b>Layout thrashing:</b> repeatedly reading a layout property (like <code>offsetHeight</code>) and then writing a style change, in a tight loop, forces the browser to recalculate layout synchronously on every single iteration instead of batching the work — a well-known real-world performance bug. Fix by batching all your reads first, then all your writes.</p>",
  },

  /* ------------------------------------------------------------------ */
  "ES6+ language features": {
    "Template literals":
      "<p><b>Simple meaning:</b> Backtick-quoted strings that let you interpolate variables directly and span multiple lines without special escape characters.</p>" +
      "<p><b>Think of it as:</b> filling in blanks on a form instead of stitching pieces of paper together — <code>`Hi, ${name}!`</code> reads as one continuous sentence with a slot, instead of three glued fragments.</p>" +
      "<p><b>What ES6 added:</b> before this, building a string with variables meant painful concatenation (<code>'Hi, ' + name + '!'</code>); template literals let you write <code>`Hi, ${name}!`</code> directly, and backticked strings can span multiple lines as-is.</p>" +
      "<pre><code>const name = 'Ada';\nconst greeting = `Hello, ${name}! You are ${2024 - 1815} years old.`;\n\nconst multi = `line one\nline two`; // real newline, no \\n needed</code></pre>" +
      "<p><b>What happens:</b> each <code>${...}</code> slot is evaluated as a real JavaScript expression — not just a variable read, but any expression, like the subtraction shown — and the result is converted to a string and inserted in place.</p>" +
      "<p><b>Result:</b> one fully assembled string, built inline, with no manual <code>+</code> concatenation anywhere.</p>" +
      "<p><b>Important rule:</b> tagged templates (<code>tag\\`text ${value}\\`</code>) let a function intercept and process the literal's pieces before the final string is built.</p>" +
      "<p><b>Don't confuse it with:</b> regular quotes — only backticks support interpolation and real multi-line strings; single/double quotes need explicit <code>+</code> and <code>\\n</code>.</p>" +
      "<p><b>When to use:</b> any string that includes a variable or spans multiple lines.</p>" +
      "<p><b>When not to use:</b> for a truly static string with no interpolation, regular quotes are equally fine.</p>" +
      "<p class='ex-gotcha'>Tagged templates (<code>tag\\`text ${value}\\`</code>) let a function intercept and process the literal's pieces before the final string is built — this is how libraries like <code>styled-components</code> parse CSS written inside a template literal.</p>",

    "Destructuring":
      "<p><b>Simple meaning:</b> ES6's syntax for pulling values out of arrays (by position) or objects (by name) directly into variables.</p>" +
      "<p><b>Think of it as:</b> writing one line that says \"give me these named slots\" instead of a separate hand-written extraction line for each one.</p>" +
      "<p><b>What ES6 added:</b> a concise, built-in replacement for writing individual <code>const x = obj.x;</code> or <code>const first = arr[0];</code> lines one at a time.</p>" +
      "<pre><code>const [a, b] = [1, 2];             // array — by position\nconst { name, age } = user;        // object — by name</code></pre>" +
      "<p><b>What happens:</b> the array pattern reads slots by position — <code>a</code> always gets index 0. The object pattern reads by matching key name — <code>name</code> and <code>age</code> match regardless of what order they appear in <code>user</code>.</p>" +
      "<p><b>Result:</b> new independent local variables, in both cases — the source array/object is never modified.</p>" +
      "<p><b>Important rule:</b> array destructuring matches by position; object destructuring matches by name — mixing up the two mental models is a common early bug.</p>" +
      "<p><b>Don't confuse it with:</b> spread syntax — same general area of ES6 syntax, entirely different job (expanding vs. extracting).</p>" +
      "<p><b>When to use:</b> extracting known fields from a fixed-shape array or object, especially in function parameters.</p>" +
      "<p><b>When not to use:</b> deeply nested or unpredictable structures, where the pattern becomes harder to read than plain access.</p>" +
      "<p class='ex-gotcha'>For the full depth of object destructuring (nesting, renaming, defaults), see \"Destructuring\" under this, objects &amp; prototypes — here it's about recognizing it as one of ES6's headline syntax additions.</p>",

    "Spread syntax":
      "<p><b>Simple meaning:</b> The <code>...</code> operator that expands an array or object into its individual elements/properties.</p>" +
      "<p><b>Think of it as:</b> tipping a box's contents onto a table so each item sits individually, ready to be picked up separately — instead of handing over the sealed box itself.</p>" +
      "<p><b>What ES6 added (ES2018 for objects):</b> a concise way to copy, merge, or pass array/object contents without <code>concat</code>, <code>Object.assign</code>, or <code>apply</code>.</p>" +
      "<pre><code>[...[1,2], ...[3,4]];   // [1,2,3,4]\n{ ...user, age: 30 };   // shallow-copy + override</code></pre>" +
      "<p><b>What happens:</b> each <code>...</code> expands its source's items/properties in place, right inside the new literal — no explicit loop, no separate merge function call.</p>" +
      "<p><b>Result:</b> a genuinely new array or object, built from the expanded pieces of the source(s).</p>" +
      "<p><b>Important rule:</b> spread always makes a <b>shallow</b> copy — nested objects/arrays stay shared by reference between source and copy.</p>" +
      "<p><b>Don't confuse it with:</b> rest parameters — identical three dots, opposite direction: rest collects into a parameter, spread expands into a call/literal.</p>" +
      "<p><b>When to use:</b> copying, merging, or passing array/object contents concisely.</p>" +
      "<p><b>When not to use:</b> when you need a genuine deep copy — spread alone won't protect nested data.</p>" +
      "<p class='ex-gotcha'>See \"Spread with arrays\" / \"Object spread\" elsewhere in this app for the shallow-copy caveat — the important thing here is recognizing <code>...</code> as one syntax with two related but distinct uses (arrays vs objects, expand vs collect).</p>",

    "Rest parameters":
      "<p><b>Simple meaning:</b> The same <code>...</code> syntax, but used in a parameter list to <em>collect</em> the remaining arguments into a real array.</p>" +
      "<p><b>Think of it as:</b> a catch-all basket at the end of a function's parameter list — \"whatever else was passed, put it all in here, as a real array.\"</p>" +
      "<p><b>What ES6 added:</b> a real-array replacement for the old, awkward <code>arguments</code> object, which isn't a true array and doesn't exist at all in arrow functions.</p>" +
      "<pre><code>function sum(...nums) { return nums.reduce((a,b) => a+b, 0); }\nsum(1, 2, 3); // 6 — 'nums' is a genuine array</code></pre>" +
      "<p><b>What happens:</b> every argument passed to <code>sum</code> is collected into the real array <code>nums</code>, which <code>.reduce</code> can then use directly, with no conversion step needed.</p>" +
      "<p><b>Result:</b> <code>6</code> — a genuine array method worked immediately on the collected arguments.</p>" +
      "<p><b>Important rule:</b> rest <em>collects</em> (in a parameter list); spread <em>expands</em> (in a call or literal) — same three dots, opposite direction.</p>" +
      "<p><b>Don't confuse it with:</b> the <code>arguments</code> object — array-<em>like</em> but not a real array, and absent entirely in arrow functions.</p>" +
      "<p><b>When to use:</b> functions accepting an unknown or variable number of arguments.</p>" +
      "<p><b>When not to use:</b> when the function has a fixed, known parameter list.</p>" +
      "<p class='ex-gotcha'>Rest <em>collects</em> (in a parameter list); spread <em>expands</em> (in a call or literal) — same three dots, opposite direction, and it's easy to mix the two names up under pressure.</p>",

    "Default parameters":
      "<p><b>Simple meaning:</b> A fallback value a parameter takes when its argument is missing or explicitly <code>undefined</code>.</p>" +
      "<p><b>Think of it as:</b> a form field pre-filled with a suggested value — leave it blank and the suggestion is used; explicitly write something else (even something \"empty-looking\") and your input is respected.</p>" +
      "<p><b>What ES6 added:</b> before this, defaults required a manual check inside the function body (<code>b = b || 2;</code>) — with its own bug, since that also overrides a deliberately passed <code>0</code>.</p>" +
      "<pre><code>function multiply(a, b = 2) { return a * b; }\nmultiply(5);       // 10\nmultiply(5, null); // 0 — default only triggers on undefined, NOT null</code></pre>" +
      "<p><b>What happens:</b> the first call omits <code>b</code> entirely, triggering the default. The second call explicitly passes <code>null</code> — a real value, not an omission — so the default is skipped and <code>b</code> stays <code>null</code>, coercing to <code>0</code> in the multiplication.</p>" +
      "<p><b>Result:</b> <code>10</code>, then <code>0</code> — an easy trap if you expected the default to also cover <code>null</code>.</p>" +
      "<p><b>Important rule:</b> the old <code>b || 2</code> pattern breaks on any falsy argument (<code>0</code>, <code>''</code>); ES6 default parameters correctly trigger only on <code>undefined</code>.</p>" +
      "<p><b>Don't confuse it with:</b> the <code>||</code> fallback idiom — the exact buggy pattern this feature was designed to replace.</p>" +
      "<p><b>When to use:</b> simplifying function APIs and removing repetitive \"if missing\" guards.</p>" +
      "<p><b>When not to use:</b> if you also need to guard against explicit <code>null</code> — handle that separately.</p>" +
      "<p class='ex-gotcha'>The old <code>b || 2</code> pattern breaks on any falsy argument (<code>0</code>, <code>''</code>); ES6 default parameters correctly trigger only on <code>undefined</code>, which is the whole reason this feature exists as language syntax rather than a userland idiom.</p>",

    "Arrow functions":
      "<p><b>Simple meaning:</b> Shorter function syntax that also, distinctively, has no <code>this</code> of its own — it inherits <code>this</code> lexically from its surrounding scope.</p>" +
      "<p><b>Think of it as:</b> a function that never gets its own name badge and just wears whatever badge the room around it was already wearing.</p>" +
      "<p><b>What ES6 added:</b> concise syntax AND solved the classic \"lost <code>this</code> in a callback\" problem that previously required <code>.bind(this)</code> or <code>const self = this;</code> workarounds.</p>" +
      "<pre><code>const double = n => n * 2;\n\nconst timer = {\n  label: 'x',\n  start() { setTimeout(() => console.log(this.label), 100); } // inherits start()'s this\n};</code></pre>" +
      "<p><b>What happens:</b> the arrow passed to <code>setTimeout</code> has no <code>this</code> of its own, so it looks outward to <code>start()</code>'s <code>this</code> — which correctly resolves to <code>timer</code>, because <code>start</code> was called as <code>timer.start()</code>.</p>" +
      "<p><b>Result:</b> <code>this.label</code> correctly reads <code>'x'</code>, avoiding the classic lost-<code>this</code> bug a regular function callback would have here.</p>" +
      "<p><b>Important rule:</b> arrows can never be object methods or constructors — they have no <code>this</code> of their own to bind.</p>" +
      "<p><b>Don't confuse it with:</b> method shorthand (<code>greet() {}</code>) — that creates a REGULAR function with its own <code>this</code>, not an arrow.</p>" +
      "<p><b>When to use:</b> callbacks written inside a method, where inheriting the surrounding <code>this</code> is exactly what you want.</p>" +
      "<p><b>When not to use:</b> as an object method or constructor.</p>" +
      "<p class='ex-gotcha'>For the full depth on <code>this</code> inheritance and when NOT to use an arrow (never as an object method), see \"this in arrow functions\" under this, objects &amp; prototypes — the point here is recognizing arrow functions as the ES6 feature that fixed this long-standing pain point.</p>",

    "Enhanced object literals":
      "<p><b>Simple meaning:</b> ES6 shorthand for writing object literals — method shorthand, property shorthand, and computed keys, all without the old boilerplate.</p>" +
      "<p><b>Think of it as:</b> a form that auto-fills a field's label when it already matches the value's name, instead of making you type both sides every time.</p>" +
      "<p><b>What ES6 added:</b> before this, everything needed the full <code>{ name: name, greet: function() {...} }</code> form. After: property shorthand when the variable name matches the key, method shorthand dropping <code>function</code>, and <code>[expr]:</code> for computed keys.</p>" +
      "<pre><code>const name = 'Ada';\nconst key = 'role';\n\nconst user = {\n  name,                    // shorthand for name: name\n  greet() { return 'hi'; }, // shorthand for greet: function(){...}\n  [key]: 'admin'            // computed key\n};</code></pre>" +
      "<p><b>What happens:</b> <code>name</code> alone is recognized as shorthand for <code>name: name</code>, since the variable and desired key share the same identifier. <code>greet() {}</code> is shorthand for a full function-valued property. <code>[key]</code> evaluates the variable to determine the actual key name.</p>" +
      "<p><b>Result:</b> a fully-formed object, built with roughly half the boilerplate of the pre-ES6 equivalent.</p>" +
      "<p><b>Important rule:</b> method shorthand (<code>greet() {}</code>) creates a REGULAR function, not an arrow — it still gets its own <code>this</code>, bound normally by how it's called.</p>" +
      "<p><b>Don't confuse it with:</b> arrow functions — shorthand syntax never changes <code>this</code> behavior; it's purely a syntactic convenience.</p>" +
      "<p><b>When to use:</b> whenever a variable name matches the desired key, or a method is needed inline.</p>" +
      "<p><b>When not to use:</b> when the shorthand would obscure what key is actually being set — occasionally the explicit form reads clearer.</p>" +
      "<p class='ex-gotcha'>Method shorthand (<code>greet() {}</code>) creates a regular function, not an arrow — it still gets its own <code>this</code>, bound normally by how it's called. Don't assume shorthand syntax changes <code>this</code> behavior; it doesn't.</p>",

    "Computed property names":
      "<p><b>Simple meaning:</b> Using <code>[expression]</code> as an object literal's key, so the key itself can be a variable or any computed value.</p>" +
      "<p><b>Think of it as:</b> printing a label from a variable's contents at the moment you build the box, instead of building the box first and sticking the label on afterward.</p>" +
      "<p><b>What ES6 added:</b> before this, a dynamic key required creating the object first, then assigning the property in a separate step (<code>const obj = {}; obj[key] = value;</code>).</p>" +
      "<pre><code>const field = 'status';\nconst obj = { [field]: 'active' }; // { status: 'active' } — built inline</code></pre>" +
      "<p><b>What happens:</b> <code>[field]</code> evaluates <code>field</code> first, getting the string <code>'status'</code>, and uses that resulting string as the actual property name — all within the single literal expression.</p>" +
      "<p><b>Result:</b> <code>{ status: 'active' }</code>, built in one inline step instead of two separate statements.</p>" +
      "<p><b>Important rule:</b> keys are always coerced to strings (or left as symbols) — <code>{ [{}]: 'x' }</code> silently becomes the key <code>'[object Object]'</code>.</p>" +
      "<p><b>Don't confuse it with:</b> a <code>Map</code> — if you genuinely need object values as distinct keys, a <code>Map</code> is the correct tool, not a computed property.</p>" +
      "<p><b>When to use:</b> building an object literal where the key comes from a variable or runtime value.</p>" +
      "<p><b>When not to use:</b> when every key is known ahead of time — write them literally instead.</p>" +
      "<p class='ex-gotcha'>Keys are always coerced to strings (or left as symbols) — <code>{ [{}]: 'x' }</code> silently becomes the key <code>'[object Object]'</code>, which is rarely what's intended; use a <code>Map</code> if you genuinely need object keys.</p>",

    "Modules":
      "<p><b>Simple meaning:</b> ES6's native way to split code across files, with <code>import</code>/<code>export</code>, replacing older non-standard patterns (global script tags, CommonJS in the browser via bundlers, AMD).</p>" +
      "<p><b>Think of it as:</b> giving every file its own private room, with a labeled doorway (export) for anything it deliberately wants to share with other rooms — instead of every file dumping everything into one shared hallway (the global scope).</p>" +
      "<p><b>Why it exists:</b> to give JavaScript a single, native, standardized way to organize code across files, without depending on non-standard tooling.</p>" +
      "<p><b>How it works:</b> each ES module has its own scope (nothing leaks to global by accident), is statically analyzed at parse time, and its imports are hoisted and resolved before the module's own code runs.</p>" +
      "<pre><code>// math.js\nexport function add(a, b) { return a + b; }\n\n// app.js\nimport { add } from './math.js';</code></pre>" +
      "<p><b>What happens:</b> <code>math.js</code> explicitly exports <code>add</code>; everything else inside that file stays private to it. <code>app.js</code> explicitly imports just what it needs, with no risk of accidentally reading some other unrelated global.</p>" +
      "<p><b>Result:</b> two files with clearly-defined, explicit boundaries between what's shared and what's private — a structural improvement over global scripts.</p>" +
      "<p><b>Important rule:</b> in the browser, a script must be explicitly marked as a module (<code>&lt;script type=\"module\"&gt;</code>) to use <code>import</code>/<code>export</code> at all.</p>" +
      "<p><b>Don't confuse it with:</b> CommonJS — see \"ES Modules\" under Modules &amp; runtime for the full CJS-vs-ESM comparison.</p>" +
      "<p><b>When to use:</b> organizing any non-trivial codebase across multiple files.</p>" +
      "<p><b>When not to use:</b> n/a — this is the standard, recommended approach for modern code organization.</p>" +
      "<p class='ex-gotcha'>In the browser, a script must be explicitly marked as a module (<code>&lt;script type=\"module\"&gt;</code>) to use <code>import</code>/<code>export</code> at all — plain scripts don't get this syntax, and modules also run in strict mode automatically and defer execution until the DOM is parsed.</p>",

    "import":
      "<p><b>Simple meaning:</b> The ES6 keyword for pulling named or default values out of another module.</p>" +
      "<p><b>Think of it as:</b> requesting specific items from another room by name, or asking for \"the one main thing\" that room offers.</p>" +
      "<p><b>How it works:</b> three forms exist — named (curly braces, must match exported names), default (no braces, any local name), and namespace (<code>* as x</code>, everything bundled into one object).</p>" +
      "<pre><code>import { add, subtract } from './math.js'; // named\nimport Calculator from './calc.js';        // default\nimport * as math from './math.js';         // namespace object — everything</code></pre>" +
      "<p><b>What happens:</b> the named form pulls specific exports by their exact name; the default form pulls whatever that module marked as its single default, under any local name you choose; the namespace form bundles every export into one object.</p>" +
      "<p><b>Result:</b> three different local bindings, depending entirely on which import form matches how the source module exported its values.</p>" +
      "<p><b>Important rule:</b> static <code>import</code> must sit at the top level of a file — never inside an <code>if</code> or a function — because it's resolved before any code runs.</p>" +
      "<p><b>Don't confuse it with:</b> dynamic <code>import()</code> (see \"Dynamic imports\" under Modules &amp; runtime) — the function form, usable anywhere, for conditional loading.</p>" +
      "<p><b>When to use:</b> pulling values from another module at the top of a file.</p>" +
      "<p><b>When not to use:</b> for conditional, runtime-decided loading — use dynamic <code>import()</code> instead.</p>" +
      "<p class='ex-gotcha'>Static <code>import</code> must sit at the top level of a file — never inside an <code>if</code> or a function — because it's resolved before any code runs; use the separate <code>import()</code> function form (see \"Dynamic imports\") for conditional, runtime-decided loading.</p>",

    "export":
      "<p><b>Simple meaning:</b> The ES6 keyword that marks a value as available for other modules to import.</p>" +
      "<p><b>Think of it as:</b> putting a specific item on a shelf visible from outside the room, versus the rest of the room's contents which stay private by default.</p>" +
      "<p><b>How it works:</b> <code>export</code> can attach to a declaration directly, list multiple names separately, or mark one value as the module's default.</p>" +
      "<pre><code>export const PI = 3.14;               // named export, attached to a declaration\nexport { add, subtract };              // named exports, listed separately\nexport default class Calculator {}     // the module's one default export</code></pre>" +
      "<p><b>What happens:</b> each form marks its target as reachable from other files via <code>import</code> — anything NOT explicitly marked with <code>export</code> stays entirely private to that module.</p>" +
      "<p><b>Result:</b> three exported bindings, each importable in a different way depending on whether it's named or default.</p>" +
      "<p><b>Important rule:</b> a module can have unlimited named exports but at most one default.</p>" +
      "<p><b>Don't confuse it with:</b> a value simply being at the top level of a file — top-level, non-exported values are still private to that module.</p>" +
      "<p><b>When to use:</b> marking any value a module wants to share with other files.</p>" +
      "<p><b>When not to use:</b> n/a — exporting is a deliberate, explicit choice per value.</p>" +
      "<p class='ex-gotcha'>A module can have unlimited named exports but at most one default — see \"Named exports\" / \"Default exports\" for the practical difference in how each is imported.</p>",

    "Named exports":
      "<p><b>Simple meaning:</b> Exports referred to by their exact name — a module can have as many as it wants, and importers must use (or explicitly rename) that same name.</p>" +
      "<p><b>Think of it as:</b> labeled shelves — you ask for exactly the labeled item you want, by its printed name, possibly asking to relabel it for your own use.</p>" +
      "<p><b>How it works:</b> named imports are wrapped in <code>{ }</code> and must match an actual exported name, with an optional <code>as</code> to rename locally.</p>" +
      "<pre><code>// utils.js\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n\n// app.js\nimport { add, subtract as minus } from './utils.js'; // rename with 'as'</code></pre>" +
      "<p><b>What happens:</b> <code>add</code> is imported directly under its exported name. <code>subtract</code> is imported and immediately renamed to <code>minus</code> locally, via the <code>as</code> clause — both still refer to the same underlying function.</p>" +
      "<p><b>Result:</b> two usable local bindings, one kept at its original name, one renamed for local convenience or to avoid a naming collision.</p>" +
      "<p><b>Important rule:</b> named imports must match an actual exported name — <code>import add from './utils.js'</code> (no braces) tries to import a DEFAULT export that doesn't exist here.</p>" +
      "<p><b>Don't confuse it with:</b> default exports — the braces are the distinguishing syntax between the two forms.</p>" +
      "<p><b>When to use:</b> exporting multiple distinct, individually-named values from one module.</p>" +
      "<p><b>When not to use:</b> when a module truly has one primary export — a default export may fit better.</p>" +
      "<p class='ex-gotcha'>Named imports must be wrapped in <code>{ }</code> and must match an actual exported name — <code>import add from './utils.js'</code> (no braces) is trying to import a <em>default</em> export that doesn't exist here, and silently gives <code>undefined</code> rather than an error in some setups.</p>",

    "Default exports":
      "<p><b>Simple meaning:</b> A module's single \"main\" export, imported without needing curly braces and importable under any name the importer chooses.</p>" +
      "<p><b>Think of it as:</b> a shop's one flagship product, handed to any customer regardless of what name they ask for it by — unlike labeled shelf items that must be requested by their exact label.</p>" +
      "<p><b>How it works:</b> the importer's local name for a default export is entirely their own choice — there's no requirement it match anything on the exporting side.</p>" +
      "<pre><code>// Calculator.js\nexport default class Calculator { /* ... */ }\n\n// app.js — the imported name doesn't have to match anything\nimport Calc from './Calculator.js';\nimport MyCalculator from './Calculator.js'; // also valid, same module</code></pre>" +
      "<p><b>What happens:</b> both import statements pull the exact same default export from <code>Calculator.js</code> — the local names <code>Calc</code> and <code>MyCalculator</code> are arbitrary, chosen entirely by each importer.</p>" +
      "<p><b>Result:</b> two different local names, both correctly referring to the identical exported class.</p>" +
      "<p><b>Important rule:</b> because a default import's local name is entirely up to the importer, typos are never caught — <code>import Calclator from ...</code> (misspelled) works fine syntactically.</p>" +
      "<p><b>Don't confuse it with:</b> named exports — a named import typo fails immediately, since it must match a real exported name.</p>" +
      "<p><b>When to use:</b> when a module has one clear, primary export.</p>" +
      "<p><b>When not to use:</b> when a module exports several equally-important values — named exports fit better there.</p>" +
      "<p class='ex-gotcha'>Because a default import's local name is entirely up to the importer, typos are never caught — <code>import Calclator from './Calculator.js'</code> (misspelled) works fine syntactically, unlike a named import typo, which fails immediately since it must match the real exported name.</p>",

    "Optional chaining":
      "<p><b>Simple meaning:</b> <code>?.</code> safely reads a nested property, returning <code>undefined</code> instead of throwing if something along the way is <code>null</code>/<code>undefined</code>.</p>" +
      "<p><b>Think of it as:</b> tapping someone's shoulder before asking a question — no one there, no crash, just silence back.</p>" +
      "<p><b>What it replaced:</b> long, repetitive guard chains like <code>user &amp;&amp; user.profile &amp;&amp; user.profile.city</code>.</p>" +
      "<pre><code>user.profile?.city;   // undefined instead of a TypeError, if profile is missing\nuser.getName?.();     // safe optional call\nuser.tags?.[0];        // safe optional index</code></pre>" +
      "<p><b>What happens:</b> each <code>?.</code> checks its left side first — if nullish, the whole expression short-circuits to <code>undefined</code> immediately, without attempting the rest of the chain at all.</p>" +
      "<p><b>Result:</b> a clean <code>undefined</code> instead of a thrown <code>TypeError</code>, whenever the guarded step is genuinely missing.</p>" +
      "<p><b>Important rule:</b> it only guards against <code>null</code>/<code>undefined</code> — it won't protect against other genuine errors, and can't be used on the left side of an assignment.</p>" +
      "<p><b>Don't confuse it with:</b> nullish coalescing (<code>??</code>) — often paired together, but <code>?.</code> avoids a crash while <code>??</code> supplies a fallback value.</p>" +
      "<p><b>When to use:</b> reading nested properties that might legitimately be missing.</p>" +
      "<p><b>When not to use:</b> don't scatter it everywhere to silence errors that should be visible bugs.</p>" +
      "<p class='ex-gotcha'>It only guards against <code>null</code>/<code>undefined</code> — it won't protect you from other genuine errors deeper in an expression, and it can't be used on the left side of an assignment.</p>",

    "Nullish coalescing":
      "<p><b>Simple meaning:</b> <code>??</code> provides a fallback, but only when the left side is <code>null</code> or <code>undefined</code> — unlike <code>||</code>, it doesn't treat <code>0</code>, <code>''</code>, or <code>false</code> as \"missing\".</p>" +
      "<p><b>Think of it as:</b> a pickier fallback than <code>||</code> — only genuine absence triggers it; a deliberately-set <code>0</code> or empty string is respected as real data, not treated as \"nothing here.\"</p>" +
      "<pre><code>const count = 0;\ncount || 10;  // 10 — bug: 0 is falsy, treated as missing\ncount ?? 10;  // 0  — correct: 0 is a real, valid value</code></pre>" +
      "<p><b>What happens:</b> <code>||</code> checks truthiness broadly, so <code>0</code> (falsy) triggers the fallback. <code>??</code> checks specifically for <code>null</code>/<code>undefined</code>, and <code>0</code> passes that narrower check, so the real value is kept.</p>" +
      "<p><b>Result:</b> two operators, same input, opposite outcomes — because they're answering genuinely different questions.</p>" +
      "<p><b>Important rule:</b> you cannot mix <code>??</code> directly with <code>||</code> or <code>&amp;&amp;</code> without parentheses — <code>a || b ?? c</code> is a <code>SyntaxError</code>.</p>" +
      "<p><b>Don't confuse it with:</b> <code>||</code> — the two look similar but answer different questions (\"is this falsy?\" vs. \"is this nullish?\").</p>" +
      "<p><b>When to use:</b> whenever <code>0</code>, <code>''</code>, or <code>false</code> are valid values you need to preserve.</p>" +
      "<p><b>When not to use:</b> when any falsy value genuinely does mean \"not provided\" — use <code>||</code> for that instead.</p>" +
      "<p class='ex-gotcha'>You cannot mix <code>??</code> directly with <code>||</code> or <code>&amp;&amp;</code> without parentheses — <code>a || b ?? c</code> is a <code>SyntaxError</code>, forcing you to make the intended precedence explicit.</p>",

    "Logical assignment operators":
      "<p><b>Simple meaning:</b> <code>||=</code>, <code>&amp;&amp;=</code>, and <code>??=</code> combine a logical check with an assignment, only assigning when the check passes.</p>" +
      "<p><b>Think of it as:</b> a conditional \"fill in if empty\" instruction written in one symbol, instead of a separate <code>if</code> statement checking before assigning.</p>" +
      "<p><b>How it works:</b> <code>a ||= b</code> assigns <code>b</code> only if <code>a</code> is currently falsy; <code>a &amp;&amp;= b</code> assigns only if <code>a</code> is truthy; <code>a ??= b</code> assigns only if <code>a</code> is <code>null</code>/<code>undefined</code>. All three <b>short-circuit</b> — if the condition fails, the right-hand side isn't even evaluated.</p>" +
      "<pre><code>let config = { retries: 0 };\nconfig.retries ||= 3; // 3 — 0 is falsy, so it WAS reassigned (probably not intended!)\n\nlet config2 = { retries: 0 };\nconfig2.retries ??= 3; // 0 — stays 0, since 0 is not null/undefined (correct)</code></pre>" +
      "<p><b>What happens:</b> <code>||=</code> sees <code>0</code> as falsy and overwrites it with <code>3</code> — likely NOT the intent if <code>0</code> was a deliberately-set valid value. <code>??=</code> checks specifically for nullish, and <code>0</code> doesn't qualify, so it's correctly left alone.</p>" +
      "<p><b>Result:</b> <code>config.retries</code> ends up <code>3</code> (probably a bug); <code>config2.retries</code> correctly stays <code>0</code>.</p>" +
      "<p><b>Important rule:</b> the short-circuiting matters beyond performance — if the right-hand side is an expensive call or has side effects, <code>??=</code> guarantees it never runs when the left side is already non-nullish.</p>" +
      "<p><b>Don't confuse it with:</b> <code>a = a ?? b</code> written manually — functionally equivalent, but <code>??=</code> makes the short-circuit intent explicit and terser.</p>" +
      "<p><b>When to use:</b> conditionally defaulting a value that might already be legitimately set, especially where <code>0</code>/<code>''</code>/<code>false</code> are valid.</p>" +
      "<p><b>When not to use:</b> when the fallback condition genuinely should be broad falsy-checking — <code>||=</code> is correct there.</p>" +
      "<p class='ex-gotcha'>The short-circuiting matters for more than performance — if the right-hand side is a setter with side effects (or an expensive call), <code>??=</code> guarantees that code never runs at all when the left side is already non-nullish, unlike writing out <code>a = a ?? expensiveCall()</code> naively without checking it's actually equivalent.</p>",

    "for...of":
      "<p><b>Simple meaning:</b> A loop that iterates over the <b>values</b> of any iterable — arrays, strings, Maps, Sets, and any custom object implementing the iterator protocol.</p>" +
      "<p><b>Think of it as:</b> walking through a box and handling each item you pull out — as opposed to <code>for...in</code>, which hands you the item's shelf-label instead of the item itself.</p>" +
      "<p><b>How it works:</b> <code>for...of</code> gives you <b>values</b> from an iterable. <code>for...in</code> gives you enumerable <b>keys</b> (as strings) from any object, including inherited ones.</p>" +
      "<pre><code>const arr = [10, 20, 30];\nfor (const x of arr) console.log(x);      // 10, 20, 30 — the values\nfor (const i in arr) console.log(typeof i, i); // 'string' '0', 'string' '1', 'string' '2' — STRING indices!</code></pre>" +
      "<p><b>What happens:</b> <code>for...of</code> consumes <code>arr</code>'s iterator, yielding each actual value in turn. <code>for...in</code> instead enumerates the array's own keys — which for an array are the numeric indices, but always as strings.</p>" +
      "<p><b>Result:</b> real numbers from <code>for...of</code>; string index labels from <code>for...in</code> — visibly different types for what looks like a similar loop.</p>" +
      "<p><b>Important rule:</b> using <code>for...in</code> on an array gives string indices, not numbers, and will also pick up any enumerable properties added to <code>Array.prototype</code> by other code.</p>" +
      "<p><b>Don't confuse it with:</b> <code>for...in</code> — reserve that for genuinely inspecting an object's own keys, never for arrays.</p>" +
      "<p><b>When to use:</b> iterating any iterable's actual values — arrays, strings, Maps, Sets.</p>" +
      "<p><b>When not to use:</b> for arrays where you want keys instead of values — use <code>.forEach</code>/<code>.entries()</code> for index+value together.</p>" +
      "<p class='ex-gotcha'>Using <code>for...in</code> on an array gives you string indices, not numbers — and it will also pick up any enumerable properties added to <code>Array.prototype</code> by other code. Use <code>for...of</code> (values) or <code>.forEach</code>/<code>.entries()</code> (index+value) for arrays instead.</p>",

    "Symbols":
      "<p><b>Simple meaning:</b> A primitive type whose every value is guaranteed unique — used mainly as \"invisible\", collision-proof object keys.</p>" +
      "<p><b>Think of it as:</b> a one-of-a-kind key that can never accidentally match anyone else's key, even one with an identical printed description on it.</p>" +
      "<p><b>How it works:</b> <code>Symbol('description')</code> creates a value that is never <code>===</code> to any other symbol, even one with the identical description. Symbol-keyed properties are skipped by <code>Object.keys</code>, <code>for...in</code>, and <code>JSON.stringify</code>.</p>" +
      "<pre><code>const id = Symbol('id');\nconst user = { name: 'Ada', [id]: 123 };\nObject.keys(user);       // ['name'] — the symbol key is invisible here\nJSON.stringify(user);    // '{\"name\":\"Ada\"}' — symbol silently dropped\n\nSymbol('x') === Symbol('x'); // false — always unique, even with the same description</code></pre>" +
      "<p><b>What happens:</b> the symbol-keyed property genuinely exists on <code>user</code>, but both <code>Object.keys</code> and <code>JSON.stringify</code> deliberately skip symbol keys entirely — they're only visible via <code>Object.getOwnPropertySymbols</code>.</p>" +
      "<p><b>Result:</b> the property is functionally \"invisible\" to normal enumeration and serialization, while still fully accessible if you have the specific symbol reference.</p>" +
      "<p><b>Important rule:</b> <code>Symbol.iterator</code> is a \"well-known symbol\" built into the language — the exact key JavaScript looks for to decide whether something is iterable.</p>" +
      "<p><b>Don't confuse it with:</b> a string key — even an unusual one; symbols are a genuinely distinct primitive type, not just a stylistic string.</p>" +
      "<p><b>When to use:</b> creating collision-proof, hidden metadata keys on an object.</p>" +
      "<p><b>When not to use:</b> for ordinary object properties meant to be visible and serializable — use string keys.</p>" +
      "<p class='ex-gotcha'><code>Symbol.iterator</code> is a \"well-known symbol\" built into the language — it's the exact key JavaScript looks for to decide whether something is iterable, which is what makes <code>for...of</code>, spread, and destructuring work on arrays, strings, Maps, and Sets (see \"Iterators\").</p>",

    "Iterators":
      "<p><b>Simple meaning:</b> An object with a <code>.next()</code> method that hands out one value at a time, marking when it's done.</p>" +
      "<p><b>Think of it as:</b> a vending-machine dispenser — each pull gives you one item plus a flag saying whether the machine is now empty.</p>" +
      "<p><b>How it works:</b> an object is <b>iterable</b> if it has a <code>[Symbol.iterator]()</code> method returning an <b>iterator</b> — an object whose <code>.next()</code> returns <code>{ value, done }</code> each call, until <code>done</code> is <code>true</code>.</p>" +
      "<pre><code>const arr = [10, 20];\nconst it = arr[Symbol.iterator]();\nit.next(); // { value: 10, done: false }\nit.next(); // { value: 20, done: false }\nit.next(); // { value: undefined, done: true }</code></pre>" +
      "<p><b>What happens:</b> each <code>.next()</code> call advances the iterator by one step, returning the current value plus a <code>done</code> flag. Once every element is exhausted, further calls return <code>{ value: undefined, done: true }</code>.</p>" +
      "<p><b>Result:</b> a controlled, one-at-a-time sequence of values with a clear end signal — the same protocol <code>for...of</code>, spread, and destructuring all rely on under the hood.</p>" +
      "<p><b>Important rule:</b> implementing <code>[Symbol.iterator]()</code> on a custom object automatically makes it work with <code>for...of</code>, spread, and destructuring — native-feeling support for free.</p>" +
      "<p><b>Don't confuse it with:</b> generators — a generator is the EASY way to build an iterator, not a separate concept.</p>" +
      "<p><b>When to use:</b> building a custom data structure that should work with <code>for...of</code> and spread.</p>" +
      "<p><b>When not to use:</b> when a generator function can produce the same iterator with far less boilerplate.</p>" +
      "<p class='ex-gotcha'>Implementing <code>[Symbol.iterator]()</code> on your own custom object automatically makes it work with <code>for...of</code>, spread, and destructuring — you get native-feeling syntax support for free, without those features knowing anything specifically about your object's structure.</p>",

    "Generators":
      "<p><b>Simple meaning:</b> A <code>function*</code> that can pause with <code>yield</code> and resume later — the easy way to build an iterator without hand-writing a <code>.next()</code> method.</p>" +
      "<p><b>Think of it as:</b> a storyteller who pauses mid-sentence exactly when asked, remembers precisely where they stopped, and continues from that exact spot the next time you ask for more.</p>" +
      "<p><b>How it works:</b> calling a generator function returns a generator object (which is itself an iterator) without running the body. Each <code>.next()</code> call runs until the next <code>yield</code>, returns that value, and pauses exactly there.</p>" +
      "<pre><code>function* range(start, end) {\n  for (let i = start; i < end; i++) yield i;\n}\nfor (const n of range(1, 4)) console.log(n); // 1, 2, 3\n\nfunction* naturals() { let n = 1; while (true) yield n++; } // infinite, but LAZY</code></pre>" +
      "<p><b>What happens:</b> <code>range(1, 4)</code> doesn't run its body immediately — it returns a generator object. Each iteration of <code>for...of</code> calls <code>.next()</code> once, advancing the loop by exactly one <code>yield</code>. <code>naturals</code>' infinite <code>while (true)</code> never actually spins forever because nothing forces it to run to completion.</p>" +
      "<p><b>Result:</b> <code>1, 2, 3</code> logged from <code>range</code>; <code>naturals()</code> is perfectly safe to define despite its infinite loop, since each value is only computed on demand.</p>" +
      "<p><b>Important rule:</b> generators are lazy by nature — this is precisely what makes an \"infinite\" generator safe to write, since each value is computed only the instant it's requested.</p>" +
      "<p><b>Don't confuse it with:</b> a regular function that returns an array — a generator never computes all its values upfront; it computes them one at a time, on demand.</p>" +
      "<p><b>When to use:</b> building custom iterators, or lazy/infinite sequences.</p>" +
      "<p><b>When not to use:</b> for simple, finite, already-known data — a plain array is simpler.</p>" +
      "<p class='ex-gotcha'>Generators are lazy by nature — this is precisely what makes an \"infinite\" generator safe to write: each value is computed only the instant it's requested, never all at once upfront.</p>",

    "Map":
      "<p><b>Simple meaning:</b> A key-value collection like an object, but with real advantages: any type can be a key, insertion order is preserved, and it has a built-in <code>.size</code>.</p>" +
      "<p><b>Think of it as:</b> a proper filing system where the label on a folder can be anything — a word, a number, even another physical object — not just plain text, unlike an ordinary object.</p>" +
      "<p><b>Map vs Object — the real comparison:</b> object keys are always coerced to strings/symbols; a <code>Map</code> key can be <em>anything</em>, including an object or a function. A <code>Map</code> always iterates in insertion order and has a direct <code>.size</code> property.</p>" +
      "<pre><code>const objKey = { role: 'admin' };\nconst m = new Map();\nm.set(objKey, 'has extra permissions');\nm.set('plain string key', 'ok');\n\nm.get(objKey); // 'has extra permissions' — the OBJECT itself is the key\nm.size;         // 2</code></pre>" +
      "<p><b>What happens:</b> <code>objKey</code> itself — the actual object, not a coerced string — becomes a real, distinct key in the <code>Map</code>. Reading it back with the same object reference correctly retrieves the associated value.</p>" +
      "<p><b>Result:</b> a working object-keyed lookup — something an ordinary object literal cannot correctly represent, since it would coerce <code>objKey</code> to a meaningless string.</p>" +
      "<p><b>Important rule:</b> an object literal cannot use another object as a genuinely distinct key — <code>{ [objKey]: 'x' }</code> coerces it to the useless string <code>'[object Object]'</code>.</p>" +
      "<p><b>Don't confuse it with:</b> a plain object — reach for <code>Map</code> specifically when non-string keys or guaranteed insertion order matter.</p>" +
      "<p><b>When to use:</b> when keys aren't simple strings, or when insertion order and frequent size checks matter.</p>" +
      "<p><b>When not to use:</b> for simple, string-keyed data where a plain object is more familiar and JSON-serializable.</p>" +
      "<p class='ex-gotcha'>An object literal cannot use another object as a genuinely distinct key — <code>{ [objKey]: 'x' }</code> coerces <code>objKey</code> to the useless string <code>'[object Object]'</code>. This is exactly the case a <code>Map</code> was designed to solve.</p>",

    "Set":
      "<p><b>Simple meaning:</b> A collection that only ever holds unique values — adding a duplicate is silently a no-op.</p>" +
      "<p><b>Think of it as:</b> a guest list where the doorman refuses to add a name already on it — no error, no duplicate entry, just quietly ignored.</p>" +
      "<p><b>How it works:</b> a <code>Set</code> uses <code>===</code>-like equality (technically \"SameValueZero\") to decide whether a value is already present.</p>" +
      "<pre><code>const nums = new Set([1, 2, 2, 3]);\nnums.size;        // 3 — the duplicate 2 was never actually added\nconst unique = [...new Set([1, 2, 2, 3])]; // [1, 2, 3] — the standard dedupe idiom</code></pre>" +
      "<p><b>What happens:</b> constructing the <code>Set</code> from an array with a duplicate <code>2</code> silently keeps only one copy — the second <code>2</code> is simply never added. Spreading the <code>Set</code> back into an array gives a clean, deduplicated list.</p>" +
      "<p><b>Result:</b> <code>size</code> is <code>3</code>, not <code>4</code> — and the spread idiom is the standard, one-line way to deduplicate an array.</p>" +
      "<p><b>Important rule:</b> two structurally-identical but separately-created objects are still treated as different members — <code>new Set([{}, {}]).size</code> is <code>2</code>, not <code>1</code>, because they're different references.</p>" +
      "<p><b>Don't confuse it with:</b> deep equality — <code>Set</code> only knows about reference/value identity, never structural content comparison.</p>" +
      "<p><b>When to use:</b> deduplicating a list, or fast membership checks.</p>" +
      "<p><b>When not to use:</b> when you need key-value pairs — use a <code>Map</code> instead.</p>" +
      "<p class='ex-gotcha'><code>Set</code> uses <code>===</code>-like equality (technically \"SameValueZero\"), so two structurally-identical but separately-created objects are still treated as different members — <code>new Set([{}, {}]).size</code> is <code>2</code>, not <code>1</code>, because they're different references.</p>",

    "WeakMap":
      "<p><b>Simple meaning:</b> Like <code>Map</code>, but its keys must be objects and are held <b>weakly</b> — that reference alone doesn't stop garbage collection.</p>" +
      "<p><b>Think of it as:</b> a sticky note attached to a physical object, rather than a filing entry that keeps the object itself alive just by existing — throw away the object, and the sticky note quietly goes with it.</p>" +
      "<p><b>How it works:</b> <code>WeakMap</code> keys must be objects (never primitives), aren't iterable, and have no <code>.size</code> — you can only interact with a specific object you already have a reference to.</p>" +
      "<pre><code>let user = { name: 'Ada' };\nconst metadata = new WeakMap();\nmetadata.set(user, { lastSeen: Date.now() });\n\nuser = null; // no other references — the WeakMap entry can now be garbage collected too</code></pre>" +
      "<p><b>What happens:</b> once <code>user</code> is set to <code>null</code> and nothing else references the original object, that object (and its associated entry in <code>metadata</code>) becomes eligible for garbage collection — unlike a regular <code>Map</code>, which would keep it alive forever via a strong reference.</p>" +
      "<p><b>Result:</b> the metadata entry doesn't leak memory just because it was once cached — it disappears alongside the object it described.</p>" +
      "<p><b>Important rule:</b> the missing iteration/<code>.size</code> is deliberate, not a limitation — exposing that would be inherently unpredictable given when GC actually runs.</p>" +
      "<p><b>Don't confuse it with:</b> a regular <code>Map</code> — that holds keys strongly, preventing garbage collection entirely.</p>" +
      "<p><b>When to use:</b> attaching metadata to objects without preventing their garbage collection.</p>" +
      "<p><b>When not to use:</b> when you need to iterate the collection or check its size.</p>" +
      "<p class='ex-gotcha'>The missing iteration/<code>.size</code> is deliberate, not a limitation to work around — see \"WeakMap/WeakSet use cases\" under Advanced JavaScript for why exposing that would be inherently unpredictable given when GC actually runs.</p>",

    "WeakSet":
      "<p><b>Simple meaning:</b> Like <code>Set</code>, but its members must be objects, held weakly — not iterable, no <code>.size</code>.</p>" +
      "<p><b>Think of it as:</b> a \"seen it\" stamp you can check for on a specific object, without that stamp itself keeping the object from ever being thrown away.</p>" +
      "<p><b>Why it exists:</b> for tracking \"has this specific object been seen/processed?\" without preventing that object from being garbage collected once nothing else references it.</p>" +
      "<pre><code>const processed = new WeakSet();\nfunction process(obj) {\n  if (processed.has(obj)) return; // already handled\n  processed.add(obj);\n  // ... do the real work\n}</code></pre>" +
      "<p><b>What happens:</b> each call checks whether <code>obj</code> is already in <code>processed</code> before doing any work — a cheap, reference-based membership check that never needs the object to be listed or counted anywhere.</p>" +
      "<p><b>Result:</b> duplicate processing is avoided, and if <code>obj</code> is later discarded elsewhere in the program, its entry in <code>processed</code> disappears too — no manual cleanup needed.</p>" +
      "<p><b>Important rule:</b> because it can't be iterated, a <code>WeakSet</code> is only useful for membership checks on objects you already have a direct reference to.</p>" +
      "<p><b>Don't confuse it with:</b> a regular <code>Set</code> — that would keep every processed object alive forever, purely from being tracked.</p>" +
      "<p><b>When to use:</b> tracking \"has this object been seen\" without leaking memory.</p>" +
      "<p><b>When not to use:</b> when you need to enumerate what's currently tracked — use a regular <code>Set</code> instead.</p>" +
      "<p class='ex-gotcha'>Because it can't be iterated, a <code>WeakSet</code> is only useful for membership checks (<code>.has()</code>) on objects you already have a direct reference to — you can never ask it \"what's currently in you?\", which is the deliberate trade for allowing garbage collection.</p>",
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

  "Arrays & modern data handling": [
    { level: "easy", tag: "map return",
      q: "What does this log, and why?<pre><code>const nums = [1, 2, 3];\nconst doubled = nums.map(n => { n * 2; });\nconsole.log(doubled);</code></pre>",
      a: "<p><code>[undefined, undefined, undefined]</code>. The callback uses a <code>{}</code> block body but never <code>return</code>s, so every call implicitly returns <code>undefined</code> — and <code>map</code> collects exactly whatever the callback returns. <b>Fix:</b> <code>n => n * 2</code> (implicit return) or add <code>return</code> inside the block.</p>" },

    { level: "easy", tag: "forEach vs map",
      q: "What does <code>result</code> equal?<pre><code>const result = [1, 2, 3].forEach(n => n * 2);\nconsole.log(result);</code></pre>",
      a: "<p><code>undefined</code>. <code>forEach</code> always returns <code>undefined</code> — it exists purely for side effects and never builds a new array. Beginners often reach for it expecting <code>map</code>'s behavior; if you need the transformed values back, you need <code>map</code> instead.</p>" },

    { level: "easy", tag: "find vs findIndex",
      q: "What does each return when nothing matches?<pre><code>const users = [{ id: 1 }, { id: 2 }];\nconsole.log(users.find(u => u.id === 99));\nconsole.log(users.findIndex(u => u.id === 99));</code></pre>",
      a: "<p><code>undefined</code>, then <code>-1</code>. <code>find</code> returns the missing-value sentinel for \"an item\" (<code>undefined</code>); <code>findIndex</code> returns the missing-value sentinel for \"a position\" (<code>-1</code>, since <code>0</code> is a valid index and can't mean \"not found\"). Always guard before using either result directly.</p>" },

    { level: "medium", tag: "sort default order",
      q: "What does this log, and why isn't it numeric order?<pre><code>const nums = [40, 1, 5, 200];\nnums.sort();\nconsole.log(nums);</code></pre>",
      a: "<p><code>[1, 200, 40, 5]</code>.</p><p>With no compare function, <code>sort()</code> converts every element to a <b>string</b> and compares them character by character. <code>\"1\"</code> sorts before <code>\"200\"</code> because <code>'1' &lt; '2'</code>; <code>\"200\"</code> sorts before <code>\"40\"</code> because <code>'2' &lt; '4'</code>. <b>Fix:</b> <code>nums.sort((a, b) => a - b)</code>.</p>" },

    { level: "medium", tag: "slice vs splice",
      q: "What does <code>arr</code> equal after each line, and which one mutated it?<pre><code>const arr = [1, 2, 3, 4, 5];\nconst a = arr.slice(1, 3);\nconsole.log(arr, a);\n\nconst b = arr.splice(1, 2);\nconsole.log(arr, b);</code></pre>",
      a: "<p>After <code>slice</code>: <code>arr</code> is still <code>[1,2,3,4,5]</code> (unchanged), <code>a</code> is <code>[2,3]</code> — a copy of the range, original untouched.</p><p>After <code>splice</code>: <code>arr</code> is now <code>[1,4,5]</code> (mutated in place — 2 elements removed starting at index 1), <code>b</code> is <code>[2,3]</code> — the removed items. <code>slice</code> reads and copies; <code>splice</code> cuts and mutates.</p>" },

    { level: "medium", tag: "reduce no initial value",
      q: "What happens here, and why?<pre><code>const total = [].reduce((acc, n) => acc + n);\nconsole.log(total);</code></pre>",
      a: "<p>Throws <code>TypeError: Reduce of empty array with no initial value</code>.</p><p>Without a starting value, <code>reduce</code> uses the array's <b>first element</b> as the initial accumulator and starts iterating from the second. On an empty array there is no first element to fall back on, so it has nothing to return and throws instead. <b>Fix:</b> always pass a starting value — <code>[].reduce((acc, n) => acc + n, 0)</code> safely returns <code>0</code>.</p>" },

    { level: "medium", tag: "vacuous truth",
      q: "What does each log?<pre><code>console.log([].every(n => n > 100));\nconsole.log([].some(n => n > 100));</code></pre>",
      a: "<p><code>true</code>, then <code>false</code>. On an <b>empty array</b>, <code>every</code> is vacuously <code>true</code> — there's no element to fail the check, so \"all elements pass\" holds trivially. <code>some</code> is the mirror case: with no elements to find a match, it can never find one, so it's <code>false</code>. This is easy to get backwards under interview pressure.</p>" },

    { level: "medium", tag: "shallow copy of array of objects",
      q: "What does <code>original[0].name</code> log after this?<pre><code>const original = [{ name: \"Ada\" }];\nconst copy = [...original];\ncopy[0].name = \"Grace\";\nconsole.log(original[0].name);</code></pre>",
      a: "<p><code>\"Grace\"</code>. Spread makes a shallow copy of the outer array — the <em>array itself</em> is new, but each element is still the same object reference as in the original. Mutating <code>copy[0]</code> mutates the one shared object, visible from both arrays. Fix with <code>original.map(o => ({ ...o }))</code> or <code>structuredClone</code>.</p>" },

    { level: "hard", tag: "chaining map/filter/reduce",
      q: "Given orders, write one chain that returns the total value of all <code>\"shipped\"</code> orders.<pre><code>const orders = [\n  { status: \"shipped\", value: 100 },\n  { status: \"pending\", value: 50 },\n  { status: \"shipped\", value: 75 },\n];</code></pre>",
      a: "<pre><code>const total = orders\n  .filter(o => o.status === \"shipped\")\n  .reduce((sum, o) => sum + o.value, 0);\n// 175</code></pre><p><code>filter</code> selects the matching subset first (never mutating <code>orders</code>), then <code>reduce</code> combines that subset's values into a single total. Each step returns a new value, keeping the chain readable top-to-bottom.</p>" },

    { level: "hard", tag: "dedupe by key",
      q: "Given a list with duplicate <code>id</code>s, write a one-liner to keep only the first occurrence of each id.<pre><code>const items = [\n  { id: 1, name: \"a\" }, { id: 2, name: \"b\" }, { id: 1, name: \"c\" },\n];\n// desired: [{id:1,name:'a'}, {id:2,name:'b'}]</code></pre>",
      a: "<pre><code>const seen = new Set();\nconst unique = items.filter(item => {\n  if (seen.has(item.id)) return false;\n  seen.add(item.id);\n  return true;\n});\n// [{id:1,name:'a'}, {id:2,name:'b'}]</code></pre><p>A <code>Set</code> gives O(1) \"have I seen this id before\" checks — far better than scanning the results array with <code>.find()</code> inside the filter, which would be O(n²) on larger lists.</p>" },
  ],

  "this, objects & prototypes": [
    { level: "easy", tag: "this basics",
      q: "What does each log?<pre><code>const user = {\n  name: \"Ada\",\n  greet() { return this.name; }\n};\n\nconsole.log(user.greet());\n\nconst fn = user.greet;\nconsole.log(fn());</code></pre>",
      a: "<p><code>\"Ada\"</code>, then <code>undefined</code>.</p><p><code>this</code> is decided by the <b>call site</b>, not where the function was written. In <code>user.greet()</code>, <code>user</code> sits left of the dot → <code>this === user</code>. Assigning to <code>fn</code> strips the dot away, so there is no owner and <code>this</code> falls back to the global object (or <code>undefined</code> in strict mode).</p><p><b>Fix:</b> <code>const fn = user.greet.bind(user);</code></p>" },

    { level: "easy", tag: "arrow vs method",
      q: "Why does this print <code>undefined</code>, and what is the fix?<pre><code>const user = {\n  name: \"Ada\",\n  greet: () => this.name\n};\nconsole.log(user.greet());</code></pre>",
      a: "<p>Arrow functions have <b>no <code>this</code> of their own</b> — they inherit it lexically from the surrounding scope. An object literal is <em>not</em> a scope, so <code>this</code> here comes from outside the object entirely, not from <code>user</code>.</p><p><b>Fix — use a regular method:</b></p><pre><code>const user = {\n  name: \"Ada\",\n  greet() { return this.name; }  // 'Ada'\n};</code></pre><p><b>Rule of thumb:</b> arrows are great for callbacks <em>inside</em> a method, wrong <em>as</em> the method.</p>" },

    { level: "easy", tag: "optional chaining & ??",
      q: "Predict each line:<pre><code>const user = { profile: null, count: 0 };\n\nuser.profile?.city;\nuser.count || 10;\nuser.count ?? 10;\nuser.profile.city;</code></pre>",
      a: "<p><code>undefined</code>, <code>10</code>, <code>0</code>, then a <b>TypeError</b>.</p><ul><li><code>?.</code> short-circuits on null/undefined → <code>undefined</code>.</li><li><code>||</code> falls back on <em>any</em> falsy value, so a valid <code>0</code> is lost → <code>10</code>.</li><li><code>??</code> only falls back on null/undefined, so <code>0</code> survives.</li><li>The last line has no guard: reading <code>.city</code> of <code>null</code> throws.</li></ul><p>The <code>||</code> vs <code>??</code> distinction is the point of the whole question.</p>" },

    { level: "medium", tag: "call / apply / bind",
      q: "Fill in all three so each logs <code>\"Ada from London\"</code>:<pre><code>function intro(city) {\n  return this.name + \" from \" + city;\n}\nconst person = { name: \"Ada\" };\n\n// intro.call(...)\n// intro.apply(...)\n// intro.bind(...)</code></pre>",
      a: "<pre><code>intro.call(person, \"London\");     // args as a list\nintro.apply(person, [\"London\"]);  // args as an array\n\nconst bound = intro.bind(person);\nbound(\"London\");                  // bind RETURNS a function</code></pre><p><b>Key difference:</b> <code>call</code> and <code>apply</code> invoke <em>immediately</em> and differ only in argument packaging (<b>C</b>all = <b>C</b>ommas, <b>A</b>pply = <b>A</b>rray). <code>bind</code> invokes nothing — it hands back a new function with <code>this</code> locked in permanently.</p>" },

    { level: "medium", tag: "dynamic keys",
      q: "Why is the second log <code>undefined</code>, and how do you build <code>{ status: \"active\" }</code> dynamically?<pre><code>const user = { name: \"Ada\" };\nconst key = \"name\";\n\nconsole.log(user[key]);\nconsole.log(user.key);</code></pre>",
      a: "<p><code>\"Ada\"</code>, then <code>undefined</code>. Brackets <b>evaluate</b> the expression inside (<code>key</code> → <code>\"name\"</code>); the dot always means the <b>literal text</b> after it, so <code>user.key</code> looks for a property actually named <code>\"key\"</code>.</p><p><b>Building a dynamic key</b> — computed property syntax:</p><pre><code>const field = \"status\";\nconst obj = { [field]: \"active\" }; // { status: 'active' }\n\n// without brackets you get the literal word:\n{ field: \"active\" }                // { field: 'active' }</code></pre>" },

    { level: "medium", tag: "destructuring",
      q: "What are <code>city</code>, <code>role</code>, and <code>label</code>?<pre><code>const user = {\n  name: \"Ada\",\n  address: { city: \"London\" },\n  label: null\n};\n\nconst { address: { city } } = user;\nconst { role = \"guest\" } = user;\nconst { label = \"none\" } = user;</code></pre>",
      a: "<p><code>city = \"London\"</code>, <code>role = \"guest\"</code>, <code>label = null</code>.</p><p>The nested pattern reaches into <code>address</code>. <code>role</code> is missing entirely → <code>undefined</code> → the default fires.</p><p><b>The trap is <code>label</code>:</b> defaults only trigger on <code>undefined</code>, <b>never on <code>null</code></b>. Since <code>label</code> exists and holds <code>null</code>, the default is skipped. Use <code>user.label ?? \"none\"</code> if you want null handled too.</p>" },

    { level: "medium", tag: "prototype vs own",
      q: "Predict all four:<pre><code>function User(name) { this.name = name; }\nUser.prototype.greet = function () { return this.name; };\n\nconst u = new User(\"Ada\");\n\nu.greet();\nu.hasOwnProperty(\"name\");\nu.hasOwnProperty(\"greet\");\nObject.keys(u);</code></pre>",
      a: "<p><code>\"Ada\"</code>, <code>true</code>, <code>false</code>, <code>[\"name\"]</code>.</p><p><code>name</code> was assigned onto the instance by the constructor, so it is an <b>own</b> property. <code>greet</code> lives on <code>User.prototype</code> and is only <em>borrowed</em> through the prototype chain — the instance never owns it.</p><p><code>Object.keys</code> lists only own enumerable properties, which is exactly why prototype methods never show up there. That is the whole point: one shared <code>greet</code> serves a thousand instances instead of being copied into each.</p>" },

    { level: "medium", tag: "new keyword",
      q: "What happens here, and why?<pre><code>function User(name) {\n  this.name = name;\n}\n\nconst a = User(\"Ada\");   // note: no 'new'\nconsole.log(a);</code></pre>",
      a: "<p><code>a</code> is <code>undefined</code>.</p><p>Without <code>new</code> this is an ordinary function call — no object is created and nothing is returned. In <b>strict mode</b> <code>this</code> is <code>undefined</code>, so <code>this.name = name</code> throws a TypeError. In <b>sloppy mode</b> it is worse: <code>this</code> is the global object, so it silently creates a global <code>name</code> variable and returns <code>undefined</code>.</p><p><b>What <code>new</code> actually does:</b></p><pre><code>1. create a fresh {}\n2. link its prototype → User.prototype\n3. bind this → that object\n4. run the body\n5. return this implicitly</code></pre><p>ES6 classes fix this by throwing immediately if called without <code>new</code>.</p>" },

    { level: "medium", tag: "shallow copy",
      q: "What does the last line log?<pre><code>const original = { name: \"Ada\", address: { city: \"London\" } };\nconst copy = { ...original };\n\ncopy.name = \"Sam\";\ncopy.address.city = \"Paris\";\n\nconsole.log(original.name);\nconsole.log(original.address.city);</code></pre>",
      a: "<p><code>\"Ada\"</code>, then <code>\"Paris\"</code>.</p><p>Spread makes a <b>shallow</b> copy. Top-level primitives like <code>name</code> are genuinely duplicated, so changing the copy is safe. But <code>address</code> was copied <em>by reference</em> — both objects point at the same nested object, so mutating it through either name is visible from both.</p><p><b>Fixes:</b></p><pre><code>// deep clone\nconst copy = structuredClone(original);\n\n// or copy the nested level explicitly\nconst copy = { ...original, address: { ...original.address } };</code></pre>" },

    { level: "hard", tag: "this in callbacks",
      q: "Why does this log <code>undefined</code>, and what are three ways to fix it?<pre><code>const counter = {\n  count: 5,\n  report() {\n    setTimeout(function () {\n      console.log(this.count);\n    }, 100);\n  }\n};\ncounter.report();</code></pre>",
      a: "<p>The callback passed to <code>setTimeout</code> is invoked as a <b>plain function</b>, not as a method of <code>counter</code>. It gets its own <code>this</code> (the timer/global object), so <code>this.count</code> is <code>undefined</code>.</p><p><b>Fix 1 — arrow function</b> (inherits <code>this</code> from <code>report</code>):</p><pre><code>setTimeout(() => console.log(this.count), 100);</code></pre><p><b>Fix 2 — bind:</b></p><pre><code>setTimeout(function () {\n  console.log(this.count);\n}.bind(this), 100);</code></pre><p><b>Fix 3 — capture it in a variable</b> (the pre-ES6 pattern):</p><pre><code>const self = this;\nsetTimeout(function () {\n  console.log(self.count);\n}, 100);</code></pre><p>In modern code, Fix 1 is the idiomatic answer.</p>" },

    { level: "hard", tag: "prototype chain",
      q: "Trace the lookup and predict the output:<pre><code>const animal = { speak() { return \"sound\"; } };\nconst dog = Object.create(animal);\nconst puppy = Object.create(dog);\n\npuppy.name = \"Rex\";\n\nconsole.log(puppy.speak());\nconsole.log(puppy.hasOwnProperty(\"speak\"));\nconsole.log(puppy.fly);</code></pre>",
      a: "<p><code>\"sound\"</code>, <code>false</code>, <code>undefined</code>.</p><p><b>The walk for <code>speak</code>:</b></p><pre><code>puppy   → not found\ndog     → not found\nanimal  → FOUND → called</code></pre><p><b>The walk for <code>fly</code>:</b></p><pre><code>puppy → dog → animal → Object.prototype → null\n→ nothing found → undefined (no error)</code></pre><p>A missing <b>property</b> returns <code>undefined</code> quietly. Calling it (<code>puppy.fly()</code>) is what throws a TypeError. And <code>hasOwnProperty</code> is itself found on <code>Object.prototype</code> — proof the chain is working even as it reports <code>false</code>.</p>" },

    { level: "hard", tag: "class inheritance",
      q: "Find the bug, and explain what <code>super</code> does in both places:<pre><code>class Animal {\n  constructor(name) { this.name = name; }\n  speak() { return this.name + \" makes a sound\"; }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    this.breed = breed;\n    super(name);\n  }\n  speak() { return super.speak() + \" — a bark\"; }\n}\n\nnew Dog(\"Rex\", \"Lab\");</code></pre>",
      a: "<p><b>Bug:</b> <code>this.breed = breed</code> runs before <code>super(name)</code> → <code>ReferenceError: Must call super constructor before accessing 'this'</code>.</p><p>In a derived class, the <b>parent constructor is what creates the object</b> that <code>this</code> refers to. Until <code>super()</code> returns, <code>this</code> does not exist yet.</p><pre><code>constructor(name, breed) {\n  super(name);        // must come first\n  this.breed = breed;\n}</code></pre><p><b>Two different jobs for <code>super</code>:</b></p><ul><li>In the constructor, <code>super(...)</code> <b>calls the parent constructor</b>.</li><li>In a method, <code>super.method()</code> <b>calls the parent's version</b> of an overridden method — here letting <code>Dog.speak</code> extend rather than replace <code>Animal.speak</code>.</li></ul><p>Fixed, it returns <code>\"Rex makes a sound — a bark\"</code>.</p>" },

    { level: "hard", tag: "encapsulation",
      q: "Which of these is truly private, and why does the third one leak?<pre><code>// A\nclass A { _balance = 100; }\n\n// B\nclass B { #balance = 100; }\n\n// C\nfunction makeC() {\n  const items = [\"a\"];\n  return { getItems() { return items; } };\n}</code></pre>",
      a: "<p><b>A is not private.</b> The underscore is only a naming convention — <code>new A()._balance = 0</code> works fine. It signals intent, it enforces nothing.</p><p><b>B is truly private.</b> <code>#balance</code> is enforced by the language; touching it from outside the class body is a <b>SyntaxError</b>, not just a runtime failure.</p><p><b>C leaks by reference.</b> <code>items</code> is genuinely unreachable, but <code>getItems()</code> hands out the live array itself:</p><pre><code>const c = makeC();\nc.getItems().push(\"b\");   // mutated the private state!</code></pre><p><b>Fix — return a copy:</b></p><pre><code>getItems() { return [...items]; }</code></pre><p><b>Lesson:</b> hiding a variable is not enough if you then hand out a reference to it. Encapsulation has to cover what you return, not just what you store.</p>" },
  ],

  "Asynchronous JavaScript": [
    { level: "easy", tag: "sync vs async",
      q: "What order do these log?<pre><code>console.log(\"1\");\nsetTimeout(() => console.log(\"3\"), 0);\nconsole.log(\"2\");</code></pre>",
      a: "<p><code>1, 2, 3</code>. <code>setTimeout(fn, 0)</code> does not run immediately — it hands the callback to the runtime, which queues it to run only after all currently-running synchronous code finishes. So both synchronous logs always happen before the timer's callback, no matter how small the delay.</p>" },

    { level: "easy", tag: "promise states",
      q: "What logs, and why does the second <code>resolve</code> have no effect?<pre><code>const p = new Promise(resolve => {\n  resolve(\"first\");\n  resolve(\"second\");\n});\np.then(v => console.log(v));</code></pre>",
      a: "<p><code>\"first\"</code>. A promise can only settle <b>once</b> — pending → fulfilled/rejected is a one-way transition. The first call to <code>resolve</code> settles it; every call after that (even <code>reject</code>) is silently ignored.</p>" },

    { level: "easy", tag: "then chaining",
      q: "What does the second <code>.then</code> receive, and why?<pre><code>Promise.resolve(5)\n  .then(n => { n * 2; })   // no return!\n  .then(result => console.log(result));</code></pre>",
      a: "<p><code>undefined</code>. The first <code>.then</code>'s callback has a <code>{}</code> block body but no explicit <code>return</code>, so it returns <code>undefined</code> — and <code>.then</code> always resolves its new promise with whatever the callback returned. This is the async version of the classic \"forgot to return from an arrow block\" bug.</p><p><b>Fix:</b> <code>n => n * 2</code> (implicit return) or <code>n => { return n * 2; }</code>.</p>" },

    { level: "medium", tag: "microtask vs macrotask",
      q: "Predict the exact order:<pre><code>console.log(\"1\");\nsetTimeout(() => console.log(\"6\"), 0);\nPromise.resolve().then(() => console.log(\"4\"));\nqueueMicrotask(() => console.log(\"5\"));\nconsole.log(\"2\");</code></pre>",
      a: "<p><code>1, 2, 4, 5, 6</code>.</p><p>All synchronous code runs first (<code>1</code>, <code>2</code>). Then, before anything else, the <b>entire microtask queue is drained</b> — the promise <code>.then</code> and <code>queueMicrotask</code> callbacks both run, in the order they were queued (<code>4</code>, then <code>5</code>). Only after the microtask queue is fully empty does the event loop take one macrotask off the queue — the <code>setTimeout</code> callback (<code>6</code>).</p><p><b>Rule:</b> microtasks (promises, <code>queueMicrotask</code>) always fully drain before the next macrotask (<code>setTimeout</code>, <code>setInterval</code>), regardless of delay values.</p>" },

    { level: "medium", tag: "async/await ordering",
      q: "Predict the order:<pre><code>async function a() {\n  console.log(\"2\");\n  await null;\n  console.log(\"5\");\n}\n\nconsole.log(\"1\");\na();\nPromise.resolve().then(() => console.log(\"6\"));\nsetTimeout(() => console.log(\"7\"), 0);\nconsole.log(\"3\");</code></pre>",
      a: "<p><code>1, 2, 3, 5, 6, 7</code>.</p><p><code>a()</code> runs synchronously up to the <code>await</code> — that's why <code>\"2\"</code> logs before <code>\"3\"</code>. At <code>await null</code>, the function pauses and control returns to the caller, so <code>\"3\"</code> logs next. Everything after that <code>await</code> resumes as a <b>microtask</b>, so <code>\"5\"</code> and the already-queued <code>.then</code> (<code>\"6\"</code>) both run before the <code>setTimeout</code> macrotask (<code>\"7\"</code>). <code>await</code> effectively splits a function into a synchronous part before it and a microtask-scheduled part after it.</p>" },

    { level: "medium", tag: "unhandled rejection",
      q: "Why does the <code>catch</code> block never run?<pre><code>function risky() {\n  return new Promise((res, rej) => rej(new Error(\"boom\")));\n}\n\ntry {\n  risky(); // not awaited!\n  console.log(\"after risky\");\n} catch (err) {\n  console.log(\"caught:\", err.message);\n}</code></pre>",
      a: "<p>Logs <code>\"after risky\"</code>, then a separate <b>unhandled promise rejection</b> warning — the <code>catch</code> block never runs.</p><p><code>try</code>/<code>catch</code> only catches errors <em>thrown synchronously</em> inside its block, or from an <code>await</code>ed promise. Here <code>risky()</code> is called but never awaited — the rejected promise it returns is simply discarded, and its rejection has nothing to do with the surrounding <code>try</code>/<code>catch</code> at all.</p><p><b>Fix:</b> <code>await risky();</code> inside the <code>try</code> block (inside an <code>async</code> function), or add a <code>.catch()</code> to the returned promise.</p>" },

    { level: "medium", tag: "sequential vs parallel",
      q: "Roughly how long does each version take, given each fetch takes 1 second?<pre><code>// A\nconst x = await fetchA();\nconst y = await fetchB();\n\n// B\nconst [x, y] = await Promise.all([fetchA(), fetchB()]);</code></pre>",
      a: "<p><b>A: ~2 seconds.</b> Each <code>await</code> fully waits before starting the next call — the two independent requests are forced to run one after another.</p><p><b>B: ~1 second.</b> Both promises are created and start running <em>before</em> either is awaited, so they run concurrently — the total time is roughly the slowest one, not the sum.</p><p>This is one of the most common real-world async performance bugs: sequential <code>await</code>s on work that doesn't actually depend on each other.</p>" },

    { level: "medium", tag: "finally value",
      q: "What does this log?<pre><code>Promise.resolve(\"data\")\n  .finally(() => \"ignored\")\n  .then(v => console.log(v));</code></pre>",
      a: "<p><code>\"data\"</code>.</p><p><code>.finally</code>'s callback receives no arguments and its return value is discarded — the original fulfillment value passes through untouched to the next <code>.then</code>. <code>.finally</code> can only affect the outcome if its own callback <em>throws</em> or returns a rejected promise, in which case that new rejection replaces the original result.</p>" },

    { level: "hard", tag: "Promise.all fail-fast",
      q: "What does this log, and how would you get the successful results too?<pre><code>Promise.all([\n  Promise.resolve(\"A\"),\n  Promise.reject(new Error(\"B failed\")),\n  Promise.resolve(\"C\"),\n])\n  .then(r => console.log(\"all:\", r))\n  .catch(e => console.log(\"caught:\", e.message));</code></pre>",
      a: "<p>Logs <code>\"caught: B failed\"</code> — the <code>.then</code> never runs.</p><p><code>Promise.all</code> is <b>fail-fast</b>: the instant any input promise rejects, the whole thing rejects immediately, and the successful results from A and C are simply lost — there's no way to recover them from this call.</p><p><b>To keep every result:</b></p><pre><code>const results = await Promise.allSettled([...]);\nconst succeeded = results\n  .filter(r => r.status === 'fulfilled')\n  .map(r => r.value); // ['A', 'C']</code></pre>" },

    { level: "hard", tag: "race vs any",
      q: "What does each log, given A rejects fast and B resolves slower?<pre><code>const A = new Promise((_, rej) => setTimeout(() => rej(\"A failed\"), 10));\nconst B = new Promise(res => setTimeout(() => res(\"B ok\"), 50));\n\nPromise.race([A, B]).then(console.log).catch(console.log);\nPromise.any([A, B]).then(console.log).catch(console.log);</code></pre>",
      a: "<p><code>Promise.race</code> logs <code>\"A failed\"</code> — it settles on whichever promise finishes <em>first</em>, win or lose, and A rejects first at 10ms.</p><p><code>Promise.any</code> logs <code>\"B ok\"</code> — it specifically waits for the first <b>success</b>, so A's rejection is ignored and it resolves with B's result once B succeeds at 50ms.</p><p><code>any</code> only rejects if <em>every</em> input promise rejects, and does so with an <code>AggregateError</code> collecting all the reasons.</p>" },

    { level: "hard", tag: "abortcontroller",
      q: "What happens, and what should the <code>.catch</code> check for?<pre><code>const controller = new AbortController();\n\nfetch(\"/slow\", { signal: controller.signal })\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.log(\"error:\", err.message));\n\nsetTimeout(() => controller.abort(), 100);</code></pre>",
      a: "<p>If the request hasn't finished within 100ms, calling <code>controller.abort()</code> makes the <code>fetch</code> promise reject with an <code>AbortError</code>, and the <code>.catch</code> logs that message.</p><p><b>The important check:</b> a well-written handler should distinguish a deliberate cancellation from a real failure:</p><pre><code>.catch(err => {\n  if (err.name === 'AbortError') {\n    console.log('request was cancelled — not a real error');\n  } else {\n    console.log('actual failure:', err.message);\n  }\n});</code></pre><p>Aborting doesn't \"undo\" the promise — a promise can't be cancelled, only the underlying operation can be, which is exactly what <code>AbortController</code> does; that then surfaces as a rejection you handle like any other.</p>" },
  ],

  "Event loop": [
    { level: "easy", tag: "basic ordering",
      q: "What order do these log?<pre><code>console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nconsole.log(\"C\");</code></pre>",
      a: "<p><code>A, C, B</code>. <code>setTimeout</code> queues its callback as a macrotask no matter how small the delay — it can only run once ALL synchronous code (<code>A</code> then <code>C</code>) has finished and the call stack is empty.</p>" },

    { level: "easy", tag: "call stack",
      q: "Why does this throw, and what is the error called?<pre><code>function loop() {\n  loop();\n}\nloop();</code></pre>",
      a: "<p>Throws <code>RangeError: Maximum call stack size exceeded</code>. Each call to <code>loop()</code> pushes a new frame onto the call stack, but no call ever returns (no base case), so frames keep piling up until the stack's fixed size limit is hit.</p>" },

    { level: "easy", tag: "microtask vs macrotask",
      q: "Which queue does each of these go to — microtask or macrotask?<pre><code>setTimeout(fn, 0);\nPromise.resolve().then(fn);\nqueueMicrotask(fn);\nsetInterval(fn, 100);</code></pre>",
      a: "<p><b>Macrotask:</b> <code>setTimeout</code>, <code>setInterval</code>. <b>Microtask:</b> <code>Promise.resolve().then</code>, <code>queueMicrotask</code>. Rule of thumb: promise-related scheduling is microtask; timer/I/O-related scheduling is macrotask, and the entire microtask queue drains before the next macrotask runs.</p>" },

    { level: "medium", tag: "drain order",
      q: "What logs, and in what order?<pre><code>setTimeout(() => console.log(\"D\"), 0);\n\nPromise.resolve().then(() => console.log(\"A\"));\nPromise.resolve().then(() => console.log(\"B\"));\nqueueMicrotask(() => console.log(\"C\"));</code></pre>",
      a: "<p><code>A, B, C, D</code>. All three microtasks were scheduled during the same synchronous pass, so they run in the order they were <em>queued</em> — not grouped by type. The <code>setTimeout</code> macrotask only runs once every microtask (all three) has finished.</p>" },

    { level: "medium", tag: "nested microtask",
      q: "What logs, and why does the nested <code>.then</code> beat the timeout?<pre><code>Promise.resolve().then(() => {\n  console.log(\"1\");\n  Promise.resolve().then(() => console.log(\"2\"));\n});\nsetTimeout(() => console.log(\"3\"), 0);</code></pre>",
      a: "<p><code>1, 2, 3</code>. When the drain step runs the first <code>.then</code> and it schedules <em>another</em> microtask mid-drain, the loop does not move on to macrotasks yet — it keeps draining until the microtask queue is truly empty, including anything added during the drain. Only then does it take the one macrotask.</p>" },

    { level: "medium", tag: "setTimeout(0) myth",
      q: "True or false, and why: <code>setTimeout(fn, 0)</code> runs <code>fn</code> immediately, with effectively no delay?",
      a: "<p><b>False.</b> <code>0</code> is a minimum, not a guarantee. The callback still has to wait for (1) the rest of the current synchronous script to finish, and (2) the entire microtask queue to drain, before the event loop even considers taking it off the macrotask queue. In browsers, deeply nested timeouts are also clamped to a minimum of ~4ms regardless of the requested delay.</p>" },

    { level: "medium", tag: "already-resolved promise",
      q: "Does <code>.then</code> on an already-settled promise run its callback synchronously, right there? What logs?<pre><code>const p = Promise.resolve(\"done\");\nconsole.log(\"1\");\np.then(v => console.log(v));\nconsole.log(\"2\");</code></pre>",
      a: "<p>No — promise callbacks are <b>always</b> deferred to the microtask queue, even if the promise was already settled before <code>.then</code> was called. Logs: <code>1, 2, done</code>.</p>" },

    { level: "hard", tag: "setInterval overlap",
      q: "If a <code>setInterval(fn, 100)</code> callback's own work sometimes takes 300ms to run, does <code>fn</code> queue up and fire three times back-to-back once it's free? What actually happens?",
      a: "<p>No — browsers do not let overlapping ticks pile up. If a tick is still \"due\" while the previous one's work is still blocking the stack, the environment effectively skips the missed tick(s) rather than queuing several to fire in a burst. The practical effect is the interval silently runs slower than requested whenever the callback takes longer than the delay. This is one reason a self-rescheduling <code>setTimeout</code> (schedule the next call only after the current one finishes) is often preferred over <code>setInterval</code> for unpredictable-duration work.</p>" },

    { level: "hard", tag: "starvation",
      q: "What's wrong with this code, and what specifically stops running because of it?<pre><code>function again() {\n  Promise.resolve().then(again);\n}\nagain();\n\nsetTimeout(() => console.log(\"will this ever run?\"), 0);</code></pre>",
      a: "<p>This is <b>event-loop starvation via the microtask queue</b>. Each call to <code>again()</code> immediately schedules another microtask before returning, so the microtask queue is never fully empty — the drain step never completes. Since the loop only reaches the macrotask queue (and, in a browser, rendering) after the microtask queue is fully drained, the <code>setTimeout</code> callback — and any UI repaint — never gets a chance to run. The program appears frozen even though technically \"work\" is continuously happening.</p>" },

    { level: "hard", tag: "full trace",
      q: "Trace the complete order:<pre><code>console.log(\"1\");\n\nsetTimeout(() => console.log(\"2\"), 0);\n\nPromise.resolve()\n  .then(() => console.log(\"3\"))\n  .then(() => console.log(\"4\"));\n\nqueueMicrotask(() => console.log(\"5\"));\n\nconsole.log(\"6\");</code></pre>",
      a: "<p>Order: <code>1, 6, 3, 5, 4, 2</code>.</p><p><b>Sync pass:</b> <code>1</code>, then <code>6</code> (all synchronous lines run before any queued callback, regardless of source order on the page).</p><p><b>Microtask drain:</b> at the point the sync pass ends, the queue holds, in scheduling order: the first <code>.then</code> callback, then the <code>queueMicrotask</code> callback. Draining runs the first <code>.then</code> → logs <code>3</code>, which schedules the SECOND <code>.then</code> as a new microtask appended to the end of the still-draining queue. Next in line is the already-queued <code>queueMicrotask</code> callback → logs <code>5</code>. Only after that does the newly-appended second <code>.then</code> run → logs <code>4</code>.</p><p><b>Macrotask:</b> queue is now empty, so the loop finally takes the one macrotask → logs <code>2</code>.</p>" },
  ],

  "Error handling": [
    { level: "easy", tag: "basic try/catch",
      q: "What does this log?<pre><code>try {\n  JSON.parse(\"{bad\");\n  console.log(\"after parse\");\n} catch (err) {\n  console.log(\"caught:\", err.message);\n}\nconsole.log(\"program continues\");</code></pre>",
      a: "<p><code>caught: ...</code> (a JSON parse error message), then <code>program continues</code>.</p><p><code>JSON.parse</code> throws synchronously on invalid input, so control jumps straight to <code>catch</code> — <code>\"after parse\"</code> never logs, because the rest of the <code>try</code> block is skipped the instant the throw happens. Execution then resumes normally after the whole <code>try</code>/<code>catch</code>.</p>" },

    { level: "easy", tag: "throw a string",
      q: "What's wrong with this, even though it \"works\"?<pre><code>function withdraw(balance, amount) {\n  if (amount > balance) throw \"not enough money\";\n  return balance - amount;\n}</code></pre>",
      a: "<p>It technically throws and can be caught, but throwing a plain string loses the <code>.stack</code> trace that a real <code>Error</code> object carries — when this fails in production, you'll have a message but no idea which call led here. Always throw <code>new Error(\"not enough money\")</code> instead (or a custom subclass).</p>" },

    { level: "medium", tag: "custom errors",
      q: "What does <code>err.name</code> log, and why might that surprise you?<pre><code>class ValidationError extends Error {\n  constructor(msg) { super(msg); }\n}\n\ntry {\n  throw new ValidationError(\"bad input\");\n} catch (err) {\n  console.log(err.name);\n  console.log(err instanceof ValidationError);\n}</code></pre>",
      a: "<p>Logs <code>\"Error\"</code>, then <code>true</code>.</p><p><code>instanceof</code> correctly reports <code>true</code> because the prototype chain is intact. But <code>err.name</code> is inherited from the base <code>Error</code> class as the generic string <code>\"Error\"</code> — nothing here overrides it. <b>Fix:</b> add <code>this.name = \"ValidationError\";</code> in the constructor, after <code>super(msg)</code>.</p>" },

    { level: "medium", tag: "async error not caught",
      q: "Why doesn't the <code>catch</code> block run here?<pre><code>try {\n  setTimeout(() => {\n    throw new Error(\"delayed failure\");\n  }, 100);\n} catch (err) {\n  console.log(\"caught:\", err.message);\n}</code></pre>",
      a: "<p>By the time the <code>setTimeout</code> callback actually runs (100ms later), the surrounding <code>try</code>/<code>catch</code> has already finished executing and is no longer on the call stack — there is no active <code>catch</code> to receive the throw. The error instead becomes an uncaught exception at the top level.</p><p><b>Fix:</b> put the <code>try</code>/<code>catch</code> INSIDE the callback:</p><pre><code>setTimeout(() => {\n  try {\n    throw new Error(\"delayed failure\");\n  } catch (err) {\n    console.log(\"caught:\", err.message);\n  }\n}, 100);</code></pre>" },

    { level: "medium", tag: "unhandled rejection",
      q: "Why does this log nothing from the <code>catch</code>, and what does it produce instead?<pre><code>async function risky() {\n  throw new Error(\"async boom\");\n}\n\ntry {\n  risky(); // missing await!\n  console.log(\"after risky\");\n} catch (err) {\n  console.log(\"caught:\", err.message);\n}</code></pre>",
      a: "<p>Logs <code>\"after risky\"</code>, and the <code>catch</code> block never runs — instead an <b>unhandled promise rejection</b> is reported separately. <code>risky()</code> returns a rejected promise (async functions convert throws into rejections), but since it's never <code>await</code>ed, that rejection has nothing to do with the surrounding <code>try</code>/<code>catch</code>, which only reacts to synchronous throws.</p><p><b>Fix:</b> <code>await risky();</code> inside the <code>try</code> block.</p>" },

    { level: "medium", tag: "finally overrides return",
      q: "What does this function return, and why?<pre><code>function test() {\n  try {\n    return \"from try\";\n  } finally {\n    return \"from finally\";\n  }\n}\nconsole.log(test());</code></pre>",
      a: "<p>Logs <code>\"from finally\"</code>. <code>finally</code> <b>always</b> runs, even after a <code>return</code> in <code>try</code> — and critically, if <code>finally</code> itself contains a <code>return</code>, it <b>overrides</b> the pending return value from <code>try</code>. This is a real trap: silently swallowing the intended result. Avoid <code>return</code> (and <code>throw</code>) inside <code>finally</code> unless that override is exactly what you want.</p>" },

    { level: "hard", tag: "error propagation",
      q: "Trace what happens and what logs:<pre><code>function c() { throw new Error(\"deep\"); }\nfunction b() {\n  c();\n  console.log(\"b continues\"); // does this run?\n}\nfunction a() {\n  try {\n    b();\n  } catch (err) {\n    console.log(\"a caught:\", err.message);\n  }\n  console.log(\"a continues\");\n}\na();</code></pre>",
      a: "<p>Logs <code>\"a caught: deep\"</code>, then <code>\"a continues\"</code>. <code>\"b continues\"</code> never logs.</p><p>The throw in <code>c()</code> immediately unwinds the stack — <code>b()</code> never resumes after its call to <code>c()</code>, it just stops and propagates up. The error keeps bubbling until it reaches the nearest <code>try</code>/<code>catch</code>, which is in <code>a()</code>. Once caught there, <code>a()</code> continues normally past the <code>try</code>/<code>catch</code> block.</p>" },

    { level: "hard", tag: "global handler is not recovery",
      q: "A team adds this and calls the bug \"fixed\":<pre><code>window.addEventListener('unhandledrejection', (e) => {\n  console.log('logged:', e.reason.message);\n});</code></pre><p>What's the flaw in that reasoning?</p>",
      a: "<p>This handler is purely for <b>observability</b> — logging that a failure happened — not for recovery. By the time it fires, the specific async operation has already failed uncontrolled: whatever UI update, data save, or user flow depended on that promise never got its intended result, and nothing here fixes that. A global handler should be a safety net for visibility (e.g. reporting to a monitoring service), never a substitute for handling the rejection where it actually matters — close to the operation, with a real <code>.catch()</code> or <code>try</code>/<code>catch</code> around the <code>await</code>.</p>" },
  ],

  "Objects & immutability": [
    { level: "easy", tag: "object spread merge",
      q: "What does <code>merged</code> equal?<pre><code>const defaults = { theme: \"light\", size: \"md\" };\nconst overrides = { theme: \"dark\" };\nconst merged = { ...defaults, ...overrides };\nconsole.log(merged);</code></pre>",
      a: "<p><code>{ theme: \"dark\", size: \"md\" }</code>. Later spreads override earlier ones for the same key — <code>overrides.theme</code> wins over <code>defaults.theme</code>, while <code>size</code> (only in <code>defaults</code>) passes through untouched.</p>" },

    { level: "easy", tag: "referential equality",
      q: "Predict each:<pre><code>console.log({} === {});\nconst a = { x: 1 };\nconst b = a;\nconsole.log(a === b);</code></pre>",
      a: "<p><code>false</code>, then <code>true</code>. <code>===</code> on objects compares <b>references</b>, not contents — two separately created objects are never equal even with identical properties. <code>b</code> points at the exact same object as <code>a</code>, so that comparison is <code>true</code>.</p>" },

    { level: "medium", tag: "shallow copy trap",
      q: "What does <code>original.address.city</code> log after this?<pre><code>const original = { name: \"Ada\", address: { city: \"London\" } };\nconst copy = { ...original };\n\ncopy.name = \"Sam\";\ncopy.address.city = \"Paris\";\n\nconsole.log(original.name);\nconsole.log(original.address.city);</code></pre>",
      a: "<p><code>\"Ada\"</code>, then <code>\"Paris\"</code>.</p><p>Spread only copies the <b>top level</b>. <code>name</code> is a primitive, so <code>copy.name</code> is genuinely separate. But <code>address</code> is an object — both <code>original</code> and <code>copy</code> point at the <em>same</em> nested object, so mutating it through either variable is visible from both. Fix with a nested spread (<code>{ ...original, address: { ...original.address } }</code>) or <code>structuredClone</code>.</p>" },

    { level: "medium", tag: "Object.assign mutation",
      q: "What's the bug here?<pre><code>const defaults = { theme: \"light\" };\nfunction applyUserPrefs(prefs) {\n  return Object.assign(defaults, prefs);\n}\napplyUserPrefs({ theme: \"dark\" });\nconsole.log(defaults.theme);</code></pre>",
      a: "<p>Logs <code>\"dark\"</code> — <code>defaults</code> itself got mutated, which is almost certainly not intended. <code>Object.assign(target, ...sources)</code> writes onto its <b>first argument</b> and returns that same mutated object. Every future call to <code>applyUserPrefs</code> now starts from a corrupted \"defaults\".</p><p><b>Fix:</b> merge into a fresh object: <code>Object.assign({}, defaults, prefs)</code> or <code>{ ...defaults, ...prefs }</code>.</p>" },

    { level: "medium", tag: "Object.freeze is shallow",
      q: "Which assignment is silently ignored, and which one actually works?<pre><code>const config = Object.freeze({\n  name: \"app\",\n  limits: { maxUsers: 10 }\n});\n\nconfig.name = \"changed\";\nconfig.limits.maxUsers = 999;\n\nconsole.log(config.name, config.limits.maxUsers);</code></pre>",
      a: "<p>Logs <code>\"app\" 999</code>.</p><p><code>Object.freeze</code> only locks the object's own <b>top-level</b> properties — <code>config.name = \"changed\"</code> is silently ignored (or throws in strict mode). But <code>config.limits</code> is itself just a regular, unfrozen object — freezing <code>config</code> did nothing to protect <em>it</em>, so <code>config.limits.maxUsers = 999</code> succeeds normally.</p>" },

    { level: "medium", tag: "Object.keys enumerable only",
      q: "What does <code>Object.keys(dog)</code> log, and why doesn't it include <code>speak</code>?<pre><code>const animal = { speak() { return \"sound\"; } };\nconst dog = Object.create(animal);\ndog.name = \"Rex\";\n\nconsole.log(Object.keys(dog));</code></pre>",
      a: "<p><code>['name']</code>.</p><p><code>Object.keys</code> only lists an object's <b>own</b> enumerable properties. <code>speak</code> lives on <code>animal</code>, which is <code>dog</code>'s prototype, not a property <code>dog</code> owns directly — so it's invisible to <code>Object.keys</code> even though <code>dog.speak()</code> works fine via the prototype chain.</p>" },

    { level: "hard", tag: "structuredClone vs JSON hack",
      q: "Why does the JSON approach throw, and what does <code>structuredClone</code> do differently?<pre><code>const original = { tags: [\"a\"], self: null };\noriginal.self = original;\n\nJSON.parse(JSON.stringify(original)); // ???\nstructuredClone(original);            // ???</code></pre>",
      a: "<p><code>JSON.parse(JSON.stringify(original))</code> throws <code>TypeError: Converting circular structure to JSON</code> — JSON has no way to represent a self-reference, since serializing <code>self</code> would try to serialize <code>original</code> again, forever.</p><p><code>structuredClone(original)</code> works correctly — it implements the structured clone algorithm, which explicitly supports circular references (and also correctly clones <code>Date</code>, <code>Map</code>, and <code>Set</code>, which the JSON hack silently mangles or drops).</p>" },

    { level: "hard", tag: "referential equality & re-render",
      q: "Why does this \"increment\" function fail to trigger a re-render in a framework like React that checks references?<pre><code>function increment(state) {\n  state.count += 1; // mutate in place\n  return state;      // SAME reference returned\n}\n\nconst state = { count: 0 };\nconst next = increment(state);\nconsole.log(next === state);</code></pre>",
      a: "<p>Logs <code>true</code> — and that's exactly the bug. <code>increment</code> mutated <code>state</code> directly and returned the very same object. Frameworks that optimize re-renders with a fast <code>===</code> check on the previous vs. next state see <code>next === state</code> is <code>true</code> and conclude \"nothing changed\", so they skip re-rendering — even though <code>count</code> really did change.</p><p><b>Fix — immutable update, a genuinely new reference:</b></p><pre><code>function increment(state) {\n  return { ...state, count: state.count + 1 };\n}</code></pre>" },

    { level: "hard", tag: "entries transform",
      q: "Using <code>Object.entries</code> and <code>Object.fromEntries</code>, write a one-liner that adds 10% to every value in <code>prices</code>.<pre><code>const prices = { apple: 100, banana: 50 };\n// desired: { apple: 110, banana: 55 }</code></pre>",
      a: "<pre><code>const withTax = Object.fromEntries(\n  Object.entries(prices).map(([item, price]) => [item, price * 1.1])\n);\n// { apple: 110, banana: 55 }</code></pre><p><code>Object.entries</code> turns the object into an array of <code>[key, value]</code> pairs so array methods like <code>map</code> can transform it; <code>Object.fromEntries</code> converts the transformed pairs back into a plain object — the standard round-trip for applying array-style operations to object data.</p>" },
  ],

  "Modules & runtime": [
    { level: "easy", tag: "require vs import basics",
      q: "Which module system is each of these, CommonJS or ES Modules?<pre><code>const fs = require(\"fs\");\nmodule.exports = { add };\n\nimport fs from \"fs\";\nexport { add };</code></pre>",
      a: "<p>The first pair — <code>require</code> / <code>module.exports</code> — is <b>CommonJS</b>. The second pair — <code>import</code> / <code>export</code> — is <b>ES Modules</b>. Node defaults to CommonJS for plain <code>.js</code> files unless <code>package.json</code> has <code>\"type\": \"module\"</code> or the file uses a <code>.mjs</code> extension.</p>" },

    { level: "easy", tag: "module caching",
      q: "What does the second log show, and why is it not <code>1</code> again?<pre><code>// counter.js\nlet count = 0;\nmodule.exports = { increment: () => ++count };\n\n// main.js\nconst a = require(\"./counter\");\nconst b = require(\"./counter\");\na.increment();\nconsole.log(b.increment());</code></pre>",
      a: "<p>Logs <code>2</code>. A module's code only runs <b>once</b> — the second <code>require(\"./counter\")</code> doesn't re-run <code>counter.js</code>, it returns the exact same cached exports object. <code>a</code> and <code>b</code> are the same object, so <code>a.increment()</code> and <code>b.increment()</code> share the same <code>count</code>.</p>" },

    { level: "medium", tag: "exports vs module.exports",
      q: "Why does this fail to export <code>add</code>?<pre><code>// math.js\nfunction add(a, b) { return a + b; }\nexports = { add }; // note: 'exports', not 'module.exports'\n\n// main.js\nconst math = require(\"./math\");\nconsole.log(math.add); // ???</code></pre>",
      a: "<p>Logs <code>undefined</code>. <code>exports</code> starts out as just a local variable that happens to point at the same object as <code>module.exports</code>. Writing <code>exports = { add }</code> reassigns the local <code>exports</code> variable to a brand new object — it does <b>not</b> change what <code>module.exports</code> points to, which is what <code>require</code> actually returns. <b>Fix:</b> either <code>module.exports = { add };</code>, or mutate the existing object with <code>exports.add = add;</code>.</p>" },

    { level: "medium", tag: "sync vs async loading",
      q: "What's the fundamental timing difference between <code>require</code> and <code>import</code>?",
      a: "<p><code>require</code> is <b>synchronous</b> — it's a normal function call that blocks until the target module has fully loaded and run, and it's evaluated at whatever point in the code it's reached (so it can be conditional).</p><p>Static <code>import</code> is <b>asynchronous and hoisted</b> — it's resolved before any of the module's own top-level code runs, based on statically analyzing the whole file up front, which is exactly why it must appear at the top level and can't be put inside an <code>if</code>.</p>" },

    { level: "medium", tag: "live bindings",
      q: "In ESM, if module <code>counter.js</code> exports a <code>let</code> that changes over time, what does an importer see?<pre><code>// counter.js\nexport let count = 0;\nexport function increment() { count++; }\n\n// main.js\nimport { count, increment } from \"./counter.js\";\nconsole.log(count); // 0\nincrement();\nconsole.log(count); // ???</code></pre>",
      a: "<p>Logs <code>1</code>. ESM imports are <b>live, read-only bindings</b> to the exporting module's actual value — not a one-time copy. When <code>counter.js</code> changes <code>count</code> internally, every importer automatically sees the updated value. This is a real behavioral difference from CommonJS, where <code>require</code> hands back a snapshot taken at the moment of the require call, which does not update afterward.</p>" },

    { level: "medium", tag: "dynamic import for code splitting",
      q: "Rewrite this to only load the heavy charting library when the user actually clicks \"Show Chart\":<pre><code>import { renderChart } from \"./chart-library.js\"; // loaded upfront, always\n\nbutton.addEventListener(\"click\", () => {\n  renderChart(data);\n});</code></pre>",
      a: "<pre><code>button.addEventListener(\"click\", async () => {\n  const { renderChart } = await import(\"./chart-library.js\");\n  renderChart(data);\n});</code></pre><p>Static <code>import</code> always loads and evaluates the module up front, as part of the initial bundle, whether the button is ever clicked or not. Dynamic <code>import()</code> returns a promise and only fetches/runs the module when that line actually executes — a classic code-splitting technique for a heavy, optional dependency.</p>" },

    { level: "hard", tag: "circular dependency",
      q: "<code>main.js</code> requires <code>a.js</code>, which requires <code>b.js</code>, which requires <code>a.js</code> right back. What does each log show?<pre><code>// a.js\nconst b = require(\"./b\");\nconsole.log(\"in a.js, b.value:\", b.value);\nmodule.exports = { name: \"a\" };\n\n// b.js\nconst a = require(\"./a\"); // circular — a.js is still mid-execution here\nconsole.log(\"in b.js, a.name:\", a.name);\nmodule.exports = { value: 42 };\n\n// main.js\nrequire(\"./a\");</code></pre>",
      a: "<p>Logs, in this order: <code>\"in b.js, a.name: undefined\"</code>, then <code>\"in a.js, b.value: 42\"</code>.</p><p>Trace it: <code>main.js</code> requires <code>a.js</code>, which starts running and immediately requires <code>b.js</code>. <code>b.js</code> then requires <code>a.js</code> right back — but <code>a.js</code> hasn't finished yet; it's paused on the very line that required <code>b.js</code>, so it hasn't reached its own <code>module.exports = { name: \"a\" }</code> line. Node hands <code>b.js</code> whatever <code>a.js</code>'s <code>module.exports</code> currently is: still the default empty <code>{}</code> — so <code>a.name</code> is <code>undefined</code> inside <code>b.js</code>. <code>b.js</code> then finishes normally and sets its own exports to <code>{ value: 42 }</code>. Control returns to <code>a.js</code>, which now sees the fully-formed <code>b.value: 42</code>.</p><p>The lesson: whichever module happens to be required <em>first</em> in the cycle sees an incomplete version of the other, because that other module hasn't reached its own export statement yet. <b>Best fix</b> in general: restructure so the shared logic lives in a third module both depend on, removing the cycle entirely.</p>" },

    { level: "hard", tag: "tree-shaking requires static structure",
      q: "Why does converting this file from <code>require</code> to <code>import</code>/<code>export</code> make it tree-shakeable, when it wasn't before?<pre><code>// CJS — before\nif (someCondition) {\n  module.exports = require(\"./featureA\");\n} else {\n  module.exports = require(\"./featureB\");\n}\n\n// ESM — after\nexport { helperA, helperB } from \"./utils.js\";</code></pre>",
      a: "<p>Tree-shaking depends on a bundler being able to determine, purely by <b>statically reading the code</b> at build time, exactly which exports are actually used — no running the program required. The CJS version chooses which module to export based on a <em>runtime</em> condition (<code>someCondition</code>), which a bundler cannot evaluate ahead of time — it has to conservatively assume either branch could run and keep both. The ESM version has a fixed, unconditional export list that's identical every time the file is parsed, so the bundler can safely see \"only <code>helperA</code> is imported elsewhere\" and drop <code>helperB</code> entirely from the final bundle.</p>" },
  ],

  "Performance": [
    { level: "easy", tag: "debounce vs throttle",
      q: "Which technique fits each scenario, debounce or throttle?<ul><li>A search box that should only fetch once the user stops typing.</li><li>A scroll handler that must update a progress bar smoothly the whole time you scroll.</li></ul>",
      a: "<p><b>Search box → debounce.</b> You want it to wait for a pause in typing and fire once, not on every keystroke.</p><p><b>Scroll progress bar → throttle.</b> You want it to keep updating at a steady, capped rate <em>during</em> continuous scrolling, not just once at the end.</p>" },

    { level: "easy", tag: "memoization requires purity",
      q: "Why would memoizing this function be a bug?<pre><code>function getGreeting(name) {\n  return name + \", it is now \" + new Date().toLocaleTimeString();\n}\nconst memoized = memoize(getGreeting);</code></pre>",
      a: "<p><code>getGreeting</code> is not pure — it depends on the current time, which changes every call even for the same <code>name</code>. A memoized version would cache the FIRST result for a given <code>name</code> and keep returning that same stale timestamp forever after, which is exactly wrong. Memoization is only safe for pure functions: same input → same output, always.</p>" },

    { level: "medium", tag: "debounce implementation",
      q: "What's the bug in this debounce, and what does it break?<pre><code>function debounce(fn, delay) {\n  return (...args) => {\n    setTimeout(() => fn(...args), delay); // no clearTimeout!\n  };\n}</code></pre>",
      a: "<p>It never cancels the previous pending timer, so every call schedules its OWN independent timeout — instead of one call running after a pause, <b>every</b> call eventually runs. This defeats the entire point of debouncing (collapsing a burst into one call). <b>Fix:</b> store the timer id in a closure and <code>clearTimeout</code> it at the start of every call, before scheduling a new one.</p>" },

    { level: "medium", tag: "O(n²) to O(n)",
      q: "Why is this slow on a large <code>blockedIds</code> array, and how do you fix it?<pre><code>function filterBlocked(users, blockedIds) {\n  return users.filter(u => blockedIds.includes(u.id));\n}</code></pre>",
      a: "<p><code>.includes()</code> does a linear scan of <code>blockedIds</code> for every single user — with <code>users.length = n</code> and <code>blockedIds.length = m</code>, that's O(n × m) total work. With both lists large, this gets slow fast.</p><pre><code>function filterBlocked(users, blockedIds) {\n  const blocked = new Set(blockedIds); // build once, O(m)\n  return users.filter(u => blocked.has(u.id)); // O(1) per check → O(n) total\n}</code></pre>" },

    { level: "medium", tag: "sequential vs parallel async",
      q: "Roughly how long does each take if each call takes 1 second, and why?<pre><code>// A\nconst a = await fetchA();\nconst b = await fetchB();\nconst c = await fetchC();\n\n// B\nconst [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);</code></pre>",
      a: "<p><b>A: ~3 seconds.</b> Each <code>await</code> fully completes before the next call even starts — three independent 1-second calls run back-to-back.</p><p><b>B: ~1 second.</b> All three start together and run concurrently; the total time is bounded by the slowest one, not the sum. This only works because the calls are genuinely independent — if <code>fetchB</code> needed <code>a</code>'s result, they couldn't run in parallel.</p>" },

    { level: "medium", tag: "event-loop blocking",
      q: "Why does wrapping this in an <code>async</code> function NOT fix the frozen UI?<pre><code>async function processData(items) {\n  for (const item of items) {\n    heavyComputation(item); // takes 3 seconds total, purely synchronous\n  }\n}\nprocessData(hugeArray);</code></pre>",
      a: "<p>Marking a function <code>async</code> only changes <b>how its result is delivered</b> (wrapped in a promise) — it does not make the function's own synchronous body non-blocking. There's no <code>await</code> anywhere inside the loop, so <code>heavyComputation</code> still runs entirely on the main thread, occupying the call stack for the full 3 seconds and freezing everything else (clicks, rendering, timers) exactly as it would without <code>async</code>.</p><p><b>Real fix:</b> break the loop into chunks and yield control between them with <code>setTimeout</code>, or move the computation to a Web Worker.</p>" },

    { level: "hard", tag: "throttle implementation",
      q: "Implement <code>throttle(fn, interval)</code> so <code>fn</code> runs immediately on the first call, then at most once per <code>interval</code> ms no matter how often it's invoked.",
      a: "<pre><code>function throttle(fn, interval) {\n  let ready = true;\n  return (...args) => {\n    if (!ready) return;       // ignore calls during the cooldown\n    fn(...args);               // run immediately on the first call\n    ready = false;\n    setTimeout(() => { ready = true; }, interval);\n  };\n}</code></pre><p>The key difference from debounce: throttle guarantees execution happens at a regular cadence even during continuous activity, rather than waiting for silence — the first call always fires right away, then a cooldown window blocks further calls until it expires.</p>" },

    { level: "hard", tag: "memoize with object args",
      q: "Why does this memoized function fail to hit the cache for what look like \"the same\" arguments?<pre><code>const memoized = memoize(config => expensiveCompute(config));\nmemoized({ mode: \"fast\" }); // cache miss — computes\nmemoized({ mode: \"fast\" }); // cache miss AGAIN — why?</code></pre>",
      a: "<p>A <code>Map</code>-based cache keys entries by <b>reference</b> for object arguments, not by structural equality. <code>{ mode: \"fast\" }</code> and a second, separately-created <code>{ mode: \"fast\" }</code> are two different objects — <code>obj1 === obj2</code> is <code>false</code> — so the cache never recognizes them as \"the same\" key, even though their contents match.</p><p><b>Fix:</b> derive a stable string key from the relevant fields, e.g. <code>JSON.stringify(config)</code> (works for simple, serializable configs) or a custom key-building function, and use that string as the cache key instead of the raw object.</p>" },

    { level: "hard", tag: "chunked processing",
      q: "This freezes the page for large arrays. Rewrite it to keep the UI responsive using chunking.<pre><code>function processAll(items) {\n  items.forEach(item => heavyWork(item));\n}</code></pre>",
      a: "<pre><code>function processInChunks(items, chunkSize, onDone) {\n  let i = 0;\n  function step() {\n    const end = Math.min(i + chunkSize, items.length);\n    for (; i < end; i++) heavyWork(items[i]);\n    if (i < items.length) {\n      setTimeout(step, 0); // yield back to the event loop between chunks\n    } else {\n      onDone();\n    }\n  }\n  step();\n}</code></pre><p>Instead of one long synchronous pass that occupies the call stack until it fully finishes, this processes a small batch, then schedules the next batch as a fresh macrotask via <code>setTimeout(step, 0)</code> — letting the event loop reach rendering, clicks, and other pending work in between chunks.</p>" },
  ],

  "JavaScript patterns & engineering": [
    { level: "easy", tag: "pure vs impure",
      q: "Which function is pure, and why is the other one not?<pre><code>// A\nlet total = 0;\nfunction addToTotal(n) { total += n; return total; }\n\n// B\nfunction add(a, b) { return a + b; }</code></pre>",
      a: "<p><b>B is pure</b> — given the same <code>a</code> and <code>b</code>, it always returns the same result, and touches nothing outside itself.</p><p><b>A is impure</b> — it mutates the outside variable <code>total</code>, so calling it twice with the same argument gives two different results, and its behavior depends on how many times it's been called before.</p>" },

    { level: "easy", tag: "separation of concerns",
      q: "What's the concrete testing benefit of splitting this into three functions instead of one?<pre><code>async function showUserCard(id) {\n  const res = await fetch('/api/users/' + id);\n  const data = await res.json();\n  document.querySelector('#card').innerHTML = data.name.toUpperCase();\n}</code></pre>",
      a: "<p>As written, testing the formatting logic (<code>.toUpperCase()</code>) requires a real network call and a real DOM. Splitting into <code>fetchUser(id)</code>, <code>formatUserName(user)</code>, and <code>renderCard(name)</code> lets you unit-test <code>formatUserName</code> with a plain object — no fetch, no DOM — because it's now a pure function with no side effects of its own.</p>" },

    { level: "medium", tag: "immutability & re-render",
      q: "Why might this state update fail to trigger a re-render in React?<pre><code>function addItem(state, item) {\n  state.items.push(item);\n  return state;\n}</code></pre>",
      a: "<p>React (and similar libraries) detect state changes with a fast <code>===</code> reference check, not a deep comparison. <code>state.items.push(item)</code> mutates the array in place and <code>return state</code> returns the exact same object reference — so <code>oldState === newState</code> is <code>true</code>, and React concludes nothing changed, even though the array's contents did.</p><pre><code>function addItem(state, item) {\n  return { ...state, items: [...state.items, item] }; // new references\n}</code></pre>" },

    { level: "medium", tag: "dependency injection & testing",
      q: "Rewrite this so it can be unit-tested without hitting a real database.<pre><code>const db = require('./realDatabase');\nfunction getUser(id) {\n  return db.query('SELECT * FROM users WHERE id = ?', id);\n}</code></pre>",
      a: "<pre><code>function getUser(db, id) {\n  return db.query('SELECT * FROM users WHERE id = ?', id);\n}\n\n// in a test:\nconst fakeDb = { query: () => ({ id: 1, name: 'Test User' }) };\ngetUser(fakeDb, 1); // no real database needed</code></pre><p>Instead of importing the real dependency internally, the function receives it as a parameter — dependency injection. This is the core reason DI matters in practice: it makes code testable in isolation, by swapping in a fake collaborator without touching the function's implementation.</p>" },

    { level: "medium", tag: "strategy pattern refactor",
      q: "Refactor this so adding a new validation type doesn't require editing the function itself.<pre><code>function validate(type, value) {\n  if (type === 'email') return value.includes('@');\n  if (type === 'phone') return /^\\d{10}$/.test(value);\n  if (type === 'zip') return /^\\d{5}$/.test(value);\n}</code></pre>",
      a: "<pre><code>const validators = {\n  email: v => v.includes('@'),\n  phone: v => /^\\d{10}$/.test(v),\n  zip: v => /^\\d{5}$/.test(v),\n};\nfunction validate(type, value) { return validators[type](value); }\n\n// adding a new type is now just one new entry — validate() itself never changes:\nvalidators.creditCard = v => /^\\d{16}$/.test(v);</code></pre><p>This is the Strategy pattern: swappable, independently-defined behaviors selected by a key, instead of a growing <code>if</code>/<code>switch</code> chain that has to be edited every time a new case appears.</p>" },

    { level: "medium", tag: "module pattern privacy",
      q: "Can code outside this IIFE read or change <code>count</code> directly? What does <code>Counter.count</code> log?<pre><code>const Counter = (function () {\n  let count = 0;\n  return {\n    increment() { return ++count; }\n  };\n})();\nconsole.log(Counter.count);</code></pre>",
      a: "<p>Logs <code>undefined</code>. <code>count</code> only exists inside the IIFE's closure — it was never attached to the returned object, so there is no <code>Counter.count</code> property at all, and no way to reach the real <code>count</code> variable from outside except through <code>increment()</code>. This is the module pattern's core mechanism: privacy through closure, not through any special syntax.</p>" },

    { level: "hard", tag: "over-defensive code hides bugs",
      q: "What's actually wrong with this \"safe\" code?<pre><code>function getDiscount(user) {\n  try {\n    return user.membership.discountRate;\n  } catch (e) {\n    return 0; // just default to no discount if anything goes wrong\n  }\n}</code></pre>",
      a: "<p>This isn't defensive programming, it's <b>bug-hiding</b>. If <code>user.membership</code> is unexpectedly missing due to a real upstream bug (a failed join, a data migration issue), this function silently swallows the failure and returns <code>0</code> as if that's a perfectly normal case — the actual defect goes completely unnoticed, possibly costing real customers a discount they're entitled to, with zero error logged anywhere.</p><p><b>Better:</b> validate explicitly at the boundary with a clear, specific error (or log the anomaly) rather than catching everything and pretending it's fine: <code>if (!user.membership) throw new Error('getDiscount: user has no membership')</code>, or intentionally handle the one specific case you expect (e.g. \"no membership = not a paying user, 0 is correct\") rather than a blanket catch-all.</p>" },

    { level: "hard", tag: "error boundary vs try/catch everywhere",
      q: "A team wraps every single React component in its own try/catch-equivalent error boundary AND wraps every Express route handler in its own try/catch AND adds an app-level Express error middleware. What's the redundancy here, and what's the better structure?",
      a: "<p>The whole point of an error boundary is to catch at a <b>deliberate boundary</b> — a feature area, or the top of a route chain — not to wrap every single unit individually. One React error boundary around a page/feature already catches rendering errors from every component beneath it in that tree; a per-component boundary is usually unnecessary duplication.</p><p>For Express, the idiomatic pattern is: route handlers call <code>next(err)</code> on failure (or just let an async error propagate with the right setup) rather than each handler needing its own repeated try/catch <em>and</em> its own custom error response — the single app-level error-handling middleware <code>(err, req, res, next)</code> is the one place that formats and sends the error response, keeping that logic in exactly one place instead of copy-pasted across every route.</p>" },
  ],

  "Advanced JavaScript": [
    { level: "easy", tag: "closure basics",
      q: "What logs, and why are the two counters independent?<pre><code>function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst a = makeCounter();\nconst b = makeCounter();\na(); a();\nconsole.log(b());</code></pre>",
      a: "<p><code>1</code>. Each call to <code>makeCounter()</code> creates a brand-new lexical environment with its own <code>count</code>. <code>a</code> and <code>b</code> close over two completely separate environments — advancing <code>a</code>'s counter has no effect on <code>b</code>'s, which starts fresh at <code>0</code>.</p>" },

    { level: "easy", tag: "recursion base case",
      q: "What happens when this runs, and why?<pre><code>function countdown(n) {\n  console.log(n);\n  countdown(n - 1);\n}\ncountdown(5);</code></pre>",
      a: "<p>It logs <code>5, 4, 3, 2, 1, 0, -1, -2, ...</code> and eventually throws <code>RangeError: Maximum call stack size exceeded</code>. There's no base case to stop the recursion — <code>n</code> just keeps decreasing forever, and each call adds another frame to the call stack until it overflows. <b>Fix:</b> add <code>if (n &lt;= 0) return;</code> before the recursive call.</p>" },

    { level: "medium", tag: "loop closure bug",
      q: "Why do these two loops produce different output?<pre><code>for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 0);\n}</code></pre>",
      a: "<p>First loop logs <code>3, 3, 3</code>. Second logs <code>0, 1, 2</code>.</p><p><code>var</code> is function-scoped — all three callbacks close over the exact same <code>i</code>, whose value is <code>3</code> by the time any of them actually runs (after the loop has fully finished). <code>let</code> is block-scoped and creates a <b>new binding for each iteration</b>, so each callback closes over its own separate <code>j</code>, capturing that iteration's value.</p>" },

    { level: "medium", tag: "lexical vs dynamic",
      q: "Fill in the blank, and explain the general rule it demonstrates: is a function's outer scope determined by where it's ___, or by how it's later called?",
      a: "<p>By where it's <b>written (defined)</b> — that's what \"lexical\" scoping means. A function's scope chain is fixed permanently at the moment it's created in the source code, based on its nesting, and never changes no matter how or from where it's later invoked.</p><p>This is the direct contrast with <code>this</code>, which works the opposite way — resolved dynamically, fresh, based on the call site every single time the function runs.</p>" },

    { level: "medium", tag: "memory leak spotting",
      q: "Find the memory leak in this component-like code.<pre><code>function setupWidget(el) {\n  const bigData = new Array(1000000).fill('x');\n  el.addEventListener('click', () => {\n    console.log(bigData.length);\n  });\n}\n// widget is later removed from the DOM: el.remove();</code></pre>",
      a: "<p>Even after <code>el.remove()</code> takes it off the visible page, <code>el</code> is not garbage collected — the click listener's closure still holds a live reference to <code>bigData</code> (and implicitly to <code>el</code> itself, since the listener is attached to it), keeping both reachable from the DOM API's internal references. If many widgets are created and removed this way without ever calling <code>el.removeEventListener(...)</code>, memory usage grows steadily. <b>Fix:</b> explicitly remove the listener before discarding the element.</p>" },

    { level: "medium", tag: "generator laziness",
      q: "Does this infinite generator ever hang the program? Why or why not?<pre><code>function* naturals() {\n  let n = 1;\n  while (true) yield n++;\n}\n\nconst gen = naturals();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);</code></pre>",
      a: "<p>No — it logs <code>1</code>, then <code>2</code>, and never hangs. Generators are <b>lazy</b>: calling <code>naturals()</code> doesn't run the body at all, it just returns a generator object. Each <code>.next()</code> call runs the body only up to the next <code>yield</code>, then pauses — the <code>while (true)</code> never actually spins forever because nothing is forcing it to run to completion; it only ever advances one step at a time, on demand.</p>" },

    { level: "hard", tag: "WeakMap vs Map for caching",
      q: "Why is a <code>WeakMap</code> the better choice than a regular <code>Map</code> for this per-object metadata cache?<pre><code>const cache = new Map(); // or WeakMap?\nfunction getMetadata(obj) {\n  if (!cache.has(obj)) cache.set(obj, computeExpensiveMetadata(obj));\n  return cache.get(obj);\n}</code></pre>",
      a: "<p>A regular <code>Map</code> holds its keys with a <b>strong</b> reference — as long as any entry stays in the <code>Map</code>, the object used as its key can never be garbage collected, even if nothing else in the program still references it. That means every object ever passed to <code>getMetadata</code> is kept alive <em>forever</em>, purely because it's a cache key — a slow, silent memory leak.</p><p>A <code>WeakMap</code> holds keys <b>weakly</b> — once nothing else references a given object, it (and its cache entry) becomes eligible for garbage collection normally, exactly as if the cache didn't exist. The tradeoff: you lose iteration and <code>.size</code>, but for a pure \"attach data to an object without keeping it alive\" use case, that's the correct choice.</p>" },

    { level: "hard", tag: "execution context & hoisting",
      q: "Explain exactly why this doesn't throw a ReferenceError, and what the two logs are.<pre><code>console.log(typeof sayHi);\nconsole.log(a);\nvar a = 1;\nfunction sayHi() { return 'hi'; }</code></pre>",
      a: "<p>Logs <code>\"function\"</code>, then <code>undefined</code> — no error.</p><p>During the <b>creation phase</b> of this execution context, JavaScript hoists both declarations before running any code: <code>function sayHi() {}</code> is hoisted completely — the whole function, ready to call. <code>var a</code> is hoisted too, but only its <em>declaration</em>, initialized to <code>undefined</code> — the assignment <code>a = 1</code> doesn't happen until the execution phase reaches that line. So by the time both <code>console.log</code>s run, <code>sayHi</code> is already a fully usable function, but <code>a</code> exists yet still holds its hoisted default of <code>undefined</code>.</p>" },

    { level: "hard", tag: "TCO reality check",
      q: "A candidate says: \"I wrote this in tail-recursive form, so it's safe from stack overflow on any array size.\" Is that true in Node/Chrome?<pre><code>function sum(arr, i = 0, acc = 0) {\n  if (i >= arr.length) return acc;\n  return sum(arr, i + 1, acc + arr[i]); // tail position\n}</code></pre>",
      a: "<p><b>No, not in practice.</b> The function is correctly written in tail-call form — the recursive call really is the last thing that happens, with nothing left to compute afterward. Proper Tail Call Optimization (which would let the engine reuse the current stack frame instead of pushing a new one) is part of the ES2015 spec, but <b>V8</b> (which powers both Chrome and Node.js) has never implemented it. So on a large enough array, this will still overflow the stack in Node/Chrome, even though the exact same code would be safe on Safari/JavaScriptCore, which does implement TCO. For genuinely large inputs in Node, an iterative loop (or manual chunking) is the reliable choice, not tail recursion.</p>" },
  ],

  "Browser JavaScript": [
    { level: "easy", tag: "fetch does not reject on 404",
      q: "What does this log for a 404 response — does the <code>.catch</code> run?<pre><code>fetch('/api/missing-endpoint')\n  .then(res => console.log('status:', res.status))\n  .catch(err => console.log('caught:', err.message));</code></pre>",
      a: "<p>Logs <code>\"status: 404\"</code> — the <code>.catch</code> never runs.</p><p><code>fetch</code>'s promise only rejects on a genuine network failure (no connection, DNS error, CORS block) — an HTTP error status like 404 or 500 is still a completed, valid response as far as <code>fetch</code> is concerned. You must check <code>response.ok</code> or <code>response.status</code> yourself; nothing does it for you automatically.</p>" },

    { level: "easy", tag: "preventDefault vs stopPropagation",
      q: "Which one stops a form from actually submitting, and which one stops the click from reaching a parent listener?<pre><code>e.preventDefault();\ne.stopPropagation();</code></pre>",
      a: "<p><code>preventDefault()</code> stops the browser's default action — a form submission, a link navigation — but the event STILL bubbles up normally.</p><p><code>stopPropagation()</code> stops the event from reaching ancestor listeners, but the browser's default action STILL happens (the form would still submit, a link would still navigate) unless you also call <code>preventDefault()</code>. They are independent — neither implies the other.</p>" },

    { level: "easy", tag: "storage lifetime",
      q: "Which storage mechanism survives a browser restart, and which one is gone once you close the tab?",
      a: "<p><code>localStorage</code> survives closing the tab, the browser, even restarting the computer — it persists until explicitly cleared. <code>sessionStorage</code> is scoped to that one tab's session and disappears as soon as that tab is closed (and isn't even shared with a duplicate tab on the same site).</p>" },

    { level: "medium", tag: "event bubbling order",
      q: "In what order do these log when the inner <code>&lt;button&gt;</code> is clicked?<pre><code>outer.addEventListener('click', () => console.log('outer'));\ninner.addEventListener('click', () => console.log('inner'));\n// HTML: &lt;div id=\"outer\"&gt;&lt;button id=\"inner\"&gt;Click&lt;/button&gt;&lt;/div&gt;</code></pre>",
      a: "<p><code>\"inner\"</code>, then <code>\"outer\"</code>. Both listeners are registered for the default bubble phase. The click first reaches its target (<code>inner</code>) and fires that listener, then continues bubbling upward through the DOM tree, triggering <code>outer</code>'s listener next.</p>" },

    { level: "medium", tag: "event delegation with closest",
      q: "Write a single delegated listener on <code>#list</code> that logs the <code>data-id</code> of whichever <code>.item</code> was clicked, including items added to the list later.",
      a: "<pre><code>document.querySelector('#list').addEventListener('click', (e) => {\n  const item = e.target.closest('.item');\n  if (!item) return; // click landed on the list but not on an item\n  console.log(item.dataset.id);\n});</code></pre><p>Because the click bubbles up from whatever was actually clicked to <code>#list</code>, one listener here covers every current and future <code>.item</code> — no need to attach a new listener each time an item is added to the DOM.</p>" },

    { level: "medium", tag: "response.json is a promise",
      q: "What's wrong with this code?<pre><code>fetch('/api/users/1')\n  .then(res => console.log(res.json()));</code></pre>",
      a: "<p>It logs a pending <code>Promise</code> object, not the actual data. <code>res.json()</code> itself returns a <b>promise</b> — parsing the response body is a separate asynchronous step from getting the response headers. <b>Fix:</b> chain another <code>.then</code>, or <code>await</code> it: <code>fetch(url).then(res =&gt; res.json()).then(data =&gt; console.log(data))</code>.</p>" },

    { level: "medium", tag: "localStorage type coercion",
      q: "What does <code>typeof saved</code> log, and why is this a common bug source?<pre><code>localStorage.setItem('count', 5);\nconst saved = localStorage.getItem('count');\nconsole.log(typeof saved);\nconsole.log(saved + 1);</code></pre>",
      a: "<p>Logs <code>\"string\"</code>, then <code>\"51\"</code> (string concatenation, not addition).</p><p><code>localStorage</code> only stores strings — the number <code>5</code> is silently coerced to the string <code>\"5\"</code> when stored, and <code>getItem</code> always returns a string, never the original type. Forgetting this and doing math directly on a retrieved value is a classic bug. <b>Fix:</b> convert explicitly, e.g. <code>Number(saved) + 1</code>, or store/retrieve via <code>JSON.stringify</code>/<code>JSON.parse</code> for non-string data.</p>" },

    { level: "hard", tag: "capture vs bubble order",
      q: "Given this setup, in what order do the three listeners fire when the child is clicked?<pre><code>parent.addEventListener('click', () => console.log('parent capture'), true);\nchild.addEventListener('click', () => console.log('child'));\nparent.addEventListener('click', () => console.log('parent bubble'), false);</code></pre>",
      a: "<p><code>\"parent capture\"</code>, then <code>\"child\"</code>, then <code>\"parent bubble\"</code>.</p><p>Propagation always follows: capture phase (root → target) first, then the target phase itself, then bubble phase (target → root) last — regardless of the order the listeners were <em>registered</em> in the code. The capture-phase listener on <code>parent</code> fires on the way down, before the click even reaches <code>child</code>; the bubble-phase listener on the same <code>parent</code> fires afterward, on the way back up.</p>" },

    { level: "hard", tag: "CORS is browser-enforced",
      q: "A developer says: \"I'll just add a header in my frontend JavaScript to fix this CORS error.\" What's wrong with that plan?",
      a: "<p>CORS is enforced entirely by the <b>browser</b>, checking headers that the <b>server's response</b> includes — nothing the requesting page's own JavaScript sends or sets can grant itself permission to read a cross-origin response. The fix has to happen on the server being called: it must return an <code>Access-Control-Allow-Origin</code> header explicitly permitting the calling origin. No client-side header, config, or workaround in the frontend code can bypass this restriction — it exists specifically to protect the user from a page silently reading data it wasn't authorized to see.</p>" },

    { level: "hard", tag: "layout thrashing",
      q: "Why is this loop unusually slow, and how would you fix it?<pre><code>const boxes = document.querySelectorAll('.box');\nboxes.forEach(box => {\n  const height = box.offsetHeight; // READ\n  box.style.height = (height + 10) + 'px'; // WRITE\n});</code></pre>",
      a: "<p>This is <b>layout thrashing</b>. Reading <code>offsetHeight</code> forces the browser to make sure layout is fully up to date before returning a value — normally the browser would batch layout work, but interleaving a read immediately after a write (from the previous iteration) forces a synchronous recalculation on <em>every single iteration</em> instead of once.</p><pre><code>const boxes = [...document.querySelectorAll('.box')];\nconst heights = boxes.map(box => box.offsetHeight); // all READS first\nboxes.forEach((box, i) => {\n  box.style.height = (heights[i] + 10) + 'px'; // all WRITES after\n});</code></pre><p>Separating all the reads from all the writes lets the browser batch the layout calculation once, instead of thrashing between recalculating and re-invalidating on every loop iteration.</p>" },
  ],

  "ES6+ language features": [
    { level: "easy", tag: "template literals",
      q: "Rewrite this using a template literal:<pre><code>const msg = 'Hello, ' + name + '! You have ' + count + ' items.';</code></pre>",
      a: "<pre><code>const msg = `Hello, ${name}! You have ${count} items.`;</code></pre><p>Any valid expression can go inside <code>${...}</code> — not just plain variables, e.g. <code>${count + 1}</code> or <code>${user.name.toUpperCase()}</code> both work directly.</p>" },

    { level: "easy", tag: "for...of vs for...in",
      q: "What does each loop log, and why are they different?<pre><code>const arr = [10, 20, 30];\nfor (const x of arr) console.log(x);\nfor (const i in arr) console.log(i);</code></pre>",
      a: "<p>First loop logs <code>10, 20, 30</code> — the actual <b>values</b>. Second loop logs <code>\"0\", \"1\", \"2\"</code> — the <b>keys</b>, as strings. <code>for...of</code> iterates values from an iterable; <code>for...in</code> iterates enumerable keys from any object, and on an array that means its string indices, not its values — a common source of confusion.</p>" },

    { level: "easy", tag: "Set dedupe",
      q: "Write a one-liner that removes duplicates from <code>[1, 2, 2, 3, 3, 3]</code>.",
      a: "<pre><code>const unique = [...new Set([1, 2, 2, 3, 3, 3])];\n// [1, 2, 3]</code></pre><p>A <code>Set</code> can only ever hold unique values — constructing one from the array automatically drops duplicates, then spreading it back into <code>[...]</code> gives you a plain array again.</p>" },

    { level: "medium", tag: "named vs default export",
      q: "What's wrong with this import, given how <code>math.js</code> exports things?<pre><code>// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport add from './math.js';\nconsole.log(add(2, 3));</code></pre>",
      a: "<p><code>add</code> logs as <code>undefined</code>, and calling it throws a <code>TypeError</code>. <code>math.js</code> exports <code>add</code> as a <b>named</b> export, but <code>app.js</code> is trying to import it as the <b>default</b> export (no curly braces means \"give me the default\"). Since there is no default export in <code>math.js</code>, the import silently resolves to <code>undefined</code>. <b>Fix:</b> <code>import { add } from './math.js';</code></p>" },

    { level: "medium", tag: "logical assignment falsy trap",
      q: "What's the bug in this config-defaulting code?<pre><code>function setRetries(config) {\n  config.retries ||= 3; // default to 3 if not set\n  return config;\n}\nconsole.log(setRetries({ retries: 0 }).retries);</code></pre>",
      a: "<p>Logs <code>3</code>, but the caller explicitly set <code>retries: 0</code> — meaning \"don't retry at all\", a perfectly valid value — and it got silently overwritten. <code>||=</code> assigns whenever the current value is falsy, and <code>0</code> is falsy. <b>Fix:</b> use <code>??=</code> instead, which only assigns on <code>null</code>/<code>undefined</code>, correctly leaving a deliberate <code>0</code> alone: <code>config.retries ??= 3;</code></p>" },

    { level: "medium", tag: "Map with object keys",
      q: "Why does this Object-based approach fail, and how does a Map fix it?<pre><code>const key1 = { id: 1 };\nconst key2 = { id: 2 };\nconst store = {};\nstore[key1] = 'first';\nstore[key2] = 'second';\nconsole.log(Object.keys(store));</code></pre>",
      a: "<p>Logs <code>['[object Object]']</code> — just one key. Object keys are always coerced to strings, and both <code>key1</code> and <code>key2</code> coerce to the exact same string, <code>'[object Object]'</code>, so the second assignment overwrites the first.</p><pre><code>const store = new Map();\nstore.set(key1, 'first');\nstore.set(key2, 'second');\nstore.get(key1); // 'first' — the actual object reference is the key, no coercion</code></pre>" },

    { level: "medium", tag: "generator laziness",
      q: "Is it safe to define this generator? What does the loop actually log?<pre><code>function* naturals() {\n  let n = 1;\n  while (true) yield n++;\n}\n\nfor (const n of naturals()) {\n  if (n > 3) break;\n  console.log(n);\n}</code></pre>",
      a: "<p>Perfectly safe — logs <code>1, 2, 3</code>, then stops. Generators are lazy: <code>while (true)</code> never actually runs an infinite loop all at once. Each iteration of the <code>for...of</code> calls <code>.next()</code> exactly once, advancing the generator by a single <code>yield</code>, and <code>break</code> simply stops requesting more.</p>" },

    { level: "hard", tag: "WeakMap prevents leak",
      q: "Rewrite this cache using <code>WeakMap</code> so that objects can still be garbage collected once nothing else references them.<pre><code>const cache = new Map();\nfunction getMetadata(obj) {\n  if (!cache.has(obj)) cache.set(obj, computeMetadata(obj));\n  return cache.get(obj);\n}</code></pre>",
      a: "<pre><code>const cache = new WeakMap(); // only this line changes\nfunction getMetadata(obj) {\n  if (!cache.has(obj)) cache.set(obj, computeMetadata(obj));\n  return cache.get(obj);\n}</code></pre><p>A regular <code>Map</code> holds its keys with a strong reference, so every object ever passed to <code>getMetadata</code> stays alive forever purely because it's a cache key — a silent memory leak. <code>WeakMap</code> holds keys weakly, so once nothing else in the program references a given object, it (and its cache entry) becomes eligible for garbage collection normally, exactly as if it had never been cached.</p>" },

    { level: "hard", tag: "custom iterable",
      q: "Make this <code>range</code> object work with <code>for...of</code> and spread, by implementing the iterator protocol.<pre><code>const range = { start: 1, end: 4 };\n// desired: for (const n of range) ... logs 1, 2, 3\n// desired: [...range] === [1, 2, 3]</code></pre>",
      a: "<pre><code>const range = {\n  start: 1,\n  end: 4,\n  [Symbol.iterator]() {\n    let current = this.start;\n    const end = this.end;\n    return {\n      next() {\n        if (current < end) return { value: current++, done: false };\n        return { value: undefined, done: true };\n      }\n    };\n  }\n};\n\nfor (const n of range) console.log(n); // 1, 2, 3\n[...range]; // [1, 2, 3]</code></pre><p>Implementing <code>[Symbol.iterator]()</code> — returning an object with a <code>.next()</code> that yields <code>{ value, done }</code> — is exactly the protocol <code>for...of</code> and spread both rely on. Once it's there, any built-in syntax that consumes iterables works on this custom object automatically, for free.</p>" },

    { level: "hard", tag: "optional chaining does not guard everything",
      q: "Does <code>?.</code> prevent an error here? Why or why not?<pre><code>function getCity(user) {\n  return user?.address.city; // note: only ONE ?. \n}\ngetCity({ address: null });</code></pre>",
      a: "<p><b>No</b> — this still throws a <code>TypeError</code>. <code>user?.address</code> is safely guarded (returns <code>undefined</code> if <code>user</code> is nullish), but the result of that (<code>null</code>, since <code>address</code> genuinely IS <code>null</code> here) is then accessed with a plain <code>.city</code>, which is NOT optional-chained. <code>?.</code> only guards the specific link it's placed on — every step in a chain that might be nullish needs its own <code>?.</code>: <code>user?.address?.city</code>.</p>" },
  ],

};
