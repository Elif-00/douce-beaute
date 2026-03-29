const MidCTA = () => (
  <div className="bg-section-alt py-10 md:py-14 border-y border-border">
    <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
      <p className="font-display text-2xl md:text-3xl font-light text-foreground text-center sm:text-left">
        Un soin vous tente ? Réservez <em className="italic text-gold">en quelques clics.</em>
      </p>
      <a
        href="https://www.planity.com"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 gold-gradient text-accent-foreground font-body text-xs uppercase tracking-widest px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Réserver en ligne
      </a>
    </div>
  </div>
);

export default MidCTA;
