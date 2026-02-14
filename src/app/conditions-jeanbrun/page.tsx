import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: "Conditions d'\u00e9ligibilit\u00e9 du dispositif Jeanbrun 2026",
  description:
    "Toutes les conditions pour b\u00e9n\u00e9ficier du dispositif Jeanbrun : type de bien, dur\u00e9e d'engagement, plafonds de loyer, locataire, zone g\u00e9ographique.",
  alternates: { canonical: 'https://simu-jeanbrun.fr/conditions-jeanbrun' },
};

const faqItems = [
  {
    question: 'Peut-on louer \u00e0 un membre de sa famille ?',
    answer:
      "Vous ne pouvez pas louer le bien \u00e0 un membre de votre foyer fiscal (conjoint, enfants rattach\u00e9s). En revanche, vous pouvez louer \u00e0 un ascendant ou descendant qui ne fait pas partie de votre foyer fiscal, \u00e0 condition qu'il respecte les conditions de ressources le cas \u00e9ch\u00e9ant.",
  },
  {
    question: 'Que se passe-t-il si je revends avant les 9 ans ?',
    answer:
      "Si vous revendez le bien avant la fin de l'engagement de 9 ans, vous perdez le b\u00e9n\u00e9fice du dispositif Jeanbrun. L'administration fiscale peut alors remettre en cause les amortissements d\u00e9duits et vous demander de restituer l'avantage fiscal obtenu, major\u00e9 d'int\u00e9r\u00eats de retard.",
  },
  {
    question: 'Le bien doit-il \u00eatre dans une zone tendue ?',
    answer:
      "Le dispositif Jeanbrun est \u00e9ligible dans toutes les zones (A bis, A, B1, B2 et C). Cependant, les plafonds de loyer varient selon la zone. Investir en zone tendue (A bis, A) offre g\u00e9n\u00e9ralement un meilleur rendement locatif mais des prix d'acquisition plus \u00e9lev\u00e9s.",
  },
  {
    question: 'Peut-on b\u00e9n\u00e9ficier du Jeanbrun pour un logement meubl\u00e9 ?',
    answer:
      "Non, le dispositif Jeanbrun impose une location nue (non meubl\u00e9e). Le bien doit \u00eatre lou\u00e9 vide, sans mobilier, \u00e0 titre de r\u00e9sidence principale du locataire. Si vous souhaitez louer en meubl\u00e9, vous devez vous tourner vers le r\u00e9gime LMNP, qui ne b\u00e9n\u00e9ficie pas des m\u00eames avantages.",
  },
  {
    question: 'Quelles sont les conditions pour l\u2019ancien avec travaux ?',
    answer:
      "Pour un bien ancien, les travaux doivent repr\u00e9senter au minimum 30% du prix total de l'op\u00e9ration (prix d'acquisition + travaux). Les travaux \u00e9ligibles comprennent la r\u00e9novation, l'am\u00e9lioration, la transformation et la mise aux normes. Le bien doit \u00eatre mis en location dans les 12 mois suivant l'ach\u00e8vement des travaux.",
  },
];

