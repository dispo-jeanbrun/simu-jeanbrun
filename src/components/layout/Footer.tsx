import Link from 'next/link';

const footerLinks = {
  simulateur: [
    { href: '/simulateur', label: 'Simulateur Jeanbrun' },
    { href: '/dispositif-jeanbrun', label: 'Guide du dispositif' },
    { href: '/conditions-jeanbrun', label: "Conditions d'éligibilité" },
    { href: '/fiscalite-jeanbrun', label: 'Fiscalité détaillée' },
  ],
  comparatifs: [
    { href: '/jeanbrun-vs-lmnp', label: 'Jeanbrun vs LMNP' },
    { href: '/jeanbrun-vs-pinel', label: 'Jeanbrun vs Pinel' },
    { href: '/jeanbrun-ancien-renove', label: 'Jeanbrun ancien rénové' },
    { href: '/jeanbrun-neuf', label: 'Jeanbrun neuf' },
  ],
  fiscalite: [
    { href: '/amortissement-jeanbrun', label: 'Amortissement' },
    { href: '/deficit-foncier-jeanbrun', label: 'Déficit foncier' },
    { href: '/plafond-loyer-jeanbrun', label: 'Plafonds de loyer' },
    { href: '/jeanbrun-sci', label: 'Jeanbrun et SCI' },
  ],
  legal: [
    { href: '/mentions-legales', label: 'Mentions légales' },
    { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Simulateur
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.simulateur.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Comparatifs
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.comparatifs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Fiscalité
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.fiscalite.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Informations
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/40 text-center">
            Simu-Jeanbrun.fr &mdash; Simulation gratuite du dispositif Jeanbrun 2026.
            Les résultats sont fournis à titre indicatif et ne constituent pas un conseil fiscal.
            Consultez un professionnel.
          </p>
          <p className="text-xs text-white/25 mt-3 text-center">
            Conforme RGPD &mdash; Vos données sont protégées
          </p>
        </div>
      </div>
    </footer>
  );
}
