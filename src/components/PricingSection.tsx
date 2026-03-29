import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

const categories = [
  {
    name: "Soins du visage",
    items: [
      { service: "Nettoyage de peau", price: "55 €" },
      { service: "Soin hydratant", price: "70 €" },
      { service: "Soin anti-âge premium", price: "95 €", featured: true },
    ],
  },
  {
    name: "Épilation",
    items: [
      { service: "Demi-jambes", price: "25 €" },
      { service: "Jambes complètes", price: "40 €" },
      { service: "Aisselles", price: "12 €" },
      { service: "Maillot", price: "20 €" },
    ],
  },
  {
    name: "Manucure & Beauté des mains",
    items: [
      { service: "Manucure classique", price: "30 €" },
      { service: "Pose vernis semi-permanent", price: "40 €", featured: true },
      { service: "Nail art", price: "50 €" },
    ],
  },
  {
    name: "Soins corps",
    items: [
      { service: "Gommage corps", price: "60 €" },
      { service: "Enveloppement", price: "75 €" },
      { service: "Massage relaxant 60 min", price: "85 €", featured: true },
    ],
  },
];

const PricingSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="tarifs" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Nos formules</p>
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground">Tarifs</h2>
        </Reveal>
        <div className="max-w-2xl mx-auto space-y-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.07}>
              <div className="border border-border bg-background">
                <button
                  className="w-full flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-display text-lg sm:text-xl font-semibold text-foreground">{cat.name}</span>
                  {open === i
                    ? <Minus size={18} className="text-gold shrink-0" />
                    : <Plus size={18} className="text-gold shrink-0" />
                  }
                </button>
                {open === i && (
                  <div className="px-5 sm:px-7 pb-5">
                    <div className="space-y-3">
                      {cat.items.map((item) => (
                        <div key={item.service} className="flex justify-between items-center border-b border-border pb-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-body text-base text-muted-foreground">{item.service}</span>
                            {item.featured && (
                              <span className="font-body text-[10px] uppercase tracking-wider text-gold border border-gold-light px-1.5 py-0.5 leading-none">
                                Populaire
                              </span>
                            )}
                          </div>
                          <span className="font-display text-lg font-semibold text-gold shrink-0 ml-4">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
