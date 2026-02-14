'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { ResultFull } from '@/components/simulator/ResultFull';
import { runSimulation, type SimulationResult, type SimulationInput } from '@/lib/simulator';

type PageState = 'loading' | 'success' | 'expired' | 'invalid';

function ResultatContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const errorParam = searchParams.get('error');

  const initialState: PageState = errorParam
    ? (errorParam === 'expired' ? 'expired' : 'invalid')
    : !token ? 'invalid' : 'loading';

  const [state, setState] = useState<PageState>(initialState);
  const [result, setResult] = useState<SimulationResult | null>(null);

  useEffect(() => {
    if (state !== 'loading' || !token) return;

    async function fetchData() {
      try {
        const res = await fetch(`/api/simulation-data?token=${encodeURIComponent(token!)}`);
        if (!res.ok) {
          const data = await res.json();
          setState(data.error === 'expired' ? 'expired' : 'invalid');
          return;
        }
        const data = await res.json();
        if (data.simulationData?.input) {
          const simResult = runSimulation(data.simulationData.input as SimulationInput);
          setResult(simResult);
          setState('success');
        } else {
          setState('invalid');
        }
      } catch {
        setState('invalid');
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (state === 'loading') {
    return (
      <div className="max-w-lg mx-auto">
        <Card className="text-center py-16">
          <svg className="animate-spin w-10 h-10 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-text font-semibold">Chargement de votre simulation...</p>
        </Card>
      </div>
    );
  }

  if (state === 'expired') {
    return (
      <div className="max-w-lg mx-auto">
        <Card className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-text mb-2">Lien expiré</h1>
          <p className="text-text-light mb-6">
            Ce lien de vérification a expiré (24h). Refaites une simulation pour obtenir un nouveau lien.
          </p>
          <Link
            href="/simulateur"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition-colors"
          >
            Refaire une simulation
          </Link>
        </Card>
      </div>
    );
  }

  if (state === 'invalid' || !result) {
    return (
      <div className="max-w-lg mx-auto">
        <Card className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-danger/10 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-text mb-2">Lien invalide</h1>
          <p className="text-text-light mb-6">
            Ce lien de vérification est invalide ou a déjà été utilisé. Veuillez refaire une simulation.
          </p>
          <Link
            href="/simulateur"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition-colors"
          >
            Lancer une simulation
          </Link>
        </Card>
      </div>
    );
  }

  // Success — show full results
  return (
    <>
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Email vérifié
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <ResultFull result={result} />
      </div>
    </>
  );
}

export default function ResultatPage() {
  return (
    <section className="py-8 md:py-12 bg-background-alt min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="max-w-lg mx-auto">
            <Card className="text-center py-16">
              <svg className="animate-spin w-10 h-10 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="text-text font-semibold">Chargement...</p>
            </Card>
          </div>
        }>
          <ResultatContent />
        </Suspense>
      </div>
    </section>
  );
}
