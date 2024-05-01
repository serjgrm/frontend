import './Fund.scss';
import cn from 'classnames';
import { Button } from '@/ui/Button';

interface Props {
  classNames?: string;
  title: string;
  endDate: string;
}

export const Fund: React.FC<Props> = ({ classNames, title, endDate }) => {
  const className = cn(
    classNames,
    'fund'
  )

  const donation = () => {
    return 'donation'
  }

  return (
    <article className={className}>
      <h6 className='fund__title'>{title}</h6>
      <div className='fund__date'>
        <p>Дата завершення збору</p>
        <span>{endDate}</span>
      </div>
      <Button 
        callback={donation} 
        classNames='fund__button'
        isPrimary={true}
      >
        Задонатити
      </Button>
    </article>
  );
};
