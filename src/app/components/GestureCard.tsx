"use client";
import React from "react";
import Image from "next/image";

export default function GestureCard({
  letter,
  image,
  onOpenAction,
}: {
  letter: string;
  image: string;
  onOpenAction: (l: string, src: string) => void;
}) {
  const [broken, setBroken] = React.useState(false);
  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300"
      onClick={() => onOpenAction(letter, image)}
    >
      <div className="relative h-40 w-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
        {broken ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-bold text-slate-400">{letter}</span>
          </div>
        ) : (
          <>
            <Image
              src={image}
              alt={`Gesture ${letter}`}
              fill
              sizes="(max-width: 640px) 160px, 320px"
              className="object-contain p-2"
              onError={() => setBroken(true)}
            />
          </>
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
