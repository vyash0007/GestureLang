"use client";
import React from "react";

export default function Step({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow animate-fadeIn">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-3 text-slate-700 dark:text-slate-300">{content}</p>
    </div>
  );
}
