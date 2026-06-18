import { useRef, useEffect } from "react";
import { contactSection, personalInfo } from "@/data/portfolio";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
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
      id="contato"
      ref={sectionRef}
      className="bg-surface py-[80px] md:py-[120px] px-[5vw]"
    >
      <div className="max-w-[1280px] mx-auto text-center">
        <span className="animate-in font-mono text-xs font-medium text-accent-green tracking-[2px]">
          {contactSection.label}
        </span>
        <h2 className="animate-in font-display text-[48px] font-semibold text-text-primary leading-[1.2] mt-4">
          {contactSection.heading}
        </h2>
        <p className="animate-in font-body text-base text-text-secondary max-w-[480px] mx-auto mt-4 leading-relaxed">
          {contactSection.description}
        </p>

        {/* Contact buttons */}
        <div className="animate-in flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-3.5 bg-accent-green text-bg-dark rounded-3xl font-body text-sm font-semibold hover:brightness-110 transition-all duration-300"
          >
            Enviar Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-transparent border border-border text-text-primary rounded-3xl font-body text-sm font-medium hover:border-accent-purple hover:text-accent-purple transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>

        {/* Footer */}
        <div className="animate-in flex flex-col sm:flex-row items-center justify-between mt-20 pt-8 border-t border-border">
          <span className="font-mono text-xs text-text-muted">
            &copy; 2025 {personalInfo.name}
          </span>
          <span className="font-mono text-xs text-text-muted mt-2 sm:mt-0">
            Feito com amor e muito c&oacute;digo
          </span>
        </div>
      </div>
    </section>
  );
}
