"use client";

import { Minus, Plus } from "lucide-react";

export default function FloatingDock() {
  return (
    <div className="flex fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 px-9 py-1.5 rounded-2xl gap-3">
      <button
        title="Save"
        className="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2"
      >
        <span className="text-sm text-lime-400 font-bold pr-1">
          Copy Heading
        </span>
        <div
          className="inline-flex items-center h-7 px-2.5 bg-lime-400 border border-lime-300 rounded-full font-['Inter',system-ui,sans-serif] text-[11px] font-medium 
        text-(--color-mist,#fff) tracking-[0.02em]"
        >
          ⌘ + k
        </div>
      </button>

      <button
        title="Save"
        className="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2"
      >
        <span className="text-sm text-lime-400 font-bold pr-1">
          Copy Paragraph
        </span>
        <div
          className="inline-flex items-center h-7 px-2.5 bg-lime-400 border border-lime-300 rounded-full font-['Inter',system-ui,sans-serif] text-[11px] font-medium 
        text-(--color-mist,#fff) tracking-[0.02em]"
        >
          ⌘ + s
        </div>
      </button>

      <div className="flex items-center gap-1 border-l border-zinc-700/80 pl-2">
        {/* Minus Button */}
        <button
          type="button"
          //   disabled={paragraphDial <= 1}
          //   onClick={() => onDialChange(Math.max(1, paragraphDial - 1))}
          className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
          aria-label="Decrease paragraphs"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>

        {/* Display Counter */}
        <span className="min-w-5 text-center text-xs font-mono font-bold text-amber-400">
          {/* {paragraphDial} */}
        </span>

        {/* Plus Button */}
        <button
          type="button"
          //   disabled={paragraphDial >= 5}
          //   onClick={() => onDialChange(Math.min(5, paragraphDial + 1))}
          className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
          aria-label="Increase paragraphs"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
