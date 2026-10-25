import Link from "next/link";
import { Coffee, GitBranchPlus, ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-(--border-color) bg-(--bg-card) text-xs text-(--text-muted) transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-(--primary) text-[10px] font-black text-(--text-main)">
              LL
            </div>
            <span className="text-sm font-bold text-(--text-main)">
              Lucky Lorem
            </span>
          </div>
          <p className="text-[11px] leading-relaxed">
            Curated developer dummy text and realistic layout filler for designers and engineers.
          </p>
        </div>

        {/* Column 1: Utility */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-(--text-main)">
            Utility
          </h4>
          <ul className="space-y-1.5">
            <li><a href="#categories" className="transition hover:text-(--primary)">Categories</a></li>
            <li><a href="#markdown" className="transition hover:text-(--primary)">Markdown Export</a></li>
            <li><a href="#shortcuts" className="transition hover:text-(--primary)">Shortcuts (Ctrl+Shift+H)</a></li>
          </ul>
        </div>

        {/* Column 2: Developer Ecosystem */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-(--text-main)">
            Developer
          </h4>
          <ul className="space-y-1.5">
            <li>
              <a
                href="https://portfoliolucky.vercel.app/#projects"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition hover:text-(--primary)"
              >
                More Projects <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-username/lucky-lorem"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition hover:text-(--primary)"
              >
                GitHub Repo <GitBranchPlus className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://buymeacoffee.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-medium text-(--primary) transition hover:text-(--primary-hover)"
              >
                Support <Coffee className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Open Source */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-(--text-main)">
            Legal
          </h4>
          <ul className="space-y-1.5">
            <li><Link href="/privacy" className="transition hover:text-(--primary)">Privacy Policy</Link></li>
            <li><Link href="/terms" className="transition hover:text-(--primary)">Terms of Use</Link></li>
            <li><span className="text-(--text-muted)">MIT Open Source</span></li>
          </ul>
        </div>

      </div>

      {/* Bottom Sub-bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-(--border-color) px-4 py-6 text-[11px] sm:flex-row sm:px-6">
        <p>© 2026 Lucky Lorem. Built with Next.js & Tailwind.</p>
        <div className="flex items-center gap-1 text-(--text-muted)">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          <span>for rapid UI wireframing</span>
        </div>
      </div>
    </footer>
  );
}