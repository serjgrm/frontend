import { useAppSelector } from '@/store/hooks';
import './PaginationList.scss';
import cn from 'classnames';
import { PaginationItem } from '@/ui/PaginationItem';
import { PaginationArrowBack } from '@/ui/PaginationItem/PaginationArrowBack.tsx';
import { PaginationArrowForward } from '@/ui/PaginationItem/PaginationArrowForward';
import { useState } from 'react';

interface Props {
  classNames?: string;
  limit: number;
}


export const PaginationList: React.FC<Props> = ({ classNames, limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const fonds = useAppSelector(data => data.fundsData.funds)
  const totalPages = Math.ceil((fonds.length) / limit);

  const className = cn(
    classNames,
    'pagination'
  )
  
  const pagesArray: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }

  const renderPageNumbers = () => {
    const visiblePages = 5;
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

    return pagesArray.slice(start - 1, end).map(page => (
      <PaginationItem 
        key={page} 
        callBack={() => setCurrentPage(page)}
        currentPage={currentPage}
      >
        {page}
      </PaginationItem>
    ));
  };
  
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

  return (
    <div className={className}>
      <PaginationArrowBack
        callBack={handleBack}
        currentPage={currentPage}
      />
      {renderPageNumbers()}
      {totalPages > currentPage && <PaginationItem>...</PaginationItem>}
      <PaginationArrowForward 
        callBack={handleForward}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};
