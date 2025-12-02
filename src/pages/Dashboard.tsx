import React, { useEffect } from 'react';
import StatsCard from '../components/dashboard/StatsCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersRequest } from '../store/slices/orderSlice';
import { fetchCustomersRequest } from '../store/slices/customerSlice';
import { RootState } from '../store';
import OrderCard from '../components/orders/OrderCard';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((s:RootState)=>s.orders.items);
  const customers = useSelector((s:RootState)=>s.customers.items);

  useEffect(()=>{
    dispatch(fetchOrdersRequest({ page: 1 }));
    dispatch(fetchCustomersRequest());
  }, [dispatch]);

  return (
    <div>
      <div className="row g-3 mb-3">
        <div className="col-md-3"><StatsCard title="Total Orders" value={orders.length} /></div>
        <div className="col-md-3"><StatsCard title="Customers" value={customers.length} /></div>
        <div className="col-md-3"><StatsCard title="In Progress" value={orders.filter(o=>o.status && o.status<7).length} /></div>
        <div className="col-md-3"><StatsCard title="Completed" value={orders.filter(o=>o.status && o.status>=7).length} /></div>
      </div>

      <h5 className="mb-3">Recent Orders</h5>
      {orders.map(o=> <OrderCard key={o.id} order={o} />)}
    </div>
  );
};

export default Dashboard;
