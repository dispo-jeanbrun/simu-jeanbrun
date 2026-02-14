'use client';

import { Suspense, useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

function VerificationContent() {
  const searchParams = useSearchParams();
  const maskedEmail = searchParams.get('email') || '***@***.com';
  const leadId = searchParams.get('id') || '';

  const [resendCooldown, setResendCooldown] = useState(0);
  const [resendStatus, setResendStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => setResendCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const handleResend = useCallback(async () => {
    if (resendCooldown > 0 || !leadId) return;

    setResendStatus('sending');
    try {
      const res = await fetch('/api/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId }),
      });

      if (res.ok) {
        setResendStatus('sent');
        setResendCooldown(60);
      } else {
        setResendStatus('error');
      }
    } catch {
      setResendStatus('error');
    }
  }, [leadId, resendCooldown]);

  return (
    <Card className="text-center">
      {/* Animated envelope icon */}
      <div className="mb-6">
        <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center animate-fade-in">
          <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-text mb-2">
        Vérifiez votre boîte email
      </h1>

      <p className="text-text-light mb-6">
        Un email vient d&apos;être envoyé à{' '}
        <span className="font-semibold text-text">{maskedEmail}</span>
        <br />
        Cliquez sur le lien pour accéder à votre simulation complète.
      </p>

      {/* Timer info */}
      <div className="flex items-center justify-center gap-2 text-sm text-text-light mb-8">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Le lien est valide 24 heures.
      </div>

      {/* Resend + spam hint */}
      <div className="border-t border-border pt-6 space-y-4">
        <p className="text-sm text-text-light">
          Pas reçu ?{' '}
          Vérifiez vos <strong>spams</strong> / courrier indésirable.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleResend}
            disabled={resendCooldown > 0 || resendStatus === 'sending' || !leadId}
            className="text-sm font-semibold text-primary hover:underline disabled:text-text-light disabled:no-underline disabled:cursor-not-allowed cursor-pointer"
          >
            {resendStatus === 'sending'
              ? 'Envoi en cours...'
              : resendStatus === 'sent'
              ? 'Email renvoyé ✓'
              : 'Renvoyer l\'email'}
            {resendCooldown > 0 && ` (${resendCooldown}s)`}
          </button>
        </div>

        {resendStatus === 'error' && (
          <p className="text-xs text-danger">
            Erreur lors du renvoi. Réessayez dans quelques instants.
          </p>
        )}
      </div>

      <div className="mt-8">
        <Link
          href="/simulateur"
          className="text-sm text-text-light hover:text-primary transition-colors"
        >
          &larr; Refaire une simulation
        </Link>
      </div>
    </Card>
  );
}

export default function VerificationPage() {
  return (
    <section className="py-12 md:py-20 bg-background-alt min-h-screen">
      <div className="max-w-lg mx-auto px-4">
        <Suspense fallback={
          <Card className="text-center py-16">
            <svg className="animate-spin w-8 h-8 text-primary mx-auto" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </Card>
        }>
          <VerificationContent />
        </Suspense>
      </div>
    </section>
  );
}
