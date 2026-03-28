import type { CaseItem, CoalitionMember, ViolationCategory } from './types';

export const VIOLATION_TYPES = [
  'Self-preferencing',
  'Data moats',
  'Predatory pricing',
  'API lock-in',
  'Forced bundling',
  'Market manipulation',
] as const;

export const PLATFORM_DATA: Record<string, ViolationCategory[]> = {
  'OpenAI': [
    { name: 'Self-preferencing', score: 82, severity: 'high', evidence: [
      'ChatGPT prominently features own plugins over third-party alternatives',
      'API pricing structure favors internal products',
      'Search integration prioritizes OpenAI-generated content',
    ]},
    { name: 'Data moats', score: 91, severity: 'critical', evidence: [
      'Training data collected from user conversations without opt-out',
      'No data portability for fine-tuned models',
      'Proprietary dataset advantages from early market position',
    ]},
    { name: 'Predatory pricing', score: 67, severity: 'medium', evidence: [
      'Below-cost API pricing to eliminate competitors',
      'Free tier designed to create switching costs',
      'Enterprise discounts conditioned on exclusivity',
    ]},
    { name: 'API lock-in', score: 78, severity: 'high', evidence: [
      'Proprietary function calling format',
      'Non-standard embedding dimensions',
      'Migration tools deliberately absent',
    ]},
    { name: 'Forced bundling', score: 55, severity: 'medium', evidence: [
      'DALL-E bundled with ChatGPT Plus subscription',
      'Code interpreter requires premium tier',
    ]},
    { name: 'Market manipulation', score: 44, severity: 'low', evidence: [
      'Strategic partnership announcements timed to competitor launches',
      'Selective capability releases to maintain market position',
    ]},
  ],
  'Google AI': [
    { name: 'Self-preferencing', score: 95, severity: 'critical', evidence: [
      'Gemini deeply integrated into Search, displacing competitors',
      'Google Workspace AI features unavailable to third-party alternatives',
      'Android AI assistant defaults to Gemini with no choice screen',
    ]},
    { name: 'Data moats', score: 88, severity: 'critical', evidence: [
      'Leverages Search data for AI training — no competitor access',
      'YouTube video data exclusively used for multimodal training',
      'Gmail/Docs data creates insurmountable training advantage',
    ]},
    { name: 'Predatory pricing', score: 72, severity: 'high', evidence: [
      'Gemini API priced below cost to match/undercut OpenAI',
      'Free Gemini in Google Workspace to prevent AI startup adoption',
      'Cloud AI credits designed to create vendor lock-in',
    ]},
    { name: 'API lock-in', score: 70, severity: 'medium', evidence: [
      'Vertex AI proprietary tooling ecosystem',
      'Non-portable fine-tuned model weights',
      'GCP-specific deployment requirements',
    ]},
    { name: 'Forced bundling', score: 85, severity: 'high', evidence: [
      'AI features bundled into Workspace at no additional cost to kill alternatives',
      'Gemini Advanced requires Google One subscription',
      'Search AI Overview cannot be disabled',
    ]},
    { name: 'Market manipulation', score: 63, severity: 'medium', evidence: [
      'Modifying search ranking to favor AI-generated results',
      'Using Chrome market share to push Gemini',
    ]},
  ],
  'Amazon AI': [
    { name: 'Self-preferencing', score: 74, severity: 'high', evidence: [
      'Bedrock platform prioritizes Amazon Titan models in defaults',
      'Alexa AI features only available through Amazon ecosystem',
      'AWS credits conditioned on using Amazon AI services',
    ]},
    { name: 'Data moats', score: 69, severity: 'medium', evidence: [
      'E-commerce data used for AI product recommendations',
      'Alexa voice data creates training advantage',
      'AWS usage patterns inform AI product development',
    ]},
    { name: 'Predatory pricing', score: 61, severity: 'medium', evidence: [
      'Below-cost Bedrock pricing for enterprise customers',
      'Free tier AI credits to capture startups',
    ]},
    { name: 'API lock-in', score: 77, severity: 'high', evidence: [
      'SageMaker proprietary model format',
      'AWS-specific deployment and inference pipeline',
      'Bedrock customizations non-portable',
    ]},
    { name: 'Forced bundling', score: 58, severity: 'medium', evidence: [
      'AI features bundled with Prime membership',
      'Bedrock requires AWS account with minimum spend',
    ]},
    { name: 'Market manipulation', score: 40, severity: 'low', evidence: [
      'Strategic timing of AI product launches around competitor events',
    ]},
  ],
  'Meta AI': [
    { name: 'Self-preferencing', score: 60, severity: 'medium', evidence: [
      'Llama models given preferential access on Meta platforms',
      'Instagram/Facebook AI features use proprietary models only',
    ]},
    { name: 'Data moats', score: 86, severity: 'critical', evidence: [
      'Social graph data provides unique training advantage',
      '3B+ user content used for model training',
      'WhatsApp interaction data informing AI development',
    ]},
    { name: 'Predatory pricing', score: 45, severity: 'low', evidence: [
      'Llama released free to undercut commercial competitors',
      'Open-source strategy designed to commoditize competitors',
    ]},
    { name: 'API lock-in', score: 35, severity: 'low', evidence: [
      'Llama licensing terms restrict certain commercial uses',
    ]},
    { name: 'Forced bundling', score: 72, severity: 'high', evidence: [
      'Meta AI integrated across all Meta platforms without opt-out',
      'Business messaging AI requires Meta Business Suite',
      'Ad targeting AI bundled with campaign management',
    ]},
    { name: 'Market manipulation', score: 52, severity: 'medium', evidence: [
      'Open-source framing masks competitive strategy',
      'Selective model releases timed to competitor milestones',
    ]},
  ],
  'Microsoft AI': [
    { name: 'Self-preferencing', score: 88, severity: 'critical', evidence: [
      'Copilot deeply integrated into Windows, Office, Edge',
      'Bing Chat prioritized over competitors in Edge/Windows',
      'Azure OpenAI given exclusive features not in OpenAI API',
    ]},
    { name: 'Data moats', score: 75, severity: 'high', evidence: [
      'Office 365 document data used for Copilot training',
      'LinkedIn data provides unique professional AI training set',
      'GitHub Copilot trained on millions of repositories',
    ]},
    { name: 'Predatory pricing', score: 58, severity: 'medium', evidence: [
      'Azure AI credits below cost to capture enterprises',
      'Copilot bundled at minimal marginal cost in M365',
    ]},
    { name: 'API lock-in', score: 82, severity: 'high', evidence: [
      'Azure-specific model deployment format',
      'Proprietary Copilot plugin system',
      'Teams AI integration requires Microsoft ecosystem',
    ]},
    { name: 'Forced bundling', score: 90, severity: 'critical', evidence: [
      'Copilot in Windows 11 cannot be fully removed',
      'M365 Copilot requires E3/E5 license tier',
      'Edge AI features push users away from Chrome/Firefox',
      'Bing AI embedded in Start Menu search',
    ]},
    { name: 'Market manipulation', score: 70, severity: 'high', evidence: [
      'Enterprise licensing pressure to adopt full AI stack',
      'Strategic investment in OpenAI to control market direction',
      'Using OS market share to push AI products',
    ]},
  ],
};

