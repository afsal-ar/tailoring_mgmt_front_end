import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './slices/authSlice';
import orderReducer from './slices/orderSlice';
import customerReducer from './slices/customerSlice';
import rootSaga from './sagas/rootSaga';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: orderReducer,
    customers: customerReducer
  },
  middleware: (gDM) => gDM({ thunk: false }).concat(saga)
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
