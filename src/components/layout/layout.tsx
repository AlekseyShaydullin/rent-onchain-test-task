import { FC } from 'react';
import { Outlet } from 'react-router';

import style from './layout.module.scss';

import Header from '../header/header';
import HeaderLayout from './headerLayout/headerLayout';
import Footer from '../footer/footer';
import Sidebar from '../sidebar/sidebar';

interface ILayout {
  screen: boolean;
}

const Layout: FC<ILayout> = ({ screen }): JSX.Element => {
  console.log(`Layout - ${screen}`);

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
      <Footer screen={screen} />
    </>
  );
};

export default Layout;
