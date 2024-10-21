(function () {
  function getStoredTheme() {
    return window.localStorage.getItem('meme-generator/theme') || 'system';
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

  try {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleMatchMediaChange);

    applyTheme(getStoredTheme());
  } catch (err) {
    console.error(err);
  }
})();
