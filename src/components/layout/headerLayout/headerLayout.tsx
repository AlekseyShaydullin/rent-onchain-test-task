import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import style from './headerLayout.module.scss';

import Typography from '../../ui/typography/typography';
import DropdownMenu from '../../dropdownMenu/dropdownMenu';

import { optionsHelp, optionsNav } from './config';
import ButtonIconText from '../../ui/buttons/buttonIconText/buttonIconText';

const HeaderLayout: FC = (): JSX.Element => {
  const [help, setHelp] = useState<string>('ENG');

  console.log(help);

  const getAccess = () => {
    console.log('ACCESS');
  };

  return (
    <section className={style.headerLayout}>
      <div className={style.wrapper}>
        <div className={style.navWrapper}>
          {optionsNav.map((option, index) => {
            return (
              <NavLink to={option.link} className={style.navLink} key={index}>
                <Typography
                  tag={'h4'}
                  fontFamily={'primary'}
                  extraClass={style.titleClass}
                  color={'white'}
                >
                  {option.title}
                </Typography>
              </NavLink>
            );
          })}
          <NavLink to={'/'} className={style.navLink}>
            <DropdownMenu
              tag={'h4'}
              fontFamily={'primary'}
              option={optionsHelp}
              iconClass={cn(style.icon, style.icon_color_white)}
              titleClass={style.titleClass}
              setDropdown={setHelp}
              dropdownClass={cn(style.dropdown, style.dropdown__help)}
            />
          </NavLink>
        </div>
        <ButtonIconText
          tag={'h5'}
          fontFamily={'primary'}
          title={'ACCESS'}
          buttonClass={style.button}
          onClick={getAccess}
        />
      </div>
    </section>
  );
};

export default HeaderLayout;
