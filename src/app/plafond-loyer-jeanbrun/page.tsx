import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';
import { PLAFONDS_LOYER, ZONES_LABELS, NIVEAUX_LOYER_LABELS } from '@/config/plafonds';
import type { Zone, NiveauLoyer } from '@/config/plafonds';

export const metadata: Metadata = {
  title: 'Plafonds de loyer Jeanbrun 2026 par zone — Tableau complet et liste des villes',
  description:
    "Consultez les plafonds de loyer du dispositif Jeanbrun 2026 par zone géographique (A bis, A, B1, B2, C). Liste des villes par zone et simulateur gratuit.",
  alternates: { canonical: 'https://simu-jeanbrun.fr/plafond-loyer-jeanbrun' },
};

const zones = Object.keys(ZONES_LABELS) as Zone[];
const niveaux = Object.keys(NIVEAUX_LOYER_LABELS) as NiveauLoyer[];

const villesParZone: Record<Zone, string[]> = {
  A_bis: [
    'Paris (75)',
    'Boulogne-Billancourt (92)',
    'Saint-Denis (93)',
    'Montreuil (93)',
    'Nanterre (92)',
    'Courbevoie (92)',
    'Vincennes (94)',
    'Levallois-Perret (92)',
    'Neuilly-sur-Seine (92)',
    'Issy-les-Moulineaux (92)',
    'Clichy (92)',
    'Aubervilliers (93)',
    'Pantin (93)',
    'Ivry-sur-Seine (94)',
    'Vitry-sur-Seine (94)',
    'Colombes (92)',
    'Asnières-sur-Seine (92)',
    'Saint-Ouen (93)',
    'Rueil-Malmaison (92)',
    'Créteil (94)',
  ],
  A: [
    'Lyon (69)',
    'Marseille (13)',
    'Lille (59)',
    'Montpellier (34)',
    'Nice (06)',
    'Villeurbanne (69)',
    'Toulon (83)',
    'Grenoble (38)',
    'Antibes (06)',
    'Cannes (06)',
    'Annecy (74)',
    'Chambéry (73)',
    'Bayonne (64)',
    'Ajaccio (2A)',
    'La Rochelle (17)',
    'Menton (06)',
    'Thonon-les-Bains (74)',
    'Fréjus (83)',
    'Saint-Raphaël (83)',
    'Hyères (83)',
    'Meaux (77)',
    'Évry-Courcouronnes (91)',
    'Cergy (95)',
    'Versailles (78)',
    'Saint-Germain-en-Laye (78)',
  ],
  B1: [
    'Bordeaux (33)',
    'Toulouse (31)',
    'Nantes (44)',
    'Rennes (35)',
    'Strasbourg (67)',
    'Rouen (76)',
    'Tours (37)',
    'Clermont-Ferrand (63)',
    'Orléans (45)',
    'Dijon (21)',
    'Caen (14)',
    'Metz (57)',
    'Le Mans (72)',
    'Reims (51)',
    'Brest (29)',
    'Perpignan (66)',
    'Besançon (25)',
    'Pau (64)',
    'La Roche-sur-Yon (85)',
    'Poitiers (86)',
    'Vannes (56)',
    'Lorient (56)',
    'Saint-Nazaire (44)',
    'Angoulême (16)',
    'Compiègne (60)',
  ],
  B2: [
    'Amiens (80)',
    'Limoges (87)',
    'Troyes (10)',
    'Bourges (18)',
    'Châteauroux (36)',
    'Agen (47)',
    'Béziers (34)',
    'Évreux (27)',
    'Chartres (28)',
    'Épinal (88)',
    'Cahors (46)',
    'Albi (81)',
    'Tarbes (65)',
    'Auxerre (89)',
    'Périgueux (24)',
    'Mont-de-Marsan (40)',
    'Laval (53)',
    'Moulins (03)',
    'Guéret (23)',
    'Bar-le-Duc (55)',
  ],
  C: [
    'Toutes les communes non classées en zones A bis, A, B1 ou B2',
    'Communes rurales',
    'Petites villes de moins de 10 000 habitants hors zones tendues',
  ],
};

const faqItems = [
  {
    question: 'Comment connaître la zone de ma ville ?',
    answer:
      "Vous pouvez consulter le simulateur officiel du gouvernement sur le site service-public.fr, ou utiliser la liste indicative ci-dessus. En cas de doute, votre notaire ou votre conseiller en gestion de patrimoine pourra vous confirmer la zone de votre commune.",
  },
  {
    question: 'Les plafonds sont-ils les mêmes que pour le Pinel ?',
    answer:
      "Le zonage est le même (A bis, A, B1, B2, C), mais les plafonds de loyer du dispositif Jeanbrun sont spécifiques et basés sur le système Loc'Avantages avec trois niveaux : intermédiaire, social et très social.",
  },
  {
    question: 'Que se passe-t-il si mon loyer dépasse le plafond ?',
    answer:
      "Si votre loyer dépasse le plafond de la zone, vous ne pouvez pas bénéficier du dispositif Jeanbrun. Le loyer doit impérativement respecter le plafond correspondant à votre zone et au niveau de loyer choisi pendant toute la durée de l'engagement (9 ans).",
  },
  {
    question: 'Les plafonds peuvent-ils changer ?',
    answer:
      "Oui, les plafonds de loyer sont révisés chaque année par décret. Les montants indiqués ici sont basés sur les données Loc'Avantages 2026 et seront mis à jour dès publication des plafonds définitifs.",
  },
];

