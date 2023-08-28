import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

type Props = {
  islLoad: boolean;
};

const Layout = ({ islLoad }: Props) => {
  return (
    <div>
      <Header islLoad={islLoad} />
      <Outlet />
    </div>
  );
};

export default Layout;
