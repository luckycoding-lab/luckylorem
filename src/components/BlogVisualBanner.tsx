"use client";

import React, { useState } from "react";
import Image from "next/image";
import { type CategoryId } from "@/lib/vocabulary";
import { Sparkles, Image as ImageIcon } from "lucide-react";

interface BlogVisualBannerProps {
  category: CategoryId;
}

// Maps categories to curated Picsum photo IDs
const CATEGORY_PICSUM_IDS: Record<CategoryId, number> = {
  tech: 1,       // Laptop & workspace
  cars: 111,     // Vintage car / automotive
  ai: 180,       // Digital tech & electronics
  random: 1062,  // Abstract nature
};

export default function BlogVisualBanner({ category }: BlogVisualBannerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const imageId = CATEGORY_PICSUM_IDS[category] ?? 1;
  // Format: https://picsum.photos/id/{id}/{width}/{height}
  const imageUrl = `https://picsum.photos/id/${imageId}/1200/675`;

  return (
    <div className="group relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 shadow-inner">
      {/* Visual Image via next/image */}
      {!hasError ? (
        <Image
          src={imageUrl}
          alt={`${category} visual banner`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${
            isLoading ? "scale-105 blur-lg opacity-40" : "scale-100 blur-0 opacity-80"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
        />
      ) : (
        /* Fallback Placeholder */
        <div className="flex h-full w-full flex-col items-center justify-center space-y-3 bg-zinc-900/60 p-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/80 text-blue-400 shadow-lg">
            <ImageIcon className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
            {category} Wireframe Banner
          </span>
        </div>
      )}

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/30 to-transparent pointer-events-none" />

      {/* Bottom Category Badge Tag */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-950/85 px-3 py-1 font-mono text-[11px] font-semibold text-zinc-200 backdrop-blur-md shadow-lg ring-1 ring-white/10">
          <Sparkles className="h-3 w-3 text-blue-400" />
          <span className="capitalize">{category}</span> Visual
        </span>
        <span className="hidden sm:inline-block rounded-full border border-zinc-800 bg-zinc-950/70 px-2.5 py-1 text-[10px] font-mono text-zinc-400 backdrop-blur-md">
          ID #{imageId} • 16:9
        </span>
      </div>
    </div>
  );
}