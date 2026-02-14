'use client';

import { formatEuro } from '@/lib/simulator';
import type { SimulationResult } from '@/lib/simulator';
import { Card } from '@/components/ui/Card';

interface Props {
  result: SimulationResult;
}

export function ResultFull({ result }: Props) {
  return (
    <div className="space-y-8 animate-slide-up">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-text">
          Votre simulation complète
        </h2>
        <p className="text-sm text-text-light mt-1">
          Dispositif Jeanbrun &mdash; Projection sur 9 ans
        </p>
      </div>

      {/* Synthèse en cartes */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="text-center">
          <p className="text-xs text-text-light mb-1">Économie d&apos;impôt totale</p>
          <p className="text-2xl font-bold text-accent">
            {formatEuro(result.economieTotale9ans)}
          </p>
        </Card>
        <Card className="text-center">
          <p className="text-xs text-text-light mb-1">Loyers perçus</p>
          <p className="text-2xl font-bold text-primary">
            {formatEuro(result.totalLoyersPercus)}
          </p>
        </Card>
        <Card className="text-center">
          <p className="text-xs text-text-light mb-1">Capital remboursé</p>
          <p className="text-2xl font-bold text-primary">
            {formatEuro(result.totalCapitalRembourse)}
          </p>
        </Card>
        <Card className="text-center">
          <p className="text-xs text-text-light mb-1">Patrimoine constitué</p>
          <p className="text-2xl font-bold text-secondary">
            {formatEuro(result.patrimoineConstitue)}
          </p>
        </Card>
        <Card className="text-center">
          <p className="text-xs text-text-light mb-1">Effort d&apos;épargne moyen</p>
          <p className="text-2xl font-bold text-text">
            {formatEuro(result.effortEpargneMoyenMensuel)}
            <span className="text-sm font-normal text-text-light">/mois</span>
          </p>
        </Card>
        <Card className="text-center">
          <p className="text-xs text-text-light mb-1">Mensualité crédit</p>
          <p className="text-2xl font-bold text-text">
            {formatEuro(result.mensualiteCredit)}
            <span className="text-sm font-normal text-text-light">/mois</span>
          </p>
        </Card>
      </div>

      {/* Avantage plus-value */}
      <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-semibold text-text mb-1">
              Avantage majeur : plus-value protégée
            </p>
            <p className="text-sm text-text-light">
              Contrairement au LMNP (depuis 2025), les amortissements déduits dans le
              cadre du dispositif Jeanbrun ne sont <strong>pas réintégrés</strong> dans
              le calcul de la plus-value à la revente. Vous bénéficiez de l&apos;amortissement
              sans pénalité à la sortie.
            </p>
          </div>
        </div>
      </div>

      {/* Tableau année par année */}
      <div>
        <h3 className="font-bold text-text mb-4">Détail année par année</h3>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full text-sm border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-background-alt">
                <th className="text-left p-3 font-semibold text-text-light">Année</th>
                <th className="text-right p-3 font-semibold text-text-light">Loyer net</th>
                <th className="text-right p-3 font-semibold text-text-light">Charges</th>
                <th className="text-right p-3 font-semibold text-text-light">Intérêts</th>
                <th className="text-right p-3 font-semibold text-text-light">Amortiss.</th>
                <th className="text-right p-3 font-semibold text-text-light">Rev. foncier</th>
                <th className="text-right p-3 font-semibold text-text-light">Éco. impôt</th>
                <th className="text-right p-3 font-semibold text-text-light">Effort/mois</th>
              </tr>
            </thead>
            <tbody>
              {result.annees.map((row) => (
                <tr key={row.annee} className="border-b border-border">
                  <td className="p-3 font-medium">{row.annee}</td>
                  <td className="p-3 text-right">{formatEuro(row.loyerNet)}</td>
                  <td className="p-3 text-right text-danger">
                    -{formatEuro(row.chargesDeductibles)}
                  </td>
                  <td className="p-3 text-right text-text-light">
                    {formatEuro(row.interetsCredit)}
                  </td>
                  <td className="p-3 text-right text-primary">
                    {formatEuro(row.amortissement)}
                  </td>
                  <td className="p-3 text-right">
                    <span
                      className={
                        row.revenuApresAmortissement < 0
                          ? 'text-accent font-medium'
                          : ''
                      }
                    >
                      {formatEuro(row.revenuApresAmortissement)}
                    </span>
                  </td>
                  <td className="p-3 text-right text-accent font-semibold">
                    {formatEuro(row.economieTotale)}
                  </td>
                  <td className="p-3 text-right font-medium">
                    {formatEuro(row.effortEpargneMensuel)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-primary/5 font-semibold">
                <td className="p-3">Total</td>
                <td className="p-3 text-right">
                  {formatEuro(result.totalLoyersPercus)}
                </td>
                <td className="p-3 text-right" colSpan={3} />
                <td className="p-3 text-right" />
                <td className="p-3 text-right text-accent">
                  {formatEuro(result.economieTotale9ans)}
                </td>
                <td className="p-3 text-right">
                  {formatEuro(result.effortEpargneMoyenMensuel)}/mois moy.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          className="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors cursor-pointer"
          onClick={() => {
            // PDF generation will be added in Phase 3
            alert('La génération PDF sera disponible prochainement.');
          }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Télécharger ma simulation PDF
        </button>
        <button
          className="flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-colors cursor-pointer"
          onClick={() => {
            alert('Un conseiller vous recontactera dans les 24h.');
          }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Être rappelé par un conseiller
        </button>
      </div>
    </div>
  );
}
