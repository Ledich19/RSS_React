import { createSlice } from '@reduxjs/toolkit';
import { GoogleBook, InfoData } from 'app/types';

type State = {
  search: string;
  books: GoogleBook[];
  formBooks: InfoData[];
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
interface AddToFormBook extends Actions {
  payload: InfoData[];
}

const initialState: State = {
  search: '1111111111',
  books: [],
  formBooks: [],
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
    addABookToFormBooks(state, actions: AddToFormBook) {
      return { ...state, formBooks: state.formBooks.concat(actions.payload) };
    },
  },
});

export const { setSearch, setAllBooks, addABookToFormBooks } = booksSlice.actions;
export default booksSlice.reducer;
