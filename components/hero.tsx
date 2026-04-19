import Link from "next/link";
import ParticlesBg from "./particles-bg";

interface HeroProps {
  name: string;
  tagline: string;
  bio: string;
}

export default function Hero({ name, tagline, bio }: HeroProps) {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Particle background */}
      <ParticlesBg />

      {/* Decorative large number */}
      <span
        className="pointer-events-none select-none absolute right-0 top-0 font-mono font-bold leading-none text-foreground"
        style={{
          fontSize: "clamp(12rem, 28vw, 26rem)",
          opacity: 0.025,
          lineHeight: 1,
        }}
        aria-hidden
      >
        01
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 w-full">
        {/* Tagline */}
        <p
          className="text-xs font-mono tracking-[0.25em] uppercase text-accent mb-8 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          {tagline}
        </p>

        {/* Name */}
        <h1
          className="font-medium tracking-tight text-foreground leading-[0.9] mb-10 animate-fade-up"
          style={{
            fontSize: "clamp(4.5rem, 12vw, 10rem)",
            animationDelay: "120ms",
          }}
        >
          {name}
        </h1>

        {/* Bio */}
        <p
          className="text-base text-muted leading-relaxed mb-12 max-w-lg animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          {bio.split("\n\n")[0]}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium bg-accent text-foreground rounded-full transition-all duration-300 hover:bg-accent-hover hover:gap-4"
          >
            View Work
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border text-muted rounded-full hover:text-foreground hover:border-muted transition-colors duration-300"
          >
            About Me
          </Link>
        </div>

        {/* Bottom scroll indicator */}
        <div
          className="absolute bottom-10 left-6 flex items-center gap-3 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="w-8 h-px bg-border" />
          <span className="text-xs font-mono tracking-[0.15em] uppercase text-muted">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
