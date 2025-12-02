import { takeLatest, put } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "../slices/authSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* login(
  action: PayloadAction<{
    username: string;
    password: string;
    role: "Admin" | "Customer";
  }>
) {
  try {
    // Simulated backend response
    const res = {
      data: {
        user: {
          username: action.payload.username,
          role: action.payload.role,   // 👈 FIXED HERE
          customerId:
            action.payload.role === "Customer" ? 1 : null // optional
        },
        token: "demo-token"
      }
    };

    yield put(loginSuccess(res.data));
  } catch (err: any) {
    yield put(loginFailure(err.message || "Login failed"));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, login);
}