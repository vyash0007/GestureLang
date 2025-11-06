// components/Footer.js
"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">GestureLang</h3>
            <p className="text-slate-300 text-sm">
              Breaking language barriers through the art of gesture communication.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/gesture" className="hover:text-amber-400">Gestures</Link></li>
              <li><Link href="/tutorial" className="hover:text-amber-400">Tutorial</Link></li>
              <li><Link href="/practice" className="hover:text-amber-400">Practice</Link></li>
              <li><Link href="/community" className="hover:text-amber-400">Community</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-amber-400">Blog</a></li>
              <li><a href="#" className="hover:text-amber-400">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-400">Contact</a></li>
              <li><a href="#" className="hover:text-amber-400">Privacy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-amber-400">f</a>
              <a href="#" className="hover:text-amber-400">𝕏</a>
              <a href="#" className="hover:text-amber-400">in</a>
              <a href="#" className="hover:text-amber-400">📷</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p className="mb-2">© 2025 GestureLang. All rights reserved.</p>
          <p>
            Communication with gestures is an evolving art form that enhances accessibility and enables meaningful
            connection across language barriers.
          </p>
        </div>
      </div>
    </footer>
  );
}
