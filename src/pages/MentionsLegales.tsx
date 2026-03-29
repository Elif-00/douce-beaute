const MentionsLegales = () => (
  <main className="min-h-screen bg-background py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <a href="/" className="font-body text-xs uppercase tracking-widest text-gold hover:opacity-70 transition-opacity mb-10 inline-block">
        ← Retour au site
      </a>
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-12">Mentions légales</h1>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-medium text-foreground mb-4">Éditeur du site</h2>
        <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
          Douce Beauté<br />
          42 Rue de la Beauté, 75008 Paris, France<br />
          Téléphone : 01 23 45 67 89<br />
          Email : contact@douce-beaute.fr<br />
          Forme juridique : [À compléter]<br />
          SIRET : [À compléter]
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-medium text-foreground mb-4">Hébergement</h2>
        <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
          Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-medium text-foreground mb-4">Propriété intellectuelle</h2>
        <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
          L'ensemble des contenus présents sur ce site (textes, images, design) est la propriété exclusive de Douce Beauté. Toute reproduction, même partielle, est interdite sans autorisation préalable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-medium text-foreground mb-4">Données personnelles (RGPD)</h2>
        <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
          Les données collectées via le formulaire de contact (nom, email, message) sont utilisées uniquement pour répondre à vos demandes. Elles ne sont jamais cédées à des tiers.<br /><br />
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : contact@douce-beaute.fr.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-medium text-foreground mb-4">Cookies</h2>
        <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
          Ce site n'utilise pas de cookies publicitaires ou de tracking. Seuls des cookies techniques essentiels au bon fonctionnement du site peuvent être utilisés.
        </p>
      </section>
    </div>
  </main>
);

export default MentionsLegales;
