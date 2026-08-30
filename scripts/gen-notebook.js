/* Generate a standalone notebook HTML page for one topic, from content.js,
   reusing the exact CSS/chrome of js-functions-notebook.html.
   Usage: node scripts/gen-notebook.js "<Topic Name>" "<Display Title>" <slug>
   Run from the repo root (D:\PR\mern-preparation). */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const TEMPLATE = fs.readFileSync(path.join(ROOT, "js-functions-notebook.html"), "utf8");

global.window = {};
require(path.join(ROOT, "content.js"));
const EXPLANATIONS = window.EXPLANATIONS;
const QUESTIONS = window.QUESTIONS;

const topic = process.argv[2];
const title = process.argv[3] || topic;
const slug = process.argv[4];
if (!topic || !slug) {
  console.error("usage: node gen-notebook.js \"<Topic Name>\" \"<Display Title>\" <slug>");
  process.exit(1);
}

const expl = EXPLANATIONS[topic];
const ques = QUESTIONS[topic] || [];
if (!expl) { console.error("No EXPLANATIONS for topic:", topic); process.exit(1); }
const keys = Object.keys(expl);

// ---- head (up through </style>) ----
const styleEnd = TEMPLATE.indexOf("</style>") + "</style>".length;
let head = TEMPLATE.slice(0, styleEnd);
head = head.replace(/<title>[^<]*<\/title>/, `<title>${title} Notebook</title>`);

// ---- header chrome ----
const header = `

<header>
  <div class="head-inner">
    <div class="brand">
      <h1>${title}</h1>
      <span class="tag">Notebook</span>
    </div>
    <div class="tabs" role="tablist" aria-label="Notebook sections">
      <button class="tab" role="tab" id="tab-notes" aria-controls="panel-notes" aria-selected="true">Explanations</button>
      <button class="tab" role="tab" id="tab-code" aria-controls="panel-code" aria-selected="false">Coding Questions</button>
    </div>
  </div>
</header>

<div class="wrap">

  <!-- ============ EXPLANATIONS ============ -->
  <div class="panel" id="panel-notes" role="tabpanel" aria-labelledby="tab-notes">
    <div class="layout">
      <nav class="toc" aria-label="Topics">
`;

// ---- TOC ----
const toc = keys.map((k, i) => {
  const n = String(i + 1).padStart(2, "0");
  const short = k.length > 28 ? k.slice(0, 26) + "…" : k;
  return `        <a href="#t${i + 1}">${n} · ${escapeHtml(short)}</a>`;
}).join("\n");

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// content.js explanation strings already contain safe HTML paragraphs/pre/code,
// with the gotcha as <p class='ex-gotcha'>...</p> — convert that to the notebook's .gotcha div
function toGotchaDiv(html) {
  return html.replace(
    /<p class='ex-gotcha'>([\s\S]*?)<\/p>/g,
    '<div class="gotcha"><b>Gotcha</b><span>$1</span></div>'
  );
}

const sections = keys.map((k, i) => {
  const n = String(i + 1).padStart(2, "0");
  const body = toGotchaDiv(expl[k]);
  return `        <section class="topic" id="t${i + 1}">
          <h2><span class="num">${n}</span> ${escapeHtml(k)}</h2>
          ${body}
        </section>`;
}).join("\n\n");

const midSwitch = `
      </nav>

      <main>
        <p class="intro">Reference notes for ${escapeHtml(title)}. Read a topic, note the <b style="color:var(--accent)">Gotcha</b>, then switch to Coding Questions.</p>

${sections}

      </main>
    </div>
  </div>

  <!-- ============ CODING QUESTIONS ============ -->
  <div class="panel" id="panel-code" role="tabpanel" aria-labelledby="tab-code" hidden>
    <p class="q-intro">${ques.length} questions, ordered easy → hard. Try each one before revealing the answer.</p>

`;

const qcards = ques.map((q, i) => {
  return `    <div class="qcard">
      <div class="qhead"><span class="qn">Q${i + 1}</span><span class="lvl">${q.level}</span></div>
      <p class="qtopic">// ${escapeHtml(q.tag)}</p>
      <p class="qtext">${q.q}</p>
      <details class="answer"><summary>Show answer</summary>
        <div class="ans-body">
          ${q.a}
        </div>
      </details>
    </div>`;
}).join("\n\n");

const footer = `
  </div>
</div>

<footer>${escapeHtml(title)} Notebook · read the Explanations, test with Coding Questions</footer>

<script>
  const tabs = document.querySelectorAll('.tab');
  const panels = { 'tab-notes': 'panel-notes', 'tab-code': 'panel-code' };
  tabs.forEach(tab => {
    tab.addEventListener('click', () => selectTab(tab.id));
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const ids = Object.keys(panels);
        const i = ids.indexOf(tab.id);
        const next = e.key === 'ArrowRight' ? (i + 1) % ids.length : (i - 1 + ids.length) % ids.length;
        document.getElementById(ids[next]).focus();
        selectTab(ids[next]);
      }
    });
  });
  function selectTab(id) {
    tabs.forEach(t => {
      const on = t.id === id;
      t.setAttribute('aria-selected', on);
      document.getElementById(panels[t.id]).hidden = !on;
    });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  const tocLinks = document.querySelectorAll('.toc a');
  const sections = [...document.querySelectorAll('section.topic')];
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const id = en.target.id;
        tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-120px 0px -70% 0px' });
  sections.forEach(s => obs.observe(s));
</script>
`;

const out = head + header + toc + midSwitch + qcards + footer;
const outPath = path.join(ROOT, `js-${slug}-notebook.html`);
fs.writeFileSync(outPath, out);
console.log("Wrote:", outPath, "(" + out.split("\n").length + " lines)");
console.log("Explanations:", keys.length, "Questions:", ques.length);
