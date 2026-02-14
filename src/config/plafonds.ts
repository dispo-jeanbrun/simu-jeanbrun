// Plafonds de loyer Jeanbrun (€/m²/mois)
// Basés sur Loc'Avantages 2026 — à mettre à jour quand les plafonds définitifs seront publiés

export type Zone = 'A_bis' | 'A' | 'B1' | 'B2' | 'C';
export type NiveauLoyer = 'intermediaire' | 'social' | 'tres_social';

export const ZONES_LABELS: Record<Zone, string> = {
  A_bis: 'A bis',
  A: 'A',
  B1: 'B1',
  B2: 'B2',
  C: 'C',
};

export const NIVEAUX_LOYER_LABELS: Record<NiveauLoyer, string> = {
  intermediaire: 'Intermédiaire (Loc1)',
  social: 'Social (Loc2)',
  tres_social: 'Très social (Loc3)',
};

export const NIVEAUX_LOYER_DESCRIPTIONS: Record<NiveauLoyer, string> = {
  intermediaire: '-15% par rapport au marché',
  social: '-30% par rapport au marché',
  tres_social: '-45% par rapport au marché',
};

// Plafonds en €/m²/mois
export const PLAFONDS_LOYER: Record<Zone, Record<NiveauLoyer, number>> = {
  A_bis: { intermediaire: 18.89, social: 14.55, tres_social: 10.21 },
  A:     { intermediaire: 14.03, social: 11.31, tres_social: 8.59 },
  B1:    { intermediaire: 11.31, social: 9.83,  tres_social: 7.71 },
  B2:    { intermediaire: 9.83,  social: 8.59,  tres_social: 6.84 },
  C:     { intermediaire: 9.83,  social: 8.59,  tres_social: 6.84 },
};

// Taux d'amortissement annuel selon le niveau de loyer
export const TAUX_AMORTISSEMENT: Record<NiveauLoyer, number> = {
  intermediaire: 0.035, // 3.5%
  social: 0.045,        // 4.5%
  tres_social: 0.055,   // 5.5%
};

// Plafond d'amortissement annuel (€)
export const PLAFOND_AMORTISSEMENT: Record<NiveauLoyer, number> = {
  intermediaire: 8000,
  social: 10000,
  tres_social: 12000,
};

// Part du foncier (non amortissable)
export const PART_FONCIER = 0.20; // 20%

// Plafond du déficit foncier imputable sur le revenu global
export const PLAFOND_DEFICIT_FONCIER = 10700;
export const PLAFOND_DEFICIT_FONCIER_RENO_ENERGETIQUE = 21400;

// Prélèvements sociaux
export const TAUX_PRELEVEMENTS_SOCIAUX = 0.172; // 17.2%

// Durée du dispositif
export const DUREE_DISPOSITIF = 9; // 9 ans

// TMI disponibles
export const TMI_OPTIONS = [0, 11, 30, 41, 45] as const;
export type TMI = (typeof TMI_OPTIONS)[number];

// Frais de notaire
export const FRAIS_NOTAIRE_NEUF = 0.025; // 2.5%
export const FRAIS_NOTAIRE_ANCIEN = 0.075; // 7.5%
