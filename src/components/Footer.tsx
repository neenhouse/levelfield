import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <svg className="footer-logo" viewBox="0 0 64 64" fill="none">
            <rect x="30" y="8" width="4" height="40" rx="2" fill="#3B82F6"/>
            <rect x="16" y="48" width="32" height="4" rx="2" fill="#3B82F6"/>
            <rect x="8" y="16" width="48" height="3" rx="1.5" fill="#D97706"/>
            <path d="M8 19 L4 32 Q4 36 12 36 Q20 36 20 32 L16 19" fill="#3B82F6" opacity="0.7"/>
            <path d="M48 19 L44 32 Q44 36 52 36 Q60 36 60 32 L56 19" fill="#D97706" opacity="0.7"/>
            <circle cx="32" cy="14" r="4" fill="#3B82F6"/>
          </svg>
          <div>
            <h4>LevelField</h4>
            <p>Anti-monopoly AI toolkit for small businesses</p>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h5>Product</h5>
            <span>Competition Scanner</span>
            <span>Evidence Builder</span>
            <span>Complaint Generator</span>
          </div>
          <div className="footer-col">
            <h5>Resources</h5>
            <span>FTC Guidelines</span>
            <span>DOJ Antitrust</span>
            <span>EU Digital Markets Act</span>
          </div>
          <div className="footer-col">
            <h5>Coalition</h5>
            <span>Join Us</span>
            <span>Active Cases</span>
            <span>Impact Report</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2026 LevelField. Built for the businesses that big tech forgot.</p>
          <p className="footer-disclaimer">This is a demo application. No real complaints are filed.</p>
        </div>
      </div>
    </footer>
  );
}
