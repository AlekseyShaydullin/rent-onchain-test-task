import { Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import cn from 'classnames';

import style from './dropdownMenu.module.scss';

import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';
import Menu from '../ui/menu/menu';
import { IOptions } from '../../utils/types/common';

interface IDropdownMenu {
  option: Array<IOptions>;
  iconClass: string;
  titleClass: string;
  setDropdown: Dispatch<SetStateAction<string>>;
}

const DropdownMenu: FC<IDropdownMenu> = ({
  option,
  iconClass,
  titleClass,
  setDropdown,
}): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [checkOption, setCheckOption] = useState<string>(option[0].value);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Переключатель Дропдауна
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  // Собираем информацию из Дропдауна
  const handleOptionClick = (e: string, options: Array<IOptions>) => {
    const optionClick = options.find((option) => option.value === e);
    const valueClick = optionClick!.value;
    setShowDropDown(false);
    setCheckOption(valueClick);
    setDropdown(valueClick);
  };

  // Определям тайтл дропдауна
  const titleMenuMore = option.find((option) => option.value === checkOption);

  return (
    <div className={style.dropdownMenu}>
      <ButtonIconText
        icon="chevron"
        tag="span"
        title={titleMenuMore!.value}
        iconClass={cn(!showDropDown ? style.icon : style.iconOpen, iconClass)}
        titleClass={titleClass}
        isColored
        iconFirst={false}
        onClick={toggleDropDown}
        ref={buttonRef}
      />
      {showDropDown && (
        <Menu
          ref={menuRef}
          options={option}
          onItemClick={(e) => handleOptionClick(e.value, option)}
          layoutClassName={style.dropdown}
          itemClassName={style.itemParent}
          iconClass={style.iconClass}
          checkOption={checkOption}
        />
      )}
    </div>
  );
};

export default DropdownMenu;
