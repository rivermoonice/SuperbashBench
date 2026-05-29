# Session Log — Kimi Projects Showcase
**Date:** 2026-04-28  
**Domain:** https://kimi.boxmining.one  
**Model:** Kimi K2.6

---

## 1. Initial Showcase Setup

Created the main showcase page and supporting files:

| File | Purpose |
|------|---------|
| `index.html` | Main landing page with modern dark theme |
| `style.css` | Dark theme CSS with gradients, animations, responsive grid |
| `app.js` | Project registry — dynamically loads project cards |
| `server.py` | Quick-start Python HTTP server |
| `README.md` | Setup instructions for adding new projects |

**Design decisions:**
- Dark theme with gradient accents (indigo → purple → pink)
- Floating orbs + noise texture background
- Sticky glassmorphism navbar
- Scroll-reveal animations
- Animated stat counters
- 2-column project grid on desktop, single column on mobile

---

## 2. Project 1 — Yingzao Fashi

**Prompt:**
> Generate a "Yingzao Fashi" (Building Standards) disassembly animation based on a photo of an ancient building. Identify building type and structural components (dougong, columns, beams, purlins, rafters). Generate a Three.js 3D model demonstrating assembly in traditional construction order. Component hover labels. Age erosion slider. X-ray/transparent mode for viewing mortise-and-tenon joints. Output a single HTML file.

**Path:** `/yingzao-fashi/index.html`  
**Tech:** Three.js (r128), OrbitControls

**Features built:**
- 3D timber hall model with columns, beams, dougong brackets, purlins, rafters, roof tiles
- Assembly/disassembly slider (0–100%) with construction sequence highlighting
- Age/weathering slider (wood graying, roughness increase)
- X-ray mode (makes structural elements transparent)
- Exploded view mode
- Auto-rotation toggle
- Component hover tooltips with name + function
- Construction step progress indicator
- Photo upload UI (mock analysis)

---

## 3. Project 2 — Neon Drift

**Prompt:**
> Make a small minigame similar to some space shooter but make it look futuristic have lots of physics effects and make it look flashy

**Path:** `/space-shooter/index.html`  
Tech: Vanilla Canvas 2D (no libraries)

**Features built:**
- WASD/Arrow movement with boost (Space)
- Mouse aim + LMB shoot / RMB homing missiles
- Particle explosion system with decay
- Screen shake on damage/kills
- Combo system (multi-shot at high combo)
- 3 enemy types: Drones (rush), Hunters (orbit + shoot), Tanks (slow + burst)
- Wave-based spawning
- Enemy bullets + body collision
- Starfield background with parallax
- Nebula clouds
- Asteroid debris with rotation
- Score + health UI
- Start / Game Over screens with high score (localStorage)

---

## 4. Project 3 — Voxel World

**Prompt:**
> Make a small 3d mini game where i can walk around link minecraft where the world is procedurally generated and there is a basic crafting system

**Path:** `/voxel-world/index.html`  
**Tech:** Three.js (r128), Pointer Lock Controls, Simplex Noise

**Features built:**
- First-person movement (WASD) + jump (Space)
- Procedural terrain generation with 3-octave Simplex Noise
- Biomes: forest (trees), desert (sand)
- Chunk-based rendering (16×64×16 blocks, 4-chunk render distance)
- Block types: grass, dirt, stone, wood, leaves, sand, water, cobblestone, planks, glass, glowstone
- Block mining (LMB) and placing (RMB)
- Physics with collision detection
- Crafting system (E key) with recipes:
  - Stone → Cobblestone
  - Wood → Planks (×4)
  - Sand → Glass
  - Stone + Sand → Glowstone
- Hotbar with 8 slots (1–8 keys)
- Crosshair + debug panel (FPS, XYZ, chunk coords)

---

## 5. Domain + SSL Setup

Configured nginx + Let's Encrypt for `kimi.boxmining.one`:

```bash
# nginx config installed to /etc/nginx/sites-available/kimi.boxmining.one
# SSL cert obtained via certbot
# HTTP → HTTPS redirect enabled
# gzip + cache headers for static assets
```

**Verification:** All paths return HTTP 200 via HTTPS.

