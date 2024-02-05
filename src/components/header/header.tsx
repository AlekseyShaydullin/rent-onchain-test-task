import { FC, useState } from 'react';
import cn from 'classnames';

import style from './header.module.scss';

import Icon from '../ui/icon/icon';
import Typography from '../ui/typography/typography';
import DropdownMenu from '../dropdownMenu/dropdownMenu';
import ButtonCatchId from '../ui/buttons/buttonCatchId/buttonCatchId';

import { menuMore, menuLanguages } from './menuConfig';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';
import { NavLink } from 'react-router-dom';

const Header: FC = (): JSX.Element => {
  const [more, setMore] = useState<string>('More');
  const [language, setLanguage] = useState<string>('ENG');
  const [currency, setCurrency] = useState<string>('€');

  console.log(more);
  console.log(language);
  console.log(currency);

  const getСurrency = (id: string) => {
    setCurrency(id);
  };

  const getSearch = () => {
    console.log('Search');
  };

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logoBlock}>
          <NavLink to={'/'} className={style.logoTitle}>
            <Icon name={'logo'} isColored={false} extraClass={style.logo} />
            <Typography tag={'h1'}>
              {'RENT ONCHAIN | TIMESHARING + RENT'}
            </Typography>
          </NavLink>
          <DropdownMenu
            tag={'span'}
            fontFamily={'primary'}
            option={menuMore}
            iconClass={cn(style.icon, style.icon_color_gray)}
            titleClass={style.titleMore}
            setDropdown={setMore}
            dropdownClass={cn(style.dropdown, style.dropdown__more)}
          />
        </div>
        <div className={style.settingsBlock}>
          <DropdownMenu
            tag={'span'}
            fontFamily={'primary'}
            option={menuLanguages}
            iconClass={cn(style.icon, style.icon_color_white)}
            titleClass={style.titleLanguage}
            setDropdown={setLanguage}
            dropdownClass={cn(style.dropdown, style.dropdown__languages)}
          />
          <div className={style.buttons}>
            <ButtonCatchId
              tag={'h4'}
              fontFamily={'primary'}
              title={'€'}
              buttonClass={cn(
                style.button,
                currency === '€' && style.button_active
              )}
              titleClass={style.buttonTitle}
              color={'black'}
              onClick={getСurrency}
              id={'€'}
            />
            <ButtonCatchId
              tag={'h4'}
              fontFamily={'primary'}
              title={'$'}
              buttonClass={cn(
                style.button,
                currency === '$' && style.button_active
              )}
              titleClass={style.buttonTitle}
              color={'black'}
              onClick={getСurrency}
              id={'$'}
            />
          </div>
          <ButtonIcon
            icon={'search'}
            isColored
            extraClass={cn(style.icon, style.icon_color_white)}
            onClick={getSearch}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
