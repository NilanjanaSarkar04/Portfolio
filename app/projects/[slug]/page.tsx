import AnimateIn from "@/components/animate-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/data";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-14">
      {/* Back */}
      <AnimateIn>
        <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2 sm:mb-12">
          <Link href="/#work">
            <ArrowLeft size={14} />
            All Projects
          </Link>
        </Button>
      </AnimateIn>

      {/* Header */}
      <AnimateIn delay={80}>
        <header className="mb-8 sm:mb-12">
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-muted font-mono text-xs">{project.year}</span>
          </div>
          <h1
            className="text-foreground mb-4 leading-tight font-medium tracking-tight sm:mb-6"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            {project.title}
          </h1>
          <p className="text-muted max-w-2xl text-base leading-relaxed sm:text-lg">
            {project.shortDescription}
          </p>
        </header>
      </AnimateIn>

      {/* Cover image — wider aspect on mobile so it's not a thin strip */}
      <AnimateIn delay={160}>
        <div className="glass relative mb-8 aspect-[4/3] overflow-hidden rounded-xl sm:mb-16 sm:aspect-[16/9] sm:rounded-2xl lg:aspect-[21/9]">
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
      <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[1fr_220px]">
        {/* Description + gallery */}
        <div>
          <AnimateIn delay={0}>
            <SectionLabel className="mb-5 sm:mb-8">Overview</SectionLabel>
            {project.description.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-foreground mb-4 text-sm leading-relaxed last:mb-0 sm:mb-5 sm:text-base"
              >
                {para}
              </p>
            ))}
          </AnimateIn>

          {project.images.length > 0 && (
            <div className="mt-10 space-y-6 sm:mt-16 sm:space-y-10">
              <AnimateIn>
                <SectionLabel className="mb-5 sm:mb-8">Process &amp; Visuals</SectionLabel>
              </AnimateIn>
              {project.images.map((img, i) => (
                <AnimateIn key={i} delay={i * 80}>
                  <figure className="space-y-2 sm:space-y-3">
                    <div className="glass relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/10]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 700px"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="text-muted text-center font-mono text-xs tracking-wide">
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
          <Card className="space-y-6 p-5 sm:space-y-8 sm:p-6 lg:sticky lg:top-24 lg:self-start">
            {/* Tags */}
            <div>
              <p className="text-muted mb-3 font-mono text-[10px] tracking-[0.2em] uppercase sm:mb-4">
                Tools &amp; Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.liveUrl || project.caseStudyUrl) && (
              <div>
                <p className="text-muted mb-3 font-mono text-[10px] tracking-[0.2em] uppercase sm:mb-4">
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
