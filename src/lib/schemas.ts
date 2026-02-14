import { z } from 'zod';

export const step1Schema = z
  .object({
    projectType: z.enum(['neuf', 'ancien']),
    prixAcquisition: z
      .number({ error: 'Requis' })
      .min(50000, 'Minimum 50 000 €')
      .max(1000000, 'Maximum 1 000 000 €'),
    travaux: z.number().min(0).default(0),
    surface: z
      .number({ error: 'Requis' })
      .min(9, 'Minimum 9 m²')
      .max(500, 'Maximum 500 m²'),
    zone: z.enum(['A_bis', 'A', 'B1', 'B2', 'C']),
    ville: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.projectType === 'ancien') {
        return data.travaux >= data.prixAcquisition * 0.3;
      }
      return true;
    },
    {
      message: "Les travaux doivent représenter au moins 30% du prix d'acquisition",
      path: ['travaux'],
    }
  );

export const step2Schema = z.object({
  apport: z.number({ error: 'Requis' }).min(0, 'Minimum 0 €'),
  dureeCredit: z.union([z.literal(15), z.literal(20), z.literal(25)]),
  tauxInteret: z
    .number({ error: 'Requis' })
    .min(0.1, 'Minimum 0.1%')
    .max(10, 'Maximum 10%'),
  tauxAssurance: z
    .number({ error: 'Requis' })
    .min(0, 'Minimum 0%')
    .max(2, 'Maximum 2%'),
});

export const step3Schema = z.object({
  niveauLoyer: z.enum(['intermediaire', 'social', 'tres_social']),
  chargesCopro: z.number({ error: 'Requis' }).min(0),
  taxeFonciere: z.number({ error: 'Requis' }).min(0),
  assurancePNO: z.number({ error: 'Requis' }).min(0),
  gestionLocative: z.number().min(0).max(100),
  vacanceLocative: z.number().min(0).max(50),
});

export const step4Schema = z.object({
  tmi: z.union([
    z.literal(0),
    z.literal(11),
    z.literal(30),
    z.literal(41),
    z.literal(45),
  ]),
  revenusFonciersExistants: z.number().min(0).default(0),
});

/**
 * Normalize a French mobile phone number to 06/07XXXXXXXX format.
 * Accepts: 06 12 34 56 78, +33612345678, 0033 6 12 34 56 78, 06.12.34.56.78, etc.
 * Returns normalized string or null if invalid.
 */
export function normalizeFrenchPhone(raw: string): string | null {
  // Strip all non-digit characters except leading +
  const cleaned = raw.replace(/[^0-9+]/g, '');

  let digits: string;
  if (cleaned.startsWith('+33')) {
    digits = '0' + cleaned.slice(3);
  } else if (cleaned.startsWith('0033')) {
    digits = '0' + cleaned.slice(4);
  } else {
    digits = cleaned;
  }

  // Must be exactly 10 digits starting with 06 or 07
  if (/^0[67]\d{8}$/.test(digits)) {
    return digits;
  }
  return null;
}

export const leadSchema = z.object({
  email: z.string().email("Format d'email invalide"),
  phone: z
    .string()
    .refine(
      (val) => {
        if (!val || val.trim() === '') return true; // optional
        return normalizeFrenchPhone(val) !== null;
      },
      { message: 'Numéro mobile français invalide (06 ou 07)' }
    ),
  firstName: z.string().min(2, 'Prénom requis (min. 2 caractères)'),
  consent: z.literal(true, {
    error: 'Vous devez accepter pour continuer',
  }),
});

export type LeadData = z.infer<typeof leadSchema>;

export interface SimulatorFormData {
  projectType: 'neuf' | 'ancien';
  prixAcquisition: number;
  travaux: number;
  surface: number;
  zone: 'A_bis' | 'A' | 'B1' | 'B2' | 'C';
  ville?: string;
  apport: number;
  dureeCredit: 15 | 20 | 25;
  tauxInteret: number;
  tauxAssurance: number;
  niveauLoyer: 'intermediaire' | 'social' | 'tres_social';
  chargesCopro: number;
  taxeFonciere: number;
  assurancePNO: number;
  gestionLocative: number;
  vacanceLocative: number;
  tmi: 0 | 11 | 30 | 41 | 45;
  revenusFonciersExistants: number;
}
