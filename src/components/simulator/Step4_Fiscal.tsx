'use client';

import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { TMI_OPTIONS } from '@/config/plafonds';
import type { SimulatorFormData } from '@/lib/schemas';

interface Props {
  form: UseFormReturn<SimulatorFormData>;
}

export function Step4Fiscal({ form }: Props) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const tmi = watch('tmi');

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-text mb-1">Votre situation fiscale</h2>
        <p className="text-sm text-text-light">
          Ces informations permettent de calculer précisément votre économie
          d&apos;impôt
        </p>
      </div>

      {/* TMI */}
      <div>
        <label className="block text-sm font-medium text-text mb-3">
          Tranche marginale d&apos;imposition (TMI)
        </label>
        <div className="grid grid-cols-5 gap-2">
          {TMI_OPTIONS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setValue('tmi', t, { shouldValidate: true })}
              className={`py-3 px-2 rounded-xl border-2 text-center transition-all cursor-pointer ${
                tmi === t
                  ? 'border-primary bg-primary/5 font-bold text-primary'
                  : 'border-border hover:border-primary/30 text-text'
              }`}
            >
              <div className="text-lg font-semibold">{t}%</div>
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-text-light">
          Votre TMI figure sur votre avis d&apos;imposition. C&apos;est le taux auquel
          est imposé votre dernier euro de revenu.
        </p>
        {errors.tmi && (
          <p className="mt-1 text-xs text-danger">{errors.tmi.message}</p>
        )}
      </div>

      <Input
        label="Revenus fonciers existants (annuels)"
        type="number"
        suffix="€/an"
        placeholder="0"
        hint="Si vous percevez déjà des loyers d'autres biens"
        error={errors.revenusFonciersExistants?.message}
        {...register('revenusFonciersExistants', { valueAsNumber: true })}
      />

      <div className="bg-background-alt rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <div className="text-sm text-text-light">
            <p className="font-medium text-text mb-1">Prélèvements sociaux</p>
            <p>
              Les prélèvements sociaux sont fixés à 17,2% et s&apos;appliquent sur les
              revenus fonciers nets positifs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
