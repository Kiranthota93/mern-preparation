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
      "<pre><code>const people = [{ name: 'Ada' }];\nconst copied = [...people];\ncopied[0].name = 'Grace';\nconsole.log(people[0].name); // Grace</code></pre>" +
      "<p class='ex-gotcha'>This is a classic interview question: the outer array is new, but the inner object is not.</p>",

    "Deep copying":
      "<p><b>Simple definition:</b> A deep copy duplicates nested data, so changes to one copy do not affect the other.</p>" +
      "<p><b>Technical definition:</b> Deep cloning duplicates all nested objects and arrays recursively, which avoids shared references.</p>" +
      "<p><b>Why it is used:</b> It is useful for safe snapshots, forms, and data transforms that must not mutate the original object graph.</p>" +
      "<p><b>When not to use:</b> Do not deep clone when the data is huge or when you only need a shallow copy; it costs more memory and CPU.</p>" +
      "<pre><code>const original = [{ id: 1, tags: ['a'] }];\nconst copy = structuredClone(original);\ncopy[0].tags.push('b');\nconsole.log(original[0].tags); // ['a']</code></pre>" +
      "<p class='ex-gotcha'>Deep copy is safer but more expensive. In real code, you often want the smallest correct copy strategy, not a full recursive clone.</p>",
  },

  /* ------------------------------------------------------------------ */
  "this, objects & prototypes": {
    "this":
      "<p><b>Simple definition:</b> <code>this</code> is a keyword that points to the object a function is currently working on.</p>" +
      "<p><b>Technical definition:</b> <code>this</code> is a binding created for each function call. Its value is decided by <em>how the function is called</em>, not where it was written.</p>" +
      "<p><b>Why it is used:</b> It lets one method work for many objects. A single <code>greet()</code> can say the right name for every user, because <code>this</code> changes per call.</p>" +
      "<p><b>When to use:</b> Use it inside object methods, classes, and constructor functions where the code must refer to the instance it belongs to.</p>" +
      "<p><b>When not to use:</b> Avoid it in standalone utility functions. A plain function that takes its data as an argument is simpler and safer than one that depends on <code>this</code>.</p>" +
      "<p><b>How it works internally:</b> On every call JavaScript asks one question: what is to the <em>left of the dot</em>? That object becomes <code>this</code>. If there is no dot, there is no owner, and <code>this</code> falls back to the global object (or <code>undefined</code> in strict mode).</p>" +
      "<pre><code>const user = {\n  name: 'Ada',\n  greet() {\n    return 'Hi, ' + this.name;\n  }\n};\n\nuser.greet(); // 'Hi, Ada'  ← 'user' is left of the dot</code></pre>" +
      "<p class='ex-gotcha'>The single most useful rule: <code>this</code> is set at <b>call time</b>, not at definition time. The same function can have four different <code>this</code> values depending on how you invoke it.</p>",

    "this in regular functions":
      "<p><b>Simple definition:</b> In a normal function, <code>this</code> depends entirely on how the function was called.</p>" +
      "<p><b>Technical definition:</b> Regular functions (declarations, expressions, and methods) receive their own <code>this</code> binding on every invocation, determined by the call site.</p>" +
      "<p><b>Why it is used:</b> This dynamic binding is what allows the same method to be shared across many objects and still refer to the right one.</p>" +
      "<p><b>When not to use:</b> Do not rely on it inside callbacks passed to <code>setTimeout</code>, <code>map</code>, or event handlers unless you deliberately bind it, because the call site changes.</p>" +
      "<p><b>The four call patterns:</b></p>" +
      "<pre><code>function show() { return this; }\n\n// 1. Method call    → the object before the dot\nobj.show();        // this === obj\n\n// 2. Plain call     → globalThis, or undefined in strict mode\nshow();            // this === globalThis / undefined\n\n// 3. Explicit call  → whatever you pass\nshow.call(person); // this === person\n\n// 4. new call       → the brand-new object\nnew Show();        // this === the new instance</code></pre>" +
      "<p><b>The classic trap — a lost method:</b></p>" +
      "<pre><code>const user = { name: 'Ada', greet() { return this.name; } };\n\nconst fn = user.greet; // pulled off the object\nfn();                  // undefined — no dot, so no owner</code></pre>" +
      "<p class='ex-gotcha'>Detaching a method loses its <code>this</code>. The function itself never stored a link back to <code>user</code>; the dot supplied it at call time. Fix with <code>user.greet.bind(user)</code>.</p>",

    "this in arrow functions":
      "<p><b>Simple definition:</b> Arrow functions do not get their own <code>this</code>. They borrow it from the code around them.</p>" +
      "<p><b>Technical definition:</b> An arrow function has no <code>this</code> binding of its own. When you write <code>this</code> inside one, JavaScript resolves it lexically, exactly like any other variable, by looking outward to the enclosing scope.</p>" +
      "<p><b>Why it is used:</b> It solves the callback problem. Before arrows, developers wrote <code>const self = this;</code> or <code>.bind(this)</code> just to keep the outer <code>this</code> alive inside a nested function.</p>" +
      "<p><b>When to use:</b> Use arrows for callbacks written <em>inside</em> a method or class, where you want the surrounding <code>this</code> to carry through.</p>" +
      "<p><b>When not to use:</b> Never use an arrow as an object method or a constructor. It will not bind to the object, and <code>new</code> will throw.</p>" +
      "<pre><code>const timer = {\n  label: 'tick',\n  start() {\n    setTimeout(() => {\n      console.log(this.label); // 'tick' — inherited from start()\n    }, 100);\n  }\n};\ntimer.start();</code></pre>" +
      "<p><b>The mirror-image mistake:</b></p>" +
      "<pre><code>const user = {\n  name: 'Ada',\n  greet: () => this.name  // WRONG\n};\nuser.greet(); // undefined</code></pre>" +
      "<p>An object literal does not create a scope, so <code>this</code> here comes from outside the object entirely, not from <code>user</code>.</p>" +
      "<p class='ex-gotcha'>Because arrows have no <code>this</code> of their own, <code>call</code>, <code>apply</code>, and <code>bind</code> cannot change it. Passing a <code>thisArg</code> to an arrow is silently ignored.</p>",

    "call":
      "<p><b>Simple definition:</b> <code>call</code> runs a function immediately with a <code>this</code> value you choose.</p>" +
      "<p><b>Technical definition:</b> <code>fn.call(thisArg, arg1, arg2, ...)</code> invokes <code>fn</code> with <code>this</code> set to <code>thisArg</code> and the remaining arguments passed individually.</p>" +
      "<p><b>Why it is used:</b> It lets you borrow a method from one object and run it against another, without copying or rewriting it.</p>" +
      "<p><b>When not to use:</b> Do not reach for it when a plain argument would do. Passing data in is almost always clearer than rebinding <code>this</code>.</p>" +
      "<pre><code>function introduce(city, role) {\n  return this.name + ' from ' + city + ', ' + role;\n}\n\nconst person = { name: 'Ada' };\nintroduce.call(person, 'London', 'engineer');\n// 'Ada from London, engineer'</code></pre>" +
      "<p><b>Returns:</b> whatever the function returns. It runs right away.</p>" +
      "<p class='ex-gotcha'>Remember the shape: <code>call</code> takes arguments as a <b>comma-separated list</b>. Think \"<b>C</b>all = <b>C</b>ommas\".</p>",

    "apply":
      "<p><b>Simple definition:</b> <code>apply</code> is identical to <code>call</code>, except the arguments arrive as one array.</p>" +
      "<p><b>Technical definition:</b> <code>fn.apply(thisArg, [arg1, arg2])</code> invokes <code>fn</code> with a chosen <code>this</code> and an array-like list of arguments spread into parameters.</p>" +
      "<p><b>Why it is used:</b> It was the standard way to pass a dynamic, unknown-length argument list before spread syntax existed.</p>" +
      "<p><b>When not to use:</b> In modern code, spread has largely replaced it. <code>fn.call(obj, ...args)</code> reads better than <code>fn.apply(obj, args)</code>.</p>" +
      "<pre><code>const person = { name: 'Ada' };\nintroduce.apply(person, ['London', 'engineer']);\n// same result as .call — only the argument shape differs\n\n// The old spread trick:\nMath.max.apply(null, [4, 9, 2]); // 9\nMath.max(...[4, 9, 2]);          // 9 — modern equivalent</code></pre>" +
      "<p class='ex-gotcha'>Think \"<b>A</b>pply = <b>A</b>rray\". <code>call</code> and <code>apply</code> do exactly the same job; only the argument packaging differs.</p>",

    "bind":
      "<p><b>Simple definition:</b> <code>bind</code> does not run the function. It returns a <em>new</em> function with <code>this</code> permanently locked in.</p>" +
      "<p><b>Technical definition:</b> <code>fn.bind(thisArg, ...preset)</code> returns a bound function whose <code>this</code> is fixed to <code>thisArg</code> forever, optionally with some leading arguments pre-filled.</p>" +
      "<p><b>Why it is used:</b> It is the fix for detached methods. Event handlers, <code>setTimeout</code> callbacks, and props passed to React components all lose their <code>this</code> unless bound.</p>" +
      "<p><b>When not to use:</b> Inside a method you control, an arrow function is usually simpler than binding.</p>" +
      "<pre><code>const user = { name: 'Ada', greet() { return this.name; } };\n\nconst loose = user.greet;\nloose();                       // undefined\n\nconst bound = user.greet.bind(user);\nbound();                       // 'Ada' — this is locked to user\nsetTimeout(bound, 100);        // still 'Ada'</code></pre>" +
      "<p><b>Partial application bonus:</b></p>" +
      "<pre><code>function multiply(a, b) { return a * b; }\nconst double = multiply.bind(null, 2);\ndouble(5); // 10 — 'a' was pre-filled</code></pre>" +
      "<p><b>Returns:</b> a new function. The original is untouched.</p>" +
      "<p class='ex-gotcha'>Two traps. First, <code>bind</code> returns a function &mdash; forgetting to call it means nothing happens. Second, the binding is permanent: <code>fn.bind(a).bind(b)</code> still uses <code>a</code>.</p>",

    "Object creation":
      "<p><b>Simple definition:</b> There are several ways to make an object; the literal <code>{}</code> is the one you will use almost every time.</p>" +
      "<p><b>Technical definition:</b> Objects can be created with a literal, with <code>new Object()</code>, with a constructor function or class, or with <code>Object.create(proto)</code> to control the prototype directly.</p>" +
      "<p><b>Why it is used:</b> Objects group related named values into one unit that can be passed, stored, and returned as a single thing.</p>" +
      "<p><b>When to use which:</b> Use a literal for one-off data. Use a class or constructor when you need many objects of the same shape. Use <code>Object.create</code> when you specifically care about the prototype link.</p>" +
      "<pre><code>// 1. Literal — the default choice\nconst user = { name: 'Ada', age: 36 };\n\n// 2. Class — many objects of one shape\nclass User { constructor(name) { this.name = name; } }\nconst u = new User('Ada');\n\n// 3. Object.create — explicit prototype\nconst base = { greet() { return 'hi'; } };\nconst child = Object.create(base);\n\n// 4. Factory function — returns a fresh object\nconst makeUser = name => ({ name });</code></pre>" +
      "<p class='ex-gotcha'>Avoid <code>new Object()</code>; it is slower to read and offers nothing over <code>{}</code>. Also note the factory pattern needs <code>({ name })</code> with parentheses, or the arrow reads <code>{}</code> as a code block.</p>",

    "Object properties":
      "<p><b>Simple definition:</b> A property is a key-value pair inside an object, read with a dot or with brackets.</p>" +
      "<p><b>Technical definition:</b> Properties are stored under string or symbol keys. Dot notation requires a fixed, valid identifier; bracket notation accepts any expression that evaluates to a key.</p>" +
      "<p><b>Why it is used:</b> Bracket access is what makes objects dynamic. It lets a variable decide which property to read at runtime.</p>" +
      "<p><b>When not to use:</b> Do not use brackets with a hardcoded literal (<code>user['name']</code>). The dot is cleaner when the key is known.</p>" +
      "<pre><code>const user = { name: 'Ada', 'work role': 'engineer' };\n\nuser.name;            // 'Ada'          — dot, fixed key\nuser['work role'];    // 'engineer'     — brackets required (space in key)\n\nconst key = 'name';\nuser[key];            // 'Ada'          — dynamic key\nuser.key;             // undefined      — looks for a literal 'key' property\n\ndelete user.age;      // removes a property\n'name' in user;       // true — existence check</code></pre>" +
      "<p><b>Reading a missing property returns <code>undefined</code></b>, it does not throw. Reading a property <em>of</em> <code>undefined</code> does throw.</p>" +
      "<p class='ex-gotcha'>The <code>user.key</code> vs <code>user[key]</code> confusion is one of the most common beginner bugs. The dot always means the literal text after it; brackets evaluate first.</p>",

    "Property descriptors conceptually":
      "<p><b>Simple definition:</b> Every property secretly carries a few switches that control whether it can be changed, listed, or deleted.</p>" +
      "<p><b>Technical definition:</b> Each property has a descriptor with <code>value</code>, <code>writable</code>, <code>enumerable</code>, and <code>configurable</code> flags (or <code>get</code>/<code>set</code> for accessor properties).</p>" +
      "<p><b>Why it is used:</b> It lets library authors create read-only or hidden properties, and it explains why some built-in properties behave differently from yours.</p>" +
      "<p><b>When not to use:</b> This is rarely needed in application code. Learn it to understand behavior and answer interview questions, not as a daily tool.</p>" +
      "<p><b>What the three switches mean:</b></p>" +
      "<pre><code>writable     → can the value be reassigned?\nenumerable   → does it show up in for...in and Object.keys?\nconfigurable → can it be deleted or its flags changed?</code></pre>" +
      "<pre><code>const user = { name: 'Ada' };\nObject.getOwnPropertyDescriptor(user, 'name');\n// { value: 'Ada', writable: true, enumerable: true, configurable: true }\n\nObject.defineProperty(user, 'id', { value: 1 });\nuser.id = 99;\nconsole.log(user.id);        // 1 — silently ignored, writable defaults to false\nconsole.log(Object.keys(user)); // ['name'] — 'id' is not enumerable</code></pre>" +
      "<p class='ex-gotcha'>The defaults flip depending on how the property is made. Normal assignment gives you all three flags as <code>true</code>; <code>Object.defineProperty</code> defaults every omitted flag to <code>false</code>. That asymmetry is the whole trick behind this question.</p>",

    "Object methods":
      "<p><b>Simple definition:</b> A method is just a function stored as a property of an object. <code>Object.keys</code>, <code>Object.values</code>, and <code>Object.entries</code> are the built-in helpers for inspecting objects.</p>" +
      "<p><b>Technical definition:</b> Method shorthand (<code>greet() {}</code>) defines a function-valued property. The static <code>Object.*</code> helpers convert an object's own enumerable properties into arrays so array methods can be used on them.</p>" +
      "<p><b>Why it is used:</b> Objects have no <code>map</code> or <code>filter</code> of their own. Converting to entries, transforming, and converting back is the standard way to process object data.</p>" +
      "<p><b>When not to use:</b> If you find yourself repeatedly converting between objects and arrays, the data may have been better modelled as an array or a <code>Map</code> from the start.</p>" +
      "<pre><code>const scores = { ada: 90, sam: 75 };\n\nObject.keys(scores);    // ['ada', 'sam']\nObject.values(scores);  // [90, 75]\nObject.entries(scores); // [['ada', 90], ['sam', 75]]\n\n// Transform an object with array methods:\nconst boosted = Object.fromEntries(\n  Object.entries(scores).map(([k, v]) => [k, v + 5])\n);\n// { ada: 95, sam: 80 }\n\nObject.assign({}, scores, { sam: 80 }); // merge into a new object</code></pre>" +
      "<p class='ex-gotcha'>These helpers only see <b>own enumerable</b> properties. Anything inherited from the prototype chain is skipped, which is exactly why <code>Object.keys</code> on an instance never lists its class methods.</p>",

    "Destructuring":
      "<p><b>Simple definition:</b> Destructuring pulls values out of an object into standalone variables, matched <em>by name</em>.</p>" +
      "<p><b>Technical definition:</b> A destructuring pattern on the left of <code>=</code> reads matching keys from the right-hand object and assigns them to the named bindings, with optional renaming and defaults.</p>" +
      "<p><b>Why it is used:</b> It removes repetitive <code>const name = user.name;</code> lines and makes function signatures self-documenting.</p>" +
      "<p><b>When not to use:</b> Deeply nested destructuring with renaming and defaults all at once becomes unreadable. Split it into two steps instead.</p>" +
      "<pre><code>const user = { name: 'Ada', age: 36, address: { city: 'London' } };\n\nconst { name, age } = user;                // name = 'Ada', age = 36\nconst { name: fullName } = user;           // rename → fullName\nconst { role = 'user' } = user;            // default when key is missing\nconst { address: { city } } = user;        // nested → city = 'London'\nconst { name: n, ...rest } = user;         // rest = { age, address }</code></pre>" +
      "<p><b>In function parameters:</b></p>" +
      "<pre><code>function greet({ name, greeting = 'Hi' }) {\n  return greeting + ', ' + name;\n}\ngreet({ name: 'Ada' }); // 'Hi, Ada'</code></pre>" +
      "<p class='ex-gotcha'>Two traps. Object destructuring matches by <b>key name</b> (order is irrelevant), while array destructuring matches by <b>position</b>. And the default only fires on <code>undefined</code>, never on <code>null</code>.</p>",

    "Computed properties":
      "<p><b>Simple definition:</b> Square brackets inside an object literal let you build a key from a variable or expression.</p>" +
      "<p><b>Technical definition:</b> A computed property name <code>[expr]</code> is evaluated at object-creation time, and its string result becomes the key.</p>" +
      "<p><b>Why it is used:</b> It is essential for dynamic data: form fields, API responses, and reducers that group items by a value known only at runtime.</p>" +
      "<p><b>When not to use:</b> If every key is known ahead of time, write them literally. Computed keys make code harder to search.</p>" +
      "<pre><code>const key = 'status';\n\nconst obj = { [key]: 'active' };\nconsole.log(obj);        // { status: 'active' }\n\n// Without computed syntax you would get the literal word 'key':\nconst wrong = { key: 'active' }; // { key: 'active' }</code></pre>" +
      "<p><b>The real-world use — updating state by field name:</b></p>" +
      "<pre><code>function updateField(state, field, value) {\n  return { ...state, [field]: value };\n}\nupdateField({ name: 'Ada' }, 'age', 36);\n// { name: 'Ada', age: 36 }</code></pre>" +
      "<p class='ex-gotcha'>Keys are always coerced to strings (or symbols). <code>{ [1]: 'a' }</code> becomes the key <code>'1'</code>, and <code>{ [{}]: 'a' }</code> becomes the useless key <code>'[object Object]'</code>. Use a <code>Map</code> if you need real object keys.</p>",

    "Optional chaining":
      "<p><b>Simple definition:</b> <code>?.</code> reads a nested property and quietly gives back <code>undefined</code> instead of crashing when something along the path is missing.</p>" +
      "<p><b>Technical definition:</b> The optional chaining operator short-circuits: if the value to its left is <code>null</code> or <code>undefined</code>, the whole expression evaluates to <code>undefined</code> and the rest of the chain is never executed.</p>" +
      "<p><b>Why it is used:</b> API responses and optional config objects are full of properties that may not exist. It replaces long <code>a &amp;&amp; a.b &amp;&amp; a.b.c</code> guard chains.</p>" +
      "<p><b>When not to use:</b> Do not scatter it everywhere to silence errors. If a value should always exist, a missing one is a real bug you want to see, not hide.</p>" +
      "<pre><code>const user = { profile: null };\n\nuser.profile.city;   // TypeError: Cannot read properties of null\nuser.profile?.city;  // undefined — safe\n\n// Works on calls and indexes too:\nuser.getName?.();    // undefined if getName does not exist\nuser.tags?.[0];      // undefined if tags is missing</code></pre>" +
      "<p><b>Returns:</b> the property value, or <code>undefined</code> if the chain short-circuited. Never <code>null</code>.</p>" +
      "<p class='ex-gotcha'>It only guards against <code>null</code> and <code>undefined</code>. It will not save you from <code>0</code>, <code>''</code>, or a genuinely thrown error deeper in the expression. And it cannot be used on the left of an assignment.</p>",

    "Nullish coalescing":
      "<p><b>Simple definition:</b> <code>??</code> supplies a fallback value, but <em>only</em> when the left side is <code>null</code> or <code>undefined</code>.</p>" +
      "<p><b>Technical definition:</b> The nullish coalescing operator returns its right operand when the left operand is nullish, and the left operand otherwise. Unlike <code>||</code>, it does not treat other falsy values as missing.</p>" +
      "<p><b>Why it is used:</b> It fixes a long-standing bug pattern where legitimate values like <code>0</code>, <code>''</code>, or <code>false</code> were silently replaced by defaults.</p>" +
      "<p><b>When to use which:</b> Use <code>??</code> when zero, empty string, or false are valid values you must keep. Use <code>||</code> only when <em>any</em> falsy value genuinely means \"not provided\".</p>" +
      "<pre><code>const count = 0;\n\ncount || 10;   // 10  ← bug: 0 is falsy, so the real value is lost\ncount ?? 10;   // 0   ← correct: 0 is a real value\n\nconst name = '';\nname || 'Anonymous';  // 'Anonymous'\nname ?? 'Anonymous';  // ''  — an empty string was deliberately set</code></pre>" +
      "<pre><code>// Common pairing with optional chaining:\nconst city = user.profile?.city ?? 'Unknown';</code></pre>" +
      "<p class='ex-gotcha'>You cannot mix <code>??</code> with <code>||</code> or <code>&amp;&amp;</code> without parentheses &mdash; <code>a || b ?? c</code> is a SyntaxError. JavaScript forces you to make the precedence explicit.</p>",

    "Prototype":
      "<p><b>Simple definition:</b> Every object has a hidden link to another object it can borrow properties from. That other object is its prototype.</p>" +
      "<p><b>Technical definition:</b> Each object holds an internal <code>[[Prototype]]</code> reference. When a property is not found on the object itself, the engine follows that reference and looks there instead.</p>" +
      "<p><b>Why it is used:</b> It is how JavaScript shares behavior without copying. A thousand arrays do not each store their own <code>map</code> function; they all point at the same <code>Array.prototype</code>.</p>" +
      "<p><b>When not to use:</b> Never add properties to built-in prototypes (<code>Array.prototype.myHelper = ...</code>). It affects every array in the program and breaks other code.</p>" +
      "<p><b>Think of it as</b> a fallback dictionary. Ask an object for a word; if it does not have it, it asks the book behind it.</p>" +
      "<pre><code>const animal = { speak() { return 'generic sound'; } };\nconst dog = Object.create(animal);\ndog.name = 'Rex';\n\ndog.name;    // 'Rex'           — own property\ndog.speak(); // 'generic sound' — borrowed from the prototype\n\ndog.hasOwnProperty('speak');       // false — it is not really dog's\nObject.getPrototypeOf(dog) === animal; // true</code></pre>" +
      "<p class='ex-gotcha'>Do not confuse the two names. <code>obj.__proto__</code> (or <code>Object.getPrototypeOf(obj)</code>) is the link an object <em>uses</em>. <code>Fn.prototype</code> is a property on a <b>function</b>, holding the object that will become the prototype of instances made with <code>new Fn()</code>. They are different things with confusingly similar names.</p>",

    "Prototype chain":
      "<p><b>Simple definition:</b> If a property is not on the object or its prototype, JavaScript keeps walking up the chain until it finds it or runs out.</p>" +
      "<p><b>Technical definition:</b> Property lookup traverses the <code>[[Prototype]]</code> links one level at a time. The chain terminates at <code>Object.prototype</code>, whose prototype is <code>null</code>.</p>" +
      "<p><b>Why it is used:</b> It is the mechanism behind all inheritance in JavaScript. Classes and <code>extends</code> are a friendlier syntax over this same chain.</p>" +
      "<p><b>How the lookup runs:</b></p>" +
      "<pre><code>dog.toString()\n  ↓  not on dog\ndog.__proto__          (animal)\n  ↓  not on animal\nanimal.__proto__       (Object.prototype)\n  ↓  found toString here\n     → called\n\n// If it were still missing:\nObject.prototype.__proto__ === null → undefined</code></pre>" +
      "<pre><code>const arr = [1, 2, 3];\narr.map(n => n);\n// arr → Array.prototype (has map) → Object.prototype → null</code></pre>" +
      "<p><b>What is returned when nothing matches:</b> <code>undefined</code> for a property, or a <code>TypeError</code> if you tried to call it as a function.</p>" +
      "<p class='ex-gotcha'>Longer chains mean slower lookups and harder debugging. In real code, prefer composition or shallow class hierarchies over deep prototype chains. Also, <code>for...in</code> walks the whole chain, which is why <code>Object.keys</code> is usually the safer choice.</p>",

    "Object.create":
      "<p><b>Simple definition:</b> <code>Object.create(proto)</code> makes a new empty object whose prototype is exactly the object you passed in.</p>" +
      "<p><b>Technical definition:</b> It returns a new object with its <code>[[Prototype]]</code> set to the first argument, optionally with property descriptors supplied as a second argument.</p>" +
      "<p><b>Why it is used:</b> It sets up inheritance directly, without involving constructor functions or the <code>new</code> keyword.</p>" +
      "<p><b>When not to use:</b> For everyday application code, classes are clearer and more familiar to most teams. Reach for <code>Object.create</code> when you want a prototype link with no constructor ceremony, or a truly empty object.</p>" +
      "<pre><code>const animal = {\n  speak() { return this.name + ' makes a sound'; }\n};\n\nconst dog = Object.create(animal);\ndog.name = 'Rex';\ndog.speak(); // 'Rex makes a sound'</code></pre>" +
      "<p><b>The dictionary trick:</b></p>" +
      "<pre><code>const dict = Object.create(null);\n// no prototype at all — no toString, no hasOwnProperty\n// safe to use arbitrary user input as keys</code></pre>" +
      "<p class='ex-gotcha'><code>Object.create(animal)</code> is not the same as <code>{ ...animal }</code>. The first <b>links</b> to <code>animal</code>, so later changes to <code>animal</code> are visible. The second <b>copies</b> the properties once and then goes its own way.</p>",

    "Constructor functions":
      "<p><b>Simple definition:</b> A regular function called with <code>new</code>, used as a blueprint for building many similar objects.</p>" +
      "<p><b>Technical definition:</b> When invoked with <code>new</code>, a function creates a fresh object, links it to the function's <code>.prototype</code>, binds <code>this</code> to it, runs the body, and returns that object implicitly.</p>" +
      "<p><b>Why it is used:</b> It was the standard way to model object types before ES6 classes. Understanding it explains what classes actually do underneath.</p>" +
      "<p><b>When not to use:</b> In new code, use <code>class</code>. It does the same job with clearer syntax and better error messages.</p>" +
      "<p><b>What <code>new</code> does, step by step:</b></p>" +
      "<pre><code>const u = new User('Ada');\n\n1. create {}                        an empty object\n2. link its prototype → User.prototype\n3. bind this → that object\n4. run the function body\n5. return this (unless the body returns an object)</code></pre>" +
      "<pre><code>function User(name) {\n  this.name = name;              // per-instance data\n}\nUser.prototype.greet = function () {\n  return 'Hi, ' + this.name;     // shared across all instances\n};\n\nconst a = new User('Ada');\na.greet();                       // 'Hi, Ada'\na.hasOwnProperty('greet');       // false — it lives on the prototype</code></pre>" +
      "<p class='ex-gotcha'>Forgetting <code>new</code> is the classic bug: <code>User('Ada')</code> runs as a plain call, so <code>this</code> is the global object (or <code>undefined</code> in strict mode), and the result is <code>undefined</code>. Classes protect you here &mdash; calling a class without <code>new</code> throws immediately.</p>",

    "Classes":
      "<p><b>Simple definition:</b> A class is cleaner syntax for creating objects that share the same structure and behavior.</p>" +
      "<p><b>Technical definition:</b> <code>class</code> is syntactic sugar over constructor functions and prototypes. Methods defined in the class body are placed on <code>ClassName.prototype</code>, exactly as with the older pattern.</p>" +
      "<p><b>Why it is used:</b> It expresses intent clearly, groups the constructor and methods in one block, and adds features like <code>#private</code> fields, getters, setters, and <code>static</code> members.</p>" +
      "<p><b>When not to use:</b> Do not create a class for a bag of data with no behavior; a plain object or factory function is simpler. Classes earn their weight when there is real shared behavior and state.</p>" +
      "<pre><code>class User {\n  #secret = 'hidden';          // truly private field\n\n  constructor(name) {\n    this.name = name;          // per-instance\n  }\n\n  greet() {                    // → User.prototype.greet\n    return 'Hi, ' + this.name;\n  }\n\n  get initials() {             // getter, read as a property\n    return this.name[0];\n  }\n\n  static create(name) {        // called on the class, not instances\n    return new User(name);\n  }\n}\n\nconst u = new User('Ada');\nu.greet();      // 'Hi, Ada'\nu.initials;     // 'A'  — no parentheses\nUser.create('Sam');\nu.#secret;      // SyntaxError — private outside the class</code></pre>" +
      "<p class='ex-gotcha'>Classes are not hoisted the way function declarations are &mdash; using one before its definition throws a <code>ReferenceError</code> (temporal dead zone). Class bodies also run in strict mode automatically, and calling a class without <code>new</code> always throws.</p>",

    "Inheritance":
      "<p><b>Simple definition:</b> One class can build on another, reusing its behavior and adding or replacing parts.</p>" +
      "<p><b>Technical definition:</b> <code>extends</code> links the subclass prototype to the superclass prototype, so instances inherit through the prototype chain. <code>super</code> calls the parent constructor or a parent method.</p>" +
      "<p><b>Why it is used:</b> It avoids duplicating shared logic when several types are genuinely specialized versions of one general type.</p>" +
      "<p><b>When not to use:</b> Inheritance is often overused. If the relationship is not a true \"is a\", prefer composition &mdash; pass in the behavior as a dependency instead of inheriting it. Deep hierarchies are hard to change safely.</p>" +
      "<pre><code>class Animal {\n  constructor(name) { this.name = name; }\n  speak() { return this.name + ' makes a sound'; }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);          // must run before using 'this'\n    this.breed = breed;\n  }\n  speak() {               // override\n    return super.speak() + ' — a bark';\n  }\n}\n\nconst rex = new Dog('Rex', 'Lab');\nrex.speak();              // 'Rex makes a sound — a bark'\nrex instanceof Animal;    // true</code></pre>" +
      "<p><b>The chain it builds:</b></p>" +
      "<pre><code>rex → Dog.prototype → Animal.prototype → Object.prototype → null</code></pre>" +
      "<p class='ex-gotcha'>Inside a subclass constructor, touching <code>this</code> before calling <code>super()</code> throws a <code>ReferenceError</code>. The parent constructor is what creates the object <code>this</code> refers to, so it must run first.</p>",

    "Encapsulation concepts":
      "<p><b>Simple definition:</b> Encapsulation means hiding internal details and exposing only a small, deliberate interface.</p>" +
      "<p><b>Technical definition:</b> It is the practice of restricting direct access to internal state, allowing changes only through controlled methods that can validate and maintain invariants.</p>" +
      "<p><b>Why it is used:</b> If anything can change a value directly, no rule about that value can be trusted. Encapsulation gives one place to enforce correctness, and lets you change the internals later without breaking callers.</p>" +
      "<p><b>When not to use:</b> Do not wrap plain data in getters and setters that add no rules. That is ceremony, not encapsulation.</p>" +
      "<p><b>Two ways JavaScript does it:</b></p>" +
      "<pre><code>// 1. Closures — private by scope\nfunction makeAccount(start) {\n  let balance = start;              // unreachable from outside\n  return {\n    deposit(n) {\n      if (n <= 0) throw new Error('invalid');\n      balance += n;\n    },\n    get balance() { return balance; }\n  };\n}\n\nconst acc = makeAccount(100);\nacc.deposit(50);\nacc.balance;     // 150\nacc.balance = 0; // ignored — no setter defined</code></pre>" +
      "<pre><code>// 2. Private class fields — private by syntax\nclass Account {\n  #balance = 0;\n  deposit(n) {\n    if (n <= 0) throw new Error('invalid');\n    this.#balance += n;\n  }\n  get balance() { return this.#balance; }\n}</code></pre>" +
      "<p class='ex-gotcha'>A leading underscore (<code>this._balance</code>) is only a naming convention &mdash; nothing stops anyone from writing to it. Real privacy comes from closures or <code>#</code> fields. And beware leaking references: returning an internal array lets callers mutate your state through the back door, so return a copy.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Asynchronous JavaScript": {
    "Synchronous vs asynchronous execution":
      "<p><b>Simple definition:</b> Synchronous code runs one line at a time, each line waiting for the last. Asynchronous code lets a slow operation run in the background while the rest of the program keeps going.</p>" +
      "<p><b>Technical definition:</b> JavaScript itself is single-threaded &mdash; it can only run one piece of your code at a time. \"Async\" does not mean multiple threads; it means the slow part (a timer, a network request, a file read) is handed off to the browser or Node runtime, and your code is notified with a callback once it finishes.</p>" +
      "<p><b>Why it is used:</b> Without it, a 2-second network request would freeze the entire page (or block the whole Node server) for those 2 seconds. Handing the wait off keeps the program responsive.</p>" +
      "<p><b>How it works internally:</b> the runtime (not the JS engine) does the actual waiting.</p>" +
      "<pre><code>call stack (your code)\n   ↓ hands off a slow task\nWeb API / Node API (timer, network, file system)\n   ↓ when done, queues a callback\ncallback queue\n   ↓ event loop moves it back\ncall stack (runs when stack is empty)</code></pre>" +
      "<pre><code>console.log('1');\nsetTimeout(() => console.log('3'), 1000);\nconsole.log('2');\n// logs: 1, 2, 3 — the timer runs LATER, script keeps going now</code></pre>" +
      "<p class='ex-gotcha'>\"Asynchronous\" does not mean \"runs in parallel\". Your JS callbacks still run one at a time, on the same single thread &mdash; async only changes <em>when</em> they run, not how many run at once.</p>",

    "Callbacks":
      "<p><b>Simple definition:</b> A callback is a function you hand to another function, to be run later &mdash; often once some slow work finishes.</p>" +
      "<p><b>Technical definition:</b> Callbacks were JavaScript's original mechanism for asynchronous control flow, before Promises existed. The function that receives the callback decides when (and with what arguments) to invoke it.</p>" +
      "<p><b>Why it is used:</b> It is still the basis for events (<code>addEventListener</code>) and many Node APIs, and every Promise is built on the same underlying idea.</p>" +
      "<p><b>When not to use:</b> For new async code with multiple steps, prefer Promises/<code>async</code>-<code>await</code> &mdash; see \"Callback hell\" for why.</p>" +
      "<pre><code>function loadUser(id, callback) {\n  setTimeout(() => {\n    callback(null, { id, name: 'Ada' }); // (error, result) convention\n  }, 500);\n}\n\nloadUser(1, (err, user) => {\n  if (err) return console.log('failed');\n  console.log(user.name); // 'Ada' — after 500ms\n});</code></pre>" +
      "<p class='ex-gotcha'>The <code>(error, result)</code> parameter order (\"error-first callback\") is a Node.js convention, not a language rule &mdash; forgetting to check <code>err</code> first is a classic source of silent bugs.</p>",

    "Callback hell":
      "<p><b>Simple definition:</b> When each async step depends on the last, callback-based code nests deeper and deeper, until it becomes a sideways-growing pyramid that's hard to read or change.</p>" +
      "<p><b>Technical definition:</b> Callback hell (the \"pyramid of doom\") arises because callbacks have no way to compose &mdash; the only way to sequence async steps with callbacks alone is to nest the next one inside the previous one's callback.</p>" +
      "<p><b>Why it matters:</b> beyond ugliness, nested callbacks make error handling repetitive (every level needs its own <code>if (err)</code>) and control flow (loops, early returns, try/catch) far harder to reason about.</p>" +
      "<pre><code>getUser(id, (err, user) => {\n  if (err) return handle(err);\n  getPosts(user.id, (err, posts) => {\n    if (err) return handle(err);\n    getComments(posts[0].id, (err, comments) => {\n      if (err) return handle(err);\n      console.log(comments); // 3 levels deep, and growing\n    });\n  });\n});</code></pre>" +
      "<p class='ex-gotcha'>The fix is not \"write less nested code\" as a style rule &mdash; it's a structural problem that Promises and <code>async</code>/<code>await</code> solve directly, by letting async steps read top-to-bottom instead of nesting.</p>",

    "Promises":
      "<p><b>Simple definition:</b> A promise is an object that stands in for a value you don't have yet, but will (or will fail to) get eventually.</p>" +
      "<p><b>Technical definition:</b> A <code>Promise</code> wraps an asynchronous operation and exposes a consistent interface (<code>.then</code>/<code>.catch</code>/<code>.finally</code>) for reacting to its eventual success or failure, regardless of how long it takes.</p>" +
      "<p><b>Why it is used:</b> It replaces nested callbacks with a chain that reads top-to-bottom, and gives async code a single, predictable way to report success or failure.</p>" +
      "<p><b>When to use:</b> Any time you're wrapping or consuming an async operation &mdash; a network call, a timer, a file read.</p>" +
      "<pre><code>const promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    const ok = true;\n    ok ? resolve('done') : reject(new Error('failed'));\n  }, 500);\n});\n\npromise.then(value => console.log(value)); // 'done', after 500ms</code></pre>" +
      "<p><b>Returns:</b> the constructor returns a new promise object immediately &mdash; the executor function inside runs synchronously right away, but <code>resolve</code>/<code>reject</code> settle it later.</p>" +
      "<p class='ex-gotcha'>Creating a promise does not start a timer or a fetch \"in the background\" by magic &mdash; the code inside the executor runs immediately and synchronously; it's <em>settling</em> (calling resolve/reject) that can happen later.</p>",

    "Promise states":
      "<p><b>Simple definition:</b> Every promise is in exactly one of three states: waiting, succeeded, or failed &mdash; and once it succeeds or fails, that's final.</p>" +
      "<p><b>Technical definition:</b> A promise starts <b>pending</b>. It can transition once to either <b>fulfilled</b> (resolved with a value) or <b>rejected</b> (failed with a reason). Fulfilled and rejected are both called <em>settled</em>, and a settled promise can never change state again.</p>" +
      "<p><b>Why it matters:</b> this permanence is what makes promises trustworthy &mdash; you can attach a <code>.then</code> at any time, even after it has already settled, and it will still fire with the correct final value exactly once.</p>" +
      "<pre><code>pending\n  ├──→ fulfilled  (resolve() was called)   ─┐\n  └──→ rejected   (reject() was called)    ─┴─→ settled (permanent)</code></pre>" +
      "<pre><code>const p = new Promise(resolve => resolve('first'));\np.then(v => console.log(v)); // 'first'\n// calling resolve again does nothing — already settled</code></pre>" +
      "<p class='ex-gotcha'>Calling <code>resolve()</code> a second time, or calling <code>reject()</code> after <code>resolve()</code>, is silently ignored &mdash; the first settlement wins and every later one is a no-op.</p>",

    ".then":
      "<p><b>Simple definition:</b> <code>.then(onSuccess, onFailure)</code> registers what should happen once a promise settles.</p>" +
      "<p><b>Technical definition:</b> <code>.then</code> takes up to two callbacks &mdash; one for fulfillment, one for rejection &mdash; and, critically, <b>always returns a brand-new promise</b>, which is what makes chaining possible.</p>" +
      "<p><b>Why it is used:</b> It's the fundamental way to consume a promise's eventual value.</p>" +
      "<pre><code>fetchUser(1)\n  .then(user => user.name)   // returns a NEW promise, resolved with the name\n  .then(name => console.log(name)); // 'Ada'</code></pre>" +
      "<p><b>Returns:</b> a new promise. If the callback returns a plain value, the new promise resolves with it. If the callback returns <em>another promise</em>, the new promise waits for that one and adopts its outcome (auto-\"flattening\", no manual unwrapping needed).</p>" +
      "<p class='ex-gotcha'>Forgetting to <code>return</code> inside a <code>.then</code> callback is one of the most common async bugs &mdash; the next <code>.then</code> in the chain receives <code>undefined</code> instead of the value you meant to pass along.</p>",

    ".catch":
      "<p><b>Simple definition:</b> <code>.catch(onFailure)</code> handles a rejection anywhere earlier in the chain.</p>" +
      "<p><b>Technical definition:</b> <code>.catch(fn)</code> is exactly shorthand for <code>.then(undefined, fn)</code>. It catches a rejection from the promise it's attached to, and (importantly) from <em>any</em> earlier <code>.then</code> in the same chain that didn't already handle it.</p>" +
      "<p><b>Why it is used:</b> A single <code>.catch</code> at the end of a chain is usually cleaner than passing an error handler to every individual <code>.then</code>.</p>" +
      "<pre><code>fetchUser(1)\n  .then(user => { throw new Error('boom'); })\n  .then(x => console.log('never runs'))\n  .catch(err => console.log('caught:', err.message)); // 'caught: boom'</code></pre>" +
      "<p class='ex-gotcha'>A <code>.catch</code> handles the error and, by returning normally, <b>resumes the chain as fulfilled</b> &mdash; any <code>.then</code> after the <code>.catch</code> runs normally, not as an error handler. If you re-throw inside <code>.catch</code>, the chain stays rejected.</p>",

    ".finally":
      "<p><b>Simple definition:</b> <code>.finally(fn)</code> runs after a promise settles, no matter whether it succeeded or failed.</p>" +
      "<p><b>Technical definition:</b> The callback receives no arguments (it can't see the value or the error) and cannot change the outcome &mdash; the original fulfillment value or rejection reason passes through to whatever comes next, unless <code>finally</code>'s own callback throws.</p>" +
      "<p><b>Why it is used:</b> Cleanup that must always happen &mdash; hiding a loading spinner, closing a connection &mdash; regardless of success or failure.</p>" +
      "<pre><code>fetchUser(1)\n  .then(user => console.log(user))\n  .catch(err => console.log('failed'))\n  .finally(() => console.log('done loading')); // always runs last</code></pre>" +
      "<p class='ex-gotcha'>Because it can't see the value, <code>.finally</code> is not the place to do anything with the result &mdash; and if its own callback throws or returns a rejected promise, <em>that</em> becomes the new outcome, overriding whatever came before.</p>",

    "Promise chaining":
      "<p><b>Simple definition:</b> Chaining is stringing multiple <code>.then</code> calls together to run async steps one after another, each using the result of the last.</p>" +
      "<p><b>Technical definition:</b> Because every <code>.then</code> returns a new promise, and returning a promise from inside a <code>.then</code> callback makes the chain wait for it, you can sequence any number of async steps in a single flat chain instead of nesting them.</p>" +
      "<p><b>Why it is used:</b> It's the direct fix for callback hell &mdash; a chain reads top-to-bottom instead of growing sideways.</p>" +
      "<pre><code>getUser(1)\n  .then(user => getPosts(user.id))   // waits for this promise too\n  .then(posts => getComments(posts[0].id))\n  .then(comments => console.log(comments))\n  .catch(err => console.log('any step failed:', err.message));</code></pre>" +
      "<p class='ex-gotcha'>Nesting <code>.then</code> calls instead of chaining them flat (<code>getUser().then(u => getPosts(u).then(p => ...))</code>) recreates callback hell with promises &mdash; the whole benefit is lost. Always <code>return</code> and chain flat.</p>",

    "async/await":
      "<p><b>Simple definition:</b> <code>async</code>/<code>await</code> is syntax that lets you write promise-based code that <em>looks</em> synchronous, top to bottom.</p>" +
      "<p><b>Technical definition:</b> An <code>async</code> function always returns a promise. Inside it, <code>await</code> pauses that function's execution (without blocking anything else) until the awaited promise settles, then resumes with its value.</p>" +
      "<p><b>Why it is used:</b> It reads like normal sequential code &mdash; loops, try/catch, and conditionals all work naturally, unlike inside a <code>.then</code> chain.</p>" +
      "<p><b>When not to use:</b> Do not use <code>await</code> for independent operations that could run at the same time &mdash; see \"Sequential vs parallel async execution\".</p>" +
      "<pre><code>async function loadDashboard(id) {\n  const user = await getUser(id);     // pauses here\n  const posts = await getPosts(user.id); // then here\n  return { user, posts };\n}\n\nloadDashboard(1).then(data => console.log(data));\n// loadDashboard itself always returns a promise</code></pre>" +
      "<p><b>Returns:</b> whatever you <code>return</code> from an <code>async</code> function is automatically wrapped in a resolved promise. If you <code>throw</code>, the returned promise rejects.</p>" +
      "<p class='ex-gotcha'>\"<code>await</code> pauses everything\" is the common misreading &mdash; it only pauses <em>that function</em>. The rest of the program (other code, the event loop, other async functions) keeps running normally.</p>",

    "try/catch with async":
      "<p><b>Simple definition:</b> Wrapping <code>await</code> in <code>try</code>/<code>catch</code> lets you handle a rejected promise the same way you'd handle a thrown error.</p>" +
      "<p><b>Technical definition:</b> When an awaited promise rejects, <code>await</code> effectively re-throws that rejection reason at the point of the <code>await</code>, so an ordinary <code>catch</code> block around it will catch it.</p>" +
      "<p><b>Why it is used:</b> It unifies error handling for sync and async code into one familiar pattern, instead of a separate <code>.catch()</code> chain.</p>" +
      "<pre><code>async function loadUser(id) {\n  try {\n    const user = await fetchUser(id); // rejects\n    console.log(user);\n  } catch (err) {\n    console.log('failed:', err.message); // catches it\n  }\n}</code></pre>" +
      "<p class='ex-gotcha'>The <code>try</code>/<code>catch</code> only catches a rejection from an <code>await</code> <em>inside its own block</em>. A promise you create but forget to <code>await</code> rejects on its own, outside the <code>try</code>, and the <code>catch</code> will never see it &mdash; it becomes an unhandled rejection instead.</p>",

    "Promise.all":
      "<p><b>Simple definition:</b> <code>Promise.all(promises)</code> waits for every promise in a list to succeed, and gives you back all their results together.</p>" +
      "<p><b>Technical definition:</b> It returns a single promise that fulfills with an array of results (in the same order as the input) once <em>all</em> input promises fulfill, or rejects immediately as soon as <em>any one</em> of them rejects (\"fail-fast\").</p>" +
      "<p><b>Why it is used:</b> Running independent async operations at the same time, when you need every result and can't proceed without all of them.</p>" +
      "<pre><code>const [user, posts, settings] = await Promise.all([\n  fetchUser(1), fetchPosts(1), fetchSettings(1)\n]); // all three run concurrently, not one after another</code></pre>" +
      "<p class='ex-gotcha'>Fail-fast means one failure discards everything &mdash; even if 2 of 3 requests already succeeded, <code>Promise.all</code> rejects and you get none of the results back. Use <code>Promise.allSettled</code> if you need the successes even when something fails.</p>",

    "Promise.allSettled":
      "<p><b>Simple definition:</b> Like <code>Promise.all</code>, but it never fails &mdash; it waits for every promise to finish, whether it succeeded or not, and reports both.</p>" +
      "<p><b>Technical definition:</b> It always fulfills (never rejects) with an array of <code>{ status, value }</code> or <code>{ status, reason }</code> objects, one per input promise, once every one of them has settled.</p>" +
      "<p><b>Why it is used:</b> When you want the results of everything that succeeded, even if some operations failed &mdash; e.g. loading several independent widgets where one failing shouldn't blank out the rest.</p>" +
      "<pre><code>const results = await Promise.allSettled([\n  fetchA(), fetchB() // B rejects\n]);\n// [\n//   { status: 'fulfilled', value: 'A ok' },\n//   { status: 'rejected', reason: Error('B failed') }\n// ]\nresults\n  .filter(r => r.status === 'fulfilled')\n  .forEach(r => console.log(r.value));</code></pre>" +
      "<p class='ex-gotcha'>Because it never rejects, wrapping it in <code>try</code>/<code>catch</code> is pointless &mdash; you must check each <code>result.status</code> yourself instead of relying on an exception.</p>",

    "Promise.race":
      "<p><b>Simple definition:</b> <code>Promise.race(promises)</code> settles as soon as the <em>first</em> promise settles &mdash; win or lose.</p>" +
      "<p><b>Technical definition:</b> It returns a promise that adopts the outcome (fulfilled or rejected) of whichever input promise settles first; the rest keep running but their results are ignored.</p>" +
      "<p><b>Why it is used:</b> The classic use case is a timeout &mdash; race a real request against a timer that rejects, so a hung request can't stall forever.</p>" +
      "<pre><code>const timeout = new Promise((_, reject) =>\n  setTimeout(() => reject(new Error('timeout')), 3000)\n);\n\nconst data = await Promise.race([fetchData(), timeout]);\n// resolves with fetchData()'s result if it beats 3s, else rejects</code></pre>" +
      "<p class='ex-gotcha'>\"Race\" means first to <b>settle</b>, not first to succeed &mdash; if the fastest promise rejects, <code>Promise.race</code> rejects too, even if a slower one would have fulfilled. That's the exact difference from <code>Promise.any</code>.</p>",

    "Promise.any":
      "<p><b>Simple definition:</b> <code>Promise.any(promises)</code> gives you the first one that <em>succeeds</em>, ignoring failures unless everything fails.</p>" +
      "<p><b>Technical definition:</b> It fulfills as soon as any input promise fulfills. It only rejects if <em>all</em> of them reject, and in that case rejects with an <code>AggregateError</code> containing every individual rejection reason.</p>" +
      "<p><b>Why it is used:</b> Trying several equivalent sources (mirrors, fallback servers) and taking whichever answers first, successfully.</p>" +
      "<pre><code>const fastest = await Promise.any([\n  fetchFromMirrorA(),  // fails\n  fetchFromMirrorB(),  // succeeds\n  fetchFromMirrorC(),  // still pending\n]);\n// resolves with mirror B's result — A's failure is ignored</code></pre>" +
      "<p class='ex-gotcha'>Don't confuse it with <code>Promise.race</code>: <code>race</code> cares about who settles first (success or failure); <code>any</code> specifically waits for the first <em>success</em> and only gives up if literally everything fails.</p>",

    "Sequential vs parallel async execution":
      "<p><b>Simple definition:</b> If async steps don't depend on each other, running them one-by-one with separate <code>await</code>s wastes time &mdash; you should start them together instead.</p>" +
      "<p><b>Technical definition:</b> Each <code>await</code> pauses until that specific promise settles before moving to the next line. If the operations are independent, awaiting them in sequence adds their durations together, when starting them concurrently (e.g. with <code>Promise.all</code>) only takes as long as the slowest one.</p>" +
      "<p><b>Why it matters:</b> this is one of the highest-impact real-world performance bugs in async code &mdash; three independent 1-second requests can take 3 seconds sequentially, or ~1 second run together.</p>" +
      "<pre><code>// SEQUENTIAL — slow, ~3× the time (unnecessary, they don't depend on each other)\nconst a = await fetchA(); // waits\nconst b = await fetchB(); // then waits again\nconst c = await fetchC(); // then waits again\n\n// PARALLEL — fast, all start together\nconst [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);</code></pre>" +
      "<p class='ex-gotcha'>The classic version of this bug is <code>await</code> inside a <code>for</code> loop over independent items &mdash; it silently runs every iteration one after another. If the items don't depend on each other, map to an array of promises first, then <code>Promise.all</code> that array.</p>",

    "Error propagation in promises":
      "<p><b>Simple definition:</b> An error in a promise chain skips forward past every <code>.then</code> until it finds a <code>.catch</code> (or an <code>await</code> inside a <code>try</code>/<code>catch</code>).</p>" +
      "<p><b>Technical definition:</b> A rejection (or a thrown error inside a <code>.then</code> callback, which becomes a rejection) propagates down the chain, skipping the success handlers of subsequent <code>.then</code> calls, until it reaches a rejection handler.</p>" +
      "<p><b>Why it is used:</b> This mirrors synchronous <code>try</code>/<code>catch</code> propagation, so you don't need an error check after every single async step &mdash; one handler at the end (or one <code>try</code>/<code>catch</code>) is usually enough.</p>" +
      "<pre><code>step1()\n  .then(step2)          // throws\n  .then(step3)          // SKIPPED — error is already propagating\n  .then(step4)          // SKIPPED\n  .catch(err => console.log('caught at the end:', err.message));</code></pre>" +
      "<p class='ex-gotcha'>A promise that's created but never given a <code>.catch</code> (and never awaited inside a <code>try</code>) still fails silently at first &mdash; it becomes an <b>unhandled rejection</b>, which most environments will eventually log as a warning or crash the process.</p>",

    "Promise cancellation concepts":
      "<p><b>Simple definition:</b> Once a promise exists, you cannot cancel it directly &mdash; there's no built-in <code>.cancel()</code> method.</p>" +
      "<p><b>Technical definition:</b> A <code>Promise</code> represents a value that will eventually exist, not a runnable task &mdash; it has no concept of being stopped. What you actually cancel is the underlying <em>operation</em> (a fetch, a timer), which then causes its promise to reject.</p>" +
      "<p><b>Why it matters:</b> a component that unmounts, or a search box where the user typed a new query, both need a way to say \"ignore the result of that earlier request\" &mdash; and promises alone can't express that.</p>" +
      "<pre><code>// A promise cannot stop itself:\nconst p = fetch('/slow-endpoint');\n// there is no p.cancel() — the request keeps running</code></pre>" +
      "<p class='ex-gotcha'>\"Cancelling a promise\" is really shorthand for \"cancelling the operation and ignoring its promise's eventual result\" &mdash; see <code>AbortController</code>, the standard tool for the former.</p>",

    "AbortController":
      "<p><b>Simple definition:</b> <code>AbortController</code> is a standard way to tell a cancellable async operation (like <code>fetch</code>) to stop.</p>" +
      "<p><b>Technical definition:</b> Creating an <code>AbortController</code> gives you a <code>.signal</code> to pass into a cancellable API, and an <code>.abort()</code> method to call when you want it to stop. The operation then rejects its promise with an <code>AbortError</code>.</p>" +
      "<p><b>Why it is used:</b> Cancelling an in-flight request when a user navigates away, types a new search, or a component unmounts &mdash; so a stale, late-arriving response can't overwrite newer data.</p>" +
      "<pre><code>const controller = new AbortController();\n\nfetch('/search?q=abc', { signal: controller.signal })\n  .then(res => res.json())\n  .catch(err => {\n    if (err.name === 'AbortError') console.log('cancelled');\n  });\n\ncontroller.abort(); // triggers the rejection above</code></pre>" +
      "<p class='ex-gotcha'>Aborting doesn't magically undo work already done, and it doesn't stop the underlying network byte transfer instantly &mdash; it tells the API to stop and reject its promise so <em>your code</em> can ignore the result; always check <code>err.name === 'AbortError'</code> so you don't treat a deliberate cancel as a real failure.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Event loop": {
    "Event loop":
      "<p><b>Simple definition:</b> The event loop is the mechanism that lets single-threaded JavaScript handle many things \"at once\" &mdash; it keeps checking: is the call stack empty? If so, run the next queued callback.</p>" +
      "<p><b>Technical definition:</b> The event loop is a continuously-running process that coordinates the call stack, the Web/Node APIs, and the callback queues. It never runs your code itself &mdash; it only decides <em>when</em> a waiting callback gets pushed onto the call stack.</p>" +
      "<p><b>Why it is used:</b> It's what makes non-blocking async possible on a single thread &mdash; slow operations are handed off elsewhere, and the loop brings their results back at the right moment without ever running two callbacks at the same instant.</p>" +
      "<p><b>How it works internally</b> &mdash; the loop's actual rule, every tick:</p>" +
      "<pre><code>1. Run the current task on the call stack until it's empty.\n2. Drain the ENTIRE microtask queue (run every microtask,\n   even new ones added while draining).\n3. (In browsers) possibly render a frame.\n4. Take exactly ONE task from the macrotask queue, run it.\n5. Go back to step 1.</code></pre>" +
      "<pre><code>console.log('A');\nsetTimeout(() => console.log('D'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('B');\n// A, B, C, D — sync first, then ALL microtasks, then ONE macrotask</code></pre>" +
      "<p class='ex-gotcha'>The loop does not run your code \"in parallel\" with itself &mdash; it strictly alternates: finish what's running, drain microtasks completely, then take just one macrotask. Understanding that asymmetry (drain vs. take-one) answers most ordering questions in this topic.</p>",

    "Call stack":
      "<p><b>Simple definition:</b> The call stack is where JavaScript keeps track of what function is currently running, and what called it.</p>" +
      "<p><b>Technical definition:</b> It's a LIFO (last-in, first-out) stack of execution contexts. Calling a function pushes a new frame on top; returning from it pops that frame off. The event loop only moves a queued callback onto the call stack once it is completely empty.</p>" +
      "<p><b>Why it matters:</b> because JS has exactly one call stack, it can only truly execute one line of your code at any instant &mdash; this is the literal meaning of \"single-threaded\".</p>" +
      "<pre><code>function c() { console.log('in c'); }\nfunction b() { c(); }\nfunction a() { b(); }\na();\n\n// stack grows: a → b → c\n// 'in c' logs, then c returns, b returns, a returns\n// stack shrinks back to empty</code></pre>" +
      "<p class='ex-gotcha'>\"Maximum call stack size exceeded\" (e.g. from infinite recursion with no base case) means the stack grew frame after frame with nothing ever popping off, until it overflowed its fixed size limit.</p>",

    "Web APIs/runtime APIs":
      "<p><b>Simple definition:</b> Things like <code>setTimeout</code>, <code>fetch</code>, and DOM events are not part of the JavaScript language itself &mdash; they're provided by the environment running your code (the browser, or Node).</p>" +
      "<p><b>Technical definition:</b> The JS engine (e.g. V8) only implements the language spec &mdash; values, functions, closures, promises' mechanics. Timers, network requests, and file I/O are supplied by the host environment, which does the actual waiting outside the JS engine and hands a callback back to the queue when done.</p>" +
      "<p><b>Why it matters:</b> this is <em>why</em> async doesn't block the single JS thread &mdash; the waiting happens in the runtime (often backed by real OS-level concurrency), not in your JS code, which stays free to keep running.</p>" +
      "<pre><code>setTimeout(fn, 1000);\n// JS engine: 'not my job to wait' — hands the timer off\n// to the browser/Node runtime, which calls back into the\n// macrotask queue once 1000ms has passed</code></pre>" +
      "<p class='ex-gotcha'>This is why the exact same JS language can behave slightly differently between a browser and Node &mdash; <code>setTimeout</code>, <code>fetch</code>, and the queue phases are runtime features, not JavaScript-the-language features.</p>",

    "Task queue":
      "<p><b>Simple definition:</b> Also called the macrotask queue &mdash; where callbacks from things like <code>setTimeout</code>, <code>setInterval</code>, and I/O wait their turn to run.</p>" +
      "<p><b>Technical definition:</b> A FIFO queue of macrotasks. On every iteration of the event loop, after fully draining the microtask queue, the loop removes and runs exactly <b>one</b> task from this queue.</p>" +
      "<p><b>Why it is used:</b> It's the mechanism that lets timers and I/O callbacks run only when the stack is free, in the order they became ready.</p>" +
      "<pre><code>setTimeout(() => console.log('first timer'), 0);\nsetTimeout(() => console.log('second timer'), 0);\n// both queued as macrotasks — 'first timer' then 'second timer',\n// each getting the FULL microtask queue drained before the next one runs</code></pre>" +
      "<p class='ex-gotcha'>Only <b>one</b> macrotask runs per loop iteration, even if several are ready &mdash; contrast with the microtask queue, which is always drained completely before moving on.</p>",

    "Microtask queue":
      "<p><b>Simple definition:</b> A separate, higher-priority queue for promise callbacks and <code>queueMicrotask</code> &mdash; it's always fully emptied before the next macrotask runs.</p>" +
      "<p><b>Technical definition:</b> After each synchronous task finishes, the event loop repeatedly pulls and runs microtasks &mdash; including ones newly added by other microtasks &mdash; until the queue is completely empty, before doing anything else.</p>" +
      "<p><b>Why it is used:</b> Promises need to resolve reliably and predictably before the next \"round\" of work, so promise reactions were given this stronger guarantee than timers.</p>" +
      "<pre><code>Promise.resolve()\n  .then(() => {\n    console.log('1');\n    Promise.resolve().then(() => console.log('2')); // queued DURING the drain\n  });\nsetTimeout(() => console.log('3'), 0);\n// logs: 1, 2, 3 — the nested microtask (2) still runs before the macrotask (3)</code></pre>" +
      "<p class='ex-gotcha'>Because the drain keeps consuming <em>newly added</em> microtasks too, a microtask that keeps scheduling another microtask can starve macrotasks (and browser rendering) indefinitely &mdash; see \"Event-loop starvation\".</p>",

    "Macrotasks":
      "<p><b>Simple definition:</b> The \"big\", lower-priority units of work &mdash; a <code>setTimeout</code> firing, a <code>setInterval</code> tick, a click event, a full script execution.</p>" +
      "<p><b>Technical definition:</b> Macrotasks (sometimes just called \"tasks\") are scheduled in the task queue and processed one per event-loop iteration, always after the microtask queue has been fully drained.</p>" +
      "<p><b>Why the distinction exists:</b> giving promises (microtasks) priority over timers (macrotasks) means promise chains resolve as soon as possible, without waiting behind whatever timers happen to be queued.</p>" +
      "<pre><code>setTimeout(() => console.log('macrotask'), 0);\nPromise.resolve().then(() => console.log('microtask'));\n// microtask, THEN macrotask — always, regardless of delay=0</code></pre>" +
      "<p class='ex-gotcha'>A <code>setTimeout(fn, 0)</code> never truly runs at 0ms &mdash; it's a macrotask, so it always runs after the current script and every pending microtask, and browsers additionally clamp very short/nested timeouts to a minimum of ~4ms.</p>",

    "Promise callbacks":
      "<p><b>Simple definition:</b> The functions you pass to <code>.then</code>, <code>.catch</code>, and <code>.finally</code> don't run immediately when the promise settles &mdash; they're scheduled as microtasks.</p>" +
      "<p><b>Technical definition:</b> When a promise settles, its reaction callbacks are placed on the microtask queue rather than run synchronously, even if the promise was <em>already</em> settled at the time you attached the handler.</p>" +
      "<pre><code>const p = Promise.resolve('already done');\nconsole.log('sync 1');\np.then(v => console.log(v)); // still deferred to a microtask\nconsole.log('sync 2');\n// sync 1, sync 2, already done — never runs synchronously, even though p was ready</code></pre>" +
      "<p class='ex-gotcha'>Beginners often expect <code>.then</code> on an already-resolved promise to run its callback right away, synchronously &mdash; it never does. Promise callbacks are <em>always</em> asynchronous, even for a promise that was resolved before <code>.then</code> was even called.</p>",

    "setTimeout":
      "<p><b>Simple definition:</b> Schedules a function to run once, after at least the given number of milliseconds.</p>" +
      "<p><b>Technical definition:</b> <code>setTimeout(fn, delay)</code> queues <code>fn</code> as a macrotask once <code>delay</code> ms have elapsed. The delay is a <em>minimum</em>, not a guarantee &mdash; the callback still has to wait for the current call stack to clear and the entire microtask queue to drain first.</p>" +
      "<pre><code>const start = Date.now();\nsetTimeout(() => {\n  console.log('actual delay:', Date.now() - start);\n}, 100);\n\n// a long synchronous loop here would push the real delay well past 100ms</code></pre>" +
      "<p class='ex-gotcha'><code>setTimeout(fn, 0)</code> does not mean \"run immediately\" &mdash; it means \"run as soon as possible <em>after</em> the current script and all pending microtasks finish\", which is never truly zero delay.</p>",

    "setInterval":
      "<p><b>Simple definition:</b> Like <code>setTimeout</code>, but repeats every <code>delay</code> ms until you stop it.</p>" +
      "<p><b>Technical definition:</b> <code>setInterval(fn, delay)</code> queues <code>fn</code> as a macrotask repeatedly. Each firing still has to wait its turn behind the call stack and microtask queue, so if a tick's work takes longer than <code>delay</code>, ticks can pile up or fire back-to-back once the stack finally clears.</p>" +
      "<pre><code>let count = 0;\nconst id = setInterval(() => {\n  console.log(++count);\n  if (count === 3) clearInterval(id); // must clear it, or it runs forever\n}, 100);</code></pre>" +
      "<p class='ex-gotcha'>If the callback's own work regularly takes longer than the interval, ticks don't queue up infinitely waiting &mdash; browsers typically skip overlapping ticks, so the effective rate silently slows down. A common fix is a self-rescheduling <code>setTimeout</code> instead, which waits for one tick to finish before scheduling the next.</p>",

    "queueMicrotask":
      "<p><b>Simple definition:</b> A direct way to schedule a function as a microtask, without needing a promise as a vehicle for it.</p>" +
      "<p><b>Technical definition:</b> <code>queueMicrotask(fn)</code> adds <code>fn</code> straight to the microtask queue &mdash; functionally equivalent to <code>Promise.resolve().then(fn)</code>, but without creating a promise object.</p>" +
      "<p><b>Why it is used:</b> When you want microtask-priority scheduling (runs before any macrotask) without the overhead or semantics of a promise.</p>" +
      "<pre><code>console.log('1');\nqueueMicrotask(() => console.log('3'));\nconsole.log('2');\n// 1, 2, 3 — runs after current sync code, but before any setTimeout</code></pre>" +
      "<p class='ex-gotcha'>It's easy to assume this is some exotic API, but it's simply a cleaner way to say \"run this as a microtask\" &mdash; every place you've used <code>Promise.resolve().then(fn)</code> purely for its timing (not its value) can usually be replaced with it.</p>",

    "Execution order":
      "<p><b>Simple definition:</b> Working out exactly what logs when sync code, microtasks, and macrotasks are mixed together &mdash; the classic interview whiteboard question for this whole topic.</p>" +
      "<p><b>The rule to apply, every time:</b> run all synchronous code first, then drain the microtask queue completely (including newly-added ones), then run exactly one macrotask, then repeat.</p>" +
      "<pre><code>console.log('A');\n\nsetTimeout(() => console.log('F — timeout'), 0);\n\nPromise.resolve().then(() => {\n  console.log('C — promise');\n  return Promise.resolve();\n}).then(() => console.log('E — promise chained'));\n\nconsole.log('B');\n\nqueueMicrotask(() => console.log('D — micro'));\n\n// actual order: A, B, C, D, E, F</code></pre>" +
      "<p>Walking it: <code>A</code> and <code>B</code> run first — the script itself is synchronous top to bottom, so both logs happen before any queued callback. That leaves two microtasks queued, <em>in the order each scheduling call was reached</em>: the first <code>.then</code> was attached before <code>queueMicrotask</code> was called, so it goes first in line — draining gives <code>C</code>, then <code>D</code>. The first <code>.then</code>'s return value creates a <em>new</em> microtask for the second <code>.then</code>, which gets appended to the end of the (still-draining) queue — so it runs after <code>D</code>, giving <code>E</code>. Only once the microtask queue is completely empty does the loop take the one macrotask, <code>F</code>.</p>" +
      "<p class='ex-gotcha'>The safest way to answer these in an interview: list every scheduling call in the order it's <em>reached</em> during the synchronous pass, tag each as sync/microtask/macrotask, then apply \"sync → drain all microtasks in queued order → one macrotask\".</p>",

    "Event-loop starvation":
      "<p><b>Simple definition:</b> When something keeps the event loop too busy to ever get to macrotasks (like rendering, timers, or I/O), those things starve &mdash; they never get their turn.</p>" +
      "<p><b>Technical definition:</b> Two distinct causes: (1) a long-running <b>synchronous</b> block of code holds the call stack and blocks everything, including microtasks and rendering, until it finishes; (2) a microtask that keeps scheduling <em>another</em> microtask never lets the queue fully drain, so the loop never reaches the macrotask step or a render.</p>" +
      "<pre><code>// Cause 1 — long synchronous work blocks EVERYTHING\nfunction blockFor(ms) {\n  const end = Date.now() + ms;\n  while (Date.now() < end) {} // nothing else can run — no timers, no clicks, no rendering\n}\n\n// Cause 2 — a self-perpetuating microtask starves macrotasks\nfunction loopForever() {\n  Promise.resolve().then(loopForever); // queue never empties\n}\n// setTimeout callbacks queued elsewhere will NEVER run</code></pre>" +
      "<p class='ex-gotcha'>A common real-world version of cause 1 is a heavy synchronous computation (parsing huge JSON, a big loop) run directly on the main thread &mdash; the UI visibly freezes because rendering is also blocked behind it. Fixes: break work into chunks with <code>setTimeout</code>/<code>requestIdleCallback</code>, or move it to a Web Worker.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Error handling": {
    "try/catch":
      "<p><b>Simple definition:</b> <code>try</code>/<code>catch</code> lets you run risky code, and if it throws, recover instead of crashing.</p>" +
      "<p><b>Technical definition:</b> Code in the <code>try</code> block runs normally; if any statement inside it throws, execution jumps immediately to the <code>catch</code> block with the thrown value, skipping the rest of <code>try</code>. An optional <code>finally</code> block always runs afterward, regardless of outcome.</p>" +
      "<p><b>Why it is used:</b> To handle expected failure points (parsing untrusted input, a risky calculation) without letting one error take down the whole program.</p>" +
      "<p><b>When not to use:</b> Don't wrap code in <code>try</code>/<code>catch</code> \"just in case\" everywhere &mdash; catching errors you can't meaningfully handle just hides real bugs. Only catch where you can actually do something useful with the failure.</p>" +
      "<pre><code>try {\n  JSON.parse(\"not valid json\");\n} catch (err) {\n  console.log(\"parse failed:\", err.message);\n}\nconsole.log(\"program continues\");</code></pre>" +
      "<p class='ex-gotcha'><code>try</code>/<code>catch</code> only catches <b>synchronous</b> errors thrown directly inside its block (or from an <code>await</code>ed promise inside it). It does <em>not</em> catch an error thrown inside a <code>setTimeout</code> callback or from a promise you didn't <code>await</code> &mdash; by the time that code runs, the <code>try</code> block has already finished.</p>",

    "throw":
      "<p><b>Simple definition:</b> <code>throw</code> immediately stops normal execution and hands a value up to the nearest <code>catch</code>.</p>" +
      "<p><b>Technical definition:</b> <code>throw</code> can raise any value &mdash; a string, a number, an object &mdash; but the value that unwinds the stack is whatever you give it. If nothing catches it, the program (or that call stack) terminates with an uncaught exception.</p>" +
      "<p><b>Why it is used:</b> To signal that something has gone wrong in a way the calling code needs to know about and can't just ignore.</p>" +
      "<pre><code>function withdraw(balance, amount) {\n  if (amount > balance) throw new Error(\"Insufficient funds\");\n  return balance - amount;\n}\ntry {\n  withdraw(100, 500);\n} catch (err) {\n  console.log(err.message); // 'Insufficient funds'\n}</code></pre>" +
      "<p class='ex-gotcha'>You <em>can</em> <code>throw \"just a string\"</code>, but you should always throw an actual <code>Error</code> (or subclass) &mdash; only <code>Error</code> objects capture a <code>.stack</code> trace, which is essential for debugging where the throw actually happened.</p>",

    "Custom errors":
      "<p><b>Simple definition:</b> Extending the built-in <code>Error</code> class lets you create your own named error types, so calling code can tell different failures apart.</p>" +
      "<p><b>Technical definition:</b> A custom error class extends <code>Error</code>, calls <code>super(message)</code> to set up the message and stack trace, and typically sets <code>this.name</code> to the class name (since the default <code>name</code> is inherited as <code>\"Error\"</code> otherwise).</p>" +
      "<p><b>Why it is used:</b> Lets code distinguish <code>catch</code> logic by error type (\"was this a validation problem or a network problem?\") instead of parsing message strings.</p>" +
      "<pre><code>class ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = \"ValidationError\"; // otherwise it would say 'Error'\n    this.field = field;\n  }\n}\n\ntry {\n  throw new ValidationError(\"Email is required\", \"email\");\n} catch (err) {\n  if (err instanceof ValidationError) {\n    console.log(err.name, err.message, err.field);\n    // ValidationError Email is required email\n  }\n}</code></pre>" +
      "<p class='ex-gotcha'>Forgetting <code>this.name = \"ValidationError\"</code> is a common miss &mdash; without it, <code>err.name</code> still reports the generic <code>\"Error\"</code>, and <code>err.toString()</code> prints <code>\"Error: ...\"</code> instead of <code>\"ValidationError: ...\"</code>, even though <code>instanceof</code> still works correctly either way.</p>",

    "Error objects":
      "<p><b>Simple definition:</b> The built-in <code>Error</code> object bundles a human-readable message with a stack trace showing where it was created.</p>" +
      "<p><b>Technical definition:</b> <code>new Error(message)</code> creates an object with a <code>.message</code>, a <code>.name</code> (<code>\"Error\"</code> by default), and a <code>.stack</code> string. Built-in subtypes like <code>TypeError</code>, <code>RangeError</code>, and <code>ReferenceError</code> are thrown automatically by the engine for their matching mistakes.</p>" +
      "<pre><code>null.foo;        // TypeError: Cannot read properties of null\nundefinedVar;    // ReferenceError: undefinedVar is not defined\nnew Array(-1);   // RangeError: Invalid array length</code></pre>" +
      "<p class='ex-gotcha'><code>error.stack</code> is only populated correctly if the object was created with <code>new Error(...)</code> (or a subclass) &mdash; a thrown plain object or string has no stack trace, making the failure much harder to locate later.</p>",

    "Error propagation":
      "<p><b>Simple definition:</b> An uncaught error doesn't just stop where it happened &mdash; it keeps bubbling up through each calling function until something catches it, or nothing does.</p>" +
      "<p><b>Technical definition:</b> When a function throws and doesn't catch it itself, the exception unwinds the call stack one frame at a time, skipping the remaining code in each function, until a <code>try</code>/<code>catch</code> is found (or the stack empties and the program crashes / the process reports an uncaught exception).</p>" +
      "<pre><code>function c() { throw new Error(\"deep failure\"); }\nfunction b() { c(); console.log(\"never runs\"); }\nfunction a() {\n  try {\n    b();\n  } catch (err) {\n    console.log(\"caught in a:\", err.message);\n  }\n}\na(); // 'caught in a: deep failure' — b and c never handled it themselves</code></pre>" +
      "<p class='ex-gotcha'>You don't need a <code>try</code>/<code>catch</code> in every function along the way &mdash; one <code>catch</code> higher up the call chain is often the right amount, exactly like how one <code>.catch()</code> at the end of a promise chain covers every step before it.</p>",

    "Synchronous errors":
      "<p><b>Simple definition:</b> Errors thrown by code that runs immediately, in order &mdash; the kind a normal <code>try</code>/<code>catch</code> is built to handle.</p>" +
      "<p><b>Technical definition:</b> A synchronous error is thrown during the same call-stack execution that reached the <code>throw</code> &mdash; it happens \"right now\", so a <code>try</code>/<code>catch</code> physically wrapping that code will always see it.</p>" +
      "<pre><code>try {\n  JSON.parse(\"{ bad json\");\n} catch (err) {\n  console.log(\"caught:\", err.message); // works — this IS synchronous\n}</code></pre>" +
      "<p class='ex-gotcha'>This is the baseline case that works exactly how you'd expect &mdash; the contrast worth remembering is the next entry, \"Asynchronous errors\", where the same <code>try</code>/<code>catch</code> pattern silently fails to catch anything.</p>",

    "Asynchronous errors":
      "<p><b>Simple definition:</b> An error thrown inside a callback that runs <em>later</em> (a timer, an event, an un-awaited promise) is not caught by a <code>try</code>/<code>catch</code> wrapped around the code that scheduled it.</p>" +
      "<p><b>Technical definition:</b> By the time an asynchronous callback actually runs, the synchronous <code>try</code>/<code>catch</code> block that set it up has already finished executing and been popped off the call stack &mdash; there's no longer any <code>catch</code> in scope to receive the throw.</p>" +
      "<pre><code>try {\n  setTimeout(() => {\n    throw new Error(\"boom\"); // NOT caught below\n  }, 100);\n} catch (err) {\n  console.log(\"never runs\");\n}\n// the error instead crashes as an uncaught exception, 100ms later</code></pre>" +
      "<p><b>Fix:</b> put the <code>try</code>/<code>catch</code> <em>inside</em> the callback itself:</p>" +
      "<pre><code>setTimeout(() => {\n  try {\n    throw new Error(\"boom\");\n  } catch (err) {\n    console.log(\"caught:\", err.message); // works now\n  }\n}, 100);</code></pre>" +
      "<p class='ex-gotcha'>This is one of the most common real-world mistakes with error handling &mdash; wrapping a function call that <em>schedules</em> async work in <code>try</code>/<code>catch</code> gives a false sense of safety for anything that actually goes wrong inside the callback later.</p>",

    "Promise rejection":
      "<p><b>Simple definition:</b> A promise's version of <code>throw</code> &mdash; instead of crashing immediately, a rejected promise carries its error along until something handles it with <code>.catch</code> or a <code>try</code>/<code>catch</code> around an <code>await</code>.</p>" +
      "<p><b>Technical definition:</b> A throw inside a <code>.then</code> callback, or inside an <code>async</code> function, is automatically converted into a rejected promise rather than crashing synchronously &mdash; which is exactly what makes <code>await</code> + <code>try</code>/<code>catch</code> work for async code.</p>" +
      "<pre><code>async function risky() {\n  throw new Error(\"async boom\"); // becomes a rejected promise\n}\n\nrisky().catch(err => console.log(\"caught:\", err.message));\n\n// equivalently, inside another async function:\ntry {\n  await risky();\n} catch (err) {\n  console.log(\"caught:\", err.message);\n}</code></pre>" +
      "<p class='ex-gotcha'>A promise that rejects with <em>nothing</em> attached to handle it &mdash; no <code>.catch</code>, never awaited in a <code>try</code> &mdash; becomes an <b>unhandled rejection</b>. It doesn't throw synchronously where you can see it; it's reported separately (a console warning in browsers, and can crash a Node process depending on version/config).</p>",

    "Global error handling concepts":
      "<p><b>Simple definition:</b> A last-resort, catch-everything net for errors that slipped past every local <code>try</code>/<code>catch</code> &mdash; useful for logging, not for normal control flow.</p>" +
      "<p><b>Technical definition:</b> Browsers expose <code>window.addEventListener('error', ...)</code> for uncaught synchronous errors and <code>window.addEventListener('unhandledrejection', ...)</code> for unhandled promise rejections. Node exposes the equivalent as <code>process.on('uncaughtException', ...)</code> and <code>process.on('unhandledRejection', ...)</code>.</p>" +
      "<p><b>Why it is used:</b> To log/report errors that would otherwise disappear silently (or crash the process) with no record of what happened, e.g. sending them to an error-tracking service.</p>" +
      "<pre><code>window.addEventListener('unhandledrejection', (event) => {\n  console.log('Unhandled:', event.reason);\n  // report to a monitoring service\n});</code></pre>" +
      "<p class='ex-gotcha'>These global handlers are a safety net for <em>observability</em>, not a substitute for real error handling &mdash; by the time one fires, the specific operation has already failed uncontrolled; you generally can't recover gracefully from here, only log and (in Node) often still need to exit the process safely.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Objects & immutability": {
    "Objects & immutability overview":
      "<p><b>Simple definition:</b> Objects group related values under named keys; immutability means creating an updated object instead of changing the existing one.</p>" +
      "<p><b>Technical definition:</b> An object is a reference value containing properties. Assigning or passing it shares that reference, so a mutation is visible through every variable that refers to the same object. Immutable updates create a new outer object and copy the changed path.</p>" +
      "<p><b>Why it is used:</b> Named properties model records such as users, settings, and API data clearly. Immutable updates keep state changes predictable, especially in React and reducers.</p>" +
      "<p><b>When to use:</b> Use objects for structured data with named fields, and use spread or targeted copies when an update must preserve the original value.</p>" +
      "<p><b>When not to use:</b> Do not use an object when ordering is the main concern; an array is usually clearer for an ordered collection. Do not deep-clone an entire object graph when only one small path changes.</p>" +
      "<p><b>How it works internally:</b> Object variables hold references to property collections. Spread creates a new outer collection, while a nested immutable update creates new references only along the path that changed and reuses the untouched branches.</p>" +
      "<pre><code>const user = { name: 'Ada', settings: { theme: 'light' } };\nconst updated = {\n  ...user,\n  settings: { ...user.settings, theme: 'dark' }\n};\n\nconsole.log(user.settings.theme);    // 'light'\nconsole.log(updated.settings.theme); // 'dark'</code></pre>" +
      "<p class='ex-gotcha'>Object spread is only a <b>shallow</b> copy. For a nested update, copy every level on the path you change; otherwise the old and new objects still share the same nested reference.</p>",

    "Object destructuring":
      "<p><b>Simple definition:</b> Pulls named properties out of an object into their own variables, in one step.</p>" +
      "<p><b>Technical definition:</b> A destructuring pattern reads matching keys from the source object by name (not position), with optional renaming (<code>: newName</code>) and defaults (<code>= value</code>).</p>" +
      "<p><b>Why it is used:</b> Removes repetitive <code>const x = obj.x;</code> lines and documents exactly which fields a function needs, right in its signature.</p>" +
      "<p><b>When not to use:</b> Avoid deeply nested destructuring when missing intermediate values would make the pattern hard to read or throw; extract and validate the data in smaller steps instead.</p>" +
      "<pre><code>const user = { name: 'Ada', age: 36 };\nconst { name, age = 18 } = user; // name='Ada', age=36 (already present)\nconst { name: userName } = user;  // rename → userName\n\nfunction greet({ name }) { return 'Hi, ' + name; } // in parameters</code></pre>" +
      "<p class='ex-gotcha'>Object destructuring matches by <b>key name</b>, so order doesn't matter — unlike array destructuring, which matches by position. Mixing the two mental models up is a common early bug.</p>",

    "Object spread":
      "<p><b>Simple definition:</b> <code>{ ...obj }</code> copies an object's own properties into a new object literal.</p>" +
      "<p><b>Why it is used:</b> It makes concise, non-mutating updates, copies, and merges for plain object data.</p>" +
      "<p><b>When not to use:</b> Do not treat spread as a deep clone or use it when you intentionally need to preserve property descriptors, prototypes, or getters.</p>" +
      "<p><b>Technical definition:</b> Spread inside an object literal enumerates the source's own enumerable properties and copies them into the new object, in order — later keys (including ones written after the spread) override earlier ones.</p>" +
      "<pre><code>const user = { name: 'Ada', role: 'admin' };\nconst updated = { ...user, role: 'editor' }; // { name: 'Ada', role: 'editor' }\nconst copy = { ...user };                    // a shallow copy</code></pre>" +
      "<p class='ex-gotcha'>Spread only makes a <b>shallow</b> copy — nested objects are still shared by reference between the original and the copy. See \"Shallow copy\" for the consequences.</p>",

    "Object rest":
      "<p><b>Simple definition:</b> In a destructuring pattern, <code>...rest</code> collects every property that wasn't explicitly pulled out into a new object.</p>" +
      "<p><b>Why it is used:</b> It is a clear way to omit sensitive or already-handled fields while retaining the rest of a record.</p>" +
      "<p><b>When not to use:</b> Avoid it when you need an explicit allow-list of fields; listing the permitted keys is safer than copying every unknown property.</p>" +
      "<p><b>Technical definition:</b> When used at the end of an object destructuring pattern, <code>...name</code> gathers the source's remaining own enumerable properties into a fresh object — the common pattern for \"take this one field out, keep everything else together\".</p>" +
      "<pre><code>const user = { id: 1, name: 'Ada', password: 'secret' };\nconst { password, ...safeUser } = user;\nconsole.log(safeUser); // { id: 1, name: 'Ada' } — password removed</code></pre>" +
      "<p class='ex-gotcha'>Object rest must come <b>last</b> in the pattern, just like array rest — <code>{ ...rest, name }</code> is a SyntaxError.</p>",

    "Object.keys":
      "<p><b>Simple definition:</b> Returns an array of an object's own property names.</p>" +
      "<p><b>Technical definition:</b> <code>Object.keys(obj)</code> returns an array of <code>obj</code>'s own <b>enumerable</b> string-keyed property names, in insertion order (with integer-like keys sorted first).</p>" +
      "<p><b>Why it is used:</b> It lets you iterate, count, validate, or transform an object's named fields with familiar array methods.</p>" +
      "<p><b>When not to use:</b> Do not use it when you also need the values; <code>Object.entries</code> avoids a second property lookup.</p>" +
      "<pre><code>const scores = { ada: 90, sam: 75 };\nObject.keys(scores); // ['ada', 'sam']</code></pre>" +
      "<p class='ex-gotcha'>\"Own\" and \"enumerable\" both matter: inherited properties (from the prototype chain) are never included, and neither are properties explicitly marked non-enumerable (e.g. via <code>Object.defineProperty</code>).</p>",

    "Object.values":
      "<p><b>Simple definition:</b> Returns an array of just an object's property values.</p>" +
      "<p><b>Why it is used:</b> It turns object data into a list for aggregation, validation, or display without caring about each field name.</p>" +
      "<p><b>When not to use:</b> Do not use it when a value must stay associated with its key; use <code>Object.entries</code> instead.</p>" +
      "<p><b>Technical definition:</b> <code>Object.values(obj)</code> is the value-counterpart of <code>Object.keys</code> — same rules (own, enumerable, insertion order), but returns the values instead of the keys.</p>" +
      "<pre><code>const scores = { ada: 90, sam: 75 };\nObject.values(scores);              // [90, 75]\nObject.values(scores).reduce((a,b)=>a+b, 0); // 165 — sum via array methods</code></pre>" +
      "<p class='ex-gotcha'>This is the usual bridge for using array methods (<code>reduce</code>, <code>map</code>, <code>filter</code>) on object data, since objects don't have those methods themselves.</p>",

    "Object.entries":
      "<p><b>Simple definition:</b> Returns an array of <code>[key, value]</code> pairs — everything <code>Object.keys</code> and <code>Object.values</code> give you, zipped together.</p>" +
      "<p><b>Technical definition:</b> <code>Object.entries(obj)</code> returns an array of two-element arrays, one per own enumerable property, each holding that property's key and value.</p>" +
      "<p><b>Why it is used:</b> It makes object data easy to loop over, filter, map, and rebuild with array methods.</p>" +
      "<p><b>When not to use:</b> Avoid it for extremely hot paths when creating an intermediate array of every property is unnecessary; a direct property access or targeted loop may be simpler.</p>" +
      "<pre><code>const scores = { ada: 90, sam: 75 };\nObject.entries(scores);\n// [['ada', 90], ['sam', 75]]\n\nfor (const [name, score] of Object.entries(scores)) {\n  console.log(name, score);\n}</code></pre>" +
      "<p><b>Its inverse is <code>Object.fromEntries</code></b> — turning pairs back into an object, useful for transforming an object via array methods and converting back:</p>" +
      "<pre><code>Object.fromEntries(\n  Object.entries(scores).map(([k, v]) => [k, v + 5])\n); // { ada: 95, sam: 80 }</code></pre>" +
      "<p class='ex-gotcha'>Each entry is an array, so destructure it as <code>[key, value]</code> — accessing <code>entry.key</code> is a common but wrong assumption from developers used to other languages' map/dictionary APIs.</p>",

    "Object.assign":
      "<p><b>Simple definition:</b> Copies properties from one or more source objects into a target object.</p>" +
      "<p><b>Technical definition:</b> <code>Object.assign(target, ...sources)</code> copies each source's own enumerable properties onto <code>target</code>, <b>mutating and returning it</b>, with later sources overwriting earlier ones for the same key.</p>" +
      "<p><b>Why it is used:</b> It merges properties and is useful when code needs an explicit target object or must support older patterns.</p>" +
      "<p><b>When not to use:</b> Avoid it for ordinary immutable updates because it is easy to mutate the wrong target; object spread is usually clearer.</p>" +
      "<pre><code>const defaults = { theme: 'light', notifications: true };\nconst userPrefs = { theme: 'dark' };\n\n// mutates defaults! usually NOT what you want:\nObject.assign(defaults, userPrefs);\n\n// the safe pattern — merge into a brand-new empty object:\nconst merged = Object.assign({}, defaults, userPrefs);\n// or the modern equivalent: { ...defaults, ...userPrefs }</code></pre>" +
      "<p class='ex-gotcha'>The classic mistake is calling <code>Object.assign(defaults, userPrefs)</code> and forgetting that it <b>mutates the first argument</b> — always pass a fresh <code>{}</code> as the target unless mutation is genuinely intended. Object spread (<code>{ ...a, ...b }</code>) is the modern, safer-by-default equivalent.</p>",

    "Object.freeze":
      "<p><b>Simple definition:</b> Locks an object so its existing properties can't be changed, added, or removed.</p>" +
      "<p><b>Technical definition:</b> <code>Object.freeze(obj)</code> makes every existing own property non-writable and non-configurable, and prevents new properties from being added. It returns the <em>same</em> object (not a copy), now frozen. Attempted mutations fail silently in sloppy mode and throw a <code>TypeError</code> in strict mode/modules.</p>" +
      "<p><b>Why it is used:</b> It protects fixed configuration or constants from accidental top-level changes.</p>" +
      "<p><b>When not to use:</b> Do not rely on it as complete immutability for nested state, and avoid it where intentional updates are part of normal program flow.</p>" +
      "<pre><code>const config = Object.freeze({ apiUrl: 'https://api.example.com' });\nconfig.apiUrl = 'https://evil.com'; // silently ignored (or throws in strict mode)\nconsole.log(config.apiUrl);         // still the original URL\nObject.isFrozen(config);            // true</code></pre>" +
      "<p class='ex-gotcha'><code>Object.freeze</code> is <b>shallow</b> — it only locks the object's own top-level properties. A nested object inside a frozen object is completely unprotected and can still be mutated freely: <code>frozen.nested.x = 1</code> works fine even though <code>frozen.x = 1</code> does not.</p>",

    "Shallow copy":
      "<p><b>Simple definition:</b> A shallow copy duplicates the outer object, but any nested objects inside it are still the exact same shared objects as before.</p>" +
      "<p><b>Why it is used:</b> It is the inexpensive default for top-level updates where nested data is not being changed.</p>" +
      "<p><b>When not to use:</b> Do not use it when the update mutates nested data; copy the changed nested path or use a genuine deep-clone strategy instead.</p>" +
      "<p><b>Technical definition:</b> Spread (<code>{ ...obj }</code>), <code>Object.assign({}, obj)</code>, and array's <code>slice</code>/<code>[...arr]</code> all copy only the top level — for any property whose value is itself an object, both the original and the copy hold a reference to that <em>same</em> object.</p>" +
      "<pre><code>const original = { name: 'Ada', address: { city: 'London' } };\nconst copy = { ...original };\n\ncopy.name = 'Sam';               // safe — top-level primitive, truly separate\ncopy.address.city = 'Paris';     // NOT safe — same nested object\n\nconsole.log(original.name);         // 'Ada' — unaffected\nconsole.log(original.address.city); // 'Paris' — changed too!</code></pre>" +
      "<p class='ex-gotcha'>This is the single most common interview trap in this topic: a shallow copy <em>looks</em> completely independent until you mutate something nested — then the illusion breaks and both \"copies\" change together.</p>",

    "Deep copy":
      "<p><b>Simple definition:</b> A deep copy duplicates everything, all the way down — nested objects included — so the two copies never affect each other, no matter what you mutate.</p>" +
      "<p><b>Technical definition:</b> Deep cloning recursively copies every nested object/array, producing an entirely independent object graph with no shared references anywhere.</p>" +
      "<p><b>Why it is used:</b> It creates a safe independent snapshot when nested data will be edited freely.</p>" +
      "<p><b>When not to use:</b> Avoid it for a small targeted change or large data graph; copying only the changed path is usually faster and clearer.</p>" +
      "<pre><code>const original = { name: 'Ada', address: { city: 'London' } };\nconst copy = structuredClone(original);\n\ncopy.address.city = 'Paris';\nconsole.log(original.address.city); // 'London' — truly independent</code></pre>" +
      "<p><b>When to use it:</b> when you need a safe, fully independent snapshot — e.g. before letting a form freely mutate a draft of some saved data.</p>" +
      "<p class='ex-gotcha'>Deep cloning costs more time and memory than a shallow copy, and is overkill if you're not actually going to mutate anything nested — reach for the smallest correct copy strategy, not automatically the deepest one.</p>",

    "Structured cloning":
      "<p><b>Simple definition:</b> <code>structuredClone(value)</code> is the browser/Node built-in for making a real, deep copy of most JavaScript values.</p>" +
      "<p><b>Why it is used:</b> It safely clones ordinary nested data, including values that JSON cloning cannot preserve correctly.</p>" +
      "<p><b>When not to use:</b> Do not use it for functions, DOM nodes, or a small targeted immutable update where copying only one path is cheaper.</p>" +
      "<p><b>Technical definition:</b> It implements the structured clone algorithm, correctly deep-copying nested objects/arrays and also handling <code>Date</code>, <code>Map</code>, <code>Set</code>, typed arrays, and even circular references — none of which the older <code>JSON.parse(JSON.stringify(x))</code> hack can do correctly.</p>" +
      "<pre><code>const original = { tags: ['a', 'b'], when: new Date(), self: null };\noriginal.self = original; // circular reference\n\nconst clone = structuredClone(original); // works fine\n\n// the old hack would throw on the circular ref, and silently mangle the Date:\nJSON.parse(JSON.stringify(original)); // TypeError: Converting circular structure to JSON</code></pre>" +
      "<p class='ex-gotcha'><code>structuredClone</code> cannot clone functions or DOM nodes — it throws a <code>DataCloneError</code> on them. If your object contains methods, use a manual/library deep-clone approach instead, or clone just the plain-data parts.</p>",

    "Mutation vs immutability":
      "<p><b>Simple definition:</b> Mutating means changing a value in place; the immutable approach means never changing it — instead, creating a new value with the change applied.</p>" +
      "<p><b>Technical definition:</b> A mutation modifies the existing object/array through a reference (<code>obj.x = 1</code>, <code>arr.push(x)</code>). An immutable update leaves the original untouched and produces a brand-new object/array reflecting the change (<code>{ ...obj, x: 1 }</code>, <code>[...arr, x]</code>).</p>" +
      "<p><b>Why it is used:</b> It makes state changes predictable, preserves the previous value for debugging, and enables fast reference-based change detection.</p>" +
      "<p><b>When not to use:</b> Do not force immutable copying inside a short-lived local algorithm when controlled mutation is simpler and no shared state can observe it.</p>" +
      "<pre><code>// mutation\nconst state = { count: 0 };\nstate.count += 1; // same object, changed in place\n\n// immutable update\nconst state2 = { count: 0 };\nconst next = { ...state2, count: state2.count + 1 }; // new object</code></pre>" +
      "<p><b>Why it matters:</b> immutable updates are predictable and easy to debug (the old value is still there, unchanged, for comparison), and they're what makes cheap change-detection possible — see \"Referential equality\".</p>" +
      "<p class='ex-gotcha'>Frameworks like React specifically rely on immutable state updates: if you mutate state directly instead of creating a new object, React can't tell anything changed (same reference), and your component silently fails to re-render.</p>",

    "Referential equality":
      "<p><b>Simple definition:</b> Two objects are only <code>===</code> equal if they are the literal <em>same</em> object in memory — having identical contents is not enough.</p>" +
      "<p><b>Technical definition:</b> For objects (and arrays, functions), <code>===</code> compares references, not structure. Two separately-created objects with identical properties are never equal, no matter how deeply their contents match.</p>" +
      "<p><b>Why it is used:</b> It provides a fast way to detect whether an object identity changed, which is central to efficient UI updates and memoization.</p>" +
      "<p><b>When not to use:</b> Do not use <code>===</code> when the requirement is to compare two separate objects by their contents; use a deliberate field-by-field or deep comparison instead.</p>" +
      "<pre><code>{} === {};                          // false — two different objects\nconst a = { x: 1 };\nconst b = a;\na === b;                              // true — same reference\n\n[1,2,3] === [1,2,3];                // false\nconst arr = [1,2,3];\narr === arr;                          // true</code></pre>" +
      "<p><b>Why it matters:</b> this is exactly why React (and similar libraries) can cheaply check \"did this prop/state change?\" with a fast <code>===</code> comparison instead of a slow deep comparison — <em>as long as</em> you follow the immutable-update rule and always produce a new reference on change.</p>" +
      "<p class='ex-gotcha'>Mutating an object in place and then comparing it to its old self with <code>===</code> will always say \"unchanged\" — because it's literally still the same reference — even though the contents are now different. This is the root cause of a huge class of \"my component won't re-render\" bugs.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Modules & runtime": {
    "CommonJS":
      "<p><b>Simple definition:</b> The older module system Node.js uses by default — <code>require</code> to import, <code>module.exports</code> to export.</p>" +
      "<p><b>Technical definition:</b> CommonJS (CJS) modules load <b>synchronously</b> and are resolved at <b>runtime</b> — <code>require(path)</code> is a normal function call, evaluated when execution reaches it, which means it can be called conditionally or with a dynamic path.</p>" +
      "<pre><code>// math.js\nfunction add(a, b) { return a + b; }\nmodule.exports = { add };\n\n// app.js\nconst { add } = require('./math');\nconsole.log(add(2, 3)); // 5</code></pre>" +
      "<p class='ex-gotcha'>Node uses CommonJS by default for <code>.js</code> files unless you opt into ES Modules with <code>\"type\": \"module\"</code> in <code>package.json</code>, or a <code>.mjs</code> extension — this default surprises a lot of MERN learners coming from browser-only ES module experience.</p>",

    "ES Modules":
      "<p><b>Simple definition:</b> The standard, modern JavaScript module system — <code>import</code>/<code>export</code>, built into the language itself.</p>" +
      "<p><b>Technical definition:</b> ES Modules (ESM) are <b>statically analyzed</b> at parse time, before any code runs — the engine can see the entire import/export graph up front. Imports are also <b>asynchronous</b> and hoisted, and they create <b>live, read-only bindings</b> to the exporting module's values, not copies.</p>" +
      "<pre><code>// math.js\nexport function add(a, b) { return a + b; }\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(2, 3)); // 5</code></pre>" +
      "<p class='ex-gotcha'>\"Live binding\" is the subtle but important difference from CJS: if the exporting module later reassigns an exported <code>let</code> variable, every importer sees the <em>new</em> value automatically — CJS instead hands importers a one-time snapshot copy taken at require time.</p>",

    "require":
      "<p><b>Simple definition:</b> The CommonJS function that loads another module and gives you back whatever it exported.</p>" +
      "<p><b>Technical definition:</b> <code>require(path)</code> synchronously reads, executes, and caches the target module (see \"Module caching concept\"), then returns its <code>module.exports</code> value. Because it's a real function call, it can be used anywhere a value is allowed — inside an <code>if</code>, a function body, or with a computed path.</p>" +
      "<pre><code>if (process.env.NODE_ENV === 'test') {\n  const mock = require('./mockDb'); // conditional require — only CJS allows this\n}\nconst db = require('./db');</code></pre>" +
      "<p class='ex-gotcha'>This dynamic, run-anywhere flexibility is exactly why CJS can't be reliably tree-shaken — a bundler can't know at build time which <code>require</code> calls will actually execute, or with what path.</p>",

    "import":
      "<p><b>Simple definition:</b> The ES Modules keyword for pulling in values exported by another file.</p>" +
      "<p><b>Technical definition:</b> Static <code>import</code> declarations must appear at the top level of a module (never conditionally inside an <code>if</code> or function) and are hoisted — resolved before any of the module's own code runs. For runtime-conditional loading, use the separate <code>import()</code> function form (see \"Dynamic imports\").</p>" +
      "<pre><code>import { add, subtract } from './math.js'; // named\nimport MathUtils from './math.js';         // default\nimport * as math from './math.js';         // namespace — everything</code></pre>" +
      "<p class='ex-gotcha'>Writing <code>if (cond) { import x from 'y'; }</code> is a <code>SyntaxError</code> — static <code>import</code> must be top-level. Reach for <code>import()</code> (returns a promise) when the choice to load a module is genuinely conditional.</p>",

    "module.exports":
      "<p><b>Simple definition:</b> In CommonJS, whatever you assign to <code>module.exports</code> is what another file gets back from <code>require</code>.</p>" +
      "<p><b>Technical definition:</b> Every CJS file has its own <code>module</code> object with an <code>exports</code> property, defaulting to <code>{}</code>. Assigning to <code>module.exports</code> replaces that whole object; assigning individual properties onto the existing <code>exports</code> shorthand (<code>exports.x = ...</code>) adds to it instead.</p>" +
      "<pre><code>// single export\nmodule.exports = function add(a, b) { return a + b; };\n\n// multiple named exports\nmodule.exports = { add, subtract };\n// or, equivalently, one at a time:\nexports.add = add;\nexports.subtract = subtract;</code></pre>" +
      "<p class='ex-gotcha'>Reassigning <code>exports = { add }</code> directly (instead of <code>module.exports = { add }</code>) silently breaks the export — <code>exports</code> is just a local variable that initially points at the same object as <code>module.exports</code>; reassigning the variable itself severs that link, and the module still exports the original empty object.</p>",

    "export":
      "<p><b>Simple definition:</b> The ES Modules keyword that makes a value available for other files to <code>import</code>.</p>" +
      "<p><b>Technical definition:</b> <code>export</code> can be attached to a declaration (<code>export const x = 1;</code>), used inline for multiple names (<code>export { a, b };</code>), or used as <code>export default</code> for a module's single primary export. See \"Named exports\" and \"Default exports\" for the distinction that matters most in practice.</p>" +
      "<pre><code>export const PI = 3.14;\nexport function circleArea(r) { return PI * r * r; }\n\nexport default class Circle { /* ... */ } // the module's main export</code></pre>" +
      "<p class='ex-gotcha'>A module can have any number of named exports, but at most <b>one</b> default export — mixing both in one file is legal and common, but conflating the two import syntaxes (<code>import { x }</code> for a default, or plain <code>import x</code> for a named export) is a frequent beginner error.</p>",

    "Module caching concept":
      "<p><b>Simple definition:</b> A module's code only runs <b>once</b> — every later import/require of the same file reuses the already-computed result instead of re-running it.</p>" +
      "<p><b>Technical definition:</b> Both CJS and ESM cache modules by resolved file path after first load. Subsequent <code>require</code>/<code>import</code> calls for the same path return the cached exports object directly, without re-executing the module body.</p>" +
      "<pre><code>// counter.js\nconsole.log('counter.js is running'); // only logs ONCE, ever\nlet count = 0;\nmodule.exports = { increment: () => ++count };\n\n// used from two different files:\nconst a = require('./counter');\nconst b = require('./counter');\na.increment();\nconsole.log(b.increment()); // 2 — SAME module instance, shared state</code></pre>" +
      "<p class='ex-gotcha'>Because the module only ever runs once, importing the same module from many files doesn't give each file its own private copy — they all share the exact same instance, including any mutable state it holds. This is <em>why</em> the module pattern naturally produces a singleton.</p>",

    "Circular dependencies":
      "<p><b>Simple definition:</b> Module A imports from module B, and module B imports from module A — a loop in the dependency graph that can leave one side with an incomplete version of the other.</p>" +
      "<p><b>Technical definition:</b> When Node encounters a require cycle, it returns whatever the in-progress module's <code>exports</code> object contains <em>at that point in execution</em> — often a partially-populated (or entirely empty) object, since the module hasn't finished running yet. ESM handles this somewhat better thanks to hoisting and live bindings, but can still hit temporal-dead-zone-like errors accessing a not-yet-initialized export.</p>" +
      "<pre><code>// a.js\nconst b = require('./b'); // b.js starts requiring a.js mid-execution\nconsole.log('b.value in a.js:', b.value); // may be undefined!\nmodule.exports = { name: 'a' };\n\n// b.js\nconst a = require('./a'); // gets a's exports so far — possibly {}\nmodule.exports = { value: 42 };</code></pre>" +
      "<p class='ex-gotcha'>The safest fix is almost always to <b>restructure</b> — pull the shared logic both modules need into a third file they both depend on, removing the cycle entirely, rather than trying to carefully order requires around the problem.</p>",

    "Dynamic imports":
      "<p><b>Simple definition:</b> <code>import(path)</code> loads a module <em>at runtime</em>, on demand, instead of upfront when the file is parsed.</p>" +
      "<p><b>Technical definition:</b> Unlike static <code>import</code>, the <code>import()</code> function can be called anywhere — conditionally, inside a function, with a computed path — and returns a <b>promise</b> that resolves to the module's namespace object. It works in both CJS and ESM contexts.</p>" +
      "<pre><code>async function loadChart() {\n  const { Chart } = await import('./chart.js'); // only fetched when actually needed\n  return new Chart();\n}\n\nif (userWantsDarkMode) {\n  const theme = await import('./dark-theme.js');\n}</code></pre>" +
      "<p><b>Why it is used:</b> Code splitting (only download a heavy module when it's actually needed) and conditional loading based on runtime state.</p>" +
      "<p class='ex-gotcha'>It's the one form of <code>import</code> allowed inside conditionals and functions — the static form's top-level-only restriction doesn't apply, precisely because dynamic import is resolved at runtime, not parse time.</p>",

    "Tree-shaking concept":
      "<p><b>Simple definition:</b> A bundler's ability to detect and strip out exported code that nothing actually uses, shrinking the final bundle.</p>" +
      "<p><b>Technical definition:</b> Tree-shaking relies on ESM's <b>static</b> structure — because imports/exports are fixed and analyzable at build time (not conditional, not dynamically computed), a bundler can build an accurate graph of what's actually reachable from your entry point and discard the rest.</p>" +
      "<pre><code>// utils.js — exports 10 functions\nexport function used() { /* ... */ }\nexport function neverImported() { /* ... */ } // safely dropped\n\n// app.js\nimport { used } from './utils.js';\n// a tree-shaking bundler ships only 'used', not the other 9 exports</code></pre>" +
      "<p class='ex-gotcha'>This is exactly why CommonJS doesn't tree-shake well — <code>require</code> calls can be conditional or dynamically pathed, so a bundler can't prove ahead of time which exports are truly unreachable, and generally has to keep the whole module. Preferring many small named exports over one big default-exported object also shakes better, since the bundler can see which individual names are actually used.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Performance": {
    "Debouncing":
      "<p><b>Simple definition:</b> Debouncing waits for a pause in activity before doing anything — if the event keeps firing, it keeps resetting the timer.</p>" +
      "<p><b>Technical definition:</b> A debounced function delays running until <code>delay</code> ms have passed with <em>no new calls</em>. Every new call cancels the previous pending timer and starts a fresh one, so only the final call in a burst actually executes.</p>" +
      "<p><b>Why it matters for performance:</b> a search-as-you-type input firing an API call on every keystroke can trigger dozens of wasted requests for a single word; debouncing collapses that burst into one request, sent only once the user pauses.</p>" +
      "<pre><code>function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst search = debounce(query => fetchResults(query), 300);\ninput.addEventListener('input', e => search(e.target.value));\n// typing \"hello\" fast → only ONE fetch, 300ms after the last keystroke</code></pre>" +
      "<pre><code>keystrokes: h-e-l-l-o (fast)\ntimer:      reset—reset—reset—reset—reset\n                                        └─ 300ms silence → fn runs ONCE</code></pre>" +
      "<p class='ex-gotcha'>Debouncing means the function might <em>never</em> run if the trigger never pauses — that's correct for search-as-you-type, but wrong for something that must fire at a steady rate (like a scroll progress indicator), which needs throttling instead.</p>",

    "Throttling":
      "<p><b>Simple definition:</b> Throttling guarantees the function runs at most once every fixed interval, no matter how often the event fires.</p>" +
      "<p><b>Technical definition:</b> A throttled function executes immediately on the first call, then ignores further calls until <code>interval</code> ms have passed, at which point the next call is allowed through again.</p>" +
      "<p><b>Why it matters for performance:</b> a scroll or mousemove handler can fire dozens of times per second — running expensive logic (layout reads, state updates) on every single event can visibly jank the page. Throttling caps the rate to something the browser can keep up with.</p>" +
      "<pre><code>function throttle(fn, interval) {\n  let ready = true;\n  return (...args) => {\n    if (!ready) return;\n    fn(...args);\n    ready = false;\n    setTimeout(() => { ready = true; }, interval);\n  };\n}\n\nconst onScroll = throttle(() => updateProgressBar(), 100);\nwindow.addEventListener('scroll', onScroll);\n// fires dozens of times per second, but updateProgressBar runs at most every 100ms</code></pre>" +
      "<pre><code>scroll events: | | | | | | | | | | | | | |  (very frequent)\nthrottled run: X-------X-------X-------X    (fixed-rate, guaranteed)</code></pre>" +
      "<p class='ex-gotcha'>Debounce vs throttle is the classic mix-up: <b>debounce waits for silence</b> (search input, resize-end); <b>throttle guarantees a steady maximum rate</b> even during continuous activity (scroll, mousemove, drag). Pick based on whether \"eventually once\" or \"steadily, but capped\" is what the UX actually needs.</p>",

    "Memoization":
      "<p><b>Simple definition:</b> Remembering the result of an expensive function call, so calling it again with the same input returns the cached answer instantly instead of recomputing.</p>" +
      "<p><b>Technical definition:</b> A memoized function wraps the original, keeping a cache (typically a <code>Map</code>) keyed by its arguments. On each call it checks whether that key's result is already cached; if so, it returns the cache hit immediately, skipping the real computation entirely.</p>" +
      "<pre><code>function memoize(fn) {\n  const cache = new Map();\n  return (arg) => {\n    if (cache.has(arg)) return cache.get(arg); // cache hit — instant\n    const result = fn(arg);                    // cache miss — do the work\n    cache.set(arg, result);\n    return result;\n  };\n}\n\nconst slowSquare = n => { for (let i=0;i<1e8;i++){} return n*n; };\nconst fastSquare = memoize(slowSquare);\nfastSquare(5); // slow — computes and caches\nfastSquare(5); // instant — cache hit</code></pre>" +
      "<p><b>The performance trade-off:</b> memoization spends memory (the cache) to save time (repeated computation) — worthwhile when the same inputs recur often and the computation is genuinely expensive; wasteful when inputs are rarely repeated, since you pay the memory cost for cache entries that are never reused.</p>" +
      "<p class='ex-gotcha'>Memoization only works correctly for <b>pure functions</b> — same input always produces the same output, with no dependence on outside state. Memoizing an impure function (one that reads a changing global, the current time, or random values) will happily return stale, wrong cached results.</p>",

    "Avoiding unnecessary computation":
      "<p><b>Simple definition:</b> A lot of \"performance\" is just not doing work you don't need to do — computing something once instead of on every iteration, or stopping early once you have your answer.</p>" +
      "<p><b>Technical definition:</b> Common patterns: hoisting invariant expressions out of a loop, caching a repeatedly-accessed value (like <code>array.length</code> or a DOM lookup) in a local variable, and using short-circuiting (<code>&amp;&amp;</code>, early <code>return</code>, <code>break</code>) to skip work once the answer is already determined.</p>" +
      "<pre><code>// wasteful — recomputes .length and re-derives 'threshold' every iteration\nfor (let i = 0; i < items.length; i++) {\n  const threshold = config.base * config.multiplier;\n  if (items[i].value > threshold) { /* ... */ }\n}\n\n// better — computed once, outside the loop\nconst threshold = config.base * config.multiplier;\nconst len = items.length;\nfor (let i = 0; i < len; i++) {\n  if (items[i].value > threshold) { /* ... */ }\n}</code></pre>" +
      "<p class='ex-gotcha'>Don't chase this kind of micro-optimization <em>before measuring</em> — modern JS engines already optimize many simple cases like <code>array.length</code> automatically, and hand-optimizing code that isn't actually a bottleneck just adds complexity for no real gain. Profile first, then optimize what's actually slow.</p>",

    "Memory management":
      "<p><b>Simple definition:</b> Making sure your program doesn't hold onto memory it no longer needs, which would otherwise slow things down or crash the page/process over time.</p>" +
      "<p><b>Technical definition:</b> JavaScript's garbage collector automatically frees memory for objects that are no longer <b>reachable</b> from any root reference. Performance problems arise when references linger longer than intended, keeping large objects reachable (and un-collectable) far past when they're actually needed.</p>" +
      "<pre><code>let cache = {};\nfunction store(key, bigData) {\n  cache[key] = bigData; // grows forever — never evicted\n}\n// a cache with no eviction strategy is a slow, silent memory leak</code></pre>" +
      "<p><b>Practical habits:</b> clear timers you no longer need (<code>clearInterval</code>/<code>clearTimeout</code>), remove event listeners when a component unmounts, and cap the size of any manually-managed cache (e.g. evict the oldest entry once it grows past a limit).</p>" +
      "<p class='ex-gotcha'>The most common real-world memory issue isn't a dramatic \"leak\" — it's a slow accumulation from things like forgotten <code>setInterval</code> timers, detached DOM nodes still referenced by a closure, or listeners that were added but never removed. See \"Memory leaks\" (Advanced JavaScript) for the full breakdown.</p>",

    "Large-array processing":
      "<p><b>Simple definition:</b> Processing big arrays efficiently means avoiding patterns that scale badly, and not doing more passes over the data than necessary.</p>" +
      "<p><b>Technical definition:</b> Two common performance traps: an O(n²) pattern (e.g. repeatedly calling <code>.includes()</code> or <code>.find()</code> on an array inside a loop, when a <code>Set</code>/<code>Map</code> lookup would be O(1)), and chaining many separate array passes (<code>.map().filter().map()</code>) when a single <code>reduce</code> could do the same work in one pass.</p>" +
      "<pre><code>// O(n²) — .includes() rescans the whole array every iteration\nconst blocked = [/* thousands of ids */];\nconst filtered = users.filter(u => blocked.includes(u.id)); // slow at scale\n\n// O(n) — one Set lookup is O(1)\nconst blockedSet = new Set(blocked);\nconst filtered2 = users.filter(u => blockedSet.has(u.id)); // fast at scale</code></pre>" +
      "<p><b>Chunking for very large lists:</b> if you must process a huge array on the main thread, break it into chunks with <code>setTimeout</code>/<code>requestIdleCallback</code> between batches, so the UI stays responsive instead of freezing for one long synchronous pass — see \"Event-loop blocking\".</p>" +
      "<p class='ex-gotcha'>Swapping a linear scan for a <code>Set</code>/<code>Map</code> lookup is one of the highest-leverage, lowest-effort performance fixes available — an O(n²) algorithm that's fine on 100 items can become genuinely unusable on 100,000.</p>",

    "Event-loop blocking":
      "<p><b>Simple definition:</b> A long synchronous piece of code freezes everything else — clicks, animations, timers, rendering — until it finishes, because JavaScript runs on a single thread.</p>" +
      "<p><b>Technical definition:</b> The event loop can only move to the next task (a rendered frame, a timer callback, an event handler) once the call stack is empty. A synchronous loop that runs for, say, 2 seconds occupies the stack the whole time, so nothing else — including the browser's own rendering — gets a turn.</p>" +
      "<pre><code>function blockFor(ms) {\n  const end = Date.now() + ms;\n  while (Date.now() < end) {} // the page is frozen for the whole duration\n}\nblockFor(2000); // clicks, scrolling, animations — all frozen for 2s</code></pre>" +
      "<p><b>Mitigations:</b> break the work into chunks and yield control back between them with <code>setTimeout(fn, 0)</code> or <code>requestIdleCallback</code>, or move genuinely CPU-heavy work off the main thread entirely with a Web Worker.</p>" +
      "<pre><code>function processInChunks(items, chunkSize, onDone) {\n  let i = 0;\n  function step() {\n    const end = Math.min(i + chunkSize, items.length);\n    for (; i < end; i++) processItem(items[i]);\n    if (i < items.length) setTimeout(step, 0); // yield, then continue\n    else onDone();\n  }\n  step();\n}</code></pre>" +
      "<p class='ex-gotcha'>Wrapping heavy work in a Promise or <code>async</code> function does <b>not</b> make it non-blocking by itself — <code>async</code> only changes when a function's result is delivered, not whether its own synchronous body still hogs the single thread while running.</p>",

    "Async parallelization":
      "<p><b>Simple definition:</b> Running independent async operations at the same time instead of one after another, so the total wait is the slowest one, not the sum of all of them.</p>" +
      "<p><b>Technical definition:</b> Sequentially <code>await</code>ing several independent promises forces each to fully complete before the next one even starts, adding their durations together. Starting them all first (e.g. via <code>Promise.all</code>) lets them run concurrently, so the total time is roughly bounded by the slowest single one.</p>" +
      "<pre><code>// SEQUENTIAL — ~3 seconds if each call takes ~1s\nconst user = await fetchUser();\nconst posts = await fetchPosts();\nconst comments = await fetchComments();\n\n// PARALLEL — ~1 second, all three run concurrently\nconst [user, posts, comments] = await Promise.all([\n  fetchUser(), fetchPosts(), fetchComments()\n]);</code></pre>" +
      "<p class='ex-gotcha'>The most common version of this performance bug is <code>await</code> inside a <code>for</code> loop over independent items — each iteration silently waits for the last to finish. If the items don't depend on each other, map to an array of promises first, then <code>Promise.all</code> the whole array at once.</p>",

    "Code splitting concept":
      "<p><b>Simple definition:</b> Breaking one big JavaScript bundle into smaller pieces that load only when actually needed, instead of forcing every user to download all the code upfront.</p>" +
      "<p><b>Technical definition:</b> Bundlers (Webpack, Vite, etc.) can split code at points marked by a dynamic <code>import()</code> call, generating separate chunk files. The initial page load only needs the entry chunk; other chunks are fetched on demand — e.g. per-route in a single-page app, or for a rarely-used feature.</p>" +
      "<pre><code>// route-based code splitting in a React app\nconst SettingsPage = React.lazy(() => import('./SettingsPage'));\n// SettingsPage's code isn't downloaded until a user actually navigates there</code></pre>" +
      "<p><b>Why it matters for performance:</b> a smaller initial bundle means less JavaScript to download, parse, and execute before the page becomes interactive — directly improving load-time metrics for the common path, at the cost of a small delay the first time a split-off feature is used.</p>" +
      "<p class='ex-gotcha'>Code splitting depends on <code>import()</code>'s dynamic, on-demand nature (see \"Dynamic imports\" under Modules & runtime) — it's a build-tool feature layered on top of a language feature, not something the JS engine does automatically on its own.</p>",

    "Lazy loading":
      "<p><b>Simple definition:</b> Deferring the loading of something (a module, an image, a component) until it's actually about to be needed, rather than upfront.</p>" +
      "<p><b>Technical definition:</b> Lazy loading applies the same \"defer until needed\" idea across several layers: dynamic <code>import()</code> for JS modules, the native <code>loading=\"lazy\"</code> attribute for images/iframes (deferred until near the viewport), and route-based component splitting in frameworks.</p>" +
      "<pre><code>&lt;img src=\"large-photo.jpg\" loading=\"lazy\" alt=\"\" /&gt;\n&lt;!-- browser defers fetching this until it's about to scroll into view --&gt;\n\nconst Modal = React.lazy(() => import('./Modal'));\n// Modal's code only loads the first time it's actually rendered</code></pre>" +
      "<p><b>Why it matters for performance:</b> not every part of a page or app is used by every visitor on every visit — loading it all eagerly wastes bandwidth and delays the parts that ARE needed immediately.</p>" +
      "<p class='ex-gotcha'>Lazy loading trades a smaller upfront cost for a small delay the first time the deferred thing is actually used — that trade-off is wrong for anything critical to the initial view (e.g. lazy-loading an above-the-fold hero image causes a visible pop-in); reserve it for things genuinely below the fold or rarely used.</p>",
  },

  /* ------------------------------------------------------------------ */
  "JavaScript patterns & engineering": {
    "Separation of concerns":
      "<p><b>Simple definition:</b> Keeping different responsibilities (fetching data, transforming it, displaying it) in different, separately-testable pieces instead of tangled together in one function.</p>" +
      "<p><b>Technical definition:</b> A function or module that does one job is easier to test, reuse, and change without breaking unrelated behavior. Mixing concerns means a change to one responsibility risks breaking the others, and no piece can be reused or tested alone.</p>" +
      "<pre><code>// BEFORE — fetch, transform, and render all tangled together\nasync function showUserCard(id) {\n  const res = await fetch('/api/users/' + id);\n  const data = await res.json();\n  const name = data.name.toUpperCase();\n  document.querySelector('#card').innerHTML = '&lt;h2&gt;' + name + '&lt;/h2&gt;';\n}\n\n// AFTER — each piece is separately testable and reusable\nasync function fetchUser(id) {\n  const res = await fetch('/api/users/' + id);\n  return res.json();\n}\nfunction formatUserName(user) { return user.name.toUpperCase(); }\nfunction renderCard(name) {\n  document.querySelector('#card').innerHTML = '&lt;h2&gt;' + name + '&lt;/h2&gt;';\n}\n\nasync function showUserCard(id) {\n  const user = await fetchUser(id);\n  renderCard(formatUserName(user));\n}</code></pre>" +
      "<p class='ex-gotcha'><code>formatUserName</code> can now be unit-tested with a plain object, no network or DOM required — that's the concrete payoff, not just \"cleaner code\" as an abstract virtue.</p>",

    "Pure functions":
      "<p><b>Simple definition:</b> A function that always gives the same output for the same input, and doesn't change anything outside itself.</p>" +
      "<p><b>Technical definition:</b> A pure function has no side effects (no mutating arguments, no writing to outside variables/DOM/storage) and depends only on its arguments, never on external mutable state.</p>" +
      "<pre><code>// IMPURE — depends on and mutates outside state\nlet total = 0;\nfunction addToTotal(n) { total += n; return total; }\n\n// PURE — same input always gives same output, no outside effects\nfunction add(a, b) { return a + b; }</code></pre>" +
      "<p><b>Why it matters for MERN work:</b> React reducers (<code>(state, action) => newState</code>) are required to be pure — that purity is exactly what lets React safely skip re-rendering when it can prove the output would be identical, and what makes time-travel debugging (replaying past actions) possible at all.</p>" +
      "<p class='ex-gotcha'>A function that looks pure but secretly reads a module-level variable, <code>Date.now()</code>, or <code>Math.random()</code> is not pure — its output silently depends on something other than its parameters, which breaks memoization and predictable testing.</p>",

    "Immutability":
      "<p><b>Simple definition:</b> Instead of changing a value in place, you create a new value with the change applied, leaving the original untouched.</p>" +
      "<p><b>Technical definition:</b> Immutable updates replace mutation (<code>obj.x = 1</code>, <code>arr.push(x)</code>) with the creation of a new object/array (<code>{ ...obj, x: 1 }</code>, <code>[...arr, x]</code>), so the old reference remains a valid, unchanged snapshot.</p>" +
      "<pre><code>// MUTATING — React can't tell this changed (same reference)\nfunction addItem(state, item) {\n  state.items.push(item);\n  return state;\n}\n\n// IMMUTABLE — new reference, change detection works\nfunction addItem(state, item) {\n  return { ...state, items: [...state.items, item] };\n}</code></pre>" +
      "<p><b>Why it matters:</b> React (and similar libraries) detect changes with a fast <code>===</code> reference check, not a deep comparison. Mutating state in place keeps the same reference, so the check reports \"unchanged\" even though the data really did change — the classic \"my component won't re-render\" bug.</p>" +
      "<p class='ex-gotcha'>Immutability isn't a rule to follow everywhere blindly — a purely local variable inside a tight algorithm can often be mutated freely with zero downside. It matters specifically wherever change-detection or predictable history (undo, time-travel debugging) depends on comparing references.</p>",

    "Functional programming concepts":
      "<p><b>Simple definition:</b> A style of writing code around functions that transform data, favoring composition and avoiding shared mutable state, over step-by-step instructions that mutate things as they go.</p>" +
      "<p><b>Technical definition:</b> Core ideas: functions as first-class values (store, pass, return them), higher-order functions (<code>map</code>/<code>filter</code>/<code>reduce</code>), pure functions with no side effects, and declarative code (\"what to compute\") over imperative code (\"the exact steps to mutate state into the answer\").</p>" +
      "<pre><code>// IMPERATIVE — describes HOW, step by step, with mutation\nconst adults = [];\nfor (let i = 0; i < users.length; i++) {\n  if (users[i].age >= 18) adults.push(users[i].name);\n}\n\n// DECLARATIVE / FUNCTIONAL — describes WHAT\nconst adults = users\n  .filter(u => u.age >= 18)\n  .map(u => u.name);</code></pre>" +
      "<p class='ex-gotcha'>JavaScript is not a purely functional language — it's a multi-paradigm language that <em>supports</em> functional patterns. Don't force every piece of code into a functional style; a simple loop is sometimes clearer than a contorted chain of five array methods.</p>",

    "Composition":
      "<p><b>Simple definition:</b> Building complex behavior by combining small, focused functions (or objects) together, rather than one large function or a deep inheritance chain.</p>" +
      "<p><b>Technical definition:</b> Function composition chains single-purpose functions so one's output feeds the next's input, typically implemented with a <code>pipe</code>/<code>compose</code> helper built on <code>reduce</code>. \"Composition over inheritance\" is the same idea applied to objects — assembling behavior from small pieces instead of a rigid parent/child hierarchy.</p>" +
      "<pre><code>const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);\n\nconst trim = s => s.trim();\nconst lower = s => s.toLowerCase();\nconst removeSpaces = s => s.replace(/\\s+/g, '-');\n\nconst slugify = pipe(trim, lower, removeSpaces);\nslugify('  Hello World  '); // 'hello-world'</code></pre>" +
      "<p><b>Real-world MERN example:</b> Express middleware IS composition — each middleware handles one concern (auth, logging, parsing) and calls <code>next()</code> to hand off to the next piece, rather than one giant handler doing everything.</p>" +
      "<p class='ex-gotcha'>Composing too many tiny functions deep can actually hurt readability and make stack traces harder to follow — composition is a tool for clarity, not a goal to maximize; stop composing when the pipeline itself becomes harder to read than the code it replaced.</p>",

    "Factory pattern":
      "<p><b>Simple definition:</b> A function whose whole job is to create and configure objects for you, so callers don't need to know the construction details.</p>" +
      "<p><b>Technical definition:</b> A factory function encapsulates object creation logic — often reading config, applying defaults, or choosing between variants — and returns a ready-to-use object, without requiring <code>new</code> or exposing the object's internal construction.</p>" +
      "<pre><code>function createApiClient(baseUrl, { timeout = 5000, retries = 3 } = {}) {\n  return {\n    get: (path) => fetch(baseUrl + path, { timeout }),\n    // ...\n  };\n}\n\nconst client = createApiClient('https://api.example.com', { retries: 5 });\n// caller never has to know HOW the client is assembled internally</code></pre>" +
      "<p class='ex-gotcha'>Don't reach for a factory just to wrap a trivial object literal with no real setup logic — it earns its place when there's actual configuration, defaulting, or variant-selection work to hide from the caller.</p>",

    "Module pattern":
      "<p><b>Simple definition:</b> Using a function's private scope (a closure) to hide internal details, exposing only a small, deliberate public interface.</p>" +
      "<p><b>Technical definition:</b> The classic module pattern wraps state and helper functions inside an IIFE (or any enclosing function), returning only the object of methods meant to be public — anything not returned is permanently unreachable from outside, exactly like private class fields.</p>" +
      "<pre><code>const Counter = (function () {\n  let count = 0; // truly private — no outside access\n  return {\n    increment() { return ++count; },\n    reset() { count = 0; }\n  };\n})();\n\nCounter.increment(); // 1\nCounter.count;       // undefined — not exposed</code></pre>" +
      "<p class='ex-gotcha'>ES modules have largely superseded this pattern for organizing whole files — a module's top-level variables are private to that file automatically, without needing an IIFE wrapper. The pattern is still genuinely useful <em>inside</em> a file, for privacy at the object/closure level (see \"Encapsulation concepts\" under this, objects &amp; prototypes).</p>",

    "Strategy pattern":
      "<p><b>Simple definition:</b> Instead of one function with a big <code>if</code>/<code>switch</code> chain choosing behavior, you plug in a small, swappable \"strategy\" function that defines the behavior.</p>" +
      "<p><b>Technical definition:</b> The calling code depends only on a common interface (a function with a consistent shape), while the actual behavior is selected and passed in — new strategies can be added without modifying the code that uses them.</p>" +
      "<pre><code>// BEFORE — a growing if/else chain\nfunction validate(type, value) {\n  if (type === 'email') return value.includes('@');\n  if (type === 'phone') return /^\\d{10}$/.test(value);\n  if (type === 'zip') return /^\\d{5}$/.test(value);\n  // every new type means editing this function again\n}\n\n// AFTER — strategies are swappable, independent functions\nconst validators = {\n  email: v => v.includes('@'),\n  phone: v => /^\\d{10}$/.test(v),\n  zip: v => /^\\d{5}$/.test(v),\n};\nfunction validate(type, value) { return validators[type](value); }\n// adding 'creditCard' means adding one entry — validate() never changes</code></pre>" +
      "<p class='ex-gotcha'>This pattern's payoff is specifically <em>avoiding repeated edits</em> to a central function as cases grow — for two or three cases that will never grow, a plain <code>if</code>/<code>switch</code> is simpler and the pattern is overkill.</p>",

    "Observer pattern":
      "<p><b>Simple definition:</b> One or more \"listeners\" subscribe to be notified whenever something happens, without the thing that happens needing to know who's listening.</p>" +
      "<p><b>Technical definition:</b> A subject maintains a list of subscriber callbacks; when a relevant event occurs, it iterates the list and invokes each one, decoupling the event source from whatever reacts to it.</p>" +
      "<pre><code>class EventBus {\n  #listeners = {};\n  on(event, callback) {\n    (this.#listeners[event] ??= []).push(callback);\n  }\n  emit(event, data) {\n    (this.#listeners[event] || []).forEach(cb => cb(data));\n  }\n}\n\nconst bus = new EventBus();\nbus.on('userLoggedIn', user => console.log(user.name + ' logged in'));\nbus.emit('userLoggedIn', { name: 'Ada' }); // 'Ada logged in'</code></pre>" +
      "<p><b>Where you already use this:</b> <code>addEventListener</code> in the DOM, Node's <code>EventEmitter</code>, and (conceptually) how React components re-render when subscribed state changes — all the same subscribe/notify shape.</p>" +
      "<p class='ex-gotcha'>Forgetting to unsubscribe a listener you no longer need is a classic memory leak — the subject keeps a reference to the callback (and anything it closes over) forever, even after the subscriber should have gone away.</p>",

    "Dependency injection concept":
      "<p><b>Simple definition:</b> Instead of a function reaching out and grabbing what it needs itself (importing a database, creating a logger), you hand those dependencies to it as arguments.</p>" +
      "<p><b>Technical definition:</b> Dependency injection inverts control of dependency creation — the function receives its collaborators (a db client, a logger, a fetcher) from the caller, rather than instantiating or importing them internally.</p>" +
      "<pre><code>// WITHOUT injection — hardcoded, hard to test\nconst db = require('./realDatabase');\nfunction getUser(id) { return db.query('SELECT * FROM users WHERE id = ?', id); }\n\n// WITH injection — the dependency is a parameter\nfunction getUser(db, id) { return db.query('SELECT * FROM users WHERE id = ?', id); }\n\n// now trivially testable with a fake:\nconst fakeDb = { query: () => ({ id: 1, name: 'Test User' }) };\ngetUser(fakeDb, 1); // no real database needed for the test</code></pre>" +
      "<p class='ex-gotcha'>This is the real selling point, worth remembering over any abstract definition: <b>dependency injection is what makes code testable</b> without hitting a real database, network, or filesystem — you simply pass in a fake/mock version of the dependency instead.</p>",

    "Defensive programming":
      "<p><b>Simple definition:</b> Validating inputs at the boundaries of your program (user input, API responses, function arguments from elsewhere) so bad data is caught early with a clear error, instead of causing a confusing failure somewhere else entirely.</p>" +
      "<p><b>Technical definition:</b> Fail fast at trust boundaries — check preconditions and throw clear, specific errors immediately when they're violated, rather than letting invalid data silently propagate deeper into the system where the eventual failure is far removed from its true cause.</p>" +
      "<pre><code>function createUser({ email, age }) {\n  if (typeof email !== 'string' || !email.includes('@')) {\n    throw new Error('createUser: a valid email is required');\n  }\n  if (typeof age !== 'number' || age < 0) {\n    throw new Error('createUser: age must be a non-negative number');\n  }\n  // from here on, the rest of the function can safely trust its inputs\n}</code></pre>" +
      "<p><b>The balance that matters:</b> guard the <em>edges</em> — user input, API boundaries, public function arguments — and then trust the interior. Sprinkling null-checks and try/catches around every single internal call, even ones you fully control, doesn't add safety; it just hides real bugs behind swallowed errors and makes the code harder to read.</p>" +
      "<p class='ex-gotcha'>Over-defensive code that catches and silently ignores every possible error is often worse than no defense at all — a bug that fails loudly and immediately at its source is far easier to fix than one that gets silently swallowed three layers deep and resurfaces as a mystery somewhere else.</p>",

    "Error boundaries at application level":
      "<p><b>Simple definition:</b> A single, deliberate place where unexpected errors are caught and handled gracefully, instead of scattering try/catch everywhere or letting one failure crash the whole app.</p>" +
      "<p><b>Technical definition:</b> Different layers of a MERN app have their own boundary mechanism: React <b>error boundaries</b> (a class component implementing <code>componentDidCatch</code>/<code>getDerivedStateFromError</code>) catch rendering errors in their child tree and show a fallback UI instead of a blank white screen; Express uses dedicated <b>error-handling middleware</b> — a function with the signature <code>(err, req, res, next)</code> — to catch errors from route handlers in one place.</p>" +
      "<pre><code>// Express error-handling middleware — note the 4 params, that's what marks it as one\napp.use((err, req, res, next) => {\n  console.error(err);\n  res.status(500).json({ error: 'Something went wrong' });\n});\n\n// every route just throws or calls next(err) — no repeated try/catch per route\napp.get('/users/:id', async (req, res, next) => {\n  try {\n    const user = await db.findUser(req.params.id);\n    res.json(user);\n  } catch (err) {\n    next(err); // forwarded to the boundary above\n  }\n});</code></pre>" +
      "<p class='ex-gotcha'>The whole point is catching at the <b>boundary</b>, not everywhere — one React error boundary around a feature area, one Express error-handling middleware at the end of the chain, rather than a try/catch wrapped around every single component or route individually.</p>",
  },

  /* ------------------------------------------------------------------ */
  "Advanced JavaScript": {
    "Closures in depth":
      "<p><b>Simple definition:</b> A closure is a function that remembers the variables from the scope it was created in, even after that outer scope has finished running.</p>" +
      "<p><b>Technical definition:</b> When a function is created, it keeps a live reference to its enclosing lexical environment, not a snapshot — so it can read and even update those outer variables long after the function that created it has returned.</p>" +
      "<pre><code>function makeCounter() {\n  let count = 0; // private — no way to reach it from outside\n  return () => ++count;\n}\nconst a = makeCounter();\nconst b = makeCounter();\na(); a(); // 1, 2\nb();      // 1 — a completely independent closure, its own 'count'</code></pre>" +
      "<p><b>The classic loop bug:</b></p>" +
      "<pre><code>for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 3, 3, 3\nfor (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 0, 1, 2</code></pre>" +
      "<p><code>var</code> is function-scoped, so all three callbacks close over the exact same single <code>i</code>, whose final value is <code>3</code> by the time any callback runs. <code>let</code> creates a fresh binding for <em>each iteration</em>, so each callback closes over its own separate <code>i</code>.</p>" +
      "<p class='ex-gotcha'>A closure keeps its <em>entire</em> enclosing scope reachable, not just the one variable you use — this is directly why closures can cause memory leaks if they capture something large and are kept alive longer than intended (see \"Memory leaks\").</p>",

    "Lexical environment":
      "<p><b>Simple definition:</b> The internal structure JavaScript uses to keep track of a scope's variables and how to find variables from an outer scope.</p>" +
      "<p><b>Technical definition:</b> A lexical environment holds a record of the variable bindings declared in that scope, plus a reference to the <em>outer</em> lexical environment (its parent). This is not the same as saying \"a function stores its variables inside itself\" — the environment is a separate structure the function's closure points to, and multiple calls to the same function each get their own fresh environment.</p>" +
      "<pre><code>function outer() {\n  const msg = 'hi'; // lives in outer's lexical environment\n  return function inner() {\n    return msg; // inner's environment has NO 'msg' of its own —\n                // it looks outward to outer's environment and finds it there\n  };\n}</code></pre>" +
      "<p><b>Why \"lexical\":</b> which outer environment a function is linked to is determined by <em>where the function is written in the source code</em>, not by how or where it's later called — this is what makes scope resolution predictable and is the direct foundation of closures.</p>" +
      "<p class='ex-gotcha'>Don't confuse this with <code>this</code> — <code>this</code> is resolved dynamically at <b>call time</b> based on how a function is invoked; the lexical environment (and therefore ordinary variable lookup) is fixed at <b>definition time</b> based on where the code was written. That contrast is the single most important thing to remember here.</p>",

    "Execution contexts":
      "<p><b>Simple definition:</b> The environment JavaScript sets up every time a function runs — it holds that call's local variables, its <code>this</code>, and a link to the outer scope.</p>" +
      "<p><b>Technical definition:</b> Each execution context goes through a <b>creation phase</b> (hoisting: variable/function declarations are set up, <code>this</code> is determined) before the <b>execution phase</b> (code actually runs line by line). A new execution context is pushed onto the call stack for every function call, and popped when it returns.</p>" +
      "<pre><code>console.log(a); // undefined, not an error — 'var a' was hoisted in the creation phase\nvar a = 5;\nconsole.log(a); // 5 — now the execution phase has run the assignment</code></pre>" +
      "<p class='ex-gotcha'>\"Hoisting\" isn't magic code-reordering — it's simply that the creation phase sets up (but doesn't yet assign) declarations before the execution phase runs any actual statements, which is why a <code>var</code> exists as <code>undefined</code> before its assignment line, but a <code>let</code>/<code>const</code> exists in an inaccessible \"temporal dead zone\" until its own line runs.</p>",

    "Scope chain":
      "<p><b>Simple definition:</b> When a variable isn't found in the current scope, JavaScript keeps looking outward, one enclosing scope at a time, until it finds it or runs out of scopes.</p>" +
      "<p><b>Technical definition:</b> The scope chain is the sequence of lexical environments — current, then its outer, then its outer's outer, and so on up to the global scope — searched in order to resolve a variable reference. This chain is fixed at the point a function is <em>defined</em>, based on nesting in the source code.</p>" +
      "<pre><code>const x = 'global';\nfunction outer() {\n  const y = 'outer';\n  function inner() {\n    const z = 'inner';\n    console.log(z, y, x); // 'inner' 'outer' 'global' — each found by walking outward\n  }\n  inner();\n}\nouter();</code></pre>" +
      "<p><b>The key contrast with <code>this</code>:</b> the scope chain is resolved <b>lexically</b> — fixed by where a function is <em>written</em> — while <code>this</code> is resolved dynamically, based on how a function is <em>called</em>. A function's scope chain never changes no matter how it's invoked; its <code>this</code> can change on every call.</p>" +
      "<p class='ex-gotcha'>An inner scope can shadow (reuse the same name as) an outer variable — the scope chain search stops at the <em>first</em> match found, so the inner declaration wins and the outer one becomes unreachable from inside that inner scope.</p>",

    "Garbage collection concepts":
      "<p><b>Simple definition:</b> JavaScript automatically frees memory for objects your program can no longer reach — you don't manually free anything yourself.</p>" +
      "<p><b>Technical definition:</b> Modern engines use <b>mark-and-sweep</b>: starting from a set of \"roots\" (global variables, currently-running function scopes), the collector marks every object reachable by following references, then frees everything left unmarked. It is based on <b>reachability</b>, not on counting how many references point to an object.</p>" +
      "<pre><code>let obj = { data: 'large' };\nobj = null; // no more references point to the original object\n// it's now unreachable from any root — eligible for garbage collection</code></pre>" +
      "<p class='ex-gotcha'>A common misconception is that JS uses simple reference counting — it doesn't (or at least, not as the primary strategy). Reference counting alone fails on circular references (two objects only pointing at each other, but unreachable from any root); mark-and-sweep correctly identifies such cycles as garbage since neither is reachable from a root, even though they reference each other.</p>",

    "Memory leaks":
      "<p><b>Simple definition:</b> Memory that's no longer needed but stays \"reachable\" anyway, so the garbage collector can never free it — the program's memory usage quietly grows over time.</p>" +
      "<p><b>Technical definition:</b> A leak happens when a reference chain accidentally keeps an object reachable from a root longer than intended. The object itself isn't broken — the program simply forgot to let go of a reference to it.</p>" +
      "<pre><code>// 1. Forgotten timers — the closure (and anything it captures) lives forever\nsetInterval(() => { /* uses some captured data */ }, 1000); // never cleared\n\n// 2. Listeners never removed — same idea\nel.addEventListener('click', handleClick); // el is removed from the DOM, but\n                                            // the listener reference keeps it \"reachable\"\n\n// 3. An ever-growing cache with no eviction\nconst cache = {};\nfunction store(key, data) { cache[key] = data; } // grows forever, nothing ever removed</code></pre>" +
      "<p class='ex-gotcha'>A \"detached DOM node\" leak is a classic browser-specific case: removing an element from the visible page (<code>el.remove()</code>) does NOT free its memory if JavaScript still holds a reference to it somewhere (a variable, a closure, an event listener) — the node is gone from the page but still fully alive in memory.</p>",

    "WeakMap/WeakSet use cases":
      "<p><b>Simple definition:</b> Like <code>Map</code>/<code>Set</code>, but they hold their object keys/values <b>weakly</b> — meaning that reference alone won't stop the garbage collector from freeing that object.</p>" +
      "<p><b>Technical definition:</b> <code>WeakMap</code> keys (and <code>WeakSet</code> members) must be objects, are held with a \"weak\" reference that doesn't count toward reachability, are not iterable, and have no <code>.size</code> — you can never enumerate what's inside, only check/get/set for a specific object you already have.</p>" +
      "<pre><code>let user = { name: 'Ada' };\nconst metadata = new WeakMap();\nmetadata.set(user, { lastLogin: Date.now() });\n\nuser = null; // no other references to the original object exist now\n// the WeakMap entry (and its value) becomes eligible for garbage collection too —\n// a REGULAR Map would have kept the object alive forever via its strong key reference</code></pre>" +
      "<p><b>Why it is used:</b> attaching extra data to an object (caching, metadata, private state) without preventing that object from ever being garbage collected once the rest of the program is done with it.</p>" +
      "<p class='ex-gotcha'>The lack of iteration/<code>.size</code> isn't a missing feature — it's deliberate. If you could enumerate a <code>WeakMap</code>'s contents, that would require exposing exactly which objects are currently still alive, which is inherently unpredictable and timing-dependent since the GC can run at any point.</p>",

    "Event delegation":
      "<p><b>Simple definition:</b> Instead of attaching a listener to every individual child element, attach one listener to a shared parent and figure out which child was actually clicked.</p>" +
      "<p><b>Technical definition:</b> Because events bubble from the target up through its ancestors, a single listener on a parent can inspect <code>event.target</code> (the actual element clicked) and use <code>.closest(selector)</code> to identify which matching child triggered it — even for children added to the DOM later.</p>" +
      "<pre><code>document.querySelector('#list').addEventListener('click', (event) => {\n  const item = event.target.closest('.list-item');\n  if (!item) return; // click was on the list but not an item\n  console.log('clicked:', item.dataset.id);\n});\n\n// works even for items added AFTER this listener was set up —\n// no need to re-attach a listener to each new item</code></pre>" +
      "<p class='ex-gotcha'>Delegation both reduces memory usage (one listener instead of hundreds) and automatically covers dynamically-added elements — a per-element listener approach requires manually re-attaching every time new elements appear, and easily leaks memory if elements are removed without their listeners being cleaned up.</p>",

    "Debouncing":
      "<p><b>Simple definition:</b> Waits for a pause in rapid-fire events before running — every new call resets the wait, so only the last call in a burst executes.</p>" +
      "<p><b>Technical definition:</b> A debounced wrapper clears any pending timer on each new call and schedules a fresh one, so the wrapped function only runs once activity has genuinely stopped for the configured delay.</p>" +
      "<pre><code>function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\nconst onResize = debounce(() => recalcLayout(), 200);\nwindow.addEventListener('resize', onResize); // recalcLayout runs once, after resizing stops</code></pre>" +
      "<p class='ex-gotcha'>See \"Throttling\" for the direct comparison — debounce can mean the function never fires if activity never pauses, which is fine for a search box but wrong for something needing a steady rate.</p>",

    "Throttling":
      "<p><b>Simple definition:</b> Guarantees a function runs at most once per fixed interval, no matter how often the triggering event fires.</p>" +
      "<p><b>Technical definition:</b> A throttled wrapper runs immediately on the first call, then ignores further calls until the interval has elapsed, after which the next call is allowed through again.</p>" +
      "<pre><code>function throttle(fn, interval) {\n  let ready = true;\n  return (...args) => {\n    if (!ready) return;\n    fn(...args);\n    ready = false;\n    setTimeout(() => { ready = true; }, interval);\n  };\n}\nconst onScroll = throttle(() => updateProgress(), 100); // fires at most every 100ms</code></pre>" +
      "<p class='ex-gotcha'>Debounce vs throttle: debounce waits for <b>silence</b> (search-as-you-type); throttle guarantees a <b>steady maximum rate</b> during continuous activity (scroll, drag, mousemove).</p>",

    "Memoization":
      "<p><b>Simple definition:</b> Caching a function's result by its arguments, so repeated calls with the same input skip the computation entirely.</p>" +
      "<p><b>Technical definition:</b> A memoized wrapper checks a cache (usually a <code>Map</code>) keyed by the arguments before running the real function; on a cache hit it returns instantly, on a miss it computes, stores, then returns.</p>" +
      "<pre><code>function memoize(fn) {\n  const cache = new Map();\n  return (arg) => {\n    if (cache.has(arg)) return cache.get(arg);\n    const result = fn(arg);\n    cache.set(arg, result);\n    return result;\n  };\n}</code></pre>" +
      "<p class='ex-gotcha'>Only safe for <b>pure</b> functions — memoizing a function whose result depends on anything besides its arguments (the time, a mutable global) will happily return stale, wrong cached values.</p>",

    "Lazy evaluation concepts":
      "<p><b>Simple definition:</b> Delaying a computation until its result is actually needed, instead of computing it eagerly upfront — and sometimes never computing it at all if it's never used.</p>" +
      "<p><b>Technical definition:</b> Lazy evaluation defers work behind a thunk (a zero-argument function wrapping the computation) or a generator, which is only invoked/advanced at the point of actual use — this avoids wasted work for values that end up unused, and enables things like infinite sequences that would be impossible to compute eagerly.</p>" +
      "<pre><code>// EAGER — computes immediately, whether it's used or not\nconst value = expensiveComputation();\n\n// LAZY — nothing runs until getValue() is actually called\nconst getValue = () => expensiveComputation();\n\n// generators are lazy by nature — infinite sequence, computed on demand\nfunction* naturals() {\n  let n = 1;\n  while (true) yield n++;\n}\nconst gen = naturals();\ngen.next().value; // 1 — only this one value has been computed so far</code></pre>" +
      "<p class='ex-gotcha'>JavaScript's <code>&amp;&amp;</code> and <code>||</code> already short-circuit lazily — the right-hand side isn't even evaluated if the left side already determines the result, which is why <code>obj &amp;&amp; obj.value</code> safely avoids touching <code>.value</code> when <code>obj</code> is falsy.</p>",

    "Recursion":
      "<p><b>Simple definition:</b> A function that calls itself, breaking a problem into a smaller version of the same problem, until it hits a case simple enough to answer directly.</p>" +
      "<p><b>Technical definition:</b> Every correct recursive function needs a <b>base case</b> (a condition that stops the recursion and returns directly) and a <b>recursive case</b> that makes measurable progress toward that base case with each call.</p>" +
      "<pre><code>function factorial(n) {\n  if (n <= 1) return 1;              // base case\n  return n * factorial(n - 1);        // recursive case, progressing toward n<=1\n}\nfactorial(5); // 120</code></pre>" +
      "<p class='ex-gotcha'>Each recursive call adds a new frame to the call stack — a missing or unreachable base case causes infinite recursion and a <code>\"Maximum call stack size exceeded\"</code> error, not an infinite loop that just runs forever silently.</p>",

    "Tail-call concept":
      "<p><b>Simple definition:</b> A tail call is when a function's very last action is to call another function and immediately return its result, with nothing left to do afterward.</p>" +
      "<p><b>Technical definition:</b> Proper Tail Call Optimization (TCO), part of the ES2015 spec, would let an engine reuse the current stack frame for a tail call instead of pushing a new one — turning tail-recursive functions into effectively constant stack space, avoiding the usual recursion depth limit.</p>" +
      "<pre><code>// tail-recursive form — the recursive call is the LAST thing that happens\nfunction factorial(n, acc = 1) {\n  if (n <= 1) return acc;\n  return factorial(n - 1, n * acc); // tail position — nothing left to do after this returns\n}</code></pre>" +
      "<p class='ex-gotcha'>Be honest about this one in interviews: TCO is in the language <em>spec</em>, but in practice it's effectively only implemented in Safari/JavaScriptCore — V8 (Chrome, Node, Edge) has never shipped it. Writing tail-recursive JavaScript today does NOT reliably protect you from stack overflow on most engines; treat it as a concept worth knowing, not a technique to depend on in production code.</p>",

    "Iterators":
      "<p><b>Simple definition:</b> An object that knows how to produce a sequence of values, one at a time, on request.</p>" +
      "<p><b>Technical definition:</b> The iteration protocol: an object is <b>iterable</b> if it has a <code>[Symbol.iterator]()</code> method returning an <b>iterator</b> — an object with a <code>.next()</code> method that returns <code>{ value, done }</code> each time it's called, until <code>done</code> is <code>true</code>.</p>" +
      "<pre><code>function makeRange(start, end) {\n  let current = start;\n  return {\n    [Symbol.iterator]() {\n      return {\n        next() {\n          if (current < end) return { value: current++, done: false };\n          return { value: undefined, done: true };\n        }\n      };\n    }\n  };\n}\nfor (const n of makeRange(1, 4)) console.log(n); // 1, 2, 3</code></pre>" +
      "<p class='ex-gotcha'>This protocol is exactly what powers <code>for...of</code>, array/string spread, and destructuring — any object implementing <code>[Symbol.iterator]()</code> correctly gets all of that for free, which is why custom data structures can be made to work seamlessly with native JS syntax.</p>",

    "Generators":
      "<p><b>Simple definition:</b> A special kind of function (<code>function*</code>) that can pause itself midway with <code>yield</code> and resume later — the easy way to build an iterator without writing <code>.next()</code> by hand.</p>" +
      "<p><b>Technical definition:</b> Calling a generator function doesn't run its body — it returns a generator object that <em>is</em> an iterator. Each call to <code>.next()</code> runs the body until the next <code>yield</code>, returns that value, and pauses; the next <code>.next()</code> call resumes exactly where it left off.</p>" +
      "<pre><code>function* naturals() {\n  let n = 1;\n  while (true) { // infinite, but safe — nothing runs until .next() is called\n    yield n++;\n  }\n}\nconst gen = naturals();\ngen.next().value; // 1\ngen.next().value; // 2\n\nfor (const n of naturals()) {\n  if (n > 3) break; // 1, 2, 3 — then stop, no infinite loop\n  console.log(n);\n}</code></pre>" +
      "<p class='ex-gotcha'>Generators are <b>lazy</b> — an infinite generator like <code>naturals()</code> never actually loops forever in practice, because each value is only computed the instant it's requested by <code>.next()</code> (or a <code>for...of</code> consuming it, which can <code>break</code> at any point).</p>",
  },

  /* ------------------------------------------------------------------ */
  "Browser JavaScript": {
    "DOM":
      "<p><b>Simple definition:</b> The Document Object Model is the live, in-memory tree of objects the browser builds from your HTML — the thing JavaScript actually reads and modifies to change what's on screen.</p>" +
      "<p><b>Technical definition:</b> The DOM is a tree data structure (one node per element, text, comment, etc.) that the browser exposes through a set of Web APIs — it's not JavaScript-the-language, it's an API the browser provides that JS can call.</p>" +
      "<pre><code>const el = document.querySelector('#title');\nel.textContent = 'Updated!'; // mutates the live DOM node — page updates instantly\nel.classList.add('highlight');</code></pre>" +
      "<p class='ex-gotcha'>The DOM tree is not the same thing as your original HTML source — the browser can and does modify the live tree (via JS, or its own parsing corrections) without ever changing the HTML file itself; \"View Source\" shows the original file, while DevTools' Elements panel shows the current DOM.</p>",

    "Event propagation":
      "<p><b>Simple definition:</b> When you click an element, the click doesn't just fire on that one element — it travels through the DOM tree in a defined order, first down then back up.</p>" +
      "<p><b>Technical definition:</b> An event goes through three phases: <b>capturing</b> (from the root down to the target), the <b>target</b> phase (the element actually clicked), then <b>bubbling</b> (back up from the target to the root). Listeners attach to the bubble phase by default.</p>" +
      "<pre><code>window (capture) ↓\n  document (capture) ↓\n    #parent (capture) ↓\n      #child ← TARGET PHASE (the actual clicked element)\n    #parent (bubble) ↑\n  document (bubble) ↑\nwindow (bubble) ↑</code></pre>" +
      "<pre><code>parent.addEventListener('click', () => console.log('parent (bubble)'));\nparent.addEventListener('click', () => console.log('parent (capture)'), true); // capture phase\nchild.addEventListener('click', () => console.log('child'));\n// clicking child logs: 'parent (capture)', 'child', 'parent (bubble)'</code></pre>" +
      "<p class='ex-gotcha'>Most listeners you write are bubble-phase by default (pass no third argument, or <code>{capture:false}</code>) — the capture phase is rarely used, but understanding it exists explains why <code>addEventListener</code> has that mysterious third boolean parameter.</p>",

    "Capturing":
      "<p><b>Simple definition:</b> The first phase of event propagation — the event travels from the outermost ancestor <em>down</em> toward the actual clicked element, before the normal bubbling most people know happens.</p>" +
      "<p><b>Technical definition:</b> Passing <code>true</code> (or <code>{ capture: true }</code>) as the third argument to <code>addEventListener</code> registers that listener for the capture phase, meaning it runs on the way <em>down</em> the tree, before the target itself or any bubble-phase listener fires.</p>" +
      "<pre><code>document.body.addEventListener(\n  'click',\n  () => console.log('captured at body — before the target even sees it'),\n  true // <- capture phase\n);</code></pre>" +
      "<p><b>When it's actually used:</b> intercepting an event before a child gets a chance to <code>stopPropagation()</code> and prevent it from ever bubbling — capturing runs first, so it can't be blocked by a descendant stopping the bubble phase.</p>" +
      "<p class='ex-gotcha'>It's rare in everyday code, but it's exactly what explains the third argument's existence — if you've only ever seen <code>addEventListener(type, fn)</code>, you've been implicitly using bubble-phase listeners the whole time.</p>",

    "Bubbling":
      "<p><b>Simple definition:</b> After an event reaches its target, it travels back <em>up</em> through every ancestor element, triggering their listeners too — this is the phase most listeners actually run in.</p>" +
      "<p><b>Technical definition:</b> By default (no <code>capture</code> flag), <code>addEventListener</code> registers a listener for the bubble phase — it fires only after the target phase completes, and only if propagation wasn't stopped earlier.</p>" +
      "<pre><code>document.querySelector('#inner').addEventListener('click', () => console.log('inner'));\ndocument.querySelector('#outer').addEventListener('click', () => console.log('outer'));\n// clicking #inner logs 'inner' THEN 'outer' — the click bubbles up to the parent too</code></pre>" +
      "<p><b>Why it matters:</b> bubbling is exactly what makes \"Event delegation\" possible — a single listener on a distant ancestor can react to clicks on any descendant, because the click bubbles all the way up to it.</p>" +
      "<p class='ex-gotcha'>Not every event bubbles — <code>focus</code> and <code>blur</code> famously don't (their delegated equivalents are <code>focusin</code>/<code>focusout</code>, which do bubble). Always check whether the specific event type you're relying on actually bubbles before building delegation around it.</p>",

    "Event delegation":
      "<p><b>Simple definition:</b> Put one listener on a parent instead of one on every child — bubbling carries the event up to the parent, which figures out what was actually clicked.</p>" +
      "<p><b>Technical definition:</b> A single listener on an ancestor inspects <code>event.target</code> (the element actually clicked) and typically calls <code>.closest(selector)</code> on it to find the matching descendant, working correctly even for elements added to the DOM after the listener was attached.</p>" +
      "<pre><code>document.querySelector('#list').addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('clicked item:', item.dataset.id);\n});\n// new .list-item elements added later still work — no new listener needed</code></pre>" +
      "<p class='ex-gotcha'>Delegation only works for events that actually bubble (see \"Bubbling\") — trying to delegate <code>focus</code>/<code>blur</code> directly on a parent silently does nothing; use <code>focusin</code>/<code>focusout</code> instead, which are the bubbling equivalents.</p>",

    "preventDefault":
      "<p><b>Simple definition:</b> Cancels whatever the browser was automatically going to do because of this event — like following a link, or submitting a form.</p>" +
      "<p><b>Technical definition:</b> <code>event.preventDefault()</code> stops the browser's built-in default action for that event, but does <b>not</b> stop the event from continuing to propagate (bubble/capture) to other listeners.</p>" +
      "<pre><code>form.addEventListener('submit', (e) => {\n  e.preventDefault(); // stop the page from reloading\n  submitViaFetch(new FormData(form));\n});\n\nlink.addEventListener('click', (e) => {\n  e.preventDefault(); // stop navigating to the href\n  showModalInstead();\n});</code></pre>" +
      "<p class='ex-gotcha'>See \"stopPropagation\" for the other half of this: these two methods do <b>completely different things</b> and neither implies the other — calling one alone leaves the other behavior fully intact.</p>",

    "stopPropagation":
      "<p><b>Simple definition:</b> Stops an event from continuing to bubble (or capture) any further — ancestor listeners further along the chain never see it.</p>" +
      "<p><b>Technical definition:</b> <code>event.stopPropagation()</code> halts the event's journey through the capture/bubble phases at the current listener, but it does <b>not</b> cancel the browser's default action (a link will still navigate, a form will still submit) unless you also call <code>preventDefault()</code>.</p>" +
      "<pre><code>child.addEventListener('click', (e) => {\n  e.stopPropagation(); // parent's listener below will NOT fire\n  console.log('child handled it');\n});\nparent.addEventListener('click', () => console.log('parent — never runs on a child click'));</code></pre>" +
      "<p class='ex-gotcha'>The confusion table worth memorizing: <code>preventDefault</code> cancels the browser's default action but the event STILL propagates; <code>stopPropagation</code> stops propagation but the default action STILL happens. They're independent — use both together if you genuinely need neither effect.</p>",

    "Browser storage":
      "<p><b>Simple definition:</b> The umbrella term for the browser's built-in ways to persist data on the user's machine — <code>localStorage</code>, <code>sessionStorage</code>, and cookies being the main three.</p>" +
      "<p><b>Technical definition:</b> Each mechanism trades off capacity, lifetime, and visibility differently — choosing between them is a real, common interview question, not just trivia.</p>" +
      "<table><tr><th>Mechanism</th><th>Capacity</th><th>Lifetime</th><th>Sent to server?</th></tr><tr><td>localStorage</td><td>~5-10MB</td><td>until explicitly cleared</td><td>never</td></tr><tr><td>sessionStorage</td><td>~5-10MB</td><td>until the tab closes</td><td>never</td></tr><tr><td>Cookies</td><td>~4KB</td><td>configurable expiry</td><td>with EVERY matching request</td></tr></table>" +
      "<p class='ex-gotcha'>All of them are per-<b>origin</b> (scheme + host + port) — data stored by <code>https://a.com</code> is invisible to <code>https://b.com</code>, and even <code>https://a.com</code> and <code>http://a.com</code> count as different origins entirely.</p>",

    "localStorage":
      "<p><b>Simple definition:</b> Key-value storage in the browser that survives closing the tab, the browser, even restarting the computer — until something explicitly clears it.</p>" +
      "<p><b>Technical definition:</b> <code>localStorage</code> is synchronous, string-only (non-strings are coerced via <code>.toString()</code>, so objects need <code>JSON.stringify</code>/<code>JSON.parse</code>), roughly 5-10MB per origin, and persists indefinitely until cleared by code, the user, or browser settings.</p>" +
      "<pre><code>localStorage.setItem('theme', 'dark');\nlocalStorage.getItem('theme');   // 'dark'\n\nlocalStorage.setItem('user', JSON.stringify({ name: 'Ada' }));\nconst user = JSON.parse(localStorage.getItem('user'));\n\nlocalStorage.removeItem('theme');\nlocalStorage.clear(); // wipes everything for this origin</code></pre>" +
      "<p class='ex-gotcha'><code>localStorage.getItem('missingKey')</code> returns <code>null</code>, not <code>undefined</code> — and calling <code>JSON.parse(null)</code> actually returns <code>null</code> too (it doesn't throw), which can mask a missing-key bug if you're not careful checking for it.</p>",

    "sessionStorage":
      "<p><b>Simple definition:</b> Same API as <code>localStorage</code>, but the data disappears the moment that specific browser tab is closed.</p>" +
      "<p><b>Technical definition:</b> <code>sessionStorage</code> shares <code>localStorage</code>'s API exactly (<code>setItem</code>/<code>getItem</code>/<code>removeItem</code>/<code>clear</code>), but its lifetime is scoped to a single tab/window session, and it is <b>not shared between tabs</b> even if they're on the same origin.</p>" +
      "<pre><code>sessionStorage.setItem('formDraft', JSON.stringify({ title: 'Draft...' }));\n// survives a page refresh in THIS tab, but is gone if the tab is closed,\n// and a second tab on the same site won't see it at all</code></pre>" +
      "<p class='ex-gotcha'>\"Same origin, different tab\" is the trap: unlike <code>localStorage</code> (shared across every tab on the same origin), each tab gets its own completely separate <code>sessionStorage</code> — even duplicating a tab starts a fresh copy of the data, not a live shared one.</p>",

    "Cookies":
      "<p><b>Simple definition:</b> Small pieces of data stored by the browser that get automatically attached to every matching HTTP request — the original way the web tracked sessions before <code>localStorage</code> existed.</p>" +
      "<p><b>Technical definition:</b> Cookies are limited to ~4KB, can carry an expiry, and support flags like <code>HttpOnly</code> (inaccessible to JS, mitigating XSS theft), <code>Secure</code> (HTTPS only), and <code>SameSite</code> (controls cross-site sending, mitigating CSRF).</p>" +
      "<pre><code>document.cookie = 'theme=dark; max-age=3600; path=/';\nconsole.log(document.cookie); // 'theme=dark' (plus any other readable cookies)\n// an HttpOnly cookie set by the SERVER is invisible to document.cookie entirely</code></pre>" +
      "<p class='ex-gotcha'>This is the key difference from <code>localStorage</code>/<code>sessionStorage</code>, worth stating explicitly: cookies are sent with <b>every</b> matching HTTP request automatically, adding overhead to every call — <code>localStorage</code> and <code>sessionStorage</code> are never sent to the server at all unless your code explicitly reads and includes them.</p>",

    "Fetch API":
      "<p><b>Simple definition:</b> The modern, promise-based way to make HTTP requests from the browser (or Node), replacing the older <code>XMLHttpRequest</code>.</p>" +
      "<p><b>Technical definition:</b> <code>fetch(url, options)</code> returns a promise that resolves to a <code>Response</code> object once headers arrive — reading the body (<code>.json()</code>, <code>.text()</code>) is a <em>separate</em> step that itself returns another promise.</p>" +
      "<pre><code>const res = await fetch('/api/users/1');\nconst data = await res.json(); // .json() itself returns a PROMISE, not the data directly\n\nawait fetch('/api/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'Ada' })\n});</code></pre>" +
      "<p class='ex-gotcha'><b>The single most important gotcha in this whole topic:</b> <code>fetch</code> does <b>NOT</b> reject on an HTTP error status — a 404 or 500 response still resolves normally. It only rejects on a genuine network failure (DNS failure, no connection, CORS block). You must always check <code>response.ok</code> (or <code>response.status</code>) yourself:</p>" +
      "<pre><code>const res = await fetch('/api/users/999');\nif (!res.ok) throw new Error('HTTP ' + res.status); // fetch alone won't do this for you</code></pre>",

    "AbortController":
      "<p><b>Simple definition:</b> The standard way to cancel an in-flight <code>fetch</code> (or other cancellable async operation).</p>" +
      "<p><b>Technical definition:</b> Creating an <code>AbortController</code> gives you a <code>.signal</code> to pass into <code>fetch</code>'s options, and an <code>.abort()</code> method that, when called, makes that fetch's promise reject with an <code>AbortError</code>.</p>" +
      "<pre><code>const controller = new AbortController();\nfetch('/search?q=abc', { signal: controller.signal })\n  .then(res => res.json())\n  .catch(err => {\n    if (err.name === 'AbortError') console.log('request cancelled');\n  });\n\n// e.g. cancel the previous search request when the user types a new query\ncontroller.abort();</code></pre>" +
      "<p class='ex-gotcha'>A very common real use in a search box: cancel the <em>previous</em> in-flight request every time a new keystroke fires a new one — otherwise a slow, stale response can arrive AFTER a faster, newer one and incorrectly overwrite the results the user actually wants to see.</p>",

    "Web APIs":
      "<p><b>Simple definition:</b> The features you use constantly in browser JS — <code>fetch</code>, <code>setTimeout</code>, the DOM, <code>localStorage</code> — are not part of the JavaScript language itself; they're provided by the browser.</p>" +
      "<p><b>Technical definition:</b> The JS engine (e.g. V8) implements only the ECMAScript language spec — values, functions, closures, promise mechanics. Everything else (DOM manipulation, timers, network requests, storage) is supplied by the host environment as Web APIs, which is also why Node.js has some different globals (no <code>window</code>/<code>document</code>, but has <code>process</code>, different timer/file APIs).</p>" +
      "<pre><code>// none of these are 'JavaScript the language' — they're browser-provided APIs:\nfetch('/api');\nsetTimeout(fn, 1000);\ndocument.querySelector('#el');\nlocalStorage.getItem('x');</code></pre>" +
      "<p class='ex-gotcha'>This is directly connected to the event loop: it's the Web APIs (not the JS engine) that do the actual waiting for a timer or network request, then hand a callback back to the queue — see \"Web APIs/runtime APIs\" under Event loop for the full mechanism.</p>",

    "CORS concept":
      "<p><b>Simple definition:</b> A browser security rule that blocks a web page from freely reading responses from a different origin, unless that other server explicitly says it's okay.</p>" +
      "<p><b>Technical definition:</b> Cross-Origin Resource Sharing is enforced entirely by the <b>browser</b>, not the requesting JavaScript code. The server opts in by returning an <code>Access-Control-Allow-Origin</code> header; for many request types the browser first sends an automatic <code>OPTIONS</code> \"preflight\" request to check permission before sending the real one.</p>" +
      "<pre><code>// server response header that allows a specific origin:\nAccess-Control-Allow-Origin: https://myapp.com\n\n// without a matching header, the browser blocks the JS from reading the\n// response — even though the request itself often still reaches the server</code></pre>" +
      "<p class='ex-gotcha'>CORS protects the <b>user</b>, not the server, and it cannot be \"fixed\" from client-side JavaScript at all — no header, config, or trick in your frontend code can bypass it; the target server must explicitly grant permission via its own response headers.</p>",

    "Browser rendering concept":
      "<p><b>Simple definition:</b> The pipeline the browser runs to turn your HTML/CSS/JS into actual pixels on screen — and understanding it explains why some DOM changes are much more expensive than others.</p>" +
      "<p><b>Technical definition:</b> Roughly: parse HTML into the <b>DOM</b>, parse CSS into the <b>CSSOM</b>, combine them into a <b>render tree</b>, compute <b>layout</b> (a.k.a. reflow — the size/position of everything), then <b>paint</b> pixels, then <b>composite</b> layers together.</p>" +
      "<pre><code>HTML → DOM ─┐\n            ├─→ Render Tree → Layout (reflow) → Paint → Composite\nCSS  → CSSOM ┘</code></pre>" +
      "<p><b>Reflow vs repaint:</b> changing something that affects layout (size, position, adding/removing elements) triggers an expensive <b>reflow</b> (recalculating positions) followed by a repaint. Changing only visual properties that don't affect layout (color, <code>opacity</code>, <code>transform</code>) triggers just a cheaper <b>repaint</b>/composite, skipping layout entirely.</p>" +
      "<p class='ex-gotcha'><b>Layout thrashing:</b> repeatedly reading a layout property (like <code>offsetHeight</code>) and then writing a style change, in a tight loop, forces the browser to recalculate layout synchronously on every single iteration instead of batching the work — a well-known real-world performance bug. Fix by batching all your reads first, then all your writes.</p>",
  },

  /* ------------------------------------------------------------------ */
  "ES6+ language features": {
    "Template literals":
      "<p><b>Simple definition:</b> Backtick-quoted strings that let you interpolate variables directly and span multiple lines without special escape characters.</p>" +
      "<p><b>What ES6 added:</b> before this, building a string with variables meant painful concatenation (<code>'Hi, ' + name + '!'</code>); template literals let you write <code>`Hi, ${name}!`</code> directly, and backticked strings can span multiple lines as-is.</p>" +
      "<pre><code>const name = 'Ada';\nconst greeting = `Hello, ${name}! You are ${2024 - 1815} years old.`;\n\nconst multi = `line one\nline two`; // real newline, no \\n needed</code></pre>" +
      "<p class='ex-gotcha'>Tagged templates (<code>tag\\`text ${value}\\`</code>) let a function intercept and process the literal's pieces before the final string is built — this is how libraries like <code>styled-components</code> parse CSS written inside a template literal.</p>",

    "Destructuring":
      "<p><b>Simple definition:</b> ES6's syntax for pulling values out of arrays (by position) or objects (by name) directly into variables.</p>" +
      "<p><b>What ES6 added:</b> a concise, built-in replacement for writing individual <code>const x = obj.x;</code> or <code>const first = arr[0];</code> lines one at a time.</p>" +
      "<pre><code>const [a, b] = [1, 2];             // array — by position\nconst { name, age } = user;        // object — by name</code></pre>" +
      "<p class='ex-gotcha'>For the full depth of object destructuring (nesting, renaming, defaults), see \"Destructuring\" under this, objects &amp; prototypes — here it's about recognizing it as one of ES6's headline syntax additions.</p>",

    "Spread syntax":
      "<p><b>Simple definition:</b> The <code>...</code> operator that expands an array or object into its individual elements/properties.</p>" +
      "<p><b>What ES6 added (ES2018 for objects):</b> a concise way to copy, merge, or pass array/object contents without <code>concat</code>, <code>Object.assign</code>, or <code>apply</code>.</p>" +
      "<pre><code>[...[1,2], ...[3,4]];   // [1,2,3,4]\n{ ...user, age: 30 };   // shallow-copy + override</code></pre>" +
      "<p class='ex-gotcha'>See \"Spread with arrays\" / \"Object spread\" elsewhere in this app for the shallow-copy caveat — the important thing here is recognizing <code>...</code> as one syntax with two related but distinct uses (arrays vs objects, expand vs collect).</p>",

    "Rest parameters":
      "<p><b>Simple definition:</b> The same <code>...</code> syntax, but used in a parameter list to <em>collect</em> the remaining arguments into a real array.</p>" +
      "<p><b>What ES6 added:</b> a real-array replacement for the old, awkward <code>arguments</code> object (which isn't a true array and doesn't exist at all in arrow functions).</p>" +
      "<pre><code>function sum(...nums) { return nums.reduce((a,b) => a+b, 0); }\nsum(1, 2, 3); // 6 — 'nums' is a genuine array</code></pre>" +
      "<p class='ex-gotcha'>Rest <em>collects</em> (in a parameter list); spread <em>expands</em> (in a call or literal) — same three dots, opposite direction, and it's easy to mix the two names up under pressure.</p>",

    "Default parameters":
      "<p><b>Simple definition:</b> A fallback value a parameter takes when its argument is missing or explicitly <code>undefined</code>.</p>" +
      "<p><b>What ES6 added:</b> before this, defaults required a manual check inside the function body (<code>b = b || 2;</code>) — with its own bug, since that also overrides a deliberately passed <code>0</code>.</p>" +
      "<pre><code>function multiply(a, b = 2) { return a * b; }\nmultiply(5);       // 10\nmultiply(5, null); // 0 — default only triggers on undefined, NOT null</code></pre>" +
      "<p class='ex-gotcha'>The old <code>b || 2</code> pattern breaks on any falsy argument (<code>0</code>, <code>''</code>); ES6 default parameters correctly trigger only on <code>undefined</code>, which is the whole reason this feature exists as language syntax rather than a userland idiom.</p>",

    "Arrow functions":
      "<p><b>Simple definition:</b> Shorter function syntax that also, distinctively, has no <code>this</code> of its own — it inherits <code>this</code> lexically from its surrounding scope.</p>" +
      "<p><b>What ES6 added:</b> concise syntax AND solved the classic \"lost <code>this</code> in a callback\" problem that previously required <code>.bind(this)</code> or <code>const self = this;</code> workarounds.</p>" +
      "<pre><code>const double = n => n * 2;\n\nconst timer = {\n  label: 'x',\n  start() { setTimeout(() => console.log(this.label), 100); } // inherits start()'s this\n};</code></pre>" +
      "<p class='ex-gotcha'>For the full depth on <code>this</code> inheritance and when NOT to use an arrow (never as an object method), see \"this in arrow functions\" under this, objects &amp; prototypes — the point here is recognizing arrow functions as the ES6 feature that fixed this long-standing pain point.</p>",

    "Enhanced object literals":
      "<p><b>Simple definition:</b> ES6 shorthand for writing object literals — method shorthand, property shorthand, and computed keys, all without the old boilerplate.</p>" +
      "<p><b>Technical definition:</b> Before ES6: <code>{ name: name, greet: function() {...} }</code>. After: property shorthand when the variable name matches the key, method shorthand dropping <code>function</code>, and <code>[expr]:</code> for computed keys — all in one literal.</p>" +
      "<pre><code>const name = 'Ada';\nconst key = 'role';\n\nconst user = {\n  name,                    // shorthand for name: name\n  greet() { return 'hi'; }, // shorthand for greet: function(){...}\n  [key]: 'admin'            // computed key\n};</code></pre>" +
      "<p class='ex-gotcha'>Method shorthand (<code>greet() {}</code>) creates a regular function, not an arrow — it still gets its own <code>this</code>, bound normally by how it's called. Don't assume shorthand syntax changes <code>this</code> behavior; it doesn't.</p>",

    "Computed property names":
      "<p><b>Simple definition:</b> Using <code>[expression]</code> as an object literal's key, so the key itself can be a variable or any computed value.</p>" +
      "<p><b>What ES6 added:</b> before this, a dynamic key required creating the object first, then assigning the property in a separate step (<code>const obj = {}; obj[key] = value;</code>).</p>" +
      "<pre><code>const field = 'status';\nconst obj = { [field]: 'active' }; // { status: 'active' } — built inline</code></pre>" +
      "<p class='ex-gotcha'>Keys are always coerced to strings (or left as symbols) — <code>{ [{}]: 'x' }</code> silently becomes the key <code>'[object Object]'</code>, which is rarely what's intended; use a <code>Map</code> if you genuinely need object keys.</p>",

    "Modules":
      "<p><b>Simple definition:</b> ES6's native way to split code across files, with <code>import</code>/<code>export</code>, replacing older non-standard patterns (global script tags, CommonJS in the browser via bundlers, AMD).</p>" +
      "<p><b>Technical definition:</b> Each ES module has its own scope (nothing leaks to global by accident), is statically analyzed at parse time, and its imports are hoisted and resolved before the module's own code runs — see \"ES Modules\" under Modules &amp; runtime for the full CJS-vs-ESM comparison.</p>" +
      "<pre><code>// math.js\nexport function add(a, b) { return a + b; }\n\n// app.js\nimport { add } from './math.js';</code></pre>" +
      "<p class='ex-gotcha'>In the browser, a script must be explicitly marked as a module (<code>&lt;script type=\"module\"&gt;</code>) to use <code>import</code>/<code>export</code> at all — plain scripts don't get this syntax, and modules also run in strict mode automatically and defer execution until the DOM is parsed.</p>",

    "import":
      "<p><b>Simple definition:</b> The ES6 keyword for pulling named or default values out of another module.</p>" +
      "<pre><code>import { add, subtract } from './math.js'; // named\nimport Calculator from './calc.js';        // default\nimport * as math from './math.js';         // namespace object — everything</code></pre>" +
      "<p class='ex-gotcha'>Static <code>import</code> must sit at the top level of a file — never inside an <code>if</code> or a function — because it's resolved before any code runs; use the separate <code>import()</code> function form (see \"Dynamic imports\") for conditional, runtime-decided loading.</p>",

    "export":
      "<p><b>Simple definition:</b> The ES6 keyword that marks a value as available for other modules to import.</p>" +
      "<pre><code>export const PI = 3.14;               // named export, attached to a declaration\nexport { add, subtract };              // named exports, listed separately\nexport default class Calculator {}     // the module's one default export</code></pre>" +
      "<p class='ex-gotcha'>A module can have unlimited named exports but at most one default — see \"Named exports\" / \"Default exports\" for the practical difference in how each is imported.</p>",

    "Named exports":
      "<p><b>Simple definition:</b> Exports referred to by their exact name — a module can have as many as it wants, and importers must use (or explicitly rename) that same name.</p>" +
      "<pre><code>// utils.js\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n\n// app.js\nimport { add, subtract as minus } from './utils.js'; // rename with 'as'</code></pre>" +
      "<p class='ex-gotcha'>Named imports must be wrapped in <code>{ }</code> and must match an actual exported name — <code>import add from './utils.js'</code> (no braces) is trying to import a <em>default</em> export that doesn't exist here, and silently gives <code>undefined</code> rather than an error in some setups.</p>",

    "Default exports":
      "<p><b>Simple definition:</b> A module's single \"main\" export, imported without needing curly braces and importable under any name the importer chooses.</p>" +
      "<pre><code>// Calculator.js\nexport default class Calculator { /* ... */ }\n\n// app.js — the imported name doesn't have to match anything\nimport Calc from './Calculator.js';\nimport MyCalculator from './Calculator.js'; // also valid, same module</code></pre>" +
      "<p class='ex-gotcha'>Because a default import's local name is entirely up to the importer, typos are never caught — <code>import Calclator from './Calculator.js'</code> (misspelled) works fine syntactically, unlike a named import typo, which fails immediately since it must match the real exported name.</p>",

    "Optional chaining":
      "<p><b>Simple definition:</b> <code>?.</code> safely reads a nested property, returning <code>undefined</code> instead of throwing if something along the way is <code>null</code>/<code>undefined</code>.</p>" +
      "<p><b>What it replaced:</b> long, repetitive guard chains like <code>user &amp;&amp; user.profile &amp;&amp; user.profile.city</code>.</p>" +
      "<pre><code>user.profile?.city;   // undefined instead of a TypeError, if profile is missing\nuser.getName?.();     // safe optional call\nuser.tags?.[0];        // safe optional index</code></pre>" +
      "<p class='ex-gotcha'>It only guards against <code>null</code>/<code>undefined</code> — it won't protect you from other genuine errors deeper in an expression, and it can't be used on the left side of an assignment.</p>",

    "Nullish coalescing":
      "<p><b>Simple definition:</b> <code>??</code> provides a fallback, but only when the left side is <code>null</code> or <code>undefined</code> — unlike <code>||</code>, it doesn't treat <code>0</code>, <code>''</code>, or <code>false</code> as \"missing\".</p>" +
      "<pre><code>const count = 0;\ncount || 10;  // 10 — bug: 0 is falsy, treated as missing\ncount ?? 10;  // 0  — correct: 0 is a real, valid value</code></pre>" +
      "<p class='ex-gotcha'>You cannot mix <code>??</code> directly with <code>||</code> or <code>&amp;&amp;</code> without parentheses — <code>a || b ?? c</code> is a <code>SyntaxError</code>, forcing you to make the intended precedence explicit.</p>",

    "Logical assignment operators":
      "<p><b>Simple definition:</b> <code>||=</code>, <code>&amp;&amp;=</code>, and <code>??=</code> combine a logical check with an assignment, only assigning when the check passes.</p>" +
      "<p><b>Technical definition:</b> <code>a ||= b</code> assigns <code>b</code> to <code>a</code> only if <code>a</code> is currently falsy; <code>a &amp;&amp;= b</code> assigns only if <code>a</code> is truthy; <code>a ??= b</code> assigns only if <code>a</code> is <code>null</code>/<code>undefined</code>. Crucially, all three <b>short-circuit</b> — if the condition fails, the right-hand side isn't even evaluated, and no assignment happens at all.</p>" +
      "<pre><code>let config = { retries: 0 };\nconfig.retries ||= 3; // 3 — 0 is falsy, so it WAS reassigned (probably not intended!)\n\nlet config2 = { retries: 0 };\nconfig2.retries ??= 3; // 0 — stays 0, since 0 is not null/undefined (correct)</code></pre>" +
      "<p class='ex-gotcha'>The short-circuiting matters for more than performance — if the right-hand side is a setter with side effects (or an expensive call), <code>??=</code> guarantees that code never runs at all when the left side is already non-nullish, unlike writing out <code>a = a ?? expensiveCall()</code> naively without checking it's actually equivalent.</p>",

    "for...of":
      "<p><b>Simple definition:</b> A loop that iterates over the <b>values</b> of any iterable — arrays, strings, Maps, Sets, and any custom object implementing the iterator protocol.</p>" +
      "<pre><code>for (const value of [10, 20, 30]) console.log(value); // 10, 20, 30 — values\nfor (const char of 'hi') console.log(char);            // 'h', 'i'</code></pre>" +
      "<p><b>The essential contrast — <code>for...of</code> vs <code>for...in</code>:</b> <code>for...of</code> gives you <b>values</b> from an <em>iterable</em>. <code>for...in</code> gives you enumerable <b>keys</b> (as strings) from any object, including inherited ones, and should basically never be used on arrays.</p>" +
      "<pre><code>const arr = [10, 20, 30];\nfor (const x of arr) console.log(x);      // 10, 20, 30 — the values\nfor (const i in arr) console.log(typeof i, i); // 'string' '0', 'string' '1', 'string' '2' — STRING indices!</code></pre>" +
      "<p class='ex-gotcha'>Using <code>for...in</code> on an array gives you string indices, not numbers — and it will also pick up any enumerable properties added to <code>Array.prototype</code> by other code. Use <code>for...of</code> (values) or <code>.forEach</code>/<code>.entries()</code> (index+value) for arrays instead.</p>",

    "Symbols":
      "<p><b>Simple definition:</b> A primitive type whose every value is guaranteed unique — used mainly as \"invisible\", collision-proof object keys.</p>" +
      "<p><b>Technical definition:</b> <code>Symbol('description')</code> creates a value that is never <code>===</code> to any other symbol, even one with the identical description. Symbol-keyed properties are skipped by <code>Object.keys</code>, <code>for...in</code>, and <code>JSON.stringify</code> — they only show up via <code>Object.getOwnPropertySymbols</code>.</p>" +
      "<pre><code>const id = Symbol('id');\nconst user = { name: 'Ada', [id]: 123 };\nObject.keys(user);       // ['name'] — the symbol key is invisible here\nJSON.stringify(user);    // '{\"name\":\"Ada\"}' — symbol silently dropped\n\nSymbol('x') === Symbol('x'); // false — always unique, even with the same description</code></pre>" +
      "<p class='ex-gotcha'><code>Symbol.iterator</code> is a \"well-known symbol\" built into the language — it's the exact key JavaScript looks for to decide whether something is iterable, which is what makes <code>for...of</code>, spread, and destructuring work on arrays, strings, Maps, and Sets (see \"Iterators\").</p>",

    "Iterators":
      "<p><b>Simple definition:</b> An object with a <code>.next()</code> method that hands out one value at a time, marking when it's done.</p>" +
      "<p><b>Technical definition:</b> An object is <b>iterable</b> if it has a <code>[Symbol.iterator]()</code> method returning an <b>iterator</b> — an object whose <code>.next()</code> returns <code>{ value, done }</code> each call, until <code>done</code> is <code>true</code>. This shared protocol is what <code>for...of</code>, spread, and destructuring all rely on.</p>" +
      "<pre><code>const arr = [10, 20];\nconst it = arr[Symbol.iterator]();\nit.next(); // { value: 10, done: false }\nit.next(); // { value: 20, done: false }\nit.next(); // { value: undefined, done: true }</code></pre>" +
      "<p class='ex-gotcha'>Implementing <code>[Symbol.iterator]()</code> on your own custom object automatically makes it work with <code>for...of</code>, spread, and destructuring — you get native-feeling syntax support for free, without those features knowing anything specifically about your object's structure.</p>",

    "Generators":
      "<p><b>Simple definition:</b> A <code>function*</code> that can pause with <code>yield</code> and resume later — the easy way to build an iterator without hand-writing a <code>.next()</code> method.</p>" +
      "<p><b>Technical definition:</b> Calling a generator function returns a generator object (which is itself an iterator) without running the body. Each <code>.next()</code> call runs until the next <code>yield</code>, returns that value, and pauses exactly there until the next <code>.next()</code> call.</p>" +
      "<pre><code>function* range(start, end) {\n  for (let i = start; i < end; i++) yield i;\n}\nfor (const n of range(1, 4)) console.log(n); // 1, 2, 3\n\nfunction* naturals() { let n = 1; while (true) yield n++; } // infinite, but LAZY —\n// nothing runs until .next() is actually called, so this is perfectly safe to define</code></pre>" +
      "<p class='ex-gotcha'>Generators are lazy by nature — this is precisely what makes an \"infinite\" generator safe to write: each value is computed only the instant it's requested, never all at once upfront.</p>",

    "Map":
      "<p><b>Simple definition:</b> A key-value collection like an object, but with real advantages: any type can be a key, insertion order is preserved, and it has a built-in <code>.size</code>.</p>" +
      "<p><b>Map vs Object — the real comparison:</b> object keys are always coerced to strings/symbols; a <code>Map</code> key can be <em>anything</em> — including an object or a function. Objects don't guarantee iteration order in every edge case; a <code>Map</code> always iterates in insertion order. Checking size means <code>Object.keys(obj).length</code> for an object, versus a direct <code>.size</code> property on a <code>Map</code>.</p>" +
      "<pre><code>const objKey = { role: 'admin' };\nconst m = new Map();\nm.set(objKey, 'has extra permissions');\nm.set('plain string key', 'ok');\n\nm.get(objKey); // 'has extra permissions' — the OBJECT itself is the key\nm.size;         // 2\n\nfor (const [key, value] of m) console.log(key, value); // directly iterable</code></pre>" +
      "<p class='ex-gotcha'>An object literal cannot use another object as a genuinely distinct key — <code>{ [objKey]: 'x' }</code> coerces <code>objKey</code> to the useless string <code>'[object Object]'</code>. This is exactly the case a <code>Map</code> was designed to solve.</p>",

    "Set":
      "<p><b>Simple definition:</b> A collection that only ever holds unique values — adding a duplicate is silently a no-op.</p>" +
      "<pre><code>const nums = new Set([1, 2, 2, 3]);\nnums.size;        // 3 — the duplicate 2 was never actually added\nnums.has(2);       // true\nnums.add(2);       // no-op, already present\n\nconst unique = [...new Set([1, 2, 2, 3])]; // [1, 2, 3] — the standard dedupe idiom</code></pre>" +
      "<p class='ex-gotcha'><code>Set</code> uses <code>===</code>-like equality (technically \"SameValueZero\"), so two structurally-identical but separately-created objects are still treated as different members — <code>new Set([{}, {}]).size</code> is <code>2</code>, not <code>1</code>, because they're different references.</p>",

    "WeakMap":
      "<p><b>Simple definition:</b> Like <code>Map</code>, but its keys must be objects and are held <b>weakly</b> — that reference alone doesn't stop garbage collection.</p>" +
      "<p><b>Technical definition:</b> <code>WeakMap</code> keys must be objects (never primitives), aren't iterable, and have no <code>.size</code> — you can only interact with a specific object you already have a reference to.</p>" +
      "<pre><code>let user = { name: 'Ada' };\nconst metadata = new WeakMap();\nmetadata.set(user, { lastSeen: Date.now() });\n\nuser = null; // no other references — the WeakMap entry can now be garbage collected too</code></pre>" +
      "<p class='ex-gotcha'>The missing iteration/<code>.size</code> is deliberate, not a limitation to work around — see \"WeakMap/WeakSet use cases\" under Advanced JavaScript for why exposing that would be inherently unpredictable given when GC actually runs.</p>",

    "WeakSet":
      "<p><b>Simple definition:</b> Like <code>Set</code>, but its members must be objects, held weakly — not iterable, no <code>.size</code>.</p>" +
      "<p><b>Why it is used:</b> tracking \"has this specific object been seen/processed?\" without preventing that object from being garbage collected once nothing else references it.</p>" +
      "<pre><code>const processed = new WeakSet();\nfunction process(obj) {\n  if (processed.has(obj)) return; // already handled\n  processed.add(obj);\n  // ... do the real work\n}</code></pre>" +
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
