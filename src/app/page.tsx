"use client";

import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useSyncExternalStore,
} from "react";
import SidebarNav from "@/components/SidebarNav";
import FloatingDock from "@/components/FloatingDock";
import BlogVisualBanner from "@/components/BlogVisualBanner";
import {
  generateHeadingText,
  generateParagraphsList,
  type CategoryId,
} from "@/lib/vocabulary";
import {
  RotateCw,
  Copy,
  Check,
  Eye,
  Code2,
  Clock,
  Calendar,
  ChevronRight,
} from "lucide-react";
import Footer from "@/components/Footer";

// --- 1. Hydration-Safe Dial Subscription (Local Storage) ---
function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("lucky_lorem_dial_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("lucky_lorem_dial_change", callback);
  };
}

// --- 2. Hydration-Safe Date Subscription (Next.js Dynamic Time) ---
const emptySubscribe = () => () => {};

function getClientFormattedDate(): string {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("tech");
  const [headingSeed, setHeadingSeed] = useState(1);
  const [paragraphSeed, setParagraphSeed] = useState(1);
  const [activeTab, setActiveTab] = useState<"preview" | "markdown">("preview");

  // Read dial safely: client gets stored dial, server gets stable default "2"
  const rawDial = useSyncExternalStore(
    subscribeToStorage,
    () => localStorage.getItem("lucky_lorem_dial") ?? "2",
    () => "2"
  );

  const paragraphDial = useMemo(() => {
    const parsed = parseInt(rawDial, 10);
    return !isNaN(parsed) && parsed >= 1 && parsed <= 5 ? parsed : 2;
  }, [rawDial]);

  const handleDialChange = (newCount: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lucky_lorem_dial", newCount.toString());
      window.dispatchEvent(new Event("lucky_lorem_dial_change"));
    }
  };

  const currentDate = useSyncExternalStore(
    emptySubscribe,
    getClientFormattedDate,
    () => "Oct 27, 2026"
  );

  // Copy indicators
  const [copiedHeading, setCopiedHeading] = useState(false);
  const [copiedParagraph, setCopiedParagraph] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const handleSelectCategory = (cat: CategoryId) => {
    setActiveCategory(cat);
    setHeadingSeed((prev) => prev + 1);
    setParagraphSeed((prev) => prev + 1);
  };

  // Deterministic Text Generation
  const currentHeading = useMemo(() => {
    return generateHeadingText(activeCategory, headingSeed);
  }, [activeCategory, headingSeed]);

  const currentParagraphs = useMemo(() => {
    return generateParagraphsList(activeCategory, paragraphDial, paragraphSeed);
  }, [activeCategory, paragraphDial, paragraphSeed]);

  const fullContent = currentParagraphs.join("\n\n");
  const markdownText = `# ${currentHeading}\n\n**Published on:** ${currentDate} | **Category:** ${activeCategory.toUpperCase()}\n\n${fullContent}`;
  const totalWords = fullContent.trim().split(/\s+/).filter(Boolean).length;

  // Copy Callbacks
  const copyHeading = useCallback(() => {
    navigator.clipboard.writeText(currentHeading);
    setCopiedHeading(true);
    setTimeout(() => setCopiedHeading(false), 2000);
  }, [currentHeading]);

  const copyParagraph = useCallback(() => {
    navigator.clipboard.writeText(fullContent);
    setCopiedParagraph(true);
    setTimeout(() => setCopiedParagraph(false), 2000);
  }, [fullContent]);

  const copyMarkdown = () => {
    navigator.clipboard.writeText(markdownText);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  // Global Keyboard Shortcuts (⌘+K / ⌘+S)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.metaKey || e.ctrlKey;

      if (isCmdOrCtrl && e.key.toLowerCase() === "h") {
        e.preventDefault();
        copyHeading();
      }
      if (isCmdOrCtrl && e.key.toLowerCase() === "p") {
        e.preventDefault();
        copyParagraph();
      }
      if (isCmdOrCtrl && e.shiftKey && e.key.toLowerCase() === "h") {
        e.preventDefault();
        copyHeading();
      }
      if (isCmdOrCtrl && e.shiftKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
        copyParagraph();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [copyHeading, copyParagraph]);

  return (
    <div className="relative z-10 flex min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30 selection:text-blue-200">
      {/* 1. Left Sticky Navigation Sidebar */}
      <SidebarNav
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 2. Main Content Stage */}
      <main className="min-w-0 flex-1 p-4 pb-36 md:p-0 lg:p-12">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Top Breadcrumb & Live Date Pill Header */}
          <div className="flex flex-col items-start justify-between gap-3 pb-3 sm:flex-row sm:items-center">
            <nav className="flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-3.5 py-1.5 text-xs text-zinc-400 backdrop-blur-xl ring-1 ring-white/5">
              <span>Feed</span>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
              <span>Articles</span>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
              <span className="font-semibold capitalize text-blue-400">
                {activeCategory}
              </span>
            </nav>

            <div className="flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-3.5 py-1.5 font-mono text-xs text-zinc-400 backdrop-blur-xl ring-1 ring-white/5">
              <Calendar className="h-3.5 w-3.5 text-blue-400" />
              <span>{currentDate}</span>
            </div>
          </div>

          {/* Article Presentation Container */}
          <article className="relative space-y-8 rounded-3xl border border-zinc-800/80 bg-zinc-950/70 p-6 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5 sm:p-10"
          aria-label="Floating Controls Dock"
          >
            {/* View Switcher Tabs & Reading Time Statistics */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-5">
              <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 p-1 ring-1 ring-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                    activeTab === "preview"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Eye className="h-3.5 w-3.5" />
                  Formatted Blog
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("markdown")}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                    activeTab === "markdown"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Code2 className="h-3.5 w-3.5" />
                  Markdown
                </button>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                <span>
                  Words: <strong className="text-zinc-200">{totalWords}</strong> / 500
                </span>
                <span className="text-zinc-600">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-blue-400" /> ~
                  {Math.ceil(totalWords / 160)} min read
                </span>
              </div>
            </div>

            {activeTab === "preview" ? (
              <div className="space-y-8">
                {/* Heading Block with Refresh & Copy Actions */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-blue-400">
                      {activeCategory} Journal
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setHeadingSeed((s) => s + 1)}
                        title="Generate New Heading"
                        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                      >
                        <RotateCw className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={copyHeading}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                      >
                        {copiedHeading ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 text-zinc-400" />
                        )}
                        <span>{copiedHeading ? "Copied" : "Copy Title"}</span>
                      </button>
                    </div>
                  </div>

                  <h1 className="text-2xl font-extrabold tracking-tight text-white leading-snug sm:text-4xl">
                    {currentHeading}
                  </h1>
                </div>

                {/* Dynamic Category Visual Banner (picsum.photos) */}
                <BlogVisualBanner category={activeCategory} />

                {/* Paragraph Toolbar with Refresh & Copy */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Article Body
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setParagraphSeed((s) => s + 1)}
                      title="Generate New Paragraphs"
                      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                    >
                      <RotateCw className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={copyParagraph}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                    >
                      {copiedParagraph ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5 text-zinc-400" />
                      )}
                      <span>{copiedParagraph ? "Copied" : "Copy Body"}</span>
                    </button>
                  </div>
                </div>

                {/* Rendered Paragraphs with Lead Drop-Cap */}
                <div className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {currentParagraphs.map((para, idx) => (
                    <p
                      key={idx}
                      className={
                        idx === 0
                          ? "first-letter:float-left first-letter:pr-3 first-letter:text-5xl first-letter:font-black first-letter:leading-none first-letter:text-blue-500 text-zinc-200"
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
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    {copiedMarkdown ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                    <span>{copiedMarkdown ? "Copied!" : "Copy Full Markdown"}</span>
                  </button>
                </div>
                <pre className="rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-5 font-mono text-xs leading-loose text-zinc-300 whitespace-pre-wrap select-all sm:text-sm">
                  {markdownText}
                </pre>
              </div>
            )}
          </article>
        </div>

        {/* 3. Floating Pill Dock Controls */}
        <FloatingDock
          paragraphDial={paragraphDial}
          onDialChange={handleDialChange}
          onCopyHeading={copyHeading}
          onCopyParagraph={copyParagraph}
        />
      <Footer />
      </main>
    </div>
  );
}