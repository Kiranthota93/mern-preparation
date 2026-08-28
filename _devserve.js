const express = require("express");
const app = express();
app.use(express.json());
let state = { checked:{}, tierMeta:{}, recall:{}, projects:[], subNotes:{} };
app.get("/api/state", (req,res)=>res.json(state));
app.put("/api/state", (req,res)=>{ state = req.body || state; res.json({ok:true}); });
app.use(express.static(__dirname));
app.listen(4173, ()=>console.log("static server on http://localhost:4173"));