---

## 6. Main Page Redesign

Redesigned `index.html` + `style.css` with:
- Animated gradient orbs background
- "Built with Kimi K2.6" hero tag
- Massive gradient-text headline
- Two CTA buttons (Explore Projects, Blog link)
- Kimi K2.6 section with 4 animated stat counters
- 4 feature cards with SVG icons (Long-Horizon Coding, Agent Swarms, Proactive Agents, Coding-Driven Design)
- Scroll-reveal IntersectionObserver
- Navbar background transition on scroll

---

## 7. Project 4 — Kanban Board

**Prompt:**
> make a working kanban system to track project development and make it look nice, clean and professional

**Path:** `/kanban/index.html`  
**Tech:** Vanilla JS, localStorage, HTML5 Drag & Drop API

**Features built:**
- 5 columns: Backlog, To Do, In Progress, Review, Done
- Drag-and-drop between columns
- Add/Edit/Delete tasks via modal
- Task properties: title, description, priority (High/Medium/Low), tags, assignee
- Priority color indicators
- Demo data pre-loaded (9 tasks)
- Persistent storage via localStorage
- Responsive horizontal-scroll board layout

---

## 8. Project 5 — Crypto Intelligence Dashboard

**Prompt:**
> make an intelligence dashboard for crypto- use as many publicly available data sources as possible - make it so i can click into each coin and see the prices and price data.

**Path:** `/crypto-dashboard/index.html`  
**Tech:** Chart.js, CoinGecko API

**Features built:**
- Global stats bar (market cap, volume, BTC/ETH dominance, active cryptos, markets)
- 100 top coins via CoinGecko with sparkline charts
- Search by name/symbol
- Sort by market cap, price, volume, 24h change
- Click coin → detail modal with:
  - Interactive Chart.js price chart
  - Timeframe selector: 24H / 7D / 30D / 90D / 1Y
  - Market cap, volume, supply, ATH/ATL stats
  - Coin description
- Auto-refresh every 60 seconds

---

## 9. Prompts Page

Created `/prompts/index.html` showing the exact prompts used for each project:
- 5 prompt cards with project emoji, title, tech tags
- Full prompt text preserved (including bullet lists)
- Links back to each project
- Added "Prompts" link to main navbar

---

## 10. Project 6 — World Monitor

**Prompt:**
> Project 6- can you make a world monitor dashboard - since you're kimi get your live data for stocks and world intelligence and make me a super dashboard for this information

**Path:** `/world-monitor/index.html`  
**Tech:** Chart.js, multiple public APIs

**Data sources:**
| Source | Data |
|--------|------|
| Yahoo Finance (via allorigins) | Indices, stocks, commodities, treasury yields |
| CoinGecko API | BTC, ETH, SOL prices |
| exchangerate-api.com | EUR/USD, GBP/USD, USD/JPY, USD/CNY, AUD/USD, USD/CAD |
| Open-Meteo API | Weather for NYC, London, Tokyo, Singapore |
| Hacker News API | Tech intelligence news feed |

**Dashboard panels:**
- 7 world clocks with market open/closed/pre-market status
- Scrolling ticker tape of global indices
- 9 index cards with sparkline charts (S&P, NASDAQ, Dow, Russell, VIX, FTSE, DAX, Nikkei, Hang Seng)
- Equities: AAPL, MSFT, NVDA, GOOGL, AMZN, META, TSLA, AMD, JPM, V
- Commodities: Gold, Silver, WTI, Brent, Natural Gas, Copper
- Forex rates
- Market sentiment gauge with animated needle (calculated from S&P + VIX)
- Treasury yields: 3M, 5Y, 10Y, 30Y
- Crypto panel (BTC, ETH, SOL)
- Weather grid
- S&P 500 intraday Chart.js chart (5-day, 15-min)
- Tech intelligence news feed

Auto-refreshes every 2 minutes. Scanline overlay for command-center aesthetic.

---

## Final Project Structure

