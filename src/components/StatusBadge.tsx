import './StatusBadge.css';

interface StatusBadgeProps {
  status: string;
  variant?: 'default' | 'severity';
}

const STATUS_CONFIG: Record<string, { color: string; bg: string }> = {
  investigating: { color: '#60A5FA', bg: 'rgba(96,165,250,0.12)' },
  'evidence-gathering': { color: '#F59E0B', bg: 'rgba(245,158,11,0.12)' },
  filing: { color: '#A78BFA', bg: 'rgba(167,139,250,0.12)' },
  active: { color: '#34D399', bg: 'rgba(52,211,153,0.12)' },
  resolved: { color: '#9CA3AF', bg: 'rgba(156,163,175,0.12)' },
  won: { color: '#10B981', bg: 'rgba(16,185,129,0.15)' },
  draft: { color: '#9CA3AF', bg: 'rgba(156,163,175,0.12)' },
  verified: { color: '#60A5FA', bg: 'rgba(96,165,250,0.12)' },
  submitted: { color: '#10B981', bg: 'rgba(16,185,129,0.12)' },
  low: { color: '#10B981', bg: 'rgba(16,185,129,0.12)' },
  medium: { color: '#F59E0B', bg: 'rgba(245,158,11,0.12)' },
  high: { color: '#EF4444', bg: 'rgba(239,68,68,0.12)' },
  critical: { color: '#DC2626', bg: 'rgba(220,38,38,0.15)' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.draft;

  return (
    <span
      className="status-badge"
      style={{
        color: config.color,
        background: config.bg,
        borderColor: config.color,
      }}
    >
      <span className="status-dot" style={{ background: config.color }} />
      {status.replace('-', ' ')}
    </span>
  );
}
