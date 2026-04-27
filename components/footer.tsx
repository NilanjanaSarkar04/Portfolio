import { Button } from "@/components/ui/button";
import { CardElevated } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
import { getProfile } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import AnimateIn from "./animate-in";
import SocialLink from "./social-link";

export default function Footer() {
  const profile = getProfile();

  return (
    <footer className="mt-16 space-y-3 px-3 pb-3 sm:mt-28 sm:px-6 sm:pb-4">
      {/* CTA — elevated glass card */}
      <CardElevated className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-10 sm:py-20">
          <AnimateIn>
            <SectionLabel className="mb-5 sm:mb-6">Let&apos;s connect</SectionLabel>
            <h2 className="text-foreground mb-7 max-w-lg text-3xl leading-tight font-medium tracking-tight sm:mb-8 sm:text-4xl lg:text-5xl">
              Let&apos;s create something.
            </h2>
            <Button asChild variant="default">
              <a href={`mailto:${profile.email}`} className="group">
                {profile.email}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Button>
          </AnimateIn>
        </div>
      </CardElevated>

      {/* Bottom bar */}
      <div className="glass rounded-2xl">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-4 sm:flex-row sm:px-10 sm:py-5">
          <p className="text-muted font-mono text-xs tracking-wide">
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
