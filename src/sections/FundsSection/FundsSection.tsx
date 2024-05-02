import cn from 'classnames';
import './FundsSection.scss';
import { Button } from '@/ui/Button';
import { FundsList } from '@/components/FundsList';

interface Props {
  classNames?: string;
}

export const FundsSection: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'funds'
  );

  const lookAllFunds = () => {
    return 'Look all funds'
  }

  return (
    <section className={className}>
      <h3 className='funds__title'>
        Підтримайте збори наших волонтерів
      </h3>
      <FundsList classNames='funds__list' limit={6}/>
      <Button 
        classNames='funds__button' 
        callback={lookAllFunds}
      >
        Переглянути усі збори
      </Button>
    </section>
  );
};
