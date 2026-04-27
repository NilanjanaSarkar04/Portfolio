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
      <section id="work" className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-24">
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
