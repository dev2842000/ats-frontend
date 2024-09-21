import { createSlice } from "@reduxjs/toolkit";
import dummy from '../data/dummy'
const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    info: dummy,
  },
  reducers: {
    setResumeInfo: (state, action) => {
      console.log('Dispatched setResumeInfo:', action.payload); // Log the dispatched payload
      state.info = action.payload;
      console.log('Updated state.info:', state.info); // Check if the state update happens correctly
    },
  },
});

export const { setResumeInfo } = resumeSlice.actions;
export default resumeSlice.reducer; // Ensure default export is the reducer function
