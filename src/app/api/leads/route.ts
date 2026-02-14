import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import { Resend } from 'resend';
import { buildVerificationEmail } from '@/lib/emails';

const resend = process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your-resend-api-key'
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'contact@simu-jeanbrun.fr';
const EMAIL_VERIFICATION_ENABLED = process.env.NEXT_PUBLIC_EMAIL_VERIFICATION_ENABLED === 'true';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://simu-jeanbrun.fr';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email || !body.firstName) {
      return NextResponse.json(
        { error: 'Email et prénom requis' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    // Generate verification token if email verification is enabled
    const verificationToken = EMAIL_VERIFICATION_ENABLED
      ? crypto.randomUUID()
      : null;
    const tokenExpiresAt = EMAIL_VERIFICATION_ENABLED
      ? new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      : null;

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
      // Email verification fields
      email_verified: !EMAIL_VERIFICATION_ENABLED, // Auto-verified if feature is off
      verification_token: verificationToken,
      token_expires_at: tokenExpiresAt,
      // Store full simulation data for token-based result retrieval
      simulation_data: body.simulationData || null,
    }).select().single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Erreur lors de la sauvegarde' },
        { status: 500 }
      );
    }

    // Send verification email to the lead
    if (EMAIL_VERIFICATION_ENABLED && resend && verificationToken) {
      const economie = body.economieImpot9ans
        ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(body.economieImpot9ans)
        : '—';

      const verificationUrl = `${BASE_URL}/api/verify/${verificationToken}`;

      resend.emails.send({
        from: 'Simu-Jeanbrun <noreply@simu-jeanbrun.fr>',
        to: body.email,
        subject: 'Votre simulation Jeanbrun — Accédez à vos résultats',
        html: buildVerificationEmail({
          firstName: body.firstName,
          economieFormatted: economie,
          verificationUrl,
        }),
      }).catch((err) => {
        console.error('Resend verification email error:', err);
      });
    }

    // Always send admin notification (non-blocking)
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
          <p style="margin-top:20px;font-size:12px;color:#999;">Lead #${data.id}${EMAIL_VERIFICATION_ENABLED ? ' — En attente de vérification email' : ''}</p>
        `,
      }).catch((err) => {
        console.error('Resend admin email error:', err);
      });
    }

    return NextResponse.json({
      success: true,
      id: data.id,
      emailVerificationRequired: EMAIL_VERIFICATION_ENABLED,
      maskedEmail: maskEmail(body.email),
    });
  } catch {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

/** Mask email: j***e@gmail.com */
function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  if (local.length <= 2) return `${local[0]}***@${domain}`;
  return `${local[0]}${'*'.repeat(Math.min(local.length - 2, 3))}${local[local.length - 1]}@${domain}`;
}
