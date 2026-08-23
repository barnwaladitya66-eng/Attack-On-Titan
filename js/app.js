// Attack on Titan Compendium - Core Application Controller
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSoundControls();
  initScrollObserver();
  initPageControllers();
});

// Scroll Trigger Animation Observer
function initScrollObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });

  window.reobserveScrollElements = () => {
    document.querySelectorAll('.reveal-on-scroll:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed)').forEach(el => {
      observer.observe(el);
    });
  };
}

// Sound controls & SFX
function initSoundControls() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const active = window.aotSound.toggleSound();
      if (active) {
        soundBtn.classList.add('active');
        soundBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> <span>Sound: ON</span>';
      } else {
        soundBtn.classList.remove('active');
        soundBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> <span>Sound: OFF</span>';
      }
    });
  }

  // Add click sound to interactive buttons
  document.querySelectorAll('button, .btn, .nav-item a, .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.aotSound && !window.aotSound.isMuted) {
        window.aotSound.playBladeSlice();
      }
    });
  });
}

// Navigation & Mobile Menu
function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  // Highlight active page link based on URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Global Modal Controller
window.aotModal = {
  open(title, contentHtml) {
    let overlay = document.getElementById('aot-modal-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'aot-modal-overlay';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal-box">
          <button class="modal-close-btn" id="aot-modal-close"><i class="fa-solid fa-xmark"></i></button>
          <div id="aot-modal-body"></div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector('#aot-modal-close').addEventListener('click', () => this.close());
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.close();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
    }

    const body = overlay.querySelector('#aot-modal-body');
    body.innerHTML = `
      <h2 style="font-family: var(--font-heading); font-size: 1.8rem; color: #fff; margin-bottom: 0.5rem; letter-spacing: 2px;">${title}</h2>
      <div style="width: 60px; height: 3px; background: var(--accent-red); margin-bottom: 1.5rem;"></div>
      ${contentHtml}
    `;

    overlay.classList.add('active');
    if (window.aotParticles) {
      window.aotParticles.triggerLightning();
    }
    if (window.aotSound && !window.aotSound.isMuted) {
      window.aotSound.playTitanLightning();
    }
  },

  close() {
    const overlay = document.getElementById('aot-modal-overlay');
    if (overlay) {
      overlay.classList.remove('active');
    }
  }
};

// Page specific controllers
function initPageControllers() {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  if (path === 'index.html' || path === '') {
    initHomePage();
  } else if (path === 'timeline.html') {
    initTimelinePage();
  } else if (path === 'titans.html') {
    initTitansPage();
  } else if (path === 'characters.html') {
    initCharactersPage();
  } else if (path === 'world.html') {
    initWorldPage();
  }
}

// --------------------------------------------------------------------------
// HOME PAGE CONTROLLER
// --------------------------------------------------------------------------
function initHomePage() {
  const featuredTitansContainer = document.getElementById('featured-titans-grid');
  if (featuredTitansContainer && typeof AOT_DATA !== 'undefined') {
    const featured = AOT_DATA.titans.slice(0, 3);
    featuredTitansContainer.innerHTML = featured.map((t, idx) => `
      <div class="reveal-on-scroll stagger-${(idx % 3) + 1}">
        ${renderTitanCardHtml(t)}
      </div>
    `).join('');
    bindTitanCardEvents();
  }

  initHomeWallRadar();
  if (window.reobserveScrollElements) window.reobserveScrollElements();
}

function initHomeWallRadar() {
  const circles = document.querySelectorAll('.radar-circle');
  const infoDisplay = document.getElementById('wall-radar-info');
  
  if (!circles.length || !infoDisplay || typeof AOT_DATA === 'undefined') return;

  function updateWallDisplay(wallId) {
    const wall = AOT_DATA.worldbuilding.walls.find(w => w.id === wallId) || AOT_DATA.worldbuilding.walls[0];
    circles.forEach(c => {
      if (c.dataset.wall === wall.id) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });

    infoDisplay.innerHTML = `
      <div class="wall-info-card reveal-on-scroll is-revealed" style="border-left-color: ${wall.color}">
        <span class="wall-badge-spec"><i class="fa-solid fa-shield-halved"></i> ${wall.height} Height</span>
        <h3 class="wall-title">${wall.name}</h3>
        <p class="wall-radius"><i class="fa-solid fa-arrows-left-right"></i> Radius: ${wall.radius}</p>
        <p class="wall-description">${wall.description}</p>
        <div style="margin-bottom: 1rem;">
          <strong style="font-family: var(--font-tech); font-size: 0.85rem; color: var(--text-highlight); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 0.5rem;">Defensive Districts:</strong>
          <div class="wall-districts-list">
            ${wall.districts.map(d => `<span class="district-tag"><i class="fa-solid fa-location-dot"></i> ${d}</span>`).join('')}
          </div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted);"><strong style="color: var(--accent-red);">Status:</strong> ${wall.status}</p>
      </div>
    `;

    if (window.aotSound && !window.aotSound.isMuted) {
      window.aotSound.playBladeSlice();
    }
  }

  circles.forEach(c => {
    c.addEventListener('click', () => {
      updateWallDisplay(c.dataset.wall);
    });
  });

  updateWallDisplay('wall-maria');
}

