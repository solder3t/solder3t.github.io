/* ═══════════════════════════════════════
   Solder3t — Interactive Scripts
   ═══════════════════════════════════════ */

// ── App Data ──
const apps = [
  {
    name: "Musaic Player",
    category: "Music & Audio",
    description: "High-fidelity offline music player with AI-powered lyric romanization, smart playlists, and a gorgeous Material You interface. No ads, no accounts, no tracking.",
    appId: "com.musaic.mp",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.musaic.mp&pli=1",
    githubUrl: "https://github.com/solder3t/musaic-player",
    status: "live", // "rc" or "live"
    statusText: "Live on Google Play"
  }
];

// ── Render Apps ──
function renderApps() {
  const grid = document.getElementById("app-grid");
  if (!grid) return;

  apps.forEach((app) => {
    const card = document.createElement("article");
    card.className = "app-card";

    const statusClass = app.status === "live" ? "app-card-status--live" : "app-card-status--rc";
    const cta = app.playStoreUrl
      ? `<a class="btn btn--primary" href="${app.playStoreUrl}" target="_blank" rel="noreferrer">Play Store</a>`
      : `<span class="btn btn--disabled">Coming Soon</span>`;

    const githubBtn = app.githubUrl
      ? `<a class="btn btn--ghost" href="${app.githubUrl}" target="_blank" rel="noreferrer">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
           Source
         </a>`
      : "";

    card.innerHTML = `
      <p class="app-card-meta">${app.category}</p>
      <h3>${app.name}</h3>
      <p>${app.description}</p>
      <p class="app-card-package">${app.appId}</p>
      <span class="app-card-status ${statusClass}">
        <span class="hero-badge-dot"></span>
        ${app.statusText}
      </span>
      <div class="app-card-actions">
        ${cta}
        ${githubBtn}
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── GitHub Projects ──
async function loadGitHubProjects() {
  const container = document.getElementById("github-projects");
  if (!container) return;

  try {
    const response = await fetch("https://api.github.com/users/solder3t/repos?sort=updated&per_page=6");
    const data = await response.json();
    const repos = Array.isArray(data) ? data : [];

    if (!repos.length) {
      container.innerHTML = '<p style="color:var(--text-muted)">No public repositories yet.</p>';
      return;
    }

    repos.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank" rel="noreferrer">
          View repository
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 3H4a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-2M11 1h4v4M6 10l9-9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      `;
      container.appendChild(card);
    });
  } catch {
    container.innerHTML = '<p style="color:var(--text-muted)">Could not load projects right now.</p>';
  }
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

// ── Cursor Glow (Desktop) ──
function initCursorGlow() {
  const glow = document.querySelector(".cursor-glow");
  if (!glow || window.matchMedia("(max-width: 768px)").matches) return;

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.classList.add("active");
  });

  document.addEventListener("mouseleave", () => {
    glow.classList.remove("active");
  });

  function animate() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";
    requestAnimationFrame(animate);
  }
  animate();
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

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  renderApps();
  loadGitHubProjects();
  initReveal();
  initHeaderScroll();
  initCursorGlow();
  initMobileMenu();
  initSmoothScroll();
  setYear();
});
