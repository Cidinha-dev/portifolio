import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experi\u00eancia", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = ["hero", "sobre", "experiencia", "habilidades", "projetos", "contato"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center border-b border-white/5 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.8)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-[1280px] mx-auto w-full px-[5vw] flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#hero");
            }}
            className="font-mono text-xs font-medium text-accent-green tracking-wide hover:brightness-110 transition"
          >
            Fernanda Lemas
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`text-xs font-body font-medium transition-colors duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-accent-green"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-bg-dark/98 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-4 right-4 text-text-primary p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className="font-display text-2xl font-medium text-text-primary hover:text-accent-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
