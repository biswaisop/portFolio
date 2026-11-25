"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.dataset.theme === "light");
  }, []);

  function toggleTheme() {
    const nextTheme = light ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    setLight(!light);

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // The theme can still change when storage is unavailable.
    }
  }

  const Icon = light ? Moon : Sun;

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={light ? "Use dark theme" : "Use light theme"}>
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}
