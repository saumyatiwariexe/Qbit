# Qbit

> An app that remembers your path through complexity — and rewinds itself there when you just ask.

**Track:** ENGINEER-01 — Beauty Meets Complexity
**Repo:** `Qbit`

---

## The idea

Complex software rarely fails because it has too many features — it fails because people **lose track of where they are, how they got there, and how to get back.** HCI research calls this "Lost in Hyperspace," and it's still visible today in tools like Jira, Adobe's suite, and post-redesign Figma/Notion.

**Qbit** is a live navigation-memory layer for a complex application. It:

1. **Tracks** every screen the user visits as a lightweight path (a "trail").
2. **Renders** that trail live, so the user always has a visible answer to "how did I get here."
3. **Lets the user ask in plain language** — *"take me back to the ticket about the login bug"* — and jumps them back to that exact state instead of making them retrace clicks manually.

The demo vehicle is **ProjectHub**, a deliberately over-featured, Jira-style fake dashboard (projects → tickets → subtasks/comments) built specifically to disorient someone in a handful of clicks — so Qbit has something real to solve.

Full background and competitive research live in [`01-problem-validation-and-solution.md`](./01-problem-validation-and-solution.md); the original product spec is in [`02-PRD.md`](./02-PRD.md).

## Current status

This repo is an early, in-progress scaffold — **it does not yet match the PRD in full**, and it does not currently build cleanly. Treat this section as the source of truth over the PRD until it's updated:

- ✅ Vite + React + TypeScript project scaffolded, with Tailwind CSS wired in via `@tailwindcss/vite`.
- ✅ A first pass at the ProjectHub data model (`src/data/projectHubData.ts`) — currently seeded with placeholder/repeated ticket content, not real variety yet.
- ✅ First draft of `App.tsx` wiring together a `home → project → ticket` view stack, a trail list, and a naive keyword-matching recall (no LLM call yet).
- 🚧 Several planned components are stubbed but empty: `HubChrome.tsx`, `RewindOverlay.tsx`, `Trail.tsx`, `CommentThread.tsx`, `SubtaskDetail.tsx`, `TicketDetails.tsx`.
- 🚧 `App.tsx` and `commandBar.tsx` have syntax/type errors (mismatched braces, a couple of typos, an undeclared `value`/`setValue` in the command bar) — the app doesn't compile as-is yet.
- 🚧 `main.tsx` imports `./style.css`, but the actual file is `src/styles.css` — needs to be reconciled.
- ❌ No backend yet. The PRD calls for an Express `/recall` endpoint that makes a single Claude API call to match natural-language queries to trail nodes; today the recall logic is a client-side keyword-overlap heuristic only.
- ❌ No animated rewind transition yet — jumps are instant, not the smooth "visible rewind" the PRD asks for.
- ❌ No "you've been here before" pulse (stretch goal, not started).

In short: the shape of the app is there, but it needs a debugging pass, the empty components filled in, and the recall step upgraded from keyword matching to an actual LLM call before it matches the PRD's demo script.

## Tech stack

- **Frontend:** React 19 + TypeScript, built with Vite
- **Styling:** Tailwind CSS v4
- **Routing/state helpers:** React Router, TanStack Query, React Hook Form + Zod, clsx, react-hot-toast, lucide-react icons
- **HTTP:** axios (for the future `/recall` call)
- **Backend:** not present in this repo yet — PRD specifies a single-endpoint Express server calling the Claude API

## Getting started

```bash
cd qbit
npm install
npm run dev
```

Other scripts (from `qbit/package.json`):

```bash
npm run build     # tsc -b && vite build
npm run lint       # eslint .
npm run preview    # preview a production build
```

> Note: as of this commit, `npm run build`/`npm run dev` will surface TypeScript/JSX errors from `App.tsx` and `commandBar.tsx` (see "Current status" above) — these need fixing before the app runs end-to-end.

## Project structure

```
qbit/
├── src/
│   ├── App.tsx                     # Top-level view stack + trail + recall (WIP, has errors)
│   ├── main.tsx                    # Entry point
│   ├── styles.css                  # Global styles
│   ├── types.ts                    # Shared types (screen/trail node/breadcrumb)
│   ├── data/
│   │   └── projectHubData.ts       # Fake ProjectHub projects/tickets (placeholder data)
│   └── components/
│       ├── commandBar.tsx          # "Take me back to..." input (WIP)
│       ├── HubChrome.tsx           # Stub
│       ├── RewindOverlay.tsx       # Stub — animated rewind transition
│       ├── Trail.tsx               # Stub — live trail visualization
│       └── screens/
│           ├── dashboard.tsx       # Project list screen
│           ├── ProjectView.tsx     # Ticket table for a project
│           ├── CommentThread.tsx   # Stub
│           ├── SubtaskDetail.tsx   # Stub
│           └── TicketDetails.tsx   # Stub
├── package.json
└── vite.config.ts
```

## Roadmap to match the PRD

Rough order of what's left, per the PRD's hour-by-hour plan:

1. Fix the compile errors in `App.tsx` / `commandBar.tsx` / `main.tsx`'s CSS import.
2. Flesh out `dashboard.tsx` → `ProjectView.tsx` → `TicketDetails.tsx` → `SubtaskDetail.tsx` / `CommentThread.tsx` as a real navigable chain, with richer (non-repeated) ticket data.
3. Build out `Trail.tsx` as the live, animated sidebar visualization (replacing the plain `<ol>` list currently inline in `App.tsx`).
4. Stand up the `/recall` backend endpoint and swap the keyword-matching heuristic for the single structured Claude API call described in the PRD, with a regex fallback if the call fails.
5. Build `RewindOverlay.tsx` for a visible, eased transition back to the matched state (not an instant jump).
6. Stretch: "you've been here before" pulse on revisit, end-of-session AI recap.

## Sources / research

See [`01-problem-validation-and-solution.md`](./01-problem-validation-and-solution.md) for the full "Lost in Hyperspace" research basis and competitive landscape (Tree Style Tab, Visual History, History Tree/Graph extensions) that motivated Qbit.
