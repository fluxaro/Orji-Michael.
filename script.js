// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
});

// Update Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe scroll animations
document.querySelectorAll('.scroll-animate').forEach(item => {
    observer.observe(item);
});

// Portfolio Data
const personalProjects = [
    {
        title: 'Sign in page ',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.45 AM (1).jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Calculator program',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.45 AM.jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Fitness homapages',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.46 AM.jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Tech cyber security website',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.53 AM (1).jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Real estate page ',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.53 AM (2).jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Banking app like Opay',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.53 AM (3).jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Betting login and signup page ',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.53 AM.jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Food menu page light mode',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.54 AM (1).jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Food menu page dark mode',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.54 AM (2).jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Home page ',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.54 AM (3).jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Landing page ',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.54 AM.jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'The future of Art',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.55 AM (1).jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Apply bureau website ',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.55 AM (2).jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    },
    {
        title: 'Footwear website ',
        image: 'projectimages/WhatsApp Image 2026-02-11 at 5.38.55 AM.jpeg',
        figmaLink: 'https://www.figma.com/design/Eebya5kWHMeaG3CeEDU3U3/Project?node-id=0-1&t=UxhblJqhVqPGoAim-1'
    }
];

const clientProjects = [
    {
        title: 'Med Track',
        description: 'Medical tracking platform with modern interface',
        liveLink: 'https://med-track-rho.vercel.app/'
    },
    {
        title: 'Zuch Royal Food',
        description: 'Restaurant website with elegant design',
        liveLink: 'https://zuch-royal-food.vercel.app/'
    },
    {
        title: 'Movies Website',
        description: 'Streaming platform UI with responsive design',
        liveLink: 'https://movies-website-three-livid.vercel.app/'
    },
    {
        title: 'Clothes Store',
        description: 'E-commerce fashion store with modern shopping experience',
        liveLink: 'https://clothes-stores-eta.vercel.app'
    },
    {
        title: 'Electronic Store',
        description: 'Electronics e-commerce platform with clean interface',
        liveLink: 'https://electronic-store-omega.vercel.app'
    },
    {
        title: 'Apply Bureau',
        description: 'Professional application management platform',
        liveLink: 'https://www.applybureau.com/'
    }
];

// Render Personal Projects
function renderPersonalProjects() {
    const container = document.getElementById('personal-projects');
    container.innerHTML = '';
    
    personalProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'flip-card scroll-animate';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                </div>
                <div class="flip-card-back">
                    <div class="p-6 flex flex-col items-center justify-center h-full">
                        <h4 class="text-xl font-bold mb-4">${project.title}</h4>
                        <a href="${project.figmaLink}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                            View in Figma <i class="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(card);
        observer.observe(card);
    });
}

// Render Client Projects
function renderClientProjects() {
    const container = document.getElementById('client-projects');
    container.innerHTML = '';
    
    clientProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'client-card scroll-animate';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <iframe src="${project.liveLink}" title="${project.title}" class="project-iframe"></iframe>
            <div class="iframe-error-message">
                <i class="fas fa-exclamation-circle text-yellow-400 text-4xl mb-4"></i>
                <h4 class="text-xl font-bold mb-2">Site Currently Unavailable</h4>
                <p class="text-gray-300 mb-4">This site cannot be embedded. Please visit the live link.</p>
            </div>
            <div class="client-card-overlay">
                <h4 class="text-2xl font-bold mb-3">${project.title}</h4>
                <p class="text-gray-300 mb-6">${project.description}</p>
                <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                    View Live <i class="fas fa-external-link-alt ml-2"></i>
                </a>
            </div>
        `;
        
        container.appendChild(card);
        observer.observe(card);
        
        // Check if iframe loads successfully
        const iframe = card.querySelector('.project-iframe');
        const errorMessage = card.querySelector('.iframe-error-message');
        
        iframe.addEventListener('error', () => {
            errorMessage.style.display = 'flex';
        });
        
        // Timeout to check if iframe loaded
        setTimeout(() => {
            try {
                if (!iframe.contentWindow || iframe.contentWindow.length === 0) {
                    // Iframe might be blocked
                }
            } catch (e) {
                // Cross-origin error means it loaded but we can't access it (which is fine)
            }
        }, 3000);
    });
}

// Dynamic Grid Layout Calculator
function calculateGridLayout() {
    const container = document.getElementById('personal-projects');
    if (!container) return;
    
    const cards = container.querySelectorAll('.flip-card');
    const containerWidth = container.offsetWidth;
    const minCardWidth = 300;
    const gap = 24;
    
    const columns = Math.floor((containerWidth + gap) / (minCardWidth + gap));
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const whatsappMessage = `Hello Orji, I am interested in your design services!%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/07061646747?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    document.getElementById('contact-form').reset();
});

// Resume Modal Functions
function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('resume-modal').addEventListener('click', (e) => {
    if (e.target.id === 'resume-modal') {
        closeResumeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeResumeModal();
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Tilt Effect for Cards
function addTiltEffect() {
    const cards = document.querySelectorAll('.portfolio-card, .flip-card, .client-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Parallax Effect for Floating Shapes
function parallaxEffect() {
    const shapes = document.querySelectorAll('.floating-shape');
    const scrolled = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
}

window.addEventListener('scroll', parallaxEffect);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPersonalProjects();
    renderClientProjects();
    calculateGridLayout();
    addTiltEffect();
    
    // Recalculate grid on window resize
    window.addEventListener('resize', calculateGridLayout);
    
    // Add scroll animations to all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('scroll-animate');
        observer.observe(section);
    });
});

// Preload Images
function preloadImages() {
    const images = [
        ...personalProjects.map(p => p.image)
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
