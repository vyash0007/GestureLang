"use client";
import React from "react";
import Image from "next/image";

export default function GestureModal({
  open,
  letter,
  src,
  onCloseAction,
}: {
  open: boolean;
  letter?: string;
  src?: string;
  onCloseAction: () => void;
}) {
  const [broken, setBroken] = React.useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
  <div className="fixed inset-0 bg-black/50" onClick={onCloseAction} />

      <div className="relative z-60 w-11/12 md:w-3/4 lg:w-2/4 bg-white dark:bg-slate-900 rounded-lg shadow-xl overflow-hidden">
        <div className="p-4 md:p-6">
          <div className="flex items-start gap-4">
            <div className="relative w-32 h-32 bg-slate-100 dark:bg-slate-700 rounded-md overflow-hidden flex items-center justify-center">
              {src && !broken ? (
                <Image src={src} alt={`Gesture ${letter}`} fill className="object-contain p-1" onError={() => setBroken(true)} />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-5xl font-bold text-slate-400">{letter}</span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{letter}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Example gesture for letter {letter}.</p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    try {
                      navigator.clipboard.writeText(letter ?? "");
                    } catch {
                      // ignore
                    }
                  }}
                  className="px-3 py-2 rounded-md bg-slate-100 dark:bg-slate-800 text-sm"
                >
                  Copy Letter
                </button>

                {src && !broken && (
                  <a href={src} download className="px-3 py-2 rounded-md bg-amber-400 text-sm">
                    Download Image
                  </a>
                )}

                <button onClick={onCloseAction} className="ml-auto px-3 py-2 rounded-md bg-slate-200 dark:bg-slate-700 text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
