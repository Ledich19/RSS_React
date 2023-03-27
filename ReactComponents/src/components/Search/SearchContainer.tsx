import React, { useEffect, useState } from 'react';
import SearchComponent from './SearchComponent';

interface Props {
  setSearchState: (value: string) => void;
}

const SearchContainer = ({ setSearchState }: Props) => {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchString') || ''
  );

  useEffect(() => {
    return () => {
      localStorage.setItem('searchString', searchValue);
    };
  }, [searchValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchState(searchValue);
  };

  return (
    <SearchComponent
      value={searchValue}
      handleInputChange={handleInputChange}
      handleSearch={handleSearch}
    />
  );
};
export default SearchContainer;
