'use client';

import { useEffect, useState } from 'react';
import { formatEuro } from '@/lib/simulator';
import type { SimulationResult } from '@/lib/simulator';

interface Props {
  result: SimulationResult;
}

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);

  return <>{formatEuro(value)}</>;
}

export function ResultPreview({ result }: Props) {
  return (
    <div className="animate-slide-up space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-text mb-2">
          Votre simulation Jeanbrun
        </h2>
        <p className="text-sm text-text-light">
          Résultat estimé sur 9 ans d&apos;investissement
        </p>
      </div>

      {/* Big number */}
      <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
        <p className="text-sm text-white/70 mb-2">
          Économie d&apos;impôt totale sur 9 ans
        </p>
        <div className="text-4xl sm:text-5xl font-bold animate-count-up">
          <AnimatedCounter target={result.economieTotale9ans} />
        </div>
        <p className="text-sm text-white/60 mt-3">
          soit environ {formatEuro(result.economieTotale9ans / 9)} par an
        </p>
      </div>

      {/* Comparison bars */}
      <div className="space-y-3">
        <h3 className="font-semibold text-text text-sm">
          Comparaison des économies sur 9 ans
        </h3>
        {[
          {
            label: 'Dispositif Jeanbrun',
            value: result.economieTotale9ans,
            color: 'bg-primary',
            highlight: true,
          },
          {
            label: result.comparaisonLMNP.label,
            value: result.comparaisonLMNP.economieTotale9ans,
            color: 'bg-secondary',
            explication: result.comparaisonLMNP.explication,
          },
          {
            label: result.comparaisonNu.label,
            value: result.comparaisonNu.economieTotale9ans,
            color: 'bg-text-light',
          },
        ].map((item) => {
          const maxValue = Math.max(
            result.economieTotale9ans,
            result.comparaisonLMNP.economieTotale9ans,
            result.comparaisonNu.economieTotale9ans,
            1
          );
          const width = Math.max((item.value / maxValue) * 100, 5);

          return (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1">
                <span
                  className={
                    item.highlight
                      ? 'font-semibold text-primary'
                      : 'text-text-light'
                  }
                >
                  {item.label}
                </span>
                <span
                  className={
                    item.highlight ? 'font-bold text-primary' : 'font-medium'
                  }
                >
                  {formatEuro(item.value)}
                </span>
              </div>
              <div className="w-full bg-border rounded-full h-3">
                <div
                  className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                  style={{ width: `${width}%` }}
                />
              </div>
              {item.explication && (
                <p className="text-xs text-text-light mt-1 italic">
                  {item.explication}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* FOMO list — what they get */}
      <div className="bg-background-alt rounded-xl p-5 space-y-3">
        <p className="font-semibold text-text text-sm">
          Votre simulation complète inclut :
        </p>
        <ul className="space-y-2">
          {[
            'Tableau détaillé année par année',
            'Comparaison Jeanbrun vs LMNP vs location nue',
            "Effort d'épargne mensuel réel",
            'Analyse de la plus-value et du patrimoine constitué',
            'Mise en relation avec un conseiller spécialisé',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-text-light">
              <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Blurred table preview */}
      <div className="relative">
        <div className="blur-sm select-none pointer-events-none" aria-hidden="true">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-background-alt">
                <th className="text-left p-2 text-text-light">Année</th>
                <th className="text-right p-2 text-text-light">Loyer net</th>
                <th className="text-right p-2 text-text-light">Charges</th>
                <th className="text-right p-2 text-text-light">Éco. impôt</th>
                <th className="text-right p-2 text-text-light">Effort/mois</th>
              </tr>
            </thead>
            <tbody>
              {result.annees.slice(0, 3).map((row) => (
                <tr key={row.annee} className="border-b border-border">
                  <td className="p-2">{row.annee}</td>
                  <td className="p-2 text-right">{formatEuro(row.loyerNet)}</td>
                  <td className="p-2 text-right">-{formatEuro(row.chargesDeductibles)}</td>
                  <td className="p-2 text-right text-accent">{formatEuro(row.economieTotale)}</td>
                  <td className="p-2 text-right">{formatEuro(row.effortEpargneMensuel)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-xl">
          <div className="text-center">
            <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <p className="font-semibold text-text text-sm">
              Débloquez votre simulation complète
            </p>
            <p className="text-xs text-text-light mt-1">
              Tableau détaillé, mise en relation conseiller
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
