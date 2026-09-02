"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SHORT_NAME } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/resume", label: "Resume" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center gap-2 font-semibold font-display text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
            {SHORT_NAME}
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-4 py-3 space-y-1 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-muted-foreground hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
