import { useEffect, useState } from 'react';
import './FundsList.scss';
import cn from 'classnames';
import funds from '../../funds-imitation.json';
import { Fund } from '../Fund';

interface Props {
  classNames?: string;
  limit: number;
}

interface Fund {
  id: number,
  title: string,
  endDate: string,
}

export const FundsList: React.FC<Props> = ({ classNames, limit }) => {
  const [visibleFunds, setVisibleFunds] = useState<Fund[] | []>([]);

  useEffect(() => {
    const limitedFunds = funds.slice(0, limit);
    setVisibleFunds(limitedFunds);
  }, [limit]); 
  
  const className = cn(
    classNames,
  )

  return (
    <div className={className}>
      {visibleFunds.map(fund => (
        <Fund key={fund.id} title={fund.title} endDate={fund.endDate} />
      ))}
    </div>
  );
};
