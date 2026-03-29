import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://www.planity.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Réserver en ligne"
      className={`lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 gold-gradient text-white font-body text-sm uppercase tracking-widest px-8 py-3.5 rounded-full shadow-xl whitespace-nowrap transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      Réserver en ligne
    </a>
  );
};

export default FloatingCTA;
