import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { CoreExpertise } from "@/components/sections/CoreExpertise";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <CoreExpertise />
      <Experience />
      <Expertise />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}
