import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projetos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center bg-bg-dark overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-[5vw] w-full flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        {/* Text content */}
        <div className="flex flex-col items-start max-w-[560px]">
          <span className="font-mono text-xs font-medium text-accent-green tracking-wide mb-4">
            {personalInfo.greeting}
          </span>

          <h1 className="font-display text-[40px] md:text-[72px] font-bold text-text-primary leading-[1.1]">
            {personalInfo.name}
          </h1>

          <h2 className="font-display text-lg md:text-2xl font-medium text-text-secondary mt-4">
            {personalInfo.title}
          </h2>

          <p className="font-body text-base text-text-secondary mt-4 leading-relaxed max-w-[480px]">
            {personalInfo.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={scrollToProjects}
              className="px-7 py-3 bg-accent-green text-bg-dark rounded-3xl font-body text-xs font-semibold hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
            >
              Ver Projetos
            </button>
            <button
              onClick={scrollToContact}
              className="px-7 py-3 bg-transparent border border-border text-text-primary rounded-3xl font-body text-xs font-medium hover:border-accent-green hover:text-accent-green transition-all duration-200"
            >
              Contato
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Profile photo - SQUARE, not round */}
        <div className="relative shrink-0">
          <div className="w-[260px] md:w-[280px] h-[340px] md:h-[360px] rounded-xl border-2 border-border overflow-hidden">
            <img
              src={personalInfo.profilePhoto}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[10px] text-text-muted tracking-wide">
          Role para explorar
        </span>
        <div className="w-px h-6 bg-text-muted animate-bounce" />
      </div>
    </section>
  );
}
