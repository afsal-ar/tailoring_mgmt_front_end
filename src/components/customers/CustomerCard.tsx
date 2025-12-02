import React from 'react';

const CustomerCard: React.FC<{ customer:any }> = ({ customer }) => {
  return (
    <div className="card mb-2 p-2">
      <div><strong>{customer.firstName} {customer.lastName}</strong></div>
      <div className="text-muted small">{customer.email} • {customer.phone}</div>
    </div>
  );
};

export default CustomerCard;