// --------------------------------------------------------------------------
// TIMELINE PAGE CONTROLLER
// --------------------------------------------------------------------------
function initTimelinePage() {
  const container = document.getElementById('timeline-feed');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('timeline-search');

  if (!container || typeof AOT_DATA === 'undefined') return;

  let currentEra = 'all';
  let searchQuery = '';

  function renderTimeline() {
    const filtered = AOT_DATA.timeline.filter(item => {
      const matchesEra = currentEra === 'all' || item.era === currentEra;
      const matchesSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery) ||
        item.summary.toLowerCase().includes(searchQuery) ||
        item.year.toLowerCase().includes(searchQuery) ||
        item.keyFigures.some(f => f.toLowerCase().includes(searchQuery));
      return matchesEra && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
          <i class="fa-solid fa-scroll" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent-red);"></i>
          <h3 style="font-family: var(--font-heading); color: #fff;">No Chronicles Found</h3>
          <p>Try adjusting your search criteria or era filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((item, idx) => `
      <div class="timeline-node reveal-on-scroll stagger-${(idx % 2) + 1}" data-id="${item.id}">
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <div class="timeline-era-badge">${item.badge}</div>
          <div class="timeline-year"><i class="fa-solid fa-clock"></i> ${item.year}</div>
          <h3 class="timeline-title">${item.title}</h3>
          <h4 class="timeline-subtitle">${item.subtitle}</h4>
          <p class="timeline-summary">${item.summary}</p>
          
          <div class="timeline-quote">
            <i class="fa-solid fa-quote-left" style="color: var(--accent-gold); margin-right: 0.5rem;"></i>
            ${item.quote}
          </div>

          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.08);">
            <strong style="font-family: var(--font-tech); font-size: 0.8rem; color: var(--text-highlight); letter-spacing: 1px; text-transform: uppercase; display: block; margin-bottom: 0.3rem;">Historical Impact:</strong>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">${item.impact}</p>
          </div>

          <div class="timeline-figures">
            ${item.keyFigures.map(fig => `<span class="figure-tag"><i class="fa-solid fa-user"></i> ${fig}</span>`).join('')}
          </div>

          <button class="btn btn-secondary timeline-inspect-btn" data-id="${item.id}" style="margin-top: 1.2rem; width: 100%; padding: 0.6rem 1rem; font-size: 0.85rem;">
            <i class="fa-solid fa-magnifying-glass"></i> Full Historical Intelligence
          </button>
        </div>
      </div>
    `).join('');

    // Bind inspect buttons
    container.querySelectorAll('.timeline-inspect-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const event = AOT_DATA.timeline.find(e => e.id === id);
        if (event) {
          window.aotModal.open(event.title, `
            <div style="line-height: 1.8; color: var(--text-secondary);">
              <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.2rem;">
                <span class="timeline-era-badge">${event.badge}</span>
                <span style="font-family: var(--font-tech); font-weight: 700; color: var(--accent-red);"><i class="fa-solid fa-clock"></i> ${event.year}</span>
              </div>
              <h4 style="font-family: var(--font-heading); color: #fff; font-size: 1.15rem; margin-bottom: 0.75rem;">${event.subtitle}</h4>
              <p style="margin-bottom: 1.2rem; font-size: 1rem; color: var(--text-primary);">${event.details}</p>
              
              <div style="background: rgba(0,0,0,0.5); padding: 1.2rem; border-radius: 6px; border-left: 3px solid var(--accent-red); margin-bottom: 1.2rem;">
                <strong style="color: var(--accent-gold); font-family: var(--font-tech); letter-spacing: 1px; text-transform: uppercase; display: block; margin-bottom: 0.4rem;">Pivotal Significance & Legacy</strong>
                <p style="font-size: 0.95rem;">${event.impact}</p>
              </div>

              <div style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid var(--accent-gold); padding: 1rem; border-radius: 0 4px 4px 0; margin-bottom: 1.5rem; font-style: italic; color: #fff;">
                "${event.quote}"
              </div>

              <strong style="color: #fff; font-family: var(--font-tech); letter-spacing: 1px; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">Key Historical Participants:</strong>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${event.keyFigures.map(f => `<span class="figure-tag" style="background: rgba(230,57,70,0.15); border-color: var(--accent-red); color: #fff; font-size: 0.85rem; padding: 0.35rem 0.75rem;"><i class="fa-solid fa-user-shield"></i> ${f}</span>`).join('')}
              </div>
            </div>
          `);
        }
      });
    });

    if (window.reobserveScrollElements) window.reobserveScrollElements();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentEra = btn.dataset.era;
      renderTimeline();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderTimeline();
    });
  }

  renderTimeline();
}

