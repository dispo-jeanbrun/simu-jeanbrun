import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Jeanbrun ou LMNP en 2026 ? Comparatif d\u00e9taill\u00e9',
  description:
    'Faut-il investir en Jeanbrun ou en LMNP ? Comparaison fiscalit\u00e9, amortissement, plus-value, conditions. Avec simulateur comparatif.',
  alternates: { canonical: 'https://simu-jeanbrun.fr/jeanbrun-vs-lmnp' },
};

const faqItems = [
  {
    question:
      'Le Jeanbrun est-il plus avantageux que le LMNP en 2026 ?',
    answer:
      'Cela d\u00e9pend de votre profil. Le Jeanbrun est g\u00e9n\u00e9ralement plus avantageux pour les contribuables \u00e0 TMI \u00e9lev\u00e9e (30\u202f% et plus) qui souhaitent d\u00e9fiscaliser sur leurs revenus fonciers et b\u00e9n\u00e9ficier d\u2019une plus-value non major\u00e9e \u00e0 la revente. Le LMNP reste int\u00e9ressant pour ceux qui recherchent une rentabilit\u00e9 locative plus \u00e9lev\u00e9e gr\u00e2ce \u00e0 la location meubl\u00e9e, sans contrainte de plafond de loyer.',
  },
  {
    question:
      'Peut-on cumuler le Jeanbrun et le LMNP sur deux biens diff\u00e9rents ?',
    answer:
      'Oui, il est tout \u00e0 fait possible de d\u00e9tenir un bien sous le r\u00e9gime Jeanbrun et un autre en LMNP. Les deux dispositifs s\u2019appliquent \u00e0 des biens distincts : le Jeanbrun concerne la location nue et les revenus fonciers, tandis que le LMNP concerne la location meubl\u00e9e et les BIC. Ils ne sont pas cumulables sur un m\u00eame bien.',
  },
  {
    question:
      'Pourquoi la r\u00e9int\u00e9gration des amortissements LMNP change-t-elle la donne en 2026 ?',
    answer:
      'Depuis la loi de finances 2025, les amortissements d\u00e9duits en LMNP sont r\u00e9int\u00e9gr\u00e9s dans le calcul de la plus-value immobili\u00e8re lors de la revente. Concr\u00e8tement, si vous avez amorti 80\u202f000\u202f\u20ac sur un bien, cette somme vient majorer votre plus-value imposable. Le dispositif Jeanbrun \u00e9chappe totalement \u00e0 cette r\u00e8gle : les amortissements ne sont jamais r\u00e9int\u00e9gr\u00e9s.',
  },
  {
    question:
      'Quel est le r\u00e9gime fiscal le plus simple \u00e0 g\u00e9rer entre Jeanbrun et LMNP ?',
    answer:
      'Le Jeanbrun est fiscalement plus simple : les revenus sont d\u00e9clar\u00e9s en revenus fonciers (formulaire 2044) avec l\u2019amortissement en d\u00e9duction. Le LMNP n\u00e9cessite une comptabilit\u00e9 en BIC avec un bilan et un compte de r\u00e9sultat (liasse fiscale 2033), souvent avec l\u2019aide d\u2019un comptable sp\u00e9cialis\u00e9, ce qui engendre des frais suppl\u00e9mentaires de 400 \u00e0 800\u202f\u20ac par an.',
  },
  {
    question:
      'Peut-on passer d\u2019un LMNP \u00e0 un Jeanbrun sur le m\u00eame bien ?',
    answer:
      'Non, le passage d\u2019un r\u00e9gime \u00e0 l\u2019autre sur un m\u00eame bien n\u2019est pas pr\u00e9vu par le dispositif. Le Jeanbrun s\u2019applique aux acquisitions r\u00e9alis\u00e9es entre le 1er f\u00e9vrier 2026 et le 31 d\u00e9cembre 2028, et concerne la location nue. Un bien d\u00e9j\u00e0 lou\u00e9 en meubl\u00e9 (LMNP) ne peut pas basculer en Jeanbrun. En revanche, pour un nouvel investissement, vous pouvez choisir librement entre les deux r\u00e9gimes.',
  },
];

