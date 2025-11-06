"use client";
import React from "react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">What is GestureLang?</h2>
        <p className="text-slate-700 dark:text-slate-300 mt-2">GestureLang is a lightweight learning and sharing platform focused on gesture-based communication. It provides visual references, tutorials, practice tools, and downloadable assets to help people learn and use gestures in everyday situations.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Is this a replacement for sign language interpreters?</h2>
        <p className="text-slate-700 dark:text-slate-300 mt-2">No. GestureLang is intended as an educational and supportive tool — it helps learners practice and prepare but does not replace certified interpreters or professional services in legal, medical, or official contexts.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Can I use the images and materials commercially?</h2>
        <p className="text-slate-700 dark:text-slate-300 mt-2">The current placeholder assets are for demonstration only. We will provide clear licensing information when real gesture assets are added. If you need commercial licensing, please contact us via the Contact page.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">How accurate are the gestures?</h2>
        <p className="text-slate-700 dark:text-slate-300 mt-2">We strive for accuracy and cultural sensitivity. If you notice an inaccuracy or want to contribute corrected assets, please reach out through the community or contact pages — community review is a core part of improving the content.</p>
      </section>

      <div className="mt-8">
        <Link href="/contact" className="px-4 py-2 bg-amber-400 rounded interactive">Contact us</Link>
      </div>
    </main>
  );
}
