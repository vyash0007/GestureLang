"use client";
import React, { useState } from "react";
import Image from "next/image";

const sampleText = `Gesture: A -> open hand, up-sweep`;

export default function DownloadPage() {
  const [format, setFormat] = useState("png");
  const [selectedImage, setSelectedImage] = useState("/images/image-1.svg");
  const [size, setSize] = useState<number | null>(null);

  async function computeSize(src: string) {
    try {
      const res = await fetch(src);
      const blob = await res.blob();
      setSize(blob.size);
    } catch {
      setSize(null);
    }
  }

  React.useEffect(() => {
    computeSize(selectedImage);
  }, [selectedImage]);

  async function copyText() {
    try {
      await navigator.clipboard.writeText(sampleText);
      alert("Copied sample gesture text to clipboard");
    } catch {
      alert("Copy failed");
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Download</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white dark:bg-slate-800 rounded">
          <h2 className="font-semibold">Choose format</h2>
          <div className="mt-3 flex gap-2">
            <label className={`px-3 py-2 rounded border ${format==='png'?'bg-amber-400':''}`}>
              <input type="radio" name="format" value="png" checked={format==='png'} onChange={() => setFormat('png')} /> PNG
            </label>
            <label className={`px-3 py-2 rounded border ${format==='jpg'?'bg-amber-400':''}`}>
              <input type="radio" name="format" value="jpg" checked={format==='jpg'} onChange={() => setFormat('jpg')} /> JPG
            </label>
            <label className={`px-3 py-2 rounded border ${format==='svg'?'bg-amber-400':''}`}>
              <input type="radio" name="format" value="svg" checked={format==='svg'} onChange={() => setFormat('svg')} /> SVG
            </label>
          </div>

          <div className="mt-4">
            <h3 className="font-medium">Selected image</h3>
            <div className="mt-2">
              <div className="relative w-full h-56 md:h-72 bg-slate-50 dark:bg-slate-700 rounded overflow-hidden fade-in flex items-center justify-center p-3">
                <Image src={selectedImage} alt="selected" fill priority style={{ objectFit: 'contain' }} className="transition-transform duration-150" />
              </div>
            </div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Size: {size ? `${(size/1024).toFixed(1)} KB` : 'Unknown'}</div>
          </div>

          <div className="mt-4 flex gap-2">
            <a href={selectedImage} download className="px-4 py-2 bg-amber-400 rounded">Download {format.toUpperCase()}</a>
            <button onClick={copyText} className="px-4 py-2 border rounded">Copy Sample</button>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-slate-800 rounded">
          <h2 className="font-semibold">Preview + Options</h2>
          <div className="mt-3">
            <p className="text-sm text-slate-600 dark:text-slate-300">Choose another sample image to preview file-size and download.</p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[1,2,3,4,5,6].map(i => {
                const src = `/images/image-${i}.svg`;
                const label = `Gesture ${String.fromCharCode(64 + i)}`;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(src)}
                    className={`flex flex-col h-44 w-full rounded overflow-hidden bg-transparent ${selectedImage===src? 'ring-2 ring-amber-400':''}`}
                    aria-pressed={selectedImage===src}
                  >
                    <div className="flex-none h-28 relative bg-white dark:bg-slate-800 p-2 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image src={src} alt={`img-${i}`} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 33vw, 100px" />
                      </div>
                    </div>
                    <div className="h-12 flex items-center justify-center text-center text-sm font-semibold text-slate-700 dark:text-slate-200 bg-transparent">{label}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

