import React from 'react';
import s from './SearchComponent.module.css';
import { FaSearch } from 'react-icons/fa';

interface Props {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const SearchComponent: React.FC<Props> = ({ value, handleInputChange, handleSearch }) => {
  return (
    <div className={s.wrap}>
      <div className={s.search}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className={s.searchTerm}
          placeholder="What are you looking for?"
        />
        <button data-testid="searchBtn-testId" onClick={handleSearch} className={s.searchButton}>
          <div className={s.icon}>
            <FaSearch />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
