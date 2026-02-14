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
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Simulateur
            </h3>
            <ul className="space-y-2">
              {footerLinks.simulateur.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
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
            <ul className="space-y-2">
              {footerLinks.comparatifs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
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
            <ul className="space-y-2">
              {footerLinks.fiscalite.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
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
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            Simu-Jeanbrun.fr &mdash; Simulateur du dispositif Jeanbrun 2026. Simulation gratuite et sans engagement.
          </p>
          <p className="text-xs text-white/30 mt-2">
            Les résultats de simulation sont fournis à titre indicatif et ne constituent pas un conseil fiscal ou financier.
          </p>
        </div>
      </div>
    </footer>
  );
}
