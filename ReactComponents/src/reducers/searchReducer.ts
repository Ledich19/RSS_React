import { createSlice } from '@reduxjs/toolkit';

type State = {
  search: string;
  error: string | null;
  islLoad: boolean;
};
interface Actions {
  type: string;
}
interface SetSearch extends Actions {
  payload: string;
}
interface SetError extends Actions {
  payload: string;
}
interface SetIsLoad extends Actions {
  payload: boolean;
}

const initialState: State = {
  search: '',
  error: null,
  islLoad: false,
};

const searchSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearch(state, actions: SetSearch) {
      return { ...state, search: actions.payload };
    },
    setError(state, actions: SetError) {
      return { ...state, error: actions.payload };
    },
    setIslLoad(state, actions: SetIsLoad) {
      return { ...state, islLoad: actions.payload };
    },
  },
});

export const { setSearch, setError, setIslLoad } = searchSlice.actions;
export default searchSlice.reducer;
