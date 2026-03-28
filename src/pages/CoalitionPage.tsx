import { SAMPLE_COALITION, INDUSTRIES } from '../lib/data';
import './CoalitionPage.css';

export function CoalitionPage() {
  const totalCases = SAMPLE_COALITION.reduce((sum, m) => sum + m.casesJoined, 0);

  return (
    <div className="coalition-page">
      <div className="container">
        <div className="page-header">
          <h1>The Coalition</h1>
          <p>Small businesses united against anti-competitive AI practices. Strength in numbers — every member amplifies our collective voice.</p>
        </div>

        <div className="coalition-stats">
          <div className="coal-stat">
            <span className="coal-stat-number">{SAMPLE_COALITION.length}</span>
            <span className="coal-stat-label">Member Businesses</span>
          </div>
          <div className="coal-stat">
            <span className="coal-stat-number">{INDUSTRIES.length}</span>
            <span className="coal-stat-label">Industries</span>
          </div>
          <div className="coal-stat">
            <span className="coal-stat-number">{totalCases}</span>
            <span className="coal-stat-label">Cases Joined</span>
          </div>
          <div className="coal-stat coal-stat--cta">
            <span className="coal-stat-label" style={{ marginBottom: '8px' }}>Ready to fight back?</span>
            <button className="btn btn-primary btn-sm">Join the Coalition</button>
          </div>
        </div>

        <div className="coalition-grid-section">
          <div className="coalition-grid-header">
            <h2>Coalition Members</h2>
            <span className="member-count">{SAMPLE_COALITION.length} members</span>
          </div>

          <div className="industry-tags">
            {INDUSTRIES.map(ind => (
              <span key={ind} className="industry-tag">{ind}</span>
            ))}
          </div>

          <div className="members-grid">
            {SAMPLE_COALITION.map(member => (
              <div className="member-card" key={member.id}>
                <div className="member-avatar">
                  {member.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span className="member-industry">{member.industry}</span>
                  <div className="member-meta">
                    <span>Joined {new Date(member.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    <span className="member-cases">{member.casesJoined} cases</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="coalition-cta">
          <div className="coalition-cta-inner">
            <h2>Together, we're stronger.</h2>
            <p>
              Every business that joins the coalition strengthens our cases. Your experience matters.
              Whether you've faced API lock-in, predatory pricing, or forced bundling —
              your voice adds weight to the collective fight for fair competition.
            </p>
            <div className="coalition-cta-actions">
              <button className="btn btn-primary btn-lg">Apply to Join</button>
              <button className="btn btn-outline btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
