"use client";
import React, { useState } from "react";
import Step from "./Step";
import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Introduction",
    content:
      "Welcome to Gesture Language. In this tutorial you'll learn the basics of gestures and how to read them.",
  },
  {
    title: "Hand Shape",
    content: "Observe the hand shape carefully. Small finger movements convey large meaning.",
  },
  {
    title: "Movement",
    content: "Movement direction and speed matter — practice slow then faster variations.",
  },
  {
    title: "Expression",
    content: "Combine facial expression with hand movement for clarity and emphasis.",
  },
];

export default function TutorialPage() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => Math.min(i + 1, STEPS.length - 1));
  }
  function back() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Interactive Tutorial</h1>
        <div className="text-sm text-slate-600 dark:text-slate-300">Step {index + 1} of {STEPS.length}</div>
      </div>

      <div className="mt-6">
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Step title={STEPS[index].title} content={STEPS[index].content} />
        </motion.div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button onClick={back} disabled={index === 0} className="px-4 py-2 rounded-md border disabled:opacity-50">
          Back
        </button>
        <button onClick={next} disabled={index === STEPS.length - 1} className="px-4 py-2 rounded-md bg-amber-400">
          Next
        </button>

        <div className="ml-auto flex items-center gap-2">
          <div className="w-40 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              style={{ width: `${((index + 1) / STEPS.length) * 100}%` }}
              className="h-full bg-amber-400"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
        Tip: Use the Next button or press <kbd className="px-1 bg-slate-100 dark:bg-slate-800 rounded">→</kbd> to step forward.
      </div>
    </div>
  );
}
