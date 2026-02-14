import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://simu-jeanbrun.fr';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  if (!token || token.length < 10) {
    return NextResponse.redirect(`${BASE_URL}/simulateur/resultat?error=invalid`);
  }

  const supabase = createServerClient();

  // Find lead by verification token
  const { data: lead, error } = await supabase
    .from('leads')
    .select('id, verification_token, token_expires_at, email_verified')
    .eq('verification_token', token)
    .single();

  if (error || !lead) {
    return NextResponse.redirect(`${BASE_URL}/simulateur/resultat?error=invalid`);
  }

  // Check if token is expired
  if (lead.token_expires_at && new Date(lead.token_expires_at) < new Date()) {
    return NextResponse.redirect(`${BASE_URL}/simulateur/resultat?error=expired`);
  }

  // Mark email as verified (if not already)
  if (!lead.email_verified) {
    await supabase
      .from('leads')
      .update({
        email_verified: true,
        verified_at: new Date().toISOString(),
      })
      .eq('id', lead.id);
  }

  // Redirect to result page with token (multi-use within 24h)
  return NextResponse.redirect(`${BASE_URL}/simulateur/resultat?token=${token}`);
}
