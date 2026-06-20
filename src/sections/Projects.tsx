import { useRef, useEffect } from "react";
import { projects } from "@/data/portfolio";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
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
        stagger: 0.15,
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
      id="projetos"
      ref={sectionRef}
      className="bg-bg-dark py-[80px] md:py-[120px] px-[5vw]"
    >
      <div className="max-w-[1280px] mx-auto">
        <span className="animate-in font-mono text-xs font-medium text-accent-green">
          PROJETOS
        </span>
        <h2 className="animate-in font-display text-[48px] font-semibold text-text-primary leading-[1.2] mt-4">
          Projetos em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="animate-in group bg-surface border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:border-accent-green/30 transition-all duration-300"
            >
              {/* Project image */}
              <div className="h-[200px] bg-gradient-to-br from-surface-alt to-[#2a2a2a] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-text-secondary mt-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-mono font-medium text-accent-green bg-accent-green/10 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-4">
                  <Link
                    to={`/projeto/${project.id}`}
                    className="font-body text-xs font-medium text-accent-green hover:underline"
                  >
                    Ver Projeto &rarr;
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs text-text-muted hover:text-text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
