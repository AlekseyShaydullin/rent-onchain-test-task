import { ChangeEvent, FC, FormEvent } from 'react';
import cn from 'classnames';

import style from './formReferral.module.scss';
import ButtonIcon from '../../buttons/buttonIcon/buttonIcon';

interface IFormReferral {
  focus: boolean;
  handelFocus: () => void;
  getValueInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLButtonElement>) => void;
}

const FormReferral: FC<IFormReferral> = ({
  focus,
  handelFocus,
  getValueInput,
  onSubmit,
}) => {
  return (
    <form className={style.form}>
      <input
        type="text"
        placeholder="MAKE UP A PHRASE"
        className={cn(style.form__input, focus && style.form__input_focus)}
        onFocus={handelFocus}
        onChange={getValueInput}
      />
      <ButtonIcon
        icon={focus ? 'check-form' : 'add-plus'}
        isColored
        extraClass={cn(focus ? style.form__iconCheck : style.form__iconAdd)}
        buttonClass={cn(focus && style.form__button)}
        onClick={onSubmit}
      />
    </form>
  );
};

export default FormReferral;
