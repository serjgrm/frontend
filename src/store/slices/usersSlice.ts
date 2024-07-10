import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/types/User';
import { getUsers } from '@/api/users';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as User[],
    loading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      });
  },
});

export const usersReducer = usersSlice.reducer;
