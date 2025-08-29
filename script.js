// Persisted theme toggle
(function(){
  const root = document.documentElement;
  const key = 'theme';
  const initial = localStorage.getItem(key) || 'dark';
  root.setAttribute('data-theme', initial);
  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current);
    localStorage.setItem(key, current);
  });
})();

// Featured Portfolio Loader
async function renderFeaturedPortfolio() {
  const username = "sh7verma";
  const projectsDiv = document.getElementById("projects");
  if (!projectsDiv) return;

  const grid = document.createElement('div');
  grid.className = 'projects-grid';
  projectsDiv.appendChild(grid);
  grid.innerHTML = '<p>Loading projects...</p>';

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const repos = await res.json();
    const portfolioRepos = repos.filter(r => r.topics && r.topics.includes("portfolio"));

    // Static projects to boost visibility
    const staticProjects = [
      {
        name: "Smart Payment Reconciliation",
        description: "Fintech tool for automatic ledger syncing with FastAPI and Room.",
        topics: ["Kotlin", "FastAPI", "Room"]
      },
      {
        name: "Offline Caption Generator",
        description: "TFLite-powered image captioning, fully offline.",
        topics: ["TFLite", "ONNX", "Jetpack Compose"]
      },
      {
        name: "Enterprise Video Calling UX",
        description: "Chime SDK + ConnectionService custom UI for seamless call integration.",
        topics: ["Chime", "Compose", "ForegroundService"]
      },
      {
        name: "Loan Collection Dashboard",
        description: "Offline-friendly Android app with WorkManager and Realm.",
        topics: ["Kotlin", "WorkManager", "Realm"]
      },
      {
        name: "YouTube Shorts Automator",
        description: "GPT-powered auto-titling & upload scheduler.",
        topics: ["GPT", "Python", "YouTube API"]
      }
    ];

    const allProjects = [...portfolioRepos, ...staticProjects];
    grid.innerHTML = '';

    for (const repo of allProjects) {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description provided.'}</p>
        <div class="tags">
          ${(repo.topics || []).map(t => `<span>${t}</span>`).join('')}
        </div>
      `;
      grid.appendChild(card);
    }

    if (!allProjects.length) {
      grid.innerHTML = '<p>No portfolio projects found.</p>';
    }
  } catch (e) {
    grid.innerHTML = '<p>Could not load projects.</p>';
    console.error(e);
  }
}

window.addEventListener('DOMContentLoaded', renderFeaturedPortfolio);

// Scroll-to-top button functionality
const scrollBtn = document.getElementById('scrollToTop');
if (scrollBtn) {
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.setAttribute('aria-label', `Scroll to section ${a.getAttribute('href').slice(1)}`);
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
