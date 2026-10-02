# AGENTS.md

Context for AI coding agents working in this repo. Read this first.

## What this is

Our entry for the **AI DEV FEST 2026 AI Hackathon** at Daffodil International University, sponsored by **upay** (a Bangladeshi mobile financial service, MFS).
Theme: build a working AI prototype that solves a real problem in digital financial services.

## Source documents

Markdown is the readable copy. The PDF is the official source if they disagree.

| File | What it is |
|---|---|
| [docs/upay-student-guideline.md](docs/upay-student-guideline.md) | The problem brief: 7 tracks, data rules, responsible AI rules, **judging weights** |
| [docs/hackathon-rulebook.md](docs/hackathon-rulebook.md) | Hackathon rules: timeline, GitHub rules, README and submission requirements |
| [docs/general-rules.md](docs/general-rules.md) | General event rules: ID, AI tool use, conduct |

## Timeline

- **T+0:** organizers publish the problem requirements.
- **T+0 to T+72h:** build. Push code, submit video demo and project report by T+72h. No late submissions.
- **7 October 2026 (on-site final):** judges give new requirements. We add them live, commit and push in time.
- **Last 90 minutes on-site:** second evaluation. Demo plus questions.

## Judging weights (guideline section 15)

| Criterion | Weight |
|---|---|
| Problem relevance | 20% |
| AI/ML depth | 20% |
| Business/customer impact | 20% |
| Prototype quality (working end to end) | 15% |
| Innovation | 10% |
| Scalability & integration | 10% |
| Responsible AI & security | 5% |

Not wanted: a generic chatbot, a plain dashboard, or just a model accuracy score.

## Hard rules

- **Public GitHub repo** with a **continuous commit history**. Commit small and often. One big final upload breaks the rules.
- **README.md** must have all 10 sections already stubbed in it. Keep it current as features land.
- **Synthetic or public data only.** Never use real personal data.
- **Explainable AI.** Show the reasons behind important predictions. No autonomous approve/deny of money decisions.
- Keep business rules separate from ML predictions. Do not hide sensitive decision logic inside a free-form LLM prompt.
- Every team member must be able to explain the design and the AI parts. Keep code simple enough to explain.
- Disclose external datasets, APIs and AI tools when asked.

## Git conventions

- Commit messages: one line, Conventional Commits. Examples: `feat(api): add risk score endpoint`, `fix(ui): ...`, `docs(readme): ...`, `chore: ...`, `refactor(ml): ...`, `test(ml): ...`.
- No AI co-author lines or "Generated with" footers in commits or PRs.
- Never commit secrets. Use `.env` locally and keep `.env.example` with placeholders.

## Stack and layout

| Folder | What | Run |
|---|---|---|
| `backend/` | Python 3.13, FastAPI. All logic, ML and LLM calls live here. Routes start with `/api`. | `uvicorn app.main:app --reload` (port 8000) |
| `frontend/` | Next.js 16 App Router, React 19, Tailwind 4, pnpm. Screens only. | `pnpm dev` (port 3000) |

- Next.js forwards `/api/*` to FastAPI (`frontend/next.config.ts`, env `BACKEND_URL`). Call the backend with relative `fetch("/api/...")`. Never add CORS.
- Do not add Next.js API routes or server actions. Business logic belongs in FastAPI.
- Pages that use state or events start with `"use client"`.
- Next.js 16 differs from older versions. Read `frontend/AGENTS.md` and the docs in `frontend/node_modules/next/dist/docs/` before writing frontend code.
- Tests: `pytest` in `backend/`. `pnpm lint` and `pnpm exec tsc --noEmit` in `frontend/`.

## Workflow

- `main` is protected. Work on a branch, open a PR, merge it. No direct pushes.
- Branch names follow the commit types: `feat/...`, `fix/...`, `chore/...`, `docs/...`.

## Status

Project skeleton is done. Track and idea are not chosen yet. Update this file when they are.
