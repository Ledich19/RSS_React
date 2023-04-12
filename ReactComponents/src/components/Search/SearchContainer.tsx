import React from 'react';
import SearchComponent from './SearchComponent';
import { useAppDispatch, useAppSelector } from './../../app/hooks';
import { setSearch } from './../../reducers/searchReducer';
import { fetchGetBooks } from '../../reducers/booksReducer';

const SearchContainer = () => {
  const { search } = useAppSelector((store) => store.searchText);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setSearch(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchGetBooks(search));
  };

  return <SearchComponent value={search} handleSubmit={handleSubmit} handleChange={handleChange} />;
};
export default SearchContainer;
