import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import booksReducer from '../reducers/booksReducer';

export const store = configureStore({
  reducer: {
    search: booksReducer,
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
