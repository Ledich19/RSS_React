import { createSlice } from '@reduxjs/toolkit';

type State = {
  text: string;
  search: string;
};
interface Actions {
  type: string;
}
interface SetSearch extends Actions {
  payload: string;
}
interface SetSearchText extends Actions {
  payload: string;
}

const initialState: State = {
  text: '',
  search: '',
};

const searchSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearch(state, actions: SetSearch) {
      return { ...state, search: actions.payload };
    },
    setSearchText(state, actions: SetSearchText) {
      return { ...state, text: actions.payload };
    },
  },
});

export const { setSearch, setSearchText } = searchSlice.actions;
export default searchSlice.reducer;
