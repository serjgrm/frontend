import cn from 'classnames';
import { Button } from '@/ui/Button';
import './HeroSection.scss';

interface Props {
  classNames?: string;
}

export const HeroSection: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'hero'
  )

  const help = () => {
    return 1
  }

  return (
    <section className={className}>
      <h1 className='hero__title'>
        Об’єднуємо волонтерів та небайдужих допомогти
      </h1>
      <Button 
        callback={help} 
        classNames='hero__button'
        isPrimary={true}
      >
        ДОПОМОГТИ
      </Button>
    </section>
  );
};
