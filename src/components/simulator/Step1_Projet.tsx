'use client';

import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { ZONES_LABELS, type Zone } from '@/config/plafonds';
import type { SimulatorFormData } from '@/lib/schemas';

interface Props {
  form: UseFormReturn<SimulatorFormData>;
}

const zoneOptions = [
  { value: 'A_bis', label: 'Zone A bis — Paris et petite couronne' },
  { value: 'A', label: 'Zone A — Lyon, Marseille, Lille, Montpellier...' },
  { value: 'B1', label: 'Zone B1 — Bordeaux, Nantes, Toulouse, Rennes...' },
  { value: 'B2', label: 'Zone B2 — Villes moyennes (Amiens, Limoges...)' },
  { value: 'C', label: 'Zone C — Zones rurales et petites villes' },
];

export function Step1Projet({ form }: Props) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const projectType = watch('projectType');

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-text mb-1">Votre projet immobilier</h2>
        <p className="text-sm text-text-light">
          Décrivez le bien que vous souhaitez acquérir
        </p>
      </div>

      {/* Type de bien */}
      <div>
        <label className="block text-sm font-medium text-text mb-3">
          Type de bien
        </label>
        <div className="grid grid-cols-2 gap-3">
          {(['neuf', 'ancien'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                setValue('projectType', type, { shouldValidate: true });
                if (type === 'neuf') setValue('travaux', 0);
              }}
              className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                projectType === type
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <div className="font-semibold text-text">
                {type === 'neuf' ? 'Neuf' : 'Ancien à rénover'}
              </div>
              <div className="text-xs text-text-light mt-1">
                {type === 'neuf'
                  ? 'VEFA ou construction'
                  : 'Avec travaux (min. 30% du prix)'}
              </div>
            </button>
          ))}
        </div>
      </div>

      <Input
        label="Prix d'acquisition"
        type="number"
        suffix="€"
        placeholder="200 000"
        error={errors.prixAcquisition?.message}
        {...register('prixAcquisition', { valueAsNumber: true })}
      />

      {projectType === 'ancien' && (
        <Input
          label="Montant des travaux"
          type="number"
          suffix="€"
          placeholder="60 000"
          hint="Minimum 30% du prix d'acquisition"
          error={errors.travaux?.message}
          {...register('travaux', { valueAsNumber: true })}
        />
      )}

      <Input
        label="Surface"
        type="number"
        suffix="m²"
        placeholder="45"
        error={errors.surface?.message}
        {...register('surface', { valueAsNumber: true })}
      />

      <Select
        label="Zone géographique"
        options={zoneOptions}
        error={errors.zone?.message}
        {...register('zone')}
      />

      <Input
        label="Ville (optionnel)"
        type="text"
        placeholder="Paris, Lyon, Bordeaux..."
        {...register('ville')}
      />
    </div>
  );
}
