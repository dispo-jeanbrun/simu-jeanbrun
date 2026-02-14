import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';
import { PLAFONDS_LOYER, ZONES_LABELS, NIVEAUX_LOYER_LABELS, TAUX_AMORTISSEMENT, PLAFOND_AMORTISSEMENT } from '@/config/plafonds';
import type { Zone, NiveauLoyer } from '@/config/plafonds';

export const metadata: Metadata = {
  title: 'Dispositif Jeanbrun 2026 : Guide complet — Fonctionnement, conditions, avantages',
  description:
    "Tout savoir sur le dispositif Jeanbrun : amortissement fiscal, conditions d'éligibilité, plafonds de loyer, comparaison avec le Pinel et le LMNP.",
  alternates: { canonical: 'https://simu-jeanbrun.fr/dispositif-jeanbrun' },
};

const faqItems = [
  {
    question: "Qu'est-ce que le dispositif Jeanbrun ?",
    answer:
      "Le dispositif Jeanbrun est un mécanisme fiscal d'investissement locatif introduit par le PLF 2026, applicable du 1er février 2026 au 31 décembre 2028. Il permet aux investisseurs de déduire un amortissement de leurs revenus fonciers, créant ainsi du déficit foncier et réduisant leur impôt sur le revenu.",
  },
  {
    question: 'Qui peut bénéficier du dispositif Jeanbrun ?',
    answer:
      "Tout contribuable fiscalement domicilié en France peut bénéficier du dispositif Jeanbrun, à condition d'acquérir un bien immobilier (neuf ou ancien avec travaux représentant au moins 30% du prix) et de le louer nu à titre de résidence principale du locataire, en respectant les plafonds de loyer.",
  },
  {
    question: 'Le dispositif Jeanbrun est-il compatible avec une SCI ?',
    answer:
      "Oui, le dispositif Jeanbrun est compatible avec une SCI à l'IR (impôt sur le revenu). Les associés de la SCI bénéficient de l'amortissement au prorata de leurs parts. En revanche, une SCI à l'IS ne peut pas bénéficier du dispositif.",
  },
  {
    question: "Quelle est la durée d'engagement de location ?",
    answer:
      "L'engagement de location est de 9 ans minimum. Le bien doit être loué nu (non meublé) à titre de résidence principale du locataire pendant toute cette durée. Le non-respect de cet engagement entraîne la perte de l'avantage fiscal.",
  },
  {
    question: 'Les amortissements Jeanbrun sont-ils réintégrés dans la plus-value ?',
    answer:
      "Non, c'est un avantage majeur du dispositif Jeanbrun par rapport au LMNP. Les amortissements déduits ne sont pas réintégrés dans le calcul de la plus-value immobilière à la revente, contrairement au régime LMNP depuis la réforme de 2025.",
  },
  {
    question: "Peut-on cumuler le Jeanbrun avec d'autres dispositifs ?",
    answer:
      "Le dispositif Jeanbrun ne peut pas être cumulé avec d'autres dispositifs de défiscalisation immobilière (Pinel, Denormandie, etc.) pour un même bien. Cependant, vous pouvez détenir des biens sous différents régimes fiscaux dans votre patrimoine.",
  },
];

const zones = Object.keys(ZONES_LABELS) as Zone[];
const niveaux = Object.keys(NIVEAUX_LOYER_LABELS) as NiveauLoyer[];

