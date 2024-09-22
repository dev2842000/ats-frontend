import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState : {
    token: null,
    userId: null,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
  },
});

export const { setAuthData } = authSlice.actions;
export default authSlice.reducer; // Ensure default export is the reducer function
