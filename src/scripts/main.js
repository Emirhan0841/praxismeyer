// Praxis Meyer — main.js

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile Nav Toggle ────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });

    // Close nav when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        toggle.classList.remove('open');
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Active Nav Link ──────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Scroll-reveal (lightweight) ─────────────────────────
  if ('IntersectionObserver' in window) {
    const style = document.createElement('style');
    style.textContent = `
      .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
      .reveal.visible { opacity: 1; transform: none; }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('.card, .pub-card, .section-header, .profile-section').forEach(el => {
      el.classList.add('reveal');
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

});
