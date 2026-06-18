import { useRef, useEffect } from "react";
import { MapPin } from "lucide-react";
import { aboutSection, personalInfo } from "@/data/portfolio";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Sobre() {
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
        stagger: 0.1,
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
      id="sobre"
      ref={sectionRef}
      className="bg-bg-dark py-[80px] md:py-[120px] px-[5vw]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
        {/* Left column */}
        <div className="md:w-[40%]">
          <span className="animate-in font-mono text-xs font-medium text-accent-green tracking-[2px]">
            {aboutSection.label}
          </span>
          <h2 className="animate-in font-display text-[48px] font-semibold text-text-primary leading-[1.2] mt-4">
            {aboutSection.heading}
          </h2>
          <div className="animate-in w-10 h-[3px] bg-accent-green mt-4" />
        </div>

        {/* Right column */}
        <div className="md:w-[60%]">
          {aboutSection.paragraphs.map((p, i) => (
            <p
              key={i}
              className="animate-in font-body text-base text-text-secondary leading-[1.6] mt-4 first:mt-0"
            >
              {p}
            </p>
          ))}

          <div className="animate-in flex items-center gap-2 mt-8">
            <MapPin size={16} className="text-accent-green shrink-0" />
            <span className="font-body text-xs text-text-secondary">
              {personalInfo.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
