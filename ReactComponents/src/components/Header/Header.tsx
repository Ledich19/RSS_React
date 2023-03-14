import React, { Component } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import SearchContainer from '../Search/SearchContainer';

interface Props {
  setSearchState: (value: string) => void;
}

export default class Header extends Component<Props> {
  render() {
    return (
      <div className={s.header}>
        <div className={s.list}>
          <Link to={`/`}>Home</Link>
          <Link to={`about`}>About us</Link>
          <Link to={`books/1`}>404</Link>
        </div>
        <SearchContainer
          data-testid="search-container"
          setSearchState={this.props.setSearchState}
        />
      </div>
    );
  }
}
