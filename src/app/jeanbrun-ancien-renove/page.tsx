import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Jeanbrun dans l\u2019ancien r\u00e9nov\u00e9 : guide complet 2026',
  description:
    'Investir dans l\u2019ancien avec travaux gr\u00e2ce au dispositif Jeanbrun. Conditions des 30% de travaux, cumul d\u00e9ficit foncier et amortissement, exemples.',
  alternates: { canonical: 'https://simu-jeanbrun.fr/jeanbrun-ancien-renove' },
};

const faqItems = [
  {
    question: 'Peut-on acheter un bien ancien sans travaux avec le Jeanbrun ?',
    answer:
      "Non. Le dispositif Jeanbrun dans l\u2019ancien impose que les travaux repr\u00e9sentent au moins 30% du co\u00fbt total de l\u2019op\u00e9ration (prix d\u2019acquisition + travaux). Un bien ancien sans travaux ou avec des travaux inf\u00e9rieurs \u00e0 ce seuil n\u2019est pas \u00e9ligible.",
  },
  {
    question: 'Les travaux doivent-ils \u00eatre r\u00e9alis\u00e9s avant la mise en location ?',
    answer:
      "Oui. Les travaux doivent \u00eatre achev\u00e9s et le logement doit \u00eatre d\u00e9cent et habitable avant la premi\u00e8re mise en location. Le d\u00e9lai entre l\u2019acquisition et la mise en location ne doit pas exc\u00e9der 24 mois.",
  },
  {
    question: 'Peut-on cumuler le d\u00e9ficit foncier classique et l\u2019amortissement Jeanbrun ?',
    answer:
      "Oui, c\u2019est l\u2019un des principaux atouts de l\u2019ancien r\u00e9nov\u00e9 avec le Jeanbrun. Les travaux d\u00e9ductibles g\u00e9n\u00e8rent du d\u00e9ficit foncier classique (imputable sur le revenu global jusqu\u2019\u00e0 10 700 \u20ac/an), et l\u2019amortissement Jeanbrun vient s\u2019y ajouter les ann\u00e9es suivantes.",
  },
  {
    question: 'Quelles zones g\u00e9ographiques sont \u00e9ligibles pour l\u2019ancien r\u00e9nov\u00e9 ?',
    answer:
      "Le dispositif Jeanbrun dans l\u2019ancien r\u00e9nov\u00e9 est \u00e9ligible dans toutes les zones (A bis, A, B1, B2 et C), au m\u00eame titre que le neuf. Les plafonds de loyer et les taux d\u2019amortissement restent identiques quelle que soit la nature du bien.",
  },
];

