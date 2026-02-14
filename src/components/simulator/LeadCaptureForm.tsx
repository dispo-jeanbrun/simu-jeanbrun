'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { leadSchema, type LeadData } from '@/lib/schemas';

interface Props {
  onSubmit: (data: LeadData) => Promise<void>;
  loading?: boolean;
}

export function LeadCaptureForm({ onSubmit, loading }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadData>({
    resolver: zodResolver(leadSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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

      <Input
        label="Téléphone (optionnel)"
        type="tel"
        placeholder="06 12 34 56 78"
        error={errors.phone?.message}
        {...register('phone')}
      />

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
