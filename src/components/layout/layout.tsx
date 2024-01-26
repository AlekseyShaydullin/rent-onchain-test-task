import { FC } from 'react';
import { Outlet } from 'react-router';

import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import HeaderLayout from './headerLayout/headerLayout';
import Footer from '../footer/footer';

const Layout: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <HeaderLayout />
        <Sidebar />
        <h1>{'Layout'}</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
