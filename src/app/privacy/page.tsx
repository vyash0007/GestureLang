"use client";
import React from "react";

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="text-slate-700 dark:text-slate-300 mb-4">Your privacy matters to us. This page summarizes how GestureLang collects and uses data. This is a simplified policy for demonstration; for production, consult a legal advisor.</p>

      <section className="mb-4">
        <h2 className="font-semibold">Data we collect</h2>
        <ul className="list-disc ml-6 text-slate-700 dark:text-slate-300">
          <li>Information you provide directly (contact form, feedback).</li>
          <li>Anonymous usage data (page views, feature usage) to help us improve the site.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="font-semibold">How we use data</h2>
        <p className="text-slate-700 dark:text-slate-300">We use data to improve content, prioritize features, and respond to user inquiries. We will not sell personal data to third parties.</p>
      </section>

      <section className="mb-4">
        <h2 className="font-semibold">Third-party services</h2>
        <p className="text-slate-700 dark:text-slate-300">Some features (analytics or hosting) may use third-party services. We recommend reviewing any third party&apos;s privacy documentation.</p>
      </section>

      <section className="mb-4">
        <h2 className="font-semibold">Contact</h2>
        <p className="text-slate-700 dark:text-slate-300">For privacy questions, email us at privacy@gesturelang.example (placeholder).</p>
      </section>
    </main>
  );
}
