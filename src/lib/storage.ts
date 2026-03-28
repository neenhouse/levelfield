import type { EvidenceItem, ScanResult } from './types';

const STORAGE_KEYS = {
  SCANS: 'levelfield_scans',
  EVIDENCE: 'levelfield_evidence',
} as const;

export function saveScan(result: ScanResult): void {
  const existing = getScans();
  existing.unshift(result);
  localStorage.setItem(STORAGE_KEYS.SCANS, JSON.stringify(existing.slice(0, 50)));
}

export function getScans(): ScanResult[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SCANS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveEvidence(item: EvidenceItem): void {
  const existing = getEvidence();
  existing.unshift(item);
  localStorage.setItem(STORAGE_KEYS.EVIDENCE, JSON.stringify(existing));
}

export function getEvidence(): EvidenceItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.EVIDENCE);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function deleteEvidence(id: string): void {
  const existing = getEvidence().filter(e => e.id !== id);
  localStorage.setItem(STORAGE_KEYS.EVIDENCE, JSON.stringify(existing));
}
