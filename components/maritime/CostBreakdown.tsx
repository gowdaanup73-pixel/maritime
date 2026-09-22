import React from 'react';

export interface CostItem {
  label: string;
  amount: string | number;
  percentage?: number;
  color?: string;
}

export interface CostBreakdownProps {
  items: CostItem[];
  totalCost: string | number;
  className?: string;
}
export const CostBreakdown: React.FC<CostBreakdownProps> = ({
  items,
  totalCost,
  className = '',
}) => {
  return (
    <div className={`glass rounded-xl p-5 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] font-mono text-cyan tracking-wider uppercase mb-0.5">
            FINANCIAL INTELLIGENCE
          </div>
          <h3 className="font-display font-bold text-base text-slate-100 m-0">Landed Cost Breakdown</h3>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-mono text-slate-400 uppercase">Total Landed Cost</div>
          <div className="font-mono font-bold text-lg text-cyan">{totalCost}</div>
        </div>
      </div>

      {/* Stacked Progress Bar */}
      <div className="w-full h-3 rounded-full overflow-hidden flex bg-ocean-950/80 mb-4 border border-electric/15">
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              width: `${item.percentage || 25}%`,
              backgroundColor: item.color || '#1683FF',
            }}
            className="h-full transition-all duration-500"
          />
        ))}
      </div>

      {/* Legend & Details */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        {items.map((item, idx) => (
          <div key={idx} className="p-2.5 rounded-lg bg-ocean-900/60 border border-electric/10">
            <div className="flex items-center gap-1.5 text-slate-400 mb-1">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color || '#1683FF' }} />
              <span className="truncate">{item.label}</span>
            </div>
            <div className="font-bold text-slate-100 text-sm">{item.amount}</div>
            {item.percentage && (
              <div className="text-[10px] text-slate-500">{item.percentage}% of total</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
