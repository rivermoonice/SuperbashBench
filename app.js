// ====================================================================
// MODEL REGISTRY — each model drives the benchmark + feature sections
// ====================================================================
const ICONS = {
    spark: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
    layers: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
    info: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
    wand: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    cpu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
    gauge: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0-9-9"></path><path d="M3 12h2"></path><path d="m12 12 4-3"></path></svg>',
    network: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle><circle cx="19" cy="19" r="2"></circle><path d="M12 7v4M12 11l-6 6M12 11l6 6"></path></svg>',
};

const models = {
    'kimi-k2-6': {
        name: 'Kimi K2.6',
        tag: 'Kimi K2.6',
        blogUrl: 'https://www.kimi.com/blog/kimi-k2-6',
        blogLabel: 'Learn about K2.6 →',
        heroSubtitle: 'Kimi K2.6 &mdash; the state-of-the-art open-source coding model.',
        badge: 'Kimi K2.6',
        heading: 'Advancing Open-Source Coding',
        subtitle: 'State-of-the-art coding, long-horizon execution, and agent swarm capabilities.',
        stats: [
            { target: 66.7, suffix: '%', label: 'Terminal-Bench 2.0' },
            { target: 58.6, suffix: '%', label: 'SWE-Bench Pro' },
            { target: 300, suffix: '+', label: 'Agents in Swarm' },
            { target: 96.6, suffix: '%', label: 'Tool Invocation' },
        ],
        features: [
            { icon: ICONS.spark, title: 'Long-Horizon Coding', desc: 'Deployed Qwen3.5-0.8B on Mac using Zig, optimizing throughput from ~15 to ~193 tokens/sec across 4,000+ tool calls and 12 hours of continuous execution.' },
            { icon: ICONS.layers, title: 'Agent Swarms', desc: 'Scales to 300 sub-agents executing 4,000+ coordinated steps simultaneously. Converts documents into reusable Skills.' },
            { icon: ICONS.info, title: 'Proactive Agents', desc: 'Powers 24/7 autonomous agents. Demonstrated a 5-day autonomous engineering run with persistent context and multi-threaded task handling.' },
            { icon: ICONS.wand, title: 'Coding-Driven Design', desc: 'Turns simple prompts into complete front-end interfaces with structured layouts, interactive elements, rich animations, and scroll-triggered effects.' },
        ],
    },
    'opus-4-8': {
        name: 'Claude Opus 4.8',
        tag: 'Claude Opus 4.8',
        blogUrl: 'https://www.anthropic.com/news/claude-opus-4-8',
        blogLabel: 'Learn about Opus 4.8 →',
        heroSubtitle: 'Claude Opus 4.8 &mdash; Anthropic’s frontier model for coding and agents.',
        badge: 'Claude Opus 4.8',
        heading: 'Frontier Intelligence & Agentic Coding',
        subtitle: 'Released May 28, 2026 — Anthropic’s most capable model for coding, long-horizon agents, and reasoning.',
        stats: [
            { target: 88.6, suffix: '%', label: 'SWE-bench Verified' },
            { target: 74.6, suffix: '%', label: 'Terminal-Bench 2.1' },
            { target: 69.2, suffix: '%', label: 'SWE-bench Pro' },
            { target: 93.6, suffix: '%', label: 'GPQA Diamond' },
        ],
        features: [
            { icon: ICONS.network, title: 'Dynamic Workflows', desc: 'Claude Code plans the work, then fans out to hundreds of parallel subagents — built for large-scale jobs like whole-codebase migrations.' },
            { icon: ICONS.cpu, title: 'Frontier Coding', desc: '88.6% on SWE-bench Verified and 74.6% on Terminal-Bench 2.1, winning six of seven major benchmarks at launch.' },
            { icon: ICONS.gauge, title: 'Effort Control', desc: 'A new effort slider trades depth for speed and cost, and Fast Mode is now roughly 3× cheaper than on previous models.' },
            { icon: ICONS.wand, title: 'Agentic Reasoning', desc: '84% on Online-Mind2Web and the only model to complete every Super-Agent case end-to-end — strong long-horizon tool use.' },
        ],
    },
    'gpt-5-5': {
        name: 'GPT 5.5',
        tag: 'GPT 5.5',
        blogUrl: 'https://openai.com',
        blogLabel: 'Learn about OpenAI →',
        heroSubtitle: 'GPT 5.5 &mdash; OpenAI-labeled builds created for this local showcase.',
        badge: 'GPT 5.5',
        heading: 'Agent-Team Build Lane',
        subtitle: 'A GPT 5.5-labeled set of the same seven prompts, added as a third comparison track in this workspace.',
        stats: [
            { target: 7, suffix: '', label: 'Projects Built' },
            { target: 100, suffix: '%', label: 'Prompt Coverage' },
            { target: 3, suffix: '', label: 'Model Lanes' },
            { target: 1, suffix: '', label: 'Agent Team Run' },
        ],
        features: [
            { icon: ICONS.network, title: 'Agent-Team Assembly', desc: 'The project set is split into coordinated work scopes, then integrated into the central showcase registry.' },
            { icon: ICONS.layers, title: 'Standalone Builds', desc: 'Every GPT 5.5 project keeps the single-file HTML format used by the existing benchmark builds.' },
            { icon: ICONS.wand, title: 'Visible Attribution', desc: 'Each project includes a clear GPT 5.5 label inside the experience, plus links from the prompt archive.' },
            { icon: ICONS.gauge, title: 'Full Comparison Track', desc: 'The page-level switch re-points every project card to the GPT 5.5 folder for direct side-by-side review.' },
        ],
    },
};