export const SAMPLE_CASES: CaseItem[] = [
  {
    id: 'CASE-2026-001',
    title: 'Google Search AI Self-Preferencing',
    platform: 'Google AI',
    violationType: 'Self-preferencing',
    status: 'active',
    filedDate: '2026-01-15',
    lastUpdate: '2026-03-20',
    penalty: '$8.2M',
    businesses: 147,
  },
  {
    id: 'CASE-2026-002',
    title: 'Microsoft Copilot Forced Bundling',
    platform: 'Microsoft AI',
    violationType: 'Forced bundling',
    status: 'won',
    filedDate: '2025-11-03',
    lastUpdate: '2026-02-28',
    penalty: '$3.1M',
    businesses: 89,
  },
  {
    id: 'CASE-2026-003',
    title: 'OpenAI Data Portability Violations',
    platform: 'OpenAI',
    violationType: 'Data moats',
    status: 'filing',
    filedDate: '2026-02-20',
    lastUpdate: '2026-03-22',
    businesses: 234,
  },
  {
    id: 'CASE-2025-047',
    title: 'Amazon Bedrock API Lock-in Practices',
    platform: 'Amazon AI',
    violationType: 'API lock-in',
    status: 'evidence-gathering',
    filedDate: '2026-03-01',
    lastUpdate: '2026-03-25',
    businesses: 56,
  },
  {
    id: 'CASE-2025-045',
    title: 'Meta AI Data Collection Without Consent',
    platform: 'Meta AI',
    violationType: 'Data moats',
    status: 'active',
    filedDate: '2025-09-15',
    lastUpdate: '2026-03-18',
    penalty: '$2.9M',
    businesses: 312,
  },
  {
    id: 'CASE-2025-039',
    title: 'Google Workspace AI Exclusion',
    platform: 'Google AI',
    violationType: 'Forced bundling',
    status: 'resolved',
    filedDate: '2025-07-22',
    lastUpdate: '2026-01-10',
    penalty: '$5.4M (settlement)',
    businesses: 201,
  },
  {
    id: 'CASE-2026-004',
    title: 'OpenAI Enterprise Exclusivity Pricing',
    platform: 'OpenAI',
    violationType: 'Predatory pricing',
    status: 'investigating',
    filedDate: '2026-03-10',
    lastUpdate: '2026-03-24',
    businesses: 42,
  },
];

