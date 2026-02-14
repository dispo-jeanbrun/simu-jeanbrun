'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Step1Projet } from './Step1_Projet';
import { Step2Financement } from './Step2_Financement';
import { Step3Location } from './Step3_Location';
import { Step4Fiscal } from './Step4_Fiscal';
import { ResultPreview } from './ResultPreview';
import { LeadCaptureForm } from './LeadCaptureForm';
import { ResultFull } from './ResultFull';
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  type SimulatorFormData,
  type LeadData,
} from '@/lib/schemas';
import { runSimulation, type SimulationResult, type SimulationInput } from '@/lib/simulator';

const STEP_LABELS = ['Projet', 'Financement', 'Location', 'Fiscal'];
const TOTAL_STEPS = 4;

// Full schema for the form
const fullSchema = z.object({
  projectType: z.enum(['neuf', 'ancien']),
  prixAcquisition: z.number().min(50000).max(1000000),
  travaux: z.number().min(0),
  surface: z.number().min(9).max(500),
  zone: z.enum(['A_bis', 'A', 'B1', 'B2', 'C']),
  ville: z.string().optional(),
  apport: z.number().min(0),
  dureeCredit: z.union([z.literal(15), z.literal(20), z.literal(25)]),
  tauxInteret: z.number().min(0.1).max(10),
  tauxAssurance: z.number().min(0).max(2),
  niveauLoyer: z.enum(['intermediaire', 'social', 'tres_social']),
  chargesCopro: z.number().min(0),
  taxeFonciere: z.number().min(0),
  assurancePNO: z.number().min(0),
  gestionLocative: z.number().min(0).max(100),
  vacanceLocative: z.number().min(0).max(50),
  tmi: z.union([z.literal(0), z.literal(11), z.literal(30), z.literal(41), z.literal(45)]),
  revenusFonciersExistants: z.number().min(0),
});

type Phase = 'form' | 'result-preview' | 'lead-capture' | 'result-full';

export function SimulatorForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [phase, setPhase] = useState<Phase>('form');
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [leadLoading, setLeadLoading] = useState(false);

  const form = useForm<SimulatorFormData>({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      projectType: 'neuf',
      prixAcquisition: undefined,
      travaux: 0,
      surface: undefined,
      zone: 'A',
      ville: '',
      apport: 0,
      dureeCredit: 20,
      tauxInteret: 3.5,
      tauxAssurance: 0.3,
      niveauLoyer: 'intermediaire',
      chargesCopro: 80,
      taxeFonciere: 800,
      assurancePNO: 200,
      gestionLocative: 0,
      vacanceLocative: 5,
      tmi: 30,
      revenusFonciersExistants: 0,
    },
    mode: 'onBlur',
  });

  const validateCurrentStep = async (): Promise<boolean> => {
    const values = form.getValues();

    try {
      switch (currentStep) {
        case 1:
          step1Schema.parse(values);
          return true;
        case 2:
          step2Schema.parse(values);
          return true;
        case 3:
          step3Schema.parse(values);
          return true;
        case 4:
          step4Schema.parse(values);
          return true;
        default:
          return true;
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        (error as z.ZodError).issues.forEach((issue) => {
          const field = issue.path[0] as keyof SimulatorFormData;
          form.setError(field, { message: issue.message });
        });
      }
      return false;
    }
  };

  const handleNext = async () => {
    const valid = await validateCurrentStep();
    if (!valid) return;

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Run simulation
      const values = form.getValues();
      const input: SimulationInput = {
        projectType: values.projectType,
        prixAcquisition: values.prixAcquisition,
        travaux: values.travaux || 0,
        surface: values.surface,
        zone: values.zone,
        ville: values.ville,
        apport: values.apport || 0,
        dureeCredit: values.dureeCredit,
        tauxInteret: values.tauxInteret,
        tauxAssurance: values.tauxAssurance,
        niveauLoyer: values.niveauLoyer,
        chargesCopro: values.chargesCopro,
        taxeFonciere: values.taxeFonciere,
        assurancePNO: values.assurancePNO,
        gestionLocative: values.gestionLocative,
        vacanceLocative: values.vacanceLocative,
        tmi: values.tmi,
        revenusFonciersExistants: values.revenusFonciersExistants || 0,
      };

      const simResult = runSimulation(input);
      setResult(simResult);
      setPhase('result-preview');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleLeadSubmit = async (leadData: LeadData) => {
    setLeadLoading(true);
    try {
      const values = form.getValues();
      const body = {
        ...leadData,
        projectType: values.projectType,
        budget: values.prixAcquisition,
        travaux: values.travaux,
        surface: values.surface,
        zone: values.zone,
        ville: values.ville,
        tmi: values.tmi,
        revenusFonciersExistants: values.revenusFonciersExistants,
        niveauLoyer: values.niveauLoyer,
        economieImpot9ans: result?.economieTotale9ans,
        effortEpargneMensuel: result?.effortEpargneMoyenMensuel,
      };

      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      setPhase('result-full');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Still show results even if lead save fails
      setPhase('result-full');
    } finally {
      setLeadLoading(false);
    }
  };

  // Result phases
  if (phase === 'result-preview' && result) {
    return (
      <Card className="max-w-2xl mx-auto">
        <ResultPreview result={result} />
        <div className="mt-6 border-t border-border pt-6">
          <LeadCaptureForm onSubmit={handleLeadSubmit} loading={leadLoading} />
        </div>
      </Card>
    );
  }

  if (phase === 'result-full' && result) {
    return (
      <div className="max-w-4xl mx-auto">
        <ResultFull result={result} />
      </div>
    );
  }

  // Form phase
  return (
    <Card className="max-w-2xl mx-auto">
      <div className="mb-8">
        <ProgressBar
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          labels={STEP_LABELS}
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {currentStep === 1 && <Step1Projet form={form} />}
        {currentStep === 2 && <Step2Financement form={form} />}
        {currentStep === 3 && <Step3Location form={form} />}
        {currentStep === 4 && <Step4Fiscal form={form} />}

        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          {currentStep > 1 ? (
            <Button type="button" variant="outline" onClick={handlePrev}>
              Précédent
            </Button>
          ) : (
            <div />
          )}
          <Button type="button" onClick={handleNext}>
            {currentStep === TOTAL_STEPS ? 'Calculer mon économie' : 'Suivant'}
            <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </form>
    </Card>
  );
}
