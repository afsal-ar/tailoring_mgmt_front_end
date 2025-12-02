import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createOrderRequest } from '../../store/slices/orderSlice';

const OrderForm: React.FC<{ customers:any[]; onCreated?:()=>void }> = ({ customers, onCreated }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState<any>({
    customerId: customers?.[0]?.id || '',
    garmentType: '', fabricType: '', dueDate: '', priority:2,
    neck:'', shoulder:'', chest:'', waist:'', hip:'', inseam:'', armLength:''
  });

  useEffect(()=>{
    if(customers && customers.length && !form.customerId) setForm((f:any)=>({...f, customerId:customers[0].id}));
  },[customers]);

  const change = (e:any) => setForm((f:any)=>({...f, [e.target.name]: e.target.value}));
  const submit = (e:any) => {
    e.preventDefault();
    const payload = {
      customerId: Number(form.customerId),
      garmentType: form.garmentType,
      fabricType: form.fabricType,
      dueDate: form.dueDate,
      priority: Number(form.priority),
      measurements: {
        neck: Number(form.neck||0), shoulder: Number(form.shoulder||0),
        chest: Number(form.chest||0), waist: Number(form.waist||0),
        hip: Number(form.hip||0), inseam: Number(form.inseam||0),
        armLength: Number(form.armLength||0)
      }
    };
    dispatch(createOrderRequest(payload));
    if(onCreated) onCreated();
  };

  return (
    <form onSubmit={submit}>
      <div className="row">
        <div className="col-md-6 mb-2">
          <label className="form-label">Customer</label>
          <select name="customerId" className="form-select" value={form.customerId} onChange={change}>
            {customers?.map((c:any)=>(<option key={c.id} value={c.id}>{c.firstName} {c.lastName}</option>))}
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <label className="form-label">Garment</label>
          <input name="garmentType" className="form-control" value={form.garmentType} onChange={change} />
        </div>
        <div className="col-md-3 mb-2">
          <label className="form-label">Due Date</label>
          <input name="dueDate" type="date" className="form-control" value={form.dueDate} onChange={change} />
        </div>
      </div>

      <h6 className="mt-3">Measurements</h6>
      <div className="row g-2">
        <div className="col"><input name="neck" className="form-control" placeholder="Neck" value={form.neck} onChange={change} /></div>
        <div className="col"><input name="shoulder" className="form-control" placeholder="Shoulder" value={form.shoulder} onChange={change} /></div>
        <div className="col"><input name="chest" className="form-control" placeholder="Chest" value={form.chest} onChange={change} /></div>
      </div>
      <div className="row g-2 mt-2">
        <div className="col"><input name="waist" className="form-control" placeholder="Waist" value={form.waist} onChange={change} /></div>
        <div className="col"><input name="hip" className="form-control" placeholder="Hip" value={form.hip} onChange={change} /></div>
        <div className="col"><input name="inseam" className="form-control" placeholder="Inseam" value={form.inseam} onChange={change} /></div>
      </div>
      <div className="row g-2 mt-2">
        <div className="col-md-4"><input name="armLength" className="form-control" placeholder="Arm Length" value={form.armLength} onChange={change} /></div>
        <div className="col-md-8 text-end"><button className="btn btn-primary">Create Order</button></div>
      </div>
    </form>
  );
};

export default OrderForm;
