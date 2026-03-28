import { describe, it, expect } from 'vitest';
import { generateScanResult, PLATFORM_DATA, VIOLATION_TYPES, SAMPLE_CASES, SAMPLE_COALITION } from './data';

describe('generateScanResult', () => {
  it('returns known platform data for recognized platforms', () => {
    const result = generateScanResult('OpenAI');
    expect(result.categories).toHaveLength(6);
    expect(result.overallRisk).toBeGreaterThan(0);
    expect(result.overallRisk).toBeLessThanOrEqual(100);
  });

  it('is case-insensitive for platform lookup', () => {
    const r1 = generateScanResult('openai');
    const r2 = generateScanResult('OpenAI');
    expect(r1.overallRisk).toBe(r2.overallRisk);
  });

  it('returns generated data for unknown platforms', () => {
    const result = generateScanResult('Unknown Platform XYZ');
    expect(result.categories).toHaveLength(6);
    expect(result.overallRisk).toBeGreaterThan(0);
  });

  it('has all six violation categories for every known platform', () => {
    Object.keys(PLATFORM_DATA).forEach(platform => {
      expect(PLATFORM_DATA[platform]).toHaveLength(VIOLATION_TYPES.length);
    });
  });
});

describe('sample data integrity', () => {
  it('has valid case statuses', () => {
    const validStatuses = ['investigating', 'evidence-gathering', 'filing', 'active', 'resolved', 'won'];
    SAMPLE_CASES.forEach(c => {
      expect(validStatuses).toContain(c.status);
    });
  });

  it('all coalition members have positive cases joined', () => {
    SAMPLE_COALITION.forEach(m => {
      expect(m.casesJoined).toBeGreaterThanOrEqual(1);
    });
  });

  it('cases have unique IDs', () => {
    const ids = SAMPLE_CASES.map(c => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
