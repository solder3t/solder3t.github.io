const apps = [
  {
    name: "Tunes Media Player",
    category: "Music & Audio",
    description: "Offline-focused audio player with clean queue controls and fast browsing.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.tunes"
  },
  {
    name: "Solder Notes",
    category: "Productivity",
    description: "Lightweight notes app designed for speed and no-sign-in simplicity.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.soldernotes"
  }
];

function renderApps() {
  const grid = document.getElementById("app-grid");
  if (!grid) return;

  apps.forEach((app) => {
    const card = document.createElement("article");
    card.className = "app-card";
    card.innerHTML = `
      <p class="meta">${app.category}</p>
      <h3>${app.name}</h3>
      <p>${app.description}</p>
      <a class="btn btn-primary" href="${app.playStoreUrl}" target="_blank" rel="noreferrer">Play Store</a>
    `;
    grid.appendChild(card);
  });
}

async function loadGitHubProjects() {
  const container = document.getElementById("github-projects");
  if (!container) return;

  try {
    const response = await fetch("https://api.github.com/users/solder3t/repos?sort=updated&per_page=6");
    const data = await response.json();

    const repos = Array.isArray(data) ? data : [];

    if (!repos.length) {
      container.innerHTML = "<p class=\"note\">No public repositories found yet.</p>";
      return;
    }

    repos.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank" rel="noreferrer">View repository</a>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p class=\"note\">Could not load GitHub projects right now.</p>";
  }
}

function initRevealAnimation() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => observer.observe(el));
}

function setYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

renderApps();
loadGitHubProjects();
initRevealAnimation();
setYear();
