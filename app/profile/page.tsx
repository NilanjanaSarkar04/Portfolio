import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { getProfile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardElevated } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
import SocialLink from "@/components/social-link";
import AnimateIn from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Profile | Nilanjana",
  description: "About Nilanjana — design student, education, and contact.",
};

export default function ProfilePage() {
  const profile = getProfile();
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-6 py-10 sm:py-16">

      {/* ── Hero card ── */}
      <AnimateIn className="mb-10 sm:mb-16">
        <CardElevated className="p-5 sm:p-8">
          <SectionLabel className="mb-6 sm:mb-8">About</SectionLabel>
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
            <div className="shrink-0 p-1.5 rounded-2xl glass">
              <div className="w-24 h-32 sm:w-36 sm:h-48 rounded-xl overflow-hidden bg-surface relative">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 96px, 144px"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1
                className="font-medium tracking-tight text-foreground mb-2 sm:mb-3 leading-tight"
                style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
              >
                {profile.name}
              </h1>
              <p className="text-xs font-mono tracking-[0.15em] uppercase text-muted mb-4 sm:mb-6">
                {profile.tagline}
              </p>
              <div className="flex flex-col gap-1.5 mb-4 sm:mb-6">
                <p className="text-sm text-muted">{profile.location}</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-accent hover:text-accent-hover transition-colors break-all"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-4 sm:gap-5">
                {profile.socialLinks.map((link) => (
                  <SocialLink key={link.platform} {...link} />
                ))}
              </div>
            </div>
          </div>
        </CardElevated>
      </AnimateIn>

      {/* ── Bio ── */}
      <AnimateIn className="mb-10 sm:mb-16">
        <SectionLabel className="mb-4 sm:mb-6">Background</SectionLabel>
        <div className="max-w-2xl space-y-4 sm:space-y-5">
          {profile.bio.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm sm:text-base text-foreground leading-relaxed">{para}</p>
          ))}
        </div>
      </AnimateIn>

      {/* ── Education Timeline ── */}
      <section className="mb-10 sm:mb-16">
        <AnimateIn>
          <SectionLabel className="mb-8 sm:mb-10">Education</SectionLabel>
        </AnimateIn>

        <div>
          {profile.education.map((edu, i) => {
            const isCurrent = parseInt(edu.endYear) >= currentYear;
            const isLast = i === profile.education.length - 1;

            return (
              <AnimateIn key={i} delay={i * 100}>
                <div className="flex gap-4 sm:gap-6">

                  {/* ── Spine column: dot + connector ── */}
                  <div className="flex flex-col items-center shrink-0 w-6 sm:w-8">
                    {isCurrent ? (
                      /* Pulsing accent dot for current entry */
                      <div className="relative mt-1.5 shrink-0">
                        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25" />
                        <span className="relative flex w-4 h-4 rounded-full bg-accent ring-[3px] ring-background" />
                      </div>
                    ) : (
                      /* Static hollow dot for past entries */
                      <div className="mt-2 w-3 h-3 rounded-full shrink-0 border-2 border-muted bg-background" />
                    )}

                    {/* Connector line to next entry */}
                    {!isLast && (
                      <div
                        className="mt-2 w-px grow min-h-[2rem]"
                        style={{
                          background: "linear-gradient(to bottom, var(--muted), transparent)",
                          opacity: 0.25,
                        }}
                      />
                    )}
                  </div>

                  {/* ── Content column ── */}
                  <div className={`flex-1 ${isLast ? "pb-0" : "pb-8 sm:pb-10"}`}>
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="text-sm sm:text-base font-medium text-foreground leading-snug">
                        {edu.institution}
                      </h3>
                      <Badge
                        variant={isCurrent ? "accent" : "outline"}
                        className="shrink-0 mt-0.5"
                      >
                        {isCurrent ? "Current" : edu.endYear}
                      </Badge>
                    </div>

                    <p className="text-sm text-accent mb-1">
                      {edu.degree} · {edu.field}
                    </p>
                    <p className="text-xs font-mono text-muted mb-3">
                      {edu.startYear} — {edu.endYear}
                    </p>

                    {edu.description && (
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>

                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      {/* ── Resume — lives close to the footer CTA ── */}
      <AnimateIn>
        <Card className="p-5 sm:p-6">
          <SectionLabel className="mb-3">Resume</SectionLabel>
          <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
            Available for internships and freelance projects starting 2025.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="default">
              <a href={profile.resumeUrl} download>
                <Download size={14} />
                Download Resume
              </a>
            </Button>
            {profile.socialLinks
              .filter((l) => l.platform === "linkedin")
              .map((l) => (
                <Button key={l.platform} asChild variant="outline">
                  <a href={l.url} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    <ArrowUpRight size={12} />
                  </a>
                </Button>
              ))}
          </div>
        </Card>
      </AnimateIn>

    </div>
  );
}
