const figures = [
  { value: "8+", label: "Ans d'expérience" },
  { value: "3 500+", label: "Clientes satisfaites" },
  { value: "100%", label: "Produits naturels" },
  { value: "6", label: "Soins signature" },
];

const KeyFiguresStrip = () => (
  <div className="bg-foreground py-16 md:py-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 max-w-5xl mx-auto md:divide-x md:divide-white/10">
        {figures.map((f) => (
          <div key={f.label} className="text-center md:px-8">
            <p className="font-display text-4xl md:text-5xl font-light text-gold mb-2">{f.value}</p>
            <p className="font-body text-xs uppercase tracking-widest text-white/40">{f.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default KeyFiguresStrip;
