import heroImg from "@/assets/hero-salon.jpg";
import { Star } from "lucide-react";
import GoogleIcon from "./GoogleIcon";

const HeroSection = () => (
  <section id="accueil" className="min-h-screen flex flex-col lg:flex-row">
    {/* Image — en haut mobile, à droite desktop */}
    <div className="h-72 sm:h-96 lg:h-auto lg:w-5/12 order-first lg:order-last shrink-0">
      <img
        src={heroImg}
        alt="Salon Douce Beauté"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
    </div>

    {/* Contenu — en bas mobile, à gauche desktop */}
    <div className="flex-1 flex items-center bg-rose-light px-8 sm:px-12 lg:px-16 xl:px-24 py-14 lg:py-0">
      <div className="max-w-lg w-full">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-5 animate-fade-in-up">
          Salon de beauté • Paris
        </p>
        <h1
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          La beauté dans toute sa <em className="italic text-gold">douceur</em>
        </h1>
        <p
          className="font-body text-base md:text-lg font-light text-foreground/60 mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Un cocon de sérénité où chaque soin devient un rituel de bien-être.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://www.planity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-white font-body text-sm uppercase tracking-widest px-9 py-4 rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            Réserver en ligne
          </a>
        </div>
        <div
          className="flex items-center gap-2 mt-7 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-sm shrink-0">
            <GoogleIcon size={13} />
          </span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className="fill-gold text-gold" />
            ))}
          </div>
          <span className="font-body text-sm text-foreground/50">4,9 / 5</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
