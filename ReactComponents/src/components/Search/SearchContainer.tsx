import React, { useEffect, useContext } from 'react';
import SearchComponent from './SearchComponent';
import booksService from '../../services/books';
import { BookDataContext } from '../../app/context';
import { useAppDispatch, useAppSelector } from './../../app/hooks';
import { setSearch } from './../../reducers/searchReducer';
import { setAllBooks } from './../../reducers/booksReducer';

const SearchContainer = () => {
  const { search } = useAppSelector((store) => store.searchText);
  const dispatch = useAppDispatch();

  const { setError, setIslLoad } = useContext(BookDataContext);

  useEffect(() => {
    (async () => {
      try {
        setIslLoad(true);
        const data = await booksService.getAll(search);
        dispatch(setAllBooks(data.items));
        // setBooks(data.items);
        setError(null);
        setIslLoad(false);
      } catch (error) {
        if (error instanceof Error) {
          setIslLoad(false);
          setError(error.message);
        } else {
          setError(`Unknown error occurred: ${error}`);
        }
      }
    })();
  }, [setError, setIslLoad, search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setSearch(e.target.value));
  };

  return <SearchComponent value={search} handleChange={handleChange} />;
};
export default SearchContainer;
