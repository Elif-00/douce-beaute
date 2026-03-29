import Reveal from "./Reveal";

const services = [
  {
    name: "Soins du visage",
    desc: "Nettoyage profond, hydratation et éclat pour une peau radieuse et revitalisée.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  },
  {
    name: "Épilation",
    desc: "Épilation douce à la cire pour une peau lisse et soyeuse, dans le plus grand confort.",
    img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
  },
  {
    name: "Manucure",
    desc: "Pose de vernis, nail art et soins des ongles pour des mains sublimes.",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
  },
  {
    name: "Soins corps",
    desc: "Gommages, enveloppements et massages relaxants pour un corps revitalisé.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
  },
  {
    name: "Maquillage",
    desc: "Mise en beauté professionnelle pour vos événements et moments spéciaux.",
    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
  },
  {
    name: "Aromathérapie",
    desc: "Soins aux huiles essentielles pour un moment de détente et d'harmonie absolue.",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-40 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      {/* Header Apple style — centré, large */}
      <Reveal className="text-center mb-20 md:mb-28">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-4">Ce que nous offrons</p>
        <h2 className="font-display text-6xl md:text-7xl font-light text-foreground">Nos Services</h2>
      </Reveal>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={Math.min(i * 0.07, 0.42)}>
            <div className="group cursor-default overflow-hidden bg-section-alt">
              <div className="overflow-hidden h-64 sm:h-56 md:h-64">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-2">{s.name}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {/* CTA */}
      <Reveal className="text-center mt-16 md:mt-20">
        <a
          href="https://www.planity.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gold-gradient text-white font-body text-sm uppercase tracking-widest px-12 py-5 rounded-full hover:opacity-90 transition-opacity"
        >
          Réserver en ligne
        </a>
      </Reveal>
    </div>
  </section>
);

export default ServicesSection;
