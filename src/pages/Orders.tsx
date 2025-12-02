import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersRequest } from '../store/slices/orderSlice';
import { RootState } from '../store';
import OrderCard from '../components/orders/OrderCard';
import { Link } from 'react-router-dom';

const Orders: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((s:RootState)=>s.orders.items);

  useEffect(()=>{ dispatch(fetchOrdersRequest({ page: 1 })); }, [dispatch]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Orders</h4>
        <Link to="/orders/new" className="btn btn-primary">New Order</Link>
      </div>
      {orders.map(o=> <OrderCard key={o.id} order={o} />)}
    </div>
  );
};

export default Orders;
