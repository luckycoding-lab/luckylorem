"use client";

import { Minus, Plus } from "lucide-react";

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

  return (
    <div className="fixed bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3 rounded-2xl border border-(--border-color) bg-(--bg-card)/90 px-9 py-1.5 backdrop-blur-md">
      <button
        onClick={onCopyHeading}
        type="button"
        title="Copy Heading"
        className="flex cursor-pointer items-center rounded-md bg-(--primary-muted) p-2 duration-100 hover:bg-(--primary)/25 active:border active:border-(--primary)"
      >
        <span className="pr-1 text-sm font-bold text-(--primary)">
          Copy Heading
        </span>
        <div className="inline-flex h-7 items-center rounded-full border border-(--primary) bg-(--primary) px-2.5 font-['Inter',system-ui,sans-serif] text-[11px] font-medium tracking-[0.02em] text-foreground">
          ⌘ + k
        </div>
      </button>

      <button
        onClick={onCopyParagraph}
        type="button"
        title="Copy Paragraph"
        className="flex cursor-pointer items-center rounded-md bg-(--primary-muted) p-2 duration-100 hover:bg-(--primary)/25 active:border active:border-(--primary)"
      >
        <span className="pr-1 text-sm font-bold text-(--primary)">
          Copy Paragraph
        </span>
        <div className="inline-flex h-7 items-center rounded-full border border-(--primary) bg-(--primary) px-2.5 font-['Inter',system-ui,sans-serif] text-[11px] font-medium tracking-[0.02em] text-foreground">
          ⌘ + s
        </div>
      </button>

      <div className="flex items-center gap-1 border-l border-(--border-color) pl-2">
        {/* Minus Button */}
        <button
          type="button"
          disabled={paragraphDial <= 1}
          onClick={handleDecrease}
          className="rounded-md p-1 text-(--text-muted) transition hover:bg-(--primary-muted) hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
          aria-label="Decrease paragraphs"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>

        {/* Display Counter */}
        <span className="min-w-6 text-center font-mono text-xs sm:text-sm font-bold text-(--primary)">
          {paragraphDial}
        </span>

        {/* Plus Button */}
        <button
          type="button"
          disabled={paragraphDial >= 5}
          onClick={handleIncrease}
          className="rounded-md p-1 text-(--text-muted) transition hover:bg-(--primary-muted) hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
          aria-label="Increase paragraphs"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}