const MODEL_ORDER = ['kimi-k2-6', 'opus-4-8', 'gpt-5-5'];
const DEFAULT_MODEL = 'kimi-k2-6';

// ====================================================================
// PROJECTS — same prompts, one build per model
// ====================================================================
const projects = [
    {
        id: 'yingzao-fashi',
        name: 'Yingzao Fashi',
        description: 'Interactive 3D disassembly of Chinese ancient timber architecture. Features assembly animation, weathering effects, and X-ray structural view.',
        icon: '🏯',
        folder: { 'kimi-k2-6': './yingzao-fashi', 'opus-4-8': './opus-4-8/yingzao-fashi', 'gpt-5-5': './gpt-5-5/yingzao-fashi' },
    },
    {
        id: 'space-shooter',
        name: 'Neon Drift',
        description: 'Futuristic space shooter with physics-based movement, particle effects, combo system, and wave-based enemy spawning.',
        icon: '🚀',
        folder: { 'kimi-k2-6': './space-shooter', 'opus-4-8': './opus-4-8/space-shooter', 'gpt-5-5': './gpt-5-5/space-shooter' },
    },
    {
        id: 'voxel-world',
        name: 'Voxel World',
        description: 'Minecraft-inspired sandbox with procedural terrain generation, block mining/placing, and basic crafting system.',
        icon: '🧊',
        folder: { 'kimi-k2-6': './voxel-world', 'opus-4-8': './opus-4-8/voxel-world', 'gpt-5-5': './gpt-5-5/voxel-world' },
    },
    {
        id: 'kanban',
        name: 'Kanban Board',
        description: 'Professional drag-and-drop kanban board for project management. Features task priorities, tags, assignees, and persistent localStorage.',
        icon: '📋',
        folder: { 'kimi-k2-6': './kanban', 'opus-4-8': './opus-4-8/kanban', 'gpt-5-5': './gpt-5-5/kanban' },
    },
    {
        id: 'crypto-dashboard',
        name: 'Crypto Intelligence',
        description: 'Real-time cryptocurrency dashboard with live prices, sparklines, market stats, and interactive Chart.js price charts via CoinGecko API.',
        icon: '₿',
        folder: { 'kimi-k2-6': './crypto-dashboard', 'opus-4-8': './opus-4-8/crypto-dashboard', 'gpt-5-5': './gpt-5-5/crypto-dashboard' },
    },
    {
        id: 'world-monitor',
        name: 'World Monitor',
        description: 'Command-center style intelligence dashboard aggregating global stocks, indices, commodities, forex, crypto, treasury yields, weather, and news feeds.',
        icon: '🌐',
        folder: { 'kimi-k2-6': './world-monitor', 'opus-4-8': './opus-4-8/world-monitor', 'gpt-5-5': './gpt-5-5/world-monitor' },
    },
    {
        id: 'pelican-bicycle',
        name: 'Pelican on a Bicycle',
        description: 'A whimsical SVG illustration of a pelican wearing a sailor cap and riding a bicycle along a sunny road. Pure vector art with CSS animations.',
        icon: '🐦',
        folder: { 'kimi-k2-6': './pelican-bicycle', 'opus-4-8': './opus-4-8/pelican-bicycle', 'gpt-5-5': './gpt-5-5/pelican-bicycle' },
    },
];

