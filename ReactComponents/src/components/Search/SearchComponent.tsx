import { FaSearch } from 'react-icons/fa';
import React, { Component } from 'react';
import s from './SearchComponent.module.css';

interface Props {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

class SearchComponent extends Component<Props> {
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { handleInputChange } = this.props;
    handleInputChange(e);
  };

  handleSearch = () => {
    const { handleSearch } = this.props;
    handleSearch();
  };

  render() {
    const { value } = this.props;
    return (
      <div className={s.wrap}>
        <div className={s.search}>
          <input
            type="text"
            value={value}
            onChange={this.handleInputChange}
            className={s.searchTerm}
            placeholder="What are you looking for?"
          />
          <button
            type="button"
            data-testid="searchBtn-testId"
            onClick={this.handleSearch}
            className={s.searchButton}
          >
            <div className={s.icon}>
              <FaSearch />
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
