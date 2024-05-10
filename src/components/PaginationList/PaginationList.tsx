import './PaginationList.scss';
import cn from 'classnames';
import { PaginationItem } from '@/ui/PaginationItem';
import { SetStateAction, Dispatch, useState, useEffect } from 'react';
import { ArrowBack } from '@/svg/ArrowBack';
import { ArrowForward } from '@/svg/ArrowForward';

interface Props {
  classNames?: string;
  limit: number;
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const PaginationList: React.FC<Props> = ({
  classNames,
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const className = cn(
    classNames,
    'pagination-list'
  )
  const [pagesArray, setPagesArray] = useState<number[]>([]);

  useEffect(() => {
    const renderPageNumbers = () => {
      let visiblePages;
      if (totalPages >= 5) {
        visiblePages = 5;
      } else {
        visiblePages = totalPages;
      }
      const half = Math.floor(visiblePages / 2);
      let start = currentPage - half;
      let end = currentPage + half;

      if (start <= 0) {
        start = 1;
        end = visiblePages;
      }

      if (end > totalPages) {
        end = totalPages;
        start = totalPages - visiblePages + 1;
      }

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    setPagesArray(renderPageNumbers());
  }, [currentPage, totalPages]);

  const handleBack = () => {
    setCurrentPage(prevPage => {
      if (prevPage > 1) {
        return prevPage - 1
      } else {
        return 1
      }
    })
  }

  const handleForward = () => {
    setCurrentPage(prevPage => {
      if (prevPage === totalPages) {
        return totalPages
      } else {
        return prevPage + 1
      }
    })
  }

  const checkForTriplet = () => {
    if (totalPages <= 5) {
      return true
    }

    if (currentPage + 2 >= totalPages) {
      return true
    }

    return false
  };

  return (
    <div className={className}>
      <PaginationItem
        callBack={handleBack}
        currentPage={currentPage}
      >
        <ArrowBack currentPage={currentPage} classNames='pagination-list__arrow'/>
      </PaginationItem>
      {pagesArray.map(page => (
        <PaginationItem
          key={page}
          callBack={() => setCurrentPage(page)}
          currentPage={currentPage}
        >
          {page}
        </PaginationItem>
      ))}
      {!checkForTriplet() && <PaginationItem>...</PaginationItem>}
      <PaginationItem
        callBack={handleForward}
        currentPage={currentPage}
      >
        <ArrowForward 
          currentPage={currentPage} 
          totalPages={totalPages}
          classNames='pagination-list__arrow'
        />
      </PaginationItem>
    </div>
  );
};
