import { FC, Fragment, useCallback, useState } from 'react';
import cn from 'classnames';

import style from './reports.module.scss';
import Report from '../report/report';
import { IOptionsReports } from '../../../utils/types/common';

interface IReports {
  reports: Array<IOptionsReports>;
}

const Reports: FC<IReports> = ({ reports }): JSX.Element => {
  const [isActiveAccordion, setActiveAccordion] = useState<boolean>(false);
  const [accordion, setAccordion] = useState(-1);

  const isProgeny = (report: IOptionsReports) => {
    return report.referral.length !== 0 ? true : false;
  };

  const setAccordionState = useCallback(
    (id: number) => {
      if (accordion === id) {
        setAccordion(-1);
        setActiveAccordion(!isActiveAccordion);
        return;
      }
      setAccordion(id);
      setActiveAccordion(true);
    },
    [accordion, isActiveAccordion]
  );

  return (
    <div className={style.reports}>
      {reports.map((report, index) => (
        <Fragment key={index}>
          <Report
            report={report}
            id={index}
            referral={false}
            progeny={isProgeny(report)}
            onClick={setAccordionState}
            accordion={accordion}
          />
          {isActiveAccordion &&
            accordion === index &&
            report.referral.length !== 0 && (
              <div
                className={cn(
                  style.wrapperReferral,
                  accordion === index && style.wrapperReferral_animated
                )}
              >
                {report.referral.length !== 0 &&
                  report.referral.map((referral, index) => (
                    <Report report={referral} key={index} id={index} referral />
                  ))}
              </div>
            )}
        </Fragment>
      ))}
    </div>
  );
};

export default Reports;
