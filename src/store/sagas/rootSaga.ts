import { all, fork } from 'redux-saga/effects';
import authSaga from './authSagas';
import orderSaga from './orderSagas';
import customerSaga from './customerSagas';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(orderSaga), fork(customerSaga)]);
}
