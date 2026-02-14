'use client';

import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    question: "Qu'est-ce que le dispositif Jeanbrun ?",
    answer:
      "Le dispositif Jeanbrun est un mécanisme de défiscalisation immobilière instauré par la loi de finances 2026 (PLF 2026). Il permet aux investisseurs locatifs de déduire un amortissement annuel de 3,5% à 5,5% du prix du bien de leurs revenus fonciers, en contrepartie d'un engagement de location à loyer plafonné pendant 9 ans. Il s'applique du 1er février 2026 au 31 décembre 2028.",
  },
  {
    question: "Combien puis-je économiser avec le Jeanbrun ?",
    answer:
      "L'économie dépend de votre tranche marginale d'imposition (TMI), du prix du bien et du niveau de loyer choisi. Pour un bien neuf à 200 000 € en zone B1 avec une TMI à 30%, l'économie d'impôt peut atteindre 20 000 € à 30 000 € sur 9 ans. Utilisez notre simulateur pour obtenir un calcul personnalisé en 2 minutes.",
  },
  {
    question: 'Le Jeanbrun est-il mieux que le LMNP ?',
    answer:
      "Les deux dispositifs ont des avantages différents. Le Jeanbrun offre un avantage majeur : les amortissements ne sont pas réintégrés dans la plus-value à la revente (contrairement au LMNP depuis 2025). En revanche, le LMNP n'impose pas de plafond de loyer ni de durée d'engagement. Le choix dépend de votre profil fiscal et de vos objectifs patrimoniaux.",
  },
  {
    question: "Quelles sont les conditions du Jeanbrun ?",
    answer:
      "Les principales conditions sont : acquérir un bien neuf ou ancien avec travaux représentant au moins 30% du prix, s'engager à louer pendant 9 ans à un loyer inférieur au plafond de la zone, et respecter les plafonds de ressources des locataires. Le bien doit être loué nu (non meublé) à titre de résidence principale du locataire.",
  },
  {
    question: "Le Jeanbrun s'applique-t-il dans l'ancien ?",
    answer:
      "Oui, le dispositif Jeanbrun est ouvert à l'ancien à condition que le montant des travaux de rénovation représente au moins 30% du prix d'acquisition du bien. Les travaux éligibles incluent la rénovation énergétique, la mise aux normes et les travaux d'amélioration. L'ancien rénové peut même bénéficier d'un plafond de déficit foncier doublé (21 400 € au lieu de 10 700 €) en cas de rénovation énergétique.",
  },
  {
    question: "Jusqu'à quand peut-on investir en Jeanbrun ?",
    answer:
      "Le dispositif Jeanbrun est en vigueur du 1er février 2026 au 31 décembre 2028. Les investisseurs qui acquièrent un bien pendant cette période bénéficient de l'amortissement fiscal pendant toute la durée de l'engagement de location (9 ans), même si celle-ci dépasse le 31 décembre 2028.",
  },
];

export function LandingFAQ() {
  return (
    <>
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
      <Accordion items={faqItems} />
    </>
  );
}
