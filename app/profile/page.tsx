import type { Metadata } from "next";
import Image from "next/image";
import { getProfile } from "@/lib/data";
import SocialLink from "@/components/social-link";
import AnimateIn from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Profile | Nilanjana",
  description: "About Nilanjana — design student, education, and contact.",
};

export default function ProfilePage() {
  const profile = getProfile();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-24">
        <AnimateIn>
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-8">
            About
          </p>
        </AnimateIn>
        <div className="flex flex-col sm:flex-row items-start gap-10">
          <AnimateIn delay={80} className="shrink-0">
            <div className="w-32 h-40 sm:w-40 sm:h-52 rounded-xl overflow-hidden bg-surface relative">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </AnimateIn>
          <AnimateIn delay={160} className="pt-1 flex-1">
            <h1
              className="font-medium tracking-tight text-foreground mb-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              {profile.name}
            </h1>
            <p className="text-xs font-mono tracking-[0.15em] uppercase text-muted mb-6">
              {profile.tagline}
            </p>
            <div className="flex flex-col gap-1.5 mb-6">
              <p className="text-sm text-muted">{profile.location}</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-accent hover:text-accent-hover transition-colors"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-5">
              {profile.socialLinks.map((link) => (
                <SocialLink key={link.platform} {...link} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Bio */}
      <AnimateIn className="mb-20">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-6">
          Background
        </p>
        <div className="max-w-2xl space-y-5">
          {profile.bio.split("\n\n").map((para, i) => (
            <p key={i} className="text-base text-foreground leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </AnimateIn>

      {/* Education */}
      <AnimateIn className="mb-20">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-8">
          Education
        </p>
        <div className="space-y-6">
          {profile.education.map((edu, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl bg-surface border border-border hover:border-accent transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h3 className="text-base font-medium text-foreground">
                  {edu.institution}
                </h3>
                <span className="text-xs font-mono text-muted shrink-0">
                  {edu.startYear} — {edu.endYear}
                </span>
              </div>
              <p className="text-sm text-accent mb-3">
                {edu.degree} in {edu.field}
              </p>
              {edu.description && (
                <p className="text-sm text-muted leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Resume */}
      <AnimateIn className="mb-20">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-6">
          Resume
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={profile.resumeUrl}
            download
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium bg-accent text-foreground rounded-full transition-all duration-300 hover:bg-accent-hover hover:gap-4"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1v8M4 6l3 3 3-3M2 11h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download Resume
          </a>
          {profile.socialLinks
            .filter((l) => l.platform === "linkedin")
            .map((l) => (
              <a
                key={l.platform}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border text-muted rounded-full hover:text-foreground hover:border-muted transition-colors duration-300"
              >
                LinkedIn Profile
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1 9L9 1M9 1H3M9 1v6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
        </div>
      </AnimateIn>

      {/* Contact */}
      <AnimateIn>
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-6">
          Contact
        </p>
        <p className="text-base text-foreground leading-relaxed mb-8 max-w-lg">
          Whether you have a project in mind, want to collaborate, or just want
          to say hello — my inbox is always open.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium bg-accent text-foreground rounded-full transition-all duration-300 hover:bg-accent-hover hover:gap-4"
          >
            Send an Email
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
          {profile.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border text-muted rounded-full hover:text-foreground hover:border-muted transition-colors duration-300 capitalize"
            >
              {link.label}
            </a>
          ))}
        </div>
      </AnimateIn>
    </div>
  );
}
