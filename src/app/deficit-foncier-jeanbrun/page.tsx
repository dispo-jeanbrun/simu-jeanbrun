import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'D\u00e9ficit foncier et dispositif Jeanbrun 2026 : comment \u00e7a marche ?',
  description:
    "Comprendre le d\u00e9ficit foncier dans le cadre du dispositif Jeanbrun. Plafond de 10 700\u20ac, report sur 10 ans, calcul d\u00e9taill\u00e9 et exemples.",
  alternates: { canonical: 'https://simu-jeanbrun.fr/deficit-foncier-jeanbrun' },
};

const faqItems = [
  {
    question: 'Le d\u00e9ficit foncier Jeanbrun est-il soumis au plafonnement des niches fiscales ?',
    answer:
      "Non, le d\u00e9ficit foncier n'est pas concern\u00e9 par le plafonnement global des niches fiscales de 10 000 \u20ac/an. C'est un m\u00e9canisme de d\u00e9duction des charges r\u00e9elles, distinct des r\u00e9ductions d'imp\u00f4t. Le dispositif Jeanbrun est donc cumulable avec d'autres niches fiscales.",
  },
  {
    question: 'Peut-on reporter le d\u00e9ficit foncier non utilis\u00e9 ?',
    answer:
      "Oui, la fraction du d\u00e9ficit foncier qui d\u00e9passe le plafond de 10 700 \u20ac imputable sur le revenu global est reportable pendant 10 ans sur les revenus fonciers futurs. Ce report permet de lisser l'avantage fiscal dans le temps, m\u00eame les ann\u00e9es o\u00f9 les charges diminuent.",
  },
  {
    question: 'Quelle est la diff\u00e9rence entre d\u00e9ficit foncier et r\u00e9duction d\u2019imp\u00f4t ?',
    answer:
      "Le d\u00e9ficit foncier r\u00e9duit le revenu imposable (base de calcul de l'imp\u00f4t), tandis qu'une r\u00e9duction d'imp\u00f4t diminue directement le montant de l'imp\u00f4t d\u00fb. L'\u00e9conomie r\u00e9elle du d\u00e9ficit foncier d\u00e9pend donc de votre TMI : plus elle est \u00e9lev\u00e9e, plus l'\u00e9conomie est importante.",
  },
  {
    question: 'Le plafond de 21 400 \u20ac pour r\u00e9novation \u00e9nerg\u00e9tique s\u2019applique-t-il au Jeanbrun ?',
    answer:
      "Oui, si les travaux r\u00e9alis\u00e9s dans le cadre du dispositif Jeanbrun (dans l'ancien) incluent des travaux de r\u00e9novation \u00e9nerg\u00e9tique permettant de passer d'une classe E, F ou G \u00e0 une classe A, B, C ou D au DPE, le plafond du d\u00e9ficit foncier imputable sur le revenu global est doubl\u00e9 \u00e0 21 400 \u20ac/an.",
  },
];

