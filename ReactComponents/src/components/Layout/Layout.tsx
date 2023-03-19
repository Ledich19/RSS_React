import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

interface Props {
  setSearchState: (value: string) => void;
}

export default class Layout extends Component<Props> {
  render() {
    return (
      <div>
        <Header setSearchState={this.props.setSearchState} />
        <Outlet />
      </div>
    );
  }
}
