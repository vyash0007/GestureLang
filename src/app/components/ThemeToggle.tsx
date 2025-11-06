"use client";
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = stored ? stored === "dark" : prefersDark;
      setIsDark(initial);
      document.documentElement.classList.toggle("dark", initial);
    } catch {
      // noop
    }
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    try {
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // noop
    }
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="p-2 rounded-md bg-slate-200 dark:bg-slate-700 text-sm"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