export default function PlafondLoyerPage() {
  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Plafonds de loyer Jeanbrun 2026 par zone — Tableau complet et liste des villes',
            description:
              "Consultez les plafonds de loyer du dispositif Jeanbrun 2026 par zone géographique (A bis, A, B1, B2, C). Liste des villes par zone et simulateur gratuit.",
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
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
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
            <Link href="/dispositif-jeanbrun" className="hover:text-primary">Dispositif Jeanbrun</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Plafonds de loyer</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            Plafonds de loyer Jeanbrun 2026 : tableau par zone et liste des villes
          </h1>

          <p className="text-lg text-text-light mb-4">
            Le dispositif Jeanbrun impose des plafonds de loyer qui varient selon la
            zone géographique du bien et le niveau de loyer choisi (intermédiaire, social
            ou très social). Plus le loyer est bas, plus l&apos;amortissement fiscal est
            élevé.
          </p>
          <p className="text-lg text-text-light mb-8">
            Retrouvez ci-dessous le tableau complet des plafonds ainsi que la liste
            des principales villes par zone pour savoir dans quelle zone se situe votre
            projet.
          </p>

          {/* Tableau des plafonds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-4">
              Tableau des plafonds de loyer (€/m²/mois)
            </h2>
            <div className="overflow-x-auto">
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
                        <td key={niveau} className="p-3 text-center font-semibold">
                          {PLAFONDS_LOYER[zone][niveau].toFixed(2)} €
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-text-light mt-3">
              Plafonds indicatifs basés sur Loc&apos;Avantages 2026. Mis à jour dès publication des plafonds définitifs.
            </p>
          </section>

          {/* Villes par zone */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Liste des principales villes par zone
            </h2>

            {zones.map((zone) => (
              <div key={zone} className="mb-8">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-sm font-bold">
                    {ZONES_LABELS[zone]}
                  </span>
                  Zone {ZONES_LABELS[zone]}
                  <span className="text-sm font-normal text-text-light">
                    — {PLAFONDS_LOYER[zone].intermediaire.toFixed(2)} à {PLAFONDS_LOYER[zone].tres_social.toFixed(2)} €/m²/mois
                  </span>
                </h3>
                <div className="bg-background-alt rounded-xl p-4 border border-border">
                  {zone === 'C' ? (
                    <p className="text-sm text-text-light">{villesParZone[zone][0]}</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {villesParZone[zone].map((ville) => (
                        <span
                          key={ville}
                          className="inline-block px-3 py-1 bg-white rounded-full text-sm text-text border border-border"
                        >
                          {ville}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-5 mt-6">
              <p className="text-sm text-text">
                <strong>Votre ville n&apos;est pas dans la liste ?</strong> Le zonage comprend
                plus de 36 000 communes. Vérifiez votre zone sur le{' '}
                <span className="text-primary font-medium">simulateur officiel du gouvernement</span>{' '}
                ou contactez un conseiller via notre{' '}
                <Link href="/simulateur" className="text-primary font-medium hover:underline">
                  simulateur
                </Link>.
              </p>
            </div>
          </section>

          {/* Exemple de calcul */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-4">
              Exemple de calcul du loyer plafonné
            </h2>
            <div className="bg-background-alt rounded-xl p-6 border border-border">
              <p className="text-text-light mb-4">
                Pour un appartement de <strong>45 m²</strong> en <strong>zone A</strong> avec
                un niveau de loyer <strong>intermédiaire</strong> :
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-text-light">Plafond zone A intermédiaire</span>
                  <span className="font-medium">14,03 €/m²/mois</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-light">Surface</span>
                  <span className="font-medium">45 m²</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
                  <span>Loyer mensuel maximum</span>
                  <span className="text-primary text-lg">631,35 €/mois</span>
                </div>
              </div>
              <p className="text-xs text-text-light">
                En choisissant le niveau social (-30%), le loyer maximum serait de 508,95 €/mois
                mais l&apos;amortissement passerait de 3,5% à 4,5%/an.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">Questions fréquentes</h2>
            <Accordion items={faqItems} />
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Calculez votre loyer et votre économie d&apos;impôt
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Notre simulateur calcule automatiquement le loyer plafonné selon votre zone
              et votre économie d&apos;impôt sur 9 ans.
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
