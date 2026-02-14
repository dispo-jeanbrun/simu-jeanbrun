import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your-resend-api-key'
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'contact@simu-jeanbrun.fr';

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

    // Send notification email (non-blocking)
    if (resend) {
      const budget = body.budget ? `${Number(body.budget).toLocaleString('fr-FR')} €` : 'Non renseigné';
      const zone = body.zone ? `Zone ${body.zone.replace('_', ' ')}` : 'Non renseignée';
      const tmi = body.tmi != null ? `${body.tmi}%` : 'Non renseignée';
      const economie = body.economieImpot9ans
        ? `${Number(body.economieImpot9ans).toLocaleString('fr-FR')} €`
        : 'Non calculée';

      resend.emails.send({
        from: 'Simu-Jeanbrun <noreply@simu-jeanbrun.fr>',
        to: ADMIN_EMAIL,
        subject: `Nouveau lead : ${body.firstName} — ${budget} — TMI ${tmi}`,
        html: `
          <h2>Nouveau lead sur simu-jeanbrun.fr</h2>
          <table style="border-collapse:collapse;width:100%;max-width:500px;font-family:sans-serif;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">Prénom</td><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">${body.firstName}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.email}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">Téléphone</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.phone || 'Non renseigné'}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">Budget</td><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">${budget}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.projectType || 'Non renseigné'}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">Zone</td><td style="padding:8px;border-bottom:1px solid #eee;">${zone}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">TMI</td><td style="padding:8px;border-bottom:1px solid #eee;">${tmi}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">Niveau loyer</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.niveauLoyer || 'Non renseigné'}</td></tr>
            <tr><td style="padding:8px;color:#666;">Économie 9 ans</td><td style="padding:8px;font-weight:bold;color:#22C55E;">${economie}</td></tr>
          </table>
          <p style="margin-top:20px;font-size:12px;color:#999;">Lead #${data.id}</p>
        `,
      }).catch((err) => {
        console.error('Resend email error:', err);
      });
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
