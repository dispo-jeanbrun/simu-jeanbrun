import {
  TAUX_AMORTISSEMENT,
  PLAFOND_AMORTISSEMENT,
  PART_FONCIER,
  PLAFOND_DEFICIT_FONCIER,
  TAUX_PRELEVEMENTS_SOCIAUX,
  DUREE_DISPOSITIF,
  PLAFONDS_LOYER,
  FRAIS_NOTAIRE_NEUF,
  FRAIS_NOTAIRE_ANCIEN,
  type Zone,
  type NiveauLoyer,
} from '@/config/plafonds';

// ============================================================
// TYPES
// ============================================================

export interface SimulationInput {
  // Projet
  projectType: 'neuf' | 'ancien';
  prixAcquisition: number;
  travaux: number; // 0 si neuf
  surface: number;
  zone: Zone;
  ville?: string;

  // Financement
  apport: number;
  dureeCredit: 15 | 20 | 25;
  tauxInteret: number; // ex: 3.5 pour 3.5%
  tauxAssurance: number; // ex: 0.30 pour 0.30%

  // Location
  niveauLoyer: NiveauLoyer;
  chargesCopro: number; // mensuel
  taxeFonciere: number; // annuel
  assurancePNO: number; // annuel
  gestionLocative: number; // ex: 0 pour 0%, 7 pour 7%
  vacanceLocative: number; // ex: 5 pour 5%

  // Fiscal
  tmi: number; // ex: 30 pour 30%
  revenusFonciersExistants: number; // annuel
}

export interface AnnualResult {
  annee: number;
  loyerBrut: number;
  loyerNet: number; // après vacance
  chargesDeductibles: number;
  interetsCredit: number;
  assuranceCredit: number;
  amortissement: number;
  revenuFoncierNet: number;
  revenuApresAmortissement: number;
  deficitFoncier: number;
  deficitImputableRevenuGlobal: number;
  deficitReportable: number;
  economieIR: number;
  economiePS: number;
  economieTotale: number;
  mensualiteCredit: number;
  effortEpargneMensuel: number;
  capitalRembourse: number;
  capitalRestantDu: number;
}

export interface SimulationResult {
  // Résumé
  economieTotale9ans: number;
  totalLoyersPercus: number;
  totalCapitalRembourse: number;
  patrimoineConstitue: number;
  effortEpargneMoyenMensuel: number;
  rendementNetNet: number;

  // Détail année par année
  annees: AnnualResult[];

  // Paramètres calculés
  fraisNotaire: number;
  montantCredit: number;
  mensualiteCredit: number;
  loyerPlafond: number;
  loyerMensuel: number;
  amortissementAnnuel: number;
  baseAmortissable: number;

  // Comparaisons
  comparaisonNu: ComparisonResult;
  comparaisonLMNP: ComparisonResult;
}

export interface ComparisonResult {
  economieTotale9ans: number;
  effortEpargneMoyenMensuel: number;
  label: string;
  explication?: string;
}

// ============================================================
// CALCULS CRÉDIT
// ============================================================

function calculMensualite(
  capital: number,
  tauxAnnuel: number,
  dureeAnnees: number
): number {
  const tauxMensuel = tauxAnnuel / 100 / 12;
  const nbMensualites = dureeAnnees * 12;
  if (tauxMensuel === 0) return capital / nbMensualites;
  return (
    (capital * tauxMensuel * Math.pow(1 + tauxMensuel, nbMensualites)) /
    (Math.pow(1 + tauxMensuel, nbMensualites) - 1)
  );
}

interface CreditRow {
  interets: number;
  capitalRembourse: number;
  capitalRestantDu: number;
}

function tableauAmortissementCredit(
  capital: number,
  tauxAnnuel: number,
  dureeAnnees: number
): CreditRow[] {
  const tauxMensuel = tauxAnnuel / 100 / 12;
  const mensualite = calculMensualite(capital, tauxAnnuel, dureeAnnees);
  const rows: CreditRow[] = [];
  let restant = capital;

  for (let annee = 1; annee <= dureeAnnees; annee++) {
    let interetsAnnee = 0;
    let capitalAnnee = 0;
    for (let mois = 0; mois < 12; mois++) {
      const interetsMois = restant * tauxMensuel;
      const capitalMois = mensualite - interetsMois;
      interetsAnnee += interetsMois;
      capitalAnnee += capitalMois;
      restant -= capitalMois;
    }
    rows.push({
      interets: interetsAnnee,
      capitalRembourse: capitalAnnee,
      capitalRestantDu: Math.max(0, restant),
    });
  }

  return rows;
}

