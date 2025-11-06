"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import GestureCard from "../components/GestureCard";
import GestureModal from "../components/GestureModal";

const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const images = Array.from({ length: 26 }, (_, i) => `/images/image-${i + 1}.svg`);

export default function GesturePage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<{ letter: string; src: string } | null>(null);

  const items = useMemo(() => {
    return letters.map((l, i) => ({ letter: l, src: images[i] }));
  }, []);

  const filtered = items.filter((it) => it.letter.toLowerCase().includes(query.toLowerCase()));

  function openCard(letter: string, src: string) {
    setSelected({ letter, src });
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Alphabet Gesture</h1>
        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search letter..."
            className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filtered.map((it, i) => (
          <motion.div key={it.letter} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.03 }}>
            <GestureCard key={it.letter} letter={it.letter} image={it.src} onOpenAction={openCard} />
          </motion.div>
        ))}
      </div>

  <GestureModal open={!!selected} letter={selected?.letter} src={selected?.src} onCloseAction={() => setSelected(null)} />
    </div>
  );
}
