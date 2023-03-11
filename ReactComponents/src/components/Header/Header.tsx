import Search from '../Search/Search';
import React, { Component } from 'react';
import s from './Header.module.scss';
import { Outlet, Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className={s.header}>
        <div className={s.list}>
          <Link to={`/`}>Home</Link>
          <Link to={`about`}>About us</Link>
          <Link to={`books/1`}>404</Link>
        </div>
        <Search />
      </div>
    );
  }
}
