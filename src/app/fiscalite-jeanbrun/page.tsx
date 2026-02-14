import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';
import { TMI_OPTIONS } from '@/config/plafonds';

export const metadata: Metadata = {
  title: 'Fiscalit\u00e9 du dispositif Jeanbrun 2026 : TMI, pr\u00e9l\u00e8vements sociaux, plus-value',
  description:
    "Guide fiscal complet du dispositif Jeanbrun. Impact sur l'IR selon votre TMI, pr\u00e9l\u00e8vements sociaux \u00e0 17,2%, traitement de la plus-value \u00e0 la revente.",
  alternates: { canonical: 'https://simu-jeanbrun.fr/fiscalite-jeanbrun' },
};

const tmiData = TMI_OPTIONS.filter((t) => t > 0).map((tmi) => ({
  tmi,
  global: tmi + 17.2,
  eco5000: Math.round(5000 * (tmi + 17.2) / 100),
  eco10000: Math.round(10000 * (tmi + 17.2) / 100),
}));

const faqItems = [
  {
    question: 'Le d\u00e9ficit foncier Jeanbrun est-il soumis au plafonnement des niches fiscales ?',
    answer:
      "Non, le d\u00e9ficit foncier n'entre pas dans le plafonnement global des niches fiscales de 10 000 \u20ac/an. C'est un m\u00e9canisme de d\u00e9duction des charges r\u00e9elles, pas une r\u00e9duction ou un cr\u00e9dit d'imp\u00f4t. Vous pouvez donc cumuler le Jeanbrun avec d'autres avantages fiscaux.",
  },
  {
    question: 'Comment sont impos\u00e9s les loyers per\u00e7us ?',
    answer:
      "Les loyers sont d\u00e9clar\u00e9s en revenus fonciers. Apr\u00e8s d\u00e9duction des charges et de l'amortissement Jeanbrun, le r\u00e9sultat foncier est g\u00e9n\u00e9ralement n\u00e9gatif (d\u00e9ficit foncier). Ce d\u00e9ficit r\u00e9duit votre revenu imposable. Si le r\u00e9sultat \u00e9tait positif, il serait soumis \u00e0 l'IR au taux de votre TMI plus 17,2% de pr\u00e9l\u00e8vements sociaux.",
  },
  {
    question: 'Les amortissements Jeanbrun sont-ils r\u00e9int\u00e9gr\u00e9s dans la plus-value ?',
    answer:
      "Non, c'est l'un des avantages majeurs du dispositif. Contrairement au LMNP (depuis 2025), les amortissements d\u00e9duits dans le cadre du Jeanbrun ne sont pas r\u00e9int\u00e9gr\u00e9s dans le calcul de la plus-value \u00e0 la revente. La plus-value est calcul\u00e9e sur la diff\u00e9rence entre le prix de vente et le prix d'acquisition initial.",
  },
  {
    question: 'Quel est l\u2019impact du Jeanbrun sur ma tranche d\u2019imposition ?',
    answer:
      "Le d\u00e9ficit foncier g\u00e9n\u00e9r\u00e9 par le Jeanbrun r\u00e9duit votre revenu imposable. Si le d\u00e9ficit est suffisamment important, il peut vous faire passer dans une tranche d'imposition inf\u00e9rieure, amplifiant encore l'\u00e9conomie d'imp\u00f4t. Cet effet est particuli\u00e8rement notable pour les revenus proches d'un changement de tranche.",
  },
];

