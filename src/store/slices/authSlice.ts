import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id?: number;
  username?: string;
  email?: string;
  role?: 'Admin' | 'Customer';
  customerId?: number | null;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ⭐ Updated to accept role
    loginRequest: (
      state,
      action: PayloadAction<{
        username: string;
        password: string;
        role: 'Admin' | 'Customer';
      }>
    ) => {
      state.loading = true;
      state.error = null;
    },

    loginSuccess: (
      state,
      action: PayloadAction<{
        user: User;
        token: string;
      }>
    ) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
    }
  }
});

export const { loginRequest, loginSuccess, loginFailure, logout } = slice.actions;
export default slice.reducer;