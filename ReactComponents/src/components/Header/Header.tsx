import React from 'react';
import s from './Header.module.scss';
import { NavLink, Routes, Route } from 'react-router-dom';
import SearchContainer from '../Search/SearchContainer';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useAppSelector } from './../../app/hooks';

const Header: React.FC = () => {
  const { islLoad } = useAppSelector((store) => store.searchText);
  return (
    <div className={s.header}>
      <div className={s.list}>
        <NavLink to="/app" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
          Home
        </NavLink>
        <NavLink to="/about" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
          About us
        </NavLink>
        <NavLink to="/blank" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
          Add book
        </NavLink>
      </div>
      <MagnifyingGlass
        visible={islLoad}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translate(-50%, 0)',
        }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
      <Routes>
        <Route path="/app" element={<SearchContainer data-testid="search-container" />} />
      </Routes>
    </div>
  );
};

export default Header;
