/* =========================================================
   Dominion Logistics, Inc. — Site interactions
   ========================================================= */

(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is tapped (mobile)
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
          toggle.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---- Contact form (client-side handoff to mailto) ---- */
  const form = document.querySelector('.js-contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const company = (data.get('company') || '').toString().trim();
      const interest = (data.get('interest') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      // Simple validation
      if (!name || !email || !message) {
        showStatus(form, 'Please fill in your name, email, and a brief message so we can respond.');
        return;
      }

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValid) {
        showStatus(form, 'That email address doesn\'t look right — please double-check it.');
        return;
      }

      // Compose mailto payload
      const subject = interest
        ? `New inquiry — ${interest}`
        : 'New inquiry from dominionlogisticsinc.com';

      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
      ];
      if (company) bodyLines.push(`Company: ${company}`);
      if (interest) bodyLines.push(`Area of interest: ${interest}`);
      bodyLines.push('', 'Message:', message);

      const mailto = 'mailto:info@dominionlogisticsinc.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));

      // Open the user's mail client
      window.location.href = mailto;

      showStatus(form, 'Opening your mail client. If nothing happens, email info@dominionlogisticsinc.com directly.');
    });
  }

  function showStatus(formEl, msg) {
    const status = formEl.querySelector('.form__status');
    if (!status) return;
    status.textContent = msg;
    status.classList.add('is-visible');
  }

  /* ---- Highlight current page in nav ---- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    // strip anchor + normalize
    const target = href.split('#')[0].split('/').pop() || 'index.html';
    if (target === currentPath) link.classList.add('is-active');
  });

  /* ---- Set current year in footer ---- */
  const yr = document.querySelector('.js-year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
