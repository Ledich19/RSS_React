import React, { Component } from 'react';
import s from './Layout.module.scss'; //
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

interface Props {
  setSearchState: (value: string) => void;
}

export default class Layout extends Component<Props> {
  render() {
    return (
      <div className={s.header}>
        <Header setSearchState={this.props.setSearchState} />
        <Outlet />
      </div>
    );
  }
}
