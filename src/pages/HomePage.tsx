import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import Timeline from "@/sections/Timeline";
import Sobre from "@/sections/Sobre";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function HomePage() {
  return (
    <main className="bg-bg-dark min-h-[100dvh]">
      <Navigation />
      <Hero />
      <Timeline />
      <Sobre />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
