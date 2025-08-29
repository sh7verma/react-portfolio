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

// ✨ Dynamic GitHub Portfolio Cards
async function loadPortfolioRepos() {
  const username = "sh7verma";
  const projectsDiv = document.getElementById("projects");
  if (!projectsDiv) return;

  projectsDiv.innerHTML = '<p>Loading projects...</p>';

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const repos = await res.json();
    const portfolioRepos = repos.filter(r => r.topics && r.topics.includes("portfolio"));

    if (!portfolioRepos.length) {
      projectsDiv.innerHTML = '<p>No portfolio projects found.</p>';
      return;
    }

    projectsDiv.innerHTML = '';
    portfolioRepos.forEach(repo => {
      // Try preview.png in repo root
      const previewUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/preview.png`;
      const card = document.createElement('article');
      card.className = 'card';

      card.innerHTML = `
        <div class="card-head">
          <h3>${repo.name}</h3>
        </div>
        <p>${repo.description || ''}</p>
        <div class="stack">
          ${(repo.topics || []).map(t => `<span class="badge">${t}</span>`).join('')}
        </div>
        <div class="actions">
          <a class="btn small" href="${repo.html_url}" target="_blank" rel="noreferrer" aria-label="View code for ${repo.name}">View Code</a>
        </div>
        <div class="project-img">
          <img src="${previewUrl}" alt="Screenshot of ${repo.name}" loading="lazy" onerror="this.style.display='none'">
        </div>
      `;
      projectsDiv.appendChild(card);
    });
  } catch (e) {
    projectsDiv.innerHTML = '<p>Could not load projects.</p>';
  }
}
window.addEventListener('DOMContentLoaded', loadPortfolioRepos);

// Featured Portfolio Loader
async function renderFeaturedPortfolio() {
  const username = "sh7verma";
  const projectsDiv = document.getElementById("projects");
  if (!projectsDiv) return;

  // Author bio section
  projectsDiv.innerHTML = `
    <section class="author-bio">
      <img src="assets/og-image.webp" alt="Shubham Verma profile photo" class="author-photo" />
      <div>
        <h2>Shubham Verma</h2>
        <p class="author-title">Senior Android Developer</p>
        <p class="author-skills">
          <strong>Skills:</strong> Kotlin, Jetpack Compose, Hilt, Coroutines, Firebase, TFLite, ONNX, MVVM, ExoPlayer, Maps API
        </p>
        <p class="author-contact">
          <strong>Contact:</strong>
          <a href="mailto:shubham.verma740@gmail.com">shubham.verma740@gmail.com</a> ·
          <a href="https://www.linkedin.com/in/shubham-verma-670818173/" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
    <div class="projects-grid"></div>
  `;

  const grid = projectsDiv.querySelector('.projects-grid');
  grid.innerHTML = '<p>Loading projects...</p>';

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const repos = await res.json();
    const portfolioRepos = repos.filter(r => r.topics && r.topics.includes("portfolio"));

    if (!portfolioRepos.length) {
      grid.innerHTML = '<p>No portfolio projects found.</p>';
      return;
    }

    grid.innerHTML = '';
    for (const repo of portfolioRepos) {
      // Try preview.png in repo root
      const previewUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/preview.png`;

      // Description fallback: parse first paragraph of README.md if description missing
      let description = repo.description || '';
      if (!description) {
        try {
          const readmeRes = await fetch(`https://raw.githubusercontent.com/${username}/${repo.name}/main/README.md`);
          if (readmeRes.ok) {
            const readmeText = await readmeRes.text();
            const firstPara = readmeText.split(/\r?\n\r?\n/)[0].replace(/[#>*`]/g, '').trim();
            if (firstPara) description = firstPara;
          }
        } catch {}
      }

      // Create card
      const card = document.createElement('div');
      card.className = 'project-card';

      // Try loading preview image, fallback to no image
      let imgTag = `<img src="${previewUrl}" alt="Preview of ${repo.name}" class="project-preview" loading="lazy" onerror="this.style.display='none'">`;

      card.innerHTML = `
        ${imgTag}
        <h3>${repo.name}</h3>
        <p>${description}</p>
        <div class="tags">
          ${(repo.topics || []).map(t => `<span>${t}</span>`).join('')}
        </div>
        <a class="btn" href="${repo.html_url}" target="_blank" rel="noreferrer">View Code</a>
      `;
      grid.appendChild(card);
    }
  } catch (e) {
    grid.innerHTML = '<p>Could not load projects.</p>';
  }
}

// Call featured portfolio loader on DOMContentLoaded
window.addEventListener('DOMContentLoaded', renderFeaturedPortfolio);

// Add aria-labels to interactive elements
document.getElementById('themeToggle').setAttribute('aria-label', 'Toggle theme');

// Scroll-to-top button functionality
const scrollBtn = document.getElementById('scrollToTop');
if (scrollBtn) {
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
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
