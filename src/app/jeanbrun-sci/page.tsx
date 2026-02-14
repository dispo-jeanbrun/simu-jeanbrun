import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Dispositif Jeanbrun et SCI : compatibilit\u00e9 et conditions',
  description:
    "Le dispositif Jeanbrun est-il compatible avec une SCI ? SCI \u00e0 l'IR oui, SCI \u00e0 l'IS non. Guide complet pour investir en SCI avec le Jeanbrun.",
  alternates: { canonical: 'https://simu-jeanbrun.fr/jeanbrun-sci' },
};

const faqItems = [
  {
    question: 'Une SCI \u00e0 l\u2019IS peut-elle b\u00e9n\u00e9ficier du Jeanbrun ?',
    answer:
      "Non, une SCI soumise \u00e0 l'imp\u00f4t sur les soci\u00e9t\u00e9s (IS) ne peut pas b\u00e9n\u00e9ficier du dispositif Jeanbrun. Le Jeanbrun est un m\u00e9canisme de d\u00e9duction sur les revenus fonciers (imp\u00f4t sur le revenu), incompatible avec le r\u00e9gime de l'IS. Seules les SCI \u00e0 l'IR sont \u00e9ligibles.",
  },
  {
    question: 'Comment l\u2019amortissement est-il r\u00e9parti entre les associ\u00e9s ?',
    answer:
      "L'amortissement Jeanbrun est r\u00e9parti entre les associ\u00e9s de la SCI au prorata de leurs parts sociales. Si un associ\u00e9 d\u00e9tient 60% des parts et l'autre 40%, l'amortissement sera imput\u00e9 \u00e0 60% sur les revenus fonciers du premier et \u00e0 40% sur ceux du second.",
  },
  {
    question: 'Peut-on cr\u00e9er une SCI sp\u00e9cifiquement pour le Jeanbrun ?',
    answer:
      "Oui, il est tout \u00e0 fait possible de cr\u00e9er une SCI \u00e0 l'IR sp\u00e9cifiquement pour investir avec le dispositif Jeanbrun. La SCI doit \u00eatre constitu\u00e9e avant l'acquisition du bien. Les frais de cr\u00e9ation (environ 300 \u00e0 500 \u20ac en ligne, 1 500 \u00e0 2 500 \u20ac via un professionnel) sont des charges d\u00e9ductibles.",
  },
  {
    question: 'Quels sont les avantages de la SCI pour la transmission ?',
    answer:
      "La SCI permet une transmission progressive du patrimoine immobilier via la donation de parts sociales, avec application de la d\u00e9cote pour illiquidit\u00e9 (10 \u00e0 20%) et des abattements classiques (100 000 \u20ac par parent et par enfant tous les 15 ans). C'est un outil puissant pour pr\u00e9parer la succession.",
  },
];