export default function DispositifJeanbrunPage() {
  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Dispositif Jeanbrun 2026 : Guide complet — Fonctionnement, conditions, avantages',
            description:
              "Tout savoir sur le dispositif Jeanbrun : amortissement fiscal, conditions d'éligibilité, plafonds de loyer, comparaison avec le Pinel et le LMNP.",
            datePublished: '2026-02-01',
            author: { '@type': 'Organization', name: 'Simu-Jeanbrun.fr' },
            publisher: { '@type': 'Organization', name: 'Simu-Jeanbrun.fr' },
          }),
        }}
      />
      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <article className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-text-light mb-6">
            <Link href="/" className="hover:text-primary">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Dispositif Jeanbrun</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            Dispositif Jeanbrun 2026 : guide complet du nouveau dispositif fiscal d&apos;investissement locatif
          </h1>

          <p className="text-lg text-text-light mb-4">
            Le dispositif Jeanbrun, issu du Projet de Loi de Finances 2026, est le nouveau
            mécanisme d&apos;amortissement fiscal pour l&apos;investissement locatif en France.
            Applicable dès février 2026 et jusqu&apos;au 31 décembre 2028, il remplace
            progressivement les dispositifs précédents (Pinel, Denormandie) avec une
            approche innovante : l&apos;amortissement du bien immobilier sur les revenus fonciers.
          </p>

          <p className="text-lg text-text-light mb-8">
            Ce guide complet vous explique le fonctionnement du dispositif, ses conditions
            d&apos;éligibilité, les plafonds de loyer par zone et les avantages fiscaux concrets
            que vous pouvez en tirer.
          </p>

          {/* Table des matières */}
          <div className="bg-background-alt rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-bold text-text mb-3">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#fonctionnement" className="text-primary hover:underline">1. Comment fonctionne le dispositif Jeanbrun ?</a></li>
              <li><a href="#conditions" className="text-primary hover:underline">2. Conditions d&apos;éligibilité</a></li>
              <li><a href="#amortissement" className="text-primary hover:underline">3. L&apos;amortissement Jeanbrun en détail</a></li>
              <li><a href="#plafonds" className="text-primary hover:underline">4. Plafonds de loyer par zone</a></li>
              <li><a href="#deficit-foncier" className="text-primary hover:underline">5. Le déficit foncier dans le Jeanbrun</a></li>
              <li><a href="#avantages" className="text-primary hover:underline">6. Les avantages du dispositif</a></li>
              <li><a href="#comparaison" className="text-primary hover:underline">7. Comparaison avec le LMNP et le Pinel</a></li>
              <li><a href="#faq" className="text-primary hover:underline">8. FAQ</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="fonctionnement" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              1. Comment fonctionne le dispositif Jeanbrun ?
            </h2>
            <p className="text-text-light mb-4">
              Le dispositif Jeanbrun permet aux investisseurs immobiliers de déduire un
              <strong> amortissement annuel</strong> du prix de leur bien directement de
              leurs revenus fonciers. Cet amortissement, combiné aux charges déductibles
              classiques (intérêts d&apos;emprunt, charges de copropriété, taxe foncière, etc.),
              crée le plus souvent un <strong>déficit foncier</strong> qui réduit l&apos;impôt
              sur le revenu.
            </p>
            <p className="text-text-light mb-4">
              Concrètement, voici le mécanisme :
            </p>
            <ol className="list-decimal list-inside space-y-2 text-text-light mb-4 ml-4">
              <li>Vous achetez un bien immobilier (neuf ou ancien avec travaux)</li>
              <li>Vous le louez nu avec un loyer plafonné (en contrepartie de l&apos;avantage fiscal)</li>
              <li>Chaque année, vous déduisez un amortissement de 3,5% à 5,5% de la valeur du bien</li>
              <li>Cet amortissement crée du déficit foncier, réduisant votre impôt</li>
              <li>À la revente, les amortissements ne sont <strong>pas réintégrés</strong> dans la plus-value</li>
            </ol>
            <p className="text-text-light">
              Le taux d&apos;amortissement dépend du niveau de loyer choisi : plus le loyer est
              bas par rapport au marché, plus l&apos;amortissement est élevé. C&apos;est un système
              à trois niveaux inspiré de Loc&apos;Avantages.
            </p>
          </section>

          {/* Section 2 */}
          <section id="conditions" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              2. Conditions d&apos;éligibilité
            </h2>
            <p className="text-text-light mb-4">
              Pour bénéficier du dispositif Jeanbrun, plusieurs conditions doivent être respectées :
            </p>
            <div className="space-y-3 mb-4">
              {[
                'Être fiscalement domicilié en France',
                "Le bien doit être acquis entre le 1er février 2026 et le 31 décembre 2028",
                'Le bien peut être neuf (VEFA) ou ancien avec travaux représentant au moins 30% du prix',
                "Le bien doit être loué nu (non meublé) à titre de résidence principale du locataire",
                "L'engagement de location est de 9 ans minimum",
                'Les loyers doivent respecter les plafonds selon la zone géographique et le niveau choisi',
                'Le bien ne peut pas être loué à un membre du foyer fiscal',
              ].map((condition, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-light">{condition}</span>
                </div>
              ))}
            </div>
            <p className="text-text-light">
              Pour vérifier l&apos;éligibilité de votre projet et calculer votre avantage fiscal,
              utilisez notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur Jeanbrun gratuit
              </Link>.
            </p>
          </section>

          {/* Section 3 */}
          <section id="amortissement" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              3. L&apos;amortissement Jeanbrun en détail
            </h2>
            <p className="text-text-light mb-4">
              L&apos;amortissement est calculé sur la <strong>base amortissable</strong> du bien,
              c&apos;est-à-dire 80% du prix d&apos;acquisition plus travaux (les 20% restants
              correspondant à la valeur du foncier, non amortissable).
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Niveau de loyer</th>
                    <th className="text-center p-3">Décote loyer</th>
                    <th className="text-center p-3">Taux amortissement</th>
                    <th className="text-center p-3">Plafond annuel</th>
                  </tr>
                </thead>
                <tbody>
                  {niveaux.map((niveau) => (
                    <tr key={niveau} className="border-b border-border">
                      <td className="p-3 font-medium">{NIVEAUX_LOYER_LABELS[niveau]}</td>
                      <td className="p-3 text-center">
                        {niveau === 'intermediaire' ? '-15%' : niveau === 'social' ? '-30%' : '-45%'}
                      </td>
                      <td className="p-3 text-center font-semibold text-primary">
                        {(TAUX_AMORTISSEMENT[niveau] * 100).toFixed(1)}%/an
                      </td>
                      <td className="p-3 text-center">
                        {PLAFOND_AMORTISSEMENT[niveau].toLocaleString('fr-FR')} €/an
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-text-light">
              Pour en savoir plus sur le fonctionnement de l&apos;amortissement, consultez notre
              page dédiée :{' '}
              <Link href="/amortissement-jeanbrun" className="text-primary font-medium hover:underline">
                Amortissement Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 4 */}
          <section id="plafonds" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              4. Plafonds de loyer par zone géographique
            </h2>
            <p className="text-text-light mb-4">
              Les plafonds de loyer varient selon la zone géographique du bien et le niveau
              de loyer choisi. Voici les plafonds en vigueur (en €/m²/mois) :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Zone</th>
                    {niveaux.map((n) => (
                      <th key={n} className="text-center p-3">{NIVEAUX_LOYER_LABELS[n]}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {zones.map((zone) => (
                    <tr key={zone} className="border-b border-border">
                      <td className="p-3 font-medium">Zone {ZONES_LABELS[zone]}</td>
                      {niveaux.map((niveau) => (
                        <td key={niveau} className="p-3 text-center">
                          {PLAFONDS_LOYER[zone][niveau].toFixed(2)} €
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-text-light">
              Pour connaître les plafonds détaillés et trouver la zone de votre ville, consultez
              notre page{' '}
              <Link href="/plafond-loyer-jeanbrun" className="text-primary font-medium hover:underline">
                Plafonds de loyer Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 5 */}
          <section id="deficit-foncier" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              5. Le déficit foncier dans le Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              L&apos;amortissement Jeanbrun, combiné aux charges déductibles classiques
              (intérêts d&apos;emprunt, charges, taxe foncière, etc.), génère le plus souvent un
              <strong> déficit foncier</strong>. Ce déficit est imputable sur le revenu global
              dans la limite de 10 700 €/an (21 400 € en cas de travaux de rénovation
              énergétique).
            </p>
            <p className="text-text-light mb-4">
              Le surplus de déficit est reportable pendant 10 ans sur les revenus fonciers
              futurs. C&apos;est un mécanisme très puissant pour réduire l&apos;impôt sur le revenu,
              particulièrement efficace pour les contribuables avec une TMI élevée (30%, 41%
              ou 45%).
            </p>
            <p className="text-text-light">
              En savoir plus :{' '}
              <Link href="/deficit-foncier-jeanbrun" className="text-primary font-medium hover:underline">
                Déficit foncier et dispositif Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section id="avantages" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              6. Les avantages du dispositif Jeanbrun
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                {
                  title: 'Amortissement fiscal',
                  text: "Déduction de 3,5% à 5,5% du prix du bien chaque année, créant du déficit foncier.",
                },
                {
                  title: 'Plus-value protégée',
                  text: "Les amortissements ne sont pas réintégrés dans la plus-value à la revente, contrairement au LMNP.",
                },
                {
                  title: 'Neuf et ancien',
                  text: "Applicable dans le neuf et l'ancien avec travaux, offrant plus de flexibilité.",
                },
                {
                  title: 'Compatible SCI',
                  text: "Le dispositif est compatible avec une SCI à l'IR, facilitant la gestion patrimoniale.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-background-alt rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-text mb-2">{item.title}</h3>
                  <p className="text-sm text-text-light">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section id="comparaison" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              7. Comparaison avec le LMNP et le Pinel
            </h2>
            <p className="text-text-light mb-4">
              Le dispositif Jeanbrun se positionne comme une alternative intéressante au LMNP et
              au Pinel. Voici les principales différences :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Critère</th>
                    <th className="text-center p-3">Jeanbrun</th>
                    <th className="text-center p-3">LMNP</th>
                    <th className="text-center p-3">Pinel</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Type de location', 'Nu', 'Meublé', 'Nu'],
                    ['Amortissement', 'Oui (3,5% à 5,5%)', 'Oui (~3%)', 'Non'],
                    ['Réduction d\'impôt', 'Via déficit foncier', 'Via BIC', 'Directe (obsolète)'],
                    ['Réintégration plus-value', 'Non', 'Oui (depuis 2025)', 'Non'],
                    ['Plafond de loyer', 'Oui', 'Non', 'Oui'],
                    ['Ancien avec travaux', 'Oui (≥30%)', 'Oui', 'Non'],
                    ['Compatible SCI IR', 'Oui', 'Non', 'Oui'],
                  ].map(([critere, jb, lmnp, pinel]) => (
                    <tr key={critere} className="border-b border-border">
                      <td className="p-3 font-medium">{critere}</td>
                      <td className="p-3 text-center">{jb}</td>
                      <td className="p-3 text-center">{lmnp}</td>
                      <td className="p-3 text-center">{pinel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-text-light">
              Pour un comparatif détaillé, consultez nos pages :{' '}
              <Link href="/jeanbrun-vs-lmnp" className="text-primary font-medium hover:underline">
                Jeanbrun vs LMNP
              </Link>{' '}
              et{' '}
              <Link href="/jeanbrun-vs-pinel" className="text-primary font-medium hover:underline">
                Jeanbrun vs Pinel
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-6">
              8. Questions fréquentes
            </h2>
            <Accordion items={faqItems} />
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Simulez votre investissement Jeanbrun
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Calculez votre économie d&apos;impôt, comparez avec le LMNP et la location nue.
              Simulation gratuite en 2 minutes.
            </p>
            <Link
              href="/simulateur"
              className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-all shadow-lg text-lg"
            >
              Lancer ma simulation gratuite
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
