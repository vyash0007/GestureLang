"use client";
import React from "react";

export default function GestureCard({
  letter,
  image,
  onOpen,
}: {
  letter: string;
  image: string;
  onOpen: (l: string, src: string) => void;
}) {
  const [broken, setBroken] = React.useState(false);
  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
      onClick={() => onOpen(letter, image)}
    >
      <div className="h-40 w-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
        {broken ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-bold text-slate-400">{letter}</span>
          </div>
        ) : (
          <img
            src={image}
            alt={`Gesture ${letter}`}
            className="object-contain object-center max-h-full max-w-full h-full w-full p-2"
            onError={() => setBroken(true)}
          />
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{letter}</h3>
        </div>
      </div>
    </div>
  );
}
