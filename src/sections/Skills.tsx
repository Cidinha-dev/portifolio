import { useRef, useEffect } from "react";
import { skills } from "@/data/portfolio";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".animate-in");
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="bg-surface py-[80px] md:py-[120px] px-[5vw]"
    >
      <div className="max-w-[1280px] mx-auto">
        <span className="animate-in font-mono text-xs font-medium text-accent-green tracking-[2px]">
          HABILIDADES
        </span>
        <h2 className="animate-in font-display text-[48px] font-semibold text-text-primary leading-[1.2] mt-4">
          Tecnologias &amp; Ferramentas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="animate-in flex items-center gap-3 px-6 py-5 bg-bg-dark border border-border rounded-xl hover:-translate-y-1 hover:border-accent-green/30 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-surface-alt border border-border flex items-center justify-center shrink-0">
                <span className="font-mono text-sm text-accent-green">
                  {skill.letter}
                </span>
              </div>
              <span className="font-body text-sm font-medium text-text-primary">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
