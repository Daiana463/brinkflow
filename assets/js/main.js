/* ============================================================
   BrinkFlow — main.js
   01. Header scroll
   02. Menú móvil
   03. Smooth scroll (anchors)
   04. Animaciones de scroll
   05. Formulario de contacto
   06. Nav link activo
   07. Sistema de cookies (RGPD + Consent Mode v2)
   08. Tracking de eventos (GA4 + Meta Pixel)
   09. Init
   ============================================================ */

'use strict';


/* ─── 01. HEADER SCROLL ─── */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  const onScroll = () => { header.classList.toggle('scrolled', window.scrollY > 80); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


/* ─── 02. MENÚ MÓVIL ─── */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  const open = () => {
    toggle.classList.add('is-open');
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    toggle.classList.remove('is-open');
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => { menu.classList.contains('is-open') ? close() : open(); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('is-open')) close(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 768) close(); });
}


/* ─── 03. SMOOTH SCROLL ─── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not([data-cookie-settings])').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '72');
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}


/* ─── 04. ANIMACIONES DE SCROLL ─── */
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

  elements.forEach(el => observer.observe(el));
}


/* ─── 05. FORMULARIO DE CONTACTO ─── */
/*
  ──────────────────────────────────────────────────────────────────
  CONFIGURACIÓN DEL FORMULARIO
  ──────────────────────────────────────────────────────────────────
  Web3Forms (recomendado, gratuito):
    1. Ve a https://web3forms.com
    2. Ingresa hola@brinkflow.es y haz clic en "Create your Access Key"
    3. Verifica el email recibido en hola@brinkflow.es
    4. Pega el Access Key en la constante BF_FORM_KEY abajo
  ──────────────────────────────────────────────────────────────────
*/
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
const BF_FORM_KEY   = 'd5e4a122-1686-4552-9515-3f6e2378f880';

function showFormSuccess(form) {
  const success = form.querySelector('.form-success');
  const btn     = form.querySelector('button[type="submit"]');
  const consent = form.querySelector('[name="consent"]');
  form.querySelectorAll('input:not([type="hidden"]):not([type="checkbox"]), textarea').forEach(f => { f.value = ''; });
  if (consent) consent.checked = false;
  if (btn) { btn.disabled = false; btn.textContent = 'Solicitar diagnóstico'; }
  if (success) {
    success.hidden = false;
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => { success.hidden = true; }, 8000);
  }
}

function initContactForm() {
  document.querySelectorAll('.js-contact-form').forEach(form => {
    const errorEl = form.querySelector('.form-error');
    let submitting = false;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (submitting) return;

      const f = {
        name:     form.querySelector('[name="name"]'),
        email:    form.querySelector('[name="email"]'),
        telefono: form.querySelector('[name="phone"]'),
        negocio:  form.querySelector('[name="business"]'),
        message:  form.querySelector('[name="message"]'),
        consent:  form.querySelector('[name="consent"]'),
        honeypot: form.querySelector('[name="website"]'),
      };

      /* Honeypot: si está relleno, descartar silenciosamente */
      if (f.honeypot && f.honeypot.value.trim()) return;

      /* Validación: name, email y message obligatorios */
      let valid = true;
      [f.name, f.email, f.message].forEach(field => {
        if (!field) return;
        const ok = !!field.value.trim();
        field.classList.toggle('is-error', !ok);
        field.setAttribute('aria-invalid', ok ? 'false' : 'true');
        if (!ok) valid = false;
      });

      if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim())) {
        f.email.classList.add('is-error');
        f.email.setAttribute('aria-invalid', 'true');
        valid = false;
      }

      if (f.consent && !f.consent.checked) {
        f.consent.closest('.form-group')?.classList.add('is-error');
        valid = false;
      }

      if (!valid) { form.querySelector('.is-error')?.focus(); return; }

      const btn = form.querySelector('button[type="submit"]');
      submitting = true;
      if (btn) { btn.disabled = true; btn.textContent = 'Enviando…'; }
      if (errorEl) errorEl.hidden = true;

      const payload = {
        access_key: BF_FORM_KEY,
        name:       f.name?.value.trim()     || '',
        email:      f.email?.value.trim()    || '',
        replyto:    f.email?.value.trim()    || '',
        subject:    'Nuevo lead BrinkFlow',
        from_name:  'BrinkFlow Web',
        message:    f.message?.value.trim()  || '',
        phone:      f.telefono?.value.trim() || '',
        business:   f.negocio?.value.trim()  || '',
        botcheck:   '',
      };

      bfLog('Form → payload enviado a Web3Forms');

      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload),
        });

        let data = {};
        try { data = await res.json(); } catch (_) {}

        if (!res.ok || data.success === false) {
          throw new Error(data.message || ('HTTP ' + res.status));
        }

        showFormSuccess(form);
        try { trackFormLead(form.id); } catch (_) {}

      } catch (err) {
        if (btn) { btn.disabled = false; btn.textContent = 'Solicitar diagnóstico'; }
        if (errorEl) errorEl.hidden = false;
        bfLog('Form → error:', err.message);
      }

      submitting = false;
    });

    form.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('is-error');
        field.setAttribute('aria-invalid', 'false');
        field.closest('.form-group')?.classList.remove('is-error');
      });
    });
  });
}


