(function () {
  function getStoredTheme() {
    try {
      return window.localStorage.getItem('meme-generator/theme') || 'system';
    } catch {
      return 'system';
    }
  }

  function getDeviceTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    const themeMap = {
      dark: 'dark',
      light: 'light',
      system: getDeviceTheme()
    };

    document.documentElement.setAttribute('data-bs-theme', themeMap[theme] || themeMap.system);
  }

  function handleMatchMediaChange(evt) {
    if (getStoredTheme() !== 'system') {
      return;
    }
    applyTheme(evt.matches ? 'dark' : 'light');
  }

  function handleThemeChange(evt) {
    const theme = evt.detail.theme;
    const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme === 'system' ? deviceTheme : theme);
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', handleMatchMediaChange);

  document.addEventListener('theme-change', handleThemeChange);

  applyTheme(getStoredTheme());
})();
