"use client";
import React from "react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">How GestureLang Helps the Deaf Community</h1>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
        Deaf and hard-of-hearing people face many daily communication barriers — from limited access to spontaneous conversations
        in public spaces to challenges in education, healthcare, and employment. GestureLang is designed to reduce those gaps by
        providing approachable, visual-first lessons and tools for learning and sharing gesture-based communication.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Common challenges</h2>
        <ul className="list-disc ml-6 text-slate-700 dark:text-slate-300 space-y-2">
          <li>Lack of real-time interpreters in everyday situations.</li>
          <li>Limited learning resources that are practical and interactive.</li>
          <li>Social isolation due to communication friction.</li>
          <li>Barriers to inclusive services (healthcare, transport, public announcements).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How GestureLang helps</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          GestureLang focuses on learning-by-doing. The app combines visual assets, short tutorials, and practice modes so learners
          can gradually build fluency and confidence. Key benefits include:
        </p>
        <ul className="list-disc ml-6 text-slate-700 dark:text-slate-300 space-y-2">
          <li>Clear, repeatable gesture illustrations and previews for each letter and common words.</li>
          <li>Interactive practice (flashcards and quizzes) that helps users memorize and apply gestures.</li>
          <li>Downloadable assets and simple copy-ready phrases for quick sharing.</li>
          <li>A community hub where learners and native signers can exchange tips and corrections.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Real-world impact</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          While no single tool replaces a qualified interpreter, GestureLang helps people take meaningful first steps: family members
          can learn quick phrases, teachers get supplemental visual aids, and small businesses can offer better, more inclusive service.
        </p>
        <p className="text-slate-700 dark:text-slate-300">We continuously seek feedback from the community to make the content accurate, respectful, and culturally appropriate.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Get involved</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-3">If you&apos;re part of the deaf community or a signer, your input matters.</p>
        <ul className="list-disc ml-6 text-slate-700 dark:text-slate-300 space-y-2">
          <li>Share feedback or corrections via the <Link href="/community" className="text-amber-400">community</Link> page.</li>
          <li>Contribute open-licensed gesture imagery or approve assets we plan to publish.</li>
          <li>Report accessibility issues so we can improve UX for screen readers and keyboard users.</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link href="/" className="px-4 py-2 bg-amber-400 rounded interactive">Back to Home</Link>
      </div>
    </main>
  );
}
