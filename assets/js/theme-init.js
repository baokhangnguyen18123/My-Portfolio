(function () {
  const storageKey = 'bao-khang-theme';
  const savedTheme = localStorage.getItem(storageKey);
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : preferredTheme;

  document.documentElement.classList.add('js');
  document.documentElement.dataset.theme = theme;
}());
