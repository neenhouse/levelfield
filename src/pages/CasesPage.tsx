import { SAMPLE_CASES } from '../lib/data';
import { StatusBadge } from '../components/StatusBadge';
import './CasesPage.css';

export function CasesPage() {
  const activeCases = SAMPLE_CASES.filter(c => c.status === 'active' || c.status === 'filing' || c.status === 'evidence-gathering' || c.status === 'investigating');
  const resolvedCases = SAMPLE_CASES.filter(c => c.status === 'resolved' || c.status === 'won');

  const totalPenalties = SAMPLE_CASES
    .filter(c => c.penalty)
    .reduce((sum, c) => {
      const match = c.penalty!.match(/\$([\d.]+)M/);
      return sum + (match ? parseFloat(match[1]) : 0);
    }, 0);

  const totalBusinesses = SAMPLE_CASES.reduce((sum, c) => sum + c.businesses, 0);

  return (
    <div className="cases-page">
      <div className="container">
        <div className="page-header">
          <h1>Case Tracker</h1>
          <p>Monitor active antitrust cases, their status, and outcomes. Every case represents collective action by small businesses.</p>
        </div>

        <div className="cases-stats">
          <div className="case-stat">
            <span className="case-stat-number">{SAMPLE_CASES.length}</span>
            <span className="case-stat-label">Total Cases</span>
          </div>
          <div className="case-stat">
            <span className="case-stat-number">{activeCases.length}</span>
            <span className="case-stat-label">Active</span>
          </div>
          <div className="case-stat">
            <span className="case-stat-number">${totalPenalties.toFixed(1)}M</span>
            <span className="case-stat-label">Penalties Won</span>
          </div>
          <div className="case-stat">
            <span className="case-stat-number">{totalBusinesses.toLocaleString()}</span>
            <span className="case-stat-label">Businesses Represented</span>
          </div>
        </div>

        <div className="cases-section">
          <h2>Active Cases</h2>
          <div className="cases-list">
            {activeCases.map(c => (
              <div className="case-card" key={c.id}>
                <div className="case-card-top">
                  <div className="case-card-id">{c.id}</div>
                  <StatusBadge status={c.status} />
                </div>
                <h3>{c.title}</h3>
                <div className="case-card-details">
                  <div className="case-detail">
                    <span className="detail-label">Platform</span>
                    <span className="detail-value">{c.platform}</span>
                  </div>
                  <div className="case-detail">
                    <span className="detail-label">Violation</span>
                    <span className="detail-value">{c.violationType}</span>
                  </div>
                  <div className="case-detail">
                    <span className="detail-label">Filed</span>
                    <span className="detail-value">{c.filedDate}</span>
                  </div>
                  <div className="case-detail">
                    <span className="detail-label">Last Update</span>
                    <span className="detail-value">{c.lastUpdate}</span>
                  </div>
                  <div className="case-detail">
                    <span className="detail-label">Businesses</span>
                    <span className="detail-value">{c.businesses}</span>
                  </div>
                  {c.penalty && (
                    <div className="case-detail">
                      <span className="detail-label">Penalty</span>
                      <span className="detail-value detail-value--gold">{c.penalty}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {resolvedCases.length > 0 && (
          <div className="cases-section">
            <h2>Resolved Cases</h2>
            <div className="cases-list">
              {resolvedCases.map(c => (
                <div className="case-card case-card--resolved" key={c.id}>
                  <div className="case-card-top">
                    <div className="case-card-id">{c.id}</div>
                    <StatusBadge status={c.status} />
                  </div>
                  <h3>{c.title}</h3>
                  <div className="case-card-details">
                    <div className="case-detail">
                      <span className="detail-label">Platform</span>
                      <span className="detail-value">{c.platform}</span>
                    </div>
                    <div className="case-detail">
                      <span className="detail-label">Violation</span>
                      <span className="detail-value">{c.violationType}</span>
                    </div>
                    <div className="case-detail">
                      <span className="detail-label">Penalty</span>
                      <span className="detail-value detail-value--gold">{c.penalty}</span>
                    </div>
                    <div className="case-detail">
                      <span className="detail-label">Businesses</span>
                      <span className="detail-value">{c.businesses}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
