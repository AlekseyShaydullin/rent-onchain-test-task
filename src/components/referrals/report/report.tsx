import { FC } from 'react';
import cn from 'classnames';

import style from './report.module.scss';

import Icon from '../../ui/icon/icon';
import Typography from '../../ui/typography/typography';

import { IOptionsReports, IReferral } from '../../../utils/types/common';
import Image from '../../ui/image/image';

interface IReport {
  report: IOptionsReports | IReferral;
  id: number;
  referral: boolean;
  onClick?: (id: number) => void;
  progeny?: boolean;
  accordion?: number;
}

const Report: FC<IReport> = ({
  report,
  id,
  referral,
  onClick,
  progeny,
  accordion,
}): JSX.Element => {
  return (
    <div
      className={cn(
        style.report,
        referral && style.report_referral,
        progeny && style.report_progeny
      )}
      onClick={onClick && (() => onClick!(id))}
    >
      <div className={style.wrapperTitle}>
        {!referral && (
          <Icon
            name={'chevron'}
            isColored
            extraClass={cn(
              style.report__icon,
              progeny ? style.report__icon_referral : '',
              progeny && accordion === id && style.report__icon_active
            )}
          />
        )}
        <Typography
          tag={'span'}
          fontFamily={'secondary'}
          extraClass={cn(
            style.report__title,
            referral && style.report__title_referral
          )}
          color={'white'}
        >
          {report.title}
        </Typography>
      </div>
      <div className={style.wrapperValues}>
        <Image
          name={
            report.country === 'ESP'
              ? 'spain'
              : report.country === 'UK'
                ? 'greatBritain'
                : report.country === 'DZ'
                  ? 'algeria'
                  : report.country === 'ALB'
                    ? 'albania'
                    : report.country === 'AD'
                      ? 'andorra'
                      : ''
          }
          extraClass={style.report__img}
        />
        <Typography
          tag={'span'}
          fontFamily={'secondary'}
          extraClass={style.value}
          color={'gray'}
        >
          {report.date}
        </Typography>
        <Typography
          tag={'span'}
          fontFamily={'secondary'}
          extraClass={style.value}
          color={'white'}
        >
          {report.sum}
        </Typography>
        <Typography
          tag={'span'}
          fontFamily={'secondary'}
          extraClass={style.value}
          color={'white'}
        >
          {report.bonus}
        </Typography>
      </div>
    </div>
  );
};

export default Report;
