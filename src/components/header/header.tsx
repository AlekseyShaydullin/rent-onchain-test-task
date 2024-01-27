import { FC, useState } from 'react';
import cn from 'classnames';

import style from './header.module.scss';

import Icon from '../ui/icon/icon';
import Typography from '../ui/typography/typography';
import DropdownMenu from '../dropdownMenu/dropdownMenu';

import { menuMore, menuLanguages } from './menuConfig';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';

const Header: FC = (): JSX.Element => {
  const [more, setMore] = useState<string>('More');
  const [language, setLanguage] = useState<string>('ENG');

  console.log(more);
  console.log(language);

  return (
    <header className={style.header}>
      <div className={style.logoBlock}>
        <div className={style.logoTitle}>
          <Icon name={'logo'} isColored={false} extraClass={style.logo} />
          <Typography tag={'h1'}>
            {'RENT ONCHAIN | TIMESHARING + RENT'}
          </Typography>
        </div>
        <DropdownMenu
          option={menuMore}
          iconClass={cn(style.icon, style.icon_color_gray)}
          titleClass={style.titleMore}
          setDropdown={setMore}
        />
      </div>
      <div className={style.settingsBlock}>
        <DropdownMenu
          option={menuLanguages}
          iconClass={cn(style.icon, style.icon_color_white)}
          titleClass={style.titleLanguage}
          setDropdown={setLanguage}
        />
        <div className={style.buttons}>
          <ButtonIconText
            tag={'h4'}
            title={'€'}
            buttonClass={style.button}
            color={'black'}
          />
          <ButtonIconText
            tag={'h4'}
            title={'$'}
            buttonClass={style.button}
            color={'black'}
          />
        </div>
        <Icon
          name={'search'}
          isColored
          extraClass={cn(style.icon, style.icon_color_white)}
        />
      </div>
    </header>
  );
};

export default Header;