/* ─── 06. NAV LINK ACTIVO ─── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link:not(.btn)');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
}


/* ─── 07. SISTEMA DE COOKIES (RGPD + LSSI + Consent Mode v2) ─── */

const DEV = (() => {
  try {
    return ['localhost', '127.0.0.1'].includes(window.location.hostname) ||
           new URLSearchParams(window.location.search).has('bf_debug');
  } catch { return false; }
})();
function bfLog(...args) {
  if (DEV) console.log('%c[BrinkFlow]', 'color:#C4714A;font-weight:bold', ...args);
}

/*
  ──────────────────────────────────────────────────────────────────
  IDs DE TRACKING
  ──────────────────────────────────────────────────────────────────
  Reemplazar estos placeholders con los IDs reales cuando estén disponibles.
  GA4_ID        → Google Analytics 4 de BrinkFlow
  META_PIXEL_ID → Meta Pixel de BrinkFlow
  ──────────────────────────────────────────────────────────────────
*/
const GA4_ID        = '';          /* ← pegar ID de GA4 cuando esté disponible */
const GTM_ID        = 'GTM-XXXXXXX';
const META_PIXEL_ID = '';          /* ← pegar ID de Meta Pixel cuando esté disponible */

const CONSENT_KEY     = 'bf_consent';
const CONSENT_VERSION = '1';

function initConsentModeDefaults() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function() { window.dataLayer.push(arguments); };
  }
  window.gtag('consent', 'default', {
    ad_storage:            'denied',
    analytics_storage:     'denied',
    ad_user_data:          'denied',
    ad_personalization:    'denied',
    functionality_storage: 'granted',
    security_storage:      'granted',
    wait_for_update:       500,
  });
  bfLog('Consent defaults aplicados');
}

function updateConsentMode(prefs) {
  window.gtag('consent', 'update', {
    ad_storage:         prefs.marketing ? 'granted' : 'denied',
    analytics_storage:  prefs.analytics ? 'granted' : 'denied',
    ad_user_data:       prefs.marketing ? 'granted' : 'denied',
    ad_personalization: prefs.marketing ? 'granted' : 'denied',
  });
  bfLog('Consent Mode actualizado →', { analytics: prefs.analytics, marketing: prefs.marketing });
}

function loadAnalytics() {
  const gtmActive = GTM_ID && GTM_ID !== 'GTM-XXXXXXX';
  if (!GA4_ID && !gtmActive) return;
  if (document.querySelector('script[data-bf-analytics]')) return;

  if (gtmActive) {
    const s = document.createElement('script');
    s.dataset.bfAnalytics = '1';
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(s);
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    bfLog('GTM inicializado:', GTM_ID);
  } else if (GA4_ID) {
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);
    const s = document.createElement('script');
    s.dataset.bfAnalytics = '1';
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(s);
    bfLog('GA4 inicializado:', GA4_ID);
  }
}

function loadMarketing() {
  if (!META_PIXEL_ID) return;
  if (typeof window.fbq === 'function') return;

  !function(f,b,e,v,n,t,s){
    if(f.fbq)return;
    n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
    t=b.createElement(e);t.async=!0;t.dataset.bfMarketing='1';t.src=v;
    s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
  }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
  bfLog('Meta Pixel inicializado:', META_PIXEL_ID);
}

