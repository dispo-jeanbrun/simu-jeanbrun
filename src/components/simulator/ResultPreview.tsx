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
      // Ease out cubic
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

      {/* Gros chiffre */}
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

      {/* Comparaison simplifiée */}
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
            </div>
          );
        })}
      </div>

      {/* Teaser */}
      <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-5 text-center">
        <p className="font-semibold text-text mb-1">
          Obtenez votre simulation complète
        </p>
        <p className="text-sm text-text-light">
          Tableau détaillé année par année, graphiques comparatifs, PDF
          téléchargeable et mise en relation avec un conseiller.
        </p>
      </div>
    </div>
  );
}
