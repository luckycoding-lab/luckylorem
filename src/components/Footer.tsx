import Link from "next/link";
import {
  Coffee,
  GitBranchPlus,
  ArrowUpRight,
  Heart,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-none ring-0 md:border md:border-zinc-800/80 md:ring-1 md:ring-white/5 md:rounded-full bg-zinc-950/80 text-xs text-zinc-400 backdrop-blur-xl transition-colors">
      <div className="mx-auto max-w-7xl px-0 md:px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Brand Column */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-md ring-1 ring-white/5">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            </div>
            <span className="text-sm font-bold tracking-tight text-zinc-100">
              Lucky Lorem
            </span>
          </div>
          <p className="text-[11px] leading-relaxed text-zinc-500">
            Curated developer dummy text and realistic layout filler for
            designers and engineers.
          </p>
        </div>

        {/* Column 1: Utility */}
        <div className="space-y-2.5">
          <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-200">
            Utility
          </h4>
          <ul className="space-y-1.5 text-zinc-400">
            <li>
              <a
                href="#categories"
                className="transition-colors hover:text-blue-400"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#markdown"
                className="transition-colors hover:text-blue-400"
              >
                Markdown Export
              </a>
            </li>
            <li>
              <a
                href="#shortcuts"
                className="flex items-center gap-1.5 transition-colors hover:text-blue-400"
              >
                <span>Shortcuts</span>
                <span className="rounded-full border border-zinc-800 bg-zinc-900/90 px-1.5 py-0.5 text-[9px] font-mono text-zinc-500">
                  Ctrl H | Ctrl P
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Developer Ecosystem */}
        <div className="space-y-2.5">
          <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-200">
            Developer
          </h4>
          <ul className="space-y-1.5 text-zinc-400">
            <li>
              <a
                href="https://portfoliolucky.vercel.app/#projects"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-blue-400"
              >
                More Projects <ArrowUpRight className="h-3 w-3 text-zinc-500" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-username/lucky-lorem"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-blue-400"
              >
                GitHub Repo <GitBranchPlus className="h-3 w-3 text-zinc-500" />
              </a>
            </li>
            <li>
              <a
                href="https://buymeacoffee.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                Support <Coffee className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Open Source */}
        <div className="space-y-2.5">
          <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-200">
            Legal
          </h4>
          <ul className="space-y-1.5 text-zinc-400">
            <li>
              <Link
                href="/privacy"
                className="transition-colors hover:text-blue-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="transition-colors hover:text-blue-400"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-zinc-800/80 px-4 py-5 text-[11px] sm:flex-row sm:px-6 lg:px-8">
        <p className="text-zinc-500 font-mono">
          © 2026 Lucky Lorem. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-1.5 text-zinc-400">
          <span>Crafted with</span>
          <Heart className="h-3 w-3 fill-red-500 text-red-500" />
          <span>for rapid UI wireframing</span>
        </div>
      </div>
    </footer>
  );
}