// ============================================================
// SIMULATION PRINCIPALE
// ============================================================

export function runSimulation(input: SimulationInput): SimulationResult {
  const {
    projectType,
    prixAcquisition,
    travaux,
    surface,
    zone,
    apport,
    dureeCredit,
    tauxInteret,
    tauxAssurance,
    niveauLoyer,
    chargesCopro,
    taxeFonciere,
    assurancePNO,
    gestionLocative,
    vacanceLocative,
    tmi,
    revenusFonciersExistants,
  } = input;

  // --- Paramètres calculés ---
  const fraisNotaire =
    projectType === 'neuf'
      ? prixAcquisition * FRAIS_NOTAIRE_NEUF
      : prixAcquisition * FRAIS_NOTAIRE_ANCIEN;

  const coutTotal = prixAcquisition + travaux;
  const montantCredit = Math.max(0, coutTotal - apport);
  const mensualite = calculMensualite(montantCredit, tauxInteret, dureeCredit);
  const tableauCredit = tableauAmortissementCredit(
    montantCredit,
    tauxInteret,
    dureeCredit
  );

  // Base amortissable = 80% du coût total (20% = foncier)
  const baseAmortissable = coutTotal * (1 - PART_FONCIER);
  const tauxAmort = TAUX_AMORTISSEMENT[niveauLoyer];
  const plafondAmort = PLAFOND_AMORTISSEMENT[niveauLoyer];
  const amortissementAnnuel = Math.min(
    baseAmortissable * tauxAmort,
    plafondAmort
  );

  // Loyer
  const loyerPlafond = PLAFONDS_LOYER[zone][niveauLoyer];
  const loyerMensuel = loyerPlafond * surface;
  const vacanceRate = vacanceLocative / 100;
  const gestionRate = gestionLocative / 100;

  // Assurance emprunteur annuelle
  const assuranceCreditAnnuelle = montantCredit * (tauxAssurance / 100);

  // --- Calcul année par année ---
  const annees: AnnualResult[] = [];
  let totalEconomie = 0;
  let totalLoyers = 0;
  let totalCapitalRembourse = 0;
  let totalEffort = 0;
  for (let a = 1; a <= DUREE_DISPOSITIF; a++) {
    const loyerBrut = loyerMensuel * 12;
    const loyerNet = loyerBrut * (1 - vacanceRate);

    // Charges déductibles
    const creditRow = a <= dureeCredit ? tableauCredit[a - 1] : { interets: 0, capitalRembourse: 0, capitalRestantDu: 0 };
    const interetsCredit = creditRow.interets;
    const chargesDeductibles =
      interetsCredit +
      assuranceCreditAnnuelle +
      chargesCopro * 12 +
      taxeFonciere +
      assurancePNO +
      loyerNet * gestionRate;

    // Revenu foncier net (avant amortissement)
    const revenuFoncierNet = loyerNet - chargesDeductibles;

    // Revenu foncier net après amortissement Jeanbrun
    const revenuApresAmortissement = revenuFoncierNet - amortissementAnnuel;

    // Déficit foncier
    let deficitFoncier = 0;
    let deficitImputableRevenuGlobal = 0;
    let deficitReportable = 0;
    let economieIR = 0;
    let economiePS = 0;

    if (revenuApresAmortissement < 0) {
      // Situation de déficit
      deficitFoncier = Math.abs(revenuApresAmortissement);

      // Le déficit imputable inclut les revenus fonciers existants qui absorberaient une partie
      const totalRevenuFoncier = revenuApresAmortissement + revenusFonciersExistants;

      if (totalRevenuFoncier < 0) {
        // Encore en déficit après déduction des revenus fonciers existants
        const deficitRestant = Math.abs(totalRevenuFoncier);
        deficitImputableRevenuGlobal = Math.min(deficitRestant, PLAFOND_DEFICIT_FONCIER);
        deficitReportable = deficitRestant - deficitImputableRevenuGlobal;
      }
      // else: revenus fonciers existants absorbent le déficit

      economieIR = deficitImputableRevenuGlobal * (tmi / 100);
      // Économie PS sur la réduction des revenus fonciers existants
      const reductionRevFonciers = Math.min(revenusFonciersExistants, deficitFoncier);
      economiePS = reductionRevFonciers * TAUX_PRELEVEMENTS_SOCIAUX;
    } else {
      // Revenu positif mais réduit par l'amortissement
      // L'amortissement réduit la base imposable
      const reductionBase = Math.min(amortissementAnnuel, revenuFoncierNet);
      economieIR = reductionBase * (tmi / 100);
      economiePS = reductionBase * TAUX_PRELEVEMENTS_SOCIAUX;
    }


    const economieTotale = economieIR + economiePS;

    // Effort d'épargne mensuel
    const chargesMensuelles =
      mensualite +
      chargesCopro +
      taxeFonciere / 12 +
      assurancePNO / 12 +
      loyerMensuel * (1 - vacanceRate) * gestionRate;

    const recettesMensuelles =
      loyerMensuel * (1 - vacanceRate) + economieTotale / 12;

    const effortEpargneMensuel = chargesMensuelles - recettesMensuelles;

    const capitalRembourse = creditRow.capitalRembourse;

    annees.push({
      annee: a,
      loyerBrut,
      loyerNet,
      chargesDeductibles,
      interetsCredit,
      assuranceCredit: assuranceCreditAnnuelle,
      amortissement: amortissementAnnuel,
      revenuFoncierNet,
      revenuApresAmortissement,
      deficitFoncier,
      deficitImputableRevenuGlobal,
      deficitReportable,
      economieIR,
      economiePS,
      economieTotale,
      mensualiteCredit: mensualite,
      effortEpargneMensuel,
      capitalRembourse,
      capitalRestantDu: creditRow.capitalRestantDu,
    });

    totalEconomie += economieTotale;
    totalLoyers += loyerNet;
    totalCapitalRembourse += capitalRembourse;
    totalEffort += effortEpargneMensuel;
  }

  // Patrimoine constitué = valeur du bien (on suppose conservation de la valeur)
  const patrimoineConstitue = prixAcquisition + travaux;

  // Rendement net-net
  const investissementTotal = apport + fraisNotaire + totalEffort * 12;
  const rendementNetNet =
    investissementTotal > 0
      ? ((totalEconomie + totalCapitalRembourse) / investissementTotal) * 100
      : 0;

  // --- Comparaisons ---
  const comparaisonNu = simulerLocationNue(input, tableauCredit, mensualite);
  const comparaisonLMNP = simulerLMNP(input, tableauCredit, mensualite);

  return {
    economieTotale9ans: totalEconomie,
    totalLoyersPercus: totalLoyers,
    totalCapitalRembourse,
    patrimoineConstitue,
    effortEpargneMoyenMensuel: totalEffort / DUREE_DISPOSITIF,
    rendementNetNet,
    annees,
    fraisNotaire,
    montantCredit,
    mensualiteCredit: mensualite,
    loyerPlafond,
    loyerMensuel,
    amortissementAnnuel,
    baseAmortissable,
    comparaisonNu,
    comparaisonLMNP,
  };
}

