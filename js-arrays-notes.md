# JavaScript Arrays — Complete Reference Notes

Study each section in order. Read the concept, the example, and the "Gotcha" line.
Coding practice comes separately in chat — this file is your reference only.

## 00. Why arrays matter

An array is an ordered, numbered list of values.

- Simple definition: An array is a container that holds many values in a fixed order, each reachable by a position number (index).
- Technical definition: In JavaScript, an array is a special kind of object whose keys are numeric indices (`"0"`, `"1"`, `"2"`, ...) plus a `length` property that updates automatically.
- Why it is used: Grouping related values (a list of users, scores, cart items) so you can loop over them, transform them, and search them with a shared set of tools.
- When to use it: Use an array whenever data is a *list* — order matters, and items are usually the same "shape" (all numbers, all users, all strings).
- When not to use it: If you're storing named fields that describe one thing (`name`, `age`, `email`), that's an object, not an array. Don't force object-shaped data into array form just to use array methods.

### How array methods run internally

Most array methods you'll use daily (`map`, `filter`, `find`, `forEach`, `reduce`, `some`, `every`) work the same way under the hood:

1. JavaScript walks the array from index `0` to `length - 1`.
2. For each element, it calls the callback function you passed, with `(element, index, array)`.
3. It collects or checks the callback's return value, depending on the method.
4. It returns a result — a new array, a single value, or `true`/`false`.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

### Interview-level summary

- Arrays are ordered lists; objects are named collections. Reach for the one that matches the shape of your data.
- The iteration methods (`map`, `filter`, `reduce`, ...) differ mainly in **what they return**, not in how they loop.
- A recurring interview theme: does a method **mutate** the original array, or does it **return a new one**? Knowing this list cold is one of the highest-value things to memorize.

---

## 01. Creating arrays

```javascript
const empty = [];
const nums = [1, 2, 3];
const mixed = [1, "two", true, null];   // any type, even mixed
const fromCall = new Array(3);          // length 3, all empty slots — avoid this form
const filled = Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]
```

- Square brackets `[]` (an "array literal") are the normal way to create one — prefer it always.
- `new Array(3)` creates a *sparse* array of length 3 with no real elements — a common trap.
- `Array.from(...)` builds an array from something array-*like* (a string, a `Set`, an `arguments` object) or generates one with a mapping function.

**Gotcha:** `new Array(3)` gives `[empty × 3]`, not `[undefined, undefined, undefined]` — `.map()` on it silently skips every slot and does nothing.

---

## 02. Array vs Object

Both group values — the difference is what question you're answering.

```javascript
const user = { name: "Ada", age: 30 };   // one thing, named fields → OBJECT
const users = [{ name: "Ada" }, { name: "Sam" }]; // a list of things → ARRAY
```

- Array: "I have many of these, in order." Access by position (`users[0]`).
- Object: "I have one of these, with named parts." Access by key (`user.name`).

**Gotcha:** `Array.isArray(user)` is `false`, `Array.isArray(users)` is `true` — but `typeof` returns `"object"` for **both**, so `typeof` can't tell them apart (see §16).

---

## 03. Indexing and length

```javascript
const fruits = ["apple", "banana", "cherry"];
fruits[0];          // "apple"  — first item, index starts at 0
fruits[fruits.length - 1]; // "cherry" — last item
fruits.length;       // 3
fruits[10];          // undefined — no error, just undefined
```

- Indexes are zero-based: the first element is `[0]`, not `[1]`.
- `length` is always "highest index + 1" — it updates live as you add/remove items.

**Gotcha:** `fruits[10] = "kiwi"` does **not** throw — it creates a sparse array and jumps `length` straight to `11`, leaving holes in between.

---

## 04. forEach — perform an action

Runs a function once per element. Returns `undefined` always.

```javascript
[1, 2, 3].forEach(n => console.log(n));
// logs 1, then 2, then 3
```

- Use it purely for side effects (logging, pushing to an outside array, updating the DOM).
- You cannot `break` out of a `forEach` — it always runs to the end.

**Gotcha:** `const x = arr.forEach(...)` — `x` is `undefined`. Beginners often expect it to return the transformed array, like `map` does. It never does.

---

## 05. map — transform

Builds a **new array** the same length as the original, where each item is the callback's return value.

```javascript
const prices = [10, 20, 30];
const withTax = prices.map(p => p * 1.1);
console.log(withTax); // [11, 22, 33]
```

```text
prices
  ↓
map()
  ↓
take each p
  ↓
p * 1.1
  ↓
new array, same length
```

- Original array is untouched.
- New array's length always matches the original's length — one output per input.

