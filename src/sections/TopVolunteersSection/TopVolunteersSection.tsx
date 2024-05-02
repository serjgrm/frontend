import cn from 'classnames';
import './TopVolunteersSection.scss';
import { TopVolunteersList } from '@/components/TopVolunteersList';

interface Props {
  classNames?: string;
}

export const TopVolunteersSection: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'top-volunteers'
  )

  return (
    <section className={className}>
      <h3 className='top-volunteers__title'>
        ТОП волонтерів
      </h3>
      <TopVolunteersList classNames='top-volunteers__list' limit={6} />
    </section>
  );
};
