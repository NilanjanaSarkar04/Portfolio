import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/data";
import Tag from "@/components/tag";
import AnimateIn from "@/components/animate-in";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | Nilanjana`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="max-w-5xl mx-auto px-6 py-16">
      {/* Back link */}
      <AnimateIn>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted hover:text-foreground transition-colors mb-16"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M12 7H2M7 12L2 7l5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All Projects
        </Link>
      </AnimateIn>

      {/* Header */}
      <AnimateIn delay={80}>
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono tracking-widest uppercase text-accent">
              {project.category}
            </span>
            <span className="text-border">·</span>
            <span className="text-xs font-mono text-muted">{project.year}</span>
          </div>
          <h1
            className="font-medium tracking-tight text-foreground mb-6 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            {project.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>
        </header>
      </AnimateIn>

      {/* Cover image — cinematic ratio */}
      <AnimateIn delay={160}>
        <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-surface mb-20 relative">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </AnimateIn>

      {/* Body */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-16">
        {/* Description */}
        <div>
          <AnimateIn delay={0}>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-8">
              Overview
            </p>
            {project.description.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-base text-foreground leading-relaxed mb-5 last:mb-0"
              >
                {para}
              </p>
            ))}
          </AnimateIn>

          {/* Image gallery */}
          {project.images.length > 0 && (
            <div className="mt-20 space-y-10">
              <AnimateIn>
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-8">
                  Process &amp; Visuals
                </p>
              </AnimateIn>
              {project.images.map((img, i) => (
                <AnimateIn key={i} delay={i * 80}>
                  <figure className="space-y-3">
                    <div className="rounded-xl overflow-hidden bg-surface relative aspect-[16/10]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 700px"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="text-xs font-mono text-muted text-center tracking-wide">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                </AnimateIn>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <AnimateIn delay={200}>
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Tags */}
            <div>
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-4">
                Tools &amp; Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.liveUrl || project.caseStudyUrl) && (
              <div>
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-4">
                  Links
                </p>
                <div className="flex flex-col gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-accent hover:text-accent-hover transition-colors"
                    >
                      Live Project
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M1 9L9 1M9 1H3M9 1v6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-accent hover:text-accent-hover transition-colors"
                    >
                      Case Study
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M1 9L9 1M9 1H3M9 1v6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )}
          </aside>
        </AnimateIn>
      </div>
    </article>
  );
}
