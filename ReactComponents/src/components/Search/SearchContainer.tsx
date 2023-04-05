import React, { useEffect, useState, useRef, useContext } from 'react';
import SearchComponent from './SearchComponent';
import booksService from '../../services/books';
import { BookDataContext } from './../../context';

const SearchContainer = () => {
  const searchRef = useRef<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const { setBooks, setError, setIslLoad } = useContext(BookDataContext);

  const getBooks = async (value: string) => {
    try {
      setIslLoad(true);
      const data = await booksService.getAll(value);
      setBooks(data.items);
      setError(null);
      setIslLoad(false);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setError(error.message);
      } else {
        setError(`Unknown error occurred: ${error}`);
      }
    }
  };

  useEffect(() => {
    const data = localStorage.getItem('searchString');
    if (data) {
      setSearchValue(data);
    }
  }, []);

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('searchString', searchRef.current);
    getBooks(searchValue);
  };

  return (
    <SearchComponent
      value={searchValue}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default SearchContainer;
