import React, { Component } from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import SearchContainer from '../Search/SearchContainer';
import { Routes, Route } from 'react-router-dom';

interface Props {
  setSearchState: (value: string) => void;
}

export default class Header extends Component<Props> {
  render() {
    return (
      <div className={s.header}>
        <div className={s.list}>
          <NavLink to={`/app`} className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
            Home
          </NavLink>
          <NavLink to={`/about`} className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
            About us
          </NavLink>
          <NavLink to={`/blank`} className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
            Add book
          </NavLink>
        </div>
        <Routes>
          <Route
            path="/app"
            element={
              <SearchContainer
                data-testid="search-container"
                setSearchState={this.props.setSearchState}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
