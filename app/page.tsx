import { NavBar } from "@/components/ui/NavBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { AISection } from "@/components/sections/AISection";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Education />
        <AISection />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
