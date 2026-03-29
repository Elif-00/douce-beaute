const MidCTA = () => (
  <div className="bg-foreground py-8 md:py-10">
    <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
      <p className="font-display text-xl md:text-2xl text-primary-foreground text-center sm:text-left">
        Un soin vous tente ? Réservez <em className="italic text-gold">en quelques clics.</em>
      </p>
      <a
        href="https://www.planity.com"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 gold-gradient text-accent-foreground font-body text-xs uppercase tracking-widest px-8 py-3.5 hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Réserver en ligne
      </a>
    </div>
  </div>
);

export default MidCTA;
