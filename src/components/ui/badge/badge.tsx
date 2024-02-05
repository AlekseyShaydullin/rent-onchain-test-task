import { FC } from 'react';
import cn from 'classnames';

import style from './badge.module.scss';

import Icon from '../icon/icon';
import Typography from '../typography/typography';

interface IBadge {
  title: string;
  titleClass: string;
  colorTitle: string;
  wrapperClass: string;
  backgroundColor: string;
  icon: string;
  iconClass: string;
  isColored: boolean;
}

const Badge: FC<IBadge> = ({
  title,
  titleClass,
  icon,
  iconClass,
  colorTitle,
  wrapperClass,
  backgroundColor,
  isColored,
}): JSX.Element => {
  return (
    <div className={style.badge}>
      <Icon name={icon} isColored={isColored} extraClass={iconClass} />
      <div
        className={cn(
          style.wrapper,
          wrapperClass,
          backgroundColor && style[`color_${backgroundColor}`]
        )}
      >
        <Typography
          tag="span"
          fontFamily="secondary"
          extraClass={cn(titleClass)}
          color={colorTitle}
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default Badge;
