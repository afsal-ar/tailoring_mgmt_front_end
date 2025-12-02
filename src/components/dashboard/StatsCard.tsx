import React from 'react';

const StatsCard: React.FC<{ title:string; value:number; subtitle?:string }> = ({ title, value, subtitle }) => {
  return (
    <div className="card p-3 h-100">
      <div className="text-muted small">{title}</div>
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-0">{value}</h3>
      </div>
      {subtitle && <div className="text-muted small mt-2">{subtitle}</div>}
    </div>
  );
};

export default StatsCard;
