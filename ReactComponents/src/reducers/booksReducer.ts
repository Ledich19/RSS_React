import { createSlice } from '@reduxjs/toolkit';
import { GoogleBook } from 'app/types';

type State = {
  search: string;
  books: GoogleBook[];
};
interface Actions {
  type: string;
}
interface SetSearch extends Actions {
  payload: string;
}
interface SetAllBooks extends Actions {
  payload: GoogleBook[];
}

const initialState: State = {
  search: '',
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSearch(state, actions: SetSearch) {
      return { ...state, search: actions.payload };
    },
    setAllBooks(state, actions: SetAllBooks) {
      return { ...state, books: actions.payload };
    },
  },
});

export const { setSearch, setAllBooks } = booksSlice.actions;
export default booksSlice.reducer;
