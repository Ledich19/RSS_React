import { createSlice } from '@reduxjs/toolkit';
import { InfoData } from 'app/types';

type State = {
  formBooks: InfoData[];
};
interface Actions {
  type: string;
}

interface AddToFormBook extends Actions {
  payload: InfoData[];
}

const initialState: State = {
  formBooks: [],
};

const formBooksSlice = createSlice({
  name: 'formBooks',
  initialState,
  reducers: {
    addABookToFormBooks(state, actions: AddToFormBook) {
      return { ...state, formBooks: state.formBooks.concat(actions.payload) };
    },
  },
});

export const { addABookToFormBooks } = formBooksSlice.actions;
export default formBooksSlice.reducer;
