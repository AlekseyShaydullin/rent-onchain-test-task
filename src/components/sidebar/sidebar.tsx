import { ChangeEvent, FC, useState } from 'react';
import cn from 'classnames';

import style from './sidebar.module.scss';

import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';
import Typography from '../ui/typography/typography';
import { optionsCard } from './cardConfig';
import Card from './card/card';
import Badge from '../ui/badge/badge';

const Sidebar: FC = (): JSX.Element => {
  const [valueInput, setValueInput] = useState<string>('0x454657···7897');
  const [isOpen, setOpen] = useState(true);

  const handleSidebar = () => {
    setOpen(!isOpen);
  };

  const getTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

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
            onClick={handleSidebar}
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
