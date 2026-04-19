import type { Project } from "@/lib/types";
import ProjectCard from "./project-card";
import AnimateIn from "./animate-in";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, i) => (
        <AnimateIn key={project.slug} delay={i * 100}>
          <ProjectCard project={project} index={i} />
        </AnimateIn>
      ))}
    </div>
  );
}
