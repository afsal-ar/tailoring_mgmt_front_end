import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchOrdersRequest } from '../store/slices/orderSlice';

const CustomerPortal: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((s:RootState)=>s.auth);
  const orders = useSelector((s:RootState)=>s.orders.items);

  useEffect(()=>{ dispatch(fetchOrdersRequest({ page: 1 })); }, [dispatch]);

  const my = orders.filter(o => o.customerId === auth.user?.customerId);

  return (
    <div>
      <h4>Customer Portal</h4>
      {my.length===0 && <p>No orders found for your account.</p>}
      {my.map((o:any)=> (
        <div className="card mb-2 p-2" key={o.id}>
          <div><strong>{o.orderNumber}</strong> - {o.garmentType}</div>
          <div className="text-muted">Due: {o.dueDate}</div>
        </div>
      ))}
    </div>
  );
};

export default CustomerPortal;
