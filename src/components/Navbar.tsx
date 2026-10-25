"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinks {
  name: string;
  href: string;
}

const navLinks: NavLinks[] = [
  { name: "Home", href: "/" },
  { name: "Explore More Projects", href: "/rferf" },
  { name: "GitHub", href: "/sdcsd" },
  { name: "Support Us", href: "/dfv" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="fixed top-6 left-1/2 z-10 flex -translate-x-1/2 gap-3 rounded-2xl border border-(--border-color) bg-(--bg-card)/90 px-9 py-1.5 backdrop-blur-md">
      <nav className="flex gap-6 p-4">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors ${
                isActive
                  ? "border-b border-(--primary) pb-1 text-(--primary)"
                  : "text-(--text-muted) hover:text-(--primary)"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
