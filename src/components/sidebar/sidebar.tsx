import { ChangeEvent, FC, useState } from 'react';

import style from './sidebar.module.scss';

import Icon from '../ui/icon/icon';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';
import Typography from '../ui/typography/typography';
import { optionsCard } from './cardConfig';
import Card from './card/card';

const Sidebar: FC = (): JSX.Element => {
  const [valueInput, setValueInput] = useState<string>('0x454657···7897');
  // const [open, setOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const handleDrawerClose = () => {
    console.log('Close');
  };

  const getTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  return (
    <section className={style.sidebar}>
      <div className={style.headerSidebar}>
        <Typography tag={'p'} extraClass={style.title} color={'white'}>
          {'MY MENU'}
        </Typography>
        <ButtonIcon
          icon={'close'}
          isColored
          extraClass={style.icon}
          buttonClass={style.button}
          onClick={handleDrawerClose}
        />
      </div>
      <div className={style.userHeader}>
        <label className={style.label} htmlFor={'input'}>
          <input
            className={style.input}
            value={valueInput}
            onChange={getTextInput}
            id={'input'}
          />
        </label>
        <Icon name={'notifications'} isColored extraClass={style.icon} />
      </div>
      <div className={style.cards}>
        {optionsCard.map((options, index) => {
          return <Card options={options} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Sidebar;
