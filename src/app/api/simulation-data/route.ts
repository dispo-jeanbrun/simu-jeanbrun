import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');

  if (!token || token.length < 10) {
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  }

  const supabase = createServerClient();

  const { data: lead, error } = await supabase
    .from('leads')
    .select('id, email_verified, token_expires_at, simulation_data')
    .eq('verification_token', token)
    .single();

  if (error || !lead) {
    return NextResponse.json({ error: 'invalid' }, { status: 404 });
  }

  // Check if token is expired
  if (lead.token_expires_at && new Date(lead.token_expires_at) < new Date()) {
    return NextResponse.json({ error: 'expired' }, { status: 410 });
  }

  // Token must correspond to a verified lead
  if (!lead.email_verified) {
    return NextResponse.json({ error: 'not_verified' }, { status: 403 });
  }

  return NextResponse.json({
    simulationData: lead.simulation_data,
  });
}
