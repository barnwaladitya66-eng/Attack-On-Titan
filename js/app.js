// Attack on Titan Compendium - Complete Application Controller & Interactive Systems
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollTriggerSystem();
  initBasementVault();
  initCadetAptitudeQuiz();
  initPageControllers();
});

// Advanced Scroll Trigger & Animated Counters System
function initScrollTriggerSystem() {
  // 1. Inject Floating Back-to-Top Button
  let scrollTopBtn = document.querySelector('.scroll-top-btn');
  if (!scrollTopBtn) {
    scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Scroll back to top');
    scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Update Back-to-Top visibility on scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 350) {
      scrollTopBtn.classList.add('is-visible');
    } else {
      scrollTopBtn.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. High-Impact Scroll Reveal Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        
        // Trigger Animated Counter if target has stat number
        const statNumber = entry.target.querySelector('.stat-number');
        if (statNumber && !statNumber.dataset.animated) {
          animateStatCounter(statNumber);
        }

        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
  });

  window.reobserveScrollElements = () => {
    document.querySelectorAll('.reveal-on-scroll:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed), .reveal-scale:not(.is-revealed)').forEach(el => {
      revealObserver.observe(el);
    });
  };
}

// Animated Number Counter on Scroll Trigger
function animateStatCounter(el) {
  el.dataset.animated = 'true';
  const rawText = el.innerText.trim();
  const hasPlus = rawText.includes('+');
  const hasPercent = rawText.includes('%');
  const numericVal = parseInt(rawText.replace(/[^0-9]/g, ''), 10);

  if (isNaN(numericVal)) return;

  const duration = 1400;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentCount = Math.floor(easeProgress * numericVal);

    let formatted = currentCount.toLocaleString();
    if (hasPlus) formatted += '+';
    if (hasPercent) formatted += '%';

    el.innerText = formatted;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      el.innerText = rawText;
    }
  }

  requestAnimationFrame(updateCounter);
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

  initInteractiveWallRadar();
  if (window.reobserveScrollElements) window.reobserveScrollElements();
}

// --------------------------------------------------------------------------
// INTERACTIVE CONCENTRIC WALLS RADAR CONTROLLER (FIXED & HIGH-PRECISION)
// --------------------------------------------------------------------------
function initInteractiveWallRadar() {
  const rings = document.querySelectorAll('.radar-ring');
  const tabs = document.querySelectorAll('.wall-tab-btn');
  const infoDisplay = document.getElementById('wall-radar-info');
  
  if (!infoDisplay || typeof AOT_DATA === 'undefined') return;

  function selectWall(wallId) {
    const wall = AOT_DATA.worldbuilding.walls.find(w => w.id === wallId) || AOT_DATA.worldbuilding.walls[0];
    
    // Highlight SVG ring
    rings.forEach(r => {
      if (r.dataset.wall === wall.id) {
        r.classList.add('active');
      } else {
        r.classList.remove('active');
      }
    });

    // Highlight Tab button
    tabs.forEach(t => {
      if (t.dataset.wall === wall.id) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    // Update Detailed Tactical Screen
    infoDisplay.innerHTML = `
      <div class="wall-info-card reveal-on-scroll is-revealed" style="border-left-color: ${wall.color}">
        <span class="wall-badge-spec"><i class="fa-solid fa-shield-halved"></i> 50M HEIGHT • ${wall.garrisonForce}</span>
        <h3 class="wall-title">${wall.name}</h3>
        <p class="wall-radius"><i class="fa-solid fa-arrows-left-right"></i> Radius: ${wall.radius}</p>
        <p class="wall-description">${wall.description}</p>
        <div style="margin-bottom: 1.2rem;">
          <strong style="font-family: var(--font-tech); font-size: 0.85rem; color: var(--text-highlight); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 0.5rem;">
            <i class="fa-solid fa-location-crosshairs"></i> Defensive Bastions & Districts (Click to inspect):
          </strong>
          <div class="wall-districts-list">
            ${wall.districts.map(d => `<span class="district-tag" data-district="${d}"><i class="fa-solid fa-location-dot"></i> ${d}</span>`).join('')}
          </div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted);"><strong style="color: var(--accent-red);">Historical Status:</strong> ${wall.status}</p>
      </div>
    `;

    // Bind district tag clicks
    infoDisplay.querySelectorAll('.district-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const districtName = tag.dataset.district;
        window.aotModal.open(`${districtName} - Tactical Garrison`, `
          <div style="color: var(--text-secondary); line-height: 1.8;">
            <p style="font-size: 1.1rem; color: #fff; margin-bottom: 1rem;"><i class="fa-solid fa-fort-awesome" style="color: var(--accent-red); margin-right: 0.5rem;"></i> Perimeter defense sector for ${wall.name}.</p>
            <p>Designed with specialized dual heavy gates to lure Titans toward fixed artillery cannons while providing civilian evacuation corridors into the interior rings.</p>
            <div style="background: rgba(0,0,0,0.5); padding: 1.2rem; border-radius: 6px; border-left: 3px solid ${wall.color}; margin-top: 1.2rem;">
              <strong style="color: var(--accent-gold); font-family: var(--font-tech); text-transform: uppercase;">Defense Protocol:</strong>
              <p style="font-size: 0.95rem; margin-top: 0.3rem;">Garrison cannons loaded with grapeshot cartridges and emergency iron portcullis drops.</p>
            </div>
          </div>
        `);
      });
    });
  }

  rings.forEach(r => {
    r.addEventListener('click', (e) => {
      e.stopPropagation();
      selectWall(r.dataset.wall);
    });
  });

  tabs.forEach(t => {
    t.addEventListener('click', () => {
      selectWall(t.dataset.wall);
    });
  });

  // Default select Wall Maria
  selectWall('wall-maria');
}

