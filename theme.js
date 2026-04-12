const THEME_KEY = "research-site-theme";

function getStoredTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getPreferredTheme() {
  return getStoredTheme() || getSystemTheme();
}

function applyTheme(theme, persist = false) {
  const next = theme === "dark" ? "dark" : "light";
  const root = document.documentElement;
  root.setAttribute("data-theme", next);
  root.style.colorScheme = next;

  if (persist) {
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      // Ignore storage write errors.
    }
  }

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    const toLight = next === "dark";
    button.setAttribute("aria-label", toLight ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("title", toLight ? "Switch to light mode" : "Switch to dark mode");

    const icon = button.querySelector(".theme-toggle-icon");
    if (!icon) {
      return;
    }

    icon.innerHTML = toLight
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
  });
}

function syncThemeFromPreference() {
  applyTheme(getPreferredTheme(), false);
}

function setupThemeToggle() {
  syncThemeFromPreference();

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      applyTheme(current === "dark" ? "light" : "dark", true);
    });
  });

  window.addEventListener("pageshow", () => {
    // Ensures correct theme after browser back/forward cache restores pages.
    syncThemeFromPreference();
  });

  window.addEventListener("storage", (event) => {
    if (event.key !== THEME_KEY) {
      return;
    }
    if (event.newValue !== "light" && event.newValue !== "dark") {
      return;
    }
    applyTheme(event.newValue, false);
  });
}

setupThemeToggle();
