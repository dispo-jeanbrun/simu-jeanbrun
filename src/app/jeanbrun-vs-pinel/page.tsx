import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Jeanbrun vs Pinel 2026 : quel dispositif choisir ?',
  description:
    'Comparatif complet Jeanbrun vs Pinel. Le dispositif Pinel a pris fin en 2024, le Jeanbrun le remplace avec l\u2019amortissement fiscal. Guide d\u00e9taill\u00e9.',
  alternates: { canonical: 'https://simu-jeanbrun.fr/jeanbrun-vs-pinel' },
};

const faqItems = [
  {
    question: 'Le dispositif Pinel existe-t-il encore en 2026 ?',
    answer:
      "Non. Le dispositif Pinel a d\u00e9finitivement pris fin le 31 d\u00e9cembre 2024. Aucune nouvelle acquisition ne peut b\u00e9n\u00e9ficier du Pinel depuis cette date. Seuls les engagements en cours continuent de produire leurs effets jusqu'\u00e0 leur terme.",
  },
  {
    question: 'Puis-je passer mon investissement Pinel en Jeanbrun ?',
    answer:
      "Non, un bien acquis sous le dispositif Pinel ne peut pas basculer en dispositif Jeanbrun. Les deux r\u00e9gimes sont distincts et non cumulables. Cependant, une fois votre engagement Pinel termin\u00e9, vous pouvez revendre le bien et r\u00e9investir dans un nouveau projet \u00e9ligible au Jeanbrun.",
  },
  {
    question: 'Le Jeanbrun est-il vraiment plus avantageux que le Pinel ?',
    answer:
      "Pour la majorit\u00e9 des profils, oui. Le Jeanbrun offre un amortissement annuel r\u00e9current (3,5% \u00e0 5,5%) qui cr\u00e9e du d\u00e9ficit foncier chaque ann\u00e9e, alors que le Pinel offrait une r\u00e9duction d'imp\u00f4t fig\u00e9e \u00e0 2% puis 1% par an. De plus, le Jeanbrun couvre le neuf et l'ancien avec travaux, et les amortissements ne sont pas r\u00e9int\u00e9gr\u00e9s dans la plus-value.",
  },
  {
    question: 'Je suis un ancien investisseur Pinel, que faire maintenant ?',
    answer:
      "Si votre engagement Pinel est termin\u00e9, vous pouvez conserver votre bien en location nue classique, le revendre, ou investir dans un nouveau projet \u00e9ligible au Jeanbrun. Notre simulateur vous permet de chiffrer pr\u00e9cis\u00e9ment l'\u00e9conomie d'imp\u00f4t d'un nouvel investissement sous le dispositif Jeanbrun.",
  },
];

