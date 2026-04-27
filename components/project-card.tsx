import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <BackgroundGradient containerClassName="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group glass relative block h-full overflow-hidden rounded-2xl transition-all duration-500"
        style={{ animationDelay: `${index * 120}ms` }}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="overlay">{project.category}</Badge>
          </div>

          {/* Year */}
          <span className="absolute top-4 right-4 font-mono text-[10px] text-white/50">
            {project.year}
          </span>

          {/*
            Bottom panel — expands on hover.
            flex-col justify-end + overflow-hidden: title is always anchored
            to the bottom; description + CTA above it are clipped until
            the panel grows tall enough to reveal them.
          */}
          <div className="absolute inset-x-0 bottom-0 flex h-[3.75rem] flex-col justify-end overflow-hidden px-5 pb-5 transition-[height] duration-500 ease-out group-hover:h-[8rem]">
            {/* CTA — topmost, first to be clipped when collapsed */}
            <span className="text-accent mb-2 inline-flex shrink-0 items-center gap-1.5 font-mono text-xs tracking-widest uppercase opacity-0 transition-opacity delay-200 duration-300 group-hover:opacity-100">
              View Project
              <ArrowUpRight size={10} />
            </span>

            {/* Description */}
            <p className="mb-2.5 line-clamp-2 shrink-0 text-xs leading-relaxed text-white/70 opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
              {project.shortDescription}
            </p>

            {/* Title — always visible, anchored at bottom */}
            <h3 className="shrink-0 text-base leading-snug font-medium text-white">
              {project.title}
            </h3>
          </div>

          {/* Accent top-edge on hover */}
          <div className="bg-accent absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </div>
      </Link>
    </BackgroundGradient>
  );
}
