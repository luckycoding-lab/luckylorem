import Link from "next/link";
import { Coffee, GitBranchPlus, ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 text-xs mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-amber-500 text-zinc-950 font-black flex items-center justify-center text-[10px]">
              LL
            </div>
            <span className="font-bold text-sm text-zinc-900 dark:text-white">
              Lucky Lorem
            </span>
          </div>
          <p className="text-[11px] leading-relaxed">
            Curated developer dummy text and realistic layout filler for designers and engineers.
          </p>
        </div>

        {/* Column 1: Utility */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
            Utility
          </h4>
          <ul className="space-y-1.5">
            <li><a href="#categories" className="hover:text-amber-500 transition">Categories</a></li>
            <li><a href="#markdown" className="hover:text-amber-500 transition">Markdown Export</a></li>
            <li><a href="#shortcuts" className="hover:text-amber-500 transition">Shortcuts (Ctrl+Shift+H)</a></li>
          </ul>
        </div>

        {/* Column 2: Developer Ecosystem */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
            Developer
          </h4>
          <ul className="space-y-1.5">
            <li>
              <a
                href="https://portfoliolucky.vercel.app/#projects"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition inline-flex items-center gap-1"
              >
                More Projects <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-username/lucky-lorem"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition inline-flex items-center gap-1"
              >
                GitHub Repo <GitBranchPlus className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://buymeacoffee.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition inline-flex items-center gap-1 text-amber-500 font-medium"
              >
                Support <Coffee className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Open Source */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
            Legal
          </h4>
          <ul className="space-y-1.5">
            <li><Link href="/privacy" className="hover:text-amber-500 transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-amber-500 transition">Terms of Use</Link></li>
            <li><span className="text-zinc-400 dark:text-zinc-600">MIT Open Source</span></li>
          </ul>
        </div>

      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-zinc-100 dark:border-zinc-900 py-6 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
        <p>© 2026 Lucky Lorem. Built with Next.js & Tailwind.</p>
        <div className="flex items-center gap-1 text-zinc-400">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          <span>for rapid UI wireframing</span>
        </div>
      </div>
    </footer>
  );
}