(function () {
  const updateTheme = matches => {
    document.documentElement.setAttribute('data-bs-theme', matches ? 'dark' : 'light');
  };

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  updateTheme(mediaQuery.matches);

  mediaQuery.addEventListener('change', e => updateTheme(e.matches));
})();
