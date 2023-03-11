import React, { Component } from 'react';
import s from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

interface Props {
  setSearchState: (value: string) => void;
}

interface State {
  value: string;
}

export default class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchString') || '',
    };
  }

  componentWillUnmount() {
    const { value } = this.state;
    console.log(`Value "${value}" was saved to LocalStorage for component `);
    localStorage.setItem('searchString', value);
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };
  handleSearch = () => {
    this.props.setSearchState(this.state.value);
  };

  render() {
    return (
      <div className={s.wrap}>
        <div className={s.search}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
            className={s.searchTerm}
            placeholder="What are you looking for?"
          />
          <button onClick={this.handleSearch} className={s.searchButton}>
            <div className={s.icon}>
              <FaSearch />
            </div>
          </button>
        </div>
      </div>
    );
  }
}