// --------------------------------------------------------------------------
// TITANS PAGE CONTROLLER & HEIGHT COMPARATOR
// --------------------------------------------------------------------------
function initTitansPage() {
  const container = document.getElementById('titans-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('titans-search');

  if (!container || typeof AOT_DATA === 'undefined') return;

  let currentCategory = 'all';
  let searchQuery = '';

  function renderTitans() {
    const filtered = AOT_DATA.titans.filter(t => {
      const matchesCategory = currentCategory === 'all' || t.category === currentCategory;
      const matchesSearch = !searchQuery ||
        t.name.toLowerCase().includes(searchQuery) ||
        t.description.toLowerCase().includes(searchQuery) ||
        t.inheritors.some(i => i.toLowerCase().includes(searchQuery)) ||
        t.primaryAbilities.some(a => a.toLowerCase().includes(searchQuery));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
          <i class="fa-solid fa-skull" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent-red);"></i>
          <h3 style="font-family: var(--font-heading); color: #fff;">No Titans Match Filter</h3>
          <p>Adjust your search query or category filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((t, idx) => `
      <div class="reveal-on-scroll stagger-${(idx % 3) + 1}">
        ${renderTitanCardHtml(t)}
      </div>
    `).join('');
    bindTitanCardEvents();

    if (window.reobserveScrollElements) window.reobserveScrollElements();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderTitans();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderTitans();
    });
  }

  renderTitans();
  renderHeightComparator();
}

function renderTitanCardHtml(t) {
  const titanColor = t.iconColor || 'var(--accent-red)';
  return `
    <div class="titan-card" data-id="${t.id}" style="--titan-color: ${titanColor}">
      <div class="titan-header">
        <span class="titan-badge">${t.badge || 'Titan Specimen'}</span>
        <span class="titan-height-pill"><i class="fa-solid fa-ruler-vertical"></i> ${t.heightDisplay}</span>
      </div>
      <h3 class="titan-name">${t.name}</h3>
      <div class="titan-japanese">${t.japanese || ''}</div>
      <div class="titan-threat"><i class="fa-solid fa-triangle-exclamation"></i> Threat: ${t.threatLevel}</div>
      
      <div class="titan-inheritors-list">
        <strong>Known Inheritors:</strong>
        ${t.inheritors.join(', ')}
      </div>

      <ul class="titan-abilities">
        ${t.primaryAbilities.slice(0, 3).map(a => `
          <li><i class="fa-solid fa-fire-flame-curved"></i> <span>${a}</span></li>
        `).join('')}
      </ul>

      <button class="btn btn-secondary titan-dossier-btn" data-id="${t.id}" style="width: 100%; padding: 0.65rem 1rem; font-size: 0.85rem; margin-top: auto;">
        <i class="fa-solid fa-dna"></i> Inspect Biological Dossier
      </button>
    </div>
  `;
}

