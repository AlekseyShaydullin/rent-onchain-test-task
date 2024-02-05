import { FC } from 'react';

import style from './wallet.module.scss';

import Typography from '../../ui/typography/typography';
import Referral from '../referral/referral';

import { IOptionsReferrals } from '../../../utils/types/common';

interface IWallet {
  options: IOptionsReferrals;
}

const Wallet: FC<IWallet> = ({ options }): JSX.Element => {
  return (
    <div className={style.wallet}>
      <Typography
        tag="p"
        fontFamily="secondary"
        extraClass={style.wallet__text}
        color={'black'}
      >
        {options.title}
      </Typography>
      <Referral value={options.number} />
    </div>
  );
};

export default Wallet;
