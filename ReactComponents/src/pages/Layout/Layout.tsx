import React, { PureComponent } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

interface Props {
  setSearchState: (value: string) => void;
}

export default class Layout extends PureComponent<Props> {
  render() {
    const { setSearchState } = this.props;
    return (
      <div>
        <Header setSearchState={setSearchState} />
        <Outlet />
      </div>
    );
  }
}
