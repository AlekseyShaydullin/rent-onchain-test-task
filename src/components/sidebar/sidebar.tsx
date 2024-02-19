import { ChangeEvent, FC, useEffect, useState } from 'react';
import cn from 'classnames';

import style from './sidebar.module.scss';

import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';
import Typography from '../ui/typography/typography';
import { optionsCard } from './cardConfig';
import Card from './card/card';
import Badge from '../ui/badge/badge';

interface ISidebar {
  screen: string;
}

const Sidebar: FC<ISidebar> = ({ screen }): JSX.Element => {
  const [valueInput, setValueInput] = useState<string>('0x454657···7897');
  const [isOpen, setOpen] = useState(true);
  const [isOpenBurger, setOpenBurger] = useState(false);

  const handleSidebar = () => {
    setOpen(!isOpen);
  };

  const handleBurger = () => {
    setOpenBurger(!isOpenBurger);
  };

  const getTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  useEffect(() => {
    if (screen !== 'full') {
      setOpen(false);
    }
  }, [screen]);

  console.log(`isOpenBurger - ${isOpenBurger}`);

  return (
    <section className={cn(style.sidebar, !isOpen && style.sidebar_inactive)}>
      <div className={style.headerSidebar}>
        <>
          <Typography
            tag={'p'}
            extraClass={cn(style.title, !isOpen && style.title_inactive)}
            color={'white'}
          >
            {'MY\u00A0MENU'}
          </Typography>
          <ButtonIcon
            icon={'close'}
            isColored
            extraClass={style.icon}
            buttonClass={cn(style.button, !isOpen && style.button_inactive)}
            onClick={handleSidebar}
          />
          <ButtonIcon
            icon={'burger-down'}
            isColored
            extraClass={style.icon}
            buttonClass={cn(style.button, isOpen && style.button_inactive)}
            onClick={screen !== 'full' ? handleBurger : handleSidebar}
          />
        </>
      </div>
      <div className={style.userHeader}>
        {isOpen && (
          <label className={style.label} htmlFor={'input'}>
            <input
              className={style.input}
              value={valueInput}
              onChange={getTextInput}
              id={'input'}
            />
          </label>
        )}
        <Badge
          title={'3'}
          titleClass={style.badge__title}
          colorTitle={'white'}
          wrapperClass={style.wrapperBadge}
          backgroundColor={'violet'}
          icon={'notifications'}
          iconClass={style.iconBadge}
          isColored
        />
      </div>
      <div className={style.cards}>
        {optionsCard.map((options, index) => {
          return <Card options={options} key={index} isOpen={isOpen} />;
        })}
      </div>
    </section>
  );
};

export default Sidebar;
