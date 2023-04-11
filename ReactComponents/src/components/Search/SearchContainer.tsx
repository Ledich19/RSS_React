import React from 'react';
import SearchComponent from './SearchComponent';
import booksService from '../../services/books';
import { useAppDispatch, useAppSelector } from './../../app/hooks';
import { setError, setIslLoad, setSearch } from './../../reducers/searchReducer';
import { setAllBooks } from './../../reducers/booksReducer';

const SearchContainer = () => {
  const { search } = useAppSelector((store) => store.searchText);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setSearch(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      try {
        dispatch(setIslLoad(true));

        const data = await booksService.getAll(search);
        dispatch(setAllBooks(data.items));
        dispatch(setError(null));

        dispatch(setIslLoad(false));
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setIslLoad(false));
          dispatch(setError(error.message));
        } else {
          dispatch(setError(`Unknown error occurred: ${error}`));
        }
      }
    })();
  };

  return <SearchComponent value={search} handleSubmit={handleSubmit} handleChange={handleChange} />;
};
export default SearchContainer;
