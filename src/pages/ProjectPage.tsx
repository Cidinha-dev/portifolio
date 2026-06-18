import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-[100dvh] bg-bg-dark flex flex-col items-center justify-center text-text-primary">
        <h1 className="font-display text-2xl font-semibold">Projeto n&atilde;o encontrado</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-accent-green text-bg-dark rounded-3xl font-body text-sm font-semibold hover:brightness-110 transition"
        >
          Voltar ao in&iacute;cio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-bg-dark">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-[1280px] mx-auto px-[5vw] py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-body text-sm">Voltar</span>
          </button>
          <span className="font-mono text-xs text-accent-green">
            {project.title}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-[5vw] py-12">
        {/* Project image */}
        <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-border">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title & description */}
        <h1 className="font-display text-[36px] md:text-[48px] font-bold text-text-primary mt-8 leading-[1.1]">
          {project.title}
        </h1>
        <p className="font-body text-base text-text-secondary mt-4 leading-relaxed max-w-[700px]">
          {project.longDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-xs font-mono font-medium text-accent-green bg-accent-green/10 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-accent-green text-bg-dark rounded-3xl font-body text-sm font-semibold hover:brightness-110 transition"
          >
            <Github size={16} />
            Ver no GitHub
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-transparent border border-border text-text-primary rounded-3xl font-body text-sm font-medium hover:border-accent-green hover:text-accent-green transition"
          >
            <ExternalLink size={16} />
            Documenta&ccedil;&atilde;o
          </a>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            Funcionalidades
          </h2>
          <ul className="mt-4 space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 shrink-0" />
                <span className="font-body text-sm text-text-secondary">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer link */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors font-body text-sm"
          >
            <ArrowLeft size={16} />
            Voltar ao portf&oacute;lio
          </button>
          <span className="font-mono text-xs text-text-muted">
            &copy; 2025 Fernanda Lemas
          </span>
        </div>
      </div>
    </div>
  );
}
