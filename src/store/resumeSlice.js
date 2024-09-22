import { createSlice } from "@reduxjs/toolkit";
import dummy from '../data/dummy'
const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    info: dummy,
  },
  reducers: {
    setResumeInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setResumeInfo } = resumeSlice.actions;
export default resumeSlice.reducer; // Ensure default export is the reducer function
