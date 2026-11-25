# Clinic Triage System

A rule-based decision-support system for patient triage and queue management at the Veritas University clinic. Patients are placed in one of three tiers (Emergency, Urgent, Routine) by a transparent lookup table of rules. Nurses see a live queue and can override any priority. There is no machine learning in this system.

**Stack:** React (client), Node.js and Express (server), PostgreSQL (database), Socket.io (live updates).

## Requirements

- Node.js 20 or later
- PostgreSQL 15 or later
- npm 10 or later

## Run the project

### 1. Install

```bash
git clone TODO-your-repository-url
cd TODO-project-folder
npm install --prefix server
npm install --prefix client
```

### 2. Set up the database

```bash
createdb triage
cp server/.env.example server/.env
```

Open `server/.env` and set your values (see "Environment variables" below). Then load the tables and demo data:

```bash
npm run migrate --prefix server
npm run seed --prefix server
```

The seed step adds the starting triage rules and the demo staff accounts.

### 3. Start

Open two terminals.

```bash
# Terminal 1: API and live updates
npm run dev --prefix server      # http://localhost:4000

# Terminal 2: web app
npm run dev --prefix client      # http://localhost:5173
```

Open http://localhost:5173 in your browser.

## Environment variables

Set these in `server/.env`.

| Variable       | Meaning                                  | Example                                        |
|----------------|------------------------------------------|------------------------------------------------|
| `PORT`         | Port the API listens on                  | `4000`                                         |
| `DATABASE_URL` | PostgreSQL connection string             | `postgres://user:password@localhost:5432/triage` |
| `JWT_SECRET`   | Secret used to sign staff login tokens   | any long random text                           |
| `CLIENT_URL`   | Address of the web app (for CORS)        | `http://localhost:5173`                        |

Never commit `server/.env`. Commit only `server/.env.example`.

## Demo logins

TODO: replace with the accounts your seed script creates.

| Role  | Username | Password |
|-------|----------|----------|
| Nurse | TODO     | TODO     |
| Admin | TODO     | TODO     |

## Run the tests

```bash
npm test --prefix server
```

TODO: remove this section if you have no tests yet.

## Troubleshooting

- **Cannot connect to the database:** check that PostgreSQL is running and that `DATABASE_URL` in `server/.env` is correct.
- **Port already in use:** change `PORT` in `server/.env`, and update the API address in the client if needed.
- **Empty queue on first run:** run the seed step again (`npm run seed --prefix server`).
