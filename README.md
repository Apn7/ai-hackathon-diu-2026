# Project Name

> AI DEV FEST 2026 AI Hackathon (DIU CPC × upay). Track: _TBD_.

Every section below is required by rulebook section 6.2 ([docs/hackathon-rulebook.md](docs/hackathon-rulebook.md#6-mandatory-readmemd)). Fill all of them before submission.

## Project Overview

- **Problem:** _TBD_
- **Solution:** _TBD_
- **Purpose:** _TBD_

**Problem statement:** For [specific user], [specific problem] causes [measurable consequence]. We will build [AI-powered product] that uses [data] to [decision/action], with success measured by [metric].

## Features

_TBD: list each feature and say how the AI part is used._

## Technology Stack

| Layer | Tools |
|---|---|
| Languages | Python 3.13, TypeScript |
| Backend | FastAPI, Uvicorn |
| Frontend | Next.js 16 (App Router), React 19, Tailwind CSS 4 |
| AI models / APIs | _TBD_ |
| Libraries | _TBD_ |
| Testing | pytest, ESLint, TypeScript compiler |
| Hosting | Vercel (frontend), _TBD_ (backend) |

## Requirements

- Python 3.13
- Node.js 20.9 or newer (tested on 24)
- pnpm (tested on 12)

## Installation and Setup

```bash
git clone https://github.com/Apn7/ai-hackathon-diu-2026.git
cd ai-hackathon-diu-2026

# Backend
cd backend
python -m venv .venv
.venv\Scripts\activate        # macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
cd ..

# Frontend
cd frontend
pnpm install
cd ..
```

## Environment Variables

None are needed to run locally.

| Variable | Where | Purpose | Example |
|---|---|---|---|
| `BACKEND_URL` | frontend (Vercel) | Where Next.js forwards `/api/*` calls. Defaults to `http://localhost:8000`. | `https://your-backend.example.com` |

## Run and Build

Run each in its own terminal, then open http://localhost:3000.

```bash
# Terminal 1: backend on http://localhost:8000 (API docs at /docs)
cd backend
.venv\Scripts\activate
uvicorn app.main:app --reload

# Terminal 2: frontend on http://localhost:3000
cd frontend
pnpm dev
```

Production build of the frontend:

```bash
cd frontend
pnpm build
pnpm start
```

The frontend forwards every `/api/*` request to the backend, so the browser only talks to one address.

## Live Deployment

_TBD: link judges can open._

## Testing

```bash
# Backend tests
cd backend
pytest

# Frontend lint and type check
cd frontend
pnpm lint
pnpm exec tsc --noEmit
```

Quick manual check: with both servers running, http://localhost:3000 shows "API status: ok".

_TBD: how to verify each feature by hand too._

## Other Configuration

_TBD: extra files, settings or access needed._

## Data

All data is synthetic or public. No real customer data is used. Synthetic assumptions: _TBD_.

## Team

| Name | Role |
|---|---|
| Ekramul Alam ([@Apn7](https://github.com/Apn7)) | _TBD_ |
