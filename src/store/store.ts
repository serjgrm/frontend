import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { fundsFilterReducer } from './slices/fundsFilterSlice';
import { fundsReducer } from './slices/fundsSlice';

export const store = configureStore({
  reducer: {
    fundsFilter: fundsFilterReducer,
    fundsData: fundsReducer,
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
