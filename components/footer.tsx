import { getProfile } from "@/lib/data";
import SocialLink from "./social-link";
import AnimateIn from "./animate-in";

export default function Footer() {
  const profile = getProfile();

  return (
    <footer className="mt-32">
      {/* CTA block */}
      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <AnimateIn>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-6">
              Let&apos;s connect
            </p>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground mb-8 max-w-lg leading-tight">
              Let&apos;s create something.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium bg-accent text-foreground rounded-full transition-all duration-300 hover:bg-accent-hover hover:gap-4"
            >
              {profile.email}
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
          </AnimateIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted tracking-wide">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex items-center gap-5">
            {profile.socialLinks.map((link) => (
              <SocialLink key={link.platform} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
