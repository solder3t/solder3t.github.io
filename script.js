/* ═══════════════════════════════════════
   Solder3t — Interactive Scripts v2
   ═══════════════════════════════════════ */

// ── App Data ──
const apps = [
  {
    name: "Musaic Player",
    category: "Music & Audio · Android Native",
    description: "High-fidelity offline music player with AI-powered lyric romanization, smart playlists, and a gorgeous Material You interface. No ads, no accounts, no tracking.",
    appId: "com.musaic.mp",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.musaic.mp",
    githubUrl: "https://github.com/solder3t/musaic-player",
    status: "live", // "rc" or "live"
    statusText: "Live on Google Play",
    badge: "v2.0 Production",
    highlights: ["100% Offline First", "Zero Trackers / Ads", "Bit-Perfect Audio", "Material You 3"],
    tags: ["Kotlin", "Jetpack Compose", "ExoPlayer", "Room DB"],
    iconSvg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="url(#musaicGrad)"/>
      <path d="M16 26V14l12-3v12" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="13" cy="26" r="3" fill="white"/>
      <circle cx="25" cy="23" r="3" fill="white"/>
      <defs>
        <linearGradient id="musaicGrad" x1="0" y1="0" x2="40" y2="40">
          <stop stop-color="#6366f1"/>
          <stop offset="0.5" stop-color="#8b5cf6"/>
          <stop offset="1" stop-color="#ec4899"/>
        </linearGradient>
      </defs>
    </svg>`
  },
  {
    name: "Linux Setup",
    category: "System Utilities & Config",
    description: "Automated developer workspace bootstrapping utility for Linux. Installs essential packages, dev tools, modern shells, and custom dotfiles with an interactive TUI installer.",
    appId: "solder3t/linux-setup",
    playStoreUrl: "",
    githubUrl: "https://github.com/solder3t/linux-setup",
    status: "live",
    statusText: "Ready for use",
    badge: "CLI Utility",
    highlights: ["Interactive TUI", "Arch & Debian", "One-Line Run", "Custom Dotfiles"],
    tags: ["Bash", "Shell Scripting", "Linux CLI", "Automation"],
    iconSvg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="url(#linuxGrad)"/>
      <path d="M12 15l6 5-6 5" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 25h8" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round"/>
      <defs>
        <linearGradient id="linuxGrad" x1="0" y1="0" x2="40" y2="40">
          <stop stop-color="#0f172a"/>
          <stop offset="1" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
    </svg>`
  }
];

// ── Render Apps ──
function renderApps() {
  const grid = document.getElementById("app-grid");
  if (!grid) return;

  apps.forEach((app, index) => {
    const card = document.createElement("article");
    card.className = "app-card";
    card.setAttribute("data-card-index", index);

    const statusClass = app.status === "live" ? "app-card-status--live" : "app-card-status--rc";

    let cta = "";
    if (app.playStoreUrl) {
      cta = `<a class="btn btn--primary" href="${app.playStoreUrl}" target="_blank" rel="noreferrer">
               <span>Get on Google Play</span>
               <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </a>`;
    } else if (app.githubUrl) {
      cta = `<a class="btn btn--primary" href="${app.githubUrl}" target="_blank" rel="noreferrer">
               <span>Run Installer</span>
               <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </a>`;
    } else {
      cta = `<span class="btn btn--disabled">Coming Soon</span>`;
    }

    const githubBtn = (app.githubUrl && app.playStoreUrl)
      ? `<a class="btn btn--ghost" href="${app.githubUrl}" target="_blank" rel="noreferrer">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
           <span>Source</span>
         </a>`
      : "";

    // Feature highlights chips
    const highlightsHtml = app.highlights && app.highlights.length
      ? `<div class="app-card-highlights">
           ${app.highlights.map(h => `
             <span class="highlight-chip">
               <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5l-7 7L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
               ${h}
             </span>
           `).join("")}
         </div>`
      : "";

    // Build tech tags HTML
    const tagsHtml = app.tags && app.tags.length
      ? `<div class="app-card-tags">${app.tags.map(t => `<span class="app-tag">${t}</span>`).join("")}</div>`
      : "";

    card.innerHTML = `
      <div class="app-card-header">
        <div class="app-card-icon-wrap">
          ${app.iconSvg}
        </div>
        <div class="app-card-header-info">
          <div class="app-card-badge-row">
            <span class="app-card-meta">${app.category}</span>
            <span class="app-version-badge">${app.badge}</span>
          </div>
          <h3 class="app-card-title">${app.name}</h3>
        </div>
      </div>

      <p class="app-card-desc">${app.description}</p>

      ${highlightsHtml}

      <div class="app-card-footer-meta">
        <span class="app-card-package"><code>${app.appId}</code></span>
        <span class="app-card-status ${statusClass}">
          <span class="hero-badge-dot"></span>
          ${app.statusText}
        </span>
      </div>

      <div class="app-card-actions">
        ${cta}
        ${githubBtn}
      </div>

      ${tagsHtml}
    `;
    grid.appendChild(card);
  });
}

