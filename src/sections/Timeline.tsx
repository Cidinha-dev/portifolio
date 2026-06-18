import { useRef, useEffect } from "react";
import { experienceCards } from "@/data/portfolio";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
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
        stagger: 0.12,
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
      id="experiencia"
      ref={sectionRef}
      className="bg-bg-dark py-[80px] md:py-[120px] px-[5vw]"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <span className="animate-in font-mono text-xs font-medium text-accent-green tracking-[2px]">
          EXPERI&Ecirc;NCIA
        </span>
        <h2 className="animate-in font-display text-[48px] font-semibold text-text-primary leading-[1.2] mt-4">
          Minha Trajet&oacute;ria
        </h2>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line - desktop only */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Vertical line - mobile */}
          <div className="md:hidden absolute left-[20px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 md:space-y-16">
            {experienceCards.map((card, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={card.id}
                  className={`animate-in relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-[20px] top-6 w-2.5 h-2.5 rounded-full bg-accent-green -translate-x-1/2 z-10" />

                  {/* Content card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[46%] ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <div
                      className={`bg-surface border border-border rounded-xl p-6 hover:-translate-y-1 hover:border-accent-green/30 transition-all duration-300 ${
                        isLeft ? "md:border-r-4 md:border-r-accent-green" : "md:border-l-4 md:border-l-accent-green"
                      } border-b-4 border-b-accent-green`}
                    >
                      <span className="font-mono text-xs font-medium text-accent-green uppercase tracking-wide">
                        {card.label}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-text-primary mt-2 leading-snug">
                        {card.title}
                      </h3>
                      <span className="font-mono text-xs text-text-muted mt-1 block">
                        {card.date}
                      </span>
                      <p className="font-body text-sm text-text-secondary mt-3 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop dot on the line */}
                  <div
                    className={`hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-accent-green border-4 border-bg-dark shadow-[0_0_0_2px_#C8FF2E]`}
                  />

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
