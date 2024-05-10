import cn from 'classnames';
import './FundsSection.scss';
import { Button } from '@/ui/Button';
import { FundsList } from '@/components/FundsList';
import { getFunds } from '@/api/funds';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { FundType } from '@/types/Fund';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  classNames?: string;
}

export const FundsSection: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'funds'
  );
  const limit = 6;
    
  const navigate = useNavigate();

  const navigateToFunds = () => {
    navigate('/frontend/funds-page')
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
        callback={navigateToFunds}
      >
        Переглянути усі збори
      </Button>
    </section>
  );
};
