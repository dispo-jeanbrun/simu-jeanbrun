import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Dispositif Jeanbrun dans le neuf : VEFA et construction 2026',
  description:
    "Investir dans le neuf avec le dispositif Jeanbrun. VEFA, construction, conditions, amortissement fiscal et simulation gratuite.",
  alternates: { canonical: 'https://simu-jeanbrun.fr/jeanbrun-neuf' },
};

const faqItems = [
  {
    question: 'Peut-on acheter en VEFA et bénéficier du Jeanbrun ?',
    answer:
      "Oui, l'achat en VEFA (Vente en l'État Futur d'Achèvement) est pleinement éligible au dispositif Jeanbrun. L'acte authentique doit être signé entre le 1er février 2026 et le 31 décembre 2028. Le bien doit être livré dans un délai raisonnable et mis en location dans les 12 mois suivant la livraison.",
  },
  {
    question: 'Quels sont les avantages du neuf par rapport à l\u2019ancien dans le Jeanbrun ?',
    answer:
      "Le neuf offre plusieurs avantages : pas de travaux à prévoir, garanties constructeur (décennale, biennale, parfait achèvement), conformité aux dernières normes énergétiques (RE 2020), frais de notaire réduits (2,5% contre 7,5% dans l'ancien), et une base amortissable intégrant le prix total du bien hors foncier.",
  },
  {
    question: 'Comment est calculée la base amortissable dans le neuf ?',
    answer:
      "La base amortissable correspond à 80% du prix d'acquisition du bien (les 20% restants représentant la part du foncier, non amortissable). Par exemple, pour un bien acheté 250 000 €, la base amortissable sera de 200 000 €. Le taux d'amortissement annuel (3,5% à 5,5%) s'applique ensuite à cette base.",
  },
  {
    question: 'Peut-on construire sa propre maison et bénéficier du Jeanbrun ?',
    answer:
      "Oui, la construction d'un logement neuf est éligible au dispositif Jeanbrun, à condition que le permis de construire soit déposé dans la période éligible (février 2026 - décembre 2028) et que le bien soit destiné à la location nue à titre de résidence principale du locataire, en respectant les plafonds de loyer.",
  },
];

