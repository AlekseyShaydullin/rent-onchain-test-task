import { FC, useState } from 'react';

import style from './statistics.module.scss';

import Typography from '../../ui/typography/typography';
import Empty from './empty/empty';
import Reports from '../reports/reports';

import { IOptionsReports } from '../../../utils/types/common';
import Pagination from '../../pagination/pagination';

interface IStatistics {
  phrase: string;
  options: Array<IOptionsReports>;
}

const Statistics: FC<IStatistics> = ({ phrase, options }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [referralsPerPage] = useState<number>(10);

  const lastIndex = currentPage * referralsPerPage;
  const firstIndex = lastIndex - referralsPerPage;
  const currentReferrals = options.slice(firstIndex, lastIndex);
  const totalReferrals = options.length;

  return (
    <div className={style.statistics}>
      <div className={style.header}>
        <div className={style.wrapperTitle}>
          <Typography
            tag={'h3'}
            fontFamily={'primary'}
            extraClass={style.header__title}
            color={'white'}
          >
            {'Referral'}
          </Typography>
        </div>
        <div className={style.values}>
          <Typography
            tag={'h3'}
            fontFamily={'primary'}
            extraClass={style.header__title}
            color={'white'}
          >
            {'Date'}
          </Typography>
          <Typography
            tag={'h3'}
            fontFamily={'primary'}
            extraClass={style.header__title}
            color={'white'}
          >
            {'Sum'}
          </Typography>
          <Typography
            tag={'h3'}
            fontFamily={'primary'}
            extraClass={style.header__title}
            color={'white'}
          >
            {'bonus'}
          </Typography>
        </div>
      </div>
      <div className={style.statistic}>
        {phrase === '' ? (
          <Empty />
        ) : (
          <>
            <Reports reports={currentReferrals} />
            {options.length > 10 && (
              <Pagination
                referralsPerPage={referralsPerPage}
                totalReferrals={totalReferrals}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Statistics;
