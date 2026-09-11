/**
 * ============================================================================
 * ORJI MICHAEL - UI/UX DESIGNER PORTFOLIO
 * High-Performance Interactive Engine & Live Site Embeds
 * ============================================================================
 */

// --- Project Data Models ---

const clientProjectsData = [
  {
    id: 'client-1',
    title: 'Med Track',
    category: 'web',
    industry: 'Healthcare & Patient Management',
    role: 'Product Architecture & UI/UX',
    description: 'A modern medical tracking and vitals logging platform engineered to simplify complex patient health records with clear visual telemetry and real-time monitoring.',
    liveLink: 'https://med-track-rho.vercel.app/',
    tags: ['Healthcare', 'Web App', 'Dashboard', 'Vercel']
  },
  {
    id: 'client-2',
    title: 'Apply Bureau',
    category: 'web',
    industry: 'Global Visa & Career Portal',
    role: 'Full-Stack UI/UX & Design Systems',
    description: 'An international application ecosystem guiding applicants through career acceleration, university admissions, and international visa workflows with confidence.',
    liveLink: 'https://www.applybureau.com/',
    tags: ['EdTech', 'Enterprise Portal', 'Global SaaS']
  },
  {
    id: 'client-3',
    title: 'Zuch Royal Food',
    category: 'web',
    industry: 'Culinary Brand & Ordering Hub',
    role: 'Brand Identity & Digital Storefront',
    description: 'An elegant restaurant and catering digital ordering hub designed to evoke sensory delight and streamline online reservations and menu exploration.',
    liveLink: 'https://zuch-royal-food.vercel.app/',
    tags: ['Hospitality', 'E-Commerce', 'Brand Experience']
  },
  {
    id: 'client-4',
    title: 'Clothes Store',
    category: 'web',
    industry: 'Fashion & Apparel Retail',
    role: 'E-Commerce UX & Conversion Flow',
    description: 'A minimalist fashion e-commerce storefront optimized for fast product discovery, seamless basket management, and reduced checkout friction.',
    liveLink: 'https://clothes-stores-eta.vercel.app',
    tags: ['Fashion', 'E-Commerce', 'Mobile Responsive']
  },
  {
    id: 'client-5',
    title: 'Electronic Store',
    category: 'web',
    industry: 'Tech Retail & Hardware Commerce',
    role: 'Catalog Navigation & UX Design',
    description: 'A next-generation electronic gadgets showcase featuring deep spec comparisons, filtered catalog search, and high-conversion product presentation.',
    liveLink: 'https://electronic-store-omega.vercel.app',
    tags: ['Consumer Tech', 'Retail', 'Design System']
  },
  {
    id: 'client-6',
    title: 'Movies Website',
    category: 'web',
    industry: 'Entertainment Streaming UI',
    role: 'Media Interface & Spatial UX',
    description: 'A cinematic media streaming platform interface with dark-mode aesthetic, categorized entertainment carousels, and responsive trailer previews.',
    liveLink: 'https://movies-website-three-livid.vercel.app/',
    tags: ['Streaming', 'Entertainment', 'Micro-Interactions']
  }
];

