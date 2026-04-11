const THEME_KEY = "research-site-theme";

function getPreferredTheme() {
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  window.localStorage.setItem(THEME_KEY, theme);
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    const icon = button.querySelector(".theme-toggle-icon");
    if (icon) {
      icon.innerHTML =
        theme === "dark"
          ? `
            <svg viewBox="0 0 24 24" role="presentation" focusable="false">
              <path d="M12 4.5V2m0 20v-2.5M6.7 6.7L5 5m14 14-1.7-1.7M4.5 12H2m20 0h-2.5M6.7 17.3 5 19m14-14-1.7 1.7M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/>
            </svg>
          `
          : `
            <svg viewBox="0 0 24 24" role="presentation" focusable="false">
              <path d="M20 14.2A8 8 0 0 1 9.8 4 8.5 8.5 0 1 0 20 14.2Z"/>
            </svg>
          `;
    }
  });
}

function setupThemeToggle() {
  applyTheme(getPreferredTheme());
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  });
}

setupThemeToggle();
