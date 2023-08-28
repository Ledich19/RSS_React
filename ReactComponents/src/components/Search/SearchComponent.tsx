import { FaSearch } from 'react-icons/fa';
import React from 'react';
import s from './SearchComponent.module.scss';

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchComponent: React.FC<Props> = ({ handleChange, handleSubmit, value }) => {
  return (
    <div className={s.wrap}>
      <form data-testid="search-form" onSubmit={handleSubmit} className={s.search}>
        <input
          value={value}
          type="text"
          className={s.searchTerm}
          placeholder="What are you looking for?"
          onChange={handleChange}
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
