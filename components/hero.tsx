import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  name: string;
  tagline: string;
  bio: string;
}

export default function Hero({ name, tagline, bio }: HeroProps) {
  return (
    /* svh = small viewport height — excludes mobile browser chrome */
    <section className="relative flex min-h-svh items-center overflow-hidden sm:min-h-[92vh]">
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
        className="text-foreground xs:block pointer-events-none absolute top-0 right-0 hidden font-mono leading-none font-bold select-none"
        style={{ fontSize: "clamp(10rem, 28vw, 26rem)", opacity: 0.022, lineHeight: 1 }}
      >
        01
      </span>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-16 pb-20 sm:px-6 sm:py-24">
        {/* Level 3 — eyebrow */}
        <SectionLabel className="animate-fade-up mb-4 sm:mb-6" style={{ animationDelay: "0ms" }}>
          {tagline}
        </SectionLabel>

        {/* Level 1 — dominant name; clamp min lowered so it fits on 360px screens */}
        <h1
          className="text-foreground animate-fade-up mb-7 leading-[0.9] font-medium tracking-tight sm:mb-10"
          style={{
            fontSize: "clamp(3.25rem, 12vw, 10rem)",
            animationDelay: "120ms",
          }}
        >
          {name}
        </h1>

        {/* Level 2 — glass card */}
        <Card className="animate-fade-up max-w-xl p-5 sm:p-8" style={{ animationDelay: "280ms" }}>
          <p className="text-muted mb-6 text-sm leading-relaxed sm:mb-8 sm:text-base">
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
          className="animate-fade-in absolute bottom-6 left-5 flex items-center gap-3 sm:bottom-10 sm:left-6"
          style={{ animationDelay: "900ms" }}
        >
          <div className="h-px w-8" style={{ background: "var(--glass-border)" }} />
          <span className="text-muted font-mono text-xs tracking-[0.15em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
