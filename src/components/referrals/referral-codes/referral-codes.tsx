import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';

import style from './referral-codes.module.scss';

import Typography from '../../ui/typography/typography';
import Wallet from '../wallet/wallet';
import Referral from '../referral/referral';
import FormReferral from '../../ui/forms/formReferral/formReferral';

import { optionsReferrals } from '../../../pages/referrals/configReferrals';

interface IReferralCodes {
  phrase: string;
  setPhrase: Dispatch<SetStateAction<string>>;
}

const ReferralCodes: FC<IReferralCodes> = ({
  phrase,
  setPhrase,
}): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>('');

  const handelFocus = () => {
    setFocus(true);
  };

  const getValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPhrase(valueInput);
  };

  return (
    <div className={style.codes}>
      <Typography
        tag="p"
        fontFamily="primary"
        extraClass={style.titleCodes}
        color={'black'}
      >
        {'referral codes'}
      </Typography>
      {optionsReferrals.map((options, index) => {
        return <Wallet options={options} key={index} />;
      })}
      <div className={style.special}>
        <Typography
          tag="p"
          fontFamily="secondary"
          extraClass={style.special__text}
          color={'black'}
        >
          {'Special phrase'}
        </Typography>
        {phrase !== '' ? (
          <Referral value={phrase} />
        ) : (
          <FormReferral
            focus={focus}
            handelFocus={handelFocus}
            getValueInput={getValueInput}
            onSubmit={onSubmit}
          />
        )}
      </div>
      <a href={'#'} className={style.link} target={'_blank'}>
        {'More information about the referral program'}
      </a>
    </div>
  );
};

export default ReferralCodes;
