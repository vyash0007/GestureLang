'use client'
import Image from "next/image";
import { useState } from "react";

export default function DownloadPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 h-screen my-auto mt-[100px] mb-[-153px] font-mono ">
      <header className="flex justify-between items-center pb-4 border-b border-black">
        <h1 className="text-6xl font-bold text-black">Our App</h1>
        
      </header>
      
      {/* <div className="mt-6">
        <button className="px-4 py-2 mr-2 border rounded text-black-500">Windows</button>
        <button className="px-4 py-2 mr-2 border rounded text-black-500">macOS</button>
        <button className="px-4 py-2 border rounded text-black-500">Linux</button>
      </div> */}
      
      <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-black">Our App Ultimate</h2>
          <p className="text-black text-xl">The Leading Software for Professionals</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl ">Download .exe (Windows)</button>
          <p className="text-black text-l mt-2 ">Free 30-day trial</p>
        </div>
        <div className="relative w-72 h-48 border rounded-xl overflow-hidden border-black">
          <Image src="" alt="App Screenshot" layout="fill" objectFit="cover" />
        </div>
      </div>
      
      <footer className="mt-6 text-black text-sm text-xl">
        <p>Version: 2025.1.0.1| Build: 243.23654.189 | 29 January 2025</p>
        <div className="flex space-x-4 mt-2 text-xl">
          <a href="#" className="underline">System requirements</a>
          <a href="#" className="underline">Installation instructions</a>
          <a href="#" className="underline">Other versions</a>
        </div>
      </footer>
    </div>
  );
}