export default function JeanbrunNeufPage() {
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
            <span className="text-text">Jeanbrun dans le neuf</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            Dispositif Jeanbrun dans le neuf : VEFA et construction en 2026
          </h1>

          <p className="text-lg text-text-light mb-4">
            Le dispositif Jeanbrun, introduit par le Projet de Loi de Finances 2026, offre une
            opportunit&eacute; fiscale majeure aux investisseurs qui souhaitent acheter un bien
            immobilier neuf. Que ce soit en VEFA (Vente en l&apos;&Eacute;tat Futur d&apos;Ach&egrave;vement)
            ou en construction directe, le neuf b&eacute;n&eacute;ficie de l&apos;int&eacute;gralit&eacute;
            des avantages du dispositif : amortissement fiscal, d&eacute;ficit foncier et non-r&eacute;int&eacute;gration
            dans la plus-value.
          </p>

          <p className="text-lg text-text-light mb-8">
            Ce guide complet vous explique comment investir dans le neuf avec le Jeanbrun,
            les conditions sp&eacute;cifiques &agrave; respecter, le calcul de l&apos;amortissement
            et les avantages par rapport &agrave; l&apos;ancien.
          </p>

          {/* Sommaire */}
          <div className="bg-background-alt rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-bold text-text mb-3">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#eligibilite-neuf" className="text-primary hover:underline">1. &Eacute;ligibilit&eacute; du neuf au dispositif Jeanbrun</a></li>
              <li><a href="#vefa" className="text-primary hover:underline">2. Acheter en VEFA avec le Jeanbrun</a></li>
              <li><a href="#construction" className="text-primary hover:underline">3. Construction neuve et Jeanbrun</a></li>
              <li><a href="#avantages-neuf" className="text-primary hover:underline">4. Les avantages du neuf</a></li>
              <li><a href="#amortissement-neuf" className="text-primary hover:underline">5. Calcul de l&apos;amortissement dans le neuf</a></li>
              <li><a href="#comparaison-ancien" className="text-primary hover:underline">6. Neuf vs ancien : quelle strat&eacute;gie choisir ?</a></li>
              <li><a href="#exemple" className="text-primary hover:underline">7. Exemple chiffr&eacute; complet</a></li>
              <li><a href="#faq" className="text-primary hover:underline">8. FAQ</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="eligibilite-neuf" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              1. &Eacute;ligibilit&eacute; du neuf au dispositif Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              Le dispositif Jeanbrun est ouvert aux biens immobiliers neufs acquis entre le
              1er f&eacute;vrier 2026 et le 31 d&eacute;cembre 2028. Pour &ecirc;tre consid&eacute;r&eacute;
              comme neuf au sens fiscal, le bien doit n&apos;avoir jamais &eacute;t&eacute; habit&eacute;
              ni utilis&eacute; sous quelque forme que ce soit. Deux modalit&eacute;s principales
              permettent d&apos;acqu&eacute;rir un bien neuf &eacute;ligible.
            </p>
            <p className="text-text-light mb-4">
              La premi&egrave;re est l&apos;achat en VEFA, c&apos;est-&agrave;-dire l&apos;acquisition
              d&apos;un logement sur plan aupr&egrave;s d&apos;un promoteur immobilier, avant ou
              pendant la construction. La seconde est la construction d&apos;un logement neuf
              par le contribuable lui-m&ecirc;me, sous r&eacute;serve du d&eacute;p&ocirc;t du permis de construire
              dans la p&eacute;riode &eacute;ligible.
            </p>
            <p className="text-text-light mb-4">
              Dans les deux cas, le bien doit remplir les conditions g&eacute;n&eacute;rales du
              dispositif :{' '}
              <Link href="/conditions-jeanbrun" className="text-primary font-medium hover:underline">
                location nue, engagement de 9 ans, respect des plafonds de loyer
              </Link>{' '}
              et mise en location dans les 12 mois suivant la livraison ou l&apos;ach&egrave;vement.
            </p>
            <p className="text-text-light">
              Contrairement &agrave; l&apos;ancien, le neuf n&apos;impose pas de condition de
              montant de travaux (la r&egrave;gle des 30% du prix en travaux concerne uniquement
              l&apos;ancien). Le bien est &eacute;ligible d&egrave;s lors qu&apos;il est neuf et
              destin&eacute; &agrave; la location dans les conditions pr&eacute;vues par le dispositif.
            </p>
          </section>

          {/* Section 2 */}
          <section id="vefa" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              2. Acheter en VEFA avec le Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              La VEFA (Vente en l&apos;&Eacute;tat Futur d&apos;Ach&egrave;vement) est le mode
              d&apos;acquisition le plus courant pour investir dans le neuf avec le dispositif
              Jeanbrun. Vous signez un contrat de r&eacute;servation aupr&egrave;s d&apos;un
              promoteur, puis l&apos;acte authentique chez le notaire. Le paiement est
              &eacute;chelonn&eacute; au fur et &agrave; mesure de l&apos;avancement des travaux.
            </p>
            <p className="text-text-light mb-4">
              Pour &ecirc;tre &eacute;ligible au Jeanbrun, l&apos;acte authentique de vente doit
              &ecirc;tre sign&eacute; entre le 1er f&eacute;vrier 2026 et le 31 d&eacute;cembre
              2028. C&apos;est la date de signature de l&apos;acte authentique qui fait foi, et
              non la date de r&eacute;servation ni celle de la livraison.
            </p>
            <p className="text-text-light mb-4">
              La VEFA pr&eacute;sente un avantage majeur : les frais de notaire sont r&eacute;duits
              &agrave; environ 2,5% du prix d&apos;acquisition, contre 7,5% dans l&apos;ancien.
              Cette &eacute;conomie de 5 points repr&eacute;sente plusieurs milliers d&apos;euros
              sur un investissement type.
            </p>
            <p className="text-text-light mb-4">
              De plus, le paiement &eacute;chelonn&eacute; en VEFA permet de ne pas mobiliser la
              totalit&eacute; des fonds d&egrave;s le d&eacute;part. Les appels de fonds suivent
              un calendrier r&eacute;glement&eacute; : 35% &agrave; l&apos;ach&egrave;vement des
              fondations, 70% &agrave; la mise hors d&apos;eau, 95% &agrave; l&apos;ach&egrave;vement
              des travaux et 5% &agrave; la livraison.
            </p>
            <p className="text-text-light">
              Attention toutefois : le d&eacute;lai entre la signature et la livraison peut
              atteindre 18 &agrave; 24 mois. Pendant cette p&eacute;riode, vous ne percevez
              aucun loyer mais vous pouvez d&eacute;j&agrave; d&eacute;duire les int&eacute;r&ecirc;ts
              intercalaires de vos revenus fonciers. L&apos;amortissement Jeanbrun ne d&eacute;marre
              qu&apos;&agrave; compter de la mise en location effective du bien.
            </p>
          </section>

          {/* Section 3 */}
          <section id="construction" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              3. Construction neuve et Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              Si vous pr&eacute;f&eacute;rez construire votre bien plut&ocirc;t que d&apos;acheter
              sur plan, le dispositif Jeanbrun est &eacute;galement accessible. Le permis de
              construire doit &ecirc;tre d&eacute;pos&eacute; entre le 1er f&eacute;vrier 2026
              et le 31 d&eacute;cembre 2028.
            </p>
            <p className="text-text-light mb-4">
              La base amortissable comprend le co&ucirc;t total de la construction (terrain exclu
              pour la part foncier, soit 20%). Si vous poss&eacute;dez d&eacute;j&agrave; le terrain,
              seul le co&ucirc;t de la construction entre dans le calcul. Si vous achetez le
              terrain avec la construction, le prix global (terrain + construction) sert de base,
              diminu&eacute; de la part foncier de 20%.
            </p>
            <p className="text-text-light mb-4">
              La construction doit respecter les normes en vigueur, notamment la RE 2020
              (R&eacute;glementation Environnementale 2020), qui impose des performances
              &eacute;nerg&eacute;tiques &eacute;lev&eacute;es. C&apos;est un avantage pour
              le propri&eacute;taire puisque les charges &eacute;nerg&eacute;tiques seront
              r&eacute;duites, rendant le bien plus attractif pour les locataires.
            </p>
            <p className="text-text-light">
              Le d&eacute;lai d&apos;ach&egrave;vement de la construction doit &ecirc;tre
              raisonnable. Le bien doit &ecirc;tre mis en location dans les 12 mois suivant
              son ach&egrave;vement. L&apos;amortissement d&eacute;marre &agrave; la date de mise
              en location effective.
            </p>
          </section>

          {/* Section 4 */}
          <section id="avantages-neuf" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              4. Les avantages du neuf pour un investissement Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              Investir dans le neuf avec le dispositif Jeanbrun offre des avantages sp&eacute;cifiques
              par rapport &agrave; l&apos;ancien. Voici les principaux atouts :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: 'Aucun travaux &agrave; pr&eacute;voir',
                  text: "Le bien est livr&eacute; cl&eacute; en main, pr&ecirc;t &agrave; louer. Pas de surprise li&eacute;e &agrave; des travaux impr&eacute;vus ni de d&eacute;lai suppl&eacute;mentaire avant la mise en location.",
                },
                {
                  title: 'Garanties constructeur',
                  text: "Vous b&eacute;n&eacute;ficiez de la garantie de parfait ach&egrave;vement (1 an), de la garantie biennale (2 ans) et de la garantie d&eacute;cennale (10 ans) couvrant les d&eacute;sordres importants.",
                },
                {
                  title: 'Normes RE 2020',
                  text: "Les logements neufs respectent la RE 2020 : isolation renforc&eacute;e, faible consommation &eacute;nerg&eacute;tique, confort thermique. Un atout pour attirer et fid&eacute;liser les locataires.",
                },
                {
                  title: 'Frais de notaire r&eacute;duits',
                  text: "Environ 2,5% du prix dans le neuf contre 7,5% dans l&apos;ancien. Sur un bien &agrave; 250 000 &euro;, c&apos;est une &eacute;conomie de 12 500 &euro;.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-background-alt rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-text mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-sm text-text-light" dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              ))}
            </div>
            <p className="text-text-light">
              Ces avantages font du neuf un choix particuli&egrave;rement pertinent pour les
              investisseurs qui souhaitent un placement s&eacute;curis&eacute; et sans gestion
              lourde dans les premi&egrave;res ann&eacute;es.
            </p>
          </section>

          {/* Section 5 */}
          <section id="amortissement-neuf" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              5. Calcul de l&apos;amortissement dans le neuf
            </h2>
            <p className="text-text-light mb-4">
              Dans le neuf, la base amortissable est calcul&eacute;e simplement : il s&apos;agit
              de 80% du prix d&apos;acquisition du bien (hors frais de notaire). Les 20% restants
              correspondent &agrave; la part du foncier, qui n&apos;est pas amortissable.
            </p>
            <p className="text-text-light mb-4">
              Le taux d&apos;amortissement d&eacute;pend du niveau de loyer choisi. Plus vous
              acceptez un loyer bas par rapport au march&eacute;, plus le taux est &eacute;lev&eacute; :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li><strong>Loc1 (interm&eacute;diaire, -15%)</strong> : amortissement de 3,5%/an, plafonn&eacute; &agrave; 8 000 &euro;/an</li>
              <li><strong>Loc2 (social, -30%)</strong> : amortissement de 4,5%/an, plafonn&eacute; &agrave; 10 000 &euro;/an</li>
              <li><strong>Loc3 (tr&egrave;s social, -45%)</strong> : amortissement de 5,5%/an, plafonn&eacute; &agrave; 12 000 &euro;/an</li>
            </ul>
            <p className="text-text-light mb-4">
              L&apos;amortissement est d&eacute;duit chaque ann&eacute;e des revenus fonciers.
              Combin&eacute; aux charges d&eacute;ductibles (int&eacute;r&ecirc;ts d&apos;emprunt,
              taxe fonci&egrave;re, charges de copropri&eacute;t&eacute;, assurance), il cr&eacute;e
              g&eacute;n&eacute;ralement un{' '}
              <Link href="/deficit-foncier-jeanbrun" className="text-primary font-medium hover:underline">
                d&eacute;ficit foncier
              </Link>{' '}
              qui vient r&eacute;duire l&apos;imp&ocirc;t sur le revenu.
            </p>
            <p className="text-text-light">
              Pour en savoir plus sur le m&eacute;canisme d&apos;amortissement, consultez notre
              guide d&eacute;taill&eacute; :{' '}
              <Link href="/amortissement-jeanbrun" className="text-primary font-medium hover:underline">
                Amortissement Jeanbrun : taux, plafonds et calcul
              </Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section id="comparaison-ancien" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              6. Neuf vs ancien : quelle strat&eacute;gie choisir ?
            </h2>
            <p className="text-text-light mb-4">
              Le dispositif Jeanbrun permet d&apos;investir aussi bien dans le neuf que dans
              l&apos;ancien (avec au moins 30% de travaux). Chaque strat&eacute;gie a ses
              atouts. Voici un comparatif pour vous aider &agrave; choisir :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Crit&egrave;re</th>
                    <th className="text-center p-3">Neuf (VEFA / construction)</th>
                    <th className="text-center p-3">Ancien avec travaux</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Travaux', 'Aucun', 'Minimum 30% du prix'],
                    ['Frais de notaire', '~2,5%', '~7,5%'],
                    ['Garanties', 'D\u00e9cennale, biennale, parfait ach\u00e8vement', 'Aucune (sauf travaux neufs)'],
                    ['Performance \u00e9nerg\u00e9tique', 'RE 2020 (optimale)', 'Variable, \u00e0 am\u00e9liorer'],
                    ['Prix au m\u00b2', 'Plus \u00e9lev\u00e9', 'Souvent plus bas'],
                    ['D\u00e9ficit foncier', 'Via amortissement + charges', 'Via amortissement + charges + travaux'],
                    ['D\u00e9lai de mise en location', '12 \u00e0 24 mois (livraison)', 'Variable selon travaux'],
                    ['Localisation', 'Zones de construction neuves', 'Centres-villes, quartiers \u00e9tablis'],
                  ].map(([critere, neuf, ancien]) => (
                    <tr key={critere} className="border-b border-border">
                      <td className="p-3 font-medium">{critere}</td>
                      <td className="p-3 text-center">{neuf}</td>
                      <td className="p-3 text-center">{ancien}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-text-light mb-4">
              Le neuf est id&eacute;al pour les investisseurs qui recherchent la s&eacute;curit&eacute;,
              la simplicit&eacute; de gestion et des garanties solides. L&apos;ancien avec travaux
              peut offrir un prix au m&egrave;tre carr&eacute; plus comp&eacute;titif et une
              localisation en centre-ville, mais n&eacute;cessite une gestion de chantier et un
              montant de travaux significatif.
            </p>
            <p className="text-text-light">
              Pour d&eacute;couvrir l&apos;investissement dans l&apos;ancien, consultez notre page :{' '}
              <Link href="/jeanbrun-ancien-renove" className="text-primary font-medium hover:underline">
                Jeanbrun dans l&apos;ancien r&eacute;nov&eacute;
              </Link>.
            </p>
          </section>

          {/* Section 7 */}
          <section id="exemple" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              7. Exemple chiffr&eacute; : investissement Jeanbrun dans le neuf
            </h2>
            <div className="bg-background-alt rounded-xl p-6 border border-border mb-4">
              <h3 className="font-semibold text-text mb-4">Hypoth&egrave;ses</h3>
              <div className="space-y-2 mb-6">
                {[
                  ['Bien', 'Appartement T2 neuf en VEFA, zone A'],
                  ['Prix d\u2019acquisition', '250 000 \u20ac'],
                  ['Surface', '45 m\u00b2'],
                  ['Frais de notaire (~2,5%)', '6 250 \u20ac'],
                  ['Financement', '100% cr\u00e9dit sur 20 ans \u00e0 3,5%'],
                  ['Niveau de loyer', 'Interm\u00e9diaire (Loc1)'],
                  ['TMI de l\u2019investisseur', '30%'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-text mb-4">Calcul de l&apos;amortissement annuel</h3>
              <div className="space-y-2 mb-6">
                {[
                  ['Base amortissable (80% de 250 000 \u20ac)', '200 000 \u20ac'],
                  ['Taux d\u2019amortissement Loc1', '3,5%'],
                  ['Amortissement th\u00e9orique', '7 000 \u20ac/an'],
                  ['Plafond Loc1', '8 000 \u20ac/an'],
                  ['Amortissement retenu', '7 000 \u20ac/an (sous le plafond)'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-text mb-4">Impact fiscal annuel (ann&eacute;e 1)</h3>
              <div className="space-y-2">
                {[
                  ['Loyer annuel (14,03 \u20ac/m\u00b2 \u00d7 45 m\u00b2 \u00d7 12)', '7 576 \u20ac'],
                  ['Int\u00e9r\u00eats d\u2019emprunt (ann\u00e9e 1)', '\u2013 8 500 \u20ac'],
                  ['Charges d\u00e9ductibles (taxe fonci\u00e8re, gestion, etc.)', '\u2013 2 200 \u20ac'],
                  ['Amortissement Jeanbrun', '\u2013 7 000 \u20ac'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
                  <span>D&eacute;ficit foncier</span>
                  <span className="text-primary text-lg">&minus;10 124 &euro;</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span>&Eacute;conomie d&apos;imp&ocirc;t (TMI 30% + PS 17,2%)</span>
                  <span className="text-accent text-lg">4 779 &euro;</span>
                </div>
              </div>
            </div>
            <p className="text-text-light mb-4">
              Sur 9 ans, l&apos;&eacute;conomie fiscale cumul&eacute;e peut d&eacute;passer
              30 000 &euro; dans cet exemple. Et &agrave; la revente, les amortissements d&eacute;duits
              ne sont pas r&eacute;int&eacute;gr&eacute;s dans le calcul de la plus-value,
              contrairement au LMNP.
            </p>
            <p className="text-text-light">
              Pour estimer pr&eacute;cis&eacute;ment votre &eacute;conomie d&apos;imp&ocirc;t
              selon votre situation, utilisez notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur Jeanbrun gratuit
              </Link>.
              Retrouvez aussi le d&eacute;tail des plafonds de loyer sur notre page :{' '}
              <Link href="/plafond-loyer-jeanbrun" className="text-primary font-medium hover:underline">
                Plafonds de loyer Jeanbrun
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
              Simulez votre investissement Jeanbrun dans le neuf
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Calculez votre amortissement, votre d&eacute;ficit foncier et votre &eacute;conomie
              d&apos;imp&ocirc;t en quelques clics. Simulation gratuite et sans engagement.
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
