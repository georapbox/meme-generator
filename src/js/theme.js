(function () {
  const storageKey = 'meme-generator/theme';
  const darkSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function getStoredTheme() {
    try {
      const theme = window.localStorage.getItem(storageKey);
      return theme === 'light' || theme === 'dark' ? theme : 'system';
    } catch {
      return 'system';
    }
  }

  function getSystemTheme() {
    return darkSchemeMediaQuery.matches ? 'dark' : 'light';
  }

  function setBootstrapTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme === 'system' ? getSystemTheme() : theme);
  }

  function handleSystemThemeChange() {
    setBootstrapTheme('system');
  }

  function handleThemePreferenceChange(evt) {
    setBootstrapTheme(evt.detail.resolvedTheme);
  }

  darkSchemeMediaQuery.addEventListener('change', handleSystemThemeChange);
  document.addEventListener('theme-change', handleThemePreferenceChange);

  setBootstrapTheme(getStoredTheme());
})();
