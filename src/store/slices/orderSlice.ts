import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Measurement { neck?:number; shoulder?:number; chest?:number; waist?:number; hip?:number; inseam?:number; armLength?:number; }
interface Order { id?:number; orderNumber?:string; customerId?:number; garmentType?:string; fabricType?:string; status?:number; priority?:number; orderDate?:string; dueDate?:string; totalAmount?:number; advancePaid?:number; measurements?:Measurement }
interface OrderState { items: Order[]; current: Order|null; loading:boolean; error:string|null; page:number; pageSize:number; }

const initialState: OrderState = { items: [], current:null, loading:false, error:null, page:1, pageSize:9 };

const slice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    fetchOrdersRequest: (s, a: PayloadAction<{ page?: number }|undefined>) => { s.loading = true; },
    fetchOrdersSuccess: (s, a: PayloadAction<Order[]>) => { s.loading=false; s.items=a.payload; },
    fetchOrdersFailure: (s, a: PayloadAction<string>) => { s.loading=false; s.error=a.payload; },
    createOrderRequest: (s, a: PayloadAction<Partial<Order>>) => { s.loading = true; },
    createOrderSuccess: (s, a: PayloadAction<Order>) => { s.loading=false; s.items=[a.payload,...s.items]; }
  }
});

export const { fetchOrdersRequest, fetchOrdersSuccess, fetchOrdersFailure, createOrderRequest, createOrderSuccess } = slice.actions;
export default slice.reducer;
