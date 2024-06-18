import { createSlice } from '@reduxjs/toolkit';

export const mobileModalSlice = createSlice({
  name: 'mobile-modal',
  initialState: false,
  reducers: {
    setMobileModalState(_, action) {
      return action.payload
    },
  },
});

export const { setMobileModalState } = mobileModalSlice.actions;
export const mobileModalReducer = mobileModalSlice.reducer;