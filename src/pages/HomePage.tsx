import { useEffect, useRef } from 'react';
import type { Page } from '../lib/types';
import './HomePage.css';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const heroImgRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (heroImgRef.current) {
          const scrollY = window.scrollY;
          heroImgRef.current.style.transform = `translateY(${scrollY * 0.18}px) scale(1.08)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-og-parallax" aria-hidden="true">
          <video ref={heroImgRef} autoPlay muted loop playsInline poster="/hero-og.webp" className="hero-og-parallax-img">
            <source src="/hero-og.webm" type="video/webm" />
            <source src="/hero-og.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container hero-inner">
          <div className="hero-badge">Anti-Monopoly AI Toolkit</div>
          <h1 className="hero-title">
            Level the <span className="gradient-text">Playing Field</span>
          </h1>
          <p className="hero-subtitle">
            Small businesses fight big tech monopolies. Together.
            <br />
            Detect anti-competitive AI practices, build evidence, and file complaints — automatically.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg" onClick={() => onNavigate('scanner')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M3 7V5a2 2 0 012-2h2" />
                <path d="M17 3h2a2 2 0 012 2v2" />
                <path d="M21 17v2a2 2 0 01-2 2h-2" />
                <path d="M7 21H5a2 2 0 01-2-2v-2" />
                <line x1="7" y1="12" x2="17" y2="12" />
              </svg>
              Scan a Platform
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => onNavigate('coalition')}>
              Join the Coalition
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">23</span>
              <span className="stat-label">Active Cases</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">$14.2M</span>
              <span className="stat-label">Penalties Won</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">1,247</span>
              <span className="stat-label">Businesses Protected</span>
            </div>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* How it works */}
      <section className="pillars">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Three steps to holding big tech accountable</p>
          <div className="pillar-grid">
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon--detect">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <div className="pillar-step">Step 1</div>
              <h3>Detect</h3>
              <p>Scan AI platforms for anti-competitive behavior across six violation categories. Our analysis engine scores risk in real-time.</p>
            </div>
            <div className="pillar-connector">
              <svg viewBox="0 0 40 24" fill="none">
                <path d="M0 12h32M28 6l6 6-6 6" stroke="var(--steel)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon--document">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div className="pillar-step">Step 2</div>
              <h3>Document</h3>
              <p>Build structured evidence packages with timestamps, URLs, and impact assessments. Everything a regulator needs.</p>
            </div>
            <div className="pillar-connector">
              <svg viewBox="0 0 40 24" fill="none">
                <path d="M0 12h32M28 6l6 6-6 6" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon--file">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2l5 5-7 7-5-5z" />
                  <path d="M9.5 12L4 17.5 6.5 20 12 14.5" />
                  <path d="M3 21h18" />
                </svg>
              </div>
              <div className="pillar-step">Step 3</div>
              <h3>File</h3>
              <p>Auto-generate formatted FTC and DOJ complaints. Join forces with other affected businesses for maximum impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Violations tracked */}
      <section className="violations">
        <div className="container">
          <h2 className="section-title">What We Track</h2>
          <p className="section-subtitle">Six categories of anti-competitive AI behavior</p>
          <div className="violation-grid">
            {[
              { name: 'Self-preferencing', desc: 'Platforms favoring their own AI products over competitors in search, recommendations, and defaults.', icon: '01' },
              { name: 'Data Moats', desc: 'Using proprietary user data to create insurmountable training advantages that lock out competition.', icon: '02' },
              { name: 'Predatory Pricing', desc: 'Below-cost pricing designed to eliminate competitors and capture market share through subsidized AI services.', icon: '03' },
              { name: 'API Lock-in', desc: 'Proprietary formats, non-portable models, and missing migration tools that trap developers.', icon: '04' },
              { name: 'Forced Bundling', desc: 'Requiring AI features in existing products without choice, eliminating standalone alternatives.', icon: '05' },
              { name: 'Market Manipulation', desc: 'Strategic timing, enterprise pressure, and cross-product leverage to distort competitive dynamics.', icon: '06' },
            ].map(v => (
              <div className="violation-card" key={v.name}>
                <span className="violation-number">{v.icon}</span>
                <h3>{v.name}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>David finally gets a weapon.</h2>
          <p>Join 1,247 businesses fighting back against anti-competitive AI practices. Together, we level the field.</p>
          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg" onClick={() => onNavigate('scanner')}>
              Start Scanning
            </button>
            <button className="btn btn-gold btn-lg" onClick={() => onNavigate('cases')}>
              View Active Cases
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