export default function JeanbrunAncienRenovePage() {
  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: "Jeanbrun dans l\u2019ancien rénové : guide complet 2026",
            description:
              "Investir dans l\u2019ancien avec travaux grâce au dispositif Jeanbrun. Conditions des 30% de travaux, cumul déficit foncier et amortissement, exemples.",
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
            <Link href="/dispositif-jeanbrun" className="hover:text-primary">Dispositif Jeanbrun</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Ancien r&eacute;nov&eacute;</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            Jeanbrun dans l&apos;ancien r&eacute;nov&eacute; : guide complet 2026
          </h1>

          {/* Introduction */}
          <p className="text-lg text-text-light mb-4">
            Le dispositif Jeanbrun ne se limite pas aux logements neufs. Il s&apos;applique
            &eacute;galement &agrave; l&apos;ancien avec travaux, &agrave; condition que ceux-ci
            repr&eacute;sentent au moins 30&nbsp;% du co&ucirc;t total de l&apos;op&eacute;ration.
            Ce volet ouvre des perspectives tr&egrave;s int&eacute;ressantes pour les investisseurs
            qui souhaitent combiner <strong>d&eacute;ficit foncier</strong> et{' '}
            <strong>amortissement fiscal</strong>.
          </p>

          <p className="text-lg text-text-light mb-8">
            Dans ce guide, nous d&eacute;taillons les conditions d&apos;&eacute;ligibilit&eacute;,
            les types de travaux accept&eacute;s, le double avantage fiscal propre &agrave;
            l&apos;ancien r&eacute;nov&eacute; et un exemple chiffr&eacute; complet pour un
            investissement en zone B1.
          </p>

          {/* Sommaire */}
          <div className="bg-background-alt rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-bold text-text mb-3">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#eligibilite" className="text-primary hover:underline">1. Pourquoi l&apos;ancien r&eacute;nov&eacute; est &eacute;ligible au Jeanbrun</a></li>
              <li><a href="#condition-30" className="text-primary hover:underline">2. La condition des 30&nbsp;% de travaux minimum</a></li>
              <li><a href="#travaux-eligibles" className="text-primary hover:underline">3. Types de travaux &eacute;ligibles</a></li>
              <li><a href="#double-avantage" className="text-primary hover:underline">4. Double avantage : d&eacute;ficit foncier + amortissement Jeanbrun</a></li>
              <li><a href="#exemple" className="text-primary hover:underline">5. Exemple chiffr&eacute; : achat 150&nbsp;000&nbsp;&euro; + 60&nbsp;000&nbsp;&euro; de travaux</a></li>
              <li><a href="#ancien-vs-neuf" className="text-primary hover:underline">6. Avantages de l&apos;ancien r&eacute;nov&eacute; vs le neuf</a></li>
              <li><a href="#vigilance" className="text-primary hover:underline">7. Points de vigilance</a></li>
              <li><a href="#faq" className="text-primary hover:underline">8. FAQ</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="eligibilite" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              1. Pourquoi l&apos;ancien r&eacute;nov&eacute; est &eacute;ligible au Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              Le Projet de Loi de Finances 2026 a volontairement &eacute;largi le dispositif
              Jeanbrun &agrave; l&apos;ancien avec travaux. L&apos;objectif est double :
              encourager la <strong>r&eacute;novation du parc immobilier existant</strong> et
              lutter contre les <strong>passoires &eacute;nerg&eacute;tiques</strong> tout en
              offrant aux investisseurs un cadre fiscal attractif.
            </p>
            <p className="text-text-light mb-4">
              Contrairement au Pinel, qui &eacute;tait r&eacute;serv&eacute; au neuf,
              le{' '}
              <Link href="/dispositif-jeanbrun" className="text-primary font-medium hover:underline">
                dispositif Jeanbrun
              </Link>{' '}
              accepte les biens anciens d&egrave;s lors qu&apos;une r&eacute;novation
              significative est r&eacute;alis&eacute;e. Cette ouverture r&eacute;pond &agrave;
              un constat simple : la France compte plus de 5 millions de logements
              &eacute;nergivores class&eacute;s F ou G, et leur r&eacute;habilitation est un
              enjeu national.
            </p>
            <p className="text-text-light">
              L&apos;ancien r&eacute;nov&eacute; permet aussi d&apos;investir dans des
              emplacements d&eacute;j&agrave; &eacute;tablis (centres-villes, quartiers
              recherch&eacute;s) o&ugrave; les opportunit&eacute;s dans le neuf sont rares
              ou tr&egrave;s on&eacute;reuses. C&apos;est un avantage strat&eacute;gique
              pour la valorisation patrimoniale &agrave; long terme.
            </p>
          </section>

          {/* Section 2 */}
          <section id="condition-30" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              2. La condition des 30&nbsp;% de travaux minimum
            </h2>
            <p className="text-text-light mb-4">
              Pour qu&apos;un bien ancien soit &eacute;ligible au dispositif Jeanbrun, les
              travaux doivent repr&eacute;senter <strong>au moins 30&nbsp;% du co&ucirc;t
              total de l&apos;op&eacute;ration</strong>. Le co&ucirc;t total s&apos;entend
              comme la somme du prix d&apos;acquisition (hors frais de notaire) et du montant
              des travaux.
            </p>

            <div className="bg-background-alt rounded-xl p-6 border border-border mb-4">
              <h3 className="font-semibold text-text mb-3">Formule de calcul</h3>
              <p className="text-text-light text-sm mb-2">
                <strong>Ratio travaux</strong> = Montant des travaux / (Prix d&apos;acquisition + Montant des travaux)
              </p>
              <p className="text-text-light text-sm mb-4">
                Ce ratio doit &ecirc;tre <strong>&ge; 30&nbsp;%</strong> pour &ecirc;tre &eacute;ligible.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-light">Exemple : achat 150&nbsp;000&nbsp;&euro; + travaux 60&nbsp;000&nbsp;&euro;</span>
                  <span className="font-medium text-text">60&nbsp;000 / 210&nbsp;000 = <span className="text-primary font-bold">28,6&nbsp;%</span></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Exemple : achat 150&nbsp;000&nbsp;&euro; + travaux 65&nbsp;000&nbsp;&euro;</span>
                  <span className="font-medium text-text">65&nbsp;000 / 215&nbsp;000 = <span className="text-primary font-bold">30,2&nbsp;%</span></span>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-5">
              <p className="text-sm text-text">
                <strong>Attention :</strong> dans notre exemple fil rouge (150&nbsp;000&nbsp;&euro;
                + 60&nbsp;000&nbsp;&euro;), le ratio est de 28,6&nbsp;%, ce qui est
                l&eacute;g&egrave;rement en dessous du seuil. Il faudrait porter les travaux
                &agrave; environ 64&nbsp;300&nbsp;&euro; pour atteindre exactement 30&nbsp;%. Pour
                simplifier l&apos;exemple chiffr&eacute; ci-dessous, nous retiendrons
                65&nbsp;000&nbsp;&euro; de travaux.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="travaux-eligibles" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              3. Types de travaux &eacute;ligibles
            </h2>
            <p className="text-text-light mb-4">
              Tous les travaux ne sont pas pris en compte pour le calcul du seuil de 30&nbsp;%.
              Seuls les travaux de r&eacute;novation, d&apos;am&eacute;lioration et de
              transformation sont retenus. Voici les cat&eacute;gories principales :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: 'R&eacute;novation &eacute;nerg&eacute;tique',
                  items: [
                    'Isolation thermique (murs, toiture, planchers)',
                    'Remplacement des fen&ecirc;tres et menuiseries',
                    'Installation ou remplacement du syst&egrave;me de chauffage',
                    'Ventilation (VMC simple ou double flux)',
                    'Production d&apos;eau chaude sanitaire',
                  ],
                },
                {
                  title: 'Travaux d&apos;am&eacute;lioration',
                  items: [
                    'R&eacute;fection compl&egrave;te de la plomberie',
                    'Mise aux normes de l&apos;&eacute;lectricit&eacute;',
                    'Cr&eacute;ation ou r&eacute;novation de salle de bains',
                    'R&eacute;fection des rev&ecirc;tements (sols, murs)',
                    'Am&eacute;lioration de l&apos;accessibilit&eacute;',
                  ],
                },
                {
                  title: 'Travaux de transformation',
                  items: [
                    'Redistribution des espaces int&eacute;rieurs',
                    'Transformation de combles en pi&egrave;ces habitables',
                    'Am&eacute;nagement d&apos;un local commercial en logement',
                    'Extension du b&acirc;timent existant',
                    'Cr&eacute;ation de pi&egrave;ces suppl&eacute;mentaires',
                  ],
                },
                {
                  title: 'Travaux exclus',
                  items: [
                    'Simple d&eacute;coration (peinture, papier peint seul)',
                    'Entretien courant (remplacement robinetterie)',
                    'Mobilier et &eacute;quipement &eacute;lectrom&eacute;nager',
                    'Am&eacute;nagement ext&eacute;rieur (jardin, terrasse)',
                    'Travaux sur parties non habitables',
                  ],
                },
              ].map((category) => (
                <div key={category.title} className="bg-background-alt rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-text mb-3">{category.title}</h3>
                  <ul className="space-y-1.5">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-light">
                        <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={category.title === 'Travaux exclus' ? 'M6 18L18 6M6 6l12 12' : 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'} />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-text-light">
              Les travaux de r&eacute;novation &eacute;nerg&eacute;tique sont particuli&egrave;rement
              recommand&eacute;s car ils permettent aussi de b&eacute;n&eacute;ficier du plafond
              major&eacute; de d&eacute;ficit foncier (21&nbsp;400&nbsp;&euro;/an au lieu de
              10&nbsp;700&nbsp;&euro;) lorsqu&apos;ils entra&icirc;nent un changement de classe
              &eacute;nerg&eacute;tique du logement.
            </p>
          </section>

          {/* Section 4 */}
          <section id="double-avantage" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              4. Double avantage : d&eacute;ficit foncier + amortissement Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              L&apos;un des atouts majeurs de l&apos;ancien r&eacute;nov&eacute; avec le
              Jeanbrun est la possibilit&eacute; de cumuler <strong>deux m&eacute;canismes
              fiscaux compl&eacute;mentaires</strong> :
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-background-alt rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-text mb-2">Phase 1 : D&eacute;ficit foncier classique (ann&eacute;e des travaux)</h3>
                <p className="text-sm text-text-light mb-2">
                  L&apos;ann&eacute;e de r&eacute;alisation des travaux, les d&eacute;penses de
                  r&eacute;novation sont d&eacute;ductibles des revenus fonciers au titre des
                  charges. Si les charges d&eacute;passent les loyers, le{' '}
                  <Link href="/deficit-foncier-jeanbrun" className="text-primary font-medium hover:underline">
                    d&eacute;ficit foncier
                  </Link>{' '}
                  est imputable sur le revenu global dans la limite de 10&nbsp;700&nbsp;&euro;/an
                  (ou 21&nbsp;400&nbsp;&euro; pour les travaux de r&eacute;novation &eacute;nerg&eacute;tique).
                </p>
                <p className="text-sm text-text-light">
                  Le surplus non imput&eacute; est reportable pendant <strong>10 ans</strong> sur
                  les revenus fonciers futurs.
                </p>
              </div>

              <div className="bg-background-alt rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-text mb-2">Phase 2 : Amortissement Jeanbrun (9 ans suivants)</h3>
                <p className="text-sm text-text-light mb-2">
                  Une fois le bien mis en location, l&apos;amortissement Jeanbrun (3,5&nbsp;%
                  &agrave; 5,5&nbsp;% par an selon le niveau de loyer) s&apos;applique sur
                  la base amortissable (80&nbsp;% du co&ucirc;t total : prix + travaux).
                  Cet amortissement g&eacute;n&egrave;re du d&eacute;ficit foncier
                  suppl&eacute;mentaire chaque ann&eacute;e.
                </p>
                <p className="text-sm text-text-light">
                  Avantage d&eacute;cisif : les amortissements Jeanbrun ne sont <strong>pas
                  r&eacute;int&eacute;gr&eacute;s</strong> dans la plus-value &agrave; la revente.
                </p>
              </div>
            </div>

            <p className="text-text-light">
              Ce cumul est particuli&egrave;rement puissant pour les investisseurs avec une TMI
              &eacute;lev&eacute;e (30&nbsp;%, 41&nbsp;% ou 45&nbsp;%). Il permet de
              maximiser l&apos;avantage fiscal d&egrave;s la premi&egrave;re ann&eacute;e
              (gr&acirc;ce aux travaux) puis de le prolonger pendant 9 ans (gr&acirc;ce
              &agrave; l&apos;amortissement).
            </p>
          </section>

          {/* Section 5 */}
          <section id="exemple" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              5. Exemple chiffr&eacute; : achat 150&nbsp;000&nbsp;&euro; + 65&nbsp;000&nbsp;&euro; de travaux en zone B1
            </h2>
            <p className="text-text-light mb-4">
              Prenons un cas concret d&apos;investissement dans l&apos;ancien r&eacute;nov&eacute;
              en zone B1 (Bordeaux, Toulouse, Nantes, Rennes, etc.) avec un niveau de loyer
              interm&eacute;diaire.
            </p>

            <div className="bg-background-alt rounded-xl p-6 border border-border mb-6">
              <h3 className="font-semibold text-text mb-4">Donn&eacute;es du projet</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-light">Prix d&apos;acquisition</span>
                  <span className="font-medium text-text">150&nbsp;000&nbsp;&euro;</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Montant des travaux</span>
                  <span className="font-medium text-text">65&nbsp;000&nbsp;&euro;</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Co&ucirc;t total de l&apos;op&eacute;ration</span>
                  <span className="font-medium text-text">215&nbsp;000&nbsp;&euro;</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Ratio travaux</span>
                  <span className="font-medium text-primary">30,2&nbsp;% &ge; 30&nbsp;%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Surface</span>
                  <span className="font-medium text-text">55&nbsp;m&sup2;</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Zone</span>
                  <span className="font-medium text-text">B1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Niveau de loyer</span>
                  <span className="font-medium text-text">Interm&eacute;diaire (-15&nbsp;%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Taux d&apos;amortissement</span>
                  <span className="font-medium text-primary">3,5&nbsp;%/an</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Poste</th>
                    <th className="text-right p-3">Montant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium" colSpan={2}>Ann&eacute;e 1 : phase travaux</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-light">Travaux d&eacute;ductibles</td>
                    <td className="p-3 text-right font-medium">65&nbsp;000&nbsp;&euro;</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-light">Int&eacute;r&ecirc;ts d&apos;emprunt (ann&eacute;e 1)</td>
                    <td className="p-3 text-right font-medium">~&nbsp;4&nbsp;500&nbsp;&euro;</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-light">Loyers per&ccedil;us (chantier, 0 mois)</td>
                    <td className="p-3 text-right font-medium">0&nbsp;&euro;</td>
                  </tr>
                  <tr className="border-b border-border bg-background-alt">
                    <td className="p-3 font-semibold">D&eacute;ficit foncier ann&eacute;e 1</td>
                    <td className="p-3 text-right font-bold text-primary">-&nbsp;69&nbsp;500&nbsp;&euro;</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-light">Imputable sur revenu global (plafond)</td>
                    <td className="p-3 text-right font-medium">10&nbsp;700&nbsp;&euro;</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-light">Report sur revenus fonciers futurs</td>
                    <td className="p-3 text-right font-medium">58&nbsp;800&nbsp;&euro;</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium" colSpan={2}>Ann&eacute;es 2 &agrave; 10 : amortissement Jeanbrun</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-light">Base amortissable (80&nbsp;% de 215&nbsp;000&nbsp;&euro;)</td>
                    <td className="p-3 text-right font-medium">172&nbsp;000&nbsp;&euro;</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-light">Amortissement annuel (3,5&nbsp;%)</td>
                    <td className="p-3 text-right font-medium text-primary">6&nbsp;020&nbsp;&euro;/an</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-light">Amortissement cumul&eacute; sur 9 ans</td>
                    <td className="p-3 text-right font-medium">54&nbsp;180&nbsp;&euro;</td>
                  </tr>
                  <tr className="bg-background-alt">
                    <td className="p-3 font-semibold">Avantage fiscal total estim&eacute; (10 ans)</td>
                    <td className="p-3 text-right font-bold text-primary text-lg">~&nbsp;42&nbsp;000 &agrave; 55&nbsp;000&nbsp;&euro;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-text-light mb-4">
              Estimation pour un contribuable avec une TMI &agrave; 30&nbsp;% +
              pr&eacute;l&egrave;vements sociaux (17,2&nbsp;%). L&apos;avantage fiscal
              exact d&eacute;pend de votre situation personnelle.
            </p>

            <p className="text-text-light">
              Pour obtenir une simulation personnalis&eacute;e adapt&eacute;e &agrave; votre
              situation, utilisez notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur Jeanbrun gratuit
              </Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section id="ancien-vs-neuf" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              6. Avantages de l&apos;ancien r&eacute;nov&eacute; vs le neuf
            </h2>
            <p className="text-text-light mb-4">
              L&apos;investissement dans l&apos;ancien r&eacute;nov&eacute; pr&eacute;sente
              plusieurs avantages par rapport au{' '}
              <Link href="/jeanbrun-neuf" className="text-primary font-medium hover:underline">
                neuf
              </Link>{' '}
              dans le cadre du dispositif Jeanbrun :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Crit&egrave;re</th>
                    <th className="text-center p-3">Ancien r&eacute;nov&eacute;</th>
                    <th className="text-center p-3">Neuf / VEFA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Prix au m\u00b2', 'G\u00e9n\u00e9ralement 20 \u00e0 40 % moins cher', 'Prix du march\u00e9 neuf (plus \u00e9lev\u00e9)'],
                    ['Emplacement', 'Centres-villes \u00e9tablis, quartiers recherch\u00e9s', 'Souvent en p\u00e9riph\u00e9rie ou zones en d\u00e9veloppement'],
                    ['D\u00e9ficit foncier suppl\u00e9mentaire', 'Oui (travaux d\u00e9ductibles)', 'Non'],
                    ['Double avantage fiscal', 'D\u00e9ficit foncier + amortissement', 'Amortissement seul'],
                    ['D\u00e9lai de mise en location', '12 \u00e0 24 mois (travaux)', '18 \u00e0 36 mois (VEFA)'],
                    ['Risque de retard', 'Ma\u00eetris\u00e9 (vous choisissez les artisans)', '\u00c9lev\u00e9 (d\u00e9pend du promoteur)'],
                    ['Personnalisation', 'Totale (choix des mat\u00e9riaux, agencement)', 'Limit\u00e9e (TMA du promoteur)'],
                    ['N\u00e9gociation du prix', 'Forte marge de n\u00e9gociation', 'Prix fix\u00e9 par le promoteur'],
                  ].map(([critere, ancien, neuf]) => (
                    <tr key={critere} className="border-b border-border">
                      <td className="p-3 font-medium">{critere}</td>
                      <td className="p-3 text-center">{ancien}</td>
                      <td className="p-3 text-center">{neuf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-text-light">
              L&apos;ancien r&eacute;nov&eacute; est particuli&egrave;rement adapt&eacute; aux
              investisseurs qui recherchent un <strong>rendement locatif &eacute;lev&eacute;</strong>{' '}
              (gr&acirc;ce au prix d&apos;entr&eacute;e inf&eacute;rieur) et une{' '}
              <strong>optimisation fiscale maximale</strong> (cumul d&eacute;ficit foncier +
              amortissement). Le neuf reste pertinent pour ceux qui privil&eacute;gient la
              simplicit&eacute; et les garanties constructeur.
            </p>
          </section>

          {/* Section 7 */}
          <section id="vigilance" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              7. Points de vigilance
            </h2>
            <p className="text-text-light mb-4">
              L&apos;investissement dans l&apos;ancien r&eacute;nov&eacute; avec le dispositif
              Jeanbrun pr&eacute;sente des opportunit&eacute;s fiscales significatives, mais
              il convient de rester vigilant sur plusieurs aspects :
            </p>

            <div className="space-y-3 mb-4">
              {[
                {
                  title: 'V\u00e9rifier le ratio de 30 % avant signature',
                  text: "Faites chiffrer pr\u00e9cis\u00e9ment les travaux par des artisans avant l\u2019achat. Un ratio l\u00e9g\u00e8rement inf\u00e9rieur \u00e0 30 % rend le bien in\u00e9ligible.",
                },
                {
                  title: 'Conserver toutes les factures',
                  text: "Les factures de travaux doivent \u00eatre d\u00e9taill\u00e9es, dat\u00e9es et \u00e9tablies par des professionnels. Elles sont indispensables en cas de contr\u00f4le fiscal.",
                },
                {
                  title: 'Respecter le d\u00e9lai de mise en location',
                  text: "Le bien doit \u00eatre lou\u00e9 dans les 24 mois suivant l\u2019acquisition. Pr\u00e9voyez un calendrier de travaux r\u00e9aliste et des marges de s\u00e9curit\u00e9.",
                },
                {
                  title: 'Ma\u00eetrise d\u2019\u0153uvre et suivi de chantier',
                  text: "Contrairement au neuf cl\u00e9 en main, c\u2019est vous qui pilotez le chantier. Envisagez un architecte ou ma\u00eetre d\u2019\u0153uvre pour s\u00e9curiser le projet.",
                },
                {
                  title: 'Diagnostic \u00e9nerg\u00e9tique avant et apr\u00e8s',
                  text: "Un DPE avant et apr\u00e8s travaux est recommand\u00e9 pour justifier de la r\u00e9novation \u00e9nerg\u00e9tique et b\u00e9n\u00e9ficier du plafond major\u00e9 de d\u00e9ficit foncier.",
                },
                {
                  title: 'Engagement de location de 9 ans',
                  text: "La rupture de l\u2019engagement (vente, arr\u00eat de la location, passage en meubl\u00e9) entra\u00eene la reprise de l\u2019avantage fiscal. Assurez-vous de votre capacit\u00e9 \u00e0 tenir cet engagement.",
                },
                {
                  title: 'Plafonds de loyer \u00e0 respecter',
                  text: "V\u00e9rifiez que le loyer plafonn\u00e9 dans votre zone est coh\u00e9rent avec le march\u00e9 local pour \u00e9viter la vacance locative.",
                },
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <span className="font-medium text-text">{point.title}</span>
                    <p className="text-sm text-text-light mt-0.5">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-text-light">
              Pour s&eacute;curiser votre investissement, nous vous recommandons de vous
              faire accompagner par un conseiller en gestion de patrimoine. Notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur
              </Link>{' '}
              vous donne une premi&egrave;re estimation gratuite en quelques minutes.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-6">
              8. Questions fr&eacute;quentes
            </h2>
            <Accordion items={faqItems} />
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Simulez votre investissement dans l&apos;ancien r&eacute;nov&eacute;
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Calculez votre &eacute;conomie d&apos;imp&ocirc;t, le d&eacute;ficit foncier
              g&eacute;n&eacute;r&eacute; par les travaux et l&apos;amortissement Jeanbrun.
              Simulation gratuite en 2&nbsp;minutes.
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
