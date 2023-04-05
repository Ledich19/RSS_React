import { FaSearch } from 'react-icons/fa';
import React from 'react';
import s from './SearchComponent.module.scss';

interface Props {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const SearchComponent: React.FC<Props> = ({ value, handleInputChange, handleSearch }) => {
  const handleInputChangeLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
  };

  const handleSearchLocal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className={s.wrap}>
      <form onSubmit={handleSearchLocal} className={s.search}>
        <input
          type="text"
          value={value}
          onChange={handleInputChangeLocal}
          className={s.searchTerm}
          placeholder="What are you looking for?"
        />
        <button type="submit" data-testid="searchBtn-testId" className={s.searchButton}>
          <div className={s.icon}>
            <FaSearch />
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
