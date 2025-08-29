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

  
  const grid = projectsDiv.querySelector('.projects-grid');
  grid.innerHTML = '<p>Loading projects...</p>';

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const repos = await res.json();
    const portfolioRepos = repos.filter(r => r.topics && r.topics.includes("portfolio"));

    // Add static projects
    const staticProjects = [
      {
        name: "Smart Payment Reconciliation",
        description: "Automated reconciliation workflow for fintech dashboards, reducing manual work by 70% and improving accuracy.",
        topics: ["Kotlin", "Coroutines", "Room", "MySQL", "FastAPI"]
      },
      {
        name: "Offline Caption Generator",
        description: "On-device image captioning using TFLite, enabling offline RAG-powered descriptions for quick results without internet.",
        topics: ["TFLite", "ONNX", "MVVM"]
      },
      {
        name: "Enterprise Video Calling UX",
        description: "Built call integration with custom UI using ConnectionService and Chime SDK, improving UX consistency.",
        topics: ["Compose", "WebRTC", "Chime SDK", "Foreground Service"]
      },
      {
        name: "Loan Collection Dashboard",
        description: "Android app for field agents to log collection activity and sync offline, improving agent productivity.",
        topics: ["Kotlin", "WorkManager", "Room", "MVVM"]
      },
      {
        name: "YouTube Shorts Automator",
        description: "Python + JS pipeline to auto-generate titles/descriptions with GPT, and schedule YouTube Shorts uploads.",
        topics: ["GPT", "YouTube API", "Automation", "Python"]
      }
    ];

    const allProjects = [...portfolioRepos, ...staticProjects];
    if (!allProjects.length) {
      grid.innerHTML = '<p>No portfolio projects found.</p>';
      return;
    }

    grid.innerHTML = '';
    for (const repo of allProjects) {
      const previewUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/preview.png`;
      const card = document.createElement('div');
      card.className = 'project-card';

      const imgTag = `<img src="${previewUrl}" alt="Preview of ${repo.name}" class="project-preview" loading="lazy" onerror="this.style.display='none'">`;

      card.innerHTML = `
        ${imgTag}
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description provided.'}</p>
        <div class="tags">
          ${(repo.topics || []).map(t => `<span>${t}</span>`).join('')}
        </div>
      `;
      grid.appendChild(card);
    }
  } catch (e) {
    grid.innerHTML = '<p>Could not load projects.</p>';
    console.error(e);
  }
}

window.addEventListener('DOMContentLoaded', renderFeaturedPortfolio);

// Accessibility: ARIA labels
document.getElementById('themeToggle').setAttribute('aria-label', 'Toggle theme');

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