export default function FiscaliteJeanbrunPage() {
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
            <span className="text-text">Fiscalit&eacute;</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            Fiscalit&eacute; du dispositif Jeanbrun 2026 : TMI, pr&eacute;l&egrave;vements sociaux et plus-value
          </h1>

          <p className="text-lg text-text-light mb-4">
            Comprendre la fiscalit&eacute; du dispositif Jeanbrun est essentiel pour mesurer
            l&apos;avantage r&eacute;el de cet investissement. Le Jeanbrun impacte votre imp&ocirc;t
            sur le revenu via le m&eacute;canisme du d&eacute;ficit foncier, et l&apos;ampleur
            de l&apos;&eacute;conomie d&eacute;pend directement de votre tranche marginale
            d&apos;imposition (TMI).
          </p>

          <p className="text-lg text-text-light mb-8">
            Ce guide fiscal complet vous d&eacute;taille l&apos;impact sur l&apos;IR selon votre
            TMI, le traitement des pr&eacute;l&egrave;vements sociaux, la fiscalit&eacute; de la
            plus-value &agrave; la revente et les strat&eacute;gies d&apos;optimisation.
          </p>

          {/* Sommaire */}
          <div className="bg-background-alt rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-bold text-text mb-3">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#mecanisme" className="text-primary hover:underline">1. Le m&eacute;canisme fiscal du Jeanbrun</a></li>
              <li><a href="#tmi" className="text-primary hover:underline">2. Impact selon votre TMI</a></li>
              <li><a href="#prelevements" className="text-primary hover:underline">3. Pr&eacute;l&egrave;vements sociaux &agrave; 17,2%</a></li>
              <li><a href="#plus-value" className="text-primary hover:underline">4. Plus-value &agrave; la revente</a></li>
              <li><a href="#comparaison-lmnp" className="text-primary hover:underline">5. Comparaison avec la fiscalit&eacute; LMNP</a></li>
              <li><a href="#optimisation" className="text-primary hover:underline">6. Strat&eacute;gies d&apos;optimisation fiscale</a></li>
              <li><a href="#exemple" className="text-primary hover:underline">7. Exemple fiscal complet</a></li>
              <li><a href="#faq" className="text-primary hover:underline">8. FAQ</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="mecanisme" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              1. Le m&eacute;canisme fiscal du Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              Le dispositif Jeanbrun n&apos;est pas une r&eacute;duction d&apos;imp&ocirc;t directe
              (contrairement &agrave; l&apos;ancien Pinel). Il fonctionne par un m&eacute;canisme
              indirect : la cr&eacute;ation de <strong>d&eacute;ficit foncier</strong> qui r&eacute;duit
              le revenu imposable.
            </p>
            <p className="text-text-light mb-4">
              Voici le cha&icirc;nage fiscal :
            </p>
            <ol className="list-decimal list-inside space-y-2 text-text-light mb-4 ml-4">
              <li>L&apos;amortissement Jeanbrun est d&eacute;duit des revenus fonciers</li>
              <li>Combin&eacute; aux autres charges, il cr&eacute;e un d&eacute;ficit foncier</li>
              <li>Le d&eacute;ficit foncier (jusqu&apos;&agrave; 10 700 &euro;/an) est imput&eacute; sur le revenu global</li>
              <li>Le revenu global diminue, r&eacute;duisant l&apos;imp&ocirc;t sur le revenu et les pr&eacute;l&egrave;vements sociaux</li>
            </ol>
            <p className="text-text-light mb-4">
              L&apos;&eacute;conomie d&apos;imp&ocirc;t est donc <strong>proportionnelle &agrave;
              votre taux marginal d&apos;imposition</strong>. Plus votre TMI est &eacute;lev&eacute;e,
              plus le Jeanbrun est int&eacute;ressant. C&apos;est une diff&eacute;rence majeure
              avec le Pinel qui offrait une r&eacute;duction d&apos;imp&ocirc;t fixe.
            </p>
            <p className="text-text-light">
              Un autre avantage cl&eacute; : le d&eacute;ficit foncier n&apos;entre pas dans le
              plafonnement global des niches fiscales de 10 000 &euro;/an. Vous pouvez donc cumuler
              le Jeanbrun avec d&apos;autres avantages fiscaux (emploi &agrave; domicile, dons,
              PER, etc.). Pour plus de d&eacute;tails sur le d&eacute;ficit foncier, consultez :{' '}
              <Link href="/deficit-foncier-jeanbrun" className="text-primary font-medium hover:underline">
                D&eacute;ficit foncier et Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 2 */}
          <section id="tmi" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              2. Impact selon votre tranche marginale d&apos;imposition (TMI)
            </h2>
            <p className="text-text-light mb-4">
              L&apos;&eacute;conomie d&apos;imp&ocirc;t g&eacute;n&eacute;r&eacute;e par le
              d&eacute;ficit foncier Jeanbrun d&eacute;pend de votre TMI. Le taux d&apos;&eacute;conomie
              effectif est la somme de votre TMI et des pr&eacute;l&egrave;vements sociaux (17,2%).
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">TMI</th>
                    <th className="text-center p-3">Taux global (TMI + PS 17,2%)</th>
                    <th className="text-center p-3">&Eacute;conomie pour 5 000 &euro; de d&eacute;ficit</th>
                    <th className="text-center p-3">&Eacute;conomie pour 10 000 &euro; de d&eacute;ficit</th>
                  </tr>
                </thead>
                <tbody>
                  {tmiData.map(({ tmi, global, eco5000, eco10000 }) => (
                    <tr key={tmi} className="border-b border-border">
                      <td className="p-3 font-medium">{tmi}%</td>
                      <td className="p-3 text-center">{global.toFixed(1)}%</td>
                      <td className="p-3 text-center font-semibold text-primary">
                        {eco5000.toLocaleString('fr-FR')} &euro;
                      </td>
                      <td className="p-3 text-center font-semibold text-primary">
                        {eco10000.toLocaleString('fr-FR')} &euro;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-text-light mb-4">
              Les tranches marginales d&apos;imposition pour 2026 sont les suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li><strong>0%</strong> : jusqu&apos;&agrave; 11 497 &euro; de revenu imposable par part</li>
              <li><strong>11%</strong> : de 11 498 &agrave; 29 315 &euro;</li>
              <li><strong>30%</strong> : de 29 316 &agrave; 83 823 &euro;</li>
              <li><strong>41%</strong> : de 83 824 &agrave; 180 294 &euro;</li>
              <li><strong>45%</strong> : au-del&agrave; de 180 294 &euro;</li>
            </ul>
            <p className="text-text-light">
              Un contribuable c&eacute;libataire avec un revenu imposable de 50 000 &euro; est
              &agrave; la TMI de 30%. Chaque euro de d&eacute;ficit foncier lui &eacute;conomise
              0,472 &euro; d&apos;imp&ocirc;t (30% d&apos;IR + 17,2% de PS). Pour 10 000 &euro;
              de d&eacute;ficit, l&apos;&eacute;conomie atteint 4 720 &euro;.
            </p>
          </section>

          {/* Section 3 */}
          <section id="prelevements" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              3. Pr&eacute;l&egrave;vements sociaux &agrave; 17,2%
            </h2>
            <p className="text-text-light mb-4">
              Les revenus fonciers sont soumis aux pr&eacute;l&egrave;vements sociaux au taux
              global de <strong>17,2%</strong>, qui se d&eacute;composent comme suit :
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Pr&eacute;l&egrave;vement</th>
                    <th className="text-center p-3">Taux</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['CSG (Contribution Sociale G\u00e9n\u00e9ralis\u00e9e)', '9,2%'],
                    ['CRDS (Contribution au Remboursement de la Dette Sociale)', '0,5%'],
                    ['Pr\u00e9l\u00e8vement de solidarit\u00e9', '7,5%'],
                  ].map(([label, taux]) => (
                    <tr key={label} className="border-b border-border">
                      <td className="p-3">{label}</td>
                      <td className="p-3 text-center font-medium">{taux}</td>
                    </tr>
                  ))}
                  <tr className="bg-background-alt font-bold">
                    <td className="p-3">Total</td>
                    <td className="p-3 text-center">17,2%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-light mb-4">
              Lorsque le dispositif Jeanbrun cr&eacute;e un d&eacute;ficit foncier, celui-ci
              r&eacute;duit non seulement l&apos;imp&ocirc;t sur le revenu mais aussi les
              pr&eacute;l&egrave;vements sociaux. C&apos;est pourquoi le taux d&apos;&eacute;conomie
              effectif est de TMI + 17,2% et non pas simplement la TMI seule.
            </p>
            <p className="text-text-light">
              &Agrave; noter : une partie de la CSG (6,8%) est d&eacute;ductible du revenu imposable
              de l&apos;ann&eacute;e suivante, ce qui cr&eacute;e un petit avantage fiscal
              suppl&eacute;mentaire.
            </p>
          </section>

          {/* Section 4 */}
          <section id="plus-value" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              4. Plus-value &agrave; la revente : un traitement tr&egrave;s favorable
            </h2>
            <p className="text-text-light mb-4">
              Le traitement de la plus-value est l&apos;un des <strong>atouts majeurs</strong> du
              dispositif Jeanbrun. Contrairement au LMNP, les amortissements d&eacute;duits
              pendant la dur&eacute;e du dispositif ne sont <strong>pas r&eacute;int&eacute;gr&eacute;s</strong>
              dans le calcul de la plus-value &agrave; la revente.
            </p>
            <p className="text-text-light mb-4">
              La plus-value immobili&egrave;re est calcul&eacute;e selon les r&egrave;gles classiques
              des particuliers :
            </p>
            <div className="bg-background-alt rounded-xl p-5 border border-border mb-4">
              <p className="text-sm font-mono text-text text-center mb-3">
                Plus-value = Prix de vente &minus; Prix d&apos;acquisition (non minor&eacute; des amortissements)
              </p>
              <p className="text-sm text-text-light text-center">
                Puis application des abattements pour dur&eacute;e de d&eacute;tention
              </p>
            </div>
            <p className="text-text-light mb-4">
              Les abattements pour dur&eacute;e de d&eacute;tention s&apos;appliquent normalement :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li><strong>Imp&ocirc;t sur le revenu (19%)</strong> : exon&eacute;ration compl&egrave;te apr&egrave;s 22 ans de d&eacute;tention</li>
              <li><strong>Pr&eacute;l&egrave;vements sociaux (17,2%)</strong> : exon&eacute;ration compl&egrave;te apr&egrave;s 30 ans de d&eacute;tention</li>
            </ul>
            <p className="text-text-light">
              Concr&egrave;tement, si vous avez d&eacute;duit 63 000 &euro; d&apos;amortissements
              sur 9 ans et revendez le bien, ces 63 000 &euro; ne seront pas ajout&eacute;s au
              prix de vente pour le calcul de la plus-value. En LMNP, depuis 2025, ces m&ecirc;mes
              amortissements seraient r&eacute;int&eacute;gr&eacute;s et impos&eacute;s &agrave;
              36,2% (19% IR + 17,2% PS), soit un surco&ucirc;t de pr&egrave;s de 22 800 &euro;.
            </p>
          </section>

          {/* Section 5 */}
          <section id="comparaison-lmnp" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              5. Comparaison avec la fiscalit&eacute; LMNP
            </h2>
            <p className="text-text-light mb-4">
              La comparaison entre la fiscalit&eacute; du Jeanbrun et celle du LMNP est instructive.
              Les deux dispositifs permettent d&apos;amortir le bien, mais avec des cons&eacute;quences
              fiscales tr&egrave;s diff&eacute;rentes :
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Crit&egrave;re fiscal</th>
                    <th className="text-center p-3">Jeanbrun</th>
                    <th className="text-center p-3">LMNP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cat\u00e9gorie de revenus', 'Revenus fonciers', 'BIC'],
                    ['D\u00e9ficit imputable sur revenu global', 'Oui (10 700 \u20ac/an)', 'Non (BIC uniquement)'],
                    ['Taux d\u2019amortissement', '3,5% \u00e0 5,5%', '~2,5% \u00e0 3%'],
                    ['R\u00e9int\u00e9gration plus-value', 'Non', 'Oui (depuis 2025)'],
                    ['Pr\u00e9l\u00e8vements sociaux', '17,2% (r\u00e9duits via d\u00e9ficit)', '17,2% sur BIC positif'],
                    ['Plafonnement niches fiscales', 'Non concern\u00e9', 'Non concern\u00e9'],
                    ['Comptabilit\u00e9', 'D\u00e9claration 2044', 'Liasse BIC (2031/2033)'],
                    ['TVA r\u00e9cup\u00e9rable', 'Non', 'Possible (r\u00e9sidences services)'],
                  ].map(([critere, jb, lmnp]) => (
                    <tr key={critere} className="border-b border-border">
                      <td className="p-3 font-medium">{critere}</td>
                      <td className="p-3 text-center">{jb}</td>
                      <td className="p-3 text-center">{lmnp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-text-light">
              Le Jeanbrun est fiscalement plus avantageux pour les contribuables &agrave; TMI
              &eacute;lev&eacute;e (30%, 41%, 45%) gr&acirc;ce au d&eacute;ficit foncier imputable
              sur le revenu global et &agrave; la non-r&eacute;int&eacute;gration des amortissements.
              Le LMNP reste pertinent pour les revenus modestes ou en cas de recherche de
              flexibilit&eacute; sur les loyers. Pour un comparatif complet :{' '}
              <Link href="/jeanbrun-vs-lmnp" className="text-primary font-medium hover:underline">
                Jeanbrun vs LMNP
              </Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section id="optimisation" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              6. Strat&eacute;gies d&apos;optimisation fiscale
            </h2>
            <p className="text-text-light mb-4">
              Voici les principales strat&eacute;gies pour maximiser l&apos;avantage fiscal du
              Jeanbrun :
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-background-alt rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-text mb-2">Adapter le niveau de loyer &agrave; votre TMI</h3>
                <p className="text-sm text-text-light">
                  Si votre TMI est &eacute;lev&eacute;e (41% ou 45%), un niveau de loyer plus
                  bas (Loc2 ou Loc3) peut &ecirc;tre plus rentable malgr&eacute; la perte de
                  loyer, car l&apos;&eacute;conomie fiscale compense largement. &Agrave; la TMI
                  de 45%, chaque euro suppl&eacute;mentaire de d&eacute;ficit vous &eacute;conomise
                  0,622 &euro; d&apos;imp&ocirc;t.
                </p>
              </div>
              <div className="bg-background-alt rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-text mb-2">Financer &agrave; cr&eacute;dit pour maximiser les charges</h3>
                <p className="text-sm text-text-light">
                  Les int&eacute;r&ecirc;ts d&apos;emprunt sont d&eacute;ductibles des revenus
                  fonciers. Un financement &agrave; 100% &agrave; cr&eacute;dit augmente les
                  charges d&eacute;ductibles et donc le d&eacute;ficit foncier, surtout dans les
                  premi&egrave;res ann&eacute;es o&ugrave; les int&eacute;r&ecirc;ts sont les plus
                  &eacute;lev&eacute;s.
                </p>
              </div>
              <div className="bg-background-alt rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-text mb-2">Investir via une SCI pour optimiser la r&eacute;partition</h3>
                <p className="text-sm text-text-light">
                  En investissant via une SCI &agrave; l&apos;IR avec un associ&eacute; &agrave;
                  TMI plus &eacute;lev&eacute;e, vous pouvez adapter la r&eacute;partition des parts
                  pour maximiser l&apos;&eacute;conomie fiscale globale.
                </p>
              </div>
              <div className="bg-background-alt rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-text mb-2">Conserver le bien au-del&agrave; de 22 ans</h3>
                <p className="text-sm text-text-light">
                  Apr&egrave;s 22 ans de d&eacute;tention, la plus-value est exon&eacute;r&eacute;e
                  d&apos;IR. Apr&egrave;s 30 ans, elle est &eacute;galement exon&eacute;r&eacute;e
                  de pr&eacute;l&egrave;vements sociaux. Combin&eacute; &agrave; la non-r&eacute;int&eacute;gration
                  des amortissements, c&apos;est une strat&eacute;gie patrimoniale tr&egrave;s efficace.
                </p>
              </div>
            </div>
            <p className="text-text-light">
              Pour approfondir le m&eacute;canisme d&apos;amortissement, consultez :{' '}
              <Link href="/amortissement-jeanbrun" className="text-primary font-medium hover:underline">
                Amortissement Jeanbrun : taux et plafonds
              </Link>.
            </p>
          </section>

          {/* Section 7 */}
          <section id="exemple" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              7. Exemple fiscal complet
            </h2>
            <div className="bg-background-alt rounded-xl p-6 border border-border mb-4">
              <h3 className="font-semibold text-text mb-4">Profil de l&apos;investisseur</h3>
              <div className="space-y-2 mb-6">
                {[
                  ['Situation', 'C\u00e9libataire, salaire brut 60 000 \u20ac/an'],
                  ['Revenu imposable (avant Jeanbrun)', '~48 000 \u20ac'],
                  ['TMI', '30%'],
                  ['Bien', 'Appartement neuf 220 000 \u20ac, zone B1, Loc1'],
                  ['Financement', '100% cr\u00e9dit sur 20 ans \u00e0 3,5%'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-text mb-4">Calcul fiscal ann&eacute;e 1</h3>
              <div className="space-y-2 mb-4">
                {[
                  ['Loyer annuel (11,31 \u20ac \u00d7 40 m\u00b2 \u00d7 12)', '5 429 \u20ac'],
                  ['Int\u00e9r\u00eats d\u2019emprunt', '\u2013 7 500 \u20ac'],
                  ['Taxe fonci\u00e8re', '\u2013 900 \u20ac'],
                  ['Charges de gestion et assurance', '\u2013 800 \u20ac'],
                  ['Amortissement Jeanbrun (3,5% \u00d7 176 000 \u20ac)', '\u2013 6 160 \u20ac'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
                  <span>R&eacute;sultat foncier</span>
                  <span className="text-primary">&minus;9 931 &euro;</span>
                </div>
              </div>

              <h3 className="font-semibold text-text mb-4">Impact sur l&apos;imp&ocirc;t</h3>
              <div className="space-y-2">
                {[
                  ['Revenu imposable sans Jeanbrun', '48 000 \u20ac'],
                  ['D\u00e9ficit foncier imput\u00e9 sur revenu global', '\u2013 9 931 \u20ac'],
                  ['Revenu imposable avec Jeanbrun', '38 069 \u20ac'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>&Eacute;conomie d&apos;IR (30%)</span>
                    <span className="text-primary">2 979 &euro;</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span>&Eacute;conomie de PS (17,2%)</span>
                    <span className="text-primary">1 708 &euro;</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
                    <span>&Eacute;conomie fiscale totale ann&eacute;e 1</span>
                    <span className="text-accent text-lg">4 687 &euro;</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-text-light mb-4">
              Sur les 9 ans du dispositif, l&apos;&eacute;conomie fiscale cumul&eacute;e atteint
              environ <strong>35 000 &euro;</strong> dans cet exemple. Et &agrave; la revente,
              aucune r&eacute;int&eacute;gration des amortissements.
            </p>
            <p className="text-text-light">
              Pour estimer pr&eacute;cis&eacute;ment votre &eacute;conomie d&apos;imp&ocirc;t selon
              votre situation, utilisez notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur Jeanbrun gratuit
              </Link>. Consultez aussi le{' '}
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
              Calculez votre &eacute;conomie d&apos;imp&ocirc;t Jeanbrun
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Notre simulateur calcule votre &eacute;conomie d&apos;imp&ocirc;t selon votre TMI,
              votre d&eacute;ficit foncier et votre situation. Gratuit et sans engagement.
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