**Gotcha:** Forgetting to `return` inside a `{}` block body: `arr.map(n => { n * 2 })` returns `[undefined, undefined, ...]`, because the block needs an explicit `return`.

---

## 06. filter — select

Builds a **new, possibly shorter array**, keeping only elements where the callback returns truthy.

```javascript
const ages = [12, 25, 17, 40];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [25, 40]
```

- Original array is untouched.
- Resulting length is `<=` the original length — items that fail the test are dropped, not transformed.

**Gotcha:** Confusing `filter` with `map` — `filter` never changes the surviving values, it only decides which ones stay.

---

## 07. find / findIndex — get one matching item

`find` returns the **first matching element itself**; `findIndex` returns its **position**. Both stop searching as soon as a match is found.

```javascript
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
users.find(u => u.id === 2);       // { id: 2 }
users.findIndex(u => u.id === 2);  // 1
users.find(u => u.id === 99);      // undefined — not found
users.findIndex(u => u.id === 99); // -1 — not found
```

**Gotcha:** `find` returns `undefined` when nothing matches, not `null` and not an error — always guard before using the result (`const u = users.find(...); if (u) {...}`).

---

## 08. some / every — check whether matches exist

Both return a **boolean**, and both stop early as soon as the answer is certain.

```javascript
const scores = [55, 80, 42];
scores.some(s => s >= 80);   // true  — at least one passes
scores.every(s => s >= 50);  // false — not all pass
```

- `some`: "is there at least one?" — stops at the first `true`.
- `every`: "do they all pass?" — stops at the first `false`.

**Gotcha:** `[].every(fn)` is `true` and `[].some(fn)` is `false` on an **empty array**, for any `fn` — this is called "vacuous truth" and trips people up in tests.

---

## 09. reduce — combine into one result

Walks the array and builds up a single accumulated value, using whatever combining rule you give it.

```javascript
const cart = [10, 20, 30];
const total = cart.reduce((acc, price) => acc + price, 0);
console.log(total); // 60
```

```text
acc=0, price=10 → acc=10
acc=10, price=20 → acc=30
acc=30, price=30 → acc=60
result: 60
```

- First argument to the callback: the accumulator (running result) so far.
- Second argument to `reduce`: the **starting value** of the accumulator.
- Not limited to numbers — `reduce` can build objects, strings, or other arrays too (e.g. grouping items by a key).

**Gotcha:** Omitting the starting value (`arr.reduce((a, b) => a + b)`) uses the array's first element as the initial accumulator instead — on an **empty array** with no starting value, this throws `TypeError: Reduce of empty array with no initial value`. Always pass a starting value.

---

## 10. sort — reorder in place

**Mutates the original array** and returns it. By default it sorts as **strings**, which breaks numbers.

```javascript
const nums = [40, 1, 5, 200];
nums.sort();
console.log(nums); // [1, 200, 40, 5]  ← NOT numeric order!
```

That looks broken because it is: with no compare function, `sort()` converts every element to a **string** and compares them character by character. `"1"` sorts before `"200"` because `"1" < "2"`; `"200"` sorts before `"40"` because `"2" < "4"`.

Correct numeric sort needs a **compare function**:

```javascript
nums.sort((a, b) => a - b);   // ascending: [1, 5, 40, 200]
nums.sort((a, b) => b - a);   // descending: [200, 40, 5, 1]
```

- Compare function rule: return negative → `a` comes first; positive → `b` comes first; zero → keep order.
- `sort()` **mutates the array in place** — it doesn't create a new one (unlike `map`/`filter`).

**Gotcha (classic interview trap):** `[40, 1, 5, 200].sort()` gives `[1, 200, 40, 5]`, not `[1, 5, 40, 200]`, because the default sort compares elements as strings, not numbers. **Always pass `(a, b) => a - b` for numbers.**

---

## 11. Mutating methods — change the original array

These change the array **in place** and most return something *other than* the new array (read the return value carefully).

```javascript
const arr = [1, 2, 3];

arr.push(4);      // adds to end   → arr is now [1,2,3,4], returns new length: 4
arr.pop();         // removes from end → arr is now [1,2,3], returns removed item: 4
arr.unshift(0);    // adds to start  → arr is now [0,1,2,3], returns new length: 4
arr.shift();       // removes from start → arr is now [1,2,3], returns removed item: 0
arr.splice(1, 1);  // remove 1 item at index 1 → arr is now [1,3], returns removed items: [2]
arr.splice(1, 0, "x"); // insert "x" at index 1, remove 0 → arr is now [1,"x",3]
```