const personalProjectsData = [
  {
    id: 'pers-1',
    title: 'NeoPay Banking Experience',
    category: 'mobile',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.53 AM (3).jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'Fintech Mobile',
    tags: ['Fintech', 'Mobile UI', 'Figma Tokens']
  },
  {
    id: 'pers-2',
    title: 'SoleVault Footwear E-Commerce',
    category: 'mobile',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.55 AM.jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'E-Commerce App',
    tags: ['Mobile Commerce', 'Luxury Retail']
  },
  {
    id: 'pers-3',
    title: 'CyberGuard Enterprise Security',
    category: 'web',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.53 AM (1).jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'Cybersecurity SaaS',
    tags: ['SaaS Dashboard', 'Data Visualization']
  },
  {
    id: 'pers-4',
    title: 'FitPulse Fitness & Workout Platform',
    category: 'web',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.46 AM.jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'Health & Fitness',
    tags: ['Web Platform', 'Community']
  },
  {
    id: 'pers-5',
    title: 'Haven Realty Property Discovery',
    category: 'mobile',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.53 AM (2).jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'PropTech Mobile',
    tags: ['Real Estate', 'Map Search', 'Mobile']
  },
  {
    id: 'pers-6',
    title: 'The Future of Art - Web3 Gallery',
    category: 'web',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.55 AM (1).jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'Creative Showcase',
    tags: ['Web3', 'Digital Art', 'Editorial']
  },
  {
    id: 'pers-7',
    title: 'ApexBet Sportsbook & Casino',
    category: 'web',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.53 AM.jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'iGaming Platform',
    tags: ['Live Betting', 'Odds Dashboard']
  },
  {
    id: 'pers-8',
    title: 'FoodieHub Mobile Menu (Light Mode)',
    category: 'mobile',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.54 AM (1).jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'Food Delivery UI',
    tags: ['Food Ordering', 'Light Theme']
  },
  {
    id: 'pers-9',
    title: 'FoodieHub Mobile Menu (Dark Mode)',
    category: 'mobile',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.54 AM (2).jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'Food Delivery UI',
    tags: ['Dark Theme', 'Mobile UI']
  },
  {
    id: 'pers-10',
    title: 'Nova Smart Home Ecosystem',
    category: 'web',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.54 AM (3).jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'IoT Interface',
    tags: ['Smart Home', 'Hero Section']
  },
  {
    id: 'pers-11',
    title: 'SaaS Flow Conversion Landing Page',
    category: 'web',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.54 AM.jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'Conversion Design',
    tags: ['Landing Page', 'CRO']
  },
  {
    id: 'pers-12',
    title: 'Apply Bureau Admissions Flow',
    category: 'mobile',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.55 AM (2).jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'EdTech Flow',
    tags: ['Long-form Layout', 'Mobile Onboarding']
  },
  {
    id: 'pers-13',
    title: 'Modern Auth & Biometric Sign-In',
    category: 'web',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.45 AM (1).jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'Auth Experience',
    tags: ['Authentication', 'Form Design']
  },
  {
    id: 'pers-14',
    title: 'Precision Calculator Engine UI',
    category: 'mobile',
    image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.45 AM.jpeg',
    figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1',
    badge: 'Utility App',
    tags: ['Utility', 'Keypad Ergonomics']
  }
];

let activeFilter = 'all';
let currentLightboxIndex = 0;
let currentLiveModalIndex = 0;

// --- Initialize Systems on DOMContentLoaded ---

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScrollspy();
  initStatsCounters();
  initLagosClock();
  renderClientProjects();
  renderPersonalProjects();
  initFilterTabs();
  initResumeTabs();
  initScopeChips();
});

