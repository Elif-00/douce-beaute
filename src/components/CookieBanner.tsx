import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies-consent")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookies-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground border-t border-white/10 px-4 py-2.5 sm:px-6 sm:py-4 shadow-2xl">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        <p className="font-body text-[11px] sm:text-xs font-light text-primary-foreground/60 leading-snug">
          Cookies techniques uniquement.{" "}
          <a href="/mentions-legales" className="text-gold hover:underline hidden sm:inline">En savoir plus</a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="font-body text-[10px] sm:text-xs uppercase tracking-widest text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors px-3 py-2 border border-white/10 min-h-[36px]"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="font-body text-[10px] sm:text-xs uppercase tracking-widest gold-gradient text-accent-foreground px-4 py-2 hover:opacity-90 transition-opacity min-h-[36px]"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
