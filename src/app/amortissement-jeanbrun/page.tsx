import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';
import { TAUX_AMORTISSEMENT, PLAFOND_AMORTISSEMENT, NIVEAUX_LOYER_LABELS, PART_FONCIER, DUREE_DISPOSITIF } from '@/config/plafonds';
import type { NiveauLoyer } from '@/config/plafonds';

export const metadata: Metadata = {
  title: 'Amortissement Jeanbrun 2026 : taux, calcul et plafonds — Guide complet',
  description:
    "Comment fonctionne l'amortissement du dispositif Jeanbrun ? Taux de 3,5% à 5,5%, base amortissable, plafonds annuels. Calcul détaillé et exemples concrets.",
  alternates: { canonical: 'https://simu-jeanbrun.fr/amortissement-jeanbrun' },
};

const faqItems = [
  {
    question: "Quelle est la différence entre l'amortissement Jeanbrun et l'amortissement comptable classique ?",
    answer:
      "L'amortissement Jeanbrun est un amortissement fiscal, pas comptable. Contrairement à l'amortissement classique (LMNP, IS) qui constate la perte de valeur d'un bien, l'amortissement Jeanbrun est une déduction forfaitaire accordée par l'État en contrepartie d'un loyer plafonné. Il se déduit des revenus fonciers (et non des BIC) et n'est pas réintégré dans la plus-value à la revente.",
  },
  {
    question: 'Peut-on amortir les frais de notaire et les travaux dans le Jeanbrun ?',
    answer:
      "La base amortissable inclut le prix d'acquisition du bien et le montant des travaux éligibles (minimum 30% du prix pour l'ancien). Les frais de notaire ne sont pas inclus dans la base amortissable mais restent déductibles en charges classiques des revenus fonciers.",
  },
  {
    question: "Que se passe-t-il si l'amortissement calculé dépasse le plafond annuel ?",
    answer:
      "L'amortissement est plafonné chaque année (8 000 €, 10 000 € ou 12 000 € selon le niveau de loyer). Si le calcul théorique (taux × base amortissable) dépasse ce plafond, seul le plafond est déductible. L'excédent est définitivement perdu : il n'est ni reportable ni récupérable les années suivantes.",
  },
  {
    question: "L'amortissement Jeanbrun est-il réintégré dans la plus-value à la revente ?",
    answer:
      "Non, c'est l'un des avantages majeurs du dispositif Jeanbrun par rapport au LMNP. Les amortissements déduits pendant la durée de location ne sont pas réintégrés dans le calcul de la plus-value immobilière lors de la revente. La plus-value est calculée sur la base du prix d'acquisition réel, comme pour toute location nue classique.",
  },
  {
    question: "Peut-on changer de niveau d'amortissement en cours de dispositif ?",
    answer:
      "Non, le niveau de loyer (intermédiaire, social ou très social) est choisi au moment de la mise en location et reste fixe pendant toute la durée de l'engagement de 9 ans. Le taux d'amortissement et le plafond associés sont donc constants sur toute la période.",
  },
];

const niveaux = Object.keys(NIVEAUX_LOYER_LABELS) as NiveauLoyer[];

