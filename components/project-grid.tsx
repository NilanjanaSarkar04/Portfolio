import type { Project } from "@/lib/types";
import AnimateIn from "./animate-in";
import ProjectCard from "./project-card";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project, i) => (
        <AnimateIn key={project.slug} delay={i * 100}>
          <ProjectCard project={project} index={i} />
        </AnimateIn>
      ))}
    </div>
  );
}
