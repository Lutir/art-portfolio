"use client";

import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    const update = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("theme"); } catch {}
      document.documentElement.dataset.theme = saved === "dark" ? "dark" : "light";
    };
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("storage", update);
    };
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  }

  return <button className="theme-toggle" type="button" onClick={toggle} aria-label="Toggle light or dark theme">
    <span className="switch-to-dark" aria-hidden="true">☾</span>
    <span className="switch-to-light" aria-hidden="true">☼</span>
  </button>;
}
