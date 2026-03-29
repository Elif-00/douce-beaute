import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Comment réserver un soin ?",
    a: "Vous pouvez nous contacter par téléphone, par email ou via le formulaire de contact en bas de page. Nous vous confirmons votre rendez-vous dans les 24h.",
  },
  {
    q: "Quels produits utilisez-vous ?",
    a: "Nous travaillons exclusivement avec des marques premium à base de produits naturels et certifiés. Nous adaptons chaque soin à votre type de peau et vos besoins spécifiques.",
  },
  {
    q: "Quelle est votre politique d'annulation ?",
    a: "Nous vous demandons de nous prévenir au moins 24h à l'avance en cas d'annulation ou de report de rendez-vous. Passé ce délai, une participation aux frais pourra être demandée.",
  },
  {
    q: "Y a-t-il un parking à proximité ?",
    a: "Oui, plusieurs parkings sont accessibles à moins de 5 minutes à pied du salon. Nous sommes également bien desservis par les transports en commun.",
  },
  {
    q: "Les soins sont-ils adaptés aux peaux sensibles ?",
    a: "Absolument. Chaque soin est personnalisé après un diagnostic cutané. Nous avons des protocoles spéciaux pour les peaux sensibles, réactives ou atopiques.",
  },
  {
    q: "Proposez-vous des cartes cadeaux ?",
    a: "Oui, des cartes cadeaux sont disponibles pour tous les montants et tous les soins. Elles sont valables 1 an et peuvent être offertes pour toutes les occasions.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Vos questions</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">FAQ</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border bg-transparent">
              <button
                className="w-full flex items-center justify-between px-0 sm:px-0 py-5 sm:py-6 text-left min-h-[52px]"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display text-lg sm:text-xl font-light text-foreground pr-4">{faq.q}</span>
                {open === i
                  ? <Minus size={18} className="text-gold shrink-0" />
                  : <Plus size={18} className="text-gold shrink-0" />
                }
              </button>
              {open === i && (
                <div className="pb-5 sm:pb-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
