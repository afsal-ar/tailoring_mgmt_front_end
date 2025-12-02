import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchOrdersRequest, fetchOrdersSuccess, fetchOrdersFailure, createOrderRequest, createOrderSuccess } from '../slices/orderSlice';
// import api from '../../api/axiosConfig';

function* fetchOrders(action:any) {
  try {
    // Replace with: const res = yield call(api.get, '/orders', { params: { page: action.payload?.page }});
    const sample = [
      { id:1, orderNumber:'ORD-20251201-001', customerId:1, garmentType:'Three-Piece Suit', fabricType:'Wool Blend', status:4, priority:1, orderDate:'2025-11-24', dueDate:'2025-12-09', totalAmount:450, advancePaid:200 }
    ];
    yield put(fetchOrdersSuccess(sample));
  } catch (err:any) {
    yield put(fetchOrdersFailure(err.message || 'Failed to fetch orders'));
  }
}

function* createOrder(action:any) {
  try {
    // const res = yield call(api.post, '/orders', action.payload);
    const created = { id: Math.floor(Math.random()*100000), ...action.payload };
    yield put(createOrderSuccess(created));
  } catch (err:any) {
    yield put(fetchOrdersFailure(err.message || 'Create order failed'));
  }
}

export default function* orderSaga() {
  yield takeLatest(fetchOrdersRequest.type, fetchOrders);
  yield takeLatest(createOrderRequest.type, createOrder);
}
