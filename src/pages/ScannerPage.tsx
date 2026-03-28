import { useState } from 'react';
import { generateScanResult, PLATFORM_DATA } from '../lib/data';
import { saveScan } from '../lib/storage';
import type { ScanResult } from '../lib/types';
import { RiskMeter } from '../components/RiskMeter';
import { StatusBadge } from '../components/StatusBadge';
import './ScannerPage.css';

export function ScannerPage() {
  const [platform, setPlatform] = useState('');
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const knownPlatforms = Object.keys(PLATFORM_DATA);

  function handleScan() {
    if (!platform.trim()) return;
    setScanning(true);
    setResult(null);

    // Simulate scan delay
    setTimeout(() => {
      const { overallRisk, categories } = generateScanResult(platform.trim());
      const scanResult: ScanResult = {
        platform: platform.trim(),
        overallRisk,
        categories,
        timestamp: new Date().toISOString(),
      };
      saveScan(scanResult);
      setResult(scanResult);
      setScanning(false);
    }, 1500);
  }

  return (
    <div className="scanner-page">
      <div className="container">
        <div className="page-header">
          <h1>Competition Scanner</h1>
          <p>Analyze an AI platform's practices against antitrust criteria. Get a scored risk assessment across six violation categories.</p>
        </div>

        <div className="scanner-input-area">
          <div className="scanner-input-row">
            <input
              type="text"
              placeholder="Enter platform name (e.g., OpenAI, Google AI, Meta AI...)"
              value={platform}
              onChange={e => setPlatform(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleScan()}
              className="scanner-input"
            />
            <button
              className="btn btn-primary btn-lg"
              onClick={handleScan}
              disabled={scanning || !platform.trim()}
            >
              {scanning ? (
                <>
                  <span className="spinner" />
                  Scanning...
                </>
              ) : (
                'Scan Platform'
              )}
            </button>
          </div>
          <div className="quick-scan">
            <span className="quick-scan-label">Quick scan:</span>
            {knownPlatforms.map(p => (
              <button
                key={p}
                className="quick-scan-btn"
                onClick={() => { setPlatform(p); }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {scanning && (
          <div className="scan-progress">
            <div className="scan-progress-bar">
              <div className="scan-progress-fill" />
            </div>
            <p>Analyzing {platform} for anti-competitive practices...</p>
          </div>
        )}

        {result && (
          <div className="scan-results">
            <div className="results-header">
              <div className="results-title">
                <h2>{result.platform}</h2>
                <span className="results-time">
                  Scanned {new Date(result.timestamp).toLocaleString()}
                </span>
              </div>
              <RiskMeter score={result.overallRisk} size="lg" />
            </div>

            <div className="category-grid">
              {result.categories.map(cat => (
                <div className="category-card" key={cat.name}>
                  <div className="category-header">
                    <div>
                      <h3>{cat.name}</h3>
                      <StatusBadge status={cat.severity} />
                    </div>
                    <RiskMeter score={cat.score} size="sm" showLabel={false} />
                  </div>
                  <div className="category-bar-track">
                    <div
                      className="category-bar-fill"
                      style={{
                        width: `${cat.score}%`,
                        background: cat.score >= 80 ? 'var(--danger)' :
                          cat.score >= 60 ? 'var(--gold)' :
                          cat.score >= 40 ? 'var(--warning)' : 'var(--success)',
                      }}
                    />
                  </div>
                  <ul className="evidence-list">
                    {cat.evidence.map((ev, i) => (
                      <li key={i}>{ev}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
