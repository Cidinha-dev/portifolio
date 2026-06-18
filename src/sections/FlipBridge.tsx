import { useRef, useEffect, useCallback } from "react";
import { experienceCards } from "@/data/portfolio";

export default function FlipBridge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const animate = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const windowH = window.innerHeight;
    const containerH = container.offsetHeight;

    let scrollProgress = -rect.top / (containerH - windowH);
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));

    const xRange = window.innerWidth * 0.4;
    const yRange = window.innerHeight * 0.35;
    const zStart = -1500;
    const zEnd = 500;
    const spacing = 0.18;
    const flipZone = 0.5;
    const flipWidth = 0.12;

    experienceCards.forEach((_, i) => {
      const card = cardRefs.current[i];
      if (!card) return;

      let rawPos = i * spacing - scrollProgress * 3;

      if (rawPos < 0) rawPos += 1;
      else if (rawPos > 1) rawPos -= 1;

      // Position
      const x = -xRange + rawPos * (2 * xRange);
      const y = -yRange + Math.sin(rawPos * Math.PI) * yRange * 2;
      const z = zStart + rawPos * (zEnd - zStart);

      // Rotation
      const distanceFromCenter = Math.abs(rawPos - flipZone);
      const isFlipped = distanceFromCenter < flipWidth;
      const flipProgress = isFlipped
        ? 1 - distanceFromCenter / flipWidth
        : rawPos > flipZone
          ? 1
          : 0;
      const rotationY = flipProgress * 180;
      const rotationZ = -30 + rawPos * 60;

      // Scale
      const scale = 0.5 + (1 - rawPos) * 0.5;

      // Opacity
      const distCenter = Math.abs(rawPos - 0.5) * 2;
      const opacity = Math.max(0.1, 1 - distCenter * 1.5);
      const brightness = 80 + (1 - distCenter) * 20;

      card.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg) scale(${scale})`;
      card.style.opacity = String(opacity);
      card.style.filter = `brightness(${brightness}%)`;
    });

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <section id="experiencia" className="relative">
      {/* Tall scroll container */}
      <div ref={containerRef} className="relative h-[400vh]">
        {/* Sticky wrapper */}
        <div
          ref={wrapperRef}
          className="sticky top-0 w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
          style={{ perspective: "1000px", background: "#0a0a0a" }}
        >
          {/* Section header */}
          <div className="absolute top-8 left-[5vw] z-10">
            <span className="font-mono text-xs font-medium text-accent-green tracking-[2px]">
              EXPERI&Ecirc;NCIA
            </span>
          </div>

          {/* 3D Stage */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {experienceCards.map((card, i) => (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute"
                style={{
                  width: "340px",
                  height: "420px",
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity, filter",
                }}
              >
                {/* Front face */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-xl border border-border"
                  style={{
                    backfaceVisibility: "hidden",
                    background: "#111111",
                    borderBottom: "3px solid #C8FF2E",
                  }}
                >
                  <span className="font-mono text-xs font-medium text-accent-green uppercase tracking-wide">
                    {card.label}
                  </span>
                  <h3 className="font-display text-[22px] font-semibold text-text-primary text-center mt-4 leading-tight">
                    {card.title}
                  </h3>
                  <span className="font-mono text-xs text-text-muted mt-4">
                    {card.date}
                  </span>
                </div>

                {/* Back face */}
                <div
                  className="absolute inset-0 flex flex-col items-start justify-center p-8 rounded-xl border border-border"
                  style={{
                    backfaceVisibility: "hidden",
                    background: "#1a1a1a",
                    transform: "rotateY(180deg)",
                    borderBottom: "3px solid #C8FF2E",
                  }}
                >
                  <span className="font-mono text-xs font-medium text-accent-green uppercase tracking-wide mb-4">
                    {card.label}
                  </span>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                  <span className="font-mono text-xs text-text-muted mt-4">
                    {card.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
