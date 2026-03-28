import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the homepage by default', () => {
    render(<App />);
    expect(screen.getByText('Level the')).toBeInTheDocument();
    expect(screen.getByText('Playing Field')).toBeInTheDocument();
  });

  it('navigates to scanner page', () => {
    render(<App />);
    const scannerLinks = screen.getAllByText('Scanner');
    fireEvent.click(scannerLinks[0]);
    expect(screen.getByRole('heading', { name: 'Competition Scanner' })).toBeInTheDocument();
  });

  it('navigates to cases page', () => {
    render(<App />);
    const casesLinks = screen.getAllByText('Cases');
    fireEvent.click(casesLinks[0]);
    expect(screen.getByRole('heading', { name: 'Case Tracker' })).toBeInTheDocument();
  });

  it('navigates to coalition page', () => {
    render(<App />);
    const coalitionLinks = screen.getAllByText('Coalition');
    fireEvent.click(coalitionLinks[0]);
    expect(screen.getByRole('heading', { name: 'The Coalition' })).toBeInTheDocument();
  });

  it('shows the nav brand', () => {
    render(<App />);
    const brands = screen.getAllByText('LevelField');
    expect(brands.length).toBeGreaterThanOrEqual(1);
  });
});
