import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction } from 'react';
import cn from 'classnames';

import style from './formFooter.module.scss';

import Checkbox from '../../checkbox/checkbox';
import Typography from '../../typography/typography';
import ButtonIconText from '../../buttons/buttonIconText/buttonIconText';

interface IForm {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  onSubmit: (e: FormEvent<HTMLButtonElement>) => void;
}

const FormFooter: FC<IForm> = ({
  email,
  setEmail,
  message,
  setMessage,
  checked,
  setChecked,
  onSubmit,
}): JSX.Element => {
  const getEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const getMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <Typography
        tag={'p'}
        fontFamily={'primary'}
        color={'black'}
        extraClass={style.text}
      >
        {`Do you need help? Do you have doubts? Send your email and we'll be in touch with you!`}
      </Typography>
      <form className={style.form}>
        <input
          className={style.input}
          type="email"
          value={email}
          placeholder={'E-MAIL'}
          onChange={(e) => getEmail(e)}
          required
        />
        <input
          className={style.input}
          type="text"
          value={message}
          placeholder={'HOW CAN WE HELP YOU?'}
          onChange={(e) => getMessage(e)}
          required
        />
        <div className={style.privacy}>
          <Checkbox checked={checked} setChecked={setChecked} />
          <Typography
            tag={'span'}
            fontFamily={'secondary'}
            extraClass={style.privacyText}
            color={'black'}
          >
            {'I agree with a '}
          </Typography>
          <Typography
            tag={'span'}
            fontFamily={'secondary'}
            extraClass={cn(style.privacyText, style.privacyText_underline)}
            color={'black'}
          >
            {'Privacy Policy'}
          </Typography>
        </div>
        <ButtonIconText
          tag="h2"
          fontFamily={'primary'}
          title={'SEND'}
          buttonClass={style.button}
          titleClass={style.titleButton}
          color={'white'}
          onClick={onSubmit}
        />
      </form>
    </>
  );
};

export default FormFooter;
