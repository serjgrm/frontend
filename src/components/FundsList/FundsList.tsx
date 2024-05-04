import { useEffect, useState } from 'react';
import './FundsList.scss';
import cn from 'classnames';
import { Fund } from '../Fund';
import { FundType } from '@/types/Fund';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getFunds } from '@/api/funds';

interface Props {
  classNames?: string;
  limit?: number;
}

export const FundsList: React.FC<Props> = ({ classNames, limit = 6 }) => {
  const [visibleFunds, setVisibleFunds] = useState<FundType[] | []>([]);
  const { funds } = useAppSelector(data => data.fundsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFunds());
    const limitedFunds = funds.slice(0, limit);
    
    setVisibleFunds(limitedFunds);
  }, [limit, dispatch, funds]);

  const className = cn(
    classNames,
    'funds-list'
  )

  return (
    <div className={className}>
      {visibleFunds.map(fund => {
        return <Fund key={fund.id} title={fund.title} endDate={fund.endDate} />
      })}
    </div>
  );
};
