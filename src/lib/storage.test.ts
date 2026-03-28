import { describe, it, expect, beforeEach } from 'vitest';
import { saveScan, getScans, saveEvidence, getEvidence, deleteEvidence } from './storage';
import type { ScanResult, EvidenceItem } from './types';

beforeEach(() => {
  localStorage.clear();
});

describe('scan storage', () => {
  it('saves and retrieves scans', () => {
    const scan: ScanResult = {
      platform: 'TestPlatform',
      overallRisk: 75,
      categories: [],
      timestamp: new Date().toISOString(),
    };
    saveScan(scan);
    const scans = getScans();
    expect(scans).toHaveLength(1);
    expect(scans[0].platform).toBe('TestPlatform');
  });

  it('returns empty array when no scans exist', () => {
    expect(getScans()).toEqual([]);
  });
});

describe('evidence storage', () => {
  const mockEvidence: EvidenceItem = {
    id: 'EV-001',
    platform: 'TestCo',
    violationType: 'Data moats',
    description: 'Test description',
    date: '2026-01-01',
    impact: 'Revenue loss',
    status: 'draft',
  };

  it('saves and retrieves evidence', () => {
    saveEvidence(mockEvidence);
    const items = getEvidence();
    expect(items).toHaveLength(1);
    expect(items[0].id).toBe('EV-001');
  });

  it('deletes evidence by id', () => {
    saveEvidence(mockEvidence);
    deleteEvidence('EV-001');
    expect(getEvidence()).toHaveLength(0);
  });
});
