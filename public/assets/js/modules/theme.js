import { t } from './language.js';

const storageKey = 'bao-khang-theme';

function applyTheme(theme) {
  const resolvedTheme = theme === 'dark' ? 'dark' : 'light';
  const toggle = document.querySelector('[data-theme-toggle]');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  document.documentElement.dataset.theme = resolvedTheme;
  toggle?.setAttribute('data-i18n-aria-label', resolvedTheme === 'dark' ? 'theme.toLight' : 'theme.toDark');
  toggle?.setAttribute('aria-label', t(resolvedTheme === 'dark' ? 'theme.toLight' : 'theme.toDark'));
  metaThemeColor?.setAttribute('content', resolvedTheme === 'dark' ? '#18251F' : '#EAE7D6');
}

export function initTheme() {
  const toggle = document.querySelector('[data-theme-toggle]');
  applyTheme(document.documentElement.dataset.theme);

  toggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });

  window.addEventListener('languagechange', () => applyTheme(document.documentElement.dataset.theme));
}
