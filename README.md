# Qbit

**An app that remembers your path through complexity — and rewinds itself there when you just ask.**

Built for **ENGINEER-01 — Beauty Meets Complexity**: build a technically advanced system while keeping the UX intuitive, elegant, and effortless.

---

## Inspiration

Complex software rarely fails because it has too many features — it fails because people **lose track of where they are, how they got there, and how to get back.** This is a well-documented usability failure in HCI research known as "Lost in Hyperspace," and it's still everywhere today: cluttered Jira menus, Adobe dashboards with no clear trail back to where you started, Figma's UI3 redesign burying familiar tools, Notion/Trello updates that break muscle memory.

Tools like Tree Style Tab or browser history visualizers try to solve this at the *browser* level — a generic tree of tabs or pages. Nobody solves it at the *app-workflow* level, and nobody lets you just **ask, in plain language, to go back** instead of eyeballing a graph. That's the gap Qbit fills.

## What it does

Qbit is a live navigation-memory layer for a complex application, demoed inside **ProjectHub** — a deliberately dense, Jira-style project tracker (projects → tickets → subtasks → comments) built to genuinely disorient someone in just a handful of clicks.

As a user moves through ProjectHub, Qbit:

1. **Tracks** every screen transition as a lightweight trail.
2. **Renders** that trail live in a sidebar, so there's always a visible answer to "how did I get here."
3. **Lets the user type a plain-language request** — *"take me back to the ticket about the login bug"* — and jumps them straight back to that exact state, instead of making them manually retrace clicks.

The engineering underneath (tracking state, matching natural language to a past screen, animating the jump) is genuinely non-trivial — but the user never sees any of that. They just feel like the app remembers for them.

## Tech stack

- **Frontend:** React 19 + TypeScript, Vite
- **Styling:** Tailwind CSS v4
- **State/data:** TanStack Query, React Hook Form + Zod, clsx, react-hot-toast, lucide-react
- **HTTP:** axios
- **AI:** Claude API for natural-language recall matching

## Getting started

```bash
cd qbit
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # type-check + production build
npm run lint       # eslint
npm run preview    # preview a production build
```

## Project structure

```
qbit/
├── src/
│   ├── App.tsx                     # Top-level view stack, trail state, recall
│   ├── main.tsx                    # Entry point
│   ├── styles.css                  # Global styles
│   ├── types.ts                    # Shared types (screen/trail node/breadcrumb)
│   ├── data/
│   │   └── projectHubData.ts       # ProjectHub projects & tickets
│   └── components/
│       ├── commandBar.tsx          # "Take me back to..." input
│       ├── HubChrome.tsx           # App chrome / layout shell
│       ├── RewindOverlay.tsx       # Animated rewind transition
│       ├── Trail.tsx               # Live trail visualization
│       └── screens/
│           ├── dashboard.tsx       # Project list
│           ├── ProjectView.tsx     # Ticket table for a project
│           ├── TicketDetails.tsx   # Ticket detail view
│           ├── SubtaskDetail.tsx   # Subtask detail view
│           └── CommentThread.tsx   # Comment thread view
```

## What's next

- Upgrade recall matching from keyword overlap to a single structured Claude API call for more robust natural-language understanding
- Finish the animated rewind transition (smooth, eased — not an instant cut)
- "You've been here before" pulse when revisiting a screen
- End-of-session AI-generated one-line recap of the path taken

## Team notes

Solo build, single sitting. Scope was deliberately kept tight — no auth, no persistence across sessions, no real Jira/Adobe integration (ProjectHub is a purpose-built stand-in), no embeddings/vector search. The goal was to prove the *feel* of the idea end-to-end, not to ship a production app.
