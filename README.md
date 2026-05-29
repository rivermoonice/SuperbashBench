# Multi-Model Projects Showcase

A modern, dark-themed showcase that runs the **same set of prompts** through multiple frontier
LLMs and lets you compare the results side by side. A page-level switch flips the benchmarks and
every project link between models.

Currently featured:
- **Kimi K2.6** — state-of-the-art open-source coding model
- **Claude Opus 4.8** — Anthropic's frontier coding/agent model (released 2026-05-28)
- **GPT 5.5** — OpenAI-labeled local build lane created with agent-team workflow

## Quick Start

```bash
# Serve the site (choose one)
python3 -m http.server 8080
npx serve .
npx vite
```

## How it works

`app.js` holds two registries:

- **`models`** — per-model benchmark stats, feature cards, and hero/blog copy. The page-level
  switch (top of the Models section) re-renders these and re-points every project card.
- **`projects`** — one entry per prompt, with a `folder` map giving each model's build path.

```javascript
const projects = [
    {
        id: 'my-project',
        name: 'My Project',
        description: 'What this project does',
        icon: '🚀',
        folder: {
            'kimi-k2-6': './my-project',
            'opus-4-8':  './opus-4-8/my-project',
            'gpt-5-5':   './gpt-5-5/my-project',
        },
    },
];
```

## Adding a model

1. Add an entry to `models` in `app.js` (stats, features, hero copy).
2. Add its id to `MODEL_ORDER`.
3. Create a folder for its builds (e.g. `./opus-4-8/`) and give each project a `folder[id]` path.

## Adding a project

1. Add an entry to the `projects` array with a `folder` path per model.
2. Create the build folder(s) and add `index.html`.
3. Add a card to `prompts/index.html` with links to each model build.

## Project Structure

```
.
├── index.html              # Main showcase (model switch + dynamic sections)
├── style.css               # Shared dark theme
├── app.js                  # Model + project registries, renderers
├── server.py               # Dev server (optional)
├── README.md
│
├── yingzao-fashi/          # Kimi K2.6 builds
├── space-shooter/
├── voxel-world/
├── kanban/
├── crypto-dashboard/
├── world-monitor/
├── pelican-bicycle/
│
├── opus-4-8/               # Claude Opus 4.8 builds (same prompts)
│   ├── yingzao-fashi/
│   ├── space-shooter/
│   ├── voxel-world/
│   ├── kanban/
│   ├── crypto-dashboard/
│   ├── world-monitor/
│   └── pelican-bicycle/
│
├── gpt-5-5/                # GPT 5.5 builds (same prompts)
│   ├── yingzao-fashi/
│   ├── space-shooter/
│   ├── voxel-world/
│   ├── kanban/
│   ├── crypto-dashboard/
│   ├── world-monitor/
│   └── pelican-bicycle/
│
└── prompts/
    └── index.html          # Prompts archive (links to each model's build)
```

## Features

- 🎚️ Page-level model switch — benchmarks + project links flip per model
- 📊 Per-model benchmark stat counters and feature cards
- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design
- ⚡ Fast, lightweight, no build step required
