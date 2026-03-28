import './RiskMeter.css';

interface RiskMeterProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

function getSeverityColor(score: number): string {
  if (score >= 80) return 'var(--danger)';
  if (score >= 60) return 'var(--gold)';
  if (score >= 40) return 'var(--warning)';
  return 'var(--success)';
}

function getSeverityLabel(score: number): string {
  if (score >= 80) return 'Critical';
  if (score >= 60) return 'High';
  if (score >= 40) return 'Medium';
  return 'Low';
}

export function RiskMeter({ score, size = 'md', showLabel = true }: RiskMeterProps) {
  const color = getSeverityColor(score);
  const label = getSeverityLabel(score);
  const dims = size === 'lg' ? 120 : size === 'md' ? 80 : 48;
  const strokeWidth = size === 'lg' ? 8 : size === 'md' ? 6 : 4;
  const radius = (dims - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className={`risk-meter risk-meter--${size}`}>
      <svg width={dims} height={dims} viewBox={`0 0 ${dims} ${dims}`}>
        <circle
          cx={dims / 2}
          cy={dims / 2}
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={dims / 2}
          cy={dims / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${dims / 2} ${dims / 2})`}
          style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
        />
        <text
          x={dims / 2}
          y={dims / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fill={color}
          fontSize={size === 'lg' ? 28 : size === 'md' ? 20 : 14}
          fontWeight="700"
          fontFamily="var(--font-display)"
        >
          {score}
        </text>
      </svg>
      {showLabel && <span className="risk-label" style={{ color }}>{label} Risk</span>}
    </div>
  );
}
