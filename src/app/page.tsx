import Link from 'next/link';
import type { Metadata } from 'next';
import { AnimatedCounters } from '@/components/landing/AnimatedCounters';
import { LandingFAQ } from '@/components/landing/LandingFAQ';

export const metadata: Metadata = {
  title: "Simulateur Jeanbrun 2026 — Calculez votre économie d'impôt",
  description:
    "Simulateur gratuit du dispositif Jeanbrun. Calculez votre économie d'impôt, comparez avec le LMNP et la location nue. Résultat instantané.",
  alternates: { canonical: 'https://simu-jeanbrun.fr' },
};

const steps = [
  {
    number: '1',
    title: 'Décrivez votre projet',
    description: 'Type de bien, budget, surface et zone géographique',
    duration: '30 secondes',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Renseignez votre financement',
    description: 'Apport, durée et taux de crédit',
    duration: '30 secondes',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Choisissez votre niveau de loyer',
    description: 'Intermédiaire, social ou très social',
    duration: '30 secondes',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    number: '4',
    title: "Découvrez votre économie d'impôt",
    description: 'Résultat détaillé et comparatif',
    duration: 'Instantané',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const advantages = [
  {
    title: 'Amortissement 3,5% à 5,5%/an',
    description: "Déduisez jusqu'à 5,5% du prix du bien chaque année de vos revenus fonciers. Un levier fiscal sans équivalent en location nue.",
    color: 'text-primary',
    bg: 'bg-primary/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Plus-value protégée',
    description: "Contrairement au LMNP (depuis 2025), les amortissements Jeanbrun ne sont PAS réintégrés dans le calcul de la plus-value à la revente.",
    color: 'text-accent',
    bg: 'bg-accent/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Déficit foncier jusqu'à 10 700 €/an",
    description: "Imputez votre déficit foncier directement sur votre revenu global et réduisez votre impôt sur le revenu dès la première année.",
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
      </svg>
    ),
  },
  {
    title: 'Neuf ET ancien rénové',
    description: "Investissez dans le neuf (VEFA) ou l'ancien avec travaux (minimum 30% du prix). Deux stratégies, un même avantage fiscal.",
    color: 'text-primary',
    bg: 'bg-primary/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385 3.07A.75.75 0 015 17.595v-3.07a.75.75 0 01.217-.531l7.5-7.5A2.25 2.25 0 0114.25 6h4.5A2.25 2.25 0 0121 8.25v4.5a2.25 2.25 0 01-.659 1.591l-7.5 7.5a.75.75 0 01-1.06 0l-3.07-5.385z" />
      </svg>
    ),
  },
];

