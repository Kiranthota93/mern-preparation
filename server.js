require("dotenv").config();
const dns = require("dns");
// Node's bundled resolver can be refused on some networks even though the OS
// resolver works; pin public resolvers so mongodb+srv SRV lookups succeed.
try { dns.setServers(["8.8.8.8", "1.1.1.1"]); } catch (e) { /* ignore */ }
const path = require("path");
const express = require("express");
const { MongoClient } = require("mongodb");

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.mongo_uri;
const DB_NAME = process.env.db_name;
const COLLECTION = "tracker_state";
const STATE_ID = "singleton"; // one document holds the whole dashboard state

if (!MONGO_URI || !DB_NAME) {
  console.error("Missing mongo_uri or db_name in .env");
  process.exit(1);
}

const EMPTY_STATE = { checked: {}, tierMeta: {}, recall: {}, projects: [], subNotes: {} };

const app = express();
app.use(express.json({ limit: "2mb" }));
app.use(express.static(path.join(__dirname, "public")));

const client = new MongoClient(MONGO_URI);
let states;

async function start() {
  await client.connect();
  states = client.db(DB_NAME).collection(COLLECTION);
  console.log("Connected to MongoDB:", DB_NAME);

  // GET the full dashboard state
  app.get("/api/state", async (req, res) => {
    try {
      const doc = await states.findOne({ _id: STATE_ID });
      if (!doc) return res.json(EMPTY_STATE);
      const { _id, updatedAt, ...state } = doc;
      res.json(state);
    } catch (e) {
      console.error("GET /api/state", e);
      res.status(500).json({ error: "load failed" });
    }
  });

  // PUT (upsert) the full dashboard state
  app.put("/api/state", async (req, res) => {
    try {
      const b = req.body || {};
      const state = {
        checked: b.checked || {},
        tierMeta: b.tierMeta || {},
        recall: b.recall || {},
        projects: Array.isArray(b.projects) ? b.projects : [],
        subNotes: b.subNotes || {},
        updatedAt: new Date(),
      };
      await states.updateOne({ _id: STATE_ID }, { $set: state }, { upsert: true });
      res.json({ ok: true });
    } catch (e) {
      console.error("PUT /api/state", e);
      res.status(500).json({ error: "save failed" });
    }
  });

  app.listen(PORT, () => console.log("Server running: http://localhost:" + PORT));
}

start().catch((e) => {
  console.error("Startup failed", e);
  process.exit(1);
});
