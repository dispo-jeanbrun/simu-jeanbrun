import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <article className="py-10 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <nav className="text-sm text-text-light mb-6 not-prose">
          <Link href="/" className="hover:text-primary">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-text">Mentions légales</span>
        </nav>

        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          Le site simu-jeanbrun.fr est édité par [Votre nom / Raison sociale].<br />
          Adresse : [Votre adresse]<br />
          Email : contact@simu-jeanbrun.fr<br />
          SIRET : [Votre SIRET]
        </p>

        <h2>Hébergeur</h2>
        <p>
          Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, etc.) est
          protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite
          sans autorisation préalable.
        </p>

        <h2>Limitation de responsabilité</h2>
        <p>
          Les informations et simulations fournies sur ce site le sont à titre purement
          indicatif et ne constituent en aucun cas un conseil fiscal, juridique ou financier.
          Les résultats des simulations dépendent des données saisies par l&apos;utilisateur et
          des hypothèses retenues. Il est recommandé de consulter un professionnel avant
          toute décision d&apos;investissement.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Consultez notre{' '}
          <Link href="/politique-confidentialite">politique de confidentialité</Link> pour
          connaître nos pratiques en matière de traitement des données personnelles.
        </p>
      </div>
    </article>
  );
}
