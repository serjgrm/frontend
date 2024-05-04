import funds from '../funds-imitation.json';
import { FundType } from '@/types/Fund';
import { client } from '@/utils/fetchClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFunds = createAsyncThunk('fetchFunds', async () => {
  const imitationData = await client.get<FundType[]>(`/posts`);
  
  return imitationData && funds
});