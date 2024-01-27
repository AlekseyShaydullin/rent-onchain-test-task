import { FC } from 'react';

import style from './menu-item.module.scss';

import Icon from '../icon/icon';

import { IOptions } from '../../../utils/types/common';

interface IMenuItem {
  /**
   * Список опций Меню
   */
  option: IOptions;
  /**
   * callback при клике на опцию Меню
   */
  onClick: (value: string) => void;
  /**
   * Пропс для стилизации Иконки
   */
  iconClass?: string;
  /** Чтобы перезаписать свойства MenuItem, в scss файле родителя повысьте селективность,
   * например: ```div.item { height: 30px;}``` */
  extraClass?: string;
  /**
   * Выбранная опция меню
   */
  checkOption: string;
}

const renderIcon = (
  icon: string | undefined,
  iconClass: string | undefined
) => {
  if (icon) {
    return <Icon name={icon} isColored extraClass={iconClass} />;
  }
  return null;
};

const MenuItem: FC<IMenuItem> = ({
  option,
  onClick,
  iconClass = '',
  extraClass = '',
  checkOption,
}): JSX.Element => {
  return (
    <div
      key={option.value}
      onClick={() => onClick(option.value)}
      className={
        option.value !== checkOption
          ? `${style.item} ${extraClass}`
          : `${style.item} ${extraClass} ${style.check} `
      }
    >
      {' '}
      {option.value}
      {renderIcon(option.icon, iconClass)}
    </div>
  );
};

export default MenuItem;
