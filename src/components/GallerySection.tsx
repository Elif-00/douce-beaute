import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import Reveal from "./Reveal";

const images = [
  { src: g1, alt: "Manucure élégante" },
  { src: g2, alt: "Soins de la peau" },
  { src: g3, alt: "Coiffure professionnelle" },
  { src: g4, alt: "Massage relaxant" },
  { src: g5, alt: "Outils de beauté" },
  { src: g6, alt: "Produits de beauté" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="galerie" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Notre univers</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">Galerie</h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div
                className="overflow-hidden group cursor-pointer"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-36 sm:h-52 md:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[88vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
