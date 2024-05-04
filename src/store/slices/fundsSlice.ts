import { createSlice } from '@reduxjs/toolkit';
import { FundType } from '@/types/Fund';
import { getFunds } from '@/api/funds';

export const fundsSlice = createSlice({
  name: 'funds',
  initialState: {
    funds: [] as FundType[],
    loading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFunds.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFunds.fulfilled, (state, action) => {
        state.loading = false;
        state.funds = action.payload;
      })
      .addCase(getFunds.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      });
  },
});

export const fundsReducer = fundsSlice.reducer;
