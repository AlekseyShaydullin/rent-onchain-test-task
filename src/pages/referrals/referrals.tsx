import { FC, useState } from 'react';

import style from './referrals.module.scss';

import Typography from '../../components/ui/typography/typography';
import ReferralCodes from '../../components/referrals/referral-codes/referral-codes';
import Result from '../../components/referrals/result/result';
import Statistics from '../../components/referrals/statistics/statistics';

import { optionsReports, optionsResult } from './configReferrals';

interface IReferrals {
  screen: boolean;
}

const Referrals: FC<IReferrals> = ({ screen }): JSX.Element => {
  const [phrase, setPhrase] = useState<string>('');

  console.log(`Referrals - ${screen}`);

  return (
    <section className={style.referrals}>
      <Typography tag="h2" fontFamily="primary" color={'white'}>
        {'MY REFERRALS'}
      </Typography>
      <div className={style.cards}>
        <ReferralCodes phrase={phrase} setPhrase={setPhrase} />
        <div className={style.results}>
          {optionsResult.map((options, index) => (
            <Result options={options} key={index} />
          ))}
        </div>
      </div>
      <Statistics phrase={phrase} options={optionsReports} />
    </section>
  );
};

export default Referrals;
