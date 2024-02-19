import { FC } from 'react';
import cn from 'classnames';

import style from './modal-my-menu.module.scss';

import ModalPopup from '../modal-popup/modal-popup';
import Typography from '../../ui/typography/typography';
import { optionsCard } from '../../sidebar/cardConfig';
import Icon from '../../ui/icon/icon';
import Card from '../../sidebar/card/card';

interface IModalMyMenu {
  closeModal: () => void;
}

const ModalMyMenu: FC<IModalMyMenu> = ({ closeModal }): JSX.Element => {
  return (
    <ModalPopup onClick={closeModal}>
      <>
        <div className={style.header}>
          <Typography tag={'p'} extraClass={style.title} color={'white'}>
            {'MY\u00A0MENU'}
          </Typography>
        </div>
        <ul className={style.cards}>
          {optionsCard.map((options, index) => {
            return (
              <li className={style.menu} key={index}>
                <div className={style.menu__wrapper}>
                  <Icon
                    name={options.icon}
                    isColored
                    extraClass={style.menu__icon}
                  />
                  <Typography
                    tag={'p'}
                    fontFamily={'secondary'}
                    extraClass={cn(style.menu__title)}
                    color={'white'}
                  >
                    {options.title}
                  </Typography>
                  <Icon
                    name={'chevron'}
                    isColored
                    extraClass={cn(style.menu__icon)}
                  />
                </div>
                <div className={style.fields}>
                  {options.fields.map((fields, index) => {
                    return (
                      <Card options={fields} key={index} isOpen={isOpen} />
                    )
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </>
    </ModalPopup>
  );
};

export default ModalMyMenu;
