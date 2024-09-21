import dummy from '@/data/dummy';
import { createSlice } from '@reduxjs/toolkit';

const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    info: dummy, // Keep resume information
  },
  reducers: {
    setResumeInfo: (state, action) => {
      state.info = action.payload; // Set resume info
    },
  },
});

export const { setResumeInfo } = resumeSlice.actions;

export default resumeSlice.reducer;