import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer { id?:number; firstName?:string; lastName?:string; email?:string; phone?:string; address?:string; }
interface CustomerState { items:Customer[]; loading:boolean; error:string|null; }
const initialState:CustomerState = { items:[], loading:false, error:null };

const slice = createSlice({
  name:'customers',
  initialState,
  reducers:{
    fetchCustomersRequest:(s)=>{s.loading=true;},
    fetchCustomersSuccess:(s,a:PayloadAction<Customer[]>)=>{s.loading=false; s.items=a.payload;},
    fetchCustomersFailure:(s,a:PayloadAction<string>)=>{s.loading=false; s.error=a.payload;}
  }
});

export const { fetchCustomersRequest, fetchCustomersSuccess, fetchCustomersFailure } = slice.actions;
export default slice.reducer;
