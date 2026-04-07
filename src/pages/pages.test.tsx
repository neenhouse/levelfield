import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';
import { ScannerPage } from './ScannerPage';
import { EvidencePage } from './EvidencePage';
import { ComplaintPage } from './ComplaintPage';
import { CasesPage } from './CasesPage';
import { CoalitionPage } from './CoalitionPage';
import type { Page } from '../lib/types';

const navigate = (_page: Page) => {};

beforeEach(() => {
  localStorage.clear();
});

describe('HomePage', () => {
  it('renders hero section', () => {
    render(<HomePage onNavigate={navigate} />);
    expect(screen.getByText('Level the')).toBeInTheDocument();
    expect(screen.getByText('Playing Field')).toBeInTheDocument();
  });

  it('renders the three pillars', () => {
    render(<HomePage onNavigate={navigate} />);
    expect(screen.getByText('Detect')).toBeInTheDocument();
    expect(screen.getByText('Document')).toBeInTheDocument();
    expect(screen.getByText('File')).toBeInTheDocument();
  });

  it('renders violation categories', () => {
    render(<HomePage onNavigate={navigate} />);
    expect(screen.getByText('Self-preferencing')).toBeInTheDocument();
    expect(screen.getByText('Data Moats')).toBeInTheDocument();
    expect(screen.getByText('API Lock-in')).toBeInTheDocument();
  });
});

describe('ScannerPage', () => {
  it('renders scanner header', () => {
    render(<ScannerPage />);
    expect(screen.getByRole('heading', { name: 'Competition Scanner' })).toBeInTheDocument();
  });

  it('renders the platform input', () => {
    render(<ScannerPage />);
    expect(screen.getByPlaceholderText(/Enter platform name/)).toBeInTheDocument();
  });

  it('renders quick scan buttons for known platforms', () => {
    render(<ScannerPage />);
    expect(screen.getByText('OpenAI')).toBeInTheDocument();
    expect(screen.getByText('Google AI')).toBeInTheDocument();
  });

  it('scan button is disabled when input is empty', () => {
    render(<ScannerPage />);
    expect(screen.getByText('Scan Platform')).toBeDisabled();
  });
});

describe('EvidencePage', () => {
  it('renders evidence header', () => {
    render(<EvidencePage />);
    expect(screen.getByRole('heading', { name: 'Evidence Builder' })).toBeInTheDocument();
  });

  it('shows empty state when no evidence exists', () => {
    render(<EvidencePage />);
    expect(screen.getByText('No evidence documented yet')).toBeInTheDocument();
  });

  it('shows add evidence button', () => {
    render(<EvidencePage />);
    expect(screen.getByText('+ Add Evidence')).toBeInTheDocument();
  });
});

describe('ComplaintPage', () => {
  it('renders complaint header', () => {
    render(<ComplaintPage />);
    expect(screen.getByRole('heading', { name: 'Complaint Generator' })).toBeInTheDocument();
  });

  it('renders agency selector', () => {
    render(<ComplaintPage />);
    expect(screen.getByText('Federal Trade Commission (FTC)')).toBeInTheDocument();
    expect(screen.getByText('Department of Justice (DOJ)')).toBeInTheDocument();
  });

  it('renders generate button', () => {
    render(<ComplaintPage />);
    expect(screen.getByText('Generate Complaint Letter')).toBeInTheDocument();
  });
});

describe('CasesPage', () => {
  it('renders case tracker heading', () => {
    render(<CasesPage />);
    expect(screen.getByRole('heading', { name: 'Case Tracker' })).toBeInTheDocument();
  });

  it('shows case stats', () => {
    render(<CasesPage />);
    expect(screen.getByText('Total Cases')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Penalties Won')).toBeInTheDocument();
  });

  it('renders active cases section', () => {
    render(<CasesPage />);
    expect(screen.getByText('Active Cases')).toBeInTheDocument();
  });
});

describe('CoalitionPage', () => {
  it('renders coalition heading', () => {
    render(<CoalitionPage />);
    expect(screen.getByRole('heading', { name: 'The Coalition' })).toBeInTheDocument();
  });

  it('shows member count stat', () => {
    render(<CoalitionPage />);
    expect(screen.getByText('Member Businesses')).toBeInTheDocument();
  });

  it('renders member cards', () => {
    render(<CoalitionPage />);
    expect(screen.getByText('Acme Analytics')).toBeInTheDocument();
    expect(screen.getByText('DataForge Inc.')).toBeInTheDocument();
  });
});
