'use client';

import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { FRAIS_NOTAIRE_NEUF, FRAIS_NOTAIRE_ANCIEN } from '@/config/plafonds';
import { formatEuro } from '@/lib/simulator';
import type { SimulatorFormData } from '@/lib/schemas';

interface Props {
  form: UseFormReturn<SimulatorFormData>;
}

const dureeOptions = [
  { value: '15', label: '15 ans' },
  { value: '20', label: '20 ans' },
  { value: '25', label: '25 ans' },
];

export function Step2Financement({ form }: Props) {
  const {
    register,
    watch,
    formState: { errors },
  } = form;

  const prixAcquisition = watch('prixAcquisition') || 0;
  const travaux = watch('travaux') || 0;
  const apport = watch('apport') || 0;
  const projectType = watch('projectType');

  const fraisNotaire =
    projectType === 'neuf'
      ? prixAcquisition * FRAIS_NOTAIRE_NEUF
      : prixAcquisition * FRAIS_NOTAIRE_ANCIEN;

  const coutTotal = prixAcquisition + travaux;
  const montantCredit = Math.max(0, coutTotal - apport);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-text mb-1">Votre financement</h2>
        <p className="text-sm text-text-light">
          Précisez les conditions de votre crédit immobilier
        </p>
      </div>

      {/* Récapitulatif */}
      <div className="bg-background-alt rounded-xl p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-text-light">Prix d&apos;acquisition</span>
          <span className="font-medium">{formatEuro(prixAcquisition)}</span>
        </div>
        {travaux > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-text-light">Travaux</span>
            <span className="font-medium">{formatEuro(travaux)}</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-text-light">
            Frais de notaire ({projectType === 'neuf' ? '2,5%' : '7,5%'})
          </span>
          <span className="font-medium">{formatEuro(fraisNotaire)}</span>
        </div>
        <div className="border-t border-border pt-2 flex justify-between text-sm font-semibold">
          <span>Coût total</span>
          <span>{formatEuro(coutTotal + fraisNotaire)}</span>
        </div>
      </div>

      <Input
        label="Apport personnel"
        type="number"
        suffix="€"
        placeholder="30 000"
        error={errors.apport?.message}
        {...register('apport', { valueAsNumber: true })}
      />

      <div className="bg-primary/5 rounded-xl p-4">
        <div className="flex justify-between text-sm">
          <span className="text-text-light">Montant du crédit</span>
          <span className="font-bold text-primary text-lg">
            {formatEuro(montantCredit)}
          </span>
        </div>
      </div>

      <Select
        label="Durée du crédit"
        options={dureeOptions}
        error={errors.dureeCredit?.message}
        {...register('dureeCredit', { valueAsNumber: true })}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Taux d'intérêt"
          type="number"
          step="0.1"
          suffix="%"
          placeholder="3.5"
          error={errors.tauxInteret?.message}
          {...register('tauxInteret', { valueAsNumber: true })}
        />
        <Input
          label="Assurance emprunteur"
          type="number"
          step="0.01"
          suffix="%/an"
          placeholder="0.30"
          error={errors.tauxAssurance?.message}
          {...register('tauxAssurance', { valueAsNumber: true })}
        />
      </div>
    </div>
  );
}