// ============================================================
// COMPARAISON : LOCATION NUE CLASSIQUE
// ============================================================

function simulerLocationNue(
  input: SimulationInput,
  tableauCredit: CreditRow[],
  mensualite: number
): ComparisonResult {
  const {
    surface,
    zone,
    niveauLoyer,
    chargesCopro,
    taxeFonciere,
    assurancePNO,
    gestionLocative,
    vacanceLocative,
    tmi,
    tauxAssurance,
  } = input;

  const montantCredit = Math.max(0, input.prixAcquisition + input.travaux - input.apport);
  const loyerPlafond = PLAFONDS_LOYER[zone][niveauLoyer];
  const loyerMensuel = loyerPlafond * surface;
  const vacanceRate = vacanceLocative / 100;
  const gestionRate = gestionLocative / 100;
  const assuranceCreditAnnuelle = montantCredit * (tauxAssurance / 100);

  let totalEconomie = 0;
  let totalEffort = 0;

  for (let a = 1; a <= DUREE_DISPOSITIF; a++) {
    const loyerNet = loyerMensuel * 12 * (1 - vacanceRate);
    const creditRow = a <= input.dureeCredit ? tableauCredit[a - 1] : { interets: 0 };

    const chargesDeductibles =
      creditRow.interets +
      assuranceCreditAnnuelle +
      chargesCopro * 12 +
      taxeFonciere +
      assurancePNO +
      loyerNet * gestionRate;

    const revenuFoncierNet = loyerNet - chargesDeductibles;
    // Pas d'amortissement en location nue

    let economie = 0;
    if (revenuFoncierNet < 0) {
      const deficit = Math.abs(revenuFoncierNet);
      const imputable = Math.min(deficit, PLAFOND_DEFICIT_FONCIER);
      economie = imputable * (tmi / 100);
    }
    // Si positif : imposé, pas d'économie

    totalEconomie += economie;

    const chargesMensuelles =
      mensualite + chargesCopro + taxeFonciere / 12 + assurancePNO / 12 + loyerMensuel * (1 - vacanceRate) * gestionRate;
    const recettes = loyerMensuel * (1 - vacanceRate) + economie / 12;
    totalEffort += chargesMensuelles - recettes;
  }

  return {
    economieTotale9ans: totalEconomie,
    effortEpargneMoyenMensuel: totalEffort / DUREE_DISPOSITIF,
    label: 'Location nue classique',
  };
}

