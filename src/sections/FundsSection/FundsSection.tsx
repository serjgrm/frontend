import cn from 'classnames';
import './FundsSection.scss';
import { Button } from '@/ui/Button';
import { FundsList } from '@/components/FundsList';
import { getFunds } from '@/api/funds';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { FundType } from '@/types/Fund';
import { useState, useEffect } from 'react';

interface Props {
  classNames?: string;
}

export const FundsSection: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'funds'
  );
  const limit = 6;
  const lookAllFunds = () => {
    return 'Look all funds'
  }

  const [visibleFunds, setVisibleFunds] = useState<FundType[] | []>([]);
  const funds = useAppSelector(data => data.fundsData.funds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFunds());
    const limitedFunds = funds.slice(0, limit);
    
    setVisibleFunds(limitedFunds);
  }, [limit, dispatch, funds]);

  return (
    <section className={className}>
      <h3 className='funds__title'>
        Підтримайте збори наших волонтерів
      </h3>
      <FundsList classNames='funds__list' visibleFunds={visibleFunds} />
      <Button 
        classNames='funds__button' 
        callback={lookAllFunds}
      >
        Переглянути усі збори
      </Button>
    </section>
  );
};
