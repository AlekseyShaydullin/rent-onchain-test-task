import { FC } from 'react';
import cn from 'classnames';

import style from './result.module.scss';
import Typography from '../../ui/typography/typography';
import { IOptionsResult } from '../../../utils/types/common';

interface IResult {
  options: IOptionsResult;
}

const Result: FC<IResult> = ({ options }): JSX.Element => {
  return (
    <div
      className={cn(
        style.result,
        options.currency !== '' ? style.result_orange : style.result_green
      )}
    >
      <Typography
        tag="p"
        fontFamily="primary"
        extraClass={style.result_text}
        color={'black'}
      >
        {options.title}
      </Typography>
      <div className={style.result__values}>
        <Typography tag="span" fontFamily="primary" color={'black'}>
          {options.value}
        </Typography>
        {options.currency !== '' && (
          <div className={style.result__wrapper}>
            <Typography
              tag="span"
              fontFamily="primary"
              extraClass={style.result__currency}
              color={'black'}
            >
              {options.currency}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
