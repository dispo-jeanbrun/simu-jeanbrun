import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Simulateur Jeanbrun 2026 — Calculez votre économie d'impôt",
  description:
    "Simulateur gratuit du dispositif Jeanbrun. Calculez votre économie d'impôt, comparez avec le LMNP et la location nue. Résultat instantané.",
  alternates: { canonical: 'https://simu-jeanbrun.fr' },
};

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Amortissement fiscal',
    description:
      "Déduisez jusqu'à 5,5% du prix du bien chaque année de vos revenus fonciers. Un avantage unique par rapport à la location nue classique.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Plus-value protégée',
    description:
      "Contrairement au LMNP, les amortissements Jeanbrun ne sont PAS réintégrés dans le calcul de la plus-value à la revente.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Déficit foncier',
    description:
      "Créez du déficit foncier imputable sur votre revenu global (jusqu'à 10 700 €/an) et réduisez votre impôt sur le revenu.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: 'Neuf ou ancien rénové',
    description:
      "Le dispositif Jeanbrun s'applique aussi bien dans le neuf que dans l'ancien avec travaux (minimum 30% du prix d'acquisition).",
  },
];

const steps = [
  { number: '1', title: 'Décrivez votre projet', description: 'Type de bien, budget, localisation' },
  { number: '2', title: 'Financement', description: 'Apport, crédit, taux' },
  { number: '3', title: 'Location', description: 'Niveau de loyer, charges' },
  { number: '4', title: 'Résultat instantané', description: "Économie d'impôt sur 9 ans" },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Simu-Jeanbrun.fr',
            url: 'https://simu-jeanbrun.fr',
            description:
              "Simulateur gratuit du dispositif Jeanbrun 2026. Calculez votre économie d'impôt immobilière.",
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://simu-jeanbrun.fr/simulateur',
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Nouveau dispositif fiscal 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Calculez votre{' '}
              <span className="text-secondary-light">
                économie d&apos;impôt
              </span>{' '}
              avec le dispositif Jeanbrun
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Simulez gratuitement votre investissement locatif en dispositif
              Jeanbrun. Amortissement, déficit foncier, comparaison avec le LMNP.
              Résultat en 2 minutes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/simulateur"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-all shadow-lg shadow-secondary/30 text-lg"
              >
                Lancer ma simulation gratuite
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/dispositif-jeanbrun"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
              >
                Comprendre le dispositif
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/50">
              Simulation gratuite et sans engagement &mdash; Vos données sont protégées
            </p>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 md:py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              Simulez en 4 étapes simples
            </h2>
            <p className="mt-3 text-text-light max-w-xl mx-auto">
              Notre simulateur calcule précisément votre économie d&apos;impôt
              avec le dispositif Jeanbrun.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-white rounded-xl p-6 border border-border shadow-sm"
              >
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-text mb-1">{step.title}</h3>
                <p className="text-sm text-text-light">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/simulateur"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors shadow-sm"
            >
              Commencer ma simulation
            </Link>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              Pourquoi investir avec le dispositif Jeanbrun ?
            </h2>
            <p className="mt-3 text-text-light max-w-xl mx-auto">
              Le dispositif Jeanbrun offre des avantages fiscaux majeurs pour
              l&apos;investissement locatif entre 2026 et 2028.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 bg-white rounded-xl p-6 border border-border shadow-sm"
              >
                <div className="shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">{feature.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Prêt à calculer votre économie d&apos;impôt ?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Simulation gratuite, résultat instantané, comparaison avec le LMNP
            et la location nue.
          </p>
          <Link
            href="/simulateur"
            className="inline-flex items-center mt-8 px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-all shadow-lg shadow-secondary/30 text-lg"
          >
            Simuler mon investissement Jeanbrun
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
