import type { Metadata } from 'next';
import { SimulatorForm } from '@/components/simulator/SimulatorForm';

export const metadata: Metadata = {
  title: 'Simulateur Dispositif Jeanbrun 2026 — Simulation gratuite en ligne',
  description:
    "Simulez votre investissement locatif en dispositif Jeanbrun. Amortissement, déficit foncier, comparaison Jeanbrun vs LMNP. Résultat en 2 minutes.",
  alternates: { canonical: 'https://simu-jeanbrun.fr/simulateur' },
};

export default function SimulateurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Simulateur Jeanbrun',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
            },
            description:
              "Simulateur gratuit du dispositif Jeanbrun 2026. Calculez votre économie d'impôt sur 9 ans.",
          }),
        }}
      />

      <section className="py-8 md:py-12 bg-background-alt min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust bar */}
          <div className="flex items-center justify-center gap-6 mb-6 text-xs text-text-light">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Simulation gratuite
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Données protégées
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Résultat en 2 min
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-1.997M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              Plus de 1 847 simulations
            </span>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-text">
              Simulateur Jeanbrun 2026
            </h1>
            <p className="text-text-light mt-2 max-w-xl mx-auto">
              Calculez votre économie d&apos;impôt et comparez avec le LMNP et la
              location nue.
            </p>
          </div>

          <SimulatorForm />

          <div className="mt-8 text-center text-xs text-text-light max-w-xl mx-auto">
            <p>
              Les résultats de cette simulation sont fournis à titre indicatif et ne
              constituent pas un conseil fiscal, juridique ou financier. Les calculs
              sont basés sur les données fournies et les paramètres du dispositif
              Jeanbrun tels que connus à ce jour.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
