'use client';

import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
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

      {/* Type de bien — big clickable cards */}
      <div>
        <label className="block text-sm font-medium text-text mb-3">
          Type de bien
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => {
              setValue('projectType', 'neuf', { shouldValidate: true });
              setValue('travaux', 0);
            }}
            className={`p-5 rounded-xl border-2 text-left transition-all cursor-pointer ${
              projectType === 'neuf'
                ? 'border-primary bg-primary/5 shadow-sm'
                : 'border-border hover:border-primary/30'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
              projectType === 'neuf' ? 'bg-primary text-white' : 'bg-background-alt text-text-light'
            }`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <div className="font-semibold text-text">Neuf</div>
            <div className="text-xs text-text-light mt-1">VEFA ou construction</div>
          </button>

          <button
            type="button"
            onClick={() => setValue('projectType', 'ancien', { shouldValidate: true })}
            className={`p-5 rounded-xl border-2 text-left transition-all cursor-pointer ${
              projectType === 'ancien'
                ? 'border-primary bg-primary/5 shadow-sm'
                : 'border-border hover:border-primary/30'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
              projectType === 'ancien' ? 'bg-primary text-white' : 'bg-background-alt text-text-light'
            }`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385 3.07A.75.75 0 015 17.595v-3.07a.75.75 0 01.217-.531l7.5-7.5A2.25 2.25 0 0114.25 6h4.5A2.25 2.25 0 0121 8.25v4.5a2.25 2.25 0 01-.659 1.591l-7.5 7.5a.75.75 0 01-1.06 0l-3.07-5.385z" />
              </svg>
            </div>
            <div className="font-semibold text-text">Ancien à rénover</div>
            <div className="text-xs text-text-light mt-1">Travaux min. 30% du prix</div>
          </button>
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
        <div className="animate-fade-in">
          <Input
            label="Montant des travaux"
            type="number"
            suffix="€"
            placeholder="60 000"
            hint="Minimum 30% du prix d'acquisition"
            error={errors.travaux?.message}
            {...register('travaux', { valueAsNumber: true })}
          />
        </div>
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
        hint={undefined}
        {...register('zone')}
      />
      <a
        href="/plafond-loyer-jeanbrun"
        target="_blank"
        className="inline-flex items-center gap-1 text-xs text-primary hover:underline -mt-4"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Je ne connais pas ma zone — voir la liste des villes
      </a>

      <Input
        label="Ville (optionnel)"
        type="text"
        placeholder="Paris, Lyon, Bordeaux..."
        {...register('ville')}
      />
    </div>
  );
}
