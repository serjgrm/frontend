import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { fundsFilterReducer } from './slices/fundsFilterSlice';
import { fundsReducer } from './slices/fundsSlice';
import { mobileModalReducer } from './slices/mobileModalSlice';
import { authModalReducer } from './slices/authModalSlice';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    fundsFilter: fundsFilterReducer,
    fundsData: fundsReducer,
    mobileModal: mobileModalReducer,
    authModal: authModalReducer,
    usersData: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
