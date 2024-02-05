import { FC } from 'react';
import cn from 'classnames';

import style from './card.module.scss';

import Typography from '../../ui/typography/typography';
import Icon from '../../ui/icon/icon';
import { IOptionsCard } from '../cardConfig';
import { NavLink } from 'react-router-dom';

interface ICard {
  options: IOptionsCard;
}

const Card: FC<ICard> = ({ options }): JSX.Element => {
  return (
    <div className={style.card}>
      <Typography
        tag={'span'}
        fontFamily={'secondary'}
        extraClass={style.title}
        color={'darkGray'}
      >
        {options.title}
      </Typography>
      <ul className={style.stringWrapper}>
        {options.fields.map((field, index) => {
          return (
            <li className={style.field} key={index}>
              <NavLink to={'/'} className={style.nav}>
                <Icon
                  name={field.icon}
                  isColored
                  extraClass={cn(
                    style.icon,
                    field.currentPage && style.icon_active
                  )}
                />
                <Typography
                  tag={'p'}
                  fontFamily={'secondary'}
                  extraClass={cn(
                    style.fieldTitle,
                    field.currentPage && style.fieldTitle_active
                  )}
                  color={'white'}
                >
                  {field.title}
                </Typography>
                {field.approved && (
                  <div className={style.approvedWrapper}>
                    <Typography
                      tag={'span'}
                      fontFamily={'secondary'}
                      extraClass={style.approvedTitle}
                      color={'white'}
                    >
                      {'Approved'}
                    </Typography>
                    <Icon
                      name={'check'}
                      isColored
                      extraClass={style.approvedIcon}
                    />
                  </div>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
