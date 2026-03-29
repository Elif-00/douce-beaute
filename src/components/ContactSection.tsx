import { MapPin, Clock, Phone } from "lucide-react";

const phoneHref = "tel:+33123456789";
const phone = "01 23 45 67 89";

const ContactSection = () => (
  <section id="contact" className="py-12 md:py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-10 md:mb-14">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Nous contacter</p>
        <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">Contact</h2>
      </div>

      {/* Map pleine largeur */}
      <div className="overflow-hidden border border-border mb-8 md:mb-12 max-w-5xl mx-auto">
        <iframe
          title="Localisation Douce Beauté"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342024!2d2.304346815674!3d48.87456667928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4b3e5f02b%3A0x21a3078b63e4c3a5!2sRue%20du%20Faubourg%20Saint-Honor%C3%A9%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1711000000000!5m2!1sfr!2sfr"
          width="100%"
          height="420"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Bloc réservation / contact */}
      <div className="max-w-5xl mx-auto mb-px bg-foreground px-8 py-10 md:py-14 flex flex-col sm:flex-row items-center justify-between gap-6 border border-b-0 border-border">
        <div className="text-center sm:text-left">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-2">Prenez rendez-vous</p>
          <a
            href={phoneHref}
            className="font-display text-4xl md:text-5xl font-light text-gold hover:opacity-80 transition-opacity"
          >
            {phone}
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={phoneHref}
            className="flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground font-body text-sm uppercase tracking-widest px-7 py-3.5 hover:border-gold hover:text-gold transition-colors"
          >
            <Phone size={15} strokeWidth={1.8} />
            Appeler
          </a>
          <a
            href="https://www.planity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-accent-foreground font-body text-sm uppercase tracking-widest px-7 py-3.5 hover:opacity-90 transition-opacity text-center"
          >
            Réserver en ligne
          </a>
        </div>
      </div>

      {/* 3 blocs d'infos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border max-w-5xl mx-auto border border-border">
        <div className="bg-background px-8 py-10 md:py-14 flex flex-col items-center text-center gap-3">
          <MapPin size={24} className="text-gold" strokeWidth={1.5} />
          <h4 className="font-display text-xl font-semibold text-foreground">Adresse</h4>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            42 Rue de la Beauté<br />75008 Paris, France
          </p>
        </div>

        <div className="bg-background px-8 py-10 md:py-14 flex flex-col items-center text-center gap-3">
          <Clock size={24} className="text-gold" strokeWidth={1.5} />
          <h4 className="font-display text-xl font-semibold text-foreground">Horaires</h4>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Lun – Ven : 9h00 – 19h00<br />
            Samedi : 9h00 – 17h00<br />
            Dimanche : Fermé
          </p>
        </div>

        <div className="bg-background px-8 py-10 md:py-14 flex flex-col items-center text-center gap-3">
          <Phone size={24} className="text-gold" strokeWidth={1.5} />
          <h4 className="font-display text-xl font-semibold text-foreground">Téléphone</h4>
          <a
            href={phoneHref}
            className="font-body text-base text-muted-foreground hover:text-gold transition-colors"
          >
            {phone}
          </a>
          <p className="font-body text-sm text-muted-foreground/70">
            Du lundi au samedi
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