function saveConsent(prefs) {
  const data = {
    v:           CONSENT_VERSION,
    ts:          Date.now(),
    necessary:   true,
    analytics:   !!prefs.analytics,
    marketing:   !!prefs.marketing,
    preferences: !!prefs.preferences,
  };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(data)); } catch (_) {}
  bfLog('Consentimiento guardado:', data);
  return data;
}

function loadConsentData() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return data.v === CONSENT_VERSION ? data : null;
  } catch { return null; }
}

function applyConsent(prefs) {
  updateConsentMode(prefs);
  if (prefs.analytics)  loadAnalytics();
  if (prefs.marketing)  loadMarketing();
}

function createCookieModal() {
  if (document.getElementById('cookieModal')) return;

  const modal = document.createElement('div');
  modal.id = 'cookieModal';
  modal.className = 'cookie-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Preferencias de privacidad');
  modal.setAttribute('aria-hidden', 'true');

  modal.innerHTML = `
    <div class="cookie-modal__overlay" id="cookieModalOverlay"></div>
    <div class="cookie-modal__panel">
      <div class="cookie-modal__header">
        <h2 class="cookie-modal__title">Preferencias de privacidad</h2>
        <button class="cookie-modal__close" id="cookieModalClose" aria-label="Cerrar panel de preferencias">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="cookie-modal__body">
        <p class="cookie-modal__desc">Elige qué categorías de cookies aceptas. Puedes cambiar estas preferencias en cualquier momento desde el pie de página. Las cookies necesarias no se pueden desactivar.</p>
        <div class="cookie-category">
          <div class="cookie-category__header">
            <div class="cookie-category__info">
              <strong>Necesarias</strong>
              <p>Esenciales para el funcionamiento básico del sitio: sesión, seguridad y navegación. No almacenan información personal identificable.</p>
            </div>
            <span class="cookie-toggle__always-on">Siempre activas</span>
          </div>
        </div>
        <div class="cookie-category">
          <div class="cookie-category__header">
            <div class="cookie-category__info">
              <strong>Analítica</strong>
              <p>Nos ayudan a entender cómo interactúan los visitantes con el sitio. Toda la información es anónima y agregada (p.ej. Google Analytics).</p>
            </div>
            <label class="cookie-toggle__switch" aria-label="Activar cookies de analítica">
              <input type="checkbox" id="cookie-analytics" name="analytics">
              <span class="cookie-toggle__track"></span>
            </label>
          </div>
        </div>
        <div class="cookie-category">
          <div class="cookie-category__header">
            <div class="cookie-category__info">
              <strong>Marketing</strong>
              <p>Permiten mostrar publicidad personalizada basada en tus intereses en plataformas como Google o Meta (Facebook / Instagram).</p>
            </div>
            <label class="cookie-toggle__switch" aria-label="Activar cookies de marketing">
              <input type="checkbox" id="cookie-marketing" name="marketing">
              <span class="cookie-toggle__track"></span>
            </label>
          </div>
        </div>
        <div class="cookie-category">
          <div class="cookie-category__header">
            <div class="cookie-category__info">
              <strong>Preferencias</strong>
              <p>Recuerdan configuraciones personalizadas como idioma o ajustes de visualización.</p>
            </div>
            <label class="cookie-toggle__switch" aria-label="Activar cookies de preferencias">
              <input type="checkbox" id="cookie-preferences" name="preferences">
              <span class="cookie-toggle__track"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="cookie-modal__footer">
        <button id="cookieSavePrefs" class="btn btn--primary btn--full">Guardar mis preferencias</button>
      </div>
    </div>`;

  document.body.appendChild(modal);
}

function openCookieModal() {
  createCookieModal();
  const modal = document.getElementById('cookieModal');
  if (!modal) return;

  const stored = loadConsentData() || {};
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.checked = !!val; };
  set('cookie-analytics',   stored.analytics);
  set('cookie-marketing',   stored.marketing);
  set('cookie-preferences', stored.preferences);

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('cookieModalClose')?.focus(), 50);
}

