import { useState, useEffect } from "react";
import { Menu, X, Phone, Star } from "lucide-react";
import GoogleIcon from "./GoogleIcon";

const phoneHref = "tel:+33123456789";
const phone = "01 23 45 67 89";

const links = [
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "À propos" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#accueil" className="font-display text-2xl font-semibold tracking-wide text-foreground shrink-0">
          Douce <span className="text-gold">Beauté</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right: Google badge + phone + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Google badge */}
          <div className="flex items-center gap-1.5">
            <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-sm shrink-0">
              <GoogleIcon size={12} />
            </span>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={11} className="fill-gold text-gold" />
            ))}
            <span className="font-body text-xs text-muted-foreground">4,9 / 5</span>
          </div>

          {/* Phone */}
          <a
            href={phoneHref}
            className="flex items-center gap-1.5 font-body text-xs text-muted-foreground hover:text-gold transition-colors"
          >
            <Phone size={13} strokeWidth={1.8} />
            {phone}
          </a>

          {/* Réserver */}
          <a
            href="https://www.planity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-accent-foreground font-body text-xs uppercase tracking-widest px-6 py-2.5 hover:opacity-90 transition-opacity"
          >
            Réserver
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={phoneHref}
                className="flex items-center gap-2 font-body text-sm text-muted-foreground"
              >
                <Phone size={14} />
                {phone}
              </a>
            </li>
            <li>
              <a
                href="https://www.planity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient text-accent-foreground font-body text-xs uppercase tracking-widest px-8 py-3 block"
              >
                Réserver en ligne
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
