const figures = [
  { value: "8+", label: "Ans d'expérience" },
  { value: "3 500+", label: "Clientes satisfaites" },
  { value: "100%", label: "Produits naturels" },
  { value: "6", label: "Soins signature" },
];

const KeyFiguresStrip = () => (
  <div className="bg-rose-light py-10 border-y border-border">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {figures.map((f) => (
          <div key={f.label} className="text-center">
            <p className="font-display text-3xl md:text-4xl font-light text-gold">{f.value}</p>
            <p className="font-body text-sm uppercase tracking-widest text-muted-foreground mt-2">{f.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default KeyFiguresStrip;
