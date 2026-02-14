import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <article className="py-10 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <nav className="text-sm text-text-light mb-6 not-prose">
          <Link href="/" className="hover:text-primary">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-text">Politique de confidentialité</span>
        </nav>

        <h1>Politique de confidentialité</h1>
        <p><em>Dernière mise à jour : février 2026</em></p>

        <h2>1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données collectées sur simu-jeanbrun.fr est
          l&apos;éditeur du site (entreprise en cours d&apos;immatriculation), joignable à contact@simu-jeanbrun.fr.
        </p>

        <h2>2. Données collectées</h2>
        <p>Nous collectons les données suivantes :</p>
        <ul>
          <li><strong>Données d&apos;identification</strong> : prénom, email, téléphone (optionnel)</li>
          <li><strong>Données de simulation</strong> : type de projet, budget, zone, TMI, etc.</li>
          <li><strong>Données de navigation</strong> : pages visitées, source de trafic (UTM)</li>
        </ul>

        <h2>3. Finalités du traitement</h2>
        <p>Vos données sont collectées pour :</p>
        <ul>
          <li>Vous fournir les résultats de votre simulation personnalisée</li>
          <li>Vous mettre en relation avec des conseillers en gestion de patrimoine, promoteurs ou courtiers susceptibles de vous accompagner dans votre projet d&apos;investissement</li>
          <li>Améliorer notre service et nos outils de simulation</li>
        </ul>

        <h2>4. Base légale</h2>
        <p>
          Le traitement est fondé sur votre <strong>consentement</strong>, recueilli via
          la case à cocher lors de la soumission du formulaire de simulation.
        </p>

        <h2>5. Destinataires des données</h2>
        <p>
          Vos données peuvent être transmises à des partenaires professionnels
          (conseillers en gestion de patrimoine, promoteurs immobiliers, courtiers)
          dans le cadre de la mise en relation. Ces partenaires sont soumis à leurs
          propres obligations en matière de protection des données.
        </p>

        <h2>6. Durée de conservation</h2>
        <p>
          Vos données sont conservées pendant une durée maximale de 3 ans à compter
          de leur collecte, sauf obligation légale de conservation plus longue.
        </p>

        <h2>7. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants :
        </p>
        <ul>
          <li>Droit d&apos;accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
          <li>Droit à la portabilité</li>
          <li>Droit d&apos;opposition</li>
          <li>Droit de retirer votre consentement à tout moment</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à : contact@simu-jeanbrun.fr
        </p>

        <h2>8. Cookies</h2>
        <p>
          Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement
          du site. Google Analytics peut être activé avec votre consentement pour mesurer
          l&apos;audience du site.
        </p>
      </div>
    </article>
  );
}