const comparisonRows = [
  { label: 'Amortissement fiscal', jeanbrun: true, lmnp: true, nu: false },
  { label: 'Plus-value protégée', jeanbrun: true, lmnp: false, nu: true },
  { label: 'Déficit foncier imputable', jeanbrun: true, lmnp: false, nu: true },
  { label: 'Neuf + Ancien', jeanbrun: true, lmnp: true, nu: true },
  { label: "Durée d'engagement", jeanValue: '9 ans', lmnpValue: 'Libre', nuValue: 'Libre' },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Simu-Jeanbrun',
            url: 'https://simu-jeanbrun.fr',
            description: "Simulateur gratuit du dispositif Jeanbrun — Défiscalisation immobilière 2026-2028",
          }),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.04%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 backdrop-blur-sm rounded-full text-sm font-medium text-secondary-light mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Nouveau dispositif fiscal 2026-2028
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] tracking-tight">
              Investissement locatif : économisez{' '}
              <span className="text-secondary-light">
                jusqu&apos;à 50 000 &euro;
              </span>{' '}
              d&apos;impôts avec le dispositif Jeanbrun
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              Simulez gratuitement votre économie en 2 minutes. Amortissement jusqu&apos;à 5,5%/an,
              déficit foncier, plus-value protégée.
            </p>
            <div className="mt-10">
              <Link
                href="/simulateur"
                className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white font-bold rounded-xl hover:bg-accent-light transition-all shadow-lg shadow-accent/30 text-lg"
              >
                Calculer mon économie d&apos;impôt
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                100% gratuit
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sans engagement
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Résultat immédiat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-16 md:py-24 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
              Comment ça marche ?
            </h2>
            <p className="mt-3 text-text-light max-w-xl mx-auto">
              4 étapes simples pour connaître votre économie d&apos;impôt
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection line (desktop only) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

            {steps.map((step) => (
              <div key={step.number} className="relative bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white mb-4 relative z-10">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-text mb-1">{step.title}</h3>
                <p className="text-sm text-text-light">{step.description}</p>
                <span className="inline-block mt-3 text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/simulateur"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all shadow-sm text-lg"
            >
              Commencer ma simulation gratuite
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* AVANTAGES JEANBRUN */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
              Pourquoi investir avec le dispositif Jeanbrun ?
            </h2>
            <p className="mt-3 text-text-light max-w-xl mx-auto">
              4 avantages fiscaux majeurs pour l&apos;investissement locatif entre 2026 et 2028
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="group flex gap-4 bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className={`shrink-0 w-12 h-12 ${a.bg} ${a.color} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  {a.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1.5">{a.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <AnimatedCounters />

      {/* COMPARAISON EXPRESS */}
      <section className="py-16 md:py-24 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
              Jeanbrun vs LMNP vs Location nue
            </h2>
            <p className="mt-3 text-text-light max-w-xl mx-auto">
              Comparez les régimes fiscaux en un coup d&apos;oeil
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 border-b border-border">
              <div className="p-4" />
              <div className="p-4 text-center bg-primary/5 border-x border-primary/10">
                <span className="text-sm font-bold text-primary">Jeanbrun</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-sm font-medium text-text-light">LMNP</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-sm font-medium text-text-light">Loc. nue</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-4 ${i < comparisonRows.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="p-4 text-sm font-medium text-text">{row.label}</div>
                <div className="p-4 flex justify-center bg-primary/5 border-x border-primary/10">
                  {'jeanValue' in row ? (
                    <span className="text-sm font-medium text-primary">{row.jeanValue}</span>
                  ) : row.jeanbrun ? (
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div className="p-4 flex justify-center">
                  {'lmnpValue' in row ? (
                    <span className="text-sm text-text-light">{row.lmnpValue}</span>
                  ) : row.lmnp ? (
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div className="p-4 flex justify-center">
                  {'nuValue' in row ? (
                    <span className="text-sm text-text-light">{row.nuValue}</span>
                  ) : row.nu ? (
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/jeanbrun-vs-lmnp"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light transition-colors"
            >
              Voir la comparaison détaillée
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* URGENCE */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-secondary-dark via-secondary to-secondary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Dispositif à durée limitée</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Le dispositif Jeanbrun est ouvert du 1er février 2026 au 31 décembre 2028
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Profitez de cette fenêtre d&apos;investissement avant la clôture du dispositif.
          </p>
          <Link
            href="/simulateur"
            className="inline-flex items-center px-10 py-5 bg-white text-secondary-dark font-bold rounded-xl hover:bg-white/90 transition-all shadow-lg text-lg"
          >
            Simuler maintenant
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
              Questions fréquentes
            </h2>
          </div>
          <LandingFAQ />
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Prêt à calculer votre économie d&apos;impôt ?
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Simulation gratuite, résultat instantané, comparaison avec le LMNP et la location nue.
          </p>
          <Link
            href="/simulateur"
            className="inline-flex items-center mt-10 px-10 py-5 bg-accent text-white font-bold rounded-xl hover:bg-accent-light transition-all shadow-lg shadow-accent/30 text-lg"
          >
            Lancer ma simulation gratuite
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
