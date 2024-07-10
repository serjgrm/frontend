import { User } from '@/types/User';
import { client } from '@/utils/fetchClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('fetchUsers', async () => {
  const data = await client.get<User[]>(`/users`);
  
  return data
});