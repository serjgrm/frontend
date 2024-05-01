import cn from 'classnames';
import './FundraisersSection.scss';
import funds from '../../funds-imitation.json';
import { useEffect, useState } from 'react';
import { Fund } from '@/components/Fund';
import { Button } from '@/ui/Button';

interface Props {
  classNames?: string;
  limit: number;
}

interface Fund {
  id: number,
  title: string,
  endDate: string,
}

export const FundraisersSection: React.FC<Props> = ({ classNames, limit }) => {
  const className = cn(
    classNames,
    'fundraisers'
  );

  const [visibleFunds, setVisibleFunds] = useState<Fund[] | []>([]);

  useEffect(() => {
    const limitedFunds = funds.slice(0, limit);
    setVisibleFunds(limitedFunds);
  }, [limit]); 

  const lookAllFunds = () => {
    return 'Look all funds'
  }

  return (
    <section className={className}>
      <h3 className='fundraisers__title'>
        Підтримайте збори наших волонтерів
      </h3>
      <div className="fundraisers__content">
        {visibleFunds.map((fund, index) => (
          <Fund key={index} title={fund.title} endDate={fund.endDate} />
        ))}
      </div>
      <Button 
        classNames='fundraisers__button' 
        callback={lookAllFunds}
      >
        Переглянути усі збори
      </Button>
    </section>
  );
};
