"use client";
import React, { useEffect } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      const isDark = stored ? stored === "dark" : prefersDark;
      document.documentElement.classList.toggle("dark", isDark);
    } catch {
      // ignore
    }
  }, []);

  return <>{children}</>;
}
