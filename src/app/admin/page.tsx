'use client';

import { useState, useEffect, useCallback } from 'react';

interface Lead {
  id: string;
  created_at: string;
  email: string;
  phone: string | null;
  first_name: string | null;
  last_name: string | null;
  project_type: string | null;
  budget: number | null;
  travaux: number | null;
  surface: number | null;
  zone: string | null;
  ville: string | null;
  tmi: number | null;
  niveau_loyer: string | null;
  economie_impot_9ans: number | null;
  effort_epargne_mensuel: number | null;
  status: string;
  sold_to: string | null;
  sold_price: number | null;
  sold_at: string | null;
  utm_source: string | null;
}

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  new: { label: 'Nouveau', color: 'bg-blue-100 text-blue-800' },
  contacted: { label: 'Contacté', color: 'bg-yellow-100 text-yellow-800' },
  qualified: { label: 'Qualifié', color: 'bg-purple-100 text-purple-800' },
  sold: { label: 'Vendu', color: 'bg-green-100 text-green-800' },
};

const STATUS_OPTIONS = ['new', 'contacted', 'qualified', 'sold'];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatEuro(n: number | null) {
  if (n === null) return '—';
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}

export default function AdminPage() {
  const [key, setKey] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/leads?key=${encodeURIComponent(key)}&status=${filter}`);
      const data = await res.json();
      if (res.ok) {
        setLeads(data.leads);
        setAuthenticated(true);
      } else {
        alert(data.error || 'Erreur');
      }
    } catch {
      alert('Erreur de connexion');
    }
    setLoading(false);
  }, [key, filter]);

  useEffect(() => {
    if (authenticated) fetchLeads();
  }, [filter, authenticated, fetchLeads]);

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/admin/leads?key=${encodeURIComponent(key)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    fetchLeads();
    setSelectedLead(null);
  };

  // Login screen
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-alt">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-border max-w-sm w-full">
          <h1 className="text-xl font-bold text-text mb-4">Admin Leads</h1>
          <input
            type="password"
            placeholder="Clé d'accès admin"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchLeads()}
            className="w-full px-4 py-3 rounded-lg border border-border text-text mb-4 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            onClick={fetchLeads}
            disabled={loading || !key}
            className="w-full px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Connexion...' : 'Accéder'}
          </button>
        </div>
      </div>
    );
  }

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === 'new').length,
    contacted: leads.filter((l) => l.status === 'contacted').length,
    qualified: leads.filter((l) => l.status === 'qualified').length,
    sold: leads.filter((l) => l.status === 'sold').length,
  };

  return (
    <div className="min-h-screen bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-text">Dashboard Leads</h1>
            <p className="text-sm text-text-light">Gestion des leads Simu-Jeanbrun</p>
          </div>
          <button
            onClick={fetchLeads}
            className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium hover:bg-background-alt cursor-pointer"
          >
            Rafraîchir
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Total', value: stats.total, color: 'text-text' },
            { label: 'Nouveaux', value: stats.new, color: 'text-blue-600' },
            { label: 'Contactés', value: stats.contacted, color: 'text-yellow-600' },
            { label: 'Qualifiés', value: stats.qualified, color: 'text-purple-600' },
            { label: 'Vendus', value: stats.sold, color: 'text-green-600' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-4 border border-border text-center">
              <p className="text-xs text-text-light">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4">
          {[{ value: 'all', label: 'Tous' }, ...STATUS_OPTIONS.map((s) => ({ value: s, label: STATUS_LABELS[s].label }))].map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                filter === f.value ? 'bg-primary text-white' : 'bg-white border border-border text-text hover:bg-background-alt'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-background-alt border-b border-border">
                  <th className="text-left p-3 font-semibold text-text-light">Date</th>
                  <th className="text-left p-3 font-semibold text-text-light">Nom</th>
                  <th className="text-left p-3 font-semibold text-text-light">Email</th>
                  <th className="text-left p-3 font-semibold text-text-light">Tél</th>
                  <th className="text-left p-3 font-semibold text-text-light">Budget</th>
                  <th className="text-left p-3 font-semibold text-text-light">TMI</th>
                  <th className="text-left p-3 font-semibold text-text-light">Éco. impôt</th>
                  <th className="text-left p-3 font-semibold text-text-light">Statut</th>
                  <th className="text-left p-3 font-semibold text-text-light">Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={9} className="p-8 text-center text-text-light">
                      {loading ? 'Chargement...' : 'Aucun lead pour le moment'}
                    </td>
                  </tr>
                )}
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-border hover:bg-background-alt/50">
                    <td className="p-3 whitespace-nowrap">{formatDate(lead.created_at)}</td>
                    <td className="p-3 font-medium">{lead.first_name || '—'}</td>
                    <td className="p-3">{lead.email}</td>
                    <td className="p-3">{lead.phone || '—'}</td>
                    <td className="p-3 whitespace-nowrap">{formatEuro(lead.budget)}</td>
                    <td className="p-3">{lead.tmi ? `${lead.tmi}%` : '—'}</td>
                    <td className="p-3 whitespace-nowrap font-semibold text-accent">
                      {formatEuro(lead.economie_impot_9ans)}
                    </td>
                    <td className="p-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${STATUS_LABELS[lead.status]?.color || 'bg-gray-100 text-gray-800'}`}>
                        {STATUS_LABELS[lead.status]?.label || lead.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => setSelectedLead(lead)}
                        className="text-primary hover:underline text-sm cursor-pointer"
                      >
                        Détail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal détail lead */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setSelectedLead(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-text">
                {selectedLead.first_name || 'Lead'} — Détail
              </h2>
              <button onClick={() => setSelectedLead(null)} className="text-text-light hover:text-text cursor-pointer">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div><span className="text-text-light">Email :</span><br /><strong>{selectedLead.email}</strong></div>
                <div><span className="text-text-light">Téléphone :</span><br /><strong>{selectedLead.phone || '—'}</strong></div>
                <div><span className="text-text-light">Projet :</span><br /><strong>{selectedLead.project_type === 'neuf' ? 'Neuf' : 'Ancien rénové'}</strong></div>
                <div><span className="text-text-light">Budget :</span><br /><strong>{formatEuro(selectedLead.budget)}</strong></div>
                <div><span className="text-text-light">Surface :</span><br /><strong>{selectedLead.surface ? `${selectedLead.surface} m²` : '—'}</strong></div>
                <div><span className="text-text-light">Zone :</span><br /><strong>{selectedLead.zone || '—'}</strong></div>
                <div><span className="text-text-light">Ville :</span><br /><strong>{selectedLead.ville || '—'}</strong></div>
                <div><span className="text-text-light">TMI :</span><br /><strong>{selectedLead.tmi ? `${selectedLead.tmi}%` : '—'}</strong></div>
                <div><span className="text-text-light">Niveau loyer :</span><br /><strong>{selectedLead.niveau_loyer || '—'}</strong></div>
                <div><span className="text-text-light">Travaux :</span><br /><strong>{formatEuro(selectedLead.travaux)}</strong></div>
              </div>

              <div className="bg-accent/10 rounded-xl p-4 mt-4">
                <div className="flex justify-between">
                  <span className="text-text-light">Économie d&apos;impôt (9 ans)</span>
                  <span className="font-bold text-accent text-lg">{formatEuro(selectedLead.economie_impot_9ans)}</span>
                </div>
              </div>

              {selectedLead.utm_source && (
                <div className="text-xs text-text-light">
                  Source : {selectedLead.utm_source}
                </div>
              )}

              {/* Changer statut */}
              <div className="border-t border-border pt-4 mt-4">
                <p className="text-text-light mb-2 font-medium">Changer le statut :</p>
                <div className="flex flex-wrap gap-2">
                  {STATUS_OPTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selectedLead.id, s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        selectedLead.status === s
                          ? 'bg-primary text-white'
                          : 'bg-background-alt border border-border text-text hover:bg-border'
                      }`}
                    >
                      {STATUS_LABELS[s].label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
