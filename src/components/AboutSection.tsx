import aboutImg from "@/assets/about-salon.jpg";
import { Award, Leaf, Heart } from "lucide-react";
import Reveal from "./Reveal";

const promises = [
  { icon: Award, text: "8 ans d'expertise et des techniques certifiées" },
  { icon: Leaf, text: "Produits 100 % naturels et éco-responsables" },
  { icon: Heart, text: "Résultats visibles dès la première séance" },
];

const AboutSection = () => (
  <section id="apropos" className="py-24 md:py-40 bg-section-alt">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center max-w-6xl mx-auto">
        <Reveal>
          <div className="overflow-hidden">
            <img
              src={aboutImg}
              alt="Intérieur du salon Douce Beauté"
              className="w-full h-[280px] sm:h-[380px] lg:h-[700px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="px-0 lg:pl-16 xl:pl-24 py-16 lg:py-24">
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Notre histoire</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 md:mb-8">
              À propos de <em className="italic">Douce Beauté</em>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-5 md:mb-6">
              Niché au cœur de Paris, Douce Beauté est bien plus qu'un simple salon de beauté.
              C'est un véritable cocon de sérénité dédié au bien-être et à la beauté, où chaque visite
              devient une expérience sensorielle unique.
            </p>

            {/* Les 3 promesses */}
            <ul className="space-y-3 mb-6 md:mb-8">
              {promises.map((p) => (
                <li key={p.text} className="flex items-center gap-3">
                  <p.icon size={20} className="text-gold shrink-0" strokeWidth={1.8} />
                  <span className="font-body text-lg text-muted-foreground">{p.text}</span>
                </li>
              ))}
            </ul>

            {/* Fondatrice */}
            <div className="flex items-center gap-4 pb-6 md:pb-8 mb-6 md:mb-8 border-b border-border">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80"
                alt="Marie Dupont"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-gold-light shrink-0"
                loading="lazy"
              />
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Marie Dupont</p>
                <p className="font-body text-xs uppercase tracking-wider text-gold mt-0.5">Fondatrice & Esthéticienne</p>
              </div>
            </div>

            <div className="flex gap-8 md:gap-12">
              <div>
                <p className="font-display text-4xl md:text-5xl font-light text-gold">8+</p>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">Années d'expérience</p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-light text-gold">3 500+</p>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">Clientes satisfaites</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
