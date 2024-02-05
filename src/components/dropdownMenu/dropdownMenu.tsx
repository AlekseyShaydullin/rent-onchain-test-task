import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';

import style from './dropdownMenu.module.scss';

import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';
import Menu from '../ui/menu/menu';
import { IOptions } from '../../utils/types/common';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';

interface IDropdownMenu {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
  fontFamily: 'primary' | 'secondary';
  option: Array<IOptions>;
  iconClass: string;
  titleClass: string;
  dropdownClass: string;
  setDropdown: Dispatch<SetStateAction<string>>;
}

const DropdownMenu: FC<IDropdownMenu> = ({
  tag,
  fontFamily,
  option,
  iconClass,
  titleClass,
  dropdownClass,
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
  const handleOptionClick = useCallback(
    (e: string, options: Array<IOptions>) => {
      const optionClick = options.find((option) => option.value === e);
      const valueClick = optionClick!.value;
      setShowDropDown(false);
      setCheckOption(valueClick);
      setDropdown(valueClick);
    },
    [setDropdown]
  );

  // Определям тайтл дропдауна
  const titleMenuMore = option.find((option) => option.value === checkOption);

  // Хук отвечающий за закрытие дропдауна
  useOutsideClickAndEscape(
    menuRef,
    document,
    () => {
      setShowDropDown(false);
    },
    buttonRef
  );

  return (
    <div className={style.dropdownMenu}>
      <ButtonIconText
        icon="chevron"
        tag={tag}
        fontFamily={fontFamily}
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
          layoutClassName={dropdownClass}
          itemClassName={style.itemParent}
          iconClass={style.iconClass}
          checkOption={checkOption}
        />
      )}
    </div>
  );
};

export default DropdownMenu;
