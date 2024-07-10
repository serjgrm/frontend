import './FundsPage.scss';
import cn from 'classnames';
import { FundsFilter } from '@/components/FundsFilter';
import { PaginationList } from '@/components/PaginationList';
import { FundsList } from '@/components/FundsList';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect, useMemo, useState } from 'react';
import { getFunds } from '@/api/funds';
import { FundType } from '@/types/Fund';
import { FilterFunds } from '@/types/FilterFunds';
import { NavigationTitle } from '@/components/NavigationTitle';
import { setMobileModalState } from '../../store/slices/mobileModalSlice';

interface Props {
  classNames?: string,
}

export const FundsPage: React.FC<Props> = ({ classNames }) => {
  const className = cn('funds-page', classNames);

  const [limit, setLimit] = useState(12);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const funds = useAppSelector(data => data.fundsData.funds);
  const fundsFilter = useAppSelector(data => data.fundsFilter);
  const [totalPages, setTotalPages] = useState(0);
  const [fundsPages, setFundsPages] = useState<FundType[][]>([]);

  const filteredFunds = useMemo(() => {
    switch (fundsFilter) {
      case FilterFunds.DRONES:
        return funds.filter(fund => fund.category === FilterFunds.DRONES);
      case FilterFunds.CARS_REPAIR:
        return funds.filter(fund => fund.category === FilterFunds.CARS_REPAIR);
      case FilterFunds.INJURED_SUPPORT:
        return funds.filter(fund => fund.category === FilterFunds.INJURED_SUPPORT);
      case FilterFunds.CHILDREN_SUPPORT:
        return funds.filter(fund => fund.category === FilterFunds.CHILDREN_SUPPORT);
      case FilterFunds.ANIMALS_SUPPORT:
        return funds.filter(fund => fund.category === FilterFunds.ANIMALS_SUPPORT);
      case FilterFunds.ANOTHER:
        return funds.filter(fund => fund.category === FilterFunds.ANOTHER);
      case FilterFunds.ALL:
      default:
        return funds;
    }
  }, [fundsFilter, funds]);

  useEffect(() => {
    dispatch(setMobileModalState(false));
    dispatch(getFunds());
  }, [dispatch]);

  useEffect(() => {
    if (filteredFunds) {
      const totalPages = Math.ceil(filteredFunds.length / limit);
      setTotalPages(totalPages);

      const pages = [];
      for (let i = 0; i < filteredFunds.length; i += limit) {
        pages.push(filteredFunds.slice(i, i + limit));
      }
      setFundsPages(pages);
    }
  }, [filteredFunds, limit]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setLimit(windowWidth <= 688 ? 6 : 12);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleFunds = useMemo(() => {
    return fundsPages[currentPage - 1] || fundsPages[0];
  }, [currentPage, fundsPages]);

  return (
    <div className={className}>
      <NavigationTitle url='/frontend'>Усі збори</NavigationTitle>
      <hr className="funds-page__hr hr" />
      <FundsFilter classNames='funds-page__filter' />
      {visibleFunds && (
        <FundsList
          classNames='funds-page__list'
          limit={limit}
          visibleFunds={visibleFunds}
        />
      )}
      {totalPages > 1 && (
        <PaginationList
          classNames='funds-page__pagination-list'
          limit={limit}
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};