// ── Language Color Map ──
const langColors = {
  "Kotlin": "#A97BFF",
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "Shell": "#89E051",
  "Python": "#3572A5",
  "HTML": "#E44D26",
  "CSS": "#563D7C",
  "Ruby": "#CC342D",
  "Go": "#00ADD8",
  "Rust": "#DEA584",
};

// ── Time Ago Helper ──
function timeAgo(dateStr) {
  if (!dateStr) return "";
  const now = new Date();
  const then = new Date(dateStr);
  const diffMs = now - then;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Updated today";
  if (diffDays === 1) return "Updated 1 day ago";
  if (diffDays < 30) return `Updated ${diffDays} days ago`;

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return "Updated 1 month ago";
  if (diffMonths < 12) return `Updated ${diffMonths} months ago`;

  const diffYears = Math.floor(diffMonths / 12);
  if (diffYears === 1) return "Updated 1 year ago";
  return `Updated ${diffYears} years ago`;
}

// ── Curated Fallback Projects (Rate limit & offline resilience) ──
const fallbackRepos = [
  {
    name: "musaic-player",
    description: "High-fidelity offline music player for Android with synced lyrics, AI romanization, and Material You design.",
    html_url: "https://github.com/solder3t/musaic-player",
    language: "Kotlin",
    stargazers_count: 12,
    updated_at: "2026-08-15T12:00:00Z"
  },
  {
    name: "linux-setup",
    description: "Automated developer workspace bootstrapping utility for Linux with an interactive TUI installer.",
    html_url: "https://github.com/solder3t/linux-setup",
    language: "Shell",
    stargazers_count: 5,
    updated_at: "2026-09-01T10:00:00Z"
  },
  {
    name: "solder3t.github.io",
    description: "Personal developer portfolio and project showcase with terminal utilities and privacy policies.",
    html_url: "https://github.com/solder3t/solder3t.github.io",
    language: "HTML",
    stargazers_count: 2,
    updated_at: "2026-10-17T03:55:00Z"
  }
];

