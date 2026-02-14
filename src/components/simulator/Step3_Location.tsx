'use client';

import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import {
  PLAFONDS_LOYER,
  NIVEAUX_LOYER_LABELS,
  NIVEAUX_LOYER_DESCRIPTIONS,
  TAUX_AMORTISSEMENT,
  PLAFOND_AMORTISSEMENT,
  type NiveauLoyer,
} from '@/config/plafonds';
import { formatEuro } from '@/lib/simulator';
import type { SimulatorFormData } from '@/lib/schemas';

interface Props {
  form: UseFormReturn<SimulatorFormData>;
}

const gestionOptions = [
  { value: '0', label: 'Gestion en direct (0%)' },
  { value: '7', label: 'Agence (7%)' },
  { value: '8', label: 'Agence (8%)' },
  { value: '10', label: 'Agence tout inclus (10%)' },
];

export function Step3Location({ form }: Props) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const zone = watch('zone');
  const surface = watch('surface') || 0;
  const niveauLoyer = watch('niveauLoyer');
  const prixAcquisition = watch('prixAcquisition') || 0;
  const travaux = watch('travaux') || 0;

  const plafondLoyer = zone && niveauLoyer ? PLAFONDS_LOYER[zone]?.[niveauLoyer] : 0;
  const loyerMensuelEstime = plafondLoyer * surface;

  const baseAmortissable = (prixAcquisition + travaux) * 0.8;
  const tauxAmort = niveauLoyer ? TAUX_AMORTISSEMENT[niveauLoyer] : 0;
  const plafondAmort = niveauLoyer ? PLAFOND_AMORTISSEMENT[niveauLoyer] : 0;
  const amortAnnuel = Math.min(baseAmortissable * tauxAmort, plafondAmort);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-text mb-1">Conditions de location</h2>
        <p className="text-sm text-text-light">
          Le dispositif Jeanbrun impose des plafonds de loyer en contrepartie de
          l&apos;avantage fiscal
        </p>
      </div>

      {/* Niveau de loyer */}
      <div>
        <label className="block text-sm font-medium text-text mb-3">
          Niveau de loyer
        </label>
        <div className="space-y-3">
          {(Object.keys(NIVEAUX_LOYER_LABELS) as NiveauLoyer[]).map((niveau) => (
            <button
              key={niveau}
              type="button"
              onClick={() => setValue('niveauLoyer', niveau, { shouldValidate: true })}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                niveauLoyer === niveau
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-text">
                    {NIVEAUX_LOYER_LABELS[niveau]}
                  </div>
                  <div className="text-xs text-text-light mt-0.5">
                    {NIVEAUX_LOYER_DESCRIPTIONS[niveau]}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-primary">
                    {(TAUX_AMORTISSEMENT[niveau] * 100).toFixed(1)}%/an
                  </div>
                  <div className="text-xs text-text-light">amortissement</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Loyer estimé */}
      {niveauLoyer && zone && surface > 0 && (
        <div className="bg-accent/10 rounded-xl p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-light">
              Plafond de loyer (zone {zone.replace('_', ' ')})
            </span>
            <span className="font-medium">{plafondLoyer.toFixed(2)} €/m²/mois</span>
          </div>
          <div className="flex justify-between text-sm font-semibold">
            <span>Loyer mensuel estimé</span>
            <span className="text-accent text-lg">{formatEuro(loyerMensuelEstime)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-light">Amortissement annuel</span>
            <span className="font-medium text-primary">{formatEuro(amortAnnuel)}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Charges copropriété"
          type="number"
          suffix="€/mois"
          placeholder="80"
          error={errors.chargesCopro?.message}
          {...register('chargesCopro', { valueAsNumber: true })}
        />
        <Input
          label="Taxe foncière"
          type="number"
          suffix="€/an"
          placeholder="800"
          error={errors.taxeFonciere?.message}
          {...register('taxeFonciere', { valueAsNumber: true })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Assurance PNO"
          type="number"
          suffix="€/an"
          placeholder="200"
          error={errors.assurancePNO?.message}
          {...register('assurancePNO', { valueAsNumber: true })}
        />
        <Select
          label="Gestion locative"
          options={gestionOptions}
          error={errors.gestionLocative?.message}
          {...register('gestionLocative', { valueAsNumber: true })}
        />
      </div>

      <Input
        label="Vacance locative estimée"
        type="number"
        suffix="%"
        placeholder="5"
        hint="Pourcentage du temps où le bien sera vacant"
        error={errors.vacanceLocative?.message}
        {...register('vacanceLocative', { valueAsNumber: true })}
      />
    </div>
  );
}
