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

const CATEGORIES: { id: CategoryId; label: string; icon: React.ElementType }[] =
  [
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
    <aside className="w-56 h-screen sticky top-0 flex flex-col justify-between p-6 bg-zinc-950/40 backdrop-blur-xl border-r border-zinc-800/60 selection:bg-none">
      <div className="space-y-8">
        <div className="w-11 h-11 rounded-2xl bg-linear-to-b from-zinc-800 to-zinc-900 border border-zinc-700/50 flex items-center justify-center shadow-lg shadow-black/40">
          <Sparkles className="w-5 h-5 text-zinc-200" />
        </div>

        {/* Categories Navigation Group */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3">
            Categories
          </span>
          <nav className="flex flex-col gap-1">
            {CATEGORIES.map((item) => {
              const Icon = item.icon;
              const isActive = activeCategory === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onSelectCategory(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white font-semibold bg-zinc-900/90 shadow-sm border border-zinc-800/80"
                      : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/40"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-zinc-500"}`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        <div className="border-t border-gray-300" />

        {/* Secondary / Controls Group */}
        <div className="space-y-1">
          <button
            onClick={onOpenSettings}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/40 transition cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-zinc-500" />
            <span>Dial Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/40 transition cursor-pointer">
            <Settings className="w-4 h-4 text-zinc-500" />
            <span>Preferences</span>
          </button>
        </div>
      </div>

      {/* Subtle Bottom Status */}
      <div className="px-3 py-2 rounded-xl bg-zinc-900/30 border border-zinc-900 text-[11px] text-zinc-500 flex items-center justify-between">
        <span>Engine</span>
        <span className="text-emerald-400 font-mono text-[10px]">Ready</span>
      </div>
    </aside>
  );
}
