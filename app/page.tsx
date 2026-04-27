import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import ProjectGrid from "@/components/project-grid";
import SectionHeading from "@/components/section-heading";
import { getProfile, getProjects } from "@/lib/data";

export default function Home() {
  const profile = getProfile();
  const projects = getProjects();

  return (
    <>
      <Hero name={profile.name} tagline={profile.tagline} bio={profile.bio} />
      <Marquee />
      <section id="work" className="max-w-5xl mx-auto px-5 sm:px-6 py-14 sm:py-24">
        <SectionHeading
          title="Selected Work"
          subtitle={`${projects.length} projects across design disciplines`}
          index="02"
        />
        <ProjectGrid projects={projects} />
      </section>
    </>
  );
}