// --------------------------------------------------------------------------
// TIMELINE PAGE CONTROLLER (+ FEATURE 1: PATHS & FEATURE 7: RUMBLING)
// --------------------------------------------------------------------------
function initTimelinePage() {
  const container = document.getElementById('timeline-feed');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('timeline-search');

  if (typeof AOT_DATA === 'undefined') return;

  // Initialize Feature 1: Paths Tree
  initPathsVisualizer();

  // Initialize Feature 7: Rumbling Simulator
  initRumblingSimulator();

  let currentEra = 'all';
  let searchQuery = '';

  function renderTimeline() {
    if (!container) return;
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
            <div style="font-family: var(--font-heading); font-size: 0.95rem; color: var(--accent-gold); margin-bottom: 0.3rem;">
              ${item.quoteJapanese || ''}
            </div>
            <div style="font-size: 0.88rem; color: #f1faee;">
              "${item.quote}"
            </div>
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

// Feature 1: Paths Visualizer Implementation
function initPathsVisualizer() {
  const branchesBox = document.getElementById('paths-branches-list');
  const trunkBtn = document.getElementById('paths-trunk-btn');

  if (!branchesBox || typeof AOT_DATA === 'undefined') return;

  const paths = AOT_DATA.pathsTree;

  branchesBox.innerHTML = paths.nodes.map(node => `
    <div class="paths-node-card reveal-on-scroll" data-id="${node.id}">
      <h4><i class="fa-solid fa-code-branch" style="color: #9b5de5; margin-right: 0.4rem;"></i> ${node.name}</h4>
      <span><i class="fa-solid fa-bolt"></i> ${node.branch} • ${node.inheritor}</span>
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">${node.power}</p>
    </div>
  `).join('');

  branchesBox.querySelectorAll('.paths-node-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const node = paths.nodes.find(n => n.id === id);
      if (node) {
        window.aotModal.open(`Paths Stream: ${node.name}`, `
          <div style="color: var(--text-secondary); line-height: 1.8;">
            <p style="font-size: 1.15rem; color: #00f5d4; font-family: var(--font-tech); text-transform: uppercase;"><i class="fa-solid fa-dna"></i> Branch of ${node.branch}</p>
            <p style="font-size: 1.05rem; color: #fff; margin: 1rem 0;"><strong>Active Inheritors:</strong> ${node.inheritor}</p>
            <div style="background: rgba(155, 93, 229, 0.15); border-left: 3px solid #00f5d4; padding: 1.2rem; border-radius: 4px; margin-bottom: 1.2rem;">
              <strong style="color: #fff; font-family: var(--font-tech); text-transform: uppercase;">Temporal Memory Transmitted:</strong>
              <p style="font-style: italic; color: #f1faee; margin-top: 0.4rem;">"${node.memorySnippet}"</p>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted);">All Subjects of Ymir are linked via invisible Paths of light that transcend physical space and mortal time.</p>
          </div>
        `);
      }
    });
  });

  if (trunkBtn) {
    trunkBtn.addEventListener('click', () => {
      window.aotModal.open("The Coordinate - Founder Ymir", `
        <div style="color: var(--text-secondary); line-height: 1.8;">
          <h3 style="color: #00f5d4; font-family: var(--font-heading); margin-bottom: 0.8rem;">The Sacred Nexus of All Eldian Souls</h3>
          <p style="font-size: 1rem; color: #fff; margin-bottom: 1.2rem;">${paths.center.desc}</p>
          <div style="background: rgba(0,0,0,0.6); padding: 1.2rem; border-radius: 6px; border-left: 3px solid #ff0054;">
            <strong style="color: var(--accent-gold); font-family: var(--font-tech); text-transform: uppercase;">The 2,000-Year Memory:</strong>
            <p style="font-style: italic; color: #fff; margin-top: 0.3rem;">"${paths.center.memories}"</p>
          </div>
        </div>
      `);
    });
  }
}

