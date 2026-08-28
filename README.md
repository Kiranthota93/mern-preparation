# mern-preparation

Interview Readiness Dashboard — split into HTML/CSS/JS with MongoDB persistence.

## Structure
- `index.html` — markup only (repo root, so GitHub Pages serves it)
- `styles.css` — all styles
- `app.js` — all app logic (state, rendering, persistence)
- `server.js` — Express backend; serves the root files and exposes `/api/state`
- `.env` — `mongo_uri` and `db_name` (not committed)

## Persistence
- With `server.js` running, state is saved to MongoDB **and** cached in `localStorage`.
- On a static host (e.g. GitHub Pages) there is no backend, so state is saved
  to `localStorage` only — it persists per-browser but does not sync across devices.

## Run
```
npm install
npm start
```
Then open http://localhost:3000

## Data
All state (learned marks, review schedule, recall history, projects, and the
per-subtopic notes) is stored in one document in the `tracker_state` collection
of the `mern_practice` database. The API:
- `GET  /api/state` — load the full state
- `PUT  /api/state` — save the full state

## Notes per subtopic
Open any competency, then click the pencil button on a subtopic row to open a
dedicated note input for that subtopic. Notes autosave to MongoDB.
