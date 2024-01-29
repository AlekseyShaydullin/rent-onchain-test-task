import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import style from './menuNav.module.scss';

import Typography from '../../ui/typography/typography';
import { IOptionsNav } from '../../../utils/types/common';

interface IMenu {
  optionsNav: Array<IOptionsNav>;
}

const MenuNav: FC<IMenu> = ({ optionsNav }): JSX.Element => {
  return (
    <div className={style.menu}>
      <Typography tag={'p'} fontFamily={'primary'} color={'black'}>
        {'MENU'}
      </Typography>
      <div className={style.nav}>
        {optionsNav.map((options, index) => {
          return (
            <NavLink to={options.link} className={style.navLink} key={index}>
              <Typography
                tag={'p'}
                fontFamily={'secondary'}
                extraClass={style.titleNav}
                color={'black'}
              >
                {options.title}
              </Typography>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MenuNav;
