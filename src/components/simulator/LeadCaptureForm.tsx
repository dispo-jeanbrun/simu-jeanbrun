'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { leadSchema, normalizeFrenchPhone, type LeadData } from '@/lib/schemas';

interface Props {
  onSubmit: (data: LeadData) => Promise<void>;
  loading?: boolean;
}

export function LeadCaptureForm({ onSubmit, loading }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LeadData>({
    resolver: zodResolver(leadSchema),
  });

  const phoneValue = watch('phone');
  const phoneStatus = (() => {
    if (!phoneValue || phoneValue.trim() === '') return 'empty';
    return normalizeFrenchPhone(phoneValue) ? 'valid' : 'invalid';
  })();

  const handleFormSubmit = (data: LeadData) => {
    // Normalize phone before submitting
    const normalized = data.phone ? normalizeFrenchPhone(data.phone) : '';
    return onSubmit({ ...data, phone: normalized || '' });
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4 animate-fade-in"
    >
      {/* Bandeau urgence */}
      <div className="flex items-center justify-center gap-2 bg-secondary/10 border border-secondary/30 rounded-lg px-3 py-2 mb-2">
        <svg className="w-4 h-4 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xs font-semibold text-secondary">
          Dispositif limité : du 01/02/2026 au 31/12/2028
        </span>
      </div>

      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-text">
          Recevez votre simulation complète
        </h3>
        <p className="text-sm text-text-light mt-1">
          Gratuit et sans engagement
        </p>
      </div>

      <Input
        label="Prénom"
        type="text"
        placeholder="Jean"
        error={errors.firstName?.message}
        {...register('firstName')}
      />

      <Input
        label="Email"
        type="email"
        placeholder="jean@email.com"
        error={errors.email?.message}
        {...register('email')}
      />

      <div className="w-full">
        <label className="block text-sm font-medium text-text mb-1.5">
          Téléphone mobile
        </label>
        <div className="relative">
          <input
            type="tel"
            placeholder="06 12 34 56 78"
            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 text-text bg-white placeholder:text-text-light/60 focus:outline-none focus:ring-2 ${
              phoneStatus === 'invalid'
                ? 'border-danger focus:ring-danger/30 focus:border-danger'
                : phoneStatus === 'valid'
                ? 'border-accent focus:ring-accent/30 focus:border-accent'
                : 'border-border focus:ring-primary/30 focus:border-primary'
            } pr-10`}
            {...register('phone')}
          />
          {phoneStatus === 'valid' && (
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {phoneStatus === 'invalid' && (
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          )}
        </div>
        {errors.phone?.message ? (
          <p className="mt-1 text-xs text-danger">{errors.phone.message}</p>
        ) : phoneStatus === 'empty' ? (
          <p className="mt-1 text-xs text-text-light">Format : 06 ou 07 + 8 chiffres</p>
        ) : null}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
          {...register('consent')}
        />
        <label htmlFor="consent" className="text-xs text-text-light cursor-pointer">
          J&apos;accepte d&apos;être recontacté par un conseiller en gestion de patrimoine
          pour obtenir des informations sur le dispositif Jeanbrun. Mes données
          sont traitées conformément à notre{' '}
          <a href="/politique-confidentialite" className="underline text-primary">
            politique de confidentialité
          </a>
          .
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-danger">{errors.consent.message}</p>
      )}

      <Button type="submit" size="lg" className="w-full" loading={loading}>
        Voir ma simulation complète
      </Button>

      <div className="flex items-center justify-center gap-4 text-xs text-text-light">
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          Données protégées
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          100% gratuit
        </div>
      </div>
    </form>
  );
}