function renderRepoCards(container, repos) {
  container.innerHTML = "";
  repos.forEach((repo) => {
    const card = document.createElement("article");
    card.className = "project-card";

    // Language indicator
    const langColor = repo.language ? (langColors[repo.language] || "#8a8a9a") : null;
    const langHtml = repo.language
      ? `<span class="project-lang">
           <span class="project-lang-dot" style="background:${langColor}"></span>
           ${repo.language}
         </span>`
      : "";

    // Star count
    const starsHtml = (repo.stargazers_count > 0)
      ? `<span class="project-stars">⭐ ${repo.stargazers_count}</span>`
      : "";

    // Last updated
    const updatedHtml = repo.updated_at
      ? `<span class="project-updated">${timeAgo(repo.updated_at)}</span>`
      : "";

    const metaHtml = (langHtml || starsHtml)
      ? `<div class="project-card-meta">${langHtml}${starsHtml}</div>`
      : "";

    card.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || "No description provided."}</p>
      ${metaHtml}
      ${updatedHtml ? `<p class="project-updated" style="margin-bottom:0.75rem">${timeAgo(repo.updated_at)}</p>` : ""}
      <a href="${repo.html_url}" target="_blank" rel="noreferrer">
        View repository
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 3H4a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-2M11 1h4v4M6 10l9-9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    `;
    container.appendChild(card);
  });
}

// ── GitHub Projects ──
async function loadGitHubProjects() {
  const container = document.getElementById("github-projects");
  if (!container) return;

  const CACHE_KEY = "solder3t_github_repos_v2";
  const CACHE_TIME_KEY = "solder3t_github_repos_time_v2";
  const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour cache

  // Check valid cache first to save rate limits
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
    if (cachedData && cachedTime && (Date.now() - Number(cachedTime) < CACHE_TTL_MS)) {
      const parsed = JSON.parse(cachedData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        renderRepoCards(container, parsed);
        return;
      }
    }
  } catch (e) {
    // localStorage not accessible or corrupted, continue to fetch
  }

  try {
    const response = await fetch("https://api.github.com/users/solder3t/repos?sort=updated&per_page=6");
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    const repos = Array.isArray(data) ? data : [];

    if (repos.length > 0) {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(repos));
        localStorage.setItem(CACHE_TIME_KEY, String(Date.now()));
      } catch (e) {}
      renderRepoCards(container, repos);
      return;
    }
  } catch (err) {
    console.warn("GitHub API rate limited or unreachable. Using fallback.", err);
  }

  // Fallback 1: use stale cached data if present
  try {
    const staleData = localStorage.getItem(CACHE_KEY);
    if (staleData) {
      const parsed = JSON.parse(staleData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        renderRepoCards(container, parsed);
        return;
      }
    }
  } catch (e) {}

  // Fallback 2: render curated fallback repos
  renderRepoCards(container, fallbackRepos);
}

// ── Scroll Reveal ──
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

  els.forEach((el) => observer.observe(el));
}

// ── Header Hide/Show on Scroll ──
function initHeaderScroll() {
  const header = document.getElementById("header");
  let lastY = 0;

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    if (currentY > lastY && currentY > 100) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
    lastY = currentY;
  }, { passive: true });
}

// ── Mobile Menu ──
function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

// ── Year ──
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ── Smooth Scroll for Anchor Links ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ── Copy Installer & Script Commands ──
function initCopyInstaller() {
  const toast = document.getElementById("toast");

  async function copyText(text, btnElement) {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);

      if (btnElement) {
        btnElement.classList.add("copied");
        const originalSvg = btnElement.innerHTML;
        btnElement.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        `;
        setTimeout(() => {
          btnElement.classList.remove("copied");
          btnElement.innerHTML = originalSvg;
        }, 2000);
      }

      if (toast) {
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2500);
      }
    } catch (err) {
      console.error("Failed to copy command: ", err);
    }
  }

  // Hero terminal copy button
  const copyBtn = document.getElementById("copyBtn");
  const commandText = document.getElementById("setupCommand");
  if (copyBtn && commandText) {
    copyBtn.addEventListener("click", () => copyText(commandText.innerText.trim(), copyBtn));
  }

  // Generic data-copy buttons (e.g. tools shelf)
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-copy");
      copyText(text, btn);
    });
  });
}

// ── Terminal Tabs Switching ──
function initTerminalTabs() {
  const tabs = document.querySelectorAll(".terminal-tab");
  const commandText = document.getElementById("setupCommand");
  const commentText = document.getElementById("setupComment");
  const terminalBody = document.querySelector(".terminal-body");

  if (!tabs.length || !commandText || !commentText || !terminalBody) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) return;

      // Remove active class and set aria-selected to false for all tabs
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      // Add active class and set aria-selected to true for the clicked tab
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      // Apply switching class for fade micro-animation
      terminalBody.classList.add("switching");

      setTimeout(() => {
        commandText.innerText = tab.getAttribute("data-cmd");
        commentText.innerText = tab.getAttribute("data-comment");
        terminalBody.classList.remove("switching");
      }, 150);
    });
  });
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  renderApps();
  loadGitHubProjects();
  initReveal();
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initCopyInstaller();
  initTerminalTabs();
  setYear();
});
