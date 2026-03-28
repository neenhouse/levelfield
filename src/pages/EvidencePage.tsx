import { useState, useEffect } from 'react';
import { VIOLATION_TYPES, PLATFORM_DATA } from '../lib/data';
import { saveEvidence, getEvidence, deleteEvidence } from '../lib/storage';
import type { EvidenceItem } from '../lib/types';
import { StatusBadge } from '../components/StatusBadge';
import './EvidencePage.css';

export function EvidencePage() {
  const [items, setItems] = useState<EvidenceItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    platform: '',
    violationType: '',
    description: '',
    url: '',
    date: new Date().toISOString().split('T')[0],
    impact: '',
  });

  useEffect(() => {
    setItems(getEvidence());
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newItem: EvidenceItem = {
      id: `EV-${Date.now()}`,
      platform: form.platform,
      violationType: form.violationType,
      description: form.description,
      url: form.url || undefined,
      date: form.date,
      impact: form.impact,
      status: 'draft',
    };
    saveEvidence(newItem);
    setItems(getEvidence());
    setForm({ platform: '', violationType: '', description: '', url: '', date: new Date().toISOString().split('T')[0], impact: '' });
    setShowForm(false);
  }

  function handleDelete(id: string) {
    deleteEvidence(id);
    setItems(getEvidence());
  }

  const platforms = Object.keys(PLATFORM_DATA);

  return (
    <div className="evidence-page">
      <div className="container">
        <div className="page-header">
          <div className="page-header-row">
            <div>
              <h1>Evidence Builder</h1>
              <p>Document specific instances of anti-competitive behavior with structured evidence packages.</p>
            </div>
            <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Cancel' : '+ Add Evidence'}
            </button>
          </div>
        </div>

        {showForm && (
          <form className="evidence-form" onSubmit={handleSubmit}>
            <h3>New Evidence Item</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Platform</label>
                <select value={form.platform} onChange={e => setForm({ ...form, platform: e.target.value })} required>
                  <option value="">Select platform...</option>
                  {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Violation Type</label>
                <select value={form.violationType} onChange={e => setForm({ ...form, violationType: e.target.value })} required>
                  <option value="">Select violation type...</option>
                  {VIOLATION_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Date of Incident</label>
                <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
              </div>
              <div className="form-group">
                <label>Supporting URL (optional)</label>
                <input type="url" placeholder="https://..." value={form.url} onChange={e => setForm({ ...form, url: e.target.value })} />
              </div>
              <div className="form-group form-group--full">
                <label>Description</label>
                <textarea
                  rows={3}
                  placeholder="Describe the anti-competitive behavior you observed..."
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  required
                />
              </div>
              <div className="form-group form-group--full">
                <label>Business Impact</label>
                <textarea
                  rows={2}
                  placeholder="How did this behavior affect your business?"
                  value={form.impact}
                  onChange={e => setForm({ ...form, impact: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
              <button type="submit" className="btn btn-primary">Save Evidence</button>
            </div>
          </form>
        )}

        <div className="evidence-list-section">
          {items.length === 0 ? (
            <div className="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14,2 14,8 20,8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>No evidence documented yet</h3>
              <p>Start building your case by adding evidence of anti-competitive behavior.</p>
              <button className="btn btn-primary" onClick={() => setShowForm(true)}>Add First Evidence</button>
            </div>
          ) : (
            <div className="evidence-items">
              {items.map(item => (
                <div className="evidence-card" key={item.id}>
                  <div className="evidence-card-header">
                    <div>
                      <div className="evidence-card-meta">
                        <span className="evidence-id">{item.id}</span>
                        <StatusBadge status={item.status} />
                      </div>
                      <h3>{item.violationType}</h3>
                      <span className="evidence-platform">{item.platform} — {item.date}</span>
                    </div>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                  </div>
                  <p className="evidence-desc">{item.description}</p>
                  {item.url && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="evidence-link">
                      {item.url}
                    </a>
                  )}
                  <div className="evidence-impact">
                    <strong>Impact:</strong> {item.impact}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
