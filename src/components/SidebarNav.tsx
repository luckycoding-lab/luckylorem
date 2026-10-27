"use client";

import React from "react";
import {
  Car,
  Cpu,
  Laptop,
  Settings,
  Shuffle,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

export type CategoryId = "tech" | "cars" | "ai" | "random";

interface SideNavProps {
  activeCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  onOpenSettings?: () => void;
}

const CATEGORIES: { id: CategoryId; label: string; icon: React.ElementType }[] = [
  { id: "tech", label: "Tech", icon: Laptop },
  { id: "cars", label: "Automotive / Cars", icon: Car },
  { id: "ai", label: "Artificial Intelligence", icon: Cpu },
  { id: "random", label: "Random / Classic", icon: Shuffle },
];

export default function SidebarNav({
  activeCategory,
  onSelectCategory,
  onOpenSettings,
}: SideNavProps) {
  return (
    <aside
      aria-label="Sidebar Navigation"
      className="hidden md:block sticky top-0 h-screen w-60 flex-col justify-between border-r border-zinc-800/80 bg-transparent p-5 backdrop-blur-xl ring-1 ring-white/5 select-none"
    >
      <div className="space-y-7">
        {/* Brand App Icon (Matching FloatingDock pill glow style) */}
        <div className="flex items-center gap-3 px-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-800 bg-transparent shadow-lg shadow-black/40 ring-1 ring-white/5">
            <Sparkles className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <span className="block text-xs font-bold tracking-tight text-zinc-100">
              Lucky Lorem
            </span>
            <span className="block text-[10px] font-mono text-zinc-500">
              v1.0 • Studio
            </span>
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Categories
            </span>
            <span className="rounded-full border border-zinc-800 bg-transparent px-1.5 py-0.2 text-[9px] font-mono text-zinc-400">
              {CATEGORIES.length}
            </span>
          </div>

          <nav className="flex flex-col gap-1.5">
            {CATEGORIES.map((item) => {
              const Icon = item.icon;
              const isActive = activeCategory === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectCategory(item.id)}
                  className={`group flex w-full cursor-pointer items-center justify-between rounded-full px-3.5 py-2 text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? "border border-zinc-700/80 bg-transparent text-white shadow-md shadow-black/30 ring-1 ring-white/10"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className={`h-3.5 w-3.5 transition-colors ${
                        isActive
                          ? "text-blue-400"
                          : "text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full border border-blue-400 shadow-sm shadow-blue-400" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full border-t border-zinc-800/80" />

        {/* Secondary / Controls Group */}
        <div className="space-y-1.5">
          <span className="block px-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            Controls
          </span>
          <button
            type="button"
            onClick={onOpenSettings}
            className="flex w-full cursor-pointer items-center gap-2.5 rounded-full px-3.5 py-2 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-zinc-500" />
            <span>Dial Settings</span>
          </button>
          <button
            type="button"
            className="flex w-full cursor-pointer items-center gap-2.5 rounded-full px-3.5 py-2 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <Settings className="h-3.5 w-3.5 text-zinc-500" />
            <span>Preferences</span>
          </button>
        </div>
      </div>

      {/* Bottom Status Pill (FloatingDock pill look) */}
      <div className="flex items-center justify-between rounded-full border border-zinc-800/90 bg-transparent px-3.5 py-1.5 text-xs text-zinc-400 shadow-inner">
        <span className="text-[11px] font-medium">Engine</span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full border border-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] font-semibold text-emerald-400">
            Online
          </span>
        </div>
      </div>
    </aside>
  );
}