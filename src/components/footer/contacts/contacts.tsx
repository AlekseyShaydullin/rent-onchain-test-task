import { FC, Fragment } from 'react';

import style from './contacts.module.scss';

import Typography from '../../ui/typography/typography';

import { IOptionsContacts } from '../../../utils/types/common';

interface IContacts {
  optionsContacts: Array<IOptionsContacts>;
}

const Contacts: FC<IContacts> = ({ optionsContacts }): JSX.Element => {
  return (
    <div className={style.contacts}>
      <Typography tag={'p'} fontFamily={'primary'} color={'black'}>
        {'CONTACT US'}
      </Typography>
      <div className={style.office}>
        {optionsContacts.map((options, index) => {
          return (
            <Fragment key={index}>
              <Typography tag={'h3'} fontFamily={'secondary'} color={'black'}>
                {options.title}
              </Typography>
              <Typography
                tag={'h3'}
                fontFamily={'secondary'}
                extraClass={style.titleAddress}
                color={'black'}
              >
                {options.description}
              </Typography>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