export const SAMPLE_COALITION: CoalitionMember[] = [
  { id: '1', name: 'Acme Analytics', industry: 'Data Analytics', joinDate: '2025-06-15', casesJoined: 3 },
  { id: '2', name: 'BrightPath Education', industry: 'EdTech', joinDate: '2025-07-02', casesJoined: 2 },
  { id: '3', name: 'CloudNest Solutions', industry: 'Cloud Infrastructure', joinDate: '2025-07-18', casesJoined: 4 },
  { id: '4', name: 'DataForge Inc.', industry: 'AI/ML Services', joinDate: '2025-08-01', casesJoined: 5 },
  { id: '5', name: 'EchoVerse Media', industry: 'Digital Media', joinDate: '2025-08-14', casesJoined: 1 },
  { id: '6', name: 'FlowState Health', industry: 'HealthTech', joinDate: '2025-09-03', casesJoined: 2 },
  { id: '7', name: 'GreenGrid Energy', industry: 'CleanTech', joinDate: '2025-09-20', casesJoined: 3 },
  { id: '8', name: 'HarborView Legal', industry: 'LegalTech', joinDate: '2025-10-05', casesJoined: 6 },
  { id: '9', name: 'InnoVault Security', industry: 'Cybersecurity', joinDate: '2025-10-22', casesJoined: 2 },
  { id: '10', name: 'JoltWire Fintech', industry: 'Financial Services', joinDate: '2025-11-08', casesJoined: 4 },
  { id: '11', name: 'KernelSpace Labs', industry: 'Developer Tools', joinDate: '2025-11-25', casesJoined: 3 },
  { id: '12', name: 'LuminAI Research', industry: 'AI Research', joinDate: '2025-12-10', casesJoined: 5 },
  { id: '13', name: 'MapleLeaf Commerce', industry: 'E-Commerce', joinDate: '2026-01-05', casesJoined: 2 },
  { id: '14', name: 'NexGen Robotics', industry: 'Manufacturing', joinDate: '2026-01-20', casesJoined: 1 },
  { id: '15', name: 'OpalStream Analytics', industry: 'Business Intelligence', joinDate: '2026-02-03', casesJoined: 3 },
  { id: '16', name: 'PulsePoint Marketing', industry: 'MarTech', joinDate: '2026-02-18', casesJoined: 2 },
];

export const INDUSTRIES = [...new Set(SAMPLE_COALITION.map(m => m.industry))];

export function generateScanResult(platform: string): {
  overallRisk: number;
  categories: ViolationCategory[];
} {
  const knownPlatform = Object.keys(PLATFORM_DATA).find(
    k => k.toLowerCase() === platform.toLowerCase()
  );

  if (knownPlatform) {
    const categories = PLATFORM_DATA[knownPlatform];
    const overallRisk = Math.round(
      categories.reduce((sum, c) => sum + c.score, 0) / categories.length
    );
    return { overallRisk, categories };
  }

  // Generate random-ish results for unknown platforms
  const categories: ViolationCategory[] = VIOLATION_TYPES.map(name => {
    const score = Math.floor(Math.random() * 60) + 20;
    return {
      name,
      score,
      severity: score > 80 ? 'critical' : score > 60 ? 'high' : score > 40 ? 'medium' : 'low',
      evidence: [
        `Detected potential ${name.toLowerCase()} behavior patterns`,
        `Market analysis indicates moderate risk in this category`,
      ],
    };
  });
  const overallRisk = Math.round(
    categories.reduce((sum, c) => sum + c.score, 0) / categories.length
  );
  return { overallRisk, categories };
}
