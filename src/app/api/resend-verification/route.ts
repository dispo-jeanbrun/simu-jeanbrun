import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import { Resend } from 'resend';
import { buildVerificationEmail } from '@/lib/emails';

const resend = process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your-resend-api-key'
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://simu-jeanbrun.fr';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { leadId } = body;

    if (!leadId) {
      return NextResponse.json({ error: 'leadId requis' }, { status: 400 });
    }

    const supabase = createServerClient();

    // Fetch the lead
    const { data: lead, error } = await supabase
      .from('leads')
      .select('id, email, first_name, economie_impot_9ans, email_verified, token_expires_at')
      .eq('id', leadId)
      .single();

    if (error || !lead) {
      return NextResponse.json({ error: 'Lead introuvable' }, { status: 404 });
    }

    if (lead.email_verified) {
      return NextResponse.json({ error: 'Email déjà vérifié' }, { status: 400 });
    }

    // Generate new token
    const newToken = crypto.randomUUID();
    const tokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

    await supabase
      .from('leads')
      .update({
        verification_token: newToken,
        token_expires_at: tokenExpiresAt,
      })
      .eq('id', lead.id);

    // Send verification email
    if (resend) {
      const economie = lead.economie_impot_9ans
        ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(lead.economie_impot_9ans)
        : '—';

      const verificationUrl = `${BASE_URL}/api/verify/${newToken}`;

      await resend.emails.send({
        from: 'Simu-Jeanbrun <noreply@simu-jeanbrun.fr>',
        to: lead.email,
        subject: 'Votre simulation Jeanbrun — Accédez à vos résultats',
        html: buildVerificationEmail({
          firstName: lead.first_name || 'Bonjour',
          economieFormatted: economie,
          verificationUrl,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
