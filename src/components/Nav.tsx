import type { ReactNode } from 'react';
import type { Page } from '../lib/types';
import './Nav.css';

interface NavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS: { page: Page; label: string; icon: string }[] = [
  { page: 'home', label: 'Home', icon: 'home' },
  { page: 'scanner', label: 'Scanner', icon: 'scan' },
  { page: 'evidence', label: 'Evidence', icon: 'file' },
  { page: 'complaint', label: 'Complaints', icon: 'gavel' },
  { page: 'cases', label: 'Cases', icon: 'briefcase' },
  { page: 'coalition', label: 'Coalition', icon: 'users' },
];

const ICONS: Record<string, ReactNode> = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  ),
  scan: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 012-2h2" />
      <path d="M17 3h2a2 2 0 012 2v2" />
      <path d="M21 17v2a2 2 0 01-2 2h-2" />
      <path d="M7 21H5a2 2 0 01-2-2v-2" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  gavel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2l5 5-7 7-5-5z" />
      <path d="M9.5 12L4 17.5 6.5 20 12 14.5" />
      <path d="M3 21h18" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
};

export function Nav({ currentPage, onNavigate }: NavProps) {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <button className="nav-brand" onClick={() => onNavigate('home')}>
          <svg className="nav-logo" viewBox="0 0 64 64" fill="none">
            <rect x="30" y="8" width="4" height="40" rx="2" fill="#3B82F6"/>
            <rect x="16" y="48" width="32" height="4" rx="2" fill="#3B82F6"/>
            <rect x="8" y="16" width="48" height="3" rx="1.5" fill="#D97706"/>
            <path d="M8 19 L4 32 Q4 36 12 36 Q20 36 20 32 L16 19" fill="#3B82F6" opacity="0.7"/>
            <path d="M48 19 L44 32 Q44 36 52 36 Q60 36 60 32 L56 19" fill="#D97706" opacity="0.7"/>
            <circle cx="32" cy="14" r="4" fill="#3B82F6"/>
          </svg>
          <span className="nav-name">LevelField</span>
        </button>

        <div className="nav-links">
          {NAV_ITEMS.map(item => (
            <button
              key={item.page}
              className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
              onClick={() => onNavigate(item.page)}
            >
              <span className="nav-icon">{ICONS[item.icon]}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