export default function JeanbrunSciPage() {
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
            <span className="text-text">Jeanbrun et SCI</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            Dispositif Jeanbrun et SCI : compatibilit&eacute; et conditions
          </h1>

          <p className="text-lg text-text-light mb-4">
            Investir en SCI (Soci&eacute;t&eacute; Civile Immobili&egrave;re) avec le dispositif
            Jeanbrun est tout &agrave; fait possible, sous certaines conditions. La SCI &agrave;
            l&apos;IR (imp&ocirc;t sur le revenu) est pleinement compatible avec le Jeanbrun,
            tandis que la SCI &agrave; l&apos;IS (imp&ocirc;t sur les soci&eacute;t&eacute;s)
            en est exclue.
          </p>

          <p className="text-lg text-text-light mb-8">
            Ce guide vous explique comment combiner SCI et Jeanbrun, les avantages de cette
            structure pour la gestion patrimoniale et la transmission, ainsi que les modalit&eacute;s
            pratiques de mise en &oelig;uvre.
          </p>

          {/* Sommaire */}
          <div className="bg-background-alt rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-bold text-text mb-3">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#sci-ir" className="text-primary hover:underline">1. SCI &agrave; l&apos;IR : pleinement compatible</a></li>
              <li><a href="#sci-is" className="text-primary hover:underline">2. SCI &agrave; l&apos;IS : incompatible</a></li>
              <li><a href="#avantages" className="text-primary hover:underline">3. Avantages de la SCI avec le Jeanbrun</a></li>
              <li><a href="#repartition" className="text-primary hover:underline">4. R&eacute;partition de l&apos;amortissement entre associ&eacute;s</a></li>
              <li><a href="#transmission" className="text-primary hover:underline">5. SCI et transmission du patrimoine</a></li>
              <li><a href="#pratique" className="text-primary hover:underline">6. Mise en &oelig;uvre pratique</a></li>
              <li><a href="#exemple" className="text-primary hover:underline">7. Exemple chiffr&eacute;</a></li>
              <li><a href="#faq" className="text-primary hover:underline">8. FAQ</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="sci-ir" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              1. SCI &agrave; l&apos;IR : pleinement compatible avec le Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              La SCI soumise &agrave; l&apos;imp&ocirc;t sur le revenu (IR) est le r&eacute;gime
              fiscal par d&eacute;faut des SCI. Dans ce r&eacute;gime, la SCI est
              <strong> transparente fiscalement</strong> : les revenus et les charges de la SCI
              sont directement imput&eacute;s aux associ&eacute;s au prorata de leurs parts.
            </p>
            <p className="text-text-light mb-4">
              Cette transparence est pr&eacute;cis&eacute;ment ce qui rend la SCI &agrave; l&apos;IR
              compatible avec le Jeanbrun. L&apos;amortissement du bien est calcul&eacute; au
              niveau de la SCI, puis r&eacute;parti entre les associ&eacute;s. Chaque associ&eacute;
              d&eacute;duit sa quote-part d&apos;amortissement de ses propres revenus fonciers,
              cr&eacute;ant ainsi du d&eacute;ficit foncier imputable sur son revenu global.
            </p>
            <p className="text-text-light mb-4">
              Les conditions g&eacute;n&eacute;rales du dispositif Jeanbrun s&apos;appliquent
              int&eacute;gralement &agrave; la SCI :{' '}
              <Link href="/conditions-jeanbrun" className="text-primary font-medium hover:underline">
                engagement de location de 9 ans, respect des plafonds de loyer
              </Link>, location nue &agrave; titre de r&eacute;sidence principale du locataire.
            </p>
            <p className="text-text-light">
              L&apos;engagement de location est pris au niveau de la SCI, mais les cons&eacute;quences
              fiscales (d&eacute;ficit foncier, &eacute;conomie d&apos;imp&ocirc;t) sont
              individu&eacute;es pour chaque associ&eacute; selon sa quote-part et sa propre
              situation fiscale (TMI, autres revenus fonciers).
            </p>
          </section>

          {/* Section 2 */}
          <section id="sci-is" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              2. SCI &agrave; l&apos;IS : incompatible avec le Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              La SCI soumise &agrave; l&apos;imp&ocirc;t sur les soci&eacute;t&eacute;s (IS)
              n&apos;est <strong>pas compatible</strong> avec le dispositif Jeanbrun. Le Jeanbrun
              est un m&eacute;canisme qui fonctionne dans le cadre des revenus fonciers
              (cat&eacute;gorie IR), or la SCI &agrave; l&apos;IS g&eacute;n&egrave;re des
              b&eacute;n&eacute;fices commerciaux soumis &agrave; l&apos;imp&ocirc;t sur les
              soci&eacute;t&eacute;s.
            </p>
            <p className="text-text-light mb-4">
              Si votre SCI est d&eacute;j&agrave; &agrave; l&apos;IS, ou si vous envisagez
              d&apos;opter pour l&apos;IS, vous ne pourrez pas b&eacute;n&eacute;ficier du
              Jeanbrun. Attention : l&apos;option pour l&apos;IS est <strong>irr&eacute;vocable</strong>.
              Une SCI qui a opt&eacute; pour l&apos;IS ne peut pas revenir &agrave; l&apos;IR.
            </p>
            <p className="text-text-light mb-4">
              La SCI &agrave; l&apos;IS dispose certes de son propre m&eacute;canisme d&apos;amortissement
              comptable, mais celui-ci est diff&eacute;rent du Jeanbrun et ne pr&eacute;sente pas
              les m&ecirc;mes avantages (pas de d&eacute;ficit imputable sur le revenu global,
              plus-value calcul&eacute;e sur la valeur nette comptable).
            </p>
            <div className="bg-background-alt rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-text mb-3">R&eacute;sum&eacute; de la compatibilit&eacute;</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-light"><strong>SCI &agrave; l&apos;IR</strong> : compatible avec le Jeanbrun</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-light"><strong>SCI &agrave; l&apos;IS</strong> : incompatible avec le Jeanbrun</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="avantages" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              3. Avantages de la SCI avec le Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              Combiner SCI et Jeanbrun offre des avantages sp&eacute;cifiques par rapport &agrave;
              un investissement en nom propre :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                {
                  title: 'Gestion patrimoniale',
                  text: "La SCI s\u00e9pare la gestion du bien de la propri\u00e9t\u00e9 personnelle. Les d\u00e9cisions sont prises collectivement selon les statuts, facilitant la gestion \u00e0 plusieurs.",
                },
                {
                  title: 'Pr\u00e9paration de la transmission',
                  text: "Les parts de SCI se transmettent plus facilement que des biens immobiliers en direct. La donation de parts permet une transmission progressive et optimis\u00e9e fiscalement.",
                },
                {
                  title: 'Souplesse de r\u00e9partition',
                  text: "La r\u00e9partition des parts (et donc des avantages fiscaux) peut \u00eatre adapt\u00e9e. Un associ\u00e9 \u00e0 TMI \u00e9lev\u00e9e peut d\u00e9tenir plus de parts pour maximiser l'\u00e9conomie d'imp\u00f4t.",
                },
                {
                  title: 'Protection du patrimoine',
                  text: "La SCI constitue un \u00e9cran juridique entre le patrimoine immobilier et le patrimoine personnel des associ\u00e9s, offrant une protection en cas de difficult\u00e9s personnelles.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-background-alt rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-text mb-2">{item.title}</h3>
                  <p className="text-sm text-text-light">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section id="repartition" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              4. R&eacute;partition de l&apos;amortissement entre associ&eacute;s
            </h2>
            <p className="text-text-light mb-4">
              L&apos;amortissement Jeanbrun est calcul&eacute; au niveau de la SCI, puis
              r&eacute;parti entre les associ&eacute;s <strong>au prorata de leurs parts
              sociales</strong>. Il en va de m&ecirc;me pour les loyers, les charges d&eacute;ductibles
              et le d&eacute;ficit foncier.
            </p>
            <p className="text-text-light mb-4">
              Chaque associ&eacute; d&eacute;clare sa quote-part dans sa d&eacute;claration
              de revenus personnelle (formulaire 2044). L&apos;&eacute;conomie d&apos;imp&ocirc;t
              d&eacute;pend ensuite de la TMI propre de chaque associ&eacute;.
            </p>
            <div className="bg-background-alt rounded-xl p-5 border border-border mb-4">
              <h3 className="font-semibold text-text mb-3">Exemple de r&eacute;partition</h3>
              <p className="text-sm text-text-light mb-3">
                SCI avec 2 associ&eacute;s (60%/40%), bien &agrave; 200 000 &euro;, niveau Loc1 :
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left p-2">&Eacute;l&eacute;ment</th>
                      <th className="text-center p-2">Total SCI</th>
                      <th className="text-center p-2">Associ&eacute; A (60%)</th>
                      <th className="text-center p-2">Associ&eacute; B (40%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Amortissement annuel', '5 600 \u20ac', '3 360 \u20ac', '2 240 \u20ac'],
                      ['Loyers annuels', '7 200 \u20ac', '4 320 \u20ac', '2 880 \u20ac'],
                      ['Charges d\u00e9ductibles', '3 000 \u20ac', '1 800 \u20ac', '1 200 \u20ac'],
                      ['D\u00e9ficit foncier', '1 400 \u20ac', '840 \u20ac', '560 \u20ac'],
                    ].map(([element, total, a, b]) => (
                      <tr key={element} className="border-b border-border">
                        <td className="p-2 font-medium">{element}</td>
                        <td className="p-2 text-center">{total}</td>
                        <td className="p-2 text-center">{a}</td>
                        <td className="p-2 text-center">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-text-light">
              Si l&apos;associ&eacute; A est &agrave; la TMI de 41% et l&apos;associ&eacute; B
              &agrave; la TMI de 30%, l&apos;&eacute;conomie fiscale sera proportionnellement
              plus importante pour l&apos;associ&eacute; A. C&apos;est un levier d&apos;optimisation
              dans la r&eacute;partition des parts.
            </p>
          </section>

          {/* Section 5 */}
          <section id="transmission" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              5. SCI et transmission du patrimoine
            </h2>
            <p className="text-text-light mb-4">
              La SCI est un outil privil&eacute;gi&eacute; pour la transmission du patrimoine
              immobilier. Combin&eacute;e avec le Jeanbrun, elle permet de constituer un patrimoine
              locatif fiscalement optimis&eacute; tout en pr&eacute;parant sa transmission.
            </p>
            <p className="text-text-light mb-4">
              La donation de parts de SCI pr&eacute;sente plusieurs avantages par rapport &agrave;
              la donation d&apos;un bien immobilier en direct :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li><strong>D&eacute;cote pour illiquidit&eacute;</strong> : les parts de SCI sont g&eacute;n&eacute;ralement valoris&eacute;es avec une d&eacute;cote de 10 &agrave; 20% par rapport &agrave; la valeur du bien, r&eacute;duisant les droits de donation</li>
              <li><strong>Transmission progressive</strong> : vous pouvez donner des parts par tranches, en profitant de l&apos;abattement de 100 000 &euro; par parent et par enfant tous les 15 ans</li>
              <li><strong>Conservation du contr&ocirc;le</strong> : le g&eacute;rant conserve le pouvoir de gestion m&ecirc;me apr&egrave;s avoir donn&eacute; des parts, gr&acirc;ce au d&eacute;membrement de propri&eacute;t&eacute; (usufruit/nue-propri&eacute;t&eacute;)</li>
              <li><strong>Indivisibilit&eacute;</strong> : la SCI &eacute;vite l&apos;indivision qui peut compliquer la gestion et la transmission d&apos;un bien immobilier</li>
            </ul>
            <p className="text-text-light">
              Pour approfondir les aspects fiscaux du Jeanbrun, consultez notre page :{' '}
              <Link href="/fiscalite-jeanbrun" className="text-primary font-medium hover:underline">
                Fiscalit&eacute; du dispositif Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section id="pratique" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              6. Mise en &oelig;uvre pratique
            </h2>
            <p className="text-text-light mb-4">
              Voici les &eacute;tapes pour investir avec le Jeanbrun via une SCI &agrave; l&apos;IR :
            </p>
            <ol className="list-decimal list-inside space-y-3 text-text-light mb-4 ml-4">
              <li>
                <strong>Cr&eacute;er la SCI</strong> : r&eacute;daction des statuts (pr&eacute;voir
                une clause sur l&apos;objet locatif), immatriculation au RCS. Co&ucirc;t : 300 &agrave;
                2 500 &euro; selon le mode (en ligne ou via professionnel).
              </li>
              <li>
                <strong>V&eacute;rifier le r&eacute;gime fiscal</strong> : s&apos;assurer que la
                SCI est bien &agrave; l&apos;IR (r&eacute;gime par d&eacute;faut). Ne surtout pas
                opter pour l&apos;IS.
              </li>
              <li>
                <strong>Acqu&eacute;rir le bien</strong> : la SCI ach&egrave;te le bien (neuf ou
                ancien avec travaux) entre le 1er f&eacute;vrier 2026 et le 31 d&eacute;cembre 2028.
              </li>
              <li>
                <strong>Contracter le pr&ecirc;t</strong> : le cr&eacute;dit est souscrit au nom de
                la SCI, les associ&eacute;s se portent caution personnelle.
              </li>
              <li>
                <strong>Mettre en location</strong> : location nue, bail de 3 ans minimum, respect
                des plafonds de loyer.
              </li>
              <li>
                <strong>D&eacute;clarations fiscales</strong> : la SCI remplit la d&eacute;claration
                2072, chaque associ&eacute; reporte sa quote-part sur sa 2044.
              </li>
            </ol>
            <p className="text-text-light">
              Il est recommand&eacute; de se faire accompagner par un notaire ou un conseiller
              en gestion de patrimoine pour la structuration de la SCI et la r&eacute;daction
              des statuts. Pour en savoir plus sur le{' '}
              <Link href="/dispositif-jeanbrun" className="text-primary font-medium hover:underline">
                fonctionnement g&eacute;n&eacute;ral du dispositif Jeanbrun
              </Link>, consultez notre guide complet.
            </p>
          </section>

          {/* Section 7 */}
          <section id="exemple" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              7. Exemple chiffr&eacute; : SCI Jeanbrun &agrave; deux associ&eacute;s
            </h2>
            <div className="bg-background-alt rounded-xl p-6 border border-border mb-4">
              <h3 className="font-semibold text-text mb-4">Hypoth&egrave;ses</h3>
              <div className="space-y-2 mb-6">
                {[
                  ['Structure', 'SCI \u00e0 l\u2019IR, 2 associ\u00e9s (50/50)'],
                  ['Bien', 'Appartement neuf 250 000 \u20ac, zone A'],
                  ['Niveau de loyer', 'Interm\u00e9diaire (Loc1)'],
                  ['Financement', 'Cr\u00e9dit SCI 250 000 \u20ac sur 20 ans'],
                  ['TMI Associ\u00e9 A', '41%'],
                  ['TMI Associ\u00e9 B', '30%'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-text mb-4">&Eacute;conomie d&apos;imp&ocirc;t annuelle</h3>
              <div className="space-y-2">
                {[
                  ['Amortissement total SCI', '7 000 \u20ac/an'],
                  ['D\u00e9ficit foncier total SCI (avec charges)', '~10 000 \u20ac/an'],
                  ['Quote-part par associ\u00e9', '~5 000 \u20ac/an'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-text-light">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>&Eacute;conomie associ&eacute; A (TMI 41%)</span>
                    <span className="text-primary">2 910 &euro;/an</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span>&Eacute;conomie associ&eacute; B (TMI 30%)</span>
                    <span className="text-primary">2 360 &euro;/an</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
                    <span>&Eacute;conomie totale SCI sur 9 ans</span>
                    <span className="text-accent text-lg">~47 430 &euro;</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-text-light">
              Simulez votre propre investissement SCI avec notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur Jeanbrun gratuit
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
              Simulez votre investissement SCI Jeanbrun
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Calculez l&apos;amortissement, le d&eacute;ficit foncier et l&apos;&eacute;conomie
              d&apos;imp&ocirc;t pour votre projet SCI. Simulation gratuite.
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
