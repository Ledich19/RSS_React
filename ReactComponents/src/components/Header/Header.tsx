import React from 'react';
import s from './Header.module.scss';
import { NavLink, Routes, Route } from 'react-router-dom';
import SearchContainer from '../Search/SearchContainer';

const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.list}>
          <NavLink to="/app" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
            Home
          </NavLink>
          <NavLink to="/blank" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
            Add book
          </NavLink>
          <NavLink to="/about" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
            About us
          </NavLink>
        </div>
        <Routes>
          <Route path="/app" element={<SearchContainer data-testid="search-container" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Header;