- `push`/`pop` work at the **end** (fast). `unshift`/`shift` work at the **start** (slower — everything else has to shift index).
- `splice(start, deleteCount, ...itemsToInsert)` is the general-purpose "remove and/or insert" tool.

**Gotcha:** `push` returns the array's **new length**, not the array itself — `const result = arr.push(4)` makes `result` a number, which surprises people expecting the array back.

---

## 12. Non-mutating methods — return a new array

These leave the original untouched and hand you a **copy** (fully or partially).

```javascript
const arr = [1, 2, 3];

arr.slice(1);        // [2, 3]        — from index 1 to end, original unchanged
arr.slice(1, 2);      // [2]           — from index 1, up to (not including) index 2
arr.concat([4, 5]);   // [1, 2, 3, 4, 5] — original unchanged
[...arr, 4];          // [1, 2, 3, 4]   — spread, same idea as concat
```

**Gotcha:** `slice` (no `p`) copies part of an array and never mutates. `splice` (with a `p`) cuts into the array and *does* mutate. The names are easy to confuse — say them out loud: "sLICe leaves, sPLICe changes."

---

## 13. Spread syntax with arrays

`...` **expands** an array into individual elements.

```javascript
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];        // [1, 2, 3, 4]
const copy = [...a];                // shallow copy of a
const max = Math.max(...[4, 9, 2]); // 9 — spreads into separate arguments
```

- The most common way to make a quick, safe **copy** of an array before mutating it.
- Combines arrays without `concat`.

**Gotcha:** Spread only makes a **shallow** copy — `const copy = [...arr]` copies the top-level slots, but if an element is an object, both arrays still point to the *same* object.

```javascript
const original = [{ id: 1 }];
const copy = [...original];
copy[0].id = 99;
console.log(original[0].id); // 99 — same object, both arrays affected
```

---

## 14. Destructuring arrays

Pulls values out of an array into named variables, by **position**.

```javascript
const point = [10, 20];
const [x, y] = point;         // x = 10, y = 20

const [first, , third] = [1, 2, 3];  // skip an item with an empty slot
console.log(first, third);           // 1 3

const [head, ...rest] = [1, 2, 3, 4];
console.log(head, rest);             // 1 [2, 3, 4]
```

- Order matters — the first variable always gets index `0`, the second gets index `1`, etc.
- Can combine with defaults: `const [a = 10] = [];` → `a` is `10`.

**Gotcha:** Array destructuring matches by **position**, object destructuring matches by **name** — mixing up which one to use for which shape is a common early mistake.

---

## 15. Common patterns

```javascript
// Remove duplicates
const unique = [...new Set([1, 2, 2, 3])];             // [1, 2, 3]

// Flatten one level
[[1, 2], [3, 4]].flat();                                // [1, 2, 3, 4]

// Sum all values
[1, 2, 3].reduce((sum, n) => sum + n, 0);                // 6

// Check existence
[1, 2, 3].includes(2);                                   // true

// Convert array of objects to a lookup object
const byId = users.reduce((map, u) => (map[u.id] = u, map), {});
```

- `Set` is the standard trick for deduplicating, because a `Set` can only hold unique values.
- `reduce` is the general "turn an array into anything else" tool — worth mastering beyond just summing numbers.

---

## 16. Array.isArray and the typeof gotcha

```javascript
typeof [1, 2, 3];        // "object"  ← not useful for detecting arrays
Array.isArray([1, 2, 3]); // true
Array.isArray({ a: 1 });  // false
```

**Gotcha:** Because arrays are technically objects, `typeof` can never distinguish them — always use `Array.isArray()` to check.

---

## Quick Mental Model

| Method | Returns | Mutates original? | One-liner |
|---|---|---|---|
| `forEach` | `undefined` | No | perform an action |
| `map` | new array, same length | No | transform |
| `filter` | new array, `<=` length | No | select |
| `find` | one item or `undefined` | No | get one matching item |
| `findIndex` | index or `-1` | No | get position of match |
| `some` | boolean | No | check if at least one matches |
| `every` | boolean | No | check if all match |
| `reduce` | anything (accumulated) | No | combine into one result |
| `sort` | the same array, reordered | **Yes** | reorder |
| `push` / `pop` | new length / removed item | **Yes** | add/remove at end |
| `shift` / `unshift` | removed item / new length | **Yes** | add/remove at start |
| `splice` | array of removed items | **Yes** | remove/insert anywhere |
| `slice` | new array (partial copy) | No | copy a range |
| `concat` | new array | No | merge arrays |

---

*When you're ready, ask me for coding questions and I'll give them in chat one at a time.*