export default function ConditionsJeanbrunPage() {
  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: "Conditions d'éligibilité du dispositif Jeanbrun 2026",
            description:
              "Toutes les conditions pour bénéficier du dispositif Jeanbrun : type de bien, durée d'engagement, plafonds de loyer, locataire, zone géographique.",
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
            <span className="text-text">Conditions d&apos;&eacute;ligibilit&eacute;</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            Conditions d&apos;&eacute;ligibilit&eacute; du dispositif Jeanbrun 2026
          </h1>

          <p className="text-lg text-text-light mb-4">
            Le dispositif Jeanbrun est soumis &agrave; un ensemble de conditions strictes que
            l&apos;investisseur doit respecter pour b&eacute;n&eacute;ficier de l&apos;amortissement
            fiscal. Ces conditions portent sur le contribuable, le type de bien, le mode de
            location, la dur&eacute;e d&apos;engagement, les plafonds de loyer et le locataire.
          </p>

          <p className="text-lg text-text-light mb-8">
            Ce guide d&eacute;taille l&apos;ensemble des conditions d&apos;&eacute;ligibilit&eacute;
            et vous propose une checklist compl&egrave;te pour v&eacute;rifier que votre projet
            remplit tous les crit&egrave;res.
          </p>

          {/* Sommaire */}
          <div className="bg-background-alt rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-bold text-text mb-3">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#contribuable" className="text-primary hover:underline">1. Conditions relatives au contribuable</a></li>
              <li><a href="#bien" className="text-primary hover:underline">2. Conditions relatives au bien immobilier</a></li>
              <li><a href="#location" className="text-primary hover:underline">3. Conditions de location</a></li>
              <li><a href="#plafonds" className="text-primary hover:underline">4. Plafonds de loyer et zones</a></li>
              <li><a href="#locataire" className="text-primary hover:underline">5. Conditions relatives au locataire</a></li>
              <li><a href="#engagement" className="text-primary hover:underline">6. Dur&eacute;e d&apos;engagement et cons&eacute;quences</a></li>
              <li><a href="#non-respect" className="text-primary hover:underline">7. Que se passe-t-il si les conditions ne sont pas respect&eacute;es ?</a></li>
              <li><a href="#checklist" className="text-primary hover:underline">8. Checklist d&apos;&eacute;ligibilit&eacute;</a></li>
              <li><a href="#faq" className="text-primary hover:underline">9. FAQ</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="contribuable" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              1. Conditions relatives au contribuable
            </h2>
            <p className="text-text-light mb-4">
              Les conditions portant sur l&apos;investisseur sont les suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li><strong>R&eacute;sidence fiscale en France</strong> : le contribuable doit &ecirc;tre fiscalement domicili&eacute; en France au sens de l&apos;article 4 B du CGI. Les non-r&eacute;sidents sont exclus du dispositif.</li>
              <li><strong>Personne physique ou SCI &agrave; l&apos;IR</strong> : le bien peut &ecirc;tre d&eacute;tenu en nom propre ou via une SCI soumise &agrave; l&apos;imp&ocirc;t sur le revenu. Les SCI &agrave; l&apos;IS sont exclues.</li>
              <li><strong>Soumis &agrave; l&apos;imp&ocirc;t sur le revenu</strong> : le contribuable doit &ecirc;tre imposable &agrave; l&apos;IR. Le dispositif r&eacute;duit les revenus fonciers et, le cas &eacute;ch&eacute;ant, le revenu global via le d&eacute;ficit foncier.</li>
            </ul>
            <p className="text-text-light">
              Il n&apos;y a pas de condition de revenus maximum pour l&apos;investisseur. Que vous
              soyez &agrave; la TMI de 11% ou de 45%, vous pouvez b&eacute;n&eacute;ficier du Jeanbrun.
              Toutefois, l&apos;avantage fiscal est proportionnellement plus int&eacute;ressant pour
              les TMI &eacute;lev&eacute;es.
            </p>
          </section>

          {/* Section 2 */}
          <section id="bien" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              2. Conditions relatives au bien immobilier
            </h2>
            <p className="text-text-light mb-4">
              Le bien immobilier doit r&eacute;pondre &agrave; plusieurs crit&egrave;res :
            </p>
            <div className="space-y-3 mb-4">
              {[
                'Acquisition entre le 1er f\u00e9vrier 2026 et le 31 d\u00e9cembre 2028 (date de signature de l\u2019acte authentique ou de d\u00e9p\u00f4t du permis de construire)',
                'Bien neuf (VEFA, construction) OU bien ancien avec travaux repr\u00e9sentant au minimum 30% du co\u00fbt total de l\u2019op\u00e9ration',
                'Le bien doit \u00eatre un logement (appartement ou maison), pas un local commercial ou un parking isol\u00e9',
                'Le bien doit \u00eatre situ\u00e9 en France m\u00e9tropolitaine ou dans les DOM-TOM',
                'Le bien doit respecter les normes de d\u00e9cence et d\u2019habitabilit\u00e9 en vigueur',
              ].map((condition, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-light">{condition}</span>
                </div>
              ))}
            </div>
            <p className="text-text-light mb-4">
              Pour les biens anciens, la condition de 30% de travaux est essentielle. Le montant
              des travaux est calcul&eacute; par rapport au co&ucirc;t total de l&apos;op&eacute;ration
              (prix d&apos;acquisition + travaux). Par exemple, pour un bien achet&eacute; 150 000 &euro;,
              les travaux doivent repr&eacute;senter au moins 64 286 &euro; (pour que
              64 286 / 214 286 = 30%).
            </p>
            <p className="text-text-light">
              Pour en savoir plus sur l&apos;investissement dans le neuf, consultez notre page :{' '}
              <Link href="/jeanbrun-neuf" className="text-primary font-medium hover:underline">
                Jeanbrun dans le neuf
              </Link>. Pour l&apos;ancien, consultez :{' '}
              <Link href="/jeanbrun-ancien-renove" className="text-primary font-medium hover:underline">
                Jeanbrun dans l&apos;ancien r&eacute;nov&eacute;
              </Link>.
            </p>
          </section>

          {/* Section 3 */}
          <section id="location" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              3. Conditions de location
            </h2>
            <p className="text-text-light mb-4">
              Le mode de location est strictement encadr&eacute; :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li><strong>Location nue (non meubl&eacute;e)</strong> : le bien doit &ecirc;tre lou&eacute; vide, sans mobilier. La location meubl&eacute;e est incompatible avec le Jeanbrun.</li>
              <li><strong>R&eacute;sidence principale du locataire</strong> : le bien doit constituer la r&eacute;sidence principale du locataire. Les locations saisonni&egrave;res, touristiques ou de r&eacute;sidences secondaires sont exclues.</li>
              <li><strong>Bail de 3 ans minimum</strong> : conforme au droit commun de la location nue (loi du 6 juillet 1989), le bail est d&apos;une dur&eacute;e minimale de 3 ans, renouvelable.</li>
              <li><strong>Mise en location dans les 12 mois</strong> : le bien doit &ecirc;tre mis en location dans les 12 mois suivant l&apos;acquisition (ou la livraison en VEFA, ou l&apos;ach&egrave;vement des travaux).</li>
            </ul>
            <p className="text-text-light">
              La location doit &ecirc;tre effective et continue. Les p&eacute;riodes de vacance
              locative raisonnables (recherche de locataire, travaux entre deux locations) sont
              tol&eacute;r&eacute;es, mais une vacance volontaire prolonge&eacute;e peut remettre
              en cause le dispositif.
            </p>
          </section>

          {/* Section 4 */}
          <section id="plafonds" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              4. Plafonds de loyer et zones g&eacute;ographiques
            </h2>
            <p className="text-text-light mb-4">
              Les loyers sont plafonn&eacute;s en fonction de deux crit&egrave;res : la zone
              g&eacute;ographique du bien (A bis, A, B1, B2, C) et le niveau de loyer choisi
              (interm&eacute;diaire, social, tr&egrave;s social).
            </p>
            <p className="text-text-light mb-4">
              Le zonage est le m&ecirc;me que celui utilis&eacute; pour d&apos;autres dispositifs
              fiscaux (Pinel, Loc&apos;Avantages). Il est d&eacute;termin&eacute; par commune et ne peut
              pas &ecirc;tre modifi&eacute; par l&apos;investisseur.
            </p>
            <p className="text-text-light mb-4">
              Les trois niveaux de loyer correspondent &agrave; des d&eacute;cotes par rapport
              au loyer de march&eacute; :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li><strong>Interm&eacute;diaire (Loc1)</strong> : loyer 15% en dessous du march&eacute; &rarr; amortissement de 3,5%</li>
              <li><strong>Social (Loc2)</strong> : loyer 30% en dessous du march&eacute; &rarr; amortissement de 4,5%</li>
              <li><strong>Tr&egrave;s social (Loc3)</strong> : loyer 45% en dessous du march&eacute; &rarr; amortissement de 5,5%</li>
            </ul>
            <p className="text-text-light">
              Le choix du niveau est fait pour toute la dur&eacute;e de l&apos;engagement (9 ans)
              et ne peut pas &ecirc;tre modifi&eacute; en cours de route. Consultez les plafonds
              d&eacute;taill&eacute;s sur notre page :{' '}
              <Link href="/plafond-loyer-jeanbrun" className="text-primary font-medium hover:underline">
                Plafonds de loyer Jeanbrun
              </Link>.
            </p>
          </section>

          {/* Section 5 */}
          <section id="locataire" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              5. Conditions relatives au locataire
            </h2>
            <p className="text-text-light mb-4">
              Le locataire doit remplir certaines conditions :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li><strong>Pas de lien avec le foyer fiscal</strong> : le locataire ne peut pas &ecirc;tre un membre du foyer fiscal de l&apos;investisseur (conjoint, partenaire de PACS, enfants rattach&eacute;s). La location &agrave; un ascendant ou descendant non rattach&eacute; au foyer fiscal est en principe possible.</li>
              <li><strong>R&eacute;sidence principale</strong> : le bien doit constituer la r&eacute;sidence principale du locataire. Celui-ci doit y vivre au moins 8 mois par an.</li>
              <li><strong>Personne physique</strong> : le locataire doit &ecirc;tre une personne physique. La location &agrave; une personne morale (soci&eacute;t&eacute;, association) n&apos;est pas &eacute;ligible.</li>
            </ul>
            <p className="text-text-light mb-4">
              Contrairement &agrave; certains dispositifs (APL, Loc&apos;Avantages classique), le
              dispositif Jeanbrun <strong>ne pr&eacute;voit pas de plafond de ressources du
              locataire</strong> dans sa version actuelle. C&apos;est une simplification importante
              qui facilite la recherche de locataires.
            </p>
            <p className="text-text-light">
              En pratique, le plafond de loyer agit comme un filtre naturel : en imposant des
              loyers inf&eacute;rieurs au march&eacute;, le dispositif attire des locataires
              aux revenus interm&eacute;diaires, r&eacute;pondant &agrave; un objectif social
              sans imposer de crit&egrave;res de ressources administratifs.
            </p>
          </section>

          {/* Section 6 */}
          <section id="engagement" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              6. Dur&eacute;e d&apos;engagement et cons&eacute;quences
            </h2>
            <p className="text-text-light mb-4">
              L&apos;engagement de location est de <strong>9 ans minimum</strong>. Il court &agrave;
              partir de la date de prise d&apos;effet du premier bail. Pendant toute cette
              dur&eacute;e, les conditions du dispositif doivent &ecirc;tre respect&eacute;es
              sans interruption.
            </p>
            <p className="text-text-light mb-4">
              Les &eacute;v&eacute;nements suivants n&apos;interrompent pas l&apos;engagement :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li>Le changement de locataire (le nouveau bail doit respecter les m&ecirc;mes conditions)</li>
              <li>Une vacance locative raisonnable entre deux locataires (quelques mois)</li>
              <li>Le renouvellement du bail</li>
            </ul>
            <p className="text-text-light mb-4">
              Les &eacute;v&eacute;nements suivants <strong>interrompent</strong> l&apos;engagement et
              entra&icirc;nent la remise en cause de l&apos;avantage fiscal :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light mb-4 ml-4">
              <li>La vente du bien avant 9 ans</li>
              <li>La transformation en location meubl&eacute;e</li>
              <li>L&apos;occupation personnelle du bien</li>
              <li>Le non-respect des plafonds de loyer</li>
              <li>La vacance volontaire prolong&eacute;e</li>
            </ul>
            <p className="text-text-light">
              Certaines exceptions sont pr&eacute;vues en cas d&apos;&eacute;v&eacute;nements
              exceptionnels : invalidit&eacute; du propri&eacute;taire, licenciement, d&eacute;c&egrave;s
              du propri&eacute;taire ou du locataire, expropriation. Dans ces cas, la remise en
              cause peut &ecirc;tre &eacute;vit&eacute;e.
            </p>
          </section>

          {/* Section 7 */}
          <section id="non-respect" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              7. Que se passe-t-il si les conditions ne sont pas respect&eacute;es ?
            </h2>
            <p className="text-text-light mb-4">
              Le non-respect des conditions du dispositif Jeanbrun entra&icirc;ne des cons&eacute;quences
              fiscales s&eacute;rieuses :
            </p>
            <div className="bg-background-alt rounded-xl p-5 border border-border mb-4">
              <ul className="list-disc list-inside space-y-3 text-text-light">
                <li><strong>Remise en cause des amortissements</strong> : l&apos;administration fiscale peut demander la r&eacute;int&eacute;gration de tous les amortissements d&eacute;duits depuis le d&eacute;but du dispositif dans les revenus fonciers.</li>
                <li><strong>Imp&ocirc;t suppl&eacute;mentaire</strong> : les amortissements r&eacute;int&eacute;gr&eacute;s g&eacute;n&egrave;rent un suppl&eacute;ment d&apos;imp&ocirc;t sur le revenu et de pr&eacute;l&egrave;vements sociaux.</li>
                <li><strong>Int&eacute;r&ecirc;ts de retard</strong> : des int&eacute;r&ecirc;ts de retard de 0,20% par mois (2,4% par an) sont appliqu&eacute;s sur les sommes dues.</li>
                <li><strong>P&eacute;nalit&eacute;s &eacute;ventuelles</strong> : en cas de manquement d&eacute;lib&eacute;r&eacute;, des majorations de 40% (manquement d&eacute;lib&eacute;r&eacute;) &agrave; 80% (man&oelig;uvres frauduleuses) peuvent s&apos;appliquer.</li>
              </ul>
            </div>
            <p className="text-text-light">
              Le risque financier est donc consid&eacute;rable. Il est essentiel de bien comprendre
              et respecter l&apos;ensemble des conditions avant de s&apos;engager. En cas de doute,
              consultez un professionnel (notaire, expert-comptable, conseiller en gestion de
              patrimoine).
            </p>
          </section>

          {/* Section 8 */}
          <section id="checklist" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-4">
              8. Checklist compl&egrave;te d&apos;&eacute;ligibilit&eacute;
            </h2>
            <p className="text-text-light mb-4">
              V&eacute;rifiez que votre projet coche toutes les cases :
            </p>
            <div className="bg-background-alt rounded-xl p-6 border border-border">
              <div className="space-y-3">
                {[
                  '\u00catre fiscalement domicili\u00e9 en France',
                  'Acqu\u00e9rir le bien entre le 1er f\u00e9vrier 2026 et le 31 d\u00e9cembre 2028',
                  'Bien neuf OU ancien avec travaux \u2265 30% du co\u00fbt total',
                  'Location nue (non meubl\u00e9e)',
                  'R\u00e9sidence principale du locataire',
                  'Engagement de location de 9 ans minimum',
                  'Respect des plafonds de loyer selon la zone et le niveau choisi',
                  'Locataire non membre du foyer fiscal',
                  'Mise en location dans les 12 mois suivant l\u2019acquisition/livraison/ach\u00e8vement',
                  'Bien situ\u00e9 en France (m\u00e9tropole ou DOM-TOM)',
                  'Logement d\u00e9cent et conforme aux normes d\u2019habitabilit\u00e9',
                  'Pas de cumul avec un autre dispositif de d\u00e9fiscalisation pour le m\u00eame bien',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 shrink-0 mt-0.5 border-2 border-border rounded flex items-center justify-center">
                      <span className="text-xs text-text-light">{i + 1}</span>
                    </div>
                    <span className="text-text-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-text-light mt-4">
              Pour v&eacute;rifier automatiquement l&apos;&eacute;ligibilit&eacute; de votre projet
              et calculer votre avantage fiscal, utilisez notre{' '}
              <Link href="/simulateur" className="text-primary font-medium hover:underline">
                simulateur Jeanbrun gratuit
              </Link>. Retrouvez aussi le{' '}
              <Link href="/dispositif-jeanbrun" className="text-primary font-medium hover:underline">
                guide complet du dispositif Jeanbrun
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-10">
            <h2 className="text-2xl font-bold text-text mb-6">
              9. Questions fr&eacute;quentes
            </h2>
            <Accordion items={faqItems} />
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              V&eacute;rifiez votre &eacute;ligibilit&eacute; au Jeanbrun
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Notre simulateur v&eacute;rifie automatiquement les conditions et calcule votre
              &eacute;conomie d&apos;imp&ocirc;t. Gratuit et sans engagement.
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
