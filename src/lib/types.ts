export interface ViolationCategory {
  name: string;
  score: number;
  evidence: string[];
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface ScanResult {
  platform: string;
  overallRisk: number;
  categories: ViolationCategory[];
  timestamp: string;
}

export interface EvidenceItem {
  id: string;
  platform: string;
  violationType: string;
  description: string;
  url?: string;
  date: string;
  impact: string;
  status: 'draft' | 'verified' | 'submitted';
}

export interface CaseItem {
  id: string;
  title: string;
  platform: string;
  violationType: string;
  status: 'investigating' | 'evidence-gathering' | 'filing' | 'active' | 'resolved' | 'won';
  filedDate: string;
  lastUpdate: string;
  penalty?: string;
  businesses: number;
}

export interface CoalitionMember {
  id: string;
  name: string;
  industry: string;
  joinDate: string;
  casesJoined: number;
}

export type Page = 'home' | 'scanner' | 'evidence' | 'complaint' | 'cases' | 'coalition';
