import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

interface Props {
  setSearchState: (value: string) => void;
}

const Layout = ({ setSearchState }: Props) => {
  return (
    <div>
      <Header setSearchState={setSearchState} />
      <Outlet />
    </div>
  );
};

export default Layout;
