import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <BackgroundGradient containerClassName="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block overflow-hidden rounded-2xl glass h-full transition-all duration-500"
        style={{ animationDelay: `${index * 120}ms` }}
      >
        {/* Image */}
        <div className="aspect-[16/10] overflow-hidden relative">
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
          <span className="absolute top-4 right-4 text-[10px] font-mono text-white/50">
            {project.year}
          </span>

          {/*
            Bottom panel — expands on hover.
            flex-col justify-end + overflow-hidden: title is always anchored
            to the bottom; description + CTA above it are clipped until
            the panel grows tall enough to reveal them.
          */}
          <div className="absolute inset-x-0 bottom-0 overflow-hidden flex flex-col justify-end px-5 pb-5 h-[3.75rem] group-hover:h-[8rem] transition-[height] duration-500 ease-out">
            {/* CTA — topmost, first to be clipped when collapsed */}
            <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-accent mb-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              View Project
              <ArrowUpRight size={10} />
            </span>

            {/* Description */}
            <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mb-2.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {project.shortDescription}
            </p>

            {/* Title — always visible, anchored at bottom */}
            <h3 className="text-base font-medium text-white leading-snug shrink-0">
              {project.title}
            </h3>
          </div>

          {/* Accent top-edge on hover */}
          <div className="absolute inset-x-0 top-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
        </div>
      </Link>
    </BackgroundGradient>
  );
}
