import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    setModalState(_, action) {
      return action.payload
    },
  },
});

export const { setModalState } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;