import heroImg from "@/assets/hero-salon.jpg";
import { Star } from "lucide-react";

const HeroSection = () => (
  <section id="accueil" className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
    <img src={heroImg} alt="Salon Douce Beauté" className="absolute inset-0 w-full h-full object-cover" />
    <div className="hero-overlay absolute inset-0" />
    <div className="relative z-10 text-center pb-16 sm:pb-24 px-4">
      <p className="font-body text-xs uppercase tracking-[0.4em] text-white/60 mb-4 animate-fade-in-up">
        Salon de beauté • Paris
      </p>
      <h1
        className="font-display text-6xl sm:text-7xl lg:text-8xl font-light text-white leading-tight mb-6 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        La beauté dans<br />toute sa <em className="italic text-gold">douceur</em>
      </h1>
      <p
        className="font-body text-lg font-light text-white/70 mb-10 animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        Un cocon de sérénité au cœur de Paris.
      </p>
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <a
          href="https://www.planity.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gold-gradient text-white font-body text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Réserver en ligne
        </a>
        <a
          href="#services"
          className="font-body text-sm text-white/70 hover:text-white transition-colors underline underline-offset-4"
        >
          Découvrir nos soins
        </a>
      </div>
      <div
        className="flex items-center justify-center gap-2 mt-8 animate-fade-in-up"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="fill-gold text-gold" />
          ))}
        </div>
        <span className="font-body text-sm text-white/50">4,9 / 5 — Google</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
