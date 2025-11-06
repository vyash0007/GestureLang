"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-semibold text-slate-900 dark:text-white">GestureLang</Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200">Home</Link>
            <Link href="/gesture" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200">Gesture</Link>
            <Link href="/tutorial" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200">Tutorial</Link>
            <Link href="/practice" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200">Practice</Link>
            <Link href="/community" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200">Community</Link>
            <Link href="/download" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200">Download</Link>
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md bg-slate-100 dark:bg-slate-800"
            >
              <svg className="w-5 h-5 text-slate-800 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200">Home</Link>
            <Link href="/gesture" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200">Gesture</Link>
            <Link href="/tutorial" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200">Tutorial</Link>
            <Link href="/practice" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200">Practice</Link>
            <Link href="/community" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200">Community</Link>
            <Link href="/download" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200">Download</Link>
          </div>
        </div>
      )}
    </header>
  );
}

