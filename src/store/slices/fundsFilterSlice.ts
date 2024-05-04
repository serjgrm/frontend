import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterFunds } from '@/types/FilterFunds';

export const fundsFilterSlice = createSlice({
  name: 'author',
  initialState: FilterFunds.ALL,
  reducers: {
    setFundsFilterState(_, action: PayloadAction<FilterFunds>) {
      return action.payload;
    },
  },
});

export const { setFundsFilterState } = fundsFilterSlice.actions;
export const fundsFilterReducer = fundsFilterSlice.reducer;