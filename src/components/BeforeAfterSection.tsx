import { useState, useRef, useCallback } from "react";

const examples = [
  {
    label: "Soin éclat visage",
    before: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&h=700&fit=crop&crop=faces&q=85",
    after:  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&h=700&fit=crop&crop=faces&q=85",
  },
  {
    label: "Soin anti-âge",
    before: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=700&h=700&fit=crop&crop=faces&q=85",
    after:  "https://images.unsplash.com/photo-1552693673-1bf958298935?w=700&h=700&fit=crop&crop=faces&q=85",
  },
  {
    label: "Soin hydratant",
    before: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=700&h=700&fit=crop&crop=faces&q=85",
    after:  "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=700&h=700&fit=crop&crop=faces&q=85",
  },
];

const Slider = ({ before, after, label }: { before: string; after: string; label: string }) => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <p className="font-display text-xl font-semibold text-foreground text-center">{label}</p>
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none cursor-col-resize h-[220px] sm:h-[280px] md:h-[340px]"
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
        onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
        onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX); }}
        onTouchEnd={() => { dragging.current = false; }}
      >
        {/* After — image pleine largeur en dessous */}
        <img
          src={after}
          alt="Après soin"
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />

        {/* Before — même position, masquée à droite via clipPath */}
        <img
          src={before}
          alt="Avant soin"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />

        {/* Ligne de séparation + poignée */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6 9l-4-4m0 0l4-4M2 5h14M12 9l4 4m0 0l-4 4M16 13H2" stroke="#b8924a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <span className="absolute bottom-3 left-3 font-body text-xs font-semibold uppercase tracking-widest text-white bg-black/50 px-2.5 py-1">Avant</span>
        <span className="absolute bottom-3 right-3 font-body text-xs font-semibold uppercase tracking-widest text-white bg-black/50 px-2.5 py-1">Après</span>
      </div>
    </div>
  );
};

const BeforeAfterSection = () => (
  <section id="avant-apres" className="py-12 md:py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Nos résultats</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">Avant / Après</h2>
        <p className="font-body text-base text-muted-foreground mt-4">Faites glisser pour comparer</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {examples.map((ex) => (
          <Slider key={ex.label} {...ex} />
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
