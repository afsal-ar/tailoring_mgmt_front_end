import React, { useEffect } from 'react';
import OrderForm from '../components/orders/OrderForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomersRequest } from '../store/slices/customerSlice';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

const NewOrder: React.FC = () => {
  const dispatch = useDispatch();
  const customers = useSelector((s:RootState)=>s.customers.items);
  const navigate = useNavigate();

  useEffect(()=>{ dispatch(fetchCustomersRequest()); },[dispatch]);

  return (
    <div>
      <h4>Create New Order</h4>
      <div className="card p-3">
        <OrderForm customers={customers} onCreated={()=>navigate('/orders')} />
      </div>
    </div>
  );
};

export default NewOrder;
