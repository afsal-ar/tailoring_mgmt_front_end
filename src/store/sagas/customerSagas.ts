import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchCustomersRequest, fetchCustomersSuccess, fetchCustomersFailure } from '../slices/customerSlice';
// import api from '../../api/axiosConfig';

function* load() {
  try {
    const sample = [{ id:1, firstName:'John', lastName:'Doe', email:'john@example.com', phone:'555-0101' }];
    yield put(fetchCustomersSuccess(sample));
  } catch (err:any) {
    yield put(fetchCustomersFailure(err.message || 'Failed to fetch customers'));
  }
}

export default function* customerSaga() {
  yield takeLatest(fetchCustomersRequest.type, load);
}