export default function JeanbrunVsPinelPage() {
  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Jeanbrun vs Pinel 2026 : quel dispositif choisir ?',
            description:
              "Comparatif complet Jeanbrun vs Pinel. Le dispositif Pinel a pris fin en 2024, le Jeanbrun le remplace avec l\u2019amortissement fiscal. Guide détaillé.",
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
            <span className="text-text">Jeanbrun vs Pinel</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            Jeanbrun vs Pinel 2026 : quel dispositif choisir pour investir dans l&apos;immobilier locatif ?
          </h1>

          {/* Introduction */}
          <p className="text-lg text-text-light mb-4">
            Le dispositif Pinel, pilier de la d&eacute;fiscalisation immobili&egrave;re en France
            pendant pr&egrave;s de dix ans, a d&eacute;finitivement pris fin le 31 d&eacute;cembre
            2024. Depuis le 1er f&eacute;vrier 2026, c&apos;est le{' '}
            <Link href="/dispositif-jeanbrun" className="text-primary font-medium hover:underline">
              dispositif Jeanbrun
            </Link>{' '}
            qui prend le relais en mati&egrave;re d&apos;investissement locatif avec avantage fiscal.
          </p>
          <p className="text-lg text-text-light mb-8">
            Mais quelles sont les diff&eacute;rences fondamentales entre ces deux m&eacute;canismes ?
            Le Jeanbrun est-il r&eacute;ellement plus avantageux ? Que faire si vous aviez un
            investissement Pinel ? Ce guide comparatif complet r&eacute;pond &agrave; toutes vos
            questions.
          </p>

          {/* Sommaire */}
          <div className="bg-background-alt rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-bold text-text mb-3">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#fin-pinel" className="text-primary hover:underline">1. Fin du Pinel : rappel historique</a></li>
              <li><a href="#jeanbrun-successeur" className="text-primary hover:underline">2. Le Jeanbrun : le successeur du Pinel</a></li>
              <li><a href="#comparaison-mecanismes" className="text-primary hover:underline">3. Comparaison des m&eacute;canismes fiscaux</a></li>
              <li><a href="#avantages-jeanbrun" className="text-primary hover:underline">4. Avantages du Jeanbrun par rapport au Pinel</a></li>
              <li><a href="#tableau-comparatif" className="text-primary hover:underline">5. Tableau comparatif d&eacute;taill&eacute;</a></li>
              <li><a href="#basculer-pinel" className="text-primary hover:underline">6. Les anciens investisseurs Pinel peuvent-ils basculer ?</a></li>
              <li><a href="#faq" className="text-primary hover:underline">7. Questions fr&eacute;quentes</a></li>
            </ul>
          </div>

          {/* Section 1 - Fin du Pinel */}
          <section id="fin-pinel" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              1. Fin du Pinel : rappel historique
            </h2>
            <p className="text-text-light mb-4">
              Le dispositif Pinel a &eacute;t&eacute; introduit par la loi de finances 2015, en
              remplacement du dispositif Duflot. Il permettait aux investisseurs d&apos;obtenir une
              <strong> r&eacute;duction d&apos;imp&ocirc;t directe</strong> en contrepartie d&apos;un
              engagement de location d&apos;un bien neuf pendant 6, 9 ou 12 ans, avec des loyers
              plafonn&eacute;s.
            </p>
            <p className="text-text-light mb-4">
              Les taux de r&eacute;duction d&apos;imp&ocirc;t Pinel ont &eacute;volu&eacute; au fil
              du temps. &Agrave; son lancement, le dispositif offrait 12% du prix du bien sur 6 ans,
              18% sur 9 ans et 21% sur 12 ans. Ces taux ont &eacute;t&eacute; progressivement
              r&eacute;duits &agrave; partir de 2023, passant &agrave; 10,5%, 15% et 17,5% en 2023,
              puis &agrave; 9%, 12% et 14% en 2024 (sauf pour le &laquo; Pinel+ &raquo; qui
              maintenait les anciens taux sous conditions strictes de performance &eacute;nerg&eacute;tique).
            </p>
            <p className="text-text-light mb-4">
              Le 31 d&eacute;cembre 2024, le dispositif Pinel a d&eacute;finitivement pris fin. Aucun
              acte authentique sign&eacute; apr&egrave;s cette date ne peut ouvrir droit &agrave; la
              r&eacute;duction d&apos;imp&ocirc;t Pinel. Seuls les investisseurs ayant acquis avant
              cette &eacute;ch&eacute;ance continuent de b&eacute;n&eacute;ficier de leurs avantages
              fiscaux jusqu&apos;au terme de leur p&eacute;riode d&apos;engagement.
            </p>
            <p className="text-text-light">
              La disparition du Pinel a laiss&eacute; un vide dans l&apos;arsenal fiscal de
              l&apos;investissement locatif, combl&eacute; depuis f&eacute;vrier 2026 par le
              dispositif Jeanbrun, issu du Projet de Loi de Finances 2026.
            </p>
          </section>

          {/* Section 2 - Le Jeanbrun successeur */}
          <section id="jeanbrun-successeur" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              2. Le Jeanbrun : le successeur du Pinel
            </h2>
            <p className="text-text-light mb-4">
              Le dispositif Jeanbrun, du nom du d&eacute;put&eacute; porteur de l&apos;amendement au
              PLF 2026, constitue le nouveau cadre fiscal de l&apos;investissement locatif en France.
              Applicable du 1er f&eacute;vrier 2026 au 31 d&eacute;cembre 2028, il adopte une
              approche radicalement diff&eacute;rente de celle du Pinel.
            </p>
            <p className="text-text-light mb-4">
              L&agrave; o&ugrave; le Pinel offrait une r&eacute;duction d&apos;imp&ocirc;t
              calcul&eacute;e en pourcentage du prix d&apos;acquisition, le Jeanbrun repose sur un
              m&eacute;canisme d&apos;<strong>amortissement fiscal</strong>. L&apos;investisseur peut
              d&eacute;duire chaque ann&eacute;e un pourcentage de la valeur de son bien (entre 3,5%
              et 5,5% selon le niveau de loyer choisi) de ses revenus fonciers, cr&eacute;ant ainsi
              un <strong>d&eacute;ficit foncier</strong> qui r&eacute;duit l&apos;imp&ocirc;t sur le
              revenu.
            </p>
            <p className="text-text-light mb-4">
              Le dispositif s&apos;inspire du syst&egrave;me Loc&apos;Avantages avec trois niveaux de
              loyer : interm&eacute;diaire (-15% par rapport au march&eacute;), social (-30%) et
              tr&egrave;s social (-45%). Plus le loyer est bas, plus le taux d&apos;amortissement est
              &eacute;lev&eacute;, cr&eacute;ant une incitation &agrave; proposer des loyers
              accessibles.
            </p>
            <p className="text-text-light">
              Pour comprendre le fonctionnement d&eacute;taill&eacute; du dispositif, consultez notre{' '}
              <Link href="/dispositif-jeanbrun" className="text-primary font-medium hover:underline">
                guide complet du dispositif Jeanbrun
              </Link>{' '}
              ainsi que les{' '}
              <Link href="/conditions-jeanbrun" className="text-primary font-medium hover:underline">
                conditions d&apos;&eacute;ligibilit&eacute;
              </Link>.
            </p>
          </section>

          {/* Section 3 - Comparaison des mécanismes */}
          <section id="comparaison-mecanismes" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              3. Comparaison des m&eacute;canismes fiscaux
            </h2>

            <h3 className="text-xl font-semibold text-text mb-3">
              Le Pinel : une r&eacute;duction d&apos;imp&ocirc;t directe
            </h3>
            <p className="text-text-light mb-4">
              Le Pinel fonctionnait comme un <strong>cr&eacute;dit d&apos;imp&ocirc;t
              &eacute;tal&eacute;</strong>. L&apos;investisseur b&eacute;n&eacute;ficiait d&apos;une
              r&eacute;duction d&apos;imp&ocirc;t annuelle fixe, calcul&eacute;e sur le prix
              d&apos;acquisition du bien (plafonn&eacute; &agrave; 300 000 &euro; et
              5 500 &euro;/m&sup2;). La r&eacute;duction &eacute;tait de 2% du prix par an pendant
              les 9 premi&egrave;res ann&eacute;es, puis 1% par an les ann&eacute;es suivantes (taux
              initiaux).
            </p>
            <p className="text-text-light mb-4">
              Ce m&eacute;canisme &eacute;tait simple &agrave; comprendre mais pr&eacute;sentait
              plusieurs limites : la r&eacute;duction &eacute;tait soumise au plafonnement global des
              niches fiscales de 10 000 &euro;/an, le dispositif &eacute;tait r&eacute;serv&eacute;
              au neuf uniquement, et les taux ont &eacute;t&eacute; r&eacute;duits progressivement
              rendant le dispositif moins attractif en fin de vie.
            </p>

            <h3 className="text-xl font-semibold text-text mb-3">
              Le Jeanbrun : amortissement et d&eacute;ficit foncier
            </h3>
            <p className="text-text-light mb-4">
              Le Jeanbrun fonctionne via l&apos;<strong>amortissement du bien
              immobilier</strong>. Chaque ann&eacute;e, l&apos;investisseur d&eacute;duit un
              pourcentage de la base amortissable (80% du prix d&apos;acquisition + travaux) de ses
              revenus fonciers. Combin&eacute; aux charges d&eacute;ductibles classiques
              (int&eacute;r&ecirc;ts d&apos;emprunt, charges de copropri&eacute;t&eacute;, taxe
              fonci&egrave;re), cet amortissement g&eacute;n&egrave;re un d&eacute;ficit foncier
              imputable sur le revenu global.
            </p>
            <p className="text-text-light mb-4">
              L&apos;avantage fiscal d&eacute;pend donc de la tranche marginale d&apos;imposition
              (TMI) de l&apos;investisseur : plus la TMI est &eacute;lev&eacute;e, plus
              l&apos;&eacute;conomie d&apos;imp&ocirc;t est importante. Pour un contribuable &agrave;
              41% de TMI, chaque euro de d&eacute;ficit foncier g&eacute;n&egrave;re 41 centimes
              d&apos;&eacute;conomie d&apos;imp&ocirc;t (plus 17,2% de pr&eacute;l&egrave;vements
              sociaux &eacute;conomis&eacute;s sur les revenus fonciers neutralis&eacute;s).
            </p>
            <p className="text-text-light">
              Contrairement au Pinel, l&apos;amortissement Jeanbrun n&apos;est <strong>pas
              soumis au plafonnement des niches fiscales</strong> de 10 000 &euro;/an, puisqu&apos;il
              s&apos;agit d&apos;une charge d&eacute;ductible et non d&apos;une r&eacute;duction
              d&apos;imp&ocirc;t directe. C&apos;est un avantage consid&eacute;rable pour les
              investisseurs qui utilisent d&eacute;j&agrave; d&apos;autres niches fiscales.
            </p>
          </section>

          {/* Section 4 - Avantages du Jeanbrun */}
          <section id="avantages-jeanbrun" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              4. Avantages du Jeanbrun par rapport au Pinel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: 'Neuf et ancien &eacute;ligibles',
                  text: "Le Pinel \u00e9tait r\u00e9serv\u00e9 au neuf (VEFA). Le Jeanbrun couvre le neuf ET l'ancien avec travaux (\u226530% du prix), ouvrant un march\u00e9 bien plus large avec des prix d'acquisition souvent plus comp\u00e9titifs.",
                },
                {
                  title: 'Amortissement r\u00e9current',
                  text: "L'amortissement Jeanbrun (3,5% \u00e0 5,5%/an) g\u00e9n\u00e8re un avantage fiscal chaque ann\u00e9e sur toute la dur\u00e9e d'engagement, sans d\u00e9gressivit\u00e9 contrairement au Pinel qui passait de 2% \u00e0 1% en fin de p\u00e9riode.",
                },
                {
                  title: 'Plus-value prot\u00e9g\u00e9e',
                  text: "Les amortissements d\u00e9duits dans le cadre du Jeanbrun ne sont PAS r\u00e9int\u00e9gr\u00e9s dans le calcul de la plus-value immobili\u00e8re \u00e0 la revente. C'est un avantage fiscal majeur par rapport au LMNP.",
                },
                {
                  title: 'Hors plafonnement des niches',
                  text: "Le d\u00e9ficit foncier cr\u00e9\u00e9 par l'amortissement Jeanbrun n'entre pas dans le plafonnement des niches fiscales de 10 000 \u20ac/an, contrairement \u00e0 la r\u00e9duction Pinel qui y \u00e9tait soumise.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-background-alt rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-text mb-2">{item.title}</h3>
                  <p className="text-sm text-text-light">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-text-light mb-4">
              Un autre avantage notable du Jeanbrun est sa <strong>compatibilit&eacute; avec les SCI
              &agrave; l&apos;IR</strong>. Les associ&eacute;s d&apos;une SCI soumise &agrave;
              l&apos;imp&ocirc;t sur le revenu peuvent b&eacute;n&eacute;ficier de
              l&apos;amortissement au prorata de leurs parts, ce qui facilite
              l&apos;investissement &agrave; plusieurs et la gestion patrimoniale.
            </p>
            <p className="text-text-light">
              Le Jeanbrun offre &eacute;galement une plus grande souplesse g&eacute;ographique.
              Alors que le Pinel &eacute;tait de facto limit&eacute; aux zones A bis, A et B1 pour
              les derni&egrave;res ann&eacute;es, le Jeanbrun couvre l&apos;ensemble des zones
              g&eacute;ographiques, y compris les zones B2 et C, avec des plafonds de loyer
              adapt&eacute;s. Pour en savoir plus, consultez la page{' '}
              <Link href="/jeanbrun-vs-lmnp" className="text-primary font-medium hover:underline">
                Jeanbrun vs LMNP
              </Link>{' '}
              pour une comparaison compl&egrave;te avec l&apos;autre dispositif de
              d&eacute;fiscalisation immobili&egrave;re.
            </p>
          </section>

          {/* Section 5 - Tableau comparatif */}
          <section id="tableau-comparatif" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              5. Tableau comparatif d&eacute;taill&eacute;
            </h2>
            <p className="text-text-light mb-4">
              Voici un tableau synth&eacute;tique reprenant les diff&eacute;rences essentielles
              entre le Pinel (d&eacute;sormais &eacute;teint) et le Jeanbrun :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3">Crit&egrave;re</th>
                    <th className="text-center p-3">Pinel (termin&eacute;)</th>
                    <th className="text-center p-3">Jeanbrun (en vigueur)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['P\u00e9riode', 'Sept. 2014 \u2013 D\u00e9c. 2024', 'F\u00e9v. 2026 \u2013 D\u00e9c. 2028'],
                    ['Type de bien', 'Neuf uniquement (VEFA)', 'Neuf + ancien avec travaux (\u226530%)'],
                    ['M\u00e9canisme fiscal', 'R\u00e9duction d\u2019imp\u00f4t directe', 'Amortissement \u2192 d\u00e9ficit foncier'],
                    ['Taux initial', '12% / 18% / 21% du prix', '3,5% \u00e0 5,5% de la base amortissable / an'],
                    ['Dur\u00e9e d\u2019engagement', '6, 9 ou 12 ans', '9 ans'],
                    ['Plafond de prix', '300 000 \u20ac / 5 500 \u20ac/m\u00b2', 'Pas de plafond de prix'],
                    ['Plafond de loyer', 'Oui, par zone', 'Oui, par zone et par niveau'],
                    ['Plafonnement niches fiscales', 'Oui (10 000 \u20ac/an)', 'Non (charge d\u00e9ductible)'],
                    ['R\u00e9int\u00e9gration plus-value', 'Non', 'Non'],
                    ['Type de location', 'Nu', 'Nu'],
                    ['Compatible SCI IR', 'Oui', 'Oui'],
                    ['Zones \u00e9ligibles', 'A bis, A, B1 (B2 sur agr\u00e9ment)', 'Toutes zones (A bis \u00e0 C)'],
                    ['Avantage TMI 30%', 'Fixe (ind\u00e9pendant de la TMI)', 'Proportionnel \u00e0 la TMI'],
                    ['Avantage TMI 41%', 'Fixe (ind\u00e9pendant de la TMI)', 'Proportionnel \u00e0 la TMI'],
                  ].map(([critere, pinel, jb]) => (
                    <tr key={critere} className="border-b border-border">
                      <td className="p-3 font-medium">{critere}</td>
                      <td className="p-3 text-center">{pinel}</td>
                      <td className="p-3 text-center">{jb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-background-alt rounded-xl p-5 border border-border mb-4">
              <h3 className="font-semibold text-text mb-2">
                Exemple chiffr&eacute; : Pinel vs Jeanbrun sur 9 ans
              </h3>
              <p className="text-sm text-text-light mb-3">
                Pour un bien de 250 000 &euro;, avec un contribuable &agrave; 30% de TMI :
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-light">Pinel 9 ans (taux 2024 : 12%)</span>
                  <span className="font-medium">30 000 &euro; de r&eacute;duction d&apos;imp&ocirc;t totale</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-light">Jeanbrun 9 ans (niveau interm&eacute;diaire, 3,5%/an)</span>
                  <span className="font-medium text-primary">63 000 &euro; d&apos;amortissements d&eacute;duits*</span>
                </div>
                <p className="text-xs text-text-light mt-2">
                  * Base amortissable = 80% x 250 000 &euro; = 200 000 &euro;. Amortissement annuel = 7 000 &euro;.
                  L&apos;&eacute;conomie d&apos;imp&ocirc;t d&eacute;pend de la TMI (ex. : 30% de TMI +
                  17,2% de PS = environ 29 700 &euro; d&apos;&eacute;conomie r&eacute;elle, hors charges
                  d&eacute;ductibles suppl&eacute;mentaires qui augmentent encore le d&eacute;ficit).
                </p>
              </div>
            </div>

            <p className="text-text-light">
              Pour obtenir une estimation pr&eacute;cise adapt&eacute;e &agrave; votre situation,
              utilisez notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur Jeanbrun gratuit
              </Link>.
            </p>
          </section>

          {/* Section 6 - Basculer du Pinel au Jeanbrun */}
          <section id="basculer-pinel" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              6. Les anciens investisseurs Pinel peuvent-ils basculer ?
            </h2>
            <p className="text-text-light mb-4">
              La question se pose l&eacute;gitimement pour les centaines de milliers
              d&apos;investisseurs qui ont acquis un bien en Pinel entre 2014 et 2024. La
              r&eacute;ponse est claire : <strong>il n&apos;est pas possible de transformer un
              investissement Pinel en cours en dispositif Jeanbrun</strong>. Les deux
              r&eacute;gimes sont juridiquement distincts et le cumul sur un m&ecirc;me bien est
              exclu.
            </p>

            <h3 className="text-xl font-semibold text-text mb-3">
              Si votre engagement Pinel est toujours en cours
            </h3>
            <p className="text-text-light mb-4">
              Vous continuez &agrave; b&eacute;n&eacute;ficier de la r&eacute;duction d&apos;imp&ocirc;t
              Pinel jusqu&apos;au terme de votre engagement (6, 9 ou 12 ans selon votre choix
              initial). Le dispositif Pinel rest&eacute; acquis pour les investissements
              r&eacute;alis&eacute;s dans les d&eacute;lais. Rompre votre engagement avant terme
              entra&icirc;nerait la reprise de l&apos;avantage fiscal par l&apos;administration, ce
              qui n&apos;est g&eacute;n&eacute;ralement pas int&eacute;ressant.
            </p>

            <h3 className="text-xl font-semibold text-text mb-3">
              Si votre engagement Pinel est termin&eacute;
            </h3>
            <p className="text-text-light mb-4">
              Une fois votre p&eacute;riode d&apos;engagement Pinel arriv&eacute;e &agrave; son
              terme, plusieurs options s&apos;offrent &agrave; vous :
            </p>
            <div className="space-y-3 mb-4">
              {[
                'Conserver le bien en location nue classique (r\u00e9gime r\u00e9el ou micro-foncier)',
                'Revendre le bien et r\u00e9investir dans un nouveau projet \u00e9ligible au Jeanbrun',
                'Conserver le bien et investir dans un SECOND bien sous le dispositif Jeanbrun',
                'Passer le bien en location meubl\u00e9e (LMNP) si cela correspond \u00e0 votre strat\u00e9gie',
              ].map((option, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-light">{option}</span>
                </div>
              ))}
            </div>

            <p className="text-text-light mb-4">
              La strat&eacute;gie la plus courante consiste &agrave; revendre le bien Pinel (en
              b&eacute;n&eacute;ficiant de la plus-value classique des particuliers avec abattement
              pour dur&eacute;e de d&eacute;tention) et &agrave; r&eacute;investir le produit de la
              vente dans un projet &eacute;ligible au Jeanbrun. Cette approche permet de
              continuer &agrave; optimiser sa fiscalit&eacute; tout en renouvelant son patrimoine
              immobilier.
            </p>

            <p className="text-text-light">
              Dans tous les cas, il est recommand&eacute; de r&eacute;aliser une simulation
              pr&eacute;cise pour comparer les diff&eacute;rents sc&eacute;narios. Les
              param&egrave;tres cl&eacute;s &agrave; prendre en compte sont votre TMI actuelle,
              votre capacit&eacute; d&apos;investissement, la dur&eacute;e de d&eacute;tention
              souhait&eacute;e et la zone g&eacute;ographique cibl&eacute;e. Pour conna&icirc;tre les
              conditions pr&eacute;cises, rendez-vous sur notre page{' '}
              <Link href="/conditions-jeanbrun" className="text-primary font-medium hover:underline">
                conditions d&apos;&eacute;ligibilit&eacute; Jeanbrun
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-6">
              7. Questions fr&eacute;quentes
            </h2>
            <Accordion items={faqItems} />
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Simulez votre investissement Jeanbrun
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Calculez votre &eacute;conomie d&apos;imp&ocirc;t avec le dispositif Jeanbrun
              et comparez avec l&apos;ancien Pinel. Simulation gratuite en 2 minutes.
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