export default function JeanbrunVsLmnpPage() {
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
            <span className="text-text">Jeanbrun vs LMNP</span>
          </nav>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            Jeanbrun ou LMNP en 2026 : quel r&eacute;gime fiscal choisir pour votre investissement locatif ?
          </h1>

          {/* Introduction */}
          <p className="text-lg text-text-light mb-4">
            Le paysage de l&apos;investissement locatif en France conna&icirc;t un tournant majeur
            en 2026. D&apos;un c&ocirc;t&eacute;, le <Link href="/dispositif-jeanbrun" className="text-primary font-medium hover:underline">dispositif Jeanbrun</Link>,
            nouveau m&eacute;canisme d&apos;amortissement fiscal issu du PLF 2026, offre une
            d&eacute;duction directe sur les revenus fonciers avec un avantage cl&eacute; : la
            non-r&eacute;int&eacute;gration des amortissements dans la plus-value &agrave; la revente.
            De l&apos;autre, le LMNP (Loueur Meubl&eacute; Non Professionnel), r&eacute;gime
            historique de la location meubl&eacute;e, qui a vu sa fiscalit&eacute; durcie depuis
            la r&eacute;forme de 2025 imposant d&eacute;sormais la r&eacute;int&eacute;gration des
            amortissements dans le calcul de la plus-value.
          </p>
          <p className="text-lg text-text-light mb-4">
            Cette confrontation entre deux r&eacute;gimes fondamentalement diff&eacute;rents
            &mdash; location nue contre meubl&eacute;e, revenus fonciers contre BIC, loyers
            plafonn&eacute;s contre loyers libres &mdash; m&eacute;rite une analyse approfondie.
            Le choix entre Jeanbrun et LMNP d&eacute;pend de votre profil fiscal, de vos
            objectifs patrimoniaux et de votre strat&eacute;gie &agrave; long terme.
          </p>
          <p className="text-lg text-text-light mb-8">
            Dans ce comparatif d&eacute;taill&eacute;, nous passons en revue chaque aspect
            des deux dispositifs pour vous aider &agrave; faire le bon choix. Vous pouvez
            &eacute;galement utiliser notre{' '}
            <Link href="/simulateur" className="text-primary font-medium hover:underline">
              simulateur comparatif gratuit
            </Link>{' '}
            pour calculer pr&eacute;cis&eacute;ment l&apos;&eacute;conomie d&apos;imp&ocirc;t
            dans chaque sc&eacute;nario.
          </p>

          {/* Sommaire */}
          <div className="bg-background-alt rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-bold text-text mb-3">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#rappel-jeanbrun" className="text-primary hover:underline">1. Rappel du dispositif Jeanbrun</a></li>
              <li><a href="#rappel-lmnp" className="text-primary hover:underline">2. Rappel du LMNP (Loueur Meubl&eacute; Non Professionnel)</a></li>
              <li><a href="#comparaison-fiscalite" className="text-primary hover:underline">3. Comparaison de la fiscalit&eacute;</a></li>
              <li><a href="#plus-value" className="text-primary hover:underline">4. La question cruciale de la plus-value</a></li>
              <li><a href="#conditions-contraintes" className="text-primary hover:underline">5. Conditions et contraintes</a></li>
              <li><a href="#pour-qui-jeanbrun" className="text-primary hover:underline">6. Pour qui le Jeanbrun est-il plus adapt&eacute; ?</a></li>
              <li><a href="#pour-qui-lmnp" className="text-primary hover:underline">7. Pour qui le LMNP reste-t-il int&eacute;ressant ?</a></li>
              <li><a href="#tableau-comparatif" className="text-primary hover:underline">8. Tableau comparatif r&eacute;capitulatif</a></li>
              <li><a href="#faq" className="text-primary hover:underline">9. Questions fr&eacute;quentes</a></li>
            </ul>
          </div>

          {/* Section 1 - Rappel Jeanbrun */}
          <section id="rappel-jeanbrun" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              1. Rappel du dispositif Jeanbrun
            </h2>
            <p className="text-text-light mb-4">
              Le <strong>dispositif Jeanbrun</strong> est le nouveau m&eacute;canisme fiscal
              d&apos;investissement locatif introduit par le Projet de Loi de Finances 2026.
              Applicable aux acquisitions r&eacute;alis&eacute;es entre le <strong>1er f&eacute;vrier
              2026</strong> et le <strong>31 d&eacute;cembre 2028</strong>, il permet aux
              investisseurs de d&eacute;duire un amortissement annuel du prix de leur bien
              directement de leurs revenus fonciers.
            </p>

            <h3 className="text-lg font-semibold text-text mb-3">Principes cl&eacute;s du Jeanbrun</h3>
            <div className="space-y-3 mb-4">
              {[
                'Amortissement annuel de 3,5% \u00e0 5,5% de la base amortissable (80% du prix d\u2019acquisition)',
                'D\u00e9duction sur les revenus fonciers, cr\u00e9ant du d\u00e9ficit foncier imputable sur le revenu global',
                'Location nue obligatoire, \u00e0 titre de r\u00e9sidence principale du locataire',
                'Loyers plafonn\u00e9s selon la zone g\u00e9ographique et le niveau de loyer choisi',
                'Engagement de location de 9 ans minimum',
                'Bien neuf (VEFA) ou ancien avec travaux repr\u00e9sentant au moins 30% du prix',
                'Les amortissements ne sont PAS r\u00e9int\u00e9gr\u00e9s dans la plus-value \u00e0 la revente',
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
              Le taux d&apos;amortissement est progressif : plus le loyer est bas par rapport au
              march&eacute; (niveau interm&eacute;diaire, social ou tr&egrave;s social), plus
              l&apos;amortissement est &eacute;lev&eacute;. Pour une pr&eacute;sentation compl&egrave;te,
              consultez notre{' '}
              <Link href="/dispositif-jeanbrun" className="text-primary font-medium hover:underline">
                guide du dispositif Jeanbrun
              </Link>{' '}
              et notre page sur l&apos;
              <Link href="/amortissement-jeanbrun" className="text-primary font-medium hover:underline">
                amortissement Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 2 - Rappel LMNP */}
          <section id="rappel-lmnp" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              2. Rappel du LMNP (Loueur Meubl&eacute; Non Professionnel)
            </h2>
            <p className="text-text-light mb-4">
              Le statut de <strong>Loueur Meubl&eacute; Non Professionnel (LMNP)</strong> est un
              r&eacute;gime fiscal permettant aux particuliers de louer un bien immobilier
              meubl&eacute; tout en b&eacute;n&eacute;ficiant d&apos;une fiscalit&eacute;
              avantageuse. Historiquement, c&apos;est l&apos;un des dispositifs les plus
              populaires aupr&egrave;s des investisseurs immobiliers fran&ccedil;ais.
            </p>

            <h3 className="text-lg font-semibold text-text mb-3">Principes cl&eacute;s du LMNP</h3>
            <div className="space-y-3 mb-4">
              {[
                'Revenus d\u00e9clar\u00e9s en B\u00e9n\u00e9fices Industriels et Commerciaux (BIC), pas en revenus fonciers',
                'R\u00e9gime micro-BIC (abattement de 50%) ou r\u00e9gime r\u00e9el (amortissement du bien et du mobilier)',
                'Location meubl\u00e9e obligatoire (liste de meubles impos\u00e9e par d\u00e9cret)',
                'Aucun plafond de loyer : libert\u00e9 totale de fixation du loyer',
                'Pas de dur\u00e9e d\u2019engagement minimum (hors r\u00e9sidences de services)',
                'Amortissement comptable du bien (~3% par an) et du mobilier (~10-20% par an)',
                'Depuis 2025 : les amortissements sont r\u00e9int\u00e9gr\u00e9s dans le calcul de la plus-value \u00e0 la revente',
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
              La r&eacute;forme de 2025 a profond&eacute;ment modifi&eacute; l&apos;&eacute;quilibre
              du LMNP. Avant cette r&eacute;forme, les amortissements d&eacute;duits
              n&apos;&eacute;taient pas r&eacute;int&eacute;gr&eacute;s dans la plus-value,
              ce qui constituait le principal attrait du statut. D&eacute;sormais, la revente
              d&apos;un bien LMNP est fiscalement plus co&ucirc;teuse, ce qui change la donne
              pour les strat&eacute;gies patrimoniales &agrave; long terme.
            </p>
          </section>

          {/* Section 3 - Comparaison fiscalité */}
          <section id="comparaison-fiscalite" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              3. Comparaison de la fiscalit&eacute; : amortissement, BIC vs revenus fonciers
            </h2>
            <p className="text-text-light mb-4">
              La diff&eacute;rence fondamentale entre le Jeanbrun et le LMNP r&eacute;side dans
              le r&eacute;gime fiscal applicable. Le Jeanbrun s&apos;inscrit dans la cat&eacute;gorie
              des <strong>revenus fonciers</strong>, tandis que le LMNP rel&egrave;ve des
              <strong> B&eacute;n&eacute;fices Industriels et Commerciaux (BIC)</strong>.
            </p>

            <h3 className="text-lg font-semibold text-text mb-3">L&apos;amortissement Jeanbrun (revenus fonciers)</h3>
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
              <p className="text-text-light mb-3">
                L&apos;amortissement Jeanbrun est calcul&eacute; sur 80% du prix d&apos;acquisition
                (la part terrain de 20% n&apos;&eacute;tant pas amortissable). Il se d&eacute;duit
                directement des revenus fonciers et peut cr&eacute;er un <strong>d&eacute;ficit
                foncier</strong> imputable sur le revenu global &agrave; hauteur de 10 700 &euro;/an
                (ou 21 400 &euro; avec travaux de r&eacute;novation &eacute;nerg&eacute;tique).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left p-3">Niveau de loyer</th>
                      <th className="text-center p-3">Taux d&apos;amortissement</th>
                      <th className="text-center p-3">D&eacute;cote loyer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Interm&eacute;diaire</td>
                      <td className="p-3 text-center font-semibold text-primary">3,5% / an</td>
                      <td className="p-3 text-center">-15% vs march&eacute;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Social</td>
                      <td className="p-3 text-center font-semibold text-primary">4,5% / an</td>
                      <td className="p-3 text-center">-30% vs march&eacute;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Tr&egrave;s social</td>
                      <td className="p-3 text-center font-semibold text-primary">5,5% / an</td>
                      <td className="p-3 text-center">-45% vs march&eacute;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-light mt-3">
                Pour en savoir plus :{' '}
                <Link href="/amortissement-jeanbrun" className="text-primary hover:underline">
                  Amortissement Jeanbrun en d&eacute;tail
                </Link>
              </p>
            </div>

            <h3 className="text-lg font-semibold text-text mb-3">L&apos;amortissement LMNP (BIC)</h3>
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
              <p className="text-text-light mb-3">
                En LMNP au r&eacute;gime r&eacute;el, l&apos;amortissement est comptable et non
                fiscal. Le bien est amorti composant par composant (gros &oelig;uvre, &eacute;lectricit&eacute;,
                toiture, etc.) sur des dur&eacute;es de 20 &agrave; 50 ans, soit un taux moyen
                d&apos;environ 3% par an. Le mobilier est amorti sur 5 &agrave; 10 ans.
              </p>
              <p className="text-text-light mb-3">
                L&apos;amortissement LMNP ne peut pas cr&eacute;er de d&eacute;ficit BIC : il ne
                s&apos;impute que sur les revenus locatifs BIC positifs. L&apos;exc&eacute;dent
                d&apos;amortissement est reportable sans limite de temps, mais ne r&eacute;duit
                pas directement l&apos;imp&ocirc;t sur le revenu global.
              </p>
              <p className="text-text-light">
                <strong>Cons&eacute;quence pratique :</strong> le Jeanbrun permet de r&eacute;duire
                votre imp&ocirc;t sur le revenu global (via le d&eacute;ficit foncier), alors
                que le LMNP permet uniquement de r&eacute;duire &agrave; z&eacute;ro l&apos;imposition
                sur les loyers per&ccedil;us, sans impact sur les autres revenus.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-text mb-3">Exemple chiffr&eacute; comparatif</h3>
            <div className="bg-background-alt rounded-xl p-6 border border-border mb-4">
              <p className="text-sm text-text-light mb-4">
                <strong>Hypoth&egrave;se :</strong> Acquisition d&apos;un bien &agrave; 200 000 &euro;,
                TMI 30%, loyer annuel de 7 200 &euro;.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-text mb-2">Jeanbrun (niveau interm&eacute;diaire)</h4>
                  <div className="space-y-1 text-sm text-text-light">
                    <div className="flex justify-between">
                      <span>Base amortissable (80%)</span>
                      <span className="font-medium">160 000 &euro;</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amortissement annuel (3,5%)</span>
                      <span className="font-medium">5 600 &euro;</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Loyer annuel</span>
                      <span className="font-medium">7 200 &euro;</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Charges d&eacute;ductibles (estim&eacute;es)</span>
                      <span className="font-medium">3 500 &euro;</span>
                    </div>
                    <div className="border-t border-border pt-1 flex justify-between font-semibold">
                      <span>R&eacute;sultat foncier</span>
                      <span className="text-primary">-1 900 &euro;</span>
                    </div>
                    <p className="text-xs mt-2">
                      D&eacute;ficit foncier imputable sur le revenu global = &eacute;conomie
                      d&apos;imp&ocirc;t de <strong className="text-primary">~817 &euro;/an</strong> (30% + 17,2% PS).
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-2">LMNP (r&eacute;gime r&eacute;el)</h4>
                  <div className="space-y-1 text-sm text-text-light">
                    <div className="flex justify-between">
                      <span>Base amortissable (~85%)</span>
                      <span className="font-medium">170 000 &euro;</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amortissement annuel (~3%)</span>
                      <span className="font-medium">5 100 &euro;</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Loyer annuel (meubl&eacute;, libre)</span>
                      <span className="font-medium">8 400 &euro;</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Charges d&eacute;ductibles (estim&eacute;es)</span>
                      <span className="font-medium">3 800 &euro;</span>
                    </div>
                    <div className="border-t border-border pt-1 flex justify-between font-semibold">
                      <span>R&eacute;sultat BIC</span>
                      <span className="text-primary">-500 &euro;</span>
                    </div>
                    <p className="text-xs mt-2">
                      R&eacute;sultat n&eacute;gatif : 0 &euro; d&apos;imp&ocirc;t sur les loyers.
                      Mais <strong>aucune r&eacute;duction</strong> sur le revenu global.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Plus-value */}
          <section id="plus-value" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              4. La question cruciale de la plus-value &agrave; la revente
            </h2>
            <p className="text-text-light mb-4">
              C&apos;est <strong>le point de diff&eacute;renciation majeur</strong> entre le
              Jeanbrun et le LMNP en 2026. La mani&egrave;re dont les amortissements sont
              trait&eacute;s lors de la revente du bien a un impact consid&eacute;rable sur
              la rentabilit&eacute; globale de l&apos;investissement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary font-bold text-sm">JB</span>
                  <h3 className="font-semibold text-text">Jeanbrun : plus-value prot&eacute;g&eacute;e</h3>
                </div>
                <p className="text-sm text-text-light mb-3">
                  Les amortissements d&eacute;duits dans le cadre du dispositif Jeanbrun
                  <strong> ne sont pas r&eacute;int&eacute;gr&eacute;s</strong> dans le calcul
                  de la plus-value immobili&egrave;re. Vous b&eacute;n&eacute;ficiez du r&eacute;gime
                  classique des plus-values des particuliers :
                </p>
                <ul className="list-disc list-inside text-sm text-text-light space-y-1">
                  <li>Abattement pour dur&eacute;e de d&eacute;tention</li>
                  <li>Exon&eacute;ration totale apr&egrave;s 22 ans (IR) et 30 ans (PS)</li>
                  <li>Plus-value calcul&eacute;e sur le prix d&apos;acquisition r&eacute;el</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-secondary/10 rounded-lg text-secondary font-bold text-sm">LM</span>
                  <h3 className="font-semibold text-text">LMNP : amortissements r&eacute;int&eacute;gr&eacute;s (depuis 2025)</h3>
                </div>
                <p className="text-sm text-text-light mb-3">
                  Depuis la loi de finances 2025, les amortissements d&eacute;duits en LMNP sont
                  <strong> r&eacute;int&eacute;gr&eacute;s</strong> dans le calcul de la plus-value
                  immobili&egrave;re. Concr&egrave;tement :
                </p>
                <ul className="list-disc list-inside text-sm text-text-light space-y-1">
                  <li>Le prix d&apos;acquisition est minor&eacute; des amortissements d&eacute;duits</li>
                  <li>La plus-value imposable est donc artificiellement gonfl&eacute;e</li>
                  <li>L&apos;imp&ocirc;t &agrave; la revente peut &ecirc;tre significativement plus &eacute;lev&eacute;</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-text mb-3">Exemple d&apos;impact sur la plus-value</h3>
            <div className="bg-background-alt rounded-xl p-6 border border-border mb-4">
              <p className="text-sm text-text-light mb-4">
                <strong>Hypoth&egrave;se :</strong> Bien achet&eacute; 200 000 &euro;, revendu
                260 000 &euro; apr&egrave;s 12 ans. Amortissements cumul&eacute;s : 60 000 &euro;.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-text mb-2">Jeanbrun</h4>
                  <div className="space-y-1 text-sm text-text-light">
                    <div className="flex justify-between">
                      <span>Plus-value brute</span>
                      <span className="font-medium">60 000 &euro;</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R&eacute;int&eacute;gration amortissements</span>
                      <span className="font-medium text-primary">0 &euro;</span>
                    </div>
                    <div className="border-t border-border pt-1 flex justify-between font-semibold">
                      <span>Plus-value imposable (avant abattement)</span>
                      <span>60 000 &euro;</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-2">LMNP</h4>
                  <div className="space-y-1 text-sm text-text-light">
                    <div className="flex justify-between">
                      <span>Plus-value brute</span>
                      <span className="font-medium">60 000 &euro;</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R&eacute;int&eacute;gration amortissements</span>
                      <span className="font-medium text-secondary">+ 60 000 &euro;</span>
                    </div>
                    <div className="border-t border-border pt-1 flex justify-between font-semibold">
                      <span>Plus-value imposable (avant abattement)</span>
                      <span>120 000 &euro;</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-light mt-4">
                Dans cet exemple, la plus-value imposable en LMNP est <strong>deux fois plus
                &eacute;lev&eacute;e</strong> qu&apos;en Jeanbrun, soit potentiellement plus de
                10 000 &euro; d&apos;imp&ocirc;t suppl&eacute;mentaire &agrave; la revente
                (19% IR + 17,2% pr&eacute;l&egrave;vements sociaux, avant abattements).
              </p>
            </div>
          </section>

          {/* Section 5 - Conditions et contraintes */}
          <section id="conditions-contraintes" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              5. Conditions et contraintes : les diff&eacute;rences pratiques
            </h2>
            <p className="text-text-light mb-6">
              Au-del&agrave; de la fiscalit&eacute; pure, les deux r&eacute;gimes imposent
              des contraintes op&eacute;rationnelles tr&egrave;s diff&eacute;rentes qui impactent
              la gestion quotidienne de votre investissement.
            </p>

            <h3 className="text-lg font-semibold text-text mb-3">Location nue vs meubl&eacute;e</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <h4 className="font-semibold text-text mb-2">Jeanbrun : location nue</h4>
                <ul className="text-sm text-text-light space-y-2">
                  <li>Le bien est lou&eacute; <strong>vide</strong> (sans meubles)</li>
                  <li>Bail de 3 ans minimum (6 ans pour les personnes morales)</li>
                  <li>Pr&eacute;avis de 3 mois pour le locataire</li>
                  <li>Le locataire doit en faire sa r&eacute;sidence principale</li>
                  <li>Pas d&apos;investissement mobilier n&eacute;cessaire</li>
                  <li>Gestion locative plus simple</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <h4 className="font-semibold text-text mb-2">LMNP : location meubl&eacute;e</h4>
                <ul className="text-sm text-text-light space-y-2">
                  <li>Le bien doit &ecirc;tre <strong>meubl&eacute;</strong> (liste obligatoire par d&eacute;cret)</li>
                  <li>Bail de 1 an (9 mois pour les &eacute;tudiants)</li>
                  <li>Pr&eacute;avis de 1 mois pour le locataire</li>
                  <li>Location possible en r&eacute;sidence principale, &eacute;tudiante ou saisonni&egrave;re</li>
                  <li>Investissement mobilier initial de 3 000 &agrave; 8 000 &euro;</li>
                  <li>Turnover locataire plus &eacute;lev&eacute;, gestion plus active</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-text mb-3">Loyers plafonn&eacute;s vs libres</h3>
            <p className="text-text-light mb-4">
              Le Jeanbrun impose des <strong>plafonds de loyer</strong> d&eacute;finis par zone
              g&eacute;ographique et par niveau de loyer. En zone A bis &agrave; Paris, le
              plafond interm&eacute;diaire se situe autour de 17 &euro;/m&sup2;/mois, tandis
              qu&apos;en zone B2 il descend &agrave; environ 8 &euro;/m&sup2;/mois. Ces plafonds
              repr&eacute;sentent g&eacute;n&eacute;ralement une d&eacute;cote de 15% &agrave;
              45% par rapport au march&eacute;.
            </p>
            <p className="text-text-light mb-4">
              Le LMNP, en revanche, offre une <strong>libert&eacute; totale</strong> de fixation
              du loyer. Le propri&eacute;taire peut fixer le loyer au prix du march&eacute;, voire
              au-dessus en location saisonni&egrave;re. Cette libert&eacute; se traduit souvent
              par une rentabilit&eacute; locative brute plus &eacute;lev&eacute;e.
            </p>
            <p className="text-text-light mb-6">
              Pour conna&icirc;tre les plafonds pr&eacute;cis de votre zone, consultez notre page{' '}
              <Link href="/plafond-loyer-jeanbrun" className="text-primary font-medium hover:underline">
                Plafonds de loyer Jeanbrun par zone
              </Link>.
            </p>

            <h3 className="text-lg font-semibold text-text mb-3">Dur&eacute;e d&apos;engagement</h3>
            <p className="text-text-light mb-4">
              Le Jeanbrun exige un <strong>engagement de location de 9 ans</strong> minimum.
              Tout manquement (vente anticip&eacute;e, cessation de location, non-respect
              des plafonds) entra&icirc;ne la remise en cause de l&apos;avantage fiscal.
            </p>
            <p className="text-text-light">
              Le LMNP, lui, <strong>n&apos;impose aucune dur&eacute;e d&apos;engagement</strong> (hors
              cas sp&eacute;cifiques des r&eacute;sidences de services avec bail commercial).
              Vous pouvez revendre &agrave; tout moment sans p&eacute;nalit&eacute; fiscale
              li&eacute;e au dispositif.
            </p>
          </section>

          {/* Section 6 - Pour qui Jeanbrun */}
          <section id="pour-qui-jeanbrun" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              6. Pour qui le Jeanbrun est-il plus adapt&eacute; ?
            </h2>
            <p className="text-text-light mb-4">
              Le dispositif Jeanbrun est particuli&egrave;rement adapt&eacute; aux profils
              d&apos;investisseurs suivants :
            </p>
            <div className="space-y-4 mb-4">
              {[
                {
                  title: 'Contribuables \u00e0 TMI \u00e9lev\u00e9e (30%, 41% ou 45%)',
                  text: 'Le d\u00e9ficit foncier g\u00e9n\u00e9r\u00e9 par l\u2019amortissement s\u2019impute sur le revenu global. Plus votre TMI est \u00e9lev\u00e9e, plus l\u2019\u00e9conomie d\u2019imp\u00f4t est importante en valeur absolue.',
                },
                {
                  title: 'Investisseurs avec une vision patrimoniale long terme',
                  text: 'La non-r\u00e9int\u00e9gration des amortissements dans la plus-value rend le Jeanbrun particuli\u00e8rement attractif pour ceux qui pr\u00e9voient de revendre apr\u00e8s la p\u00e9riode d\u2019engagement.',
                },
                {
                  title: 'Investisseurs recherchant la simplicit\u00e9 de gestion',
                  text: 'La location nue implique moins de turnover, pas d\u2019investissement mobilier et une comptabilit\u00e9 plus simple (revenus fonciers vs BIC).',
                },
                {
                  title: 'Propri\u00e9taires d\u2019une SCI \u00e0 l\u2019IR',
                  text: 'Le Jeanbrun est compatible avec les SCI \u00e0 l\u2019IR, ce qui n\u2019est pas le cas du LMNP. C\u2019est un atout majeur pour la gestion patrimoniale familiale.',
                },
                {
                  title: 'Investisseurs dans l\u2019ancien avec travaux',
                  text: 'Le Jeanbrun est accessible dans l\u2019ancien d\u00e8s lors que les travaux repr\u00e9sentent 30% du prix. Combin\u00e9 au d\u00e9ficit foncier major\u00e9 pour la r\u00e9novation \u00e9nerg\u00e9tique (21 400 \u20ac), c\u2019est un levier puissant.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-background-alt rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                  <p className="text-sm text-text-light">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-text-light">
              Pour &eacute;valuer l&apos;impact concret du Jeanbrun sur votre situation, utilisez
              notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur Jeanbrun gratuit
              </Link>{' '}
              qui int&egrave;gre votre TMI et calcule le d&eacute;ficit foncier g&eacute;n&eacute;r&eacute;.
              Consultez &eacute;galement notre page{' '}
              <Link href="/fiscalite-jeanbrun" className="text-primary font-medium hover:underline">
                Fiscalit&eacute; Jeanbrun
              </Link>{' '}
              pour une analyse compl&egrave;te.
            </p>
          </section>

          {/* Section 7 - Pour qui LMNP */}
          <section id="pour-qui-lmnp" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              7. Pour qui le LMNP reste-t-il int&eacute;ressant ?
            </h2>
            <p className="text-text-light mb-4">
              Malgr&eacute; la r&eacute;forme de 2025, le LMNP conserve des atouts pour certains
              profils d&apos;investisseurs :
            </p>
            <div className="space-y-4 mb-4">
              {[
                {
                  title: 'Investisseurs recherchant une rentabilit\u00e9 locative maximale',
                  text: 'L\u2019absence de plafond de loyer permet de maximiser les revenus locatifs, notamment dans les zones tendues o\u00f9 la demande de meubl\u00e9 est forte (\u00e9tudiants, cadres en mobilit\u00e9).',
                },
                {
                  title: 'Investisseurs en location saisonni\u00e8re',
                  text: 'Le LMNP permet la location courte dur\u00e9e (Airbnb, saisonni\u00e8re) avec des loyers tr\u00e8s sup\u00e9rieurs au march\u00e9 locatif classique. Le Jeanbrun impose la location longue dur\u00e9e nue.',
                },
                {
                  title: 'Investisseurs avec des revenus locatifs existants',
                  text: 'Si vous avez d\u00e9j\u00e0 des revenus BIC importants, le LMNP au r\u00e9gime r\u00e9el permet de les neutraliser gr\u00e2ce \u00e0 l\u2019amortissement, m\u00eame si celui-ci est d\u00e9sormais r\u00e9int\u00e9gr\u00e9 \u00e0 la revente.',
                },
                {
                  title: 'Investisseurs qui ne pr\u00e9voient pas de revendre',
                  text: 'Si vous souhaitez conserver le bien \u00e0 tr\u00e8s long terme (transmission), la r\u00e9int\u00e9gration des amortissements dans la plus-value a moins d\u2019impact puisqu\u2019il n\u2019y a pas de revente.',
                },
                {
                  title: 'Investisseurs souhaitant une flexibilit\u00e9 maximale',
                  text: 'Pas de dur\u00e9e d\u2019engagement, pas de plafond de loyer, pas de condition sur le type de bien : le LMNP offre une libert\u00e9 totale dans la gestion de l\u2019investissement.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-background-alt rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                  <p className="text-sm text-text-light">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 - Tableau comparatif */}
          <section id="tableau-comparatif" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              8. Tableau comparatif r&eacute;capitulatif Jeanbrun vs LMNP
            </h2>
            <p className="text-text-light mb-6">
              Voici un r&eacute;capitulatif complet des diff&eacute;rences entre le dispositif
              Jeanbrun et le LMNP en 2026 :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3 min-w-[180px]">Crit&egrave;re</th>
                    <th className="text-center p-3 min-w-[200px]">Jeanbrun</th>
                    <th className="text-center p-3 min-w-[200px]">LMNP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Type de location', 'Nue (non meubl\u00e9e)', 'Meubl\u00e9e'],
                    ['Cat\u00e9gorie fiscale', 'Revenus fonciers', 'BIC (B\u00e9n\u00e9fices Industriels et Commerciaux)'],
                    ['Taux d\u2019amortissement', '3,5% \u00e0 5,5% / an', '~3% / an (composant par composant)'],
                    ['D\u00e9ficit imputable sur revenu global', 'Oui (d\u00e9ficit foncier, 10 700 \u20ac/an)', 'Non (d\u00e9ficit BIC report\u00e9 uniquement)'],
                    ['R\u00e9int\u00e9gration amortissements (plus-value)', 'Non', 'Oui (depuis 2025)'],
                    ['Plafond de loyer', 'Oui (par zone et niveau)', 'Non (loyer libre)'],
                    ['Dur\u00e9e d\u2019engagement', '9 ans minimum', 'Aucune'],
                    ['Type de bien', 'Neuf ou ancien avec travaux (\u226530%)', 'Tout type de bien'],
                    ['R\u00e9sidence principale locataire', 'Obligatoire', 'Non obligatoire'],
                    ['Compatible SCI \u00e0 l\u2019IR', 'Oui', 'Non'],
                    ['Comptabilit\u00e9 requise', 'D\u00e9claration 2044 (simple)', 'Liasse fiscale 2033 (comptable)'],
                    ['Co\u00fbt comptable annuel', '0 \u00e0 200 \u20ac', '400 \u00e0 800 \u20ac'],
                    ['P\u00e9riode d\u2019application', 'F\u00e9vrier 2026 \u2013 D\u00e9cembre 2028', 'Permanent (statut fiscal)'],
                    ['Location saisonni\u00e8re possible', 'Non', 'Oui'],
                    ['Investissement mobilier', 'Non requis', '3 000 \u00e0 8 000 \u20ac'],
                  ].map(([critere, jb, lmnp]) => (
                    <tr key={critere} className="border-b border-border">
                      <td className="p-3 font-medium text-text">{critere}</td>
                      <td className="p-3 text-center text-text-light">{jb}</td>
                      <td className="p-3 text-center text-text-light">{lmnp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-5">
              <p className="text-sm text-text">
                <strong>En r&eacute;sum&eacute; :</strong> le Jeanbrun est plus avantageux pour
                les contribuables &agrave; TMI &eacute;lev&eacute;e recherchant une
                d&eacute;fiscalisation sur le revenu global et une protection de la
                plus-value. Le LMNP reste pertinent pour maximiser la rentabilit&eacute;
                locative brute sans contrainte de plafond ni de dur&eacute;e d&apos;engagement.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-6">
              9. Questions fr&eacute;quentes : Jeanbrun vs LMNP
            </h2>
            <Accordion items={faqItems} />
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Comparez Jeanbrun et LMNP sur votre projet
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Notre simulateur calcule votre &eacute;conomie d&apos;imp&ocirc;t en Jeanbrun
              et compare avec le LMNP. R&eacute;sultat personnalis&eacute; en 2 minutes.
            </p>
            <Link
              href="/simulateur"
              className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-all shadow-lg text-lg"
            >
              Lancer ma simulation comparative
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
