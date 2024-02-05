import { FC } from 'react';
import { Outlet } from 'react-router';

import style from './layout.module.scss';

import Header from '../header/header';
import HeaderLayout from './headerLayout/headerLayout';
import Footer from '../footer/footer';
import Sidebar from '../sidebar/sidebar';

const Layout: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <HeaderLayout />
        <div className={style.wrapper}>
          <Sidebar />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
