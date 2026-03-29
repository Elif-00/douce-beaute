import heroImg from "@/assets/hero-salon.jpg";
import { Star } from "lucide-react";
import GoogleIcon from "./GoogleIcon";

const HeroSection = () => (
  <section id="accueil" className="relative h-screen min-h-[500px] flex items-center overflow-hidden">
    <img
      src={heroImg}
      alt="Salon Douce Beauté"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="hero-overlay absolute inset-0" />
    <div className="relative z-10 container mx-auto px-4 sm:px-6">
      <div className="max-w-xl">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/80 mb-4 animate-fade-in-up">
          Salon de beauté • Paris
        </p>
        <h1
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          La beauté dans toute sa <em className="italic text-gold">douceur</em>
        </h1>
        <p
          className="font-body text-base md:text-lg font-light text-primary-foreground/85 mb-8 md:mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Un cocon de sérénité où chaque soin devient un rituel de bien-être.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://www.planity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-accent-foreground font-body text-sm uppercase tracking-widest px-7 sm:px-10 py-3.5 sm:py-4 hover:opacity-90 transition-opacity"
          >
            Réserver en ligne
          </a>
        </div>
        <div
          className="flex items-center gap-2 mt-5 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md shrink-0">
            <GoogleIcon size={13} />
          </span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className="fill-gold text-gold" />
            ))}
          </div>
          <span className="font-body text-sm text-primary-foreground/75">4,9 / 5</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