function bindTitanCardEvents() {
  document.querySelectorAll('.titan-dossier-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const titan = AOT_DATA.titans.find(t => t.id === id);
      if (titan) {
        window.aotModal.open(titan.name, `
          <div style="line-height: 1.7; color: var(--text-secondary);">
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-bottom: 1.2rem;">
              <span class="titan-badge" style="background: rgba(230,57,70,0.15); border-color: var(--accent-red); color: #fff;">${titan.badge || 'Titan Specimen'}</span>
              <span class="titan-height-pill"><i class="fa-solid fa-ruler-vertical"></i> ${titan.heightDisplay}</span>
              <span style="font-family: var(--font-tech); font-weight: 700; color: #ff4d6d;"><i class="fa-solid fa-triangle-exclamation"></i> ${titan.threatLevel}</span>
            </div>

            <p style="font-size: 1.05rem; color: #fff; margin-bottom: 1.2rem;">${titan.description}</p>

            <div style="background: rgba(0,0,0,0.5); padding: 1.2rem; border-radius: 6px; border-left: 3px solid ${titan.iconColor || 'var(--accent-red)'}; margin-bottom: 1.2rem;">
              <strong style="color: var(--text-highlight); font-family: var(--font-tech); letter-spacing: 1px; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">
                <i class="fa-solid fa-skull"></i> Primary Powers & Anomalies:
              </strong>
              <ul style="list-style: none; padding: 0;">
                ${titan.primaryAbilities.map(a => `<li style="margin-bottom: 0.4rem; color: var(--text-primary);"><i class="fa-solid fa-circle-chevron-right" style="color: var(--accent-red); margin-right: 0.5rem; font-size: 0.8rem;"></i> ${a}</li>`).join('')}
              </ul>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 4px; margin-bottom: 1.2rem;">
              <strong style="color: #fff; font-family: var(--font-tech); letter-spacing: 1px; text-transform: uppercase; display: block; margin-bottom: 0.3rem;">Lineage of Inheritors:</strong>
              <p style="color: var(--accent-gold); font-family: var(--font-tech); font-size: 0.95rem;">${titan.inheritors.join(' ➔ ')}</p>
            </div>

            <div style="font-size: 0.9rem; color: var(--text-muted);">
              <strong>Combat Doctrine:</strong> ${titan.combatRole}
            </div>
          </div>
        `);
      }
    });
  });
}

