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
    <div className="flex fixed top-6 left-1/2 -translate-x-1/2 b  -900/90 backdrop-blur-md px-9 py-1.5 rounded-2xl gap-3">
      <nav className="flex gap-6 p-4  ">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors font-medium ${
              isActive
                ? 'text-white pb-1'
                : 'text-amber-500 hover:text-amber-500'
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
