"use client";

import { Minus, Plus, Copy, Sparkles, Check } from "lucide-react";
import { useState } from "react";

interface FloatingDockProps {
  paragraphDial?: number;
  onDialChange?: (newCount: number) => void;
  onCopyHeading?: () => void;
  onCopyParagraph?: () => void;
}

export default function FloatingDock({
  paragraphDial = 2,
  onDialChange,
  onCopyHeading = () => {},
  onCopyParagraph = () => {},
}: FloatingDockProps) {
  const [copiedHeading, setCopiedHeading] = useState(false);
  const [copiedParagraph, setCopiedParagraph] = useState(false);

  const handleDecrease = () => {
    if (paragraphDial > 1 && onDialChange) {
      onDialChange(paragraphDial - 1);
    }
  };

  const handleIncrease = () => {
    if (paragraphDial < 5 && onDialChange) {
      onDialChange(paragraphDial + 1);
    }
  };

  const handleCopyHeadingClick = () => {
    onCopyHeading();
    setCopiedHeading(true);
    setTimeout(() => setCopiedHeading(false), 1500);
  };

  const handleCopyParagraphClick = () => {
    onCopyParagraph();
    setCopiedParagraph(true);
    setTimeout(() => setCopiedParagraph(false), 1500);
  };

  return (
    <aside
      aria-label="Floating Controls Dock"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-2.5 rounded-full border border-zinc-800/80 bg-transparent p-1.5 pl-4 pr-1.5 shadow-2xl backdrop-blur-xl ring-1 ring-white/5 transition-all">
        {/* 1. Left Action: Copy Heading with ⌘K badge */}
        <button
          type="button"
          onClick={handleCopyHeadingClick}
          className="group flex cursor-pointer items-center gap-2 text-xs font-medium text-zinc-300 transition-colors hover:text-white"
          title="Copy Heading (Ctrl H)"
        >
          {copiedHeading ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-zinc-500 transition-colors group-hover:text-zinc-300" />
          )}
          <span>Heading</span>
          <span className="hidden md:block rounded-full border border-zinc-800 bg-transparent px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
            Ctrl H
          </span>
        </button>

        {/* Divider */}
        <div className="h-4 border-l border-zinc-800/80" />

        {/* 2. Middle: Paragraph Stepper Counter */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled={paragraphDial <= 1}
            onClick={handleDecrease}
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Decrease paragraph count"
          >
            <Minus className="h-3 w-3" />
          </button>

          {/* Stepper Count Badge */}
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-zinc-800 bg-transparent px-2 font-mono text-xs font-semibold text-zinc-200">
            {paragraphDial} <span className="ml-1 text-[10px] text-zinc-500 font-sans">p</span>
          </span>

          <button
            type="button"
            disabled={paragraphDial >= 5}
            onClick={handleIncrease}
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Increase paragraph count"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-4 border-l border-zinc-800/80" />

        {/* 3. Right: Highlighted Pill CTA Button (Image ki tarah styled) */}
        <button
          type="button"
          onClick={handleCopyParagraphClick}
          className="flex cursor-pointer items-center gap-1.5 rounded-full border border-blue-500/50 bg-transparent px-3.5 py-1.5 text-xs font-semibold text-blue-300 shadow-lg shadow-blue-600/25 transition-all hover:text-blue-200 active:scale-95"
          title="Copy Paragraphs (Ctrl P)"
        >
          {copiedParagraph ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <Sparkles className="h-3.5 w-3.5" />
          )}
          <span>{copiedParagraph ? "Copied!" : "Copy Body"}</span>
          <span className="hidden md:block ml-0.5 rounded-full bg-transparent px-1.5 py-0.2 text-[9px] font-mono text-blue-100">
            Ctrl P
          </span>
        </button>
      </div>
    </aside>
  );
}