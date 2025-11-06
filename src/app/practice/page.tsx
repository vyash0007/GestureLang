"use client";
import React, { useState, useMemo } from "react";

const FLASHCARDS = [
  { id: 1, letter: "A", description: "Open hand, sweep upward", difficulty: "Easy" },
  { id: 2, letter: "B", description: "Flat hand, palm facing sideways", difficulty: "Easy" },
  { id: 3, letter: "C", description: "Curved hand, fingers together", difficulty: "Medium" },
  { id: 4, letter: "D", description: "Index finger up, other fingers curled", difficulty: "Medium" },
  { id: 5, letter: "E", description: "All fingers extended horizontally", difficulty: "Hard" },
  { id: 6, letter: "F", description: "Complex finger positioning", difficulty: "Hard" },
];

export default function PracticePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [difficulty, setDifficulty] = useState("All");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const filtered = useMemo(
    () => (difficulty === "All" ? FLASHCARDS : FLASHCARDS.filter((c) => c.difficulty === difficulty)),
    [difficulty]
  );

  const current = filtered[currentIndex];

  function handleNext() {
    if (currentIndex < filtered.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  }

  function handleCorrect() {
    setScore(score + 1);
    setStreak(streak + 1);
    handleNext();
  }

  function handleIncorrect() {
    setStreak(0);
    handleNext();
  }

  function reset() {
    setCurrentIndex(0);
    setFlipped(false);
    setScore(0);
    setStreak(0);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Gesture Practice</h1>
        <div className="flex gap-4 text-sm">
          <div className="px-3 py-2 bg-amber-100 dark:bg-amber-900 rounded">Score: {score}</div>
          <div className="px-3 py-2 bg-green-100 dark:bg-green-900 rounded">Streak: {streak}</div>
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {["All", "Easy", "Medium", "Hard"].map((d) => (
          <button
            key={d}
            onClick={() => {
              setDifficulty(d);
              setCurrentIndex(0);
              setFlipped(false);
            }}
            className={`px-4 py-2 rounded-lg font-semibold ${
              difficulty === d ? "bg-amber-400 text-slate-900" : "bg-slate-200 dark:bg-slate-700"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Flashcard */}
      {current && (
        <div className="mb-8">
          <div
            onClick={() => setFlipped(!flipped)}
            className="aspect-square bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-lg flex items-center justify-center cursor-pointer min-h-80"
          >
            <div className="text-center text-white">
              {!flipped ? (
                <div>
                  <div className="text-8xl font-bold mb-4">{current.letter}</div>
                  <div className="text-xl">Click to reveal</div>
                </div>
              ) : (
                <div>
                  <div className="text-2xl font-semibold mb-4">{current.description}</div>
                  <div className={`text-sm px-3 py-1 rounded-full inline-block ${current.difficulty === "Easy" ? "bg-green-500" : current.difficulty === "Medium" ? "bg-yellow-500" : "bg-red-500"}`}>
                    {current.difficulty}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 flex gap-2 justify-center flex-wrap">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-lg border disabled:opacity-50"
            >
              Previous
            </button>
            <button onClick={() => setFlipped(!flipped)} className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700">
              Flip
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === filtered.length - 1}
              className="px-4 py-2 rounded-lg border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Feedback Buttons */}
      {current && (
        <div className="flex gap-4 justify-center mb-8">
          <button onClick={handleIncorrect} className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold">
            ❌ Incorrect
          </button>
          <button onClick={handleCorrect} className="px-6 py-2 rounded-lg bg-green-500 text-white font-semibold">
            ✓ Correct
          </button>
        </div>
      )}

      {/* Progress */}
      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-8">
        <div className="flex items-center justify-between mb-2">
          <span>Progress</span>
          <span>
            {currentIndex + 1} / {filtered.length}
          </span>
        </div>
        <div className="w-full h-2 bg-slate-300 dark:bg-slate-600 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-400"
            style={{ width: `${((currentIndex + 1) / filtered.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="text-center">
        <button onClick={reset} className="px-6 py-2 rounded-lg bg-slate-200 dark:bg-slate-700">
          Reset Practice
        </button>
      </div>
    </div>
  );
}
