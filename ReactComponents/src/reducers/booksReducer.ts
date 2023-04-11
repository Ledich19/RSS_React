import { createSlice } from '@reduxjs/toolkit';
import { GoogleBook } from 'app/types';

type State = {
  books: GoogleBook[];
};
interface Actions {
  type: string;
}
interface SetAllBooks extends Actions {
  payload: GoogleBook[];
}

const initialState: State = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setAllBooks(state, actions: SetAllBooks) {
      return { ...state, books: actions.payload };
    },
  },
});

export const { setAllBooks } = booksSlice.actions;
export default booksSlice.reducer;
