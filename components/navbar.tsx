"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Work" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-3 py-2.5 sm:px-4 sm:py-3">
      <div className="pointer-events-auto mx-auto max-w-5xl">
        {/* Floating glass pill */}
        <nav
          className={cn(
            "flex h-12 items-center justify-between rounded-full px-5 transition-all duration-500 sm:px-6",
            scrolled ? "glass-strong" : "glass"
          )}
        >
          <Link
            href="/"
            className="text-foreground hover:text-accent font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Nilanjana
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "relative text-sm transition-colors duration-300",
                    "after:bg-accent after:absolute after:bottom-[-2px] after:left-0 after:h-px after:transition-all after:duration-300",
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
            className="h-11 w-11 sm:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </nav>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="glass mt-2 overflow-hidden rounded-2xl sm:hidden">
            <ul className="flex flex-col px-5 py-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  {/* min-h-[44px] ensures tap target meets accessibility guidelines */}
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex min-h-[44px] items-center text-sm transition-colors",
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
