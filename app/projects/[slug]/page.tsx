import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
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
    <article className="max-w-5xl mx-auto px-5 sm:px-6 py-8 sm:py-14">

      {/* Back */}
      <AnimateIn>
        <Button asChild variant="ghost" size="sm" className="mb-8 sm:mb-12 -ml-2">
          <Link href="/#work">
            <ArrowLeft size={14} />
            All Projects
          </Link>
        </Button>
      </AnimateIn>

      {/* Header */}
      <AnimateIn delay={80}>
        <header className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-xs font-mono text-muted">{project.year}</span>
          </div>
          <h1
            className="font-medium tracking-tight text-foreground mb-4 sm:mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>
        </header>
      </AnimateIn>

      {/* Cover image — wider aspect on mobile so it's not a thin strip */}
      <AnimateIn delay={160}>
        <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden glass mb-8 sm:mb-16 relative">
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

      {/* Body — sidebar stacks below content on mobile, sticky on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 sm:gap-12">

        {/* Description + gallery */}
        <div>
          <AnimateIn delay={0}>
            <SectionLabel className="mb-5 sm:mb-8">Overview</SectionLabel>
            {project.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-5 last:mb-0">
                {para}
              </p>
            ))}
          </AnimateIn>

          {project.images.length > 0 && (
            <div className="mt-10 sm:mt-16 space-y-6 sm:space-y-10">
              <AnimateIn>
                <SectionLabel className="mb-5 sm:mb-8">Process &amp; Visuals</SectionLabel>
              </AnimateIn>
              {project.images.map((img, i) => (
                <AnimateIn key={i} delay={i * 80}>
                  <figure className="space-y-2 sm:space-y-3">
                    <div className="rounded-xl overflow-hidden glass relative aspect-[4/3] sm:aspect-[16/10]">
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

        {/* Sidebar — appears after content on mobile, sticky panel on desktop */}
        <AnimateIn delay={200}>
          <Card className="p-5 sm:p-6 space-y-6 sm:space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Tags */}
            <div>
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-3 sm:mb-4">
                Tools &amp; Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default">{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.liveUrl || project.caseStudyUrl) && (
              <div>
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-3 sm:mb-4">
                  Links
                </p>
                <div className="flex flex-col gap-3">
                  {project.liveUrl && (
                    <Button asChild variant="link" size="sm" className="justify-start px-0">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Project <ArrowUpRight size={10} />
                      </a>
                    </Button>
                  )}
                  {project.caseStudyUrl && (
                    <Button asChild variant="link" size="sm" className="justify-start px-0">
                      <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                        Case Study <ArrowUpRight size={10} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </Card>
        </AnimateIn>
      </div>
    </article>
  );
}
