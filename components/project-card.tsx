import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-xl bg-surface"
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* Image container */}
      <div className="aspect-[3/4] overflow-hidden relative">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Permanent gradient at bottom for title legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category + year pill — top left */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/40 backdrop-blur-sm text-foreground/80 rounded-full border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Year — top right */}
        <span className="absolute top-4 right-4 text-[10px] font-mono text-foreground/50">
          {project.year}
        </span>

        {/* Default bottom: title always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0 transition-transform duration-500 ease-out group-hover:-translate-y-14">
          <h3 className="text-base font-medium text-foreground leading-snug">
            {project.title}
          </h3>
        </div>

        {/* Hover overlay: description + arrow */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
          <p className="text-xs text-foreground/70 leading-relaxed line-clamp-2 mb-3">
            {project.shortDescription}
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-accent">
            View Project
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M1 9L9 1M9 1H3M9 1v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Coral top border on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
    </Link>
  );
}
