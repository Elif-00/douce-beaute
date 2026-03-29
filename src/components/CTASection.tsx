import Reveal from "./Reveal";

const CTASection = () => (
  <section className="py-32 md:py-48 bg-foreground">
    <div className="container mx-auto px-4 sm:px-6 text-center">
      <Reveal>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
          Prenez soin de vous
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
          Un soin, un sourire, un moment rien qu'à vous
        </h2>
        <p className="font-body text-base text-white/85 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
          Réservez votre soin en ligne en quelques clics.<br />
          Disponibilités immédiates, sans attente.
        </p>
        <a
          href="https://www.planity.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gold font-body text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
        >
          Réserver maintenant
        </a>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
