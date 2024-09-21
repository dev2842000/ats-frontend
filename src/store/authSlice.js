// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userId: null,
  },
  reducers: {
    setAuthData(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    clearAuthData(state) {
      state.token = null;
      state.userId = null;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
