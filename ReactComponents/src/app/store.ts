import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';
import formDataReducer from '../reducers/formDataReducer';
import { booksApi } from '../services/booksApi';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    searchText: searchReducer,
    booksForm: formDataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
