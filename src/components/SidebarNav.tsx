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
    <aside className="sticky top-0 flex h-screen w-56 flex-col justify-between border-r border-(--border-color) bg-(--bg-card)/80 p-6 backdrop-blur-xl selection:bg-none">
      <div className="space-y-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-(--border-color) bg-(--primary-muted) shadow-lg">
          <Sparkles className="h-5 w-5 text-(--primary)" />
        </div>

        {/* Categories Navigation Group */}
        <div className="space-y-2">
          <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-(--text-muted)">
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
                      ? "border border-(--border-color) bg-(--primary-muted) font-semibold text-(--text-main)"
                      : "text-(--text-muted) hover:bg-(--primary-muted) hover:text-(--text-main)"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${isActive ? "text-(--primary)" : "text-(--text-muted)"}`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        <div className="border-t border-(--border-color)" />

        {/* Secondary / Controls Group */}
        <div className="space-y-1">
          <button
            onClick={onOpenSettings}
            className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-xs text-(--text-muted) transition hover:bg-(--primary-muted) hover:text-(--text-main)"
          >
            <SlidersHorizontal className="h-4 w-4 text-(--text-muted)" />
            <span>Dial Settings</span>
          </button>
          <button className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-xs text-(--text-muted) transition hover:bg-(--primary-muted) hover:text-(--text-main)">
            <Settings className="h-4 w-4 text-(--text-muted)" />
            <span>Preferences</span>
          </button>
        </div>
      </div>

      {/* Subtle Bottom Status */}
      <div className="flex items-center justify-between rounded-xl border border-(--border-color) bg-(--bg-page) px-3 py-2 text-[11px] text-(--text-muted)">
        <span>Engine</span>
        <span className="font-mono text-[10px] text-(--primary)">Ready</span>
      </div>
    </aside>
  );
}
