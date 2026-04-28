import AnimateIn from "@/components/animate-in";
import SocialLink from "@/components/social-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardElevated } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
import { getProfile } from "@/lib/data";
import { ArrowUpRight, Download } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profile | Nilanjana",
  description: "About Nilanjana — design student, education, and contact.",
};

export default function ProfilePage() {
  const profile = getProfile();
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-16">
      {/* ── Hero card ── */}
      <AnimateIn className="mb-10 sm:mb-16">
        <CardElevated className="p-5 sm:p-8">
          <SectionLabel className="mb-6 sm:mb-8">About</SectionLabel>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:gap-10">
            <div className="glass shrink-0 rounded-2xl p-1.5">
              <div className="bg-surface relative h-32 w-24 overflow-hidden rounded-xl sm:h-48 sm:w-36">
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
                className="text-foreground mb-2 leading-tight font-medium tracking-tight sm:mb-3"
                style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
              >
                {profile.name}
              </h1>
              <p className="text-muted mb-4 font-mono text-xs tracking-[0.15em] uppercase sm:mb-6">
                {profile.tagline}
              </p>
              <div className="mb-4 flex flex-col gap-1.5 sm:mb-6">
                <p className="text-muted text-sm">{profile.location}</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-accent hover:text-accent-hover text-sm break-all transition-colors"
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
            <p key={i} className="text-foreground text-sm leading-relaxed sm:text-base">
              {para}
            </p>
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
                  <div className="flex w-6 shrink-0 flex-col items-center sm:w-8">
                    {isCurrent ? (
                      /* Pulsing accent dot for current entry */
                      <div className="relative mt-1.5 shrink-0">
                        <span className="bg-accent absolute inset-0 animate-ping rounded-full opacity-25" />
                        <span className="bg-accent ring-background relative flex h-4 w-4 rounded-full ring-[3px]" />
                      </div>
                    ) : (
                      /* Static hollow dot for past entries */
                      <div className="border-muted bg-background mt-2 h-3 w-3 shrink-0 rounded-full border-2" />
                    )}

                    {/* Connector line to next entry */}
                    {!isLast && (
                      <div
                        className="mt-2 min-h-[2rem] w-px grow"
                        style={{
                          background: "linear-gradient(to bottom, var(--muted), transparent)",
                          opacity: 0.25,
                        }}
                      />
                    )}
                  </div>

                  {/* ── Content column ── */}
                  <div className={`flex-1 ${isLast ? "pb-0" : "pb-8 sm:pb-10"}`}>
                    <div className="mb-1.5 flex items-start justify-between gap-3">
                      <h3 className="text-foreground text-sm leading-snug font-medium sm:text-base">
                        {edu.institution}
                      </h3>
                      <Badge variant={isCurrent ? "accent" : "outline"} className="mt-0.5 shrink-0">
                        {isCurrent ? "Current" : edu.endYear}
                      </Badge>
                    </div>

                    <p className="text-accent mb-1 text-sm">
                      {edu.degree} · {edu.field}
                    </p>
                    <p className="text-muted mb-3 font-mono text-xs">
                      {edu.startYear} — {edu.endYear}
                    </p>

                    {edu.description && (
                      <p className="text-muted text-xs leading-relaxed sm:text-sm">
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
          <p className="text-muted mb-5 text-xs leading-relaxed sm:text-sm">
            Currently pursuing MDes at NIFT. Open to internships, freelance projects, and collaborative work in design research, UI/UX, and visual communication.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="default">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
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
