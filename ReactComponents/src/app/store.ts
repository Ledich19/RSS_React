import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import booksReducer from '../reducers/booksReducer';
import searchReducer from '../reducers/searchReducer';
import formDataReducer from '../reducers/formDataReducer';

export const store = configureStore({
  reducer: {
    searchText: searchReducer,
    searchResult: booksReducer,
    booksForm: formDataReducer,
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
