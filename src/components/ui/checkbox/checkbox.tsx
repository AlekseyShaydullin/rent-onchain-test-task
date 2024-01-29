import { Dispatch, FC, SetStateAction } from 'react';

import style from './checkbox.module.scss';

interface ICheckbox {
  /**
   * Состояние чекбокса
   */
  checked: boolean;
  /**
   * Экшен состояния Чекбокса
   */
  setChecked: Dispatch<SetStateAction<boolean>>;
}

/**
 * UI Компонент - Checkbox
 * @example
 * <Checkbox
 *   checked={checked}
 *   setChecked={setChecked}
 * />
 */
const Checkbox: FC<ICheckbox> = ({
  checked,
  setChecked,
  ...rest
}): JSX.Element => {
  return (
    <label className={style.checkbox}>
      <input
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className={
          checked === true ? style.customСheckboxDone : style.customСheckbox
        }
        {...rest}
      />
      <span className={style.cust} />
    </label>
  );
};

export default Checkbox;
