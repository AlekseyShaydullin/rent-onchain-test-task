import { FC } from 'react';

import style from './empty.module.scss';
import Typography from '../../../ui/typography/typography';

const Empty: FC = (): JSX.Element => {
  return (
    <div className={style.empty}>
      <Typography
        tag={'p'}
        fontFamily={'secondary'}
        extraClass={style.empty__description}
        color={'white'}
      >
        {'You have no referrals yet.'}
      </Typography>
      <Typography
        tag={'p'}
        fontFamily={'secondary'}
        extraClass={style.empty__description}
        color={'white'}
      >
        {'To invite users, share any referral link with them.'}
      </Typography>
      <Typography
        tag={'p'}
        fontFamily={'secondary'}
        extraClass={style.empty__description}
        color={'violet'}
      >
        {'More information about the referral program'}
      </Typography>
    </div>
  );
};

export default Empty;