// Feature 7: Rumbling Simulator Implementation
function initRumblingSimulator() {
  const container = document.getElementById('rumbling-phases-box');
  if (!container || typeof AOT_DATA === 'undefined') return;

  const sim = AOT_DATA.rumblingSim;

  container.innerHTML = sim.phases.map(p => `
    <div class="rumbling-phase-block reveal-on-scroll">
      <h5><i class="fa-solid fa-clock-rotate-left"></i> ${p.hour}</h5>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// TITANS PAGE CONTROLLER (+ FEATURE 2: BATTLE MATRIX & FEATURE 5: LINEAGE)
// --------------------------------------------------------------------------
function initTitansPage() {
  const container = document.getElementById('titans-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('titans-search');

  if (typeof AOT_DATA === 'undefined') return;

  // Initialize Feature 2: Battle Matrix Matchup Simulator
  initBattleMatrixSimulator();

  // Initialize Feature 5: Shifter Lineage Flowchart
  initShifterLineageFlowchart();

  let currentCategory = 'all';
  let searchQuery = '';

  function renderTitans() {
    if (!container) return;
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

// Feature 2: Battle Matrix Simulator Implementation
function initBattleMatrixSimulator() {
  const selectorBox = document.getElementById('battle-duel-selector');
  const arenaDisplay = document.getElementById('battle-arena-content');

  if (!selectorBox || !arenaDisplay || typeof AOT_DATA === 'undefined') return;

  const duels = AOT_DATA.battleMatrix;

  selectorBox.innerHTML = duels.map((d, idx) => `
    <button class="matrix-duel-btn ${idx === 0 ? 'active' : ''}" data-id="${d.id}">
      ${d.fighterA} vs. ${d.fighterB}
    </button>
  `).join('');

  function renderDuel(duelId) {
    const duel = duels.find(d => d.id === duelId) || duels[0];
    
    selectorBox.querySelectorAll('.matrix-duel-btn').forEach(btn => {
      if (btn.dataset.id === duel.id) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    arenaDisplay.innerHTML = `
      <div class="arena-versus-header">
        <div class="fighter-pod">
          <h4>${duel.fighterA}</h4>
          <div class="win-rate-pill">Advantage: ${duel.winRateA}%</div>
        </div>
        <div class="versus-badge">VS</div>
        <div class="fighter-pod">
          <h4>${duel.fighterB}</h4>
          <div class="win-rate-pill">Advantage: ${duel.winRateB}%</div>
        </div>
      </div>

      <div class="matrix-progress-bar">
        <div class="matrix-progress-fill-a" style="width: ${duel.winRateA}%;"></div>
        <div class="matrix-progress-fill-b" style="width: ${duel.winRateB}%;"></div>
      </div>

      <div style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 6px; border-left: 3px solid var(--accent-red); margin-bottom: 1.2rem;">
        <h4 style="font-family: var(--font-heading); color: #fff; font-size: 1.2rem; margin-bottom: 0.5rem;">${duel.title}</h4>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.8rem;"><strong><i class="fa-solid fa-location-dot" style="color: var(--accent-red);"></i> Battlefield:</strong> ${duel.location}</p>
        <p style="font-size: 1rem; color: var(--text-primary); line-height: 1.7; margin-bottom: 1rem;">${duel.summary}</p>
        <p style="font-size: 0.9rem; color: var(--text-highlight);"><strong><i class="fa-solid fa-crosshairs"></i> Critical Tactical Factor:</strong> ${duel.tacticalFactor}</p>
      </div>

      <div style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid var(--accent-gold); padding: 1rem; border-radius: 0 4px 4px 0;">
        <strong style="color: #fff; font-family: var(--font-tech); text-transform: uppercase;">Canonical Historical Verdict:</strong>
        <p style="color: var(--text-primary); font-size: 0.95rem; margin-top: 0.3rem;">${duel.canonOutcome}</p>
      </div>
    `;
  }

  selectorBox.querySelectorAll('.matrix-duel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderDuel(btn.dataset.id);
    });
  });

  renderDuel(duels[0].id);
}

// Feature 5: Shifter Lineage Flowchart Implementation
function initShifterLineageFlowchart() {
  const container = document.getElementById('shifter-lineage-grid');
  if (!container || typeof AOT_DATA === 'undefined') return;

  container.innerHTML = AOT_DATA.shifterLineages.map(item => `
    <div class="lineage-card reveal-on-scroll">
      <h4 class="lineage-title"><i class="fa-solid fa-dna" style="color: var(--accent-gold); margin-right: 0.5rem;"></i> ${item.titan}</h4>
      <div class="lineage-chain">
        ${item.path.map((p, idx) => `
          <span class="lineage-step">${p}</span>
          ${idx < item.path.length - 1 ? '<span class="lineage-arrow"><i class="fa-solid fa-arrow-right"></i></span>' : ''}
        `).join('')}
      </div>
    </div>
  `).join('');
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
        const anatomy = AOT_DATA.titanAnatomy ? AOT_DATA.titanAnatomy[titan.id] : null;
        
        window.aotModal.open(titan.name, `
          <div style="line-height: 1.7; color: var(--text-secondary);">
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-bottom: 1.2rem;">
              <span class="titan-badge" style="background: rgba(230,57,70,0.15); border-color: var(--accent-red); color: #fff;">${titan.badge || 'Titan Specimen'}</span>
              <span class="titan-height-pill"><i class="fa-solid fa-ruler-vertical"></i> ${titan.heightDisplay}</span>
              <span style="font-family: var(--font-tech); font-weight: 700; color: #ff4d6d;"><i class="fa-solid fa-triangle-exclamation"></i> ${titan.threatLevel}</span>
            </div>

            <p style="font-size: 1.05rem; color: #fff; margin-bottom: 1.2rem;">${titan.description}</p>

            ${anatomy ? `
              <div class="anatomy-scanner-box">
                <h4 style="font-family: var(--font-heading); color: #00f5d4; font-size: 1.1rem; margin-bottom: 0.8rem;">
                  <i class="fa-solid fa-microscope"></i> Biological Anatomy & Weak-Point Scanner
                </h4>
                <div class="anatomy-node">
                  <h5><i class="fa-solid fa-crosshairs"></i> Nape Vulnerability Depth:</h5>
                  <p style="color: #fff; font-size: 0.95rem;">${anatomy.napeDepth}</p>
                </div>
                <div class="anatomy-node">
                  <h5><i class="fa-solid fa-brain"></i> Neural Pilot Synchronization:</h5>
                  <p style="color: var(--text-secondary); font-size: 0.9rem;">${anatomy.pilotCapsule}</p>
                </div>
                <div class="anatomy-node">
                  <h5><i class="fa-solid fa-gem"></i> Hardening Armor Nodes:</h5>
                  <p style="color: var(--text-secondary); font-size: 0.9rem;">${anatomy.hardeningNodes}</p>
                </div>
                <div class="anatomy-node" style="border-left-color: #ff0033;">
                  <h5 style="color: #ff0033;"><i class="fa-solid fa-shield-virus"></i> Fatal Combat Vulnerability:</h5>
                  <p style="color: var(--text-primary); font-size: 0.9rem;">${anatomy.combatVulnerability}</p>
                </div>
              </div>
            ` : ''}

            <div style="background: rgba(0,0,0,0.5); padding: 1.2rem; border-radius: 6px; border-left: 3px solid ${titan.iconColor || 'var(--accent-red)'}; margin: 1.2rem 0;">
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

  if (typeof AOT_DATA === 'undefined') return;

  let currentAllegiance = 'all';
  let searchQuery = '';

  function renderCharacters() {
    if (!container) return;
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
        
        <div class="character-quote-box">
          <div class="quote-japanese-text">${c.quoteJapanese || ''}</div>
          <div class="quote-romanji-text"><em>${c.quoteRomanji || ''}</em></div>
          <div class="quote-english-text">"${c.quote}"</div>
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

            <div style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid var(--accent-gold); padding: 1.2rem; border-radius: 0 6px 6px 0; margin-bottom: 1.2rem;">
              <div style="font-family: var(--font-heading); color: var(--accent-gold); font-size: 1.05rem; margin-bottom: 0.3rem;">
                ${character.quoteJapanese || ''}
              </div>
              <div style="font-family: var(--font-tech); font-size: 0.85rem; color: #00f5d4; margin-bottom: 0.5rem;">
                <em>${character.quoteRomanji || ''}</em>
              </div>
              <div style="font-style: italic; color: #fff; font-size: 0.95rem;">
                "${character.quote}"
              </div>
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
// WORLDBUILDING & LORE PAGE CONTROLLER (+ FEATURE 3: DISCLOSURES & FEATURE 4: MAP)
// --------------------------------------------------------------------------
function initWorldPage() {
  initInteractiveWallRadar();

  // Initialize Feature 3: Public Disclosure Mid-Episode Cards
  initPublicDisclosureCards();

  // Initialize Feature 4: Tactical Map Explorer
  initTacticalMapExplorer();

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

// Feature 3: Public Disclosure Cards Implementation
function initPublicDisclosureCards() {
  const grid = document.getElementById('public-disclosure-grid');
  if (!grid || typeof AOT_DATA === 'undefined') return;

  grid.innerHTML = AOT_DATA.publicDisclosures.map(item => `
    <div class="disclosure-card reveal-on-scroll" data-id="${item.id}">
      <div class="disclosure-japanese">${item.japanese}</div>
      <h4 class="disclosure-title">${item.title}</h4>
      <p class="disclosure-summary">${item.summary}</p>
      <div style="margin-top: 1rem; font-family: var(--font-tech); font-size: 0.8rem; color: var(--accent-gold);">
        <i class="fa-solid fa-lock-open"></i> ${item.classification}
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.disclosure-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const item = AOT_DATA.publicDisclosures.find(d => d.id === id);
      if (item) {
        window.aotModal.open(item.title, `
          <div style="color: var(--text-secondary); line-height: 1.8;">
            <div style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--accent-gold); margin-bottom: 0.8rem;">${item.japanese}</div>
            <p style="font-size: 1.05rem; color: #fff; margin-bottom: 1.2rem;">${item.summary}</p>
            <div style="background: rgba(0,0,0,0.5); padding: 1.2rem; border-radius: 6px; border-left: 3px solid var(--accent-gold);">
              <strong style="color: var(--text-highlight); font-family: var(--font-tech); text-transform: uppercase;">Military Classification:</strong>
              <p style="font-size: 0.95rem; margin-top: 0.3rem;">${item.classification} — Verified by Survey Corps Research Division.</p>
            </div>
          </div>
        `);
      }
    });
  });
}

// Feature 4: Tactical Map Explorer Implementation
function initTacticalMapExplorer() {
  const pinsBox = document.getElementById('tactical-pins-list');
  const screenBox = document.getElementById('tactical-screen-content');

  if (!pinsBox || !screenBox || typeof AOT_DATA === 'undefined') return;

  const locs = AOT_DATA.tacticalMapLocations;

  pinsBox.innerHTML = locs.map((loc, idx) => `
    <button class="map-pin-btn ${idx === 0 ? 'active' : ''}" data-id="${loc.id}">
      <div class="map-pin-name"><i class="fa-solid fa-location-crosshairs" style="color: var(--accent-red); margin-right: 0.4rem;"></i> ${loc.name}</div>
      <div class="map-pin-coords">${loc.coords}</div>
    </button>
  `).join('');

  function renderPinIntel(locId) {
    const loc = locs.find(l => l.id === locId) || locs[0];
    
    pinsBox.querySelectorAll('.map-pin-btn').forEach(btn => {
      if (btn.dataset.id === loc.id) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    screenBox.innerHTML = `
      <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 1.2rem;">
        <span style="font-family: var(--font-tech); color: var(--accent-gold); font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase;">
          <i class="fa-solid fa-satellite-dish"></i> SATELLITE TACTICAL INTEL
        </span>
        <h3 style="font-family: var(--font-heading); color: #fff; font-size: 1.5rem; margin-top: 0.3rem;">${loc.name}</h3>
        <p style="font-family: var(--font-tech); color: var(--accent-red); font-size: 0.9rem;">${loc.coords}</p>
      </div>

      <div style="margin-bottom: 1.2rem;">
        <strong style="color: #fff; font-family: var(--font-tech); text-transform: uppercase; display: block; margin-bottom: 0.3rem;">Strategic Significance:</strong>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${loc.importance}</p>
      </div>

      <div style="background: rgba(0,0,0,0.5); padding: 1rem 1.2rem; border-radius: 4px; border-left: 3px solid var(--accent-red); margin-bottom: 1.2rem;">
        <strong style="color: #ff4d6d; font-family: var(--font-tech); text-transform: uppercase; display: block; margin-bottom: 0.2rem;">Casualties & Sacrifices:</strong>
        <p style="color: var(--text-primary); font-size: 0.9rem;">${loc.casualties}</p>
      </div>

      <div>
        <strong style="color: var(--accent-gold); font-family: var(--font-tech); text-transform: uppercase; display: block; margin-bottom: 0.2rem;">Pivotal Military Engagement:</strong>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">${loc.keyEvent}</p>
      </div>
    `;
  }

  pinsBox.querySelectorAll('.map-pin-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderPinIntel(btn.dataset.id);
    });
  });

  renderPinIntel(locs[0].id);
}

/* ==========================================================================
   PREMIUM FEATURE 3: 104TH CADET APTITUDE EXAM & MILITARY ID BADGE
   ========================================================================== */
function initCadetAptitudeQuiz() {
  window.openAptitudeQuiz = function() {
    if (typeof AOT_DATA === 'undefined' || !AOT_DATA.aptitudeQuiz) return;

    let currentQ = 0;
    const scores = { scout: 0, garrison: 0, mp: 0, shifter: 0 };
    
    // Shuffle aptitude questions and options
    const questions = [...AOT_DATA.aptitudeQuiz]
      .sort(() => Math.random() - 0.5)
      .map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }));

    function renderQuestionModal() {
      const q = questions[currentQ];
      const progressPercent = Math.round(((currentQ + 1) / questions.length) * 100);

      window.aotModal.open(`104th Cadet Aptitude Exam • Question ${currentQ + 1}/${questions.length}`, `
        <div class="quiz-container">
          <div style="background: rgba(255,255,255,0.05); border-radius: 4px; height: 6px; margin-bottom: 1.5rem; overflow: hidden;">
            <div style="background: var(--accent-red); height: 100%; width: ${progressPercent}%; transition: width 0.3s ease;"></div>
          </div>
          <p style="font-family: var(--font-heading); font-size: 1.15rem; color: #fff; margin-bottom: 1.2rem; line-height: 1.5;">${q.q}</p>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${q.options.map((opt, idx) => `
              <button type="button" class="quiz-option-btn" data-idx="${idx}" style="cursor: pointer; padding: 0.8rem 1rem; text-align: left; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; color: #fff; font-size: 0.95rem; transition: all 0.2s ease;">
                <strong style="color: var(--accent-red); margin-right: 0.5rem;">[${String.fromCharCode(65 + idx)}]</strong> ${opt.text}
              </button>
            `).join('')}
          </div>
          <div style="margin-top: 1.5rem; display: flex; justify-content: space-between; font-family: var(--font-tech); font-size: 0.8rem; color: var(--text-muted);">
            <span>TACTICAL EVALUATION IN PROGRESS</span>
            <span style="color: var(--accent-gold);">${progressPercent}% COMPLETE</span>
          </div>
        </div>
      `);

      const modalBody = document.getElementById('aot-modal-body');
      if (!modalBody) return;

      modalBody.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const idx = parseInt(btn.dataset.idx, 10);
          const selected = q.options[idx];
          scores.scout += selected.score.scout;
          scores.garrison += selected.score.garrison;
          scores.mp += selected.score.mp;
          scores.shifter += selected.score.shifter;

          currentQ++;
          if (currentQ < questions.length) {
            renderQuestionModal();
          } else {
            renderQuizResults();
          }
        });
      });
    }

    function renderQuizResults() {
      let assignedRegiment = "SURVEY CORPS (SCOUT REGIMENT)";
      let regimentTitle = "Special Operations Vanguard";
      let motto = "Shinzo wo Sasageyo • Dedicate Your Heart!";

      const maxScore = Math.max(scores.scout, scores.garrison, scores.mp, scores.shifter);
      if (maxScore === scores.mp) {
        assignedRegiment = "MILITARY POLICE BRIGADE";
        regimentTitle = "Interior Royal Sentinel";
        motto = "For the King and Interior Peace";
      } else if (maxScore === scores.garrison) {
        assignedRegiment = "GARRISON REGIMENT";
        regimentTitle = "Wall Fortification Heavy Artillery";
        motto = "The Shield of Humanity";
      } else if (maxScore === scores.shifter) {
        assignedRegiment = "TITAN SHIFTER CORPS";
        regimentTitle = "The Coordinate Vanguard";
        motto = "Advance Ever Forward";
      }

      window.aotModal.open("Cadet Aptitude Assessment Complete!", `
        <div style="text-align: center;">
          <h3 style="font-family: var(--font-heading); color: var(--accent-gold); font-size: 1.4rem; margin-bottom: 0.5rem;">OFFICIAL MILITARY ASSIGNMENT</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.2rem;">Based on your tactical response profile, high command has designated your deployment:</p>
          
          <div class="military-id-card">
            <div class="id-card-header">
              <div class="id-avatar-circle">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <div style="text-align: left;">
                <h4 style="font-family: var(--font-heading); color: #fff; font-size: 1.3rem;">RECRUIT CADET #104</h4>
                <p style="font-family: var(--font-tech); color: var(--accent-gold); font-size: 0.95rem; letter-spacing: 1px;">${assignedRegiment}</p>
              </div>
            </div>

            <div class="id-card-grid" style="text-align: left;">
              <div>
                <div class="id-field-label">Specialty Rank:</div>
                <div class="id-field-val">${regimentTitle}</div>
              </div>
              <div>
                <div class="id-field-label">Regiment Motto:</div>
                <div class="id-field-val" style="font-size: 0.9rem; color: #ff2a4b;">${motto}</div>
              </div>
              <div>
                <div class="id-field-label">Combat Score:</div>
                <div class="id-field-val" style="color: var(--accent-gold);">96 / 100</div>
              </div>
              <div>
                <div class="id-field-label">Security Clearance:</div>
                <div class="id-field-val" style="color: #00f5d4;">LEVEL 4 CLASSIFIED</div>
              </div>
            </div>

            <div class="id-official-stamp">VERIFIED PARADIS</div>
          </div>

          <div style="margin-top: 1.8rem; display: flex; gap: 1rem; justify-content: center;">
            <button type="button" class="btn btn-primary" onclick="window.openAptitudeQuiz()"><i class="fa-solid fa-rotate-right"></i> Retake Exam</button>
            <button type="button" class="btn btn-secondary" onclick="window.aotModal.close()"><i class="fa-solid fa-check"></i> Accept Commission</button>
          </div>
        </div>
      `);
    }

    renderQuestionModal();
  };
}

/* ==========================================================================
   FEATURE: SHIGANSHINA BASEMENT LOCK PUZZLE & CLASSIFIED VAULT
   ========================================================================== */
function initBasementVault() {
  const masterQuestionPool = [
    {
      cylinderLabel: "The Primordial Genesis",
      riddle: "What ancient anomaly bonded with Ymir Fritz beneath the giant tree in the prehistoric forest?",
      options: [
        { text: "The Hallucigenia Organism (Spinal Source of Living Matter)", correct: true },
        { text: "A Mythological Golden Dragon Core", correct: false },
        { text: "A Volcanic Iceburst Stone Meteorite", correct: false }
      ]
    },
    {
      cylinderLabel: "The Secret Informant",
      riddle: "What was the codename of the Eldian Restorationist double-agent inside Marley Public Security?",
      options: [
        { text: "The Owl / Eren Kruger (フクロウ)", correct: true },
        { text: "The Wolf (オオカミ)", correct: false },
        { text: "The Falcon (ハヤブサ)", correct: false }
      ]
    },
    {
      cylinderLabel: "The Outside World Truth",
      riddle: "What shocking truth did Grisha's secret photograph behind the drawer reveal about humanity beyond the sea?",
      options: [
        { text: "Humanity has not perished; advanced human civilization thrives across the ocean", correct: true },
        { text: "The entire outer continent is a deserted wasteland ruined by Titans", correct: false },
        { text: "The outside ocean is filled with endless fire and boiling magma", correct: false }
      ]
    },
    {
      cylinderLabel: "The Royal Wall Vow",
      riddle: "Which 145th Eldian Monarch constructed the Three Walls and bound his successors with the Vow Renouncing War?",
      options: [
        { text: "King Karl Fritz (145th King of Eldia)", correct: true },
        { text: "King Uri Reiss", correct: false },
        { text: "King Rod Reiss", correct: false }
      ]
    },
    {
      cylinderLabel: "The Attack Titan's Power",
      riddle: "What unique metaphysical power belongs solely to the Attack Titan among the Nine Shifters?",
      options: [
        { text: "The ability to perceive and influence the future memories of its inheritors", correct: true },
        { text: "Complete physical immunity to Thunder Spear explosions", correct: false },
        { text: "Instantaneous underwater navigation across the ocean", correct: false }
      ]
    },
    {
      cylinderLabel: "The Coordinate & Founding Titan",
      riddle: "What condition must be met for a non-royal Founding Titan shifter to command the Coordinate power?",
      options: [
        { text: "Physical contact with a Titan or Human of Royal Eldian Blood", correct: true },
        { text: "Ingesting spinal fluid from all Nine Titan Shifters", correct: false },
        { text: "Standing atop Wall Sina at midnight during a blood moon", correct: false }
      ]
    },
    {
      cylinderLabel: "The Ackerman Lineage",
      riddle: "What is the true origin and biological nature of the Ackerman Clan?",
      options: [
        { text: "An unintended byproduct of ancient Titan science, manifesting Titan power in human form", correct: true },
        { text: "A pure Marleyan noble bloodline resistant to Titan spinal injections", correct: false },
        { text: "Descendants of King Karl Fritz who refused to enter the Three Walls", correct: false }
      ]
    }
  ];

  window.openBasementPuzzle = function() {
    // 1. Randomize and select 5 questions from the pool
    const activeQuestions = [...masterQuestionPool]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5)
      .map((q, idx) => ({
        cylinder: `Cylinder ${['I', 'II', 'III', 'IV', 'V'][idx]} • ${q.cylinderLabel}`,
        riddle: q.riddle,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }));

    let selections = [-1, -1, -1, -1, -1];

    function renderPuzzleModal(feedbackMsg = '', isSuccess = false) {
      const answeredCount = selections.filter(s => s !== -1).length;
      const progressPercent = Math.round((answeredCount / 5) * 100);

      window.aotModal.open("🗝️ The Basement Deadbolt • Dr. Yeager's Memory Cipher", `
        <div class="basement-puzzle-container">
          <div class="puzzle-door-chamber">
            <div class="puzzle-door-icon">
              <i class="fa-solid fa-lock"></i>
            </div>
            <h3 style="font-family: var(--font-heading); color: #fff; font-size: 1.35rem; letter-spacing: 1px;">THE SHIGANSHINA DEADBOLT</h3>
            <p style="color: var(--text-secondary); font-size: 0.92rem; max-width: 600px; margin: 0.5rem auto 0.8rem; line-height: 1.5;">
              Before you lies Dr. Grisha Yeager's desk in the Shiganshina basement. Click your answer for each of the 5 randomized brass cipher tumblers to align his memories, then turn the key!
            </p>

            <div style="background: rgba(255,255,255,0.08); border-radius: 4px; height: 6px; max-width: 480px; margin: 0.6rem auto 1rem; overflow: hidden;">
              <div style="background: ${answeredCount === 5 ? '#00f5d4' : 'var(--accent-gold)'}; height: 100%; width: ${progressPercent}%; transition: width 0.3s ease;"></div>
            </div>

            <div class="puzzle-status-bar">
              <span><i class="fa-solid fa-compass"></i> CYLINDER PROGRESS:</span>
              <strong style="color: ${answeredCount === 5 ? '#00f5d4' : 'var(--accent-gold)'};">
                ${answeredCount} / 5 ALIGNED (${progressPercent}%) ${answeredCount === 5 ? '✓ READY TO TURN KEY' : ''}
              </strong>
            </div>
          </div>

          ${feedbackMsg ? `
            <div class="puzzle-feedback-msg ${isSuccess ? 'success' : 'error'}">
              <i class="fa-solid ${isSuccess ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i> ${feedbackMsg}
            </div>
          ` : ''}

          <div class="puzzle-tumblers-grid">
            ${activeQuestions.map((p, cIdx) => `
              <div class="puzzle-tumbler-box ${selections[cIdx] !== -1 ? 'answered' : ''}" data-cidx="${cIdx}">
                <div class="puzzle-tumbler-header">
                  <span><i class="fa-solid fa-gears"></i> ${p.cylinder}</span>
                  <span style="color: ${selections[cIdx] !== -1 ? '#00f5d4' : 'var(--accent-red)'}; font-size: 0.78rem; font-weight: 700;">
                    ${selections[cIdx] !== -1 ? 'ALIGNED ✓' : 'UNALIGNED'}
                  </span>
                </div>
                <div class="puzzle-riddle-text">${p.riddle}</div>
                <div class="puzzle-options-list">
                  ${p.options.map((opt, oIdx) => `
                    <button type="button" class="puzzle-option-btn ${selections[cIdx] === oIdx ? 'selected' : ''}" data-cidx="${cIdx}" data-oidx="${oIdx}">
                      <span><strong>[${String.fromCharCode(65 + oIdx)}]</strong> ${opt.text}</span>
                      ${selections[cIdx] === oIdx ? '<i class="fa-solid fa-check" style="color: var(--accent-gold);"></i>' : ''}
                    </button>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 0.5rem;">
            <button type="button" class="btn btn-primary" id="puzzle-turn-key-btn" style="padding: 0.85rem 2.2rem; font-size: 1.05rem;">
              <i class="fa-solid fa-key"></i> Turn Key & Unlock Vault
            </button>
          </div>
        </div>
      `);

      const modalBody = document.getElementById('aot-modal-body');
      if (!modalBody) return;

      modalBody.querySelectorAll('.puzzle-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const cIdx = parseInt(btn.dataset.cidx, 10);
          const oIdx = parseInt(btn.dataset.oidx, 10);
          selections[cIdx] = oIdx;
          renderPuzzleModal();
        });
      });

      const turnBtn = modalBody.querySelector('#puzzle-turn-key-btn');
      if (turnBtn) {
        turnBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (selections.includes(-1)) {
            renderPuzzleModal("Please select an answer for all 5 tumbler cylinders before turning the key!", false);
            return;
          }

          const isAllCorrect = activeQuestions.every((p, idx) => p.options[selections[idx]].correct === true);

          if (isAllCorrect) {
            localStorage.setItem('aot_basement_unlocked', 'true');
            updateBasementNavLabel(true);
            window.aotModal.open("✨ VAULT UNLOCKED! • The Basement Key Turns", `
              <div style="text-align: center; padding: 1.5rem 0;">
                <div style="font-size: 4rem; color: var(--accent-gold); animation: pulse 1s infinite alternate; margin-bottom: 1rem;">
                  <i class="fa-solid fa-unlock-keyhole"></i>
                </div>
                <h3 style="font-family: var(--font-heading); color: #fff; font-size: 1.6rem;">KLANG-CLICK!</h3>
                <p style="font-family: var(--font-tech); color: var(--accent-gold); font-size: 1.1rem; letter-spacing: 2px; text-transform: uppercase; margin: 0.5rem 0 1rem;">
                  All 5 Tumblers Disengaged • Key Successfully Turned
                </p>
                <p style="color: var(--text-secondary); max-width: 540px; margin: 0 auto 1.8rem; font-size: 1rem; line-height: 1.7;">
                  The lock turns smoothly. The bottom of the desk drawer slides open to reveal a hidden compartment containing three leather-bound books and an impossible photograph.
                </p>
                <button type="button" class="btn btn-primary" onclick="window.openBasementVault()" style="font-size: 1.05rem; padding: 0.85rem 2rem;">
                  <i class="fa-solid fa-book-open"></i> Read Grisha's 3 Classified Journals
                </button>
              </div>
            `);
          } else {
            renderPuzzleModal("The heavy iron tumblers resist! One or more memory cipher answers are incorrect. Review the historical clues and align all 5 cylinders correctly.", false);
          }
        });
      }
    }

    renderPuzzleModal();
  };

  window.openBasementVault = function() {
    const isUnlocked = localStorage.getItem('aot_basement_unlocked') === 'true';
    if (!isUnlocked) {
      window.openBasementPuzzle();
      return;
    }

    if (typeof AOT_DATA === 'undefined' || !AOT_DATA.basementJournals) return;
    const journals = AOT_DATA.basementJournals;

    window.aotModal.open("🗝️ The Basement Vault • Classified Records of Grisha Yeager", `
      <div style="line-height: 1.8;">
        <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid var(--accent-gold); padding: 1.2rem; border-radius: 6px; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h4 style="font-family: var(--font-heading); color: var(--accent-gold);"><i class="fa-solid fa-key"></i> Key Acquired & Unlocked</h4>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 0.3rem;">
              Recovered during the Battle of Shiganshina. These three manuscripts reveal the true history of the world outside the walls.
            </p>
          </div>
          <button type="button" class="btn btn-secondary" onclick="localStorage.removeItem('aot_basement_unlocked'); updateBasementNavLabel(false); window.openBasementPuzzle();" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
            <i class="fa-solid fa-lock"></i> Re-lock Puzzle
          </button>
        </div>

        <div>
          ${journals.map(j => `
            <div class="journal-book-card">
              <h4 style="font-family: var(--font-heading); color: #fff; font-size: 1.15rem; margin-bottom: 0.2rem;">${j.title}</h4>
              <div style="font-family: var(--font-tech); color: var(--accent-red); font-size: 0.85rem; margin-bottom: 0.8rem;">${j.subtitle} • ${j.date}</div>
              <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1rem;">${j.content}</p>
              <div style="background: rgba(0,0,0,0.6); padding: 0.8rem 1rem; border-left: 3px solid var(--accent-gold); border-radius: 4px;">
                <div style="font-family: var(--font-heading); color: var(--accent-gold); font-size: 0.9rem;">${j.quoteJapanese}</div>
                <div style="font-style: italic; color: var(--text-primary); font-size: 0.85rem;">"${j.quote}"</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `);
  };

  function updateBasementNavLabel(unlocked) {
    const keyBtn = document.getElementById('basement-nav-key-btn');
    if (keyBtn) {
      if (unlocked) {
        keyBtn.innerHTML = '<i class="fa-solid fa-key"></i> <span>BASEMENT (UNLOCKED)</span>';
        keyBtn.title = "Access Grisha's Unlocked Basement Vault";
      } else {
        keyBtn.innerHTML = '<i class="fa-solid fa-lock"></i> <span>BASEMENT (PUZZLE)</span>';
        keyBtn.title = "Solve Shiganshina Lock Puzzle to get Basement Key";
      }
    }
  }

  // Inject Basement Key button in Navbars
  const navControls = document.querySelector('.nav-controls');
  if (navControls && !document.getElementById('basement-nav-key-btn')) {
    const keyBtn = document.createElement('button');
    keyBtn.id = 'basement-nav-key-btn';
    keyBtn.type = 'button';
    keyBtn.className = 'basement-key-trigger';
    const isUnlocked = localStorage.getItem('aot_basement_unlocked') === 'true';
    if (isUnlocked) {
      keyBtn.innerHTML = '<i class="fa-solid fa-key"></i> <span>BASEMENT (UNLOCKED)</span>';
    } else {
      keyBtn.innerHTML = '<i class="fa-solid fa-lock"></i> <span>BASEMENT (PUZZLE)</span>';
    }
    keyBtn.title = "Solve Puzzle to Unlock Basement Key";
    keyBtn.addEventListener('click', window.openBasementVault);
    navControls.prepend(keyBtn);
  }
}




