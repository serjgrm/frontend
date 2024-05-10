import './FundsList.scss';
import cn from 'classnames';
import { FundCard } from '../FundCard';
import { FundType } from '@/types/Fund';

interface Props {
  classNames?: string;
  limit?: number;
  visibleFunds: FundType[];
}

export const FundsList: React.FC<Props> = ({ classNames, visibleFunds }) => {
  const className = cn(
    classNames,
    'funds-list'
  )  

  return (
    <div className={className}>
      {visibleFunds.map(fund => {
        return <FundCard key={fund.id} title={fund.title} endDate={fund.endDate} />
      })}
    </div>
  );
};
