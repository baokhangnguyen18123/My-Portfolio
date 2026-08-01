import { t } from './language.js';

export function initNavigation() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const navigation = document.querySelector('[data-nav]');
  const backdrop = document.querySelector('[data-nav-backdrop]');
  const headerActions = document.querySelector('[data-header-actions]');
  const links = [...document.querySelectorAll('[data-nav-link]')];
  const desktopQuery = window.matchMedia('(min-width: 64rem)');
  let isOpen = false;

  function setMenu(open, returnFocus = false) {
    const isDesktop = desktopQuery.matches;
    isOpen = open && !isDesktop;
    document.documentElement.classList.toggle('nav-open', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    toggle?.setAttribute('aria-expanded', String(isOpen));
    toggle?.setAttribute('data-i18n-aria-label', isOpen ? 'navigation.close' : 'navigation.open');
    toggle?.setAttribute('aria-label', t(isOpen ? 'navigation.close' : 'navigation.open'));
    backdrop?.setAttribute('aria-hidden', String(!isOpen));

    if (navigation) {
      navigation.inert = !isDesktop && !isOpen;
      if (isDesktop) navigation.removeAttribute('aria-hidden');
      else navigation.setAttribute('aria-hidden', String(!isOpen));
    }

    if (headerActions) headerActions.inert = !isDesktop && !isOpen;

    if (isOpen) {
      links[0]?.focus();
    } else if (returnFocus) {
      toggle?.focus();
    }
  }

  toggle?.addEventListener('click', () => setMenu(!isOpen));
  backdrop?.addEventListener('click', () => setMenu(false, true));
  links.forEach((link) => link.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) setMenu(false, true);
  });

  desktopQuery.addEventListener('change', () => setMenu(false));
  window.addEventListener('languagechange', () => setMenu(isOpen));
  setMenu(false);

  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
          if (isCurrent) link.setAttribute('aria-current', 'page');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55%', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  navigation?.addEventListener('click', (event) => event.stopPropagation());
}
