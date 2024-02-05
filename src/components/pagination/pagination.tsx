import { Dispatch, FC, SetStateAction, useState } from 'react';
import cn from 'classnames';

import style from './pagination.module.scss';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';
import PaginationItem from '../ui/pagination-item/pagination-item';

interface IPagination {
  referralsPerPage: number;
  totalReferrals: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination: FC<IPagination> = ({
  referralsPerPage,
  totalReferrals,
  currentPage,
  setCurrentPage,
}): JSX.Element => {
  const [sequence, setSequence] = useState<number>(1); // Число с которого начинается отсчёт в строке пагиинации
  const pageNumbers = [];
  const pageLimit = Math.ceil(totalReferrals / referralsPerPage);

  // Функция отвечающая за выбор страницы
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  /*
   ** Переопределяем Цифры строки пагинации
   */

  // Если у нас 5 страниц:
  if (pageLimit <= 5) {
    for (let i = 1; i <= pageLimit; i++) {
      pageNumbers.push(i);
    }
  }
  // Если выбрана страница в конце списка
  else if (sequence >= pageLimit - 4 && sequence !== pageLimit) {
    for (let i = pageLimit - 4; i <= pageLimit; i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = sequence; i <= sequence + 2; i++) {
      pageNumbers.push(i);
    }
  }

  /*
   ** Задаём число с которого начинается отсчёт в строке пагиинации
   ** Задаём число выбранной страницы
   */
  const paginateSequence = (pageNumber: number) => {
    if (pageNumber === 0) {
      return;
    }
    if (pageNumber > pageLimit) {
      return;
    }
    if (pageNumber === pageLimit) {
      setCurrentPage(pageNumber);
      return;
    }
    setSequence(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.pagination}>
      <ButtonIcon
        icon={'chevron-pag'}
        isColored
        extraClass={cn(style.pagination__icon, style.pagination__icon_start)}
        onClick={() => paginateSequence(currentPage - 1)}
      />

      {/* Если в блоке до 5 страниц */}
      {pageLimit <= 5 ? (
        <ul className={style.pagination__items}>
          {pageNumbers.map((page, index) => (
            <PaginationItem
              page={page}
              currentPage={currentPage}
              paginate={paginate}
              key={index}
            />
          ))}
        </ul>
      ) : (
        <>
          {/* Если в блоке больше 5 страниц */}
          <ul className={style.pagination__items}>
            {/* Начальная часть строки пагинации */}
            <>
              {pageNumbers.map((page, index) => (
                <PaginationItem
                  page={page}
                  currentPage={currentPage}
                  paginate={paginate}
                  key={index}
                />
              ))}

              {/* Закрывающая часть строки пагинации с '...' и номером последней страницы */}
              {pageLimit - 5 >= sequence && (
                <>
                  <PaginationItem
                    sequence={sequence}
                    paginateSequence={paginateSequence}
                    rewind={true}
                  />
                  <PaginationItem
                    page={pageLimit}
                    currentPage={currentPage}
                    paginate={paginate}
                  />
                </>
              )}
            </>
          </ul>
        </>
      )}

      <ButtonIcon
        icon={'chevron-pag'}
        isColored
        extraClass={cn(style.pagination__icon, style.pagination__icon_end)}
        onClick={() => paginateSequence(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
