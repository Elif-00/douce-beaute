import { Star } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Camille D.",
    text: "Un moment de pur bonheur à chaque visite. L'équipe est adorable et les soins sont d'une qualité exceptionnelle. Je recommande les yeux fermés !",
    stars: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Sophie M.",
    text: "Le meilleur salon de Paris ! Ma manucure a tenu trois semaines et l'ambiance est tellement relaxante. On se sent comme dans un cocon.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
  {
    name: "Léa R.",
    text: "Après mon soin du visage, ma peau n'a jamais été aussi lumineuse. Le cadre est magnifique et les produits sont top. Merci Douce Beauté !",
    stars: 5,
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
  },
  {
    name: "Inès B.",
    text: "La section aromathérapie est un vrai voyage sensoriel. Je repars à chaque fois complètement ressourcée. Un endroit qui fait du bien à l'âme.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
];

const TestimonialsSection = () => (
  <section id="temoignages" className="py-12 md:py-24 lg:py-32 bg-section-alt">
    <div className="container mx-auto px-4 sm:px-6">
      <Reveal className="text-center mb-12 md:mb-16">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Elles nous font confiance</p>
        <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground">Témoignages</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.1} className={i === 3 ? "hidden lg:block" : ""}>
            <div className="bg-rose-light p-5 sm:p-7 border border-gold-light flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gold-light shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-base sm:text-lg font-semibold text-foreground">{t.name}</p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={13} className="fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed italic flex-1">
                "{t.text}"
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
