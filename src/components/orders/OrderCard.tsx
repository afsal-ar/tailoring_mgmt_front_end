import React from 'react';

const OrderCard: React.FC<{ order:any }> = ({ order }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <h6 className="mb-1">{order.orderNumber} — {order.garmentType}</h6>
            <div className="text-muted small">Fabric: {order.fabricType} • Due: {order.dueDate}</div>
          </div>
          <div className="text-end">
            <span className="badge bg-info">Priority {order.priority}</span>
            <div className="mt-2"><small>Status: Stage {order.status}</small></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
