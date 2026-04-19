export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  coverImage: string;
  images: ProjectImage[];
  tags: string[];
  category: string;
  year: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  description?: string;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  profileImage: string;
  email: string;
  phone?: string;
  location: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
  education: Education[];
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
}

export interface PortfolioData {
  metadata: SiteMetadata;
  profile: Profile;
  projects: Project[];
}
