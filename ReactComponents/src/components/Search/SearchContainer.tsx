import React from 'react';
import SearchComponent from './SearchComponent';
import { useAppDispatch, useAppSelector } from './../../app/hooks';
import { setSearch, setSearchText } from './../../reducers/searchReducer';

const SearchContainer = () => {
  const { text } = useAppSelector((store) => store.searchText);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setSearchText(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearch(text));
  };

  return <SearchComponent value={text} handleSubmit={handleSubmit} handleChange={handleChange} />;
};
export default SearchContainer;
