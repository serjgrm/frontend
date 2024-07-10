import funds from '../data-imitation/funds.json';
// import { FundType } from '@/types/Fund';
// import { client } from '@/utils/fetchClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFunds = createAsyncThunk('fetchFunds', async () => {
  return funds
});