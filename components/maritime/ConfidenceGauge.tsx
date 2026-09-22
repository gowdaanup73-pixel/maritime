import React from 'react';

export interface ConfidenceGaugeProps {
  score: number;
  label?: string;
  size?: number;
}

export const ConfidenceGauge: React.FC<ConfidenceGaugeProps> = ({
  score,
  label = 'CONFIDENCE',
  size = 64,
}) => {
  const percentage = score <= 1 ? Math.round(score * 100) : Math.round(score);
  const color = percentage >= 85 ? '#10B981' : percentage >= 70 ? '#22D3EE' : '#F59E0B';
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(22, 131, 255, 0.15)"
            strokeWidth="5"
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <span className="absolute font-mono text-sm font-bold" style={{ color }}>
          {percentage}%
        </span>
      </div>
      {label && <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">{label}</span>}
    </div>
  );
};