function closeCookieModal() {
  const modal = document.getElementById('cookieModal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function dismissBanner(prefs) {
  const banner = document.getElementById('cookieBanner');
  const saved  = saveConsent(prefs);
  applyConsent(saved);
  if (banner) {
    banner.classList.remove('is-visible');
    setTimeout(() => { banner.style.display = 'none'; }, 420);
  }
}

function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;

  /* ?bf_reset en la URL borra el consentimiento guardado (útil para pruebas locales) */
  try {
    if (new URLSearchParams(window.location.search).has('bf_reset')) {
      localStorage.removeItem(CONSENT_KEY);
      bfLog('Consentimiento borrado por bf_reset');
    }
  } catch(_) {}

  initConsentModeDefaults();

  const stored = loadConsentData();
  if (stored) {
    banner.style.display = 'none';
    applyConsent(stored);
    return;
  }

  const actions = banner.querySelector('.cookie-banner__actions');
  if (actions && !document.getElementById('cookieManage')) {
    const btn = document.createElement('button');
    btn.id = 'cookieManage';
    btn.className = 'btn btn--ghost btn--sm';
    btn.textContent = 'Gestionar';
    actions.insertBefore(btn, actions.firstChild);
  }

  setTimeout(() => banner.classList.add('is-visible'), 700);

  document.getElementById('cookieAccept')?.addEventListener('click', () => {
    dismissBanner({ analytics: true, marketing: true, preferences: true });
  });
  document.getElementById('cookieDecline')?.addEventListener('click', () => {
    dismissBanner({ analytics: false, marketing: false, preferences: false });
  });
  document.getElementById('cookieManage')?.addEventListener('click', openCookieModal);
}

function initCookieModal() {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'cookieModalClose' || e.target.closest('#cookieModalClose')) {
      closeCookieModal();
    }
    if (e.target.id === 'cookieModalOverlay') {
      closeCookieModal();
    }
    if (e.target.id === 'cookieSavePrefs') {
      const prefs = {
        analytics:   document.getElementById('cookie-analytics')?.checked   || false,
        marketing:   document.getElementById('cookie-marketing')?.checked   || false,
        preferences: document.getElementById('cookie-preferences')?.checked || false,
      };
      dismissBanner(prefs);
      closeCookieModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('cookieModal');
      if (modal?.classList.contains('is-open')) closeCookieModal();
    }
  });
}

function initCookieSettingsLinks() {
  document.querySelectorAll('[data-cookie-settings]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); openCookieModal(); });
  });
}


/* ─── 08. TRACKING DE EVENTOS ─── */

function trackGA4(eventName, params) {
  const c = loadConsentData();
  if (!c?.analytics || !GA4_ID) return;
  window.gtag('event', eventName, params || {});
  bfLog('[GA4]', eventName, params || {});
}

function trackMeta(eventName, params) {
  const c = loadConsentData();
  if (!c?.marketing || typeof window.fbq !== 'function') return;
  window.fbq('track', eventName, params || {});
  bfLog('[Meta]', eventName, params || {});
}

function trackFormLead(formId) {
  trackGA4('generate_lead', { method: 'contact_form', form_id: formId || 'contact' });
  trackGA4('form_submit',   { form_id: formId || 'contact' });
  trackMeta('Lead',         { content_name: 'contact_form' });
  bfLog('[Track] Lead disparado, form:', formId);
}

function initEventTracking() {
  document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
    el.addEventListener('click', () => trackGA4('click_email'));
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(el => {
    el.addEventListener('click', () => trackGA4('click_phone'));
  });
  document.querySelectorAll('.whatsapp-bubble').forEach(el => {
    el.addEventListener('click', () => {
      trackGA4('click_whatsapp');
      trackMeta('Contact', { content_name: 'whatsapp' });
    });
  });
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => {
      const evt = el.dataset.track;
      if (!evt) return;
      trackGA4(evt);
      if (evt === 'cta_diagnostico') {
        trackMeta('Contact', { content_name: 'cta_diagnostico' });
      }
    });
  });
}


/* ─── 09. INIT ─── */
function safeInit(name, fn) {
  try { fn(); } catch (e) { console.error('[BrinkFlow] Error en ' + name + ':', e); }
}

document.addEventListener('DOMContentLoaded', () => {
  safeInit('header',        initHeader);
  safeInit('mobileMenu',    initMobileMenu);
  safeInit('smoothScroll',  initSmoothScroll);
  safeInit('animations',    initScrollAnimations);
  safeInit('contactForm',   initContactForm);
  safeInit('activeNav',     initActiveNav);
  safeInit('cookieBanner',  initCookieBanner);
  safeInit('cookieModal',   initCookieModal);
  safeInit('cookieLinks',   initCookieSettingsLinks);
  safeInit('eventTracking', initEventTracking);
});
