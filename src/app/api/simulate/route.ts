import { NextRequest, NextResponse } from 'next/server';
import { runSimulation, type SimulationInput } from '@/lib/simulator';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const input: SimulationInput = {
      projectType: body.projectType,
      prixAcquisition: Number(body.prixAcquisition),
      travaux: Number(body.travaux) || 0,
      surface: Number(body.surface),
      zone: body.zone,
      ville: body.ville,
      apport: Number(body.apport) || 0,
      dureeCredit: Number(body.dureeCredit) as 15 | 20 | 25,
      tauxInteret: Number(body.tauxInteret),
      tauxAssurance: Number(body.tauxAssurance),
      niveauLoyer: body.niveauLoyer,
      chargesCopro: Number(body.chargesCopro),
      taxeFonciere: Number(body.taxeFonciere),
      assurancePNO: Number(body.assurancePNO),
      gestionLocative: Number(body.gestionLocative),
      vacanceLocative: Number(body.vacanceLocative),
      tmi: Number(body.tmi),
      revenusFonciersExistants: Number(body.revenusFonciersExistants) || 0,
    };

    const result = runSimulation(input);

    // Return partial result only (no detailed yearly data)
    return NextResponse.json({
      economieTotale9ans: result.economieTotale9ans,
      effortEpargneMoyenMensuel: result.effortEpargneMoyenMensuel,
      comparaisonNu: result.comparaisonNu,
      comparaisonLMNP: result.comparaisonLMNP,
    });
  } catch {
    return NextResponse.json(
      { error: 'Erreur lors du calcul de la simulation' },
      { status: 400 }
    );
  }
}