export default function AmortissementJeanbrunPage() {
  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Amortissement Jeanbrun 2026 : taux, calcul et plafonds — Guide complet',
            description:
              "Comment fonctionne l'amortissement du dispositif Jeanbrun ? Taux de 3,5% à 5,5%, base amortissable, plafonds annuels. Calcul détaillé et exemples concrets.",
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
            <span className="text-text">Amortissement</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            L&apos;amortissement Jeanbrun en d&eacute;tail : taux, calcul et plafonds 2026
          </h1>

          <p className="text-lg text-text-light mb-4">
            L&apos;amortissement est le moteur fiscal du{' '}
            <Link href="/dispositif-jeanbrun" className="text-primary font-medium hover:underline">
              dispositif Jeanbrun
            </Link>
            . Il permet de d&eacute;duire chaque ann&eacute;e entre 3,5&nbsp;% et 5,5&nbsp;% de la valeur
            du bien de vos revenus fonciers, cr&eacute;ant ainsi un{' '}
            <Link href="/deficit-foncier-jeanbrun" className="text-primary font-medium hover:underline">
              d&eacute;ficit foncier
            </Link>{' '}
            qui r&eacute;duit directement votre imp&ocirc;t sur le revenu.
          </p>

          <p className="text-lg text-text-light mb-8">
            Ce guide d&eacute;taille le m&eacute;canisme de l&apos;amortissement Jeanbrun : concept,
            base amortissable, taux par niveau de loyer, plafonds annuels, impact sur le
            d&eacute;ficit foncier et la plus-value, avec des exemples de calcul concrets.
          </p>

          {/* Sommaire */}
          <div className="bg-background-alt rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-bold text-text mb-3">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#concept" className="text-primary hover:underline">1. Qu&apos;est-ce que l&apos;amortissement Jeanbrun ?</a></li>
              <li><a href="#niveaux" className="text-primary hover:underline">2. Les 3 niveaux d&apos;amortissement</a></li>
              <li><a href="#base-amortissable" className="text-primary hover:underline">3. La base amortissable</a></li>
              <li><a href="#calcul" className="text-primary hover:underline">4. Calcul d&eacute;taill&eacute; de l&apos;amortissement annuel</a></li>
              <li><a href="#plafonds" className="text-primary hover:underline">5. Plafonds d&apos;amortissement annuel</a></li>
              <li><a href="#deficit-foncier" className="text-primary hover:underline">6. Impact sur le d&eacute;ficit foncier</a></li>
              <li><a href="#plus-value" className="text-primary hover:underline">7. Amortissement et plus-value</a></li>
              <li><a href="#faq" className="text-primary hover:underline">8. FAQ</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="concept" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              1. Qu&apos;est-ce que l&apos;amortissement Jeanbrun ?
            </h2>
            <p className="text-text-light mb-4">
              L&apos;amortissement Jeanbrun est un <strong>amortissement fiscal</strong> qui permet
              de d&eacute;duire une fraction du prix d&apos;acquisition de votre bien immobilier de vos
              revenus fonciers chaque ann&eacute;e, pendant toute la dur&eacute;e de l&apos;engagement
              de {DUREE_DISPOSITIF} ans.
            </p>
            <p className="text-text-light mb-4">
              Contrairement &agrave; l&apos;amortissement comptable classique (utilis&eacute; par exemple en LMNP
              ou en SCI &agrave; l&apos;IS), qui constate la perte de valeur d&apos;un actif au fil du temps,
              l&apos;amortissement Jeanbrun est une <strong>d&eacute;duction forfaitaire accord&eacute;e par
              l&apos;&Eacute;tat</strong> en contrepartie d&apos;un engagement de loyer plafonn&eacute;.
              Il ne refl&egrave;te pas la d&eacute;pr&eacute;ciation r&eacute;elle du bien.
            </p>
            <p className="text-text-light mb-4">
              Les diff&eacute;rences cl&eacute;s avec un amortissement classique :
            </p>
            <div className="space-y-3 mb-4">
              {[
                'Il se d\u00e9duit des revenus fonciers (r\u00e9gime r\u00e9el), pas des BIC',
                "Il n'est pas r\u00e9int\u00e9gr\u00e9 dans la plus-value \u00e0 la revente",
                'Le taux est fix\u00e9 par la loi selon le niveau de loyer choisi, pas selon la dur\u00e9e de vie du bien',
                "Il est plafonn\u00e9 annuellement, contrairement \u00e0 l'amortissement LMNP",
                "Il est conditionn\u00e9 au respect d'un plafond de loyer pendant " + DUREE_DISPOSITIF + ' ans',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-light">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-text-light">
              C&apos;est cette combinaison unique — amortissement &eacute;lev&eacute;, d&eacute;duction sur les revenus
              fonciers, non-r&eacute;int&eacute;gration en plus-value — qui fait du Jeanbrun un dispositif
              particuli&egrave;rement attractif pour les investisseurs.
            </p>
          </section>

          {/* Section 2 */}
          <section id="niveaux" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              2. Les 3 niveaux d&apos;amortissement
            </h2>
            <p className="text-text-light mb-4">
              Le dispositif Jeanbrun propose trois niveaux d&apos;amortissement, directement li&eacute;s
              au niveau de d&eacute;cote de loyer que vous acceptez par rapport au march&eacute;. Plus vous
              consentez un loyer bas, plus le taux d&apos;amortissement est &eacute;lev&eacute;.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Niveau de loyer</th>
                    <th className="text-center p-3">D&eacute;cote loyer</th>
                    <th className="text-center p-3">Taux d&apos;amortissement</th>
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
                        {PLAFOND_AMORTISSEMENT[niveau].toLocaleString('fr-FR')} &euro;/an
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-text-light mb-4">
              Le choix du niveau est fait au moment de la mise en location et reste
              <strong> fixe pendant {DUREE_DISPOSITIF} ans</strong>. Il est donc crucial de bien
              &eacute;valuer l&apos;arbitrage entre rendement locatif (loyer per&ccedil;u) et avantage fiscal
              (amortissement d&eacute;duit).
            </p>
            <p className="text-text-light">
              Pour simuler l&apos;impact de chaque niveau sur votre investissement, utilisez notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 3 */}
          <section id="base-amortissable" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              3. La base amortissable
            </h2>
            <p className="text-text-light mb-4">
              L&apos;amortissement ne porte pas sur la totalit&eacute; du prix d&apos;acquisition.
              La <strong>part du foncier</strong> (terrain) est exclue car un terrain ne se
              d&eacute;pr&eacute;cie pas. Dans le dispositif Jeanbrun, la part du foncier est fix&eacute;e
              forfaitairement &agrave; <strong>{(PART_FONCIER * 100).toFixed(0)}&nbsp;%</strong> du prix.
            </p>
            <p className="text-text-light mb-4">
              La base amortissable est donc &eacute;gale &agrave; :
            </p>

            <div className="bg-background-alt rounded-xl p-6 mb-6 border border-border">
              <p className="text-text font-semibold text-center text-lg mb-4">
                Base amortissable = Prix d&apos;acquisition &times; {((1 - PART_FONCIER) * 100).toFixed(0)}&nbsp;%
              </p>
              <div className="space-y-3 text-sm text-text-light">
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Appartement achet&eacute; <strong>150 000 &euro;</strong></span>
                  <span className="font-semibold text-text">Base = {(150000 * (1 - PART_FONCIER)).toLocaleString('fr-FR')} &euro;</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Appartement achet&eacute; <strong>200 000 &euro;</strong></span>
                  <span className="font-semibold text-text">Base = {(200000 * (1 - PART_FONCIER)).toLocaleString('fr-FR')} &euro;</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Appartement achet&eacute; <strong>300 000 &euro;</strong></span>
                  <span className="font-semibold text-text">Base = {(300000 * (1 - PART_FONCIER)).toLocaleString('fr-FR')} &euro;</span>
                </div>
                <div className="flex justify-between">
                  <span>Ancien avec travaux : <strong>150 000 &euro; + 60 000 &euro;</strong></span>
                  <span className="font-semibold text-text">Base = {(210000 * (1 - PART_FONCIER)).toLocaleString('fr-FR')} &euro;</span>
                </div>
              </div>
            </div>

            <p className="text-text-light mb-4">
              Pour un bien ancien, la base amortissable inclut le prix d&apos;acquisition
              <strong> et les travaux &eacute;ligibles</strong> (qui doivent repr&eacute;senter au moins 30&nbsp;% du
              prix d&apos;achat). La part foncier de {(PART_FONCIER * 100).toFixed(0)}&nbsp;% s&apos;applique
              sur le total (prix + travaux).
            </p>
            <p className="text-text-light">
              Les frais de notaire, frais d&apos;agence et frais de garantie ne sont pas inclus
              dans la base amortissable, mais restent d&eacute;ductibles en charges classiques des
              revenus fonciers.
            </p>
          </section>

          {/* Section 4 */}
          <section id="calcul" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              4. Calcul d&eacute;taill&eacute; de l&apos;amortissement annuel
            </h2>
            <p className="text-text-light mb-4">
              Prenons un exemple concret pour illustrer le calcul de l&apos;amortissement annuel
              avec un appartement de <strong>200 000 &euro;</strong> au niveau interm&eacute;diaire (Loc1).
            </p>

            <div className="bg-background-alt rounded-xl p-6 mb-6 border border-border">
              <h3 className="font-semibold text-text mb-4">Exemple : appartement de 200 000 &euro; — Niveau interm&eacute;diaire</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-light">Prix d&apos;acquisition</span>
                  <span className="font-semibold text-text">200 000 &euro;</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-light">Part foncier ({(PART_FONCIER * 100).toFixed(0)}&nbsp;%)</span>
                  <span className="font-semibold text-text">- {(200000 * PART_FONCIER).toLocaleString('fr-FR')} &euro;</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-light font-medium">Base amortissable</span>
                  <span className="font-bold text-primary">{(200000 * (1 - PART_FONCIER)).toLocaleString('fr-FR')} &euro;</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-light">Taux d&apos;amortissement (Loc1)</span>
                  <span className="font-semibold text-text">{(TAUX_AMORTISSEMENT.intermediaire * 100).toFixed(1)}&nbsp;%</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-light">Amortissement th&eacute;orique ({(200000 * (1 - PART_FONCIER)).toLocaleString('fr-FR')} &times; {(TAUX_AMORTISSEMENT.intermediaire * 100).toFixed(1)}&nbsp;%)</span>
                  <span className="font-semibold text-text">{(200000 * (1 - PART_FONCIER) * TAUX_AMORTISSEMENT.intermediaire).toLocaleString('fr-FR')} &euro;/an</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-light">Plafond annuel (Loc1)</span>
                  <span className="font-semibold text-text">{PLAFOND_AMORTISSEMENT.intermediaire.toLocaleString('fr-FR')} &euro;/an</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-text font-medium">Amortissement effectif</span>
                  <span className="font-bold text-primary">
                    {Math.min(
                      200000 * (1 - PART_FONCIER) * TAUX_AMORTISSEMENT.intermediaire,
                      PLAFOND_AMORTISSEMENT.intermediaire
                    ).toLocaleString('fr-FR')} &euro;/an
                  </span>
                </div>
              </div>
            </div>

            <p className="text-text-light mb-4">
              Dans cet exemple, l&apos;amortissement th&eacute;orique ({(200000 * (1 - PART_FONCIER) * TAUX_AMORTISSEMENT.intermediaire).toLocaleString('fr-FR')} &euro;)
              est inf&eacute;rieur au plafond ({PLAFOND_AMORTISSEMENT.intermediaire.toLocaleString('fr-FR')} &euro;),
              donc la totalit&eacute; est d&eacute;ductible.
              Sur {DUREE_DISPOSITIF} ans, cela repr&eacute;sente un total
              de <strong>{(Math.min(200000 * (1 - PART_FONCIER) * TAUX_AMORTISSEMENT.intermediaire, PLAFOND_AMORTISSEMENT.intermediaire) * DUREE_DISPOSITIF).toLocaleString('fr-FR')} &euro;</strong> d&apos;amortissement.
            </p>

            <div className="bg-background-alt rounded-xl p-6 mb-6 border border-border">
              <h3 className="font-semibold text-text mb-4">Exemple : appartement de 300 000 &euro; — Niveau tr&egrave;s social</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-light">Prix d&apos;acquisition</span>
                  <span className="font-semibold text-text">300 000 &euro;</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-light">Base amortissable ({((1 - PART_FONCIER) * 100).toFixed(0)}&nbsp;%)</span>
                  <span className="font-semibold text-text">{(300000 * (1 - PART_FONCIER)).toLocaleString('fr-FR')} &euro;</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-light">Amortissement th&eacute;orique ({(300000 * (1 - PART_FONCIER)).toLocaleString('fr-FR')} &times; {(TAUX_AMORTISSEMENT.tres_social * 100).toFixed(1)}&nbsp;%)</span>
                  <span className="font-semibold text-text">{(300000 * (1 - PART_FONCIER) * TAUX_AMORTISSEMENT.tres_social).toLocaleString('fr-FR')} &euro;/an</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-light">Plafond annuel (Loc3)</span>
                  <span className="font-semibold text-text">{PLAFOND_AMORTISSEMENT.tres_social.toLocaleString('fr-FR')} &euro;/an</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-text font-medium">Amortissement effectif (plafonn&eacute;)</span>
                  <span className="font-bold text-primary">
                    {Math.min(
                      300000 * (1 - PART_FONCIER) * TAUX_AMORTISSEMENT.tres_social,
                      PLAFOND_AMORTISSEMENT.tres_social
                    ).toLocaleString('fr-FR')} &euro;/an
                  </span>
                </div>
              </div>
            </div>

            <p className="text-text-light">
              Ici, l&apos;amortissement th&eacute;orique ({(300000 * (1 - PART_FONCIER) * TAUX_AMORTISSEMENT.tres_social).toLocaleString('fr-FR')} &euro;)
              d&eacute;passe le plafond ({PLAFOND_AMORTISSEMENT.tres_social.toLocaleString('fr-FR')} &euro;).
              L&apos;amortissement est donc <strong>plafonn&eacute;</strong> &agrave; {PLAFOND_AMORTISSEMENT.tres_social.toLocaleString('fr-FR')} &euro;/an.
              L&apos;exc&eacute;dent de {((300000 * (1 - PART_FONCIER) * TAUX_AMORTISSEMENT.tres_social) - PLAFOND_AMORTISSEMENT.tres_social).toLocaleString('fr-FR')} &euro;
              est perdu chaque ann&eacute;e.
            </p>
          </section>

          {/* Section 5 */}
          <section id="plafonds" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              5. Plafonds d&apos;amortissement annuel
            </h2>
            <p className="text-text-light mb-4">
              L&apos;amortissement Jeanbrun est plafonn&eacute; chaque ann&eacute;e selon le niveau de loyer
              choisi. Ce plafonnement a &eacute;t&eacute; instaur&eacute; pour <strong>limiter le co&ucirc;t budg&eacute;taire</strong> du
              dispositif pour l&apos;&Eacute;tat et &eacute;viter que les biens de tr&egrave;s grande valeur ne
              b&eacute;n&eacute;ficient d&apos;un avantage fiscal disproportionn&eacute;.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Niveau de loyer</th>
                    <th className="text-center p-3">Plafond annuel</th>
                    <th className="text-center p-3">Plafond sur {DUREE_DISPOSITIF} ans</th>
                    <th className="text-center p-3">Seuil de plafonnement*</th>
                  </tr>
                </thead>
                <tbody>
                  {niveaux.map((niveau) => {
                    const seuilPlafonnement = Math.round(PLAFOND_AMORTISSEMENT[niveau] / TAUX_AMORTISSEMENT[niveau] / (1 - PART_FONCIER));
                    return (
                      <tr key={niveau} className="border-b border-border">
                        <td className="p-3 font-medium">{NIVEAUX_LOYER_LABELS[niveau]}</td>
                        <td className="p-3 text-center font-semibold text-primary">
                          {PLAFOND_AMORTISSEMENT[niveau].toLocaleString('fr-FR')} &euro;
                        </td>
                        <td className="p-3 text-center">
                          {(PLAFOND_AMORTISSEMENT[niveau] * DUREE_DISPOSITIF).toLocaleString('fr-FR')} &euro;
                        </td>
                        <td className="p-3 text-center text-text-light">
                          ~{Math.round(seuilPlafonnement / 1000).toLocaleString('fr-FR')}k &euro;
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-text-light mb-4">
              * Le seuil de plafonnement indique le prix d&apos;achat &agrave; partir duquel
              l&apos;amortissement th&eacute;orique d&eacute;passe le plafond annuel. Au-del&agrave; de ce prix,
              le plafond s&apos;applique et une partie de l&apos;amortissement est perdue.
            </p>

            <p className="text-text-light">
              En pratique, le plafonnement concerne surtout les biens haut de gamme ou
              les grandes surfaces. Pour la majorit&eacute; des investissements locatifs (studios, T2, T3),
              l&apos;amortissement th&eacute;orique reste sous le plafond, surtout au niveau interm&eacute;diaire.
            </p>
          </section>

          {/* Section 6 */}
          <section id="deficit-foncier" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              6. Impact sur le d&eacute;ficit foncier
            </h2>
            <p className="text-text-light mb-4">
              L&apos;amortissement Jeanbrun est l&apos;&eacute;l&eacute;ment central de la cr&eacute;ation de{' '}
              <strong>d&eacute;ficit foncier</strong>. Chaque ann&eacute;e, vos revenus fonciers (loyers per&ccedil;us)
              sont diminu&eacute;s de l&apos;amortissement et des charges d&eacute;ductibles classiques
              (int&eacute;r&ecirc;ts d&apos;emprunt, charges de copropri&eacute;t&eacute;, taxe fonci&egrave;re, assurances, etc.).
            </p>
            <p className="text-text-light mb-4">
              Le sch&eacute;ma est le suivant :
            </p>

            <div className="bg-background-alt rounded-xl p-6 mb-6 border border-border">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-light">Loyers per&ccedil;us</span>
                  <span className="font-semibold text-text">+ Revenus fonciers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Charges d&eacute;ductibles classiques</span>
                  <span className="font-semibold text-text">- Int&eacute;r&ecirc;ts, charges, taxe fonci&egrave;re...</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Amortissement Jeanbrun</span>
                  <span className="font-semibold text-primary">- 3,5&nbsp;% &agrave; 5,5&nbsp;% de la base amortissable</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="text-text font-medium">R&eacute;sultat foncier</span>
                  <span className="font-bold text-primary">= D&eacute;ficit foncier (le plus souvent)</span>
                </div>
              </div>
            </div>

            <p className="text-text-light mb-4">
              Ce d&eacute;ficit foncier est imputable sur votre <strong>revenu global</strong> dans la limite
              de 10 700 &euro;/an (ou 21 400 &euro; en cas de travaux de r&eacute;novation &eacute;nerg&eacute;tique).
              Le surplus est reportable pendant 10 ans sur les revenus fonciers futurs.
            </p>
            <p className="text-text-light mb-4">
              L&apos;impact est d&apos;autant plus fort que votre tranche marginale d&apos;imposition (TMI)
              est &eacute;lev&eacute;e. Un d&eacute;ficit foncier de 10 000 &euro; permet d&apos;&eacute;conomiser :
            </p>
            <div className="space-y-2 mb-4">
              {[
                { tmi: '30%', eco: '3 000 \u20ac + 1 720 \u20ac de pr\u00e9l\u00e8vements sociaux' },
                { tmi: '41%', eco: '4 100 \u20ac + 1 720 \u20ac de pr\u00e9l\u00e8vements sociaux' },
                { tmi: '45%', eco: '4 500 \u20ac + 1 720 \u20ac de pr\u00e9l\u00e8vements sociaux' },
              ].map((item) => (
                <div key={item.tmi} className="flex items-center gap-3">
                  <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded">TMI {item.tmi}</span>
                  <span className="text-text-light text-sm">{item.eco}</span>
                </div>
              ))}
            </div>
            <p className="text-text-light">
              Pour une analyse compl&egrave;te du m&eacute;canisme, consultez notre page{' '}
              <Link href="/deficit-foncier-jeanbrun" className="text-primary font-medium hover:underline">
                D&eacute;ficit foncier et dispositif Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 7 */}
          <section id="plus-value" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              7. Amortissement et plus-value : l&apos;avantage d&eacute;cisif
            </h2>
            <p className="text-text-light mb-4">
              L&apos;un des atouts majeurs de l&apos;amortissement Jeanbrun est qu&apos;il
              n&apos;est <strong>pas r&eacute;int&eacute;gr&eacute; dans le calcul de la plus-value</strong> lors de la
              revente du bien. C&apos;est une diff&eacute;rence fondamentale avec le{' '}
              <Link href="/jeanbrun-vs-lmnp" className="text-primary font-medium hover:underline">
                LMNP
              </Link>.
            </p>
            <p className="text-text-light mb-4">
              Depuis la r&eacute;forme de 2025, les amortissements d&eacute;duits en LMNP sont r&eacute;int&eacute;gr&eacute;s dans
              la base de calcul de la plus-value immobili&egrave;re, augmentant significativement
              l&apos;imposition &agrave; la revente. Avec le Jeanbrun, le calcul de la plus-value
              s&apos;effectue sur le <strong>prix d&apos;acquisition r&eacute;el</strong>, comme pour
              toute location nue classique.
            </p>

            <div className="bg-background-alt rounded-xl p-6 mb-6 border border-border">
              <h3 className="font-semibold text-text mb-4">Comparaison sur un bien achet&eacute; 200 000 &euro;, revendu 250 000 &euro; apr&egrave;s {DUREE_DISPOSITIF} ans</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left p-3">Crit&egrave;re</th>
                      <th className="text-center p-3">Jeanbrun</th>
                      <th className="text-center p-3">LMNP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3">Amortissements d&eacute;duits sur {DUREE_DISPOSITIF} ans</td>
                      <td className="p-3 text-center">~50 400 &euro;</td>
                      <td className="p-3 text-center">~50 400 &euro;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">R&eacute;int&eacute;gration dans la plus-value</td>
                      <td className="p-3 text-center font-semibold text-primary">0 &euro;</td>
                      <td className="p-3 text-center text-red-600 font-semibold">50 400 &euro;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Plus-value imposable</td>
                      <td className="p-3 text-center">50 000 &euro;</td>
                      <td className="p-3 text-center">100 400 &euro;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Imposition plus-value (~36,2&nbsp;%)</td>
                      <td className="p-3 text-center font-semibold text-primary">~18 100 &euro;</td>
                      <td className="p-3 text-center text-red-600 font-semibold">~36 345 &euro;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-text-light mb-4">
              La non-r&eacute;int&eacute;gration repr&eacute;sente ici une &eacute;conomie de plus
              de <strong>18 000 &euro;</strong> sur la taxation de la plus-value. De plus, la
              plus-value immobili&egrave;re en location nue b&eacute;n&eacute;ficie des abattements classiques
              pour dur&eacute;e de d&eacute;tention : exon&eacute;ration compl&egrave;te d&apos;IR apr&egrave;s 22 ans et
              de pr&eacute;l&egrave;vements sociaux apr&egrave;s 30 ans.
            </p>
            <p className="text-text-light">
              C&apos;est un avantage consid&eacute;rable sur le long terme. Pour une comparaison
              compl&egrave;te des deux r&eacute;gimes, consultez notre page{' '}
              <Link href="/jeanbrun-vs-lmnp" className="text-primary font-medium hover:underline">
                Jeanbrun vs LMNP
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-6">
              8. Questions fr&eacute;quentes sur l&apos;amortissement Jeanbrun
            </h2>
            <Accordion items={faqItems} />
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Calculez votre amortissement Jeanbrun
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Simulez votre amortissement, votre d&eacute;ficit foncier et votre &eacute;conomie d&apos;imp&ocirc;t
              en quelques clics. Comparaison automatique avec le LMNP.
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