```
kimi/
├── index.html              # Main showcase
├── style.css               # Shared theme
├── app.js                  # Project registry
├── server.py               # Dev server (optional, nginx handles prod)
├── README.md
│
├── yingzao-fashi/
│   └── index.html          # Project 1: 3D Architecture
├── space-shooter/
│   └── index.html          # Project 2: Space Shooter
├── voxel-world/
│   └── index.html          # Project 3: Voxel Sandbox
├── kanban/
│   └── index.html          # Project 4: Kanban Board
├── crypto-dashboard/
│   └── index.html          # Project 5: Crypto Dashboard
├── world-monitor/
│   └── index.html          # Project 6: World Monitor
└── prompts/
    └── index.html          # Prompts archive
```

---

## Live URLs

| Page | URL |
|------|-----|
| Showcase | https://kimi.boxmining.one/ |
| Yingzao Fashi | https://kimi.boxmining.one/yingzao-fashi/ |
| Neon Drift | https://kimi.boxmining.one/space-shooter/ |
| Voxel World | https://kimi.boxmining.one/voxel-world/ |
| Kanban Board | https://kimi.boxmining.one/kanban/ |
| Crypto Intelligence | https://kimi.boxmining.one/crypto-dashboard/ |
| World Monitor | https://kimi.boxmining.one/world-monitor/ |
| Prompts | https://kimi.boxmining.one/prompts/ |

---

# Session 2 — Multi-Model Expansion
**Date:** 2026-05-29
**Added model:** Claude Opus 4.8 (released 2026-05-28)

## Goal

Adapt the single-model (Kimi K2.6) showcase into a **multi-model** comparison: run the same
prompts through additional frontier models and compare side by side.

## What changed

**New folder `opus-4-8/`** — Claude Opus 4.8 builds of all 7 example prompts, each a
self-contained `index.html`, generated in parallel by a team of 7 Opus subagents:

| Project | Path | Tech | Notable |
|---------|------|------|---------|
| Yingzao Fashi | `opus-4-8/yingzao-fashi/` | Three.js r128 | Modeled 5×3-bay diàntáng, true construction-order assembly, weathering, X-ray tenon markers |
| Neon Drift | `opus-4-8/space-shooter/` | Canvas 2D | Neon shooter with physics juice, particles, waves |
| Voxel World ("Voxelcraft") | `opus-4-8/voxel-world/` | Three.js r128 | Merged-face meshing, DDA raycast mining, swept AABB collision, 6 crafting recipes |
| Kanban ("Flowboard") | `opus-4-8/kanban/` | Vanilla JS | DnD with in-column reorder, search/filter, progress bar, localStorage |
| Crypto ("Orbital") | `opus-4-8/crypto-dashboard/` | Chart.js + CoinGecko | Sortable table, trending rail, Fear & Greed gauge, robust rate-limit handling |
| World Monitor | `opus-4-8/world-monitor/` | Chart.js + public APIs | Command-center dashboard |
| Pelican on a Bicycle | `opus-4-8/pelican-bicycle/` | Inline SVG + CSS | Profile pelican, synced crank/leg rig, beach scene |

**Site made multi-model:**
- `app.js` refactored into a `models` registry (per-model benchmarks, feature cards, hero copy)
  plus a `projects` registry where each project maps a `folder` path per model.
- A page-level **model switch** (segmented control in the Models section) re-renders the
  benchmark stats, feature cards, hero text, and re-points every project card. Selection
  persists in `localStorage`.
- Hero / about / footer copy made model-neutral.
- `prompts/index.html` now links each prompt to **both** the Kimi K2.6 and Opus 4.8 build, and
  the previously-missing World Monitor prompt card was added.

## Claude Opus 4.8 — key benchmarks (added to site)

| Benchmark | Score |
|-----------|-------|
| SWE-bench Verified | 88.6% |
| Terminal-Bench 2.1 | 74.6% |
| SWE-bench Pro | 69.2% |
| GPQA Diamond | 93.6% |
| Online-Mind2Web | 84% |

New features highlighted: **Dynamic Workflows** (Claude Code fans out to hundreds of parallel
subagents), **Effort Control** slider, and ~3× cheaper Fast Mode. Wins six of seven major
benchmarks at launch.
Source: <https://www.anthropic.com/news/claude-opus-4-8>
