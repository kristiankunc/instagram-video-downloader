// Dynamic theme change based on user preference (dark/light)
(async () => {
  const userTheme = document.documentElement.className;

  const colorSchemeQueryList = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );
  const setColorScheme = (e) => {
    if (e.matches) {
      document.documentElement.className = "dark";
    } else {
      document.documentElement.className = "";
    }
  };
  setColorScheme(colorSchemeQueryList);

  if (!userTheme) {
    colorSchemeQueryList.addEventListener("change", setColorScheme);
  } else {
    document.documentElement.className = userTheme == "light" ? "" : "dark";
  }
})();
