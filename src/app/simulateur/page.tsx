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
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-text">
              Simulateur Jeanbrun 2026
            </h1>
            <p className="text-text-light mt-2 max-w-xl mx-auto">
              Calculez votre économie d&apos;impôt et comparez avec le LMNP et la
              location nue. Résultat instantané.
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