export default function DeficitFoncierJeanbrunPage() {
  return (
    <>
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
            <span className="text-text">D&eacute;ficit foncier</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            D&eacute;ficit foncier et dispositif Jeanbrun 2026 : comment &ccedil;a marche ?
          </h1>

          <p className="text-lg text-text-light mb-4">
            Le d&eacute;ficit foncier est au c&oelig;ur du m&eacute;canisme fiscal du dispositif
            Jeanbrun. Gr&acirc;ce &agrave; l&apos;amortissement du bien immobilier combin&eacute;
            aux charges d&eacute;ductibles classiques, le Jeanbrun g&eacute;n&egrave;re un
            d&eacute;ficit foncier qui r&eacute;duit directement votre imp&ocirc;t sur le revenu.
          </p>

          <p className="text-lg text-text-light mb-8">
            Ce guide vous explique en d&eacute;tail ce qu&apos;est le d&eacute;ficit foncier,
            comment le Jeanbrun le cr&eacute;e, les plafonds applicables, le m&eacute;canisme
            de report sur 10 ans et l&apos;interaction avec votre tranche marginale d&apos;imposition.
          </p>

          {/* Sommaire */}
          <div className="bg-background-alt rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-bold text-text mb-3">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#definition" className="text-primary hover:underline">1. Qu&apos;est-ce que le d&eacute;ficit foncier ?</a></li>
              <li><a href="#mecanisme" className="text-primary hover:underline">2. Comment le Jeanbrun cr&eacute;e du d&eacute;ficit foncier</a></li>
              <li><a href="#plafond" className="text-primary hover:underline">3. Le plafond de 10 700 &euro; (et 21 400 &euro;)</a></li>
              <li><a href="#report" className="text-primary hover:underline">4. Le report sur 10 ans</a></li>
              <li><a href="#tmi" className="text-primary hover:underline">5. Interaction avec la TMI</a></li>
              <li><a href="#exemple" className="text-primary hover:underline">6. Exemple de calcul d&eacute;taill&eacute;</a></li>
              <li><a href="#optimisation" className="text-primary hover:underline">7. Strat&eacute;gies d&apos;optimisation</a></li>
              <li><a href="#faq" className="text-primary hover:underline">8. FAQ</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="definition" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              1. Qu&apos;est-ce que le d&eacute;ficit foncier ?
            </h2>
            <p className="text-text-light mb-4">
              Le d&eacute;ficit foncier est un m&eacute;canisme fiscal qui se produit lorsque les
              charges d&eacute;ductibles li&eacute;es &agrave; un bien immobilier locatif d&eacute;passent
              les revenus fonciers (loyers) per&ccedil;us. Ce d&eacute;ficit est imputable sur le
              revenu global du contribuable, r&eacute;duisant ainsi la base imposable et donc
              l&apos;imp&ocirc;t sur le revenu.
            </p>
            <p className="text-text-light mb-4">
              En r&egrave;gle g&eacute;n&eacute;rale, sans le dispositif Jeanbrun, le d&eacute;ficit
              foncier est g&eacute;n&eacute;r&eacute; par des travaux importants ou des int&eacute;r&ecirc;ts
              d&apos;emprunt &eacute;lev&eacute;s dans les premi&egrave;res ann&eacute;es d&apos;un
              cr&eacute;dit. Mais avec le Jeanbrun, l&apos;amortissement annuel du bien vient
              s&apos;ajouter aux charges classiques, rendant le d&eacute;ficit foncier beaucoup
              plus important et surtout <strong>r&eacute;current sur toute la dur&eacute;e du dispositif</strong>.
            </p>
            <p className="text-text-light">
              C&apos;est ce qui rend le Jeanbrun si puissant fiscalement : il ne s&apos;agit pas
              d&apos;un avantage ponctuel (comme des travaux), mais d&apos;un amortissement annuel
              r&eacute;gulier pendant 9 ans, g&eacute;n&eacute;rant un d&eacute;ficit foncier
              ann&eacute;e apr&egrave;s ann&eacute;e.
            </p>
          </section>

          {/* Section 2 */}
          <section id="mecanisme" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              2. Comment le Jeanbrun cr&eacute;e du d&eacute;ficit foncier
            </h2>
            <p className="text-text-light mb-4">
              Le dispositif Jeanbrun cr&eacute;e du d&eacute;ficit foncier en permettant de d&eacute;duire
              un amortissement annuel des revenus fonciers, en plus des charges habituelles. Voici
              la formule de calcul du r&eacute;sultat foncier :
            </p>
            <div className="bg-background-alt rounded-xl p-5 border border-border mb-4">
              <p className="text-sm font-mono text-text text-center">
                R&eacute;sultat foncier = Loyers per&ccedil;us &minus; Charges d&eacute;ductibles &minus; Amortissement Jeanbrun
              </p>
            </div>
            <p className="text-text-light mb-4">
              Les <strong>charges d&eacute;ductibles classiques</strong> comprennent :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li>Les int&eacute;r&ecirc;ts d&apos;emprunt et l&apos;assurance emprunteur</li>
              <li>La taxe fonci&egrave;re (hors TEOM)</li>
              <li>Les charges de copropri&eacute;t&eacute;</li>
              <li>Les frais de gestion (agence, comptabilit&eacute;)</li>
              <li>Les primes d&apos;assurance (PNO, loyers impa&eacute;s)</li>
              <li>Les travaux d&apos;entretien et de r&eacute;paration</li>
            </ul>
            <p className="text-text-light mb-4">
              L&apos;<strong>amortissement Jeanbrun</strong> vient s&apos;ajouter &agrave; ces charges.
              Avec un taux de 3,5% &agrave; 5,5% de la base amortissable (80% du prix du bien),
              il repr&eacute;sente g&eacute;n&eacute;ralement plusieurs milliers d&apos;euros par an.
            </p>
            <p className="text-text-light">
              Le r&eacute;sultat de cette &eacute;quation est presque toujours n&eacute;gatif,
              surtout dans les premi&egrave;res ann&eacute;es o&ugrave; les int&eacute;r&ecirc;ts
              d&apos;emprunt sont les plus &eacute;lev&eacute;s. Ce r&eacute;sultat n&eacute;gatif
              constitue le d&eacute;ficit foncier. Pour approfondir le calcul de l&apos;amortissement,
              consultez notre page :{' '}
              <Link href="/amortissement-jeanbrun" className="text-primary font-medium hover:underline">
                Amortissement Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 3 */}
          <section id="plafond" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              3. Le plafond de 10 700 &euro; (et 21 400 &euro;)
            </h2>
            <p className="text-text-light mb-4">
              Le d&eacute;ficit foncier imputable sur le revenu global est plafonn&eacute; &agrave;
              <strong> 10 700 &euro; par an</strong>. Ce plafond est un plafond g&eacute;n&eacute;ral
              applicable &agrave; l&apos;ensemble des revenus fonciers du contribuable, et non par
              bien immobilier.
            </p>
            <p className="text-text-light mb-4">
              Ce plafond est doubl&eacute; &agrave; <strong>21 400 &euro; par an</strong> lorsque
              le d&eacute;ficit est g&eacute;n&eacute;r&eacute; par des travaux de r&eacute;novation
              &eacute;nerg&eacute;tique qui permettent de passer d&apos;une classe &eacute;nerg&eacute;tique
              E, F ou G &agrave; une classe A, B, C ou D au DPE (Diagnostic de Performance
              &Eacute;nerg&eacute;tique). Ce bonus est particuli&egrave;rement pertinent pour
              les investissements dans l&apos;ancien avec travaux lourds.
            </p>
            <div className="bg-background-alt rounded-xl p-5 border border-border mb-4">
              <h3 className="font-semibold text-text mb-3">Fonctionnement du plafond</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-text-light">
                <li>Le d&eacute;ficit foncier jusqu&apos;&agrave; 10 700 &euro; est imput&eacute; sur le <strong>revenu global</strong> (salaires, pensions, etc.)</li>
                <li>L&apos;exc&eacute;dent au-del&agrave; de 10 700 &euro; est <strong>report&eacute; sur les revenus fonciers</strong> des 10 ann&eacute;es suivantes</li>
                <li>Les int&eacute;r&ecirc;ts d&apos;emprunt ne sont imputables que sur les revenus fonciers (pas sur le revenu global)</li>
              </ul>
            </div>
            <p className="text-text-light">
              Point important : les int&eacute;r&ecirc;ts d&apos;emprunt ne peuvent g&eacute;n&eacute;rer
              du d&eacute;ficit que sur les revenus fonciers, pas sur le revenu global. Seules
              les charges hors int&eacute;r&ecirc;ts (dont l&apos;amortissement Jeanbrun) contribuent
              au d&eacute;ficit imputable sur le revenu global. C&apos;est une distinction cruciale
              dans le calcul.
            </p>
          </section>

          {/* Section 4 */}
          <section id="report" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              4. Le report sur 10 ans
            </h2>
            <p className="text-text-light mb-4">
              Lorsque le d&eacute;ficit foncier d&eacute;passe le plafond de 10 700 &euro;
              imputable sur le revenu global, le surplus n&apos;est pas perdu. Il est
              <strong> reportable pendant 10 ans</strong> sur les revenus fonciers futurs.
            </p>
            <p className="text-text-light mb-4">
              Ce m&eacute;canisme de report est particuli&egrave;rement avantageux avec le
              Jeanbrun. En effet, apr&egrave;s la p&eacute;riode de 9 ans du dispositif,
              l&apos;amortissement cesse et les revenus fonciers deviennent positifs. Le
              d&eacute;ficit report&eacute; vient alors absorber ces revenus positifs, prolongeant
              l&apos;avantage fiscal au-del&agrave; de la dur&eacute;e du dispositif.
            </p>
            <p className="text-text-light mb-4">
              Concr&egrave;tement, voici comment cela fonctionne sur la timeline :
            </p>
            <ol className="list-decimal list-inside space-y-2 text-text-light mb-4 ml-4">
              <li><strong>Ann&eacute;es 1 &agrave; 9</strong> : L&apos;amortissement cr&eacute;e du d&eacute;ficit. Jusqu&apos;&agrave; 10 700 &euro; sont imput&eacute;s sur le revenu global. L&apos;exc&eacute;dent est report&eacute;.</li>
              <li><strong>Ann&eacute;es 10 et suivantes</strong> : L&apos;amortissement cesse, les revenus fonciers deviennent positifs. Le d&eacute;ficit report&eacute; vient les absorber.</li>
              <li><strong>Jusqu&apos;&agrave; 19 ans</strong> : Le d&eacute;ficit report&eacute; depuis l&apos;ann&eacute;e 1 peut &ecirc;tre utilis&eacute; pendant 10 ans apr&egrave;s sa cr&eacute;ation.</li>
            </ol>
            <p className="text-text-light">
              L&apos;avantage fiscal total du Jeanbrun s&apos;&eacute;tend donc bien au-del&agrave;
              des 9 ans d&apos;engagement de location, gr&acirc;ce &agrave; ce m&eacute;canisme
              de report.
            </p>
          </section>

          {/* Section 5 */}
          <section id="tmi" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              5. Interaction avec la tranche marginale d&apos;imposition (TMI)
            </h2>
            <p className="text-text-light mb-4">
              L&apos;efficacit&eacute; du d&eacute;ficit foncier d&eacute;pend directement de
              votre TMI. Le d&eacute;ficit r&eacute;duit votre revenu imposable, et l&apos;&eacute;conomie
              d&apos;imp&ocirc;t est proportionnelle &agrave; votre taux marginal d&apos;imposition
              <strong> augment&eacute; des pr&eacute;l&egrave;vements sociaux de 17,2%</strong>.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">TMI</th>
                    <th className="text-center p-3">Taux global (TMI + PS)</th>
                    <th className="text-center p-3">&Eacute;conomie pour 10 000 &euro; de d&eacute;ficit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['11%', '28,2%', '2 820 \u20ac'],
                    ['30%', '47,2%', '4 720 \u20ac'],
                    ['41%', '58,2%', '5 820 \u20ac'],
                    ['45%', '62,2%', '6 220 \u20ac'],
                  ].map(([tmi, global, eco]) => (
                    <tr key={tmi} className="border-b border-border">
                      <td className="p-3 font-medium">{tmi}</td>
                      <td className="p-3 text-center">{global}</td>
                      <td className="p-3 text-center font-semibold text-primary">{eco}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-text-light">
              Un contribuable &agrave; la TMI de 30% &eacute;conomise 4 720 &euro; d&apos;imp&ocirc;t
              pour 10 000 &euro; de d&eacute;ficit foncier. &Agrave; la TMI de 41%, l&apos;&eacute;conomie
              atteint 5 820 &euro;. Le Jeanbrun est donc particuli&egrave;rement int&eacute;ressant
              pour les contribuables fortement impos&eacute;s. Pour aller plus loin, consultez notre page :{' '}
              <Link href="/fiscalite-jeanbrun" className="text-primary font-medium hover:underline">
                Fiscalit&eacute; du dispositif Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section id="exemple" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              6. Exemple de calcul d&eacute;taill&eacute;
            </h2>
            <div className="bg-background-alt rounded-xl p-6 border border-border mb-4">
              <h3 className="font-semibold text-text mb-4">Situation</h3>
              <div className="space-y-2 mb-6">
                {[
                  ['Bien', 'Appartement 200 000 \u20ac, zone B1'],
                  ['Niveau de loyer', 'Social (Loc2)'],
                  ['Surface', '50 m\u00b2'],
                  ['Financement', 'Cr\u00e9dit 200 000 \u20ac sur 20 ans \u00e0 3,5%'],
                  ['TMI', '30%'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-text mb-4">Calcul ann&eacute;e 1</h3>
              <div className="space-y-2 mb-4">
                {[
                  ['Loyer annuel (9,83 \u20ac \u00d7 50 m\u00b2 \u00d7 12)', '5 898 \u20ac'],
                  ['Int\u00e9r\u00eats d\u2019emprunt', '\u2013 6 800 \u20ac'],
                  ['Charges d\u00e9ductibles (taxe fonci\u00e8re, gestion, assurance)', '\u2013 1 800 \u20ac'],
                  ['Amortissement Jeanbrun (4,5% \u00d7 160 000 \u20ac)', '\u2013 7 200 \u20ac'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
                  <span>D&eacute;ficit foncier total</span>
                  <span className="text-primary text-lg">&minus;9 902 &euro;</span>
                </div>
              </div>

              <h3 className="font-semibold text-text mb-4">Imputation</h3>
              <div className="space-y-2">
                {[
                  ['D\u00e9ficit imputable sur le revenu global', '9 902 \u20ac (< 10 700 \u20ac)'],
                  ['\u00c9conomie d\u2019IR (30%)', '2 971 \u20ac'],
                  ['\u00c9conomie de PS (17,2%)', '1 703 \u20ac'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
                  <span>&Eacute;conomie fiscale totale ann&eacute;e 1</span>
                  <span className="text-accent text-lg">4 674 &euro;</span>
                </div>
              </div>
            </div>
            <p className="text-text-light">
              Sur 9 ans, le d&eacute;ficit foncier cumul&eacute; peut repr&eacute;senter plus de
              70 000 &euro; dans cet exemple, g&eacute;n&eacute;rant une &eacute;conomie fiscale
              totale de l&apos;ordre de 33 000 &euro;. Pour calculer votre propre situation,
              utilisez notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur Jeanbrun gratuit
              </Link>.
            </p>
          </section>

          {/* Section 7 */}
          <section id="optimisation" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              7. Strat&eacute;gies d&apos;optimisation du d&eacute;ficit foncier
            </h2>
            <p className="text-text-light mb-4">
              Pour maximiser votre d&eacute;ficit foncier avec le Jeanbrun, plusieurs leviers
              sont &agrave; votre disposition :
            </p>
            <div className="space-y-3 mb-4">
              {[
                'Choisir un niveau de loyer plus bas (Loc2 ou Loc3) pour augmenter le taux d\u2019amortissement',
                'Financer le bien \u00e0 cr\u00e9dit pour maximiser les int\u00e9r\u00eats d\u00e9ductibles',
                'D\u00e9duire l\u2019ensemble des charges (taxe fonci\u00e8re, gestion, assurance PNO, etc.)',
                'Dans l\u2019ancien : r\u00e9aliser des travaux de r\u00e9novation \u00e9nerg\u00e9tique pour doubler le plafond \u00e0 21 400 \u20ac',
                'Investir dans une zone o\u00f9 les plafonds de loyer sont proches du march\u00e9 pour limiter la perte de loyer',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-light">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-text-light">
              Le choix du niveau de loyer est un arbitrage entre rendement locatif et avantage
              fiscal. Un loyer plus bas r&eacute;duit vos revenus mais augmente votre amortissement,
              ce qui peut &ecirc;tre plus avantageux si votre TMI est &eacute;lev&eacute;e. Pour
              approfondir, consultez notre{' '}
              <Link href="/dispositif-jeanbrun" className="text-primary font-medium hover:underline">
                guide complet du dispositif Jeanbrun
              </Link>.
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
              Calculez votre d&eacute;ficit foncier Jeanbrun
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Notre simulateur calcule automatiquement votre d&eacute;ficit foncier, votre
              &eacute;conomie d&apos;imp&ocirc;t et le report sur 10 ans selon votre situation.
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
