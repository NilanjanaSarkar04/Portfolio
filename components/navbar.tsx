"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Work" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-4 py-2.5 sm:py-3 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">

        {/* Floating glass pill */}
        <nav className={cn(
          "rounded-full px-5 sm:px-6 h-12 flex items-center justify-between transition-all duration-500",
          scrolled ? "glass-strong" : "glass"
        )}>
          <Link
            href="/"
            className="text-xs font-mono tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-300"
          >
            Nilanjana
          </Link>

          {/* Desktop links */}
          <ul className="hidden sm:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "relative text-sm transition-colors duration-300",
                    "after:absolute after:bottom-[-2px] after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300",
                    pathname === href
                      ? "text-foreground after:w-full"
                      : "text-muted hover:text-foreground after:w-0 hover:after:w-full"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle — 44px touch target */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden h-11 w-11"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </nav>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="sm:hidden mt-2 glass rounded-2xl overflow-hidden">
            <ul className="px-5 py-3 flex flex-col">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  {/* min-h-[44px] ensures tap target meets accessibility guidelines */}
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center min-h-[44px] text-sm transition-colors",
                      pathname === href
                        ? "text-foreground font-medium"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