// ============================================================
// COMPARAISON : LMNP
// ============================================================

function simulerLMNP(
  input: SimulationInput,
  tableauCredit: CreditRow[],
  mensualite: number
): ComparisonResult {
  const {
    prixAcquisition,
    travaux,
    surface,
    zone,
    niveauLoyer,
    chargesCopro,
    taxeFonciere,
    assurancePNO,
    gestionLocative,
    vacanceLocative,
    tmi,
    tauxAssurance,
  } = input;

  const montantCredit = Math.max(0, prixAcquisition + travaux - input.apport);
  // LMNP : loyer meublé environ 15% plus élevé que nu
  const loyerPlafond = PLAFONDS_LOYER[zone][niveauLoyer];
  const loyerMensuelNu = loyerPlafond * surface;
  const loyerMensuel = loyerMensuelNu * 1.15; // Majoration meublé
  const vacanceRate = vacanceLocative / 100;
  const gestionRate = gestionLocative / 100;
  const assuranceCreditAnnuelle = montantCredit * (tauxAssurance / 100);

  // Amortissement LMNP : ~3% sur le bâti (80%) + 10% sur le mobilier (~8000€)
  const baseAmortissable = (prixAcquisition + travaux) * 0.8;
  const amortBati = baseAmortissable * 0.03;
  const amortMobilier = 8000 * 0.1;
  const amortLMNP = amortBati + amortMobilier;

  let totalEconomie = 0;
  let totalEffort = 0;

  for (let a = 1; a <= DUREE_DISPOSITIF; a++) {
    const loyerNet = loyerMensuel * 12 * (1 - vacanceRate);
    const creditRow = a <= input.dureeCredit ? tableauCredit[a - 1] : { interets: 0 };

    const chargesDeductibles =
      creditRow.interets +
      assuranceCreditAnnuelle +
      chargesCopro * 12 +
      taxeFonciere +
      assurancePNO +
      loyerNet * gestionRate;

    const revenuBIC = loyerNet - chargesDeductibles - amortLMNP;

    let economie = 0;
    if (revenuBIC < 0) {
      // Déficit LMNP reportable sur BIC non pro uniquement, pas sur revenu global
      economie = 0; // Pas d'économie directe sur IR
    } else {
      // Économie = réduction d'impôt grâce à l'amortissement
      const reductionBase = Math.min(amortLMNP, loyerNet - chargesDeductibles);
      if (reductionBase > 0) {
        economie = reductionBase * (tmi / 100 + TAUX_PRELEVEMENTS_SOCIAUX);
      }
    }

    totalEconomie += economie;

    const chargesMensuelles =
      mensualite + chargesCopro + taxeFonciere / 12 + assurancePNO / 12 + loyerMensuel * (1 - vacanceRate) * gestionRate;
    const recettes = loyerMensuel * (1 - vacanceRate) + economie / 12;
    totalEffort += chargesMensuelles - recettes;
  }

  return {
    economieTotale9ans: totalEconomie,
    effortEpargneMoyenMensuel: totalEffort / DUREE_DISPOSITIF,
    label: 'LMNP (meublé)',
    explication:
      totalEconomie === 0
        ? "En LMNP, le déficit n'est pas imputable sur le revenu global — pas d'économie d'impôt directe dans ce scénario."
        : undefined,
  };
}

// ============================================================
// UTILITAIRES
// ============================================================

export function formatEuro(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatEuroDetailed(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)} %`;
}
