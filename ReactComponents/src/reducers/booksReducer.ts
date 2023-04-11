import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const booksSlice = createSlice({
  name: 'enemy',
  initialState,
  reducers: {
    addEnemyToBoard(state, actions) {},
  },
});

export const { addEnemyToBoard } = booksSlice.actions;
export default booksSlice.reducer;