function renderHeightComparator() {
  const chartContainer = document.getElementById('height-comparator-bars');
  if (!chartContainer || typeof AOT_DATA === 'undefined') return;

  const compareList = [
    { name: "Human", height: 1.7, display: "1.7m", color: "#a8b2d1" },
    { name: "Cart", height: 4, display: "4m", color: "#06d6a0" },
    { name: "Jaw", height: 5, display: "5m", color: "#fb5607" },
    { name: "Female", height: 14, display: "14m", color: "#00bbf9" },
    { name: "Attack", height: 15, display: "15m", color: "#00f5d4" },
    { name: "Armored", height: 15, display: "15m", color: "#f15bb5" },
    { name: "Beast", height: 17, display: "17m", color: "#fee440" },
    { name: "Wall Titan", height: 50, display: "50m", color: "#e63946" },
    { name: "Colossal", height: 60, display: "60m", color: "#ff0054" },
    { name: "Rod Reiss", height: 120, display: "120m", color: "#9d0208" },
    { name: "Doomsday", height: 500, display: "500m+", color: "#370617" }
  ];

  const maxLog = Math.log10(550);

  chartContainer.innerHTML = compareList.map(item => {
    const logVal = Math.log10(Math.max(item.height, 1));
    const pct = Math.max(Math.round((logVal / maxLog) * 92) + 8, 12);

    return `
      <div class="comparator-bar-group">
        <div class="comparator-bar" style="height: ${pct}%; --bar-color: ${item.color}; background: linear-gradient(to top, #111, ${item.color});">
          <span class="comparator-bar-label">${item.display}</span>
        </div>
        <span class="comparator-name">${item.name}</span>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// CHARACTERS PAGE CONTROLLER
// --------------------------------------------------------------------------
function initCharactersPage() {
  const container = document.getElementById('characters-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('characters-search');

  if (!container || typeof AOT_DATA === 'undefined') return;

  let currentAllegiance = 'all';
  let searchQuery = '';

  function renderCharacters() {
    const filtered = AOT_DATA.characters.filter(c => {
      const matchesAllegiance = currentAllegiance === 'all' || c.allegiance.toLowerCase().includes(currentAllegiance.toLowerCase());
      const matchesSearch = !searchQuery ||
        c.name.toLowerCase().includes(searchQuery) ||
        c.bio.toLowerCase().includes(searchQuery) ||
        c.role.toLowerCase().includes(searchQuery) ||
        c.titansHeld.some(t => t.toLowerCase().includes(searchQuery));
      return matchesAllegiance && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
          <i class="fa-solid fa-user-slash" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent-red);"></i>
          <h3 style="font-family: var(--font-heading); color: #fff;">No Personnel Records Found</h3>
          <p>Try searching with another name or clearance filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((c, idx) => `
      <div class="character-card reveal-on-scroll stagger-${(idx % 3) + 1}" data-id="${c.id}">
        <div class="character-badge-ribbon"><i class="fa-solid ${c.icon || 'fa-shield'}"></i> ${c.badge}</div>
        <h3 class="character-name">${c.name}</h3>
        <div class="character-role">${c.role}</div>
        
        <div class="character-quote">
          "${c.quote}"
        </div>

        <div class="stat-bars-container">
          <div class="stat-row">
            <span class="stat-name">Combat</span>
            <div class="stat-meter"><div class="stat-fill" style="width: ${c.combatStats.combat}%;"></div></div>
            <span class="stat-val">${c.combatStats.combat}</span>
          </div>
          <div class="stat-row">
            <span class="stat-name">Intellect</span>
            <div class="stat-meter"><div class="stat-fill" style="width: ${c.combatStats.intellect}%;"></div></div>
            <span class="stat-val">${c.combatStats.intellect}</span>
          </div>
          <div class="stat-row">
            <span class="stat-name">Agility</span>
            <div class="stat-meter"><div class="stat-fill" style="width: ${c.combatStats.agility}%;"></div></div>
            <span class="stat-val">${c.combatStats.agility}</span>
          </div>
          <div class="stat-row">
            <span class="stat-name">Ruthless</span>
            <div class="stat-meter"><div class="stat-fill" style="width: ${c.combatStats.ruthlessness}%;"></div></div>
            <span class="stat-val">${c.combatStats.ruthlessness}</span>
          </div>
        </div>

        <button class="btn btn-secondary character-dossier-btn" data-id="${c.id}" style="width: 100%; padding: 0.65rem 1rem; font-size: 0.85rem; margin-top: auto;">
          <i class="fa-solid fa-folder-open"></i> Access Classified Dossier
        </button>
      </div>
    `).join('');

    bindCharacterCardEvents();
    if (window.reobserveScrollElements) window.reobserveScrollElements();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAllegiance = btn.dataset.allegiance;
      renderCharacters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCharacters();
    });
  }

  renderCharacters();
}

function bindCharacterCardEvents() {
  document.querySelectorAll('.character-dossier-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const character = AOT_DATA.characters.find(c => c.id === id);
      if (character) {
        window.aotModal.open(character.name + ` (${character.japanese || ''})`, `
          <div style="line-height: 1.7; color: var(--text-secondary);">
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-bottom: 1.2rem;">
              <span class="character-badge-ribbon">${character.badge}</span>
              <span style="font-family: var(--font-tech); font-weight: 700; color: var(--accent-gold);"><i class="fa-solid fa-flag"></i> ${character.allegiance}</span>
              <span style="font-family: var(--font-tech); font-weight: 700; color: ${character.status.includes('Deceased') ? '#ff4d6d' : '#00f5d4'};"><i class="fa-solid fa-heart-pulse"></i> ${character.status}</span>
            </div>

            <p style="font-size: 1.05rem; color: #fff; margin-bottom: 1.2rem;">${character.bio}</p>

            <div style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid var(--accent-gold); padding: 1rem; border-radius: 0 4px 4px 0; margin-bottom: 1.2rem; font-style: italic; color: #fff;">
              "${character.quote}"
            </div>

            <div style="background: rgba(0,0,0,0.5); padding: 1.2rem; border-radius: 6px; border-left: 3px solid var(--accent-red); margin-bottom: 1.2rem;">
              <strong style="color: var(--text-highlight); font-family: var(--font-tech); letter-spacing: 1px; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">
                <i class="fa-solid fa-crosshairs"></i> Pivotal Battles & Decisions:
              </strong>
              <ul style="list-style: none; padding: 0;">
                ${character.pivotalMoments.map(m => `<li style="margin-bottom: 0.4rem; color: var(--text-primary);"><i class="fa-solid fa-check" style="color: var(--accent-gold); margin-right: 0.5rem;"></i> ${m}</li>`).join('')}
              </ul>
            </div>

            <div style="font-size: 0.9rem; color: var(--text-muted);">
              <strong>Titan Vessels / Bloodline Powers:</strong> ${character.titansHeld.join(', ')}
            </div>
          </div>
        `);
      }
    });
  });
}

// --------------------------------------------------------------------------
// WORLDBUILDING & LORE PAGE CONTROLLER
// --------------------------------------------------------------------------
function initWorldPage() {
  initHomeWallRadar();

  const odmContainer = document.getElementById('odm-components-grid');
  if (odmContainer && typeof AOT_DATA !== 'undefined') {
    const odm = AOT_DATA.worldbuilding.odmGear;
    odmContainer.innerHTML = odm.components.map((c, idx) => `
      <div class="reveal-on-scroll stagger-${(idx % 3) + 1}" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 1.5rem; border-top: 3px solid var(--accent-scout-blue);">
        <h4 style="font-family: var(--font-heading); color: #fff; font-size: 1.1rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-gears" style="color: var(--accent-gold); margin-right: 0.5rem;"></i> ${c.part}</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">${c.desc}</p>
      </div>
    `).join('');
  }

  if (window.reobserveScrollElements) window.reobserveScrollElements();
}
