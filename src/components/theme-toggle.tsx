"use client";

import { useLayoutEffect } from "react";

// Switches between dark and light by setting data-theme on <html> and
// remembering the choice in localStorage. The inline script in the root
// layout applies the saved choice before the first paint.
export function ThemeToggle() {
  // In development, React's Strict Mode remount clears the attribute the
  // inline script set, so re-apply it. This is a no-op in production.
  useLayoutEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function toggle() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // The label names the theme you'd switch to. CSS picks which one shows,
  // so the server and browser always render the same HTML.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="h-11 cursor-pointer text-sm text-muted transition-colors duration-200 hover:text-foreground"
    >
      <span className="hidden dark:inline">Light</span>
      <span className="dark:hidden">Dark</span>
    </button>
  );
}
