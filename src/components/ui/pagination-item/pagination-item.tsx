import { FC } from 'react';
import cn from 'classnames';

import style from './pagination-item.module.scss';

interface IPaginationItem {
  page?: number;
  currentPage?: number;
  paginate?: (page: number) => void;
  sequence?: number;
  rewind?: boolean;
  paginateSequence?: (pageNumber: number) => void;
}

const PaginationItem: FC<IPaginationItem> = ({
  page,
  currentPage,
  paginate,
  sequence,
  rewind,
  paginateSequence,
}): JSX.Element => {
  const ps = sequence && sequence + 3;

  return (
    <>
      {rewind && paginateSequence && ps ? (
        <li
          className={style.pagination__item}
          onClick={() => paginateSequence(ps)}
        >
          {'...'}
        </li>
      ) : (
        <>
          {paginate && page && (
            <li
              className={cn(
                style.pagination__item,
                currentPage === page && style.pagination__item_active
              )}
              onClick={() => paginate(page)}
            >
              {page}
            </li>
          )}
        </>
      )}
    </>
  );
};

export default PaginationItem;
