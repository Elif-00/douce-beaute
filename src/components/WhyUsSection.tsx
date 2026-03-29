import { Award, Leaf, Heart } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: Award,
    title: "Expertise reconnue",
    desc: "8 ans d'expérience, techniques certifiées et soins personnalisés.",
  },
  {
    icon: Leaf,
    title: "Produits naturels",
    desc: "Marques éco-responsables et actifs naturels, respectueux de votre peau.",
  },
  {
    icon: Heart,
    title: "Bien-être avant tout",
    desc: "Détente absolue et résultats visibles dès la première séance.",
  },
];

const WhyUsSection = () => (
  <section className="py-10 md:py-16 lg:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <Reveal className="text-center mb-8 md:mb-12">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Notre engagement</p>
        <h2 className="font-display text-5xl md:text-6xl font-semibold text-foreground">Pourquoi nous choisir</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.12}>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold-light flex items-center justify-center mb-4 md:mb-6 bg-rose-light">
                <p.icon size={22} className="text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
