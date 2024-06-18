import { createSlice } from '@reduxjs/toolkit';

export const authModalSlice = createSlice({
  name: 'auth-modal',
  initialState: false,
  reducers: {
    setAuthModalState(_, action) {
      return action.payload
    },
  },
});

export const { setAuthModalState } = authModalSlice.actions;
export const authModalReducer = authModalSlice.reducer;