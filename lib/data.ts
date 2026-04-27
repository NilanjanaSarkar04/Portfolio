import portfolioData from "@/data/portfolio.json";
import type { PortfolioData, Profile, Project } from "./types";

const data = portfolioData as PortfolioData;

export function getProjects(): Project[] {
  return data.projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return data.projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return data.projects.map((p) => p.slug);
}

export function getProfile(): Profile {
  return data.profile;
}
