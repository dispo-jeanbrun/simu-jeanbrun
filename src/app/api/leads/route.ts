import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.email || !body.firstName) {
      return NextResponse.json(
        { error: 'Email et prénom requis' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const { data, error } = await supabase.from('leads').insert({
      email: body.email,
      phone: body.phone || null,
      first_name: body.firstName,
      last_name: body.lastName || null,
      project_type: body.projectType || null,
      budget: body.budget || null,
      travaux: body.travaux || null,
      surface: body.surface || null,
      zone: body.zone || null,
      ville: body.ville || null,
      tmi: body.tmi || null,
      revenus_fonciers_existants: body.revenusFonciersExistants || null,
      niveau_loyer: body.niveauLoyer || null,
      economie_impot_9ans: body.economieImpot9ans || null,
      effort_epargne_mensuel: body.effortEpargneMensuel || null,
      utm_source: body.utmSource || null,
      utm_medium: body.utmMedium || null,
      utm_campaign: body.utmCampaign || null,
      page_source: body.pageSource || '/simulateur',
      status: 'new',
    }).select().single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Erreur lors de la sauvegarde' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