// ============================================================================
// 1. HEADER SCROLLSPY & MOBILE DRAWER
// ============================================================================
function initHeaderScrollspy() {
  const navLinks = document.querySelectorAll('.nav-pill-item');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    const icon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileMenu.classList.toggle('hidden');
      if (icon) {
        icon.className = isHidden ? 'fas fa-bars text-sm' : 'fas fa-times text-sm';
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (icon) icon.className = 'fas fa-bars text-sm';
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        if (icon) icon.className = 'fas fa-bars text-sm';
      }
    });
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll('section[id]');
    let currentId = '';

    sections.forEach(section => {
      const top = section.offsetTop - 140;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${currentId}`);
      });
    }
  });
}

// ============================================================================
// 2. ANIMATED NUMERICAL STATS COUNTER
// ============================================================================
function initStatsCounters() {
  const counters = document.querySelectorAll('.counter');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          let count = 0;
          const duration = 1500;
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              counter.textContent = `${target}+`;
              clearInterval(timer);
            } else {
              counter.textContent = `${Math.floor(count)}+`;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const heroSection = document.getElementById('about');
  if (heroSection) observer.observe(heroSection);
}

// ============================================================================
// 3. REAL-TIME LAGOS LOCAL CLOCK (WAT • GMT+1)
// ============================================================================
function initLagosClock() {
  function updateTime() {
    const now = new Date();
    const options = {
      timeZone: 'Africa/Lagos',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const timeString = new Intl.DateTimeFormat([], options).format(now);
    
    const contactClock = document.getElementById('contact-clock');
    if (contactClock) contactClock.textContent = `${timeString} WAT`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// ============================================================================
// 4. PORTFOLIO SHOWCASE RENDERING WITH EMBEDDED LIVE SITES
// ============================================================================
function renderClientProjects() {
  const container = document.getElementById('client-projects-grid');
  if (!container) return;

  container.innerHTML = clientProjectsData.map((project, idx) => `
    <div class="project-card" data-category="client web" id="client-card-${idx}">
      <!-- Browser Mockup Header -->
      <div class="browser-chrome">
        <div class="browser-dot bg-rose-400"></div>
        <div class="browser-dot bg-amber-400"></div>
        <div class="browser-dot bg-emerald-400"></div>
        <div class="browser-url-pill">
          <i class="fas fa-lock text-[8px] mr-1 text-emerald-600"></i> ${project.liveLink.replace('https://', '')}
        </div>
        <button onclick="reloadClientIframe(${idx})" class="browser-chrome-btn" title="Reload Frame">
          <i class="fas fa-rotate-right text-[10px]"></i>
        </button>
        <button onclick="openLiveModal(${idx})" class="browser-chrome-btn" title="Expand Fullscreen Preview">
          <i class="fas fa-expand text-[10px]"></i>
        </button>
        <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="browser-chrome-btn" title="Open in New Tab">
          <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>

      <!-- Embedded Live Site Frame -->
      <div class="browser-embed-container" id="embed-wrap-${idx}">
        <iframe id="client-iframe-${idx}" src="${project.liveLink}" class="browser-embed-iframe" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" title="${project.title}"></iframe>
        
        <!-- Scroll Shield (prevents hijacking portfolio page scroll) -->
        <div class="embed-scroll-shield" id="shield-${idx}" onclick="activateClientEmbed(${idx})">
          <span class="embed-interact-btn">
            <i class="fas fa-hand-pointer text-accentOrange"></i> Click to Interact Live
          </span>
        </div>

        <!-- Active Interaction Pill -->
        <div class="embed-active-pill hidden" id="active-pill-${idx}" onclick="deactivateClientEmbed(${idx})">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Live Active &bull; Lock Scroll</span>
        </div>
      </div>

      <!-- Card Details Content -->
      <div class="p-6 flex flex-col justify-between flex-1 space-y-4">
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="text-[10px] font-mono text-accentOrange uppercase font-bold tracking-wider">${project.industry}</span>
            <span class="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live Production
            </span>
          </div>
          <h4 class="font-headline text-3xl tracking-wide text-ink uppercase">${project.title}</h4>
          <p class="text-[11px] font-mono text-slate-500 mb-3">${project.role}</p>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
            ${project.description}
          </p>
        </div>

        <div class="space-y-3 pt-2">
          <div class="flex flex-wrap gap-1.5">
            ${project.tags.map(t => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">${t}</span>`).join('')}
          </div>

          <div class="flex gap-2">
            <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="btn-orange flex-1 text-xs py-2.5 justify-center">
              <span>VISIT LIVE PLATFORM</span>
              <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
            <button onclick="openLiveModal(${idx})" class="btn-dark px-3.5 min-w-[44px] text-xs py-2.5" title="Expand Fullscreen Preview" aria-label="Expand Fullscreen Preview">
              <i class="fas fa-expand text-accentOrange"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function activateClientEmbed(index) {
  const shield = document.getElementById(`shield-${index}`);
  const activePill = document.getElementById(`active-pill-${index}`);
  if (shield) shield.classList.add('shield-hidden');
  if (activePill) activePill.classList.remove('hidden');
}

function deactivateClientEmbed(index) {
  const shield = document.getElementById(`shield-${index}`);
  const activePill = document.getElementById(`active-pill-${index}`);
  if (shield) shield.classList.remove('shield-hidden');
  if (activePill) activePill.classList.add('hidden');
}

function reloadClientIframe(index) {
  const iframe = document.getElementById(`client-iframe-${index}`);
  if (iframe) {
    iframe.src = iframe.src;
    showToast(`Reloaded ${clientProjectsData[index].title}`);
  }
}

// Fullscreen Live Embed Modal
function openLiveModal(index) {
  currentLiveModalIndex = index;
  const project = clientProjectsData[index];
  if (!project) return;

  const modal = document.getElementById('live-site-modal');
  const title = document.getElementById('live-modal-title');
  const externalLink = document.getElementById('live-modal-external-link');
  const iframe = document.getElementById('live-modal-iframe');

  if (title) title.textContent = `${project.title} — ${project.industry}`;
  if (externalLink) externalLink.href = project.liveLink;
  if (iframe) iframe.src = project.liveLink;
  if (modal) modal.classList.add('active');

  document.body.style.overflow = 'hidden';
}

function closeLiveModal() {
  const modal = document.getElementById('live-site-modal');
  const iframe = document.getElementById('live-modal-iframe');
  if (modal) modal.classList.remove('active');
  if (iframe) iframe.src = '';
  document.body.style.overflow = '';
}

function refreshLiveModal() {
  const iframe = document.getElementById('live-modal-iframe');
  if (iframe) iframe.src = iframe.src;
}

function renderPersonalProjects() {
  const container = document.getElementById('personal-projects-grid');
  if (!container) return;

  container.innerHTML = personalProjectsData.map((project, idx) => `
    <div class="project-card cursor-pointer group" data-category="${project.category}" onclick="openLightbox(${idx})">
      <div class="project-thumbnail">
        <span class="badge-pill absolute top-3 left-3 z-10 text-[10px] bg-white/90 backdrop-blur-sm">${project.badge}</span>
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="p-4 flex flex-col justify-between flex-1">
        <div>
          <h4 class="font-bold text-sm text-ink group-hover:text-accentOrange transition-colors line-clamp-1">${project.title}</h4>
          <div class="flex flex-wrap gap-1 mt-2">
            ${project.tags.map(t => `<span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">${t}</span>`).join('')}
          </div>
        </div>
        <div class="mt-3 pt-2 border-t border-black/5 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span class="text-[10px] text-accentOrange font-semibold">VIEW IN FIGMA ↗</span>
          <i class="fab fa-figma text-slate-400 group-hover:text-accentOrange transition-colors"></i>
        </div>
      </div>
    </div>
  `).join('');
}

function initFilterTabs() {
  const buttons = document.querySelectorAll('#portfolio-filter-group .filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      activeFilter = filter;
      applyPortfolioFilter(filter);
    });
  });
}

function applyPortfolioFilter(filter) {
  const clientCards = document.querySelectorAll('#client-projects-grid .project-card');
  const personalCards = document.querySelectorAll('#personal-projects-grid .project-card');

  function updateCardVisibility(card) {
    const cats = card.getAttribute('data-category') || '';
    if (filter === 'all') {
      card.style.display = 'flex';
    } else if (filter === 'client') {
      card.style.display = cats.includes('client') ? 'flex' : 'none';
    } else if (filter === 'mobile') {
      card.style.display = cats.includes('mobile') ? 'flex' : 'none';
    } else if (filter === 'web') {
      card.style.display = cats.includes('web') ? 'flex' : 'none';
    }
  }

  clientCards.forEach(updateCardVisibility);
  personalCards.forEach(updateCardVisibility);
}

// ============================================================================
// 5. FULLSCREEN PROJECT LIGHTBOX MODAL
// ============================================================================
function openLightbox(index) {
  currentLightboxIndex = index;
  const modal = document.getElementById('project-lightbox');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const badge = document.getElementById('lightbox-badge');
  const counter = document.getElementById('lightbox-counter');
  const figmaBtn = document.getElementById('lightbox-figma-btn');

  const project = personalProjectsData[index];
  if (!project || !modal) return;

  img.src = project.image;
  img.alt = project.title;
  title.textContent = project.title;
  badge.textContent = project.badge;
  counter.textContent = `${index + 1} / ${personalProjectsData.length}`;
  figmaBtn.href = project.figmaLink;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('project-lightbox');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function navigateLightbox(direction) {
  let newIndex = currentLightboxIndex + direction;
  if (newIndex < 0) newIndex = personalProjectsData.length - 1;
  if (newIndex >= personalProjectsData.length) newIndex = 0;
  openLightbox(newIndex);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('project-lightbox');
  if (modal && modal.classList.contains('active')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  }
  
  const resumeModal = document.getElementById('resume-modal');
  if (resumeModal && resumeModal.classList.contains('active')) {
    if (e.key === 'Escape') closeResumeModal();
  }

  const liveModal = document.getElementById('live-site-modal');
  if (liveModal && liveModal.classList.contains('active')) {
    if (e.key === 'Escape') closeLiveModal();
  }
});

window.addEventListener('click', (e) => {
  const lightbox = document.getElementById('project-lightbox');
  if (e.target === lightbox) closeLightbox();

  const resumeModal = document.getElementById('resume-modal');
  if (e.target === resumeModal) closeResumeModal();

  const liveModal = document.getElementById('live-site-modal');
  if (e.target === liveModal) closeLiveModal();
});

// ============================================================================
// 6. RESUME & EDUCATION TABS
// ============================================================================
function initResumeTabs() {
  const expBtn = document.getElementById('tab-btn-exp');
  const eduBtn = document.getElementById('tab-btn-edu');
  const certBtn = document.getElementById('tab-btn-cert');

  const contentExp = document.getElementById('tab-content-experience');
  const contentEdu = document.getElementById('tab-content-education');
  const contentCert = document.getElementById('tab-content-certifications');

  const buttons = [expBtn, eduBtn, certBtn];

  function switchTab(activeBtn, showContent) {
    buttons.forEach(b => b?.classList.remove('active'));
    activeBtn?.classList.add('active');

    if (contentExp) contentExp.classList.toggle('hidden', showContent !== contentExp);
    if (contentEdu) contentEdu.classList.toggle('hidden', showContent !== contentEdu);
    if (contentCert) contentCert.classList.toggle('hidden', showContent !== contentCert);
  }

  expBtn?.addEventListener('click', () => switchTab(expBtn, contentExp));
  eduBtn?.addEventListener('click', () => switchTab(eduBtn, contentEdu));
  certBtn?.addEventListener('click', () => switchTab(certBtn, contentCert));
}

function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ============================================================================
// 7. INTERACTIVE CONTACT FORM & WHATSAPP GENERATOR
// ============================================================================
function initScopeChips() {
  const chips = document.querySelectorAll('#scope-chips .chip-selector');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const selectedChip = document.querySelector('#scope-chips .chip-selector.selected');
      const projectType = selectedChip ? selectedChip.getAttribute('data-value') : 'Product Design';
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      const encodedMessage = encodeURIComponent(
        `*New Design Project Inquiry for Orji Michael*\n\n` +
        `• *Client Name:* ${name}\n` +
        `• *Email:* ${email}\n` +
        `• *Project Scope:* ${projectType}\n\n` +
        `• *Product Vision:*\n${message}\n\n` +
        `_Sent via portfolio discovery form_`
      );

      const whatsappUrl = `https://wa.me/2349040409504?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      showToast('Opening WhatsApp with your inquiry...');
    });
  }
}

function sendViaEmail() {
  const selectedChip = document.querySelector('#scope-chips .chip-selector.selected');
  const projectType = selectedChip ? selectedChip.getAttribute('data-value') : 'Product Design';
  const name = document.getElementById('name')?.value.trim() || 'Client';
  const email = document.getElementById('email')?.value.trim() || '';
  const message = document.getElementById('message')?.value.trim() || '';

  const subject = encodeURIComponent(`Design Project Inquiry: ${projectType} (${name})`);
  const body = encodeURIComponent(
    `Hello Orji,\n\nI am reaching out regarding a ${projectType} project.\n\nMy details:\nName: ${name}\nEmail: ${email}\n\nProject details:\n${message}\n\nBest regards,\n${name}`
  );

  window.location.href = `mailto:Orjiezechisom82@gmail.com?subject=${subject}&body=${body}`;
}

function copyEmailToClipboard() {
  const email = 'Orjiezechisom82@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Email copied to clipboard!');
  }).catch(() => {
    const input = document.createElement('input');
    input.value = email;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('Email copied to clipboard!');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}
