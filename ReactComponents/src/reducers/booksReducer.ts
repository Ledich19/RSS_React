import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleBook } from 'app/types';
import booksService from './../services/books';

type State = {
  books: GoogleBook[];
  status: string | null;
  error: string | null;
};
interface Actions {
  type: string;
}

const initialState: State = {
  books: [],
  status: null,
  error: null,
};

export const fetchGetBooks = createAsyncThunk(
  'books/fetchGetBooks',
  async (search: string, { rejectWithValue }) => {
    try {
      const books = await booksService.getAll(search);
      return books.items;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(`Unknown error occurred: ${error}`);
      }
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetBooks.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchGetBooks.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.error = null;
      state.books = action.payload;
      console.log(state.status);
    });
    builder.addCase(fetchGetBooks.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    });
  },
});

export const {} = booksSlice.actions;

export default booksSlice.reducer;
