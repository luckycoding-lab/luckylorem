// src/components/BlogCanvas.tsx
"use client";

import React, { useState } from "react";
import { RotateCw, Copy, Check, Eye, Code2, Clock } from "lucide-react";
import type { CategoryId } from "@/lib/vocabulary";

interface BlogCanvasProps {
  heading: string;
  paragraphs: string[];
  activeCategory: CategoryId;
  onRefreshHeading: () => void;
  onRefreshParagraph: () => void;
  onCopyHeading: () => void;
  onCopyParagraph: () => void;
  copiedHeading: boolean;
  copiedParagraph: boolean;
}

export default function BlogCanvas({
  heading,
  paragraphs,
  activeCategory,
  onRefreshHeading,
  onRefreshParagraph,
  onCopyHeading,
  onCopyParagraph,
  copiedHeading,
  copiedParagraph,
}: BlogCanvasProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "markdown">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const fullContent = paragraphs.join("\n\n");
  const markdownText = `# ${heading}\n\n**Category:** ${activeCategory.toUpperCase()}\n\n${fullContent}`;
  const totalWords = fullContent.trim().split(/\s+/).filter(Boolean).length;

  const copyMarkdown = () => {
    navigator.clipboard.writeText(markdownText);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  return (
    <article className="space-y-8 rounded-3xl border-none ring-0 p-4 sm:p-8 md:border md:border-zinc-800/80 md:ring-1 md:ring-white/5 md:p-10 bg-zinc-950/70 backdrop-blur-2xl shadow-2xl transition-all">
      {/* Top Controls: View Tabs & Word Metric */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-(--border-color) pb-4">
        <div className="flex items-center gap-1.5 rounded-xl border border-(--border-color) p-1 bg-transparent">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
              activeTab === "preview"
                ? "bg-transparent text-(--primary) shadow-sm"
                : "text-(--text-muted) hover:text-foreground"
            }`}
          >
            <Eye className="w-3.5 h-3.5"/>
            Formatted Article
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("markdown")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
              activeTab === "markdown"
                ? "bg-transparent text-(--primary) shadow-sm"
                : "text-(--text-muted) hover:text-foreground"
            }`}
          >
            <Code2 className="w-3.5 h-3.5"/>
            Markdown
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-(--text-muted)">
          <span className="font-mono">
            Words: <strong className="text-(--primary)">{totalWords}</strong> / 500
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5"/> ~{Math.ceil(totalWords / 160)} min read
          </span>
        </div>
      </div>

      {activeTab === "preview" ? (
        <div className="space-y-8">
          {/* Headline Block with Dedicated Controls */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-widest text-(--primary) bg-transparent px-2.5 py-0.5 rounded-md border border-(--primary)/30">
                {activeCategory} Journal
              </span>

              {/* Heading Actions */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={onRefreshHeading}
                  title="Generate New Heading"
                  className="rounded-lg border border-(--border-color) p-1.5 text-(--text-muted) hover:text-foreground hover:border-(--primary) transition cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5"/>
                </button>
                <button
                  type="button"
                  onClick={onCopyHeading}
                  className="inline-flex items-center gap-1 rounded-lg border border-(--border-color) px-2.5 py-1.5 text-xs font-medium text-(--text-muted) hover:text-foreground hover:border-(--primary) transition cursor-pointer"
                >
                  {copiedHeading ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400"/>
                  ) : (
                    <Copy className="w-3.5 h-3.5"/>
                  )}
                  <span>{copiedHeading ? "Copied" : "Copy Title"}</span>
                </button>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-snug">
              {heading}
            </h1>
          </div>

          {/* Featured Visual Placeholder */}
          <div className="h-64 sm:h-80 w-full rounded-2xl border border-(--border-color) bg-transparent flex flex-col items-center justify-center p-6 text-center">
            <span className="text-xs font-semibold text-(--primary) uppercase tracking-wider">
              {activeCategory} Editorial Visual
            </span>
            <p className="text-xs text-(--text-muted) mt-1">
              Wireframe Banner Placeholder (16:9 Aspect Ratio)
            </p>
          </div>

          {/* Paragraph Toolbar with Dedicated Controls */}
          <div className="flex items-center justify-between border-b border-(--border-color) pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-(--text-muted)">
              Article Body
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={onRefreshParagraph}
                title="Generate New Paragraphs"
                className="rounded-lg border border-(--border-color) p-1.5 text-(--text-muted) hover:text-foreground hover:border-(--primary) transition cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5"/>
              </button>
              <button
                type="button"
                onClick={onCopyParagraph}
                className="inline-flex items-center gap-1 rounded-lg border border-(--border-color) px-2.5 py-1.5 text-xs font-medium text-(--text-muted) hover:text-foreground hover:border-(--primary) transition cursor-pointer"
              >
                {copiedParagraph ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400"/>
                ) : (
                  <Copy className="w-3.5 h-3.5"/>
                )}
                <span>{copiedParagraph ? "Copied" : "Copy Body"}</span>
              </button>
            </div>
          </div>

          {/* Paragraphs with Drop-Cap Styling on Index 0 */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-(--text-muted)">
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "first-letter:float-left first-letter:text-5xl first-letter:font-black first-letter:text-(--primary) first-letter:pr-3 first-letter:leading-none text-foreground"
                    : ""
                }
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      ) : (
        /* Raw Markdown View */
        <div className="space-y-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={copyMarkdown}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-(--primary) hover:underline cursor-pointer"
            >
              {copiedMarkdown ? <Check className="w-3.5 h-3.5 text-emerald-400"/> : <Copy className="w-3.5 h-3.5"/>}
              <span>{copiedMarkdown ? "Copied All Markdown!" : "Copy Full Markdown"}</span>
            </button>
          </div>
          <pre className="p-5 rounded-2xl border border-(--border-color) bg-transparent text-xs sm:text-sm font-mono text-amber-300/90 whitespace-pre-wrap select-all leading-loose">
            {markdownText}
          </pre>
        </div>
      )}
    </article>
  );
}