/* =============================================
   NAFIE ALAMI — PORTFOLIO SCRIPT
   ============================================= */

'use strict';

// ─── NAVBAR: scroll effect & active link ──────────────────────────────────
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a:not(.btn-nav), .mobile-menu a');
const sections = document.querySelectorAll('section[id]');

function onScroll() {
  // Scrolled class
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active nav link highlighting
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
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

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ─── HAMBURGER / MOBILE MENU ───────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  // Animate the hamburger into an X
  const spans = hamburger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ─── TYPED TEXT ANIMATION ─────────────────────────────────────────────────
const phrases = [
  'Ingénieur Génie Industriel',
  'Expert Supply Chain',
  'Consultant WMS',
  'Alternant M2 OPSyL 2026–2027',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedEl.textContent = current.substring(0, charIndex);

  let delay = isDeleting ? 50 : 80;

  if (!isDeleting && charIndex === current.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

type();

// ─── AOS — LIGHTWEIGHT INTERSECTION OBSERVER ──────────────────────────────
function initAOS() {
  const elements = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.aosDelay
            ? parseInt(entry.target.dataset.aosDelay)
            : 0;
          setTimeout(() => {
            entry.target.classList.add('aos-animate');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

initAOS();

// ─── SKILL BARS ANIMATION ─────────────────────────────────────────────────
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-bar-fill');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.dataset.width + '%';
          setTimeout(() => {
            fill.style.width = width;
          }, 300);
          observer.unobserve(fill);
        }
      });
    },
    { threshold: 0.2 }
  );

  fills.forEach(fill => observer.observe(fill));
}

initSkillBars();

// ─── COUNTER ANIMATION ────────────────────────────────────────────────────
function animateCounter(el, target, suffix) {
  let count = 0;
  const step = Math.ceil(target / 40);
  const interval = setInterval(() => {
    count = Math.min(count + step, target);
    el.textContent = count + suffix;
    if (count >= target) clearInterval(interval);
  }, 40);
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const targets = [3, 6, 5, 3];
  const suffixes = ['+', '+', '+', ''];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = [...counters].indexOf(entry.target);
          if (idx !== -1) {
            animateCounter(entry.target, targets[idx], suffixes[idx]);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(c => observer.observe(c));
}

initCounters();

// ─── CONTACT FORM ─────────────────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'Message depuis le portfolio de Nafie Alami';
    const message = document.getElementById('message').value.trim();

    const body = `Nom : ${name}\nEmail : ${email}\n\n${message}`;

    const encoded = {
      to:      'Nafieddhy@gmail.com',
      subject: encodeURIComponent(subject),
      body:    encodeURIComponent(body),
    };

    const mailtoUrl = `mailto:${encoded.to}?subject=${encoded.subject}&body=${encoded.body}`;
    const gmailUrl  = `https://mail.google.com/mail/?view=cm&fs=1&to=${encoded.to}&su=${encoded.subject}&body=${encoded.body}`;

    // Show the choice overlay
    const overlay = document.getElementById('mailOverlay');
    const btnMailto = document.getElementById('btnMailto');
    const btnGmail  = document.getElementById('btnGmail');
    const btnClose  = document.getElementById('btnOverlayClose');

    btnMailto.onclick = () => { window.location.href = mailtoUrl; overlay.classList.remove('show'); };
    btnGmail.onclick  = () => { window.open(gmailUrl, '_blank', 'noopener,noreferrer'); overlay.classList.remove('show'); };
    btnClose.onclick  = () => overlay.classList.remove('show');

    overlay.classList.add('show');
  });
}

// ─── SMOOTH SCROLL for anchor links ───────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ─── ACTIVE NAV LINK STYLE ─────────────────────────────────────────────────
const style = document.createElement('style');
style.textContent = `
  .nav-links a.active { color: var(--accent) !important; }
`;
document.head.appendChild(style);
