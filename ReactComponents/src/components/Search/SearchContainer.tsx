import React, { useEffect, useState, useRef, useContext } from 'react';
import SearchComponent from './SearchComponent';
import booksService from '../../services/books';
import { BookDataContext } from '../../app/context';

const SearchContainer = () => {
  const inputSearch = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchString') || ''
  );
  const { setBooks, setError, setIslLoad } = useContext(BookDataContext);

  useEffect(() => {
    (async () => {
      try {
        setIslLoad(true);
        const data = await booksService.getAll(searchValue);
        setBooks(data.items);
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
    localStorage.setItem('searchString', searchValue);
  }, [setBooks, setError, setIslLoad, searchValue]);

  useEffect(() => {
    const data = localStorage.getItem('searchString');
    setSearchValue(data || '');
    if (inputSearch.current) {
      inputSearch.current.value = data ?? '';
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('searchString', searchValue);
    setSearchValue(inputSearch.current?.value || '');
  };

  return <SearchComponent refLink={inputSearch} handleSubmit={handleSubmit} />;
};
export default SearchContainer;