// ====================================================================
// STATE
// ====================================================================
let currentModel = DEFAULT_MODEL;

function setModel(modelId, animate = true) {
    if (!models[modelId]) modelId = DEFAULT_MODEL;
    currentModel = modelId;
    try { localStorage.setItem('showcase-model', modelId); } catch (e) {}
    renderSwitch();
    renderModel(animate);
    renderProjects();
}

// ====================================================================
// RENDERERS
// ====================================================================
function renderSwitch() {
    const wrap = document.getElementById('modelSwitch');
    if (!wrap) return;
    wrap.innerHTML = MODEL_ORDER.map(id => `
        <button class="model-switch-btn ${id === currentModel ? 'active' : ''}" data-model="${id}">
            ${models[id].name}
        </button>
    `).join('');
    wrap.querySelectorAll('.model-switch-btn').forEach(btn => {
        btn.addEventListener('click', () => setModel(btn.dataset.model));
    });
}

function renderModel(animate = true) {
    const m = models[currentModel];

    // Hero
    setText('heroModelName', m.tag);
    setHTML('heroModelHighlight', m.heroSubtitle);
    const blog = document.getElementById('modelBlogLink');
    if (blog) { blog.href = m.blogUrl; blog.textContent = m.blogLabel; }

    // Model section header
    setText('modelBadge', m.badge);
    setText('modelHeading', m.heading);
    setText('modelSubtitle', m.subtitle);

    // Stats
    const statsRow = document.getElementById('statsRow');
    if (statsRow) {
        statsRow.innerHTML = m.stats.map(s => `
            <div class="stat-card">
                <div class="stat-number" data-target="${s.target}">0</div>
                <div class="stat-suffix">${s.suffix}</div>
                <div class="stat-label">${s.label}</div>
            </div>
        `).join('');
        if (animate) animateCounters();
        else statsRow.querySelectorAll('.stat-number').forEach(n => {
            const t = parseFloat(n.dataset.target);
            n.textContent = Number.isInteger(t) ? Math.floor(t).toLocaleString() : t.toFixed(1);
        });
    }

    // Features
    const fg = document.getElementById('featuresGrid');
    if (fg) {
        fg.innerHTML = m.features.map(f => `
            <div class="feature-card">
                <div class="feature-icon">${f.icon}</div>
                <h3>${f.title}</h3>
                <p>${f.desc}</p>
            </div>
        `).join('');
    }
}

function createProjectCard(project, index) {
    const href = project.folder[currentModel] || `./${project.id}`;
    return `
        <a class="project-card" href="${href}" target="_blank" style="animation: fadeUp 0.5s ease-out ${0.05 + index * 0.07}s both">
            <span class="project-emoji">${project.icon}</span>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-meta">
                <span>HTML / CSS / JS</span>
                <span class="project-arrow">→</span>
            </div>
        </a>
    `;
}

function renderProjects() {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;

    if (projects.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📁</div>
                <h3>No projects yet</h3>
                <p>Add projects to the <code>projects</code> array in <code>app.js</code>.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = projects.map((p, i) => createProjectCard(p, i)).join('');

    const note = document.getElementById('projectsSubtitle');
    if (note) note.textContent = `Same prompts, built with ${models[currentModel].name}`;
}

// ====================================================================
// HELPERS
// ====================================================================
function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}
function setHTML(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
}

// Animated counter for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        const isInt = Number.isInteger(target);
        const duration = 1500;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            counter.textContent = isInt ? Math.floor(current).toLocaleString() : current.toFixed(1);
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    });
}

// Scroll reveal observer
function setupReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.querySelector('.stats-row')) {
                    animateCounters();
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.model-section, .projects, .about').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// Navbar scroll effect
function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(3, 3, 5, 0.85)';
        } else {
            navbar.style.background = 'rgba(3, 3, 5, 0.6)';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let saved = DEFAULT_MODEL;
    try { saved = localStorage.getItem('showcase-model') || DEFAULT_MODEL; } catch (e) {}
    currentModel = models[saved] ? saved : DEFAULT_MODEL;

    renderSwitch();
    renderModel(false); // counters animate via reveal observer
    renderProjects();
    setupReveal();
    setupNavbar();
});
