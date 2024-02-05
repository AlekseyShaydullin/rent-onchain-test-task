import { FC } from 'react';

import style from './referral.module.scss';

import Typography from '../../ui/typography/typography';
import Icon from '../../ui/icon/icon';

interface IReferral {
  value: string;
}

const Referral: FC<IReferral> = ({ value }): JSX.Element => {
  return (
    <div className={style.referral}>
      <Typography
        tag="span"
        fontFamily="secondary"
        extraClass={style.referral__number}
        color={'black'}
      >
        {value}
      </Typography>
      <div className={style.icons}>
        <Icon name={'copy'} isColored extraClass={style.referral__icon} />
        <Icon
          name={'external-link'}
          isColored
          extraClass={style.referral__icon}
        />
      </div>
    </div>
  );
};

export default Referral;
