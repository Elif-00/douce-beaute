import { Instagram, Facebook, Star } from "lucide-react";

const Footer = () => (
  <footer className="bg-rose-light border-t border-border pt-8 pb-5">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl text-foreground mb-3">
            Douce <span className="text-gold">Beauté</span>
          </p>
          <p className="font-body text-sm font-light text-foreground/60 leading-relaxed mb-5">
            Un cocon de sérénité où chaque soin devient un rituel de bien-être.
          </p>
          <div className="flex gap-4 mb-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Douce Beauté"
              className="text-foreground/50 hover:text-gold transition-colors"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Douce Beauté"
              className="text-foreground/50 hover:text-gold transition-colors"
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>
          </div>
          <a
            href="https://g.page/douce-beaute-paris"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-sm text-foreground/45 hover:text-gold transition-colors"
          >
            <Star size={11} className="fill-gold text-gold" />
            Voir notre fiche Google
          </a>
        </div>

        {/* Navigation + Contact côte à côte */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-foreground/35 mb-4">Navigation</p>
            <ul className="space-y-2">
              {[
                { href: "/#services", label: "Nos services" },
                { href: "/#apropos", label: "À propos" },
                { href: "/#tarifs", label: "Tarifs" },
                { href: "/#faq", label: "FAQ" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-sm font-light text-foreground/55 hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-widest text-foreground/35 mb-4">Contact</p>
            <p className="font-body text-sm font-light text-foreground/55 leading-relaxed">
              42 Rue de la Beauté<br />
              75008 Paris, France<br /><br />
              <a href="tel:+33123456789" className="hover:text-gold transition-colors">01 23 45 67 89</a><br />
              <a href="mailto:contact@douce-beaute.fr" className="hover:text-gold transition-colors">contact@douce-beaute.fr</a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs font-light text-foreground/35">
          © {new Date().getFullYear()} Douce Beauté. Tous droits réservés.
        </p>
        <a
          href="/mentions-legales"
          className="font-body text-xs font-light text-foreground/35 hover:text-gold transition-colors"
        >
          Mentions légales & RGPD
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
