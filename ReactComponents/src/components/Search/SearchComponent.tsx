import { FaSearch } from 'react-icons/fa';
import React from 'react';
import s from './SearchComponent.module.scss';

interface Props {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchComponent: React.FC<Props> = ({ value, handleInputChange, handleSubmit }) => {
  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit} className={s.search}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
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
