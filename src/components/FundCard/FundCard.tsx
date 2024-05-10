import './FundCard.scss';
import cn from 'classnames';
import { Button } from '@/ui/Button';

interface Props {
  classNames?: string;
  title: string;
  endDate: string;
}

export const FundCard: React.FC<Props> = ({ classNames, title, endDate }) => {
  const className = cn(
    classNames,
    'fund-card'
  )

  const donation = () => {
    return 'donation'
  }

  return (
    <article className={className}>
      <h6 className='fund-card__title'>{title}</h6>
      <div className='fund-card__date'>
        <p>Дата завершення збору</p>
        <span>{endDate}</span>
      </div>
      <Button 
        callback={donation} 
        classNames='fund-card__button'
        isPrimary={true}
      >
        ЗАДОНАТИТИ
      </Button>
    </article>
  );
};
