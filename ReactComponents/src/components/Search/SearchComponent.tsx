import { FaSearch } from 'react-icons/fa';
import React from 'react';
import s from './SearchComponent.module.scss';

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  refLink: React.RefObject<HTMLInputElement>;
}

const SearchComponent: React.FC<Props> = ({ handleSubmit, refLink }) => {
  return (
    <div className={s.wrap}>
      <form data-testid="search-form" onSubmit={handleSubmit} className={s.search}>
        <input
          ref={refLink}
          type="text"
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
