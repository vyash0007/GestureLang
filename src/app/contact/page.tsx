"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate() {
    const e: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Please enter a valid email address.";
    if (!message.trim() || message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(eEvent: React.FormEvent) {
    eEvent.preventDefault();
    if (!validate()) return;
    // placeholder behavior: in a real app you'd send to an API
    console.log("Contact message:", { name, email, message });
    setSent(true);
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact GestureLang</h1>

      {sent ? (
        <div role="status" className="p-6 bg-emerald-50 dark:bg-emerald-900 rounded border border-emerald-200 dark:border-emerald-800">
          <p className="text-slate-900 dark:text-slate-100">Thanks — your message has been recorded. We&apos;ll respond to the email you provided if applicable.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-6 rounded shadow-sm">
          <p className="text-sm text-slate-600 dark:text-slate-300">We welcome feedback and contributions. Please provide some details and we&apos;ll get back to you when appropriate.</p>

          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full mt-2 px-3 py-2 rounded border bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-300 ${errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-600'}`}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id="name-error" role="alert" className="mt-1 text-sm text-rose-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mt-2 px-3 py-2 rounded border bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-300 ${errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-600'}`}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" role="alert" className="mt-1 text-sm text-rose-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full mt-2 px-3 py-2 rounded border min-h-[140px] bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-300 ${errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-600'}`}
              rows={6}
              placeholder="How can we help? Tell us a bit more..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <p id="message-error" role="alert" className="mt-1 text-sm text-rose-600">{errors.message}</p>}
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 bg-amber-400 text-slate-900 rounded font-medium interactive">Send message</button>
            <button type="button" onClick={() => { setName(""); setEmail(""); setMessage(""); setErrors({}); }} className="px-4 py-2 border rounded">Reset</button>
            <div className="ml-auto text-sm text-slate-500 dark:text-slate-400">We aim to reply within 3 business days.</div>
          </div>
        </form>
      )}
    </main>
  );
}
