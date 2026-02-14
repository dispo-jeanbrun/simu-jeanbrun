import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  // Simple password protection via query param
  const password = request.nextUrl.searchParams.get('key');
  const adminKey = process.env.ADMIN_SECRET_KEY;

  if (!adminKey || password !== adminKey) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const status = request.nextUrl.searchParams.get('status');
  const supabase = createServerClient();

  let query = supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(200);

  if (status && status !== 'all') {
    query = query.eq('status', status);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ leads: data });
}

export async function PATCH(request: NextRequest) {
  const password = request.nextUrl.searchParams.get('key');
  const adminKey = process.env.ADMIN_SECRET_KEY;

  if (!adminKey || password !== adminKey) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const body = await request.json();
  const { id, status, sold_to, sold_price } = body;

  if (!id) {
    return NextResponse.json({ error: 'ID requis' }, { status: 400 });
  }

  const supabase = createServerClient();

  const updates: Record<string, unknown> = {};
  if (status) updates.status = status;
  if (sold_to !== undefined) updates.sold_to = sold_to;
  if (sold_price !== undefined) updates.sold_price = sold_price;
  if (status === 'sold') updates.sold_at = new Date().toISOString();

  const { error } = await supabase.from('leads').update(updates).eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
