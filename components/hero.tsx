import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
import { SparklesCore } from "@/components/ui/sparkles";

interface HeroProps {
  name: string;
  tagline: string;
  bio: string;
}

export default function Hero({ name, tagline, bio }: HeroProps) {
  return (
    /* svh = small viewport height — excludes mobile browser chrome */
    <section className="relative min-h-svh sm:min-h-[92vh] flex items-center overflow-hidden">
      {/* Aceternity SparklesCore */}
      <SparklesCore
        particleColor="var(--accent)"
        particleDensity={60}
        minSize={0.4}
        maxSize={1.2}
      />

      {/* Decorative number — texture layer, hidden on smallest screens */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute right-0 top-0 font-mono font-bold leading-none text-foreground hidden xs:block"
        style={{ fontSize: "clamp(10rem, 28vw, 26rem)", opacity: 0.022, lineHeight: 1 }}
      >
        01
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-5 sm:px-6 pt-16 pb-20 sm:py-24">

        {/* Level 3 — eyebrow */}
        <SectionLabel
          className="mb-4 sm:mb-6 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          {tagline}
        </SectionLabel>

        {/* Level 1 — dominant name; clamp min lowered so it fits on 360px screens */}
        <h1
          className="font-medium tracking-tight text-foreground leading-[0.9] mb-7 sm:mb-10 animate-fade-up"
          style={{
            fontSize: "clamp(3.25rem, 12vw, 10rem)",
            animationDelay: "120ms",
          }}
        >
          {name}
        </h1>

        {/* Level 2 — glass card */}
        <Card
          className="p-5 sm:p-8 max-w-xl animate-fade-up"
          style={{ animationDelay: "280ms" }}
        >
          <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
            {bio.split("\n\n")[0]}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="default">
              <a href="#work" className="group">
                View Work
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/profile">About Me</Link>
            </Button>
          </div>
        </Card>

        {/* Scroll indicator — sits at the bottom of the viewport */}
        <div
          className="absolute bottom-6 sm:bottom-10 left-5 sm:left-6 flex items-center gap-3 animate-fade-in"
          style={{ animationDelay: "900ms" }}
        >
          <div className="w-8 h-px" style={{ background: "var(--glass-border)" }} />
          <span className="text-xs font-mono tracking-[0.15em] uppercase text-muted">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
